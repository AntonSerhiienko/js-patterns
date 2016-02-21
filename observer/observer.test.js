var assert = require('assert');
var Observer = require('./observer.js');
var Subject = require('./subject.js');

describe('Observer pattern', function() {
    var observer1 = new Observer();
    var observer2 = new Observer();

    var subject = new Subject();
  
    it('should allow subject to register observers', function () {
      subject.addObserver(observer1);
      assert.equal(subject.observers.get(0), observer1);
      subject.addObserver(observer2);
      assert.equal(subject.observers.get(1), observer2);      
    });

    it('should notify observers about subject change', function () {
      var newState = {state:"bar", id: "foo"};
      subject.notify(newState);

      assert.equal(observer1.getState(), newState);
      assert.equal(observer2.getState(), newState);
      
    });

});