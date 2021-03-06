var ShmCache =  require('../');
var assert = require('assert');
var obj = new ShmCache({});

describe('ShmCache', function() {
  it('should set ok', function() {
    obj.set("test", "test", 60);
    obj.set("object", {a: {b:1}, b: 1, c: 'string'}, 60);
    obj.set("array", [{a:1}, 1, 'string'], 60);
  });

  it('should get ok', function() {
    assert.equal(obj.get("test"), "test");
    assert.deepEqual(obj.get("object"), {a: {b:1}, b: 1, c: 'string'});
    assert.deepEqual(obj.get("array"), [{a:1}, 1, 'string']);
  });

  it('should remove ok', function() {
    obj.remove("test");
    assert.equal(obj.get("test"), undefined);
  });

  it('should stats ok', function() {
    assert.equal(obj.stats().hashTable.currentKeyCount, 2);
  });

  it('should clear ok', function() {
    obj.clear()
  });
});
