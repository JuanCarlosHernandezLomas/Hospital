<?php
include ("../conexion.php");
$conexion = OpenCon();


    $sql ="select * from patient 
    ";
   if( $result = $conexion->query($sql)){
    for(
        $set = array();
        $row = $result->fetch_assoc();
        $set[] = $row
    );
    
    
    echo json_encode($set);
   }
  
?>