/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length != t.length) return false;

    const dict = {};

    for (let i = 0; i < s.length; i++) {
        dict[s[i]] = (dict[s[i]] || 0) + 1;
    }

    for (let i = 0; i < t.length; i++) {
        dict[t[i]] = (dict[t[i]] || 0) - 1;
    }

    return Object.values(dict).every(count => count === 0);
};