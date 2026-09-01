interface D1Database {
  prepare(query: string): unknown;
  batch(statements: unknown[]): Promise<unknown[]>;
  exec(query: string): Promise<unknown>;
}
type Fetcher = {
  fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
};

declare module "cloudflare:workers" {
  export const env: {
    DB?: D1Database;
  };
}
