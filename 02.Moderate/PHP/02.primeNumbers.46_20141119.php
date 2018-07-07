<?php
/*
  Charles Bastian
  charles@charlesbastian.com
  2014.11.19
  Created for CodeEval.com Moderate challenge 46 - Prime Numbers
  https://www.codeeval.com/open_challenges/46/
*/

$fileContents=fopen($argv[1],"r");
$returnVal='';
while(!feof($fileContents)){
  $fileLine=trim(fgets($fileContents));
  if(empty($fileLine[0])){break;}
  for($i=0;$i<$fileLine;$i++){
    $returnVal.=(primes($i))?$i.",":'';
  }
  $returnVal=substr($returnVal,0,-1)."\r\n";  
}

function primes($n){
  if($n==1 || ($n%2==0 && $n!=2)){return false;}
  if($n==2){return true;}
  for($i=3;$i<=ceil(sqrt($n));$i=$i+2){if($n%$i==0){return false;}}
  return true;
}

fwrite(STDOUT,trim($returnVal));
fclose($fileContents);
exit;
?>