import glob from "fast-glob";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { Temporal } from "@js-temporal/polyfill";
//#region src/utils/getOrdinal.ts
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
//#endregion
//#region src/utils/ingest.ts
var vaultpath = "/home/evan/Documents/Mitty's everything/";
async function getVar() {
	return (await glob("**/*.md", {
		cwd: vaultpath,
		absolute: true
	})).map((file) => {
		const rawfile = fs.readFileSync(file, "utf8");
		let frontmatter = {};
		try {
			frontmatter = matter(rawfile).data;
		} catch (error) {
			frontmatter = "FAILED";
		}
		const inlineProperties = [];
		for (const match of rawfile.matchAll(/%%\(([^:]+)::(.*?)\)%%/g)) {
			const matchIndex = match.index ?? 0;
			const lineNumber = rawfile.substring(0, matchIndex).split("\n").length - 1;
			const priorLine = rawfile.split("\n")[lineNumber - 1];
			const userInput = match[2].trim();
			const propEntry = {
				Line: lineNumber,
				Path: file,
				raw: userInput,
				PriorLine: priorLine,
				Date: Temporal.Now.plainDateTimeISO(),
				OrdinalDay: "1st"
			};
			if (userInput.includes(" | ")) userInput.split(" | ").forEach((pair) => {
				const [key, value] = pair.split(": ").map((x) => x.trim());
				if (key === "Date") {
					propEntry[key] = Temporal.PlainDateTime.from(value) || Temporal.Now.plainDateTimeISO();
					propEntry["DateString"] = value;
					propEntry["OrdinalDay"] = getOrdinal(Number(value.split("T")[0].split("-")[2]));
				} else if (key === "Display Image") propEntry[key] = value.trim().slice(2, -2);
				else if (key) propEntry[key] = value ?? "";
			});
			propEntry.URL = frontmatter?.URL;
			inlineProperties.push(propEntry);
		}
		return {
			name: path.basename(file, ".md"),
			frontmatter,
			inlineProperties
		};
	});
}
//#endregion
export { getVar as t };
