<?php
/*
  Charles Bastian
  charles@charlesbastian.com
  2014.11.15
  Created for CodeEval.com Easy Challenge 3 - Prime Palindrome
  https://www.codeeval.com/open_challenges/3/
*/
function primes($n){
  if($n==1 || $n%2==0){return false;}
  if($n==2){return true;}
  for($i=3;$i<=ceil(sqrt($n));$i=$i+2){if($n%$i==0){return false;}}
  return true;
}

for($i=1000;$i>=1;$i--){
  if(strlen($i)>1 && $i==strrev($i) && primes($i)){
    fwrite(STDOUT,$i);
    break;
  }
}
exit;
?>
