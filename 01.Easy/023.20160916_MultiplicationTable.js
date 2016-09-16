/*
 * Print out the grade school multiplication table upto 12*12.
 * 
 * Sample Input:  There is no input for this program.
 *  
 * 
 * Sample Output: Print out the table in a matrix like fashion, each number formatted to a width of 4 (The numbers are right-aligned and strip out leading/trailing spaces on each line). The first 3 line will look like:
 *  1   2   3   4   5   6   7   8   9  10  11  12
 *  2   4   6   8  10  12  14  16  18  20  22  24
 *  3   6   9  12  15  18  21  24  27  30  33  36
 * 
 * ***************
 * 2016-09-16
 * REV  LANGUAGE    DATE          STATUS  SCORE TIME, MS  MEMORY, BYTES IN RANKING  UNIQUE  RANKING POINTS
 * 1    JavaScript  Sep 16, 2016  Solved  100   95        7847936       yes         yes     28.285
 * ***************
 */

for(var i=1;i<=12;i++){
  var thisLine='';
  for(var j=1;j<=12;j++){
    var thisNum=parseInt(j*i);
    var jPadding="    ";
    var jPadded=jPadding.substring(0,jPadding.length-thisNum.toString().length)+thisNum
    thisLine+=jPadded;
  }
  console.log(thisLine);
}
