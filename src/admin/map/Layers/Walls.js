import {TileLayer} from "./TileLayer";
import {toolFactory} from "../Tools";
import {walls} from "../Tools/Walls";
import WallLayerRenderer from '../Canvas/WallLayer';

export class Walls extends TileLayer {
  constructor(data, setter) {
    super(data, setter);
    this.title = "Walls";
    this.id= "walls";
    this.tiles = walls;
    this.renderComponent = WallLayerRenderer;

    this.toolComponent = toolFactory({tiles: walls});
  }

  getCoordsDeltas({x,y,modSum}) {
    // If the cursor is...
    // on a pixel that is between the interatable triangles
    if (x == y || modSum == 14)  return undefined;
    // on the upper or left interactable triangles
    if (modSum < 14)             return {xD: 0, yD: 0};
    // on the right triangle, xD = 1
    // on the bottom triangle, yD = 1
    return (x > y) ? {xD: 1, yD: 0} : {xD: 0, yD: 1};
  }

  interact({x,y,tool}) {
    const xM = x % 15;
    const yM = y % 15;
    const modSum = xM + yM;
    // Should we interact? if so, which tile?
    const deltas = this.getCoordsDeltas({x: xM, y: yM, modSum});
    if (!deltas) return;
    const {xD, yD} = deltas;
    const xIndex = Math.floor(x / 15) + xD;
    const yIndex = Math.floor(y / 15) + yD;

    // Which wall should we set?
    const wIndex = ( (xM > yM && modSum < 14) || (xM < yM && modSum > 14) ) ? 0 : 1;

    this.setData([yIndex, xIndex, wIndex], tool);
  }
}