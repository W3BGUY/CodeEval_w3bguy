/*
 * Given a string write a program to convert it into lowercase.
 * 
 * Sample Input:
 *  HELLO CODEEVAL
 *  This is some text
 * 
 * Sample Output:
 *  hello codeeval
 *  this is some text
 * 
 */

var fs=require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(row){
  console.log(row.toLowerCase());
});