function scrambleWord(word) {
    //Using a modern version Fisher-Yates Shuffle known as the Knuth Shuffle.
    //We are only shuffling letters at position 1 to n-2. (For String 0...n-1 and n = length)
    let n = word.length
    for(i = 0; i < n-2; i++) {
        j = getRandomInteger(n-1, 0)
        
    }
 }
 
function pickOutWords(text) {
    //Can't scramble words of length 3 or less.
    //Only scramble words with Alphabetical letters.
    //Regex is used to check

    //text.match(/([A-z]+[A-z][A-z]+)/))
    //TODO: Implement
}


 //Helper Methods
 /**
 * @param {number} max      Max Value for Integer.
 * @param {number} shift    Value for Integer.
 * @return {number}         Integer between 0 and max plus shift
 */
 function getRandomInteger(max, shift) {
     return Math.floor(Math.random() * Math.floor(max)) + shift
 }
