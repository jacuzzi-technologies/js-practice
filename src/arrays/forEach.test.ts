import forEach from "./forEach";

describe("forEach", () => {
  test("handles an empty array", () => {
    let i = 0;

    forEach([], (n) => {
      i += n;
    });

    expect(i).toEqual(0);
  });
});
