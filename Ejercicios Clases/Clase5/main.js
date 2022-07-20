console.log("hello World")

// let obj ={}

// const agregar = (element) => {
// if (typeof obj[element] === 'undefined'){
//     obj[element] = 1
// }else(
// obj[element] +=  1
// )
// }

// for (let i = 0; i<1000; i++){
// const randomNum = Math.ceil(Math.random()*20)
// // console.log(randomNum)
// agregar(randomNum)
// }

// console.log(obj)



const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]
const nombres="";
const precioTotal = 0;
const precioPromedio = 0;
const productoMenor = undefined;
const productoMayor = undefined;
const objeto ={};
const arrayReader =(array)={

for (let i=0; i<array.length; i++) {
    nombres = nombres+`,${array[i]}`
    console.log(nombres)
}


}