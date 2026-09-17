import { getOrdinal } from './getOrdinal';

export function propertyParser(currentObj, key, value) {
if (key === "Date") {
    currentObj[key] = Temporal.PlainDateTime.from(value) || Temporal.Now.plainDateTimeISO()
    currentObj["DateString"] = value
    currentObj["OrdinalDay"] = getOrdinal(Number(value.split("T")[0].split("-")[2]))
}
else if (key === "Display Image") {
    currentObj[key] = value.trim().slice(2, -2)
}
else if (key) {currentObj[key] = value ?? ''} 
    return value 
}