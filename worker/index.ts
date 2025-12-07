export interface Env {
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    const asset = await env.ASSETS.fetch(request);
    if (asset.status === 404) {
      if (url.pathname !== "/index.html") {
        const home = await env.ASSETS.fetch(new Request(new URL("/index.html", url.origin).toString(), request));
        if (home.status === 200) return home;
      }
      return new Response("Internal Server Error", { status: 500 });
    }

    return asset;
  },
};
