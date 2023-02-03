const textArea = document.querySelector('#textarea');
const totalCounter = document.querySelector('#total-counter');
const remaining = document.querySelector('#remaining-counter')
textArea.addEventListener('keyup', () => {
    updateCounter();
});
function updateCounter() {
    totalCounter.innerText = textArea.value.length;
    remaining.innerText = textArea.getAttribute('MaxLength') - textArea.value.length;
}