const Intern = require('../lib/Intern.js');

it('should create an object for each intern', () => {
  const intern = new Intern('name', 401, 'email@gmail.com', 'university');

  expect(intern.getSchool()).toBe('university');
  expect(intern.getRole()).toBe('Intern');
});



