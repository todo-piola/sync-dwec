// Llamamos al elemento HTML que contiene el mensaje de bienvenida para después modificarlo
let bienvenida = document.getElementById("bienvenida")


// ----- NOMBRE DE USUARIO ------
// Si existe el nombre_usuario lo mostramos y sino lo pedimos para guardarlo más adelante
let nombre_usuario = localStorage.getItem("nombre_usuario")
if(nombre_usuario) {
    alert(`Tu nombre de usuario es ${nombre_usuario}`)
    // Mostramos el mensaje de bienvenida personalizado
    bienvenida.innerHTML = `Hola de nuevo, ${nombre_usuario}`
} else {
    nombre_usuario = prompt("¿Cuál es tu nombre de usuario?")
}
// Almacenamos el nombre de usuario
localStorage.setItem("nombre_usuario", nombre_usuario);


// ---- TURNO ACTUAL ----
// sessionStorage se borra al cerrar la pestaña, pero persiste en recargas
let turno_actual = sessionStorage.getItem("turno_actual");

if(turno_actual) {
    // Si existe, recuperamos el turno
    turno_actual = parseInt(turno_actual);
    turno_actual++;
    alert(`Continuando partida. Es el turno ${turno_actual}`);
} else {
    // Primera vez en esta sesión, empezamos en turno 1
    turno_actual = 1;
    alert("Nueva partida iniciada. Turno 1");
}
document.getElementById("turno").textContent = `Turno actual: ${turno_actual}` // Mostramos el turno actual en el HTML
sessionStorage.setItem("turno_actual", turno_actual); // Guardamos el turno en sessionStorage


// ----- CONTADOR DE PARTIDAS ------
let contador_partidas = localStorage.getItem("contador_partidas")
// Si existe lo parseamos para recoger el valor y sino lo inicializamos a zero
contador_partidas = contador_partidas ? parseInt(contador_partidas) : 0
if(turno_actual === 1) {
    contador_partidas++;
}
// Llamamos al objeto HTML para actualizar el texto
document.getElementById("contador").textContent = `Número total de partidas jugadas: ${contador_partidas}`
localStorage.setItem("contador_partidas", contador_partidas); // Almacenamos el nuevo valor de contador


// ----- FECHA ÚLTIMA SESIÓN ------
// Añadimos fecha y hora del último inicio de sesión
let ultimo_inicio = localStorage.getItem("ultimo_inicio_sesion");
if(ultimo_inicio) {
    // Si existe, lo parseamos y mostramos
    ultimo_inicio = new Date(ultimo_inicio); // Convertir string ISO a Date
    document.getElementById("fecha_ultimo_inicio").textContent =
        `Último inicio de sesión realizado ${ultimo_inicio.toLocaleString("es-ES")}`;
}
let fecha_actual = new Date(); // Guardamos la fecha ACTUAL como última sesión para la próxima vez
localStorage.setItem("ultimo_inicio_sesion", fecha_actual.toISOString()); // Convertimos a ISO estándar para almacenarla


// ----- COLOR ELEGIDO ------
let color_elegido = localStorage.getItem("color_elegido")
color_elegido
    ? alert(`Tu color elegido es ${color_elegido}`)
    : color_elegido = prompt("Con qué color quieres jugar?")

localStorage.setItem("color_elegido", color_elegido)





// --- REINICIAR PERFIL ---
// Generamos la lógica del botón para reiniciar almacenamiento
const reiniciar_perfil = document.getElementById("reiniciar")

reiniciar_perfil.addEventListener("click", () => {
    localStorage.clear() // Limpiamos tanto el almacenamiento local como el de sesión
    sessionStorage.clear()
    alert("Perfil reiniciado. Se recargará la página.")
    location.reload() // recarga la página después del borrado
})
