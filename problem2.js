/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let a = 0;
  for (let index = 0; index < nums.length; index++) {
    for (let i = 0; i < nums.length; i++) {
      if (i !== index && nums[i] + nums[index] == target) {
        console.log(index, i);
        return [index, i];
      }
    }
  }
};
twoSum([3, 2, 4], 6);
