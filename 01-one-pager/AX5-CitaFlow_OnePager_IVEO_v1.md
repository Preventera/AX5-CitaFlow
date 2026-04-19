# AX5-CitaFlow · Soumission IVÉO Défi #5

**One-pager recto-verso · Laboratoire centre-ville Montréal**
**Soumissionnaire** : Innoventera Inc. — AgenticX5 · Montréal (CMM)
**Date de soumission** : 1er mai 2026
**Version** : 1.10 *(version finale · 3 vagues complétées · 17 corrections intégrées)*

---

# 📄 RECTO — AX5-CitaFlow · la solution Défi #5

## En deux phrases

**AX5-CitaFlow** — de *Cita*, la cité et ses citoyens — **est une plateforme agentique qui planifie, coordonne et anticipe les fermetures de voies et perturbations urbaines** des cités modernes, en plaçant **l'humain au cœur** de la gestion urbaine et en croisant des sources que les silos institutionnels ne combinent jamais : sécurité industrielle (CNESST), mobilité urbaine (SAAQ), permis municipaux, **voix citoyenne (311)** et signaux terrain temps réel.

Adossée au simulateur **PREDIAG-X5**, elle outille les villes et leurs parties prenantes pour **dé-risquer, répéter et optimiser** les décisions à fort impact urbain — 24 à 72 heures avant les incidents. **Le Défi #5 d'IVÉO pour le Laboratoire centre-ville de Montréal est la première application opérationnelle** de cette solution — en résonance avec l'ambition de Montréal d'être une cité moderne où mobilité, sécurité et vitalité commerciale ne sont plus gérées en silos mais comme un tissu vivant.

---

## Le besoin — formulation officielle IVÉO

> *« Comment pourrions-nous collecter en temps réel les données liées aux fermetures complètes de voies et à la mobilité sur le domaine public afin qu'elles coïncident avec les données disponibles à l'interne pour permettre leur mise à jour sur les plateformes de planification des déplacements ? »*
> — IVÉO, appel à solutions Laboratoire centre-ville, avril 2026

**Périmètre** : 3,7 km² (Saint-Laurent, de la Commune, Guy, Sherbrooke)
**Pilote** : juin à septembre 2026 · **Budget plafond** : 50 000 $ taxes incluses

### 📘 Notre compréhension du libellé — 3 axes

**Axe 1 · « Collecter sur le domaine public »** — approche **hybride** : agrégation de signaux existants (Waze, Google Traffic, Bixi GBFS, données ouvertes SAAQ, données Vélo Québec, SPVM/SIM, Hydro-Québec, permis AGIR) et instrumentation ciblée par caméras et compteurs IoT là où les signaux structurés manquent.

**Axe 2 · « Coïncident avec les données à l'interne »** — les **sources détenues par la Ville** (AGIR, SPVM/SIM, entraves déclarées, interventions voirie) que notre pipeline synchronise avec la réalité terrain.

**Axe 3 · « Plateformes de planification des déplacements »** — diffusion vers les **4 écosystèmes cibles de Montréal** aux formats standards.

*Cette compréhension sera validée lors du webinaire IVÉO du 21 avril.*

---

## 📊 Sources de données — 2 catégories distinctes

### Catégorie A · Données ouvertes consommées (disponibles immédiatement)

| Dataset | Source | Usage dans AX5-CitaFlow |
|---|---|---|
| Rapports d'accidents de la route (~300 K+ dossiers) | Données ouvertes SAAQ | Modèles prédictifs · calibrage 14 facteurs |
| Accidents en zones de travaux | Données ouvertes SAAQ | Anticipation coactivités piétons-chantier |
| Zones scolaires | Données ouvertes SAAQ | Corridors vulnérables proche chantiers |
| Accidents vélos | SAAQ × Vélo Québec | Intersections critiques cyclistes |
| Comportements à risque | Données ouvertes SAAQ | Typologie contextes dangereux NudgeAgent |
| Lésions professionnelles (~300 K+) | CNESST (SafetyGraph) | Corrélation incidents SST ↔ coactivité |
| Permis AGIR temps réel | Ville de Montréal | Famille A (emprises, coordination) |
| Pannes Hydro-Québec | API publique info-pannes | Cascade feux → congestion |
| Météo et événements | Environnement Canada + calendrier MTL | Facteur A7 |
| **Requêtes citoyennes 311** | Données ouvertes Ville de Montréal | **Voix citoyenne** — signaux faibles d'impact vécu (obstruction, bruit, accessibilité, circulation) |

### Catégorie A-bis · 🗣️ Voix citoyenne — signal humain de première classe

La voix citoyenne n'est pas un complément : c'est une **source de première classe** d'AX5-CitaFlow, cohérente avec l'étymologie *Cita* et avec l'ambition « humain au centre » de la plateforme. Nous consommons trois canaux complémentaires :

| Canal | Source | Usage |
|---|---|---|
| **Requêtes 311** | `donnees.montreal.ca` — requêtes citoyennes | Détection de l'impact vécu (obstruction, bruit, dégâts, accessibilité) |
| **Signalements app Montréal** | Ville de Montréal (via API partenaire) | Signalements géolocalisés temps réel |
| **Veille réseaux sociaux officiels** | Comptes officiels @MTL_Ville, @SPVM, @SIM_Mtl | Détection d'événements et plaintes publiques non formalisées |

Cette voix citoyenne nourrit le **NudgeAgent** et alimente le **score de satisfaction citoyen** qui devient une métrique d'impact au même titre que les latences techniques. *(Schémas de données détaillés dans l'annexe.)*

### Catégorie B · Sources terrain temps réel (à instrumenter ou négocier)

| Flux | Protocole | Statut |
|---|---|---|
| Caméras de circulation (densité, flux) | ONVIF / RTSP | **À instrumenter en Phase 0 (mai 2026)** — volumétrie à valider au webinaire |
| Compteurs piétons-vélos IoT | LoRaWAN / MQTT | **À instrumenter en Phase 0** — intersections critiques du périmètre |
| API CAD SPVM / SIM | REST authentifié | **Accès à confirmer** au webinaire IVÉO |
| Système Centralisé de Gestion feux (SCG) | Propriétaire MTL | **Accès à confirmer** au webinaire IVÉO |

Cette séparation est **intentionnelle** : la catégorie A est déjà branchée et testée ; la catégorie B fait partie du travail de déploiement pilote. *Détail des schémas et exemples de payloads : voir annexe **AX5-CitaFlow_Annexe_Donnees_Perimetre_v1**.*

---

## 🎯 Les 4 écosystèmes cibles — où sortent nos données

| Écosystème | Plateformes principales | Protocole |
|---|---|---|
| 🚗 Automobile (GPS temps réel) | Waze · Google Maps · Apple Plans · Québec 511 | Waze CIFS · Open511 |
| 🚌 Transport collectif | Transit · Chrono (ARTM) · Moovit · Google Maps Transit | GTFS-RT |
| 🚴 Mobilité active et partagée | Bixi · Transit · Communauto · Vélo Québec | GBFS · API Communauto |
| 🏛️ Portails municipaux | montreal.ca/info-entraves · Mobilité Montréal (MTQ) · AGIR | Formats municipaux + Open511 |

Compatibilité native avec les 3 standards mondiaux (Waze CIFS, GTFS-RT, GBFS) et le standard québécois (Open511).

---

## Notre décomposition technique — 6 catégories d'événements

Chaque catégorie d'événement mobilise une combinaison spécifique de sources (Catégorie A consommée + Catégorie B instrumentée + Voix citoyenne selon les cas).

| # | Catégorie d'événement | Sources de données mobilisées | Connecteur AX5-CitaFlow |
|---|---|---|---|
| **1** | **Chantiers urbains** *(2 familles · 14 facteurs)* | Permis AGIR · CNESST SafetyGraph · Vélo Québec · 311 MTL · SCIAN · Environnement Canada · compteurs IoT (Phase 0) | **CauseClassifierAgent + CoactivityAgent + CascadeAgent** *(différenciateur)* |
| 2 | Accidents de la route | SAAQ ouvertes (accidents, zones scolaires, comportements) · caméras ONVIF/RTSP (Phase 0) · 311 MTL | SAAQ + flux caméras |
| 3 | Interblocages / goulots d'étranglement | Compteurs piétons-vélos IoT (Phase 0) · Waze communautaire · Google Traffic · BIXI GBFS · 311 MTL | UrbanFlowAgent + compteurs |
| 4 | Pannes électriques impactant les feux | Hydro-Québec info-pannes · inventaire géomatique feux MTL · 311 MTL | HydroQuebecConnector |
| 5 | Interventions SPVM / SIM | API CAD *(à confirmer)* · veille réseaux sociaux officiels · 311 MTL | EmergencyServicesConnector |
| 6 | Défaillances de feux de circulation | SCG MTL *(à confirmer)* · patterns détectés (caméras + compteurs) · 311 MTL | TrafficLightsConnector |

La voix citoyenne 311 est transversale aux 6 catégories — elle capte l'impact vécu et amplifie les signaux faibles que les sources institutionnelles ne détectent pas encore.

---

## 🔬 Les chantiers urbains : 2 familles de facteurs synergiques

Les congestions liées aux chantiers ne sont jamais monocausales. Notre modèle traite **14 facteurs couplés en 2 familles** — c'est leur combinaison dynamique qui prédit le risque.

### Famille A — Facteurs structurels (externes, mesurables en amont)

| # | Facteur | Source de données |
|---|---|---|
| **A1** · Emprise sur voirie | Voies fermées, durée, horaires | Permis AGIR |
| **A2** · Coactivité multi-entreprises | Chantiers simultanés < 300 m | CoactivityAgent |
| **A3** · Signalisation temporaire | Conformité Tome V MTQ | PrudenceAI + photos terrain |
| **A4** · Flux vulnérables | Piétons, cyclistes, PMR | Compteurs MTL + BIXI + Vélo Québec |
| **A5** · Accès commerces / urgences | Obstruction services essentiels | Géomatique MTL + SIM |
| **A6** · Coordination sous-traitants | Bell, Énergir, Hydro, TELUS | Cross-référence permis |
| **A7** · Temporalité | Heure de pointe, météo, événements | Environnement Canada + calendrier MTL |

### Famille B — Facteurs organiques (internes, émergents dans le temps)

| # | Facteur | Source de données |
|---|---|---|
| **B1** · Retards de livraison | Béton, acier, matériaux | Suivi entrepreneur + signaux terrain |
| **B2** · Accidents travail / arrêts SST | Événements CNESST | **CNESST (SafetyGraph)** |
| **B3** · Contraintes imprévues | Archéologie, infra souterraine | Déclarations + LiDAR |
| **B4** · Gestion et absentéisme | Personnel non disponible | Journaux de chantier + SCIAN |
| **B5** · Événements externes | Manifestations, visites, tournages | Calendrier MTL + veille médias |
| **B6** · Conflits et changements | Syndical, maître d'œuvre | Signaux RH + permis modifiés |
| **B7** · Dépassement d'échéancier | Écart réel vs planifié | AGIR + SafetyGraph temporel |

**L'intelligence unique d'AX5-CitaFlow** : les solutions concurrentes regardent **uniquement la famille A**. AgenticX5 **révèle la famille B** en croisant CNESST + SAAQ + AGIR. Ces signaux faibles sont invisibles en silo — leur croisement détecte les **dérives organiques** avant qu'elles ne se traduisent en congestion.

### Fondements scientifiques — 3 volets complémentaires

| Volet | Cadres mobilisés |
|---|---|
| **Analytique** (classification, corrélations) | Modèle de James Reason (fromage suisse, 1990) · Heinrich pyramid (ratios incidents/quasi-accidents) · ISO 31000 gestion des risques |
| **Prédictif** (anticipation 24-72h) | Modèles bayésiens hiérarchiques · détection d'anomalies séries temporelles · apprentissage statistique sur incidents CNESST/SAAQ |
| **Spécifique au projet** (chantier urbain Montréal) | Travaux de l'AQTr et de la PJCCI sur coordination d'entraves à Montréal · Tome V MTQ · LSST art. 198-217 · SCIAN sectoriel construction |

---

## 🧪 PREDIAG-X5 — simulation émergente et planification multi-stakeholder

### Un produit stratégique, pas un simple moteur technique

**PREDIAG-X5 est le produit phare de l'écosystème AgenticX5 pour la phase *Avant* du déploiement IA en entreprise.** Il couvre un besoin que peu de solutions adressent : **passer du diagnostic à la décision** en simulant les scénarios, les parties prenantes et leurs interactions avant l'engagement de ressources réelles.

PREDIAG-X5 va bien au-delà de la détection d'incidents. Il outille la Ville et les parties prenantes pour **planifier, coordonner et dé-risquer** les décisions urbaines complexes selon quatre rôles distincts :

**🛡️ Dé-risque le déploiement** — simuler les scénarios avant tout déploiement réel pour identifier les modes de défaillance invisibles au pipeline prédictif.

**🔬 Laboratoire de transposition Alphaville** — tester la normalisation des impacts Montréal → Alphaville (ville étalon IVÉO) sur base de simulations multi-agents, renforçant la transposabilité aux 75 villes du réseau IVÉO.

**🎭 Rehearsal multi-stakeholder** — jouer les réactions des parties prenantes (résidents, commerçants, PMR, entrepreneurs, SPVM/SIM) face à des décisions à fort impact, pour anticiper les points de friction avant l'exécution réelle.

**🔮 Moteur what-if de planification** — explorer l'espace des possibles combinatoires (horaires, emprises, coordination) pour identifier les configurations Pareto optimales.

### Exemple de scénario IVÉO modélisé — aperçu

Un scénario a été prototypé : **bris de conduite Saint-Laurent × coactivité grue tour** sur le périmètre du Laboratoire centre-ville. Il démontre concrètement comment PREDIAG-X5 transforme une situation à multiples parties prenantes en recommandation actionnable, puis comment cette sortie **se normalise vers Alphaville** pour évaluer la transposabilité aux autres villes IVÉO.

*Tableau détaillé du scénario, entrées, sorties, et cheminement de transposition Alphaville : voir **annexe AX5-CitaFlow_Annexe_Donnees_Perimetre_v1**, section Scénarios PREDIAG-X5.*

*Spécifications techniques du moteur de simulation disponibles sur demande sous entente de confidentialité (NDA).*

---

## Réponse structurée aux 5 critères d'évaluation IVÉO

### 1️⃣ Pertinence

**Ce que cherche le jury** : la solution répond-elle directement au besoin sur trois dimensions — technique, stratégique et humaine ?

**Notre réponse** : AX5-CitaFlow répond sur les trois plans.

**Pertinence technique** — capture des 6 catégories d'événements avec une **latence < 10 s** vers Waze (CCP) et **< 60 s** vers les tableaux municipaux. Sortie nativement compatible avec les 4 écosystèmes cibles aux formats Waze CIFS, GTFS-RT, GBFS et Open511. Pipeline fonctionnel, 4 adaptateurs codés et testés, 7 maquettes click-through disponibles.

**Pertinence stratégique** — alignement direct avec la vision de la Ville de Montréal pour son Laboratoire centre-ville (cité moderne où mobilité, sécurité et vitalité commerciale sont gérées comme un tissu vivant) et avec le mandat d'IVÉO de transposer les solutions aux 75 villes membres via le référentiel Alphaville.

**Pertinence humaine** — l'étymologie *Cita* n'est pas cosmétique : la **voix citoyenne (311)** est une source de première classe au même niveau que CNESST et SAAQ, le **simulateur PREDIAG-X5** intègre 11 parties prenantes dans ses décisions (résidents, commerçants, PMR, livreurs, services d'urgence), et le modèle HITL (Human-in-the-Loop) garantit que les décisions à fort impact restent validées par des humains qualifiés.

**Preuve** : pipeline fonctionnel, démonstrateur 7 maquettes click-through, 1 scénario IVÉO prototypé dans PREDIAG-X5 (détaillé en annexe §9), 11 scénarios additionnels cadrés.

**Limite reconnue** : l'accès temps réel à certaines sources (API CAD SPVM/SIM, SCG feux, caméras MTL) est à confirmer au webinaire IVÉO.

---

### 2️⃣ Impacts — pour la Ville et pour les usagers

**Insertion dans l'écosystème mobilité de la Ville de Montréal** : AX5-CitaFlow ne remplace pas les acteurs établis, il **s'insère dans l'écosystème mobilité existant** et en amplifie l'intelligence collective. Les interlocuteurs institutionnels concernés par le pilote incluent le **STM** (réseau de métro et bus), le **REM** (Réseau express métropolitain), l'**ARTM** (Autorité régionale de transport métropolitain), le **MTQ** (Ministère des Transports du Québec — axes provinciaux en centre-ville), la **Division mobilité du SPVM**, ainsi que les opérateurs de **taxis**, **micromobilité** (trottinettes, Lime, Bird) et **mobilité partagée** (BIXI, Communauto, Uber, Lyft). Chacun de ces acteurs est un **consommateur potentiel des sorties temps réel** d'AX5-CitaFlow (via GTFS-RT, GBFS, Waze CIFS ou API municipales).

**Bénéfices pour la Ville (opérationnels)** :

| Service municipal | Gain opérationnel |
|---|---|
| **Bureau des permis** | Évaluation d'un permis en 14 s vs 2 h · **PREDIAG-X5 améliore la planification amont des permis complexes via simulation multi-stakeholder** |
| **Direction des travaux publics** | Détection des dérives de chantier 24-72 h à l'avance · **coordination inter-services préemptive via PREDIAG-X5** |
| **SPVM / SIM** | Réduction des interventions en zone de coactivité non détectée · **rehearsal des scénarios d'urgence via PREDIAG-X5** |
| **Communication citoyenne** | Mise à jour temps réel des plateformes · **plans de communication pré-rédigés via simulation** |

**Bénéfices pour les usagers (tangibles)** :

| Usager | Bénéfice concret |
|---|---|
| 🚗 **Automobilistes** | Temps de parcours mieux prévisible via alertes Waze/Google Maps fiables |
| 🚶 **Piétons et cyclistes** | **Diminution des scores de risque SST** via coordination synergique piétons/cyclistes-chantier · croisement CNESST × SAAQ × Vélo Québec |
| 🏪 **Commerçants et résidents** | **Réduction de l'impact commercial** des fermetures (CA, livraisons, fréquentation) |
| ♿ **PMR** | Notification proactive des obstructions · itinéraires adaptés |
| 📦 **Livreurs et transporteurs** | Prédictibilité des accès aux quais · optimisation des tournées · réduction des détours |
| 🚨 **Services d'urgence** | Routes alternatives pré-calculées · temps de réponse préservé |
| 🚌 **Usagers transport collectif** (STM, REM, exo) | Alertes de service pré-positionnées via GTFS-RT · correspondances préservées |

**Méthode de vérification — référentiel IVÉO Alphaville**

IVÉO utilise une **ville étalon appelée Alphaville** (20 000 habitants, 65 km², définie sur base statistique des villes moyennes du Québec) pour **transposer les résultats** entre pilotes de tailles différentes. Les impacts mesurés à Montréal seront normalisés vers Alphaville pour permettre aux 75 villes du réseau IVÉO d'évaluer la transposabilité.

**Ce que cette normalisation nécessite techniquement** — et ce qu'AX5-CitaFlow apporte :

| Défi de normalisation | Technologie AgenticX5 mobilisée |
|---|---|
| Réduire des volumes hétérogènes (1,8 M hab → 20 K) | Modèles de **scaling bayésiens hiérarchiques** |
| Comparer des profils sectoriels différents | **Deep Learning** sur embeddings SCIAN + appariement sémantique |
| Projeter les gains attendus par type de ville | **Graph Neural Networks** sur SafetyGraph Neo4j (22 M+ incidents, 40+ normes) |
| Tenir compte des effets contrefactuels | **Simulations multi-agents PREDIAG-X5** (scénarios alternatifs rejoués dans Alphaville) |
| Produire un rapport standardisé IVÉO | Pipeline **ETL + XAI** aligné sur le format Alphaville |

Méthodologie IVÉO : `iveo.ca/en-savoir-plus/methodologie-de-mesure-dimpact`.
Chemin de transposition détaillé : voir annexe §9.2.

**Limite reconnue** : les projections chiffrées d'économies monétaires sont des estimations à consolider dès les premiers mois du pilote.

---

### 3️⃣ Faisabilité et maturité

**Notre réponse** : AX5-CitaFlow est en **TRL 6** (démonstration en environnement représentatif) pour 4 connecteurs matures et **TRL 4-5** pour 2 connecteurs en cours. Le pilote fait passer l'ensemble en **TRL 7-8**.

**Stratégie de dé-risque par simulation PREDIAG-X5** : avant chaque activation de connecteur en production, nous simulons les scénarios correspondants pour identifier les modes de défaillance avant qu'ils n'affectent la Ville ou les citoyens.

**Preuve** :
- **Écosystème AgenticX5** : **5 000+ agents IA actifs** en production sur les 50+ plateformes livrées depuis 2024 · **100+ scénarios** modélisés dans PREDIAG-X5 toutes industries confondues (SST, mobilité, construction, mining)
- **Pour AX5-CitaFlow spécifiquement** : 10 agents IA dédiés aux 6 catégories d'événements (55 tests pytest automatisés) · 4 adaptateurs de sortie Waze CIFS, GTFS-RT, GBFS, Open511 codés
- **1 scénario IVÉO prototypé en détail** dans PREDIAG-X5 (bris de conduite × coactivité — voir annexe §9.1) · 11 scénarios IVÉO additionnels cadrés et prêts pour modélisation en Phase 0
- Pipeline probabiliste documenté (architecture détaillée sur demande NDA)
- Équipe dédiée au projet : direction technique + 3 spécialistes (voir §Équipe et ressources) + 500 agents AgenticX5 mobilisables pour le pilote
- Historique : **50+ plateformes agentiques livrées depuis 2024**

**Limite reconnue** : la maturité du connecteur « services d'urgence » dépend de la disponibilité de l'API CAD SPVM/SIM. Plan B : mode dégradé avec alertes en différé (< 15 min) + simulations PREDIAG-X5 complémentaires.

---

### 4️⃣ Conformité, cybersécurité et souveraineté numérique

**Notre réponse** : conformité native alignée sur les référentiels québécois et canadiens applicables.

| Cadre | Mise en œuvre |
|---|---|
| **Loi 25 — LAI (Québec)** | Aucune donnée personnelle · anonymisation à la source · **EFVP** prévue avant déploiement pilote |
| **Énoncé de principes du MCN** (déc. 2025) | Alignement sur les 10 principes (primauté du droit, transparence, imputabilité, etc.) |
| **Déclaration de Montréal** (2018) | 10 principes : bien-être, autonomie, intimité, solidarité, démocratie, équité, inclusion, prudence, responsabilité, soutenabilité |
| **Stratégie IA Québec 2021-2026** | Architecture alignée sur le cadre québécois d'encadrement éthique |
| **Directive canadienne sur la prise de décisions automatisée** | ÉIA documentée · HITL systématique orange/rouge |
| **ISO/IEC 27001** | TLS 1.3 · AES-256 · journaux d'accès · gestion des identités |
| **Souveraineté numérique** | Hébergement **Québec et Canada uniquement** · fournisseurs certifiés par le Centre canadien pour la cybersécurité |
| **Souveraineté des modèles IA** | Architecture hybride avec **LLM open-source locaux** (Llama, Mistral) pour les traitements impliquant des données sensibles municipales · les LLM propriétaires (Claude, GPT) ne sont mobilisés que pour des tâches non-sensibles avec données anonymisées · **option de déploiement 100 % local** disponible pour les clients avec exigences de souveraineté stricte |
| **LSST art. 198-217 · Tome V MTQ · ISO 45001** | Obligations maître d'œuvre · validation signalisation · pack audit-ready |

**Preuve** : traçabilité **PROV-O** (norme W3C) complète intégrée au SafetyGraph Neo4j, documentation disponible sur demande NDA.

**Posture de conformité** : AX5-CitaFlow est **aligné dès aujourd'hui** avec les exigences techniques d'**ISO/IEC 27001** (cybersécurité) et d'**ISO 45001** (santé-sécurité au travail) — cryptographie, journaux d'accès, gestion des identités, pack d'évidence audit-ready par intervention. La **certification formelle est engagée pour 2027**, avec audit préparatoire prévu dans la foulée du pilote.

---

### 5️⃣ Pérennité et potentiel de mise à l'échelle

**Notre réponse** : **modèle SaaS B2B récurrent multi-source** avec cinq sources de revenus qui se renforcent.

**1. Abonnement Ville de Montréal — contrat annuel récurrent** (hébergement souverain, maintenance connecteurs, mises à jour IA, support). **Indépendant du financement pilote IVÉO**, il garantit la continuité post-septembre 2026.

**2. Abonnements mensuels entrepreneurs et maîtres d'œuvre** (Pomerleau, Aecon, EBC, Loiselle) par chantier actif : planification de coactivité, simulation avant dépôt de permis, surveillance LSST art. 198. **Personas C1, C3, C5.**

**3. Abonnements partenaires de mobilité** (BIXI, Communauto, Lime, Bird, Uber, Lyft) pour l'API prédictive (rééquilibrage, tarification dynamique). **Personas D1 à D4.**

**4. Secteur privé étendu — licences SaaS B2B ciblées** :
- **Promoteurs immobiliers** (Devimco, Cogir, Canderel) · scoring d'impact chantier sur la valorisation des projets
- **Gestionnaires d'actifs** (Ivanhoé Cambridge, Broccolini) · anticipation des perturbations sur leurs portefeuilles
- **Assureurs** (Intact, Desjardins, Beneva) · scoring de risque zone-chantier pour la tarification
- **Grandes entreprises infrastructurelles** (Bell, Hydro, Vidéotron, Énergir) · gestion de leur exposition multi-chantier

**5. Entente de revente internationale — co-propriété tripartite AgenticX5 + Ville de Montréal + IVÉO**

Modèle original de **co-détention des droits de revente internationale** structuré autour de trois rôles complémentaires :

- **AgenticX5 (Innoventera Inc.)** — conception, développement, industrialisation, maintenance technique de la solution ;
- **Ville de Montréal** — endossement « cité moderne d'origine », crédibilité politique, référence client démontrable ;
- **IVÉO** — mandat officiel de transposition aux villes membres (75 aujourd'hui, plus à l'international), expertise méthodologique Alphaville, réseau institutionnel.

Chaque partie touche un pourcentage des revenus générés à l'international selon son rôle et son apport. Cohérent avec la stratégie « Montréal, capitale mondiale de l'IA responsable » et avec la vision annoncée pour le Laboratoire centre-ville. Le pilote IVÉO Défi #5 constitue le **premier cas d'usage validé** de cette architecture tripartite.

**Extensibilité géographique** : Laboratoire centre-ville → CMM → réseau IVÉO (75 villes) → échelle canadienne puis internationale via l'entente avec Montréal. Architecture multi-tenant → réplication sans coût marginal significatif.

**Limite reconnue** : la conversion des partenaires corporatifs et l'entente de revente internationale sont des **travaux commerciaux et juridiques** qui démarrent pendant le pilote. Le contrat Ville constitue la base récurrente immédiate.

---

## Plan de déploiement pilote

| Phase | Période | Livrables |
|---|---|---|
| **Phase 0 · Pré-calibrage PREDIAG-X5** | Mai 2026 | Modélisation des 11 scénarios IVÉO additionnels · instrumentation caméras et compteurs · calibrage seuils HITL |
| Préparation | 1-15 juin | Configuration connecteurs MTL · calibrage données historiques |
| Déploiement | 16-30 juin | Pipeline complet en production · intégration Waze CCP |
| Opération | Juillet-août | Production continue · 3 rapports bi-mensuels au Bureau des permis |
| Bilan | Septembre | Analyse comparative · transposition Alphaville via PREDIAG-X5 · roadmap extension |

## Budget

**Total** : 45 000 à 48 000 $ taxes incluses (sous le plafond IVÉO de 50 000 $)
Détail disponible sur demande.

---

## Équipe et ressources mobilisées pour le pilote

**Direction technique**

- **Mario Deshaies** · VP AI · CTO · Fondateur AgenticX5
- Responsable architecture, gouvernance, relations stratégiques (Ville, IVÉO, partenaires)

**Équipe dédiée au projet (3 personnes)**

| Rôle | Responsabilité |
|---|---|
| **Ingénieur Physical AI** | Instrumentation terrain (caméras ONVIF/RTSP, compteurs IoT LoRaWAN), intégration flux temps réel, gestion de l'interface avec les systèmes municipaux |
| **Ingénieur IA** | Orchestration des 10 agents AX5-CitaFlow, intégration PREDIAG-X5, pipeline probabiliste, adaptateurs de sortie (Waze CIFS, GTFS-RT, GBFS, Open511) |
| **Data Scientist** | Calibration des modèles prédictifs, analyse des données CNESST × SAAQ × AGIR × 311, normalisation Alphaville, validation statistique |

**Ressources AgenticX5 mobilisables**

- **500 agents AgenticX5 activables** à la demande pour le pilote (sur le parc global de 5 000+ agents)
- **SafetyGraph Neo4j** avec 22 M+ incidents et 40+ normes unifiées
- **PREDIAG-X5** avec 100+ scénarios modélisés (12 scénarios IVÉO en cours)
- Écosystème de sous-traitants spécialisés (cybersécurité, infrastructure, UX) activables en cas de besoin

**Démonstrateur et ressources complémentaires**

- **7 maquettes click-through** (Coordonnateur ville, Directeur Travaux Publics, Inspecteur terrain, Automobiliste Waze, Maître d'œuvre LSST, Entrepreneur général, Opérateur BIXI) — disponibles sur demande sous entente de confidentialité (NDA)
- **Annexe 1 — Données du périmètre** : `AX5-CitaFlow_Annexe_Donnees_Perimetre_v1` — schémas de données détaillés, exemples de payloads, matrice couverture par intersection, scénarios PREDIAG-X5 (§9)
- **Annexe 2 — Spécifications techniques** : `AX5-CitaFlow_Annexe_Specifications_Techniques_v1` — stack technologique, pipeline ML/DL, architecture 5 niveaux, métadonnées PROV-O, blueprint d'intégration (disponible sur demande NDA)

---

# 📄 VERSO — AgenticX5-City · vision long terme et écosystème

## Pourquoi AX5-CitaFlow n'est que le début

Le Défi #5 d'IVÉO est un point d'entrée stratégique vers un écosystème plus large qui se lit selon **deux axes complémentaires** :

- **Axe horizontal** — AgenticX5-City : 6 domaines urbains interconnectés
- **Axe temporel** — l'écosystème AgenticX5 : 3 produits couvrant le cycle de vie IA

---

## 🏙️ Axe horizontal — AgenticX5-City · 6 domaines urbains

AX5-CitaFlow est le **module mobilité urbaine** de la plateforme **AgenticX5-City** — un système agentique parapluie qui adresse six domaines urbains interconnectés.

| Domaine | Module | Question adressée |
|---|---|---|
| 🚦 **Mobilité urbaine** | **AX5-CitaFlow** *(Défi #5)* | Comment anticiper la congestion avant qu'elle arrive ? |
| ⚡ Énergie urbaine | AX5-CitaGrid | Comment optimiser la consommation bâtiments × infrastructure ? |
| 🏃 Santé urbaine | AX5-CitaVital | Comment mesurer et encourager l'activité physique urbaine ? |
| 🌱 Résilience climatique | AX5-CitaShield | Comment anticiper inondations, îlots de chaleur, évacuations ? |
| 🔄 Économie circulaire | AX5-CitaCycle | Comment optimiser collecte déchets et recyclage ? |
| 🏛️ Gouvernance et participation | AX5-CitaPulse | Comment rendre la participation citoyenne agentique et traçable ? |

Chaque module partage le même SafetyGraph Neo4j (22 M+ incidents, 40+ normes unifiées) et les mêmes règles de gouvernance IA.

---

## ⏱️ Axe temporel — l'écosystème AgenticX5 · cycle de vie IA

Au-delà des domaines verticaux, AgenticX5 propose **3 produits complémentaires** qui couvrent les trois phases d'un déploiement IA en entreprise. Ce n'est pas une concurrence interne — c'est une **couverture séquentielle** selon la logique « land-and-expand ».

| Phase | Produit | Rôle | Livrable type |
|---|---|---|---|
| 🟢 **Avant** *(pré-déploiement)* | **PREDIAG-X5** | Diagnostic d'adoption · simulation multi-agents · rehearsal stakeholder | Seed app HTML |
| 🟣 **Pendant** *(opérationnel)* | **SafeTwinX5** | Jumeau numérique opérationnel SST · 13 modules intégrés | Plateforme complète |
| 🟠 **Après** *(post-déploiement)* | **GATES-X5** | Gouvernance des agents IA · surveillance continue · audit automatisé | Package Python PyPI |

Les trois produits s'appuient sur un **moteur de simulation multi-agents propriétaire** (spécifications sous NDA) qui garantit la cohérence méthodologique entre les phases.

**Pertinence pour le Défi #5** : AX5-CitaFlow entre dans la catégorie **SafeTwinX5** (phase opérationnelle, jumeau numérique des chantiers et incidents urbains), avec **PREDIAG-X5 activé en Phase 0** du pilote (mai 2026) pour dé-risquer le déploiement de juin.

**Transparence tarifaire** : la tarification AX5-CitaFlow est structurée en **3 composantes documentées** — (1) frais d'installation et d'intégration, (2) licence annuelle par module actif, (3) coûts unitaires mesurables (nombre d'événements, nombre d'intersections instrumentées). **Aucun frais caché** : la grille complète est partagée dès la première rencontre post-présélection. Stratégie land-and-expand adaptée au profil du client avec possibilité de démarrer petit et d'étendre progressivement.

---

## Architecture technique en 5 niveaux

```
Niveau 5 — INTERFACE    : dashboards, alertes multi-canaux, portails citoyen/élu
Niveau 4 — COORDINATION : orchestration workflows, résolution de conflits HITL
Niveau 3 — INTELLIGENCE : ML prédictif, pattern detection, Neo4j <50 ms
Niveau 2 — TRAITEMENT   : ETL, harmonisation multi-juridictionnelle, data quality
Niveau 1 — COLLECTE     : APIs, capteurs, IoT, wearables, caméras, permis, incidents
```

---

## Différenciateur unique face à la concurrence

| Aspect | AgenticX5 | Solutions concurrentes |
|---|---|---|
| Scope horizontal | 6 domaines urbains interconnectés | 1 domaine isolé |
| **Scope temporel** | **3 produits Avant/Pendant/Après** | **1 produit ponctuel** |
| Approche causale | Facteurs structurels + organiques | Événements isolés |
| Sources croisées | **12+ sources** (CNESST · SAAQ · 311 MTL · AGIR · Hydro-Québec · Vélo Québec · Env. Canada · BIXI GBFS · Waze CCP · caméras · compteurs IoT · CAD SPVM/SIM) | Une ou deux sources à la fois |
| Simulation émergente | PREDIAG-X5 multi-agents | Aucune ou Excel |
| Prédiction | 24-72 h avant incident | Réactif |
| Traçabilité | PROV-O native ISO 45001 | Logs applicatifs |
| Conformité | Cadre QC/CA complet (MCN, Loi 25, ISO 27001) | Générique ou étrangère |
| Souveraineté numérique | Hébergement Québec/Canada garanti | Fournisseurs non documentés |
| Extensibilité | 100+ partenaires via AASF | Intégrations manuelles |

---

## Stratégie de déploiement Montréal (2026-2027) — livrables et métriques

| Période | Phase | Livrables précis | Métriques de succès |
|---|---|---|---|
| **Mai 2026** | Phase 0 · Pré-calibrage | **Blueprint d'architecture** (stack, connecteurs, pipelines) · instrumentation caméras + compteurs (6-10 sites) · modélisation 11 scénarios IVÉO additionnels dans PREDIAG-X5 (total 12 scénarios IVÉO + accès au parc de 100+ scénarios AgenticX5 pour stress-tests croisés) · calibrage des seuils HITL · annexe données v2.0 | Blueprint validé · pipeline testé sur 12 scénarios + échantillons stress-tests · 100 % des connecteurs catégorie A actifs |
| **Juin-août 2026** | Pilote Laboratoire centre-ville | Pipeline en production · 4 écosystèmes cibles alimentés (Waze CIFS, GTFS-RT, GBFS, Open511) · 3 rapports bi-mensuels au Bureau des permis · dashboard municipal en place | Latence < 10 s (Waze) et < 60 s (municipal) · ≥ 70 % adoption par les services concernés · ≥ 95 % couverture événements permis actifs |
| **Septembre 2026** | Bilan et transposition | Rapport comparatif pilote · transposition Alphaville via PREDIAG-X5 · proposition de contrat annuel Ville · présentation au Comité exécutif | Validation du passage à l'abonnement Ville annuel · signature d'une lettre d'intention |
| **Q4 2026** | Extension CMM + écosystème commercial | Onboarding Laval + Longueuil + Brossard · 3 connecteurs répliqués · onboarding 2 entrepreneurs pilotes (Pomerleau, Aecon) · lancement programme fidélité mobilité active | 3 villes CMM en abonnement SaaS · 2 contrats entrepreneurs signés · 10+ commerces partenaires |
| **Q1-Q2 2027** | Consolidation CMM + secteur privé pilote | Onboarding 1 assureur pilote (Intact ou Desjardins) · 2 promoteurs immobiliers · 1 gestionnaire d'actifs · déploiement complet des 6 connecteurs sur CMM | ARR Ville + CMM ≥ seuil de rentabilité · 3 clients secteur privé actifs |
| **Q3-Q4 2027** | Expansion réseau IVÉO + entente internationale | Accès roadmap aux 75 villes IVÉO · signature de l'entente de revente internationale avec la Ville de Montréal · 2 villes hors CMM (Québec, Sherbrooke) | 5+ villes IVÉO abonnées · entente cadre internationale signée · 1er contrat hors Canada préparé |

**Pré-requis de pérennité** : chaque jalon est conditionné par la signature du contrat annuel Ville au Q3 2026. Le modèle est **à risque maîtrisé** : si le pilote ne convainc pas, AX5-CitaFlow reste exploitable pour les autres modules de l'écosystème AgenticX5 (voir verso).

---

## Au-delà d'IVÉO — bénéfices pour la Ville de Montréal

Choisir AX5-CitaFlow pour le Défi #5, c'est :

**1. Un pilote réussi** sur les fermetures et incidents du Laboratoire centre-ville.

**2. L'accès à l'intelligence spécifique d'AgenticX5** sur les données chantiers de construction et les facteurs de coactivité urbaine — 14 facteurs synergiques (2 familles A/B), modèles SST-HSE éprouvés depuis 2021, croisement natif CNESST × permis AGIR × SAAQ que peu d'acteurs savent exploiter.

**3. Un partenaire déjà positionné** pour les prochains défis (santé urbaine, résilience climatique, participation citoyenne) — sans refaire un appel d'offres à chaque fois.

**4. Une infrastructure urbaine intelligente souveraine** conçue à Montréal, hébergée au Québec, exportable vers d'autres villes canadiennes via le réseau IVÉO.

**5. Une évolution naturelle** vers l'écosystème complet AgenticX5 (PREDIAG-X5 pour l'évaluation d'adoption des nouveaux modules IA, SafeTwinX5 pour l'opération continue, GATES-X5 pour la gouvernance post-déploiement).

**6. Un alignement direct** avec le mandat d'Alexandre Teodoresco (Conseiller responsable de l'IA, de l'optimisation, de la performance municipale et de l'innovation) et la vision annoncée par la mairesse Soraya Martinez Ferrada du Laboratoire centre-ville.

---

## Coordonnées

**Innoventera Inc.**
204, rue du Saint-Sacrement, espace 300
Montréal (Québec) H2Y 1W8
Téléphone : (514) 622-3128
Courriel : **team@agenticx5.com**

**Mario Deshaies** · VP AI · CTO · Fondateur AgenticX5

**Ressources complémentaires** (sur demande NDA) :
- 7 maquettes click-through couvrant municipal, citoyen, maître d'œuvre, mobilité partagée
- Document personas : 26 rôles documentés
- Annexe détaillée des schémas de données du périmètre (AX5-CitaFlow_Annexe_Donnees_Perimetre_v1)
- Architecture technique détaillée et contrats-types SaaS
- Scénarios PREDIAG-X5 et rapports de simulation
- Fiches produits SafeTwinX5 et GATES-X5

---

*Document préparé dans le cadre de la soumission au Défi #5 IVÉO — Laboratoire centre-ville de Montréal.*
*Formulation du défi : citation littérale du site IVÉO (iveo.ca/defis/montreal, avril 2026).*
*Les 6 catégories d'événements et les 14 facteurs synergiques relèvent de l'analyse opérationnelle d'AgenticX5, documentée par les travaux de l'AQTr, FNTP, et le modèle de Reason.*
*La méthodologie « Alphaville » est décrite sur iveo.ca/en-savoir-plus/methodologie-de-mesure-dimpact.*

---

**© 2026 Innoventera Inc. — Tous droits réservés.**
*Document, logiciels et œuvres associées protégés en vertu de la Loi sur le droit d'auteur du Canada (L.R.C. (1985), ch. C-42).*
