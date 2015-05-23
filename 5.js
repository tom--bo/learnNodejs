var fs = require('fs');
var filePath = process.argv[2];
var fileType = process.argv[3];

fs.readdir(filePath, function callback(err, list) {
    ans = list.filter(function (ele){
        return (ele.indexOf("." + fileType) != -1);
    });
    for(i = 0; i < ans.length; i++) {
        console.log(ans[i]);
    }
});


