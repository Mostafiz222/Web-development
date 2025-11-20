<?php
    $username=$_POST['username'];
    $email=$_POST['email'];
    $password=$_POST['password'];
    $confirm_password=$_POST['confirm_password'];
    $conn= new mysqli('localhost','root','','user');
    if($conn->connect_error){
        die( 'connection failed :' .$conn->connect_error);
    }
    else{
        $stmt=$conn->prepare("insert into regestration(username,email,password,confirm_password)
        values(?,?,?,?)");
        $stmt->bind_param("ssss", $username,$email,$password,$confirm_password);
        $stmt->execute();
        echo "<script>
                alert('Regestration successfull...');
                window.location.href = 'login.php';
          </script>";
        if (!$stmt->execute()) {
            die("Execute failed: " . $stmt->error);
        }
        $stmt->close();
        $conn->close();
    }
?>