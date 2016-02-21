var assert = require('assert');
var module = require('./module.js');
describe('Module pattern', function() {
  
    it('should enclose private vars', function () {
      assert.equal(module.myPrivateCounter, undefined);
	  assert.equal(module.myPrivateMethod, undefined);
    });

    it('should expose public vars', function () {
      assert.equal(module.myPublicVar, "foo");
    });

    it('should expose public vars', function () {
      assert.equal(typeof module.myPublicFunction, "function");
      assert.equal(module.myPublicVar, "foo");
    });

});