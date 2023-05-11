<?php
include ("../conexion.php");
$conexion = OpenCon();
$NSS=$_POST['NSS'];


    $sql ="SELECT Id FROM `patient` 
    WHERE NSS = $NSS
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