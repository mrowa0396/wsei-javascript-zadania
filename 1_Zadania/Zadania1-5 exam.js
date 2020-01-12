//1
document.addEventListener('DOMContetLoaded', () => {
    function getSqrt(n) {
        return Math.sqrt();
    }
    getSqrt(2);
    getSqrt(5);


});




//2

document.addEventListener('DOMContetLoaded', () => {
    function concatArray(array1, array2) {
        return array1.Concat(array2);
    }
    concatArray([1, 2], [3, 4])
});


//3 

document.addEventListener('DOMContentLoaded', () => {
    function biggestSumOfTwoElements(array) {




    }



})



//4a

const sampl = document.querySelectorAll('.sample_class');

function getTagsOfElements(elements) {

    const sampleTagsArray = [];
    for (i = 0; i < elements.lenght; i++) {
        sampleTagsArray.push(elements[i].tagName)
    }


}
console.log(SampleTagsArray);
return sampleTagsArray;

}

getTagsOfElements(sampl);


//4b

const sampleid = document.querySelectorAll('sample_id').classList;

function getTagsOfIds(elements) {

    const sampleTagsArray = [];
    for (i = 0; i < elements.lenght; i++) {
        sampleTagsArray.push(elements[i])
    }


}
console.log(sampleTagsArray);
return sampleTagsArray;

}

getTagsOfIds(sampleid);

//4c 

const sample_list = document.querySelectorAll('.sample_class_id li');

function getInnerTextsOfElements(elements) {

    const sampleTagsArray = [];
    for (i = 0; i < elements.lenght; i++) {
        sampleTagsArray.push(elements[i])
    }


}
console.log(sampleTagsArray);
return sampleTagsArray;

}

getInnerTextsOfElements(sample_list);


//4d

const IvanGrozny = document.querySelectorAll('a');
function getAddressesOfElements(elements) {

    const sampleTagsArray = [];
    for (i = 0; i < elements.lenght; i++) {
        sampleTagsArray.push(elements[i].href)
    }


}
console.log(sampleTagsArray);
return sampleTagsArray;

}

getAddressesOfElements(IvanGrozny);


//4e 

const dzieci = document.querySelector('.sample_class_3').children;
getTagsOfElements(dzieci);



//5


const allButtons = document.querySelectorAll('button')
const contAiner = document.getElementById('container')
{

    for (i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener('click', function () {
            contAiner.innerHTML = this.dataset.text;
        })
    }

}



