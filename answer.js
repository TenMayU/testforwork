const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
console.log("Select File .txt for calculate")
console.log("Example: D:/test.txt")
rl.question('Select txt file: ',(answer)=>{test(answer)})
function readfiles(files){
  
  const fs = require('fs');
  const readline = require('readline');
    const file =  fs.readFileSync(files, 'utf8')
    let num = []
    let numofline = file.split('\n').length
    for(const ch of file){
    /*  console.log(parseInt(ch)) */
      if(parseInt(ch) >= 0){
        num.push(parseInt(ch))
        
      }

    }
    return {num,numofline}
  }
  
  
 function test(file){
   const data = readfiles(file)
   const row = data.numofline
   const col = Math.ceil(data.num.length  / row )


   let trees = []
  for(let i = 0; i < row ; i++){
  
     trees[i] = []
     for(let j = 0; j < col; j++){
      trees[i][j] = data.num[i*col+j]
     }
  }  
  

  /* console.log(trees) */

  function calc(){
   let count  = 0;
    for (let x = 0; x < trees.length; x++){
      for (let y = 0; y < trees[x].length ; y++){
        const currentPosition  = trees[x][y]
        const isFirstRow  = x === 0
        const isLastRow  = x === trees.length - 1
        const isFirstColumn  = y === 0
        const isLastColumn  = y === trees[x].length - 1
        if (isFirstRow || isLastRow || isFirstColumn || isLastColumn) {
          count++
          continue;
        }
        let isCount  = false;
  
        // Check Right
        for (let yTempRight = y + 1; yTempRight < trees[x].length; yTempRight++){
          if (currentPosition <= trees[x][yTempRight]) {
            break;
          }
          if (yTempRight < trees[x].length - 1) {
            isCount = true
          }
        }
  
        if (isCount) {
          count++
          continue;
        }
  
        // Check Left
        for (let yTempLeft = 0; yTempLeft < y; yTempLeft++){
          if (currentPosition <= trees[x][yTempLeft]) {
            break;
          }
          if (yTempLeft < y - 1) {
            isCount = true
          }
        }
  
        if (isCount) {
          count++
          continue;
        }
  
        // Check Top
        for (let xTempTop = 0; xTempTop < x ; xTempTop++){
          if (currentPosition <= trees[xTempTop][y]) {
            break;
          }
          if (xTempTop < x - 1) {
            isCount = true
          }
        }
  
        if (isCount) {
          count++
          continue;
        }
  
         // Check Bottom
         for (let xTempBottom = x+1; xTempBottom < trees.length ; xTempBottom++){
          if (currentPosition <= trees[xTempBottom][y]) {
            break;
          }
          if (xTempBottom < trees.length - 1) {
            isCount = true
          }
        }
  
        if (isCount) {
          count++
          continue;
        }
      }
    }
    return count
  }
  console.log("answer is ")
  console.log(calc())
  }

