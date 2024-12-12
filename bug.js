function foo(x){
  if (x === null || x === undefined){
    return 0; // Handle null or undefined
  }
  return x.length;
}

console.log(foo([1,2,3])); // Output: 3
console.log(foo(null)); // Output: 0
console.log(foo(undefined)); //Output: 0
console.log(foo({})); //Output: undefined; This is the error