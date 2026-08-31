/* eslint-disable react/no-unescaped-entities, @next/next/no-img-element */
import { featuredProjects } from "./projects";
import { sitePath } from "./site-config";

const expertise = [
  {
    title: "Firmware embarqué",
    tools: "C/C++ · STM32 · MicroPython",
    copy: "Machines à états, pilotes, protocoles de communication et diagnostic directement sur la cible.",
  },
  {
    title: "Électronique et capteurs",
    tools: "I²C · UART · SPI · RFID · LoRa",
    copy: "Choix des composants, câblage, pilotage des actionneurs et validation sur banc d'essai.",
  },
  {
    title: "IA en périphérie",
    tools: "PyTorch · YOLO · OpenCV · ONNX",
    copy: "Détection, reconnaissance de caractères et préparation au déploiement sur des systèmes contraints.",
  },
  {
    title: "IoT et données",
    tools: "Python · MQTT · PostgreSQL · Docker",
    copy: "Collecte de télémétrie, stockage, supervision et interfaces reliées aux équipements de terrain.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="identity" href="#top" aria-label="Revenir en haut de la page">
          <span className="identity-mark" aria-hidden="true">AB</span>
          <span>Adam Berrada</span>
        </a>
        <nav aria-label="Navigation principale">
          <a href="#experience">Expérience</a>
          <a href="#projets">Projets</a>
          <a href="#expertise">Compétences</a>
          <a href="#profil">Profil</a>
          <a className="topbar-cta" href="https://www.linkedin.com/in/adamberrada" target="_blank" rel="noreferrer">Me contacter</a>
        </nav>
      </header>

      <section className="intro" id="top">
        <div className="intro-status"><span>Portfolio 2026</span><span>Marseille, France</span></div>
        <div className="intro-grid">
          <div className="intro-title">
            <p className="eyebrow">Ingénieur systèmes embarqués et IoT</p>
            <h1>Je relie le matériel, le code et la décision.</h1>
          </div>
          <div className="intro-copy">
            <p>Je conçois des systèmes complets, du capteur au service de données. Ce portfolio réunit une expérience professionnelle en MedTech et trois études de cas techniques documentées.</p>
            <div className="intro-actions">
              <a className="button button-primary" href="#projets">Découvrir les projets</a>
              <a className="text-link" href="https://github.com/pentademic" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            </div>
            <p className="availability"><span aria-hidden="true" />Disponible à partir d'octobre 2026, en France et à l'international.</p>
          </div>
        </div>
        <dl className="hero-facts" aria-label="Domaines principaux">
          <div><dt>01</dt><dd>Firmware STM32</dd></div>
          <div><dt>02</dt><dd>Robotique mobile</dd></div>
          <div><dt>03</dt><dd>IA embarquée</dd></div>
          <div><dt>04</dt><dd>IoT industriel</dd></div>
        </dl>
      </section>

      <section className="professional-feature" id="experience" aria-labelledby="experience-title">
        <div className="professional-visual">
          <img
            src={sitePath("/experience/locacoeur/guardian-1.png")}
            alt="Housse intelligente Guardian de NYXeos pour défibrillateur"
            width="390"
            height="420"
            loading="eager"
          />
          <span>Expérience professionnelle</span>
        </div>
        <div className="professional-copy">
          <p className="eyebrow">Locacoeur · MedTech · Aix-en-Provence</p>
          <h2 id="experience-title">Des outils numériques pour des équipements médicaux connectés.</h2>
          <p className="professional-lead">
            En alternance chez Locacoeur, je participe au développement de services backend, de flux de télémétrie IoT et d'outils métiers liés au suivi d'équipements d'urgence.
          </p>
          <p>
            NYXeos Guardian fournit le contexte produit public de cette activité. La solution a été présentée à VivaTech 2026, où Locacoeur m'a identifié parmi les membres présents sur le salon. Les informations techniques propriétaires restent volontairement exclues du portfolio.
          </p>
          <dl className="professional-facts">
            <div><dt>Responsabilités</dt><dd>Backend, télémétrie IoT, automatisation et outils internes</dd></div>
            <div><dt>Contexte public</dt><dd>NYXeos Guardian et VivaTech 2026</dd></div>
            <div><dt>Confidentialité</dt><dd>Architecture détaillée et code de production non publiés</dd></div>
          </dl>
          <a className="button button-primary" href={sitePath("/experience/locacoeur/")}>Découvrir l'expérience Locacoeur</a>
        </div>
      </section>

      <section className="project-index" id="projets" aria-labelledby="projects-title">
        <header className="section-heading">
          <div><p className="eyebrow">Projets sélectionnés</p><h2 id="projects-title">Des prototypes expliqués par leurs preuves.</h2></div>
          <p>Chaque dossier relie le besoin initial, l'architecture, la construction, le code source et les résultats disponibles.</p>
        </header>
        <div className="project-grid">
          {featuredProjects.map((project, index) => (
            <article className="project-card" key={project.slug}>
              <a className="project-card-media" href={sitePath(`/projects/${project.slug}/`)} aria-label={`Découvrir ${project.title}`}>
                <img src={project.cover.src} alt={project.cover.alt} width={project.cover.width} height={project.cover.height} loading={index === 0 ? "eager" : "lazy"} decoding="async" />
                <span className="project-number">0{index + 1}</span><span className="project-year">{project.year}</span>
              </a>
              <div className="project-card-body">
                <p className="project-context">{project.context}</p>
                <h3><a href={sitePath(`/projects/${project.slug}/`)}>{project.title}</a></h3>
                <p className="project-summary">{project.summary}</p>
                <dl className="project-facts">
                  <div><dt>Contribution</dt><dd>{project.role}</dd></div>
                  <div><dt>Résultat</dt><dd>{project.proof}</dd></div>
                </dl>
                <a className="project-link" href={sitePath(`/projects/${project.slug}/`)}>Lire l'étude de cas <span aria-hidden="true">↗</span></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="recognition-strip" aria-label="Résultats marquants">
        <div><strong>2</strong><span>prototypes récompensés lors d'I-NOVGAMES</span></div>
        <div><strong>4</strong><span>études de cas professionnelles et techniques</span></div>
        <div><strong>Du banc au cloud</strong><span>électronique, firmware, IA et données</span></div>
      </section>

      <section className="expertise-section" id="expertise" aria-labelledby="expertise-title">
        <header className="section-heading">
          <div><p className="eyebrow">Compétences appliquées</p><h2 id="expertise-title">Une pratique à l'interface du matériel et du logiciel.</h2></div>
          <p>Des compétences mises en œuvre dans les prototypes présentés, avec du code, des schémas et des résultats consultables.</p>
        </header>
        <div className="expertise-grid">
          {expertise.map((item, index) => (
            <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p className="expertise-tools">{item.tools}</p><p>{item.copy}</p></article>
          ))}
        </div>
      </section>

      <section className="profile-section" id="profil">
        <div className="profile-heading"><p className="eyebrow">Profil</p><h2>Élève ingénieur, constructeur de systèmes concrets.</h2></div>
        <div className="profile-copy">
          <p className="profile-lead">En dernière année à Centrale Méditerranée, je travaille sur le firmware STM32, l'intégration de capteurs, la robotique, l'IoT et l'IA en périphérie.</p>
          <p>Chez Locacoeur, je développe également des services backend et des flux de télémétrie pour des équipements MedTech. Le code de production étant confidentiel, seules mes responsabilités générales sont présentées ici.</p>
          <dl className="profile-facts">
            <div><dt>Objectif</dt><dd>Premier CDI en systèmes embarqués, IoT ou robotique</dd></div>
            <div><dt>Disponibilité</dt><dd>Octobre 2026</dd></div>
            <div><dt>Langues</dt><dd>Français, anglais (IELTS 8.0) et arabe</dd></div>
            <div><dt>Engagement</dt><dd>Vice-président et directeur technique du Fablab Marseille</dd></div>
          </dl>
        </div>
      </section>

      <section className="contact-band" id="contact">
        <div><p className="eyebrow">Contact</p><h2>Un projet embarqué à construire&nbsp;?</h2></div>
        <div className="contact-copy">
          <p>Je recherche un premier poste en systèmes embarqués, IoT ou robotique à partir d'octobre 2026.</p>
          <div className="contact-actions">
            <a className="button button-light" href="https://www.linkedin.com/in/adamberrada" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="button button-outline" href="https://github.com/pentademic" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </section>

      <footer className="site-footer"><p>Adam Berrada · Portfolio d'ingénierie</p><p>Dernière mise à jour : 2026</p></footer>
    </main>
  );
}
