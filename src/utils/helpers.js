export const integerToBinaryPartials = (num) => {
    if (typeof(num) !== 'number' || num % 1 > 0 || num < 0) throw new Error ('Number must be a positive integer')
    let binaryPartials = []
    let power = 0
    let total = 0
    do {
      let partial = (Math.floor(num/2**power) % 2)
      total += partial * 2**power
      binaryPartials.push(partial.toString())
      power++
    } while (total !== num)
    return binaryPartials
  }