/**
 * CityFlow-X5 · seeds-data.js
 * Données centralisées des seeds de simulation
 * Version : V1.3 multi-seed enrichi (V2.0 + V2.1 + V2.3) · 18 mai 2026
 * Éditeur : AgenticX5
 */

const SEEDS_DATA = {

  /* ========================================================================
   * SEED A01 — Détection coactivité défaillante
   * ======================================================================== */
  "A01": {
    id: "CITYFLOW-MTL-A01",
    shortId: "CITYFLOW-MTL-001",
    category: "A",
    categoryLabel: "Coactivité chantiers",

    // Identification
    title: "Détection coactivité défaillante",
    subtitle: "Cartographier les chantiers qui se chevauchent sans coordination",
    pilote: "Ville métropolitaine type",

    // Paramètres simulation
    horizon: 180,
    archetypes: 15,
    simulations: 10000,
    confidenceInterval: 95,
    generatedDate: "5 mai 2026",

    // KPIs principaux
    metric: {
      label: "Adoption générale du système",
      baseline: 61,
      target: 75,
      withLevers: 85,
      icLow: 53,
      icHigh: 69
    },

    // Composition
    resistance: 61,
    champions: 4,
    structuralRefusers: 3,

    // === NOUVEAUX CHAMPS V2.1 + V2.3 ===
    resistanceLabel: "Élevée · Actionnable avec intervention",
    predictionLabel: "Adoption prédite J+180",
    icLabel: "IC 95% : 53-69% · Cible 75% non atteinte sans intervention",
    icContext: "Sans levier activé",
    championsList: "Coordinateur Engagé · Inspecteur Terrain · Champion Conformité · Facilitateur",
    championsAction: "Activables J+0",
    refusersList: "Délinquant Chronique · Réticent · Décideur prudent",
    refusersStrategy: "Stratégie : découplage",
    blueprintLabel: "Étape 03 « Détection coactivité défaillante »",
    curveNarrative: `La simulation CityFlow-X5 <strong>#CITYFLOW-MTL-001</strong> prédit une adoption de <strong>61% à J+180</strong> post-déploiement, <strong>14 points en dessous de la cible municipale de 75%</strong>. La résistance globale initiale de <strong>61/100 est élevée mais actionnable</strong> — elle n'est pas idéologique dans sa majorité, mais structurée autour de trois signaux spécifiques : <strong>la mémoire collective d'incidents de chantiers médiatisés</strong> (collision piéton-camion avec décès), <strong>la résistance des entrepreneurs réticents à la transparence déclarative</strong>, et <strong>l'incertitude saisonnière</strong> (déploiement printemps → hiver complexifie l'adoption terrain).<br><br>L'adoption se déroule en <strong>trois vagues</strong> : les <strong>Coordinateurs Engagés et Champions Conformité</strong> adoptent dès J+0-J+14 (vague 1), <strong>ralenti autour de J+60 par un signal contextuel d'accident médiatisé</strong>. Les <strong>Pragmatiques et Inspecteurs</strong> basculent après les 90 premiers jours si le déploiement démontre sa stabilité (vague 2). Les <strong>Sentinelles DPO et Réticents entrepreneurs</strong> adoptent en vague 3 entre J+120 et J+180, à condition que les conditions de transparence et conformité Loi 25 soient documentées. Le <strong>Délinquant Chronique et le Décideur prudent</strong> ne basculeront pas — la stratégie optimale est l'escalade contractuelle, pas la conversion.<br><br><strong>Action prioritaire J+0 à J+30 :</strong> activer dès maintenant les 4 leviers d'intervention (anticipation médiatique des accidents, négociation incitative entrepreneurs, onboarding ultra-léger pour les coordinateurs surchargés, gouvernance visible Loi 25). Avec les 4 leviers pleinement activés, la simulation projette <strong>85% d'adoption à J+180</strong>, au-dessus de la cible municipale.`,
    graphWarning: `<strong>Signal critique CityFlow-X5 :</strong> Le <em>Délinquant Chronique</em> (score 92, R = 1) et le <em>Réticent</em> (score 72, R = 3) convergent entre J+30 et J+60 autour du <strong>récit "trop de paperasse, la Ville n'a qu'à venir voir"</strong>. Le <em>Décideur Politique</em> (R = 6, le plus élevé du graphe) amplifie cette convergence si un accident médiatisé survient avant J+45 sans réponse claire de la Ville. <strong>Sans intervention ciblée, la zone Ambre bascule en Rouge autour de J+60</strong> — et l'adoption plafonne à 55% au lieu de 61%. Levier décisif : voir section <em>4 Leviers d'intervention</em>.`,

    // 4 Leviers
    levers: [
      { num: 1, title: "Négocier l'adoption proactive avec les entrepreneurs Réticents avant J+45", impact: 18, archetypes: ["RÉTICENT", "PRAGMATIQUE", "DÉCIDEUR"], type: "Comportemental" },
      { num: 2, title: "Anticiper le récit médiatique des accidents zone-chantier", impact: 14, archetypes: ["DÉCIDEUR", "SENTINELLE", "USAGERS", "MÉDIAS"], type: "Communication" },
      { num: 3, title: "Onboarding ultra-léger pour le Coordinateur surchargé", impact: 11, archetypes: ["COORDINATEUR", "INSPECTEUR", "FACILITATEUR"], type: "UX" },
      { num: 4, title: "Gouvernance Loi 25 visible pour la Sentinelle", impact: 8, archetypes: ["SENTINELLE", "DÉCIDEUR", "ORDRES PROFESSIONNELS"], type: "Gouvernance" }
    ],

    convergence: {
      label: "Réticent × Délinquant × Décideur",
      type: "Médiatique politique",
      timing: "J+30 à J+60",
      trigger: "Accident médiatisé en zone chantier"
    },

    adoptionCurve: [
      { day: 0,   value: 0,  withLevers: 0  },
      { day: 30,  value: 10, withLevers: 22 },
      { day: 60,  value: 28, withLevers: 48 },
      { day: 90,  value: 42, withLevers: 65 },
      { day: 120, value: 52, withLevers: 75 },
      { day: 150, value: 58, withLevers: 82 },
      { day: 180, value: 61, withLevers: 85 }
    ],

    actors: [
      { id: "A01", code: "A01", name: "Le Coordinateur", role: "Coordinateur Engagé", group: "Ville", score: 15, radius: 4, zone: "green", verbatim: "Enfin un outil qui me permet de voir tous les chantiers en temps réel." },
      { id: "A02", code: "A02", name: "La Sentinelle", role: "Sentinelle DPO", group: "Ville", score: 52, radius: 5, zone: "blue", verbatim: "Loi 25 d'abord. Aucune donnée personnelle directe, ou je bloque le go-live." },
      { id: "A03", code: "A03", name: "Le Décideur", role: "Décideur Politique", group: "Ville", score: 68, radius: 6, zone: "amber", verbatim: "Et si un accident arrive en pleine campagne municipale ? Je veux le ROI documenté." },
      { id: "A04", code: "A04", name: "L'Inspecteur", role: "Inspecteur Terrain", group: "Ville", score: 28, radius: 3, zone: "green", verbatim: "Si ça simplifie mes tournées et me dit où aller en priorité, j'adopte." },
      { id: "A05", code: "A05", name: "Le Facilitateur", role: "Facilitateur Admin", group: "Ville", score: 38, radius: 3, zone: "blue", verbatim: "Pivot entre IT, juridique et opérationnel. J'embarque si les trois sont alignés." },
      { id: "B01", code: "B01", name: "Le Champion", role: "Champion Conformité", group: "Entrepreneurs", score: 12, radius: 4, zone: "green", verbatim: "On déclare déjà tout. Si la Ville reconnaît ma rigueur, j'embarque tous les autres." },
      { id: "B02", code: "B02", name: "Le Pragmatique", role: "Pragmatique", group: "Entrepreneurs", score: 45, radius: 2, zone: "blue", verbatim: "30 secondes par déclaration max. Sinon mon contremaître ne le fera jamais." },
      { id: "B03", code: "B03", name: "Le Réticent", role: "Réticent", group: "Entrepreneurs", score: 72, radius: 3, zone: "amber", verbatim: "Pourquoi déclarer ? La Ville n'a qu'à venir voir si elle veut savoir." },
      { id: "B04", code: "B04", name: "Le Délinquant", role: "Délinquant Chronique", group: "Entrepreneurs", score: 92, radius: 1, zone: "red", verbatim: "Les amendes sont moins chères que se conformer. Je prends le risque." },
      { id: "U01", code: "U01", name: "Le Cycliste", role: "Cycliste Régulier", group: "Usagers", score: 42, radius: 3, zone: "blue", verbatim: "Je veux savoir AVANT de partir si une piste est bloquée." },
      { id: "U02", code: "U02", name: "Le Piéton", role: "Piéton Vulnérable", group: "Usagers", score: 62, radius: 2, zone: "amber", verbatim: "Aîné, je dépends de la qualité des détours signalés. Le 311 ne suffit pas." },
      { id: "U03", code: "U03", name: "L'Automobiliste", role: "Automobiliste Pressé", group: "Usagers", score: 66, radius: 2, zone: "amber", verbatim: "Encore une fermeture imprévue ! Mon GPS aurait dû savoir." },
      { id: "U04", code: "U04", name: "Le Visiteur", role: "Visiteur", group: "Usagers", score: 48, radius: 1, zone: "blue", verbatim: "Touriste à Montréal, je découvre les chantiers en m'y heurtant." },
      { id: "S01", code: "S01", name: "Sources publiques", role: "Sources Données", group: "Système", score: 92, radius: 5, zone: "violet", verbatim: "AGIR, BIXI, capteurs vélo, CNESST, SAAQ, 311, RSQA. Disponibilité variable selon API." },
      { id: "S02", code: "S02", name: "Météo + saisons", role: "Conditions environnementales", group: "Système", score: 80, radius: 4, zone: "violet", verbatim: "Tempêtes hivernales, déneigement, verglas. Modulateur d'exposition risque." }
    ]
  },

  /* ========================================================================
   * SEED A03 — Prolongations chantiers non-déclarées
   * ======================================================================== */
  "A03": {
    id: "CITYFLOW-MTL-A03",
    shortId: "CITYFLOW-MTL-A03",
    category: "A",
    categoryLabel: "Coactivité chantiers",

    title: "Prolongations chantiers non-déclarées",
    subtitle: "Le chantier qui s'éternise — anticiper la déclaration tardive",
    pilote: "Arrondissement densité moyenne · 1 trimestre",

    horizon: 90,
    archetypes: 12,
    simulations: 10000,
    confidenceInterval: 95,
    generatedDate: "17 mai 2026",

    metric: {
      label: "Prolongations déclarées dans les 24h",
      baseline: 28,
      target: 60,
      withLevers: 70,
      icLow: 22,
      icHigh: 34,
      initialState: 15
    },

    resistance: 67,
    champions: 3,
    structuralRefusers: 4,

    // === NOUVEAUX CHAMPS V2.1 + V2.3 ===
    resistanceLabel: "Élevée · Résistance structurelle, levier UX prioritaire",
    predictionLabel: "Prolongations déclarées J+90",
    icLabel: "IC 95% : 22-34% · Cible 60% non atteinte sans intervention",
    icContext: "Baseline initiale 15%",
    championsList: "Champion Conformité · Coordinateur Surchargé · Inspecteur Terrain",
    championsAction: "Activables J+0",
    refusersList: "Délinquant Chronique · Réticent Endurci · Sous-traitant Opportuniste · Commerçant Impacté",
    refusersStrategy: "Stratégie : escalade contractuelle",
    blueprintLabel: "Étape A03 « Prolongations chantiers non-déclarées »",
    curveNarrative: `La simulation CityFlow-X5 <strong>#CITYFLOW-MTL-A03</strong> prédit que sans intervention, <strong>28% des prolongations seraient déclarées dans les 24h à J+90</strong>, <strong>32 points en dessous de la cible municipale de 60%</strong>. La résistance globale initiale de <strong>67/100 est élevée mais structurée</strong> autour de trois leviers identifiables : <strong>la dilution de responsabilité contractuelle</strong> (le permis appartient au général, le sous-traitant prolonge sans déclarer), <strong>l'absence d'alerte système</strong> (la plateforme AGIR ne signale pas les fins de permis approchantes), et <strong>la saisonnalité gel/dégel</strong> qui rend les prolongations inévitables mais culturellement banalisées.<br><br>L'adoption se déroule en <strong>escalier serré</strong> : les <strong>Champions Conformité et Coordinateurs Surchargés</strong> adoptent dès J+0-J+15 (vague 1), motivés par la visibilité publique. Le <strong>Pragmatique Majoritaire</strong> bascule entre J+30 et J+60 si l'application mobile 3-boutons tient sa promesse de 15 secondes par déclaration (vague 2). Les <strong>Sous-traitants Opportunistes</strong> basculent en vague 3 entre J+60 et J+90 <strong>par effet de masse</strong> (convergence Sous-traitant × Réticent identifiée à J+30-J+60). Le <strong>Délinquant Chronique et le Réticent Endurci</strong> ne basculeront pas — la stratégie optimale est l'escalade contractuelle, pas la conversion.<br><br><strong>Action prioritaire J+0 à J+30 :</strong> activer en priorité le levier 1 (alerte automatique 24h avant fin de permis dans AGIR) et le levier 2 (app mobile 3-boutons). Avec les 4 leviers pleinement activés, la simulation projette <strong>70% de prolongations déclarées dans les 24h à J+90</strong>, soit 10 points au-dessus de la cible municipale de 60%.`,
    graphWarning: `<strong>Signal critique CityFlow-X5 :</strong> Le <em>Sous-traitant Opportuniste</em> (score 68) et le <em>Réticent Endurci</em> (score 78) convergent entre J+30 et J+60 autour du récit <strong>"le permis est au nom du général, c'est son problème"</strong>. Le <em>Délinquant Chronique</em> (score 95, le plus élevé du graphe) amplifie cette convergence si aucune escalade contractuelle n'est engagée avant J+45. <strong>Sans intervention ciblée, la zone Ambre bascule en Rouge autour de J+60</strong> — et l'adoption plafonne à 24% au lieu de 28%. Levier décisif : voir section <em>4 Leviers d'intervention</em> (escalade contractuelle ciblée Délinquants/Réticents endurcis).`,

    levers: [
      { num: 1, title: "Alerte automatique 24h avant fin de permis", impact: 25, archetypes: ["SYSTÈME AGIR", "COORDINATEUR", "PRAGMATIQUE"], type: "Algorithmique" },
      { num: 2, title: "App mobile déclaration 3-boutons (Prolonger/Suspendre/Terminer)", impact: 20, archetypes: ["PRAGMATIQUE", "RÉTICENT", "CHAMPION"], type: "UX" },
      { num: 3, title: "Score fiabilité public + tableau Champions", impact: 10, archetypes: ["CHAMPION", "PRAGMATIQUE", "RIVERAIN"], type: "Gamification" },
      { num: 4, title: "Escalade contractuelle Délinquants/Réticents endurcis", impact: 5, archetypes: ["DÉLINQUANT", "RÉTICENT", "SOUS-TRAITANT"], type: "Contractuel" }
    ],

    convergence: {
      label: "Sous-traitant × Réticent → effet de masse",
      type: "Opérationnel",
      timing: "J+30 à J+60",
      trigger: "Adoption Sous-traitants imitant Réticents"
    },

    adoptionCurve: [
      { day: 0,  value: 15, withLevers: 15 },
      { day: 7,  value: 16, withLevers: 35 },
      { day: 15, value: 17, withLevers: 48 },
      { day: 30, value: 19, withLevers: 52 },
      { day: 45, value: 21, withLevers: 55 },
      { day: 60, value: 24, withLevers: 64 },
      { day: 75, value: 26, withLevers: 67 },
      { day: 90, value: 28, withLevers: 70 }
    ],

    actors: [
      { id: "A01", code: "A01", name: "Le Coordinateur", role: "Coordinateur Surchargé", group: "Ville", score: 45, radius: 4, zone: "blue", verbatim: "Je gère 35 chantiers actifs. Quand un permis arrive à terme et que rien n'est déclaré, je le découvre par le 311. Trop tard." },
      { id: "A02", code: "A02", name: "La Sentinelle", role: "Sentinelle DPO", group: "Ville", score: 38, radius: 4, zone: "blue", verbatim: "Une prolongation = une donnée temporelle, pas une donnée personnelle. On agrège les durées par zone, pas de PII." },
      { id: "A03", code: "A03", name: "L'Inspecteur", role: "Inspecteur Terrain", group: "Ville", score: 22, radius: 3, zone: "green", verbatim: "Si je sais en temps réel quel chantier dépasse son permis, je priorise mes tournées. Aujourd'hui, je découvre tout post-incident." },
      { id: "B01", code: "B01", name: "Le Champion", role: "Champion Conformité", group: "Entrepreneurs", score: 8, radius: 5, zone: "green", verbatim: "Je déclare TOUTES mes prolongations, même 24 heures. C'est mon avantage compétitif face à la Ville." },
      { id: "B02", code: "B02", name: "Le Pragmatique", role: "Pragmatique Majoritaire", group: "Entrepreneurs", score: 52, radius: 4, zone: "blue", verbatim: "Si l'app me prend 15 secondes pour signaler une prolongation, je le fais. Au-delà, mon contremaître n'aura pas le temps." },
      { id: "B03", code: "B03", name: "Le Sous-traitant", role: "Sous-traitant Opportuniste", group: "Entrepreneurs", score: 68, radius: 3, zone: "amber", verbatim: "Le permis est au nom du général. Si je prolonge, c'est son problème, pas le mien." },
      { id: "B04", code: "B04", name: "Le Réticent", role: "Réticent Endurci", group: "Entrepreneurs", score: 78, radius: 3, zone: "amber", verbatim: "Si je prolonge 3 jours, je vais pas refaire un permis pour ça. Personne ne le saura." },
      { id: "B05", code: "B05", name: "Le Délinquant", role: "Délinquant Chronique", group: "Entrepreneurs", score: 95, radius: 1, zone: "red", verbatim: "Prolongations non-déclarées = invisibles aux amendes. Je continue comme avant." },
      { id: "U01", code: "U01", name: "Le Riverain", role: "Riverain Excédé", group: "Usagers", score: 72, radius: 4, zone: "amber", verbatim: "Le chantier devait finir le 15. Aujourd'hui c'est le 22. Personne ne m'a prévenu. Je vais au 311." },
      { id: "U02", code: "U02", name: "Le Commerçant", role: "Commerçant Impacté", group: "Usagers", score: 65, radius: 3, zone: "amber", verbatim: "Mes clients ne savent plus quand l'accès est rétabli. Mon chiffre baisse. La Ville devrait communiquer." },
      { id: "S01", code: "S01", name: "Système AGIR", role: "Plateforme permis", group: "Système", score: 95, radius: 5, zone: "violet", verbatim: "Les permis ont une date de fin théorique. La plateforme ne signale aucune alerte automatique si la fin approche sans renouvellement." },
      { id: "S02", code: "S02", name: "Gel/dégel", role: "Saisonnalité", group: "Système", score: 85, radius: 5, zone: "violet", verbatim: "Hiver MTL = retards systématiques. Mars-avril = pic de prolongations non-déclarées causées par le dégel imprévisible." }
    ]
  }

};

/* ============================================================================
 * EXPORT GLOBAL
 * ============================================================================ */
window.SEEDS_DATA = SEEDS_DATA;
window.CURRENT_SEED = "A01";
window.AVAILABLE_SEEDS = Object.keys(SEEDS_DATA);

console.log("✓ seeds-data.js V1.3 chargé · " + window.AVAILABLE_SEEDS.length + " seeds : " + window.AVAILABLE_SEEDS.join(", "));