<?php
include ("../conexion.php");
$conexion = OpenCon();
$Paciente = $_POST['Paciente'];
$observation=$_POST['observations'];

    $sql ="INSERT INTO `medicalhistory`( `Paciente`, `observations`)
    VALUES ('$Paciente','$observation');";
    $result = $conexion->query($sql);
    
    echo("");

?>