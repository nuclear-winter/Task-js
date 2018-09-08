function sumEven () {
    var quantity = 0;
    var sum = 0;

    for(var i = 0; i <= 99; i++) {
        if ( i % 2 == 0) {
            sum += i;
            quantity += 1;
        }
    }

    console.log("The sum of even numbers in the range from 1 to 99 is "+ sum +", and their number is - "+ quantity +"!");
};

sumEven();
