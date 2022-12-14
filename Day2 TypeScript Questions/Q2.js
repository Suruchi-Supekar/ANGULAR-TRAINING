//sorting numbers in an array
var arr = [3, 8, 5, 0, 99];
var mysort = function (arr) {
    var result = arr.sort(function (a, b) { return a - b; });
    console.log(result);
};
// console.log(mysort([3,8,5,0,99]));
mysort(arr);
