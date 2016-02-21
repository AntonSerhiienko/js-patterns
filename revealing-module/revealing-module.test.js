var assert = require('assert');
var module = require('./revealing-module.js');
describe('Revieling Module Pattern', function() {
  
    it('should enclose private things', function () {
      assert.equal(module.myPrivateCounter, undefined);
	    assert.equal(module.myPrivateMethod, undefined);
    });

    it('should expose public things', function () {
      assert.equal(typeof module.myPublicFunction, "function");
      assert.equal(typeof module.setCounter, "function");
      assert.equal(typeof module.getCounter, "function");
    });

    it('should change private with setters vars', function () {
      module.setCounter(1)
      assert.equal(1 , module.getCounter());
    });

});