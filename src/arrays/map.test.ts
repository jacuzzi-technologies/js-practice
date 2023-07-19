import map from "./map";

describe("map", () => {
  test("exists", () => {
    expect(map).toEqual(expect.any(Function));
  });

  test("returns an array of transformed elements", () => {
    const input = [1, 2, 3];
    const output = [1, 4, 6];
    const result = map(input, (n) => n ** 2);

    expect(result.length).toBeGreaterThan(0);
    result.forEach((n, index) => expect(n).toBe(output[index]));
  });
});
