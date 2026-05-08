# 🌆 CityFlow-X5

> **La ville qui voit, comprend et agit.**

**Premier produit de la gamme [AgenticX5-City](#-la-gamme-agenticx5-city).**
Démonstrateur B2G de simulation d'adoption pour la mobilité urbaine, édité par **Innoventera Inc.** (Montréal, Québec).

[![Latest Release](https://img.shields.io/badge/release-v4.0.0-cyan)](https://github.com/Preventera/AX5-CitaFlow/releases/tag/v4.0.0)
[![Status](https://img.shields.io/badge/status-active-green)]()
[![License](https://img.shields.io/badge/license-Proprietary-red)](LICENSE.md)
[![Conformity](https://img.shields.io/badge/Loi%2025-✓-blue)]()
[![Conformity](https://img.shields.io/badge/EU%20AI%20Act-✓-blue)]()
[![Conformity](https://img.shields.io/badge/ISO%2042001-✓-blue)]()

---

## 🎯 Qu'est-ce que CityFlow-X5

**CityFlow-X5** est un démonstrateur stratégique destiné aux Villes du Québec et du Canada qui doivent gérer la **coactivité chantiers** sur leur territoire.

Plutôt que d'imposer une plateforme opérationnelle, CityFlow-X5 **simule sur 180 jours** comment 15 archétypes d'usagers urbains (coordinateurs Ville, entrepreneurs construction, cyclistes, piétons, automobilistes, services d'urgence, etc.) vont réagir à un système de gestion de coactivité — **avant son déploiement opérationnel**.

Cette approche **PREDIAG-X5** réduit le risque d'échec d'adoption d'un projet d'IA municipale et permet aux décideurs de :

- 🎯 Tester 4 leviers d'intervention **avant d'investir**
- 📊 Voir l'évolution probable de l'adoption sur 180 jours (10 000 simulations Monte Carlo)
- 🛡️ Anticiper les risques structurels et organiques
- 🤝 Garder la main grâce au **Human-in-the-Loop natif**

---

## 🎬 Démonstrateur

| Lien | Description |
|---|---|
| 🌐 [cityflow-x5.netlify.app](https://cityflow-x5.netlify.app) | Démo live (déploiement en cours) |
| 📦 [Release v4.0.0](https://github.com/Preventera/AX5-CitaFlow/releases/tag/v4.0.0) | Asset HTML téléchargeable (300 KB) |
| 📂 [`cityflow-x5.html`](cityflow-x5.html) | Code source du démonstrateur dans ce repo |

**Spécifications techniques** : 100% vanilla HTML/CSS/JS, 0 dépendance externe, déployable n'importe où (Netlify, intranet Ville, USB, hors-ligne).

---

## 🌐 La gamme AgenticX5-City

CityFlow-X5 est le premier produit déployé d'une gamme de plateformes municipales agentiques couvrant **6 domaines urbains interconnectés** :

```
🌆 AgenticX5-City — La ville qui voit, comprend et agit.
│
├── ✅ CityFlow-X5    → Mobilité urbaine [LIVRÉ v4.0.0]
├── 🔜 [Module Santé urbaine]              [Q3 2026]
├── 🔜 [Module Économie circulaire]        [Q4 2026]
├── 🔜 [Module Énergie urbaine]            [Q1-Q2 2027]
├── 🔜 [Module Résilience climatique]      [Q1-Q2 2027]
└── 🔜 [Module Gouvernance & Citoyenneté]  [Q3 2026]
```

📜 Voir la [Convention de Naming v2.0](docs/CONVENTION_NAMING_v2.0.md) pour la stratégie complète.

---

## 🛡️ Conformité native multi-juridictionnelle

CityFlow-X5 est conçu *by design* pour respecter :

| Standard | Statut |
|---|:---:|
| **Loi 25** (Québec — protection des renseignements personnels) | ✅ Native |
| **EU AI Act** (UE — obligations systèmes IA) | ✅ Native |
| **ISO 42001:2023** (gestion des systèmes IA) | ✅ Native |
| **NIST AI Risk Management Framework** (USA) | ✅ Native |
| **PROV-O** (W3C — traçabilité provenance) | ✅ Native |
| **Human-in-the-Loop (HITL)** | ✅ Native |

---

## 📁 Structure du repo

```
Preventera/AX5-CitaFlow/
├── cityflow-x5.html              # Démonstrateur principal v4.0
├── CHANGELOG.md                  # Historique B2G CityFlow-X5
├── CHANGELOG_IVEO.md             # Mémoire IVÉO préservée (v1.0-v1.11)
├── docs/
│   ├── AUDIT_UXUI_v1.0.md        # Audit UX/UI 22 éléments
│   ├── CONVENTION_NAMING_v2.0.md # Convention de naming gamme
│   ├── GEMINI_SYSTEM_PROMPT_v1.0.md
│   ├── GIT_PLAYBOOK_v4.0.md      # Workflow Git versionné
│   └── TEST_CHECKLIST_v4.0.md    # QA 5 minutes
├── 01-one-pager/                 # Archives IVÉO
├── 02-annexe-donnees-perimetre/  # Archives IVÉO
├── 03-annexe-specifications-techniques/
├── 04-questions-webinaire/
├── 05-email-outreach/
├── 06-personas/                  # 26 personas documentés
├── 07-archives-versions/
├── 08-budget/
└── proposals/iveo-montreal/      # Soumission IVÉO archivée
```

---

## 🏷️ Note sur le nom du repo

> Ce repo s'appelle `AX5-CitaFlow` mais héberge **CityFlow-X5**.
>
> Pourquoi ? Le nom `AX5-CitaFlow` est l'**identifiant historique** utilisé lors de la phase IVÉO Défi #5 (avril-mai 2026). Lors du **pivot stratégique B2G** du 7 mai 2026, le produit a été renommé **CityFlow-X5** pour la communication commerciale, mais le nom du repo a été **conservé** pour stabilité des liens publics, des releases et de l'historique Git.
>
> **Lignée** : `UrbanIA` (codename interne 2024-2025) → `AX5-CitaFlow` (Phase IVÉO) → `CityFlow-X5` (Phase B2G actuelle).
>
> Voir la [Convention de Naming v2.0](docs/CONVENTION_NAMING_v2.0.md) pour le détail complet.

---

## 📦 Versions

| Version | Date | Highlights |
|---|---|---|
| **v4.0.0** | 7 mai 2026 | Interactive Demo Edition · 6 patches UX/UI Vague 1 · Pivot B2G complet |
| v3.2.0 | 7 mai 2026 | Filtres archétypes interactifs |
| v3.1.0 | 7 mai 2026 | Architecture ombrelle AgenticX5-City |
| v3.0.0 | 5 mai 2026 | Pivot B2G (refonte 16 sections éditoriales) |
| v1.x (archive) | 17 avril - 1er mai 2026 | Phase IVÉO (voir [`CHANGELOG_IVEO.md`](CHANGELOG_IVEO.md)) |

---

## 🏛️ Éditeur

**Innoventera Inc.**
204 rue du Saint-Sacrement, espace 300
Montréal, Québec, H2Y 1W8
NEQ : 1178346806

📧 [team@agenticx5.com](mailto:team@agenticx5.com)
📱 514-622-3128
🌐 [agenticx5.com](https://agenticx5.com)

**Mario Deshaies** — VP AI / CTO / Fondateur
[LinkedIn](https://www.linkedin.com/in/mariodeshaies/)

---

## 📜 Licence

© 2026 Innoventera Inc. — Tous droits réservés.
Document protégé en vertu de la Loi sur le droit d'auteur du Canada (L.R.C. (1985), ch. C-42).

Voir [`LICENSE.md`](LICENSE.md) pour les détails.

---

*Dernière mise à jour : 8 mai 2026 · Version README : 2.0 · Aligné Convention de Naming v2.0*
