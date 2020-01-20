const array = [1, 2, 3, 4, 5];

Array.prototype.myEach = function(func){
    for (let i = 0; i< this.length; i++){
        func(this[i]);
    }
};

array.myEach((num) => {
    console.log(`square of ${num} is ${num * num}`);
});


// NUMS.forEach((num) => {
//   console.log(`square of ${num} is ${num * num}`);
// });