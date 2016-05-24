/*
 * Given a number n and two integers p1,p2 determine if the bits in position p1 and p2 are the same or not. 
 * Positions p1 and p2 are 1 based.
 * 
 * Sample Input:
 *  86,2,3
 *  125,1,2
 * 
 * Sample Output:
 *  true
 *  false
 * 
 */

var fs=require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(row){
  if(!row){return;}
  var columns=row.split(',');
  var n=parseInt(columns[0]);
  var p1=parseInt(columns[1]);
  var p2=parseInt(columns[2]);
  //console.log(n+' / '+p1+' / '+p2);
  
  if(((n>>(p1-1))&1)==((n>>(p2-1))&1)){
    process.stdout.write('true'+'\n');
  }else{
    process.stdout.write('false'+'\n');
  }
});