/**
 * using the test method
 */

// let myString = "Hello World!";
// let myRegex = /Hello/;
// let result = myRegex.test(myString);
// console.log(result);

/**
 * match literal string with different possibilities
 */

// let petString = "James has  a pet cat.";
// let petRegex = /dog|cat|fish|bird/;
// let result = petRegex.test(petString);
// console.log(result);

/**
 * ignore case while matching
 */

// let myStr = "freeCodeCamp";
// let fccRegex = /freecodecamp/i;
// let result = fccRegex.test(myStr);
// console.log(result);

/**
 * extract matches
 */

// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /coding/;
// let result = extractStr.match(codingRegex);
// console.log(result);

/**
 * find more than the first match
 */

// let testStr = "Repeat, Repeat, Repeat";
// let ourRegex = /Repeat/g;
// let res = testStr.match(ourRegex);

// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /twinkle/gi;
// let result = twinkleStar.match(starRegex);
// console.log(result);
// console.log(typeof starRegex);

/**
 * match anything with wildcard period
 */

// let humStr = "I'll hum a song";
// let hugStr = "Bear hug";
// let huRegex = /hu./;
// console.log(humStr.match(huRegex));
// console.log(hugStr.match(huRegex));

/**
 * match single character with multiple possibilities
 */

// let str = "bag bug lug mug sug blg";
// let strRegex = /b[al]g/g;
// console.log(str.match(strRegex));

/**
 * match letters of the alphabet
 */

// let quote = "The quick brown fox jumps over the lazy dog.";
// let alphaRegex = /[a-z]/gi;
// console.log(quote.match(alphaRegex).length);

/**
 * match numbers and letters of the alphabet
 */

// let quote = "Blueberry 3.141592653 are delicious";
// let myReg = /[2-5b-f]/gi;
// console.log(quote.match(myReg));

/**
 * match single characters not specified
 */

// let quoteSample = "3 blind mice.";
// let myRegex = /[^0-9aeiou]/gi;
// let result = quoteSample.match(myRegex);
// console.log(result);

/**
 * match characters that occur one or more time
 */

// let difficultSpelling = "Mississippi";
// let myRegex = /s+/g;
// let result = difficultSpelling.match(myRegex);
// console.log(result);

/**
 * match characters that occur zero or more times
 */

// let soccerWord = "gooooal!";
// let gPhrase = "gut feelingg";
// let oPhrase = "over the moon";
// let goRegex = /go*/;
// console.log(soccerWord.match(goRegex));
// console.log(gPhrase.match(goRegex));
// console.log(oPhrase.match(goRegex));

/**
 * find characters with lazy matching
 */

// let string = "titanic";
// // greedy match
// let greedyRegex = /t[a-z]*i/;
// console.log(string.match(greedyRegex));
// // lazy match
// let lazyRegex = /t[a-z]*?i/;
// console.log(string.match(lazyRegex));

// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*?>/;
// let result = text.match(myRegex);
// console.log(result);

/**
 * Find one or more criminals in a hunt
 */

// let crowd = "P1P2P3P4P5P6CCCP7P8P9";
// let reCiriminals = /C+/;
// let matchedCriminals = crowd.match(reCiriminals);
// console.log(matchedCriminals);

/**
 * MATCH BEGINNING STRING PATTERNS
 */

// let rickyAndCal = "Cal and Ricky both like racing.";
// let calRegex = /^Cal/;
// let result = calRegex.test(rickyAndCal);
// console.log(result);

/**
 * Match Ending String Patterns
 */

// let caboose = "My name is Anish.";
// let lastRegex = /Anish.$/;
// let result = lastRegex.test(caboose);
// console.log(result);

/**
 * Match all letters and numbers
 */

// let quote = "The quick brown fox jumps over the lazy dog.";
// let alphaRegex = /\w/g; // matches A-Z, a-z, 0-9, _
// console.log(quote.match(alphaRegex).length);

/**
 * Match everything but letters and numbers
 */

// let quote = "The quick brown fox jumps over the lazy dog.";
// let alphaRegex = /\W/g; // matches everything except A-Z, a-z, 0-9, _
// console.log(quote.match(alphaRegex).length);

/**
 * Match all numbers
 */

// let numString = "Your sandwich will be $5.00";
// let numRegex = /\d/g;
// let result = numString.match(numRegex).length;
// console.log(result);

/**
 * Match all non-numbers
 */

// let numString = "Your sandwich will be $5.00";
// let numRegex = /\D/g;
// let result = numString.match(numRegex).length;
// console.log(result);

/**
 * Restrict possible usernames
 *
 * 1) If there are numbers, they must be at the end.
 * 2) Letters can be lowercase and uppercase.
 * 3) At least two characters long. Two-letter names can't have numbers.
 */

// let username = "JackOfAllTrades";
// let userCheck = /^[A-Za-z]{2,}\d*$/;
// let result = userCheck.test(username);
// console.log(result);

// curly brace says the number of times the [A-Za-z] can match. Above it can match from 2 times to infinity times.

/**
 * match whitespace
 */

// let sample = "Whitespace is important in separating words";
// let countWhiteSpace = /\s/g; // \s is used to match white space.
// let result = sample.match(countWhiteSpace);
// console.log(result);

/**
 * match non-whitespace characters
 */

// let sample = "Whitespace is important in separating words";
// let countWhiteSpace = /\S/g;
// let result = sample.match(countWhiteSpace);
// console.log(result);

/**
 * specify upper and lower number of matches
 */

// let ohStr = "Ohhh no";
// let ohRegex = /Oh{3,6} no/;
// let result = ohRegex.test(ohStr);
// console.log(result);

/**
 * Specify only the lower number of matches
 */

// let haStr = "Hazzzzah";
// let haRegex = /z{4,}/;
// let result = haRegex.test(haStr);
// console.log(result);

/**
 * Specify exact number of matches
 */

// let timStr = "Timmmmber";
// let timRegex = /Tim{4}ber/;
// let result = timRegex.test(timStr);
// console.log(result);

/**
 * check for all or none
 */

// let favWord = "favorite";
// let favRegex = /favou?rite/;
// console.log(favRegex.test(favWord));

/**
 * Positive and negative lookahead
 */

// let quit = "qu";
// let noquit = "qt";
// let quRegex = /q(?=u)/;
// let qRegex = /q(?=u)/;
// // console.log(quit.match(quRegex));
// console.log(noquit.match(qRegex));

// let sampleWord = "astronaut";
// let pwRegex = /(?=\w{5})(?=\D*\d{2})/;
// let result = pwRegex.test(sampleWord);
// console.log(result);

/**
 * reuse patterns using capture groups
 */

// let repeatStr = "regex regex";
// let repeatRegex = /(\w+)\s\1/;
// console.log(repeatRegex.test(repeatStr));
// console.log(repeatStr.match(repeatRegex));

// let repeatNum = "42 42 42";
// let reRegex = /^(\d+)\s\1\s\1$/;
// let result = reRegex.test(repeatNum);
// console.log(result);

/**
 * Use Capture Group to Search and Replace
 */
// let wrongText = "The sky is silver";
// let silverRegex = /silver/;
// let newText = wrongText.replace(silverRegex, "blue");
// console.log(newText);

// let text = "Code Camp".replace(/(\w+)\s(\w+)/, "$2 $1");
// console.log(text);

// let huhText = "This sandwich is good.";
// let fixRegex = /good/;
// let replaceText = "okey-dokey";
// let result = huhText.replace(fixRegex, replaceText);
// console.log(result);

/**
 * remove whitespace from start and end
 */

// let hello = "       Hello, World!          ";
// let wsRegex = /^\s+|\s+$/g;
// // let result = hello.replace(wsRegex, "");
// console.log(hello);
// console.log(hello.replace(wsRegex, ""));
