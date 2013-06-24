// writes the first 100 prime numbers to a file, with each prime separated by a comma.

var fs = require("fs");

//function return a string with prime numbers, where each prime separated by a comma
var primes = function(primeCount) {
		primes = "2";
		count = 1; // 2 is prime
		number = 1;
		do {
			number += 2;
			if (isPrime(number)){
				count++;
				primes += "," + number;
			}
				
		} while (count != primeCount);
		return primes;
	}
	
//function check if the number passing as parameter is a prime number
var isPrime = function(n) {
	if (n == 1)
			return false;
		else if (n < 4)
			return true; // 2 and 3 are prime
		else if ((n % 2) == 0)
			return false;
		else if (n < 9)
			return true; //already excluded 4,6 and 8.
		else if ((n % 3) == 0)
			return false;
		else {
			r = Math.floor(Math.sqrt(n)); // sqrt(n) rounded to the
													  // greatest integer
			f = 5;
			while (f <= r) {
				if ((n % f) == 0)
					return false;
				if ((n % (f + 2)) == 0)
					return false;
				f += 6;
			} 
			return true; // (in all other cases)
		}
		
	}
//get 100 first primes
p = primes(100);
fs.writeFile("./primes.txt", p);
