/*
 * An Armstrong number is an n-digit number that is equal to the sum of the n'th powers of its digits. Determine if the input numbers are Armstrong numbers.
 * 
 * 
 * Sample Input:  Your program should accept as its first argument a path to a filename. Each line in this file has a positive integer. E.g.
 *  6
 *  153
 *  351
 * 
 * Sample Output: Print out True/False if the number is an Armstrong number or not. E.g.  
 *  True
 *  True
 *  False
 * 
 * ***************
 * 2016-09-18
 * REV  LANGUAGE    DATE          STATUS  SCORE TIME, MS  MEMORY, BYTES IN RANKING  UNIQUE  RANKING POINTS
 * 1  JavaScript    Sep 18, 2016  Solved  100   128       811008        yes         yes     34.099
 * ***************
 */

var fs=require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(row){
  if(row!=="" && row.toString()!=='\r'){
    row=row.replace('\r','');
    var sumTotal=0;
    for(var i=0;i<row.length;i++){
      sumTotal+=Math.pow(parseInt(row[i]),parseInt(row.length));
    }
    if(parseInt(row)===parseInt(sumTotal)){
      console.log('True');
    }else{
      console.log('False');
    }
  }
});