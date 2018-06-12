
import GoldenLayout from 'golden-layout';
require('golden-layout/src/css/goldenlayout-base.css');
require('golden-layout/src/css/goldenlayout-dark-theme.css');

const vueContent = (title, vue) => ({
  type: 'component',
  componentName: 'VueWindow',
  title,
  componentState: {vue: vue || title}
});

const layoutConfig = {
  settings:{
    hasHeaders: true,
    constrainDragToContainer: true,
    reorderEnabled: true,
    selectionEnabled: true,
    popoutWholeStack: false,
    blockedPopoutsThrowError: true,
    closePopoutsOnUnload: true,
    showPopoutIcon: true,
    showMaximiseIcon: true,
    showCloseIcon: false,
  },
  content: [
    vueContent('CurrentCharacter'),
  ]
}

let Layout = new GoldenLayout(layoutConfig);


Layout.registerComponent("VueWindow", (container, state)=>{
  const {vue} = state;
  container.getElement().append(`<${vue} />`);
});

Layout.init();

export default Layout;
