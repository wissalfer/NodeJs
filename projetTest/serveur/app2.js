const {createServer} = require('http');

const server = createServer((request, response) => {
    response.writeHead(200);
    response.write('<!DOCTYPE  html>'  +
                    '<html>'  + 
                    '  <head>'  +
                    '  <meta  charset="utf-8"  />'  +
                    '  <title>Ma  page  Node.js  </title>'  + 
                    '  </head>'  +
                    '  <body>'  +
                    '  <p>Hello  world</p>'  + 
                    '  </body>'  + '</html>'
    );
    response.end();
})

server.listen(4000, () => {
  console.log('Adresse du serrveur : http://localhost:4000')

})