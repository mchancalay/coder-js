const sumarIva = precio => precio + precio * 0.21;
const precioFinal = (precio, descuento) => sumarIva(precio) - descuento;
const validarIngreso = (pregunta, opcion1, opcion2) => {
    resp = prompt(pregunta)[0].toUpperCase();
    while(!(resp == opcion1 || resp == opcion2)){
        alert("ERROR. Ingresar nuevamente.")
        resp = prompt(pregunta)[0].toUpperCase();
    }
    return resp;
}

let acumulador = 0, cantProductos = 0;
let seguir;

do {
    cantProductos++;
    let precio = parseInt(prompt("Ingrese el precio del producto " + cantProductos + ": "));
    let descuento = prompt("Ingrese el descuento: ");
    acumulador += precioFinal(precio, descuento);
    seguir = validarIngreso("¿Quiere cargar otro producto? S/N",'S','N');
} while (seguir === 'S');

console.log("Ticket\n****************\nCantidad de productos: "+ cantProductos +"\nPrecio final a cobrar: $"+ acumulador);