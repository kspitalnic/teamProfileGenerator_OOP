const Engineer = require('../lib/Engineer.js');

it('should create an object for each engineer', () => {
  const engineer = new Engineer('name', 401, 'email@gmail.com', 'git');

  expect(engineer.getName()).toBe('name');
  expect(engineer.getId()).toEqual(401);
  expect(engineer.getEmail()).toBe('email@gmail.com');
  expect(engineer.getGithub()).toEqual('git');
  expect(engineer.getRole()).toBe('Engineer');
});

