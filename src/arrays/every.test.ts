import every from "./every";

describe("every", () => {
  test("exists", () => {
    expect(every).toEqual(expect.any(Function));
  });
});
