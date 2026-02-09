var fs = require('fs');
var content = fs.readFileSync('./salutation.txt');
console.log(content.toString());
console.log('end of file');