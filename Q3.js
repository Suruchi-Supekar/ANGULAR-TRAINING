var str1 = "noon";
var str2 = "hello";
var func1 = function (str) {
    var len = str.length;
    for (var i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
};
console.log(func1(str1));
console.log(func1(str2));
