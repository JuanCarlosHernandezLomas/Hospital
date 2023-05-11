<?php
include ("../conexion.php");
$conexion = OpenCon();


    $sql ="SELECT 
    P.NSS AS 'NSS',
    Concat_ws(', ', NamePatient,SurnamesPatient) as 'paciente',
    Concat_ws(', ', NameDoctor,SurnamesDoctor) as 'Medico',
    C.scheduledDate as 'cita',
    C.Day as 'Dia'
    from appointment C
    join patient p on  C.patient_id= p.Id
    join doctor M  on c.Doctor_id= m.Id";
   if( $result = $conexion->query($sql)){
    for(
        $set = array();
        $row = $result->fetch_assoc();
        $set[] = $row
    );
    
    
    echo json_encode($set);
   }
  
?>