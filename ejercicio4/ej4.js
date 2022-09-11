// Podría fer més, com per exemple posarli una variable global com al vídeo, o posarli estils als 3, ho deixaré així ja que es el que es demana.
function toggleText() {
  const additionalText = document.querySelector(".additional");
  const toggleButton = document.getElementById("toggleButton");
  additionalText.classList.toggle("hidden");

  if (additionalText.classList.contains("hidden")) {
    toggleButton.innerText = "Seguir leyendo";
  } else {
    toggleButton.innerText = "Ocultar exceso de texto";
  }
}
