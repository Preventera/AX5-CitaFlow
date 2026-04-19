# AX5-CitaFlow · Annexe données — Périmètre Laboratoire centre-ville

**Document complémentaire au one-pager IVÉO Défi #5**
**Version** : 1.1 · 19 avril 2026 *(ajout §9 Scénarios PREDIAG-X5)*
**Soumissionnaire** : Innoventera Inc. — AgenticX5

---

## Objet du document

Cette annexe détaille les **schémas de données** et **flux d'intégration** que AX5-CitaFlow consomme et produit sur le périmètre spécifique du **Laboratoire centre-ville** (3,7 km² délimité par Saint-Laurent, de la Commune, Guy, Sherbrooke).

Elle répond à trois questions que le jury IVÉO peut légitimement poser :

1. **Quelles données sont disponibles aujourd'hui** sur ce périmètre ?
2. **À quoi ressemblent concrètement les données** que notre pipeline consomme et produit ?
3. **Comment s'articulent les sources** et les sorties dans l'architecture agentique ?

Les exemples de payloads ci-dessous sont **représentatifs** : ils sont construits à partir de données publiques réelles du périmètre mais anonymisés et simplifiés pour la lisibilité. Les schémas complets et les spécifications d'API sont disponibles sur demande sous entente de confidentialité.

---

## 1. Cartographie du périmètre Laboratoire centre-ville

### 1.1 Délimitation et caractéristiques

| Dimension | Valeur |
|---|---|
| **Superficie** | 3,7 km² |
| **Limites** | Nord : Sherbrooke · Sud : de la Commune · Est : Saint-Laurent · Ouest : Guy |
| **Arrondissement** | Ville-Marie (centre-ville de Montréal) |
| **Population résidente estimée** | ~50 000 habitants |
| **Flux quotidien estimé** | 200 000+ usagers (travailleurs, visiteurs, touristes) |
| **Stations BIXI dans le périmètre** | Environ 35 stations |
| **Stations de métro** | 8 stations (lignes verte et orange) |
| **Grands axes de circulation** | Saint-Laurent · Sainte-Catherine · René-Lévesque · Université · Peel · Crescent |

### 1.2 Intersections critiques identifiées (exemples)

Les intersections suivantes sont classées **critiques** pour notre pipeline en raison de la densité de flux et de l'historique d'incidents :

1. Saint-Laurent × Sainte-Catherine
2. Saint-Laurent × René-Lévesque
3. Université × Sainte-Catherine
4. Peel × Sherbrooke
5. Guy × Sherbrooke
6. Crescent × Sainte-Catherine

Ces intersections servent de **points d'ancrage** pour l'instrumentation Phase 0 (caméras + compteurs IoT).

---

## 2. Catégorie A — Données ouvertes consommées

### 2.1 Permis AGIR (Ville de Montréal)

**Source** : `donnees.montreal.ca/dataset/travaux-publics-agir` (ou API interne AGIR selon confirmation webinaire IVÉO)
**Fréquence** : mise à jour quotidienne (données publiques) ou temps réel (API interne)
**Volumétrie sur périmètre** : estimation 150 à 300 permis actifs simultanément

**Exemple de payload simplifié** :

```json
{
  "permis_id": "AGIR-2026-XXXXX",
  "adresse": "Saint-Laurent entre Sainte-Catherine et de la Gauchetière",
  "geom": {
    "type": "LineString",
    "coordinates": [[-73.568, 45.506], [-73.566, 45.508]]
  },
  "date_debut": "2026-06-12",
  "date_fin": "2026-06-25",
  "horaires": "lun-ven 07h-18h",
  "type_travaux": "réfection conduite pluviale",
  "emprise": "voie droite + trottoir sud",
  "entrepreneur": "XXX Construction Inc.",
  "maitre_oeuvre": "Service de l'eau de Montréal",
  "coactivite_connue": false,
  "statut": "émis"
}
```

**Champs consommés par AX5-CitaFlow** : `geom`, `date_debut`, `date_fin`, `horaires`, `emprise`, `type_travaux`, `entrepreneur`.

### 2.2 Données ouvertes SAAQ — accidents

**Source** : `saaq.gouv.qc.ca/donnees-ouvertes/` · fichier annuel des rapports d'accidents
**Fréquence** : mise à jour annuelle (historique complet) · batch pour le pilote
**Volumétrie sur périmètre** : estimation 1 500 à 2 500 accidents par an dans la zone centre-ville

**Exemple de payload simplifié** :

```json
{
  "accident_id": "2024-XXXXX",
  "date": "2024-08-15",
  "heure": "17:32",
  "localisation": "intersection Saint-Laurent / Sainte-Catherine",
  "geom": {"type": "Point", "coordinates": [-73.568, 45.509]},
  "categorie": "collision avec piéton",
  "gravite": "avec blessures légères",
  "nb_vehicules": 1,
  "vulnerable": "piéton",
  "condition_route": "sèche",
  "eclairage": "jour",
  "zone_travaux": true
}
```

**Champs consommés par AX5-CitaFlow** : `geom`, `categorie`, `gravite`, `vulnerable`, `zone_travaux`. Le champ `zone_travaux = true` est central pour le facteur **A5** (accès commerces/urgences) et **B2** (accidents travail).

### 2.3 CNESST — lésions professionnelles

**Source** : intégration SafetyGraph Neo4j (~300 K+ lésions historiques, 22 M+ nœuds au total)
**Fréquence** : synchronisation mensuelle
**Volumétrie pertinente pour le pilote** : lésions secteur construction (SCIAN 23) géolocalisées sur le périmètre CMM

**Exemple de payload simplifié** :

```json
{
  "lesion_id": "CNESST-2024-XXXXX",
  "date": "2024-07-22",
  "secteur_scian": "236110",
  "nature": "Construction de bâtiments résidentiels",
  "type_lesion": "traumatisme",
  "gravite": "arrêt travail > 14 jours",
  "chantier_proximite_geom": null,
  "jours_arret_estimes": 45
}
```

**Champs consommés** : corrélation temporelle et sectorielle avec les permis AGIR actifs dans le périmètre. C'est ce croisement qui révèle la **famille B** des facteurs organiques — la clé du différenciateur AX5-CitaFlow.

### 2.4 Pannes Hydro-Québec

**Source** : `info-pannes.hydroquebec.com` (carte publique) · API partenaire à négocier
**Fréquence** : mise à jour toutes les 5 minutes (scraping) ou temps réel (API partenaire)
**Volumétrie sur périmètre** : 0 à 15 événements par jour selon saison

**Exemple de payload simplifié** :

```json
{
  "panne_id": "HQ-2026-XXXXXXX",
  "debut": "2026-06-18T14:23:00-04:00",
  "duree_estimee_min": 90,
  "zone_affectee_geom": {"type": "Polygon", "coordinates": [...]},
  "nb_clients": 423,
  "cause": "équipement défectueux",
  "statut": "en cours",
  "feux_circulation_impactes": ["Saint-Laurent/René-Lévesque", "Saint-Laurent/Ontario"]
}
```

**Champs consommés** : `zone_affectee_geom` et `feux_circulation_impactes` pour déclencher la cause #4 (cascade feux → congestion).

### 2.5 Vélo Québec — comptages et infrastructure

**Source** : `velo.qc.ca` (données ouvertes) + partenariat direct institutionnel
**Fréquence** : données annuelles (État du vélo au Québec) + temps réel (si partenariat)
**Volumétrie sur périmètre** : 15 à 20 corridors cyclables recensés

**Exemple de payload simplifié** :

```json
{
  "corridor_id": "VQ-MTL-XXX",
  "nom": "Piste cyclable Saint-Laurent",
  "geom": {"type": "LineString", "coordinates": [...]},
  "volume_journalier_moyen": 1823,
  "peak_saison": "juin-septembre",
  "type_protection": "bidirectionnelle séparée",
  "accidents_5ans": 12,
  "taux_incident_pour_10000": 0.18
}
```

**Champs consommés** : `volume_journalier_moyen` et `accidents_5ans` pour le facteur **A4** (flux vulnérables) et le bénéfice piétons/cyclistes.

---

## 3. Catégorie B — Sources terrain à instrumenter en Phase 0

### 3.1 Caméras de circulation (ONVIF / RTSP)

**Statut** : volumétrie et accès à confirmer au webinaire IVÉO du 21 avril.

**Approche proposée** :

| Aspect | Détail |
|---|---|
| Nombre visé | 6 à 10 caméras sur les intersections critiques (voir §1.2) |
| Protocoles cibles | ONVIF Profile S (streaming) et RTSP (flux brut) |
| Traitement | Détection d'objets par vision par ordinateur · comptage de véhicules/piétons/vélos · détection d'incidents |
| Anonymisation | Traitement local sans stockage d'images identifiables (EFVP Loi 25) |
| Fréquence de publication | Métriques agrégées toutes les 60 secondes |

**Exemple de métrique agrégée publiée** :

```json
{
  "camera_id": "CAM-STLAURENT-001",
  "intersection": "Saint-Laurent / Sainte-Catherine",
  "geom": {"type": "Point", "coordinates": [-73.568, 45.509]},
  "timestamp": "2026-06-18T09:15:00-04:00",
  "fenetre_seconds": 60,
  "flux": {
    "vehicules_NS": 42,
    "vehicules_SN": 38,
    "pietons": 127,
    "cyclistes": 14
  },
  "incidents_detectes": [],
  "confiance_moyenne": 0.91
}
```

### 3.2 Compteurs piétons-vélos IoT (LoRaWAN / MQTT)

**Statut** : à déployer en Phase 0.

**Approche proposée** :

| Aspect | Détail |
|---|---|
| Nombre visé | 12 à 16 compteurs sur corridors cyclables et accès BIXI |
| Technologie | Capteurs infrarouges passifs + LoRaWAN (faible consommation) |
| Fréquence de transmission | MQTT toutes les 5 minutes |
| Durée de vie | Batterie 3-5 ans, maintenance annuelle |

**Exemple de payload** :

```json
{
  "compteur_id": "PV-SHERBROOKE-003",
  "localisation": "Sherbrooke au coin de Peel",
  "timestamp": "2026-06-18T09:15:00-04:00",
  "fenetre_minutes": 5,
  "pietons_O_E": 23,
  "pietons_E_O": 19,
  "cyclistes_O_E": 8,
  "cyclistes_E_O": 6,
  "batterie_pct": 87
}
```

### 3.3 API CAD SPVM / SIM (à confirmer)

**Statut** : accès à confirmer au webinaire IVÉO.

**Approche de repli** (si accès refusé) :
- Alertes publiques via Twitter/X @SPVM et @SIM_Mtl
- Notifications officielles de la Ville
- Latence dégradée (~15 min au lieu de temps réel)

### 3.4 Système Centralisé de Gestion des feux (SCG)

**Statut** : accès à confirmer au webinaire IVÉO.

**Approche de repli** : inventaire géomatique public des feux + détection indirecte par patterns de circulation anormaux (caméras + compteurs).

---

## 4. Sorties — 4 écosystèmes cibles

### 4.1 Waze Connected Citizens Program (CCP)

**Format** : Waze CIFS (Closure and Incident Feed Specification) — XML ou JSON
**Fréquence** : temps réel (latence cible < 10 secondes)

**Exemple de payload sortant** :

```xml
<incidents>
  <incident id="AX5-2026-001" type="ROAD_CLOSED">
    <location>
      <street>Saint-Laurent</street>
      <cross_street>Sainte-Catherine</cross_street>
      <direction>NORTH</direction>
    </location>
    <description>Travaux de réfection conduite pluviale — voie droite fermée</description>
    <start_time>2026-06-12T07:00:00-04:00</start_time>
    <end_time>2026-06-25T18:00:00-04:00</end_time>
    <source>Ville de Montréal · AX5-CitaFlow</source>
  </incident>
</incidents>
```

### 4.2 GTFS-RT (transport collectif ARTM)

**Format** : GTFS Realtime (Google Transit Feed Specification Real-Time)
**Cible** : Transit, Chrono, Moovit, Google Maps Transit
**Usage** : alertes de service pour les lignes impactées par fermetures routières

### 4.3 GBFS (mobilité active)

**Format** : GBFS (General Bikeshare Feed Specification)
**Cible** : BIXI, Transit multimodal
**Usage** : signalement des stations BIXI inaccessibles en raison de travaux

### 4.4 Portails municipaux

**Format** : Open511 (standard québécois) + formats internes MTL
**Cible** : `montreal.ca/info-entraves`, Mobilité Montréal (MTQ), interface AGIR
**Usage** : mise à jour des fermetures officielles et des plans de déviation

---

## 5. Matrice couverture — intersections × catégories de sources

| Intersection | Permis AGIR | SAAQ historique | CNESST | Hydro-Québec | Vélo Québec | Caméra (P0) | Compteur (P0) |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Saint-Laurent × Sainte-Catherine | ✅ | ✅ | ✅ | ✅ | — | 🔶 | 🔶 |
| Saint-Laurent × René-Lévesque | ✅ | ✅ | ✅ | ✅ | — | 🔶 | — |
| Université × Sainte-Catherine | ✅ | ✅ | ✅ | ✅ | ✅ | 🔶 | 🔶 |
| Peel × Sherbrooke | ✅ | ✅ | ✅ | ✅ | ✅ | 🔶 | 🔶 |
| Guy × Sherbrooke | ✅ | ✅ | ✅ | ✅ | ✅ | 🔶 | 🔶 |
| Crescent × Sainte-Catherine | ✅ | ✅ | ✅ | ✅ | — | — | 🔶 |

**Légende** : ✅ = disponible immédiatement · 🔶 = à instrumenter Phase 0 · — = non pertinent

---

## 6. Flux de données — vue synthétique

```
[Catégorie A · consommée]                [Catégorie B · instrumentée Phase 0]
   │                                        │
   ├─ Permis AGIR ───────────────┐          ├─ Caméras ONVIF/RTSP ────┐
   ├─ SAAQ accidents ────────────┤          ├─ Compteurs IoT LoRaWAN ─┤
   ├─ CNESST SafetyGraph ────────┤          ├─ API CAD SPVM/SIM ──────┤
   ├─ Hydro-Québec pannes ───────┤          └─ SCG feux MTL ──────────┤
   ├─ Vélo Québec ───────────────┤                                    │
   └─ Environnement Canada ──────┤                                    │
                                 │                                    │
                                 ▼                                    ▼
                   ╔══════════════════════════════════════════════════════╗
                   ║          AX5-CitaFlow · pipeline agentique           ║
                   ║  (6 connecteurs · 14 facteurs · PREDIAG-X5)          ║
                   ╚══════════════════════════════════════════════════════╝
                                                │
                    ┌──────────────┬────────────┼────────────┬──────────────┐
                    ▼              ▼            ▼            ▼              ▼
              [Waze CIFS]    [GTFS-RT]    [GBFS]       [Open511]    [Portails MTL]
              < 10 s         < 60 s       < 60 s       < 60 s       < 60 s
```

---

## 7. Engagements en matière de données

**Anonymisation à la source** : aucune donnée identifiable n'est conservée. Les images des caméras sont traitées localement, seules les métriques agrégées sont transmises.

**Hébergement souverain** : toutes les données sont hébergées au Québec et au Canada, sans transfert hors juridiction canadienne.

**EFVP (Loi 25)** : une Évaluation des facteurs relatifs à la vie privée sera menée avant le déploiement pilote de juin 2026, couvrant l'ensemble des flux décrits dans cette annexe.

**Traçabilité PROV-O** : chaque transformation de donnée est traçable selon la norme W3C PROV-O, permettant un audit complet de la chaîne décisionnelle.

---

## 8. Points à valider au webinaire IVÉO (21 avril)

| # | Question | Impact sur cette annexe |
|---|---|---|
| 1 | Accès API CAD SPVM/SIM | Confirme ou non la section §3.3 |
| 2 | Format de sortie prioritaire (CIFS, GTFS-RT, etc.) | Priorise la section §4 |
| 3 | Plateformes cibles privilégiées par la Ville | Ajuste les cibles §4 |
| 4 | Endpoint Hydro-Québec | Confirme ou non §2.4 |
| 5 | Accès SCG feux | Confirme ou non §3.4 |
| 6 | Protocole caméras MTL | Précise §3.1 |

Les réponses obtenues lors du webinaire seront intégrées dans la version 2.0 de cette annexe avant la soumission finale du 1er mai 2026.

---

## 9. Scénarios PREDIAG-X5 — simulation émergente et transposition Alphaville

Cette section détaille le scénario prototypé dans PREDIAG-X5 pour démontrer les capacités de simulation multi-agents et de transposition Alphaville. Elle illustre concrètement comment une situation urbaine à multiples parties prenantes est convertie en recommandation actionnable, puis normalisée pour les 75 villes du réseau IVÉO.

### 9.1 Scénario prototypé — bris de conduite Saint-Laurent × coactivité grue tour

| Dimension | Détail |
|---|---|
| **Contexte simulé** | Bris de conduite pluviale sur Saint-Laurent entre de la Gauchetière et Sainte-Catherine, simultané à l'érection d'une grue tour pour un chantier de tour résidentielle à 200 m |
| **Périmètre géographique** | Saint-Laurent entre de la Gauchetière et Sainte-Catherine + périmètre chantier voisin (rayon 300 m) |
| **Parties prenantes modélisées (11)** | Ville (voirie, permis, communication) · résidents du secteur · commerçants corridor Sainte-Catherine · commerçants Saint-Laurent · SPVM · SIM · Urgences-santé · livreurs commerciaux · BIXI (2 stations impactées) · usagers Waze · piétons/cyclistes réguliers |
| **Entrées PREDIAG-X5** | 14 facteurs synergiques (A1-A7 + B1-B7) · historique SAAQ sur le périmètre (2019-2024) · incidents CNESST secteur construction récents · calendrier événementiel MTL (3 mois roulants) · météo prévue 7 jours · activité réseaux sociaux quartier |
| **Sorties générées** | Probabilités par scénario décisionnel (statu quo vs fermeture coordonnée vs rerouting partiel vs report travaux) · recommandation d'action avec XAI · seuil HITL déclenché automatiquement · plan de communication multi-canaux pré-rédigé · matrice de risques par partie prenante |
| **Valeur pour la Ville** | Temps de décision du Bureau des permis réduit de jours à minutes · anticipation des appels citoyens 311 · coordination préemptive SPVM/SIM/voirie · réduction des plaintes a posteriori |

### 9.2 Cheminement de transposition Alphaville

La sortie du scénario Montréal est ensuite **normalisée vers la ville étalon IVÉO Alphaville** (20 000 habitants, 65 km²) pour permettre aux autres villes du réseau d'évaluer la transposabilité.

| Étape | Traitement PREDIAG-X5 | Technologie mobilisée |
|---|---|---|
| 1. Extraction | Récupération des métriques d'impact brut du scénario Montréal | Pipeline ETL AgenticX5 |
| 2. Normalisation démographique | Réduction à l'échelle 20 K habitants | Modèles de scaling bayésiens |
| 3. Normalisation géographique | Réduction à l'échelle 65 km² | Pondération par densité d'intersections |
| 4. Normalisation sectorielle | Ajustement au profil SCIAN moyen Alphaville | Appariement sectoriel ML |
| 5. Simulation contrefactuelle | Rejouer le scénario dans Alphaville simulée | Multi-agents + Monte Carlo |
| 6. Export IVÉO | Rapport standardisé réseau IVÉO | Format IVÉO Alphaville |

Cette chaîne de normalisation permet aux villes membres IVÉO (ex : Shawinigan, Saguenay, Sherbrooke, Drummondville) de **projeter les gains attendus** sur leur propre territoire à partir des résultats mesurés à Montréal, sans avoir à refaire le pilote.

### 9.3 Scénarios additionnels cadrés pour modélisation en Phase 0

11 scénarios additionnels sont cadrés et prêts pour modélisation complète en Phase 0 (mai 2026) :

1. Coactivité 3 chantiers simultanés en zone touristique Vieux-Montréal
2. Panne électrique Hydro-Québec impactant 12 intersections + chantier actif
3. Accident SST majeur (chute de grue) en zone scolaire
4. Cascade saisonnière (dégel + nids-de-poule + réfections multiples)
5. Coactivité chantier × événement majeur (Grand Prix, festival)
6. Fermeture d'urgence bris de conduite gaz × coactivité SPVM
7. Conflit syndical entrepreneur × retard cascade 5 chantiers
8. Archéologie imprévue × impact transport collectif STM
9. Intervention SIM zone confinée × coactivité mobilité active
10. Dépassement cumulé d'échéancier × zone électorale sensible
11. Événement climatique extrême (tempête) × chantiers en hauteur

*Structure détaillée de chaque scénario disponible sur demande NDA. Les 12 scénarios (prototypé + cadrés) constituent la base de tests de la Phase 0 du pilote.*

---

**© 2026 Innoventera Inc. — Tous droits réservés.**
*Document, logiciels et œuvres associées protégés en vertu de la Loi sur le droit d'auteur du Canada (L.R.C. (1985), ch. C-42).*
*Exemples de payloads construits à partir de données publiques réelles du périmètre, simplifiés pour la lisibilité. Les schémas complets et les spécifications d'API sont disponibles sur demande sous entente de confidentialité (NDA).*
