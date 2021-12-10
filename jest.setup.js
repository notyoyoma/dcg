// doing this to get rid of node crash after tests run
process.on("unhandledRejection", () => {});

import { create } from "vuex-mock-context";
import { Game } from "./src/game";
import { initializeOrder } from "./src/store/modules.js";
import logicClasses from "./src/game/modules";
import gameData from "./data";
import { capitalize } from "@/utils/string";

global.resetGame = function () {
  global.game = new Game();
  initializeOrder.forEach((moduleName) => {
    const vuexMockContext = create();
    const logicClassName = capitalize(moduleName);
    const instance = new logicClasses[logicClassName](
      vuexMockContext,
      moduleName,
      gameData[moduleName]
    );
    global.game._addModule(moduleName, instance);
  });
};

resetGame();
