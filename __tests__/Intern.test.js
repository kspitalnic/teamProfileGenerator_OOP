const Intern = require('../lib/Intern.js');

it('should create an object for each intern', () => {
  const intern = new Intern('name', 401, 'email@gmail.com', 1, 'school');

  expect(intern.name).toBe('name');
  expect(intern.id).toEqual(401);
  expect(intern.email).toBe('email@gmail.com');
  expect(intern.phone).toBe(1);
  expect(intern.school).toBe('school')
});