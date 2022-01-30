const Engineer = require('../lib/Engineer.js');

it('should create an object for each engineer', () => {
  const engineer = new Engineer('name', 401, 'email@gmail.com', 1, 'gitHub');

  expect(engineer.name).toBe('name');
  expect(engineer.id).toEqual(401);
  expect(engineer.email).toBe('email@gmail.com');
  expect(engineer.phone).toBe(1);
  expect(engineer.github).toBe('gitHub')
});