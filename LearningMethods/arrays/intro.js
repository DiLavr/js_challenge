//alert("Hello World this is Java");

var str = "abcdcba";

function isPalindrome(str) {
    var len = Math.floor(str.length / 2);
    for (var i = 0; i < len; i++)
        if (str[i] !== str[str.length - i - 1])
            return false;
    return true;
}
alert(isPalindrome(str));