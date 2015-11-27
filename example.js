var h = require("virtual-dom/h");
var mainLoop = require("main-loop");
var mkWidget = require("./");
var createElement = require("virtual-dom/create-element");

var CanvasThing = mkWidget(function(props){
  var canvas = createElement(h("canvas", {
    width: 100,
    height: 100,
    style: {
      border: "1px solid black"
    }
  }));
  var ctx = canvas.getContext("2d");
  var x = 0;
  var y = 0;
  var handle = setInterval(function(){
    x++;
    y++;
    ctx.strokeRect(x, y, 10, 10);
  }, 100);

  return {
    element: canvas,
    destroy: function(){
      clearInterval(handle);
    }
  };
});

var render = function(state){
  var things = [];
  while(things.length < state.count){
    things.push(CanvasThing(state));
  }
  return h("div", [
    h("div", [
      h("button", {onclick: function(){
        loop.update({count: state.count + 1});
      }}, "Add Canvas"),
      h("button", {onclick: function(){
        loop.update({count: 0});
      }}, "Clear Canvases")
    ]),
    things   
  ]);
};

var loop = mainLoop({count: 1}, render, {
  create: require("virtual-dom/create-element"),
  diff: require("virtual-dom/diff"),
  patch: require("virtual-dom/patch")
});
document.body.appendChild(loop.target);
