import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { S as addAttribute, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_rvue7Aap.mjs";
import { t as createComponent } from "./compiler_B0vGTDZ8.mjs";
import { n as vaultQuery, r as createAstro, t as $$Layout } from "./Layout_1zWQyMLt.mjs";
// src/pages/[dockets].astro
var _dockets__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Dockets,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://astro.build");
async function getStaticPaths() {
	return (await vaultQuery()).filter((note) => note.Frontmatter?.["Archive-47"] === true && note.Frontmatter?.["A47-Class"] === "docket").map((docket) => ({
		params: { dockets: docket.BaseName },
		props: {
			fileContent: docket.FileContent,
			url: docket.Frontmatter.URL
		}
	}));
}
var $$Dockets = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Dockets;
	const { dockets } = Astro.params;
	return renderTemplate`${maybeRenderHead($$result)}<div class="docket-disclaimer">The following is a tool assisted archive of the docket for easier navigation. It is likely sourced from Courtlistener. view the original <a${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer">here</a>.</div>${renderComponent($$result, "Layout", $$Layout, {}, {})}`;
}, "C:/Users/fallone/archive-47/src/pages/[dockets].astro", void 0);
var $$file = "C:/Users/fallone/archive-47/src/pages/[dockets].astro";
var $$url = "/[dockets].html";
// \0virtual:astro:page:src/pages/[dockets]@_@astro
var page = () => _dockets__exports;
export { page };
