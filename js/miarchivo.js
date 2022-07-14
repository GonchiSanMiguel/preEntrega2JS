
const pizzas = [
    {
        nombre:"Muzzarella",
        precio:"1000",
    },
    {
        nombre:"Napolitana",
        precio:"1200",
    },
    {
        nombre:"Provolone",
        precio:"1500",
    },
    {
        nombre:"Anchoas",
        precio:"1300",
    }
]

localStorage.clear();

const productos = document.getElementById("productos");

pizzas.forEach( (pizza) => {
    const div = document.createElement("div");
    const h5 = document.createElement("h5");
    h5.innerHTML = `${pizza.nombre}`;
    const p = document.createElement("p");
    p.innerHTML = `$${pizza.precio}`;
    const boton = document.createElement("button");
    boton.innerText = "Agregar al carrito";
    boton.addEventListener("click", () => {
            let carrito = [];
            const carritoJson = localStorage.getItem("carrito");
            if(carritoJson) {
                carrito = JSON.parse(carritoJson);
            }
            carrito.push(pizza);
            localStorage.setItem("carrito", JSON.stringify(carrito));
        }   
    );

    div.append(h5, p, boton);

    productos.append(div);

    div.className = "contenedor";
});




