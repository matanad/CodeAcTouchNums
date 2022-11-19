
/**
 * Getting a random integer between two values.
 * This function returns a random integer between the specified values. 
 * The value is no lower than min 
 * (or the next integer greater than min if min isn't an integer), 
 * and is less than (but not equal to) max.
 * if inclusice = true is less than and equal to max
 * @param {Number} min 
 * @param {Number} max 
 * @param {Boolean} isInclusive 
 * @returns 
 */
function getRandomInt(min, max, isInclusive = false) {
    const inclusive = isInclusive ? 1 : 0
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + inclusive) + min)
}


function drawNum(nums) {
    var randIdx = getRandomInt(0, nums.length)
    return nums.splice(randIdx, 1)[0]
}