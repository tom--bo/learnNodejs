var len = process.argv.length;
var ans = 0;
for(i=2; i < len; i++){
    ans += Number(process.argv[i]);
}
console.log(ans);


