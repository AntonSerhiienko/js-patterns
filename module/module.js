var myModule = (function () {
 
  var myPrivateCounter, myPrivateMethod, myPrivateArray;
 
  // A private counter variable
  myPrivateCounter = 0;

  // A private array variable
  myPrivateArray = []
 
  // A private function which logs any arguments
  myPrivateMethod = function( foo ) {
      console.log(foo);
      myPrivateArray.push(foo);
  };
 
  return {
 
    // A public variable
    myPublicVar: "foo",
 
    // A public function utilizing privates
    myPublicFunction: function( bar ) {
 
      // Increment our private counter
      myPrivateVar++;
 
      // Call our private method using bar
      myPrivateMethod( bar );
 
    },

	// A public function that returns clone of private counter
    getCounter: function() {
      return Numbers(myPrivateCounter);
    }
  };
 
})();

module.exports = myModule;