let n =10;
let sum =0;

for (let i = 1; i<=n; i++){
    sum += i
}

console.log("sum",sum);

// -----------------------------------------------------

let primeNumber = 17;
let isPrime = true;

if (primeNumber <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < primeNumber; i++) {
        if (primeNumber % i === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log(primeNumber, "is prime:", isPrime);