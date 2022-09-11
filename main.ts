let numero = 0
let R = 0
let numeroinverso = 0
basic.forever(function () {
    numero = 12345
    R = numero % 10
    numero = numero / 10
    numeroinverso = R * 10
    R = numero % 10
    numero = numero / 10
    numeroinverso = (numeroinverso + R) * 10
    R = numero % 10
    numero = numero / 10
    numeroinverso = (numeroinverso + R) * 10
    R = numero % 10
    numero = numero / 10
    numeroinverso = (numeroinverso + R) * 10
    numeroinverso = numeroinverso + numero
    basic.showNumber(numeroinverso)
})
