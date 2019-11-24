let Basket = function(){
this.products = [];
this.sumprice = 0;
}

Basket.prototype.addProduct = function(name, price)
{

    this.products.push({
        name: name,
        price: price});
    }


Basket.prototype.showBasket = function(){
    console.table(this.products);
}

var aliceBasket = new Basket();
aliceBasket.addProduct("pomidor",10);
aliceBasket.addProduct("arbuz",40);
aliceBasket.showBasket();

var bruceBasket = new Basket();
bruceBasket.addProduct("rice", 10);
bruceBasket.addProduct("grzyby mun",50);
bruceBasket.addProduct("tofu",20);
bruceBasket.showBasket();



///zad2

var Robot = function (name) {
    this.name = name;
    this.isFunctional = true;
}

Robot.prototype.sayHi = function (toWho) {
    if (this.isFunctional === true) {
        console.log("Robot " + this.name + " greets " + toWho);
    }
    else {
        console.log("Robot " + this.name + "is broken");
    }
};

Robot.prototype.changeName = function (newname) {
    console.log("Robot " + this.name + "changes name to " + newname);
    this.name = newname;
};

Robot.prototype.fixIt = function () {
    this.isFunctional = true;
    console.log("Robot " + this.name + "was fixed");
};


var Zbyszek1 = new Robot('Janusz ');
Zbyszek1.sayHi('Zbyszek');
Zbyszek1.fixIt(false);
Zbyszek1.changeName('Ivan');
Zbyszek1.sayHi('Zbyszek');



////zad3






var calculator = function (){
    this.memory = [];
    
}

calculator.prototype.add = function(num1, num2) {
    var wynik = num1+num2;
    this.history.push('added ${num1} by ${num2} got ${result}'));
    return wynik;
}

calculator.prototype.multiply = function(num1, num2) { 
    var wynik = num1*num2;
    this.history.push('multiplied ${num1} by ${num2} got ${result}');
    return wynik;
}

calculator.prototype.divide = function(num1, num2) { 
    var wynik = num1/num2;
    this.history.push('divided ${num1} by ${num2} got ${result}');
    return wynik;
}
calculator.prototype.substraction = function(num1, num2) { 
    var wynik = num1-num2;
    this.history.push('substracted ${num2} from ${num1} got ${result}'));
    return wynik;
}

calculator.prototype.printOperations() = function(num1,num2) {
    console.table(this.history);
}

calculator.prototype.clearoperations() = function(num1,num2){
    this.history = [];
}
