<?php
include ("conexion.php");
$conexion = OpenCon();
$Id = $_POST['Id'];
$Email = $_POST['Email'];
$Password = $_POST['Password'];
$Role=$_POST['Role'];


    $sql = "Insert into `usuarios` (`Id`,`Email`, `Passwords`, `Role`) 
    VALUES ('$Id','$Email', '$Password', '$Role');";
    $result = $conexion->query($sql);
    
    echo("result");

?>