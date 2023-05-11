<?php
include ("../conexion.php");
$conexion = OpenCon();
$DAY = $_POST['Day'];
$Doctor_id=$_POST['Doctor'];
$Schedules_id = $_POST['Time'];


    $sql ="INSERT INTO `days`( `DAY`, `Doctor_id`, `Schedules_id`) 
    VALUES ('$DAY','$Doctor_id','$Schedules_id')";
   if( $result = $conexion->query($sql)){
    for(
        $set = array();
        $row = $result->fetch_assoc();
        $set[] = $row
    );
    
    
    echo json_encode($set);
   }
  
?>