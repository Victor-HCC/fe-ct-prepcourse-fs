function mayuscula(nombre) {
    // Esta función recibe un nombre (string).
    // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
    // [Ejemplo]: "mario" ----> "Mario".
    // Tu código:
    // nombre = nombre.split('');
    // nombre[0] = nombre[0].toUpperCase();
    // return nombre.join('');

    let aux = '';
    for(let i = 0; i < nombre.length; i++) {
        if(i === 0) aux += nombre[i].toUpperCase();
        else aux += nombre[i];
    }

    return aux;
}
 
 function invocarCallback(cb) {
    // Invoca/ejecuta el callback `cb`.
    // [NOTA]: no debes reotrnar nada.
    // Tu código:
    cb();
 }
 
 function operacionMatematica(num1, num2, cb) {
    // En este ejercicio recibirás dos números y un callback.
    // El callback realiza una operación matemática, por lo que necesita de los dos números.
    // Retorna el resultado del callback pasándole como parámetros los números.
    // Tu código:
    return cb(num1, num2);
 }


//  console.log(mayuscula('árbol'));

function saludar() {
    console.log('Hola mundo');
}

// invocarCallback(saludar)

function sumar(n1, n2) {
    return n1 + n2;
}


console.log(operacionMatematica(4, 5, sumar));
