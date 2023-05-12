<?php
include ("../conexion.php");
$conexion = OpenCon();


    $sql ="DELETE FROM `appointment` 
    WHERE patient_id =1 and Numero_Orden= 2";
   if( $result = $conexion->query($sql)){
    for(
        $set = array();
        $row = $result->fetch_assoc();
        $set[] = $row
    );
    
    
    echo json_encode($set);
   }
  
?>