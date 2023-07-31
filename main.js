//opcion1
function productosDisponibles(productos){
    let cantidadProductos = parseInt(prompt('Ingrese la cantidad de Productos que desea agregar:'));
    for (let i = 3; i < (cantidadProductos + 3); i++) {
        let id = i + 1
        let nombre = prompt("Ingrese el nombre del producto " + (i + 1) + ':');
        let precio = parseInt(prompt("Ingrese el precio del producto " + (i + 1) + ':'));
        let nuevoProducto = {
            id: id,
            nombre: nombre,
            precio: precio
        };
        productos.push(nuevoProducto);
    }
    console.log(productos)
    return productos
}
//opcion2
function mostrarStock(productos){
    console.log("-------------------------------------------")
    for (const producto of productos){
        console.log("ID: " + producto.id + "- Nombre: " + producto.nombre + "- Precio: $" + producto.precio + "\n")
    }
}
//opcion3
function agregarAlCarrito(productos, carrito){
    const idProducto = parseInt(prompt("Ingrese el ID del producto que desea agregar al carrito: "))
    const encontrado = productos.includes(productos[idProducto - 1])
    if (encontrado){
        carrito.push(productos[idProducto - 1])
    } else{
        console.log("ID invalido")
    }
    carrito.sort(function(a, b){return a.id - b.id})
}
//opcion4
function mostrarCarrito(carrito){
    console.log("-------------------------------------------")
    for (const producto of carrito){
        console.log("ID: " + producto.id + "- Nombre: " + producto.nombre + "- Precio: $" + producto.precio + "\n")
    }
    let total = 0
    for (const i of carrito){
        total += i.precio
    }
    console.log("El total a pagar es de: $" + total)
}
//opcion5
function eliminarDeCarrito(carrito){
    const idProducto = parseInt(prompt("Ingrese el ID del producto que desea eliminar del carrito: "))
    const encontrado = carrito.findIndex(producto => producto.id === idProducto);
    if (encontrado !== -1){
        carrito.splice(encontrado, 1);
    } else{
        console.log("ID invalido");
    }
}






let carrito = [];
let productos = [{id: 1, nombre: 'pantalon', precio: 15000},{id: 2, nombre: 'campera', precio: 20000},{id: 3, nombre: 'medias', precio: 1500}];
let opcion = 0;

while (opcion !== -1) {
    opcion = parseInt(prompt(
        'Menú de opciones:\n' +
        "1. Agregar productos disponibles para comprar\n" +
        '2. Mostrar Stock\n' +
        '3. Agregar a Carrito\n' +
        '4. Mostrar Carrito\n' +
        '5. Eliminar de Carrito\n' +
        '6. Salir'
    ));

    switch (opcion) {
        case 1:
            productos = productosDisponibles(productos);
            break;
        case 2:
            mostrarStock(productos)
            break;
        case 3:
            agregarAlCarrito(productos, carrito)
            break;
        case 4:
            mostrarCarrito(carrito)
            break;
        case 5:
            eliminarDeCarrito(carrito)
            break;
        case 6:
            console.log('Saliendo del menú...');
            opcion = -1
            break; // Sale del bucle y finaliza el programa
        default:
            console.log('Opción inválida, intenta de nuevo.');
            break;
    }
}
