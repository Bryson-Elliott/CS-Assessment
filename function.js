// Step 3 Write some code

function findLongestWord(str) {
    return Math.max.apply(null, str.split(" ").map(function(word){
        return word.length
    }))
}

// I wanted to try out different lengths of words to see if it would run multiple
// also wanted to see if it would break if given one with same amout of letters

console.log(findLongestWord('The Utah Jazz are a great basketball team'))

console.log(findLongestWord('DJ Norris'))

console.log(findLongestWord('Stuart, the muck duck'))

console.log(findLongestWord('Adam the McRib'))

console.log(findLongestWord('muck duck'))