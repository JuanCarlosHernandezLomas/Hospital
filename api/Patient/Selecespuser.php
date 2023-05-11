<?php
include ("../conexion.php");
$conexion = OpenCon();
$Name = $_POST['Name'];
$LatName=$_POST['LastName'];

    $sql ="SELECT Id FROM `patient` 
    WHERE NamePatient ='$Name' and SurnamesPatient='$LatName';";
if( $result = $conexion->query($sql)){
    for(
        $set = array();
        $row = $result->fetch_assoc();
        $set[] = $row
    );
    
    
    echo json_encode($set);
   }

?>