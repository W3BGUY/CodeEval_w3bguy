/*
 * Any number divisible by X (for example, three) is replaced by the word fizz
 * Any divisible by Y (for example, five) by the word buzz.
 * Any numbers divisible by both become fizz buzz
 * 
 * Arguments:
 *  01: first divider (X)
 *  02: second divider (Y)
 *  03: how far to count (N)
 *  
 * Sample Input:
 *  3 5 10
 *  2 7 15
 *  
 * Sample Output:
 *  1 2 F 4 B F 7 8 F B
 *  1 F 3 F 5 F B F 9 F 11 F 13 FB 15
 */
// require Node.js for easier running in terminal
var fs=require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(row){
  if(!row){return;}
  var columns=row.split(' ');
  var X=columns[0];
  var Y=columns[1];
  var N=columns[2];
  
  for(var i=1;i<=N;i++){
    if(i%X==0 && i%Y==0){
      process.stdout.write('FB');
    }else if(i%X==0){
      process.stdout.write('F');
    }else if(i%Y==0){
      process.stdout.write('B');
    }else{
      process.stdout.write(i+'');
    }
    
    if(i<N){
      process.stdout.write(' ');
    }else{
      process.stdout.write('\n');
    }
  }
});