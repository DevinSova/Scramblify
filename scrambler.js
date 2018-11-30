/**
 * @param {string}  word    Word to Scramble
 * @return {string}         Word Scrambled
 */
function scrambleWord(word) {
    //Using a modern version Fisher-Yates Shuffle known as the Knuth Shuffle.
    //We are only shuffling letters at position 1 to n-2. (For String 0...n-1 (n = length))
    let n = word.length
    var wordAsArray = word.split('')
    for(i = 1; i < n-2; i++) {
        j = getRandomInteger(n-2, 1)
        swap(i, j, wordAsArray)
    }
    //console.log(wordAsArray.join(''))
    return wordAsArray.join('')
 }
 
/**
 * @param {string}  text    Text to Scramble
 * @return {string}         Text Scrambled
 */
function scrambleText(text) {
    //Can't scramble words of length 3 or less.
    //Only scramble words with Alphabetical letters.
    //Regex is used to check
    console.log(text)
    words = text.split(' ')
    const regexPattern = /[A-z][A-z]+[A-z]/g
    for(i in words) {
        if(words[i].match(regexPattern))
            words[i] = scrambleWord(words[i])
    }
    console.log(words.join(' '))
    return words.join(' ')
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

 //Main:
 //scrambleText("Hello World I hope this Scrambler works")
 scrambleText("Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.")
 //scrambleWord("this")
 //scrambleWord("hope")