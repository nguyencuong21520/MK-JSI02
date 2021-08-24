// let arr = [1,2,3,4,5,6,"h", "9",80,100]

// let result = arr.filter((e)=>{
//     return typeof e == "number"
// })

// let a = result.map(e=>Math.pow(e,2))
// console.log(a);

let string =  "High knowledge high return"
let arrStr = string.split(" ")
let result = ""

for (let i = 0; i < arrStr.length;i++){
    result +=  arrStr[i][0].toUpperCase() + arrStr[i].slice(1) + " "
}
console.log(result);

