import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { S as addAttribute, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_rvue7Aap.mjs";
import { t as createComponent } from "./compiler_B0vGTDZ8.mjs";
import { n as vaultQuery, r as createAstro, t as $$Layout } from "./Layout_1zWQyMLt.mjs";
// src/pages/[series].astro
var _series__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Series,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://astro.build");
async function getStaticPaths() {
	return (await vaultQuery()).filter((note) => note.Frontmatter?.["Archive-47"] === true && note.Frontmatter?.["A47-Class"] === "series").map((thisSeries) => ({
		params: { series: `${thisSeries.BaseName.toLowerCase().replace(/\s+/g, "-")}-series` },
		props: {
			fileName: thisSeries.BaseName,
			fileContent: thisSeries.FileContent,
			frontmatter: thisSeries.Frontmatter,
			url: thisSeries.Frontmatter.URL
		}
	}));
}
var $$Series = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Series;
	const { fileName, frontmatter } = Astro.props;
	const components = [frontmatter?.["A47-Components"]].flat() || [];
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${components.map((component) => {
		return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(`./${fileName.toLowerCase().replace(/\s+/g, "-")}-${component.toLowerCase()}`, "href")}>${component}</a>`;
	})}` })}`;
}, "C:/Users/fallone/archive-47/src/pages/[series].astro", void 0);
var $$file = "C:/Users/fallone/archive-47/src/pages/[series].astro";
var $$url = "/[series].html";
// \0virtual:astro:page:src/pages/[series]@_@astro
var page = () => _series__exports;
export { page };
