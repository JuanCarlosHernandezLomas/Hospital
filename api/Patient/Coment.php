<?php
include ("../conexion.php");
$conexion = OpenCon();
$Usuario = $_POST['Usuario'];
$Coment=$_POST['Coment'];

    $sql ="INSERT INTO `coment`(`Usuario`, `comentario`) 
    VALUES ('$Usuario','$Coment');";
    $result = $conexion->query($sql);
    
    echo("");

?>