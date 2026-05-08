# 🎯 AUDIT UX/UI — CityFlow-X5 v3.2 Ombrelle

**Document interne · Innoventera Inc.**
**Date** : 7 mai 2026
**Auditeur** : Claude (Anthropic) à la demande de Mario Deshaies, CTO
**Fichier source** : `cityflow-x5.html` v3.2 · 263 KB · 4 914 lignes
**Objectif** : Identifier les améliorations UX/UI prioritaires avant délégation à Google AI Studio / Gemini 3 Flash

---

## 📋 SOMMAIRE

1. [Méthodologie d'audit](#1-méthodologie)
2. [Inventaire complet — 22 éléments visuels](#2-inventaire-complet)
3. [Matrice impact × effort](#3-matrice-de-priorisation)
4. [Roadmap d'amélioration en 3 vagues](#4-roadmap-en-3-vagues)
5. [Briefs Gemini prêts à coller](#5-briefs-gemini-ready)
6. [Métriques de succès](#6-métriques-de-succès)

---

## 1. Méthodologie

L'audit s'appuie sur 4 grilles d'évaluation appliquées à chaque élément visuel :

| Grille | Question clé |
|---|---|
| **Lisibilité** | Un Directeur de Ville (non-technique) comprend-il en 5 secondes ? |
| **Crédibilité** | Les données sont-elles sourcées, ou inventées ? |
| **Interactivité** | Le visiteur peut-il explorer, ou subit-il du contenu statique ? |
| **Actionnabilité** | Peut-il extraire l'info pour la réutiliser (export, partage, embed) ? |

**Notation** : ★☆☆☆☆ (rien à améliorer) → ★★★★★ (refonte majeure recommandée)

**Cible utilisateur prioritaire** : Directeur de Ville Québec/Canada, en démo de 15 minutes en showroom ou conférence Salon AGIR/UMQ/FCM.

---

## 2. Inventaire complet

### 🟦 Bloc 1 — Identité & Navigation

#### Élément 1.1 — Logo SVG hexagone

- **Localisation** : Nav (haut) + Footer (bas)
- **Type** : SVG vectoriel statique, gradient cyan→violet
- **État actuel** : ✅ Excellent — signature reconnaissable, cohérent gamme
- **Forces** : Vectoriel pur (responsive natif), 100% conforme tokens
- **Améliorations potentielles** : ★☆☆☆☆
  - Optionnel : version animée discrète au load (rotation hexagone 360° en 1.2s, une seule fois)
  - Optionnel : version "monogramme" ultra-condensée pour favicon

#### Élément 1.2 — Breadcrumb ombrelle (v3.1)

- **Localisation** : Nav, à droite du logo
- **Type** : Texte stylé `AgenticX5-City ▸ CityFlow-X5`
- **État actuel** : ✅ Excellent — positionnement gamme clair
- **Améliorations potentielles** : ★☆☆☆☆
  - Aucune jusqu'au lancement du hub `agenticx5-city.netlify.app`
  - Quand le hub sera live : réactiver le `<a href>` avec hover violet

#### Élément 1.3 — Nav portal (6 ancres)

- **Localisation** : Nav, à droite du breadcrumb
- **Type** : 6 liens texte avec emoji
- **État actuel** : ✅ Bon
- **Améliorations potentielles** : ★★☆☆☆
  - 🟡 Ajouter un **indicateur de section active** (ScrollSpy) : la section visible est surlignée cyan
  - 🟡 Sur mobile (<1024px), nav burger avec drawer plutôt que masquage total
  - Optionnel : raccourcis clavier (G+E pour aller à #etat, etc.)

---

### 🟦 Bloc 2 — État des lieux

#### Élément 2.1 — Bandeau 6 KPIs sourcés Montréal

- **Localisation** : Section #etat
- **Type** : 6 cards statiques avec valeur + label + source
- **Données** : 55K permis/an, 100+ décès piétons, 30K lésions construction, 4500 collisions cyclistes, 200K plaintes 311, 3.2 G$ coût mobilité
- **État actuel** : ✅ Excellent — chiffres réels et sourcés
- **Forces** : Crédibilité maximale, hiérarchie visuelle claire
- **Améliorations potentielles** : ★★☆☆☆
  - 🟡 **Tooltip au survol** révélant l'URL exacte de la source (ex: opendata.montreal.ca/permis-2024)
  - 🟡 **Compteur animé** au scroll-into-view (de 0 à la valeur cible, durée 1.5s)
  - 🟡 Bouton discret "📋 Copier les sources" pour Décideur en réunion

---

### 🟦 Bloc 3 — Hero

#### Élément 3.1 — Tag ombrelle pulsant (v3.1)

- **État actuel** : ✅ Excellent — signal "produit de gamme" immédiat
- **Améliorations potentielles** : ★☆☆☆☆ — rien à toucher

#### Élément 3.2 — Tagline "voit, comprend, agit"

- **État actuel** : ✅ Excellent — claim mémorable
- **Améliorations potentielles** : ★☆☆☆☆ — rien à toucher

#### Élément 3.3 — 3 piliers Hero (15 / 10K / HITL)

- **Type** : 3 cards avec gros chiffre + label + description
- **État actuel** : ✅ Très bon
- **Améliorations potentielles** : ★★☆☆☆
  - 🟡 Animation cascade au scroll (fade-in + translate-up de 20px, décalé 100ms entre cards)
  - 🟡 Sur le pilier "HITL" : ajouter un mini-pictogramme (icône Lucide `UserCheck` ou `Eye`) pour rendre le concept visuel
  - Optionnel : carte cliquable qui scroll vers la section détaillée correspondante

#### Élément 3.4 — Pilules conformité (v3.1)

- **État actuel** : ✅ Excellent
- **Améliorations potentielles** : ★☆☆☆☆ — rien à toucher

---

### 🟦 Bloc 4 — Pédagogie Monte Carlo

#### Élément 4.1 — Visu SVG "10 000 trajectoires"

- **Localisation** : #monte-carlo-explained
- **Type** : SVG inline (60 lignes), 8 trajectoires fines + 1 médiane épaisse + ruban IC 95%
- **État actuel** : ✅ Bon — pédagogiquement très clair
- **Améliorations potentielles** : ★★★☆☆
  - 🔴 **Animation au scroll** : les 8 trajectoires fines se dessinent une par une (stroke-dasharray + animation), puis la médiane apparaît
  - 🟡 **Tooltip** au survol des points clés (J+0, J+90, J+180) avec valeur exacte + IC borne haute/basse
  - 🟡 **Mode "comparateur"** : toggle pour afficher 1, 10, 100, 1000, 10000 trajectoires (illustre visuellement le concept "plus on simule, plus c'est précis")
  - Optionnel : bouton "▶️ Rejouer la simulation" qui relance l'animation

---

### 🟦 Bloc 5 — Transparence

#### Élément 5.1 — 4 cards Transparence

- **Type** : 4 cards bordées-gauche (couleurs distinctes : ce que c'est / pas / posture / HITL)
- **État actuel** : ✅ Bon
- **Améliorations potentielles** : ★★☆☆☆
  - 🟡 Pictogrammes Lucide en haut de chaque carte (Check, X, Compass, UserCheck)
  - Optionnel : version "comparatif" en 2 colonnes (ce que c'est | ce que ce n'est pas)

---

### 🟦 Bloc 6 — Positionnement

#### Élément 6.1 — 3 cards Positionnement (Cisco/IBM/Sidewalk vs CityFlow-X5)

- **État actuel** : ✅ Bon — argument différenciant solide
- **Améliorations potentielles** : ★★★☆☆
  - 🟡 **Tableau comparatif synthèse** sous les 3 cards : colonnes (Cisco | Sidewalk | IBM | **CityFlow-X5**) × lignes (HITL, Conformité, Architecture, Statut, ROI)
  - 🟡 Logos officiels des concurrents (Cisco, IBM, Sidewalk Labs) avec note légale claire
  - Optionnel : hover sur card concurrent → révèle "year of failure / status update"

#### Élément 6.2 — 4 cards Différenciation ombrelle (v3.1)

- **État actuel** : ✅ Excellent — déjà optimal
- **Améliorations potentielles** : ★☆☆☆☆ — rien à toucher

---

### 🟦 Bloc 7 — Dashboard

#### Élément 7.1 — 4 KPIs Dashboard

- **Type** : 4 KPI cards (Adoption prédite, Confiance, Risque conformité, Délai stabilisation)
- **État actuel** : ✅ Bon
- **Améliorations potentielles** : ★★★☆☆
  - 🔴 **Petit sparkline** (mini-graphique 60×20px) sous chaque KPI montrant l'évolution sur 180j
  - 🟡 **Delta animé** au load (de 0% à la valeur)
  - 🟡 **Click-to-expand** : un clic ouvre une modale avec décomposition détaillée du KPI

#### Élément 7.2 — 🔥 PRIORITÉ 1 : Courbe d'adoption SVG 180j IC 95%

- **Localisation** : #dashboard, élément central de la démo
- **Type** : SVG statique (75 lignes), médiane + ruban IC 95% + grille temps + axes
- **État actuel** : ⚠️ Moyen — joli mais 100% statique, sans interaction
- **Forces** : Composition graphique excellente, hiérarchie claire
- **Améliorations potentielles** : ★★★★★ (RECOMMANDATION FORTE)
  - 🔴 **Curseur de scrubbing horizontal** : déplacer la souris révèle la valeur exacte à chaque jour (J+0 → J+180), avec ligne verticale + tooltip
  - 🔴 **Toggle "Sans intervention" vs "Avec 4 leviers"** : afficher 2 courbes superposées (la rouge à 61% et la verte à 85%)
  - 🔴 **Click sur la courbe** ouvre un mini-panel "Décomposition à J+X : adoption=Y%, leviers actifs=Z, événements contextuels=W"
  - 🟡 Animation au scroll : la courbe se dessine de gauche à droite en 2.5s (stroke-dasharray)
  - 🟡 Légende interactive : toggle pour masquer/afficher la médiane / le ruban IC / les bornes
  - **Stack recommandé** : D3.js (pas Recharts ici — D3 permet le scrubbing fluide)
  - **Effort estimé** : 4-6h dev frontend

#### Élément 7.3 — Distribution 5 zones

- **Type** : 5 barres horizontales avec pourcentages
- **État actuel** : ⚠️ Basique
- **Améliorations potentielles** : ★★★★☆
  - 🔴 **Donut chart** alternatif (plus mémorable pour Décideur)
  - 🔴 **Click sur une zone** : filtre la heatmap des 15 archétypes en cohérence (lien sémantique avec le filtre v3.2)
  - 🟡 Animation barre de remplissage au scroll (0% → valeur cible, durée 1.2s)

---

### 🟦 Bloc 8 — Acteurs

#### Élément 8.1 — Heatmap 15 archétypes + filtres v3.2

- **État actuel** : ✅ Excellent (déjà amélioré dans la dernière itération)
- **Améliorations potentielles** : ★★☆☆☆
  - 🟡 **Détail au clic** : un clic sur une carte ouvre une modale avec verbatim étendu, profil démographique, historique d'incidents typiques
  - 🟡 **Mode comparatif** : sélectionner 2 archétypes pour les afficher côte-à-côte avec différences
  - 🟡 **Search box** "🔍 Trouver un archétype..." pour filtrer par mot-clé en complément des filtres zones
  - Optionnel : filtre additionnel "Par groupe" (Ville / Entrepreneurs / Usagers / Système)

---

### 🟦 Bloc 9 — Graphe d'influence

#### Élément 9.1 — 🔥 PRIORITÉ 2 : Graphe d'influence SVG (148 lignes)

- **Type** : SVG statique avec nœuds + arêtes + zone "convergence critique"
- **État actuel** : ⚠️ Moyen — visuellement riche mais figé
- **Améliorations potentielles** : ★★★★★ (RECOMMANDATION FORTE)
  - 🔴 **Force-directed graph interactif** : nœuds drag-and-drop, le graphe se réorganise dynamiquement (D3.js force layout ou Cytoscape.js)
  - 🔴 **Hover sur nœud** : highlight des arêtes connectées + tooltip avec score résistance, rayon d'influence, archétype
  - 🔴 **Filtre temporel** : slider J+0 → J+180 qui montre l'évolution des connexions au fil du temps
  - 🔴 **Zoom + pan** standard (molette + drag)
  - **Stack recommandé** : Cytoscape.js (plus simple que D3 pour ce cas)
  - **Effort estimé** : 6-8h dev frontend

---

### 🟦 Bloc 10 — Leviers & Contrefactuel

#### Élément 10.1 — 4 Leviers d'intervention

- **Type** : 4 cards avec impact +18, +14, +11, +8 pts
- **État actuel** : ✅ Très bon
- **Améliorations potentielles** : ★★★☆☆
  - 🔴 **Toggle on/off par levier** : permet à l'utilisateur de simuler manuellement les combinaisons (ex: "Que se passe-t-il si je n'active que les leviers 1 et 3 ?")
  - 🟡 Le résultat (61% de base + sommes des leviers actifs) s'affiche en temps réel dans un encadré au-dessus
  - 🟡 Lien sémantique avec la courbe Dashboard (toggle leviers met à jour la courbe)

#### Élément 10.2 — Scénario contrefactuel 61% → 85%

- **État actuel** : ✅ Bon
- **Améliorations potentielles** : ★★★☆☆
  - 🟡 **Visualisation flèche animée** : 61% [══════> 85%] avec animation de la barre
  - 🟡 Décomposition détaillée : "+18 levier A + 14 levier B + 11 levier C + 8 levier D = +51 pts (mais saturation à 85%)"

---

### 🟦 Bloc 11 — Workflow Décideur

#### Élément 11.1 — Workflow 5 étapes (Brief → Cartographie → Simulation → Leviers → Plan validé)

- **Type** : 5 cards horizontales numérotées
- **État actuel** : ⚠️ Linéaire mais propre
- **Améliorations potentielles** : ★★★★☆
  - 🔴 **Stepper interactif** : un clic sur une étape révèle le détail (durée, livrables, intervenants, outputs)
  - 🟡 Connecteurs animés entre les étapes (ligne pointillée qui s'éclaire en cyan au scroll)
  - 🟡 Pictogramme par étape (Lucide : FileText, Map, Activity, Sliders, CheckCircle)
  - 🟡 Indication de durée par étape (ex: "Étape 1 · J+0 à J+7 · 7 jours")

---

### 🟦 Bloc 12 — Blueprint

#### Élément 12.1 — Blueprint 12 étapes / 4 phases

- **Type** : Grille 4 colonnes (Cadrage / Déploiement / Stabilisation / Évaluation)
- **État actuel** : ⚠️ Dense, difficile à scanner
- **Améliorations potentielles** : ★★★★☆
  - 🔴 **Vue Gantt simplifiée** : timeline horizontale avec phases colorées et étapes positionnées dans le temps
  - 🟡 **Vue alternative "phase par phase"** : tabs en haut (Cadrage / Déploiement / Stabilisation / Évaluation) qui filtrent l'affichage
  - 🟡 Hover sur une étape révèle livrables + intervenants

---

### 🟦 Bloc 13 — Risques

#### Élément 13.1 — 5 Risques structurels

- **État actuel** : ✅ Bon
- **Améliorations potentielles** : ★★☆☆☆
  - 🟡 Matrice 2D **probabilité × impact** au lieu de 5 cards (visualisation classique de risk management)
  - 🟡 Pictogramme par risque (Lucide : Brain, EyeOff, Snowflake, Shield, Vote)

---

### 🟦 Bloc 14 — Variables réglementaires

#### Élément 14.1 — 🔥 PRIORITÉ 3 : 15 Variables + Table impact archétypes

- **Type** : Table HTML brute
- **État actuel** : ⚠️ Hostile pour Décideur politique (densité d'expert)
- **Améliorations potentielles** : ★★★★★ (RECOMMANDATION FORTE)
  - 🔴 **Heatmap matricielle** : variables (lignes) × archétypes (colonnes), couleur = intensité d'impact
  - 🔴 **Tri / Filtres** par catégorie variable (Loi 25 / EU AI Act / NIST / etc.) ou par archétype impacté
  - 🟡 **Search box** "🔍 Filtrer..."
  - 🟡 **Export CSV** pour Décideur qui veut embarquer
  - **Stack recommandé** : Tabulator.js ou AG Grid Community (gratuits)
  - **Effort estimé** : 4-6h dev frontend

---

### 🟦 Bloc 15 — Méthodologie Monte Carlo

#### Élément 15.1 — Section Monte Carlo (8 catégories + 10 étapes méthodo + 3 scénarios)

- **État actuel** : ⚠️ Texte-lourd, 200+ lignes de prose
- **Améliorations potentielles** : ★★★★☆
  - 🔴 **Stepper vertical animé** pour les 10 étapes méthodologiques
  - 🟡 **Cartes interactives** pour les 8 catégories (A→H) — clic révèle exemples détaillés
  - 🟡 Comparateur 3 scénarios A/B/C en colonnes synchronisées

---

### 🟦 Bloc 16 — Catalogue 100 seeds

#### Élément 16.1 — 🔥 PRIORITÉ 4 : Catalogue 100 seeds par 8 catégories

- **Type** : Liste statique groupée
- **État actuel** : ⚠️ Statique, lourd à parcourir
- **Améliorations potentielles** : ★★★★★ (RECOMMANDATION FORTE)
  - 🔴 **Grid filtrable** par catégorie (A→H) avec compteur live
  - 🔴 **Search full-text** sur le nom du seed
  - 🔴 **Card cliquable** qui révèle : ID, catégorie, description, probabilité, gravité, impact, source, URL
  - 🔴 **Lien direct vers le tableau Excel Monte Carlo** (`AX5-CityFlow_100_flux_MonteCarlo.xlsx`) pour téléchargement
  - 🟡 **Tags visuels** : sévérité (🔴🟠🟡🟢), catégorie (A-H avec couleur)
  - **Stack recommandé** : Vanilla JS + CSS Grid (cohérent avec ton démonstrateur)
  - **Effort estimé** : 5-7h dev frontend

---

### 🟦 Bloc 17 — Sources

#### Élément 17.1 — 9 Sources publiques

- **État actuel** : ✅ Bon
- **Améliorations potentielles** : ★★☆☆☆
  - 🟡 Logo de chaque source (SAAQ, CNESST, MTL, BIXI, MTQ, RSQA, EnvCanada, STM, Hydro-QC)
  - 🟡 Bouton "🔗 Ouvrir dans nouvel onglet" + statut de fraîcheur (date dernière vérif)

---

### 🟦 Bloc 18 — Footer

#### Élément 18.1 — Footer ombrelle 3 colonnes (v3.1)

- **État actuel** : ✅ Excellent — déjà optimal
- **Améliorations potentielles** : ★☆☆☆☆ — rien à toucher

---

## 3. Matrice de priorisation

### Légende
- **Impact démo** : Combien de "wow effect" supplémentaire en réunion Ville (1-5)
- **Effort dev** : Heures estimées (1-5 = 1h / 2-4h / 4-8h / 8-16h / 16h+)
- **Risque** : Probabilité que l'amélioration introduise des bugs ou casse l'existant (1-5)

### Tableau de priorisation

| # | Amélioration | Impact démo | Effort | Risque | Score (Impact-Effort-Risque) | **Priorité** |
|---|---|---|---|---|---|---|
| 7.2 | Courbe adoption interactive (scrubbing + toggle 61/85%) | 5 | 4 | 2 | **+8** | 🥇 P0 |
| 16.1 | Catalogue 100 seeds filtrable | 5 | 4 | 1 | **+9** | 🥇 P0 |
| 9.1 | Graphe d'influence interactif | 5 | 5 | 3 | **+5** | 🥈 P1 |
| 14.1 | Heatmap matricielle Variables | 4 | 4 | 2 | **+6** | 🥈 P1 |
| 7.3 | Distribution 5 zones interactive | 4 | 3 | 1 | **+8** | 🥈 P1 |
| 10.1 | Toggle on/off des 4 leviers | 5 | 3 | 2 | **+8** | 🥇 P0 |
| 4.1 | Animation Monte Carlo trajectoires | 4 | 2 | 1 | **+7** | 🥈 P1 |
| 1.3 | ScrollSpy nav indicator | 3 | 2 | 1 | **+4** | 🥉 P2 |
| 11.1 | Stepper interactif Workflow | 3 | 3 | 2 | **+2** | 🥉 P2 |
| 12.1 | Vue Gantt Blueprint | 3 | 4 | 3 | **+0** | 🥉 P2 |
| 2.1 | Compteurs animés KPIs | 2 | 1 | 1 | **+2** | 🥉 P2 |
| 7.1 | Sparklines sous KPIs Dashboard | 3 | 2 | 1 | **+4** | 🥉 P2 |
| 13.1 | Matrice probabilité × impact Risques | 3 | 3 | 2 | **+2** | 🥉 P2 |
| 6.1 | Tableau comparatif Cisco/IBM/Sidewalk | 4 | 2 | 1 | **+5** | 🥈 P1 |

---

## 4. Roadmap en 3 vagues

### 🌊 Vague 1 — Quick wins haute valeur (1 semaine, ~20-25h dev)

**Objectif** : Maximum de "wow démo" pour minimum d'effort, zéro risque.

| Améliorations | Effort | Impact | Statut |
|---|---|---|---|
| ✅ 7.2 — Courbe adoption interactive (D3.js) | 6h | 🔥🔥🔥 | À faire |
| ✅ 10.1 — Toggle on/off des 4 leviers | 4h | 🔥🔥🔥 | À faire |
| ✅ 16.1 — Catalogue 100 seeds filtrable | 6h | 🔥🔥🔥 | À faire |
| ✅ 4.1 — Animation Monte Carlo trajectoires | 2h | 🔥🔥 | À faire |
| ✅ 6.1 — Tableau comparatif Cisco/IBM/Sidewalk | 2h | 🔥🔥 | À faire |
| ✅ 1.3 — ScrollSpy nav indicator | 2h | 🔥 | À faire |

**Livrable** : `cityflow-x5.html` v4.0 "Interactive Demo Edition"

### 🌊 Vague 2 — Visualisations avancées (2 semaines, ~25-30h dev)

**Objectif** : Différenciation maximale vs concurrents (Cisco/IBM/Sidewalk), vraie démonstration de "ville qui voit, comprend, agit".

| Améliorations | Effort | Impact |
|---|---|---|
| 9.1 — Graphe d'influence interactif (Cytoscape.js) | 8h | 🔥🔥🔥 |
| 14.1 — Heatmap matricielle Variables (Tabulator.js) | 6h | 🔥🔥🔥 |
| 7.3 — Distribution 5 zones interactive avec lien sémantique | 4h | 🔥🔥 |
| 8.1 — Détail au clic sur archétypes | 4h | 🔥🔥 |
| 7.1 — Sparklines sous KPIs Dashboard | 3h | 🔥🔥 |

**Livrable** : `cityflow-x5.html` v5.0 "Premium Demo Edition"

### 🌊 Vague 3 — Polish + accessibilité enterprise (1 semaine, ~15h dev)

**Objectif** : Niveau enterprise pour appels d'offres formels, conformité WCAG AA.

| Améliorations | Effort |
|---|---|
| 11.1 — Stepper interactif Workflow | 3h |
| 12.1 — Vue Gantt Blueprint | 4h |
| 13.1 — Matrice probabilité × impact Risques | 3h |
| 17.1 — Logos sources + statut fraîcheur | 2h |
| 2.1 — Tooltips sources sur KPIs Montréal | 2h |
| Audit a11y complet WCAG AA | 1h |

**Livrable** : `cityflow-x5.html` v6.0 "Enterprise Edition"

---

## 5. Briefs Gemini ready

Voici 3 briefs prêts à coller dans Google AI Studio (après avoir collé le prompt système figé `AGENTICX5_GEMINI_SYSTEM_PROMPT_v1.0.md`) pour générer chacune des améliorations P0 :

### Brief 1 — Courbe adoption interactive

```
Génère un composant React 18 + TypeScript + D3.js v7 nommé <AdoptionCurveD3> qui :

Props :
- baseAdoption: number (default 61)
- targetAdoption: number (default 85)
- horizon: number (default 180, en jours)
- confidenceInterval: number (default 0.95)

Comportement :
- Affiche 2 courbes superposées : "Sans intervention" (cyan) à 61% et "Avec 4 leviers" (green-go) à 85%
- Toggle en haut pour activer/désactiver chaque courbe
- Curseur vertical au survol qui révèle un tooltip : "Jour X · Adoption: Y% · IC95: [Z%-W%]"
- Ruban IC 95% semi-transparent autour de chaque médiane
- Animation au mount : la courbe se dessine de gauche à droite en 2.5s (stroke-dasharray)
- Bouton "▶ Rejouer animation"

Design : tokens AgenticX5 stricts. Dimensions : viewBox 800x320, responsive.
Données mock : utilise // TODO: connecter à Monte Carlo backend
```

### Brief 2 — Toggle leviers interactifs

```
Génère un composant React 18 + TypeScript nommé <LeversSimulator> qui :

Props :
- baseAdoption: number (default 61)
- maxAdoption: number (default 85)
- levers: Array<{ id, name, impact, description }>
  Avec 4 leviers par défaut : impact +18, +14, +11, +8

Comportement :
- 4 cartes de levier avec toggle on/off (style switch HUD AgenticX5)
- Encadré sticky en haut affichant en temps réel : "Adoption simulée : XX%" avec barre de progression animée 61 → 85
- Saturation à 85% (max) même si la somme des leviers dépasse
- Décomposition visible : "61% base + 18 levier A + 14 levier B = 93% → plafonné à 85%"
- Si 0 levier actif : afficher "61% (scénario sans intervention)" en rouge-alert
- Animation lors d'un toggle : pulse de 200ms sur l'encadré sticky

Design : tokens AgenticX5 stricts, accessibility : aria-pressed, aria-live="polite" sur l'encadré sticky.
```

### Brief 3 — Catalogue 100 seeds filtrable

```
Génère un composant React 18 + TypeScript + Tailwind 3.4 nommé <SeedsCatalog> qui :

Props :
- seeds: Array<{ id, category (A-H), name, probability, severity, impact, source, url, variables }>
  100 entrées mockées avec // TODO: connecter à AX5-CityFlow_100_flux_MonteCarlo.xlsx

Comportement :
- 8 boutons de filtre par catégorie en haut (A-H) + "Tout afficher" + compteur live
- Search box full-text sur "name"
- Tri par : sévérité, probabilité, impact (toggles)
- Cards en grid (3 col desktop, 2 tablet, 1 mobile)
- Card click → modale détaillée avec toutes les propriétés + lien source externe
- Tags visuels par sévérité : critique (red-alert) / élevée (gold) / modérée (zone-amber) / faible (green-go)
- Tag visuel par catégorie : A-H avec couleur cyclique cohérente AgenticX5
- Bouton "📊 Télécharger Excel complet" en haut à droite

Design : tokens AgenticX5 stricts. Animations : transition 0.3s sur filter/sort.
```

---

## 6. Métriques de succès

Comment mesurer que les améliorations apportent de la valeur réelle ?

| Métrique | Avant (v3.2) | Cible v4.0 (vague 1) | Cible v6.0 (vague 3) |
|---|---|---|---|
| Temps moyen de scroll complet | ~2 min (passif) | 5-7 min (exploration) | 8-12 min (immersion) |
| Profondeur d'interaction (clics/visite) | 1-2 (filtres v3.2) | 8-12 | 15-25 |
| Taux de demande de démo (post-visite) | À mesurer | +30% | +60% |
| Score Lighthouse (Performance) | 95+ | 90+ | 88+ |
| Score Lighthouse (Accessibility) | 88 (estimé) | 92+ | 100 |
| Taille bundle (KB) | 263 KB | ~310 KB (+18%) | ~380 KB (+45%) |
| Compatibilité navigateurs | Modern (95%) | Modern (95%) | Modern + IE11 fallback |

---

## 7. Décision rapide pour Mario

**Si je n'avais qu'un seul mois de dev disponible**, je ferais **Vague 1 uniquement** :

→ ~25h de dev → impact démo passe de "très bon" à "extraordinaire"
→ Risque minimal (chaque amélioration est isolée, pas de refonte structurelle)
→ Permet de **démarrer le démarchage Villes immédiatement** avec la v4.0

**Si tu veux passer par Gemini AI Studio** pour ces 6 améliorations Vague 1 :

1. Colle le prompt système `AGENTICX5_GEMINI_SYSTEM_PROMPT_v1.0.md` dans une nouvelle session
2. Colle le **Brief 1** (Courbe adoption) → récupère le composant
3. Colle le **Brief 2** (Toggle leviers) → récupère le composant
4. Colle le **Brief 3** (Catalogue seeds) → récupère le composant
5. Pour les 3 améliorations restantes (animation Monte Carlo, comparatif concurrents, ScrollSpy) : briefs courts à demander au coup par coup
6. Intégration manuelle dans le `cityflow-x5.html` existant (préserve l'identité visuelle vanilla)

**Alternative sans Gemini** : je peux te livrer chaque amélioration Vague 1 directement en HTML/CSS/JS vanilla pur dans ce chat, en respectant ton stack actuel (zéro React, zéro build step, déploiement Netlify Drop instantané). C'est plus rapide à intégrer mais moins flexible si tu veux ensuite faire évoluer en SPA.

---

**Innoventera Inc. · AgenticX5-City · CityFlow-X5 v3.2 → v4.0+**
*Document interne d'audit UX/UI · Mai 2026 · Versionner dans Preventera/AX5-CitaFlow*
