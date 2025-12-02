let sum = jest.fn();  // correct way

sum.mockReturnValueOnce(5); //ek baar set karke delete

test("sum of 2 and 3 is 5 (first call)", () => {
  expect(sum(2, 3)).toBe(5);   // first call returns 5
});

test("sum of 10 and 20 is 5 (second call)", () => {
  // sum.mockReturnValue(5);  //hamesha set 
  sum.mockReturnValueOnce(7);
      // now all calls return 5 
  expect(sum(4,3)).toBe(7);
});
