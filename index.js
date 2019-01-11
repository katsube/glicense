/**
 * Generate License class
 *
 * @author  M.Katsube <katsubemakito@gmail.com>
 * @license MIT
 */

 'use strict';

//--------------------------------------
// Module
//--------------------------------------
const fs = require('fs');
const mustache = require('mustache');
const licenses = require('./licenses.json');

/**
 * gLicense Class
 */
module.exports = class gLicense {
  /**
   * Constructor
   *
   * @param {String} type
   * @return {void}
   */
  constructor(type=null){
    if(type !== null){
      this.setLicense(type);
    }
    this.tmplfile = null;
  }

  /**
   * Generate license statement
   *
   * @param {Object} opt
   * @return {String}
   */
  get(opt){
    const file = (this.tmplfile!==null)? this.tmplfile:`${__dirname}/template/${this.type}.mst`;
    try{
      const tmpl = fs.readFileSync(file, {encoding: "utf-8"});
      return( mustache.render(tmpl, opt) );
    }
    catch(e){
      return(false);
    }
  }

  /**
   * getLisenceList
   *
   * @param void
   * @return {Object}
   */
  getLicenseList(){
    let result = [];
    for(let l in licenses){
      result.push({key:l, name:licenses[l].name});
    }
    return(result);
  }

  /**
   * getLisenceDetail
   *
   * @param {String} type
   * @return {Object}
   */
  getLicenseDetail(type){
    if( type in licenses ){
      return(licenses[type]);
    }
    else{
      return(null);
    }
  }

  /**
   * Set Lisence type
   *
   * @param {String} type
   * @return {Object}
   */
  setLicense(type){
    if( type in licenses ){
      this.type = type;
    }
    else{
      throw new Error("Undefined license: " + type);
    }

    return(this);
  }
  /**
   * Get Lisence type
   *
   * @param void
   * @return {String}
   */
  getLicense(){
    return(this.type);
  }

  /**
   * Set Template file path
   *
   * @param {String} path
   * @return {Object}
   */
  setTemplate(path){
    this.tmplfile = path;
    return(this);
  }
  /**
   * Get Template file path
   *
   * @param {Void}
   * @return {String}
   */
  getTemplate(){
    return(this.tmplfile);
  }
}