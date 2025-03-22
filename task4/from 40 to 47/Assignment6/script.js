let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = []; //fxy
allArrs.unshift(arr2[2]);
allArrs.push(arr1.pop());
allArrs.push(arr2.pop());
console.log(allArrs.join("").toLowerCase())