function getEvenAvarag(array){
    const evenNumbers = [];

    for (let i=0;i<array.length;i++){
        const element = array[i];
        if(element%2 === 0){
            evenNumbers.push(element);


        }


    }
    let sum = 0;

    for(let i = 0; i<evenNumbers.length;i++){
        sum+=evenNumbers[i]
    }

    if(evenNumbers.length === 0){
        return null;
    } else {
        return sum/evenNumbers.length;
    }
}

getEvenAvarag([1,2,3,4,5,6,7])