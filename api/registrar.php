<?php
include ("conexion.php");
$conexion = OpenCon();
$Email = $_POST['Email'];
$Password = $_POST['Password'];
$Role=$_POST['Role'];


    $sql = "Insert into `usuarios` (`Email`, `Passwords`, `Role`) 
    VALUES ('$Email', '$Password', '$Role');";
    $result = $conexion->query($sql);
    

?>