import { t as createComponent } from "./compiler_BmZrZZfK.mjs";
import { d as maybeRenderHead, r as renderComponent, s as renderSlot, u as renderTemplate } from "./server_BtBKAhcd.mjs";
import { t as $$ArchiveHeader } from "./ArchiveHeader_DhYKBZhP.mjs";
import { t as $$Layout } from "./Layout_CQSQkbFv.mjs";
//#region src/layouts/SubpageLayout.astro
var $$SubpageLayout = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="content-scroller">${renderComponent($$result, "ArchiveHeader", $$ArchiveHeader, {})}<div class="content-sizer">${renderSlot($$result, $$slots["default"])}</div></div>` })}`;
}, "C:/Users/fallone/archive-47/src/layouts/SubpageLayout.astro", void 0);
//#endregion
export { $$SubpageLayout as t };
