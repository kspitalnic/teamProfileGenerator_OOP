const Intern = require('../lib/Intern.js');

it('should create an object for each intern', () => {
  const intern = new Intern('name', 401, 'email@gmail.com', 'school');

  expect(intern.name).toBe('myname');
  expect(intern.id).toEqual(0);
  expect(intern.email).toBe('myemail');
  expect(intern.phone).toBe(1);
  expect(intern.school).toBe('school')
});