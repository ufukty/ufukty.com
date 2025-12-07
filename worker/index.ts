export interface Env {
  ASSETS: Fetcher;
}

function normalizeDirectories(request: Request): Request {
  const url = new URL(request.url);
  if (url.pathname.endsWith("/")) {
    url.pathname += "index.html";
    return new Request(url.toString(), request);
  }
  return request;
}

function isHomepage(request: Request): boolean {
  const url = new URL(request.url);
  return url.pathname === "/index.html";
}

async function handleNotFound(request: Request, env: Env): Promise<Response> {
  if (isHomepage(request)) {
    // already tried the homepage
    throw Error("homepage not found");
  }
  return Response.redirect(new URL(request.url).origin, 302);
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    try {
      request = normalizeDirectories(request);
      const response = await env.ASSETS.fetch(request);
      if (response.status === 404) {
        return await handleNotFound(request, env);
      }
      return response;
    } catch (e: any) {
      console.log({ "unit": "router", "statement": "main-try-catch", "e": e });
      return new Response("Internal Server Error", { status: 500 });
    }
  },
};
