import { describe, expect, test } from "@jest/globals";
import {
  createPeriodQuery,
  createCallTypeQuery,
  createSortByQuery,
  createOrderQuery,
  createSearchQuery,
} from "./createSearchQuery";
import dateFormat from "dateformat";
import { QueryParams } from "../../types/types";

describe("Utils createPeriodQuery", () => {
  test("3 дня", () => {
    const now = new Date();
    const dateEndToString = dateFormat(now, "yyyy-mm-dd");

    now.setDate(now.getDate() - 2);
    const dateStartToString = dateFormat(now, "yyyy-mm-dd");

    const query = { startDate: dateStartToString, endDate: dateEndToString };

    expect(createPeriodQuery("3 дня", "yyyy-mm-dd")).toEqual(query);
  });
  test("Неделя", () => {
    const now = new Date();
    const dateEndToString = dateFormat(now, "yyyy-mm-dd");

    now.setDate(now.getDate() - 6);
    const dateStartToString = dateFormat(now, "yyyy-mm-dd");

    const query = { startDate: dateStartToString, endDate: dateEndToString };

    expect(createPeriodQuery("Неделя", "yyyy-mm-dd")).toEqual(query);
  });
  test("Месяц", () => {
    const now = new Date();
    const dateEndToString = dateFormat(now, "yyyy-mm-dd");

    now.setMonth(now.getMonth() - 1);
    const dateStartToString = dateFormat(now, "yyyy-mm-dd");

    const query = { startDate: dateStartToString, endDate: dateEndToString };

    expect(createPeriodQuery("Месяц", "yyyy-mm-dd")).toEqual(query);
  });
  test("Год", () => {
    const now = new Date();
    const dateEndToString = dateFormat(now, "yyyy-mm-dd");

    now.setFullYear(now.getFullYear() - 1);
    const dateStartToString = dateFormat(now, "yyyy-mm-dd");

    const query = { startDate: dateStartToString, endDate: dateEndToString };

    expect(createPeriodQuery("Год", "yyyy-mm-dd")).toEqual(query);
  });
  test("Произвольные даты", () => {
    const period = {
      from: "01.01.24",
      to: "05.01.24",
    };
    const query = { startDate: "2024-01-01", endDate: "2024-01-05" };

    expect(createPeriodQuery(period, "yyyy-mm-dd")).toEqual(query);
  });
});

describe("Utils createCallTypeQuery", () => {
  test("Все типы", () => {
    expect(createCallTypeQuery("Все типы")).toBeUndefined();
  });
  test("Входящие", () => {
    expect(createCallTypeQuery("Входящие")).toBe("1");
  });
  test("Исходящие", () => {
    expect(createCallTypeQuery("Исходящие")).toBe("0");
  });
});

describe("Utils createSortByQuery", () => {
  test("Sort by date", () => {
    expect(createSortByQuery("date")).toBe("date");
  });
  test("Sort by duration", () => {
    expect(createSortByQuery("duration")).toBe("duration");
  });
});

describe("Utils createOrderQuery", () => {
  test("Order ASC", () => {
    expect(createOrderQuery("ASC")).toBe("ASC");
  });
  test("Order DESC", () => {
    expect(createOrderQuery("DESC")).toBe("DESC");
  });
});

describe("Utils createSearchQuery", () => {
  test("All query is used", () => {
    const params: QueryParams = {
      period: {
        from: "01.01.24",
        to: "10.01.24",
      },
      callType: "Входящие",
      sortBy: "date",
      order: "ASC",
      limit: 10,
      page: 5,
    };
    expect(createSearchQuery(params)).toEqual({
      date_start: "2024-01-01",
      date_end: "2024-01-10",
      in_out: "1",
      sort_by: "date",
      order: "ASC",
      limit: "10",
      offset: "50",
    });
  });
});
