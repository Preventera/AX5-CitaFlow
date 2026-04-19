# 5 Questions pour le webinaire IVÉO Défi #5

**Date** : Lundi 21 avril 2026 · 10 h – 11 h
**Participant** : Mario Deshaies, VP AI / CTO, AgenticX5
**Objectif** : obtenir les clarifications techniques nécessaires pour finaliser la soumission du 1er mai, et se positionner comme soumissionnaire sérieux et avancé.

---

## Principes de prononciation

Avant de poser une question, chaque intervention devrait inclure **une phrase de positionnement** qui signale où nous en sommes. L'objectif est double : obtenir une réponse précise, et démontrer au courtier IVÉO que nous avons déjà investi du travail sérieux dans le projet.

**Formule type** :
> « Notre pipeline inclut déjà [composant technique]. Pour finaliser [sous-système], pouvez-vous clarifier [question précise] ? »

**Ce qu'il faut éviter** :
- Questions ouvertes qui signalent qu'on ne connaît pas le sujet (« Comment ça marche Waze ? »)
- Questions qui demandent à IVÉO de faire le travail qu'on devrait avoir fait (« Quelles données sont disponibles ? »)
- Empilement de sous-questions dans une seule intervention

**Ce qu'il faut faire** :
- Une question = un sujet = une intervention
- Montrer qu'on connaît l'écosystème technique
- Laisser de la place à d'autres soumissionnaires (ne pas monopoliser le temps)

---

## Les 5 questions — par ordre de priorité stratégique

### Question 1 — **Accès API CAD SPVM / SIM pour le pilote**

**Priorité** : 🔴 Critique (bloque l'un des 6 connecteurs du pipeline)

**Formulation suggérée** :

> « Notre pipeline UrbanIA a déjà un connecteur services d'urgence en mode mock aligné sur le périmètre du Laboratoire centre-ville. Pour le déploiement pilote de juin à septembre, pouvez-vous confirmer si un accès API CAD du SPVM et du SIM sera disponible — et selon quelles modalités : feed temps réel, échantillonnage périodique, ou webhook ? »

**Pourquoi cette question d'abord** :
- La cause #5 du Défi (services d'urgence) est la **plus sensible politiquement** — accès policier, confidentialité
- La réponse détermine si on propose un pilote avec **données réelles** ou **données simulées** dans le one-pager du 1er mai
- Positionne AgenticX5 comme déjà conscient des enjeux opérationnels (CAD = Computer-Aided Dispatch, jargon technique qui démontre la connaissance)

**Ce qu'on espère entendre** :
- Un délai de provisionnement réaliste (semaines ou mois)
- La personne-contact côté SPVM/SIM pour initier les démarches
- Un modèle d'accès (anonymisation, agrégation, fréquence)

**Réponse de repli si IVÉO ne sait pas** :
- Rebondir : « Pouvez-vous nous mettre en contact avec le responsable technique côté Ville qui saurait répondre ? »

---

### Question 2 — **Format de sortie attendu pour les plateformes de mobilité**

**Priorité** : 🔴 Critique (détermine nos adapters de sortie)

**Formulation suggérée** :

> « Le libellé du Défi #5 mentionne la mise à jour des plateformes de planification des déplacements. Notre système génère déjà des sorties au format Waze CIFS (XML/JSON pour le Connected Citizens Program) et GTFS-RT pour le transport en commun. Quels formats la Ville privilégie-t-elle côté consommateurs finaux — Waze CIFS, GTFS-RT, Apple Maps, ou un format JSON custom pour un agrégateur municipal ? »

**Pourquoi cette question** :
- Démontre qu'on maîtrise les **standards réels** (CIFS = Closure and Incident Feed Specification, GTFS-RT = GTFS Real-Time)
- Différencie AgenticX5 des soumissionnaires qui proposeraient juste « un dashboard »
- Oriente l'architecture des `output adapters` qu'on a déjà dans le code

**Contexte technique (pour toi, pas à dire)** :
- **Waze CIFS** : standard officiel pour pousser fermetures et incidents dans Waze, via XML ou JSON
- **GTFS-RT** : standard Google pour temps réel transport en commun
- **Waze for Cities** : ancien nom du CCP, toujours utilisé dans certains docs
- Montréal est probablement déjà partenaire Waze CCP (à valider dans la réponse)

**Ce qu'on espère entendre** :
- Confirmation que la Ville est déjà partenaire Waze CCP (ou intention d'y adhérer)
- Liste des plateformes consommatrices prioritaires
- Un endpoint ou schéma cible documenté

---

### Question 3 — **Endpoint API Hydro-Québec pannes temps réel**

**Priorité** : 🟡 Importante (un connecteur déjà codé en mock, à confirmer en réel)

**Formulation suggérée** :

> « Nous avons déjà un connecteur Hydro-Québec basé sur la carte publique des pannes d'info-pannes.hydroquebec.com. Pouvez-vous confirmer s'il existe un endpoint API structuré — REST, GraphQL ou autre — qu'Hydro-Québec expose aux partenaires municipaux, ou si nous devons rester sur le scraping de la carte publique ? »

**Pourquoi cette question** :
- La cause #4 (pannes électriques) est souvent la plus simple à connecter mais la moins documentée publiquement
- Démontre qu'on a **déjà regardé** avant de demander (scraping info-pannes = preuve qu'on a cherché)
- Scrape web = solution dégradée qu'on veut éviter en production

**Contexte technique** :
- Hydro-Québec a une carte publique, mais **pas d'API publique documentée** à ma connaissance
- Des accès partenaires existent peut-être pour les municipalités, mais ne sont pas publics
- Alternative : un partenariat Ville × Hydro pourrait débloquer un accès

**Ce qu'on espère entendre** :
- Un accès API partenaire existe via un accord Ville × Hydro
- La Ville peut initier cette demande
- À défaut, une fréquence de scraping acceptable pour le pilote

---

### Question 4 — **Disponibilité API SCG (feux de circulation Montréal)**

**Priorité** : 🟡 Importante (cause #6, souvent sous-estimée)

**Formulation suggérée** :

> « Notre connecteur feux de circulation utilise pour l'instant l'inventaire public géomatique de la Ville. Pour détecter les anomalies temps réel (feux en panne, cycles déréglés), avons-nous accès au Système Centralisé de Gestion — SCG — et si oui sous quel format : MQTT, API REST, CSV polled, autre ? »

**Pourquoi cette question** :
- La cause #6 (problèmes de feux) est **techniquement la plus difficile** — les systèmes SCG sont propriétaires, souvent en SCADA
- Démontre qu'on connaît la différence entre l'inventaire statique (disponible) et le flux dynamique (rarement exposé)
- Si SCG inaccessible, on peut proposer un modèle inférentiel (patterns de trafic qui suggèrent un feu défectueux)

**Contexte technique** :
- **SCG** = Système Centralisé de Gestion des feux — terme interne municipal
- Les systèmes de feux utilisent souvent des protocoles SCADA (Modbus, NTCIP) pas des APIs web
- Un accès direct SCADA n'est **jamais** accordé à un soumissionnaire externe pour raisons de cybersécurité

**Ce qu'on espère entendre** :
- Un feed filtré (événements seulement, pas le contrôle) existe
- La Ville peut le rendre disponible pour le pilote
- À défaut, un accès aux journaux d'événements en différé (batch quotidien)

---

### Question 5 — **Protocole des flux caméras de circulation**

**Priorité** : 🟢 Bonne à avoir (cause #2 accidents, source supplémentaire)

**Formulation suggérée** :

> « Pour le sous-système détection d'accidents par vision, nous pouvons nous intégrer à ONVIF, RTSP ou à un protocole propriétaire. Les caméras du périmètre Laboratoire centre-ville exposent-elles un flux standard que les partenaires peuvent consommer, ou s'agit-il uniquement d'un accès via l'interface AGIR ? »

**Pourquoi cette question (en dernier)** :
- La détection d'accident par vision est **secondaire** dans notre pipeline (on peut s'en passer pour un pilote)
- Mais c'est un différenciateur si on peut le démontrer pendant le pitch jury
- Démontre qu'on connaît les standards industriels (ONVIF = Open Network Video Interface Forum, RTSP = Real-Time Streaming Protocol)

**Contexte technique** :
- **ONVIF** : standard ouvert pour caméras IP (métadonnées + flux)
- **RTSP** : protocole de streaming bas niveau (juste le flux vidéo)
- **AGIR** : interface municipale existante pour consulter les caméras — mais probablement pas un flux programmatique

**Ce qu'on espère entendre** :
- Accès flux RTSP direct existe pour les partenaires (peu probable)
- Une intégration AGIR programmatique est possible
- À défaut : acquisition des flux par Ville puis relais

**Si temps limité, cette question peut être sacrifiée** au profit des 4 premières ou reportée par email post-webinaire.

---

## Notes tactiques pour le jour J

### Avant le webinaire (lundi 9 h 45)

- [ ] Ouvrir le document `AX5-CitaFlow_Personas_Complets_v1.md` dans un onglet séparé (référence au cas où)
- [ ] Ouvrir le repo GitHub `AX5-CitaFlow` dans un onglet séparé (preuve de maturité)
- [ ] Avoir sur papier ou dans un bloc-notes les **3 premières questions prioritaires** (si stress, lire mot à mot)
- [ ] Préparer une brève auto-introduction (15 secondes max) :

> « Bonjour, Mario Deshaies, fondateur d'AgenticX5 à Montréal. Nous avons déjà une plateforme agentique opérationnelle pour la gestion des chantiers et de la congestion urbaine, et j'ai quelques questions techniques précises pour finaliser notre proposition. »

### Pendant le webinaire

- [ ] **Ne pas** dévoiler notre différenciateur (prédiction 24-72 h CNESST × SAAQ)
- [ ] **Ne pas** partager les détails de l'architecture
- [ ] Prendre des notes précises sur chaque réponse
- [ ] Si une question est posée par un autre soumissionnaire, **noter la question + la réponse** (gratuit)
- [ ] Si deux de nos questions deviennent redondantes avec d'autres, **sacrifier** la moins prioritaire

### Après le webinaire (lundi 11 h – 12 h)

- [ ] **Dans les 30 minutes suivantes** : noter toutes les réponses obtenues pendant qu'elles sont fraîches
- [ ] Identifier les questions non répondues ou partiellement répondues
- [ ] Préparer un **email de suivi** à IVÉO (Alexandre Teodoresco ou contact technique) avec les questions de clarification résiduelles
- [ ] Mettre à jour la roadmap technique en fonction des réponses

---

## Questions de repli si temps disponible

Si tu as du temps à la fin du webinaire et que tes 5 questions principales sont couvertes, voici 3 questions secondaires à garder en réserve :

**Question bonus A — Périmètre géographique exact**
> « Le périmètre Laboratoire centre-ville est décrit comme Saint-Laurent, de la Commune, Guy, Sherbrooke — 3,7 km². La Ville envisage-t-elle d'étendre ce périmètre pendant la phase pilote de juin à septembre, ou le gel est-il strict ? »

**Question bonus B — Modèle de propriété des données**
> « Les données collectées et générées par la solution pilote appartiennent à qui : la Ville, IVÉO, ou le soumissionnaire pendant la durée du pilote ? Cela impacte notre modèle de traçabilité PROV-O et nos adapters de sortie. »

**Question bonus C — Continuité post-pilote**
> « Si le pilote démontre son impact, quelle est la voie de contractualisation post-septembre : appel d'offres classique, prolongation directe, ou intégration au budget récurrent municipal ? »

---

## Ce que le webinaire devrait nous donner

À la fin de la séance (11 h), nous devrions avoir :

1. ✅ Une idée claire des **accès API disponibles** (SPVM/SIM, Hydro, SCG)
2. ✅ Le **format de sortie** attendu par la Ville (Waze CIFS probable)
3. ✅ Un ou plusieurs **points de contact** techniques côté Ville (au-delà d'IVÉO qui est intermédiaire)
4. ✅ Une meilleure idée de la **concurrence** (qui d'autre pose des questions, sur quels sujets)
5. ✅ Des **quick wins** à mentionner dans le one-pager du 1er mai

---

## Scénario de repli : webinaire décevant

Si le webinaire est trop général, ou si IVÉO ne peut pas répondre aux questions techniques précises, la stratégie est :

1. **Ne pas insister** pendant le webinaire (préserver la relation)
2. **Envoyer dans l'après-midi un email structuré** à IVÉO listant les 5 questions techniques
3. **Mentionner dans la soumission du 1er mai** que nous avons tenté d'obtenir ces clarifications
4. **Proposer un pilote en mode hybride** : données réelles quand elles sont accessibles, données simulées ailleurs, avec une roadmap de bascule

---

*Document préparé le 18 avril 2026 — en vue du webinaire IVÉO du 21 avril 10 h.*
*Les références techniques (Waze CIFS, GTFS-RT, ONVIF, RTSP) ont été vérifiées sur sources officielles (Google Waze Partners, developers.google.com, support.esri.com).*
