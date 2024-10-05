const cartItemsList = document.getElementById('cartItemsList');
const totalPriceElement = document.getElementById('totalPrice');

let cart = []; // Store items in the cart

function addToCart(productId, quantity) {
  // Get the product by ID and add to cart array
  const product = products.find(p => p.id === productId);
  if (product) {
    cart.push({ ...product, quantity });
    renderCartItems();
  }
}

function renderCartItems() {
  cartItemsList.innerHTML = ''; // Clear previous items
  let totalPrice = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between';
    li.innerHTML = `
      ${item.name} x${item.quantity} 
      <span>$${item.price * item.quantity}</span>
    `;
    cartItemsList.appendChild(li);
    totalPrice += item.price * item.quantity;
  });

  totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
}

document.querySelectorAll('.btn-cart').forEach(button => {
    button.addEventListener('click', function () {
      const productId = this.dataset.id;
      const quantity = this.parentNode.querySelector('.quantity').value;
      addToCart(productId, quantity);
    });
  });
  