function bubbleSort(inputArr){
    let len=inputArr.length;
    let swapped;
    do{
        swapped=false;
        for(let i=0;i<=len;i++){
            if(inputArr[i]>inputArr[i+1]){
                [inputArr[i],inputArr[i+1]]=[inputArr[i+1],inputArr[i]];
                swapped=true;
            }
        }
        len--;

    }while(swapped);
    return inputArr
}

let number=[12,10,22,30,28,5];
console.log("Array Element:",number);
let sortedArr=bubbleSort(number);
console.log("Array sort using bubble Sort",sortedArr);