document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('shippingForm');
    const calculateBtn = document.getElementById('calculateBtn');
    const result = document.getElementById('result');
    const inputs = form.querySelectorAll('input[required]');

    const checkForm = () => {
        let isFormValid = true;
        inputs.forEach(input => {
            if (input.value.trim() === '') {
                input.classList.add('is-invalid');
                isFormValid = false;
            } else {
                input.classList.remove('is-invalid');
            }
        });
        return isFormValid;
    };

    form.addEventListener('input', function() {
        calculateBtn.disabled = !checkForm();
    });

    calculateBtn.addEventListener('click', function() {
        if (!checkForm()) {
            result.style.display = 'none';
            return;
        }
        // Proceed with calculation if form is valid
        result.style.display = 'none'; // Hide previous results
        calculateBtn.textContent = 'Calculating...';
        setTimeout(() => {
            result.textContent = 'Congratulations you have found the best shipping rates INR 350/-';
            result.style.display = 'block';
            calculateBtn.textContent = 'Calculate';
        }, 1500); // Simulate a network request
    });

    form.addEventListener('reset', function() {
        result.style.display = 'none';
        calculateBtn.disabled = true;
        inputs.forEach(input => input.classList.remove('is-invalid')); // Remove error state on reset
    });
});
