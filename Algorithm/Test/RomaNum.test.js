import RomaNum from '../Code/Array/RomaNum.js'

test('RomaNum:', () => {
  expect(RomaNum("III")).toEqual(3);
  expect(RomaNum("IV")).toEqual(4);
  expect(RomaNum("IX")).toEqual(9);
  expect(RomaNum("LVIII")).toEqual(58);
  expect(RomaNum("MCMXCIV")).toEqual(3);
})