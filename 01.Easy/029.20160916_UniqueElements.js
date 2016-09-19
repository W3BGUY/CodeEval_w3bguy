/*
 * You are given a sorted list of numbers with duplicates. Print out the sorted list with duplicates removed.
 * 
 * Sample Input:  File containing a list of sorted integers, comma delimited, one per line. E.g. 
 *  1,1,1,2,2,3,3,4,4
 *  2,3,4,5,5
 * 
 * Sample Output: Print out the sorted list with duplicates removed, one per line. 
 *  1,2,3,4
 *  2,3,4,5
 * 
 * ***************
 * 2016-09-16
 * REV  LANGUAGE    DATE          STATUS  SCORE TIME, MS  MEMORY, BYTES IN RANKING  UNIQUE  RANKING POINTS
 * 1    JavaScript  Sep 17, 2016  Solved  100   86        7835648       yes         yes     28.311
 * ***************
 */

var fs=require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(row){
  var splitRow=row.split(',');
  var thisRow='';
  var lastNumber='';
  for(var i=0;i<splitRow.length;i++){
    if(i>0){
      lastNumber=parseInt(splitRow[i-1]);
      splitRow[i]=parseInt(splitRow[i]);
      if(splitRow[i]!=lastNumber){
        thisRow+=","+splitRow[i];
      }
    }else{
      thisRow=splitRow[i];
    }
  }
  console.log(thisRow);
});