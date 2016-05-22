/*
 *  Write a program which determines the sum of the first 1000 prime numbers.
 *  
 *  Sample Input: none
 *  
 *  Sample Output: 3682913
 *
 */

var sumOfPrimes=0;
var numberOfPrimes=0;
var numberCount=2;

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

while(numberOfPrimes<1000){
  if(checkIfIsPrime(numberCount)){
    sumOfPrimes=sumOfPrimes+numberCount;
    numberOfPrimes++;
  }
  numberCount++;
}

process.stdout.write(sumOfPrimes.toString());