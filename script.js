const input = document.getElementById('phone');
const button = document.querySelector('.format');
let newPhone = document.querySelector('.new-number');

function createPhoneNumber() {
    let inputValue = input.value;

    let firstPart = '';
    let secondPart = '';
    let thirdPart = '';

    for (let i = 0; i < inputValue.length; i++) {
        if (i < 3) {
            firstPart += inputValue[i];
        } else if (i >= 3 && i < 6) {
            secondPart += inputValue[i];
        } else if (i >= 6) {
            thirdPart += inputValue[i];
        }
    }

    newPhone.innerHTML = `New number is: ${firstPart} ${secondPart}-${thirdPart}`;
    input.value = '';
    input.focus();
}

button.addEventListener('click', createPhoneNumber);