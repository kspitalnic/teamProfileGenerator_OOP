const Employee = require('../lib/Employee.js');

it('should create an object for each employee', () => {
  const employee = new Employee('name', 401, 'email@gmail.com');

  expect(employee.name).toBe('myname');
  expect(employee.id).toEqual(0);
  expect(employee.email).toBe('myemail');
  expect(employee.phone).toBe(1);
});

