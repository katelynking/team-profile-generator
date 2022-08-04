const Intern = require("../lib/Intern");

test("test set school", () => {
  const schoolName = "RU";
  const employee = new Intern(
    "Johnny Appleseed",
    111,
    "johnny@email.com",
    "RU"
  );
  expect(employee.school).toEqual(schoolName);
});

test("test get role", () => {
  const roleName = "Intern";
  const employee = new Intern(
    "Johnny Appleseed",
    111,
    "johnny@email.com",
    "RU"
  );
  expect(employee.getRole()).toEqual(roleName);
});

test("test get school", () => {
  const schoolName = "RU";
  const employee = new Intern(
    "Johnny Appleseed",
    111,
    "johnny@email.com",
    "RU"
  );
  expect(employee.getSchool()).toEqual(schoolName);
});
