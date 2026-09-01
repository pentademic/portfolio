/* eslint-disable react/no-unescaped-entities, @next/next/no-img-element, @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import { sitePath } from "../../../site-config";
import { LanguageSwitcher } from "../../../language-switcher";

export const metadata: Metadata = {
  title: "Locacoeur and NYXeos",
  description: "Adam Berrada's professional experience at Locacoeur: IoT engineering, backend services, business tools and the public NYXeos Guardian context.",
  openGraph: {
    title: "Locacoeur and NYXeos | Adam Berrada",
    description: "Professional MedTech experience spanning IoT telemetry, digital tools and connected emergency equipment.",
    images: [{ url: sitePath("/experience/locacoeur/guardian-1.png"), width: 390, height: 420, alt: "NYXeos Guardian smart defibrillator case" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Locacoeur and NYXeos | Adam Berrada",
    description: "Professional MedTech experience spanning IoT telemetry, digital tools and connected emergency equipment.",
    images: [sitePath("/experience/locacoeur/guardian-1.png")],
  },
  alternates: { canonical: sitePath("/en/experience/locacoeur/"), languages: { fr: sitePath("/experience/locacoeur/"), en: sitePath("/en/experience/locacoeur/") } },
};

const publicSources = [
  { title: "Official NYXeos Guardian presentation", publisher: "Locacoeur", href: "https://locacoeur.com/nyxeos-guardian-24-7/" },
  { title: "NYXeos presents Guardian at VivaTech 2026", publisher: "Locacoeur · Press", href: "https://locacoeur.com/presse-agence-aix-en-provence-sant-connecte-nyxeos-prsente-sa-solution-de-dfibrillateur-intelligent-vivatech/" },
  { title: "Locacoeur posts, including VivaTech 2026", publisher: "LinkedIn", href: "https://fr.linkedin.com/company/locacoeur" },
];

export default function EnglishLocacoeurExperiencePage() {
  return (
    <main className="experience-page">
      <header className="topbar case-topbar">
        <a className="identity" href={sitePath("/en/")} aria-label="Back to the homepage"><span className="identity-mark" aria-hidden="true">AB</span><span>Adam Berrada</span></a>
        <nav aria-label="Experience navigation">
          <a href={sitePath("/en/#experience")}>Back to home</a>
          <a href="https://fr.linkedin.com/company/locacoeur" target="_blank" rel="noreferrer">Locacoeur on LinkedIn</a>
          <LanguageSwitcher locale="en" alternateHref={sitePath("/experience/locacoeur/")} />
        </nav>
      </header>

      <nav className="case-nav" aria-label="Experience contents">
        <span>Locacoeur</span><a href="#mission">Mission</a><a href="#contribution">Contribution</a><a href="#nyxeos">NYXeos</a><a href="#vivatech">VivaTech</a><a href="#sources">Sources</a>
      </nav>

      <article>
        <section className="experience-hero">
          <div className="experience-hero-copy">
            <p className="eyebrow">Professional experience · MedTech</p><h1>Locacoeur and the NYXeos ecosystem.</h1>
            <p>An engineering apprenticeship involving connected medical equipment, backend services and tools used by operational teams.</p>
            <dl className="experience-summary">
              <div><dt>Company</dt><dd>Locacoeur</dd></div><div><dt>Location</dt><dd>Aix-en-Provence</dd></div><div><dt>Field</dt><dd>Cardiac emergency and medical IoT</dd></div><div><dt>Role</dt><dd>Engineering apprentice</dd></div>
            </dl>
          </div>
          <figure className="experience-product-shot">
            <img src={sitePath("/experience/locacoeur/guardian-1.png")} alt="Exterior view of the NYXeos Guardian smart case" width="390" height="420" fetchPriority="high" />
            <figcaption>Guardian product image published by NYXeos and Locacoeur.</figcaption>
          </figure>
        </section>

        <section className="experience-mission" id="mission">
          <div><p className="eyebrow">Company mission</p><h2>Keep emergency equipment available and monitored.</h2></div>
          <div className="experience-prose">
            <p>Locacoeur works on emergency solutions and defibrillator monitoring. Its activity combines maintenance, remote supervision and assistance to improve the availability of equipment deployed in companies, public bodies and public-access buildings.</p>
            <p>This context gives software work a concrete purpose: make field information usable, track equipment state and help teams respond when an anomaly is reported.</p>
          </div>
        </section>

        <section className="experience-contribution" id="contribution">
          <header className="section-split-heading">
            <div><p className="eyebrow">My contribution</p><h2>Connecting field data with operations.</h2></div>
            <p>This presentation deliberately remains general. Production code, detailed architecture, security mechanisms and operational data are confidential.</p>
          </header>
          <ol className="responsibility-grid">
            <li><span>01</span><h3>Backend services</h3><p>Developing and evolving services that process information reported by connected equipment.</p></li>
            <li><span>02</span><h3>IoT telemetry</h3><p>Contributing to flows that connect field devices with the company's monitoring tools.</p></li>
            <li><span>03</span><h3>Business tools</h3><p>Automating internal processes for stock, interventions, contracts, invoicing and reporting.</p></li>
            <li><span>04</span><h3>Operational continuity</h3><p>Accounting for traceability, error handling and support needs when evolving existing tools.</p></li>
          </ol>
        </section>

        <section className="nyxeos-section" id="nyxeos">
          <div className="nyxeos-copy">
            <p className="eyebrow">Public product context</p><h2>NYXeos Guardian.</h2>
            <p>Locacoeur's public sources describe Guardian as a universal, portable smart case for defibrillators. It combines thermal regulation, remote monitoring, geolocation, alerts and assistance.</p>
            <p className="scope-note">These are company product characteristics. They are not presented as my personal achievements.</p>
            <a className="text-link" href="https://locacoeur.com/nyxeos-guardian-24-7/" target="_blank" rel="noreferrer">Read the official presentation <span aria-hidden="true">↗</span></a>
          </div>
          <figure className="nyxeos-open">
            <img src={sitePath("/experience/locacoeur/guardian-2.png")} alt="Open NYXeos Guardian case with its inner compartment" width="328" height="444" loading="lazy" />
            <figcaption>Open Guardian case published on the official NYXeos page.</figcaption>
          </figure>
        </section>

        <section className="vivatech-section" id="vivatech">
          <div><p className="eyebrow">Ecosystem and field exposure</p><h2>VivaTech 2026.</h2></div>
          <div className="vivatech-story">
            <p>From 17 to 19 June 2026, NYXeos presented Guardian at VivaTech on the Région Sud pavilion. Locacoeur identified me in its post announcing the team attending the event.</p>
            <p>This participation shows how internal engineering work becomes a public product presentation for healthcare organisations, institutions, investors and technology companies.</p>
            <dl><div><dt>Event</dt><dd>VivaTech 2026</dd></div><div><dt>Venue</dt><dd>Paris Expo Porte de Versailles</dd></div><div><dt>Pavilion</dt><dd>Région Sud, Hall 7.3</dd></div><div><dt>Product</dt><dd>NYXeos Guardian</dd></div></dl>
          </div>
        </section>

        <section className="experience-lessons">
          <div><p className="eyebrow">What this experience demonstrates</p><h2>Engineering shaped by production realities.</h2></div>
          <ul><li>Understand an operational need before changing an existing system.</li><li>Connect equipment, digital services and business processes.</li><li>Document states and errors to make diagnosis easier.</li><li>Work in a field where confidentiality and traceability matter.</li></ul>
        </section>

        <section className="public-sources" id="sources">
          <header><p className="eyebrow">Verifiable information</p><h2>Public sources used.</h2><p>The confidential apprenticeship report is neither reproduced nor available for download.</p></header>
          <div className="public-source-list">{publicSources.map((source) => <a href={source.href} target="_blank" rel="noreferrer" key={source.href}><span><small>{source.publisher}</small><strong>{source.title}</strong></span><span aria-hidden="true">↗</span></a>)}</div>
        </section>
      </article>

      <section className="case-next"><p className="eyebrow">Next technical project</p><a href={sitePath("/en/projects/m2s/")}><span>M2S, a connected medical dispenser</span><span aria-hidden="true">→</span></a></section>
      <footer className="site-footer"><p>Adam Berrada · Engineering portfolio</p><a href={sitePath("/en/#experience")}>Back to professional experience ↑</a></footer>
    </main>
  );
}
