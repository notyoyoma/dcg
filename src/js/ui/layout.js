//layout.js

let GoldenLayout = require('golden-layout/dist/goldenlayout.js');

let pageLayout = new GoldenLayout({
  content: [{
    type: 'row',
    content: [
      {
        type:'component',
        componentName: 'example',
        componentState: { text: 'Row 1' }
      },
      {
        type:'component',
        componentName: 'example',
        componentState: { text: 'Row 2' }
      },
      {
        type:'component',
        componentName: 'example',
        componentState: { text: 'Row 3' }
      }
    ]
  }]
});

pageLayout.registerComponent( 'example', function( container, state ){
  container.getElement().html( '<h2>' + state.text + '</h2>');
});

pageLayout.init();
