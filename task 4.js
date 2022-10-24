// Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. 
// Реализуйте его на прототипах.

// Определите иерархию электроприборов. Включите некоторые в розетку. 
// Посчитайте потребляемую мощность (передайте аргумент). 

// Таких приборов должно быть как минимум два (например, настольная лампа и компьютер).
// Выбрав прибор, подумайте, какими свойствами он обладает.

// Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
// Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
// Создайте экземпляры каждого прибора.

// создаем прототип
function ElectricalAppliances (name, power) {
    this.name = name,
    this.power = power,
    this.connect = false;
  }
  // создаем метод прототипа
   ElectricalAppliances.prototype.connected = function() {
      console.log(`${this.name} подключен в сеть`);
      this.connect = true;
   }
    ElectricalAppliances.prototype.unconnected = function () {
      console.log(`${this.name} выключен от сети`);
      this.connect = false;
  };
   function MicrowaveOven (name, power, location) {
      this.name = name,
      this.power = power,
      this.location = location,  
      this.connect = true
   }
   MicrowaveOven.prototype = new ElectricalAppliances();
   const microwave = new MicrowaveOven("Microwave oven", 800, "kitchen");
   microwave.unconnected();
  
  function StationaryComputer (name, power, location, model) {
      this.name = name,
      this.power = power,
      this.location = location, 
      this.model = model,
      this.connect = true
   }
   StationaryComputer.prototype = new ElectricalAppliances();
   const computer = new StationaryComputer("Stationary computer", 100, "room", "SAMSUNG")
   computer.connected();
  
  console.log(microwave);
  console.log(computer)