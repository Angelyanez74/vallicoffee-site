// Cambio de idioma
const languageSelect = document.getElementById('language');
languageSelect.addEventListener('change', () => {
  const lang = languageSelect.value;
  document.querySelectorAll('.lang').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
});

// Carrito
let cart = [];
function addToCart(name, price) {
  cart.push({name, price});
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById('cart-items');
  const totalEl = document.getElementById('total');
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    const div = document.createElement('div');
    div.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(div);
  });
  totalEl.textContent = total.toFixed(2);
}

document.getElementById('checkout-btn').addEventListener('click', () => {
  // Aquí redirige a tu página de pago real (Stripe o PayPal)
  alert('Redirigiendo al pago…');
});