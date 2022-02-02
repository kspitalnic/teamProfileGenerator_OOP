const Employee = require('../lib/Employee.js');

it('should create an object for each employee', () => {
  const employee = new Employee('name', 401, 'email@gmail.com', 'employee');

  // 
  expect(getName()).toBe('name');
  expect(getId()).toEqual(401);
  expect(getEmail()).toBe('email@gmail.com');
  expect(getRole()).toBe('employee');
});


