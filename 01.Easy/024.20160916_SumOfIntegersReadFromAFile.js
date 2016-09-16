/*
 * Print out the sum of integers read from a file.
 * 
 * Sample Input:  The first argument to the program will be a path to a filename containing a positive integer, one per line. E.g.
 *  5
 *  12
 * 
 * Sample Output: Print out the sum of all the integers read from the file. E.g.
 *  17
 * 
 * ***************
 * 2016-09-16
 * REV  LANGUAGE    DATE          STATUS  SCORE TIME, MS  MEMORY, BYTES IN RANKING  UNIQUE  RANKING POINTS
 * 1    JavaScript  Sep 16, 2016  Solved  100   128       7790592       yes         yes     28.275
 * ***************
 */
var totalSum=0;
var fs=require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(row){
  if(isNaN(parseInt(row))===false){
    totalSum+=parseInt(row);
  }
});
console.log(parseInt(totalSum));