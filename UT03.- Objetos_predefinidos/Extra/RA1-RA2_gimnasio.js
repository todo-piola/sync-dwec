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
    : visitas_sesion = 1

document.getElementById("visitas_sesion").textContent = `Visita número ${visitas_sesion} de hoy`

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
    : entrenamientos_totales = 0

if(visitas_sesion === 1) entrenamientos_totales+=1

document.getElementById("entrenamientos_totales").textContent = `Entrenamientos completados: ${entrenamientos_totales}`

localStorage.setItem("entrenamientos_totales", entrenamientos_totales)

/*
    **FECHA DEL ÚLTIMO ENTRENAMIENTO** (localStorage + Date)
- Si existe `ultimo_entrenamiento` en localStorage:
  - Conviértelo a un objeto Date
  - Muestra en `<h3 id="ultimo_entreno">` el texto: `"Último entrenamiento: [FECHA Y HORA]"` usando `.toLocaleString("es-ES")`
- Guarda la fecha y hora ACTUAL como string ISO para la próxima vez
- Si NO existe, no muestres nada en ese `<h3>`
*/

