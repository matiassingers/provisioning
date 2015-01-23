#!/usr/bin/env node
'use strict';

var pkg = require('./package.json');
var provisioning = require('./');
var argv = process.argv.slice(2);

function help() {
  console.log([
    '',
      '  ' + pkg.description,
    '',
    '  Example',
    '    provisioning ./Payload/Facebook.app/',
    '',
    '    => { "AppIDName": "com.facebook.facebook",',
    '         "TeamName": "Facebook Inc.",',
    '         ... }'
  ].join('\n'));
}

if (argv.indexOf('--help') !== -1) {
  help();
  return;
}

if (argv.indexOf('--version') !== -1) {
  console.log(pkg.version);
  return;
}


provisioning(argv[0], function(error, data){
  if(error){
    throw error;
  }

  delete data.DeveloperCertificates;
  console.log(JSON.stringify(data, null, 4));
});
