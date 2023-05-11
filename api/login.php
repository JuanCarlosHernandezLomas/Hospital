<?php
include ("conexion.php");
$conexion = OpenCon();
$Email = $_POST['Email'];
$Password = $_POST['Password'];
        $sql = "select Role from usuarios WHERE Email = '$Email' and Passwords = '$Password'";
        if($result = $conexion->query($sql)){
            for(
                $set = array();
                $row = $result->fetch_assoc();
                $set[] = $row
            );
           
             echo json_encode($set);
                    }
?>