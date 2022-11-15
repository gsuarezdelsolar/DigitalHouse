// Instrucciones
// 1. Crear una carpeta de trabajo y dentro de ella crea un archivo JavaScript (.js).
// Facturación - Cursos DH
// 2. El Tech Leader de nuestro equipo nos informa que debemos realizar un código que
// permita calcular el monto a pagar por un alumno basándose en los cursos que
// desea tomar en Digital House. Deberás seguir los siguientes pasos para lograr el
// objetivo:
// a. Crear un array multidimensional que contenga los nombres de los cursos y su
// precio en pesos: “html5, 4000”, “css3, 5000”, “javascript, 10000”, “react,
// 7000”, “nodejs, 15000”.

let cursos = [["html5", 4000], ["css3", 5000], ["javascript", 10000], ["react",7000], ["nodejs", 15000]]

// b. Crear un array que contenga los cursos que el alumno quiere tomar con DH.
// Deben estar escritos en MAYÚSCULAS y el alumno puede seleccionar entre
// HTML5, CSS3, JAVASCRIPT, REACT y NODEJS.

let cursosAlumnos = ["HTML5", "NODEJS"]


// c. Crear una función (Callback) que reciba como parámetros el array
// multidimensional de los cursos y el otro array que indica los cursos que
// quiere hacer el alumno. La función tendrá la responsabilidad de calcular y
// devolver el monto total a pagar por el alumno en función de los cursos que
// quiere realizar. No olvides que en el array multidimensional los nombres de los
// cursos están escritos en letras minúsculas y tienes que pasarlas a
// MAYÚSCULAS.

function facturacion(catalogo, elegidos) {
    let precioTotal = 0;
    for (let i = 0; i < catalogo.length; i++) {
        if (elegidos.includes(catalogo[i][0].toUpperCase())){
            precioTotal += catalogo[i][1]
        }
    }
    return precioTotal
}

console.log(facturacion(cursos, cursosAlumnos));

// d. Crear otra función que reciba como parámetros el nombre y el apellido del
// alumno, el array multidimensional de los cursos con sus respectivos
// precios y el array que contiene qué cursos quiere hacer el alumno. Esta
// función tendrá la responsabilidad de retornar el nombre y el apellido del
// alumno y el monto total a pagar en función de los cursos que quiere realizar.



// e. Una vez creado el programa, ejecutalo. Para verificar los resultados solicitados,
// invoca a la segunda función, asigna diferentes valores o argumentos y no
// olvides utilizar el console.log() para mostrar los resultados al usuario. Te
// compartimos un ejemplo:

let cursos = [["html5", 4000],["css3", 5000], ["javascript", 10000], ["react" ,7000], ["nodejs", 15000]];


let cursosAlumno = ["REACT", "HTML5", "JAVASCRIPT"];


function facturacion(catalogo, elegidos) {
    let precioTotal = 0
    for (let i = 0; i < catalogo.length; i++){
        if (elegidos.includes(catalogo[i][0].toUpperCase())) {
            precioTotal += catalogo[i][1]
        }
    }
    return precioTotal
}


console.log(facturacion(cursos, ["REACT"]));



function infoAlumno(nombre, apellido, precioTotal, catalogo, elegidos) {
    let alumnoInfo = [nombre, apellido, precioTotal(catalogo, elegidos)]
    return alumnoInfo
}


console.log(infoAlumno("Segundo", "Lopez", facturacion, cursos, ["REACT", "JAVASCRIPT"]));
