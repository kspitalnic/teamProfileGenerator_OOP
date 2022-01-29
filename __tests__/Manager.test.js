const Manager = require('../lib/Manager.js');

it('should create the manager object', () => {
  const manager = new Manager('myname', 0, 'myemail', 1);    


  expect(manager.name).toBe('myname');
  expect(manager.id).toEqual(0);
  expect(manager.email).toBe('myemail');
  expect(manager.phone).toBe(1);
});