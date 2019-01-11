/**
 * Test for gLicense class
 *
 * Author: M.katsube
 */

//--------------------------------------
// Module
//--------------------------------------
const gLicense = require('../index.js');
const licenses = require('../licenses.json');

//--------------------------------------
// Test
//--------------------------------------
//-------------------
// Generate
//-------------------
test('get() - MIT', () => {
  const license = new gLicense('mit');
  let author = 'M.Katsube';
  let year   = new Date().getFullYear();
  let buff   = license.get({name:author, year:year});

  expect(buff).toEqual(expect.stringMatching(/MIT License/));
  expect(buff).toEqual(expect.stringMatching(new RegExp(author)));
  expect(buff).toEqual(expect.stringMatching(new RegExp(year)));
});
test('get() - GPLv3', () => {
  const license = new gLicense('gpl3');
  let author  = 'M.Katsube';
  let year    = new Date().getFullYear();
  let program = 'Mother Goose';
  let desc    = 'Humpty Dumpty sat on a wall,Humpty Dumpty had a great fall.';
  let buff    = license.get({name:author, year:year, program:program, description:desc});

  expect(buff).toEqual(expect.stringMatching(/GNU GENERAL PUBLIC LICENSE/));
  expect(buff).toEqual(expect.stringMatching(new RegExp(author)));
  expect(buff).toEqual(expect.stringMatching(new RegExp(year)));
  expect(buff).toEqual(expect.stringMatching(new RegExp(program)));
  expect(buff).toEqual(expect.stringMatching(new RegExp(desc)));
});
test('get() - Template path error', () => {
  const license = new gLicense();
  license.setTemplate('foobar');
  expect(license.get()).toBe(false);
});
test('get() - License type not set ', () => {
  const license = new gLicense();
  expect(license.get()).toBe(false);
});

//-------------------
// Lisence
//-------------------
test('set/get Lisence type', () => {
  const license = new gLicense();
  const type = 'apache2';
  license.setLisence(type);
  expect(license.getLisence()).toBe(type);
});
test('set/get Lisence type - undefined', () => {
  const license = new gLicense();
  expect( ()=>{license.setLisence('XXXXX')} ).toThrowError(Error);
});
test('set/get Lisence type - constructor', () => {
  const type = 'mit';
  const license = new gLicense(type);
  expect(license.getLisence()).toBe(type);
});

test('getLisenceList()', () => {
  const license = new gLicense();
  const buff = license.getLisenceList();
  expect(buff.length).toBe(Object.keys(licenses).length);
  expect(buff).toContainEqual({key:'mit', name:'MIT License'});
});

test('getLisenceDetail()', () => {
  const license = new gLicense();
  expect(license.getLisenceDetail('XXXXX')).toBe(null);
  expect(license.getLisenceDetail('mit')).toBe(licenses['mit']);
});


//-------------------
// Template
//-------------------
test('set/get Template', () => {
  const path = 'template/mit.mst';
  const license = new gLicense();
  expect(license.getTemplate()).toBe(null);
  license.setTemplate(path);
  expect(license.getTemplate()).toBe(path);
});