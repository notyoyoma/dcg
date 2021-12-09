import GenericLogic from "./Generic";

export default class Party extends GenericLogic {
  teleport(coords) {
    this.data.location = { ...coords };
  }
}
