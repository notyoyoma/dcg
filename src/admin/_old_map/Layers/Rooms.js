import { Layer } from "./Layer";
import RoomsTool from "../Tools/Rooms";
import RoomLayerRenderer from "../Canvas/RoomLayer";
import { roomIDs } from "../Canvas/RoomIDColors";

import get from "lodash/get";
import uniq from "lodash/uniq";
import compact from "lodash/compact";
import flatten from "lodash/flatten";
import difference from "lodash/difference";

// TODO - This is not final code, move this into game module
class Room {
  constructor(data) {
    Object.assign(this, { ...this.defaults, ...data });
  }

  get defaults() {
    return {
      monsterTable: [],
      lootTable: [],
      flavorText: "",
    };
  }

  toJSON() {
    const { monsterTable, lootTable } = this;
    return { monsterTable, lootTable };
  }
}

export class Rooms extends Layer {
  constructor({ roomCoords, rooms }, setter) {
    super(roomCoords, setter);
    this.title = "Rooms";
    this.id = "rooms";
    this.rooms = Object.keys(rooms).map((data) => new Room(data));

    this.toolComponent = RoomsTool;
    this.renderComponent = RoomLayerRenderer;

    this.currentRoomID = 0;
  }

  setData(path, val) {
    if (get(this.data, path) != val) {
      this.setter("setMapData", { path, val, layerKey: "roomCoords" });
      this.setter("setMapData", {
        layerKey: "rooms",
        path: [],
        val: this.rooms,
      });
    }
  }

  get roomIDs() {
    return uniq(compact(flatten(this.data))).sort();
  }

  createNewRoom() {
    // compare prevIDs to 0..1599 find first missing id, use that for new id
    const id = difference(roomIDs, this.roomIDs)[0];
    let room = new Room({ id });
    this.rooms[id] = room;
    this.currentRoomID = room.id;
    return room;
  }

  placeRoom(e) {
    const coordPath = this.interactionPath(e);
    const prevID = get(this.data, coordPath);
    this.setData(coordPath, this.currentRoomID);
    if (this.currentRoomID == 0 && !this.roomIDs.includes(prevID)) {
      this.setter("setMapData", { layerKey: "rooms", path: [prevID], val: 0 });
    }
  }

  selectUnderMouse(e) {
    const coordPath = this.interactionPath(e);
    const roomID = this.getData(coordPath);
    if (roomID === undefined) {
      this.setter("setCurrentTool", 0);
    } else {
      this.currentRoomID = roomID;
      this.setter("setCurrentTool", 2);
    }
  }

  mousedown(e, tool) {
    super.mousedown();
    this.interaction.mousedown = true;
    if (tool == 3) {
      this.selectUnderMouse(e);
      return;
    }
    if (tool == 0) this.currentRoomID = 0;
    if (tool == 1) {
      this.createNewRoom();
      this.setter("setCurrentTool", 2);
    }
    this.placeRoom(e);
  }

  mousemove(e) {
    if (this.interaction.mousedown) {
      this.placeRoom(e);
    }
  }
}
