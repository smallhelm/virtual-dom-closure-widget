module.exports = function(daClosure){
  var Widget = function(props){
    this.props = props;
  };
  Widget.prototype.type = "Widget";
  Widget.prototype.init = function(){
    this.persistent_state = daClosure(this.props);

    return this.persistent_state.element;
  };
  Widget.prototype.update = function(previous){
    this.persistent_state = previous.persistent_state;

    return this.persistent_state.update ? this.persistent_state.update.apply(this, arguments) : null;
  };
  Widget.prototype.destroy = function(){
    if(this.persistent_state.destroy){
      this.persistent_state.destroy.apply(this, arguments);
    }
  };
  return function(props){
    return new Widget(props);
  };
};
