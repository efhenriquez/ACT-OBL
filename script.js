var nombreAlumno = prompt("Ingrese nombre del alumno")
var nota1 = prompt("Ingrese su primera nota:")
var nota2 = prompt("Ingrese su segunda nota:")
var nota3 = prompt("Ingrese su tercera nota:")

nota1 = parseInt(nota1)
nota2 = parseInt(nota2)
nota3 = parseInt(nota3)

promedioNotas = (nota1 + nota2 + nota3) / 3
promedioNotas = parseFloat(promedioNotas)

alert("El promedio de " + nombreAlumno + " es : " + promedioNotas)

