/*
 * A happy number is defined by the following process. Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers.
 * For the curious, 
 *  Here's why 7 is a happy number: 7->49->97->130->10->1. 
 *  Here's why 22 is NOT a happy number: 22->8->64->52->29->85->89->145->42->20->4->16->37->58->89 ...
 * 
 * Sample Input:  The first argument is the pathname to a file which contains test data, one test case per line. Each line contains a positive integer. E.g.   
 *  1
 *  7
 *  22
 * 
 * Sample Output: If the number is a happy number, print out 1. If not, print out 0. E.g  
 *  8
 *  10
 * 
 * ***************
 * 2016-09-18
 * REV  LANGUAGE    DATE          STATUS  SCORE TIME, MS  MEMORY, BYTES IN RANKING  UNIQUE  RANKING POINTS
 * 1    JavaScript  Sep 18, 2016  Solved  100   105       8138752       yes         yes     28.025
 * ***************
 */

var fs=require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(row){
  if(row!=="" && row.toString()!=='\r'){
    var testingArray=[];
    while(1<row && -1===testingArray.indexOf(row)){
      testingArray.push(row);
      var n=''+row;
      row=0;
      for(var i in n){
        row+=Math.pow(n[i],2);
      }
    }
    console.log((1==row)?1:0);
  }
});