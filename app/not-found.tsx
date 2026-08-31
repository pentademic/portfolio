/* eslint-disable react/no-unescaped-entities, @next/next/no-html-link-for-pages */
import { sitePath } from "./site-config";

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">Erreur 404</p>
      <h1>Cette page n'existe pas.</h1>
      <p>Le projet a peut-être changé d'adresse ou le lien contient une erreur.</p>
      <a className="button primary" href={sitePath("/")}>Retour au portfolio</a>
    </main>
  );
}
