let free = false;

function validarCliente(time)
{
	let edad = prompt("Cual es tu eddad?");
	if(edad > 18)
	{
		if(time >=2 && time < 7 && free == false)
		{
			alert("Puedes pasar gratis, porque eres la primer persona despues de las 2 am");
			free = true;
		}
		else
		{
			alert(`Tienes q pagar entrada, son las ${time} `)
		}
	}
	else
	{
		alert("eres menor de edad");
	}
}

validarCliente(17);
validarCliente(3);
validarCliente(4);