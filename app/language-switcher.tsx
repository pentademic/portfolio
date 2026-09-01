type LanguageSwitcherProps = {
  locale: "fr" | "en";
  alternateHref: string;
};

export function LanguageSwitcher({ locale, alternateHref }: LanguageSwitcherProps) {
  return (
    <div className="language-switch" aria-label={locale === "fr" ? "Choix de la langue" : "Language selection"}>
      {locale === "fr" ? (
        <>
          <span aria-current="page">FR</span>
          <a href={alternateHref} hrefLang="en" lang="en" aria-label="Read this page in English">EN</a>
        </>
      ) : (
        <>
          <a href={alternateHref} hrefLang="fr" lang="fr" aria-label="Lire cette page en français">FR</a>
          <span aria-current="page">EN</span>
        </>
      )}
    </div>
  );
}
