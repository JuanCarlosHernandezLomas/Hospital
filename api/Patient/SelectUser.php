<?php
include ("../conexion.php");
$conexion = OpenCon();


    $sql ="select * from patient WHERE Id =1
    ";
    $result = $conexion->query($sql);
    
    echo($result);

?>