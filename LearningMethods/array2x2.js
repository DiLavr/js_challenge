// Write a function that takes an array of integers and doubles each even i element inside the array
function array2x2(arr) {

    return arr.map((element, i) => {

        return (i % 2 == 0) ? element * 2 : element;

    });

}

console.log("Origional Array: 2, 0, 5, -1, 4, 3, 4");
console.log(array2x2([2, 0, 5, -1, 4, 3, 4, 5, 5, 5]));