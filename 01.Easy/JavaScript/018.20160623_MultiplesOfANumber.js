/*
 * Given numbers x and n, where n is a power of 2, print out the smallest multiple of n which is greater than or equal to x. Do not use division or modulo operator.
 * 
 * Sample Input:
 *  13,8
 *  17,16
 * 
 * Sample Output:
 *  16
 *  32
 * 
 */

var fs=require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(row){
  if(!row){return;}
  var columns=row.split(',');
  var x=parseInt(columns[0]);
  var n=parseInt(columns[1]);
  var finalN=0;
  
//  console.log("n="+n);
  while(finalN<x){
    finalN+=n;
//    console.log("n="+finalN);
  }

//  console.log("final n="+n);
  process.stdout.write(finalN+'\n');
});