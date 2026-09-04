import { t as createComponent } from "./compiler_BmZrZZfK.mjs";
import { b as createAstro, f as renderHead, p as addAttribute, s as renderSlot, u as renderTemplate } from "./server_BtBKAhcd.mjs";
//#region src/layouts/Layout.astro
createAstro("https://astro.build");
var $$Layout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Layout;
	return renderTemplate`<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><meta name="generator"${addAttribute(Astro.generator, "content")}><title>Archive-47</title>${renderHead($$result)}</head><body>${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "/home/evan/archive-47/src/layouts/Layout.astro", void 0);
//#endregion
export { $$Layout as t };
