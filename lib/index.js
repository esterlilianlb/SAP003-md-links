const fs = require("fs");

function mdLinks () {
  return new Promise ((resolve, reject) => {
    fs.readFile("./lib/README.md", "utf8", function(err, data) {
      if (err) {
        reject(err);
      } else { 
        const RegExp = /[^!]\[.*\]\([\w.://].*\)/igm;
        let result = RegExp.exec(data);
        const arr = [];
        const final = [];
        do {
          arr.push(result[0]);
          result = RegExp.exec(data);
        } while (result !== null);  
        
        arr.forEach(e =>{
          let divide = e.split("](");
          const key = divide[0].replace(/\[/, "");
          const value = divide[1].replace(/\[/, "");
            
          final.push({ "text": key, "href": value });
          
          resolve(final); 
          
        });
         
      }
    });
  });
}
    
module.exports = mdLinks;