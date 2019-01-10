#!/usr/bin/env node
'use strict';

/**
 * Generate Software License
 *
 * @author  M.Katsube <katsubemakito@gmail.com>
 * @license MIT
 */

//--------------------------------------
// Module
//--------------------------------------
const genLicense = require("../index.js");
const program    = require('commander');
const sprintf    = require('printf');

//--------------------------------------
// commander
//--------------------------------------
program
  .command('list', {isDefault: true})
  .alias('ls')
  .action(()=>{
	  const license = new genLicense();
	  const ls = license.getLisenceList();

	  console.log('-------- + -------------------------------------------------  ');
	  console.log('  type   | License name');
	  console.log('-------- + -------------------------------------------------  ');
	  for(let i=0; i<ls.length; i++){
		  console.log( sprintf('%8s | %s', ls[i].key, ls[i].name) );
	  }
  })
  ;

program
  .command('detail')
  .action(()=>{

  })
  ;

program
  .command('create')
  .action(()=>{

  })
  ;

program
  .version("1.0.0")
  .option('-t, --type <string>',        'License type')
  .option('-a, --author <string>',      'Author name')
  .option('-y, --year <number>',        'Copyright year')
  .option('-p, --program [string]',     'Script name')
  .option('-d, --description [string]', 'Description')
  .parse(process.argv);
