// Escribí la función sumatoriaBajoImporte la cual recibiendo un array con importes nos devuelva 
// el resultado final de la suma de los importes de todos los meses que tienen ganancia, 
// a excepción de los que superen un importe de $ 1.000


function sumatoriaBajoImporte (importes) {

    let suma = 0;

    for (let i = 0; i < importes.length ; i++) {
        if (0 < importes[i] && importes[i] <= 1000){
        suma = suma + importes[i];
        }
    }
    return suma;
}

let resultado = sumatoriaBajoImporte([100, 300, 1000, 150, 500])

console.log(resultado)

