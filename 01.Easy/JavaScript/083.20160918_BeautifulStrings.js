/*
 * Credits: This problem appeared in the Facebook Hacker Cup 2013 Hackathon. 
 * 
 * When John was a little kid he didn't have much to do. There was no internet, no Facebook, and no programs to hack on. So he did the only thing he could... he evaluated the beauty of strings in a quest to discover the most beautiful string in the world. 
 * 
 * Given a string s, little Johnny defined the beauty of the string as the sum of the beauty of the letters in it. The beauty of each letter is an integer between 1 and 26, inclusive, and no two letters have the same beauty. Johnny doesn't care about whether letters are uppercase or lowercase, so that doesn't affect the beauty of a letter. (Uppercase 'F' is exactly as beautiful as lowercase 'f', for example.) 
 * 
 * You're a student writing a report on the youth of this famous hacker. You found the string that Johnny considered most beautiful. What is the maximum possible beauty of this string?
 * 
 * 
 * Sample Input:  our program should accept as its first argument a path to a filename. Each line in this file has a sentence. 
 *  ABbCcc
 *  Good luck in the Facebook Hacker Cup this year!
 *  Ignore punctuation, please :)
 *  Sometimes test cases are hard to make up.
 *  So I just go consult Professor Dalves
 * 
 * Sample Output: Print out True/False if the number is an Armstrong number or not. E.g.  
 *  152
 *  754
 *  491
 *  729
 *  646
 * 
 * ***************
 * 2016-09-18
 * REV  LANGUAGE    DATE          STATUS  SCORE TIME, MS  MEMORY, BYTES IN RANKING  UNIQUE  RANKING POINTS
 * 1  JavaScript    Sep 18, 2016  Solved  100   183       9564160       yes         yes     26.699
 * ***************
 */

var fs=require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(row){
  if(row!=="" && row.toString()!=='\r'){
    var letterCountArray=[];
    row=row.toLowerCase();
    for(var i=0;i<row.length;i++){
      if(/[a-z]/.test(row[i])){
        if(typeof(letterCountArray[row[i]])=='undefined'){  
          letterCountArray[row[i]]=1;
        }else{
          letterCountArray[row[i]]++;
        }
      }
      var letterCountArray_sorted=[];
      for(var letter in letterCountArray){ 
        letterCountArray_sorted.push([letter,letterCountArray[letter]]); 
      }
      
      letterCountArray_sorted.sort(function(a,b){return a[1]<b[1]?1:a[1]>b[1]?-1:0});
      var totalBSValue=0;
      for(var j=0;j<letterCountArray_sorted.length;j++){
        totalBSValue+=letterCountArray_sorted[j][1]*(26-j);
      }
    }
    console.log(totalBSValue);
  }
});