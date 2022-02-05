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