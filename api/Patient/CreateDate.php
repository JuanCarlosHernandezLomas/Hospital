<?php
include ("../conexion.php");
$conexion = OpenCon();
$Doctor = $_POST['Doctor'];
$Day=$_POST['Day'];
$Time = $_POST['Time'];
$Paciente=$_POST['paciente'];


    $sql ="INSERT INTO `appointment`( `patient_id`, `Doctor_id`, `scheduledDate`,  `Day`) 
    VALUES ('$Paciente','$Doctor','$Time','$Day')";
    $result = $conexion->query($sql);
    
    echo("");

?>