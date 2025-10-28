const productos = [
    {
        nombre: 'Nike Air Max Nuaxis',
        descripcion: 'Transpirables y cómodas, los Air Max Nuaxis están preparados para el día a día.',
        precio: 1599,
        imagen: 'nike_1.jpeg'
    },
    {
        nombre: 'Tenis Nike Court Vision Low',
        descripcion: 'Los nuevos tenis Court Vision Low para hombre de la marca Nike logran combinar la esencia del básquetbol retro con la elegancia de un tenis casual.',
        precio: 1799.00,
        imagen: 'nike_2.jpeg'
    },
    {
        nombre: 'Zapatillas Nike Blazer Mid',
        descripcion: 'En los 70, marcaron un estilo. En los 80, también los amaron. En los 90, se convirtieron en un clásico.',
        precio: 1200.00,
        imagen: 'nike_3.jpeg'
    },
    {
        nombre: 'Zapatillas Nike Blazer Mid',
        descripcion: 'En los 70, marcaron un estilo. En los 80, también los amaron. En los 90, se convirtieron en un clásico.',
        precio: 2499,
        imagen: 'nike_4.avif'
    }
];

const catalogo = document.getElementById('catalogo');

function crearTarjetaProducto(producto) {
    const card = document.createElement('div');
    card.className = 'producto-card';

    const imagen = document.createElement('img');
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;

    const titulo = document.createElement('h2');
    titulo.textContent = producto.nombre;

    const descripcion = document.createElement('p');
    descripcion.textContent = producto.descripcion;

    const precio = document.createElement('span');
    precio.className = 'precio';
    precio.textContent = `$${producto.precio.toFixed(2)}`;

    const boton = document.createElement('button');
    boton.className = 'btn-comprar';
    boton.textContent = 'Comprar';

    card.appendChild(imagen);
    card.appendChild(titulo);
    card.appendChild(descripcion);
    card.appendChild(precio);
    card.appendChild(boton);

    return card;
}

function renderizarCatalogo() {
    productos.forEach(producto => {
        const tarjeta = crearTarjetaProducto(producto);
        catalogo.appendChild(tarjeta);
    });
}

window.onload = renderizarCatalogo;