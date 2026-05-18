/**
 * CityFlow-X5 · seeds-controller.js
 * Contrôleur de switch dynamique entre seeds
 * Version : V1.1 (fix sélecteurs DOM) · 18 mai 2026
 * Éditeur : AgenticX5
 *
 * Dépendances : seeds-data.js doit être chargé AVANT ce fichier
 */

(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {

    console.log('🚀 seeds-controller.js v1.1 · Initialisation...');

    if (typeof window.SEEDS_DATA === 'undefined') {
      console.error('❌ ERREUR : seeds-data.js non chargé.');
      return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const seedFromUrl = urlParams.get('seed');
    let currentSeed = 'A01';

    if (seedFromUrl && window.SEEDS_DATA[seedFromUrl]) {
      currentSeed = seedFromUrl;
      console.log('✓ Seed détecté depuis URL : ' + currentSeed);
    } else {
      console.log('✓ Seed par défaut : A01');
    }

    const selector = document.getElementById('seed-selector');
    if (!selector) {
      console.error('❌ ERREUR : #seed-selector introuvable.');
      return;
    }
    selector.value = currentSeed;
    window.CURRENT_SEED = currentSeed;

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
      } else {
        console.warn('⚠️ .hero-subtitle introuvable');
      }

      // 2. Bandeau contexte
      // Structure : .context-bar > .context-inner > span (items) avec <strong> à l'intérieur
      // Les séparateurs .context-sep sont exclus
      const contextItems = document.querySelectorAll(
        '.context-bar .context-inner > span:not(.context-sep)'
      );

      if (contextItems.length < 6) {
        console.warn(
          '⚠️ Bandeau contexte : ' + contextItems.length +
          ' items trouvés (attendu : 6). Sélecteur à revoir.'
        );
      } else {
        const mapping = [
          { idx: 0, value: seed.title,                label: 'Cas' },
          { idx: 1, value: seed.pilote,               label: 'Pilote' },
          { idx: 2, value: seed.archetypes,           label: 'Acteurs' },
          { idx: 3, value: seed.horizon + ' jours',   label: 'Horizon' },
          // idx 4 : Moteur (reste statique)
          { idx: 5, value: seed.generatedDate,        label: 'Généré le' }
        ];

        mapping.forEach(function(m) {
          const strong = contextItems[m.idx] && contextItems[m.idx].querySelector('strong');
          if (strong && m.value !== undefined) {
            strong.textContent = m.value;
            updated++;
          } else if (!strong) {
            console.warn('⚠️ <strong> manquant a index ' + m.idx + ' (' + m.label + ')');
          } else {
            console.warn('⚠️ Valeur undefined pour ' + m.label);
          }
        });
      }

      // 3. Synchroniser l'URL
      window.history.replaceState({}, '', window.location.pathname + '?seed=' + seedKey);

      // 4. Variable globale
      window.CURRENT_SEED = seedKey;

      // 5. Toast
      showToast('Seed actif : ' + (seed.shortId || seedKey));

      // 6. Log final HONNÊTE
      if (updated === 0) {
        console.error('❌ Seed ' + seedKey + ' : aucun élément DOM modifié.');
      } else {
        console.log('✓ Seed ' + seedKey + ' applique (' + updated + ' champs DOM modifies).');
      }
    }

    selector.addEventListener('change', function(event) {
      applySeed(event.target.value);
    });

    applySeed(currentSeed);

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

    console.log('✓ seeds-controller.js v1.1 · Pret. Seed actif : ' + currentSeed);

  });

})();