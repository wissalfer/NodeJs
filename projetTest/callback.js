function salutation (name){
    console.log('bonjour' + name);
}

function bonjour(name, callback) {
    name? callback(name) : callback('inconnu');
}

bonjour(' Anis', salutation);