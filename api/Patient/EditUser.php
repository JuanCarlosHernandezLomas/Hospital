<?php
include ("../conexion.php");
$conexion = OpenCon();
$Name = $_POST['Name'];
$LatName=$_POST['LastName'];
$Direction = $_POST['Direction'];
$Phone=$_POST['Phone'];
$NSS=$_POST['NSS'];


    $sql ="UPDATE `patient` SET `NamePatient`='$Name',
    `SurnamesPatient`='$LatName',
    `Direction`='$Direction',
    `Phone`='$Phone' WHERE NSS = $NSS";
    $result = $conexion->query($sql);
    
    echo("");

?>