const Employee = require('../lib/Employee.js');

it('should create an object for each employee', () => {
  const employee = new Employee('name', 401, 'email@gmail.com');

  // 
  expect(employee.getName()).toBe('name');
  expect(employee.getId()).toEqual(401);
  expect(employee.getEmail()).toBe('email@gmail.com');
  expect(employee.getRole()).toBe('Employee');
});


