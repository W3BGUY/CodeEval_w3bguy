/*
 * Print the size of a file in bytes.
 * 
 * Sample Input:  The first argument to your program has the path to the file you need to check the size of.
 * 
 * Sample Output: Print the size of the file in bytes. E.g.
 * 55 
 * 
 * ***************
 * 2016-09-16
 * REV  LANGUAGE    DATE          STATUS  SCORE TIME, MS  MEMORY, BYTES IN RANKING  UNIQUE  RANKING POINTS
 * 1    JavaScript  Sep 16, 2016  Solved  100   94        7802880       yes         yes     28.324
 * ***************
 */

var fs=require("fs");
console.log(fs.statSync(process.argv[2])["size"]);