function mdLinks (path) {
  const fs = require("fs");
  const RegExp = /[^!]\[(.+\w)\]\((http.?:\/\/[^\)]*)\)/igm;
  const arr = [];
  const final = [];

  return new Promise ((resolve, reject) => {
    fs.readFile(path, "utf8", function(err, data) {
      if (err) {
        reject("MD file not found");
      } else { 
        let result = RegExp.exec(data);
        
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