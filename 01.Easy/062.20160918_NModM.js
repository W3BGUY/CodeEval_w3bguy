/*
 * Given two integers N and M, calculate N Mod M (without using any inbuilt modulus operator).
 * 
 * 
 * Sample Input:  Your program should accept as its first argument a path to a filename. Each line in this file contains two comma separated positive integers. E.g.
 *  20,6
 *  2,3
 * 
 * Sample Output: Print out the value of N Mod M  
 *  
 * 
 * ***************
 * 2016-09-18
 * REV  LANGUAGE    DATE          STATUS  SCORE TIME, MS  MEMORY, BYTES IN RANKING  UNIQUE  RANKING POINTS
 * 1    JavaScript  Sep 18, 2016  Solved  100   87        7884800       yes         yes     28.268
 * ***************
 */

var fs=require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(row){
  if(row!=="" && row.toString()!=='\r'){
    var splitRow=row.split(',');
    var div=Math.floor(parseInt(splitRow[0])/parseInt(splitRow[1]))
    var mod=parseInt(splitRow[0])-parseInt(splitRow[1])*div
    console.log(mod);
  }
});