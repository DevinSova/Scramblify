function scrambleWord(word) {
    //Using a modern version Fisher-Yates Shuffle known as the Knuth Shuffle.
    //We are only shuffling letters at position 1 to n-2. (For String 0...n-1 (n = length))
    let n = word.length
    var wordAsArray = word.split('')
    for(i = 0; i < n-2; i++) {
        j = getRandomInteger(n, 0)
        swap(i, j, wordAsArray)
        console.log(wordAsArray)
    }
    word = wordAsArray.join('')
    console.log(word)
 }
 
function pickOutWords(text) {
    //Can't scramble words of length 3 or less.
    //Only scramble words with Alphabetical letters.
    //Regex is used to check
    var words = text.split(' ')
    for(word in words) {
        if(word.match(/([A-z]+[A-z][A-z]+)/))
            word = scrambleWord(word)
    }
    console.log(words.join(' '))
    text = words.join(' ')
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

 /**
 * @param {number}  p1      Position 1
 * @param {number}  p2      Position 2
 * @param {array}   array   Array to do Swap
 */
 function swap(p1, p2, array) {
     var temp = array[p1] 
     array[p1] = array[p2]
     array[p2] = temp
 }
