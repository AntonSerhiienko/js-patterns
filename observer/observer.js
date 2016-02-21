function Observer(){
  var myPrivateState = {state:"foo", id: "bar"};

  this.update = function(context){
  	myPrivateState = context;
  };

  this.getState = function(){
  	return myPrivateState;
  };

}

module.exports = Observer;