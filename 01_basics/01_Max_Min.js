console.log("========= FindMaxNumber And FindMinNumber =========");
const FindMaxNumber = arr => arr.length ? Math.max(...arr) : null;
const FindMinNumber = arr => arr.length ? Math.min(...arr) : null;

console.log("=========MAX NUMBER=========");
console.log(FindMaxNumber([45, 85, 62, 45, 87, 12, 32, 1, 12]));
console.log(FindMaxNumber([45, 45, 45, 45]));
console.log(FindMaxNumber([-78, -20, -12, -1, -2]));
// console.log(FindMaxNumber([1, 5, 4, 3, 5, 5, 4, 5, , 5, 6]));
console.log(FindMaxNumber([]));
console.log("=========MIN NUMBER=========");
console.log(FindMinNumber([45, 85, 62, 45, 87, 12, 32, 1, 12]));
console.log(FindMinNumber([45, 45, 45, 45]));
console.log(FindMinNumber([-78, -20, -12, -1, -2]));
// console.log(FindMinNumber([1, 5, 4, 3, 5, 5, 4, 5, , 5, 6]));
console.log(FindMinNumber([]));








