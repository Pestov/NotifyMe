var NotifyMe={};!function(n,t){var o;return o=function(){function n(n,t){this.title=n,this.options=t}var t,o,i,r,e;return e=function(){function n(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return n()+n()+"-"+n()+"-"+n()+"-"+n()+"-"+n()+n()+n()},r={icon:"",body:"This is the Default Body",lang:"en-US",tag:e(),dir:"ltr"},o=function(n,t){var o;o=new Notification(n,t),o.onclick=function(){t.onclick()},o.onshow=function(){t.onshow()},o.onerror=function(){t.onerror()},o.onclose=function(){t.onclose()}},i=function(n,t){for(var o in t)try{n[o]=t[o].constructor==Object?MergeRecursive(n[o],t[o]):t[o]}catch(i){n[o]=t[o]}return n},t=function(n,t){Notification.requestPermission(function(e){"granted"===e?o(n,i(r,t)):"denied"===e&&console.log("Request denied by the User")})},n.prototype.launch=function(){return t(this.title,this.options)},n}(),t.launch=function(n,t){var i=new o(n,t);i.launch()},n.NotifyMe}(this,NotifyMe);