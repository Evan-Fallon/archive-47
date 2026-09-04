import { t as createComponent } from "./compiler_BmZrZZfK.mjs";
import { b as createAstro, d as maybeRenderHead, i as Fragment, r as renderComponent, s as renderSlot, u as renderTemplate, v as unescapeHTML } from "./server_BtBKAhcd.mjs";
import { t as $$ArchiveHeader } from "./ArchiveHeader_DTf8PFYS.mjs";
import { t as $$Layout } from "./Layout_DFCs1B57.mjs";
//#region src/layouts/TimelineLayout.astro
var $$TimelineLayout = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="content-scroller">${renderComponent($$result, "ArchiveHeader", $$ArchiveHeader, {})}<div class="content-sizer">${renderSlot($$result, $$slots["default"])}</div></div>` })}`;
}, "/home/evan/archive-47/src/layouts/TimelineLayout.astro", void 0);
//#endregion
//#region src/components/AtomDisplayNode.astro
createAstro("https://astro.build");
var $$AtomDisplayNode = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$AtomDisplayNode;
	const { atom } = Astro.props;
	let PriorLine = `
<button class="content-button" popovertarget="content-${atom.Index}">"</button>
<div popover id="content-${atom.Index}" class="node-content-popover">
    ${atom?.PriorLine}
</div>
`;
	let Commentary = `
<button class="commentary-button" popovertarget="commentary-${atom.Index}"> ? </button>
<div popover id="commentary-${atom.Index}" class="node-commentary-popover">
    ${atom?.Commentary}
</div>
`;
	let outputDisplay = `
<div class="display-node basic">
    <div class="name-link">
    <a href=${atom.URL}>${atom.Name}</a> ${atom?.Commentary ? Commentary : ""}
    </div>
    <div class="content-embed">${atom.PriorLine}</div>
</div>`;
	const minorDisplay = `
<div class="display-node minor">
    <div class="name-link">
    <a href=${atom.URL}>${atom.Name}</a> ${PriorLine} ${atom?.Commentary ? Commentary : ""}
    </div>
</div>`;
	const imageDisplay = `
<div class="display-node image">
        <img src="images/${atom["Display Image"]}"/>
    <div class="name-link">
       <a href=${atom.URL}>${atom.OrdinalDay} ${atom.DateString.split("T")[1] ? " - " + atom.DateString.split("T")[1] : ""} - ${atom.Name}</a> ${atom?.Commentary ? Commentary : ""}
    </div>  
</div>`;
	if (atom?.Display === "Minor") outputDisplay = minorDisplay;
	if (atom?.Display === "Image") outputDisplay = imageDisplay;
	return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML(outputDisplay)}` })}`;
}, "/home/evan/archive-47/src/components/AtomDisplayNode.astro", void 0);
//#endregion
export { $$TimelineLayout as n, $$AtomDisplayNode as t };
