import { n as __exportAll, t as createComponent } from "./compiler_BmZrZZfK.mjs";
import { d as maybeRenderHead, r as renderComponent, u as renderTemplate } from "./server_BtBKAhcd.mjs";
import { t as $$SubpageLayout } from "./SubpageLayout_6p-Ip94I.mjs";
//#region src/pages/cecot-home.astro
var cecot_home_exports = /* @__PURE__ */ __exportAll({
	default: () => $$CecotHome,
	file: () => $$file,
	url: () => $$url
});
var $$CecotHome = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "SubpageLayout", $$SubpageLayout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="topic-header"><h1> The C.E.C.O.T. Lie</h1></div><div class="link-holder"><a class="view-link" href="./cecot-summary">What is the C.E.C.O.T. Lie?</a><a class="view-link" href="./cecot-timeline">Timeline</a><a class="view-link" href="./cecot-directory">Directory</a></div>` })}`;
}, "C:/Users/fallone/archive-47/src/pages/cecot-home.astro", void 0);
var $$file = "C:/Users/fallone/archive-47/src/pages/cecot-home.astro";
var $$url = "/cecot-home.html";
//#endregion
//#region \0virtual:astro:page:src/pages/cecot-home@_@astro
var page = () => cecot_home_exports;
//#endregion
export { page };
