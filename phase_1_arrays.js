Array.prototype.uniq = function() {
    let uniqueArray = [];

    for (let i = 0; i < this.length; i++){
        if (uniqueArray.indexOf(this[i]) === -1){
            uniqueArray.push(this[i]);
        }
    }
    return uniqueArray;
};

// var arr = [1,2,3,4,2,3];
// console.log(arr.uniq());

// console.log([1, 1, 2, 2, 3, 3, 4, 4, 5, 5].uniq());

Array.prototype.twoSum = function() {
    let new_array = [];

    for (let i = 0; i < this.length; i++){
        for (let j = 0; j < this.length; j++){
            if (this[i] + this[j] === 0 && j > i){
                new_array.push(i,j);
            }
        }
    }
    return new_array;
};

// var arr = [1,2,3,4,-2,3];
// console.log(arr.twoSum());

Array.prototype.transpose = function () {
    const new_array = Array.from(
        { length: this.length},
        () => Array.from({length: this.length})
    );


    for (let i = 0; i < this.length; i ++){
        for (let j = 0; j < this.length; j ++){
            new_array[j][i] = this[i][j];
        }
    }
    return new_array;
};

var twoDimen = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
console.log(twoDimen.transpose());