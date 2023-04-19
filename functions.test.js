const functions = require("./functions");

test("is defined", () => {
  expect(functions.getAge("Tanvir Rifat", 23)).toBeDefined();
});

//  for primitive type the matcher would be toBe():

test("sum will be", () => {
  // here toBe() is called the matchers:
  // because it match the left side's result would be:
  expect(functions.sum(4, 2)).toBe(6);
});

// for object the matcher would be toEqual() or, toStrictEqual():
test("Create a new object", () => {
  const obj = { name: "Tanvir Rifat" };
  obj["age"] = 23;
  expect(obj).toStrictEqual({ name: "Tanvir Rifat", age: 23 });
});
