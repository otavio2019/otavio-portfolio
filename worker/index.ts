export interface Env {
  ASSETS: Fetcher;
}

function isHtmlRequest(request: Request) {
  const accept = request.headers.get("accept") || "";
  return request.method === "GET" && accept.includes("text/html");
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const response = await env.ASSETS.fetch(request);

    if (response.status !== 404 || !isHtmlRequest(request)) {
      return response;
    }

    const url = new URL(request.url);
    url.pathname = "/index.html";

    return env.ASSETS.fetch(new Request(url, request));
  },
};
