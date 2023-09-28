/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let isValid = true;
    let letters = s.toLowerCase().replace(/[^0-9a-z]/g, "");
    let i = 0;
    let j = letters.length - 1;
    while (i < j){
        if (letters[i] !== letters[j]){
            return false;
        }
        i++;
        j--;
    }
    return isValid;
};