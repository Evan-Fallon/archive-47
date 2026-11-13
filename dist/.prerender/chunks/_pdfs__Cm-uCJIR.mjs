import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { S as addAttribute, h as maybeRenderHead, m as renderTemplate, s as renderComponent, w as unescapeHTML } from "./server_rvue7Aap.mjs";
import { t as createComponent } from "./compiler_B0vGTDZ8.mjs";
import { n as vaultQuery, r as createAstro, t as $$Layout } from "./Layout_1zWQyMLt.mjs";
import { t as markdownToHtmlPlus } from "./markdownToHtmlPlus_B9arOtib.mjs";
// src/pages/[pdfs].astro
var _pdfs__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Pdfs,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://astro.build");
async function getStaticPaths() {
	return (await vaultQuery()).filter((note) => note.Frontmatter?.["Archive-47"] === true && note.Frontmatter?.["A47-Class"] === "pdf").map((pdf) => ({
		params: { pdfs: pdf.BaseName.toLowerCase().replace(/\s+/g, "-") },
		props: {
			fileContent: pdf.FileContent,
			url: pdf.Frontmatter.URL,
			fileName: pdf.BaseName
		}
	}));
}
var $$Pdfs = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Pdfs;
	const { pdfs } = Astro.params;
	const { fileContent, url } = Astro.props;
	let stringOutput = fileContent.split("---").slice(2).join("");
	stringOutput = stringOutput.replace(/<p>\s*%%[\s\S]*?%%\s*<\/p>|%%[\s\S]*?%%/g, "");
	const htmlContent = await markdownToHtmlPlus(stringOutput);
	return renderTemplate`${maybeRenderHead($$result)}<div style="height: 50px" data-astro-cid-wavwrbsr></div><div class="pdf-disclaimer" data-astro-cid-wavwrbsr><span data-astro-cid-wavwrbsr>The following is a tool assisted archive of the original source for easier navigation. Mistakes are likely. View the original PDF <a${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer" data-astro-cid-wavwrbsr> here</a>.</span></div>${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-wavwrbsr": true }, { "default": ($$result) => renderTemplate`<div class="pdf-content" data-astro-cid-wavwrbsr><span data-astro-cid-wavwrbsr>${unescapeHTML(htmlContent)}</span></div>` })}`;
}, "C:/Users/fallone/archive-47/src/pages/[pdfs].astro", void 0);
var $$file = "C:/Users/fallone/archive-47/src/pages/[pdfs].astro";
var $$url = "/[pdfs].html";
// \0virtual:astro:page:src/pages/[pdfs]@_@astro
var page = () => _pdfs__exports;
export { page };
