import { $ as AstroError, S as addAttribute, Z as UnavailableAstroGlobal, d as renderSlot, g as renderHead, h as maybeRenderHead, m as renderTemplate, nt as ASTRO_GENERATOR, s as renderComponent } from "./server_rvue7Aap.mjs";
import { t as createComponent } from "./compiler_B0vGTDZ8.mjs";
import glob from "fast-glob";
import fs from "node:fs/promises";
import pLimit from "p-limit";
import path from "node:path";
import matter from "gray-matter";
import "@js-temporal/polyfill";
// node_modules/astro/dist/runtime/server/astro-global.js
function createError(name) {
	return new AstroError({
		...UnavailableAstroGlobal,
		message: UnavailableAstroGlobal.message(name)
	});
}
function createAstro(site) {
	return {
		get site() {
			console.warn(`Astro.site inside getStaticPaths is deprecated and will be removed in a future major version of Astro. Use import.meta.env.SITE instead`);
			return site ? new URL(site) : void 0;
		},
		get generator() {
			console.warn(`Astro.generator inside getStaticPaths is deprecated and will be removed in a future major version of Astro.`);
			return ASTRO_GENERATOR;
		},
		get callAction() {
			throw createError("callAction");
		},
		get clientAddress() {
			throw createError("clientAddress");
		},
		get cookies() {
			throw createError("cookies");
		},
		get csp() {
			throw createError("csp");
		},
		get currentLocale() {
			throw createError("currentLocale");
		},
		get getActionResult() {
			throw createError("getActionResult");
		},
		get isPrerendered() {
			throw createError("isPrerendered");
		},
		get locals() {
			throw createError("locals");
		},
		get originPathname() {
			throw createError("originPathname");
		},
		get params() {
			throw createError("params");
		},
		get preferredLocale() {
			throw createError("preferredLocale");
		},
		get preferredLocaleList() {
			throw createError("preferredLocaleList");
		},
		get props() {
			throw createError("props");
		},
		get redirect() {
			throw createError("redirect");
		},
		get request() {
			throw createError("request");
		},
		get response() {
			throw createError("response");
		},
		get rewrite() {
			throw createError("rewrite");
		},
		get routePattern() {
			throw createError("routePattern");
		},
		get self() {
			throw createError("self");
		},
		get slots() {
			throw createError("slots");
		},
		get url() {
			throw createError("url");
		},
		get session() {
			throw createError("session");
		},
		get cache() {
			throw createError("cache");
		},
		get logger() {
			throw createError("logger");
		}
	};
}
// src/utils/vaultQuery.ts
var vaultpath = "C:\\Users\\fallone\\Documents\\Mitty's Everything";
var limit = pLimit(500);
var cachedQuery = null;
async function vaultQuery() {
	if (cachedQuery) {
		console.log("cached already");
		return cachedQuery;
	}
	cachedQuery = queryVault();
	const results = await cachedQuery;
	console.log("initial cache");
	return results;
}
async function queryVault() {
	const tasks = (await glob("**/*.md", {
		cwd: vaultpath,
		absolute: true
	})).map((filePath) => limit(async () => {
		const rawfile = await fs.readFile(filePath, "utf8");
		let frontmatter = {};
		try {
			frontmatter = matter(rawfile).data;
		} catch (error) {
			frontmatter = { parsed: false };
		}
		return {
			Path: filePath,
			Frontmatter: frontmatter,
			FileContent: rawfile,
			BaseName: path.basename(filePath, path.extname(filePath)),
			InlineProperties: []
		};
	}));
	cachedQuery = Promise.all(tasks);
	const results = await cachedQuery;
	console.log("initial cache");
	return results;
}
// src/components/ArchiveHeader.astro
var $$ArchiveHeader = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<div class="web-header" data-astro-cid-k3sj5lod><div class="title" data-astro-cid-k3sj5lod>LibDocket</div><div class="navBar" data-astro-cid-k3sj5lod><a href="./" data-astro-cid-k3sj5lod>Back to Index</a><a href="./devpage" data-astro-cid-k3sj5lod>Dev Page</a></div></div>`;
}, "C:/Users/fallone/archive-47/src/components/ArchiveHeader.astro", void 0);
var $$Layout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Layout;
	return renderTemplate`<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><meta name="generator"${addAttribute(Astro.generator, "content")}><title>Archive-47</title>${renderHead($$result)}</head><body><div class="content-scroller">${renderComponent($$result, "ArchiveHeader", $$ArchiveHeader, {})}<div class="content-sizer">${renderSlot($$result, $$slots["default"])}</div></div></body></html>`;
}, "C:/Users/fallone/archive-47/src/layouts/Layout.astro", void 0);
export { vaultQuery as n, createAstro as r, $$Layout as t };
