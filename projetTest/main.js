var {searchElement} = require('./searchElement')
var {data} = require('./data')

searchElement(data, function(err, result) {
    if (err) {
        console.log("erreur" + err);
    }
    else 
        console.log(data.filtre + " existe a la pos" + result)
})

setTimeout(() => console.log('a'), 50);