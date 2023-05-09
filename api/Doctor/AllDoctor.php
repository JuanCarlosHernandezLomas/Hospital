<?php
include ("../conexion.php");
$conexion = OpenCon();


    $sql ="SELECT Concat_ws(' ',SurnamesDoctor,NameDoctor) as 'medico'
    FROM doctor ";
   if( $result = $conexion->query($sql)){
    for(
        $set = array();
        $row = $result->fetch_assoc();
        $set[] = $row
    );
    
    
    echo json_encode($set);
   }
  
?>