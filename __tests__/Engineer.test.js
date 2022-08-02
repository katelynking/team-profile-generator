const { Engineer } = require('../lib/Engineer');

test('Creates new Engineer', () => {
  const employee = new Engineer('Johnny Appleseed', 1111, 'johnny@email.com', 'john-appleseed');

  expect(employee.name).toBe("Johnny Appleseed");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.github).toEqual(expect.any(String));
})

test('Checks all methods for Engineer class', () => {
  const employee = new Engineer('Johnny Appleseed', 1111, 'johnny@email.com', 'johnny-appleseed');

  expect(employee.getName()).toBe(employee.name);
  expect(employee.getId()).toBe(employee.id);
  expect(employee.getEmail()).toBe(employee.email);
  expect(employee.getGithub()).toBe(employee.github);
  expect(employee.getRole()).toBe('Engineer');
})