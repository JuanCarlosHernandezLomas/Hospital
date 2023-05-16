<?php
include ("../conexion.php");
$conexion = OpenCon();
$cita=$_POST['cita'];



    $sql ="SELECT c.Id,
    Concat_ws(', ', NameDoctor,SurnamesDoctor) as 'Medico',
    c.Day,
    c.scheduledDate
    FROM appointment C 
    join doctor M  on c.Doctor_id= m.Id
    WHERE patient_id= $cita
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