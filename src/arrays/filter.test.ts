import filter from "./filter";

describe("filter", () => {
  test("exists", () => {
    expect(filter).toEqual(expect.any(Function));
  });

  test('filters out truthy elements', () => {
    const input = [1, 2, 3];
    const expected = [2, 3];

    const results = filter(input, n => n > 1);
    results.forEach((result, index) => expect(result).toBe(expected[index]))
  });
});
