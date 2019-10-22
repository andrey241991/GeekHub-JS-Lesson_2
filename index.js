function getWaterCount(array) {
    let result = 0;
    let current = 0;
    let tempArray = [];
    for (let i = current; i < array.length; i++) {
        if (i !== 0 && array[i] >= array[current]) {
            let generalCount = array[current] * tempArray.length;
            let tempArrayCount = tempArray.reduce((first, next) => first + next);
            result += generalCount - tempArrayCount;
            tempArray = [];
            array = array.slice(i);
            i = -1;
        } else {
            tempArray.push(array[i]);
        }
    }
    let reversedArray = array.reverse();
    current = 0;
    tempArray = [];
    for (let i = current; i < reversedArray.length; i++) {
        if (i !== 0 && reversedArray[i] >= reversedArray[current]) {
            let generalCount = reversedArray[current] * tempArray.length;
            let tempArrayCount = tempArray.reduce((first, next) => first + next);
            result += generalCount - tempArrayCount;
            tempArray = [];
            reversedArray = reversedArray.slice(i);
            i = -1;
        } else {
            tempArray.push(reversedArray[i]);
        }
    }
    console.log('result', result);
}

// let array = [2,1,5,0,3,4,7,2,3,1];//10
// let array = [2,1,5,0,3,4,7,2,3,1,6,1]; //21
// let array = [2,1,5,0,3,4,7,2,3,1,3]; //12
let array = [7, 0, 2, 8, 3, 4, 7, 2, 4, 8, 0, 11, 0, 0, 0, 3]; //49
getWaterCount(array);
