<!DOCTYPE html>
<html>
<head>
    <title>Password Generator</title>
</head>
<body>
    <h1>Password Generator</h1>
    <p>Length of password: <input type="number" id="length" min="8" max="32" value="8"></p>
    <button onclick="generatePassword()">Generate Password</button>
    <br><br>
    <input type="text" id="password" placeholder="Password" disabled>

    <script>
        // Function to generate a random password
        function generatePassword() {
            var length = document.getElementById("length").value;
            var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=";
            var password = "";
            for (var i = 0; i < length; i++) {
                var randomIndex = Math.floor(Math.random() * charset.length);
                password += charset[randomIndex];
            }
            document.getElementById("password").value = password;
        }
    </script>
</body>
</html>
