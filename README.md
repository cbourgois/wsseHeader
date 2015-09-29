# WsseHeader
Generate WSSE Header with [CryptoJs](https://code.google.com/p/crypto-js/) library.


## Installation

Via [Bower](http://bower.io/search/?q=cryptojs-wsse-header):

```
bower install cryptojs-wsse-header --save
```

And in your html file:

``` html
<script type="text/javascript" src="bower_components/cryptojslib/rollups/sha1.js"></script>
<script type="text/javascript" src="bower_components/cryptojslib/components/enc-base64.js"></script>

<script type="text/javascript" src="bower_components/cryptojs-wsse-header/WsseHeader.js"></script>
```


## Usage

``` js
var header = new WsseHeader();

wsseHeader.buildWsseHeader("cyrille", "BwWNPWAuOcuzI+WeMPQL4PVnqe76irLVBEQDSD25U57gscun/5k+mKo0a+9NA6nanK1utxQELgDA2XomHm0bOg==", "f5hdgfd6jjkfd7oj4f6jbfl2dj")
// UsernameToken Username="cyrille", PasswordDigest="kmsaFE3ehpSesjwxrEsWf1p+zbM=", Nonce="NGhtaG10em5peWtmYnQ5", Created="2015-09-29T07:43:54.007Z"
```
