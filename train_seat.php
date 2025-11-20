<?php
$location = $_POST['location'];
$destination = $_POST['destination'];
$conn = new mysqli('localhost', 'root', '', 'user');
if ($conn->connect_error) {
    die('connection failed :' . $conn->connect_error);
} else {
    $stmt = $conn->prepare("select * from train where location=?");
    $stmt->bind_param("s", $location);
    $stmt->execute();
    $stml_result = $stmt->get_result();
    if( $stml_result->num_rows > 0) {
        $data= $stml_result->fetch_assoc();
        if($data['destination']===$destination){
            echo "<script>
                alert('Location found! Redirecting to booking ticket page...');
                window.location.href = 'booking.php';
          </script>";

        }
        else{
            echo "<h2>not found</h2>";
        }
    }
    else{
        echo "<h2>not found</h2>";
    }
    if (!$stmt->execute()) {
        die("Execute failed: " . $stmt->error);
    }
}

?>