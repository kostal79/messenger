import { describe, expect, test } from "@jest/globals";
import {
  createPeriodQuery,
  createCallTypeQuery,
  createSortByQuery,
  createOrderQuery,
  createSearchQuery,
} from "./createSearchQuery";
import dateFormat from "dateformat";
import { QueryParams } from "../types/types";

describe("Utils createPeriodQuery", () => {
  test("3 дня", () => {
    const now = new Date();
    const dateStartToString = dateFormat(now, "yyyy-mm-dd");

    now.setDate(now.getDate() + 2);
    const dateEndToString = dateFormat(now, "yyyy-mm-dd");

    const query = `date_start=${dateStartToString}&date_end=${dateEndToString}`;

    expect(createPeriodQuery("3 дня", "yyyy-mm-dd")).toBe(query);
  });
  test("Неделя", () => {
    const now = new Date();
    const dateStartToString = dateFormat(now, "yyyy-mm-dd");

    now.setDate(now.getDate() + 6);
    const dateEndToString = dateFormat(now, "yyyy-mm-dd");

    const query = `date_start=${dateStartToString}&date_end=${dateEndToString}`;

    expect(createPeriodQuery("Неделя", "yyyy-mm-dd")).toBe(query);
  });
  test("Месяц", () => {
    const now = new Date();
    const dateStartToString = dateFormat(now, "yyyy-mm-dd");

    now.setMonth(now.getMonth() + 1);
    const dateEndToString = dateFormat(now, "yyyy-mm-dd");

    const query = `date_start=${dateStartToString}&date_end=${dateEndToString}`;

    expect(createPeriodQuery("Месяц", "yyyy-mm-dd")).toBe(query);
  });
  test("Год", () => {
    const now = new Date();
    const dateStartToString = dateFormat(now, "yyyy-mm-dd");

    now.setFullYear(now.getFullYear() + 1);
    const dateEndToString = dateFormat(now, "yyyy-mm-dd");

    const query = `date_start=${dateStartToString}&date_end=${dateEndToString}`;

    expect(createPeriodQuery("Год", "yyyy-mm-dd")).toBe(query);
  });
  test("Произвольные даты", () => {
    const period = {
      from: "01.01.24",
      to: "05.01.24",
    };
    const query = "date_start=2024-01-01&date_end=2024-01-05";

    expect(createPeriodQuery(period, "yyyy-mm-dd")).toBe(query);
  });
});

describe("Utils createCallTypeQuery", () => {
  test("Все типы", () => {
    expect(createCallTypeQuery("Все типы")).toBe("");
  });
  test("Входящие", () => {
    expect(createCallTypeQuery("Входящие")).toBe("in_out=1");
  });
  test("Исходящие", () => {
    expect(createCallTypeQuery("Исходящие")).toBe("in_out=0");
  });
});

describe("Utils createSortByQuery", () => {
  test("Sort by date", () => {
    expect(createSortByQuery("date")).toBe("sort_by=date");
  });
  test("Sort by duration", () => {
    expect(createSortByQuery("duration")).toBe("sort_by=duration");
  });
});

describe("Utils createOrderQuery", () => {
  test("Order ASC", () => {
    expect(createOrderQuery("ASC")).toBe("order=ASC");
  });
  test("Order DESC", () => {
    expect(createOrderQuery("DESC")).toBe("order=DESC");
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
      offset: 5,
    };
    expect(createSearchQuery(params)).toBe(
      "date_start=2024-01-01&date_end=2024-01-10&in_out=1&sort_by=date&order=ASC&limit=10&offset=5"
    );
  });
  test("Only required params", () => {
    const params: QueryParams = {
      period: {
        from: "01.01.24",
        to: "10.01.24",
      },
      callType: "Входящие",
      sortBy: "date",
      order: "ASC",
    };
    expect(createSearchQuery(params)).toBe(
      "date_start=2024-01-01&date_end=2024-01-10&in_out=1&sort_by=date&order=ASC"
    );
  });
  test("Only required params and all call types", () => {
    const params: QueryParams = {
      period: {
        from: "01.01.24",
        to: "10.01.24",
      },
      callType: "Все типы",
      sortBy: "date",
      order: "ASC",
    };
    expect(createSearchQuery(params)).toBe(
      "date_start=2024-01-01&date_end=2024-01-10&sort_by=date&order=ASC"
    );
  });
});
