/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let haystackLength = haystack.length;
    let needleLength = needle.length;
    if (haystackLength < needleLength) return -1;

    for (let i = 0; i <= haystackLength - needleLength; i++){
        if (haystack.substr(i, needleLength) === needle) return i;
    }
    return -1
};