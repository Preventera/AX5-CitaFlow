# 🏷️ Convention de Naming AgenticX5-City — v2.0

**Document interne · Innoventera Inc.**
**Date** : 8 mai 2026
**Auteur** : Mario Deshaies, CTO
**Statut** : ✅ Décision stratégique formalisée — première version versionnable
**Méthode** : croisement preuves factuelles GitHub + project_knowledge + audit comparatif v1.0/v2.0
**Remplace** : aucun document antérieur — *cette version est la première formalisation*

---

## 0. Préambule méthodologique

Cette Convention v2.0 formalise par écrit des décisions de naming qui étaient jusqu'à présent **partiellement appliquées sans être documentées** dans un fichier dédié.

### Sources d'autorité utilisées

| Source | Type d'autorité | Statut |
|---|---|---|
| **GitHub Release `v4.0.0`** sur `Preventera/AX5-CitaFlow` (privé) | Acte technique horodaté (16h ago au 8 mai) | ✅ Preuve factuelle |
| **PDFs annexes IVÉO** déposés le 1er mai 2026 | Documents officiels soumis à un tiers (IVÉO) | ✅ Preuve factuelle |
| **Vision Architecture v1.0/v1.2** (16 avril 2026) | Documents internes datés | ✅ Référence vision |
| **Addendum v1.3** (17 avril 2026) | Document patch non fusionné | 🟡 Partiel |
| **Landing HTML `citaflow.html`** | Code i18n FR/EN | 🟡 Incohérence interne |

### Principe directeur

> *Documenter ce qui est **factuellement utilisé** et trancher les incohérences en faveur de la **plus haute autorité** (acte technique versionné > document interne > code).*

---

## 1. Décisions formalisées en une page

### 🌆 Marque ombrelle (commerciale)

| Élément | Valeur | Source |
|---|---|---|
| **Nom de la plateforme** | `AgenticX5-City` | Vision v1.0/v1.2 (16 avril 2026) |
| **Alias technique court** | `AX5-City` | Vision v1.2 |
| **Tagline** | *« La ville qui voit, comprend et agit. »* | Convention de communication |
| **Éditeur** | Innoventera Inc. (NEQ 1178346806) | Documents officiels |

### 🚀 Module phare — Module 1 (livré)

| Élément | Valeur | Source |
|---|---|---|
| **Nom commercial public** | `CityFlow-X5` | GitHub Release `v4.0.0` (8 mai 2026) |
| **Nom technique repo GitHub** | `Preventera/AX5-CitaFlow` (privé) | GitHub direct |
| **Nom historique IVÉO** | `AX5-CitaFlow` | 4 PDFs annexes IVÉO (1er mai 2026) |
| **Nom de code original** | `UrbanIA` | PROMPT_TRANSFERT (16 avril 2026) |
| **Version actuelle** | v4.0.0 "Interactive Demo Edition" | GitHub Release |
| **Domaine couvert** | Mobilité urbaine, coactivité chantiers | Documentation produit |

### 🌐 Architecture en 6 domaines (Vision v1.x)

Conformément à la Vision Architecture v1.2 §3-3bis, AgenticX5-City couvre **6 domaines urbains interconnectés** :

| # | Domaine | Module phare actuel | Roadmap |
|---|---|---|---|
| 1 | **Mobilité urbaine** | `CityFlow-X5` | ✅ v4.0.0 livré (8 mai 2026) |
| 2 | **Énergie urbaine** | (à nommer) | Q1-Q2 2027 |
| 3 | **Santé urbaine** | (à nommer — voir §3) | Q3 2026 |
| 4 | **Économie circulaire** | (à nommer) | Q4 2026 |
| 5 | **Résilience climatique** | (à nommer) | Q1-Q2 2027 |
| 6 | **Gouvernance & Citoyenneté** | (à nommer) | Q3 2026 |

---

## 2. Hiérarchie de naming des produits

### Règle générale

```
AgenticX5-City (marque ombrelle)
  ├── CityFlow-X5 (module phare livré, mobilité)
  ├── [Module Santé] (prochain — Q3 2026)
  ├── [Module Gouvernance] (prochain — Q3 2026)
  ├── [Module Économie circulaire] (Q4 2026)
  ├── [Module Énergie] (Q1-Q2 2027)
  └── [Module Résilience] (Q1-Q2 2027)
```

### Pattern de naming retenu pour les modules à venir

**Décision** : adopter le pattern **`[Domaine]-X5`** (sans préfixe `AX5-` ni `Cita`) pour cohérence avec le module phare déjà livré.

**Justification** :
- ✅ Le suffixe `-X5` est **factuellement présent** dans `CityFlow-X5 v4.0.0` (GitHub Release)
- ✅ Cohérent avec la marque ombrelle `AgenticX5` dont `X5` fait partie
- ❌ Le préfixe `Cita-` (CitaVital, CitaCycle, etc.) **n'est documenté nulle part** dans les fichiers — son adoption serait une décision nouvelle, pas une formalisation
- ❌ La Vision v1.2 §7 utilise des noms anglais descriptifs (Smart City Fitness, GridSense, etc.) qui ne suivent pas le pattern `-X5`

### Exemples de noms pressentis (à valider domaine par domaine)

| Domaine | Nom de travail (Vision v1.2) | Nom commercial proposé pattern `-X5` |
|---|---|---|
| Mobilité | UrbanIA → AX5-CitaFlow → **CityFlow-X5** ✅ | (déjà fait) |
| Santé urbaine | Smart City Fitness | `VitalFlow-X5` ou `HealthFlow-X5` (à trancher) |
| Économie circulaire | SmartBins, MaterialLoop | `CycleFlow-X5` (à trancher) |
| Énergie | GridSense, DemandFlex | `GridFlow-X5` (à trancher) |
| Résilience | ClimateRisk, InfraHealth | `ShieldFlow-X5` (à trancher) |
| Gouvernance | CitizenPulse, ComplianceGraph | `CivicFlow-X5` (à trancher) |

→ ⚠️ **Ces noms sont des propositions, pas des décisions**. Chaque module devra avoir son propre acte de naming au moment du lancement (release v1.0 minimum).

---

## 3. Tableau d'héritage des noms (UrbanIA → CitaFlow → CityFlow-X5)

### Pour le module Mobilité (le seul livré)

| Période | Nom utilisé | Contexte | Statut aujourd'hui |
|---|---|---|---|
| 2024 - 16 avril 2026 | **UrbanIA** | Codename de développement, repo GitHub interne | ⚠️ Déprécié — encore présent dans `*-Dashboard.jsx`, code Python, certains README |
| 18 avril - 1er mai 2026 | **AX5-CitaFlow** | Nom commercial pour soumission IVÉO Défi #5 | ✅ **Conservé** comme nom du repo GitHub `Preventera/AX5-CitaFlow` (privé) — pour ne pas casser les liens internes |
| 18 avril - aujourd'hui | **AX5-CityFlow** (sans X5 suffixe) | Variante anglophone dans landing HTML i18n | ⚠️ **Incohérence à corriger** — voir §5 |
| 7 mai 2026 - aujourd'hui | **CityFlow-X5** | Nom commercial public officialisé via GitHub Release v4.0.0 | ✅ **Nom commercial canonique** |

### Règle de transcription

| Contexte | Nom à utiliser |
|---|---|
| **Communications externes** (LinkedIn, démos Villes, presse, contrats) | `CityFlow-X5` |
| **Documents techniques** (architecture, API, SDK) | `CityFlow-X5` ou `cityflow-x5` (lowercase) |
| **Repo GitHub URL** | `Preventera/AX5-CitaFlow` (conservé pour stabilité) |
| **Code source / variables** | `cityflow_x5` (snake_case) ou `cityflowX5` (camelCase) selon convention du langage |
| **Soumissions historiques IVÉO** | `AX5-CitaFlow` (figé pour traçabilité historique) |
| **Logs internes / debugging** | `UrbanIA` toléré pour ne pas casser le code existant |

---

## 4. Hiérarchie de la marque

### Visualisation

```
🌆 AgenticX5-City (marque ombrelle commerciale)
    │
    ├── tagline : "La ville qui voit, comprend et agit."
    │
    ├── 📦 ÉDITEUR : Innoventera Inc. (NEQ 1178346806, Montréal)
    │
    └── 🚀 PRODUITS
         │
         ├── ✅ CityFlow-X5 (module 1 - Mobilité urbaine) [LIVRÉ v4.0.0]
         │     └── Repo : Preventera/AX5-CitaFlow (privé)
         │     └── Démo : démonstrateur HTML 300 KB (à confirmer URL Netlify)
         │     └── Fondations : architecture WAVE 5 niveaux + 7 agents A01-A07
         │
         ├── 🔜 [Module Santé urbaine] (à nommer) [ROADMAP Q3 2026]
         ├── 🔜 [Module Gouvernance] (à nommer) [ROADMAP Q3 2026]
         ├── 🔜 [Module Économie circulaire] (à nommer) [ROADMAP Q4 2026]
         ├── 🔜 [Module Énergie] (à nommer) [ROADMAP Q1-Q2 2027]
         └── 🔜 [Module Résilience] (à nommer) [ROADMAP Q1-Q2 2027]
```

### Règle d'inclusion gamme

> *Toute communication externe sur `CityFlow-X5` (ou tout futur module) doit mentionner son appartenance à la gamme :*
>
> *« CityFlow-X5, premier produit de la gamme AgenticX5-City — éditée par Innoventera Inc. »*

---

## 5. Incohérences à corriger (issue de l'audit v2.0)

### 🔴 Incohérence #1 — Landing HTML utilise 2 noms simultanément

**Constat** : Le fichier `citaflow.html` contient à la fois `AX5-CitaFlow` et `AX5-CityFlow` dans ses textes i18n FR/EN.

**Action** : Remplacer toutes les occurrences par `CityFlow-X5` (forme commerciale canonique) dans la prochaine release du démonstrateur.

**Effort** : Find & Replace global (15 minutes).

### 🟠 Incohérence #2 — Nom du repo ne reflète pas le nom commercial

**Constat** : Le repo s'appelle `Preventera/AX5-CitaFlow` mais héberge `CityFlow-X5`.

**Décision** : **Garder le nom du repo inchangé**. Justifications :
1. Coût de migration élevé (URLs cassées, GitHub Release rebound, etc.)
2. Le tag `v4.0.0` est déjà publié — historique préservé
3. Le `README.md` du repo doit clarifier la dualité (à faire)

**Action** : Mettre à jour le `README.md` du repo avec un encadré explicatif.

### 🟡 Incohérence #3 — Description du repo obsolète

**Constat** : Description actuelle = *"Dossier de positionnement commercial · Soumission IVEO Defi #5"*

**Nouvelle description proposée** :

```
CityFlow-X5 — Premier produit de la gamme AgenticX5-City. 
Démonstrateur B2G de simulation d'adoption pour la mobilité urbaine. 
Édité par Innoventera Inc. (Montréal).
```

**Action** : 2 minutes — Settings → Edit description.

### 🟡 Incohérence #4 — Fusion Vision v1.2 + addendum v1.3 jamais réalisée

**Constat** : L'addendum v1.3 (17 avril 2026) indique *« à fusionner dans v1.2 pour produire v1.3 »* mais la fusion n'a jamais été faite.

**Action** : Quick win 30 minutes — produire `Vision_v1.3.md` unifié intégrant la section "Stratégie 3 Gaps".

### 🟢 Incohérence #5 — `CityFitNudg` mentionné dans landing

**Constat** : La landing HTML mentionne un module Phase 2 appelé `CityFitNudg` dans `eco.e6.name`. Probablement un nom de travail antérieur à toute Convention.

**Action** : À renommer lors du naming du module Santé urbaine (probablement `VitalFlow-X5` ou similaire).

---

## 6. Décisions ouvertes (à trancher dans les 30 prochains jours)

### Décision #1 — Nom du module Santé urbaine

**Options** :
- `VitalFlow-X5` (suit le pattern `-Flow-X5`)
- `HealthFlow-X5` (anglophone descriptif)
- `WellFlow-X5` (centré bien-être)
- Autre (à proposer)

**Échéance recommandée** : avant le démarrage du développement Q3 2026.

### Décision #2 — Pattern de naming des modules futurs

**Options** :
- ✅ **Pattern `[Domaine]-Flow-X5`** : CityFlow-X5, VitalFlow-X5, GridFlow-X5… (cohérence verbale)
- 🔄 **Pattern `[Domaine]-X5`** : CityFlow-X5, Vital-X5, Grid-X5… (plus court mais moins évocateur)
- 🔄 **Pattern `AX5-[Domaine]`** : AX5-City, AX5-Vital, AX5-Grid… (préfixé technique mais rupture avec CityFlow-X5)

**Recommandation** : pattern `[Domaine]-Flow-X5` — il préserve la signature "Flow" déjà établie commercialement.

### Décision #3 — Migration du nom UrbanIA dans le code

**Constat** : `*-Dashboard.jsx`, `iveo_scenarios.py`, plusieurs README mentionnent encore `UrbanIA`.

**Options** :
- A. **Migration complète** : tout renommer `cityflow-x5` (effort élevé, risque de bugs)
- B. **Migration partielle** : seulement les fichiers visibles aux utilisateurs (UI, README) (effort modéré)
- C. **Status quo** : tolérer `UrbanIA` dans le code interne (effort nul, mais dette technique)

**Recommandation** : Option B — migration partielle, à planifier dans la Vague 2.

---

## 7. Glossaire des acronymes (référence rapide)

| Acronyme | Signification | Contexte |
|---|---|---|
| **AgenticX5** | Plateforme d'écosystème agentique d'Innoventera | Marque corporate |
| **AgenticX5-City** | Branche municipale de l'écosystème (cette gamme) | Marque ombrelle |
| **AX5-City** | Alias technique de la gamme | Repos, code |
| **CityFlow-X5** | Module phare mobilité urbaine | Produit livré |
| **AX5-CitaFlow** | Nom historique du module mobilité (Phase IVÉO) | Documents archivés |
| **UrbanIA** | Codename original du module mobilité | Code legacy |
| **WAVE** | Architecture en 5 niveaux (Collecte/Normalisation/Analyse/Recommandation/Orchestration) | Architecture transverse |
| **PREDIAG-X5** | Méthodologie d'adoption — étape 1 (Pré-diagnostic) | Méthodologie |
| **DIAGX5** | Méthodologie — étape 2 (Diagnostic) | Méthodologie |
| **ADOPTX5** | Méthodologie — étape 3 (Adoption) | Méthodologie |
| **GATES-X5** | Méthodologie — étape 4 (Gouvernance) | Méthodologie |
| **AASF** | AgenticX5 Agent Skills Framework | Marketplace skills |
| **NudgeAgent** | Agent IA de notification adaptative | Composant produit |
| **PROV-O** | Provenance Ontology W3C (traçabilité audit) | Standard conformité |
| **U4SSC** | United for Smart Sustainable Cities (UN) | Référentiel externe |
| **HUGES / HUGO** | Acronymes internes (à documenter) | À clarifier |

---

## 8. Application immédiate

### Ce qui est tranché et applicable dès aujourd'hui

✅ Le nom commercial public du module 1 est **`CityFlow-X5`** (avec X5 en suffixe, tiret entre City et Flow et X5)
✅ Le nom du repo GitHub reste **`Preventera/AX5-CitaFlow`** (privé)
✅ La marque ombrelle est **`AgenticX5-City`** avec tagline *"La ville qui voit, comprend et agit."*
✅ L'architecture est en **6 domaines** (pas 7, pas 8)
✅ Toute communication externe inclut la mention *"premier produit de la gamme AgenticX5-City"*

### Ce qui reste à trancher dans 30 jours

⏳ Pattern de naming des modules futurs (`-Flow-X5` vs autre)
⏳ Nom commercial du module Santé urbaine
⏳ Stratégie de migration UrbanIA dans le code

### Ce qui doit être corrigé immédiatement

🔧 Description du repo GitHub (2 min)
🔧 Find & Replace `AX5-CityFlow` → `CityFlow-X5` dans landing HTML (15 min)
🔧 Fusion Vision v1.2 + addendum v1.3 → `Vision_v1.3.md` (30 min)
🔧 Mise à jour du `README.md` du repo avec encadré "pourquoi le repo s'appelle AX5-CitaFlow" (10 min)

---

## 9. Métriques de succès de cette Convention

| Métrique | Cible Q3 2026 | Cible Q4 2026 |
|---|---|---|
| Documents internes alignés sur "CityFlow-X5" (vs autres noms) | 80% | 100% |
| Repo GitHub avec README clarifiant la dualité naming | ✅ | ✅ |
| Vision v1.3 fusionnée publiée | ✅ | ✅ |
| 2e module (Santé) avec nom officialisé | 🟡 | ✅ |
| Glossaire AX5 complet (40+ acronymes) | 🟡 | ✅ |

---

## 10. Décision finale formalisée

> **Le 8 mai 2026, Innoventera Inc. formalise par écrit la Convention de Naming v2.0 pour la gamme AgenticX5-City, sur la base des actes techniques publiés sur GitHub (Release v4.0.0 du 7 mai 2026) et des documents IVÉO archivés du 1er mai 2026.**
>
> **`CityFlow-X5` est le nom commercial canonique du module phare (Mobilité urbaine), `AgenticX5-City` est la marque ombrelle de la gamme, l'architecture est en 6 domaines avec 5 modules à venir dont le naming sera tranché individuellement à leur lancement.**
>
> **Le pattern recommandé pour les modules futurs est `[Domaine]-Flow-X5` (à confirmer module par module).**

Cette Convention v2.0 prend effet immédiatement et remplace toute décision verbale ou conversationnelle antérieure.

---

## 11. Annexe — Pourquoi cette Convention est v2.0 (et pas v1.0)

Cette Convention porte le numéro **v2.0** par souci de cohérence narrative avec :
- Le bilan structuré v1.0 (`BILAN_STRUCTURE_ECOSYSTEME_AGENTICX5_CITY.md` du 7 mai 2026) qui mentionnait une "Convention v2.0 hybride"
- Le bilan v2.0 (`BILAN_STRUCTURE_v2_0.md` du 8 mai 2026) qui pointait l'absence de cette Convention

Mais factuellement, **c'est la première fois** qu'une Convention de Naming est documentée formellement pour AgenticX5-City. Aucune "Convention v1.0" écrite n'a précédé celle-ci.

→ La numérotation v2.0 est donc un **héritage des conversations** et non un acte de remplacement d'une v1.0 qui n'a jamais existé sous forme de document.

---

**Innoventera Inc. · AgenticX5-City · Mai 2026**
*Document interne · à versionner dans `Preventera/AX5-CitaFlow/docs/CONVENTION_NAMING_v2.0.md`*
