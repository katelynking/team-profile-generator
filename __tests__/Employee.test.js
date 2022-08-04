const Employee = require("../lib/Employee");

("Employee instance", () => {
    const employee = new Employee();
    expect(typeof(employee)).toEqual("object");
  });

describe("get name test", () => {
  it("should return name", () => {
    const employee = new Employee("Johnny Appleseed", 111, "johnny@email.com");
    expect(employee.getName()).toEqual("Johnny Appleseed");
  });
});

describe("get ID test", () => {
  it("should return ID", () => {
    const employee = new Employee("Johnny Appleseed", 111, "johnny@email.com");
    expect(employee.getId()).toEqual(111);
  });
});

describe("get email test", () => {
  it("should return email", () => {
    const employee = new Employee("Johnny Appleseed", 111, "johnny@email.com");
    expect(employee.getEmail()).toEqual("johnny@email.com");
  });
});

describe("get role test", () => {
  it("should return role", () => {
    const employee = new Employee("Johnny Appleseed", 111, "johnny@email.com");
    expect(employee.getRole()).toEqual("Employee");
  });
});
