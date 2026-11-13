import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { S as addAttribute, g as renderHead, m as renderTemplate, s as renderComponent } from "./server_rvue7Aap.mjs";
import { t as createComponent } from "./compiler_B0vGTDZ8.mjs";
import { n as vaultQuery, t as $$Layout } from "./Layout_1zWQyMLt.mjs";
// src/pages/devpage.astro
var devpage_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Devpage,
	file: () => $$file,
	url: () => $$url
});
var $$Devpage = createComponent(async ($$result, $$props, $$slots) => {
	const query = await vaultQuery();
	const seriesPages = query.filter((note) => note.Frontmatter?.["Archive-47"] === true && note.Frontmatter?.["A47-Class"]?.includes("series"));
	const notePages = query.filter((note) => note.Frontmatter?.["Archive-47"] === true && note.Frontmatter?.["A47-Class"] && note.Frontmatter?.["A47-Class"] !== "series");
	return renderTemplate`<html lang="en" data-astro-cid-i3aptplm><head><meta charset="utf-8"><title>Vault Links</title>${renderHead($$result)}</head><body data-astro-cid-i3aptplm>${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-i3aptplm": true }, { "default": ($$result) => renderTemplate`<div class="link-holder" data-astro-cid-i3aptplm><h1 data-astro-cid-i3aptplm>All Series</h1>${seriesPages.map((series) => {
		return renderTemplate`<a class="view-link"${addAttribute(`./${series.BaseName.toLowerCase().replace(/\s+/g, "-")}-series`, "href")} data-astro-cid-i3aptplm>${series.BaseName} </a>`;
	})}</div><div class="file-links" data-astro-cid-i3aptplm><h1 data-astro-cid-i3aptplm>All Notes</h1>${notePages.map((note) => {
		return renderTemplate`<a class="view-link"${addAttribute(`./${note.BaseName}`, "href")} data-astro-cid-i3aptplm>${note.BaseName}</a>`;
	})}</div>` })}</body></html>`;
}, "C:/Users/fallone/archive-47/src/pages/devpage.astro", void 0);
var $$file = "C:/Users/fallone/archive-47/src/pages/devpage.astro";
var $$url = "/devpage.html";
// \0virtual:astro:page:src/pages/devpage@_@astro
var page = () => devpage_exports;
export { page };
