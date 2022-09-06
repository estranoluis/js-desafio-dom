class producto {
    constructor(id,nombre, descripcion, precio){
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.descripcion = descripcion;
        this.precio = Number(precio);
    }
}
const productos = []
productos.push(new producto(1,"Iphone 13", "256 GB", 1000000))
productos.push(new producto(2,"Samsung Galaxy S22", "128 GB", 800000))
productos.push(new producto(3,"Xiaomi 12", "128 GB", 700000))
productos.push(new producto(4,"Computador Ryzen 7", "HP", 1200000))
productos.push(new producto(5,"Laptop i7", "Asus", 2000000))
productos.push(new producto(6,"Laptop i5", "Acer", 2100000))
productos.push(new producto(7,"Audifonos", "Hyper X", 100000))
productos.push(new producto(8,"Mouse", "Razer", 80000))
productos.push(new producto(9,"Case", "Original", 30000))

// A partir de aqui aplico interacción con el DOM 

let sectionProductos = document.getElementById("section-productos");

function crearCard (producto) {
    let card = document.createElement("div");
    card.setAttribute("class", "card card-producto");
    card.style.width = "18rem";
    sectionProductos.appendChild(card);
    let cardImg = document.createElement("div");
    cardImg.innerHTML = `<img src="./media/${producto.id}.jpg" class="card-img-top" alt="${producto.nombre}"></img>`;
    card.appendChild(cardImg);
    let cardBody = document.createElement("div");
    cardBody.innerHTML = 
            `<h5 class="card-title">${producto.nombre}</ h5>
            <p class="card-text"> ${producto.descripcion}</p>
            <p class="card-text"> Precio: $${producto.precio}</p>
            <button class="btn btn-dark">Comprar</button>`;
    card.appendChild(cardBody);
    cardBody.setAttribute("class", "card-body");
}

for (const items of productos) {
    crearCard(items);
}


