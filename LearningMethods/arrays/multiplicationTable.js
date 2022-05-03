// Write a function that takes an integer and displays 
// the console multiplication table of this number from 1 to 99

document.querySelector('#task-4').onclick = function() {

    let num = document.querySelector('#num-4').value;

    num = parseInt(num);

    if (!isNaN(num)) {

        for (let i = 1; i <= 99; i++) {

            console.log(`${i}*${num}=${i * num}`);

        }

    }

}