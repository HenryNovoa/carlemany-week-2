function dialogue() {
  const response = confirm("Hola mundo");
  if (response === true) {
    alert("Has clicado OK");
  } else {
    alert("Has clicado Cancelar");
  }
}

dialogue();
