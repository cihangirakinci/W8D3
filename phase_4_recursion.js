function range(start, end){

    if (start === end){
        return [];
    }

    let array = range(start, end - 1);
    array.push(end - 1);
    return array;

}

// console.log(range(3, 10));

function sumRec(array){

   if (array.length === 0){
       return 0;
   }

   return array[0] + sumRec(array.slice(1));
}

// console.log(sumRec([1,2,3,4,5]));


function exponent(base, exp){
    if (exp === 0){
        return 1;
    }

    return base * exponent(base, exp - 1);
}

// console.log(exponent(10, 5));

function fibonacci(num) {
    if (num <= 1) return 1;
  
    return fibonacci(num - 1) + fibonacci(num - 2);
  }

console.log(fibonacci(5));