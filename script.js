document.addEventListener("DOMContentLoaded", function () {
  var audio = document.querySelector("audio");
  function startAudio() {
    audio.play().catch((error) => {
      console.log(
        "Playback was prevented by the browser. Please interact with the document."
      );
    });
    // Remove the event listener after the audio has started
    document.body.removeEventListener("click", startAudio);
    document.body.removeEventListener("touchstart", startAudio);
  }

  document.body.addEventListener("click", startAudio);
  document.body.addEventListener("touchstart", startAudio); // Specifically for mobile devices
});
