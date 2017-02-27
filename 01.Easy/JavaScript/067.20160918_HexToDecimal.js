/*
 * You will be given a hexadecimal (base 16) number. Convert it into decimal (base 10).
 * 
 * 
 * Sample Input:  Your program should accept as its first argument a path to a filename. Each line in this file contains a hex number. You may assume that the hex number does not have the leading 'Ox'. Also all alpha characters (a through f) in the input will be in lowercase. E.g.
 *  9f
 *  11
 * 
 * Sample Output: Print out the equivalent decimal number. E.g.  
 *  159
 *  17
 * 
 * ***************
 * 2016-09-18
 * REV  LANGUAGE    DATE          STATUS  SCORE TIME, MS  MEMORY, BYTES IN RANKING  UNIQUE  RANKING POINTS
 * 1  JavaScript    Sep 18, 2016  Solved  100   137       7839744       yes         yes     28.218
 * ***************
 */

var fs=require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(row){
  if(row!=="" && row.toString()!=='\r'){
    console.log(parseInt(row,16));
  }
});