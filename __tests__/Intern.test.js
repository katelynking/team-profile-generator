const { Intern } = require('../lib/Intern');

test('Creates new Intern', () => {
    const employee = new Intern('Johnny Appleseed', 1111, 'johnny@email.com', 'RU');

    expect(employee.name).toBe("Johnny Appleseed");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.school).toEqual(expect.any(String));
})

test('Checks all methods for Interns class', () => {
    const employee = new Intern('Johnny Appleseed', 1111, 'johnny@appleseed.com', 'RU');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getSchool()).toBe(employee.school);
    expect(employee.getRole()).toBe('Intern');
})