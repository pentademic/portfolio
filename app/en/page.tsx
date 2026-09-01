/* eslint-disable react/no-unescaped-entities, @next/next/no-img-element */
import type { Metadata } from "next";
import { englishProjects } from "../projects-en";
import { sitePath } from "../site-config";
import { LanguageSwitcher } from "../language-switcher";

export const metadata: Metadata = {
  title: "Embedded systems, robotics and edge AI",
  description: "Adam Berrada's engineering portfolio: STM32 firmware, robotics, edge AI and connected systems.",
  keywords: ["Adam Berrada", "embedded systems", "STM32", "edge AI", "IoT", "robotics"],
  openGraph: {
    title: "Adam Berrada | Embedded systems, robotics and edge AI",
    description: "Architecture, code and tests from STM32, robotics, edge AI and IoT projects.",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adam Berrada | Embedded systems, robotics and edge AI",
    description: "Architecture, code and tests from STM32, robotics, edge AI and IoT projects.",
  },
  alternates: { canonical: sitePath("/en/"), languages: { fr: sitePath("/"), en: sitePath("/en/") } },
};

const expertise = [
  { title: "Embedded firmware", tools: "C/C++ · STM32 · MicroPython", copy: "State machines, drivers, communication protocols and target-side diagnostics." },
  { title: "Electronics and sensors", tools: "I²C · UART · SPI · RFID · LoRa", copy: "Component selection, wiring, actuator control and bench validation." },
  { title: "Edge AI", tools: "PyTorch · YOLO · OpenCV · ONNX", copy: "Detection, text recognition and preparation for constrained deployment." },
  { title: "IoT and data", tools: "Python · MQTT · PostgreSQL · Docker", copy: "Telemetry collection, storage, monitoring and interfaces connected to field devices." },
];

export default function EnglishHome() {
  return (
    <main>
      <header className="topbar">
        <a className="identity" href="#top" aria-label="Back to the top">
          <span className="identity-mark" aria-hidden="true">AB</span><span>Adam Berrada</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#expertise">Skills</a><a href="#profile">Profile</a>
          <a className="topbar-cta" href="https://www.linkedin.com/in/adamberrada" target="_blank" rel="noreferrer">Contact me</a>
          <LanguageSwitcher locale="en" alternateHref={sitePath("/")} />
        </nav>
      </header>

      <section className="intro" id="top">
        <div className="intro-status"><span>Portfolio 2026</span><span>Marseille, France</span></div>
        <div className="intro-grid">
          <div className="intro-title"><p className="eyebrow">Embedded Systems and IoT Engineer</p><h1>I connect hardware, code and decisions.</h1></div>
          <div className="intro-copy">
            <p>I design complete systems, from sensors to data services. This portfolio brings together professional MedTech experience and three documented engineering case studies.</p>
            <div className="intro-actions">
              <a className="button button-primary" href="#projects">Explore the projects</a>
              <a className="text-link" href="https://github.com/pentademic" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            </div>
            <p className="availability"><span aria-hidden="true" />Available from October 2026 in France and internationally.</p>
          </div>
        </div>
        <dl className="hero-facts" aria-label="Core fields">
          <div><dt>01</dt><dd>STM32 firmware</dd></div><div><dt>02</dt><dd>Mobile robotics</dd></div><div><dt>03</dt><dd>Edge AI</dd></div><div><dt>04</dt><dd>Industrial IoT</dd></div>
        </dl>
      </section>

      <section className="professional-feature" id="experience" aria-labelledby="experience-title-en">
        <div className="professional-visual">
          <img src={sitePath("/experience/locacoeur/guardian-1.png")} alt="NYXeos Guardian smart defibrillator case" width="390" height="420" loading="eager" />
          <span>Professional experience</span>
        </div>
        <div className="professional-copy">
          <p className="eyebrow">Locacoeur · MedTech · Aix-en-Provence</p>
          <h2 id="experience-title-en">Digital tools for connected medical equipment.</h2>
          <p className="professional-lead">During my apprenticeship at Locacoeur, I contribute to backend services, IoT telemetry flows and business tools used to monitor emergency equipment.</p>
          <p>NYXeos Guardian provides the public product context for this work. The solution was presented at VivaTech 2026, where Locacoeur identified me as part of the attending team. Proprietary technical information remains excluded.</p>
          <dl className="professional-facts">
            <div><dt>Responsibilities</dt><dd>Backend, IoT telemetry, automation and internal tools</dd></div>
            <div><dt>Public context</dt><dd>NYXeos Guardian and VivaTech 2026</dd></div>
            <div><dt>Confidentiality</dt><dd>Detailed architecture and production code are not published</dd></div>
          </dl>
          <a className="button button-primary" href={sitePath("/en/experience/locacoeur/")}>Read the Locacoeur case study</a>
        </div>
      </section>

      <section className="project-index" id="projects" aria-labelledby="projects-title-en">
        <header className="section-heading">
          <div><p className="eyebrow">Selected projects</p><h2 id="projects-title-en">Prototypes explained through evidence.</h2></div>
          <p>Each case study connects the initial need, architecture, construction, source code and available results.</p>
        </header>
        <div className="project-grid">
          {englishProjects.map((project, index) => (
            <article className="project-card" key={project.slug}>
              <a className="project-card-media" href={sitePath(`/en/projects/${project.slug}/`)} aria-label={`Explore ${project.title}`}>
                <img src={project.cover.src} alt={project.cover.alt} width={project.cover.width} height={project.cover.height} loading={index === 0 ? "eager" : "lazy"} decoding="async" />
                <span className="project-number">0{index + 1}</span><span className="project-year">{project.year}</span>
              </a>
              <div className="project-card-body">
                <p className="project-context">{project.context}</p><h3><a href={sitePath(`/en/projects/${project.slug}/`)}>{project.title}</a></h3>
                <p className="project-summary">{project.summary}</p>
                <dl className="project-facts"><div><dt>Contribution</dt><dd>{project.role}</dd></div><div><dt>Outcome</dt><dd>{project.proof}</dd></div></dl>
                <a className="project-link" href={sitePath(`/en/projects/${project.slug}/`)}>Read the case study <span aria-hidden="true">↗</span></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="recognition-strip" aria-label="Key outcomes">
        <div><strong>2</strong><span>award-winning I-NOVGAMES prototypes</span></div><div><strong>4</strong><span>professional and technical case studies</span></div><div><strong>Bench to cloud</strong><span>electronics, firmware, AI and data</span></div>
      </section>

      <section className="expertise-section" id="expertise" aria-labelledby="expertise-title-en">
        <header className="section-heading"><div><p className="eyebrow">Applied skills</p><h2 id="expertise-title-en">Working where hardware and software meet.</h2></div><p>Skills demonstrated through the prototypes, code, diagrams and results shown in this portfolio.</p></header>
        <div className="expertise-grid">{expertise.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p className="expertise-tools">{item.tools}</p><p>{item.copy}</p></article>)}</div>
      </section>

      <section className="profile-section" id="profile">
        <div className="profile-heading"><p className="eyebrow">Profile</p><h2>Engineering student focused on concrete systems.</h2></div>
        <div className="profile-copy">
          <p className="profile-lead">In my final year at Centrale Méditerranée, I work on STM32 firmware, sensor integration, robotics, IoT and edge AI.</p>
          <p>At Locacoeur, I also develop backend services and telemetry flows for MedTech equipment. Production code is confidential, so only my general responsibilities are presented.</p>
          <dl className="profile-facts">
            <div><dt>Target</dt><dd>First full-time role in embedded systems, IoT or robotics</dd></div><div><dt>Availability</dt><dd>October 2026</dd></div><div><dt>Languages</dt><dd>French, English (IELTS 8.0) and Arabic</dd></div><div><dt>Leadership</dt><dd>Vice-president and technical director of Fablab Marseille</dd></div>
          </dl>
        </div>
      </section>

      <section className="contact-band" id="contact">
        <div><p className="eyebrow">Contact</p><h2>Building an embedded system?</h2></div>
        <div className="contact-copy"><p>I am looking for my first embedded systems, IoT or robotics role from October 2026.</p><div className="contact-actions"><a className="button button-light" href="https://www.linkedin.com/in/adamberrada" target="_blank" rel="noreferrer">LinkedIn</a><a className="button button-outline" href="https://github.com/pentademic" target="_blank" rel="noreferrer">GitHub</a></div></div>
      </section>
      <footer className="site-footer"><p>Adam Berrada · Engineering portfolio</p><p>Last updated: 2026</p></footer>
    </main>
  );
}
