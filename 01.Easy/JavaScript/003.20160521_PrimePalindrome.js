/*
 *  Write a program which determines the largest prime palindrome less than 1000.
 *  
 *  Sample Input: none
 *  
 *  Sample Output: 929
 *
 */

var currentPrime=0;
function checkIfIsPrime(numberToCheck){
  var divisorNumber=2;
  while(numberToCheck>divisorNumber){
    if(numberToCheck%divisorNumber==0){
     return false; 
    }else{
      divisorNumber++;
    }
  }
  return true;
}

for(var i=1;i<=1000;i++){
  if(checkIfIsPrime(i)){
    if(i.toString()===i.toString().split('').reverse().join('')){
      currentPrime=i.toString();
    }
  }
}

process.stdout.write(currentPrime);