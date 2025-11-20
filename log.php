<?php
$email = $_POST['email'];
$password = $_POST['password'];
$conn = new mysqli('localhost', 'root', '', 'user');
if ($conn->connect_error) {
    die('connection failed :' . $conn->connect_error);
} else {
    $stmt = $conn->prepare("select * from regestration where email=?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stml_result = $stmt->get_result();
    if( $stml_result->num_rows > 0) {
        $data= $stml_result->fetch_assoc();
        if($data['password']===$password){
            echo "<script>
                alert('Welcome again....');
                window.location.href = 'train.php';
          </script>";
        }
        else{
            echo "<h2>Invalid mail or password</h2>";
        }
    }
    else{
        echo "<h2>Invalid mail or password</h2>";
    }
}

?>