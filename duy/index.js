// CRUD - Array

//create
// let arrFruits = ["táo", "chuối", "cam"]

// //read
// console.log(arrFruits);
// console.log(arrFruits[0]);

// //update
// arrFruits[1] = "Bưởi"

// arrFruits.push("quýt")
// arrFruits.unshift("kiwi")

// //delete
// // arrFruits.pop()
// // arrFruits.shift()

// // arrFruits.splice(1,1)

// console.log(arrFruits);

// //bonus
// console.log(arrFruits.length);

// console.log(arrFruits[arrFruits.length-1]); //lấy ra item ở vị trí cuối cùng

// let pos = arrFruits.indexOf("cam")
// arrFruits.splice(pos,1)

//If - else

// if(condition){
//     //do something
// }else{
//     //do something
// }

// if(6>5){
//     console.log("true");
// }else{
//     console.log("false");
// }

// let arr = [2,8,9,7,6,3,1,4,89,20]

// // B1: duyệt từng phần tử trong mảng với loop
// // B2: nếu phần tử đó chia hết cho 2 => console.log phần tử đó ra

// for(let i = 0; i < arr.length ; i++){

//     if(arr[i]%2 == 0){
//         console.log(arr[i]);
//     }
// }

for(let i = 0; i<51; i++){
    if(i%2 == 0){
        console.log("số chia hết cho 2 là:" + i);
    }
}



function buoiSang(thu, gioThucDay){
    console.log("đây là sáng thứ " + thu);
    console.log("giờ thức dậy là: " + gioThucDay);
    console.log("đánh răng");
    console.log("ăn sáng");
    console.log("đi học")
}


