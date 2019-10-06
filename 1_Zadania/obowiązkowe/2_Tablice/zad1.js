//zad 2

function distFromAverage(array){
    var averageSum  = 0;
    for (let i = 0; i < array.length; i++){
        averageSum += array[i];

    }

    var averageValue = averageSum / array.length;
    const outputArray = [];

    for (let i = 0; i < array.length; i++){
        outputArray.push(array[i] - averageValue);
    };

    console.log(outputArray);
    return outputArray;
}
distFromAverage([1,2,3,4,5,6,7]);