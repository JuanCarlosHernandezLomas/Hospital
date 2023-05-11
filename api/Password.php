<?php
include ("conexion.php");
$conexion = OpenCon();
$Email = $_POST['Email'];
$Password = $_POST['Password'];


    $sql = "UPDATE `usuarios` SET `Passwords`='$Password' WHERE `Email`= '$Email'";
    $result = $conexion->query($sql);
    
    echo("");

?>