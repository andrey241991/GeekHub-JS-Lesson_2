function getWaterCount (array) {
    let result = 0;
    let current = 0;
    let tempArray = [];
    let slicedArray = [];
    for(let i = 0; i<array.length; i++){
        slicedArray = array.slice(i);
        let isBuggerThenI = slicedArray.some(elem => elem >= array[current]);
        if(isBuggerThenI){
                if(i!== 0 && array[i] >= array[current]){
                    let generalCount = array[current] * tempArray.length;
                    let tempArrayCount = tempArray.reduce((first, next) => first + next);
                    result += generalCount - tempArrayCount;
                    tempArray = [];
                    current = i;
                }else{
                    tempArray.push(array[i]);
                }
        }else{
            current = 0;
            for(let i = current; i < slicedArray.length; i++){
                let biggestNumberIndex = 0;
                let biggestNumber = Math.max(...slicedArray);
                for(let i = 0; i< slicedArray.length; i++){
                    if(slicedArray[i] === biggestNumber){
                        biggestNumberIndex = i;
                        break;
                    }
                    tempArray.push(slicedArray[i]);
                }
                if(tempArray.length === 0){
                    return result;
                }
                let generalCount = biggestNumber * tempArray.length;
                let tempArrayCount = tempArray.reduce((first, next) => first + next);
                result += generalCount - tempArrayCount;
                current = biggestNumberIndex;
                tempArray = [];
                slicedArray = slicedArray.slice(biggestNumberIndex);
            }
        }
    }
}
