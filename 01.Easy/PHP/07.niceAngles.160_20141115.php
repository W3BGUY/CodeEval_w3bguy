<?php
/*
  Charles Bastian
  charles@charlesbastian.com
  2014.11.15
  Created for CodeEval.com Easy Challenge 160 - Delta Time
  https://www.codeeval.com/open_challenges/160/
*/
$fileContents=fopen($argv[1],"r");
$returnVal='';
while(!feof($fileContents)){
  $fileLine=trim(fgets($fileContents));
  if(empty($fileLine)){break;}
	$degreesTemp=$fileLine;
	$isNegativeAngle = false;
	if($fileLine<0.0){
		$fileLine=-$fileLine;
	}
	$degreeFloor=floor($fileLine);
	$minutesTemp=60.0*($fileLine-$degreeFloor);
	$minutes=sprintf("%02d",floor($minutesTemp));
	$secondsTemp=60.0*($minutesTemp-$minutes);
	$seconds=sprintf("%02d",floor($secondsTemp));

	$returnVal.=$degreeFloor.".".$minutes."'".$seconds.'"'."\r\n";
}
fwrite(STDOUT,trim($returnVal));
fclose($fileContents);
exit;
?>
