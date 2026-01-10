/*var  {searchElement}  =  require('./searchElement') 
var  {data}  =  require('./data')
searchElement(data,  function  (err,  result)  { 
if (err)
console.error("erreur  :"  +  err) 
else
console.log(data.filtre  +  "  existe  a  la  position  "  +  result)
});*/

/*var  {createServer}  =  require('http');
var  server  =  createServer(  (req,  res)  =>  { 
res.writeHead(200,  {  "Content-Type":  "text/html"  }); 
res.write('<!DOCTYPE  html>'  +
'<html>'  + 
'  <head>'  +
'  <meta  charset="utf-8"  />'  +
'  <title>Ma  page  Node.js  </title>'  + 
'  </head>'  +
'  <body>'  +
'  <p>Hello  world</p>'  + 
'  </body>'  + '</html>');
res.end();
});
server.listen(4000,  ()  =>
console.log('Adresse  du  serveur  :  http://localhost:4000'));*/



var  {  createServer  }  =  require('http'); 
var  url =  require('url')
var  server  =  createServer((req,  res)  =>  { 
var page  =  url.parse(req.url).pathname; 
console.log(page);
res.writeHead(200,  {  "Content-Type":  "text/html"  });
res.write('<h1>Hello  world,  this  is  your  requested  page  :  '  +  page+'</h1>'); 
res.end();
});
server.listen(4000,  ()  =>
console.log('Adresse  du  serveur  :  http://localhost:4000'))