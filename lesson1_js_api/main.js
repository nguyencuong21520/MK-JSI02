// 1 các kiểu dữ liệu
//     Number : 1,2,3 
//     String : "hello world", ''
//     Boolean : true, false

// 2 loop
//     for(giá trị, điều kiện, step){
//         do something
//     }

//     while(điều kiện){

//     }

// 3 if else

// 4 function

//     function functionName(){

//     }

//     let functionName = ()=>{

//     }


// in ra các số chẵn từ 1 đến n (n là cái ta truyền vào)

// input (7)
// output ("2,4,6")

// input (8)
// output ("2,4,6,8")

// let b1 = (n)=>{
//     var output = ""
//     for(let i=0; i<=n; i++){
//         if(i%2 == 0){
//             output += i
//             if(i <n-1){
//                 output += ","
//             }

//         }
//     }
//     console.log(output);
// }
// b1(8)
// b1(7)



// get api

let getDataAPI = async (city)=>{
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7674da634845e7c2d8c53ab0a48b8e29`

    let preData = await fetch(api) //get data form api
    let data = await preData.json() //lọc ra dữ liệu cần dùng

    renderData(data)
}

let renderData = (data)=>{
    let dom = document.querySelector(".show")
    // let tempK = data.main.temp
    // let tempC = parseInt(tempK - 273)
    let html = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    <h1>${parseInt(data.main.temp - 273)}</h1>
    <hr>
    <p>${data.name}</p>
    <p>${data.weather[0].description}</p>`
    dom.innerHTML = html
}

let form = document.querySelector("#inputCityName")
form.onsubmit = (e)=>{
    e.preventDefault()
    let city = form.city.value
    getDataAPI(city)
}




