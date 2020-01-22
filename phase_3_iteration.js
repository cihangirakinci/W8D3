function bubbleSort(array){
    let condition = false;
    while (!condition){
       condition = true;
       for (let i = 0; i < array.length - 1; i ++){
            if (array[i] > array [i+1]){
                [array[i], array[i+1]] = [array[i+1], array[i]];
                condition = false;
            }
       } 
    }
    return array;
}

// array = [1,4,5,2,3];
// console.log(bubbleSort(array));

Array.prototype.bubbleSort = function (){
    let condition = false;

    while(!condition){
        condition = true;
        for(let i = 0; i < this.length -1 ; i ++){
            if (this[i] > this [i+1]){
                [this[i], this[i+1]] = [this[i+1], this[i]];
                condition = false;
            }
        }
    }
    return this;
};

// console.log([1,4,5,2,3].bubbleSort());

String.prototype.substrings = function (){

    let array = [];
    for(let start = 0; start < this.length; start ++){
        for(let end = start + 1; end <= this.length; end ++){
            array.push(this.slice(start, end));
        }
    }
    return array;
}
  
console.log("abc".substrings());