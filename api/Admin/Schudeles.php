<?php
include ("../conexion.php");
$conexion = OpenCon();
$StartTime = $_POST['StartTime'];
$EndTime=$_POST['EndTime'];
$Spaces = $_POST['Spaces'];


    $sql ="INSERT INTO `schedules`(`Id`, `StarTime`, `EndTime`, `Spaces`) 
    VALUES ('','$StartTime','$EndTime','$Spaces')";
    $result = $conexion->query($sql);
    
    echo("");

?>