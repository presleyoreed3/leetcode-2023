/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false

    const map1 = [];
    const map2 = [];

    for (let i = 0; i < s.length; i++){
        map1.push(s.indexOf(s[i]));
        map2.push(t.indexOf(t[i]));
        if (map1[i] != map2[i]) return false;
    }
    return true;
};