/**
 * @jest-environment jsdom
 */

import formatting from "./format";

test("no alphanumeric", () => {
  expect(formatting("123a")).toBe("123");
});

test("limit 10 chars", () => {
  expect(formatting("1234567890123")).toBe("(123) 456-7890");
});

test("render 3 chars", () => {
  expect(formatting("123")).toBe("123");
});

test("render 4 chars with formatting: ()", () => {
  expect(formatting("1234")).toBe("(123) 4");
});

test("render 7 chars with formatting: () & -", () => {
  expect(formatting("1234567")).toBe("(123) 456-7");
});

test("render 10 chars with full formatting", () => {
  expect(formatting("1234567890")).toBe("(123) 456-7890");
});
