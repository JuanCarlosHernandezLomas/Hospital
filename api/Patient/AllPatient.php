<?php
include ("../conexion.php");
$conexion = OpenCon();


    $sql ="SELECT * FROM `specialty` ";
   if( $result = $conexion->query($sql)){
    for(
        $set = array();
        $row = $result->fetch_assoc();
        $set[] = $row
    );
    
    
    echo json_encode($set);
   }
  
?>