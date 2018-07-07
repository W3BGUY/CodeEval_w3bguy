<?php
/*
  Charles Bastian
  charles@charlesbastian.com
  2014.11.15
  Created for CodeEval.com Easy Challenge 8 - Reverse Words
  https://www.codeeval.com/open_challenges/8/
*/
$fileContents=fopen($argv[1],"r");
$returnVal='';
while(!feof($fileContents)){
  $returnVal.=$fileLineArray=implode(" ",array_reverse(array_map('trim',explode(" ",fgets($fileContents)))))."\r\n";
}
fwrite(STDOUT,trim($returnVal));
fclose($fileContents);
exit;
?>
