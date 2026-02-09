/*var os = require("os");
console.log("arch:", os.cpus.length);
console.log("nbr cpu:", os.hostname);
console.log("hostname", os.hostname);
console.log("rep", os.homedir);*/


var  math =  require('lodash'); 
console.log(math.map([1,  5,  3],  function  (a)  {
return  a * 2
}));

var mod = require('./mesModules')
mod.direBonjour3();
mod.direBonsoir();

/**
 * require : sert a importer un module
 * comme mesModules export une fonction mod devient cette fonction (mod=direBonjour='bonjour')
 */

mod.direBonjour()
console.log(mod.age)
console.log(mod.nom)

var pi = require('./mesModules')
console.log(pi)

mod.queCa();


