function encontrarMCD(a,b) {
    while(b !== 0) {
        let resto = a % b
        a = b
        b = resto
    }
    console.log(a)
}

encontrarMCD(237,185)