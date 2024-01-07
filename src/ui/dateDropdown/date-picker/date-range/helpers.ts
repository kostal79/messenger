import dateFormat from "dateformat";

export function dateToString(
  startDate: Date | null,
  endDate: Date | null
): string {
  const formattedStart = startDate ? dateFormat(startDate, "ddmmyy") : "";
  const formattedEnd = endDate ? dateFormat(endDate, "ddmmyy") : "";
  return formattedStart + formattedEnd;
}

export function fromMaskedStringToDate(string: string) {
  const [sd, sm, sy] = string
    .split("-")[0]
    .split(".")
    .map((str) => Number(str));
  const [ed, em, ey] = string
    .split("-")[1]
    .split(".")
    .map((str) => Number(str));
  let startDate;
  let endDate;
  if (!isNaN(sd) && !isNaN(sm) && !isNaN(sy)) {
    startDate = new Date(2000 + sy, sm - 1, sd);
  }
  if (!isNaN(ed) && !isNaN(em) && !isNaN(ey)) {
    endDate = new Date(2000 + ey, em - 1, ed);
  }

  return [startDate, endDate];
}
