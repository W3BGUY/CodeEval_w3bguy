/*
 * There is a queryBoard (matrix). Every cell of the queryBoard contains one integer, which is 0 initially. 
 * 
 * The next operations can be applied to the rowSplit queryBoard: 
 * SetRow i x: it means that all values in the cells on row "i" have been changed to value "x" after this operation. 
 * SetCol j x: it means that all values in the cells on column "j" have been changed to value "x" after this operation. 
 * QueryRow i: it means that you should output the queryBoardSum of values on row "i". 
 * QueryCol j: it means that you should output the queryBoardSum of values on column "j". 
 * 
 * The queryBoard's dimensions are 256x256 
 * "i" and "j" are integers from 0 to 255 
 * "x" is an integer from 0 to 31 
 * 
 * 
 * Sample Input:  Your program should accept as its first argument a path to a filename. Each row in this file contains an operation of a rowSplit. E.g.
 *  SetCol 32 20
 *  SetRow 15 7
 *  SetRow 16 31
 *  QueryCol 32
 *  SetCol 2 14
 *  QueryRow 10
 *  SetCol 14 0
 *  QueryRow 15
 *  SetRow 10 1
 *  QueryCol 2
 * 
 * Sample Output: For each rowSplit, output the answer of the rowSplit. E.g.  
 *  5118
 *  34
 *  1792
 *  3571
 * 
 * ***************
 * 2016-09-18
 * REV  LANGUAGE    DATE          STATUS  SCORE TIME, MS  MEMORY, BYTES IN RANKING  UNIQUE  RANKING POINTS
 * 1    JavaScript  Sep 18, 2016  Solved  100   123       8560640       yes         yes     27.641
 * ***************
 */

var queryBoard=[];
var fs=require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(row){
  if(row!=="" && row.toString()!=='\r'){
    var queryBoardColumns=256;
    var queryBoardRows=256;
    var queryBoardSum=0;
    row=row.replace('\r','');
    var rowSplit=row.split(' ');
    switch(rowSplit[0]){
      case 'SetCol':
        for(var i=0;i<queryBoardRows;i++){
          queryBoard[Number(rowSplit[1])+i*queryBoardColumns]=Number(rowSplit[2]);
        }
        break;
      case 'SetRow': 
        for(var j=0;j<queryBoardColumns;j++){
          queryBoard[Number(rowSplit[1])*queryBoardRows+j]=Number(rowSplit[2]);
        }
        break;
      case 'QueryCol':
        for(var k=0;k<queryBoardRows;k++){
          queryBoardSum+=('undefined'===typeof(queryBoard[Number(rowSplit[1])+k*queryBoardColumns]))?0:queryBoard[Number(rowSplit[1])+k*queryBoardColumns];
        }
        console.log(queryBoardSum);
        break;
      case 'QueryRow': 
        for(var l=0;l<queryBoardColumns;l++){
          queryBoardSum+=('undefined'===typeof(queryBoard[Number(rowSplit[1])*queryBoardRows+l]))?0:queryBoard[Number(rowSplit[1])*queryBoardRows+l];
        }
        console.log(queryBoardSum);
        break;
    }
  }
});