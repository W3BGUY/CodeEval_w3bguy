/*
 * You are given two sorted list of numbers (ascending order). The lists themselves are comma delimited and the two lists are semicolon delimited. Print out the intersection of these two sets.
 * 
 * Sample Input:  File containing two lists of ascending order sorted integers, comma delimited, one per line. E.g.  
 *  1,2,3,4;4,5,6
 *  20,21,22;45,46,47
 *  7,8,9;8,9,10,11,12
 *  11,12,13,15;8,9,10,11,12
 * 
 * Sample Output: Print out the ascending order sorted intersection of the two lists, one per line. Print empty new line in case the lists have no intersection. E.g.  
 *  4
 *  
 *  8,9
 * 
 * ***************
 * 2016-09-16
 * REV  LANGUAGE    DATE          STATUS  SCORE TIME, MS  MEMORY, BYTES IN RANKING  UNIQUE  RANKING POINTS
 * 2    JavaScript  Sep 17, 2016  Solved  100   99        7806976       yes         yes     28.312
 * ***************
 */

var fs=require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(row){
  var splitRow=row.split(';');
  var set=setIntersection(splitRow[0].split(','),splitRow[1].split(',')).join(',');
  console.log(set);
});

function setIntersection(first,second){
  var resultArray=[];
  while(first.length>0 && second.length>0){
    if(parseInt(first[0])<parseInt(second[0])){
      first.shift();
    }else if(parseInt(first[0])>parseInt(second[0])){
      second.shift();
    }else{
      resultArray.push(first.shift());
      second.shift();
    }
  }
  return resultArray;
}