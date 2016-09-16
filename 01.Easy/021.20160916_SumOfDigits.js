/*
 * Given a positive integer, find the sum of its constituent digit
 * 
 * Sample Input:  The first argument will be a path to a filename containing positive integers, one per line. E.g.
 *  23
 *  496
 * 
 * Sample Output: Print to stdout, the sum of the numbers that make up the integer, one per line. E.g.
 *  5
 *  19
 * 
 * ***************
 * 2016-09-16
 * REV  LANGUAGE    DATE          STATUS  SCORE TIME, MS  MEMORY, BYTES IN RANKING  UNIQUE  RANKING POINTS
 * 1    JavaScript  Sep 16, 2016  Solved  100   100       7856128       yes         yes     28.269
 * ***************
 */

var fs=require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(row){
  var lineResults=0;
  for(var i=0;i<row.length;i++){
    if(isNaN(parseInt(row[i]))===false){
      lineResults+=parseInt(row[i]);
    }
  }
  console.log(lineResults);
});