<!DOCTYPE html>
<html>
<head>
    <title>Text-to-Speech and Speech Recognition</title>
</head>
<body>
    <h1>Text-to-Speech and Speech Recognition</h1>
    <p>Enter text:</p>
    <textarea id="text" rows="4" cols="50"></textarea>
    <br><br>
    <button onclick="speak()">Speak</button>
    <br><br>
    <p>Speak into the microphone:</p>
    <div id="recognition"></div>

    <script>
        // Text-to-speech
        function speak() {
            var text = document.getElementById("text").value;
            var utterance = new SpeechSynthesisUtterance(text);
            speechSynthesis.speak(utterance);
        }

        // Speech recognition
        var recognition = new webkitSpeechRecognition() || SpeechRecognition();
        var output = document.getElementById("recognition");
        recognition.lang = "en-US";
        recognition.interimResults = true;
        recognition.onresult = function(event) {
            var interimTranscript = "";
            for (var i = event.resultIndex; i < event.results.length; i++) {
                var transcript = event.results[i][0].transcript;
                if (event.results[i].isFinal) {
                    output.innerHTML += "<p>" + transcript + "</p>";
                } else {
                    interimTranscript += transcript;
                }
            }
            if (interimTranscript !== "") {
                output.innerHTML += "<p>" + interimTranscript + "</p>";
            }
        };
        recognition.onerror = function(event) {
            console.error(event.error);
        };
        recognition.onend = function() {
            recognition.start();
        };
        recognition.start();
    </script>
</body>
</html>
