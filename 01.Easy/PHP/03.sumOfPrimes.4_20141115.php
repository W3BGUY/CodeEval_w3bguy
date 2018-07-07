<?php
/*
  Charles Bastian
  charles@charlesbastian.com
  2014.11.15
  Created for CodeEval.com Easy Challenge 4 - Sum of Primes
  https://www.codeeval.com/open_challenges/4/
*/
function primes($n){
  if($n==1 || ($n%2==0 && $n!=2)){return false;}
  if($n==2){return true;}
  for($i=3;$i<=ceil(sqrt($n));$i=$i+2){if($n%$i==0){return false;}}
  return true;
}

$returnVal=0;
$count=0;
$primeCount=1;
while($primeCount<=1000){
  if(primes($count)){
    $returnVal+=$count;
    $primeCount++;
  }
  $count++;
}
fwrite(STDOUT,$returnVal);
exit;
?>
