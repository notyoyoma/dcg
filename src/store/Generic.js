import axios from "axios";
import game from "@/game";
import logicModules from "@/game/modules";
import { capitalize } from "@/utils/string";

export default class GenericStore {
  properties = {
    namespaced: true,
  };

  constructor({ moduleName }) {
    this.moduleName = moduleName;
    const logicClassName = capitalize(moduleName);
    this.logicClass = logicModules[logicClassName];
  }

  get mutations() {
    return {
      setState(state, newState) {
        Object.assign(state, newState);
      },
    };
  }

  get actions() {
    const { logicClass, moduleName } = this;
    const self = this;

    return {
      async loadModuleData(moduleContext) {
        const { data } = await axios.get(`/data/${moduleName}`);
        self.instance = new logicClass(moduleContext, moduleName, data);
        game._addModule(moduleName, self.instance);
      },
      async initializeModule() {
        await self.instance.initialize();
      },
    };
  }
}
