// doing this to get rid of node crash after tests run
process.on("unhandledRejection", () => {});

import { create } from "vuex-mock-context";
import gameData from "./data";

const GameModule = jest.requireActual("@/game");
const game = new GameModule.Game(gameData);
global.game = game;

game.modules.forEach((module) => {
  module.context = create();
});

jest.doMock("@/game", () => {
  return {
    __esModule: true,
    ...GameModule,
    default: global.game,
  };
});
