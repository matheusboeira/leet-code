import { Result } from '../utils/result'
import { Logger } from '../utils/terminal-colors'

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
  active: 'all',
  callbacks: [
    () => {
      const example1 = twoSum([2, 7, 11, 15, 7, 2], 9)
      Logger.example(example1.join(', '))
    },
    () => {
      const example2 = twoSum([3, 2, 4], 6)
      Logger.example(example2.join(', '))
    },
    () => {
      const example3 = twoSum([3, 3], 6)
      Logger.example(example3.join(', '))
    }
  ]
})
