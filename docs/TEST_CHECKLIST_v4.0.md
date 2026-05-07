# ✅ Checklist de Test — CityFlow-X5 v4.0

**Fichier à tester** : `cityflow-x5.html` (300 KB · 5 906 lignes)
**Durée estimée** : 5 minutes
**Navigateur recommandé** : Chrome ou Firefox récent (test responsive : Outils > Toggle device toolbar)

---

## 🚀 Démarrage

1. Ouvre le fichier dans ton navigateur (double-clic ou drag-drop dans une fenêtre)
2. Ouvre la **console développeur** (F12) — elle doit rester **vide d'erreurs** pendant tout le test
3. Vérifie le **titre de l'onglet** : doit être *"CityFlow-X5 · AgenticX5-City — La ville qui voit, comprend et agit"*

---

## Test 1 — ScrollSpy nav indicator (30 secondes)

### Étapes
1. ☐ Sur la page, observe la nav en haut. Le 📊 État des lieux doit être **éclairé en cyan** (avec une barre cyan/violet sous le texte)
2. ☐ Scrolle lentement vers le bas. Quand tu arrives à la section Dashboard, c'est 📈 Vue d'ensemble qui doit s'éclairer
3. ☐ Continue de scroller jusqu'à #catalog. Le 📦 100 Seeds doit être éclairé
4. ☐ Remonte en haut (touche Home ou Ctrl+Home) — l'indicateur doit suivre fluidement

### Critères de succès
- ✅ Transition douce (~0.3s) entre les surlignages
- ✅ Aucune saccade visible au scroll
- ✅ Sur mobile (<1024px), la nav links se masque automatiquement (c'est normal)

### Si ça ne marche pas
- 🔍 Vérifie F12 > Console : erreur JS ?
- 🔍 Vérifie que les sections `<section id="..."></section>` ont bien leurs IDs

---

## Test 2 — Animation Monte Carlo (1 minute)

### Étapes
1. ☐ Scrolle jusqu'à la section *"Pourquoi 10 000 trajectoires plutôt qu'une seule prédiction ?"*
2. ☐ **Important** : remonte un peu pour que la section sorte du viewport, puis scrolle à nouveau pour la révéler
3. ☐ Observe l'animation : 8 trajectoires fines se dessinent en cascade (~0.12s entre chaque)
4. ☐ Puis l'aire colorée IC 95% apparaît en fade-in
5. ☐ Puis la médiane (ligne cyan plus épaisse) se trace de gauche à droite
6. ☐ Puis les 3 dots (J+0, J+90, J+180) "pop" un par un

### Critères de succès
- ✅ L'animation se déclenche **une seule fois** quand la section devient visible (~40% à l'écran)
- ✅ Durée totale ~2.5 secondes
- ✅ Aucun jank (60fps stables)
- ✅ Si tu scrolles ailleurs puis reviens, l'animation **ne se rejoue pas** (IntersectionObserver `unobserve`)

### Si ça ne marche pas
- 🔍 La page doit être visible pour que IntersectionObserver fonctionne (si tu testes en mode print preview, ça ne fonctionnera pas)
- 🔍 Vérifie que les classes `ax5-mc-svg`, `ax5-mc-trajectories`, `ax5-mc-median` sont bien présentes (Inspecter)

---

## Test 3 — Tableau comparatif Cisco/IBM/Sidewalk (30 secondes)

### Étapes
1. ☐ Va à la section #positioning (clic sur 🎯 dans la nav, ou scrolle)
2. ☐ Sous le bloc différenciation ombrelle, cherche le titre *"◆ Synthèse comparative — Architecture & gouvernance"*
3. ☐ Vérifie les 7 lignes du tableau :
   - Architecture agentique orchestrée
   - Human-in-the-Loop natif
   - Conformité Loi 25 / EU AI Act by design
   - Posture éditeur
   - Statut commercial actuel
   - Modèle de déploiement
   - Gamme verticale municipale
4. ☐ La colonne "CityFlow-X5" doit avoir un **fond gradient cyan/violet** + badge "NOUS" en petit
5. ☐ Survole une ligne : elle doit subtilement s'éclairer (cyan transparent)

### Critères de succès
- ✅ Marqueurs ✓ verts pour CityFlow-X5 (sauf "Statut" qui est texte)
- ✅ Marqueurs ✗ rouges pour les colonnes concurrents là où ils manquent
- ✅ Marqueurs ~ orange pour les concurrents partiellement conformes (IBM HITL/Architecture)
- ✅ Sur mobile, le tableau scrolle horizontalement (overflow-x: auto)
- ✅ Note "Sources publiques officielles · Mise à jour mai 2026" visible en haut à droite

---

## Test 4 — Simulateur leviers (1.5 minutes) ⭐ ÉLÉMENT CENTRAL DÉMO

### Étapes
1. ☐ Va à la section #levers (⬡ 4 Leviers dans la nav)
2. ☐ **Avant de cliquer**, vérifie l'état initial :
   - Encadré sticky : valeur **61%** en cyan/violet
   - Barre de progression à 61%
   - Formule : *"61% base sans intervention · Aucun levier activé · 61% adoption prédite"*
   - Les 4 cards de leviers sont **désaturées** (gris terne, opacité 0.6)
3. ☐ **Clique sur Levier 01** (impact +18) :
   - Un rond cyan avec ✓ blanc apparaît en haut à droite de la card
   - La card s'illumine (perd le grayscale)
   - L'encadré sticky **pulse** (zoom léger 0.4s)
   - La valeur passe à **79%**
   - La barre de progression glisse vers 79% (durée ~0.5s)
   - Formule : *"61% base + 18 (L1) = 79% adoption prédite"*
4. ☐ **Clique sur Levier 02** (impact +14) :
   - Valeur **85%** (61+18+14 = 93, plafonné)
   - Formule : *"61% base + 18 (L1) + 14 (L2) = 93% → plafonné à 85% (saturation modèle)"*
5. ☐ **Clique sur tous les autres leviers** (L3 +11, L4 +8) :
   - Reste à 85% (saturation)
   - Formule mise à jour avec les 4 leviers
6. ☐ **Clique sur "Tout désactiver"** : retour à 61%, toutes les cards désaturées
7. ☐ **Clique sur "Tout activer"** : 85%, les 4 cards éclairées
8. ☐ **Test clavier** : Tab pour focus une card, puis Espace ou Entrée pour toggle

### Critères de succès
- ✅ Animation pulse à chaque toggle (~0.4s)
- ✅ Saturation correctement gérée (jamais > 85%)
- ✅ Formule mise à jour en temps réel
- ✅ aria-pressed change à chaque toggle (vérifiable avec lecteur d'écran)
- ✅ Lecteur d'écran annonce le changement (testez avec NVDA si dispo)

### Si ça ne marche pas
- 🔍 Erreur F12 ?
- 🔍 Les cards ont-elles bien `data-lever-id="L1"` ... `L4"` (Inspecter)

---

## Test 5 — Catalogue 100 seeds (1.5 minutes)

### Étapes
1. ☐ Va à la section #catalog (📦 100 Seeds)
2. ☐ Vérifie l'état initial :
   - Search box vide
   - Bouton "Toutes" actif (cyan)
   - Compteur : *"100 / 100 seeds affichés"*
   - 8 catégories visibles (A à H)
3. ☐ **Test recherche full-text** :
   - Tape `chantier` dans la search → seuls les seeds contenant "chantier" restent
   - Compteur s'actualise en temps réel
   - Tape `xyz123` → message *"⬡ Aucun seed ne correspond à votre recherche"*
   - Touche **Escape** → search vidée, tout réapparaît
4. ☐ **Test filtre catégorie** :
   - Clique sur "Coactivité chantiers A·20"
   - Seuls les 20 seeds A01-A20 visibles
   - Le titre du groupe A reste, les autres groupes (B-H) sont cachés
   - Compteur : *"20 / 100 seeds affichés"*
   - Le bouton actif passe en cyan, badge "100" en cyan inversé
5. ☐ **Test combiné search + catégorie** :
   - Filtre catégorie B (Véhicules-Piétons)
   - Tape `école` dans search → seul "B06 Enfants proximité écoles" reste
6. ☐ **Reset** :
   - Clique sur "Toutes" + efface la search → 100/100 affichés

### Critères de succès
- ✅ Filtrage **instantané** (< 100ms après chaque touche)
- ✅ Debounce de 80ms (pas de flicker à la saisie rapide)
- ✅ Compteur exact à chaque changement
- ✅ Empty state élégant si 0 résultat
- ✅ Sur mobile, la barre de filtres s'adapte (wrap automatique)

### Si ça ne marche pas
- 🔍 Vérifie que le bloc `<input id="ax5SeedSearch">` existe (Inspecter)
- 🔍 Vérifie F12 > Console pour erreurs

---

## Test 6 — Heatmap archétypes (préexistant v3.2, à revérifier) (30 secondes)

### Étapes
1. ☐ Va à la section #actors (👥 15 Acteurs)
2. ☐ Au-dessus de la heatmap, 6 boutons de filtre (Tout afficher + 5 zones colorées)
3. ☐ **Clique sur "Bleue · Attentistes"** :
   - Les 5 archétypes Bleus gardent leur couleur + halo cyan
   - Les 10 autres archétypes deviennent désaturés (grayscale 0.7, opacité 0.18)
4. ☐ **Test raccourci clavier** : appuie sur la touche `3` → filtre Bleue
5. ☐ Touche `1` → revient à "Tout afficher"

### Critères de succès
- ✅ Transition douce 0.3s
- ✅ Aucun archétype ne disparaît (juste estompé)
- ✅ Compteur en haut à droite : *"5 / 15 archétypes affichés"*

---

## 🌐 Test responsive (30 secondes)

1. ☐ Ouvre F12 > Toggle Device Toolbar (Ctrl+Shift+M)
2. ☐ Sélectionne "iPhone 14 Pro" (393px)
3. ☐ Vérifie les éléments critiques :
   - ✅ Hero lisible, pilules conformité wrap proprement
   - ✅ Breadcrumb ombrelle masqué (correct)
   - ✅ Nav links masquées (TODO Vague 2 : drawer mobile)
   - ✅ Tableau comparatif scroll horizontalement
   - ✅ Simulateur leviers : valeur sticky + barre OK
   - ✅ Catalogue 100 seeds : grid passe en 1 colonne
   - ✅ Footer ombrelle : 3 colonnes deviennent 1 colonne

---

## 🎯 Test final — performance

1. ☐ F12 > Lighthouse > Generate Report (mode Desktop)
2. ☐ Vérifie les scores cibles :
   - Performance : **≥ 90**
   - Accessibility : **≥ 90**
   - Best Practices : **≥ 90**
   - SEO : **≥ 90**

### Optimisations possibles si scores < 90
- Performance : ajouter `loading="lazy"` aux SVG hors viewport (impact négligeable, fichier déjà ultra-léger)
- Accessibility : compléter `alt` des SVG décoratifs (`aria-hidden="true"`)
- SEO : ajouter `<meta name="robots">` selon stratégie

---

## 📊 Résumé final

Si tous les tests passent, **tu peux pousser le fichier en production sur Netlify avec confiance**.

Si un test échoue, note précisément :
- Lequel des 6 tests
- Quel comportement attendu vs observé
- Capture d'écran de F12 > Console (s'il y a une erreur JS)

Et reviens vers moi avec ces infos — je corrige en 30 secondes.

---

**Innoventera Inc. · CityFlow-X5 v4.0 · Mai 2026**
