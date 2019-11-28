function mdLinks () {
    return new Promise ((resolve, reject) => {
      const fs = require('fs');
        fs.readFile('README.md', 'utf8', function(err,data) {
            if(err) {
                console.error("Could not open file: %s", err); 
                process.exit(1);  
            }  
          const RegExp = /^\[\w*\]\([\w.:\/\/]*\)/igm
          const result = RegExp.exec(data)
          resolve(result) 
        })
    });
}
    
module.exports = mdLinks;