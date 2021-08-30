class Car{
  name;
  speed;
  seats;
  brand;

  // khởi tạo giá trị của class
  constructor(name, speed, seats, brand){
    this.name = name;
    this.speed = speed;
    this.seats = seats;
    this.brand = brand;
  }

  get name_(){
    return this.name;
  }
  set name_(value){
    return this.name = value;
  }
  start(){
    console.log(`${this.name} đã xuất phát, vận tốc là ${this.speed}`);
  }
  stop(){}

  honk(){
    console.log(`Đây là tiếng bô của xe ${this.name}`);
  }
}

// let car1 = new Car("lamborghini Aventador", 200,2, "Lamborghini");
// car1.start();
let car2 = new Car("Fadil", 100,4, "VinFast");
let car3 = new Car("Huracan", 200, 2, "lamborghini")

car2.start()
car3.start()


//tính kế thừa
class SupperCar extends Car{
  // k cần khởi tạo vẫn dùng được
  static limtSpeed(){
    return 120
  }
  constructor(name, speed, seats, brand, topSpeed){
    super(name, speed, seats, brand)
    this.topSpeed = topSpeed
  }
  turboBoost(){
    console.log(`${this.name} đang Boots với top speed là ${this.topSpeed}`);
  }
  honk(){
    super.honk()
    console.log(`Đây là là tiếng siêu xe của hãng ${this.brand}`);
  }

}

let spCar1 = new SupperCar("Ferrari 488", 200, 2,"Ferrari",300)



console.log(spCar1.name);
spCar1.honk()


