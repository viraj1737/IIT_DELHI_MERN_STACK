// let varName = 123;

// let arrName = [123, 456, 789, ...]

// let stud1 = "abc"
// let stud2 = "xyz"
// let stud3 = "lkj"

let studentsArray = ["abc","xyz","lkj",123,true,function dummyFunc() {
        console.log("Dummy Function");
    },
    {
        name: "rohan kinnal",
        age: 28
    }
];


// console.log(studentsArray);
// console.log(studentsArray[6 ]);
// console.log(studentsArray.length);


// Java
// String arrName = ["hab", "hah"]



// let newArr = studentsArray;

// studentsArray[2]= 56  (update the data)
// console.log(studentsArray);


// let newArr = studentsArray;
// console.log(newArr);
// newArr[0]= "students"
// console.log(newArr);    both are updating the same array because they have the same memmory location
// console.log(studentsArray);


// console.log(studentsArray.indexOf(123 ));  (index off iske index ka index number bayega ki ye data kon se number pe exist krta hai

// console.log(studentsArray.includes(123));  (ye boolean value deta hai ki ye element array me exist krta hai nhi)

// console.log(studentsArray);
// studentsArray.push("laptop") (.push is use for insert into the last in the array)

// console.log(studentsArray);
// studentsArray.unshift("mobile")    (.unshift use hota hai for add some element in the starting of the array )
// console.log(studentsArray);

// for removing the last element of the array
// console.log(studentsArray);
// studentsArray.pop();
// console.log(studentsArray);



// for adding in the index at 0 in the array
// console.log(studentsArray);
// studentsArray.shift();
// console.log(studentsArray);



// for sorting the element ascending order
// let marks = [98,23,46,78,34,93,72,60]
// console.log(marks);
// // marks.sort();
// // console.log(marks);

//we use slice for take a data in the between of any array with the help of index
// let marks = [98,23,46,78,34,93,72,60]
// console.log(marks);
// let subArrMarks = marks.slice(2,6);
// console.log(subArrMarks );