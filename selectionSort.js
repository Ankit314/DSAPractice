const selectionSort=(arr)=>{
    let n=arr.length;
    for(let i=0;i<n-1;i++){
        let minIndex=i;
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j;
            }


        }
        if(minIndex!==i){
            [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]];

        }
    }
    return arr;
}

let number=[10,12,9,7,6];
console.log("Actual Array:",number)
let sortedArray=selectionSort(number);
console.log("using selection sort:",sortedArray)