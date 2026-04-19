# AX5-CitaFlow · Annexe 2 — Spécifications techniques

**Document complémentaire au one-pager IVÉO Défi #5**
**Version** : 1.0 · 19 avril 2026
**Soumissionnaire** : Innoventera Inc. — AgenticX5
**Classification** : Disponible sous entente de confidentialité (NDA)

---

## Objet du document

Cette annexe détaille la **stack technologique**, le **pipeline ML/DL**, l'**architecture en 5 niveaux**, les **métadonnées PROV-O** et le **blueprint d'intégration** d'AX5-CitaFlow.

Elle répond aux questions que des évaluateurs techniques du jury IVÉO ou de partenaires institutionnels pourraient légitimement poser sur la solidité technique de la solution.

---

## 1. Stack technologique

### 1.1 Couche d'orchestration agentique

| Composant | Technologie | Rôle |
|---|---|---|
| **Orchestration** | Framework agentique AgenticX5 propriétaire (sur base LangGraph + CrewAI) | Coordination des 10 agents AX5-CitaFlow + 500 agents AgenticX5 mobilisables |
| **Gouvernance** | Charte éthique AgenticX5 (primauté de la vie, HITL ≥ orange, XAI, PROV-O) | Règles non négociables appliquées à chaque décision |
| **Human-in-the-Loop** | Seuils automatisés orange/rouge · interface municipale dédiée | Validation humaine systématique sur décisions à fort impact |

### 1.2 Couche modèles d'IA

| Type de modèle | Usage | Technologie |
|---|---|---|
| **LLM propriétaires** (tâches non-sensibles) | Synthèse, reformulation, communication citoyenne | Claude (Anthropic), GPT (OpenAI) — données anonymisées uniquement |
| **LLM open-source locaux** (tâches sensibles) | Analyse de données municipales sensibles, agents décisionnels internes | Llama 3.3, Mistral Large — hébergés en infrastructure canadienne |
| **Modèles prédictifs** | Anticipation 24-72 h des incidents | Réseaux bayésiens hiérarchiques + Gradient Boosting (XGBoost) |
| **Modèles séries temporelles** | Détection d'anomalies de trafic | Prophet + LSTM pour les saisonnalités multi-échelles |
| **Graph Neural Networks** | Corrélation CNESST × SAAQ × AGIR sur SafetyGraph | PyTorch Geometric + Neo4j GDS |
| **Computer Vision** | Analyse des caméras ONVIF/RTSP | YOLO v8 + modèles customs anonymisation |
| **Embeddings sectoriels** | Appariement SCIAN pour transposition Alphaville | Sentence Transformers + fine-tuning sur corpus SST/mobilité |

### 1.3 Couche de données

| Composant | Technologie | Usage |
|---|---|---|
| **Graphe de connaissances** | Neo4j Enterprise (22 M+ nœuds, 40+ normes unifiées) | SafetyGraph AgenticX5 — cœur de la corrélation multi-source |
| **Vector database** | Weaviate + pgvector (PostgreSQL) | Recherche sémantique sur 5 000+ scénarios archivés |
| **Base transactionnelle** | PostgreSQL 16 + TimescaleDB | Événements temps réel, séries temporelles |
| **Data lake** | Parquet + Apache Iceberg | Archive long terme, rejouabilité |
| **Cache et queues** | Redis + Apache Kafka | Latence < 10 s vers Waze CCP |

### 1.4 Couche infrastructure

| Aspect | Choix technique | Justification |
|---|---|---|
| **Hébergement** | Cloud canadien certifié (OVHcloud Montréal, AWS Canada Central) | Souveraineté QC/CA, certification Centre canadien pour la cybersécurité |
| **Conteneurisation** | Docker + Kubernetes | Scalabilité multi-tenant, déploiement reproductible |
| **CI/CD** | GitHub Actions + ArgoCD | Déploiement continu avec gates de sécurité |
| **Observabilité** | Prometheus + Grafana + OpenTelemetry | Métriques temps réel, audit de performance |
| **Chiffrement** | TLS 1.3 (transit) + AES-256 (repos) + KMS canadien | Conformité ISO/IEC 27001 |

---

## 2. Pipeline ML / Deep Learning

### 2.1 Vue d'ensemble

```
┌─ Collecte ─────────────────────────────────────────────────────────────┐
│  Données ouvertes (Catégorie A) + Sources terrain (Catégorie B)        │
│  + Voix citoyenne 311                                                  │
└────────────────────────────┬────────────────────────────────────────────┘
                             ▼
┌─ Harmonisation ────────────────────────────────────────────────────────┐
│  Normalisation multi-juridictionnelle · déduplication · enrichissement │
│  géospatial · appariement SCIAN                                        │
└────────────────────────────┬────────────────────────────────────────────┘
                             ▼
┌─ Graphe de connaissances ──────────────────────────────────────────────┐
│  SafetyGraph Neo4j · corrélations multi-source · requêtes Cypher < 50ms│
└────────────────────────────┬────────────────────────────────────────────┘
                             ▼
┌─ Intelligence prédictive ──────────────────────────────────────────────┐
│  14 facteurs synergiques (A1-A7 + B1-B7) · modèles bayésiens           │
│  hiérarchiques · GNN sur SafetyGraph · détection d'anomalies           │
└────────────────────────────┬────────────────────────────────────────────┘
                             ▼
┌─ Simulation émergente (PREDIAG-X5) ────────────────────────────────────┐
│  Multi-agents · scénarios what-if · rehearsal stakeholder ·            │
│  transposition Alphaville                                              │
└────────────────────────────┬────────────────────────────────────────────┘
                             ▼
┌─ Décision et HITL ─────────────────────────────────────────────────────┐
│  XAI (SHAP) · seuils orange/rouge · validation humaine · audit PROV-O  │
└────────────────────────────┬────────────────────────────────────────────┘
                             ▼
┌─ Diffusion (4 écosystèmes cibles) ─────────────────────────────────────┐
│  Waze CIFS · GTFS-RT · GBFS · Open511 · portails municipaux            │
│  Latence : < 10 s (Waze) · < 60 s (municipal)                          │
└────────────────────────────────────────────────────────────────────────┘
```

### 2.2 Détails par étape

**Collecte**

| Source | Fréquence | Format | Volumétrie estimée périmètre |
|---|---|---|---|
| Permis AGIR | Quotidien (API interne) / batch (ouverte) | JSON | 150-300 permis actifs |
| SAAQ ouvertes | Annuel | CSV / GeoJSON | 2 000 accidents/an |
| CNESST SafetyGraph | Mensuel | Neo4j import | 300 000+ lésions historiques |
| Hydro-Québec pannes | Toutes les 5 min | Scraping HTML → JSON | 0-15 événements/jour |
| 311 MTL | Temps réel (API) | JSON | 50-200 requêtes/jour |
| Vélo Québec | Annuel + temps réel (si partenariat) | CSV / GeoJSON | 15-20 corridors |
| Environnement Canada | Temps réel | API REST | 1 point/h |
| Caméras ONVIF/RTSP (P0) | Temps réel | Streams vidéo | 6-10 caméras |
| Compteurs IoT LoRaWAN (P0) | Toutes les 5 min | MQTT | 12-16 compteurs |
| API CAD SPVM/SIM (à confirmer) | Temps réel | REST authentifié | 10-50 événements/jour |
| SCG feux (à confirmer) | Temps réel | Propriétaire MTL | 250+ feux sur périmètre |

**Harmonisation**

Cette étape convertit la diversité des sources en un **modèle de données unifié AX5-CitaFlow** :

1. **Normalisation géospatiale** : toutes les coordonnées sont converties en WGS84 (EPSG:4326) puis indexées par quadkey (Bing Maps) et H3 (Uber).
2. **Appariement temporel** : fuseau horaire unique (America/Montreal), horodatage ISO 8601 avec précision seconde.
3. **Déduplication multi-source** : un événement peut être signalé par plusieurs sources (ex. panne Hydro + 311 + caméra) — les clones sont résolus via un algorithme de matching (similitude géospatiale + temporelle + sémantique).
4. **Enrichissement SCIAN** : les permis et chantiers sont enrichis automatiquement avec leur code sectoriel pour le croisement CNESST.

**Graphe de connaissances SafetyGraph**

- **22 M+ nœuds** (incidents, normes, sources, acteurs)
- **40+ normes unifiées** (ISO, OHSAS, CNESST, Tome V MTQ, LSST)
- **Requêtes Cypher optimisées** < 50 ms
- **Mises à jour incrémentales** quotidiennes
- **Ontologie propriétaire AgenticX5** alignée sur PROV-O

**Intelligence prédictive — 14 facteurs synergiques**

Le modèle prédictif combine trois approches :

1. **Réseau bayésien hiérarchique** qui encode les dépendances causales entre facteurs A (structurels) et facteurs B (organiques)
2. **Graph Neural Network** sur SafetyGraph qui identifie les patterns de coactivité à risque élevé par similarité avec les incidents historiques
3. **Détection d'anomalies multivariée** qui déclenche des alertes quand la combinaison de facteurs sort de l'enveloppe nominale

La **sortie** est un vecteur de probabilités sur les 6 catégories d'événements avec :
- Probabilité d'occurrence dans une fenêtre 24-72 h
- Niveau de confiance (intervalle bayésien)
- Explication XAI (SHAP values sur les facteurs contributeurs)
- Seuil HITL déclenché si probabilité × impact > seuil orange/rouge

**Simulation émergente PREDIAG-X5**

- **Multi-agents** : chaque partie prenante (11 rôles modélisés) est un agent autonome avec ses préférences, contraintes, réactions
- **Monte Carlo** : 10 000+ simulations par scénario pour converger vers des distributions de résultats
- **Rehearsal** : exploration des configurations possibles avant décision réelle
- **Transposition Alphaville** : normalisation statistique vers la ville étalon IVÉO (détails en Annexe 1 §9.2)

---

## 3. Architecture en 5 niveaux (SSMM5)

AX5-CitaFlow est structuré selon l'architecture de référence AgenticX5 en 5 niveaux :

| Niveau | Nom | Responsabilité | Composants AX5-CitaFlow |
|---|---|---|---|
| **N1** | **Interface** | Dashboards, alertes multi-canaux, portails citoyen et élu | 7 maquettes click-through · portail municipal dédié |
| **N2** | **Coordination** | Orchestration des workflows, résolution des conflits, HITL | 10 agents AX5-CitaFlow + 500 agents AgenticX5 mobilisables |
| **N3** | **Intelligence** | ML prédictif, pattern detection, graphe de connaissances | Réseaux bayésiens + GNN sur Neo4j (< 50 ms) |
| **N4** | **Traitement** | ETL, harmonisation multi-juridictionnelle, data quality | Pipelines Apache Airflow + dbt + Great Expectations |
| **N5** | **Collecte** | APIs, capteurs, IoT, wearables, caméras, permis, incidents | 6 connecteurs (Catégorie A + B) + voix citoyenne |

---

## 4. Métadonnées PROV-O (traçabilité W3C)

Chaque décision produite par AX5-CitaFlow est **totalement traçable** selon la norme W3C PROV-O.

### 4.1 Triplets PROV-O générés

Pour chaque événement de sortie (ex. fermeture pré-annoncée à Waze CCP), le système produit :

| Triplet PROV-O | Exemple |
|---|---|
| `prov:wasGeneratedBy` | Fermeture_2026_001 a été générée par Agent_CauseClassifier |
| `prov:used` | Agent_CauseClassifier a utilisé {Permis AGIR #XYZ, CNESST Incident #ABC, 311 Requête #DEF} |
| `prov:wasDerivedFrom` | Fermeture_2026_001 dérive de Scénario PREDIAG-X5 #123 |
| `prov:wasAttributedTo` | Fermeture_2026_001 est attribuée à AX5-CitaFlow v1.2 |
| `prov:actedOnBehalfOf` | AX5-CitaFlow agit pour le compte de Ville de Montréal (Bureau des permis) |
| `prov:startedAtTime` / `prov:endedAtTime` | Timestamps ISO 8601 précis |

### 4.2 Stockage et interrogation

- Les triplets PROV-O sont stockés dans Neo4j (extension de SafetyGraph) avec un namespace dédié
- Les requêtes d'audit peuvent reconstituer la **chaîne causale complète** d'une décision
- Conformité avec la **Directive canadienne sur la prise de décisions automatisée** (ÉIA intégrée)
- Conservation : 7 ans minimum (aligné avec les exigences d'audit municipales)

### 4.3 Exemple d'audit

Question typique d'un auditeur : *« Pourquoi AX5-CitaFlow a-t-il recommandé de fermer Saint-Laurent le 15 juin 2026 de 07h à 18h ? »*

Réponse traçable automatiquement :

1. **Recommandation** : Fermeture_2026_001 générée à 2026-06-13T08:42:15-04:00
2. **Agent source** : Agent_CauseClassifier v1.2 (CauseClassifierAgent)
3. **Données d'entrée** :
   - Permis AGIR #12345 (réfection conduite pluviale, 12-25 juin)
   - SAAQ historique : 8 accidents piétons sur Saint-Laurent × Sainte-Catherine (2019-2024)
   - CNESST : 2 incidents construction secteur 236110 dans les 90 derniers jours
   - 311 : 23 requêtes citoyennes sur obstruction trottoir dans le quartier
4. **Simulation PREDIAG-X5** : Scénario #42 (3 options évaluées, fermeture coordonnée retenue)
5. **XAI** : SHAP values disponibles (facteur A1 Emprise = 0.32, facteur B2 Coactivité = 0.28, facteur A5 Accès commerces = 0.21)
6. **Seuil HITL** : validé par l'Agent_Teodoresco-Proxy à 2026-06-13T09:15:03-04:00
7. **Diffusion** : Waze CIFS à 2026-06-13T09:15:07-04:00 (latence 4 s)

---

## 5. Blueprint d'intégration — Défi #5 Laboratoire centre-ville

### 5.1 Vue synthétique

```
┌───────────────────────────────────────────────────────────────────────┐
│                   INTERFACES VILLE DE MONTRÉAL                        │
│  Portail permis · Tableaux voirie · Dashboard SPVM/SIM · montreal.ca  │
└──────────────────────────────────┬────────────────────────────────────┘
                                   │ API municipales + Open511
                                   ▼
┌───────────────────────────────────────────────────────────────────────┐
│                      AX5-CitaFlow · Noyau agentique                   │
│   10 agents dédiés + orchestration 500 agents AgenticX5 mobilisables  │
│   Pipeline ML/DL + PREDIAG-X5 + SafetyGraph Neo4j                     │
└────┬────────┬────────┬────────┬────────┬────────┬────────┬────────────┘
     │        │        │        │        │        │        │
     ▼        ▼        ▼        ▼        ▼        ▼        ▼
  [AGIR] [CNESST] [SAAQ] [Hydro] [311] [Vélo QC] [Caméras P0]
  Ville  Ouvertes Ouvertes Publiques MTL       IoT LoRaWAN
                                                            
                                        │
                                        ▼ sorties
  ┌──────┬──────────┬──────┬──────────┬──────────────┐
  │ Waze │ GTFS-RT  │ GBFS │ Open511  │ Portails MTL │
  │ CIFS │ (ARTM)   │(BIXI)│ (MTQ)    │              │
  └──────┴──────────┴──────┴──────────┴──────────────┘
```

### 5.2 Phases d'intégration

| Phase | Livrable technique | Validation |
|---|---|---|
| **Phase 0 · Mai 2026** | Blueprint d'architecture validé · environnements dev/staging/prod provisionnés · 4 connecteurs Catégorie A actifs · PREDIAG-X5 calibré sur 12 scénarios | Review architecture avec équipe technique Ville |
| **Préparation · 1-15 juin 2026** | Connecteurs Catégorie B déployés (caméras + compteurs) · pipeline E2E testé · dashboard municipal déployé | Tests d'acceptation utilisateur (UAT) avec Bureau des permis |
| **Déploiement · 16-30 juin 2026** | Pipeline en production · intégration Waze CCP active · rapports automatisés configurés | Go-live avec plan de rollback |
| **Opération · juillet-août 2026** | Métriques de production collectées · rapports bi-mensuels · ajustements continus | Comités de suivi bi-mensuels |
| **Bilan · septembre 2026** | Analyse comparative · transposition Alphaville · documentation complète · handover | Présentation au Comité exécutif Ville |

### 5.3 Interfaces avec les systèmes municipaux existants

| Système municipal | Type d'interface | Contrat de service |
|---|---|---|
| **AGIR** (permis) | API REST authentifiée ou accès batch quotidien | Accès lecture seule, aucune modification |
| **Infrastructure SPVM/SIM** | API CAD ou veille différée | À confirmer — plan B documenté |
| **SCG feux MTL** | Feed événementiel filtré (pas de contrôle) | À confirmer — accès sécurisé |
| **Portail montreal.ca** | Webhook + API bidirectionnelle | Contrat de publication automatisée |
| **Mobilité Montréal (MTQ)** | Open511 bidirectionnel | Standard québécois en production |

### 5.4 Continuité d'activité

- **SLA cible** : 99.5 % de disponibilité (temps d'arrêt < 44 h/an)
- **Plan de reprise** : basculement automatique sur région AWS Canada Central en cas d'incident OVHcloud Montréal
- **Sauvegarde** : snapshots quotidiens du graphe Neo4j + archives continues du data lake
- **Dégradation contrôlée** : si un connecteur Catégorie B tombe, le système bascule sur les données Catégorie A sans interruption de service

---

## 6. Sécurité et conformité

### 6.1 Cadre de conformité

| Exigence | Mise en œuvre technique |
|---|---|
| **Loi 25 Québec** | Anonymisation à la source · EFVP avant Phase 0 · pas de données nominatives collectées |
| **Directive canadienne sur la prise de décisions automatisée** | ÉIA documentée · traçabilité PROV-O complète · HITL systématique |
| **ISO/IEC 27001** | Alignement technique dès aujourd'hui · certification 2027 |
| **ISO 45001** | Alignement technique dès aujourd'hui · certification 2027 |
| **Énoncé de principes du MCN (déc. 2025)** | 10 principes appliqués à chaque agent AgenticX5 |
| **Déclaration de Montréal (2018)** | 10 principes encodés dans la charte éthique AgenticX5 |
| **Centre canadien pour la cybersécurité** | Fournisseurs cloud certifiés · chiffrement conforme aux standards fédéraux |

### 6.2 Cycle de vie des données sensibles

1. **Collecte** — aucune donnée nominative stockée, anonymisation à la source (caméras traitées localement)
2. **Traitement** — uniquement sur infrastructure canadienne (OVHcloud Montréal + AWS Canada Central)
3. **Modèles IA** — LLM open-source locaux (Llama, Mistral) pour les tâches impliquant des données sensibles
4. **Partage** — limité aux systèmes municipaux autorisés, aucun transfert hors juridiction canadienne
5. **Archivage** — 7 ans minimum (PROV-O pour audit) puis destruction sécurisée

---

## 7. Roadmap technique post-pilote

| Horizon | Évolution technique |
|---|---|
| **Q4 2026** | Réplication multi-tenant pour CMM · onboarding Laval + Longueuil + Brossard · monitoring fédéré |
| **Q1-Q2 2027** | Ouverture API publique pour partenaires corporatifs · certification ISO 27001 en cours · audit de sécurité externe |
| **Q3-Q4 2027** | Déploiement 100 % local (option) pour clients avec exigences de souveraineté strictes · intégration réseau IVÉO 75 villes |
| **2028** | Architecture internationale · localisation pour marchés européens et américains · fédération des instances par région |

---

**© 2026 Innoventera Inc. — Tous droits réservés.**
*Document, logiciels et œuvres associées protégés en vertu de la Loi sur le droit d'auteur du Canada (L.R.C. (1985), ch. C-42).*
*Ce document contient des informations techniques sensibles et ne doit être partagé qu'avec les parties ayant signé une entente de confidentialité (NDA) avec Innoventera Inc.*
