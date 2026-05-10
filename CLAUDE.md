# CLAUDE.md — CityFlow-X5 Operational Memory

> **Document type** : Operational memory for Claude Code sessions on this repo
> **Audience** : Claude Code AI (NOT humans, though humans can read it)
> **Repo** : `Preventera/AX5-CitaFlow` (private)
> **Product** : CityFlow-X5 (commercial canonical name)
> **Last updated** : 2026-05-09
> **Authority level** : Canonical — overrides any conflicting info in older docs
> **Maintainer** : Mario Deshaies, CTO Innoventera Inc.

---

## 🚨 SESSION KICKOFF — Read this first

**If you are a Claude Code instance starting a session in this repo, read these 5 facts before doing anything**:

1. **This repo hosts CityFlow-X5**, the commercial product. The repo name `AX5-CitaFlow` is historical (IVÉO Phase, April-May 2026) and was kept for link stability. Lineage: `UrbanIA → AX5-CitaFlow → CityFlow-X5`.

2. **The canonical naming source is** `docs/CONVENTION_NAMING_v2.0.md`. Never use `AX5-CitaFlow` or `CityFlow` (without `-X5`) in commercial contexts. Always use `CityFlow-X5`.

3. **The governance continuum is** `DiagX5 → GATES-X5 → AdoptX5` (documented at https://ax5-suite-gouvernance.netlify.app/). The name `AEGIS-X5` is **deprecated** — replaced by `GATES-X5` for the post-deployment governance phase. If you encounter `AEGIS-X5` in older content, rename to `GATES-X5`.

4. **Default Git workflow** is squash-merge with feature branches and explicit kill switches. Never use `--force`, `--no-verify`, or `--amend`. Always ask the user for confirmation before `git push` and before `gh pr create`.

5. **Last 3 commits on main** (as of 2026-05-09 22:00 UTC):
   - `da4b8f1` docs(catalogue): 100 services AI MVP v1.2 (#3)
   - `b4c5422` docs(readme): align with Convention v2.0 + CityFlow-X5 v4.0
   - `3664e4e` feat(cityflow-x5): v4.0.0 Interactive Demo Edition (#1)

**Read these 4 files in order before any non-trivial action**:
1. `README.md` (public-facing context)
2. `docs/CONVENTION_NAMING_v2.0.md` (naming authority)
3. `docs/CATALOGUE_100_SERVICES_v1.2.md` (product strategy)
4. `docs/GIT_PLAYBOOK_v4.0.md` (Git workflow rules)

---

## 1. Repo identity

| Attribute | Value |
|---|---|
| **GitHub repo** | `Preventera/AX5-CitaFlow` |
| **Visibility** | Private |
| **Default branch** | `main` |
| **Product hosted** | CityFlow-X5 (commercial name) |
| **Tagline** | "La ville qui voit, comprend et agit." |
| **Editor** | Innoventera Inc. (Montréal, Québec, NEQ 1178346806) |
| **Current version** | v4.0.0 (GitHub Release published 2026-05-07, latest) |
| **Local path (Mario's machine)** | `C:\Users\Mario\Documents\2026-BACKUP\AX5-CitaFlow\AX5-CitaFlow` |

---

## 2. Naming canonical rules (from Convention v2.0)

### What to use in different contexts

| Context | Use | Never use |
|---|---|---|
| External communications (LinkedIn, demos, press) | `CityFlow-X5` | `CityFlow`, `CitaFlow`, `AX5-CitaFlow` |
| Technical docs, API, SDK | `CityFlow-X5` or `cityflow-x5` (lowercase) | `urbania`, `citaflow` |
| Repo URL | `Preventera/AX5-CitaFlow` (preserved) | Don't rename |
| Source code variables | `cityflow_x5` (snake_case) or `cityflowX5` (camelCase) | `urbania`, `citaflow` |
| Historical IVÉO submissions | `AX5-CitaFlow` (frozen for traceability) | Don't rewrite history |
| Internal logs / debugging | `UrbanIA` tolerated to avoid breaking legacy code | New code: avoid |

### Umbrella brand

- **AgenticX5-City** = umbrella brand (6 urban domains)
- **AX5-City** = short technical alias
- The 6 domains are: Mobilité urbaine, Énergie urbaine, Santé urbaine, Économie circulaire, Résilience climatique, Gouvernance & Citoyenneté
- Recommended pattern for future modules: `[Domain]-Flow-X5` (to be confirmed module by module)

---

## 3. Governance continuum (CRITICAL — recent update)

**The canonical governance suite of AgenticX5 in 2026 is**:

```
DiagX5 ──────► GATES-X5 ──────► AdoptX5
(Phase 01)     (Phase 02)        (Phase 03)
Pre-deploy     Run / Audit       Post-deploy
~30 days       Continuous        Quarterly cycle
```

**Live reference site**: https://ax5-suite-gouvernance.netlify.app/

### What was deprecated

- `AEGIS-X5` (historical name in marketplace v2 and older docs) is **deprecated** in 2026 nomenclature
- Replaced by `GATES-X5` for the same 5 modules (OBSERVE, GUARD, EVALUATE, COLLECT, REMEMBER)
- `GATES-X5` acronym = **G**overnance **A**gent **T**rust **E**nforcement **S**ystem

### Other deployed Netlify sites in the ecosystem

| URL | Content |
|---|---|
| `https://ax5-suite-gouvernance.netlify.app/` | Governance suite continuum (master ref) |
| `https://diagx5-architexture.netlify.app/` | DiagX5 architecture details |
| `https://gates-x5-slides.netlify.app/` | GATES-X5 13-slide carousel |
| `https://adopt-x5-demo.netlify.app/` | AdoptX5 live demo |
| `https://avant-hub.netlify.app/` | 16 sectoral platforms showcase |

---

## 4. Repo structure

```
Preventera/AX5-CitaFlow/
├── cityflow-x5.html              # Main demonstrator v4.0 (300 KB · 5,906 lines)
├── README.md                     # Public-facing presentation (aligned Convention v2.0)
├── CHANGELOG.md                  # B2G CityFlow-X5 history
├── CHANGELOG_IVEO.md             # IVÉO heritage preserved (v1.0-v1.11)
├── docs/
│   ├── CONVENTION_NAMING_v2.0.md     ⭐ Naming source of truth
│   ├── CATALOGUE_100_SERVICES_v1.2.md ⭐ Product strategy source of truth
│   ├── AUDIT_UXUI_v1.0.md            # UX/UI audit (22 elements + 3 waves roadmap)
│   ├── GEMINI_SYSTEM_PROMPT_v1.0.md  # Google AI Studio prompt
│   ├── GIT_PLAYBOOK_v4.0.md          # Git workflow rules
│   └── TEST_CHECKLIST_v4.0.md        # 5-min QA checklist
├── 01-one-pager/ → 08-budget/    # IVÉO archives (preserved, do not modify)
└── proposals/iveo-montreal/      # IVÉO submission archive
```

---

## 5. Git workflow rules (mandatory)

### Conventional Commits patterns

| Type | Use case |
|---|---|
| `feat(scope):` | New product feature (e.g., demonstrator update) |
| `fix(scope):` | Bug fix |
| `docs(scope):` | Documentation only |
| `chore(scope):` | Tooling, config, no production change |
| `refactor(scope):` | Code restructure, no behavior change |

Common scopes: `cityflow-x5`, `naming`, `catalogue`, `readme`, `governance`

### Sprint workflow (validated by 3 successful PRs)

1. **Local prep** : `git status` → must be clean → `git checkout main && git pull origin main` → `git checkout -b [type]/[scope]-[description]`
2. **Commit** : `git add [files]` → `git commit -m "[type](scope): description"` with body in Conventional Commits format
3. **Kill switch #1 (push)** : ASK USER explicit confirmation before `git push -u origin [branch]`. User types `1` (Yes), NEVER `2` (don't ask again).
4. **Kill switch #2 (PR creation)** : ASK USER explicit confirmation before `gh pr create`. User types `1`.
5. **Pre-merge diagnostic** (recommended) : `gh pr view [N] --json state,mergeable,mergeStateStatus`. Check MERGEABLE + CLEAN.
6. **Kill switch #3 (merge)** : `gh pr merge [N] --squash --delete-branch` (always squash, always delete branch)
7. **Final sync** : `git fetch --prune origin && git pull origin main && git log --oneline -5`

### Forbidden actions (NEVER)

- ❌ `git push --force` or `git push -f`
- ❌ `git commit --amend` after pushing
- ❌ `git push --no-verify` (skips hooks)
- ❌ `gh pr merge --admin` (bypasses protections)
- ❌ Direct push to main without PR (exception: README.md trivial updates only)
- ❌ Disable kill switches via "don't ask again" option

---

## 6. Native compliance (referenced everywhere)

The product CityFlow-X5 is positioned with native multi-jurisdictional compliance:

| Standard | Scope |
|---|---|
| **Loi 25** (Quebec) | Personal data protection |
| **EU AI Act** | AI system obligations (esp. art. 14 HITL) |
| **ISO 42001:2023** | AI management systems |
| **NIST AI Risk Management Framework** | US risk methodology |
| **PROV-O** (W3C) | Provenance tracking |
| **MIT AI Risk Repository v4** | 1700+ risks, 831 mitigations |
| **Human-in-the-Loop (HITL)** | Native by design |

When generating documentation, always mention these standards when relevant. Never claim compliance without referencing the standard explicitly.

---

## 7. Editorial discipline (kill switches)

Inherited doctrine from NordicX5 transposed to CityFlow-X5:

- ❌ NEVER add public GitHub repo URLs to public-facing demonstrator pages (avoid code leak)
- ❌ NEVER promise "−25 to −40% in 3 years" (use recalibrated 15-30% over 5-7 years)
- ❌ NEVER name third-party orgs (UMQ, Montreal, Laval, etc.) as partners without explicit consent
- ❌ NEVER claim TRL 7-8 for platforms that haven't been formally validated (8 platforms cited in catalogue need formal TRL audit)
- ❌ NEVER mix FR text inside `data-lang="en"` spans (or vice versa) in HTML
- ❌ NEVER write "AEGIS-X5" in new content (use GATES-X5)
- ❌ NEVER write "CityFlow" without `-X5` suffix in new commercial content
- ❌ NEVER reproduce IVÉO submission content as if it were a current commercial pitch (it's archived)

---

## 8. Active state (2026-05-09)

### What is DEPLOYED

- ✅ Repo `Preventera/AX5-CitaFlow` private with 5 commits on main
- ✅ GitHub Release v4.0.0 public with `cityflow-x5.html` downloadable asset
- ✅ Tag `v4.0.0` annotated on main
- ✅ 3 PRs merged (#1, #2, #3)

### What is NOT YET deployed

- ⏳ `cityflow-x5.netlify.app` URL is reserved but returns 403 (not yet uploaded)
- ⏳ Repo description on GitHub (panneau About) still mentions IVÉO submission (obsolete)
- ⏳ GitHub billing issue (red banner) needs to be resolved

### Pending decisions (user-side)

- ⏳ Module Santé urbaine : pick name (e.g., VitalFlow-X5, HealthFlow-X5)
- ⏳ TRL formal audit of the 8 supporting platforms (SafetyGraph, BehaviorX, etc.)
- ⏳ Strategic decision on category 6 services (HomelessnessHotspot, WelfareFraud, etc.) — keep in catalogue or move to NDA-only annex
- ⏳ MIT v4 × continuum 84-cells mapping for municipal sector

---

## 9. Communication workflow

### Session pattern (validated)

1. Mario drafts prompts in Claude.ai (analysis/exploration)
2. Pastes into Claude Code (VS Code Windows terminal)
3. Push to GitHub `Preventera/AX5-CitaFlow`
4. (Future) Netlify auto-deploys on push to main
5. Screenshot review by Mario after each PR

### Decision gates

- Editorial changes (text, README) : Mario reads first, then commits direct or PR
- Strategic naming/governance : always Convention-versioned (PR mandatory)
- Commercial promises (KPIs, ROI) : must pass actuarial defensibility test before publishing
- Public methodology : must be reproducible bit-for-bit

---

## 10. Three-day sprint summary (7-9 May 2026)

### Day 1 (7 May 2026)
- Sprint v4.0 demonstrator (PR #1 created)
- Tag v4.0.0 pushed
- GitHub Release v4.0.0 published (public, downloadable asset)

### Day 2 (8 May 2026)
- Productive doubt cycle (bilan v1.0 vs v2.0 audit)
- Factual GitHub verification (404 public → screenshot proves private repo)
- Convention de Naming v2.0 formalized
- PR #2 (Convention) created and merged → commit `cba7a20` (18:13 UTC)
- PR #1 (v4.0) merged → commit `3664e4e` (18:24 UTC)
- README v2.0 direct commit on main → `b4c5422`

### Day 3 (9 May 2026)
- Catalogue 100 services v1.0 produced
- Refactored to v1.1 (alignment Convention v2.0)
- Major correction : Mario revealed 4 deployed Netlify sites documenting DiagX5/GATES-X5/AdoptX5 continuum
- Catalogue revised to v1.2 (continuum alignment, AEGIS-X5 deprecated)
- PR #3 created and merged → commit `da4b8f1` (21:42 UTC)
- This CLAUDE.md created at end of day 3

---

## 11. KILL switches — what NEVER to do

Compiled from 3 days of validated discipline:

- NEVER use `--force`, `--no-verify`, `--amend` on Git operations
- NEVER push directly to main without PR (except trivial README updates)
- NEVER skip kill-switch confirmation before `push` or `gh pr create`
- NEVER tap "don't ask again" option in Claude Code prompts
- NEVER write "AEGIS-X5" in new content (deprecated → use GATES-X5)
- NEVER write "CityFlow" without `-X5` in commercial content
- NEVER claim a platform is at TRL 7+ without formal internal validation
- NEVER reproduce IVÉO submission framing as current commercial pitch
- NEVER add public GitHub URLs to public-facing demo pages
- NEVER name third-party orgs (UMQ, cities) as partners without consent
- NEVER promise more than 15-30% incident reduction over 5-7 years
- NEVER mix FR/EN languages within wrong i18n spans

---

## 12. Reference quick-table

| Item | Value |
|---|---|
| Maintainer | Mario Deshaies |
| Role | VP AI / CTO / Founder Innoventera Inc. |
| Location | Val-des-Sources, QC (Montreal metropolitan) |
| Email | team@agenticx5.com |
| Phone | 514-622-3128 |
| Site | agenticx5.com |
| LinkedIn | /in/mariodeshaies |
| Repo (this) | github.com/Preventera/AX5-CitaFlow (private) |
| Local path | C:\Users\Mario\Documents\2026-BACKUP\AX5-CitaFlow\AX5-CitaFlow |
| IDE workflow | Claude Code v2.1+ (VS Code Windows) |
| Latest tag | v4.0.0 (2026-05-07) |
| Latest commit on main | `da4b8f1` (2026-05-09 21:42 UTC) |
| Convention naming | v2.0 (committed `cba7a20`) |
| Catalogue services | v1.2 (committed `da4b8f1`) |
| Governance continuum site | https://ax5-suite-gouvernance.netlify.app/ |

---

## 13. Version history of this CLAUDE.md

| Version | Date | Author | Key changes |
|---|---|---|---|
| 1.0 | 2026-05-09 | Mario Deshaies (via Claude Opus 4.7) | Initial creation. Consolidated from Convention v2.0, Catalogue v1.2, README v2.0, Bilan officiel 3 jours, 4 Netlify reference sites. |

---

**End of operational memory. Future Claude Code sessions: re-read sections 0-3 at minimum before any non-trivial action.**
