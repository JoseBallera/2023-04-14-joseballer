//
// 6️⃣ ***** EJERCICIO 6 ***** - sortPrimeHouses() 6️⃣
// 
// Implementar un algoritmo de ordenamiento, que además de ordenar un array de menor a mayor,
// retorne false si un número dentro del array no es primo
// EJEMPLOS:
// Dado el siguiente array:
// [25, 3, 6, 8, 5, 12, 9, 18, 11, 7]
// sortPrimeHouses() retorna => false (porque 25 por ejemplo, no es primo)
//
// Dado este otro array:
// [61, 7, 13, 11, 29, 3]
// sortPrimeHouses() retorna => [3, 7, 11, 13, 29, 61]
//⚠️ ATENCION ⚠️
// NO utilizar el método sort() de Array!
// REQUISITOS:
//  🟢 Aplicar un algoritmo de ordenamiento de menor a mayor
//  🟢 Si numuero dentro del array no es primo, retornar false

function sortPrimeHouses(array) {
  // Tu código aquí:
  selectionSort(array);
  var primo = [];
  var noPrimo = [];

  for (let i = 0; i < array.length; i++) {
    if (esPrimo(array[i])) primo.push(array[i]);
    else noPrimo.push(array[i]);
  }
  if (noPrimo.length === 0 ) return primo;
  else return false;

  function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
      var minIndex = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minIndex]) minIndex = j;
      }
      var aux = array[i];
      array[i] = array[minIndex];
      array[minIndex] = aux;
    }
    return array;
  }
  function esPrimo(num) {
    var esPrimo = true;
    for(let i = 2; i < num; i++){
      if(num % i === 0) esPrimo = false;
    }
    return esPrimo;
  }
}

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  sortPrimeHouses
};