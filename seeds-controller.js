/**
 * CityFlow-X5 · seeds-controller.js
 * Controleur de switch dynamique entre seeds
 * Version : V1.2 (V2.0 - courbe d'adoption SVG dynamique) · 18 mai 2026
 * Editeur : AgenticX5
 *
 * Dependances : seeds-data.js doit etre charge AVANT ce fichier
 */

(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {

    console.log('🚀 seeds-controller.js v1.2 · Initialisation...');

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
      // ViewBox 800x320 · Zone graphique : X[60-780] · Y[40-280] (inverse car SVG)
      const X_LEFT = 60, X_RIGHT = 780;
      const Y_TOP = 40, Y_BOTTOM = 280;
      const WIDTH = X_RIGHT - X_LEFT;   // 720
      const HEIGHT = Y_BOTTOM - Y_TOP;  // 240

      // Conversion (day, value%) -> (svgX, svgY)
      function toSVG(day, value) {
        const x = X_LEFT + (day / seed.horizon) * WIDTH;
        const y = Y_BOTTOM - (Math.max(0, Math.min(100, value)) / 100) * HEIGHT;
        return { x: x.toFixed(1), y: y.toFixed(1) };
      }

      let svg = '';

      // 1. Axes (lignes principales)
      svg += '<line x1="60" y1="40" x2="60" y2="280" stroke="rgba(20,184,166,0.15)" stroke-width="0.5"/>';
      svg += '<line x1="60" y1="280" x2="780" y2="280" stroke="rgba(20,184,166,0.3)" stroke-width="1"/>';

      // 2. Labels axe Y (0% -> 100% par pas de 20%)
      const yLabels = [
        { pct: 100, y: 44 }, { pct: 80, y: 92 }, { pct: 60, y: 140 },
        { pct: 40, y: 188 }, { pct: 20, y: 236 }, { pct: 0, y: 284 }
      ];
      yLabels.forEach(function(l) {
        svg += '<text x="50" y="' + l.y + '" fill="#64748B" font-size="10" font-family="JetBrains Mono" text-anchor="end">' + l.pct + '%</text>';
      });

      // 3. Grid lines horizontales (pointillees)
      [20, 40, 60, 80, 100].forEach(function(pct) {
        const y = Y_BOTTOM - (pct / 100) * HEIGHT;
        svg += '<line x1="60" y1="' + y + '" x2="780" y2="' + y + '" stroke="rgba(20,184,166,0.05)" stroke-width="0.5" stroke-dasharray="2,4"/>';
      });

      // 4. Ruban IC 95% (offset ±5% autour de la courbe value)
      const points = seed.adoptionCurve.map(function(p) { return toSVG(p.day, p.value); });
      const pointsHigh = seed.adoptionCurve.map(function(p) { return toSVG(p.day, p.value + 5); });
      const pointsLow = seed.adoptionCurve.map(function(p) { return toSVG(p.day, p.value - 5); });

      let icPath = 'M ' + pointsHigh.map(function(p) { return p.x + ' ' + p.y; }).join(' L ');
      icPath += ' L ' + pointsLow.slice().reverse().map(function(p) { return p.x + ' ' + p.y; }).join(' L ');
      icPath += ' Z';
      svg += '<path d="' + icPath + '" fill="rgba(20,184,166,0.12)"/>';

      // 5. Cible (dynamique selon seed.metric.target)
      const targetY = (Y_BOTTOM - (seed.metric.target / 100) * HEIGHT).toFixed(1);
      svg += '<line x1="60" y1="' + targetY + '" x2="780" y2="' + targetY + '" stroke="#A78BFA" stroke-width="1" stroke-dasharray="4,4" opacity="0.5"/>';
      svg += '<text x="770" y="' + (parseFloat(targetY) - 4).toFixed(1) + '" fill="#A78BFA" font-size="9.5" font-family="JetBrains Mono" text-anchor="end">Cible ' + seed.metric.target + '%</text>';

      // 6. Courbe principale (lignes droites entre points)
      const pathD = 'M ' + points.map(function(p) { return p.x + ' ' + p.y; }).join(' L ');
      svg += '<path d="' + pathD + '" stroke="#2DD4BF" stroke-width="2.5" fill="none" stroke-linecap="round"/>';

      // 7. Cercles aux points
      points.forEach(function(p, i) {
        const r = (i === points.length - 1) ? 4 : 3.5;
        svg += '<circle cx="' + p.x + '" cy="' + p.y + '" r="' + r + '" fill="#2DD4BF"/>';
      });

      // 8. Labels % des points
      seed.adoptionCurve.forEach(function(point, i) {
        const p = points[i];
        // Si valeur basse (<5), label en dessous du point ; sinon au-dessus
        const labelOffset = point.value < 5 ? 16 : -10;
        const labelY = (parseFloat(p.y) + labelOffset).toFixed(1);
        const isLast = (i === points.length - 1);
        const fontWeight = isLast ? '700' : '400';
        const fontSize = isLast ? '11' : '10';
        const textAnchor = isLast ? 'end' : 'middle';
        const labelX = isLast ? (parseFloat(p.x) + 4).toFixed(1) : p.x;
        svg += '<text x="' + labelX + '" y="' + labelY + '" fill="#2DD4BF" font-size="' + fontSize + '" font-family="Orbitron" font-weight="' + fontWeight + '" text-anchor="' + textAnchor + '">' + point.value + '%</text>';
      });

      // 9. Labels axe X (J+N)
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

      console.log('🔄 Application du seed : ' + seedKey + ' (' + seed.title + ')');

      let updated = 0;

      // 1. Sous-titre Hero
      const heroSubtitle = document.querySelector('.hero-subtitle');
      if (heroSubtitle) {
        heroSubtitle.textContent = '« ' + seed.subtitle + ' »';
        updated++;
      }

      // 2. Bandeau contexte
      const contextItems = document.querySelectorAll(
        '.context-bar .context-inner > span:not(.context-sep)'
      );

      if (contextItems.length < 6) {
        console.warn(
          '⚠️ Bandeau contexte : ' + contextItems.length +
          ' items trouves (attendu : 6). Selecteur a revoir.'
        );
      } else {
        const mapping = [
          { idx: 0, value: seed.title,                label: 'Cas' },
          { idx: 1, value: seed.pilote,               label: 'Pilote' },
          { idx: 2, value: seed.archetypes,           label: 'Acteurs' },
          { idx: 3, value: seed.horizon + ' jours',   label: 'Horizon' },
          // idx 4 : Moteur (statique)
          { idx: 5, value: seed.generatedDate,        label: 'Genere le' }
        ];

        mapping.forEach(function(m) {
          const strong = contextItems[m.idx] && contextItems[m.idx].querySelector('strong');
          if (strong && m.value !== undefined) {
            strong.textContent = m.value;
            updated++;
          } else if (!strong) {
            console.warn('⚠️ <strong> manquant a index ' + m.idx + ' (' + m.label + ')');
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
      } else if (!curveSvg) {
        console.warn('⚠️ .curve-svg introuvable');
      }

      // 4. Synchroniser l'URL
      window.history.replaceState({}, '', window.location.pathname + '?seed=' + seedKey);

      // 5. Variable globale
      window.CURRENT_SEED = seedKey;

      // 6. Toast
      showToast('Seed actif : ' + (seed.shortId || seedKey));

      // 7. Log final honnete
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

    console.log('✓ seeds-controller.js v1.2 · Pret. Seed actif : ' + currentSeed);

  });

})();