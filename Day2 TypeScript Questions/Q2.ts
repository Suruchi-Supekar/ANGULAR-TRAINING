//sorting numbers in an array
var arr:number[]=[3,8,5,0,99];
let mysort=(arr:number[])=>{
let result = arr.sort((a, b) => a - b);
console.log(result); 
};
// console.log(mysort([3,8,5,0,99]));
mysort(arr);

