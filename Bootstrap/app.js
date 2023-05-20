
let carrito = []
jQuery(() => {
    $(".añadir-carrito1").on("click", () =>{
        let prenda1 = { title: "PRENDA: Pantalon suelto gris",
                        price: 20}
                        carrito.push(prenda1)
                        console.log(carrito)
    })
    $(".añadir-carrito2").on("click", () =>{
        let prenda2 = { title: "PRENDA: Vestido Túnico",
                        price: 18}
                        carrito.push(prenda2)
                        console.log(carrito)
    })
    $(".añadir-carrito3").on("click", () =>{
        let prenda3 = { title: "PRENDA: Falda Mid Print",
                        price: 12}
                        carrito.push(prenda3)
                        console.log(carrito)
    })
    $(".añadir-carrito4").on("click", () =>{
        let prenda4 = { title: "PRENDA: Cardigan Largo Rayas",
                        price: 22}
                        carrito.push(prenda4)
                        console.log(carrito)
    })
    $(".añadir-carrito5").on("click", () =>{
        let prenda5 = { title: "PRENDA: Falda Print Zebra",
                        price: 17}
                        carrito.push(prenda5)
                        console.log(carrito)
    })
    $(".añadir-carrito6").on("click", () =>{
        let prenda6 = { title: "PRENDA: Mono Overo",
                        price: 25}
                        carrito.push(prenda6)
                        console.log(carrito)
    })
    $(".añadir-carrito7").on("click", () =>{
        let prenda7 = { title: "PRENDA: Vestido Jersey",
                        price: 18}
                        carrito.push(prenda7)
                        console.log(carrito)
    })
    $(".añadir-carrito1").on("click", () =>{
        let prenda8 = { title: "PRENDA: Pantalon ancho",
                        price: 16}
                        carrito.push(prenda8)
                        console.log(carrito)
    })
    $(".btn").on("click", () => {
        let suma=0
        for( let i=0 ; i<carrito.length; i++){
            suma += carrito[i].price
            $(".modal-body").append(`<li>${carrito[i].title} :    ${carrito[i].price} €</li>`)
            $(".total").html(`TOTAL COMPRA = ${suma} €`)
        }
    })
    
    
})


