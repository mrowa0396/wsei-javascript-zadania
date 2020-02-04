
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

// tworze funkcje sortArray, ktora nie przyjmuje zadnego parametru
function sortArray() {

    // tworze tablice points z siedmioma liczbami
    var points = [41, 3, 6, 1, 114, 54, 64];

    // tworze funkcje ktora posortuje tablice
    points.sort(function (a, b) {
        // zależne od tego czy wynik jest dodatni, ujemy, zerowy to wartosci są umieszczane na odpowiedniej pozycji
        return a - b;
    });

    // zwracam tablice - juz posortowana
    return points;
}

// wywouje funkcj sortArray
sortArray();
