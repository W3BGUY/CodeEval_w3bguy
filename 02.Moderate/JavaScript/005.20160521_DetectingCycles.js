/*
 * Given a sequence, write a program to detect cycles within it.
 * 
 * Sample Input:
 *  2 0 6 3 1 6 3 1 6 3 1
 *  3 4 8 0 11 9 7 2 5 6 10 1 49 49 49 49
 *  1 2 3 1 2 3 1 2 3
 * 
 * Sample Output:
 *  6 3 1
 *  49
 *  1 2 3
 * 
 */

Array.prototype.checkIfAllArrayValuesAreEqual=function(){for(var i=1;i<this.length;i++){if(this[i]!==this[0]){return false;}}return true;}
//require Node.js for easier running in terminal
var fs=require("fs");
var lines=fs.readFileSync(process.argv[2]).toString().split('\n');
if(lines){
  var regExp=new RegExp(/(.+ .+)( \1)+/);
  var rowCount=0;
  
  while(rowCount<=lines.length){
    if(lines[rowCount]!=='' && lines[rowCount]!==undefined){
      var match=lines[rowCount].match(regExp);
      if(match!==null && match[1]!==null){
        var checkIt=match[1].split(' ');
        if(checkIt){
          if(checkIt.checkIfAllArrayValuesAreEqual()){
            process.stdout.write(checkIt[0]+'\n');
          }else{
            process.stdout.write(match[1]+'\n');
          }
        }
      }
    }
    rowCount++;
  }
}