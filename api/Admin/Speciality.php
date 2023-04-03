<?php
include ("../conexion.php");
$conexion = OpenCon();
$Name = $_POST['Name'];



    $sql ="INSERT INTO `specialty`(`Id`, `Name`) VALUES ('[value-1]','$Name')";
    $result = $conexion->query($sql);
    
    echo("");

?>