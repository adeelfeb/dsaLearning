

let arr = [2, 1, 5, 1, 3, 2, 8, 8, 4, 5,6,7], k = 3

const maxSubarraySum = (nums: number[], windowSize: number): number=>{
    if(nums.length === windowSize){
        throw new Error("The array should be greater than the window")
    }
    
    let maxSum = 0;
    let windowSum = 0;
    for(let i = 0; i < windowSize; i++){
        windowSum += nums[i]
    }

    maxSum = windowSum
    

    // The section is the heart of the sliding window technique
    for(let i = k; i < nums.length  ; i++){
        windowSum += nums[i] - nums[i-k]
        maxSum = Math.max(windowSum, maxSum)
    }

    return maxSum
}


try {
    let result = maxSubarraySum(arr, k)
    console.log("the resulting substring is:", result)
} catch (error) {
    console.log("error was:", error)
}

// Output: 9  // (5 + 1 + 3)

export{}