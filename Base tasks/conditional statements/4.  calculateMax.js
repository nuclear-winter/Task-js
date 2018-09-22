function getMax (a, b, c) {
    var max = 0;
    var multiplication = (a * b * c) + 3;
    var addition = (a + b + c) + 3;

    if( multiplication > addition ){
        max = multiplication;
    } else if ( multiplication < addition) {
        max = addition;
    }
    return max;
};

getMax(1, 1, 1);

getMax(6, 0, 13);

getMax(6, 1, 13);
