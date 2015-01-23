'use strict';

var exec = require('child_process').exec;
var plist = require('simple-plist');

module.exports = function(file, callback){
  exec('security cms -D -i ' + file, function(error, output){
    if(error){
      return callback(error);
    }

    callback(null, plist.parse(output));
  });
};
