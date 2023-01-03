globalThis.process = { argv: [], env: {}, };import { A as App, s as server_default, f as deserializeManifest } from './chunks/astro.4bedf45d.mjs';
import { _ as _page0 } from './chunks/prerender.c3ac03fe.mjs';

const clientAddressSymbol = Symbol.for("astro.clientAddress");
function createExports(manifest) {
  const app = new App(manifest);
  const handler = async (request) => {
    const url = new URL(request.url);
    if (manifest.assets.has(url.pathname)) {
      return;
    }
    if (app.match(request)) {
      const ip = request.headers.get("x-nf-client-connection-ip");
      Reflect.set(request, clientAddressSymbol, ip);
      const response = await app.render(request);
      if (app.setCookieHeaders) {
        for (const setCookieHeader of app.setCookieHeaders(response)) {
          response.headers.append("Set-Cookie", setCookieHeader);
        }
      }
      return response;
    }
    return new Response(null, {
      status: 404,
      statusText: "Not found"
    });
  };
  return { default: handler };
}

const adapter = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  createExports
}, Symbol.toStringTag, { value: 'Module' }));

const pageMap = new Map([["src/pages/index.astro", _page0],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/edge-functions","routes":[{"file":"index.html","links":[],"scripts":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","_meta":{"trailingSlash":"ignore"}}}],"base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"extendDefaultPlugins":false,"isAstroFlavoredMd":false,"isExperimentalContentCollections":false,"contentDir":"file:///Users/juanmi/Desktop/prerender-edge-functions/src/content/"},"pageMap":null,"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.js","astro:scripts/before-hydration.js":""},"assets":["/favicon.svg","/index.html"]}), {
	pageMap: pageMap,
	renderers: renderers
});
const _args = undefined;

const _exports = createExports(_manifest);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap, renderers };
