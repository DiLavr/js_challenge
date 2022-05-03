// BEGIN (write your solution here)
var str = "";

function isPalindromefast(str) {
    var len = Math.floor(str.length / 2);
    for (var i = 0; i < len; i++)
        if (str[i] !== str[str.length - i - 1])
            return false;
    return true;
}

export default isPalindromefast;
// END