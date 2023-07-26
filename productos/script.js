let productosEnCarrito = {};


function mostrarCarrito() {
    const carrito = document.getElementById("carrito");
    if (carrito.style.display === "none") {
        carrito.style.display = "block";
    } else {
        carrito.style.display = "none";
    }
}


function agregarAlCarrito(producto) {
    if (productosEnCarrito[producto]) {
        productosEnCarrito[producto]++;
    } else {
        productosEnCarrito[producto] = 1;
    }
    mostrarProductosEnCarrito();
    calcularTotalCarrito();
}


function eliminarDelCarrito(producto) {
    if (productosEnCarrito[producto] && productosEnCarrito[producto] > 1) {
        productosEnCarrito[producto]--;
    } else {
        delete productosEnCarrito[producto];
    }
    mostrarProductosEnCarrito();
    calcularTotalCarrito();
}


function mostrarProductosEnCarrito() {
    const listaCarrito = document.getElementById("listaCarrito");
    listaCarrito.innerHTML = "";

    for (const producto in productosEnCarrito) {
        const cantidad = productosEnCarrito[producto];
        const li = document.createElement("li");
        const iconoEliminar = document.createElement("i");
        iconoEliminar.className = "fas fa-times";
        iconoEliminar.onclick = function() {
            eliminarDelCarrito(producto);
        };
        li.textContent = `${producto} x${cantidad}`;
        li.appendChild(iconoEliminar);
        listaCarrito.appendChild(li);
    }
}


function calcularTotalCarrito() {
    let total = 0;
    const preciosProductos = {
        "Guitarra electrica Fender Stratocaster": 1499.99,
        "Bateria electronica Roland TD-30KV": 14999.99,
        "Guitarra electrica Gibson SG Standard HC": 1600.00,
        "Teclado Yamaha PSR-E453": 620.00,
        "Teclado Sintentizador Roland FA-06": 1400,
        "Guitarra electrica Fender Telecaster": 1599.99,
        "Bateria electronica Alesis DM10 X Kit": 1920.00
    };

    for (const producto in productosEnCarrito) {
        if (preciosProductos[producto]) {
            total += preciosProductos[producto] * productosEnCarrito[producto];
        }
    }

    const totalCarritoElemento = document.getElementById("totalCarrito");
    totalCarritoElemento.textContent = `Total: $${total.toFixed(2)}`;
    return total;
}


function mostrarFormulario() {
    const formularioOverlay = document.getElementById("formularioOverlay");
    const totalPagarElemento = document.getElementById("totalPagar");
    const total = calcularTotalCarrito();
    totalPagarElemento.textContent = `$${total.toFixed(2)}`;
    formularioOverlay.style.display = "flex";
}


function cerrarFormulario() {
    const formularioOverlay = document.getElementById("formularioOverlay");
    formularioOverlay.style.display = "none";
}




function realizarPago() {
    cerrarFormulario();
    productosEnCarrito = {};
    mostrarProductosEnCarrito();
    const mensajePagoElemento = document.getElementById("mensajePago");
    const diasEntrega = Math.floor(Math.random() * 7) + 1; 
    const diasEntregaElemento = document.getElementById("diasEntrega");
    diasEntregaElemento.textContent = diasEntrega;
    mensajePagoElemento.style.display = "block";
    calcularTotalCarrito();
}

function cerrarMensajePago() {
    const mensajePagoElemento = document.getElementById("mensajePago");
    mensajePagoElemento.style.display = "none";
}



 