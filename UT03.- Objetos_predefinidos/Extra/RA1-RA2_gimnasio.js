/*
    **NOMBRE DEL USUARIO** (localStorage)
- Si existe `nombre_usuario` en localStorage, muéstralo con un alert
- Si NO existe, pídelo con un `prompt`
- Modifica el `<h1 id="bienvenida">` para mostrar: `"Gimnasio de [NOMBRE]"`, pero el nombre debe aparecer COMPLETAMENTE EN MAYÚSCULAS usando métodos de String
- Guarda el nombre en localStorage
*/

let nombre_usuario = localStorage.getItem("nombre_usuario")
nombre_usuario
    ? alert(`Tu nombre de usuario es ${nombre_usuario}`)
    : nombre_usuario = prompt("¿Cual es tu nombre de usuario?")

document.getElementById("bienvenida").textContent = `Gimnasio de ${nombre_usuario.toUpperCase()}`

localStorage.setItem("nombre_usuario", nombre_usuario)

/*
    **SERIES COMPLETADAS HOY** (sessionStorage)
- Usa `sessionStorage` para llevar el conteo de series completadas en la sesión actual
- Si ya existe `series_hoy`, recupéralo, súmale un número aleatorio entre 3 y 8, y muestra un alert con las series nuevas y el total
- Si NO existe, inicialízalo con un número aleatorio entre 5 y 10
- Muestra en `<h2 id="series_hoy">` el texto: `"Series completadas hoy: X"`
- Guarda el valor actualizado en sessionStorage
*/

let series_sesion = sessionStorage.getItem("series_sesion")

series_sesion = series_sesion ? (parseInt(series_sesion) + Math.round((Math.random() * 3) + 5) ) : Math.round((Math.random() * 5) + 5)


document.getElementById("series_hoy").textContent = `Series completadas por hoy: ${series_sesion}`

sessionStorage.setItem("series_sesion", series_sesion)

/*
   **NÚMERO DE SESIÓN ACTUAL** (sessionStorage)
- Lleva un contador de cuántas veces ha recargado la página en esta sesión
- Si existe `visitas_sesion`, increméntalo
- Si NO existe, inicialízalo en 1
- Muestra en `<h3 id="visitas_sesion">` el texto: `"Visita número X de hoy"`
- Guarda el valor en sessionStorage
*/

let visitas_sesion = sessionStorage.getItem("visitas_sesion")

visitas_sesion = visitas_sesion
    ? parseInt(visitas_sesion) + 1
    : 1

document.getElementById("visitas_sesion").textContent = `Recarga número ${visitas_sesion} de la sesión`

sessionStorage.setItem("visitas_sesion", visitas_sesion)


/*
    **ENTRENAMIENTOS TOTALES** (localStorage)
- Cuenta el número total de entrenamientos (partidas) que ha iniciado el usuario
- Si existe `entrenamientos_totales`, recupéralo
- Si NO existe, inicialízalo en 0
- **IMPORTANTE:** Solo incrementa el contador cuando `visitas_sesion === 1` (primer inicio de la sesión)
- Muestra en `<h2 id="entrenamientos_totales">` el texto: `"Entrenamientos completados: X"`
- Guarda el valor en localStorage
* */

 let entrenamientos_totales = localStorage.getItem("entrenamientos_totales")

entrenamientos_totales = entrenamientos_totales
    ? parseInt(entrenamientos_totales)
    : 0

if(visitas_sesion === 1) entrenamientos_totales+=1

document.getElementById("entrenamientos_totales").textContent = `Entrenamientos totales completados: ${entrenamientos_totales}`

localStorage.setItem("entrenamientos_totales", entrenamientos_totales)

/*
    **FECHA DEL ÚLTIMO ENTRENAMIENTO** (localStorage + Date)
- Si existe `ultimo_entrenamiento` en localStorage:
  - Conviértelo a un objeto Date
  - Muestra en `<h3 id="ultimo_entreno">` el texto: `"Último entrenamiento: [FECHA Y HORA]"` usando `.toLocaleString("es-ES")`
- Guarda la fecha y hora ACTUAL como string ISO para la próxima vez
- Si NO existe, no muestres nada en ese `<h3>`
*/

let ultimo_entrenamiento = localStorage.getItem("ultimo_entrenamiento")

if(ultimo_entrenamiento) {
    let entreno_actual = new Date(ultimo_entrenamiento)
    document.getElementById("ultimo_entreno").textContent = `Último entrenamiento: ${entreno_actual.toLocaleString("es-ES")}`
}

let fecha_actual = new Date()

localStorage.setItem("ultimo_entrenamiento", fecha_actual.toISOString())

/*
     **GRUPO MUSCULAR FAVORITO** (localStorage)
- Si existe `musculo_favorito`, muéstralo con un alert
- Si NO existe, pídelo con un `prompt` (ejemplo: "pecho", "espalda", "piernas", etc.)
- Muestra en `<h3 id="musculo_favorito">` el texto: `"Grupo muscular favorito: [MÚSCULO]"`
- Guarda el valor en localStorage

 */

let musculo_favorito = localStorage.getItem("musculo_favorito")

musculo_favorito
    ? alert(musculo_favorito)
    : musculo_favorito= prompt("¿Cual es tu grupo muscular favorito?")

document.getElementById("musculo_favorito").textContent = `Grupo muscular favorito: ${musculo_favorito}`

localStorage.setItem("musculo_favorito", musculo_favorito)

/*
    **RACHA DE DÍAS** (localStorage + Date + Math)
- Esta es la parte más compleja. Debes calcular cuántos días consecutivos ha entrenado el usuario.
- Si existe `fecha_ultimo_acceso`:
  - Conviértela a Date
  - Calcula la diferencia en días con la fecha actual
  - Si la diferencia es 1 día o menos (entrenó ayer u hoy), incrementa `racha_dias`
  - Si la diferencia es mayor a 1 día, reinicia `racha_dias` a 1
- Si NO existe `fecha_ultimo_acceso`, inicializa `racha_dias` en 1
- Muestra en `<h3 id="racha_dias">` el texto: `"Racha actual: X días 🔥"`
- Guarda tanto `racha_dias` como `fecha_ultimo_acceso` (fecha actual en ISO)
*/

let fecha_ultimo_acceso = localStorage.getItem("fecha_ultimo_acceso")
let racha_dias = localStorage.getItem("racha_dias")
racha_dias = racha_dias ? parseInt(racha_dias) : 0 // Conversión a número

console.log(`Fecha último acceso es de ${fecha_ultimo_acceso} y de tipo ${typeof fecha_ultimo_acceso}`)

if(fecha_ultimo_acceso) {
    let fecha_actual = new Date()
    let ultimo_acceso = new Date(fecha_ultimo_acceso)
    let diferencia_ms = fecha_actual - ultimo_acceso
    let diferencia_dias = Math.floor(diferencia_ms / (1000*60*60*24))
    if(diferencia_dias === 1 ) {     // Si entrenó ayer u hoy
        racha_dias++
        console.log("✅ Racha incrementada")
    } else {
        racha_dias = 1
        console.log("❌ Racha reiniciada")
    }
} else {
    racha_dias = 1
    console.log("🆕 Primera racha")
}

document.getElementById("racha_dias").textContent = `Racha actual de ${racha_dias} días`
localStorage.setItem("racha_dias", racha_dias)

console.log(`Fecha actual es ${fecha_actual.toISOString()} y es de tipo ${typeof fecha_actual}`)
localStorage.setItem("fecha_ultimo_acceso", fecha_actual.toISOString())

/*
     **BOTÓN REINICIAR PROGRESO**
- Añade un `addEventListener` al botón con ID `btn_reiniciar`
- Al hacer clic:
  - Limpia localStorage y sessionStorage
  - Muestra un alert: "Progreso reiniciado. Se recargará la página."
  - Recarga la página con `location.reload()`
 */

document.getElementById("btn_reiniciar").addEventListener("click", () => {
    localStorage.clear()
    sessionStorage.clear()
    alert("Progreso reiniciado. Se recargará la página")
    location.reload()
})
