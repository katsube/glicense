'use strict';

const fs = require('fs');
const mustache = require('mustache');
const licenses = require('./licenses.json');

module.exports = class gLicense {
	constructor(type=null){
		if(type !== null){
			this.setLisence(type)
    }
    this.tmplfile = null;
	}

	get(opt){
    const file = (this.tmplfile!==null)? this.tmplfile:`template/${this.type}.mst`;
		const tmpl = fs.readFileSync(file, {encoding: "utf-8"});
    return( mustache.render(tmpl, opt) );
	}

	getList(){
		return( licenses );
	}

  getLisenceList(){
		let result = [];
		for(let l in licenses){
			result.push({key:l, name:licenses[l].name});
		}
		return(result);
	}

	getLisenceDetail(type){
    if( type in licenses ){
      return(licenses[type]);
    }
    else{
      return(null);
    }
  }

  setLisence(type){
    this.type = type;
    return(this);
	}
  setTemplate(path){
    this.tmplfile = path;
    return(this);
  }
}