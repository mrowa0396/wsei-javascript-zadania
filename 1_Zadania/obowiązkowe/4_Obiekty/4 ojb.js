//Zad1


var book = {
    title: "Lalka",
    author: "Bolek Prus",
    numberOfPages: 377
}
console.log(book.title);
console.log(book.author);
console.log(book.titlenumberOfPages);
}

//zad2

var person = {
    name = "Janusz",
    age = 25,
    sayHello: function(){
        console.log("Hello");
    }


}

console.log(person.name);
console.log(person.age);
person.sayHello();



//zad3

var cookbook = {
    title: "Gordon Ramsey",
    servings: 20
}

cookbook.ingredients = ["Sugar", "Chleb", "Woda"];
console.log(coookbook.title);
console.log(cookbook.servings);
console.log(cookbook.ingredients);


//zad4
var movie = {
    director: "Peter Jackson",
    writers: [" J.R.R. Tolkien ", "Fran Walsh", "Philippa Boyens", "Peter Jackson"],
    stars: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
    country: "New Zealand | USA",
    budget: "$93,000,000",
    imdbPoints: 8.8,
    year: 2001,
    time: "2h 58 min",
    category: " Adventure, Drama, Fantasy"
}

for (let i in movie){
    console.log(movie[i]);
}


//zad5

var animals = [
    {
        type: "cat",
        breed: "persian",
        name: "Tiberius",
        health: [
            {
                date: "2012-03-03",
                visitType: "grafting"
            },
            {
                date: "2015-06-23",
                visitType: "bowel surgery"
            }
        ]
    },
    {
        type: "Guinea pig",
        breed: "The Rex",
        name: "Marko",
        health: [
            {
                date: "2015-12-04",
                visitType: "grafting"
            },
            {
                date: "2016-03-15",
                visitType: "ear cleaning"
            }
        ]
    }

]

for(i=0;i<animals.length; i++){
 for(let j in animals[i]){
     console.log(animals[i][j])
 }
}

//zad6

var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

console.log(spoon.isexist); //wychodzi isExist: false

