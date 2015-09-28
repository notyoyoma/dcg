import angular from 'angular';

export default function angularModuleComponent( container, state ) {
  let element = container.getElement();

  element.html( state.template );

  angular
  .module( state.module )
  .value( 'container', container )
  .value( 'state', state );

  angular.bootstrap( element[ 0 ], [ state.module ] );
};
