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

    let A = readline().split(' ').map(Number);
    let B = readline().split(' ').map(Number);

    let pp = 0, pn = 0, np = 0, nn = 0;

    for(let i = 0; i < n; i++){
        if(A[i] == 1 && B[i] == 1) pp++;
        else if(A[i] == 1) pn++;
        else if(B[i] == 1) np++;
        else if(A[i] == -1 && B[i] == -1) nn++;
    }

    let ans1 = 0, ans2 = 0;

    ans1 += pn;
    ans2 += np;

    while(pp){
        if(ans1 < ans2){
            ans1++;
        }else{
            ans2++;
        }
        pp--;
    }
    
    while(nn){
        if(ans1 < ans2){
            ans2--;
        }else{
            ans1--;
        }
        nn--;
    }

    let ans = Math.min(ans1, ans2);

    console.log(ans);

}
 
function main() {
    let t = 1;
    t = parseInt(readline());

    while(t--){
        solve();
    }
    
}