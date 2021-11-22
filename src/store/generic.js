import axios from "axios";

export function loadData(moduleName) {
  return async ({ state }) => {
    const { data } = await axios.get(`/data/${moduleName}`);
    Object.assign(state, data);
  };
}
