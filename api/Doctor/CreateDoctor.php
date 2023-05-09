<?php
include ("../conexion.php");
$conexion = OpenCon();
$NameDoctor = $_POST['NameDoctor'];
$SurnamesDoctor=$_POST['SurnamesDoctor'];
$Specialty=$_POST['Specialty'];




    $sql ="INSERT INTO `doctor`( `NameDoctor`, `SurnamesDoctor`, `Specialty`)
     VALUES ('$NameDoctor','$SurnamesDoctor','$Specialty');";
    $result = $conexion->query($sql);
    
    echo("");

?>