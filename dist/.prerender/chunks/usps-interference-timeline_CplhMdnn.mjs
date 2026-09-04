import { n as __exportAll, t as createComponent } from "./compiler_BmZrZZfK.mjs";
import { d as maybeRenderHead, p as addAttribute, r as renderComponent, u as renderTemplate } from "./server_BtBKAhcd.mjs";
import { t as getVar } from "./ingest_70Yz-jOX.mjs";
import { n as $$TimelineLayout, t as $$AtomDisplayNode } from "./AtomDisplayNode_BgVDmh8H.mjs";
//#region src/pages/usps-interference-timeline.astro
var usps_interference_timeline_exports = /* @__PURE__ */ __exportAll({
	default: () => $$UspsInterferenceTimeline,
	file: () => $$file,
	url: () => $$url
});
var $$UspsInterferenceTimeline = createComponent(async ($$result, $$props, $$slots) => {
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
	const inlineProps = (await getVar()).flatMap((page) => page.inlineProperties).filter((atom) => atom.raw.toLowerCase().includes("2026 usps election interference")).sort((a, b) => Temporal.PlainDateTime.compare(a.Date, b.Date));
	let currentNodes = [];
	let currentYears = [{
		year: inlineProps[0].Date.year,
		yIndex: 1,
		yEnd: 2
	}];
	let currentMonths = [{
		month: months[inlineProps[0].Date.month],
		yIndex: 2
	}];
	let currentSpans = [];
	let yIndex = 3;
	inlineProps.forEach((atom) => {
		const thisYear = atom.Date.year;
		const thisMonth = months[atom.Date.month];
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
				yIndex
			});
			yIndex++;
		} else if (thisMonth !== currentMonths[currentMonths.length - 1].month) {
			yIndex++;
			currentMonths.push({
				month: thisMonth,
				yIndex
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
		currentNodes.push({
			...atom,
			Index: yIndex
		});
		yIndex++;
	});
	currentYears[currentYears.length - 1].yEnd = yIndex;
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
	const numberedSpans = spanTracks.map((track, trackInd) => {
		return track.map((span) => {
			return {
				...span,
				trackInd
			};
		});
	}).flat();
	return renderTemplate`${renderComponent($$result, "TimelineLayout", $$TimelineLayout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="topic-header"><h1>The USPS Mid-Term Interference Timeline</h1></div><div class="timeline-base">${currentYears.map((year, yearInd) => {
		return renderTemplate`<div class="timeline-line"${addAttribute(`grid-column: 3 / 4; grid-row: ${year.yIndex + 1} / ${year.yEnd};}`, "style")}></div>`;
	})}<div id="span-column"${addAttribute(`grid-column: 1 / 2; grid-row: 1 / ${yIndex};`, "style")}>${numberedSpans.map((span) => {
		return renderTemplate`<div style="display:contents"><div class="timeline-span"${addAttribute(`grid-row: ${span.yIndex + 1} / ${span.yEnd + 1}; grid-column: ${span.trackInd + 1}`, "style")}><div class="span-name"${addAttribute(`grid-row: ${span.yIndex} / ${span.yEnd + 1}; grid-column: ${span.trackInd + 1}`, "style")}>${span.name}</div></div></div>`;
	})}</div>${currentYears.map((year) => renderTemplate`<div class="timeline-cell year"${addAttribute({
		gridColumn: "1 / 5",
		gridRow: `${year.yIndex} / ${year.yIndex + 1}`
	}, "style")}><p>${year.year}</p><hr></div>`)}${currentMonths.map((month) => renderTemplate`<div class="timeline-cell month"${addAttribute(`
        --anim-delay: ${month.yIndex * 75}ms;
        grid-column: 2 / 3;
        grid-row: ${month.yIndex} / ${month.yIndex + 1};,
      `, "style")}><p>${month.month}</p></div>`)}${currentNodes.map((atom) => renderTemplate`<div${addAttribute(`node-circles ${atom.Display}`, "class")}${addAttribute(`
        grid-column: 3 / 4;
        grid-row: ${atom.Index} / ${atom.Index + 1};
        --anim-delay: ${atom.Index * 125}ms`, "style")}></div>`)}${currentNodes.map((atom) => renderTemplate`<div class="node-day-time"${addAttribute(`
        grid-column: 2 / 3;
        grid-row: ${atom.Index} / ${atom.Index + 1};
        --anim-delay: ${atom.Index * 125}ms`, "style")}><p>${atom.OrdinalDay} ${atom.DateString.split("T")[1] ? " - " + atom.DateString.split("T")[1] : ""}</p></div>`)}${currentNodes.map((atom) => renderTemplate`<div class="timeline-cell node"${addAttribute(`
        grid-column: 4 / 5;
        grid-row: ${atom.Index} / ${atom.Index + 1};
        --anim-delay: ${atom.Index * 90}ms`, "style")}>${renderComponent($$result, "AtomDisplayNode", $$AtomDisplayNode, { "atom": atom })}</div>`)}</div>` })}`;
}, "/home/evan/archive-47/src/pages/usps-interference-timeline.astro", void 0);
var $$file = "/home/evan/archive-47/src/pages/usps-interference-timeline.astro";
var $$url = "/usps-interference-timeline.html";
//#endregion
//#region \0virtual:astro:page:src/pages/usps-interference-timeline@_@astro
var page = () => usps_interference_timeline_exports;
//#endregion
export { page };
