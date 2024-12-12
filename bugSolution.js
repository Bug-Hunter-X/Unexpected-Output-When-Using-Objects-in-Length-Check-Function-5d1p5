function foo(x){
  if (x === null || x === undefined){
    return 0; // Handle null or undefined
  } else if (typeof x === 'object' && x !== null && !Array.isArray(x) && !('length' in x)) {
    return 0; // Handle objects without length
  } else if (typeof x === 'object' && x !== null && Array.isArray(x) ) {
      return x.length; // Handle arrays
  }
  else{
    return x.length; // Handle other inputs with length
  }
}

console.log(foo([1,2,3])); // Output: 3
console.log(foo(null)); // Output: 0
console.log(foo(undefined)); //Output: 0
console.log(foo({})); //Output: 0
console.log(foo("hello")); //Output: 5