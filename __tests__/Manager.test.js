const Manager = require("../lib/Manager");

test("test for office number", () => {
  const number = 123456789;
  const employee = new Manager(
    "Johnny Appleseed",
    111,
    "johnny@email.com",
    number
  );
  expect(employee.officeNum).toEqual(number);
});

test("test get role", () => {
  const roleName = "Manager";
  const employee = new Manager(
    "Johnny Appleseed",
    111,
    "johnny@email.com",
    123456789
  );
  expect(employee.getRole()).toEqual(roleName);
});

test("test get office number", () => {
  const number = 123456789;
  const employee = new Manager(
    "Johnny Appleseed",
    111,
    "johnny@email.com",
    number
  );
  expect(employee.getOfficeNum()).toEqual(number);
});
