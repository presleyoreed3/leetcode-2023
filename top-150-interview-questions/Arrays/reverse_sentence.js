/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let reversed = [];
    let words = s.split(' ');
    for (let i = words.length - 1; i >=0; i--){
        if (words[i].length < 1){
            continue;
        }
        reversed.push(words[i]);
    }
    return reversed.join(' ');
};