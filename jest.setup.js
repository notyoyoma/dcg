// doing this to get rid of node crash after tests run
process.on("unhandledRejection", () => {});

import { create } from "vuex-mock-context";
import gameData from "./data";
import { capitalize } from "@/utils/string";

const GameModule = jest.requireActual("@/game");
const game = new GameModule.Game();
global.game = game;

jest.doMock("@/game", () => {
  return {
    __esModule: true,
    ...GameModule,
    default: global.game,
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
