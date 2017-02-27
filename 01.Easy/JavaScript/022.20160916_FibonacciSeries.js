/*
 * The Fibonacci series is defined as: F(0) = 0; F(1) = 1; F(n) = F(n–1) + F(n–2) when n>1. Given an integer n≥0, print out the F(n).
 * 
 * Sample Input:  The first argument will be a path to a filename containing integer numbers, one per line. E.g.
 *  5
 *  12
 * 
 * Sample Output: Print to stdout, the fibonacci number, F(n). E.g.
 *  5
 *  144
 * 
 * ***************
 * 2016-09-16
 * REV  LANGUAGE    DATE          STATUS  SCORE TIME, MS  MEMORY, BYTES IN RANKING  UNIQUE  RANKING POINTS
 * 1    JavaScript  Sep 16, 2016  Solved  100   122       7888896       yes         yes     28.203
 * ***************
 */

var fs=require("fs");
var fibSeq=[];
fibSeq[0]=0;
fibSeq[1]=1;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(row){
  if(isNaN(parseInt(row))===false){
    var fibLength=parseInt(fibSeq.length);
    if(parseInt(row)>parseInt(fibLength)){
      for(i=fibLength;i<=parseInt(row);i++){
        fibSeq[i]=fibSeq[i-2]+fibSeq[i-1];
      }
    }
    console.log(parseInt(fibSeq[parseInt(row)]));
  }
});