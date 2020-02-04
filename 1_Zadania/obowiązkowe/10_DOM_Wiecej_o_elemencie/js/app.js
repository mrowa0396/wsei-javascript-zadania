document.addEventListener("DOMContentLoaded", function () {
    
    // Zad 0.1
    let list = document.querySelectorAll('.ex5 ul li');

    for (let i = 0; i < list.length; i++) {
        if (i % 2 == 0) {
            list[i].style.backgroundColor = 'green';
        }
        // 0.3
        if (i % 3 == 0) {
            list[i].style.textDecoration = 'underline';
        }
    }

    //0.2
    list[4].classList.add('big');


    // Zad 1
    let chrome = document.querySelector('.chrome');
    let edge = document.querySelector('.edge');
    let firefox = document.querySelector('.firefox');

    edge.style.backgroundImage = "url(assets/img/edge.png)";
    firefox.style.backgroundImage = "url(assets/img/firefox.png)";

    chrome.nextElementSibling.href = "chrome.com";
    firefox.nextElementSibling.href = "firefox.com";
    edge.nextElementSibling.href = "microsoft.com";

    chrome.nextElementSibling.innerHTML = "Chrome";
    firefox.nextElementSibling.innerHTML = "Firefox";
    edge.nextElementSibling.innerHTML = "Edge";

    chrome.style.width = "100px";
    
    // Zad 2
    let name = document.getElementById('name');
    let favColor = document.getElementById('fav_color');
    let favDish = document.getElementById('fav_meal');

    name.innerHTML = 'Krzysik';
    favColor.innerHTML = 'grey';
    favDish.innerHTML = 'dumplings';

    // Zad 3
    let ex3ul = document.querySelector('.ex3 ul');
    ex3ul.classList.add('menu');

    let ex3li = ex3ul.getElementsByTagName('li');
    console.log(ex3li);

    for (let i = 0; i < ex3li.length; i++) {
        ex3li[i].classList.add('menuElement');
    }

    let redElements = document.getElementsByClassName('error');
    for (let i = 0; i < redElements.length; i++) {
        redElements[i].classList.remove('error');
    }

    // Zad 4
    let ex4listItems = document.querySelectorAll('.ex4 ul li');

    for (let i = 0; i < ex4listItems.length; i++) {
        ex4listItems[i].setAttribute('data-id', i+1);

    }

});
