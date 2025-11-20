<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css?v=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <title>Document</title>
</head>
<body>
    <nav class="nav">
        <a href="index.php">
            <button class="aa">Home</button>
        </a>
        <a href="Login.php">
            <button class="aa">Login</button>
        </a>
        <a href="regester.php">
            <button class="aa">Regester</button>
        </a>
        <a href="train.php">
            <button class="aa">Train info</button>
        </a>
    </nav>
    <form action="train_seat.php" method="POST">
        <div class="from_to">
            
            <h1 class="b">From </h1>
            <input type="text" id="location" name="location" class="in" placeholder="Your location">
            <h1 class="b">To</h1>
            <input type="text" class="in" id="destination" name="destination" placeholder="Your destination">
        </div>
        <div >
            <button class="c">Search</button>
        </div>
    </form>
    <script src="script.js"></script> 
</body>
</html>