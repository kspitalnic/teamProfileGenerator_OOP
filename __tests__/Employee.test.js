const Employee = require('../lib/Employee.js');

it('should create an object for each employee', () => {
  const employee = new Employee('name', 401, 'email@gmail.com', 1);

  expect(employee.name).toBe('name');
  expect(employee.id).toEqual(401);
  expect(employee.email).toBe('email@gmail.com');
  expect(employee.phone).toBe(1);
});


