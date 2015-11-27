# virtual-dom-closure-widget
Make virtual-dom widgets by using a function closure that persists it's local state between renders.

## Example
Check out `example.js`

To run it clone this repository then run
```sh
$ npm i && npm start
```
It will give you localhost url to open in your browser and see it running.

## API
```js
var mkWidget = require("virtual-dom-closure-widget");

var MyWidgetThing = mkWidget(function(props){

  //This code executes the first time a widget is mounted (i.e. Widget "init" method)
  //Do whatever you want here...
  //At some point you should create a DOM element you want mounted to the page

  return {
    element: element,//this is the elment you want mounted the page

    update: //same API as virtual-dom widget's "update" method

    destroy: //same API as virtual-dom widget's "destroy" method
  };
});

...
  //somwhere in your render
  MyWidgetThing(props),
...
```

## License
MIT
