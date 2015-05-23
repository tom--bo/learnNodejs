var fs = require('fs');
var filePath = process.argv[2];

var buf = fs.readFileSync(filePath);
var fileStr = buf.toString();

var contents = fileStr.split('\n');
var ans = contents.length - 1;
console.log(ans);

