//layout.js
var pageLayout=new GoldenLayout({content:[{type:"row",content:[{type:"component",componentName:"example",componentState:{text:"Row 1"}},{type:"component",componentName:"example",componentState:{text:"Row 2"}},{type:"component",componentName:"example",componentState:{text:"Row 3"}}]}]});pageLayout.registerComponent("example",function(a,b){a.getElement().html("<h2>"+b.text+"</h2>")}),pageLayout.init();
//# sourceMappingURL=app.js.map