const sum=require("./sum");

test("sum of 2 and 3 is 5",()=>{
  expect(sum(2,3)).toBe(5);
})
test("sum of '2' and 3 should return all argument must be number",()=>{
  expect(sum("2",3)).toBe("all arguments must be number")
})
test("all arguments must be passed",()=>{
  expect(sum(2)).toBe("all arguments must be passed")
})