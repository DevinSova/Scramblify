function scrambleWord(word) {
    if(typeof word != 'string')
        return null
    
    //Can't scramble words of length 2 or less.
    if(word.length <= 2)
        return word

    //Using a modern version Fisher-Yates Shuffle known as the Knuth Shuffle.
    //We are only shuffling letters at position 1 to n-1. (For String 0...n)
    //TODO: Implement
}
