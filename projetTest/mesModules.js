
module.exports = direBonjourn;
/** module.exports c de rendre qlq chose accessible depuis autre fichier
 * dans ce cas ce module export : direBonjour
 * alors export une fonction
 */

/** ou bien :
 * 
 * function direBonjour (){
 * console.log('Bonjour');
 * }
 */

module.exports = {
    direBonjour2: function (){
        console.log('bonjour!');
    },
    age: 20,
    nom: "wissal"
}

const PI = 3.14
module.exports = PI

exports.direBonjour3 = function (){
    console.log('bonj!!!!!!!!');
}

exports.direBonsoir = function() {
    console.log('bonsoir');
}

module.exports = {queCa : direBonjour}