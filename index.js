'use strict';

var plist = require('simple-plist');

module.exports = function(file, callback){
  var certDl = new (require('cert-downloader'));
  certDl.verify(file, function(error, output) {
    if(error){
      return callback(error);
    }
    callback(null, plist.parse(output));
  });
};
