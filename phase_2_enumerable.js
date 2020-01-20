const array = [1, 2, 3, 4, 5];

Array.prototype.myEach = function(func){
    for (let i = 0; i< this.length; i++){
        func(this[i]);
    }
};

// array.myEach((num) => {
//     console.log(`square of ${num} is ${num * num}`);
// });


// array.forEach((num) => {
//   console.log(`square of ${num} is ${num * num}`);
// });

Array.prototype.myMap = function(func){
    let newArray = [];
    this.myEach(element => newArray.push(func(element)));
    return newArray;
};

// array.myMap((num) => {
//     console.log(`square of ${num} is ${num * num}`);
// });



Array.prototype.myReduce = function(func, initialValue){
    let result = initialValue;
    
    this.myEach(element => result = func(result, element));

    return result;
};


// // without initialValue
// [1, 2, 3].myReduce(function(acc, el) {
//     return acc + el;
//   }); // => 6
  
  // with initialValue
  console.log([1, 2, 3].myReduce(function(acc, el) {
    return acc + el;
  }, 25)); // => 31