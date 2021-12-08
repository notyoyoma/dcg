import axios from "axios";

export class GenericLogic {
  constructor(moduleContext, data) {
    const { commit } = moduleContext;
    this.commit = commit;
    commit("setState", data);
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

    return {
      async loadModuleData(moduleContext) {
        const { data } = await axios.get(`/data/${moduleName}`);
        self.instance = new logicClass(moduleContext, data);
      },
    };
  }
}
