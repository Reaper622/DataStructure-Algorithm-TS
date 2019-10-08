import CardsInGroup from '.CardsInGroup.js'


test('gcd', () => {
  expect(CardsInGroup([1,2,3,4,4,3,2,1])).toBe(true);
  expect(CardsInGroup([1,1,1,2,2,2,3,3])).toBe(false);
  expect(CardsInGroup([1])).toBe(false);
  expect(CardsInGroup([1,1])).toBe(true);
})