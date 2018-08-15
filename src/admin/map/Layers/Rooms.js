import {Layer} from "./Layer";
import {toolFactory} from "../Tools";
import RoomsTool from "../Tools/Rooms";
import RoomLayerRenderer from "../Canvas/RoomLayer";

export class Rooms extends Layer {
  constructor(data, setter) {
    super(data, setter);
    this.title = "Rooms";
    this.id= "rooms";

    this.toolComponent = toolFactory({tiles: {}, type: RoomsTool});
    this.renderComponent = RoomLayerRenderer;
  }
}