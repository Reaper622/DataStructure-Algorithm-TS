import NumReverse from '../Code/Array/整数反转/NumReverse.js'

test('NumReverse:', () => {
  expect(NumReverse(123)).toBe(321);
  expect(NumReverse(-123)).toBe(-321);
  expect(NumReverse(120)).toBe(21);
})