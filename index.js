document.addEventListener('DOMContentLoaded', function () {
    generateNumbers();
});

function generateNumbers() {
    const numbersContainer = document.getElementById('numbers-container');
    for (let i = 1; i <= 100; i++) {
        const numberDiv = document.createElement('div');
        numberDiv.classList.add('number');
        numberDiv.innerText = i;
        numbersContainer.appendChild(numberDiv);
    }
}

function chooseRandomNumber() {
    const numbers = document.getElementsByClassName('number');
    const randomIndex = Math.floor(Math.random() * numbers.length);

    // Check if the number is already chosen
    if (!numbers[randomIndex].classList.contains('green')) {
        numbers[randomIndex].classList.add('green');
        document.getElementById('writ').innerHTML=randomIndex+1;
    } else {
        // If the number is already chosen, choose another one
        chooseRandomNumber();
    }
}
