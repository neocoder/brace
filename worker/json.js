module.exports.id = 'ace/mode/json_worker';
module.exports.src = "\"no use strict\";(function(e){function t(e,t){for(var n=e,r=\"\";n;){var i=t[n];if(\"string\"==typeof i)return i+r;if(i)return i.location.replace(/\\/*$/,\"/\")+(r||i.main||i.name);if(i===!1)return\"\";var o=n.lastIndexOf(\"/\");if(-1===o)break;r=n.substr(o)+r,n=n.slice(0,o)}return e}if(!(void 0!==e.window&&e.document||e.acequire&&e.define)){e.console||(e.console=function(){var e=Array.prototype.slice.call(arguments,0);postMessage({type:\"log\",data:e})},e.console.error=e.console.warn=e.console.log=e.console.trace=e.console),e.window=e,e.ace=e,e.onerror=function(e,t,n,r,i){postMessage({type:\"error\",data:{message:e,data:i.data,file:t,line:n,col:r,stack:i.stack}})},e.normalizeModule=function(t,n){if(-1!==n.indexOf(\"!\")){var r=n.split(\"!\");return e.normalizeModule(t,r[0])+\"!\"+e.normalizeModule(t,r[1])}if(\".\"==n.charAt(0)){var i=t.split(\"/\").slice(0,-1).join(\"/\");for(n=(i?i+\"/\":\"\")+n;-1!==n.indexOf(\".\")&&o!=n;){var o=n;n=n.replace(/^\\.\\//,\"\").replace(/\\/\\.\\//,\"/\").replace(/[^\\/]+\\/\\.\\.\\//,\"\")}}return n},e.acequire=function n(n,r){if(r||(r=n,n=null),!r.charAt)throw Error(\"worker.js acequire() accepts only (parentId, id) as arguments\");r=e.normalizeModule(n,r);var i=e.acequire.modules[r];if(i)return i.initialized||(i.initialized=!0,i.exports=i.factory().exports),i.exports;if(!e.acequire.tlns)return console.log(\"unable to load \"+r);var o=t(r,e.acequire.tlns);return\".js\"!=o.slice(-3)&&(o+=\".js\"),e.acequire.id=r,e.acequire.modules[r]={},importScripts(o),e.acequire(n,r)},e.acequire.modules={},e.acequire.tlns={},e.define=function(t,n,r){if(2==arguments.length?(r=n,\"string\"!=typeof t&&(n=t,t=e.acequire.id)):1==arguments.length&&(r=t,n=[],t=e.acequire.id),\"function\"!=typeof r)return e.acequire.modules[t]={exports:r,initialized:!0},void 0;n.length||(n=[\"require\",\"exports\",\"module\"]);var i=function(n){return e.acequire(t,n)};e.acequire.modules[t]={exports:{},factory:function(){var e=this,t=r.apply(this,n.map(function(t){switch(t){case\"require\":return i;case\"exports\":return e.exports;case\"module\":return e;default:return i(t)}}));return t&&(e.exports=t),e}}},e.define.amd={},n.tlns={},e.initBaseUrls=function(e){for(var t in e)n.tlns[t]=e[t]},e.initSender=function(){var t=e.acequire(\"ace/lib/event_emitter\").EventEmitter,n=e.acequire(\"ace/lib/oop\"),r=function(){};return function(){n.implement(this,t),this.callback=function(e,t){postMessage({type:\"call\",id:t,data:e})},this.emit=function(e,t){postMessage({type:\"event\",name:e,data:t})}}.call(r.prototype),new r};var r=e.main=null,i=e.sender=null;e.onmessage=function(t){var o=t.data;if(o.event&&i)i._signal(o.event,o.data);else if(o.command)if(r[o.command])r[o.command].apply(r,o.args);else{if(!e[o.command])throw Error(\"Unknown command:\"+o.command);e[o.command].apply(e,o.args)}else if(o.init){e.initBaseUrls(o.tlns),n(\"ace/lib/es5-shim\"),i=e.sender=e.initSender();var s=n(o.module)[o.classname];r=e.main=new s(i)}}}})(this),ace.define(\"ace/lib/oop\",[\"require\",\"exports\",\"module\"],function(e,t){\"use strict\";t.inherits=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})},t.mixin=function(e,t){for(var n in t)e[n]=t[n];return e},t.implement=function(e,n){t.mixin(e,n)}}),ace.define(\"ace/range\",[\"require\",\"exports\",\"module\"],function(e,t){\"use strict\";var n=function(e,t){return e.row-t.row||e.column-t.column},r=function(e,t,n,r){this.start={row:e,column:t},this.end={row:n,column:r}};(function(){this.isEqual=function(e){return this.start.row===e.start.row&&this.end.row===e.end.row&&this.start.column===e.start.column&&this.end.column===e.end.column},this.toString=function(){return\"Range: [\"+this.start.row+\"/\"+this.start.column+\"] -> [\"+this.end.row+\"/\"+this.end.column+\"]\"},this.contains=function(e,t){return 0==this.compare(e,t)},this.compareRange=function(e){var t,n=e.end,r=e.start;return t=this.compare(n.row,n.column),1==t?(t=this.compare(r.row,r.column),1==t?2:0==t?1:0):-1==t?-2:(t=this.compare(r.row,r.column),-1==t?-1:1==t?42:0)},this.comparePoint=function(e){return this.compare(e.row,e.column)},this.containsRange=function(e){return 0==this.comparePoint(e.start)&&0==this.comparePoint(e.end)},this.intersects=function(e){var t=this.compareRange(e);return-1==t||0==t||1==t},this.isEnd=function(e,t){return this.end.row==e&&this.end.column==t},this.isStart=function(e,t){return this.start.row==e&&this.start.column==t},this.setStart=function(e,t){\"object\"==typeof e?(this.start.column=e.column,this.start.row=e.row):(this.start.row=e,this.start.column=t)},this.setEnd=function(e,t){\"object\"==typeof e?(this.end.column=e.column,this.end.row=e.row):(this.end.row=e,this.end.column=t)},this.inside=function(e,t){return 0==this.compare(e,t)?this.isEnd(e,t)||this.isStart(e,t)?!1:!0:!1},this.insideStart=function(e,t){return 0==this.compare(e,t)?this.isEnd(e,t)?!1:!0:!1},this.insideEnd=function(e,t){return 0==this.compare(e,t)?this.isStart(e,t)?!1:!0:!1},this.compare=function(e,t){return this.isMultiLine()||e!==this.start.row?this.start.row>e?-1:e>this.end.row?1:this.start.row===e?t>=this.start.column?0:-1:this.end.row===e?this.end.column>=t?0:1:0:this.start.column>t?-1:t>this.end.column?1:0},this.compareStart=function(e,t){return this.start.row==e&&this.start.column==t?-1:this.compare(e,t)},this.compareEnd=function(e,t){return this.end.row==e&&this.end.column==t?1:this.compare(e,t)},this.compareInside=function(e,t){return this.end.row==e&&this.end.column==t?1:this.start.row==e&&this.start.column==t?-1:this.compare(e,t)},this.clipRows=function(e,t){if(this.end.row>t)var n={row:t+1,column:0};else if(e>this.end.row)var n={row:e,column:0};if(this.start.row>t)var i={row:t+1,column:0};else if(e>this.start.row)var i={row:e,column:0};return r.fromPoints(i||this.start,n||this.end)},this.extend=function(e,t){var n=this.compare(e,t);if(0==n)return this;if(-1==n)var i={row:e,column:t};else var o={row:e,column:t};return r.fromPoints(i||this.start,o||this.end)},this.isEmpty=function(){return this.start.row===this.end.row&&this.start.column===this.end.column},this.isMultiLine=function(){return this.start.row!==this.end.row},this.clone=function(){return r.fromPoints(this.start,this.end)},this.collapseRows=function(){return 0==this.end.column?new r(this.start.row,0,Math.max(this.start.row,this.end.row-1),0):new r(this.start.row,0,this.end.row,0)},this.toScreenRange=function(e){var t=e.documentToScreenPosition(this.start),n=e.documentToScreenPosition(this.end);return new r(t.row,t.column,n.row,n.column)},this.moveBy=function(e,t){this.start.row+=e,this.start.column+=t,this.end.row+=e,this.end.column+=t}}).call(r.prototype),r.fromPoints=function(e,t){return new r(e.row,e.column,t.row,t.column)},r.comparePoints=n,r.comparePoints=function(e,t){return e.row-t.row||e.column-t.column},t.Range=r}),ace.define(\"ace/apply_delta\",[\"require\",\"exports\",\"module\"],function(e,t){\"use strict\";t.applyDelta=function(e,t){var n=t.start.row,r=t.start.column,i=e[n]||\"\";switch(t.action){case\"insert\":var o=t.lines;if(1===o.length)e[n]=i.substring(0,r)+t.lines[0]+i.substring(r);else{var s=[n,1].concat(t.lines);e.splice.apply(e,s),e[n]=i.substring(0,r)+e[n],e[n+t.lines.length-1]+=i.substring(r)}break;case\"remove\":var a=t.end.column,u=t.end.row;n===u?e[n]=i.substring(0,r)+i.substring(a):e.splice(n,u-n+1,i.substring(0,r)+e[u].substring(a))}}}),ace.define(\"ace/lib/event_emitter\",[\"require\",\"exports\",\"module\"],function(e,t){\"use strict\";var n={},r=function(){this.propagationStopped=!0},i=function(){this.defaultPrevented=!0};n._emit=n._dispatchEvent=function(e,t){this._eventRegistry||(this._eventRegistry={}),this._defaultHandlers||(this._defaultHandlers={});var n=this._eventRegistry[e]||[],o=this._defaultHandlers[e];if(n.length||o){\"object\"==typeof t&&t||(t={}),t.type||(t.type=e),t.stopPropagation||(t.stopPropagation=r),t.preventDefault||(t.preventDefault=i),n=n.slice();for(var s=0;n.length>s&&(n[s](t,this),!t.propagationStopped);s++);return o&&!t.defaultPrevented?o(t,this):void 0}},n._signal=function(e,t){var n=(this._eventRegistry||{})[e];if(n){n=n.slice();for(var r=0;n.length>r;r++)n[r](t,this)}},n.once=function(e,t){var n=this;t&&this.addEventListener(e,function r(){n.removeEventListener(e,r),t.apply(null,arguments)})},n.setDefaultHandler=function(e,t){var n=this._defaultHandlers;if(n||(n=this._defaultHandlers={_disabled_:{}}),n[e]){var r=n[e],i=n._disabled_[e];i||(n._disabled_[e]=i=[]),i.push(r);var o=i.indexOf(t);-1!=o&&i.splice(o,1)}n[e]=t},n.removeDefaultHandler=function(e,t){var n=this._defaultHandlers;if(n){var r=n._disabled_[e];if(n[e]==t)n[e],r&&this.setDefaultHandler(e,r.pop());else if(r){var i=r.indexOf(t);-1!=i&&r.splice(i,1)}}},n.on=n.addEventListener=function(e,t,n){this._eventRegistry=this._eventRegistry||{};var r=this._eventRegistry[e];return r||(r=this._eventRegistry[e]=[]),-1==r.indexOf(t)&&r[n?\"unshift\":\"push\"](t),t},n.off=n.removeListener=n.removeEventListener=function(e,t){this._eventRegistry=this._eventRegistry||{};var n=this._eventRegistry[e];if(n){var r=n.indexOf(t);-1!==r&&n.splice(r,1)}},n.removeAllListeners=function(e){this._eventRegistry&&(this._eventRegistry[e]=[])},t.EventEmitter=n}),ace.define(\"ace/anchor\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/lib/event_emitter\"],function(e,t){\"use strict\";var n=e(\"./lib/oop\"),r=e(\"./lib/event_emitter\").EventEmitter,i=t.Anchor=function(e,t,n){this.$onChange=this.onChange.bind(this),this.attach(e),n===void 0?this.setPosition(t.row,t.column):this.setPosition(t,n)};(function(){function e(e,t,n){var r=n?e.column<=t.column:e.column<t.column;return e.row<t.row||e.row==t.row&&r}function t(t,n,r){var i=\"insert\"==t.action,o=(i?1:-1)*(t.end.row-t.start.row),s=(i?1:-1)*(t.end.column-t.start.column),a=t.start,u=i?a:t.end;return e(n,a,r)?{row:n.row,column:n.column}:e(u,n,!r)?{row:n.row+o,column:n.column+(n.row==u.row?s:0)}:{row:a.row,column:a.column}}n.implement(this,r),this.getPosition=function(){return this.$clipPositionToDocument(this.row,this.column)},this.getDocument=function(){return this.document},this.$insertRight=!1,this.onChange=function(e){if(!(e.start.row==e.end.row&&e.start.row!=this.row||e.start.row>this.row)){var n=t(e,{row:this.row,column:this.column},this.$insertRight);this.setPosition(n.row,n.column,!0)}},this.setPosition=function(e,t,n){var r;if(r=n?{row:e,column:t}:this.$clipPositionToDocument(e,t),this.row!=r.row||this.column!=r.column){var i={row:this.row,column:this.column};this.row=r.row,this.column=r.column,this._signal(\"change\",{old:i,value:r})}},this.detach=function(){this.document.removeEventListener(\"change\",this.$onChange)},this.attach=function(e){this.document=e||this.document,this.document.on(\"change\",this.$onChange)},this.$clipPositionToDocument=function(e,t){var n={};return e>=this.document.getLength()?(n.row=Math.max(0,this.document.getLength()-1),n.column=this.document.getLine(n.row).length):0>e?(n.row=0,n.column=0):(n.row=e,n.column=Math.min(this.document.getLine(n.row).length,Math.max(0,t))),0>t&&(n.column=0),n}}).call(i.prototype)}),ace.define(\"ace/document\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/apply_delta\",\"ace/lib/event_emitter\",\"ace/range\",\"ace/anchor\"],function(e,t){\"use strict\";var n=e(\"./lib/oop\"),r=e(\"./apply_delta\").applyDelta,i=e(\"./lib/event_emitter\").EventEmitter,o=e(\"./range\").Range,s=e(\"./anchor\").Anchor,a=function(e){this.$lines=[\"\"],0===e.length?this.$lines=[\"\"]:Array.isArray(e)?this.insertMergedLines({row:0,column:0},e):this.insert({row:0,column:0},e)};(function(){n.implement(this,i),this.setValue=function(e){var t=this.getLength()-1;this.remove(new o(0,0,t,this.getLine(t).length)),this.insert({row:0,column:0},e)},this.getValue=function(){return this.getAllLines().join(this.getNewLineCharacter())},this.createAnchor=function(e,t){return new s(this,e,t)},this.$split=0===\"aaa\".split(/a/).length?function(e){return e.replace(/\\r\\n|\\r/g,\"\\n\").split(\"\\n\")}:function(e){return e.split(/\\r\\n|\\r|\\n/)},this.$detectNewLine=function(e){var t=e.match(/^.*?(\\r\\n|\\r|\\n)/m);this.$autoNewLine=t?t[1]:\"\\n\",this._signal(\"changeNewLineMode\")},this.getNewLineCharacter=function(){switch(this.$newLineMode){case\"windows\":return\"\\r\\n\";case\"unix\":return\"\\n\";default:return this.$autoNewLine||\"\\n\"}},this.$autoNewLine=\"\",this.$newLineMode=\"auto\",this.setNewLineMode=function(e){this.$newLineMode!==e&&(this.$newLineMode=e,this._signal(\"changeNewLineMode\"))},this.getNewLineMode=function(){return this.$newLineMode},this.isNewLine=function(e){return\"\\r\\n\"==e||\"\\r\"==e||\"\\n\"==e},this.getLine=function(e){return this.$lines[e]||\"\"},this.getLines=function(e,t){return this.$lines.slice(e,t+1)},this.getAllLines=function(){return this.getLines(0,this.getLength())},this.getLength=function(){return this.$lines.length},this.getTextRange=function(e){return this.getLinesForRange(e).join(this.getNewLineCharacter())},this.getLinesForRange=function(e){var t;if(e.start.row===e.end.row)t=[this.getLine(e.start.row).substring(e.start.column,e.end.column)];else{t=this.getLines(e.start.row,e.end.row),t[0]=(t[0]||\"\").substring(e.start.column);var n=t.length-1;e.end.row-e.start.row==n&&(t[n]=t[n].substring(0,e.end.column))}return t},this.insertLines=function(e,t){return console.warn(\"Use of document.insertLines is deprecated. Use the insertFullLines method instead.\"),this.insertFullLines(e,t)},this.removeLines=function(e,t){return console.warn(\"Use of document.removeLines is deprecated. Use the removeFullLines method instead.\"),this.removeFullLines(e,t)},this.insertNewLine=function(e){return console.warn(\"Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead.\"),this.insertMergedLines(e,[\"\",\"\"])},this.insert=function(e,t){return 1>=this.getLength()&&this.$detectNewLine(t),this.insertMergedLines(e,this.$split(t))},this.insertInLine=function(e,t){var n=this.clippedPos(e.row,e.column),r=this.pos(e.row,e.column+t.length);return this.applyDelta({start:n,end:r,action:\"insert\",lines:[t]},!0),this.clonePos(r)},this.clippedPos=function(e,t){var n=this.getLength();void 0===e?e=n:0>e?e=0:e>=n&&(e=n-1,t=void 0);var r=this.getLine(e);return void 0==t&&(t=r.length),t=Math.min(Math.max(t,0),r.length),{row:e,column:t}},this.clonePos=function(e){return{row:e.row,column:e.column}},this.pos=function(e,t){return{row:e,column:t}},this.$clipPosition=function(e){var t=this.getLength();return e.row>=t?(e.row=Math.max(0,t-1),e.column=this.getLine(t-1).length):(e.row=Math.max(0,e.row),e.column=Math.min(Math.max(e.column,0),this.getLine(e.row).length)),e},this.insertFullLines=function(e,t){e=Math.min(Math.max(e,0),this.getLength());var n=0;this.getLength()>e?(t=t.concat([\"\"]),n=0):(t=[\"\"].concat(t),e--,n=this.$lines[e].length),this.insertMergedLines({row:e,column:n},t)},this.insertMergedLines=function(e,t){var n=this.clippedPos(e.row,e.column),r={row:n.row+t.length-1,column:(1==t.length?n.column:0)+t[t.length-1].length};return this.applyDelta({start:n,end:r,action:\"insert\",lines:t}),this.clonePos(r)},this.remove=function(e){var t=this.clippedPos(e.start.row,e.start.column),n=this.clippedPos(e.end.row,e.end.column);return this.applyDelta({start:t,end:n,action:\"remove\",lines:this.getLinesForRange({start:t,end:n})}),this.clonePos(t)},this.removeInLine=function(e,t,n){var r=this.clippedPos(e,t),i=this.clippedPos(e,n);return this.applyDelta({start:r,end:i,action:\"remove\",lines:this.getLinesForRange({start:r,end:i})},!0),this.clonePos(r)},this.removeFullLines=function(e,t){e=Math.min(Math.max(0,e),this.getLength()-1),t=Math.min(Math.max(0,t),this.getLength()-1);var n=t==this.getLength()-1&&e>0,r=this.getLength()-1>t,i=n?e-1:e,s=n?this.getLine(i).length:0,a=r?t+1:t,u=r?0:this.getLine(a).length,c=new o(i,s,a,u),l=this.$lines.slice(e,t+1);return this.applyDelta({start:c.start,end:c.end,action:\"remove\",lines:this.getLinesForRange(c)}),l},this.removeNewLine=function(e){this.getLength()-1>e&&e>=0&&this.applyDelta({start:this.pos(e,this.getLine(e).length),end:this.pos(e+1,0),action:\"remove\",lines:[\"\",\"\"]})},this.replace=function(e,t){if(e instanceof o||(e=o.fromPoints(e.start,e.end)),0===t.length&&e.isEmpty())return e.start;if(t==this.getTextRange(e))return e.end;this.remove(e);var n;return n=t?this.insert(e.start,t):e.start},this.applyDeltas=function(e){for(var t=0;e.length>t;t++)this.applyDelta(e[t])},this.revertDeltas=function(e){for(var t=e.length-1;t>=0;t--)this.revertDelta(e[t])},this.applyDelta=function(e,t){var n=\"insert\"==e.action;(n?1>=e.lines.length&&!e.lines[0]:!o.comparePoints(e.start,e.end))||(n&&e.lines.length>2e4&&this.$splitAndapplyLargeDelta(e,2e4),r(this.$lines,e,t),this._signal(\"change\",e))},this.$splitAndapplyLargeDelta=function(e,t){for(var n=e.lines,r=n.length,i=e.start.row,o=e.start.column,s=0,a=0;;){s=a,a+=t-1;var u=n.slice(s,a);if(a>r){e.lines=u,e.start.row=i+s,e.start.column=o;break}u.push(\"\"),this.applyDelta({start:this.pos(i+s,o),end:this.pos(i+a,o=0),action:e.action,lines:u},!0)}},this.revertDelta=function(e){this.applyDelta({start:this.clonePos(e.start),end:this.clonePos(e.end),action:\"insert\"==e.action?\"remove\":\"insert\",lines:e.lines.slice()})},this.indexToPosition=function(e,t){for(var n=this.$lines||this.getAllLines(),r=this.getNewLineCharacter().length,i=t||0,o=n.length;o>i;i++)if(e-=n[i].length+r,0>e)return{row:i,column:e+n[i].length+r};return{row:o-1,column:n[o-1].length}},this.positionToIndex=function(e,t){for(var n=this.$lines||this.getAllLines(),r=this.getNewLineCharacter().length,i=0,o=Math.min(e.row,n.length),s=t||0;o>s;++s)i+=n[s].length+r;return i+e.column}}).call(a.prototype),t.Document=a}),ace.define(\"ace/lib/lang\",[\"require\",\"exports\",\"module\"],function(e,t){\"use strict\";t.last=function(e){return e[e.length-1]},t.stringReverse=function(e){return e.split(\"\").reverse().join(\"\")},t.stringRepeat=function(e,t){for(var n=\"\";t>0;)1&t&&(n+=e),(t>>=1)&&(e+=e);return n};var n=/^\\s\\s*/,r=/\\s\\s*$/;t.stringTrimLeft=function(e){return e.replace(n,\"\")},t.stringTrimRight=function(e){return e.replace(r,\"\")},t.copyObject=function(e){var t={};for(var n in e)t[n]=e[n];return t},t.copyArray=function(e){for(var t=[],n=0,r=e.length;r>n;n++)t[n]=e[n]&&\"object\"==typeof e[n]?this.copyObject(e[n]):e[n];return t},t.deepCopy=function i(e){if(\"object\"!=typeof e||!e)return e;var t;if(Array.isArray(e)){t=[];for(var n=0;e.length>n;n++)t[n]=i(e[n]);return t}if(\"[object Object]\"!==Object.prototype.toString.call(e))return e;t={};for(var n in e)t[n]=i(e[n]);return t},t.arrayToMap=function(e){for(var t={},n=0;e.length>n;n++)t[e[n]]=1;return t},t.createMap=function(e){var t=Object.create(null);for(var n in e)t[n]=e[n];return t},t.arrayRemove=function(e,t){for(var n=0;e.length>=n;n++)t===e[n]&&e.splice(n,1)},t.escapeRegExp=function(e){return e.replace(/([.*+?^${}()|[\\]\\/\\\\])/g,\"\\\\$1\")},t.escapeHTML=function(e){return e.replace(/&/g,\"&#38;\").replace(/\"/g,\"&#34;\").replace(/'/g,\"&#39;\").replace(/</g,\"&#60;\")},t.getMatchOffsets=function(e,t){var n=[];return e.replace(t,function(e){n.push({offset:arguments[arguments.length-2],length:e.length})}),n},t.deferredCall=function(e){var t=null,n=function(){t=null,e()},r=function(e){return r.cancel(),t=setTimeout(n,e||0),r};return r.schedule=r,r.call=function(){return this.cancel(),e(),r},r.cancel=function(){return clearTimeout(t),t=null,r},r.isPending=function(){return t},r},t.delayedCall=function(e,t){var n=null,r=function(){n=null,e()},i=function(e){null==n&&(n=setTimeout(r,e||t))};return i.delay=function(e){n&&clearTimeout(n),n=setTimeout(r,e||t)},i.schedule=i,i.call=function(){this.cancel(),e()},i.cancel=function(){n&&clearTimeout(n),n=null},i.isPending=function(){return n},i}}),ace.define(\"ace/worker/mirror\",[\"require\",\"exports\",\"module\",\"ace/range\",\"ace/document\",\"ace/lib/lang\"],function(e,t){\"use strict\";e(\"../range\").Range;var n=e(\"../document\").Document,r=e(\"../lib/lang\"),i=t.Mirror=function(e){this.sender=e;var t=this.doc=new n(\"\"),i=this.deferredUpdate=r.delayedCall(this.onUpdate.bind(this)),o=this;e.on(\"change\",function(e){var n=e.data;if(n[0].start)t.applyDeltas(n);else for(var r=0;n.length>r;r+=2){if(Array.isArray(n[r+1]))var s={action:\"insert\",start:n[r],lines:n[r+1]};else var s={action:\"remove\",start:n[r],end:n[r+1]};t.applyDelta(s,!0)}return o.$timeout?i.schedule(o.$timeout):(o.onUpdate(),void 0)})};(function(){this.$timeout=500,this.setTimeout=function(e){this.$timeout=e},this.setValue=function(e){this.doc.setValue(e),this.deferredUpdate.schedule(this.$timeout)},this.getValue=function(e){this.sender.callback(this.doc.getValue(),e)},this.onUpdate=function(){},this.isPending=function(){return this.deferredUpdate.isPending()}}).call(i.prototype)}),ace.define(\"ace/mode/json/json_parse\",[\"require\",\"exports\",\"module\"],function(){\"use strict\";var e,t,n,r,i={'\"':'\"',\"\\\\\":\"\\\\\",\"/\":\"/\",b:\"\\b\",f:\"\\f\",n:\"\\n\",r:\"\\r\",t:\"\t\"},o=function(t){throw{name:\"SyntaxError\",message:t,at:e,text:n}},s=function(r){return r&&r!==t&&o(\"Expected '\"+r+\"' instead of '\"+t+\"'\"),t=n.charAt(e),e+=1,t},a=function(){var e,n=\"\";for(\"-\"===t&&(n=\"-\",s(\"-\"));t>=\"0\"&&\"9\">=t;)n+=t,s();if(\".\"===t)for(n+=\".\";s()&&t>=\"0\"&&\"9\">=t;)n+=t;if(\"e\"===t||\"E\"===t)for(n+=t,s(),(\"-\"===t||\"+\"===t)&&(n+=t,s());t>=\"0\"&&\"9\">=t;)n+=t,s();return e=+n,isNaN(e)?(o(\"Bad number\"),void 0):e},u=function(){var e,n,r,a=\"\";if('\"'===t)for(;s();){if('\"'===t)return s(),a;if(\"\\\\\"===t)if(s(),\"u\"===t){for(r=0,n=0;4>n&&(e=parseInt(s(),16),isFinite(e));n+=1)r=16*r+e;a+=String.fromCharCode(r)}else{if(\"string\"!=typeof i[t])break;a+=i[t]}else a+=t}o(\"Bad string\")},c=function(){for(;t&&\" \">=t;)s()},l=function(){switch(t){case\"t\":return s(\"t\"),s(\"r\"),s(\"u\"),s(\"e\"),!0;case\"f\":return s(\"f\"),s(\"a\"),s(\"l\"),s(\"s\"),s(\"e\"),!1;case\"n\":return s(\"n\"),s(\"u\"),s(\"l\"),s(\"l\"),null}o(\"Unexpected '\"+t+\"'\")},h=function(){var e=[];if(\"[\"===t){if(s(\"[\"),c(),\"]\"===t)return s(\"]\"),e;for(;t;){if(e.push(r()),c(),\"]\"===t)return s(\"]\"),e;s(\",\"),c()}}o(\"Bad array\")},f=function(){var e,n={};if(\"{\"===t){if(s(\"{\"),c(),\"}\"===t)return s(\"}\"),n;for(;t;){if(e=u(),c(),s(\":\"),Object.hasOwnProperty.call(n,e)&&o('Duplicate key \"'+e+'\"'),n[e]=r(),c(),\"}\"===t)return s(\"}\"),n;s(\",\"),c()}}o(\"Bad object\")};return r=function(){switch(c(),t){case\"{\":return f();case\"[\":return h();case'\"':return u();case\"-\":return a();default:return t>=\"0\"&&\"9\">=t?a():l()}},function(i,s){var a;return n=i,e=0,t=\" \",a=r(),c(),t&&o(\"Syntax error\"),\"function\"==typeof s?function u(e,t){var n,r,i=e[t];if(i&&\"object\"==typeof i)for(n in i)Object.hasOwnProperty.call(i,n)&&(r=u(i,n),void 0!==r?i[n]=r:delete i[n]);return s.call(e,t,i)}({\"\":a},\"\"):a}}),ace.define(\"ace/mode/json_worker\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/worker/mirror\",\"ace/mode/json/json_parse\"],function(e,t){\"use strict\";var n=e(\"../lib/oop\"),r=e(\"../worker/mirror\").Mirror,i=e(\"./json/json_parse\"),o=t.JsonWorker=function(e){r.call(this,e),this.setTimeout(200)};n.inherits(o,r),function(){this.onUpdate=function(){var e=this.doc.getValue(),t=[];try{e&&i(e)}catch(n){var r=this.doc.indexToPosition(n.at-1);t.push({row:r.row,column:r.column,text:n.message,type:\"error\"})}this.sender.emit(\"annotate\",t)}}.call(o.prototype)}),ace.define(\"ace/lib/es5-shim\",[\"require\",\"exports\",\"module\"],function(){function e(){}function t(e){try{return Object.defineProperty(e,\"sentinel\",{}),\"sentinel\"in e}catch(t){}}function n(e){return e=+e,e!==e?e=0:0!==e&&e!==1/0&&e!==-(1/0)&&(e=(e>0||-1)*Math.floor(Math.abs(e))),e}Function.prototype.bind||(Function.prototype.bind=function(t){var n=this;if(\"function\"!=typeof n)throw new TypeError(\"Function.prototype.bind called on incompatible \"+n);var r=h.call(arguments,1),i=function(){if(this instanceof i){var e=n.apply(this,r.concat(h.call(arguments)));return Object(e)===e?e:this}return n.apply(t,r.concat(h.call(arguments)))};return n.prototype&&(e.prototype=n.prototype,i.prototype=new e,e.prototype=null),i});var r,i,o,s,a,u=Function.prototype.call,c=Array.prototype,l=Object.prototype,h=c.slice,f=u.bind(l.toString),p=u.bind(l.hasOwnProperty);if((a=p(l,\"__defineGetter__\"))&&(r=u.bind(l.__defineGetter__),i=u.bind(l.__defineSetter__),o=u.bind(l.__lookupGetter__),s=u.bind(l.__lookupSetter__)),2!=[1,2].splice(0).length)if(function(){function e(e){var t=Array(e+2);return t[0]=t[1]=0,t}var t,n=[];return n.splice.apply(n,e(20)),n.splice.apply(n,e(26)),t=n.length,n.splice(5,0,\"XXX\"),t+1==n.length,t+1==n.length?!0:void 0}()){var d=Array.prototype.splice;Array.prototype.splice=function(e,t){return arguments.length?d.apply(this,[void 0===e?0:e,void 0===t?this.length-e:t].concat(h.call(arguments,2))):[]}}else Array.prototype.splice=function(e,t){var n=this.length;e>0?e>n&&(e=n):void 0==e?e=0:0>e&&(e=Math.max(n+e,0)),n>e+t||(t=n-e);var r=this.slice(e,e+t),i=h.call(arguments,2),o=i.length;if(e===n)o&&this.push.apply(this,i);else{var s=Math.min(t,n-e),a=e+s,u=a+o-s,c=n-a,l=n-s;if(a>u)for(var f=0;c>f;++f)this[u+f]=this[a+f];else if(u>a)for(f=c;f--;)this[u+f]=this[a+f];if(o&&e===l)this.length=l,this.push.apply(this,i);else for(this.length=l+o,f=0;o>f;++f)this[e+f]=i[f]}return r};Array.isArray||(Array.isArray=function(e){return\"[object Array]\"==f(e)});var m=Object(\"a\"),g=\"a\"!=m[0]||!(0 in m);if(Array.prototype.forEach||(Array.prototype.forEach=function(e){var t=N(this),n=g&&\"[object String]\"==f(this)?this.split(\"\"):t,r=arguments[1],i=-1,o=n.length>>>0;if(\"[object Function]\"!=f(e))throw new TypeError;for(;o>++i;)i in n&&e.call(r,n[i],i,t)}),Array.prototype.map||(Array.prototype.map=function(e){var t=N(this),n=g&&\"[object String]\"==f(this)?this.split(\"\"):t,r=n.length>>>0,i=Array(r),o=arguments[1];if(\"[object Function]\"!=f(e))throw new TypeError(e+\" is not a function\");for(var s=0;r>s;s++)s in n&&(i[s]=e.call(o,n[s],s,t));return i}),Array.prototype.filter||(Array.prototype.filter=function(e){var t,n=N(this),r=g&&\"[object String]\"==f(this)?this.split(\"\"):n,i=r.length>>>0,o=[],s=arguments[1];if(\"[object Function]\"!=f(e))throw new TypeError(e+\" is not a function\");for(var a=0;i>a;a++)a in r&&(t=r[a],e.call(s,t,a,n)&&o.push(t));return o}),Array.prototype.every||(Array.prototype.every=function(e){var t=N(this),n=g&&\"[object String]\"==f(this)?this.split(\"\"):t,r=n.length>>>0,i=arguments[1];if(\"[object Function]\"!=f(e))throw new TypeError(e+\" is not a function\");for(var o=0;r>o;o++)if(o in n&&!e.call(i,n[o],o,t))return!1;return!0}),Array.prototype.some||(Array.prototype.some=function(e){var t=N(this),n=g&&\"[object String]\"==f(this)?this.split(\"\"):t,r=n.length>>>0,i=arguments[1];if(\"[object Function]\"!=f(e))throw new TypeError(e+\" is not a function\");for(var o=0;r>o;o++)if(o in n&&e.call(i,n[o],o,t))return!0;return!1}),Array.prototype.reduce||(Array.prototype.reduce=function(e){var t=N(this),n=g&&\"[object String]\"==f(this)?this.split(\"\"):t,r=n.length>>>0;if(\"[object Function]\"!=f(e))throw new TypeError(e+\" is not a function\");if(!r&&1==arguments.length)throw new TypeError(\"reduce of empty array with no initial value\");var i,o=0;if(arguments.length>=2)i=arguments[1];else for(;;){if(o in n){i=n[o++];break}if(++o>=r)throw new TypeError(\"reduce of empty array with no initial value\")}for(;r>o;o++)o in n&&(i=e.call(void 0,i,n[o],o,t));return i}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(e){var t=N(this),n=g&&\"[object String]\"==f(this)?this.split(\"\"):t,r=n.length>>>0;if(\"[object Function]\"!=f(e))throw new TypeError(e+\" is not a function\");if(!r&&1==arguments.length)throw new TypeError(\"reduceRight of empty array with no initial value\");var i,o=r-1;if(arguments.length>=2)i=arguments[1];else for(;;){if(o in n){i=n[o--];break}if(0>--o)throw new TypeError(\"reduceRight of empty array with no initial value\")}do o in this&&(i=e.call(void 0,i,n[o],o,t));while(o--);return i}),Array.prototype.indexOf&&-1==[0,1].indexOf(1,2)||(Array.prototype.indexOf=function(e){var t=g&&\"[object String]\"==f(this)?this.split(\"\"):N(this),r=t.length>>>0;if(!r)return-1;var i=0;for(arguments.length>1&&(i=n(arguments[1])),i=i>=0?i:Math.max(0,r+i);r>i;i++)if(i in t&&t[i]===e)return i;return-1}),Array.prototype.lastIndexOf&&-1==[0,1].lastIndexOf(0,-3)||(Array.prototype.lastIndexOf=function(e){var t=g&&\"[object String]\"==f(this)?this.split(\"\"):N(this),r=t.length>>>0;if(!r)return-1;var i=r-1;for(arguments.length>1&&(i=Math.min(i,n(arguments[1]))),i=i>=0?i:r-Math.abs(i);i>=0;i--)if(i in t&&e===t[i])return i;return-1}),Object.getPrototypeOf||(Object.getPrototypeOf=function(e){return e.__proto__||(e.constructor?e.constructor.prototype:l)}),!Object.getOwnPropertyDescriptor){var v=\"Object.getOwnPropertyDescriptor called on a non-object: \";Object.getOwnPropertyDescriptor=function(e,t){if(\"object\"!=typeof e&&\"function\"!=typeof e||null===e)throw new TypeError(v+e);if(p(e,t)){var n,r,i;if(n={enumerable:!0,configurable:!0},a){var u=e.__proto__;e.__proto__=l;var r=o(e,t),i=s(e,t);if(e.__proto__=u,r||i)return r&&(n.get=r),i&&(n.set=i),n}return n.value=e[t],n}}}if(Object.getOwnPropertyNames||(Object.getOwnPropertyNames=function(e){return Object.keys(e)}),!Object.create){var y;y=null===Object.prototype.__proto__?function(){return{__proto__:null}}:function(){var e={};for(var t in e)e[t]=null;return e.constructor=e.hasOwnProperty=e.propertyIsEnumerable=e.isPrototypeOf=e.toLocaleString=e.toString=e.valueOf=e.__proto__=null,e},Object.create=function(e,t){var n;if(null===e)n=y();else{if(\"object\"!=typeof e)throw new TypeError(\"typeof prototype[\"+typeof e+\"] != 'object'\");var r=function(){};r.prototype=e,n=new r,n.__proto__=e}return void 0!==t&&Object.defineProperties(n,t),n}}if(Object.defineProperty){var b=t({}),w=\"undefined\"==typeof document||t(document.createElement(\"div\"));if(!b||!w)var _=Object.defineProperty}if(!Object.defineProperty||_){var k=\"Property description must be an object: \",x=\"Object.defineProperty called on non-object: \",E=\"getters & setters can not be defined on this javascript engine\";Object.defineProperty=function(e,t,n){if(\"object\"!=typeof e&&\"function\"!=typeof e||null===e)throw new TypeError(x+e);if(\"object\"!=typeof n&&\"function\"!=typeof n||null===n)throw new TypeError(k+n);if(_)try{return _.call(Object,e,t,n)}catch(u){}if(p(n,\"value\"))if(a&&(o(e,t)||s(e,t))){var c=e.__proto__;e.__proto__=l,delete e[t],e[t]=n.value,e.__proto__=c}else e[t]=n.value;else{if(!a)throw new TypeError(E);p(n,\"get\")&&r(e,t,n.get),p(n,\"set\")&&i(e,t,n.set)}return e}}Object.defineProperties||(Object.defineProperties=function(e,t){for(var n in t)p(t,n)&&Object.defineProperty(e,n,t[n]);return e}),Object.seal||(Object.seal=function(e){return e}),Object.freeze||(Object.freeze=function(e){return e});try{Object.freeze(function(){})}catch(T){Object.freeze=function(e){return function(t){return\"function\"==typeof t?t:e(t)}}(Object.freeze)}if(Object.preventExtensions||(Object.preventExtensions=function(e){return e}),Object.isSealed||(Object.isSealed=function(){return!1}),Object.isFrozen||(Object.isFrozen=function(){return!1}),Object.isExtensible||(Object.isExtensible=function(e){if(Object(e)===e)throw new TypeError;for(var t=\"\";p(e,t);)t+=\"?\";e[t]=!0;var n=p(e,t);return delete e[t],n}),!Object.keys){var S=!0,L=[\"toString\",\"toLocaleString\",\"valueOf\",\"hasOwnProperty\",\"isPrototypeOf\",\"propertyIsEnumerable\",\"constructor\"],A=L.length;for(var C in{toString:null})S=!1;Object.keys=function(e){if(\"object\"!=typeof e&&\"function\"!=typeof e||null===e)throw new TypeError(\"Object.keys called on a non-object\");var t=[];for(var n in e)p(e,n)&&t.push(n);if(S)for(var r=0,i=A;i>r;r++){var o=L[r];p(e,o)&&t.push(o)}return t}}Date.now||(Date.now=function(){return(new Date).getTime()});var R=\"\t\\n\u000b\\f\\r   ᠎             　\\u2028\\u2029﻿\";if(!String.prototype.trim||R.trim()){R=\"[\"+R+\"]\";var O=RegExp(\"^\"+R+R+\"*\"),j=RegExp(R+R+\"*$\");String.prototype.trim=function(){return(this+\"\").replace(O,\"\").replace(j,\"\")}}var N=function(e){if(null==e)throw new TypeError(\"can't convert \"+e+\" to object\");return Object(e)}});";