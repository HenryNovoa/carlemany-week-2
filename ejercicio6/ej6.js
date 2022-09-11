function toggleText(textId, buttonId) {
  const text = document.getElementById(textId);
  const toggleButton = document.getElementById(buttonId);
  text.classList.toggle("hidden");

  if (text.classList.contains("hidden")) {
    toggleButton.innerText = "Mostar texto";
  } else {
    toggleButton.innerText = "Ocultar texto";
  }
}
