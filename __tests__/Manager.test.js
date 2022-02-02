const Manager = require('../lib/Manager.js');

it('should create an object for the Manager', () => {
  const manager = new Manager('name', 401, 'email@gmail.com', 862);

  expect(manager.getOfficeNumber()).toBe(862);
  expect(manager.getRole()).toBe('Manager');

});

