/* eslint-disable react/no-unescaped-entities, @next/next/no-img-element, @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import { sitePath } from "../../site-config";

export const metadata: Metadata = {
  title: "Locacoeur et NYXeos",
  description:
    "Expérience professionnelle d'Adam Berrada chez Locacoeur : ingénierie IoT, services backend, outils métiers et contexte public NYXeos Guardian.",
  openGraph: {
    title: "Locacoeur et NYXeos | Adam Berrada",
    description:
      "Une expérience professionnelle en MedTech, entre télémétrie IoT, outils numériques et équipements médicaux connectés.",
    images: [{
      url: sitePath("/experience/locacoeur/guardian-1.png"),
      width: 390,
      height: 420,
      alt: "Housse intelligente Guardian de NYXeos pour défibrillateur",
    }],
  },
};

const publicSources = [
  {
    title: "Présentation officielle de NYXeos Guardian",
    publisher: "Locacoeur",
    href: "https://locacoeur.com/nyxeos-guardian-24-7/",
  },
  {
    title: "NYXeos présente Guardian à VivaTech 2026",
    publisher: "Locacoeur · Presse",
    href: "https://locacoeur.com/presse-agence-aix-en-provence-sant-connecte-nyxeos-prsente-sa-solution-de-dfibrillateur-intelligent-vivatech/",
  },
  {
    title: "Publications de Locacoeur, dont VivaTech 2026",
    publisher: "LinkedIn",
    href: "https://fr.linkedin.com/company/locacoeur",
  },
];

export default function LocacoeurExperiencePage() {
  return (
    <main className="experience-page">
      <header className="topbar case-topbar">
        <a className="identity" href={sitePath("/")} aria-label="Retourner à l'accueil">
          <span className="identity-mark" aria-hidden="true">AB</span>
          <span>Adam Berrada</span>
        </a>
        <nav aria-label="Navigation de l'expérience">
          <a href={sitePath("/#experience")}>Retour à l'accueil</a>
          <a href="https://fr.linkedin.com/company/locacoeur" target="_blank" rel="noreferrer">Locacoeur sur LinkedIn</a>
        </nav>
      </header>

      <nav className="case-nav" aria-label="Sommaire de l'expérience">
        <span>Locacoeur</span>
        <a href="#mission">Mission</a>
        <a href="#contribution">Contribution</a>
        <a href="#nyxeos">NYXeos</a>
        <a href="#vivatech">VivaTech</a>
        <a href="#sources">Sources</a>
      </nav>

      <article>
        <section className="experience-hero">
          <div className="experience-hero-copy">
            <p className="eyebrow">Expérience professionnelle · MedTech</p>
            <h1>Locacoeur et l'écosystème NYXeos.</h1>
            <p>
              Une alternance au contact d'équipements médicaux connectés, de services backend et d'outils utilisés par les équipes opérationnelles.
            </p>
            <dl className="experience-summary">
              <div><dt>Entreprise</dt><dd>Locacoeur</dd></div>
              <div><dt>Localisation</dt><dd>Aix-en-Provence</dd></div>
              <div><dt>Domaine</dt><dd>Urgence cardiaque et IoT médical</dd></div>
              <div><dt>Statut</dt><dd>Alternance d'ingénieur</dd></div>
            </dl>
          </div>
          <figure className="experience-product-shot">
            <img
              src={sitePath("/experience/locacoeur/guardian-1.png")}
              alt="Vue extérieure de la housse intelligente Guardian de NYXeos"
              width="390"
              height="420"
              fetchPriority="high"
            />
            <figcaption>Guardian, visuel produit publié par NYXeos et Locacoeur.</figcaption>
          </figure>
        </section>

        <section className="experience-mission" id="mission">
          <div>
            <p className="eyebrow">Mission de l'entreprise</p>
            <h2>Maintenir les équipements d'urgence disponibles et suivis.</h2>
          </div>
          <div className="experience-prose">
            <p>
              Locacoeur intervient dans les solutions d'urgence et le suivi de défibrillateurs. Son activité associe maintenance, télésurveillance et téléassistance afin d'améliorer la disponibilité des équipements déployés dans les entreprises, les collectivités et les établissements recevant du public.
            </p>
            <p>
              Ce contexte donne une finalité très concrète au travail logiciel : rendre l'information exploitable par les équipes, suivre l'état des équipements et faciliter la réaction lorsqu'une anomalie est signalée.
            </p>
          </div>
        </section>

        <section className="experience-contribution" id="contribution">
          <header className="section-split-heading">
            <div>
              <p className="eyebrow">Ma contribution</p>
              <h2>Relier données terrain et opérations.</h2>
            </div>
            <p>
              Cette présentation reste volontairement générale. Le code, l'architecture détaillée, les mécanismes de sécurité et les données de production sont confidentiels.
            </p>
          </header>
          <ol className="responsibility-grid">
            <li>
              <span>01</span>
              <h3>Services backend</h3>
              <p>Développement et évolution de services chargés de traiter les informations remontées par les équipements connectés.</p>
            </li>
            <li>
              <span>02</span>
              <h3>Télémétrie IoT</h3>
              <p>Participation aux flux reliant les dispositifs de terrain aux outils de suivi utilisés par l'entreprise.</p>
            </li>
            <li>
              <span>03</span>
              <h3>Outils métiers</h3>
              <p>Automatisation de processus internes liés aux stocks, aux interventions, aux contrats, à la facturation et au reporting.</p>
            </li>
            <li>
              <span>04</span>
              <h3>Continuité opérationnelle</h3>
              <p>Prise en compte de la traçabilité, des erreurs et des besoins d'exploitation lors de l'évolution des outils.</p>
            </li>
          </ol>
        </section>

        <section className="nyxeos-section" id="nyxeos">
          <div className="nyxeos-copy">
            <p className="eyebrow">Contexte produit public</p>
            <h2>NYXeos Guardian.</h2>
            <p>
              Les sources publiques de Locacoeur présentent Guardian comme une housse intelligente, universelle et transportable destinée aux défibrillateurs. Elle associe régulation thermique, télésurveillance, géolocalisation, alertes et téléassistance.
            </p>
            <p className="scope-note">
              Ces caractéristiques décrivent le produit de l'entreprise. Elles ne sont pas présentées comme des réalisations personnelles.
            </p>
            <a className="text-link" href="https://locacoeur.com/nyxeos-guardian-24-7/" target="_blank" rel="noreferrer">
              Consulter la présentation officielle <span aria-hidden="true">↗</span>
            </a>
          </div>
          <figure className="nyxeos-open">
            <img
              src={sitePath("/experience/locacoeur/guardian-2.png")}
              alt="Housse Guardian de NYXeos ouverte avec compartiment intérieur"
              width="328"
              height="444"
              loading="lazy"
            />
            <figcaption>Vue ouverte de Guardian publiée sur la page officielle de NYXeos.</figcaption>
          </figure>
        </section>

        <section className="vivatech-section" id="vivatech">
          <div>
            <p className="eyebrow">Écosystème et terrain</p>
            <h2>VivaTech 2026.</h2>
          </div>
          <div className="vivatech-story">
            <p>
              Du 17 au 19 juin 2026, NYXeos a présenté Guardian à VivaTech sur le pavillon de la Région Sud. Locacoeur m'a identifié dans sa publication annonçant l'équipe présente au salon.
            </p>
            <p>
              Cette participation montre le passage d'un travail d'ingénierie interne à une présentation publique auprès d'acteurs de la santé, de partenaires institutionnels, d'investisseurs et d'entreprises technologiques.
            </p>
            <dl>
              <div><dt>Événement</dt><dd>VivaTech 2026</dd></div>
              <div><dt>Lieu</dt><dd>Paris Expo Porte de Versailles</dd></div>
              <div><dt>Pavillon</dt><dd>Région Sud, Hall 7.3</dd></div>
              <div><dt>Produit présenté</dt><dd>NYXeos Guardian</dd></div>
            </dl>
          </div>
        </section>

        <section className="experience-lessons">
          <div>
            <p className="eyebrow">Ce que cette expérience démontre</p>
            <h2>Une ingénierie soumise aux réalités de production.</h2>
          </div>
          <ul>
            <li>Comprendre un besoin métier avant de modifier un système existant.</li>
            <li>Faire dialoguer équipements, services numériques et processus opérationnels.</li>
            <li>Documenter les erreurs et les états pour faciliter le diagnostic.</li>
            <li>Travailler dans un secteur où la confidentialité et la traçabilité comptent.</li>
          </ul>
        </section>

        <section className="public-sources" id="sources">
          <header>
            <p className="eyebrow">Informations vérifiables</p>
            <h2>Sources publiques utilisées.</h2>
            <p>Le rapport d'alternance confidentiel n'est ni reproduit ni proposé au téléchargement.</p>
          </header>
          <div className="public-source-list">
            {publicSources.map((source) => (
              <a href={source.href} target="_blank" rel="noreferrer" key={source.href}>
                <span><small>{source.publisher}</small><strong>{source.title}</strong></span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>
      </article>

      <section className="case-next">
        <p className="eyebrow">Projet technique suivant</p>
        <a href={sitePath("/projects/m2s/")}><span>M2S, distributeur médical connecté</span><span aria-hidden="true">→</span></a>
      </section>

      <footer className="site-footer">
        <p>Adam Berrada · Portfolio d'ingénierie</p>
        <a href={sitePath("/#experience")}>Retour à l'expérience professionnelle ↑</a>
      </footer>
    </main>
  );
}
