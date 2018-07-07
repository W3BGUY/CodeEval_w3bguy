<?php
/*
  Charles Bastian
  charles@charlesbastian.com
  2014.11.15
  Created for CodeEval.com Easy Challenge 1 - Fizz Buzz
  https://www.codeeval.com/open_challenges/1/
*/
$fileContents=fopen($argv[1],"r");
$returnVal='';
while(!feof($fileContents)){
  $x=0;
  $y=0;
  $n=0;
  $fileLineArray=explode(" ",fgets($fileContents));
  if(empty($fileLineArray[0])){break;}
  $x=$fileLineArray[0];
  $y=$fileLineArray[1];
  $n=$fileLineArray[2];
  if($x<1 || $x>20 || $y<1 || $y>20 || $n<21 || $n>100){exit;}
  for($i=1;$i<=$n;$i++){
    if($i%$x==0 && $i%$y==0){
      $returnVal.="FB ";
    }elseif($i%$x==0){
      $returnVal.="F ";
    }elseif($i%$y==0){
      $returnVal.="B ";
    }else{
      $returnVal.=$i." ";
    }
  }
  $returnVal=trim($returnVal)."\r\n";
}
fwrite(STDOUT,trim($returnVal));
fclose($fileContents);
exit;
?>
