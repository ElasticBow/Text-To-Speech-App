function speak() {
    var synth = window.speechSynthesis;

    speak_data = document.getElementById("TTS").value;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
}