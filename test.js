'use strict';

var assert = require('assert');
var fs = require('fs');
var plistFixture = fs.readFileSync('./fixtures/fixture.plist', { encoding: 'UTF-8' });

var proxyquire =  require('proxyquire');
var childProcessStub = {
  exec: function(command, callback){
    callback(null, plistFixture);
  }
};

var provisioning = proxyquire('./', {'child_process': childProcessStub});

describe('should call exec correctly and parse plist data', function(){
  it('return parsed data as object', function(done) {
    provisioning('embedded.mobileprovision', function(error, data){
      assert.equal(error, null);
      assert.deepEqual(data, {"AppIDName":"com-facebook-facebook","TeamName":"Facebook Inc."});

      done();
    });
  });
});
