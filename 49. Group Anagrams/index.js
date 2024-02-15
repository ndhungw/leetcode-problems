/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();

  for (let i = 0; i < strs.length; i++) {
    const sign = strs[i].slice().split("").sort().join("");
    map.set(sign, (map.get(sign) ?? []).concat(strs[i]));
  }

  return Array.from(map.values());
};
