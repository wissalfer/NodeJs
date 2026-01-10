const http = require('http');
const url = require('url');
const querystring = require('querystring');

function calcul(tab, operator) { 
    var result = '';
    for (var i in tab) { 
        result = result + operator + tab[i];
    }
    return eval(result.slice(1));
}

var server = http.createServer(function (req, res) { 
    var pathname = url.parse(req.url).pathname;
    var params = querystring.parse(url.parse(req.url).query);

    res.writeHead(200, { 'Content-type': 'text/plain' }); 
    var result;

    if (pathname === '/addition') { 
        result = calcul(params, '+');
    } else if (pathname === '/soustraction') {
        result = calcul(params, '-');
    } else if (pathname === '/multiplication') { 
        result = calcul(params, '*');
    } else if (pathname === '/division') { 
        result = calcul(params, '/');
    }

    res.end('Resultat : ' + result);
});

server.listen(3000);
