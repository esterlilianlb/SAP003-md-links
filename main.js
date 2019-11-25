const fs = require('fs');

function text () {

const readme = fs.readFile('README.md', function(err,data) {
    if(err) {
        console.error("Could not open file: %s", err); 
        process.exit(1);  
    }  
    console.log(data.toString('utf8'));  
});
return readme
} 
text();

RegExp = /teste/;
text.match(RegExp);