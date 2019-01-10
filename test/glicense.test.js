/**
 * Test for gLicense class
 *
 * Author: M.katsube
 */

//--------------------------------------
// Module
//--------------------------------------
const gLicense = require('../index.js');

//--------------------------------------
// Test
//--------------------------------------
test('set/get Lisence type', () => {
  let type = 'mit';
  const license = new gLicense(type);
  expect(license.getLisence()).toBe(type);

  type = 'apache2';
  license.setLisence(type);
  expect(license.getLisence()).toBe(type);
});
