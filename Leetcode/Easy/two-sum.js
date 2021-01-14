/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  if( nums.length < 2 || nums.length > Math.pow(10 , 3)){
    return;
  }

  if (target < Math.pow(-10, 9) || target > Math.pow(10, 9)) {
    return;
  }

  for(let i=0;i<nums.length;i++){
    for (let j = i+1; j < nums.length; j++) {
      if(nums[i]+nums[j]===target){
        if (nums[i] < Math.pow(-10, 9) || nums.length > Math.pow(10, 9)) {
          return;
        }

        if (nums.length < 2 || nums.length > Math.pow(10, 3)) {
          return;
        }

        return [i,j];
      }
    }
  }
};
