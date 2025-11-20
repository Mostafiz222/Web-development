<?php

$servername="localhost";
$username= "root";
$password= "";
$conn=mysqli_connect($servername, $username, $password);
if (!$conn) {
    echo "sorry,failed to connect". mysqli_connect_error();
}
else{
    echo"connect successfully";
}
// $sql= "CREATE DATABASE  user";
// $result = mysqli_query($conn,$sql);
// if (!$result) {
//     echo "not succeed". mysqli_connect_error();
// }
// else{
//     echo "ok";
// }
$database="user";
$con=mysqli_connect($servername, $username, $password,$database);
if (!$con) {
    echo "sorry,failed to connect". mysqli_connect_error();
}
else{
    echo"connect successfully";
}
$sql="CREATE TABLE `new_user` (`serial` INT(10) NOT NULL AUTO_INCREMENT , `name` VARCHAR(20) NOT NULL , `pass` VARCHAR(50) NOT NULL , PRIMARY KEY (`serial`))";
$result = mysqli_query($con,$sql);
 if (!$result) {
     echo "not succeed". mysqli_connect_error();
 }
 else{
     echo "ok";
 }

?>