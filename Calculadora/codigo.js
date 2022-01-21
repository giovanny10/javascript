function sumar(num1, num2)
{
	let resultado = parseInt(num1) + parseInt(num2);
	return resultado
}

function restar(num1, num2)
{
	let resultado = parseInt(num1) - parseInt(num2);
	return resultado
}

function multiplicar(num1, num2)
{
	let resultado = parseInt(num1) * parseInt(num2);
	return resultado
}

function dividir(num1, num2)
{
	let resultado = parseInt(num1) / parseInt(num2);
	return resultado
}

function operaciones() {
	let operacion = prompt("Que operacion deseas realizar");
	if(operacion=="sumar")
	{
		document.write(sumar(prompt("Ingrese el numero 1"),prompt("Ingrese el numero 2")));
	}
	else if(operacion =="restar")
	{
		document.write(restar(prompt("Ingrese el numero 1"),prompt("Ingrese el numero 2")));
	}
	else if(operacion=="multiplicar")
	{
		document.write(multiplicar(prompt("Ingrese el numero 1"),prompt("Ingrese el numero 2")));
	}
	else if(operacion=="dividir")
	{
		document.write(dividir(prompt("Ingrese el numero 1"),prompt("Ingrese el numero 2")));
	}
	else
	{
		document.write("No se ha escodigo una operacion valida");
	}

}

operaciones();