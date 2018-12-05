/**
 * @param {string}  word    Word to Scramble
 * @return {string}         Word Scrambled
 */
function scrambleWord(word) {
    //Using a modern version Fisher-Yates Shuffle known as the Knuth Shuffle.
    //We are only shuffling letters at position 1 to n-2. (For String 0...n-1 (n = length))
    let n = word.length;
    var wordAsArray = word.split('');
    for(let i = 1; i < n-2; i++) {
        j = getRandomInteger(n-2, 1);
        swap(i, j, wordAsArray);
    }
    return wordAsArray.join('')
 }
 
/**
 * @param {string}  text    Text to Scramble
 * @return {string}         Text Scrambled
 */
function scrambleText(text) {
    //Can't scramble words of length 3 or less.
    //Only scramble words with Alphabetical letters.
    //Don't scramble urls or emails
    //Regex is used to check
    words = text.split(' ');
    const wordRegexPattern = /[A-z][A-z]+[A-z]/g;
    const urlRegexPattern = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm
    const emailRegexPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    for(let i = 0; i < words.length; i++) {
        if(words[i].match(wordRegexPattern) && !words[i].match(urlRegexPattern) && !words[i].match(emailRegexPattern)) {
            words[i] = scrambleWord(words[i]);
        }
    }
    return words.join(' ');
}

 //////////////////
 //Helper Methods//
 //////////////////

 /**
 * @param {number} max      Max Value for Integer.
 * @param {number} shift    Value for Integer.
 * @return {number}         Integer between 0 and max plus shift
 */
function getRandomInteger(max, shift) {
    return Math.floor(Math.random() * Math.floor(max)) + shift;
}

 /**
 * @param {number}  p1      Position 1
 * @param {number}  p2      Position 2
 * @param {array}   array   Array to do Swap
 */
function swap(p1, p2, array) {
    var temp = array[p1];
    array[p1] = array[p2];
    array[p2] = temp;
}
