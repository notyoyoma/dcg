// doing this to get rid of node crash after tests run
process.on("unhandledRejection", () => {});

import { create } from "vuex-mock-context";
import { Game } from "./src/game/index.js";
import { initializeOrder, logicClasses } from "./src/store/modules.js";
import gameData from "./data/index.js";

global.game = new Game();
initializeOrder.forEach((moduleName) => {
  const vuexMockContext = create();
  const logicClassName =
    moduleName.charAt(0).toUpperCase() + moduleName.slice(1);
  const instance = new logicClasses[logicClassName](
    vuexMockContext,
    moduleName,
    gameData[moduleName]
  );
  game._addModule(moduleName, instance);
});
