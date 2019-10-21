
var a = "String"
var b = 12
var c = 12.2
var d = true
var e = {
    nombre: "Luis",
    edad: 20
}
var f = null;
var g = ["Miguel", 20, ["Curso Web", 12.3]]

if (9 === "9") { //Estructura if
    console.log("Valido")
}else{
    console.log("No valido")
}

for (let index = 0; index < g.length; index++) {
    console.log(g[index])
}

g.forEach(element => {
    console.log(element)
});
while (false) {
    
}

function Suma(b, c) {
    console.log(b+c)
}

Suma(b,c)
