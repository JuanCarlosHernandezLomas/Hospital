<?php
include ("../conexion.php");
$conexion = OpenCon();




    $sql ="SELECT Concat_ws('-',StarTime,EndTime) as 'horario'
    FROM schedules";
    if( $result = $conexion->query($sql)){
        for(
            $set = array();
            $row = $result->fetch_assoc();
            $set[] = $row
        );
        
        
        echo json_encode($set);
       }
      
?>