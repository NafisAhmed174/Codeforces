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

    let ar = readline().split(' ').map(Number);

    let n = ar[0], m = ar[1];

    let maxRow = 0, maxCol = 0, minRow = n - 1, minCol = m - 1;

    for(let i = 0; i < n; i++){
        let str = readline();
        for(let j = 0; j < m; j++){
            if(str[j] == '#'){
                if(j < minCol){
                    minCol = j;
                }
                if(j > maxCol){
                    maxCol = j;
                }
                if(i < minRow){
                    minRow = i;
                }
                if(i > maxRow){
                    maxRow = i;
                }
            }
        }
    }
    let Cx = (maxRow + minRow) / 2 + 1; // since 1 based
    let Cy = (maxCol + minCol) / 2 + 1; // since 1 based
    console.log(`${Cx} ${Cy}`);
}
 
function main() {
    let t = 1;
    t = parseInt(readline());

    while(t--){
        solve();
    }
    
}