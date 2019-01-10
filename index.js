'use strict';

const fs = require('fs');
const mustache = require('mustache');
const licenses = require('./licenses.json');

module.exports = class gLicense {
	constructor(type=null){
		if(type !== null){
			this.setLisence(type)
		}
	}

	get(opt){
		const tmpl = fs.readFileSync(`template/${this.type}.mst`, {encoding: "utf-8"});
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

	setLisence(type){
		this.type = type;
	}
}


/**
Apache2.0 name, year
BSD 2-Clause name, year
BSD 3-Clause name, year
GPL3.0    name, year, program, description
LGPL3.0   
LGPL2.1   name, year, program, description
MIT       name, year
*/