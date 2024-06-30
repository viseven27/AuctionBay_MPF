document.addEventListener('DOMContentLoaded', () => {
    const paymentButtons = document.querySelectorAll('.payment-btn');
    const cardNumberDropdown = document.getElementById('card-number');

    const paymentOptions = {
        'credit-debit': ['Visa', 'MasterCard', 'BCA'],
        'bank-transfer': ['BCA', 'Mandiri', 'BRI', 'Danamon'],
        'e-money': ['GoPay', 'OVO', 'Dana']
    };

    function updateCardNumberDropdown(method) {
        cardNumberDropdown.innerHTML = '';
        paymentOptions[method].forEach(option => {
            const opt = document.createElement('option');
            opt.value = option;
            opt.innerHTML = option;
            cardNumberDropdown.appendChild(opt);
        });
    }

    paymentButtons.forEach(button => {
        button.addEventListener('click', () => {
            paymentButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const method = button.getAttribute('data-method');
            updateCardNumberDropdown(method);
        });
    });

    // Initialize dropdown with the default selection
    updateCardNumberDropdown('credit-debit');
});
