const nums = [11, -22, -33, 44, 55, 66, -77, 88, -99];

for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    if (nums[i] > 33) {
        break;
    }
    console.log('Break:', element);
}

for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    if (nums[i] < 0) {
        continue;
    }
    console.log('Continue', element);
}