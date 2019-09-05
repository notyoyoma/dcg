import {isArray, isObject, has, merge, assign} from 'lodash';

const set = (state, newState) => {
  for (const prop of Object.keys(state)) {
    delete state[prop];
  }
  assign(state, newState);
}

const objectState = {
  state: {},
  mutations: {
    set,
    merge (state, obj) {merge(state, obj)},
  }
};

const arrayState = {
  state: [],
  mutations: {
    set (state, newState) {state.splice(0, state.length, ...newState)},
    push (state, item) {state.push(item)},
    remove (state, index) {state.slice(index, 1)},
  }
}

export default function makeStore(arg={}) {
  // if arg doesn't have a {state}, use it as the state
  if (isObject(arg) && !has(arg, 'state')) return merge({}, objectState, {state: arg, namespaced: true});
  const {namespaced=true, mutations={}, ...otherProps} = arg;
  return {
    namespaced,
    mutations: {
      set,
      ...mutations
    },
    ...otherProps
  }
}