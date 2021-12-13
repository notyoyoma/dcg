// doing this to get rid of node crash after tests run
process.on("unhandledRejection", () => {});

import { create } from "vuex-mock-context";
import gameData from "./data";
import { capitalize } from "@/utils/string";

const Game = jest.requireActual("@/game").Game;
const game = new Game();
global.game = game;

jest.doMock("@/game", () => {
  return {
    __esModule: true,
    default: global.game,
    Game,
  };
});

const initializeOrder = require("./src/store/modules.js").initializeOrder;

initializeOrder.forEach((moduleName) => {
  const vuexMockContext = create();
  const logicClasses = require("@/game/modules").default;
  const logicClassName = capitalize(moduleName);
  const instance = new logicClasses[logicClassName](
    vuexMockContext,
    moduleName,
    gameData[moduleName]
  );
  game._addModule(moduleName, instance);
});
