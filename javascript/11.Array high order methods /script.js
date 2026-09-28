// array methods

// map,filter,find,reduce

const ourArray =  [1,2,3,4,5,6];

// console.log(ourArray);  

// const mapNewArray = ourArray.map((data) => {
//     return data + 50
// })

// const mapNewArray = ourArray.map((data)=> data + 60)
// console.log("1. Map: ",mapNewArray);


// const filterNewArray = ourArray.filter((data => data < 4))
console.log("2. Filter",filterNewArray);
f

const filterNewArray = ourArray.filter((data) => {
    if(data<=5)
        return data
})

console.log("2.filter",filterNewArray);