<?php
include ("../conexion.php");
$conexion = OpenCon();
$Folio = $_POST['Folio'];


    $sql ="SELECT Concat_ws(' ', NamePatient,SurnamesPatient) as 'paciente',
    H.observations as 'observacion'
    from medicalhistory H
    join patient p on  H.Paciente= p.Id
    WHERE Folio= '$Folio'";
   if( $result = $conexion->query($sql)){
    for(
        $set = array();
        $row = $result->fetch_assoc();
        $set[] = $row
    );
    
    
    echo json_encode($set);
   }
  
?>


