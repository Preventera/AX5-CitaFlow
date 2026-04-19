#!/bin/bash

# ================================================================
# AX5-CitaFlow · Script d'initialisation du dépôt Git
# ================================================================
# Ce script automatise les étapes d'initialisation du dépôt local,
# de la création du commit initial et du push vers GitHub.
#
# PRÉ-REQUIS :
# 1. Avoir créé le dépôt PRIVÉ "AX5-CitaFlow" sur GitHub sous
#    l'organisation "Preventera" via https://github.com/new
# 2. Avoir Git installé et configuré (user.name, user.email)
# 3. Avoir un accès authentifié à GitHub (SSH ou HTTPS avec PAT)
#
# USAGE :
#   chmod +x init-git-repo.sh
#   ./init-git-repo.sh
# ================================================================

set -e  # Arrêt sur erreur

echo ""
echo "╔══════════════════════════════════════════════════════════════╗"
echo "║   AX5-CitaFlow · Initialisation du dépôt Git privé          ║"
echo "║   Innoventera Inc. · AgenticX5                              ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""

# ----------------------------------------------------------------
# Étape 1 — Vérifications
# ----------------------------------------------------------------

echo "[1/6] Vérification de l'environnement..."

if ! command -v git &> /dev/null; then
  echo "❌ ERREUR : Git n'est pas installé. Installer Git d'abord."
  exit 1
fi

GIT_USER=$(git config --global user.name)
GIT_EMAIL=$(git config --global user.email)

if [ -z "$GIT_USER" ] || [ -z "$GIT_EMAIL" ]; then
  echo "⚠️  ATTENTION : Git user.name ou user.email non configurés."
  echo "   Configure avec :"
  echo "     git config --global user.name \"Mario Deshaies\""
  echo "     git config --global user.email \"team@agenticx5.com\""
  read -p "   Continuer quand même ? [y/N] " -n 1 -r
  echo
  if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    exit 1
  fi
fi

echo "   ✅ Git : $GIT_USER <$GIT_EMAIL>"
echo ""

# ----------------------------------------------------------------
# Étape 2 — Initialisation du dépôt local
# ----------------------------------------------------------------

echo "[2/6] Initialisation du dépôt local..."

if [ -d ".git" ]; then
  echo "   ⚠️  Un dépôt Git existe déjà dans ce dossier."
  read -p "   Continuer avec le dépôt existant ? [y/N] " -n 1 -r
  echo
  if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    exit 1
  fi
else
  git init
  echo "   ✅ Dépôt Git initialisé"
fi

# Configurer la branche principale
git branch -M main 2>/dev/null || git checkout -b main
echo "   ✅ Branche principale : main"
echo ""

# ----------------------------------------------------------------
# Étape 3 — Ajout des fichiers
# ----------------------------------------------------------------

echo "[3/6] Ajout des fichiers au staging..."

git add .

N_FILES=$(git diff --cached --numstat | wc -l)
echo "   ✅ $N_FILES fichiers ajoutés au staging"
echo ""

# Aperçu du contenu
echo "   📦 Aperçu de la structure :"
find . -type f -not -path './.git/*' | sort | head -30 | sed 's/^/      /'
TOTAL=$(find . -type f -not -path './.git/*' | wc -l)
echo "      ... ($TOTAL fichiers au total)"
echo ""

# ----------------------------------------------------------------
# Étape 4 — Commit initial
# ----------------------------------------------------------------

echo "[4/6] Création du commit initial..."

COMMIT_MSG="chore: initialisation du dépôt AX5-CitaFlow v1.10

Dossier de positionnement commercial AX5-CitaFlow pour la soumission
au Défi #5 IVÉO du Laboratoire centre-ville de la Ville de Montréal.

Contenu initial (v1.10) :
- One-pager IVÉO (10 pages PDF) + HTML + Markdown
- Annexe 1 · Données du périmètre (7 pages PDF)
- Annexe 2 · Spécifications techniques (6 pages PDF, NDA)
- 6 questions préparées pour le webinaire IVÉO (21 avril 2026)
- Email outreach Alexandre Teodoresco (Conseiller IA Ville MTL)
- 9 maquettes click-through personas
- Documentation Personas complets (26 rôles)

Historique : 10 versions (v1.0 → v1.10), 31 corrections intégrées.
Timeline : soumission officielle le 1er mai 2026.

© 2026 Innoventera Inc. — Tous droits réservés.
Loi sur le droit d'auteur du Canada (L.R.C. (1985), ch. C-42)."

git commit -m "$COMMIT_MSG"
echo "   ✅ Commit initial créé"
echo ""

# ----------------------------------------------------------------
# Étape 5 — Tag v1.10
# ----------------------------------------------------------------

echo "[5/6] Création du tag v1.10..."

git tag -a v1.10 -m "v1.10 · Version finale pour soumission IVÉO · 19 avril 2026

Dossier complet en 3 documents :
- One-pager (10 pages) · Vague 1+2+3 · 17 corrections intégrées
- Annexe 1 · Données périmètre (7 pages) · avec §9 scénarios PREDIAG-X5
- Annexe 2 · Spécifications techniques (6 pages) · NDA requis

Total : 23 pages PDF · 599 ko · 9 formats de livraison."

echo "   ✅ Tag v1.10 créé"
echo ""

# ----------------------------------------------------------------
# Étape 6 — Push vers GitHub
# ----------------------------------------------------------------

echo "[6/6] Push vers GitHub..."
echo ""

echo "   ⚠️  AVANT DE CONTINUER :"
echo ""
echo "   Le dépôt 'AX5-CitaFlow' doit avoir été créé en PRIVÉ sur"
echo "   github.com/Preventera avant d'exécuter le push."
echo ""
echo "   URL attendue : https://github.com/Preventera/AX5-CitaFlow"
echo ""
read -p "   Le dépôt GitHub est-il déjà créé ? [y/N] " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  echo ""
  echo "   ⏸️  Push reporté. Crée le dépôt GitHub puis exécute :"
  echo ""
  echo "      git remote add origin git@github.com:Preventera/AX5-CitaFlow.git"
  echo "      git push -u origin main"
  echo "      git push origin v1.10"
  echo ""
  exit 0
fi

echo ""
read -p "   URL du dépôt (HTTPS ou SSH) [Entrée = SSH par défaut] : " REMOTE_URL
if [ -z "$REMOTE_URL" ]; then
  REMOTE_URL="git@github.com:Preventera/AX5-CitaFlow.git"
fi

echo "   → Ajout du remote : $REMOTE_URL"

if git remote | grep -q "^origin$"; then
  git remote set-url origin "$REMOTE_URL"
  echo "   ✅ Remote 'origin' mis à jour"
else
  git remote add origin "$REMOTE_URL"
  echo "   ✅ Remote 'origin' ajouté"
fi

echo ""
echo "   → Push de la branche main..."
git push -u origin main

echo ""
echo "   → Push du tag v1.10..."
git push origin v1.10

echo ""
echo "╔══════════════════════════════════════════════════════════════╗"
echo "║   ✅ DÉPÔT PUSHÉ AVEC SUCCÈS                                ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""
echo "   URL : https://github.com/Preventera/AX5-CitaFlow"
echo ""
echo "   Prochaines étapes :"
echo "   1. Vérifier que le dépôt est bien marqué PRIVÉ"
echo "   2. Ajouter les collaborateurs autorisés"
echo "   3. Envoyer le LinkedIn Teodoresco"
echo "   4. Préparer le webinaire IVÉO (lundi 21 avril 10h)"
echo ""
