<?php
include ("../conexion.php");
$conexion = OpenCon();
$Name = $_POST['Name'];
$LatName=$_POST['LastName'];
$Direction = $_POST['Direction'];
$Phone=$_POST['Phone'];
$NSS=$_POST['NSS'];


    $sql ="Insert into `patient`(`Id`, `NamePatient`, `SurnamesPatient`, `Direction`, `Phone`, `NSS`)
     VALUES ('','$Name','$LatName','$Direction','$Phone','$NSS');";
    $result = $conexion->query($sql);
    
    echo("");

?>