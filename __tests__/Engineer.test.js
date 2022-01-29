const Engineer = require('../lib/Engineer.js');

it('should create an object for each engineer', () => {
  const engineer = new Engineer('name', 401, 'email@gmail.com', 'gitHub');

  expect(engineer.name).toBe('myname');
  expect(engineer.id).toEqual(0);
  expect(engineer.email).toBe('myemail');
  expect(engineer.phone).toBe(1);
  expect(engineer.github).toBe('github')
});