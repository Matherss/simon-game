(function(e){function t(t){for(var c,u,r=t[0],s=t[1],a=t[2],h=0,p=[];h<r.length;h++)u=r[h],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,a||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],c=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(c=!1)}c&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var c={},o={app:0},i=[];function u(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=c,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)u.d(n,c,function(t){return e[t]}.bind(null,c));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/simon-game/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=t,r=r.slice();for(var a=0;a<r.length;a++)t(r[a]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),o={class:"container"},i={class:"grid-buttons"},u={class:"levels"};function r(e,t,n,r,s,a){return Object(c["e"])(),Object(c["b"])("div",o,[Object(c["c"])("div",i,[Object(c["c"])("div",{class:Object(c["d"])(["button button-red",{active:s.playingButton[1]}]),onClick:t[0]||(t[0]=function(e){return a.clickBtn(1)})},null,2),Object(c["c"])("div",{class:Object(c["d"])(["button button-blue",{active:s.playingButton[2]}]),onClick:t[1]||(t[1]=function(e){return a.clickBtn(2)})},null,2),Object(c["c"])("div",{class:Object(c["d"])(["button button-green",{active:s.playingButton[3]}]),onClick:t[2]||(t[2]=function(e){return a.clickBtn(3)})},null,2),Object(c["c"])("div",{class:Object(c["d"])(["button button-orange",{active:s.playingButton[4]}]),onClick:t[3]||(t[3]=function(e){return a.clickBtn(4)})},null,2)]),Object(c["c"])("div",u,[Object(c["c"])("button",{class:Object(c["d"])(["level",{active:"easy"===s.activeButton}]),onClick:t[4]||(t[4]=function(e){s.gameMode="easy",s.activeButton="easy"})}," Легко ",2),Object(c["c"])("button",{class:Object(c["d"])(["level",{active:"normal"===s.activeButton}]),onClick:t[5]||(t[5]=function(e){s.gameMode="normal",s.activeButton="normal"})}," Нормально ",2),Object(c["c"])("button",{class:Object(c["d"])(["level",{active:"hard"===s.activeButton}]),onClick:t[6]||(t[6]=function(e){s.gameMode="hard",s.activeButton="hard"})}," Сложно ",2)]),Object(c["c"])("button",{onClick:t[7]||(t[7]=function(){return a.startGame&&a.startGame.apply(a,arguments)})},"Старт"),Object(c["c"])("p",null,"Счёт: "+Object(c["f"])(s.score),1)])}var s={name:"App",data:function(){return{play:!1,gameMode:"easy",activeButton:"easy",defeat:!1,sounds:{1:"sounds/red.mp3",2:"sounds/blue.mp3",3:"sounds/green.mp3",4:"sounds/orange.mp3"},playingButton:{1:!1,2:!1,3:!1,4:!1},score:0,sequence:[],playerSequence:[],sequenceInterval:null,isClickable:!1}},methods:{sound:function(e){if(this.sounds[e]){var t=new Audio(this.sounds[e]);t.play()}},startGame:function(){this.play=!0,this.sequence=[],this.playerSequence=[],this.defeat=!1,this.score=0,clearInterval(this.sequenceInterval),this.showSequence()},clickBtn:function(e){this.isClickable&&(this.sound(e),this.lightUp(e),this.playerSequence.push(e),this.checkWinLose())},checkWinLose:function(){for(var e=0;e<this.playerSequence.length;e++)this.playerSequence[e]!==this.sequence[e]&&(this.playerSequence=[],alert("Defeat"),this.defeat=!0,this.showSequence(!0));this.playerSequence.length===this.sequence.length&&(this.playerSequence=[],this.score++,20===this.score?(this.isClickable=!1,alert("Victory")):this.showSequence())},lightUp:function(e){var t=this;this.playingButton[e]=!0,setTimeout((function(){t.playingButton[e]=!1}),300)},showSequence:function(e){var t=this,n=0,c=0===this.sequence.length?1e3:this.getModeSpeed(this.gameMode);this.isClickable=!1,e||this.sequence.push(Math.floor(4*Math.random()+1)),this.sequenceInterval=setInterval((function(){if(n>=t.sequence.length)return clearInterval(t.sequenceInterval),t.isClickable=!0;t.sound(t.sequence[n]),t.lightUp(t.sequence[n]),n++}),c)},getModeSpeed:function(e){return"easy"===e?1500:"normal"===e?1e3:400}},components:{}},a=(n("7a83"),n("6b0d")),l=n.n(a);const h=l()(s,[["render",r]]);var p=h;Object(c["a"])(p).mount("#app")},"7a83":function(e,t,n){"use strict";n("fe2d")},fe2d:function(e,t,n){}});
//# sourceMappingURL=app.48d7439c.js.map