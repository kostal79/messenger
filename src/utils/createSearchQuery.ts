import { ParamsStateType, QueryParams, queryDataT } from "../types/types";
import dateFormat from "dateformat";

export function createPeriodQuery(
  period: ParamsStateType["period"],
  mask: string
) {
  const now = new Date();
  let startDate: queryDataT["date_start"];
  let endDate: queryDataT["date_end"];
  switch (period) {
    case "3 дня":
      endDate = dateFormat(now, mask);
      startDate = dateFormat(now.setDate(now.getDate() - 2), mask);
      break;
    case "Неделя":
      endDate = dateFormat(now, mask);
      startDate = dateFormat(now.setDate(now.getDate() - 6), mask);
      break;
    case "Месяц":
      endDate = dateFormat(now, mask);
      startDate = dateFormat(now.setMonth(now.getMonth() - 1), mask);
      break;
    case "Год":
      endDate = dateFormat(now, mask);
      startDate = dateFormat(now.setFullYear(now.getFullYear() - 1), mask);
      break;
    default:
      const from = period.from.split(".");
      const to = period.to.split(".");
      const dateFrom = Date.parse(`20${from[2]}-${from[1]}-${from[0]}`);
      const dateTo = Date.parse(`20${to[2]}-${to[1]}-${to[0]}`);
      startDate = dateFormat(dateFrom, mask);
      endDate = dateFormat(dateTo, mask);
      break;
  }
  return { startDate, endDate };
}

export function createCallTypeQuery(callType: ParamsStateType["callType"]) {
  let searchParams: queryDataT["in_out"];
  switch (callType) {
    case "Все типы":
      break;
    case "Входящие":
      searchParams = "1";
      break;
    case "Исходящие":
      searchParams = "0";
      break;
    default:
      break;
  }
  return searchParams;
}

export function createSortByQuery(sortBy: ParamsStateType["sortBy"]) {
  let searchParams: queryDataT["sort_by"];
  switch (sortBy) {
    case "date":
      searchParams = "date";
      break;
    case "duration":
      searchParams = "duration";
      break;

    default:
      searchParams = "date";
      break;
  }
  return searchParams;
}

export function createOrderQuery(order: ParamsStateType["order"]) {
  let searchParams: queryDataT["order"];
  switch (order) {
    case "DESC":
      searchParams = "DESC";
      break;
    case "ASC":
      searchParams = "ASC";
      break;

    default:
      searchParams = "DESC";
      break;
  }
  return searchParams;
}

export function createLimitQuery(limit: QueryParams["limit"]) {
  let searchParams: queryDataT["limit"];
  if (limit) searchParams=limit.toString();
  return searchParams;
}

export function createOffsetQuery(offset: QueryParams["offset"]) {
  let searchParams : queryDataT["offset"];
  if (offset) searchParams = offset.toString();
  return searchParams;
}

export function createSearchQuery(params: QueryParams) {
  const periodQuery = createPeriodQuery(params.period, "yyyy-mm-dd");
  const callTypeQuery = createCallTypeQuery(params.callType);
  const sortByQuery = createSortByQuery(params.sortBy);
  const orderQuery = createOrderQuery(params.order);
  const limitQuery = createLimitQuery(params.limit);
  const offsetQuery = createOffsetQuery(params.offset);

  const query = {
    date_start: periodQuery.startDate,
    date_end: periodQuery.endDate,
    in_out: callTypeQuery,
    sort_by: sortByQuery,
    order: orderQuery,
    limit: limitQuery,
    offset: offsetQuery,
  }
  return query;
}
