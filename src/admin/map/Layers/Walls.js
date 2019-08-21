import {TileLayer} from "./TileLayer";
import {walls} from "../Tools/Walls";
import WallLayerRenderer from "../Canvas/WallLayer";
import {mapSettings} from "../../../game/world/mapSettings";

export class Walls extends TileLayer {
  constructor(data, setter) {
    super(data, setter);
    this.title = "Walls";
    this.id= "walls";
    this.tiles = walls;
    this.renderComponent = WallLayerRenderer;
  }

  shouldPlaceNewWall({x,y,modSum}) {
    // If the cursor is...
    // on a pixel that is between the interatable triangles
    if (x == y || modSum == 14)  return undefined;
    //    in top left 3x3     in top right 3x3     in bottom left 3x3   in bottom right 3x3
    if ( (x < 3 && y < 3) || (x > 11 && y < 3) || (x < 3 && y > 11) || (x > 11 && y > 11)) return undefined;
    //  in the middle 3x3
    if ( x > 4 && x < 8 && y > 4 && y < 8) return undefined;
    return true;
  }

  getCoordsDeltas({x,y,modSum}) {
    // If the cursor is...
    // on the upper or left interactable triangles
    if (modSum < 14) return {xD: 0, yD: 0};
    // on the right triangle, xD = 1
    // on the bottom triangle, yD = 1
    return (x > y) ? {xD: 1, yD: 0} : {xD: 0, yD: 1};
  }

  isOutOfBounds({yIndex, xIndex, wIndex}) {
    if (wIndex == 0 && (yIndex == 0 || yIndex > mapSettings.height-1)) return true;
    if (wIndex == 1 && (xIndex == 0 || xIndex > mapSettings.width-1)) return true;
    return false;
  }

  interact({x,y,tool}) {
    const xM = x % 15;
    const yM = y % 15;
    const modSum = xM + yM;
    // Should we interact? if so, which tile?
    if (!this.shouldPlaceNewWall({x: xM, y: yM, modSum})) return;
    const {xD, yD} = this.getCoordsDeltas({x: xM, y: yM, modSum});
    const xIndex = Math.floor(x / 15) + xD;
    const yIndex = Math.floor(y / 15) + yD;

    // Which wall should we set? 0 if top, 1 if left
    const wIndex = ( (xM > yM && modSum < 14) || (xM < yM && modSum > 14) ) ? 0 : 1;

    if (this.isOutOfBounds({yIndex, xIndex, wIndex})) return;

    this.setData([yIndex, xIndex, wIndex], tool);
  }
}