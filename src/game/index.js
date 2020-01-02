import Party, {partyStore} from "./party";
import Map from "./world/map";
import axios from 'axios';
import Vuex from 'vuex';
import makeStore from '~/util/makeStore';

const env = process.env.NODE_ENV;

export default class Game {
  constructor() {
    // Modules load from /data or from DB
    // Each module will create a store
    this.fetchData();
    this.store = new Vuex.Store({
      state: {
        loading: true,
      },
      modules: {
        character: makeStore(),
        party: partyStore,
        visibleMap: makeStore(),
      },
      mutations: {
        doneLoading (state) {state.loading = false}
      }
    });
  }

  fetchData() {
    const data_modules = [
      'characters',
      'items',
      'map',
      'monsters',
      'npcs',
      'party'
    ]
    Promise.all(
      data_modules.map((key) => axios.get(`/data/${key}.json`))
    )
      .then((response) => {
        this.load(_.zipObject(data_modules, _.map(response, 'data')))
      });
  }
  
  // this is possibly the ugliest thing I have ever done
  // If there is a God, i hope he forgives me...
  load(data) {
    this.party = new Party(data.party, this);
    this.map   = new Map(data.map, this);
    // this.store.commit('doneLoading');
  }
}