<?php
include ("../conexion.php");
$conexion = OpenCon();
$cita = $_POST['Nocita'];


    $sql ="DELETE FROM `appointment` 
    WHERE Id= $cita";
   if( $result = $conexion->query($sql)){
    for(
        $set = array();
        $row = $result->fetch_assoc();
        $set[] = $row
    );
    
    
    echo json_encode($set);
   }
  
?>