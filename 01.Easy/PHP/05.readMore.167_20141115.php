<?php
/*
  Charles Bastian
  charles@charlesbastian.com
  2014.11.15
  Created for CodeEval.com Easy Challenge 167 - Read More
  https://www.codeeval.com/open_challenges/167/
*/
$fileContents=fopen($argv[1],"r");
$returnVal='';
while(!feof($fileContents)){
  $fileLine=trim(fgets($fileContents));
  if(empty($fileLine)){break;}
  if(strlen($fileLine)>300){continue;}
  $fileLine=str_replace('  ',' ',$fileLine);
  if(strlen($fileLine)<=55){
    $returnVal.=$fileLine."\r\n";
  }else{
    $fileLine=substr($fileLine,0,40);
    $pos=(strripos($fileLine," ")==false)?40:strripos($fileLine," ");
    $returnVal.=trim(substr($fileLine,0,$pos))."... <Read More>\r\n";
  }

}
fwrite(STDOUT,trim($returnVal));
fclose($fileContents);
exit;
?>
