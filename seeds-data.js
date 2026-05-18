/**
 * CityFlow-X5 · seeds-data.js
 * Données centralisées des seeds de simulation
 * Version : V1 multi-seed · 17 mai 2026
 * Éditeur : AgenticX5
 */

const SEEDS_DATA = {

  /* ========================================================================
   * SEED A01 — Détection coactivité défaillante (SEED ORIGINAL)
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
    horizon: 180,            // jours
    archetypes: 15,
    simulations: 10000,
    confidenceInterval: 95,
    generatedDate: "5 mai 2026",

    // KPIs principaux
    metric: {
      label: "Adoption générale du système",
      baseline: 61,          // % à J+180 sans intervention
      target: 75,            // % cible municipale
      withLevers: 85,        // % à J+180 avec 4 leviers
      icLow: 53,
      icHigh: 69
    },

    // Composition
    resistance: 61,          // /100 résistance globale initiale
    champions: 4,
    structuralRefusers: 3,

    // 4 Leviers
    levers: [
      {
        num: 1,
        title: "Négocier l'adoption proactive avec les entrepreneurs Réticents avant J+45",
        impact: 18,
        archetypes: ["RÉTICENT", "PRAGMATIQUE", "DÉCIDEUR"],
        type: "Comportemental"
      },
      {
        num: 2,
        title: "Anticiper le récit médiatique des accidents zone-chantier",
        impact: 14,
        archetypes: ["DÉCIDEUR", "SENTINELLE", "USAGERS", "MÉDIAS"],
        type: "Communication"
      },
      {
        num: 3,
        title: "Onboarding ultra-léger pour le Coordinateur surchargé",
        impact: 11,
        archetypes: ["COORDINATEUR", "INSPECTEUR", "FACILITATEUR"],
        type: "UX"
      },
      {
        num: 4,
        title: "Gouvernance Loi 25 visible pour la Sentinelle",
        impact: 8,
        archetypes: ["SENTINELLE", "DÉCIDEUR", "ORDRES PROFESSIONNELS"],
        type: "Gouvernance"
      }
    ],

    // Convergence critique
    convergence: {
      label: "Réticent × Délinquant × Décideur",
      type: "Médiatique politique",
      timing: "J+30 à J+60",
      trigger: "Accident médiatisé en zone chantier"
    },

    // Courbe d'adoption (sans levier)
    adoptionCurve: [
      { day: 0,   value: 0,  withLevers: 0  },
      { day: 30,  value: 10, withLevers: 22 },
      { day: 60,  value: 28, withLevers: 48 },
      { day: 90,  value: 42, withLevers: 65 },
      { day: 120, value: 52, withLevers: 75 },
      { day: 150, value: 58, withLevers: 82 },
      { day: 180, value: 61, withLevers: 85 }
    ],

    // 15 archétypes avec verbatim
    actors: [
      // Ville (5)
      { id: "A01", code: "A01", name: "Le Coordinateur", role: "Coordinateur Engagé", group: "Ville", score: 15, radius: 4, zone: "green",
        verbatim: "Enfin un outil qui me permet de voir tous les chantiers en temps réel." },
      { id: "A02", code: "A02", name: "La Sentinelle", role: "Sentinelle DPO", group: "Ville", score: 52, radius: 5, zone: "blue",
        verbatim: "Loi 25 d'abord. Aucune donnée personnelle directe, ou je bloque le go-live." },
      { id: "A03", code: "A03", name: "Le Décideur", role: "Décideur Politique", group: "Ville", score: 68, radius: 6, zone: "amber",
        verbatim: "Et si un accident arrive en pleine campagne municipale ? Je veux le ROI documenté." },
      { id: "A04", code: "A04", name: "L'Inspecteur", role: "Inspecteur Terrain", group: "Ville", score: 28, radius: 3, zone: "green",
        verbatim: "Si ça simplifie mes tournées et me dit où aller en priorité, j'adopte." },
      { id: "A05", code: "A05", name: "Le Facilitateur", role: "Facilitateur Admin", group: "Ville", score: 38, radius: 3, zone: "blue",
        verbatim: "Pivot entre IT, juridique et opérationnel. J'embarque si les trois sont alignés." },
      // Entrepreneurs (4)
      { id: "B01", code: "B01", name: "Le Champion", role: "Champion Conformité", group: "Entrepreneurs", score: 12, radius: 4, zone: "green",
        verbatim: "On déclare déjà tout. Si la Ville reconnaît ma rigueur, j'embarque tous les autres." },
      { id: "B02", code: "B02", name: "Le Pragmatique", role: "Pragmatique", group: "Entrepreneurs", score: 45, radius: 2, zone: "blue",
        verbatim: "30 secondes par déclaration max. Sinon mon contremaître ne le fera jamais." },
      { id: "B03", code: "B03", name: "Le Réticent", role: "Réticent", group: "Entrepreneurs", score: 72, radius: 3, zone: "amber",
        verbatim: "Pourquoi déclarer ? La Ville n'a qu'à venir voir si elle veut savoir." },
      { id: "B04", code: "B04", name: "Le Délinquant", role: "Délinquant Chronique", group: "Entrepreneurs", score: 92, radius: 1, zone: "red",
        verbatim: "Les amendes sont moins chères que se conformer. Je prends le risque." },
      // Usagers (4)
      { id: "U01", code: "U01", name: "Le Cycliste", role: "Cycliste Régulier", group: "Usagers", score: 42, radius: 3, zone: "blue",
        verbatim: "Je veux savoir AVANT de partir si une piste est bloquée." },
      { id: "U02", code: "U02", name: "Le Piéton", role: "Piéton Vulnérable", group: "Usagers", score: 62, radius: 2, zone: "amber",
        verbatim: "Aîné, je dépends de la qualité des détours signalés. Le 311 ne suffit pas." },
      { id: "U03", code: "U03", name: "L'Automobiliste", role: "Automobiliste Pressé", group: "Usagers", score: 66, radius: 2, zone: "amber",
        verbatim: "Encore une fermeture imprévue ! Mon GPS aurait dû savoir." },
      { id: "U04", code: "U04", name: "Le Visiteur", role: "Visiteur", group: "Usagers", score: 48, radius: 1, zone: "blue",
        verbatim: "Touriste à Montréal, je découvre les chantiers en m'y heurtant." },
      // Système (2)
      { id: "S01", code: "S01", name: "Sources publiques", role: "Sources Données", group: "Système", score: 92, radius: 5, zone: "violet",
        verbatim: "AGIR, BIXI, capteurs vélo, CNESST, SAAQ, 311, RSQA. Disponibilité variable selon API." },
      { id: "S02", code: "S02", name: "Météo + saisons", role: "Conditions environnementales", group: "Système", score: 80, radius: 4, zone: "violet",
        verbatim: "Tempêtes hivernales, déneigement, verglas. Modulateur d'exposition risque." }
    ]
  },

  /* ========================================================================
   * SEED A03 — Prolongations chantiers non-déclarées (NOUVEAU)
   * ======================================================================== */
  "A03": {
    id: "CITYFLOW-MTL-A03",
    shortId: "CITYFLOW-MTL-A03",
    category: "A",
    categoryLabel: "Coactivité chantiers",

    // Identification
    title: "Prolongations chantiers non-déclarées",
    subtitle: "Le chantier qui s'éternise — anticiper la déclaration tardive",
    pilote: "Arrondissement densité moyenne · 1 trimestre",

    // Paramètres simulation (DIFFÉRENTS de A01)
    horizon: 90,             // 90 jours au lieu de 180
    archetypes: 12,          // 12 au lieu de 15
    simulations: 10000,
    confidenceInterval: 95,
    generatedDate: "17 mai 2026",

    // KPIs principaux (MÉTRIQUE DIFFÉRENTE)
    metric: {
      label: "Prolongations déclarées dans les 24h",
      baseline: 28,          // % à J+90 sans intervention
      target: 60,            // % cible municipale
      withLevers: 70,        // % à J+90 avec 4 leviers
      icLow: 22,
      icHigh: 34,
      initialState: 15       // État actuel avant déploiement
    },

    // Composition (DIFFÉRENTE)
    resistance: 67,          // résistance globale plus élevée
    champions: 3,
    structuralRefusers: 4,

    // 4 Leviers spécifiques A03
    levers: [
      {
        num: 1,
        title: "Alerte automatique 24h avant fin de permis",
        impact: 25,
        archetypes: ["SYSTÈME AGIR", "COORDINATEUR", "PRAGMATIQUE"],
        type: "Algorithmique"
      },
      {
        num: 2,
        title: "App mobile déclaration 3-boutons (Prolonger/Suspendre/Terminer)",
        impact: 20,
        archetypes: ["PRAGMATIQUE", "RÉTICENT", "CHAMPION"],
        type: "UX"
      },
      {
        num: 3,
        title: "Score fiabilité public + tableau Champions",
        impact: 10,
        archetypes: ["CHAMPION", "PRAGMATIQUE", "RIVERAIN"],
        type: "Gamification"
      },
      {
        num: 4,
        title: "Escalade contractuelle Délinquants/Réticents endurcis",
        impact: 5,
        archetypes: ["DÉLINQUANT", "RÉTICENT", "SOUS-TRAITANT"],
        type: "Contractuel"
      }
    ],

    // Convergence critique (DIFFÉRENTE)
    convergence: {
      label: "Sous-traitant × Réticent → effet de masse",
      type: "Opérationnel",
      timing: "J+30 à J+60",
      trigger: "Adoption Sous-traitants imitant Réticents"
    },

    // Courbe d'adoption A03 (en escalier, 90 jours)
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

    // 12 archétypes A03 (composition DIFFÉRENTE)
    actors: [
      // Ville (3)
      { id: "A01", code: "A01", name: "Le Coordinateur", role: "Coordinateur Surchargé", group: "Ville", score: 45, radius: 4, zone: "blue",
        verbatim: "Je gère 35 chantiers actifs. Quand un permis arrive à terme et que rien n'est déclaré, je le découvre par le 311. Trop tard." },
      { id: "A02", code: "A02", name: "La Sentinelle", role: "Sentinelle DPO", group: "Ville", score: 38, radius: 4, zone: "blue",
        verbatim: "Une prolongation = une donnée temporelle, pas une donnée personnelle. On agrège les durées par zone, pas de PII." },
      { id: "A03", code: "A03", name: "L'Inspecteur", role: "Inspecteur Terrain", group: "Ville", score: 22, radius: 3, zone: "green",
        verbatim: "Si je sais en temps réel quel chantier dépasse son permis, je priorise mes tournées. Aujourd'hui, je découvre tout post-incident." },
      // Entrepreneurs (5)
      { id: "B01", code: "B01", name: "Le Champion", role: "Champion Conformité", group: "Entrepreneurs", score: 8, radius: 5, zone: "green",
        verbatim: "Je déclare TOUTES mes prolongations, même 24 heures. C'est mon avantage compétitif face à la Ville." },
      { id: "B02", code: "B02", name: "Le Pragmatique", role: "Pragmatique Majoritaire", group: "Entrepreneurs", score: 52, radius: 4, zone: "blue",
        verbatim: "Si l'app me prend 15 secondes pour signaler une prolongation, je le fais. Au-delà, mon contremaître n'aura pas le temps." },
      { id: "B03", code: "B03", name: "Le Sous-traitant", role: "Sous-traitant Opportuniste", group: "Entrepreneurs", score: 68, radius: 3, zone: "amber",
        verbatim: "Le permis est au nom du général. Si je prolonge, c'est son problème, pas le mien." },
      { id: "B04", code: "B04", name: "Le Réticent", role: "Réticent Endurci", group: "Entrepreneurs", score: 78, radius: 3, zone: "amber",
        verbatim: "Si je prolonge 3 jours, je vais pas refaire un permis pour ça. Personne ne le saura." },
      { id: "B05", code: "B05", name: "Le Délinquant", role: "Délinquant Chronique", group: "Entrepreneurs", score: 95, radius: 1, zone: "red",
        verbatim: "Prolongations non-déclarées = invisibles aux amendes. Je continue comme avant." },
      // Usagers (2)
      { id: "U01", code: "U01", name: "Le Riverain", role: "Riverain Excédé", group: "Usagers", score: 72, radius: 4, zone: "amber",
        verbatim: "Le chantier devait finir le 15. Aujourd'hui c'est le 22. Personne ne m'a prévenu. Je vais au 311." },
      { id: "U02", code: "U02", name: "Le Commerçant", role: "Commerçant Impacté", group: "Usagers", score: 65, radius: 3, zone: "amber",
        verbatim: "Mes clients ne savent plus quand l'accès est rétabli. Mon chiffre baisse. La Ville devrait communiquer." },
      // Système (2)
      { id: "S01", code: "S01", name: "Système AGIR", role: "Plateforme permis", group: "Système", score: 95, radius: 5, zone: "violet",
        verbatim: "Les permis ont une date de fin théorique. La plateforme ne signale aucune alerte automatique si la fin approche sans renouvellement." },
      { id: "S02", code: "S02", name: "Gel/dégel", role: "Saisonnalité", group: "Système", score: 85, radius: 5, zone: "violet",
        verbatim: "Hiver MTL = retards systématiques. Mars-avril = pic de prolongations non-déclarées causées par le dégel imprévisible." }
    ]
  }

};

/* ============================================================================
 * EXPORT GLOBAL
 * ============================================================================ */
window.SEEDS_DATA = SEEDS_DATA;
window.CURRENT_SEED = "A01";   // Seed par défaut
window.AVAILABLE_SEEDS = Object.keys(SEEDS_DATA);

console.log("✓ seeds-data.js chargé · " + window.AVAILABLE_SEEDS.length + " seeds disponibles : " + window.AVAILABLE_SEEDS.join(", "));