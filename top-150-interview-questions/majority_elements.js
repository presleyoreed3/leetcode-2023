/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majority = 0;
    let counts = {};
    for (let i = 0; i < nums.length; i++){
        if (counts[nums[i]]){
            counts[nums[i]] += 1;
        } else {
            counts[nums[i]] = 1;
        }
    }
    for (let key in counts){
        if (counts[key] > nums.length / 2) return key
    }

};