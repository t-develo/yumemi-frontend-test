import { hello } from "..";

test("test", () => {
    expect(hello("world")).toBe("Hello world");
});
