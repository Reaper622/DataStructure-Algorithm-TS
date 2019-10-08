import RemoveDuplicates from '../Code/Array/数组去重/RemoveDuplicates.js'

test('RemoveDuplicates: ', () => {
  expect(RemoveDuplicates([1,1,2])).toBe(2);
  expect(RemoveDuplicates([0,0,1,1,1,2,2,3,3,4])).toBe(5);
})