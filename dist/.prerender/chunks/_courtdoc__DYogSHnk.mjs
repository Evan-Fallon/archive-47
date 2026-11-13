import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { S as addAttribute, h as maybeRenderHead, m as renderTemplate, s as renderComponent, w as unescapeHTML } from "./server_rvue7Aap.mjs";
import { t as createComponent } from "./compiler_B0vGTDZ8.mjs";
import { n as vaultQuery, r as createAstro, t as $$Layout } from "./Layout_1zWQyMLt.mjs";
import { t as markdownToHtmlPlus } from "./markdownToHtmlPlus_B9arOtib.mjs";
// src/pages/[courtdoc].astro
var _courtdoc__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Courtdoc,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://astro.build");
async function getStaticPaths() {
	return (await vaultQuery()).filter((note) => note.Frontmatter?.["Archive-47"] === true && note.Frontmatter?.["A47-Class"] === "courtdoc").map((courtdoc) => ({
		params: { courtdoc: courtdoc.BaseName },
		props: {
			fileContent: courtdoc.FileContent,
			url: courtdoc.Frontmatter.URL
		}
	}));
}
var $$Courtdoc = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Courtdoc;
	const { courtdoc } = Astro.params;
	const { fileContent, url } = Astro.props;
	let stringOutput = fileContent.split("---").slice(2).join("");
	stringOutput = await markdownToHtmlPlus(stringOutput);
	return renderTemplate`${maybeRenderHead($$result)}<div class="pdf-disclaimer" data-astro-cid-r76wxb6t>The following is a tool assisted archive of the original source for easier navigation. Mistakes are likely. View the original PDF <a${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer" data-astro-cid-r76wxb6t>here</a>.</div>${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-r76wxb6t": true }, { "default": ($$result) => renderTemplate`<div class="pdf-content" data-astro-cid-r76wxb6t><span data-astro-cid-r76wxb6t>${unescapeHTML(stringOutput)}</span></div>` })}`;
}, "C:/Users/fallone/archive-47/src/pages/[courtdoc].astro", void 0);
var $$file = "C:/Users/fallone/archive-47/src/pages/[courtdoc].astro";
var $$url = "/[courtdoc].html";
// \0virtual:astro:page:src/pages/[courtdoc]@_@astro
var page = () => _courtdoc__exports;
export { page };
