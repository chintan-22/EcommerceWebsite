const priceValue = document.getElementById('price-value');
const priceSlider = document.getElementById('price-slider');

priceSlider.addEventListener('input', () => {
    const newPrice = priceSlider.value;
    priceValue.innerText = `$${newPrice}`;
});

function bookSlot(slot) {
    if (!slot.classList.contains('booked')) {
        slot.classList.add('booked');
        slot.textContent = 'Booked';
    } else {
        slot.classList.remove('booked');
        slot.textContent = slot.getAttribute('data-time');
    }
}