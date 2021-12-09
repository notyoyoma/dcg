import axios from "axios";
import game from "../game";

export class GenericLogic {
  data = {};

  constructor(context, moduleName, data) {
    this.moduleName = moduleName;
    this.context = context;

    const LSData = localStorage.getItem(this.moduleName);
    if (LSData) {
      this.data = JSON.parse(LSData);
    } else {
      this.data = data;
    }
  }

  // TODO debounce by game loop duration, and queue all changes during game loop for single update
  update(value) {
    this.context.commit("setState", value);
  }

  save() {
    localStorage.setItem(this.moduleName, this.data);
  }

  async initialize() {
    this.update(this.data);
  }
}

export class GenericStore {
  properties = {
    namespaced: true,
  };

  constructor({ moduleName, logicClass }) {
    this.moduleName = moduleName;
    this.logicClass = logicClass;
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
