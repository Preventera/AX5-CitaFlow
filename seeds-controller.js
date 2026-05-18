/**
 * CityFlow-X5 · seeds-controller.js
 * Controleur de switch dynamique entre seeds
 * Version : V1.3 (V2.0 courbe + V2.1 KPI + V2.3 narratives) · 18 mai 2026
 * Editeur : AgenticX5
 *
 * Dependances : seeds-data.js doit etre charge AVANT ce fichier
 */

(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {

    console.log('🚀 seeds-controller.js v1.3 · Initialisation...');

    if (typeof window.SEEDS_DATA === 'undefined') {
      console.error('❌ ERREUR : seeds-data.js non charge.');
      return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const seedFromUrl = urlParams.get('seed');
    let currentSeed = 'A01';

    if (seedFromUrl && window.SEEDS_DATA[seedFromUrl]) {
      currentSeed = seedFromUrl;
      console.log('✓ Seed detecte depuis URL : ' + currentSeed);
    } else {
      console.log('✓ Seed par defaut : A01');
    }

    const selector = document.getElementById('seed-selector');
    if (!selector) {
      console.error('❌ ERREUR : #seed-selector introuvable.');
      return;
    }
    selector.value = currentSeed;
    window.CURRENT_SEED = currentSeed;

    // ========================================================================
    // GENERATEUR SVG : COURBE D'ADOPTION (V2.0)
    // ========================================================================
    function generateAdoptionCurveSVG(seed) {
      const X_LEFT = 60, X_RIGHT = 780;
      const Y_TOP = 40, Y_BOTTOM = 280;
      const WIDTH = X_RIGHT - X_LEFT;
      const HEIGHT = Y_BOTTOM - Y_TOP;

      function toSVG(day, value) {
        const x = X_LEFT + (day / seed.horizon) * WIDTH;
        const y = Y_BOTTOM - (Math.max(0, Math.min(100, value)) / 100) * HEIGHT;
        return { x: x.toFixed(1), y: y.toFixed(1) };
      }

      let svg = '';
      svg += '<line x1="60" y1="40" x2="60" y2="280" stroke="rgba(20,184,166,0.15)" stroke-width="0.5"/>';
      svg += '<line x1="60" y1="280" x2="780" y2="280" stroke="rgba(20,184,166,0.3)" stroke-width="1"/>';

      const yLabels = [
        { pct: 100, y: 44 }, { pct: 80, y: 92 }, { pct: 60, y: 140 },
        { pct: 40, y: 188 }, { pct: 20, y: 236 }, { pct: 0, y: 284 }
      ];
      yLabels.forEach(function(l) {
        svg += '<text x="50" y="' + l.y + '" fill="#64748B" font-size="10" font-family="JetBrains Mono" text-anchor="end">' + l.pct + '%</text>';
      });

      [20, 40, 60, 80, 100].forEach(function(pct) {
        const y = Y_BOTTOM - (pct / 100) * HEIGHT;
        svg += '<line x1="60" y1="' + y + '" x2="780" y2="' + y + '" stroke="rgba(20,184,166,0.05)" stroke-width="0.5" stroke-dasharray="2,4"/>';
      });

      const points = seed.adoptionCurve.map(function(p) { return toSVG(p.day, p.value); });
      const pointsHigh = seed.adoptionCurve.map(function(p) { return toSVG(p.day, p.value + 5); });
      const pointsLow = seed.adoptionCurve.map(function(p) { return toSVG(p.day, p.value - 5); });

      let icPath = 'M ' + pointsHigh.map(function(p) { return p.x + ' ' + p.y; }).join(' L ');
      icPath += ' L ' + pointsLow.slice().reverse().map(function(p) { return p.x + ' ' + p.y; }).join(' L ');
      icPath += ' Z';
      svg += '<path d="' + icPath + '" fill="rgba(20,184,166,0.12)"/>';

      const targetY = (Y_BOTTOM - (seed.metric.target / 100) * HEIGHT).toFixed(1);
      svg += '<line x1="60" y1="' + targetY + '" x2="780" y2="' + targetY + '" stroke="#A78BFA" stroke-width="1" stroke-dasharray="4,4" opacity="0.5"/>';
      svg += '<text x="770" y="' + (parseFloat(targetY) - 4).toFixed(1) + '" fill="#A78BFA" font-size="9.5" font-family="JetBrains Mono" text-anchor="end">Cible ' + seed.metric.target + '%</text>';

      const pathD = 'M ' + points.map(function(p) { return p.x + ' ' + p.y; }).join(' L ');
      svg += '<path d="' + pathD + '" stroke="#2DD4BF" stroke-width="2.5" fill="none" stroke-linecap="round"/>';

      points.forEach(function(p, i) {
        const r = (i === points.length - 1) ? 4 : 3.5;
        svg += '<circle cx="' + p.x + '" cy="' + p.y + '" r="' + r + '" fill="#2DD4BF"/>';
      });

      seed.adoptionCurve.forEach(function(point, i) {
        const p = points[i];
        const labelOffset = point.value < 5 ? 16 : -10;
        const labelY = (parseFloat(p.y) + labelOffset).toFixed(1);
        const isLast = (i === points.length - 1);
        const fontWeight = isLast ? '700' : '400';
        const fontSize = isLast ? '11' : '10';
        const textAnchor = isLast ? 'end' : 'middle';
        const labelX = isLast ? (parseFloat(p.x) + 4).toFixed(1) : p.x;
        svg += '<text x="' + labelX + '" y="' + labelY + '" fill="#2DD4BF" font-size="' + fontSize + '" font-family="Orbitron" font-weight="' + fontWeight + '" text-anchor="' + textAnchor + '">' + point.value + '%</text>';
      });

      seed.adoptionCurve.forEach(function(point, i) {
        const p = points[i];
        svg += '<text x="' + p.x + '" y="305" fill="#64748B" font-size="9.5" font-family="JetBrains Mono" text-anchor="middle">J+' + point.day + '</text>';
      });

      return svg;
    }

    // ========================================================================
    // FONCTION PRINCIPALE : APPLIQUER UN SEED
    // ========================================================================
    function applySeed(seedKey) {
      const seed = window.SEEDS_DATA[seedKey];

      if (!seed) {
        console.error('❌ ERREUR : seed "' + seedKey + '" introuvable.');
        return;
      }

      console.log('🌱 Application du seed : ' + seedKey + ' (' + seed.title + ')');

      let updated = 0;

  

      // 2. Bandeau contexte
      const contextItems = document.querySelectorAll(
        '.context-bar .context-inner > span:not(.context-sep)'
      );

      if (contextItems.length < 6) {
        console.warn('⚠️ Bandeau contexte : ' + contextItems.length + ' items (attendu 6).');
      } else {
        const mapping = [
          { idx: 0, value: seed.title },
          { idx: 1, value: seed.pilote },
          { idx: 2, value: seed.archetypes },
          { idx: 3, value: seed.horizon + ' jours' },
          { idx: 5, value: seed.generatedDate }
        ];
        mapping.forEach(function(m) {
          const strong = contextItems[m.idx] && contextItems[m.idx].querySelector('strong');
          if (strong && m.value !== undefined) {
            strong.textContent = m.value;
            updated++;
          }
        });
      }

      // 3. Courbe d'adoption SVG (V2.0)
      const curveSvg = document.querySelector('.curve-svg');
      if (curveSvg && seed.adoptionCurve && seed.adoptionCurve.length > 0) {
        try {
          curveSvg.innerHTML = generateAdoptionCurveSVG(seed);
          updated++;
          console.log('✓ Courbe regeneree : ' + seed.adoptionCurve.length + ' points sur ' + seed.horizon + ' jours');
        } catch (err) {
          console.error('❌ Erreur regeneration courbe :', err);
        }
      }

      // 4. KPI cards (V2.1) - 4 cards dans #dashboard .kpi-grid
      const kpiCards = document.querySelectorAll('#dashboard .kpi-card');
      if (kpiCards.length !== 4) {
        console.warn('⚠️ KPI cards : ' + kpiCards.length + ' trouvees (attendu 4).');
      } else {
        // Card 1 : Resistance globale
        const c1 = kpiCards[0];
        const c1value = c1.querySelector('.kpi-value');
        const c1detail = c1.querySelector('.kpi-detail');
        const c1ic = c1.querySelector('.kpi-ic');
        if (c1value) {
          c1value.innerHTML = seed.resistance + '<span style="font-size:24px">/100</span>';
          updated++;
        }
        if (c1detail && seed.resistanceLabel) {
          c1detail.textContent = seed.resistanceLabel;
          updated++;
        }
        if (c1ic) {
          c1ic.textContent = seed.archetypes + ' archetypes simules';
          updated++;
        }

        // Card 2 : Adoption prédite (label change selon seed)
        const c2 = kpiCards[1];
        const c2label = c2.querySelector('.kpi-label');
        const c2value = c2.querySelector('.kpi-value');
        const c2detail = c2.querySelector('.kpi-detail');
        const c2ic = c2.querySelector('.kpi-ic');
        if (c2label && seed.predictionLabel) {
          c2label.textContent = seed.predictionLabel;
          updated++;
        }
        if (c2value) {
          c2value.textContent = seed.metric.baseline + '%';
          updated++;
        }
        if (c2detail && seed.icLabel) {
          c2detail.textContent = seed.icLabel;
          updated++;
        }
        if (c2ic && seed.icContext) {
          c2ic.textContent = seed.icContext;
          updated++;
        }

        // Card 3 : Champions identifies
        const c3 = kpiCards[2];
        const c3value = c3.querySelector('.kpi-value');
        const c3detail = c3.querySelector('.kpi-detail');
        const c3ic = c3.querySelector('.kpi-ic');
        if (c3value) {
          c3value.textContent = seed.champions;
          updated++;
        }
        if (c3detail && seed.championsList) {
          c3detail.textContent = seed.championsList;
          updated++;
        }
        if (c3ic && seed.championsAction) {
          c3ic.textContent = seed.championsAction;
          updated++;
        }

        // Card 4 : Non-adoptants structurels
        const c4 = kpiCards[3];
        const c4value = c4.querySelector('.kpi-value');
        const c4detail = c4.querySelector('.kpi-detail');
        const c4ic = c4.querySelector('.kpi-ic');
        if (c4value) {
          c4value.textContent = seed.structuralRefusers;
          updated++;
        }
        if (c4detail && seed.refusersList) {
          c4detail.textContent = seed.refusersList;
          updated++;
        }
        if (c4ic && seed.refusersStrategy) {
          c4ic.textContent = seed.refusersStrategy;
          updated++;
        }

        console.log('✓ KPI cards mises a jour (4 cards)');
      }

      // 5. Titre dashboard h2 - span.gradient "sur N jours" (V2.3)
      const dashboardTitleSpan = document.querySelector('#dashboard h2 span.gradient');
      if (dashboardTitleSpan) {
        dashboardTitleSpan.textContent = 'sur ' + seed.horizon + ' jours';
        updated++;
      } else {
        console.warn('⚠️ #dashboard h2 span.gradient introuvable');
      }

      // 6. Section intro dashboard (V2.3)
      const sectionIntro = document.querySelector('#dashboard .section-intro');
      if (sectionIntro && seed.blueprintLabel) {
        sectionIntro.innerHTML = "Le moteur CityFlow-X5 simule 10 000 trajectoires d'adoption et d'impact sur " + seed.horizon + " jours, avec intervalle de confiance 95%. Chaque seed est ancre sur un Blueprint AgenticX5 — pour ce cas, l'<strong>" + seed.blueprintLabel + "</strong>.";
        updated++;
      }

      // 7. Légende cible dans .curve-legend (V2.3)
      const legendItems = document.querySelectorAll('.curve-legend .legend-item');
      if (legendItems.length >= 3) {
        const targetLegend = legendItems[2];
        targetLegend.innerHTML = '<div class="legend-dot target"></div> Cible ' + seed.metric.target + '%';
        updated++;
      }

      // 8. curve-narrative (V2.3)
      const curveNarrative = document.querySelector('.curve-narrative');
      if (curveNarrative && seed.curveNarrative) {
        curveNarrative.innerHTML = seed.curveNarrative;
        updated++;
      }

      // 9. graph-warning (V2.3)
      const graphWarning = document.querySelector('.graph-warning');
      if (graphWarning && seed.graphWarning) {
        graphWarning.innerHTML = seed.graphWarning;
        updated++;
      }

      // 10. Synchroniser l'URL
      window.history.replaceState({}, '', window.location.pathname + '?seed=' + seedKey);

      // 11. Variable globale
      window.CURRENT_SEED = seedKey;

      // 12. Toast
      showToast('Seed actif : ' + (seed.shortId || seedKey));

      // 13. Log final
      if (updated === 0) {
        console.error('❌ Seed ' + seedKey + ' : aucun element DOM modifie.');
      } else {
        console.log('✓ Seed ' + seedKey + ' applique (' + updated + ' champs DOM modifies).');
      }
    }

    selector.addEventListener('change', function(event) {
      applySeed(event.target.value);
    });

    applySeed(currentSeed);

    // ========================================================================
    // TOAST
    // ========================================================================
    function showToast(message) {
      let toast = document.getElementById('seed-toast');
      if (!toast) {
        toast = document.createElement('div');
        toast.id = 'seed-toast';
        toast.style.cssText = `
          position: fixed;
          bottom: 30px;
          right: 30px;
          background: rgba(20, 184, 166, 0.95);
          color: #000;
          padding: 12px 20px;
          border-radius: 6px;
          font-family: monospace;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.05em;
          z-index: 10000;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.3s ease, transform 0.3s ease;
          box-shadow: 0 4px 20px rgba(20, 184, 166, 0.4);
        `;
        document.body.appendChild(toast);
      }
      toast.textContent = '⬡ ' + message;
      toast.style.opacity = '1';
      toast.style.transform = 'translateY(0)';
      clearTimeout(window._toastTimeout);
      window._toastTimeout = setTimeout(function() {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
      }, 3000);
    }

    console.log('✓ seeds-controller.js v1.3 · Pret. Seed actif : ' + currentSeed);

  });

})();