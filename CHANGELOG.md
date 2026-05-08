# 📋 CHANGELOG — CityFlow-X5

Tous les changements notables de ce projet sont documentés dans ce fichier.
Format basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/).
Versionnage [SemVer](https://semver.org/lang/fr/).

---

## [4.0.0] — 2026-05-07 · "Interactive Demo Edition"

### 🎉 Vague 1 d'améliorations UX/UI — 6 patches Vague 1

#### Ajouté
- **PATCH V4-1 · ScrollSpy nav indicator** — Le lien actif dans la nav s'éclaire automatiquement (cyan + barre dégradée cyan/violet) en fonction de la section visible au scroll. Throttling via `requestAnimationFrame` pour 60fps stables.
- **PATCH V4-2 · Animation Monte Carlo** — Le SVG des 8 trajectoires se dessine en cascade au scroll (déclenché via IntersectionObserver, threshold 0.4). Médiane + aire IC 95% + 3 dots de jalons animés progressivement. Durée totale ~2.5s, exécution unique.
- **PATCH V4-3 · Tableau comparatif synthèse** — Nouveau bloc dans la section #positioning : 7 critères × 4 colonnes (Cisco / IBM / Sidewalk / CityFlow-X5). Marqueurs ✓ / ✗ / ~ codés en couleurs sémantiques. Colonne "NOUS" mise en évidence en permanence avec gradient cyan/violet.
- **PATCH V4-4 · Simulateur leviers interactif** — Encadré sticky avant la grille des 4 leviers : valeur géante 61% en cyan/violet + barre de progression animée + formule explicative en temps réel. Les 4 cards de leviers sont cliquables (avec animation toggle visuelle), gestion saturation à 85%, raccourcis clavier (Espace/Entrée), aria-pressed/aria-live complets.
- **PATCH V4-5 · Catalogue 100 seeds filtrable** — Barre de filtres avant les 8 catégories : search full-text avec debounce 80ms + 9 boutons de filtre par catégorie (A-H + Toutes). Compteur live "X / 100 seeds affichés". Empty state si aucun résultat. Touche Escape efface la search. Cache automatiquement les groupes de catégories vides.
- **PATCH V4-6 · JS unifié vanilla** — Tous les nouveaux comportements regroupés dans un second bloc `<script>` autonome. 0 dépendance externe. ~11 KB de JS minifiable.

#### Modifié
- **Title HTML** : déjà mis à jour en v3.1, conservé.
- **Bloc script existant v3.2** (filtre archétypes) : préservé tel quel, indépendant des nouveaux blocs.

#### Stats fichier
| Métrique | v3.2 | v4.0 | Δ |
|---|---|---|---|
| Taille | 263 KB | 300 KB | +37 KB (+14%) |
| Lignes | 4 914 | 5 906 | +992 lignes |
| Sections | 16 | 16 | = |
| Scripts JS | 1 | 2 | +1 (vanilla pur) |
| Styles inline | 8 | 9 | +1 |

#### Conformité préservée
- ✅ Architecture ombrelle AgenticX5-City → CityFlow-X5 intacte (18 mentions)
- ✅ Tagline "voit, comprend, agit" préservée (4 occurrences)
- ✅ 0 mention IVÉO résiduelle
- ✅ 0 lien Netlify cassé (lien `agenticx5-city` désactivé en `<span>` depuis v3.2)
- ✅ 100% des scripts JS validés syntaxiquement (Node `new Function()` test)

---

## [3.2.0] — 2026-05-07 · "Filtres Archétypes"

#### Ajouté
- Filtres interactifs sur la heatmap des 15 archétypes : 6 boutons (Tout afficher + 5 zones comportementales). Animation grayscale pour les non-matchants (préserve la stabilité visuelle de la grille). Compteur live, ARIA complet, raccourcis clavier 1-6.

#### Modifié
- Désactivation du lien `https://agenticx5-city.netlify.app` dans le breadcrumb nav (remplacé par `<span>`) et dans le footer (remplacé par `<span>` stylé). Évite les 404 jusqu'au lancement du hub ombrelle.

---

## [3.1.0] — 2026-05-07 · "Architecture Ombrelle AgenticX5-City"

#### Ajouté
- **Breadcrumb ombrelle** dans la nav : `AgenticX5-City ▸ CityFlow-X5` (masqué <900px).
- **Tag ombrelle pulsant** dans le hero : "Gamme AgenticX5-City · v3.1 · Démonstrateur B2G"
- **Tagline ombrelle** : *"La ville qui voit, comprend et agit."*
- **6 pilules conformité** dans le hero : Loi 25 QC · EU AI Act · NIST AI RMF · ISO 42001 · PROV-O W3C · HITL natif
- **Bloc différenciation ombrelle** dans la section #positioning : 4 cards numérotées comparant la gamme AgenticX5-City vs Cisco Kinetic / Sidewalk Quayside / IBM IOC / produits isolés. Footer éditeur Innoventera Inc.
- **Footer 3 colonnes ombrelle** : brand + roadmap gamme (CityFlow-X5 live, WasteFlow-X5 / WaterFlow-X5 soon, CitizenFlow-X5 / EnergyFlow-X5 / PermitFlow-X5 roadmap) + conformité native + bottom strip Innoventera NEQ.

#### Modifié
- `<title>` HTML mis à jour : "CityFlow-X5 · AgenticX5-City — La ville qui voit, comprend et agit"
- 9 meta tags ajoutés (description, keywords, Open Graph)
- Sous-titre du logo nav modifié : "Premier produit de la gamme AgenticX5-City"
- Hero eyebrow modifié : "Premier produit de la gamme AgenticX5-City · Solutions B2G Villes Québec & Canada"

---

## [3.0.0] — Avril 2026 · "Pivot B2G"

#### Ajouté
- Pivot stratégique : abandon de la soumission IVÉO Défi #5 (Ville-Marie), pivot vers produit B2G éditeur "AgenticX5 Solutions · CityFlow" destiné aux Villes du Québec/Canada.
- 16 sections HTML structurées (nav, état des lieux, hero, piliers, Monte Carlo pédago, transparence, positionnement, dashboard, acteurs, graphe, leviers, workflow, blueprint, risques, variables, catalog, sources, footer).
- 6 métriques sourcées Montréal : 55K permis/an, 100+ décès piétons, 30K lésions construction, 4500 collisions cyclistes, 200K plaintes 311, 3.2 G$ coût mobilité.
- Heatmap 15 archétypes urbains avec verbatim et zones comportementales (vert/bleu/ambre/rouge/violet).
- Graphe d'influence SVG (148 lignes) avec convergence critique J+30-J+60.
- 4 leviers d'intervention quantifiés (+18, +14, +11, +8 pts) + scénario contrefactuel 61%→85%.
- Workflow Décideur 5 étapes + Blueprint 12 étapes / 4 phases.
- Section Modélisation Monte Carlo avec 8 catégories (A-H) + 10 étapes méthodologiques + 3 scénarios A/B/C.
- Catalogue 100 seeds par 8 catégories.
- 9 sources publiques documentées (SAAQ, CNESST, MTL Open Data, BIXI, MTQ Tome V, RSQA, EnvCanada, STM, Hydro-Québec).
- Style Dark HUD AgenticX5 : cyan (#14B8A6) + violet (#7C3AED), Orbitron + Rajdhani + JetBrains Mono.
- Conformité native : Loi 25 QC, EU AI Act, NIST AI RMF, ISO 42001, PROV-O W3C, HITL omniprésent.

#### Supprimé
- Toute mention IVÉO / Défi #5 / Ville-Marie / Laboratoire Centre-Ville
- Catalogue JSON détaillé des 100 seeds (remplacé par catalogue par catégories pour protection IP)

---

## 🔮 Roadmap

### v5.0 (Vague 2 — Visualisations avancées) · prévue Q3 2026
- Courbe d'adoption interactive avec scrubbing (D3.js ou vanilla SVG + JS)
- Toggle "Sans intervention" vs "Avec 4 leviers" sur la courbe principale
- Graphe d'influence interactif avec drag-and-drop (Cytoscape.js)
- Heatmap matricielle des 15 variables réglementaires × 15 archétypes
- Sparklines sous chaque KPI Dashboard
- Détail au clic sur les archétypes (modale enrichie)

### v6.0 (Vague 3 — Polish enterprise) · prévue Q4 2026
- Stepper interactif Workflow Décideur (5 étapes cliquables)
- Vue Gantt simplifiée pour le Blueprint (12 étapes / 4 phases)
- Matrice 2D probabilité × impact pour les risques structurels
- Logos officiels des sources (SAAQ, CNESST, etc.) avec statut de fraîcheur
- Tooltips sources sur les KPIs Montréal
- Audit accessibilité WCAG 2.1 AA complet

### Hub ombrelle `agenticx5-city.netlify.app` · prévu Q3 2026
- Landing minimale 5 sections : vision + roadmap gamme + conformité + contact
- Activation des liens ombrelle (breadcrumb nav + footer)
- Première démo de WasteFlow-X5 ou WaterFlow-X5 (selon traction marché)

---

## 📌 Conventions de versioning

- **MAJOR** (X.0.0) : pivot stratégique, refonte structurelle, breaking changes
- **MINOR** (x.X.0) : nouvelle fonctionnalité, vague d'améliorations cohérente
- **PATCH** (x.x.X) : correction de bug, ajustement mineur, optimisation

## 🏷️ Tags Git suggérés

```bash
git tag -a v4.0.0 -m "Interactive Demo Edition - 6 patches Vague 1 (ScrollSpy, MC anim, tableau comparatif, simulateur leviers, catalogue filtrable)"
git push origin v4.0.0
```

---

**Innoventera Inc. · CityFlow-X5 · Repo GitHub : `Preventera/AX5-CitaFlow`**
*Versionner ce fichier à la racine du repo · Mettre à jour à chaque release*
