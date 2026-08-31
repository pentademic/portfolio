import { featuredProjects } from "../projects";
import { siteUrl } from "../site-config";

export const dynamic = "force-static";

export function GET() {
  const paths = ["/", "/experience/locacoeur", ...featuredProjects.map((project) => `/projects/${project.slug}`)];
  const urls = paths.map((path) => `<url><loc>${siteUrl(path)}</loc></url>`).join("");
  const body = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
