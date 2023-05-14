
/////////// FUNCTION  SEARCH //////////
let bbdd = [];

function search(){
let ids =  document.getElementById("nombres").value.toLowerCase();
let ori = document.getElementById("origen").value.toLowerCase();
let dest = document.getElementById("destino").value.toLowerCase();
let pers = document.getElementById("personas").value.toLowerCase();
let fech = document.getElementById("fecha").value.toLowerCase();

if(ids == "" || ori == "" || dest == "" || pers == "" || fech == ""){
    alert("Introducir todos los campos").focus();
}
let searching ={
    name: ids,
    origen: ori,
    destino: dest,
    nºPersonas: pers,
    fechaSalida: fech,
}
bbdd.push(searching)
console.log(bbdd)
} 
////////////////// FUNCTION FILTER ////////////
let bbdd2 = []
let filtrado = []
const filtro = () =>{
    let ids =  document.getElementById("nombres").value.toLowerCase();
    let ori = document.getElementById("origen").value.toLowerCase();
    let dest = document.getElementById("destino").value.toLowerCase();
    let pers = document.getElementById("personas").value.toLowerCase();
    let fech = document.getElementById("fecha").value.toLowerCase();
    
    if(ids == "" || ori == "" || dest == "" || pers == "" || fech == ""){
        alert("Introducir todos los campos").focus(); }   
    
        let searching ={
        name: ids,
        origen: ori,
        destino: dest,
        nºPersonas: pers,
        fechaSalida: fech,
    }
bbdd2.push(searching)
let miau = bbdd2.filter(filt => ( searching.destino =="mallorca")||(searching.destino =="galicia")||(searching.destino=="canarias"));
filtrado.push(miau)
// console.log(filtrado)
let miau2 = []
for( let i = 0; i<filtrado.length; i++){

    miau2[i]= filtrado[i]
}

document.getElementById("ofert").innerHTML = miau2
}


