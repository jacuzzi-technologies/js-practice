import forEach from "./forEach";

describe("forEach", () => {
  test('handles an empty array', () => {
    let i = 0;

    forEach([], n => {
      i += n;
    });

    expect(i).toEqual(0);
  });

  test('iterates over every element in the input array', () => {
    let i = 0;

    forEach([2, 2, 2, 2], n => {
      i += n;
    });

    expect(i).toEqual(8);
  });
});
