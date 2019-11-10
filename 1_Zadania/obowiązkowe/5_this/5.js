//zad0
var car = {
    brand = "mercedes",
    color = "czarny",
    numberOfKilometers: 0,
    printCarInfo: function(){
        console.log(this.color,this.brand,", ",this.numberofKilometers)
    }

}


car.drive =function(km){
    this.numberOfKilometers = this.numberOfKilometers + km; // this.numberOfKilometers+=km;
}

car.printCarInfo();
car.drive(20);
car.printCarInfo();


//zad1

car.technicalDates = [
    '2019-08-07',
    '2019-09-23',
    '2018-07-13',
    '1990-12-12'
];

car.addTechnical = function(date) {
    this.technicalDates.push(date);
};

car.getTechnicalDates = function(){
    return this.technicalDates;
};

car.addTechnical('2020-10-13');
car.getTechnicalDates();


//zad2


var calculator = {
    save: function (newA, newB) {
        this.a = newA;
        this.b = newB;
    }

};

calculator.save(2, 3);

calculator.sum = function(){     
    return  this.a + this.b;
    };

calculator.multiply = function(){
    this.a + this.b;
    return this.a + this.b;
    };

console.log(calculator.sum());
console.log(calculator.multiply());


//zad3 

var stars = {
step: 0,
up: function() {
    this.step++;
},
down: function() {
    this.step--;
},
printStep: function() {
    console.log(this.step);
}
};

    stars.up();
    stars.down();
    stars.printStep();
