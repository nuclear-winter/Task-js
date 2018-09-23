function reversNum (num) {
    var sum = "";
    
        while(num > 0) {
            sum += num % 10;
            num = parseInt(num/10);
        }
        return Number(sum);
}

console.log(reversNum(123));

console.log(reversNum(777444));

console.log(reversNum(22778800));
