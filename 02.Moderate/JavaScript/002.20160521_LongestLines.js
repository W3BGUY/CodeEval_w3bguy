/*
 * Write a program which reads a file and prints to stdout the specified number of the longest lines that are sorted based on their length in descending order.
 *  
 * Sample Input:
 *  2
 *  Hello World
 *  CodeEval
 *  Quick Fox
 *  A
 *  San Francisco
 *  
 * Sample Output:
 *  San Francisco
 *  Hello World
 *  
 */

//require Node.js for easier running in terminal
var fs=require("fs");

var lines=fs.readFileSync(process.argv[2]).toString().split('\n');
var maxLinesToReturn=lines[0];

var sorted=lines.slice(1).sort(function(first,second){
  return second.length-first.length
});

for(var i=0;i<maxLinesToReturn;i++){
  process.stdout.write(sorted[i]+'\n');
}