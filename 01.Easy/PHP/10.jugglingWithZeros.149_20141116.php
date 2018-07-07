<?php
/*
  Charles Bastian
  charles@charlesbastian.com
  2014.11.16
  Created for CodeEval.com Easy Challenge 149 - Juggling with Zeros
  https://www.codeeval.com/open_challenges/149/
*/
$fileContents=fopen($argv[1],"r") or die("error");
$returnVal='';
while(!feof($fileContents)){
  $fileLineArray=explode(' ',trim(fgets($fileContents)));
  if(trim($fileLineArray[0])==''){break;}
  $returnVal.=convertToBinary($fileLineArray)."\r\n";
}
fwrite(STDOUT,trim($returnVal));
fclose($fileContents);
exit;

function convertToBinary($zeroArray){
  $returnVal='';
  $count=0;
  while($count<=sizeOf($zeroArray)-1){
    $nextCnt=$count+1;
    if($zeroArray[$count]==='00'){
      $returnVal.=str_replace('0','1',$zeroArray[$nextCnt]);
    }elseif($zeroArray[$count]==='0'){
      $returnVal.=$zeroArray[$nextCnt];
    }
    $count=$count+2;
  }
  return bindec($returnVal);
}
?>
