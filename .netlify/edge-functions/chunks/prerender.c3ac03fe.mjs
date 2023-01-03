import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderHead, d as renderSlot, e as renderComponent } from './astro.4bedf45d.mjs';

const $$Astro$2 = createAstro("/Users/juanmi/Desktop/prerender-edge-functions/src/components/Button.astro", "", "file:///Users/juanmi/Desktop/prerender-edge-functions/");
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Button;
  const { label } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<button>${label}</button>`;
}, "/Users/juanmi/Desktop/prerender-edge-functions/src/components/Button.astro");

const $$Astro$1 = createAstro("/Users/juanmi/Desktop/prerender-edge-functions/src/layouts/Layout.astro", "", "file:///Users/juanmi/Desktop/prerender-edge-functions/");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
${renderHead($$result)}</head>
<body>
	${renderSlot($$result, $$slots["default"])}
</body></html>`;
}, "/Users/juanmi/Desktop/prerender-edge-functions/src/layouts/Layout.astro");

const $$Astro = createAstro("/Users/juanmi/Desktop/prerender-edge-functions/src/pages/index.astro", "", "file:///Users/juanmi/Desktop/prerender-edge-functions/");
const prerender = true;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": () => renderTemplate`${maybeRenderHead($$result)}<h1>Hello world...</h1>${renderComponent($$result, "Button", $$Button, { "label": "I'm a button" })}` })}`;
}, "/Users/juanmi/Desktop/prerender-edge-functions/src/pages/index.astro");

const $$file = "/Users/juanmi/Desktop/prerender-edge-functions/src/pages/index.astro";
const $$url = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	prerender,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _ };
