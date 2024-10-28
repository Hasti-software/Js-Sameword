var userword = prompt('Enter the word : ')

var wordarray = userword.split('')
var wordreverse = wordarray.reverse()
var wooooordre = wordreverse.join('')

console.log(wordarray)
console.log(wordreverse)
console.log(wooooordre)

if (userword == wooooordre) {
    alert('The word are read in the same way from each side')
} else {
    alert('The word are not read in the same way from each side')
}