var {createServer} = require('http');

var url = require('url');
var querystring = require('querystring')
var server = createServer((req, res) => {
    var params = querystring.parse(url.parse(req.url).query);
    res.writeHead(200, {"Content-Type": "text/plain"});
    if ('prenom' in params && 'nom' in params) {
        res.write('vous etes ' + params['prenom'] + ' '+params['nom']);
    } else {
        res.write ('vous devez bien avoir un prenom et nom, non ?');
    }

    res.end();
}
);

server.listen(4000, () => {
    console.log('Adresse  du  serveur  :  http://localhost:4000');
})