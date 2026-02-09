const express = require('express');
const app = express()
const port = 4000


app.get('/', function(req, res) {
    res.send('vous etes a la page d\'acceuil su serveur');
});

app.get('/infos/:code', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('vous etes la personne ayant le code ' + req.params.code);
});

app.get('/infos/:code/:nom', function (req, res){
    res.send('vous etes la personne ayant le code ' +req.params.code
        + "et le nom : " + req.params.nom
    );
    res.end(JSON.stringify(infos));
 res.json(infos);
})

app.listen(port, () => {
    console.log(`Server  is  running  on  port  ${port}`)
});