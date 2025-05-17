console.log("======Remove Dublicate======");

const removeDublicate = arr => arr.length ? [...new Set(arr)] : null;
console.log(removeDublicate([45,45,8,8,45,6,7,45,8,8,8,54,5,45,5]));
