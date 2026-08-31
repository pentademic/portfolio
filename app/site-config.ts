export const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const siteOrigin =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://adam-berrada-portfolio.pentademic95.chatgpt.site";

export function sitePath(path: string) {
  if (!path.startsWith("/")) return path;
  return `${siteBasePath}${path}`;
}

export function siteUrl(path: string) {
  return new URL(sitePath(path), `${siteOrigin}/`).toString();
}
