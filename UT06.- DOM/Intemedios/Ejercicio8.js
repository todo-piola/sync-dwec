
const menu = document.querySelector("#menu");

menu.addEventListener("click", (ev) => {
  if (ev.target.classList.contains("perfil")) alert("Este es el perfil")
  else if (ev.target.classList.contains("config")) alert("La configuración")
  else if (ev.target.classList.contains("salir")) alert("Salir")
});