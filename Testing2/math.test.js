const math=require("./math");

//this is module mocking
jest.mock("./math");

test("multiplication of 2 and 3 is 6", () => {
  math.multiply.mockReturnValueOnce(6);
  expect(math.multiply(2, 3)).toBe(6);
});

test("subtraction of 10 and 4 is 6", () => {
  math.sub.mockReturnValueOnce(6);
  expect(math.sub(10, 4)).toBe(6);
});

test("modulo of 10 % 3 is 1", () => {
  math.modulo.mockReturnValueOnce(1);
  expect(math.modulo(10, 3)).toBe(1);
});