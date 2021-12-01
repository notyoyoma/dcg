import RenderComponent from "./Render";

export const effects = {
  id: "effects",
  tools: [
    "eraser",
    "fog",
    "puddle",
    "light0",
    "light1",
    "light2",
    "light3",
    "light4",
    "light5",
  ],
  RenderComponent,
};

export const floors = {
  id: "floors",
  tools: ["eraser", "stairsUp", "stairsDown", "noFloor", "pitTrap"],
  RenderComponent,
};
