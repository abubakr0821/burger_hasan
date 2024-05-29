document.addEventListener('DOMContentLoaded', () => {
    const orderButtons = document.querySelectorAll('.order-btn');
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalPriceElement = document.querySelector('.total-price');
    let totalPrice = 0;

    orderButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const burger = event.target.getAttribute('data-burger');
            const price = parseFloat(event.target.getAttribute('data-price'));
            totalPrice += price;

            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <p>${burger} - $${price.toFixed(2)}</p>
                <button class="btn btn-danger btn-sm remove-btn">Удалить</button>
            `;
            cartItemsContainer.appendChild(cartItem);

            updateTotalPrice();

            const removeBtn = cartItem.querySelector('.remove-btn');
            removeBtn.addEventListener('click', () => {
                cartItem.remove();
                totalPrice -= price;
                updateTotalPrice();
            });
        });
    });

    function updateTotalPrice() {
        totalPriceElement.textContent = totalPrice.toFixed(2);
    }

    document.getElementById('checkout').addEventListener('click', () => {
        alert('Спасибо за ваш заказ!');
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Ваши данные отправлены!');
        contactForm.reset();
    });
});