function sumPositive (a, b, c) {
    var sum = 0;
    if (a > 0) {
        sum += a;
    }
    if(b > 0) {
        sum += b;
    }
    if(c > 0) {
        sum += c;
    }
    return sum;
};

sumPositive(-1, 3, 0);

sumPositive(4, 2, 12);

sumPositive(33, 0, 16);
