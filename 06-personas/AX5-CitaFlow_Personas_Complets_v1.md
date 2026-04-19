# AX5-CitaFlow — Matrice complète des 26 personas utilisateurs

**Version 1.0 — 18 avril 2026**
**Statut : document de référence officiel, base de design pour maquettes UX/UI**

---

## 0. Contexte et usage

Ce document consolide l'ensemble des personas utilisateurs identifiés pour AX5-CitaFlow (ex-UrbanIA), module mobilité urbaine de l'écosystème AgenticX5-City. Il sert trois fins :

1. **Base de design** pour les maquettes UX/UI et parcours cliquables
2. **Référence de pitch** pour le webinaire IVÉO (21 avril), la soumission du Défi #5 (1er mai) et la présentation jury (15-19 mai)
3. **Matrice de couverture** démontrant que AX5-CitaFlow adresse l'écosystème urbain complet, pas un segment isolé

Sources consolidées : `Acteurs_Utilisateurs_UrbanIA_Montreal.md`, `100 exemples de workflows et UX UI par agents crois.pdf`, `Comment implémenter ces workflows dans Urbania_Exe.pdf`, `UrbanIA-17 février 6h35 AM`, `Synthese_Executive_UrbanIA_v2.0.md`.

---

## 1. Vue d'ensemble — 4 sections, 26 personas

| Section | Personas | Rôle dans l'écosystème |
|---|---|---|
| A. NudgeAgent — profils citoyens/usagers | 9 | Destinataires finaux des alertes multi-canaux |
| B. Personnel municipal et institutionnel | 8 | Décideurs et exécutants côté ville |
| C. Maîtres d'œuvre, entrepreneurs, consultants | 5 | Chaîne de responsabilité civile et pénale du chantier |
| D. Opérateurs mobilité partagée | 4 | Partenaires extensions, effet multiplicateur |
| **Total** | **26** | |

---

## 2. Clé de lecture des fiches persona

Chaque persona est documenté avec :

- **Nom et rôle** : identification claire
- **Canal signature** : medium principal de l'interaction (push, radio, dashboard, etc.)
- **Agent AX5 croisé** : quels agents servent ce persona
- **Workflow(s) clé(s)** : numéro du workflow dans la matrice 100+ workflows UrbanIA
- **UX signature** : élément d'interface distinctif
- **Job-to-be-done principal** : ce que le persona cherche à accomplir
- **Métriques ROI documentées** : chiffres issus des conversations et documents projet

---

# SECTION A — NudgeAgent : 9 profils citoyens/usagers

*Les 9 profils du NudgeAgent génèrent 72 templates = 9 profils × 2 langues (FR/EN) × 4 niveaux de sévérité (vert, jaune, orange, rouge). C'est le différenciateur unique d'AX5-CitaFlow face aux plateformes smart city génériques.*

---

## A.1 — Piéton

**Canal** : Push notification / SMS
**Agent AX5** : NudgeAgent profil #1
**Workflow** : #89 (déviation sécurisée piéton)
**UX signature** : carte déviation avec estimation temps supplémentaire
**Job-to-be-done** : traverser mon quartier en sécurité malgré les chantiers, sans devoir consulter 4 applications
**Message exemple** : "Trottoir fermé Saint-Denis entre Duluth et Rachel — déviation balisée côté est, 3 min de plus"
**Métrique ROI** : 92 % conformité (les piétons suivent la déviation recommandée)

## A.2 — Cycliste

**Canal** : Push notification
**Agent AX5** : NudgeAgent profil #2
**Workflow** : #89-91 (alternatives REV, carte cyclable)
**UX signature** : carte REV + alternatives sécuritaires
**Job-to-be-done** : éviter les déviations chaussée (×3,2 fois plus dangereuses) et trouver une piste cyclable alternative
**Message exemple** : "Bike lane closed REV Saint-Denis → detour via Boyer St +4 min, signalisation orange au sol"
**Métrique ROI** : sécurisation corridor REV, évitement ×3,2 accidents documentés

## A.3 — Personne à mobilité réduite (PMR)

**Canal** : Push notification
**Agent AX5** : NudgeAgent profil #3
**Workflow** : #78 (accessibilité universelle, parcours PMR)
**UX signature** : passage accessible indiqué (pente ≤ 5 %, largeur ≥ 1,5 m)
**Job-to-be-done** : m'assurer qu'un passage accessible existe réellement, pas une rampe théorique
**Message exemple** : "Accès rampe bloqué Saint-Denis/Rachel → passage accessible via stationnement municipal côté ouest, 80 m"
**Métrique ROI** : conformité accessibilité universelle, 0 usager PMR bloqué

## A.4 — Automobiliste

**Canal** : **Waze API** (intégration native)
**Agent AX5** : NudgeAgent profil #4
**Workflow** : #92 (Waze CCP, ralentissements zones travaux)
**UX signature** : notification Waze avec vitesse recommandée et alternative
**Job-to-be-done** : recevoir l'info chantier dans mon GPS, pas dans une énième app municipale
**Message exemple** : "Ralentissement zone travaux → évitez Saint-Denis entre Sherbrooke et Mont-Royal"
**Métrique ROI** : fluidification du trafic, réduction congestion downtown
**Note stratégique** : persona probablement visé par la mairesse Martinez Ferrada pour le Laboratoire centre-ville — point critique du Défi #5.

## A.5 — Camionneur (véhicules lourds)

**Canal** : Radio AM/FM (intégration GPS camion)
**Agent AX5** : SAAQWorkZone + NudgeAgent profil #5
**Workflow** : #62 (véhicules lourds rush 7h-9h)
**UX signature** : alerte radio gabarit + déviation obligatoire
**Job-to-be-done** : éviter les collisions de gabarit (viaducs, échafaudages) et les amendes SAAQ
**Message exemple** : "Gabarit limité 3,2 m sous échafaudage → déviation Papineau obligatoire véhicules > 3 m"
**Métrique ROI** : **-27,5 % accidents lourds** (données SAAQ zones travaux)

## A.6 — Résident du quartier

**Canal** : SMS + newsletter hebdomadaire par email
**Agent AX5** : NudgeAgent profil #6
**Workflow** : #22 (rapport hebdo territoire, 19 arrondissements)
**UX signature** : résumé hebdomadaire impacts quartier + stationnement alternatif
**Job-to-be-done** : anticiper les nuisances (bruit 7 h-19 h) et savoir où me garer
**Message exemple** : "Travaux bruyants 7 h-19 h cette semaine — stationnement alternatif disponible rue Henri-Julien"
**Métrique ROI** : information proactive, réduction plaintes 311

## A.7 — Commerçant

**Canal** : Email
**Agent AX5** : NudgeAgent profil #7
**Workflow** : #67 (flux piétons, déviation)
**UX signature** : carte accès clients + routage livraisons
**Job-to-be-done** : maintenir l'accès piéton à mon commerce pendant les travaux, ne pas perdre mon chiffre d'affaires
**Message exemple** : "Livraisons maintenues par la ruelle — accès piéton client par côté sud"
**Métrique ROI** : préservation chiffre d'affaires commerces affectés, réduction fermetures temporaires

## A.8 — Travailleur de chantier (signaleur)

**Canal** : Radio + briefing terrain 1 page
**Agent AX5** : NudgeAgent profil #8
**Workflow** : #55 (fiche briefing terrain), #89-95
**UX signature** : briefing matinal PDF 1 page top risques
**Job-to-be-done** : savoir ce matin quelle est la zone de coactivité et quels EPI renforcer
**Message exemple** : "Zone coactivité élevée — briefing sécurité 7 h 15, port EPI renforcé (casque + gilet HV classe 3)"
**Métrique ROI** : **-57 % incidents** zones signaleurs (documenté)

## A.9 — Coordonnateur (HITL dans le contexte NudgeAgent)

**Canal** : Dashboard web + bouton validation
**Agent AX5** : NudgeAgent profil #9 (canal HITL)
**Workflow** : #93 (validation HITL ORANGE)
**UX signature** : modal HITL avec boutons "Valider / Escalader / Refuser"
**Job-to-be-done** : valider rapidement les décisions orange/rouge sans ouvrir 4 systèmes
**Message exemple** : "ALERTE ORANGE 3 coactifs secteur Saint-Denis/Rachel → HITL requis"
**Métrique ROI** : validation <30 min, traçabilité PROV-O complète

---

# SECTION B — Personnel municipal et institutionnel (8 personas)

---

## B.1 — Coordonnateur ville (Bureau des permis)

**Canal** : Dashboard web ConstrucSync
**Agent AX5** : PermitOptimizer + SafetyGraph
**Workflow** : #1-15 (validation permis, score composite)
**UX signature** : formulaire React autocomplete + 5 jauges circulaires live (coactivité 24/30, usagers vulnérables 19/25, CNESST 14/20, SAAQ 11/15, saturation 7/10)
**Job-to-be-done** : valider ou reporter un permis avec justification audit-ready en minutes, pas en heures
**Exemple concret** : "Entrepreneur soumet demande pour Saint-Denis/Villeray, aqueduc 60 jours. Dashboard charge 1 004 permis actifs, calcule score composite 95 ROUGE en 12 s, génère PDF justifié signé."
**Métrique ROI** : **12 s vs 2 h Excel · 95 % temps économisé · 42 000 $/permis report justifié**

## B.2 — Directeur Travaux Publics (C-Suite stratégique)

**Canal** : Dashboard exécutif mensuel
**Agent AX5** : KPIs #99 + ImpactSimulator + CascadeAgent
**Workflow** : #45 (bilan coordination), #99 (KPIs mensuels), #88 (rapport cascade)
**UX signature** : dashboard 1 clic avec graphiques ROI + comparaison 4 scénarios what-if
**Job-to-be-done** : présenter au conseil municipal des données consolidées et défendable sur la performance du bureau des permis
**Exemple concret** : "Le directeur ouvre le dashboard le 1er du mois. Il voit : 266 k$/mois économies, -57 % incidents, 82 % timeline respectée, 4 scénarios comparés côte-à-côte pour le prochain semestre."
**Métrique ROI** : **266 000 $/mois économies documentées · ROI visible en 1 clic**
**Note stratégique** : c'est le persona qui parle directement à Alexandre Teodoresco (élu Ville MTL responsable innovation).

## B.3 — Inspecteur terrain (mobile)

**Canal** : Push iPhone + app mobile terrain
**Agent AX5** : UrbanFlowAgent + NudgeAgent + CoactivityAgent
**Workflow** : #46-95 (surveillance chantiers temps réel)
**UX signature** : push iPhone "Coactivité ROUGE" avec géolocalisation + scan QR chantier
**Job-to-be-done** : être alerté en temps réel d'une anomalie sur un chantier sans passer 2 heures à scroller des rapports
**Exemple concret** : "L'inspecteur reçoit à 14 h 23 : 'Coactivité ROUGE secteur Sainte-Catherine, 4 chantiers <300 m — validation terrain requise'. Il scanne le QR du chantier source, voit l'état live, décide."
**Métrique ROI** : **0 incident** sur les zones monitorées, alertes <2 s

## B.4 — Signaleur zones travaux (terrain)

**Canal** : Radio + briefing papier + app mobile terrain simple
**Agent AX5** : NudgeAgent profil #8 + UrbanFlowAgent
**Workflow** : #89-95 (sécurité usagers vulnérables en zone travaux)
**UX signature** : briefing 1 page imprimable + alerte radio en cas de flux critique
**Job-to-be-done** : savoir ce matin où me positionner et quels usagers prioriser (cyclistes, PMR, enfants)
**Exemple concret** : "Le signaleur imprime à 7 h 10 son briefing : 'Aujourd'hui rue Rachel, flux cycliste prévu 480/h peak 17 h, 2 PMR réguliers à ce secteur, gabarit camion 3,2 m limite'."
**Métrique ROI** : **-57 % incidents** zones signaleurs (documenté)

## B.5 — MTQ Régional (Ministère des Transports du Québec)

**Canal** : Rapport export automatique + dashboard consultation
**Agent AX5** : PrudenceAI + SAAQWorkZone + PermitOptimizer
**Workflow** : Tome V validation automatique
**UX signature** : export PDF conformité Tome V + carte signalisation temporaire validée
**Job-to-be-done** : valider la conformité des plans de signalisation temporaire Tome V sans relire 200 pages manuellement
**Exemple concret** : "Le chef régional MTQ reçoit chaque lundi le rapport des chantiers sur routes provinciales traversant Montréal, avec score de conformité Tome V pour chacun, flagués automatiquement en cas de non-conformité."
**Métrique ROI** : conformité Tome V automatisée, 0 amende routière

## B.6 — STM Planificateurs (Société de transport de Montréal)

**Canal** : Intégration API GTFS-RT + dashboard STM
**Agent AX5** : CascadeAgent + UrbanFlowAgent
**Workflow** : #71-88 (propagation impacts réseau bus/métro)
**UX signature** : visualisation cascades réseau transport en commun avec impacts bus/métro
**Job-to-be-done** : anticiper l'impact d'un chantier routier sur mes lignes de bus (temps de parcours, arrêts relocalisés)
**Exemple concret** : "Le planificateur STM voit qu'un nouveau chantier Sherbrooke affecte les lignes 24 et 55. L'agent calcule automatiquement +8 min en moyenne, propose 3 relocalisations d'arrêts temporaires, génère l'annonce GTFS-RT."
**Métrique ROI** : coordination réseau optimisée, fluidification STM

## B.7 — Hydro-Québec (Coordonnateurs réseau)

**Canal** : Dashboard coordination + API directe
**Agent AX5** : TerritoryPlanner + HydroQuebecConnector (déjà codé)
**Workflow** : #25-35 (éviter conflits services Bell/Vidéotron/Énergir)
**UX signature** : carte saturation arrondissement + détection conflits sous-traitants
**Job-to-be-done** : planifier 500+ permis/an occupation domaine public sans entrer en conflit avec d'autres services (gaz, télécom)
**Exemple concret** : "Hydro planifie enfouissement lignes rue Mont-Royal. L'agent détecte que Bell a déjà un permis actif dans la même zone. Propose 3 fenêtres temporelles alternatives sans conflit."
**Métrique ROI** : évitement conflits sous-traitants, optimisation planification annuelle

## B.8 — Inspecteurs CNESST terrain (workflow potentiel futur)

**Canal** : App mobile terrain + alerte SafetyGraph
**Agent AX5** : SafetyGraph + SafetyAgentic (couche 1 HUGO)
**Workflow** : à développer (priorisation inspections)
**UX signature** : alerte chantier haut risque ML 94,7 % précision
**Job-to-be-done** : prioriser mes 50 inspections hebdomadaires sur les chantiers réellement à risque, pas de façon aléatoire
**Exemple concret** : "L'inspecteur CNESST reçoit lundi matin la liste priorisée ML : top 5 chantiers avec score risque élevé, détails patterns historiques, recommandation 'focus échafaudages'."
**Métrique ROI** : priorisation ML, détection anomalies pré-incident

---

# SECTION C — Maîtres d'œuvre, entrepreneurs, consultants (5 personas — AJOUTS CRITIQUES)

*Cette section représente la chaîne de responsabilité civile et pénale du chantier, critique pour le critère IVÉO « conformité/sécurité » (critère #4 de l'appel d'offres).*

---

## C.1 — Entrepreneurs généraux (chargés de projets)

**Canal** : Portail web entrepreneur + notifications
**Agent AX5** : ImpactSimulator + TerritoryPlanner + StakeholderSync
**Workflow** : #16-35 (études impact, coordination logistique)
**UX signature** : simulateur what-if 4 scénarios avec graphe delta risque
**Job-to-be-done** : optimiser ma logistique chantier (livraisons, équipes, grues) sans générer d'incidents qui me coûtent du temps et de l'argent
**Entreprises cibles Montréal** : Pomerleau, Aecon, EBC, Eurovia, Colas, Demix, Roxboro, Sintra
**Exemple concret** : "Pomerleau soumet un projet aqueduc Saint-Denis. Avant même de déposer le permis, il teste 4 scénarios temporels (été/automne/hiver/printemps) dans le simulateur, voit que l'été minimise les risques, ajuste son planning."
**Métrique ROI** : optimisation logistique, réduction incidents chantier

## C.2 — Directeur de chantier / chef de projet

**Canal** : Dashboard C-suite chantier + app mobile
**Agent AX5** : CoactivityAgent + SafetyGraph + HazardMapper (HUGO)
**Workflow** : #45, #78, #93 (coordination, accessibilité, HITL)
**UX signature** : dashboard synthétique 1 écran avec statut live de son chantier + alertes coactivité voisins
**Job-to-be-done** : piloter mon chantier en temps réel, anticiper les impacts des chantiers voisins, éviter les pénalités municipales
**Exemple concret** : "Le directeur de chantier Aecon voit à 10 h 15 qu'un chantier Bell vient d'ouvrir à 200 m. Son dashboard clignote 'Coactivité +1, score passe de jaune à orange'. Il reçoit proposition : décaler livraison béton de 14 h à 16 h pour éviter convergence."
**Métrique ROI** : évitement pénalités coactivité, optimisation opérations

## C.3 — Maître d'œuvre (donneur d'ordres, art. 198 LSST)

**Canal** : Portail conformité + rapport hebdo
**Agent AX5** : EvidenceBuilder + QHSECopilot + SafetyAgentic
**Workflow** : validation programme de prévention, rapports bi-mensuels
**UX signature** : pack d'évidence LSST art. 198-215 généré automatiquement + signature électronique
**Job-to-be-done** : respecter mes obligations de maître d'œuvre (programme de prévention, comité SST multi-employeurs, inspections) sans y passer mes journées
**Note réglementaire critique** : LSST art. 198 impose au maître d'œuvre un programme de prévention actif. EvidenceBuilder détecte automatiquement l'expiration de ce programme et génère l'avis de non-conformité.
**Exemple concret** : "Le maître d'œuvre REM reçoit notification : 'Programme de prévention chantier Y expiré depuis 48 h. SafetyGraph flag chantier risque élevé. Renouvellement 1 clic.'"
**Métrique ROI** : 0 non-conformité LSST, packs d'évidence audit-ready

## C.4 — Ingénieurs circulation consultants (firmes génie-conseil)

**Canal** : Portail professionnel + export rapports PDF
**Agent AX5** : PermitOptimizer + ImpactSimulator
**Workflow** : #1-15 (études impacts dès conception), génération rapports
**UX signature** : export rapport PDF automatique 5 composantes signé (vs études Excel manuelles 2 h)
**Firmes cibles Montréal** : WSP Canada, SNC-Lavalin, CIMA+, Stantec, EXP
**Job-to-be-done** : produire des études d'impact circulation crédibles pour mes clients (villes, MTQ) 10 fois plus vite qu'avant
**Exemple concret** : "Un ingénieur CIMA+ travaille sur l'étude d'impact du nouveau REM de l'Est. Il charge 15 sites dans PermitOptimizer, obtient en 12 s par site les scores + carte coactivité + 4 scénarios. Livre à son client en 3 jours au lieu de 3 semaines."
**Métrique ROI** : **12 s vs 2 h Excel**, différenciation concurrentielle

## C.5 — Surveillant de chantier (CNESST/RBQ)

**Canal** : App mobile terrain + rapport d'inspection
**Agent AX5** : HazardMapper (HUGO) + UrbanFlowAgent + NudgeAgent profil #8
**Workflow** : inspections planifiées + alertes pré-incident
**UX signature** : check-list inspection mobile avec scoring conformité + photo-preuve + export rapport
**Job-to-be-done** : documenter ma surveillance de façon traçable, détecter les non-conformités avant qu'elles deviennent des incidents
**Note réglementaire** : LSST impose surveillance qualifiée sur les chantiers >25 travailleurs.
**Exemple concret** : "Le surveillant scanne QR chantier, ouvre check-list mobile, coche échafaudage (conforme photo datée), signalisation (non conforme — balise manquante, photo preuve), exporte rapport signé."
**Métrique ROI** : conformité documentée, 0 litige en cas d'incident

---

# SECTION D — Opérateurs mobilité partagée (4 personas — Extensions)

*Les extensions mobilité partagée représentent un effet multiplicateur : le même SafetyGraph alimente des partenaires non-municipaux, démontrant la pérennité et la mise à l'échelle (critère IVÉO #5).*

---

## D.1 — Opérateur BIXI (vélo-partage municipal)

**Canal** : Dashboard rééquilibrage + API GBFS
**Agent AX5** : BixiOptimizer + CoactivityAgent + CascadeAgent
**Workflow** : #102 (rééquilibrage 120 stations)
**UX signature** : dashboard live avec alertes surcharge station + recommandation transfert
**Job-to-be-done** : rééquilibrer en temps réel 900+ stations BIXI pour maintenir disponibilité vélos, éviter stations vides/pleines
**Exemple concret** : "Station Berri détecte +61 % afflux (compteurs vélos). L'agent croise avec 3 chantiers <300 m (zone orange), prédit ×3,2 accidents cyclistes chaussée. Recommande transfert 45 vélos Rachel → Papineau pendant la nuit."
**Métrique ROI** : **×3,2 accidents évités · 92 % conformité usagers · +18 % satisfaction stations**

## D.2 — Opérateur scooters électriques (Lime, Bird)

**Canal** : Dashboard flotte + API redéploiement
**Agent AX5** : SharedMobilityAgent + TerritoryPlanner + NudgeAgent
**Workflow** : #101 (optimisation 500 scooters Ville-Marie)
**UX signature** : carte zones rouges + recommandations redéploiement nocturne
**Job-to-be-done** : éviter les zones REV interdites et les zones saturées pour mes scooters
**Exemple concret** : "Saturation 73 % Ville-Marie + 3 chantiers <300 m REV Saint-Denis. NudgeAgent envoie 'Éviter REV' aux utilisateurs actifs. 487 scooters redéployés automatiquement vers zones vertes."
**Métrique ROI** : **+23 % taux utilisation · -15 % vandalisme · +12 % revenus/scooter/jour**

## D.3 — Opérateur Communauto (auto-partage)

**Canal** : Dashboard flotte + alertes saturation
**Agent AX5** : TerritoryPlanner + CascadeAgent + NudgeAgent
**Workflow** : #106 (500 voitures Ville-Marie)
**UX signature** : carte saturation + interdictions temporaires + recommandations déplacement véhicules
**Job-to-be-done** : maintenir disponibilité véhicules en évitant les zones saturées par les chantiers
**Exemple concret** : "Saturation 73 % Ville-Marie → interdiction temporaire nouveaux stationnements CommunAuto dans zone. CascadeAgent détecte +120 véhicules/h sur rues secondaires."
**Métrique ROI** : optimisation disponibilité flotte

## D.4 — Uber / Lyft (VTC)

**Canal** : API peak pricing + dashboard zones critiques
**Agent AX5** : UrbanFlowAgent + CoactivityAgent
**Workflow** : #107 (peak pricing chantiers)
**UX signature** : tarification dynamique zones critiques + alertes chauffeurs
**Job-to-be-done** : adapter mes tarifs dynamiquement aux zones de congestion pour compenser le temps perdu
**Exemple concret** : "Piétons +52 % = zone orange. 4 chantiers = ×2,1 accidents prévus. Dynamic pricing +25 % tarifs zone critique activé."
**Métrique ROI** : compensation temps perdu zones critiques

---

# 3. Synthèse stratégique

## 3.1 Mapping personas × critères IVÉO

| Critère IVÉO | Personas qui le démontrent | Argument |
|---|---|---|
| **#1 Pertinence** | A.4 Automobiliste, B.1 Coordonnateur | Adresse les 6 causes de congestion du Défi #5 |
| **#2 Impacts** | B.2 Directeur C-Suite, A.5 Camionneur | 266 k$/mois économies, -27,5 % accidents lourds |
| **#3 Faisabilité / maturité** | B.3 Inspecteur terrain, C.4 Ingénieurs | 12 s vs 2 h, déploiement multi-personas documenté |
| **#4 Conformité / sécurité** | C.3 Maître d'œuvre, C.5 Surveillant, B.8 CNESST | LSST art. 198-215, Tome V MTQ, traçabilité PROV-O |
| **#5 Pérennité / mise à l'échelle** | D.1-D.4 Opérateurs mobilité partagée | Extensions natives BIXI, Lime, Communauto, Uber |

## 3.2 Priorisation production maquettes

Pour maximiser l'impact pitch IVÉO et Teodoresco, les 3 personas premium (hero set) sont :

| Rang | Persona | Pourquoi ce rang |
|---|---|---|
| 1 | **B.1 Coordonnateur ville** | Démontre le « 12 s vs 2 h » = wow factor administratif immédiat |
| 2 | **B.2 Directeur C-Suite** | Démontre le « 266 k$/mois » = parle directement à Teodoresco |
| 3 | **B.3 Inspecteur terrain** | Démontre le « coactivité ROUGE temps réel » = terrain |

Et pour démontrer l'étendue (critère #5) : 1 persona citoyen (A.4 Automobiliste, intégration Waze native) et 1 persona extension (D.1 Opérateur BIXI).

## 3.3 Personas non-prioritaires pour la phase 1 (mais documentés)

- B.5 MTQ Régional, B.6 STM Planificateurs, B.7 Hydro-Québec, B.8 CNESST : acteurs institutionnels, intégrations Phase 2
- A.3 PMR, A.6 Résident, A.7 Commerçant : profils NudgeAgent couverts par le même pattern templates
- C.1 Entrepreneur général, C.4 Ingénieur consultant : monétisation B2B possible en Phase 2
- D.3 Communauto, D.4 Uber/Lyft : extensions mobilité partagée Phase 2

---

# 4. Prochaines étapes

## Ce document sert de base pour :

1. **Maquettes click-through dimanche** : reprise propre depuis Marie v1, renommage Coordonnateur + ajout 1-2 autres personas hero
2. **One-pager soumission IVÉO (1er mai)** : démontrer couverture 26 personas vs solutions concurrentes mono-persona
3. **Pitch jury 15-19 mai** : storytelling à travers 3-5 personas incarnés
4. **Skills marketplace AX5** : chaque persona peut devenir un use-case documenté

## Actions immédiates (samedi-dimanche)

| Livrable | Base | Effort |
|---|---|---|
| Maquette Coordonnateur ville (refonte Marie v1) | Persona B.1 | 1 h |
| Maquette Directeur C-Suite | Persona B.2 | 1 h |
| Index hub HTML présentant les 26 personas | Ce document | 30 min |
| Lien depuis landing v1.1 vers maquettes | Section Solutions | 15 min |

---

**Document de référence officiel AX5-CitaFlow — 18 avril 2026**
*À mettre à jour si de nouveaux personas sont identifiés ou si des workflows sont ajoutés.*
