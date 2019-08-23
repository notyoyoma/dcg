import Party from "./party";
import Map from "./world/map";
import axios from 'axios';
import path from 'path';

const env = process.env.NODE_ENV;

export default class Game {
  constructor() {
    this.data = {};
    this.fetchData();
  }

  fetchData() {
    if (env === 'dev') {
      dataContext = require.context('../../data', true, /\.json$/);
      _.each(dataContext.keys(), file => {
        const key = path.parse(file).name;
        this.data[key] = dataContext(file);
      });
      loaded();
    } else {
      const datum = [
        'characters',
        'items',
        'map',
        'monsters',
        'npcs',
        'party',
      ];
      Promise.all(
        datum.map((key) => axios.get(`/data/${datum}.json`))
      )
        .then((data) => {
          this.data = _.zipObject(datum, data)
        });
    }
  }
  
  loaded() {
    const party = new Party(data.party);
    const map = new Map(data.map);
  }
}