<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet">
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
    <div class="wel">
        <h1>Please fill the following information to register</h1>
    </div>
    <div class="register" >
        <h2>Register</h2>
        <form action="connect.php" method="POST">
            <div class="input">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required>
            </div>
            <div class="input">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="input">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required>
            </div>
            <div class="input">
                <label for="confirm-password">Confirm Password</label>
                <input type="password" id="confirm_password" name="confirm_password" required>
            </div>
            <button type="submit" class="button">Register</button>
        </form>
    </div>
    <script src="script.js"></script>
</body>

</html>