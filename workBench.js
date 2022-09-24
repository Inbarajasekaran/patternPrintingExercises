// var givenName = "MADAM";
// var getName = "";
// var revName = "";
// var bool = true;

// for (let i = 0; i < givenName.length; i++) {
//     getName = getName + givenName[i]
// }
// for (let i = givenName.length - 1; i >= 0; i--) {
//     revName += givenName[i]
// }

// if (revName == givenName) {
//     console.log("Palindrome")
// } else {
//     console.log("Not a palindrome")
// }

// function palindrome(givenName){
//     for (let i = givenName.length - 1; i >= 0; i--){
//         this.revName += givenName[i]
//     }
//     if (this.revName == this.givenName) {
//         console.log("Palindrome")
//     } else {
//         console.log("Not an palindrome")
//     }
// }
// palindrome(this.givenName)

// var a = 6;
// var b = 6;
// a += b;
// console.log(a)
// console.log(b)

//Loop Types
/*
let SomeArr = [];
for(let i=0;i<10;i++){
    SomeArr[i];
}
for(let arr of SomeArr) {
    arr
}
let obj = { 'id' : 123, 'name' : 'Ram'};
for(let o in obj) {
    obj[o];
}
SomeArr.forEach((element)=>{
    console.log(element);
});
// var obj = {name: "Inba"}
// console.log(obj instanceof Number)
*/

// var obj = new function () {
//     this.name = "Inba"
// }
// var fun = function funct() {
//     this.name = "Inba"
// }
// console.log(typeof (obj))
// console.log(typeof (fun))

// function scopeTest() {
//     let a = 1; //globally
//     var b = 2; {
//         let c = 3;
//         var d = 4; {
//             let e = 5;
//             var f = 6;           
//         }
//     }
//     console.log(d)
// }

// scopeTest()

//  // forLoops

// var loopArray = [1,2,3,4,5]
// var loopObject = {name: 'Inba', age : 21, role: 'Developer'}

// for (let i = 0; i < loopArray.length; i++){
//     console.log(loopArray[i])
// }

// for (let i in loopArray){
//     console.log(loopArray[i])
// }

// for (let ele in loopObject) {
//     console.log(ele + ":" + loopObject[ele])
// }

// loopArray.forEach((element, index, loopArray) => {
//     console.log(element)
// console.log(index)
// });

// Object.keys(loopObject).forEach(ele => {
//     console.log(ele + ":" + loopObject[ele])
// })

// TO SEARCH AND FILTER THE VALUES BY RELATED STRING 
// let request = [
//   { userName: 'Inba', age: 23 },
//   { userName: 'Prem Kumar', age: 32 },
//   { userName: 'Jothiram', age: 29 }
// ];
// let val = 'I';
// let ans = request.filter((ele) =>
//   ele['userName'].toLowerCase().includes(val.toLowerCase())
// );
// this.filterReqArr = ans;
// console.log(this.filterReqArr);

//Remove the duplicate objects in array
// let arr = [{ val: 1, name: 'one' },
// { val: 2, name: 'two' },
// { val: 1, name: 'one' }]
// var a = []
// let ids = arr.map(o => o.val)
// let filtered = arr.filter(({ val }, index) => !ids.includes(val, index + 1))
// a = filtered
// console.log(a)

//Convert array of string into array of objects
//let myArray = ["AA","BB" , "CC"];
//myArray = myArray.map((str, index) =>
//({ value: str, 
//id: index + 1 })
//);
//console.log(myArray)

//CHECK THE KEYS IN NESTED OBJECT BY STRING
// var country = [{ listOfCountries: { id: 1, name: 'India', value: 967784 } }];
// var nm = "name"; 
// //var nm = "value" // //while the value of nm is dynamic or not defined means use line number 144
// country.forEach((el) => {
//   if (el.hasOwnProperty('listOfCountries')) {
//     if (el.listOfCountries.hasOwnProperty('name')) {
// // if (el.listOfCountries.hasOwnProperty(nm)) {
//       console.info('YES');
//     }
// else {
//       console.error("oops")
//     }
//   }
// })
// });


// TRIAL

var musicBox = [1, 2, 3, 4, 5]
let i = 1
for (i = i * 2; i < musicBox.length; i++) {
    console.log(musicBox[i])
}



//CODEWARS

// var bool = false;
// function solution(str, ending) {
//     for (let i = str.length-1; i >= 0; i--){
//         if (ending.substring(ending.length - i) == str.substring(str.length - i)){
//             console.log(ending.substring(ending.length - i));
//             console.log(str.substring(str.length - i))
//         }
//     }
//     // console.log (ending.substring(ending.length - 1))
//     // console.log(str.substring(str.length - 1))
// }
// solution("INBA", "BA")
