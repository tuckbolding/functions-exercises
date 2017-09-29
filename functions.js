// TODO: add your solutions here!
// #1
function combineWords (word1, word2) {
        return word1 + word2
}
var result = combineWords('tree','house');
console.log(result);

// #2
function repeatPhrase (phrase, n){
       for(var i = 0; i < n; i++) {
		console.log(phrase);
}

repeatPhrase("wassup",10) ;

// #3
function toTheNthPower(number, power) {
	return Math.pow(number,power)	
}

var result = toTheNthPower(4, 5);
console.log(result);
//  OR
function exponents(a,b) {
	// Multiply number by itself
	// do it a number of times
	// multiply a by itself
	// do it b number of times
	return a**b
}
console.log(exponents(4,5))

// #4
function areaOfACircle(radius) {
	var r = radius * radius;
	var area =3.14167 * (r*);
	return area;
}
areaOfACircle(10);
// displays approximately 314.17

// #5
function pythagoreanTheorem(a,b) {
Math.pow(a,2) + Math.pow(b,2) = c;
c = Math.sqrt(c);
	return c;
}
var result = pythagoreanTheorem(3, 4);
console.log(result);

// #6
function isXEvenlyDivisibleByY(x, y) {
	var result = x % y === 0;
	return result;
}
isXEvenlyDivisibleByY(6,2);

// #7
function countVowels(word) {
	var count = 0;
	word = word.toLowerCase();
	for (var i=0; i < word.length; i++) {
		if( word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' ||  word[i] === 'u' ||  word[i] === 'y'){
			count++;
		}
	}
	return count;
}
countVowels("superfragekaligisticexpealidocious");





