import merge from 'merge';

export function getLayoutObj( moduleLayoutObj, game ) {
  let result =  merge.recursive(
    {
      type: 'component',
      componentName: 'uiModule',
      componentState: {
        template: '',
      }
    }, moduleLayoutObj
  );
  result.componentState["game"] = game;
  return result;
}

export function register( container, state ) {
  // Compile state.template, and render it with state.game
  // into the containing element
  container.getElement().html(
    state.template(state.game)
  );
}
