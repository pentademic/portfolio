/* eslint-disable react/no-unescaped-entities, @next/next/no-img-element, @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { englishProjects, getEnglishProject } from "../../../projects-en";
import { sitePath } from "../../../site-config";
import { LanguageSwitcher } from "../../../language-switcher";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return englishProjects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getEnglishProject(slug);
  if (!project) return {};

  return {
    title: project.shortTitle,
    description: project.summary,
    openGraph: {
      title: `${project.title} | Adam Berrada`,
      description: project.summary,
      images: [{
        url: project.cover.src,
        width: project.cover.width,
        height: project.cover.height,
        alt: project.cover.alt,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Adam Berrada`,
      description: project.summary,
      images: [project.cover.src],
    },
    alternates: {
      canonical: sitePath(`/en/projects/${project.slug}/`),
      languages: { fr: sitePath(`/projects/${project.slug}/`), en: sitePath(`/en/projects/${project.slug}/`) },
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getEnglishProject(slug);
  if (!project) notFound();

  return (
    <main className="case-page">
      <header className="topbar case-topbar">
        <a className="identity" href={sitePath("/en/")} aria-label="Back to the homepage">
          <span className="identity-mark" aria-hidden="true">AB</span>
          <span>Adam Berrada</span>
        </a>
        <nav aria-label="Project navigation">
          <a href={sitePath("/en/#projects")}>Back to projects</a>
          <a href={project.repository} target="_blank" rel="noreferrer">GitHub repository</a>
          <LanguageSwitcher locale="en" alternateHref={sitePath(`/projects/${project.slug}/`)} />
        </nav>
      </header>

      <nav className="case-nav" aria-label="Case study contents">
        <span>{project.shortTitle}</span>
        <a href="#contexte">Context</a>
        <a href="#logique">System logic</a>
        {project.physicalBuild && <a href="#construction">Build</a>}
        <a href="#code">Code</a>
        <a href="#preuves">Evidence</a>
        <a href="#bilan">Outcome</a>
      </nav>

      <article>
        <section className="case-intro">
          <div className="case-intro-copy">
            <p className="eyebrow">Case study · {project.year}</p>
            <h1>{project.title}</h1>
            <p>{project.summary}</p>
            <div className="case-actions">
              <a className="button button-primary" href={project.repository} target="_blank" rel="noreferrer">
                View the GitHub repository
              </a>
              <a className="text-link" href="#code">Read the code excerpts ↓</a>
            </div>
          </div>
          <figure className="case-intro-media">
            <img
              src={project.cover.src}
              alt={project.cover.alt}
              width={project.cover.width}
              height={project.cover.height}
              fetchPriority="high"
              decoding="async"
            />
            <figcaption>{project.cover.caption}</figcaption>
          </figure>
          <dl className="case-summary-grid">
            <div><dt>Context</dt><dd>{project.context}</dd></div>
            <div><dt>My role</dt><dd>{project.role}</dd></div>
            <div><dt>Outcome</dt><dd>{project.proof}</dd></div>
            <div><dt>Stack</dt><dd>{project.technologies.slice(0, 5).join(" · ")}</dd></div>
          </dl>
        </section>

        <section className="case-frame" id="contexte">
          <header>
            <p className="eyebrow">Project framework</p>
            <h2>{project.frame.label}</h2>
            <p>{project.frame.value}</p>
          </header>
          <dl className="frame-list">
            <div><dt>Organisation</dt><dd>{project.frame.organizer}</dd></div>
            <div><dt>Format</dt><dd>{project.frame.format}</dd></div>
            <div><dt>Challenge</dt><dd>{project.frame.brief}</dd></div>
          </dl>
          {project.milestones && (
            <ol className="milestone-list" aria-label="Project timeline">
              {project.milestones.map((item) => (
                <li key={item.date}>
                  <time>{item.date}</time>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </li>
              ))}
            </ol>
          )}
          {project.distinctions.length > 0 && (
            <div className="award-list" aria-label="Awards and milestones">
              {project.distinctions.map((item) => (
                <article key={item.title}>
                  {item.image ? (
                    <img
                      src={item.image.src}
                      alt={item.image.alt}
                      width={item.image.width}
                      height={item.image.height}
                      loading="lazy"
                    />
                  ) : (
                    <span className="award-mark" aria-hidden="true">
                      {item.kind === "award" ? "PRIX" : "ÉTAPE"}
                    </span>
                  )}
                  <div>
                    <p className="award-type">
                      {item.kind === "badge" ? "Verifiable badge" : item.kind === "award" ? "Award" : "Competition milestone"}
                    </p>
                    <h3>{item.title}</h3>
                    <p className="award-issuer">{item.issuer}</p>
                    <p>{item.note}</p>
                    {item.credentialUrl && (
                      <a href={item.credentialUrl} target="_blank" rel="noreferrer">
                        Verify the badge <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <section className="problem-section">
          <div>
            <p className="eyebrow">Engineering question</p>
            <h2>{project.question}</h2>
          </div>
          <div>
            <p className="eyebrow">Key challenges</p>
            <ul className="plain-list">
              {project.stakes.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>

        <section className="case-architecture" id="logique">
          <header className="section-split-heading">
            <div>
              <p className="eyebrow">Architecture</p>
              <h2>Functional blocks and interfaces.</h2>
            </div>
            <p>
              Le système est présenté par blocs fonctionnels. Chaque bloc indique ce qu'il décide et avec quoi il échange.
            </p>
          </header>
          <dl className="architecture-grid">
            {project.architecture.map((item, index) => (
              <div key={item.label}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
          <div className="logic-layout">
            <div>
              <p className="eyebrow">Sequence</p>
              <h3>Execution order</h3>
            </div>
            <ol className="logic-list">
              {project.systemFlow.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {project.physicalBuild && (
          <section className="build-section" id="construction" aria-labelledby="build-title">
            <header className="section-split-heading">
              <div>
                <p className="eyebrow">Vessel construction</p>
                <h2 id="build-title">{project.physicalBuild.title}</h2>
              </div>
              <p>{project.physicalBuild.summary}</p>
            </header>

            <div className="build-stage-list">
              {project.physicalBuild.stages.map((stage, index) => (
                <article className="build-stage" key={stage.title}>
                  <figure>
                    <img
                      src={stage.media.src}
                      alt={stage.media.alt}
                      width={stage.media.width}
                      height={stage.media.height}
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption>{stage.media.caption}</figcaption>
                  </figure>
                  <div>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{stage.title}</h3>
                    <p>{stage.copy}</p>
                    <p className="build-observation">
                      <strong>What the evidence supports</strong>
                      {stage.observation}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="build-checks">
              <div>
                <p className="eyebrow">Validation status</p>
                <h3>Built, simulated or still to be verified.</h3>
              </div>
              <div className="build-check-table" role="table" aria-label="Physical prototype validation status">
                <div className="build-check-head" role="row">
                  <span role="columnheader">Subsystem</span>
                  <span role="columnheader">Status</span>
                  <span role="columnheader">Available evidence</span>
                </div>
                {project.physicalBuild.checks.map((check) => (
                  <div className="build-check-row" role="row" key={check.subject}>
                    <strong role="cell">{check.subject}</strong>
                    <span role="cell">{check.state}</span>
                    <p role="cell">{check.evidence}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="contribution-section">
          <header>
            <p className="eyebrow">Personal contribution</p>
            <h2>My responsibilities on the project.</h2>
          </header>
          <ol>
            {project.contribution.map((item) => <li key={item}>{item}</li>)}
          </ol>
        </section>

        <section className="constraints-section" aria-labelledby="constraints-title">
          <header className="section-split-heading">
            <div>
              <p className="eyebrow">Constraints</p>
              <h2 id="constraints-title">Problem, response and evidence.</h2>
            </div>
            <p>
              Cette matrice relie chaque décision technique à un élément observable dans le code ou les livrables.
            </p>
          </header>
          <div className="constraint-table" role="table" aria-label="Constraints and engineering responses">
            <div className="constraint-head" role="row">
              <span role="columnheader">Constraint</span>
              <span role="columnheader">Selected response</span>
              <span role="columnheader">Verifiable evidence</span>
            </div>
            {project.constraints.map((item) => (
              <div className="constraint-row" role="row" key={item.constraint}>
                <strong role="cell">{item.constraint}</strong>
                <p role="cell">{item.response}</p>
                <p role="cell">{item.evidence}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="code-section" id="code" aria-labelledby="code-title">
          <header className="section-split-heading">
            <div>
              <p className="eyebrow">Source code</p>
              <h2 id="code-title">Real excerpts from the repository.</h2>
            </div>
            <p>
              Les extraits sont raccourcis pour la lecture. Chaque bloc renvoie au fichier public complet et précise ce qu'il démontre.
            </p>
          </header>
          <div className="code-list">
            {project.codeExamples.map((example, index) => (
              <article className="code-example" key={example.file + example.title}>
                <div className="code-copy">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p className="code-language">{example.language}</p>
                  <h3>{example.title}</h3>
                  <p>{example.explanation}</p>
                  <a href={example.sourceUrl} target="_blank" rel="noreferrer">
                    {example.file} <span aria-hidden="true">↗</span>
                  </a>
                </div>
                <div className="source-code">
                  <div className="source-file">
                    <span>{example.file}</span>
                    <span>{example.language}</span>
                  </div>
                  <pre tabIndex={0}><code>{example.code}</code></pre>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="implementation-section">
          <header>
            <p className="eyebrow">Implementation</p>
            <h2>Components and the purpose of each choice.</h2>
          </header>
          <div className="implementation-columns">
            <div>
              <h3>Hardware and interfaces</h3>
              <dl>
                {project.hardware.map((item) => (
                  <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>
                ))}
              </dl>
            </div>
            <div>
              <h3>Software and models</h3>
              <dl>
                {project.software.map((item) => (
                  <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="decisions-section" aria-labelledby="decisions-title">
          <header>
            <p className="eyebrow">Engineering decisions</p>
            <h2 id="decisions-title">Trade-offs and consequences.</h2>
          </header>
          <div className="decision-list">
            {project.engineering.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="evidence-section" id="preuves" aria-labelledby="evidence-title">
          <header className="section-split-heading">
            <div>
              <p className="eyebrow">Visual evidence</p>
              <h2 id="evidence-title">Prototype, diagrams, calculations and results.</h2>
            </div>
            <p>{project.evidenceSource}</p>
          </header>
          <div className="evidence-grid">
            {project.gallery.map((media) => (
              <figure className={`evidence-card evidence-${media.kind}`} key={media.src + media.caption}>
                <img
                  src={media.src}
                  alt={media.alt}
                  width={media.width}
                  height={media.height}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{media.caption}</figcaption>
              </figure>
            ))}
          </div>
          {(project.video || project.documents) && (
            <div className="evidence-assets">
              {project.video && (
                <figure className="project-video">
                  <video
                    controls
                    preload="metadata"
                    poster={project.video.poster}
                    aria-label={project.video.title}
                  >
                    <source src={project.video.src} type="video/mp4" />
                    Your browser cannot play this video.
                  </video>
                  <figcaption>
                    <strong>{project.video.title}</strong>
                    <span>{project.video.caption}</span>
                  </figcaption>
                </figure>
              )}
              {project.documents && (
                <div className="document-list">
                  <p className="eyebrow">Complete deliverables</p>
                  {project.documents.map((document) => (
                    <a href={document.href} target="_blank" rel="noreferrer" key={document.href}>
                      <span>
                        <strong>{document.title}</strong>
                        <small>{document.description}</small>
                      </span>
                      <span>
                        {document.meta} <b aria-hidden="true">↗</b>
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}
        </section>

        <section className="result-section" id="bilan">
          <div className="result-main">
            <p className="eyebrow">Outcome</p>
            <h2>{project.outcome}</h2>
            <ul className="tech-list" aria-label="Technologies">
              {project.technologies.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="limit-panel">
            <p className="eyebrow">Current limitations</p>
            <ul className="plain-list">
              {project.limits.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>

        <section className="lessons-section">
          <div>
            <p className="eyebrow">Lessons learned</p>
            <h2>What this project taught me.</h2>
          </div>
          <ol>
            {project.lessons.map((item) => <li key={item}>{item}</li>)}
          </ol>
          <aside>
            <p className="eyebrow">Sources used</p>
            <ul className="plain-list">
              {project.sources.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <a className="button button-primary" href={project.repository} target="_blank" rel="noreferrer">
              View the repository
            </a>
          </aside>
        </section>
      </article>

      <section className="case-next">
        <p className="eyebrow">Next project</p>
        {(() => {
          const current = englishProjects.findIndex((item) => item.slug === project.slug);
          const next = englishProjects[(current + 1) % englishProjects.length];
          return (
            <a href={sitePath(`/en/projects/${next.slug}/`)}>
              <span>{next.title}</span>
              <span aria-hidden="true">→</span>
            </a>
          );
        })()}
      </section>

      <footer className="site-footer">
        <p>Adam Berrada · Engineering portfolio</p>
        <a href={sitePath("/en/#projects")}>Back to projects ↑</a>
      </footer>
    </main>
  );
}
