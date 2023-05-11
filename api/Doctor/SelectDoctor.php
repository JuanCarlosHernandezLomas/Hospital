<?php
include ("../conexion.php");
$conexion = OpenCon();


    $sql ="SELECT 
    D.NameDoctor as 'Nombre',
    D.SurnamesDoctor as 'Apellido',
    S.Name as 'especialidad', 
    L.StarTime as 'inicio',
    L.EndTime as'salida'
    from doctor D 
    inner join specialty S on D.Specialty = S.Id
    inner join days Q on D.Id = Q.Doctor_id
    inner join schedules L on Q.Schedules_id=L.Id
    order by D.Id
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