# 🚀 PLAYBOOK GIT — Push v4.0 vers Preventera/AX5-CitaFlow

**Stratégie** : Feature branch + tag SemVer + Pull Request
**Repo cible** : `Preventera/AX5-CitaFlow`
**Branche feature** : `feature/cityflow-x5-v4.0-interactive-demo`
**Tag final** : `v4.0.0`
**Style commits** : Conventional Commits (cohérent avec ton historique : `feat(...)`, `docs(...)`, `chore(...)`)

---

## 📋 Pré-requis (vérifications avant push)

Ouvre ton terminal VS Code dans le dossier local du repo (`AX5-CitaFlow\AX5-CitaFlow` selon ton arborescence) et lance :

```powershell
# 1. Vérifier qu'on est dans le bon repo
git remote -v

# Devrait afficher :
# origin  https://github.com/Preventera/AX5-CitaFlow.git (fetch)
# origin  https://github.com/Preventera/AX5-CitaFlow.git (push)

# 2. État actuel
git status

# 3. Récupérer les dernières modifs distantes (avant de créer la feature branch)
git checkout main
git pull origin main

# 4. Vérifier qu'on est bien sur main et clean
git status
```

⚠️ **STOP** — Si `git status` montre des modifications non committées, soit tu les commit d'abord, soit tu fais `git stash` pour les mettre de côté.

---

## 📂 Étape 1 — Copier les 5 fichiers vers le repo local

Sur ton ordinateur, copie les 5 fichiers téléchargés depuis cette session vers le dossier `AX5-CitaFlow\AX5-CitaFlow` :

| Fichier source (depuis Claude) | Destination dans le repo |
|---|---|
| `cityflow-x5.html` | `cityflow-x5.html` (racine) |
| `AX5-CityFlow_CHANGELOG.md` | `CHANGELOG.md` (racine, **renommé**) |
| `AX5-CityFlow_AUDIT_UXUI_v1.0.md` | `docs/AUDIT_UXUI_v1.0.md` |
| `AGENTICX5_GEMINI_SYSTEM_PROMPT_v1.0.md` | `docs/GEMINI_SYSTEM_PROMPT_v1.0.md` |
| `AX5-CityFlow_TEST_CHECKLIST_v4.0.md` | `docs/TEST_CHECKLIST_v4.0.md` |

### Commandes PowerShell (à adapter selon où tu as téléchargé)

```powershell
# Crée le dossier docs/ s'il n'existe pas
New-Item -ItemType Directory -Force -Path "docs"

# Copie + renomme (adapte le chemin source selon ton dossier de téléchargement)
$src = "$HOME\Downloads"  # ou "$HOME\Desktop", à adapter

Copy-Item "$src\cityflow-x5.html" "cityflow-x5.html" -Force
Copy-Item "$src\AX5-CityFlow_CHANGELOG.md" "CHANGELOG.md" -Force
Copy-Item "$src\AX5-CityFlow_AUDIT_UXUI_v1.0.md" "docs\AUDIT_UXUI_v1.0.md" -Force
Copy-Item "$src\AGENTICX5_GEMINI_SYSTEM_PROMPT_v1.0.md" "docs\GEMINI_SYSTEM_PROMPT_v1.0.md" -Force
Copy-Item "$src\AX5-CityFlow_TEST_CHECKLIST_v4.0.md" "docs\TEST_CHECKLIST_v4.0.md" -Force

# Vérifier que les 5 fichiers sont bien là
Get-ChildItem -Recurse -Include "cityflow-x5.html","CHANGELOG.md","AUDIT_UXUI_v1.0.md","GEMINI_SYSTEM_PROMPT_v1.0.md","TEST_CHECKLIST_v4.0.md"
```

---

## 🌿 Étape 2 — Créer la feature branch

```powershell
# Créer et basculer sur la nouvelle branche
git checkout -b feature/cityflow-x5-v4.0-interactive-demo

# Confirmer la branche active
git branch --show-current
# Doit afficher : feature/cityflow-x5-v4.0-interactive-demo
```

---

## 💾 Étape 3 — Commits granulaires (5 commits sémantiques)

J'organise volontairement en **5 commits séparés** pour donner une **traçabilité PROV-O** claire à chaque livrable (cohérent avec ta philosophie de gouvernance AgenticX5).

### Commit 1 — Le démonstrateur principal v4.0 ⭐

```powershell
git add cityflow-x5.html
git commit -m "feat(cityflow-x5): v4.0 Interactive Demo Edition" -m "
6 patches UX/UI Vague 1 (~992 lignes ajoutées, 100% vanilla JS) :

- V4-1 ScrollSpy nav indicator (cyan/violet bar, IntersectionObserver throttled rAF)
- V4-2 Animation Monte Carlo (8 trajectoires en cascade, médiane + IC 95%, ~2.5s)
- V4-3 Tableau comparatif Cisco/IBM/Sidewalk vs CityFlow-X5 (7 critères, 4 colonnes)
- V4-4 Simulateur leviers interactif (4 cards cliquables, encadré sticky pulsant, saturation 85%)
- V4-5 Catalogue 100 seeds filtrable (search debounce 80ms + 8 catégories A-H)
- V4-6 JS unifié vanilla (4 IIFE autonomes, 0 dépendance externe)

Conformité ombrelle préservée :
- Architecture AgenticX5-City → CityFlow-X5 intacte (18 mentions)
- Tagline 'voit, comprend, agit' (4 occurrences)
- 0 mention IVÉO résiduelle
- 0 lien Netlify cassé

Stats fichier :
- 263 KB → 300 KB (+14%)
- 4 914 → 5 906 lignes (+992)
- 1 → 2 scripts JS (vanilla pur, validés syntaxiquement)
- Bundle final 0 dépendance, déployable Netlify Drop direct
"
```

### Commit 2 — Changelog versionné

```powershell
git add CHANGELOG.md
git commit -m "docs(changelog): version v3.0 → v4.0 history + roadmap v5/v6" -m "
Format Keep a Changelog 1.1.0 + SemVer.

Couvre :
- v4.0.0 'Interactive Demo Edition' (6 patches Vague 1, stats détaillées)
- v3.2.0 'Filtres Archétypes' (heatmap interactive)
- v3.1.0 'Architecture Ombrelle AgenticX5-City' (breadcrumb, tagline, footer 3 colonnes)
- v3.0.0 'Pivot B2G' (abandon IVÉO, pivot éditeur Villes)

Roadmap documentée :
- v5.0 Vague 2 visualisations avancées (Q3 2026)
- v6.0 Vague 3 polish enterprise (Q4 2026)
- Hub ombrelle agenticx5-city.netlify.app (Q3 2026)
"
```

### Commit 3 — Audit UX/UI complet

```powershell
git add docs/AUDIT_UXUI_v1.0.md
git commit -m "docs(audit): UX/UI v1.0 — inventaire 22 éléments + roadmap 3 vagues" -m "
Document de pilotage stratégique :
- Inventaire exhaustif 22 éléments visuels (16 sections + nav + footer)
- 4 grilles d'évaluation (lisibilité, crédibilité, interactivité, actionnabilité)
- Matrice impact × effort × risque (priorisation P0/P1/P2)
- Roadmap 3 vagues détaillée (Vague 1 livrée v4.0, Vagues 2-3 à planifier)
- 3 briefs Gemini AI Studio prêts à coller

Cible : Directeur de Ville Québec/Canada en démo de 15 min.
"
```

### Commit 4 — Prompt système Gemini

```powershell
git add docs/GEMINI_SYSTEM_PROMPT_v1.0.md
git commit -m "docs(gemini): system prompt v1.0 figé pour Google AI Studio" -m "
Prompt à coller dans chaque session AI Studio (Gemini 3 Flash Preview / 2.5 Pro).

Encadre la génération de composants AgenticX5-City :
- Design tokens stricts (30+ variables CSS extraites de cityflow-x5.html)
- Typography (Orbitron / Rajdhani / JetBrains Mono)
- Component patterns (KPI cards, buttons, pills, ombrella tag)
- Tech stack preferences (React 18, Tailwind 3.4, Lucide, vanilla JS pour démos)
- Umbrella branding obligatoire (breadcrumb + hero tag + footer roadmap)
- Data integrity (interdit d'inventer des chiffres précis sans TODO marker)
- Ethics & governance (HITL visible, Loi 25, accessibility AA)
- Language (français QC par défaut, anglais pour le code)

Bénéfice : cohérence visuelle garantie sur tous futurs produits de la gamme
(WasteFlow-X5, WaterFlow-X5, CitizenFlow-X5, EnergyFlow-X5, PermitFlow-X5).
"
```

### Commit 5 — Test checklist QA

```powershell
git add docs/TEST_CHECKLIST_v4.0.md
git commit -m "docs(qa): test checklist v4.0 — validation 5 min des 6 animations" -m "
Procédure de test pré-déploiement (5 min, ~30 critères) :

- Test 1 ScrollSpy nav (30s)
- Test 2 Animation Monte Carlo (1 min)
- Test 3 Tableau comparatif (30s)
- Test 4 Simulateur leviers (1.5 min) ⭐ élément central démo
- Test 5 Catalogue 100 seeds (1.5 min)
- Test 6 Heatmap archétypes v3.2 (30s)
- Test responsive mobile (30s)
- Test Lighthouse (cibles ≥90)

À utiliser avant chaque push Netlify pour garantir la qualité.
"
```

---

## 🚀 Étape 4 — Push de la feature branch

```powershell
# Push initial avec tracking
git push -u origin feature/cityflow-x5-v4.0-interactive-demo

# Vérifier que la branche distante existe
git branch -r | findstr cityflow-x5-v4.0
```

---

## 🏷️ Étape 5 — Créer le tag SemVer v4.0.0

```powershell
# Tag annoté (recommandé pour les releases)
git tag -a v4.0.0 -m "CityFlow-X5 v4.0.0 — Interactive Demo Edition

Vague 1 d'améliorations UX/UI (6 patches V4-1 à V4-6) :
- ScrollSpy nav · Animation Monte Carlo · Tableau comparatif
- Simulateur leviers interactif · Catalogue 100 seeds filtrable
- JS unifié vanilla, 0 dépendance, 100% conformité ombrelle

Stats : 300 KB · 5 906 lignes · +992 lignes vs v3.2
Conformité : Loi 25 · EU AI Act · ISO 42001 · NIST AI RMF · PROV-O
Architecture : AgenticX5-City > CityFlow-X5 (premier produit de la gamme)
"

# Push du tag
git push origin v4.0.0

# Vérifier que le tag existe distant
git ls-remote --tags origin | findstr v4.0.0
```

---

## 📥 Étape 6 — Créer la Pull Request

### Option A — Via GitHub CLI (le plus rapide)

```powershell
# Si tu as gh installé (https://cli.github.com/)
gh pr create `
  --base main `
  --head feature/cityflow-x5-v4.0-interactive-demo `
  --title "feat(cityflow-x5): v4.0.0 Interactive Demo Edition" `
  --body @"
## 🎯 Objectif

Pousser la **Vague 1 d'améliorations UX/UI** sur le démonstrateur CityFlow-X5, premier produit de la gamme AgenticX5-City.

## 📦 Contenu (5 fichiers)

| Fichier | Type | Description |
|---|---|---|
| ``cityflow-x5.html`` | 🎯 Produit | Démonstrateur v4.0 (300 KB · 5 906 lignes) |
| ``CHANGELOG.md`` | 📋 Historique | Versionnement v3.0 → v4.0 + roadmap |
| ``docs/AUDIT_UXUI_v1.0.md`` | 📊 Audit | Inventaire 22 éléments + roadmap 3 vagues |
| ``docs/GEMINI_SYSTEM_PROMPT_v1.0.md`` | 🤖 Outil | Prompt figé Google AI Studio |
| ``docs/TEST_CHECKLIST_v4.0.md`` | ✅ QA | Validation 5 min pré-déploiement |

## ✅ Tests effectués

- [x] Validation syntaxique JS (Node ``new Function()``)
- [x] Intégrité structurelle (16/16 sections, 1/1 footer)
- [x] Conformité ombrelle préservée (18 mentions AgenticX5-City)
- [x] 0 mention IVÉO résiduelle
- [x] 0 lien Netlify cassé
- [ ] Test visuel manuel (à faire par reviewer via TEST_CHECKLIST_v4.0.md)
- [ ] Test Lighthouse Performance/A11y/Best Practices ≥90

## 🚀 Déploiement post-merge

1. Pull main local
2. Drag-drop ``cityflow-x5.html`` sur ``cityflow-x5.netlify.app`` (Netlify Drop)
3. Vérifier la prod live
4. (Optionnel) Annoncer sur LinkedIn la v4.0

## 🔗 Références

- Tag : ``v4.0.0``
- Documentation animations : ``docs/AUDIT_UXUI_v1.0.md``
"@
```

### Option B — Via interface web GitHub

Ouvre ce lien dans ton navigateur (URL pré-remplie pour la PR) :

```
https://github.com/Preventera/AX5-CitaFlow/compare/main...feature/cityflow-x5-v4.0-interactive-demo
```

Clique sur **"Create pull request"** et copie le titre + body de l'option A.

---

## 🔀 Étape 7 — Merger la PR (après revue)

### Si tu valides toi-même (workflow solo) :

```powershell
# Via GitHub CLI
gh pr merge --squash --delete-branch

# Ou via interface web : bouton "Squash and merge"
```

### Récupérer le merge en local :

```powershell
git checkout main
git pull origin main
git branch -d feature/cityflow-x5-v4.0-interactive-demo  # supprime la branche locale
```

---

## ✅ Vérification finale

```powershell
# 1. Confirmer que le tag v4.0.0 est sur GitHub
# Va sur https://github.com/Preventera/AX5-CitaFlow/releases/tag/v4.0.0

# 2. Confirmer que les 5 fichiers sont présents sur main
git log --oneline -5

# 3. Lister les fichiers v4.0
git ls-tree -r main --name-only | findstr -i "cityflow-x5\|CHANGELOG\|AUDIT\|GEMINI\|TEST_CHECKLIST"
```

---

## 🎁 Bonus — Créer une GitHub Release (visibilité publique)

Si tu veux que `v4.0.0` apparaisse comme une "release" formelle sur GitHub (badge sur le repo) :

```powershell
gh release create v4.0.0 `
  --title "CityFlow-X5 v4.0.0 — Interactive Demo Edition" `
  --notes-file CHANGELOG.md `
  cityflow-x5.html
```

→ Cela attache aussi le fichier `cityflow-x5.html` comme **asset téléchargeable** depuis la page de release. Pratique si tu veux donner le démonstrateur à un Directeur de Ville sans qu'il navigue dans le code.

---

## 🆘 Troubleshooting rapide

### "Permission denied" au push
```powershell
# Vérifie ton authentification
gh auth status

# Si nécessaire, re-login
gh auth login
```

### "Updates were rejected" au push
```powershell
# Quelqu'un a poussé avant toi sur cette branche
git pull origin feature/cityflow-x5-v4.0-interactive-demo --rebase
git push origin feature/cityflow-x5-v4.0-interactive-demo
```

### Annuler le dernier commit (avant push)
```powershell
git reset --soft HEAD~1
```

### Annuler tout et repartir de main
```powershell
git checkout main
git branch -D feature/cityflow-x5-v4.0-interactive-demo
# Relancer le playbook depuis l'étape 2
```

---

## 📊 Résumé visuel du flow Git

```
main ────────────────●─────────────────●─────────────●───────────►
                      \                                /
                       \                              /
                        ●──●──●──●──●─────[merge]────/
                        │  │  │  │  │
                        │  │  │  │  └─ docs(qa): TEST_CHECKLIST
                        │  │  │  └──── docs(gemini): SYSTEM_PROMPT
                        │  │  └─────── docs(audit): AUDIT_UXUI
                        │  └────────── docs(changelog): v3.0→v4.0
                        └───────────── feat(cityflow-x5): v4.0 ⭐
                        
                                                       │
                                                      [tag v4.0.0]
```

---

## ⏱️ Temps estimé d'exécution complet

- **Étape 1** (copie fichiers) : 1 min
- **Étape 2** (branch) : 10 sec
- **Étape 3** (5 commits) : 2 min
- **Étape 4** (push branch) : 30 sec
- **Étape 5** (tag) : 30 sec
- **Étape 6** (PR) : 1 min via gh CLI / 3 min via web
- **Étape 7** (merge) : 30 sec

**Total : ~6 minutes** si tout va bien.

---

**Innoventera Inc. · CityFlow-X5 v4.0.0 · Mai 2026**
*Playbook exécutable — versionner dans Preventera/AX5-CitaFlow*
