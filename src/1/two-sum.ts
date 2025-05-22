import { Result } from '../utils/result'

export const twoSum = (nums: number[], target: number) => {
  const map = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]

    if (map.has(complement)) {
      return [map.get(complement), i]
    }
    map.set(nums[i], i)
  }

  return []
}

Result.process({
  tests: [
    {
      result: twoSum([2, 7, 11, 15, 7, 2], 9),
      expected: [0, 1]
    },
    {
      result: twoSum([3, 2, 4], 6),
      expected: [1, 2]
    },
    {
      result: twoSum([3, 3], 6),
      expected: [0, 1]
    }
  ]
})
