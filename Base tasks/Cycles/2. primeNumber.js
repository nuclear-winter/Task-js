function primeNumber (n) {
    if ( n < 2) 
    return false;

    for( var i = 2; i < n; i++) {
        if ( n % i == 0) 
        return false;
    }

    return true;
};

primeNumber(1);

primeNumber(5);

primeNumber(8);

primeNumber(11):
