const modules = jest.requireActual("@/game/modules/index.js").default;

import { create } from "vuex-mock-context";
import gameData from "../../../../data";

if (modules) {
  Object.keys(modules).forEach((key) => {
    const module = modules[key];
    module.injectData(gameData[module.moduleName]);
    module.context = create();
  });
}

export default modules;
