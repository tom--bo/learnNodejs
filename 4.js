var fs = require('fs');
var filePath = process.argv[2];

var ans = fs.readFile(filePath, function callback(err, fileContents) {
    var fileStr = fileContents.toString();
    var contents = fileStr.split('\n');
    // return contents.length - 1;
    console.log(contents.length - 1);
});


