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
    let ar = readline().split(' ').map(Number);

    let prefixSum = 0, maxElement = 0, ans = 0;

    for(let i = 0; i < n; i++){
        prefixSum += ar[i];
        if(maxElement < ar[i]){
            maxElement = ar[i];
        }

        if(prefixSum - maxElement == maxElement){
            ans ++;
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