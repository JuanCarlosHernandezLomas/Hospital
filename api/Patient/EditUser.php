<?php
include ("../conexion.php");
$conexion = OpenCon();
$Name = $_POST['Name'];
$LatName=$_POST['LastName'];
$Direction = $_POST['Direction'];
$Phone=$_POST['Phone'];


    $sql ="UPDATE `patient` SET `NamePatient`='$Name',
    `SurnamesPatient`='$LatName',
    `Direction`='$Direction',
    `Phone`='$Phone' WHERE NSS = 12345678911";
    $result = $conexion->query($sql);
    
    echo("");

?>