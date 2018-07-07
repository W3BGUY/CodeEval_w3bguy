<?php
/*
  Charles Bastian
  charles@charlesbastian.com
  2014.11.16
  Created for CodeEval.com Easy Challenge 152 - Age Distribution
  https://www.codeeval.com/open_challenges/152/
*/
$fileContents=fopen($argv[1],"r") or die("error");
$returnVal='';
while(!feof($fileContents)){
  $fileLine=trim(fgets($fileContents));
  if(trim($fileLine)==''){break;}

  if($fileLine>=0 && $fileLine<=2){
    $returnVal.="Still in Mama's arms\r\n";
  }elseif($fileLine>=3 && $fileLine<=4){
    $returnVal.="Preschool Maniac\r\n";
  }elseif($fileLine>=5 && $fileLine<=11){
    $returnVal.="Elementary school\r\n";
  }elseif($fileLine>=12 && $fileLine<=14){
    $returnVal.="Middle school\r\n";
  }elseif($fileLine>=15 && $fileLine<=18){
    $returnVal.="High school\r\n";
  }elseif($fileLine>=19 && $fileLine<=22){
    $returnVal.="College\r\n";
  }elseif($fileLine>=23 && $fileLine<=65){
    $returnVal.="Working for the man\r\n";
  }elseif($fileLine>=66 && $fileLine<=100){
    $returnVal.="The Golden Years\r\n";
  }else{
    $returnVal.="This program is for humans\r\n";
  }
}
fwrite(STDOUT,trim($returnVal));
fclose($fileContents);
exit;
?>
