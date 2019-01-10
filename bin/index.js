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
  .version("1.0.0");

program
  .command('list')
  .alias('ls')
  .description('Display a list of supported licenses')
  .action((options)=>{
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
  .command('detail <type>')
  .description('View license details')
  .action((type)=>{
	  const license = new genLicense();
    const info = license.getLisenceDetail(type.toLowerCase());
    if( info === null ){
      showError('Can not find license type:'+type);
    }

    console.log(info);
  })
  ;

program
  .command('create <type>')
  .description('Create your license')
  .option('-a, --author <string>',      'Author name')
  .option('-y, --year [number]',        'Copyright year. default:this year', new Date().getFullYear())
  .option('-p, --program [string]',     'Script name')
  .option('-d, --description [string]', 'Description')
  .action((type, options)=>{
    const license = new genLicense();
    const info = license.getLisenceDetail(type.toLowerCase());
    if( info === null ){
      showError('Can not find license type:'+type);
    }
    if( ! ('author' in options) ){
      showError('Please input Author name. (-a, --author option)');
    }
    if( (info.require.indexOf('program') === 1) && ! ('program' in options) ){
      showError('Please input Program name. (-p, --program option)');
    }

    console.log(
      license
        .setLisence(type)
        .get({
            name: options.author
          , year: options.year
          , program: options.program
          , description: options.description
        })
    );
  })
  ;

program
  .command('*', {noHelp: true})
  .action((env)=>{
    program.help();
  })
  ;

program.parse(process.argv);


if( program.args.length === 0 ){
  program.help();
}


/**
 * Show Error and exit process
 *
 * @param {String} msg
 */
function showError(msg){
  console.error(`error: ${msg}`);
  process.exit();
}