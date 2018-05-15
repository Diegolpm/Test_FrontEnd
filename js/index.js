     var numeros = [13, 42, 565, 1, 26, 75];
     var impares = [];

     //document.getElementById("demo").innerHTML = numeros;

     function ejercicio1() {

         numeros.forEach(element => {
             if (element % 2) {
                 impares.push(element);
             }
         });

         //Obtener el mayor número impar del arreglo.
         var max = Math.max.apply(null, impares);
         console.log('El mayor número impar del arreglo es ' + max);
         document.getElementById("eje1").innerHTML = max;

     }

     function ejercicio2() {
         //Obtener el menor número del arreglo.
         var min = Math.min.apply(null, numeros);
         console.log('El menor número del arreglo es ' + min);
         document.getElementById("eje2").innerHTML = min;
     }
     //Obtener el segundo mayor número del arreglo.

     function ejercicio3() {
         numeros.sort(function (a, b) {
             return b - a
         });

         console.log('El segundo mayor número del arreglo es ' + numeros[1]);
         document.getElementById("eje3").innerHTML = numeros[1];
     }
