<?php
include ("../conexion.php");
$conexion = OpenCon();


    $sql ="SELECT Concat_ws(' ',SurnamesDoctor,NameDoctor) as 'medico',
    d.Day as 'dia',
    Concat_ws('-',StarTime,EndTime) as 'horario',
    h.Spaces as 'cupos',
    S.Name as 'especialidad'
    from days d
    join doctor M on  d.Doctor_id = M.Id
    join schedules h  on d.Schedules_id = h.id
    inner join specialty S on M.Specialty = S.Id
    order by M.Id
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