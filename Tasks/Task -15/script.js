const arr = [4,8,2,11,6,7,10];
console.log("array:",arr);

//named function 
function findMaximum(arr){
    
    let max = arr[0];
    for (let i = 1; i < arr.length;i++){
        if{
            max = arr[i];
        }
        
    }
    return max;
}

console.log("maximum number:",findMaximum(arr));


