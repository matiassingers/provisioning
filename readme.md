# provisioning [![Build Status](http://img.shields.io/travis/matiassingers/provisioning.svg?style=flat-square)](https://travis-ci.org/matiassingers/provisioning) [![Dependency Status](http://img.shields.io/gemnasium/matiassingers/provisioning.svg?style=flat-square)](https://gemnasium.com/matiassingers/provisioning)
> parse .mobileprovision(iOS) and .provisionprofile(OS X) files

Converts the provisioning profile raw plist data into JavaScript objects, arrays, etc.

**Note:** this module currently only works on OS X because of [`security`], see [#3](https://github.com/matiassingers/ipa-metadata/pull/3).

## Install

```sh
$ npm install --save provisioning
```


## Usage

```js
var provisioning = require('provisioning');

provisioning('./Payload/Facebook.app/embedded.mobileprovision', function(error, data){
  console.log(data);
  // => { "AppIDName": "com.facebook.facebook",
  //      "TeamName": "Facebook Inc.",
  //      ... }
});
```


## CLI

```sh
$ npm install --global provisioning
```

```sh
$ provisioning --help

  parse .mobileprovision(iOS) and .provisionprofile(OS X) files

  Example
    provisioning ./Payload/Facebook.app/embedded.mobileprovision

    => { "AppIDName": "com.facebook.facebook",
         "TeamName": "Facebook Inc.",
         ... }
```


## Related
- [`grunt-xcode`](https://github.com/matiassingers/grunt-xcode)
- [`apn-test`](https://github.com/matiassingers/apn-test)
- [`ipa-metadata`](https://github.com/matiassingers/ipa-metadata)
- [`entitlements`](https://github.com/matiassingers/entitlements)


## License

MIT © [Matias Singers](http://mts.io)

[`security`]: https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man1/security.1.html
