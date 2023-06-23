function sortArray(arrayOfStrings) {
    // Recibes un arreglo de strings.
    // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
    // de la longitud de cada string.
    // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
    // Tu código:
    // return arrayOfStrings.sort((a, b) => a.length - b.length);
 
    function orden(array) {
       let copia = [...array];
       let numeroOrden = 0
       let arrayOrden = [];
       let alreadyOrdered = []
       let i = 0;
       while(i < array.length) {
          let min = Infinity;
          let aux = 0;
          for(let j = 0; j < array.length; j++) {
             if(array[j].length < min && !alreadyOrdered.includes(array[j])) {
                aux = j;
                min = array[j].length;
             }
          }
          arrayOrden[aux] = numeroOrden;
          numeroOrden += 1;
          alreadyOrdered.push(array[aux]);
          copia.splice(copia.indexOf(array[aux]), 1);
          i += 1;
       }
       return arrayOrden;
    }
 
    let arrOrden = orden(arrayOfStrings);
    let arr = []
    for(let i = 0; i < arrayOfStrings.length; i++) {
       arr[arrOrden[i]] = arrayOfStrings[i];
    }
    return arr;
}

console.log(sortArray(["You", "are", "beautiful", "looking", 'a', 'You']));
console.log(sortArray(["You", "are", "beautiful", "looking"]));


// let sorted = [2, 1, 4, 3, 0];
// let arr = ['hola', 'ala', 'esquina', 'volar', 'a'];

// let arr2 = [];

// for(let i = 0; i < arr.length; i++) {
//    arr2[sorted[i]] = arr[i];
// }

// let arrayTest = ['hola', 'ala', 'esquina', 'volar', 'a'];

// let min = arrayTest[0].length;

// let aux = 0
// for(let i = 0; i < arrayTest.length; i++) {
//    if(arrayTest[i].length < min) {
//       aux = i;
//       min = arrayTest[i].length;
//    }
// }

// function sortArray(arrayOfStrings) {
//     // Recibes un arreglo de strings.
//     // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
//     // de la longitud de cada string.
//     // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
//     // Tu código:

//     // return arrayOfStrings.sort((a, b) => a.length - b.length);
    
//     let arrayOrdenado = [];
 
//     for(let i = 0; i < arrayOfStrings.length; i++) {
 
//        let min = Infinity;
//        let aux = 0;
 
//        for (let j = 0; j < arrayOfStrings.length; j++) {
//           if (arrayOfStrings[j].length < min && !arrayOrdenado.includes(arrayOfStrings[j])) {
//              aux = j;
//              min = arrayOfStrings[j].length;
//           }
//        }
 
//        arrayOrdenado.push(arrayOfStrings[aux]);
//     }
 
//     return arrayOrdenado;
//  }
 
//  function buscoInterseccion(array1, array2) {
//     // Recibes dos arreglos de números.
//     // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
//     // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
//     // Si no tienen elementos en común, retornar un arreglo vacío.
//     // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
//     // Tu código:
//     let arr = [];
 
//     array1.forEach(elem => {
//        if(array2.includes(elem)) {
//           arr.push(elem);
//        }
//     });
 
//     return arr;
//  }

function breakStatement(num) {
   let arr = [];

   for(let i = 0; i < 10; i++) {
      num += 2;
      arr.push(num);
      switch(arr[i]) {
         case arr[i] === num:
            
      }
   }
}