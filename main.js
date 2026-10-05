// Simulador de compra - Pre Entrega 3

// Funcion declarada para pedir datos
function pedirDato(mensaje) {
    return prompt(mensaje);
}

// Funcion expresada para calcular el subtotal
const calcularSubtotal = function(precio, cantidad) {
    return precio * cantidad;
};

// Funcion flecha para mostrar el resultado
const mostrarResultado = (producto, cantidad, subtotal) => {
    alert("Agregaste " + cantidad + " unidades de " + producto + ". Subtotal: $" + subtotal);

    console.log("Producto: " + producto);
    console.log("Cantidad: " + cantidad);
    console.log("Subtotal: $" + subtotal);
};


// Inicio del simulador

const nombre = pedirDato("Ingrese su nombre");

let totalCompra = 0;
let continuar = "SI";

alert("Hola " + nombre + ". Bienvenido al simulador de compra");

while (continuar == "SI") {

    const producto = pedirDato("Ingrese el nombre del producto");

    const precio = parseFloat(pedirDato("Ingrese el precio del producto"));

    const stock = parseInt(pedirDato("Ingrese el stock disponible"));

    const cantidad = parseInt(pedirDato("Ingrese la cantidad que desea comprar"));

    if (cantidad <= 0) {

        alert("La cantidad ingresada no es válida");

    } else if (cantidad <= stock) {

        const subtotal = calcularSubtotal(precio, cantidad);

        totalCompra = totalCompra + subtotal;

        mostrarResultado(producto, cantidad, subtotal);

    } else {

        alert("No hay suficiente stock de " + producto);

        console.log("Stock disponible: " + stock);
    }

    continuar = pedirDato("¿Desea agregar otro producto? Escriba SI o NO");
}

alert("Compra finalizada. Total: $" + totalCompra);

console.log("Cliente: " + nombre);
console.log("Total de la compra: $" + totalCompra);