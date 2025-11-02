function contar_caracteres_unicos(cadena)  {
    let cadena_temporal = cadena.toLowerCase()

    for (let caracter of cadena) {
        let caracter_temp = caracter.toLowerCase()
        let index_caracter = cadena.indexOf(caracter)
        if(cadena.substring(index_caracter + 1).includes(caracter_temp)) cadena_temporal = cadena_temporal.replaceAll(caracter_temp, "")
    }
    console.log(`La cadena tiene ${cadena_temporal.length} carácteres únicos. (${cadena_temporal})`)
    console.log()
}

function contar_caracteres_unicos_2(cadena) {
    let cadena_temporal = cadena.toLowerCase()

    for (let caracter of cadena_temporal) {
        let primera_aparicion = cadena_temporal.indexOf(caracter)
        let ultima_aparicion = cadena_temporal.lastIndexOf(caracter)

        // Si los índices no coinciden, significa que ese carácter aparece más adelante en la cadena
        if(primera_aparicion !== ultima_aparicion) {
            cadena_temporal = cadena_temporal.replaceAll(caracter, "")
        }
    }
    console.log(`La cadena tiene ${cadena_temporal.length} carácteres únicos. (${cadena_temporal})`)
}

let cadena = "Esta cadena es para contar los carácteres únicos que tiene"
contar_caracteres_unicos(cadena)
contar_caracteres_unicos_2(cadena)