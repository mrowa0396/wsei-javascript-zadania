//wywołanie funkcji - działa poprawnie nawet jesli jej definicja znajduje sie nizej w kodzie. Kompilator w pierwszej kolejnosci
//rozpatruje funkcje potem wywolanie
Hello();

function Hello() {
    console.log("Cześć");
}

//wywołanie funkcji - działa poprawnie, funkcja zostala zdefiniowana powyzej
Hello();

Hello2();

var Hello2 = function() {
   console.log("Witaj");
};

Hello2();
