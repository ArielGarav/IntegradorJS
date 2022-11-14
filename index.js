// Contenedor de productos
const products = document.querySelector(".avaliable_container"); //funca

// Contenedor de productos del carrito
const productsCart = document.querySelector(".cart-container"); //funca
//El total en precio del carrito
const total = document.querySelector(".total"); //funca

// El contenedor de las categorías
const categories = document.querySelector(".categories"); //funca

// Un htmlCollection de botones de todas las categorías (mostrar el dataset)
const categoriesList = document.querySelectorAll(".category"); //funca

// Botón de ver más
const btnLoad = document.querySelector(".btn-load"); //funca

// Botón de comprar
const buyBtn = document.querySelector(".btn-buy"); //funca

// Botón para abrir y cerrar carrito
const cartBtn = document.querySelector(".carrito_icon"); //funca

// Carrito
const cartMenu = document.querySelector(".cart"); //funca
//  Modal de agregado al carrito.
const successModal = document.querySelector(".add-modal"); //funca
//  Modal de agregado al carrito.
const deleteBtn = document.querySelector(".btn-delete"); //funca

//Menu Hamburguesa
const iconoMenu = document.querySelector("#icono-menu"),
  menu = document.querySelector("#menu");

iconoMenu.addEventListener("click", (e) => {
  // Alternamos estilos para el menú y body
  menu.classList.toggle("active");
  document.body.classList.toggle("opacity");

  // Alternamos su atributo 'src' para el ícono del menú
  const rutaActual = e.target.getAttribute("src");

  if (rutaActual == "img/open-menu.png") {
    e.target.setAttribute("src", "assets/iconos/menu.png");
  } else {
    e.target.setAttribute("src", "assets/iconos/menu.png");
  }
});

// FIN Menu Hamburguesa

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const saveLocalStorage = (cartList) => {
  localStorage.setItem("cart", JSON.stringify(cartList));
};

const renderProduct = (product) => {
  const { id, nombre, precio, img } = product;
  return ` <div class="card-available">

  <div class="imgBox">
    <img src="${img}" alt="${nombre}" class="zapas">
  </div>

  <div class="contentBox">
    <h3>${nombre}</h3>
    <h2 class="price">${precio} $</h2>
    
    <button class="btn-add" data-id='${id}' data-name='${nombre}' data-bid='${precio}' data-img='${img}'>Add</button> </div>
  </div>

</div>  

  `;
};
const renderDividedProducts = (index = 0) => {
  products.innerHTML += productsController.dividedProducts[index]
    .map(renderProduct) // .map((e) => renderProduct(e))
    .join("");
};

const renderFilteredProducts = (category) => {
  const productsList = shoes.filter((product) => product.category === category);
  products.innerHTML = productsList.map(renderProduct).join("");
};

const renderProducts = (index = 0, category = undefined) => {
  if (!category) {
    renderDividedProducts(index);
    return;
  }
  renderFilteredProducts(category);
};

const init = () => {
  renderProduct();
};
init();
