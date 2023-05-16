
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



const filtro = () =>{

let mostrar = '';
let miau = bbdd.filter(filt => ( filt.destino =="mallorca")||(filt.destino =="galicia")||(filt.destino=="canarias"));
console.log('**************************');
console.log(miau);


for( let i = 0; i<miau.length; i++){
    mostrar += `${miau[i].name}  ${miau[i].destino}`
}
console.log('**************************');
console.log(mostrar);

document.getElementById('ofert').innerHTML = mostrar
}
