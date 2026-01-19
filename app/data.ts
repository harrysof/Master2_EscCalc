
export type Subject = {
  name: string;
  coef: number;
};

export type SemesterData = {
  [key: string]: Subject[];
};

export type Branch = {
  id: string;
  name: string;
  color: string;
  data: SemesterData;
};

export const BRANCHES: Branch[] = [
  {
    id: "FIN",
    name: "Finance d'entreprise",
    color: "#FF8C00", // DarkOrange
    data: {
      S1: [
        { name: "Théorie de la Décision et des Jeux", coef: 3 },
        { name: "Stratégie d'Entreprise", coef: 3 },
        { name: "Théorie Financière", coef: 3 },
        { name: "Marchés des Capitaux", coef: 3 },
        { name: "Comptabilité Approfondie", coef: 3 },
        { name: "PMO", coef: 3 },
        { name: "Séries Temporelles", coef: 3 },
        { name: "Systèmes d'Information", coef: 3 },
        { name: "Contrôle de Gestion", coef: 3 },
        { name: "Technique Bancaires", coef: 3 },
      ],
      S2: [
        { name: "Économie de l'information", coef: 1.5 },
        { name: "Stage", coef: 3 },
        { name: "Droit pénal des affaires", coef: 3 },
        { name: "Économie managériale", coef: 3 },
        { name: "Initiation à la méthodologie", coef: 1.5 },
        { name: "Économie monétaire", coef: 3 },
        { name: "Gestion de portefeuille", coef: 3 },
        { name: "Évaluation des projets d'investissement", coef: 3 },
        { name: "Analyse et conception de systèmes d'information", coef: 3 },
        { name: "Convexité et optimisation", coef: 3 },
        { name: "Modèles stochastiques", coef: 3 },
      ],
    },
  },
  {
    id: "ACC",
    name: "Comptabilité et finance",
    color: "#6A5ACD", // SlateBlue
    data: {
      S1: [
        { name: "Marche Des Capitaux", coef: 3 },
        { name: "Comptabilite Approfondie", coef: 3 },
        { name: "Management Des Couts", coef: 3 },
        { name: "Control De Gestion", coef: 3 },
        { name: "Technique Bancaire", coef: 3 },
        { name: "PMO", coef: 3 },
        { name: "Planification Financiere", coef: 3 },
        { name: "Strategie D'entreprise", coef: 3 },
        { name: "Systeme d'Information de Gestion", coef: 3 },
        { name: "Droit", coef: 1.5 },
        { name: "Finance Publique", coef: 1.5 },
      ],
      S2: [
        { name: "Droit pénal des affaires", coef: 3 },
        { name: "ACSI", coef: 3 },
        { name: "Audit comptable et financier", coef: 3 },
        { name: "Économie managériale", coef: 3 },
        { name: "Animation et contrôle budgétaire", coef: 3 },
        { name: "Comptabilité des sociétés", coef: 3 },
        { name: "Comptabilité publique 1", coef: 3 },
        { name: "Stage", coef: 3 },
        { name: "Méthodologie", coef: 1.5 },
        { name: "Finance d'entreprise approfondie", coef: 3 },
        { name: "Comptabilité des instruments financiers", coef: 1.5 },
      ],
    },
  },
  {
    id: "CDG",
    name: "Contrôle de gestion",
    color: "#20B2AA", // LightSeaGreen
    data: {
      S1: [
        { name: "Management des coûts", coef: 3 },
        { name: "Marché des capitaux et évaluation des actifs financiers", coef: 3 },
        { name: "Droit des sociétés", coef: 1.5 },
        { name: "Techniques bancaires", coef: 3 },
        { name: "Comptabilité financière approfondie", coef: 3 },
        { name: "Analyse des processus d'affaires", coef: 1.5 },
        { name: "Contrôle de gestion", coef: 3 },
        { name: "Management des opérations", coef: 3 },
        { name: "Stratégie d'entreprise", coef: 3 },
        { name: "Audit et systèmes de contrôle", coef: 1.5 },
        { name: "Systèmes d'information de gestion", coef: 3 },
        { name: "Management de la chaine de valeur", coef: 1.5 },
      ],
      S2: [
        { name: "Comptabilité publique 1", coef: 3 },
        { name: "Animation et contrôle budgétaire", coef: 3 },
        { name: "Stage", coef: 3 },
        { name: "Comptabilité des sociétés", coef: 3 },
        { name: "Initiation à la méthodologie", coef: 1.5 },
        { name: "Economie managériale", coef: 3 },
        { name: "Analyse et conception des systèmes d'information", coef: 3 },
        { name: "Diagnostic d'entreprise par l'approche de la qualité totale", coef: 1.5 },
        { name: "Techniques de sondage", coef: 3 },
        { name: "Mesures de performance", coef: 1.5 },
        { name: "Tableau de bord", coef: 1.5 },
        { name: "Droit pénal des affaires", coef: 3 },
      ],
    },
  },
  {
    id: "MFB",
    name: "MFB",
    color: "#4682B4", // SteelBlue
    data: {
      S1: [
        { name: "Théorie financière", coef: 3 },
        { name: "Séries temporelle", coef: 3 },
        { name: "Technique bancaires", coef: 3 },
        { name: "Macroéconomie profonde", coef: 3 },
        { name: "Management des opérations", coef: 3 },
        { name: "Economie des intermédiaires financiers", coef: 3 },
        { name: "Stratégie d'entreprise", coef: 3 },
        { name: "Marché des capitaux et évaluation des actifs financiers", coef: 3 },
        { name: "Systèmes d'information de gestion", coef: 3 },
        { name: "contrôle de gestion", coef: 3 },
      ],
      S2: [
        { name: "Gestion de portefeuille", coef: 3 },
        { name: "Droit pénal des affaires", coef: 3 },
        { name: "Stage", coef: 3 },
        { name: "Évaluation des projets d'investissement", coef: 3 },
        { name: "Economie monétaire", coef: 3 },
        { name: "Analyse et conception des systèmes d'information", coef: 3 },
        { name: "modèles aléatoires", coef: 3 },
        { name: "Economie managériale", coef: 3 },
        { name: "droit des banques, assurance, boursier", coef: 3 },
        { name: "finance islamique", coef: 1.5 },
        { name: "Initiation méthodologie", coef: 1.5 },
      ],
    },
  },
  {
    id: "MGT",
    name: "Management",
    color: "#32CD32", // LimeGreen
    data: {
      S1: [
        { name: "Théorie de la décision et des jeux", coef: 3 },
        { name: "Finances publiques", coef: 1.5 },
        { name: "Culture d'entreprise", coef: 1.5 },
        { name: "Gouvernance d'entreprise", coef: 3 },
        { name: "Management public", coef: 3 },
        { name: "Stratégie d'entreprise", coef: 3 },
        { name: "Systèmes d'information de gestion", coef: 3 },
        { name: "Organisation de l'entreprise", coef: 3 },
        { name: "Management des ressources humaines", coef: 3 },
        { name: "Management des opérations", coef: 3 },
        { name: "contrôle de gestion", coef: 3 },
      ],
      S2: [
        { name: "techniques de sondage", coef: 3 },
        { name: "Animation et contrôle budgétaire", coef: 3 },
        { name: "Tableaux de bord et de mesures de la performance", coef: 3 },
        { name: "Stage", coef: 3 },
        { name: "théories de la concurrence", coef: 3 },
        { name: "Communication d'entreprise", coef: 3 },
        { name: "Droit pénal des affaires", coef: 3 },
        { name: "Management de changement", coef: 3 },
        { name: "Comptabilité publique", coef: 1.5 },
        { name: "Analyse et conception des systèmes d'information", coef: 3 },
        { name: "Initiation à la méthodologie", coef: 1.5 },
      ],
    },
  },
  {
    id: "MKT",
    name: "Marketing",
    color: "#FF69B4", // HotPink
    data: {
      S1: [
        { name: "Marketing des services", coef: 3 },
        { name: "Contrôle de gestion", coef: 3 },
        { name: "Stratégie d'entreprise", coef: 3 },
        { name: "Management des opérations", coef: 3 },
        { name: "Système d'informations de gestion", coef: 3 },
        { name: "Gestion des systèmes de la distribution", coef: 3 },
        { name: "Marketing stratégique", coef: 3 },
        { name: "Etudes et recherches marketing 1", coef: 3 },
        { name: "Comportement du consommateur", coef: 3 },
        { name: "Politique de communication", coef: 3 },
      ],
      S2: [
        { name: "Introduction à l'e-commerce", coef: 1.5 },
        { name: "Etudes et recherches marketing 2", coef: 3 },
        { name: "Economie managériale", coef: 3 },
        { name: "Initiation à la méthodologie", coef: 1.5 },
        { name: "Techniques publicitaires", coef: 3 },
        { name: "Droit pénal des affaires", coef: 3 },
        { name: "techniques de sondage", coef: 3 },
        { name: "Stage", coef: 3 },
        { name: "Analyse et conception de systèmes d'information", coef: 3 },
        { name: "Marketing international", coef: 3 },
        { name: "Marketing produit et gestion de la marque", coef: 3 },
      ],
    },
  },
];
