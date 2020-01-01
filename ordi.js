var code = new Array(125,415,209);
var description = new Array('Memoria UBS 16GB','Monitor 16 pulg','Mouse inalambrico');
var price = new Array(140,2050,380);
var tbody = document.getElementsByTagName("tbody");
console.log(tbody);
function buscar() {
    var buscar = parseInt(document.getElementById("codigo").value);
    var posicion = code.indexOf(buscar);
    console.log(buscar);
    if(posicion !=-1) {
    document.getElementById("desc").value = description[posicion];
    document.getElementById("price").value = price[posicion];
    }else{
        alert("Codigo no encontrado");
    }
}
function Calcular() {
    var precio = document.getElementById("price").value;
    var cantidad = document.getElementById("cantidad").value;
    var total = precio * cantidad;
    document.getElementById("total").value = total;
}
function Almacenar() {
    var valorCajas = document.getElementsByTagName("input");
    var filas = document.createElement("tr");
    
    for(var i=0;i<valorCajas.length;i++) {
        var columnas = document.createElement("td");
        var valoresCajas = document.createTextNode(valorCajas[i].value);
        // console.log(valoresCajas);
        columnas.appendChild(valoresCajas);
        filas.appendChild(columnas);
        // console.log(filas);
        // console.log(columnas);
        tbody[0].appendChild(filas);
    } 
}