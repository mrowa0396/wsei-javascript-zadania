// Zad2


document.addEventListener('DOMContentLoaded', function(){

    let button = document.querySelector('#mainBtn');

    console.log(button);

    function Hura (event){
        console.log("Hura! Działa!")
    }
    button.addEventListener('click', Hura);    
});
