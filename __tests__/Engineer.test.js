const Engineer = require("../lib/Engineer");

test("github input test", () => {
  const githubName = "japp111";
  const employee = new Engineer(
    "Johnny Appleseed",
    111,
    "johnny@email.com",
    "japp111"
  );
  expect(employee.github).toEqual(githubName);
});

test("test get role", () => {
    const employee = new Engineer(
      "Johnny Appleseed",
      111,
      "johnny@email.com",
      "japp111"
    );
    expect(employee.getRole()).toEqual("Engineer");

});

test("test get github", () => {
    const employee = new Engineer(
      "Johnny Appleseed",
      111,
      "johnny@email.com",
      "japp111"
    );
    expect(employee.getGithub()).toEqual("japp111");

});
