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

    let str = readline();

    let strings = str.split(' ');

    let ar1 = strings[0].split('');
    let ar2 = strings[1].split('');

    let temp = ar1[0];
    ar1[0] = ar2[0];
    ar2[0] = temp;

    let str1 = ar1.join('');
    let str2 = ar2.join('');

    console.log(`${str1} ${str2}`);
}
 
function main() {
    let t = 1;
    t = parseInt(readline());

    while(t--){
        solve();
    }
    
}