const { result } = require("lodash");

const division = (a,b, callback) => {
    if (b !== 0) {
        return callback(null, a/b);
    }
    return callback('Probleme de div par zero', null);
};

/**
 * appel au fonction
 */
const a = 10, b=2;
division(a, b, (err,result) =>{
    if(err) {
        console.log("erreur: " +err);
    } else {
        console.log('${a} / ${b} = ${result}')
    }
})