export type ProjectMedia = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  kind: "photo" | "slide" | "document";
};

type Detail = { label: string; value: string };
type Note = { title: string; copy: string };
type Constraint = {
  constraint: string;
  response: string;
  evidence: string;
};
type CodeExample = {
  title: string;
  file: string;
  language: string;
  code: string;
  explanation: string;
  sourceUrl: string;
};
type BuildStage = {
  title: string;
  copy: string;
  observation: string;
  media: ProjectMedia;
};
type BuildCheck = {
  subject: string;
  state: string;
  evidence: string;
};

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  year: string;
  context: string;
  role: string;
  summary: string;
  question: string;
  contribution: string[];
  architecture: Detail[];
  outcome: string;
  proof: string;
  technologies: string[];
  repository: string;
  cover: ProjectMedia;
  gallery: ProjectMedia[];
  physicalBuild?: {
    title: string;
    summary: string;
    stages: BuildStage[];
    checks: BuildCheck[];
  };
  video?: {
    src: string;
    poster: string;
    title: string;
    caption: string;
  };
  documents?: {
    title: string;
    description: string;
    href: string;
    meta: string;
  }[];
  evidenceSource: string;
  frame: {
    label: string;
    organizer: string;
    format: string;
    brief: string;
    value: string;
  };
  distinctions: {
    title: string;
    issuer: string;
    kind: "award" | "badge" | "milestone";
    note: string;
    image?: { src: string; alt: string; width: number; height: number };
    credentialUrl?: string;
  }[];
  milestones?: { date: string; title: string; detail: string }[];
  stakes: string[];
  systemFlow: string[];
  hardware: Detail[];
  software: Detail[];
  engineering: Note[];
  constraints: Constraint[];
  codeExamples: CodeExample[];
  limits: string[];
  lessons: string[];
  sources: string[];
};

const github = (repository: string, path: string, lines?: string) =>
  `https://github.com/pentademic/${repository}/blob/main/${path}${lines ? `#L${lines}` : ""}`;

const rawProjects: Project[] = [
  {
    slug: "m2s",
    title: "M2S, distributeur médical connecté",
    shortTitle: "M2S",
    year: "2025-2026",
    context: "I-NOVGAMES #4, suivi du patient",
    role: "Responsable technique, électronique et IA embarquée",
    summary:
      "Un démonstrateur modulaire qui identifie le soignant, adresse le bon bac, contrôle la dose par vision et journalise chaque distribution.",
    question:
      "Comment automatiser une distribution de médicaments tout en gardant une identification explicite, une vérification avant libération et une trace exploitable ?",
    contribution: [
      "Découpage du système entre un maître, un nœud vision et des contrôleurs de bacs adressables.",
      "Développement de la machine à états, du contrôle des actionneurs et des échanges entre cartes.",
      "Intégration de la RFID, de LoRa, de l'interface Python Dash et de la base SQLite.",
      "Préparation des scénarios de validation et de la démonstration finale.",
    ],
    architecture: [
      { label: "Orchestration", value: "STM32F746G-DISCO, interface locale, identification RFID du soignant et état global" },
      { label: "Distribution", value: "NUCLEO-G431RB par bac, moteur pas à pas, RFID de stock et adressage LoRa" },
      { label: "Vérification", value: "NUCLEO-F767ZI, caméra, analyse d'image et trappe verrouillée par défaut" },
      { label: "Traçabilité", value: "Service Python, UDP sur Ethernet, interface Dash et base SQLite" },
    ],
    outcome:
      "Le démonstrateur a été présenté à Centrale Méditerranée et a reçu le prix du meilleur prototypage. Le dépôt public sépare protocole, firmwares et logiciel de suivi.",
    proof: "Prix du meilleur prototypage",
    technologies: ["STM32F7/G4", "C/C++", "MicroPython", "LoRa", "RFID", "Python Dash", "SQLite"],
    repository: "https://github.com/pentademic/M2S-Automated-Dispensary",
    cover: {
      src: "/projects/m2s/final/prototype-front.webp",
      alt: "Prototype final M2S avec deux bacs, mécanisme de distribution et rampe",
      caption: "Prototype final photographié au Fablab avec deux bacs motorisés et la rampe de récupération.",
      width: 2048,
      height: 1532,
      kind: "photo",
    },
    gallery: [
      {
        src: "/projects/m2s/final/prototype-integration.webp",
        alt: "Prototype M2S en cours d'intégration avec deux bacs motorisés",
        caption: "Intégration du mécanisme, du câblage et des deux bacs pendant la phase de test.",
        width: 2048,
        height: 1532,
        kind: "photo",
      },
      {
        src: "/projects/m2s/final/prototype-side.webp",
        alt: "Vue latérale du prototype M2S sur l'établi",
        caption: "Vue latérale montrant la position des bacs, la structure et le trajet mécanique.",
        width: 1532,
        height: 2048,
        kind: "photo",
      },
      {
        src: "/projects/m2s/final/bin-mechanism.webp",
        alt: "Pièces imprimées en 3D du mécanisme de bac M2S",
        caption: "Détail d'un module de bac imprimé en 3D avec son logement circulaire et sa glissière.",
        width: 2048,
        height: 1532,
        kind: "photo",
      },
      {
        src: "/projects/m2s/final/award-2025.webp",
        alt: "Trophée lauréat I-NOVGAMES édition 2025",
        caption: "Trophée remis à l'équipe lors de la finale I-NOVGAMES.",
        width: 985,
        height: 1920,
        kind: "photo",
      },
      {
        src: "/projects/m2s/drive/slide-7.webp",
        alt: "Synoptique M2S reliant bacs, vision, interface, RFID et trappe",
        caption: "Synoptique de l'architecture cible. Le trajet du médicament reste distinct des échanges de données.",
        width: 1200,
        height: 675,
        kind: "slide",
      },
      {
        src: "/projects/m2s/drive/slide-6.webp",
        alt: "Écrans M2S de connexion, fiche patient, stocks et suivi",
        caption: "Parcours applicatif : authentification, prescription, stocks et historique.",
        width: 1200,
        height: 675,
        kind: "slide",
      },
      {
        src: "/projects/m2s/verification-flow.webp",
        alt: "Séquence M2S de l'identification RFID à la validation",
        caption: "La trappe reste fermée tant que la vérification ne valide pas la dose attendue.",
        width: 1600,
        height: 900,
        kind: "document",
      },
      {
        src: "/projects/m2s/drive/slide-5.webp",
        alt: "Modèles CAO d'un bac vertical et d'un plateau M2S",
        caption: "CAO du mécanisme de stockage et de distribution avant fabrication.",
        width: 1200,
        height: 675,
        kind: "slide",
      },
      {
        src: "/projects/m2s/drive/slide-9.webp",
        alt: "Montage de trappe M2S avec servomoteur et carte NUCLEO-F767ZI",
        caption: "Chaîne de commande utilisée pour tester le verrouillage et l'ouverture de la trappe.",
        width: 1200,
        height: 675,
        kind: "slide",
      },
      {
        src: "/projects/m2s/drive/slide-3.webp",
        alt: "Carte STM32 câblée et alimentée pendant les premiers essais M2S",
        caption: "Premiers essais sur carte avant l'intégration des sous-systèmes.",
        width: 1200,
        height: 675,
        kind: "slide",
      },
    ],
    video: {
      src: "/projects/m2s/final/prototype-demo.mp4",
      poster: "/projects/m2s/final/video-poster.webp",
      title: "Démonstration du mécanisme",
      caption: "Séquence de 16 secondes montrant la distribution des deux types de pièces dans le prototype final.",
    },
    documents: [
      {
        title: "Présentation finale M2S",
        description:
          "Support de 12 pages présenté le 29 janvier 2026 : problème, contraintes hospitalières, architecture, mécanique, LoRa, IA, serveur et démonstration.",
        href: "/projects/m2s/final/m2s-final-presentation.pdf",
        meta: "PDF · 12 pages · 2,3 Mo",
      },
    ],
    evidenceSource:
      "Présentation de suivi, cahier des charges et documents Drive, recoupés avec les firmwares et le logiciel du dépôt public.",
    frame: {
      label: "I-NOVGAMES #4",
      organizer:
        "Campus Industrie du Futur Sud et partenaires I-NOVMICRO, avec un hackathon accueilli par STMicroelectronics à Rousset",
      format: "Six écoles, environ 60 étudiants, un hackathon, trois mois de prototypage et une finale",
      brief:
        "Réinventer le suivi du patient par la technologie embarquée et renforcer le lien entre patients, soignants et aidants.",
      value:
        "Le jury évaluait l'originalité, la faisabilité et l'impact. L'équipe a choisi la logistique du médicament afin de produire une séquence physique complète et testable.",
    },
    distinctions: [
      {
        title: "Prix du meilleur prototypage",
        issuer: "I-NOVGAMES #4",
        kind: "award",
        note: "Distinction attribuée au démonstrateur présenté par l'équipe M2S.",
        image: {
          src: "/projects/m2s/final/award-2025.webp",
          alt: "Trophée lauréat I-NOVGAMES édition 2025",
          width: 985,
          height: 1920,
        },
      },
    ],
    milestones: [
      {
        date: "23 oct. 2025",
        title: "Cadrage",
        detail: "Idéation, cahier des charges et premier pitch à STMicroelectronics Rousset.",
      },
      {
        date: "Oct. 2025 à jan. 2026",
        title: "Prototype",
        detail: "CAO, firmware, interface, tests LoRa et intégration du parcours.",
      },
      {
        date: "29 jan. 2026",
        title: "Finale",
        detail: "Démonstration devant le jury puis prix du meilleur prototypage.",
      },
    ],
    stakes: [
      "Associer l'opération au bon soignant, au bon patient et à la prescription active.",
      "Empêcher l'ouverture de la trappe lorsque la vérification échoue.",
      "Garder un journal horodaté de la distribution et de son résultat.",
      "Ajouter des bacs sans réécrire l'orchestration centrale.",
    ],
    systemFlow: [
      "Le soignant s'identifie par RFID et sélectionne le patient.",
      "L'interface charge la prescription puis transmet la commande au maître.",
      "Le maître identifie le bac associé au médicament et envoie une commande adressée.",
      "Le contrôleur du bac actionne le moteur puis confirme la fin du mouvement.",
      "Le nœud de vision capture la chambre de contrôle et compare la quantité, la couleur, la forme et le diamètre.",
      "Le maître ouvre la trappe uniquement si le résultat est valide, puis journalise l'événement.",
    ],
    hardware: [
      { label: "STM32F746G-DISCO", value: "Maître, écran tactile, état global et communication avec le serveur" },
      { label: "NUCLEO-F767ZI", value: "Caméra, vérification et commande de trappe" },
      { label: "NUCLEO-G431RB", value: "Contrôle local d'un bac et de son moteur pas à pas" },
      { label: "SX127x", value: "Échanges LoRa entre maître et bacs modulaires" },
      { label: "RFID", value: "Identification du soignant et repérage des bacs" },
    ],
    software: [
      { label: "C et STM32duino", value: "États, actionneurs, communication et traitement des erreurs" },
      { label: "MicroPython", value: "Capture, extraction de caractéristiques et commande de trappe" },
      { label: "Protocole M2S", value: "Adresses, types de messages, CRC16, signal de vie et arrêt d'urgence" },
      { label: "Python Dash", value: "Patients, prescriptions, distributions, stocks et historique" },
      { label: "SQLite", value: "Relations entre soignants, patients, médicaments et journaux" },
    ],
    engineering: [
      {
        title: "Un contrôleur par responsabilité",
        copy:
          "Le maître orchestre, le nœud vision décide de la validation et chaque bac garde son contrôle moteur. Une panne locale reste ainsi identifiable.",
      },
      {
        title: "Une démonstration plus petite que la cible",
        copy:
          "L'architecture cible prévoit un maître F746, un F767 pour la vision et plusieurs G431. La démonstration LoRa a réduit le système à un maître et deux esclaves adressés pour fiabiliser la chaîne physique.",
      },
      {
        title: "Un état sûr par défaut",
        copy:
          "La trappe est verrouillée au démarrage. Un résultat invalide ou un défaut de communication place le maître en erreur et maintient le verrouillage.",
      },
      {
        title: "Une preuve après l'action",
        copy:
          "La base relie prescription et distribution. L'interface permet donc de vérifier ce qui a été demandé et ce qui a été exécuté.",
      },
    ],
    constraints: [
      {
        constraint: "Plusieurs bacs sur une liaison commune",
        response: "Identifiants de nœuds de 0x10 à 0x1F et adresse de diffusion 0xFF.",
        evidence: "Structure M2S_Message_t et codes de commande du protocole public.",
      },
      {
        constraint: "Perte de communication",
        response: "Signal de vie toutes les 500 ms, délai d'expiration vers STATE_ERROR et message d'arrêt d'urgence.",
        evidence: "Boucle du maître et constantes MSG_MASTER_HEARTBEAT et MSG_EMERGENCY_STOP.",
      },
      {
        constraint: "Dose incorrecte",
        response: "Comparaison de la quantité, couleur, forme et taille avant toute libération.",
        evidence: "Fonction verify_pill du nœud vision.",
      },
      {
        constraint: "Traçabilité du prototype",
        response: "Tables séparées pour les prescriptions, les distributions et les journaux.",
        evidence: "Schéma SQLite du logiciel Dash.",
      },
    ],
    codeExamples: [
      {
        title: "Une trame adressée et contrôlée",
        file: "embedded/common/m2s_protocol.h",
        language: "C",
        code: `#define M2S_MSG_START_BYTE   0xAA
#define M2S_MSG_END_BYTE     0x55

typedef struct {
    uint8_t  msg_type;
    uint8_t  source_id;
    uint8_t  dest_id;
    uint16_t data_length;
    uint8_t *payload;
    uint16_t crc16;
} M2S_Message_t;

#define MSG_MASTER_HEARTBEAT 0x90
#define MSG_EMERGENCY_STOP   0xE0`,
        explanation:
          "Le message contient l'origine, la destination et un CRC16. Le même protocole couvre les commandes ciblées, le signal de vie et l'arrêt diffusé à tous les bacs.",
        sourceUrl: github("M2S-Automated-Dispensary", "embedded/common/m2s_protocol.h", "24-L78"),
      },
      {
        title: "La vision décide, le maître autorise",
        file: "embedded/master-node/STM32F746G-DISCO/src/master_main.c",
        language: "C",
        code: `void master_on_motor_complete(void) {
    system_state = STATE_VERIFY;
    master_comm_send_command(
        CMD_VISION_CAPTURE_START, NULL, 0
    );
}

void master_on_vision_result(bool pill_valid) {
    if (pill_valid) {
        system_state = STATE_READY;
        master_comm_send_command(
            CMD_VISION_RELEASE_HATCH, NULL, 0
        );
        master_comm_send_to_server_log(
            current_patient_id, 1
        );
    } else {
        system_state = STATE_ERROR;
        master_comm_send_command(
            CMD_VISION_LOCK_HATCH, NULL, 0
        );
    }
}`,
        explanation:
          "Le mouvement du bac ne suffit pas à terminer la distribution. Une capture est demandée, puis la trappe est ouverte ou verrouillée selon le résultat.",
        sourceUrl: github(
          "M2S-Automated-Dispensary",
          "embedded/master-node/STM32F746G-DISCO/src/master_main.c",
          "176-L199",
        ),
      },
      {
        title: "Quatre critères avant validation",
        file: "embedded/vision-node/NUCLEO-F767ZI/src/vision_main.py",
        language: "MicroPython",
        code: `is_valid = True

if detected['count'] != expected_spec.count:
    is_valid = False

color_diff = sum(
    abs(d - e)
    for d, e in zip(
        detected['color'], expected_spec.color_rgb
    )
)
if color_diff > 60:
    is_valid = False

if detected['shape'] != expected_spec.shape:
    is_valid = False

if abs(detected['diameter']
       - expected_spec.diameter_mm) > 2.0:
    is_valid = False`,
        explanation:
          "La fonction combine quantité, différence de couleur, forme et diamètre. Ces seuils appartiennent au prototype et devraient être calibrés sur un jeu de test représentatif.",
        sourceUrl: github(
          "M2S-Automated-Dispensary",
          "embedded/vision-node/NUCLEO-F767ZI/src/vision_main.py",
          "116-L148",
        ),
      },
    ],
    limits: [
      "Le système est un démonstrateur de concours, pas un dispositif médical certifié.",
      "La vision doit être calibrée et évaluée sur un jeu de données représentatif avant tout usage clinique.",
      "Le remplissage des bacs supposait un environnement propre, un médicament par bac et une lecture RFID correcte.",
      "Le remplacement à chaud, l'alimentation des rails et la tenue de la communication demandent encore des essais prolongés.",
      "Le gain de temps avancé dans le pitch était une hypothèse d'équipe, pas une mesure clinique généralisable.",
    ],
    lessons: [
      "Définir les états, messages et erreurs avant l'intégration évite de coupler toute la mécatronique.",
      "La preuve utile couvre la chaîne entière, de l'identification au journal final.",
      "Distinguer clairement prototype et produit médical rend le dossier plus crédible.",
    ],
    sources: [
      "Cahier des charges, fiche PICSEL et présentation de suivi dans Google Drive",
      "Protocoles, firmwares et documentation du dépôt GitHub",
      "Interface Dash et schéma SQLite du dépôt",
    ],
  },
  {
    slug: "fishdrone",
    title: "FishDrone, drone de surface autonome",
    shortTitle: "FishDrone",
    year: "2024-2025",
    context: "I-NOVGAMES, biodiversité marine",
    role: "Développement embarqué, intégration des capteurs et participation à la conception",
    summary:
      "Un robot marin de surveillance qui patrouille une zone, évite les obstacles et associe une observation visuelle à une position GPS.",
    question:
      "Comment rendre crédible une mission maritime autonome avec des capteurs de courte portée, deux propulseurs et une vision encore expérimentale ?",
    contribution: [
      "Programmation des composants et intégration des capteurs au sein de l'équipe de conception.",
      "Définition de scénarios d'évitement avec plusieurs capteurs de distance.",
      "Participation aux choix d'implantation, aux tests, à l'analyse de stabilité et aux ajustements du prototype.",
      "Préparation de la chaîne de capture et de détection de bateaux.",
    ],
    architecture: [
      { label: "Navigation", value: "Carte Nucleo, GPS, route de points et deux moteurs en commande différentielle" },
      { label: "Évitement", value: "Cinq VL53L1X sur I2C, distances avant, arrière, bâbord, tribord et dessous" },
      { label: "Observation", value: "STM32H7, caméra 5 Mpx et tourelle à servomoteur" },
      { label: "Décision", value: "Détection de bateau, géolocalisation et enregistrement local sur carte SD" },
    ],
    outcome:
      "L'équipe a construit une coque équipée de deux propulseurs, documenté l'intégration des capteurs et présenté la chaîne de navigation et de détection. FishDrone a reçu le Coup de cœur du jury et un Open Badge vérifiable.",
    proof: "Prototype physique et Coup de cœur du jury",
    technologies: ["STM32H7", "VL53L1X", "GPS", "STM32duino", "SciPy", "PyTorch", "OpenCV"],
    repository: "https://github.com/pentademic/Fishdrone",
    cover: {
      src: "/projects/fishdrone/final/prototype-complete.webp",
      alt: "Prototype physique FishDrone avec coque métallique, pont et caisson central",
      caption: "Prototype assemblé avec coque métallique, pont, caisson central et propulsion latérale.",
      width: 750,
      height: 563,
      kind: "photo",
    },
    gallery: [
      {
        src: "/projects/fishdrone/prototype-sketch.webp",
        alt: "Croquis FishDrone avec STM32H7, GPS, ToF, moteurs et caméra",
        caption: "Premier schéma fonctionnel des sous-systèmes embarqués.",
        width: 898,
        height: 1400,
        kind: "document",
      },
      {
        src: "/projects/fishdrone/final/hull-side.webp",
        alt: "Profil latéral du prototype FishDrone avec caisson central et propulseur",
        caption: "Profil de la coque assemblée. Le propulseur caréné reste extérieur au volume principal.",
        width: 750,
        height: 563,
        kind: "photo",
      },
      {
        src: "/projects/fishdrone/final/hackathon-work-session.webp",
        alt: "Équipe FishDrone en séance de travail pendant le hackathon",
        caption: "Séance de cadrage collective avant la répartition entre conception, navigation et reconnaissance.",
        width: 800,
        height: 533,
        kind: "photo",
      },
      {
        src: "/projects/fishdrone/stability-simulation.webp",
        alt: "Courbe simulée de retour à l'équilibre de FishDrone",
        caption: "Modèle simplifié sous SciPy. L'inclinaison simulée passe sous un degré autour de 15 secondes.",
        width: 1240,
        height: 940,
        kind: "document",
      },
      {
        src: "/projects/fishdrone/detection-result.webp",
        alt: "Détection de plusieurs bateaux avec cadres et scores",
        caption: "Essai Faster R-CNN du rapport. Plusieurs bateaux restent manqués.",
        width: 1600,
        height: 1113,
        kind: "document",
      },
      {
        src: "/projects/fishdrone/team-plan.webp",
        alt: "Organisation et calendrier de l'équipe FishDrone",
        caption: "Planning du projet. Adam apparaît dans l'équipe conception et intégration.",
        width: 1000,
        height: 1419,
        kind: "document",
      },
      {
        src: "/projects/fishdrone/hackathon-team.webp",
        alt: "Participants réunis pendant le hackathon I-NOVGAMES biodiversité",
        caption: "Vue d'ensemble du hackathon avec les équipes et les partenaires du concours.",
        width: 1800,
        height: 558,
        kind: "photo",
      },
      {
        src: "/projects/fishdrone/hackathon-presentation.webp",
        alt: "Présentation de FishDrone devant le jury du hackathon",
        caption: "Pitch du concept et discussion des choix devant le jury.",
        width: 800,
        height: 600,
        kind: "photo",
      },
    ],
    physicalBuild: {
      title: "Du cahier des charges à une coque équipée",
      summary:
        "Les rapports décrivent une coque choisie pour rester fabricable dans le budget et le calendrier du concours. Les photographies permettent de suivre sa réalisation : tôle formée et soudée, renforts internes, pont, volume central et deux propulseurs carénés.",
      stages: [
        {
          title: "Cadrer la mission en équipe",
          copy:
            "Le hackathon a servi à définir la mission, répartir navigation et reconnaissance, sélectionner les composants et préparer le cahier des charges.",
          observation:
            "La photo situe Adam avec l'équipe pendant la phase de cadrage organisée par STMicroelectronics.",
          media: {
            src: "/projects/fishdrone/final/hackathon-team-table.webp",
            alt: "Adam Berrada et l'équipe FishDrone réunis autour des ordinateurs au hackathon",
            caption: "Cadrage du projet et répartition des sous-systèmes pendant le hackathon.",
            width: 1536,
            height: 2048,
            kind: "photo",
          },
        },
        {
          title: "Former une coque réalisable",
          copy:
            "Le rapport compare des matériaux plus légers à une solution en tôle, puis retient une fabrication accessible : découpe, pliage et soudure. Le volume ouvert facilite les ajustements pendant l'intégration.",
          observation:
            "Les cordons de soudure, la forme de l'étrave et les flancs métalliques sont visibles sur le prototype.",
          media: {
            src: "/projects/fishdrone/final/hull-integration.webp",
            alt: "Coque métallique FishDrone ouverte pendant l'intégration",
            caption: "Coque nue avec premiers renforts et câblage.",
            width: 750,
            height: 563,
            kind: "photo",
          },
        },
        {
          title: "Organiser le volume intérieur",
          copy:
            "Deux traverses supportent le pont et séparent la structure du faisceau. Cette organisation crée une base pour les cartes, l'alimentation et les capteurs.",
          observation:
            "La photographie atteste l'intégration mécanique et le passage des fils. Elle ne permet pas de conclure à l'étanchéité finale.",
          media: {
            src: "/projects/fishdrone/final/hull-wiring.webp",
            alt: "Intérieur de la coque FishDrone avec traverses et faisceau électrique",
            caption: "Disposition intérieure avant la pose du pont.",
            width: 750,
            height: 563,
            kind: "photo",
          },
        },
        {
          title: "Ajouter le pont et le volume central",
          copy:
            "Le pont ferme la structure supérieure et le caisson central réserve un volume pour l'électronique et les éléments d'observation. Sa position rapproche les masses de l'axe longitudinal.",
          observation:
            "Le caisson est un élément de prototype. Aucune qualification d'étanchéité n'est déduite des photos.",
          media: {
            src: "/projects/fishdrone/final/deck-central-box.webp",
            alt: "Pont du FishDrone avec caisson central",
            caption: "Pont posé et caisson central en cours d'intégration.",
            width: 750,
            height: 1000,
            kind: "photo",
          },
        },
        {
          title: "Installer une propulsion différentielle",
          copy:
            "Deux propulseurs carénés sont placés de part et d'autre de l'arrière. En commandant leurs vitesses séparément, le drone peut avancer, reculer et pivoter sans gouvernail.",
          observation:
            "L'assemblage des deux propulseurs est visible. La poussée, la consommation et l'endurance ne sont pas chiffrées dans les preuves disponibles.",
          media: {
            src: "/projects/fishdrone/final/twin-propulsion.webp",
            alt: "Vue arrière de FishDrone avec deux propulseurs verts carénés",
            caption: "Deux propulseurs latéraux pour la commande différentielle.",
            width: 956,
            height: 1920,
            kind: "photo",
          },
        },
        {
          title: "Assembler le démonstrateur",
          copy:
            "La coque, le pont, le caisson central et les propulseurs forment un démonstrateur physique cohérent avec l'architecture décrite dans le rapport.",
          observation:
            "Le montage final est documenté à terre. Aucun essai prolongé en milieu marin n'apparaît dans les livrables disponibles.",
          media: {
            src: "/projects/fishdrone/final/prototype-complete.webp",
            alt: "FishDrone assemblé vu de trois quarts",
            caption: "Démonstrateur mécanique assemblé avant validation complète.",
            width: 750,
            height: 563,
            kind: "photo",
          },
        },
      ],
      checks: [
        {
          subject: "Coque et structure",
          state: "Assemblage observé",
          evidence: "Photos de la tôle soudée, des traverses, du pont et du caisson central.",
        },
        {
          subject: "Propulsion",
          state: "Intégration observée",
          evidence: "Deux propulseurs carénés montés; aucune courbe de poussée ou d'endurance disponible.",
        },
        {
          subject: "Stabilité",
          state: "Simulation simplifiée",
          evidence: "Retour simulé sous un degré autour de 15 secondes à partir d'une inclinaison initiale de 10 degrés.",
        },
        {
          subject: "Étanchéité",
          state: "À valider",
          evidence: "Aucun protocole d'immersion ou résultat d'essai prolongé fourni.",
        },
        {
          subject: "Mission autonome",
          state: "Sous-systèmes séparés",
          evidence: "Firmware de navigation et d'évitement documenté ; vision et alerte encore incomplètes sur la cible.",
        },
      ],
    },
    evidenceSource:
      "Rapport, cahier des charges, note d'intégration ToF et support d'oral Drive, comparés au firmware public et au badge LinkedIn.",
    frame: {
      label: "I-NOVGAMES 2024-2025",
      organizer:
        "STMicroelectronics, avec un jury cité sur LinkedIn comprenant l'Institut Océanographique Paul Ricard, la Région Sud et les partenaires du concours",
      format: "Hackathon, cahier des charges, développement, pitch de cinq minutes et finale",
      brief:
        "Concevoir un objet connecté fonctionnel sur STM32 pour la biodiversité. F.I.S.H D.R.O.N.E désigne une mission de surveillance des pratiques de pêche illégale.",
      value:
        "Le concours demandait une preuve matérielle, des choix de composants justifiés et une présentation des arbitrages devant des spécialistes de l'industrie et de la biodiversité.",
    },
    distinctions: [
      {
        title: "Coup de cœur du jury",
        issuer: "I-NOVGAMES",
        kind: "award",
        note: "Récompense attribuée au projet FishDrone lors de la finale.",
      },
      {
        title: "Open Badge I-NOVGAMES 2025",
        issuer: "Open Badge Factory",
        kind: "badge",
        note:
          "Certification publiée sur LinkedIn pour le projet associant systèmes embarqués, intelligence artificielle et biodiversité marine.",
        image: {
          src: "/projects/fishdrone/inovgames-open-badge.webp",
          alt: "Badge I-NOVGAMES Innovez pour la biodiversité",
          width: 480,
          height: 480,
        },
        credentialUrl:
          "https://openbadgefactory.com/v1/assertion/d600bc4138e7946adeb9e9bdc6b86339f2577781.html",
      },
      {
        title: "2e au classement provisoire",
        issuer: "Hackathon de Gardanne",
        kind: "milestone",
        note: "Position obtenue après le premier pitch, avant la phase de développement.",
      },
    ],
    milestones: [
      {
        date: "24 oct. 2024",
        title: "Hackathon",
        detail: "Cadrage biodiversité, cahier des charges et pitch à Gardanne.",
      },
      {
        date: "Oct. 2024 à jan. 2025",
        title: "Conception",
        detail: "Coque, stabilité, ToF, navigation, caméra et première détection.",
      },
      {
        date: "30 jan. 2025",
        title: "Finale",
        detail: "Présentation à l'ENSAM et Coup de cœur du jury.",
      },
    ],
    stakes: [
      "Patrouiller une zone définie sans téléopération permanente.",
      "Donner la priorité à l'évitement sur la navigation planifiée.",
      "Associer une image et des coordonnées GPS à une observation.",
      "Limiter l'activité des moteurs et de la caméra en absence d'événement.",
    ],
    systemFlow: [
      "Le GPS met à jour la position et le contrôleur suit une route de points.",
      "Les cinq ToF sont lus en continu pour surveiller les zones proches.",
      "Un obstacle avant force une marche arrière puis un virage vers le côté le plus dégagé.",
      "Le signal d'observation oriente la tourelle caméra selon le cap du drone.",
      "La caméra capture et le modèle cherche un bateau dans la scène.",
      "Une détection pertinente est associée au GPS puis conservée pour l'alerte ou l'analyse.",
    ],
    hardware: [
      { label: "Coque en tôle", value: "Structure formée et soudée, retenue pour sa fabricabilité dans le calendrier du concours" },
      { label: "Pont et caisson", value: "Support supérieur et volume central pour organiser l'intégration" },
      { label: "STM32H7", value: "Calcul central et cible envisagée pour l'inférence" },
      { label: "Carte Nucleo", value: "Navigation, lecture des capteurs et commande des moteurs" },
      { label: "5 x VL53L1X", value: "Mesure de distance multi-directionnelle sur un bus I2C" },
      { label: "TESEO-LIV3F", value: "Position, route et cap GPS" },
      { label: "Caméra 5 Mpx", value: "Capture des scènes maritimes" },
      { label: "MG996R", value: "Orientation mécanique de la caméra et du capteur" },
      { label: "Deux propulseurs carénés", value: "Propulsion et changement de cap par différence de vitesse" },
    ],
    software: [
      { label: "STM32duino", value: "Drivers, boucle mission, navigation, évitement et énergie" },
      { label: "I2C", value: "Bus des cinq ToF avec adresses réaffectées au démarrage" },
      { label: "UART", value: "GPS, télémétrie et sous-système d'observation simulé" },
      { label: "SciPy", value: "Simulation simplifiée du retour à l'équilibre" },
      { label: "Faster R-CNN", value: "Premier détecteur de bateaux testé sur images" },
      { label: "OpenCV", value: "Lecture et visualisation des résultats" },
    ],
    engineering: [
      {
        title: "L'évitement prend la main",
        copy:
          "La logique d'évitement devient propriétaire des moteurs tant qu'un obstacle est traité. La navigation ne reprend qu'après retour à l'état dégagé.",
      },
      {
        title: "Cinq capteurs, un seul bus",
        copy:
          "Tous les VL53L1X démarrent à la même adresse. Les broches XSHUT permettent de les réveiller un par un et de leur attribuer une adresse unique.",
      },
      {
        title: "Un radar simulé pour tester la mission",
        copy:
          "Le firmware public reçoit une trame structurée par UART pour simuler l'observation longue portée. Cette couche permet de tester la chaîne logique sans prétendre reproduire un radar maritime.",
      },
      {
        title: "Navigation et vision testées séparément",
        copy:
          "Le projet a isolé la mobilité et la reconnaissance. Cette séparation permet de valider l'évitement même lorsque l'IA n'est pas encore portée sur STM32H7.",
      },
      {
        title: "Construire avec les moyens disponibles",
        copy:
          "La tôle a été retenue malgré une masse supérieure aux composites, car l'équipe pouvait la découper, la plier et la souder dans le temps du concours. Le pont et le caisson central ont ensuite servi de support d'intégration.",
      },
    ],
    constraints: [
      {
        constraint: "Cinq ToF avec l'adresse usine 0x29",
        response: "Arrêt de tous les capteurs, réveil séquentiel puis réattribution d'adresse.",
        evidence: "Fonction tof_init du firmware multi-capteurs.",
      },
      {
        constraint: "Obstacle prioritaire",
        response: "Machine à états non bloquante : recul, virage, attente et nouvelle mesure.",
        evidence: "Fonction avoidance_update.",
      },
      {
        constraint: "Deux moteurs seulement",
        response: "Commande différentielle pour avancer, reculer et pivoter.",
        evidence: "MotorCommand et états AV_BACKING et AV_TURNING.",
      },
      {
        constraint: "Coque fabricable dans le délai",
        response: "Tôle formée et soudée, pont rapporté et caisson central simple.",
        evidence: "Rapport de conception et six vues de la construction physique.",
      },
      {
        constraint: "Stabilité d'une coque chargée",
        response: "Répartition centrale des volumes et première simulation de retour à l'équilibre.",
        evidence: "Position du caisson sur les photos et courbe SciPy du rapport.",
      },
      {
        constraint: "Vision non finalisée sur cible",
        response: "Chaînes navigation et reconnaissance découplées pour garder des essais utiles.",
        evidence: "Rapport Drive et modules séparés du firmware.",
      },
    ],
    codeExamples: [
      {
        title: "Réaffecter cinq adresses I2C",
        file: "firmware/tof/tof_multi.ino",
        language: "C++",
        code: `for (int i = 0; i < TOF_COUNT; i++) {
    pinMode(XSDN_PINS[i], OUTPUT);
    digitalWrite(XSDN_PINS[i], LOW);
}
delay(10);

for (int i = 0; i < TOF_COUNT; i++) {
    digitalWrite(XSDN_PINS[i], HIGH);
    delay(10);

    if (!sensors[i].init()) return false;
    if (ADDRESSES[i] != 0x29) {
        sensors[i].setAddress(ADDRESSES[i]);
    }

    sensors[i].setDistanceMode(VL53L1X::Long);
    sensors[i].startContinuous(33);
}`,
        explanation:
          "Les capteurs partagent leur adresse au démarrage. Le réveil séquentiel rend le bus multi-capteurs exploitable avant la lecture continue.",
        sourceUrl: github("Fishdrone", "firmware/tof/tof_multi.ino", "56-L86"),
      },
      {
        title: "Évitement non bloquant",
        file: "firmware/avoidance/avoidance.ino",
        language: "C++",
        code: `case AV_BACKING:
    cmd.left_speed =
        -(int16_t)(MOTOR_CRUISE_SPEED * 0.7f);
    cmd.right_speed =
        -(int16_t)(MOTOR_CRUISE_SPEED * 0.7f);
    nav_apply_command(&cmd);

    if (state_elapsed(AV_BACK_DURATION_MS)) {
        enter_state(AV_TURNING);
    }
    break;

case AV_TURNING: {
    bool turn_right =
        readings->right_mm >= readings->left_mm;
    cmd.left_speed = turn_right
        ? MOTOR_CRUISE_SPEED
        : -MOTOR_CRUISE_SPEED;
    cmd.right_speed = -cmd.left_speed;
    nav_apply_command(&cmd);
}`,
        explanation:
          "La boucle n'attend pas dans une séquence longue. Elle conserve un état, mesure le temps écoulé et choisit le côté offrant le plus d'espace.",
        sourceUrl: github("Fishdrone", "firmware/avoidance/avoidance.ino", "82-L116"),
      },
      {
        title: "Ordonnancer toute la mission",
        file: "firmware/main/fishdrone_main.ino",
        language: "C++",
        code: `gps_update();
radar_update();
tof_read_all(&g_tof);
telemetry_receive();

power_update(radar_trigger, tof_trigger);
g_mode = power_get_mode();

avoidance_update(&g_tof, &g_mode);

if (g_mode != MODE_AVOID) {
    camera_update();
    handle_alert();
}

if (!avoidance_is_active()
    && g_mode != MODE_AVOID) {
    nav_update(fix);
}

telemetry_heartbeat(fix, g_mode);`,
        explanation:
          "L'ordre de la boucle matérialise les priorités: capteurs, énergie, évitement, observation, navigation puis télémétrie.",
        sourceUrl: github("Fishdrone", "firmware/main/fishdrone_main.ino", "192-L236"),
      },
    ],
    limits: [
      "Le radar est simulé. Les ToF de courte portée ne représentent pas une perception maritime opérationnelle.",
      "Faster R-CNN détecte plusieurs bateaux sur l'exemple du rapport, mais en manque d'autres faute de données adaptées.",
      "Le retour sous un degré autour de 15 secondes vient d'un modèle simplifié, pas d'un essai sur l'eau.",
      "Les photos prouvent l'assemblage de la coque et de la propulsion, pas l'étanchéité, la poussée ou l'endurance.",
      "Aucun essai prolongé en bassin ou en mer n'est documenté dans les livrables disponibles.",
      "Le portage de la vision sur STM32H7 et la communication vers une autorité restaient à finaliser.",
    ],
    lessons: [
      "Une priorité explicite dans la boucle de contrôle évite que la navigation concurrence la sécurité.",
      "L'adressage I2C doit être conçu avant de multiplier des capteurs identiques.",
      "Séparer simulation, essai au banc et capacité réelle évite de surévaluer le prototype.",
    ],
    sources: [
      "Rapport, cahier des charges, note ToF et support d'oral dans Google Drive",
      "Architecture, câblage et firmware du dépôt GitHub Fishdrone",
      "Post LinkedIn FishDrone et assertion Open Badge I-NOVGAMES 2025",
    ],
  },
  {
    slug: "boatvision",
    title: "BoatVision, détection et OCR embarqués",
    shortTitle: "BoatVision",
    year: "2025",
    context: "Projet SISN, Centrale Méditerranée",
    role: "Développement IA et comparaison d'architectures",
    summary:
      "Une étude d'IA embarquée qui compare un réseau MobileNetV2 multitâche à une chaîne YOLOv5n puis CRNN pour détecter un bateau et lire son nom.",
    question:
      "Quelle architecture offre le chemin le plus crédible vers un STM32H747 contraint en mémoire : un backbone partagé ou deux modèles spécialisés ?",
    contribution: [
      "Conception de MultiTaskNet avec backbone MobileNetV2 et deux têtes.",
      "Mise en place de la chaîne YOLOv5n, rognage de la détection et OCR CRNN avec CTC.",
      "Définition des critères de comparaison : IoU, correspondance exacte, distance de Levenshtein, latence et mémoire.",
      "Analyse des limites de données, d'entraînement, d'export ONNX et de portage X-Cube-AI.",
    ],
    architecture: [
      { label: "Cible", value: "STM32H747I-DISCO, deux cœurs Cortex-M7/M4 et aucun GPU" },
      { label: "Option partagée", value: "MobileNetV2, une extraction de caractéristiques, une tête de localisation et une tête de reconnaissance de caractères" },
      { label: "Option spécialisée", value: "YOLOv5n pour localiser, puis CRNN bidirectionnel et CTC pour lire" },
      { label: "Déploiement visé", value: "Export ONNX, quantification INT8 et génération X-Cube-AI" },
    ],
    outcome:
      "YOLOv5n fournit les résultats qualitatifs les plus convaincants du dossier. L'OCR reste sous-entraîné, MultiTaskNet n'a pas terminé son entraînement et le portage complet sur STM32 reste ouvert.",
    proof: "Comparaison documentée et limites explicites",
    technologies: ["PyTorch", "MobileNetV2", "YOLOv5n", "CRNN", "CTC", "ONNX", "X-Cube-AI"],
    repository: "https://github.com/pentademic/FISH-DRONE-EdgeAI",
    cover: {
      src: "/projects/boatvision/detection-grid.webp",
      alt: "Grille de navires détectés par YOLOv5n dans BoatVision",
      caption: "Échantillon des détections présenté dans le dossier final.",
      width: 1400,
      height: 1400,
      kind: "document",
    },
    gallery: [
      {
        src: "/projects/boatvision/architectures-compared.webp",
        alt: "Comparaison entre architecture multitâche et chaîne spécialisée BoatVision",
        caption: "Backbone partagé face à une chaîne détection puis OCR.",
        width: 1600,
        height: 836,
        kind: "slide",
      },
      {
        src: "/projects/boatvision/detection-grid.webp",
        alt: "Résultats de détection de navires BoatVision",
        caption: "Résultats qualitatifs du détecteur spécialisé.",
        width: 1400,
        height: 1400,
        kind: "document",
      },
      {
        src: "/projects/boatvision/confusion-matrix.webp",
        alt: "Matrice de confusion du modèle BoatVision",
        caption: "Matrice de confusion issue des essais YOLOv5n.",
        width: 1400,
        height: 1313,
        kind: "document",
      },
      {
        src: "/projects/boatvision/precision-curve.webp",
        alt: "Courbe de précision BoatVision selon le seuil de confiance",
        caption: "Effet du seuil de confiance sur la précision.",
        width: 1180,
        height: 801,
        kind: "document",
      },
      {
        src: "/projects/boatvision/ocr-limit.webp",
        alt: "Exemples de lectures OCR incorrectes sur des noms de bateaux",
        caption: "Les erreurs OCR sont conservées pour montrer la limite du modèle et des données.",
        width: 1600,
        height: 964,
        kind: "slide",
      },
    ],
    evidenceSource:
      "Rapport et présentation Drive, recoupés avec les classes PyTorch, le pipeline et la Model Card du dépôt public.",
    frame: {
      label: "Projet SISN 2025",
      organizer: "Module Systèmes intelligents et systèmes numériques, Centrale Méditerranée",
      format: "Étude, développement de modèles, entraînement, comparaison et préparation au déploiement embarqué",
      brief:
        "Prolonger FishDrone avec une IA capable de localiser un bateau et de lire son nom sur une cible STM32H747I-DISCO.",
      value:
        "Le projet porte sur un choix d'architecture conditionné par la mémoire, la latence et les annotations disponibles. Il montre aussi l'écart entre un notebook fonctionnel et un modèle réellement déployable.",
    },
    distinctions: [],
    stakes: [
      "Localiser le bateau avant de chercher une zone de texte.",
      "Lire une séquence variable malgré angles, flou, ombres et polices de coque.",
      "Respecter une enveloppe annoncée proche de 2 Mo de flash et 1 Mo de RAM.",
      "Choisir une architecture entraînable avec les annotations disponibles.",
    ],
    systemFlow: [
      "L'image entre dans YOLOv5n ou dans le backbone MobileNetV2 partagé.",
      "Dans la chaîne spécialisée, YOLO retourne une boîte et un score de confiance.",
      "La région détectée est rognée, passée en niveaux de gris, redimensionnée et complétée à largeur fixe.",
      "Le CNN du CRNN extrait une séquence de caractéristiques.",
      "Deux LSTM bidirectionnels modélisent cette séquence, puis CTC la convertit en caractères.",
      "Le chemin de déploiement prévu passe par ONNX, INT8 et X-Cube-AI.",
    ],
    hardware: [
      { label: "STM32H747I-DISCO", value: "Cible finale à double cœur Cortex-M7/M4" },
      { label: "Flash", value: "Contrainte de projet annoncée autour de 2 Mo" },
      { label: "RAM", value: "Contrainte de projet annoncée autour de 1 Mo" },
      { label: "Calcul", value: "Jusqu'à 480 MHz, sans GPU dédié" },
      { label: "Caméra", value: "Source d'images prévue sur le drone de surface" },
    ],
    software: [
      { label: "MobileNetV2", value: "Backbone compact pour partager les caractéristiques" },
      { label: "YOLOv5n", value: "Détecteur spécialisé compact" },
      { label: "CRNN", value: "Cinq blocs convolutifs, deux BiLSTM et une sortie de caractères" },
      { label: "CTC", value: "Apprentissage et décodage de séquences de longueur variable" },
      { label: "PyTorch", value: "Définition, entraînement et inférence" },
      { label: "ONNX et X-Cube-AI", value: "Chemin prévu vers le microcontrôleur" },
    ],
    engineering: [
      {
        title: "Partager les caractéristiques",
        copy:
          "MultiTaskNet réduit la duplication du calcul avec un seul MobileNetV2 et deux têtes. Ce choix réclame toutefois des images annotées à la fois pour la boîte et le texte.",
      },
      {
        title: "Spécialiser les étapes",
        copy:
          "YOLOv5n et CRNN peuvent être entraînés sur des jeux distincts. Une erreur OCR reste séparable d'une erreur de localisation.",
      },
      {
        title: "Conserver l'échec visible",
        copy:
          "Le pipeline public lève explicitement NotImplementedError pour le mode multitâche non entraîné. Le portfolio conserve cette information au lieu d'inventer une performance.",
      },
      {
        title: "Préparer le portage tôt",
        copy:
          "Les opérateurs ONNX, la taille des activations et la quantification doivent influencer l'architecture avant la fin de l'entraînement.",
      },
    ],
    constraints: [
      {
        constraint: "Annotations incompatibles",
        response: "Comparer un modèle partagé à une chaîne spécialisée qui accepte deux jeux de données.",
        evidence: "Rapport, Model Card et classes MultiTaskNet et CRNN.",
      },
      {
        constraint: "Séquence de texte variable",
        response: "CNN, deux LSTM bidirectionnels et décodage CTC.",
        evidence: "Classe CRNN et fonction decode_ctc.",
      },
      {
        constraint: "Mémoire du STM32H747",
        response: "Backbone MobileNetV2 ou YOLO nano, puis ONNX et quantification INT8 envisagés.",
        evidence: "Architecture cible documentée, portage encore non finalisé.",
      },
      {
        constraint: "Résultats OCR faibles",
        response: "Conserver les erreurs, séparer le diagnostic et demander plus de données maritimes.",
        evidence: "Captures OCR du rapport et limites de la Model Card.",
      },
    ],
    codeExamples: [
      {
        title: "Un backbone, deux sorties",
        file: "src/fishdrone_ai/models.py",
        language: "Python / PyTorch",
        code: `mobilenet = models.mobilenet_v2(
    pretrained=pretrained
)
self.backbone = mobilenet.features

self.head_detect = nn.Sequential(
    nn.AdaptiveAvgPool2d((1, 1)),
    nn.Flatten(),
    nn.Linear(1280, 512),
    nn.ReLU(inplace=True),
    nn.Linear(512, 5),
)

features = self.backbone(x)
detections = self.head_detect(features)
ocr_logits = self.head_ocr(features)
return detections, ocr_logits`,
        explanation:
          "MultiTaskNet mutualise MobileNetV2 puis sépare localisation et classification de caractères. Le gain potentiel de calcul dépend d'un entraînement multitâche qui n'a pas été finalisé.",
        sourceUrl: github("FISH-DRONE-EdgeAI", "src/fishdrone_ai/models.py", "38-L79"),
      },
      {
        title: "Une séquence pour le décodage CTC",
        file: "src/fishdrone_ai/models.py",
        language: "Python / PyTorch",
        code: `conv_features = self.cnn(x)
conv_features = conv_features.squeeze(2)
conv_features = conv_features.permute(0, 2, 1)

rnn1_out, _ = self.rnn1(conv_features)
rnn2_out, _ = self.rnn2(rnn1_out)

output = self.linear(rnn2_out)
output = output.permute(1, 0, 2)
return output`,
        explanation:
          "Le CNN devient une séquence le long de la largeur de l'image. Deux BiLSTM modélisent le contexte avant la sortie au format attendu par CTC.",
        sourceUrl: github("FISH-DRONE-EdgeAI", "src/fishdrone_ai/models.py", "161-L181"),
      },
      {
        title: "Détecter, rogner, puis lire",
        file: "src/fishdrone_ai/pipeline.py",
        language: "Python",
        code: `detection_results = self.detector.detect(
    str(image_path)
)
boxes = detection_results['boxes']

if extract_vessel_ids and boxes:
    vessel_ids = self._extract_vessel_ids(
        image_path, boxes
    )
else:
    vessel_ids = [None] * len(boxes)

for box, vessel_id in zip(boxes, vessel_ids):
    detection = {
        'box': box['xyxy'],
        'confidence': box['confidence'],
    }`,
        explanation:
          "La chaîne spécialisée rend chaque étape inspectable. Une boîte peut être évaluée indépendamment du texte lu sur la région rognée.",
        sourceUrl: github("FISH-DRONE-EdgeAI", "src/fishdrone_ai/pipeline.py", "95-L125"),
      },
    ],
    limits: [
      "Aucun jeu du dossier n'annotait simultanément la boîte du bateau et son nom.",
      "L'OCR synthétique était sous-entraîné et produisait des chaînes incorrectes sur les images maritimes.",
      "Les sessions Colab limitaient la durée et la profondeur des essais.",
      "La conversion ONNX, la quantification et l'intégration X-Cube-AI n'étaient pas finalisées.",
      "Les métriques du README ne sont pas reprises comme résultats car les journaux correspondants ne sont pas publics.",
    ],
    lessons: [
      "La disponibilité des annotations peut décider de l'architecture avant la théorie.",
      "Une chaîne spécialisée facilite le diagnostic lorsque la détection avance plus vite que l'OCR.",
      "Un résultat obtenu dans un notebook ne prouve pas encore la compatibilité avec la mémoire et les opérateurs d'un microcontrôleur.",
    ],
    sources: [
      "Rapport BoatVision et présentation Projet SISN 2025 dans Google Drive",
      "README, Model Card, classes PyTorch et pipeline du dépôt GitHub",
      "Figures d'évaluation et exemples OCR produits pendant le projet",
    ],
  },
];

const prefixInternalPath = (path: string) => {
  if (!path.startsWith("/")) return path;
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
};

const isGitHubPages = process.env.NEXT_PUBLIC_BASE_PATH === "/portfolio";

export const featuredProjects: Project[] = rawProjects.map((project) => ({
  ...project,
  cover: { ...project.cover, src: prefixInternalPath(project.cover.src) },
  gallery: project.gallery.map((media) => ({
    ...media,
    src: prefixInternalPath(media.src),
  })),
  physicalBuild: project.physicalBuild
    ? {
        ...project.physicalBuild,
        stages: project.physicalBuild.stages.map((stage) => ({
          ...stage,
          media: { ...stage.media, src: prefixInternalPath(stage.media.src) },
        })),
      }
    : undefined,
  video: project.video
    ? {
        ...project.video,
        src: prefixInternalPath(project.video.src),
        poster: prefixInternalPath(project.video.poster),
      }
    : undefined,
  documents: isGitHubPages
    ? undefined
    : project.documents?.map((document) => ({
        ...document,
        href: prefixInternalPath(document.href),
      })),
  distinctions: project.distinctions.map((distinction) => ({
    ...distinction,
    image: distinction.image
      ? { ...distinction.image, src: prefixInternalPath(distinction.image.src) }
      : undefined,
  })),
}));

export function getProject(slug: string) {
  return featuredProjects.find((project) => project.slug === slug);
}
