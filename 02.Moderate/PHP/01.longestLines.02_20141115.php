<?php
/*
  Charles Bastian
  charles@charlesbastian.com
  2014.11.15
  Created for CodeEval.com Moderate challenge 02 - Longest Lines
  https://www.codeeval.com/open_challenges/2/
*/
$fileContents=fopen($argv[1],"r");
$returnVal='';
$returnArray=array();
$returnAmt=0;
while(!feof($fileContents)){
  $fileLineArray=fgets($fileContents);
  if(empty($fileLineArray[0])){break;}
  $returnArray[]=trim($fileLineArray);
}

function sortByLength($x,$y){
  if(strlen($x)==strlen($y)){
    return 0;
  }
  return (strlen($x)<strlen($y))?1:-1;
}
$returnAmt=array_shift($returnArray);
usort($returnArray,"sortByLength");
for($i=0;$i<$returnAmt;$i++){
  $returnVal.=$returnArray[$i]."\r\n";
}

fwrite(STDOUT,trim($returnVal));
fclose($fileContents);
exit;
?>