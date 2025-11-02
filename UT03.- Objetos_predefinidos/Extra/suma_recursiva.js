let num = 5647
let suma_digitos = 0
while (num > 0) {
    suma_digitos += num%10
    num = Math.trunc(num / 10)
}
console.log(suma_digitos)