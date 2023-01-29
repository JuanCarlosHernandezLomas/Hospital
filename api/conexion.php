<?php


    $dbhost = "localhost";
    $dbuser = "root";
    $dbpassword= "";
    $db = "hospital";
    $con =  mysqli_connect($dbhost,$dbuser,$dbpassword,$db);

    if(mysqli_connect_errno())
    {
        echo "fallo la conexion";
    }



?>