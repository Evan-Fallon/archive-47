import { n as __exportAll, t as createComponent } from "./compiler_BmZrZZfK.mjs";
import { d as maybeRenderHead, r as renderComponent, u as renderTemplate } from "./server_BtBKAhcd.mjs";
import { t as getVar } from "./ingest_70Yz-jOX.mjs";
import { t as $$SubpageLayout } from "./SubpageLayout_BFu_BL4E.mjs";
//#region src/pages/cecot-directory.astro
var cecot_directory_exports = /* @__PURE__ */ __exportAll({
	default: () => $$CecotDirectory,
	file: () => $$file,
	url: () => $$url
});
var $$CecotDirectory = createComponent(async ($$result, $$props, $$slots) => {
	const filteredPages = (await getVar()).filter((atom) => atom.inlineProperties.some((prop) => prop.raw.toLowerCase().includes("the cecot lie")));
	const classes = [...new Set(filteredPages.flatMap((page) => page.frontmatter?.Class?.[0] || []))];
	return renderTemplate`${renderComponent($$result, "SubpageLayout", $$SubpageLayout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="topic-header"><h1> The C.E.C.O.T. Lie</h1></div><div>${classes.map((className) => {
		return renderTemplate`<details class="class-button"><summary>${className}</summary><ul>${filteredPages.filter((page) => page.frontmatter?.Class?.[0] === className).map((page) => {
			return renderTemplate`<li>${page.name}</li>`;
		})}</ul></details>`;
	})}</div>` })}`;
}, "/home/evan/archive-47/src/pages/cecot-directory.astro", void 0);
var $$file = "/home/evan/archive-47/src/pages/cecot-directory.astro";
var $$url = "/cecot-directory.html";
//#endregion
//#region \0virtual:astro:page:src/pages/cecot-directory@_@astro
var page = () => cecot_directory_exports;
//#endregion
export { page };
