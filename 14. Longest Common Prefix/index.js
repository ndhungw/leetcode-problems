/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  const first = strs[0];
  let res = "";

  for (let i = 0; i < first.length; i++) {
    const ok = strs.every((str) => str[i] === first[i]);

    if (ok) res += first[i];
    else break;
  }

  return res;
};

const testcase = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(testcase));
