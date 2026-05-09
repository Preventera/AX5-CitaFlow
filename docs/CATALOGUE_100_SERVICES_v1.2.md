# CityFlow-X5 — Catalogue 100 services AI · Priorisation MVP

> **Document type :** Catalogue stratégique + analyse de priorisation MVP
> **Produit :** **CityFlow-X5** (nom commercial canonique · cf. [Convention de Naming v2.0](https://github.com/Preventera/AX5-CitaFlow/blob/main/docs/CONVENTION_NAMING_v2.0.md))
> **Repo GitHub :** `Preventera/AX5-CitaFlow` (privé · nom historique conservé pour stabilité des liens)
> **Écosystème :** AgenticX5-City (gamme ombrelle · 6 domaines)
> **Continuum de gouvernance :** [AgenticX5 Governance Suite](https://ax5-suite-gouvernance.netlify.app/) — DiagX5 → GATES-X5 → AdoptX5
> **Audience :** Direction CityFlow-X5 · partenaires municipaux · investisseurs · équipe produit
> **Auteur :** Mario Deshaies · VP AI / CTO · Innoventera Inc. (Préventera/AgenticX5)
> **Version :** v1.2 (alignement continuum 3 phases · AEGIS-X5 déprécié au profit de GATES-X5)
> **Date :** 9 mai 2026
> **Statut :** Document de travail · pour intégration site CityFlow-X5 + revue interne
> **Confidentialité :** Interne (NDA recommandé) · sections sélectionnées publiables après revue

---

## Table des matières

1. [Vue d'ensemble](#1-vue-densemble)
2. [TOP 15 services MVP priorisés](#2-top-15-services-mvp-priorisés)
3. [Méthodologie de priorisation](#3-méthodologie-de-priorisation)
4. [Catalogue complet — 100 services](#4-catalogue-complet--100-services)
5. [Roadmap MVP suggérée](#5-roadmap-mvp-suggérée)
6. [Stack technique AgenticX5 sous-jacent](#6-stack-technique-agenticx5-sous-jacent)
7. [Anti-positionnement et gouvernance](#7-anti-positionnement-et-gouvernance)
8. [Audit-log](#8-audit-log)

---

## 1. Vue d'ensemble

### 1.1 Positionnement CityFlow-X5

**CityFlow-X5** est une **couche d'orchestration agentique pour municipalités**, construite sur l'écosystème AgenticX5 (18+ plateformes opérationnelles, 500+ agents IA orchestrés, base graphe Neo4j 22M+ records, conformité multi-juridictionnelle native).

CityFlow-X5 ajoute une couche stratégique d'intégration **par-dessus** les systèmes d'information municipaux existants (Oracle, SAP, Genetec, Tyler, Esri ArcGIS, etc.). Il ne remplace ni les ERP municipaux, ni les SIG, ni les systèmes de surveillance déjà déployés.

**Alignement avec le continuum AgenticX5 Governance Suite** : chaque service du catalogue s'inscrit dans une ou plusieurs des trois phases du continuum officiel de gouvernance IA agentique :

- **Phase 01 · DiagX5** — Diagnostic prédictif & simulation pré-déploiement (~30 jours)
- **Phase 02 · GATES-X5** — Gouvernance temps réel en exploitation (continu)
- **Phase 03 · AdoptX5** — Apprentissage organisationnel post-Go-Live (cycle trimestriel)

Référence : [ax5-suite-gouvernance.netlify.app](https://ax5-suite-gouvernance.netlify.app/)

> **Note de naming** : CityFlow-X5 est le nom commercial canonique du produit (cf. Convention v2.0). Le repo GitHub conserve son nom historique `AX5-CitaFlow` (Phase IVÉO Défi #5, avril-mai 2026) pour ne pas casser la stabilité des liens publics et de l'historique Git. Lignée : `UrbanIA` (codename interne 2024-2025) → `AX5-CitaFlow` (Phase IVÉO) → `CityFlow-X5` (Phase B2G actuelle).

> **Note sur AEGIS-X5** : la nomenclature **AEGIS-X5** (présente dans la marketplace v2 et dans des documents antérieurs) a été **dépréciée en 2026** au profit du continuum officiel **DiagX5 → GATES-X5 → AdoptX5**. Les 5 modules historiques OBSERVE/GUARD/EVALUATE/COLLECT/REMEMBER sont aujourd'hui portés par **GATES-X5** (Phase 02 · Gouvernance temps réel). Toute mention "AEGIS-X5" dans les versions antérieures de ce catalogue ou dans le project knowledge doit être lue comme **GATES-X5** dans la nomenclature canonique 2026.

### 1.2 Trois axes de valeur

| Axe | Description | Différenciation |
|---|---|---|
| **Souveraineté numérique** | Hébergement et gouvernance conformes Loi 25 QC, RGPD, EU AI Act | Cloud souverain QC (CLAW-SHIELD-X5) |
| **Continuum de gouvernance** | DiagX5 (Pré) → GATES-X5 (Run) → AdoptX5 (Post) couvrent l'intégralité du cycle de vie IA | Premier moteur d'exécution agentique du MIT AI Risk Repository v4 |
| **Traçabilité PROV-O** | Audit complet des décisions algorithmiques municipales | Conformité EU AI Act art. 14 + transparence démocratique |

### 1.3 Catalogue à un coup d'œil

- **100 services AI** organisés en **10 enjeux urbains** majeurs
- **15 services MVP** priorisés pour lancement Phase 1 (12-18 mois)
- **Continuum 3 phases** : DiagX5 (Pré) · GATES-X5 (Run) · AdoptX5 (Post) — chaque service s'inscrit dans 1 ou plusieurs phases
- **Plateformes support AgenticX5** : SafetyGraph, BehaviorX, SafeScan360, SafeTwinX5, EDGY-AgenticX5, CLAW-SHIELD-X5, PrudenceAI, SquadrAI ClimAlert
- **Conformité native** : Loi 25 QC · RGPD · EU AI Act · NIST AI RMF · ISO 42001 · MIT AI Risk Repository v4 (1 700+ risques, 831 mitigations)

### 1.4 Modèle économique cible

- SaaS multi-tenant pour municipalités de **50 000+ habitants**
- Pricing par **module** (modules MVP cf. §2) + par **tranche de 100 K résidents**
- Partenariats stratégiques visés : UMQ (Union des municipalités du Québec), FQM (Fédération québécoise des municipalités), CMM/CMQ (communautés métropolitaines)
- Contrats pluriannuels (3-5 ans) avec clauses d'évolution
- Hypothèse de travail : tarification de référence à valider en pilote

---

## 2. TOP 15 services MVP priorisés

### 2.1 Synthèse du scoring

Chaque service est évalué sur trois axes (1-5), totalisant un **score composite sur 15** :

- **F · Faisabilité** : maturité technique, plateforme AgenticX5 existante, complexité réglementaire, disponibilité des données
- **I · Impact** : portée des bénéficiaires, ROI estimé, urgence de l'enjeu, valeur sociale
- **D · Différenciation** : avance vs concurrence (Genetec, Oracle, IBM Smarter Cities, Tyler, Esri), IP unique AgenticX5

### 2.2 Tableau MVP — TOP 15

| Rang | # | Service | Phase | F | I | D | **Total** | Plateforme support |
|---|---|---|---|---|---|---|---|---|
| 1 | 61 | **GATES-X5 Municipal** | Run | 5 | 5 | 5 | **15** | GATES-X5 (mature TRL 7) |
| 2 | 25 | **PrudenceAI Routier** | Run | 5 | 4 | 4 | **13** | PrudenceAI (production) |
| 3 | 71 | **311SmartTriageX** | Run | 4 | 5 | 4 | **13** | BehaviorX (NLP 92 %) |
| 4 | 72 | **CitizenSentimentX** | Run + Post | 5 | 4 | 4 | **13** | BehaviorX |
| 5 | 91 | **DigitalTwinCity** | Pré + Run | 4 | 4 | 5 | **13** | SafeTwinX5 (démo Lévis live) |
| 6 | 100 | **PROV-O AuditTrailX** | Run + Post | 4 | 4 | 5 | **13** | GATES-X5 + SafetyGraph |
| 7 | 21 | **BridgeIntegrityAI** | Run + Post | 3 | 5 | 4 | **12** | SafeTwinX5 + capteurs IoT |
| 8 | 31 | **HeatIslandX** | Run | 4 | 5 | 3 | **12** | SquadrAI ClimAlert |
| 9 | 43 | **WaterLeakDetectAI** | Run + Post | 4 | 5 | 3 | **12** | SafeTwinX5 + Predictive ML |
| 10 | 51 | **HomelessnessHotspotAI** | Pré + Run | 3 | 5 | 4 | **12** | BehaviorX (adapté) |
| 11 | 92 | **UrbanDataMartX** | Run | 3 | 4 | 5 | **12** | SafetyGraph + Loi 25 SDK |
| 12 | 22 | **PotholePatrol** | Run | 5 | 3 | 3 | **11** | SafeScan360 (CV YOLO v11) |
| 13 | 33 | **FloodRiskRealtime** | Pré + Run | 3 | 5 | 3 | **11** | Predictive ML + IoT |
| 14 | 41 | **MunicipalBldgEnergyAI** | Run + Post | 4 | 4 | 3 | **11** | EDGY-AgenticX5 |
| 15 | 94 | **CitySOCAI** | Run | 3 | 5 | 3 | **11** | CLAW-SHIELD-X5 |

> **Légende Phase** : **Pré** = DiagX5 (diagnostic prédictif) · **Run** = GATES-X5 (gouvernance temps réel) · **Post** = AdoptX5 (apprentissage post-déploiement). Un service peut s'inscrire dans plusieurs phases si son cycle complet de valeur le requiert.

### 2.3 Fiches détaillées TOP 15

#### MVP-01 · GATES-X5 Municipal (score 15/15)

- **Phase continuum :** Run · Phase 02 · Gouvernance temps réel
- **Enjeu adressé :** Conformité Loi 25 (Québec) + EU AI Act art. 14 + redevabilité démocratique des systèmes IA déployés par la ville
- **Description :** Gouvernance temps réel des agents IA municipaux avec 5 modules (OBSERVE, GUARD, EVALUATE, COLLECT, REMEMBER), traçabilité PROV-O par décision, registre public obligatoire des SIA, supervision humaine HITL configurable (Monitor / Semi-auto / Full-auto)
- **Plateforme support :** GATES-X5 (mature TRL 7, framework-agnostic SDK · ex-AEGIS-X5 dans la nomenclature antérieure)
- **Workflow type :** `HITL-MUNICIPAL-EUAA14` (override humain obligatoire sur décisions critiques municipales)
- **Référence externe :** [GATES-X5 carrousel 13 slides](https://gates-x5-slides.netlify.app/)
- **KPI cible (à valider en pilote) :** 100 % des SIA municipaux déclarés et auditables · délai de réponse aux demandes d'accès <30 jours · audit trail PROV-O exportable en temps réel
- **Pourquoi MVP-01 :** La conformité Loi 25 (entrée pleine en vigueur depuis sept. 2024) et l'EU AI Act art. 14 (en vigueur août 2026) créent une obligation réglementaire que peu de villes adressent aujourd'hui. GATES-X5 est le **socle** sur lequel les 14 autres MVP s'appuient — sans gouvernance, pas de déploiement conforme.
- **Hypothèse :** Forte demande des CIUSSS, sociétés de transport et villes de 50 K+ pour des cadres de gouvernance IA opérationnels (à confirmer en discovery)

#### MVP-02 · PrudenceAI Routier (score 13/15)

- **Enjeu adressé :** Sécurité des travailleurs en chantiers routiers urbains · conformité Tome V MTQ
- **Description :** Vérification automatique des plans de signalisation, détection des non-conformités, génération de recommandations
- **Plateforme AgenticX5 :** PrudenceAI (déjà en production · 100 alertes générées en pilote)
- **KPI cible :** Détection de >90 % des non-conformités majeures · réduction du temps de revue MTQ
- **Pourquoi MVP-02 :** Service **déjà opérationnel**. Quick win pour démontrer maturité de l'écosystème
- **Extension MVP :** Adaptation aux règlements municipaux (signalisation événementielle, fermetures de rue, déneigement)

#### MVP-03 · 311SmartTriageX (score 13/15)

- **Enjeu adressé :** Volume élevé d'appels 311, satisfaction citoyenne, équité de traitement
- **Description :** Triage intelligent des requêtes 311 (NLP), routage automatique vers le bon service, priorisation par urgence + équité spatiale
- **Plateforme AgenticX5 :** BehaviorX (NLP, 92 % de précision sur classification multi-classes, à recalibrer pour requêtes municipales)
- **KPI cible :** Réduction du temps de routage · amélioration des délais de fermeture des requêtes · scoring équité géographique
- **Pourquoi MVP-03 :** Volume élevé documenté à Montréal et autres grandes villes QC. Impact direct sur perception citoyenne
- **Conformité :** Anonymisation des données personnelles · PROV-O sur décisions de routage

#### MVP-04 · CitizenSentimentX (score 13/15)

- **Enjeu adressé :** Décisions municipales basées sur le pouls communautaire · détection précoce de mécontentements
- **Description :** Analyse de sentiment des médias sociaux par quartier/sujet, dashboard pour élus et fonctionnaires
- **Plateforme AgenticX5 :** BehaviorX (NLP multilingue · spaCy + Transformers HF)
- **KPI cible :** Couverture de >80 % des canaux publics pertinents · alertes de signal faible (à définir)
- **Pourquoi MVP-04 :** BehaviorX est **mature**. Valeur immédiate pour cabinets d'élus, services de communication, comités consultatifs
- **Garde-fous :** Aucun ciblage individuel · agrégation par quartier minimum 1 000 résidents · audit PROV-O

#### MVP-05 · DigitalTwinCity / SafeTwinX5 (score 13/15)

- **Enjeu adressé :** Simulation des décisions urbaines avant déploiement · jumeau numérique 3D interactif
- **Description :** Fusion BIM + LiDAR + IoT pour visualisation 3D de la ville, simulations what-if (trafic, ombrage, eau, énergie)
- **Plateforme AgenticX5 :** SafeTwinX5 (démo live à Lévis · 17 modules, 22 assets BIM)
- **KPI cible :** Modélisation 3D d'au moins un quartier pilote · 5 scénarios what-if validés
- **Pourquoi MVP-05 :** Trophy de marketing fort + utilité réelle (consultations publiques, planification). Différenciation vs jumeaux génériques
- **Précaution :** Ne pas vendre comme « ville prédictive » — c'est un outil d'aide à la décision, pas un oracle

#### MVP-06 · PROV-O AuditTrailX (score 13/15)

- **Phase continuum :** Run + Post · Phases 02 et 03
- **Enjeu adressé :** Audit démocratique des décisions algorithmiques · traçabilité réglementaire
- **Description :** Traçabilité PROV-O complète des décisions prises par des agents IA municipaux (qui, quoi, quand, sur quelles données, avec quelle confiance), enrichie en boucle d'apprentissage trimestrielle (AdoptX5)
- **Plateforme support :** GATES-X5 + SafetyGraph (Neo4j 22M+ nodes)
- **Workflow type :** Audit trail cryptographique exportable en temps réel
- **KPI cible :** 100 % des décisions automatisées traçables · délai d'extraction d'audit <24 h
- **Pourquoi MVP-06 :** Différenciation **forte** vs concurrence. Quasi aucune solution municipale n'offre PROV-O natif aujourd'hui
- **Ancrage réglementaire :** EU AI Act art. 12 (transparence) · NIST AI RMF · Loi 25 · MIT AI Risk Repository v4

#### MVP-07 · BridgeIntegrityAI (score 12/15)

- **Enjeu adressé :** Surveillance prédictive des ponts et viaducs municipaux
- **Description :** Capteurs vibrométriques + analyse ML pour détecter dégradations structurelles précoces (ponts d'étagement, viaducs urbains)
- **Plateforme AgenticX5 :** SafeTwinX5 + Predictive ML (TFT/LSTM)
- **KPI cible :** Détection des anomalies structurelles · réduction des inspections visuelles redondantes (à valider)
- **Pourquoi MVP-07 :** Sensibilité historique élevée au QC (effondrements documentés du viaduc de la Concorde 2006, autres événements antérieurs). Demande latente forte des municipalités
- **Précaution :** Ne pas remplacer les inspections d'ingénieurs structurels accréditées · système d'**aide à la priorisation** uniquement

#### MVP-08 · HeatIslandX (score 12/15)

- **Enjeu adressé :** Adaptation aux changements climatiques · santé publique en canicule (aînés, ITT)
- **Description :** Cartographie en temps réel des îlots de chaleur urbains + alertes ciblées vers populations vulnérables
- **Plateforme AgenticX5 :** SquadrAI ClimAlert (WBGT real-time)
- **KPI cible :** Couverture cartographique · délai d'alerte aux services sociaux pour visites
- **Pourquoi MVP-08 :** Aligné avec Plan Climat Montréal 2020-2030 et plans climat de plusieurs villes québécoises. Vies sauvées potentielles documentées dans la littérature santé publique
- **Hypothèse :** Capteurs IoT déployables en partenariat avec ECCC, MDDELCC, INSPQ

#### MVP-09 · WaterLeakDetectAI (score 12/15)

- **Enjeu adressé :** Pertes d'eau potable du réseau municipal (un enjeu majeur documenté pour Montréal et nombreuses villes nord-américaines)
- **Description :** Détection des fuites par patterns de consommation/pression anormaux + ML
- **Plateforme AgenticX5 :** SafeTwinX5 + Predictive ML
- **KPI cible :** Détection des fuites majeures avant signalement · ROI direct sur volumes d'eau économisés
- **Pourquoi MVP-09 :** ROI **direct et mesurable**. Volume d'eau perdu = coût direct de pompage + traitement + perte d'actif
- **Hypothèse de cadrage :** Un objectif de réduction des pertes de l'ordre de 5-15 % est plausible selon la maturité du réseau (à confirmer en pilote)

#### MVP-10 · HomelessnessHotspotAI (score 12/15)

- **Enjeu adressé :** Crise de l'itinérance · approche humaine de l'allocation des services sociaux
- **Description :** Cartographie des hotspots d'itinérance + dispatch coordonné des services sociaux (travailleurs de rue, refuges, services de santé)
- **Plateforme AgenticX5 :** BehaviorX (adapté · respect strict de l'anonymat)
- **KPI cible :** Réduction du temps de réponse · meilleure couverture des hotspots émergents
- **Pourquoi MVP-10 :** Crise sociale documentée. Demande des organismes communautaires et services sociaux municipaux
- **Garde-fous critiques :** **Jamais** d'identification individuelle · agrégation spatiale minimale · supervision par éthicien · co-construction avec organismes du milieu (ex. Mission Bon Accueil, Maison du Père, Old Brewery Mission, RAPSIM — partenariats à formaliser)

#### MVP-11 · UrbanDataMartX (score 12/15)

- **Enjeu adressé :** Souveraineté des données municipales · monétisation responsable des données ouvertes anonymisées
- **Description :** Marketplace de données municipales (anonymisées, agrégées) + API souveraine québécoise
- **Plateforme AgenticX5 :** SafetyGraph + CLAW-SHIELD-X5
- **KPI cible :** Nombre de datasets publiés · usagers actifs API · revenus modestes initiaux (à confirmer)
- **Pourquoi MVP-11 :** Différenciation **forte** vs Sidewalk Labs/Google (anti-data extractivism). Aligné avec stratégie numérique du gouvernement du QC
- **Modèle économique :** Freemium pour usage civique/recherche · payant pour usage commercial · revenus partagés avec la municipalité

#### MVP-12 · PotholePatrol (score 11/15)

- **Enjeu adressé :** Maintien du réseau routier · réduction des litiges liés aux dommages aux véhicules
- **Description :** Détection automatique des nids-de-poule par caméras embarquées sur véhicules municipaux (CV YOLO v11)
- **Plateforme AgenticX5 :** SafeScan360 (production · YOLO v8/v11 custom)
- **KPI cible :** Couverture du réseau · réduction des délais de signalement · ROI sur réclamations
- **Pourquoi MVP-12 :** **Quick win technique** (CV mature). ROI mesurable sur réclamations évitées
- **Extension naturelle :** Détection de fissures de trottoirs (#24 SidewalkCrackAI) sur la même base technique

#### MVP-13 · FloodRiskRealtime (score 11/15)

- **Enjeu adressé :** Prévention des inondations urbaines · adaptation climatique
- **Description :** Prédiction d'inondations urbaines à 6 h d'avance via radars météo + IoT réseau pluvial + ML
- **Plateforme AgenticX5 :** Predictive ML + SafeTwinX5
- **KPI cible :** Précision prédictive (à établir en backtesting) · délai d'alerte aux services d'urgence
- **Pourquoi MVP-13 :** Inondations documentées au QC (2017, 2019 notamment). Plans de gestion des inondations existants dans plusieurs villes
- **Précautions :** Pas de prédictions individualisées · alertes via canaux officiels uniquement (Urgence Québec, sentinelle municipale)

#### MVP-14 · MunicipalBldgEnergyAI (score 11/15)

- **Enjeu adressé :** Coûts énergétiques des bâtiments municipaux · cibles GES Plan Climat
- **Description :** Optimisation HVAC bâtiments municipaux (hôtel de ville, écoles, arénas, bibliothèques) via IA
- **Plateforme AgenticX5 :** EDGY-AgenticX5 (orchestrateur)
- **KPI cible :** Économies d'énergie (kWh, $) · réduction GES (tCO₂eq)
- **Pourquoi MVP-14 :** ROI **direct sur factures**. Aligné avec engagements Plan Climat
- **Modèle économique alternatif :** Performance contracting (% des économies réalisées) — modèle à valider

#### MVP-15 · CitySOCAI (score 11/15)

- **Enjeu adressé :** Cybersécurité des infrastructures municipales · résilience aux ransomwares
- **Description :** Centre opérationnel cyber 24/7 spécialisé infrastructures municipales (SCADA eau, feux circulation, ERP, dossiers citoyens)
- **Plateforme AgenticX5 :** CLAW-SHIELD-X5 (souveraineté QC)
- **KPI cible :** Détection précoce d'intrusions · MTTR (mean time to recovery)
- **Pourquoi MVP-15 :** Contexte de cyberattaques documentées sur infrastructures publiques canadiennes (CIUSSS-CO 2022, Ville d'Hamilton 2024, etc.). Demande latente forte
- **Partenariats nécessaires :** Centre canadien pour la cybersécurité (CCC), Sûreté du Québec, fournisseurs de threat intelligence

---

## 3. Méthodologie de priorisation

### 3.1 Échelles de scoring

#### Faisabilité (F · 1-5)

| Score | Critère |
|---|---|
| 5 | Plateforme AgenticX5 en production, données disponibles, conformité claire |
| 4 | Plateforme AgenticX5 mature, adaptation municipale modérée requise |
| 3 | Plateforme AgenticX5 en prototype, partenariats données nécessaires |
| 2 | Développement substantiel requis, données complexes à obtenir |
| 1 | Greenfield, multiples blocages réglementaires/données |

#### Impact (I · 1-5)

| Score | Critère |
|---|---|
| 5 | Vies humaines en jeu OU enjeu majeur documenté (cyber, climat, itinérance) |
| 4 | Bénéfice large (>50 % des résidents) ou ROI financier élevé |
| 3 | Bénéfice ciblé mais clair, ROI modéré |
| 2 | Bénéfice incrémental, ROI à démontrer |
| 1 | Effet limité ou cosmétique |

#### Différenciation (D · 1-5)

| Score | Critère |
|---|---|
| 5 | Aucune solution équivalente sur le marché municipal QC/Canada |
| 4 | Solutions existantes mais limitées; AgenticX5 a une avance technique nette |
| 3 | Marché concurrentiel; AgenticX5 a un avantage de niche |
| 2 | Marché établi; AgenticX5 doit se battre sur prix/intégration |
| 1 | Commodité, pas d'avantage compétitif clair |

### 3.2 Filtres exclusifs (kill switches)

Un service est **disqualifié** du MVP s'il échoue à l'un de ces filtres :

1. **Conformité Loi 25** : impossible de garantir l'anonymisation requise → exclu
2. **EU AI Act** : système classé « haut risque » sans gouvernance prête → exclu du MVP, replanifié après GATES-X5 Municipal
3. **Acceptabilité sociale** : risque de surveillance disproportionnée → revue éthique obligatoire avant pilote
4. **Capacité d'orchestration** : aucune plateforme AgenticX5 réutilisable et complexité dev > 6 mois → exclu

### 3.3 Pondération composite

Pour le MVP : **égale pondération** F=I=D=1 (somme simple)

Pour la **Phase 2** (post-MVP), pondération pourra évoluer :
- Marché public sensible → I × 1,5
- Concurrence agressive → D × 1,5
- Contraintes ressources → F × 1,5

### 3.4 Limites de la méthodologie

- Scoring **subjectif** réalisé par l'équipe interne · à valider auprès de partenaires municipaux
- Aucune étude de marché formelle réalisée à ce stade
- Hypothèses ROI non chiffrées de manière sourçable · à raffiner en pilote
- Couverture concurrentielle (différenciation) basée sur connaissance générale du marché · veille concurrentielle formelle à venir

---

## 4. Catalogue complet — 100 services

### 4.1 Mobilité urbaine et transports (1-10)

| # | Service | Enjeu spécifique | Stack AgenticX5 |
|---|---|---|---|
| 01 | **CityFlow Traffic Predictor** | Mobilité fluide · réduction GES | Predictive ML + IoT |
| 02 | **TransitOptimX** | Iniquité accès transport collectif | Predictive ML + Neo4j |
| 03 | **PedestrianGuard** | Sécurité piétons (Vision Zéro routière) | SafeScan360 + EDGY |
| 04 | **BikeLaneSentinel** | Sécurité cyclistes · application règlements | SafeScan360 |
| 05 | **ParkingDemandAI** | Réduction temps de recherche · qualité de vie | Predictive ML |
| 06 | **FreightWindowOpt** | Logistique urbaine · cohabitation usages | EDGY + SafeFleet adapté |
| 07 | **EVChargeOrchestrator** | Transition véhicules électriques | EDGY + IoT |
| 08 | **WinterRoadAI** | Continuité services hiver QC | Predictive ML + IoT |
| 09 | **MicromobilityFleetX** | Optimisation fleets partagées | EDGY + Predictive ML |
| 10 | **AccessibilityRouter** | Inclusion handicap · LAPHQ | Neo4j + Predictive ML |

### 4.2 Sécurité publique et ordre urbain (11-20)

| # | Service | Enjeu spécifique | Stack AgenticX5 |
|---|---|---|---|
| 11 | **CrimePatternX** | Allocation patrouilles · prévention | SafetyGraph (adapté) |
| 12 | **EmergencyDispatchAI** | Temps de réponse · vies sauvées | BehaviorX + EDGY |
| 13 | **PublicEventCrowdAI** | Sécurité rassemblements | SafeScan360 + EDGY |
| 14 | **GunshotDetect** | Réponse rapide violence armée | IoT + EDGY |
| 15 | **MissingPersonAlert** | Disparitions enfants/aînés | SafeScan360 (anonymisé) |
| 16 | **GraffitiTracker** | Propreté urbaine · récidive | SafeScan360 |
| 17 | **NoiseComplaintRouter** | Cohabitation bruit/qualité vie | BehaviorX + IoT |
| 18 | **PublicLightingAI** | Sécurité piétons + économie énergie | SafeScan360 nocturne |
| 19 | **AntiTheftBikeNet** | Crime opportunité · récupération | IoT + Neo4j |
| 20 | **NightSafetyHeatmap** | Décisions urbanisme préventif | BehaviorX |

### 4.3 Infrastructure et travaux publics (21-30)

| # | Service | Enjeu spécifique | Stack AgenticX5 |
|---|---|---|---|
| 21 | **BridgeIntegrityAI** ⭐ | Inspection prédictive ponts/viaducs | SafeTwinX5 + IoT |
| 22 | **PotholePatrol** ⭐ | Maintien réseau routier · litiges | SafeScan360 |
| 23 | **WaterMainBurstX** | Réduction pertes eau · inondations | SafeTwinX5 + ML |
| 24 | **SidewalkCrackAI** | Chutes piétons · responsabilité ville | SafeScan360 |
| 25 | **PrudenceAI Routier** ⭐ | Sécurité travailleurs · Tome V MTQ | PrudenceAI (production) |
| 26 | **ConstructionPermitTriageX** | Délais traitement permis | LiteraCIA + LLM |
| 27 | **UndergroundUtilityMapAI** | Évite ruptures · sécurité Info-Excavation | SafetyGraph + SIG |
| 28 | **TrafficLightHealthAI** | Continuité circulation · sécurité | IoT + EDGY |
| 29 | **SnowRemovalRoutingX** | Efficacité opérationnelle hivernale | EDGY + IoT |
| 30 | **PavementAgePredictor** | Programmation budgets infra 5-10 ans | Predictive ML |

### 4.4 Environnement, climat et résilience (31-40)

| # | Service | Enjeu spécifique | Stack AgenticX5 |
|---|---|---|---|
| 31 | **HeatIslandX** ⭐ | Canicules · santé aînés | SquadrAI ClimAlert |
| 32 | **AirQualityHyperlocal** | Pollution · santé respiratoire | IoT + Predictive ML |
| 33 | **FloodRiskRealtime** ⭐ | Adaptation changements climatiques | Predictive ML + IoT |
| 34 | **TreeCanopyMonitor** | Verdissement · règlements arboricoles | SafeScan360 (satellite) |
| 35 | **StormwaterAI** | Refoulement égouts · climat | SafeTwinX5 + IoT |
| 36 | **CarbonBudgetTracker** | Plans climat · cibles 2030/2050 | EDGY + SafetyGraph |
| 37 | **InvasiveSpeciesDetect** | Biodiversité · santé publique | SafeScan360 (citoyens) |
| 38 | **SnowMeltModelX** | Inondations printanières · planification | Predictive ML |
| 39 | **WildfireUrbanInterface** | Évacuations · résilience climatique | SafeScan360 + IoT |
| 40 | **GreenInfraValidator** | Investissements infra verte · ROI | SafeScan360 (satellite) |

### 4.5 Bâtiments, énergie, eau (41-50)

| # | Service | Enjeu spécifique | Stack AgenticX5 |
|---|---|---|---|
| 41 | **MunicipalBldgEnergyAI** ⭐ | Coûts énergie · GES | EDGY + IoT |
| 42 | **VacantBuildingTrack** | Logement · sécurité incendie | SafeScan360 + Neo4j |
| 43 | **WaterLeakDetectAI** ⭐ | Pertes eau · ROI direct | SafeTwinX5 + ML |
| 44 | **HeritageBldgMonitor** | Conservation patrimoine bâti | SafeTwinX5 (LiDAR+CV) |
| 45 | **ElevatorPredictiveAI** | Pannes · accessibilité aînés | Predictive ML |
| 46 | **SchoolIAQMonitor** | Santé enfants · post-COVID | IoT + Predictive ML |
| 47 | **FireHydrantInspect** | Réponse incendie · responsabilité | SafeScan360 |
| 48 | **RoofSnowLoadAI** | Sécurité hivers extrêmes | Hovermap LiDAR |
| 49 | **DistrictHeatingOpt** | Transition énergétique densité | EDGY + IoT |
| 50 | **BuildingPermitSimX** | Acceptabilité sociale · CCU | SafeTwinX5 |

### 4.6 Santé publique et services sociaux (51-60)

| # | Service | Enjeu spécifique | Stack AgenticX5 |
|---|---|---|---|
| 51 | **HomelessnessHotspotAI** ⭐ | Crise itinérance · approche humaine | BehaviorX (adapté) |
| 52 | **VaccinationOutreachX** | Santé publique équité | BehaviorX + Neo4j |
| 53 | **OpioidOverdoseAlert** | Crise opioïdes · naloxone | EDGY + Predictive ML |
| 54 | **SeniorIsolationDetect** | Vieillissement population QC | BehaviorX (multi-signaux) |
| 55 | **FoodInsecurityMapAI** | Pauvreté · santé alimentaire | Neo4j + SIG |
| 56 | **MentalHealthCallTriage** | Engorgement urgences psy | BehaviorX (NLP empathique) |
| 57 | **DaycareWaitlistOpt** | Conciliation famille/travail | EDGY + équité algorithmique |
| 58 | **AnimalControlDispatch** | Bien-être animal · morsures | EDGY + Neo4j |
| 59 | **WelfareFraudDetect** | Intégrité fonds publics + droits | GATES-X5 (gouvernance stricte) |
| 60 | **YouthRiskEarlyWarn** | Persévérance scolaire · DPJ | BehaviorX (revue éthique) |

### 4.7 Permis, conformité et gouvernance municipale (61-70)

| # | Service | Enjeu spécifique | Stack AgenticX5 |
|---|---|---|---|
| 61 | **GATES-X5 Municipal** ⭐ | Loi 25 + EU AI Act art. 14 + cadre IA municipal | GATES-X5 (TRL 7) |
| 62 | **PermitAutoApproveX** | Délais administratifs · charge | LiteraCIA + LLM |
| 63 | **ZoningChatAI** | Service citoyens 24/7 | RAG + LiteraCIA |
| 64 | **CouncilMeetingTranscriberX** | Transparence démocratique | NLP + Whisper |
| 65 | **ContractAnomalyDetect** | Intégrité publique (UPAC) | LLM + GATES-X5 |
| 66 | **InspectionPriorityAI** | Allocation ressources finies | Predictive ML |
| 67 | **LawCitationRAG** | Soutien juristes ville | RAG + LLM |
| 68 | **TaxAssessmentFairness** | Justice fiscale · contestations | GATES-X5 + équité ML |
| 69 | **ProcurementGreenScoreX** | Achats responsables · ESG | LLM + SafetyGraph |
| 70 | **InternalEthicsBot** | Intégrité gouvernance interne | BehaviorX + GATES-X5 |

### 4.8 Engagement citoyen et démocratie locale (71-80)

| # | Service | Enjeu spécifique | Stack AgenticX5 |
|---|---|---|---|
| 71 | **311SmartTriageX** ⭐ | Volume · satisfaction citoyens | BehaviorX (NLP) |
| 72 | **CitizenSentimentX** ⭐ | Pouls communautaire · décisions | BehaviorX |
| 73 | **PublicConsultDigest** | Démocratie participative · OCPM | LLM + RAG |
| 74 | **NeighborhoodVoiceAI** | Budget participatif · priorités | BehaviorX + équité |
| 75 | **PetitionSemanticGroup** | Réponse cohérente conseil | LLM + Neo4j |
| 76 | **AccessibilityFeedbackAI** | Inclusion réelle · conception universelle | BehaviorX (adapté) |
| 77 | **MultilingualCitizenBot** | Inclusion immigrants nouveaux arrivants | Whisper + Claude/LLM |
| 78 | **CivicEducationAdaptiveX** | Littératie civique · jeunes | LiteraCIA |
| 79 | **ElectionAccessAI** | Participation électorale · DGEQ | Neo4j + équité |
| 80 | **CommunityEventDiscoveryX** | Cohésion sociale · vitalité | Recommender ML |

### 4.9 Économie locale, tourisme, culture (81-90)

| # | Service | Enjeu spécifique | Stack AgenticX5 |
|---|---|---|---|
| 81 | **VacancyCommercialX** | Vitalité artères commerciales | SafeScan360 + Neo4j |
| 82 | **TouristFlowPredict** | Surcharge · qualité expérience | Predictive ML + IoT |
| 83 | **EventEconomicImpactAI** | Justification subventions | EDGY + ML |
| 84 | **CulturalHeritageDiscover** | Démocratisation accès culture | LLM + Recommender |
| 85 | **AirbnbComplianceX** | Logement abordable · règlements | SafeScan360 + LLM |
| 86 | **LocalSupplyChainMatch** | Économie circulaire · km zéro | Neo4j + Recommender |
| 87 | **FilmShootLocationAI** | Industrie cinéma · revenus | SafeTwinX5 + Recommender |
| 88 | **RestaurantHealthScoreX** | Sécurité alimentaire · transparence | BehaviorX + Predictive ML |
| 89 | **PublicArtRecommend** | Vitalité culturelle équitable | Recommender + Neo4j |
| 90 | **NightlifeBalanceX** | Cohabitation rues commerciales | BehaviorX + IoT |

### 4.10 Données urbaines, IA souveraine et cybersécurité (91-100)

| # | Service | Enjeu spécifique | Stack AgenticX5 |
|---|---|---|---|
| 91 | **DigitalTwinCity** ⭐ | Simulation décisions urbaines | SafeTwinX5 |
| 92 | **UrbanDataMartX** ⭐ | Souveraineté + Loi 25 | SafetyGraph + CLAW-SHIELD |
| 93 | **PrivacyShieldAI** | Conformité Loi 25 + droits citoyens | GATES-X5 + SafeScan360 |
| 94 | **CitySOCAI** ⭐ | Cyberattaques municipales | CLAW-SHIELD-X5 |
| 95 | **DeepfakeDetectMunicipal** | Intégrité info · élections | GATES-X5 + CV |
| 96 | **SovereignCloudOrchestrator** | Souveraineté numérique · Loi 25 | CLAW-SHIELD-X5 |
| 97 | **AIRegistryMunicipal** | EU AI Act · Loi 25 + redevabilité | GATES-X5 |
| 98 | **OpenDataQualityAI** | Crédibilité plateforme données | SafetyGraph + ML |
| 99 | **CrossDeptKnowledgeGraph** | Décloisonnement silos municipaux | SafetyGraph (Neo4j) |
| 100 | **PROV-O AuditTrailX** ⭐ | Audit démocratique IA · justice | GATES-X5 + SafetyGraph |

> ⭐ = Service inclus dans le MVP TOP 15 (cf. §2)

---

## 5. Roadmap MVP suggérée

### 5.1 Phase 0 — Discovery et co-construction (Mois 1-3)

- Discovery client avec 3-5 municipalités pilotes (mix UMQ + grandes villes)
- Validation des hypothèses ROI et tarification
- Revue éthique externe des 15 services MVP (avec focus sur #51, #59, #60, #11)
- Cadrage juridique Loi 25 / EU AI Act / cadre IA Canada
- Sélection de 1-2 partenaires technologiques (cloud souverain, intégrateurs SI municipaux)

### 5.2 Phase 1 — MVP core gouvernance (Mois 4-9)

Modules à déployer en priorité :

- **MVP-01** GATES-X5 Municipal · **prérequis** pour tous les autres (Phase 02 du continuum · Run)
- **MVP-06** PROV-O AuditTrailX (Phases 02 + 03 · Run + Post)
- **MVP-11** UrbanDataMartX (Phase 02 · Run)
- **MVP-15** CitySOCAI (Phase 02 · Run)

Justification : sans la couche de gouvernance, les services métier ne peuvent être déployés en conformité Loi 25. GATES-X5 Municipal est le socle de la **Phase 02 · Run** du continuum AgenticX5 Governance Suite.

### 5.3 Phase 2 — Services métier à fort ROI (Mois 7-12, en parallèle Phase 1)

- **MVP-02** PrudenceAI Routier (déjà en production, scaling)
- **MVP-12** PotholePatrol
- **MVP-09** WaterLeakDetectAI
- **MVP-14** MunicipalBldgEnergyAI
- **MVP-05** DigitalTwinCity (un quartier pilote)

### 5.4 Phase 3 — Services à enjeu social et climatique (Mois 10-18)

- **MVP-03** 311SmartTriageX
- **MVP-04** CitizenSentimentX
- **MVP-08** HeatIslandX
- **MVP-10** HomelessnessHotspotAI (revue éthique requise)
- **MVP-07** BridgeIntegrityAI
- **MVP-13** FloodRiskRealtime

### 5.5 Phase 4 et au-delà — Catalogue étendu (Mois 18+)

Déploiement des 85 autres services selon demande client, partenariats, et opportunités sectorielles. Priorisation à revisiter trimestriellement avec données du marché.

---

## 6. Stack technique AgenticX5 sous-jacent

### 6.1 Continuum AgenticX5 Governance Suite (architecture transversale)

Le catalogue CityFlow-X5 s'appuie sur le continuum officiel **DiagX5 → GATES-X5 → AdoptX5** documenté sur [ax5-suite-gouvernance.netlify.app](https://ax5-suite-gouvernance.netlify.app/) :

| Phase | Plateforme | Rôle dans CityFlow-X5 | Référence externe |
|---|---|---|---|
| **Phase 01 · Pré** | **DiagX5** | Diagnostic prédictif & simulation pré-déploiement (~30 jours) | [diagx5-architexture.netlify.app](https://diagx5-architexture.netlify.app/) |
| **Phase 02 · Run** | **GATES-X5** | Gouvernance temps réel · 5 modules OBSERVE/GUARD/EVALUATE/COLLECT/REMEMBER · TRL 7 | [gates-x5-slides.netlify.app](https://gates-x5-slides.netlify.app/) |
| **Phase 03 · Post** | **AdoptX5** | Apprentissage organisationnel post-Go-Live (cycle trimestriel) | [adopt-x5-demo.netlify.app](https://adopt-x5-demo.netlify.app/) |

Vitrine écosystème complet : [avant-hub.netlify.app](https://avant-hub.netlify.app/) (16 plateformes sectorielles AgenticX5)

### 6.2 Plateformes support AgenticX5 (réutilisées dans CityFlow-X5)

8 plateformes couvrent ~70 % des 100 services en complément du continuum 3 phases :

| Plateforme | Rôle dans CityFlow-X5 | Statut |
|---|---|---|
| **GATES-X5** | Gouvernance agents IA municipaux (ex-AEGIS-X5) | TRL 7, SDK framework-agnostic |
| **SafetyGraph** | Knowledge Graph Neo4j (22M+ records) adapté | Production |
| **BehaviorX** | NLP comportemental (sentiment, triage) | Production (92 % accuracy) |
| **SafeScan360** | Computer Vision YOLO v11 multi-usages | Production |
| **SafeTwinX5** | Digital Twin BIM + LiDAR + IoT | Démo Lévis live |
| **EDGY-AgenticX5** | Orchestrateur 122+ agents WAVE 4 | Production |
| **CLAW-SHIELD-X5** | Souveraineté numérique QC | Production |
| **PrudenceAI** | Conformité Tome V MTQ | Production |

### 6.3 Stack technique 2026

- **LLMs** : Claude 4.6/4.7 Sonnet, GPT-5o, Llama 3.3 70B (sélection selon sensibilité données)
- **Orchestration** : LangGraph 0.3.x, CrewAI Enterprise
- **Vector DB** : Pinecone (1536 dims), Weaviate (option souveraine)
- **Knowledge Graph** : Neo4j Aura (option self-hosted pour données sensibles)
- **Predictive ML** : TFT (Temporal Fusion Transformer), LSTM, XGBoost
- **Computer Vision** : YOLO v8/v11, MediaPipe, OpenCV
- **NLP** : Hugging Face Transformers, spaCy, Whisper
- **IoT** : MQTT (AWS IoT Core option), OPC-UA, Modbus
- **Edge** : NVIDIA Jetson (275 TOPS) pour CV temps réel
- **Cloud** : Cloud souverain QC (option principale) · AWS/Azure (option non-sensible)

### 6.4 Conformité native

- **Loi 25 (Québec)** — Anonymisation par défaut, consentement granulaire, droit à l'oubli
- **RGPD** — Si déploiement Europe (CityFlow-X5 EU)
- **EU AI Act** — Classification haut risque, registre obligatoire, traçabilité PROV-O
- **NIST AI RMF** — Cadre de gestion des risques IA (États-Unis)
- **Cadre IA Canada** — Projet de loi C-27 LIAD (à suivre)
- **ISO 27001 / ISO 27701** — Sécurité et privacy
- **PROV-O (W3C)** — Standard de provenance pour audits

---

## 7. Anti-positionnement et gouvernance

### 7.1 Ce que CityFlow-X5 n'est PAS

- ❌ **PAS un remplacement** des SI municipaux existants (Oracle, SAP, Tyler, Esri ArcGIS, Genetec)
- ❌ **PAS une ville prédictive** — c'est un outil d'**aide à la décision**, jamais un oracle
- ❌ **PAS un système de surveillance de masse** — anonymisation par défaut, agrégation spatiale obligatoire
- ❌ **PAS un produit clé en main** — chaque déploiement nécessite co-construction avec la ville
- ❌ **PAS une boîte noire** — toutes les décisions algorithmiques sont auditables PROV-O
- ❌ **PAS un substitut au jugement humain** — Human-in-the-Loop systématique sur décisions critiques

### 7.2 Principes de gouvernance non négociables

1. **Primauté du jugement humain** sur décisions critiques (santé, services sociaux, justice fiscale)
2. **Transparence par défaut** — code source des algorithmes critiques accessible à audit indépendant
3. **Anonymisation by design** — aucune décision individuelle automatisée sans recours humain
4. **Équité algorithmique** — audits réguliers de biais (genre, racial, géographique, économique)
5. **Souveraineté des données** — hébergement au Québec/Canada par défaut
6. **Co-construction** — comités citoyens sur déploiements à enjeu social
7. **Réversibilité** — toute décision algorithmique peut être annulée par un humain habilité
8. **PROV-O obligatoire** — traçabilité complète de qui a décidé quoi, quand, sur quelles données

### 7.3 Garde-fous éthiques par catégorie

| Catégorie | Garde-fou critique |
|---|---|
| Sécurité publique | Pas de reconnaissance faciale individualisée · pas de policing prédictif individuel |
| Services sociaux | Aucune décision automatisée sur prestations · supervision travailleurs sociaux |
| Justice fiscale | Audits de biais trimestriels obligatoires |
| Démocratie | Pas de manipulation persuasive · transparence des algorithmes de modération |
| Données | Consentement granulaire · droit à l'oubli effectif |

### 7.4 Cadre de revue éthique

- **Comité éthique externe** indépendant (académique + société civile + juriste)
- **Revue obligatoire** avant tout déploiement sur services à enjeu social (cat. 6 + #11, #59, #60, #68)
- **Évaluation d'impact algorithmique** (EIA) selon le modèle du gouvernement du Canada
- **Publication annuelle** d'un rapport de transparence

---

## 8. Audit-log

### 8.1 Données d'entrée et hypothèses

**Source des 100 services :** Catalogue généré par Claude Opus 4.7 le 2026-05-09 sur la base de :
- Connaissance de l'écosystème AgenticX5 fournie par Mario Deshaies (userMemories Claude.ai · userPreferences)
- Connaissance générale des enjeux urbains canadiens et québécois
- Veille concurrentielle informelle (Sidewalk Labs, Genetec, Oracle Smart Cities, IBM Smarter Cities, Esri ArcGIS Urban)
- Cadres réglementaires : Loi 25 QC (en vigueur), RGPD, EU AI Act (adopté 2024), NIST AI RMF

**Hypothèses de travail explicites :**

1. Les 8 plateformes AgenticX5 citées comme « production » ont la maturité technique annoncée (à valider en revue technique formelle)
2. La demande des municipalités QC pour ces services est latente mais non formellement mesurée — discovery client requis
3. Les exemples de tarification mentionnés sont des ordres de grandeur, **non engageants**
4. Les KPI cibles sont des **propositions** à valider en pilote, non des promesses contractuelles
5. Le scoring F/I/D est subjectif et représente la perspective de l'équipe Préventera/AgenticX5 à date · à challenger en discovery

### 8.2 Limites de fiabilité

- ⚠️ Aucune étude de marché formelle réalisée à ce stade
- ⚠️ Aucun benchmark concurrentiel chiffré
- ⚠️ Hypothèses ROI non chiffrées de manière sourçable
- ⚠️ Le scoring de différenciation (D) reflète la connaissance générale de l'équipe, pas une analyse exhaustive du paysage concurrentiel
- ⚠️ Certains services (notamment cat. 6 santé/social) requièrent une revue éthique préalable approfondie
- ⚠️ La conformité Loi 25 / EU AI Act est posée par construction, mais doit être validée juridiquement service par service avant déploiement
- ⚠️ Les chiffres de pertes d'eau (~30 %) et autres références contextuelles sont mentionnés comme ordres de grandeur usuels dans la littérature municipale, sans référence sourcée formelle dans le présent document

### 8.3 Chiffres et références à sourcer formellement avant publication

Le document ci-dessous mentionne plusieurs faits qui sont des **ordres de grandeur usuels**, mais qui devraient être sourcés formellement avant toute publication externe :

| Affirmation | Statut | Action requise |
|---|---|---|
| « Plan Climat Montréal 2020-2030 » | Public, vérifiable | Citer document officiel ville de Montréal |
| « Loi 25 entrée en vigueur progressive depuis 2022 » | Public, vérifiable | Citer source légale officielle |
| « EU AI Act adopté 2024 » | Public, vérifiable | Citer Règlement UE 2024/1689 |
| « Effondrement viaduc de la Concorde 2006 » | Événement historique documenté | Citer rapport CEVC |
| « Inondations QC 2017 / 2019 » | Événements documentés | Citer rapports gouvernementaux |
| « Cyberattaque CIUSSS-CO 2022 » | Événement documenté | Citer communiqués officiels |
| « Mtl pertes eau ~30 % » | Ordre de grandeur usuel | Sourcer Service de l'eau Mtl ou rapport BAPE/Vérificateur général |
| « Canicule Mtl 2018, ~66 décès » | Documenté DSP | Citer rapport DSP Mtl 2018 |
| « 8 plateformes AgenticX5 en production » | Auto-déclaratif | Validation TRL formelle interne |
| « Score 92 % BehaviorX NLP » | Auto-déclaratif | Documentation backtesting interne |
| « 22M+ records Neo4j SafetyGraph » | Auto-déclaratif | Documentation infrastructure interne |

### 8.4 Gouvernance du document

- **Versioning** : v1.0 (catalogue initial) · v1.1 (alignement Convention de Naming v2.0) · v1.2 (alignement continuum 3 phases · AEGIS-X5 → GATES-X5) · v2.0 (post-discovery client)
- **Revue requise avant v1.3** :
  - Validation technique TRL des plateformes AgenticX5 citées
  - Revue juridique Loi 25 et EU AI Act sur les 15 MVP
  - Revue éthique externe sur cat. 6 (services sociaux) et #11 (CrimePatternX)
  - Cartographie des 84 cellules opérationnelles MIT v4 × continuum 3 phases pour le secteur municipal (en miroir des 4 secteurs déjà cartographiés sur ax5-suite-gouvernance)
- **Revue requise avant v2.0** :
  - Discovery client avec 3-5 municipalités
  - Veille concurrentielle formelle
  - Validation tarification

### 8.5 Kill switches éditoriaux à préserver

Reprise de la doctrine NordicX5, transposée à CityFlow-X5 :

1. ❌ **Jamais** de promesses chiffrées non sourçables (« réduction de X % en Y ans » sans source)
2. ❌ **Jamais** d'organisations tierces nommées comme partenaires sans accord formel
3. ❌ **Jamais** de promesse de remplacement des SI existants
4. ❌ **Jamais** de positionnement « ville prédictive » ou « oracle »
5. ❌ **Jamais** de service à reconnaissance faciale individualisée sans cadre légal explicite
6. ❌ **Jamais** de service de policing prédictif individuel
7. ❌ **Jamais** de décision automatisée sur prestations sociales sans recours humain
8. ❌ **Jamais** d'acceptation de service sans evaluation d'impact algorithmique (EIA)

---

## Annexe A — Cohérence avec doctrine AgenticX5

Ce catalogue respecte la **Charte d'Écosystème AgenticX5** (cf. skill `charte-ecosysteme-agenticx5`) :

- **Primauté de la vie** — services de sécurité publique conçus avec garde-fous explicites
- **Éthique by design** — gouvernance, anonymisation, équité par défaut
- **Traçabilité** — PROV-O sur toutes les décisions
- **Conformité multijuridictionnelle** — Loi 25, RGPD, EU AI Act, NIST AI RMF intégrés
- **Human-in-the-Loop** — systématique sur décisions critiques

---

## Annexe B — Liens et ressources

- Site CityFlow-X5 (à compléter) : `https://cityflow-x5.netlify.app` (URL prévue)
- Écosystème AgenticX5 : `https://agenticx5.com`
- NordicX5 (référence doctrinale Vision Zéro) : `https://nordicx5-quebec.netlify.app`
- Contact : `team@agenticx5.com`

---

**Fin du document v1.2 · 9 mai 2026**

> Ce document est une œuvre de travail collaborative Mario Deshaies (Innoventera Inc. / Préventera/AgenticX5) × Claude Opus 4.7 (Anthropic). Toute utilisation externe nécessite validation v1.3 avec sources formellement référencées.

> **Note de version v1.1 → v1.2** : alignement complet sur le **continuum officiel AgenticX5 Governance Suite** (DiagX5 → GATES-X5 → AdoptX5) documenté factuellement sur [ax5-suite-gouvernance.netlify.app](https://ax5-suite-gouvernance.netlify.app/). Changements majeurs :
>
> 1. **MVP-01** renommé `AEGIS-X5 Municipal` → **`GATES-X5 Municipal`** (cohérence avec nomenclature officielle 2026)
> 2. **Colonne "Phase"** ajoutée au tableau MVP TOP 15 (Pré / Run / Post)
> 3. **§1.1 enrichi** d'une note explicite sur la dépréciation d'AEGIS-X5 au profit du continuum
> 4. **§6 Stack technique restructuré** en 4 sous-sections : §6.1 Continuum, §6.2 Plateformes support, §6.3 Stack tech 2026, §6.4 Conformité
> 5. **11 occurrences AEGIS-X5** dans le catalogue 100 services remplacées par GATES-X5
> 6. **Structure 10 enjeux urbains préservée** (par décision stratégique du 9 mai 2026 : la grille de lecture du Directeur de Ville prime sur la grille produit)
> 7. **MIT AI Risk Repository v4** ajouté comme référentiel de conformité native
>
> Cette version reste **alignée sur la Convention de Naming v2.0** (PR #2 mergée le 8 mai 2026 · commit `cba7a20`) pour le naming CityFlow-X5.
