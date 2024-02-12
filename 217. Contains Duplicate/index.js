/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const dict = {};

  for (let i = 0; i < nums.length; i++) {
    if (dict[nums[i]]) {
      return true;
    } else {
      dict[nums[i]] = true;
    }
  }

  return false;
};
