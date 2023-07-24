// The Factorial of a positive integer, n, is defined as the product of the sequence n, n-1, n-2, ...1 and the factorial of zero, 0, is defined as being 1.
function Factorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * Factorial(n - 1)
    }
}

// Time Complexity: O(n)
// Space Complexity: O(n)

console.log(Factorial(5))
console.log(Factorial(0))

// The Fibonacci sequence is a series of numbers where a number is the addition of the last two numbers, starting with 0, and 1.
function Fibonacci(n) {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1
    } else {
        return Fibonacci(n - 1) + Fibonacci(n - 2)
    }
}

// Time Complexity: O(2^n)
// Space Complexity: O(n)

console.log(Fibonacci(5))
console.log(Fibonacci(0))

function isPrime(n) {
    if (n == 1) {
        return false;
    } else if (n == 2) {
        return true
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                return false
            }
        }
        return true
    }
}

// Time Complexity: O(n)
// Space Complexity: O(1)

console.log(isPrime(5))
console.log(isPrime(0))

function isPalindrome(str) {
    let reversed = str.split('').reverse().join('')
    if (str == reversed) {
        return true
    } else {
        return false
    }
}

// Time Complexity: O(n)
// Space Complexity: O(n)

console.log(isPalindrome('racecar'))
console.log(isPalindrome('hello'))

function isAnagram(str1, str2) {
    let sorted1 = str1.split('').sort().join('')
    let sorted2 = str2.split('').sort().join('')
    if (sorted1 == sorted2) {
        return true
    } else {
        return false
    }
}

// Time Complexity: O(n)
// Space Complexity: O(n)

console.log(isAnagram('hello', 'olleh'))
console.log(isAnagram('hello', 'hello'))

function collatzConjecture(n) {
    let count = 0
    while (n != 1) {
        if (n % 2 == 0) {
            n = n / 2
            count++
        } else {
            n = 3 * n + 1
            count++
        }
    }
    return count
}

// Time Complexity: O(n)
// Space Complexity: O(1)

console.log(collatzConjecture(5))
console.log(collatzConjecture(0))

// Path: Algorithmic Solving/index.js