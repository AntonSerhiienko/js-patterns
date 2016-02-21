var myRevielingModule = (function () {
 
  var myPrivateCounter, myPrivateMethod;
 
  // A private counter variable
  myPrivateCounter = 0;
 
  // A private function which logs any arguments
  myPrivateMethod = function( foo ) {
      console.log(foo);
  };
 
  return {
 
    // A public variable
    setCounter: function(counter){ myPrivateCounter = counter},
 
    // A public function utilizing privates
    myPublicFunction: function( bar ) {
 
      // Increment our private counter
      myPrivateVar++;
 
      // Call our private method using bar
      myPrivateMethod( bar );
 
    },

	  //A public function that returns clone of private counter
    getCounter: function() {
      return myPrivateCounter;
    }
  };
 
})();

module.exports = myRevielingModule;