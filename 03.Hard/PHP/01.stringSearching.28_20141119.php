<?php
/*
  Charles Bastian
  charles@charlesbastian.com
  2014.11.19
  Created for CodeEval.com Hard Challenge 28 - String Searching
  https://www.codeeval.com/open_challenges/28/
  2014.11.19 Received a partial solution
  After re-reading, I noticed the following:
    !! Do NOT use any substr type library function.
*/

$fileContents=fopen($argv[1],"r");
$returnVal='';
while(!feof($fileContents)){
  $fileLineArray=explode(',',str_replace("\r\n",'',fgets($fileContents)));
  if(empty($fileLineArray[0])){break;}
  if(strpos($fileLineArray[1],'\*')===false){
    $returnVal.=(preg_match("/".$fileLineArray[1]."/",$fileLineArray[0])===1)?"true\r\n":"false\r\n";
  }else{
    $returnVal.=(strpos($fileLineArray[0],str_replace('\*','*',$fileLineArray[1]))===false)?"false\r\n":"true\r\n";
  }
}

fwrite(STDOUT,trim($returnVal));
fclose($fileContents);
exit;
?>