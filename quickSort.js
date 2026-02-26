function quickSort(arr){
    if(arr.length<=1){
        return arr;
    };

    const pivot=arr[arr.length-1];
    const left=[];
    const right=[];

    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);

        }
        else{
            right.push(arr[i]);
        }
        
    }
    return [...quickSort(left), pivot,...quickSort(right)];
}


const unsortedArray=[5,3,8,9,2,1,0,2];
console.log("Unsorted Array",unsortedArray);
const sortedArray= quickSort(unsortedArray);
console.log("Sorted Array",sortedArray);