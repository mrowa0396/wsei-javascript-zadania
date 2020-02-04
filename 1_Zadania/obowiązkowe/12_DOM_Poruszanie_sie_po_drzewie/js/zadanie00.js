// Zad 0

    // 0.1
    var first = document.querySelector('.first');
    var firstChild = first.firstElementChild;
    var firstChildThirdChild = first.firstElementChild.children[2];

    //0.2
    var second = document.getElementById('second');
    var secondParent = second.parentElement;
    var secondParentFirthChild = secondParent.children[3];

    // 0.3
    var third = document.querySelector('[data-ex="third"]');
    var finalChildren = third.parentElement.parentElement.lastElementChild.firstElementChild.children;
    
    console.log(
        finalChildren [
            Math.ceil(finalChildren.length / 2) - 1
        ]
     );
    
    // 0.4
    var forth = document.querySelector('.forth');
    var forthChildren = forth.parentElement;
    console.log (
       forthChildren.querySelector('article').querySelectorAll('p')[1]
    );
    
