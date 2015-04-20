
/*
WsseHeader.js 0.1

(c) 2015 Cyrille Bourgois
https://github.com/cbourgois/WsseHeader
WsseHeader may be freely distributed under the MIT license.
 */
var wsseHeaderDefinition;

wsseHeaderDefinition = function() {
  "use strict";
  var WsseHeader;
  return WsseHeader = (function() {
    WsseHeader.VERSION = '0.1.0';

    function WsseHeader() {}

    WsseHeader.prototype.options = {};

    WsseHeader.prototype.buildWsseHeader = function(username, encodedPassword, salt) {
      var createdDate, nonce, passwordDigest;
      nonce = this.generateNonce();
      createdDate = this.generateCreatedDate();
      passwordDigest = this.generatePasswordDigest(nonce, createdDate, encodedPassword, salt);
      return 'UsernameToken Username="' + username + '", PasswordDigest="' + passwordDigest + '", Nonce="' + nonce + '", Created="' + createdDate + '"';
    };

    WsseHeader.prototype.generateNonce = function() {
      var nonce;
      nonce = Math.random().toString(36).substring(2);
      return CryptoJS.enc.Utf8.parse(nonce).toString(CryptoJS.enc.Base64);
    };

    WsseHeader.prototype.generateCreatedDate = function() {
      return new Date().toISOString();
    };

    WsseHeader.prototype.generatePasswordDigest = function(nonce, createdDate, encodedPassword, salt) {
      var digest, nonce64;
      nonce64 = CryptoJS.enc.Base64.parse(nonce);
      digest = nonce64.concat(CryptoJS.enc.Utf8.parse(createdDate).concat(CryptoJS.enc.Utf8.parse(encodedPassword).concat(CryptoJS.enc.Utf8.parse('{' + salt + '}'))));
      return CryptoJS.SHA1(digest).toString(CryptoJS.enc.Base64);
    };

    return WsseHeader;

  })();
};

(function(definition, root) {
  "use strict";
  var hasDefine, hasExports;
  hasDefine = typeof define === "function" && (define.amd !== null);
  hasExports = typeof module !== "undefined" && (module.exports !== null);
  if (hasDefine) {
    return define([], definition);
  } else if (hasExports) {
    return module.exports = definition();
  } else {
    return root.WsseHeader = definition();
  }
})(wsseHeaderDefinition, window);
