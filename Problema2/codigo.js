 let cantidad = prompt("Cuantos alumnos son");
 let alumnosTotales = [];

 for(i=0;i<cantidad;i++)
 {
 	alumnosTotales[i]=[prompt("Nombre del alumno "  + (i+1)),0]
 }

 function tomarAsistencia(nombre, p)
 {
	let presencia = prompt(nombre);
	if(presencia=="p" || presencia =="P")
	{
		alumnosTotales[p][1]++;
	}
 }

 for(i=0;i<10;i++)
 {
 	for(alumno in alumnosTotales)
 	{
 		tomarAsistencia(alumnosTotales[alumno][0],alumno);
 	}
 }

 for(alumno in alumnosTotales)
 {
 	let resultado = `${alumnosTotales[alumno][0]} <BR>
 	_______Presencias :${alumnosTotales[alumno][1]} <BR> 
 	_______Ausencias : ${10-parseInt(alumnosTotales[alumno][1])}`;
 	if(10 - alumnosTotales[alumno][1] > 5)
 	{
 		resultado += "Reprobado por inasistencias <BR>";
 	}
 	else
 	{
 		resultado += "<br><br>"
 	}
 	 document.write(resultado);
 }

