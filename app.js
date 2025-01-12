const carrito = document.getElementById("carrito");
const template = document.getElementById("template");
const fragment = document.createDocumentFragment();
const btnesBotones = document.querySelectorAll(".card .btn");

const carritoObjeto = {};

const agregarAlCarrito = (e) => {
    console.log(e.target.dataset.fruta);
}

btnesBotones.forEach(btn => btn.addEventListener('click', agregarAlCarrito));