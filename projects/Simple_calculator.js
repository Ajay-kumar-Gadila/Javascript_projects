<!DOCTYPE html>
<html>
<head>
    <title>Calculator</title>
</head>
<body>
    <h1>Calculator</h1>
    <input type="text" id="num1" placeholder="Enter first number">
    <br><br>
    <input type="text" id="num2" placeholder="Enter second number">
    <br><br>
    <button onclick="add()">Add</button>
    <button onclick="subtract()">Subtract</button>
    <button onclick="multiply()">Multiply</button>
    <button onclick="divide()">Divide</button>
    <br><br>
    <input type="text" id="result" placeholder="Result" disabled>

    <script>
        // Function to get the input values
        function getInputValues() {
            var num1 = parseFloat(document.getElementById("num1").value);
            var num2 = parseFloat(document.getElementById("num2").value);
            return [num1, num2];
        }

        // Function to display the result
        function displayResult(result) {
            document.getElementById("result").value = result;
        }

        // Function to perform addition
        function add() {
            var inputValues = getInputValues();
            var result = inputValues[0] + inputValues[1];
            displayResult(result);
        }

        // Function to perform subtraction
        function subtract() {
            var inputValues = getInputValues();
            var result = inputValues[0] - inputValues[1];
            displayResult(result);
        }

        // Function to perform multiplication
        function multiply() {
            var inputValues = getInputValues();
            var result = inputValues[0] * inputValues[1];
            displayResult(result);
        }

        // Function to perform division
        function divide() {
            var inputValues = getInputValues();
            var result = inputValues[0] / inputValues[1];
            displayResult(result);
        }
    </script>
</body>
</html>
