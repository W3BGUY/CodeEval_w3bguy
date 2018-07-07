<?php
/*
  Charles Bastian
  charles@charlesbastian.com
  2014.11.16
  Created for CodeEval.com Easy Challenge 156 - Roller Coaster
  https://www.codeeval.com/open_challenges/156/
*/
$fileContents=fopen($argv[1],"r") or die("error");
$returnVal='';
while(!feof($fileContents)){
  $thisCase='upper';
  $fileLine=trim(fgets($fileContents));
  if(empty($fileLine)){break;}
  if(strlen($fileLine)>1000){continue;}
  $lineArray=str_split($fileLine);
  foreach($lineArray AS $k=>$v){
    if(preg_match("/^[a-z]$/i",$v)){
      $lineArray[$k]=($thisCase=='upper')?strtoupper($v):strtolower($v);
      $thisCase=($thisCase=='upper')?'lower':'upper';
    }
  }

	$returnVal.=implode('',$lineArray)."\r\n";
}
fwrite(STDOUT,trim($returnVal));
fclose($fileContents);
exit;
?>
