function mdLinks () {
    return new Promise ((resolve, reject) => {
      const fs = require('fs');
        fs.readFile('lib/README.md', 'utf8', function(err,data) {
            if(err) {
                console.error("Could not open file: %s", err); 
                process.exit(1);  
            }  
          const RegExp = /[^!]\[.*\]\([\w.:\/\/].*\)/igm
          let result = RegExp.exec(data)
          const arr = [];
            
          do {
              arr.push(result[0])
            result = RegExp.exec(data)
        } while (result !== null)   
        resolve(arr)
        
        })
    });
}
    
module.exports = mdLinks;