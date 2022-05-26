// doing this to get rid of node crash after tests run
process.on("unhandledRejection", () => {});

jest.mock("@/game/events");

import { create } from "vuex-mock-context";
import gameData from "./data";
import game from "@/game";
import * as modules from "@/game/modules";

Object.keys(modules).forEach((key) => {
  const module = modules[key];
  module.data = gameData[key];
  module.context = create();
});

game.addModules(modules);
global.game = game;

// jest.setMock("@/game", game);
// jest.doMock("@/game/modules", modules);
