"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");
 
function print(x) {
    console.log(x);
}
let inputString = "";
let currentLine = 0;
 
process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
});
process.stdin.on("end", () => {
  inputString = inputString.split("\n");
  main();
});
function readline() {
  return inputString[currentLine++];
}

function solve(){

    let n = parseInt(readline());

    let mx = 0, ans = 0;

    for(let x = 2; x <= n; x++){
        let sum = 0;
        for(let now = x; now <= n; now += x){
            sum += now;
        }
        if(sum > mx){
            mx = sum;
            ans = x;
        }
    }
    console.log(ans);
}
 
function main() {
    let t = 1;
    t = parseInt(readline());

    while(t--){
        solve();
    }
    
}