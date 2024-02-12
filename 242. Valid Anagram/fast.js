/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length != t.length) return false;

    const map = new Array(26).fill(0);
    const base = 'a'.charCodeAt(0);

    for (let i = 0; i < s.length; i++) {
        map[s.charCodeAt(i) - base]++;
        map[t.charCodeAt(i) - base]--;
    }

    return map.every(count => count === 0);
};