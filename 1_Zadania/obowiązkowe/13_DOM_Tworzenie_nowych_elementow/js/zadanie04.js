//Zad 4

document.addEventListener('DOMContentLoaded', function() {

    var button = document.querySelector(".button");
    var ul = document.querySelector(".list");
    
    button.addEventListener("click", function() {
      if (ul.hasChildNodes()) {
        ul.removeChild(ul.lastElementChild);
        };
    });  
});
