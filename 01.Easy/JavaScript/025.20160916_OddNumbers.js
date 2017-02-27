/*
 * Print the odd numbers from 1 to 99.
 * 
 * Sample Input:  There is no input for this program.
 * 
 * Sample Output: Print the odd numbers from 1 to 99, one number per line. 
 * 
 * ***************
 * 2016-09-16
 * REV  LANGUAGE    DATE          STATUS  SCORE TIME, MS  MEMORY, BYTES IN RANKING  UNIQUE  RANKING POINTS
 * 1    JavaScript  Sep 16, 2016  Solved  100   95        884736        yes         yes     34.095
 * ***************
 */

for(var i=0;i<100;i++){
  if(i%2){
    console.log(parseInt(i));
  }
}