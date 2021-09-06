// Write a function that takes the input sorted array of integers 
// + another desired number. Output: finds an element in the array that 
// is equal to the sought element. If there is such an element
//  - return its index, if the element is not found - return False

function getIndex(testArr, element) {

    return (testArr.indexOf(element) == -1) ? "no such elenent" : testArr.indexOf(element);

}

function getIndex2(testArr, element) {

    for (let i = 0; i < testArr.length; i++) {

        if (testArr[i] == element) return i;

    }

    return "no such elenent";

}

console.log(getIndex([-2, 0, 5, -1, 4, 3, 4], 100));

console.log(getIndex2([-2, 0, 5, -1, 4, 3, 4], 5));