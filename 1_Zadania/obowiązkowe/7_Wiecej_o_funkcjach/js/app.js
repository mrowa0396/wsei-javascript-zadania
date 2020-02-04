**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


// tworze funkcje o nazwie jeden 
function jeden() {

    // tworze zmienną o wartosci 1 w local scopie, czyli zmienna nie moze wyjsc poza funkcje jeden
    var zmienna1 = 1;

    // tworze zmienna dwa, jest skladowa funkci jeden wiec  moge w niej skorzystac z funkcji zmienna1
    function dwa() {

        // wypisuje w konsoli wartosc zmiennej1
        console.log(zmienna1);

        // tworze zmienna 2 o wartosci 3 w local scopie dla funkcji dwa
        var zmienna2 = 3;
    }

    // wywoluje funkcje dwa
    dwa();

    // VM338:21 Uncaught ReferenceError: zmienna2 is not defined - wywala error poniewaz zmienna2 jest w local scopie dla funkcji dwa. 
// gdyby byla to zmienna w global scopie otrzymalisbysmy wynik.
    console.log(zmienna2)
}

// wywołanie funkcji jeden
    jeden();
