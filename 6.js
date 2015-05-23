var myfs = require('./myfs');

var dirPath = process.argv[2];
var fileType = process.argv[3];

myfs(dirPath, fileType, function(err, list) {
    if(err) {
        return console.log("Error!!: ", err);
    }
    for(i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
});

