/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let highest = 0;
    let i = 0;
    let j = height.length - 1;
    while (i <= j){
        const length = Math.min(height[i], height[j]);
        const breadth = j - i;
        const area = length * breadth;
        highest = Math.max(highest, area)

        if (height[i] < height[j]) i++;
        else j--;
    }
    return highest;
};