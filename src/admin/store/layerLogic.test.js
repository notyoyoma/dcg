import { wallCoordInteraction } from "./layerLogic";

test("wallCoordInteraction", () => {
  const a = "a";
  const b = "b";
  const c = "c";
  const d = "d";

  const outputs = [
    [b, a, a, a, a, a, a, a, a, a, a, a, a, a, c],
    [b, b, a, a, a, a, a, a, a, a, a, a, a, c, c],
    [b, b, b, a, a, a, a, a, a, a, a, a, c, c, c],
    [b, b, b, b, a, a, a, a, a, a, a, c, c, c, c],
    [b, b, b, b, b, a, a, a, a, a, c, c, c, c, c],
    [b, b, b, b, b, b, a, a, a, c, c, c, c, c, c],
    [b, b, b, b, b, b, b, a, c, c, c, c, c, c, c],
    [b, b, b, b, b, b, b, d, c, c, c, c, c, c, c],
    [b, b, b, b, b, b, d, d, d, c, c, c, c, c, c],
    [b, b, b, b, b, d, d, d, d, d, c, c, c, c, c],
    [b, b, b, b, d, d, d, d, d, d, d, c, c, c, c],
    [b, b, b, d, d, d, d, d, d, d, d, d, c, c, c],
    [b, b, d, d, d, d, d, d, d, d, d, d, d, c, c],
    [b, d, d, d, d, d, d, d, d, d, d, d, d, d, c],
    [d, d, d, d, d, d, d, d, d, d, d, d, d, d, d],
  ];

  outputs.forEach((row, y) => {
    row.forEach((triangle, x) => {
      const result = wallCoordInteraction(x, y);
      const inputStr = `${x},${y} => `;
      expect(inputStr + JSON.stringify(result)).toEqual(
        inputStr +
          JSON.stringify({
            triangle,
            xM: x,
            yM: y,
            xI: 0,
            yI: 0,
          })
      );
    });
  });
});
