<?php
include ("../conexion.php");
$conexion = OpenCon();
$Email = $_POST['Email'];
$Passwords = $_POST['Passwords'];
$Role = $_POST['Role'];

$sql = "select * from usuarios WHERE 
Email= '$Email'";
$result = $conexion->query($sql);
$checkEmail =  mysqli_num_rows($result);

if ($checkEmail != 0) {
    $arrayu = mysqli_fetch_array($result);
    if ($arrayu['Passwords'] != $Passwords) {
        $Message = "password WRONG";
    } else {
        $Message = "Success";
    }
} else {
    $Message = "No account yet";
}

$response[] = array("Message" => $Message);
echo json_encode($response);

?>