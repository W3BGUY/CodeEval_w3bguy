/*
 * You are given two sequences. Write a program to determine the longest common subsequence between the two strings (each string can have a maximum length of 50 characters). NOTE: This subsequence need not be contiguous. The input file may contain empty lines, these need to be ignored.
 * 
 * Sample Input:
 *  XMJYAUZ;MZJAWXU
 * 
 * Sample Output:
 *  MJAU
 * 
 */

var fs=require("fs");
var lines=fs.readFileSync(process.argv[2]).toString().split('\n');
if(lines){
  var rowCount=0;
  while(rowCount<=lines.length){
    if(lines[rowCount]!=='' && lines[rowCount]!==undefined){
      var columns=lines[rowCount].split(';');
      if(columns[0]!='' && columns[1]!='' && columns[0]!==undefined && columns[1]!==undefined){
        process.stdout.write(longestCommonSubsequence(columns[0],columns[1])+'\n');
      }
    }
    rowCount++;
  }
}

function longestCommonSubsequence(columnA,columnB){
  var colA_Sub=columnA.substr(0,columnA.length-1);
  var colB_Sub=columnB.substr(0,columnB.length-1);
 
  if(columnA.length===0 || columnB.length===0){
    return '';
  }else if(columnA.charAt(columnA.length-1)===columnB.charAt(columnB.length-1)){
    return longestCommonSubsequence(colA_Sub,colB_Sub)+columnA.charAt(columnA.length-1);
  }else{
    var columnA_final=longestCommonSubsequence(columnA,colB_Sub);
    var columnB_final=longestCommonSubsequence(colA_Sub,columnB);
    return (columnA_final.length>columnB_final.length)?columnA_final:columnB_final;
  }
}


