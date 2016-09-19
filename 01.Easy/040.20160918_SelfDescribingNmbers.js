/*
 * A number is a self-describing number when (assuming digit positions are labeled 0 to N-1), the digit in each position is equal to the number of times that that digit appears in the number.
 * For the curious, 
 *    Here's how 2020 is a self-describing number: 
 *      Position '0' has value 2 and there is two 0 in the number. 
 *      Position '1' has value 0 because there are not 1's in the number. 
 *      Position '2' has value 2 and there is two 2. 
 *      Position '3' has value 0 and there are zero 3's.
 * 
 * 
 * Sample Input:  The first argument is the pathname to a file which contains test data, one test case per line. Each line contains a positive integer. E.g.
 *  0123456
 *     
 *  2020
 *  22
 *  1210
 * 
 * Sample Output: If the number is a self-describing number, print out 1. If not, print out 0. E.g.  
 *  1
 *  0
 *  1
 * 
 * ***************
 * 2016-09-18
 * REV  LANGUAGE    DATE          STATUS  SCORE TIME, MS  MEMORY, BYTES IN RANKING  UNIQUE  RANKING POINTS
 * 1    JavaScript  Sep 18, 2016  Solved  100   138       7856128       yes         yes     28.203
 * ***************
 */

var fs=require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(row){
  if(row!=="" && row.toString()!=='\r'){
    var isSDN=0;
    for(var i=0;i<row.length;i++){
      var count=row.split(i).length-1;
      if(count!=row[i]){
        isSDN=0;
        break;
      }else{
        isSDN=1;
      }
    }
    console.log(isSDN);
  }
});