import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { g as renderHead, m as renderTemplate, s as renderComponent } from "./server_rvue7Aap.mjs";
import { t as createComponent } from "./compiler_B0vGTDZ8.mjs";
import { n as vaultQuery, t as $$Layout } from "./Layout_1zWQyMLt.mjs";
// src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const query = await vaultQuery();
	query.filter((note) => note.Frontmatter?.["Archive-47"] === true && note.Frontmatter?.["A47-Class"]?.includes("series"));
	query.filter((note) => note.Frontmatter?.["Archive-47"] === true && note.Frontmatter?.["A47-Class"] && note.Frontmatter?.["A47-Class"] !== "series");
	return renderTemplate`<html lang="en" data-astro-cid-lcdefpme><head><meta charset="utf-8"><title>LibDocket</title>${renderHead($$result)}</head><body data-astro-cid-lcdefpme>${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-lcdefpme": true }, { "default": ($$result) => renderTemplate`<div class="series-node full" data-astro-cid-lcdefpme><div class="series-content" data-astro-cid-lcdefpme><h3 data-astro-cid-lcdefpme>The C.E.C.O.T. Lie</h3><div class="series-description" data-astro-cid-lcdefpme><p data-astro-cid-lcdefpme>The C.E.C.O.T. Lie was the US Government's attempts to circumvent law, civil rights, and court orders to deport and detain 240+ Venezuelans and one El Salvadoran man, while maintianing a false narrative publicly about the jurisdiction of the detainment and the criminal status of the people detained</p></div><div class="series-components" data-astro-cid-lcdefpme><a class="series-component" href="./the-cecot-lie-timeline" data-astro-cid-lcdefpme>View Timeline</a></div></div><div class="series-image" data-astro-cid-lcdefpme><img src="./images/Philip-Holsinger02.jpg" data-astro-cid-lcdefpme></div></div>` })}</body></html>`;
}, "C:/Users/fallone/archive-47/src/pages/index.astro", void 0);
var $$file = "C:/Users/fallone/archive-47/src/pages/index.astro";
// \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
export { page };
