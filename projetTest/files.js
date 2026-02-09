var fs = require("fs");
var file = ["file1.txt", "file2.txt", "file3.txt"];
if(fs.existsSync('monDossier')) {
    console.error('doss existe deja');
} else {
    fs.mkdirSync('monDossier');
}

for (let i = 0; i<file.length; i++) {
  fs.writeFile('monDossier/' + file[i], 'contenu fichier', (err) =>{
    if (err) {
        console.error(err);
    } 
  }
);
}