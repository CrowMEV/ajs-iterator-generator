import isGenerator from "../isGenerator";

test.each([
  [new Map(), true],
  [new Set(), true],
  [null, false],
  [10, false],
  ["Kristina", true],
])("IsGenerator test %o expect %s", (obj, exp) => {
  expect(isGenerator(obj)).toBe(exp);
});
