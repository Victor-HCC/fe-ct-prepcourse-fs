function sortArray000(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   
   let arrayOrdenado = [];
 
   for(let i = 0; i < arrayOfStrings.length; i++) {

      let min = Infinity;
      let aux = 0;

      for (let j = 0; j < arrayOfStrings.length; j++) {
         if (arrayOfStrings[j].length < min && !arrayOrdenado.includes(arrayOfStrings[j])) {
            aux = j;
            min = arrayOfStrings[j].length;
         }
      }

      arrayOrdenado.push(arrayOfStrings[aux]);
   }

   return arrayOrdenado;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let arr = [];

   array2.forEach( elem => {
      if(array1.includes(elem)) {
         arr.push(elem);
      }
   })

   return arr;

}

function sortArray2(arrayOfStrings) {
   let arrayOrdenado = arrayOfStrings.slice(); // Create a copy of the original array

   for (let i = 0; i < arrayOrdenado.length - 1; i++) {
      for (let j = 0; j < arrayOrdenado.length - i - 1; j++) {
         if (arrayOrdenado[j].length > arrayOrdenado[j + 1].length) {
            // Swap the positions of two strings
            let temp = arrayOrdenado[j];
            arrayOrdenado[j] = arrayOrdenado[j + 1];
            arrayOrdenado[j + 1] = temp;
         }
      }
   }

   return arrayOrdenado;
}
 

 // console.log(["You", "are", "beautiful", "looking", 'a', 'You'].sort((a, b) => a.length - b.length));
//  console.log(sortArray2(["You", "are", "beautiful", "looking", 'You']));

 function sortArray3(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   
   let arrayOrdenado = [];
   let indexOrdenado = [];
 
   for(let i = 0; i < arrayOfStrings.length; i++) {

      let min = Infinity;
      let aux = 0;

      for (let j = 0; j < arrayOfStrings.length; j++) {
         if (arrayOfStrings[j].length < min && !indexOrdenado.includes(j)) {
            aux = j;
            min = arrayOfStrings[j].length;
         }
      }

      arrayOrdenado.push(arrayOfStrings[aux]);
      indexOrdenado.push(aux);
   }

   return arrayOrdenado;
}

console.log(sortArray3(["You", "are", "beautiful", 'a', "looking", 'You', 'a']));
console.log(sortArray3(["You", "are", "beautiful", "looking"]));


function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   
   let arrOrdenado = [];
   let indexOrdenado = [];

   for(let i = 0; i < arrayOfStrings.length; i++) {
      let min = Infinity;
      let aux = 0;

      for(let j = 0; j < arrayOfStrings.length; j++) {
         if(arrayOfStrings[j].length < min && !indexOrdenado.includes(j)) {
            min = arrayOfStrings[j].length;
            aux = j;
         }
      }

      arrOrdenado.push(arrayOfStrings[aux]);
      indexOrdenado.push(aux);
   }

   return arrOrdenado;
}


function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let arr = [];

   array2.forEach(element => {
      if(array1.includes(element)) {
         arr.push(element);
      }
   });

   return arr;
}