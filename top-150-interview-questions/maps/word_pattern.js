/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let map = {};
    let words = s.split(' ');
    
    if (words.length !== pattern.length || 
        new Set([...pattern]).size !== new Set(words).size) return false;

    for (let i = 0; i < pattern.length; i++){
        if (!map[pattern[i]]) {
            map[pattern[i]] = words[i];
        } else if (map[pattern[i]] !== words[i]) {
            return false
        }
    }
    return true;
};