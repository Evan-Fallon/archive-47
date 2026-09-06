import { n as __exportAll, t as createComponent } from "./compiler_BmZrZZfK.mjs";
import { f as renderHead, r as renderComponent, u as renderTemplate } from "./server_BtBKAhcd.mjs";
import { t as $$Layout } from "./Layout_CQSQkbFv.mjs";
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`<html lang="en"><head><meta charset="utf-8"><title>Vault Test</title>${renderHead($$result)}</head><body>${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`<link rel="stylesheet" href="./src/styles/global.css"><div class="content-scroller"><div class="content-sizer"><div class="topic-header"><h1> Archive 47  </h1><a href="./cecot-home"> The CECOT Lie</a><a href="./usps-interference-timeline"> USPS Interference</a></div></div></div>` })}</body></html>`;
}, "C:/Users/fallone/archive-47/src/pages/index.astro", void 0);
var $$file = "C:/Users/fallone/archive-47/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
