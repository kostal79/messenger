import { ParamsStateType, QueryParams, queryDataT } from "../types/types";
import dateFormat from "dateformat";

export function createPeriodQuery(
  period: ParamsStateType["period"],
  mask: string
) {
  const searchParams = new URLSearchParams();
  const now = new Date();
  let startDate: queryDataT["date_start"];
  let endDate: queryDataT["date_end"];
  switch (period) {
    case "3 дня":
      startDate = dateFormat(now, mask);
      endDate = dateFormat(now.setDate(now.getDate() + 2), mask);
      searchParams.set("date_start", startDate);
      searchParams.set("date_end", endDate);
      break;
    case "Неделя":
      startDate = dateFormat(now, mask);
      endDate = dateFormat(now.setDate(now.getDate() + 6), mask);
      searchParams.set("date_start", startDate);
      searchParams.set("date_end", endDate);
      break;
    case "Месяц":
      startDate = dateFormat(now, mask);
      endDate = dateFormat(now.setMonth(now.getMonth() + 1), mask);
      searchParams.set("date_start", startDate);
      searchParams.set("date_end", endDate);
      break;
    case "Год":
      startDate = dateFormat(now, mask);
      endDate = dateFormat(now.setFullYear(now.getFullYear() + 1), mask);
      searchParams.set("date_start", startDate);
      searchParams.set("date_end", endDate);
      break;
    default:
      const from = period.from.split(".");
      const to = period.to.split(".");
      const dateFrom = Date.parse(`20${from[2]}-${from[1]}-${from[0]}`);
      const dateTo = Date.parse(`20${to[2]}-${to[1]}-${to[0]}`);
      startDate = dateFormat(dateFrom, mask);
      endDate = dateFormat(dateTo, mask);
      searchParams.set("date_start", startDate);
      searchParams.set("date_end", endDate);
      break;
  }
  return searchParams.toString();
}

export function createCallTypeQuery(callType: ParamsStateType["callType"]) {
  const searchParams = new URLSearchParams();
  switch (callType) {
    case "Все типы":
      break;
    case "Входящие":
      searchParams.set("in_out", "1");
      break;
    case "Исходящие":
      searchParams.set("in_out", "0");
      break;
    default:
      break;
  }
  return searchParams.toString();
}

export function createSortByQuery(sortBy: ParamsStateType["sortBy"]) {
  const searchParams = new URLSearchParams();
  switch (sortBy) {
    case "date":
      searchParams.set("sort_by", "date");
      break;
    case "duration":
      searchParams.set("sort_by", "duration");
      break;

    default:
      searchParams.set("sort_by", "date");
      break;
  }
  return searchParams.toString();
}

export function createOrderQuery(order: ParamsStateType["order"]) {
  const searchParams = new URLSearchParams();
  switch (order) {
    case "DESC":
      searchParams.set("order", "DESC");
      break;
    case "ASC":
      searchParams.set("order", "ASC");
      break;

    default:
      searchParams.set("order", "DESC");
      break;
  }
  return searchParams.toString();
}

export function createLimitQuery(limit: QueryParams["limit"]) {
  if (!limit) return;
  const searchParams = new URLSearchParams();
  searchParams.set("limit", limit.toString());
  return searchParams.toString();
}

export function createOffsetQuery(offset: QueryParams["offset"]) {
  if (!offset) return;
  const searchParams = new URLSearchParams();
  searchParams.set("offset", offset.toString());
  return searchParams.toString();
}

export function createSearchQuery(params: QueryParams) {
  const periodQuery = createPeriodQuery(params.period, "yyyy-mm-dd");
  const callTypeQuery = createCallTypeQuery(params.callType);
  const sortByQuery = createSortByQuery(params.sortBy);
  const orderQuery = createOrderQuery(params.order);
  const limitQuery = createLimitQuery(params.limit);
  const offsetQuery = createOffsetQuery(params.offset);

  let query = [
    periodQuery,
    callTypeQuery,
    sortByQuery,
    orderQuery,
    limitQuery,
    offsetQuery,
  ]
    .filter((item) => item)
    .join("&");
    return query;
}
