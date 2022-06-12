import { get } from "./object";
import GameModule from "@/game/modules/GameModule";

test("object:get", () => {
  const empty = {};

  expect(get(empty, "missing.path")).toBeUndefined();
  expect(get(empty, ["missing", "path"])).toBeUndefined();

  const depthCheck = { a: { b: { c: 1 } } };
  expect(get(depthCheck, "missing.path")).toBeUndefined();
  expect(get(depthCheck, "a.b.c")).toEqual(1);
  expect(get(depthCheck, ["a", "b", "c"])).toEqual(1);
});

test("object:get<default>", () => {
  const defaultCheck = { a: 1, b: { b: 2 } };
  const fallback = { b: 2 };
  expect(get(defaultCheck, "missing.path", fallback)).toBe(fallback);
  expect(get(defaultCheck, "a", fallback)).toEqual(1);
  expect(get(defaultCheck, "b.b", fallback)).toEqual(2);
});

class TestGameModule extends GameModule {
  a = { b: { c: 1 } };
}
const testGameModule = new TestGameModule();

test("GameModule.get", () => {
  expect(get(testGameModule, "missing.path")).toBeUndefined();
  expect(get(testGameModule, "a.b.c")).toEqual(1);
  expect(get(testGameModule, ["a", "b", "c"])).toEqual(1);
});
