<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css?v=2.0">
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
    <div class="payment_container">
        <!-- <h1>Payment Page</h1> -->

        <form class="payment-form">
            <h2>Card Information</h2>
            <label for="name">Bank Name</label>
            <input type="text" id="cardholder-name" placeholder="Name" required>

            <label for="card-number">Card Number</label>
            <input type="text" id="card-number" placeholder="Card number" required maxlength="19">

            <div class="card-details">
                <div>
                    <label for="expiry-date">Expiry Date</label>
                    <input type="text" id="expiry-date" placeholder="MM/YY" required maxlength="5">
                </div>
                <div>
                    <label for="cvv">CVV</label>
                    <input type="password" id="cvv" placeholder="123" required maxlength="3">
                </div>
            </div>

            <button type="submit" class="pay-button">Pay Now</button>
        </form>
    </div>
    <script src="script.js"></script>
</body>

</html>