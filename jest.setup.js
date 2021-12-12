// doing this to get rid of node crash after tests run
process.on("unhandledRejection", () => {});

import { create } from "vuex-mock-context";
import { initializeOrder } from "./src/store/modules.js";
import logicClasses from "./src/game/modules";
import gameData from "./data";
import { capitalize } from "@/utils/string";

const { Game } = jest.requireActual("@/game/index.js");

global.resetGame = function () {
  const game = new Game();
  initializeOrder.forEach((moduleName) => {
    const vuexMockContext = create();
    const logicClassName = capitalize(moduleName);
    const instance = new logicClasses[logicClassName](
      vuexMockContext,
      moduleName,
      gameData[moduleName]
    );
    game._addModule(moduleName, instance);
  });
  global.game = game;
};

resetGame();

jest.setMock("@/game", {
  __esModule: true,
  default: global.game,
  Game,
});
