const carrito = document.getElementById("carrito");
const template = document.getElementById("template");
const fragment = document.createDocumentFragment();
const btnesBotones = document.querySelectorAll(".card .btn");

const carritoObjeto = {
    
};

const agregarAlCarrito = (e) => {
    console.log(e.target.dataset.fruta);

    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1
    }

    carritoObjeto[producto.titulo] = producto;

    console.log(carritoObjeto);
};
const pintarCarrito = (producto) => {
    console.log("pintar carrito", producto);
}
btnesBotones.forEach(btn => btn.addEventListener('click', agregarAlCarrito));