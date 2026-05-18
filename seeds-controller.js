/**
 * CityFlow-X5 · seeds-controller.js
 * Contrôleur de switch dynamique entre seeds
 * Version : V1.0 minimaliste · 17 mai 2026
 * Éditeur : AgenticX5
 *
 * Dépendances : seeds-data.js doit être chargé AVANT ce fichier
 */

(function() {
  'use strict';

  // ==========================================================================
  // 1. ATTENDRE LE DOM PRÊT
  // ==========================================================================
  document.addEventListener('DOMContentLoaded', function() {

    console.log('🚀 seeds-controller.js · Initialisation...');

    // Vérifier que seeds-data.js est chargé
    if (typeof window.SEEDS_DATA === 'undefined') {
      console.error('❌ ERREUR : seeds-data.js non chargé. Le sélecteur multi-seed ne fonctionnera pas.');
      return;
    }

    // ========================================================================
    // 2. DÉTECTER LE SEED INITIAL DEPUIS L'URL
    // ========================================================================
    const urlParams = new URLSearchParams(window.location.search);
    const seedFromUrl = urlParams.get('seed');
    let currentSeed = 'A01'; // Par défaut

    if (seedFromUrl && window.SEEDS_DATA[seedFromUrl]) {
      currentSeed = seedFromUrl;
      console.log('✓ Seed détecté depuis URL : ' + currentSeed);
    } else {
      console.log('✓ Seed par défaut : A01');
    }

    // ========================================================================
    // 3. RÉCUPÉRER LE DROPDOWN
    // ========================================================================
    const selector = document.getElementById('seed-selector');

    if (!selector) {
      console.error('❌ ERREUR : élément #seed-selector introuvable dans le DOM.');
      return;
    }

    // Synchroniser la valeur du dropdown avec le seed actuel
    selector.value = currentSeed;
    window.CURRENT_SEED = currentSeed;

    // ========================================================================
    // 4. FONCTION PRINCIPALE : APPLIQUER UN SEED
    // ========================================================================
    function applySeed(seedKey) {
      const seed = window.SEEDS_DATA[seedKey];

      if (!seed) {
        console.error('❌ ERREUR : seed "' + seedKey + '" introuvable.');
        return;
      }

      console.log('🔄 Application du seed : ' + seedKey + ' (' + seed.title + ')');

      // ----------------------------------------------------------------------
      // 4.1. Mettre à jour le SOUS-TITRE HERO (s'il existe)
      // ----------------------------------------------------------------------
      const heroSubtitle = document.querySelector('.hero-subtitle');
      if (heroSubtitle) {
        heroSubtitle.textContent = '« ' + seed.subtitle + ' »';
      }

      // ----------------------------------------------------------------------
      // 4.2. Mettre à jour le BANDEAU CONTEXTE (lignes "Cas · Pilote · Acteurs · Horizon · Moteur · Généré le")
      // ----------------------------------------------------------------------
      const contextItems = document.querySelectorAll('.context-bar .context-item');
      // L'ordre dans le HTML est : Cas, Pilote, Acteurs simulés, Horizon, Moteur, IC, Généré le
      if (contextItems.length >= 6) {
        // Cas (index 0)
        const casValue = contextItems[0].querySelector('.context-value');
        if (casValue) casValue.textContent = seed.title;

        // Pilote (index 1)
        const piloteValue = contextItems[1].querySelector('.context-value');
        if (piloteValue) piloteValue.textContent = seed.pilote;

        // Acteurs simulés (index 2)
        const acteursValue = contextItems[2].querySelector('.context-value');
        if (acteursValue) acteursValue.textContent = seed.archetypes;

        // Horizon (index 3)
        const horizonValue = contextItems[3].querySelector('.context-value');
        if (horizonValue) horizonValue.textContent = seed.horizon + ' jours';

        // Moteur (index 4) - reste statique
        // IC 95% (index 5) - reste statique

        // Généré le (index 6)
        if (contextItems[6]) {
          const genereeValue = contextItems[6].querySelector('.context-value');
          if (genereeValue) genereeValue.textContent = seed.generatedDate;
        }
      }

      // ----------------------------------------------------------------------
      // 4.3. Mettre à jour le SEED ID dans la metadata bar
      // ----------------------------------------------------------------------
      // (Le dropdown lui-même affiche déjà le seed sélectionné)

      // ----------------------------------------------------------------------
      // 4.4. Synchroniser l'URL (sans recharger la page)
      // ----------------------------------------------------------------------
      const newUrl = window.location.pathname + '?seed=' + seedKey;
      window.history.replaceState({}, '', newUrl);

      // ----------------------------------------------------------------------
      // 4.5. Mettre à jour la variable globale
      // ----------------------------------------------------------------------
      window.CURRENT_SEED = seedKey;

      // ----------------------------------------------------------------------
      // 4.6. Notification visuelle (toast)
      // ----------------------------------------------------------------------
      showToast('Seed actif : ' + seed.shortId);

      console.log('✓ Seed ' + seedKey + ' appliqué avec succès.');
    }

    // ========================================================================
    // 5. ÉCOUTER LE CHANGEMENT DE DROPDOWN
    // ========================================================================
    selector.addEventListener('change', function(event) {
      const newSeed = event.target.value;
      applySeed(newSeed);
    });

    // ========================================================================
    // 6. APPLIQUER LE SEED INITIAL AU CHARGEMENT
    // ========================================================================
    applySeed(currentSeed);

    // ========================================================================
    // 7. FONCTION TOAST (notification visuelle)
    // ========================================================================
    function showToast(message) {
      // Créer le toast s'il n'existe pas
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

      // Auto-hide après 3 secondes
      clearTimeout(window._toastTimeout);
      window._toastTimeout = setTimeout(function() {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
      }, 3000);
    }

    console.log('✓ seeds-controller.js · Prêt. Seed actif : ' + currentSeed);

  });

})();