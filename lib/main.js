var Hls = require("hls.js");
var attachVideojsHlsjsProvider = require('./videojs5-hlsjs-source-handler.js');

attachVideojsHlsjsProvider(window, window.videojs, Hls);