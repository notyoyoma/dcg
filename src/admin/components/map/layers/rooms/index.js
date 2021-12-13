const tools = ["eraser", "add", "edit", "select"];
import RenderComponent from "./Render";
import flatten from "lodash/flatten";
import uniq from "lodash/uniq";
import compact from "lodash/compact";

import store from "@/admin/store";

export function getNextRoomId() {
  const { roomCoords } = store.getters["mapEditor/currentFloor"];
  const roomIds = uniq(compact(flatten(roomCoords))).sort((a, b) => a - b);
  for (let i = 1; i < roomIds.length; i++) {
    if (i !== roomIds[i - 1]) {
      return i;
    }
  }
  return roomIds.length + 1;
}

export default {
  id: "rooms",
  tools,
  RenderComponent,
};
