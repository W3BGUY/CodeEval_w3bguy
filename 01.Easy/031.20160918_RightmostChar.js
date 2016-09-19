/*
 * You are given a string 'S' and a character 't'. Print out the position of the rightmost occurrence of 't' (case matters) in 'S' or -1 if there is none. The position to be printed out is zero based.
 * 
 * Sample Input:  The first argument will ba a path to a filename, containing a string and a character, comma delimited, one per line. Ignore all empty lines in the input file. E.g.   
 *  Hello World,r
 *  Hello CodeEval,E
 * 
 * Sample Output: Print out the zero based position of the character 't' in string 'S', one per line. Do NOT print out empty lines between your output. E.g.  
 *  8
 *  10
 * 
 * ***************
 * 2016-09-18
 * REV  LANGUAGE    DATE          STATUS  SCORE TIME, MS  MEMORY, BYTES IN RANKING  UNIQUE  RANKING POINTS
 * 5    JavaScript  Sep 18, 2016  Solved  100   137       999424  yes               yes     33.926
 * ***************
 */

var fs=require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(row){
  if(row!=""){
    var splitRow=row.split(',');
    if(splitRow[0]!=undefined && splitRow[1]!=undefined){
      var position=splitRow[0].lastIndexOf(splitRow[1].replace('\r',"").replace('\n',""));
      console.log(position);
    }
  }
});