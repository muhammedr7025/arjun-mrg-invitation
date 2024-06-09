document.addEventListener("DOMContentLoaded", function () {
  var audio = document.querySelector("audio");
  audio.play().catch((error) => {
    console.log(
      "Auto-play was prevented by the browser. Interact with the document to start playback."
    );
    // Optionally, add a click event to start playing
    document.body.addEventListener("click", () => audio.play());
  });
});
