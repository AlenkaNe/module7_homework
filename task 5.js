//Переписать консольное приложение из предыдущего юнита на классы.
/*Имена классов, свойств и методов должны быть информативными;
Соблюдать best practices;
Использовать синтаксис ES6*/

class ElectricalAppliances {
  constructor(name, power) {
  this.name = name,
  this.power = power,
  this.connected = false
 } 
 // метод, который определяет прибор как включенный в розетку
  connect() {
    return this.name + " прибор включён!";
    this.connected = true;
  }
 // метод, который определяет прибор как выключеный из розетки
  unconnect() {
    return this.name + " прибор выключен!";
    this.connected = false;
  }
}

 class MicrowaveOven extends ElectricalAppliances {
   constructor(name, power, brand, price) {
     super(name, power) 
     this.brand = brand;
     this.price = price;
     this.connected = true;
  }
 }

 class StationaryComputer extends ElectricalAppliances {
   constructor(name, power, location, model) {
     super(name, power)
     this.location = location, 
     this.model = model,
     this.connect = false
  }
}
let microwaveOven = new MicrowaveOven('MicrowaveOven', 800, 'DARINA', 20000);
let stationaryComputer = new StationaryComputer('StationaryComputer', 200, 'room', 'SAMSUNG-2000');
console.log(microwaveOven)
console.log(microwaveOven.connect())
console.log(stationaryComputer)
console.log(stationaryComputer.unconnect())