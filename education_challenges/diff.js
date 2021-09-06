//START
var a = prompt('A?', '');
var b = prompt('В?', '');

const diff = (a, b) => {
    const angle = Math.abs(a - b);
    return Math.min(angle, 360 - angle);
};
//END
export default diff;

/* Looking for solution */

/*
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}


function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}


function diff(a, b) {
    var result1 = max(a, b) - min(a, b);
    var result2 = Number(min(a, b)) + 360 - Number(max(a, b));
    return min(result1, result2);
}

// END
export default diff;
*/