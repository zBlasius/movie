'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'getMinFlips' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING pwd as parameter.
 */

function getMinFlips(pwd) {
    // Write your code here
    if (!isValidPassword(pwd)) {
        return "Invalid format"
    }

    let zeroIndexs = [];
    let oneIndexs = [];
    const pwdArray = pwd.split('')

    pwdArray.map((item, index) => {
        if (item == "1") {
            oneIndexs.push(index)
        }

        if (item == "0") {
            zeroIndexs.push(index)
        }
    })
    
    const notZeroValidGroup = isInvalidGroup(zeroIndexs)
    const notOneValidGroup = isInvalidGroup(oneIndexs)
    
    if(notZeroValidGroup|| notOneValidGroup){
        if(zeroIndexs.length > oneIndexs.length){
            return oneIndexs.length
        }
        return zeroIndexs.length;
    }
}

function isInvalidGroup(array){
    let isNotValid = false;

    for (let i = 0; i < array.length; i++) {

        if(array[i-1] && array[i] - array[i-1] != 1){
            isNotValid = true;
        }
    }

    if(!isNotValid){
        if(array.length % 2 != 0) {
            isNotValid = true
        }
    }
    
    return isNotValid;
}

function isValidPassword(pwd) {
    const regex = new RegExp('^[01]+$');
    const validFormat = regex.test(pwd)
    const isPair = pwd.length % 2 == 0;
    const validLength = pwd.length >= 2 && pwd.length <= 10 ^ 5
    return (validFormat && isPair && validLength)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const pwd = readLine();

    const result = getMinFlips(pwd);

    ws.write(result + '\n');

    ws.end();
}
