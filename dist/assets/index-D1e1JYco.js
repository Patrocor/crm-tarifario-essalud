import{n as e,t}from"./rolldown-runtime-CbXtAM7H.js";import{n,r,t as i}from"./react-CPYPbbnH.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var a=n(),o=r(),s=()=>{window.va||(window.va=function(...e){window.vaq||(window.vaq=[]),window.vaq.push(e)})},c=`@vercel/analytics`,l=`2.0.1`;function u(){return typeof window<`u`}function d(){return`production`}function f(e=`auto`){if(e===`auto`){window.vam=d();return}window.vam=e}function p(){return(u()?window.vam:d())||`production`}function m(){return p()===`development`}function h(e){return e.scriptSrc?_(e.scriptSrc):m()?`https://va.vercel-scripts.com/v1/script.debug.js`:e.basePath?_(`${e.basePath}/insights/script.js`):`/_vercel/insights/script.js`}function g(e,t){let n=e;if(t)try{n={...JSON.parse(t)?.analytics,...e}}catch{}f(n.mode);let r={sdkn:c+(n.framework?`/${n.framework}`:``),sdkv:l};return n.disableAutoTrack&&(r.disableAutoTrack=`1`),n.viewEndpoint&&(r.viewEndpoint=_(n.viewEndpoint)),n.eventEndpoint&&(r.eventEndpoint=_(n.eventEndpoint)),n.sessionEndpoint&&(r.sessionEndpoint=_(n.sessionEndpoint)),m()&&n.debug===!1&&(r.debug=`false`),n.dsn&&(r.dsn=n.dsn),n.endpoint?r.endpoint=n.endpoint:n.basePath&&(r.endpoint=_(`${n.basePath}/insights`)),{beforeSend:n.beforeSend,src:h(n),dataset:r}}function _(e){return e.startsWith(`http://`)||e.startsWith(`https://`)||e.startsWith(`/`)?e:`/${e}`}function v(e={debug:!0},t){var n;if(!u())return;let{beforeSend:r,src:i,dataset:a}=g(e,t);if(s(),r&&((n=window.va)==null||n.call(window,`beforeSend`,r)),document.head.querySelector(`script[src*="${i}"]`))return;let o=document.createElement(`script`);o.src=i;for(let[e,t]of Object.entries(a))o.dataset[e]=t;o.defer=!0,o.onerror=()=>{let e=m()?`Please check if any ad blockers are enabled and try again.`:`Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.`;console.log(`[Vercel Web Analytics] Failed to load script from ${i}. ${e}`)},document.head.appendChild(o)}function y({route:e,path:t}){var n;(n=window.va)==null||n.call(window,`pageview`,{route:e,path:t})}function b(){if(!(typeof process>`u`))return{}.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH}function x(){if(!(typeof process>`u`))return{}.REACT_APP_VERCEL_OBSERVABILITY_CLIENT_CONFIG}function S(e){return(0,o.useEffect)(()=>{var t;e.beforeSend&&((t=window.va)==null||t.call(window,`beforeSend`,e.beforeSend))},[e.beforeSend]),(0,o.useEffect)(()=>{v({framework:e.framework||`react`,basePath:e.basePath??b(),...e.route!==void 0&&{disableAutoTrack:!0},...e},e.configString??x())},[]),(0,o.useEffect)(()=>{e.route&&e.path&&y({route:e.route,path:e.path})},[e.route,e.path]),null}var C=()=>{window.si||(window.si=function(...e){window.siq=window.siq||[],window.siq.push(e)})},w=`@vercel/speed-insights`,T=`2.0.0`;function E(){return typeof window<`u`}function D(){return`production`}function ee(){return D()===`development`}function O(e){return e.scriptSrc?k(e.scriptSrc):ee()?`https://va.vercel-scripts.com/v1/speed-insights/script.debug.js`:e.dsn?`https://va.vercel-scripts.com/v1/speed-insights/script.js`:e.basePath?k(`${e.basePath}/speed-insights/script.js`):`/_vercel/speed-insights/script.js`}function te(e,t){let n=e;if(t)try{n={...JSON.parse(t)?.speedInsights,...e}}catch{}let r={sdkn:w+(n.framework?`/${n.framework}`:``),sdkv:T};return n.sampleRate&&(r.sampleRate=n.sampleRate.toString()),n.route&&(r.route=n.route),ee()&&n.debug===!1&&(r.debug=`false`),n.dsn&&(r.dsn=n.dsn),n.endpoint?r.endpoint=k(n.endpoint):n.basePath&&(r.endpoint=k(`${n.basePath}/speed-insights/vitals`)),{src:O(n),beforeSend:n.beforeSend,dataset:r}}function k(e){return e.startsWith(`http://`)||e.startsWith(`https://`)||e.startsWith(`/`)?e:`/${e}`}function ne(e={},t){var n;if(!E()||e.route===null)return null;C();let{beforeSend:r,src:i,dataset:a}=te(e,t);if(document.head.querySelector(`script[src*="${i}"]`))return null;r&&((n=window.si)==null||n.call(window,`beforeSend`,r));let o=document.createElement(`script`);o.src=i,o.defer=!0;for(let[e,t]of Object.entries(a))o.dataset[e]=t;return o.onerror=()=>{console.log(`[Vercel Speed Insights] Failed to load script from ${i}. Please check if any content blockers are enabled and try again.`)},document.head.appendChild(o),{setRoute:e=>{o.dataset.route=e??void 0}}}function re(){if(!(typeof process>`u`))return{}.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH}function ie(){if(!(typeof process>`u`))return{}.REACT_APP_VERCEL_OBSERVABILITY_CLIENT_CONFIG}function ae(e){(0,o.useEffect)(()=>{var t;e.beforeSend&&((t=window.si)==null||t.call(window,`beforeSend`,e.beforeSend))},[e.beforeSend]);let t=(0,o.useRef)(null);return(0,o.useEffect)(()=>{if(!t.current){let n=ne({framework:e.framework??`react`,basePath:e.basePath??re(),...e},e.configString??ie());n&&(t.current=n.setRoute)}},[e]),(0,o.useEffect)(()=>{t.current&&e.route&&t.current(e.route)},[e.route]),null}var oe=t(((e,t)=>{t.exports=function(){return typeof Promise==`function`&&Promise.prototype&&Promise.prototype.then}})),A=t((e=>{var t,n=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e.getSymbolSize=function(e){if(!e)throw Error(`"version" cannot be null or undefined`);if(e<1||e>40)throw Error(`"version" should be in range from 1 to 40`);return e*4+17},e.getSymbolTotalCodewords=function(e){return n[e]},e.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t},e.setToSJISFunction=function(e){if(typeof e!=`function`)throw Error(`"toSJISFunc" is not a valid function.`);t=e},e.isKanjiModeEnabled=function(){return t!==void 0},e.toSJIS=function(e){return t(e)}})),se=t((e=>{e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(t){if(typeof t!=`string`)throw Error(`Param is not a string`);switch(t.toLowerCase()){case`l`:case`low`:return e.L;case`m`:case`medium`:return e.M;case`q`:case`quartile`:return e.Q;case`h`:case`high`:return e.H;default:throw Error(`Unknown EC Level: `+t)}}e.isValid=function(e){return e&&e.bit!==void 0&&e.bit>=0&&e.bit<4},e.from=function(n,r){if(e.isValid(n))return n;try{return t(n)}catch{return r}}})),ce=t(((e,t)=>{function n(){this.buffer=[],this.length=0}n.prototype={get:function(e){let t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)==1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},t.exports=n})),le=t(((e,t)=>{function n(e){if(!e||e<1)throw Error(`BitMatrix size must be defined and greater than 0`);this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}n.prototype.set=function(e,t,n,r){let i=e*this.size+t;this.data[i]=n,r&&(this.reservedBit[i]=!0)},n.prototype.get=function(e,t){return this.data[e*this.size+t]},n.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n},n.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},t.exports=n})),ue=t((e=>{var t=A().getSymbolSize;e.getRowColCoords=function(e){if(e===1)return[];let n=Math.floor(e/7)+2,r=t(e),i=r===145?26:Math.ceil((r-13)/(2*n-2))*2,a=[r-7];for(let e=1;e<n-1;e++)a[e]=a[e-1]-i;return a.push(6),a.reverse()},e.getPositions=function(t){let n=[],r=e.getRowColCoords(t),i=r.length;for(let e=0;e<i;e++)for(let t=0;t<i;t++)e===0&&t===0||e===0&&t===i-1||e===i-1&&t===0||n.push([r[e],r[t]]);return n}})),de=t((e=>{var t=A().getSymbolSize,n=7;e.getPositions=function(e){let r=t(e);return[[0,0],[r-n,0],[0,r-n]]}})),fe=t((e=>{e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(e){return e!=null&&e!==``&&!isNaN(e)&&e>=0&&e<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(e){let n=e.size,r=0,i=0,a=0,o=null,s=null;for(let c=0;c<n;c++){i=a=0,o=s=null;for(let l=0;l<n;l++){let n=e.get(c,l);n===o?i++:(i>=5&&(r+=t.N1+(i-5)),o=n,i=1),n=e.get(l,c),n===s?a++:(a>=5&&(r+=t.N1+(a-5)),s=n,a=1)}i>=5&&(r+=t.N1+(i-5)),a>=5&&(r+=t.N1+(a-5))}return r},e.getPenaltyN2=function(e){let n=e.size,r=0;for(let t=0;t<n-1;t++)for(let i=0;i<n-1;i++){let n=e.get(t,i)+e.get(t,i+1)+e.get(t+1,i)+e.get(t+1,i+1);(n===4||n===0)&&r++}return r*t.N2},e.getPenaltyN3=function(e){let n=e.size,r=0,i=0,a=0;for(let t=0;t<n;t++){i=a=0;for(let o=0;o<n;o++)i=i<<1&2047|e.get(t,o),o>=10&&(i===1488||i===93)&&r++,a=a<<1&2047|e.get(o,t),o>=10&&(a===1488||a===93)&&r++}return r*t.N3},e.getPenaltyN4=function(e){let n=0,r=e.data.length;for(let t=0;t<r;t++)n+=e.data[t];return Math.abs(Math.ceil(n*100/r/5)-10)*t.N4};function n(t,n,r){switch(t){case e.Patterns.PATTERN000:return(n+r)%2==0;case e.Patterns.PATTERN001:return n%2==0;case e.Patterns.PATTERN010:return r%3==0;case e.Patterns.PATTERN011:return(n+r)%3==0;case e.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(r/3))%2==0;case e.Patterns.PATTERN101:return n*r%2+n*r%3==0;case e.Patterns.PATTERN110:return(n*r%2+n*r%3)%2==0;case e.Patterns.PATTERN111:return(n*r%3+(n+r)%2)%2==0;default:throw Error(`bad maskPattern:`+t)}}e.applyMask=function(e,t){let r=t.size;for(let i=0;i<r;i++)for(let a=0;a<r;a++)t.isReserved(a,i)||t.xor(a,i,n(e,a,i))},e.getBestMask=function(t,n){let r=Object.keys(e.Patterns).length,i=0,a=1/0;for(let o=0;o<r;o++){n(o),e.applyMask(o,t);let r=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(o,t),r<a&&(a=r,i=o)}return i}})),pe=t((e=>{var t=se(),n=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],r=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];e.getBlocksCount=function(e,r){switch(r){case t.L:return n[(e-1)*4+0];case t.M:return n[(e-1)*4+1];case t.Q:return n[(e-1)*4+2];case t.H:return n[(e-1)*4+3];default:return}},e.getTotalCodewordsCount=function(e,n){switch(n){case t.L:return r[(e-1)*4+0];case t.M:return r[(e-1)*4+1];case t.Q:return r[(e-1)*4+2];case t.H:return r[(e-1)*4+3];default:return}}})),j=t((e=>{var t=new Uint8Array(512),n=new Uint8Array(256);(function(){let e=1;for(let r=0;r<255;r++)t[r]=e,n[e]=r,e<<=1,e&256&&(e^=285);for(let e=255;e<512;e++)t[e]=t[e-255]})(),e.log=function(e){if(e<1)throw Error(`log(`+e+`)`);return n[e]},e.exp=function(e){return t[e]},e.mul=function(e,r){return e===0||r===0?0:t[n[e]+n[r]]}})),me=t((e=>{var t=j();e.mul=function(e,n){let r=new Uint8Array(e.length+n.length-1);for(let i=0;i<e.length;i++)for(let a=0;a<n.length;a++)r[i+a]^=t.mul(e[i],n[a]);return r},e.mod=function(e,n){let r=new Uint8Array(e);for(;r.length-n.length>=0;){let e=r[0];for(let i=0;i<n.length;i++)r[i]^=t.mul(n[i],e);let i=0;for(;i<r.length&&r[i]===0;)i++;r=r.slice(i)}return r},e.generateECPolynomial=function(n){let r=new Uint8Array([1]);for(let i=0;i<n;i++)r=e.mul(r,new Uint8Array([1,t.exp(i)]));return r}})),M=t(((e,t)=>{var n=me();function r(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}r.prototype.initialize=function(e){this.degree=e,this.genPoly=n.generateECPolynomial(this.degree)},r.prototype.encode=function(e){if(!this.genPoly)throw Error(`Encoder not initialized`);let t=new Uint8Array(e.length+this.degree);t.set(e);let r=n.mod(t,this.genPoly),i=this.degree-r.length;if(i>0){let e=new Uint8Array(this.degree);return e.set(r,i),e}return r},t.exports=r})),he=t((e=>{e.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}})),ge=t((e=>{var t=`[0-9]+`,n=`[A-Z $%*+\\-./:]+`,r=`(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+`;r=r.replace(/u/g,`\\u`);var i=`(?:(?![A-Z0-9 $%*+\\-./:]|`+r+`)(?:.|[\r
]))+`;e.KANJI=new RegExp(r,`g`),e.BYTE_KANJI=RegExp(`[^A-Z0-9 $%*+\\-./:]+`,`g`),e.BYTE=new RegExp(i,`g`),e.NUMERIC=new RegExp(t,`g`),e.ALPHANUMERIC=new RegExp(n,`g`);var a=RegExp(`^`+r+`$`),o=RegExp(`^[0-9]+$`),s=RegExp(`^[A-Z0-9 $%*+\\-./:]+$`);e.testKanji=function(e){return a.test(e)},e.testNumeric=function(e){return o.test(e)},e.testAlphanumeric=function(e){return s.test(e)}})),N=t((e=>{var t=he(),n=ge();e.NUMERIC={id:`Numeric`,bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:`Alphanumeric`,bit:2,ccBits:[9,11,13]},e.BYTE={id:`Byte`,bit:4,ccBits:[8,16,16]},e.KANJI={id:`Kanji`,bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(e,n){if(!e.ccBits)throw Error(`Invalid mode: `+e);if(!t.isValid(n))throw Error(`Invalid version: `+n);return n>=1&&n<10?e.ccBits[0]:n<27?e.ccBits[1]:e.ccBits[2]},e.getBestModeForData=function(t){return n.testNumeric(t)?e.NUMERIC:n.testAlphanumeric(t)?e.ALPHANUMERIC:n.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(e){if(e&&e.id)return e.id;throw Error(`Invalid mode`)},e.isValid=function(e){return e&&e.bit&&e.ccBits};function r(t){if(typeof t!=`string`)throw Error(`Param is not a string`);switch(t.toLowerCase()){case`numeric`:return e.NUMERIC;case`alphanumeric`:return e.ALPHANUMERIC;case`kanji`:return e.KANJI;case`byte`:return e.BYTE;default:throw Error(`Unknown mode: `+t)}}e.from=function(t,n){if(e.isValid(t))return t;try{return r(t)}catch{return n}}})),_e=t((e=>{var t=A(),n=pe(),r=se(),i=N(),a=he(),o=7973,s=t.getBCHDigit(o);function c(t,n,r){for(let i=1;i<=40;i++)if(n<=e.getCapacity(i,r,t))return i}function l(e,t){return i.getCharCountIndicator(e,t)+4}function u(e,t){let n=0;return e.forEach(function(e){let r=l(e.mode,t);n+=r+e.getBitsLength()}),n}function d(t,n){for(let r=1;r<=40;r++)if(u(t,r)<=e.getCapacity(r,n,i.MIXED))return r}e.from=function(e,t){return a.isValid(e)?parseInt(e,10):t},e.getCapacity=function(e,r,o){if(!a.isValid(e))throw Error(`Invalid QR Code version`);o===void 0&&(o=i.BYTE);let s=(t.getSymbolTotalCodewords(e)-n.getTotalCodewordsCount(e,r))*8;if(o===i.MIXED)return s;let c=s-l(o,e);switch(o){case i.NUMERIC:return Math.floor(c/10*3);case i.ALPHANUMERIC:return Math.floor(c/11*2);case i.KANJI:return Math.floor(c/13);case i.BYTE:default:return Math.floor(c/8)}},e.getBestVersionForData=function(e,t){let n,i=r.from(t,r.M);if(Array.isArray(e)){if(e.length>1)return d(e,i);if(e.length===0)return 1;n=e[0]}else n=e;return c(n.mode,n.getLength(),i)},e.getEncodedBits=function(e){if(!a.isValid(e)||e<7)throw Error(`Invalid QR Code version`);let n=e<<12;for(;t.getBCHDigit(n)-s>=0;)n^=o<<t.getBCHDigit(n)-s;return e<<12|n}})),ve=t((e=>{var t=A(),n=1335,r=21522,i=t.getBCHDigit(n);e.getEncodedBits=function(e,a){let o=e.bit<<3|a,s=o<<10;for(;t.getBCHDigit(s)-i>=0;)s^=n<<t.getBCHDigit(s)-i;return(o<<10|s)^r}})),ye=t(((e,t)=>{var n=N();function r(e){this.mode=n.NUMERIC,this.data=e.toString()}r.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(e){let t,n,r;for(t=0;t+3<=this.data.length;t+=3)n=this.data.substr(t,3),r=parseInt(n,10),e.put(r,10);let i=this.data.length-t;i>0&&(n=this.data.substr(t),r=parseInt(n,10),e.put(r,i*3+1))},t.exports=r})),be=t(((e,t)=>{var n=N(),r=`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:`.split(``);function i(e){this.mode=n.ALPHANUMERIC,this.data=e}i.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t=0;for(;t+2<=this.data.length;t+=2){let n=r.indexOf(this.data[t])*45;n+=r.indexOf(this.data[t+1]),e.put(n,11)}this.data.length%2&&e.put(r.indexOf(this.data[t]),6)},t.exports=i})),xe=t(((e,t)=>{var n=N();function r(e){this.mode=n.BYTE,this.data=typeof e==`string`?new TextEncoder().encode(e):new Uint8Array(e)}r.getBitsLength=function(e){return e*8},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(e){for(let t=0,n=this.data.length;t<n;t++)e.put(this.data[t],8)},t.exports=r})),Se=t(((e,t)=>{var n=N(),r=A();function i(e){this.mode=n.KANJI,this.data=e}i.getBitsLength=function(e){return e*13},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t=0;for(;t<this.data.length;t++){let n=r.toSJIS(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw Error(`Invalid SJIS character: `+this.data[t]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),e.put(n,13)}},t.exports=i})),Ce=t(((e,t)=>{var n={single_source_shortest_paths:function(e,t,r){var i={},a={};a[t]=0;var o=n.PriorityQueue.make();o.push(t,0);for(var s,c,l,u,d,f,p,m,h;!o.empty();)for(l in s=o.pop(),c=s.value,u=s.cost,d=e[c]||{},d)d.hasOwnProperty(l)&&(f=d[l],p=u+f,m=a[l],h=a[l]===void 0,(h||m>p)&&(a[l]=p,o.push(l,p),i[l]=c));if(r!==void 0&&a[r]===void 0){var g=[`Could not find a path from `,t,` to `,r,`.`].join(``);throw Error(g)}return i},extract_shortest_path_from_predecessor_list:function(e,t){for(var n=[],r=t;r;)n.push(r),e[r],r=e[r];return n.reverse(),n},find_path:function(e,t,r){var i=n.single_source_shortest_paths(e,t,r);return n.extract_shortest_path_from_predecessor_list(i,r)},PriorityQueue:{make:function(e){var t=n.PriorityQueue,r={},i;for(i in e||={},t)t.hasOwnProperty(i)&&(r[i]=t[i]);return r.queue=[],r.sorter=e.sorter||t.default_sorter,r},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){var n={value:e,cost:t};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t!==void 0&&(t.exports=n)})),we=t((e=>{var t=N(),n=ye(),r=be(),i=xe(),a=Se(),o=ge(),s=A(),c=Ce();function l(e){return unescape(encodeURIComponent(e)).length}function u(e,t,n){let r=[],i;for(;(i=e.exec(n))!==null;)r.push({data:i[0],index:i.index,mode:t,length:i[0].length});return r}function d(e){let n=u(o.NUMERIC,t.NUMERIC,e),r=u(o.ALPHANUMERIC,t.ALPHANUMERIC,e),i,a;return s.isKanjiModeEnabled()?(i=u(o.BYTE,t.BYTE,e),a=u(o.KANJI,t.KANJI,e)):(i=u(o.BYTE_KANJI,t.BYTE,e),a=[]),n.concat(r,i,a).sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}function f(e,o){switch(o){case t.NUMERIC:return n.getBitsLength(e);case t.ALPHANUMERIC:return r.getBitsLength(e);case t.KANJI:return a.getBitsLength(e);case t.BYTE:return i.getBitsLength(e)}}function p(e){return e.reduce(function(e,t){let n=e.length-1>=0?e[e.length-1]:null;return n&&n.mode===t.mode?(e[e.length-1].data+=t.data,e):(e.push(t),e)},[])}function m(e){let n=[];for(let r=0;r<e.length;r++){let i=e[r];switch(i.mode){case t.NUMERIC:n.push([i,{data:i.data,mode:t.ALPHANUMERIC,length:i.length},{data:i.data,mode:t.BYTE,length:i.length}]);break;case t.ALPHANUMERIC:n.push([i,{data:i.data,mode:t.BYTE,length:i.length}]);break;case t.KANJI:n.push([i,{data:i.data,mode:t.BYTE,length:l(i.data)}]);break;case t.BYTE:n.push([{data:i.data,mode:t.BYTE,length:l(i.data)}])}}return n}function h(e,n){let r={},i={start:{}},a=[`start`];for(let o=0;o<e.length;o++){let s=e[o],c=[];for(let e=0;e<s.length;e++){let l=s[e],u=``+o+e;c.push(u),r[u]={node:l,lastCount:0},i[u]={};for(let e=0;e<a.length;e++){let o=a[e];r[o]&&r[o].node.mode===l.mode?(i[o][u]=f(r[o].lastCount+l.length,l.mode)-f(r[o].lastCount,l.mode),r[o].lastCount+=l.length):(r[o]&&(r[o].lastCount=l.length),i[o][u]=f(l.length,l.mode)+4+t.getCharCountIndicator(l.mode,n))}}a=c}for(let e=0;e<a.length;e++)i[a[e]].end=0;return{map:i,table:r}}function g(e,o){let c,l=t.getBestModeForData(e);if(c=t.from(o,l),c!==t.BYTE&&c.bit<l.bit)throw Error(`"`+e+`" cannot be encoded with mode `+t.toString(c)+`.
 Suggested mode is: `+t.toString(l));switch(c===t.KANJI&&!s.isKanjiModeEnabled()&&(c=t.BYTE),c){case t.NUMERIC:return new n(e);case t.ALPHANUMERIC:return new r(e);case t.KANJI:return new a(e);case t.BYTE:return new i(e)}}e.fromArray=function(e){return e.reduce(function(e,t){return typeof t==`string`?e.push(g(t,null)):t.data&&e.push(g(t.data,t.mode)),e},[])},e.fromString=function(t,n){let r=h(m(d(t,s.isKanjiModeEnabled())),n),i=c.find_path(r.map,`start`,`end`),a=[];for(let e=1;e<i.length-1;e++)a.push(r.table[i[e]].node);return e.fromArray(p(a))},e.rawSplit=function(t){return e.fromArray(d(t,s.isKanjiModeEnabled()))}})),Te=t((e=>{var t=A(),n=se(),r=ce(),i=le(),a=ue(),o=de(),s=fe(),c=pe(),l=M(),u=_e(),d=ve(),f=N(),p=we();function m(e,t){let n=e.size,r=o.getPositions(t);for(let t=0;t<r.length;t++){let i=r[t][0],a=r[t][1];for(let t=-1;t<=7;t++)if(!(i+t<=-1||n<=i+t))for(let r=-1;r<=7;r++)a+r<=-1||n<=a+r||(t>=0&&t<=6&&(r===0||r===6)||r>=0&&r<=6&&(t===0||t===6)||t>=2&&t<=4&&r>=2&&r<=4?e.set(i+t,a+r,!0,!0):e.set(i+t,a+r,!1,!0))}}function h(e){let t=e.size;for(let n=8;n<t-8;n++){let t=n%2==0;e.set(n,6,t,!0),e.set(6,n,t,!0)}}function g(e,t){let n=a.getPositions(t);for(let t=0;t<n.length;t++){let r=n[t][0],i=n[t][1];for(let t=-2;t<=2;t++)for(let n=-2;n<=2;n++)t===-2||t===2||n===-2||n===2||t===0&&n===0?e.set(r+t,i+n,!0,!0):e.set(r+t,i+n,!1,!0)}}function _(e,t){let n=e.size,r=u.getEncodedBits(t),i,a,o;for(let t=0;t<18;t++)i=Math.floor(t/3),a=t%3+n-8-3,o=(r>>t&1)==1,e.set(i,a,o,!0),e.set(a,i,o,!0)}function v(e,t,n){let r=e.size,i=d.getEncodedBits(t,n),a,o;for(a=0;a<15;a++)o=(i>>a&1)==1,a<6?e.set(a,8,o,!0):a<8?e.set(a+1,8,o,!0):e.set(r-15+a,8,o,!0),a<8?e.set(8,r-a-1,o,!0):a<9?e.set(8,15-a-1+1,o,!0):e.set(8,15-a-1,o,!0);e.set(r-8,8,1,!0)}function y(e,t){let n=e.size,r=-1,i=n-1,a=7,o=0;for(let s=n-1;s>0;s-=2)for(s===6&&s--;;){for(let n=0;n<2;n++)if(!e.isReserved(i,s-n)){let r=!1;o<t.length&&(r=(t[o]>>>a&1)==1),e.set(i,s-n,r),a--,a===-1&&(o++,a=7)}if(i+=r,i<0||n<=i){i-=r,r=-r;break}}}function b(e,n,i){let a=new r;i.forEach(function(t){a.put(t.mode.bit,4),a.put(t.getLength(),f.getCharCountIndicator(t.mode,e)),t.write(a)});let o=(t.getSymbolTotalCodewords(e)-c.getTotalCodewordsCount(e,n))*8;for(a.getLengthInBits()+4<=o&&a.put(0,4);a.getLengthInBits()%8!=0;)a.putBit(0);let s=(o-a.getLengthInBits())/8;for(let e=0;e<s;e++)a.put(e%2?17:236,8);return x(a,e,n)}function x(e,n,r){let i=t.getSymbolTotalCodewords(n),a=i-c.getTotalCodewordsCount(n,r),o=c.getBlocksCount(n,r),s=o-i%o,u=Math.floor(i/o),d=Math.floor(a/o),f=d+1,p=u-d,m=new l(p),h=0,g=Array(o),_=Array(o),v=0,y=new Uint8Array(e.buffer);for(let e=0;e<o;e++){let t=e<s?d:f;g[e]=y.slice(h,h+t),_[e]=m.encode(g[e]),h+=t,v=Math.max(v,t)}let b=new Uint8Array(i),x=0,S,C;for(S=0;S<v;S++)for(C=0;C<o;C++)S<g[C].length&&(b[x++]=g[C][S]);for(S=0;S<p;S++)for(C=0;C<o;C++)b[x++]=_[C][S];return b}function S(e,n,r,a){let o;if(Array.isArray(e))o=p.fromArray(e);else if(typeof e==`string`){let t=n;if(!t){let n=p.rawSplit(e);t=u.getBestVersionForData(n,r)}o=p.fromString(e,t||40)}else throw Error(`Invalid data`);let c=u.getBestVersionForData(o,r);if(!c)throw Error(`The amount of data is too big to be stored in a QR Code`);if(!n)n=c;else if(n<c)throw Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+c+`.
`);let l=b(n,r,o),d=new i(t.getSymbolSize(n));return m(d,n),h(d),g(d,n),v(d,r,0),n>=7&&_(d,n),y(d,l),isNaN(a)&&(a=s.getBestMask(d,v.bind(null,d,r))),s.applyMask(a,d),v(d,r,a),{modules:d,version:n,errorCorrectionLevel:r,maskPattern:a,segments:o}}e.create=function(e,r){if(e===void 0||e===``)throw Error(`No input text`);let i=n.M,a,o;return r!==void 0&&(i=n.from(r.errorCorrectionLevel,n.M),a=u.from(r.version),o=s.from(r.maskPattern),r.toSJISFunc&&t.setToSJISFunction(r.toSJISFunc)),S(e,a,i,o)}})),Ee=t((e=>{function t(e){if(typeof e==`number`&&(e=e.toString()),typeof e!=`string`)throw Error(`Color should be defined as hex string`);let t=e.slice().replace(`#`,``).split(``);if(t.length<3||t.length===5||t.length>8)throw Error(`Invalid hex color: `+e);(t.length===3||t.length===4)&&(t=Array.prototype.concat.apply([],t.map(function(e){return[e,e]}))),t.length===6&&t.push(`F`,`F`);let n=parseInt(t.join(``),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:n&255,hex:`#`+t.slice(0,6).join(``)}}e.getOptions=function(e){e||={},e.color||(e.color={});let n=e.margin===void 0||e.margin===null||e.margin<0?4:e.margin,r=e.width&&e.width>=21?e.width:void 0,i=e.scale||4;return{width:r,scale:r?4:i,margin:n,color:{dark:t(e.color.dark||`#000000ff`),light:t(e.color.light||`#ffffffff`)},type:e.type,rendererOpts:e.rendererOpts||{}}},e.getScale=function(e,t){return t.width&&t.width>=e+t.margin*2?t.width/(e+t.margin*2):t.scale},e.getImageWidth=function(t,n){let r=e.getScale(t,n);return Math.floor((t+n.margin*2)*r)},e.qrToImageData=function(t,n,r){let i=n.modules.size,a=n.modules.data,o=e.getScale(i,r),s=Math.floor((i+r.margin*2)*o),c=r.margin*o,l=[r.color.light,r.color.dark];for(let e=0;e<s;e++)for(let n=0;n<s;n++){let u=(e*s+n)*4,d=r.color.light;if(e>=c&&n>=c&&e<s-c&&n<s-c){let t=Math.floor((e-c)/o),r=Math.floor((n-c)/o);d=l[+!!a[t*i+r]]}t[u++]=d.r,t[u++]=d.g,t[u++]=d.b,t[u]=d.a}}})),De=t((e=>{var t=Ee();function n(e,t,n){e.clearRect(0,0,t.width,t.height),t.style||={},t.height=n,t.width=n,t.style.height=n+`px`,t.style.width=n+`px`}function r(){try{return document.createElement(`canvas`)}catch{throw Error(`You need to specify a canvas element`)}}e.render=function(e,i,a){let o=a,s=i;o===void 0&&(!i||!i.getContext)&&(o=i,i=void 0),i||(s=r()),o=t.getOptions(o);let c=t.getImageWidth(e.modules.size,o),l=s.getContext(`2d`),u=l.createImageData(c,c);return t.qrToImageData(u.data,e,o),n(l,s,c),l.putImageData(u,0,0),s},e.renderToDataURL=function(t,n,r){let i=r;i===void 0&&(!n||!n.getContext)&&(i=n,n=void 0),i||={};let a=e.render(t,n,i),o=i.type||`image/png`,s=i.rendererOpts||{};return a.toDataURL(o,s.quality)}})),Oe=t((e=>{var t=Ee();function n(e,t){let n=e.a/255,r=t+`="`+e.hex+`"`;return n<1?r+` `+t+`-opacity="`+n.toFixed(2).slice(1)+`"`:r}function r(e,t,n){let r=e+t;return n!==void 0&&(r+=` `+n),r}function i(e,t,n){let i=``,a=0,o=!1,s=0;for(let c=0;c<e.length;c++){let l=Math.floor(c%t),u=Math.floor(c/t);!l&&!o&&(o=!0),e[c]?(s++,c>0&&l>0&&e[c-1]||(i+=o?r(`M`,l+n,.5+u+n):r(`m`,a,0),a=0,o=!1),l+1<t&&e[c+1]||(i+=r(`h`,s),s=0)):a++}return i}e.render=function(e,r,a){let o=t.getOptions(r),s=e.modules.size,c=e.modules.data,l=s+o.margin*2,u=o.color.light.a?`<path `+n(o.color.light,`fill`)+` d="M0 0h`+l+`v`+l+`H0z"/>`:``,d=`<path `+n(o.color.dark,`stroke`)+` d="`+i(c,s,o.margin)+`"/>`,f=`viewBox="0 0 `+l+` `+l+`"`,p=`<svg xmlns="http://www.w3.org/2000/svg" `+(o.width?`width="`+o.width+`" height="`+o.width+`" `:``)+f+` shape-rendering="crispEdges">`+u+d+`</svg>
`;return typeof a==`function`&&a(null,p),p}})),ke=e(t((e=>{var t=oe(),n=Te(),r=De(),i=Oe();function a(e,r,i,a,o){let s=[].slice.call(arguments,1),c=s.length,l=typeof s[c-1]==`function`;if(!l&&!t())throw Error(`Callback required as last argument`);if(l){if(c<2)throw Error(`Too few arguments provided`);c===2?(o=i,i=r,r=a=void 0):c===3&&(r.getContext&&o===void 0?(o=a,a=void 0):(o=a,a=i,i=r,r=void 0))}else{if(c<1)throw Error(`Too few arguments provided`);return c===1?(i=r,r=a=void 0):c===2&&!r.getContext&&(a=i,i=r,r=void 0),new Promise(function(t,o){try{t(e(n.create(i,a),r,a))}catch(e){o(e)}})}try{let t=n.create(i,a);o(null,e(t,r,a))}catch(e){o(e)}}e.create=n.create,e.toCanvas=a.bind(null,r.render),e.toDataURL=a.bind(null,r.renderToDataURL),e.toString=a.bind(null,function(e,t,n){return i.render(e,n)})}))(),1),P=i(),Ae={clipboard:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`path`,{d:`M9 4h6a1 1 0 0 1 1 1v1H8V5a1 1 0 0 1 1-1Z`}),(0,P.jsx)(`path`,{d:`M8 6H6.5A1.5 1.5 0 0 0 5 7.5v11A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 17.5 6H16`}),(0,P.jsx)(`path`,{d:`m9 13 2 2 4-4`})]}),documento:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`path`,{d:`M13 4H7.5A1.5 1.5 0 0 0 6 5.5v13A1.5 1.5 0 0 0 7.5 20h9a1.5 1.5 0 0 0 1.5-1.5V9Z`}),(0,P.jsx)(`path`,{d:`M13 4v5h5`}),(0,P.jsx)(`path`,{d:`M9 13h6M9 16.5h4`})]}),carpeta:(0,P.jsx)(P.Fragment,{children:(0,P.jsx)(`path`,{d:`M4 7.5A1.5 1.5 0 0 1 5.5 6h3.2a1.5 1.5 0 0 1 1.2.6l.9 1.2a1.5 1.5 0 0 0 1.2.6h6.5A1.5 1.5 0 0 1 20 9.9v8.6a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5Z`})}),celular:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`rect`,{x:`6.5`,y:`3`,width:`11`,height:`18`,rx:`2.5`}),(0,P.jsx)(`path`,{d:`M10.5 17.5h3`})]}),chevron:(0,P.jsx)(`path`,{d:`m9.5 5.5 6.5 6.5-6.5 6.5`}),check:(0,P.jsx)(`path`,{d:`m4.5 12.5 5 5 10-11`}),cruz:(0,P.jsx)(`path`,{d:`M6 6l12 12M18 6L6 18`}),alerta:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`path`,{d:`M10.7 4.3 2.9 17.6A1.5 1.5 0 0 0 4.2 20h15.6a1.5 1.5 0 0 0 1.3-2.4L13.3 4.3a1.5 1.5 0 0 0-2.6 0Z`}),(0,P.jsx)(`path`,{d:`M12 9.5v4M12 16.8v.01`})]}),info:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`circle`,{cx:`12`,cy:`12`,r:`8.5`}),(0,P.jsx)(`path`,{d:`M12 11v5M12 8v.01`})]}),chincheta:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`path`,{d:`M12 21.2s6.4-5.7 6.4-10.4a6.4 6.4 0 1 0-12.8 0c0 4.7 6.4 10.4 6.4 10.4Z`}),(0,P.jsx)(`circle`,{cx:`12`,cy:`10.6`,r:`2.4`})]}),hospital:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`path`,{d:`M4 20V8.6a1 1 0 0 1 .46-.84l7-4.5a1 1 0 0 1 1.08 0l7 4.5a1 1 0 0 1 .46.84V20`}),(0,P.jsx)(`path`,{d:`M3 20h18`}),(0,P.jsx)(`path`,{d:`M12 9.5v5M9.5 12h5`})]}),lupa:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`circle`,{cx:`11`,cy:`11`,r:`6.5`}),(0,P.jsx)(`path`,{d:`m16 16 4 4`})]}),descarga:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`path`,{d:`M12 4v11`}),(0,P.jsx)(`path`,{d:`m7.5 10.5 4.5 4.5 4.5-4.5`}),(0,P.jsx)(`path`,{d:`M4.5 19.5h15`})]}),sin_senal:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`path`,{d:`M3 3l18 18`}),(0,P.jsx)(`path`,{d:`M5.5 9.2A12 12 0 0 1 9 7.1M14.6 7.05A12 12 0 0 1 18.5 9.2`}),(0,P.jsx)(`path`,{d:`M8.6 12.6a7.6 7.6 0 0 1 2-1.2M13.6 11.5a7.6 7.6 0 0 1 1.8 1.1`}),(0,P.jsx)(`path`,{d:`M12 17.5v.01`})]}),reloj:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`circle`,{cx:`12`,cy:`12`,r:`8.5`}),(0,P.jsx)(`path`,{d:`M12 7.2v5l3.2 1.9`})]}),logro:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`circle`,{cx:`12`,cy:`12`,r:`8.5`}),(0,P.jsx)(`path`,{d:`m8.2 12.3 2.6 2.6 5-5.4`})]}),medico:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`path`,{d:`M6 3v5a4.2 4.2 0 0 0 8.4 0V3`}),(0,P.jsx)(`path`,{d:`M4.2 3h3.6M12.6 3h3.6`}),(0,P.jsx)(`path`,{d:`M10.2 12.2v2.4a4.6 4.6 0 0 0 9.2 0v-1.3`}),(0,P.jsx)(`circle`,{cx:`19.4`,cy:`11`,r:`2.2`})]}),impresora:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`path`,{d:`M7 9V4h10v5`}),(0,P.jsx)(`path`,{d:`M6.5 9h11a2.5 2.5 0 0 1 2.5 2.5v4a1.5 1.5 0 0 1-1.5 1.5H17`}),(0,P.jsx)(`path`,{d:`M7 17H5.5A1.5 1.5 0 0 1 4 15.5v-4A2.5 2.5 0 0 1 6.5 9`}),(0,P.jsx)(`path`,{d:`M7 14h10v6H7z`})]}),cronometro:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`circle`,{cx:`12`,cy:`13.5`,r:`7.5`}),(0,P.jsx)(`path`,{d:`M12 9.5v4l2.6 1.6`}),(0,P.jsx)(`path`,{d:`M9.6 3h4.8`}),(0,P.jsx)(`path`,{d:`M12 3v3`})]}),familia:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`circle`,{cx:`8.5`,cy:`8`,r:`3`}),(0,P.jsx)(`path`,{d:`M3.5 20v-1.4A4.6 4.6 0 0 1 8.1 14h.8a4.6 4.6 0 0 1 4.6 4.6V20`}),(0,P.jsx)(`circle`,{cx:`17`,cy:`9.8`,r:`2.4`}),(0,P.jsx)(`path`,{d:`M14.6 20v-2.2a3.7 3.7 0 0 1 3.7-3.7h.2a2.5 2.5 0 0 1 2.5 2.5V20`})]}),dinero:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`circle`,{cx:`12`,cy:`12`,r:`8.5`}),(0,P.jsx)(`path`,{d:`M12 7.2v9.6`}),(0,P.jsx)(`path`,{d:`M14.4 9.6a2.6 2.6 0 0 0-2.4-1.3c-1.5 0-2.5.8-2.5 1.9 0 2.6 5 1.4 5 4 0 1.2-1.1 2-2.6 2a2.7 2.7 0 0 1-2.5-1.4`})]}),bombilla:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`path`,{d:`M12 3a5.8 5.8 0 0 0-3.4 10.5c.6.45.9 1.1.9 1.8v.7h5v-.7c0-.7.3-1.35.9-1.8A5.8 5.8 0 0 0 12 3Z`}),(0,P.jsx)(`path`,{d:`M9.5 18.7h5M10.6 21h2.8`})]}),calendario:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`rect`,{x:`3.5`,y:`5.5`,width:`17`,height:`15`,rx:`2.5`}),(0,P.jsx)(`path`,{d:`M3.5 10h17M8.5 3.5v4M15.5 3.5v4`})]}),persona:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`circle`,{cx:`12`,cy:`8.2`,r:`3.7`}),(0,P.jsx)(`path`,{d:`M4.8 20.5v-1a5.4 5.4 0 0 1 5.4-5.4h3.6a5.4 5.4 0 0 1 5.4 5.4v1`})]}),pdf:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`path`,{d:`M13 3.5H7.5A1.5 1.5 0 0 0 6 5v14a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19V8.5Z`}),(0,P.jsx)(`path`,{d:`M13 3.5v5h5`}),(0,P.jsx)(`path`,{d:`M9.5 14.5h5M9.5 17.5h3`})]}),web:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`circle`,{cx:`12`,cy:`12`,r:`8.5`}),(0,P.jsx)(`path`,{d:`M3.5 12h17`}),(0,P.jsx)(`path`,{d:`M12 3.5c2.2 2.4 3.3 5.3 3.3 8.5s-1.1 6.1-3.3 8.5c-2.2-2.4-3.3-5.3-3.3-8.5S9.8 5.9 12 3.5Z`})]}),telefono:(0,P.jsx)(`path`,{d:`M8.4 4.2 6 4.9A2.1 2.1 0 0 0 4.5 7.4c.9 6 5.1 10.2 11.1 11.1a2.1 2.1 0 0 0 2.5-1.5l.7-2.4-3.7-1.7-1.6 1.9a11.6 11.6 0 0 1-4.8-4.8l1.9-1.6Z`}),ley:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`path`,{d:`M12 3.5 19.5 6v5.6c0 4-3 7.7-7.5 8.9-4.5-1.2-7.5-4.9-7.5-8.9V6Z`}),(0,P.jsx)(`path`,{d:`m9 12.2 2.2 2.2 4-4.4`})]}),pregunta:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`circle`,{cx:`12`,cy:`12`,r:`8.5`}),(0,P.jsx)(`path`,{d:`M9.7 9.6a2.4 2.4 0 0 1 4.7.7c0 1.6-2.3 2-2.3 3.4`}),(0,P.jsx)(`path`,{d:`M12 16.6v.01`})]}),recargar:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`path`,{d:`M20 12a8 8 0 1 1-2.6-5.9`}),(0,P.jsx)(`path`,{d:`M20.2 4.4v4.2H16`})]}),maletin:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`rect`,{x:`3.5`,y:`7.5`,width:`17`,height:`12.5`,rx:`2`}),(0,P.jsx)(`path`,{d:`M9 7.5V5.8A1.8 1.8 0 0 1 10.8 4h2.4A1.8 1.8 0 0 1 15 5.8v1.7`}),(0,P.jsx)(`path`,{d:`M3.5 12.5h17`})]}),megafono:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`path`,{d:`M4 10.5v3a1.5 1.5 0 0 0 1.5 1.5H8l6.5 4V6.5L8 10.5H5.5A1.5 1.5 0 0 0 4 12`}),(0,P.jsx)(`path`,{d:`M18 9.5a4 4 0 0 1 0 5`})]}),candado:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`rect`,{x:`4.5`,y:`10.5`,width:`15`,height:`10`,rx:`2.2`}),(0,P.jsx)(`path`,{d:`M8 10.5V7.8a4 4 0 0 1 8 0v2.7`})]}),altavoz:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`path`,{d:`M4 9.5v5a1.5 1.5 0 0 0 1.5 1.5H8l5 4V4L8 9.5H5.5A1.5 1.5 0 0 0 4 11`}),(0,P.jsx)(`path`,{d:`M16.5 9a4.2 4.2 0 0 1 0 6M19 6.5a7.8 7.8 0 0 1 0 11`})]}),pausa:(0,P.jsx)(P.Fragment,{children:(0,P.jsx)(`path`,{d:`M9.5 5.5v13M14.5 5.5v13`})}),biberon:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`path`,{d:`M11 3.5h2a1 1 0 0 1 1 1v2.3c1 .4 1.5 1.3 1.5 2.3v9.4a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 8.5 18.5V9.1c0-1 .5-1.9 1.5-2.3V4.5a1 1 0 0 1 1-1Z`}),(0,P.jsx)(`path`,{d:`M8.5 12.5h7`})]}),grafico:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`path`,{d:`M3.5 20.5h17`}),(0,P.jsx)(`path`,{d:`M4.5 20.5v-8M9.5 20.5v-11M14.5 20.5v-6M19.5 20.5v-13`})]})};function F({name:e,size:t=22}){return e===`play`?(0,P.jsx)(`svg`,{width:t,height:t,viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`,children:(0,P.jsx)(`path`,{d:`M8.5 5.2v13.6a.6.6 0 0 0 .93.5l10.1-6.8a.6.6 0 0 0 0-1L9.43 4.7a.6.6 0 0 0-.93.5Z`})}):(0,P.jsx)(`svg`,{width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.7`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:Ae[e]})}function I({rotulo:e,titulo:t,detalle:n,icono:r,color:i=`var(--brand-deep)`,colorTexto:a,margen:o=14}){return(0,P.jsxs)(`div`,{style:{marginBottom:o,"--rotulo-color":i},children:[(0,P.jsx)(`div`,{className:`rotulo`,children:e}),(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10},children:[r&&(0,P.jsx)(`span`,{style:{display:`flex`,color:i,flex:`0 0 auto`},"aria-hidden":`true`,children:(0,P.jsx)(F,{name:r,size:24})}),(0,P.jsx)(`h1`,{style:{fontSize:23,fontWeight:800,letterSpacing:`-0.025em`,color:a||i,lineHeight:1.15,textWrap:`balance`},children:t})]}),n&&(0,P.jsx)(`p`,{style:{fontSize:14,fontWeight:400,color:`var(--mute)`,marginTop:6,lineHeight:1.45},children:n})]})}function L({audioSrc:e,hablando:t,onToggle:n,autoPlay:r=!0,titulo:i=`Doña Rosa te explica`,celebrando:a=!1}){let s=!!e,c=(0,o.useRef)(null),l=(0,o.useRef)(null),[u,d]=(0,o.useState)(!1),[f,p]=(0,o.useState)(!1),m=s?u:!!t,h=(0,o.useRef)(null),g=(0,o.useRef)(null),_=(0,o.useRef)(null),v=(0,o.useRef)(0),y=(0,o.useRef)(0);return(0,o.useEffect)(()=>{if(!s)return;let e=c.current;if(!e||h.current)return;let t=window.AudioContext||window.webkitAudioContext;if(t)try{let n=new t,r=n.createMediaElementSource(e),i=n.createAnalyser();i.fftSize=512,r.connect(i),i.connect(n.destination),h.current=n,g.current=i,_.current=new Uint8Array(i.fftSize)}catch{h.current=null}},[s]),(0,o.useEffect)(()=>{let e=l.current;if(!e)return;let t=window.matchMedia?.(`(prefers-reduced-motion: reduce)`)?.matches;if(!m||t){cancelAnimationFrame(v.current),y.current=0,e.style.setProperty(`--voz`,`0`);return}let n=g.current,r=_.current,i=performance.now(),a=()=>{let t;if(n&&r){n.getByteTimeDomainData(r);let e=0;for(let t=0;t<r.length;t++){let n=(r[t]-128)/128;e+=n*n}let i=Math.sqrt(e/r.length);t=Math.min(1,i*10)}else{let e=(performance.now()-i)/1e3;t=.45+.35*Math.sin(e*9)*Math.sin(e*2.3)}let o=y.current,s=t>o?.55:.18,c=o+(t-o)*s;y.current=c,e.style.setProperty(`--voz`,c.toFixed(3)),v.current=requestAnimationFrame(a)};return v.current=requestAnimationFrame(a),()=>cancelAnimationFrame(v.current)},[m]),(0,o.useEffect)(()=>{if(!s)return;let e=c.current;e&&(e.currentTime=0,r?e.play().catch(()=>{}):e.pause())},[e,s,r]),(0,P.jsxs)(`div`,{className:`rosa-lector`,children:[(0,P.jsx)(`style`,{children:`
        /* Una hoja más, sin filete de color al costado: ese recurso ya se había
           sacado del proyecto (DESIGN.md, 2026-07-07) y volver a meterlo acá lo
           reintroducía por la ventana. Lo que distingue el bloque es el
           retrato con su anillo granate, que ya es señal de sobra.
           Los tokens salen de :root (App.jsx); los respaldos son para que el
           componente siga viéndose bien si se monta fuera de la app. */
        .rosa-lector {
          display: flex;
          align-items: center;
          gap: 12px;
          background: var(--sheet, #F6F9FC);
          background-image: var(--grano);
          border: 1px solid var(--line, #E3E8EE);
          border-radius: var(--r, 3px);
          box-shadow: var(--sh-1, 0 1px 0 rgba(110,88,54,.22));
          padding: 12px 14px;
          margin-bottom: 16px;
        }
        .rosa-cara-btn {
          --voz: 0;
          position: relative;
          width: 70px;
          height: 70px;
          flex: none;
          border: none;
          padding: 0;
          border-radius: 50%;
          cursor: pointer;
          background: transparent;
          transform: scale(1);
          transition: transform .35s cubic-bezier(0.23, 1, 0.32, 1);
          will-change: transform;
        }
        /* Al hablar: se agranda. */
        .rosa-cara-btn.rosa-activo:not(.rosa-terminando) { transform: scale(1.06); }
        /* Por terminar: se desinfla, con salida más lenta y calmada. */
        .rosa-cara-btn.rosa-terminando {
          transform: scale(0.955);
          transition: transform .7s ease-in-out;
        }

        .rosa-cara-img {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          object-fit: cover;
          object-position: 50% 20%;
          border: 3px solid var(--brand, #5B4FE9);
          box-shadow: 0 2px 4px -1px rgba(50,38,20,.35);
          display: block;
          background: var(--brand-soft, #EDEBFE);
          animation: rosaVaiven 4.5s ease-in-out infinite;
          will-change: transform;
        }
        /* Celebración: cuando se completa el trámite, el retrato se viste de
           éxito. La animación es un asentimiento rápido, como un "sí" visual. */
        .rosa-cara-btn.rosa-celebrando .rosa-cara-img {
          border-color: #227A4A;
          animation: rosaCelebracion 0.6s ease-in-out 2;
        }
        @keyframes rosaCelebracion {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        /* Al hablar, el vaivén de reposo se apaga y manda la voz: la cara
           asiente con el volumen. Si los dos corrieran juntos, el asentimiento
           se montaría sobre el mecerse y quedaría un temblor. */
        .rosa-cara-btn.rosa-activo .rosa-cara-img {
          animation: none;
          transform: translateY(calc(-2px * var(--voz))) rotate(calc(-1.2deg * var(--voz)));
        }
        .rosa-cara-btn.rosa-celebrando.rosa-activo .rosa-cara-img {
          border-color: #227A4A;
        }

        /* El anillo late con el VOLUMEN REAL, no con un bucle de 1,1 s. Es la
           diferencia entre un adorno que gira siempre igual y una señal: en un
           silencio de la locución el anillo se apaga, y al volver la voz
           reaparece. A 70px, esto es lo que de verdad se lee como "está
           hablando". */
        .rosa-anillo {
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          border: 3px solid var(--brand, #5B4FE9);
          opacity: calc(0.55 * var(--voz));
          transform: scale(calc(1 + 0.18 * var(--voz)));
          will-change: transform, opacity;
        }
        .rosa-cara-btn.rosa-celebrando .rosa-anillo {
          border-color: #227A4A;
          opacity: 0.6;
          transform: scale(1.05);
        }
        .rosa-mini {
          position: absolute;
          right: -1px;
          bottom: -1px;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--brand, #5B4FE9);
          color: #fff;
          border: 2px solid var(--sheet, #F6F9FC);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          z-index: 2;
          transition: background 0.2s ease;
        }
        .rosa-cara-btn.rosa-celebrando .rosa-mini {
          background: #227A4A;
        }
        /* Alto reservado para dos renglones de rótulo más la ayuda.
           Al empezar a sonar, el texto cambia de "Doña Rosa te explica las
           opciones" a "▶ Escúchame…": pasaba de dos renglones a uno y la
           tarjeta se encogía, moviendo 9px todo lo que tenía debajo justo
           cuando la persona está por tocar algo. Reservando el alto, el
           cambio de texto no mueve nada. */
        .rosa-texto {
          min-width: 0;
          min-height: 56px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        /* Pesos 900/700 sobre un rótulo y una ayuda: no había jerarquía, los
           dos renglones pesaban lo mismo. Ahora 600 para el rótulo y 400 para
           la ayuda, la misma escala que el resto del sistema. */
        .rosa-titulo {
          font-size: 15px;
          font-weight: 600;
          color: var(--ink, #0D253D);
          line-height: 1.25;
        }
        .rosa-hint {
          font-size: 14px;
          font-weight: 400;
          color: var(--mute, #5B6B7D);
          line-height: 1.3;
        }
        /* Vaivén: la cara se mece suave, como si respirara. */
        @keyframes rosaVaiven {
          0%   { transform: rotate(-2.5deg) translateY(0); }
          50%  { transform: rotate(2.5deg)  translateY(-1.5px); }
          100% { transform: rotate(-2.5deg) translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .rosa-cara-img { animation: none; }
          .rosa-cara-btn,
          .rosa-cara-btn.rosa-activo:not(.rosa-terminando),
          .rosa-cara-btn.rosa-terminando,
          .rosa-cara-btn.rosa-celebrando .rosa-cara-img { transform: none; transition: none; animation: none; }
          .rosa-cara-btn.rosa-activo .rosa-cara-img { transform: none; }
          .rosa-anillo { opacity: .5; transform: none; }
        }
      `}),(0,P.jsxs)(`button`,{ref:l,type:`button`,className:`rosa-cara-btn`+(m?` rosa-activo`:``)+(f?` rosa-terminando`:``)+(a?` rosa-celebrando`:``),onClick:()=>{if(s){let e=c.current;if(!e)return;h.current?.resume?.().catch(()=>{}),u?(e.pause(),e.currentTime=0,d(!1),p(!1)):(e.currentTime=0,e.play().catch(()=>{}))}else n?.()},"aria-label":m?`Detener a Doña Rosa`:`Escuchar a Doña Rosa`,children:[(0,P.jsx)(`span`,{className:`rosa-anillo`,"aria-hidden":`true`}),(0,P.jsx)(`img`,{className:`rosa-cara-img`,src:`/guia/rosa-320.jpg`,alt:`Doña Rosa, tu orientadora`,width:`320`,height:`320`}),(0,P.jsx)(`span`,{className:`rosa-mini`,"aria-hidden":`true`,children:a?(0,P.jsx)(F,{name:`check`,size:12}):m?(0,P.jsx)(F,{name:`pausa`,size:12}):(0,P.jsx)(F,{name:`play`,size:12})})]}),(0,P.jsxs)(`div`,{className:`rosa-texto`,children:[(0,P.jsx)(`div`,{className:`rosa-titulo`,children:m?`▶ Escúchame…`:i}),(0,P.jsx)(`div`,{className:`rosa-hint`,children:m?`Toca mi foto para detener`:`Toca mi foto para escuchar`})]}),s&&(0,P.jsx)(`audio`,{ref:c,src:e,preload:`auto`,onPlaying:()=>{h.current?.resume?.().catch(()=>{}),d(!0),p(!1)},onTimeUpdate:()=>{let e=c.current;if(!e||!e.duration||Number.isNaN(e.duration))return;let t=e.duration-e.currentTime<=1;p(e=>e===t?e:t)},onEnded:()=>{d(!1),p(!1)},onPause:()=>{d(!1),p(!1)}})]})}var je={canje:{titulo:`Validación de Descanso Médico Particular`,icono:`clipboard`,color:`#C81E4E`,colorTexto:`#901638`,colorSuave:`#FDE7ED`,area:`Prestaciones Económicas / Calificaciones`,pasos:[{id:`contingencia`,tipo:`opciones`,pregunta:`¿Cuál fue la causa del descanso médico?`,ayuda:`Elige la opción que describe por qué el médico te dio el descanso.`,opciones:[`Enfermedad común`,`Accidente de tránsito`,`Accidente de trabajo`],next:e=>e===`Accidente de tránsito`?`cert_original_transito`:e===`Accidente de trabajo`?`cert_original_trabajo`:`dias`,label:null},{id:`dias`,tipo:`opciones`,pregunta:`¿Cuántos días de descanso indica el certificado?`,opciones:[`1 a 9 días`,`10 a 20 días`,`Más de 20 días`],next:()=>`cert_original`,label:null},{id:`cert_original`,tipo:`sino`,pregunta:`¿Tienes el certificado médico PARTICULAR ORIGINAL, sin borrones ni enmendaduras?`,ayuda:`Debe ser el documento físico original — no una copia, no una foto. Tiene que estar limpio, sin correcciones.`,next:e=>e===`no`?`alerta_cert`:`datos_cert`,label:`Certificado médico particular original, sin borrones ni enmendaduras`},{id:`alerta_cert`,tipo:`alerta`,pregunta:`Sin el certificado médico original no puedes hacer este trámite.`,ayuda:`Regresa al médico que te atendió y pídele el certificado original, sin correcciones, con su firma y sello.`,next:()=>`datos_cert`},{id:`datos_cert`,tipo:`sino`,pregunta:`¿El certificado tiene: nombre del paciente, diagnóstico, días, fecha, firma, sello y CMP del médico?`,ayuda:`Revisa que figure todo eso. Si falta algún dato, el trámite será observado.`,next:e=>e===`no`?`alerta_datos`:`comprobante_medico`,label:`Certificado con datos completos (diagnóstico, días, firma, sello, CMP)`},{id:`alerta_datos`,tipo:`alerta`,pregunta:`El certificado tiene datos incompletos.`,ayuda:`Vuelve con el médico y pídele que complete o corrija el certificado antes de presentarlo.`,next:()=>`comprobante_medico`},{id:`comprobante_medico`,tipo:`sino`,pregunta:`¿Tienes el comprobante de pago de la consulta con el médico?`,ayuda:`Puede ser recibo por honorarios, boleta de consulta o preliquidación de la clínica.`,next:()=>`receta`,label:`Recibo de honorarios / boleta de consulta del médico`},{id:`receta`,tipo:`sino`,pregunta:`¿Tienes la receta médica con las indicaciones del tratamiento?`,ayuda:`La receta debe tener los medicamentos indicados, la dosis y la firma del médico.`,next:()=>`boleta_med`,label:`Receta médica con indicaciones del tratamiento`},{id:`boleta_med`,tipo:`sino`,pregunta:`¿Tienes la boleta o factura de los medicamentos que compraste?`,ayuda:`El comprobante de la farmacia o botica donde adquiriste los medicamentos indicados en la receta.`,next:()=>`examenes`,label:`Boleta o factura de compra de medicamentos`},{id:`examenes`,tipo:`sino`,pregunta:`¿Tienes exámenes médicos auxiliares relacionados al diagnóstico?`,ayuda:`Análisis de sangre, radiografías, ecografías u otros que el médico indicó.`,next:(e,t)=>t.dias===`1 a 9 días`?`dni_comun`:`carta_empresa`,label:`Exámenes médicos auxiliares según el diagnóstico`},{id:`carta_empresa`,tipo:`sino`,pregunta:`¿Tienes la carta de tu empresa que indica los días de descanso que cubrió?`,ayuda:`Los primeros 20 días de incapacidad acumulada en el año los cubre el empleador. La empresa debe emitir esta carta.`,next:(e,t)=>t.dias===`Más de 20 días`?`boleta_pago_20`:`dni_comun`,label:`Carta de la empresa indicando los días de descanso cubiertos`},{id:`boleta_pago_20`,tipo:`sino`,pregunta:`¿Tienes la última boleta de pago de tu trabajo?`,ayuda:`La boleta de remuneraciones más reciente. Necesaria cuando el descanso supera los 20 días.`,next:()=>`dni_comun`,label:`Última boleta de pago del trabajo`},{id:`dni_comun`,tipo:`sino`,pregunta:`¿Tienes tu DNI original y una fotocopia?`,next:()=>`plazo`,label:`DNI original + fotocopia`},{id:`plazo`,tipo:`sino`,pregunta:`¿El certificado médico fue emitido hace menos de 30 días hábiles?`,ayuda:`Tienes 30 días hábiles desde la fecha del certificado para presentar el expediente. Sábados, domingos y feriados NO cuentan.`,next:e=>e===`no`?`alerta_plazo`:`FIN`},{id:`alerta_plazo`,tipo:`alerta`,pregunta:`El plazo de 30 días hábiles puede haber vencido.`,ayuda:`Existen excepciones por hospitalización o lejanía. Acércate igualmente y explica tu situación al personal.`,next:()=>`FIN`},{id:`cert_original_transito`,tipo:`sino`,pregunta:`¿Tienes el certificado médico PARTICULAR ORIGINAL, sin borrones ni enmendaduras?`,ayuda:`Debe ser el documento físico original, limpio y sin correcciones.`,next:e=>e===`no`?`alerta_cert_transito`:`datos_cert_transito`,label:`Certificado médico particular original, sin borrones ni enmendaduras`},{id:`alerta_cert_transito`,tipo:`alerta`,pregunta:`Sin el certificado médico original no puedes hacer este trámite.`,ayuda:`Regresa al médico que te atendió y pídele el certificado original.`,next:()=>`datos_cert_transito`},{id:`datos_cert_transito`,tipo:`sino`,pregunta:`¿El certificado tiene todos los datos: nombre, diagnóstico, días, fecha, firma, sello y CMP del médico?`,next:e=>e===`no`?`alerta_datos_transito`:`denuncia_policial`,label:`Certificado con datos completos (diagnóstico, días, firma, sello, CMP)`},{id:`alerta_datos_transito`,tipo:`alerta`,pregunta:`El certificado tiene datos incompletos.`,ayuda:`Vuelve con el médico y pídele que complete el certificado.`,next:()=>`denuncia_policial`},{id:`denuncia_policial`,tipo:`sino`,pregunta:`¿Tienes copia de la denuncia policial del accidente de tránsito?`,ayuda:`La denuncia debe haber sido presentada en la comisaría del lugar del accidente.`,next:()=>`soat`,label:`Copia de la denuncia policial del accidente de tránsito`},{id:`soat`,tipo:`sino`,pregunta:`¿Tienes copia del SOAT del vehículo involucrado en el accidente?`,ayuda:`El Seguro Obligatorio de Accidentes de Tránsito (SOAT) del vehículo que ocasionó el accidente.`,next:()=>`receta_transito`,label:`Copia del SOAT del vehículo involucrado`},{id:`receta_transito`,tipo:`sino`,pregunta:`¿Tienes la receta médica con las indicaciones del tratamiento?`,next:()=>`boleta_med_transito`,label:`Receta médica con indicaciones del tratamiento`},{id:`boleta_med_transito`,tipo:`sino`,pregunta:`¿Tienes la boleta o factura de los medicamentos que compraste?`,next:()=>`examenes_transito`,label:`Boleta o factura de compra de medicamentos`},{id:`examenes_transito`,tipo:`sino`,pregunta:`¿Tienes exámenes auxiliares relacionados al accidente?`,ayuda:`Radiografías, ecografías u otros estudios que el médico indicó.`,next:()=>`dni_transito`,label:`Exámenes médicos auxiliares relacionados al accidente`},{id:`dni_transito`,tipo:`sino`,pregunta:`¿Tienes tu DNI original y una fotocopia?`,next:()=>`FIN`,label:`DNI original + fotocopia`},{id:`cert_original_trabajo`,tipo:`sino`,pregunta:`¿Tienes el certificado médico PARTICULAR ORIGINAL, sin borrones ni enmendaduras?`,ayuda:`Debe ser el documento físico original, limpio y sin correcciones.`,next:e=>e===`no`?`alerta_cert_trabajo`:`datos_cert_trabajo`,label:`Certificado médico particular original, sin borrones ni enmendaduras`},{id:`alerta_cert_trabajo`,tipo:`alerta`,pregunta:`Sin el certificado médico original no puedes hacer este trámite.`,ayuda:`Regresa al médico que te atendió y pídele el certificado original.`,next:()=>`datos_cert_trabajo`},{id:`datos_cert_trabajo`,tipo:`sino`,pregunta:`¿El certificado tiene todos los datos: nombre, diagnóstico, días, fecha, firma, sello y CMP del médico?`,next:e=>e===`no`?`alerta_datos_trabajo`:`aviso_accidente`,label:`Certificado con datos completos (diagnóstico, días, firma, sello, CMP)`},{id:`alerta_datos_trabajo`,tipo:`alerta`,pregunta:`El certificado tiene datos incompletos.`,ayuda:`Vuelve con el médico y pídele que complete el certificado.`,next:()=>`aviso_accidente`},{id:`aviso_accidente`,tipo:`sino`,pregunta:`¿Tienes el Aviso de Accidente de Trabajo debidamente registrado?`,ayuda:`Tu empleador debe haber registrado el accidente ante EsSalud. Incluye datos del trabajador, la empresa, el accidente y la certificación médica de la primera atención.`,next:()=>`receta_trabajo`,label:`Aviso de Accidente de Trabajo debidamente registrado`},{id:`receta_trabajo`,tipo:`sino`,pregunta:`¿Tienes la receta médica con las indicaciones del tratamiento?`,next:()=>`boleta_med_trabajo`,label:`Receta médica con indicaciones del tratamiento`},{id:`boleta_med_trabajo`,tipo:`sino`,pregunta:`¿Tienes la boleta o factura de los medicamentos que compraste?`,next:()=>`examenes_trabajo`,label:`Boleta o factura de compra de medicamentos`},{id:`examenes_trabajo`,tipo:`sino`,pregunta:`¿Tienes exámenes auxiliares relacionados al accidente?`,ayuda:`Radiografías, ecografías u otros estudios que el médico indicó.`,next:()=>`dni_trabajo`,label:`Exámenes médicos auxiliares relacionados al accidente`},{id:`dni_trabajo`,tipo:`sino`,pregunta:`¿Tienes tu DNI original y una fotocopia?`,next:()=>`FIN`,label:`DNI original + fotocopia`}],resumen:e=>{let t=[],n=e.contingencia||`Enfermedad común`;return n===`Enfermedad común`?(t.push({label:`Certificado médico particular original, sin borrones`,val:e.cert_original}),t.push({label:`Certificado con datos completos (diagnóstico, días, firma, sello, CMP)`,val:e.datos_cert===`no`?`advertencia`:`si`}),t.push({label:`Recibo de honorarios / boleta de consulta del médico`,val:e.comprobante_medico}),t.push({label:`Receta médica con indicaciones del tratamiento`,val:e.receta}),t.push({label:`Boleta o factura de compra de medicamentos`,val:e.boleta_med}),t.push({label:`Exámenes médicos auxiliares según el diagnóstico`,val:e.examenes}),e.dias&&e.dias!==`1 a 9 días`&&t.push({label:`Carta de la empresa indicando los días de descanso cubiertos`,val:e.carta_empresa}),e.dias===`Más de 20 días`&&t.push({label:`Última boleta de pago del trabajo`,val:e.boleta_pago_20}),t.push({label:`DNI original + fotocopia`,val:e.dni_comun}),e.plazo===`no`&&t.push({label:`⏰ Verifica el plazo (30 días hábiles desde la fecha del certificado)`,val:`advertencia`})):n===`Accidente de tránsito`?(t.push({label:`Certificado médico particular original, sin borrones`,val:e.cert_original_transito}),t.push({label:`Certificado con datos completos (diagnóstico, días, firma, sello, CMP)`,val:e.datos_cert_transito===`no`?`advertencia`:`si`}),t.push({label:`Copia de la denuncia policial del accidente`,val:e.denuncia_policial}),t.push({label:`Copia del SOAT del vehículo involucrado`,val:e.soat}),t.push({label:`Receta médica con indicaciones del tratamiento`,val:e.receta_transito}),t.push({label:`Boleta o factura de compra de medicamentos`,val:e.boleta_med_transito}),t.push({label:`Exámenes médicos auxiliares relacionados al accidente`,val:e.examenes_transito}),t.push({label:`DNI original + fotocopia`,val:e.dni_transito})):n===`Accidente de trabajo`&&(t.push({label:`Certificado médico particular original, sin borrones`,val:e.cert_original_trabajo}),t.push({label:`Certificado con datos completos (diagnóstico, días, firma, sello, CMP)`,val:e.datos_cert_trabajo===`no`?`advertencia`:`si`}),t.push({label:`Aviso de Accidente de Trabajo debidamente registrado`,val:e.aviso_accidente}),t.push({label:`Receta médica con indicaciones del tratamiento`,val:e.receta_trabajo}),t.push({label:`Boleta o factura de compra de medicamentos`,val:e.boleta_med_trabajo}),t.push({label:`Exámenes médicos auxiliares relacionados al accidente`,val:e.examenes_trabajo}),t.push({label:`DNI original + fotocopia`,val:e.dni_trabajo})),{items:t,notaExtra:{"Enfermedad común":e.dias===`1 a 9 días`?`Descanso de 1 a 9 días: el empleador cubre los días de incapacidad.`:e.dias===`10 a 20 días`?`Descanso de 10 a 20 días: se exige carta de la empresa que indique los días cubiertos.`:e.dias===`Más de 20 días`?`Desde el día 21 acumulado en el año, EsSalud cubre el subsidio. Se requiere carta y boleta de tu empleador.`:``,"Accidente de tránsito":`Para accidente de tránsito se exige denuncia policial y copia del SOAT del vehículo involucrado.`,"Accidente de trabajo":`Para accidente de trabajo se exige el Aviso de Accidente debidamente registrado por tu empleador ante EsSalud.`}[n]||``}}}},Me={activo:`seguro_activo`,no_acreditado:`seguro_no_acreditado`,no_encontrado:`seguro_no_encontrado`,error_consulta:`seguro_error`},Ne={aprobado:`lactancia_aprobado`,rechazado:`lactancia_rechazado`,sin_resultado:`lactancia_sin_resultado`,no_encontrado:`seguro_no_encontrado`},Pe=[{id:`cambio_centro`,icono:`hospital`,titulo:`Cambiar mi centro de atención`,subtitulo:`Si vives lejos, elige uno más cercano`,intro:`Puedes cambiar tu centro de atención por internet, sin venir al hospital. Actualizas tu dirección en la página de tu seguro y el sistema te asigna el centro más cercano a tu casa.`,requisitos:[`Tu DNI`,`Un correo electrónico`,`Tu seguro activo`],url:`https://viva.essalud.gob.pe/viva/login`,voz:`Si tu centro de atención te queda lejos, puedes cambiarlo por internet, sin venir. Actualizas tu dirección en la página de tu seguro y te asignan el centro más cercano a tu casa. Necesitas tu DNI, un correo electrónico y tu seguro activo. Toca el botón para abrir la página de tu seguro e iniciar sesión.`},{id:`subsidio`,icono:`dinero`,titulo:`Solicitar un subsidio`,subtitulo:`Incapacidad, maternidad, lactancia o sepelio`,intro:`Si te corresponde un subsidio, por incapacidad, maternidad, lactancia o sepelio, puedes solicitarlo por internet en la Plataforma VIVA de tu seguro, sin venir.`,requisitos:[`Tu DNI`,`Un correo electrónico`,`Tu seguro activo`],url:`https://viva.essalud.gob.pe/viva/login`,voz:`Si te corresponde un subsidio, por incapacidad, maternidad, lactancia o sepelio, puedes solicitarlo por internet, sin venir. Se hace en la Plataforma VIVA de tu seguro. Necesitas tu DNI, un correo electrónico y tu seguro activo. Toca el botón para abrir la página e iniciar sesión.`},{id:`dependientes`,icono:`familia`,titulo:`Inscribir a tu familia`,subtitulo:`Tu esposo, esposa o hijos`,intro:`Puedes inscribir a tu esposo o esposa, y a tus hijos, para que también tengan seguro. Se hace por internet en la Plataforma VIVA de tu seguro, sin venir al hospital.`,requisitos:[`Tu DNI`,`Un correo electrónico`,`Los documentos de tu familiar`],url:`https://viva.essalud.gob.pe/viva/login`,voz:`Puedes inscribir a tu esposo o esposa, y a tus hijos, para que también tengan seguro. Se hace por internet, en la Plataforma VIVA de tu seguro. Necesitas tu DNI, un correo electrónico y los documentos de tu familiar. Toca el botón para abrir la página e iniciar sesión.`},{id:`susalud_app`,icono:`celular`,titulo:`App SUSALUD Contigo`,subtitulo:`Verifica tu seguro, ubica centros y reclama`,intro:`SUSALUD Contigo es la aplicación oficial de la Superintendencia Nacional de Salud, gratis. Desde tu celular puedes verificar tu seguro, ubicar los centros de salud más cercanos y presentar un reclamo si te niegan la atención, hay demoras o cobros indebidos.`,requisitos:[`Un celular con internet`,`Tu DNI`],url:`https://play.google.com/store/apps/details?id=pe.gob.susalud.servicio`,botonTexto:`Instalar SUSALUD Contigo`,nota:`Se abre Google Play para instalar la app oficial de SUSALUD. Es gratis.`,voz:`SUSALUD Contigo es la aplicación oficial de la Superintendencia Nacional de Salud. Es gratis. Desde tu celular puedes verificar tu seguro, ubicar los centros de salud más cercanos, y presentar un reclamo si te niegan la atención o hay demoras. Toca el botón para instalarla desde Google Play.`}],Fe=Object.fromEntries(Pe.map(e=>[e.id,e]));function Ie(){return typeof window<`u`}function R(){return`production`}function Le(){return(Ie()?window.vam:R())||`production`}function Re(){return Le()===`production`}function ze(){return Le()===`development`}function Be(e,{[e]:t,...n}){return n}function Ve(e,t){if(!e)return;let n=e,r=[];for(let[i,a]of Object.entries(e))typeof a==`object`&&a&&(t.strip?n=Be(i,n):r.push(i));if(r.length>0&&!t.strip)throw Error(`The following properties are not valid: ${r.join(`, `)}. Only strings, numbers, booleans, and null are allowed.`);return n}function He(e,t,n){var r,i;if(!Ie()){let e="[Vercel Web Analytics] Please import `track` from `@vercel/analytics/server` when using this function in a server environment";if(Re())console.warn(e);else throw Error(e);return}if(!t){(r=window.va)==null||r.call(window,`event`,{name:e,options:n});return}try{let r=Ve(t,{strip:Re()});(i=window.va)==null||i.call(window,`event`,{name:e,data:r,options:n})}catch(e){e instanceof Error&&ze()&&console.error(e)}}var Ue=new Set([`tramite`,`paso`,`origen`,`anunciante`,`resultado_tecnico`]);function We(e){let t={};if(!e)return t;for(let[n,r]of Object.entries(e))Ue.has(n)&&(typeof r==`number`?t[n]=r:typeof r==`string`&&(t[n]=r.slice(0,60)));return t}function Ge(e,t){try{if(!t){He(e);return}He(e,We(t))}catch{}}var Ke=[{id:`00009043`,nombre:`CENTRO DE SALUD ASCOPE`,provincia:`ASCOPE`,distrito:`ASCOPE`,direccion:`CHICLAYO`,lat:-7.71742333,lon:-79.11440667},{id:`00009141`,nombre:`CENTRO DE SALUD SIN INTERNAMIENTO CASA GRANDE`,provincia:`ASCOPE`,distrito:`CASA GRANDE`,direccion:`PROLONGACION AV. ATAHUALPA MZ 15 LOTE 01 URB. 8 DE SETIEMBRE`,lat:-7.7473482,lon:-79.1896199},{id:`00036151`,nombre:`POSTA DE SALUD CHICAMA`,provincia:`ASCOPE`,distrito:`CHICAMA`,direccion:`ULISES`,lat:-7.8479948,lon:-79.1407421},{id:`00038390`,nombre:`POSTA DE SALUD SAUSAL`,provincia:`ASCOPE`,distrito:`CHICAMA`,direccion:`JACOBO MZ. J LOT. 1`,lat:null,lon:null},{id:`00009037`,nombre:`HOSPITAL II CHOCOPE`,provincia:`ASCOPE`,distrito:`CHOCOPE`,direccion:`PANAMERICANA NORTE KM N° 604`,lat:-7.792812,lon:-79.222181},{id:`00012107`,nombre:`P. M. PAIJAN`,provincia:`ASCOPE`,distrito:`PAIJAN`,direccion:`CALLE 2 DE MAYO N° 310`,lat:-7.7342484,lon:-79.2986668},{id:`00012113`,nombre:`POSTA DE SALUD CARTAVIO`,provincia:`ASCOPE`,distrito:`SANTIAGO DE CAO`,direccion:`AVENIDA SAN FRANCISCO N° 2`,lat:-7.8920762,lon:-79.2241343},{id:`00012114`,nombre:`POSTA DE SALUD SANTIAGO DE CAO`,provincia:`ASCOPE`,distrito:`SANTIAGO DE CAO`,direccion:`CALLE GRAU S/N`,lat:-7.9599368,lon:-79.2386711},{id:`00021969`,nombre:`POSTA DE SALUD BOLIVAR`,provincia:`BOLIVAR`,distrito:`BOLIVAR`,direccion:`JR. CORDOVA N° 627`,lat:-7.15448313,lon:-77.70199001},{id:`00009954`,nombre:`HOSPITAL I CHEPEN ESSALUD`,provincia:`CHEPEN`,distrito:`CHEPEN`,direccion:`AV. LAS PALMERAS S/N - URB HUANCHACO`,lat:-7.225865,lon:-79.436401},{id:`00012104`,nombre:`POSTA DE SALUD CASCAS`,provincia:`GRAN CHIMU`,distrito:`CASCAS`,direccion:`CALLE BOLIVAR 426`,lat:-7.4789659,lon:-78.8202021},{id:`00012105`,nombre:`CENTRO DE SALUD  OTUZCO`,provincia:`OTUZCO`,distrito:`OTUZCO`,direccion:`AVENIDA TRUJILLO 608 BARRIO SAN REMIGIO`,lat:-7.91308668,lon:-78.56707432},{id:`00012101`,nombre:`POSTA DE SALUD GUADALUPE`,provincia:`PACASMAYO`,distrito:`GUADALUPE`,direccion:`AVENIDA HÚSARES DE JUNÍN S/N`,lat:-7.2405617,lon:-79.46535654},{id:`00009486`,nombre:`POSTA DE SALUD LIMONCARRO`,provincia:`PACASMAYO`,distrito:`GUADALUPE`,direccion:`AVENIDA CAJAMARCA N° 19`,lat:-7.299455,lon:-79.417823},{id:`00009646`,nombre:`POSTA DE SALUD JEQUETEPEQUE`,provincia:`PACASMAYO`,distrito:`JEQUETEPEQUE`,direccion:`CALLE SAN PABLO S/N`,lat:-7.3379214,lon:-79.5630919},{id:`00008514`,nombre:`HOSPITAL I PACASMAYO`,provincia:`PACASMAYO`,distrito:`PACASMAYO`,direccion:`AVENIDA MARISCAL CÁCERES N° 701`,lat:-7.4048452,lon:-79.5639532},{id:`00012110`,nombre:`POSTA DE SALUD SAN JOSE`,provincia:`PACASMAYO`,distrito:`SAN JOSE`,direccion:`CALLE LIMA N° 909`,lat:-7.3508438,lon:-79.4537261},{id:`00012097`,nombre:`POSTA DE SALUD SAN PEDRO DE LLOC`,provincia:`PACASMAYO`,distrito:`SAN PEDRO DE LLOC`,direccion:`CALLE CALLAO 570 SAN PEDRO DE LLOC`,lat:-7.42716265,lon:-79.5047661},{id:`00012111`,nombre:`CENTRO DE SALUD CAP II TAYABAMBA`,provincia:`PATAZ`,distrito:`TAYABAMBA`,direccion:`CALLE DOS DE MAYO S/N`,lat:-8.2769363,lon:-77.3008506},{id:`00012109`,nombre:`PUESTO DE SALUD DEL CAP II HUAMACHUCO`,provincia:`SANCHEZ CARRION`,distrito:`HUAMACHUCO`,direccion:`CALLE PONCE DE LEON ESQUINA CON RAMIRO PRIALE`,lat:-7.818265,lon:-78.039572},{id:`00012112`,nombre:`POSTA DE SALUD QUIRUVILCA`,provincia:`SANTIAGO DE CHUCO`,distrito:`QUIRUVILCA`,direccion:`PASAJE GILDEMEISTER S/N`,lat:-8.00074327,lon:-78.31030814},{id:`00012108`,nombre:`POSTA MEDICA SANTIAGO DE CHUCO`,provincia:`SANTIAGO DE CHUCO`,distrito:`SANTIAGO DE CHUCO`,direccion:`CALLE LUIS FELIPE DE LA PUENTE UCEDA N° 1630 BARRIO SAN JOSE`,lat:null,lon:null},{id:`00009041`,nombre:`CENTRO DE SALUD CON INTERNAMIENTO EL PORVENIR`,provincia:`TRUJILLO`,distrito:`EL PORVENIR`,direccion:`JIRON MAYTA CAPAC Nº 823 RIO SECO`,lat:-8.07474667,lon:-79.00711},{id:`00009278`,nombre:`FLORENCIA DE MORA`,provincia:`TRUJILLO`,distrito:`FLORENCIA DE MORA`,direccion:`AVENIDA NUEVE DE OCTUBRE S/N`,lat:-8.07781318,lon:-79.02238319},{id:`00035611`,nombre:`FLORENCIA DE MORA`,provincia:`TRUJILLO`,distrito:`FLORENCIA DE MORA`,direccion:`BARRIO 6 CALLE 9 DE OCTUBRE N° 1030 MZ 10 LOTE 01`,lat:null,lon:null},{id:`00034972`,nombre:`C.M. Huanchaco`,provincia:`TRUJILLO`,distrito:`HUANCHACO`,direccion:`A.H HUANCHAQUITO ALTO`,lat:-8.0884404,lon:-79.0872788},{id:`00026203`,nombre:`CENTRO DE RADIOTERAPIA RALL`,provincia:`TRUJILLO`,distrito:`LA ESPERANZA`,direccion:`JOAQUIN OLMEDO ESQUINA PASAJE BARDALES`,lat:-8.0647013,lon:-79.0614895},{id:`00020925`,nombre:`HOSPITAL DE ALTA COMPLEJIDAD DE LA LIBERTAD VIRGEN DE LA PUERTA`,provincia:`TRUJILLO`,distrito:`LA ESPERANZA`,direccion:`AV. N° 05 Y N° 02, URB PARQUE INDUSTRIAL`,lat:-8.05433251,lon:-79.05803067},{id:`00009040`,nombre:`HOSPITAL I - LA ESPERANZA`,provincia:`TRUJILLO`,distrito:`LA ESPERANZA`,direccion:`LIMA CUADRA 7`,lat:-8.0749737,lon:-79.0540006},{id:`00009142`,nombre:`CENTRO DE ATENCION PRIMARIA II LAREDO`,provincia:`TRUJILLO`,distrito:`LAREDO`,direccion:`AVENIDA TRUJILLO S/N`,lat:-8.0919919,lon:-78.9589277},{id:`00009038`,nombre:`CENTRO DE SALUD CON INTERNAMIENTO MOCHE`,provincia:`TRUJILLO`,distrito:`MOCHE`,direccion:`CALLE ELIO JACOBO CAFFO S/N URB EL PARAISO`,lat:-8.167579,lon:-79.0126097},{id:`00012103`,nombre:`POSTA DE SALUD SALAVERRY`,provincia:`TRUJILLO`,distrito:`SALAVERRY`,direccion:`CALLE LIBERTAD Nº 348`,lat:-8.2212144,lon:-78.9769632},{id:`00035741`,nombre:`CAP III METROPOLITANO`,provincia:`TRUJILLO`,distrito:`TRUJILLO`,direccion:`BLAS PASCAL`,lat:-8.1042174,lon:-79.0089785},{id:`00008685`,nombre:`HOSPITAL I ALBRECHT`,provincia:`TRUJILLO`,distrito:`TRUJILLO`,direccion:`AV JESUS DE NAZARETH S/N RESIDENCIAL ALBRECHT`,lat:-8.1110707,lon:-79.0349299},{id:`00009042`,nombre:`VICTOR LAZARTE ECHEGARAY`,provincia:`TRUJILLO`,distrito:`TRUJILLO`,direccion:`PROLONGACION UNION 1350`,lat:-8.0996179,lon:-79.0120577},{id:`00011659`,nombre:`POLICLINICO VICTOR LARCO HERRERA`,provincia:`TRUJILLO`,distrito:`VICTOR LARCO HERRERA`,direccion:`AVENIDA VICTOR LARCO Nº 878 VISTA ALEGRE`,lat:-8.13771037,lon:-79.04994322},{id:`00034894`,nombre:`BICENTENARIO DE CHAO`,provincia:`VIRU`,distrito:`CHAO`,direccion:`PANAMERICANA NORTE`,lat:-8.56995996,lon:-78.67277212},{id:`00011702`,nombre:`CENTRO DE SALUD ""VICTOR SOLES GARCIA""`,provincia:`VIRU`,distrito:`VIRU`,direccion:`AVENIDA VICTOR RAUL S/N SECTOR SAN LUIS`,lat:-8.4142357,lon:-78.7527095},{id:`00034002`,nombre:`VICTOR SOLES GARCIA ESSALUD`,provincia:`VIRU`,distrito:`VIRU`,direccion:`VICTOR RAUL  SECTOR 3B SAN LUIS`,lat:-8.4230643,lon:-78.7522515}],qe=6371;function Je(e,t,n,r){let i=e=>e*Math.PI/180,a=i(n-e),o=i(r-t),s=Math.sin(a/2)**2+Math.cos(i(e))*Math.cos(i(n))*Math.sin(o/2)**2;return qe*(2*Math.atan2(Math.sqrt(s),Math.sqrt(1-s)))}function Ye(e,t,n){let r=n.filter(e=>e.lat!==null&&e.lon!==null);if(r.length===0)return null;let i=r[0],a=Je(e,t,i.lat,i.lon);for(let n of r.slice(1)){let r=Je(e,t,n.lat,n.lon);r<a&&(i=n,a=r)}return i}function Xe(e){let t={};for(let n of e)t[n.provincia]??={},t[n.provincia][n.distrito]??=[],t[n.provincia][n.distrito].push(n);return t}var Ze=[`ASCOPE`,`BOLIVAR`,`CHEPEN`,`GRAN CHIMU`,`JULCAN`,`OTUZCO`,`PACASMAYO`,`PATAZ`,`SANCHEZ CARRION`,`SANTIAGO DE CHUCO`,`TRUJILLO`,`VIRU`];function Qe(e,t){return Object.keys(e[t]??{}).length>0}function $e(e,t=e){return{id:`otro-${e}`,nombre:`Establecimiento de ${et(e)}`,provincia:e,distrito:t,direccion:``,lat:null,lon:null}}function et(e){return e.toLowerCase().split(` `).map(e=>e.length===0?``:e[0].toUpperCase()+e.slice(1)).join(` `)}var z=`digitalasistent_establecimiento`;function tt(){return typeof window<`u`?window.localStorage:null}function nt(e=tt()){if(e)try{e.removeItem(z)}catch{}}var rt=Xe(Ke);function it({indice:e,children:t,onClick:n}){return(0,P.jsxs)(`button`,{className:`btn-opcion`,style:{fontSize:16,padding:`11px 14px`},onClick:n,children:[(0,P.jsx)(`span`,{style:{width:30,height:30,borderRadius:`50%`,background:`var(--brand)`,color:`white`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:14,fontWeight:700,flexShrink:0},children:e+1}),t]})}function at({onConfirmar:e}){let[t,n]=(0,o.useState)(`inicial`),[r,i]=(0,o.useState)(null),[a,s]=(0,o.useState)(``),[c,l]=(0,o.useState)(null),[u,d]=(0,o.useState)(null);return(0,P.jsxs)(`div`,{style:{maxWidth:540,margin:`0 auto`,padding:`18px 16px 30px`},children:[(0,P.jsx)(I,{rotulo:`Antes de empezar`,titulo:`¿En qué establecimiento estás?`,detalle:`Así te mostramos la información de tu sitio.`,icono:`chincheta`,margen:16}),(0,P.jsx)(L,{audioSrc:`/audio/elegir_establecimiento.mp3`,titulo:`Doña Rosa te explica cómo elegir tu establecimiento`}),a&&(0,P.jsx)(`p`,{style:{fontSize:14,color:`#6B430E`,fontWeight:500,marginBottom:12},children:a}),t===`inicial`&&(0,P.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,P.jsxs)(`button`,{className:`btn-si`,onClick:()=>{if(!(`geolocation`in navigator)){n(`manual_provincia`);return}n(`buscando`),navigator.geolocation.getCurrentPosition(e=>{let t=Ye(e.coords.latitude,e.coords.longitude,Ke);t?(i(t),n(`confirmar`)):n(`manual_provincia`)},()=>{s(`No se pudo usar tu ubicación. Elige tu establecimiento de la lista.`),n(`manual_provincia`)},{timeout:1e4})},style:{fontSize:18,padding:`16px 0`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:10},children:[(0,P.jsx)(F,{name:`chincheta`,size:22}),` Usar mi ubicación`]}),(0,P.jsx)(`button`,{className:`btn-opcion`,style:{fontSize:15,padding:`12px 14px`,textAlign:`center`,justifyContent:`center`},onClick:()=>n(`manual_provincia`),children:`Elegir de una lista`})]}),t===`buscando`&&(0,P.jsx)(`p`,{style:{fontSize:16,color:`var(--mute)`,textAlign:`center`,padding:`24px 0`},children:`Buscando tu ubicación…`}),t===`confirmar`&&r&&(0,P.jsxs)(`div`,{children:[(0,P.jsxs)(`p`,{style:{fontSize:18,fontWeight:700,color:`#0D253D`,textAlign:`center`,marginBottom:16},children:[`¿Estás en `,r.nombre,`?`]}),(0,P.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,P.jsxs)(`button`,{className:`btn-si`,onClick:()=>e(r),style:{fontSize:22,padding:`16px 0`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:10},children:[(0,P.jsx)(F,{name:`check`,size:24}),` SÍ`]}),(0,P.jsxs)(`button`,{className:`btn-no`,onClick:()=>n(`manual_provincia`),style:{fontSize:22,padding:`16px 0`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:10},children:[(0,P.jsx)(F,{name:`cruz`,size:24}),` NO`]})]})]}),t===`manual_provincia`&&(0,P.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:7},children:[(0,P.jsx)(`p`,{className:`rotulo`,style:{marginBottom:4},children:`Elige tu provincia`}),Ze.map((e,t)=>(0,P.jsx)(it,{indice:t,onClick:()=>{l(e),Qe(rt,e)?n(`manual_distrito`):n(`manual_sin_datos`)},children:e},e))]}),t===`manual_distrito`&&c&&(0,P.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:7},children:[(0,P.jsx)(`p`,{className:`rotulo`,style:{marginBottom:4},children:`Elige tu distrito`}),Object.keys(rt[c]).sort().map((t,r)=>{let i=rt[c][t];return(0,P.jsx)(it,{indice:r,onClick:()=>{i.length===1?e(i[0]):(d(t),n(`manual_lista`))},children:t},t)}),(0,P.jsx)(`button`,{onClick:()=>n(`manual_provincia`),style:{background:`transparent`,border:`none`,padding:`10px 4px`,marginTop:4,cursor:`pointer`,fontFamily:`inherit`,fontWeight:500,fontSize:14,color:`#5B6B7D`,textDecoration:`underline`,textAlign:`left`},children:`← Elegir otra provincia`})]}),t===`manual_lista`&&c&&u&&(0,P.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:7},children:[(0,P.jsx)(`p`,{className:`rotulo`,style:{marginBottom:4},children:`Elige tu establecimiento`}),rt[c][u].map((t,n)=>(0,P.jsx)(it,{indice:n,onClick:()=>e(t),children:t.nombre},t.id)),(0,P.jsx)(`button`,{onClick:()=>n(`manual_distrito`),style:{background:`transparent`,border:`none`,padding:`10px 4px`,marginTop:4,cursor:`pointer`,fontFamily:`inherit`,fontWeight:500,fontSize:14,color:`#5B6B7D`,textDecoration:`underline`,textAlign:`left`},children:`← Elegir otro distrito`})]}),t===`manual_sin_datos`&&c&&(0,P.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,P.jsxs)(`p`,{style:{fontSize:16,fontWeight:500,color:`#0D253D`,lineHeight:1.4},children:[`Aún no tenemos establecimientos de EsSalud registrados en `,c,`.`]}),(0,P.jsx)(`p`,{style:{fontSize:14,color:`#425567`,lineHeight:1.45},children:`Puedes continuar igual: la orientación será general para trámites de EsSalud.`}),(0,P.jsxs)(`button`,{className:`btn-si`,onClick:()=>e($e(c)),style:{fontSize:18,padding:`16px 0`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:10},children:[(0,P.jsx)(F,{name:`check`,size:22}),` Continuar con `,c]}),(0,P.jsx)(`button`,{onClick:()=>n(`manual_provincia`),style:{background:`transparent`,border:`none`,padding:`10px 4px`,marginTop:4,cursor:`pointer`,fontFamily:`inherit`,fontWeight:500,fontSize:14,color:`#5B6B7D`,textDecoration:`underline`,textAlign:`left`},children:`← Elegir otra provincia`})]})]})}var ot=[{patron:/VIRÚ|VIRU|SOLES/i,slug:`viru`}];function st(e){if(!e)return null;let t=ot.find(t=>t.patron.test(e));return t?t.slug:null}var ct=new Map;function lt(e){if(!ct.has(e)){let t=fetch(`/api/establecimiento-info?slug=${encodeURIComponent(e)}`).then(e=>e.json()).catch(t=>{throw ct.delete(e),t});ct.set(e,t)}return ct.get(e)}function ut(e){let[t,n]=(0,o.useState)(null);return(0,o.useEffect)(()=>{if(!e)return;let t=!1;return lt(e).then(r=>{!t&&r.ok&&n({slug:e,datos:r})}).catch(()=>{}),()=>{t=!0}},[e]),e&&t&&t.slug===e?t.datos:null}function dt({info:e}){let t=(e.telefono||``).replace(/\D/g,``);return(0,P.jsxs)(`div`,{style:{background:`var(--sheet)`,border:`2px solid var(--brand)`,borderRadius:`var(--r)`,boxShadow:`var(--sh-1)`,padding:`14px 16px`,marginBottom:12},children:[(0,P.jsx)(`div`,{className:`rotulo`,children:e.nombre||`Tu establecimiento`}),e.estribilloVisible&&(0,P.jsx)(`p`,{style:{color:`var(--brand)`,fontSize:13,fontWeight:600,fontStyle:`italic`,margin:`2px 0 10px`},children:e.estribilloVisible}),e.horario&&(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10,marginBottom:8},children:[(0,P.jsx)(`span`,{style:{color:`var(--brand)`,display:`flex`,flex:`0 0 auto`},children:(0,P.jsx)(F,{name:`reloj`,size:20})}),(0,P.jsx)(`p`,{style:{color:`var(--body)`,fontSize:15,fontWeight:500,margin:0},children:e.horario})]}),t&&(0,P.jsxs)(`div`,{style:{display:`flex`,gap:14,marginBottom:8},children:[(0,P.jsx)(`a`,{href:`tel:+${t}`,style:{color:`var(--brand)`,fontSize:14,fontWeight:600,textDecoration:`none`},children:`Llamar`}),(0,P.jsx)(`a`,{href:`https://wa.me/${t}`,target:`_blank`,rel:`noopener noreferrer`,style:{color:`var(--brand)`,fontSize:14,fontWeight:600,textDecoration:`none`},children:`WhatsApp`})]}),e.aviso&&(0,P.jsx)(`p`,{style:{color:`var(--mute-deep)`,fontSize:14,fontWeight:400,marginTop:4,marginBottom:0},children:e.aviso}),e.anuncios&&e.anuncios.length>0&&(0,P.jsx)(`ul`,{style:{listStyle:`none`,margin:`8px 0 0`,padding:0,display:`grid`,gap:4},children:e.anuncios.slice(0,3).map((e,t)=>(0,P.jsxs)(`li`,{style:{display:`flex`,gap:6,alignItems:`baseline`},children:[(0,P.jsx)(`span`,{style:{color:`var(--mute-deep)`,fontSize:14,fontWeight:400},children:e.texto}),(0,P.jsxs)(`span`,{style:{color:`var(--mute)`,fontSize:11,fontWeight:600,flex:`0 0 auto`},children:[`hasta `,e.hasta.slice(8,10),`/`,e.hasta.slice(5,7)]})]},t))})]})}function ft({slug:e}){let t=ut(e);return!t||!t.existe||!(t.horario||t.telefono||t.aviso||t.estribilloVisible||t.anuncios&&t.anuncios.length>0)?null:(0,P.jsx)(dt,{info:t})}function pt(e){try{return localStorage.getItem(`anuncio-reaccion:${e}`)===`1`}catch{return!1}}function mt(e){try{localStorage.setItem(`anuncio-reaccion:${e}`,`1`)}catch{}}function ht({anuncio:e,slug:t,onCerrar:n,estribillo:r,animacion:i}){let[a,s]=(0,o.useState)(()=>pt(e.id)),c=async n=>{if(!a&&e.id){s(!0),mt(e.id);try{await fetch(`/api/establecimiento-info`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({accion:`reaccionar`,slug:t,id:e.id,tipo:n})})}catch{}}};return(0,P.jsx)(`div`,{style:{position:`fixed`,inset:0,background:`rgba(15,45,85,0.55)`,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:20,zIndex:1200},children:(0,P.jsxs)(`div`,{className:i===`rebote`?`popup-rebote`:i===`aparicion`?`popup-aparece`:``,style:{background:`var(--sheet)`,borderRadius:`var(--r)`,maxWidth:380,width:`100%`,boxShadow:`0 12px 32px rgba(0,0,0,0.25)`,overflow:`hidden`},children:[(0,P.jsx)(`img`,{src:e.imagenUrl,alt:``,style:{width:`100%`,display:`block`,maxHeight:320,objectFit:`cover`}}),(0,P.jsxs)(`div`,{style:{padding:`16px 18px 18px`},children:[(0,P.jsx)(`p`,{style:{fontSize:15,fontWeight:500,color:`var(--ink)`,lineHeight:1.4,marginBottom:14},children:e.texto}),r&&(0,P.jsx)(`p`,{style:{color:`var(--brand)`,fontSize:13,fontWeight:600,fontStyle:`italic`,marginBottom:14},children:r}),e.id&&(0,P.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,gap:10,marginBottom:14},children:a?(0,P.jsx)(`p`,{style:{fontSize:13,fontWeight:600,color:`var(--mute-deep)`,margin:0},children:`Gracias por tu opinión`}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`button`,{type:`button`,onClick:()=>c(`me_gusta`),"aria-label":`Me gusta este aviso`,style:{display:`flex`,alignItems:`center`,gap:6,border:`1px solid var(--line)`,background:`var(--sheet)`,borderRadius:`var(--r)`,padding:`8px 14px`,fontFamily:`inherit`,fontWeight:600,fontSize:14,color:`var(--body)`,cursor:`pointer`},children:`👍 Me gusta`}),(0,P.jsx)(`button`,{type:`button`,onClick:()=>c(`no_me_gusta`),"aria-label":`No me gusta este aviso`,style:{display:`flex`,alignItems:`center`,gap:6,border:`1px solid var(--line)`,background:`var(--sheet)`,borderRadius:`var(--r)`,padding:`8px 14px`,fontFamily:`inherit`,fontWeight:600,fontSize:14,color:`var(--body)`,cursor:`pointer`},children:`👎 No me gusta`})]})}),(0,P.jsxs)(`button`,{type:`button`,onClick:n,style:{width:`100%`,border:`none`,borderRadius:`var(--r)`,background:`var(--brand)`,color:`white`,fontFamily:`inherit`,fontWeight:700,fontSize:15,padding:12,cursor:`pointer`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:6},children:[(0,P.jsx)(F,{name:`cruz`,size:16}),` Cerrar`]})]})]})})}function gt({slug:e}){let[t,n]=(0,o.useState)(null),[r,i]=(0,o.useState)(void 0),[a,s]=(0,o.useState)(!0),[c,l]=(0,o.useState)(null);return(0,o.useEffect)(()=>{if(!e)return;let t=!1;return lt(e).then(e=>{if(!t&&e.ok){if(e.popupVisible)(e.popupVisible.destino||`popup`)!==`sala_espera`&&(n({texto:e.popupVisible.texto,imagenUrl:e.popupVisible.imagenUrl}),i(e.popupVisible.animacion));else{let t=(e.anuncios||[]).find(e=>e.imagenUrl);t&&n(t)}e.estribilloVisible&&l(e.estribilloVisible)}}).catch(()=>{}),()=>{t=!0}},[e]),!t||!a?null:(0,P.jsx)(ht,{anuncio:t,slug:e,onCerrar:()=>s(!1),estribillo:c,animacion:r})}function _t({estado:e}){return(0,P.jsx)(`span`,{className:`candado-wrap candado-${e}`,"aria-hidden":`true`,children:(0,P.jsxs)(`svg`,{width:20,height:20,viewBox:`0 0 24 30`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,P.jsx)(`rect`,{x:`4.5`,y:`10.5`,width:`15`,height:`10`,rx:`2.2`}),(0,P.jsx)(`path`,{className:`candado-arco`,d:`M8 10.5V7.8a4 4 0 0 1 8 0v2.7`})]})})}function vt({estado:e,titulo:t,children:n}){let r=(0,o.useRef)(null),i=e=>{if(window.matchMedia(`(prefers-reduced-motion: reduce)`).matches)return;let t=r.current;if(!t)return;let n=t.getBoundingClientRect(),i=(e.clientX-n.left)/n.width-.5,a=(e.clientY-n.top)/n.height-.5;t.style.transform=`perspective(900px) rotateX(${(-a*10).toFixed(2)}deg) rotateY(${(i*10).toFixed(2)}deg)`},a=()=>{let e=r.current;e&&(e.style.transform=``)};return(0,P.jsxs)(`div`,{className:`acceso-ambiente`,children:[(0,P.jsx)(`div`,{className:`acceso-blob acceso-blob-1`,"aria-hidden":`true`}),(0,P.jsx)(`div`,{className:`acceso-blob acceso-blob-2`,"aria-hidden":`true`}),(0,P.jsx)(`div`,{className:`acceso-blob acceso-blob-3`,"aria-hidden":`true`}),(0,P.jsx)(`div`,{ref:r,className:`acceso-tilt`,onPointerMove:i,onPointerLeave:a,onPointerCancel:a,children:(0,P.jsxs)(`div`,{className:`panel-acceso`,"data-estado":e,children:[(0,P.jsx)(`div`,{className:`panel-acceso-insignia`,"aria-hidden":`true`,children:(0,P.jsx)(F,{name:`candado`,size:22})}),t&&(0,P.jsx)(`h2`,{className:`panel-acceso-titulo`,children:t}),n]})})]})}function B({fase:e,onClick:t,disabled:n,colorBase:r,colorTexto:i=`white`,children:a}){return(0,P.jsxs)(`button`,{type:`button`,onClick:t,disabled:n,"aria-busy":e===`cargando`,"data-fase":e,className:`btn-morph`,style:{"--btn-morph-base":r,width:`100%`,border:`none`,borderRadius:`var(--r)`,color:i,fontFamily:`inherit`,fontWeight:700,fontSize:16,padding:16,cursor:n?`default`:`pointer`,opacity:n&&e===`idle`?.5:1},children:[(0,P.jsx)(`span`,{className:`btn-morph-label`,children:e===`exito`?`¡Listo!`:a}),(0,P.jsx)(`span`,{className:`btn-morph-spinner`,"aria-hidden":`true`,children:(0,P.jsx)(`span`,{className:`seguro-spinner`,style:{width:22,height:22,borderWidth:3}})}),(0,P.jsx)(`span`,{className:`btn-morph-check`,"aria-hidden":`true`,children:(0,P.jsx)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,children:(0,P.jsx)(`path`,{d:`M4 12.5L9.5 18L20 6`,stroke:`white`,strokeWidth:`3`,strokeLinecap:`round`,strokeLinejoin:`round`})})})]})}function yt(e){return new Promise((t,n)=>{let r=new FileReader;r.onerror=()=>n(Error(`no se pudo leer el archivo`)),r.onload=()=>{let e=new Image;e.onerror=()=>n(Error(`no se pudo decodificar la imagen`)),e.onload=()=>{let n=Math.min(1,900/e.width),r=Math.round(e.width*n),i=Math.round(e.height*n),a=document.createElement(`canvas`);a.width=r,a.height=i,a.getContext(`2d`).drawImage(e,0,0,r,i),t(a.toDataURL(`image/jpeg`,.7))},e.src=r.result},r.readAsDataURL(e)})}function bt(){return new Date().toLocaleDateString(`en-CA`,{timeZone:`America/Lima`})}function xt(e,t){return e.hasta<t?`Vencido`:e.desde>t?`Programado`:`Vigente`}function St({endpoint:e,credenciales:t,anuncios:n,onCambio:r,nombre:i}){let[a,s]=(0,o.useState)(``),[c,l]=(0,o.useState)(bt),[u,d]=(0,o.useState)(``),[f,p]=(0,o.useState)(null),[m,h]=(0,o.useState)(null),[g,_]=(0,o.useState)(!1),[v,y]=(0,o.useState)(null),[b,x]=(0,o.useState)(``),[S,C]=(0,o.useState)(!1),[w,T]=(0,o.useState)(!0),E=async e=>{let t=e.target.files?.[0];if(t)try{let e=await yt(t);p(e),h(e)}catch{x(`No se pudo procesar la imagen.`)}},D=async()=>{if(!a.trim()){x(`Escribe el texto del anuncio.`);return}if(!c||!u){x(`Completa las dos fechas.`);return}if(u<c){x(`La fecha 'hasta' no puede ser anterior a 'desde'.`);return}x(``),_(!0);try{let n=await fetch(e,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({...t,accion:`crear_anuncio`,texto:a.trim(),desde:c,hasta:u,imagenBase64:f||void 0})}),i=await n.json();if(!n.ok||!i.ok){x(i.error||`No se pudo publicar.`);return}s(``),d(``),p(null),h(null),r(i.anuncios)}catch{x(`No hay conexión o el servicio no responde.`)}finally{_(!1)}},ee=async n=>{x(``),y(n);try{let i=await fetch(e,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({...t,accion:`borrar_anuncio`,id:n})}),a=await i.json();i.ok&&a.ok?r(a.anuncios):x(a.error||`No se pudo borrar.`)}catch{x(`No hay conexión o el servicio no responde.`)}finally{y(null)}},O=bt();return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(`div`,{className:`panel-admin-grid`,style:{marginTop:18},children:[(0,P.jsxs)(`div`,{className:`panel-admin-card`,children:[(0,P.jsx)(`p`,{className:`subrotulo`,style:{margin:`0 0 10px`},children:`Nuevo anuncio`}),(0,P.jsx)(`textarea`,{className:`seguro-input`,style:{marginBottom:10,fontSize:15,fontWeight:400,minHeight:70,resize:`vertical`},value:a,onChange:e=>s(e.target.value),placeholder:`Ej: Jornada de vacunación el 15/09`,maxLength:300}),(0,P.jsxs)(`div`,{className:`fila-2`,style:{marginBottom:10},children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`anuncio-desde`,children:`Desde`}),(0,P.jsx)(`input`,{id:`anuncio-desde`,type:`date`,className:`seguro-input`,value:c,onChange:e=>l(e.target.value)})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`anuncio-hasta`,children:`Hasta`}),(0,P.jsx)(`input`,{id:`anuncio-hasta`,type:`date`,className:`seguro-input`,value:u,onChange:e=>d(e.target.value)})]})]}),(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`anuncio-imagen`,children:`Imagen (opcional)`}),(0,P.jsx)(`input`,{id:`anuncio-imagen`,type:`file`,accept:`image/*`,onChange:E,style:{marginBottom:10}}),m&&(0,P.jsx)(`img`,{src:m,alt:``,style:{maxWidth:160,borderRadius:`var(--r)`,marginBottom:10,display:`block`}}),b&&(0,P.jsx)(`p`,{style:{fontSize:13,color:`var(--admin-danger)`,margin:`0 0 10px`},children:b}),(0,P.jsxs)(`div`,{style:{display:`flex`,gap:10,marginBottom:14},children:[(0,P.jsx)(`button`,{type:`button`,onClick:()=>{T(!0),C(!0)},disabled:!a.trim()||!u,style:{flex:`0 0 auto`,padding:`10px 14px`,background:`var(--admin-bg-elevated)`,border:`2px solid var(--admin-line)`,borderRadius:`var(--r)`,cursor:`pointer`,fontFamily:`inherit`,fontWeight:600,fontSize:13,color:`var(--admin-ink)`,opacity:!a.trim()||!u?.5:1},children:`Vista previa`}),(0,P.jsx)(`div`,{style:{flex:1},children:(0,P.jsx)(B,{onClick:D,disabled:g,fase:g?`cargando`:`idle`,colorBase:`var(--admin-brand)`,colorTexto:`var(--admin-brand-texto)`,children:`Publicar`})})]})]}),n&&n.length>0&&(0,P.jsxs)(`div`,{className:`panel-admin-card`,children:[(0,P.jsxs)(`p`,{className:`subrotulo`,style:{margin:`0 0 10px`},children:[`Historial (`,n.length,`)`]}),(0,P.jsx)(`ul`,{style:{listStyle:`none`,margin:0,padding:0,display:`grid`,gap:8},children:n.map(e=>(0,P.jsxs)(`li`,{style:{display:`flex`,gap:10,alignItems:`flex-start`,border:`1px solid var(--admin-line)`,borderRadius:`var(--r)`,padding:`10px 12px`},children:[e.imagenUrl&&(0,P.jsx)(`img`,{src:e.imagenUrl,alt:``,style:{width:40,height:40,borderRadius:6,objectFit:`cover`,flex:`0 0 auto`}}),(0,P.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,P.jsx)(`p`,{style:{fontSize:14,fontWeight:500,color:`var(--admin-ink)`,margin:0,wordBreak:`break-word`},children:e.texto}),(0,P.jsxs)(`p`,{style:{fontSize:12,color:`var(--admin-mute)`,margin:`3px 0 0`},children:[xt(e,O),` · `,e.desde,` a `,e.hasta]})]}),(0,P.jsx)(`button`,{type:`button`,onClick:()=>ee(e.id),disabled:v===e.id,"aria-label":`Borrar anuncio`,style:{background:`transparent`,border:`none`,cursor:`pointer`,color:`var(--admin-danger)`,opacity:v===e.id?.5:1,flex:`0 0 auto`},children:(0,P.jsx)(F,{name:`cruz`,size:16})})]},e.id))})]})]}),S&&(()=>{let e=bt(),t=(n||[]).filter(t=>xt(t,e)===`Vigente`),r={texto:a.trim(),desde:c,hasta:u,imagenUrl:m},o={nombre:i,anuncios:[r,...t]};return(0,P.jsx)(`div`,{style:{position:`fixed`,inset:0,background:`rgba(15,45,85,0.55)`,display:`flex`,justifyContent:`center`,padding:20,zIndex:1300,overflowY:`auto`},children:(0,P.jsxs)(`div`,{style:{maxWidth:380,width:`100%`,margin:`auto`,display:`grid`,gap:14},children:[(0,P.jsx)(`p`,{style:{fontSize:13,fontWeight:700,color:`white`,margin:0,textAlign:`center`},children:`Así lo va a ver el paciente`}),(0,P.jsx)(dt,{info:o}),m&&w&&(0,P.jsx)(ht,{anuncio:r,onCerrar:()=>T(!1)}),(0,P.jsx)(`button`,{type:`button`,onClick:()=>C(!1),style:{width:`100%`,border:`none`,borderRadius:`var(--r)`,background:`white`,color:`var(--ink)`,fontFamily:`inherit`,fontWeight:700,fontSize:15,padding:12,cursor:`pointer`},children:`Cerrar vista previa`})]})})})()]})}function Ct(e){return new Promise((t,n)=>{let r=new FileReader;r.onerror=()=>n(Error(`no se pudo leer el archivo`)),r.onload=()=>{let e=new Image;e.onerror=()=>n(Error(`no se pudo decodificar la imagen`)),e.onload=()=>{let n=Math.min(1,900/e.width),r=Math.round(e.width*n),i=Math.round(e.height*n),a=document.createElement(`canvas`);a.width=r,a.height=i,a.getContext(`2d`).drawImage(e,0,0,r,i),t(a.toDataURL(`image/jpeg`,.7))},e.src=r.result},r.readAsDataURL(e)})}var wt=[{id:`rebote`,etiqueta:`Rebote`,detalle:`Entra con un pequeño salto`},{id:`aparicion`,etiqueta:`Aparición`,detalle:`Entra suave, sin salto`}],Tt=[{id:`popup`,etiqueta:`Pop-up`,detalle:`Aparece como ventana al cargar`},{id:`sala_espera`,etiqueta:`Sala de espera`,detalle:`Rota en las pantallas de carga`},{id:`ambos`,etiqueta:`Ambos`,detalle:`Las dos cosas a la vez`}];function Et({endpoint:e,credenciales:t,popup:n,onCambio:r,anuncios:i}){let[a,s]=(0,o.useState)(n?.texto||``),[c,l]=(0,o.useState)(n?.imagenUrl||null),[u,d]=(0,o.useState)(null),[f,p]=(0,o.useState)(n?.animacion||`rebote`),[m,h]=(0,o.useState)(n?.destino||`popup`),[g,_]=(0,o.useState)(n?.desde||``),[v,y]=(0,o.useState)(n?.hasta||``),[b,x]=(0,o.useState)(!1),[S,C]=(0,o.useState)(!1),[w,T]=(0,o.useState)(!1),[E,D]=(0,o.useState)(``),[ee,O]=(0,o.useState)(``),te=async e=>{let t=e.target.files?.[0];if(t)try{let e=await Ct(t);d(e),l(e)}catch{D(`No se pudo procesar la imagen.`)}},k=e=>{s(e.texto),l(e.imagenUrl||null),d(null),x(!1)},ne=m!==`popup`&&!c;return(0,P.jsxs)(`div`,{className:`panel-admin-card`,style:{marginTop:18},children:[(0,P.jsx)(`p`,{className:`subrotulo`,style:{margin:`0 0 10px`},children:`Pop-up exclusivo`}),(0,P.jsx)(`p`,{style:{fontSize:12,color:`var(--admin-mute)`,margin:`0 0 14px`},children:`Reemplaza al popup automático mientras esté vigente. Sin fechas queda permanente.`}),(0,P.jsx)(`textarea`,{className:`seguro-input`,style:{marginBottom:10,fontSize:15,fontWeight:400,minHeight:70,resize:`vertical`},value:a,onChange:e=>s(e.target.value),placeholder:`Ej: Campaña de vacunación esta semana, sin cita previa`,maxLength:300}),(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`popup-imagen`,children:`Imagen`}),(0,P.jsxs)(`div`,{style:{display:`flex`,gap:10,alignItems:`center`,marginBottom:10,flexWrap:`wrap`},children:[(0,P.jsx)(`input`,{id:`popup-imagen`,type:`file`,accept:`image/*`,onChange:te}),i&&i.length>0&&(0,P.jsx)(`button`,{type:`button`,onClick:()=>x(e=>!e),style:{background:`var(--admin-bg-elevated)`,border:`1px solid var(--admin-line)`,borderRadius:`var(--r)`,padding:`6px 12px`,cursor:`pointer`,fontFamily:`inherit`,fontWeight:600,fontSize:12,color:`var(--admin-ink)`},children:`Reusar un anuncio…`})]}),b&&(0,P.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:6,marginBottom:12,maxHeight:220,overflowY:`auto`},children:i.map(e=>(0,P.jsxs)(`button`,{type:`button`,onClick:()=>k(e),className:`panel-admin-autocompletar-item`,style:{display:`flex`,gap:10,alignItems:`center`,textAlign:`left`},children:[e.imagenUrl&&(0,P.jsx)(`img`,{src:e.imagenUrl,alt:``,style:{width:32,height:32,borderRadius:6,objectFit:`cover`,flex:`0 0 auto`}}),(0,P.jsx)(`span`,{style:{fontSize:13,color:`var(--admin-ink)`,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},children:e.texto})]},e.id))}),c&&(0,P.jsx)(`img`,{src:c,alt:``,style:{maxWidth:160,borderRadius:`var(--r)`,marginBottom:10,display:`block`}}),(0,P.jsx)(`p`,{className:`seguro-label`,style:{marginBottom:8},children:`Animación`}),(0,P.jsx)(`div`,{style:{display:`flex`,gap:10,marginBottom:10,flexWrap:`wrap`},children:wt.map(e=>(0,P.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:8,cursor:`pointer`,border:`2px solid ${f===e.id?`var(--admin-brand)`:`var(--admin-line)`}`,borderRadius:`var(--r)`,padding:`8px 12px`,flex:`1 1 160px`},children:[(0,P.jsx)(`input`,{type:`radio`,name:`popup-animacion`,value:e.id,checked:f===e.id,onChange:()=>p(e.id)}),(0,P.jsxs)(`span`,{children:[(0,P.jsx)(`span`,{style:{display:`block`,fontSize:13,fontWeight:700,color:`var(--admin-ink)`},children:e.etiqueta}),(0,P.jsx)(`span`,{style:{display:`block`,fontSize:11,color:`var(--admin-mute)`},children:e.detalle})]})]},e.id))}),(0,P.jsx)(`p`,{className:`seguro-label`,style:{marginBottom:8},children:`Dónde se muestra`}),(0,P.jsx)(`div`,{style:{display:`flex`,gap:10,marginBottom:10,flexWrap:`wrap`},children:Tt.map(e=>(0,P.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:8,cursor:`pointer`,border:`2px solid ${m===e.id?`var(--admin-brand)`:`var(--admin-line)`}`,borderRadius:`var(--r)`,padding:`8px 12px`,flex:`1 1 150px`},children:[(0,P.jsx)(`input`,{type:`radio`,name:`popup-destino`,value:e.id,checked:m===e.id,onChange:()=>h(e.id)}),(0,P.jsxs)(`span`,{children:[(0,P.jsx)(`span`,{style:{display:`block`,fontSize:13,fontWeight:700,color:`var(--admin-ink)`},children:e.etiqueta}),(0,P.jsx)(`span`,{style:{display:`block`,fontSize:11,color:`var(--admin-mute)`},children:e.detalle})]})]},e.id))}),ne&&(0,P.jsx)(`p`,{style:{fontSize:12,color:`var(--admin-danger)`,margin:`-4px 0 10px`},children:`Sube una imagen para mostrarlo en sala de espera.`}),(0,P.jsxs)(`div`,{className:`fila-2`,style:{marginBottom:10},children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`popup-desde`,children:`Desde (opcional)`}),(0,P.jsx)(`input`,{id:`popup-desde`,type:`date`,className:`seguro-input`,value:g,onChange:e=>_(e.target.value)})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`popup-hasta`,children:`Hasta (opcional)`}),(0,P.jsx)(`input`,{id:`popup-hasta`,type:`date`,className:`seguro-input`,value:v,onChange:e=>y(e.target.value)})]})]}),E&&(0,P.jsx)(`p`,{style:{fontSize:13,color:`var(--admin-danger)`,margin:`0 0 10px`},children:E}),ee&&!E&&(0,P.jsx)(`p`,{style:{fontSize:13,color:`var(--admin-success)`,margin:`0 0 10px`},children:ee}),(0,P.jsxs)(`div`,{style:{display:`flex`,gap:10},children:[(0,P.jsx)(`button`,{type:`button`,onClick:()=>C(!0),disabled:!a.trim(),style:{flex:`0 0 auto`,padding:`10px 14px`,background:`var(--admin-bg-elevated)`,border:`2px solid var(--admin-line)`,borderRadius:`var(--r)`,cursor:`pointer`,fontFamily:`inherit`,fontWeight:600,fontSize:13,color:`var(--admin-ink)`,opacity:a.trim()?1:.5},children:`Vista previa`}),(0,P.jsx)(`div`,{style:{flex:1},children:(0,P.jsx)(B,{onClick:async()=>{if(!a.trim()){D(`Escribe el texto del pop-up.`);return}if(ne){D(`Sube una imagen para mostrarlo en sala de espera.`);return}if(v&&g&&v<g){D(`La fecha 'hasta' no puede ser anterior a 'desde'.`);return}D(``),O(``),T(!0);try{let n=await fetch(e,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({...t,accion:`guardar_popup`,texto:a.trim(),animacion:f,destino:m,desde:g||void 0,hasta:v||void 0,imagenBase64:u||void 0,imagenUrlReusada:!u&&c?c:void 0})}),i=await n.json();if(!n.ok||!i.ok){D(i.error||`No se pudo guardar.`);return}d(null),O(`Pop-up guardado.`),r(i.popup)}catch{D(`No hay conexión o el servicio no responde.`)}finally{T(!1)}},disabled:w||!a.trim()||ne,fase:w?`cargando`:`idle`,colorBase:`var(--admin-brand)`,colorTexto:`var(--admin-brand-texto)`,children:`Guardar pop-up`})})]}),S&&(0,P.jsx)(`div`,{style:{position:`fixed`,inset:0,background:`rgba(15,45,85,0.55)`,display:`flex`,justifyContent:`center`,alignItems:`center`,padding:20,zIndex:1300},children:(0,P.jsxs)(`div`,{style:{maxWidth:380,width:`100%`},children:[(0,P.jsx)(`p`,{style:{fontSize:13,fontWeight:700,color:`white`,margin:`0 0 10px`,textAlign:`center`},children:`Así lo va a ver el paciente`}),(0,P.jsx)(ht,{anuncio:{texto:a,imagenUrl:c},animacion:f,onCerrar:()=>C(!1)})]})})]})}var Dt=[{id:`datos`,titulo:`Datos del establecimiento`},{id:`anuncios`,titulo:`Anuncios`},{id:`administrativos`,titulo:`Datos administrativos`},{id:`acceso`,titulo:`Acceso`},{id:`estadisticas`,titulo:`Estadísticas`},{id:`tramite`,titulo:`Trámite`}],Ot=new Set(Dt.map(e=>e.id));function kt(e){let t=new URLSearchParams(e).get(`seccion`);return Ot.has(t)?t:Dt[0].id}function At({seccionActiva:e,onCambiar:t}){return(0,P.jsx)(`nav`,{className:`panel-nav`,"aria-label":`Secciones del establecimiento`,children:Dt.map(n=>(0,P.jsx)(`button`,{type:`button`,className:`panel-nav-item${n.id===e?` activa`:``}`,"aria-current":n.id===e,onClick:()=>t(n.id),children:n.titulo},n.id))})}var jt=6;function Mt({titulo:e=`Verifica tu acceso`,destino:t,estado:n,error:r,onVerificar:i,onReenviar:a,reenviarCargando:s,reenviarDisponibleEn:c=0,pedirPasswordNueva:l=!1,passwordNueva:u,setPasswordNueva:d}){let[f,p]=(0,o.useState)(()=>Array(jt).fill(``)),m=(0,o.useRef)([]),h=f.join(``),g=h.length===jt,_=!l||(u||``).length>=8;(0,o.useEffect)(()=>{g&&_&&n!==`cargando`&&n!==`exito`&&i(h)},[g]);let v=(e,t)=>{let n=t.replace(/\D/g,``).slice(-1);p(t=>{let r=[...t];return r[e]=n,r}),n&&e<5&&m.current[e+1]?.focus()},y=(e,t)=>{t.key===`Backspace`&&!f[e]&&e>0&&m.current[e-1]?.focus()},b=e=>{let t=e.clipboardData.getData(`text`).replace(/\D/g,``).slice(0,jt);t&&(e.preventDefault(),p(e=>{let n=[...e];for(let e=0;e<jt;e++)n[e]=t[e]||n[e];return n}),m.current[Math.min(t.length,5)]?.focus())},x=n===`cargando`||n===`exito`;return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(vt,{titulo:e,estado:n,children:[(0,P.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:10},children:(0,P.jsx)(_t,{estado:n})}),n===`exito`?(0,P.jsxs)(`div`,{className:`panel-otp-exito`,children:[(0,P.jsxs)(`svg`,{className:`panel-otp-check`,width:`72`,height:`72`,viewBox:`0 0 72 72`,fill:`none`,"aria-hidden":`true`,children:[(0,P.jsx)(`circle`,{className:`panel-otp-check-circulo`,cx:`36`,cy:`36`,r:`32`,stroke:`currentColor`,strokeWidth:`3`}),(0,P.jsx)(`path`,{className:`panel-otp-check-marca`,d:`M22 37L31 46L50 25`,stroke:`currentColor`,strokeWidth:`4`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),(0,P.jsx)(`p`,{className:`panel-otp-exito-texto`,children:`Verificado y seguro`})]}):(0,P.jsxs)(P.Fragment,{children:[t&&(0,P.jsxs)(`p`,{className:`panel-otp-destino`,children:[`Enviamos un código a `,(0,P.jsx)(`strong`,{children:t})]}),(0,P.jsxs)(`div`,{className:`panel-otp-casillas`,"data-estado":n,onPaste:b,children:[f.map((e,t)=>(0,P.jsxs)(`div`,{className:`panel-otp-celda`,children:[(0,P.jsx)(`span`,{className:`panel-otp-anillo`,"aria-hidden":`true`}),(0,P.jsx)(`input`,{ref:e=>{m.current[t]=e},type:`text`,inputMode:`numeric`,autoComplete:`one-time-code`,maxLength:1,className:`panel-otp-casilla`,"data-llena":!!e,value:e,onChange:e=>v(t,e.target.value),onKeyDown:e=>y(t,e),disabled:x,autoFocus:t===0})]},t)),n===`cargando`&&(0,P.jsxs)(`div`,{className:`panel-otp-sello`,"aria-hidden":`true`,children:[(0,P.jsx)(`span`,{className:`panel-otp-rayos`}),(0,P.jsx)(`span`,{className:`panel-otp-sello-nucleo`})]})]})]}),l&&n!==`exito`&&(0,P.jsxs)(`div`,{style:{marginTop:14,textAlign:`left`},children:[(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`otp-password-nueva`,children:`Contraseña nueva`}),(0,P.jsx)(`input`,{id:`otp-password-nueva`,type:`password`,className:`seguro-input`,value:u,onChange:e=>d(e.target.value),placeholder:`Mínimo 8 caracteres`,disabled:x})]})]}),(0,P.jsx)(B,{onClick:()=>i(h),disabled:!g||!_||x,fase:n===`exito`?`exito`:n===`cargando`?`cargando`:`idle`,colorBase:`var(--admin-brand)`,colorTexto:`var(--admin-brand-texto)`,children:`Verificar código`}),r&&(0,P.jsx)(`div`,{style:{background:`rgba(194,85,91,0.12)`,border:`2px solid var(--admin-danger)`,borderRadius:`var(--r)`,padding:`12px 14px`,marginTop:14},children:(0,P.jsx)(`p`,{style:{fontSize:14,fontWeight:500,color:`var(--admin-danger)`,margin:0},children:r})}),(0,P.jsx)(`button`,{type:`button`,className:`panel-otp-reenviar`,onClick:a,disabled:s||c>0||x,children:c>0?`Reenviar código en ${c}s`:s?`Enviando…`:`Reenviar código`})]})}function Nt({etiqueta:e,valor:t,color:n}){return(0,P.jsxs)(`div`,{style:{flex:`1 1 100px`,background:`var(--admin-bg-elevated)`,border:`1px solid var(--admin-line)`,borderRadius:`var(--admin-r-lg)`,padding:`12px 14px`},children:[(0,P.jsx)(`p`,{style:{fontSize:22,fontWeight:800,color:n||`var(--admin-ink)`,margin:0,fontVariantNumeric:`tabular-nums`},children:t}),(0,P.jsx)(`p`,{style:{fontSize:11,color:`var(--admin-mute)`,textTransform:`uppercase`,letterSpacing:`0.04em`,margin:`2px 0 0`},children:e})]})}function Pt({anuncios:e}){let t=e||[],n=t.reduce((e,t)=>e+(t.meGusta||0),0),r=t.reduce((e,t)=>e+(t.noMeGusta||0),0);return(0,P.jsxs)(`div`,{children:[(0,P.jsxs)(`div`,{style:{display:`flex`,gap:10,marginBottom:18,flexWrap:`wrap`},children:[(0,P.jsx)(Nt,{etiqueta:`Anuncios`,valor:t.length}),(0,P.jsx)(Nt,{etiqueta:`Me gusta`,valor:n,color:`var(--admin-success)`}),(0,P.jsx)(Nt,{etiqueta:`No me gusta`,valor:r,color:`var(--admin-danger)`})]}),t.length===0?(0,P.jsx)(`p`,{style:{fontSize:13,color:`var(--admin-mute)`,margin:0},children:`Todavía no hay anuncios para medir.`}):(0,P.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:t.map(e=>(0,P.jsxs)(`div`,{style:{background:`var(--admin-bg-elevated)`,border:`1px solid var(--admin-line)`,borderRadius:`var(--admin-r-sm)`,padding:`10px 12px`},children:[(0,P.jsx)(`p`,{style:{fontSize:13,color:`var(--admin-ink)`,margin:`0 0 4px`},children:e.texto}),(0,P.jsxs)(`p`,{style:{fontSize:12,color:`var(--admin-mute)`,margin:0},children:[`👍 `,e.meGusta||0,` · 👎 `,e.noMeGusta||0,` · vigente hasta `,e.hasta]})]},e.id))})]})}var Ft=[{value:`1`,label:`DNI`},{value:`2`,label:`Carné de extranjería`},{value:`3`,label:`PTP`},{value:`4`,label:`Pasaporte`}],It=[{value:`en_espera`,label:`1. Expediente en espera`},{value:`en_revision`,label:`2. Expediente en revisión`},{value:`observado`,label:`3a. Expediente observado`},{value:`concluido`,label:`3b. Revisión concluida`}];function Lt(e){return new Date(e).toLocaleString(`es-PE`,{timeZone:`America/Lima`,dateStyle:`short`,timeStyle:`short`})}function Rt({endpoint:e,credenciales:t}){let[n,r]=(0,o.useState)(`1`),[i,a]=(0,o.useState)(``),[s,c]=(0,o.useState)(``),[l,u]=(0,o.useState)(null),[d,f]=(0,o.useState)(`en_espera`),[p,m]=(0,o.useState)(!1),[h,g]=(0,o.useState)(!1),[_,v]=(0,o.useState)(``),[y,b]=(0,o.useState)(``),x=()=>{u(null),c(``),b(``)};return(0,P.jsxs)(`div`,{className:`panel-admin-grid`,children:[(0,P.jsxs)(`div`,{className:`panel-admin-card`,children:[(0,P.jsx)(`p`,{className:`subrotulo`,style:{margin:`0 0 10px`},children:`Buscar expediente`}),(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`avance-tipo`,children:`Tipo de documento`}),(0,P.jsx)(`select`,{id:`avance-tipo`,className:`seguro-input`,style:{marginBottom:10,appearance:`auto`},value:n,onChange:e=>{r(e.target.value),x()},children:Ft.map(e=>(0,P.jsx)(`option`,{value:e.value,children:e.label},e.value))}),(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`avance-num`,children:`Número de documento`}),(0,P.jsx)(`input`,{id:`avance-num`,type:`text`,inputMode:`numeric`,className:`seguro-input`,style:{marginBottom:10},value:i,onChange:e=>{a(e.target.value.replace(/[^0-9]/g,``)),x()},placeholder:`Ej: 12345678`}),(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`avance-nro`,children:`Número de trámite (opcional)`}),(0,P.jsx)(`input`,{id:`avance-nro`,type:`text`,inputMode:`numeric`,className:`seguro-input`,style:{marginBottom:14},value:s,onChange:e=>c(e.target.value.replace(/[^0-9]/g,``)),placeholder:`Ej: 20260012345`}),(0,P.jsx)(B,{onClick:async()=>{if(i){v(``),b(``),u(null),m(!0);try{let r=await fetch(e,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({...t,tipoDoc:n,numDoc:i})}),a=await r.json();if(!r.ok||!a.ok){v(a.error||`No se pudo consultar.`);return}u(a),a.existe&&a.estado&&f(a.estado),a.existe&&a.nroTramite&&c(String(a.nroTramite))}catch{v(`No hay conexión o el servicio no responde.`)}finally{m(!1)}}},disabled:p||!i,fase:p?`cargando`:`idle`,colorBase:`var(--admin-brand)`,colorTexto:`var(--admin-brand-texto)`,children:`Consultar estado actual`}),l&&l.existe===!1&&(0,P.jsx)(`p`,{style:{fontSize:13,color:`var(--admin-mute)`,margin:`14px 0 0`},children:`Todavía no hay un expediente con ese documento — al actualizar el estado se crea.`}),l&&l.existe&&(0,P.jsxs)(`div`,{style:{background:`var(--admin-bg-soft)`,border:`1px solid var(--admin-line)`,borderRadius:`var(--r)`,padding:14,margin:`14px 0 0`},children:[(0,P.jsxs)(`p`,{style:{fontSize:14,fontWeight:700,color:`var(--admin-ink)`,margin:0},children:[`Estado actual: `,It.find(e=>e.value===l.estado)?.label||l.estado]}),l.nroTramite&&(0,P.jsxs)(`p`,{style:{fontSize:13,color:`var(--admin-body)`,margin:`4px 0 0`},children:[`Trámite N° `,l.nroTramite]}),l.actualizadoEn&&(0,P.jsxs)(`p`,{style:{fontSize:12,color:`var(--admin-mute)`,margin:`4px 0 0`},children:[`Actualizado: `,Lt(l.actualizadoEn)]}),l.expiresAt&&(0,P.jsxs)(`p`,{style:{fontSize:12,color:`var(--admin-danger)`,margin:`4px 0 0`},children:[`Se elimina el: `,Lt(l.expiresAt)]})]})]}),(0,P.jsxs)(`div`,{className:`panel-admin-card`,children:[(0,P.jsx)(`p`,{className:`subrotulo`,style:{margin:`0 0 10px`},children:`Mover a otra fase`}),(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`avance-estado`,children:`Nuevo estado`}),(0,P.jsx)(`select`,{id:`avance-estado`,className:`seguro-input`,style:{marginBottom:14,appearance:`auto`},value:d,onChange:e=>f(e.target.value),children:It.map(e=>(0,P.jsx)(`option`,{value:e.value,children:e.label},e.value))}),(0,P.jsx)(B,{onClick:async()=>{if(i){v(``),b(``),g(!0);try{let r=await fetch(e,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({...t,tipoDoc:n,numDoc:i,estado:d,nroTramite:s||void 0})}),a=await r.json();if(!r.ok||!a.ok){v(a.error||`No se pudo guardar.`);return}u({existe:!0,...a}),b(`Estado actualizado.`)}catch{v(`No hay conexión o el servicio no responde.`)}finally{g(!1)}}},disabled:h||!i,fase:h?`cargando`:`idle`,colorBase:`var(--admin-brand)`,colorTexto:`var(--admin-brand-texto)`,children:`Actualizar estado`}),_&&(0,P.jsx)(`div`,{style:{background:`rgba(194,85,91,0.12)`,border:`2px solid var(--admin-danger)`,borderRadius:`var(--r)`,padding:`12px 14px`,marginTop:14},children:(0,P.jsx)(`p`,{style:{fontSize:14,fontWeight:500,color:`var(--admin-danger)`,margin:0},children:_})}),y&&!_&&(0,P.jsx)(`p`,{style:{fontSize:13,color:`var(--admin-success)`,margin:`10px 0 0`},children:y})]})]})}function V({abierto:e,onAbrir:t,etiqueta:n,opcional:r,resumen:i,children:a}){return e?(0,P.jsx)(`div`,{className:`campo-acordeon-abierto`,children:a}):(0,P.jsxs)(`button`,{type:`button`,className:`campo-acordeon-cerrado`,onClick:t,children:[(0,P.jsxs)(`span`,{className:`campo-acordeon-etiqueta`,children:[n,r&&(0,P.jsx)(`span`,{className:`campo-acordeon-tag`,children:` (opcional)`})]}),(0,P.jsx)(`span`,{className:`campo-acordeon-resumen`,"data-vacio":!i,children:i||`Sin completar`})]})}var zt=[`aviso`,`estribillo`],Bt=[`horario`,`telefono`,`correo`,`direccion`,`facebook`,`tiktok`];function Vt(e,t){let n=e.indexOf(t);return n===-1||n===e.length-1?t:e[n+1]}function Ht({slug:e,nombre:t,seccion:n,onCambiarSeccion:r,horario:i,setHorario:a,telefono:s,setTelefono:c,aviso:l,setAviso:u,estribillo:d,setEstribillo:f,estribilloDesde:p,setEstribilloDesde:m,estribilloHasta:h,setEstribilloHasta:g,correo:_,setCorreo:v,direccion:y,setDireccion:b,facebook:x,setFacebook:S,tiktok:C,setTiktok:w,passwordActual:T,setPasswordActual:E,passwordNueva:D,setPasswordNueva:ee,cambiandoPassword:O,cambioPasswordError:te,cambioPasswordMensaje:k,cambioPasswordExito:ne,onCambiarPassword:re,password:ie,setPassword:ae,loading:oe,error:A,mensaje:se,exito:ce,onGuardar:le,anuncios:ue,onCambioAnuncios:de,popup:fe,onCambioPopup:pe,existeEstablecimiento:j,passwordVerificada:me,accesoCargando:M,accesoError:he,onEntrar:ge,otpEnviado:N,otpVerificado:_e,otpCargando:ve,otpError:ye,otpReenviarDisponibleEn:be,otpIntentoKey:xe,onOtpVerificar:Se,onOtpReenviar:Ce,mostrarRecuperar:we,onMostrarRecuperar:Te,recuperarEnviado:Ee,recuperarCargando:De,recuperarError:Oe,recuperarExito:Ae,recuperarReenviarDisponibleEn:F,recuperarIntentoKey:I,onRecuperarEnviar:L,onRecuperarVerificar:je}){let[Me,Ne]=(0,o.useState)(null),[Pe,Fe]=(0,o.useState)(zt[0]),[Ie,R]=(0,o.useState)(Bt[0]),[Le,Re]=(0,o.useState)(!1);if((0,o.useEffect)(()=>{if(!e)return;let t=!1,n=`${window.location.origin}/${e}`;return ke.toDataURL(n,{width:400,margin:2}).then(e=>{t||Ne(e)}).catch(()=>{}),()=>{t=!0}},[e]),(0,o.useEffect)(()=>{if(!_e)return;let e=setTimeout(()=>Re(!0),1300);return()=>clearTimeout(e)},[_e]),!e)return(0,P.jsx)(`div`,{className:`panel-admin-fondo`,children:(0,P.jsx)(`div`,{className:`panel-admin-ancho`,style:{margin:`0 auto`,padding:`40px 20px 60px`},children:(0,P.jsx)(`p`,{style:{fontSize:14,color:`var(--admin-danger)`,textAlign:`center`},children:`Falta el establecimiento en el link. Pide al administrador el link completo.`})})});if(j===!1)return(0,P.jsx)(`div`,{className:`panel-admin-fondo`,children:(0,P.jsx)(`div`,{className:`panel-admin-ancho`,style:{margin:`0 auto`,padding:`40px 20px 60px`},children:(0,P.jsx)(`p`,{style:{fontSize:14,color:`var(--admin-danger)`,textAlign:`center`},children:`No encontramos un establecimiento con ese enlace. Verifica que el link esté completo o pide uno nuevo al administrador.`})})});let ze=`${window.location.origin}/${e}`,Be=he?`error`:M?`cargando`:ie?`escribiendo`:`reposo`,Ve=ye?`error`:ve?`cargando`:_e?`exito`:`reposo`,He=Oe?`error`:De?`cargando`:`reposo`,Ue=Oe?`error`:De?`cargando`:`reposo`,We=me&&Le,Ge=n===`datos`||n===`administrativos`,Ke=n===`administrativos`&&(!i.trim()||!s.trim());return(0,P.jsx)(`div`,{className:`panel-admin-fondo`,children:(0,P.jsxs)(`div`,{className:`panel-admin-ancho`,style:{margin:`0 auto`,padding:`40px 20px 60px`},children:[(0,P.jsx)(`h1`,{style:{fontSize:20,fontWeight:700,color:`var(--admin-ink)`,marginBottom:4,textAlign:`center`},children:t||`Tu establecimiento`}),(0,P.jsx)(`p`,{style:{fontSize:14,fontWeight:600,color:`var(--admin-body)`,marginBottom:20,textAlign:`center`},children:`Actualiza el horario, el teléfono y el aviso que ven los pacientes.`}),!me&&!we&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(vt,{estado:Be,children:[(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,marginBottom:8},children:[(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`admin-rep-password`,style:{margin:0},children:`Contraseña`}),(0,P.jsx)(_t,{estado:Be})]}),(0,P.jsx)(`input`,{id:`admin-rep-password`,type:`password`,className:`seguro-input input-casillero`,value:ie,onChange:e=>ae(e.target.value),onKeyDown:e=>{e.key===`Enter`&&ie&&!M&&ge()},placeholder:`Tu contraseña`,autoFocus:!0})]}),(0,P.jsx)(B,{onClick:ge,disabled:M||!ie,fase:M?`cargando`:`idle`,colorBase:`var(--admin-brand)`,colorTexto:`var(--admin-brand-texto)`,children:`Entrar`}),he&&(0,P.jsx)(`div`,{style:{background:`rgba(194,85,91,0.12)`,border:`2px solid var(--admin-danger)`,borderRadius:`var(--r)`,padding:`12px 14px`,marginTop:14},children:(0,P.jsx)(`p`,{style:{fontSize:14,fontWeight:500,color:`var(--admin-danger)`,margin:0},children:he})}),(0,P.jsx)(`button`,{type:`button`,className:`panel-otp-reenviar`,onClick:()=>Te(!0),children:`¿Olvidaste tu contraseña?`})]}),!me&&we&&(Ae?(0,P.jsxs)(vt,{titulo:`Contraseña actualizada`,estado:`exito`,children:[(0,P.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:10},children:(0,P.jsx)(_t,{estado:`exito`})}),(0,P.jsx)(`p`,{style:{fontSize:14,color:`rgba(241,242,246,0.8)`,textAlign:`center`,margin:0},children:`Ya puedes entrar con tu contraseña nueva…`})]}):Ee?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Mt,{titulo:`Recuperar contraseña`,estado:Ue,error:Oe,onVerificar:e=>je(e,D),onReenviar:L,reenviarCargando:De,reenviarDisponibleEn:F,pedirPasswordNueva:!0,passwordNueva:D,setPasswordNueva:ee},I),(0,P.jsx)(`button`,{type:`button`,className:`panel-otp-reenviar`,onClick:()=>Te(!1),children:`← Volver a iniciar sesión`})]}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(vt,{titulo:`Recuperar contraseña`,estado:He,children:(0,P.jsx)(`p`,{style:{fontSize:13,color:`rgba(241,242,246,0.75)`,textAlign:`center`,margin:0},children:`Te enviamos un código a tu correo registrado para elegir una contraseña nueva.`})}),(0,P.jsx)(B,{onClick:L,disabled:De,fase:De?`cargando`:`idle`,colorBase:`var(--admin-brand)`,colorTexto:`var(--admin-brand-texto)`,children:`Enviar código`}),Oe&&(0,P.jsx)(`div`,{style:{background:`rgba(194,85,91,0.12)`,border:`2px solid var(--admin-danger)`,borderRadius:`var(--r)`,padding:`12px 14px`,marginTop:14},children:(0,P.jsx)(`p`,{style:{fontSize:14,fontWeight:500,color:`var(--admin-danger)`,margin:0},children:Oe})}),(0,P.jsx)(`button`,{type:`button`,className:`panel-otp-reenviar`,onClick:()=>Te(!1),children:`← Volver a iniciar sesión`})]})),me&&!Le&&(0,P.jsx)(Mt,{titulo:`Verifica tu acceso`,estado:Ve,error:ye,onVerificar:Se,onReenviar:Ce,reenviarCargando:ve&&N,reenviarDisponibleEn:be},xe),We&&(0,P.jsxs)(`div`,{className:`panel-admin-revela`,children:[(0,P.jsxs)(`div`,{className:`panel-admin-cuerpo`,style:{marginTop:20},children:[(0,P.jsx)(At,{seccionActiva:n,onCambiar:r}),(0,P.jsxs)(`div`,{className:`panel-admin-contenido`,children:[(0,P.jsxs)(`div`,{hidden:n!==`datos`,children:[(0,P.jsxs)(V,{abierto:Pe===`aviso`,onAbrir:()=>Fe(`aviso`),etiqueta:`Aviso`,opcional:!0,resumen:l,children:[(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`admin-rep-aviso`,children:`Aviso (opcional)`}),(0,P.jsx)(`input`,{id:`admin-rep-aviso`,type:`text`,className:`seguro-input`,value:l,onChange:e=>u(e.target.value),onBlur:()=>Fe(e=>Vt(zt,e)),placeholder:`Ej: Esta semana sin citas para CITT`,maxLength:300,autoFocus:!0})]}),(0,P.jsxs)(V,{abierto:Pe===`estribillo`,onAbrir:()=>Fe(`estribillo`),etiqueta:`Estribillo`,opcional:!0,resumen:d&&(p||h)?`${d} (${p||`…`} – ${h||`…`})`:d,children:[(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`admin-rep-estribillo`,children:`Estribillo (opcional)`}),(0,P.jsx)(`input`,{id:`admin-rep-estribillo`,type:`text`,className:`seguro-input`,style:{marginBottom:10},value:d,onChange:e=>f(e.target.value),placeholder:`Ej: Semana de vacunación`,maxLength:300,autoFocus:!0}),(0,P.jsx)(`p`,{style:{fontSize:12,color:`var(--admin-body)`,margin:`0 0 10px`},children:`Va debajo del nombre de tu establecimiento. Deja las fechas vacías para que sea permanente.`}),(0,P.jsxs)(`div`,{className:`fila-2`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`admin-rep-estribillo-desde`,children:`Desde`}),(0,P.jsx)(`input`,{id:`admin-rep-estribillo-desde`,type:`date`,className:`seguro-input`,value:p,onChange:e=>m(e.target.value)})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`admin-rep-estribillo-hasta`,children:`Hasta`}),(0,P.jsx)(`input`,{id:`admin-rep-estribillo-hasta`,type:`date`,className:`seguro-input`,value:h,onChange:e=>g(e.target.value),onBlur:()=>Fe(e=>Vt(zt,e))})]})]})]})]}),(0,P.jsxs)(`div`,{hidden:n!==`anuncios`,children:[(0,P.jsx)(St,{endpoint:`/api/admin/establecimiento-info`,credenciales:{slug:e,password:ie},anuncios:ue,onCambio:de,nombre:t}),(0,P.jsx)(Et,{endpoint:`/api/admin/establecimiento-info`,credenciales:{slug:e,password:ie},popup:fe,onCambio:pe,anuncios:ue})]}),(0,P.jsxs)(`div`,{hidden:n!==`administrativos`,children:[(0,P.jsxs)(V,{abierto:Ie===`horario`,onAbrir:()=>R(`horario`),etiqueta:`Horario de atención`,resumen:i,children:[(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`admin-rep-horario`,children:`Horario de atención`}),(0,P.jsx)(`input`,{id:`admin-rep-horario`,type:`text`,className:`seguro-input`,value:i,onChange:e=>a(e.target.value),onBlur:()=>R(e=>Vt(Bt,e)),placeholder:`Ej: Lunes a viernes, 8am a 2pm`,maxLength:300,autoFocus:!0})]}),(0,P.jsxs)(V,{abierto:Ie===`telefono`,onAbrir:()=>R(`telefono`),etiqueta:`Teléfono / WhatsApp`,resumen:s,children:[(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`admin-rep-telefono`,children:`Teléfono / WhatsApp`}),(0,P.jsx)(`input`,{id:`admin-rep-telefono`,type:`text`,inputMode:`numeric`,className:`seguro-input`,value:s,onChange:e=>c(e.target.value.replace(/[^0-9]/g,``)),onBlur:()=>R(e=>Vt(Bt,e)),placeholder:`Ej: 51943123456 (con código de país)`,maxLength:20,autoFocus:!0})]}),(0,P.jsxs)(V,{abierto:Ie===`correo`,onAbrir:()=>R(`correo`),etiqueta:`Correo de recepción`,opcional:!0,resumen:_,children:[(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`admin-rep-correo`,children:`Correo de recepción (opcional)`}),(0,P.jsx)(`input`,{id:`admin-rep-correo`,type:`email`,className:`seguro-input`,value:_,onChange:e=>v(e.target.value),onBlur:()=>R(e=>Vt(Bt,e)),placeholder:`Ej: recepcion@hospital.pe`,maxLength:300,autoFocus:!0})]}),(0,P.jsxs)(V,{abierto:Ie===`direccion`,onAbrir:()=>R(`direccion`),etiqueta:`Dirección / referencia`,opcional:!0,resumen:y,children:[(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`admin-rep-direccion`,children:`Dirección / referencia (opcional)`}),(0,P.jsx)(`input`,{id:`admin-rep-direccion`,type:`text`,className:`seguro-input`,value:y,onChange:e=>b(e.target.value),onBlur:()=>R(e=>Vt(Bt,e)),placeholder:`Ej: Jr. Los Álamos 123, a 2 cuadras de la plaza`,maxLength:300,autoFocus:!0})]}),(0,P.jsxs)(V,{abierto:Ie===`facebook`,onAbrir:()=>R(`facebook`),etiqueta:`Facebook`,opcional:!0,resumen:x,children:[(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`admin-rep-facebook`,children:`Facebook (opcional)`}),(0,P.jsx)(`input`,{id:`admin-rep-facebook`,type:`url`,className:`seguro-input`,value:x,onChange:e=>S(e.target.value),onBlur:()=>R(e=>Vt(Bt,e)),placeholder:`Ej: https://facebook.com/tuhospital`,maxLength:300,autoFocus:!0})]}),(0,P.jsxs)(V,{abierto:Ie===`tiktok`,onAbrir:()=>R(`tiktok`),etiqueta:`TikTok`,opcional:!0,resumen:C,children:[(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`admin-rep-tiktok`,children:`TikTok (opcional)`}),(0,P.jsx)(`input`,{id:`admin-rep-tiktok`,type:`url`,className:`seguro-input`,value:C,onChange:e=>w(e.target.value),placeholder:`Ej: https://tiktok.com/@tuhospital`,maxLength:300,autoFocus:!0})]})]}),(0,P.jsxs)(`div`,{className:`panel-admin-grid`,hidden:n!==`acceso`,children:[(0,P.jsxs)(`div`,{className:`panel-admin-card`,children:[(0,P.jsx)(`p`,{className:`subrotulo`,style:{margin:`0 0 10px`},children:`Cambiar tu contraseña`}),(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`admin-rep-password-actual`,children:`Contraseña actual`}),(0,P.jsx)(`input`,{id:`admin-rep-password-actual`,type:`password`,className:`seguro-input`,style:{marginBottom:10},value:T,onChange:e=>E(e.target.value)}),(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`admin-rep-password-nueva`,children:`Contraseña nueva`}),(0,P.jsx)(`input`,{id:`admin-rep-password-nueva`,type:`password`,className:`seguro-input`,style:{marginBottom:10},value:D,onChange:e=>ee(e.target.value),placeholder:`Mínimo 8 caracteres`}),(0,P.jsx)(B,{onClick:re,disabled:O||!T||!D,fase:ne?`exito`:O?`cargando`:`idle`,colorBase:`var(--admin-brand)`,colorTexto:`var(--admin-brand-texto)`,children:`Actualizar contraseña`}),te&&(0,P.jsx)(`p`,{style:{fontSize:13,color:`var(--admin-danger)`,margin:`10px 0 0`},children:te}),k&&!te&&(0,P.jsx)(`p`,{style:{fontSize:13,color:`var(--admin-success)`,margin:`10px 0 0`},children:k})]}),(0,P.jsxs)(`div`,{className:`panel-admin-card`,children:[(0,P.jsx)(`p`,{className:`subrotulo`,style:{margin:`0 0 10px`},children:`Tu acceso (link y QR)`}),(0,P.jsx)(`p`,{style:{fontSize:13,color:`var(--admin-body)`,margin:`0 0 10px`},children:`Guarda este link o imprime el QR — es tu acceso directo a este panel, sin tener que escribirlo cada vez.`}),Me&&(0,P.jsx)(`img`,{src:Me,alt:`Código QR de acceso a ${t||`tu establecimiento`}`,style:{width:160,height:160,display:`block`,marginBottom:10}}),(0,P.jsx)(`p`,{style:{fontSize:13,fontWeight:600,color:`var(--admin-ink)`,wordBreak:`break-all`,margin:0},children:ze})]})]}),(0,P.jsx)(`div`,{hidden:n!==`estadisticas`,children:(0,P.jsx)(Pt,{anuncios:ue})}),(0,P.jsx)(`div`,{hidden:n!==`tramite`,children:(0,P.jsx)(Rt,{endpoint:`/api/admin/avance-tramite`,credenciales:{slug:e,password:ie}})})]})]}),Ge&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(B,{onClick:le,disabled:oe||!ie||Ke,fase:ce?`exito`:oe?`cargando`:`idle`,colorBase:`var(--admin-brand)`,colorTexto:`var(--admin-brand-texto)`,children:`Guardar`}),Ke&&(0,P.jsx)(`p`,{style:{fontSize:12.5,color:`var(--admin-mute)`,margin:`8px 0 0`},children:`Completa horario y teléfono para poder guardar.`}),A&&(0,P.jsx)(`div`,{style:{background:`rgba(194,85,91,0.12)`,border:`2px solid var(--admin-danger)`,borderRadius:`var(--r)`,padding:`12px 14px`,marginTop:14},children:(0,P.jsx)(`p`,{style:{fontSize:14,fontWeight:500,color:`var(--admin-danger)`,margin:0},children:A})}),se&&!A&&(0,P.jsx)(`div`,{style:{background:`rgba(79,174,122,0.12)`,border:`2px solid var(--admin-success)`,borderRadius:`var(--r)`,padding:`12px 14px`,marginTop:14},children:(0,P.jsx)(`p`,{style:{fontSize:14,fontWeight:500,color:`var(--admin-success)`,margin:0},children:se})})]})]})]})})}var Ut=[`aviso`,`estribillo`],Wt=[`horario`,`telefono`,`correo`,`correoAcceso`,`direccion`,`facebook`,`tiktok`];function Gt(e,t){let n=e.indexOf(t);return n===-1||n===e.length-1?t:e[n+1]}function Kt({etiqueta:e,valor:t,color:n}){return(0,P.jsxs)(`div`,{style:{flex:`1 1 140px`,background:`var(--admin-bg-elevated)`,border:`1px solid var(--admin-line)`,borderRadius:`var(--admin-r-lg)`,padding:`12px 14px`},children:[(0,P.jsx)(`p`,{style:{fontSize:22,fontWeight:800,color:n||`var(--admin-ink)`,margin:0,fontVariantNumeric:`tabular-nums`},children:t}),(0,P.jsx)(`p`,{style:{fontSize:11,color:`var(--admin-mute)`,textTransform:`uppercase`,letterSpacing:`0.04em`,margin:`2px 0 0`},children:e})]})}function qt({token:e,onGuardarToken:t,lista:n,listaFiltrada:r,listaLoading:i,listaError:a,onListar:s,busqueda:c,setBusqueda:l,editandoSlug:u,onAbrirEdicion:d,onCerrarEdicion:f,seccion:p,onCambiarSeccion:m,editHorario:h,setEditHorario:g,editTelefono:_,setEditTelefono:v,editAviso:y,setEditAviso:b,editEstribillo:x,setEditEstribillo:S,editEstribilloDesde:C,setEditEstribilloDesde:w,editEstribilloHasta:T,setEditEstribilloHasta:E,editCorreo:D,setEditCorreo:ee,editCorreoAcceso:O,setEditCorreoAcceso:te,editDireccion:k,setEditDireccion:ne,editFacebook:re,setEditFacebook:ie,editTiktok:ae,setEditTiktok:oe,editAnuncios:A,setEditAnuncios:se,editPopup:ce,setEditPopup:le,editCargando:ue,editCargaFallo:de,editGuardando:fe,editExito:pe,editError:j,editMensaje:me,onGuardarInfo:M,resetPasswordNueva:he,setResetPasswordNueva:ge,accesoLoading:N,accesoError:_e,accesoMensaje:ve,onResetearPassword:ye,onRevocarAcceso:be,onReactivarAcceso:xe,nuevoSlug:Se,setNuevoSlug:Ce,nuevoNombre:we,setNuevoNombre:Te,nuevoPassword:Ee,setNuevoPassword:De,nuevoCorreo:Oe,setNuevoCorreo:ke,onCrear:Ae,crearLoading:F,crearExito:I,crearError:L,crearMensaje:je,otpEnviado:Me,otpVerificado:Ne,otpCargando:Pe,otpError:Fe,otpReenviarDisponibleEn:Ie,otpIntentoKey:R,onOtpVerificar:Le,onOtpReenviar:Re}){let ze=u?(n||[]).find(e=>e.slug===u):null,Be=p===`datos`||p===`administrativos`,Ve=p===`administrativos`&&(!h.trim()||!_.trim()||!O.trim()),He=!ze&&(ue||n===null||i),Ue=n!==null,[We,Ge]=(0,o.useState)(!1);(0,o.useEffect)(()=>{if(!Ne)return;let e=setTimeout(()=>Ge(!0),1300);return()=>clearTimeout(e)},[Ne]);let Ke=Ue&&We,qe=a?`error`:i?`cargando`:e?`escribiendo`:`reposo`,Je=Fe?`error`:Pe?`cargando`:Ne?`exito`:`reposo`,Ye=!!Se&&(n||[]).some(e=>e.slug===Se.trim().toLowerCase()),[Xe,Ze]=(0,o.useState)(`establecimientos`),[Qe,$e]=(0,o.useState)(Ut[0]),[et,z]=(0,o.useState)(Wt[0]),tt=(n||[]).filter(e=>e.activo).length,nt=(n||[]).reduce((e,t)=>e+(t.anunciosActivos||0),0),rt=(n||[]).reduce((e,t)=>e+(t.totalMeGusta||0),0),it=(n||[]).reduce((e,t)=>e+(t.totalNoMeGusta||0),0);return(0,P.jsx)(`div`,{className:`panel-admin-fondo`,children:(0,P.jsxs)(`div`,{className:`panel-admin-ancho`,style:{margin:`0 auto`,padding:`0 20px 60px`},children:[!Ue&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(vt,{titulo:`Acceso de administrador`,estado:qe,children:[(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,marginBottom:8},children:[(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`admin-estab-token`,style:{margin:0},children:`Token`}),(0,P.jsx)(_t,{estado:qe})]}),(0,P.jsx)(`input`,{id:`admin-estab-token`,type:`password`,className:`seguro-input input-casillero`,value:e,onChange:e=>t(e.target.value),onKeyDown:t=>{t.key===`Enter`&&e&&!i&&s()},placeholder:`ADMIN_ESTABLECIMIENTOS_TOKEN`,autoFocus:!0})]}),(0,P.jsx)(B,{onClick:s,disabled:i||!e,fase:i?`cargando`:`idle`,colorBase:`var(--admin-brand)`,colorTexto:`var(--admin-brand-texto)`,children:`Entrar`}),a&&(0,P.jsx)(`div`,{style:{background:`rgba(194,85,91,0.12)`,border:`2px solid var(--admin-danger)`,borderRadius:`var(--r)`,padding:`12px 14px`,marginTop:14},children:(0,P.jsx)(`p`,{style:{fontSize:14,fontWeight:500,color:`var(--admin-danger)`,margin:0},children:a})})]}),Ue&&!Ke&&(0,P.jsx)(Mt,{titulo:`Verifica tu acceso`,estado:Je,error:Fe,onVerificar:Le,onReenviar:Re,reenviarCargando:Pe&&Me,reenviarDisponibleEn:Ie},R),Ke&&(0,P.jsxs)(`div`,{className:`panel-admin-revela`,children:[(0,P.jsxs)(`nav`,{className:`panel-admin-tabs`,"aria-label":`Secciones del panel`,children:[(0,P.jsx)(`button`,{type:`button`,className:`panel-admin-tabs-item${Xe===`establecimientos`?` activa`:``}`,onClick:()=>Ze(`establecimientos`),children:`Establecimientos`}),(0,P.jsx)(`button`,{type:`button`,className:`panel-admin-tabs-item${Xe===`estadisticas`?` activa`:``}`,onClick:()=>Ze(`estadisticas`),children:`Estadísticas`})]}),Xe===`estadisticas`&&(0,P.jsx)(`div`,{className:`panel-admin-grid`,children:(0,P.jsxs)(`section`,{className:`panel-admin-card`,style:{flex:`1 1 100%`},children:[(0,P.jsx)(`p`,{className:`subrotulo`,style:{margin:`0 0 14px`},children:`Todos los establecimientos`}),(0,P.jsxs)(`div`,{style:{display:`flex`,gap:10,flexWrap:`wrap`,marginBottom:20},children:[(0,P.jsx)(Kt,{etiqueta:`Establecimientos activos`,valor:tt}),(0,P.jsx)(Kt,{etiqueta:`Anuncios activos`,valor:nt}),(0,P.jsx)(Kt,{etiqueta:`Me gusta`,valor:rt,color:`var(--admin-success)`}),(0,P.jsx)(Kt,{etiqueta:`No me gusta`,valor:it,color:`var(--admin-danger)`})]}),(n||[]).length===0?(0,P.jsx)(`p`,{style:{fontSize:13,color:`var(--admin-mute)`,margin:0},children:`Todavía no hay establecimientos.`}):(0,P.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:6},children:(n||[]).map(e=>(0,P.jsxs)(`button`,{type:`button`,onClick:()=>{Ze(`establecimientos`),d(e.slug,`estadisticas`)},className:`panel-admin-autocompletar-item`,children:[(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`baseline`,justifyContent:`space-between`,gap:8},children:[(0,P.jsx)(`p`,{style:{fontSize:14,fontWeight:700,color:`var(--admin-ink)`,margin:0},children:e.nombre}),(0,P.jsxs)(`span`,{style:{fontSize:12,color:`var(--admin-mute)`},children:[e.anunciosActivos,` anuncio(s)`]})]}),(0,P.jsxs)(`p`,{style:{fontSize:12,color:`var(--admin-mute)`,margin:`3px 0 0`},children:[`👍 `,e.totalMeGusta,` · 👎 `,e.totalNoMeGusta]})]},e.slug))})]})}),Xe===`establecimientos`&&!u&&(0,P.jsxs)(`div`,{className:`panel-admin-grid`,children:[(0,P.jsxs)(`section`,{className:`panel-admin-card`,children:[(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:8},children:[(0,P.jsx)(`p`,{className:`subrotulo`,style:{margin:0},children:`Establecimientos con acceso creado`}),(0,P.jsx)(`button`,{type:`button`,onClick:s,disabled:i||!e,style:{background:`transparent`,border:`none`,padding:`2px 4px`,cursor:`pointer`,fontFamily:`inherit`,fontWeight:600,fontSize:13,color:`var(--admin-brand-deep)`,opacity:i||!e?.5:1},children:i?`Cargando…`:`Actualizar`})]}),n&&n.length>0&&(0,P.jsx)(`input`,{type:`text`,className:`seguro-input`,style:{marginBottom:10},value:c,onChange:e=>l(e.target.value),placeholder:`Autocompletar por nombre o slug…`,"aria-label":`Buscar establecimiento`,role:`combobox`,"aria-expanded":r.length>0}),a&&(0,P.jsx)(`p`,{style:{fontSize:13,color:`var(--admin-danger)`,margin:`0 0 8px`},children:a}),n&&n.length===0&&!a&&(0,P.jsx)(`p`,{style:{fontSize:13,color:`var(--admin-mute)`,margin:0},children:`Todavía no creaste ningún acceso.`}),n&&n.length>0&&r.length===0&&(0,P.jsxs)(`p`,{style:{fontSize:13,color:`var(--admin-mute)`,margin:0},children:[`Ningún establecimiento coincide con "`,c,`".`]}),r&&r.length>0&&(0,P.jsx)(`div`,{className:`panel-admin-autocompletar`,role:`listbox`,children:r.map(e=>(0,P.jsxs)(`button`,{type:`button`,role:`option`,onClick:()=>d(e.slug),className:`panel-admin-autocompletar-item`,children:[(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`baseline`,justifyContent:`space-between`,gap:8},children:[(0,P.jsx)(`p`,{style:{fontSize:14,fontWeight:700,color:`var(--admin-ink)`,margin:0},children:e.nombre}),(0,P.jsx)(`span`,{className:`panel-admin-chip ${e.activo?`panel-admin-chip-ok`:`panel-admin-chip-mal`}`,children:e.activo?`Activo`:`Revocado`})]}),(0,P.jsxs)(`p`,{style:{fontSize:12,color:`var(--admin-mute)`,margin:`3px 0 0`},children:[e.slug,` · actualizado `,e.actualizadoEn?new Date(e.actualizadoEn).toLocaleDateString(`es-PE`,{timeZone:`America/Lima`}):`—`]}),e.correoAcceso&&(0,P.jsx)(`p`,{style:{fontSize:12,color:`var(--admin-mute)`,margin:`1px 0 0`},children:e.correoAcceso})]},e.slug))})]}),(0,P.jsxs)(`section`,{className:`panel-admin-card`,children:[(0,P.jsx)(`p`,{className:`subrotulo`,style:{margin:`0 0 4px`},children:`+ Nuevo establecimiento`}),(0,P.jsx)(`p`,{style:{fontSize:12,color:`var(--admin-mute)`,margin:`0 0 14px`},children:`Para resetear la contraseña de uno que ya existe, ábrelo arriba y usa su pestaña "Acceso".`}),(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`admin-estab-slug`,children:`Slug (identificador corto)`}),(0,P.jsx)(`input`,{id:`admin-estab-slug`,type:`text`,className:`seguro-input`,style:{marginBottom:Ye?6:14},value:Se,onChange:e=>Ce(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g,``)),placeholder:`Ej: viru`}),Ye&&(0,P.jsxs)(`p`,{style:{fontSize:12,color:`var(--admin-danger)`,margin:`0 0 14px`},children:[`Ya existe un establecimiento con este slug —`,` `,(0,P.jsx)(`button`,{type:`button`,onClick:()=>d(Se.trim().toLowerCase()),style:{background:`none`,border:`none`,padding:0,font:`inherit`,fontWeight:700,color:`var(--admin-danger)`,textDecoration:`underline`,cursor:`pointer`},children:`ábrelo acá`}),`.`]}),(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`admin-estab-nombre`,children:`Nombre del establecimiento`}),(0,P.jsx)(`input`,{id:`admin-estab-nombre`,type:`text`,className:`seguro-input`,style:{marginBottom:14},value:we,onChange:e=>Te(e.target.value),placeholder:`Ej: Hospital II-1 Virú`}),(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`admin-estab-password`,children:`Contraseña para el representante`}),(0,P.jsx)(`input`,{id:`admin-estab-password`,type:`text`,className:`seguro-input`,style:{marginBottom:14},value:Ee,onChange:e=>De(e.target.value),placeholder:`Mínimo 8 caracteres`}),(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`admin-estab-correo`,children:`Correo del encargado`}),(0,P.jsx)(`input`,{id:`admin-estab-correo`,type:`email`,className:`seguro-input`,style:{marginBottom:18},value:Oe,onChange:e=>ke(e.target.value),placeholder:`Ej: encargado@hospital.pe`}),(0,P.jsx)(B,{onClick:Ae,disabled:F||!e||!Se||!we||!Ee||!Oe||Ye,fase:I?`exito`:F?`cargando`:`idle`,colorBase:`var(--admin-brand)`,colorTexto:`var(--admin-brand-texto)`,children:`Crear establecimiento`}),L&&(0,P.jsx)(`div`,{style:{background:`var(--admin-danger-soft)`,border:`2px solid var(--admin-danger)`,borderRadius:`var(--r)`,padding:`12px 14px`,marginTop:14},children:(0,P.jsx)(`p`,{style:{fontSize:14,fontWeight:500,color:`var(--admin-danger)`,margin:0},children:L})}),je&&!L&&(0,P.jsx)(`div`,{style:{background:`var(--admin-success-soft)`,border:`2px solid var(--admin-success)`,borderRadius:`var(--r)`,padding:`12px 14px`,marginTop:14},children:(0,P.jsx)(`p`,{style:{fontSize:14,fontWeight:500,color:`var(--admin-success)`,margin:0,wordBreak:`break-word`},children:je})})]})]}),Xe===`establecimientos`&&u&&(0,P.jsxs)(`div`,{style:{marginTop:20},children:[(0,P.jsx)(`button`,{type:`button`,onClick:f,style:{background:`none`,border:`none`,padding:0,marginBottom:14,cursor:`pointer`,fontFamily:`inherit`,fontWeight:600,fontSize:13,color:`var(--admin-brand-deep)`},children:`← Volver a la lista`}),ue?(0,P.jsx)(`p`,{style:{fontSize:13,color:`var(--admin-mute)`,margin:0},children:`Cargando…`}):de?(0,P.jsx)(`p`,{style:{fontSize:13,color:`var(--admin-danger)`,margin:0},children:j}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`p`,{style:{fontSize:20,fontWeight:700,color:`var(--admin-ink)`,margin:`0 0 4px`},children:ze?.nombre||u}),(0,P.jsxs)(`p`,{style:{fontSize:13,color:`var(--admin-mute)`,margin:`0 0 20px`},children:[u,ze&&(0,P.jsxs)(P.Fragment,{children:[` · `,(0,P.jsx)(`span`,{style:{color:ze.activo?`var(--admin-mute)`:`var(--admin-danger)`,fontWeight:700},children:ze.activo?`Activo`:`Revocado`})]})]}),(0,P.jsxs)(`div`,{className:`panel-admin-cuerpo`,children:[(0,P.jsx)(At,{seccionActiva:p,onCambiar:m}),(0,P.jsxs)(`div`,{className:`panel-admin-contenido`,children:[(0,P.jsxs)(`div`,{hidden:p!==`datos`,children:[(0,P.jsxs)(V,{abierto:Qe===`aviso`,onAbrir:()=>$e(`aviso`),etiqueta:`Aviso`,opcional:!0,resumen:y,children:[(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`edit-aviso`,children:`Aviso (opcional)`}),(0,P.jsx)(`input`,{id:`edit-aviso`,type:`text`,className:`seguro-input`,value:y,onChange:e=>b(e.target.value),onBlur:()=>$e(e=>Gt(Ut,e)),placeholder:`Ej: Esta semana sin citas para CITT`,maxLength:300,autoFocus:!0})]}),(0,P.jsxs)(V,{abierto:Qe===`estribillo`,onAbrir:()=>$e(`estribillo`),etiqueta:`Estribillo`,opcional:!0,resumen:x&&(C||T)?`${x} (${C||`…`} – ${T||`…`})`:x,children:[(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`edit-estribillo`,children:`Estribillo (opcional)`}),(0,P.jsx)(`input`,{id:`edit-estribillo`,type:`text`,className:`seguro-input`,style:{marginBottom:10},value:x,onChange:e=>S(e.target.value),placeholder:`Ej: Semana de vacunación`,maxLength:300,autoFocus:!0}),(0,P.jsxs)(`div`,{className:`fila-2`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`edit-estribillo-desde`,children:`Desde`}),(0,P.jsx)(`input`,{id:`edit-estribillo-desde`,type:`date`,className:`seguro-input`,value:C,onChange:e=>w(e.target.value)})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`edit-estribillo-hasta`,children:`Hasta`}),(0,P.jsx)(`input`,{id:`edit-estribillo-hasta`,type:`date`,className:`seguro-input`,value:T,onChange:e=>E(e.target.value),onBlur:()=>$e(e=>Gt(Ut,e))})]})]})]})]}),(0,P.jsxs)(`div`,{hidden:p!==`anuncios`,children:[(0,P.jsx)(St,{endpoint:`/api/admin/establecimiento-editar-admin`,credenciales:{slug:u,token:e},anuncios:A,onCambio:se,nombre:ze?.nombre||u}),(0,P.jsx)(Et,{endpoint:`/api/admin/establecimiento-editar-admin`,credenciales:{slug:u,token:e},popup:ce,onCambio:le,anuncios:A})]}),(0,P.jsxs)(`div`,{hidden:p!==`administrativos`,children:[(0,P.jsxs)(V,{abierto:et===`horario`,onAbrir:()=>z(`horario`),etiqueta:`Horario de atención`,resumen:h,children:[(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`edit-horario`,children:`Horario de atención`}),(0,P.jsx)(`input`,{id:`edit-horario`,type:`text`,className:`seguro-input`,value:h,onChange:e=>g(e.target.value),onBlur:()=>z(e=>Gt(Wt,e)),placeholder:`Ej: Lunes a viernes, 8am a 2pm`,maxLength:300,autoFocus:!0})]}),(0,P.jsxs)(V,{abierto:et===`telefono`,onAbrir:()=>z(`telefono`),etiqueta:`Teléfono / WhatsApp`,resumen:_,children:[(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`edit-telefono`,children:`Teléfono / WhatsApp`}),(0,P.jsx)(`input`,{id:`edit-telefono`,type:`text`,inputMode:`numeric`,className:`seguro-input`,value:_,onChange:e=>v(e.target.value.replace(/[^0-9]/g,``)),onBlur:()=>z(e=>Gt(Wt,e)),placeholder:`Ej: 51943123456 (con código de país)`,maxLength:20,autoFocus:!0})]}),(0,P.jsxs)(V,{abierto:et===`correo`,onAbrir:()=>z(`correo`),etiqueta:`Correo de recepción`,opcional:!0,resumen:D,children:[(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`edit-correo`,children:`Correo de recepción (opcional)`}),(0,P.jsx)(`input`,{id:`edit-correo`,type:`email`,className:`seguro-input`,value:D,onChange:e=>ee(e.target.value),onBlur:()=>z(e=>Gt(Wt,e)),placeholder:`Ej: recepcion@hospital.pe`,maxLength:300,autoFocus:!0})]}),(0,P.jsxs)(V,{abierto:et===`correoAcceso`,onAbrir:()=>z(`correoAcceso`),etiqueta:`Correo del encargado`,resumen:O,children:[(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`edit-correo-acceso`,children:`Correo del encargado (OTP y recuperar contraseña)`}),(0,P.jsx)(`input`,{id:`edit-correo-acceso`,type:`email`,className:`seguro-input`,value:O,onChange:e=>te(e.target.value),onBlur:()=>z(e=>Gt(Wt,e)),placeholder:`Ej: encargado@hospital.pe`,maxLength:300,autoFocus:!0})]}),(0,P.jsxs)(V,{abierto:et===`direccion`,onAbrir:()=>z(`direccion`),etiqueta:`Dirección / referencia`,opcional:!0,resumen:k,children:[(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`edit-direccion`,children:`Dirección / referencia (opcional)`}),(0,P.jsx)(`input`,{id:`edit-direccion`,type:`text`,className:`seguro-input`,value:k,onChange:e=>ne(e.target.value),onBlur:()=>z(e=>Gt(Wt,e)),placeholder:`Ej: Jr. Los Álamos 123`,maxLength:300,autoFocus:!0})]}),(0,P.jsxs)(V,{abierto:et===`facebook`,onAbrir:()=>z(`facebook`),etiqueta:`Facebook`,opcional:!0,resumen:re,children:[(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`edit-facebook`,children:`Facebook (opcional)`}),(0,P.jsx)(`input`,{id:`edit-facebook`,type:`url`,className:`seguro-input`,value:re,onChange:e=>ie(e.target.value),onBlur:()=>z(e=>Gt(Wt,e)),placeholder:`Ej: https://facebook.com/tuhospital`,maxLength:300,autoFocus:!0})]}),(0,P.jsxs)(V,{abierto:et===`tiktok`,onAbrir:()=>z(`tiktok`),etiqueta:`TikTok`,opcional:!0,resumen:ae,children:[(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`edit-tiktok`,children:`TikTok (opcional)`}),(0,P.jsx)(`input`,{id:`edit-tiktok`,type:`url`,className:`seguro-input`,value:ae,onChange:e=>oe(e.target.value),placeholder:`Ej: https://tiktok.com/@tuhospital`,maxLength:300,autoFocus:!0})]})]}),(0,P.jsxs)(`div`,{hidden:p!==`acceso`,children:[(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`edit-reset-password`,children:`Nueva contraseña`}),(0,P.jsx)(`input`,{id:`edit-reset-password`,type:`text`,className:`seguro-input`,style:{marginBottom:10},value:he,onChange:e=>ge(e.target.value),placeholder:`Mínimo 8 caracteres`}),(0,P.jsx)(`div`,{style:{display:`flex`,gap:10,marginBottom:10},children:(0,P.jsx)(`div`,{style:{flex:1},children:(0,P.jsx)(B,{onClick:()=>ye(u),disabled:N||he.length<8,fase:N?`cargando`:`idle`,colorBase:`var(--admin-brand)`,colorTexto:`var(--admin-brand-texto)`,children:`Actualizar contraseña`})})}),He?(0,P.jsx)(`p`,{style:{fontSize:13,color:`var(--admin-mute)`,margin:0},children:`Cargando estado de acceso…`}):ze?.activo?(0,P.jsx)(`button`,{type:`button`,onClick:()=>be(u),disabled:N,style:{width:`100%`,border:`2px solid var(--admin-danger)`,borderRadius:`var(--r)`,background:`transparent`,color:`var(--admin-danger)`,fontFamily:`inherit`,fontWeight:700,fontSize:14,padding:10,cursor:`pointer`},children:`Revocar acceso`}):(0,P.jsx)(`button`,{type:`button`,onClick:()=>xe(u),disabled:N||he.length<8,style:{width:`100%`,border:`2px solid var(--admin-success)`,borderRadius:`var(--r)`,background:`transparent`,color:`var(--admin-success)`,fontFamily:`inherit`,fontWeight:700,fontSize:14,padding:10,cursor:`pointer`},children:`Reactivar acceso (con la contraseña de arriba)`}),_e&&(0,P.jsx)(`p`,{style:{fontSize:13,color:`var(--admin-danger)`,margin:`10px 0 0`},children:_e}),ve&&!_e&&(0,P.jsx)(`p`,{style:{fontSize:13,color:`var(--admin-success)`,margin:`10px 0 0`},children:ve})]}),(0,P.jsx)(`div`,{hidden:p!==`estadisticas`,children:(0,P.jsx)(Pt,{anuncios:A})}),(0,P.jsx)(`div`,{hidden:p!==`tramite`,children:(0,P.jsx)(Rt,{endpoint:`/api/admin/avance-tramite`,credenciales:{slug:u,token:e}})})]})]}),Be&&(0,P.jsxs)(`div`,{style:{marginTop:16},children:[(0,P.jsx)(B,{onClick:M,disabled:fe||Ve,fase:pe?`exito`:fe?`cargando`:`idle`,colorBase:`var(--admin-brand)`,colorTexto:`var(--admin-brand-texto)`,children:`Guardar`}),Ve&&(0,P.jsx)(`p`,{style:{fontSize:12.5,color:`var(--admin-mute)`,margin:`8px 0 0`},children:`Completa horario, teléfono y correo del encargado para poder guardar.`}),j&&(0,P.jsx)(`p`,{style:{fontSize:13,color:`var(--admin-danger)`,margin:`10px 0 0`},children:j}),me&&!j&&(0,P.jsx)(`p`,{style:{fontSize:13,color:`var(--admin-success)`,margin:`10px 0 0`},children:me})]})]})]})]})]})})}function Jt(e){return String(e||``).normalize(`NFD`).replace(/\p{M}/gu,``).toLowerCase().trim()}function H(e){let t=Number(e);return Number.isFinite(t)?`S/ ${t.toLocaleString(`es-PE`,{minimumFractionDigits:2,maximumFractionDigits:2})}`:`S/ 0.00`}function U(e,t=2){if(!Number.isFinite(e))return 0;let n=10**t;return Math.round(e*n)/n}function Yt(e,t=1){let n=Math.max(1,Math.floor(Number(t)||1)),r=Number(e.subtotal)||0,i=Number(e.igv),a=Number.isFinite(i)?i:U(r*.18,4),o=Number(e.precioTotal)||U(r+a,4);return{id:`${e.tipo}-${e.codigo}`,codigo:e.codigo,descripcion:e.descripcion,tipo:e.tipo,categoria:e.categoria||``,medida:e.medida||``,cantidad:n,unitSubtotal:r,unitIgv:a,unitTotal:o,subtotal:U(r*n,2),igv:U(a*n,2),total:U(o*n,2)}}function Xt(e,t,n=1){let r=Yt(t,n),i=e.findIndex(e=>e.id===r.id);if(i===-1)return[...e,r];let a=[...e],o=a[i],s=o.cantidad+r.cantidad;return a[i]=Yt({...t,subtotal:o.unitSubtotal,igv:o.unitIgv,precioTotal:o.unitTotal},s),a}function Zt(e,t,n){let r=Math.floor(Number(n));return!Number.isFinite(r)||r<1?e.filter(e=>e.id!==t):e.map(e=>e.id===t?{...e,cantidad:r,subtotal:U(e.unitSubtotal*r,2),igv:U(e.unitIgv*r,2),total:U(e.unitTotal*r,2)}:e)}function Qt(e,t){return e.filter(e=>e.id!==t)}function $t(e){return{subtotal:U(e.reduce((e,t)=>e+t.subtotal,0),2),igv:U(e.reduce((e,t)=>e+t.igv,0),2),total:U(e.reduce((e,t)=>e+t.total,0),2),cantidadLineas:e.length}}function en(e,t,n=40){let r=Jt(t);if(!r)return e.slice(0,n);let i=[];for(let t of e)if((Jt(t.descripcion).includes(r)||Jt(t.codigo).includes(r)||t.categoria&&Jt(t.categoria).includes(r))&&(i.push(t),i.length>=n))break;return i}function tn(e){let t={medicina:{titulo:`Medicina / consultas`,lineas:[]},procedimientos:{titulo:`Procedimientos y prestaciones`,lineas:[]},farmacia:{titulo:`Farmacia`,lineas:[]}};for(let n of e)n.tipo===`farmacia`?t.farmacia.lineas.push(n):n.categoria&&/consulta|medicina|ambulatoria|emergencia/i.test(n.categoria+n.descripcion)?t.medicina.lineas.push(n):t.procedimientos.lineas.push(n);return Object.values(t).filter(e=>e.lineas.length>0)}function nn(e=new Date){return`LQ-${e.getFullYear()}${String(e.getMonth()+1).padStart(2,`0`)}${String(e.getDate()).padStart(2,`0`)}-${String(e.getTime()).slice(-6)}`}function rn({paciente:e,facturarA:t,referencia:n,carrito:r,totales:i,meta:a}){let o=[];o.push(`PRE-LIQUIDACIÓN DE PRESTACIONES ASISTENCIALES`),a?.resolucion&&o.push(a.resolucion),o.push(``),n&&o.push(`Nº liquidación: ${n}`),t&&o.push(`Facturar a: ${t}`),e&&o.push(`Paciente: ${e}`),o.push(``),o.push(`DETALLE	CANT	P.U.	SUBTOTAL`);for(let e of tn(r)){o.push(`— ${e.titulo} —`);for(let t of e.lineas)o.push(`${t.descripcion}\t${t.cantidad}\t${H(t.unitTotal)}\t${H(t.total)}`)}return o.push(``),o.push(`Subtotal: ${H(i.subtotal)}`),o.push(`IGV (18%): ${H(i.igv)}`),o.push(`TOTAL A PAGAR: ${H(i.total)}`),o.join(`
`)}var an=`/data/tarifario-prestaciones.json`,on=`/data/tarifario-farmacia.json`,sn=`/data/tarifario-meta.json`,W=`
.panel-crm {
  min-height: 100vh;
  background: #F0F4F8;
  color: #0D253D;
  font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
}
.panel-crm * { box-sizing: border-box; }
.panel-crm input, .panel-crm select, .panel-crm button {
  font: inherit;
}
@media print {
  .panel-crm .no-print { display: none !important; }
  .panel-crm .solo-print { display: block !important; }
}
.panel-crm .solo-print { display: none; }
@media (max-width: 768px) {
  .panel-crm-grid { grid-template-columns: 1fr !important; }
}
`;function cn({children:e,onClick:t,variant:n=`primary`,disabled:r,type:i=`button`,style:a}){let o={border:`none`,borderRadius:10,padding:`12px 18px`,fontWeight:700,cursor:r?`not-allowed`:`pointer`,opacity:r?.55:1,fontSize:14,...a},s={primary:{background:`#4434D4`,color:`#fff`,boxShadow:`0 3px 0 rgba(0,0,0,0.2)`},secondary:{background:`#fff`,color:`#33475B`,border:`1px solid #A8C3DE`},danger:{background:`#FDE7ED`,color:`#901638`,border:`1px solid #C81E4E`},success:{background:`#227A4A`,color:`#fff`,boxShadow:`0 3px 0 rgba(0,0,0,0.2)`}};return(0,P.jsx)(`button`,{type:i,disabled:r,onClick:t,style:{...o,...s[n]},children:e})}function ln({label:e,value:t,onChange:n,placeholder:r}){return(0,P.jsxs)(`label`,{style:{display:`block`,marginBottom:12},children:[(0,P.jsx)(`span`,{style:{display:`block`,fontSize:12,fontWeight:600,color:`#5B6B7D`,marginBottom:4},children:e}),(0,P.jsx)(`input`,{value:t,onChange:e=>n(e.target.value),placeholder:r,style:{width:`100%`,padding:`12px 14px`,borderRadius:10,border:`1px solid #A8C3DE`,background:`#fff`}})]})}function un(){let[e,t]=(0,o.useState)(null),[n,r]=(0,o.useState)([]),[i,a]=(0,o.useState)(null),[s,c]=(0,o.useState)(``),[l,u]=(0,o.useState)(!1),[d,f]=(0,o.useState)(`prestacion`),[p,m]=(0,o.useState)(``),[h,g]=(0,o.useState)(``),[_,v]=(0,o.useState)(``),[y,b]=(0,o.useState)(``),[x,S]=(0,o.useState)(``),[C,w]=(0,o.useState)([]),[T,E]=(0,o.useState)(`atencion`),[D,ee]=(0,o.useState)(``),[O,te]=(0,o.useState)(!1),[k,ne]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let e=!1;return(async()=>{try{let[n,i]=await Promise.all([fetch(sn),fetch(an)]);if(!n.ok||!i.ok)throw Error(`No se pudo cargar el tarifario`);let a=await n.json(),o=await i.json();e||(t(a),r(o))}catch(t){e||c(t.message||`Error al cargar datos`)}})(),()=>{e=!0}},[]);let re=(0,o.useCallback)(async()=>{if(!(i!==null||l)){u(!0);try{let e=await fetch(on);if(!e.ok)throw Error(`Farmacia no disponible`);a(await e.json())}catch(e){c(e.message||`Error farmacia`)}finally{u(!1)}}},[i,l]),ie=(0,o.useMemo)(()=>{let e=new Set;for(let t of n)t.categoria&&e.add(t.categoria);return[...e].sort((e,t)=>e.localeCompare(t,`es`))},[n]),ae=(0,o.useMemo)(()=>d===`farmacia`?i||[]:n,[d,i,n]),oe=(0,o.useMemo)(()=>{let e=ae;return d===`prestacion`&&h&&(e=e.filter(e=>e.categoria===h)),en(e,p,50)},[ae,p,h,d]),A=(0,o.useMemo)(()=>$t(C),[C]),se=e=>{w(t=>Xt(t,e,1))},ce=()=>{C.length&&(ee(nn()),te(!1),E(`pago`))},le=(0,o.useMemo)(()=>rn({paciente:_,facturarA:y,referencia:D,carrito:C,totales:A,meta:e}),[_,y,D,C,A,e]);return s&&!n.length?(0,P.jsxs)(`div`,{className:`panel-crm`,style:{padding:24},children:[(0,P.jsx)(`style`,{children:W}),(0,P.jsx)(`p`,{style:{color:`#A32B3E`},children:s})]}):(0,P.jsxs)(`div`,{className:`panel-crm`,children:[(0,P.jsx)(`style`,{children:W}),(0,P.jsx)(`header`,{className:`no-print`,style:{background:`linear-gradient(135deg, #4434D4 0%, #5B4FE9 100%)`,color:`#fff`,padding:`20px 16px 24px`},children:(0,P.jsxs)(`div`,{style:{maxWidth:1100,margin:`0 auto`},children:[(0,P.jsx)(`p`,{style:{margin:0,fontSize:12,opacity:.85,letterSpacing:`0.06em`,textTransform:`uppercase`},children:`CRM · Tarifario Nivel I`}),(0,P.jsx)(`h1`,{style:{margin:`6px 0 8px`,fontSize:22,fontWeight:800},children:`Liquidación de atenciones`}),(0,P.jsx)(`p`,{style:{margin:0,fontSize:14,opacity:.92,maxWidth:520},children:`Elija las prestaciones o medicamentos atendidos y genere el total para cobro.`})]})}),(0,P.jsxs)(`main`,{style:{maxWidth:1100,margin:`0 auto`,padding:`16px 16px 48px`},children:[T===`atencion`&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(`section`,{className:`no-print`,style:{background:`#fff`,borderRadius:14,border:`1px solid #E3E8EE`,padding:`16px 18px`,marginBottom:16},children:[(0,P.jsx)(`h2`,{style:{margin:`0 0 12px`,fontSize:16},children:`Datos de la atención`}),(0,P.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(220px, 1fr))`,gap:12},children:[(0,P.jsx)(ln,{label:`Paciente`,value:_,onChange:v,placeholder:`Nombre completo`}),(0,P.jsx)(ln,{label:`Facturar a`,value:y,onChange:b,placeholder:`Titular o empresa`}),(0,P.jsx)(ln,{label:`Pagaré Nº (opcional)`,value:x,onChange:S,placeholder:`Ej. 497137`})]})]}),(0,P.jsxs)(`div`,{className:`no-print`,style:{display:`grid`,gridTemplateColumns:`minmax(0, 1.2fr) minmax(0, 1fr)`,gap:16,alignItems:`start`},children:[(0,P.jsxs)(`section`,{style:{background:`#fff`,borderRadius:14,border:`1px solid #E3E8EE`,padding:`16px 18px`,minHeight:360},children:[(0,P.jsx)(`div`,{style:{display:`flex`,gap:8,marginBottom:12,flexWrap:`wrap`},children:[{id:`prestacion`,label:`Prestaciones`},{id:`farmacia`,label:`Farmacia`}].map(e=>(0,P.jsx)(`button`,{type:`button`,onClick:()=>{f(e.id),m(``),e.id===`farmacia`&&re()},style:{padding:`8px 14px`,borderRadius:999,border:d===e.id?`2px solid #4434D4`:`1px solid #A8C3DE`,background:d===e.id?`#EDEBFE`:`#fff`,fontWeight:700,fontSize:13,cursor:`pointer`},children:e.label},e.id))}),(0,P.jsx)(`input`,{value:p,onChange:e=>m(e.target.value),placeholder:d===`farmacia`?`Buscar medicamento o código…`:`Buscar procedimiento, consulta o código…`,style:{width:`100%`,padding:`12px 14px`,borderRadius:10,border:`1px solid #A8C3DE`,marginBottom:10}}),d===`prestacion`&&(0,P.jsxs)(`select`,{value:h,onChange:e=>g(e.target.value),style:{width:`100%`,padding:`10px 12px`,borderRadius:10,border:`1px solid #A8C3DE`,marginBottom:12,background:`#fff`},children:[(0,P.jsx)(`option`,{value:``,children:`Todas las categorías`}),ie.map(e=>(0,P.jsx)(`option`,{value:e,children:e},e))]}),d===`farmacia`&&i===null&&(0,P.jsx)(`p`,{style:{fontSize:14,color:`#5B6B7D`},children:l?`Cargando catálogo de farmacia…`:`Preparando catálogo…`}),(0,P.jsxs)(`ul`,{style:{listStyle:`none`,margin:0,padding:0,maxHeight:420,overflow:`auto`},children:[oe.map(e=>(0,P.jsxs)(`li`,{style:{display:`flex`,alignItems:`flex-start`,gap:10,padding:`10px 0`,borderBottom:`1px solid #E3E8EE`},children:[(0,P.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,P.jsx)(`p`,{style:{margin:0,fontSize:14,fontWeight:600,lineHeight:1.35},children:e.descripcion}),(0,P.jsxs)(`p`,{style:{margin:`4px 0 0`,fontSize:12,color:`#5B6B7D`},children:[`Cód. `,e.codigo,e.medida?` · ${e.medida}`:``,e.categoria?` · ${e.categoria}`:``]})]}),(0,P.jsxs)(`div`,{style:{textAlign:`right`,flexShrink:0},children:[(0,P.jsx)(`p`,{style:{margin:0,fontWeight:800,fontSize:14},children:H(e.precioTotal)}),(0,P.jsx)(`button`,{type:`button`,onClick:()=>se(e),style:{marginTop:6,padding:`6px 12px`,borderRadius:8,border:`none`,background:`#4434D4`,color:`#fff`,fontWeight:700,fontSize:12,cursor:`pointer`},children:`Agregar`})]})]},`${e.tipo}-${e.codigo}`)),!oe.length&&ae.length>0&&(0,P.jsx)(`li`,{style:{padding:16,color:`#5B6B7D`,fontSize:14},children:`Sin resultados. Pruebe otra búsqueda.`})]})]}),(0,P.jsxs)(`section`,{style:{background:`#fff`,borderRadius:14,border:`2px solid #4434D4`,padding:`16px 18px`,position:`sticky`,top:12},children:[(0,P.jsx)(`h2`,{style:{margin:`0 0 8px`,fontSize:16},children:`Detalle a cobrar`}),(0,P.jsx)(`p`,{style:{margin:`0 0 12px`,fontSize:13,color:`#5B6B7D`},children:C.length?`${C.length} línea(s)`:`Agregue atenciones del catálogo`}),(0,P.jsx)(`ul`,{style:{listStyle:`none`,margin:0,padding:0,maxHeight:280,overflow:`auto`},children:C.map(e=>(0,P.jsxs)(`li`,{style:{padding:`10px 0`,borderBottom:`1px solid #E3E8EE`,fontSize:13},children:[(0,P.jsx)(`p`,{style:{margin:`0 0 6px`,fontWeight:600,lineHeight:1.3},children:e.descripcion}),(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,flexWrap:`wrap`},children:[(0,P.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:4,fontSize:12},children:[`Cant.`,(0,P.jsx)(`input`,{type:`number`,min:1,value:e.cantidad,onChange:t=>w(n=>Zt(n,e.id,t.target.value)),style:{width:56,padding:`4px 6px`,borderRadius:6,border:`1px solid #A8C3DE`}})]}),(0,P.jsx)(`span`,{style:{fontWeight:700},children:H(e.total)}),(0,P.jsx)(`button`,{type:`button`,onClick:()=>w(t=>Qt(t,e.id)),style:{marginLeft:`auto`,background:`none`,border:`none`,color:`#901638`,fontSize:12,fontWeight:700,cursor:`pointer`},children:`Quitar`})]})]},e.id))}),(0,P.jsxs)(`div`,{style:{marginTop:16,paddingTop:12,borderTop:`2px solid #E3E8EE`},children:[(0,P.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,fontSize:13,marginBottom:4},children:[(0,P.jsx)(`span`,{children:`Subtotal`}),(0,P.jsx)(`span`,{children:H(A.subtotal)})]}),(0,P.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,fontSize:13,marginBottom:8},children:[(0,P.jsx)(`span`,{children:`IGV (18%)`}),(0,P.jsx)(`span`,{children:H(A.igv)})]}),(0,P.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,fontSize:18,fontWeight:800,color:`#4434D4`},children:[(0,P.jsx)(`span`,{children:`Total`}),(0,P.jsx)(`span`,{children:H(A.total)})]})]}),(0,P.jsx)(`div`,{style:{marginTop:16},children:(0,P.jsx)(cn,{disabled:!C.length,onClick:ce,style:{width:`100%`},children:`Generar liquidación y cobrar`})})]})]})]}),T===`pago`&&(0,P.jsxs)(`section`,{style:{background:`#fff`,borderRadius:14,border:`1px solid #E3E8EE`,padding:`20px 22px`,maxWidth:720,margin:`0 auto`},children:[(0,P.jsx)(`div`,{className:`no-print`,style:{marginBottom:16},children:(0,P.jsx)(cn,{variant:`secondary`,onClick:()=>E(`atencion`),children:`← Volver a editar`})}),(0,P.jsx)(`div`,{className:`solo-print`,children:(0,P.jsx)(`h1`,{style:{fontSize:18},children:`Pre-liquidación de prestaciones`})}),(0,P.jsx)(`p`,{style:{fontSize:12,color:`#5B6B7D`,margin:`0 0 4px`},children:`Nº liquidación`}),(0,P.jsx)(`p`,{style:{fontSize:20,fontWeight:800,margin:`0 0 16px`},children:D}),y&&(0,P.jsxs)(`p`,{style:{margin:`0 0 4px`},children:[(0,P.jsx)(`strong`,{children:`Facturar a:`}),` `,y]}),_&&(0,P.jsxs)(`p`,{style:{margin:`0 0 4px`},children:[(0,P.jsx)(`strong`,{children:`Paciente:`}),` `,_]}),x&&(0,P.jsxs)(`p`,{style:{margin:`0 0 16px`},children:[(0,P.jsx)(`strong`,{children:`Pagaré Nº:`}),` `,x]}),(0,P.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,fontSize:13,marginBottom:16},children:[(0,P.jsx)(`thead`,{children:(0,P.jsxs)(`tr`,{style:{borderBottom:`2px solid #0D253D`,textAlign:`left`},children:[(0,P.jsx)(`th`,{style:{padding:`8px 4px`},children:`Detalle`}),(0,P.jsx)(`th`,{style:{padding:`8px 4px`,width:48},children:`Cant.`}),(0,P.jsx)(`th`,{style:{padding:`8px 4px`,textAlign:`right`},children:`P.U.`}),(0,P.jsx)(`th`,{style:{padding:`8px 4px`,textAlign:`right`},children:`Subtotal`})]})}),(0,P.jsx)(`tbody`,{children:C.map(e=>(0,P.jsxs)(`tr`,{style:{borderBottom:`1px solid #E3E8EE`},children:[(0,P.jsx)(`td`,{style:{padding:`8px 4px`},children:e.descripcion}),(0,P.jsx)(`td`,{style:{padding:`8px 4px`},children:e.cantidad}),(0,P.jsx)(`td`,{style:{padding:`8px 4px`,textAlign:`right`},children:H(e.unitTotal)}),(0,P.jsx)(`td`,{style:{padding:`8px 4px`,textAlign:`right`},children:H(e.total)})]},e.id))})]}),(0,P.jsxs)(`div`,{style:{textAlign:`right`,marginBottom:20},children:[(0,P.jsxs)(`p`,{style:{margin:`4px 0`},children:[`Subtotal: `,H(A.subtotal)]}),(0,P.jsxs)(`p`,{style:{margin:`4px 0`},children:[`IGV: `,H(A.igv)]}),(0,P.jsxs)(`p`,{style:{margin:`8px 0 0`,fontSize:22,fontWeight:800,color:`#4434D4`},children:[`Total a pagar: `,H(A.total)]})]}),(0,P.jsxs)(`div`,{className:`no-print`,style:{display:`flex`,flexWrap:`wrap`,gap:10},children:[(0,P.jsx)(cn,{variant:`secondary`,onClick:async()=>{try{await navigator.clipboard.writeText(le),ne(!0),setTimeout(()=>ne(!1),2e3)}catch{}},children:k?`Copiado`:`Copiar detalle`}),(0,P.jsx)(cn,{variant:`secondary`,onClick:()=>window.print(),children:`Imprimir`}),O?(0,P.jsx)(`span`,{style:{padding:`12px 16px`,background:`#E3F3EF`,borderRadius:10,color:`#227A4A`,fontWeight:700,fontSize:14},children:`Pago registrado — puede entregar comprobante al paciente`}):(0,P.jsxs)(cn,{variant:`success`,onClick:()=>te(!0),children:[`Confirmar pago · `,H(A.total)]})]}),(0,P.jsx)(cn,{variant:`primary`,style:{marginTop:16,width:`100%`},onClick:()=>{w([]),E(`atencion`),ee(``),te(!1),v(``),b(``),S(``)},children:`Nueva atención`})]})]})]})}var dn=[{activo:!1,anunciante:``,titulo:``,texto:``,imagen:``,enlace:``,desde:``,hasta:``}];function fn(e,t){if(!e||!e.activo)return!1;for(let t of[`anunciante`,`titulo`,`imagen`,`enlace`,`desde`,`hasta`])if(!e[t])return!1;if(!/^https:\/\//.test(e.enlace))return!1;let n=new Date(`${e.desde}T00:00:00`),r=new Date(`${e.hasta}T23:59:59`);return Number.isNaN(n.getTime())||Number.isNaN(r.getTime())?!1:t>=n&&t<=r}function pn(e=new Date){return dn.filter(t=>fn(t,e))}var mn=0;function hn(e=new Date){let t=pn(e);if(t.length===0)return null;let n=t[mn%t.length];return mn+=1,n}function gn({frase:e=`Estamos revisando tu información…`,espacio:t=null,listo:n=!1,fraseListo:r=`Listo. Ya tenemos tu resultado.`,onContinuar:i}){let a=2*Math.PI*46;return(0,P.jsxs)(`div`,{className:`pantalla-carga`,style:{background:`var(--manila)`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`flex-start`,gap:22,padding:`32px 24px 24px`,textAlign:`center`},children:[(0,P.jsx)(`style`,{children:`
        .pantalla-carga { min-height: 100vh; min-height: 100dvh; }
        @keyframes cargaLlenar { from { stroke-dashoffset: ${a}; } to { stroke-dashoffset: 0; } }
        @keyframes cargaGirar  { to { transform: rotate(360deg); } }
        .carga-svg { transform: rotate(-90deg); }
        .carga-fill { animation: cargaLlenar 3s ease-in-out forwards; }
        .carga-punto { animation: cargaLatir 1.4s ease-in-out infinite; }
        @keyframes cargaLatir { 0%,100% { opacity: .35; } 50% { opacity: 1; } }
        @media (prefers-reduced-motion: reduce) {
          .carga-fill { animation: none; stroke-dashoffset: ${a*.25}; }
          .carga-punto { animation: none; opacity: .7; }
        }
      `}),(0,P.jsxs)(`div`,{style:{position:`relative`,width:116,height:116},children:[(0,P.jsxs)(`svg`,{className:`carga-svg`,width:`116`,height:`116`,viewBox:`0 0 116 116`,"aria-hidden":`true`,children:[(0,P.jsx)(`circle`,{cx:`58`,cy:`58`,r:46,fill:`none`,stroke:`#E3E8EE`,strokeWidth:`9`}),(0,P.jsx)(`circle`,{className:`carga-fill`,cx:`58`,cy:`58`,r:46,fill:`none`,stroke:`#5B4FE9`,strokeWidth:`9`,strokeLinecap:`round`,strokeDasharray:a,strokeDashoffset:a})]}),(0,P.jsx)(`span`,{style:{position:`absolute`,inset:0,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:34},children:(0,P.jsx)(F,{name:n?`logro`:`reloj`,size:34})})]}),(0,P.jsxs)(`p`,{style:{fontSize:18,fontWeight:700,color:`#33475B`,maxWidth:`22ch`,lineHeight:1.35},children:[n?r:e,!n&&(0,P.jsx)(`span`,{className:`carga-punto`,children:` ●`})]}),t&&(0,P.jsx)(`div`,{style:{marginTop:8,width:`100%`,display:`flex`,justifyContent:`center`},children:t}),n&&i&&(0,P.jsx)(`button`,{className:`btn-continuar`,onClick:i,autoFocus:!0,children:`Continuar →`})]})}function _n(){let[e,t]=(0,o.useState)(!0);return(0,o.useEffect)(()=>{Ge(`aviso_dengue_visto`,{})},[]),e?(0,P.jsxs)(`aside`,{className:`lwrap`,"aria-label":`Aviso de salud: el dengue se evita en casa`,children:[(0,P.jsx)(`style`,{children:`
        /* Sigue EN el flujo de la página, a propósito: la razón de arriba
           sigue valiendo (no tapar la foto de Rosa ni "Empezar ahora", no
           atrapar el foco). Lo que hacía que se leyera como una sección más
           era el MATERIAL, no la posición: papel crema idéntico a cualquier
           tarjeta de contenido, con un filete de color al costado —el mismo
           recurso que el resto del sitio dejó de usar el 2026-07-07 (ver
           DESIGN.md). Primero se probó un tinte rosado plano (--brand-soft):
           seguía leyéndose como un panel de UI cualquiera. Ahora el lado del
           texto lleva de fondo la MISMA foto del agua guardada de la que
           habla el texto (dengue-agua.jpg, ya en el repo, cero costo), muy
           lavada con un velo casi opaco encima — se nota que hay una foto
           ahí, no compite con la lectura. Borde completo en vez de filete, y
           la sombra --sh-lift que el sistema reserva para lo que sí se
           levanta del resto. */
        .aviso-caja {
          display: flex; flex-wrap: wrap; gap: 0;
          max-width: 640px; margin: var(--s5) 0;
          background-color: var(--sheet);
          border: 2px solid var(--brand);
          border-radius: var(--r); box-shadow: var(--sh-lift);
          animation: avisoLlama 1.5s cubic-bezier(.16,1,.3,1) both;
        }
        .aviso-caja picture {
          display: block; overflow: hidden; flex: 0 0 auto;
          width: 210px; align-self: stretch;
        }
        /* Mismo marco metálico que .carrusel-pieza img en App.jsx (App.jsx no
           importa este archivo, así que el valor se repite a mano): 1mm en
           vez de los 4.5mm originales, para que el filete no le gane
           protagonismo a la foto. */
        .aviso-caja img {
          display: block; width: 100%; height: 100%; object-fit: cover;
          border: 1mm solid #b7bbbf;
          border-image: linear-gradient(135deg, #dcdee0 0%, #f6f7f8 15%, #979ba0 35%, #ffffff 50%, #82868b 65%, #e8eaeb 82%, #aeb2b6 100%) 1;
        }
        .aviso-cuerpo {
          flex: 1 1 260px; padding: var(--s4) var(--s5); position: relative;
          background-image:
            linear-gradient(rgba(253,251,246,.91), rgba(253,251,246,.91)),
            url("/campana/dengue-agua.jpg");
          background-size: cover; background-position: center 32%;
        }
        /* Rótulo que dice qué es esto antes de que digan qué dice: sin esto,
           el titular de abajo se lee como si fuera el contenido de la
           portada y no un aviso que se puede cerrar. Mismo tratamiento que
           el ".leyebrow" del héroe: mono, versalitas, tracking abierto. */
        .aviso-etiqueta {
          display: inline-flex; align-items: center; gap: var(--s2);
          font-family: var(--mono);
          font-size: 13px; font-weight: 600;
          letter-spacing: 0.14em; text-transform: uppercase; color: var(--brand-deep);
          margin: 0 40px 6px 0;
        }
        .aviso-etiqueta::before {
          content: ""; width: 16px; height: 2px; background: var(--brand); flex: none;
        }
        .aviso-caja h2 {
          font-size: 18px; font-weight: 800; color: var(--ink);
          letter-spacing: -0.02em; line-height: 1.2; margin: 0 40px 6px 0;
        }
        .aviso-caja p { font-size: 15px; font-weight: 400; color: var(--body); line-height: 1.5; margin: 0; }
        .aviso-caja ul { list-style: none; margin: 8px 0 0; padding: 0; display: grid; gap: 5px; }
        .aviso-caja li {
          display: flex; gap: 8px; align-items: flex-start;
          font-size: 14px; color: var(--body); line-height: 1.4;
        }
        .aviso-caja li::before {
          content: ""; flex: none; width: 6px; height: 6px; margin-top: 6px;
          border-radius: 50%; background: var(--brand);
        }
        .aviso-cerrar {
          position: absolute; top: var(--s3); right: var(--s3);
          width: 32px; height: 32px; min-height: 32px;
          background: none; color: var(--brand-deep); border: 1px solid var(--brand);
          border-radius: 50%; font-family: inherit; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
        }
        .aviso-cerrar:hover { color: var(--ink); border-color: var(--ink); }
        .aviso-cerrar:focus-visible { outline: 3px solid var(--brand); outline-offset: 2px; }
        /* Crédito de la fuente: la firma de quién respalda lo de arriba, no
           contenido que la persona tenga que leer, así que va por debajo del
           piso de 14px que sí rige para el resto de la tarjeta. */
        .aviso-caja .aviso-fuente {
          margin-top: 8px; font-size: 12px; color: var(--brand-deep); letter-spacing: 0.01em;
        }
        /* Abajo de 600px la imagen no desaparece: pasa de columna lateral a
           franja arriba del texto, a todo el ancho. Antes se ocultaba entera
           en el móvil — la mayoría del tráfico de esta campaña es celular.
           El quiebre es 600px y no 520px: con la imagen a 210px, entre 521 y
           555px el ancho no le alcanza a la fila para acomodar imagen +
           columna mínima (210 + 260 de texto + su padding), y sin esta regla
           el navegador la envuelve solo —imagen angosta con hueco vacío al
           lado, medido con .tmp-shots/aviso-measure.mjs—. 600px deja margen
           de sobra para que la fila entre siempre sin ese quiebre feo. */
        @media (max-width: 600px) {
          .aviso-caja { flex-direction: column; }
          .aviso-caja picture { width: 100%; height: 200px; align-self: auto; }
        }

        /* Golpe de atención al aparecer, y después queda quieta: una
           vibración permanente al lado de un texto que hay que leer es lo
           peor que se le puede hacer a esta audiencia. */
        @keyframes avisoLlama {
          0%   { transform: translateY(10px); opacity: 0; }
          20%  { transform: translateY(0); opacity: 1; }
          52%  { transform: translateX(0) rotate(0deg); }
          60%  { transform: translateX(-5px) rotate(-.4deg); }
          68%  { transform: translateX(5px) rotate(.4deg); }
          76%  { transform: translateX(-3px) rotate(-.2deg); }
          84%  { transform: translateX(2px); }
          100% { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .aviso-caja { animation: none; }
        }
      `}),(0,P.jsxs)(`div`,{className:`aviso-caja`,role:`note`,"aria-label":`Aviso de salud: el dengue se evita en casa`,children:[(0,P.jsxs)(`picture`,{children:[(0,P.jsx)(`source`,{srcSet:`/campana/dengue-tapar.webp`,type:`image/webp`}),(0,P.jsx)(`img`,{src:`/campana/dengue-tapar.jpg`,width:`1024`,height:`512`,alt:`Una mujer aprieta la tapa del cilindro azul donde guarda agua, en un patio de arena con baldes boca abajo.`})]}),(0,P.jsxs)(`div`,{className:`aviso-cuerpo`,children:[(0,P.jsx)(`p`,{className:`aviso-etiqueta`,children:`Aviso de salud`}),(0,P.jsx)(`h2`,{children:`El dengue se evita en casa`}),(0,P.jsx)(`p`,{children:`El zancudo nace en el agua guardada. Una vez por semana:`}),(0,P.jsxs)(`ul`,{children:[(0,P.jsx)(`li`,{children:`Lava y escobilla por dentro los recipientes donde guardas agua.`}),(0,P.jsx)(`li`,{children:`Tápalos bien después de llenarlos.`}),(0,P.jsx)(`li`,{children:`Cambia el agua de los floreros por arena húmeda.`})]}),(0,P.jsx)(`p`,{className:`aviso-fuente`,children:`Fuente: MINSA-Perú`}),(0,P.jsx)(`button`,{type:`button`,className:`aviso-cerrar`,onClick:()=>{Ge(`aviso_dengue_cerrado`,{}),t(!1)},"aria-label":`Cerrar aviso`,children:(0,P.jsx)(F,{name:`cruz`,size:16})})]})]})]}):null}function vn(){let e=(0,o.useRef)(null),[t,n]=(0,o.useState)(()=>matchMedia(`(prefers-reduced-motion: reduce)`).matches);return(0,o.useEffect)(()=>{let r=e.current;if(!r||t)return;let i=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting&&(n(!0),i.disconnect())},{rootMargin:`0px 0px -80px 0px`});return i.observe(r),()=>i.disconnect()},[t]),[e,t]}function yn(){let[e,t]=vn();return(0,P.jsx)(`section`,{ref:e,className:`lband revela ${t?`visto`:``}`,children:(0,P.jsx)(`div`,{className:`lwrap`,children:(0,P.jsxs)(`details`,{className:`lplegable`,children:[(0,P.jsx)(`summary`,{children:(0,P.jsxs)(`span`,{children:[(0,P.jsx)(`span`,{className:`leyebrow`,children:`Cómo funciona`}),(0,P.jsx)(`span`,{className:`lplegable-titulo`,role:`heading`,"aria-level":`2`,children:`Tres pasos, sin apuro`}),(0,P.jsx)(`span`,{className:`lplegable-ayuda`,children:`Ver cómo funciona`})]})}),(0,P.jsx)(`ol`,{className:`ltalon`,children:[[`Ingresas tus datos`,`Tu DNI y tu fecha de nacimiento. Nada más.`],[`Respondes con calma`,`Una pregunta simple a la vez. Puedes escuchar todo en voz alta.`],[`Recibes tu lista`,`Sabrás qué documentos llevar y a qué área del hospital ir.`]].map(([e,t],n)=>(0,P.jsxs)(`li`,{className:`ltalon-item`,"data-rise":!0,style:{animationDelay:`${n*70}ms`},children:[(0,P.jsx)(`span`,{className:`lpaso-n`,"aria-hidden":`true`,children:`0${n+1}`}),(0,P.jsx)(`span`,{className:`lpaso-t`,children:e}),(0,P.jsx)(`span`,{className:`lpaso-d`,children:t})]},e))})]})})})}function bn(){let[e,t]=vn();return(0,P.jsx)(`section`,{ref:e,className:`lband revela ${t?`visto`:``}`,children:(0,P.jsxs)(`div`,{className:`lwrap`,children:[(0,P.jsxs)(`div`,{className:`lsec-head`,children:[(0,P.jsx)(`span`,{className:`leyebrow`,children:`Guías`}),(0,P.jsx)(`h2`,{className:`lh2`,children:`Cada trámite, por separado`}),(0,P.jsx)(`p`,{className:`lsec-sub`,children:`Qué documentos pide cada uno, cuánto demora y a qué área ir.`})]}),(0,P.jsx)(`div`,{className:`lfichas`,children:[[`/tramites/validacion-descanso-medico.html`,`clipboard`,`Validación de descanso médico`,`canje`,`Certificado original, receta y exámenes.`,`30 días hábiles`],[`/tramites/tramites-en-linea.html`,`celular`,`Trámites desde el celular`,`online`,`Subsidios, cambio de centro de atención y reclamos.`,`Sin ir al hospital`]].map(([e,t,n,r,i,a],o)=>(0,P.jsxs)(`a`,{href:e,className:`lficha lficha--${r}`,"data-rise":!0,style:{animationDelay:`${o*60}ms`},children:[(0,P.jsx)(`span`,{className:`lficha-tab`,"aria-hidden":`true`,children:`Exp. 0${o+1}`}),(0,P.jsxs)(`span`,{className:`lficha-fila`,children:[(0,P.jsx)(`span`,{className:`lficha-ico`,"aria-hidden":`true`,children:(0,P.jsx)(F,{name:t,size:24})}),(0,P.jsx)(`span`,{className:`lficha-t`,children:n})]}),(0,P.jsx)(`span`,{className:`lficha-d`,children:i}),(0,P.jsxs)(`span`,{className:`lficha-pie`,children:[(0,P.jsx)(`span`,{className:`lficha-plazo`,children:a}),(0,P.jsxs)(`span`,{className:`lficha-go`,children:[`Ver la guía`,(0,P.jsx)(F,{name:`chevron`,size:16})]})]})]},e))})]})})}function xn(){let[e,t]=vn();return(0,P.jsx)(`section`,{ref:e,className:`lband lband--carton revela ${t?`visto`:``}`,children:(0,P.jsx)(`div`,{className:`lwrap`,children:(0,P.jsxs)(`details`,{className:`ldoc lplegable`,children:[(0,P.jsx)(`summary`,{children:(0,P.jsxs)(`span`,{children:[(0,P.jsx)(`span`,{className:`leyebrow`,children:`Marco normativo`}),(0,P.jsx)(`span`,{className:`lplegable-titulo`,role:`heading`,"aria-level":`2`,children:`En qué se apoya esta orientación`}),(0,P.jsx)(`span`,{className:`lplegable-ayuda`,children:`Ver normas y fuentes`})]})}),(0,P.jsx)(`ul`,{className:`lnormas`,children:[[`Directiva N° 015-GG-ESSALUD-2014`,`Validación de descanso médico particular y requisitos del canje.`],[`D.S. 020-2021-TR`,`Plazos máximos de entrega de documentos.`],[`Ley N° 29414`,`Derechos de las personas usuarias de los servicios de salud.`],[`Ley N° 29733`,`Protección de datos personales en la consulta de tu seguro.`]].map(([e,t])=>(0,P.jsxs)(`li`,{className:`lnorma`,children:[(0,P.jsx)(`span`,{className:`lnorma-t`,children:e}),(0,P.jsx)(`span`,{className:`lnorma-d`,children:t})]},e))})]})})})}function Sn({conCarrusel:e=!0,slug:t}){let[n]=(0,o.useState)(()=>hn()),[r,i]=(0,o.useState)(null);return(0,o.useEffect)(()=>{if(!t)return;let e=!1;return lt(t).then(t=>{if(e||!t.ok)return;let n=t.popupVisible,r=n?.destino||`popup`;n&&n.imagenUrl&&(r===`sala_espera`||r===`ambos`)&&i({texto:n.texto,imagenUrl:n.imagenUrl})}).catch(()=>{}),()=>{e=!0}},[t]),r?(0,P.jsx)(Tn,{f:r}):n?(0,P.jsx)(wn,{p:n}):e?(0,P.jsx)(kn,{}):null}function Cn({size:e=24}){return(0,P.jsxs)(`span`,{className:`marca-banner`,children:[(0,P.jsx)(`style`,{children:`
        /* Era una píldora blanca flotando con una sombra difusa de 16px y el
           logo en degradado: el único degradado del sitio y la única píldora.
           Sobre la manila se leía como un elemento pegado de otra maqueta.
           Ahora es la misma marca que la cabecera de la portada y de las
           guías: cuadro granate liso + nombre, sin caja alrededor. */
        .marca-banner {
          display: inline-flex; align-items: center; gap: 12px;
          padding: 0; background: none; border: none; box-shadow: none;
        }
        .marca-logo {
          width: 36px; height: 36px; border-radius: 10px; flex: none;
          background: var(--brand, #5B4FE9);
          color: #fff; display: flex; align-items: center; justify-content: center;
          font-weight: 800; font-size: 14px; letter-spacing: -0.02em;
        }
        .marca-nombre {
          font-weight: 800; letter-spacing: -0.02em; white-space: nowrap;
          color: var(--brand, #5B4FE9);
        }
      `}),(0,P.jsx)(`span`,{className:`marca-logo`,children:`DA`}),(0,P.jsx)(`span`,{className:`marca-nombre`,style:{fontSize:e},children:`digitalasistent`})]})}function wn({p:e}){return(0,o.useEffect)(()=>{Ge(`patrocinio_visto`,{anunciante:e.anunciante})},[e.anunciante]),(0,P.jsxs)(`div`,{className:`patrocinio`,children:[(0,P.jsx)(`span`,{className:`patrocinio-rotulo`,children:`Publicidad`}),(0,P.jsxs)(`a`,{className:`patrocinio-enlace`,href:e.enlace,target:`_blank`,onClick:()=>Ge(`patrocinio_clic`,{anunciante:e.anunciante}),rel:`sponsored noopener noreferrer`,children:[(0,P.jsxs)(`picture`,{children:[(0,P.jsx)(`source`,{srcSet:`/patrocinio/${e.imagen}.webp`,type:`image/webp`}),(0,P.jsx)(`img`,{src:`/patrocinio/${e.imagen}.jpg`,width:`1024`,height:`512`,loading:`lazy`,decoding:`async`,alt:`Publicidad de ${e.anunciante}`})]}),(0,P.jsxs)(`div`,{className:`patrocinio-texto`,children:[(0,P.jsx)(`strong`,{children:e.titulo}),e.texto&&(0,P.jsx)(`span`,{children:e.texto})]})]})]})}function Tn({f:e}){return(0,P.jsxs)(`div`,{className:`patrocinio`,children:[(0,P.jsx)(`div`,{className:`patrocinio-enlace`,children:(0,P.jsx)(`img`,{src:e.imagenUrl,width:`1024`,height:`512`,loading:`lazy`,decoding:`async`,alt:``})}),(0,P.jsx)(`div`,{className:`patrocinio-texto`,children:(0,P.jsx)(`strong`,{children:e.texto})})]})}var En=[{img:`dengue-agua`,alt:`Una mujer refriega con escobilla el interior del cilindro azul; la tapa está apoyada contra la pared.`,titulo:`Lava, escobilla y tapa`,texto:`En los recipientes donde guardas agua es donde cría el zancudo del dengue.`},{img:`dengue-inservibles`,alt:`Un hombre recoge en un costal la llanta con agua empozada, las botellas y las latas tiradas en su patio.`,titulo:`Elimina los inservibles`,texto:`Llantas, botellas y latas juntan agua de lluvia, y ahí también cría el zancudo. Sácalos de tu casa.`},{img:`dengue-repelente`,alt:`Unas manos aplican crema repelente sobre el antebrazo.`,titulo:`Usa repelente`,texto:`Aplícalo en la piel descubierta todos los días. El zancudo del dengue pica de día.`},{img:`dengue-mosquitero`,alt:`Una niña duerme bajo un mosquitero blanco que cubre toda su cama; su mamá la mira desde la puerta.`,titulo:`Duerme con mosquitero`,texto:`Úsalo también en las siestas, no solo de noche. Si alguien de la casa ya tiene dengue, es más importante todavía: evita que el zancudo lo pique y contagie a los demás.`},{img:`dengue-alarma`,alt:`Una mujer lleva del brazo a un hombre hasta la posta médica, marcada con una cruz verde.`,titulo:`Reconoce las señales de alarma`,texto:`Con dolor de barriga fuerte, vómitos que no paran, sangrado o mucho sueño, anda al establecimiento de salud.`}],Dn=3e3,On=0;function kn(){let[e,t]=(0,o.useState)(1),[n]=(0,o.useState)(()=>{let e=[En[On%En.length],En[(On+1)%En.length]];return On=(On+2)%En.length,e}),[r,i]=(0,o.useState)(0),[a,s]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{if(a||n.length<2)return;let e=setTimeout(()=>i(e=>{let r=(e+1)%n.length;return t(e=>Math.max(e,r+1)),r}),Dn);return()=>clearTimeout(e)},[r,a,n.length]),(0,P.jsxs)(`div`,{className:`carrusel`,onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),onFocusCapture:()=>s(!0),"aria-roledescription":`carrusel`,"aria-label":`Consejos mientras esperas`,children:[(0,P.jsx)(`div`,{className:`carrusel-vista`,children:(0,P.jsx)(`div`,{className:`carrusel-tira`,style:{transform:`translateX(-${r*100}%)`},children:n.map((t,n)=>(0,P.jsxs)(`div`,{className:`carrusel-pieza`,"aria-hidden":n!==r,children:[n<=e?(0,P.jsxs)(`picture`,{children:[(0,P.jsx)(`source`,{srcSet:`/campana/${t.img}.webp`,type:`image/webp`}),(0,P.jsx)(`img`,{src:`/campana/${t.img}.jpg`,width:`1024`,height:`512`,decoding:`async`,alt:t.alt})]}):(0,P.jsx)(`div`,{className:`carrusel-hueco`,"aria-hidden":`true`}),(0,P.jsxs)(`div`,{className:`carrusel-texto`,children:[(0,P.jsx)(`strong`,{children:t.titulo}),(0,P.jsx)(`span`,{children:t.texto})]})]},t.img))})}),n.length>1&&(0,P.jsx)(`div`,{className:`carrusel-puntos`,children:n.map((e,a)=>(0,P.jsx)(`button`,{className:`carrusel-punto${a===r?` es-actual`:``}`,onClick:()=>{i(a),t(e=>Math.max(e,a+1)),s(!0)},"aria-label":`Ver consejo ${a+1} de ${n.length}`,"aria-current":a===r},e.img))})]})}function An(){return(0,P.jsxs)(`details`,{className:`aviso-indep`,children:[(0,P.jsxs)(`summary`,{children:[(0,P.jsx)(`strong`,{children:`Plataforma independiente`}),` · no es un aplicativo oficial de EsSalud`]}),(0,P.jsx)(`p`,{children:`No tiene vínculo con el Ministerio de Salud ni con ninguna otra entidad del Estado.`})]})}var jn=[{id:`canje`,icono:`clipboard`,titulo:`Validación de
Descanso Médico`,color:`#C81E4E`,colorTexto:`#901638`,bg:`#FDE7ED`}],Mn=new Set([`acerca`,`contacto`,`privacidad`,`publicidad`,`tramites`,`guia`,`patrocinio`,`campana`,`audio`,`generar-qr`,`admin`,`admin-plataforma`,`api`,`404`]);function Nn(e){let t=e.replace(/^\/|\/$/g,``).toLowerCase();return!t||t.includes(`/`)||Mn.has(t)||!/^[a-z0-9-]{2,40}$/.test(t)?null:t}var Pn=`/generar-qr`,Fn=`/admin-plataforma`,In=`/crm-costos`,Ln=Date.now(),Rn=new Date(Ln).getFullYear();function zn(){if(window.location.pathname===Pn)return{pantalla:`admin_qr`,qrMotivo:null};if(window.location.pathname===Fn)return{pantalla:`admin_establecimientos`,qrMotivo:null};if(window.location.pathname===In)return{pantalla:`crm_costos`,qrMotivo:null};let e=new URLSearchParams(window.location.search);return e.get(`admin_avance`)===`1`?{pantalla:`admin_avance`,qrMotivo:null}:e.get(`admin`)===`1`||e.get(`admin_establecimientos`)===`1`?{pantalla:`admin_establecimientos`,qrMotivo:null}:e.get(`admin_establecimiento`)||Nn(window.location.pathname)?{pantalla:`admin_establecimiento`,qrMotivo:null}:e.get(`asistente`)===`1`?{pantalla:`splash`,qrMotivo:null}:e.get(`t`)?{pantalla:`verificando_qr`,qrMotivo:null}:{pantalla:`qr_invalido`,qrMotivo:`falta_token`}}var Bn={background:`#F6F9FC`,color:`var(--mute)`,border:`1px solid var(--rule)`,boxShadow:`none`,cursor:`not-allowed`,opacity:1},G=`0 3px 0 rgba(0,0,0,0.30)`;function Vn({aceptado:e,onToggle:t,texto:n}){return(0,P.jsxs)(`button`,{onClick:t,style:{width:`100%`,padding:`16px 18px`,background:e?`#E3F3EF`:`var(--sheet)`,border:`3px solid ${e?`#227A4A`:`#A8C3DE`}`,borderRadius:`var(--r)`,cursor:`pointer`,display:`flex`,alignItems:`flex-start`,gap:14,textAlign:`left`,transition:`background 0.15s, border-color 0.15s`,marginBottom:12},children:[(0,P.jsx)(`div`,{style:{width:32,height:32,borderRadius:3,border:`3px solid ${e?`#227A4A`:`#A8C3DE`}`,background:e?`#227A4A`:`var(--sheet)`,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0,transition:`background 0.15s, border-color 0.15s`},children:e&&(0,P.jsx)(`span`,{className:`acepto-check`,style:{color:`white`,fontSize:20,fontWeight:700},children:`✓`})}),(0,P.jsx)(`span`,{style:{fontSize:16,fontWeight:600,color:e?`#227A4A`:`#0D253D`,lineHeight:1.45,fontFamily:`inherit`},children:n})]})}var Hn=`Lunes a viernes • 8:00 a.m. – 2:00 p.m.`,Un=`#2D5D80`,Wn=`#E1EFF7`,Gn=`#2D5D80`,Kn=`#8A5A17`,qn=`#FBF0DE`,Jn=`#6B430E`,Yn=`#33475B`,Xn=`#E7EEF4`,Zn=`#0B6E77`,Qn=`#E0F4F5`,$n=`#075258`,er=`#5B4FE9`,tr=`#EDEBFE`,nr=`#3D2DB8`,rr=`#7A2E52`,ir=`#F7E9EF`,ar=`#7A2E52`,or=3e3,sr=4e3,cr=76;function lr(e){if(!e)return`—`;let t=e.match(/^(\d{4})-(\d{2})-(\d{2})/);return t?`${t[3]}/${t[2]}/${t[1]}`:e}function ur(e){if(!/^\d{8}$/.test(e))return null;let t=[3,2,7,6,5,4,3,2],n=[6,7,8,9,0,1,1,2,3,4,5],r=11-e.split(``).reduce((e,n,r)=>e+Number(n)*t[r],0)%11;return String(n[r===11?0:r])}var dr=`212222.222122.222221.121223.121322.131222.122213.122312.132212.221213.221312.231212.112232.122132.122231.113222.123122.123221.223211.221132.221231.213212.223112.312131.311222.321122.321221.312212.322112.322211.212123.212321.232121.111323.131123.131321.112313.132113.132311.211313.231113.231311.112133.112331.132131.113123.113321.133121.313121.211331.231131.213113.213311.213131.311123.311321.331121.312113.312311.332111.314111.221411.431111.111224.111422.121124.121421.141122.141221.112214.112412.122114.122411.142112.142211.241211.221114.413111.241112.134111.111242.121142.121241.114212.124112.124211.411212.421112.421211.212141.214121.412121.111143.111341.131141.114113.114311.411113.411311.113141.114131.311141.411131.211412.211214.211232.2331112`.split(`.`);function fr(e){let t=[],n=104;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r)-32;i<0||i>95||(t.push(i),n+=i*(r+1))}let r=n%103,i=dr[104];for(let e of t)i+=dr[e];return i+=dr[r],i+=dr[106],i}function pr(e){return e?fr(e):``}function mr({value:e,moduleWidth:t=1.6,height:n=70}){let r=pr(e);if(!r)return null;let i=0,a=0,o=[];for(let e=0;e<r.length;e++){let s=parseInt(r[e],10)*t;e%2==0&&o.push((0,P.jsx)(`rect`,{x:i,y:0,width:s,height:n,fill:`#000`},e)),i+=s,a+=s}return(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:a,height:n,viewBox:`0 0 ${a} ${n}`,style:{display:`block`,maxWidth:`100%`,height:`auto`},children:o})}var hr={REGULAR:`Trabajadores activos y sus derechohabientes (cobertura completa).`,AGRARIO:`Trabajadores agrarios bajo el régimen especial.`,AGRARIO_DEPENDIENTE:`Derechohabiente del trabajador agrario.`,PESQUERO:`Trabajadores pesqueros independientes.`,POTESTATIVO:`Personas que no tienen seguro por su trabajo y se afilian voluntariamente.`,"+VIDA":`Seguro complementario para mayores de 65 años.`,SEGURO_INDEPENDIENTE:`Trabajadores independientes afiliados voluntariamente.`},gr={OBLIGATORIO:`Trabajador titular registrado por su empleador.`,DERECHOHABIENTE:`Familiar del titular (cónyuge, hijos, etc.).`,POTESTATIVO:`Afiliación voluntaria pagada por la propia persona.`,PENSIONISTA:`Persona jubilada que conserva el seguro.`};function _r({estado:e,titulo:t,mensaje:n,recomendacion:r,onVerificarCitt:i,onVolver:a,onIrAEstablecimiento:o,accion:s}){let c=[{id:`en_espera`,num:1,titulo:`Expediente en espera`,resumen:`Expediente recibido para trámite administrativo.`},{id:`en_revision`,num:2,titulo:`Expediente en revisión`,resumen:`Derivado para su evaluación.`},{id:`resultado`,num:3,titulo:`Resultado de la evaluación`,resumen:{observado:`Expediente observado.`,concluido:`Revisión concluida.`}[e]||`Pendiente de evaluación.`}],l=t=>e===t?!1:t===`en_espera`?[`en_revision`,`observado`,`concluido`].includes(e):t===`en_revision`&&[`observado`,`concluido`].includes(e),u=t=>t===`resultado`?[`observado`,`concluido`].includes(e):e===t;return(0,P.jsxs)(`div`,{className:`avance-dashboard`,children:[(0,P.jsx)(`style`,{children:`
        .avance-dashboard { animation: avanceEntra 0.35s ease-out both; }
        @keyframes avanceEntra { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
        .avance-pipeline { display: flex; flex-direction: column; gap: 0; margin: 18px 0 24px; position: relative; }
        /* "Camino" en vez de lista de tarjetas: cada fase dibuja su propio
           tramo de riel en un ::after que arranca debajo de su nodo (36px)
           y llega hasta el borde de abajo de la fila (bottom:0, que ya
           incluye el padding-bottom de 26px) — así el tramo alcanza el
           tope del nodo siguiente sin medir alturas en JS, y sigue
           funcionando si el texto de una fase llega a ocupar 2 líneas. */
        .avance-fase { position: relative; display: flex; align-items: flex-start; gap: 14px; padding: 4px 14px 26px 14px; border-radius: var(--r); transition: background 0.3s ease; animation: avanceFaseEntra 0.4s ease-out both; }
        .avance-fase:last-child { padding-bottom: 4px; }
        .avance-fase-activa { background: rgba(91,79,233,0.06); }
        .avance-fase:nth-child(1) { animation-delay: 0.05s; }
        .avance-fase:nth-child(2) { animation-delay: 0.15s; }
        .avance-fase:nth-child(3) { animation-delay: 0.25s; }
        @keyframes avanceFaseEntra { from { opacity: 0; transform: translateX(-12px); } to { opacity: 1; transform: none; } }
        /* "Camino tipo carretera" (elegida entre 4 variantes comparadas en
           vivo, ver el artifact de la sesión): el riel de 2px pasó a ser un
           tramo de 6px con línea central punteada blanca encima — misma
           técnica top:40px/bottom:0 de siempre (sin medir alturas en JS,
           sigue funcionando con texto de 2 líneas), solo más grueso y con
           una capa extra. El grosor es justo lo que pidió el usuario: se
           lee mejor el estado cuando el resultado es "observado", no solo
           "concluido". */
        .avance-fase:not(:last-child)::after {
          content: ""; position: absolute; top: 40px; bottom: 0; left: 29px; width: 6px;
          border-radius: 3px;
          transform-origin: top;
          animation: avanceRielCrece 0.5s cubic-bezier(.16,1,.3,1) both;
        }
        .avance-fase:not(:last-child)::before {
          content: ""; position: absolute; top: 40px; bottom: 0; left: 31.3px; width: 1.4px;
          background-image: repeating-linear-gradient(to bottom, #fff 0 5px, transparent 5px 9px);
          opacity: 0;
          animation: avanceLineaAparece 0.35s ease-out both;
        }
        .avance-fase:nth-child(1)::after { animation-delay: 0.15s; }
        .avance-fase:nth-child(2)::after { animation-delay: 0.25s; }
        .avance-fase:nth-child(1)::before { animation-delay: 0.5s; }
        .avance-fase:nth-child(2)::before { animation-delay: 0.6s; }
        @keyframes avanceRielCrece { from { transform: scaleY(0); } to { transform: scaleY(1); } }
        @keyframes avanceLineaAparece { to { opacity: 1; } }
        .avance-fase-completa::after { background: #227A4A; }
        .avance-fase-activa::after { background: linear-gradient(to bottom, var(--brand, ${er}), #E3E8EE 85%); }
        .avance-fase-pendiente::after { background: #E3E8EE; }
        .avance-nodo { position: relative; z-index: 1; width: 36px; height: 36px; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px; border: 2px solid #E3E8EE; background: #fff; color: #5B6B7D; transition: all 0.3s ease; }
        .avance-fase-activa .avance-nodo { background: var(--brand, ${er}); border-color: var(--brand, ${er}); color: #fff; animation: avancePulso 1.6s ease-in-out infinite; }
        .avance-fase-completa .avance-nodo { background: #227A4A; border-color: #227A4A; color: #fff; }
        .avance-fase-pendiente .avance-nodo { background: #F6F9FC; border-color: #E3E8EE; color: #9AA5B1; }
        @keyframes avancePulso { 0%,100% { box-shadow: 0 0 0 0 rgba(91,79,233,.35); } 50% { box-shadow: 0 0 0 8px rgba(91,79,233,0); } }
        .avance-check-trazo { stroke-dasharray: 1; stroke-dashoffset: 1; animation: avanceCheckDibuja 0.3s ease-out 0.35s both; }
        @keyframes avanceCheckDibuja { to { stroke-dashoffset: 0; } }
        .avance-fase-texto { display: flex; flex-direction: column; gap: 2px; padding-top: 7px; }
        .avance-fase-texto strong { font-size: 15px; font-weight: 700; color: #0D253D; line-height: 1.3; }
        .avance-fase-activa .avance-fase-texto strong { color: ${nr}; }
        .avance-fase-completa .avance-fase-texto strong { color: #227A4A; }
        .avance-fase-pendiente .avance-fase-texto strong { color: #9AA5B1; }
        .avance-fase-texto span { font-size: 13px; color: #5B6B7D; line-height: 1.35; }
        .avance-mensaje { background: #F6F9FC; border-radius: var(--r); padding: 16px; margin-bottom: 16px; animation: avanceEntra 0.4s ease-out 0.35s both; }
        .avance-mensaje h2 { font-size: 18px; font-weight: 700; color: ${nr}; margin: 0 0 6px; line-height: 1.3; }
        .avance-mensaje p { font-size: 15px; color: var(--body); line-height: 1.45; margin: 0 0 8px; }
        .avance-mensaje .avance-recomendacion { font-size: 14px; color: #5B6B7D; line-height: 1.4; margin-top: 10px; padding-top: 10px; border-top: 1px solid #E3E8EE; }
        @media (prefers-reduced-motion: reduce) {
          .avance-dashboard, .avance-fase, .avance-mensaje, .avance-fase-activa .avance-nodo { animation: none; }
          .avance-fase::after { animation: none; }
          .avance-fase::before { animation: none; opacity: 1; }
          .avance-check-trazo { animation: none; stroke-dashoffset: 0; }
        }
      `}),(0,P.jsx)(`div`,{className:`avance-pipeline`,"aria-label":`Etapas del trámite`,children:c.map(e=>{let t=u(e.id)?`avance-fase-activa`:l(e.id)?`avance-fase-completa`:`avance-fase-pendiente`;return(0,P.jsxs)(`div`,{className:`avance-fase ${t}`,"aria-current":u(e.id)?`step`:void 0,children:[(0,P.jsx)(`div`,{className:`avance-nodo`,children:l(e.id)?(0,P.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.4`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:(0,P.jsx)(`path`,{className:`avance-check-trazo`,d:`m4.5 12.5 5 5 10-11`,pathLength:`1`})}):e.num}),(0,P.jsxs)(`div`,{className:`avance-fase-texto`,children:[(0,P.jsx)(`strong`,{children:e.titulo}),(0,P.jsx)(`span`,{children:e.resumen})]})]},e.id)})}),(0,P.jsxs)(`div`,{className:`avance-mensaje`,children:[(0,P.jsx)(`h2`,{children:t}),(0,P.jsx)(`p`,{children:n}),r&&(0,P.jsx)(`p`,{className:`avance-recomendacion`,children:r})]}),s===`verificar_citt`&&(0,P.jsxs)(`button`,{className:`pisa`,onClick:i,style:{display:`flex`,alignItems:`center`,justifyContent:`center`,gap:10,background:Kn,color:`white`,border:`none`,borderRadius:`var(--r)`,padding:`16px 0`,width:`100%`,fontFamily:`inherit`,fontSize:18,fontWeight:700,cursor:`pointer`,boxShadow:G,marginBottom:12},children:[(0,P.jsx)(F,{name:`medico`,size:22}),` Verificar mi CITT`]}),s===`ir_al_establecimiento`&&(0,P.jsxs)(`button`,{className:`pisa`,onClick:o||a,style:{display:`flex`,alignItems:`center`,justifyContent:`center`,gap:10,background:er,color:`white`,border:`none`,borderRadius:`var(--r)`,padding:`16px 0`,width:`100%`,fontFamily:`inherit`,fontSize:18,fontWeight:700,cursor:`pointer`,boxShadow:G,marginBottom:12},children:[(0,P.jsx)(F,{name:`hospital`,size:22}),` Entendido, ir al establecimiento`]}),(0,P.jsx)(`button`,{className:`btn-volver`,onClick:a,children:`← Volver al inicio`})]})}function vr(){let[e]=(0,o.useState)(zn),[t,n]=(0,o.useState)(e.pantalla),[r,i]=(0,o.useState)(e.qrMotivo),[a,s]=(0,o.useState)(null),[c,l]=(0,o.useState)(null),u=c||st(a?.nombre),[d,f]=(0,o.useState)(`identidad`),[p,m]=(0,o.useState)(0),[h,g]=(0,o.useState)(!1);(0,o.useEffect)(()=>{nt()},[]);let[_,v]=(0,o.useState)(``),[y,b]=(0,o.useState)(72),[x,S]=(0,o.useState)(``),[C,w]=(0,o.useState)(``),[T,E]=(0,o.useState)(!1),[D,ee]=(0,o.useState)(null),[O,te]=(0,o.useState)(()=>{try{return localStorage.getItem(`adminAvanceToken`)||``}catch{return``}}),[k,ne]=(0,o.useState)(`1`),[re,ie]=(0,o.useState)(``),[ae,oe]=(0,o.useState)(``),[A,se]=(0,o.useState)(`en_espera`),[ce,le]=(0,o.useState)(!1),[ue,de]=(0,o.useState)(``),[fe,pe]=(0,o.useState)(``),[j,me]=(0,o.useState)(null),[M,he]=(0,o.useState)(()=>{try{return localStorage.getItem(`adminEstablecimientosToken`)||``}catch{return``}}),[ge,N]=(0,o.useState)(``),[_e,ve]=(0,o.useState)(``),[ye,be]=(0,o.useState)(``),[xe,Se]=(0,o.useState)(``),[Ce,we]=(0,o.useState)(!1),[Te,Ee]=(0,o.useState)(``),[De,Oe]=(0,o.useState)(``),[Ae,Ie]=(0,o.useState)(!1),[R,Le]=(0,o.useState)(null),[Re,ze]=(0,o.useState)(!1),[Be,Ve]=(0,o.useState)(``),[He,Ue]=(0,o.useState)(!1),[We,Ke]=(0,o.useState)(!1),[qe,Je]=(0,o.useState)(!1),[Ye,Xe]=(0,o.useState)(``),[Ze,Qe]=(0,o.useState)(0),[$e,et]=(0,o.useState)(0),[z,tt]=(0,o.useState)(``),[rt,it]=(0,o.useState)(null),[ot,ct]=(0,o.useState)(``),[ut,dt]=(0,o.useState)(``),[pt,mt]=(0,o.useState)(``),[ht,_t]=(0,o.useState)([]),[vt,B]=(0,o.useState)(null),[yt,bt]=(0,o.useState)(!1),[xt,St]=(0,o.useState)(!1),[Ct,wt]=(0,o.useState)(``),[Tt,Et]=(0,o.useState)(``),[Ot,At]=(0,o.useState)(!1),[jt,Mt]=(0,o.useState)(!1),[Nt,Pt]=(0,o.useState)(``),[Ft,It]=(0,o.useState)(``),[Lt,Rt]=(0,o.useState)(``),[V,zt]=(0,o.useState)(``),[Bt,Vt]=(0,o.useState)(``),[Ut,Wt]=(0,o.useState)(``),[Gt,Kt]=(0,o.useState)(``),[Jt,H]=(0,o.useState)(``),[U,Yt]=(0,o.useState)(``),[Xt,Zt]=(0,o.useState)(!1),[Qt,$t]=(0,o.useState)(``),[en,tn]=(0,o.useState)(``),[nn,rn]=(0,o.useState)(()=>kt(window.location.search)),an=e=>{rn(e);let t=new URL(window.location.href);t.searchParams.set(`seccion`,e),window.history.replaceState(null,``,t)},on=(0,o.useRef)(null),sn=(0,o.useRef)(null),[W]=(0,o.useState)(()=>{try{return(new URLSearchParams(window.location.search).get(`admin_establecimiento`)||``).trim().toLowerCase()||Nn(window.location.pathname)||``}catch{return``}}),[cn,ln]=(0,o.useState)(()=>kt(window.location.search)),dn=e=>{ln(e);let t=new URL(window.location.href);t.searchParams.set(`seccion`,e),window.history.replaceState(null,``,t)},[fn,pn]=(0,o.useState)(()=>{try{return localStorage.getItem(`adminRepPassword:${W}`)||``}catch{return``}}),[mn,hn]=(0,o.useState)(``),[vn,wn]=(0,o.useState)(null),[Tn,En]=(0,o.useState)(``),[Dn,On]=(0,o.useState)(``),[kn,Mn]=(0,o.useState)(``),[Pn,Fn]=(0,o.useState)(``),[In,dr]=(0,o.useState)(``),[fr,pr]=(0,o.useState)(``),[vr,yr]=(0,o.useState)(``),[br,xr]=(0,o.useState)(``),[Sr,Cr]=(0,o.useState)(``),[wr,Tr]=(0,o.useState)(``),[Er,Dr]=(0,o.useState)(``),[Or,kr]=(0,o.useState)(``),[Ar,jr]=(0,o.useState)(!1),[Mr,Nr]=(0,o.useState)(``),[Pr,Fr]=(0,o.useState)(``),[Ir,Lr]=(0,o.useState)(!1),[Rr,zr]=(0,o.useState)([]),[Br,Vr]=(0,o.useState)(null),[Hr,Ur]=(0,o.useState)(!1),[Wr,Gr]=(0,o.useState)(``),[Kr,qr]=(0,o.useState)(``),[Jr,Yr]=(0,o.useState)(!1),[Xr,Zr]=(0,o.useState)(!1),[Qr,$r]=(0,o.useState)(!1),[ei,ti]=(0,o.useState)(``),[ni,ri]=(0,o.useState)(!1),[ii,ai]=(0,o.useState)(!1),[oi,si]=(0,o.useState)(!1),[ci,li]=(0,o.useState)(``),[ui,di]=(0,o.useState)(0),[fi,pi]=(0,o.useState)(0),[mi,hi]=(0,o.useState)(!1),[gi,_i]=(0,o.useState)(!1),[vi,yi]=(0,o.useState)(!1),[bi,xi]=(0,o.useState)(``),[Si,Ci]=(0,o.useState)(0),[wi,Ti]=(0,o.useState)(0),[Ei,Di]=(0,o.useState)(!1),[Oi,ki]=(0,o.useState)(null),[Ai,ji]=(0,o.useState)(null),[Mi,Ni]=(0,o.useState)({}),[Pi,Fi]=(0,o.useState)(!0),[Ii,Li]=(0,o.useState)(!1),[Ri,zi]=(0,o.useState)(null),[K,Bi]=(0,o.useState)({tipoDoc:`1`,numDoc:``,digitoVerif:``,fecNacimientoDD:``,fecNacimientoMM:``,fecNacimientoAAAA:``}),[Vi,Hi]=(0,o.useState)(!1),[Ui,Wi]=(0,o.useState)(!1),[Gi,Ki]=(0,o.useState)(!1),[qi,Ji]=(0,o.useState)(``),[Yi,Xi]=(0,o.useState)(null),[Zi,Qi]=(0,o.useState)(!1),q=(0,o.useRef)(0),[$i,ea]=(0,o.useState)(0),ta=(0,o.useRef)(0),[na,ra]=(0,o.useState)(!1),[ia,aa]=(0,o.useState)(null),oa=(0,o.useRef)(null),sa=(0,o.useRef)(null),ca=(0,o.useRef)(null),la=(0,o.useRef)(null),[ua,da]=(0,o.useState)(!1),[fa,pa]=(0,o.useState)(!1),[,ma]=(0,o.useState)(!1),[,ha]=(0,o.useState)(``),[ga,_a]=(0,o.useState)(null),[va,ya]=(0,o.useState)(!1),[,ba]=(0,o.useState)(!1),[,xa]=(0,o.useState)(``),[Sa,Ca]=(0,o.useState)(null),[J,wa]=(0,o.useState)(null),[Ta,Ea]=(0,o.useState)(!1),[Da,Oa]=(0,o.useState)(!1),[,ka]=(0,o.useState)(!1),[,Aa]=(0,o.useState)(``),[ja,Ma]=(0,o.useState)(null),[Na,Pa]=(0,o.useState)(``),[Y,Fa]=(0,o.useState)(null),[,Ia]=(0,o.useState)(!1),[La,Ra]=(0,o.useState)(``),X=()=>{`speechSynthesis`in window&&window.speechSynthesis.cancel()},za=e=>{let t=or-(Date.now()-ta.current);t<=0?e():setTimeout(e,t)};(0,o.useEffect)(()=>{window.scrollTo(0,0)},[t,Ai,Ri]),(0,o.useEffect)(()=>{if(t!==`admin_establecimientos`&&t!==`admin_establecimiento`||document.getElementById(`fuente-acceso-admin`))return;let e=document.createElement(`link`);e.id=`fuente-acceso-admin`,e.rel=`stylesheet`,e.href=`https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&display=swap`,document.head.appendChild(e)},[t]),(0,o.useEffect)(()=>{if(e.pantalla!==`verificando_qr`)return;let t=new URLSearchParams(window.location.search),r=t.get(`t`);ta.current=Date.now();let a=t.get(`estab`)||``;fetch(`/api/validar-qr?t=${encodeURIComponent(r)}${a?`&estab=${encodeURIComponent(a)}`:``}`).then(e=>e.json()).then(e=>{za(()=>{e.ok?(e.establecimientoSlug&&(l(e.establecimientoSlug),s({nombre:e.establecimientoSlug}),lt(e.establecimientoSlug).then(e=>{e.ok&&e.existe&&e.nombre&&s({nombre:e.nombre})}).catch(()=>{})),n(`splash`)):(i(e.motivo||`invalido`),n(`qr_invalido`))})}).catch(()=>{za(()=>{i(`sin_conexion`),n(`qr_invalido`)})})},[e.pantalla]),(0,o.useEffect)(()=>{if(t!==`splash`)return;let e=requestAnimationFrame(()=>m(100)),n=setTimeout(()=>g(!0),sr);return()=>{cancelAnimationFrame(e),clearTimeout(n)}},[t]),(0,o.useEffect)(()=>{X()},[t,Ai]),(0,o.useEffect)(()=>{Ge(`pantalla`,{paso:t})},[t]);let Ba=async e=>{if(e){ti(``),$r(!0);try{let t=await fetch(`/api/admin/establecimiento-info`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({slug:W,password:e,accion:`listar_anuncios`})}),n=await t.json();if(!t.ok||!n.ok){ti(n.error||`No se pudo verificar el acceso.`),Zr(!1);return}zr(n.anuncios||[]),Vr(n.popup||null),Zr(!0);try{localStorage.setItem(`adminRepPassword:${W}`,e)}catch{}}catch{ti(`No hay conexión o el servicio no responde.`),Zr(!1)}finally{$r(!1)}}};(0,o.useEffect)(()=>{if(!(Ze>0||ui>0||Si>0))return;let e=setInterval(()=>{Qe(e=>Math.max(0,e-1)),di(e=>Math.max(0,e-1)),Ci(e=>Math.max(0,e-1))},1e3);return()=>clearInterval(e)},[Ze,ui,Si]);let Va=async()=>{Xe(``),Je(!0);try{let e=await fetch(`/api/admin/establecimiento-editar-admin`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({token:M,accion:`otp_enviar`})}),t=await e.json();if(!e.ok||!t.ok){Xe(t.error||`No se pudo enviar el código.`);return}Ue(!0),Qe(45),et(e=>e+1)}catch{Xe(`No hay conexión o el servicio no responde.`)}finally{Je(!1)}},Ha=async e=>{Xe(``),Je(!0);try{let t=await fetch(`/api/admin/establecimiento-editar-admin`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({token:M,accion:`otp_verificar`,codigo:e})}),n=await t.json();if(!t.ok||!n.ok){Xe(n.error||`Código incorrecto.`);return}Ke(!0)}catch{Xe(`No hay conexión o el servicio no responde.`)}finally{Je(!1)}},Ua=async()=>{li(``),si(!0);try{let e=await fetch(`/api/admin/establecimiento-info`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({slug:W,password:fn,accion:`otp_enviar`})}),t=await e.json();if(!e.ok||!t.ok){li(t.error||`No se pudo enviar el código.`);return}ri(!0),di(45),pi(e=>e+1)}catch{li(`No hay conexión o el servicio no responde.`)}finally{si(!1)}},Wa=async e=>{li(``),si(!0);try{let t=await fetch(`/api/admin/establecimiento-info`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({slug:W,password:fn,accion:`otp_verificar`,codigo:e})}),n=await t.json();if(!t.ok||!n.ok){li(n.error||`Código incorrecto.`);return}ai(!0)}catch{li(`No hay conexión o el servicio no responde.`)}finally{si(!1)}},Ga=async()=>{xi(``),yi(!0);try{let e=await fetch(`/api/admin/establecimiento-info`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({slug:W,accion:`recuperar_enviar`})}),t=await e.json();if(!e.ok||!t.ok){xi(t.error||`No se pudo enviar el código.`);return}_i(!0),Ci(45),Ti(e=>e+1)}catch{xi(`No hay conexión o el servicio no responde.`)}finally{yi(!1)}},Ka=async(e,t)=>{xi(``),yi(!0);try{let n=await fetch(`/api/admin/establecimiento-info`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({slug:W,accion:`recuperar_verificar`,codigo:e,passwordNueva:t})}),r=await n.json();if(!n.ok||!r.ok){xi(r.error||`Código incorrecto.`);return}Di(!0),pn(t),setTimeout(()=>{hi(!1),Di(!1),Ba(t)},1200)}catch{xi(`No hay conexión o el servicio no responde.`)}finally{yi(!1)}};(0,o.useEffect)(()=>{R===null||He||We||Promise.resolve().then(()=>Va())},[R,He,We]),(0,o.useEffect)(()=>{!Xr||ni||ii||Promise.resolve().then(()=>Ua())},[Xr,ni,ii]),(0,o.useEffect)(()=>{t===`admin_establecimiento`&&W&&(fetch(`/api/establecimiento-info?slug=${encodeURIComponent(W)}`).then(e=>e.json()).then(e=>{e.ok&&(hn(e.nombre||``),En(e.horario||``),On(e.telefono||``),Mn(e.aviso||``),Fn(e.estribillo||``),dr(e.estribilloDesde||``),pr(e.estribilloHasta||``),yr(e.correo||``),xr(e.direccion||``),Cr(e.facebook||``),Tr(e.tiktok||``),wn(e.existe===!0))}).catch(()=>{}),fn&&Promise.resolve().then(()=>Ba(fn)))},[t,W]);let Z=Oi?je[Oi]:null,qa=Z?Object.fromEntries(Z.pasos.map(e=>[e.id,e])):{},Q=Ai?qa[Ai]:null,Ja=Oi===`canje`&&(t===`flujo`||t===`resumen`),Ya=Object.keys(Mi).length,Xa=Z?Z.pasos.filter(e=>e.tipo===`sino`||e.tipo===`opciones`).length:1,Za=e=>{Ge(`tramite_iniciado`,{tramite:e}),ki(e),Ni({}),ji(je[e].pasos[0].id),n(`flujo`),Fi(!0)},Qa=e=>{let t={...Mi,[Ai]:e};Ni(t);let r=Q.next(e,t);Fi(!1),setTimeout(()=>{r===`FIN`?(Li(!0),n(`resumen`)):r===`FIN_INCOMPLETO`?(Li(!1),n(`resumen`)):ji(r),Fi(!0)},280)},$=()=>{X(),n(`inicio`),ki(null),ji(null),Ni({}),Fi(!0),da(!1),pa(!1),ma(!1),ha(``),_a(null),ya(!1),ba(!1),xa(``),Ca(null),wa(null),Ea(!1),Oa(!1),ka(!1),Aa(``),Ma(null)},$a=()=>{X(),q.current+=1,ea(e=>e+1),Bi({tipoDoc:`1`,numDoc:``,digitoVerif:``,fecNacimientoDD:``,fecNacimientoMM:``,fecNacimientoAAAA:``}),Hi(!1),Wi(!1),Ki(!1),Ji(``),Xi(null),$(),n(`identidad`)};(0,o.useEffect)(()=>{if(t===`identidad`&&!Yi)return;let e,n,r=()=>{clearTimeout(e),clearTimeout(n)},i=()=>{r(),Qi(!1),e=setTimeout(()=>Qi(!0),24e4),n=setTimeout(()=>{$a(),Qi(!1)},3e5)},a=[`click`,`touchstart`,`keydown`,`scroll`];return a.forEach(e=>window.addEventListener(e,i)),i(),()=>{r(),a.forEach(e=>window.removeEventListener(e,i))}},[t,Yi]);let eo=e=>{e?.current&&(e.current.focus(),e.current.select())};(0,o.useEffect)(()=>{Ui&&eo(oa)},[Ui]);let to=e=>new Promise((t,n)=>{let r=new Image;r.onload=()=>{let e=r.width,i=document.createElement(`canvas`);i.width=e+80,i.height=40+e+24+64+40;let a=i.getContext(`2d`);a.fillStyle=`#FFFFFF`,a.fillRect(0,0,i.width,i.height),a.drawImage(r,40,40,e,e),a.fillStyle=`#0D253D`,a.font=`bold 56px system-ui, sans-serif`,a.textAlign=`center`,a.textBaseline=`middle`,a.fillText(`Asistente`,i.width/2,40+e+24+32),i.toBlob(e=>{if(!e){n(Error(`No se pudo generar la imagen`));return}t(URL.createObjectURL(e))},`image/png`)},r.onerror=n,r.src=e}),no=async()=>{w(``),E(!0),ee(null);try{let e=await fetch(`/api/generar-qr`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({password:_,duracionHoras:y,slug:x.trim().toLowerCase()||void 0})}),t=await e.json();if(!e.ok||!t.ok){w(t.error||`No se pudo generar el link.`),E(!1);return}let n=await ke.toDataURL(t.url,{width:800,margin:2}),r=await to(n);ee({url:t.url,expiraEn:t.expiraEn,qrImprimible:r}),E(!1)}catch{w(`No se pudo conectar con el servidor. Intenta de nuevo.`),E(!1)}},ro=()=>{X(),n(`inicio`)},io=()=>{X(),n(`formulario`)},ao=()=>{X(),n(`seguro_terminos`),pa(!1)},oo=(e,t)=>{za(()=>{t&&t(),aa(e),ra(!0)})},so=()=>{ia&&(X(),ra(!1),n(ia),aa(null))},co=async()=>{let e=q.current;ha(``),ma(!0),ta.current=Date.now(),ra(!1),aa(null),n(`seguro_cargando`);let{tipoDoc:t,numDoc:r,digitoVerif:i,fecNacimientoDD:a,fecNacimientoMM:o,fecNacimientoAAAA:s}=K,c=`${a.padStart(2,`0`)}/${o.padStart(2,`0`)}/${s}`;try{let n=await fetch(`/api/consultar-seguro`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({codTipDoc:t,numDoc:r.trim(),digitoVerif:t===`1`?i:``,fecNacimiento:c})}),a=await n.json();if(q.current!==e)return;if(!n.ok||!a.ok){let e=a.error||`No se pudo verificar tu seguro. Revisa tus datos e intenta de nuevo.`,t=n.status===429;oo(`identidad`,()=>{Ji(e),Xi(`seguro`),Wi(!t),ma(!1)});return}oo(`seguro_resultado`,()=>{_a(a),ma(!1)})}catch{if(q.current!==e)return;oo(`identidad`,()=>{Ji(`No hay conexión a internet o el servicio de tu seguro no responde. Intenta de nuevo en unos minutos.`),Xi(`seguro`),ma(!1)})}},lo=()=>{X(),xa(``),Ca(null),wa(null),n(`citt_terminos`)},uo=async()=>{let e=q.current;xa(``),ba(!0),ta.current=Date.now(),ra(!1),aa(null),n(`citt_cargando`);let{tipoDoc:t,numDoc:r,digitoVerif:i,fecNacimientoDD:a,fecNacimientoMM:o,fecNacimientoAAAA:s}=K,c=`${a.padStart(2,`0`)}/${o.padStart(2,`0`)}/${s}`;try{let n=await fetch(`/api/consultar-citt`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({tipoDoc:t,numDoc:r,digitoVerif:t===`1`?i:``,fecNacimiento:c})}),a=await n.json();if(q.current!==e)return;if(!n.ok||!a.ok){let e=a.error||`No se pudo verificar tus datos. Revísalos e intenta de nuevo.`,t=n.status===429;oo(`identidad`,()=>{Ji(e),Xi(`citt`),Wi(!t),ba(!1)});return}oo(`citt_resultado`,()=>{Ca(a),ba(!1)})}catch{if(q.current!==e)return;oo(`identidad`,()=>{Ji(`No hay conexión a internet o el servicio de tu seguro no responde. Intenta de nuevo en unos minutos.`),Xi(`citt`),ba(!1)})}},fo=()=>{X(),n(`lactancia_terminos`)},po=async()=>{let e=q.current;Aa(``),ka(!0),ta.current=Date.now(),ra(!1),aa(null),n(`lactancia_cargando`);let{tipoDoc:t,numDoc:r,digitoVerif:i,fecNacimientoDD:a,fecNacimientoMM:o,fecNacimientoAAAA:s}=K,c=`${a.padStart(2,`0`)}/${o.padStart(2,`0`)}/${s}`;try{let n=await fetch(`/api/consultar-lactancia`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({tipoDoc:t,numDoc:r.trim(),digitoVerif:t===`1`?i:``,fecNacimiento:c})}),a=await n.json();if(q.current!==e)return;if(!n.ok||!a.ok){let e=a.error||`No se pudo verificar tu subsidio. Revisa tus datos e intenta de nuevo.`,t=n.status===429;oo(`identidad`,()=>{Ji(e),Xi(`lactancia`),Wi(!t),ka(!1)});return}oo(`lactancia_resultado`,()=>{Ma(a),ka(!1)})}catch{if(q.current!==e)return;oo(`identidad`,()=>{Ji(`No hay conexión a internet o el servicio de tu seguro no responde. Intenta de nuevo en unos minutos.`),Xi(`lactancia`),ka(!1)})}},mo=()=>{X(),Pa(``),Fa(null),Ra(``),n(`avance_tramite`)},ho=async()=>{let e=q.current;Ra(``),Ia(!0),ta.current=Date.now(),ra(!1),aa(null),n(`avance_cargando`);let{tipoDoc:t,numDoc:r,digitoVerif:i,fecNacimientoDD:a,fecNacimientoMM:o,fecNacimientoAAAA:s}=K,c=`${a.padStart(2,`0`)}/${o.padStart(2,`0`)}/${s}`,l=u;try{let n=await fetch(`/api/avance-tramite`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({tipoDoc:t,numDoc:r.trim(),digitoVerif:t===`1`?i:``,fecNacimiento:c,nroTramite:Na.trim(),establecimientoSlug:l||void 0})}),a=await n.json();if(q.current!==e)return;if(!n.ok||!a.ok){let e=a.error||`No se pudo consultar el avance. Revisa tus datos e intenta de nuevo.`;oo(`avance_tramite`,()=>{Ra(e),Ia(!1)});return}oo(`avance_resultado`,()=>{Fa(a),Ia(!1)})}catch{if(q.current!==e)return;oo(`avance_tramite`,()=>{Ra(`No hay conexión a internet o el servicio no responde. Intenta de nuevo en unos minutos.`),Ia(!1)})}},go=e=>{te(e);try{e?localStorage.setItem(`adminAvanceToken`,e):localStorage.removeItem(`adminAvanceToken`)}catch{}},_o=async()=>{de(``),pe(``),me(null),le(!0);try{let e=await fetch(`/api/admin/avance-tramite`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({token:O,tipoDoc:k,numDoc:re.trim()})}),t=await e.json();!e.ok||!t.ok?de(t.error||`No se pudo consultar el expediente.`):t.modo===`consulta`&&(t.existe?(me({estado:t.estado,nroTramite:t.nroTramite,actualizadoEn:t.actualizadoEn,creadoEn:t.creadoEn,expiresAt:t.expiresAt}),se(t.estado||`en_espera`),pe(`Estado actual: ${t.estado||`sin estado`}.`)):pe(`No hay registro previo. Al guardar se creará el expediente en la fase seleccionada.`))}catch{de(`No hay conexión o el servicio no responde.`)}finally{le(!1)}},vo=async()=>{de(``),pe(``),le(!0);try{let e=await fetch(`/api/admin/avance-tramite`,{method:`PUT`,headers:{"Content-Type":`application/json`},body:JSON.stringify({token:O,tipoDoc:k,numDoc:re.trim(),estado:A,nroTramite:ae.trim()||null})}),t=await e.json();!e.ok||!t.ok?de(t.error||`No se pudo actualizar el expediente.`):(me({estado:t.estado,nroTramite:t.nroTramite,actualizadoEn:t.actualizadoEn,creadoEn:t.creadoEn,expiresAt:t.expiresAt}),pe(`Expediente ${t.numDoc} actualizado a "${t.estado}".`))}catch{de(`No hay conexión o el servicio no responde.`)}finally{le(!1)}},yo=e=>{he(e);try{e?localStorage.setItem(`adminEstablecimientosToken`,e):localStorage.removeItem(`adminEstablecimientosToken`)}catch{}},bo=async e=>{Ve(``),ze(!0);try{let t=await fetch(`/api/admin/listar-establecimientos`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({token:e})}),n=await t.json();!t.ok||!n.ok?Ve(n.error||`No se pudo cargar la lista.`):Le(n.establecimientos)}catch{Ve(`No hay conexión o el servicio no responde.`)}finally{ze(!1)}},xo=async()=>{Ee(``),Oe(``),we(!0);try{let e=await fetch(`/api/admin/crear-establecimiento`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({token:M,slug:ge.trim().toLowerCase(),nombre:_e.trim(),password:ye,correoAcceso:xe.trim().toLowerCase()})}),t=await e.json();!e.ok||!t.ok?Ee(t.error||`No se pudo crear el acceso.`):(Oe(`Acceso creado para "${t.slug}". Compárte este link con el representante: ${window.location.origin}/${t.slug}`),Ie(!0),setTimeout(()=>Ie(!1),1300),bo(M))}catch{Ee(`No hay conexión o el servicio no responde.`)}finally{we(!1)}};(0,o.useEffect)(()=>{t===`admin_establecimientos`&&M&&fetch(`/api/admin/listar-establecimientos`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({token:M})}).then(e=>e.json()).then(e=>{e.ok&&Le(e.establecimientos)}).catch(()=>{})},[t]),(0,o.useEffect)(()=>{let e=()=>{let e=new URLSearchParams(window.location.search).get(`estab`)||null;it(e),rn(kt(window.location.search)),e||Yt(``)};return window.addEventListener(`popstate`,e),()=>window.removeEventListener(`popstate`,e)},[]);let So=(()=>{let e=z.trim().toLowerCase();return e?(R||[]).filter(t=>t.nombre.toLowerCase().includes(e)||t.slug.toLowerCase().includes(e)):R})(),Co=async(e,t=Dt[0].id)=>{on.current=e,it(e),rn(t);let n=new URL(window.location.href);n.searchParams.set(`estab`,e),n.searchParams.set(`seccion`,t),window.history.pushState({estab:e},``,n),wt(``),Et(``),Mt(!1),ct(``),dt(``),mt(``),_t([]),B(null),Pt(``),It(``),Rt(``),zt(``),Wt(``),Kt(``),H(``),Vt(R?.find(t=>t.slug===e)?.correoAcceso||``),$t(``),tn(``),Yt(``),bt(!0);try{let t=await(await fetch(`/api/establecimiento-info?slug=${encodeURIComponent(e)}`)).json();if(on.current!==e)return;t.ok&&t.existe?(ct(t.horario||``),dt(t.telefono||``),mt(t.aviso||``),Pt(t.estribillo||``),It(t.estribilloDesde||``),Rt(t.estribilloHasta||``),zt(t.correo||``),Wt(t.direccion||``),Kt(t.facebook||``),H(t.tiktok||``)):(wt(`No se pudo cargar la información actual. No guardes hasta que puedas verla.`),Mt(!0))}catch{if(on.current!==e)return;wt(`No se pudo cargar la información actual. No guardes hasta que puedas verla.`),Mt(!0)}finally{on.current===e&&bt(!1)}try{let t=await(await fetch(`/api/admin/establecimiento-editar-admin`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({token:M,slug:e,accion:`listar_anuncios`})})).json();if(on.current!==e)return;t.ok&&(_t(t.anuncios||[]),B(t.popup||null))}catch{}},wo=()=>{window.history.back()};(0,o.useEffect)(()=>{if(t!==`admin_establecimientos`)return;let e=new URLSearchParams(window.location.search).get(`estab`);if(!e)return;sn.current={slug:e,seccion:kt(window.location.search)};let n=new URL(window.location.href);n.searchParams.delete(`estab`),n.searchParams.delete(`seccion`),window.history.replaceState(null,``,n)},[t]),(0,o.useEffect)(()=>{if(t!==`admin_establecimientos`||!M)return;let e=sn.current;e&&(sn.current=null,Promise.resolve().then(()=>Co(e.slug,e.seccion)),Promise.resolve().then(()=>bo(M)))},[t,M]);let To=async()=>{wt(``),Et(``),St(!0);try{let e=await fetch(`/api/admin/establecimiento-editar-admin`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({token:M,slug:rt,horario:ot.trim(),telefono:ut.trim(),aviso:pt.trim(),estribillo:Nt.trim(),estribilloDesde:Ft.trim(),estribilloHasta:Lt.trim(),correo:V.trim(),direccion:Ut.trim(),facebook:Gt.trim(),tiktok:Jt.trim(),correoAcceso:Bt.trim().toLowerCase()})}),t=await e.json();!e.ok||!t.ok?wt(t.error||`No se pudo guardar.`):(Et(`Guardado.`),At(!0),setTimeout(()=>At(!1),1300),bo(M))}catch{wt(`No hay conexión o el servicio no responde.`)}finally{St(!1)}},Eo=async e=>{$t(``),tn(``),Zt(!0);try{let t=await fetch(`/api/admin/establecimiento-editar-admin`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({token:M,slug:e,accion:`resetear_password`,passwordNueva:U})}),n=await t.json();!t.ok||!n.ok?$t(n.error||`No se pudo resetear la contraseña.`):(tn(`Contraseña actualizada.`),Yt(``))}catch{$t(`No hay conexión o el servicio no responde.`)}finally{Zt(!1)}},Do=async e=>{$t(``),tn(``),Zt(!0);try{let t=await fetch(`/api/admin/establecimiento-editar-admin`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({token:M,slug:e,accion:`revocar_acceso`})}),n=await t.json();!t.ok||!n.ok?$t(n.error||`No se pudo revocar el acceso.`):(tn(`Acceso revocado.`),bo(M))}catch{$t(`No hay conexión o el servicio no responde.`)}finally{Zt(!1)}},Oo=async e=>{$t(``),tn(``),Zt(!0);try{let t=await fetch(`/api/admin/establecimiento-editar-admin`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({token:M,slug:e,accion:`reactivar_acceso`,passwordNueva:U})}),n=await t.json();!t.ok||!n.ok?$t(n.error||`No se pudo reactivar el acceso.`):(tn(`Acceso reactivado.`),Yt(``),bo(M))}catch{$t(`No hay conexión o el servicio no responde.`)}finally{Zt(!1)}},ko=async()=>{Gr(``),qr(``),Ur(!0);try{let e=await fetch(`/api/admin/establecimiento-info`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({slug:W,password:fn,horario:Tn.trim(),telefono:Dn.trim(),aviso:kn.trim(),estribillo:Pn.trim(),estribilloDesde:In.trim(),estribilloHasta:fr.trim(),correo:vr.trim(),direccion:br.trim(),facebook:Sr.trim(),tiktok:wr.trim()})}),t=await e.json();if(!e.ok||!t.ok)Gr(t.error||`No se pudo guardar.`);else{try{localStorage.setItem(`adminRepPassword:${W}`,fn)}catch{}qr(`Guardado. Los cambios ya se ven en la app.`),Yr(!0),setTimeout(()=>Yr(!1),1300)}}catch{Gr(`No hay conexión o el servicio no responde.`)}finally{Ur(!1)}},Ao=async()=>{Nr(``),Fr(``),jr(!0);try{let e=await fetch(`/api/admin/establecimiento-info`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({slug:W,password:Er,accion:`cambiar_password`,passwordNueva:Or})}),t=await e.json();if(!e.ok||!t.ok)Nr(t.error||`No se pudo cambiar la contraseña.`);else{let e=Or;Fr(`Contraseña actualizada.`),Lr(!0),setTimeout(()=>Lr(!1),1300),Dr(``),kr(``),pn(e);try{localStorage.setItem(`adminRepPassword:${W}`,e)}catch{}}}catch{Nr(`No hay conexión o el servicio no responde.`)}finally{jr(!1)}},jo=!K.numDoc||K.numDoc.trim().length<7||K.tipoDoc===`1`&&(!K.digitoVerif||K.digitoVerif.length!==1)||!K.fecNacimientoDD||!K.fecNacimientoMM||!K.fecNacimientoAAAA,Mo=(()=>{if(!K.fecNacimientoDD||!K.fecNacimientoMM||K.fecNacimientoAAAA.length!==4)return!1;let e=parseInt(K.fecNacimientoDD,10),t=parseInt(K.fecNacimientoMM,10),n=parseInt(K.fecNacimientoAAAA,10);if(e<1||e>31||t<1||t>12||n<1900||n>Rn)return!0;let r=new Date(n,t-1,e);return r.getDate()!==e||r.getMonth()!==t-1||r.getFullYear()!==n||r.getTime()>Ln})(),No=jo||Mo;return(0,P.jsxs)(`div`,{className:`app`,style:{fontFamily:`'Inter', system-ui, 'Segoe UI', sans-serif`},children:[(0,P.jsx)(`style`,{children:`
        /* La tipografía ya no se pide desde acá: un @import dentro de este
           bloque solo se descubre cuando React lo inyecta, o sea después de
           bajar y ejecutar todo el JS. Ahora va como <link> en index.html, que
           el navegador lee de entrada. Los pesos disponibles son 400 a 800.
           (400 y 500 entran para poder tener cuerpo de texto de verdad: antes
           el más liviano era 500 y por eso todo terminaba en 700-900.) */

        /* ── El sistema "carpeta de trámites", ahora también acá ────────────
           Estos tokens estaban solo dentro del bloque de la landing, así que
           el flujo guiado —que es la razón de ser del sitio— seguía en el
           sistema viejo: fondo crema, banda granate llena y esquinas de 16px.
           Al pasar de la portada al asistente cambiaba el producto entero.

           Se declaran en :root para que los estilos en línea de las pantallas
           puedan pedirlos con var(): son 3000 lineas de style={{}} y ese es el
           unico modo de que compartan una fuente de verdad con contenido.css.

           Los mismos valores que public/contenido.css y que .landing. Si se
           toca uno, se tocan los tres. */
        :root {
          --manila: #FFFFFF;      /* carton claro: el fondo de la pagina */
          --manila-2: #F6F9FC;    /* la hoja de abajo, se ve por el doblez */
          --sheet: #F6F9FC;       /* la hoja */
          --line: #E3E8EE;        /* filete de papel */
          --rule: #A8C3DE;        /* filete fuerte */
          --carton: #0D253D;      /* carton prensado: pie y barras */
          --carton-txt: #F6F9FC;
          --carton-mute: #A8C3DE;

          /* Tinta un punto mas oscura que la de la version crema: sobre manila
             hace falta para que el cuerpo se mantenga sobre 7:1. */
          --ink: #0D253D;
          --body: #33475B;
          --mute: #5B6B7D;
          /* --mute (5.46:1) migró de un valor que pasaba 7:1. Como TEXTO
             (no fondo/borde) cae debajo del piso del proyecto — revisión de
             contraste del 2026-09-02, mismo criterio que --brand-deep
             abajo. --mute-deep (7.7:1) es la variante para eso. */
          --mute-deep: #425567;

          --brand: #5B4FE9;
          --brand-deep: #4434D4;
          --brand-soft: #EDEBFE;

          --r: 10px;

          /* Sombras de papel: duras y cortas. Una hoja no flota. */
          --sh-1: 0 1px 0 rgba(110,88,54,.22), 0 2px 3px -1px rgba(50,38,20,.14);
          --sh-2: 0 1px 0 rgba(110,88,54,.26), 0 8px 16px -8px rgba(50,38,20,.40);

          --mono: ui-monospace, "SF Mono", "SFMono-Regular", "Roboto Mono", "DejaVu Sans Mono", monospace;

          /* Paneles admin (?admin=1, /<slug>) — paleta oscura propia,
             EXTIENDE la que ya tenía PanelAcceso (.acceso-ambiente /
             .panel-acceso, más abajo) a toda la pantalla en vez de dejarla
             aislada en la tarjeta de login. La app de pacientes no la usa.
             Paleta "Acero institucional" (elegida 2026-09-13 sobre 6
             opciones comparadas en vivo, ver el artifact de la sesión) —
             reemplaza "grafito + dorado" (2026-09-12): el verde de éxito
             (#4ADE80) venía sin cambios desde la paleta violeta original y
             nunca se recalibró al pasar a dorado, así que chocaba. Acá la
             marca pasa a un azul de confianza tipo banca/gobierno — como ya
             no es cálida, el verde de éxito puede ser un verde limpio
             normal sin apagarlo, no compite con nada. Neutrales (línea/
             superficie) recalibrados a la misma temperatura fría, no solo
             el acento. */
          --admin-bg: #0B0A10;
          --admin-bg-soft: #141821;
          --admin-ink: #F1F2F6;
          --admin-body: #C7CCD6;
          --admin-mute: #8B93A3;
          --admin-line: #232A35;
          --admin-line-strong: #3A4454;
          --admin-brand: #4C7EA8;
          --admin-brand-deep: #8FBFE0;
          --admin-brand-soft: rgba(76,126,168,.18);
          /* Texto SOBRE un fondo/botón --admin-brand (azul acero): oscuro
             pasa 4.5:1 con margen; blanco también pasaría acá (a diferencia
             del dorado, que exigía oscuro sí o sí) pero se mantiene oscuro
             por consistencia con el resto de los botones de marca. Ver
             BotonMorph.jsx (colorTexto) para dónde se usa. */
          --admin-brand-texto: #0B1820;
          --admin-success: #4FAE7A;
          --admin-danger: #C2555B;
          /* Distinto de la marca a propósito (semántico, no acento) — si
             compartiera familia de color con --admin-brand no se podría
             distinguir "esto es advertencia" de "esto es la marca". */
          --admin-warning: #C99A3D;
          /* Ejecución más densa tipo dashboard (referencia posthog: capas de
             superficie + pares acento/suave para chips) sobre la MISMA
             identidad oscura — no se repinta la estructura, solo el acento. */
          --admin-bg-elevated: #1B212C;
          --admin-success-soft: rgba(79,174,122,.14);
          --admin-danger-soft: rgba(194,85,91,.14);
          --admin-warning-soft: rgba(201,154,61,.14);
          --admin-r-sm: 6px;
          --admin-r-lg: 14px;
          --admin-r-full: 999px;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }
        body, button, input, textarea, select { font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif; }
        /* El fondo va en el body y no solo en el contenedor: si el contenido no
           llega a llenar la pantalla, el rebote del scroll en iOS destapaba
           blanco debajo de la manila. */
        body { background-color: var(--manila); }
        /* La franja legal va PEGADA AL FONDO cuando el contenido no llena la
           pantalla. Antes quedaba justo debajo del contenido y dejaba un
           bloque de manila vacía abajo —hasta 102px medidos—, que se leía como
           que la página se cortó a la mitad.

           Columna flexible: el main se estira y empuja el pie al fondo.
           Cuando el contenido SÍ es largo, "flex: 1 0 auto" deja que crezca y
           el pie fluye normal al final.
           (Comillas dobles y no acentos graves: esto vive dentro de un
           template literal y un acento grave acá corta la cadena.)

           100dvh además de 100vh: en el navegador de un móvil, 100vh cuenta
           una pantalla completa ignorando las barras del navegador, así que el
           pie quedaba empujado por debajo del borde visible. dvh mide lo que
           de verdad se ve. El 100vh queda primero como respaldo para los
           navegadores viejos que no entienden dvh. */
        .app {
          color: var(--body);
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          min-height: 100dvh;
        }
        .app > main { flex: 1 0 auto; display: flex; flex-direction: column; }

        /* Contenedor de transición entre pantallas. Es un flex column para
           que cada pantalla hija se ancle arriba; el contenedor se estira para
           empujar el pie al fondo. Si el contenido es más alto que la ventana,
           fluye con scroll normal. */
        .pantalla-entra {
          flex: 1 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          width: 100%;
        }
        /* Las pantallas hijas ocupan todo el ancho disponible para que el
           max-width + margin: 0 auto las centre horizontalmente. */
        .pantalla-entra > div { width: 100%; }
        .pantalla-splash { background: var(--manila); }

        /* Rotulo de seccion. El mismo de la portada y de las guias: es lo que
           dice de que parte del tramite se esta hablando antes del titulo. */
        .rotulo {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: var(--mono);
          font-size: 14px; font-weight: 600;
          letter-spacing: 0.14em; text-transform: uppercase; color: var(--mute-deep);
          margin-bottom: 10px;
        }
        .rotulo::before {
          content: ""; width: 18px; height: 2px; flex: none;
          background: var(--rotulo-color, var(--brand));
        }

        /* Rótulo de bloque: nombra una parte del contenido dentro de una
           pantalla, no la pantalla. Había siete, cada uno con su peso (600 o
           700), su tracking (0,4 / 0,5 / 0,6) y su color, así que ninguno se
           leía como parte del mismo sistema.

           Es la monoespaciada de la familia pero SIN el guion: el guion es lo
           que marca la apertura de una pantalla, y repetirlo en cada bloque lo
           gasta. El tracking más corto (0,06em contra 0,14em) es la otra
           diferencia. Es el mismo tratamiento que ".datos .rotulo" de
           public/contenido.css — si se toca uno, se toca el otro.
           (Comillas dobles y no acentos graves: esto vive dentro de un template
           literal y un acento grave acá corta la cadena y vacía la app entera
           sin que el build se queje.)

           El color va por currentColor para los pocos que viven dentro de una
           caja teñida y tienen que seguir su tinta; el resto hereda el apagado. */
        .subrotulo {
          display: block;
          font-family: var(--mono);
          font-size: 14px; font-weight: 600;
          letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--mute-deep);
          margin-bottom: 8px;
        }

        .fade { transition: opacity 0.28s ease, transform 0.28s ease; }
        .show  { opacity: 1; transform: translateY(0px); }
        .hide  { opacity: 0; transform: translateY(14px); }

        /* Transición de entrada entre pantallas del asistente. Al cambiar
           la variable pantalla, el contenido del main se remonta con un key
           distinto y reproduce esta animación. Es sutil, para no entretener
           a la audiencia mayor: solo desvanece y baja un poco, dando sensación
           de avance. */
        .pantalla-entra {
          animation: pantallaEntra 0.28s cubic-bezier(.22,1,.36,1) both;
        }
        @keyframes pantallaEntra {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .pantalla-entra { animation: none; }
        }

        .card-tramite {
          border: none; border-radius: var(--r); cursor: pointer;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 12px; text-align: center;
          padding: 18px 12px; width: 100%;
          transition: transform 0.14s, box-shadow 0.14s;
          box-shadow: var(--sh-2);
        }
        .card-tramite:hover  { box-shadow: 0 2px 0 rgba(110,88,54,.30), 0 16px 28px -12px rgba(50,38,20,.50); }
        .card-tramite:active { transform: translateY(1px) scale(0.99); box-shadow: var(--sh-1); }

        /* Ficha de tramite. Es una hoja dentro del folder: al tocarla se
           levanta un poco y se apoya, no crece de escala — el papel no hace
           zoom. */
        .card-tramite-modern {
          transition: transform 0.13s ease, box-shadow 0.18s ease, border-color 0.18s ease;
        }
        .card-tramite-modern:hover {
          transform: translateY(-2px);
          box-shadow: 0 2px 0 rgba(110,88,54,.30), 0 16px 28px -12px rgba(50,38,20,.50) !important;
        }
        .card-tramite-modern:active {
          transform: translateY(1px) scale(0.99);
          box-shadow: var(--sh-1) !important;
        }

        /* Los botones se HUNDEN como un sello que se aprieta: un reborde solido
           abajo que desaparece al apretar. Antes flotaban con una sombra difusa
           de 16px de desenfoque, que es el gesto de una tarjeta de material
           design y no el de un papel apoyado en una mesa. */
        .btn-si {
          flex: 1; border: none; border-radius: var(--r);
          background: #227A4A; color: white;
          font-family: inherit; font-weight: 700; font-size: 24px;
          padding: 22px 0; cursor: pointer;
          box-shadow: 0 3px 0 #227A4A;
          transition: transform 0.12s, box-shadow 0.12s;
        }
        .btn-si:active { transform: translateY(3px) scale(0.98); box-shadow: 0 0 0 #227A4A; }

        .btn-no {
          flex: 1; border: none; border-radius: var(--r);
          background: #A32B3E; color: white;
          font-family: inherit; font-weight: 700; font-size: 24px;
          padding: 22px 0; cursor: pointer;
          box-shadow: 0 3px 0 #A32B3E;
          transition: transform 0.12s, box-shadow 0.12s;
        }
        .btn-no:active { transform: translateY(3px) scale(0.98); box-shadow: 0 0 0 #A32B3E; }

        /* Los botones que se estilan en línea llevan BTN_PISADA como reborde;
           esta clase les da la otra mitad del gesto, que es hundirse al
           apretarlos. Sin ella el reborde queda de adorno y el botón no
           responde. El !important es porque el box-shadow viene del atributo
           style, que gana por especificidad. */
        .pisa { transition: transform 0.12s, box-shadow 0.12s; }
        .pisa:active {
          transform: translateY(3px) scale(0.98);
          box-shadow: 0 0 0 rgba(0,0,0,0.30) !important;
        }

        /* Botón de avance. Era una píldora oscura de radio completo: en la
           portada el mismo gesto —"Empezar ahora"— es un rectángulo granate,
           así que la persona aprendía un botón en la portada y encontraba otro
           al entrar. Ahora son el mismo botón. */
        .btn-continuar {
          margin-top: 6px; border: none; border-radius: var(--r);
          background: var(--brand); color: white;
          font-family: inherit; font-weight: 600; font-size: 19px;
          letter-spacing: -0.01em;
          padding: 16px 38px; cursor: pointer;
          min-height: 56px;
          box-shadow: 0 3px 0 var(--brand-deep);
          transition: transform 0.12s, background 0.12s, box-shadow 0.12s;
        }
        .btn-continuar:hover { background: var(--brand-deep); }
        .btn-continuar:active { transform: translateY(3px) scale(0.98); box-shadow: 0 0 0 var(--brand-deep); }
        .btn-continuar:focus-visible {
          outline: 3px solid var(--brand); outline-offset: 3px;
        }

        .btn-opcion {
          width: 100%; border: 2px solid var(--line); border-radius: var(--r);
          background: var(--sheet);
          text-align: left; padding: 18px 16px;
          display: flex; align-items: center; gap: 14px;
          font-family: inherit; font-weight: 600; font-size: 19px;
          color: var(--ink); cursor: pointer;
          box-shadow: var(--sh-1);
          transition: border-color 0.13s, background-color 0.13s, transform 0.12s, box-shadow 0.12s;
        }
        .btn-opcion:hover  { border-color: var(--rule); background-color: #F6F9FC; }
        .btn-opcion:active { transform: translateY(1px) scale(0.99); box-shadow: none; }

        .btn-alerta {
          width: 100%; border: none; border-radius: var(--r);
          background: #8A5A17; color: white;
          font-family: inherit; font-weight: 600; font-size: 21px;
          padding: 20px; cursor: pointer;
          box-shadow: 0 3px 0 #0D253D;
          transition: transform 0.12s, box-shadow 0.12s;
        }
        .btn-alerta:active { transform: translateY(3px) scale(0.98); box-shadow: 0 0 0 #0D253D; }

        .check-row {
          display: flex; align-items: flex-start;
          gap: 14px; padding: 16px 18px;
          border-radius: var(--r); margin-bottom: 10px;
        }
        .btn-volver {
          width: 100%; border: 2px solid var(--line); border-radius: var(--r);
          background: var(--sheet); color: var(--ink);
          font-family: inherit; font-weight: 600; font-size: 19px;
          padding: 18px; cursor: pointer;
          box-shadow: var(--sh-1);
          transition: transform 0.12s, box-shadow 0.12s, border-color 0.13s;
        }
        .btn-volver:hover { border-color: var(--rule); }
        .btn-volver:active { transform: translateY(1px) scale(0.99); box-shadow: none; }

        /* Indicador de pasos: puntos encima de la barra de progreso. */
        .pasos-puntos {
          display: flex; gap: 6px;
          justify-content: center;
          margin-bottom: 6px;
        }
        .paso-punto {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--line);
          transition: background 0.3s ease, transform 0.3s ease;
        }
        .paso-punto.activo { background: var(--paso-color, var(--brand)); transform: scale(1.2); }
        .paso-punto.completado { background: var(--paso-color, var(--brand)); opacity: 0.45; }

        @keyframes pulse-ring {
          0%   { box-shadow: 0 0 0 0 rgba(160,64,64,0.5); }
          70%  { box-shadow: 0 0 0 14px rgba(160,64,64,0); }
          100% { box-shadow: 0 0 0 0 rgba(160,64,64,0); }
        }
        /* Sello de completado: el banner de "¡Revisión completada!" entra
           como una estampa que se apoya, coherente con el lenguaje de la
           landing. */
        @keyframes sello-entra {
          0%   { opacity: 0; transform: scale(1.12) rotate(-2deg); }
          55%  { opacity: 1; transform: scale(0.97) rotate(0.5deg); }
          100% { opacity: 1; transform: scale(1)   rotate(0deg); }
        }
        .banner-resultado.completado {
          animation: sello-entra 0.45s cubic-bezier(.16,1,.3,1) both;
        }

        /* Icono grande de cada pregunta del flujo: refuerza el patrón de
           respuesta. La alerta pulsa sutilmente para llamar la atención sin
           asustar. */
        .flow-icono { line-height: 0; }
        .flow-icono-alerta { animation: alertaPulso 1.4s ease-in-out infinite; }
        @keyframes alertaPulso {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%      { transform: scale(1.06); opacity: 0.92; }
        }

        /* El check de AceptoCheckbox entra en vez de aparecer de golpe.
           Nunca desde scale(0): 0.5 es el piso, si no el navegador tiene que
           calcular una escala nula y el primer frame parpadea. */
        @keyframes acepto-check-in {
          from { opacity: 0; transform: scale(0.5); }
          to   { opacity: 1; transform: scale(1); }
        }
        .acepto-check {
          display: inline-block;
          animation: acepto-check-in 150ms cubic-bezier(0.23, 1, 0.32, 1);
        }
        .btn-voz {
          border: none; border-radius: 50%;
          width: 62px; height: 62px; font-size: 26px;
          cursor: pointer; display: flex; align-items: center; justify-content: center;
          transition: background 0.2s, transform 0.1s;
          font-family: inherit;
        }
        .btn-voz:active { transform: scale(0.93); }
        .btn-voz.speaking {
          animation: pulse-ring 1.2s infinite;
        }
        /* Tarjeta de espera del splash. Es prescindible; el botón "Continuar"
           no. En pantallas bajas (Android chico, o cualquiera con el teclado o
           las barras del navegador comiendo alto) empujaba el botón fuera de la
           vista: medido, a 320×480 lo mandaba 143px por debajo del borde.
           Por eso solo aparece cuando hay alto de sobra. */

        /* ── Aviso de independencia (splash) ── */
        .aviso-indep { max-width: 340px; text-align: center; }
        .aviso-indep summary {
          font-size: 10px; font-weight: 500; color: var(--mute-deep);
          line-height: 1.25; cursor: pointer; list-style: none;
        }
        .aviso-indep summary::-webkit-details-marker { display: none; }
        .aviso-indep summary strong { color: var(--brand); font-weight: 600; }
        .aviso-indep summary::after { content: " · más"; color: var(--brand); font-weight: 500; }
        .aviso-indep[open] summary::after { content: " · menos"; }
        .aviso-indep p { font-size: 10px; color: var(--mute-deep); line-height: 1.25; margin-top: 3px; }

        /* ── Carrusel de las pantallas de espera ── */
        .carrusel {
          width: 100%;
          background: var(--sheet);
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          overflow: hidden;
        }
        /* Desde pantalla mediana vuelve a ser una tarjeta: a borde completo en
           un monitor la imagen quedaría enorme y desproporcionada. */
        @media (min-width: 480px) {
          .carrusel {
            max-width: 480px;
            border: 1px solid var(--line);
            border-radius: var(--r);
            box-shadow: var(--sh-2);
          }
        }
        .carrusel-vista { overflow: hidden; }
        .carrusel-tira {
          display: flex;
          transition: transform 420ms cubic-bezier(0.23, 1, 0.32, 1);
        }
        /* Sin esto cada pieza se encoge al ancho de su contenido y la tira se
           desarma: en un flex, los hijos no respetan el 100% por sí solos. */
        .carrusel-pieza { flex: 0 0 100%; min-width: 0; }
        /* 1:1: la caja 4:3 seguía leyéndose baja para esta audiencia. Cuadrada
           le da a la imagen todo el protagonismo posible sin que la escena
           deje de leerse —el arte original es 2:1, así que el recorte sigue
           siendo lateral, nunca vertical—. */
        /* Las ilustraciones se generaron sobre rosa pastel y contra la manila
           se leen como un cuerpo extraño pegado sobre el papel. El filete
           inferior y el fondo de reserva las devuelven a la hoja. Con la caja
           1:1 mucho más angosta que el arte 2:1, el recorte sigue siendo
           lateral, no vertical: centrado (50%) alcanza, no hace falta un
           desplazamiento en Y. */
        .carrusel-pieza img {
          display: block; width: 100%; height: auto;
          aspect-ratio: 1 / 1; object-fit: cover; object-position: 50%;
          background: var(--manila-2);
          border: 1mm solid #b7bbbf;
          border-image: linear-gradient(135deg, #dcdee0 0%, #f6f7f8 15%, #979ba0 35%, #ffffff 50%, #82868b 65%, #e8eaeb 82%, #aeb2b6 100%) 1;
        }
        /* El hueco de una pieza que todavía no se pidió: mismo alto exacto que
           la imagen, así el carrusel no cambia de tamaño al llegar a ella. */
        .carrusel-hueco {
          width: 100%; aspect-ratio: 1 / 1;
          background: var(--manila-2);
          border-bottom: 1px solid var(--line);
        }
        .carrusel-texto { padding: 12px 16px 12px; }
        .carrusel-texto strong {
          display: block; font-size: 16px; font-weight: 600;
          color: var(--ink); line-height: 1.3;
        }
        .carrusel-texto span {
          display: block; font-size: 14px; font-weight: 400;
          color: var(--body); line-height: 1.45; margin-top: 2px;
        }
        .carrusel-puntos {
          display: flex; justify-content: center; gap: 4px;
          padding: 0 0 8px;
        }
        /* El punto se ve chico pero el botón mide 24px: el área de toque no
           puede ser del tamaño del dibujo. */
        .carrusel-punto {
          width: 24px; height: 24px; padding: 0;
          border: none; background: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
        }
        .carrusel-punto::before {
          content: ""; width: 7px; height: 7px; border-radius: 50%;
          background: var(--rule); transition: background 200ms, transform 200ms;
        }
        .carrusel-punto.es-actual::before { background: var(--brand); transform: scale(1.3); }
        .carrusel-punto:focus-visible { outline: 3px solid var(--brand); outline-offset: -2px; border-radius: 50%; }

        @media (prefers-reduced-motion: reduce) {
          .carrusel-tira { transition: none; }
        }

        /* Bajado de 680px a 420px: el aviso de independencia dejó de ser una
           tarjeta grande (ver AvisoIndependencia), así que el bloque de
           arriba ahora mide ~250px y el botón queda lejos del borde incluso
           en 320×480 — el caso que motivó el umbral original. Medido: a
           320×568 (el celular más bajo realista hoy) el carrusel entra con
           un margen de apenas 19px, que en el peor caso pide un scroll
           mínimo, no un recorte. Lo que queda por debajo de 420px es
           básicamente el celular en horizontal, donde sí conviene ocultarlo.
           El patrocinio SÍ se muestra igual: está pago. */
        @media (max-height: 420px) {
          .carrusel { display: none; }
        }

        /* ── Banner patrocinado ── */
        /* Mismo formato que el carrusel para que el espacio se lea igual:
           a los bordes en móvil, tarjeta desde 480px. */
        .patrocinio {
          position: relative; width: 100%;
          background: var(--sheet);
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          overflow: hidden;
        }
        @media (min-width: 480px) {
          .patrocinio { max-width: 480px; border: 1px solid var(--line); border-radius: var(--r); box-shadow: var(--sh-2); }
        }
        /* El rótulo va encima de la imagen y no debajo: tiene que verse antes
           que la pieza, no después de haberla leído como si fuera contenido. */
        .patrocinio-rotulo {
          position: absolute; top: 8px; left: 8px; z-index: 2;
          background: rgba(36, 28, 20, 0.86); color: var(--carton-txt);
          font-family: var(--mono);
          font-size: 14px; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 8px; border-radius: var(--r);
        }
        .patrocinio-enlace { display: block; text-decoration: none; }
        .patrocinio-enlace img {
          display: block; width: 100%; height: auto;
          aspect-ratio: 1 / 1; object-fit: cover; object-position: 50%;
          background: var(--manila-2);
          border-bottom: 1px solid var(--line);
        }
        .patrocinio-texto { padding: 12px 16px 12px; }
        .patrocinio-texto strong {
          display: block; font-size: 16px; font-weight: 600;
          color: var(--ink); line-height: 1.3;
        }
        .patrocinio-texto span {
          display: block; font-size: 14px; font-weight: 400;
          color: var(--body); line-height: 1.45; margin-top: 2px;
        }
        .patrocinio-enlace:focus-visible { outline: 3px solid var(--brand); outline-offset: -3px; }


        /* Era el único celeste del sitio: un recuadro azul claro con borde
           celeste, herencia del voz-bar viejo. Ahora es una hoja más. */
        .voz-bar {
          display: flex; align-items: center; gap: 14px;
          background: var(--sheet);
          border: 1px solid var(--line);
          border-radius: var(--r); padding: 12px 16px; margin-bottom: 16px;
          box-shadow: var(--sh-1);
        }

        /* Campos: renglón de formulario, no caja redondeada. El filete grueso
           de abajo es el que se llena a mano. */
        .seguro-input {
          /* min-width:0 porque un <input type="date"> nativo tiene un ancho
             mínimo propio (segmentos dd/mm/aaaa + ícono de calendario) que
             width:100% no puede achicar dentro de una fila flex angosta —
             sin esto, el par Desde/Hasta empujaba la página entera a scroll
             horizontal en 320-360px (medido: 54px de desborde real). */
          width: 100%; min-width: 0; border: 1px solid var(--line); border-bottom: 3px solid var(--rule);
          border-radius: var(--r);
          background: var(--sheet); padding: 16px 16px;
          font-family: inherit; font-weight: 700; font-size: 22px;
          color: var(--brand);
          outline: none;
          transition: border-color 0.15s, box-shadow 0.15s;
          letter-spacing: 1px;
        }
        .seguro-input:focus {
          border-color: var(--brand);
          box-shadow: 0 0 0 3px rgba(139,30,63,0.16);
        }
        .seguro-input::placeholder { color: var(--mute-deep); font-weight: 400; letter-spacing: 0; }
        /* Fila de 2 campos lado a lado (Desde/Hasta y similares) — el
           min-width:0 en los hijos queda establecido acá, no repetido a
           mano en cada style flex:1. Reusar esta clase en cualquier
           par nuevo de campos: así lo angosto del auto-acomodo cubre
           campos que se agreguen después, no solo los tres que ya tenía
           el sitio (Estribillo del admin general, del representante, y el
           de un anuncio) — sin esto un <input type="date"> u otro campo
           con ancho mínimo propio puede volver a empujar la página entera
           a scroll horizontal, como pasó acá. */
        .fila-2 { display: flex; gap: 10px; }
        .fila-2 > * { flex: 1; min-width: 0; }
        .seguro-label {
          display: block; font-size: 15px; font-weight: 600; color: var(--ink);
          margin-bottom: 8px;
        }
        @keyframes spinner-rot { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .seguro-spinner {
          width: 28px; height: 28px; border: 4px solid rgba(255,255,255,0.35);
          border-top-color: white; border-radius: 50%;
          animation: spinner-rot 0.9s linear infinite;
        }

        /* ── BotonMorph: spinner → check dentro del mismo botón ── */
        .btn-morph {
          position: relative;
          background: var(--btn-morph-base, #0D253D);
          transition: background-color 0.3s ease, transform 0.15s ease;
          overflow: hidden;
        }
        .btn-morph:active:not(:disabled) { transform: scale(0.98); }
        .btn-morph[data-fase="exito"] { background: var(--admin-success); }
        .btn-morph-label {
          display: inline-block;
          transition: opacity 0.15s ease, transform 0.15s ease;
        }
        .btn-morph[data-fase="cargando"] .btn-morph-label,
        .btn-morph[data-fase="exito"] .btn-morph-label {
          opacity: 0; transform: translateY(4px);
        }
        .btn-morph-spinner, .btn-morph-check {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transform: scale(0.4);
          transition: opacity 0.2s ease, transform 0.3s cubic-bezier(.34,1.56,.64,1);
          pointer-events: none;
        }
        .btn-morph[data-fase="cargando"] .btn-morph-spinner { opacity: 1; transform: scale(1); }
        .btn-morph[data-fase="exito"] .btn-morph-check {
          opacity: 1; transform: scale(1);
          animation: btnCheckPop 0.45s cubic-bezier(.34,1.56,.64,1) both;
        }
        @keyframes btnCheckPop {
          0% { transform: scale(0.3) rotate(-8deg); opacity: 0; }
          55% { transform: scale(1.18) rotate(4deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }

        /* ── Pop-up exclusivo (AnuncioPopup.jsx): 2 animaciones de entrada
           elegibles desde el admin (GestorPopup.jsx). "Rebote" reusa la
           MISMA curva cubic-bezier(.34,1.56,.64,1) que btnCheckPop/
           panelDesbloquea/otpSelloAparece — es la firma "bounce" de todo
           el sitio, no una curva nueva inventada acá. "Aparición" es
           deliberadamente sobria (fade + scale sutil), sin overshoot. ── */
        .popup-rebote { animation: popupRebote 0.55s cubic-bezier(.34,1.56,.64,1) both; }
        @keyframes popupRebote {
          0% { transform: scale(0.7) translateY(24px); opacity: 0; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        .popup-aparece { animation: popupAparece 0.4s ease-out both; }
        @keyframes popupAparece {
          0% { transform: scale(0.96) translateY(8px); opacity: 0; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .popup-rebote, .popup-aparece { animation: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .btn-morph, .btn-morph-label, .btn-morph-spinner, .btn-morph-check {
            transition: none !important; animation: none !important;
          }
          .btn-morph[data-fase="cargando"] .btn-morph-spinner,
          .btn-morph[data-fase="exito"] .btn-morph-check { opacity: 1; transform: none; }
          .btn-morph[data-fase="cargando"] .btn-morph-label,
          .btn-morph[data-fase="exito"] .btn-morph-label { opacity: 0; }
        }

        /* ── CandadoEstado: candado de los campos de acceso admin ── */
        .candado-wrap {
          position: relative; width: 22px; height: 22px; flex: 0 0 auto;
          display: flex; align-items: center; justify-content: center;
        }
        .candado-wrap::before {
          content: ""; position: absolute; inset: -9px; border-radius: 50%;
          background: radial-gradient(circle, rgba(30,58,82,0.55) 0%, rgba(30,58,82,0) 70%);
          opacity: 0; transform: scale(.5); transition: opacity 0.3s, transform 0.3s;
        }
        .candado-escribiendo::before { opacity: .35; transform: scale(.85); }
        .candado-cargando::before { opacity: .6; animation: candadoHaloRespira 1s ease-in-out infinite; }
        .candado-exito::before {
          opacity: .9; transform: scale(1.15);
          background: radial-gradient(circle, rgba(30,58,82,0.75) 0%, rgba(30,58,82,0) 70%);
        }
        .candado-error::before {
          opacity: .5;
          background: radial-gradient(circle, rgba(194,85,91,0.55) 0%, rgba(194,85,91,0) 70%);
        }
        @keyframes candadoHaloRespira {
          0%, 100% { opacity: .35; transform: scale(.8); }
          50% { opacity: .75; transform: scale(1.05); }
        }
        .candado-wrap svg { color: var(--admin-mute); transition: color 0.2s; }
        .candado-escribiendo svg, .candado-cargando svg, .candado-exito svg { color: var(--admin-brand); }
        .candado-error svg { color: var(--admin-danger); }
        .candado-arco {
          transform-origin: 12px 10.5px;
          transition: transform 0.5s cubic-bezier(.34,1.56,.64,1);
        }
        .candado-escribiendo .candado-arco,
        .candado-cargando .candado-arco,
        .candado-exito .candado-arco { transform: rotate(-32deg) translate(-2px, -2.5px); }
        .candado-exito svg { transform: scale(1.12); transition: transform 0.4s cubic-bezier(.34,1.56,.64,1); }
        .candado-cargando svg { animation: candadoPop 1s ease-in-out infinite; }
        @keyframes candadoPop { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.08); } }
        @media (prefers-reduced-motion: reduce) {
          .candado-arco, .candado-exito svg { transition: none; }
          .candado-wrap::before { transition: none; }
          .candado-cargando::before, .candado-cargando svg { animation: none; }
        }

        /* .panel-admin-fondo .seguro-label/.seguro-input/etc. van ANTES del
           bloque de PanelAcceso (más abajo) a propósito: adentro de la
           tarjeta de login (.panel-acceso), <PanelAcceso> ahora renderiza
           dentro de .panel-admin-fondo en las dos pantallas admin, así que
           ambos selectores matchean el mismo input con la MISMA
           especificidad (0,2,0) — empate que CSS resuelve por orden de
           aparición en el archivo, no por especificidad. Puestas acá
           arriba, estas reglas pierden ese empate contra las de
           .panel-acceso (que siguen más abajo, sin tocar — ver su propio
           comentario), así que la tarjeta de login conserva su estilo
           oscuro con blur/glow propio; fuera de la tarjeta pero dentro de
           .panel-admin-fondo, estas reglas de acá son las únicas que
           matchean y sí se aplican como siempre. Revisión final de rama,
           hallazgo I2 (2026-09-10): antes estaban después del bloque de
           PanelAcceso y silenciosamente le ganaban el empate, aplanando el
           look de la tarjeta de login. */
        .panel-admin-fondo .seguro-label { color: var(--admin-mute); font-size: 13px; }
        .panel-admin-fondo .seguro-input {
          background: var(--admin-bg-soft); border-color: var(--admin-line);
          border-bottom-color: var(--admin-line-strong); color: var(--admin-ink);
          /* 22px es el tamaño base pensado para códigos cortos de la app del
             paciente (ver .seguro-input más abajo) — acá adentro son campos
             normales (horarios, URLs, direcciones), así que se achica para
             quedar por debajo de los títulos de pestaña (15-16px, ver
             .panel-nav-item/.panel-admin-tabs-item más arriba). */
          font-size: 15px; font-weight: 600; letter-spacing: normal;
        }
        .panel-admin-fondo .seguro-input:focus {
          border-color: var(--admin-brand);
          box-shadow: 0 0 0 3px var(--admin-brand-soft);
        }
        .panel-admin-fondo .seguro-input::placeholder { color: var(--admin-mute); }

        /* ── CampoAcordeon: un campo a la vez dentro de "Datos del
           establecimiento"/"Datos administrativos" — cerrado muestra
           etiqueta+resumen, se abre solo (ver onBlur en cada input real) al
           terminar el anterior. */
        .campo-acordeon-cerrado {
          display: flex; align-items: center; justify-content: space-between; gap: 10px;
          width: 100%; text-align: left; cursor: pointer;
          background: var(--admin-bg-soft); border: 1px solid var(--admin-line);
          border-radius: var(--r); padding: 12px 14px; margin-bottom: 8px;
          font-family: inherit;
        }
        /* flex-shrink por defecto no alcanza: sin min-width:0 un span de
           texto largo ("Correo de recepción" + el tag "(opcional)") no se
           angosta más allá de su min-content y el navegador lo parte
           palabra por palabra en 2-3 líneas en vez de una sola truncada
           (medido con Playwright a 320-360px, hallazgo real del usuario). */
        .campo-acordeon-etiqueta {
          font-size: 13px; font-weight: 700; color: var(--admin-ink);
          flex: 1 1 auto; min-width: 0;
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        .campo-acordeon-tag { font-weight: 400; color: var(--admin-mute); }
        .campo-acordeon-resumen {
          font-size: 13px; color: var(--admin-body); max-width: 55%; flex: 0 1 auto;
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        .campo-acordeon-resumen[data-vacio="true"] { color: var(--admin-mute); font-style: italic; }
        .campo-acordeon-abierto { margin-bottom: 8px; }

        /* ── PanelAcceso: tarjeta de acceso tipo "login card" (ver el
           comentario del componente arriba) ── */
        /* Escena oscura violeta+grafito — mezcla de varias referencias (Den,
           SIGNET: tarjeta oscura; Lunara: escena detrás del vidrio). Colores
           puros pedidos: violeta de marca (var(--brand)) + grafito casi
           negro, blend "screen" en vez de "multiply" — sobre fondo oscuro
           screen es el que aclara/brilla en vez de mancharse. */
        .acceso-ambiente {
          position: relative;
          overflow: hidden;
          display: flex; justify-content: center; align-items: center;
          padding: clamp(32px, 10vw, 72px) 16px;
          margin: 0 -20px 14px;
          background: linear-gradient(165deg, #1A140F 0%, #0B0A10 100%);
        }
        .acceso-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(4px);
          pointer-events: none;
          mix-blend-mode: screen;
        }
        .acceso-blob-1 {
          top: -18%; left: 4%; width: min(420px, 110vw); aspect-ratio: 1;
          background: radial-gradient(circle, rgba(76,126,168,0.65) 0%, rgba(76,126,168,0) 70%);
          animation: blobDeriva1 7s ease-in-out infinite;
        }
        .acceso-blob-2 {
          bottom: -22%; right: -4%; width: min(380px, 100vw); aspect-ratio: 1;
          background: radial-gradient(circle, rgba(30,58,82,0.55) 0%, rgba(30,58,82,0) 70%);
          animation: blobDeriva2 8.5s ease-in-out infinite;
        }
        .acceso-blob-3 {
          top: 30%; right: 12%; width: min(220px, 60vw); aspect-ratio: 1;
          background: radial-gradient(circle, rgba(143,191,224,0.4) 0%, rgba(143,191,224,0) 70%);
          animation: blobDeriva3 6s ease-in-out infinite;
        }
        @keyframes blobDeriva1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(8%, 10%) scale(1.22); }
        }
        @keyframes blobDeriva2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-10%, -8%) scale(1.25); }
        }
        @keyframes blobDeriva3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-12%, 8%) scale(1.15); }
        }
        /* Envoltorio de la inclinación 3D (JS, ver PanelAcceso arriba): el
           transform de acá es SOLO el tilt del puntero; la tarjeta adentro
           sigue animando su propio transform (flotar/pop) sin pisarse. */
        .acceso-tilt {
          transform-style: preserve-3d;
          transition: transform 0.15s ease-out;
        }
        .panel-acceso {
          position: relative;
          width: min(420px, 100%);
          background: rgba(38,33,58,0.55);
          backdrop-filter: blur(20px) saturate(1.4);
          -webkit-backdrop-filter: blur(20px) saturate(1.4);
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: calc(var(--r) + 10px);
          padding: clamp(20px, 6vw, 30px) clamp(18px, 5.5vw, 26px) clamp(22px, 6vw, 28px);
          box-shadow: 0 24px 48px -20px rgba(0,0,0,0.6);
          transition: box-shadow 0.35s, border-color 0.35s;
          animation: panelEntra 0.5s cubic-bezier(.22,1,.36,1) both, panelFlota 5s ease-in-out 0.5s infinite;
        }
        @keyframes panelEntra {
          0% { opacity: 0; transform: translateY(10px) scale(.97); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        /* Flotación ambiental, sutil a propósito — el pop de éxito y el
           respiro de carga ya usan transform: scale; esta anda en translateY
           para no chocar cuando ambas corren a la vez. */
        @keyframes panelFlota {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .panel-acceso-insignia {
          position: relative;
          width: 46px; height: 46px; margin: 0 auto 14px;
          border-radius: 50%;
          background: linear-gradient(160deg, var(--admin-brand), #1E3A52);
          color: #fff;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 6px 20px -2px rgba(76,126,168,0.7);
        }
        .panel-acceso-insignia::before {
          content: ""; position: absolute; inset: -6px; border-radius: 50%;
          border: 1.5px solid rgba(143,191,224,0.55);
          animation: insigniaAnillo 2.6s ease-out infinite;
        }
        @keyframes insigniaAnillo {
          0% { transform: scale(0.85); opacity: .7; }
          100% { transform: scale(1.35); opacity: 0; }
        }
        /* Space Grotesk (cargada bajo demanda, ver el useEffect de arriba)
           solo para el título y el label — geométrica, más carácter que
           Inter para el momento de acceso. El input se queda en monospace
           (.input-casillero): 1ch tiene que seguir siendo un ancho de
           carácter fijo para que los divisores del casillero calcen. */
        .panel-acceso-titulo {
          font-family: 'Space Grotesk', 'Inter', system-ui, sans-serif;
          font-size: 20px; font-weight: 700; color: #F5F1E8;
          text-align: center; margin: 0 0 16px; text-wrap: balance;
          letter-spacing: -0.01em;
        }
        .panel-acceso .seguro-label {
          font-family: 'Space Grotesk', 'Inter', system-ui, sans-serif;
          color: rgba(245,241,232,0.85);
        }
        .panel-acceso .candado-wrap svg { color: rgba(245,241,232,0.45); }
        /* El campo se ve hundido DENTRO del vidrio oscuro, con look de
           casillero — ver .input-casillero (los divisores verticales) más
           abajo, que se aplica junto con esta clase. */
        .panel-acceso .seguro-input {
          border: 1px solid rgba(255,255,255,0.14);
          border-bottom-width: 1px;
          background: rgba(12,10,20,0.55);
          color: #F5F1E8;
          box-shadow: inset 0 2px 8px rgba(0,0,0,0.4);
          /* 22px (el tamaño global, pensado para códigos cortos) corta el
             placeholder largo del token en mobile — 16px es el piso que
             evita el auto-zoom de iOS y entra en una pantalla chica. */
          font-size: 16px;
        }
        .panel-acceso .seguro-input::placeholder { color: rgba(245,241,232,0.35); }
        .panel-acceso .seguro-input:focus {
          border-color: rgba(143,191,224,0.5);
          box-shadow: inset 0 2px 8px rgba(0,0,0,0.4), 0 0 0 3px rgba(76,126,168,0.28);
        }
        /* Look de casillero (SIGNET/Liquid OTP/OTP v5): UN input real de
           largo variable, no N cajas — un token/password no tiene largo
           fijo como un código de 4 dígitos, así que en vez de recortarlo a
           una grilla fija se dibujan divisores repetidos cada "celda" con
           letter-spacing en monospace. Escala a cualquier longitud sin
           quebrarse ni asumir cuántos caracteres va a tener. */
        .input-casillero {
          font-family: ui-monospace, "SFMono-Regular", Menlo, monospace;
          letter-spacing: 0.5em;
          padding-left: 0.4em;
          background-image: repeating-linear-gradient(
            90deg,
            rgba(255,255,255,0.07) 0,
            rgba(255,255,255,0.07) calc(1ch + 0.5em - 5px),
            transparent calc(1ch + 0.5em - 5px),
            transparent calc(1ch + 0.5em)
          );
          background-position: 0.4em center;
        }
        .panel-acceso[data-estado="escribiendo"] { border-color: rgba(143,191,224,0.5); }
        .panel-acceso[data-estado="cargando"] {
          border-color: var(--admin-brand);
          animation: panelEntra 0.5s cubic-bezier(.22,1,.36,1) both, panelRespira 1.1s ease-in-out infinite;
        }
        .panel-acceso[data-estado="exito"] {
          border-color: rgba(143,191,224,0.7);
          box-shadow: 0 24px 48px -20px rgba(0,0,0,0.6), 0 0 34px -4px rgba(76,126,168,0.75);
          animation: panelDesbloquea 0.5s cubic-bezier(.34,1.56,.64,1) both;
        }
        .panel-acceso[data-estado="error"] { border-color: var(--admin-danger); }
        @keyframes panelRespira {
          0%, 100% { box-shadow: 0 24px 48px -20px rgba(0,0,0,0.6), 0 0 0 3px rgba(76,126,168,0.18); }
          50% { box-shadow: 0 24px 48px -20px rgba(0,0,0,0.6), 0 0 0 6px rgba(76,126,168,0.35); }
        }
        @keyframes panelDesbloquea {
          0% { transform: scale(1); }
          45% { transform: scale(1.025); }
          100% { transform: scale(1); }
        }

        /* ── PanelOtp: casillas del segundo factor (OTP) ──
           Reusa el marco de PanelAcceso (fondo/blobs/tilt/candado). Combina
           3 referencias que mandó el usuario (TikTok @settigation):
           (a) "SIGIL" — anillo de neón que persigue el borde de la casilla
               activa mientras se escribe (conic-gradient enmascarado a
               anillo, gira solo con :focus-within, sin JS de por medio).
           (b) "DECK"/"v1" — al completarse el código, las 6 casillas
               colapsan hacia el centro y quedan reemplazadas por un sello
               circular con líneas radiales mientras se verifica (reemplaza
               la "ola" que había antes).
           (c) éxito = candado abriéndose (CandadoEstado) + el check
               dibujándose más abajo — eso ya existía, sin cambios. */
        .panel-otp-destino {
          font-size: 13px; color: rgba(245,241,232,0.65); text-align: center;
          margin: 0 0 16px;
        }
        .panel-otp-casillas { display: flex; justify-content: center; gap: 8px; position: relative; min-height: 52px; }
        .panel-otp-celda { position: relative; }
        .panel-otp-casilla {
          width: 42px; height: 52px;
          font-family: ui-monospace, "SFMono-Regular", Menlo, monospace;
          font-size: 22px; font-weight: 700; text-align: center;
          color: #F5F1E8;
          background: rgba(12,10,20,0.55);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: var(--r);
          box-shadow: inset 0 2px 8px rgba(0,0,0,0.4);
          transition: border-color 0.15s, box-shadow 0.15s, transform 0.15s;
          /* Entrada escalonada (cascada) por casilla — nth-child en vez de
             animationDelay inline, mismo criterio de "menos JSX" que el
             resto del archivo cuando el CSS alcanza solo. */
          animation: otpCasillaEntra 0.35s cubic-bezier(.22,1,.36,1) both;
        }
        .panel-otp-casilla:nth-child(1) { animation-delay: 0ms; }
        .panel-otp-casilla:nth-child(2) { animation-delay: 40ms; }
        .panel-otp-casilla:nth-child(3) { animation-delay: 80ms; }
        .panel-otp-casilla:nth-child(4) { animation-delay: 120ms; }
        .panel-otp-casilla:nth-child(5) { animation-delay: 160ms; }
        .panel-otp-casilla:nth-child(6) { animation-delay: 200ms; }
        @keyframes otpCasillaEntra {
          0% { opacity: 0; transform: translateY(10px) scale(.85); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .panel-otp-casilla:focus {
          outline: none;
          border-color: rgba(143,191,224,0.6);
          box-shadow: inset 0 2px 8px rgba(0,0,0,0.4), 0 0 0 3px rgba(76,126,168,0.32);
        }
        .panel-otp-casilla[data-llena="true"] {
          border-color: rgba(143,191,224,0.5);
          /* Pequeño "pop" al completarse la casilla — refuerza que el
             tipeo registró, sin esperar a la verificación completa. */
          animation: otpCasillaEntra 0.35s cubic-bezier(.22,1,.36,1) both, otpCasillaPop 0.22s ease-out;
        }
        @keyframes otpCasillaPop {
          0% { transform: scale(1); }
          40% { transform: scale(1.12); }
          100% { transform: scale(1); }
        }
        /* (a) Anillo de neón persiguiendo el borde — solo la casilla con foco
           real (:focus-within, sin estado en JS). Truco de conic-gradient
           enmascarado a anillo hueco (mask exclude entre content-box y el
           box completo); rotarlo entero hace que el arco brillante recorra
           el borde, funciona igual sobre esquinas redondeadas que sobre un
           círculo. */
        .panel-otp-anillo {
          position: absolute; inset: -5px; border-radius: calc(var(--r) + 5px);
          padding: 2px;
          background: conic-gradient(from 0deg,
            transparent 0deg, var(--admin-brand) 55deg, #F5F1E8 70deg,
            var(--admin-brand) 85deg, transparent 150deg);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0; pointer-events: none;
          animation: otpAnilloGirar 1.1s linear infinite;
          animation-play-state: paused;
        }
        .panel-otp-celda:focus-within .panel-otp-anillo { opacity: 1; animation-play-state: running; }
        @keyframes otpAnilloGirar { to { transform: rotate(1turn); } }

        /* (b) Al verificar, las casillas colapsan hacia el centro de la fila
           (los --otp-centro por nth-child son la distancia real: pitch de
           42px de ancho + 8px de separación = 50px entre casillas) y un
           sello circular con líneas radiales las reemplaza — más
           "está pasando algo importante" que un spinner genérico. */
        .panel-otp-casillas[data-estado="cargando"] .panel-otp-celda {
          animation: otpColapsa 0.34s cubic-bezier(.4,0,.2,1) forwards;
        }
        .panel-otp-casillas[data-estado="cargando"] .panel-otp-celda:nth-child(1) { --otp-centro: 125px; animation-delay: 0ms; }
        .panel-otp-casillas[data-estado="cargando"] .panel-otp-celda:nth-child(2) { --otp-centro: 75px; animation-delay: 20ms; }
        .panel-otp-casillas[data-estado="cargando"] .panel-otp-celda:nth-child(3) { --otp-centro: 25px; animation-delay: 40ms; }
        .panel-otp-casillas[data-estado="cargando"] .panel-otp-celda:nth-child(4) { --otp-centro: -25px; animation-delay: 40ms; }
        .panel-otp-casillas[data-estado="cargando"] .panel-otp-celda:nth-child(5) { --otp-centro: -75px; animation-delay: 20ms; }
        .panel-otp-casillas[data-estado="cargando"] .panel-otp-celda:nth-child(6) { --otp-centro: -125px; animation-delay: 0ms; }
        @keyframes otpColapsa {
          to { transform: translateX(var(--otp-centro, 0)) scale(0.15); opacity: 0; }
        }
        .panel-otp-sello {
          position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
          animation: otpSelloAparece 0.4s cubic-bezier(.34,1.56,.64,1) 0.26s both;
        }
        @keyframes otpSelloAparece {
          0% { opacity: 0; transform: scale(0.3); }
          100% { opacity: 1; transform: scale(1); }
        }
        .panel-otp-rayos {
          position: absolute; width: 72px; height: 72px; border-radius: 50%;
          background: repeating-conic-gradient(from 0deg, var(--admin-brand) 0deg 6deg, transparent 6deg 45deg);
          -webkit-mask: radial-gradient(circle, transparent 32%, #000 33%, #000 100%);
          mask: radial-gradient(circle, transparent 32%, #000 33%, #000 100%);
          opacity: 0.85;
          animation: otpRayosGirar 1.6s linear infinite;
        }
        @keyframes otpRayosGirar { to { transform: rotate(1turn); } }
        .panel-otp-sello-nucleo {
          position: relative; width: 30px; height: 30px; border-radius: 50%;
          background: var(--admin-brand);
          box-shadow: 0 0 18px 2px rgba(76,126,168,0.55);
          animation: otpNucleoPulso 1.2s ease-in-out infinite;
        }
        @keyframes otpNucleoPulso {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }
        .panel-otp-casillas[data-estado="error"] .panel-otp-casilla {
          border-color: var(--admin-danger);
          box-shadow: inset 0 2px 8px rgba(0,0,0,0.4), 0 0 14px -2px var(--admin-danger-soft);
          animation: otpSacude 0.45s ease-in-out;
        }
        @keyframes otpSacude {
          0%, 100% { transform: translateX(0); }
          15% { transform: translateX(-9px) rotate(-2deg); }
          30% { transform: translateX(8px) rotate(2deg); }
          45% { transform: translateX(-6px); }
          60% { transform: translateX(5px); }
          75% { transform: translateX(-2px); }
        }
        /* Momento de éxito: reemplaza las casillas (ver PanelOtp.jsx) por un
           check dibujándose con stroke-dashoffset — mismo lenguaje de
           "candado que se abre" que ya tenía CandadoEstado, pero como
           protagonista de toda la tarjeta, no un ícono chico. */
        .panel-otp-exito {
          display: flex; flex-direction: column; align-items: center; gap: 12px;
          padding: 12px 0 6px;
          animation: otpExitoEntra 0.4s cubic-bezier(.34,1.56,.64,1) both;
        }
        @keyframes otpExitoEntra {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        .panel-otp-check {
          color: var(--admin-success);
          filter: drop-shadow(0 0 14px rgba(79,174,122,0.55));
        }
        .panel-otp-check-circulo {
          stroke-dasharray: 201; stroke-dashoffset: 201;
          animation: otpDibujar 0.5s ease-out forwards;
        }
        .panel-otp-check-marca {
          stroke-dasharray: 42; stroke-dashoffset: 42;
          animation: otpDibujar 0.35s ease-out 0.45s forwards;
        }
        @keyframes otpDibujar { to { stroke-dashoffset: 0; } }
        .panel-otp-exito-texto {
          font-family: 'Space Grotesk', 'Inter', system-ui, sans-serif;
          font-weight: 700; font-size: 16px; color: #F5F1E8; margin: 0;
        }
        .panel-otp-reenviar {
          display: block; margin: 14px auto 0; background: none; border: none;
          font-family: inherit; font-size: 13px; font-weight: 600;
          color: var(--admin-brand-deep); cursor: pointer;
        }
        .panel-otp-reenviar:disabled { color: rgba(140,140,150,0.6); cursor: default; }

        @media (prefers-reduced-motion: reduce) {
          .acceso-blob { animation: none; }
          .acceso-tilt { transition: none; }
          .panel-acceso { transition: none; animation: none; }
          .panel-acceso[data-estado="cargando"] { animation: none; box-shadow: 0 24px 48px -20px rgba(0,0,0,0.6), 0 0 0 5px rgba(76,126,168,0.3); }
          .panel-acceso-insignia::before { animation: none; opacity: 0; }
          .panel-otp-casilla { animation: none; }
          .panel-otp-casilla[data-llena="true"] { animation: none; }
          .panel-otp-casillas[data-estado="error"] .panel-otp-casilla { animation: none; }
          .panel-otp-anillo { animation: none !important; opacity: 0 !important; }
          .panel-otp-casillas[data-estado="cargando"] .panel-otp-celda { animation: none; opacity: 0.35; transform: none; }
          .panel-otp-sello { animation: none; opacity: 1; transform: none; }
          .panel-otp-rayos { animation: none; }
          .panel-otp-sello-nucleo { animation: none; }
          .panel-otp-exito { animation: none; }
          .panel-otp-check-circulo, .panel-otp-check-marca { animation: none; stroke-dashoffset: 0; }
        }

        /* ── Paneles admin: fondo oscuro + navegación entre secciones ──
           Ver PanelNavSeccion.jsx. Mobile-first: pestañas horizontales por
           defecto, barra lateral desde 768px (mismo corte que ya usa el
           fix de .pantalla-splash). Los overrides de .seguro-input/
           .seguro-label viven ANTES del bloque de PanelAcceso más arriba
           (ver su comentario, hallazgo I2) — acá solo queda el fondo base y
           lo que no compite con .panel-acceso. */
        .panel-admin-fondo {
          min-height: 100vh; min-height: 100dvh;
          background: var(--admin-bg);
        }
        .panel-admin-fondo .subrotulo { color: var(--admin-mute); }

        /* Ancho del contenido admin — celular 540px (como el resto del
           sitio), más aire en pantallas grandes en vez de quedarse angosto
           para siempre. La ficha de un establecimiento y el dashboard de
           "Establecimientos" comparten esta misma escala. */
        .panel-admin-ancho { max-width: 540px; }
        @media (min-width: 768px) { .panel-admin-ancho { max-width: 720px; } }
        @media (min-width: 1100px) { .panel-admin-ancho { max-width: 1040px; } }

        /* Dashboard de Establecimientos: buscar/abrir vs crear nuevo, cada
           uno en su propia tarjeta — apiladas en celular, lado a lado desde
           tablet/desktop donde ya sobra ancho para las dos a la vez. */
        .panel-admin-grid { display: flex; flex-direction: column; gap: 20px; }
        @media (min-width: 860px) {
          .panel-admin-grid { flex-direction: row; align-items: flex-start; }
          .panel-admin-grid > .panel-admin-card { flex: 1; min-width: 0; }
        }
        .panel-admin-card {
          background: var(--admin-bg-soft);
          border: 1px solid var(--admin-line);
          border-radius: var(--admin-r-lg);
          padding: 18px;
        }
        /* A 320px, el padding de 18px le quitaba a un .fila-2 de 2 fechas
           dentro de una tarjeta el margen que sí tenía cuando el mismo
           campo vivía pegado al borde del panel (input type=date no se
           angosta más allá de cierto punto, ver overflow-audit.mjs). */
        @media (max-width: 400px) {
          .panel-admin-card { padding: 14px 12px; }
        }
        .panel-admin-autocompletar {
          display: flex; flex-direction: column; gap: 6px;
          max-height: 420px; overflow-y: auto;
        }
        .panel-admin-autocompletar-item {
          background: var(--admin-bg-elevated); border: 1px solid var(--admin-line);
          border-radius: var(--admin-r-sm); padding: 10px 12px;
          cursor: pointer; text-align: left; width: 100%;
          transition: border-color 0.15s, transform 0.1s;
        }
        .panel-admin-autocompletar-item:hover { border-color: var(--admin-brand); }
        .panel-admin-autocompletar-item:active { transform: scale(0.99); }
        .panel-admin-chip {
          flex: 0 0 auto; font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.04em; padding: 2px 8px; border-radius: var(--admin-r-full);
          white-space: nowrap;
        }
        .panel-admin-chip-ok { color: var(--admin-success); background: var(--admin-success-soft); }
        .panel-admin-chip-mal { color: var(--admin-danger); background: var(--admin-danger-soft); }

        /* Pestañas de nivel superior del admin general (Establecimientos /
           Estadísticas) — distintas de .panel-nav (esas son DENTRO de la
           ficha de un establecimiento: Datos/Anuncios/Administrativos/
           Acceso/Estadísticas). */
        .panel-admin-tabs {
          display: flex; gap: 4px; margin-bottom: 20px;
          border-bottom: 1px solid var(--admin-line);
        }
        .panel-admin-tabs-item {
          font-family: inherit; font-size: 16px; font-weight: 700;
          color: var(--admin-mute); background: none; border: none;
          padding: 10px 4px; cursor: pointer;
          border-bottom: 2px solid transparent;
        }
        .panel-admin-tabs-item.activa { color: var(--admin-brand-deep); border-bottom-color: var(--admin-brand); }

        .panel-admin-cuerpo { display: flex; flex-direction: column; }
        .panel-admin-contenido { flex: 1; min-width: 0; }
        .panel-nav {
          display: flex; flex-direction: row; gap: 4px; overflow-x: auto;
          border-bottom: 1px solid var(--admin-line);
          margin-bottom: 18px;
          /* 6 secciones no entran en 360-375px — sin esto se cortaban a
             mitad de palabra en el borde, sin ninguna pista de que se podía
             deslizar (medido con Playwright, "Datos administrativos" activa
             dejaba "Acceso"/"Estadísticas"/"Trámite" totalmente fuera de
             pantalla). El degradado en los bordes es la señal de que hay
             más pestañas, se mantiene fija sin importar el scroll. */
          -webkit-mask-image: linear-gradient(to right, transparent, #000 14px, #000 calc(100% - 14px), transparent);
          mask-image: linear-gradient(to right, transparent, #000 14px, #000 calc(100% - 14px), transparent);
        }
        .panel-nav-item {
          flex: 0 0 auto; font-family: inherit; font-size: 15px; font-weight: 700;
          color: var(--admin-mute); background: none; border: none;
          padding: 10px 12px; cursor: pointer; white-space: nowrap;
          border-bottom: 2px solid transparent;
        }
        .panel-nav-item.activa { color: var(--admin-brand-deep); border-bottom-color: var(--admin-brand); }
        .panel-nav-item:focus-visible { outline: 2px solid var(--admin-brand); outline-offset: -2px; }
        @media (min-width: 768px) {
          .panel-admin-cuerpo { flex-direction: row; align-items: flex-start; }
          .panel-nav {
            flex-direction: column; overflow-x: visible; border-bottom: none;
            border-right: 1px solid var(--admin-line);
            width: 190px; flex: 0 0 190px; margin: 0 20px 0 0; padding-right: 12px;
            -webkit-mask-image: none; mask-image: none;
          }
          /* "Datos del establecimiento" y "Datos administrativos" no entran
             en una línea a 190px — se permite el wrap a 2 líneas en vez de
             cortarse contra el borde del sidebar (mismo cuidado que ya
             tiene la máscara de scroll en mobile, arriba). */
          .panel-nav-item {
            text-align: left; border-bottom: none; border-radius: var(--r);
            padding: 8px 10px; white-space: normal; line-height: 1.25; font-size: 14px;
          }
          .panel-nav-item.activa { background: var(--admin-brand-soft); border-bottom-color: transparent; }
        }

        /* Revelado del contenido admin (lista/formulario o pestañas) recién
           después del acceso (token/password verificados) — antes de esto
           solo se ve la tarjeta de PanelAcceso. Se dispara solo, al montar
           este div (React lo monta apenas autenticado pasa a true), mismo
           patrón que panelEntra más arriba: sin librería, solo CSS + mount. */
        .panel-admin-revela { animation: panelAdminRevela 0.38s cubic-bezier(0.23,1,0.32,1) both; }
        @keyframes panelAdminRevela {
          0% { opacity: 0; transform: translateY(14px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .panel-admin-revela { animation: none; }
        }

        /* ── Impresión del CITT: solo se ve el área imprimible ── */
        @media print {
          body * { visibility: hidden !important; }
          .citt-print-overlay,
          .citt-print-overlay * { visibility: visible !important; }
          .citt-print-overlay {
            position: fixed !important; inset: 0 !important;
            background: white !important;
            padding: 0 !important;
            display: block !important;
          }
          .citt-print-overlay > div {
            box-shadow: none !important;
            border-radius: 0 !important;
            max-width: none !important;
            width: 100% !important;
            max-height: none !important;
            overflow: visible !important;
            padding: 20px !important;
          }
          .citt-print-controls { display: none !important; }
          .citt-print-area {
            border: 1.5px solid #000 !important;
            page-break-inside: avoid;
          }
        }

        .spinner { animation: spinner-rot 0.9s linear infinite; }

        @media (prefers-reduced-motion: reduce) {
          .fade { transition: opacity 0.15s linear; }
          .hide { transform: none; }
          .card-tramite, .card-tramite-modern, .btn-si, .btn-no, .btn-opcion,
          .btn-alerta, .btn-volver, .btn-voz, .btn-continuar {
            transition: none !important;
          }
          .btn-continuar:active, .btn-opcion:active, .btn-alerta:active, .btn-volver:active,
          .card-tramite:active, .card-tramite-modern:active,
          .btn-si:active, .btn-no:active, .btn-voz:active {
            transform: none !important;
          }
          .paso-punto, .paso-punto.activo, .paso-punto.completado { transition: none; transform: none; }
          .banner-resultado.completado { animation: none; }
          .flow-icono-alerta { animation: none; }
          .btn-voz.speaking { animation: none; box-shadow: 0 0 0 4px rgba(160,64,64,0.35); }
          .acepto-check { animation: none; }
        }
      `}),t!==`verificando_qr`&&t!==`qr_invalido`&&t!==`admin_qr`&&t!==`admin_avance`&&t!==`admin_establecimientos`&&t!==`admin_establecimiento`&&t!==`crm_costos`&&t!==`splash`&&t!==`seguro_cargando`&&t!==`citt_cargando`&&t!==`lactancia_cargando`&&(0,P.jsxs)(`header`,{style:{background:`rgba(239,230,213,0.94)`,backdropFilter:`blur(10px)`,borderTop:`4px solid var(--brand)`,borderBottom:`1px solid var(--rule)`,padding:`12px 20px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:12,position:`sticky`,top:0,zIndex:10},children:[(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,P.jsx)(`div`,{style:{background:`var(--brand)`,borderRadius:3,width:40,height:40,display:`flex`,alignItems:`center`,justifyContent:`center`,fontWeight:800,fontSize:14,color:`#fff`,letterSpacing:`-0.02em`,flex:`0 0 auto`},children:`DA`}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`div`,{style:{color:`var(--brand)`,fontWeight:800,fontSize:18,lineHeight:1.1,letterSpacing:`-0.02em`},children:`digitalasistent`}),(0,P.jsx)(`div`,{style:{color:`var(--mute-deep)`,fontSize:14,fontWeight:500,lineHeight:1.3},children:`Orientación de trámites`})]})]}),t!==`inicio`&&t!==`identidad`&&t!==`splash`&&t!==`elegir_establecimiento`&&(0,P.jsx)(`button`,{onClick:$,style:{background:`var(--sheet)`,border:`1px solid var(--line)`,borderBottom:`2px solid var(--rule)`,borderRadius:`var(--r)`,color:`var(--body)`,fontFamily:`inherit`,fontWeight:600,fontSize:16,padding:`9px 14px`,cursor:`pointer`,minHeight:44,display:`flex`,alignItems:`center`,justifyContent:`center`,flex:`0 0 auto`},children:`← Inicio`})]}),t===`qr_invalido`&&(()=>{let e={vencido:{titulo:`Este código QR ya venció`,mensaje:`Pide al personal del hospital que te muestre el código actualizado de la sala de espera. Mientras tanto, puedes usar el asistente desde aquí.`},sin_conexion:{titulo:`No pudimos verificar tu acceso`,mensaje:`Revisa tu conexión a internet e intenta de nuevo.`}}[r]||{titulo:`Este código no funcionó`,mensaje:`Puede que el enlace se haya copiado incompleto. Puedes usar el asistente igual desde aquí.`};return r&&r!==`falta_token`&&r!==`invalido`?(0,P.jsx)(`div`,{style:{minHeight:`100vh`,display:`flex`,flexDirection:`column`},children:(0,P.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,textAlign:`center`,gap:12,padding:`20px`},children:[(0,P.jsx)(`span`,{style:{color:`#5B4FE9`},children:(0,P.jsx)(F,{name:`sin_senal`,size:44})}),(0,P.jsx)(`h1`,{style:{fontSize:21,fontWeight:700,color:`#0D253D`,lineHeight:1.3},children:e.titulo}),(0,P.jsx)(`p`,{style:{fontSize:15,fontWeight:500,color:`#33475B`,lineHeight:1.5,maxWidth:`42ch`},children:e.mensaje}),(0,P.jsx)(L,{audioSrc:`/audio/qr_invalido.mp3`,titulo:`Doña Rosa te explica qué hacer`}),r!==`sin_conexion`&&(0,P.jsx)(`button`,{className:`btn-continuar`,onClick:()=>{X(),n(`splash`)},children:`Usar el asistente igual →`}),r===`sin_conexion`&&(0,P.jsx)(`button`,{className:`btn-continuar`,onClick:()=>window.location.reload(),children:`Intentar de nuevo`})]})}):(0,P.jsxs)(`div`,{className:`landing`,children:[(0,P.jsx)(`svg`,{className:`ldefs`,"aria-hidden":`true`,focusable:`false`,children:(0,P.jsxs)(`defs`,{children:[(0,P.jsxs)(`filter`,{id:`ldesgaste`,children:[(0,P.jsx)(`feTurbulence`,{type:`fractalNoise`,baseFrequency:`0.045`,numOctaves:`4`,seed:`7`,result:`ruido`}),(0,P.jsx)(`feDisplacementMap`,{in:`SourceGraphic`,in2:`ruido`,scale:`2.6`,xChannelSelector:`R`,yChannelSelector:`G`})]}),(0,P.jsxs)(`filter`,{id:`ldesgaste-chico`,children:[(0,P.jsx)(`feTurbulence`,{type:`fractalNoise`,baseFrequency:`0.07`,numOctaves:`3`,seed:`3`,result:`ruido`}),(0,P.jsx)(`feDisplacementMap`,{in:`SourceGraphic`,in2:`ruido`,scale:`1.6`,xChannelSelector:`R`,yChannelSelector:`G`})]})]})}),(0,P.jsx)(`style`,{children:`
              /* ── Landing: dirección "carpeta de trámites" ──────────────────
                 La página ES el fólder que la persona va a llevar al hospital:
                 fondo de cartón manila, hojas encima, pestañas de archivador,
                 talón perforado y un sello de goma que se estampa.

                 De la referencia (wise) se conserva lo único que estaba bien y
                 no se toca: la ESCALA tipográfica (display pesado con tracking
                 negativo + cuerpo en 400). Lo que se reemplaza es su estructura
                 de bandas planas, que es exactamente lo que hacía leer la
                 portada como plantilla generada.

                 Reglas que no se negocian (PRODUCT.md): NADA por debajo de
                 14px, incluidas las micro-etiquetas en versalitas — el público
                 es de adultos mayores y una versalita a 13px es justo lo que no
                 alcanzan a leer. Blancos de toque de 44px, y todo el movimiento
                 apagado bajo prefers-reduced-motion. Nada depende de :hover.

                 Única excepción, y es dibujo, no texto: los renglones dentro
                 del sello de goma (.lsello, aria-hidden). Es la ilustración de
                 un sello; agrandarla revienta el anillo y no hay nada que leer
                 ahí que no esté escrito en tamaño normal al lado.

                 OJO: este bloque es un template literal de JS. Nada de acentos
                 graves acá adentro, ni en los comentarios: cortan la cadena y
                 la portada entera deja de renderizar. */
              .landing {
                /* Papeles */
                --manila: #FFFFFF;      /* cartón claro: el fondo de la página */
                --manila-2: #F6F9FC;    /* la hoja de abajo, se ve por el doblez */
                --sheet: #F6F9FC;       /* la hoja */
                --line: #E3E8EE;        /* filete de papel */
                --rule: #A8C3DE;        /* filete fuerte / regla de documento */
                --carton: #0D253D;      /* cartón prensado del fólder */
                --carton-txt: #F6F9FC;
                --carton-mute: #A8C3DE;

                /* Tinta — un punto más oscura que antes porque ahora el fondo
                   es manila y no crema: así el cuerpo se mantiene sobre 7:1. */
                --ink: #0D253D;
                --body: #33475B;
                --mute: #5B6B7D;
                /* Mismo caso que --brand-deep: --mute como TEXTO cae
                   debajo del piso de 7:1 — revisión de contraste del
                   2026-09-02. --mute-deep (7.7:1) es la variante para eso. */
                --mute-deep: #425567;

                /* Marca (DESIGN.md, sin tocar) */
                --brand: #5B4FE9;
                --brand-deep: #4434D4;
                --brand-soft: #EDEBFE;

                --s1: 4px; --s2: 8px; --s3: 12px; --s4: 16px;
                --s5: 24px; --s6: 32px; --s7: 48px; --s8: 64px;
                --banda: clamp(28px, 4vw, 44px);
                --r: 10px;

                /* Sombras de papel: duras y cortas. Una hoja no flota. */
                --sh-1: 0 1px 0 rgba(110,88,54,.22), 0 2px 3px -1px rgba(50,38,20,.14);
                --sh-2: 0 1px 0 rgba(110,88,54,.26), 0 8px 16px -8px rgba(50,38,20,.40);
                --sh-lift: 0 2px 0 rgba(110,88,54,.30), 0 16px 28px -12px rgba(50,38,20,.50);

                --mono: ui-monospace, "SF Mono", "SFMono-Regular", "Roboto Mono", "DejaVu Sans Mono", monospace;

                min-height: 100vh; color: var(--body);
                background-color: var(--manila);
              }
              .landing .ldefs { position: absolute; width: 0; height: 0; overflow: hidden; }
              .landing .lwrap { max-width: 1080px; margin: 0 auto; padding: 0 var(--s4); }

              .lband { padding: var(--banda) 0; position: relative; }
              /* Cartón prensado: un canalado muy tenue que lo separa de "un div negro". */
              .lband--carton {
                background-color: var(--carton);
                background-image: repeating-linear-gradient(90deg, rgba(255,255,255,.022) 0 2px, transparent 2px 7px);
                color: var(--carton-txt);
              }

              /* ── Hoja: la unidad de todo lo demás ── */
              .lhoja {
                background-color: var(--sheet);
                border: 1px solid var(--line);
                border-radius: var(--r);
                box-shadow: var(--sh-2);
              }

              /* ── Nav: el lomo del fólder ── */
              .lnav {
                position: sticky; top: 0; z-index: 50;
                background: rgba(239,230,213,.94);
                backdrop-filter: blur(8px);
                border-top: 4px solid var(--brand);
                border-bottom: 1px solid var(--rule);
              }
              .lnav-row {
                max-width: 1080px; margin: 0 auto; padding: var(--s2) var(--s4);
                display: flex; align-items: center; justify-content: space-between; gap: var(--s4);
                min-height: 58px;
              }
              .lnav-link {
                color: var(--body); font-size: 15px; font-weight: 600; text-decoration: none;
                min-height: 44px; display: inline-flex; align-items: center; gap: 6px;
                border-bottom: 2px solid transparent;
              }
              .lnav-link:hover { color: var(--brand); border-bottom-color: var(--brand); }
              .lnav-link:focus-visible { outline: 3px solid var(--brand); outline-offset: 3px; }

              /* ── Micro-etiqueta ── */
              /* text-align: left explícito porque .lhero-txt centra su texto
                 hasta los 900px: sin esto, en ~320–390px de ancho el rótulo no
                 entra en una sola línea y la segunda línea queda centrada bajo
                 la primera, suelta del guioncito de al lado. */
              .leyebrow {
                display: inline-flex; align-items: center; gap: var(--s2);
                font-family: var(--mono);
                font-size: 14px; font-weight: 600;
                letter-spacing: 0.14em; text-transform: uppercase; color: var(--mute-deep);
                margin-bottom: var(--s3); text-align: left;
              }
              .leyebrow::before {
                content: ""; width: 18px; height: 2px; background: var(--brand); flex: none;
              }

              /* ── Héroe ── */
              .lhero-grid { display: grid; gap: var(--s5); align-items: center; }
              .lhero-txt { text-align: center; }
              .lh1 {
                font-size: clamp(32px, 5.2vw, 44px); line-height: 1.05; font-weight: 800;
                color: var(--brand); letter-spacing: -0.035em;
                margin: 0; max-width: 20ch; text-wrap: balance;
              }
              .lhero-txt .lh1 { margin-inline: auto; }
              /* El resaltado deja de ser marcador fluorescente y pasa a ser el
                 subrayado a mano de quien revisa un expediente. */
              .lh1-em { position: relative; white-space: nowrap; }
              .lh1-em::after {
                content: ""; position: absolute; left: -2px; right: -2px; bottom: -2px;
                height: 6px; border-radius: 3px;
                background: #F5B85A;
                filter: url(#ldesgaste-chico);
              }
              .lhero-sub {
                font-size: clamp(16px, 2.1vw, 19px); line-height: 1.35; font-weight: 400;
                color: var(--body); margin: var(--s3) 0 0; max-width: 36ch; text-wrap: pretty;
              }
              .lhero-txt .lhero-sub { margin-inline: auto; }

              /* ── Botón ── */
              /* Es un <a> y no un <button>: ver el comentario en el marcado. De ahí
                 el text-decoration y el color explícitos. */
              .lcta {
                display: inline-flex; align-items: center; justify-content: center; gap: 10px;
                text-decoration: none;
                min-height: 54px; padding: 0 var(--s5); margin-top: var(--s4);
                border: none; border-radius: var(--r); cursor: pointer; font-family: inherit;
                background: var(--brand); color: #fff;
                font-weight: 600; font-size: 19px; letter-spacing: -0.01em;
                box-shadow: 0 3px 0 var(--brand-deep);
                transition: background .15s ease, transform .12s ease, box-shadow .12s ease;
              }
              .lcta:hover { background: var(--brand-deep); }
              /* Se hunde como un sello que se aprieta, no "flota" hacia arriba. */
              .lcta:active { transform: translateY(3px); box-shadow: 0 0 0 var(--brand-deep); }
              .lcta:focus-visible { outline: 3px solid var(--brand); outline-offset: 3px; }
              .lcta-ico {
                display: inline-flex; align-items: center; justify-content: center;
                width: 26px; height: 26px; border-radius: 50%; background: rgba(255,255,255,.20);
              }

              /* ── Casillas de confianza ── */
              .ltrust {
                display: flex; flex-wrap: wrap; justify-content: center;
                gap: var(--s2) var(--s4); margin: var(--s4) 0 0; padding: 0; list-style: none;
              }
              .ltrust li {
                display: flex; align-items: center; gap: var(--s2);
                font-size: 15px; font-weight: 500; color: var(--body);
              }
              .lbox {
                flex: none; width: 22px; height: 22px; border: 2px solid var(--rule);
                border-radius: 2px; background: var(--sheet);
                display: flex; align-items: center; justify-content: center; color: var(--brand);
              }

              /* ── Foto de Rosa: montada con esquineros, no en un halo ── */
              .lrosa-zona { position: relative; width: min(300px, 78vw); margin: 0 auto; }
              .lfoto {
                position: relative; padding: 12px 12px 0; transform: rotate(-1.6deg);
                background-color: var(--sheet);
                border: 1px solid var(--line); border-radius: var(--r);
                box-shadow: var(--sh-2);
              }
              .lfoto img {
                display: block; width: 100%; height: auto; aspect-ratio: 1;
                object-fit: cover; object-position: 50% 14%;
                background: var(--brand-soft); border-radius: 2px;
              }
              .lfoto-pie {
                font-family: var(--mono); font-size: 14px; letter-spacing: 0.1em;
                text-transform: uppercase; color: var(--mute-deep);
                text-align: center; padding: var(--s3) 0 var(--s4); margin: 0;
              }
              /* Esquineros de álbum: cuatro triángulos. Sin imágenes. */
              .lfoto::before, .lfoto::after,
              .lfoto > .lesq-a, .lfoto > .lesq-b {
                content: ""; position: absolute; width: 22px; height: 22px;
                background: rgba(99,86,63,.34); pointer-events: none;
              }
              .lfoto::before { top: 12px; left: 12px; clip-path: polygon(0 0, 100% 0, 0 100%); }
              .lfoto::after  { top: 12px; right: 12px; clip-path: polygon(0 0, 100% 0, 100% 100%); }
              .lfoto > .lesq-a { left: 12px; clip-path: polygon(0 0, 0 100%, 100% 100%); }
              .lfoto > .lesq-b { right: 12px; clip-path: polygon(100% 0, 0 100%, 100% 100%); }
              /* Los de abajo se anclan al borde inferior de la imagen, que
                 termina donde empieza el pie. */
              .lfoto > .lesq-a, .lfoto > .lesq-b { bottom: calc(var(--alto-pie)); }

              /* ── El sello: el objeto de firma de la página ── */
              /* Va estampado en el cartón, al lado de la foto — NO encima de
                 ella: el chaleco de Rosa es del mismo granate que el sello y el
                 texto del arco se volvía ilegible sobre la ilustración.
                 En móvil no hay margen lateral, así que ahí baja a la esquina. */
              .lsello {
                position: absolute; right: -16px; top: -22px; width: 116px; height: 116px;
                color: var(--brand); filter: url(#ldesgaste);
                opacity: .88; transform: rotate(-13deg); pointer-events: none;
              }
              .lsello text { font-family: var(--mono); font-weight: 700; fill: currentColor; }

              /* ── Encabezados de sección ── */
              .lsec-head { max-width: 620px; margin: 0 0 var(--s4); }
              .lh2 {
                font-size: clamp(24px, 3.4vw, 34px); font-weight: 700; color: var(--ink);
                margin: 0; letter-spacing: -0.025em; line-height: 1.15;
              }
              .lsec-sub {
                font-size: 16px; font-weight: 400; line-height: 1.35;
                color: var(--body); margin: var(--s2) 0 0;
              }

              /* ── Secciones secundarias replegadas ── */
              .lplegable > summary {
                position: relative; list-style: none; cursor: pointer;
                padding: var(--s4) 52px var(--s4) var(--s4);
                background: var(--sheet); border: 1px solid var(--line);
                border-radius: var(--r); box-shadow: var(--sh-1);
              }
              .lplegable > summary::-webkit-details-marker { display: none; }
              .lplegable > summary::after {
                content: "+"; position: absolute; right: var(--s4); top: 50%;
                width: 28px; height: 28px; transform: translateY(-50%);
                display: grid; place-items: center; border: 1px solid var(--rule);
                border-radius: 50%; color: var(--brand); font-size: 20px; font-weight: 600;
              }
              .lplegable[open] > summary::after { content: "−"; }
              .lplegable > summary .leyebrow { margin-bottom: var(--s1); font-size: 12px; }
              .lplegable-titulo {
                display: block; color: var(--ink); font-size: clamp(20px, 3vw, 27px);
                font-weight: 700; line-height: 1.1; letter-spacing: -0.02em;
              }
              .lplegable-ayuda {
                display: block; margin-top: var(--s1); color: var(--mute-deep);
                font-size: 13px; line-height: 1.25;
              }
              .lplegable[open] > summary { margin-bottom: var(--s3); }

              /* ── Los tres pasos: un talón de tres cuerpos, no tres tarjetas ── */
              .ltalon {
                list-style: none; margin: 0; padding: 0; display: grid;
                background-color: var(--sheet);
                border: 1px solid var(--line); border-radius: var(--r);
                box-shadow: var(--sh-2);
              }
              .ltalon-item { position: relative; padding: var(--s4); }
              /* La perforación entre cuerpos: agujeros del color del fondo.
                 (Iban además dos medias lunas mordiendo el borde; en pantalla
                 se leían como dos burbujas flotando encima del talón, así que
                 fuera: la línea perforada sola ya dice "talón".) */
              .ltalon-item + .ltalon-item::before {
                content: ""; position: absolute; pointer-events: none;
              }
              .lpaso-n {
                display: inline-flex; align-items: center; justify-content: center;
                min-width: 40px; height: 40px; padding: 0 8px;
                border: 2px solid var(--brand); border-radius: 2px;
                color: var(--brand); background: transparent;
                font-family: var(--mono); font-size: 17px; font-weight: 700;
                font-variant-numeric: tabular-nums;
                transform: rotate(-3deg); filter: url(#ldesgaste-chico);
                margin-bottom: var(--s4);
              }
              .lpaso-t {
                display: block; font-size: 18px; font-weight: 600; color: var(--ink);
                line-height: 1.3; letter-spacing: -0.015em;
              }
              .lpaso-d {
                display: block; font-size: 16px; font-weight: 400; color: var(--body);
                line-height: 1.35; margin-top: var(--s1);
              }

              /* ── Fichas de expediente ── */
              .lfichas { display: grid; gap: var(--s5) var(--s4); }
              /* Columna flexible, no grid: el pie de la ficha se va al fondo con
                 margin-top auto, así el plazo de las cuatro queda a la misma
                 altura aunque el detalle ocupe uno o dos renglones. */
              .lficha {
                position: relative; margin-top: 23px;
                display: flex; flex-direction: column; gap: var(--s2);
                padding: var(--s3) var(--s4);
                text-decoration: none;
                background-color: var(--sheet);
                border: 1px solid var(--line); border-radius: var(--r);
                box-shadow: var(--sh-1);
                transition: transform .16s cubic-bezier(.22,1,.36,1), box-shadow .16s ease;
              }
              /* La pestaña del archivador: lo que hace que se lea como fólder
                 y no como tarjeta. Lleva el color del trámite (DESIGN.md). */
              .lficha-tab {
                position: absolute; top: -23px; left: 20px; height: 24px;
                display: inline-flex; align-items: center; padding: 0 12px;
                background: var(--c); color: #fff;
                border-radius: 3px 3px 0 0;
                font-family: var(--mono); font-size: 14px; font-weight: 700;
                letter-spacing: 0.1em; text-transform: uppercase;
              }
              .lficha:hover { transform: translateY(-3px) rotate(-.3deg); box-shadow: var(--sh-lift); }
              .lficha:active { transform: none; box-shadow: var(--sh-1); }
              .lficha:focus-visible { outline: 3px solid var(--c); outline-offset: 3px; }
              /* La esquina doblada: encima del ángulo, mitad transparente
                 (se ve la ficha) y mitad manila (se ve lo que hay debajo). */
              .lficha::after {
                content: ""; position: absolute; right: -1px; bottom: -1px;
                width: 34px; height: 34px; pointer-events: none;
                background: linear-gradient(135deg,
                  rgba(0,0,0,0) 49.2%, var(--rule) 49.2%, var(--rule) 50.4%, var(--manila-2) 50.4%);
              }
              /* --c es para fondo/ícono/badge (tab, borde de ícono, foco). El
                 CTA de texto (.lficha-go) necesita --c-texto: la revisión de
                 contraste del 2026-09-02 encontró que canje e informe caían
                 debajo del piso de 7:1 que el proyecto ya tenía como texto.
                 historia/online ya pasaban con --c solo, así que --c-texto
                 se redeclara igual para que no hereden un valor ajeno. Canje
                 además deja de compartir el hex de la ancla del sitio (los
                 dos eran #8B1E3F) y pasa a tener su propio color, igual que
                 los otros 7 trámites. */
              .lficha--canje    { --c: #C81E4E; --c-texto: #901638; }
              .lficha--historia { --c: #4A3F7A; --c-texto: #4A3F7A; }
              .lficha--online   { --c: #2D5D80; --c-texto: #2D5D80; }
              .lficha-fila { display: flex; align-items: center; gap: var(--s4); }
              /* El ícono deja el círculo pastel y pasa a caja de sello. */
              .lficha-ico {
                flex: none; width: 46px; height: 46px; border-radius: 2px;
                border: 2px solid var(--c); color: var(--c);
                display: flex; align-items: center; justify-content: center;
              }
              .lficha-t {
                flex: 1; font-size: 18px; font-weight: 600; color: var(--ink);
                line-height: 1.3; letter-spacing: -0.015em;
              }
              .lficha-d {
                font-size: 15px; font-weight: 400; color: var(--body); line-height: 1.35;
              }
              /* El filete punteado cruza toda la ficha y debajo van las dos
                 cosas que se comparan entre trámites: cuánto demora y la
                 entrada a la guía. */
              .lficha-pie {
                margin-top: auto; display: flex; align-items: center;
                justify-content: space-between; gap: var(--s3); flex-wrap: wrap;
                border-top: 1px dashed var(--line); padding-top: var(--s3);
              }
              .lficha-plazo {
                font-family: var(--mono); font-size: 14px; font-weight: 700;
                color: var(--mute-deep); letter-spacing: 0.02em;
                font-variant-numeric: tabular-nums;
              }
              .lficha-go {
                display: flex; align-items: center; gap: 6px;
                font-size: 15px; font-weight: 600; color: var(--c-texto, var(--c));
              }
              .lficha-go svg { transition: transform .16s ease; }
              .lficha:hover .lficha-go svg { transform: translateX(3px); }

              /* ── Marco normativo: un documento sobre el cartón ── */
              .ldoc {
                position: relative;
                background-color: var(--sheet);
                border-radius: var(--r);
                box-shadow: 0 18px 34px -14px rgba(0,0,0,.55);
                padding: var(--s3);
                /* Filete doble del membrete oficial. */
                border-top: 4px solid var(--brand);
              }
              .ldoc::before {
                content: ""; position: absolute; left: 0; right: 0; top: 3px;
                height: 1px; background: var(--brand); opacity: .45;
              }
              .ldoc > summary { box-shadow: none; }
              .ldoc .lh2, .ldoc .lsec-sub { color: var(--ink); }
              .ldoc .lsec-sub { color: var(--body); }
              .lnormas { list-style: none; display: grid; gap: 0; margin: 0; padding: 0; }
              .lnorma {
                display: grid; gap: var(--s1);
                border-top: 1px solid var(--line); padding: var(--s3) 0;
              }
              .lnorma-t {
                font-family: var(--mono); font-size: 15px; font-weight: 700; color: var(--ink);
                letter-spacing: 0.02em; font-variant-numeric: tabular-nums;
              }
              .lnorma-d { font-size: 14px; font-weight: 400; color: var(--body); line-height: 1.35; }
              /* Sello chico del documento, hermano del sello del héroe. */
              .ldoc-sello {
                position: absolute; right: clamp(var(--s5), 5vw, var(--s8)); top: var(--s6);
                display: none;
                font-family: var(--mono); font-size: 14px; font-weight: 700;
                letter-spacing: 0.12em; text-transform: uppercase;
                color: var(--brand); border: 2px solid var(--brand); border-radius: 2px;
                padding: 6px 10px; transform: rotate(-8deg); opacity: .8;
                filter: url(#ldesgaste-chico);
              }

              /* ── Pie: el mismo cartón que el marco normativo ── */
              .lfoot-grid { display: grid; gap: var(--s4); }
              .lfoot h3 {
                font-family: var(--mono);
                font-size: 14px; font-weight: 700; letter-spacing: 0.14em;
                text-transform: uppercase; color: var(--carton-mute); margin: 0 0 var(--s2);
              }
              .lfoot ul { list-style: none; margin: 0; padding: 0; display: grid; gap: var(--s1); }
              .lfoot a {
                color: var(--carton-txt); font-size: 15px; font-weight: 400; text-decoration: none;
                min-height: 44px; display: inline-flex; align-items: center;
              }
              .lfoot a:hover { color: #fff; text-decoration: underline; }
              .lfoot-legal {
                margin-top: var(--s4); padding-top: var(--s3);
                border-top: 1px solid rgba(255,255,255,.14);
                font-size: 11px; line-height: 1.3; color: var(--carton-mute); max-width: 72ch;
              }
              .laviso { font-size: 11px; font-weight: 400; line-height: 1.3; margin: 0; max-width: 72ch; }
              .laviso summary { cursor: pointer; color: var(--carton-mute); }
              .laviso summary strong { color: var(--carton-txt); font-weight: 600; }
              .laviso p { margin: var(--s1) 0 0; }

              /* ── Apilado (móvil y tablet) ── */
              @media (max-width: 899px) {
                .lhero-txt { max-width: 34rem; margin-inline: auto; }
                .lsec-head { text-align: center; margin-inline: auto; }
                .lsec-head .lsec-sub { margin-inline: auto; max-width: 42ch; }
                .ldoc .lsec-head { text-align: left; }
                /* Talón apilado: la perforación corre en horizontal. */
                .ltalon-item + .ltalon-item::before {
                  left: 14px; right: 14px; top: -1px; height: 3px;
                  background-image: radial-gradient(circle, var(--manila-2) 2.2px, transparent 2.5px);
                  background-size: 11px 3px; background-position: 0 0;
                }
                .ltalon-item + .ltalon-item { padding-top: var(--s6); }
              }

              /* ── Escritorio ── */
              @media (min-width: 900px) {
                .lhero-grid { grid-template-columns: 1.05fr 0.95fr; }
                .lhero-txt { text-align: left; }
                .lhero-txt .lh1, .lhero-txt .lhero-sub { margin-inline: 0; }
                .ltrust { justify-content: flex-start; }
                .ltalon { grid-template-columns: repeat(3, 1fr); }
                .ltalon-item + .ltalon-item::before {
                  top: 14px; bottom: 14px; left: -1px; width: 3px;
                  background-image: radial-gradient(circle, var(--manila-2) 2.2px, transparent 2.5px);
                  background-size: 3px 11px;
                }
                /* En escritorio sí hay margen libre a la izquierda de la foto:
                   ahí el sello se apoya en manila limpio y se lee entero. */
                .lsello { left: -70px; right: auto; bottom: 22px; top: auto; }
                .lfichas { grid-template-columns: repeat(2, 1fr); }
                .lnormas { grid-template-columns: repeat(2, 1fr); column-gap: var(--s7); }
                .ldoc-sello { display: block; }
                .lfoot-grid { grid-template-columns: 1.6fr 1fr 1fr; }
              }

              /* ── Movimiento ─────────────────────────────────────────────────
                 Todo es CSS: cero JS, cero librerías, y todo se apaga entero
                 con prefers-reduced-motion. Nada secuestra el scroll. */
              @media (prefers-reduced-motion: no-preference) {
                .landing [data-rise] { opacity: 0; transform: translateY(14px); animation: lrise .55s cubic-bezier(.22,1,.36,1) forwards; }

                /* El sello se estampa: baja, aprieta y se asienta. El "golpe"
                   lo dan los keyframes (pasa por scale .95), no la curva: un
                   sello de goma no rebota hacia arriba, se frena en seco. */
                .lsello {
                  opacity: 0;
                  animation: lestampar .42s cubic-bezier(.16,1,.3,1) .85s forwards;
                }

                /* Stagger al abrir las secciones plegables: los ítems entran
                   uno tras otro, reforzando la sensación de "desplegar". */
                .lplegable[open] .ltalon-item,
                .lplegable[open] .lnorma {
                  opacity: 0;
                  transform: translateY(10px);
                  animation: litemEntra 0.38s cubic-bezier(.22,1,.36,1) forwards;
                }
                .lplegable[open] .ltalon-item:nth-child(1) { animation-delay: 0ms; }
                .lplegable[open] .ltalon-item:nth-child(2) { animation-delay: 70ms; }
                .lplegable[open] .ltalon-item:nth-child(3) { animation-delay: 140ms; }
                .lplegable[open] .lnorma:nth-child(1) { animation-delay: 0ms; }
                .lplegable[open] .lnorma:nth-child(2) { animation-delay: 60ms; }
                .lplegable[open] .lnorma:nth-child(3) { animation-delay: 120ms; }
                .lplegable[open] .lnorma:nth-child(4) { animation-delay: 180ms; }

                /* Brillo sutil en el CTA principal al pasar el cursor: un
                   botón de acción tiene que invitar, pero sin flotar. */
                .lcta:hover {
                  box-shadow: 0 3px 0 var(--brand-deep), 0 8px 20px -6px rgba(91,79,233,.35);
                }
              }
              @keyframes lrise { to { opacity: 1; transform: none; } }
              @keyframes litemEntra { to { opacity: 1; transform: none; } }
              @keyframes lestampar {
                0%   { opacity: 0; transform: rotate(-19deg) scale(1.75); }
                60%  { opacity: .95; transform: rotate(-12deg) scale(.95); }
                100% { opacity: .88; transform: rotate(-13deg) scale(1); }
              }

              /* ── Reveal-on-scroll de las tres secciones (useRevelado) ── */
              .revela {
                opacity: 0;
                transform: translateY(16px);
                transition: opacity 500ms ease-out, transform 500ms ease-out;
              }
              .revela.visto {
                opacity: 1;
                transform: none;
              }
              @media (prefers-reduced-motion: reduce) {
                .revela { opacity: 1; transform: none; transition: none; }
                .lplegable[open] .ltalon-item,
                .lplegable[open] .lnorma { opacity: 1; transform: none; animation: none; }
                .landing [data-rise] { animation: none; opacity: 1; transform: none; }
                .lsello { animation: none; opacity: .88; }
              }

              /* ── Mesh gradient del héroe ── */
              .lhero-band {
                position: relative;
                overflow: hidden;
              }
              .lhero-mesh {
                position: absolute; inset: 0; z-index: 0; overflow: hidden; pointer-events: none;
              }
              .lhero-mesh::before, .lhero-mesh::after {
                content: ""; position: absolute; width: 55%; aspect-ratio: 1; border-radius: 50%;
                filter: blur(70px); opacity: 0.35;
              }
              .lhero-mesh::before { background: #5B4FE9; top: -15%; left: -8%; animation: lheroFlota1 26s ease-in-out infinite alternate; }
              .lhero-mesh::after  { background: #0B6E77; bottom: -20%; right: -10%; animation: lheroFlota2 30s ease-in-out infinite alternate; }
              @keyframes lheroFlota1 { to { transform: translate(6%, 8%) scale(1.12); } }
              @keyframes lheroFlota2 { to { transform: translate(-8%, -6%) scale(1.08); } }
              @media (prefers-reduced-motion: reduce) {
                .lhero-mesh::before, .lhero-mesh::after { animation: none; }
              }
              .lhero-band > .lwrap { position: relative; z-index: 1; }
            `}),(0,P.jsx)(`header`,{className:`lnav`,children:(0,P.jsxs)(`div`,{className:`lnav-row`,children:[(0,P.jsx)(Cn,{size:20}),(0,P.jsx)(`a`,{className:`lnav-link`,href:`/tramites.html`,children:`Todas las guías`})]})}),(0,P.jsx)(_n,{}),(0,P.jsxs)(`main`,{children:[(0,P.jsxs)(`section`,{className:`lband lhero-band`,children:[(0,P.jsx)(`div`,{className:`lhero-mesh`,"aria-hidden":`true`}),(0,P.jsx)(`div`,{className:`lwrap`,children:(0,P.jsxs)(`div`,{className:`lhero-grid`,children:[(0,P.jsxs)(`div`,{className:`lhero-txt`,children:[(0,P.jsx)(`span`,{className:`leyebrow`,"data-rise":!0,children:`Orientación de trámites de salud`}),(0,P.jsxs)(`h1`,{className:`lh1`,"data-rise":!0,style:{animationDelay:`60ms`},children:[`Trámites de salud, `,(0,P.jsx)(`span`,{className:`lh1-em`,children:`explicados con calma`})]}),(0,P.jsx)(`p`,{className:`lhero-sub`,"data-rise":!0,style:{animationDelay:`120ms`},children:`Doña Rosa te dice qué documentos llevar y a qué área ir. Una pregunta a la vez, en voz alta.`}),(0,P.jsxs)(`a`,{className:`lcta`,href:`/?asistente=1`,"data-rise":!0,style:{animationDelay:`180ms`},onClick:e=>{e.preventDefault(),X(),n(`splash`)},children:[(0,P.jsx)(`span`,{className:`lcta-ico`,"aria-hidden":`true`,children:(0,P.jsx)(F,{name:`play`,size:13})}),`Empezar ahora`]}),(0,P.jsx)(`ul`,{className:`ltrust`,"data-rise":!0,style:{animationDelay:`240ms`},children:[`Gratis`,`Con guía de voz`,`Sin registrarte`].map(e=>(0,P.jsxs)(`li`,{children:[(0,P.jsx)(`span`,{className:`lbox`,"aria-hidden":`true`,children:(0,P.jsx)(F,{name:`check`,size:15})}),e]},e))})]}),(0,P.jsxs)(`div`,{"data-rise":!0,style:{animationDelay:`120ms`},children:[(0,P.jsxs)(`div`,{className:`lrosa-zona`,children:[(0,P.jsxs)(`figure`,{className:`lfoto`,style:{margin:0,"--alto-pie":`45px`},children:[(0,P.jsx)(`span`,{className:`lesq-a`,"aria-hidden":`true`}),(0,P.jsx)(`span`,{className:`lesq-b`,"aria-hidden":`true`}),(0,P.jsx)(`img`,{src:`/guia/rosa-320.jpg`,srcSet:`/guia/rosa-320.jpg 320w, /guia/rosa-640.jpg 640w`,sizes:`(min-width: 900px) 300px, 240px`,width:`320`,height:`320`,decoding:`async`,alt:`Doña Rosa, tu orientadora con guía de voz`}),(0,P.jsx)(`figcaption`,{className:`lfoto-pie`,children:`Doña Rosa · orientadora`})]}),(0,P.jsxs)(`svg`,{className:`lsello`,viewBox:`0 0 120 120`,"aria-hidden":`true`,focusable:`false`,children:[(0,P.jsx)(`defs`,{children:(0,P.jsx)(`path`,{id:`lsello-arco-sup`,d:`M60,60 m-44,0 a44,44 0 1,1 88,0`,fill:`none`})}),(0,P.jsx)(`circle`,{cx:`60`,cy:`60`,r:`55`,fill:`none`,stroke:`currentColor`,strokeWidth:`3.5`}),(0,P.jsx)(`circle`,{cx:`60`,cy:`60`,r:`47`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,P.jsx)(`text`,{fontSize:`10`,letterSpacing:`0.6`,children:(0,P.jsx)(`textPath`,{href:`#lsello-arco-sup`,startOffset:`50%`,textAnchor:`middle`,textLength:`132`,lengthAdjust:`spacing`,children:`ORIENTACIÓN GRATUITA`})}),(0,P.jsx)(`path`,{d:`M31 46 h58 M31 86 h58`,stroke:`currentColor`,strokeWidth:`1.6`}),(0,P.jsx)(`text`,{x:`60`,y:`64`,fontSize:`14`,textAnchor:`middle`,letterSpacing:`0.5`,children:`EN VOZ`}),(0,P.jsx)(`text`,{x:`60`,y:`80`,fontSize:`14`,textAnchor:`middle`,letterSpacing:`0.5`,children:`ALTA`})]})]}),(0,P.jsx)(`p`,{className:`lfoto-pie`,style:{marginTop:28,textTransform:`none`,letterSpacing:0,fontFamily:`inherit`,fontSize:15,padding:0},children:`¿Estás en el hospital? Escanea el código QR de la sala de espera.`})]})]})})]}),(0,P.jsx)(yn,{}),(0,P.jsx)(bn,{}),(0,P.jsx)(xn,{})]}),(0,P.jsx)(`footer`,{className:`lband lband--carton lfoot`,children:(0,P.jsxs)(`div`,{className:`lwrap`,children:[(0,P.jsxs)(`div`,{className:`lfoot-grid`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h3`,{children:`digitalasistent`}),(0,P.jsxs)(`details`,{className:`laviso`,children:[(0,P.jsxs)(`summary`,{children:[(0,P.jsx)(`strong`,{children:`Plataforma independiente`}),` · ver detalle`]}),(0,P.jsx)(`p`,{children:`No es un aplicativo oficial de EsSalud ni del Ministerio de Salud, y no tiene vínculo ni respaldo de ninguna entidad del Estado.`})]})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h3`,{children:`Guías`}),(0,P.jsxs)(`ul`,{children:[(0,P.jsx)(`li`,{children:(0,P.jsx)(`a`,{href:`/tramites.html`,children:`Todas las guías`})}),(0,P.jsx)(`li`,{children:(0,P.jsx)(`a`,{href:`/tramites/validacion-descanso-medico.html`,children:`Descanso médico`})}),(0,P.jsx)(`li`,{children:(0,P.jsx)(`a`,{href:`/tramites/tramites-en-linea.html`,children:`Trámites desde el celular`})})]})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h3`,{children:`Legal`}),(0,P.jsx)(`ul`,{children:(0,P.jsx)(`li`,{children:(0,P.jsx)(`a`,{href:`/privacidad.html`,children:`Política de privacidad`})})})]})]}),(0,P.jsx)(`p`,{className:`lfoot-legal`,children:`Su único objetivo es presentar, orientar y explicar la información de forma más cálida y accesible para la población. Ante cualquier diferencia, manda lo que indique el establecimiento de salud donde te atiendes.`})]})})]})})(),t!==`qr_invalido`&&(0,P.jsx)(`main`,{children:(0,P.jsxs)(`div`,{className:`pantalla-entra`,children:[t===`verificando_qr`&&(0,P.jsx)(gn,{frase:`Estamos preparando tu asistente…`,espacio:(0,P.jsx)(Sn,{conCarrusel:!1})}),t===`admin_qr`&&(0,P.jsxs)(`div`,{style:{maxWidth:420,margin:`0 auto`,padding:`40px 20px 60px`},children:[(0,P.jsx)(`h1`,{style:{fontSize:20,fontWeight:700,color:`#0D253D`,marginBottom:4,textAlign:`center`},children:`Generar QR de sala de espera`}),(0,P.jsx)(`p`,{style:{fontSize:14,fontWeight:600,color:`#425567`,marginBottom:20,textAlign:`center`},children:`Herramienta interna — no es parte del asistente para pacientes.`}),(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`admin-password`,children:`Contraseña`}),(0,P.jsx)(`input`,{id:`admin-password`,type:`password`,className:`seguro-input`,style:{marginBottom:14},value:_,onChange:e=>v(e.target.value)}),(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`admin-duracion`,children:`Válido por`}),(0,P.jsx)(`div`,{style:{display:`flex`,gap:8,marginBottom:14},children:[{n:`24 h`,v:24},{n:`72 h`,v:72},{n:`1 semana`,v:168}].map(e=>(0,P.jsx)(`button`,{onClick:()=>b(e.v),style:{flex:1,padding:`12px 8px`,background:y===e.v?`#0D253D`:`var(--sheet)`,color:y===e.v?`white`:`#0D253D`,border:`2px solid ${y===e.v?`#0D253D`:`#A8C3DE`}`,borderRadius:`var(--r)`,cursor:`pointer`,fontFamily:`inherit`,fontWeight:600,fontSize:14},children:e.n},e.v))}),(0,P.jsx)(`input`,{id:`admin-duracion`,type:`number`,inputMode:`numeric`,className:`seguro-input`,style:{marginBottom:14,fontSize:15},placeholder:`O escribí una cantidad de horas personalizada`,value:[24,72,168].includes(y)?``:y,onChange:e=>b(Number(e.target.value.replace(/\D/g,``))||0)}),(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`admin-qr-slug`,children:`Establecimiento (opcional)`}),(0,P.jsx)(`p`,{style:{fontSize:12,color:`#5B6B7D`,marginTop:-6,marginBottom:8},children:`Si lo dejas vacío, el QR es el genérico de siempre. Con un slug, la persona que lo escanea entra directo a ese hospital, sin elegir.`}),(0,P.jsx)(`input`,{id:`admin-qr-slug`,type:`text`,className:`seguro-input`,style:{marginBottom:14,fontSize:15},placeholder:`Ej: viru`,value:x,onChange:e=>S(e.target.value)}),C&&(0,P.jsx)(`div`,{style:{background:`#F7E9EF`,border:`2px solid #A32B3E`,borderRadius:`var(--r)`,padding:`12px 14px`,marginBottom:14},children:(0,P.jsx)(`p`,{style:{fontSize:14,fontWeight:500,color:`#A32B3E`},children:C})}),(0,P.jsx)(`button`,{onClick:no,disabled:T||!_||!y,style:{width:`100%`,border:`none`,borderRadius:`var(--r)`,background:`#0D253D`,color:`white`,fontFamily:`inherit`,fontWeight:700,fontSize:16,padding:16,cursor:`pointer`,opacity:T||!_||!y?.5:1},children:T?`Generando…`:`Generar QR`}),D&&(0,P.jsxs)(`div`,{style:{marginTop:24,background:`#F6F9FC`,border:`1px solid var(--line)`,borderRadius:`var(--r)`,padding:18,textAlign:`center`},children:[(0,P.jsx)(`img`,{src:D.qrImprimible,alt:`Código QR generado`,style:{width:`100%`,maxWidth:280,borderRadius:3}}),(0,P.jsx)(`p`,{style:{fontSize:13,fontWeight:500,color:`#425567`,marginTop:12,wordBreak:`break-all`},children:D.url}),(0,P.jsxs)(`p`,{style:{fontSize:13,fontWeight:500,color:`#227A4A`,marginTop:6},children:[`Válido hasta `,new Date(D.expiraEn*1e3).toLocaleString(`es-PE`,{timeZone:`America/Lima`,dateStyle:`full`,timeStyle:`short`})]}),(0,P.jsxs)(`a`,{href:D.qrImprimible,download:`qr-sala-espera-hasta-${new Date(D.expiraEn*1e3).toISOString().slice(0,10)}.png`,style:{display:`block`,marginTop:14,padding:14,borderRadius:`var(--r)`,background:`#E5F5EC`,border:`2px solid #227A4A`,color:`#227A4A`,fontFamily:`inherit`,fontWeight:700,fontSize:15,textDecoration:`none`},children:[(0,P.jsx)(F,{name:`descarga`,size:20}),` Descargar imagen`]}),(0,P.jsxs)(`a`,{href:D.qrImprimible,target:`_blank`,rel:`noopener noreferrer`,style:{display:`block`,marginTop:8,padding:12,borderRadius:`var(--r)`,background:`transparent`,border:`2px solid #A8C3DE`,color:`#0D253D`,fontFamily:`inherit`,fontWeight:600,fontSize:14,textDecoration:`none`},children:[(0,P.jsx)(F,{name:`lupa`,size:18}),` Abrir imagen sola`]}),(0,P.jsx)(`p`,{style:{fontSize:12,fontWeight:600,color:`#425567`,marginTop:8,lineHeight:1.4},children:`Si "Descargar imagen" no hace nada (pasa en algunos celulares), tocá "Abrir imagen sola" y desde ahí mantené presionada la imagen para guardarla.`})]})]}),t===`admin_avance`&&(0,P.jsxs)(`div`,{style:{maxWidth:540,margin:`0 auto`,padding:`40px 20px 60px`},children:[(0,P.jsx)(`h1`,{style:{fontSize:20,fontWeight:700,color:`#0D253D`,marginBottom:4,textAlign:`center`},children:`Administrar avance de trámite`}),(0,P.jsx)(`p`,{style:{fontSize:14,fontWeight:600,color:`#425567`,marginBottom:20,textAlign:`center`},children:`Herramienta interna — actualiza la fase del expediente de canje.`}),(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`admin-avance-token`,children:`Token de administrador`}),(0,P.jsx)(`input`,{id:`admin-avance-token`,type:`password`,className:`seguro-input`,style:{marginBottom:14},value:O,onChange:e=>go(e.target.value),placeholder:`Ingresa el token configurado en Vercel`}),(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`admin-avance-tipo`,children:`Tipo de documento`}),(0,P.jsxs)(`select`,{id:`admin-avance-tipo`,className:`seguro-input`,style:{marginBottom:14,appearance:`auto`},value:k,onChange:e=>ne(e.target.value),children:[(0,P.jsx)(`option`,{value:`1`,children:`DNI`}),(0,P.jsx)(`option`,{value:`2`,children:`Carné de extranjería`}),(0,P.jsx)(`option`,{value:`3`,children:`PTP`}),(0,P.jsx)(`option`,{value:`4`,children:`Pasaporte`})]}),(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`admin-avance-num`,children:`Número de documento`}),(0,P.jsx)(`input`,{id:`admin-avance-num`,type:`text`,inputMode:`numeric`,className:`seguro-input`,style:{marginBottom:14},value:re,onChange:e=>ie(e.target.value.replace(/[^0-9]/g,``)),placeholder:`Ej: 12345678`}),(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`admin-avance-nro`,children:`Número de trámite (opcional)`}),(0,P.jsx)(`input`,{id:`admin-avance-nro`,type:`text`,inputMode:`numeric`,className:`seguro-input`,style:{marginBottom:18},value:ae,onChange:e=>oe(e.target.value.replace(/[^0-9]/g,``)),placeholder:`Ej: 20260012345`}),(0,P.jsx)(`button`,{onClick:_o,disabled:ce||!O||!re,style:{width:`100%`,border:`none`,borderRadius:`var(--r)`,background:`#0D253D`,color:`white`,fontFamily:`inherit`,fontWeight:700,fontSize:16,padding:16,cursor:`pointer`,opacity:ce||!O||!re?.5:1,marginBottom:14},children:ce?`Consultando…`:`Consultar estado actual`}),j&&(0,P.jsxs)(`div`,{style:{background:`#F6F9FC`,border:`1px solid var(--line)`,borderRadius:`var(--r)`,padding:14,marginBottom:14},children:[(0,P.jsxs)(`p`,{style:{fontSize:14,fontWeight:600,color:`#0D253D`,margin:0},children:[`Estado actual: `,(0,P.jsx)(`span`,{style:{color:nr},children:j.estado})]}),j.nroTramite&&(0,P.jsxs)(`p`,{style:{fontSize:13,color:`#5B6B7D`,margin:`4px 0 0`},children:[`Trámite N° `,j.nroTramite]}),j.creadoEn&&(0,P.jsxs)(`p`,{style:{fontSize:12,color:`#9AA5B1`,margin:`4px 0 0`},children:[`Creado: `,new Date(j.creadoEn).toLocaleString(`es-PE`,{timeZone:`America/Lima`,dateStyle:`short`,timeStyle:`short`})]}),j.actualizadoEn&&(0,P.jsxs)(`p`,{style:{fontSize:12,color:`#9AA5B1`,margin:`4px 0 0`},children:[`Actualizado: `,new Date(j.actualizadoEn).toLocaleString(`es-PE`,{timeZone:`America/Lima`,dateStyle:`short`,timeStyle:`short`})]}),j.expiresAt&&(0,P.jsxs)(`p`,{style:{fontSize:12,color:`#9B1C31`,margin:`4px 0 0`},children:[`Se elimina el: `,new Date(j.expiresAt).toLocaleString(`es-PE`,{timeZone:`America/Lima`,dateStyle:`short`,timeStyle:`short`})]})]}),(0,P.jsx)(`label`,{className:`seguro-label`,htmlFor:`admin-avance-estado`,children:`Nuevo estado`}),(0,P.jsxs)(`select`,{id:`admin-avance-estado`,className:`seguro-input`,style:{marginBottom:18,appearance:`auto`},value:A,onChange:e=>se(e.target.value),children:[(0,P.jsx)(`option`,{value:`en_espera`,children:`1. Expediente en espera`}),(0,P.jsx)(`option`,{value:`en_revision`,children:`2. Expediente en revisión`}),(0,P.jsx)(`option`,{value:`observado`,children:`3a. Expediente observado`}),(0,P.jsx)(`option`,{value:`concluido`,children:`3b. Revisión concluida`})]}),(0,P.jsx)(`button`,{onClick:vo,disabled:ce||!O||!re,style:{width:`100%`,border:`none`,borderRadius:`var(--r)`,background:er,color:`white`,fontFamily:`inherit`,fontWeight:700,fontSize:16,padding:16,cursor:`pointer`,opacity:ce||!O||!re?.5:1},children:ce?`Guardando…`:`Actualizar estado`}),ue&&(0,P.jsx)(`div`,{style:{background:`#F7E9EF`,border:`2px solid #A32B3E`,borderRadius:`var(--r)`,padding:`12px 14px`,marginTop:14},children:(0,P.jsx)(`p`,{style:{fontSize:14,fontWeight:500,color:`#A32B3E`,margin:0},children:ue})}),fe&&!ue&&(0,P.jsx)(`div`,{style:{background:`#E5F5EC`,border:`2px solid #227A4A`,borderRadius:`var(--r)`,padding:`12px 14px`,marginTop:14},children:(0,P.jsx)(`p`,{style:{fontSize:14,fontWeight:500,color:`#227A4A`,margin:0},children:fe})})]}),t===`crm_costos`&&(0,P.jsx)(un,{}),t===`admin_establecimientos`&&(0,P.jsx)(qt,{token:M,onGuardarToken:yo,lista:R,listaFiltrada:So,listaLoading:Re,listaError:Be,onListar:()=>bo(M),busqueda:z,setBusqueda:tt,editandoSlug:rt,onAbrirEdicion:Co,onCerrarEdicion:wo,seccion:nn,onCambiarSeccion:an,editHorario:ot,setEditHorario:ct,editTelefono:ut,setEditTelefono:dt,editAviso:pt,setEditAviso:mt,editEstribillo:Nt,setEditEstribillo:Pt,editEstribilloDesde:Ft,setEditEstribilloDesde:It,editEstribilloHasta:Lt,setEditEstribilloHasta:Rt,editCorreo:V,setEditCorreo:zt,editCorreoAcceso:Bt,setEditCorreoAcceso:Vt,editDireccion:Ut,setEditDireccion:Wt,editFacebook:Gt,setEditFacebook:Kt,editTiktok:Jt,setEditTiktok:H,editAnuncios:ht,setEditAnuncios:_t,editPopup:vt,setEditPopup:B,editCargando:yt,editCargaFallo:jt,editGuardando:xt,editExito:Ot,editError:Ct,editMensaje:Tt,onGuardarInfo:To,resetPasswordNueva:U,setResetPasswordNueva:Yt,accesoLoading:Xt,accesoError:Qt,accesoMensaje:en,onResetearPassword:Eo,onRevocarAcceso:Do,onReactivarAcceso:Oo,nuevoSlug:ge,setNuevoSlug:N,nuevoNombre:_e,setNuevoNombre:ve,nuevoPassword:ye,setNuevoPassword:be,nuevoCorreo:xe,setNuevoCorreo:Se,onCrear:xo,crearLoading:Ce,crearExito:Ae,crearError:Te,crearMensaje:De,otpEnviado:He,otpVerificado:We,otpCargando:qe,otpError:Ye,otpReenviarDisponibleEn:Ze,otpIntentoKey:$e,onOtpVerificar:Ha,onOtpReenviar:Va}),t===`admin_establecimiento`&&(0,P.jsx)(Ht,{slug:W,seccion:cn,onCambiarSeccion:dn,nombre:mn,horario:Tn,setHorario:En,telefono:Dn,setTelefono:On,aviso:kn,setAviso:Mn,estribillo:Pn,setEstribillo:Fn,estribilloDesde:In,setEstribilloDesde:dr,estribilloHasta:fr,setEstribilloHasta:pr,correo:vr,setCorreo:yr,direccion:br,setDireccion:xr,facebook:Sr,setFacebook:Cr,tiktok:wr,setTiktok:Tr,passwordActual:Er,setPasswordActual:Dr,passwordNueva:Or,setPasswordNueva:kr,cambiandoPassword:Ar,cambioPasswordError:Mr,cambioPasswordMensaje:Pr,cambioPasswordExito:Ir,onCambiarPassword:Ao,password:fn,setPassword:pn,loading:Hr,error:Wr,mensaje:Kr,exito:Jr,onGuardar:ko,anuncios:Rr,onCambioAnuncios:zr,popup:Br,onCambioPopup:Vr,existeEstablecimiento:vn,passwordVerificada:Xr,accesoCargando:Qr,accesoError:ei,onEntrar:()=>Ba(fn),otpEnviado:ni,otpVerificado:ii,otpCargando:oi,otpError:ci,otpReenviarDisponibleEn:ui,otpIntentoKey:fi,onOtpVerificar:Wa,onOtpReenviar:Ua,mostrarRecuperar:mi,onMostrarRecuperar:hi,recuperarEnviado:gi,recuperarCargando:vi,recuperarError:bi,recuperarExito:Ei,recuperarReenviarDisponibleEn:Si,recuperarIntentoKey:wi,onRecuperarEnviar:Ga,onRecuperarVerificar:Ka}),t===`splash`&&(0,P.jsxs)(`div`,{className:`pantalla-splash`,style:{display:`flex`,flexDirection:`column`,alignItems:`center`,maxWidth:540,margin:`0 auto`,padding:`16px 0 20px`},children:[(0,P.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:8,padding:`0 20px`,textAlign:`center`},children:[(0,P.jsx)(Cn,{size:26}),(0,P.jsx)(`h1`,{style:{fontSize:15,fontWeight:700,color:`#425567`,maxWidth:`32ch`},children:`Te ayuda a saber qué necesitas para tu trámite, paso a paso.`}),(0,P.jsx)(An,{}),(0,P.jsx)(`div`,{style:{width:`100%`,maxWidth:260,height:10,background:`var(--manila-2)`,borderRadius:3,overflow:`hidden`},children:(0,P.jsx)(`div`,{style:{width:`100%`,height:`100%`,background:`#0D253D`,transformOrigin:`left center`,transform:`scaleX(${p/100})`,transition:`transform ${sr}ms linear`}})}),(0,P.jsx)(`button`,{className:`btn-continuar`,onClick:()=>{c?n(`identidad`):(f(`identidad`),n(`elegir_establecimiento`))},style:{visibility:h?`visible`:`hidden`},children:`Continuar →`})]}),(0,P.jsx)(`div`,{style:{marginTop:10,width:`100%`},children:(0,P.jsx)(Sn,{slug:u})})]}),t===`elegir_establecimiento`&&(0,P.jsx)(at,{onConfirmar:e=>{s(e),n(d)}}),t===`identidad`&&(0,P.jsxs)(`div`,{style:{maxWidth:540,margin:`0 auto`,padding:`18px 16px 30px`},children:[(0,P.jsx)(I,{rotulo:`Antes de empezar`,titulo:`Ingresa tus datos`,margen:12}),(0,P.jsx)(L,{audioSrc:`/audio/identidad.mp3`,titulo:`Doña Rosa te explica cómo llenar tus datos`}),(0,P.jsxs)(`div`,{style:{marginBottom:14},children:[(0,P.jsx)(`label`,{className:`seguro-label`,children:`Tipo de documento`}),(0,P.jsx)(`div`,{style:{display:`flex`,gap:8},children:[{v:`1`,n:`DNI`},{v:`2`,n:`PTP`},{v:`3`,n:`C.E.`}].map(e=>(0,P.jsx)(`button`,{onClick:()=>{Bi({...K,tipoDoc:e.v,numDoc:``,digitoVerif:``}),Hi(!1),Wi(!1)},style:{flex:1,padding:`12px 10px`,background:K.tipoDoc===e.v?`#5B4FE9`:`var(--sheet)`,color:K.tipoDoc===e.v?`white`:`#0D253D`,border:`3px solid ${K.tipoDoc===e.v?`#5B4FE9`:`#A8C3DE`}`,borderRadius:`var(--r)`,cursor:`pointer`,fontFamily:`inherit`,fontWeight:700,fontSize:16,transition:`all 0.13s`},children:e.n},e.v))})]}),(0,P.jsxs)(`div`,{style:{marginBottom:14},children:[(0,P.jsxs)(`label`,{className:`seguro-label`,htmlFor:`identidad-num-doc`,children:[`Número de `,K.tipoDoc===`1`?`DNI`:K.tipoDoc===`2`?`PTP`:`Carnet de Extranjería`]}),(0,P.jsx)(`input`,{id:`identidad-num-doc`,type:`text`,inputMode:`numeric`,pattern:`[0-9]*`,autoComplete:`one-time-code`,"data-lpignore":`true`,"data-form-type":`other`,name:`doc-${$i}`,maxLength:K.tipoDoc===`1`?8:12,className:`seguro-input`,placeholder:K.tipoDoc===`1`?`8 dígitos`:`Tu número`,value:K.numDoc,onFocus:e=>e.target.select(),onChange:e=>{let t=e.target.value.replace(/\D/g,``);Bi({...K,numDoc:t,digitoVerif:``}),Hi(!1),Wi(!1)}})]}),K.tipoDoc===`1`&&(0,P.jsx)(`div`,{style:{marginBottom:14},children:Ui?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(`label`,{className:`seguro-label`,htmlFor:`identidad-digito-verif`,style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,P.jsx)(`span`,{children:`Dígito verificador del DNI`}),(0,P.jsx)(`button`,{onClick:()=>Ki(!Gi),style:{background:`transparent`,border:`none`,color:`#4434D4`,cursor:`pointer`,fontFamily:`inherit`,fontWeight:600,fontSize:14,textDecoration:`underline`},children:Gi?`Ocultar ayuda`:`¿Dónde está?`})]}),Gi&&(0,P.jsxs)(`div`,{style:{background:`#FBF0DE`,border:`2px solid #8A5A17`,borderRadius:`var(--r)`,padding:`12px 14px`,marginBottom:10},children:[(0,P.jsxs)(`p`,{style:{fontSize:14,fontWeight:600,color:`#6B430E`,lineHeight:1.45,marginBottom:8},children:[(0,P.jsx)(F,{name:`bombilla`,size:16}),` El `,(0,P.jsx)(`strong`,{children:`dígito verificador`}),` es el último número de tu DNI, separado por un guión.`]}),(0,P.jsxs)(`div`,{style:{background:`#F6F9FC`,borderRadius:`var(--r)`,padding:`10px`,border:`2px solid #8A5A17`,fontFamily:`monospace`,fontSize:18,fontWeight:700,color:`#4434D4`,textAlign:`center`,letterSpacing:2},children:[`DNI: 12345678 `,(0,P.jsx)(`span`,{style:{color:`#227A4A`},children:`-1`})]}),(0,P.jsxs)(`p`,{style:{fontSize:14,fontWeight:500,color:`#6B430E`,marginTop:8,textAlign:`center`},children:[`En este ejemplo, el dígito verificador es `,(0,P.jsx)(`strong`,{children:`1`})]})]}),(0,P.jsx)(`input`,{id:`identidad-digito-verif`,ref:oa,type:`text`,inputMode:`numeric`,pattern:`[0-9]*`,autoComplete:`one-time-code`,"data-lpignore":`true`,"data-form-type":`other`,maxLength:1,className:`seguro-input`,placeholder:`1 dígito`,style:{textAlign:`center`,fontSize:28},value:K.digitoVerif,onFocus:e=>e.target.select(),onChange:e=>{let t=e.target.value.replace(/\D/g,``);Bi({...K,digitoVerif:t}),t.length===1&&eo(sa)}})]}):Vi?(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:10,padding:`14px 16px`,background:`#E5F5EC`,border:`2px solid #227A4A`,borderRadius:`var(--r)`},children:[(0,P.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:10,fontWeight:600,fontSize:15,color:`#227A4A`},children:[(0,P.jsx)(F,{name:`check`,size:19}),` Datos listos`]}),(0,P.jsx)(`button`,{onClick:()=>Wi(!0),style:{background:`transparent`,border:`none`,padding:0,cursor:`pointer`,fontFamily:`inherit`,fontWeight:500,fontSize:14,color:`#227A4A`,textDecoration:`underline`},children:`Corregir`})]}):(0,P.jsx)(`button`,{onClick:()=>{let e=ur(K.numDoc);e!==null&&(Bi({...K,digitoVerif:e}),Hi(!0),K.fecNacimientoDD||eo(sa))},disabled:K.numDoc.length!==8,style:{width:`100%`,borderRadius:`var(--r)`,border:`none`,background:`#5B4FE9`,color:`white`,fontFamily:`inherit`,fontWeight:700,fontSize:17,padding:16,cursor:`pointer`,...K.numDoc.length===8?null:Bn},children:`Verificar DNI`})}),(0,P.jsxs)(`div`,{style:{marginBottom:14},children:[(0,P.jsx)(`span`,{className:`seguro-label`,id:`identidad-fecha-nac-label`,children:`Fecha de nacimiento`}),(0,P.jsxs)(`div`,{role:`group`,"aria-labelledby":`identidad-fecha-nac-label`,style:{display:`flex`,gap:8},children:[(0,P.jsxs)(`div`,{style:{flex:1},children:[(0,P.jsx)(`input`,{ref:sa,type:`text`,inputMode:`numeric`,pattern:`[0-9]*`,autoComplete:`off`,"data-lpignore":`true`,"data-form-type":`other`,maxLength:2,className:`seguro-input`,placeholder:`DD`,"aria-label":`Día de nacimiento`,style:{textAlign:`center`},value:K.fecNacimientoDD,onFocus:e=>e.target.select(),onChange:e=>{let t=e.target.value.replace(/\D/g,``).slice(0,2);t.length===2&&parseInt(t,10)>31&&(t=`31`),Bi({...K,fecNacimientoDD:t}),(t.length===2||t.length===1&&parseInt(t,10)>3)&&eo(ca)}}),(0,P.jsx)(`div`,{style:{fontSize:14,fontWeight:500,color:`#425567`,textAlign:`center`,marginTop:4},children:`Día`})]}),(0,P.jsxs)(`div`,{style:{flex:1},children:[(0,P.jsx)(`input`,{ref:ca,type:`text`,inputMode:`numeric`,pattern:`[0-9]*`,autoComplete:`off`,"data-lpignore":`true`,"data-form-type":`other`,maxLength:2,className:`seguro-input`,placeholder:`MM`,"aria-label":`Mes de nacimiento`,style:{textAlign:`center`},value:K.fecNacimientoMM,onFocus:e=>e.target.select(),onKeyDown:e=>{e.key===`Backspace`&&K.fecNacimientoMM===``&&(e.preventDefault(),eo(sa))},onChange:e=>{let t=e.target.value.replace(/\D/g,``).slice(0,2);t.length===2&&parseInt(t,10)>12&&(t=`12`),Bi({...K,fecNacimientoMM:t}),(t.length===2||t.length===1&&parseInt(t,10)>1)&&eo(la)}}),(0,P.jsx)(`div`,{style:{fontSize:14,fontWeight:500,color:`#425567`,textAlign:`center`,marginTop:4},children:`Mes`})]}),(0,P.jsxs)(`div`,{style:{flex:1.4},children:[(0,P.jsx)(`input`,{ref:la,type:`text`,inputMode:`numeric`,pattern:`[0-9]*`,autoComplete:`off`,"data-lpignore":`true`,"data-form-type":`other`,maxLength:4,className:`seguro-input`,placeholder:`AAAA`,"aria-label":`Año de nacimiento`,style:{textAlign:`center`},value:K.fecNacimientoAAAA,onFocus:e=>e.target.select(),onKeyDown:e=>{e.key===`Backspace`&&K.fecNacimientoAAAA===``&&(e.preventDefault(),eo(ca))},onChange:e=>Bi({...K,fecNacimientoAAAA:e.target.value.replace(/\D/g,``)})}),(0,P.jsx)(`div`,{style:{fontSize:14,fontWeight:500,color:`#425567`,textAlign:`center`,marginTop:4},children:`Año`})]})]})]}),Mo&&(0,P.jsxs)(`div`,{style:{background:`#FBF0DE`,border:`2px solid #8A5A17`,borderRadius:`var(--r)`,padding:`12px 14px`,marginBottom:14,display:`flex`,alignItems:`flex-start`,gap:10},children:[(0,P.jsx)(`span`,{style:{flexShrink:0,display:`flex`},children:(0,P.jsx)(F,{name:`calendario`,size:18})}),(0,P.jsx)(`p`,{style:{fontSize:14,fontWeight:500,color:`#6B430E`,lineHeight:1.4},children:`Revisa tu fecha de nacimiento: el día, el mes o el año no parecen correctos.`})]}),qi&&(0,P.jsxs)(`div`,{style:{background:`#F7E9EF`,border:`2px solid #A32B3E`,borderRadius:`var(--r)`,padding:`12px 14px`,marginBottom:14,display:`flex`,alignItems:`flex-start`,gap:10},children:[(0,P.jsx)(`span`,{style:{flexShrink:0,color:`#A32B3E`,display:`flex`},children:(0,P.jsx)(F,{name:`alerta`,size:19})}),(0,P.jsx)(`p`,{style:{fontSize:14,fontWeight:500,color:`#A32B3E`,lineHeight:1.4},children:qi})]}),!Yi&&(0,P.jsx)(`button`,{onClick:ro,disabled:No,style:{width:`100%`,border:`none`,borderRadius:`var(--r)`,background:`#5B4FE9`,color:`white`,fontFamily:`inherit`,fontWeight:700,fontSize:19,padding:18,cursor:`pointer`,marginBottom:10,...No?Bn:null},children:`Continuar →`}),Yi&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(`button`,{onClick:()=>{let e=Yi;Xi(null),Ji(``),e===`seguro`&&co(),e===`citt`&&uo(),e===`lactancia`&&po()},disabled:No,style:{width:`100%`,border:`3px solid #5B4FE9`,borderRadius:`var(--r)`,background:`#F6F9FC`,color:`#4434D4`,fontFamily:`inherit`,fontWeight:700,fontSize:17,padding:16,cursor:`pointer`,marginBottom:10,...No?Bn:null},children:[`Reintentar `,Yi===`seguro`?`verificación de seguro`:Yi===`citt`?`consulta de CITT`:`consulta del subsidio de lactancia`]}),(0,P.jsx)(`button`,{onClick:()=>{Xi(null),Ji(``),$()},style:{width:`100%`,border:`none`,background:`transparent`,padding:`10px 4px`,cursor:`pointer`,minHeight:44,fontFamily:`inherit`,fontWeight:500,fontSize:14,color:`#425567`,textDecoration:`underline`},children:`Cancelar y volver al inicio`})]})]}),t===`inicio`&&(0,P.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,maxWidth:540,margin:`0 auto`,padding:`18px 16px 24px`,width:`100%`},children:[(0,P.jsxs)(`div`,{style:{marginBottom:14},children:[(0,P.jsx)(I,{rotulo:`Elige un trámite`,titulo:`¿Qué necesitas hoy?`,margen:8}),(0,P.jsx)(L,{audioSrc:`/audio/inicio.mp3`,titulo:`Doña Rosa te explica las opciones`}),(0,P.jsxs)(`button`,{onClick:$a,style:{background:`transparent`,border:`none`,padding:`10px 4px`,margin:`8px -4px 0`,cursor:`pointer`,minHeight:44,fontFamily:`inherit`,fontWeight:500,fontSize:14,color:`#425567`,textDecoration:`underline`,display:`flex`,alignItems:`center`,gap:6},children:[(0,P.jsx)(F,{name:`persona`,size:18}),` Cambiar de persona`]}),a&&(0,P.jsxs)(`button`,{onClick:()=>{f(`inicio`),n(`elegir_establecimiento`)},style:{background:`transparent`,border:`none`,padding:`10px 4px`,margin:`0 -4px`,cursor:`pointer`,minHeight:44,fontFamily:`inherit`,fontWeight:500,fontSize:14,color:`#425567`,textDecoration:`underline`,display:`flex`,alignItems:`center`,gap:6},children:[(0,P.jsx)(F,{name:`chincheta`,size:18}),` Cambiar de establecimiento (`,a.nombre,`)`]})]}),(0,P.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:10,marginBottom:10},children:jn.map(e=>(0,P.jsxs)(`button`,{className:`card-tramite-modern`,style:{background:`#F6F9FC`,border:`1.5px solid #E3E8EE`,borderRadius:`var(--r)`,padding:`16px 18px`,display:`flex`,alignItems:`center`,gap:14,width:`100%`,textAlign:`left`,cursor:`pointer`,boxShadow:`var(--sh-1)`,transition:`transform 0.15s ease, box-shadow 0.15s ease`,fontFamily:`inherit`},onClick:()=>Za(e.id),children:[(0,P.jsx)(`span`,{style:{width:44,height:44,borderRadius:3,background:e.bg,color:e.color,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0},children:(0,P.jsx)(F,{name:e.icono,size:24})}),(0,P.jsx)(`div`,{style:{flex:1},children:(0,P.jsx)(`div`,{style:{fontSize:16,fontWeight:700,color:e.colorTexto||e.color,lineHeight:1.3,whiteSpace:`pre-line`},children:e.titulo})}),(0,P.jsx)(`span`,{style:{fontSize:18,color:e.colorTexto||e.color,fontWeight:700,flexShrink:0},children:`›`})]},e.id))}),(0,P.jsxs)(`button`,{className:`card-tramite-modern card-tramite-destacado`,onClick:mo,style:{background:tr,border:`2px solid ${er}`,borderRadius:`var(--r)`,padding:`16px 18px`,display:`flex`,alignItems:`center`,gap:14,width:`100%`,textAlign:`left`,cursor:`pointer`,boxShadow:`0 4px 14px -4px rgba(91,79,233,.25)`,transition:`transform 0.15s ease, box-shadow 0.15s ease`,fontFamily:`inherit`,marginBottom:10,position:`relative`,overflow:`hidden`},children:[(0,P.jsx)(`span`,{style:{width:48,height:48,borderRadius:3,background:er,color:`#fff`,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0},children:(0,P.jsx)(F,{name:`grafico`,size:24})}),(0,P.jsxs)(`div`,{style:{flex:1},children:[(0,P.jsx)(`div`,{style:{fontSize:16,fontWeight:700,color:nr,lineHeight:1.3},children:`Revisar avance de trámite`}),(0,P.jsx)(`div`,{style:{fontSize:14,fontWeight:500,color:`#4A3F7A`,marginTop:2,lineHeight:1.3},children:`Consulta en qué etapa está tu solicitud de canje`})]}),(0,P.jsx)(`span`,{style:{fontSize:18,color:nr,fontWeight:700,flexShrink:0},children:`›`})]}),(0,P.jsxs)(`button`,{className:`card-tramite-modern`,style:{background:`#F6F9FC`,border:`1.5px solid #E3E8EE`,borderRadius:`var(--r)`,padding:`16px 18px`,display:`flex`,alignItems:`center`,gap:14,width:`100%`,textAlign:`left`,cursor:`pointer`,boxShadow:`var(--sh-1)`,marginBottom:10,position:`relative`,fontFamily:`inherit`},onClick:ao,children:[(0,P.jsx)(`span`,{style:{width:44,height:44,borderRadius:3,background:Wn,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0},children:(0,P.jsx)(F,{name:`lupa`,size:22})}),(0,P.jsxs)(`div`,{style:{flex:1},children:[(0,P.jsx)(`div`,{style:{fontSize:16,fontWeight:700,color:Gn,lineHeight:1.3},children:`¿Mi seguro está activo?`}),(0,P.jsx)(`div`,{style:{fontSize:14,fontWeight:600,color:`#425567`,marginTop:2,lineHeight:1.3},children:`Verifica con tu DNI en línea`})]})]}),(0,P.jsxs)(`button`,{className:`card-tramite-modern`,style:{background:`#F6F9FC`,border:`1.5px solid #E3E8EE`,borderRadius:`var(--r)`,padding:`16px 18px`,display:`flex`,alignItems:`center`,gap:14,width:`100%`,textAlign:`left`,cursor:`pointer`,boxShadow:`var(--sh-1)`,marginBottom:10,position:`relative`,fontFamily:`inherit`},onClick:lo,children:[(0,P.jsx)(`span`,{style:{width:44,height:44,borderRadius:3,background:qn,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:22,flexShrink:0},children:(0,P.jsx)(F,{name:`medico`,size:22})}),(0,P.jsxs)(`div`,{style:{flex:1},children:[(0,P.jsx)(`div`,{style:{fontSize:16,fontWeight:700,color:Jn,lineHeight:1.3},children:`Consultar mi CITT`}),(0,P.jsx)(`div`,{style:{fontSize:14,fontWeight:600,color:`#425567`,marginTop:2,lineHeight:1.3},children:`Descansos médicos registrados en tu seguro`})]})]}),(0,P.jsxs)(`button`,{className:`card-tramite-modern`,style:{background:`#F6F9FC`,border:`1.5px solid #E3E8EE`,borderRadius:`var(--r)`,padding:`16px 18px`,display:`flex`,alignItems:`center`,gap:14,width:`100%`,textAlign:`left`,cursor:`pointer`,boxShadow:`var(--sh-1)`,marginBottom:10,position:`relative`,fontFamily:`inherit`},onClick:fo,children:[(0,P.jsx)(`span`,{style:{width:44,height:44,borderRadius:3,background:ir,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:22,flexShrink:0},children:(0,P.jsx)(F,{name:`biberon`,size:22})}),(0,P.jsxs)(`div`,{style:{flex:1},children:[(0,P.jsx)(`div`,{style:{fontSize:16,fontWeight:700,color:ar,lineHeight:1.3},children:`Subsidio por lactancia`}),(0,P.jsx)(`div`,{style:{fontSize:14,fontWeight:600,color:`#425567`,marginTop:2,lineHeight:1.3},children:`Consulta el pago automático de EsSalud`})]})]}),(0,P.jsxs)(`button`,{className:`card-tramite-modern`,style:{background:`#F6F9FC`,border:`1.5px solid #E3E8EE`,borderRadius:`var(--r)`,padding:`16px 18px`,display:`flex`,alignItems:`center`,gap:14,width:`100%`,textAlign:`left`,cursor:`pointer`,boxShadow:`var(--sh-1)`,fontFamily:`inherit`},onClick:io,children:[(0,P.jsx)(`span`,{style:{width:44,height:44,borderRadius:3,background:Xn,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:22,flexShrink:0},children:(0,P.jsx)(F,{name:`pdf`,size:24})}),(0,P.jsxs)(`div`,{style:{flex:1},children:[(0,P.jsxs)(`div`,{style:{fontSize:16,fontWeight:700,color:Yn,lineHeight:1.3},children:[`Formulario de Trámite`,`
`,`de Gestión Múltiple`]}),(0,P.jsx)(`div`,{style:{fontSize:14,fontWeight:600,color:`#425567`,marginTop:2,lineHeight:1.3},children:`Descarga y llena en casa`})]}),(0,P.jsx)(`span`,{style:{fontSize:18,color:Yn,fontWeight:700,flexShrink:0},children:`›`})]}),(0,P.jsxs)(`button`,{className:`card-tramite-modern`,style:{background:`#F6F9FC`,border:`1.5px solid #E3E8EE`,borderRadius:`var(--r)`,padding:`16px 18px`,display:`flex`,alignItems:`center`,gap:14,width:`100%`,textAlign:`left`,cursor:`pointer`,boxShadow:`var(--sh-1)`,marginTop:10,fontFamily:`inherit`},onClick:()=>{X(),n(`tramites_online`)},children:[(0,P.jsx)(`span`,{style:{width:44,height:44,borderRadius:3,background:Qn,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:22,flexShrink:0},children:(0,P.jsx)(F,{name:`web`,size:24})}),(0,P.jsxs)(`div`,{style:{flex:1},children:[(0,P.jsx)(`div`,{style:{fontSize:16,fontWeight:700,color:$n,lineHeight:1.3},children:`Trámites en línea`}),(0,P.jsx)(`div`,{style:{fontSize:14,fontWeight:600,color:`#425567`,marginTop:2,lineHeight:1.3},children:`Cosas que puedes hacer sin venir`})]}),(0,P.jsx)(`span`,{style:{fontSize:18,color:$n,fontWeight:700,flexShrink:0},children:`›`})]})]}),t===`tramites_online`&&(0,P.jsxs)(`div`,{style:{maxWidth:540,margin:`0 auto`,padding:`18px 16px 30px`},children:[(0,P.jsx)(I,{rotulo:`Sin venir al hospital`,titulo:`Trámites en línea`,icono:`web`,color:Zn,colorTexto:$n}),(0,P.jsx)(L,{audioSrc:`/audio/tramites_online.mp3`,autoPlay:!0,titulo:`Doña Rosa te explica los trámites en línea`}),(0,P.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:10},children:Pe.map(e=>(0,P.jsxs)(`button`,{className:`card-tramite-modern`,style:{background:`#F6F9FC`,border:`1.5px solid #E3E8EE`,borderRadius:`var(--r)`,padding:`16px 18px`,display:`flex`,alignItems:`center`,gap:14,width:`100%`,textAlign:`left`,cursor:`pointer`,boxShadow:`var(--sh-1)`,fontFamily:`inherit`},onClick:()=>{X(),zi(e.id),n(`online_detalle`)},children:[(0,P.jsx)(`span`,{style:{width:44,height:44,borderRadius:3,background:Qn,color:Zn,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0},children:(0,P.jsx)(F,{name:e.icono,size:22})}),(0,P.jsxs)(`div`,{style:{flex:1},children:[(0,P.jsx)(`div`,{style:{fontSize:16,fontWeight:700,color:$n,lineHeight:1.3},children:e.titulo}),(0,P.jsx)(`div`,{style:{fontSize:14,fontWeight:600,color:`#425567`,marginTop:2,lineHeight:1.3},children:e.subtitulo})]}),(0,P.jsx)(`span`,{style:{fontSize:18,color:$n,fontWeight:700,flexShrink:0},children:`›`})]},e.id))})]}),t===`online_detalle`&&Ri&&(()=>{let e=Fe[Ri];return e?(0,P.jsxs)(`div`,{style:{maxWidth:540,margin:`0 auto`,padding:`18px 16px 30px`},children:[(0,P.jsx)(I,{rotulo:`Trámite en línea`,titulo:e.titulo,icono:e.icono,color:Zn,colorTexto:$n}),(0,P.jsx)(L,{audioSrc:`/audio/online_${e.id}.mp3`,autoPlay:!0,titulo:`Doña Rosa te explica cómo hacerlo`}),(0,P.jsxs)(`div`,{style:{background:`#F6F9FC`,borderRadius:`var(--r)`,border:`1.5px solid #E3E8EE`,padding:`16px 18px`,marginBottom:14},children:[(0,P.jsx)(`p`,{style:{fontSize:15,fontWeight:700,color:`#33475B`,lineHeight:1.5,marginBottom:12},children:e.intro}),(0,P.jsx)(`div`,{className:`subrotulo`,children:`Necesitas`}),(0,P.jsx)(`ul`,{style:{listStyle:`none`,display:`flex`,flexDirection:`column`,gap:8},children:e.requisitos.map(e=>(0,P.jsxs)(`li`,{style:{display:`flex`,alignItems:`center`,gap:10,fontSize:15,fontWeight:700,color:`#33475B`},children:[(0,P.jsx)(`span`,{style:{width:24,height:24,borderRadius:`50%`,background:Qn,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0,fontSize:13},children:`✓`}),e]},e))})]}),(0,P.jsx)(`a`,{className:`pisa`,href:e.url,target:`_blank`,rel:`noopener noreferrer`,style:{display:`flex`,alignItems:`center`,justifyContent:`center`,gap:10,background:Zn,color:`white`,borderRadius:`var(--r)`,padding:16,textDecoration:`none`,fontSize:17,fontWeight:700,marginBottom:10,boxShadow:G},children:e.botonTexto?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(F,{name:`celular`,size:19}),` `,e.botonTexto]}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(F,{name:`web`,size:19}),` Abrir la página de tu seguro`]})}),(0,P.jsx)(`p`,{style:{fontSize:14,fontWeight:500,color:`#425567`,textAlign:`center`,lineHeight:1.4},children:e.nota||`Se abre la Plataforma VIVA de tu seguro. Ahí inicias sesión y sigues los pasos.`}),e.telefonos&&(0,P.jsxs)(`div`,{style:{background:Qn,borderRadius:`var(--r)`,padding:`12px 14px`,marginTop:12},children:[(0,P.jsxs)(`div`,{style:{fontSize:14,fontWeight:700,color:$n,marginBottom:6},children:[(0,P.jsx)(F,{name:`telefono`,size:18}),` O llama por teléfono`]}),e.telefonos.map(e=>(0,P.jsx)(`div`,{style:{fontSize:15,fontWeight:600,color:`#33475B`,lineHeight:1.5},children:e},e))]})]}):null})(),t===`seguro_terminos`&&(0,P.jsxs)(`div`,{style:{maxWidth:540,margin:`0 auto`,padding:`18px 16px 30px`},children:[(0,P.jsx)(I,{rotulo:`Antes de continuar`,titulo:`Consulta de tu seguro`,icono:`lupa`,color:Gn}),(0,P.jsxs)(`div`,{style:{background:`#F6F9FC`,borderRadius:`var(--r)`,border:`3px solid ${Un}`,padding:`16px 16px`,marginBottom:12},children:[(0,P.jsxs)(`p`,{style:{fontSize:17,fontWeight:700,color:`#4434D4`,lineHeight:1.45,marginBottom:14},children:[`Vamos a enviar tu `,(0,P.jsx)(`strong`,{children:`DNI`}),` y tu `,(0,P.jsx)(`strong`,{children:`fecha de nacimiento`}),` a EsSalud para verificar tu seguro.`]}),(0,P.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10},children:[(0,P.jsx)(`span`,{style:{flexShrink:0,color:`#227A4A`,display:`flex`},children:(0,P.jsx)(F,{name:`check`,size:20})}),(0,P.jsxs)(`span`,{style:{fontSize:15,fontWeight:700,color:`#0D253D`,lineHeight:1.35},children:[`Tus datos `,(0,P.jsx)(`strong`,{children:`no se guardan`}),` en esta plataforma`]})]}),(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10},children:[(0,P.jsx)(`span`,{style:{flexShrink:0,color:`#227A4A`,display:`flex`},children:(0,P.jsx)(F,{name:`check`,size:20})}),(0,P.jsxs)(`span`,{style:{fontSize:15,fontWeight:700,color:`#0D253D`,lineHeight:1.35},children:[`Solo se usan para `,(0,P.jsx)(`strong`,{children:`esta consulta`})]})]})]})]}),(0,P.jsx)(L,{audioSrc:`/audio/seguro_terminos.mp3`,titulo:`Doña Rosa te explica este aviso`}),(0,P.jsx)(Vn,{aceptado:ua,onToggle:()=>da(!ua),texto:`He leído y acepto que mis datos se envíen a EsSalud para verificar mi seguro.`}),(0,P.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:10},children:[(0,P.jsx)(`button`,{className:`pisa`,disabled:!ua,onClick:()=>{Ji(``),co()},style:{width:`100%`,border:`none`,borderRadius:`var(--r)`,background:ua?Un:`#A8C3DE`,color:`white`,fontFamily:`inherit`,fontWeight:700,fontSize:19,padding:`18px`,cursor:ua?`pointer`:`not-allowed`,boxShadow:ua?G:`none`,opacity:ua?1:.6,transition:`all 0.15s`},children:`Continuar →`}),(0,P.jsx)(`button`,{className:`btn-volver`,onClick:$,children:`← Volver al inicio`})]}),(0,P.jsxs)(`div`,{style:{marginTop:16,padding:`10px 12px`,background:`var(--manila)`,border:`1px solid var(--line)`,borderRadius:`var(--r)`,fontSize:14,lineHeight:1.5,color:`#425567`},children:[(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6,flexWrap:`wrap`},children:[(0,P.jsx)(`span`,{style:{display:`flex`},children:(0,P.jsx)(F,{name:`ley`,size:17})}),(0,P.jsxs)(`span`,{children:[`Datos protegidos por `,(0,P.jsx)(`strong`,{children:`Ley N° 29733`}),` ·`]}),(0,P.jsx)(`a`,{href:`mailto:Derechos.arco@essalud.gob.pe`,style:{color:Un,fontWeight:700,textDecoration:`underline`},children:`Derechos ARCO`}),(0,P.jsx)(`span`,{children:`·`}),(0,P.jsx)(`button`,{onClick:()=>pa(!fa),style:{background:`transparent`,border:`none`,padding:`10px 4px`,margin:`-10px -4px`,cursor:`pointer`,minHeight:44,fontFamily:`inherit`,fontWeight:500,fontSize:14,color:Un,textDecoration:`underline`},children:fa?`Ocultar detalle`:`Ver detalle`})]}),fa&&(0,P.jsxs)(`div`,{style:{marginTop:10,padding:`10px 12px`,background:`#F6F9FC`,border:`1px solid #E3E8EE`,borderRadius:`var(--r)`,fontSize:14,lineHeight:1.55,color:`#425567`},children:[(0,P.jsxs)(`p`,{style:{marginBottom:5},children:[(0,P.jsx)(`strong`,{children:`Titular:`}),` ESSALUD, Jr. Domingo Cueto 120, Jesús María, Lima. Banco "ASEGURADOS", RNPDP N° 2793-2021-JUS/DGTAIPD-DPDP.`]}),(0,P.jsxs)(`p`,{style:{marginBottom:5},children:[(0,P.jsx)(`strong`,{children:`Finalidad:`}),` verificar cobertura y brindar prestaciones de salud, económicas y sociales.`]}),(0,P.jsxs)(`p`,{style:{marginBottom:5},children:[(0,P.jsx)(`strong`,{children:`Transferencias:`}),` EPS, AFP, ONP, SUSALUD, SUNAT y entidades públicas con convenio.`]}),(0,P.jsxs)(`p`,{children:[(0,P.jsx)(`strong`,{children:`Reclamos:`}),` Autoridad Nacional de Protección de Datos (MINJUS), Calle Scipión Llona 350, Miraflores.`]})]})]})]}),t===`seguro_cargando`&&(0,P.jsx)(gn,{frase:`Estamos revisando tu seguro…`,espacio:(0,P.jsx)(Sn,{slug:u}),listo:na,fraseListo:ia===`identidad`?`Terminamos de revisar. Hay algo que corregir.`:`Listo. Ya tenemos el resultado de tu seguro.`,onContinuar:so}),t===`seguro_resultado`&&ga&&(()=>{let e=ga,r=e.datos||{},i={activo:{bg:`#227A4A`,icono:`check`,titulo:e.titulo,mensaje:e.mensaje,texto:`#F6F9FC`},no_acreditado:{bg:`#8A5A17`,icono:`alerta`,titulo:e.titulo,mensaje:e.mensaje,texto:`#F6F9FC`},no_encontrado:{bg:`#2D5D80`,icono:`pregunta`,titulo:e.titulo,mensaje:e.mensaje,texto:`#F6F9FC`},error_consulta:{bg:`#A32B3E`,icono:`cruz`,titulo:e.titulo,mensaje:e.mensaje,texto:`#F6F9FC`}}[e.estado]||{bg:`#5B6B7D`,icono:`info`,titulo:`Resultado de consulta`,mensaje:e.mensaje||``,texto:`#F6F9FC`},a=r.tipoSeguro&&hr[r.tipoSeguro]?hr[r.tipoSeguro]:null,o=r.tipoAsegurado&&gr[r.tipoAsegurado]?gr[r.tipoAsegurado]:null;return(0,P.jsxs)(`div`,{style:{maxWidth:540,margin:`0 auto`,padding:`14px 16px 30px`},children:[(0,P.jsxs)(`div`,{style:{background:i.bg,borderRadius:`var(--r)`,padding:`14px 16px`,marginBottom:12,boxShadow:`var(--sh-1)`,display:`flex`,alignItems:`center`,gap:12},children:[(0,P.jsx)(`span`,{style:{flexShrink:0,color:i.texto,display:`flex`},children:(0,P.jsx)(F,{name:i.icono,size:32})}),(0,P.jsxs)(`div`,{style:{flex:1},children:[(0,P.jsx)(`h2`,{style:{color:i.texto,fontSize:18,fontWeight:700,lineHeight:1.2,marginBottom:3},children:i.titulo}),(0,P.jsx)(`p`,{style:{color:`#FFFFFF`,fontSize:14,fontWeight:500,lineHeight:1.35},children:i.mensaje})]})]}),(0,P.jsx)(L,{audioSrc:`/audio/${Me[e.estado]||`seguro_error`}.mp3`,titulo:`Doña Rosa te explica tu resultado`}),e.estado===`activo`&&r&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(`div`,{style:{background:`#F6F9FC`,borderRadius:`var(--r)`,border:`3px solid #227A4A`,padding:`16px 18px`,marginBottom:12,boxShadow:`var(--sh-1)`},children:[(0,P.jsx)(`p`,{className:`subrotulo`,style:{marginBottom:12},children:`Datos del asegurado`}),r.nombreCompleto&&(0,P.jsxs)(`div`,{style:{marginBottom:12},children:[(0,P.jsx)(`div`,{className:`subrotulo`,style:{marginBottom:3},children:`Nombre`}),(0,P.jsx)(`div`,{style:{fontSize:17,fontWeight:700,color:`#4434D4`,lineHeight:1.25},children:r.nombreCompleto})]}),r.tipoSeguro&&(0,P.jsxs)(`div`,{style:{marginBottom:12},children:[(0,P.jsx)(`div`,{className:`subrotulo`,style:{marginBottom:3},children:`Tipo de seguro`}),(0,P.jsx)(`div`,{style:{fontSize:16,fontWeight:700,color:`#4434D4`},children:r.tipoSeguro}),a&&(0,P.jsx)(`div`,{style:{fontSize:14,fontWeight:500,color:`#425567`,marginTop:3,lineHeight:1.4},children:a})]}),r.tipoAsegurado&&(0,P.jsxs)(`div`,{style:{marginBottom:12},children:[(0,P.jsx)(`div`,{className:`subrotulo`,style:{marginBottom:3},children:`Condición`}),(0,P.jsx)(`div`,{style:{fontSize:16,fontWeight:700,color:`#4434D4`},children:r.tipoAsegurado}),o&&(0,P.jsx)(`div`,{style:{fontSize:14,fontWeight:500,color:`#425567`,marginTop:3,lineHeight:1.4},children:o})]}),r.tipoAfiliacion&&(0,P.jsxs)(`div`,{style:{marginBottom:12},children:[(0,P.jsx)(`div`,{className:`subrotulo`,style:{marginBottom:3},children:`Afiliado a`}),(0,P.jsx)(`div`,{style:{fontSize:16,fontWeight:700,color:`#4434D4`},children:r.tipoAfiliacion})]}),(r.inicioVigencia||r.finVigencia)&&(0,P.jsxs)(`div`,{style:{background:`#E3F3EF`,border:`2px solid #227A4A`,borderRadius:`var(--r)`,padding:`10px 12px`},children:[(0,P.jsx)(`div`,{className:`subrotulo`,style:{color:`#227A4A`,marginBottom:3},children:`Vigencia actual`}),(0,P.jsxs)(`div`,{style:{fontSize:16,fontWeight:700,color:`#227A4A`},children:[r.inicioVigencia,` — `,r.finVigencia]}),(0,P.jsxs)(`div`,{style:{fontSize:14,fontWeight:500,color:`#227A4A`,marginTop:3},children:[`Tu seguro está acreditado hasta el `,r.finVigencia,`.`]})]})]}),r.centroAsignado&&(0,P.jsxs)(`div`,{style:{background:`var(--sheet)`,border:`2px solid var(--brand)`,borderRadius:`var(--r)`,boxShadow:`var(--sh-1)`,padding:`14px 16px`,marginBottom:12},children:[(0,P.jsx)(`div`,{className:`rotulo`,children:`Centro asistencial asignado`}),(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:10},children:[(0,P.jsx)(`span`,{style:{color:`var(--brand)`,display:`flex`,flex:`0 0 auto`},children:(0,P.jsx)(F,{name:`hospital`,size:26})}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`p`,{style:{color:`var(--ink)`,fontSize:18,fontWeight:700,lineHeight:1.25,marginBottom:4},children:r.centroAsignado}),r.direccionCentro&&(0,P.jsx)(`p`,{style:{color:`var(--body)`,fontSize:14,fontWeight:400,lineHeight:1.4},children:r.direccionCentro}),r.redAsistencial&&(0,P.jsx)(`p`,{style:{color:`var(--mute-deep)`,fontSize:14,fontWeight:400,marginTop:4},children:r.redAsistencial})]})]})]}),(0,P.jsx)(ft,{slug:st(r.centroAsignado)}),(0,P.jsx)(gt,{slug:st(r.centroAsignado)},t),r.centroAsignado&&!/VIRÚ|VIRU|SOLES/i.test(r.centroAsignado)&&(0,P.jsxs)(`div`,{style:{background:`#FBF0DE`,border:`1.5px solid #8A5A17`,borderRadius:`var(--r)`,padding:`12px 14px`,marginBottom:12},children:[(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,marginBottom:8},children:[(0,P.jsx)(`span`,{style:{color:`#8A5A17`,display:`flex`},children:(0,P.jsx)(F,{name:`chincheta`,size:18})}),(0,P.jsx)(`p`,{className:`subrotulo`,style:{color:`#6B430E`,marginBottom:0},children:`Importante sobre tu centro`})]}),(0,P.jsxs)(`p`,{style:{fontSize:14,fontWeight:500,color:`#6B430E`,lineHeight:1.45,marginBottom:8},children:[`En el hospital donde estás `,(0,P.jsx)(`strong`,{children:`SÍ`}),` puedes:`]}),(0,P.jsxs)(`div`,{style:{paddingLeft:4,marginBottom:10},children:[(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,marginBottom:4},children:[(0,P.jsx)(`span`,{style:{color:`#227A4A`,display:`flex`},children:(0,P.jsx)(F,{name:`check`,size:15})}),(0,P.jsx)(`span`,{style:{fontSize:14.5,fontWeight:500,color:`#6B430E`},children:`Atender emergencias`})]}),(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,P.jsx)(`span`,{style:{color:`#227A4A`,display:`flex`},children:(0,P.jsx)(F,{name:`check`,size:15})}),(0,P.jsx)(`span`,{style:{fontSize:14.5,fontWeight:500,color:`#6B430E`},children:`Hacer trámites administrativos`})]})]}),(0,P.jsxs)(`p`,{style:{fontSize:14,fontWeight:500,color:`#6B430E`,lineHeight:1.4,paddingTop:8,borderTop:`1px solid #8A5A17`},children:[`Para `,(0,P.jsx)(`strong`,{children:`consultas regulares`}),`, ve a tu centro asignado.`]})]}),(0,P.jsxs)(`div`,{style:{background:`#E3F3EF`,border:`2px solid #227A4A`,borderRadius:`var(--r)`,padding:`12px 14px`,marginBottom:14,display:`flex`,alignItems:`flex-start`,gap:10},children:[(0,P.jsx)(`span`,{style:{flexShrink:0,color:`#227A4A`,display:`flex`},children:(0,P.jsx)(F,{name:`check`,size:22})}),(0,P.jsxs)(`p`,{style:{fontSize:15,fontWeight:600,color:`#227A4A`,lineHeight:1.45},children:[`Ya puedes `,(0,P.jsx)(`strong`,{children:`solicitar tu cita`}),`, hacer trámites administrativos y atenderte. Recuerda llevar tu DNI original.`]})]})]}),(e.estado===`no_acreditado`||e.estado===`no_encontrado`||e.estado===`error_consulta`)&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(`div`,{style:{background:`#F6F9FC`,borderRadius:`var(--r)`,border:`3px solid #8A5A17`,padding:`16px 18px`,marginBottom:12,boxShadow:`var(--sh-1)`},children:[(0,P.jsx)(`p`,{style:{fontSize:16,fontWeight:700,color:`#6B430E`,marginBottom:10},children:`Causas comunes`}),[`Tu empleador aún no te ha registrado o hay deuda pendiente con tu seguro.`,`Tu vínculo laboral terminó (cese, despido, renuncia). El seguro queda activo solo unos meses por latencia.`,`Si eras derechohabiente (hijo/a, cónyuge), tu condición pudo haber caducado al cumplir 18 años (sin estudios) o por divorcio.`,`Verificaste tus datos y hay un error en el DNI, dígito verificador o fecha de nacimiento.`].map((e,t)=>(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:10,padding:`8px 0`,borderBottom:t<3?`1.5px solid #FBF0DE`:`none`},children:[(0,P.jsx)(`span`,{style:{width:24,height:24,borderRadius:`50%`,background:`#8A5A17`,color:`white`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:14,fontWeight:700,flexShrink:0},children:t+1}),(0,P.jsx)(`span`,{style:{fontSize:14,fontWeight:500,color:`#6B430E`,lineHeight:1.5},children:e})]},t))]}),(0,P.jsxs)(`div`,{style:{background:`#F6F9FC`,borderRadius:`var(--r)`,border:`3px solid ${Un}`,padding:`16px 18px`,marginBottom:12,boxShadow:`var(--sh-1)`},children:[(0,P.jsx)(`p`,{style:{fontSize:16,fontWeight:700,color:Gn,marginBottom:12},children:`¿Qué puedes hacer?`}),[{icono:`recargar`,titulo:`Revisar tus datos`,texto:`Vuelve atrás y verifica que tu DNI, dígito verificador y fecha de nacimiento estén correctos. Un error mínimo hace que no aparezcan resultados.`},{icono:`maletin`,titulo:`Habla con tu empleador`,texto:`Si trabajas, pídeles que confirmen tu registro y los pagos de tu seguro. La empresa es responsable de mantenerte al día.`},{icono:`telefono`,titulo:`Llama a orientación de tu seguro`,texto:`Marca el 411-8000 desde cualquier teléfono. Te atenderán y revisarán tu caso.`},{icono:`hospital`,titulo:`Acércate al hospital`,texto:`Ve al área de Aseguramiento del hospital donde te atiendes. Lleva tu DNI original. Te orientarán en persona.`}].map((e,t)=>(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:12,padding:`10px 0`,borderBottom:t<3?`1.5px solid #E3E8EE`:`none`},children:[(0,P.jsx)(`span`,{style:{flexShrink:0,display:`flex`},children:(0,P.jsx)(F,{name:e.icono,size:24})}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`div`,{style:{fontSize:15,fontWeight:700,color:`#4434D4`,marginBottom:2},children:e.titulo}),(0,P.jsx)(`div`,{style:{fontSize:14,fontWeight:500,color:`#425567`,lineHeight:1.45},children:e.texto})]})]},t))]})]}),(0,P.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:10},children:[e.estado===`activo`&&(0,P.jsxs)(`button`,{onClick:$,className:`pisa`,style:{width:`100%`,border:`none`,borderRadius:`var(--r)`,background:`#227A4A`,color:`white`,fontFamily:`inherit`,fontWeight:700,fontSize:17,padding:`15px`,cursor:`pointer`,boxShadow:G},children:[(0,P.jsx)(F,{name:`clipboard`,size:20}),` Ver mis trámites`]}),(0,P.jsxs)(`button`,{onClick:()=>{_a(null),ha(``),da(!1),n(`seguro_terminos`)},className:`pisa`,style:{width:`100%`,border:`none`,borderRadius:`var(--r)`,background:Un,color:`white`,fontFamily:`inherit`,fontWeight:700,fontSize:17,padding:`15px`,cursor:`pointer`,boxShadow:G},children:[(0,P.jsx)(F,{name:`recargar`,size:19}),` Consultar de nuevo`]}),(0,P.jsx)(`button`,{className:`btn-volver`,onClick:$,children:`← Volver al inicio`})]})]})})(),t===`flujo`&&Q&&Z&&(0,P.jsxs)(`div`,{style:{maxWidth:540,margin:`0 auto`,padding:Ja?`10px 14px ${cr}px`:`10px 14px 16px`,display:`flex`,flexDirection:`column`,width:`100%`},children:[(0,P.jsxs)(`div`,{style:{marginBottom:10,"--rotulo-color":Z.color},children:[(0,P.jsx)(`div`,{className:`rotulo`,style:{marginBottom:4},children:`Estás revisando`}),(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,P.jsx)(`span`,{style:{color:Z.color,display:`flex`,flex:`0 0 auto`},"aria-hidden":`true`,children:(0,P.jsx)(F,{name:Z.icono,size:20})}),(0,P.jsx)(`div`,{style:{color:Z.colorTexto||Z.color,fontSize:16,fontWeight:700,lineHeight:1.2,letterSpacing:`-0.01em`},children:Z.titulo})]})]}),(0,P.jsxs)(`div`,{style:{marginBottom:8},children:[(0,P.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,marginBottom:4},children:[(0,P.jsx)(`span`,{style:{fontSize:14,fontWeight:500,color:`#425567`},children:`Tu avance`}),(0,P.jsxs)(`span`,{style:{fontSize:14,fontWeight:700,color:Z.colorTexto||Z.color},children:[`Paso `,Ya+1,` de `,Xa]})]}),(0,P.jsx)(`div`,{className:`pasos-puntos`,style:{"--paso-color":Z.color},children:Array.from({length:Xa}).map((e,t)=>(0,P.jsx)(`span`,{className:`paso-punto${t<Ya?` completado`:``}${t===Ya?` activo`:``}`,"aria-hidden":`true`},t))}),(0,P.jsx)(`div`,{style:{background:`var(--manila-2)`,border:`1px solid var(--line)`,borderRadius:3,height:8,overflow:`hidden`},children:(0,P.jsx)(`div`,{style:{height:`100%`,width:`100%`,borderRadius:3,background:Z.color,transformOrigin:`left center`,transform:`scaleX(${Math.min(1,Ya/Xa)})`,transition:`transform 0.4s ease`}})})]}),(0,P.jsxs)(`div`,{className:`fade ${Pi?`show`:`hide`}`,style:{background:`#F6F9FC`,borderRadius:`var(--r)`,border:`3px solid ${Q.tipo===`alerta`?`#8A5A17`:Z.colorSuave}`,boxShadow:`var(--sh-2)`},children:[(0,P.jsxs)(`div`,{style:{padding:`14px 16px 0`},children:[(0,P.jsx)(`div`,{className:`flow-icono${Q.tipo===`alerta`?` flow-icono-alerta`:``}`,style:{display:`flex`,justifyContent:`center`,marginBottom:10,color:Q.tipo===`alerta`?`#8A5A17`:Z.color},"aria-hidden":`true`,children:(0,P.jsx)(F,{name:Q.tipo===`alerta`?`alerta`:Q.tipo===`opciones`?`documento`:`pregunta`,size:Q.tipo===`alerta`?48:44})}),(0,P.jsx)(`h1`,{style:{fontSize:21,fontWeight:700,color:Z.colorTexto||Z.color,lineHeight:1.3,textAlign:`center`,marginBottom:Q.ayuda?10:0},children:Q.pregunta}),Q.ayuda&&(0,P.jsx)(`div`,{style:{background:`var(--manila)`,border:`1px solid var(--line)`,borderRadius:`var(--r)`,padding:`10px 12px`,marginTop:10},children:(0,P.jsxs)(`p`,{style:{fontSize:14,fontWeight:500,color:`#425567`,lineHeight:1.45},children:[(0,P.jsx)(F,{name:`bombilla`,size:16}),` `,Q.ayuda]})})]}),(0,P.jsxs)(`div`,{style:{padding:`12px 16px 16px`},children:[(0,P.jsx)(L,{audioSrc:`/audio/flujo/${Oi}__${Ai}.mp3`,titulo:`Doña Rosa te lee la pregunta`}),Q.tipo===`sino`&&(0,P.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,P.jsxs)(`button`,{className:`btn-si`,onClick:()=>Qa(`si`),style:{fontSize:22,padding:`16px 0`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:10},children:[(0,P.jsx)(F,{name:`check`,size:24}),` SÍ`]}),(0,P.jsxs)(`button`,{className:`btn-no`,onClick:()=>Qa(`no`),style:{fontSize:22,padding:`16px 0`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:10},children:[(0,P.jsx)(F,{name:`cruz`,size:24}),` NO`]})]}),Q.tipo===`opciones`&&(0,P.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:7},children:Q.opciones.map((e,t)=>(0,P.jsxs)(`button`,{className:`btn-opcion`,style:{fontSize:16,padding:`11px 14px`},onClick:()=>Qa(e),children:[(0,P.jsx)(`span`,{style:{width:30,height:30,borderRadius:`50%`,background:Z.color,color:`white`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:14,fontWeight:700,flexShrink:0},children:t+1}),e]},t))}),Q.tipo===`alerta`&&(0,P.jsx)(`button`,{className:`btn-alerta`,onClick:()=>Qa(`ok`),style:{fontSize:17,padding:`16px`},children:`Entendido — Continuar →`})]})]})]}),t===`resumen`&&Z&&(0,P.jsxs)(`div`,{style:{maxWidth:540,margin:`0 auto`,padding:Ja?`14px 16px ${cr}px`:`14px 16px 30px`},children:[(0,P.jsxs)(`div`,{className:`banner-resultado${Ii?` completado`:``}`,style:{background:Ii?`#227A4A`:`#8A5A17`,borderRadius:`var(--r)`,padding:`14px 18px`,textAlign:`center`,marginBottom:12,boxShadow:`var(--sh-2)`},children:[(0,P.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:8,color:`white`},children:(0,P.jsx)(F,{name:Ii?`logro`:`clipboard`,size:38})}),(0,P.jsx)(`h1`,{style:{color:`white`,fontSize:22,fontWeight:800,lineHeight:1.2,marginBottom:4},children:Ii?`¡Revisión completada!`:`Revisa lo que te falta`}),(0,P.jsx)(`p`,{style:{color:`#FFFFFF`,fontSize:15,fontWeight:700},children:Ii?`Aquí está tu lista de documentos`:`Algunos documentos son necesarios`})]}),K.numDoc&&(0,P.jsxs)(`p`,{style:{fontSize:14,fontWeight:500,color:`#425567`,textAlign:`center`,marginBottom:12},children:[`Resumen para: `,K.tipoDoc===`1`?`DNI`:K.tipoDoc===`2`?`PTP`:`Carnet de Extranjería`,` `,K.numDoc]}),(0,P.jsx)(L,{audioSrc:`/audio/resumen.mp3`,titulo:`Doña Rosa te explica tu resumen`,celebrando:Ii}),(()=>{let{items:e,notaExtra:t}=Z.resumen(Mi),n=e.some(e=>e.val===`no`);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`p`,{className:`subrotulo`,children:`Tu checklist de documentos`}),e.map((e,t)=>{let n={si:{bg:`#E3F3EF`,icono:`check`,color:`#227A4A`},no:{bg:`#F7E9EF`,icono:`cruz`,color:`#A32B3E`},advertencia:{bg:`#FBF0DE`,icono:`alerta`,color:`#8A5A17`,colorTexto:`#6B430E`}}[e.val]||{bg:`#F6F9FC`,icono:`chincheta`,color:`#0D253D`};return(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:10,padding:`10px 13px`,borderRadius:`var(--r)`,marginBottom:6,background:n.bg},children:[(0,P.jsx)(`span`,{style:{flexShrink:0,marginTop:1,color:n.color,display:`flex`},children:(0,P.jsx)(F,{name:n.icono,size:22})}),(0,P.jsx)(`span`,{style:{fontSize:15,fontWeight:600,color:n.colorTexto||n.color,lineHeight:1.35},children:e.label})]},t)}),n&&(0,P.jsx)(`div`,{style:{background:`#F7E9EF`,border:`2px solid #A32B3E`,borderRadius:`var(--r)`,padding:`10px 14px`,marginTop:4,marginBottom:10},children:(0,P.jsxs)(`p`,{style:{fontSize:15,fontWeight:600,color:`#A32B3E`,lineHeight:1.4},children:[`Consigue los documentos marcados con `,(0,P.jsx)(F,{name:`cruz`,size:15}),` antes de venir al hospital.`]})}),t&&(0,P.jsx)(`div`,{style:{background:`var(--manila)`,border:`1px solid var(--rule)`,borderRadius:`var(--r)`,padding:`10px 14px`,marginBottom:10},children:(0,P.jsxs)(`p`,{style:{fontSize:15,fontWeight:700,color:`#0D253D`,lineHeight:1.4},children:[(0,P.jsx)(F,{name:`info`,size:16}),` `,t]})})]})})(),(0,P.jsxs)(`div`,{style:{background:`var(--sheet)`,border:`2px solid var(--brand)`,borderRadius:`var(--r)`,boxShadow:`var(--sh-1)`,padding:`14px 16px`,marginBottom:8},children:[(0,P.jsx)(`div`,{className:`rotulo`,children:`¿A dónde debes ir?`}),(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:10,marginBottom:10},children:[(0,P.jsx)(`span`,{style:{color:`var(--brand)`,display:`flex`,flex:`0 0 auto`},children:(0,P.jsx)(F,{name:`hospital`,size:24})}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`p`,{style:{color:`var(--ink)`,fontSize:18,fontWeight:700,lineHeight:1.25,marginBottom:3},children:Z.area}),(0,P.jsx)(`p`,{style:{color:`var(--body)`,fontSize:14,fontWeight:400},children:`En el hospital donde te atiendes`})]})]}),(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10},children:[(0,P.jsx)(`span`,{style:{color:`var(--brand)`,display:`flex`,flex:`0 0 auto`},children:(0,P.jsx)(F,{name:`reloj`,size:20})}),(0,P.jsx)(`p`,{style:{color:`var(--body)`,fontSize:15,fontWeight:500},children:Hn})]})]}),(0,P.jsx)(ft,{slug:c||st(ga?.datos?.centroAsignado)||st(a?.nombre)}),(0,P.jsx)(gt,{slug:c||st(ga?.datos?.centroAsignado)||st(a?.nombre)},t),(0,P.jsx)(`div`,{style:{background:`#FBF0DE`,border:`2px solid #8A5A17`,borderRadius:`var(--r)`,padding:`10px 14px`,marginBottom:8},children:(0,P.jsxs)(`p`,{style:{fontSize:15,fontWeight:600,color:`#6B430E`,lineHeight:1.4},children:[(0,P.jsx)(F,{name:`chincheta`,size:16}),` Trae el `,(0,P.jsx)(`strong`,{children:`original y una fotocopia`}),` de cada documento.`]})}),(0,P.jsxs)(`div`,{style:{background:`#E1EFF7`,border:`2px solid #2D5D80`,borderRadius:`var(--r)`,padding:`10px 14px`,marginBottom:16,display:`flex`,alignItems:`flex-start`,gap:10},children:[(0,P.jsx)(`span`,{style:{flexShrink:0,display:`flex`},children:(0,P.jsx)(F,{name:`megafono`,size:22})}),(0,P.jsxs)(`p`,{style:{fontSize:14,fontWeight:600,color:`#2D5D80`,lineHeight:1.45},children:[`Presenta `,(0,P.jsx)(`strong`,{children:`todos los documentos juntos`}),` en Secretaría del hospital. El personal te orientará y resolverá cualquier duda en ese momento.`]})]}),(0,P.jsxs)(`div`,{style:{background:Xn,border:`2px solid #33475B`,borderRadius:`var(--r)`,padding:`12px 14px`,marginBottom:8,display:`flex`,alignItems:`flex-start`,gap:10},children:[(0,P.jsx)(`span`,{style:{flexShrink:0,display:`flex`},children:(0,P.jsx)(F,{name:`clipboard`,size:22})}),(0,P.jsxs)(`p`,{style:{fontSize:14,fontWeight:600,color:Yn,lineHeight:1.45},children:[`Junto con tus documentos, debes presentar el `,(0,P.jsx)(`strong`,{children:`Formulario de Trámite de Gestión Múltiple`}),` debidamente llenado. Puedes pedirlo en `,(0,P.jsx)(`strong`,{children:`Secretaría, Administración`}),` o al `,(0,P.jsx)(`strong`,{children:`personal de Vigilancia`}),`. Te lo facilitan gratis.`]})]}),(0,P.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:10},children:[(0,P.jsxs)(`button`,{onClick:()=>Za(Oi),className:`pisa`,style:{width:`100%`,border:`none`,borderRadius:`var(--r)`,background:Z.color,color:`white`,fontFamily:`inherit`,fontWeight:700,fontSize:17,padding:`15px`,cursor:`pointer`,boxShadow:G},children:[(0,P.jsx)(F,{name:`recargar`,size:19}),` Revisar de nuevo`]}),(0,P.jsx)(`button`,{className:`btn-volver`,onClick:$,children:`← Ver otros trámites`})]})]}),t===`citt_terminos`&&(0,P.jsxs)(`div`,{style:{maxWidth:540,margin:`0 auto`,padding:`18px 16px 30px`},children:[(0,P.jsx)(I,{rotulo:`Antes de continuar`,titulo:`Consulta de CITT`,detalle:`Certificados de Incapacidad Temporal`,icono:`medico`,color:Jn}),(0,P.jsxs)(`div`,{style:{background:`#F6F9FC`,borderRadius:`var(--r)`,padding:`14px 16px`,marginBottom:12,border:`1.5px solid #E3E8EE`,boxShadow:`var(--sh-1)`},children:[(0,P.jsx)(`p`,{style:{fontSize:16,color:Jn,fontWeight:600,marginBottom:8,lineHeight:1.3},children:`Vamos a consultar tus descansos médicos en EsSalud`}),(0,P.jsx)(`p`,{style:{fontSize:14,fontWeight:600,color:`#425567`,lineHeight:1.4,marginBottom:10},children:`Necesitamos enviar tu DNI, dígito verificador y fecha de nacimiento al sistema oficial de EsSalud.`}),(0,P.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:6},children:[(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,P.jsx)(`span`,{style:{color:`#227A4A`,display:`flex`},children:(0,P.jsx)(F,{name:`check`,size:15})}),(0,P.jsx)(`span`,{style:{fontSize:14,fontWeight:500,color:`#4434D4`},children:`Consulta gratuita y oficial`})]}),(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,P.jsx)(`span`,{style:{display:`flex`},children:(0,P.jsx)(F,{name:`candado`,size:15})}),(0,P.jsx)(`span`,{style:{fontSize:14,fontWeight:500,color:`#4434D4`},children:`Tus datos NO se guardan en este celular`})]})]})]}),(0,P.jsx)(L,{audioSrc:`/audio/citt_terminos.mp3`,titulo:`Doña Rosa te explica este aviso`}),(0,P.jsx)(Vn,{aceptado:va,onToggle:()=>ya(!va),texto:`Acepto enviar mis datos a EsSalud`}),(0,P.jsx)(`button`,{className:`pisa`,onClick:()=>{Ji(``),uo()},disabled:!va,style:{background:va?Kn:`#A8C3DE`,color:`white`,border:`none`,borderRadius:`var(--r)`,padding:`14px 18px`,width:`100%`,fontFamily:`inherit`,fontWeight:700,fontSize:16,cursor:va?`pointer`:`not-allowed`,boxShadow:va?G:`none`,marginBottom:8,transition:`all 0.2s`},children:`Continuar →`}),(0,P.jsx)(`button`,{className:`btn-volver`,onClick:$,children:`← Volver al inicio`}),(0,P.jsxs)(`p`,{style:{fontSize:14,color:`#425567`,marginTop:14,fontWeight:600,textAlign:`center`,lineHeight:1.4},children:[(0,P.jsx)(F,{name:`ley`,size:16}),` Datos protegidos por `,(0,P.jsx)(`strong`,{children:`Ley N° 29733`}),` · Derechos ARCO`]})]}),t===`citt_cargando`&&(0,P.jsx)(gn,{frase:`Estamos revisando tus CITT…`,espacio:(0,P.jsx)(Sn,{slug:u}),listo:na,fraseListo:ia===`identidad`?`Terminamos de revisar. Hay algo que corregir.`:`Listo. Ya tenemos el resultado de tus CITT.`,onContinuar:so}),t===`citt_resultado`&&Sa&&(0,P.jsxs)(`div`,{style:{maxWidth:540,margin:`0 auto`,padding:`14px 16px 30px`},children:[(()=>{let e=Sa,t=e.estado===`encontrados`&&Array.isArray(e.citts)&&e.citts.length>0;return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(`div`,{style:{background:t?Kn:`#5B6B7D`,borderRadius:`var(--r)`,padding:`14px 16px`,marginBottom:12,boxShadow:`var(--sh-1)`,display:`flex`,alignItems:`center`,gap:12},children:[(0,P.jsx)(`span`,{style:{flexShrink:0,display:`flex`},children:(0,P.jsx)(F,{name:t?`medico`:`info`,size:32})}),(0,P.jsxs)(`div`,{style:{flex:1},children:[(0,P.jsx)(`h2`,{style:{color:`white`,fontSize:18,fontWeight:700,lineHeight:1.2,marginBottom:3},children:e.titulo}),e.nombre&&(0,P.jsx)(`p`,{style:{color:`#FFFFFF`,fontSize:14,fontWeight:500,lineHeight:1.35},children:e.nombre})]})]}),(0,P.jsx)(L,{audioSrc:`/audio/citt_resultado.mp3`,titulo:`Doña Rosa te explica tus certificados`}),!t&&(0,P.jsx)(`div`,{style:{background:`#FBF0DE`,border:`1.5px solid #8A5A17`,borderRadius:`var(--r)`,padding:`12px 14px`,marginBottom:12,fontSize:14,fontWeight:500,color:`#6B430E`,lineHeight:1.45},children:e.mensaje}),t&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(`p`,{className:`subrotulo`,children:[e.citts.length,` certificado`,e.citts.length===1?``:`s`,` encontrado`,e.citts.length===1?``:`s`]}),(0,P.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,marginBottom:14},children:e.citts.map((e,t)=>(0,P.jsxs)(`button`,{onClick:()=>wa(e),className:`card-tramite-modern`,style:{background:`#F6F9FC`,border:`1.5px solid #E3E8EE`,borderRadius:`var(--r)`,padding:`12px 14px`,display:`flex`,alignItems:`center`,gap:12,width:`100%`,textAlign:`left`,cursor:`pointer`,boxShadow:`var(--sh-1)`,fontFamily:`inherit`},children:[(0,P.jsx)(`div`,{style:{width:40,height:40,borderRadius:3,background:qn,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:18,flexShrink:0},children:(0,P.jsx)(F,{name:`clipboard`,size:22})}),(0,P.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,P.jsxs)(`div`,{style:{fontSize:14,fontWeight:500,color:Jn,lineHeight:1.3},children:[lr(e.fechaInicio),` → `,lr(e.fechaFin)]}),(0,P.jsxs)(`div`,{style:{fontSize:14,fontWeight:500,color:`#425567`,marginTop:2,lineHeight:1.3},children:[e.contingencia||`—`,e.diasDescanso?` · ${e.diasDescanso} día${e.diasDescanso===1?``:`s`}`:``]})]}),(0,P.jsx)(`span`,{style:{background:e.estado===`PROCESADO`?`#E3F3EF`:`#FBF0DE`,color:e.estado===`PROCESADO`?`#227A4A`:`#8A5A17`,borderRadius:3,padding:`2px 7px`,fontSize:14,fontWeight:700,letterSpacing:.4,flexShrink:0},children:e.estado||`—`})]},t))}),(0,P.jsxs)(`div`,{style:{background:`#E1EFF7`,border:`1.5px solid #2D5D80`,borderRadius:`var(--r)`,padding:`11px 14px`,marginBottom:14,display:`flex`,alignItems:`flex-start`,gap:10},children:[(0,P.jsx)(`span`,{style:{flexShrink:0,marginTop:1,display:`flex`},children:(0,P.jsx)(F,{name:`impresora`,size:18})}),(0,P.jsxs)(`p`,{style:{fontSize:14,fontWeight:500,color:`#2D5D80`,lineHeight:1.45},children:[`Para `,(0,P.jsx)(`strong`,{children:`imprimir un CITT`}),` con código de barras, debes ir al portal oficial:\xA0`,(0,P.jsx)(`a`,{href:`https://apps.essalud.gob.pe/citt/#/consulta`,target:`_blank`,rel:`noopener noreferrer`,style:{color:Jn,fontWeight:700,textDecoration:`underline`},children:`Abrir portal de tu seguro`})]})]})]}),(0,P.jsxs)(`button`,{onClick:()=>{Ca(null),wa(null),ya(!1),n(`citt_terminos`)},style:{background:`#F6F9FC`,color:Jn,border:`2px solid ${Kn}`,borderRadius:`var(--r)`,padding:`12px 18px`,width:`100%`,fontFamily:`inherit`,fontWeight:700,fontSize:15,cursor:`pointer`,marginBottom:8},children:[(0,P.jsx)(F,{name:`recargar`,size:19}),` Consultar de nuevo`]}),(0,P.jsx)(`button`,{className:`btn-volver`,onClick:$,children:`← Volver al inicio`})]})})(),J&&(0,P.jsx)(`div`,{onClick:()=>wa(null),style:{position:`fixed`,inset:0,background:`rgba(139,30,63,0.55)`,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:16,zIndex:1e3},children:(0,P.jsxs)(`div`,{onClick:e=>e.stopPropagation(),style:{background:`#F6F9FC`,borderRadius:`var(--r)`,padding:`16px 16px 14px`,width:`100%`,maxWidth:480,maxHeight:`85vh`,overflowY:`auto`,boxShadow:`0 16px 48px rgba(0,0,0,0.30)`},children:[(0,P.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:12},children:[(0,P.jsx)(`h3`,{style:{fontSize:17,fontWeight:700,color:Jn},children:`Detalle del CITT`}),(0,P.jsx)(`button`,{onClick:()=>wa(null),style:{background:`#F6F9FC`,border:`none`,borderRadius:3,width:30,height:30,cursor:`pointer`,fontSize:16,fontWeight:700,color:`#425567`,fontFamily:`inherit`},children:`×`})]}),(0,P.jsxs)(`div`,{style:{background:qn,borderRadius:`var(--r)`,padding:`10px 14px`,marginBottom:10,textAlign:`center`},children:[(0,P.jsx)(`p`,{className:`subrotulo`,style:{color:Jn,marginBottom:0},children:`Código del CITT`}),(0,P.jsx)(`p`,{style:{fontSize:22,fontWeight:800,color:Jn,marginTop:2,letterSpacing:1},children:J.citt||`—`})]}),[[`Fechas de descanso`,`${lr(J.fechaInicio)} → ${lr(J.fechaFin)}`],[`Días`,J.diasDescanso?`${J.diasDescanso} día${J.diasDescanso===1?``:`s`}`:`—`],[`Contingencia`,J.contingencia],[`Estado`,J.estado],[`RUC del centro`,J.ruc],[`NITT`,J.nitt||`—`],[`Emitido`,J.fechaCreacion?`${lr(J.fechaCreacion)} ${J.horaCreacion||``}`:`—`],[`Observación`,J.observacion||`—`]].map(([e,t],n)=>(0,P.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`,gap:10,padding:`8px 0`,borderBottom:n<7?`1px solid #F6F9FC`:`none`},children:[(0,P.jsx)(`span`,{style:{fontSize:14,fontWeight:500,color:`#425567`},children:e}),(0,P.jsx)(`span`,{style:{fontSize:14,fontWeight:600,color:`#4434D4`,textAlign:`right`,flex:1},children:t||`—`})]},n)),(0,P.jsxs)(`button`,{className:`pisa`,onClick:()=>Ea(!0),style:{display:`flex`,alignItems:`center`,justifyContent:`center`,gap:8,width:`100%`,marginTop:14,background:Kn,color:`white`,border:`none`,borderRadius:`var(--r)`,padding:`12px 14px`,fontFamily:`inherit`,fontWeight:700,fontSize:15,cursor:`pointer`,boxShadow:G},children:[(0,P.jsx)(F,{name:`impresora`,size:20}),` Generar CITT para imprimir`]}),(0,P.jsxs)(`p`,{style:{fontSize:14,fontWeight:500,color:`#425567`,textAlign:`center`,marginTop:10,lineHeight:1.4},children:[`¿Prefieres el portal oficial?`,` `,(0,P.jsx)(`a`,{href:`https://apps.essalud.gob.pe/citt/#/consulta`,target:`_blank`,rel:`noopener noreferrer`,style:{color:Jn,fontWeight:700,textDecoration:`underline`},children:`Abrir tu seguro`})]})]})}),Ta&&J&&(0,P.jsx)(`div`,{className:`citt-print-overlay`,onClick:()=>Ea(!1),style:{position:`fixed`,inset:0,background:`rgba(139,30,63,0.70)`,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:14,zIndex:1100},children:(0,P.jsxs)(`div`,{onClick:e=>e.stopPropagation(),style:{background:`#F6F9FC`,borderRadius:`var(--r)`,padding:14,width:`100%`,maxWidth:420,maxHeight:`92vh`,overflowY:`auto`,boxShadow:`0 20px 50px rgba(0,0,0,0.40)`},children:[(0,P.jsxs)(`div`,{className:`citt-print-controls`,style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:10},children:[(0,P.jsx)(`h3`,{style:{fontSize:14,fontWeight:700,color:`#4434D4`},children:`Vista previa del CITT`}),(0,P.jsx)(`button`,{onClick:()=>Ea(!1),style:{background:`#F6F9FC`,border:`none`,borderRadius:3,width:30,height:30,cursor:`pointer`,fontSize:16,fontWeight:700,color:`#425567`,fontFamily:`inherit`},children:`×`})]}),(0,P.jsxs)(`div`,{id:`citt-print-area`,className:`citt-print-area`,style:{border:`1.5px solid #000`,borderRadius:3,padding:`18px 16px`,background:`#F6F9FC`,color:`#000`,fontFamily:`Arial, sans-serif`},children:[(0,P.jsx)(`p`,{style:{textAlign:`center`,fontSize:16,fontWeight:700,marginBottom:14,letterSpacing:1},children:J.citt||`—`}),Sa?.nombre&&(0,P.jsxs)(`p`,{style:{fontSize:14,fontWeight:500,textAlign:`center`,lineHeight:1.4},children:[`DNI: `,Sa.nombre]}),(0,P.jsxs)(`p`,{style:{fontSize:14,textAlign:`center`,lineHeight:1.4,marginTop:4},children:[`Del: `,lr(J.fechaInicio),` Al: `,lr(J.fechaFin)]}),(0,P.jsx)(`p`,{style:{fontSize:14,textAlign:`center`,lineHeight:1.4,marginTop:2},children:J.contingencia||`—`}),(0,P.jsxs)(`p`,{style:{fontSize:14,textAlign:`center`,lineHeight:1.4,marginTop:2},children:[`RUC: `,J.ruc||`—`]}),(0,P.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginTop:16},children:(0,P.jsx)(mr,{value:J.citt||``,moduleWidth:1.6,height:70})}),(0,P.jsx)(`p`,{style:{textAlign:`center`,fontSize:18,fontWeight:700,marginTop:6,letterSpacing:2,fontFamily:`monospace`},children:J.citt||`—`}),(0,P.jsxs)(`p`,{style:{textAlign:`center`,fontSize:14,fontWeight:600,marginTop:8,color:`#000`},children:[lr(J.fechaCreacion),` `,J.horaCreacion||``,` `,J.usuarioCreacion||``]})]}),(0,P.jsxs)(`div`,{className:`citt-print-controls`,style:{display:`flex`,gap:8,marginTop:14},children:[(0,P.jsx)(`button`,{onClick:()=>Ea(!1),style:{flex:1,background:`#F6F9FC`,color:`#425567`,border:`1.5px solid #E3E8EE`,borderRadius:`var(--r)`,padding:`12px 14px`,fontFamily:`inherit`,fontWeight:600,fontSize:14,cursor:`pointer`},children:`Cerrar`}),(0,P.jsxs)(`button`,{className:`pisa`,onClick:()=>window.print(),style:{flex:2,background:Kn,color:`white`,border:`none`,borderRadius:`var(--r)`,padding:`12px 14px`,fontFamily:`inherit`,fontWeight:700,fontSize:14,cursor:`pointer`,boxShadow:G},children:[(0,P.jsx)(F,{name:`impresora`,size:18}),` Imprimir / Guardar PDF`]})]}),(0,P.jsx)(`p`,{style:{fontSize:14,color:`#425567`,textAlign:`center`,marginTop:10,fontWeight:600,lineHeight:1.4},children:`En el celular, "Imprimir" te permite guardar como PDF o capturar pantalla.`})]})})]}),t===`lactancia_terminos`&&(0,P.jsxs)(`div`,{style:{maxWidth:540,margin:`0 auto`,padding:`18px 16px 30px`},children:[(0,P.jsx)(I,{rotulo:`Antes de continuar`,titulo:`Subsidio por lactancia`,icono:`biberon`,color:ar}),(0,P.jsxs)(`div`,{style:{background:`#F6F9FC`,borderRadius:`var(--r)`,border:`3px solid ${rr}`,padding:`16px 16px`,marginBottom:12},children:[(0,P.jsxs)(`p`,{style:{fontSize:17,fontWeight:700,color:`#4434D4`,lineHeight:1.45,marginBottom:14},children:[`Vamos a enviar tu `,(0,P.jsx)(`strong`,{children:`DNI`}),` y tu `,(0,P.jsx)(`strong`,{children:`fecha de nacimiento`}),` a EsSalud para consultar el pago automático de tu subsidio por lactancia (modalidad Cero Trámites).`]}),(0,P.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10},children:[(0,P.jsx)(`span`,{style:{flexShrink:0,color:`#227A4A`,display:`flex`},children:(0,P.jsx)(F,{name:`check`,size:20})}),(0,P.jsxs)(`span`,{style:{fontSize:15,fontWeight:700,color:`#0D253D`,lineHeight:1.35},children:[`Tus datos `,(0,P.jsx)(`strong`,{children:`no se guardan`}),` en esta plataforma`]})]}),(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10},children:[(0,P.jsx)(`span`,{style:{flexShrink:0,color:`#227A4A`,display:`flex`},children:(0,P.jsx)(F,{name:`check`,size:20})}),(0,P.jsxs)(`span`,{style:{fontSize:15,fontWeight:700,color:`#0D253D`,lineHeight:1.35},children:[`Solo se usan para `,(0,P.jsx)(`strong`,{children:`esta consulta`})]})]})]})]}),(0,P.jsx)(L,{audioSrc:`/audio/lactancia_terminos.mp3`,titulo:`Doña Rosa te explica este aviso`}),(0,P.jsx)(Vn,{aceptado:Da,onToggle:()=>Oa(!Da),texto:`He leído y acepto que mis datos se envíen a EsSalud para consultar mi subsidio.`}),(0,P.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:10},children:[(0,P.jsx)(`button`,{className:`pisa`,disabled:!Da,onClick:()=>{Ji(``),po()},style:{width:`100%`,border:`none`,borderRadius:`var(--r)`,background:Da?rr:`#A8C3DE`,color:`white`,fontFamily:`inherit`,fontWeight:700,fontSize:19,padding:`18px`,cursor:Da?`pointer`:`not-allowed`,boxShadow:Da?G:`none`,opacity:Da?1:.6,transition:`all 0.15s`},children:`Continuar →`}),(0,P.jsx)(`button`,{className:`btn-volver`,onClick:$,children:`← Volver al inicio`})]}),(0,P.jsx)(`div`,{style:{marginTop:16,padding:`10px 12px`,background:`var(--manila)`,border:`1px solid var(--line)`,borderRadius:`var(--r)`,fontSize:14,lineHeight:1.5,color:`#425567`},children:(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6,flexWrap:`wrap`},children:[(0,P.jsx)(`span`,{style:{display:`flex`},children:(0,P.jsx)(F,{name:`ley`,size:17})}),(0,P.jsxs)(`span`,{children:[`Datos protegidos por `,(0,P.jsx)(`strong`,{children:`Ley N° 29733`}),` ·`]}),(0,P.jsx)(`a`,{href:`mailto:Derechos.arco@essalud.gob.pe`,style:{color:rr,fontWeight:700,textDecoration:`underline`},children:`Derechos ARCO`})]})})]}),t===`lactancia_cargando`&&(0,P.jsx)(gn,{frase:`Estamos revisando tu subsidio…`,espacio:(0,P.jsx)(Sn,{slug:u}),listo:na,fraseListo:ia===`identidad`?`Terminamos de revisar. Hay algo que corregir.`:`Listo. Ya tenemos el resultado de tu subsidio.`,onContinuar:so}),t===`lactancia_resultado`&&ja&&(()=>{let e=ja,t=e.datos||{},r={aprobado:{bg:`#227A4A`,icono:`check`,titulo:e.titulo,mensaje:e.mensaje,texto:`#F6F9FC`},rechazado:{bg:`#8A5A17`,icono:`alerta`,titulo:e.titulo,mensaje:e.mensaje,texto:`#F6F9FC`},sin_resultado:{bg:ar,icono:`pregunta`,titulo:e.titulo,mensaje:e.mensaje,texto:`#F6F9FC`},no_encontrado:{bg:`#2D5D80`,icono:`pregunta`,titulo:e.titulo,mensaje:e.mensaje,texto:`#F6F9FC`}}[e.estado]||{bg:`#5B6B7D`,icono:`info`,titulo:`Resultado de consulta`,mensaje:e.mensaje||``,texto:`#F6F9FC`};return(0,P.jsxs)(`div`,{style:{maxWidth:540,margin:`0 auto`,padding:`14px 16px 30px`},children:[(0,P.jsxs)(`div`,{style:{background:r.bg,borderRadius:`var(--r)`,padding:`14px 16px`,marginBottom:12,boxShadow:`var(--sh-1)`,display:`flex`,alignItems:`center`,gap:12},children:[(0,P.jsx)(`span`,{style:{flexShrink:0,color:r.texto,display:`flex`},children:(0,P.jsx)(F,{name:r.icono,size:32})}),(0,P.jsxs)(`div`,{style:{flex:1},children:[(0,P.jsx)(`h2`,{style:{color:r.texto,fontSize:18,fontWeight:700,lineHeight:1.2,marginBottom:3},children:r.titulo}),(0,P.jsx)(`p`,{style:{color:`#FFFFFF`,fontSize:14,fontWeight:500,lineHeight:1.35},children:r.mensaje})]})]}),(0,P.jsx)(L,{audioSrc:`/audio/${Ne[e.estado]||`lactancia_sin_resultado`}.mp3`,titulo:`Doña Rosa te explica tu resultado`}),e.estado===`aprobado`&&(0,P.jsxs)(`div`,{style:{background:`#F6F9FC`,borderRadius:`var(--r)`,border:`3px solid #227A4A`,padding:`16px 18px`,marginBottom:12,boxShadow:`var(--sh-1)`},children:[(0,P.jsx)(`p`,{className:`subrotulo`,style:{marginBottom:12},children:`Datos del pago`}),t.banco&&(0,P.jsxs)(`div`,{style:{marginBottom:12},children:[(0,P.jsx)(`div`,{className:`subrotulo`,style:{marginBottom:3},children:`Banco`}),(0,P.jsx)(`div`,{style:{fontSize:16,fontWeight:700,color:`#4434D4`},children:t.banco})]}),t.fechaPago&&(0,P.jsxs)(`div`,{style:{background:`#E3F3EF`,border:`2px solid #227A4A`,borderRadius:`var(--r)`,padding:`10px 12px`},children:[(0,P.jsx)(`div`,{className:`subrotulo`,style:{color:`#227A4A`,marginBottom:3},children:`Fecha de pago`}),(0,P.jsx)(`div`,{style:{fontSize:16,fontWeight:700,color:`#227A4A`},children:t.fechaPago})]}),!t.banco&&!t.fechaPago&&(0,P.jsx)(`p`,{style:{fontSize:14,fontWeight:500,color:`#425567`,lineHeight:1.45},children:`EsSalud no envió el detalle del banco o la fecha. Puedes consultar directamente en tu banco en los próximos días.`})]}),(e.estado===`rechazado`||e.estado===`sin_resultado`||e.estado===`no_encontrado`)&&(0,P.jsxs)(`div`,{style:{background:`#F6F9FC`,borderRadius:`var(--r)`,border:`3px solid ${rr}`,padding:`16px 18px`,marginBottom:12,boxShadow:`var(--sh-1)`},children:[(0,P.jsx)(`p`,{style:{fontSize:16,fontWeight:700,color:ar,marginBottom:12},children:`¿Qué puedes hacer?`}),[{icono:`recargar`,titulo:`Revisar tus datos`,texto:`Vuelve atrás y verifica que tu DNI, dígito verificador y fecha de nacimiento estén correctos.`},{icono:`web`,titulo:`Tramitarlo por la plataforma VIVA`,texto:`Si no se aprobó por Cero Trámites, puedes solicitarlo directamente en viva.essalud.gob.pe con tu usuario de EsSalud.`},{icono:`hospital`,titulo:`Acércate a tu Oficina de Seguros y Prestaciones Económicas (OSPE)`,texto:`Te orientarán en persona y pueden revisar por qué no se generó el pago automático.`}].map((e,t)=>(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:12,padding:`10px 0`,borderBottom:t<2?`1.5px solid #E3E8EE`:`none`},children:[(0,P.jsx)(`span`,{style:{flexShrink:0,display:`flex`},children:(0,P.jsx)(F,{name:e.icono,size:24})}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`div`,{style:{fontSize:15,fontWeight:700,color:`#4434D4`,marginBottom:2},children:e.titulo}),(0,P.jsx)(`div`,{style:{fontSize:14,fontWeight:500,color:`#425567`,lineHeight:1.45},children:e.texto})]})]},t)),(0,P.jsx)(`a`,{href:`https://viva.essalud.gob.pe/viva/login`,target:`_blank`,rel:`noopener noreferrer`,style:{display:`block`,marginTop:12,textAlign:`center`,color:ar,fontWeight:700,textDecoration:`underline`},children:`Ir a la plataforma VIVA →`})]}),(0,P.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:10},children:[(0,P.jsxs)(`button`,{onClick:()=>{Ma(null),Aa(``),Oa(!1),n(`lactancia_terminos`)},className:`pisa`,style:{width:`100%`,border:`none`,borderRadius:`var(--r)`,background:rr,color:`white`,fontFamily:`inherit`,fontWeight:700,fontSize:17,padding:`15px`,cursor:`pointer`,boxShadow:G},children:[(0,P.jsx)(F,{name:`recargar`,size:19}),` Consultar de nuevo`]}),(0,P.jsx)(`button`,{className:`btn-volver`,onClick:$,children:`← Volver al inicio`})]})]})})(),t===`avance_tramite`&&(0,P.jsxs)(`div`,{style:{maxWidth:540,margin:`0 auto`,padding:`18px 16px 30px`},children:[(0,P.jsx)(I,{rotulo:`Seguimiento`,titulo:`Revisar avance de trámite`,detalle:`Consulta en qué etapa está tu solicitud de canje de descanso médico.`,icono:`grafico`,color:nr,margen:12}),(0,P.jsx)(L,{audioSrc:`/audio/avance_tramite.mp3`,titulo:`Doña Rosa te explica el avance de trámite`}),La&&(0,P.jsx)(`div`,{style:{background:`#FFF1F2`,border:`1px solid #F6CCD0`,borderRadius:`var(--r)`,padding:`12px 14px`,marginBottom:16,color:`#9B1C31`},children:La}),(0,P.jsxs)(`div`,{style:{background:`#F6F9FC`,borderRadius:`var(--r)`,padding:16,marginBottom:16},children:[(0,P.jsxs)(`label`,{style:{display:`block`,fontSize:14,fontWeight:600,color:`#0D253D`,marginBottom:8},children:[`Número de trámite `,(0,P.jsx)(`span`,{style:{fontWeight:400,color:`#5B6B7D`},children:`(opcional)`})]}),(0,P.jsx)(`input`,{type:`text`,inputMode:`numeric`,value:Na,onChange:e=>Pa(e.target.value.replace(/[^0-9]/g,``)),placeholder:`Ejemplo: 20260012345`,style:{width:`100%`,padding:`14px 16px`,fontSize:16,border:`2px solid #E3E8EE`,borderRadius:`var(--r)`,fontFamily:`inherit`,boxSizing:`border-box`}}),(0,P.jsx)(`p`,{style:{fontSize:13,color:`#5B6B7D`,marginTop:8,lineHeight:1.4},children:`Si no tienes el número, consultamos con tu DNI.`})]}),(0,P.jsxs)(`button`,{className:`pisa`,onClick:ho,style:{display:`flex`,alignItems:`center`,justifyContent:`center`,gap:10,background:er,color:`white`,border:`none`,borderRadius:`var(--r)`,padding:`16px 0`,width:`100%`,fontFamily:`inherit`,fontSize:18,fontWeight:700,cursor:`pointer`,boxShadow:G},children:[(0,P.jsx)(F,{name:`grafico`,size:22}),` Consultar avance`]}),(0,P.jsx)(`button`,{className:`btn-volver`,onClick:$,style:{marginTop:14},children:`← Volver al inicio`})]}),t===`avance_cargando`&&(0,P.jsx)(gn,{frase:`Estamos consultando el avance de tu trámite…`,espacio:(0,P.jsx)(Sn,{slug:u}),listo:na,fraseListo:ia===`avance_tramite`?`Terminamos de revisar. Hay algo que corregir.`:`Listo. Ya tenemos el avance de tu trámite.`,onContinuar:so}),t===`avance_resultado`&&Y&&(0,P.jsxs)(`div`,{style:{maxWidth:540,margin:`0 auto`,padding:`18px 16px 30px`},children:[(0,P.jsx)(I,{rotulo:`Seguimiento`,titulo:`Avance de tu trámite`,detalle:`Solicitud de canje de descanso médico${Y.nroTramite?` · N° ${Y.nroTramite}`:``}`,icono:`grafico`,color:nr,margen:12}),(0,P.jsx)(L,{audioSrc:`/audio/avance_resultado.mp3`,titulo:`Doña Rosa te explica el avance`}),Y.existe===!1?(0,P.jsxs)(`div`,{children:[(0,P.jsxs)(`div`,{style:{background:`#F6F9FC`,borderRadius:`var(--r)`,padding:16,marginBottom:16},children:[(0,P.jsx)(`h2`,{style:{fontSize:18,fontWeight:700,color:nr,margin:`0 0 6px`,lineHeight:1.3},children:Y.titulo}),(0,P.jsx)(`p`,{style:{fontSize:15,color:`var(--body)`,lineHeight:1.45,margin:`0 0 8px`},children:Y.mensaje}),Y.recomendacion&&(0,P.jsx)(`p`,{style:{fontSize:14,color:`#5B6B7D`,lineHeight:1.4,marginTop:10,paddingTop:10,borderTop:`1px solid #E3E8EE`},children:Y.recomendacion})]}),(0,P.jsx)(`button`,{className:`btn-volver`,onClick:$,children:`← Volver al inicio`})]}):(0,P.jsx)(_r,{estado:Y.estado,titulo:Y.titulo,mensaje:Y.mensaje,recomendacion:Y.recomendacion,onVerificarCitt:lo,onVolver:$,onIrAEstablecimiento:()=>{X(),f(`inicio`),n(`elegir_establecimiento`)},accion:Y.accion})]}),t===`formulario`&&(0,P.jsxs)(`div`,{style:{maxWidth:540,margin:`0 auto`,padding:`16px 16px 40px`},children:[(0,P.jsx)(I,{rotulo:`Formulario oficial · tu seguro`,titulo:`Trámite de Gestión Múltiple`,detalle:`DS 020-2021-TR · El Peruano, 25/11/2021`}),(0,P.jsx)(L,{audioSrc:`/audio/formulario.mp3`,titulo:`Doña Rosa te explica este formulario`}),(0,P.jsxs)(`a`,{className:`pisa`,href:`/formulario-gestion-multiple.pdf`,target:`_blank`,rel:`noopener noreferrer`,style:{display:`flex`,alignItems:`center`,justifyContent:`center`,gap:10,background:`#227A4A`,color:`white`,border:`none`,borderRadius:`var(--r)`,padding:`16px 18px`,fontFamily:`inherit`,fontWeight:700,fontSize:16,textDecoration:`none`,boxShadow:G,marginBottom:12},children:[(0,P.jsx)(`span`,{style:{display:`flex`},children:(0,P.jsx)(F,{name:`descarga`,size:22})}),`Descargar formulario (PDF)`]}),(0,P.jsxs)(`div`,{style:{background:`#E3F3EF`,border:`1.5px solid #227A4A`,borderRadius:`var(--r)`,padding:`11px 14px`,marginBottom:14,display:`flex`,alignItems:`flex-start`,gap:10},children:[(0,P.jsx)(`span`,{style:{flexShrink:0,marginTop:1,display:`flex`},children:(0,P.jsx)(F,{name:`cronometro`,size:18})}),(0,P.jsxs)(`p`,{style:{fontSize:14,fontWeight:500,color:`#227A4A`,lineHeight:1.45},children:[`Llénalo en casa `,(0,P.jsx)(`strong`,{children:`antes de venir al hospital`}),` — ahorrarás tiempo en la cola.`]})]}),(0,P.jsxs)(`div`,{style:{background:`#FBF0DE`,border:`1.5px solid #8A5A17`,borderRadius:`var(--r)`,padding:`11px 14px`,marginBottom:14,display:`flex`,alignItems:`flex-start`,gap:10},children:[(0,P.jsx)(`span`,{style:{flexShrink:0,marginTop:1,display:`flex`},children:(0,P.jsx)(F,{name:`chincheta`,size:18})}),(0,P.jsxs)(`p`,{style:{fontSize:14,fontWeight:500,color:`#6B430E`,lineHeight:1.45},children:[`También puedes pedirlo en `,(0,P.jsx)(`strong`,{children:`Secretaría, Administración`}),` o al `,(0,P.jsx)(`strong`,{children:`personal de Vigilancia`}),`. Te lo facilitan gratis.`]})]}),(0,P.jsx)(`p`,{className:`subrotulo`,style:{marginTop:4},children:`Vista previa`}),(0,P.jsx)(`div`,{style:{background:`#F6F9FC`,borderRadius:`var(--r)`,border:`1.5px solid #E3E8EE`,padding:6,boxShadow:`var(--sh-1)`,marginBottom:16},children:(0,P.jsx)(`img`,{src:`/formulario-preview.jpg`,alt:`Formulario de Trámite de Gestión Múltiple — vista previa de la primera página`,width:`800`,height:`1276`,loading:`lazy`,decoding:`async`,style:{display:`block`,width:`100%`,height:`auto`,aspectRatio:`800 / 1276`,borderRadius:`var(--r)`}})}),(0,P.jsx)(`button`,{className:`btn-volver`,onClick:$,children:`← Volver al inicio`})]})]},t)}),t!==`verificando_qr`&&t!==`qr_invalido`&&t!==`admin_qr`&&t!==`admin_avance`&&t!==`admin_establecimientos`&&t!==`admin_establecimiento`&&t!==`crm_costos`&&t!==`splash`&&t!==`seguro_cargando`&&t!==`citt_cargando`&&t!==`lactancia_cargando`&&(0,P.jsx)(`footer`,{style:{background:`var(--carton)`,color:`var(--carton-txt)`,borderTop:`1px solid rgba(234,221,198,0.14)`,textAlign:`center`,fontSize:`clamp(8.5px, 2.2vw, 10px)`,fontWeight:400,padding:`6px 10px`,lineHeight:1.25,textWrap:`balance`,...Ja?{position:`fixed`,left:0,right:0,bottom:0,zIndex:30}:{}},children:Ja?(0,P.jsxs)(P.Fragment,{children:[`Preguntas orientativas · Directiva N° 015-GG-ESSALUD-2014`,(0,P.jsx)(`br`,{}),`No reemplazan la evaluación oficial del trámite.`]}):(0,P.jsxs)(P.Fragment,{children:[`Plataforma independiente · no es un aplicativo oficial de EsSalud`,(0,P.jsx)(`br`,{}),`Información orientativa · Directiva N° 015-GG-ESSALUD-2014`]})}),Zi&&(0,P.jsx)(`div`,{style:{position:`fixed`,inset:0,background:`rgba(15,45,85,0.55)`,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:20,zIndex:1200},children:(0,P.jsxs)(`div`,{style:{background:`#F6F9FC`,borderRadius:`var(--r)`,padding:`24px 20px`,maxWidth:380,width:`100%`,textAlign:`center`,boxShadow:`0 12px 32px rgba(0,0,0,0.25)`},children:[(0,P.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:10,color:`#425567`},children:(0,P.jsx)(F,{name:`reloj`,size:32})}),(0,P.jsx)(`h2`,{style:{fontSize:19,fontWeight:700,color:`#0D253D`,marginBottom:8},children:`¿Sigues ahí?`}),(0,P.jsx)(`p`,{style:{fontSize:15,fontWeight:700,color:`#425567`,marginBottom:18,lineHeight:1.4},children:`En 1 minuto volveremos al inicio por tu seguridad.`}),(0,P.jsx)(`button`,{onClick:()=>Qi(!1),style:{width:`100%`,border:`none`,borderRadius:`var(--r)`,background:`#5B4FE9`,color:`white`,fontFamily:`inherit`,fontWeight:700,fontSize:17,padding:15,cursor:`pointer`},children:`Sigo aquí`})]})})]})}(0,a.createRoot)(document.getElementById(`root`)).render((0,P.jsxs)(o.StrictMode,{children:[(0,P.jsx)(vr,{}),(0,P.jsx)(S,{}),(0,P.jsx)(ae,{})]})),requestAnimationFrame(()=>{document.documentElement.removeAttribute(`data-arranque`)}),`serviceWorker`in navigator&&window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`/sw.js`).catch(()=>{})});