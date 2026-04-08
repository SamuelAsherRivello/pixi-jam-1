const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["js/browserAll.DIjSPoJj.js","js/localUniformBit.Def9Ba_9.js","js/FilterSystem.BYIROQq9.js","js/CanvasPool.CDu62F6N.js","js/getBatchSamplersUniformGroup.DRvJvVrl.js","js/FederatedEventTarget.Cm8apdZO.js","js/init.DXd_ierY.js","js/webworkerAll.B5Lz-Ska.js","js/WebGPURenderer.BQRw4J_G.js","js/WebGPURenderer.B6qy6N9z.js","js/BufferResource.DanY1CU2.js","js/WebGLRenderer.Dqmjs0v0.js","js/WebGLRenderer.-UohKqqa.js"])))=>i.map(i=>d[i]);
import{G as e,H as t,I as n,P as r,V as i,X as a,Y as o,_ as s,a as c,at as l,ct as u,dt as d,et as f,ft as p,g as m,lt as h,m as g,ot as _,pt as ee,rt as v,st as y,tt as te,ut as b,y as ne,z as re}from"./localUniformBit.Def9Ba_9.js";import{t as ie}from"./preload-helper.CGnotxZ3.js";import{A as x,C as ae,D as oe,E as se,M as S,N as C,O as w,S as ce,T as le,b as T,c as ue,f as de,k as E,l as fe,m as pe,p as me,u as he,w as ge,x as _e,y as ve}from"./FilterSystem.BYIROQq9.js";import{f as ye,h as be,m as xe,p as D}from"./BufferResource.DanY1CU2.js";var Se=d(((e,t)=>{var n=typeof Reflect==`object`?Reflect:null,r=n&&typeof n.apply==`function`?n.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)},i=n&&typeof n.ownKeys==`function`?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};function a(e){console&&console.warn&&console.warn(e)}var o=Number.isNaN||function(e){return e!==e};function s(){s.init.call(this)}t.exports=s,t.exports.once=v,s.EventEmitter=s,s.prototype._events=void 0,s.prototype._eventsCount=0,s.prototype._maxListeners=void 0;var c=10;function l(e){if(typeof e!=`function`)throw TypeError(`The "listener" argument must be of type Function. Received type `+typeof e)}Object.defineProperty(s,`defaultMaxListeners`,{enumerable:!0,get:function(){return c},set:function(e){if(typeof e!=`number`||e<0||o(e))throw RangeError(`The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received `+e+`.`);c=e}}),s.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},s.prototype.setMaxListeners=function(e){if(typeof e!=`number`||e<0||o(e))throw RangeError(`The value of "n" is out of range. It must be a non-negative number. Received `+e+`.`);return this._maxListeners=e,this};function u(e){return e._maxListeners===void 0?s.defaultMaxListeners:e._maxListeners}s.prototype.getMaxListeners=function(){return u(this)},s.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var i=e===`error`,a=this._events;if(a!==void 0)i&&=a.error===void 0;else if(!i)return!1;if(i){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var s=Error(`Unhandled error.`+(o?` (`+o.message+`)`:``));throw s.context=o,s}var c=a[e];if(c===void 0)return!1;if(typeof c==`function`)r(c,this,t);else for(var l=c.length,u=g(c,l),n=0;n<l;++n)r(u[n],this,t);return!0};function d(e,t,n,r){var i,o,s;if(l(n),o=e._events,o===void 0?(o=e._events=Object.create(null),e._eventsCount=0):(o.newListener!==void 0&&(e.emit(`newListener`,t,n.listener?n.listener:n),o=e._events),s=o[t]),s===void 0)s=o[t]=n,++e._eventsCount;else if(typeof s==`function`?s=o[t]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),i=u(e),i>0&&s.length>i&&!s.warned){s.warned=!0;var c=Error(`Possible EventEmitter memory leak detected. `+s.length+` `+String(t)+` listeners added. Use emitter.setMaxListeners() to increase limit`);c.name=`MaxListenersExceededWarning`,c.emitter=e,c.type=t,c.count=s.length,a(c)}return e}s.prototype.addListener=function(e,t){return d(this,e,t,!1)},s.prototype.on=s.prototype.addListener,s.prototype.prependListener=function(e,t){return d(this,e,t,!0)};function f(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function p(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=f.bind(r);return i.listener=n,r.wrapFn=i,i}s.prototype.once=function(e,t){return l(t),this.on(e,p(this,e,t)),this},s.prototype.prependOnceListener=function(e,t){return l(t),this.prependListener(e,p(this,e,t)),this},s.prototype.removeListener=function(e,t){var n,r,i,a,o;if(l(t),r=this._events,r===void 0||(n=r[e],n===void 0))return this;if(n===t||n.listener===t)--this._eventsCount===0?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit(`removeListener`,e,n.listener||t));else if(typeof n!=`function`){for(i=-1,a=n.length-1;a>=0;a--)if(n[a]===t||n[a].listener===t){o=n[a].listener,i=a;break}if(i<0)return this;i===0?n.shift():_(n,i),n.length===1&&(r[e]=n[0]),r.removeListener!==void 0&&this.emit(`removeListener`,e,o||t)}return this},s.prototype.off=s.prototype.removeListener,s.prototype.removeAllListeners=function(e){var t,n=this._events,r;if(n===void 0)return this;if(n.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):n[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.length===0){var i=Object.keys(n),a;for(r=0;r<i.length;++r)a=i[r],a!==`removeListener`&&this.removeAllListeners(a);return this.removeAllListeners(`removeListener`),this._events=Object.create(null),this._eventsCount=0,this}if(t=n[e],typeof t==`function`)this.removeListener(e,t);else if(t!==void 0)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this};function m(e,t,n){var r=e._events;if(r===void 0)return[];var i=r[t];return i===void 0?[]:typeof i==`function`?n?[i.listener||i]:[i]:n?ee(i):g(i,i.length)}s.prototype.listeners=function(e){return m(this,e,!0)},s.prototype.rawListeners=function(e){return m(this,e,!1)},s.listenerCount=function(e,t){return typeof e.listenerCount==`function`?e.listenerCount(t):h.call(e,t)},s.prototype.listenerCount=h;function h(e){var t=this._events;if(t!==void 0){var n=t[e];if(typeof n==`function`)return 1;if(n!==void 0)return n.length}return 0}s.prototype.eventNames=function(){return this._eventsCount>0?i(this._events):[]};function g(e,t){for(var n=Array(t),r=0;r<t;++r)n[r]=e[r];return n}function _(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}function ee(e){for(var t=Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}function v(e,t){return new Promise(function(n,r){function i(n){e.removeListener(t,a),r(n)}function a(){typeof e.removeListener==`function`&&e.removeListener(`error`,i),n([].slice.call(arguments))}te(e,t,a,{once:!0}),t!==`error`&&y(e,i,{once:!0})})}function y(e,t,n){typeof e.on==`function`&&te(e,`error`,t,n)}function te(e,t,n,r){if(typeof e.on==`function`)r.once?e.once(t,n):e.on(t,n);else if(typeof e.addEventListener==`function`)e.addEventListener(t,function i(a){r.once&&e.removeEventListener(t,i),n(a)});else throw TypeError(`The "emitter" argument must be of type EventEmitter. Received type `+typeof e)}}))(),Ce=class{eventEmitter=new Se.EventEmitter;eventName=`valueChanged`;on(e){this.eventEmitter.on(this.eventName,e)}off(e){this.eventEmitter.off(this.eventName,e)}invoke(e,t){this.eventEmitter.emit(this.eventName,e,t)}refresh(e,t){this.invoke(e,t)}},we=class{OnValueChanged;_currentValue;_previousValue;constructor(e){if(this.OnValueChanged=new Ce,e!==void 0)this._currentValue=e,this._previousValue=e;else throw Error(`Initial value must be provided`)}get Value(){return this._currentValue}set Value(e){this._currentValue=this.OnValueChanging(this._currentValue,e),this.OnValueChanged.invoke(this._previousValue,this._currentValue),this._previousValue=this._currentValue}OnValueChanging(e,t){return t}refreshValueChanged(){this.OnValueChanged.refresh(this._previousValue,this._currentValue)}},Te={extension:{type:h.Environment,name:`browser`,priority:-1},test:()=>!0,load:async()=>{await ie(()=>import(`./browserAll.DIjSPoJj.js`),__vite__mapDeps([0,1,2,3,4,5,6]))}},Ee={extension:{type:h.Environment,name:`webworker`,priority:0},test:()=>typeof self<`u`&&self.WorkerGlobalScope!==void 0,load:async()=>{await ie(()=>import(`./webworkerAll.B5Lz-Ska.js`),__vite__mapDeps([7,2,1,3,4,6]))}},De;function Oe(e){return De===void 0&&(De=(()=>{let t={stencil:!0,failIfMajorPerformanceCaveat:e??be.defaultOptions.failIfMajorPerformanceCaveat};try{if(!i.get().getWebGLRenderingContext())return!1;let e=i.get().createCanvas().getContext(`webgl`,t),n=!!e?.getContextAttributes()?.stencil;if(e){let t=e.getExtension(`WEBGL_lose_context`);t&&t.loseContext()}return e=null,n}catch{return!1}})()),De}var ke;async function Ae(e={}){return ke===void 0&&(ke=await(async()=>{if(!i.get().getNavigator().gpu)return!1;try{return await(await navigator.gpu.requestAdapter(e)).requestDevice(),!0}catch{return!1}})()),ke}var je=[`webgl`,`webgpu`,`canvas`];async function Me(e){let t=[];e.preference?(t.push(e.preference),je.forEach(n=>{n!==e.preference&&t.push(n)})):t=je.slice();let n,r={};for(let i=0;i<t.length;i++){let a=t[i];if(a===`webgpu`&&await Ae()){let{WebGPURenderer:t}=await ie(async()=>{let{WebGPURenderer:e}=await import(`./WebGPURenderer.BQRw4J_G.js`);return{WebGPURenderer:e}},__vite__mapDeps([8,9,1,10,3]));n=t,r={...e,...e.webgpu};break}else if(a===`webgl`&&Oe(e.failIfMajorPerformanceCaveat??be.defaultOptions.failIfMajorPerformanceCaveat)){let{WebGLRenderer:t}=await ie(async()=>{let{WebGLRenderer:e}=await import(`./WebGLRenderer.Dqmjs0v0.js`);return{WebGLRenderer:e}},__vite__mapDeps([11,12,1,10,4]));n=t,r={...e,...e.webgl};break}else if(a===`canvas`)throw r={...e},Error(`CanvasRenderer is not yet implemented`)}if(delete r.webgpu,delete r.webgl,!n)throw Error(`No available renderer for the current environment`);let i=new n;return await i.init(r),i}var Ne=class e{constructor(...e){this.stage=new t,e[0]!==void 0&&f(te,`Application constructor options are deprecated, please use Application.init() instead.`)}async init(t){t={...t},this.renderer=await Me(t),e._plugins.forEach(e=>{e.init.call(this,t)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return f(te,`Application.view is deprecated, please use Application.canvas instead.`),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(t=!1,n=!1){let r=e._plugins.slice(0);r.reverse(),r.forEach(e=>{e.destroy.call(this)}),this.stage.destroy(n),this.stage=null,this.renderer.destroy(t),this.renderer=null}};Ne._plugins=[];var Pe=Ne;b.handleByList(h.Application,Pe._plugins),b.add(xe);var Fe=class extends fe{constructor(e,t){super();let{textures:r,data:i}=e;Object.keys(i.pages).forEach(e=>{let t=r[i.pages[parseInt(e,10)].id];this.pages.push({texture:t})}),Object.keys(i.chars).forEach(e=>{let t=i.chars[e],{frame:o,source:s}=r[t.page],c=new n({source:s,frame:new a(t.x+o.x,t.y+o.y,t.width,t.height)});this.chars[e]={id:e.codePointAt(0),xOffset:t.xOffset,yOffset:t.yOffset,xAdvance:t.xAdvance,kerning:t.kerning??{},texture:c}}),this.baseRenderedFontSize=i.fontSize,this.baseMeasurementFontSize=i.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:i.fontSize},this.baseLineOffset=i.baseLineOffset,this.lineHeight=i.lineHeight,this.fontFamily=i.fontFamily,this.distanceField=i.distanceField??{type:`none`,range:0},this.url=t}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){let{texture:t}=this.pages[e];t.destroy(!0)}this.pages=null}static install(e){ue.install(e)}static uninstall(e){ue.uninstall(e)}},Ie={test(e){return typeof e==`string`&&e.startsWith(`info face=`)},parse(e){let t=e.match(/^[a-z]+\s+.+$/gm),n={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(let e in t){let r=t[e].match(/^[a-z]+/gm)[0],i=t[e].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),a={};for(let e in i){let t=i[e].split(`=`),n=t[0],r=t[1].replace(/"/gm,``),o=parseFloat(r);a[n]=isNaN(o)?r:o}n[r].push(a)}let r={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:``,distanceField:null,baseLineOffset:0},[i]=n.info,[a]=n.common,[o]=n.distanceField??[];o&&(r.distanceField={range:parseInt(o.distanceRange,10),type:o.fieldType}),r.fontSize=parseInt(i.size,10),r.fontFamily=i.face,r.lineHeight=parseInt(a.lineHeight,10);let s=n.page;for(let e=0;e<s.length;e++)r.pages.push({id:parseInt(s[e].id,10)||0,file:s[e].file});let c={};r.baseLineOffset=r.lineHeight-parseInt(a.base,10);let l=n.char;for(let e=0;e<l.length;e++){let t=l[e],n=parseInt(t.id,10),i=t.letter??t.char??String.fromCharCode(n);i===`space`&&(i=` `),c[n]=i,r.chars[i]={id:n,page:parseInt(t.page,10)||0,x:parseInt(t.x,10),y:parseInt(t.y,10),width:parseInt(t.width,10),height:parseInt(t.height,10),xOffset:parseInt(t.xoffset,10),yOffset:parseInt(t.yoffset,10),xAdvance:parseInt(t.xadvance,10),kerning:{}}}let u=n.kerning||[];for(let e=0;e<u.length;e++){let t=parseInt(u[e].first,10),n=parseInt(u[e].second,10),i=parseInt(u[e].amount,10);r.chars[c[n]].kerning[c[t]]=i}return r}},Le={test(e){let t=e;return typeof t!=`string`&&`getElementsByTagName`in t&&t.getElementsByTagName(`page`).length&&t.getElementsByTagName(`info`)[0].getAttribute(`face`)!==null},parse(e){let t={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:``,distanceField:null,baseLineOffset:0},n=e.getElementsByTagName(`info`)[0],r=e.getElementsByTagName(`common`)[0],i=e.getElementsByTagName(`distanceField`)[0];i&&(t.distanceField={type:i.getAttribute(`fieldType`),range:parseInt(i.getAttribute(`distanceRange`),10)});let a=e.getElementsByTagName(`page`),o=e.getElementsByTagName(`char`),s=e.getElementsByTagName(`kerning`);t.fontSize=parseInt(n.getAttribute(`size`),10),t.fontFamily=n.getAttribute(`face`),t.lineHeight=parseInt(r.getAttribute(`lineHeight`),10);for(let e=0;e<a.length;e++)t.pages.push({id:parseInt(a[e].getAttribute(`id`),10)||0,file:a[e].getAttribute(`file`)});let c={};t.baseLineOffset=t.lineHeight-parseInt(r.getAttribute(`base`),10);for(let e=0;e<o.length;e++){let n=o[e],r=parseInt(n.getAttribute(`id`),10),i=n.getAttribute(`letter`)??n.getAttribute(`char`)??String.fromCharCode(r);i===`space`&&(i=` `),c[r]=i,t.chars[i]={id:r,page:parseInt(n.getAttribute(`page`),10)||0,x:parseInt(n.getAttribute(`x`),10),y:parseInt(n.getAttribute(`y`),10),width:parseInt(n.getAttribute(`width`),10),height:parseInt(n.getAttribute(`height`),10),xOffset:parseInt(n.getAttribute(`xoffset`),10),yOffset:parseInt(n.getAttribute(`yoffset`),10),xAdvance:parseInt(n.getAttribute(`xadvance`),10),kerning:{}}}for(let e=0;e<s.length;e++){let n=parseInt(s[e].getAttribute(`first`),10),r=parseInt(s[e].getAttribute(`second`),10),i=parseInt(s[e].getAttribute(`amount`),10);t.chars[c[r]].kerning[c[n]]=i}return t}},Re={test(e){return typeof e==`string`&&e.includes(`<font>`)?Le.test(i.get().parseXML(e)):!1},parse(e){return Le.parse(i.get().parseXML(e))}},ze=[`.xml`,`.fnt`],Be={extension:{type:h.CacheParser,name:`cacheBitmapFont`},test:e=>e instanceof Fe,getCacheableAssets(e,t){let n={};return e.forEach(e=>{n[e]=t,n[`${e}-bitmap`]=t}),n[`${t.fontFamily}-bitmap`]=t,n}},Ve={extension:{type:h.LoadParser,priority:x.Normal},name:`loadBitmapFont`,test(e){return ze.includes(E.extname(e).toLowerCase())},async testParse(e){return Ie.test(e)||Re.test(e)},async parse(e,t,n){let r=Ie.test(e)?Ie.parse(e):Re.parse(e),{src:i}=t,{pages:a}=r,o=[],s=r.distanceField?{scaleMode:`linear`,alphaMode:`premultiply-alpha-on-upload`,autoGenerateMipmaps:!1,resolution:1}:{};for(let e=0;e<a.length;++e){let t=a[e].file,n=E.join(E.dirname(i),t);n=le(n,i),o.push({src:n,data:s})}let c=await n.load(o);return new Fe({data:r,textures:o.map(e=>c[e.src])},i)},async load(e,t){return await(await i.get().fetch(e)).text()},async unload(e,t,n){await Promise.all(e.pages.map(e=>n.unload(e.texture.source._sourceOrigin))),e.destroy()}},He=class{constructor(e,t=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=t}add(e){e.forEach(e=>{this._assetList.push(e)}),this.verbose&&console.log(`[BackgroundLoader] assets: `,this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;let e=[],t=Math.min(this._assetList.length,this._maxConcurrent);for(let n=0;n<t;n++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}},Ue={extension:{type:h.CacheParser,name:`cacheTextureArray`},test:e=>Array.isArray(e)&&e.every(e=>e instanceof n),getCacheableAssets:(e,t)=>{let n={};return e.forEach(e=>{t.forEach((t,r)=>{n[e+(r===0?``:r+1)]=t})}),n}};async function We(e){if(`Image`in globalThis)return new Promise(t=>{let n=new Image;n.onload=()=>{t(!0)},n.onerror=()=>{t(!1)},n.src=e});if(`createImageBitmap`in globalThis&&`fetch`in globalThis){try{let t=await(await fetch(e)).blob();await createImageBitmap(t)}catch{return!1}return!0}return!1}var Ge={extension:{type:h.DetectionParser,priority:1},test:async()=>We(`data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=`),add:async e=>[...e,`avif`],remove:async e=>e.filter(e=>e!==`avif`)},Ke=[`png`,`jpg`,`jpeg`],qe={extension:{type:h.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async e=>[...e,...Ke],remove:async e=>e.filter(e=>!Ke.includes(e))},Je=`WorkerGlobalScope`in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function Ye(e){return Je?!1:document.createElement(`video`).canPlayType(e)!==``}var Xe={extension:{type:h.DetectionParser,priority:0},test:async()=>Ye(`video/mp4`),add:async e=>[...e,`mp4`,`m4v`],remove:async e=>e.filter(e=>e!==`mp4`&&e!==`m4v`)},Ze={extension:{type:h.DetectionParser,priority:0},test:async()=>Ye(`video/ogg`),add:async e=>[...e,`ogv`],remove:async e=>e.filter(e=>e!==`ogv`)},Qe={extension:{type:h.DetectionParser,priority:0},test:async()=>Ye(`video/webm`),add:async e=>[...e,`webm`],remove:async e=>e.filter(e=>e!==`webm`)},$e={extension:{type:h.DetectionParser,priority:0},test:async()=>We(`data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=`),add:async e=>[...e,`webp`],remove:async e=>e.filter(e=>e!==`webp`)},et=class{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,t,n)=>(this._parsersValidated=!1,e[t]=n,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(t,n){let r={promise:null,parser:null};return r.promise=(async()=>{let i=null,a=null;if(n.loadParser&&(a=this._parserHash[n.loadParser],a||e(`[Assets] specified load parser "${n.loadParser}" not found while loading ${t}`)),!a){for(let e=0;e<this.parsers.length;e++){let r=this.parsers[e];if(r.load&&r.test?.(t,n,this)){a=r;break}}if(!a)return e(`[Assets] ${t} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}i=await a.load(t,n,this),r.parser=a;for(let e=0;e<this.parsers.length;e++){let t=this.parsers[e];t.parse&&t.parse&&await t.testParse?.(i,n,this)&&(i=await t.parse(i,n,this)||i,r.parser=t)}return i})(),r}async load(e,t){this._parsersValidated||this._validateParsers();let n=0,r={},i=oe(e),a=w(e,e=>({alias:[e],src:e,data:{}})),o=a.length,s=a.map(async e=>{let i=E.toAbsolute(e.src);if(!r[e.src])try{this.promiseCache[i]||(this.promiseCache[i]=this._getLoadPromiseAndParser(i,e)),r[e.src]=await this.promiseCache[i].promise,t&&t(++n/o)}catch(t){throw delete this.promiseCache[i],delete r[e.src],Error(`[Loader.load] Failed to load ${i}.
${t}`)}});return await Promise.all(s),i?r[a[0].src]:r}async unload(e){let t=w(e,e=>({alias:[e],src:e})).map(async e=>{let t=E.toAbsolute(e.src),n=this.promiseCache[t];if(n){let r=await n.promise;delete this.promiseCache[t],await n.parser?.unload?.(r,e,this)}});await Promise.all(t)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((t,n)=>(n.name?t[n.name]&&e(`[Assets] loadParser name conflict "${n.name}"`):e(`[Assets] loadParser should have a name`),{...t,[n.name]:n}),{})}};function tt(e,t){if(Array.isArray(t)){for(let n of t)if(e.startsWith(`data:${n}`))return!0;return!1}return e.startsWith(`data:${t}`)}function nt(e,t){let n=e.split(`?`)[0],r=E.extname(n).toLowerCase();return Array.isArray(t)?t.includes(r):r===t}var rt=`.json`,it=`application/json`,at={extension:{type:h.LoadParser,priority:x.Low},name:`loadJson`,test(e){return tt(e,it)||nt(e,rt)},async load(e){return await(await i.get().fetch(e)).json()}},ot=`.txt`,st=`text/plain`,ct={name:`loadTxt`,extension:{type:h.LoadParser,priority:x.Low,name:`loadTxt`},test(e){return tt(e,st)||nt(e,ot)},async load(e){return await(await i.get().fetch(e)).text()}},lt=[`normal`,`bold`,`100`,`200`,`300`,`400`,`500`,`600`,`700`,`800`,`900`],ut=[`.ttf`,`.otf`,`.woff`,`.woff2`],dt=[`font/ttf`,`font/otf`,`font/woff`,`font/woff2`],ft=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function pt(e){let t=E.extname(e),n=E.basename(e,t).replace(/(-|_)/g,` `).toLowerCase().split(` `).map(e=>e.charAt(0).toUpperCase()+e.slice(1)),r=n.length>0;for(let e of n)if(!e.match(ft)){r=!1;break}let i=n.join(` `);return r||(i=`"${i.replace(/[\\"]/g,`\\$&`)}"`),i}var mt=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function ht(e){return mt.test(e)?e:encodeURI(e)}var gt={extension:{type:h.LoadParser,priority:x.Low},name:`loadWebFont`,test(e){return tt(e,dt)||nt(e,ut)},async load(t,n){let r=i.get().getFontFaceSet();if(r){let e=[],i=n.data?.family??pt(t),a=n.data?.weights?.filter(e=>lt.includes(e))??[`normal`],o=n.data??{};for(let n=0;n<a.length;n++){let s=a[n],c=new FontFace(i,`url(${ht(t)})`,{...o,weight:s});await c.load(),r.add(c),e.push(c)}return T.set(`${i}-and-url`,{url:t,fontFaces:e}),e.length===1?e[0]:e}return e(`[loadWebFont] FontFace API is not supported. Skipping loading font`),null},unload(e){(Array.isArray(e)?e:[e]).forEach(e=>{T.remove(e.family),i.get().getFontFaceSet().delete(e)})}};function _t(e,t=1){let n=se.RETINA_PREFIX?.exec(e);return n?parseFloat(n[1]):t}function vt(t,r,i){t.label=i,t._sourceOrigin=i;let a=new n({source:t,label:i}),o=()=>{delete r.promiseCache[i],T.has(i)&&T.remove(i)};return a.source.once(`destroy`,()=>{r.promiseCache[i]&&(e(`[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource.`),o())}),a.once(`destroy`,()=>{t.destroyed||(e(`[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture.`),o())}),a}var yt=`.svg`,bt=`image/svg+xml`,xt={extension:{type:h.LoadParser,priority:x.Low,name:`loadSVG`},name:`loadSVG`,config:{crossOrigin:`anonymous`,parseAsGraphicsContext:!1},test(e){return tt(e,bt)||nt(e,yt)},async load(e,t,n){return t.data.parseAsGraphicsContext??this.config.parseAsGraphicsContext?Ct(e):St(e,t,n,this.config.crossOrigin)},unload(e){e.destroy(!0)}};async function St(e,t,n,r){let a=await(await i.get().fetch(e)).blob(),o=URL.createObjectURL(a),s=new Image;s.src=o,s.crossOrigin=r,await s.decode(),URL.revokeObjectURL(o);let c=document.createElement(`canvas`),l=c.getContext(`2d`),u=t.data?.resolution||_t(e),d=t.data?.width??s.width,f=t.data?.height??s.height;c.width=d*u,c.height=f*u,l.drawImage(s,0,0,d*u,f*u);let{parseAsGraphicsContext:p,...m}=t.data;return vt(new ae({resource:c,alphaMode:`premultiply-alpha-on-upload`,resolution:u,...m}),n,e)}async function Ct(e){let t=await(await i.get().fetch(e)).text(),n=new pe;return n.svg(t),n}var wt=`(function () {
    'use strict';

    const WHITE_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
    async function checkImageBitmap() {
      try {
        if (typeof createImageBitmap !== "function")
          return false;
        const response = await fetch(WHITE_PNG);
        const imageBlob = await response.blob();
        const imageBitmap = await createImageBitmap(imageBlob);
        return imageBitmap.width === 1 && imageBitmap.height === 1;
      } catch (e) {
        return false;
      }
    }
    void checkImageBitmap().then((result) => {
      self.postMessage(result);
    });

})();
`,Tt=null,Et=class{constructor(){Tt||=URL.createObjectURL(new Blob([wt],{type:`application/javascript`})),this.worker=new Worker(Tt)}};Et.revokeObjectURL=function(){Tt&&=(URL.revokeObjectURL(Tt),null)};var Dt=`(function () {
    'use strict';

    async function loadImageBitmap(url) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \${response.status} \${response.statusText}\`);
      }
      const imageBlob = await response.blob();
      const imageBitmap = await createImageBitmap(imageBlob);
      return imageBitmap;
    }
    self.onmessage = async (event) => {
      try {
        const imageBitmap = await loadImageBitmap(event.data.data[0]);
        self.postMessage({
          data: imageBitmap,
          uuid: event.data.uuid,
          id: event.data.id
        }, [imageBitmap]);
      } catch (e) {
        self.postMessage({
          error: e,
          uuid: event.data.uuid,
          id: event.data.id
        });
      }
    };

})();
`,Ot=null,kt=class{constructor(){Ot||=URL.createObjectURL(new Blob([Dt],{type:`application/javascript`})),this.worker=new Worker(Ot)}};kt.revokeObjectURL=function(){Ot&&=(URL.revokeObjectURL(Ot),null)};var At=0,jt,Mt=new class{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported===void 0&&(this._isImageBitmapSupported=new Promise(e=>{let{worker:t}=new Et;t.addEventListener(`message`,n=>{t.terminate(),Et.revokeObjectURL(),e(n.data)})})),this._isImageBitmapSupported}loadImageBitmap(e){return this._run(`loadImageBitmap`,[e])}async _initWorkers(){this._initialized||=!0}_getWorker(){jt===void 0&&(jt=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<jt&&(this._createdWorkers++,e=new kt().worker,e.addEventListener(`message`,e=>{this._complete(e.data),this._returnWorker(e.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error===void 0?this._resolveHash[e.uuid].resolve(e.data):this._resolveHash[e.uuid].reject(e.error),this._resolveHash[e.uuid]=null}async _run(e,t){await this._initWorkers();let n=new Promise((n,r)=>{this._queue.push({id:e,arguments:t,resolve:n,reject:r})});return this._next(),n}_next(){if(!this._queue.length)return;let e=this._getWorker();if(!e)return;let t=this._queue.pop(),n=t.id;this._resolveHash[At]={resolve:t.resolve,reject:t.reject},e.postMessage({data:t.arguments,uuid:At++,id:n})}},Nt=[`.jpeg`,`.jpg`,`.png`,`.webp`,`.avif`],Pt=[`image/jpeg`,`image/png`,`image/webp`,`image/avif`];async function Ft(e){let t=await i.get().fetch(e);if(!t.ok)throw Error(`[loadImageBitmap] Failed to fetch ${e}: ${t.status} ${t.statusText}`);let n=await t.blob();return await createImageBitmap(n)}var It={name:`loadTextures`,extension:{type:h.LoadParser,priority:x.High,name:`loadTextures`},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:`anonymous`},test(e){return tt(e,Pt)||nt(e,Nt)},async load(e,t,n){let r=null;return r=globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await Mt.isImageBitmapSupported()?await Mt.loadImageBitmap(e):await Ft(e):await new Promise(t=>{r=new Image,r.crossOrigin=this.config.crossOrigin,r.src=e,r.complete?t(r):r.onload=()=>{t(r)}}),vt(new ae({resource:r,alphaMode:`premultiply-alpha-on-upload`,resolution:t.data?.resolution||_t(e),...t.data}),n,e)},unload(e){e.destroy(!0)}},Lt=[`.mp4`,`.m4v`,`.webm`,`.ogg`,`.ogv`,`.h264`,`.avi`,`.mov`],Rt=Lt.map(e=>`video/${e.substring(1)}`);function zt(e,t,n){n===void 0&&!t.startsWith(`data:`)?e.crossOrigin=Vt(t):n!==!1&&(e.crossOrigin=typeof n==`string`?n:`anonymous`)}function Bt(e){return new Promise((t,n)=>{e.addEventListener(`canplaythrough`,r),e.addEventListener(`error`,i),e.load();function r(){a(),t()}function i(e){a(),n(e)}function a(){e.removeEventListener(`canplaythrough`,r),e.removeEventListener(`error`,i)}})}function Vt(e,t=globalThis.location){if(e.startsWith(`data:`))return``;t||=globalThis.location;let n=new URL(e,document.baseURI);return n.hostname!==t.hostname||n.port!==t.port||n.protocol!==t.protocol?`anonymous`:``}var Ht={name:`loadVideo`,extension:{type:h.LoadParser,name:`loadVideo`},test(e){let t=tt(e,Rt),n=nt(e,Lt);return t||n},async load(e,t,n){let r={..._e.defaultOptions,resolution:t.data?.resolution||_t(e),alphaMode:t.data?.alphaMode||await ce(),...t.data},i=document.createElement(`video`),a={preload:r.autoLoad===!1?void 0:`auto`,"webkit-playsinline":r.playsinline===!1?void 0:``,playsinline:r.playsinline===!1?void 0:``,muted:r.muted===!0?``:void 0,loop:r.loop===!0?``:void 0,autoplay:r.autoPlay===!1?void 0:``};Object.keys(a).forEach(e=>{let t=a[e];t!==void 0&&i.setAttribute(e,t)}),r.muted===!0&&(i.muted=!0),zt(i,e,r.crossorigin);let o=document.createElement(`source`),s;if(e.startsWith(`data:`))s=e.slice(5,e.indexOf(`;`));else if(!e.startsWith(`blob:`)){let t=e.split(`?`)[0].slice(e.lastIndexOf(`.`)+1).toLowerCase();s=_e.MIME_TYPES[t]||`video/${t}`}return o.src=e,s&&(o.type=s),new Promise(a=>{let s=async()=>{let o=new _e({...r,resource:i});i.removeEventListener(`canplay`,s),t.data.preload&&await Bt(i),a(vt(o,n,e))};i.addEventListener(`canplay`,s),i.appendChild(o)})},unload(e){e.destroy(!0)}},Ut={extension:{type:h.ResolveParser,name:`resolveTexture`},test:It.test,parse:e=>({resolution:parseFloat(se.RETINA_PREFIX.exec(e)?.[1]??`1`),format:e.split(`.`).pop(),src:e})},Wt={extension:{type:h.ResolveParser,priority:-2,name:`resolveJson`},test:e=>se.RETINA_PREFIX.test(e)&&e.endsWith(`.json`),parse:Ut.parse},O=new class{constructor(){this._detections=[],this._initialized=!1,this.resolver=new se,this.loader=new et,this.cache=T,this._backgroundLoader=new He(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(t={}){if(this._initialized){e(`[Assets]AssetManager already initialized, did you load before calling this Assets.init()?`);return}if(this._initialized=!0,t.defaultSearchParams&&this.resolver.setDefaultSearchParams(t.defaultSearchParams),t.basePath&&(this.resolver.basePath=t.basePath),t.bundleIdentifier&&this.resolver.setBundleIdentifier(t.bundleIdentifier),t.manifest){let e=t.manifest;typeof e==`string`&&(e=await this.load(e)),this.resolver.addManifest(e)}let n=t.texturePreference?.resolution??1,r=typeof n==`number`?[n]:n,i=await this._detectFormats({preferredFormats:t.texturePreference?.format,skipDetections:t.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:i,resolution:r}}),t.preferences&&this.setPreferences(t.preferences)}add(e){this.resolver.add(e)}async load(e,t){this._initialized||await this.init();let n=oe(e),r=w(e).map(e=>{if(typeof e!=`string`){let t=this.resolver.getAlias(e);return t.some(e=>!this.resolver.hasKey(e))&&this.add(e),Array.isArray(t)?t[0]:t}return this.resolver.hasKey(e)||this.add({alias:e,src:e}),e}),i=this.resolver.resolve(r),a=await this._mapLoadToResolve(i,t);return n?a[r[0]]:a}addBundle(e,t){this.resolver.addBundle(e,t)}async loadBundle(e,t){this._initialized||await this.init();let n=!1;typeof e==`string`&&(n=!0,e=[e]);let r=this.resolver.resolveBundle(e),i={},a=Object.keys(r),o=0,s=0,c=()=>{t?.(++o/s)},l=a.map(e=>{let t=r[e];return s+=Object.keys(t).length,this._mapLoadToResolve(t,c).then(t=>{i[e]=t})});return await Promise.all(l),n?i[e[0]]:i}async backgroundLoad(e){this._initialized||await this.init(),typeof e==`string`&&(e=[e]);let t=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(t))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e==`string`&&(e=[e]);let t=this.resolver.resolveBundle(e);Object.values(t).forEach(e=>{this._backgroundLoader.add(Object.values(e))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e==`string`)return T.get(e);let t={};for(let n=0;n<e.length;n++)t[n]=T.get(e[n]);return t}async _mapLoadToResolve(e,t){let n=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;let r=await this.loader.load(n,t);this._backgroundLoader.active=!0;let i={};return n.forEach(e=>{let t=r[e.src],n=[e.src];e.alias&&n.push(...e.alias),n.forEach(e=>{i[e]=t}),T.set(n,t)}),i}async unload(e){this._initialized||await this.init();let t=w(e).map(e=>typeof e==`string`?e:e.src),n=this.resolver.resolve(t);await this._unloadFromResolved(n)}async unloadBundle(e){this._initialized||await this.init(),e=w(e);let t=this.resolver.resolveBundle(e),n=Object.keys(t).map(e=>this._unloadFromResolved(t[e]));await Promise.all(n)}async _unloadFromResolved(e){let t=Object.values(e);t.forEach(e=>{T.remove(e.src)}),await this.loader.unload(t)}async _detectFormats(e){let t=[];e.preferredFormats&&(t=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(let n of e.detections)e.skipDetections||await n.test()?t=await n.add(t):e.skipDetections||(t=await n.remove(t));return t=t.filter((e,n)=>t.indexOf(e)===n),t}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(t=>{t.config&&Object.keys(t.config).filter(t=>t in e).forEach(n=>{t.config[n]=e[n]})})}};b.handleByList(h.LoadParser,O.loader.parsers).handleByList(h.ResolveParser,O.resolver.parsers).handleByList(h.CacheParser,O.cache.parsers).handleByList(h.DetectionParser,O.detections),b.add(Ue,qe,Ge,$e,Xe,Ze,Qe,at,ct,gt,xt,It,Ht,Ve,Be,Ut,Wt);var Gt={loader:h.LoadParser,resolver:h.ResolveParser,cache:h.CacheParser,detection:h.DetectionParser};b.handle(h.Asset,e=>{let t=e.ref;Object.entries(Gt).filter(([e])=>!!t[e]).forEach(([e,n])=>b.add(Object.assign(t[e],{extension:t[e].extension??n})))},e=>{let t=e.ref;Object.keys(Gt).filter(e=>!!t[e]).forEach(e=>b.remove(t[e]))});var Kt=`in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,qt=`
in vec2 vTextureCoord;

out vec4 finalColor;

uniform float uAlpha;
uniform sampler2D uTexture;

void main()
{
    finalColor =  texture(uTexture, vTextureCoord) * uAlpha;
}
`,Jt=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct AlphaUniforms {
  uAlpha:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> alphaUniforms : AlphaUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
 
    var sample = textureSample(uTexture, uSampler, uv);
    
    return sample * alphaUniforms.uAlpha;
}`,Yt=class e extends D{constructor(t){t={...e.defaultOptions,...t};let n=g.from({vertex:{source:Jt,entryPoint:`mainVertex`},fragment:{source:Jt,entryPoint:`mainFragment`}}),r=m.from({vertex:Kt,fragment:qt,name:`alpha-filter`}),{alpha:i,...a}=t,o=new ne({uAlpha:{value:i,type:`f32`}});super({...a,gpuProgram:n,glProgram:r,resources:{alphaUniforms:o}})}get alpha(){return this.resources.alphaUniforms.uniforms.uAlpha}set alpha(e){this.resources.alphaUniforms.uniforms.uAlpha=e}};Yt.defaultOptions={alpha:1};var Xt=Yt,Zt={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},Qt=[`in vec2 vBlurTexCoords[%size%];`,`uniform sampler2D uTexture;`,`out vec4 finalColor;`,`void main(void)`,`{`,`    finalColor = vec4(0.0);`,`    %blur%`,`}`].join(`
`);function $t(e){let t=Zt[e],n=t.length,r=Qt,i=``,a;for(let r=0;r<e;r++){let o=`finalColor += texture(uTexture, vBlurTexCoords[%index%]) * %value%;`.replace(`%index%`,r.toString());a=r,r>=n&&(a=e-r-1),o=o.replace(`%value%`,t[a].toString()),i+=o,i+=`
`}return r=r.replace(`%blur%`,i),r=r.replace(`%size%`,e.toString()),r}var en=`
    in vec2 aPosition;

    uniform float uStrength;

    out vec2 vBlurTexCoords[%size%];

    uniform vec4 uInputSize;
    uniform vec4 uOutputFrame;
    uniform vec4 uOutputTexture;

    vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

    vec2 filterTextureCoord( void )
    {
        return aPosition * (uOutputFrame.zw * uInputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        float pixelStrength = uInputSize.%dimension% * uStrength;

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;function tn(e,t){let n=Math.ceil(e/2),r=en,i=``,a;a=t?`vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * pixelStrength, 0.0);`:`vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * pixelStrength);`;for(let t=0;t<e;t++){let e=a.replace(`%index%`,t.toString());e=e.replace(`%sampleIndex%`,`${t-(n-1)}.0`),i+=e,i+=`
`}return r=r.replace(`%blur%`,i),r=r.replace(`%size%`,e.toString()),r=r.replace(`%dimension%`,t?`z`:`w`),r}function nn(e,t){let n=tn(t,e),r=$t(t);return m.from({vertex:n,fragment:r,name:`blur-${e?`horizontal`:`vertical`}-pass-filter`})}var rn=`

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct BlurUniforms {
  uStrength:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> blurUniforms : BlurUniforms;


struct VSOutput {
    @builtin(position) position: vec4<f32>,
    %blur-struct%
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}


@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {

  let filteredCord = filterTextureCoord(aPosition);

  let strength = gfu.uInputSize.w * blurUniforms.uStrength;

  return VSOutput(
   filterVertexPosition(aPosition),
    %blur-vertex-out%
  );
}

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  %blur-fragment-in%
) -> @location(0) vec4<f32> {

    var   finalColor = vec4(0.0);

    %blur-sampling%

    return finalColor;
}`;function an(e,t){let n=Zt[t],r=n.length,i=[],a=[],o=[];for(let s=0;s<t;s++){i[s]=`@location(${s}) offset${s}: vec2<f32>,`,e?a[s]=`filteredCord + vec2(${s-r+1} * strength, 0.0),`:a[s]=`filteredCord + vec2(0.0, ${s-r+1} * strength),`;let c=n[s<r?s:t-s-1].toString();o[s]=`finalColor += textureSample(uTexture, uSampler, offset${s}) * ${c};`}let s=i.join(`
`),c=a.join(`
`),l=o.join(`
`),u=rn.replace(`%blur-struct%`,s).replace(`%blur-vertex-out%`,c).replace(`%blur-fragment-in%`,s).replace(`%blur-sampling%`,l);return g.from({vertex:{source:u,entryPoint:`mainVertex`},fragment:{source:u,entryPoint:`mainFragment`}})}var on=class e extends D{constructor(t){t={...e.defaultOptions,...t};let n=nn(t.horizontal,t.kernelSize),r=an(t.horizontal,t.kernelSize);super({glProgram:n,gpuProgram:r,resources:{blurUniforms:{uStrength:{value:0,type:`f32`}}},...t}),this.horizontal=t.horizontal,this._quality=0,this.quality=t.quality,this.blur=t.strength,this._uniforms=this.resources.blurUniforms.uniforms}apply(e,t,n,r){if(this._uniforms.uStrength=this.strength/this.passes,this.passes===1)e.applyFilter(this,t,n,r);else{let i=s.getSameSizeTexture(t),a=t,o=i;this._state.blend=!1;for(let t=0;t<this.passes-1;t++){e.applyFilter(this,a,o,e.renderer.type===c.WEBGPU);let t=o;o=a,a=t}this._state.blend=!0,e.applyFilter(this,a,n,r),s.returnTexture(i)}}get blur(){return this.strength}set blur(e){this.padding=1+Math.abs(e)*2,this.strength=e}get quality(){return this._quality}set quality(e){this._quality=e,this.passes=e}};on.defaultOptions={strength:8,quality:4,kernelSize:5};var sn=on,cn=class e extends r{constructor(e,t=!0){super(e[0]instanceof n?e[0]:e[0].texture),this._textures=null,this._durations=null,this._autoUpdate=t,this._isConnectedToTicker=!1,this.animationSpeed=1,this.loop=!0,this.updateAnchor=!1,this.onComplete=null,this.onFrameChange=null,this.onLoop=null,this._currentTime=0,this._playing=!1,this._previousFrame=null,this.textures=e}stop(){this._playing&&(this._playing=!1,this._autoUpdate&&this._isConnectedToTicker&&(S.shared.remove(this.update,this),this._isConnectedToTicker=!1))}play(){this._playing||(this._playing=!0,this._autoUpdate&&!this._isConnectedToTicker&&(S.shared.add(this.update,this,C.HIGH),this._isConnectedToTicker=!0))}gotoAndStop(e){this.stop(),this.currentFrame=e}gotoAndPlay(e){this.currentFrame=e,this.play()}update(e){if(!this._playing)return;let t=e.deltaTime,n=this.animationSpeed*t,r=this.currentFrame;if(this._durations!==null){let e=this._currentTime%1*this._durations[this.currentFrame];for(e+=n/60*1e3;e<0;)this._currentTime--,e+=this._durations[this.currentFrame];let r=Math.sign(this.animationSpeed*t);for(this._currentTime=Math.floor(this._currentTime);e>=this._durations[this.currentFrame];)e-=this._durations[this.currentFrame]*r,this._currentTime+=r;this._currentTime+=e/this._durations[this.currentFrame]}else this._currentTime+=n;this._currentTime<0&&!this.loop?(this.gotoAndStop(0),this.onComplete&&this.onComplete()):this._currentTime>=this._textures.length&&!this.loop?(this.gotoAndStop(this._textures.length-1),this.onComplete&&this.onComplete()):r!==this.currentFrame&&(this.loop&&this.onLoop&&(this.animationSpeed>0&&this.currentFrame<r||this.animationSpeed<0&&this.currentFrame>r)&&this.onLoop(),this._updateTexture())}_updateTexture(){let e=this.currentFrame;this._previousFrame!==e&&(this._previousFrame=e,this.texture=this._textures[e],this.updateAnchor&&this.anchor.copyFrom(this.texture.defaultAnchor),this.onFrameChange&&this.onFrameChange(this.currentFrame))}destroy(){this.stop(),super.destroy(),this.onComplete=null,this.onFrameChange=null,this.onLoop=null}static fromFrames(t){let r=[];for(let e=0;e<t.length;++e)r.push(n.from(t[e]));return new e(r)}static fromImages(t){let r=[];for(let e=0;e<t.length;++e)r.push(n.from(t[e]));return new e(r)}get totalFrames(){return this._textures.length}get textures(){return this._textures}set textures(e){if(e[0]instanceof n)this._textures=e,this._durations=null;else{this._textures=[],this._durations=[];for(let t=0;t<e.length;t++)this._textures.push(e[t].texture),this._durations.push(e[t].time)}this._previousFrame=null,this.gotoAndStop(0),this._updateTexture()}get currentFrame(){let e=Math.floor(this._currentTime)%this._textures.length;return e<0&&(e+=this._textures.length),e}set currentFrame(e){if(e<0||e>this.totalFrames-1)throw Error(`[AnimatedSprite]: Invalid frame index value ${e}, expected to be between 0 and totalFrames ${this.totalFrames}.`);let t=this.currentFrame;this._currentTime=e,t!==this.currentFrame&&this._updateTexture()}get playing(){return this._playing}get autoUpdate(){return this._autoUpdate}set autoUpdate(e){e!==this._autoUpdate&&(this._autoUpdate=e,!this._autoUpdate&&this._isConnectedToTicker?(S.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._playing&&(S.shared.add(this.update,this),this._isConnectedToTicker=!0))}},ln=class extends t{constructor(e,t){let{text:n,resolution:r,style:i,anchor:a,width:s,height:c,roundPixels:l,...u}=e;super({...u}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._roundPixels=0,this._bounds=new o,this._boundsDirty=!0,this._styleClass=t,this.text=n??``,this.style=i,this.resolution=r??null,this.allowChildren=!1,this._anchor=new v({_onUpdate:()=>{this.onViewUpdate()}}),a&&(this.anchor=a),this.roundPixels=l??!1,s!==void 0&&(this.width=s),c!==void 0&&(this.height=c)}get anchor(){return this._anchor}set anchor(e){typeof e==`number`?this._anchor.set(e):this._anchor.copyFrom(e)}get roundPixels(){return!!this._roundPixels}set roundPixels(e){this._roundPixels=+!!e}set text(e){e=e.toString(),this._text!==e&&(this._text=e,this.onViewUpdate())}get text(){return this._text}set resolution(e){this._autoResolution=e===null,this._resolution=e,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(e){e||={},this._style?.off(`update`,this.onViewUpdate,this),e instanceof this._styleClass?this._style=e:this._style=new this._styleClass(e),this._style.on(`update`,this.onViewUpdate,this),this.onViewUpdate()}get bounds(){return this._boundsDirty&&=(this._updateBounds(),!1),this._bounds}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(e){this._setWidth(e,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(e){this._setHeight(e,this.bounds.height)}getSize(e){return e||={},e.width=Math.abs(this.scale.x)*this.bounds.width,e.height=Math.abs(this.scale.y)*this.bounds.height,e}setSize(e,t){let n,r;typeof e==`object`?(n=e.width,r=e.height??e.width):(n=e,r=t??e),n!==void 0&&this._setWidth(n,this.bounds.width),r!==void 0&&this._setHeight(r,this.bounds.height)}addBounds(e){let t=this.bounds;e.addFrame(t.minX,t.minY,t.maxX,t.maxY)}containsPoint(e){let t=this.bounds.width,n=this.bounds.height,r=-t*this.anchor.x,i=0;return e.x>=r&&e.x<=r+t&&(i=-n*this.anchor.y,e.y>=i&&e.y<=i+n)}onViewUpdate(){if(this._didChangeId+=4096,this._boundsDirty=!0,this.didViewUpdate)return;this.didViewUpdate=!0,this._didTextUpdate=!0;let e=this.renderGroup||this.parentRenderGroup;e&&e.onChildViewUpdate(this)}_getKey(){return`${this.text}:${this._style.styleKey}:${this._resolution}`}destroy(e=!1){super.destroy(e),this.owner=null,this._bounds=null,this._anchor=null,(typeof e==`boolean`?e:e?.style)&&this._style.destroy(e),this._style=null,this._text=null}};function un(e,t){let n=e[0]??{};return(typeof n==`string`||e[1])&&(f(te,`use new ${t}({ text: "hi!", style }) instead`),n={text:n,style:e[1]}),n}var dn=class extends ln{constructor(...e){let t=un(e,`Text`);super(t,me),this.renderPipeId=`text`}_updateBounds(){let e=this._bounds,t=this._anchor,{width:n,height:r}=de.measureText(this._text,this._style);e.minX=-t._x*n,e.maxX=e.minX+n,e.minY=-t._y*r,e.maxY=e.minY+r}};ve(),b.add(Te,Ee);var fn=ee(d(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):n.Stats=r()})(e,function(){var e=function(){function t(e){return i.appendChild(e.dom),e}function n(e){for(var t=0;t<i.children.length;t++)i.children[t].style.display=t===e?`block`:`none`;r=e}var r=0,i=document.createElement(`div`);i.style.cssText=`position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000`,i.addEventListener(`click`,function(e){e.preventDefault(),n(++r%i.children.length)},!1);var a=(performance||Date).now(),o=a,s=0,c=t(new e.Panel(`FPS`,`#0ff`,`#002`)),l=t(new e.Panel(`MS`,`#0f0`,`#020`));if(self.performance&&self.performance.memory)var u=t(new e.Panel(`MB`,`#f08`,`#201`));return n(0),{REVISION:16,dom:i,addPanel:t,showPanel:n,begin:function(){a=(performance||Date).now()},end:function(){s++;var e=(performance||Date).now();if(l.update(e-a,200),e>o+1e3&&(c.update(1e3*s/(e-o),100),o=e,s=0,u)){var t=performance.memory;u.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e},update:function(){a=this.end()},domElement:i,setMode:n}};return e.Panel=function(e,t,n){var r=1/0,i=0,a=Math.round,o=a(window.devicePixelRatio||1),s=80*o,c=48*o,l=3*o,u=2*o,d=3*o,f=15*o,p=74*o,m=30*o,h=document.createElement(`canvas`);h.width=s,h.height=c,h.style.cssText=`width:80px;height:48px`;var g=h.getContext(`2d`);return g.font=`bold `+9*o+`px Helvetica,Arial,sans-serif`,g.textBaseline=`top`,g.fillStyle=n,g.fillRect(0,0,s,c),g.fillStyle=t,g.fillText(e,l,u),g.fillRect(d,f,p,m),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(d,f,p,m),{dom:h,update:function(c,_){r=Math.min(r,c),i=Math.max(i,c),g.fillStyle=n,g.globalAlpha=1,g.fillRect(0,0,s,f),g.fillStyle=t,g.fillText(a(c)+` `+e+` (`+a(r)+`-`+a(i)+`)`,l,u),g.drawImage(h,d+o,f,p-o,m,d,f,p-o,m),g.fillRect(d+p-o,f,o,m),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(d+p-o,f,o,a((1-c/_)*m))}}},e})}))(),1),pn=class{constructor(){this.done=!1,this.queued=[]}queue(e){return this.queued.push(e),this}play(){return j.play(this),this}pause(){return j.pause(this),this}reset(){return this.done=!1,this}stop(){return this.pause().reset(),this}},k=class extends pn{constructor(e,t){super(),this.time=0,this.seconds=t,this.target=e}get timeDistance(){return Math.min(1,this.time/this.seconds)}},A=class{};A.linear=e=>e,A.smooth=e=>e*e*(3-2*e),A.smooth2=e=>A.smooth(A.smooth(e)),A.smoother=e=>e*e*e*(e*(e*6-15)+10),A.fade=A.smoother,A.pow2out=e=>(e-1)**2*-1+1;var mn=class extends k{constructor(e,t,n,r,i=A.linear){super(e,r),this.interpolation=i,this.x=t,this.y=n}tick(e){this.time===0&&(this.startX=this.target.x,this.startY=this.target.y),this.time+=e;let t=this.interpolation(this.timeDistance);return this.target.position.set(this.startX+(this.x-this.startX)*t,this.startY+(this.y-this.startY)*t),this.timeDistance>=1}reset(){return super.reset(),this.time=0,this}},hn=class extends k{constructor(e,t,n,r,i=A.linear){super(e,r),this.interpolation=i,this.x=t,this.y=n}tick(e){this.time===0&&(this.startX=this.target.scale.x,this.startY=this.target.scale.y),this.time+=e;let t=this.interpolation(this.timeDistance);return this.target.scale.set(this.startX+(this.x-this.startX)*t,this.startY+(this.y-this.startY)*t),this.timeDistance>=1}reset(){return super.reset(),this.time=0,this}},gn=class extends k{constructor(e,t,n,r=A.linear){super(e,n),this.time=0,this.interpolation=r,this.rotation=t}tick(e){this.time===0&&(this.startRotation=this.target.rotation),this.time+=e;let t=this.interpolation(this.timeDistance);return this.target.rotation=this.startRotation+(this.rotation-this.startRotation)*t,this.timeDistance>=1}reset(){return super.reset(),this.time=0,this}},_n=class extends pn{constructor(...e){super(),this.index=0,this.actions=e}tick(e){if(this.index==this.actions.length)return!0;this.actions[this.index].tick(e)&&this.index++}reset(){super.reset(),this.index=0;for(let e in this.actions)this.actions[e].reset();return this}},vn=class extends pn{constructor(...e){super(),this.index=0,this.actions=e}tick(e){let t=!0;for(let n=0;n<this.actions.length;n++){let r=this.actions[n];r.done||(r.tick(e)?r.done=!0:t=!1)}return t}reset(){super.reset(),this.index=0;for(let e in this.actions)this.actions[e].reset();return this}},yn=class extends pn{constructor(e,t=-1){super(),this.n=0,this.action=e,this.times=t}tick(e){if(this.action.tick(e)){if(this.n++,this.times>=0&&this.n>=this.times)return!0;this.reset()}return!1}reset(){return super.reset(),this.action.reset(),this}},bn=class extends k{constructor(e,t,n,r=A.linear){super(e,n),this.interpolation=r,this.alpha=t}tick(e){this.time===0&&(this.startAlpha=this.target.alpha),this.time+=e;let t=this.interpolation(this.timeDistance);return this.target.alpha=this.startAlpha+(this.alpha-this.startAlpha)*t,this.timeDistance>=1}reset(){return super.reset(),this.time=0,this}},xn=class extends pn{constructor(e){super(),this.time=0,this.seconds=e}tick(e){return this.time+=e,this.time>=this.seconds}reset(){return super.reset(),this.time=0,this}},Sn=class extends pn{constructor(e){super(),this.fn=e}tick(e){return this.fn.call(this),!0}},Cn=class extends k{constructor(e,t,n,i=A.linear){super(e,n),this.tintableTarget=null,this.currentTint=new y,this.interpolation=i,this.tint=new y(t),this.target instanceof r&&(this.tintableTarget=this.target)}tick(e){if(!this.tintableTarget)return!0;this.time===0&&(this.startTint=new y(this.tintableTarget.tint)),this.time+=e;let t=this.interpolation(this.timeDistance);return this.currentTint.setValue([this.startTint.red+(this.tint.red-this.startTint.red)*t,this.startTint.green+(this.tint.green-this.startTint.green)*t,this.startTint.blue+(this.tint.blue-this.startTint.blue)*t]),this.tintableTarget.tint=this.currentTint,this.timeDistance>=1}reset(){return super.reset(),this.time=0,this}},j=class e{static moveTo(e,t,n,r,i=A.pow2out){return new mn(e,t,n,r,i)}static fadeTo(e,t,n,r=A.pow2out){return new bn(e,t,n,r)}static fadeOut(t,n,r=A.pow2out){return e.fadeTo(t,0,n,r)}static fadeOutAndRemove(t,n,r=A.pow2out){return e.sequence(e.fadeOut(t,n,r),e.remove(t))}static fadeIn(t,n,r=A.pow2out){return e.fadeTo(t,1,n,r)}static remove(t){return e.runFunc(()=>{t.parent!=null&&t.parent.removeChild(t)})}static delay(e){return new xn(e)}static runFunc(e){return new Sn(e)}static scaleTo(e,t,n,r,i=A.pow2out){return new hn(e,t,n,r,i)}static rotateTo(e,t,n,r=A.pow2out){return new gn(e,t,n,r)}static tintTo(e,t,n,r=A.pow2out){return new Cn(e,t,n,r)}static sequence(...e){return new _n(...e)}static parallel(...e){return new vn(...e)}static repeat(e,t=-1){return new yn(e,t)}static play(e){this.actions.push(e)}static pause(e){let t=this.actions.indexOf(e);t>=0&&this.actions.splice(t,1)}static clear(e=null){for(let t=this.actions.length-1;t>=0;t--){let n=this.actions[t];(e==null||n instanceof k&&n.target==e)&&this.actions.splice(t,1)}}static tick(t){for(let n=this.actions.length-1;n>=0;n--){let r=this.actions[n];if(r instanceof k&&(r.target==null||!r.target.parent)){this.actions.splice(n,1);continue}if(r.tick(t)){r.done=!0,this.actions.splice(n,1);for(let t=0;t<r.queued.length;t++)e.play(r.queued[t]);r.queued=[]}}}};j.actions=[];var M=class{constructor(e){this.parent=e,this.paused=!1}destroy(){}down(e){return!1}move(e){return!1}up(e){return!1}wheel(e){return!1}update(e){}resize(){}reset(){}pause(){this.paused=!0}resume(){this.paused=!1}},wn=typeof globalThis<`u`?globalThis:typeof window<`u`?window:typeof global<`u`?global:typeof self<`u`?self:{};function Tn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,`default`)?e.default:e}var En={exports:{}};(function(e,t){(function(){var t={linear:function(e,t,n,r){return n*e/r+t},easeInQuad:function(e,t,n,r){return n*(e/=r)*e+t},easeOutQuad:function(e,t,n,r){return-n*(e/=r)*(e-2)+t},easeInOutQuad:function(e,t,n,r){return(e/=r/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t},easeInCubic:function(e,t,n,r){return n*(e/=r)*e*e+t},easeOutCubic:function(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t},easeInOutCubic:function(e,t,n,r){return(e/=r/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t},easeInQuart:function(e,t,n,r){return n*(e/=r)*e*e*e+t},easeOutQuart:function(e,t,n,r){return-n*((e=e/r-1)*e*e*e-1)+t},easeInOutQuart:function(e,t,n,r){return(e/=r/2)<1?n/2*e*e*e*e+t:-n/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(e,t,n,r){return n*(e/=r)*e*e*e*e+t},easeOutQuint:function(e,t,n,r){return n*((e=e/r-1)*e*e*e*e+1)+t},easeInOutQuint:function(e,t,n,r){return(e/=r/2)<1?n/2*e*e*e*e*e+t:n/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(e,t,n,r){return-n*Math.cos(e/r*(Math.PI/2))+n+t},easeOutSine:function(e,t,n,r){return n*Math.sin(e/r*(Math.PI/2))+t},easeInOutSine:function(e,t,n,r){return-n/2*(Math.cos(Math.PI*e/r)-1)+t},easeInExpo:function(e,t,n,r){return e===0?t:n*2**(10*(e/r-1))+t},easeOutExpo:function(e,t,n,r){return e===r?t+n:n*(-(2**(-10*e/r))+1)+t},easeInOutExpo:function(e,t,n,r){return(e/=r/2)<1?n/2*2**(10*(e-1))+t:n/2*(-(2**(-10*--e))+2)+t},easeInCirc:function(e,t,n,r){return-n*(Math.sqrt(1-(e/=r)*e)-1)+t},easeOutCirc:function(e,t,n,r){return n*Math.sqrt(1-(e=e/r-1)*e)+t},easeInOutCirc:function(e,t,n,r){return(e/=r/2)<1?-n/2*(Math.sqrt(1-e*e)-1)+t:n/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(e,t,n,r){var i,a,o;return o=1.70158,a=0,i=n,e===0||(e/=r),a||=r*.3,i<Math.abs(n)?(i=n,o=a/4):o=a/(2*Math.PI)*Math.asin(n/i),-(i*2**(10*--e)*Math.sin((e*r-o)*(2*Math.PI)/a))+t},easeOutElastic:function(e,t,n,r){var i,a,o;return o=1.70158,a=0,i=n,e===0||(e/=r),a||=r*.3,i<Math.abs(n)?(i=n,o=a/4):o=a/(2*Math.PI)*Math.asin(n/i),i*2**(-10*e)*Math.sin((e*r-o)*(2*Math.PI)/a)+n+t},easeInOutElastic:function(e,t,n,r){var i,a,o;return o=1.70158,a=0,i=n,e===0||(e/=r/2),a||=.3*1.5*r,i<Math.abs(n)?(i=n,o=a/4):o=a/(2*Math.PI)*Math.asin(n/i),e<1?-.5*(i*2**(10*--e)*Math.sin((e*r-o)*(2*Math.PI)/a))+t:i*2**(-10*--e)*Math.sin((e*r-o)*(2*Math.PI)/a)*.5+n+t},easeInBack:function(e,t,n,r,i){return i===void 0&&(i=1.70158),n*(e/=r)*e*((i+1)*e-i)+t},easeOutBack:function(e,t,n,r,i){return i===void 0&&(i=1.70158),n*((e=e/r-1)*e*((i+1)*e+i)+1)+t},easeInOutBack:function(e,t,n,r,i){return i===void 0&&(i=1.70158),(e/=r/2)<1?n/2*(e*e*(((i*=1.525)+1)*e-i))+t:n/2*((e-=2)*e*(((i*=1.525)+1)*e+i)+2)+t},easeInBounce:function(e,n,r,i){var a;return a=t.easeOutBounce(i-e,0,r,i),r-a+n},easeOutBounce:function(e,t,n,r){return(e/=r)<1/2.75?n*(7.5625*e*e)+t:e<2/2.75?n*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?n*(7.5625*(e-=2.25/2.75)*e+.9375)+t:n*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(e,n,r,i){var a;return e<i/2?(a=t.easeInBounce(e*2,0,r,i),a*.5+n):(a=t.easeOutBounce(e*2-i,0,r,i),a*.5+r*.5+n)}};(function(t){return e.exports=t})(t)}).call(wn)})(En);var Dn=En.exports,On=Tn(Dn);function kn(e,t){if(e){if(typeof e==`function`)return e;if(typeof e==`string`)return On[e]}else return On[t]}var An={removeOnInterrupt:!1,ease:`linear`,time:1e3},jn=class extends M{constructor(e,t={}){super(e),this.startWidth=null,this.startHeight=null,this.deltaWidth=null,this.deltaHeight=null,this.width=null,this.height=null,this.time=0,this.options=Object.assign({},An,t),this.options.ease=kn(this.options.ease),this.setupPosition(),this.setupZoom(),this.time=0}setupPosition(){typeof this.options.position<`u`?(this.startX=this.parent.center.x,this.startY=this.parent.center.y,this.deltaX=this.options.position.x-this.parent.center.x,this.deltaY=this.options.position.y-this.parent.center.y,this.keepCenter=!1):this.keepCenter=!0}setupZoom(){this.width=null,this.height=null,typeof this.options.scale<`u`?this.width=this.parent.screenWidth/this.options.scale:typeof this.options.scaleX<`u`||typeof this.options.scaleY<`u`?(typeof this.options.scaleX<`u`&&(this.width=this.parent.screenWidth/this.options.scaleX),typeof this.options.scaleY<`u`&&(this.height=this.parent.screenHeight/this.options.scaleY)):(typeof this.options.width<`u`&&(this.width=this.options.width),typeof this.options.height<`u`&&(this.height=this.options.height)),this.width!==null&&(this.startWidth=this.parent.screenWidthInWorldPixels,this.deltaWidth=this.width-this.startWidth),this.height!==null&&(this.startHeight=this.parent.screenHeightInWorldPixels,this.deltaHeight=this.height-this.startHeight)}down(){return this.options.removeOnInterrupt&&this.parent.plugins.remove(`animate`),!1}complete(){this.parent.plugins.remove(`animate`),this.width!==null&&this.parent.fitWidth(this.width,this.keepCenter,this.height===null),this.height!==null&&this.parent.fitHeight(this.height,this.keepCenter,this.width===null),!this.keepCenter&&this.options.position&&this.parent.moveCenter(this.options.position),this.parent.emit(`animate-end`,this.parent),this.options.callbackOnComplete&&this.options.callbackOnComplete(this.parent)}update(e){if(this.paused)return;this.time+=e;let t=new l(this.parent.scale.x,this.parent.scale.y);if(this.time>=this.options.time){let e=this.parent.width,n=this.parent.height;this.complete(),(e!==this.parent.width||n!==this.parent.height)&&this.parent.emit(`zoomed`,{viewport:this.parent,original:t,type:`animate`})}else{let e=this.options.ease(this.time,0,1,this.options.time);if(this.width!==null){let t=this.startWidth,n=this.deltaWidth;this.parent.fitWidth(t+n*e,this.keepCenter,this.height===null)}if(this.height!==null){let t=this.startHeight,n=this.deltaHeight;this.parent.fitHeight(t+n*e,this.keepCenter,this.width===null)}if(this.width===null?this.parent.scale.x=this.parent.scale.y:this.height===null&&(this.parent.scale.y=this.parent.scale.x),!this.keepCenter){let t=this.startX,n=this.startY,r=this.deltaX,i=this.deltaY,a=new l(this.parent.x,this.parent.y);this.parent.moveCenter(t+r*e,n+i*e),this.parent.emit(`moved`,{viewport:this.parent,original:a,type:`animate`})}(this.width||this.height)&&this.parent.emit(`zoomed`,{viewport:this.parent,original:t,type:`animate`})}}},Mn={sides:`all`,friction:.5,time:150,ease:`easeInOutSine`,underflow:`center`,bounceBox:null},Nn=class extends M{constructor(e,t={}){super(e),this.options=Object.assign({},Mn,t),this.ease=kn(this.options.ease,`easeInOutSine`),this.options.sides?this.options.sides===`all`?this.top=this.bottom=this.left=this.right=!0:this.options.sides===`horizontal`?(this.right=this.left=!0,this.top=this.bottom=!1):this.options.sides===`vertical`?(this.left=this.right=!1,this.top=this.bottom=!0):(this.top=this.options.sides.indexOf(`top`)!==-1,this.bottom=this.options.sides.indexOf(`bottom`)!==-1,this.left=this.options.sides.indexOf(`left`)!==-1,this.right=this.options.sides.indexOf(`right`)!==-1):this.left=this.top=this.right=this.bottom=!1;let n=this.options.underflow.toLowerCase();n===`center`?(this.underflowX=0,this.underflowY=0):(this.underflowX=n.indexOf(`left`)===-1?n.indexOf(`right`)===-1?0:1:-1,this.underflowY=n.indexOf(`top`)===-1?n.indexOf(`bottom`)===-1?0:1:-1),this.reset()}isActive(){return this.toX!==null||this.toY!==null}down(){return this.toX=this.toY=null,!1}up(){return this.bounce(),!1}update(e){if(!this.paused){if(this.bounce(),this.toX){let t=this.toX;t.time+=e,this.parent.emit(`moved`,{viewport:this.parent,type:`bounce-x`}),t.time>=this.options.time?(this.parent.x=t.end,this.toX=null,this.parent.emit(`bounce-x-end`,this.parent)):this.parent.x=this.ease(t.time,t.start,t.delta,this.options.time)}if(this.toY){let t=this.toY;t.time+=e,this.parent.emit(`moved`,{viewport:this.parent,type:`bounce-y`}),t.time>=this.options.time?(this.parent.y=t.end,this.toY=null,this.parent.emit(`bounce-y-end`,this.parent)):this.parent.y=this.ease(t.time,t.start,t.delta,this.options.time)}}}calcUnderflowX(){let e;switch(this.underflowX){case-1:e=0;break;case 1:e=this.parent.screenWidth-this.parent.screenWorldWidth;break;default:e=(this.parent.screenWidth-this.parent.screenWorldWidth)/2}return e}calcUnderflowY(){let e;switch(this.underflowY){case-1:e=0;break;case 1:e=this.parent.screenHeight-this.parent.screenWorldHeight;break;default:e=(this.parent.screenHeight-this.parent.screenWorldHeight)/2}return e}oob(){let e=this.options.bounceBox;if(e){let t=typeof e.x>`u`?0:e.x,n=typeof e.y>`u`?0:e.y,r=typeof e.width>`u`?this.parent.worldWidth:e.width,i=typeof e.height>`u`?this.parent.worldHeight:e.height;return{left:this.parent.left<t,right:this.parent.right>r,top:this.parent.top<n,bottom:this.parent.bottom>i,topLeft:new l(t*this.parent.scale.x,n*this.parent.scale.y),bottomRight:new l(r*this.parent.scale.x-this.parent.screenWidth,i*this.parent.scale.y-this.parent.screenHeight)}}return{left:this.parent.left<0,right:this.parent.right>this.parent.worldWidth,top:this.parent.top<0,bottom:this.parent.bottom>this.parent.worldHeight,topLeft:new l(0,0),bottomRight:new l(this.parent.worldWidth*this.parent.scale.x-this.parent.screenWidth,this.parent.worldHeight*this.parent.scale.y-this.parent.screenHeight)}}bounce(){if(this.paused)return;let e,t=this.parent.plugins.get(`decelerate`,!0);t&&(t.x||t.y)&&(t.x&&t.percentChangeX===t.options?.friction||t.y&&t.percentChangeY===t.options?.friction)&&(e=this.oob(),(e.left&&this.left||e.right&&this.right)&&(t.percentChangeX=this.options.friction),(e.top&&this.top||e.bottom&&this.bottom)&&(t.percentChangeY=this.options.friction));let n=this.parent.plugins.get(`drag`,!0)||{},r=this.parent.plugins.get(`pinch`,!0)||{};if(t||={},!(n!=null&&n.active)&&!(r!=null&&r.active)&&(!this.toX||!this.toY)&&(!t.x||!t.y)){e||=this.oob();let n=e.topLeft,r=e.bottomRight;if(!this.toX&&!t.x){let t=null;e.left&&this.left?t=this.parent.screenWorldWidth<this.parent.screenWidth?this.calcUnderflowX():-n.x:e.right&&this.right&&(t=this.parent.screenWorldWidth<this.parent.screenWidth?this.calcUnderflowX():-r.x),t!==null&&this.parent.x!==t&&(this.toX={time:0,start:this.parent.x,delta:t-this.parent.x,end:t},this.parent.emit(`bounce-x-start`,this.parent))}if(!this.toY&&!t.y){let t=null;e.top&&this.top?t=this.parent.screenWorldHeight<this.parent.screenHeight?this.calcUnderflowY():-n.y:e.bottom&&this.bottom&&(t=this.parent.screenWorldHeight<this.parent.screenHeight?this.calcUnderflowY():-r.y),t!==null&&this.parent.y!==t&&(this.toY={time:0,start:this.parent.y,delta:t-this.parent.y,end:t},this.parent.emit(`bounce-y-start`,this.parent))}}}reset(){this.toX=this.toY=null,this.bounce()}},Pn={left:!1,right:!1,top:!1,bottom:!1,direction:null,underflow:`center`},Fn=class extends M{constructor(e,t={}){super(e),this.options=Object.assign({},Pn,t),this.options.direction&&(this.options.left=this.options.direction===`x`||this.options.direction===`all`?!0:null,this.options.right=this.options.direction===`x`||this.options.direction===`all`?!0:null,this.options.top=this.options.direction===`y`||this.options.direction===`all`?!0:null,this.options.bottom=this.options.direction===`y`||this.options.direction===`all`?!0:null),this.parseUnderflow(),this.last={x:null,y:null,scaleX:null,scaleY:null},this.update()}parseUnderflow(){let e=this.options.underflow.toLowerCase();e===`none`?this.noUnderflow=!0:e===`center`?(this.underflowX=this.underflowY=0,this.noUnderflow=!1):(this.underflowX=e.indexOf(`left`)===-1?e.indexOf(`right`)===-1?0:1:-1,this.underflowY=e.indexOf(`top`)===-1?e.indexOf(`bottom`)===-1?0:1:-1,this.noUnderflow=!1)}move(){return this.update(),!1}update(){if(this.paused||this.parent.x===this.last.x&&this.parent.y===this.last.y&&this.parent.scale.x===this.last.scaleX&&this.parent.scale.y===this.last.scaleY)return;let e=new l(this.parent.x,this.parent.y),t=this.parent.plugins.decelerate||{};if(this.options.left!==null||this.options.right!==null){let n=!1;if(!this.noUnderflow&&this.parent.screenWorldWidth<this.parent.screenWidth)switch(this.underflowX){case-1:this.parent.x!==0&&(this.parent.x=0,n=!0);break;case 1:this.parent.x!==this.parent.screenWidth-this.parent.screenWorldWidth&&(this.parent.x=this.parent.screenWidth-this.parent.screenWorldWidth,n=!0);break;default:this.parent.x!==(this.parent.screenWidth-this.parent.screenWorldWidth)/2&&(this.parent.x=(this.parent.screenWidth-this.parent.screenWorldWidth)/2,n=!0)}else this.options.left!==null&&this.parent.left<(this.options.left===!0?0:this.options.left)&&(this.parent.x=-(this.options.left===!0?0:this.options.left)*this.parent.scale.x,t.x=0,n=!0),this.options.right!==null&&this.parent.right>(this.options.right===!0?this.parent.worldWidth:this.options.right)&&(this.parent.x=-(this.options.right===!0?this.parent.worldWidth:this.options.right)*this.parent.scale.x+this.parent.screenWidth,t.x=0,n=!0);n&&this.parent.emit(`moved`,{viewport:this.parent,original:e,type:`clamp-x`})}if(this.options.top!==null||this.options.bottom!==null){let n=!1;if(!this.noUnderflow&&this.parent.screenWorldHeight<this.parent.screenHeight)switch(this.underflowY){case-1:this.parent.y!==0&&(this.parent.y=0,n=!0);break;case 1:this.parent.y!==this.parent.screenHeight-this.parent.screenWorldHeight&&(this.parent.y=this.parent.screenHeight-this.parent.screenWorldHeight,n=!0);break;default:this.parent.y!==(this.parent.screenHeight-this.parent.screenWorldHeight)/2&&(this.parent.y=(this.parent.screenHeight-this.parent.screenWorldHeight)/2,n=!0)}else this.options.top!==null&&this.parent.top<(this.options.top===!0?0:this.options.top)&&(this.parent.y=-(this.options.top===!0?0:this.options.top)*this.parent.scale.y,t.y=0,n=!0),this.options.bottom!==null&&this.parent.bottom>(this.options.bottom===!0?this.parent.worldHeight:this.options.bottom)&&(this.parent.y=-(this.options.bottom===!0?this.parent.worldHeight:this.options.bottom)*this.parent.scale.y+this.parent.screenHeight,t.y=0,n=!0);n&&this.parent.emit(`moved`,{viewport:this.parent,original:e,type:`clamp-y`})}this.last.x=this.parent.x,this.last.y=this.parent.y,this.last.scaleX=this.parent.scale.x,this.last.scaleY=this.parent.scale.y}reset(){this.update()}},In={minWidth:null,minHeight:null,maxWidth:null,maxHeight:null,minScale:null,maxScale:null},Ln=class extends M{constructor(e,t={}){super(e),this.options=Object.assign({},In,t),this.clamp()}resize(){this.clamp()}clamp(){if(!this.paused){if(this.options.minWidth||this.options.minHeight||this.options.maxWidth||this.options.maxHeight){let e=this.parent.worldScreenWidth,t=this.parent.worldScreenHeight;if(this.options.minWidth!==null&&e<this.options.minWidth){let n=this.parent.scale.x;this.parent.fitWidth(this.options.minWidth,!1,!1,!0),this.parent.scale.y*=this.parent.scale.x/n,e=this.parent.worldScreenWidth,t=this.parent.worldScreenHeight,this.parent.emit(`zoomed`,{viewport:this.parent,type:`clamp-zoom`})}if(this.options.maxWidth!==null&&e>this.options.maxWidth){let n=this.parent.scale.x;this.parent.fitWidth(this.options.maxWidth,!1,!1,!0),this.parent.scale.y*=this.parent.scale.x/n,e=this.parent.worldScreenWidth,t=this.parent.worldScreenHeight,this.parent.emit(`zoomed`,{viewport:this.parent,type:`clamp-zoom`})}if(this.options.minHeight!==null&&t<this.options.minHeight){let n=this.parent.scale.y;this.parent.fitHeight(this.options.minHeight,!1,!1,!0),this.parent.scale.x*=this.parent.scale.y/n,e=this.parent.worldScreenWidth,t=this.parent.worldScreenHeight,this.parent.emit(`zoomed`,{viewport:this.parent,type:`clamp-zoom`})}if(this.options.maxHeight!==null&&t>this.options.maxHeight){let e=this.parent.scale.y;this.parent.fitHeight(this.options.maxHeight,!1,!1,!0),this.parent.scale.x*=this.parent.scale.y/e,this.parent.emit(`zoomed`,{viewport:this.parent,type:`clamp-zoom`})}}else if(this.options.minScale||this.options.maxScale){let e={x:null,y:null},t={x:null,y:null};if(typeof this.options.minScale==`number`)e.x=this.options.minScale,e.y=this.options.minScale;else if(this.options.minScale!==null){let t=this.options.minScale;e.x=typeof t.x>`u`?null:t.x,e.y=typeof t.y>`u`?null:t.y}if(typeof this.options.maxScale==`number`)t.x=this.options.maxScale,t.y=this.options.maxScale;else if(this.options.maxScale!==null){let e=this.options.maxScale;t.x=typeof e.x>`u`?null:e.x,t.y=typeof e.y>`u`?null:e.y}let n=this.parent.scale.x,r=this.parent.scale.y;e.x!==null&&n<e.x&&(n=e.x),t.x!==null&&n>t.x&&(n=t.x),e.y!==null&&r<e.y&&(r=e.y),t.y!==null&&r>t.y&&(r=t.y),(n!==this.parent.scale.x||r!==this.parent.scale.y)&&(this.parent.scale.set(n,r),this.parent.emit(`zoomed`,{viewport:this.parent,type:`clamp-zoom`}))}}}reset(){this.clamp()}},Rn={friction:.98,bounce:.8,minSpeed:.01},N=16,zn=class extends M{constructor(e,t={}){super(e),this.options=Object.assign({},Rn,t),this.saved=[],this.timeSinceRelease=0,this.reset(),this.parent.on(`moved`,e=>this.handleMoved(e))}down(){return this.saved=[],this.x=this.y=null,!1}isActive(){return!!(this.x||this.y)}move(){if(this.paused)return!1;let e=this.parent.input.count();return(e===1||e>1&&!this.parent.plugins.get(`pinch`,!0))&&(this.saved.push({x:this.parent.x,y:this.parent.y,time:performance.now()}),this.saved.length>60&&this.saved.splice(0,30)),!1}handleMoved(e){if(this.saved.length){let t=this.saved[this.saved.length-1];e.type===`clamp-x`&&e.original?t.x===e.original.x&&(t.x=this.parent.x):e.type===`clamp-y`&&e.original&&t.y===e.original.y&&(t.y=this.parent.y)}}up(){if(this.parent.input.count()===0&&this.saved.length){let e=performance.now();for(let t of this.saved)if(t.time>=e-100){let n=e-t.time;this.x=(this.parent.x-t.x)/n,this.y=(this.parent.y-t.y)/n,this.percentChangeX=this.percentChangeY=this.options.friction,this.timeSinceRelease=0;break}}return!1}activate(e){e||={},typeof e.x<`u`&&(this.x=e.x,this.percentChangeX=this.options.friction),typeof e.y<`u`&&(this.y=e.y,this.percentChangeY=this.options.friction)}update(e){if(this.paused)return;let t=this.x||this.y,n=this.timeSinceRelease,r=this.timeSinceRelease+e;if(this.x){let t=this.percentChangeX,i=Math.log(t);this.parent.x+=this.x*N/i*(t**+(r/N)-t**+(n/N)),this.x*=this.percentChangeX**+(e/N)}if(this.y){let t=this.percentChangeY,i=Math.log(t);this.parent.y+=this.y*N/i*(t**+(r/N)-t**+(n/N)),this.y*=this.percentChangeY**+(e/N)}this.timeSinceRelease+=e,this.x&&this.y?Math.abs(this.x)<this.options.minSpeed&&Math.abs(this.y)<this.options.minSpeed&&(this.x=0,this.y=0):(Math.abs(this.x||0)<this.options.minSpeed&&(this.x=0),Math.abs(this.y||0)<this.options.minSpeed&&(this.y=0)),t&&this.parent.emit(`moved`,{viewport:this.parent,type:`decelerate`})}reset(){this.x=this.y=null}},Bn={direction:`all`,pressDrag:!0,wheel:!0,wheelScroll:1,reverse:!1,clampWheel:!1,underflow:`center`,factor:1,mouseButtons:`all`,keyToPress:null,ignoreKeyToPressOnTouch:!1,lineHeight:20,wheelSwapAxes:!1},Vn=class extends M{constructor(e,t={}){super(e),this.windowEventHandlers=[],this.options=Object.assign({},Bn,t),this.moved=!1,this.reverse=this.options.reverse?1:-1,this.xDirection=!this.options.direction||this.options.direction===`all`||this.options.direction===`x`,this.yDirection=!this.options.direction||this.options.direction===`all`||this.options.direction===`y`,this.keyIsPressed=!1,this.parseUnderflow(),this.mouseButtons(this.options.mouseButtons),this.options.keyToPress&&this.handleKeyPresses(this.options.keyToPress)}handleKeyPresses(e){this.addWindowEventHandler(`keyup`,t=>{e.includes(t.code)&&(this.keyIsPressed=!1)}),this.addWindowEventHandler(`keydown`,t=>{e.includes(t.code)&&(this.keyIsPressed=!0)})}addWindowEventHandler(e,t){typeof window>`u`||(window.addEventListener(e,t),this.windowEventHandlers.push({event:e,handler:t}))}destroy(){typeof window>`u`||this.windowEventHandlers.forEach(({event:e,handler:t})=>{window.removeEventListener(e,t)})}mouseButtons(e){!e||e===`all`?this.mouse=[!0,!0,!0]:this.mouse=[e.indexOf(`left`)!==-1,e.indexOf(`middle`)!==-1,e.indexOf(`right`)!==-1]}parseUnderflow(){let e=this.options.underflow.toLowerCase();e===`center`?(this.underflowX=0,this.underflowY=0):(e.includes(`left`)?this.underflowX=-1:e.includes(`right`)?this.underflowX=1:this.underflowX=0,e.includes(`top`)?this.underflowY=-1:e.includes(`bottom`)?this.underflowY=1:this.underflowY=0)}checkButtons(e){let t=e.pointerType===`mouse`,n=this.parent.input.count();return!!((n===1||n>1&&!this.parent.plugins.get(`pinch`,!0))&&(!t||this.mouse[e.button]))}checkKeyPress(e){return!this.options.keyToPress||this.keyIsPressed||this.options.ignoreKeyToPressOnTouch&&e.data.pointerType===`touch`}down(e){return this.paused||!this.options.pressDrag?!1:this.checkButtons(e)&&this.checkKeyPress(e)?(this.last={x:e.global.x,y:e.global.y},this.current=e.pointerId,!0):(this.last=null,!1)}get active(){return this.moved}move(e){if(this.paused||!this.options.pressDrag)return!1;if(this.last&&this.current===e.data.pointerId){let t=e.global.x,n=e.global.y,r=this.parent.input.count();if(r===1||r>1&&!this.parent.plugins.get(`pinch`,!0)){let r=t-this.last.x,i=n-this.last.y;if(this.moved||this.xDirection&&this.parent.input.checkThreshold(r)||this.yDirection&&this.parent.input.checkThreshold(i)){let r={x:t,y:n};return this.xDirection&&(this.parent.x+=(r.x-this.last.x)*this.options.factor),this.yDirection&&(this.parent.y+=(r.y-this.last.y)*this.options.factor),this.last=r,this.moved||this.parent.emit(`drag-start`,{event:e,screen:new l(this.last.x,this.last.y),world:this.parent.toWorld(new l(this.last.x,this.last.y)),viewport:this.parent}),this.moved=!0,this.parent.emit(`moved`,{viewport:this.parent,type:`drag`}),!0}}else this.moved=!1}return!1}up(e){if(this.paused)return!1;let t=this.parent.input.touches;if(t.length===1){let e=t[0];return e.last&&(this.last={x:e.last.x,y:e.last.y},this.current=e.id),this.moved=!1,!0}else if(this.last&&this.moved){let t=new l(this.last.x,this.last.y);return this.parent.emit(`drag-end`,{event:e,screen:t,world:this.parent.toWorld(t),viewport:this.parent}),this.last=null,this.moved=!1,!0}return!1}wheel(e){if(this.paused)return!1;if(this.options.wheel){let t=this.parent.plugins.get(`wheel`,!0);if(!t||!t.options.wheelZoom&&!e.ctrlKey){let t=e.deltaMode?this.options.lineHeight:1,n=[e.deltaX,e.deltaY],[r,i]=this.options.wheelSwapAxes?n.reverse():n;return this.xDirection&&(this.parent.x+=r*t*this.options.wheelScroll*this.reverse),this.yDirection&&(this.parent.y+=i*t*this.options.wheelScroll*this.reverse),this.options.clampWheel&&this.clamp(),this.parent.emit(`wheel-scroll`,this.parent),this.parent.emit(`moved`,{viewport:this.parent,type:`wheel`}),this.parent.options.passiveWheel||e.preventDefault(),this.parent.options.stopPropagation&&e.stopPropagation(),!0}}return!1}resume(){this.last=null,this.paused=!1}clamp(){let e=this.parent.plugins.get(`decelerate`,!0)||{};if(this.options.clampWheel!==`y`)if(this.parent.screenWorldWidth<this.parent.screenWidth)switch(this.underflowX){case-1:this.parent.x=0;break;case 1:this.parent.x=this.parent.screenWidth-this.parent.screenWorldWidth;break;default:this.parent.x=(this.parent.screenWidth-this.parent.screenWorldWidth)/2}else this.parent.left<0?(this.parent.x=0,e.x=0):this.parent.right>this.parent.worldWidth&&(this.parent.x=-this.parent.worldWidth*this.parent.scale.x+this.parent.screenWidth,e.x=0);if(this.options.clampWheel!==`x`)if(this.parent.screenWorldHeight<this.parent.screenHeight)switch(this.underflowY){case-1:this.parent.y=0;break;case 1:this.parent.y=this.parent.screenHeight-this.parent.screenWorldHeight;break;default:this.parent.y=(this.parent.screenHeight-this.parent.screenWorldHeight)/2}else this.parent.top<0&&(this.parent.y=0,e.y=0),this.parent.bottom>this.parent.worldHeight&&(this.parent.y=-this.parent.worldHeight*this.parent.scale.y+this.parent.screenHeight,e.y=0)}},Hn={speed:0,acceleration:null,radius:null},Un=class extends M{constructor(e,t,n={}){super(e),this.target=t,this.options=Object.assign({},Hn,n),this.velocity={x:0,y:0}}update(e){if(this.paused)return;let t=this.parent.center,n=this.target.x,r=this.target.y;if(this.options.radius)if(Math.sqrt((this.target.y-t.y)**2+(this.target.x-t.x)**2)>this.options.radius){let e=Math.atan2(this.target.y-t.y,this.target.x-t.x);n=this.target.x-Math.cos(e)*this.options.radius,r=this.target.y-Math.sin(e)*this.options.radius}else return;let i=n-t.x,a=r-t.y;if(i||a)if(this.options.speed)if(this.options.acceleration){let o=Math.atan2(r-t.y,n-t.x),s=Math.sqrt(i**2+a**2);if(s){s>(this.velocity.x**2+this.velocity.y**2)/(2*this.options.acceleration)?this.velocity={x:Math.min(this.velocity.x+(this.options.acceleration*e,this.options.speed)),y:Math.min(this.velocity.y+(this.options.acceleration*e,this.options.speed))}:this.velocity={x:Math.max(this.velocity.x-this.options.acceleration*this.options.speed,0),y:Math.max(this.velocity.y-this.options.acceleration*this.options.speed,0)};let c=Math.cos(o)*this.velocity.x,l=Math.sin(o)*this.velocity.y,u=Math.abs(c)>Math.abs(i)?n:t.x+c,d=Math.abs(l)>Math.abs(a)?r:t.y+l;this.parent.moveCenter(u,d),this.parent.emit(`moved`,{viewport:this.parent,type:`follow`})}}else{let e=Math.atan2(r-t.y,n-t.x),o=Math.cos(e)*this.options.speed,s=Math.sin(e)*this.options.speed,c=Math.abs(o)>Math.abs(i)?n:t.x+o,l=Math.abs(s)>Math.abs(a)?r:t.y+s;this.parent.moveCenter(c,l),this.parent.emit(`moved`,{viewport:this.parent,type:`follow`})}else this.parent.moveCenter(n,r),this.parent.emit(`moved`,{viewport:this.parent,type:`follow`})}},Wn={radius:null,distance:null,top:null,bottom:null,left:null,right:null,speed:8,reverse:!1,noDecelerate:!1,linear:!1,allowButtons:!1},Gn=class extends M{constructor(e,t={}){super(e),this.options=Object.assign({},Wn,t),this.reverse=this.options.reverse?1:-1,this.radiusSquared=typeof this.options.radius==`number`?this.options.radius**2:null,this.resize()}resize(){let e=this.options.distance;e===null?this.options.radius||(this.left=this.options.left,this.top=this.options.top,this.right=this.options.right===null?null:this.parent.screenWidth-this.options.right,this.bottom=this.options.bottom===null?null:this.parent.screenHeight-this.options.bottom):(this.left=e,this.top=e,this.right=this.parent.screenWidth-e,this.bottom=this.parent.screenHeight-e)}down(){return this.paused||this.options.allowButtons||(this.horizontal=this.vertical=null),!1}move(e){if(this.paused||e.pointerType!==`mouse`&&e.pointerId!==1||!this.options.allowButtons&&e.buttons!==0)return!1;let t=e.global.x,n=e.global.y;if(this.radiusSquared){let e=this.parent.toScreen(this.parent.center);if((e.x-t)**2+(e.y-n)**2>=this.radiusSquared){let r=Math.atan2(e.y-n,e.x-t);this.options.linear?(this.horizontal=Math.round(Math.cos(r))*this.options.speed*this.reverse*(60/1e3),this.vertical=Math.round(Math.sin(r))*this.options.speed*this.reverse*(60/1e3)):(this.horizontal=Math.cos(r)*this.options.speed*this.reverse*(60/1e3),this.vertical=Math.sin(r)*this.options.speed*this.reverse*(60/1e3))}else this.horizontal&&this.decelerateHorizontal(),this.vertical&&this.decelerateVertical(),this.horizontal=this.vertical=0}else this.left!==null&&t<this.left?this.horizontal=Number(this.reverse)*this.options.speed*(60/1e3):this.right!==null&&t>this.right?this.horizontal=-1*this.reverse*this.options.speed*(60/1e3):(this.decelerateHorizontal(),this.horizontal=0),this.top!==null&&n<this.top?this.vertical=Number(this.reverse)*this.options.speed*(60/1e3):this.bottom!==null&&n>this.bottom?this.vertical=-1*this.reverse*this.options.speed*(60/1e3):(this.decelerateVertical(),this.vertical=0);return!1}decelerateHorizontal(){let e=this.parent.plugins.get(`decelerate`,!0);this.horizontal&&e&&!this.options.noDecelerate&&e.activate({x:this.horizontal*this.options.speed*this.reverse/(1e3/60)})}decelerateVertical(){let e=this.parent.plugins.get(`decelerate`,!0);this.vertical&&e&&!this.options.noDecelerate&&e.activate({y:this.vertical*this.options.speed*this.reverse/(1e3/60)})}up(){return this.paused||(this.horizontal&&this.decelerateHorizontal(),this.vertical&&this.decelerateVertical(),this.horizontal=this.vertical=null),!1}update(){if(!this.paused&&(this.horizontal||this.vertical)){let e=this.parent.center;this.horizontal&&(e.x+=this.horizontal*this.options.speed),this.vertical&&(e.y+=this.vertical*this.options.speed),this.parent.moveCenter(e),this.parent.emit(`moved`,{viewport:this.parent,type:`mouse-edges`})}}},Kn={noDrag:!1,percent:1,center:null,factor:1,axis:`all`},qn=class extends M{constructor(e,t={}){super(e),this.active=!1,this.pinching=!1,this.moved=!1,this.options=Object.assign({},Kn,t)}down(){return this.parent.input.count()>=2?(this.active=!0,!0):!1}isAxisX(){return[`all`,`x`].includes(this.options.axis)}isAxisY(){return[`all`,`y`].includes(this.options.axis)}move(e){if(this.paused||!this.active)return!1;let t=e.global.x,n=e.global.y,r=this.parent.input.touches;if(r.length>=2){let i=r[0],a=r[1],o=i.last&&a.last?Math.sqrt((a.last.x-i.last.x)**2+(a.last.y-i.last.y)**2):null;if(i.id===e.pointerId?i.last={x:t,y:n,data:e}:a.id===e.pointerId&&(a.last={x:t,y:n,data:e}),o){let e,t=new l(i.last.x+(a.last.x-i.last.x)/2,i.last.y+(a.last.y-i.last.y)/2);this.options.center||(e=this.parent.toLocal(t));let n=Math.sqrt((a.last.x-i.last.x)**2+(a.last.y-i.last.y)**2);n=n===0?n=1e-10:n;let r=(1-o/n)*this.options.percent*(this.isAxisX()?this.parent.scale.x:this.parent.scale.y);this.isAxisX()&&(this.parent.scale.x+=r),this.isAxisY()&&(this.parent.scale.y+=r),this.parent.emit(`zoomed`,{viewport:this.parent,type:`pinch`,center:t});let s=this.parent.plugins.get(`clamp-zoom`,!0);if(s&&s.clamp(),this.options.center)this.parent.moveCenter(this.options.center);else{let n=this.parent.toGlobal(e);this.parent.x+=(t.x-n.x)*this.options.factor,this.parent.y+=(t.y-n.y)*this.options.factor,this.parent.emit(`moved`,{viewport:this.parent,type:`pinch`})}!this.options.noDrag&&this.lastCenter&&(this.parent.x+=(t.x-this.lastCenter.x)*this.options.factor,this.parent.y+=(t.y-this.lastCenter.y)*this.options.factor,this.parent.emit(`moved`,{viewport:this.parent,type:`pinch`})),this.lastCenter=t,this.moved=!0}else this.pinching||=(this.parent.emit(`pinch-start`,this.parent),!0);return!0}return!1}up(){return this.pinching&&this.parent.input.touches.length<=1?(this.active=!1,this.lastCenter=null,this.pinching=!1,this.moved=!1,this.parent.emit(`pinch-end`,this.parent),!0):!1}},Jn={topLeft:!1,friction:.8,time:1e3,ease:`easeInOutSine`,interrupt:!0,removeOnComplete:!1,removeOnInterrupt:!1,forceStart:!1},Yn=class extends M{constructor(e,t,n,r={}){super(e),this.options=Object.assign({},Jn,r),this.ease=kn(r.ease,`easeInOutSine`),this.x=t,this.y=n,this.options.forceStart&&this.snapStart()}snapStart(){this.percent=0,this.snapping={time:0};let e=this.options.topLeft?this.parent.corner:this.parent.center;this.deltaX=this.x-e.x,this.deltaY=this.y-e.y,this.startX=e.x,this.startY=e.y,this.parent.emit(`snap-start`,this.parent)}wheel(){return this.options.removeOnInterrupt&&this.parent.plugins.remove(`snap`),!1}down(){return this.options.removeOnInterrupt?this.parent.plugins.remove(`snap`):this.options.interrupt&&(this.snapping=null),!1}up(){if(this.parent.input.count()===0){let e=this.parent.plugins.get(`decelerate`,!0);e&&(e.x||e.y)&&(e.percentChangeX=e.percentChangeY=this.options.friction)}return!1}update(e){if(!this.paused&&!(this.options.interrupt&&this.parent.input.count()!==0))if(this.snapping){let t=this.snapping;t.time+=e;let n,r,i,a=this.startX,o=this.startY,s=this.deltaX,c=this.deltaY;if(t.time>this.options.time)n=!0,r=a+s,i=o+c;else{let e=this.ease(t.time,0,1,this.options.time);r=a+s*e,i=o+c*e}this.options.topLeft?this.parent.moveCorner(r,i):this.parent.moveCenter(r,i),this.parent.emit(`moved`,{viewport:this.parent,type:`snap`}),n&&(this.options.removeOnComplete&&this.parent.plugins.remove(`snap`),this.parent.emit(`snap-end`,this.parent),this.snapping=null)}else{let e=this.options.topLeft?this.parent.corner:this.parent.center;(e.x!==this.x||e.y!==this.y)&&this.snapStart()}}},Xn={width:0,height:0,time:1e3,ease:`easeInOutSine`,center:null,interrupt:!0,removeOnComplete:!1,removeOnInterrupt:!1,forceStart:!1,noMove:!1},Zn=class extends M{constructor(e,t={}){super(e),this.options=Object.assign({},Xn,t),this.ease=kn(this.options.ease),this.xIndependent=!1,this.yIndependent=!1,this.xScale=0,this.yScale=0,this.options.width>0&&(this.xScale=e.screenWidth/this.options.width,this.xIndependent=!0),this.options.height>0&&(this.yScale=e.screenHeight/this.options.height,this.yIndependent=!0),this.xScale=this.xIndependent?this.xScale:this.yScale,this.yScale=this.yIndependent?this.yScale:this.xScale,this.options.time===0?(e.container.scale.x=this.xScale,e.container.scale.y=this.yScale,this.options.removeOnComplete&&this.parent.plugins.remove(`snap-zoom`)):t.forceStart&&this.createSnapping()}createSnapping(){let e=this.parent.worldScreenWidth,t=this.parent.worldScreenHeight,n=this.parent.screenWidth/this.xScale,r=this.parent.screenHeight/this.yScale;this.snapping={time:0,startX:e,startY:t,deltaX:n-e,deltaY:r-t},this.parent.emit(`snap-zoom-start`,this.parent)}resize(){this.snapping=null,this.options.width>0&&(this.xScale=this.parent.screenWidth/this.options.width),this.options.height>0&&(this.yScale=this.parent.screenHeight/this.options.height),this.xScale=this.xIndependent?this.xScale:this.yScale,this.yScale=this.yIndependent?this.yScale:this.xScale}wheel(){return this.options.removeOnInterrupt&&this.parent.plugins.remove(`snap-zoom`),!1}down(){return this.options.removeOnInterrupt?this.parent.plugins.remove(`snap-zoom`):this.options.interrupt&&(this.snapping=null),!1}update(e){if(this.paused||this.options.interrupt&&this.parent.input.count()!==0)return;let t;if(!this.options.center&&!this.options.noMove&&(t=this.parent.center),!this.snapping)(this.parent.scale.x!==this.xScale||this.parent.scale.y!==this.yScale)&&this.createSnapping();else if(this.snapping){let n=this.snapping;if(n.time+=e,n.time>=this.options.time)this.parent.scale.set(this.xScale,this.yScale),this.options.removeOnComplete&&this.parent.plugins.remove(`snap-zoom`),this.parent.emit(`snap-zoom-end`,this.parent),this.snapping=null;else{let e=this.snapping,t=this.ease(e.time,e.startX,e.deltaX,this.options.time),n=this.ease(e.time,e.startY,e.deltaY,this.options.time);this.parent.scale.x=this.parent.screenWidth/t,this.parent.scale.y=this.parent.screenHeight/n}let r=this.parent.plugins.get(`clamp-zoom`,!0);r&&r.clamp(),this.options.noMove||(this.options.center?this.parent.moveCenter(this.options.center):this.parent.moveCenter(t))}}resume(){this.snapping=null,super.resume()}},Qn={percent:.1,smooth:!1,interrupt:!0,reverse:!1,center:null,lineHeight:20,axis:`all`,keyToPress:null,trackpadPinch:!1,wheelZoom:!0},$n=class extends M{constructor(e,t={}){super(e),this.options=Object.assign({},Qn,t),this.keyIsPressed=!1,this.options.keyToPress&&this.handleKeyPresses(this.options.keyToPress)}handleKeyPresses(e){typeof window>`u`||(window.addEventListener(`keydown`,t=>{e.includes(t.code)&&(this.keyIsPressed=!0)}),window.addEventListener(`keyup`,t=>{e.includes(t.code)&&(this.keyIsPressed=!1)}))}checkKeyPress(){return!this.options.keyToPress||this.keyIsPressed}down(){return this.options.interrupt&&(this.smoothing=null),!1}isAxisX(){return[`all`,`x`].includes(this.options.axis)}isAxisY(){return[`all`,`y`].includes(this.options.axis)}update(){if(this.smoothing){let e=this.smoothingCenter,t=this.smoothing,n;this.options.center||(n=this.parent.toLocal(e)),this.isAxisX()&&(this.parent.scale.x+=t.x),this.isAxisY()&&(this.parent.scale.y+=t.y),this.parent.emit(`zoomed`,{viewport:this.parent,type:`wheel`});let r=this.parent.plugins.get(`clamp-zoom`,!0);if(r&&r.clamp(),this.options.center)this.parent.moveCenter(this.options.center);else{let t=this.parent.toGlobal(n);this.parent.x+=e.x-t.x,this.parent.y+=e.y-t.y}this.parent.emit(`moved`,{viewport:this.parent,type:`wheel`}),this.smoothingCount++,this.smoothingCount>=this.options.smooth&&(this.smoothing=null)}}pinch(e){if(this.paused)return;let t=this.parent.input.getPointerPosition(e),n=-e.deltaY*(e.deltaMode?this.options.lineHeight:1)/200,r=2**((1+this.options.percent)*n),i;this.options.center||(i=this.parent.toLocal(t)),this.isAxisX()&&(this.parent.scale.x*=r),this.isAxisY()&&(this.parent.scale.y*=r),this.parent.emit(`zoomed`,{viewport:this.parent,type:`wheel`});let a=this.parent.plugins.get(`clamp-zoom`,!0);if(a&&a.clamp(),this.options.center)this.parent.moveCenter(this.options.center);else{let e=this.parent.toGlobal(i);this.parent.x+=t.x-e.x,this.parent.y+=t.y-e.y}this.parent.emit(`moved`,{viewport:this.parent,type:`wheel`}),this.parent.emit(`wheel-start`,{event:e,viewport:this.parent})}wheel(e){if(this.paused||!this.checkKeyPress())return!1;if(e.ctrlKey&&this.options.trackpadPinch)this.pinch(e);else if(this.options.wheelZoom){let t=this.parent.input.getPointerPosition(e),n=(this.options.reverse?-1:1)*-e.deltaY*(e.deltaMode?this.options.lineHeight:1)/500,r=2**((1+this.options.percent)*n);if(this.options.smooth){let e={x:this.smoothing?this.smoothing.x*(this.options.smooth-this.smoothingCount):0,y:this.smoothing?this.smoothing.y*(this.options.smooth-this.smoothingCount):0};this.smoothing={x:((this.parent.scale.x+e.x)*r-this.parent.scale.x)/this.options.smooth,y:((this.parent.scale.y+e.y)*r-this.parent.scale.y)/this.options.smooth},this.smoothingCount=0,this.smoothingCenter=t}else{let e;this.options.center||(e=this.parent.toLocal(t)),this.isAxisX()&&(this.parent.scale.x*=r),this.isAxisY()&&(this.parent.scale.y*=r),this.parent.emit(`zoomed`,{viewport:this.parent,type:`wheel`});let n=this.parent.plugins.get(`clamp-zoom`,!0);if(n&&n.clamp(),this.options.center)this.parent.moveCenter(this.options.center);else{let n=this.parent.toGlobal(e);this.parent.x+=t.x-n.x,this.parent.y+=t.y-n.y}}this.parent.emit(`moved`,{viewport:this.parent,type:`wheel`}),this.parent.emit(`wheel-start`,{event:e,viewport:this.parent})}return!this.parent.options.passiveWheel}},er=class{constructor(e){this.viewport=e,this.touches=[],this.addListeners()}addListeners(){this.viewport.eventMode=`static`,this.viewport.forceHitArea||(this.viewport.hitArea=new a(0,0,this.viewport.worldWidth,this.viewport.worldHeight)),this.viewport.on(`pointerdown`,this.down,this),this.viewport.options.allowPreserveDragOutside?this.viewport.on(`globalpointermove`,this.move,this):this.viewport.on(`pointermove`,this.move,this),this.viewport.on(`pointerup`,this.up,this),this.viewport.on(`pointerupoutside`,this.up,this),this.viewport.on(`pointercancel`,this.up,this),this.viewport.options.allowPreserveDragOutside||this.viewport.on(`pointerleave`,this.up,this),this.wheelFunction=e=>this.handleWheel(e),this.viewport.options.events.domElement.addEventListener(`wheel`,this.wheelFunction,{passive:this.viewport.options.passiveWheel}),this.isMouseDown=!1}destroy(){var e;(e=this.viewport.options.events.domElement)==null||e.removeEventListener(`wheel`,this.wheelFunction)}down(e){if(!(this.viewport.pause||!this.viewport.visible)){if(e.pointerType===`mouse`?this.isMouseDown=!0:this.get(e.pointerId)||this.touches.push({id:e.pointerId,last:null}),this.count()===1){this.last=e.global.clone();let t=this.viewport.plugins.get(`decelerate`,!0),n=this.viewport.plugins.get(`bounce`,!0);(!t||!t.isActive())&&(!n||!n.isActive())?this.clickedAvailable=!0:this.clickedAvailable=!1}else this.clickedAvailable=!1;this.viewport.plugins.down(e)&&this.viewport.options.stopPropagation&&e.stopPropagation()}}clear(){this.isMouseDown=!1,this.touches=[],this.last=null}checkThreshold(e){return Math.abs(e)>=this.viewport.threshold}move(e){if(this.viewport.pause||!this.viewport.visible)return;let t=this.viewport.plugins.move(e);if(this.clickedAvailable&&this.last){let t=e.global.x-this.last.x,n=e.global.y-this.last.y;(this.checkThreshold(t)||this.checkThreshold(n))&&(this.clickedAvailable=!1)}t&&this.viewport.options.stopPropagation&&e.stopPropagation()}up(e){if(this.viewport.pause||!this.viewport.visible)return;e.pointerType===`mouse`&&(this.isMouseDown=!1),e.pointerType!==`mouse`&&this.remove(e.pointerId);let t=this.viewport.plugins.up(e);this.clickedAvailable&&this.count()===0&&this.last&&(this.viewport.emit(`clicked`,{event:e,screen:this.last,world:this.viewport.toWorld(this.last),viewport:this.viewport}),this.clickedAvailable=!1),t&&this.viewport.options.stopPropagation&&e.stopPropagation()}getPointerPosition(e){let t=new l;return this.viewport.options.events.mapPositionToPoint(t,e.clientX,e.clientY),t}handleWheel(e){if(this.viewport.pause||!this.viewport.visible)return;let t=this.viewport.toLocal(this.getPointerPosition(e));this.viewport.left<=t.x&&t.x<=this.viewport.right&&this.viewport.top<=t.y&&t.y<=this.viewport.bottom&&this.viewport.plugins.wheel(e)&&!this.viewport.options.passiveWheel&&e.preventDefault()}pause(){this.touches=[],this.isMouseDown=!1}get(e){for(let t of this.touches)if(t.id===e)return t;return null}remove(e){for(let t=0;t<this.touches.length;t++)if(this.touches[t].id===e){this.touches.splice(t,1);return}}count(){return+!!this.isMouseDown+this.touches.length}},tr=[`drag`,`pinch`,`wheel`,`follow`,`mouse-edges`,`decelerate`,`animate`,`bounce`,`snap-zoom`,`clamp-zoom`,`snap`,`clamp`],nr=class{constructor(e){this.viewport=e,this.list=[],this.plugins={}}add(e,t,n=tr.length){let r=this.plugins[e];r&&r.destroy(),this.plugins[e]=t;let i=tr.indexOf(e);i!==-1&&tr.splice(i,1),tr.splice(n,0,e),this.sort()}get(e,t){var n;return t&&(n=this.plugins[e])!=null&&n.paused?null:this.plugins[e]}update(e){for(let t of this.list)t.update(e)}resize(){for(let e of this.list)e.resize()}reset(){for(let e of this.list)e.reset()}removeAll(){this.list.forEach(e=>{e.destroy()}),this.plugins={},this.sort()}remove(e){var t;this.plugins[e]&&((t=this.plugins[e])==null||t.destroy(),delete this.plugins[e],this.viewport.emit(`plugin-remove`,e),this.sort())}pause(e){var t;(t=this.plugins[e])==null||t.pause()}resume(e){var t;(t=this.plugins[e])==null||t.resume()}sort(){this.list=[];for(let e of tr)this.plugins[e]&&this.list.push(this.plugins[e])}down(e){let t=!1;for(let n of this.list)n.down(e)&&(t=!0);return t}move(e){let t=!1;for(let n of this.viewport.plugins.list)n.move(e)&&(t=!0);return t}up(e){let t=!1;for(let n of this.list)n.up(e)&&(t=!0);return t}wheel(e){let t=!1;for(let n of this.list)n.wheel(e)&&(t=!0);return t}},rr={screenWidth:typeof window>`u`?0:window.innerWidth,screenHeight:typeof window>`u`?0:window.innerHeight,worldWidth:null,worldHeight:null,threshold:5,passiveWheel:!0,stopPropagation:!1,forceHitArea:null,noTicker:!1,disableOnContextMenu:!1,ticker:S.shared,allowPreserveDragOutside:!1},ir=class extends t{constructor(e){super(),this._disableOnContextMenu=e=>e.preventDefault(),this.options={...rr,...e},this.screenWidth=this.options.screenWidth,this.screenHeight=this.options.screenHeight,this._worldWidth=this.options.worldWidth,this._worldHeight=this.options.worldHeight,this.forceHitArea=this.options.forceHitArea,this.threshold=this.options.threshold,this.options.disableOnContextMenu&&this.options.events.domElement.addEventListener(`contextmenu`,this._disableOnContextMenu),this.options.noTicker||(this.tickerFunction=()=>this.update(this.options.ticker.elapsedMS),this.options.ticker.add(this.tickerFunction)),this.input=new er(this),this.plugins=new nr(this)}destroy(e){var t;!this.options.noTicker&&this.tickerFunction&&this.options.ticker.remove(this.tickerFunction),this.options.disableOnContextMenu&&((t=this.options.events.domElement)==null||t.removeEventListener(`contextmenu`,this._disableOnContextMenu)),this.input.destroy(),super.destroy(e)}update(e){this.pause||(this.plugins.update(e),this.lastViewport&&(this.lastViewport.x!==this.x||this.lastViewport.y!==this.y?this.moving=!0:this.moving&&=(this.emit(`moved-end`,this),!1),this.lastViewport.scaleX!==this.scale.x||this.lastViewport.scaleY!==this.scale.y?this.zooming=!0:this.zooming&&=(this.emit(`zoomed-end`,this),!1)),this.forceHitArea||(this._hitAreaDefault=new a(this.left,this.top,this.worldScreenWidth,this.worldScreenHeight),this.hitArea=this._hitAreaDefault),this._dirty=this._dirty||!this.lastViewport||this.lastViewport.x!==this.x||this.lastViewport.y!==this.y||this.lastViewport.scaleX!==this.scale.x||this.lastViewport.scaleY!==this.scale.y,this.lastViewport={x:this.x,y:this.y,scaleX:this.scale.x,scaleY:this.scale.y},this.emit(`frame-end`,this))}resize(e=typeof window>`u`?0:window.innerWidth,t=typeof window>`u`?0:window.innerHeight,n,r){this.screenWidth=e,this.screenHeight=t,typeof n<`u`&&(this._worldWidth=n),typeof r<`u`&&(this._worldHeight=r),this.plugins.resize(),this.dirty=!0}get worldWidth(){return this._worldWidth?this._worldWidth:this.width/this.scale.x}set worldWidth(e){this._worldWidth=e,this.plugins.resize()}get worldHeight(){return this._worldHeight?this._worldHeight:this.height/this.scale.y}set worldHeight(e){this._worldHeight=e,this.plugins.resize()}getVisibleBounds(){return new a(this.left,this.top,this.worldScreenWidth,this.worldScreenHeight)}toWorld(e,t){return arguments.length===2?this.toLocal(new l(e,t)):this.toLocal(e)}toScreen(e,t){return arguments.length===2?this.toGlobal(new l(e,t)):this.toGlobal(e)}get worldScreenWidth(){return this.screenWidth/this.scale.x}get worldScreenHeight(){return this.screenHeight/this.scale.y}get screenWorldWidth(){return this.worldWidth*this.scale.x}get screenWorldHeight(){return this.worldHeight*this.scale.y}get center(){return new l(this.worldScreenWidth/2-this.x/this.scale.x,this.worldScreenHeight/2-this.y/this.scale.y)}set center(e){this.moveCenter(e)}moveCenter(...e){let t,n;typeof e[0]==`number`?(t=e[0],n=e[1]):(t=e[0].x,n=e[0].y);let r=(this.worldScreenWidth/2-t)*this.scale.x,i=(this.worldScreenHeight/2-n)*this.scale.y;return(this.x!==r||this.y!==i)&&(this.position.set(r,i),this.plugins.reset(),this.dirty=!0),this}get corner(){return new l(-this.x/this.scale.x,-this.y/this.scale.y)}set corner(e){this.moveCorner(e)}moveCorner(...e){let t,n;return e.length===1?(t=-e[0].x*this.scale.x,n=-e[0].y*this.scale.y):(t=-e[0]*this.scale.x,n=-e[1]*this.scale.y),(t!==this.x||n!==this.y)&&(this.position.set(t,n),this.plugins.reset(),this.dirty=!0),this}get screenWidthInWorldPixels(){return this.screenWidth/this.scale.x}get screenHeightInWorldPixels(){return this.screenHeight/this.scale.y}findFitWidth(e){return this.screenWidth/e}findFitHeight(e){return this.screenHeight/e}findFit(e,t){let n=this.screenWidth/e,r=this.screenHeight/t;return Math.min(n,r)}findCover(e,t){let n=this.screenWidth/e,r=this.screenHeight/t;return Math.max(n,r)}fitWidth(e=this.worldWidth,t,n=!0,r){let i;t&&(i=this.center),this.scale.x=this.screenWidth/e,n&&(this.scale.y=this.scale.x);let a=this.plugins.get(`clamp-zoom`,!0);return!r&&a&&a.clamp(),t&&i&&this.moveCenter(i),this}fitHeight(e=this.worldHeight,t,n=!0,r){let i;t&&(i=this.center),this.scale.y=this.screenHeight/e,n&&(this.scale.x=this.scale.y);let a=this.plugins.get(`clamp-zoom`,!0);return!r&&a&&a.clamp(),t&&i&&this.moveCenter(i),this}fitWorld(e){let t;e&&(t=this.center),this.scale.x=this.screenWidth/this.worldWidth,this.scale.y=this.screenHeight/this.worldHeight,this.scale.x<this.scale.y?this.scale.y=this.scale.x:this.scale.x=this.scale.y;let n=this.plugins.get(`clamp-zoom`,!0);return n&&n.clamp(),e&&t&&this.moveCenter(t),this}fit(e,t=this.worldWidth,n=this.worldHeight){let r;e&&(r=this.center),this.scale.x=this.screenWidth/t,this.scale.y=this.screenHeight/n,this.scale.x<this.scale.y?this.scale.y=this.scale.x:this.scale.x=this.scale.y;let i=this.plugins.get(`clamp-zoom`,!0);return i&&i.clamp(),e&&r&&this.moveCenter(r),this}setZoom(e,t){let n;t&&(n=this.center),this.scale.set(e);let r=this.plugins.get(`clamp-zoom`,!0);return r&&r.clamp(),t&&n&&this.moveCenter(n),this}zoomPercent(e,t){return this.setZoom(this.scale.x+this.scale.x*e,t)}zoom(e,t){return this.fitWidth(e+this.worldScreenWidth,t),this}get scaled(){return this.scale.x}set scaled(e){this.setZoom(e,!0)}snapZoom(e){return this.plugins.add(`snap-zoom`,new Zn(this,e)),this}OOB(){return{left:this.left<0,right:this.right>this.worldWidth,top:this.top<0,bottom:this.bottom>this.worldHeight,cornerPoint:new l(this.worldWidth*this.scale.x-this.screenWidth,this.worldHeight*this.scale.y-this.screenHeight)}}get right(){return-this.x/this.scale.x+this.worldScreenWidth}set right(e){this.x=-e*this.scale.x+this.screenWidth,this.plugins.reset()}get left(){return-this.x/this.scale.x}set left(e){this.x=-e*this.scale.x,this.plugins.reset()}get top(){return-this.y/this.scale.y}set top(e){this.y=-e*this.scale.y,this.plugins.reset()}get bottom(){return-this.y/this.scale.y+this.worldScreenHeight}set bottom(e){this.y=-e*this.scale.y+this.screenHeight,this.plugins.reset()}get dirty(){return!!this._dirty}set dirty(e){this._dirty=e}get forceHitArea(){return this._forceHitArea}set forceHitArea(e){e?(this._forceHitArea=e,this.hitArea=e):(this._forceHitArea=null,this.hitArea=new a(0,0,this.worldWidth,this.worldHeight))}drag(e){return this.plugins.add(`drag`,new Vn(this,e)),this}clamp(e){return this.plugins.add(`clamp`,new Fn(this,e)),this}decelerate(e){return this.plugins.add(`decelerate`,new zn(this,e)),this}bounce(e){return this.plugins.add(`bounce`,new Nn(this,e)),this}pinch(e){return this.plugins.add(`pinch`,new qn(this,e)),this}snap(e,t,n){return this.plugins.add(`snap`,new Yn(this,e,t,n)),this}follow(e,t){return this.plugins.add(`follow`,new Un(this,e,t)),this}wheel(e){return this.plugins.add(`wheel`,new $n(this,e)),this}animate(e){return this.plugins.add(`animate`,new jn(this,e)),this}clampZoom(e){return this.plugins.add(`clamp-zoom`,new Ln(this,e)),this}mouseEdges(e){return this.plugins.add(`mouse-edges`,new Gn(this,e)),this}get pause(){return!!this._pause}set pause(e){this._pause=e,this.lastViewport=null,this.moving=!1,this.zooming=!1,e&&this.input.pause()}ensureVisible(e,t,n,r,i){i&&(n>this.worldScreenWidth||r>this.worldScreenHeight)&&(this.fit(!0,n,r),this.emit(`zoomed`,{viewport:this,type:`ensureVisible`}));let a=!1;e<this.left?(this.left=e,a=!0):e+n>this.right&&(this.right=e+n,a=!0),t<this.top?(this.top=t,a=!0):t+r>this.bottom&&(this.bottom=t+r,a=!0),a&&this.emit(`moved`,{viewport:this,type:`ensureVisible`})}},P=class e{static textureIsNullOrEmpty(e){return e===null||e===n.EMPTY}static stringIsNullOrEmpty(e){return e===null||e===``}static hasInterface(e,t){return Object.keys(t).every(t=>t in e)}static FormatNumber(e,t){return(`0`.repeat(t)+e).slice(-t)}static setAnchorAndAdjustPosition(e,t){e.anchor.set(t.x,t.y);let n=-(e.parent.width*t.x),r=-(e.parent.height*t.y);e.position.set(e.position.x+n,e.position.y+r)}static setAnchorAndAdjustPositionAndParent(t,n,r){e.setAnchorAndAdjustPosition(n,r);let i=t.width*r.x*2,a=t.height*r.y*2;t.position.set(t.position.x+i,t.position.y+a)}},ar={canCollisionBeChecked:!0},or=class{get isInitialized(){return this._isInitialized}_app;_isInitialized=!1;constructor(e){this._app=e}async initializeAsync(){console.log(`Method must be overriden. `+this.constructor.name)}requireIsInitialized(){if(!this.isInitialized)throw Error(`Systems are not initialized.`)}hasItem(e){return console.log(`Method must be overriden. `+this.constructor.name),!1}addItem(e,t){console.log(`Method must be overriden. `+this.constructor.name)}getItem(e){return console.log(`Method must be overriden. `+this.constructor.name),null}removeItem(e){console.log(`Method must be overriden. `+this.constructor.name)}onTick(e){console.log(`Method must be overriden. `+this.constructor.name)}},sr=class extends or{get stageContainers(){return this._stageContainers}stageContainersRefresh(){this._stageContainers=this.stageContainersRefreshRecursive(this._app.app.stage)}_stageContainers;constructor(e){super(e)}async initializeAsync(){this.isInitialized||(this._isInitialized=!0)}stageContainersCollidingWith(e){return this.stageContainersRefresh(),this.getCollisionsInternal(e,this._stageContainers)}stageContainersRefreshRecursive(e){let n=[];return e.children.forEach(e=>{n.push(e),e instanceof t&&e.children.length>0&&n.push(...this.stageContainersRefreshRecursive(e))}),n}getCollisionsInternal(e,t){return t.filter(t=>{let n=P.hasInterface(t,ar);return t!==e&&n&&t.canCollisionBeChecked&&this.isCollidingWith(e,t)})}isCollidingWith(e,t){let n=e.getBounds(),r=t.getBounds();return n.x<r.x+r.width&&n.x+n.width>r.x&&n.y<r.y+r.height&&n.y+r.height>r.y}onTick(e){}},cr={canCollisionCheck:!0,isTickable:!0,isResizable:!0},F=class extends t{get isInitialized(){return this._isInitialized}get configuration(){return this._configuration}get canCollisionCheck(){return this._canCollisionCheck}isChild(){return this.parent!==null}_isDestroyed=!1;_configuration;_isInitialized=!1;_canCollisionCheck=!0;_app;constructor(e,t){super(),this._configuration={...cr,...t},this._app=e,this.configuration.isTickable&&this._app.app.ticker.add(this.onTickInternal.bind(this)),this.configuration.isResizable&&this._app.addListener(Va.EVENT_RESIZE,this.onResizeInternal.bind(this))}requireIsInitialized(){if(!this.isInitialized)throw Error(`requireIsInitialized.`)}async initializeAsync(){this._isInitialized||=!0}destroy(e){this.requireIsInitialized(),!this._isDestroyed&&(this.configuration.isTickable&&this._app.app.ticker.remove(this.onTickInternal.bind(this)),this.configuration.isResizable&&this._app.removeListener(Va.EVENT_RESIZE,this.onResizeInternal.bind(this)),this._isDestroyed=!0,super.destroy(e))}onAdded(){}onRemoved(){}onResize(e){}onTick(e){if(!this.canCollisionCheck)return;let t=this._app.systemManager.getItem(sr).stageContainersCollidingWith(this);t.length&&this.onCollision(t)}onCollision(e){}onTickInternal(e){this._isDestroyed||this.onTick(e)}onResizeInternal(e){this._isDestroyed||this.onResize(e)}},lr;function ur(e){return lr=e,e}function I(){return lr}var dr=class{constructor(e,t){this.init(e,t)}init(e,t){this.destination=e,this.source=t||e}connect(e){this.source?.connect(e)}disconnect(){this.source?.disconnect()}destroy(){this.disconnect(),this.destination=null,this.source=null}},L=class{static setParamValue(e,t){if(e.setValueAtTime){let n=I().context;e.setValueAtTime(t,n.audioContext.currentTime)}else e.value=t;return t}},R=class extends dr{constructor(e=0,t=0,n=0,r=0,i=0,a=0,o=0,s=0,c=0,l=0){let u=[],d=[{f:R.F32,type:`lowshelf`,gain:e},{f:R.F64,type:`peaking`,gain:t},{f:R.F125,type:`peaking`,gain:n},{f:R.F250,type:`peaking`,gain:r},{f:R.F500,type:`peaking`,gain:i},{f:R.F1K,type:`peaking`,gain:a},{f:R.F2K,type:`peaking`,gain:o},{f:R.F4K,type:`peaking`,gain:s},{f:R.F8K,type:`peaking`,gain:c},{f:R.F16K,type:`highshelf`,gain:l}];I().useLegacy||(u=d.map(e=>{let t=I().context.audioContext.createBiquadFilter();return t.type=e.type,L.setParamValue(t.Q,1),t.frequency.value=e.f,L.setParamValue(t.gain,e.gain),t})),super(u[0],u[u.length-1]),this.bands=u,this.bandsMap={};for(let e=0;e<this.bands.length;e++){let t=this.bands[e];e>0&&this.bands[e-1].connect(t),this.bandsMap[t.frequency.value]=t}}setGain(e,t=0){if(!this.bandsMap[e])throw Error(`No band found for frequency ${e}`);L.setParamValue(this.bandsMap[e].gain,t)}getGain(e){if(!this.bandsMap[e])throw Error(`No band found for frequency ${e}`);return this.bandsMap[e].gain.value}set f32(e){this.setGain(R.F32,e)}get f32(){return this.getGain(R.F32)}set f64(e){this.setGain(R.F64,e)}get f64(){return this.getGain(R.F64)}set f125(e){this.setGain(R.F125,e)}get f125(){return this.getGain(R.F125)}set f250(e){this.setGain(R.F250,e)}get f250(){return this.getGain(R.F250)}set f500(e){this.setGain(R.F500,e)}get f500(){return this.getGain(R.F500)}set f1k(e){this.setGain(R.F1K,e)}get f1k(){return this.getGain(R.F1K)}set f2k(e){this.setGain(R.F2K,e)}get f2k(){return this.getGain(R.F2K)}set f4k(e){this.setGain(R.F4K,e)}get f4k(){return this.getGain(R.F4K)}set f8k(e){this.setGain(R.F8K,e)}get f8k(){return this.getGain(R.F8K)}set f16k(e){this.setGain(R.F16K,e)}get f16k(){return this.getGain(R.F16K)}reset(){this.bands.forEach(e=>{L.setParamValue(e.gain,0)})}destroy(){this.bands.forEach(e=>{e.disconnect()}),this.bands=null,this.bandsMap=null}},z=R;z.F32=32,z.F64=64,z.F125=125,z.F250=250,z.F500=500,z.F1K=1e3,z.F2K=2e3,z.F4K=4e3,z.F8K=8e3,z.F16K=16e3;var fr=class extends u{constructor(){super(...arguments),this.speed=1,this.muted=!1,this.volume=1,this.paused=!1}refresh(){this.emit(`refresh`)}refreshPaused(){this.emit(`refreshPaused`)}get filters(){return console.warn(`HTML Audio does not support filters`),null}set filters(e){console.warn(`HTML Audio does not support filters`)}get audioContext(){return console.warn(`HTML Audio does not support audioContext`),null}toggleMute(){return this.muted=!this.muted,this.refresh(),this.muted}togglePause(){return this.paused=!this.paused,this.refreshPaused(),this.paused}destroy(){this.removeAllListeners()}},pr=0,mr=class extends u{constructor(e){super(),this.id=pr++,this.init(e)}set(e,t){if(this[e]===void 0)throw Error(`Property with name ${e} does not exist.`);switch(e){case`speed`:this.speed=t;break;case`volume`:this.volume=t;break;case`paused`:this.paused=t;break;case`loop`:this.loop=t;break;case`muted`:this.muted=t;break}return this}get progress(){let{currentTime:e}=this._source;return e/this._duration}get paused(){return this._paused}set paused(e){this._paused=e,this.refreshPaused()}_onPlay(){this._playing=!0}_onPause(){this._playing=!1}init(e){this._playing=!1,this._duration=e.source.duration;let t=this._source=e.source.cloneNode(!1);t.src=e.parent.url,t.onplay=this._onPlay.bind(this),t.onpause=this._onPause.bind(this),e.context.on(`refresh`,this.refresh,this),e.context.on(`refreshPaused`,this.refreshPaused,this),this._media=e}_internalStop(){this._source&&this._playing&&(this._source.onended=null,this._source.pause())}stop(){this._internalStop(),this._source&&this.emit(`stop`)}get speed(){return this._speed}set speed(e){this._speed=e,this.refresh()}get volume(){return this._volume}set volume(e){this._volume=e,this.refresh()}get loop(){return this._loop}set loop(e){this._loop=e,this.refresh()}get muted(){return this._muted}set muted(e){this._muted=e,this.refresh()}get filters(){return console.warn(`HTML Audio does not support filters`),null}set filters(e){console.warn(`HTML Audio does not support filters`)}refresh(){let e=this._media.context,t=this._media.parent;this._source.loop=this._loop||t.loop;let n=e.volume*+!e.muted,r=t.volume*+!t.muted,i=this._volume*+!this._muted;this._source.volume=i*n*r,this._source.playbackRate=this._speed*e.speed*t.speed}refreshPaused(){let e=this._media.context,t=this._media.parent,n=this._paused||t.paused||e.paused;n!==this._pausedReal&&(this._pausedReal=n,n?(this._internalStop(),this.emit(`paused`)):(this.emit(`resumed`),this.play({start:this._source.currentTime,end:this._end,volume:this._volume,speed:this._speed,loop:this._loop})),this.emit(`pause`,n))}play(e){let{start:t,end:n,speed:r,loop:i,volume:a,muted:o}=e;n&&console.assert(n>t,`End time is before start time`),this._speed=r,this._volume=a,this._loop=!!i,this._muted=o,this.refresh(),this.loop&&n!==null&&(console.warn(`Looping not support when specifying an "end" time`),this.loop=!1),this._start=t,this._end=n||this._duration,this._start=Math.max(0,this._start-mr.PADDING),this._end=Math.min(this._end+mr.PADDING,this._duration),this._source.onloadedmetadata=()=>{this._source&&(this._source.currentTime=t,this._source.onloadedmetadata=null,this.emit(`progress`,t,this._duration),S.shared.add(this._onUpdate,this))},this._source.onended=this._onComplete.bind(this),this._source.play(),this.emit(`start`)}_onUpdate(){this.emit(`progress`,this.progress,this._duration),this._source.currentTime>=this._end&&!this._source.loop&&this._onComplete()}_onComplete(){S.shared.remove(this._onUpdate,this),this._internalStop(),this.emit(`progress`,1,this._duration),this.emit(`end`,this)}destroy(){S.shared.remove(this._onUpdate,this),this.removeAllListeners();let e=this._source;e&&(e.onended=null,e.onplay=null,e.onpause=null,this._internalStop()),this._source=null,this._speed=1,this._volume=1,this._loop=!1,this._end=null,this._start=0,this._duration=0,this._playing=!1,this._pausedReal=!1,this._paused=!1,this._muted=!1,this._media&&=(this._media.context.off(`refresh`,this.refresh,this),this._media.context.off(`refreshPaused`,this.refreshPaused,this),null)}toString(){return`[HTMLAudioInstance id=${this.id}]`}},hr=mr;hr.PADDING=.1;var gr=class extends u{init(e){this.parent=e,this._source=e.options.source||new Audio,e.url&&(this._source.src=e.url)}create(){return new hr(this)}get isPlayable(){return!!this._source&&this._source.readyState===4}get duration(){return this._source.duration}get context(){return this.parent.context}get filters(){return null}set filters(e){console.warn(`HTML Audio does not support filters`)}destroy(){this.removeAllListeners(),this.parent=null,this._source&&=(this._source.src=``,this._source.load(),null)}get source(){return this._source}load(e){let t=this._source,n=this.parent;if(t.readyState===4){n.isLoaded=!0;let t=n.autoPlayStart();e&&setTimeout(()=>{e(null,n,t)},0);return}if(!n.url){e(Error(`sound.url or sound.source must be set`));return}t.src=n.url;let r=()=>{o(),n.isLoaded=!0;let t=n.autoPlayStart();e&&e(null,n,t)},i=()=>{o(),e&&e(Error(`Sound loading has been aborted`))},a=()=>{o();let n=`Failed to load audio element (code: ${t.error.code})`;e?e(Error(n)):console.error(n)},o=()=>{t.removeEventListener(`canplaythrough`,r),t.removeEventListener(`load`,r),t.removeEventListener(`abort`,i),t.removeEventListener(`error`,a)};t.addEventListener(`canplaythrough`,r,!1),t.addEventListener(`load`,r,!1),t.addEventListener(`abort`,i,!1),t.addEventListener(`error`,a,!1),t.load()}},_r=class{constructor(e,t){this.parent=e,Object.assign(this,t),this.duration=this.end-this.start,console.assert(this.duration>0,`End time must be after start time`)}play(e){return this.parent.play({complete:e,speed:this.speed||this.parent.speed,end:this.end,start:this.start,loop:this.loop})}destroy(){this.parent=null}},vr=[`ogg`,`oga`,`opus`,`m4a`,`mp3`,`mpeg`,`wav`,`aiff`,`wma`,`mid`,`caf`],yr=[`audio/mpeg`,`audio/ogg`],br={};function xr(e){let t={m4a:`audio/mp4`,oga:`audio/ogg`,opus:`audio/ogg; codecs="opus"`,caf:`audio/x-caf; codecs="opus"`,...e||{}},n=document.createElement(`audio`),r={},i=/^no$/;vr.forEach(e=>{let a=n.canPlayType(`audio/${e}`).replace(i,``),o=t[e]?n.canPlayType(t[e]).replace(i,``):``;r[e]=!!a||!!o}),Object.assign(br,r)}xr();var Sr=0,Cr=class extends u{constructor(e){super(),this.id=Sr++,this._media=null,this._paused=!1,this._muted=!1,this._elapsed=0,this.init(e)}set(e,t){if(this[e]===void 0)throw Error(`Property with name ${e} does not exist.`);switch(e){case`speed`:this.speed=t;break;case`volume`:this.volume=t;break;case`muted`:this.muted=t;break;case`loop`:this.loop=t;break;case`paused`:this.paused=t;break}return this}stop(){this._source&&(this._internalStop(),this.emit(`stop`))}get speed(){return this._speed}set speed(e){this._speed=e,this.refresh(),this._update(!0)}get volume(){return this._volume}set volume(e){this._volume=e,this.refresh()}get muted(){return this._muted}set muted(e){this._muted=e,this.refresh()}get loop(){return this._loop}set loop(e){this._loop=e,this.refresh()}get filters(){return this._filters}set filters(e){this._filters&&(this._filters?.filter(e=>e).forEach(e=>e.disconnect()),this._filters=null,this._source.connect(this._gain)),this._filters=e?.length?e.slice(0):null,this.refresh()}refresh(){if(!this._source)return;let e=this._media.context,t=this._media.parent;this._source.loop=this._loop||t.loop;let n=e.volume*+!e.muted,r=t.volume*+!t.muted,i=this._volume*+!this._muted;L.setParamValue(this._gain.gain,i*r*n),L.setParamValue(this._source.playbackRate,this._speed*t.speed*e.speed),this.applyFilters()}applyFilters(){if(this._filters?.length){this._source.disconnect();let e=this._source;this._filters.forEach(t=>{e.connect(t.destination),e=t}),e.connect(this._gain)}}refreshPaused(){let e=this._media.context,t=this._media.parent,n=this._paused||t.paused||e.paused;n!==this._pausedReal&&(this._pausedReal=n,n?(this._internalStop(),this.emit(`paused`)):(this.emit(`resumed`),this.play({start:this._elapsed%this._duration,end:this._end,speed:this._speed,loop:this._loop,volume:this._volume})),this.emit(`pause`,n))}play(e){let{start:t,end:n,speed:r,loop:i,volume:a,muted:o,filters:s}=e;n&&console.assert(n>t,`End time is before start time`),this._paused=!1;let{source:c,gain:l}=this._media.nodes.cloneBufferSource();this._source=c,this._gain=l,this._speed=r,this._volume=a,this._loop=!!i,this._muted=o,this._filters=s,this.refresh(),this._duration=this._source.buffer.duration,this._end=n,this._lastUpdate=this._now(),this._elapsed=t,this._source.onended=this._onComplete.bind(this),this._loop?(this._source.loopEnd=n,this._source.loopStart=t,this._source.start(0,t)):n?this._source.start(0,t,n-t):this._source.start(0,t),this.emit(`start`),this._update(!0),this.enableTicker(!0)}enableTicker(e){S.shared.remove(this._updateListener,this),e&&S.shared.add(this._updateListener,this)}get progress(){return this._progress}get paused(){return this._paused}set paused(e){this._paused=e,this.refreshPaused()}destroy(){this.removeAllListeners(),this._internalStop(),this._gain&&=(this._gain.disconnect(),null),this._media&&=(this._media.context.events.off(`refresh`,this.refresh,this),this._media.context.events.off(`refreshPaused`,this.refreshPaused,this),null),this._filters?.forEach(e=>e.disconnect()),this._filters=null,this._end=null,this._speed=1,this._volume=1,this._loop=!1,this._elapsed=0,this._duration=0,this._paused=!1,this._muted=!1,this._pausedReal=!1}toString(){return`[WebAudioInstance id=${this.id}]`}_now(){return this._media.context.audioContext.currentTime}_updateListener(){this._update()}_update(e=!1){if(this._source){let t=this._now(),n=t-this._lastUpdate;if(n>0||e){let e=this._source.playbackRate.value;this._elapsed+=n*e,this._lastUpdate=t;let r=this._duration,i;if(this._source.loopStart){let e=this._source.loopEnd-this._source.loopStart;i=(this._source.loopStart+this._elapsed%e)/r}else i=this._elapsed%r/r;this._progress=i,this.emit(`progress`,this._progress,r)}}}init(e){this._media=e,e.context.events.on(`refresh`,this.refresh,this),e.context.events.on(`refreshPaused`,this.refreshPaused,this)}_internalStop(){if(this._source){this.enableTicker(!1),this._source.onended=null,this._source.stop(0),this._source.disconnect();try{this._source.buffer=null}catch(e){console.warn(`Failed to set AudioBufferSourceNode.buffer to null:`,e)}this._source=null}}_onComplete(){if(this._source){this.enableTicker(!1),this._source.onended=null,this._source.disconnect();try{this._source.buffer=null}catch(e){console.warn(`Failed to set AudioBufferSourceNode.buffer to null:`,e)}}this._source=null,this._progress=1,this.emit(`progress`,1,this._duration),this.emit(`end`,this)}},wr=class{constructor(e,t){this._output=t,this._input=e}get destination(){return this._input}get filters(){return this._filters}set filters(e){if(this._filters&&(this._filters.forEach(e=>{e&&e.disconnect()}),this._filters=null,this._input.connect(this._output)),e&&e.length){this._filters=e.slice(0),this._input.disconnect();let t=null;e.forEach(e=>{t===null?this._input.connect(e.destination):t.connect(e.destination),t=e}),t.connect(this._output)}}destroy(){this.filters=null,this._input=null,this._output=null}},Tr=class extends wr{constructor(e){let t=e.audioContext,n=t.createBufferSource(),r=t.createGain(),i=t.createAnalyser();n.connect(i),i.connect(r),r.connect(e.destination),super(i,r),this.context=e,this.bufferSource=n,this.gain=r,this.analyser=i}get script(){return this._script||(this._script=this.context.audioContext.createScriptProcessor(Tr.BUFFER_SIZE),this._script.connect(this.context.destination)),this._script}destroy(){super.destroy(),this.bufferSource.disconnect(),this._script&&this._script.disconnect(),this.gain.disconnect(),this.analyser.disconnect(),this.bufferSource=null,this._script=null,this.gain=null,this.analyser=null,this.context=null}cloneBufferSource(){let e=this.bufferSource,t=this.context.audioContext.createBufferSource();t.buffer=e.buffer,L.setParamValue(t.playbackRate,e.playbackRate.value),t.loop=e.loop;let n=this.context.audioContext.createGain();return t.connect(n),n.connect(this.destination),{source:t,gain:n}}get bufferSize(){return this.script.bufferSize}},Er=Tr;Er.BUFFER_SIZE=0;var Dr=class{init(e){this.parent=e,this._nodes=new Er(this.context),this._source=this._nodes.bufferSource,this.source=e.options.source}destroy(){this.parent=null,this._nodes.destroy(),this._nodes=null;try{this._source.buffer=null}catch(e){console.warn(`Failed to set AudioBufferSourceNode.buffer to null:`,e)}this._source=null,this.source=null}create(){return new Cr(this)}get context(){return this.parent.context}get isPlayable(){return!!this._source&&!!this._source.buffer}get filters(){return this._nodes.filters}set filters(e){this._nodes.filters=e}get duration(){return console.assert(this.isPlayable,`Sound not yet playable, no duration`),this._source.buffer.duration}get buffer(){return this._source.buffer}set buffer(e){this._source.buffer=e}get nodes(){return this._nodes}load(e){this.source?this._decode(this.source,e):this.parent.url?this._loadUrl(e):e?e(Error(`sound.url or sound.source must be set`)):console.error(`sound.url or sound.source must be set`)}async _loadUrl(e){let t=this.parent.url,n=await i.get().fetch(t);this._decode(await n.arrayBuffer(),e)}_decode(e,t){let n=(e,n)=>{if(e)t&&t(e);else{this.parent.isLoaded=!0,this.buffer=n;let e=this.parent.autoPlayStart();t&&t(null,this.parent,e)}};e instanceof AudioBuffer?n(null,e):this.parent.context.decode(e,n)}},Or=class{static from(e){let t={};return typeof e==`string`?t.url=e:e instanceof ArrayBuffer||e instanceof AudioBuffer||e instanceof HTMLAudioElement?t.source=e:Array.isArray(e)?t.url=e:t=e,t={autoPlay:!1,singleInstance:!1,url:null,source:null,preload:!1,volume:1,speed:1,complete:null,loaded:null,loop:!1,...t},Object.freeze(t),new Or(I().useLegacy?new gr:new Dr,t)}constructor(e,t){this.media=e,this.options=t,this._instances=[],this._sprites={},this.media.init(this);let n=t.complete;this._autoPlayOptions=n?{complete:n}:null,this.isLoaded=!1,this._preloadQueue=null,this.isPlaying=!1,this.autoPlay=t.autoPlay,this.singleInstance=t.singleInstance,this.preload=t.preload||this.autoPlay,this.url=Array.isArray(t.url)?this.preferUrl(t.url):t.url,this.speed=t.speed,this.volume=t.volume,this.loop=t.loop,t.sprites&&this.addSprites(t.sprites),this.preload&&this._preload(t.loaded)}preferUrl(e){let[t]=e.map(e=>({url:e,ext:E.extname(e).slice(1)})).filter(({ext:e})=>br[e]).sort((e,t)=>vr.indexOf(e.ext)-vr.indexOf(t.ext));if(!t)throw Error(`No supported file type found`);return t.url}get context(){return I().context}pause(){return this.isPlaying=!1,this.paused=!0,this}resume(){return this.isPlaying=this._instances.length>0,this.paused=!1,this}get paused(){return this._paused}set paused(e){this._paused=e,this.refreshPaused()}get speed(){return this._speed}set speed(e){this._speed=e,this.refresh()}get filters(){return this.media.filters}set filters(e){this.media.filters=e}addSprites(e,t){if(typeof e==`object`){let t={};for(let n in e)t[n]=this.addSprites(n,e[n]);return t}console.assert(!this._sprites[e],`Alias ${e} is already taken`);let n=new _r(this,t);return this._sprites[e]=n,n}destroy(){this._removeInstances(),this.removeSprites(),this.media.destroy(),this.media=null,this._sprites=null,this._instances=null}removeSprites(e){if(e){let t=this._sprites[e];t!==void 0&&(t.destroy(),delete this._sprites[e])}else for(let e in this._sprites)this.removeSprites(e);return this}get isPlayable(){return this.isLoaded&&this.media&&this.media.isPlayable}stop(){if(!this.isPlayable)return this.autoPlay=!1,this._autoPlayOptions=null,this;this.isPlaying=!1;for(let e=this._instances.length-1;e>=0;e--)this._instances[e].stop();return this}play(e,t){let n;if(typeof e==`string`?n={sprite:e,loop:this.loop,complete:t}:typeof e==`function`?(n={},n.complete=e):n=e,n={complete:null,loaded:null,sprite:null,end:null,start:0,volume:1,speed:1,muted:!1,loop:!1,...n||{}},n.sprite){let e=n.sprite;console.assert(!!this._sprites[e],`Alias ${e} is not available`);let t=this._sprites[e];n.start=t.start+(n.start||0),n.end=t.end,n.speed=t.speed||1,n.loop=t.loop||n.loop,delete n.sprite}if(n.offset&&(n.start=n.offset),!this.isLoaded)return this._preloadQueue?new Promise(e=>{this._preloadQueue.push(()=>{e(this.play(n))})}):(this._preloadQueue=[],this.autoPlay=!0,this._autoPlayOptions=n,new Promise((e,t)=>{this._preload((r,i,a)=>{this._preloadQueue.forEach(e=>e()),this._preloadQueue=null,r?t(r):(n.loaded&&n.loaded(r,i,a),e(a))})}));(this.singleInstance||n.singleInstance)&&this._removeInstances();let r=this._createInstance();return this._instances.push(r),this.isPlaying=!0,r.once(`end`,()=>{n.complete&&n.complete(this),this._onComplete(r)}),r.once(`stop`,()=>{this._onComplete(r)}),r.play(n),r}refresh(){let e=this._instances.length;for(let t=0;t<e;t++)this._instances[t].refresh()}refreshPaused(){let e=this._instances.length;for(let t=0;t<e;t++)this._instances[t].refreshPaused()}get volume(){return this._volume}set volume(e){this._volume=e,this.refresh()}get muted(){return this._muted}set muted(e){this._muted=e,this.refresh()}get loop(){return this._loop}set loop(e){this._loop=e,this.refresh()}_preload(e){this.media.load(e)}get instances(){return this._instances}get sprites(){return this._sprites}get duration(){return this.media.duration}autoPlayStart(){let e;return this.autoPlay&&(e=this.play(this._autoPlayOptions)),e}_removeInstances(){for(let e=this._instances.length-1;e>=0;e--)this._poolInstance(this._instances[e]);this._instances.length=0}_onComplete(e){if(this._instances){let t=this._instances.indexOf(e);t>-1&&this._instances.splice(t,1),this.isPlaying=this._instances.length>0}this._poolInstance(e)}_createInstance(){if(Or._pool.length>0){let e=Or._pool.pop();return e.init(this.media),e}return this.media.create()}_poolInstance(e){e.destroy(),Or._pool.indexOf(e)<0&&Or._pool.push(e)}},kr=Or;kr._pool=[];var Ar=class e extends wr{constructor(){let t=window,n=new e.AudioContext,r=n.createDynamicsCompressor(),i=n.createAnalyser();i.connect(r),r.connect(n.destination),super(i,r),this.autoPause=!0,this._ctx=n,this._offlineCtx=new e.OfflineAudioContext(1,2,t.OfflineAudioContext?Math.max(8e3,Math.min(96e3,n.sampleRate)):44100),this.compressor=r,this.analyser=i,this.events=new u,this.volume=1,this.speed=1,this.muted=!1,this.paused=!1,this._locked=n.state===`suspended`&&(`ontouchstart`in globalThis||`onclick`in globalThis),this._locked&&(this._unlock(),this._unlock=this._unlock.bind(this),document.addEventListener(`mousedown`,this._unlock,!0),document.addEventListener(`touchstart`,this._unlock,!0),document.addEventListener(`touchend`,this._unlock,!0)),this.onFocus=this.onFocus.bind(this),this.onBlur=this.onBlur.bind(this),globalThis.addEventListener(`focus`,this.onFocus),globalThis.addEventListener(`blur`,this.onBlur)}onFocus(){if(!this.autoPause)return;let e=this._ctx.state;(e===`suspended`||e===`interrupted`||!this._locked)&&(this.paused=this._pausedOnBlur,this.refreshPaused())}onBlur(){this.autoPause&&(this._locked||(this._pausedOnBlur=this._paused,this.paused=!0,this.refreshPaused()))}_unlock(){this._locked&&(this.playEmptySound(),this._ctx.state===`running`&&(document.removeEventListener(`mousedown`,this._unlock,!0),document.removeEventListener(`touchend`,this._unlock,!0),document.removeEventListener(`touchstart`,this._unlock,!0),this._locked=!1))}playEmptySound(){let e=this._ctx.createBufferSource();e.buffer=this._ctx.createBuffer(1,1,22050),e.connect(this._ctx.destination),e.start(0,0,0),e.context.state===`suspended`&&e.context.resume()}static get AudioContext(){let e=window;return e.AudioContext||e.webkitAudioContext||null}static get OfflineAudioContext(){let e=window;return e.OfflineAudioContext||e.webkitOfflineAudioContext||null}destroy(){super.destroy();let e=this._ctx;e.close!==void 0&&e.close(),globalThis.removeEventListener(`focus`,this.onFocus),globalThis.removeEventListener(`blur`,this.onBlur),this.events.removeAllListeners(),this.analyser.disconnect(),this.compressor.disconnect(),this.analyser=null,this.compressor=null,this.events=null,this._offlineCtx=null,this._ctx=null}get audioContext(){return this._ctx}get offlineContext(){return this._offlineCtx}set paused(e){e&&this._ctx.state===`running`?this._ctx.suspend():!e&&this._ctx.state===`suspended`&&this._ctx.resume(),this._paused=e}get paused(){return this._paused}refresh(){this.events.emit(`refresh`)}refreshPaused(){this.events.emit(`refreshPaused`)}toggleMute(){return this.muted=!this.muted,this.refresh(),this.muted}togglePause(){return this.paused=!this.paused,this.refreshPaused(),this._paused}decode(e,t){let n=e=>{t(Error(e?.message||`Unable to decode file`))},r=this._offlineCtx.decodeAudioData(e,e=>{t(null,e)},n);r&&r.catch(n)}},jr=class{constructor(){this.init()}init(){return this.supported&&(this._webAudioContext=new Ar),this._htmlAudioContext=new fr,this._sounds={},this.useLegacy=!this.supported,this}get context(){return this._context}get filtersAll(){return this.useLegacy?[]:this._context.filters}set filtersAll(e){this.useLegacy||(this._context.filters=e)}get supported(){return Ar.AudioContext!==null}add(e,t){if(typeof e==`object`){let n={};for(let r in e){let i=this._getOptions(e[r],t);n[r]=this.add(r,i)}return n}if(console.assert(!this._sounds[e],`Sound with alias ${e} already exists.`),t instanceof kr)return this._sounds[e]=t,t;let n=this._getOptions(t),r=kr.from(n);return this._sounds[e]=r,r}_getOptions(e,t){let n;return n=typeof e==`string`||Array.isArray(e)?{url:e}:e instanceof ArrayBuffer||e instanceof AudioBuffer||e instanceof HTMLAudioElement?{source:e}:e,n={...n,...t||{}},n}get useLegacy(){return this._useLegacy}set useLegacy(e){this._useLegacy=e,this._context=!e&&this.supported?this._webAudioContext:this._htmlAudioContext}get disableAutoPause(){return!this._webAudioContext.autoPause}set disableAutoPause(e){this._webAudioContext.autoPause=!e}remove(e){return this.exists(e,!0),this._sounds[e].destroy(),delete this._sounds[e],this}get volumeAll(){return this._context.volume}set volumeAll(e){this._context.volume=e,this._context.refresh()}get speedAll(){return this._context.speed}set speedAll(e){this._context.speed=e,this._context.refresh()}togglePauseAll(){return this._context.togglePause()}pauseAll(){return this._context.paused=!0,this._context.refreshPaused(),this}resumeAll(){return this._context.paused=!1,this._context.refreshPaused(),this}toggleMuteAll(){return this._context.toggleMute()}muteAll(){return this._context.muted=!0,this._context.refresh(),this}unmuteAll(){return this._context.muted=!1,this._context.refresh(),this}removeAll(){for(let e in this._sounds)this._sounds[e].destroy(),delete this._sounds[e];return this}stopAll(){for(let e in this._sounds)this._sounds[e].stop();return this}exists(e,t=!1){let n=!!this._sounds[e];return t&&console.assert(n,`No sound matching alias '${e}'.`),n}isPlaying(){for(let e in this._sounds)if(this._sounds[e].isPlaying)return!0;return!1}find(e){return this.exists(e,!0),this._sounds[e]}play(e,t){return this.find(e).play(t)}stop(e){return this.find(e).stop()}pause(e){return this.find(e).pause()}resume(e){return this.find(e).resume()}volume(e,t){let n=this.find(e);return t!==void 0&&(n.volume=t),n.volume}speed(e,t){let n=this.find(e);return t!==void 0&&(n.speed=t),n.speed}duration(e){return this.find(e).duration}close(){return this.removeAll(),this._sounds=null,this._webAudioContext&&=(this._webAudioContext.destroy(),null),this._htmlAudioContext&&=(this._htmlAudioContext.destroy(),null),this._context=null,this}},Mr=e=>{let t=e.src,n=e?.alias?.[0];return(!n||e.src===n)&&(n=E.basename(t,E.extname(t))),n},Nr={extension:h.Asset,detection:{test:async()=>!0,add:async e=>[...e,...vr.filter(e=>br[e])],remove:async e=>e.filter(t=>e.includes(t))},loader:{name:`sound`,extension:{type:[h.LoadParser],priority:x.High},test(e){return!!br[E.extname(e).slice(1)]||yr.some(t=>e.startsWith(`data:${t}`))},async load(e,t){let n=await new Promise((n,r)=>kr.from({...t.data,url:e,preload:!0,loaded(e,i){e?r(e):n(i),t.data?.loaded?.(e,i)}}));return I().add(Mr(t),n),n},async unload(e,t){I().remove(Mr(t))}}};b.add(Nr);var Pr=ur(new jr),B=class extends or{_audioContextResumed=!1;constructor(e){super(e)}async initializeAsync(){this.isInitialized||(this._isInitialized=!0,this.setupAudioContextResume())}setupAudioContextResume(){let e=()=>{if(!this._audioContextResumed){let e=Pr.context.audioContext;e.state===`suspended`?e.resume().then(()=>{this._audioContextResumed=!0,console.log(`Audio context resumed`)}).catch(e=>{console.error(`Failed to resume audio context:`,e)}):this._audioContextResumed=!0}};window.addEventListener(`click`,e,{once:!0}),window.addEventListener(`touchstart`,e,{once:!0}),window.addEventListener(`keydown`,e,{once:!0})}async play(e){this.playAsync(e)}async playAsync(e){if(!this._audioContextResumed){console.warn(`Audio context not resumed yet. Cannot play sound.`);return}let t=kr.from({url:e,preload:!0,autoPlay:!1});for(;!t.isLoaded;)await new Promise(e=>setTimeout(e,100));t.speed=1,t.volume=1,t.play()}onTick(e){}},V=class extends or{_keyStateDictionary;constructor(e){super(e),this._keyStateDictionary=new Map,window.addEventListener(`keydown`,this.onKeyDown.bind(this)),window.addEventListener(`keyup`,this.onKeyUp.bind(this))}async initializeAsync(){this.isInitialized||(this._isInitialized=!0)}isKeyDown(e){return this.getKeyStateByKey(e).isDown}isKeyDownThisFrame(e){let t=this.getKeyStateByKey(e),n=t.isDownThisFrame;return t.isDownThisFrame=!1,n}onKeyDown(e){let t=this.getKeyStateByKey(e.keyCode);t.isDown?t.isDownThisFrame=!1:(t.isDown=!0,t.isDownThisFrame=!0)}onKeyUp(e){let t=this.getKeyStateByKey(e.keyCode);t.isDown=!1,t.isDownThisFrame=!1}getKeyStateByKey(e){let t=this._keyStateDictionary.get(e);if(t===void 0){let t=new Fr;return this._keyStateDictionary.set(e,t),t}return t}update(){this._keyStateDictionary.forEach(e=>{e.isDownThisFrame=!1})}onTick(e){}},Fr=class{constructor(){this.isDown=!1,this.isDownThisFrame=!1}isDown;isDownThisFrame},H=class extends or{constructor(e){super(e)}async initializeAsync(){this.isInitialized||(this._isInitialized=!0)}saveData(e,t){localStorage.setItem(e,JSON.stringify(t))}getData(e){if(!this.hasData(e))throw Error(`LocalDiskStorageSystem: Key ${e} not found`);let t=localStorage.getItem(e);if(!t)throw Error(`LocalDiskStorageSystem: Key ${e} not found`);return JSON.parse(t)}deleteData(e){localStorage.removeItem(e)}clearAllData(){localStorage.clear()}hasData(e){return localStorage.getItem(e)!==null}onTick(e){}},Ir=class{get targetLatencyMS(){return this._targetLatencyArray[this._targetLatencyMSIndex]}get targetPacketLoss(){return this._targetPacketLossArray[this._targetPacketLossIndex]}_targetLatencyMSIndex=0;_targetPacketLossIndex=0;_targetLatencyArray=[0,100,500,1e3];_targetPacketLossArray=[0,.01,.5,.9];constructor(){}nextTargetLatency(){this._targetLatencyMSIndex=(this._targetLatencyMSIndex+1)%this._targetLatencyArray.length}nextTargetPacketLoss(){this._targetPacketLossIndex=(this._targetPacketLossIndex+1)%this._targetPacketLossArray.length}wasPacketLost(){return Math.random()<this.targetPacketLoss}async simulateLatencyAsync(){await new Promise(e=>setTimeout(e,this.targetLatencyMS))}},U=Object.create(null);U.open=`0`,U.close=`1`,U.ping=`2`,U.pong=`3`,U.message=`4`,U.upgrade=`5`,U.noop=`6`;var Lr=Object.create(null);Object.keys(U).forEach(e=>{Lr[U[e]]=e});var Rr={type:`error`,data:`parser error`},zr=typeof Blob==`function`||typeof Blob<`u`&&Object.prototype.toString.call(Blob)===`[object BlobConstructor]`,Br=typeof ArrayBuffer==`function`,Vr=e=>typeof ArrayBuffer.isView==`function`?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,Hr=({type:e,data:t},n,r)=>zr&&t instanceof Blob?n?r(t):Ur(t,r):Br&&(t instanceof ArrayBuffer||Vr(t))?n?r(t):Ur(new Blob([t]),r):r(U[e]+(t||``)),Ur=(e,t)=>{let n=new FileReader;return n.onload=function(){let e=n.result.split(`,`)[1];t(`b`+(e||``))},n.readAsDataURL(e)};function Wr(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}var Gr;function Kr(e,t){if(zr&&e.data instanceof Blob)return e.data.arrayBuffer().then(Wr).then(t);if(Br&&(e.data instanceof ArrayBuffer||Vr(e.data)))return t(Wr(e.data));Hr(e,!1,e=>{Gr||=new TextEncoder,t(Gr.encode(e))})}var qr=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`,Jr=typeof Uint8Array>`u`?[]:new Uint8Array(256);for(let e=0;e<64;e++)Jr[qr.charCodeAt(e)]=e;var Yr=e=>{let t=e.length*.75,n=e.length,r,i=0,a,o,s,c;e[e.length-1]===`=`&&(t--,e[e.length-2]===`=`&&t--);let l=new ArrayBuffer(t),u=new Uint8Array(l);for(r=0;r<n;r+=4)a=Jr[e.charCodeAt(r)],o=Jr[e.charCodeAt(r+1)],s=Jr[e.charCodeAt(r+2)],c=Jr[e.charCodeAt(r+3)],u[i++]=a<<2|o>>4,u[i++]=(o&15)<<4|s>>2,u[i++]=(s&3)<<6|c&63;return l},Xr=typeof ArrayBuffer==`function`,Zr=(e,t)=>{if(typeof e!=`string`)return{type:`message`,data:$r(e,t)};let n=e.charAt(0);return n===`b`?{type:`message`,data:Qr(e.substring(1),t)}:Lr[n]?e.length>1?{type:Lr[n],data:e.substring(1)}:{type:Lr[n]}:Rr},Qr=(e,t)=>Xr?$r(Yr(e),t):{base64:!0,data:e},$r=(e,t)=>{switch(t){case`blob`:return e instanceof Blob?e:new Blob([e]);default:return e instanceof ArrayBuffer?e:e.buffer}},ei=``,ti=(e,t)=>{let n=e.length,r=Array(n),i=0;e.forEach((e,a)=>{Hr(e,!1,e=>{r[a]=e,++i===n&&t(r.join(ei))})})},ni=(e,t)=>{let n=e.split(ei),r=[];for(let e=0;e<n.length;e++){let i=Zr(n[e],t);if(r.push(i),i.type===`error`)break}return r};function ri(){return new TransformStream({transform(e,t){Kr(e,n=>{let r=n.length,i;if(r<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,r);else if(r<65536){i=new Uint8Array(3);let e=new DataView(i.buffer);e.setUint8(0,126),e.setUint16(1,r)}else{i=new Uint8Array(9);let e=new DataView(i.buffer);e.setUint8(0,127),e.setBigUint64(1,BigInt(r))}e.data&&typeof e.data!=`string`&&(i[0]|=128),t.enqueue(i),t.enqueue(n)})}})}var ii;function ai(e){return e.reduce((e,t)=>e+t.length,0)}function oi(e,t){if(e[0].length===t)return e.shift();let n=new Uint8Array(t),r=0;for(let i=0;i<t;i++)n[i]=e[0][r++],r===e[0].length&&(e.shift(),r=0);return e.length&&r<e[0].length&&(e[0]=e[0].slice(r)),n}function si(e,t){ii||=new TextDecoder;let n=[],r=0,i=-1,a=!1;return new TransformStream({transform(o,s){for(n.push(o);;){if(r===0){if(ai(n)<1)break;let e=oi(n,1);a=(e[0]&128)==128,i=e[0]&127,r=i<126?3:i===126?1:2}else if(r===1){if(ai(n)<2)break;let e=oi(n,2);i=new DataView(e.buffer,e.byteOffset,e.length).getUint16(0),r=3}else if(r===2){if(ai(n)<8)break;let e=oi(n,8),t=new DataView(e.buffer,e.byteOffset,e.length),a=t.getUint32(0);if(a>2**21-1){s.enqueue(Rr);break}i=a*2**32+t.getUint32(4),r=3}else{if(ai(n)<i)break;let e=oi(n,i);s.enqueue(Zr(a?e:ii.decode(e),t)),r=0}if(i===0||i>e){s.enqueue(Rr);break}}}})}function W(e){if(e)return ci(e)}function ci(e){for(var t in W.prototype)e[t]=W.prototype[t];return e}W.prototype.on=W.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks[`$`+e]=this._callbacks[`$`+e]||[]).push(t),this},W.prototype.once=function(e,t){function n(){this.off(e,n),t.apply(this,arguments)}return n.fn=t,this.on(e,n),this},W.prototype.off=W.prototype.removeListener=W.prototype.removeAllListeners=W.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks[`$`+e];if(!n)return this;if(arguments.length==1)return delete this._callbacks[`$`+e],this;for(var r,i=0;i<n.length;i++)if(r=n[i],r===t||r.fn===t){n.splice(i,1);break}return n.length===0&&delete this._callbacks[`$`+e],this},W.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=Array(arguments.length-1),n=this._callbacks[`$`+e],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(n){n=n.slice(0);for(var r=0,i=n.length;r<i;++r)n[r].apply(this,t)}return this},W.prototype.emitReserved=W.prototype.emit,W.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks[`$`+e]||[]},W.prototype.hasListeners=function(e){return!!this.listeners(e).length};var G=typeof self<`u`?self:typeof window<`u`?window:Function(`return this`)();function li(e,...t){return t.reduce((t,n)=>(e.hasOwnProperty(n)&&(t[n]=e[n]),t),{})}var ui=G.setTimeout,di=G.clearTimeout;function fi(e,t){t.useNativeTimers?(e.setTimeoutFn=ui.bind(G),e.clearTimeoutFn=di.bind(G)):(e.setTimeoutFn=G.setTimeout.bind(G),e.clearTimeoutFn=G.clearTimeout.bind(G))}var pi=1.33;function mi(e){return typeof e==`string`?hi(e):Math.ceil((e.byteLength||e.size)*pi)}function hi(e){let t=0,n=0;for(let r=0,i=e.length;r<i;r++)t=e.charCodeAt(r),t<128?n+=1:t<2048?n+=2:t<55296||t>=57344?n+=3:(r++,n+=4);return n}function gi(e){let t=``;for(let n in e)e.hasOwnProperty(n)&&(t.length&&(t+=`&`),t+=encodeURIComponent(n)+`=`+encodeURIComponent(e[n]));return t}function _i(e){let t={},n=e.split(`&`);for(let e=0,r=n.length;e<r;e++){let r=n[e].split(`=`);t[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}return t}var vi=class extends Error{constructor(e,t,n){super(e),this.description=t,this.context=n,this.type=`TransportError`}},yi=class extends W{constructor(e){super(),this.writable=!1,fi(this,e),this.opts=e,this.query=e.query,this.socket=e.socket}onError(e,t,n){return super.emitReserved(`error`,new vi(e,t,n)),this}open(){return this.readyState=`opening`,this.doOpen(),this}close(){return(this.readyState===`opening`||this.readyState===`open`)&&(this.doClose(),this.onClose()),this}send(e){this.readyState===`open`&&this.write(e)}onOpen(){this.readyState=`open`,this.writable=!0,super.emitReserved(`open`)}onData(e){let t=Zr(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved(`packet`,e)}onClose(e){this.readyState=`closed`,super.emitReserved(`close`,e)}pause(e){}createUri(e,t={}){return e+`://`+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){let e=this.opts.hostname;return e.indexOf(`:`)===-1?e:`[`+e+`]`}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?`:`+this.opts.port:``}_query(e){let t=gi(e);return t.length?`?`+t:``}},bi=`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_`.split(``),xi=64,Si={},Ci=0,wi=0,Ti;function Ei(e){let t=``;do t=bi[e%xi]+t,e=Math.floor(e/xi);while(e>0);return t}function Di(){let e=Ei(+new Date);return e===Ti?e+`.`+Ei(Ci++):(Ci=0,Ti=e)}for(;wi<xi;wi++)Si[bi[wi]]=wi;var Oi=!1;try{Oi=typeof XMLHttpRequest<`u`&&`withCredentials`in new XMLHttpRequest}catch{}var ki=Oi;function Ai(e){let t=e.xdomain;try{if(typeof XMLHttpRequest<`u`&&(!t||ki))return new XMLHttpRequest}catch{}if(!t)try{return new G[[`Active`,`Object`].join(`X`)](`Microsoft.XMLHTTP`)}catch{}}function ji(){}var Mi=(function(){return new Ai({xdomain:!1}).responseType!=null})(),Ni=class extends yi{constructor(e){if(super(e),this.polling=!1,typeof location<`u`){let t=location.protocol===`https:`,n=location.port;n||=t?`443`:`80`,this.xd=typeof location<`u`&&e.hostname!==location.hostname||n!==e.port}let t=e&&e.forceBase64;this.supportsBinary=Mi&&!t,this.opts.withCredentials&&(this.cookieJar=void 0)}get name(){return`polling`}doOpen(){this.poll()}pause(e){this.readyState=`pausing`;let t=()=>{this.readyState=`paused`,e()};if(this.polling||!this.writable){let e=0;this.polling&&(e++,this.once(`pollComplete`,function(){--e||t()})),this.writable||(e++,this.once(`drain`,function(){--e||t()}))}else t()}poll(){this.polling=!0,this.doPoll(),this.emitReserved(`poll`)}onData(e){ni(e,this.socket.binaryType).forEach(e=>{if(this.readyState===`opening`&&e.type===`open`&&this.onOpen(),e.type===`close`)return this.onClose({description:`transport closed by the server`}),!1;this.onPacket(e)}),this.readyState!==`closed`&&(this.polling=!1,this.emitReserved(`pollComplete`),this.readyState===`open`&&this.poll())}doClose(){let e=()=>{this.write([{type:`close`}])};this.readyState===`open`?e():this.once(`open`,e)}write(e){this.writable=!1,ti(e,e=>{this.doWrite(e,()=>{this.writable=!0,this.emitReserved(`drain`)})})}uri(){let e=this.opts.secure?`https`:`http`,t=this.query||{};return!1!==this.opts.timestampRequests&&(t[this.opts.timestampParam]=Di()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}request(e={}){return Object.assign(e,{xd:this.xd,cookieJar:this.cookieJar},this.opts),new Pi(this.uri(),e)}doWrite(e,t){let n=this.request({method:`POST`,data:e});n.on(`success`,t),n.on(`error`,(e,t)=>{this.onError(`xhr post error`,e,t)})}doPoll(){let e=this.request();e.on(`data`,this.onData.bind(this)),e.on(`error`,(e,t)=>{this.onError(`xhr poll error`,e,t)}),this.pollXhr=e}},Pi=class e extends W{constructor(e,t){super(),fi(this,t),this.opts=t,this.method=t.method||`GET`,this.uri=e,this.data=t.data===void 0?null:t.data,this.create()}create(){var t;let n=li(this.opts,`agent`,`pfx`,`key`,`passphrase`,`cert`,`ca`,`ciphers`,`rejectUnauthorized`,`autoUnref`);n.xdomain=!!this.opts.xd;let r=this.xhr=new Ai(n);try{r.open(this.method,this.uri,!0);try{if(this.opts.extraHeaders){r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0);for(let e in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(e)&&r.setRequestHeader(e,this.opts.extraHeaders[e])}}catch{}if(this.method===`POST`)try{r.setRequestHeader(`Content-type`,`text/plain;charset=UTF-8`)}catch{}try{r.setRequestHeader(`Accept`,`*/*`)}catch{}(t=this.opts.cookieJar)==null||t.addCookies(r),`withCredentials`in r&&(r.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(r.timeout=this.opts.requestTimeout),r.onreadystatechange=()=>{var e;r.readyState===3&&((e=this.opts.cookieJar)==null||e.parseCookies(r)),r.readyState===4&&(r.status===200||r.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof r.status==`number`?r.status:0)},0))},r.send(this.data)}catch(e){this.setTimeoutFn(()=>{this.onError(e)},0);return}typeof document<`u`&&(this.index=e.requestsCount++,e.requests[this.index]=this)}onError(e){this.emitReserved(`error`,e,this.xhr),this.cleanup(!0)}cleanup(t){if(!(this.xhr===void 0||this.xhr===null)){if(this.xhr.onreadystatechange=ji,t)try{this.xhr.abort()}catch{}typeof document<`u`&&delete e.requests[this.index],this.xhr=null}}onLoad(){let e=this.xhr.responseText;e!==null&&(this.emitReserved(`data`,e),this.emitReserved(`success`),this.cleanup())}abort(){this.cleanup()}};if(Pi.requestsCount=0,Pi.requests={},typeof document<`u`){if(typeof attachEvent==`function`)attachEvent(`onunload`,Fi);else if(typeof addEventListener==`function`){let e=`onpagehide`in G?`pagehide`:`unload`;addEventListener(e,Fi,!1)}}function Fi(){for(let e in Pi.requests)Pi.requests.hasOwnProperty(e)&&Pi.requests[e].abort()}var Ii=typeof Promise==`function`&&typeof Promise.resolve==`function`?e=>Promise.resolve().then(e):(e,t)=>t(e,0),Li=G.WebSocket||G.MozWebSocket,Ri=`arraybuffer`,zi=typeof navigator<`u`&&typeof navigator.product==`string`&&navigator.product.toLowerCase()===`reactnative`,Bi={websocket:class extends yi{constructor(e){super(e),this.supportsBinary=!e.forceBase64}get name(){return`websocket`}doOpen(){if(!this.check())return;let e=this.uri(),t=this.opts.protocols,n=zi?{}:li(this.opts,`agent`,`perMessageDeflate`,`pfx`,`key`,`passphrase`,`cert`,`ca`,`ciphers`,`rejectUnauthorized`,`localAddress`,`protocolVersion`,`origin`,`maxPayload`,`family`,`checkServerIdentity`);this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=zi?new Li(e,t,n):t?new Li(e,t):new Li(e)}catch(e){return this.emitReserved(`error`,e)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:`websocket connection closed`,context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError(`websocket error`,e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){let n=e[t],r=t===e.length-1;Hr(n,this.supportsBinary,e=>{try{this.ws.send(e)}catch{}r&&Ii(()=>{this.writable=!0,this.emitReserved(`drain`)},this.setTimeoutFn)})}}doClose(){this.ws!==void 0&&(this.ws.close(),this.ws=null)}uri(){let e=this.opts.secure?`wss`:`ws`,t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=Di()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}check(){return!!Li}},webtransport:class extends yi{get name(){return`webtransport`}doOpen(){typeof WebTransport==`function`&&(this.transport=new WebTransport(this.createUri(`https`),this.opts.transportOptions[this.name]),this.transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError(`webtransport error`,e)}),this.transport.ready.then(()=>{this.transport.createBidirectionalStream().then(e=>{let t=si(2**53-1,this.socket.binaryType),n=e.readable.pipeThrough(t).getReader(),r=ri();r.readable.pipeTo(e.writable),this.writer=r.writable.getWriter();let i=()=>{n.read().then(({done:e,value:t})=>{e||(this.onPacket(t),i())}).catch(e=>{})};i();let a={type:`open`};this.query.sid&&(a.data=`{"sid":"${this.query.sid}"}`),this.writer.write(a).then(()=>this.onOpen())})}))}write(e){this.writable=!1;for(let t=0;t<e.length;t++){let n=e[t],r=t===e.length-1;this.writer.write(n).then(()=>{r&&Ii(()=>{this.writable=!0,this.emitReserved(`drain`)},this.setTimeoutFn)})}}doClose(){var e;(e=this.transport)==null||e.close()}},polling:Ni},Vi=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Hi=[`source`,`protocol`,`authority`,`userInfo`,`user`,`password`,`host`,`port`,`relative`,`path`,`directory`,`file`,`query`,`anchor`];function Ui(e){if(e.length>2e3)throw`URI too long`;let t=e,n=e.indexOf(`[`),r=e.indexOf(`]`);n!=-1&&r!=-1&&(e=e.substring(0,n)+e.substring(n,r).replace(/:/g,`;`)+e.substring(r,e.length));let i=Vi.exec(e||``),a={},o=14;for(;o--;)a[Hi[o]]=i[o]||``;return n!=-1&&r!=-1&&(a.source=t,a.host=a.host.substring(1,a.host.length-1).replace(/;/g,`:`),a.authority=a.authority.replace(`[`,``).replace(`]`,``).replace(/;/g,`:`),a.ipv6uri=!0),a.pathNames=Wi(a,a.path),a.queryKey=Gi(a,a.query),a}function Wi(e,t){let n=t.replace(/\/{2,9}/g,`/`).split(`/`);return(t.slice(0,1)==`/`||t.length===0)&&n.splice(0,1),t.slice(-1)==`/`&&n.splice(n.length-1,1),n}function Gi(e,t){let n={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(e,t,r){t&&(n[t]=r)}),n}var Ki=class e extends W{constructor(e,t={}){super(),this.binaryType=Ri,this.writeBuffer=[],e&&typeof e==`object`&&(t=e,e=null),e?(e=Ui(e),t.hostname=e.host,t.secure=e.protocol===`https`||e.protocol===`wss`,t.port=e.port,e.query&&(t.query=e.query)):t.host&&(t.hostname=Ui(t.host).host),fi(this,t),this.secure=t.secure==null?typeof location<`u`&&location.protocol===`https:`:t.secure,t.hostname&&!t.port&&(t.port=this.secure?`443`:`80`),this.hostname=t.hostname||(typeof location<`u`?location.hostname:`localhost`),this.port=t.port||(typeof location<`u`&&location.port?location.port:this.secure?`443`:`80`),this.transports=t.transports||[`polling`,`websocket`,`webtransport`],this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:`/engine.io`,agent:!1,withCredentials:!1,upgrade:!0,timestampParam:`t`,rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,``)+(this.opts.addTrailingSlash?`/`:``),typeof this.opts.query==`string`&&(this.opts.query=_i(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener==`function`&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener(`beforeunload`,this.beforeunloadEventListener,!1)),this.hostname!==`localhost`&&(this.offlineEventListener=()=>{this.onClose(`transport close`,{description:`network connection lost`})},addEventListener(`offline`,this.offlineEventListener,!1))),this.open()}createTransport(e){let t=Object.assign({},this.opts.query);t.EIO=4,t.transport=e,this.id&&(t.sid=this.id);let n=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new Bi[e](n)}open(){let t;if(this.opts.rememberUpgrade&&e.priorWebsocketSuccess&&this.transports.indexOf(`websocket`)!==-1)t=`websocket`;else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved(`error`,`No transports available`)},0);return}else t=this.transports[0];this.readyState=`opening`;try{t=this.createTransport(t)}catch{this.transports.shift(),this.open();return}t.open(),this.setTransport(t)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on(`drain`,this.onDrain.bind(this)).on(`packet`,this.onPacket.bind(this)).on(`error`,this.onError.bind(this)).on(`close`,e=>this.onClose(`transport close`,e))}probe(t){let n=this.createTransport(t),r=!1;e.priorWebsocketSuccess=!1;let i=()=>{r||(n.send([{type:`ping`,data:`probe`}]),n.once(`packet`,t=>{if(!r)if(t.type===`pong`&&t.data===`probe`){if(this.upgrading=!0,this.emitReserved(`upgrading`,n),!n)return;e.priorWebsocketSuccess=n.name===`websocket`,this.transport.pause(()=>{r||this.readyState!==`closed`&&(u(),this.setTransport(n),n.send([{type:`upgrade`}]),this.emitReserved(`upgrade`,n),n=null,this.upgrading=!1,this.flush())})}else{let e=Error(`probe error`);e.transport=n.name,this.emitReserved(`upgradeError`,e)}}))};function a(){r||(r=!0,u(),n.close(),n=null)}let o=e=>{let t=Error(`probe error: `+e);t.transport=n.name,a(),this.emitReserved(`upgradeError`,t)};function s(){o(`transport closed`)}function c(){o(`socket closed`)}function l(e){n&&e.name!==n.name&&a()}let u=()=>{n.removeListener(`open`,i),n.removeListener(`error`,o),n.removeListener(`close`,s),this.off(`close`,c),this.off(`upgrading`,l)};n.once(`open`,i),n.once(`error`,o),n.once(`close`,s),this.once(`close`,c),this.once(`upgrading`,l),this.upgrades.indexOf(`webtransport`)!==-1&&t!==`webtransport`?this.setTimeoutFn(()=>{r||n.open()},200):n.open()}onOpen(){if(this.readyState=`open`,e.priorWebsocketSuccess=this.transport.name===`websocket`,this.emitReserved(`open`),this.flush(),this.readyState===`open`&&this.opts.upgrade){let e=0,t=this.upgrades.length;for(;e<t;e++)this.probe(this.upgrades[e])}}onPacket(e){if(this.readyState===`opening`||this.readyState===`open`||this.readyState===`closing`)switch(this.emitReserved(`packet`,e),this.emitReserved(`heartbeat`),this.resetPingTimeout(),e.type){case`open`:this.onHandshake(JSON.parse(e.data));break;case`ping`:this.sendPacket(`pong`),this.emitReserved(`ping`),this.emitReserved(`pong`);break;case`error`:let t=Error(`server error`);t.code=e.data,this.onError(t);break;case`message`:this.emitReserved(`data`,e.data),this.emitReserved(`message`,e.data);break}}onHandshake(e){this.emitReserved(`handshake`,e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.maxPayload=e.maxPayload,this.onOpen(),this.readyState!==`closed`&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose(`ping timeout`)},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved(`drain`):this.flush()}flush(){if(this.readyState!==`closed`&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){let e=this.getWritablePackets();this.transport.send(e),this.prevBufferLen=e.length,this.emitReserved(`flush`)}}getWritablePackets(){if(!(this.maxPayload&&this.transport.name===`polling`&&this.writeBuffer.length>1))return this.writeBuffer;let e=1;for(let t=0;t<this.writeBuffer.length;t++){let n=this.writeBuffer[t].data;if(n&&(e+=mi(n)),t>0&&e>this.maxPayload)return this.writeBuffer.slice(0,t);e+=2}return this.writeBuffer}write(e,t,n){return this.sendPacket(`message`,e,t,n),this}send(e,t,n){return this.sendPacket(`message`,e,t,n),this}sendPacket(e,t,n,r){if(typeof t==`function`&&(r=t,t=void 0),typeof n==`function`&&(r=n,n=null),this.readyState===`closing`||this.readyState===`closed`)return;n||={},n.compress=!1!==n.compress;let i={type:e,data:t,options:n};this.emitReserved(`packetCreate`,i),this.writeBuffer.push(i),r&&this.once(`flush`,r),this.flush()}close(){let e=()=>{this.onClose(`forced close`),this.transport.close()},t=()=>{this.off(`upgrade`,t),this.off(`upgradeError`,t),e()},n=()=>{this.once(`upgrade`,t),this.once(`upgradeError`,t)};return(this.readyState===`opening`||this.readyState===`open`)&&(this.readyState=`closing`,this.writeBuffer.length?this.once(`drain`,()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}onError(t){e.priorWebsocketSuccess=!1,this.emitReserved(`error`,t),this.onClose(`transport error`,t)}onClose(e,t){(this.readyState===`opening`||this.readyState===`open`||this.readyState===`closing`)&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners(`close`),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener==`function`&&(removeEventListener(`beforeunload`,this.beforeunloadEventListener,!1),removeEventListener(`offline`,this.offlineEventListener,!1)),this.readyState=`closed`,this.id=null,this.emitReserved(`close`,e,t),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(e){let t=[],n=0,r=e.length;for(;n<r;n++)~this.transports.indexOf(e[n])&&t.push(e[n]);return t}};Ki.protocol=4,Ki.protocol;function qi(e,t=``,n){let r=e;n||=typeof location<`u`&&location,e??=n.protocol+`//`+n.host,typeof e==`string`&&(e.charAt(0)===`/`&&(e=e.charAt(1)===`/`?n.protocol+e:n.host+e),/^(https?|wss?):\/\//.test(e)||(e=n===void 0?`https://`+e:n.protocol+`//`+e),r=Ui(e)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port=`80`:/^(http|ws)s$/.test(r.protocol)&&(r.port=`443`)),r.path=r.path||`/`;let i=r.host.indexOf(`:`)===-1?r.host:`[`+r.host+`]`;return r.id=r.protocol+`://`+i+`:`+r.port+t,r.href=r.protocol+`://`+i+(n&&n.port===r.port?``:`:`+r.port),r}var Ji=typeof ArrayBuffer==`function`,Yi=e=>typeof ArrayBuffer.isView==`function`?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer,Xi=Object.prototype.toString,Zi=typeof Blob==`function`||typeof Blob<`u`&&Xi.call(Blob)===`[object BlobConstructor]`,Qi=typeof File==`function`||typeof File<`u`&&Xi.call(File)===`[object FileConstructor]`;function $i(e){return Ji&&(e instanceof ArrayBuffer||Yi(e))||Zi&&e instanceof Blob||Qi&&e instanceof File}function ea(e,t){if(!e||typeof e!=`object`)return!1;if(Array.isArray(e)){for(let t=0,n=e.length;t<n;t++)if(ea(e[t]))return!0;return!1}if($i(e))return!0;if(e.toJSON&&typeof e.toJSON==`function`&&arguments.length===1)return ea(e.toJSON(),!0);for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&ea(e[t]))return!0;return!1}function ta(e){let t=[],n=e.data,r=e;return r.data=na(n,t),r.attachments=t.length,{packet:r,buffers:t}}function na(e,t){if(!e)return e;if($i(e)){let n={_placeholder:!0,num:t.length};return t.push(e),n}else if(Array.isArray(e)){let n=Array(e.length);for(let r=0;r<e.length;r++)n[r]=na(e[r],t);return n}else if(typeof e==`object`&&!(e instanceof Date)){let n={};for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=na(e[r],t));return n}return e}function ra(e,t){return e.data=ia(e.data,t),delete e.attachments,e}function ia(e,t){if(!e)return e;if(e&&e._placeholder===!0){if(typeof e.num==`number`&&e.num>=0&&e.num<t.length)return t[e.num];throw Error(`illegal attachments`)}else if(Array.isArray(e))for(let n=0;n<e.length;n++)e[n]=ia(e[n],t);else if(typeof e==`object`)for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&(e[n]=ia(e[n],t));return e}var aa=p({Decoder:()=>ca,Encoder:()=>sa,PacketType:()=>K,isPacketValid:()=>ha,protocol:()=>5}),oa=[`connect`,`connect_error`,`disconnect`,`disconnecting`,`newListener`,`removeListener`],K;(function(e){e[e.CONNECT=0]=`CONNECT`,e[e.DISCONNECT=1]=`DISCONNECT`,e[e.EVENT=2]=`EVENT`,e[e.ACK=3]=`ACK`,e[e.CONNECT_ERROR=4]=`CONNECT_ERROR`,e[e.BINARY_EVENT=5]=`BINARY_EVENT`,e[e.BINARY_ACK=6]=`BINARY_ACK`})(K||={});var sa=class{constructor(e){this.replacer=e}encode(e){return(e.type===K.EVENT||e.type===K.ACK)&&ea(e)?this.encodeAsBinary({type:e.type===K.EVENT?K.BINARY_EVENT:K.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=``+e.type;return(e.type===K.BINARY_EVENT||e.type===K.BINARY_ACK)&&(t+=e.attachments+`-`),e.nsp&&e.nsp!==`/`&&(t+=e.nsp+`,`),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){let t=ta(e),n=this.encodeAsString(t.packet),r=t.buffers;return r.unshift(n),r}},ca=class e extends W{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e==`function`?{reviver:e}:e)}add(e){let t;if(typeof e==`string`){if(this.reconstructor)throw Error(`got plaintext data when reconstructing a packet`);t=this.decodeString(e);let n=t.type===K.BINARY_EVENT;n||t.type===K.BINARY_ACK?(t.type=n?K.EVENT:K.ACK,this.reconstructor=new la(t),t.attachments===0&&super.emitReserved(`decoded`,t)):super.emitReserved(`decoded`,t)}else if($i(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved(`decoded`,t));else throw Error(`got binary data when not reconstructing a packet`);else throw Error(`Unknown type: `+e)}decodeString(t){let n=0,r={type:Number(t.charAt(0))};if(K[r.type]===void 0)throw Error(`unknown packet type `+r.type);if(r.type===K.BINARY_EVENT||r.type===K.BINARY_ACK){let e=n+1;for(;t.charAt(++n)!==`-`&&n!=t.length;);let i=t.substring(e,n);if(i!=Number(i)||t.charAt(n)!==`-`)throw Error(`Illegal attachments`);let a=Number(i);if(!da(a)||a<0)throw Error(`Illegal attachments`);if(a>this.opts.maxAttachments)throw Error(`too many attachments`);r.attachments=a}if(t.charAt(n+1)===`/`){let e=n+1;for(;++n&&!(t.charAt(n)===`,`||n===t.length););r.nsp=t.substring(e,n)}else r.nsp=`/`;let i=t.charAt(n+1);if(i!==``&&Number(i)==i){let e=n+1;for(;++n;){let e=t.charAt(n);if(e==null||Number(e)!=e){--n;break}if(n===t.length)break}r.id=Number(t.substring(e,n+1))}if(t.charAt(++n)){let i=this.tryParse(t.substr(n));if(e.isPayloadValid(r.type,i))r.data=i;else throw Error(`invalid payload`)}return r}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case K.CONNECT:return pa(t);case K.DISCONNECT:return t===void 0;case K.CONNECT_ERROR:return typeof t==`string`||pa(t);case K.EVENT:case K.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]==`number`||typeof t[0]==`string`&&oa.indexOf(t[0])===-1);case K.ACK:case K.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&=(this.reconstructor.finishedReconstruction(),null)}},la=class{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){let e=ra(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}};function ua(e){return typeof e==`string`}var da=Number.isInteger||function(e){return typeof e==`number`&&isFinite(e)&&Math.floor(e)===e};function fa(e){return e===void 0||da(e)}function pa(e){return Object.prototype.toString.call(e)===`[object Object]`}function ma(e,t){switch(e){case K.CONNECT:return t===void 0||pa(t);case K.DISCONNECT:return t===void 0;case K.EVENT:return Array.isArray(t)&&(typeof t[0]==`number`||typeof t[0]==`string`&&oa.indexOf(t[0])===-1);case K.ACK:return Array.isArray(t);case K.CONNECT_ERROR:return typeof t==`string`||pa(t);default:return!1}}function ha(e){return ua(e.nsp)&&fa(e.id)&&ma(e.type,e.data)}function q(e,t,n){return e.on(t,n),function(){e.off(t,n)}}var ga=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1}),_a=class extends W{constructor(e,t,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;let e=this.io;this.subs=[q(e,`open`,this.onopen.bind(this)),q(e,`packet`,this.onpacket.bind(this)),q(e,`error`,this.onerror.bind(this)),q(e,`close`,this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState===`open`&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift(`message`),this.emit.apply(this,e),this}emit(e,...t){if(ga.hasOwnProperty(e))throw Error(`"`+e.toString()+`" is a reserved event name`);if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;let n={type:K.EVENT,data:t};if(n.options={},n.options.compress=this.flags.compress!==!1,typeof t[t.length-1]==`function`){let e=this.ids++,r=t.pop();this._registerAckCallback(e,r),n.id=e}let r=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!r||!this.connected)||(this.connected?(this.notifyOutgoingListeners(n),this.packet(n)):this.sendBuffer.push(n)),this.flags={},this}_registerAckCallback(e,t){let n=this.flags.timeout??this._opts.ackTimeout;if(n===void 0){this.acks[e]=t;return}let r=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let t=0;t<this.sendBuffer.length;t++)this.sendBuffer[t].id===e&&this.sendBuffer.splice(t,1);t.call(this,Error(`operation has timed out`))},n),i=(...e)=>{this.io.clearTimeoutFn(r),t.apply(this,e)};i.withError=!0,this.acks[e]=i}emitWithAck(e,...t){return new Promise((n,r)=>{let i=(e,t)=>e?r(e):n(t);i.withError=!0,t.push(i),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]==`function`&&(t=e.pop());let n={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((e,...r)=>{if(n===this._queue[0])return e===null?(this._queue.shift(),t&&t(null,...r)):n.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(e)),n.pending=!1,this._drainQueue()}),this._queue.push(n),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;let t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth==`function`?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:K.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved(`connect_error`,e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved(`disconnect`,e,t),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(t=>String(t.id)===e)){let t=this.acks[e];delete this.acks[e],t.withError&&t.call(this,Error(`socket has been disconnected`))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case K.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved(`connect_error`,Error(`It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)`));break;case K.EVENT:case K.BINARY_EVENT:this.onevent(e);break;case K.ACK:case K.BINARY_ACK:this.onack(e);break;case K.DISCONNECT:this.ondisconnect();break;case K.CONNECT_ERROR:this.destroy();let t=Error(e.data.message);t.data=e.data.data,this.emitReserved(`connect_error`,t);break}}onevent(e){let t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){let t=this._anyListeners.slice();for(let n of t)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]==`string`&&(this._lastOffset=e[e.length-1])}ack(e){let t=this,n=!1;return function(...r){n||(n=!0,t.packet({type:K.ACK,id:e,data:r}))}}onack(e){let t=this.acks[e.id];typeof t==`function`&&(delete this.acks[e.id],t.withError&&e.data.unshift(null),t.apply(this,e.data))}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this.emitReserved(`connect`),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose(`io server disconnect`)}destroy(){this.subs&&=(this.subs.forEach(e=>e()),void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:K.DISCONNECT}),this.destroy(),this.connected&&this.onclose(`io client disconnect`),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){let t=this._anyListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){let t=this._anyOutgoingListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){let t=this._anyOutgoingListeners.slice();for(let n of t)n.apply(this,e.data)}}};function va(e){e||={},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}va.prototype.duration=function(){var e=this.ms*this.factor**+ this.attempts++;if(this.jitter){var t=Math.random(),n=Math.floor(t*this.jitter*e);e=Math.floor(t*10)&1?e+n:e-n}return Math.min(e,this.max)|0},va.prototype.reset=function(){this.attempts=0},va.prototype.setMin=function(e){this.ms=e},va.prototype.setMax=function(e){this.max=e},va.prototype.setJitter=function(e){this.jitter=e};var ya=class extends W{constructor(e,t){super(),this.nsps={},this.subs=[],e&&typeof e==`object`&&(t=e,e=void 0),t||={},t.path=t.path||`/socket.io`,this.opts=t,fi(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor(t.randomizationFactor??.5),this.backoff=new va({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState=`closed`,this.uri=e;let n=t.parser||aa;this.encoder=new n.Encoder,this.decoder=new n.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)==null||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)==null||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)==null||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf(`open`))return this;this.engine=new Ki(this.uri,this.opts);let t=this.engine,n=this;this._readyState=`opening`,this.skipReconnect=!1;let r=q(t,`open`,function(){n.onopen(),e&&e()}),i=t=>{this.cleanup(),this._readyState=`closed`,this.emitReserved(`error`,t),e?e(t):this.maybeReconnectOnOpen()},a=q(t,`error`,i);if(!1!==this._timeout){let e=this._timeout,n=this.setTimeoutFn(()=>{r(),i(Error(`timeout`)),t.close()},e);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}return this.subs.push(r),this.subs.push(a),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState=`open`,this.emitReserved(`open`);let e=this.engine;this.subs.push(q(e,`ping`,this.onping.bind(this)),q(e,`data`,this.ondata.bind(this)),q(e,`error`,this.onerror.bind(this)),q(e,`close`,this.onclose.bind(this)),q(this.decoder,`decoded`,this.ondecoded.bind(this)))}onping(){this.emitReserved(`ping`)}ondata(e){try{this.decoder.add(e)}catch(e){this.onclose(`parse error`,e)}}ondecoded(e){Ii(()=>{this.emitReserved(`packet`,e)},this.setTimeoutFn)}onerror(e){this.emitReserved(`error`,e)}socket(e,t){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new _a(this,e,t),this.nsps[e]=n),n}_destroy(e){let t=Object.keys(this.nsps);for(let e of t)if(this.nsps[e].active)return;this._close()}_packet(e){let t=this.encoder.encode(e);for(let n=0;n<t.length;n++)this.engine.write(t[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose(`forced close`),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(e,t){this.cleanup(),this.backoff.reset(),this._readyState=`closed`,this.emitReserved(`close`,e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;let e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved(`reconnect_failed`),this._reconnecting=!1;else{let t=this.backoff.duration();this._reconnecting=!0;let n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved(`reconnect_attempt`,e.backoff.attempts),!e.skipReconnect&&e.open(t=>{t?(e._reconnecting=!1,e.reconnect(),this.emitReserved(`reconnect_error`,t)):e.onreconnect()}))},t);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){let e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved(`reconnect`,e)}},ba={};function xa(e,t){typeof e==`object`&&(t=e,e=void 0),t||={};let n=qi(e,t.path||`/socket.io`),r=n.source,i=n.id,a=n.path,o=ba[i]&&a in ba[i].nsps,s=t.forceNew||t[`force new connection`]||!1===t.multiplex||o,c;return s?c=new ya(r,t):(ba[i]||(ba[i]=new ya(r,t)),c=ba[i]),n.query&&!t.query&&(t.query=n.queryKey),c.socket(n.path,t)}Object.assign(xa,{Manager:ya,Socket:_a,io:xa,connect:xa});var Sa=class{get name(){return this.constructor.name}data;constructor(){}},Ca=class extends Sa{constructor(){super(),this.data={socketId:-1}}},wa=class extends Sa{constructor(){super()}},Ta=class extends Ca{constructor(){super()}},Ea=class extends wa{constructor(e){super(),e===void 0?this.data={guid:Na.createNew()}:this.data={guid:e}}},Da=class extends Ca{constructor(){super()}},Oa=class extends wa{constructor(e){super(),e===void 0?this.data={guid:Na.createNew()}:this.data={guid:e}}},ka=class extends Ca{constructor(){super()}},Aa=class extends wa{constructor(){super()}},ja=class extends Ca{constructor(e,t){super(),e!==void 0&&t!==void 0?this.data={x:e,y:t}:this.data={x:0,y:0}}},Ma=class extends wa{constructor(e,t,n){super(),t!==void 0&&n!==void 0?this.data={socketId:e,x:t,y:n}:this.data={socketId:`-1`,x:-1,y:-1}}},Na=class e{static chars=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`;static LengthProduction=22;static LengthDevelopment=8;static createNew(t=e.LengthDevelopment){let n=``,r=new Date().getTime().toString(36);for(n+=r;n.length<t;)n+=this.chars.charAt(Math.floor(Math.random()*this.chars.length));return n.slice(0,t)}},Pa=class{get isInitialized(){return this._isInitialized}_socket;_isInitialized=!1;isDebug=!0;constructor(){}async initializeAsync(){}requireIsInitialized(){if(!this.isInitialized)throw Error(`requireIsInitialized.`)}consoleLog(e){this.isDebug&&console.log(`[${this.constructor.name}] ${e}`)}consoleLogError(e){console.error(`[${this.constructor.name}] ${e}`)}emitPacket(e){this._socket.emit(e.constructor.name,JSON.stringify(e))}onPacket(e,t){this.consoleLog(`onPacket() Init ${e.name}`),this._socket.on(e.name,n=>{this.consoleLog(`onPacket() Call ${e.name}`);let r=JSON.parse(n);console.log(r),t(r)})}},Fa=class extends Pa{get targetLatencyMS(){return this._badConnectionSimulator.targetLatencyMS}get targetPacketLoss(){return this._badConnectionSimulator.targetPacketLoss}nextTargetLatency(){this._badConnectionSimulator.nextTargetLatency()}nextTargetPacketLoss(){this._badConnectionSimulator.nextTargetPacketLoss()}get isConnected(){return this._isConnected}get localSocketId(){return this._socket?this._socket.id:`-1`}get isGameJoined(){return this._hasJoinedGame}get isSessionStarted(){return this._isSessionStarted}_hasJoinedGame=!1;_isSessionStarted=!1;_isConnected=!1;_badConnectionSimulator=new Ir;constructor(){super()}async initializeAsync(){await super.initializeAsync(),!this.isInitialized&&(this._isInitialized=!0,this._socket=xa(`http://localhost:3001`),this._socket.on(`connect`,()=>{this.consoleLog(`Client connected to server`),this._isConnected=!0,this._socket;let e=new Ta;this.emitRequest(e)}),this.onResponse(Ea,e=>{this._isSessionStarted=!0,this._hasJoinedGame=!1,console.log(`SessionStartResponse: `+e.data);let t=new Da;this.emitRequest(t)}),this.onResponse(Oa,e=>{console.log(`GameCreateResponse: `+e.data);let t=new ka;this.emitRequest(t)}),this.onResponse(Aa,e=>{this._hasJoinedGame=!0;let t=new ja(11,22);this.emitRequest(t)}),this.onResponse(Ma,e=>{}),this._socket.on(`disconnect`,()=>{this._isSessionStarted=!1,this._hasJoinedGame=!1,this._isConnected=!1,this.consoleLog(`Client disconnected from server`)}))}async emitRequest(e){e instanceof Ca&&(this._badConnectionSimulator.wasPacketLost()||(await this._badConnectionSimulator.simulateLatencyAsync(),e.data.socketId=this._socket.id,this.emitPacket(e)))}onResponse(e,t){this.onPacket(e,t)}},J=class extends or{get targetLatencyMS(){return this._multiplayerSocketClient.targetLatencyMS}get targetPacketLoss(){return this._multiplayerSocketClient.targetPacketLoss}get isConnected(){return this._multiplayerSocketClient.isConnected}get localSocketId(){return this._multiplayerSocketClient.localSocketId}get isGameJoined(){return this._multiplayerSocketClient.isGameJoined}get isSessionStarted(){return this._multiplayerSocketClient.isSessionStarted}_multiplayerSocketClient;_isDebug=!0;constructor(e){super(e),this._multiplayerSocketClient=new Fa}async initializeAsync(){this.isInitialized||(await this._multiplayerSocketClient.initializeAsync(),this._isInitialized=!0)}nextTargetLatency(){this._multiplayerSocketClient.nextTargetLatency()}nextTargetPacketLoss(){this._multiplayerSocketClient.nextTargetPacketLoss()}emitGamePacketRequest(e){this.emitRequest(e)}emitRequest(e){if(!this._multiplayerSocketClient.isGameJoined){this._multiplayerSocketClient.isSessionStarted&&console.log(`${this.constructor.name}.emitRequest() : Not connected to game server. Request:`,e);return}this._multiplayerSocketClient.emitRequest(e)}onResponse(e,t){this._multiplayerSocketClient.onResponse(e,t)}onTick(e){}},Ia=class extends or{_tilemap;constructor(e){super(e)}async initializeAsync(){this.isInitialized||(this._isInitialized=!0)}setTilemap(e){this._tilemap=e}isCollision(e,t,n,r){if(!this._tilemap)throw Error(`TilemapCollisionSystem: Tilemap must be set first`);return this._tilemap.isCollision(e,t,n,r)}onTick(e){}},La=class{_items=new Map;hasItem(e){return this._items.has(e)}addItem(e,t){if(this._items.has(e))throw Error(`Item with key ${typeof e==`function`?e.name:e} is already added.`);this._items.set(e,t)}getItem(e){let t=this._items.get(e);if(!t)throw Error(`Item with key ${typeof e==`function`?e.name:e} does not exist.`);return t}removeItem(e){if(!this._items.delete(e))throw Error(`Item with key ${typeof e==`function`?e.name:e} does not exist.`)}},Ra=class{get isInitialized(){return this._isInitialized}set App(e){this._app=e}_locator=new La;_isInitialized=!1;_app;constructor(){}async initializeAsync(){if(!this.isInitialized){if(!this._app)throw Error(`SystemsDefault: App must be set first`);this._isInitialized=!0}}requireIsInitialized(){if(!this.isInitialized)throw Error(`Systems are not initialized.`)}hasItem(e){return this._locator.hasItem(e)}addItem(e,t){this._locator.addItem(e,t)}getItem(e){return this._locator.getItem(e)}removeItem(e){this._locator.removeItem(e)}onTick(e){console.log(`Method must be overriden`)}},za=class extends Ra{systems;constructor(){super()}async initializeAsync(){await super.initializeAsync(),this._locator.addItem(sr,new sr(this._app)),this._locator.addItem(Ia,new Ia(this._app)),this._locator.addItem(V,new V(this._app)),this._locator.addItem(B,new B(this._app)),this._locator.addItem(J,new J(this._app)),this._locator.addItem(H,new H(this._app)),this.systems=[this._locator.getItem(sr),this._locator.getItem(Ia),this._locator.getItem(V),this._locator.getItem(B),this._locator.getItem(J),this._locator.getItem(H)],await Promise.all(this.systems.map(e=>e.initializeAsync()))}onTick(e){this.systems.forEach(t=>t.onTick(e))}},Ba={canvasId:`pixi-application-canvas`,widthInitial:1920,heightInitial:1080,minFPS:1,maxFPS:240,backgroundColor:1087931,data:{}},Va=class e extends Se.EventEmitter{static EVENT_INITIALIZE_COMPLETE=`initializeComplete`;static EVENT_INITIALIZE_ERROR=`initializeError`;static EVENT_RESIZE=`resize`;get isInitialized(){return this._isInitialized}get isFullscreen(){return this._isFullscreen}set isFullscreen(e){this._isFullscreen=e;var t=document.getElementById(this.app.canvas.id);this._isFullscreen?t?.requestFullscreen&&t?.requestFullscreen():document.fullscreenEnabled&&document.exitFullscreen()}reload(){document.location.reload()}get systemManager(){return this._systemManager}get configuration(){return this._configuration}app;viewport;_configuration;_canvasId;_isInitialized=!1;_systemManager;_isFullscreen=!1;constructor(e){super(),this.app=new Pe,this._configuration={...Ba,...e},this._configuration.systemManager?this._systemManager=this._configuration.systemManager:this._systemManager=new za,this._canvasId=this._configuration.canvasId,this.setMaxListeners(100)}async initializeAsync(){if(!this._isInitialized){this._isInitialized=!0,this._systemManager.App=this,await this._systemManager.initializeAsync();try{await this.app.init({canvas:document.getElementById(this._canvasId),backgroundColor:this.configuration.backgroundColor,width:this.configuration.widthInitial,height:this.configuration.heightInitial,resizeTo:window,antialias:!0,backgroundAlpha:1,powerPreference:`high-performance`,eventMode:`passive`,eventFeatures:{move:!0,globalMove:!0,click:!0,wheel:!1}}),this.app.ticker.minFPS=this.configuration.minFPS,this.app.ticker.maxFPS=this.configuration.maxFPS;let t=`WebGL`;navigator.gpu&&(t=`(WebGL, WebGPU)`),console.log(`PIXI.Application.initializeAsync() success! PixiJS v${ye} ...\nRendering Supported : ${t}. Rendering Active : ${this.GetRendererTypeAsString(this.app.renderer.type)}.`),this.viewport=new ir({screenWidth:this.app.screen.width,screenHeight:this.app.screen.height,worldWidth:3e3,worldHeight:3e3,events:this.app.renderer.events}),this.viewport.center=this.getScreenCenterpoint(),this.app.ticker.add(e=>{this.onTick(e)}),this.emit(e.EVENT_INITIALIZE_COMPLETE,this),this.setupResizeHandling(),this.addToStage(this.viewport),this.viewport.label=`Viewport`}catch(t){console.log(`PIXI.Application.initializeAsync() failed! PixiJS v${ye} with ${this.GetRendererTypeAsString(this.app.renderer.type)} `),this.emit(e.EVENT_INITIALIZE_ERROR,t)}}}requireIsInitialized(){if(!this.isInitialized)throw Error(`requireIsInitialized.`)}GetRendererTypeAsString(e){let t=`Unknown`;switch(e){case c.WEBGL:t=`WebGL`;break;case c.WEBGPU:t=`WebGPU`;break;case c.BOTH:t=`BOTH`;break;default:t=`Unknown`;break}return t}addToViewport(e){this.requireIsInitialized(),this.viewport.addChild(e),e instanceof F&&e.onAdded(),this.resize()}removeFromViewport(e){this.requireIsInitialized(),this.viewport.removeChild(e),e instanceof F&&e.onRemoved(),this.resize()}addToStage(e,t){this.requireIsInitialized(),t==null?this.app.stage.addChild(e):t.addChild(e),e instanceof F&&e.onAdded(),this.resize()}removeFromStage(e,t){this.requireIsInitialized(),t==null?this.app.stage.removeChild(e):t.removeChild(e),e instanceof F&&e.onRemoved(),this.resize()}resize=()=>{this.emit(e.EVENT_RESIZE,this)};setupResizeHandling(){let e=()=>{setTimeout(this.resize,100)};window.addEventListener(`resize`,this.resize),window.addEventListener(`resize`,e),window.addEventListener(`orientationchange`,this.resize),window.addEventListener(`orientationchange`,e),this.resize()}getScreenScaleCurrent(){return new l(this.app.screen.width/this.configuration.widthInitial,this.app.screen.height/this.configuration.heightInitial)}getScreenCenterpoint(){return new l(this.app.screen.width/2,this.app.screen.height/2)}onTick(e){this.viewport.update(e.deltaMS),this._systemManager.onTick(e)}},Ha=class{collisionMap;_app;_Tilemap;constructor(e,t){this._app=e,this._Tilemap=t}async initializeAsync(){this.collisionMap=this.createCollisionMap(this._Tilemap.tilemapData)}createCollisionMap(e){if(!e.layers||!e.tilesets)throw Error(`Invalid tilemapData: layers or tilesets are missing`);let t=e.layers,n=e.tilesets,r=Array.from({length:e.height},()=>Array(e.width).fill(!1)),i={};return n.forEach(e=>{e.tiles&&e.tiles.forEach(t=>{t.properties&&t.properties.forEach(n=>{n.name===`IsCollision`&&(i[e.firstgid+t.id]=n.value)})})}),t.forEach(e=>{if(e.type===`tilelayer`&&e.data)for(let t=0;t<e.height;t++)for(let n=0;n<e.width;n++)i[e.data[t*e.width+n]]&&(r[t][n]=!0)}),r}isCollision(e,t,n,r){let i=new l(e,t),a=new l;this._app.app.stage.toGlobal(i,a);let o=this._Tilemap.tilemapData.tilewidth,s=this._Tilemap.tilemapData.tileheight,c=Math.floor((a.x-this._Tilemap.x)/o),u=Math.ceil((a.x-this._Tilemap.x+n)/o),d=Math.floor((a.y-this._Tilemap.y)/s),f=Math.ceil((a.y-this._Tilemap.y+r)/s);Math.floor(i.x/o),Math.floor(i.y/s),Math.floor((a.x-this._Tilemap.x)/o),Math.floor((a.y-this._Tilemap.y)/s);let p=new l;this._Tilemap.toGlobal(new l(0,0),p);for(let e=d;e<f;e++)for(let t=c;t<u;t++)if(e>=0&&e<this.collisionMap.length&&t>=0&&t<this.collisionMap[0].length&&this.collisionMap[e][t])return!0;return!1}},Ua=function(e){return e.TileLayer=`tilelayer`,e.ObjectGroup=`objectgroup`,e}({}),Wa=class e extends F{get tilemapData(){return this._tilemapData}_tilemapDataUrl;_TilemapItemFactory;_TilemapCollisionSystem;_tilemapData;constructor(t,n,r){super(t,{canCollisionCheck:!1,isTickable:!1,isResizable:!1}),this._tilemapDataUrl=n,this._TilemapItemFactory=r,this._TilemapCollisionSystem=new Ha(this._app,this),this.isRenderGroup=!0,this.interactive=!1,this.interactiveChildren=!1,this.label=e.name,this.position.set(0,0),this.scale.set(1),this.isRenderGroup=!0}get isInitialized(){return this._isInitialized}async initializeAsync(){if(this.isInitialized)return;if(await super.initializeAsync(),this._isInitialized=!0,P.stringIsNullOrEmpty(this._tilemapDataUrl))throw Error(`Tilemap.initializeAsync() file missing error. tilemapDataUrl = "${this._tilemapDataUrl}"`);if(!this._tilemapDataUrl.endsWith(`.tmj`))throw Error(`Tilemap.initializeAsync() file extension error. tilemapDataUrl = "${this._tilemapDataUrl}"`);let e;try{e=await fetch(this._tilemapDataUrl)}catch{throw Error(`Tilemap.initializeAsync() fetch error. tilemapDataUrl = "${this._tilemapDataUrl}"`)}try{this._tilemapData=await e.json()}catch{throw Error(`Tilemap.initializeAsync() json error. tilemapDataUrl = "${this._tilemapDataUrl}"`)}let t=this._tilemapData.tilesets.map(e=>{let t=e.image.replace(`../`,`assets/`);return O.load(t).then(()=>({...e,texture:n.from(t)}))}),r=await Promise.all(t);for(let e of this._tilemapData.layers)e.type===Ua.TileLayer?await this.processTileLayer(e,r):e.type===Ua.ObjectGroup&&e.objects&&await this.processObjectLayer(e,r);this._TilemapCollisionSystem.initializeAsync()}requireIsInitialized(){throw Error(`Method not implemented.`)}async processTileLayer(e,t){for(let r=0;r<e.height;r++)for(let i=0;i<e.width;i++){let o=e.data?e.data[r*e.width+i]:0;if(o>0){let e=this.getTilesetForTile(o,t);if(e){let t=o-e.firstgid,s=new a(t%e.columns*e.tilewidth,Math.floor(t/e.columns)*e.tileheight,e.tilewidth,e.tileheight),c=new n({source:e.texture.source,frame:s}),l={x:i*e.tilewidth,y:r*e.tileheight,width:e.tilewidth,height:e.tileheight,row:r,column:i,texture:c,layerType:Ua.TileLayer,type:this.getTileType(e,t)||``},u=await this._TilemapItemFactory.createTilemapItem(this,l);u.label=`Tile (${r.toString().padStart(2,`0`)},${i.toString().padStart(2,`0`)})`,u.x=l.x,u.y=l.y,this.addChild(u)}}}}async processObjectLayer(e,t){for(let r of e.objects){let e=this.getTilesetForTile(r.gid,t);if(e){let t=r.gid-e.firstgid,i=new a(t%e.columns*e.tilewidth,Math.floor(t/e.columns)*e.tileheight,e.tilewidth,e.tileheight),o=new n({source:e.texture.source,frame:i}),s=``,c=r.type,l=this.getTileType(e,t)?.toString();P.stringIsNullOrEmpty(c)?l!=null&&!P.stringIsNullOrEmpty(l)&&(s=l):s=c;let u={x:r.x,y:r.y-e.tileheight,width:e.tilewidth,height:e.tileheight,row:-1,column:-1,texture:o,layerType:Ua.ObjectGroup,type:s},d=await this._TilemapItemFactory.createTilemapItem(this,u);d.label=`Object (${r.id})`,d.x=u.x,d.y=u.y,this.addChild(d)}}}isCollision(e,t,n,r){return this._TilemapCollisionSystem.isCollision(e,t,n,r)}async onAdded(){await this.initializeAsync()}getTilesetForTile(e,t){for(let n=t.length-1;n>=0;n--)if(e>=t[n].firstgid)return t[n];return null}onRemoved(){for(;this.children.length>0;){let e=this.removeChildAt(0);e instanceof r&&e.destroy({children:!0,texture:!0})}}onResize(e){}onTick(e){}getTileType(e,t){if(e.tiles)return e.tiles.find(e=>e.id===t)?.type}},Ga={textStyle:new me,canCollisionCheck:!1,isTickable:!0,isResizable:!0},Ka=class e extends F{get configuration(){return this._configuration}get textString(){return this._text.text}set textString(e){this._text.text=e,this.onResize(this._app)}_text;constructor(t,n,r){super(t,{...Ga,...r}),this._text=new dn({style:this.configuration.textStyle,resolution:2}),this.addChild(this._text),this.initializeAsync(),this.label=e.name,this._text.text=n}async initializeAsync(){await super.initializeAsync()}onTick(e){super.onTick(e)}},qa=class extends Ka{onResize(e){this.x=e.configuration.data.screenUIMarginX,this.y=e.configuration.data.screenUIMarginY,this._text.style.fontSize=15+7/e.app.renderer.resolution}},Ja=class extends Ka{onResize(e){this.x=e.app.screen.width-this.width-e.configuration.data.screenUIMarginX,this.y=e.configuration.data.screenUIMarginY,this._text.style.fontSize=15+7/e.app.renderer.resolution}},Y=`in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,X=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}`,Ya=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uGamma;
uniform float uContrast;
uniform float uSaturation;
uniform float uBrightness;
uniform vec4 uColor;

void main()
{
    vec4 c = texture(uTexture, vTextureCoord);

    if (c.a > 0.0) {
        c.rgb /= c.a;

        vec3 rgb = pow(c.rgb, vec3(1. / uGamma));
        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, uSaturation), uContrast);
        rgb.r *= uColor.r;
        rgb.g *= uColor.g;
        rgb.b *= uColor.b;
        c.rgb = rgb * uBrightness;

        c.rgb *= c.a;
    }

    finalColor = c * uColor.a;
}
`,Xa=`struct AdjustmentUniforms {
  uGamma: f32,
  uContrast: f32,
  uSaturation: f32,
  uBrightness: f32,
  uColor: vec4<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> adjustmentUniforms : AdjustmentUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  var sample = textureSample(uTexture, uSampler, uv);
  let color = adjustmentUniforms.uColor;

  if (sample.a > 0.0) 
  {
    sample = vec4<f32>(sample.rgb / sample.a, sample.a);
    var rgb: vec3<f32> = pow(sample.rgb, vec3<f32>(1. / adjustmentUniforms.uGamma));
    rgb = mix(vec3<f32>(.5), mix(vec3<f32>(dot(vec3<f32>(.2125, .7154, .0721), rgb)), rgb, adjustmentUniforms.uSaturation), adjustmentUniforms.uContrast);
    rgb.r *= color.r;
    rgb.g *= color.g;
    rgb.b *= color.b;
    sample = vec4<f32>(rgb.rgb * adjustmentUniforms.uBrightness, sample.a);
    sample = vec4<f32>(sample.rgb * sample.a, sample.a);
  }

  return sample * color.a;
}`,Za=Object.defineProperty,Qa=(e,t,n)=>t in e?Za(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,$a=(e,t,n)=>(Qa(e,typeof t==`symbol`?t:t+``,n),n);$a(class e extends D{constructor(t){t={...e.DEFAULT_OPTIONS,...t};let n=g.from({vertex:{source:X,entryPoint:`mainVertex`},fragment:{source:Xa,entryPoint:`mainFragment`}}),r=m.from({vertex:Y,fragment:Ya,name:`adjustment-filter`});super({gpuProgram:n,glProgram:r,resources:{adjustmentUniforms:{uGamma:{value:t.gamma,type:`f32`},uContrast:{value:t.contrast,type:`f32`},uSaturation:{value:t.saturation,type:`f32`},uBrightness:{value:t.brightness,type:`f32`},uColor:{value:[t.red,t.green,t.blue,t.alpha],type:`vec4<f32>`}}}}),$a(this,`uniforms`),this.uniforms=this.resources.adjustmentUniforms.uniforms}get gamma(){return this.uniforms.uGamma}set gamma(e){this.uniforms.uGamma=e}get contrast(){return this.uniforms.uContrast}set contrast(e){this.uniforms.uContrast=e}get saturation(){return this.uniforms.uSaturation}set saturation(e){this.uniforms.uSaturation=e}get brightness(){return this.uniforms.uBrightness}set brightness(e){this.uniforms.uBrightness=e}get red(){return this.uniforms.uColor[0]}set red(e){this.uniforms.uColor[0]=e}get green(){return this.uniforms.uColor[1]}set green(e){this.uniforms.uColor[1]=e}get blue(){return this.uniforms.uColor[2]}set blue(e){this.uniforms.uColor[2]=e}get alpha(){return this.uniforms.uColor[3]}set alpha(e){this.uniforms.uColor[3]=e}},`DEFAULT_OPTIONS`,{gamma:1,contrast:1,saturation:1,brightness:1,red:1,green:1,blue:1,alpha:1});var eo=`
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uOffset;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture(uTexture, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample top right pixel
    color += texture(uTexture, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample bottom right pixel
    color += texture(uTexture, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));

    // Sample bottom left pixel
    color += texture(uTexture, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));

    // Average
    color *= 0.25;

    finalColor = color;
}`,to=`struct KawaseBlurUniforms {
  uOffset:vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> kawaseBlurUniforms : KawaseBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOffset = kawaseBlurUniforms.uOffset;
  var color: vec4<f32> = vec4<f32>(0.0);

  // Sample top left pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x - uOffset.x, uv.y + uOffset.y));
  // Sample top right pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x + uOffset.x, uv.y + uOffset.y));
  // Sample bottom right pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x + uOffset.x, uv.y - uOffset.y));
  // Sample bottom left pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x - uOffset.x, uv.y - uOffset.y));
  // Average
  color *= 0.25;

  return color;
}`,no=`
precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uOffset;

uniform vec4 uInputClamp;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample top right pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample bottom right pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample bottom left pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Average
    color *= 0.25;

    finalColor = color;
}
`,ro=`struct KawaseBlurUniforms {
  uOffset:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> kawaseBlurUniforms : KawaseBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOffset = kawaseBlurUniforms.uOffset;
  var color: vec4<f32> = vec4(0.0);

  // Sample top left pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x - uOffset.x, uv.y + uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample top right pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x + uOffset.x, uv.y + uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample bottom right pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x + uOffset.x, uv.y - uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample bottom left pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x - uOffset.x, uv.y - uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Average
  color *= 0.25;
    
  return color;
}`,io=Object.defineProperty,ao=(e,t,n)=>t in e?io(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,oo=(e,t,n)=>(ao(e,typeof t==`symbol`?t:t+``,n),n),so=class e extends D{constructor(...t){let n=t[0]??{};(typeof n==`number`||Array.isArray(n))&&(f(`6.0.0`,`KawaseBlurFilter constructor params are now options object. See params: { strength, quality, clamp, pixelSize }`),n={strength:n},t[1]!==void 0&&(n.quality=t[1]),t[2]!==void 0&&(n.clamp=t[2])),n={...e.DEFAULT_OPTIONS,...n};let r=g.from({vertex:{source:X,entryPoint:`mainVertex`},fragment:{source:n?.clamp?ro:to,entryPoint:`mainFragment`}}),i=m.from({vertex:Y,fragment:n?.clamp?no:eo,name:`kawase-blur-filter`});super({gpuProgram:r,glProgram:i,resources:{kawaseBlurUniforms:{uOffset:{value:new Float32Array(2),type:`vec2<f32>`}}}}),oo(this,`uniforms`),oo(this,`_pixelSize`,{x:0,y:0}),oo(this,`_clamp`),oo(this,`_kernels`,[]),oo(this,`_blur`),oo(this,`_quality`),this.uniforms=this.resources.kawaseBlurUniforms.uniforms,this.pixelSize=n.pixelSize??{x:1,y:1},Array.isArray(n.strength)?this.kernels=n.strength:typeof n.strength==`number`&&(this._blur=n.strength,this.quality=n.quality??3),this._clamp=!!n.clamp}apply(e,t,n,r){let i=this.pixelSizeX/t.source.width,a=this.pixelSizeY/t.source.height,o;if(this._quality===1||this._blur===0)o=this._kernels[0]+.5,this.uniforms.uOffset[0]=o*i,this.uniforms.uOffset[1]=o*a,e.applyFilter(this,t,n,r);else{let c=s.getSameSizeTexture(t),l=t,u=c,d,f=this._quality-1;for(let t=0;t<f;t++)o=this._kernels[t]+.5,this.uniforms.uOffset[0]=o*i,this.uniforms.uOffset[1]=o*a,e.applyFilter(this,l,u,!0),d=l,l=u,u=d;o=this._kernels[f]+.5,this.uniforms.uOffset[0]=o*i,this.uniforms.uOffset[1]=o*a,e.applyFilter(this,l,n,r),s.returnTexture(c)}}get strength(){return this._blur}set strength(e){this._blur=e,this._generateKernels()}get quality(){return this._quality}set quality(e){this._quality=Math.max(1,Math.round(e)),this._generateKernels()}get kernels(){return this._kernels}set kernels(e){Array.isArray(e)&&e.length>0?(this._kernels=e,this._quality=e.length,this._blur=Math.max(...e)):(this._kernels=[0],this._quality=1)}get pixelSize(){return this._pixelSize}set pixelSize(e){if(typeof e==`number`){this.pixelSizeX=this.pixelSizeY=e;return}if(Array.isArray(e)){this.pixelSizeX=e[0],this.pixelSizeY=e[1];return}this._pixelSize=e}get pixelSizeX(){return this.pixelSize.x}set pixelSizeX(e){this.pixelSize.x=e}get pixelSizeY(){return this.pixelSize.y}set pixelSizeY(e){this.pixelSize.y=e}get clamp(){return this._clamp}_updatePadding(){this.padding=Math.ceil(this._kernels.reduce((e,t)=>e+t+.5,0))}_generateKernels(){let e=this._blur,t=this._quality,n=[e];if(e>0){let r=e,i=e/t;for(let e=1;e<t;e++)r-=i,n.push(r)}this._kernels=n,this._updatePadding()}};oo(so,`DEFAULT_OPTIONS`,{strength:4,quality:3,clamp:!1,pixelSize:{x:1,y:1}});var co=so,lo=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform float uBloomScale;
uniform float uBrightness;

void main() {
    vec4 color = texture(uTexture, vTextureCoord);
    color.rgb *= uBrightness;
    vec4 bloomColor = vec4(texture(uMapTexture, vTextureCoord).rgb, 0.0);
    bloomColor.rgb *= uBloomScale;
    finalColor = color + bloomColor;
}
`,uo=`struct AdvancedBloomUniforms {
  uBloomScale: f32,
  uBrightness: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> advancedBloomUniforms : AdvancedBloomUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color = textureSample(uTexture, uSampler, uv);
  color = vec4<f32>(color.rgb * advancedBloomUniforms.uBrightness, color.a);

  var bloomColor = vec4<f32>(textureSample(uMapTexture, uSampler, uv).rgb, 0.0);
  bloomColor = vec4<f32>(bloomColor.rgb * advancedBloomUniforms.uBloomScale, bloomColor.a);
  
  return color + bloomColor;
}
`,fo=`
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uThreshold;

void main() {
    vec4 color = texture(uTexture, vTextureCoord);

    // A simple & fast algorithm for getting brightness.
    // It's inaccuracy , but good enought for this feature.
    float _max = max(max(color.r, color.g), color.b);
    float _min = min(min(color.r, color.g), color.b);
    float brightness = (_max + _min) * 0.5;

    if(brightness > uThreshold) {
        finalColor = color;
    } else {
        finalColor = vec4(0.0, 0.0, 0.0, 0.0);
    }
}
`,po=`struct ExtractBrightnessUniforms {
  uThreshold: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> extractBrightnessUniforms : ExtractBrightnessUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  // A simple & fast algorithm for getting brightness.
  // It's inaccurate, but good enough for this feature.
  let max: f32 = max(max(color.r, color.g), color.b);
  let min: f32 = min(min(color.r, color.g), color.b);
  let brightness: f32 = (max + min) * 0.5;

  return select(vec4<f32>(0.), color, brightness > extractBrightnessUniforms.uThreshold);
}
`,mo=Object.defineProperty,ho=(e,t,n)=>t in e?mo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,go=(e,t,n)=>(ho(e,typeof t==`symbol`?t:t+``,n),n),_o=class e extends D{constructor(t){t={...e.DEFAULT_OPTIONS,...t};let n=g.from({vertex:{source:X,entryPoint:`mainVertex`},fragment:{source:po,entryPoint:`mainFragment`}}),r=m.from({vertex:Y,fragment:fo,name:`extract-brightness-filter`});super({gpuProgram:n,glProgram:r,resources:{extractBrightnessUniforms:{uThreshold:{value:t.threshold,type:`f32`}}}}),go(this,`uniforms`),this.uniforms=this.resources.extractBrightnessUniforms.uniforms}get threshold(){return this.uniforms.uThreshold}set threshold(e){this.uniforms.uThreshold=e}};go(_o,`DEFAULT_OPTIONS`,{threshold:.5});var vo=_o,yo=Object.defineProperty,bo=(e,t,n)=>t in e?yo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,xo=(e,t,n)=>(bo(e,typeof t==`symbol`?t:t+``,n),n);xo(class e extends D{constructor(t){t={...e.DEFAULT_OPTIONS,...t};let r=g.from({vertex:{source:X,entryPoint:`mainVertex`},fragment:{source:uo,entryPoint:`mainFragment`}}),i=m.from({vertex:Y,fragment:lo,name:`advanced-bloom-filter`});super({gpuProgram:r,glProgram:i,resources:{advancedBloomUniforms:{uBloomScale:{value:t.bloomScale,type:`f32`},uBrightness:{value:t.brightness,type:`f32`}},uMapTexture:n.WHITE}}),xo(this,`uniforms`),xo(this,`bloomScale`,1),xo(this,`brightness`,1),xo(this,`_extractFilter`),xo(this,`_blurFilter`),this.uniforms=this.resources.advancedBloomUniforms.uniforms,this._extractFilter=new vo({threshold:t.threshold}),this._blurFilter=new co({strength:t.kernels??t.blur,quality:t.kernels?void 0:t.quality}),Object.assign(this,t)}apply(e,t,n,r){let i=s.getSameSizeTexture(t);this._extractFilter.apply(e,t,i,!0);let a=s.getSameSizeTexture(t);this._blurFilter.apply(e,i,a,!0),this.uniforms.uBloomScale=this.bloomScale,this.uniforms.uBrightness=this.brightness,this.resources.uMapTexture=a.source,e.applyFilter(this,t,n,r),s.returnTexture(a),s.returnTexture(i)}get threshold(){return this._extractFilter.threshold}set threshold(e){this._extractFilter.threshold=e}get kernels(){return this._blurFilter.kernels}set kernels(e){this._blurFilter.kernels=e}get blur(){return this._blurFilter.strength}set blur(e){this._blurFilter.strength=e}get quality(){return this._blurFilter.quality}set quality(e){this._blurFilter.quality=e}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(e){typeof e==`number`&&(e={x:e,y:e}),Array.isArray(e)&&(e={x:e[0],y:e[1]}),this._blurFilter.pixelSize=e}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(e){this._blurFilter.pixelSizeX=e}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(e){this._blurFilter.pixelSizeY=e}},`DEFAULT_OPTIONS`,{threshold:.5,bloomScale:1,brightness:1,blur:8,quality:4,pixelSize:{x:1,y:1}});var So=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uSize;
uniform vec3 uColor;
uniform float uReplaceColor;

uniform vec4 uInputSize;

vec2 mapCoord( vec2 coord )
{
    coord *= uInputSize.xy;
    coord += uInputSize.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= uInputSize.zw;
    coord /= uInputSize.xy;

    return coord;
}

vec2 pixelate(vec2 coord, vec2 size)
{
    return floor(coord / size) * size;
}

vec2 getMod(vec2 coord, vec2 size)
{
    return mod(coord, size) / size;
}

float character(float n, vec2 p)
{
    p = floor(p*vec2(4.0, 4.0) + 2.5);

    if (clamp(p.x, 0.0, 4.0) == p.x)
    {
        if (clamp(p.y, 0.0, 4.0) == p.y)
        {
            if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;
        }
    }
    return 0.0;
}

void main()
{
    vec2 coord = mapCoord(vTextureCoord);

    // get the grid position
    vec2 pixCoord = pixelate(coord, vec2(uSize));
    pixCoord = unmapCoord(pixCoord);

    // sample the color at grid position
    vec4 color = texture(uTexture, pixCoord);

    // brightness of the color as it's perceived by the human eye
    float gray = 0.3 * color.r + 0.59 * color.g + 0.11 * color.b;

    // determine the character to use
    float n =  65536.0;             // .
    if (gray > 0.2) n = 65600.0;    // :
    if (gray > 0.3) n = 332772.0;   // *
    if (gray > 0.4) n = 15255086.0; // o
    if (gray > 0.5) n = 23385164.0; // &
    if (gray > 0.6) n = 15252014.0; // 8
    if (gray > 0.7) n = 13199452.0; // @
    if (gray > 0.8) n = 11512810.0; // #

    // get the mod..
    vec2 modd = getMod(coord, vec2(uSize));

    finalColor = (uReplaceColor > 0.5 ? vec4(uColor, 1.) : color) * character( n, vec2(-1.0) + modd * 2.0);
}
`,Co=`struct AsciiUniforms {
    uSize: f32,
    uColor: vec3<f32>,
    uReplaceColor: f32,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> asciiUniforms : AsciiUniforms;

@fragment
fn mainFragment(
    @location(0) uv: vec2<f32>,
    @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let pixelSize: f32 = asciiUniforms.uSize;
    let coord: vec2<f32> = mapCoord(uv);

    // get the rounded color..
    var pixCoord: vec2<f32> = pixelate(coord, vec2<f32>(pixelSize));
    pixCoord = unmapCoord(pixCoord);

    var color = textureSample(uTexture, uSampler, pixCoord);

    // determine the character to use
    let gray: f32 = 0.3 * color.r + 0.59 * color.g + 0.11 * color.b;
    
    var n: f32 = 65536.0; // .
    if (gray > 0.2) {
        n = 65600.0;    // :
    }
    if (gray > 0.3) {
        n = 332772.0;   // *
    }
    if (gray > 0.4) {
        n = 15255086.0; // o
    }
    if (gray > 0.5) {
        n = 23385164.0; // &
    }
    if (gray > 0.6) {
        n = 15252014.0; // 8
    }
    if (gray > 0.7) {
        n = 13199452.0; // @
    }
    if (gray > 0.8) {
        n = 11512810.0; // #
    }

    // get the mod..
    let modd: vec2<f32> = getMod(coord, vec2<f32>(pixelSize));
    return select(color, vec4<f32>(asciiUniforms.uColor, 1.), asciiUniforms.uReplaceColor > 0.5) * character(n, vec2<f32>(-1.0) + modd * 2.0);
}

fn pixelate(coord: vec2<f32>, size: vec2<f32>) -> vec2<f32>
{
    return floor( coord / size ) * size;
}

fn getMod(coord: vec2<f32>, size: vec2<f32>) -> vec2<f32>
{
    return moduloVec2( coord , size) / size;
}

fn character(n: f32, p: vec2<f32>) -> f32
{
    var q: vec2<f32> = floor(p*vec2<f32>(4.0, 4.0) + 2.5);

    if (clamp(q.x, 0.0, 4.0) == q.x)
    {
        if (clamp(q.y, 0.0, 4.0) == q.y)
        {
        if (i32(modulo(n/exp2(q.x + 5.0*q.y), 2.0)) == 1)
        {
            return 1.0;
        }
        }
    }

    return 0.0;
}

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn moduloVec2(x: vec2<f32>, y: vec2<f32>) -> vec2<f32>
{
  return x - y * floor(x/y);
}

fn mapCoord(coord: vec2<f32> ) -> vec2<f32>
{
    var mappedCoord: vec2<f32> = coord;
    mappedCoord *= gfu.uInputSize.xy;
    mappedCoord += gfu.uOutputFrame.xy;
    return mappedCoord;
}

fn unmapCoord(coord: vec2<f32> ) -> vec2<f32>
{
    var mappedCoord: vec2<f32> = coord;
    mappedCoord -= gfu.uOutputFrame.xy;
    mappedCoord /= gfu.uInputSize.xy;
    return mappedCoord;
}`,wo=Object.defineProperty,To=(e,t,n)=>t in e?wo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Eo=(e,t,n)=>(To(e,typeof t==`symbol`?t:t+``,n),n);Eo(class e extends D{constructor(...t){let n=t[0]??{};typeof n==`number`&&(f(`6.0.0`,`AsciiFilter constructor params are now options object. See params: { size, color, replaceColor }`),n={size:n});let r=n?.color&&n.replaceColor!==!1;n={...e.DEFAULT_OPTIONS,...n};let i=g.from({vertex:{source:X,entryPoint:`mainVertex`},fragment:{source:Co,entryPoint:`mainFragment`}}),a=m.from({vertex:Y,fragment:So,name:`ascii-filter`});super({gpuProgram:i,glProgram:a,resources:{asciiUniforms:{uSize:{value:n.size,type:`f32`},uColor:{value:new Float32Array(3),type:`vec3<f32>`},uReplaceColor:{value:Number(r),type:`f32`}}}}),Eo(this,`uniforms`),Eo(this,`_color`),this.uniforms=this.resources.asciiUniforms.uniforms,this._color=new y,this.color=n.color??16777215}get size(){return this.uniforms.uSize}set size(e){this.uniforms.uSize=e}get color(){return this._color.value}set color(e){this._color.setValue(e);let[t,n,r]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=n,this.uniforms.uColor[2]=r}get replaceColor(){return this.uniforms.uReplaceColor>.5}set replaceColor(e){this.uniforms.uReplaceColor=+!!e}},`DEFAULT_OPTIONS`,{size:8,color:16777215,replaceColor:!1});var Do=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTransform;
uniform vec3 uLightColor;
uniform float uLightAlpha;
uniform vec3 uShadowColor;
uniform float uShadowAlpha;

uniform vec4 uInputSize;

void main(void) {
    vec2 transform = vec2(1.0 / uInputSize) * vec2(uTransform.x, uTransform.y);
    vec4 color = texture(uTexture, vTextureCoord);
    float light = texture(uTexture, vTextureCoord - transform).a;
    float shadow = texture(uTexture, vTextureCoord + transform).a;

    color.rgb = mix(color.rgb, uLightColor, clamp((color.a - light) * uLightAlpha, 0.0, 1.0));
    color.rgb = mix(color.rgb, uShadowColor, clamp((color.a - shadow) * uShadowAlpha, 0.0, 1.0));
    finalColor = vec4(color.rgb * color.a, color.a);
}
`,Oo=`struct BevelUniforms {
  uLightColor: vec3<f32>,
  uLightAlpha: f32,
  uShadowColor: vec3<f32>,
  uShadowAlpha: f32,
  uTransform: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> bevelUniforms : BevelUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let transform = vec2<f32>(1.0 / gfu.uInputSize.xy) * vec2<f32>(bevelUniforms.uTransform.x, bevelUniforms.uTransform.y);
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let lightSample: f32 = textureSample(uTexture, uSampler, uv - transform).a;
  let shadowSample: f32 = textureSample(uTexture, uSampler, uv + transform).a;

  let light = vec4<f32>(bevelUniforms.uLightColor, bevelUniforms.uLightAlpha);
  let shadow = vec4<f32>(bevelUniforms.uShadowColor, bevelUniforms.uShadowAlpha);

  color = vec4<f32>(mix(color.rgb, light.rgb, clamp((color.a - lightSample) * light.a, 0.0, 1.0)), color.a);
  color = vec4<f32>(mix(color.rgb, shadow.rgb, clamp((color.a - shadowSample) * shadow.a, 0.0, 1.0)), color.a);
  
  return vec4<f32>(color.rgb * color.a, color.a);
}`,ko=Object.defineProperty,Ao=(e,t,n)=>t in e?ko(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,jo=(e,t,n)=>(Ao(e,typeof t==`symbol`?t:t+``,n),n);jo(class e extends D{constructor(t){t={...e.DEFAULT_OPTIONS,...t};let n=g.from({vertex:{source:X,entryPoint:`mainVertex`},fragment:{source:Oo,entryPoint:`mainFragment`}}),r=m.from({vertex:Y,fragment:Do,name:`bevel-filter`});super({gpuProgram:n,glProgram:r,resources:{bevelUniforms:{uLightColor:{value:new Float32Array(3),type:`vec3<f32>`},uLightAlpha:{value:t.lightAlpha,type:`f32`},uShadowColor:{value:new Float32Array(3),type:`vec3<f32>`},uShadowAlpha:{value:t.shadowAlpha,type:`f32`},uTransform:{value:new Float32Array(2),type:`vec2<f32>`}}},padding:1}),jo(this,`uniforms`),jo(this,`_thickness`),jo(this,`_rotation`),jo(this,`_lightColor`),jo(this,`_shadowColor`),this.uniforms=this.resources.bevelUniforms.uniforms,this._lightColor=new y,this._shadowColor=new y,this.lightColor=t.lightColor??16777215,this.shadowColor=t.shadowColor??0,Object.assign(this,t)}get rotation(){return this._rotation/_}set rotation(e){this._rotation=e*_,this._updateTransform()}get thickness(){return this._thickness}set thickness(e){this._thickness=e,this._updateTransform()}get lightColor(){return this._lightColor.value}set lightColor(e){this._lightColor.setValue(e);let[t,n,r]=this._lightColor.toArray();this.uniforms.uLightColor[0]=t,this.uniforms.uLightColor[1]=n,this.uniforms.uLightColor[2]=r}get lightAlpha(){return this.uniforms.uLightAlpha}set lightAlpha(e){this.uniforms.uLightAlpha=e}get shadowColor(){return this._shadowColor.value}set shadowColor(e){this._shadowColor.setValue(e);let[t,n,r]=this._shadowColor.toArray();this.uniforms.uShadowColor[0]=t,this.uniforms.uShadowColor[1]=n,this.uniforms.uShadowColor[2]=r}get shadowAlpha(){return this.uniforms.uShadowAlpha}set shadowAlpha(e){this.uniforms.uShadowAlpha=e}_updateTransform(){this.uniforms.uTransform[0]=this.thickness*Math.cos(this._rotation),this.uniforms.uTransform[1]=this.thickness*Math.sin(this._rotation)}},`DEFAULT_OPTIONS`,{rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7});var Mo=Object.defineProperty,No=(e,t,n)=>t in e?Mo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Po=(e,t,n)=>(No(e,typeof t==`symbol`?t:t+``,n),n);Po(class e extends Xt{constructor(...t){let n=t[0]??{};if(typeof n==`number`||Array.isArray(n)||`x`in n&&`y`in n){f(`6.0.0`,`BloomFilter constructor params are now options object. See params: { strength, quality, resolution, kernelSize }`);let e=n;Array.isArray(e)&&(e={x:e[0],y:e[1]}),n={strength:e},t[1]!==void 0&&(n.quality=t[1]),t[2]!==void 0&&(n.resolution=t[2]),t[3]!==void 0&&(n.kernelSize=t[3])}n={...e.DEFAULT_OPTIONS,...n},super(),Po(this,`_blurXFilter`),Po(this,`_blurYFilter`),Po(this,`_strength`),this._strength={x:2,y:2},n.strength&&(typeof n.strength==`number`?(this._strength.x=n.strength,this._strength.y=n.strength):(this._strength.x=n.strength.x,this._strength.y=n.strength.y)),this._blurXFilter=new sn({...n,horizontal:!0,strength:this.strengthX}),this._blurYFilter=new sn({...n,horizontal:!1,strength:this.strengthY}),this._blurYFilter.blendMode=`screen`,Object.assign(this,n)}apply(e,t,n,r){let i=s.getSameSizeTexture(t);e.applyFilter(this,t,n,r),this._blurXFilter.apply(e,t,i,!0),this._blurYFilter.apply(e,i,n,!1),s.returnTexture(i)}get strength(){return this._strength}set strength(e){this._strength=typeof e==`number`?{x:e,y:e}:e,this._updateStrength()}get strengthX(){return this.strength.x}set strengthX(e){this.strength.x=e,this._updateStrength()}get strengthY(){return this.strength.y}set strengthY(e){this.strength.y=e,this._updateStrength()}_updateStrength(){this._blurXFilter.blur=this.strengthX,this._blurYFilter.blur=this.strengthY}get blur(){return f(`6.0.0`,`BloomFilter.blur is deprecated, please use BloomFilter.strength instead`),this.strengthX}set blur(e){f(`6.0.0`,`BloomFilter.blur is deprecated, please use BloomFilter.strength instead`),this.strength=e}get blurX(){return f(`6.0.0`,`BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead`),this.strengthX}set blurX(e){f(`6.0.0`,`BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead`),this.strengthX=e}get blurY(){return f(`6.0.0`,`BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead`),this.strengthY}set blurY(e){f(`6.0.0`,`BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead`),this.strengthY=e}},`DEFAULT_OPTIONS`,{strength:{x:2,y:2},quality:4,resolution:1,kernelSize:5});var Fo=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uDimensions;
uniform vec2 uCenter;
uniform float uRadius;
uniform float uStrength;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

void main()
{
    vec2 coord = vTextureCoord * uInputSize.xy;
    coord -= uCenter * uDimensions.xy;
    float distance = length(coord);

    if (distance < uRadius) {
        float percent = distance / uRadius;
        if (uStrength > 0.0) {
            coord *= mix(1.0, smoothstep(0.0, uRadius / distance, percent), uStrength * 0.75);
        } else {
            coord *= mix(1.0, pow(percent, 1.0 + uStrength * 0.75) * uRadius / distance, 1.0 - percent);
        }
    }

    coord += uCenter * uDimensions.xy;
    coord /= uInputSize.xy;
    vec2 clampedCoord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    vec4 color = texture(uTexture, clampedCoord);

    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    finalColor = color;
}
`,Io=`struct BulgePinchUniforms {
  uDimensions: vec2<f32>,
  uCenter: vec2<f32>,
  uRadius: f32,
  uStrength: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> bulgePinchUniforms : BulgePinchUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let dimensions: vec2<f32> = bulgePinchUniforms.uDimensions;
  let center: vec2<f32> = bulgePinchUniforms.uCenter;
  let radius: f32 = bulgePinchUniforms.uRadius;
  let strength: f32 = bulgePinchUniforms.uStrength;
  var coord: vec2<f32> = (uv * gfu.uInputSize.xy) - center * dimensions.xy;

  let distance: f32 = length(coord);

  if (distance < radius) {
      let percent: f32 = distance / radius;
      if (strength > 0.0) {
          coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);
      } else {
          coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);
      }
  }
    coord += (center * dimensions.xy);
    coord /= gfu.uInputSize.xy;

    let clampedCoord: vec2<f32> = clamp(coord, gfu.uInputClamp.xy, gfu.uInputClamp.zw);
    var color: vec4<f32> = textureSample(uTexture, uSampler, clampedCoord);
    if (coord.x != clampedCoord.x && coord.y != clampedCoord.y) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    return color;
}

fn compareVec2(x: vec2<f32>, y: vec2<f32>) -> bool
{
  if (x.x == y.x && x.y == y.y)
  {
    return true;
  }

  return false;
}`,Lo=Object.defineProperty,Ro=(e,t,n)=>t in e?Lo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,zo=(e,t,n)=>(Ro(e,typeof t==`symbol`?t:t+``,n),n);zo(class e extends D{constructor(t){t={...e.DEFAULT_OPTIONS,...t};let n=g.from({vertex:{source:X,entryPoint:`mainVertex`},fragment:{source:Io,entryPoint:`mainFragment`}}),r=m.from({vertex:Y,fragment:Fo,name:`bulge-pinch-filter`});super({gpuProgram:n,glProgram:r,resources:{bulgePinchUniforms:{uDimensions:{value:[0,0],type:`vec2<f32>`},uCenter:{value:t.center,type:`vec2<f32>`},uRadius:{value:t.radius,type:`f32`},uStrength:{value:t.strength,type:`f32`}}}}),zo(this,`uniforms`),this.uniforms=this.resources.bulgePinchUniforms.uniforms,Object.assign(this,t)}apply(e,t,n,r){this.uniforms.uDimensions[0]=t.frame.width,this.uniforms.uDimensions[1]=t.frame.height,e.applyFilter(this,t,n,r)}get center(){return this.uniforms.uCenter}set center(e){typeof e==`number`&&(e={x:e,y:e}),Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uCenter=e}get centerX(){return this.uniforms.uCenter.x}set centerX(e){this.uniforms.uCenter.x=e}get centerY(){return this.uniforms.uCenter.y}set centerY(e){this.uniforms.uCenter.y=e}get radius(){return this.uniforms.uRadius}set radius(e){this.uniforms.uRadius=e}get strength(){return this.uniforms.uStrength}set strength(e){this.uniforms.uStrength=e}},`DEFAULT_OPTIONS`,{center:{x:.5,y:.5},radius:100,strength:1});var Bo=`precision highp float;
in vec2 vTextureCoord;
in vec2 vFilterCoord;
out vec4 finalColor;

const int TYPE_LINEAR = 0;
const int TYPE_RADIAL = 1;
const int TYPE_CONIC = 2;
const int MAX_STOPS = 32;

uniform sampler2D uTexture;
uniform vec4 uOptions;
uniform vec2 uCounts;
uniform vec3 uColors[MAX_STOPS];
uniform vec4 uStops[MAX_STOPS];

const float PI = 3.1415926538;
const float PI_2 = PI*2.;

struct ColorStop {
    float offset;
    vec3 color;
    float alpha;
};

mat2 rotate2d(float angle){
    return mat2(cos(angle), -sin(angle),
    sin(angle), cos(angle));
}

float projectLinearPosition(vec2 pos, float angle){
    vec2 center = vec2(0.5);
    vec2 result = pos - center;
    result = rotate2d(angle) * result;
    result = result + center;
    return clamp(result.x, 0., 1.);
}

float projectRadialPosition(vec2 pos) {
    float r = distance(pos, vec2(0.5));
    return clamp(2.*r, 0., 1.);
}

float projectAnglePosition(vec2 pos, float angle) {
    vec2 center = pos - vec2(0.5);
    float polarAngle=atan(-center.y, center.x);
    return mod(polarAngle + angle, PI_2) / PI_2;
}

float projectPosition(vec2 pos, int type, float angle) {
    if (type == TYPE_LINEAR) {
        return projectLinearPosition(pos, angle);
    } else if (type == TYPE_RADIAL) {
        return projectRadialPosition(pos);
    } else if (type == TYPE_CONIC) {
        return projectAnglePosition(pos, angle);
    }

    return pos.y;
}

void main(void) {
    int uType = int(uOptions[0]);
    float uAngle = uOptions[1];
    float uAlpha = uOptions[2];
    float uReplace = uOptions[3];

    int uNumStops = int(uCounts[0]);
    float uMaxColors = uCounts[1];

    // current/original color
    vec4 currentColor = texture(uTexture, vTextureCoord);

    // skip calculations if gradient alpha is 0
    if (0.0 == uAlpha) {
        finalColor = currentColor;
        return;
    }

    // project position
    float y = projectPosition(vFilterCoord, int(uType), radians(uAngle));

    // check gradient bounds
    float offsetMin = uStops[0][0];
    float offsetMax = 0.0;

    int numStops = int(uNumStops);

    for (int i = 0; i < MAX_STOPS; i++) {
        if (i == numStops-1){ // last index
            offsetMax = uStops[i][0];
        }
    }

    if (y  < offsetMin || y > offsetMax) {
        finalColor = currentColor;
        return;
    }

    // limit colors
    if (uMaxColors > 0.) {
        float stepSize = 1./uMaxColors;
        float stepNumber = float(floor(y/stepSize));
        y = stepSize * (stepNumber + 0.5);// offset by 0.5 to use color from middle of segment
    }

    // find color stops
    ColorStop from;
    ColorStop to;

    for (int i = 0; i < MAX_STOPS; i++) {
        if (y >= uStops[i][0]) {
            from = ColorStop(uStops[i][0], uColors[i], uStops[i][1]);
            to = ColorStop(uStops[i+1][0], uColors[i+1], uStops[i+1][1]);
        }

        if (i == numStops-1){ // last index
            break;
        }
    }

    // mix colors from stops
    vec4 colorFrom = vec4(from.color * from.alpha, from.alpha);
    vec4 colorTo = vec4(to.color * to.alpha, to.alpha);

    float segmentHeight = to.offset - from.offset;
    float relativePos = y - from.offset;// position from 0 to [segmentHeight]
    float relativePercent = relativePos / segmentHeight;// position in percent between [from.offset] and [to.offset].

    float gradientAlpha = uAlpha * currentColor.a;
    vec4 gradientColor = mix(colorFrom, colorTo, relativePercent) * gradientAlpha;

    if (uReplace < 0.5) {
        // mix resulting color with current color
        finalColor = gradientColor + currentColor*(1.-gradientColor.a);
    } else {
        // replace with gradient color
        finalColor = gradientColor;
    }
}
`,Vo=`in vec2 aPosition;
out vec2 vTextureCoord;
out vec2 vFilterCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
    vFilterCoord = vTextureCoord * uInputSize.xy / uOutputFrame.zw;
}
`,Ho=`struct BaseUniforms {
  uOptions: vec4<f32>,
  uCounts: vec2<f32>,
};

struct StopsUniforms {
  uColors: array<vec3<f32>, MAX_STOPS>,
  uStops: array<vec4<f32>, MAX_STOPS>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> baseUniforms : BaseUniforms;
@group(1) @binding(1) var<uniform> stopsUniforms : StopsUniforms;

struct VSOutput {
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
  @location(1) coord : vec2<f32>
};

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn filterCoord( vTextureCoord:vec2<f32> ) -> vec2<f32>
{
    return vTextureCoord * gfu.uInputSize.xy / gfu.uOutputFrame.zw;
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  let vTextureCoord: vec2<f32> = filterTextureCoord(aPosition);
  return VSOutput(
   filterVertexPosition(aPosition),
   vTextureCoord,
   filterCoord(vTextureCoord),
  );
}

struct ColorStop {
  offset: f32,
  color: vec3<f32>,
  alpha: f32,
};

fn rotate2d(angle: f32) -> mat2x2<f32>{
  return mat2x2(cos(angle), -sin(angle),
  sin(angle), cos(angle));
}

fn projectLinearPosition(pos: vec2<f32>, angle: f32) -> f32 {
  var center: vec2<f32> = vec2<f32>(0.5);
  var result: vec2<f32> = pos - center;
  result = rotate2d(angle) * result;
  result = result + center;
  return clamp(result.x, 0.0, 1.0);
}

fn projectRadialPosition(pos: vec2<f32>) -> f32 {
  var r: f32 = distance(pos, vec2<f32>(0.5));
  return clamp(2.0 * r, 0.0, 1.0);
}

fn projectAnglePosition(pos: vec2<f32>, angle: f32) -> f32 {
  var center: vec2<f32> = pos - vec2<f32>(0.5, 0.5);
  var polarAngle: f32 = atan2(-center.y, center.x);
  return ((polarAngle + angle) % PI_2) / PI_2;
}

fn projectPosition(pos: vec2<f32>, gradientType: i32, angle: f32) -> f32 {
  if (gradientType == TYPE_LINEAR) {
      return projectLinearPosition(pos, angle);
  } else if (gradientType == TYPE_RADIAL) {
      return projectRadialPosition(pos);
  } else if (gradientType == TYPE_CONIC) {
      return projectAnglePosition(pos, angle);
  }

  return pos.y;
}

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
  @location(1) coord : vec2<f32>
) -> @location(0) vec4<f32> {
  let uType: i32 = i32(baseUniforms.uOptions[0]);
  let uAngle: f32 = baseUniforms.uOptions[1];
  let uAlpha: f32 = baseUniforms.uOptions[2];
  let uReplace: f32 = baseUniforms.uOptions[3];

  let uNumStops: i32 = i32(baseUniforms.uCounts[0]);
  let uMaxColors: f32 = baseUniforms.uCounts[1];

  // current/original color
  var currentColor: vec4<f32> = textureSample(uTexture, uSampler, uv);

  // skip calculations if gradient alpha is 0
  if (uAlpha == 0.0) { return currentColor; }

  // project position
  var y: f32 = projectPosition(coord, uType, radians(uAngle));

  // check gradient bounds
  var offsetMin: f32 = stopsUniforms.uStops[0][0];
  var offsetMax: f32 = 0.0;

  let numStops: i32 = uNumStops;

  for (var i: i32 = 0; i < MAX_STOPS; i = i + 1) {
      if (i == numStops - 1) { // last index
          offsetMax = stopsUniforms.uStops[i][0];
      }
  }

  if (y  < offsetMin || y > offsetMax) { return currentColor; }

  // limit colors
  if (uMaxColors > 0.0) {
      var stepSize: f32 = 1.0 / uMaxColors;
      var stepNumber: f32 = floor(y / stepSize);
      y = stepSize * (stepNumber + 0.5); // offset by 0.5 to use color from middle of segment
  }

  // find color stops
  var stopFrom: ColorStop;
  var stopTo: ColorStop;

  for (var i: i32 = 0; i < MAX_STOPS; i = i + 1) {
      if (y >= stopsUniforms.uStops[i][0]) {
          stopFrom = ColorStop(stopsUniforms.uStops[i][0], stopsUniforms.uColors[i], stopsUniforms.uStops[i][1]);
          stopTo = ColorStop(stopsUniforms.uStops[i + 1][0], stopsUniforms.uColors[i + 1], stopsUniforms.uStops[i + 1][1]);
      }

      if (i == numStops - 1) { // last index
          break;
      }
  }

  // mix colors from stops
  var colorFrom: vec4<f32> = vec4<f32>(stopFrom.color * stopFrom.alpha, stopFrom.alpha);
  var colorTo: vec4<f32> = vec4<f32>(stopTo.color * stopTo.alpha, stopTo.alpha);

  var segmentHeight: f32 = stopTo.offset - stopFrom.offset;
  var relativePos: f32 = y - stopFrom.offset; // position from 0 to [segmentHeight]
  var relativePercent: f32 = relativePos / segmentHeight; // position in percent between [from.offset] and [to.offset].

  var gradientAlpha: f32 = uAlpha * currentColor.a;
  var gradientColor: vec4<f32> = mix(colorFrom, colorTo, relativePercent) * gradientAlpha;

  if (uReplace < 0.5) {
      // mix resulting color with current color
      return gradientColor + currentColor * (1.0 - gradientColor.a);
  } else {
      // replace with gradient color
      return gradientColor;
  }
}

const PI: f32 = 3.14159265358979323846264;
const PI_2: f32 = PI * 2.0;

const TYPE_LINEAR: i32 = 0;
const TYPE_RADIAL: i32 = 1;
const TYPE_CONIC: i32 = 2;
const MAX_STOPS: i32 = 32;`,Uo=Uo||{};Uo.stringify=(function(){var e={"visit_linear-gradient":function(t){return e.visit_gradient(t)},"visit_repeating-linear-gradient":function(t){return e.visit_gradient(t)},"visit_radial-gradient":function(t){return e.visit_gradient(t)},"visit_repeating-radial-gradient":function(t){return e.visit_gradient(t)},visit_gradient:function(t){var n=e.visit(t.orientation);return n&&(n+=`, `),t.type+`(`+n+e.visit(t.colorStops)+`)`},visit_shape:function(t){var n=t.value,r=e.visit(t.at),i=e.visit(t.style);return i&&(n+=` `+i),r&&(n+=` at `+r),n},"visit_default-radial":function(t){var n=``,r=e.visit(t.at);return r&&(n+=r),n},"visit_extent-keyword":function(t){var n=t.value,r=e.visit(t.at);return r&&(n+=` at `+r),n},"visit_position-keyword":function(e){return e.value},visit_position:function(t){return e.visit(t.value.x)+` `+e.visit(t.value.y)},"visit_%":function(e){return e.value+`%`},visit_em:function(e){return e.value+`em`},visit_px:function(e){return e.value+`px`},visit_literal:function(t){return e.visit_color(t.value,t)},visit_hex:function(t){return e.visit_color(`#`+t.value,t)},visit_rgb:function(t){return e.visit_color(`rgb(`+t.value.join(`, `)+`)`,t)},visit_rgba:function(t){return e.visit_color(`rgba(`+t.value.join(`, `)+`)`,t)},visit_color:function(t,n){var r=t,i=e.visit(n.length);return i&&(r+=` `+i),r},visit_angular:function(e){return e.value+`deg`},visit_directional:function(e){return`to `+e.value},visit_array:function(t){var n=``,r=t.length;return t.forEach(function(t,i){n+=e.visit(t),i<r-1&&(n+=`, `)}),n},visit:function(t){if(!t)return``;var n=``;if(t instanceof Array)return e.visit_array(t,n);if(t.type){var r=e[`visit_`+t.type];if(r)return r(t);throw Error(`Missing visitor visit_`+t.type)}else throw Error(`Invalid node.`)}};return function(t){return e.visit(t)}})();var Uo=Uo||{};Uo.parse=(function(){var e={linearGradient:/^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,repeatingLinearGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,radialGradient:/^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,repeatingRadialGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,sideOrCorner:/^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,extentKeywords:/^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,positionKeywords:/^(left|center|right|top|bottom)/i,pixelValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,percentageValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,emValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,angleValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,startCall:/^\(/,endCall:/^\)/,comma:/^,/,hexColor:/^\#([0-9a-fA-F]+)/,literalColor:/^([a-zA-Z]+)/,rgbColor:/^rgb/i,rgbaColor:/^rgba/i,number:/^(([0-9]*\.[0-9]+)|([0-9]+\.?))/},t=``;function n(e){var n=Error(t+`: `+e);throw n.source=t,n}function r(){var e=i();return t.length>0&&n(`Invalid input not EOF`),e}function i(){return v(a)}function a(){return o(`linear-gradient`,e.linearGradient,c)||o(`repeating-linear-gradient`,e.repeatingLinearGradient,c)||o(`radial-gradient`,e.radialGradient,d)||o(`repeating-radial-gradient`,e.repeatingRadialGradient,d)}function o(t,r,i){return s(r,function(r){var a=i();return a&&(C(e.comma)||n(`Missing comma before color stops`)),{type:t,orientation:a,colorStops:v(y)}})}function s(t,r){var i=C(t);if(i){C(e.startCall)||n(`Missing (`);var a=r(i);return C(e.endCall)||n(`Missing )`),a}}function c(){return l()||u()}function l(){return S(`directional`,e.sideOrCorner,1)}function u(){return S(`angular`,e.angleValue,1)}function d(){var n,r=f(),i;return r&&(n=[],n.push(r),i=t,C(e.comma)&&(r=f(),r?n.push(r):t=i)),n}function f(){var e=p()||m();if(e)e.at=g();else{var t=h();if(t){e=t;var n=g();n&&(e.at=n)}else{var r=_();r&&(e={type:`default-radial`,at:r})}}return e}function p(){var e=S(`shape`,/^(circle)/i,0);return e&&(e.style=se()||h()),e}function m(){var e=S(`shape`,/^(ellipse)/i,0);return e&&(e.style=ae()||h()),e}function h(){return S(`extent-keyword`,e.extentKeywords,1)}function g(){if(S(`position`,/^at/,0)){var e=_();return e||n(`Missing positioning value`),e}}function _(){var e=ee();if(e.x||e.y)return{type:`position`,value:e}}function ee(){return{x:ae(),y:ae()}}function v(t){var r=t(),i=[];if(r)for(i.push(r);C(e.comma);)r=t(),r?i.push(r):n(`One extra comma`);return i}function y(){var e=te();return e||n(`Expected color definition`),e.length=ae(),e}function te(){return ne()||ie()||re()||b()}function b(){return S(`literal`,e.literalColor,0)}function ne(){return S(`hex`,e.hexColor,1)}function re(){return s(e.rgbColor,function(){return{type:`rgb`,value:v(x)}})}function ie(){return s(e.rgbaColor,function(){return{type:`rgba`,value:v(x)}})}function x(){return C(e.number)[1]}function ae(){return S(`%`,e.percentageValue,1)||oe()||se()}function oe(){return S(`position-keyword`,e.positionKeywords,1)}function se(){return S(`px`,e.pixelValue,1)||S(`em`,e.emValue,1)}function S(e,t,n){var r=C(t);if(r)return{type:e,value:r[n]}}function C(e){var n,r=/^[\n\r\t\s]+/.exec(t);return r&&w(r[0].length),n=e.exec(t),n&&w(n[0].length),n}function w(e){t=t.substr(e)}return function(e){return t=e.toString(),r()}})();var Wo=Uo.parse;Uo.stringify;function Go(e){let t=Wo($o(e));if(t.length===0)throw Error(`Invalid CSS gradient.`);if(t.length!==1)throw Error(`Unsupported CSS gradient (multiple gradients is not supported).`);let n=t[0];return{type:Ko(n.type),stops:qo(n.colorStops),angle:Zo(n.orientation)}}function Ko(e){let t={"linear-gradient":0,"radial-gradient":1};if(!(e in t))throw Error(`Unsupported gradient type "${e}"`);return t[e]}function qo(e){let t=Yo(e),n=[],r=new y;for(let i=0;i<e.length;i++){let a=Jo(e[i]),o=r.setValue(a).toArray();n.push({offset:t[i],color:o.slice(0,3),alpha:o[3]})}return n}function Jo(e){switch(e.type){case`hex`:return`#${e.value}`;case`literal`:return e.value;default:return`${e.type}(${e.value.join(`,`)})`}}function Yo(e){let t=[];for(let n=0;n<e.length;n++){let r=e[n],i=-1;r.type===`literal`&&r.length&&`type`in r.length&&r.length.type===`%`&&`value`in r.length&&(i=parseFloat(r.length.value)/100),t.push(i)}let n=e=>{for(let n=e;n<t.length;n++)if(t[n]!==-1)return{indexDelta:n-e,offset:t[n]};return{indexDelta:t.length-1-e,offset:1}},r=0;for(let e=0;e<t.length;e++){let i=t[e];if(i!==-1)r=i;else if(e===0)t[e]=0;else if(e+1===t.length)t[e]=1;else{let i=n(e),a=(i.offset-r)/(1+i.indexDelta);for(let n=0;n<=i.indexDelta;n++)t[e+n]=r+(n+1)*a;e+=i.indexDelta,r=t[e]}}return t.map(Xo)}function Xo(e){return e.toString().length>6?parseFloat(e.toString().substring(0,6)):e}function Zo(e){if(e===void 0)return 0;if(`type`in e&&`value`in e)switch(e.type){case`angular`:return parseFloat(e.value);case`directional`:return Qo(e.value)}return 0}function Qo(e){let t={left:270,top:0,bottom:180,right:90,"left top":315,"top left":315,"left bottom":225,"bottom left":225,"right top":45,"top right":45,"right bottom":135,"bottom right":135};if(!(e in t))throw Error(`Unsupported directional value "${e}"`);return t[e]}function $o(e){let t=e.replace(/\s{2,}/gu,` `);return t=t.replace(/;/g,``),t=t.replace(/ ,/g,`,`),t=t.replace(/\( /g,`(`),t=t.replace(/ \)/g,`)`),t.trim()}var es=Object.defineProperty,ts=(e,t,n)=>t in e?es(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ns=(e,t,n)=>(ts(e,typeof t==`symbol`?t:t+``,n),n),rs=90;function is(e){return[...e].sort((e,t)=>e.offset-t.offset)}var as=class e extends D{constructor(t){if(t=t&&`css`in t?{...Go(t.css||``),alpha:t.alpha??e.defaults.alpha,maxColors:t.maxColors??e.defaults.maxColors}:{...e.defaults,...t},!t.stops||t.stops.length<2)throw Error(`ColorGradientFilter requires at least 2 color stops.`);let n=g.from({vertex:{source:Ho,entryPoint:`mainVertex`},fragment:{source:Ho,entryPoint:`mainFragment`}}),r=m.from({vertex:Vo,fragment:Bo,name:`color-gradient-filter`});super({gpuProgram:n,glProgram:r,resources:{baseUniforms:{uOptions:{value:[t.type,t.angle??rs,t.alpha,+!!t.replace],type:`vec4<f32>`},uCounts:{value:[t.stops.length,t.maxColors],type:`vec2<f32>`}},stopsUniforms:{uColors:{value:new Float32Array(96),type:`vec3<f32>`,size:32},uStops:{value:new Float32Array(128),type:`vec4<f32>`,size:32}}}}),ns(this,`baseUniforms`),ns(this,`stopsUniforms`),ns(this,`_stops`,[]),this.baseUniforms=this.resources.baseUniforms.uniforms,this.stopsUniforms=this.resources.stopsUniforms.uniforms,Object.assign(this,t)}get stops(){return this._stops}set stops(e){let t=is(e),n=new y,r,i,a;for(let e=0;e<t.length;e++){n.setValue(t[e].color);let o=e*3;[r,i,a]=n.toArray(),this.stopsUniforms.uColors[o]=r,this.stopsUniforms.uColors[o+1]=i,this.stopsUniforms.uColors[o+2]=a,this.stopsUniforms.uStops[e*4]=t[e].offset,this.stopsUniforms.uStops[e*4+1]=t[e].alpha}this.baseUniforms.uCounts[0]=t.length,this._stops=t}get type(){return this.baseUniforms.uOptions[0]}set type(e){this.baseUniforms.uOptions[0]=e}get angle(){return this.baseUniforms.uOptions[1]+rs}set angle(e){this.baseUniforms.uOptions[1]=e-rs}get alpha(){return this.baseUniforms.uOptions[2]}set alpha(e){this.baseUniforms.uOptions[2]=e}get maxColors(){return this.baseUniforms.uCounts[1]}set maxColors(e){this.baseUniforms.uCounts[1]=e}get replace(){return this.baseUniforms.uOptions[3]>.5}set replace(e){this.baseUniforms.uOptions[3]=+!!e}};ns(as,`LINEAR`,0),ns(as,`RADIAL`,1),ns(as,`CONIC`,2),ns(as,`defaults`,{type:as.LINEAR,stops:[{offset:0,color:16711680,alpha:1},{offset:1,color:255,alpha:1}],alpha:1,angle:90,maxColors:0,replace:!1});var os=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform float uMix;
uniform float uSize;
uniform float uSliceSize;
uniform float uSlicePixelSize;
uniform float uSliceInnerSize;

void main() {
    vec4 color = texture(uTexture, vTextureCoord.xy);
    vec4 adjusted;

    if (color.a > 0.0) {
        color.rgb /= color.a;
        float innerWidth = uSize - 1.0;
        float zSlice0 = min(floor(color.b * innerWidth), innerWidth);
        float zSlice1 = min(zSlice0 + 1.0, innerWidth);
        float xOffset = uSlicePixelSize * 0.5 + color.r * uSliceInnerSize;
        float s0 = xOffset + (zSlice0 * uSliceSize);
        float s1 = xOffset + (zSlice1 * uSliceSize);
        float yOffset = uSliceSize * 0.5 + color.g * (1.0 - uSliceSize);
        vec4 slice0Color = texture(uMapTexture, vec2(s0,yOffset));
        vec4 slice1Color = texture(uMapTexture, vec2(s1,yOffset));
        float zOffset = fract(color.b * innerWidth);
        adjusted = mix(slice0Color, slice1Color, zOffset);

        color.rgb *= color.a;
    }

    finalColor = vec4(mix(color, adjusted, uMix).rgb, color.a);

}`,ss=`struct ColorMapUniforms {
  uMix: f32,
  uSize: f32,
  uSliceSize: f32,
  uSlicePixelSize: f32,
  uSliceInnerSize: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorMapUniforms : ColorMapUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;
@group(1) @binding(2) var uMapSampler: sampler;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color:vec4<f32> = textureSample(uTexture, uSampler, uv);

  var adjusted: vec4<f32>;

  var altColor: vec4<f32> = vec4<f32>(color.rgb / color.a, color.a);
  let innerWidth: f32 = colorMapUniforms.uSize - 1.0;
  let zSlice0: f32 = min(floor(color.b * innerWidth), innerWidth);
  let zSlice1: f32 = min(zSlice0 + 1.0, innerWidth);
  let xOffset: f32 = colorMapUniforms.uSlicePixelSize * 0.5 + color.r * colorMapUniforms.uSliceInnerSize;
  let s0: f32 = xOffset + (zSlice0 * colorMapUniforms.uSliceSize);
  let s1: f32 = xOffset + (zSlice1 * colorMapUniforms.uSliceSize);
  let yOffset: f32 = colorMapUniforms.uSliceSize * 0.5 + color.g * (1.0 - colorMapUniforms.uSliceSize);
  let slice0Color: vec4<f32> = textureSample(uMapTexture, uMapSampler, vec2(s0,yOffset));
  let slice1Color: vec4<f32> = textureSample(uMapTexture, uMapSampler, vec2(s1,yOffset));
  let zOffset: f32 = fract(color.b * innerWidth);
  adjusted = mix(slice0Color, slice1Color, zOffset);
  altColor = vec4<f32>(color.rgb * color.a, color.a);

  let realColor: vec4<f32> = select(color, altColor, color.a > 0.0);

  return vec4<f32>(mix(realColor, adjusted, colorMapUniforms.uMix).rgb, realColor.a);
}`,cs=Object.defineProperty,ls=(e,t,n)=>t in e?cs(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Z=(e,t,n)=>(ls(e,typeof t==`symbol`?t:t+``,n),n);Z(class e extends D{constructor(...t){let r=t[0]??{};if((r instanceof n||r instanceof re)&&(f(`6.0.0`,`ColorMapFilter constructor params are now options object. See params: { colorMap, nearest, mix }`),r={colorMap:r},t[1]!==void 0&&(r.nearest=t[1]),t[2]!==void 0&&(r.mix=t[2])),r={...e.DEFAULT_OPTIONS,...r},!r.colorMap)throw Error(`No color map texture source was provided to ColorMapFilter`);let i=g.from({vertex:{source:X,entryPoint:`mainVertex`},fragment:{source:ss,entryPoint:`mainFragment`}}),a=m.from({vertex:Y,fragment:os,name:`color-map-filter`});super({gpuProgram:i,glProgram:a,resources:{colorMapUniforms:{uMix:{value:r.mix,type:`f32`},uSize:{value:0,type:`f32`},uSliceSize:{value:0,type:`f32`},uSlicePixelSize:{value:0,type:`f32`},uSliceInnerSize:{value:0,type:`f32`}},uMapTexture:r.colorMap.source,uMapSampler:r.colorMap.source.style}}),Z(this,`uniforms`),Z(this,`_size`,0),Z(this,`_sliceSize`,0),Z(this,`_slicePixelSize`,0),Z(this,`_sliceInnerSize`,0),Z(this,`_nearest`,!1),Z(this,`_scaleMode`,`linear`),Z(this,`_colorMap`),this.uniforms=this.resources.colorMapUniforms.uniforms,Object.assign(this,r)}get mix(){return this.uniforms.uMix}set mix(e){this.uniforms.uMix=e}get colorSize(){return this._size}get colorMap(){return this._colorMap}set colorMap(e){if(!e||e===this.colorMap)return;let t=e instanceof n?e.source:e;t.style.scaleMode=this._scaleMode,t.autoGenerateMipmaps=!1,this._size=t.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms.uSize=this._size,this.uniforms.uSliceSize=this._sliceSize,this.uniforms.uSlicePixelSize=this._slicePixelSize,this.uniforms.uSliceInnerSize=this._sliceInnerSize,this.resources.uMapTexture=t,this._colorMap=e}get nearest(){return this._nearest}set nearest(e){this._nearest=e,this._scaleMode=e?`nearest`:`linear`;let t=this._colorMap;t&&t.source&&(t.source.scaleMode=this._scaleMode,t.source.autoGenerateMipmaps=!1,t.source.style.update(),t.source.update())}updateColorMap(){let e=this._colorMap;e?.source&&(e.source.update(),this.colorMap=e)}destroy(){this._colorMap?.destroy(),super.destroy()}},`DEFAULT_OPTIONS`,{colorMap:n.WHITE,nearest:!1,mix:1});var us=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uColor;
uniform float uAlpha;

void main(void) {
    vec4 c = texture(uTexture, vTextureCoord);
    finalColor = vec4(mix(c.rgb, uColor.rgb, c.a * uAlpha), c.a);
}
`,ds=`struct ColorOverlayUniforms {
    uColor: vec3<f32>,
    uAlpha: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorOverlayUniforms : ColorOverlayUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    let c = textureSample(uTexture, uSampler, uv);
    return vec4<f32>(mix(c.rgb, colorOverlayUniforms.uColor.rgb, c.a * colorOverlayUniforms.uAlpha), c.a);
}
`,fs=Object.defineProperty,ps=(e,t,n)=>t in e?fs(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ms=(e,t,n)=>(ps(e,typeof t==`symbol`?t:t+``,n),n);ms(class e extends D{constructor(...t){let n=t[0]??{};(typeof n==`number`||Array.isArray(n)||n instanceof Float32Array)&&(f(`6.0.0`,`ColorOverlayFilter constructor params are now options object. See params: { color, alpha }`),n={color:n},t[1]!==void 0&&(n.alpha=t[1])),n={...e.DEFAULT_OPTIONS,...n};let r=g.from({vertex:{source:X,entryPoint:`mainVertex`},fragment:{source:ds,entryPoint:`mainFragment`}}),i=m.from({vertex:Y,fragment:us,name:`color-overlay-filter`});super({gpuProgram:r,glProgram:i,resources:{colorOverlayUniforms:{uColor:{value:new Float32Array(3),type:`vec3<f32>`},uAlpha:{value:n.alpha,type:`f32`}}}}),ms(this,`uniforms`),ms(this,`_color`),this.uniforms=this.resources.colorOverlayUniforms.uniforms,this._color=new y,this.color=n.color??0}get color(){return this._color.value}set color(e){this._color.setValue(e);let[t,n,r]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=n,this.uniforms.uColor[2]=r}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}},`DEFAULT_OPTIONS`,{color:0,alpha:1});var hs=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uOriginalColor;
uniform vec3 uTargetColor;
uniform float uTolerance;

void main(void) {
    vec4 c = texture(uTexture, vTextureCoord);
    vec3 colorDiff = uOriginalColor - (c.rgb / max(c.a, 0.0000000001));
    float colorDistance = length(colorDiff);
    float doReplace = step(colorDistance, uTolerance);
    finalColor = vec4(mix(c.rgb, (uTargetColor + colorDiff) * c.a, doReplace), c.a);
}
`,gs=`struct ColorReplaceUniforms {
  uOriginalColor: vec3<f32>,
  uTargetColor: vec3<f32>,
  uTolerance: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorReplaceUniforms : ColorReplaceUniforms;

@fragment
fn mainFragment(
   @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let sample: vec4<f32> = textureSample(uTexture, uSampler, uv);

  let colorDiff: vec3<f32> = colorReplaceUniforms.uOriginalColor - (sample.rgb / max(sample.a, 0.0000000001));
  let colorDistance: f32 = length(colorDiff);
  let doReplace: f32 = step(colorDistance, colorReplaceUniforms.uTolerance);

  return vec4<f32>(mix(sample.rgb, (colorReplaceUniforms.uTargetColor + colorDiff) * sample.a, doReplace), sample.a);
}`,_s=Object.defineProperty,vs=(e,t,n)=>t in e?_s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ys=(e,t,n)=>(vs(e,typeof t==`symbol`?t:t+``,n),n);ys(class e extends D{constructor(...t){let n=t[0]??{};(typeof n==`number`||Array.isArray(n)||n instanceof Float32Array)&&(f(`6.0.0`,`ColorReplaceFilter constructor params are now options object. See params: { originalColor, targetColor, tolerance }`),n={originalColor:n},t[1]!==void 0&&(n.targetColor=t[1]),t[2]!==void 0&&(n.tolerance=t[2])),n={...e.DEFAULT_OPTIONS,...n};let r=g.from({vertex:{source:X,entryPoint:`mainVertex`},fragment:{source:gs,entryPoint:`mainFragment`}}),i=m.from({vertex:Y,fragment:hs,name:`color-replace-filter`});super({gpuProgram:r,glProgram:i,resources:{colorReplaceUniforms:{uOriginalColor:{value:new Float32Array(3),type:`vec3<f32>`},uTargetColor:{value:new Float32Array(3),type:`vec3<f32>`},uTolerance:{value:n.tolerance,type:`f32`}}}}),ys(this,`uniforms`),ys(this,`_originalColor`),ys(this,`_targetColor`),this.uniforms=this.resources.colorReplaceUniforms.uniforms,this._originalColor=new y,this._targetColor=new y,this.originalColor=n.originalColor??16711680,this.targetColor=n.targetColor??0,Object.assign(this,n)}get originalColor(){return this._originalColor.value}set originalColor(e){this._originalColor.setValue(e);let[t,n,r]=this._originalColor.toArray();this.uniforms.uOriginalColor[0]=t,this.uniforms.uOriginalColor[1]=n,this.uniforms.uOriginalColor[2]=r}get targetColor(){return this._targetColor.value}set targetColor(e){this._targetColor.setValue(e);let[t,n,r]=this._targetColor.toArray();this.uniforms.uTargetColor[0]=t,this.uniforms.uTargetColor[1]=n,this.uniforms.uTargetColor[2]=r}get tolerance(){return this.uniforms.uTolerance}set tolerance(e){this.uniforms.uTolerance=e}set newColor(e){f(`6.0.0`,`ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead`),this.targetColor=e}get newColor(){return f(`6.0.0`,`ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead`),this.targetColor}set epsilon(e){f(`6.0.0`,`ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead`),this.tolerance=e}get epsilon(){return f(`6.0.0`,`ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead`),this.tolerance}},`DEFAULT_OPTIONS`,{originalColor:16711680,targetColor:0,tolerance:.4});var bs=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTexelSize;
uniform mat3 uMatrix;

void main(void)
{
    vec4 c11 = texture(uTexture, vTextureCoord - uTexelSize); // top left
    vec4 c12 = texture(uTexture, vec2(vTextureCoord.x, vTextureCoord.y - uTexelSize.y)); // top center
    vec4 c13 = texture(uTexture, vec2(vTextureCoord.x + uTexelSize.x, vTextureCoord.y - uTexelSize.y)); // top right

    vec4 c21 = texture(uTexture, vec2(vTextureCoord.x - uTexelSize.x, vTextureCoord.y)); // mid left
    vec4 c22 = texture(uTexture, vTextureCoord); // mid center
    vec4 c23 = texture(uTexture, vec2(vTextureCoord.x + uTexelSize.x, vTextureCoord.y)); // mid right

    vec4 c31 = texture(uTexture, vec2(vTextureCoord.x - uTexelSize.x, vTextureCoord.y + uTexelSize.y)); // bottom left
    vec4 c32 = texture(uTexture, vec2(vTextureCoord.x, vTextureCoord.y + uTexelSize.y)); // bottom center
    vec4 c33 = texture(uTexture, vTextureCoord + uTexelSize); // bottom right

    finalColor =
        c11 * uMatrix[0][0] + c12 * uMatrix[0][1] + c13 * uMatrix[0][2] +
        c21 * uMatrix[1][0] + c22 * uMatrix[1][1] + c23 * uMatrix[1][2] +
        c31 * uMatrix[2][0] + c32 * uMatrix[2][1] + c33 * uMatrix[2][2];

    finalColor.a = c22.a;
}`,xs=`struct ConvolutionUniforms {
    uMatrix: mat3x3<f32>,
    uTexelSize: vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> convolutionUniforms : ConvolutionUniforms;

@fragment
fn mainFragment(
    @location(0) uv: vec2<f32>,
    @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let texelSize = convolutionUniforms.uTexelSize;
    let matrix = convolutionUniforms.uMatrix;

    let c11: vec4<f32> = textureSample(uTexture, uSampler, uv - texelSize); // top left
    let c12: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x, uv.y - texelSize.y)); // top center
    let c13: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x + texelSize.x, uv.y - texelSize.y)); // top right

    let c21: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x - texelSize.x, uv.y)); // mid left
    let c22: vec4<f32> = textureSample(uTexture, uSampler, uv); // mid center
    let c23: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x + texelSize.x, uv.y)); // mid right

    let c31: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x - texelSize.x, uv.y + texelSize.y)); // bottom left
    let c32: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x, uv.y + texelSize.y)); // bottom center
    let c33: vec4<f32> = textureSample(uTexture, uSampler, uv + texelSize); // bottom right

    var finalColor: vec4<f32> = vec4<f32>(
        c11 * matrix[0][0] + c12 * matrix[0][1] + c13 * matrix[0][2] +
        c21 * matrix[1][0] + c22 * matrix[1][1] + c23 * matrix[1][2] +
        c31 * matrix[2][0] + c32 * matrix[2][1] + c33 * matrix[2][2]
    );

    finalColor.a = c22.a;

    return finalColor;
}`,Ss=Object.defineProperty,Cs=(e,t,n)=>t in e?Ss(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ws=(e,t,n)=>(Cs(e,typeof t==`symbol`?t:t+``,n),n);ws(class e extends D{constructor(...t){let n=t[0]??{};Array.isArray(n)&&(f(`6.0.0`,`ConvolutionFilter constructor params are now options object. See params: { matrix, width, height }`),n={matrix:n},t[1]!==void 0&&(n.width=t[1]),t[2]!==void 0&&(n.height=t[2])),n={...e.DEFAULT_OPTIONS,...n};let r=n.width??200,i=n.height??200,a=g.from({vertex:{source:X,entryPoint:`mainVertex`},fragment:{source:xs,entryPoint:`mainFragment`}}),o=m.from({vertex:Y,fragment:bs,name:`convolution-filter`});super({gpuProgram:a,glProgram:o,resources:{convolutionUniforms:{uMatrix:{value:n.matrix,type:`mat3x3<f32>`},uTexelSize:{value:{x:1/r,y:1/i},type:`vec2<f32>`}}}}),ws(this,`uniforms`),this.uniforms=this.resources.convolutionUniforms.uniforms,this.width=r,this.height=i}get matrix(){return this.uniforms.uMatrix}set matrix(e){e.forEach((e,t)=>{this.uniforms.uMatrix[t]=e})}get width(){return 1/this.uniforms.uTexelSize.x}set width(e){this.uniforms.uTexelSize.x=1/e}get height(){return 1/this.uniforms.uTexelSize.y}set height(e){this.uniforms.uTexelSize.y=1/e}},`DEFAULT_OPTIONS`,{matrix:new Float32Array(9),width:200,height:200});var Ts=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec4 uLine;
uniform vec2 uNoise;
uniform vec3 uVignette;
uniform float uSeed;
uniform float uTime;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

const float SQRT_2 = 1.414213;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

float vignette(vec3 co, vec2 coord)
{
    float outter = SQRT_2 - uVignette[0] * SQRT_2;
    vec2 dir = vec2(0.5) - coord;
    dir.y *= uDimensions.y / uDimensions.x;
    float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignette[2] * SQRT_2), 0.0, 1.0);
    return darker + (1.0 - darker) * (1.0 - uVignette[1]);
}

float noise(vec2 coord)
{
    vec2 pixelCoord = coord * uInputSize.xy;
    pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
    pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
    return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}

vec3 interlaceLines(vec3 co, vec2 coord)
{
    vec3 color = co;

    float curvature = uLine[0];
    float lineWidth = uLine[1];
    float lineContrast = uLine[2];
    float verticalLine = uLine[3];

    vec2 dir = vec2(coord * uInputSize.xy / uDimensions - 0.5);

    float _c = curvature > 0. ? curvature : 1.;
    float k = curvature > 0. ? (length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;
    vec2 uv = dir * k;
    float v = verticalLine > 0.5 ? uv.x * uDimensions.x : uv.y * uDimensions.y;
    v *= min(1.0, 2.0 / lineWidth ) / _c;
    float j = 1. + cos(v * 1.2 - uTime) * 0.5 * lineContrast;
    color *= j;

    float segment = verticalLine > 0.5 ? mod((dir.x + .5) * uDimensions.x, 4.) : mod((dir.y + .5) * uDimensions.y, 4.);
    color *= 0.99 + ceil(segment) * 0.015;

    return color;
}

void main(void)
{
    finalColor = texture(uTexture, vTextureCoord);
    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions;

    if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
    {
        float n = noise(vTextureCoord);
        finalColor += vec4(n, n, n, finalColor.a);
    }

    if (uVignette[0] > 0.)
    {
        float v = vignette(finalColor.rgb, coord);
        finalColor *= vec4(v, v, v, finalColor.a);
    }

    if (uLine[1] > 0.0)
    {
        finalColor = vec4(interlaceLines(finalColor.rgb, vTextureCoord), finalColor.a);  
    }
}
`,Es=`struct CRTUniforms {
    uLine: vec4<f32>,
    uNoise: vec2<f32>,
    uVignette: vec3<f32>,
    uSeed: f32,
    uTime: f32,
    uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> crtUniforms : CRTUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let coord: vec2<f32> = uv * gfu.uInputSize.xy / crtUniforms.uDimensions;

  let uNoise = crtUniforms.uNoise;

  if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
  {
    color += vec4<f32>(vec3<f32>(noise(uv)), color.a);
  }

  if (crtUniforms.uVignette[0] > 0.)
  {
    color *= vec4<f32>(vec3<f32>(vignette(color.rgb, coord)), color.a);
  }

  if (crtUniforms.uLine[1] > 0.0)
  {
    color = vec4<f32>(vec3<f32>(interlaceLines(color.rgb, uv)), color.a);  
  }

  return color;
}

const SQRT_2: f32 = 1.414213;

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn rand(co: vec2<f32>) -> f32
{
  return fract(sin(dot(co, vec2<f32>(12.9898, 78.233))) * 43758.5453);
}

fn vignette(co: vec3<f32>, coord: vec2<f32>) -> f32
{
  let uVignette = crtUniforms.uVignette;
  let uDimensions = crtUniforms.uDimensions;
  
  let outter: f32 = SQRT_2 - uVignette[0] * SQRT_2;
  var dir: vec2<f32> = vec2<f32>(0.5) - coord;
  dir.y *= uDimensions.y / uDimensions.x;
  let darker: f32 = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignette[2] * SQRT_2), 0.0, 1.0);
  return darker + (1.0 - darker) * (1.0 - uVignette[1]);
}

fn noise(coord: vec2<f32>) -> f32
{
  let uNoise = crtUniforms.uNoise;
  let uSeed = crtUniforms.uSeed;

  var pixelCoord: vec2<f32> = coord * gfu.uInputSize.xy;
  pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
  pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
  return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}

fn interlaceLines(co: vec3<f32>, coord: vec2<f32>) -> vec3<f32>
{
  var color = co;

  let uDimensions = crtUniforms.uDimensions;

  let curvature: f32 = crtUniforms.uLine[0];
  let lineWidth: f32 = crtUniforms.uLine[1];
  let lineContrast: f32 = crtUniforms.uLine[2];
  let verticalLine: f32 = crtUniforms.uLine[3];

  let dir: vec2<f32> = vec2<f32>(coord * gfu.uInputSize.xy / uDimensions - 0.5);

  let _c: f32 = select(1., curvature, curvature > 0.);
  let k: f32 = select(1., (length(dir * dir) * 0.25 * _c * _c + 0.935 * _c), curvature > 0.);
  let uv: vec2<f32> = dir * k;
  let v: f32 = select(uv.y * uDimensions.y, uv.x * uDimensions.x, verticalLine > 0.5) * min(1.0, 2.0 / lineWidth ) / _c;
  let j: f32 = 1. + cos(v * 1.2 - crtUniforms.uTime) * 0.5 * lineContrast;
  color *= j;

  let segment: f32 = select(modulo((dir.y + .5) * uDimensions.y, 4.), modulo((dir.x + .5) * uDimensions.x, 4.), verticalLine > 0.5);
  color *= 0.99 + ceil(segment) * 0.015;

  return color;
}`,Ds=Object.defineProperty,Os=(e,t,n)=>t in e?Ds(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ks=(e,t,n)=>(Os(e,typeof t==`symbol`?t:t+``,n),n);ks(class e extends D{constructor(t){t={...e.DEFAULT_OPTIONS,...t};let n=g.from({vertex:{source:X,entryPoint:`mainVertex`},fragment:{source:Es,entryPoint:`mainFragment`}}),r=m.from({vertex:Y,fragment:Ts,name:`crt-filter`});super({gpuProgram:n,glProgram:r,resources:{crtUniforms:{uLine:{value:new Float32Array(4),type:`vec4<f32>`},uNoise:{value:new Float32Array(2),type:`vec2<f32>`},uVignette:{value:new Float32Array(3),type:`vec3<f32>`},uSeed:{value:t.seed,type:`f32`},uTime:{value:t.time,type:`f32`},uDimensions:{value:new Float32Array(2),type:`vec2<f32>`}}}}),ks(this,`uniforms`),ks(this,`seed`),ks(this,`time`),this.uniforms=this.resources.crtUniforms.uniforms,Object.assign(this,t)}apply(e,t,n,r){this.uniforms.uDimensions[0]=t.frame.width,this.uniforms.uDimensions[1]=t.frame.height,this.uniforms.uSeed=this.seed,this.uniforms.uTime=this.time,e.applyFilter(this,t,n,r)}get curvature(){return this.uniforms.uLine[0]}set curvature(e){this.uniforms.uLine[0]=e}get lineWidth(){return this.uniforms.uLine[1]}set lineWidth(e){this.uniforms.uLine[1]=e}get lineContrast(){return this.uniforms.uLine[2]}set lineContrast(e){this.uniforms.uLine[2]=e}get verticalLine(){return this.uniforms.uLine[3]>.5}set verticalLine(e){this.uniforms.uLine[3]=+!!e}get noise(){return this.uniforms.uNoise[0]}set noise(e){this.uniforms.uNoise[0]=e}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(e){this.uniforms.uNoise[1]=e}get vignetting(){return this.uniforms.uVignette[0]}set vignetting(e){this.uniforms.uVignette[0]=e}get vignettingAlpha(){return this.uniforms.uVignette[1]}set vignettingAlpha(e){this.uniforms.uVignette[1]=e}get vignettingBlur(){return this.uniforms.uVignette[2]}set vignettingBlur(e){this.uniforms.uVignette[2]=e}},`DEFAULT_OPTIONS`,{curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0,seed:0});var As=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uAngle;
uniform float uScale;
uniform bool uGrayScale;

uniform vec4 uInputSize;

float pattern()
{
    float s = sin(uAngle), c = cos(uAngle);
    vec2 tex = vTextureCoord * uInputSize.xy;
    vec2 point = vec2(
        c * tex.x - s * tex.y,
        s * tex.x + c * tex.y
    ) * uScale;
    return (sin(point.x) * sin(point.y)) * 4.0;
    }

    void main()
    {
    vec4 color = texture(uTexture, vTextureCoord);
    vec3 colorRGB = vec3(color);

    if (uGrayScale)
    {
        colorRGB = vec3(color.r + color.g + color.b) / 3.0;
    }

    finalColor = vec4(colorRGB * 10.0 - 5.0 + pattern(), color.a);
}
`,js=`struct DotUniforms {
  uScale:f32,
  uAngle:f32,
  uGrayScale:f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> dotUniforms : DotUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  let color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let gray: vec3<f32> = vec3<f32>(dot(color.rgb, vec3<f32>(0.299, 0.587, 0.114)));
  // dotUniforms.uGrayScale == 1 doesn't ever pass so it is converted to a float and compared to 0.5 instead 
  let finalColor: vec3<f32> = select(color.rgb, gray, f32(dotUniforms.uGrayScale) >= 0.5);

  return vec4<f32>(finalColor * 10.0 - 5.0 + pattern(uv), color.a);
}

fn pattern(uv: vec2<f32>) -> f32
{
  let s: f32 = sin(dotUniforms.uAngle);
  let c: f32 = cos(dotUniforms.uAngle);
  
  let tex: vec2<f32> = uv * gfu.uInputSize.xy;
  
  let p: vec2<f32> = vec2<f32>(
      c * tex.x - s * tex.y,
      s * tex.x + c * tex.y
  ) * dotUniforms.uScale;

  return (sin(p.x) * sin(p.y)) * 4.0;
}`,Ms=Object.defineProperty,Ns=(e,t,n)=>t in e?Ms(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;((e,t,n)=>(Ns(e,typeof t==`symbol`?t:t+``,n),n))(class e extends D{constructor(...t){let n=t[0]??{};typeof n==`number`&&(f(`6.0.0`,`DotFilter constructor params are now options object. See params: { scale, angle, grayscale }`),n={scale:n},t[1]!==void 0&&(n.angle=t[1]),t[2]!==void 0&&(n.grayscale=t[2])),n={...e.DEFAULT_OPTIONS,...n};let r={uScale:{value:n.scale,type:`f32`},uAngle:{value:n.angle,type:`f32`},uGrayScale:{value:+!!n.grayscale,type:`f32`}},i=g.from({vertex:{source:X,entryPoint:`mainVertex`},fragment:{source:js,entryPoint:`mainFragment`}}),a=m.from({vertex:Y,fragment:As,name:`dot-filter`});super({gpuProgram:i,glProgram:a,resources:{dotUniforms:r}})}get scale(){return this.resources.dotUniforms.uniforms.uScale}set scale(e){this.resources.dotUniforms.uniforms.uScale=e}get angle(){return this.resources.dotUniforms.uniforms.uAngle}set angle(e){this.resources.dotUniforms.uniforms.uAngle=e}get grayscale(){return this.resources.dotUniforms.uniforms.uGrayScale===1}set grayscale(e){this.resources.dotUniforms.uniforms.uGrayScale=+!!e}},`DEFAULT_OPTIONS`,{scale:1,angle:5,grayscale:!0});var Ps=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uAlpha;
uniform vec3 uColor;
uniform vec2 uOffset;

uniform vec4 uInputSize;

void main(void){
    vec4 sample = texture(uTexture, vTextureCoord - uOffset * uInputSize.zw);

    // Premultiply alpha
    sample.rgb = uColor.rgb * sample.a;

    // alpha user alpha
    sample *= uAlpha;

    finalColor = sample;
}`,Fs=`struct DropShadowUniforms {
  uAlpha: f32,
  uColor: vec3<f32>,
  uOffset: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> dropShadowUniforms : DropShadowUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv - dropShadowUniforms.uOffset * gfu.uInputSize.zw);

  // Premultiply alpha
  color = vec4<f32>(vec3<f32>(dropShadowUniforms.uColor.rgb * color.a), color.a);
  // alpha user alpha
  color *= dropShadowUniforms.uAlpha;

  return color;
}`,Is=Object.defineProperty,Ls=(e,t,n)=>t in e?Is(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Rs=(e,t,n)=>(Ls(e,typeof t==`symbol`?t:t+``,n),n),zs=class e extends D{constructor(t){t={...e.DEFAULT_OPTIONS,...t};let n=g.from({vertex:{source:X,entryPoint:`mainVertex`},fragment:{source:Fs,entryPoint:`mainFragment`}}),r=m.from({vertex:Y,fragment:Ps,name:`drop-shadow-filter`});super({gpuProgram:n,glProgram:r,resources:{dropShadowUniforms:{uAlpha:{value:t.alpha,type:`f32`},uColor:{value:new Float32Array(3),type:`vec3<f32>`},uOffset:{value:t.offset,type:`vec2<f32>`}}},resolution:t.resolution}),Rs(this,`uniforms`),Rs(this,`shadowOnly`,!1),Rs(this,`_color`),Rs(this,`_blurFilter`),Rs(this,`_basePass`),this.uniforms=this.resources.dropShadowUniforms.uniforms,this._color=new y,this.color=t.color??0,this._blurFilter=new co({strength:t.kernels??t.blur,quality:t.kernels?void 0:t.quality}),this._basePass=new D({gpuProgram:g.from({vertex:{source:X,entryPoint:`mainVertex`},fragment:{source:`
                    @group(0) @binding(1) var uTexture: texture_2d<f32>; 
                    @group(0) @binding(2) var uSampler: sampler;
                    @fragment
                    fn mainFragment(
                        @builtin(position) position: vec4<f32>,
                        @location(0) uv : vec2<f32>
                    ) -> @location(0) vec4<f32> {
                        return textureSample(uTexture, uSampler, uv);
                    }
                    `,entryPoint:`mainFragment`}}),glProgram:m.from({vertex:Y,fragment:`
                in vec2 vTextureCoord;
                out vec4 finalColor;
                uniform sampler2D uTexture;

                void main(void){
                    finalColor = texture(uTexture, vTextureCoord);
                }
                `,name:`drop-shadow-filter`}),resources:{}}),Object.assign(this,t)}apply(e,t,n,r){let i=s.getSameSizeTexture(t);e.applyFilter(this,t,i,!0),this._blurFilter.apply(e,i,n,r),this.shadowOnly||e.applyFilter(this._basePass,t,n,!1),s.returnTexture(i)}get offset(){return this.uniforms.uOffset}set offset(e){this.uniforms.uOffset=e,this._updatePadding()}get offsetX(){return this.offset.x}set offsetX(e){this.offset.x=e,this._updatePadding()}get offsetY(){return this.offset.y}set offsetY(e){this.offset.y=e,this._updatePadding()}get color(){return this._color.value}set color(e){this._color.setValue(e);let[t,n,r]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=n,this.uniforms.uColor[2]=r}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}get blur(){return this._blurFilter.strength}set blur(e){this._blurFilter.strength=e,this._updatePadding()}get quality(){return this._blurFilter.quality}set quality(e){this._blurFilter.quality=e,this._updatePadding()}get kernels(){return this._blurFilter.kernels}set kernels(e){this._blurFilter.kernels=e}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(e){typeof e==`number`&&(e={x:e,y:e}),Array.isArray(e)&&(e={x:e[0],y:e[1]}),this._blurFilter.pixelSize=e}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(e){this._blurFilter.pixelSizeX=e}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(e){this._blurFilter.pixelSizeY=e}_updatePadding(){this.padding=Math.max(Math.abs(this.offsetX),Math.abs(this.offsetY))+this.blur*2+this.quality*4}};Rs(zs,`DEFAULT_OPTIONS`,{offset:{x:4,y:4},color:0,alpha:.5,shadowOnly:!1,kernels:void 0,blur:2,quality:3,pixelSize:{x:1,y:1},resolution:1});var Bs=zs,Vs=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uDisplacementMap;
uniform float uSeed;
uniform vec2 uDimensions;
uniform float uAspect;
uniform float uFillMode;
uniform float uOffset;
uniform float uDirection;
uniform vec2 uRed;
uniform vec2 uGreen;
uniform vec2 uBlue;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const int TRANSPARENT = 0;
const int ORIGINAL = 1;
const int LOOP = 2;
const int CLAMP = 3;
const int MIRROR = 4;

void main(void)
{
    vec2 coord = (vTextureCoord * uInputSize.xy) / uDimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
        return;
    }

    float sinDir = sin(uDirection);
    float cosDir = cos(uDirection);

    float cx = coord.x - 0.5;
    float cy = (coord.y - 0.5) * uAspect;
    float ny = (-sinDir * cx + cosDir * cy) / uAspect + 0.5;

    // displacementMap: repeat
    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);

    // displacementMap: mirror
    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);

    vec4 dc = texture(uDisplacementMap, vec2(0.5, ny));

    float displacement = (dc.r - dc.g) * (uOffset / uInputSize.x);

    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * uAspect);

    int fillMode = int(uFillMode);

    if (fillMode == CLAMP) {
        coord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    } else {
        if( coord.x > uInputClamp.z ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x -= uInputClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x = uInputClamp.z * 2.0 - coord.x;
            }
        } else if( coord.x < uInputClamp.x ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x += uInputClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x *= -uInputClamp.z;
            }
        }

        if( coord.y > uInputClamp.w ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y -= uInputClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y = uInputClamp.w * 2.0 - coord.y;
            }
        } else if( coord.y < uInputClamp.y ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y += uInputClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y *= -uInputClamp.w;
            }
        }
    }

    finalColor.r = texture(uTexture, coord + uRed * (1.0 - uSeed * 0.4) / uInputSize.xy).r;
    finalColor.g = texture(uTexture, coord + uGreen * (1.0 - uSeed * 0.3) / uInputSize.xy).g;
    finalColor.b = texture(uTexture, coord + uBlue * (1.0 - uSeed * 0.2) / uInputSize.xy).b;
    finalColor.a = texture(uTexture, coord).a;
}
`,Hs=`struct GlitchUniforms {
  uSeed: f32,
  uDimensions: vec2<f32>,
  uAspect: f32,
  uFillMode: f32,
  uOffset: f32,
  uDirection: f32,
  uRed: vec2<f32>,
  uGreen: vec2<f32>,
  uBlue: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> glitchUniforms : GlitchUniforms;
@group(1) @binding(1) var uDisplacementMap: texture_2d<f32>; 
@group(1) @binding(2) var uDisplacementSampler: sampler; 

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uSeed: f32 = glitchUniforms.uSeed;
  let uDimensions: vec2<f32> = glitchUniforms.uDimensions;
  let uAspect: f32 = glitchUniforms.uAspect;
  let uOffset: f32 = glitchUniforms.uOffset;
  let uDirection: f32 = glitchUniforms.uDirection;
  let uRed: vec2<f32> = glitchUniforms.uRed;
  let uGreen: vec2<f32> = glitchUniforms.uGreen;
  let uBlue: vec2<f32> = glitchUniforms.uBlue;

  let uInputSize: vec4<f32> = gfu.uInputSize;
  let uInputClamp: vec4<f32> = gfu.uInputClamp;

  var discarded: bool = false;
  var coord: vec2<f32> = (uv * uInputSize.xy) / uDimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
      discarded = true;
    }

    let sinDir: f32 = sin(uDirection);
    let cosDir: f32 = cos(uDirection);

    let cx: f32 = coord.x - 0.5;
    let cy: f32 = (coord.y - 0.5) * uAspect;
    var ny: f32 = (-sinDir * cx + cosDir * cy) / uAspect + 0.5;

    ny = select(select(ny, -ny, ny < 0.0), 2.0 - ny, ny > 1.0);

    let dc: vec4<f32> = textureSample(uDisplacementMap, uDisplacementSampler, vec2<f32>(0.5, ny));

    let displacement: f32 = (dc.r - dc.g) * (uOffset / uInputSize.x);

    coord = uv + vec2<f32>(cosDir * displacement, sinDir * displacement * uAspect);

    let fillMode: i32 = i32(glitchUniforms.uFillMode);

    if (fillMode == CLAMP) {
      coord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    } else {
      if (coord.x > uInputClamp.z) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.x = coord.x - uInputClamp.z;
        } else if (fillMode == MIRROR) {
          coord.x = uInputClamp.z * 2.0 - coord.x;
        }
      } else if (coord.x < uInputClamp.x) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.x = coord.x + uInputClamp.z;
        } else if (fillMode == MIRROR) {
          coord.x = coord.x * -uInputClamp.z;
        }
      }

      if (coord.y > uInputClamp.w) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.y = coord.y - uInputClamp.w;
        } else if (fillMode == MIRROR) {
          coord.y = uInputClamp.w * 2.0 - coord.y;
        }
      } else if (coord.y < uInputClamp.y) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.y = coord.y + uInputClamp.w;
        } else if (fillMode == MIRROR) {
          coord.y = coord.y * -uInputClamp.w;
        }
      }
    }

    let seedR: f32 = 1.0 - uSeed * 0.4;
    let seedG: f32 = 1.0 - uSeed * 0.3;
    let seedB: f32 = 1.0 - uSeed * 0.2;

    let offsetR: vec2<f32> = vec2(uRed.x * seedR / uInputSize.x, uRed.y * seedR / uInputSize.y);
    let offsetG: vec2<f32> = vec2(uGreen.x * seedG / uInputSize.x, uGreen.y * seedG / uInputSize.y);
    let offsetB: vec2<f32> = vec2(uBlue.x * seedB / uInputSize.x, uBlue.y * seedB / uInputSize.y);

    let r = textureSample(uTexture, uSampler, coord + offsetR).r;
    let g = textureSample(uTexture, uSampler, coord + offsetG).g;
    let b = textureSample(uTexture, uSampler, coord + offsetB).b;
    let a = textureSample(uTexture, uSampler, coord).a;

    return select(vec4<f32>(r, g, b, a), vec4<f32>(0.0,0.0,0.0,0.0), discarded);
}

const TRANSPARENT: i32 = 0;
const ORIGINAL: i32 = 1;
const LOOP: i32 = 2;
const CLAMP: i32 = 3;
const MIRROR: i32 = 4;`,Us=Object.defineProperty,Ws=(e,t,n)=>t in e?Us(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Q=(e,t,n)=>(Ws(e,typeof t==`symbol`?t:t+``,n),n);Q(class e extends D{constructor(t){t={...e.defaults,...t};let r=g.from({vertex:{source:X,entryPoint:`mainVertex`},fragment:{source:Hs,entryPoint:`mainFragment`}}),i=m.from({vertex:Y,fragment:Vs,name:`glitch-filter`}),a=document.createElement(`canvas`);a.width=4,a.height=t.sampleSize??512;let o=new n({source:new ae({resource:a})});super({gpuProgram:r,glProgram:i,resources:{glitchUniforms:{uSeed:{value:t?.seed??0,type:`f32`},uDimensions:{value:new Float32Array(2),type:`vec2<f32>`},uAspect:{value:1,type:`f32`},uFillMode:{value:t?.fillMode??0,type:`f32`},uOffset:{value:t?.offset??100,type:`f32`},uDirection:{value:t?.direction??0,type:`f32`},uRed:{value:t.red,type:`vec2<f32>`},uGreen:{value:t.green,type:`vec2<f32>`},uBlue:{value:t.blue,type:`vec2<f32>`}},uDisplacementMap:o.source,uDisplacementSampler:o.source.style}}),Q(this,`uniforms`),Q(this,`average`,!1),Q(this,`minSize`,8),Q(this,`sampleSize`,512),Q(this,`_canvas`),Q(this,`texture`),Q(this,`_slices`,0),Q(this,`_sizes`,new Float32Array(1)),Q(this,`_offsets`,new Float32Array(1)),this.uniforms=this.resources.glitchUniforms.uniforms,this._canvas=a,this.texture=o,Object.assign(this,t)}apply(e,t,n,r){let{width:i,height:a}=t.frame;this.uniforms.uDimensions[0]=i,this.uniforms.uDimensions[1]=a,this.uniforms.uAspect=a/i,e.applyFilter(this,t,n,r)}_randomizeSizes(){let e=this._sizes,t=this._slices-1,n=this.sampleSize,r=Math.min(this.minSize/n,.9/this._slices);if(this.average){let n=this._slices,i=1;for(let a=0;a<t;a++){let t=i/(n-a),o=Math.max(t*(1-Math.random()*.6),r);e[a]=o,i-=o}e[t]=i}else{let n=1,i=Math.sqrt(1/this._slices);for(let a=0;a<t;a++){let t=Math.max(i*n*Math.random(),r);e[a]=t,n-=t}e[t]=n}this.shuffle()}shuffle(){let e=this._sizes,t=this._slices-1;for(let n=t;n>0;n--){let t=Math.random()*n>>0,r=e[n];e[n]=e[t],e[t]=r}}_randomizeOffsets(){for(let e=0;e<this._slices;e++)this._offsets[e]=Math.random()*(Math.random()<.5?-1:1)}refresh(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()}redraw(){let e=this.sampleSize,t=this.texture,n=this._canvas.getContext(`2d`);n.clearRect(0,0,8,e);let r,i=0;for(let t=0;t<this._slices;t++){r=Math.floor(this._offsets[t]*256);let a=this._sizes[t]*e;n.fillStyle=`rgba(${r>0?r:0}, ${r<0?-r:0}, 0, 1)`,n.fillRect(0,i>>0,e,a+1>>0),i+=a}t.source.update()}set sizes(e){let t=Math.min(this._slices,e.length);for(let n=0;n<t;n++)this._sizes[n]=e[n]}get sizes(){return this._sizes}set offsets(e){let t=Math.min(this._slices,e.length);for(let n=0;n<t;n++)this._offsets[n]=e[n]}get offsets(){return this._offsets}get slices(){return this._slices}set slices(e){this._slices!==e&&(this._slices=e,this._sizes=new Float32Array(e),this._offsets=new Float32Array(e),this.refresh())}get offset(){return this.uniforms.uOffset}set offset(e){this.uniforms.uOffset=e}get seed(){return this.uniforms.uSeed}set seed(e){this.uniforms.uSeed=e}get fillMode(){return this.uniforms.uFillMode}set fillMode(e){this.uniforms.uFillMode=e}get direction(){return this.uniforms.uDirection/_}set direction(e){this.uniforms.uDirection=e*_}get red(){return this.uniforms.uRed}set red(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uRed=e}get green(){return this.uniforms.uGreen}set green(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uGreen=e}get blue(){return this.uniforms.uBlue}set blue(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uBlue=e}destroy(){this.texture?.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null}},`defaults`,{slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:{x:0,y:0},green:{x:0,y:0},blue:{x:0,y:0},minSize:8,sampleSize:512});var Gs=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uStrength;
uniform vec3 uColor;
uniform float uKnockout;
uniform float uAlpha;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const float PI = 3.14159265358979323846264;

// Hard-assignment of DIST and ANGLE_STEP_SIZE instead of using uDistance and uQuality to allow them to be use on GLSL loop conditions
const float DIST = __DIST__;
const float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.);
const float ANGLE_STEP_NUM = ceil(PI * 2. / ANGLE_STEP_SIZE);
const float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.) / 2.;

void main(void) {
    vec2 px = vec2(1.) / uInputSize.xy;

    float totalAlpha = 0.;

    vec2 direction;
    vec2 displaced;
    vec4 curColor;

    for (float angle = 0.; angle < PI * 2.; angle += ANGLE_STEP_SIZE) {
      direction = vec2(cos(angle), sin(angle)) * px;

      for (float curDistance = 0.; curDistance < DIST; curDistance++) {
          displaced = clamp(vTextureCoord + direction * (curDistance + 1.), uInputClamp.xy, uInputClamp.zw);
          curColor = texture(uTexture, displaced);
          totalAlpha += (DIST - curDistance) * curColor.a;
      }
    }
    
    curColor = texture(uTexture, vTextureCoord);

    vec4 glowColor = vec4(uColor, uAlpha);
    bool knockout = uKnockout > .5;
    float innerStrength = uStrength[0];
    float outerStrength = uStrength[1];

    float alphaRatio = totalAlpha / MAX_TOTAL_ALPHA;
    float innerGlowAlpha = (1. - alphaRatio) * innerStrength * curColor.a * uAlpha;
    float innerGlowStrength = min(1., innerGlowAlpha);
    
    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);
    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a) * uAlpha;
    float outerGlowStrength = min(1. - innerColor.a, outerGlowAlpha);
    vec4 outerGlowColor = outerGlowStrength * glowColor.rgba;

    if (knockout) {
      float resultAlpha = outerGlowAlpha + innerGlowAlpha;
      finalColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);
    }
    else {
      finalColor = innerColor + outerGlowColor;
    }
}
`,Ks=`struct GlowUniforms {
  uDistance: f32,
  uStrength: vec2<f32>,
  uColor: vec3<f32>,
  uAlpha: f32,
  uQuality: f32,
  uKnockout: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> glowUniforms : GlowUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let quality = glowUniforms.uQuality;
  let distance = glowUniforms.uDistance;

  let dist: f32 = glowUniforms.uDistance;
  let angleStepSize: f32 = min(1. / quality / distance, PI * 2.0);
  let angleStepNum: f32 = ceil(PI * 2.0 / angleStepSize);

  let px: vec2<f32> = vec2<f32>(1.0 / gfu.uInputSize.xy);

  var totalAlpha: f32 = 0.0;

  var direction: vec2<f32>;
  var displaced: vec2<f32>;
  var curColor: vec4<f32>;

  for (var angle = 0.0; angle < PI * 2.0; angle += angleStepSize) {
    direction = vec2<f32>(cos(angle), sin(angle)) * px;
    for (var curDistance = 0.0; curDistance < dist; curDistance+=1) {
      displaced = vec2<f32>(clamp(uv + direction * (curDistance + 1.0), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
      curColor = textureSample(uTexture, uSampler, displaced);
      totalAlpha += (dist - curDistance) * curColor.a;
    }
  }
    
  curColor = textureSample(uTexture, uSampler, uv);

  let glowColorRGB = glowUniforms.uColor;
  let glowAlpha = glowUniforms.uAlpha;
  let glowColor = vec4<f32>(glowColorRGB, glowAlpha);
  let knockout: bool = glowUniforms.uKnockout > 0.5;
  let innerStrength = glowUniforms.uStrength[0];
  let outerStrength = glowUniforms.uStrength[1];

  let alphaRatio: f32 = (totalAlpha / (angleStepNum * dist * (dist + 1.0) / 2.0));
  let innerGlowAlpha: f32 = (1.0 - alphaRatio) * innerStrength * curColor.a * glowAlpha;
  let innerGlowStrength: f32 = min(1.0, innerGlowAlpha);
  
  let innerColor: vec4<f32> = mix(curColor, glowColor, innerGlowStrength);
  let outerGlowAlpha: f32 = alphaRatio * outerStrength * (1. - curColor.a) * glowAlpha;
  let outerGlowStrength: f32 = min(1.0 - innerColor.a, outerGlowAlpha);
  let outerGlowColor: vec4<f32> = outerGlowStrength * glowColor.rgba;
  
  if (knockout) {
    let resultAlpha: f32 = outerGlowAlpha + innerGlowAlpha;
    return vec4<f32>(glowColor.rgb * resultAlpha, resultAlpha);
  }
  else {
    return innerColor + outerGlowColor;
  }
}

const PI: f32 = 3.14159265358979323846264;`,qs=Object.defineProperty,Js=(e,t,n)=>t in e?qs(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ys=(e,t,n)=>(Js(e,typeof t==`symbol`?t:t+``,n),n);Ys(class e extends D{constructor(t){t={...e.DEFAULT_OPTIONS,...t};let n=t.distance??10,r=t.quality??.1,i=g.from({vertex:{source:X,entryPoint:`mainVertex`},fragment:{source:Ks,entryPoint:`mainFragment`}}),a=m.from({vertex:Y,fragment:Gs.replace(/__ANGLE_STEP_SIZE__/gi,`${(1/r/n).toFixed(7)}`).replace(/__DIST__/gi,`${n.toFixed(0)}.0`),name:`glow-filter`});super({gpuProgram:i,glProgram:a,resources:{glowUniforms:{uDistance:{value:n,type:`f32`},uStrength:{value:[t.innerStrength,t.outerStrength],type:`vec2<f32>`},uColor:{value:new Float32Array(3),type:`vec3<f32>`},uAlpha:{value:t.alpha,type:`f32`},uQuality:{value:r,type:`f32`},uKnockout:{value:t?.knockout??!1?1:0,type:`f32`}}},padding:n}),Ys(this,`uniforms`),Ys(this,`_color`),this.uniforms=this.resources.glowUniforms.uniforms,this._color=new y,this.color=t.color??16777215}get distance(){return this.uniforms.uDistance}set distance(e){this.uniforms.uDistance=this.padding=e}get innerStrength(){return this.uniforms.uStrength[0]}set innerStrength(e){this.uniforms.uStrength[0]=e}get outerStrength(){return this.uniforms.uStrength[1]}set outerStrength(e){this.uniforms.uStrength[1]=e}get color(){return this._color.value}set color(e){this._color.setValue(e);let[t,n,r]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=n,this.uniforms.uColor[2]=r}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}get quality(){return this.uniforms.uQuality}set quality(e){this.uniforms.uQuality=e}get knockout(){return this.uniforms.uKnockout===1}set knockout(e){this.uniforms.uKnockout=+!!e}},`DEFAULT_OPTIONS`,{distance:10,outerStrength:4,innerStrength:0,color:16777215,alpha:1,quality:.1,knockout:!1});var Xs=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uDimensions;
uniform float uParallel;
uniform vec2 uLight;
uniform float uAspect;
uniform float uTime;
uniform vec3 uRay;

uniform vec4 uInputSize;

\${PERLIN}

void main(void) {
    vec2 uDimensions = uDimensions;
    bool uParallel = uParallel > 0.5;
    vec2 uLight = uLight;
    float uAspect = uAspect;

    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions;

    float d;

    if (uParallel) {
        float _cos = uLight.x;
        float _sin = uLight.y;
        d = (_cos * coord.x) + (_sin * coord.y * uAspect);
    } else {
        float dx = coord.x - uLight.x / uDimensions.x;
        float dy = (coord.y - uLight.y / uDimensions.y) * uAspect;
        float dis = sqrt(dx * dx + dy * dy) + 0.00001;
        d = dy / dis;
    }

    float uTime = uTime;
    vec3 uRay = uRay;

    float gain = uRay[0];
    float lacunarity = uRay[1];
    float alpha = uRay[2];

    vec3 dir = vec3(d, d, 0.0);
    float noise = turb(dir + vec3(uTime, 0.0, 62.1 + uTime) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);
    noise = mix(noise, 0.0, 0.3);
    //fade vertically.
    vec4 mist = vec4(vec3(noise), 1.0) * (1.0 - coord.y);
    mist.a = 1.0;
    // apply user alpha
    mist *= alpha;

    finalColor = texture(uTexture, vTextureCoord) + mist;
}
`,Zs=`struct GodrayUniforms {
  uLight: vec2<f32>,
  uParallel: f32,
  uAspect: f32,
  uTime: f32,
  uRay: vec3<f32>,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> godrayUniforms : GodrayUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uDimensions: vec2<f32> = godrayUniforms.uDimensions;
  let uParallel: bool = godrayUniforms.uParallel > 0.5;
  let uLight: vec2<f32> = godrayUniforms.uLight;
  let uAspect: f32 = godrayUniforms.uAspect;

  let coord: vec2<f32> = uv * gfu.uInputSize.xy / uDimensions;

  var d: f32;

  if (uParallel) {
    let _cos: f32 = uLight.x;
    let _sin: f32 = uLight.y;
    d = (_cos * coord.x) + (_sin * coord.y * uAspect);
  } else {
    let dx: f32 = coord.x - uLight.x / uDimensions.x;
    let dy: f32 = (coord.y - uLight.y / uDimensions.y) * uAspect;
    let dis: f32 = sqrt(dx * dx + dy * dy) + 0.00001;
    d = dy / dis;
  }

  let uTime: f32 = godrayUniforms.uTime;
  let uRay: vec3<f32> = godrayUniforms.uRay;
  
  let gain = uRay[0];
  let lacunarity = uRay[1];
  let alpha = uRay[2];

  let dir: vec3<f32> = vec3<f32>(d, d, 0.0);
  var noise: f32 = turb(dir + vec3<f32>(uTime, 0.0, 62.1 + uTime) * 0.05, vec3<f32>(480.0, 320.0, 480.0), lacunarity, gain);
  noise = mix(noise, 0.0, 0.3);
  //fade vertically.
  var mist: vec4<f32> = vec4<f32>(vec3<f32>(noise), 1.0) * (1.0 - coord.y);
  mist.a = 1.0;
  // apply user alpha
  mist *= alpha;
  return textureSample(uTexture, uSampler, uv) + mist;
}

\${PERLIN}`,Qs=`vec3 mod289(vec3 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 permute(vec4 x)
{
    return mod289(((x * 34.0) + 1.0) * x);
}
vec4 taylorInvSqrt(vec4 r)
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t)
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;
    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);
    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);
    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);
    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
float turb(vec3 P, vec3 rep, float lacunarity, float gain)
{
    float sum = 0.0;
    float sc = 1.0;
    float totalgain = 1.0;
    for (float i = 0.0; i < 6.0; i++)
    {
        sum += totalgain * pnoise(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}
`,$s=`// Taken from https://gist.github.com/munrocket/236ed5ba7e409b8bdf1ff6eca5dcdc39

fn moduloVec3(x: vec3<f32>, y: vec3<f32>) -> vec3<f32>
{
  return x - y * floor(x/y);
}
fn mod289Vec3(x: vec3<f32>) -> vec3<f32>
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
fn mod289Vec4(x: vec4<f32>) -> vec4<f32>
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
fn permute4(x: vec4<f32>) -> vec4<f32>
{
    return mod289Vec4(((x * 34.0) + 1.0) * x);
}
fn taylorInvSqrt(r: vec4<f32>) -> vec4<f32>
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
fn fade3(t: vec3<f32>) -> vec3<f32>
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
fn fade2(t: vec2<f32>) -> vec2<f32> { return t * t * t * (t * (t * 6. - 15.) + 10.); }

fn perlinNoise2(P: vec2<f32>) -> f32 {
  var Pi: vec4<f32> = floor(P.xyxy) + vec4<f32>(0., 0., 1., 1.);
  let Pf = fract(P.xyxy) - vec4<f32>(0., 0., 1., 1.);
  Pi = Pi % vec4<f32>(289.); // To avoid truncation effects in permutation
  let ix = Pi.xzxz;
  let iy = Pi.yyww;
  let fx = Pf.xzxz;
  let fy = Pf.yyww;
  let i = permute4(permute4(ix) + iy);
  var gx: vec4<f32> = 2. * fract(i * 0.0243902439) - 1.; // 1/41 = 0.024...
  let gy = abs(gx) - 0.5;
  let tx = floor(gx + 0.5);
  gx = gx - tx;
  var g00: vec2<f32> = vec2<f32>(gx.x, gy.x);
  var g10: vec2<f32> = vec2<f32>(gx.y, gy.y);
  var g01: vec2<f32> = vec2<f32>(gx.z, gy.z);
  var g11: vec2<f32> = vec2<f32>(gx.w, gy.w);
  let norm = 1.79284291400159 - 0.85373472095314 *
      vec4<f32>(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
  g00 = g00 * norm.x;
  g01 = g01 * norm.y;
  g10 = g10 * norm.z;
  g11 = g11 * norm.w;
  let n00 = dot(g00, vec2<f32>(fx.x, fy.x));
  let n10 = dot(g10, vec2<f32>(fx.y, fy.y));
  let n01 = dot(g01, vec2<f32>(fx.z, fy.z));
  let n11 = dot(g11, vec2<f32>(fx.w, fy.w));
  let fade_xy = fade2(Pf.xy);
  let n_x = mix(vec2<f32>(n00, n01), vec2<f32>(n10, n11), vec2<f32>(fade_xy.x));
  let n_xy = mix(n_x.x, n_x.y, fade_xy.y);
  return 2.3 * n_xy;
}

// Classic Perlin noise, periodic variant
fn perlinNoise3(P: vec3<f32>, rep: vec3<f32>) -> f32
{
    var Pi0: vec3<f32> = moduloVec3(floor(P), rep); // Integer part, modulo period
    var Pi1: vec3<f32> = moduloVec3(Pi0 + vec3<f32>(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289Vec3(Pi0);
    Pi1 = mod289Vec3(Pi1);
    let Pf0: vec3<f32> = fract(P); // Fractional part for interpolation
    let Pf1: vec3<f32> = Pf0 - vec3<f32>(1.0); // Fractional part - 1.0
    let ix: vec4<f32> = vec4<f32>(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    let iy: vec4<f32> = vec4<f32>(Pi0.yy, Pi1.yy);
    let iz0: vec4<f32> = Pi0.zzzz;
    let iz1: vec4<f32> = Pi1.zzzz;
    let ixy: vec4<f32> = permute4(permute4(ix) + iy);
    let ixy0: vec4<f32> = permute4(ixy + iz0);
    let ixy1: vec4<f32> = permute4(ixy + iz1);
    var gx0: vec4<f32> = ixy0 * (1.0 / 7.0);
    var gy0: vec4<f32> = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    let gz0: vec4<f32> = vec4<f32>(0.5) - abs(gx0) - abs(gy0);
    let sz0: vec4<f32> = step(gz0, vec4<f32>(0.0));
    gx0 -= sz0 * (step(vec4<f32>(0.0), gx0) - 0.5);
    gy0 -= sz0 * (step(vec4<f32>(0.0), gy0) - 0.5);
    var gx1: vec4<f32> = ixy1 * (1.0 / 7.0);
    var gy1: vec4<f32> = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    let gz1: vec4<f32> = vec4<f32>(0.5) - abs(gx1) - abs(gy1);
    let sz1: vec4<f32> = step(gz1, vec4<f32>(0.0));
    gx1 -= sz1 * (step(vec4<f32>(0.0), gx1) - 0.5);
    gy1 -= sz1 * (step(vec4<f32>(0.0), gy1) - 0.5);
    var g000: vec3<f32> = vec3<f32>(gx0.x, gy0.x, gz0.x);
    var g100: vec3<f32> = vec3<f32>(gx0.y, gy0.y, gz0.y);
    var g010: vec3<f32> = vec3<f32>(gx0.z, gy0.z, gz0.z);
    var g110: vec3<f32> = vec3<f32>(gx0.w, gy0.w, gz0.w);
    var g001: vec3<f32> = vec3<f32>(gx1.x, gy1.x, gz1.x);
    var g101: vec3<f32> = vec3<f32>(gx1.y, gy1.y, gz1.y);
    var g011: vec3<f32> = vec3<f32>(gx1.z, gy1.z, gz1.z);
    var g111: vec3<f32> = vec3<f32>(gx1.w, gy1.w, gz1.w);
    let norm0: vec4<f32> = taylorInvSqrt(vec4<f32>(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    let norm1: vec4<f32> = taylorInvSqrt(vec4<f32>(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    let n000: f32 = dot(g000, Pf0);
    let n100: f32 = dot(g100, vec3<f32>(Pf1.x, Pf0.yz));
    let n010: f32 = dot(g010, vec3<f32>(Pf0.x, Pf1.y, Pf0.z));
    let n110: f32 = dot(g110, vec3<f32>(Pf1.xy, Pf0.z));
    let n001: f32 = dot(g001, vec3<f32>(Pf0.xy, Pf1.z));
    let n101: f32 = dot(g101, vec3<f32>(Pf1.x, Pf0.y, Pf1.z));
    let n011: f32 = dot(g011, vec3<f32>(Pf0.x, Pf1.yz));
    let n111: f32 = dot(g111, Pf1);
    let fade_xyz: vec3<f32> = fade3(Pf0);
    let n_z: vec4<f32> = mix(vec4<f32>(n000, n100, n010, n110), vec4<f32>(n001, n101, n011, n111), fade_xyz.z);
    let n_yz: vec2<f32> = mix(n_z.xy, n_z.zw, fade_xyz.y);
    let n_xyz: f32 = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
fn turb(P: vec3<f32>, rep: vec3<f32>, lacunarity: f32, gain: f32) -> f32
{
    var sum: f32 = 0.0;
    var sc: f32 = 1.0;
    var totalgain: f32 = 1.0;
    for (var i = 0.0; i < 6.0; i += 1)
    {
        sum += totalgain * perlinNoise3(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}`,ec=Object.defineProperty,tc=(e,t,n)=>t in e?ec(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,nc=(e,t,n)=>(tc(e,typeof t==`symbol`?t:t+``,n),n);nc(class e extends D{constructor(t){t={...e.DEFAULT_OPTIONS,...t};let n=g.from({vertex:{source:X,entryPoint:`mainVertex`},fragment:{source:Zs.replace("${PERLIN}",$s),entryPoint:`mainFragment`}}),r=m.from({vertex:Y,fragment:Xs.replace("${PERLIN}",Qs),name:`god-ray-filter`});super({gpuProgram:n,glProgram:r,resources:{godrayUniforms:{uLight:{value:new Float32Array(2),type:`vec2<f32>`},uParallel:{value:0,type:`f32`},uAspect:{value:0,type:`f32`},uTime:{value:t.time,type:`f32`},uRay:{value:new Float32Array(3),type:`vec3<f32>`},uDimensions:{value:new Float32Array(2),type:`vec2<f32>`}}}}),nc(this,`uniforms`),nc(this,`time`,0),nc(this,`_angleLight`,[0,0]),nc(this,`_angle`,0),nc(this,`_center`),this.uniforms=this.resources.godrayUniforms.uniforms,Object.assign(this,t)}apply(e,t,n,r){let i=t.frame.width,a=t.frame.height;this.uniforms.uLight[0]=this.parallel?this._angleLight[0]:this._center.x,this.uniforms.uLight[1]=this.parallel?this._angleLight[1]:this._center.y,this.uniforms.uDimensions[0]=i,this.uniforms.uDimensions[1]=a,this.uniforms.uAspect=a/i,this.uniforms.uTime=this.time,e.applyFilter(this,t,n,r)}get angle(){return this._angle}set angle(e){this._angle=e;let t=e*_;this._angleLight[0]=Math.cos(t),this._angleLight[1]=Math.sin(t)}get parallel(){return this.uniforms.uParallel>.5}set parallel(e){this.uniforms.uParallel=+!!e}get center(){return this._center}set center(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this._center=e}get centerX(){return this.center.x}set centerX(e){this.center.x=e}get centerY(){return this.center.y}set centerY(e){this.center.y=e}get gain(){return this.uniforms.uRay[0]}set gain(e){this.uniforms.uRay[0]=e}get lacunarity(){return this.uniforms.uRay[1]}set lacunarity(e){this.uniforms.uRay[1]=e}get alpha(){return this.uniforms.uRay[2]}set alpha(e){this.uniforms.uRay[2]=e}},`DEFAULT_OPTIONS`,{angle:30,gain:.5,lacunarity:2.5,parallel:!0,time:0,center:{x:0,y:0},alpha:1});var rc=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uHsl;
uniform float uAlpha;
uniform float uColorize;

// https://en.wikipedia.org/wiki/Luma_(video)
const vec3 weight = vec3(0.299, 0.587, 0.114);

float getWeightedAverage(vec3 rgb) {
    return rgb.r * weight.r + rgb.g * weight.g + rgb.b * weight.b;
}

// https://gist.github.com/mairod/a75e7b44f68110e1576d77419d608786?permalink_comment_id=3195243#gistcomment-3195243
const vec3 k = vec3(0.57735, 0.57735, 0.57735);

vec3 hueShift(vec3 color, float angle) {
    float cosAngle = cos(angle);
    return vec3(
    color * cosAngle +
    cross(k, color) * sin(angle) +
    k * dot(k, color) * (1.0 - cosAngle)
    );
}

void main()
{
    vec4 color = texture(uTexture, vTextureCoord);
    vec3 resultRGB = color.rgb;

    float hue = uHsl[0];
    float saturation = uHsl[1];
    float lightness = uHsl[2];

    // colorize
    if (uColorize > 0.5) {
        resultRGB = vec3(getWeightedAverage(resultRGB), 0., 0.);
    }

    // hue
    resultRGB = hueShift(resultRGB, hue);

    // saturation
    // https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/huesaturation.js
    float average = (resultRGB.r + resultRGB.g + resultRGB.b) / 3.0;

    if (saturation > 0.) {
        resultRGB += (average - resultRGB) * (1. - 1. / (1.001 - saturation));
    } else {
        resultRGB -= (average - resultRGB) * saturation;
    }

    // lightness
    resultRGB = mix(resultRGB, vec3(ceil(lightness)) * color.a, abs(lightness));

    // alpha
    finalColor = mix(color, vec4(resultRGB, color.a), uAlpha);
}
`,ic=`struct HslUniforms {
  uHsl:vec3<f32>,
  uColorize:f32,
  uAlpha:f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> hslUniforms : HslUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let color: vec4<f32> = textureSample(uTexture, uSampler, uv);
    var resultRGB: vec3<f32> = color.rgb;

    let hue: f32 = hslUniforms.uHsl[0];
    let saturation: f32 = hslUniforms.uHsl[1];
    let lightness: f32 = hslUniforms.uHsl[2];

    // colorize
    if (hslUniforms.uColorize > 0.5) {
        resultRGB = vec3<f32>(dot(color.rgb, vec3<f32>(0.299, 0.587, 0.114)), 0., 0.);
    }

    // hue
    resultRGB = hueShift(resultRGB, hue);

    // saturation
    // https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/huesaturation.js
    let average: f32 = (resultRGB.r + resultRGB.g + resultRGB.b) / 3.0;

    if (saturation > 0.) {
        resultRGB += (average - resultRGB) * (1. - 1. / (1.001 - saturation));
    } else {
        resultRGB -= (average - resultRGB) * saturation;
    }

    // lightness
    resultRGB = mix(resultRGB, vec3<f32>(ceil(lightness)) * color.a, abs(lightness));

    // alpha
    return mix(color, vec4<f32>(resultRGB, color.a), hslUniforms.uAlpha);
}

// https://gist.github.com/mairod/a75e7b44f68110e1576d77419d608786?permalink_comment_id=3195243#gistcomment-3195243
const k: vec3<f32> = vec3(0.57735, 0.57735, 0.57735);

fn hueShift(color: vec3<f32>, angle: f32) -> vec3<f32> 
{
    let cosAngle: f32 = cos(angle);
    return vec3<f32>(
    color * cosAngle +
    cross(k, color) * sin(angle) +
    k * dot(k, color) * (1.0 - cosAngle)
    );
}`,ac=Object.defineProperty,oc=(e,t,n)=>t in e?ac(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,sc=(e,t,n)=>(oc(e,typeof t==`symbol`?t:t+``,n),n);sc(class e extends D{constructor(t){t={...e.DEFAULT_OPTIONS,...t};let n=g.from({vertex:{source:X,entryPoint:`mainVertex`},fragment:{source:ic,entryPoint:`mainFragment`}}),r=m.from({vertex:Y,fragment:rc,name:`hsl-adjustment-filter`});super({gpuProgram:n,glProgram:r,resources:{hslUniforms:{uHsl:{value:new Float32Array(3),type:`vec3<f32>`},uColorize:{value:+!!t.colorize,type:`f32`},uAlpha:{value:t.alpha,type:`f32`}}}}),sc(this,`uniforms`),sc(this,`_hue`),this.uniforms=this.resources.hslUniforms.uniforms,this.hue=t.hue}get hue(){return this._hue}set hue(e){this._hue=e,this.resources.hslUniforms.uniforms.uHsl[0]=Math.PI/180*e}get saturation(){return this.resources.hslUniforms.uniforms.uHsl[1]}set saturation(e){this.resources.hslUniforms.uniforms.uHsl[1]=e}get lightness(){return this.resources.hslUniforms.uniforms.uHsl[2]}set lightness(e){this.resources.hslUniforms.uniforms.uHsl[2]=e}get colorize(){return this.resources.hslUniforms.uniforms.uColorize===1}set colorize(e){this.resources.hslUniforms.uniforms.uColorize=+!!e}get alpha(){return this.resources.hslUniforms.uniforms.uAlpha}set alpha(e){this.resources.hslUniforms.uniforms.uAlpha=e}},`DEFAULT_OPTIONS`,{hue:0,saturation:0,lightness:0,colorize:!1,alpha:1});var cc=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uVelocity;
uniform int uKernelSize;
uniform float uOffset;

uniform vec4 uInputSize;

const int MAX_KERNEL_SIZE = 2048;

// Notice:
// the perfect way:
//    int kernelSize = min(uKernelSize, MAX_KERNELSIZE);
// BUT in real use-case , uKernelSize < MAX_KERNELSIZE almost always.
// So use uKernelSize directly.

void main(void)
{
    vec4 color = texture(uTexture, vTextureCoord);

    if (uKernelSize == 0)
    {
        finalColor = color;
        return;
    }

    vec2 velocity = uVelocity / uInputSize.xy;
    float offset = -uOffset / length(uVelocity) - 0.5;
    int k = uKernelSize - 1;

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }
        vec2 bias = velocity * (float(i) / float(k) + offset);
        color += texture(uTexture, vTextureCoord + bias);
    }
    finalColor = color / float(uKernelSize);
}
`,lc=`struct MotionBlurUniforms {
  uVelocity: vec2<f32>,
  uKernelSize: f32,
  uOffset: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> motionBlurUniforms : MotionBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uVelocity = motionBlurUniforms.uVelocity;
  let uKernelSize = motionBlurUniforms.uKernelSize;
  let uOffset = motionBlurUniforms.uOffset;

  let velocity: vec2<f32> = uVelocity / gfu.uInputSize.xy;
  let offset: f32 = -uOffset / length(uVelocity) - 0.5;
  let k: i32 = i32(min(uKernelSize - 1, MAX_KERNEL_SIZE - 1));

  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  for(var i: i32 = 0; i < k; i += 1) {
    let bias: vec2<f32> = velocity * (f32(i) / f32(k) + offset);
    color += textureSample(uTexture, uSampler, uv + bias);
  }
  
  return select(color / f32(uKernelSize), textureSample(uTexture, uSampler, uv), uKernelSize == 0);
}

const MAX_KERNEL_SIZE: f32 = 2048;`,uc=Object.defineProperty,dc=(e,t,n)=>t in e?uc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,fc=(e,t,n)=>(dc(e,typeof t==`symbol`?t:t+``,n),n);fc(class e extends D{constructor(...t){let n=t[0]??{};(Array.isArray(n)||`x`in n&&`y`in n||n instanceof v)&&(f(`6.0.0`,`MotionBlurFilter constructor params are now options object. See params: { velocity, kernelSize, offset }`),n={velocity:{x:`x`in n?n.x:n[0],y:`y`in n?n.y:n[1]}},t[1]!==void 0&&(n.kernelSize=t[1]),t[2]!==void 0&&(n.offset=t[2])),n={...e.DEFAULT_OPTIONS,...n};let r=g.from({vertex:{source:X,entryPoint:`mainVertex`},fragment:{source:lc,entryPoint:`mainFragment`}}),i=m.from({vertex:Y,fragment:cc,name:`motion-blur-filter`});super({gpuProgram:r,glProgram:i,resources:{motionBlurUniforms:{uVelocity:{value:n.velocity,type:`vec2<f32>`},uKernelSize:{value:Math.trunc(n.kernelSize??5),type:`i32`},uOffset:{value:n.offset,type:`f32`}}}}),fc(this,`uniforms`),fc(this,`_kernelSize`),this.uniforms=this.resources.motionBlurUniforms.uniforms,Object.assign(this,n)}get velocity(){return this.uniforms.uVelocity}set velocity(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uVelocity=e,this._updateDirty()}get velocityX(){return this.velocity.x}set velocityX(e){this.velocity.x=e,this._updateDirty()}get velocityY(){return this.velocity.y}set velocityY(e){this.velocity.y=e,this._updateDirty()}get kernelSize(){return this._kernelSize}set kernelSize(e){this._kernelSize=e,this._updateDirty()}get offset(){return this.uniforms.uOffset}set offset(e){this.uniforms.uOffset=e}_updateDirty(){this.padding=(Math.max(Math.abs(this.velocityX),Math.abs(this.velocityY))>>0)+1,this.uniforms.uKernelSize=this.velocityX!==0||this.velocityY!==0?this._kernelSize:0}},`DEFAULT_OPTIONS`,{velocity:{x:0,y:0},kernelSize:5,offset:0});var pc=`in vec2 vTextureCoord;
out vec4 finalColor;

const int MAX_COLORS = \${MAX_COLORS};

uniform sampler2D uTexture;
uniform vec3 uOriginalColors[MAX_COLORS];
uniform vec3 uTargetColors[MAX_COLORS];
uniform float uTolerance;

void main(void)
{
    finalColor = texture(uTexture, vTextureCoord);

    float alpha = finalColor.a;
    if (alpha < 0.0001)
    {
      return;
    }

    vec3 color = finalColor.rgb / alpha;

    for(int i = 0; i < MAX_COLORS; i++)
    {
      vec3 origColor = uOriginalColors[i];
      if (origColor.r < 0.0)
      {
        break;
      }
      vec3 colorDiff = origColor - color;
      if (length(colorDiff) < uTolerance)
      {
        vec3 targetColor = uTargetColors[i];
        finalColor = vec4((targetColor + colorDiff) * alpha, alpha);
        return;
      }
    }
}
`,mc=`struct MultiColorReplaceUniforms {
  uOriginalColors: array<vec3<f32>, MAX_COLORS>,
  uTargetColors: array<vec3<f32>, MAX_COLORS>,
  uTolerance:f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> multiColorReplaceUniforms : MultiColorReplaceUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOriginalColors = multiColorReplaceUniforms.uOriginalColors;
  let uTargetColors = multiColorReplaceUniforms.uTargetColors;
  let uTolerance = multiColorReplaceUniforms.uTolerance;

  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  let alpha: f32 = color.a;

  if (alpha > 0.0001)
  {
    var modColor: vec3<f32> = vec3<f32>(color.rgb) / alpha;

    for(var i: i32 = 0; i < MAX_COLORS; i += 1)
    {
      let origColor: vec3<f32> = uOriginalColors[i];
      if (origColor.r < 0.0)
      {
        break;
      }
      let colorDiff: vec3<f32> = origColor - modColor;
      
      if (length(colorDiff) < uTolerance)
      {
        let targetColor: vec3<f32> = uTargetColors[i];
        color = vec4((targetColor + colorDiff) * alpha, alpha);
        return color;
      }
    }
  }

  return color;
}

const MAX_COLORS: i32 = \${MAX_COLORS};`,hc=Object.defineProperty,gc=(e,t,n)=>t in e?hc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_c=(e,t,n)=>(gc(e,typeof t==`symbol`?t:t+``,n),n);_c(class e extends D{constructor(...t){let n=t[0]??{};Array.isArray(n)&&(f(`6.0.0`,`MultiColorReplaceFilter constructor params are now options object. See params: { replacements, tolerance, maxColors }`),n={replacements:n},t[1]&&(n.tolerance=t[1]),t[2]&&(n.maxColors=t[2])),n={...e.DEFAULT_OPTIONS,...n};let r=n.maxColors??n.replacements.length,i=g.from({vertex:{source:X,entryPoint:`mainVertex`},fragment:{source:mc.replace(/\$\{MAX_COLORS\}/g,r.toFixed(0)),entryPoint:`mainFragment`}}),a=m.from({vertex:Y,fragment:pc.replace(/\$\{MAX_COLORS\}/g,r.toFixed(0)),name:`multi-color-replace-filter`});super({gpuProgram:i,glProgram:a,resources:{multiColorReplaceUniforms:{uOriginalColors:{value:new Float32Array(3*r),type:`vec3<f32>`,size:r},uTargetColors:{value:new Float32Array(3*r),type:`vec3<f32>`,size:r},uTolerance:{value:n.tolerance,type:`f32`}}}}),_c(this,`uniforms`),_c(this,`_replacements`,[]),_c(this,`_maxColors`),this._maxColors=r,this.uniforms=this.resources.multiColorReplaceUniforms.uniforms,this.replacements=n.replacements}set replacements(e){let t=this.uniforms.uOriginalColors,n=this.uniforms.uTargetColors,r=e.length,i=new y;if(r>this._maxColors)throw Error(`Length of replacements (${r}) exceeds the maximum colors length (${this._maxColors})`);t[r*3]=-1;let a,o,s;for(let c=0;c<r;c++){let r=e[c];i.setValue(r[0]),[a,o,s]=i.toArray(),t[c*3]=a,t[c*3+1]=o,t[c*3+2]=s,i.setValue(r[1]),[a,o,s]=i.toArray(),n[c*3]=a,n[c*3+1]=o,n[c*3+2]=s}this._replacements=e}get replacements(){return this._replacements}refresh(){this.replacements=this._replacements}get maxColors(){return this._maxColors}get tolerance(){return this.uniforms.uTolerance}set tolerance(e){this.uniforms.uTolerance=e}set epsilon(e){f(`6.0.0`,`MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead`),this.tolerance=e}get epsilon(){return f(`6.0.0`,`MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead`),this.tolerance}},`DEFAULT_OPTIONS`,{replacements:[[16711680,255]],tolerance:.05,maxColors:void 0});var vc=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uSepia;
uniform vec2 uNoise;
uniform vec3 uScratch;
uniform vec3 uVignetting;
uniform float uSeed;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

const float SQRT_2 = 1.414213;
const vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

vec3 Overlay(vec3 src, vec3 dst)
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)
    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),
                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),
                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));
}


void main()
{
    finalColor = texture(uTexture, vTextureCoord);
    vec3 color = finalColor.rgb;

    if (uSepia > 0.0)
    {
        float gray = (color.x + color.y + color.z) / 3.0;
        vec3 grayscale = vec3(gray);

        color = Overlay(SEPIA_RGB, grayscale);

        color = grayscale + uSepia * (color - grayscale);
    }

    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions.xy;

    float vignette = uVignetting[0];
    float vignetteAlpha = uVignetting[1];
    float vignetteBlur = uVignetting[2];

    if (vignette > 0.0)
    {
        float outter = SQRT_2 - vignette * SQRT_2;
        vec2 dir = vec2(vec2(0.5, 0.5) - coord);
        dir.y *= uDimensions.y / uDimensions.x;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignetteBlur * SQRT_2), 0.0, 1.0);
        color.rgb *= darker + (1.0 - darker) * (1.0 - vignetteAlpha);
    }

    float scratch = uScratch[0];
    float scratchDensity = uScratch[1];
    float scratchWidth = uScratch[2];

    if (scratchDensity > uSeed && scratch != 0.0)
    {
        float phase = uSeed * 256.0;
        float s = mod(floor(phase), 2.0);
        float dist = 1.0 / scratchDensity;
        float d = distance(coord, vec2(uSeed * dist, abs(s - uSeed * dist)));
        if (d < uSeed * 0.6 + 0.4)
        {
            highp float period = scratchDensity * 10.0;

            float xx = coord.x * period + phase;
            float aa = abs(mod(xx, 0.5) * 4.0);
            float bb = mod(floor(xx / 0.5), 2.0);
            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);

            float kk = 2.0 * period;
            float dw = scratchWidth / uDimensions.x * (0.75 + uSeed);
            float dh = dw * kk;

            float tine = (yy - (2.0 - dh));

            if (tine > 0.0) {
                float _sign = sign(scratch);

                tine = s * tine / period + scratch + 0.1;
                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

                color.rgb *= tine;
            }
        }
    }

    float noise = uNoise[0];
    float noiseSize = uNoise[1];

    if (noise > 0.0 && noiseSize > 0.0)
    {
        vec2 pixelCoord = vTextureCoord.xy * uInputSize.xy;
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + uSeed * 512.0, 1024.0 - uSeed * 512.0);
        // float _noise = snoise(d) * 0.5;
        float _noise = rand(pixelCoord * noiseSize * uSeed) - 0.5;
        color += _noise * noise;
    }

    finalColor.rgb = color;
}`,yc=`struct OldFilmUniforms {
    uSepia: f32,
    uNoise: vec2<f32>,
    uScratch: vec3<f32>,
    uVignetting: vec3<f32>,
    uSeed: f32,
    uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> oldFilmUniforms : OldFilmUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  if (oldFilmUniforms.uSepia > 0.)
  {
    color = vec4<f32>(sepia(color.rgb), color.a);
  }

  let coord: vec2<f32> = uv * gfu.uInputSize.xy / oldFilmUniforms.uDimensions;

  if (oldFilmUniforms.uVignetting[0] > 0.)
  {
    color *= vec4<f32>(vec3<f32>(vignette(color.rgb, coord)), color.a);
  }

  let uScratch = oldFilmUniforms.uScratch; 

  if (uScratch[1] > oldFilmUniforms.uSeed && uScratch[0] != 0.)
  {
    color = vec4<f32>(scratch(color.rgb, coord), color.a);
  }

  let uNoise = oldFilmUniforms.uNoise;

  if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
  {
    color += vec4<f32>(vec3<f32>(noise(uv)), color.a);
  }

  return color;
}

const SQRT_2: f32 = 1.414213;
const SEPIA_RGB: vec3<f32> = vec3<f32>(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn rand(co: vec2<f32>) -> f32
{
  return fract(sin(dot(co, vec2<f32>(12.9898, 78.233))) * 43758.5453);
}

fn overlay(src: vec3<f32>, dst: vec3<f32>) -> vec3<f32>
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)

    return vec3<f32>(
      select((1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)), (2.0 * src.x * dst.x), (dst.x <= 0.5)), 
      select((1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)), (2.0 * src.y * dst.y), (dst.y <= 0.5)),
      select((1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)), (2.0 * src.z * dst.z), (dst.z <= 0.5))
    );
}

fn sepia(co: vec3<f32>) -> vec3<f32>
{
  let gray: f32 = (co.x + co.y + co.z) / 3.0;
  let grayscale: vec3<f32> = vec3<f32>(gray);
  let color = overlay(SEPIA_RGB, grayscale);
  return grayscale + oldFilmUniforms.uSepia * (color - grayscale);
}

fn vignette(co: vec3<f32>, coord: vec2<f32>) -> f32
{
  let uVignetting = oldFilmUniforms.uVignetting;
  let uDimensions = oldFilmUniforms.uDimensions;
  
  let outter: f32 = SQRT_2 - uVignetting[0] * SQRT_2;
  var dir: vec2<f32> = vec2<f32>(vec2<f32>(0.5) - coord);
  dir.y *= uDimensions.y / uDimensions.x;
  let darker: f32 = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignetting[2] * SQRT_2), 0.0, 1.0);
  return darker + (1.0 - darker) * (1.0 - uVignetting[1]);
}

fn scratch(co: vec3<f32>, coord: vec2<f32>) -> vec3<f32>
{
  var color = co;
  let uScratch = oldFilmUniforms.uScratch;
  let uSeed = oldFilmUniforms.uSeed;
  let uDimensions = oldFilmUniforms.uDimensions;

  let phase: f32 = uSeed * 256.0;
  let s: f32 = modulo(floor(phase), 2.0);
  let dist: f32 = 1.0 / uScratch[1];
  let d: f32 = distance(coord, vec2<f32>(uSeed * dist, abs(s - uSeed * dist)));

  if (d < uSeed * 0.6 + 0.4)
  {
    let period: f32 = uScratch[1] * 10.0;

    let xx: f32 = coord.x * period + phase;
    let aa: f32 = abs(modulo(xx, 0.5) * 4.0);
    let bb: f32 = modulo(floor(xx / 0.5), 2.0);
    let yy: f32 = (1.0 - bb) * aa + bb * (2.0 - aa);

    let kk: f32 = 2.0 * period;
    let dw: f32 = uScratch[2] / uDimensions.x * (0.75 + uSeed);
    let dh: f32 = dw * kk;

    var tine: f32 = (yy - (2.0 - dh));

    if (tine > 0.0) {
        let _sign: f32 = sign(uScratch[0]);

        tine = s * tine / period + uScratch[0] + 0.1;
        tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

        color *= tine;
    }
  }

  return color;
}

fn noise(coord: vec2<f32>) -> f32
{
  let uNoise = oldFilmUniforms.uNoise;
  let uSeed = oldFilmUniforms.uSeed;

  var pixelCoord: vec2<f32> = coord * gfu.uInputSize.xy;
  pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
  pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
  return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}`,bc=Object.defineProperty,xc=(e,t,n)=>t in e?bc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Sc=(e,t,n)=>(xc(e,typeof t==`symbol`?t:t+``,n),n);Sc(class e extends D{constructor(t){t={...e.DEFAULT_OPTIONS,...t};let n=g.from({vertex:{source:X,entryPoint:`mainVertex`},fragment:{source:yc,entryPoint:`mainFragment`}}),r=m.from({vertex:Y,fragment:vc,name:`old-film-filter`});super({gpuProgram:n,glProgram:r,resources:{oldFilmUniforms:{uSepia:{value:t.sepia,type:`f32`},uNoise:{value:new Float32Array(2),type:`vec2<f32>`},uScratch:{value:new Float32Array(3),type:`vec3<f32>`},uVignetting:{value:new Float32Array(3),type:`vec3<f32>`},uSeed:{value:t.seed,type:`f32`},uDimensions:{value:new Float32Array(2),type:`vec2<f32>`}}}}),Sc(this,`uniforms`),Sc(this,`seed`),this.uniforms=this.resources.oldFilmUniforms.uniforms,Object.assign(this,t)}apply(e,t,n,r){this.uniforms.uDimensions[0]=t.frame.width,this.uniforms.uDimensions[1]=t.frame.height,this.uniforms.uSeed=this.seed,e.applyFilter(this,t,n,r)}get sepia(){return this.uniforms.uSepia}set sepia(e){this.uniforms.uSepia=e}get noise(){return this.uniforms.uNoise[0]}set noise(e){this.uniforms.uNoise[0]=e}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(e){this.uniforms.uNoise[1]=e}get scratch(){return this.uniforms.uScratch[0]}set scratch(e){this.uniforms.uScratch[0]=e}get scratchDensity(){return this.uniforms.uScratch[1]}set scratchDensity(e){this.uniforms.uScratch[1]=e}get scratchWidth(){return this.uniforms.uScratch[2]}set scratchWidth(e){this.uniforms.uScratch[2]=e}get vignetting(){return this.uniforms.uVignetting[0]}set vignetting(e){this.uniforms.uVignetting[0]=e}get vignettingAlpha(){return this.uniforms.uVignetting[1]}set vignettingAlpha(e){this.uniforms.uVignetting[1]=e}get vignettingBlur(){return this.uniforms.uVignetting[2]}set vignettingBlur(e){this.uniforms.uVignetting[2]=e}},`DEFAULT_OPTIONS`,{sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,seed:0});var Cc=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uThickness;
uniform vec3 uColor;
uniform float uAlpha;
uniform float uKnockout;

uniform vec4 uInputClamp;

const float DOUBLE_PI = 2. * 3.14159265358979323846264;
const float ANGLE_STEP = \${ANGLE_STEP};

float outlineMaxAlphaAtPos(vec2 pos) {
    if (uThickness.x == 0. || uThickness.y == 0.) {
        return 0.;
    }

    vec4 displacedColor;
    vec2 displacedPos;
    float maxAlpha = 0.;

    for (float angle = 0.; angle <= DOUBLE_PI; angle += ANGLE_STEP) {
        displacedPos.x = vTextureCoord.x + uThickness.x * cos(angle);
        displacedPos.y = vTextureCoord.y + uThickness.y * sin(angle);
        displacedColor = texture(uTexture, clamp(displacedPos, uInputClamp.xy, uInputClamp.zw));
        maxAlpha = max(maxAlpha, displacedColor.a);
    }

    return maxAlpha;
}

void main(void) {
    vec4 sourceColor = texture(uTexture, vTextureCoord);
    vec4 contentColor = sourceColor * float(uKnockout < 0.5);
    float outlineAlpha = uAlpha * outlineMaxAlphaAtPos(vTextureCoord.xy) * (1.-sourceColor.a);
    vec4 outlineColor = vec4(vec3(uColor) * outlineAlpha, outlineAlpha);
    finalColor = contentColor + outlineColor;
}
`,wc=`struct OutlineUniforms {
  uThickness:vec2<f32>,
  uColor:vec3<f32>,
  uAlpha:f32,
  uAngleStep:f32,
  uKnockout:f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> outlineUniforms : OutlineUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let sourceColor: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let contentColor: vec4<f32> = sourceColor * (1. - outlineUniforms.uKnockout);
  
  let outlineAlpha: f32 = outlineUniforms.uAlpha * outlineMaxAlphaAtPos(uv) * (1. - sourceColor.a);
  let outlineColor: vec4<f32> = vec4<f32>(vec3<f32>(outlineUniforms.uColor) * outlineAlpha, outlineAlpha);
  
  return contentColor + outlineColor;
}

fn outlineMaxAlphaAtPos(uv: vec2<f32>) -> f32 {
  let thickness = outlineUniforms.uThickness;

  if (thickness.x == 0. || thickness.y == 0.) {
    return 0.;
  }
  
  let angleStep = outlineUniforms.uAngleStep;

  var displacedColor: vec4<f32>;
  var displacedPos: vec2<f32>;

  var maxAlpha: f32 = 0.;
  var displaced: vec2<f32>;
  var curColor: vec4<f32>;

  for (var angle = 0.; angle <= DOUBLE_PI; angle += angleStep)
  {
    displaced.x = uv.x + thickness.x * cos(angle);
    displaced.y = uv.y + thickness.y * sin(angle);
    curColor = textureSample(uTexture, uSampler, clamp(displaced, gfu.uInputClamp.xy, gfu.uInputClamp.zw));
    maxAlpha = max(maxAlpha, curColor.a);
  }

  return maxAlpha;
}

const DOUBLE_PI: f32 = 3.14159265358979323846264 * 2.;`,Tc=Object.defineProperty,Ec=(e,t,n)=>t in e?Tc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Dc=(e,t,n)=>(Ec(e,typeof t==`symbol`?t:t+``,n),n),Oc=class e extends D{constructor(...t){let n=t[0]??{};typeof n==`number`&&(f(`6.0.0`,`OutlineFilter constructor params are now options object. See params: { thickness, color, quality, alpha, knockout }`),n={thickness:n},t[1]!==void 0&&(n.color=t[1]),t[2]!==void 0&&(n.quality=t[2]),t[3]!==void 0&&(n.alpha=t[3]),t[4]!==void 0&&(n.knockout=t[4])),n={...e.DEFAULT_OPTIONS,...n};let r=n.quality??.1,i=g.from({vertex:{source:X,entryPoint:`mainVertex`},fragment:{source:wc,entryPoint:`mainFragment`}}),a=m.from({vertex:Y,fragment:Cc.replace(/\$\{ANGLE_STEP\}/,e.getAngleStep(r).toFixed(7)),name:`outline-filter`});super({gpuProgram:i,glProgram:a,resources:{outlineUniforms:{uThickness:{value:new Float32Array(2),type:`vec2<f32>`},uColor:{value:new Float32Array(3),type:`vec3<f32>`},uAlpha:{value:n.alpha,type:`f32`},uAngleStep:{value:0,type:`f32`},uKnockout:{value:+!!n.knockout,type:`f32`}}}}),Dc(this,`uniforms`),Dc(this,`_thickness`),Dc(this,`_quality`),Dc(this,`_color`),this.uniforms=this.resources.outlineUniforms.uniforms,this.uniforms.uAngleStep=e.getAngleStep(r),this._color=new y,this.color=n.color??0,Object.assign(this,n)}apply(e,t,n,r){this.uniforms.uThickness[0]=this.thickness/t.source.width,this.uniforms.uThickness[1]=this.thickness/t.source.height,e.applyFilter(this,t,n,r)}static getAngleStep(t){return parseFloat((Math.PI*2/Math.max(t*e.MAX_SAMPLES,e.MIN_SAMPLES)).toFixed(7))}get thickness(){return this._thickness}set thickness(e){this._thickness=this.padding=e}get color(){return this._color.value}set color(e){this._color.setValue(e);let[t,n,r]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=n,this.uniforms.uColor[2]=r}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}get quality(){return this._quality}set quality(t){this._quality=t,this.uniforms.uAngleStep=e.getAngleStep(t)}get knockout(){return this.uniforms.uKnockout===1}set knockout(e){this.uniforms.uKnockout=+!!e}};Dc(Oc,`DEFAULT_OPTIONS`,{thickness:1,color:0,alpha:1,quality:.1,knockout:!1}),Dc(Oc,`MIN_SAMPLES`,1),Dc(Oc,`MAX_SAMPLES`,100);var kc=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uRadian;
uniform vec2 uCenter;
uniform float uRadius;
uniform int uKernelSize;

uniform vec4 uInputSize;

const int MAX_KERNEL_SIZE = 2048;

void main(void)
{
    vec4 color = texture(uTexture, vTextureCoord);

    if (uKernelSize == 0)
    {
        finalColor = color;
        return;
    }

    float aspect = uInputSize.y / uInputSize.x;
    vec2 center = uCenter.xy / uInputSize.xy;
    float gradient = uRadius / uInputSize.x * 0.3;
    float radius = uRadius / uInputSize.x - gradient * 0.5;
    int k = uKernelSize - 1;

    vec2 coord = vTextureCoord;
    vec2 dir = vec2(center - coord);
    float dist = length(vec2(dir.x, dir.y * aspect));

    float radianStep = uRadian;
    if (radius >= 0.0 && dist > radius) {
        float delta = dist - radius;
        float gap = gradient;
        float scale = 1.0 - abs(delta / gap);
        if (scale <= 0.0) {
            finalColor = color;
            return;
        }
        radianStep *= scale;
    }
    radianStep /= float(k);

    float s = sin(radianStep);
    float c = cos(radianStep);
    mat2 rotationMatrix = mat2(vec2(c, -s), vec2(s, c));

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }

        coord -= center;
        coord.y *= aspect;
        coord = rotationMatrix * coord;
        coord.y /= aspect;
        coord += center;

        vec4 sample = texture(uTexture, coord);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample;
    }

    finalColor = color / float(uKernelSize);
}
`,Ac=`struct RadialBlurUniforms {
  uRadian: f32,
  uCenter: vec2<f32>,
  uKernelSize: f32,
  uRadius: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> radialBlurUniforms : RadialBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uRadian = radialBlurUniforms.uRadian;
  let uCenter = radialBlurUniforms.uCenter;
  let uKernelSize = radialBlurUniforms.uKernelSize;
  let uRadius = radialBlurUniforms.uRadius;
  
  var returnColorOnly = false;

  if (uKernelSize == 0)
  {
    returnColorOnly = true;
  }

  let aspect: f32 = gfu.uInputSize.y / gfu.uInputSize.x;
  let center: vec2<f32> = uCenter.xy / gfu.uInputSize.xy;
  let gradient: f32 = uRadius / gfu.uInputSize.x * 0.3;
  let radius: f32 = uRadius / gfu.uInputSize.x - gradient * 0.5;
  let k: i32 = i32(uKernelSize - 1);

  var coord: vec2<f32> = uv;
  let dir: vec2<f32> = vec2<f32>(center - coord);
  let dist: f32 = length(vec2<f32>(dir.x, dir.y * aspect));

  var radianStep: f32 = uRadian;
  
  if (radius >= 0.0 && dist > radius)
  {
    let delta: f32 = dist - radius;
    let gap: f32 = gradient;
    let scale: f32 = 1.0 - abs(delta / gap);
    if (scale <= 0.0) {
      returnColorOnly = true;
    }
    radianStep *= scale;
  }

  radianStep /= f32(k);

  let s: f32 = sin(radianStep);
  let c: f32 = cos(radianStep);
  let rotationMatrix: mat2x2<f32> = mat2x2<f32>(vec2<f32>(c, -s), vec2<f32>(s, c));
  
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let baseColor = vec4<f32>(color);

  let minK: i32 = min(i32(uKernelSize) - 1, MAX_KERNEL_SIZE - 1);

  for(var i: i32 = 0; i < minK; i += 1) 
  {
    coord -= center;
    coord.y *= aspect;
    coord = rotationMatrix * coord;
    coord.y /= aspect;
    coord += center;
    let sample: vec4<f32> = textureSample(uTexture, uSampler, coord);
    // switch to pre-multiplied alpha to correctly blur transparent images
    // sample.rgb *= sample.a;
    color += sample;
  }

  return select(color / f32(uKernelSize), baseColor, returnColorOnly);
}

const MAX_KERNEL_SIZE: i32 = 2048;`,jc=Object.defineProperty,Mc=(e,t,n)=>t in e?jc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Nc=(e,t,n)=>(Mc(e,typeof t==`symbol`?t:t+``,n),n);Nc(class e extends D{constructor(...t){let n=t[0]??{};if(typeof n==`number`){if(f(`6.0.0`,`RadialBlurFilter constructor params are now options object. See params: { angle, center, kernelSize, radius }`),n={angle:n},t[1]){let e=`x`in t[1]?t[1].x:t[1][0],r=`y`in t[1]?t[1].y:t[1][1];n.center={x:e,y:r}}t[2]&&(n.kernelSize=t[2]),t[3]&&(n.radius=t[3])}n={...e.DEFAULT_OPTIONS,...n};let r=g.from({vertex:{source:X,entryPoint:`mainVertex`},fragment:{source:Ac,entryPoint:`mainFragment`}}),i=m.from({vertex:Y,fragment:kc,name:`radial-blur-filter`});super({gpuProgram:r,glProgram:i,resources:{radialBlurUniforms:{uRadian:{value:0,type:`f32`},uCenter:{value:n.center,type:`vec2<f32>`},uKernelSize:{value:n.kernelSize,type:`i32`},uRadius:{value:n.radius,type:`f32`}}}}),Nc(this,`uniforms`),Nc(this,`_angle`),Nc(this,`_kernelSize`),this.uniforms=this.resources.radialBlurUniforms.uniforms,Object.assign(this,n)}_updateKernelSize(){this.uniforms.uKernelSize=this._angle===0?0:this.kernelSize}get angle(){return this._angle}set angle(e){this._angle=e,this.uniforms.uRadian=e*Math.PI/180,this._updateKernelSize()}get center(){return this.uniforms.uCenter}set center(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uCenter=e}get centerX(){return this.center.x}set centerX(e){this.center.x=e}get centerY(){return this.center.y}set centerY(e){this.center.y=e}get kernelSize(){return this._kernelSize}set kernelSize(e){this._kernelSize=e,this._updateKernelSize()}get radius(){return this.uniforms.uRadius}set radius(e){this.uniforms.uRadius=e<0||e===1/0?-1:e}},`DEFAULT_OPTIONS`,{angle:0,center:{x:0,y:0},kernelSize:5,radius:-1});var Pc=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uMirror;
uniform float uBoundary;
uniform vec2 uAmplitude;
uniform vec2 uWavelength;
uniform vec2 uAlpha;
uniform float uTime;
uniform vec2 uDimensions;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * uInputSize.xy;
    vec2 coord = pixelCoord / uDimensions;

    if (coord.y < uBoundary) {
        finalColor = texture(uTexture, vTextureCoord);
        return;
    }

    float k = (coord.y - uBoundary) / (1. - uBoundary + 0.0001);
    float areaY = uBoundary * uDimensions.y / uInputSize.y;
    float v = areaY + areaY - vTextureCoord.y;
    float y = uMirror > 0.5 ? v : vTextureCoord.y;

    float _amplitude = ((uAmplitude.y - uAmplitude.x) * k + uAmplitude.x ) / uInputSize.x;
    float _waveLength = ((uWavelength.y - uWavelength.x) * k + uWavelength.x) / uInputSize.y;
    float _alpha = (uAlpha.y - uAlpha.x) * k + uAlpha.x;

    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - uTime) * _amplitude;
    x = clamp(x, uInputClamp.x, uInputClamp.z);

    vec4 color = texture(uTexture, vec2(x, y));

    finalColor = color * _alpha;
}
`,Fc=`struct ReflectionUniforms {
  uMirror: f32,
  uBoundary: f32,
  uAmplitude: vec2<f32>,
  uWavelength: vec2<f32>,
  uAlpha: vec2<f32>,
  uTime: f32,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> reflectionUniforms : ReflectionUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uDimensions: vec2<f32> = reflectionUniforms.uDimensions;
  let uBoundary: f32 = reflectionUniforms.uBoundary;
  let uMirror: bool = reflectionUniforms.uMirror > 0.5;
  let uAmplitude: vec2<f32> = reflectionUniforms.uAmplitude;
  let uWavelength: vec2<f32> = reflectionUniforms.uWavelength;
  let uAlpha: vec2<f32> = reflectionUniforms.uAlpha;
  let uTime: f32 = reflectionUniforms.uTime;

  let pixelCoord: vec2<f32> = uv * gfu.uInputSize.xy;
  let coord: vec2<f32> = pixelCoord /uDimensions;
  var returnColorOnly: bool = false;

  if (coord.y < uBoundary) {
    returnColorOnly = true;
  }

  let k: f32 = (coord.y - uBoundary) / (1. - uBoundary + 0.0001);
  let areaY: f32 = uBoundary * uDimensions.y / gfu.uInputSize.y;
  let v: f32 = areaY + areaY - uv.y;
  let y: f32 = select(uv.y, v, uMirror);

  let amplitude: f32 = ((uAmplitude.y - uAmplitude.x) * k + uAmplitude.x ) / gfu.uInputSize.x;
  let waveLength: f32 = ((uWavelength.y - uWavelength.x) * k + uWavelength.x) / gfu.uInputSize.y;
  let alpha: f32 = select((uAlpha.y - uAlpha.x) * k + uAlpha.x, 1., returnColorOnly);

  var x: f32 = uv.x + cos(v * 6.28 / waveLength - uTime) * amplitude;
  x = clamp(x, gfu.uInputClamp.x, gfu.uInputClamp.z);
  
  return textureSample(uTexture, uSampler, select(vec2<f32>(x, y), uv, returnColorOnly)) * alpha;
}

fn rand(co: vec2<f32>) -> f32 
{
  return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}`,Ic=Object.defineProperty,Lc=(e,t,n)=>t in e?Ic(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Rc=(e,t,n)=>(Lc(e,typeof t==`symbol`?t:t+``,n),n);Rc(class e extends D{constructor(t){t={...e.DEFAULT_OPTIONS,...t};let n=g.from({vertex:{source:X,entryPoint:`mainVertex`},fragment:{source:Fc,entryPoint:`mainFragment`}}),r=m.from({vertex:Y,fragment:Pc,name:`reflection-filter`});super({gpuProgram:n,glProgram:r,resources:{reflectionUniforms:{uMirror:{value:+!!t.mirror,type:`f32`},uBoundary:{value:t.boundary,type:`f32`},uAmplitude:{value:t.amplitude,type:`vec2<f32>`},uWavelength:{value:t.waveLength,type:`vec2<f32>`},uAlpha:{value:t.alpha,type:`vec2<f32>`},uTime:{value:t.time,type:`f32`},uDimensions:{value:new Float32Array(2),type:`vec2<f32>`}}}}),Rc(this,`uniforms`),Rc(this,`time`,0),this.uniforms=this.resources.reflectionUniforms.uniforms,Object.assign(this,t)}apply(e,t,n,r){this.uniforms.uDimensions[0]=t.frame.width,this.uniforms.uDimensions[1]=t.frame.height,this.uniforms.uTime=this.time,e.applyFilter(this,t,n,r)}get mirror(){return this.uniforms.uMirror>.5}set mirror(e){this.uniforms.uMirror=+!!e}get boundary(){return this.uniforms.uBoundary}set boundary(e){this.uniforms.uBoundary=e}get amplitude(){return Array.from(this.uniforms.uAmplitude)}set amplitude(e){this.uniforms.uAmplitude[0]=e[0],this.uniforms.uAmplitude[1]=e[1]}get amplitudeStart(){return this.uniforms.uAmplitude[0]}set amplitudeStart(e){this.uniforms.uAmplitude[0]=e}get amplitudeEnd(){return this.uniforms.uAmplitude[1]}set amplitudeEnd(e){this.uniforms.uAmplitude[1]=e}get waveLength(){return Array.from(this.uniforms.uWavelength)}set waveLength(e){this.uniforms.uWavelength[0]=e[0],this.uniforms.uWavelength[1]=e[1]}get wavelengthStart(){return this.uniforms.uWavelength[0]}set wavelengthStart(e){this.uniforms.uWavelength[0]=e}get wavelengthEnd(){return this.uniforms.uWavelength[1]}set wavelengthEnd(e){this.uniforms.uWavelength[1]=e}get alpha(){return Array.from(this.uniforms.uAlpha)}set alpha(e){this.uniforms.uAlpha[0]=e[0],this.uniforms.uAlpha[1]=e[1]}get alphaStart(){return this.uniforms.uAlpha[0]}set alphaStart(e){this.uniforms.uAlpha[0]=e}get alphaEnd(){return this.uniforms.uAlpha[1]}set alphaEnd(e){this.uniforms.uAlpha[1]=e}},`DEFAULT_OPTIONS`,{mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0});var zc=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec4 uInputSize;
uniform vec2 uRed;
uniform vec2 uGreen;
uniform vec2 uBlue;

void main(void)
{
   float r = texture(uTexture, vTextureCoord + uRed/uInputSize.xy).r;
   float g = texture(uTexture, vTextureCoord + uGreen/uInputSize.xy).g;
   float b = texture(uTexture, vTextureCoord + uBlue/uInputSize.xy).b;
   float a = texture(uTexture, vTextureCoord).a;
   finalColor = vec4(r, g, b, a);
}
`,Bc=`struct RgbSplitUniforms {
    uRed: vec2<f32>,
    uGreen: vec2<f32>,
    uBlue: vec3<f32>,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> rgbSplitUniforms : RgbSplitUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    let r = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uRed.x / gfu.uInputSize.x, rgbSplitUniforms.uRed.y / gfu.uInputSize.y)).r;
    let g = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uGreen.x / gfu.uInputSize.x, rgbSplitUniforms.uGreen.y / gfu.uInputSize.y)).g;
    let b = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uBlue.x / gfu.uInputSize.x, rgbSplitUniforms.uBlue.y / gfu.uInputSize.y)).b;
    let a = textureSample(uTexture, uSampler, uv).a;
    return vec4<f32>(r, g, b, a);
}
`,Vc=Object.defineProperty,Hc=(e,t,n)=>t in e?Vc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Uc=(e,t,n)=>(Hc(e,typeof t==`symbol`?t:t+``,n),n);Uc(class e extends D{constructor(...t){let n=t[0]??{};(Array.isArray(n)||`x`in n&&`y`in n)&&(f(`6.0.0`,`RGBSplitFilter constructor params are now options object. See params: { red, green, blue }`),n={red:n},t[1]!==void 0&&(n.green=t[1]),t[2]!==void 0&&(n.blue=t[2])),n={...e.DEFAULT_OPTIONS,...n};let r=g.from({vertex:{source:X,entryPoint:`mainVertex`},fragment:{source:Bc,entryPoint:`mainFragment`}}),i=m.from({vertex:Y,fragment:zc,name:`rgb-split-filter`});super({gpuProgram:r,glProgram:i,resources:{rgbSplitUniforms:{uRed:{value:n.red,type:`vec2<f32>`},uGreen:{value:n.green,type:`vec2<f32>`},uBlue:{value:n.blue,type:`vec2<f32>`}}}}),Uc(this,`uniforms`),this.uniforms=this.resources.rgbSplitUniforms.uniforms,Object.assign(this,n)}get red(){return this.uniforms.uRed}set red(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uRed=e}get redX(){return this.red.x}set redX(e){this.red.x=e}get redY(){return this.red.y}set redY(e){this.red.y=e}get green(){return this.uniforms.uGreen}set green(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uGreen=e}get greenX(){return this.green.x}set greenX(e){this.green.x=e}get greenY(){return this.green.y}set greenY(e){this.green.y=e}get blue(){return this.uniforms.uBlue}set blue(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uBlue=e}get blueX(){return this.blue.x}set blueX(e){this.blue.x=e}get blueY(){return this.blue.y}set blueY(e){this.blue.y=e}},`DEFAULT_OPTIONS`,{red:{x:-10,y:0},green:{x:0,y:10},blue:{x:0,y:0}});var Wc=`
precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uCenter;
uniform float uTime;
uniform float uSpeed;
uniform vec4 uWave;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const float PI = 3.14159;

void main()
{
    float uAmplitude = uWave[0];
    float uWavelength = uWave[1];
    float uBrightness = uWave[2];
    float uRadius = uWave[3];

    float halfWavelength = uWavelength * 0.5 / uInputSize.x;
    float maxRadius = uRadius / uInputSize.x;
    float currentRadius = uTime * uSpeed / uInputSize.x;

    float fade = 1.0;

    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            finalColor = texture(uTexture, vTextureCoord);
            return;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }

    vec2 dir = vec2(vTextureCoord - uCenter / uInputSize.xy);
    dir.y *= uInputSize.y / uInputSize.x;
    float dist = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        finalColor = texture(uTexture, vTextureCoord);
        return;
    }

    vec2 diffUV = normalize(dir);

    float diff = (dist - currentRadius) / halfWavelength;

    float p = 1.0 - pow(abs(diff), 2.0);

    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );
    float powDiff = 1.25 * sin(diff * PI) * p * ( uAmplitude * fade );

    vec2 offset = diffUV * powDiff / uInputSize.xy;

    // Do clamp :
    vec2 coord = vTextureCoord + offset;
    vec2 clampedCoord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    vec4 color = texture(uTexture, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    // No clamp :
    // finalColor = texture(uTexture, vTextureCoord + offset);

    color.rgb *= 1.0 + (uBrightness - 1.0) * p * fade;

    finalColor = color;
}
`,Gc=`
struct ShockWaveUniforms {
    uTime: f32,
    uOffset: vec2<f32>,
    uSpeed: f32,
    uWave: vec4<f32>,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> shockwaveUniforms : ShockWaveUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {

    let uTime = shockwaveUniforms.uTime;
    let uOffset = shockwaveUniforms.uOffset;
    let uSpeed = shockwaveUniforms.uSpeed;
    let uAmplitude = shockwaveUniforms.uWave[0];
    let uWavelength = shockwaveUniforms.uWave[1];
    let uBrightness = shockwaveUniforms.uWave[2];
    let uRadius = shockwaveUniforms.uWave[3];
    let halfWavelength: f32 = uWavelength * 0.5 / gfu.uInputSize.x;
    let maxRadius: f32 = uRadius / gfu.uInputSize.x;
    let currentRadius: f32 = uTime * uSpeed / gfu.uInputSize.x;
    var fade: f32 = 1.0;
    var returnColorOnly: bool = false;
    
    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            returnColorOnly = true;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }
    var dir: vec2<f32> = vec2<f32>(uv - uOffset / gfu.uInputSize.xy);
    dir.y *= gfu.uInputSize.y / gfu.uInputSize.x;

    let dist:f32 = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        returnColorOnly = true;
    }

    let diffUV: vec2<f32> = normalize(dir);
    let diff: f32 = (dist - currentRadius) / halfWavelength;
    let p: f32 = 1.0 - pow(abs(diff), 2.0);
    let powDiff: f32 = 1.25 * sin(diff * PI) * p * ( uAmplitude * fade );
    let offset: vec2<f32> = diffUV * powDiff / gfu.uInputSize.xy;
    // Do clamp :
    let coord: vec2<f32> = uv + offset;
    let clampedCoord: vec2<f32> = clamp(coord, gfu.uInputClamp.xy, gfu.uInputClamp.zw);

    var clampedColor: vec4<f32> = textureSample(uTexture, uSampler, clampedCoord);
    
    if (boolVec2(coord, clampedCoord)) 
    {
        clampedColor *= max(0.0, 1.0 - length(coord - clampedCoord));
    }
    // No clamp :
    var finalColor = clampedColor;

    return select(finalColor, textureSample(uTexture, uSampler, uv), returnColorOnly);
}

fn boolVec2(x: vec2<f32>, y: vec2<f32>) -> bool
{
    if (x.x == y.x && x.y == y.y)
    {
        return true;
    }
    
    return false;
}

const PI: f32 = 3.14159265358979323846264;
`,Kc=Object.defineProperty,qc=(e,t,n)=>t in e?Kc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Jc=(e,t,n)=>(qc(e,typeof t==`symbol`?t:t+``,n),n);Jc(class e extends D{constructor(...t){let n=t[0]??{};(Array.isArray(n)||`x`in n&&`y`in n)&&(f(`6.0.0`,`ShockwaveFilter constructor params are now options object. See params: { center, speed, amplitude, wavelength, brightness, radius, time }`),n={center:n,...t[1]},t[2]!==void 0&&(n.time=t[2])),n={...e.DEFAULT_OPTIONS,...n};let r=g.from({vertex:{source:X,entryPoint:`mainVertex`},fragment:{source:Gc,entryPoint:`mainFragment`}}),i=m.from({vertex:Y,fragment:Wc,name:`shockwave-filter`});super({gpuProgram:r,glProgram:i,resources:{shockwaveUniforms:{uTime:{value:n.time,type:`f32`},uCenter:{value:n.center,type:`vec2<f32>`},uSpeed:{value:n.speed,type:`f32`},uWave:{value:new Float32Array(4),type:`vec4<f32>`}}}}),Jc(this,`uniforms`),Jc(this,`time`),this.time=0,this.uniforms=this.resources.shockwaveUniforms.uniforms,Object.assign(this,n)}apply(e,t,n,r){this.uniforms.uTime=this.time,e.applyFilter(this,t,n,r)}get center(){return this.uniforms.uCenter}set center(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uCenter=e}get centerX(){return this.uniforms.uCenter.x}set centerX(e){this.uniforms.uCenter.x=e}get centerY(){return this.uniforms.uCenter.y}set centerY(e){this.uniforms.uCenter.y=e}get speed(){return this.uniforms.uSpeed}set speed(e){this.uniforms.uSpeed=e}get amplitude(){return this.uniforms.uWave[0]}set amplitude(e){this.uniforms.uWave[0]=e}get wavelength(){return this.uniforms.uWave[1]}set wavelength(e){this.uniforms.uWave[1]=e}get brightness(){return this.uniforms.uWave[2]}set brightness(e){this.uniforms.uWave[2]=e}get radius(){return this.uniforms.uWave[3]}set radius(e){this.uniforms.uWave[3]=e}},`DEFAULT_OPTIONS`,{center:{x:0,y:0},speed:500,amplitude:30,wavelength:160,brightness:1,radius:-1});var Yc=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform vec3 uColor;
uniform float uAlpha;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

void main() {
    vec4 diffuseColor = texture(uTexture, vTextureCoord);
    vec2 lightCoord = (vTextureCoord * uInputSize.xy) / uDimensions;
    vec4 light = texture(uMapTexture, lightCoord);
    vec3 ambient = uColor.rgb * uAlpha;
    vec3 intensity = ambient + light.rgb;
    vec3 color = diffuseColor.rgb * intensity;
    finalColor = vec4(color, diffuseColor.a);
}
`,Xc=`struct SimpleLightmapUniforms {
  uColor: vec3<f32>,
  uAlpha: f32,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> simpleLightmapUniforms : SimpleLightmapUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;
@group(1) @binding(2) var uMapSampler: sampler;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
) -> @location(0) vec4<f32> {
  let uColor = simpleLightmapUniforms.uColor;
  let uAlpha = simpleLightmapUniforms.uAlpha;
  let uDimensions = simpleLightmapUniforms.uDimensions;

  let diffuseColor: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let lightCoord: vec2<f32> = (uv * gfu.uInputSize.xy) / simpleLightmapUniforms.uDimensions;
  let light: vec4<f32> = textureSample(uMapTexture, uMapSampler, lightCoord);
  let ambient: vec3<f32> = uColor * uAlpha;
  let intensity: vec3<f32> = ambient + light.rgb;
  let finalColor: vec3<f32> = diffuseColor.rgb * intensity;
  return vec4<f32>(finalColor, diffuseColor.a);
}`,Zc=Object.defineProperty,Qc=(e,t,n)=>t in e?Zc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,$c=(e,t,n)=>(Qc(e,typeof t==`symbol`?t:t+``,n),n);$c(class e extends D{constructor(...t){let r=t[0]??{};if(r instanceof n&&(f(`6.0.0`,`SimpleLightmapFilter constructor params are now options object. See params: { lightMap, color, alpha }`),r={lightMap:r},t[1]!==void 0&&(r.color=t[1]),t[2]!==void 0&&(r.alpha=t[2])),r={...e.DEFAULT_OPTIONS,...r},!r.lightMap)throw Error(`No light map texture source was provided to SimpleLightmapFilter`);let i=g.from({vertex:{source:X,entryPoint:`mainVertex`},fragment:{source:Xc,entryPoint:`mainFragment`}}),a=m.from({vertex:Y,fragment:Yc,name:`simple-lightmap-filter`});super({gpuProgram:i,glProgram:a,resources:{simpleLightmapUniforms:{uColor:{value:new Float32Array(3),type:`vec3<f32>`},uAlpha:{value:r.alpha,type:`f32`},uDimensions:{value:new Float32Array(2),type:`vec2<f32>`}},uMapTexture:r.lightMap.source,uMapSampler:r.lightMap.source.style}}),$c(this,`uniforms`),$c(this,`_color`),$c(this,`_lightMap`),this.uniforms=this.resources.simpleLightmapUniforms.uniforms,this._color=new y,this.color=r.color??0,Object.assign(this,r)}apply(e,t,n,r){this.uniforms.uDimensions[0]=t.frame.width,this.uniforms.uDimensions[1]=t.frame.height,e.applyFilter(this,t,n,r)}get lightMap(){return this._lightMap}set lightMap(e){this._lightMap=e,this.resources.uMapTexture=e.source,this.resources.uMapSampler=e.source.style}get color(){return this._color.value}set color(e){this._color.setValue(e);let[t,n,r]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=n,this.uniforms.uColor[2]=r}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}},`DEFAULT_OPTIONS`,{lightMap:n.WHITE,color:0,alpha:1});var el=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uBlur;
uniform vec2 uStart;
uniform vec2 uEnd;
uniform vec2 uDelta;
uniform vec2 uTexSize;

float random(vec3 scale, float seed)
{
    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
}

void main(void)
{
    vec4 color = vec4(0.0);
    float total = 0.0;

    float blur = uBlur[0];
    float gradientBlur = uBlur[1];

    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
    vec2 normal = normalize(vec2(uStart.y - uEnd.y, uEnd.x - uStart.x));
    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * uTexSize - uStart, normal)) / gradientBlur) * blur;

    for (float t = -30.0; t <= 30.0; t++)
    {
        float percent = (t + offset - 0.5) / 30.0;
        float weight = 1.0 - abs(percent);
        vec4 sample = texture(uTexture, vTextureCoord + uDelta / uTexSize * percent * radius);
        sample.rgb *= sample.a;
        color += sample * weight;
        total += weight;
    }

    color /= total;
    color.rgb /= color.a + 0.00001;

    finalColor = color;
}
`,tl=`struct TiltShiftUniforms {
  uBlur: vec2<f32>,
  uStart: vec2<f32>,
  uEnd: vec2<f32>,
  uDelta: vec2<f32>,
  uTexSize: vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> tiltShiftUniforms : TiltShiftUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uBlur = tiltShiftUniforms.uBlur[0];
  let uBlurGradient = tiltShiftUniforms.uBlur[1];
  let uStart = tiltShiftUniforms.uStart;
  let uEnd = tiltShiftUniforms.uEnd;
  let uDelta = tiltShiftUniforms.uDelta;
  let uTexSize = tiltShiftUniforms.uTexSize;

  var color: vec4<f32> = vec4<f32>(0.0);
  var total: f32 = 0.0;

  let offset: f32 = random(position, vec3<f32>(12.9898, 78.233, 151.7182), 0.0);
  let normal: vec2<f32> = normalize(vec2<f32>(uStart.y - uEnd.y, uEnd.x - uStart.x));
  let radius: f32 = smoothstep(0.0, 1.0, abs(dot(uv * uTexSize - uStart, normal)) / uBlurGradient) * uBlur;

  for (var t: f32 = -30.0; t <= 30.0; t += 1.0)
  {
    var percent: f32 = (t + offset - 0.5) / 30.0;
    var weight: f32 = 1.0 - abs(percent);
    var sample: vec4<f32> = textureSample(uTexture, uSampler, uv + uDelta / uTexSize * percent * radius);
    sample = vec4<f32>(sample.xyz * sample.a, sample.a); // multiply sample.rgb with sample.a
    color += sample * weight;
    total += weight;
  }

  color /= total;
  color = vec4<f32>(color.xyz / (color.a + 0.00001), color.a); // divide color.rgb by color.a + 0.00001

  return color;
}


fn random(position: vec4<f32>, scale: vec3<f32>, seed: f32) -> f32
{
  return fract(sin(dot(position.xyz + seed, scale)) * 43758.5453 + seed);
}`,nl=Object.defineProperty,rl=(e,t,n)=>t in e?nl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,il=(e,t,n)=>(rl(e,typeof t==`symbol`?t:t+``,n),n);il(class e extends D{constructor(t){t={...e.DEFAULT_OPTIONS,...t};let n=g.from({vertex:{source:X,entryPoint:`mainVertex`},fragment:{source:tl,entryPoint:`mainFragment`}}),r=m.from({vertex:Y,fragment:el,name:`tilt-shift-axis-filter`});super({gpuProgram:n,glProgram:r,resources:{tiltShiftUniforms:{uBlur:{value:new Float32Array([t.blur??100,t.gradientBlur??600]),type:`vec2<f32>`},uStart:{value:t.start,type:`vec2<f32>`},uEnd:{value:t.end,type:`vec2<f32>`},uDelta:{value:new Float32Array([30,30]),type:`vec2<f32>`},uTexSize:{value:new Float32Array([window.innerWidth,window.innerHeight]),type:`vec2<f32>`}}}}),il(this,`uniforms`),il(this,`_tiltAxis`),this.uniforms=this.resources.tiltShiftUniforms.uniforms,this._tiltAxis=t.axis,this.updateDelta()}updateDelta(){if(this.uniforms.uDelta[0]=0,this.uniforms.uDelta[1]=0,this._tiltAxis===void 0)return;let e=this.uniforms.uEnd,t=this.uniforms.uStart,n=e.x-t.x,r=e.y-t.y,i=Math.sqrt(n*n+r*r),a=this._tiltAxis===`vertical`;this.uniforms.uDelta[0]=a?-r/i:n/i,this.uniforms.uDelta[1]=a?n/i:r/i}},`DEFAULT_OPTIONS`,{blur:100,gradientBlur:600,start:{x:0,y:window.innerHeight/2},end:{x:600,y:window.innerHeight/2}});var al=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTwist;
uniform vec2 uOffset;
uniform vec4 uInputSize;

vec2 mapCoord( vec2 coord )
{
    coord *= uInputSize.xy;
    coord += uInputSize.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= uInputSize.zw;
    coord /= uInputSize.xy;

    return coord;
}

vec2 twist(vec2 coord)
{
    coord -= uOffset;

    float dist = length(coord);
    float uRadius = uTwist[0];
    float uAngle = uTwist[1];

    if (dist < uRadius)
    {
        float ratioDist = (uRadius - dist) / uRadius;
        float angleMod = ratioDist * ratioDist * uAngle;
        float s = sin(angleMod);
        float c = cos(angleMod);
        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);
    }

    coord += uOffset;

    return coord;
}

void main(void)
{
    vec2 coord = mapCoord(vTextureCoord);
    coord = twist(coord);
    coord = unmapCoord(coord);
    finalColor = texture(uTexture, coord);
}
`,ol=`struct TwistUniforms {
  uTwist:vec2<f32>,
  uOffset:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> twistUniforms : TwistUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  return textureSample(uTexture, uSampler, unmapCoord(twist(mapCoord(uv))));
}

fn mapCoord(coord: vec2<f32> ) -> vec2<f32>
{
  var mappedCoord: vec2<f32> = coord;
  mappedCoord *= gfu.uInputSize.xy;
  mappedCoord += gfu.uOutputFrame.xy;
  return mappedCoord;
}

fn unmapCoord(coord: vec2<f32> ) -> vec2<f32>
{
  var mappedCoord: vec2<f32> = coord;
  mappedCoord -= gfu.uOutputFrame.xy;
  mappedCoord /= gfu.uInputSize.xy;
  return mappedCoord;
}

fn twist(coord: vec2<f32>) -> vec2<f32>
{
  var twistedCoord: vec2<f32> = coord;
  let uRadius = twistUniforms.uTwist[0];
  let uAngle = twistUniforms.uTwist[1];
  let uOffset = twistUniforms.uOffset;

  twistedCoord -= uOffset;
  
  let dist = length(twistedCoord);

  if (dist < uRadius)
  {
    let ratioDist: f32 = (uRadius - dist) / uRadius;
    let angleMod: f32 = ratioDist * ratioDist * uAngle;
    let s: f32 = sin(angleMod);
    let c: f32 = cos(angleMod);
    twistedCoord = vec2<f32>(twistedCoord.x * c - twistedCoord.y * s, twistedCoord.x * s + twistedCoord.y * c);
  }

  twistedCoord += uOffset;
  return twistedCoord;
}
`,sl=Object.defineProperty,cl=(e,t,n)=>t in e?sl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ll=(e,t,n)=>(cl(e,typeof t==`symbol`?t:t+``,n),n);ll(class e extends D{constructor(t){t={...e.DEFAULT_OPTIONS,...t};let n=g.from({vertex:{source:X,entryPoint:`mainVertex`},fragment:{source:ol,entryPoint:`mainFragment`}}),r=m.from({vertex:Y,fragment:al,name:`twist-filter`});super({gpuProgram:n,glProgram:r,resources:{twistUniforms:{uTwist:{value:[t.radius??0,t.angle??0],type:`vec2<f32>`},uOffset:{value:t.offset,type:`vec2<f32>`}}},...t}),ll(this,`uniforms`),this.uniforms=this.resources.twistUniforms.uniforms}get radius(){return this.uniforms.uTwist[0]}set radius(e){this.uniforms.uTwist[0]=e}get angle(){return this.uniforms.uTwist[1]}set angle(e){this.uniforms.uTwist[1]=e}get offset(){return this.uniforms.uOffset}set offset(e){this.uniforms.uOffset=e}get offsetX(){return this.offset.x}set offsetX(e){this.offset.x=e}get offsetY(){return this.offset.y}set offsetY(e){this.offset.y=e}},`DEFAULT_OPTIONS`,{padding:20,radius:200,angle:4,offset:{x:0,y:0}});var ul=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uStrength;
uniform vec2 uCenter;
uniform vec2 uRadii;

uniform vec4 uInputSize;

const float MAX_KERNEL_SIZE = \${MAX_KERNEL_SIZE};

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand(vec2 co, float seed) {
    const highp float a = 12.9898, b = 78.233, c = 43758.5453;
    highp float dt = dot(co + seed, vec2(a, b)), sn = mod(dt, 3.14159);
    return fract(sin(sn) * c + seed);
}

void main() {
    float minGradient = uRadii[0] * 0.3;
    float innerRadius = (uRadii[0] + minGradient * 0.5) / uInputSize.x;

    float gradient = uRadii[1] * 0.3;
    float radius = (uRadii[1] - gradient * 0.5) / uInputSize.x;

    float countLimit = MAX_KERNEL_SIZE;

    vec2 dir = vec2(uCenter.xy / uInputSize.xy - vTextureCoord);
    float dist = length(vec2(dir.x, dir.y * uInputSize.y / uInputSize.x));

    float strength = uStrength;

    float delta = 0.0;
    float gap;
    if (dist < innerRadius) {
        delta = innerRadius - dist;
        gap = minGradient;
    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
        delta = dist - radius;
        gap = gradient;
    }

    if (delta > 0.0) {
        float normalCount = gap / uInputSize.x;
        delta = (normalCount - delta) / normalCount;
        countLimit *= delta;
        strength *= delta;
        if (countLimit < 1.0)
        {
            gl_FragColor = texture(uTexture, vTextureCoord);
            return;
        }
    }

    // randomize the lookup values to hide the fixed number of samples
    float offset = rand(vTextureCoord, 0.0);

    float total = 0.0;
    vec4 color = vec4(0.0);

    dir *= strength;

    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {
        float percent = (t + offset) / MAX_KERNEL_SIZE;
        float weight = 4.0 * (percent - percent * percent);
        vec2 p = vTextureCoord + dir * percent;
        vec4 sample = texture(uTexture, p);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample * weight;
        total += weight;

        if (t > countLimit){
            break;
        }
    }

    color /= total;
    // switch back from pre-multiplied alpha
    // color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`,dl=`struct ZoomBlurUniforms {
    uStrength:f32,
    uCenter:vec2<f32>,
    uRadii:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> zoomBlurUniforms : ZoomBlurUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uStrength = zoomBlurUniforms.uStrength;
  let uCenter = zoomBlurUniforms.uCenter;
  let uRadii = zoomBlurUniforms.uRadii;

  let minGradient: f32 = uRadii[0] * 0.3;
  let innerRadius: f32 = (uRadii[0] + minGradient * 0.5) / gfu.uInputSize.x;

  let gradient: f32 = uRadii[1] * 0.3;
  let radius: f32 = (uRadii[1] - gradient * 0.5) / gfu.uInputSize.x;

  let MAX_KERNEL_SIZE: f32 = \${MAX_KERNEL_SIZE};

  var countLimit: f32 = MAX_KERNEL_SIZE;

  var dir: vec2<f32> = vec2<f32>(uCenter / gfu.uInputSize.xy - uv);
  let dist: f32 = length(vec2<f32>(dir.x, dir.y * gfu.uInputSize.y / gfu.uInputSize.x));

  var strength: f32 = uStrength;

  var delta: f32 = 0.0;
  var gap: f32;

  if (dist < innerRadius) {
      delta = innerRadius - dist;
      gap = minGradient;
  } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
      delta = dist - radius;
      gap = gradient;
  }

  var returnColorOnly: bool = false;

  if (delta > 0.0) {
    let normalCount: f32 = gap / gfu.uInputSize.x;
    delta = (normalCount - delta) / normalCount;
    countLimit *= delta;
    strength *= delta;
    
    if (countLimit < 1.0)
    {
      returnColorOnly = true;;
    }
  }

  // randomize the lookup values to hide the fixed number of samples
  let offset: f32 = rand(uv, 0.0);

  var total: f32 = 0.0;
  var color: vec4<f32> = vec4<f32>(0.);

  dir *= strength;

  for (var t = 0.0; t < MAX_KERNEL_SIZE; t += 1.0) {
    let percent: f32 = (t + offset) / MAX_KERNEL_SIZE;
    let weight: f32 = 4.0 * (percent - percent * percent);
    let p: vec2<f32> = uv + dir * percent;
    let sample: vec4<f32> = textureSample(uTexture, uSampler, p);
    
    if (t < countLimit)
    {
      color += sample * weight;
      total += weight;
    }
  }

  color /= total;

  return select(color, textureSample(uTexture, uSampler, uv), returnColorOnly);
}

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
fn rand(co: vec2<f32>, seed: f32) -> f32
{
  let a: f32 = 12.9898;
  let b: f32 = 78.233;
  let c: f32 = 43758.5453;
  let dt: f32 = dot(co + seed, vec2<f32>(a, b));
  let sn: f32 = modulo(dt, 3.14159);
  return fract(sin(sn) * c + seed);
}`,fl=Object.defineProperty,pl=(e,t,n)=>t in e?fl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ml=(e,t,n)=>(pl(e,typeof t==`symbol`?t:t+``,n),n);ml(class e extends D{constructor(t){t={...e.DEFAULT_OPTIONS,...t};let n=t.maxKernelSize??32,r=g.from({vertex:{source:X,entryPoint:`mainVertex`},fragment:{source:dl.replace("${MAX_KERNEL_SIZE}",n.toFixed(1)),entryPoint:`mainFragment`}}),i=m.from({vertex:Y,fragment:ul.replace("${MAX_KERNEL_SIZE}",n.toFixed(1)),name:`zoom-blur-filter`});super({gpuProgram:r,glProgram:i,resources:{zoomBlurUniforms:{uStrength:{value:t.strength,type:`f32`},uCenter:{value:t.center,type:`vec2<f32>`},uRadii:{value:new Float32Array(2),type:`vec2<f32>`}}}}),ml(this,`uniforms`),this.uniforms=this.resources.zoomBlurUniforms.uniforms,Object.assign(this,t)}get strength(){return this.uniforms.uStrength}set strength(e){this.uniforms.uStrength=e}get center(){return this.uniforms.uCenter}set center(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uCenter=e}get centerX(){return this.uniforms.uCenter.x}set centerX(e){this.uniforms.uCenter.x=e}get centerY(){return this.uniforms.uCenter.y}set centerY(e){this.uniforms.uCenter.y=e}get innerRadius(){return this.uniforms.uRadii[0]}set innerRadius(e){this.uniforms.uRadii[0]=e}get radius(){return this.uniforms.uRadii[1]}set radius(e){this.uniforms.uRadii[1]=e<0||e===1/0?-1:e}},`DEFAULT_OPTIONS`,{strength:.1,center:{x:0,y:0},innerRadius:0,radius:-1,maxKernelSize:32});var hl=class e{_animationNameToAnimatedSprite;_textureImageURL;_spriteSheetURL;constructor(e,t){this._textureImageURL=e,this._spriteSheetURL=t,this._animationNameToAnimatedSprite=new Map}async initializeAndReparent(t,r){let i=await(await fetch(this._spriteSheetURL)).json();await O.load(this._textureImageURL);let a=new ge(n.from(this._textureImageURL),i);await a.parse();let o=new l(i.meta.size.w,i.meta.size.h);for(let[e,t]of Object.entries(a.animations))this._animationNameToAnimatedSprite.set(e,new cn(t));this._animationNameToAnimatedSprite.forEach((t,n)=>{t.label=e.name,r.addChild(t),t.setSize(o.x,o.y),P.setAnchorAndAdjustPosition(t,new l(.5,.5))})}play(e,t){let n=this._animationNameToAnimatedSprite.get(e);if(n==null)throw Error(`Trying to play unknown animation with animationName=`+e);n.animationSpeed=t,n.play()}},gl={spriteSheetURL:``,canCollisionCheck:!0,isTickable:!0,isResizable:!0},_l=class e extends F{get configuration(){return this._configuration}_multiAnimatedSprite;constructor(t,n){super(t,{...gl,...n}),this.label=e.name,this.initializeAsync()}async initializeAsync(){await super.initializeAsync();let e=this.configuration.spriteSheetURL;this._multiAnimatedSprite=new hl(e,`assets/images/AnimatedCoin/animated_coin.json`),await this._multiAnimatedSprite.initializeAndReparent(this._app,this),this._multiAnimatedSprite.play(`Gold`,.2)}onTick(e){super.onTick(e)}},vl=class{spinAndShrink(e,t,n,r,i){return j.sequence(j.delay(t),j.runFunc(()=>{r()}),j.parallel(j.rotateTo(e,1,n,A.smooth2),j.scaleTo(e,0,0,n,A.smooth2)),j.runFunc(()=>{i()}))}riseAndGrow(e,t,n,r,i){return j.sequence(j.delay(t),j.runFunc(()=>{r()}),j.parallel(j.moveTo(e,e.x,e.y-e.height,n,A.smooth2),j.scaleTo(e,2,2,n,A.smooth2)),j.runFunc(()=>{i()}))}},yl=class{static Animations=new vl},bl=class e extends _l{get canCollisionBeChecked(){return!0}constructor(t){super(t,{spriteSheetURL:`assets/images/AnimatedCoin/animated_coin.png`,canCollisionCheck:!1,isTickable:!1,isResizable:!1}),this.label=e.name}whatever(){this.isCollected=!0,this.destroyAfterAnimation()}async initializeAsync(){await super.initializeAsync(),this.filters=[new Bs({blur:1,alpha:.5,quality:3,resolution:2})]}destroyAfterAnimation(){yl.Animations.riseAndGrow(this,0,20,()=>{this._app.systemManager.getItem(B).play(`./assets/audio/Chime01.mp3`)},()=>{this.destroy()}).play()}isCollected=!1;collect(){this.isCollected||(this.isCollected=!0,this.destroyAfterAnimation())}},xl={textureUrl:``,texture:n.EMPTY,canCollisionCheck:!0,isTickable:!0,isResizable:!0},Sl=class e extends F{get configuration(){return this._configuration}_sprite;constructor(t,n){if(super(t,{...xl,...n}),!P.textureIsNullOrEmpty(this.configuration?.texture)&&!P.stringIsNullOrEmpty(this.configuration?.textureUrl))throw Error(`You cannot set both texture and textureUrl in the configuration`);this.initializeAsync(),this.label=e.name}async initializeAsync(){await super.initializeAsync(),P.textureIsNullOrEmpty(this.configuration?.texture)?P.stringIsNullOrEmpty(this.configuration?.textureUrl)||(await O.load([this.configuration.textureUrl]),this._sprite=new r(n.from(this.configuration.textureUrl))):this._sprite=new r(this.configuration?.texture),this._sprite&&(this._sprite.label=this.label,this.addChild(this._sprite),P.setAnchorAndAdjustPositionAndParent(this,this._sprite,new l(.5,.5)))}onTick(e){super.onTick(e)}},Cl=class e extends Sl{get canCollisionBeChecked(){return!0}constructor(t,n){n&&(n.canCollisionCheck=!1),super(t,n),this.label=e.name}async initializeAsync(){await super.initializeAsync(),this.filters=[new Bs({blur:1,alpha:.5,quality:3,resolution:2})]}onTick(e){super.onTick(e),this._sprite.rotation+=.01*e.deltaTime}destroyAfterAnimation(){yl.Animations.spinAndShrink(this._sprite,0,20,()=>{this._app.systemManager.getItem(B).play(`./assets/audio/Chime02.mp3`)},()=>{this.destroy()}).play()}isCollected=!1;collect(){this.isCollected||(this.isCollected=!0,this.destroyAfterAnimation())}},wl={moveSpeed:.25,textureUrl:``,texture:n.EMPTY,canCollisionCheck:!0,isTickable:!0,isResizable:!0},Tl=class e extends Sl{get canCollisionBeChecked(){return!0}get configuration(){return this._configuration}target;constructor(t,n){super(t,{...wl,...n}),this.label=e.name}async initializeAsync(){await super.initializeAsync(),this._sprite.filters=[new Bs({blur:1,alpha:.5,quality:3,resolution:2})],this._sprite.anchor.set(0,0)}getStageContainersOfTypePlayer(){return this._app.systemManager.getItem(sr).stageContainers.filter(e=>e instanceof Dl)}moveTowardsTarget(){let e=this.target.x,t=this.target.y,n=e-this.x,r=t-this.y,i=Math.sqrt(n*n+r*r);if(i>this.configuration.moveSpeed){let e=n/i,t=r/i;this.x+=e*this.configuration.moveSpeed,this.y+=t*this.configuration.moveSpeed}else this.x=e,this.y=t}onTick(e){super.onTick(e),this.target||=this.getStageContainersOfTypePlayer()[0],this.target&&this.moveTowardsTarget()}},$=class{static Space=32;static Enter=13;static Escape=27;static LeftArrow=37;static UpArrow=38;static RightArrow=39;static DownArrow=40;static A=65;static B=66;static C=67;static D=68;static E=69;static F=70;static G=71;static H=72;static I=73;static J=74;static K=75;static L=76;static M=77;static N=78;static O=79;static P=80;static Q=81;static R=82;static S=83;static T=84;static U=85;static V=86;static W=87;static X=88;static Y=89;static Z=90;static Num0=48;static Num1=49;static Num2=50;static Num3=51;static Num4=52;static Num5=53;static Num6=54;static Num7=55;static Num8=56;static Num9=57;static LeftControl=17;static RightControl=17;static LeftShift=16;static RightShift=16;static LeftAlt=18;static RightAlt=18;static LeftMeta=91;static RightMeta=93},El={textureUrl:``,texture:n.EMPTY,canCollisionCheck:!0,isTickable:!0,isResizable:!0},Dl=class e extends Sl{get canCollisionBeChecked(){return!0}timeAtLastTakeDamageMS=0;healthDeltaPerEnemyHit=-10;static timeBetweenTakeDamageMS=2e3;constructor(t,n){super(t,{...El,...n}),this.label=e.name,this.on(`pointerdown`,e=>{this.position.x+=10}),this.eventMode=`static`}async initializeAsync(){await super.initializeAsync(),this._sprite.filters=[new Bs({blur:1,alpha:.5,quality:3,resolution:2})],this._sprite.anchor.set(0,0);let e=this._app.systemManager.getItem(J);e&&e.onResponse(Ma,e=>{console.log(`playerOnGamePacketResponse :`,e)})}isCollisionWithTilemap(e,t){return this._app.systemManager.getItem(Ia).isCollision(e,t,this.width,this.height)}handleMovement(e){let t=new l(0,0),n=this._app.systemManager.getItem(V).isKeyDown($.LeftShift)||this._app.systemManager.getItem(V).isKeyDown($.RightShift);(this._app.systemManager.getItem(V).isKeyDown($.A)||this._app.systemManager.getItem(V).isKeyDown($.LeftArrow))&&(t.x+=-1),(this._app.systemManager.getItem(V).isKeyDown($.D)||this._app.systemManager.getItem(V).isKeyDown($.RightArrow))&&(t.x+=1),(this._app.systemManager.getItem(V).isKeyDown($.W)||this._app.systemManager.getItem(V).isKeyDown($.UpArrow))&&(t.y+=-1),(this._app.systemManager.getItem(V).isKeyDown($.S)||this._app.systemManager.getItem(V).isKeyDown($.DownArrow))&&(t.y+=1),this._app.systemManager.getItem(V).isKeyDownThisFrame($.Space)&&this._app.systemManager.getItem(B).play(`./assets/audio/Click01.wav`);let r=n?10:3,i=this.position.x+t.x*e.deltaTime*r,a=this.position.y+t.y*e.deltaTime*r,o=this.width/2,s=this.height/2;t.x!==0&&!this.isCollisionWithTilemap(i+(t.x>0?-this.width/2:-o),this.position.y)&&(this.position.x=i),t.y!==0&&!this.isCollisionWithTilemap(this.position.x,a+(t.y>0?-this.height/2:-s))&&(this.position.y=a),(t.x!==0||t.y!==0)&&this.multiplayerEmitGamePacketRequestSafe()}takeDamage(t){let n=this._app.app.ticker.lastTime;n-this.timeAtLastTakeDamageMS>e.timeBetweenTakeDamageMS&&(this._app.systemManager.getItem(B).play(`./assets/audio/Hit01.mp3`),this.timeAtLastTakeDamageMS=n,this._app.configuration.data.health.Value=Math.max(0,this._app.configuration.data.health.Value+t))}multiplayerEmitGamePacketRequestSafe(){let e=this._app.systemManager.getItem(J);e&&e.emitGamePacketRequest(new ja(this.x,this.y))}onTick(e){if(super.onTick(e),this.handleMovement(e),this._app.systemManager.getItem(V).isKeyDownThisFrame($.F)&&(this._app.isFullscreen=!this._app.isFullscreen,this._app.systemManager.getItem(B).play(`./assets/audio/Click01.wav`)),this._app.systemManager.getItem(V).isKeyDownThisFrame($.R)&&(this._app.systemManager.getItem(B).play(`./assets/audio/Click01.wav`),this._app.reload()),this._app.systemManager.getItem(V).isKeyDownThisFrame($.O)&&(this._app.systemManager.getItem(B).play(`./assets/audio/Click01.wav`),this._app.systemManager.getItem(H).clearAllData(),this._app.reload()),this._app.systemManager.getItem(V).isKeyDownThisFrame($.P)&&(this._app.systemManager.getItem(B).play(`./assets/audio/Click01.wav`),this._app.app.ticker.started=!this._app.app.ticker.started),this._app.systemManager.getItem(V).isKeyDownThisFrame($.L)){this._app.systemManager.getItem(B).play(`./assets/audio/Click01.wav`);let e=this._app.systemManager.getItem(J);e&&e.nextTargetLatency()}if(this._app.systemManager.getItem(V).isKeyDownThisFrame($.K)){this._app.systemManager.getItem(B).play(`./assets/audio/Click01.wav`);let e=this._app.systemManager.getItem(J);e&&e.nextTargetPacketLoss()}}onCollision(e){e.forEach(e=>{let t=this._app.configuration.data;if(e instanceof bl&&!e.isCollected){e.collect(),t.coinsCollected.Value++;return}if(e instanceof Cl&&!e.isCollected){e.collect();return}e instanceof Tl&&this.takeDamage(this.healthDeltaPerEnemyHit)})}},Ol=class e extends Sl{constructor(t,n){super(t,n),this.label=e.name}async initializeAsync(){await super.initializeAsync()}},kl=class e extends Ol{constructor(t,n){super(t,n),this.label=e.name}async initializeAsync(){await super.initializeAsync()}},Al=class e extends Ol{constructor(t,n){super(t,n),this.label=e.name}async initializeAsync(){await super.initializeAsync()}},jl=class{_app;constructor(e){this._app=e}async createTilemapItem(e,t){let n=this._app.configuration.data;switch(t.layerType){case Ua.TileLayer:return new r(t.texture);case Ua.ObjectGroup:switch(t.type){case Cl.name:let e={textureUrl:``,texture:t.texture,canCollisionCheck:!1,isTickable:!0,isResizable:!1};return t.x+=t.width,t.y+=t.height,new Cl(this._app,e);case bl.name:return n.coinsMax.Value++,t.x+=t.width,t.y+=t.height,new bl(this._app);case kl.name:let i=new kl(this._app,{texture:t.texture});i.alpha=.2,t.x+=t.width,t.y+=t.height,console.log(`#hack Tilemap positions player poorly.`);let a=new l(this._app.getScreenCenterpoint().x-64,this._app.getScreenCenterpoint().y);return this._app.configuration.data.playerSpawnpoint=a,i;case Al.name:let o=new Al(this._app,{texture:t.texture});o.alpha=.2,t.x+=t.width,t.y+=t.height,console.log(`#hack Tilemap positions enemy poorly.`);let s=new l(this._app.getScreenCenterpoint().x+64,this._app.getScreenCenterpoint().y);return this._app.configuration.data.enemySpawnerSpawnpoint=s,o;default:let c=new r(t.texture);return c.roundPixels=!0,c.interactive=!1,c}}}},Ml=class e extends Sl{displayMessage;constructor(t,n){super(t),this.displayMessage=n,this.label=e.name}async initializeAsync(){await super.initializeAsync();let e=new he().rect(0,0,32,32).fill({color:16777215,alpha:.5});e.x=-e.width/2,e.y=-e.height/2,this.addChild(e);let t=new me;t.fontSize=12,t.fill=`#ffffff`,t.align=`center`;let n=new dn({text:this.displayMessage,style:t,resolution:2});n.x=-n.width/2,n.y=-n.height/2,this.addChild(n)}},Nl={perEnemytextureUrl:``,enemySpawnerIsEnabled:!0,timeBetweenSpawnsMS:2e3,maxToSpawn:10,textureUrl:``,texture:n.EMPTY,canCollisionCheck:!1,isTickable:!0,isResizable:!1},Pl=class e extends Sl{get canCollisionBeChecked(){return!0}get configuration(){return this._configuration}timeSinceLastSpawnMS=0;enemies=[];constructor(t,n){super(t,{...Nl,...n}),this.label=e.name}async initializeAsync(){await super.initializeAsync(),this._sprite.filters=[new Bs({blur:1,alpha:.5,quality:3,resolution:2})],this._sprite.anchor.set(0,0),this.spawnEnemy()}spawnEnemy(){if(!this.configuration.enemySpawnerIsEnabled)return;this.timeSinceLastSpawnMS=0;let e=new Tl(this._app,{textureUrl:this.configuration.perEnemytextureUrl});e.position.set(this.position.x,this.position.y),e.zIndex=100-this.enemies.length,this._app.addToViewport(e),this.enemies.push(e)}onTick(e){super.onTick(e),!(this.enemies.length>=this.configuration.maxToSpawn)&&(this.timeSinceLastSpawnMS+=e.deltaMS,this.timeSinceLastSpawnMS>this.configuration.timeBetweenSpawnsMS&&this.spawnEnemy())}},Fl=class extends Sl{async initializeAsync(){await super.initializeAsync(),this._sprite.filters=[new Bs({blur:1,alpha:.5,quality:3,resolution:2})],this._sprite.alpha=.5,this._sprite.anchor.set(0,0),this.initializeMultiplayer()}initializeMultiplayer(){let e=this._app.systemManager.getItem(J);e&&e.onResponse(Ma,t=>{let n=t.data.socketId==e.localSocketId;if(!n){console.log(`ghost.OnResponse() NOPE! :`,t.data.socketId,e.localSocketId);return}console.log(`ghost.OnResponse() :`,n,t.data.x,t.data.y);let r=new l(t.data.x,t.data.y);r=this._app.viewport.toGlobal(r),this.position=r})}onTick(e){super.onTick(e)}},Il=class extends Va{get treasureHunterData(){return this._treasureHunterData}_stats;_treasureHunterData;_scoreText;_instructionsText;_player;screenDebugMarker;worldDebugMarker;tilemapDebugMarker;_stageDebugMarker;constructor(e){super(e),this._treasureHunterData=e.data,this._stats=new fn.default,this._stats.showPanel(0),this._stats.dom.className=`stats-panel`,document.body.appendChild(this._stats.dom),globalThis.__PIXI_APP__=this.app,this.addListener(Va.EVENT_INITIALIZE_COMPLETE,this.onInitializeCompleted.bind(this)),this.addListener(Va.EVENT_INITIALIZE_ERROR,this.onInitializeError.bind(this))}async onInitializeCompleted(){let e=new Wa(this,this._treasureHunterData.tilemapDataUrl,new jl(this));await e.initializeAsync(),this.addToViewport(e),e.x=this.getScreenCenterpoint().x-e.width/2,e.y=this.getScreenCenterpoint().y-e.height/2,this.systemManager.getItem(Ia).setTilemap(e),this.screenDebugMarker=new Ml(this,`Screen(C,C) - Relative`),this.addToViewport(this.screenDebugMarker),this.screenDebugMarker.position=this.getScreenCenterpoint(),this.worldDebugMarker=new Ml(this,`World(0,0)`),this.addToViewport(this.worldDebugMarker),this.worldDebugMarker.position=new l,this.tilemapDebugMarker=new Ml(this,`Tilemap(0,0)`),this.addToViewport(this.tilemapDebugMarker),this.tilemapDebugMarker.position=e.position,this._stageDebugMarker=new Ml(this,`Stage (0,0)`),this.addToStage(this._stageDebugMarker),this._stageDebugMarker.position=new l;let t={perEnemytextureUrl:this._treasureHunterData.enemyTextureUrl,timeBetweenSpawnsMS:4e3,enemySpawnerIsEnabled:!1,maxToSpawn:3,textureUrl:this._treasureHunterData.enemySpawnerTextureUrl,texture:n.EMPTY,canCollisionCheck:!1,isTickable:!0,isResizable:!1},r=new Pl(this,t);this.addToViewport(r),r.position=this.configuration.data.enemySpawnerSpawnpoint,this._player=new Dl(this,{textureUrl:this._treasureHunterData.playerTextureUrl}),this.addToViewport(this._player),this._player.position=this.configuration.data.playerSpawnpoint;let i=new Fl(this,{textureUrl:this._treasureHunterData.playerGhostTextureUrl});if(this.addToStage(i),i.position=this._player.position,this.viewport.follow(this._player,{speed:1,acceleration:1,radius:500}),this.systemManager.getItem(H).hasData(`timeElapsedBest`)){let e=this.systemManager.getItem(H).getData(`timeElapsedBest`);this._treasureHunterData.timeElapsedBest.Value=e}let a=new me;a.fontFamily=`Arial`,a.fontSize=40,a.fill=`#ffffff`,a.align=`left`,this._instructionsText=new qa(this,`see onRefreshUI`,{textStyle:a}),this.addToStage(this._instructionsText);let o=new me;o.fontFamily=`Arial`,o.fontSize=40,o.fill=`#ffffff`,o.align=`right`,this._scoreText=new Ja(this,`see onRefreshUI`,{textStyle:o}),this.addToStage(this._scoreText),this.app.ticker.add(e=>{this._stats.begin(),j.tick(e.deltaTime),this._treasureHunterData.timeElapsed.Value=Math.floor(e.lastTime/1e3),this._stats.end()}),this._treasureHunterData.coinsCollected.OnValueChanged.on(this.CoinsCollected_OnValueChanged.bind(this)),this._treasureHunterData.coinsMax.OnValueChanged.on(this.onRefreshUI.bind(this)),this._treasureHunterData.health.OnValueChanged.on(this.onRefreshUI.bind(this)),this._treasureHunterData.timeElapsed.OnValueChanged.on(this.onRefreshUI.bind(this)),this._treasureHunterData.timeElapsedBest.OnValueChanged.on(this.onRefreshUI.bind(this)),this.onRefreshUI()}CoinsCollected_OnValueChanged(){this.onRefreshUI(),console.log(this._treasureHunterData.coinsCollected.Value),this._treasureHunterData.coinsCollected.Value>=this._treasureHunterData.coinsMax.Value&&(this.systemManager.getItem(H).saveData(`timeElapsedBest`,this._treasureHunterData.timeElapsed.Value),this.reload())}onRefreshUI(){let e=P.FormatNumber(this._treasureHunterData.coinsCollected.Value,2),t=P.FormatNumber(this._treasureHunterData.coinsMax.Value,2),n=P.FormatNumber(Math.round(this._treasureHunterData.timeElapsed.Value),4),r=P.FormatNumber(Math.round(this._treasureHunterData.timeElapsedBest.Value),4),i=P.FormatNumber(Math.round(this._treasureHunterData.health.Value),4),a=``;a+=`Best Time ${r}\n`,a+=`Time ${n}\n`,a+=`Coins ${e}/${t}\n`,a+=`Health ${i}\n`,this._scoreText.textString=a;let o=``,s=``,c=this.systemManager.getItem(J);c&&c.isConnected&&(o=`L for Latency (${c.targetLatencyMS})\n`,s=`K for Packet Loss (${c.targetPacketLoss})\n`);let l=``;l+=`WASD/Arrows To Walk
`,l+=`Spacebar To Attack
`,l+=`Shift To Run
`,l+=`P To Pause (Broken)
`,l+=`O For Clear Data
`,l+=`F For Fullscreen
`,l+=`R For Restart
`,l+=o,l+=s,this._instructionsText.textString=l}onInitializeError(e){console.error(`PIXI.Application.init() failed. error = ${e}`)}},Ll={canvasId:`pixi-application-canvas`,widthInitial:1920,heightInitial:1080,minFPS:1,maxFPS:240,backgroundColor:8881786,data:{logoImageUrl:`assets/images/pixijs-logo-32x32.png`,tilemapDataUrl:`assets/tilemaps/TreasureHunter2D.tmj`,playerTextureUrl:`assets/images/player.png`,playerGhostTextureUrl:`assets/images/player-ghost.png`,enemySpawnerIsEnabled:!1,enemySpawnerTextureUrl:`assets/images/enemy-spawner.png`,enemyTextureUrl:`assets/images/enemy.png`,coinsCollected:new we(0),coinsMax:new we(0),timeElapsed:new we(0),timeElapsedBest:new we(0),health:new we(100),screenUIMarginX:10,screenUIMarginY:10,playerSpawnpoint:new l(0,0),enemySpawnerSpawnpoint:new l(0,0)}};async function Rl(e){let t=document.getElementById(e);if(!t)throw Error(`Canvas with id ${e} not found`);let n=window.getComputedStyle(t),r=parseInt(n.width,10)-4,i=parseInt(n.height,10)-4;console.log(`createAndInitializeApp() id = ${e} at size ${r}x${i}`);let a=new Il({...Ll,canvasId:e,widthInitial:r,heightInitial:i});return await a.initializeAsync(),a}window.createAndInitializeApp=Rl;export{Rl as createAndInitializeApp,Ll as gixiAppConfiguration};