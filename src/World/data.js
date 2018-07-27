import axios from 'axios';

export function getMapData() {
  return axios.get('/data/map.json');
}
