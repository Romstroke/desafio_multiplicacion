let numeroIngresado = Number(prompt('Ingrese un número entre 1 y 20, por favor:'));

//la función es constante porque nunca va a cambiar su estructura de función
const solicitarNumero = (numeroIngresado) => {

    //validar que esté entre 1 y 20
    if (numeroIngresado < 1 || numeroIngresado > 20) {
        console.log('número fuera del rango');
        
        //esto debería ir aqui, pero me da un loop infinito, por qué?
        //recursividad
        // solicitarNumero(numeroIngresado);

    } else {
        //si el número es válido entonces 
        for (let i = 1; i <= numeroIngresado; i++) {
            console.log(`${i} x ${numeroIngresado} = ${i * numeroIngresado}`);
            let resultadoFactorial = 1;
            //for anidado para obtener el factorial del numero ingresado
            //NO SE HEREDA
            for (let j = i; j > 0; j--) {
                resultadoFactorial = resultadoFactorial * i;
            }
            console.log("Factorial de " + i + " es: " + resultadoFactorial);
        }
    }
}

///llamar a la funcion
solicitarNumero(numeroIngresado);