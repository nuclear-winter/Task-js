function fact (n) {
    if (n < 1) return 1;
    var x = 0;
    for( var i = 1; i <= n; i++) {
        x += n * i;
    }
    return x;
};

console.log(fact(123));

console.log(fact(6));

console.log(fact(17));
