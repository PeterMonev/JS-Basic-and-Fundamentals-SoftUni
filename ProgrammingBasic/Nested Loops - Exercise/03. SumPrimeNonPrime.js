function sumPrimeNonPrimeNum(input) {
  let index = 0;
  let command = input[index];
  let primeSum = 0;
  let noPrimeSum = 0;
  let isPrime = true;

  while (command !== "stop") {
    num = Number(input[index++]);
    if (num < 0) {
      console.log("Number is negative.");
      isPrime = false;
    } else {
      isPrime = true;
      for (i = 2; i < num; i++) {
        if (num % i == 0) {
          isPrime = false;
          break;
        }
      }if (isPrime) {
      primeSum += num;
    } else {
      noPrimeSum += num;
    }
    }
    
    command = input[index];
  }
  console.log(`Sum of all prime numbers is: ${primeSum}`);
  console.log(`Sum of all non prime numbers is: ${noPrimeSum}`);
}
//sumPrimeNonPrimeNum(["3","9","0","7","19","4","stop"]);
sumPrimeNonPrimeNum(["30", "83", "33", "-1", "20", "stop"]);
sumPrimeNonPrimeNum(["0", "-9", "0", "stop"]);
