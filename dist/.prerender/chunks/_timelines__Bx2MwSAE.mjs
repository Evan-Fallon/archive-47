import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { t as createComponent } from "./compiler_B0vGTDZ8.mjs";
import { n as vaultQuery, r as createAstro, t as $$Layout } from "./Layout_1zWQyMLt.mjs";
import { t as markdownToHtmlPlus } from "./markdownToHtmlPlus_B9arOtib.mjs";
import { S as addAttribute, _ as createRenderInstruction, c as Fragment, d as renderSlot, h as maybeRenderHead, m as renderTemplate, s as renderComponent, t as spreadAttributes, w as unescapeHTML } from "./server_rvue7Aap.mjs";
import path from "node:path";
import { Temporal } from "@js-temporal/polyfill";
import "marked";
// node_modules/astro/dist/runtime/server/render/script.js
/**
* Relies on the `renderScript: true` compiler option
* @experimental
*/
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
// src/components/DisplayNodes/NodeBasic.astro
createAstro("https://astro.build");
var $$NodeBasic = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$NodeBasic;
	const { entry } = Astro.props;
	const priorLineHtml = await markdownToHtmlPlus(entry.Properties.Content);
	return renderTemplate`${maybeRenderHead($$result)}<div class="display-node basic" data-astro-cid-3kwwtu5t><div class="name-link" data-astro-cid-3kwwtu5t><p data-astro-cid-3kwwtu5t>${entry.EntryName}</p></div><div class="content" data-astro-cid-3kwwtu5t><div class="content-embed" data-astro-cid-3kwwtu5t>${unescapeHTML(priorLineHtml)}</div></div></div>`;
}, "C:/Users/fallone/archive-47/src/components/DisplayNodes/NodeBasic.astro", void 0);
// src/components/DisplayNodes/NodeMinor.astro
createAstro("https://astro.build");
var $$NodeMinor = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$NodeMinor;
	const { entry } = Astro.props;
	`${entry.Index}${entry.Index}${entry.Properties.StrippedLine}`;
	return renderTemplate`${maybeRenderHead($$result)}<div class="display-node minor" data-astro-cid-2it72xhz><div class="name-link" data-astro-cid-2it72xhz><p data-astro-cid-2it72xhz>${entry.EntryName}</p></div></div>`;
}, "C:/Users/fallone/archive-47/src/components/DisplayNodes/NodeMinor.astro", void 0);
// src/components/DisplayNodes/NodeImage.astro
createAstro("https://astro.build");
var $$NodeImage = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$NodeImage;
	const { entry } = Astro.props;
	if (entry.Properties?.Commentary) `${entry.Index}${entry.Index}${entry.Properties.Commentary}`;
	return renderTemplate`${maybeRenderHead($$result)}<div class="display-node image" data-astro-cid-b74il6we><div class="image" data-astro-cid-b74il6we><img${addAttribute(`images/${entry.Properties["Display Image"]}`, "src")} data-astro-cid-b74il6we></div><div class="name-link" data-astro-cid-b74il6we><p data-astro-cid-b74il6we>${entry.EntryName}</p></div></div>`;
}, "C:/Users/fallone/archive-47/src/components/DisplayNodes/NodeImage.astro", void 0);
// src/components/DisplayNodes/NodeTwitter.astro
createAstro("https://astro.build");
var $$NodeTwitter = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$NodeTwitter;
	const { entry } = Astro.props;
	const output = await markdownToHtmlPlus(entry.Properties.Content);
	output.replace(/!\[\[(.*?)\]\]/g, "<img src=\"images/$1\"/>");
	let Commentary = `
<button class="commentary-button" popovertarget="commentary-${entry.Index}"> ? </button>
<div popover id="commentary-${entry.Index}" class="node-commentary-popover">
    ${entry.Properties?.Commentary}
</div>
`;
	return renderTemplate`${maybeRenderHead($$result)}<div class="display-node twitter" data-astro-cid-heftmy3d><div class="name-link" data-astro-cid-heftmy3d><a${addAttribute(entry.Properties.URL, "href")} data-astro-cid-heftmy3d>${entry.EntryName}</a> ${entry.Properties?.Commentary ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(Commentary)}` })}` : ""}</div><div class="twitter embed" data-astro-cid-heftmy3d><div class="twitter header" data-astro-cid-heftmy3d><div class="twitter user-info" data-astro-cid-heftmy3d><img${addAttribute(`images/${entry.Properties.Frontmatter.Icon.slice(2, -2)}`, "src")} class="twitter user-icon" data-astro-cid-heftmy3d><p class="twitter fullname" data-astro-cid-heftmy3d>${entry.Properties.Frontmatter["User Fullname"]}</p><p class="twitter handle" data-astro-cid-heftmy3d>${entry.Properties.Frontmatter["Handle"]}</p></div><img src="images/twitter-logo.png" class="twitter logo" data-astro-cid-heftmy3d></div><span class="twitter content" data-astro-cid-heftmy3d>${unescapeHTML(output)}</span><div class="twitter footer" data-astro-cid-heftmy3d><p class="twitter date" data-astro-cid-heftmy3d>${entry.Properties.Frontmatter.Date}</p><p class="twitter views" data-astro-cid-heftmy3d><b data-astro-cid-heftmy3d>${entry.Properties.Frontmatter.Views}</b> views</p></div><div class="twitter source-link" data-astro-cid-heftmy3d><a${addAttribute(entry.Properties.Frontmatter.URL, "href")} data-astro-cid-heftmy3d>See original on x.com</a></div></div></div>`;
}, "C:/Users/fallone/archive-47/src/components/DisplayNodes/NodeTwitter.astro", void 0);
// src/components/DisplayNodes/NodeTruth.astro
createAstro("https://astro.build");
var $$NodeTruth = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$NodeTruth;
	const { entry } = Astro.props;
	const output = await markdownToHtmlPlus(entry.Properties?.Content || "");
	let Commentary;
	if (entry.Properties?.Commentary) Commentary = `<button class="commentary-button" popovertarget="commentary-${entry.Index}">?</button>
<div popover id="commentary-${entry.Index}" class="node-commentary-popover">
    ${entry.Properties?.Commentary}
</div>`;
	return renderTemplate`${maybeRenderHead($$result)}<div class="display-node truth" data-astro-cid-mujc6juk><div class="name-link" data-astro-cid-mujc6juk><p data-astro-cid-mujc6juk>${entry.EntryName}</p><div class="popover-buttons" data-astro-cid-mujc6juk>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(Commentary)}` })}</div></div><div class="truth embed" data-astro-cid-mujc6juk><div class="truth header" data-astro-cid-mujc6juk><div class="truth user-info" data-astro-cid-mujc6juk><img${addAttribute(`images/${entry.Properties.Frontmatter.Icon.slice(2, -2)}`, "src")} class="truth user-icon" data-astro-cid-mujc6juk><p class="truth fullname" data-astro-cid-mujc6juk>${entry.Properties.Frontmatter["User Fullname"]}</p><p class="truth handle" data-astro-cid-mujc6juk>${entry.Properties.Frontmatter["Handle"]}</p></div><img src="images/Truth_Social_logo_2022-light.png" class="truth logo" data-astro-cid-mujc6juk></div><span class="truth content" data-astro-cid-mujc6juk>${unescapeHTML(output)}</span><div class="truth footer" data-astro-cid-mujc6juk><p class="truth truths" data-astro-cid-mujc6juk><b data-astro-cid-mujc6juk>${entry.Properties.Frontmatter.ReTruths}</b> ReTruths </p><p class="truth views" data-astro-cid-mujc6juk><b data-astro-cid-mujc6juk>${entry.Properties.Frontmatter.Likes}</b> Likes</p><p class="truth date" data-astro-cid-mujc6juk>${entry.Properties.toLocaleString()}</p></div><div class="truth source-link" data-astro-cid-mujc6juk><a${addAttribute(entry.Properties.Frontmatter.URL, "href")} data-astro-cid-mujc6juk>See original on truthsocial.com</a></div></div></div>`;
}, "C:/Users/fallone/archive-47/src/components/DisplayNodes/NodeTruth.astro", void 0);
// src/components/DisplayNodes/NodeYoutube.astro
createAstro("https://astro.build");
var $$NodeYoutube = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$NodeYoutube;
	const { entry } = Astro.props;
	let seconds = 0;
	if (entry.Properties?.Timestamp) seconds = Number(entry.Properties.Timestamp.split(":")[0]) * 60 + Number(entry.Properties.Timestamp.split(":")[1]);
	return renderTemplate`${maybeRenderHead($$result)}<div class="display-node youtube" data-astro-cid-uo5phlx6><div class="name-link" data-astro-cid-uo5phlx6><p data-astro-cid-uo5phlx6>${entry.EntryName}</p></div><div class="youtube-video" data-astro-cid-uo5phlx6><iframe${addAttribute(`${entry.Properties.Frontmatter.EmbedURL}?start=${seconds}`, "src")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen data-astro-cid-uo5phlx6></iframe></div></div>`;
}, "C:/Users/fallone/archive-47/src/components/DisplayNodes/NodeYoutube.astro", void 0);
// src/components/DisplayNodes/NodeYoutubeGroup.astro
createAstro("https://astro.build");
var $$NodeYoutubeGroup = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$NodeYoutubeGroup;
	const { entry } = Astro.props;
	function parseToSeconds(ts) {
		if (!ts) return 0;
		const parts = ts.split(":").map(Number);
		if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
		if (parts.length === 2) return parts[0] * 60 + parts[1];
		return Number(ts) || 0;
	}
	const seconds = parseToSeconds(entry.Properties?.Timestamp);
	const iframeId = `yt-group-${entry.Index}`;
	const sep = entry.Properties.Frontmatter.EmbedURL.includes("?") ? "&" : "?";
	const embedUrl = `${entry.Properties.Frontmatter.EmbedURL}${sep}start=${seconds}&enablejsapi=1`;
	return renderTemplate`${maybeRenderHead($$result)}<div class="display-node youtube-group" tabindex="0" data-astro-cid-pvb3f6sz><div class="content" data-astro-cid-pvb3f6sz><p class="entry-name" data-astro-cid-pvb3f6sz>${entry.EntryName}</p><div class="youtube-group youtube-video" data-astro-cid-pvb3f6sz><iframe${addAttribute(iframeId, "id")}${addAttribute(embedUrl, "src")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen data-astro-cid-pvb3f6sz></iframe></div><div class="timestamp-list"${addAttribute(iframeId, "data-target-iframe")} tabindex="0" data-astro-cid-pvb3f6sz>${entry?.Children?.map((x) => renderTemplate`<p class="timestamp-link"${addAttribute(parseToSeconds(x.Timestamp), "data-seconds")} data-astro-cid-pvb3f6sz>${x.Timestamp} - ${x.Name}</p>`)}</div></div></div>${renderScript($$result, "C:/Users/fallone/archive-47/src/components/DisplayNodes/NodeYoutubeGroup.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/fallone/archive-47/src/components/DisplayNodes/NodeYoutubeGroup.astro", void 0);
// src/components/AtomDisplayNode.astro
createAstro("https://astro.build");
var $$AtomDisplayNode = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$AtomDisplayNode;
	const { entry } = Astro.props;
	const NodeComponent = {
		Basic: $$NodeBasic,
		Minor: $$NodeMinor,
		Image: $$NodeImage,
		Twitter: $$NodeTwitter,
		Truth: $$NodeTruth,
		Youtube: $$NodeYoutube,
		YoutubeGroup: $$NodeYoutubeGroup
	}[entry?.Display] ?? $$NodeBasic;
	return renderTemplate`${renderComponent($$result, "NodeComponent", NodeComponent, { "entry": entry })}`;
}, "C:/Users/fallone/archive-47/src/components/AtomDisplayNode.astro", void 0);
// src/components/DynamicModalLink.astro
createAstro("https://astro.build");
var $$DynamicModalLink = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$DynamicModalLink;
	const { targetUrl, buttonText = "View Highlighted Text", paywalled } = Astro.props;
	return renderTemplate`${renderScript($$result, "C:/Users/fallone/archive-47/src/components/DynamicModalLink.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/fallone/archive-47/src/components/DynamicModalLink.astro", void 0);
// node_modules/@lucide/astro/src/utils/defaultAttributes.ts
var defaultAttributes = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": 2,
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
};
// node_modules/@lucide/astro/src/utils/mergeClasses.ts
/**
* Merges classes into a single string
*
* @param {array} classes
* @returns {string} A string of classes
*/
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
	return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
// node_modules/@lucide/astro/src/utils/buildLucideIconNode.ts
function isDefined(value) {
	return value !== null && value !== void 0;
}
/**
* Creates a Lucide icon node (an svgson-like format) from a Lucide icon object.
*
* @param icon The icon to build.
* @param params Additional build parameters.
*/
function buildLucideIconNode(icon, params = {}) {
	const attributeNames = params.attributeNames ?? {};
	const getAttributeName = (attributeName) => attributeNames[attributeName] ?? attributeName;
	const viewBoxWidth = icon.size ?? icon.width ?? defaultAttributes["width"];
	const viewBoxHeight = icon.size ?? icon.height ?? defaultAttributes["height"];
	const aliasClassNames = icon.aliases?.filter((alias) => typeof alias === "string" && alias.trim() !== "").map((alias) => `lucide-${alias}`) ?? [];
	const iconClassNames = [...icon.name ? [`lucide-${icon.name}`] : [], ...aliasClassNames];
	const classNamesFromClassName = params.className?.split(" ").filter(Boolean) ?? [];
	const className = params.includeDefaultClasses === false ? mergeClasses(...classNamesFromClassName) : mergeClasses("lucide", ...iconClassNames, ...classNamesFromClassName);
	const calculatedStrokeWidth = params.absoluteStrokeWidth ? Number(params.strokeWidth ?? defaultAttributes["stroke-width"]) * Number(icon.size ?? icon.width ?? defaultAttributes["width"]) / Number(params.size ?? params.width ?? defaultAttributes["width"]) : params.strokeWidth ?? defaultAttributes["stroke-width"];
	return [
		"svg",
		{
			...Object.entries(defaultAttributes).reduce((attrs, [attrName, value]) => {
				attrs[getAttributeName(attrName)] = value;
				return attrs;
			}, {}),
			..."color" in params && params.color && { [getAttributeName("stroke")]: params.color },
			..."size" in params && isDefined(params.size) && {
				[getAttributeName("width")]: params.size,
				[getAttributeName("height")]: params.size
			},
			..."width" in params && isDefined(params.width) && { [getAttributeName("width")]: params.width },
			..."height" in params && isDefined(params.height) && { [getAttributeName("height")]: params.height },
			[getAttributeName("stroke-width")]: calculatedStrokeWidth,
			...className && { [getAttributeName("class")]: className },
			[getAttributeName("viewBox")]: `0 0 ${viewBoxWidth} ${viewBoxHeight}`,
			...params.hasA11yProp === false ? { [getAttributeName("aria-hidden")]: "true" } : {},
			..."attributes" in params && params.attributes
		},
		icon.node.map((child) => {
			const [name, attrs, children] = child;
			const nextAttrs = params.nonScalingStroke ? {
				[getAttributeName("vector-effect")]: "non-scaling-stroke",
				...attrs
			} : attrs;
			return children ? [
				name,
				nextAttrs,
				children
			] : [name, nextAttrs];
		})
	];
}
// node_modules/@lucide/astro/src/utils/hasA11yProp.ts
/**
* Check if a component has an accessibility prop
*
* @param {object} props
* @returns {boolean} Whether the component has an accessibility prop
*/
var hasA11yProp = (props) => {
	for (const prop in props) if (prop.startsWith("aria-") || prop === "role" || prop === "title") return true;
	return false;
};
// node_modules/@lucide/astro/src/Icon.astro
createAstro("https://astro.build");
var $$Icon = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Icon;
	const { color = "currentColor", size = 24, width, height, "stroke-width": strokeWidth = 2, absoluteStrokeWidth = false, nonScalingStroke = false, iconNode = [], icon = {
		node: iconNode,
		aliases: [],
		size: 24
	}, class: className, ...rest } = Astro.props;
	const [, builtIconAttributes, builtIconNode = []] = buildLucideIconNode(icon, {
		color,
		width: width ?? size,
		height: height ?? size,
		strokeWidth,
		absoluteStrokeWidth,
		nonScalingStroke,
		className,
		hasA11yProp: hasA11yProp(rest)
	});
	const iconAttributes = {
		...builtIconAttributes,
		...rest
	};
	return renderTemplate`${maybeRenderHead($$result)}<svg${spreadAttributes(iconAttributes)}>${builtIconNode.map(([Tag, attrs]) => renderTemplate`${renderComponent($$result, "Tag", Tag, { ...attrs })}`)}${renderSlot($$result, $$slots["default"])}</svg>`;
}, "C:/Users/fallone/archive-47/node_modules/@lucide/astro/src/Icon.astro", void 0);
// node_modules/@lucide/astro/src/createLucideIcon.ts
function createLucideIcon(iconOrIconName, iconNode = [], aliases = []) {
	const icon = typeof iconOrIconName === "string" ? {
		name: iconOrIconName,
		node: iconNode,
		aliases
	} : iconOrIconName;
	return createComponent(($$result, $$props, $$slots) => {
		const { class: className, ...restProps } = $$props;
		return renderTemplate`${renderComponent($$result, "Icon", $$Icon, {
			class: className,
			icon,
			...restProps
		}, { default: () => renderTemplate`${renderSlot($$result, $$slots["default"])}` })}`;
	}, void 0, "none");
}
// node_modules/@lucide/astro/src/icons/file-lock.ts
/**
* @component @name FileLock
* @description Lucide SVG icon component, renders SVG Element with children.
*
* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNCA5LjhWNGEyIDIgMCAwIDEgMi0yaDhhMi40IDIuNCAwIDAgMSAxLjcwNi43MDZsMy41ODggMy41ODhBMi40IDIuNCAwIDAgMSAyMCA4djEyYTIgMiAwIDAgMS0yIDJoLTMiIC8+CiAgPHBhdGggZD0iTTE0IDJ2NWExIDEgMCAwIDAgMSAxaDUiIC8+CiAgPHBhdGggZD0iTTkgMTd2LTJhMiAyIDAgMCAwLTQgMHYyIiAvPgogIDxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjUiIHg9IjMiIHk9IjE3IiByeD0iMSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/file-lock
* @see https://lucide.dev/guide/packages/lucide-astro - Documentation
*
* @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
* @returns {any} Astro Component
* 
*/
var FileLock = createLucideIcon({
	"name": "file-lock",
	"size": 24,
	"node": [
		["path", { "d": "M4 9.8V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3" }],
		["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }],
		["path", { "d": "M9 17v-2a2 2 0 0 0-4 0v2" }],
		["rect", {
			"width": "8",
			"height": "5",
			"x": "3",
			"y": "17",
			"rx": "1"
		}]
	],
	"aliases": ["file-lock-2"]
});
// node_modules/@lucide/astro/src/icons/message-circle-question-mark.ts
/**
* @component @name MessageCircleQuestionMark
* @description Lucide SVG icon component, renders SVG Element with children.
*
* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMi45OTIgMTYuMzQyYTIgMiAwIDAgMSAuMDk0IDEuMTY3bC0xLjA2NSAzLjI5YTEgMSAwIDAgMCAxLjIzNiAxLjE2OGwzLjQxMy0uOTk4YTIgMiAwIDAgMSAxLjA5OS4wOTIgMTAgMTAgMCAxIDAtNC43NzctNC43MTkiIC8+CiAgPHBhdGggZD0iTTkuMDkgOWEzIDMgMCAwIDEgNS44MyAxYzAgMi0zIDMtMyAzIiAvPgogIDxwYXRoIGQ9Ik0xMiAxN2guMDEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/message-circle-question-mark
* @see https://lucide.dev/guide/packages/lucide-astro - Documentation
*
* @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
* @returns {any} Astro Component
* 
*/
var MessageCircleQuestionMark = createLucideIcon({
	"name": "message-circle-question-mark",
	"size": 24,
	"node": [
		["path", { "d": "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" }],
		["path", { "d": "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }],
		["path", { "d": "M12 17h.01" }]
	],
	"aliases": ["message-circle-question"]
});
// node_modules/@lucide/astro/src/icons/square-text.ts
/**
* @component @name SquareText
* @description Lucide SVG icon component, renders SVG Element with children.
*
* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHg9IjMiIHk9IjMiIHJ4PSIyIiAvPgogIDxwYXRoIGQ9Ik03IDhoOCIgLz4KICA8cGF0aCBkPSJNNyAxMmgxMCIgLz4KICA8cGF0aCBkPSJNNyAxNmg2IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/square-text
* @see https://lucide.dev/guide/packages/lucide-astro - Documentation
*
* @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
* @returns {any} Astro Component
* 
*/
var SquareText = createLucideIcon({
	"name": "square-text",
	"size": 24,
	"node": [
		["rect", {
			"width": "18",
			"height": "18",
			"x": "3",
			"y": "3",
			"rx": "2"
		}],
		["path", { "d": "M7 8h8" }],
		["path", { "d": "M7 12h10" }],
		["path", { "d": "M7 16h6" }]
	]
});
// src/components/TimelineComponents/TimelineButtons.astro
createAstro("https://astro.build");
var $$TimelineButtons = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$TimelineButtons;
	const { targetUrl, index, buttonText = "View Highlighted Text", paywalled, commentary } = Astro.props;
	if (commentary) `${index}${index}${commentary}`;
	let Icon = SquareText;
	if (paywalled) Icon = FileLock;
	return renderTemplate`${maybeRenderHead($$result)}<div class="button-container" data-astro-cid-k3f6z2do>${commentary ? renderTemplate`<button class="commentary-button timeline-button" popovertarget="commentary-\${index}" data-astro-cid-k3f6z2do>${renderComponent($$result, "MessageCircleQuestionMark", MessageCircleQuestionMark, { "data-astro-cid-k3f6z2do": true })}</button><div popover id="commentary-\${index}" class="node-commentary-popover" data-astro-cid-k3f6z2do>${commentary}</div>` : ""}<button type="button" class="timeline-button popup-trigger"${addAttribute(targetUrl, "data-url")} data-astro-cid-k3f6z2do>${renderComponent($$result, "Icon", Icon, { "data-astro-cid-k3f6z2do": true })}${renderComponent($$result, "DynamicModalLink", $$DynamicModalLink, {
		"targetUrl": targetUrl,
		"data-astro-cid-k3f6z2do": true
	})}</button></div>`;
}, "C:/Users/fallone/archive-47/src/components/TimelineComponents/TimelineButtons.astro", void 0);
// src/components/TimelineComponents/YearSpan.astro
createAstro("https://astro.build");
var $$YearSpan = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$YearSpan;
	const { year, start, end } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="timeline-cell year spacer"${addAttribute(`grid-row: ${start} / ${start + 1}`, "style")} data-astro-cid-hb4lfiih></div><div class="timeline-range year"${addAttribute(`grid-row: ${start} / ${end + 1}`, "style")} data-astro-cid-hb4lfiih><span class="year slider" data-astro-cid-hb4lfiih>${year}</span></div>`;
}, "C:/Users/fallone/archive-47/src/components/TimelineComponents/YearSpan.astro", void 0);
// src/components/TimelineComponents/MonthSpan.astro
createAstro("https://astro.build");
var $$MonthSpan = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$MonthSpan;
	const { month, start, end } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="timeline-cell month spacer"${addAttribute(`grid-row: ${start} / ${start + 1}`, "style")} data-astro-cid-nf7vwhxg>${month}</div><div class="timeline-range month"${addAttribute(`grid-row: ${start} / ${end + 1}`, "style")} data-astro-cid-nf7vwhxg><span class="month slider" data-astro-cid-nf7vwhxg>${month}</span></div>`;
}, "C:/Users/fallone/archive-47/src/components/TimelineComponents/MonthSpan.astro", void 0);
// src/components/TimelineComponents/TimelineSpans.astro
createAstro("https://astro.build");
var $$TimelineSpans = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$TimelineSpans;
	const { timelineData } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div id="span-column"${addAttribute(`grid-column: 1 / 2; grid-row: 1 / ${timelineData.Length};`, "style")}>${timelineData.Spans.map((span) => {
		return renderTemplate`<div class="timeline-span"${addAttribute(`grid-row: ${span.yIndex + 1} / ${span.yEnd + 1}; grid-column: ${span.trackInd + 1}`, "style")}><div class="span-name"${addAttribute(`grid-row: ${span.yIndex} / ${span.yEnd + 1}; grid-column: ${span.trackInd + 1}`, "style")}>${span.name}</div></div>`;
	})}</div>`;
}, "C:/Users/fallone/archive-47/src/components/TimelineComponents/TimelineSpans.astro", void 0);
// src/components/TimelineComponents/NodeTimeDay.astro
createAstro("https://astro.build");
var $$NodeTimeDay = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$NodeTimeDay;
	const { ordinalDay, dateString, date, displayClass, index } = Astro.props;
	const time = dateString?.includes("T") ? Temporal.PlainTime.from(dateString) : null;
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(`node-day-time ${displayClass}`, "class")}${addAttribute(`
    grid-column: 2 / 3;
    grid-row: ${index} / ${index + 1};
    --anim-delay: ${index * 125}ms`, "style")}><p class="node-day">${ordinalDay}</p>${dateString?.includes("T") && renderTemplate`<p class="node-time">${time?.toLocaleString().slice(0, -6)}${time?.toLocaleString()?.includes("AM") ? "am" : "pm"}</p>`}</div>`;
}, "C:/Users/fallone/archive-47/src/components/TimelineComponents/NodeTimeDay.astro", void 0);
// src/components/TimelineVertical.astro
createAstro("https://astro.build");
var $$TimelineVertical = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$TimelineVertical;
	const { timelineData } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="timeline-sizer"><div class="timeline-base">${timelineData.Years.map((year) => {
		return renderTemplate`<div class="timeline-line"${addAttribute(`grid-column: 3 / 4; grid-row: ${year.yIndex + 1} / ${year.yEnd};`, "style")}></div>`;
	})}${renderComponent($$result, "TimelineSpans", $$TimelineSpans, { "timelineData": timelineData })}${timelineData.Years.map((year, yearsInd) => {
		let end = year.yIndex + 1;
		if (yearsInd !== timelineData.Years.length - 1) end = timelineData.Years[yearsInd + 1].yIndex + 1;
		else end = timelineData.Length;
		return renderTemplate`${renderComponent($$result, "YearSpan", $$YearSpan, {
			"year": year.year,
			"start": year.yIndex,
			"end": end
		})}`;
	})}${timelineData.Months.map((month, monthInd) => {
		let end = month.yIndex + 1;
		if (monthInd !== timelineData.Months.length - 1) end = timelineData.Months[monthInd + 1].yIndex + 1;
		else end = timelineData.Length;
		return renderTemplate`${renderComponent($$result, "MonthSpan", $$MonthSpan, {
			"month": month.month,
			"start": month.yIndex,
			"end": end
		})}`;
	})}${timelineData.Entries.map((atom) => renderTemplate`<div${addAttribute(`node-circles ${atom.Display}`, "class")}${addAttribute(`
        grid-column: 3 / 4;
        grid-row: ${atom.Index} / ${atom.Index + 1};
        --anim-delay: ${atom.Index * 125}ms`, "style")}></div>`)}${timelineData.Entries.map((entry) => renderTemplate`${renderComponent($$result, "NodeTimeDay", $$NodeTimeDay, {
		"ordinalDay": entry.Properties.OrdinalDay,
		"date": entry.Properties.Date,
		"dateString": entry.Properties.DateString,
		"displayClass": entry.Display,
		"index": entry.Index
	})}`)}${timelineData.Entries.map((entry) => renderTemplate`<div${addAttribute(`timeline-cell entry ${entry.Display.toLowerCase()}`, "class")}${addAttribute(`
        grid-column: 4 / 5;
        grid-row: ${entry.Index} / ${entry.Index + 1};
        --anim-delay: ${entry.Index * 90}ms`, "style")}>${renderComponent($$result, "AtomDisplayNode", $$AtomDisplayNode, { "entry": entry })}</div>`)}${timelineData.Entries.map((entry) => renderTemplate`<div${addAttribute(`timeline-cell buttons ${entry.Display.toLowerCase()}`, "class")}${addAttribute(`
        grid-column: 5 / 6;
        grid-row: ${entry.Index} / ${entry.Index + 1};
        --anim-delay: ${entry.Index * 90}ms`, "style")}>${renderComponent($$result, "TimelineButtons", $$TimelineButtons, {
		"commentary": entry.Properties?.Commentary,
		"targetUrl": entry.Properties.SourceLink,
		"paywalled": entry.Properties?.Paywalled,
		"index": entry.Index
	})}</div>`)}</div></div>`;
}, "C:/Users/fallone/archive-47/src/components/TimelineVertical.astro", void 0);
// src/utils/getOrdinal.ts
function getOrdinal(n) {
	return `${n}${{
		one: "st",
		two: "nd",
		few: "rd",
		other: "th",
		zero: "th",
		many: "th"
	}[new Intl.PluralRules("en-US", { type: "ordinal" }).select(n)]}`;
}
// src/utils/propertyParser.js
function propertyParser(currentObj, key, value) {
	if (key === "Date") {
		currentObj[key] = Temporal.PlainDateTime.from(value) || Temporal.Now.plainDateTimeISO();
		currentObj["DateString"] = value;
		currentObj["OrdinalDay"] = getOrdinal(Number(value.split("T")[0].split("-")[2]));
	} else if (key === "Display Image") currentObj[key] = value.trim().slice(2, -2);
	else if (key === "Series") currentObj[key] = [value.trim().slice(2, -2).split("]], [[")].flat();
	else if (key) currentObj[key] = value ?? "";
	return value;
}
// src/utils/extractContentSection.js
function extractContentSection(markdown) {
	const lines = markdown.split(/\r?\n/);
	const contentHeaderIndex = lines.findIndex((line) => /^# Content\s*$/.test(line.trim()));
	if (contentHeaderIndex === -1) return "";
	const nextSectionIndex = lines.slice(contentHeaderIndex + 1).findIndex((line) => /^#\s+/.test(line.trim()));
	const contentEndIndex = nextSectionIndex === -1 ? lines.length : contentHeaderIndex + 1 + nextSectionIndex;
	return lines.slice(contentHeaderIndex + 1, contentEndIndex).join("\n").trim();
}
// src/utils/loadInlineProperties.ts
function loadInlineProperties(file) {
	const inlineProperties = [];
	for (const match of file.FileContent.matchAll(/%%\(([^:]+)::(.*?)\)%%/g)) {
		const matchIndex = match.index ?? 0;
		const lineNumber = file.FileContent.substring(0, matchIndex).split("\n").length - 1;
		const priorLine = file.FileContent.split("\n")[lineNumber - 1];
		const userInput = match[2].trim();
		const thisInline = {
			Line: lineNumber,
			FileName: file.BaseName,
			raw: userInput,
			SourceLink: file.Frontmatter?.URL,
			Content: priorLine,
			Date: Temporal.Now.plainDateTimeISO(),
			DateString: "01-01-2026",
			Display: "Basic",
			OrdinalDay: "1st",
			Frontmatter: file.Frontmatter,
			Name: ""
		};
		if (userInput.includes(" | ")) userInput.split(" | ").forEach((pair) => {
			let [key, value] = pair.split(": ").map((x) => x.trim());
			propertyParser(thisInline, key, value);
		});
		if (thisInline.Display === "Twitter" || thisInline.Display === "Truth") thisInline.Content = extractContentSection(file.FileContent);
		if (file.Frontmatter?.["Archive-47"] === true) thisInline.SourceLink = `${thisInline.FileName}#:~:text=${priorLine.split(/(?<!\b(?:Mr|Mrs|Dr|Sr|Jr|Inc|Co|Ltd|i\.e|e|\d\.g))\.\s/).map((s) => encodeURIComponent(s)).join("&text=")}`;
		else if (!file.Frontmatter?.Paywalled) {
			const searchTerms = priorLine.split(/(?<!\b(?:Mr|Mrs|Dr|Sr|Jr|Inc|Co|Ltd|i\.e|e\.g))\.\s/).map((s) => encodeURIComponent(s)).join("&text=");
			thisInline.SourceLink = `${file.Frontmatter?.URL}#:~:text=${searchTerms}`;
		}
		inlineProperties.push(thisInline);
	}
	return {
		...file,
		InlineProperties: inlineProperties
	};
}
// src/utils/inlineToTimeline.ts
function inlineToTimeline(inlines) {
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];
	let currentEntries = [];
	let currentYears = [{
		year: inlines[0].Date.year,
		yIndex: 1,
		yEnd: 2
	}];
	let currentMonths = [{
		month: months[inlines[0].Date.month - 1],
		yIndex: 2,
		yEnd: 2
	}];
	let currentSpans = [];
	let yIndex = 3;
	inlines.forEach((atom) => {
		const thisYear = atom.Date.year;
		const thisMonth = months[atom.Date.month - 1];
		if (thisYear !== currentYears[currentYears.length - 1].year) {
			currentYears[currentYears.length - 1].yEnd = yIndex;
			currentYears.push({
				year: thisYear,
				yIndex,
				yEnd: yIndex + 1
			});
			yIndex++;
			currentMonths.push({
				month: thisMonth,
				yIndex,
				yEnd: yIndex + 1
			});
			yIndex++;
		} else if (thisMonth !== currentMonths[currentMonths.length - 1].month) {
			yIndex++;
			currentMonths.push({
				month: thisMonth,
				yIndex,
				yEnd: yIndex + 1
			});
			yIndex++;
		}
		if (atom?.["Span Start"]) currentSpans.push({
			name: atom["Span Start"],
			date: atom.Date,
			yIndex,
			yEnd: yIndex + 1
		});
		if (atom?.["Span End"]) {
			const endSpan = currentSpans.find((span) => span.name === atom["Span End"]);
			if (endSpan) endSpan.yEnd = yIndex;
		}
		currentEntries.push({
			Properties: atom,
			Index: yIndex,
			Display: atom.Display,
			EntryName: atom.Name
		});
		yIndex++;
	});
	currentYears[currentYears.length - 1].yEnd = yIndex;
	currentMonths[currentMonths.length - 1].yEnd = yIndex;
	const spanTracks = [];
	for (const span of currentSpans) {
		let assigned = false;
		for (let i = 0; i < spanTracks.length; i++) if (!spanTracks[i].some((t) => !(t.yEnd <= span.yIndex || span.yEnd <= t.yIndex))) {
			spanTracks[i].push(span);
			assigned = true;
			break;
		}
		if (!assigned) spanTracks.push([span]);
	}
	return {
		Years: currentYears,
		Months: currentMonths,
		Entries: currentEntries,
		SpanTracks: currentSpans,
		Spans: spanTracks.map((track, trackInd) => {
			return track.map((span) => {
				return {
					...span,
					trackInd
				};
			});
		}).flat(),
		Length: yIndex
	};
}
// src/utils/groupEntries.ts
function groupEntries(data) {
	const createEmptyGroup = () => ({
		Properties: data.Entries[0].Properties,
		Children: [],
		EntryName: false,
		Display: "Basic",
		Index: 0
	});
	let currentGroup = createEmptyGroup();
	const groupedEntries = [];
	data.Entries.forEach((entry, index) => {
		if (!entry.Display.includes("Group")) {
			if (currentGroup.EntryName) {
				groupedEntries.push(currentGroup);
				currentGroup = createEmptyGroup();
			}
			groupedEntries.push(entry);
		} else {
			if (!currentGroup.EntryName) {
				currentGroup = entry;
				currentGroup.EntryName = entry.Properties.FileName;
				currentGroup.Children = [entry.Properties];
			} else if (currentGroup.EntryName && currentGroup.EntryName !== entry.Properties.FileName) {
				groupedEntries.push(currentGroup);
				currentGroup = entry;
				currentGroup.EntryName = entry.Properties.FileName;
				currentGroup.Children = [entry.Properties];
			} else currentGroup?.Children?.push(entry.Properties);
			if (index === data.Entries.length - 1) groupedEntries.push(currentGroup);
		}
	});
	data.Entries = groupedEntries;
}
// src/pages/[timelines].astro
var _timelines__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Timelines,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://astro.build");
async function getStaticPaths() {
	return (await vaultQuery()).filter((note) => note.Frontmatter?.["Archive-47"] === true && note.Frontmatter?.["A47-Components"]?.includes("timeline")).map((series) => {
		const basename = path.basename(series.BaseName, path.extname(series.BaseName));
		return {
			params: { timelines: `${basename.toLowerCase().replace(/\s+/g, "-")}-timeline` },
			props: {
				fileName: basename,
				frontmatter: series.Frontmatter
			}
		};
	});
}
var $$Timelines = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Timelines;
	const { timelines } = Astro.params;
	const { frontmatter, fileName } = Astro.props;
	const timelineData = inlineToTimeline((await vaultQuery()).filter((page) => page.FileContent.toLowerCase().includes(fileName.toLowerCase())).map((page) => loadInlineProperties(page)).flatMap((page) => page.InlineProperties).filter((inline) => inline.Series?.map((s) => s.toLowerCase()).includes(fileName.toLowerCase())).sort((a, b) => Temporal.PlainDateTime.compare(a.Date, b.Date)));
	groupEntries(timelineData);
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<h1>${fileName}</h1>${renderComponent($$result, "TimelineVertical", $$TimelineVertical, { "timelineData": timelineData })}` })}`;
}, "C:/Users/fallone/archive-47/src/pages/[timelines].astro", void 0);
var $$file = "C:/Users/fallone/archive-47/src/pages/[timelines].astro";
var $$url = "/[timelines].html";
// \0virtual:astro:page:src/pages/[timelines]@_@astro
var page = () => _timelines__exports;
export { page };
