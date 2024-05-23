(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Uc(t,e){const n=new Set(t.split(","));return i=>n.has(i)}const ft={},Vr=[],hn=()=>{},Hv=()=>!1,Ta=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Nc=t=>t.startsWith("onUpdate:"),xt=Object.assign,Fc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Gv=Object.prototype.hasOwnProperty,Ke=(t,e)=>Gv.call(t,e),De=Array.isArray,zr=t=>Aa(t)==="[object Map]",np=t=>Aa(t)==="[object Set]",Ne=t=>typeof t=="function",yt=t=>typeof t=="string",pr=t=>typeof t=="symbol",at=t=>t!==null&&typeof t=="object",ip=t=>(at(t)||Ne(t))&&Ne(t.then)&&Ne(t.catch),rp=Object.prototype.toString,Aa=t=>rp.call(t),Wv=t=>Aa(t).slice(8,-1),sp=t=>Aa(t)==="[object Object]",Oc=t=>yt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ts=Uc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Xv=/-(\w)/g,yn=wa(t=>t.replace(Xv,(e,n)=>n?n.toUpperCase():"")),$v=/\B([A-Z])/g,rs=wa(t=>t.replace($v,"-$1").toLowerCase()),ri=wa(t=>t.charAt(0).toUpperCase()+t.slice(1)),nl=wa(t=>t?`on${ri(t)}`:""),Di=(t,e)=>!Object.is(t,e),il=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},op=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},qv=t=>{const e=parseFloat(t);return isNaN(e)?t:e},ap=t=>{const e=yt(t)?Number(t):NaN;return isNaN(e)?t:e};let Gu;const lp=()=>Gu||(Gu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ca(t){if(De(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=yt(i)?Zv(i):Ca(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(yt(t)||at(t))return t}const Yv=/;(?![^(]*\))/g,jv=/:([^]+)/,Kv=/\/\*[^]*?\*\//g;function Zv(t){const e={};return t.replace(Kv,"").split(Yv).forEach(n=>{if(n){const i=n.split(jv);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Bc(t){let e="";if(yt(t))e=t;else if(De(t))for(let n=0;n<t.length;n++){const i=Bc(t[n]);i&&(e+=i+" ")}else if(at(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Jv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Qv=Uc(Jv);function cp(t){return!!t||t===""}const As=t=>yt(t)?t:t==null?"":De(t)||at(t)&&(t.toString===rp||!Ne(t.toString))?JSON.stringify(t,up,2):String(t),up=(t,e)=>e&&e.__v_isRef?up(t,e.value):zr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[rl(i,s)+" =>"]=r,n),{})}:np(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>rl(n))}:pr(e)?rl(e):at(e)&&!De(e)&&!sp(e)?String(e):e,rl=(t,e="")=>{var n;return pr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let nn;class fp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=nn,!e&&nn&&(this.index=(nn.scopes||(nn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=nn;try{return nn=this,e()}finally{nn=n}}}on(){nn=this}off(){nn=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function e_(t){return new fp(t)}function t_(t,e=nn){e&&e.active&&e.effects.push(t)}function n_(){return nn}function i_(t){nn&&nn.cleanups.push(t)}let lr;class kc{constructor(e,n,i,r){this.fn=e,this.trigger=n,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,t_(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Bi();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(r_(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),ki()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=wi,n=lr;try{return wi=!0,lr=this,this._runnings++,Wu(this),this.fn()}finally{Xu(this),this._runnings--,lr=n,wi=e}}stop(){this.active&&(Wu(this),Xu(this),this.onStop&&this.onStop(),this.active=!1)}}function r_(t){return t.value}function Wu(t){t._trackId++,t._depsLength=0}function Xu(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)dp(t.deps[e],t);t.deps.length=t._depsLength}}function dp(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let wi=!0,nc=0;const hp=[];function Bi(){hp.push(wi),wi=!1}function ki(){const t=hp.pop();wi=t===void 0?!0:t}function Vc(){nc++}function zc(){for(nc--;!nc&&ic.length;)ic.shift()()}function pp(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const i=t.deps[t._depsLength];i!==e?(i&&dp(i,t),t.deps[t._depsLength++]=e):t._depsLength++}}const ic=[];function mp(t,e,n){Vc();for(const i of t.keys()){let r;i._dirtyLevel<e&&(r??(r=t.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=e),i._shouldSchedule&&(r??(r=t.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&ic.push(i.scheduler)))}zc()}const gp=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},ea=new WeakMap,cr=Symbol(""),rc=Symbol("");function Zt(t,e,n){if(wi&&lr){let i=ea.get(t);i||ea.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=gp(()=>i.delete(n))),pp(lr,r)}}function ii(t,e,n,i,r,s){const o=ea.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&De(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!pr(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":De(t)?Oc(n)&&a.push(o.get("length")):(a.push(o.get(cr)),zr(t)&&a.push(o.get(rc)));break;case"delete":De(t)||(a.push(o.get(cr)),zr(t)&&a.push(o.get(rc)));break;case"set":zr(t)&&a.push(o.get(cr));break}Vc();for(const l of a)l&&mp(l,4);zc()}function s_(t,e){const n=ea.get(t);return n&&n.get(e)}const o_=Uc("__proto__,__v_isRef,__isVue"),vp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(pr)),$u=a_();function a_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=je(this);for(let s=0,o=this.length;s<o;s++)Zt(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(je)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Bi(),Vc();const i=je(this)[e].apply(this,n);return zc(),ki(),i}}),t}function l_(t){pr(t)||(t=String(t));const e=je(this);return Zt(e,"has",t),e.hasOwnProperty(t)}class _p{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?S_:Mp:s?Sp:yp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=De(e);if(!r){if(o&&Ke($u,n))return Reflect.get($u,n,i);if(n==="hasOwnProperty")return l_}const a=Reflect.get(e,n,i);return(pr(n)?vp.has(n):o_(n))||(r||Zt(e,"get",n),s)?a:_t(a)?o&&Oc(n)?a:a.value:at(a)?r?Ks(a):$t(a):a}}class xp extends _p{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const l=Us(s);if(!ta(i)&&!Us(i)&&(s=je(s),i=je(i)),!De(e)&&_t(s)&&!_t(i))return l?!1:(s.value=i,!0)}const o=De(e)&&Oc(n)?Number(n)<e.length:Ke(e,n),a=Reflect.set(e,n,i,r);return e===je(r)&&(o?Di(i,s)&&ii(e,"set",n,i):ii(e,"add",n,i)),a}deleteProperty(e,n){const i=Ke(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&ii(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!pr(n)||!vp.has(n))&&Zt(e,"has",n),i}ownKeys(e){return Zt(e,"iterate",De(e)?"length":cr),Reflect.ownKeys(e)}}class c_ extends _p{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const u_=new xp,f_=new c_,d_=new xp(!0);const Hc=t=>t,Ra=t=>Reflect.getPrototypeOf(t);function po(t,e,n=!1,i=!1){t=t.__v_raw;const r=je(t),s=je(e);n||(Di(e,s)&&Zt(r,"get",e),Zt(r,"get",s));const{has:o}=Ra(r),a=i?Hc:n?Xc:Ns;if(o.call(r,e))return a(t.get(e));if(o.call(r,s))return a(t.get(s));t!==r&&t.get(e)}function mo(t,e=!1){const n=this.__v_raw,i=je(n),r=je(t);return e||(Di(t,r)&&Zt(i,"has",t),Zt(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function go(t,e=!1){return t=t.__v_raw,!e&&Zt(je(t),"iterate",cr),Reflect.get(t,"size",t)}function qu(t){t=je(t);const e=je(this);return Ra(e).has.call(e,t)||(e.add(t),ii(e,"add",t,t)),this}function Yu(t,e){e=je(e);const n=je(this),{has:i,get:r}=Ra(n);let s=i.call(n,t);s||(t=je(t),s=i.call(n,t));const o=r.call(n,t);return n.set(t,e),s?Di(e,o)&&ii(n,"set",t,e):ii(n,"add",t,e),this}function ju(t){const e=je(this),{has:n,get:i}=Ra(e);let r=n.call(e,t);r||(t=je(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&ii(e,"delete",t,void 0),s}function Ku(){const t=je(this),e=t.size!==0,n=t.clear();return e&&ii(t,"clear",void 0,void 0),n}function vo(t,e){return function(i,r){const s=this,o=s.__v_raw,a=je(o),l=e?Hc:t?Xc:Ns;return!t&&Zt(a,"iterate",cr),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function _o(t,e,n){return function(...i){const r=this.__v_raw,s=je(r),o=zr(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?Hc:e?Xc:Ns;return!e&&Zt(s,"iterate",l?rc:cr),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function ui(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function h_(){const t={get(s){return po(this,s)},get size(){return go(this)},has:mo,add:qu,set:Yu,delete:ju,clear:Ku,forEach:vo(!1,!1)},e={get(s){return po(this,s,!1,!0)},get size(){return go(this)},has:mo,add:qu,set:Yu,delete:ju,clear:Ku,forEach:vo(!1,!0)},n={get(s){return po(this,s,!0)},get size(){return go(this,!0)},has(s){return mo.call(this,s,!0)},add:ui("add"),set:ui("set"),delete:ui("delete"),clear:ui("clear"),forEach:vo(!0,!1)},i={get(s){return po(this,s,!0,!0)},get size(){return go(this,!0)},has(s){return mo.call(this,s,!0)},add:ui("add"),set:ui("set"),delete:ui("delete"),clear:ui("clear"),forEach:vo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=_o(s,!1,!1),n[s]=_o(s,!0,!1),e[s]=_o(s,!1,!0),i[s]=_o(s,!0,!0)}),[t,n,e,i]}const[p_,m_,g_,v_]=h_();function Gc(t,e){const n=e?t?v_:g_:t?m_:p_;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(Ke(n,r)&&r in i?n:i,r,s)}const __={get:Gc(!1,!1)},x_={get:Gc(!1,!0)},y_={get:Gc(!0,!1)};const yp=new WeakMap,Sp=new WeakMap,Mp=new WeakMap,S_=new WeakMap;function M_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function b_(t){return t.__v_skip||!Object.isExtensible(t)?0:M_(Wv(t))}function $t(t){return Us(t)?t:Wc(t,!1,u_,__,yp)}function bp(t){return Wc(t,!1,d_,x_,Sp)}function Ks(t){return Wc(t,!0,f_,y_,Mp)}function Wc(t,e,n,i,r){if(!at(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=b_(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function ws(t){return Us(t)?ws(t.__v_raw):!!(t&&t.__v_isReactive)}function Us(t){return!!(t&&t.__v_isReadonly)}function ta(t){return!!(t&&t.__v_isShallow)}function Ep(t){return t?!!t.__v_raw:!1}function je(t){const e=t&&t.__v_raw;return e?je(e):t}function E_(t){return Object.isExtensible(t)&&op(t,"__v_skip",!0),t}const Ns=t=>at(t)?$t(t):t,Xc=t=>at(t)?Ks(t):t;class Tp{constructor(e,n,i,r){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new kc(()=>e(this._value),()=>Yo(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=je(this);return(!e._cacheable||e.effect.dirty)&&Di(e._value,e._value=e.effect.run())&&Yo(e,4),Ap(e),e.effect._dirtyLevel>=2&&Yo(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function T_(t,e,n=!1){let i,r;const s=Ne(t);return s?(i=t,r=hn):(i=t.get,r=t.set),new Tp(i,r,s||!r,n)}function Ap(t){var e;wi&&lr&&(t=je(t),pp(lr,(e=t.dep)!=null?e:t.dep=gp(()=>t.dep=void 0,t instanceof Tp?t:void 0)))}function Yo(t,e=4,n){t=je(t);const i=t.dep;i&&mp(i,e)}function _t(t){return!!(t&&t.__v_isRef===!0)}function pt(t){return wp(t,!1)}function Je(t){return wp(t,!0)}function wp(t,e){return _t(t)?t:new A_(t,e)}class A_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:je(e),this._value=n?e:Ns(e)}get value(){return Ap(this),this._value}set value(e){const n=this.__v_isShallow||ta(e)||Us(e);e=n?e:je(e),Di(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ns(e),Yo(this,4))}}function qt(t){return _t(t)?t.value:t}const w_={get:(t,e,n)=>qt(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return _t(r)&&!_t(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Cp(t){return ws(t)?t:new Proxy(t,w_)}function $c(t){const e=De(t)?new Array(t.length):{};for(const n in t)e[n]=Rp(t,n);return e}class C_{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return s_(je(this._object),this._key)}}class R_{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function mt(t,e,n){return _t(t)?t:Ne(t)?new R_(t):at(t)&&arguments.length>1?Rp(t,e,n):pt(t)}function Rp(t,e,n){const i=t[e];return _t(i)?i:new C_(t,e,n)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ci(t,e,n,i){try{return i?t(...i):t()}catch(r){Zs(r,e,n)}}function _n(t,e,n,i){if(Ne(t)){const r=Ci(t,e,n,i);return r&&ip(r)&&r.catch(s=>{Zs(s,e,n)}),r}if(De(t)){const r=[];for(let s=0;s<t.length;s++)r.push(_n(t[s],e,n,i));return r}}function Zs(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Bi(),Ci(l,null,10,[t,o,a]),ki();return}}P_(t,n,r,i)}function P_(t,e,n,i=!0){console.error(t)}let Fs=!1,sc=!1;const Ft=[];let Fn=0;const Hr=[];let yi=null,nr=0;const Pp=Promise.resolve();let qc=null;function si(t){const e=qc||Pp;return t?e.then(this?t.bind(this):t):e}function L_(t){let e=Fn+1,n=Ft.length;for(;e<n;){const i=e+n>>>1,r=Ft[i],s=Os(r);s<t||s===t&&r.pre?e=i+1:n=i}return e}function Yc(t){(!Ft.length||!Ft.includes(t,Fs&&t.allowRecurse?Fn+1:Fn))&&(t.id==null?Ft.push(t):Ft.splice(L_(t.id),0,t),Lp())}function Lp(){!Fs&&!sc&&(sc=!0,qc=Pp.then(Dp))}function I_(t){const e=Ft.indexOf(t);e>Fn&&Ft.splice(e,1)}function oc(t){De(t)?Hr.push(...t):(!yi||!yi.includes(t,t.allowRecurse?nr+1:nr))&&Hr.push(t),Lp()}function Zu(t,e,n=Fs?Fn+1:0){for(;n<Ft.length;n++){const i=Ft[n];if(i&&i.pre){if(t&&i.id!==t.uid)continue;Ft.splice(n,1),n--,i()}}}function Ip(t){if(Hr.length){const e=[...new Set(Hr)].sort((n,i)=>Os(n)-Os(i));if(Hr.length=0,yi){yi.push(...e);return}for(yi=e,nr=0;nr<yi.length;nr++)yi[nr]();yi=null,nr=0}}const Os=t=>t.id==null?1/0:t.id,D_=(t,e)=>{const n=Os(t)-Os(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Dp(t){sc=!1,Fs=!0,Ft.sort(D_);try{for(Fn=0;Fn<Ft.length;Fn++){const e=Ft[Fn];e&&e.active!==!1&&Ci(e,null,14)}}finally{Fn=0,Ft.length=0,Ip(),Fs=!1,qc=null,(Ft.length||Hr.length)&&Dp()}}function U_(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||ft;let r=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:d}=i[u]||ft;d&&(r=n.map(h=>yt(h)?h.trim():h)),f&&(r=n.map(qv))}let a,l=i[a=nl(e)]||i[a=nl(yn(e))];!l&&s&&(l=i[a=nl(rs(e))]),l&&_n(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,_n(c,t,6,r)}}function Up(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!Ne(t)){const l=c=>{const u=Up(c,e,!0);u&&(a=!0,xt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(at(t)&&i.set(t,null),null):(De(s)?s.forEach(l=>o[l]=null):xt(o,s),at(t)&&i.set(t,o),o)}function Pa(t,e){return!t||!Ta(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ke(t,e[0].toLowerCase()+e.slice(1))||Ke(t,rs(e))||Ke(t,e))}let zt=null,Np=null;function na(t){const e=zt;return zt=t,Np=t&&t.type.__scopeId||null,e}function bt(t,e=zt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&ff(-1);const s=na(e);let o;try{o=t(...r)}finally{na(s),i._d&&ff(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function sl(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:g,inheritAttrs:v}=t,m=na(t);let p,M;try{if(n.shapeFlag&4){const b=r||i,P=b;p=En(c.call(P,b,u,f,h,d,g)),M=a}else{const b=e;p=En(b.length>1?b(f,{attrs:a,slots:o,emit:l}):b(f,null)),M=e.props?a:F_(a)}}catch(b){Ps.length=0,Zs(b,t,1),p=k(pn)}let y=p;if(M&&v!==!1){const b=Object.keys(M),{shapeFlag:P}=y;b.length&&P&7&&(s&&b.some(Nc)&&(M=O_(M,s)),y=Ui(y,M,!1,!0))}return n.dirs&&(y=Ui(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&(y.transition=n.transition),p=y,na(m),p}function N_(t,e=!0){let n;for(let i=0;i<t.length;i++){const r=t[i];if(sa(r)){if(r.type!==pn||r.children==="v-if"){if(n)return;n=r}}else return}return n}const F_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ta(n))&&((e||(e={}))[n]=t[n]);return e},O_=(t,e)=>{const n={};for(const i in t)(!Nc(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function B_(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Ju(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!Pa(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Ju(i,o,c):!0:!!o;return!1}function Ju(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!Pa(n,s))return!0}return!1}function jc({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Kc="components",k_="directives";function V_(t,e){return Jc(Kc,t,!0,e)||t}const Fp=Symbol.for("v-ndc");function Op(t){return yt(t)?Jc(Kc,t,!1)||t:t||Fp}function Zc(t){return Jc(k_,t)}function Jc(t,e,n=!0,i=!1){const r=zt||Rt;if(r){const s=r.type;if(t===Kc){const a=D0(s,!1);if(a&&(a===e||a===yn(e)||a===ri(yn(e))))return s}const o=Qu(r[t]||s[t],e)||Qu(r.appContext[t],e);return!o&&i?s:o}}function Qu(t,e){return t&&(t[e]||t[yn(e)]||t[ri(yn(e))])}const z_=t=>t.__isSuspense;let ac=0;const H_={name:"Suspense",__isSuspense:!0,process(t,e,n,i,r,s,o,a,l,c){if(t==null)G_(e,n,i,r,s,o,a,l,c);else{if(s&&s.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}W_(t,e,n,i,r,o,a,l,c)}},hydrate:X_,create:Qc,normalize:$_},Bp=H_;function Bs(t,e){const n=t.props&&t.props[e];Ne(n)&&n()}function G_(t,e,n,i,r,s,o,a,l){const{p:c,o:{createElement:u}}=l,f=u("div"),d=t.suspense=Qc(t,r,i,e,f,n,s,o,a,l);c(null,d.pendingBranch=t.ssContent,f,null,i,d,s,o),d.deps>0?(Bs(t,"onPending"),Bs(t,"onFallback"),c(null,t.ssFallback,e,n,i,null,s,o),Gr(d,t.ssFallback)):d.resolve(!1,!0)}function W_(t,e,n,i,r,s,o,a,{p:l,um:c,o:{createElement:u}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const d=e.ssContent,h=e.ssFallback,{activeBranch:g,pendingBranch:v,isInFallback:m,isHydrating:p}=f;if(v)f.pendingBranch=d,On(d,v)?(l(v,d,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():m&&(p||(l(g,h,n,i,r,null,s,o,a),Gr(f,h)))):(f.pendingId=ac++,p?(f.isHydrating=!1,f.activeBranch=v):c(v,r,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),m?(l(null,d,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():(l(g,h,n,i,r,null,s,o,a),Gr(f,h))):g&&On(d,g)?(l(g,d,n,i,r,f,s,o,a),f.resolve(!0)):(l(null,d,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0&&f.resolve()));else if(g&&On(d,g))l(g,d,n,i,r,f,s,o,a),Gr(f,d);else if(Bs(e,"onPending"),f.pendingBranch=d,d.shapeFlag&512?f.pendingId=d.component.suspenseId:f.pendingId=ac++,l(null,d,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0)f.resolve();else{const{timeout:M,pendingId:y}=f;M>0?setTimeout(()=>{f.pendingId===y&&f.fallback(h)},M):M===0&&f.fallback(h)}}function Qc(t,e,n,i,r,s,o,a,l,c,u=!1){const{p:f,m:d,um:h,n:g,o:{parentNode:v,remove:m}}=c;let p;const M=Y_(t);M&&e&&e.pendingBranch&&(p=e.pendingId,e.deps++);const y=t.props?ap(t.props.timeout):void 0,b=s,P={vnode:t,parent:e,parentComponent:n,namespace:o,container:i,hiddenContainer:r,deps:0,pendingId:ac++,timeout:typeof y=="number"?y:-1,activeBranch:null,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(E=!1,C=!1){const{vnode:D,activeBranch:S,pendingBranch:_,pendingId:F,effects:I,parentComponent:L,container:W}=P;let Z=!1;P.isHydrating?P.isHydrating=!1:E||(Z=S&&_.transition&&_.transition.mode==="out-in",Z&&(S.transition.afterLeave=()=>{F===P.pendingId&&(d(_,W,s===b?g(S):s,0),oc(I))}),S&&(v(S.el)!==P.hiddenContainer&&(s=g(S)),h(S,L,P,!0)),Z||d(_,W,s,0)),Gr(P,_),P.pendingBranch=null,P.isInFallback=!1;let ie=P.parent,re=!1;for(;ie;){if(ie.pendingBranch){ie.effects.push(...I),re=!0;break}ie=ie.parent}!re&&!Z&&oc(I),P.effects=[],M&&e&&e.pendingBranch&&p===e.pendingId&&(e.deps--,e.deps===0&&!C&&e.resolve()),Bs(D,"onResolve")},fallback(E){if(!P.pendingBranch)return;const{vnode:C,activeBranch:D,parentComponent:S,container:_,namespace:F}=P;Bs(C,"onFallback");const I=g(D),L=()=>{P.isInFallback&&(f(null,E,_,I,S,null,F,a,l),Gr(P,E))},W=E.transition&&E.transition.mode==="out-in";W&&(D.transition.afterLeave=L),P.isInFallback=!0,h(D,S,null,!0),W||L()},move(E,C,D){P.activeBranch&&d(P.activeBranch,E,C,D),P.container=E},next(){return P.activeBranch&&g(P.activeBranch)},registerDep(E,C){const D=!!P.pendingBranch;D&&P.deps++;const S=E.vnode.el;E.asyncDep.catch(_=>{Zs(_,E,0)}).then(_=>{if(E.isUnmounted||P.isUnmounted||P.pendingId!==E.suspenseId)return;E.asyncResolved=!0;const{vnode:F}=E;pc(E,_,!1),S&&(F.el=S);const I=!S&&E.subTree.el;C(E,F,v(S||E.subTree.el),S?null:g(E.subTree),P,o,l),I&&m(I),jc(E,F.el),D&&--P.deps===0&&P.resolve()})},unmount(E,C){P.isUnmounted=!0,P.activeBranch&&h(P.activeBranch,n,E,C),P.pendingBranch&&h(P.pendingBranch,n,E,C)}};return P}function X_(t,e,n,i,r,s,o,a,l){const c=e.suspense=Qc(e,i,n,t.parentNode,document.createElement("div"),null,r,s,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,s,o);return c.deps===0&&c.resolve(!1,!0),u}function $_(t){const{shapeFlag:e,children:n}=t,i=e&32;t.ssContent=ef(i?n.default:n),t.ssFallback=i?ef(n.fallback):k(pn)}function ef(t){let e;if(Ne(t)){const n=Yr&&t._c;n&&(t._d=!1,gn()),t=t(),n&&(t._d=!0,e=mn,om())}return De(t)&&(t=N_(t)),t=En(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function q_(t,e){e&&e.pendingBranch?De(t)?e.effects.push(...t):e.effects.push(t):oc(t)}function Gr(t,e){t.activeBranch=e;const{vnode:n,parentComponent:i}=t;let r=e.el;for(;!r&&e.component;)e=e.component.subTree,r=e.el;n.el=r,i&&i.subTree===n&&(i.vnode.el=r,jc(i,r))}function Y_(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const j_=Symbol.for("v-scx"),K_=()=>gt(j_);function mr(t,e){return eu(t,null,e)}const xo={};function ht(t,e,n){return eu(t,e,n)}function eu(t,e,{immediate:n,deep:i,flush:r,once:s,onTrack:o,onTrigger:a}=ft){if(e&&s){const E=e;e=(...C)=>{E(...C),P()}}const l=Rt,c=E=>i===!0?E:sr(E,i===!1?1:void 0);let u,f=!1,d=!1;if(_t(t)?(u=()=>t.value,f=ta(t)):ws(t)?(u=()=>c(t),f=!0):De(t)?(d=!0,f=t.some(E=>ws(E)||ta(E)),u=()=>t.map(E=>{if(_t(E))return E.value;if(ws(E))return c(E);if(Ne(E))return Ci(E,l,2)})):Ne(t)?e?u=()=>Ci(t,l,2):u=()=>(h&&h(),_n(t,l,3,[g])):u=hn,e&&i){const E=u;u=()=>sr(E())}let h,g=E=>{h=y.onStop=()=>{Ci(E,l,4),h=y.onStop=void 0}},v;if(Da)if(g=hn,e?n&&_n(e,l,3,[u(),d?[]:void 0,g]):u(),r==="sync"){const E=K_();v=E.__watcherHandles||(E.__watcherHandles=[])}else return hn;let m=d?new Array(t.length).fill(xo):xo;const p=()=>{if(!(!y.active||!y.dirty))if(e){const E=y.run();(i||f||(d?E.some((C,D)=>Di(C,m[D])):Di(E,m)))&&(h&&h(),_n(e,l,3,[E,m===xo?void 0:d&&m[0]===xo?[]:m,g]),m=E)}else y.run()};p.allowRecurse=!!e;let M;r==="sync"?M=p:r==="post"?M=()=>Wt(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),M=()=>Yc(p));const y=new kc(u,hn,M),b=n_(),P=()=>{y.stop(),b&&Fc(b.effects,y)};return e?n?p():m=y.run():r==="post"?Wt(y.run.bind(y),l&&l.suspense):y.run(),v&&v.push(P),P}function Z_(t,e,n){const i=this.proxy,r=yt(t)?t.includes(".")?kp(i,t):()=>i[t]:t.bind(i,i);let s;Ne(e)?s=e:(s=e.handler,n=e);const o=Qs(this),a=eu(r,s.bind(i),n);return o(),a}function kp(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function sr(t,e=1/0,n){if(e<=0||!at(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,_t(t))sr(t.value,e,n);else if(De(t))for(let i=0;i<t.length;i++)sr(t[i],e,n);else if(np(t)||zr(t))t.forEach(i=>{sr(i,e,n)});else if(sp(t))for(const i in t)sr(t[i],e,n);return t}function fr(t,e){if(zt===null)return t;const n=Ua(zt)||zt.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=ft]=e[r];s&&(Ne(s)&&(s={mounted:s,updated:s}),s.deep&&sr(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Wi(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Bi(),_n(l,n,8,[t.el,a,t,e]),ki())}}const Si=Symbol("_leaveCb"),yo=Symbol("_enterCb");function Vp(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return os(()=>{t.isMounted=!0}),ai(()=>{t.isUnmounting=!0}),t}const cn=[Function,Array],zp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:cn,onEnter:cn,onAfterEnter:cn,onEnterCancelled:cn,onBeforeLeave:cn,onLeave:cn,onAfterLeave:cn,onLeaveCancelled:cn,onBeforeAppear:cn,onAppear:cn,onAfterAppear:cn,onAppearCancelled:cn},J_={name:"BaseTransition",props:zp,setup(t,{slots:e}){const n=au(),i=Vp();return()=>{const r=e.default&&tu(e.default(),!0);if(!r||!r.length)return;let s=r[0];if(r.length>1){for(const d of r)if(d.type!==pn){s=d;break}}const o=je(t),{mode:a}=o;if(i.isLeaving)return ol(s);const l=tf(s);if(!l)return ol(s);const c=ks(l,o,i,n);Vs(l,c);const u=n.subTree,f=u&&tf(u);if(f&&f.type!==pn&&!On(l,f)){const d=ks(f,o,i,n);if(Vs(f,d),a==="out-in"&&l.type!==pn)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},ol(s);a==="in-out"&&l.type!==pn&&(d.delayLeave=(h,g,v)=>{const m=Hp(i,f);m[String(f.key)]=f,h[Si]=()=>{g(),h[Si]=void 0,delete c.delayedLeave},c.delayedLeave=v})}return s}}},Q_=J_;function Hp(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function ks(t,e,n,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:d,onAfterLeave:h,onLeaveCancelled:g,onBeforeAppear:v,onAppear:m,onAfterAppear:p,onAppearCancelled:M}=e,y=String(t.key),b=Hp(n,t),P=(D,S)=>{D&&_n(D,i,9,S)},E=(D,S)=>{const _=S[1];P(D,S),De(D)?D.every(F=>F.length<=1)&&_():D.length<=1&&_()},C={mode:s,persisted:o,beforeEnter(D){let S=a;if(!n.isMounted)if(r)S=v||a;else return;D[Si]&&D[Si](!0);const _=b[y];_&&On(t,_)&&_.el[Si]&&_.el[Si](),P(S,[D])},enter(D){let S=l,_=c,F=u;if(!n.isMounted)if(r)S=m||l,_=p||c,F=M||u;else return;let I=!1;const L=D[yo]=W=>{I||(I=!0,W?P(F,[D]):P(_,[D]),C.delayedLeave&&C.delayedLeave(),D[yo]=void 0)};S?E(S,[D,L]):L()},leave(D,S){const _=String(t.key);if(D[yo]&&D[yo](!0),n.isUnmounting)return S();P(f,[D]);let F=!1;const I=D[Si]=L=>{F||(F=!0,S(),L?P(g,[D]):P(h,[D]),D[Si]=void 0,b[_]===t&&delete b[_])};b[_]=t,d?E(d,[D,I]):I()},clone(D){return ks(D,e,n,i)}};return C}function ol(t){if(La(t))return t=Ui(t),t.children=null,t}function tf(t){if(!La(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Ne(n.default))return n.default()}}function Vs(t,e){t.shapeFlag&6&&t.component?Vs(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function tu(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===ot?(o.patchFlag&128&&r++,i=i.concat(tu(o.children,e,a))):(e||o.type!==pn)&&i.push(a!=null?Ui(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function ss(t,e){return Ne(t)?xt({name:t.name},e,{setup:t}):t}const jo=t=>!!t.type.__asyncLoader,La=t=>t.type.__isKeepAlive;function Gp(t,e){Xp(t,"a",e)}function Wp(t,e){Xp(t,"da",e)}function Xp(t,e,n=Rt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ia(e,i,n),n){let r=n.parent;for(;r&&r.parent;)La(r.parent.vnode)&&e0(i,e,n,r),r=r.parent}}function e0(t,e,n,i){const r=Ia(e,t,i,!0);qp(()=>{Fc(i[e],r)},n)}function Ia(t,e,n=Rt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Bi();const a=Qs(n),l=_n(e,n,t,o);return a(),ki(),l});return i?r.unshift(s):r.push(s),s}}const oi=t=>(e,n=Rt)=>(!Da||t==="sp")&&Ia(t,(...i)=>e(...i),n),$p=oi("bm"),os=oi("m"),t0=oi("bu"),nu=oi("u"),ai=oi("bum"),qp=oi("um"),n0=oi("sp"),i0=oi("rtg"),r0=oi("rtc");function s0(t,e=Rt){Ia("ec",t,e)}function ia(t,e,n,i){let r;const s=n;if(De(t)||yt(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s)}else if(at(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,s));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,s)}}else r=[];return r}const lc=t=>t?cm(t)?Ua(t)||t.proxy:lc(t.parent):null,Cs=xt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>lc(t.parent),$root:t=>lc(t.root),$emit:t=>t.emit,$options:t=>iu(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Yc(t.update)}),$nextTick:t=>t.n||(t.n=si.bind(t.proxy)),$watch:t=>Z_.bind(t)}),al=(t,e)=>t!==ft&&!t.__isScriptSetup&&Ke(t,e),o0={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(al(i,e))return o[e]=1,i[e];if(r!==ft&&Ke(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&Ke(c,e))return o[e]=3,s[e];if(n!==ft&&Ke(n,e))return o[e]=4,n[e];cc&&(o[e]=0)}}const u=Cs[e];let f,d;if(u)return e==="$attrs"&&Zt(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==ft&&Ke(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Ke(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return al(r,e)?(r[e]=n,!0):i!==ft&&Ke(i,e)?(i[e]=n,!0):Ke(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==ft&&Ke(t,o)||al(e,o)||(a=s[0])&&Ke(a,o)||Ke(i,o)||Ke(Cs,o)||Ke(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ke(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function nf(t){return De(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let cc=!0;function a0(t){const e=iu(t),n=t.proxy,i=t.ctx;cc=!1,e.beforeCreate&&rf(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:g,activated:v,deactivated:m,beforeDestroy:p,beforeUnmount:M,destroyed:y,unmounted:b,render:P,renderTracked:E,renderTriggered:C,errorCaptured:D,serverPrefetch:S,expose:_,inheritAttrs:F,components:I,directives:L,filters:W}=e;if(c&&l0(c,i,null),o)for(const re in o){const G=o[re];Ne(G)&&(i[re]=G.bind(n))}if(r){const re=r.call(n,n);at(re)&&(t.data=$t(re))}if(cc=!0,s)for(const re in s){const G=s[re],me=Ne(G)?G.bind(n,n):Ne(G.get)?G.get.bind(n,n):hn,Q=!Ne(G)&&Ne(G.set)?G.set.bind(n):hn,ae=ne({get:me,set:Q});Object.defineProperty(i,re,{enumerable:!0,configurable:!0,get:()=>ae.value,set:_e=>ae.value=_e})}if(a)for(const re in a)Yp(a[re],i,n,re);if(l){const re=Ne(l)?l.call(n):l;Reflect.ownKeys(re).forEach(G=>{xn(G,re[G])})}u&&rf(u,t,"c");function ie(re,G){De(G)?G.forEach(me=>re(me.bind(n))):G&&re(G.bind(n))}if(ie($p,f),ie(os,d),ie(t0,h),ie(nu,g),ie(Gp,v),ie(Wp,m),ie(s0,D),ie(r0,E),ie(i0,C),ie(ai,M),ie(qp,b),ie(n0,S),De(_))if(_.length){const re=t.exposed||(t.exposed={});_.forEach(G=>{Object.defineProperty(re,G,{get:()=>n[G],set:me=>n[G]=me})})}else t.exposed||(t.exposed={});P&&t.render===hn&&(t.render=P),F!=null&&(t.inheritAttrs=F),I&&(t.components=I),L&&(t.directives=L)}function l0(t,e,n=hn){De(t)&&(t=uc(t));for(const i in t){const r=t[i];let s;at(r)?"default"in r?s=gt(r.from||i,r.default,!0):s=gt(r.from||i):s=gt(r),_t(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function rf(t,e,n){_n(De(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Yp(t,e,n,i){const r=i.includes(".")?kp(n,i):()=>n[i];if(yt(t)){const s=e[t];Ne(s)&&ht(r,s)}else if(Ne(t))ht(r,t.bind(n));else if(at(t))if(De(t))t.forEach(s=>Yp(s,e,n,i));else{const s=Ne(t.handler)?t.handler.bind(n):e[t.handler];Ne(s)&&ht(r,s,t)}}function iu(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>ra(l,c,o,!0)),ra(l,e,o)),at(e)&&s.set(e,l),l}function ra(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&ra(t,s,n,!0),r&&r.forEach(o=>ra(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=c0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const c0={data:sf,props:of,emits:of,methods:Ms,computed:Ms,beforeCreate:kt,created:kt,beforeMount:kt,mounted:kt,beforeUpdate:kt,updated:kt,beforeDestroy:kt,beforeUnmount:kt,destroyed:kt,unmounted:kt,activated:kt,deactivated:kt,errorCaptured:kt,serverPrefetch:kt,components:Ms,directives:Ms,watch:f0,provide:sf,inject:u0};function sf(t,e){return e?t?function(){return xt(Ne(t)?t.call(this,this):t,Ne(e)?e.call(this,this):e)}:e:t}function u0(t,e){return Ms(uc(t),uc(e))}function uc(t){if(De(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function kt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ms(t,e){return t?xt(Object.create(null),t,e):e}function of(t,e){return t?De(t)&&De(e)?[...new Set([...t,...e])]:xt(Object.create(null),nf(t),nf(e??{})):e}function f0(t,e){if(!t)return e;if(!e)return t;const n=xt(Object.create(null),t);for(const i in e)n[i]=kt(t[i],e[i]);return n}function jp(){return{app:null,config:{isNativeTag:Hv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let d0=0;function h0(t,e){return function(i,r=null){Ne(i)||(i=xt({},i)),r!=null&&!at(r)&&(r=null);const s=jp(),o=new WeakSet;let a=!1;const l=s.app={_uid:d0++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:N0,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ne(c.install)?(o.add(c),c.install(l,...u)):Ne(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const d=k(i,r);return d.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(d,c):t(d,c,f),a=!0,l._container=c,c.__vue_app__=l,Ua(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){const u=Rs;Rs=l;try{return c()}finally{Rs=u}}};return l}}let Rs=null;function xn(t,e){if(Rt){let n=Rt.provides;const i=Rt.parent&&Rt.parent.provides;i===n&&(n=Rt.provides=Object.create(i)),n[t]=e}}function gt(t,e,n=!1){const i=Rt||zt;if(i||Rs){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Rs._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Ne(e)?e.call(i&&i.proxy):e}}const Kp={},Zp=()=>Object.create(Kp),Jp=t=>Object.getPrototypeOf(t)===Kp;function p0(t,e,n,i=!1){const r={},s=Zp();t.propsDefaults=Object.create(null),Qp(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:bp(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function m0(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=je(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Pa(t.emitsOptions,d))continue;const h=e[d];if(l)if(Ke(s,d))h!==s[d]&&(s[d]=h,c=!0);else{const g=yn(d);r[g]=fc(l,a,g,h,t,!1)}else h!==s[d]&&(s[d]=h,c=!0)}}}else{Qp(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Ke(e,f)&&((u=rs(f))===f||!Ke(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=fc(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Ke(e,f))&&(delete s[f],c=!0)}c&&ii(t.attrs,"set","")}function Qp(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ts(l))continue;const c=e[l];let u;r&&Ke(r,u=yn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Pa(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=je(n),c=a||ft;for(let u=0;u<s.length;u++){const f=s[u];n[f]=fc(r,l,f,c[f],t,!Ke(c,f))}}return o}function fc(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=Ke(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ne(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=Qs(r);i=c[n]=l.call(null,e),u()}}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===rs(n))&&(i=!0))}return i}function em(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!Ne(t)){const u=f=>{l=!0;const[d,h]=em(f,e,!0);xt(o,d),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return at(t)&&i.set(t,Vr),Vr;if(De(s))for(let u=0;u<s.length;u++){const f=yn(s[u]);af(f)&&(o[f]=ft)}else if(s)for(const u in s){const f=yn(u);if(af(f)){const d=s[u],h=o[f]=De(d)||Ne(d)?{type:d}:xt({},d);if(h){const g=uf(Boolean,h.type),v=uf(String,h.type);h[0]=g>-1,h[1]=v<0||g<v,(g>-1||Ke(h,"default"))&&a.push(f)}}}const c=[o,a];return at(t)&&i.set(t,c),c}function af(t){return t[0]!=="$"&&!Ts(t)}function lf(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function cf(t,e){return lf(t)===lf(e)}function uf(t,e){return De(e)?e.findIndex(n=>cf(n,t)):Ne(e)&&cf(e,t)?0:-1}const tm=t=>t[0]==="_"||t==="$stable",ru=t=>De(t)?t.map(En):[En(t)],g0=(t,e,n)=>{if(e._n)return e;const i=bt((...r)=>ru(e(...r)),n);return i._c=!1,i},nm=(t,e,n)=>{const i=t._ctx;for(const r in t){if(tm(r))continue;const s=t[r];if(Ne(s))e[r]=g0(r,s,i);else if(s!=null){const o=ru(s);e[r]=()=>o}}},im=(t,e)=>{const n=ru(e);t.slots.default=()=>n},v0=(t,e)=>{const n=t.slots=Zp();if(t.vnode.shapeFlag&32){const i=e._;i?(xt(n,e),op(n,"_",i,!0)):nm(e,n)}else e&&im(t,e)},_0=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=ft;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(xt(r,e),!n&&a===1&&delete r._):(s=!e.$stable,nm(e,r)),o=e}else e&&(im(t,e),o={default:1});if(s)for(const a in r)!tm(a)&&o[a]==null&&delete r[a]};function dc(t,e,n,i,r=!1){if(De(t)){t.forEach((d,h)=>dc(d,e&&(De(e)?e[h]:e),n,i,r));return}if(jo(i)&&!r)return;const s=i.shapeFlag&4?Ua(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ft?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(yt(c)?(u[c]=null,Ke(f,c)&&(f[c]=null)):_t(c)&&(c.value=null)),Ne(l))Ci(l,a,12,[o,u]);else{const d=yt(l),h=_t(l);if(d||h){const g=()=>{if(t.f){const v=d?Ke(f,l)?f[l]:u[l]:l.value;r?De(v)&&Fc(v,s):De(v)?v.includes(s)||v.push(s):d?(u[l]=[s],Ke(f,l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,Ke(f,l)&&(f[l]=o)):h&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,Wt(g,n)):g()}}}const Wt=q_;function x0(t){return y0(t)}function y0(t,e){const n=lp();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=hn,insertStaticContent:g}=t,v=(w,R,z,q=null,$=null,ue=null,T=void 0,x=null,N=!!R.dynamicChildren)=>{if(w===R)return;w&&!On(w,R)&&(q=B(w),_e(w,$,ue,!0),w=null),R.patchFlag===-2&&(N=!1,R.dynamicChildren=null);const{type:O,ref:X,shapeFlag:K}=R;switch(O){case Js:m(w,R,z,q);break;case pn:p(w,R,z,q);break;case cl:w==null&&M(R,z,q,T);break;case ot:I(w,R,z,q,$,ue,T,x,N);break;default:K&1?P(w,R,z,q,$,ue,T,x,N):K&6?L(w,R,z,q,$,ue,T,x,N):(K&64||K&128)&&O.process(w,R,z,q,$,ue,T,x,N,U)}X!=null&&$&&dc(X,w&&w.ref,ue,R||w,!R)},m=(w,R,z,q)=>{if(w==null)i(R.el=a(R.children),z,q);else{const $=R.el=w.el;R.children!==w.children&&c($,R.children)}},p=(w,R,z,q)=>{w==null?i(R.el=l(R.children||""),z,q):R.el=w.el},M=(w,R,z,q)=>{[w.el,w.anchor]=g(w.children,R,z,q,w.el,w.anchor)},y=({el:w,anchor:R},z,q)=>{let $;for(;w&&w!==R;)$=d(w),i(w,z,q),w=$;i(R,z,q)},b=({el:w,anchor:R})=>{let z;for(;w&&w!==R;)z=d(w),r(w),w=z;r(R)},P=(w,R,z,q,$,ue,T,x,N)=>{R.type==="svg"?T="svg":R.type==="math"&&(T="mathml"),w==null?E(R,z,q,$,ue,T,x,N):S(w,R,$,ue,T,x,N)},E=(w,R,z,q,$,ue,T,x)=>{let N,O;const{props:X,shapeFlag:K,transition:fe,dirs:se}=w;if(N=w.el=o(w.type,ue,X&&X.is,X),K&8?u(N,w.children):K&16&&D(w.children,N,null,q,$,ll(w,ue),T,x),se&&Wi(w,null,q,"created"),C(N,w,w.scopeId,T,q),X){for(const Ee in X)Ee!=="value"&&!Ts(Ee)&&s(N,Ee,null,X[Ee],ue,w.children,q,$,ve);"value"in X&&s(N,"value",null,X.value,ue),(O=X.onVnodeBeforeMount)&&In(O,q,w)}se&&Wi(w,null,q,"beforeMount");const ce=S0($,fe);ce&&fe.beforeEnter(N),i(N,R,z),((O=X&&X.onVnodeMounted)||ce||se)&&Wt(()=>{O&&In(O,q,w),ce&&fe.enter(N),se&&Wi(w,null,q,"mounted")},$)},C=(w,R,z,q,$)=>{if(z&&h(w,z),q)for(let ue=0;ue<q.length;ue++)h(w,q[ue]);if($){let ue=$.subTree;if(R===ue){const T=$.vnode;C(w,T,T.scopeId,T.slotScopeIds,$.parent)}}},D=(w,R,z,q,$,ue,T,x,N=0)=>{for(let O=N;O<w.length;O++){const X=w[O]=x?Mi(w[O]):En(w[O]);v(null,X,R,z,q,$,ue,T,x)}},S=(w,R,z,q,$,ue,T)=>{const x=R.el=w.el;let{patchFlag:N,dynamicChildren:O,dirs:X}=R;N|=w.patchFlag&16;const K=w.props||ft,fe=R.props||ft;let se;if(z&&Xi(z,!1),(se=fe.onVnodeBeforeUpdate)&&In(se,z,R,w),X&&Wi(R,w,z,"beforeUpdate"),z&&Xi(z,!0),O?_(w.dynamicChildren,O,x,z,q,ll(R,$),ue):T||G(w,R,x,null,z,q,ll(R,$),ue,!1),N>0){if(N&16)F(x,R,K,fe,z,q,$);else if(N&2&&K.class!==fe.class&&s(x,"class",null,fe.class,$),N&4&&s(x,"style",K.style,fe.style,$),N&8){const ce=R.dynamicProps;for(let Ee=0;Ee<ce.length;Ee++){const de=ce[Ee],be=K[de],Fe=fe[de];(Fe!==be||de==="value")&&s(x,de,be,Fe,$,w.children,z,q,ve)}}N&1&&w.children!==R.children&&u(x,R.children)}else!T&&O==null&&F(x,R,K,fe,z,q,$);((se=fe.onVnodeUpdated)||X)&&Wt(()=>{se&&In(se,z,R,w),X&&Wi(R,w,z,"updated")},q)},_=(w,R,z,q,$,ue,T)=>{for(let x=0;x<R.length;x++){const N=w[x],O=R[x],X=N.el&&(N.type===ot||!On(N,O)||N.shapeFlag&70)?f(N.el):z;v(N,O,X,null,q,$,ue,T,!0)}},F=(w,R,z,q,$,ue,T)=>{if(z!==q){if(z!==ft)for(const x in z)!Ts(x)&&!(x in q)&&s(w,x,z[x],null,T,R.children,$,ue,ve);for(const x in q){if(Ts(x))continue;const N=q[x],O=z[x];N!==O&&x!=="value"&&s(w,x,O,N,T,R.children,$,ue,ve)}"value"in q&&s(w,"value",z.value,q.value,T)}},I=(w,R,z,q,$,ue,T,x,N)=>{const O=R.el=w?w.el:a(""),X=R.anchor=w?w.anchor:a("");let{patchFlag:K,dynamicChildren:fe,slotScopeIds:se}=R;se&&(x=x?x.concat(se):se),w==null?(i(O,z,q),i(X,z,q),D(R.children||[],z,X,$,ue,T,x,N)):K>0&&K&64&&fe&&w.dynamicChildren?(_(w.dynamicChildren,fe,z,$,ue,T,x),(R.key!=null||$&&R===$.subTree)&&rm(w,R,!0)):G(w,R,z,X,$,ue,T,x,N)},L=(w,R,z,q,$,ue,T,x,N)=>{R.slotScopeIds=x,w==null?R.shapeFlag&512?$.ctx.activate(R,z,q,T,N):W(R,z,q,$,ue,T,N):Z(w,R,N)},W=(w,R,z,q,$,ue,T)=>{const x=w.component=C0(w,q,$);if(La(w)&&(x.ctx.renderer=U),R0(x),x.asyncDep){if($&&$.registerDep(x,ie),!w.el){const N=x.subTree=k(pn);p(null,N,R,z)}}else ie(x,w,R,z,$,ue,T)},Z=(w,R,z)=>{const q=R.component=w.component;if(B_(w,R,z))if(q.asyncDep&&!q.asyncResolved){re(q,R,z);return}else q.next=R,I_(q.update),q.effect.dirty=!0,q.update();else R.el=w.el,q.vnode=R},ie=(w,R,z,q,$,ue,T)=>{const x=()=>{if(w.isMounted){let{next:X,bu:K,u:fe,parent:se,vnode:ce}=w;{const Le=sm(w);if(Le){X&&(X.el=ce.el,re(w,X,T)),Le.asyncDep.then(()=>{w.isUnmounted||x()});return}}let Ee=X,de;Xi(w,!1),X?(X.el=ce.el,re(w,X,T)):X=ce,K&&il(K),(de=X.props&&X.props.onVnodeBeforeUpdate)&&In(de,se,X,ce),Xi(w,!0);const be=sl(w),Fe=w.subTree;w.subTree=be,v(Fe,be,f(Fe.el),B(Fe),w,$,ue),X.el=be.el,Ee===null&&jc(w,be.el),fe&&Wt(fe,$),(de=X.props&&X.props.onVnodeUpdated)&&Wt(()=>In(de,se,X,ce),$)}else{let X;const{el:K,props:fe}=R,{bm:se,m:ce,parent:Ee}=w,de=jo(R);if(Xi(w,!1),se&&il(se),!de&&(X=fe&&fe.onVnodeBeforeMount)&&In(X,Ee,R),Xi(w,!0),K&&ye){const be=()=>{w.subTree=sl(w),ye(K,w.subTree,w,$,null)};de?R.type.__asyncLoader().then(()=>!w.isUnmounted&&be()):be()}else{const be=w.subTree=sl(w);v(null,be,z,q,w,$,ue),R.el=be.el}if(ce&&Wt(ce,$),!de&&(X=fe&&fe.onVnodeMounted)){const be=R;Wt(()=>In(X,Ee,be),$)}(R.shapeFlag&256||Ee&&jo(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&w.a&&Wt(w.a,$),w.isMounted=!0,R=z=q=null}},N=w.effect=new kc(x,hn,()=>Yc(O),w.scope),O=w.update=()=>{N.dirty&&N.run()};O.id=w.uid,Xi(w,!0),O()},re=(w,R,z)=>{R.component=w;const q=w.vnode.props;w.vnode=R,w.next=null,m0(w,R.props,q,z),_0(w,R.children,z),Bi(),Zu(w),ki()},G=(w,R,z,q,$,ue,T,x,N=!1)=>{const O=w&&w.children,X=w?w.shapeFlag:0,K=R.children,{patchFlag:fe,shapeFlag:se}=R;if(fe>0){if(fe&128){Q(O,K,z,q,$,ue,T,x,N);return}else if(fe&256){me(O,K,z,q,$,ue,T,x,N);return}}se&8?(X&16&&ve(O,$,ue),K!==O&&u(z,K)):X&16?se&16?Q(O,K,z,q,$,ue,T,x,N):ve(O,$,ue,!0):(X&8&&u(z,""),se&16&&D(K,z,q,$,ue,T,x,N))},me=(w,R,z,q,$,ue,T,x,N)=>{w=w||Vr,R=R||Vr;const O=w.length,X=R.length,K=Math.min(O,X);let fe;for(fe=0;fe<K;fe++){const se=R[fe]=N?Mi(R[fe]):En(R[fe]);v(w[fe],se,z,null,$,ue,T,x,N)}O>X?ve(w,$,ue,!0,!1,K):D(R,z,q,$,ue,T,x,N,K)},Q=(w,R,z,q,$,ue,T,x,N)=>{let O=0;const X=R.length;let K=w.length-1,fe=X-1;for(;O<=K&&O<=fe;){const se=w[O],ce=R[O]=N?Mi(R[O]):En(R[O]);if(On(se,ce))v(se,ce,z,null,$,ue,T,x,N);else break;O++}for(;O<=K&&O<=fe;){const se=w[K],ce=R[fe]=N?Mi(R[fe]):En(R[fe]);if(On(se,ce))v(se,ce,z,null,$,ue,T,x,N);else break;K--,fe--}if(O>K){if(O<=fe){const se=fe+1,ce=se<X?R[se].el:q;for(;O<=fe;)v(null,R[O]=N?Mi(R[O]):En(R[O]),z,ce,$,ue,T,x,N),O++}}else if(O>fe)for(;O<=K;)_e(w[O],$,ue,!0),O++;else{const se=O,ce=O,Ee=new Map;for(O=ce;O<=fe;O++){const qe=R[O]=N?Mi(R[O]):En(R[O]);qe.key!=null&&Ee.set(qe.key,O)}let de,be=0;const Fe=fe-ce+1;let Le=!1,Te=0;const Oe=new Array(Fe);for(O=0;O<Fe;O++)Oe[O]=0;for(O=se;O<=K;O++){const qe=w[O];if(be>=Fe){_e(qe,$,ue,!0);continue}let Ie;if(qe.key!=null)Ie=Ee.get(qe.key);else for(de=ce;de<=fe;de++)if(Oe[de-ce]===0&&On(qe,R[de])){Ie=de;break}Ie===void 0?_e(qe,$,ue,!0):(Oe[Ie-ce]=O+1,Ie>=Te?Te=Ie:Le=!0,v(qe,R[Ie],z,null,$,ue,T,x,N),be++)}const We=Le?M0(Oe):Vr;for(de=We.length-1,O=Fe-1;O>=0;O--){const qe=ce+O,Ie=R[qe],V=qe+1<X?R[qe+1].el:q;Oe[O]===0?v(null,Ie,z,V,$,ue,T,x,N):Le&&(de<0||O!==We[de]?ae(Ie,z,V,2):de--)}}},ae=(w,R,z,q,$=null)=>{const{el:ue,type:T,transition:x,children:N,shapeFlag:O}=w;if(O&6){ae(w.component.subTree,R,z,q);return}if(O&128){w.suspense.move(R,z,q);return}if(O&64){T.move(w,R,z,U);return}if(T===ot){i(ue,R,z);for(let K=0;K<N.length;K++)ae(N[K],R,z,q);i(w.anchor,R,z);return}if(T===cl){y(w,R,z);return}if(q!==2&&O&1&&x)if(q===0)x.beforeEnter(ue),i(ue,R,z),Wt(()=>x.enter(ue),$);else{const{leave:K,delayLeave:fe,afterLeave:se}=x,ce=()=>i(ue,R,z),Ee=()=>{K(ue,()=>{ce(),se&&se()})};fe?fe(ue,ce,Ee):Ee()}else i(ue,R,z)},_e=(w,R,z,q=!1,$=!1)=>{const{type:ue,props:T,ref:x,children:N,dynamicChildren:O,shapeFlag:X,patchFlag:K,dirs:fe}=w;if(x!=null&&dc(x,null,z,w,!0),X&256){R.ctx.deactivate(w);return}const se=X&1&&fe,ce=!jo(w);let Ee;if(ce&&(Ee=T&&T.onVnodeBeforeUnmount)&&In(Ee,R,w),X&6)ge(w.component,z,q);else{if(X&128){w.suspense.unmount(z,q);return}se&&Wi(w,null,R,"beforeUnmount"),X&64?w.type.remove(w,R,z,$,U,q):O&&(ue!==ot||K>0&&K&64)?ve(O,R,z,!1,!0):(ue===ot&&K&384||!$&&X&16)&&ve(N,R,z),q&&Be(w)}(ce&&(Ee=T&&T.onVnodeUnmounted)||se)&&Wt(()=>{Ee&&In(Ee,R,w),se&&Wi(w,null,R,"unmounted")},z)},Be=w=>{const{type:R,el:z,anchor:q,transition:$}=w;if(R===ot){te(z,q);return}if(R===cl){b(w);return}const ue=()=>{r(z),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(w.shapeFlag&1&&$&&!$.persisted){const{leave:T,delayLeave:x}=$,N=()=>T(z,ue);x?x(w.el,ue,N):N()}else ue()},te=(w,R)=>{let z;for(;w!==R;)z=d(w),r(w),w=z;r(R)},ge=(w,R,z)=>{const{bum:q,scope:$,update:ue,subTree:T,um:x}=w;q&&il(q),$.stop(),ue&&(ue.active=!1,_e(T,w,R,z)),x&&Wt(x,R),Wt(()=>{w.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},ve=(w,R,z,q=!1,$=!1,ue=0)=>{for(let T=ue;T<w.length;T++)_e(w[T],R,z,q,$)},B=w=>w.shapeFlag&6?B(w.component.subTree):w.shapeFlag&128?w.suspense.next():d(w.anchor||w.el);let he=!1;const le=(w,R,z)=>{w==null?R._vnode&&_e(R._vnode,null,null,!0):v(R._vnode||null,w,R,null,null,null,z),he||(he=!0,Zu(),Ip(),he=!1),R._vnode=w},U={p:v,um:_e,m:ae,r:Be,mt:W,mc:D,pc:G,pbc:_,n:B,o:t};let Pe,ye;return{render:le,hydrate:Pe,createApp:h0(le,Pe)}}function ll({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Xi({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function S0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function rm(t,e,n=!1){const i=t.children,r=e.children;if(De(i)&&De(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Mi(r[s]),a.el=o.el),n||rm(o,a)),a.type===Js&&(a.el=o.el)}}function M0(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function sm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:sm(e)}const b0=t=>t.__isTeleport,ot=Symbol.for("v-fgt"),Js=Symbol.for("v-txt"),pn=Symbol.for("v-cmt"),cl=Symbol.for("v-stc"),Ps=[];let mn=null;function gn(t=!1){Ps.push(mn=t?null:[])}function om(){Ps.pop(),mn=Ps[Ps.length-1]||null}let Yr=1;function ff(t){Yr+=t}function am(t){return t.dynamicChildren=Yr>0?mn||Vr:null,om(),Yr>0&&mn&&mn.push(t),t}function Ri(t,e,n,i,r,s){return am(Un(t,e,n,i,r,s,!0))}function su(t,e,n,i,r){return am(k(t,e,n,i,r,!0))}function sa(t){return t?t.__v_isVNode===!0:!1}function On(t,e){return t.type===e.type&&t.key===e.key}const lm=({key:t})=>t??null,Ko=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?yt(t)||_t(t)||Ne(t)?{i:zt,r:t,k:e,f:!!n}:t:null);function Un(t,e=null,n=null,i=0,r=null,s=t===ot?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&lm(e),ref:e&&Ko(e),scopeId:Np,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:zt};return a?(ou(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=yt(n)?8:16),Yr>0&&!o&&mn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&mn.push(l),l}const k=E0;function E0(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Fp)&&(t=pn),sa(t)){const a=Ui(t,e,!0);return n&&ou(a,n),Yr>0&&!s&&mn&&(a.shapeFlag&6?mn[mn.indexOf(t)]=a:mn.push(a)),a.patchFlag|=-2,a}if(U0(t)&&(t=t.__vccOpts),e){e=T0(e);let{class:a,style:l}=e;a&&!yt(a)&&(e.class=Bc(a)),at(l)&&(Ep(l)&&!De(l)&&(l=xt({},l)),e.style=Ca(l))}const o=yt(t)?1:z_(t)?128:b0(t)?64:at(t)?4:Ne(t)?2:0;return Un(t,e,n,i,r,o,s,!0)}function T0(t){return t?Ep(t)||Jp(t)?xt({},t):t:null}function Ui(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?sn(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&lm(c),ref:e&&e.ref?n&&s?De(s)?s.concat(Ko(e)):[s,Ko(e)]:Ko(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ot?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ui(t.ssContent),ssFallback:t.ssFallback&&Ui(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&(u.transition=l.clone(u)),u}function oa(t=" ",e=0){return k(Js,null,t,e)}function En(t){return t==null||typeof t=="boolean"?k(pn):De(t)?k(ot,null,t.slice()):typeof t=="object"?Mi(t):k(Js,null,String(t))}function Mi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ui(t)}function ou(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(De(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),ou(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Jp(e)?e._ctx=zt:r===3&&zt&&(zt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ne(e)?(e={default:e,_ctx:zt},n=32):(e=String(e),i&64?(n=16,e=[oa(e)]):n=8);t.children=e,t.shapeFlag|=n}function sn(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Bc([e.class,i.class]));else if(r==="style")e.style=Ca([e.style,i.style]);else if(Ta(r)){const s=e[r],o=i[r];o&&s!==o&&!(De(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function In(t,e,n,i=null){_n(t,e,7,[n,i])}const A0=jp();let w0=0;function C0(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||A0,s={uid:w0++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new fp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:em(i,r),emitsOptions:Up(i,r),emit:null,emitted:null,propsDefaults:ft,inheritAttrs:i.inheritAttrs,ctx:ft,data:ft,props:ft,attrs:ft,slots:ft,refs:ft,setupState:ft,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=U_.bind(null,s),t.ce&&t.ce(s),s}let Rt=null;const au=()=>Rt||zt;let aa,hc;{const t=lp(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};aa=e("__VUE_INSTANCE_SETTERS__",n=>Rt=n),hc=e("__VUE_SSR_SETTERS__",n=>Da=n)}const Qs=t=>{const e=Rt;return aa(t),t.scope.on(),()=>{t.scope.off(),aa(e)}},df=()=>{Rt&&Rt.scope.off(),aa(null)};function cm(t){return t.vnode.shapeFlag&4}let Da=!1;function R0(t,e=!1){e&&hc(e);const{props:n,children:i}=t.vnode,r=cm(t);p0(t,n,r,e),v0(t,i);const s=r?P0(t,e):void 0;return e&&hc(!1),s}function P0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,o0);const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?I0(t):null,s=Qs(t);Bi();const o=Ci(i,t,0,[t.props,r]);if(ki(),s(),ip(o)){if(o.then(df,df),e)return o.then(a=>{pc(t,a,e)}).catch(a=>{Zs(a,t,0)});t.asyncDep=o}else pc(t,o,e)}else um(t,e)}function pc(t,e,n){Ne(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:at(e)&&(t.setupState=Cp(e)),um(t,n)}let hf;function um(t,e,n){const i=t.type;if(!t.render){if(!e&&hf&&!i.render){const r=i.template||iu(t).template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=xt(xt({isCustomElement:s,delimiters:a},o),l);i.render=hf(r,c)}}t.render=i.render||hn}{const r=Qs(t);Bi();try{a0(t)}finally{ki(),r()}}}const L0={get(t,e){return Zt(t,"get",""),t[e]}};function I0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,L0),slots:t.slots,emit:t.emit,expose:e}}function Ua(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Cp(E_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Cs)return Cs[n](t)},has(e,n){return n in e||n in Cs}}))}function D0(t,e=!0){return Ne(t)?t.displayName||t.name:t.name||e&&t.__name}function U0(t){return Ne(t)&&"__vccOpts"in t}const ne=(t,e)=>T_(t,e,Da);function Wn(t,e,n){const i=arguments.length;return i===2?at(e)&&!De(e)?sa(e)?k(t,null,[e]):k(t,e):k(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&sa(n)&&(n=[n]),k(t,e,n))}const N0="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const F0="http://www.w3.org/2000/svg",O0="http://www.w3.org/1998/Math/MathML",bi=typeof document<"u"?document:null,pf=bi&&bi.createElement("template"),B0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?bi.createElementNS(F0,t):e==="mathml"?bi.createElementNS(O0,t):bi.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>bi.createTextNode(t),createComment:t=>bi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>bi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{pf.innerHTML=i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t;const a=pf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},fi="transition",ps="animation",jr=Symbol("_vtc"),as=(t,{slots:e})=>Wn(Q_,dm(t),e);as.displayName="Transition";const fm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},k0=as.props=xt({},zp,fm),$i=(t,e=[])=>{De(t)?t.forEach(n=>n(...e)):t&&t(...e)},mf=t=>t?De(t)?t.some(e=>e.length>1):t.length>1:!1;function dm(t){const e={};for(const I in t)I in fm||(e[I]=t[I]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=t,g=V0(r),v=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:M,onEnterCancelled:y,onLeave:b,onLeaveCancelled:P,onBeforeAppear:E=p,onAppear:C=M,onAppearCancelled:D=y}=e,S=(I,L,W)=>{xi(I,L?u:a),xi(I,L?c:o),W&&W()},_=(I,L)=>{I._isLeaving=!1,xi(I,f),xi(I,h),xi(I,d),L&&L()},F=I=>(L,W)=>{const Z=I?C:M,ie=()=>S(L,I,W);$i(Z,[L,ie]),gf(()=>{xi(L,I?l:s),Jn(L,I?u:a),mf(Z)||vf(L,i,v,ie)})};return xt(e,{onBeforeEnter(I){$i(p,[I]),Jn(I,s),Jn(I,o)},onBeforeAppear(I){$i(E,[I]),Jn(I,l),Jn(I,c)},onEnter:F(!1),onAppear:F(!0),onLeave(I,L){I._isLeaving=!0;const W=()=>_(I,L);Jn(I,f),Jn(I,d),pm(),gf(()=>{I._isLeaving&&(xi(I,f),Jn(I,h),mf(b)||vf(I,i,m,W))}),$i(b,[I,W])},onEnterCancelled(I){S(I,!1),$i(y,[I])},onAppearCancelled(I){S(I,!0),$i(D,[I])},onLeaveCancelled(I){_(I),$i(P,[I])}})}function V0(t){if(t==null)return null;if(at(t))return[ul(t.enter),ul(t.leave)];{const e=ul(t);return[e,e]}}function ul(t){return ap(t)}function Jn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[jr]||(t[jr]=new Set)).add(e)}function xi(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[jr];n&&(n.delete(e),n.size||(t[jr]=void 0))}function gf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let z0=0;function vf(t,e,n,i){const r=t._endId=++z0,s=()=>{r===t._endId&&i()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=hm(t,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,d),s()},d=h=>{h.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,d)}function hm(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),r=i(`${fi}Delay`),s=i(`${fi}Duration`),o=_f(r,s),a=i(`${ps}Delay`),l=i(`${ps}Duration`),c=_f(a,l);let u=null,f=0,d=0;e===fi?o>0&&(u=fi,f=o,d=s.length):e===ps?c>0&&(u=ps,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?fi:ps:null,d=u?u===fi?s.length:l.length:0);const h=u===fi&&/\b(transform|all)(,|$)/.test(i(`${fi}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:h}}function _f(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>xf(n)+xf(t[i])))}function xf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function pm(){return document.body.offsetHeight}function H0(t,e,n){const i=t[jr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const la=Symbol("_vod"),mm=Symbol("_vsh"),lu={beforeMount(t,{value:e},{transition:n}){t[la]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):ms(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),ms(t,!0),i.enter(t)):i.leave(t,()=>{ms(t,!1)}):ms(t,e))},beforeUnmount(t,{value:e}){ms(t,e)}};function ms(t,e){t.style.display=e?t[la]:"none",t[mm]=!e}const G0=Symbol(""),W0=/(^|;)\s*display\s*:/;function X0(t,e,n){const i=t.style,r=yt(n);let s=!1;if(n&&!r){if(e)if(yt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Zo(i,a,"")}else for(const o in e)n[o]==null&&Zo(i,o,"");for(const o in n)o==="display"&&(s=!0),Zo(i,o,n[o])}else if(r){if(e!==n){const o=i[G0];o&&(n+=";"+o),i.cssText=n,s=W0.test(n)}}else e&&t.removeAttribute("style");la in t&&(t[la]=s?i.display:"",t[mm]&&(i.display="none"))}const yf=/\s*!important$/;function Zo(t,e,n){if(De(n))n.forEach(i=>Zo(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=$0(t,e);yf.test(n)?t.setProperty(rs(i),n.replace(yf,""),"important"):t[i]=n}}const Sf=["Webkit","Moz","ms"],fl={};function $0(t,e){const n=fl[e];if(n)return n;let i=yn(e);if(i!=="filter"&&i in t)return fl[e]=i;i=ri(i);for(let r=0;r<Sf.length;r++){const s=Sf[r]+i;if(s in t)return fl[e]=s}return e}const Mf="http://www.w3.org/1999/xlink";function q0(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Mf,e.slice(6,e.length)):t.setAttributeNS(Mf,e,n);else{const s=Qv(e);n==null||s&&!cp(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function Y0(t,e,n,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(c!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=cp(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function j0(t,e,n,i){t.addEventListener(e,n,i)}function K0(t,e,n,i){t.removeEventListener(e,n,i)}const bf=Symbol("_vei");function Z0(t,e,n,i,r=null){const s=t[bf]||(t[bf]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=J0(e);if(i){const c=s[e]=tx(i,r);j0(t,a,c,l)}else o&&(K0(t,a,o,l),s[e]=void 0)}}const Ef=/(?:Once|Passive|Capture)$/;function J0(t){let e;if(Ef.test(t)){e={};let i;for(;i=t.match(Ef);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):rs(t.slice(2)),e]}let dl=0;const Q0=Promise.resolve(),ex=()=>dl||(Q0.then(()=>dl=0),dl=Date.now());function tx(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;_n(nx(i,n.value),e,5,[i])};return n.value=t,n.attached=ex(),n}function nx(t,e){if(De(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Tf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,ix=(t,e,n,i,r,s,o,a,l)=>{const c=r==="svg";e==="class"?H0(t,i,c):e==="style"?X0(t,n,i):Ta(e)?Nc(e)||Z0(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):rx(t,e,i,c))?Y0(t,e,i,s,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),q0(t,e,i,c))};function rx(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Tf(e)&&Ne(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Tf(e)&&yt(n)?!1:e in t}const gm=new WeakMap,vm=new WeakMap,ca=Symbol("_moveCb"),Af=Symbol("_enterCb"),_m={name:"TransitionGroup",props:xt({},k0,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=au(),i=Vp();let r,s;return nu(()=>{if(!r.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!cx(r[0].el,n.vnode.el,o))return;r.forEach(ox),r.forEach(ax);const a=r.filter(lx);pm(),a.forEach(l=>{const c=l.el,u=c.style;Jn(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=c[ca]=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",f),c[ca]=null,xi(c,o))};c.addEventListener("transitionend",f)})}),()=>{const o=je(t),a=dm(o);let l=o.tag||ot;if(r=[],s)for(let c=0;c<s.length;c++){const u=s[c];u.el&&u.el instanceof Element&&(r.push(u),Vs(u,ks(u,a,i,n)),gm.set(u,u.el.getBoundingClientRect()))}s=e.default?tu(e.default()):[];for(let c=0;c<s.length;c++){const u=s[c];u.key!=null&&Vs(u,ks(u,a,i,n))}return k(l,null,s)}}},sx=t=>delete t.mode;_m.props;const cu=_m;function ox(t){const e=t.el;e[ca]&&e[ca](),e[Af]&&e[Af]()}function ax(t){vm.set(t,t.el.getBoundingClientRect())}function lx(t){const e=gm.get(t),n=vm.get(t),i=e.left-n.left,r=e.top-n.top;if(i||r){const s=t.el.style;return s.transform=s.webkitTransform=`translate(${i}px,${r}px)`,s.transitionDuration="0s",t}}function cx(t,e,n){const i=t.cloneNode(),r=t[jr];r&&r.forEach(a=>{a.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(i);const{hasTransform:o}=hm(i);return s.removeChild(i),o}const ux=xt({patchProp:ix},B0);let wf;function fx(){return wf||(wf=x0(ux))}const dx=(...t)=>{const e=fx().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=px(i);if(!r)return;const s=e._component;!Ne(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,hx(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function hx(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function px(t){return yt(t)?document.querySelector(t):t}function xm(t,e){let n;function i(){n=e_(),n.run(()=>e.length?e(()=>{n==null||n.stop(),i()}):e())}ht(t,r=>{r&&!n?i():r||(n==null||n.stop(),n=void 0)},{immediate:!0}),i_(()=>{n==null||n.stop()})}const Yt=typeof window<"u",uu=Yt&&"IntersectionObserver"in window,mx=Yt&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);function gx(t,e,n){const i=e.length-1;if(i<0)return t===void 0?n:t;for(let r=0;r<i;r++){if(t==null)return n;t=t[e[r]]}return t==null||t[e[i]]===void 0?n:t[e[i]]}function fu(t,e){if(t===e)return!0;if(t instanceof Date&&e instanceof Date&&t.getTime()!==e.getTime()||t!==Object(t)||e!==Object(e))return!1;const n=Object.keys(t);return n.length!==Object.keys(e).length?!1:n.every(i=>fu(t[i],e[i]))}function Cf(t,e,n){return t==null||!e||typeof e!="string"?n:t[e]!==void 0?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),gx(t,e.split("."),n))}function ym(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:t},(n,i)=>e+i)}function Ye(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(t==null||t===""))return isNaN(+t)?String(t):isFinite(+t)?`${Number(t)}${e}`:void 0}function ua(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}function Sm(t){if(t&&"$el"in t){const e=t.$el;return(e==null?void 0:e.nodeType)===Node.TEXT_NODE?e.nextElementSibling:e}return t}const Rf=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function Mm(t){return Object.keys(t)}function hl(t,e){return e.every(n=>t.hasOwnProperty(n))}function vx(t,e){const n={},i=new Set(Object.keys(t));for(const r of e)i.has(r)&&(n[r]=t[r]);return n}function bm(t,e){const n={...t};return e.forEach(i=>delete n[i]),n}function _x(t){return t==null?[]:Array.isArray(t)?t:[t]}function zs(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(n,t))}function Pf(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return t+n.repeat(Math.max(0,e-t.length))}function Lf(t,e){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,e-t.length))+t}function xx(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let i=0;for(;i<t.length;)n.push(t.substr(i,e)),i+=e;return n}function Ot(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const i={};for(const r in t)i[r]=t[r];for(const r in e){const s=t[r],o=e[r];if(ua(s)&&ua(o)){i[r]=Ot(s,o,n);continue}if(Array.isArray(s)&&Array.isArray(o)&&n){i[r]=n(s,o);continue}i[r]=o}return i}function Em(t){return t.map(e=>e.type===ot?Em(e.children):e).flat()}function ur(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(ur.cache.has(t))return ur.cache.get(t);const e=t.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return ur.cache.set(t,e),e}ur.cache=new Map;function Ls(t,e){if(!e||typeof e!="object")return[];if(Array.isArray(e))return e.map(n=>Ls(t,n)).flat(1);if(Array.isArray(e.children))return e.children.map(n=>Ls(t,n)).flat(1);if(e.component){if(Object.getOwnPropertySymbols(e.component.provides).includes(t))return[e.component];if(e.component.subTree)return Ls(t,e.component.subTree).flat(1)}return[]}function Tm(t){const e=$t({}),n=ne(t);return mr(()=>{for(const i in n.value)e[i]=n.value[i]},{flush:"sync"}),$c(e)}function mc(t,e){return t.includes(e)}function If(t,e){return e="on"+ri(e),!!(t[e]||t[`${e}Once`]||t[`${e}Capture`]||t[`${e}OnceCapture`]||t[`${e}CaptureOnce`])}function yx(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const n=["button","[href]",'input:not([type="hidden"])',"select","textarea","[tabindex]"].map(i=>`${i}${e?':not([tabindex="-1"])':""}:not([disabled])`).join(", ");return[...t.querySelectorAll(n)]}function Df(t,e){const n=Je();return mr(()=>{n.value=t()},{flush:"sync",...e}),Ks(n)}function Sx(){const t=Je(),e=n=>{t.value=n};return Object.defineProperty(e,"value",{enumerable:!0,get:()=>t.value,set:n=>t.value=n}),Object.defineProperty(e,"el",{enumerable:!0,get:()=>Sm(t.value)}),e}const Mx=["top","bottom"],bx=["start","end","left","right"];function Ex(t,e){let[n,i]=t.split(" ");return i||(i=mc(Mx,n)?"start":mc(bx,n)?"top":"center"),{side:Uf(n,e),align:Uf(i,e)}}function Uf(t,e){return t==="start"?e?"right":"left":t==="end"?e?"left":"right":t}function Tx(t,e,n){if(typeof t.animate>"u")return{finished:Promise.resolve()};let i;try{i=t.animate(e,n)}catch{return{finished:Promise.resolve()}}return typeof i.finished>"u"&&(i.finished=new Promise(r=>{i.onfinish=()=>{r(i)}})),i}const _r=2.4,Nf=.2126729,Ff=.7151522,Of=.072175,Ax=.55,wx=.58,Cx=.57,Rx=.62,So=.03,Bf=1.45,Px=5e-4,Lx=1.25,Ix=1.25,kf=.078,Vf=12.82051282051282,Mo=.06,zf=.001;function Hf(t,e){const n=(t.r/255)**_r,i=(t.g/255)**_r,r=(t.b/255)**_r,s=(e.r/255)**_r,o=(e.g/255)**_r,a=(e.b/255)**_r;let l=n*Nf+i*Ff+r*Of,c=s*Nf+o*Ff+a*Of;if(l<=So&&(l+=(So-l)**Bf),c<=So&&(c+=(So-c)**Bf),Math.abs(c-l)<Px)return 0;let u;if(c>l){const f=(c**Ax-l**wx)*Lx;u=f<zf?0:f<kf?f-f*Vf*Mo:f-Mo}else{const f=(c**Rx-l**Cx)*Ix;u=f>-zf?0:f>-kf?f-f*Vf*Mo:f+Mo}return u*100}const fa=.20689655172413793,Dx=t=>t>fa**3?Math.cbrt(t):t/(3*fa**2)+4/29,Ux=t=>t>fa?t**3:3*fa**2*(t-4/29);function Am(t){const e=Dx,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function wm(t){const e=Ux,n=(t[0]+16)/116;return[e(n+t[1]/500)*.95047,e(n),e(n-t[2]/200)*1.08883]}const Nx=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],Fx=t=>t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055,Ox=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],Bx=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function Cm(t){const e=Array(3),n=Fx,i=Nx;for(let r=0;r<3;++r)e[r]=Math.round(zs(n(i[r][0]*t[0]+i[r][1]*t[1]+i[r][2]*t[2]))*255);return{r:e[0],g:e[1],b:e[2]}}function du(t){let{r:e,g:n,b:i}=t;const r=[0,0,0],s=Bx,o=Ox;e=s(e/255),n=s(n/255),i=s(i/255);for(let a=0;a<3;++a)r[a]=o[a][0]*e+o[a][1]*n+o[a][2]*i;return r}function gc(t){return!!t&&/^(#|var\(--|(rgb|hsl)a?\()/.test(t)}function kx(t){return gc(t)&&!/^((rgb|hsl)a?\()?var\(--/.test(t)}const Gf=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,Vx={rgb:(t,e,n,i)=>({r:t,g:e,b:n,a:i}),rgba:(t,e,n,i)=>({r:t,g:e,b:n,a:i}),hsl:(t,e,n,i)=>Wf({h:t,s:e,l:n,a:i}),hsla:(t,e,n,i)=>Wf({h:t,s:e,l:n,a:i}),hsv:(t,e,n,i)=>Hs({h:t,s:e,v:n,a:i}),hsva:(t,e,n,i)=>Hs({h:t,s:e,v:n,a:i})};function kn(t){if(typeof t=="number")return{r:(t&16711680)>>16,g:(t&65280)>>8,b:t&255};if(typeof t=="string"&&Gf.test(t)){const{groups:e}=t.match(Gf),{fn:n,values:i}=e,r=i.split(/,\s*/).map(s=>s.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(s)/100:parseFloat(s));return Vx[n](...r)}else if(typeof t=="string"){let e=t.startsWith("#")?t.slice(1):t;return[3,4].includes(e.length)?e=e.split("").map(n=>n+n).join(""):[6,8].includes(e.length),Hx(e)}else if(typeof t=="object"){if(hl(t,["r","g","b"]))return t;if(hl(t,["h","s","l"]))return Hs(Rm(t));if(hl(t,["h","s","v"]))return Hs(t)}throw new TypeError(`Invalid color: ${t==null?t:String(t)||t.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function Hs(t){const{h:e,s:n,v:i,a:r}=t,s=a=>{const l=(a+e/60)%6;return i-i*n*Math.max(Math.min(l,4-l,1),0)},o=[s(5),s(3),s(1)].map(a=>Math.round(a*255));return{r:o[0],g:o[1],b:o[2],a:r}}function Wf(t){return Hs(Rm(t))}function Rm(t){const{h:e,s:n,l:i,a:r}=t,s=i+n*Math.min(i,1-i),o=s===0?0:2-2*i/s;return{h:e,s:o,v:s,a:r}}function bo(t){const e=Math.round(t).toString(16);return("00".substr(0,2-e.length)+e).toUpperCase()}function zx(t){let{r:e,g:n,b:i,a:r}=t;return`#${[bo(e),bo(n),bo(i),r!==void 0?bo(Math.round(r*255)):""].join("")}`}function Hx(t){t=Gx(t);let[e,n,i,r]=xx(t,2).map(s=>parseInt(s,16));return r=r===void 0?r:r/255,{r:e,g:n,b:i,a:r}}function Gx(t){return t.startsWith("#")&&(t=t.slice(1)),t=t.replace(/([^0-9a-f])/gi,"F"),(t.length===3||t.length===4)&&(t=t.split("").map(e=>e+e).join("")),t.length!==6&&(t=Pf(Pf(t,6),8,"F")),t}function Wx(t,e){const n=Am(du(t));return n[0]=n[0]+e*10,Cm(wm(n))}function Xx(t,e){const n=Am(du(t));return n[0]=n[0]-e*10,Cm(wm(n))}function $x(t){const e=kn(t);return du(e)[1]}function Pm(t){const e=Math.abs(Hf(kn(0),kn(t)));return Math.abs(Hf(kn(16777215),kn(t)))>Math.min(e,50)?"#fff":"#000"}function Re(t,e){return n=>Object.keys(t).reduce((i,r)=>{const o=typeof t[r]=="object"&&t[r]!=null&&!Array.isArray(t[r])?t[r]:{type:t[r]};return n&&r in n?i[r]={...o,default:n[r]}:i[r]=o,e&&!i[r].source&&(i[r].source=e),i},{})}const lt=Re({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component"),Kr=Symbol.for("vuetify:defaults");function qx(t){return pt(t)}function hu(){const t=gt(Kr);if(!t)throw new Error("[Vuetify] Could not find defaults instance");return t}function eo(t,e){const n=hu(),i=pt(t),r=ne(()=>{if(qt(e==null?void 0:e.disabled))return n.value;const o=qt(e==null?void 0:e.scoped),a=qt(e==null?void 0:e.reset),l=qt(e==null?void 0:e.root);if(i.value==null&&!(o||a||l))return n.value;let c=Ot(i.value,{prev:n.value});if(o)return c;if(a||l){const u=Number(a||1/0);for(let f=0;f<=u&&!(!c||!("prev"in c));f++)c=c.prev;return c&&typeof l=="string"&&l in c&&(c=Ot(Ot(c,{prev:c}),c[l])),c}return c.prev?Ot(c.prev,c):c});return xn(Kr,r),r}function Yx(t,e){var n,i;return typeof((n=t.props)==null?void 0:n[e])<"u"||typeof((i=t.props)==null?void 0:i[ur(e)])<"u"}function jx(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:hu();const i=Jt("useDefaults");if(e=e??i.type.name??i.type.__name,!e)throw new Error("[Vuetify] Could not determine component name");const r=ne(()=>{var l;return(l=n.value)==null?void 0:l[t._as??e]}),s=new Proxy(t,{get(l,c){var f,d,h,g;const u=Reflect.get(l,c);return c==="class"||c==="style"?[(f=r.value)==null?void 0:f[c],u].filter(v=>v!=null):typeof c=="string"&&!Yx(i.vnode,c)?((d=r.value)==null?void 0:d[c])??((g=(h=n.value)==null?void 0:h.global)==null?void 0:g[c])??u:u}}),o=Je();mr(()=>{if(r.value){const l=Object.entries(r.value).filter(c=>{let[u]=c;return u.startsWith(u[0].toUpperCase())});o.value=l.length?Object.fromEntries(l):void 0}else o.value=void 0});function a(){const l=Zx(Kr,i);xn(Kr,ne(()=>o.value?Ot((l==null?void 0:l.value)??{},o.value):l==null?void 0:l.value))}return{props:s,provideSubDefaults:a}}function to(t){if(t._setup=t._setup??t.setup,!t.name)return t;if(t._setup){t.props=Re(t.props??{},t.name)();const e=Object.keys(t.props).filter(n=>n!=="class"&&n!=="style");t.filterProps=function(i){return vx(i,e)},t.props._as=String,t.setup=function(i,r){const s=hu();if(!s.value)return t._setup(i,r);const{props:o,provideSubDefaults:a}=jx(i,i._as??t.name,s),l=t._setup(o,r);return a(),l}}return t}function $e(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(t?to:ss)(e)}function Lm(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return $e()({name:n??ri(yn(t.replace(/__/g,"-"))),props:{tag:{type:String,default:e},...lt()},setup(i,r){let{slots:s}=r;return()=>{var o;return Wn(i.tag,{class:[t,i.class],style:i.style},(o=s.default)==null?void 0:o.call(s))}}})}const Kx="cubic-bezier(0.4, 0, 0.2, 1)";function Jt(t,e){const n=au();if(!n)throw new Error(`[Vuetify] ${t} must be called from inside a setup function`);return n}function Vi(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const e=Jt(t).type;return ur((e==null?void 0:e.aliasName)||(e==null?void 0:e.name))}let Im=0,Jo=new WeakMap;function Na(){const t=Jt("getUid");if(Jo.has(t))return Jo.get(t);{const e=Im++;return Jo.set(t,e),e}}Na.reset=()=>{Im=0,Jo=new WeakMap};function Zx(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Jt("injectSelf");const{provides:n}=e;if(n&&t in n)return n[t]}function nt(t){const e=Jt("useRender");e.render=t}function ls(t,e,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:f=>f,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:f=>f;const s=Jt("useProxiedModel"),o=pt(t[e]!==void 0?t[e]:n),a=ur(e),c=ne(a!==e?()=>{var f,d,h,g;return t[e],!!(((f=s.vnode.props)!=null&&f.hasOwnProperty(e)||(d=s.vnode.props)!=null&&d.hasOwnProperty(a))&&((h=s.vnode.props)!=null&&h.hasOwnProperty(`onUpdate:${e}`)||(g=s.vnode.props)!=null&&g.hasOwnProperty(`onUpdate:${a}`)))}:()=>{var f,d;return t[e],!!((f=s.vnode.props)!=null&&f.hasOwnProperty(e)&&((d=s.vnode.props)!=null&&d.hasOwnProperty(`onUpdate:${e}`)))});xm(()=>!c.value,()=>{ht(()=>t[e],f=>{o.value=f})});const u=ne({get(){const f=t[e];return i(c.value?f:o.value)},set(f){const d=r(f),h=je(c.value?t[e]:o.value);h===d||i(h)===f||(o.value=d,s==null||s.emit(`update:${e}`,d))}});return Object.defineProperty(u,"externalValue",{get:()=>c.value?t[e]:o.value}),u}const Jx={badge:"Badge",open:"Open",close:"Close",dismiss:"Dismiss",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM",title:"Select Time"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},Xf="$vuetify.",$f=(t,e)=>t.replace(/\{(\d+)\}/g,(n,i)=>String(e[+i])),Dm=(t,e,n)=>function(i){for(var r=arguments.length,s=new Array(r>1?r-1:0),o=1;o<r;o++)s[o-1]=arguments[o];if(!i.startsWith(Xf))return $f(i,s);const a=i.replace(Xf,""),l=t.value&&n.value[t.value],c=e.value&&n.value[e.value];let u=Cf(l,a,null);return u||(`${i}${t.value}`,u=Cf(c,a,null)),u||(u=i),typeof u!="string"&&(u=i),$f(u,s)};function Um(t,e){return(n,i)=>new Intl.NumberFormat([t.value,e.value],i).format(n)}function pl(t,e,n){const i=ls(t,e,t[e]??n.value);return i.value=t[e]??n.value,ht(n,r=>{t[e]==null&&(i.value=n.value)}),i}function Nm(t){return e=>{const n=pl(e,"locale",t.current),i=pl(e,"fallback",t.fallback),r=pl(e,"messages",t.messages);return{name:"vuetify",current:n,fallback:i,messages:r,t:Dm(n,i,r),n:Um(n,i),provide:Nm({current:n,fallback:i,messages:r})}}}function Qx(t){const e=Je((t==null?void 0:t.locale)??"en"),n=Je((t==null?void 0:t.fallback)??"en"),i=pt({en:Jx,...t==null?void 0:t.messages});return{name:"vuetify",current:e,fallback:n,messages:i,t:Dm(e,n,i),n:Um(e,n),provide:Nm({current:e,fallback:n,messages:i})}}const da=Symbol.for("vuetify:locale");function ey(t){return t.name!=null}function ty(t){const e=t!=null&&t.adapter&&ey(t==null?void 0:t.adapter)?t==null?void 0:t.adapter:Qx(t),n=ry(e,t);return{...e,...n}}function ny(){const t=gt(da);if(!t)throw new Error("[Vuetify] Could not find injected locale instance");return t}function iy(){return{af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,km:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1}}function ry(t,e){const n=pt((e==null?void 0:e.rtl)??iy()),i=ne(()=>n.value[t.current.value]??!1);return{isRtl:i,rtl:n,rtlClasses:ne(()=>`v-locale--is-${i.value?"rtl":"ltr"}`)}}function zi(){const t=gt(da);if(!t)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:t.isRtl,rtlClasses:t.rtlClasses}}const Gs={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function sy(t,e){const n=[];let i=[];const r=Fm(t),s=Om(t),o=(r.getDay()-Gs[e.slice(-2).toUpperCase()]+7)%7,a=(s.getDay()-Gs[e.slice(-2).toUpperCase()]+7)%7;for(let l=0;l<o;l++){const c=new Date(r);c.setDate(c.getDate()-(o-l)),i.push(c)}for(let l=1;l<=s.getDate();l++){const c=new Date(t.getFullYear(),t.getMonth(),l);i.push(c),i.length===7&&(n.push(i),i=[])}for(let l=1;l<7-a;l++){const c=new Date(s);c.setDate(c.getDate()+l),i.push(c)}return i.length>0&&n.push(i),n}function oy(t,e){const n=new Date(t);for(;n.getDay()!==(Gs[e.slice(-2).toUpperCase()]??0);)n.setDate(n.getDate()-1);return n}function ay(t,e){const n=new Date(t),i=((Gs[e.slice(-2).toUpperCase()]??0)+6)%7;for(;n.getDay()!==i;)n.setDate(n.getDate()+1);return n}function Fm(t){return new Date(t.getFullYear(),t.getMonth(),1)}function Om(t){return new Date(t.getFullYear(),t.getMonth()+1,0)}function ly(t){const e=t.split("-").map(Number);return new Date(e[0],e[1]-1,e[2])}const cy=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;function Bm(t){if(t==null)return new Date;if(t instanceof Date)return t;if(typeof t=="string"){let e;if(cy.test(t))return ly(t);if(e=Date.parse(t),!isNaN(e))return new Date(e)}return null}const qf=new Date(2e3,0,2);function uy(t){const e=Gs[t.slice(-2).toUpperCase()];return ym(7).map(n=>{const i=new Date(qf);return i.setDate(qf.getDate()+e+n),new Intl.DateTimeFormat(t,{weekday:"narrow"}).format(i)})}function fy(t,e,n,i){const r=Bm(t)??new Date,s=i==null?void 0:i[e];if(typeof s=="function")return s(r,e,n);let o={};switch(e){case"fullDate":o={year:"numeric",month:"long",day:"numeric"};break;case"fullDateWithWeekday":o={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;case"normalDate":const a=r.getDate(),l=new Intl.DateTimeFormat(n,{month:"long"}).format(r);return`${a} ${l}`;case"normalDateWithWeekday":o={weekday:"short",day:"numeric",month:"short"};break;case"shortDate":o={month:"short",day:"numeric"};break;case"year":o={year:"numeric"};break;case"month":o={month:"long"};break;case"monthShort":o={month:"short"};break;case"monthAndYear":o={month:"long",year:"numeric"};break;case"monthAndDate":o={month:"long",day:"numeric"};break;case"weekday":o={weekday:"long"};break;case"weekdayShort":o={weekday:"short"};break;case"dayOfMonth":return new Intl.NumberFormat(n).format(r.getDate());case"hours12h":o={hour:"numeric",hour12:!0};break;case"hours24h":o={hour:"numeric",hour12:!1};break;case"minutes":o={minute:"numeric"};break;case"seconds":o={second:"numeric"};break;case"fullTime":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime12h":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime24h":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"fullDateTime":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime12h":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime24h":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDate":o={year:"numeric",month:"2-digit",day:"2-digit"};break;case"keyboardDateTime":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDateTime12h":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"keyboardDateTime24h":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;default:o=s??{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(n,o).format(r)}function dy(t,e){const n=t.toJsDate(e),i=n.getFullYear(),r=Lf(String(n.getMonth()+1),2,"0"),s=Lf(String(n.getDate()),2,"0");return`${i}-${r}-${s}`}function hy(t){const[e,n,i]=t.split("-").map(Number);return new Date(e,n-1,i)}function py(t,e){const n=new Date(t);return n.setMinutes(n.getMinutes()+e),n}function my(t,e){const n=new Date(t);return n.setHours(n.getHours()+e),n}function gy(t,e){const n=new Date(t);return n.setDate(n.getDate()+e),n}function vy(t,e){const n=new Date(t);return n.setDate(n.getDate()+e*7),n}function _y(t,e){const n=new Date(t);return n.setDate(1),n.setMonth(n.getMonth()+e),n}function xy(t){return t.getFullYear()}function yy(t){return t.getMonth()}function Sy(t){return t.getDate()}function My(t){return new Date(t.getFullYear(),t.getMonth()+1,1)}function by(t){return new Date(t.getFullYear(),t.getMonth()-1,1)}function Ey(t){return t.getHours()}function Ty(t){return t.getMinutes()}function Ay(t){return new Date(t.getFullYear(),0,1)}function wy(t){return new Date(t.getFullYear(),11,31)}function Cy(t,e){return ha(t,e[0])&&Ly(t,e[1])}function Ry(t){const e=new Date(t);return e instanceof Date&&!isNaN(e.getTime())}function ha(t,e){return t.getTime()>e.getTime()}function Py(t,e){return ha(vc(t),vc(e))}function Ly(t,e){return t.getTime()<e.getTime()}function Yf(t,e){return t.getTime()===e.getTime()}function Iy(t,e){return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function Dy(t,e){return t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function Uy(t,e){return t.getFullYear()===e.getFullYear()}function Ny(t,e,n){const i=new Date(t),r=new Date(e);switch(n){case"years":return i.getFullYear()-r.getFullYear();case"quarters":return Math.floor((i.getMonth()-r.getMonth()+(i.getFullYear()-r.getFullYear())*12)/4);case"months":return i.getMonth()-r.getMonth()+(i.getFullYear()-r.getFullYear())*12;case"weeks":return Math.floor((i.getTime()-r.getTime())/(1e3*60*60*24*7));case"days":return Math.floor((i.getTime()-r.getTime())/(1e3*60*60*24));case"hours":return Math.floor((i.getTime()-r.getTime())/(1e3*60*60));case"minutes":return Math.floor((i.getTime()-r.getTime())/(1e3*60));case"seconds":return Math.floor((i.getTime()-r.getTime())/1e3);default:return i.getTime()-r.getTime()}}function Fy(t,e){const n=new Date(t);return n.setHours(e),n}function Oy(t,e){const n=new Date(t);return n.setMinutes(e),n}function By(t,e){const n=new Date(t);return n.setMonth(e),n}function ky(t,e){const n=new Date(t);return n.setDate(e),n}function Vy(t,e){const n=new Date(t);return n.setFullYear(e),n}function vc(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),0,0,0,0)}function zy(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),23,59,59,999)}class Hy{constructor(e){this.locale=e.locale,this.formats=e.formats}date(e){return Bm(e)}toJsDate(e){return e}toISO(e){return dy(this,e)}parseISO(e){return hy(e)}addMinutes(e,n){return py(e,n)}addHours(e,n){return my(e,n)}addDays(e,n){return gy(e,n)}addWeeks(e,n){return vy(e,n)}addMonths(e,n){return _y(e,n)}getWeekArray(e){return sy(e,this.locale)}startOfWeek(e){return oy(e,this.locale)}endOfWeek(e){return ay(e,this.locale)}startOfMonth(e){return Fm(e)}endOfMonth(e){return Om(e)}format(e,n){return fy(e,n,this.locale,this.formats)}isEqual(e,n){return Yf(e,n)}isValid(e){return Ry(e)}isWithinRange(e,n){return Cy(e,n)}isAfter(e,n){return ha(e,n)}isAfterDay(e,n){return Py(e,n)}isBefore(e,n){return!ha(e,n)&&!Yf(e,n)}isSameDay(e,n){return Iy(e,n)}isSameMonth(e,n){return Dy(e,n)}isSameYear(e,n){return Uy(e,n)}setMinutes(e,n){return Oy(e,n)}setHours(e,n){return Fy(e,n)}setMonth(e,n){return By(e,n)}setDate(e,n){return ky(e,n)}setYear(e,n){return Vy(e,n)}getDiff(e,n,i){return Ny(e,n,i)}getWeekdays(){return uy(this.locale)}getYear(e){return xy(e)}getMonth(e){return yy(e)}getDate(e){return Sy(e)}getNextMonth(e){return My(e)}getPreviousMonth(e){return by(e)}getHours(e){return Ey(e)}getMinutes(e){return Ty(e)}startOfDay(e){return vc(e)}endOfDay(e){return zy(e)}startOfYear(e){return Ay(e)}endOfYear(e){return wy(e)}}const Gy=Symbol.for("vuetify:date-options"),jf=Symbol.for("vuetify:date-adapter");function Wy(t,e){const n=Ot({adapter:Hy,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},t);return{options:n,instance:Xy(n,e)}}function Xy(t,e){const n=$t(typeof t.adapter=="function"?new t.adapter({locale:t.locale[e.current.value]??e.current.value,formats:t.formats}):t.adapter);return ht(e.current,i=>{n.locale=t.locale[i]??i??n.locale}),n}const Fa=["sm","md","lg","xl","xxl"],_c=Symbol.for("vuetify:display"),Kf={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},$y=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Kf;return Ot(Kf,t)};function Zf(t){return Yt&&!t?window.innerWidth:typeof t=="object"&&t.clientWidth||0}function Jf(t){return Yt&&!t?window.innerHeight:typeof t=="object"&&t.clientHeight||0}function Qf(t){const e=Yt&&!t?window.navigator.userAgent:"ssr";function n(g){return!!e.match(g)}const i=n(/android/i),r=n(/iphone|ipad|ipod/i),s=n(/cordova/i),o=n(/electron/i),a=n(/chrome/i),l=n(/edge/i),c=n(/firefox/i),u=n(/opera/i),f=n(/win/i),d=n(/mac/i),h=n(/linux/i);return{android:i,ios:r,cordova:s,electron:o,chrome:a,edge:l,firefox:c,opera:u,win:f,mac:d,linux:h,touch:mx,ssr:e==="ssr"}}function qy(t,e){const{thresholds:n,mobileBreakpoint:i}=$y(t),r=Je(Jf(e)),s=Je(Qf(e)),o=$t({}),a=Je(Zf(e));function l(){r.value=Jf(),a.value=Zf()}function c(){l(),s.value=Qf()}return mr(()=>{const u=a.value<n.sm,f=a.value<n.md&&!u,d=a.value<n.lg&&!(f||u),h=a.value<n.xl&&!(d||f||u),g=a.value<n.xxl&&!(h||d||f||u),v=a.value>=n.xxl,m=u?"xs":f?"sm":d?"md":h?"lg":g?"xl":"xxl",p=typeof i=="number"?i:n[i],M=a.value<p;o.xs=u,o.sm=f,o.md=d,o.lg=h,o.xl=g,o.xxl=v,o.smAndUp=!u,o.mdAndUp=!(u||f),o.lgAndUp=!(u||f||d),o.xlAndUp=!(u||f||d||h),o.smAndDown=!(d||h||g||v),o.mdAndDown=!(h||g||v),o.lgAndDown=!(g||v),o.xlAndDown=!v,o.name=m,o.height=r.value,o.width=a.value,o.mobile=M,o.mobileBreakpoint=i,o.platform=s.value,o.thresholds=n}),Yt&&window.addEventListener("resize",l,{passive:!0}),{...$c(o),update:c,ssr:!!e}}const Yy=Re({mobile:{type:Boolean,default:!1},mobileBreakpoint:[Number,String]},"display");function jy(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Vi();const n=gt(_c);if(!n)throw new Error("Could not find Vuetify display injection");const i=ne(()=>{if(t.mobile!=null)return t.mobile;if(!t.mobileBreakpoint)return n.mobile.value;const s=typeof t.mobileBreakpoint=="number"?t.mobileBreakpoint:n.thresholds.value[t.mobileBreakpoint];return n.width.value<s}),r=ne(()=>e?{[`${e}--mobile`]:i.value}:{});return{...n,displayClasses:r,mobile:i}}const km=Symbol.for("vuetify:goto");function Vm(){return{container:void 0,duration:300,layout:!1,offset:0,easing:"easeInOutCubic",patterns:{linear:t=>t,easeInQuad:t=>t**2,easeOutQuad:t=>t*(2-t),easeInOutQuad:t=>t<.5?2*t**2:-1+(4-2*t)*t,easeInCubic:t=>t**3,easeOutCubic:t=>--t**3+1,easeInOutCubic:t=>t<.5?4*t**3:(t-1)*(2*t-2)*(2*t-2)+1,easeInQuart:t=>t**4,easeOutQuart:t=>1- --t**4,easeInOutQuart:t=>t<.5?8*t**4:1-8*--t**4,easeInQuint:t=>t**5,easeOutQuint:t=>1+--t**5,easeInOutQuint:t=>t<.5?16*t**5:1+16*--t**5}}}function Ky(t){return pu(t)??(document.scrollingElement||document.body)}function pu(t){return typeof t=="string"?document.querySelector(t):Sm(t)}function ml(t,e,n){if(typeof t=="number")return e&&n?-t:t;let i=pu(t),r=0;for(;i;)r+=e?i.offsetLeft:i.offsetTop,i=i.offsetParent;return r}function Zy(t,e){return{rtl:e.isRtl,options:Ot(Vm(),t)}}async function ed(t,e,n,i){const r=n?"scrollLeft":"scrollTop",s=Ot((i==null?void 0:i.options)??Vm(),e),o=i==null?void 0:i.rtl.value,a=(typeof t=="number"?t:pu(t))??0,l=s.container==="parent"&&a instanceof HTMLElement?a.parentElement:Ky(s.container),c=typeof s.easing=="function"?s.easing:s.patterns[s.easing];if(!c)throw new TypeError(`Easing function "${s.easing}" not found.`);let u;if(typeof a=="number")u=ml(a,n,o);else if(u=ml(a,n,o)-ml(l,n,o),s.layout){const g=window.getComputedStyle(a).getPropertyValue("--v-layout-top");g&&(u-=parseInt(g,10))}u+=s.offset,u=Qy(l,u,!!o,!!n);const f=l[r]??0;if(u===f)return Promise.resolve(u);const d=performance.now();return new Promise(h=>requestAnimationFrame(function g(v){const p=(v-d)/s.duration,M=Math.floor(f+(u-f)*c(zs(p,0,1)));if(l[r]=M,p>=1&&Math.abs(M-l[r])<10)return h(u);if(p>2)return h(l[r]);requestAnimationFrame(g)}))}function Jy(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const e=gt(km),{isRtl:n}=zi();if(!e)throw new Error("[Vuetify] Could not find injected goto instance");const i={...e,rtl:ne(()=>e.rtl.value||n.value)};async function r(s,o){return ed(s,Ot(t,o),!1,i)}return r.horizontal=async(s,o)=>ed(s,Ot(t,o),!0,i),r}function Qy(t,e,n,i){const{scrollWidth:r,scrollHeight:s}=t,[o,a]=t===document.scrollingElement?[window.innerWidth,window.innerHeight]:[t.offsetWidth,t.offsetHeight];let l,c;return i?n?(l=-(r-o),c=0):(l=0,c=r-o):(l=0,c=s+-a),Math.max(Math.min(e,c),l)}const eS={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",treeviewCollapse:"mdi-menu-down",treeviewExpand:"mdi-menu-right",eyeDropper:"mdi-eyedropper"},tS={component:t=>Wn(Hm,{...t,class:"mdi"})},wn=[String,Function,Object,Array],xc=Symbol.for("vuetify:icons"),Oa=Re({icon:{type:wn},tag:{type:String,required:!0}},"icon"),td=$e()({name:"VComponentIcon",props:Oa(),setup(t,e){let{slots:n}=e;return()=>{const i=t.icon;return k(t.tag,null,{default:()=>{var r;return[t.icon?k(i,null,null):(r=n.default)==null?void 0:r.call(n)]}})}}}),zm=to({name:"VSvgIcon",inheritAttrs:!1,props:Oa(),setup(t,e){let{attrs:n}=e;return()=>k(t.tag,sn(n,{style:null}),{default:()=>[k("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(t.icon)?t.icon.map(i=>Array.isArray(i)?k("path",{d:i[0],"fill-opacity":i[1]},null):k("path",{d:i},null)):k("path",{d:t.icon},null)])]})}});to({name:"VLigatureIcon",props:Oa(),setup(t){return()=>k(t.tag,null,{default:()=>[t.icon]})}});const Hm=to({name:"VClassIcon",props:Oa(),setup(t){return()=>k(t.tag,{class:t.icon},null)}});function nS(){return{svg:{component:zm},class:{component:Hm}}}function iS(t){const e=nS(),n=(t==null?void 0:t.defaultSet)??"mdi";return n==="mdi"&&!e.mdi&&(e.mdi=tS),Ot({defaultSet:n,sets:e,aliases:{...eS,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z","vuetify-play":["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z",["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z",.6]]}},t)}const rS=t=>{const e=gt(xc);if(!e)throw new Error("Missing Vuetify Icons provide!");return{iconData:ne(()=>{var l;const i=qt(t);if(!i)return{component:td};let r=i;if(typeof r=="string"&&(r=r.trim(),r.startsWith("$")&&(r=(l=e.aliases)==null?void 0:l[r.slice(1)])),Array.isArray(r))return{component:zm,icon:r};if(typeof r!="string")return{component:td,icon:r};const s=Object.keys(e.sets).find(c=>typeof r=="string"&&r.startsWith(`${c}:`)),o=s?r.slice(s.length+1):r;return{component:e.sets[s??e.defaultSet].component,icon:o}})}},pa=Symbol.for("vuetify:theme"),Rn=Re({theme:String},"theme");function nd(){return{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-light":"#424242","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}}function sS(){var i,r;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:nd();const e=nd();if(!t)return{...e,isDisabled:!0};const n={};for(const[s,o]of Object.entries(t.themes??{})){const a=o.dark||s==="dark"?(i=e.themes)==null?void 0:i.dark:(r=e.themes)==null?void 0:r.light;n[s]=Ot(a,o)}return Ot(e,{...t,themes:n})}function oS(t){const e=sS(t),n=pt(e.defaultTheme),i=pt(e.themes),r=ne(()=>{const u={};for(const[f,d]of Object.entries(i.value)){const h=u[f]={...d,colors:{...d.colors}};if(e.variations)for(const g of e.variations.colors){const v=h.colors[g];if(v)for(const m of["lighten","darken"]){const p=m==="lighten"?Wx:Xx;for(const M of ym(e.variations[m],1))h.colors[`${g}-${m}-${M}`]=zx(p(kn(v),M))}}for(const g of Object.keys(h.colors)){if(/^on-[a-z]/.test(g)||h.colors[`on-${g}`])continue;const v=`on-${g}`,m=kn(h.colors[g]);h.colors[v]=Pm(m)}}return u}),s=ne(()=>r.value[n.value]),o=ne(()=>{var g;const u=[];(g=s.value)!=null&&g.dark&&qi(u,":root",["color-scheme: dark"]),qi(u,":root",id(s.value));for(const[v,m]of Object.entries(r.value))qi(u,`.v-theme--${v}`,[`color-scheme: ${m.dark?"dark":"normal"}`,...id(m)]);const f=[],d=[],h=new Set(Object.values(r.value).flatMap(v=>Object.keys(v.colors)));for(const v of h)/^on-[a-z]/.test(v)?qi(d,`.${v}`,[`color: rgb(var(--v-theme-${v})) !important`]):(qi(f,`.bg-${v}`,[`--v-theme-overlay-multiplier: var(--v-theme-${v}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${v})) !important`,`color: rgb(var(--v-theme-on-${v})) !important`]),qi(d,`.text-${v}`,[`color: rgb(var(--v-theme-${v})) !important`]),qi(d,`.border-${v}`,[`--v-border-color: var(--v-theme-${v})`]));return u.push(...f,...d),u.map((v,m)=>m===0?v:`    ${v}`).join("")});function a(){return{style:[{children:o.value,id:"vuetify-theme-stylesheet",nonce:e.cspNonce||!1}]}}function l(u){if(e.isDisabled)return;const f=u._context.provides.usehead;if(f)if(f.push){const h=f.push(a);Yt&&ht(o,()=>{h.patch(a)})}else Yt?(f.addHeadObjs(ne(a)),mr(()=>f.updateDOM())):f.addHeadObjs(a());else{let g=function(){if(typeof document<"u"&&!h){const v=document.createElement("style");v.type="text/css",v.id="vuetify-theme-stylesheet",e.cspNonce&&v.setAttribute("nonce",e.cspNonce),h=v,document.head.appendChild(h)}h&&(h.innerHTML=o.value)};var d=g;let h=Yt?document.getElementById("vuetify-theme-stylesheet"):null;Yt?ht(o,g,{immediate:!0}):g()}}const c=ne(()=>e.isDisabled?void 0:`v-theme--${n.value}`);return{install:l,isDisabled:e.isDisabled,name:n,themes:i,current:s,computedThemes:r,themeClasses:c,styles:o,global:{name:n,current:s}}}function Pn(t){Jt("provideTheme");const e=gt(pa,null);if(!e)throw new Error("Could not find Vuetify theme injection");const n=ne(()=>t.theme??e.name.value),i=ne(()=>e.themes.value[n.value]),r=ne(()=>e.isDisabled?void 0:`v-theme--${n.value}`),s={...e,name:n,current:i,themeClasses:r};return xn(pa,s),s}function qi(t,e,n){t.push(`${e} {
`,...n.map(i=>`  ${i};
`),`}
`)}function id(t){const e=t.dark?2:1,n=t.dark?1:2,i=[];for(const[r,s]of Object.entries(t.colors)){const o=kn(s);i.push(`--v-theme-${r}: ${o.r},${o.g},${o.b}`),r.startsWith("on-")||i.push(`--v-theme-${r}-overlay-multiplier: ${$x(s)>.18?e:n}`)}for(const[r,s]of Object.entries(t.variables)){const o=typeof s=="string"&&s.startsWith("#")?kn(s):void 0,a=o?`${o.r}, ${o.g}, ${o.b}`:void 0;i.push(`--v-${r}: ${a??s}`)}return i}function ma(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const n=Sx(),i=pt();if(Yt){const r=new ResizeObserver(s=>{s.length&&(e==="content"?i.value=s[0].contentRect:i.value=s[0].target.getBoundingClientRect())});ai(()=>{r.disconnect()}),ht(()=>n.el,(s,o)=>{o&&(r.unobserve(o),i.value=void 0),s&&r.observe(s)},{flush:"post"})}return{resizeRef:n,contentRect:Ks(i)}}const ga=Symbol.for("vuetify:layout"),Gm=Symbol.for("vuetify:layout-item"),rd=1e3,Wm=Re({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),aS=Re({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function lS(){const t=gt(ga);if(!t)throw new Error("[Vuetify] Could not find injected layout");return{layoutIsReady:si(),getLayoutItem:t.getLayoutItem,mainRect:t.mainRect,mainStyles:t.mainStyles}}function cS(t){const e=gt(ga);if(!e)throw new Error("[Vuetify] Could not find injected layout");const n=t.id??`layout-item-${Na()}`,i=Jt("useLayoutItem");xn(Gm,{id:n});const r=Je(!1);Wp(()=>r.value=!0),Gp(()=>r.value=!1);const s=si(),{layoutItemStyles:o,layoutItemScrimStyles:a}=e.register(i,{...t,active:ne(()=>r.value?!1:t.active.value),id:n});return ai(()=>e.unregister(n)),{layoutItemStyles:o,layoutRect:e.layoutRect,layoutItemScrimStyles:a,layoutIsReady:s}}const uS=(t,e,n,i)=>{let r={top:0,left:0,right:0,bottom:0};const s=[{id:"",layer:{...r}}];for(const o of t){const a=e.get(o),l=n.get(o),c=i.get(o);if(!a||!l||!c)continue;const u={...r,[a.value]:parseInt(r[a.value],10)+(c.value?parseInt(l.value,10):0)};s.push({id:o,layer:u}),r=u}return s};function Xm(t){const e=gt(ga,null),n=ne(()=>e?e.rootZIndex.value-100:rd),i=pt([]),r=$t(new Map),s=$t(new Map),o=$t(new Map),a=$t(new Map),l=$t(new Map),{resizeRef:c,contentRect:u}=ma(),f=Df(()=>{const P=[...new Set([...o.values()].map(C=>C.value))].sort((C,D)=>C-D),E=[];for(const C of P){const D=i.value.filter(S=>{var _;return((_=o.get(S))==null?void 0:_.value)===C});E.push(...D)}return uS(E,r,s,a)}),d=ne(()=>!Array.from(l.values()).some(P=>P.value)),h=ne(()=>f.value[f.value.length-1].layer),g=ne(()=>({"--v-layout-left":Ye(h.value.left),"--v-layout-right":Ye(h.value.right),"--v-layout-top":Ye(h.value.top),"--v-layout-bottom":Ye(h.value.bottom),...d.value?void 0:{transition:"none"}})),v=Df(()=>f.value.slice(1).map((P,E)=>{let{id:C}=P;const{layer:D}=f.value[E],S=s.get(C),_=r.get(C);return{id:C,...D,size:Number(S.value),position:_.value}})),m=P=>v.value.find(E=>E.id===P),p=Jt("createLayout"),M=si();xn(ga,{register:(P,E)=>{let{id:C,order:D,position:S,layoutSize:_,elementSize:F,active:I,disableTransitions:L,absolute:W}=E;o.set(C,D),r.set(C,S),s.set(C,_),a.set(C,I),L&&l.set(C,L);const ie=Ls(Gm,p==null?void 0:p.vnode).indexOf(P);ie>-1?i.value.splice(ie,0,C):i.value.push(C);const re=ne(()=>v.value.findIndex(ae=>ae.id===C)),G=ne(()=>n.value+f.value.length*2-re.value*2),me=ne(()=>{const ae=S.value==="left"||S.value==="right",_e=S.value==="right",Be=S.value==="bottom",te=F.value??_.value,ge=te===0?"%":"px",ve={[S.value]:0,zIndex:G.value,transform:`translate${ae?"X":"Y"}(${(I.value?0:-(te===0?100:te))*(_e||Be?-1:1)}${ge})`,position:W.value||n.value!==rd?"absolute":"fixed",...d.value?void 0:{transition:"none"}};if(re.value<0)throw new Error(`Layout item "${C}" is missing`);const B=v.value[re.value];if(!B)throw new Error(`[Vuetify] Could not find layout item "${C}"`);return{...ve,height:ae?`calc(100% - ${B.top}px - ${B.bottom}px)`:F.value?`${F.value}px`:void 0,left:_e?void 0:`${B.left}px`,right:_e?`${B.right}px`:void 0,top:S.value!=="bottom"?`${B.top}px`:void 0,bottom:S.value!=="top"?`${B.bottom}px`:void 0,width:ae?F.value?`${F.value}px`:void 0:`calc(100% - ${B.left}px - ${B.right}px)`}}),Q=ne(()=>({zIndex:G.value-1}));return{layoutItemStyles:me,layoutItemScrimStyles:Q,zIndex:G}},unregister:P=>{o.delete(P),r.delete(P),s.delete(P),a.delete(P),l.delete(P),i.value=i.value.filter(E=>E!==P)},mainRect:h,mainStyles:g,getLayoutItem:m,items:v,layoutRect:u,rootZIndex:n,layoutIsReady:M});const y=ne(()=>["v-layout",{"v-layout--full-height":t.fullHeight}]),b=ne(()=>({zIndex:e?n.value:void 0,position:e?"relative":void 0,overflow:e?"hidden":void 0}));return{layoutClasses:y,layoutStyles:b,getLayoutItem:m,items:v,layoutRect:u,layoutIsReady:M,layoutRef:c}}function $m(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:e,...n}=t,i=Ot(e,n),{aliases:r={},components:s={},directives:o={}}=i,a=qx(i.defaults),l=qy(i.display,i.ssr),c=oS(i.theme),u=iS(i.icons),f=ty(i.locale),d=Wy(i.date,f),h=Zy(i.goTo,f);return{install:v=>{for(const m in o)v.directive(m,o[m]);for(const m in s)v.component(m,s[m]);for(const m in r)v.component(m,to({...r[m],name:m,aliasName:r[m].name}));if(c.install(v),v.provide(Kr,a),v.provide(_c,l),v.provide(pa,c),v.provide(xc,u),v.provide(da,f),v.provide(Gy,d.options),v.provide(jf,d.instance),v.provide(km,h),Yt&&i.ssr)if(v.$nuxt)v.$nuxt.hook("app:suspense:resolve",()=>{l.update()});else{const{mount:m}=v;v.mount=function(){const p=m(...arguments);return si(()=>l.update()),v.mount=m,p}}Na.reset(),v.mixin({computed:{$vuetify(){return $t({defaults:xr.call(this,Kr),display:xr.call(this,_c),theme:xr.call(this,pa),icons:xr.call(this,xc),locale:xr.call(this,da),date:xr.call(this,jf)})}}})},defaults:a,display:l,theme:c,icons:u,locale:f,date:d,goTo:h}}const fS="3.6.6";$m.version=fS;function xr(t){var i,r;const e=this.$,n=((i=e.parent)==null?void 0:i.provides)??((r=e.vnode.appContext)==null?void 0:r.provides);if(n&&t in n)return n[t]}const dS=$m({theme:{defaultTheme:"dark"}});function hS(t){t.use(dS)}/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Or=typeof document<"u";function pS(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const rt=Object.assign;function gl(t,e){const n={};for(const i in e){const r=e[i];n[i]=Cn(r)?r.map(t):t(r)}return n}const Is=()=>{},Cn=Array.isArray,qm=/#/g,mS=/&/g,gS=/\//g,vS=/=/g,_S=/\?/g,Ym=/\+/g,xS=/%5B/g,yS=/%5D/g,jm=/%5E/g,SS=/%60/g,Km=/%7B/g,MS=/%7C/g,Zm=/%7D/g,bS=/%20/g;function mu(t){return encodeURI(""+t).replace(MS,"|").replace(xS,"[").replace(yS,"]")}function ES(t){return mu(t).replace(Km,"{").replace(Zm,"}").replace(jm,"^")}function yc(t){return mu(t).replace(Ym,"%2B").replace(bS,"+").replace(qm,"%23").replace(mS,"%26").replace(SS,"`").replace(Km,"{").replace(Zm,"}").replace(jm,"^")}function TS(t){return yc(t).replace(vS,"%3D")}function AS(t){return mu(t).replace(qm,"%23").replace(_S,"%3F")}function wS(t){return t==null?"":AS(t).replace(gS,"%2F")}function Ws(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const CS=/\/$/,RS=t=>t.replace(CS,"");function vl(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=DS(i??e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:Ws(o)}}function PS(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function sd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function LS(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Zr(e.matched[i],n.matched[r])&&Jm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Zr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Jm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!IS(t[n],e[n]))return!1;return!0}function IS(t,e){return Cn(t)?od(t,e):Cn(e)?od(e,t):t===e}function od(t,e){return Cn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function DS(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o).join("/")}var Xs;(function(t){t.pop="pop",t.push="push"})(Xs||(Xs={}));var Ds;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ds||(Ds={}));function US(t){if(!t)if(Or){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),RS(t)}const NS=/^[^#]+#/;function FS(t,e){return t.replace(NS,"#")+e}function OS(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Ba=()=>({left:window.scrollX,top:window.scrollY});function BS(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=OS(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ad(t,e){return(history.state?history.state.position-e:-1)+t}const Sc=new Map;function kS(t,e){Sc.set(t,e)}function VS(t){const e=Sc.get(t);return Sc.delete(t),e}let zS=()=>location.protocol+"//"+location.host;function Qm(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),sd(l,"")}return sd(n,t)+i+r}function HS(t,e,n,i){let r=[],s=[],o=null;const a=({state:d})=>{const h=Qm(t,location),g=n.value,v=e.value;let m=0;if(d){if(n.value=h,e.value=d,o&&o===g){o=null;return}m=v?d.position-v.position:0}else i(h);r.forEach(p=>{p(n.value,g,{delta:m,type:Xs.pop,direction:m?m>0?Ds.forward:Ds.back:Ds.unknown})})};function l(){o=n.value}function c(d){r.push(d);const h=()=>{const g=r.indexOf(d);g>-1&&r.splice(g,1)};return s.push(h),h}function u(){const{history:d}=window;d.state&&d.replaceState(rt({},d.state,{scroll:Ba()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function ld(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?Ba():null}}function GS(t){const{history:e,location:n}=window,i={value:Qm(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:zS()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(h){console.error(h),n[u?"replace":"assign"](d)}}function o(l,c){const u=rt({},e.state,ld(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=rt({},r.value,e.state,{forward:l,scroll:Ba()});s(u.current,u,!0);const f=rt({},ld(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function WS(t){t=US(t);const e=GS(t),n=HS(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=rt({location:"",base:t,go:i,createHref:FS.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function XS(t){return typeof t=="string"||t&&typeof t=="object"}function eg(t){return typeof t=="string"||typeof t=="symbol"}const di={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},tg=Symbol("");var cd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(cd||(cd={}));function Jr(t,e){return rt(new Error,{type:t,[tg]:!0},e)}function $n(t,e){return t instanceof Error&&tg in t&&(e==null||!!(t.type&e))}const ud="[^/]+?",$S={sensitive:!1,strict:!1,start:!0,end:!0},qS=/[.+*?^${}()[\]/\\]/g;function YS(t,e){const n=rt({},$S,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let h=40+(n.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(qS,"\\$&"),h+=40;else if(d.type===1){const{value:g,repeatable:v,optional:m,regexp:p}=d;s.push({name:g,repeatable:v,optional:m});const M=p||ud;if(M!==ud){h+=10;try{new RegExp(`(${M})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${g}" (${M}): `+b.message)}}let y=v?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(y=m&&c.length<2?`(?:/${y})`:"/"+y),m&&(y+="?"),r+=y,h+=20,m&&(h+=-8),v&&(h+=-20),M===".*"&&(h+=-50)}u.push(h)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const h=u[d]||"",g=s[d-1];f[g.name]=h&&g.repeatable?h.split("/"):h}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const h of d)if(h.type===0)u+=h.value;else if(h.type===1){const{value:g,repeatable:v,optional:m}=h,p=g in c?c[g]:"";if(Cn(p)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const M=Cn(p)?p.join("/"):p;if(!M)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=M}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function jS(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function KS(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=jS(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(fd(i))return 1;if(fd(r))return-1}return r.length-i.length}function fd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const ZS={type:0,value:""},JS=/[a-zA-Z0-9_]/;function QS(t){if(!t)return[[]];if(t==="/")return[[ZS]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):d();break;case 4:d(),n=i;break;case 1:l==="("?n=2:JS.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function eM(t,e,n){const i=YS(QS(t.path),n),r=rt(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function tM(t,e){const n=[],i=new Map;e=pd({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,f,d){const h=!d,g=nM(u);g.aliasOf=d&&d.record;const v=pd(e,u),m=[g];if("alias"in u){const y=typeof u.alias=="string"?[u.alias]:u.alias;for(const b of y)m.push(rt({},g,{components:d?d.record.components:g.components,path:b,aliasOf:d?d.record:g}))}let p,M;for(const y of m){const{path:b}=y;if(f&&b[0]!=="/"){const P=f.record.path,E=P[P.length-1]==="/"?"":"/";y.path=f.record.path+(b&&E+b)}if(p=eM(y,f,v),d?d.alias.push(p):(M=M||p,M!==p&&M.alias.push(p),h&&u.name&&!hd(p)&&o(u.name)),g.children){const P=g.children;for(let E=0;E<P.length;E++)s(P[E],p,d&&d.children[E])}d=d||p,(p.record.components&&Object.keys(p.record.components).length||p.record.name||p.record.redirect)&&l(p)}return M?()=>{o(M)}:Is}function o(u){if(eg(u)){const f=i.get(u);f&&(i.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let f=0;for(;f<n.length&&KS(u,n[f])>=0&&(u.record.path!==n[f].record.path||!ng(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!hd(u)&&i.set(u.record.name,u)}function c(u,f){let d,h={},g,v;if("name"in u&&u.name){if(d=i.get(u.name),!d)throw Jr(1,{location:u});v=d.record.name,h=rt(dd(f.params,d.keys.filter(M=>!M.optional).concat(d.parent?d.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),u.params&&dd(u.params,d.keys.map(M=>M.name))),g=d.stringify(h)}else if(u.path!=null)g=u.path,d=n.find(M=>M.re.test(g)),d&&(h=d.parse(g),v=d.record.name);else{if(d=f.name?i.get(f.name):n.find(M=>M.re.test(f.path)),!d)throw Jr(1,{location:u,currentLocation:f});v=d.record.name,h=rt({},f.params,u.params),g=d.stringify(h)}const m=[];let p=d;for(;p;)m.unshift(p.record),p=p.parent;return{name:v,path:g,params:h,matched:m,meta:rM(m)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function dd(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function nM(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:iM(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function iM(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function hd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function rM(t){return t.reduce((e,n)=>rt(e,n.meta),{})}function pd(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function ng(t,e){return e.children.some(n=>n===t||ng(t,n))}function sM(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Ym," "),o=s.indexOf("="),a=Ws(o<0?s:s.slice(0,o)),l=o<0?null:Ws(s.slice(o+1));if(a in e){let c=e[a];Cn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function md(t){let e="";for(let n in t){const i=t[n];if(n=TS(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Cn(i)?i.map(s=>s&&yc(s)):[i&&yc(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function oM(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Cn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const aM=Symbol(""),gd=Symbol(""),ka=Symbol(""),ig=Symbol(""),Mc=Symbol("");function gs(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ei(t,e,n,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(Jr(4,{from:n,to:e})):d instanceof Error?l(d):XS(d)?l(Jr(2,{from:e,to:d})):(o&&i.enterCallbacks[r]===o&&typeof d=="function"&&o.push(d),a())},u=s(()=>t.call(i&&i.instances[r],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function _l(t,e,n,i,r=s=>s()){const s=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(lM(l)){const u=(l.__vccOpts||l)[e];u&&s.push(Ei(u,n,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const f=pS(u)?u.default:u;o.components[a]=f;const h=(f.__vccOpts||f)[e];return h&&Ei(h,n,i,o,a,r)()}))}}return s}function lM(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function vd(t){const e=gt(ka),n=gt(ig),i=ne(()=>{const l=qt(t.to);return e.resolve(l)}),r=ne(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(Zr.bind(null,u));if(d>-1)return d;const h=_d(l[c-2]);return c>1&&_d(u)===h&&f[f.length-1].path!==h?f.findIndex(Zr.bind(null,l[c-2])):d}),s=ne(()=>r.value>-1&&dM(n.params,i.value.params)),o=ne(()=>r.value>-1&&r.value===n.matched.length-1&&Jm(n.params,i.value.params));function a(l={}){return fM(l)?e[qt(t.replace)?"replace":"push"](qt(t.to)).catch(Is):Promise.resolve()}return{route:i,href:ne(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const cM=ss({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:vd,setup(t,{slots:e}){const n=$t(vd(t)),{options:i}=gt(ka),r=ne(()=>({[xd(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[xd(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Wn("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),uM=cM;function fM(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function dM(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Cn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function _d(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const xd=(t,e,n)=>t??e??n,hM=ss({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=gt(Mc),r=ne(()=>t.route||i.value),s=gt(gd,0),o=ne(()=>{let c=qt(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=ne(()=>r.value.matched[o.value]);xn(gd,ne(()=>o.value+1)),xn(aM,a),xn(Mc,r);const l=pt();return ht(()=>[l.value,a.value,t.name],([c,u,f],[d,h,g])=>{u&&(u.instances[f]=c,h&&h!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!Zr(u,h)||!d)&&(u.enterCallbacks[f]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return yd(n.default,{Component:d,route:c});const h=f.props[u],g=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=Wn(d,rt({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return yd(n.default,{Component:m,route:c})||m}}});function yd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const pM=hM;function mM(t){const e=tM(t.routes,t),n=t.parseQuery||sM,i=t.stringifyQuery||md,r=t.history,s=gs(),o=gs(),a=gs(),l=Je(di);let c=di;Or&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=gl.bind(null,B=>""+B),f=gl.bind(null,wS),d=gl.bind(null,Ws);function h(B,he){let le,U;return eg(B)?(le=e.getRecordMatcher(B),U=he):U=B,e.addRoute(U,le)}function g(B){const he=e.getRecordMatcher(B);he&&e.removeRoute(he)}function v(){return e.getRoutes().map(B=>B.record)}function m(B){return!!e.getRecordMatcher(B)}function p(B,he){if(he=rt({},he||l.value),typeof B=="string"){const R=vl(n,B,he.path),z=e.resolve({path:R.path},he),q=r.createHref(R.fullPath);return rt(R,z,{params:d(z.params),hash:Ws(R.hash),redirectedFrom:void 0,href:q})}let le;if(B.path!=null)le=rt({},B,{path:vl(n,B.path,he.path).path});else{const R=rt({},B.params);for(const z in R)R[z]==null&&delete R[z];le=rt({},B,{params:f(R)}),he.params=f(he.params)}const U=e.resolve(le,he),Pe=B.hash||"";U.params=u(d(U.params));const ye=PS(i,rt({},B,{hash:ES(Pe),path:U.path})),w=r.createHref(ye);return rt({fullPath:ye,hash:Pe,query:i===md?oM(B.query):B.query||{}},U,{redirectedFrom:void 0,href:w})}function M(B){return typeof B=="string"?vl(n,B,l.value.path):rt({},B)}function y(B,he){if(c!==B)return Jr(8,{from:he,to:B})}function b(B){return C(B)}function P(B){return b(rt(M(B),{replace:!0}))}function E(B){const he=B.matched[B.matched.length-1];if(he&&he.redirect){const{redirect:le}=he;let U=typeof le=="function"?le(B):le;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=M(U):{path:U},U.params={}),rt({query:B.query,hash:B.hash,params:U.path!=null?{}:B.params},U)}}function C(B,he){const le=c=p(B),U=l.value,Pe=B.state,ye=B.force,w=B.replace===!0,R=E(le);if(R)return C(rt(M(R),{state:typeof R=="object"?rt({},Pe,R.state):Pe,force:ye,replace:w}),he||le);const z=le;z.redirectedFrom=he;let q;return!ye&&LS(i,U,le)&&(q=Jr(16,{to:z,from:U}),ae(U,U,!0,!1)),(q?Promise.resolve(q):_(z,U)).catch($=>$n($)?$n($,2)?$:Q($):G($,z,U)).then($=>{if($){if($n($,2))return C(rt({replace:w},M($.to),{state:typeof $.to=="object"?rt({},Pe,$.to.state):Pe,force:ye}),he||z)}else $=I(z,U,!0,w,Pe);return F(z,U,$),$})}function D(B,he){const le=y(B,he);return le?Promise.reject(le):Promise.resolve()}function S(B){const he=te.values().next().value;return he&&typeof he.runWithContext=="function"?he.runWithContext(B):B()}function _(B,he){let le;const[U,Pe,ye]=gM(B,he);le=_l(U.reverse(),"beforeRouteLeave",B,he);for(const R of U)R.leaveGuards.forEach(z=>{le.push(Ei(z,B,he))});const w=D.bind(null,B,he);return le.push(w),ve(le).then(()=>{le=[];for(const R of s.list())le.push(Ei(R,B,he));return le.push(w),ve(le)}).then(()=>{le=_l(Pe,"beforeRouteUpdate",B,he);for(const R of Pe)R.updateGuards.forEach(z=>{le.push(Ei(z,B,he))});return le.push(w),ve(le)}).then(()=>{le=[];for(const R of ye)if(R.beforeEnter)if(Cn(R.beforeEnter))for(const z of R.beforeEnter)le.push(Ei(z,B,he));else le.push(Ei(R.beforeEnter,B,he));return le.push(w),ve(le)}).then(()=>(B.matched.forEach(R=>R.enterCallbacks={}),le=_l(ye,"beforeRouteEnter",B,he,S),le.push(w),ve(le))).then(()=>{le=[];for(const R of o.list())le.push(Ei(R,B,he));return le.push(w),ve(le)}).catch(R=>$n(R,8)?R:Promise.reject(R))}function F(B,he,le){a.list().forEach(U=>S(()=>U(B,he,le)))}function I(B,he,le,U,Pe){const ye=y(B,he);if(ye)return ye;const w=he===di,R=Or?history.state:{};le&&(U||w?r.replace(B.fullPath,rt({scroll:w&&R&&R.scroll},Pe)):r.push(B.fullPath,Pe)),l.value=B,ae(B,he,le,w),Q()}let L;function W(){L||(L=r.listen((B,he,le)=>{if(!ge.listening)return;const U=p(B),Pe=E(U);if(Pe){C(rt(Pe,{replace:!0}),U).catch(Is);return}c=U;const ye=l.value;Or&&kS(ad(ye.fullPath,le.delta),Ba()),_(U,ye).catch(w=>$n(w,12)?w:$n(w,2)?(C(w.to,U).then(R=>{$n(R,20)&&!le.delta&&le.type===Xs.pop&&r.go(-1,!1)}).catch(Is),Promise.reject()):(le.delta&&r.go(-le.delta,!1),G(w,U,ye))).then(w=>{w=w||I(U,ye,!1),w&&(le.delta&&!$n(w,8)?r.go(-le.delta,!1):le.type===Xs.pop&&$n(w,20)&&r.go(-1,!1)),F(U,ye,w)}).catch(Is)}))}let Z=gs(),ie=gs(),re;function G(B,he,le){Q(B);const U=ie.list();return U.length?U.forEach(Pe=>Pe(B,he,le)):console.error(B),Promise.reject(B)}function me(){return re&&l.value!==di?Promise.resolve():new Promise((B,he)=>{Z.add([B,he])})}function Q(B){return re||(re=!B,W(),Z.list().forEach(([he,le])=>B?le(B):he()),Z.reset()),B}function ae(B,he,le,U){const{scrollBehavior:Pe}=t;if(!Or||!Pe)return Promise.resolve();const ye=!le&&VS(ad(B.fullPath,0))||(U||!le)&&history.state&&history.state.scroll||null;return si().then(()=>Pe(B,he,ye)).then(w=>w&&BS(w)).catch(w=>G(w,B,he))}const _e=B=>r.go(B);let Be;const te=new Set,ge={currentRoute:l,listening:!0,addRoute:h,removeRoute:g,hasRoute:m,getRoutes:v,resolve:p,options:t,push:b,replace:P,go:_e,back:()=>_e(-1),forward:()=>_e(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:ie.add,isReady:me,install(B){const he=this;B.component("RouterLink",uM),B.component("RouterView",pM),B.config.globalProperties.$router=he,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>qt(l)}),Or&&!Be&&l.value===di&&(Be=!0,b(r.location).catch(Pe=>{}));const le={};for(const Pe in di)Object.defineProperty(le,Pe,{get:()=>l.value[Pe],enumerable:!0});B.provide(ka,he),B.provide(ig,bp(le)),B.provide(Mc,l);const U=B.unmount;te.add(B),B.unmount=function(){te.delete(B),te.size<1&&(c=di,L&&L(),L=null,l.value=di,Be=!1,re=!1),U()}}};function ve(B){return B.reduce((he,le)=>he.then(()=>S(le)),Promise.resolve())}return ge}function gM(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>Zr(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Zr(c,l))||r.push(l))}return[n,i,r]}function rg(){return gt(ka)}const Va=Re({border:[Boolean,Number,String]},"border");function za(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Vi();return{borderClasses:ne(()=>{const i=_t(t)?t.value:t.border,r=[];if(i===!0||i==="")r.push(`${e}--border`);else if(typeof i=="string"||i===0)for(const s of String(i).split(" "))r.push(`border-${s}`);return r})}}const vM=[null,"default","comfortable","compact"],cs=Re({density:{type:String,default:"default",validator:t=>vM.includes(t)}},"density");function no(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Vi();return{densityClasses:ne(()=>`${e}--density-${t.density}`)}}const Ha=Re({elevation:{type:[Number,String],validator(t){const e=parseInt(t);return!isNaN(e)&&e>=0&&e<=24}}},"elevation");function Ga(t){return{elevationClasses:ne(()=>{const n=_t(t)?t.value:t.elevation,i=[];return n==null||i.push(`elevation-${n}`),i})}}const gr=Re({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function vr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Vi();return{roundedClasses:ne(()=>{const i=_t(t)?t.value:t.rounded,r=_t(t)?t.value:t.tile,s=[];if(i===!0||i==="")s.push(`${e}--rounded`);else if(typeof i=="string"||i===0)for(const o of String(i).split(" "))s.push(`rounded-${o}`);else(r||i===!1)&&s.push("rounded-0");return s})}}const Ct=Re({tag:{type:String,default:"div"}},"tag");function gu(t){return Tm(()=>{const e=[],n={};if(t.value.background)if(gc(t.value.background)){if(n.backgroundColor=t.value.background,!t.value.text&&kx(t.value.background)){const i=kn(t.value.background);if(i.a==null||i.a===1){const r=Pm(i);n.color=r,n.caretColor=r}}}else e.push(`bg-${t.value.background}`);return t.value.text&&(gc(t.value.text)?(n.color=t.value.text,n.caretColor=t.value.text):e.push(`text-${t.value.text}`)),{colorClasses:e,colorStyles:n}})}function Qr(t,e){const n=ne(()=>({text:_t(t)?t.value:e?t[e]:null})),{colorClasses:i,colorStyles:r}=gu(n);return{textColorClasses:i,textColorStyles:r}}function Wr(t,e){const n=ne(()=>({background:_t(t)?t.value:e?t[e]:null})),{colorClasses:i,colorStyles:r}=gu(n);return{backgroundColorClasses:i,backgroundColorStyles:r}}const _M=["elevated","flat","tonal","outlined","text","plain"];function vu(t,e){return k(ot,null,[t&&k("span",{key:"overlay",class:`${e}__overlay`},null),k("span",{key:"underlay",class:`${e}__underlay`},null)])}const Wa=Re({color:String,variant:{type:String,default:"elevated",validator:t=>_M.includes(t)}},"variant");function _u(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Vi();const n=ne(()=>{const{variant:s}=qt(t);return`${e}--variant-${s}`}),{colorClasses:i,colorStyles:r}=gu(ne(()=>{const{variant:s,color:o}=qt(t);return{[["elevated","flat"].includes(s)?"background":"text"]:o}}));return{colorClasses:i,colorStyles:r,variantClasses:n}}const sg=Re({baseColor:String,divided:Boolean,...Va(),...lt(),...cs(),...Ha(),...gr(),...Ct(),...Rn(),...Wa()},"VBtnGroup"),Sd=$e()({name:"VBtnGroup",props:sg(),setup(t,e){let{slots:n}=e;const{themeClasses:i}=Pn(t),{densityClasses:r}=no(t),{borderClasses:s}=za(t),{elevationClasses:o}=Ga(t),{roundedClasses:a}=vr(t);eo({VBtn:{height:"auto",baseColor:mt(t,"baseColor"),color:mt(t,"color"),density:mt(t,"density"),flat:!0,variant:mt(t,"variant")}}),nt(()=>k(t.tag,{class:["v-btn-group",{"v-btn-group--divided":t.divided},i.value,s.value,r.value,o.value,a.value,t.class],style:t.style},n))}}),og=Re({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),ag=Re({value:null,disabled:Boolean,selectedClass:String},"group-item");function lg(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const i=Jt("useGroupItem");if(!i)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const r=Na();xn(Symbol.for(`${e.description}:id`),r);const s=gt(e,null);if(!s){if(!n)return s;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${e.description}`)}const o=mt(t,"value"),a=ne(()=>!!(s.disabled.value||t.disabled));s.register({id:r,value:o,disabled:a},i),ai(()=>{s.unregister(r)});const l=ne(()=>s.isSelected(r)),c=ne(()=>s.items.value[0].id===r),u=ne(()=>s.items.value[s.items.value.length-1].id===r),f=ne(()=>l.value&&[s.selectedClass.value,t.selectedClass]);return ht(l,d=>{i.emit("group:selected",{value:d})},{flush:"sync"}),{id:r,isSelected:l,isFirst:c,isLast:u,toggle:()=>s.select(r,!l.value),select:d=>s.select(r,d),selectedClass:f,value:o,disabled:a,group:s}}function xu(t,e){let n=!1;const i=$t([]),r=ls(t,"modelValue",[],d=>d==null?[]:cg(i,_x(d)),d=>{const h=yM(i,d);return t.multiple?h:h[0]}),s=Jt("useGroup");function o(d,h){const g=d,v=Symbol.for(`${e.description}:id`),p=Ls(v,s==null?void 0:s.vnode).indexOf(h);qt(g.value)==null&&(g.value=p,g.useIndexAsValue=!0),p>-1?i.splice(p,0,g):i.push(g)}function a(d){if(n)return;l();const h=i.findIndex(g=>g.id===d);i.splice(h,1)}function l(){const d=i.find(h=>!h.disabled);d&&t.mandatory==="force"&&!r.value.length&&(r.value=[d.id])}os(()=>{l()}),ai(()=>{n=!0}),nu(()=>{for(let d=0;d<i.length;d++)i[d].useIndexAsValue&&(i[d].value=d)});function c(d,h){const g=i.find(v=>v.id===d);if(!(h&&(g!=null&&g.disabled)))if(t.multiple){const v=r.value.slice(),m=v.findIndex(M=>M===d),p=~m;if(h=h??!p,p&&t.mandatory&&v.length<=1||!p&&t.max!=null&&v.length+1>t.max)return;m<0&&h?v.push(d):m>=0&&!h&&v.splice(m,1),r.value=v}else{const v=r.value.includes(d);if(t.mandatory&&v)return;r.value=h??!v?[d]:[]}}function u(d){if(t.multiple,r.value.length){const h=r.value[0],g=i.findIndex(p=>p.id===h);let v=(g+d)%i.length,m=i[v];for(;m.disabled&&v!==g;)v=(v+d)%i.length,m=i[v];if(m.disabled)return;r.value=[i[v].id]}else{const h=i.find(g=>!g.disabled);h&&(r.value=[h.id])}}const f={register:o,unregister:a,selected:r,select:c,disabled:mt(t,"disabled"),prev:()=>u(i.length-1),next:()=>u(1),isSelected:d=>r.value.includes(d),selectedClass:ne(()=>t.selectedClass),items:ne(()=>i),getItemIndex:d=>xM(i,d)};return xn(e,f),f}function xM(t,e){const n=cg(t,[e]);return n.length?t.findIndex(i=>i.id===n[0]):-1}function cg(t,e){const n=[];return e.forEach(i=>{const r=t.find(o=>fu(i,o.value)),s=t[i];(r==null?void 0:r.value)!=null?n.push(r.id):s!=null&&n.push(s.id)}),n}function yM(t,e){const n=[];return e.forEach(i=>{const r=t.findIndex(s=>s.id===i);if(~r){const s=t[r];n.push(s.value!=null?s.value:r)}}),n}const ug=Symbol.for("vuetify:v-btn-toggle"),SM=Re({...sg(),...og()},"VBtnToggle");$e()({name:"VBtnToggle",props:SM(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const{isSelected:i,next:r,prev:s,select:o,selected:a}=xu(t,ug);return nt(()=>{const l=Sd.filterProps(t);return k(Sd,sn({class:["v-btn-toggle",t.class]},l,{style:t.style}),{default:()=>{var c;return[(c=n.default)==null?void 0:c.call(n,{isSelected:i,next:r,prev:s,select:o,selected:a})]}})}),{next:r,prev:s,select:o}}});const MM=Re({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),zn=$e(!1)({name:"VDefaultsProvider",props:MM(),setup(t,e){let{slots:n}=e;const{defaults:i,disabled:r,reset:s,root:o,scoped:a}=$c(t);return eo(i,{reset:s,root:o,scoped:a,disabled:r}),()=>{var l;return(l=n.default)==null?void 0:l.call(n)}}}),bM=["x-small","small","default","large","x-large"],Xa=Re({size:{type:[String,Number],default:"default"}},"size");function $a(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Vi();return Tm(()=>{let n,i;return mc(bM,t.size)?n=`${e}--size-${t.size}`:t.size&&(i={width:Ye(t.size),height:Ye(t.size)}),{sizeClasses:n,sizeStyles:i}})}const EM=Re({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:wn,...lt(),...Xa(),...Ct({tag:"i"}),...Rn()},"VIcon"),Pi=$e()({name:"VIcon",props:EM(),setup(t,e){let{attrs:n,slots:i}=e;const r=pt(),{themeClasses:s}=Pn(t),{iconData:o}=rS(ne(()=>r.value||t.icon)),{sizeClasses:a}=$a(t),{textColorClasses:l,textColorStyles:c}=Qr(mt(t,"color"));return nt(()=>{var d,h;const u=(d=i.default)==null?void 0:d.call(i);u&&(r.value=(h=Em(u).filter(g=>g.type===Js&&g.children&&typeof g.children=="string")[0])==null?void 0:h.children);const f=!!(n.onClick||n.onClickOnce);return k(o.value.component,{tag:t.tag,icon:o.value.icon,class:["v-icon","notranslate",s.value,a.value,l.value,{"v-icon--clickable":f,"v-icon--disabled":t.disabled,"v-icon--start":t.start,"v-icon--end":t.end},t.class],style:[a.value?void 0:{fontSize:Ye(t.size),height:Ye(t.size),width:Ye(t.size)},c.value,t.style],role:f?"button":void 0,"aria-hidden":!f,tabindex:f?t.disabled?-1:0:void 0},{default:()=>[u]})}),{}}});function fg(t,e){const n=pt(),i=Je(!1);if(uu){const r=new IntersectionObserver(s=>{i.value=!!s.find(o=>o.isIntersecting)},e);ai(()=>{r.disconnect()}),ht(n,(s,o)=>{o&&(r.unobserve(o),i.value=!1),s&&r.observe(s)},{flush:"post"})}return{intersectionRef:n,isIntersecting:i}}const TM=Re({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...lt(),...Xa(),...Ct({tag:"div"}),...Rn()},"VProgressCircular"),AM=$e()({name:"VProgressCircular",props:TM(),setup(t,e){let{slots:n}=e;const i=20,r=2*Math.PI*i,s=pt(),{themeClasses:o}=Pn(t),{sizeClasses:a,sizeStyles:l}=$a(t),{textColorClasses:c,textColorStyles:u}=Qr(mt(t,"color")),{textColorClasses:f,textColorStyles:d}=Qr(mt(t,"bgColor")),{intersectionRef:h,isIntersecting:g}=fg(),{resizeRef:v,contentRect:m}=ma(),p=ne(()=>Math.max(0,Math.min(100,parseFloat(t.modelValue)))),M=ne(()=>Number(t.width)),y=ne(()=>l.value?Number(t.size):m.value?m.value.width:Math.max(M.value,32)),b=ne(()=>i/(1-M.value/y.value)*2),P=ne(()=>M.value/y.value*b.value),E=ne(()=>Ye((100-p.value)/100*r));return mr(()=>{h.value=s.value,v.value=s.value}),nt(()=>k(t.tag,{ref:s,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!t.indeterminate,"v-progress-circular--visible":g.value,"v-progress-circular--disable-shrink":t.indeterminate==="disable-shrink"},o.value,a.value,c.value,t.class],style:[l.value,u.value,t.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":t.indeterminate?void 0:p.value},{default:()=>[k("svg",{style:{transform:`rotate(calc(-90deg + ${Number(t.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${b.value} ${b.value}`},[k("circle",{class:["v-progress-circular__underlay",f.value],style:d.value,fill:"transparent",cx:"50%",cy:"50%",r:i,"stroke-width":P.value,"stroke-dasharray":r,"stroke-dashoffset":0},null),k("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:i,"stroke-width":P.value,"stroke-dasharray":r,"stroke-dashoffset":E.value},null)]),n.default&&k("div",{class:"v-progress-circular__content"},[n.default({value:p.value})])]})),{}}}),io=Re({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function ro(t){return{dimensionStyles:ne(()=>({height:Ye(t.height),maxHeight:Ye(t.maxHeight),maxWidth:Ye(t.maxWidth),minHeight:Ye(t.minHeight),minWidth:Ye(t.minWidth),width:Ye(t.width)}))}}const Md={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},yu=Re({location:String},"location");function Su(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:i}=zi();return{locationStyles:ne(()=>{if(!t.location)return{};const{side:s,align:o}=Ex(t.location.split(" ").length>1?t.location:`${t.location} center`,i.value);function a(c){return n?n(c):0}const l={};return s!=="center"&&(e?l[Md[s]]=`calc(100% - ${a(s)}px)`:l[s]=0),o!=="center"?e?l[Md[o]]=`calc(100% - ${a(o)}px)`:l[o]=0:(s==="center"?l.top=l.left="50%":l[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",l.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),l})}}const wM=Re({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...lt(),...yu({location:"top"}),...gr(),...Ct(),...Rn()},"VProgressLinear"),CM=$e()({name:"VProgressLinear",props:wM(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const i=ls(t,"modelValue"),{isRtl:r,rtlClasses:s}=zi(),{themeClasses:o}=Pn(t),{locationStyles:a}=Su(t),{textColorClasses:l,textColorStyles:c}=Qr(t,"color"),{backgroundColorClasses:u,backgroundColorStyles:f}=Wr(ne(()=>t.bgColor||t.color)),{backgroundColorClasses:d,backgroundColorStyles:h}=Wr(ne(()=>t.bufferColor||t.bgColor||t.color)),{backgroundColorClasses:g,backgroundColorStyles:v}=Wr(t,"color"),{roundedClasses:m}=vr(t),{intersectionRef:p,isIntersecting:M}=fg(),y=ne(()=>parseFloat(t.max)),b=ne(()=>parseFloat(t.height)),P=ne(()=>zs(parseFloat(t.bufferValue)/y.value*100,0,100)),E=ne(()=>zs(parseFloat(i.value)/y.value*100,0,100)),C=ne(()=>r.value!==t.reverse),D=ne(()=>t.indeterminate?"fade-transition":"slide-x-transition");function S(_){if(!p.value)return;const{left:F,right:I,width:L}=p.value.getBoundingClientRect(),W=C.value?L-_.clientX+(I-L):_.clientX-F;i.value=Math.round(W/L*y.value)}return nt(()=>k(t.tag,{ref:p,class:["v-progress-linear",{"v-progress-linear--absolute":t.absolute,"v-progress-linear--active":t.active&&M.value,"v-progress-linear--reverse":C.value,"v-progress-linear--rounded":t.rounded,"v-progress-linear--rounded-bar":t.roundedBar,"v-progress-linear--striped":t.striped},m.value,o.value,s.value,t.class],style:[{bottom:t.location==="bottom"?0:void 0,top:t.location==="top"?0:void 0,height:t.active?Ye(b.value):0,"--v-progress-linear-height":Ye(b.value),...t.absolute?a.value:{}},t.style],role:"progressbar","aria-hidden":t.active?"false":"true","aria-valuemin":"0","aria-valuemax":t.max,"aria-valuenow":t.indeterminate?void 0:E.value,onClick:t.clickable&&S},{default:()=>[t.stream&&k("div",{key:"stream",class:["v-progress-linear__stream",l.value],style:{...c.value,[C.value?"left":"right"]:Ye(-b.value),borderTop:`${Ye(b.value/2)} dotted`,opacity:parseFloat(t.bufferOpacity),top:`calc(50% - ${Ye(b.value/4)})`,width:Ye(100-P.value,"%"),"--v-progress-linear-stream-to":Ye(b.value*(C.value?1:-1))}},null),k("div",{class:["v-progress-linear__background",u.value],style:[f.value,{opacity:parseFloat(t.bgOpacity),width:t.stream?0:void 0}]},null),k("div",{class:["v-progress-linear__buffer",d.value],style:[h.value,{opacity:parseFloat(t.bufferOpacity),width:Ye(P.value,"%")}]},null),k(as,{name:D.value},{default:()=>[t.indeterminate?k("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(_=>k("div",{key:_,class:["v-progress-linear__indeterminate",_,g.value],style:v.value},null))]):k("div",{class:["v-progress-linear__determinate",g.value],style:[v.value,{width:Ye(E.value,"%")}]},null)]}),n.default&&k("div",{class:"v-progress-linear__content"},[n.default({value:E.value,buffer:P.value})])]})),{}}}),dg=Re({loading:[Boolean,String]},"loader");function hg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Vi();return{loaderClasses:ne(()=>({[`${e}--loading`]:t.loading}))}}function RM(t,e){var i;let{slots:n}=e;return k("div",{class:`${t.name}__loader`},[((i=n.default)==null?void 0:i.call(n,{color:t.color,isActive:t.active}))||k(CM,{absolute:t.absolute,active:t.active,color:t.color,height:"2",indeterminate:!0},null)])}const PM=["static","relative","fixed","absolute","sticky"],pg=Re({position:{type:String,validator:t=>PM.includes(t)}},"position");function mg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Vi();return{positionClasses:ne(()=>t.position?`${e}--${t.position}`:void 0)}}function LM(){const t=Jt("useRoute");return ne(()=>{var e;return(e=t==null?void 0:t.proxy)==null?void 0:e.$route})}function gg(t,e){var c,u;const n=Op("RouterLink"),i=ne(()=>!!(t.href||t.to)),r=ne(()=>(i==null?void 0:i.value)||If(e,"click")||If(t,"click"));if(typeof n=="string"||!("useLink"in n))return{isLink:i,isClickable:r,href:mt(t,"href")};const s=ne(()=>({...t,to:mt(()=>t.to||"")})),o=n.useLink(s.value),a=ne(()=>t.to?o:void 0),l=LM();return{isLink:i,isClickable:r,route:(c=a.value)==null?void 0:c.route,navigate:(u=a.value)==null?void 0:u.navigate,isActive:ne(()=>{var f,d,h;return a.value?t.exact?l.value?((h=a.value.isExactActive)==null?void 0:h.value)&&fu(a.value.route.value.query,l.value.query):((d=a.value.isExactActive)==null?void 0:d.value)??!1:((f=a.value.isActive)==null?void 0:f.value)??!1:!1}),href:ne(()=>{var f;return t.to?(f=a.value)==null?void 0:f.route.value.href:t.href})}}const vg=Re({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");function IM(t,e){ht(()=>{var n;return(n=t.isActive)==null?void 0:n.value},n=>{t.isLink.value&&n&&e&&si(()=>{e(!0)})},{immediate:!0})}const bc=Symbol("rippleStop"),DM=80;function bd(t,e){t.style.transform=e,t.style.webkitTransform=e}function Ec(t){return t.constructor.name==="TouchEvent"}function _g(t){return t.constructor.name==="KeyboardEvent"}const UM=function(t,e){var f;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=0,r=0;if(!_g(t)){const d=e.getBoundingClientRect(),h=Ec(t)?t.touches[t.touches.length-1]:t;i=h.clientX-d.left,r=h.clientY-d.top}let s=0,o=.3;(f=e._ripple)!=null&&f.circle?(o=.15,s=e.clientWidth/2,s=n.center?s:s+Math.sqrt((i-s)**2+(r-s)**2)/4):s=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const a=`${(e.clientWidth-s*2)/2}px`,l=`${(e.clientHeight-s*2)/2}px`,c=n.center?a:`${i-s}px`,u=n.center?l:`${r-s}px`;return{radius:s,scale:o,x:c,y:u,centerX:a,centerY:l}},va={show(t,e){var h;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((h=e==null?void 0:e._ripple)!=null&&h.enabled))return;const i=document.createElement("span"),r=document.createElement("span");i.appendChild(r),i.className="v-ripple__container",n.class&&(i.className+=` ${n.class}`);const{radius:s,scale:o,x:a,y:l,centerX:c,centerY:u}=UM(t,e,n),f=`${s*2}px`;r.className="v-ripple__animation",r.style.width=f,r.style.height=f,e.appendChild(i);const d=window.getComputedStyle(e);d&&d.position==="static"&&(e.style.position="relative",e.dataset.previousPosition="static"),r.classList.add("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--visible"),bd(r,`translate(${a}, ${l}) scale3d(${o},${o},${o})`),r.dataset.activated=String(performance.now()),setTimeout(()=>{r.classList.remove("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--in"),bd(r,`translate(${c}, ${u}) scale3d(1,1,1)`)},0)},hide(t){var s;if(!((s=t==null?void 0:t._ripple)!=null&&s.enabled))return;const e=t.getElementsByClassName("v-ripple__animation");if(e.length===0)return;const n=e[e.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const i=performance.now()-Number(n.dataset.activated),r=Math.max(250-i,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var a;t.getElementsByClassName("v-ripple__animation").length===1&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),((a=n.parentNode)==null?void 0:a.parentNode)===t&&t.removeChild(n.parentNode)},300)},r)}};function xg(t){return typeof t>"u"||!!t}function $s(t){const e={},n=t.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||t[bc])){if(t[bc]=!0,Ec(t))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(e.center=n._ripple.centered||_g(t),n._ripple.class&&(e.class=n._ripple.class),Ec(t)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{va.show(t,n,e)},n._ripple.showTimer=window.setTimeout(()=>{var i;(i=n==null?void 0:n._ripple)!=null&&i.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},DM)}else va.show(t,n,e)}}function Ed(t){t[bc]=!0}function rn(t){const e=t.currentTarget;if(e!=null&&e._ripple){if(window.clearTimeout(e._ripple.showTimer),t.type==="touchend"&&e._ripple.showTimerCommit){e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,e._ripple.showTimer=window.setTimeout(()=>{rn(t)});return}window.setTimeout(()=>{e._ripple&&(e._ripple.touched=!1)}),va.hide(e)}}function yg(t){const e=t.currentTarget;e!=null&&e._ripple&&(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let qs=!1;function Sg(t){!qs&&(t.keyCode===Rf.enter||t.keyCode===Rf.space)&&(qs=!0,$s(t))}function Mg(t){qs=!1,rn(t)}function bg(t){qs&&(qs=!1,rn(t))}function Eg(t,e,n){const{value:i,modifiers:r}=e,s=xg(i);if(s||va.hide(t),t._ripple=t._ripple??{},t._ripple.enabled=s,t._ripple.centered=r.center,t._ripple.circle=r.circle,ua(i)&&i.class&&(t._ripple.class=i.class),s&&!n){if(r.stop){t.addEventListener("touchstart",Ed,{passive:!0}),t.addEventListener("mousedown",Ed);return}t.addEventListener("touchstart",$s,{passive:!0}),t.addEventListener("touchend",rn,{passive:!0}),t.addEventListener("touchmove",yg,{passive:!0}),t.addEventListener("touchcancel",rn),t.addEventListener("mousedown",$s),t.addEventListener("mouseup",rn),t.addEventListener("mouseleave",rn),t.addEventListener("keydown",Sg),t.addEventListener("keyup",Mg),t.addEventListener("blur",bg),t.addEventListener("dragstart",rn,{passive:!0})}else!s&&n&&Tg(t)}function Tg(t){t.removeEventListener("mousedown",$s),t.removeEventListener("touchstart",$s),t.removeEventListener("touchend",rn),t.removeEventListener("touchmove",yg),t.removeEventListener("touchcancel",rn),t.removeEventListener("mouseup",rn),t.removeEventListener("mouseleave",rn),t.removeEventListener("keydown",Sg),t.removeEventListener("keyup",Mg),t.removeEventListener("dragstart",rn),t.removeEventListener("blur",bg)}function NM(t,e){Eg(t,e,!1)}function FM(t){delete t._ripple,Tg(t)}function OM(t,e){if(e.value===e.oldValue)return;const n=xg(e.oldValue);Eg(t,e,n)}const Ag={mounted:NM,unmounted:FM,updated:OM},wg=Re({active:{type:Boolean,default:void 0},baseColor:String,symbol:{type:null,default:ug},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:wn,appendIcon:wn,block:Boolean,readonly:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...Va(),...lt(),...cs(),...io(),...Ha(),...ag(),...dg(),...yu(),...pg(),...gr(),...vg(),...Xa(),...Ct({tag:"button"}),...Rn(),...Wa({variant:"elevated"})},"VBtn"),dr=$e()({name:"VBtn",props:wg(),emits:{"group:selected":t=>!0},setup(t,e){let{attrs:n,slots:i}=e;const{themeClasses:r}=Pn(t),{borderClasses:s}=za(t),{densityClasses:o}=no(t),{dimensionStyles:a}=ro(t),{elevationClasses:l}=Ga(t),{loaderClasses:c}=hg(t),{locationStyles:u}=Su(t),{positionClasses:f}=mg(t),{roundedClasses:d}=vr(t),{sizeClasses:h,sizeStyles:g}=$a(t),v=lg(t,t.symbol,!1),m=gg(t,n),p=ne(()=>{var _;return t.active!==void 0?t.active:m.isLink.value?(_=m.isActive)==null?void 0:_.value:v==null?void 0:v.isSelected.value}),M=ne(()=>{var F,I;return{color:(v==null?void 0:v.isSelected.value)&&(!m.isLink.value||((F=m.isActive)==null?void 0:F.value))||!v||((I=m.isActive)==null?void 0:I.value)?t.color??t.baseColor:t.baseColor,variant:t.variant}}),{colorClasses:y,colorStyles:b,variantClasses:P}=_u(M),E=ne(()=>(v==null?void 0:v.disabled.value)||t.disabled),C=ne(()=>t.variant==="elevated"&&!(t.disabled||t.flat||t.border)),D=ne(()=>{if(!(t.value===void 0||typeof t.value=="symbol"))return Object(t.value)===t.value?JSON.stringify(t.value,null,0):t.value});function S(_){var F;E.value||m.isLink.value&&(_.metaKey||_.ctrlKey||_.shiftKey||_.button!==0||n.target==="_blank")||((F=m.navigate)==null||F.call(m,_),v==null||v.toggle())}return IM(m,v==null?void 0:v.select),nt(()=>{const _=m.isLink.value?"a":t.tag,F=!!(t.prependIcon||i.prepend),I=!!(t.appendIcon||i.append),L=!!(t.icon&&t.icon!==!0);return fr(k(_,{type:_==="a"?void 0:"button",class:["v-btn",v==null?void 0:v.selectedClass.value,{"v-btn--active":p.value,"v-btn--block":t.block,"v-btn--disabled":E.value,"v-btn--elevated":C.value,"v-btn--flat":t.flat,"v-btn--icon":!!t.icon,"v-btn--loading":t.loading,"v-btn--readonly":t.readonly,"v-btn--slim":t.slim,"v-btn--stacked":t.stacked},r.value,s.value,y.value,o.value,l.value,c.value,f.value,d.value,h.value,P.value,t.class],style:[b.value,a.value,u.value,g.value,t.style],"aria-busy":t.loading?!0:void 0,disabled:E.value||void 0,href:m.href.value,tabindex:t.loading||t.readonly?-1:void 0,onClick:S,value:D.value},{default:()=>{var W;return[vu(!0,"v-btn"),!t.icon&&F&&k("span",{key:"prepend",class:"v-btn__prepend"},[i.prepend?k(zn,{key:"prepend-defaults",disabled:!t.prependIcon,defaults:{VIcon:{icon:t.prependIcon}}},i.prepend):k(Pi,{key:"prepend-icon",icon:t.prependIcon},null)]),k("span",{class:"v-btn__content","data-no-activator":""},[!i.default&&L?k(Pi,{key:"content-icon",icon:t.icon},null):k(zn,{key:"content-defaults",disabled:!L,defaults:{VIcon:{icon:t.icon}}},{default:()=>{var Z;return[((Z=i.default)==null?void 0:Z.call(i))??t.text]}})]),!t.icon&&I&&k("span",{key:"append",class:"v-btn__append"},[i.append?k(zn,{key:"append-defaults",disabled:!t.appendIcon,defaults:{VIcon:{icon:t.appendIcon}}},i.append):k(Pi,{key:"append-icon",icon:t.appendIcon},null)]),!!t.loading&&k("span",{key:"loader",class:"v-btn__loader"},[((W=i.loader)==null?void 0:W.call(i))??k(AM,{color:typeof t.loading=="boolean"?void 0:t.loading,indeterminate:!0,width:"2"},null)])]}}),[[Ag,!E.value&&!!t.ripple,"",{center:!!t.icon}]])}),{group:v}}}),Cg=$e()({name:"VCardActions",props:lt(),setup(t,e){let{slots:n}=e;return eo({VBtn:{slim:!0,variant:"text"}}),nt(()=>{var i;return k("div",{class:["v-card-actions",t.class],style:t.style},[(i=n.default)==null?void 0:i.call(n)])}),{}}}),BM=Re({opacity:[Number,String],...lt(),...Ct()},"VCardSubtitle"),kM=$e()({name:"VCardSubtitle",props:BM(),setup(t,e){let{slots:n}=e;return nt(()=>k(t.tag,{class:["v-card-subtitle",t.class],style:[{"--v-card-subtitle-opacity":t.opacity},t.style]},n)),{}}}),Rg=Lm("v-card-title");function VM(t){return{aspectStyles:ne(()=>{const e=Number(t.aspectRatio);return e?{paddingBottom:String(1/e*100)+"%"}:void 0})}}const Pg=Re({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...lt(),...io()},"VResponsive"),Td=$e()({name:"VResponsive",props:Pg(),setup(t,e){let{slots:n}=e;const{aspectStyles:i}=VM(t),{dimensionStyles:r}=ro(t);return nt(()=>{var s;return k("div",{class:["v-responsive",{"v-responsive--inline":t.inline},t.class],style:[r.value,t.style]},[k("div",{class:"v-responsive__sizer",style:i.value},null),(s=n.additional)==null?void 0:s.call(n),n.default&&k("div",{class:["v-responsive__content",t.contentClass]},[n.default()])])}),{}}}),zM=Re({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:t=>t!==!0}},"transition"),bs=(t,e)=>{let{slots:n}=e;const{transition:i,disabled:r,group:s,...o}=t,{component:a=s?cu:as,...l}=typeof i=="object"?i:{};return Wn(a,sn(typeof i=="string"?{name:r?"":i}:l,typeof i=="string"?{}:Object.fromEntries(Object.entries({disabled:r,group:s}).filter(c=>{let[u,f]=c;return f!==void 0})),o),n)};function HM(t,e){if(!uu)return;const n=e.modifiers||{},i=e.value,{handler:r,options:s}=typeof i=="object"?i:{handler:i,options:{}},o=new IntersectionObserver(function(){var f;let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=arguments.length>1?arguments[1]:void 0;const c=(f=t._observe)==null?void 0:f[e.instance.$.uid];if(!c)return;const u=a.some(d=>d.isIntersecting);r&&(!n.quiet||c.init)&&(!n.once||u||c.init)&&r(u,a,l),u&&n.once?Lg(t,e):c.init=!0},s);t._observe=Object(t._observe),t._observe[e.instance.$.uid]={init:!1,observer:o},o.observe(t)}function Lg(t,e){var i;const n=(i=t._observe)==null?void 0:i[e.instance.$.uid];n&&(n.observer.unobserve(t),delete t._observe[e.instance.$.uid])}const GM={mounted:HM,unmounted:Lg},WM=Re({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...Pg(),...lt(),...gr(),...zM()},"VImg"),qa=$e()({name:"VImg",directives:{intersect:GM},props:WM(),emits:{loadstart:t=>!0,load:t=>!0,error:t=>!0},setup(t,e){let{emit:n,slots:i}=e;const{backgroundColorClasses:r,backgroundColorStyles:s}=Wr(mt(t,"color")),{roundedClasses:o}=vr(t),a=Jt("VImg"),l=Je(""),c=pt(),u=Je(t.eager?"loading":"idle"),f=Je(),d=Je(),h=ne(()=>t.src&&typeof t.src=="object"?{src:t.src.src,srcset:t.srcset||t.src.srcset,lazySrc:t.lazySrc||t.src.lazySrc,aspect:Number(t.aspectRatio||t.src.aspect||0)}:{src:t.src,srcset:t.srcset,lazySrc:t.lazySrc,aspect:Number(t.aspectRatio||0)}),g=ne(()=>h.value.aspect||f.value/d.value||0);ht(()=>t.src,()=>{v(u.value!=="idle")}),ht(g,(I,L)=>{!I&&L&&c.value&&b(c.value)}),$p(()=>v());function v(I){if(!(t.eager&&I)&&!(uu&&!I&&!t.eager)){if(u.value="loading",h.value.lazySrc){const L=new Image;L.src=h.value.lazySrc,b(L,null)}h.value.src&&si(()=>{var L;n("loadstart",((L=c.value)==null?void 0:L.currentSrc)||h.value.src),setTimeout(()=>{var W;if(!a.isUnmounted)if((W=c.value)!=null&&W.complete){if(c.value.naturalWidth||p(),u.value==="error")return;g.value||b(c.value,null),u.value==="loading"&&m()}else g.value||b(c.value),M()})})}}function m(){var I;a.isUnmounted||(M(),b(c.value),u.value="loaded",n("load",((I=c.value)==null?void 0:I.currentSrc)||h.value.src))}function p(){var I;a.isUnmounted||(u.value="error",n("error",((I=c.value)==null?void 0:I.currentSrc)||h.value.src))}function M(){const I=c.value;I&&(l.value=I.currentSrc||I.src)}let y=-1;ai(()=>{clearTimeout(y)});function b(I){let L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const W=()=>{if(clearTimeout(y),a.isUnmounted)return;const{naturalHeight:Z,naturalWidth:ie}=I;Z||ie?(f.value=ie,d.value=Z):!I.complete&&u.value==="loading"&&L!=null?y=window.setTimeout(W,L):(I.currentSrc.endsWith(".svg")||I.currentSrc.startsWith("data:image/svg+xml"))&&(f.value=1,d.value=1)};W()}const P=ne(()=>({"v-img__img--cover":t.cover,"v-img__img--contain":!t.cover})),E=()=>{var W;if(!h.value.src||u.value==="idle")return null;const I=k("img",{class:["v-img__img",P.value],style:{objectPosition:t.position},src:h.value.src,srcset:h.value.srcset,alt:t.alt,crossorigin:t.crossorigin,referrerpolicy:t.referrerpolicy,draggable:t.draggable,sizes:t.sizes,ref:c,onLoad:m,onError:p},null),L=(W=i.sources)==null?void 0:W.call(i);return k(bs,{transition:t.transition,appear:!0},{default:()=>[fr(L?k("picture",{class:"v-img__picture"},[L,I]):I,[[lu,u.value==="loaded"]])]})},C=()=>k(bs,{transition:t.transition},{default:()=>[h.value.lazySrc&&u.value!=="loaded"&&k("img",{class:["v-img__img","v-img__img--preload",P.value],style:{objectPosition:t.position},src:h.value.lazySrc,alt:t.alt,crossorigin:t.crossorigin,referrerpolicy:t.referrerpolicy,draggable:t.draggable},null)]}),D=()=>i.placeholder?k(bs,{transition:t.transition,appear:!0},{default:()=>[(u.value==="loading"||u.value==="error"&&!i.error)&&k("div",{class:"v-img__placeholder"},[i.placeholder()])]}):null,S=()=>i.error?k(bs,{transition:t.transition,appear:!0},{default:()=>[u.value==="error"&&k("div",{class:"v-img__error"},[i.error()])]}):null,_=()=>t.gradient?k("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${t.gradient})`}},null):null,F=Je(!1);{const I=ht(g,L=>{L&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{F.value=!0})}),I())})}return nt(()=>{const I=Td.filterProps(t);return fr(k(Td,sn({class:["v-img",{"v-img--booting":!F.value},r.value,o.value,t.class],style:[{width:Ye(t.width==="auto"?f.value:t.width)},s.value,t.style]},I,{aspectRatio:g.value,"aria-label":t.alt,role:t.alt?"img":void 0}),{additional:()=>k(ot,null,[k(E,null,null),k(C,null,null),k(_,null,null),k(D,null,null),k(S,null,null)]),default:i.default}),[[Zc("intersect"),{handler:v,options:t.options},null,{once:!0}]])}),{currentSrc:l,image:c,state:u,naturalWidth:f,naturalHeight:d}}}),XM=Re({start:Boolean,end:Boolean,icon:wn,image:String,text:String,...lt(),...cs(),...gr(),...Xa(),...Ct(),...Rn(),...Wa({variant:"flat"})},"VAvatar"),Ad=$e()({name:"VAvatar",props:XM(),setup(t,e){let{slots:n}=e;const{themeClasses:i}=Pn(t),{colorClasses:r,colorStyles:s,variantClasses:o}=_u(t),{densityClasses:a}=no(t),{roundedClasses:l}=vr(t),{sizeClasses:c,sizeStyles:u}=$a(t);return nt(()=>k(t.tag,{class:["v-avatar",{"v-avatar--start":t.start,"v-avatar--end":t.end},i.value,r.value,a.value,l.value,c.value,o.value,t.class],style:[s.value,u.value,t.style]},{default:()=>[n.default?k(zn,{key:"content-defaults",defaults:{VImg:{cover:!0,image:t.image},VIcon:{icon:t.icon}}},{default:()=>[n.default()]}):t.image?k(qa,{key:"image",src:t.image,alt:"",cover:!0},null):t.icon?k(Pi,{key:"icon",icon:t.icon},null):t.text,vu(!1,"v-avatar")]})),{}}}),$M=Re({appendAvatar:String,appendIcon:wn,prependAvatar:String,prependIcon:wn,subtitle:[String,Number],title:[String,Number],...lt(),...cs()},"VCardItem"),qM=$e()({name:"VCardItem",props:$M(),setup(t,e){let{slots:n}=e;return nt(()=>{var c;const i=!!(t.prependAvatar||t.prependIcon),r=!!(i||n.prepend),s=!!(t.appendAvatar||t.appendIcon),o=!!(s||n.append),a=!!(t.title!=null||n.title),l=!!(t.subtitle!=null||n.subtitle);return k("div",{class:["v-card-item",t.class],style:t.style},[r&&k("div",{key:"prepend",class:"v-card-item__prepend"},[n.prepend?k(zn,{key:"prepend-defaults",disabled:!i,defaults:{VAvatar:{density:t.density,image:t.prependAvatar},VIcon:{density:t.density,icon:t.prependIcon}}},n.prepend):k(ot,null,[t.prependAvatar&&k(Ad,{key:"prepend-avatar",density:t.density,image:t.prependAvatar},null),t.prependIcon&&k(Pi,{key:"prepend-icon",density:t.density,icon:t.prependIcon},null)])]),k("div",{class:"v-card-item__content"},[a&&k(Rg,{key:"title"},{default:()=>{var u;return[((u=n.title)==null?void 0:u.call(n))??t.title]}}),l&&k(kM,{key:"subtitle"},{default:()=>{var u;return[((u=n.subtitle)==null?void 0:u.call(n))??t.subtitle]}}),(c=n.default)==null?void 0:c.call(n)]),o&&k("div",{key:"append",class:"v-card-item__append"},[n.append?k(zn,{key:"append-defaults",disabled:!s,defaults:{VAvatar:{density:t.density,image:t.appendAvatar},VIcon:{density:t.density,icon:t.appendIcon}}},n.append):k(ot,null,[t.appendIcon&&k(Pi,{key:"append-icon",density:t.density,icon:t.appendIcon},null),t.appendAvatar&&k(Ad,{key:"append-avatar",density:t.density,image:t.appendAvatar},null)])])])}),{}}}),YM=Re({opacity:[Number,String],...lt(),...Ct()},"VCardText"),Tc=$e()({name:"VCardText",props:YM(),setup(t,e){let{slots:n}=e;return nt(()=>k(t.tag,{class:["v-card-text",t.class],style:[{"--v-card-text-opacity":t.opacity},t.style]},n)),{}}}),jM=Re({appendAvatar:String,appendIcon:wn,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:wn,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...Va(),...lt(),...cs(),...io(),...Ha(),...dg(),...yu(),...pg(),...gr(),...vg(),...Ct(),...Rn(),...Wa({variant:"elevated"})},"VCard"),KM=$e()({name:"VCard",directives:{Ripple:Ag},props:jM(),setup(t,e){let{attrs:n,slots:i}=e;const{themeClasses:r}=Pn(t),{borderClasses:s}=za(t),{colorClasses:o,colorStyles:a,variantClasses:l}=_u(t),{densityClasses:c}=no(t),{dimensionStyles:u}=ro(t),{elevationClasses:f}=Ga(t),{loaderClasses:d}=hg(t),{locationStyles:h}=Su(t),{positionClasses:g}=mg(t),{roundedClasses:v}=vr(t),m=gg(t,n),p=ne(()=>t.link!==!1&&m.isLink.value),M=ne(()=>!t.disabled&&t.link!==!1&&(t.link||m.isClickable.value));return nt(()=>{const y=p.value?"a":t.tag,b=!!(i.title||t.title!=null),P=!!(i.subtitle||t.subtitle!=null),E=b||P,C=!!(i.append||t.appendAvatar||t.appendIcon),D=!!(i.prepend||t.prependAvatar||t.prependIcon),S=!!(i.image||t.image),_=E||D||C,F=!!(i.text||t.text!=null);return fr(k(y,{class:["v-card",{"v-card--disabled":t.disabled,"v-card--flat":t.flat,"v-card--hover":t.hover&&!(t.disabled||t.flat),"v-card--link":M.value},r.value,s.value,o.value,c.value,f.value,d.value,g.value,v.value,l.value,t.class],style:[a.value,u.value,h.value,t.style],href:m.href.value,onClick:M.value&&m.navigate,tabindex:t.disabled?-1:void 0},{default:()=>{var I;return[S&&k("div",{key:"image",class:"v-card__image"},[i.image?k(zn,{key:"image-defaults",disabled:!t.image,defaults:{VImg:{cover:!0,src:t.image}}},i.image):k(qa,{key:"image-img",cover:!0,src:t.image},null)]),k(RM,{name:"v-card",active:!!t.loading,color:typeof t.loading=="boolean"?void 0:t.loading},{default:i.loader}),_&&k(qM,{key:"item",prependAvatar:t.prependAvatar,prependIcon:t.prependIcon,title:t.title,subtitle:t.subtitle,appendAvatar:t.appendAvatar,appendIcon:t.appendIcon},{default:i.item,prepend:i.prepend,title:i.title,subtitle:i.subtitle,append:i.append}),F&&k(Tc,{key:"text"},{default:()=>{var L;return[((L=i.text)==null?void 0:L.call(i))??t.text]}}),(I=i.default)==null?void 0:I.call(i),i.actions&&k(Cg,null,{default:i.actions}),vu(M.value,"v-card")]}}),[[Zc("ripple"),M.value&&t.ripple]])}),{}}}),ZM=Re({color:String,inset:Boolean,length:[Number,String],opacity:[Number,String],thickness:[Number,String],vertical:Boolean,...lt(),...Rn()},"VDivider"),JM=$e()({name:"VDivider",props:ZM(),setup(t,e){let{attrs:n,slots:i}=e;const{themeClasses:r}=Pn(t),{textColorClasses:s,textColorStyles:o}=Qr(mt(t,"color")),a=ne(()=>{const l={};return t.length&&(l[t.vertical?"maxHeight":"maxWidth"]=Ye(t.length)),t.thickness&&(l[t.vertical?"borderRightWidth":"borderTopWidth"]=Ye(t.thickness)),l});return nt(()=>{const l=k("hr",{class:[{"v-divider":!0,"v-divider--inset":t.inset,"v-divider--vertical":t.vertical},r.value,s.value,t.class],style:[a.value,o.value,{"--v-border-opacity":t.opacity},t.style],"aria-orientation":!n.role||n.role==="separator"?t.vertical?"vertical":"horizontal":void 0,role:`${n.role||"separator"}`},null);return i.default?k("div",{class:["v-divider__wrapper",{"v-divider__wrapper--vertical":t.vertical,"v-divider__wrapper--inset":t.inset}]},[l,k("div",{class:"v-divider__content"},[i.default()]),l]):l}),{}}}),QM=Re({fluid:{type:Boolean,default:!1},...lt(),...Ct()},"VContainer"),eb=$e()({name:"VContainer",props:QM(),setup(t,e){let{slots:n}=e;const{rtlClasses:i}=zi();return nt(()=>k(t.tag,{class:["v-container",{"v-container--fluid":t.fluid},i.value,t.class],style:t.style},n)),{}}}),Ig=Fa.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}),Dg=Fa.reduce((t,e)=>{const n="offset"+ri(e);return t[n]={type:[String,Number],default:null},t},{}),Ug=Fa.reduce((t,e)=>{const n="order"+ri(e);return t[n]={type:[String,Number],default:null},t},{}),wd={col:Object.keys(Ig),offset:Object.keys(Dg),order:Object.keys(Ug)};function tb(t,e,n){let i=t;if(!(n==null||n===!1)){if(e){const r=e.replace(t,"");i+=`-${r}`}return t==="col"&&(i="v-"+i),t==="col"&&(n===""||n===!0)||(i+=`-${n}`),i.toLowerCase()}}const nb=["auto","start","end","center","baseline","stretch"],ib=Re({cols:{type:[Boolean,String,Number],default:!1},...Ig,offset:{type:[String,Number],default:null},...Dg,order:{type:[String,Number],default:null},...Ug,alignSelf:{type:String,default:null,validator:t=>nb.includes(t)},...lt(),...Ct()},"VCol"),rb=$e()({name:"VCol",props:ib(),setup(t,e){let{slots:n}=e;const i=ne(()=>{const r=[];let s;for(s in wd)wd[s].forEach(a=>{const l=t[a],c=tb(s,a,l);c&&r.push(c)});const o=r.some(a=>a.startsWith("v-col-"));return r.push({"v-col":!o||!t.cols,[`v-col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),r});return()=>{var r;return Wn(t.tag,{class:[i.value,t.class],style:t.style},(r=n.default)==null?void 0:r.call(n))}}}),Mu=["start","end","center"],Ng=["space-between","space-around","space-evenly"];function bu(t,e){return Fa.reduce((n,i)=>{const r=t+ri(i);return n[r]=e(),n},{})}const sb=[...Mu,"baseline","stretch"],Fg=t=>sb.includes(t),Og=bu("align",()=>({type:String,default:null,validator:Fg})),ob=[...Mu,...Ng],Bg=t=>ob.includes(t),kg=bu("justify",()=>({type:String,default:null,validator:Bg})),ab=[...Mu,...Ng,"stretch"],Vg=t=>ab.includes(t),zg=bu("alignContent",()=>({type:String,default:null,validator:Vg})),Cd={align:Object.keys(Og),justify:Object.keys(kg),alignContent:Object.keys(zg)},lb={align:"align",justify:"justify",alignContent:"align-content"};function cb(t,e,n){let i=lb[t];if(n!=null){if(e){const r=e.replace(t,"");i+=`-${r}`}return i+=`-${n}`,i.toLowerCase()}}const ub=Re({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:Fg},...Og,justify:{type:String,default:null,validator:Bg},...kg,alignContent:{type:String,default:null,validator:Vg},...zg,...lt(),...Ct()},"VRow"),fb=$e()({name:"VRow",props:ub(),setup(t,e){let{slots:n}=e;const i=ne(()=>{const r=[];let s;for(s in Cd)Cd[s].forEach(o=>{const a=t[o],l=cb(s,o,a);l&&r.push(l)});return r.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),r});return()=>{var r;return Wn(t.tag,{class:["v-row",i.value,t.class],style:t.style},(r=n.default)==null?void 0:r.call(n))}}}),Hg=Lm("v-spacer","div","VSpacer"),db=Re({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function an(t,e,n){return $e()({name:t,props:db({mode:n,origin:e}),setup(i,r){let{slots:s}=r;const o={onBeforeEnter(a){i.origin&&(a.style.transformOrigin=i.origin)},onLeave(a){if(i.leaveAbsolute){const{offsetTop:l,offsetLeft:c,offsetWidth:u,offsetHeight:f}=a;a._transitionInitialStyles={position:a.style.position,top:a.style.top,left:a.style.left,width:a.style.width,height:a.style.height},a.style.position="absolute",a.style.top=`${l}px`,a.style.left=`${c}px`,a.style.width=`${u}px`,a.style.height=`${f}px`}i.hideOnLeave&&a.style.setProperty("display","none","important")},onAfterLeave(a){if(i.leaveAbsolute&&(a!=null&&a._transitionInitialStyles)){const{position:l,top:c,left:u,width:f,height:d}=a._transitionInitialStyles;delete a._transitionInitialStyles,a.style.position=l||"",a.style.top=c||"",a.style.left=u||"",a.style.width=f||"",a.style.height=d||""}}};return()=>{const a=i.group?cu:as;return Wn(a,{name:i.disabled?"":t,css:!i.disabled,...i.group?void 0:{mode:i.mode},...i.disabled?{}:o},s.default)}}})}function Gg(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return $e()({name:t,props:{mode:{type:String,default:n},disabled:Boolean,group:Boolean},setup(i,r){let{slots:s}=r;const o=i.group?cu:as;return()=>Wn(o,{name:i.disabled?"":t,css:!i.disabled,...i.disabled?{}:e},s.default)}})}function Wg(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",i=yn(`offset-${n}`);return{onBeforeEnter(o){o._parent=o.parentNode,o._initialStyle={transition:o.style.transition,overflow:o.style.overflow,[n]:o.style[n]}},onEnter(o){const a=o._initialStyle;o.style.setProperty("transition","none","important"),o.style.overflow="hidden";const l=`${o[i]}px`;o.style[n]="0",o.offsetHeight,o.style.transition=a.transition,t&&o._parent&&o._parent.classList.add(t),requestAnimationFrame(()=>{o.style[n]=l})},onAfterEnter:s,onEnterCancelled:s,onLeave(o){o._initialStyle={transition:"",overflow:o.style.overflow,[n]:o.style[n]},o.style.overflow="hidden",o.style[n]=`${o[i]}px`,o.offsetHeight,requestAnimationFrame(()=>o.style[n]="0")},onAfterLeave:r,onLeaveCancelled:r};function r(o){t&&o._parent&&o._parent.classList.remove(t),s(o)}function s(o){const a=o._initialStyle[n];o.style.overflow=o._initialStyle.overflow,a!=null&&(o.style[n]=a),delete o._initialStyle}}an("fab-transition","center center","out-in");an("dialog-bottom-transition");an("dialog-top-transition");const Rd=an("fade-transition");an("scale-transition");an("scroll-x-transition");an("scroll-x-reverse-transition");an("scroll-y-transition");an("scroll-y-reverse-transition");an("slide-x-transition");an("slide-x-reverse-transition");an("slide-y-transition");an("slide-y-reverse-transition");const Xg=Gg("expand-transition",Wg());Gg("expand-x-transition",Wg("",!0));const hb={class:""},pb=ss({__name:"ProjectCard",props:["title","subtitle","image","desc","route"],setup(t){const e=t,n=rg(),i=pt(!1),r=()=>{n.push(e.route)};return(s,o)=>(gn(),su(KM,{class:"mx-auto bg-white","max-width":"300","min-width":"300"},{default:bt(()=>[k(qa,{color:"surface-variant",height:"150",src:t.image,cover:""},null,8,["src"]),k(Rg,null,{default:bt(()=>[oa(As(t.title),1)]),_:1}),k(Tc,null,{default:bt(()=>[Un("div",hb,As(t.subtitle),1)]),_:1}),k(Cg,null,{default:bt(()=>[k(dr,{color:"orange-lighten-2",text:"Start",onClick:r}),k(Hg),k(dr,{icon:i.value?"mdi-chevron-up":"mdi-chevron-down",onClick:o[0]||(o[0]=a=>i.value=!i.value)},null,8,["icon"])]),_:1}),k(Xg,null,{default:bt(()=>[fr(Un("div",null,[k(JM),k(Tc,null,{default:bt(()=>[oa(As(t.desc),1)]),_:1})],512),[[lu,i.value]])]),_:1})]),_:1}))}}),$g=Re({text:String,...lt(),...Ct()},"VToolbarTitle"),qg=$e()({name:"VToolbarTitle",props:$g(),setup(t,e){let{slots:n}=e;return nt(()=>{const i=!!(n.default||n.text||t.text);return k(t.tag,{class:["v-toolbar-title",t.class],style:t.style},{default:()=>{var r;return[i&&k("div",{class:"v-toolbar-title__placeholder"},[n.text?n.text():t.text,(r=n.default)==null?void 0:r.call(n)])]}})}),{}}}),mb=[null,"prominent","default","comfortable","compact"],Yg=Re({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:t=>mb.includes(t)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Va(),...lt(),...Ha(),...gr(),...Ct({tag:"header"}),...Rn()},"VToolbar"),Pd=$e()({name:"VToolbar",props:Yg(),setup(t,e){var h;let{slots:n}=e;const{backgroundColorClasses:i,backgroundColorStyles:r}=Wr(mt(t,"color")),{borderClasses:s}=za(t),{elevationClasses:o}=Ga(t),{roundedClasses:a}=vr(t),{themeClasses:l}=Pn(t),{rtlClasses:c}=zi(),u=Je(!!(t.extended||(h=n.extension)!=null&&h.call(n))),f=ne(()=>parseInt(Number(t.height)+(t.density==="prominent"?Number(t.height):0)-(t.density==="comfortable"?8:0)-(t.density==="compact"?16:0),10)),d=ne(()=>u.value?parseInt(Number(t.extensionHeight)+(t.density==="prominent"?Number(t.extensionHeight):0)-(t.density==="comfortable"?4:0)-(t.density==="compact"?8:0),10):0);return eo({VBtn:{variant:"text"}}),nt(()=>{var p;const g=!!(t.title||n.title),v=!!(n.image||t.image),m=(p=n.extension)==null?void 0:p.call(n);return u.value=!!(t.extended||m),k(t.tag,{class:["v-toolbar",{"v-toolbar--absolute":t.absolute,"v-toolbar--collapse":t.collapse,"v-toolbar--flat":t.flat,"v-toolbar--floating":t.floating,[`v-toolbar--density-${t.density}`]:!0},i.value,s.value,o.value,a.value,l.value,c.value,t.class],style:[r.value,t.style]},{default:()=>[v&&k("div",{key:"image",class:"v-toolbar__image"},[n.image?k(zn,{key:"image-defaults",disabled:!t.image,defaults:{VImg:{cover:!0,src:t.image}}},n.image):k(qa,{key:"image-img",cover:!0,src:t.image},null)]),k(zn,{defaults:{VTabs:{height:Ye(f.value)}}},{default:()=>{var M,y,b;return[k("div",{class:"v-toolbar__content",style:{height:Ye(f.value)}},[n.prepend&&k("div",{class:"v-toolbar__prepend"},[(M=n.prepend)==null?void 0:M.call(n)]),g&&k(qg,{key:"title",text:t.title},{text:n.title}),(y=n.default)==null?void 0:y.call(n),n.append&&k("div",{class:"v-toolbar__append"},[(b=n.append)==null?void 0:b.call(n)])])]}}),k(zn,{defaults:{VTabs:{height:Ye(d.value)}}},{default:()=>[k(Xg,null,{default:()=>[u.value&&k("div",{class:"v-toolbar__extension",style:{height:Ye(d.value)}},[m])]})]})]})}),{contentHeight:f,extensionHeight:d}}}),gb=Re({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function vb(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:n}=e;let i=0;const r=pt(null),s=Je(0),o=Je(0),a=Je(0),l=Je(!1),c=Je(!1),u=ne(()=>Number(t.scrollThreshold)),f=ne(()=>zs((u.value-s.value)/u.value||0)),d=()=>{const h=r.value;!h||n&&!n.value||(i=s.value,s.value="window"in h?h.pageYOffset:h.scrollTop,c.value=s.value<i,a.value=Math.abs(s.value-u.value))};return ht(c,()=>{o.value=o.value||s.value}),ht(l,()=>{o.value=0}),os(()=>{ht(()=>t.scrollTarget,h=>{var v;const g=h?document.querySelector(h):window;g&&g!==r.value&&((v=r.value)==null||v.removeEventListener("scroll",d),r.value=g,r.value.addEventListener("scroll",d,{passive:!0}))},{immediate:!0})}),ai(()=>{var h;(h=r.value)==null||h.removeEventListener("scroll",d)}),n&&ht(n,d,{immediate:!0}),{scrollThreshold:u,currentScroll:s,currentThreshold:a,isScrollActive:l,scrollRatio:f,isScrollingUp:c,savedScroll:o}}function Eu(){const t=Je(!1);return os(()=>{window.requestAnimationFrame(()=>{t.value=!0})}),{ssrBootStyles:ne(()=>t.value?void 0:{transition:"none !important"}),isBooted:Ks(t)}}const _b=Re({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:t=>["top","bottom"].includes(t)},...Yg(),...aS(),...gb(),height:{type:[Number,String],default:64}},"VAppBar"),jg=$e()({name:"VAppBar",props:_b(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const i=pt(),r=ls(t,"modelValue"),s=ne(()=>{var b;const y=new Set(((b=t.scrollBehavior)==null?void 0:b.split(" "))??[]);return{hide:y.has("hide"),fullyHide:y.has("fully-hide"),inverted:y.has("inverted"),collapse:y.has("collapse"),elevate:y.has("elevate"),fadeImage:y.has("fade-image")}}),o=ne(()=>{const y=s.value;return y.hide||y.fullyHide||y.inverted||y.collapse||y.elevate||y.fadeImage||!r.value}),{currentScroll:a,scrollThreshold:l,isScrollingUp:c,scrollRatio:u}=vb(t,{canScroll:o}),f=ne(()=>s.value.hide||s.value.fullyHide),d=ne(()=>t.collapse||s.value.collapse&&(s.value.inverted?u.value>0:u.value===0)),h=ne(()=>t.flat||s.value.fullyHide&&!r.value||s.value.elevate&&(s.value.inverted?a.value>0:a.value===0)),g=ne(()=>s.value.fadeImage?s.value.inverted?1-u.value:u.value:void 0),v=ne(()=>{var P,E;const y=Number(((P=i.value)==null?void 0:P.contentHeight)??t.height),b=Number(((E=i.value)==null?void 0:E.extensionHeight)??0);return f.value?a.value<l.value||s.value.fullyHide?y+b:y:y+b});xm(ne(()=>!!t.scrollBehavior),()=>{mr(()=>{f.value?s.value.inverted?r.value=a.value>l.value:r.value=c.value||a.value<l.value:r.value=!0})});const{ssrBootStyles:m}=Eu(),{layoutItemStyles:p,layoutIsReady:M}=cS({id:t.name,order:ne(()=>parseInt(t.order,10)),position:mt(t,"location"),layoutSize:v,elementSize:Je(void 0),active:r,absolute:mt(t,"absolute")});return nt(()=>{const y=Pd.filterProps(t);return k(Pd,sn({ref:i,class:["v-app-bar",{"v-app-bar--bottom":t.location==="bottom"},t.class],style:[{...p.value,"--v-toolbar-image-opacity":g.value,height:void 0,...m.value},t.style]},y,{collapse:d.value,flat:h.value}),n)}),M}}),xb=$e()({name:"VAppBarTitle",props:$g(),setup(t,e){let{slots:n}=e;return nt(()=>k(qg,sn(t,{class:"v-app-bar-title"}),n)),{}}}),yb=Re({...lt(),...io(),...Wm()},"VLayout"),Sb=$e()({name:"VLayout",props:yb(),setup(t,e){let{slots:n}=e;const{layoutClasses:i,layoutStyles:r,getLayoutItem:s,items:o,layoutRef:a}=Xm(t),{dimensionStyles:l}=ro(t);return nt(()=>k("div",{ref:a,class:[i.value,t.class],style:[l.value,r.value,t.style]},[k(Bp,null,{default:()=>{var c;return[k(ot,null,[(c=n.default)==null?void 0:c.call(n)])]}})])),{getLayoutItem:s,items:o}}}),Mb=Re({scrollable:Boolean,...lt(),...io(),...Ct({tag:"main"})},"VMain"),Kg=$e()({name:"VMain",props:Mb(),setup(t,e){let{slots:n}=e;const{dimensionStyles:i}=ro(t),{mainStyles:r,layoutIsReady:s}=lS(),{ssrBootStyles:o}=Eu();return nt(()=>k(t.tag,{class:["v-main",{"v-main--scrollable":t.scrollable},t.class],style:[r.value,o.value,i.value,t.style]},{default:()=>{var a,l;return[t.scrollable?k("div",{class:"v-main__scroller"},[(a=n.default)==null?void 0:a.call(n)]):(l=n.default)==null?void 0:l.call(n)]}})),s}}),bb=ss({__name:"Main",setup(t){const e=[{title:"Augmented reality",subtitle:"Augmented reality project, based of WebXR",image:"eidosmedia-ar.png",desc:"Here should be description",route:Ov[1].path}];return(n,i)=>{const r=pb;return gn(),Ri(ot,null,[k(jg,{color:"primary",density:"compact"},{default:bt(()=>[k(xb,null,{default:bt(()=>[oa("Projects|IV")]),_:1})]),_:1}),k(Sb,null,{default:bt(()=>[k(Kg,null,{default:bt(()=>[k(eb,{fluid:""},{default:bt(()=>[k(fb,{justify:"center"},{default:bt(()=>[(gn(),Ri(ot,null,ia(e,s=>k(rb,{key:s.title,cols:"auto"},{default:bt(()=>[k(r,{title:s.title,subtitle:s.subtitle,desc:s.desc,image:s.image,route:s.route},null,8,["title","subtitle","desc","image","route"])]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})]),_:1})],64)}}}),Eb={style:{display:"flex","justify-content":"center"}},Tb={style:{"text-align":"left"}},Ab=["href"],wb={__name:"CheckTab",setup(t){var n,i,r,s,o,a,l;const e=[{name:"WebXR Device API (core)",url:"https://immersive-web.github.io/webxr/",supported:"xr"in window.navigator},{name:"WebXR Gamepads",url:"https://immersive-web.github.io/webxr-gamepads-module/",supported:"gamepad"in(((n=window.XRInputSource)==null?void 0:n.prototype)||{})},{name:"WebXR Augmented Reality",url:"https://immersive-web.github.io/webxr-ar-module/",supported:"environmentBlendMode"in(((i=window.XRSession)==null?void 0:i.prototype)||{})},{name:"WebXR Hit Test",url:"https://immersive-web.github.io/hit-test/",supported:"requestHitTestSource"in(((r=window.XRSession)==null?void 0:r.prototype)||{})},{name:"WebXR DOM Overlays",url:"https://immersive-web.github.io/dom-overlays/",supported:"domOverlayState"in(((s=window.XRSession)==null?void 0:s.prototype)||{})},{name:"WebXR Layers",url:"https://immersive-web.github.io/layers/",supported:"XRProjectionLayer"in window},{name:"WebXR Anchors",url:"https://immersive-web.github.io/anchors/",supported:"createAnchor"in(((o=window.XRFrame)==null?void 0:o.prototype)||{})},{name:"WebXR Lighting Estimation",url:"https://immersive-web.github.io/lighting-estimation/",supported:"requestLightProbe"in(((a=window.XRSession)==null?void 0:a.prototype)||{})},{name:"WebXR Hand Input",url:"https://www.w3.org/TR/webxr-hand-input/",supported:"hand"in(((l=window.XRInputSource)==null?void 0:l.prototype)||{})}];return(c,u)=>(gn(),Ri("table",Eb,[Un("tbody",null,[(gn(),Ri(ot,null,ia(e,f=>Un("tr",{key:f.name},[Un("td",Tb,[Un("a",{href:f.url},As(f.name),9,Ab)]),Un("td",{style:Ca(`background:${f.supported?"#10b981":"#EF5350"}`)},[Un("span",null,As(f.supported),1)],4)])),64))])]))}};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tu="164",Cb=0,Ld=1,Rb=2,Zg=1,Pb=2,Qn=3,Ni=0,jt=1,ti=2,Li=0,Xr=1,Id=2,Dd=3,Ud=4,Lb=5,ir=100,Ib=101,Db=102,Ub=103,Nb=104,Fb=200,Ob=201,Bb=202,kb=203,Ac=204,wc=205,Vb=206,zb=207,Hb=208,Gb=209,Wb=210,Xb=211,$b=212,qb=213,Yb=214,jb=0,Kb=1,Zb=2,_a=3,Jb=4,Qb=5,eE=6,tE=7,Au=0,nE=1,iE=2,Ii=0,rE=1,sE=2,oE=3,aE=4,lE=5,cE=6,uE=7,Jg=300,es=301,ts=302,Cc=303,Rc=304,Ya=306,Pc=1e3,or=1001,Lc=1002,vn=1003,fE=1004,Eo=1005,Tn=1006,xl=1007,ar=1008,Fi=1009,dE=1010,hE=1011,Qg=1012,ev=1013,ns=1014,Ai=1015,ja=1016,tv=1017,nv=1018,so=1020,pE=35902,mE=1021,gE=1022,Vn=1023,vE=1024,_E=1025,$r=1026,Ys=1027,xE=1028,iv=1029,yE=1030,rv=1031,sv=1033,yl=33776,Sl=33777,Ml=33778,bl=33779,Nd=35840,Fd=35841,Od=35842,Bd=35843,kd=36196,Vd=37492,zd=37496,Hd=37808,Gd=37809,Wd=37810,Xd=37811,$d=37812,qd=37813,Yd=37814,jd=37815,Kd=37816,Zd=37817,Jd=37818,Qd=37819,eh=37820,th=37821,El=36492,nh=36494,ih=36495,SE=36283,rh=36284,sh=36285,oh=36286,ME=3200,bE=3201,ov=0,EE=1,Ti="",Dn="srgb",Hi="srgb-linear",wu="display-p3",Ka="display-p3-linear",xa="linear",ut="srgb",ya="rec709",Sa="p3",yr=7680,ah=519,TE=512,AE=513,wE=514,av=515,CE=516,RE=517,PE=518,LE=519,lh=35044,ch="300 es",ni=2e3,Ma=2001;class us{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tl=Math.PI/180,Ic=180/Math.PI;function oo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[t&255]+Ut[t>>8&255]+Ut[t>>16&255]+Ut[t>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[n&63|128]+Ut[n>>8&255]+"-"+Ut[n>>16&255]+Ut[n>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function Xt(t,e,n){return Math.max(e,Math.min(n,t))}function IE(t,e){return(t%e+e)%e}function Al(t,e,n){return(1-n)*t+n*e}function vs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Gt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Qe{constructor(e=0,n=0){Qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],g=i[8],v=r[0],m=r[3],p=r[6],M=r[1],y=r[4],b=r[7],P=r[2],E=r[5],C=r[8];return s[0]=o*v+a*M+l*P,s[3]=o*m+a*y+l*E,s[6]=o*p+a*b+l*C,s[1]=c*v+u*M+f*P,s[4]=c*m+u*y+f*E,s[7]=c*p+u*b+f*C,s[2]=d*v+h*M+g*P,s[5]=d*m+h*y+g*E,s[8]=d*p+h*b+g*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,h=c*s-o*l,g=n*f+i*d+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(u*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=h*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(wl.makeScale(e,n)),this}rotate(e){return this.premultiply(wl.makeRotation(-e)),this}translate(e,n){return this.premultiply(wl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wl=new Ge;function lv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ba(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function DE(){const t=ba("canvas");return t.style.display="block",t}const uh={};function UE(t){t in uh||(uh[t]=!0,console.warn(t))}const fh=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),dh=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),To={[Hi]:{transfer:xa,primaries:ya,toReference:t=>t,fromReference:t=>t},[Dn]:{transfer:ut,primaries:ya,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Ka]:{transfer:xa,primaries:Sa,toReference:t=>t.applyMatrix3(dh),fromReference:t=>t.applyMatrix3(fh)},[wu]:{transfer:ut,primaries:Sa,toReference:t=>t.convertSRGBToLinear().applyMatrix3(dh),fromReference:t=>t.applyMatrix3(fh).convertLinearToSRGB()}},NE=new Set([Hi,Ka]),st={enabled:!0,_workingColorSpace:Hi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!NE.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=To[e].toReference,r=To[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return To[t].primaries},getTransfer:function(t){return t===Ti?xa:To[t].transfer}};function qr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Cl(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Sr;class FE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Sr===void 0&&(Sr=ba("canvas")),Sr.width=e.width,Sr.height=e.height;const i=Sr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Sr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ba("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=qr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(qr(n[i]/255)*255):n[i]=qr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let OE=0;class cv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:OE++}),this.uuid=oo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Rl(r[o].image)):s.push(Rl(r[o]))}else s=Rl(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Rl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?FE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let BE=0;class Kt extends us{constructor(e=Kt.DEFAULT_IMAGE,n=Kt.DEFAULT_MAPPING,i=or,r=or,s=Tn,o=ar,a=Vn,l=Fi,c=Kt.DEFAULT_ANISOTROPY,u=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BE++}),this.uuid=oo(),this.name="",this.source=new cv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pc:e.x=e.x-Math.floor(e.x);break;case or:e.x=e.x<0?0:1;break;case Lc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pc:e.y=e.y-Math.floor(e.y);break;case or:e.y=e.y<0?0:1;break;case Lc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Jg;Kt.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,n=0,i=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,b=(h+1)/2,P=(p+1)/2,E=(u+d)/4,C=(f+v)/4,D=(g+m)/4;return y>b&&y>P?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=E/i,s=C/i):b>P?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=E/r,s=D/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=C/s,r=D/s),this.set(i,r,s,n),this}let M=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-v)/M,this.z=(d-u)/M,this.w=Math.acos((c+h+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kE extends us{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Kt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new cv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hr extends kE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class uv extends Kt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class VE extends Kt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ao{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],h=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=h,e[n+2]=g,e[n+3]=v;return}if(f!==v||l!==d||c!==h||u!==g){let m=1-a;const p=l*d+c*h+u*g+f*v,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const P=Math.sqrt(y),E=Math.atan2(P,p*M);m=Math.sin(m*E)/P,a=Math.sin(a*E)/P}const b=a*M;if(l=l*m+d*b,c=c*m+h*b,u=u*m+g*b,f=f*m+v*b,m===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=P,c*=P,u*=P,f*=P}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],h=s[o+2],g=s[o+3];return e[n]=a*g+u*f+l*h-c*d,e[n+1]=l*g+u*d+c*f-a*h,e[n+2]=c*g+u*h+a*d-l*f,e[n+3]=u*g-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),h=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-n;return this._w=h*o+n*this._w,this._x=h*i+n*this._x,this._y=h*r+n*this._y,this._z=h*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,n=0,i=0){J.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(hh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(hh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Pl.copy(this).projectOnVector(e),this.sub(Pl)}reflect(e){return this.sub(Pl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pl=new J,hh=new ao;class lo{constructor(e=new J(1/0,1/0,1/0),n=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Sn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Sn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Sn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Sn):Sn.fromBufferAttribute(s,o),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ao.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ao.copy(i.boundingBox)),Ao.applyMatrix4(e.matrixWorld),this.union(Ao)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_s),wo.subVectors(this.max,_s),Mr.subVectors(e.a,_s),br.subVectors(e.b,_s),Er.subVectors(e.c,_s),hi.subVectors(br,Mr),pi.subVectors(Er,br),Yi.subVectors(Mr,Er);let n=[0,-hi.z,hi.y,0,-pi.z,pi.y,0,-Yi.z,Yi.y,hi.z,0,-hi.x,pi.z,0,-pi.x,Yi.z,0,-Yi.x,-hi.y,hi.x,0,-pi.y,pi.x,0,-Yi.y,Yi.x,0];return!Ll(n,Mr,br,Er,wo)||(n=[1,0,0,0,1,0,0,0,1],!Ll(n,Mr,br,Er,wo))?!1:(Co.crossVectors(hi,pi),n=[Co.x,Co.y,Co.z],Ll(n,Mr,br,Er,wo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qn=[new J,new J,new J,new J,new J,new J,new J,new J],Sn=new J,Ao=new lo,Mr=new J,br=new J,Er=new J,hi=new J,pi=new J,Yi=new J,_s=new J,wo=new J,Co=new J,ji=new J;function Ll(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ji.fromArray(t,s);const a=r.x*Math.abs(ji.x)+r.y*Math.abs(ji.y)+r.z*Math.abs(ji.z),l=e.dot(ji),c=n.dot(ji),u=i.dot(ji);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const zE=new lo,xs=new J,Il=new J;class Cu{constructor(e=new J,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):zE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xs.subVectors(e,this.center);const n=xs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(xs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Il.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xs.copy(e.center).add(Il)),this.expandByPoint(xs.copy(e.center).sub(Il))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yn=new J,Dl=new J,Ro=new J,mi=new J,Ul=new J,Po=new J,Nl=new J;class HE{constructor(e=new J,n=new J(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Yn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,n),Yn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Dl.copy(e).add(n).multiplyScalar(.5),Ro.copy(n).sub(e).normalize(),mi.copy(this.origin).sub(Dl);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ro),a=mi.dot(this.direction),l=-mi.dot(Ro),c=mi.lengthSq(),u=Math.abs(1-o*o);let f,d,h,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const v=1/u;f*=v,d*=v,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Dl).addScaledVector(Ro,d),h}intersectSphere(e,n){Yn.subVectors(e.center,this.origin);const i=Yn.dot(this.direction),r=Yn.dot(Yn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,n,i,r,s){Ul.subVectors(n,e),Po.subVectors(i,e),Nl.crossVectors(Ul,Po);let o=this.direction.dot(Nl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,e);const l=a*this.direction.dot(Po.crossVectors(mi,Po));if(l<0)return null;const c=a*this.direction.dot(Ul.cross(mi));if(c<0||l+c>o)return null;const u=-a*mi.dot(Nl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,n,i,r,s,o,a,l,c,u,f,d,h,g,v,m){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,h,g,v,m)}set(e,n,i,r,s,o,a,l,c,u,f,d,h,g,v,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Tr.setFromMatrixColumn(e,0).length(),s=1/Tr.setFromMatrixColumn(e,1).length(),o=1/Tr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,h=o*f,g=a*u,v=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=h+g*c,n[5]=d-v*c,n[9]=-a*l,n[2]=v-d*c,n[6]=g+h*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,g=c*u,v=c*f;n[0]=d+v*a,n[4]=g*a-h,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=h*a-g,n[6]=v+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,g=c*u,v=c*f;n[0]=d-v*a,n[4]=-o*f,n[8]=g+h*a,n[1]=h+g*a,n[5]=o*u,n[9]=v-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,h=o*f,g=a*u,v=a*f;n[0]=l*u,n[4]=g*c-h,n[8]=d*c+v,n[1]=l*f,n[5]=v*c+d,n[9]=h*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=v-d*f,n[8]=g*f+h,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=h*f+g,n[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,h=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+v,n[5]=o*u,n[9]=h*f-g,n[2]=g*f-h,n[6]=a*u,n[10]=v*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(GE,e,WE)}lookAt(e,n,i){const r=this.elements;return en.subVectors(e,n),en.lengthSq()===0&&(en.z=1),en.normalize(),gi.crossVectors(i,en),gi.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),gi.crossVectors(i,en)),gi.normalize(),Lo.crossVectors(en,gi),r[0]=gi.x,r[4]=Lo.x,r[8]=en.x,r[1]=gi.y,r[5]=Lo.y,r[9]=en.y,r[2]=gi.z,r[6]=Lo.z,r[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],g=i[2],v=i[6],m=i[10],p=i[14],M=i[3],y=i[7],b=i[11],P=i[15],E=r[0],C=r[4],D=r[8],S=r[12],_=r[1],F=r[5],I=r[9],L=r[13],W=r[2],Z=r[6],ie=r[10],re=r[14],G=r[3],me=r[7],Q=r[11],ae=r[15];return s[0]=o*E+a*_+l*W+c*G,s[4]=o*C+a*F+l*Z+c*me,s[8]=o*D+a*I+l*ie+c*Q,s[12]=o*S+a*L+l*re+c*ae,s[1]=u*E+f*_+d*W+h*G,s[5]=u*C+f*F+d*Z+h*me,s[9]=u*D+f*I+d*ie+h*Q,s[13]=u*S+f*L+d*re+h*ae,s[2]=g*E+v*_+m*W+p*G,s[6]=g*C+v*F+m*Z+p*me,s[10]=g*D+v*I+m*ie+p*Q,s[14]=g*S+v*L+m*re+p*ae,s[3]=M*E+y*_+b*W+P*G,s[7]=M*C+y*F+b*Z+P*me,s[11]=M*D+y*I+b*ie+P*Q,s[15]=M*S+y*L+b*re+P*ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*h-i*l*h)+v*(+n*l*h-n*c*d+s*o*d-r*o*h+r*c*u-s*l*u)+m*(+n*c*f-n*a*h-s*o*f+i*o*h+s*a*u-i*c*u)+p*(-r*a*u-n*l*f+n*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],v=e[13],m=e[14],p=e[15],M=f*m*c-v*d*c+v*l*h-a*m*h-f*l*p+a*d*p,y=g*d*c-u*m*c-g*l*h+o*m*h+u*l*p-o*d*p,b=u*v*c-g*f*c+g*a*h-o*v*h-u*a*p+o*f*p,P=g*f*l-u*v*l-g*a*d+o*v*d+u*a*m-o*f*m,E=n*M+i*y+r*b+s*P;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=M*C,e[1]=(v*d*s-f*m*s-v*r*h+i*m*h+f*r*p-i*d*p)*C,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*p+i*l*p)*C,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*h-i*l*h)*C,e[4]=y*C,e[5]=(u*m*s-g*d*s+g*r*h-n*m*h-u*r*p+n*d*p)*C,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*p-n*l*p)*C,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*h+n*l*h)*C,e[8]=b*C,e[9]=(g*f*s-u*v*s-g*i*h+n*v*h+u*i*p-n*f*p)*C,e[10]=(o*v*s-g*a*s+g*i*c-n*v*c-o*i*p+n*a*p)*C,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*h-n*a*h)*C,e[12]=P*C,e[13]=(u*v*r-g*f*r+g*i*d-n*v*d-u*i*m+n*f*m)*C,e[14]=(g*a*r-o*v*r-g*i*l+n*v*l+o*i*m-n*a*m)*C,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,h=s*u,g=s*f,v=o*u,m=o*f,p=a*f,M=l*c,y=l*u,b=l*f,P=i.x,E=i.y,C=i.z;return r[0]=(1-(v+p))*P,r[1]=(h+b)*P,r[2]=(g-y)*P,r[3]=0,r[4]=(h-b)*E,r[5]=(1-(d+p))*E,r[6]=(m+M)*E,r[7]=0,r[8]=(g+y)*C,r[9]=(m-M)*C,r[10]=(1-(d+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Tr.set(r[0],r[1],r[2]).length();const o=Tr.set(r[4],r[5],r[6]).length(),a=Tr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Mn.copy(this);const c=1/s,u=1/o,f=1/a;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=u,Mn.elements[5]*=u,Mn.elements[6]*=u,Mn.elements[8]*=f,Mn.elements[9]*=f,Mn.elements[10]*=f,n.setFromRotationMatrix(Mn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ni){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let h,g;if(a===ni)h=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ma)h=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ni){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),d=(n+e)*c,h=(i+r)*u;let g,v;if(a===ni)g=(o+s)*f,v=-2*f;else if(a===Ma)g=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Tr=new J,Mn=new Et,GE=new J(0,0,0),WE=new J(1,1,1),gi=new J,Lo=new J,en=new J,ph=new Et,mh=new ao;class Gn{constructor(e=0,n=0,i=0,r=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ph.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ph,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return mh.setFromEuler(this),this.setFromQuaternion(mh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class fv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let XE=0;const gh=new J,Ar=new ao,jn=new Et,Io=new J,ys=new J,$E=new J,qE=new ao,vh=new J(1,0,0),_h=new J(0,1,0),xh=new J(0,0,1),yh={type:"added"},YE={type:"removed"},wr={type:"childadded",child:null},Fl={type:"childremoved",child:null};class Ht extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:XE++}),this.uuid=oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new J,n=new Gn,i=new ao,r=new J(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new Ge}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ar.setFromAxisAngle(e,n),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(e,n){return Ar.setFromAxisAngle(e,n),this.quaternion.premultiply(Ar),this}rotateX(e){return this.rotateOnAxis(vh,e)}rotateY(e){return this.rotateOnAxis(_h,e)}rotateZ(e){return this.rotateOnAxis(xh,e)}translateOnAxis(e,n){return gh.copy(e).applyQuaternion(this.quaternion),this.position.add(gh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(vh,e)}translateY(e){return this.translateOnAxis(_h,e)}translateZ(e){return this.translateOnAxis(xh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Io.copy(e):Io.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(ys,Io,this.up):jn.lookAt(Io,ys,this.up),this.quaternion.setFromRotationMatrix(jn),r&&(jn.extractRotation(r.matrixWorld),Ar.setFromRotationMatrix(jn),this.quaternion.premultiply(Ar.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yh),wr.child=e,this.dispatchEvent(wr),wr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(YE),Fl.child=e,this.dispatchEvent(Fl),Fl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yh),wr.child=e,this.dispatchEvent(wr),wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,e,$E),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,qE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ht.DEFAULT_UP=new J(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new J,Kn=new J,Ol=new J,Zn=new J,Cr=new J,Rr=new J,Sh=new J,Bl=new J,kl=new J,Vl=new J;class Bn{constructor(e=new J,n=new J,i=new J){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),bn.subVectors(e,n),r.cross(bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){bn.subVectors(r,n),Kn.subVectors(i,n),Ol.subVectors(e,n);const o=bn.dot(bn),a=bn.dot(Kn),l=bn.dot(Ol),c=Kn.dot(Kn),u=Kn.dot(Ol),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-h-g,g,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Zn.x),l.addScaledVector(o,Zn.y),l.addScaledVector(a,Zn.z),l)}static isFrontFacing(e,n,i,r){return bn.subVectors(i,n),Kn.subVectors(e,n),bn.cross(Kn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),bn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Bn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Bn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Cr.subVectors(r,i),Rr.subVectors(s,i),Bl.subVectors(e,i);const l=Cr.dot(Bl),c=Rr.dot(Bl);if(l<=0&&c<=0)return n.copy(i);kl.subVectors(e,r);const u=Cr.dot(kl),f=Rr.dot(kl);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Cr,o);Vl.subVectors(e,s);const h=Cr.dot(Vl),g=Rr.dot(Vl);if(g>=0&&h<=g)return n.copy(s);const v=h*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Rr,a);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return Sh.subVectors(s,r),a=(f-u)/(f-u+(h-g)),n.copy(r).addScaledVector(Sh,a);const p=1/(m+v+d);return o=v*p,a=d*p,n.copy(i).addScaledVector(Cr,o).addScaledVector(Rr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},Do={h:0,s:0,l:0};function zl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=st.workingColorSpace){return this.r=e,this.g=n,this.b=i,st.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=st.workingColorSpace){if(e=IE(e,1),n=Xt(n,0,1),i=Xt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=zl(o,s,e+1/3),this.g=zl(o,s,e),this.b=zl(o,s,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,n=Dn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Dn){const i=dv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qr(e.r),this.g=qr(e.g),this.b=qr(e.b),this}copyLinearToSRGB(e){return this.r=Cl(e.r),this.g=Cl(e.g),this.b=Cl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return st.fromWorkingColorSpace(Nt.copy(this),e),Math.round(Xt(Nt.r*255,0,255))*65536+Math.round(Xt(Nt.g*255,0,255))*256+Math.round(Xt(Nt.b*255,0,255))}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.fromWorkingColorSpace(Nt.copy(this),n);const i=Nt.r,r=Nt.g,s=Nt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=st.workingColorSpace){return st.fromWorkingColorSpace(Nt.copy(this),n),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=Dn){st.fromWorkingColorSpace(Nt.copy(this),e);const n=Nt.r,i=Nt.g,r=Nt.b;return e!==Dn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(vi),this.setHSL(vi.h+e,vi.s+n,vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(vi),e.getHSL(Do);const i=Al(vi.h,Do.h,n),r=Al(vi.s,Do.s,n),s=Al(vi.l,Do.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new Ze;Ze.NAMES=dv;let jE=0;class co extends us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jE++}),this.uuid=oo(),this.name="",this.type="Material",this.blending=Xr,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ac,this.blendDst=wc,this.blendEquation=ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=_a,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ah,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yr,this.stencilZFail=yr,this.stencilZPass=yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xr&&(i.blending=this.blending),this.side!==Ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ac&&(i.blendSrc=this.blendSrc),this.blendDst!==wc&&(i.blendDst=this.blendDst),this.blendEquation!==ir&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_a&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ah&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==yr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==yr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ru extends co{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Au,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new J,Uo=new Qe;class Hn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=lh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return UE("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Uo.fromBufferAttribute(this,n),Uo.applyMatrix3(e),this.setXY(n,Uo.x,Uo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix3(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix4(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyNormalMatrix(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.transformDirection(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=vs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Gt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=vs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=vs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=vs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=vs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Gt(n,this.array),i=Gt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Gt(n,this.array),i=Gt(i,this.array),r=Gt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Gt(n,this.array),i=Gt(i,this.array),r=Gt(r,this.array),s=Gt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lh&&(e.usage=this.usage),e}}class hv extends Hn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class pv extends Hn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class on extends Hn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let KE=0;const un=new Et,Hl=new Ht,Pr=new J,tn=new lo,Ss=new lo,wt=new J;class li extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KE++}),this.uuid=oo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lv(e)?pv:hv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,n,i){return un.makeTranslation(e,n,i),this.applyMatrix4(un),this}scale(e,n,i){return un.makeScale(e,n,i),this.applyMatrix4(un),this}lookAt(e){return Hl.lookAt(e),Hl.updateMatrix(),this.applyMatrix4(Hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new on(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const i=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ss.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(tn.min,Ss.min),tn.expandByPoint(wt),wt.addVectors(tn.max,Ss.max),tn.expandByPoint(wt)):(tn.expandByPoint(Ss.min),tn.expandByPoint(Ss.max))}tn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(wt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)wt.fromBufferAttribute(a,c),l&&(Pr.fromBufferAttribute(e,c),wt.add(Pr)),r=Math.max(r,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new J,l[D]=new J;const c=new J,u=new J,f=new J,d=new Qe,h=new Qe,g=new Qe,v=new J,m=new J;function p(D,S,_){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,S),f.fromBufferAttribute(i,_),d.fromBufferAttribute(s,D),h.fromBufferAttribute(s,S),g.fromBufferAttribute(s,_),u.sub(c),f.sub(c),h.sub(d),g.sub(d);const F=1/(h.x*g.y-g.x*h.y);isFinite(F)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(F),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(F),a[D].add(v),a[S].add(v),a[_].add(v),l[D].add(m),l[S].add(m),l[_].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let D=0,S=M.length;D<S;++D){const _=M[D],F=_.start,I=_.count;for(let L=F,W=F+I;L<W;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const y=new J,b=new J,P=new J,E=new J;function C(D){P.fromBufferAttribute(r,D),E.copy(P);const S=a[D];y.copy(S),y.sub(P.multiplyScalar(P.dot(S))).normalize(),b.crossVectors(E,S);const F=b.dot(l[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,F)}for(let D=0,S=M.length;D<S;++D){const _=M[D],F=_.start,I=_.count;for(let L=F,W=F+I;L<W;L+=3)C(e.getX(L+0)),C(e.getX(L+1)),C(e.getX(L+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Hn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new J,s=new J,o=new J,a=new J,l=new J,c=new J,u=new J,f=new J;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=n.count;d<h;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)wt.fromBufferAttribute(e,n),wt.normalize(),e.setXYZ(n,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?h=l[v]*a.data.stride+a.offset:h=l[v]*u;for(let p=0;p<u;p++)d[g++]=c[h++]}return new Hn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new li,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mh=new Et,Ki=new HE,No=new Cu,bh=new J,Lr=new J,Ir=new J,Dr=new J,Gl=new J,Fo=new J,Oo=new Qe,Bo=new Qe,ko=new Qe,Eh=new J,Th=new J,Ah=new J,Vo=new J,zo=new J;class An extends Ht{constructor(e=new li,n=new Ru){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Fo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Gl.fromBufferAttribute(f,e),o?Fo.addScaledVector(Gl,u):Fo.addScaledVector(Gl.sub(n),u))}n.add(Fo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(s),Ki.copy(e.ray).recast(e.near),!(No.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(No,bh)===null||Ki.origin.distanceToSquared(bh)>(e.far-e.near)**2))&&(Mh.copy(s).invert(),Ki.copy(e.ray).applyMatrix4(Mh),!(i.boundingBox!==null&&Ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ki)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,h.start),y=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let b=M,P=y;b<P;b+=3){const E=a.getX(b),C=a.getX(b+1),D=a.getX(b+2);r=Ho(this,p,e,i,c,u,f,E,C,D),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){const M=a.getX(m),y=a.getX(m+1),b=a.getX(m+2);r=Ho(this,o,e,i,c,u,f,M,y,b),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,h.start),y=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let b=M,P=y;b<P;b+=3){const E=b,C=b+1,D=b+2;r=Ho(this,p,e,i,c,u,f,E,C,D),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){const M=m,y=m+1,b=m+2;r=Ho(this,o,e,i,c,u,f,M,y,b),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function ZE(t,e,n,i,r,s,o,a){let l;if(e.side===jt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ni,a),l===null)return null;zo.copy(a),zo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(zo);return c<n.near||c>n.far?null:{distance:c,point:zo.clone(),object:t}}function Ho(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Lr),t.getVertexPosition(l,Ir),t.getVertexPosition(c,Dr);const u=ZE(t,e,n,i,Lr,Ir,Dr,Vo);if(u){r&&(Oo.fromBufferAttribute(r,a),Bo.fromBufferAttribute(r,l),ko.fromBufferAttribute(r,c),u.uv=Bn.getInterpolation(Vo,Lr,Ir,Dr,Oo,Bo,ko,new Qe)),s&&(Oo.fromBufferAttribute(s,a),Bo.fromBufferAttribute(s,l),ko.fromBufferAttribute(s,c),u.uv1=Bn.getInterpolation(Vo,Lr,Ir,Dr,Oo,Bo,ko,new Qe)),o&&(Eh.fromBufferAttribute(o,a),Th.fromBufferAttribute(o,l),Ah.fromBufferAttribute(o,c),u.normal=Bn.getInterpolation(Vo,Lr,Ir,Dr,Eh,Th,Ah,new J),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new J,materialIndex:0};Bn.getNormal(Lr,Ir,Dr,f.normal),u.face=f}return u}class uo extends li{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new on(c,3)),this.setAttribute("normal",new on(u,3)),this.setAttribute("uv",new on(f,2));function g(v,m,p,M,y,b,P,E,C,D,S){const _=b/C,F=P/D,I=b/2,L=P/2,W=E/2,Z=C+1,ie=D+1;let re=0,G=0;const me=new J;for(let Q=0;Q<ie;Q++){const ae=Q*F-L;for(let _e=0;_e<Z;_e++){const Be=_e*_-I;me[v]=Be*M,me[m]=ae*y,me[p]=W,c.push(me.x,me.y,me.z),me[v]=0,me[m]=0,me[p]=E>0?1:-1,u.push(me.x,me.y,me.z),f.push(_e/C),f.push(1-Q/D),re+=1}}for(let Q=0;Q<D;Q++)for(let ae=0;ae<C;ae++){const _e=d+ae+Z*Q,Be=d+ae+Z*(Q+1),te=d+(ae+1)+Z*(Q+1),ge=d+(ae+1)+Z*Q;l.push(_e,Be,ge),l.push(Be,te,ge),G+=6}a.addGroup(h,G,S),h+=G,d+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function is(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Vt(t){const e={};for(let n=0;n<t.length;n++){const i=is(t[n]);for(const r in i)e[r]=i[r]}return e}function JE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function mv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const QE={clone:is,merge:Vt};var eT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends co{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eT,this.fragmentShader=tT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=is(e.uniforms),this.uniformsGroups=JE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class gv extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=ni}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _i=new J,wh=new Qe,Ch=new Qe;class dn extends gv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ic*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ic*2*Math.atan(Math.tan(Tl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-e/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_i.x,_i.y).multiplyScalar(-e/_i.z)}getViewSize(e,n){return this.getViewBounds(e,wh,Ch),n.subVectors(Ch,wh)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Tl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ur=-90,Nr=1;class nT extends Ht{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new dn(Ur,Nr,e,n);r.layers=this.layers,this.add(r);const s=new dn(Ur,Nr,e,n);s.layers=this.layers,this.add(s);const o=new dn(Ur,Nr,e,n);o.layers=this.layers,this.add(o);const a=new dn(Ur,Nr,e,n);a.layers=this.layers,this.add(a);const l=new dn(Ur,Nr,e,n);l.layers=this.layers,this.add(l);const c=new dn(Ur,Nr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===ni)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ma)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class vv extends Kt{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:es,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class iT extends hr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new vv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Tn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new uo(5,5,5),s=new Oi({name:"CubemapFromEquirect",uniforms:is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jt,blending:Li});s.uniforms.tEquirect.value=n;const o=new An(r,s),a=n.minFilter;return n.minFilter===ar&&(n.minFilter=Tn),new nT(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Wl=new J,rT=new J,sT=new Ge;class er{constructor(e=new J(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Wl.subVectors(i,n).cross(rT.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Wl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||sT.getNormalMatrix(e),r=this.coplanarPoint(Wl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zi=new Cu,Go=new J;class _v{constructor(e=new er,n=new er,i=new er,r=new er,s=new er,o=new er){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ni){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],h=r[8],g=r[9],v=r[10],m=r[11],p=r[12],M=r[13],y=r[14],b=r[15];if(i[0].setComponents(l-s,d-c,m-h,b-p).normalize(),i[1].setComponents(l+s,d+c,m+h,b+p).normalize(),i[2].setComponents(l+o,d+u,m+g,b+M).normalize(),i[3].setComponents(l-o,d-u,m-g,b-M).normalize(),i[4].setComponents(l-a,d-f,m-v,b-y).normalize(),n===ni)i[5].setComponents(l+a,d+f,m+v,b+y).normalize();else if(n===Ma)i[5].setComponents(a,f,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Zi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Go.x=r.normal.x>0?e.max.x:e.min.x,Go.y=r.normal.y>0?e.max.y:e.min.y,Go.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Go)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function oT(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l._updateRange,d=l.updateRanges;if(t.bindBuffer(c,a),f.count===-1&&d.length===0&&t.bufferSubData(c,0,u),d.length!==0){for(let h=0,g=d.length;h<g;h++){const v=d[h];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}f.count!==-1&&(t.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Za extends li{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,h=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const M=p*d-o;for(let y=0;y<c;y++){const b=y*f-s;g.push(b,-M,0),v.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const y=M+c*p,b=M+c*(p+1),P=M+1+c*(p+1),E=M+1+c*p;h.push(y,b,E),h.push(b,P,E)}this.setIndex(h),this.setAttribute("position",new on(g,3)),this.setAttribute("normal",new on(v,3)),this.setAttribute("uv",new on(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.width,e.height,e.widthSegments,e.heightSegments)}}var aT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mT=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,vT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_T=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ST=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,MT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ET=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,AT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,CT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,RT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,PT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,LT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,IT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,DT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,UT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,NT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,FT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,OT="gl_FragColor = linearToOutputTexel( gl_FragColor );",BT=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,kT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,VT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,HT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,GT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,WT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$T=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,KT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ZT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,QT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,eA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,oA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,aA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_A=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yA=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,SA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,MA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,bA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,EA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,TA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,AA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,RA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,PA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,LA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,DA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,UA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,NA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,FA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,OA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,VA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,HA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,GA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,WA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,XA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$A=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,YA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,KA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ZA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,JA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,QA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ew=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ow=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,pw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_w=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Sw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ew=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Aw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ww=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Nw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ow=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:aT,alphahash_pars_fragment:lT,alphamap_fragment:cT,alphamap_pars_fragment:uT,alphatest_fragment:fT,alphatest_pars_fragment:dT,aomap_fragment:hT,aomap_pars_fragment:pT,batching_pars_vertex:mT,batching_vertex:gT,begin_vertex:vT,beginnormal_vertex:_T,bsdfs:xT,iridescence_fragment:yT,bumpmap_pars_fragment:ST,clipping_planes_fragment:MT,clipping_planes_pars_fragment:bT,clipping_planes_pars_vertex:ET,clipping_planes_vertex:TT,color_fragment:AT,color_pars_fragment:wT,color_pars_vertex:CT,color_vertex:RT,common:PT,cube_uv_reflection_fragment:LT,defaultnormal_vertex:IT,displacementmap_pars_vertex:DT,displacementmap_vertex:UT,emissivemap_fragment:NT,emissivemap_pars_fragment:FT,colorspace_fragment:OT,colorspace_pars_fragment:BT,envmap_fragment:kT,envmap_common_pars_fragment:VT,envmap_pars_fragment:zT,envmap_pars_vertex:HT,envmap_physical_pars_fragment:QT,envmap_vertex:GT,fog_vertex:WT,fog_pars_vertex:XT,fog_fragment:$T,fog_pars_fragment:qT,gradientmap_pars_fragment:YT,lightmap_pars_fragment:jT,lights_lambert_fragment:KT,lights_lambert_pars_fragment:ZT,lights_pars_begin:JT,lights_toon_fragment:eA,lights_toon_pars_fragment:tA,lights_phong_fragment:nA,lights_phong_pars_fragment:iA,lights_physical_fragment:rA,lights_physical_pars_fragment:sA,lights_fragment_begin:oA,lights_fragment_maps:aA,lights_fragment_end:lA,logdepthbuf_fragment:cA,logdepthbuf_pars_fragment:uA,logdepthbuf_pars_vertex:fA,logdepthbuf_vertex:dA,map_fragment:hA,map_pars_fragment:pA,map_particle_fragment:mA,map_particle_pars_fragment:gA,metalnessmap_fragment:vA,metalnessmap_pars_fragment:_A,morphinstance_vertex:xA,morphcolor_vertex:yA,morphnormal_vertex:SA,morphtarget_pars_vertex:MA,morphtarget_vertex:bA,normal_fragment_begin:EA,normal_fragment_maps:TA,normal_pars_fragment:AA,normal_pars_vertex:wA,normal_vertex:CA,normalmap_pars_fragment:RA,clearcoat_normal_fragment_begin:PA,clearcoat_normal_fragment_maps:LA,clearcoat_pars_fragment:IA,iridescence_pars_fragment:DA,opaque_fragment:UA,packing:NA,premultiplied_alpha_fragment:FA,project_vertex:OA,dithering_fragment:BA,dithering_pars_fragment:kA,roughnessmap_fragment:VA,roughnessmap_pars_fragment:zA,shadowmap_pars_fragment:HA,shadowmap_pars_vertex:GA,shadowmap_vertex:WA,shadowmask_pars_fragment:XA,skinbase_vertex:$A,skinning_pars_vertex:qA,skinning_vertex:YA,skinnormal_vertex:jA,specularmap_fragment:KA,specularmap_pars_fragment:ZA,tonemapping_fragment:JA,tonemapping_pars_fragment:QA,transmission_fragment:ew,transmission_pars_fragment:tw,uv_pars_fragment:nw,uv_pars_vertex:iw,uv_vertex:rw,worldpos_vertex:sw,background_vert:ow,background_frag:aw,backgroundCube_vert:lw,backgroundCube_frag:cw,cube_vert:uw,cube_frag:fw,depth_vert:dw,depth_frag:hw,distanceRGBA_vert:pw,distanceRGBA_frag:mw,equirect_vert:gw,equirect_frag:vw,linedashed_vert:_w,linedashed_frag:xw,meshbasic_vert:yw,meshbasic_frag:Sw,meshlambert_vert:Mw,meshlambert_frag:bw,meshmatcap_vert:Ew,meshmatcap_frag:Tw,meshnormal_vert:Aw,meshnormal_frag:ww,meshphong_vert:Cw,meshphong_frag:Rw,meshphysical_vert:Pw,meshphysical_frag:Lw,meshtoon_vert:Iw,meshtoon_frag:Dw,points_vert:Uw,points_frag:Nw,shadow_vert:Fw,shadow_frag:Ow,sprite_vert:Bw,sprite_frag:kw},xe={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Nn={basic:{uniforms:Vt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Vt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Vt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Vt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Vt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Vt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Vt([xe.points,xe.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Vt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Vt([xe.common,xe.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Vt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Vt([xe.sprite,xe.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Vt([xe.common,xe.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Vt([xe.lights,xe.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Nn.physical={uniforms:Vt([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Wo={r:0,b:0,g:0},Ji=new Gn,Vw=new Et;function zw(t,e,n,i,r,s,o){const a=new Ze(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function g(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?n:e).get(y)),y}function v(M){let y=!1;const b=g(M);b===null?p(a,l):b&&b.isColor&&(p(b,1),y=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function m(M,y){const b=g(y);b&&(b.isCubeTexture||b.mapping===Ya)?(u===void 0&&(u=new An(new uo(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:is(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ji.copy(y.backgroundRotation),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Vw.makeRotationFromEuler(Ji)),u.material.toneMapped=st.getTransfer(b.colorSpace)!==ut,(f!==b||d!==b.version||h!==t.toneMapping)&&(u.material.needsUpdate=!0,f=b,d=b.version,h=t.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new An(new Za(2,2),new Oi({name:"BackgroundMaterial",uniforms:is(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=st.getTransfer(b.colorSpace)!==ut,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||d!==b.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,f=b,d=b.version,h=t.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,y){M.getRGB(Wo,mv(t)),i.buffers.color.setClear(Wo.r,Wo.g,Wo.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:v,addToRenderList:m}}function Hw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(_,F,I,L,W){let Z=!1;const ie=f(L,I,F);s!==ie&&(s=ie,c(s.object)),Z=h(_,L,I,W),Z&&g(_,L,I,W),W!==null&&e.update(W,t.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,b(_,F,I,L),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return t.createVertexArray()}function c(_){return t.bindVertexArray(_)}function u(_){return t.deleteVertexArray(_)}function f(_,F,I){const L=I.wireframe===!0;let W=i[_.id];W===void 0&&(W={},i[_.id]=W);let Z=W[F.id];Z===void 0&&(Z={},W[F.id]=Z);let ie=Z[L];return ie===void 0&&(ie=d(l()),Z[L]=ie),ie}function d(_){const F=[],I=[],L=[];for(let W=0;W<n;W++)F[W]=0,I[W]=0,L[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:I,attributeDivisors:L,object:_,attributes:{},index:null}}function h(_,F,I,L){const W=s.attributes,Z=F.attributes;let ie=0;const re=I.getAttributes();for(const G in re)if(re[G].location>=0){const Q=W[G];let ae=Z[G];if(ae===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(ae=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(ae=_.instanceColor)),Q===void 0||Q.attribute!==ae||ae&&Q.data!==ae.data)return!0;ie++}return s.attributesNum!==ie||s.index!==L}function g(_,F,I,L){const W={},Z=F.attributes;let ie=0;const re=I.getAttributes();for(const G in re)if(re[G].location>=0){let Q=Z[G];Q===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(Q=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(Q=_.instanceColor));const ae={};ae.attribute=Q,Q&&Q.data&&(ae.data=Q.data),W[G]=ae,ie++}s.attributes=W,s.attributesNum=ie,s.index=L}function v(){const _=s.newAttributes;for(let F=0,I=_.length;F<I;F++)_[F]=0}function m(_){p(_,0)}function p(_,F){const I=s.newAttributes,L=s.enabledAttributes,W=s.attributeDivisors;I[_]=1,L[_]===0&&(t.enableVertexAttribArray(_),L[_]=1),W[_]!==F&&(t.vertexAttribDivisor(_,F),W[_]=F)}function M(){const _=s.newAttributes,F=s.enabledAttributes;for(let I=0,L=F.length;I<L;I++)F[I]!==_[I]&&(t.disableVertexAttribArray(I),F[I]=0)}function y(_,F,I,L,W,Z,ie){ie===!0?t.vertexAttribIPointer(_,F,I,W,Z):t.vertexAttribPointer(_,F,I,L,W,Z)}function b(_,F,I,L){v();const W=L.attributes,Z=I.getAttributes(),ie=F.defaultAttributeValues;for(const re in Z){const G=Z[re];if(G.location>=0){let me=W[re];if(me===void 0&&(re==="instanceMatrix"&&_.instanceMatrix&&(me=_.instanceMatrix),re==="instanceColor"&&_.instanceColor&&(me=_.instanceColor)),me!==void 0){const Q=me.normalized,ae=me.itemSize,_e=e.get(me);if(_e===void 0)continue;const Be=_e.buffer,te=_e.type,ge=_e.bytesPerElement,ve=te===t.INT||te===t.UNSIGNED_INT||me.gpuType===ev;if(me.isInterleavedBufferAttribute){const B=me.data,he=B.stride,le=me.offset;if(B.isInstancedInterleavedBuffer){for(let U=0;U<G.locationSize;U++)p(G.location+U,B.meshPerAttribute);_.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let U=0;U<G.locationSize;U++)m(G.location+U);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let U=0;U<G.locationSize;U++)y(G.location+U,ae/G.locationSize,te,Q,he*ge,(le+ae/G.locationSize*U)*ge,ve)}else{if(me.isInstancedBufferAttribute){for(let B=0;B<G.locationSize;B++)p(G.location+B,me.meshPerAttribute);_.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let B=0;B<G.locationSize;B++)m(G.location+B);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let B=0;B<G.locationSize;B++)y(G.location+B,ae/G.locationSize,te,Q,ae*ge,ae/G.locationSize*B*ge,ve)}}else if(ie!==void 0){const Q=ie[re];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(G.location,Q);break;case 3:t.vertexAttrib3fv(G.location,Q);break;case 4:t.vertexAttrib4fv(G.location,Q);break;default:t.vertexAttrib1fv(G.location,Q)}}}}M()}function P(){D();for(const _ in i){const F=i[_];for(const I in F){const L=F[I];for(const W in L)u(L[W].object),delete L[W];delete F[I]}delete i[_]}}function E(_){if(i[_.id]===void 0)return;const F=i[_.id];for(const I in F){const L=F[I];for(const W in L)u(L[W].object),delete L[W];delete F[I]}delete i[_.id]}function C(_){for(const F in i){const I=i[F];if(I[_.id]===void 0)continue;const L=I[_.id];for(const W in L)u(L[W].object),delete L[W];delete I[_.id]}}function D(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:E,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function Gw(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let h=0;h<f;h++)this.render(c[h],u[h]);else{d.multiDrawArraysWEBGL(i,c,0,u,0,f);let h=0;for(let g=0;g<f;g++)h+=u[g];n.update(h,i,1)}}function l(c,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v];for(let v=0;v<d.length;v++)n.update(g,i,d[v])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ww(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){return!(E!==Vn&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const C=E===ja&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Fi&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Ai&&!C)}function l(E){if(E==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=h>0,P=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:g,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:p,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:b,maxSamples:P}}function Xw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new er,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const M=s?0:i,y=M*4;let b=p.clippingState||null;l.value=b,b=u(g,d,y,h);for(let P=0;P!==y;++P)b[P]=n[P];p.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=h+v*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,b=h;y!==v;++y,b+=4)o.copy(f[y]).applyMatrix4(M,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function $w(t){let e=new WeakMap;function n(o,a){return a===Cc?o.mapping=es:a===Rc&&(o.mapping=ts),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Cc||a===Rc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new iT(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class qw extends gv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const kr=4,Rh=[.125,.215,.35,.446,.526,.582],rr=20,Xl=new qw,Ph=new Ze;let $l=null,ql=0,Yl=0,jl=!1;const tr=(1+Math.sqrt(5))/2,Fr=1/tr,Lh=[new J(-tr,Fr,0),new J(tr,Fr,0),new J(-Fr,0,tr),new J(Fr,0,tr),new J(0,tr,-Fr),new J(0,tr,Fr),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)];class Ih{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){$l=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),Yl=this._renderer.getActiveMipmapLevel(),jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($l,ql,Yl),this._renderer.xr.enabled=jl,e.scissorTest=!1,Xo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===es||e.mapping===ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$l=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),Yl=this._renderer.getActiveMipmapLevel(),jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:ja,format:Vn,colorSpace:Hi,depthBuffer:!1},r=Dh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dh(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yw(s)),this._blurMaterial=jw(s,e,n)}return r}_compileMaterial(e){const n=new An(this._lodPlanes[0],e);this._renderer.compile(n,Xl)}_sceneToCubeUV(e,n,i,r){const a=new dn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Ph),u.toneMapping=Ii,u.autoClear=!1;const h=new Ru({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),g=new An(new uo,h);let v=!1;const m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,v=!0):(h.color.copy(Ph),v=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;Xo(r,M*y,p>2?y:0,y,y),u.setRenderTarget(r),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===es||e.mapping===ts;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new An(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Xo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Xl)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Lh[(r-s-1)%Lh.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new An(this._lodPlanes[r],c),d=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*rr-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):rr;m>rr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${rr}`);const p=[];let M=0;for(let C=0;C<rr;++C){const D=C/v,S=Math.exp(-D*D/2);p.push(S),C===0?M+=S:C<m&&(M+=2*S)}for(let C=0;C<p.length;C++)p[C]=p[C]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;const b=this._sizeLods[r],P=3*b*(r>y-kr?r-y+kr:0),E=4*(this._cubeSize-b);Xo(n,P,E,3*b,2*b),l.setRenderTarget(n),l.render(f,Xl)}}function Yw(t){const e=[],n=[],i=[];let r=t;const s=t-kr+1+Rh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-kr?l=Rh[o-t+kr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,v=3,m=2,p=1,M=new Float32Array(v*g*h),y=new Float32Array(m*g*h),b=new Float32Array(p*g*h);for(let E=0;E<h;E++){const C=E%3*2/3-1,D=E>2?0:-1,S=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];M.set(S,v*g*E),y.set(d,m*g*E);const _=[E,E,E,E,E,E];b.set(_,p*g*E)}const P=new li;P.setAttribute("position",new Hn(M,v)),P.setAttribute("uv",new Hn(y,m)),P.setAttribute("faceIndex",new Hn(b,p)),e.push(P),r>kr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Dh(t,e,n){const i=new hr(t,e,n);return i.texture.mapping=Ya,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function jw(t,e,n){const i=new Float32Array(rr),r=new J(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Uh(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Nh(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Pu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Kw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Cc||l===Rc,u=l===es||l===ts;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new Ih(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&r(h)?(n===null&&(n=new Ih(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Zw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Jw(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],t.ARRAY_BUFFER);const h=f.morphAttributes;for(const g in h){const v=h[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],t.ARRAY_BUFFER)}}function c(f){const d=[],h=f.index,g=f.attributes.position;let v=0;if(h!==null){const M=h.array;v=h.version;for(let y=0,b=M.length;y<b;y+=3){const P=M[y+0],E=M[y+1],C=M[y+2];d.push(P,E,E,C,C,P)}}else if(g!==void 0){const M=g.array;v=g.version;for(let y=0,b=M.length/3-1;y<b;y+=3){const P=y+0,E=y+1,C=y+2;d.push(P,E,E,C,C,P)}}else return;const m=new(lv(d)?pv:hv)(d,1);m.version=v;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Qw(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){t.drawElements(i,h,s,d*o),n.update(h,i,1)}function c(d,h,g){g!==0&&(t.drawElementsInstanced(i,h,s,d*o,g),n.update(h,i,g))}function u(d,h,g){if(g===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<g;m++)this.render(d[m]/o,h[m]);else{v.multiDrawElementsWEBGL(i,h,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];n.update(m,i,1)}}function f(d,h,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,h[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,v,0,g);let p=0;for(let M=0;M<g;M++)p+=h[M];for(let M=0;M<v.length;M++)n.update(p,i,v[M])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function eC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function tC(t,e,n){const i=new WeakMap,r=new Pt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let _=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",_)};var h=_;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let b=0;g===!0&&(b=1),v===!0&&(b=2),m===!0&&(b=3);let P=a.attributes.position.count*b,E=1;P>e.maxTextureSize&&(E=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const C=new Float32Array(P*E*4*f),D=new uv(C,P,E,f);D.type=Ai,D.needsUpdate=!0;const S=b*4;for(let F=0;F<f;F++){const I=p[F],L=M[F],W=y[F],Z=P*E*4*F;for(let ie=0;ie<I.count;ie++){const re=ie*S;g===!0&&(r.fromBufferAttribute(I,ie),C[Z+re+0]=r.x,C[Z+re+1]=r.y,C[Z+re+2]=r.z,C[Z+re+3]=0),v===!0&&(r.fromBufferAttribute(L,ie),C[Z+re+4]=r.x,C[Z+re+5]=r.y,C[Z+re+6]=r.z,C[Z+re+7]=0),m===!0&&(r.fromBufferAttribute(W,ie),C[Z+re+8]=r.x,C[Z+re+9]=r.y,C[Z+re+10]=r.z,C[Z+re+11]=W.itemSize===4?r.w:1)}}d={count:f,texture:D,size:new Qe(P,E)},i.set(a,d),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function nC(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class yv extends Kt{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:$r,u!==$r&&u!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===$r&&(i=ns),i===void 0&&u===Ys&&(i=so),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:vn,this.minFilter=l!==void 0?l:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Sv=new Kt,Mv=new yv(1,1);Mv.compareFunction=av;const bv=new uv,Ev=new VE,Tv=new vv,Fh=[],Oh=[],Bh=new Float32Array(16),kh=new Float32Array(9),Vh=new Float32Array(4);function fs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Fh[r];if(s===void 0&&(s=new Float32Array(r),Fh[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Tt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function At(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ja(t,e){let n=Oh[e];n===void 0&&(n=new Int32Array(e),Oh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function iC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function rC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2fv(this.addr,e),At(n,e)}}function sC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tt(n,e))return;t.uniform3fv(this.addr,e),At(n,e)}}function oC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4fv(this.addr,e),At(n,e)}}function aC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),At(n,e)}else{if(Tt(n,i))return;Vh.set(i),t.uniformMatrix2fv(this.addr,!1,Vh),At(n,i)}}function lC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),At(n,e)}else{if(Tt(n,i))return;kh.set(i),t.uniformMatrix3fv(this.addr,!1,kh),At(n,i)}}function cC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),At(n,e)}else{if(Tt(n,i))return;Bh.set(i),t.uniformMatrix4fv(this.addr,!1,Bh),At(n,i)}}function uC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function fC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2iv(this.addr,e),At(n,e)}}function dC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3iv(this.addr,e),At(n,e)}}function hC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4iv(this.addr,e),At(n,e)}}function pC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function mC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2uiv(this.addr,e),At(n,e)}}function gC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3uiv(this.addr,e),At(n,e)}}function vC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4uiv(this.addr,e),At(n,e)}}function _C(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Mv:Sv;n.setTexture2D(e||s,r)}function xC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Ev,r)}function yC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Tv,r)}function SC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||bv,r)}function MC(t){switch(t){case 5126:return iC;case 35664:return rC;case 35665:return sC;case 35666:return oC;case 35674:return aC;case 35675:return lC;case 35676:return cC;case 5124:case 35670:return uC;case 35667:case 35671:return fC;case 35668:case 35672:return dC;case 35669:case 35673:return hC;case 5125:return pC;case 36294:return mC;case 36295:return gC;case 36296:return vC;case 35678:case 36198:case 36298:case 36306:case 35682:return _C;case 35679:case 36299:case 36307:return xC;case 35680:case 36300:case 36308:case 36293:return yC;case 36289:case 36303:case 36311:case 36292:return SC}}function bC(t,e){t.uniform1fv(this.addr,e)}function EC(t,e){const n=fs(e,this.size,2);t.uniform2fv(this.addr,n)}function TC(t,e){const n=fs(e,this.size,3);t.uniform3fv(this.addr,n)}function AC(t,e){const n=fs(e,this.size,4);t.uniform4fv(this.addr,n)}function wC(t,e){const n=fs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function CC(t,e){const n=fs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function RC(t,e){const n=fs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function PC(t,e){t.uniform1iv(this.addr,e)}function LC(t,e){t.uniform2iv(this.addr,e)}function IC(t,e){t.uniform3iv(this.addr,e)}function DC(t,e){t.uniform4iv(this.addr,e)}function UC(t,e){t.uniform1uiv(this.addr,e)}function NC(t,e){t.uniform2uiv(this.addr,e)}function FC(t,e){t.uniform3uiv(this.addr,e)}function OC(t,e){t.uniform4uiv(this.addr,e)}function BC(t,e,n){const i=this.cache,r=e.length,s=Ja(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Sv,s[o])}function kC(t,e,n){const i=this.cache,r=e.length,s=Ja(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Ev,s[o])}function VC(t,e,n){const i=this.cache,r=e.length,s=Ja(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Tv,s[o])}function zC(t,e,n){const i=this.cache,r=e.length,s=Ja(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||bv,s[o])}function HC(t){switch(t){case 5126:return bC;case 35664:return EC;case 35665:return TC;case 35666:return AC;case 35674:return wC;case 35675:return CC;case 35676:return RC;case 5124:case 35670:return PC;case 35667:case 35671:return LC;case 35668:case 35672:return IC;case 35669:case 35673:return DC;case 5125:return UC;case 36294:return NC;case 36295:return FC;case 36296:return OC;case 35678:case 36198:case 36298:case 36306:case 35682:return BC;case 35679:case 36299:case 36307:return kC;case 35680:case 36300:case 36308:case 36293:return VC;case 36289:case 36303:case 36311:case 36292:return zC}}class GC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=MC(n.type)}}class WC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=HC(n.type)}}class XC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Kl=/(\w+)(\])?(\[|\.)?/g;function zh(t,e){t.seq.push(e),t.map[e.id]=e}function $C(t,e,n){const i=t.name,r=i.length;for(Kl.lastIndex=0;;){const s=Kl.exec(i),o=Kl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){zh(n,c===void 0?new GC(a,t,e):new WC(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new XC(a),zh(n,f)),n=f}}}class Qo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);$C(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Hh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const qC=37297;let YC=0;function jC(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function KC(t){const e=st.getPrimaries(st.workingColorSpace),n=st.getPrimaries(t);let i;switch(e===n?i="":e===Sa&&n===ya?i="LinearDisplayP3ToLinearSRGB":e===ya&&n===Sa&&(i="LinearSRGBToLinearDisplayP3"),t){case Hi:case Ka:return[i,"LinearTransferOETF"];case Dn:case wu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Gh(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+jC(t.getShaderSource(e),o)}else return r}function ZC(t,e){const n=KC(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function JC(t,e){let n;switch(e){case rE:n="Linear";break;case sE:n="Reinhard";break;case oE:n="OptimizedCineon";break;case aE:n="ACESFilmic";break;case cE:n="AgX";break;case uE:n="Neutral";break;case lE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function QC(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Es).join(`
`)}function e1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function t1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Es(t){return t!==""}function Wh(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const n1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dc(t){return t.replace(n1,r1)}const i1=new Map;function r1(t,e){let n=He[e];if(n===void 0){const i=i1.get(e);if(i!==void 0)n=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Dc(n)}const s1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $h(t){return t.replace(s1,o1)}function o1(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function qh(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function a1(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Zg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Pb?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function l1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case es:case ts:e="ENVMAP_TYPE_CUBE";break;case Ya:e="ENVMAP_TYPE_CUBE_UV";break}return e}function c1(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ts:e="ENVMAP_MODE_REFRACTION";break}return e}function u1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Au:e="ENVMAP_BLENDING_MULTIPLY";break;case nE:e="ENVMAP_BLENDING_MIX";break;case iE:e="ENVMAP_BLENDING_ADD";break}return e}function f1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function d1(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=a1(n),c=l1(n),u=c1(n),f=u1(n),d=f1(n),h=QC(n),g=e1(s),v=r.createProgram();let m,p,M=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Es).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Es).join(`
`),p.length>0&&(p+=`
`)):(m=[qh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),p=[qh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ii?"#define TONE_MAPPING":"",n.toneMapping!==Ii?He.tonemapping_pars_fragment:"",n.toneMapping!==Ii?JC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,ZC("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Es).join(`
`)),o=Dc(o),o=Wh(o,n),o=Xh(o,n),a=Dc(a),a=Wh(a,n),a=Xh(a,n),o=$h(o),a=$h(a),n.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=M+m+o,b=M+p+a,P=Hh(r,r.VERTEX_SHADER,y),E=Hh(r,r.FRAGMENT_SHADER,b);r.attachShader(v,P),r.attachShader(v,E),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(F){if(t.debug.checkShaderErrors){const I=r.getProgramInfoLog(v).trim(),L=r.getShaderInfoLog(P).trim(),W=r.getShaderInfoLog(E).trim();let Z=!0,ie=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,P,E);else{const re=Gh(r,P,"vertex"),G=Gh(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+I+`
`+re+`
`+G)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(L===""||W==="")&&(ie=!1);ie&&(F.diagnostics={runnable:Z,programLog:I,vertexShader:{log:L,prefix:m},fragmentShader:{log:W,prefix:p}})}r.deleteShader(P),r.deleteShader(E),D=new Qo(r,v),S=t1(r,v)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let _=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(v,qC)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=YC++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=E,this}let h1=0;class p1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new m1(e),n.set(e,i)),i}}class m1{constructor(e){this.id=h1++,this.code=e,this.usedTimes=0}}function g1(t,e,n,i,r,s,o){const a=new fv,l=new p1,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let h=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,_,F,I,L){const W=I.fog,Z=L.geometry,ie=S.isMeshStandardMaterial?I.environment:null,re=(S.isMeshStandardMaterial?n:e).get(S.envMap||ie),G=re&&re.mapping===Ya?re.image.height:null,me=g[S.type];S.precision!==null&&(h=r.getMaxPrecision(S.precision),h!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const Q=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ae=Q!==void 0?Q.length:0;let _e=0;Z.morphAttributes.position!==void 0&&(_e=1),Z.morphAttributes.normal!==void 0&&(_e=2),Z.morphAttributes.color!==void 0&&(_e=3);let Be,te,ge,ve;if(me){const it=Nn[me];Be=it.vertexShader,te=it.fragmentShader}else Be=S.vertexShader,te=S.fragmentShader,l.update(S),ge=l.getVertexShaderID(S),ve=l.getFragmentShaderID(S);const B=t.getRenderTarget(),he=L.isInstancedMesh===!0,le=L.isBatchedMesh===!0,U=!!S.map,Pe=!!S.matcap,ye=!!re,w=!!S.aoMap,R=!!S.lightMap,z=!!S.bumpMap,q=!!S.normalMap,$=!!S.displacementMap,ue=!!S.emissiveMap,T=!!S.metalnessMap,x=!!S.roughnessMap,N=S.anisotropy>0,O=S.clearcoat>0,X=S.dispersion>0,K=S.iridescence>0,fe=S.sheen>0,se=S.transmission>0,ce=N&&!!S.anisotropyMap,Ee=O&&!!S.clearcoatMap,de=O&&!!S.clearcoatNormalMap,be=O&&!!S.clearcoatRoughnessMap,Fe=K&&!!S.iridescenceMap,Le=K&&!!S.iridescenceThicknessMap,Te=fe&&!!S.sheenColorMap,Oe=fe&&!!S.sheenRoughnessMap,We=!!S.specularMap,qe=!!S.specularColorMap,Ie=!!S.specularIntensityMap,V=se&&!!S.transmissionMap,pe=se&&!!S.thicknessMap,oe=!!S.gradientMap,Se=!!S.alphaMap,Ae=S.alphaTest>0,et=!!S.alphaHash,ct=!!S.extensions;let vt=Ii;S.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(vt=t.toneMapping);const Lt={shaderID:me,shaderType:S.type,shaderName:S.name,vertexShader:Be,fragmentShader:te,defines:S.defines,customVertexShaderID:ge,customFragmentShaderID:ve,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:le,instancing:he,instancingColor:he&&L.instanceColor!==null,instancingMorph:he&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:B===null?t.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Hi,alphaToCoverage:!!S.alphaToCoverage,map:U,matcap:Pe,envMap:ye,envMapMode:ye&&re.mapping,envMapCubeUVHeight:G,aoMap:w,lightMap:R,bumpMap:z,normalMap:q,displacementMap:d&&$,emissiveMap:ue,normalMapObjectSpace:q&&S.normalMapType===EE,normalMapTangentSpace:q&&S.normalMapType===ov,metalnessMap:T,roughnessMap:x,anisotropy:N,anisotropyMap:ce,clearcoat:O,clearcoatMap:Ee,clearcoatNormalMap:de,clearcoatRoughnessMap:be,dispersion:X,iridescence:K,iridescenceMap:Fe,iridescenceThicknessMap:Le,sheen:fe,sheenColorMap:Te,sheenRoughnessMap:Oe,specularMap:We,specularColorMap:qe,specularIntensityMap:Ie,transmission:se,transmissionMap:V,thicknessMap:pe,gradientMap:oe,opaque:S.transparent===!1&&S.blending===Xr&&S.alphaToCoverage===!1,alphaMap:Se,alphaTest:Ae,alphaHash:et,combine:S.combine,mapUv:U&&v(S.map.channel),aoMapUv:w&&v(S.aoMap.channel),lightMapUv:R&&v(S.lightMap.channel),bumpMapUv:z&&v(S.bumpMap.channel),normalMapUv:q&&v(S.normalMap.channel),displacementMapUv:$&&v(S.displacementMap.channel),emissiveMapUv:ue&&v(S.emissiveMap.channel),metalnessMapUv:T&&v(S.metalnessMap.channel),roughnessMapUv:x&&v(S.roughnessMap.channel),anisotropyMapUv:ce&&v(S.anisotropyMap.channel),clearcoatMapUv:Ee&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:de&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&v(S.sheenRoughnessMap.channel),specularMapUv:We&&v(S.specularMap.channel),specularColorMapUv:qe&&v(S.specularColorMap.channel),specularIntensityMapUv:Ie&&v(S.specularIntensityMap.channel),transmissionMapUv:V&&v(S.transmissionMap.channel),thicknessMapUv:pe&&v(S.thicknessMap.channel),alphaMapUv:Se&&v(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(q||N),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!Z.attributes.uv&&(U||Se),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:L.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:_e,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&F.length>0,shadowMapType:t.shadowMap.type,toneMapping:vt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:U&&S.map.isVideoTexture===!0&&st.getTransfer(S.map.colorSpace)===ut,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ti,flipSided:S.side===jt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ct&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ct&&S.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Lt.vertexUv1s=c.has(1),Lt.vertexUv2s=c.has(2),Lt.vertexUv3s=c.has(3),c.clear(),Lt}function p(S){const _=[];if(S.shaderID?_.push(S.shaderID):(_.push(S.customVertexShaderID),_.push(S.customFragmentShaderID)),S.defines!==void 0)for(const F in S.defines)_.push(F),_.push(S.defines[F]);return S.isRawShaderMaterial===!1&&(M(_,S),y(_,S),_.push(t.outputColorSpace)),_.push(S.customProgramCacheKey),_.join()}function M(S,_){S.push(_.precision),S.push(_.outputColorSpace),S.push(_.envMapMode),S.push(_.envMapCubeUVHeight),S.push(_.mapUv),S.push(_.alphaMapUv),S.push(_.lightMapUv),S.push(_.aoMapUv),S.push(_.bumpMapUv),S.push(_.normalMapUv),S.push(_.displacementMapUv),S.push(_.emissiveMapUv),S.push(_.metalnessMapUv),S.push(_.roughnessMapUv),S.push(_.anisotropyMapUv),S.push(_.clearcoatMapUv),S.push(_.clearcoatNormalMapUv),S.push(_.clearcoatRoughnessMapUv),S.push(_.iridescenceMapUv),S.push(_.iridescenceThicknessMapUv),S.push(_.sheenColorMapUv),S.push(_.sheenRoughnessMapUv),S.push(_.specularMapUv),S.push(_.specularColorMapUv),S.push(_.specularIntensityMapUv),S.push(_.transmissionMapUv),S.push(_.thicknessMapUv),S.push(_.combine),S.push(_.fogExp2),S.push(_.sizeAttenuation),S.push(_.morphTargetsCount),S.push(_.morphAttributeCount),S.push(_.numDirLights),S.push(_.numPointLights),S.push(_.numSpotLights),S.push(_.numSpotLightMaps),S.push(_.numHemiLights),S.push(_.numRectAreaLights),S.push(_.numDirLightShadows),S.push(_.numPointLightShadows),S.push(_.numSpotLightShadows),S.push(_.numSpotLightShadowsWithMaps),S.push(_.numLightProbes),S.push(_.shadowMapType),S.push(_.toneMapping),S.push(_.numClippingPlanes),S.push(_.numClipIntersection),S.push(_.depthPacking)}function y(S,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),S.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.skinning&&a.enable(4),_.morphTargets&&a.enable(5),_.morphNormals&&a.enable(6),_.morphColors&&a.enable(7),_.premultipliedAlpha&&a.enable(8),_.shadowMapEnabled&&a.enable(9),_.useLegacyLights&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.alphaToCoverage&&a.enable(20),S.push(a.mask)}function b(S){const _=g[S.type];let F;if(_){const I=Nn[_];F=QE.clone(I.uniforms)}else F=S.uniforms;return F}function P(S,_){let F;for(let I=0,L=u.length;I<L;I++){const W=u[I];if(W.cacheKey===_){F=W,++F.usedTimes;break}}return F===void 0&&(F=new d1(t,_,S,s),u.push(F)),F}function E(S){if(--S.usedTimes===0){const _=u.indexOf(S);u[_]=u[u.length-1],u.pop(),S.destroy()}}function C(S){l.remove(S)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:P,releaseProgram:E,releaseShaderCache:C,programs:u,dispose:D}}function v1(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function _1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Yh(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function jh(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,h,g,v,m){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},t[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=v,p.group=m),e++,p}function a(f,d,h,g,v,m){const p=o(f,d,h,g,v,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):n.push(p)}function l(f,d,h,g,v,m){const p=o(f,d,h,g,v,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):n.unshift(p)}function c(f,d){n.length>1&&n.sort(f||_1),i.length>1&&i.sort(d||Yh),r.length>1&&r.sort(d||Yh)}function u(){for(let f=e,d=t.length;f<d;f++){const h=t[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function x1(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new jh,t.set(i,[o])):r>=s.length?(o=new jh,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function y1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new J,color:new Ze};break;case"SpotLight":n={position:new J,direction:new J,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new J,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new J,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new J,halfWidth:new J,halfHeight:new J};break}return t[e.id]=n,n}}}function S1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let M1=0;function b1(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function E1(t){const e=new y1,n=S1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new J);const r=new J,s=new Et,o=new Et;function a(c,u){let f=0,d=0,h=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let g=0,v=0,m=0,p=0,M=0,y=0,b=0,P=0,E=0,C=0,D=0;c.sort(b1);const S=u===!0?Math.PI:1;for(let F=0,I=c.length;F<I;F++){const L=c[F],W=L.color,Z=L.intensity,ie=L.distance,re=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=W.r*Z*S,d+=W.g*Z*S,h+=W.b*Z*S;else if(L.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(L.sh.coefficients[G],Z);D++}else if(L.isDirectionalLight){const G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity*S),L.castShadow){const me=L.shadow,Q=n.get(L);Q.shadowBias=me.bias,Q.shadowNormalBias=me.normalBias,Q.shadowRadius=me.radius,Q.shadowMapSize=me.mapSize,i.directionalShadow[g]=Q,i.directionalShadowMap[g]=re,i.directionalShadowMatrix[g]=L.shadow.matrix,y++}i.directional[g]=G,g++}else if(L.isSpotLight){const G=e.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(W).multiplyScalar(Z*S),G.distance=ie,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,i.spot[m]=G;const me=L.shadow;if(L.map&&(i.spotLightMap[E]=L.map,E++,me.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[m]=me.matrix,L.castShadow){const Q=n.get(L);Q.shadowBias=me.bias,Q.shadowNormalBias=me.normalBias,Q.shadowRadius=me.radius,Q.shadowMapSize=me.mapSize,i.spotShadow[m]=Q,i.spotShadowMap[m]=re,P++}m++}else if(L.isRectAreaLight){const G=e.get(L);G.color.copy(W).multiplyScalar(Z),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),i.rectArea[p]=G,p++}else if(L.isPointLight){const G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity*S),G.distance=L.distance,G.decay=L.decay,L.castShadow){const me=L.shadow,Q=n.get(L);Q.shadowBias=me.bias,Q.shadowNormalBias=me.normalBias,Q.shadowRadius=me.radius,Q.shadowMapSize=me.mapSize,Q.shadowCameraNear=me.camera.near,Q.shadowCameraFar=me.camera.far,i.pointShadow[v]=Q,i.pointShadowMap[v]=re,i.pointShadowMatrix[v]=L.shadow.matrix,b++}i.point[v]=G,v++}else if(L.isHemisphereLight){const G=e.get(L);G.skyColor.copy(L.color).multiplyScalar(Z*S),G.groundColor.copy(L.groundColor).multiplyScalar(Z*S),i.hemi[M]=G,M++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;const _=i.hash;(_.directionalLength!==g||_.pointLength!==v||_.spotLength!==m||_.rectAreaLength!==p||_.hemiLength!==M||_.numDirectionalShadows!==y||_.numPointShadows!==b||_.numSpotShadows!==P||_.numSpotMaps!==E||_.numLightProbes!==D)&&(i.directional.length=g,i.spot.length=m,i.rectArea.length=p,i.point.length=v,i.hemi.length=M,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=P+E-C,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=D,_.directionalLength=g,_.pointLength=v,_.spotLength=m,_.rectAreaLength=p,_.hemiLength=M,_.numDirectionalShadows=y,_.numPointShadows=b,_.numSpotShadows=P,_.numSpotMaps=E,_.numLightProbes=D,i.version=M1++)}function l(c,u){let f=0,d=0,h=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const y=c[p];if(y.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),f++}else if(y.isSpotLight){const b=i.spot[h];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),h++}else if(y.isRectAreaLight){const b=i.rectArea[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const b=i.point[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const b=i.hemi[v];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Kh(t){const e=new E1(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(u){e.setup(n,u)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function T1(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Kh(t),e.set(r,[a])):s>=o.length?(a=new Kh(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class A1 extends co{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ME,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class w1 extends co{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const C1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function P1(t,e,n){let i=new _v;const r=new Qe,s=new Qe,o=new Pt,a=new A1({depthPacking:bE}),l=new w1,c={},u=n.maxTextureSize,f={[Ni]:jt,[jt]:Ni,[ti]:ti},d=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:C1,fragmentShader:R1}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new li;g.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new An(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zg;let p=this.type;this.render=function(E,C,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const S=t.getRenderTarget(),_=t.getActiveCubeFace(),F=t.getActiveMipmapLevel(),I=t.state;I.setBlending(Li),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const L=p!==Qn&&this.type===Qn,W=p===Qn&&this.type!==Qn;for(let Z=0,ie=E.length;Z<ie;Z++){const re=E[Z],G=re.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const me=G.getFrameExtents();if(r.multiply(me),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/me.x),r.x=s.x*me.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/me.y),r.y=s.y*me.y,G.mapSize.y=s.y)),G.map===null||L===!0||W===!0){const ae=this.type!==Qn?{minFilter:vn,magFilter:vn}:{};G.map!==null&&G.map.dispose(),G.map=new hr(r.x,r.y,ae),G.map.texture.name=re.name+".shadowMap",G.camera.updateProjectionMatrix()}t.setRenderTarget(G.map),t.clear();const Q=G.getViewportCount();for(let ae=0;ae<Q;ae++){const _e=G.getViewport(ae);o.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),I.viewport(o),G.updateMatrices(re,ae),i=G.getFrustum(),b(C,D,G.camera,re,this.type)}G.isPointLightShadow!==!0&&this.type===Qn&&M(G,D),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(S,_,F)};function M(E,C){const D=e.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,h.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new hr(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(C,null,D,d,v,null),h.uniforms.shadow_pass.value=E.mapPass.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(C,null,D,h,v,null)}function y(E,C,D,S){let _=null;const F=D.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(F!==void 0)_=F;else if(_=D.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const I=_.uuid,L=C.uuid;let W=c[I];W===void 0&&(W={},c[I]=W);let Z=W[L];Z===void 0&&(Z=_.clone(),W[L]=Z,C.addEventListener("dispose",P)),_=Z}if(_.visible=C.visible,_.wireframe=C.wireframe,S===Qn?_.side=C.shadowSide!==null?C.shadowSide:C.side:_.side=C.shadowSide!==null?C.shadowSide:f[C.side],_.alphaMap=C.alphaMap,_.alphaTest=C.alphaTest,_.map=C.map,_.clipShadows=C.clipShadows,_.clippingPlanes=C.clippingPlanes,_.clipIntersection=C.clipIntersection,_.displacementMap=C.displacementMap,_.displacementScale=C.displacementScale,_.displacementBias=C.displacementBias,_.wireframeLinewidth=C.wireframeLinewidth,_.linewidth=C.linewidth,D.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const I=t.properties.get(_);I.light=D}return _}function b(E,C,D,S,_){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&_===Qn)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,E.matrixWorld);const L=e.update(E),W=E.material;if(Array.isArray(W)){const Z=L.groups;for(let ie=0,re=Z.length;ie<re;ie++){const G=Z[ie],me=W[G.materialIndex];if(me&&me.visible){const Q=y(E,me,S,_);E.onBeforeShadow(t,E,C,D,L,Q,G),t.renderBufferDirect(D,null,L,Q,E,G),E.onAfterShadow(t,E,C,D,L,Q,G)}}}else if(W.visible){const Z=y(E,W,S,_);E.onBeforeShadow(t,E,C,D,L,Z,null),t.renderBufferDirect(D,null,L,Z,E,null),E.onAfterShadow(t,E,C,D,L,Z,null)}}const I=E.children;for(let L=0,W=I.length;L<W;L++)b(I[L],C,D,S,_)}function P(E){E.target.removeEventListener("dispose",P);for(const D in c){const S=c[D],_=E.target.uuid;_ in S&&(S[_].dispose(),delete S[_])}}}function L1(t){function e(){let V=!1;const pe=new Pt;let oe=null;const Se=new Pt(0,0,0,0);return{setMask:function(Ae){oe!==Ae&&!V&&(t.colorMask(Ae,Ae,Ae,Ae),oe=Ae)},setLocked:function(Ae){V=Ae},setClear:function(Ae,et,ct,vt,Lt){Lt===!0&&(Ae*=vt,et*=vt,ct*=vt),pe.set(Ae,et,ct,vt),Se.equals(pe)===!1&&(t.clearColor(Ae,et,ct,vt),Se.copy(pe))},reset:function(){V=!1,oe=null,Se.set(-1,0,0,0)}}}function n(){let V=!1,pe=null,oe=null,Se=null;return{setTest:function(Ae){Ae?ve(t.DEPTH_TEST):B(t.DEPTH_TEST)},setMask:function(Ae){pe!==Ae&&!V&&(t.depthMask(Ae),pe=Ae)},setFunc:function(Ae){if(oe!==Ae){switch(Ae){case jb:t.depthFunc(t.NEVER);break;case Kb:t.depthFunc(t.ALWAYS);break;case Zb:t.depthFunc(t.LESS);break;case _a:t.depthFunc(t.LEQUAL);break;case Jb:t.depthFunc(t.EQUAL);break;case Qb:t.depthFunc(t.GEQUAL);break;case eE:t.depthFunc(t.GREATER);break;case tE:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}oe=Ae}},setLocked:function(Ae){V=Ae},setClear:function(Ae){Se!==Ae&&(t.clearDepth(Ae),Se=Ae)},reset:function(){V=!1,pe=null,oe=null,Se=null}}}function i(){let V=!1,pe=null,oe=null,Se=null,Ae=null,et=null,ct=null,vt=null,Lt=null;return{setTest:function(it){V||(it?ve(t.STENCIL_TEST):B(t.STENCIL_TEST))},setMask:function(it){pe!==it&&!V&&(t.stencilMask(it),pe=it)},setFunc:function(it,Ln,Bt){(oe!==it||Se!==Ln||Ae!==Bt)&&(t.stencilFunc(it,Ln,Bt),oe=it,Se=Ln,Ae=Bt)},setOp:function(it,Ln,Bt){(et!==it||ct!==Ln||vt!==Bt)&&(t.stencilOp(it,Ln,Bt),et=it,ct=Ln,vt=Bt)},setLocked:function(it){V=it},setClear:function(it){Lt!==it&&(t.clearStencil(it),Lt=it)},reset:function(){V=!1,pe=null,oe=null,Se=null,Ae=null,et=null,ct=null,vt=null,Lt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,d=[],h=null,g=!1,v=null,m=null,p=null,M=null,y=null,b=null,P=null,E=new Ze(0,0,0),C=0,D=!1,S=null,_=null,F=null,I=null,L=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,ie=0;const re=t.getParameter(t.VERSION);re.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(re)[1]),Z=ie>=1):re.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),Z=ie>=2);let G=null,me={};const Q=t.getParameter(t.SCISSOR_BOX),ae=t.getParameter(t.VIEWPORT),_e=new Pt().fromArray(Q),Be=new Pt().fromArray(ae);function te(V,pe,oe,Se){const Ae=new Uint8Array(4),et=t.createTexture();t.bindTexture(V,et),t.texParameteri(V,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(V,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ct=0;ct<oe;ct++)V===t.TEXTURE_3D||V===t.TEXTURE_2D_ARRAY?t.texImage3D(pe,0,t.RGBA,1,1,Se,0,t.RGBA,t.UNSIGNED_BYTE,Ae):t.texImage2D(pe+ct,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ae);return et}const ge={};ge[t.TEXTURE_2D]=te(t.TEXTURE_2D,t.TEXTURE_2D,1),ge[t.TEXTURE_CUBE_MAP]=te(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[t.TEXTURE_2D_ARRAY]=te(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ge[t.TEXTURE_3D]=te(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ve(t.DEPTH_TEST),s.setFunc(_a),z(!1),q(Ld),ve(t.CULL_FACE),w(Li);function ve(V){c[V]!==!0&&(t.enable(V),c[V]=!0)}function B(V){c[V]!==!1&&(t.disable(V),c[V]=!1)}function he(V,pe){return u[V]!==pe?(t.bindFramebuffer(V,pe),u[V]=pe,V===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=pe),V===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=pe),!0):!1}function le(V,pe){let oe=d,Se=!1;if(V){oe=f.get(pe),oe===void 0&&(oe=[],f.set(pe,oe));const Ae=V.textures;if(oe.length!==Ae.length||oe[0]!==t.COLOR_ATTACHMENT0){for(let et=0,ct=Ae.length;et<ct;et++)oe[et]=t.COLOR_ATTACHMENT0+et;oe.length=Ae.length,Se=!0}}else oe[0]!==t.BACK&&(oe[0]=t.BACK,Se=!0);Se&&t.drawBuffers(oe)}function U(V){return h!==V?(t.useProgram(V),h=V,!0):!1}const Pe={[ir]:t.FUNC_ADD,[Ib]:t.FUNC_SUBTRACT,[Db]:t.FUNC_REVERSE_SUBTRACT};Pe[Ub]=t.MIN,Pe[Nb]=t.MAX;const ye={[Fb]:t.ZERO,[Ob]:t.ONE,[Bb]:t.SRC_COLOR,[Ac]:t.SRC_ALPHA,[Wb]:t.SRC_ALPHA_SATURATE,[Hb]:t.DST_COLOR,[Vb]:t.DST_ALPHA,[kb]:t.ONE_MINUS_SRC_COLOR,[wc]:t.ONE_MINUS_SRC_ALPHA,[Gb]:t.ONE_MINUS_DST_COLOR,[zb]:t.ONE_MINUS_DST_ALPHA,[Xb]:t.CONSTANT_COLOR,[$b]:t.ONE_MINUS_CONSTANT_COLOR,[qb]:t.CONSTANT_ALPHA,[Yb]:t.ONE_MINUS_CONSTANT_ALPHA};function w(V,pe,oe,Se,Ae,et,ct,vt,Lt,it){if(V===Li){g===!0&&(B(t.BLEND),g=!1);return}if(g===!1&&(ve(t.BLEND),g=!0),V!==Lb){if(V!==v||it!==D){if((m!==ir||y!==ir)&&(t.blendEquation(t.FUNC_ADD),m=ir,y=ir),it)switch(V){case Xr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Id:t.blendFunc(t.ONE,t.ONE);break;case Dd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ud:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Xr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Id:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Dd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ud:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}p=null,M=null,b=null,P=null,E.set(0,0,0),C=0,v=V,D=it}return}Ae=Ae||pe,et=et||oe,ct=ct||Se,(pe!==m||Ae!==y)&&(t.blendEquationSeparate(Pe[pe],Pe[Ae]),m=pe,y=Ae),(oe!==p||Se!==M||et!==b||ct!==P)&&(t.blendFuncSeparate(ye[oe],ye[Se],ye[et],ye[ct]),p=oe,M=Se,b=et,P=ct),(vt.equals(E)===!1||Lt!==C)&&(t.blendColor(vt.r,vt.g,vt.b,Lt),E.copy(vt),C=Lt),v=V,D=!1}function R(V,pe){V.side===ti?B(t.CULL_FACE):ve(t.CULL_FACE);let oe=V.side===jt;pe&&(oe=!oe),z(oe),V.blending===Xr&&V.transparent===!1?w(Li):w(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),s.setFunc(V.depthFunc),s.setTest(V.depthTest),s.setMask(V.depthWrite),r.setMask(V.colorWrite);const Se=V.stencilWrite;o.setTest(Se),Se&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ue(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ve(t.SAMPLE_ALPHA_TO_COVERAGE):B(t.SAMPLE_ALPHA_TO_COVERAGE)}function z(V){S!==V&&(V?t.frontFace(t.CW):t.frontFace(t.CCW),S=V)}function q(V){V!==Cb?(ve(t.CULL_FACE),V!==_&&(V===Ld?t.cullFace(t.BACK):V===Rb?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):B(t.CULL_FACE),_=V}function $(V){V!==F&&(Z&&t.lineWidth(V),F=V)}function ue(V,pe,oe){V?(ve(t.POLYGON_OFFSET_FILL),(I!==pe||L!==oe)&&(t.polygonOffset(pe,oe),I=pe,L=oe)):B(t.POLYGON_OFFSET_FILL)}function T(V){V?ve(t.SCISSOR_TEST):B(t.SCISSOR_TEST)}function x(V){V===void 0&&(V=t.TEXTURE0+W-1),G!==V&&(t.activeTexture(V),G=V)}function N(V,pe,oe){oe===void 0&&(G===null?oe=t.TEXTURE0+W-1:oe=G);let Se=me[oe];Se===void 0&&(Se={type:void 0,texture:void 0},me[oe]=Se),(Se.type!==V||Se.texture!==pe)&&(G!==oe&&(t.activeTexture(oe),G=oe),t.bindTexture(V,pe||ge[V]),Se.type=V,Se.texture=pe)}function O(){const V=me[G];V!==void 0&&V.type!==void 0&&(t.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function X(){try{t.compressedTexImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function K(){try{t.compressedTexImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function fe(){try{t.texSubImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function se(){try{t.texSubImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ce(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ee(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function de(){try{t.texStorage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function be(){try{t.texStorage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Fe(){try{t.texImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Le(){try{t.texImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Te(V){_e.equals(V)===!1&&(t.scissor(V.x,V.y,V.z,V.w),_e.copy(V))}function Oe(V){Be.equals(V)===!1&&(t.viewport(V.x,V.y,V.z,V.w),Be.copy(V))}function We(V,pe){let oe=l.get(pe);oe===void 0&&(oe=new WeakMap,l.set(pe,oe));let Se=oe.get(V);Se===void 0&&(Se=t.getUniformBlockIndex(pe,V.name),oe.set(V,Se))}function qe(V,pe){const Se=l.get(pe).get(V);a.get(pe)!==Se&&(t.uniformBlockBinding(pe,Se,V.__bindingPointIndex),a.set(pe,Se))}function Ie(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},G=null,me={},u={},f=new WeakMap,d=[],h=null,g=!1,v=null,m=null,p=null,M=null,y=null,b=null,P=null,E=new Ze(0,0,0),C=0,D=!1,S=null,_=null,F=null,I=null,L=null,_e.set(0,0,t.canvas.width,t.canvas.height),Be.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ve,disable:B,bindFramebuffer:he,drawBuffers:le,useProgram:U,setBlending:w,setMaterial:R,setFlipSided:z,setCullFace:q,setLineWidth:$,setPolygonOffset:ue,setScissorTest:T,activeTexture:x,bindTexture:N,unbindTexture:O,compressedTexImage2D:X,compressedTexImage3D:K,texImage2D:Fe,texImage3D:Le,updateUBOMapping:We,uniformBlockBinding:qe,texStorage2D:de,texStorage3D:be,texSubImage2D:fe,texSubImage3D:se,compressedTexSubImage2D:ce,compressedTexSubImage3D:Ee,scissor:Te,viewport:Oe,reset:Ie}}function I1(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qe,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return h?new OffscreenCanvas(T,x):ba("canvas")}function v(T,x,N){let O=1;const X=ue(T);if((X.width>N||X.height>N)&&(O=N/Math.max(X.width,X.height)),O<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const K=Math.floor(O*X.width),fe=Math.floor(O*X.height);f===void 0&&(f=g(K,fe));const se=x?g(K,fe):f;return se.width=K,se.height=fe,se.getContext("2d").drawImage(T,0,0,K,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+K+"x"+fe+")."),se}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),T;return T}function m(T){return T.generateMipmaps&&T.minFilter!==vn&&T.minFilter!==Tn}function p(T){t.generateMipmap(T)}function M(T,x,N,O,X=!1){if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let K=x;if(x===t.RED&&(N===t.FLOAT&&(K=t.R32F),N===t.HALF_FLOAT&&(K=t.R16F),N===t.UNSIGNED_BYTE&&(K=t.R8)),x===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&(K=t.R8UI),N===t.UNSIGNED_SHORT&&(K=t.R16UI),N===t.UNSIGNED_INT&&(K=t.R32UI),N===t.BYTE&&(K=t.R8I),N===t.SHORT&&(K=t.R16I),N===t.INT&&(K=t.R32I)),x===t.RG&&(N===t.FLOAT&&(K=t.RG32F),N===t.HALF_FLOAT&&(K=t.RG16F),N===t.UNSIGNED_BYTE&&(K=t.RG8)),x===t.RG_INTEGER&&(N===t.UNSIGNED_BYTE&&(K=t.RG8UI),N===t.UNSIGNED_SHORT&&(K=t.RG16UI),N===t.UNSIGNED_INT&&(K=t.RG32UI),N===t.BYTE&&(K=t.RG8I),N===t.SHORT&&(K=t.RG16I),N===t.INT&&(K=t.RG32I)),x===t.RGB&&N===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),x===t.RGBA){const fe=X?xa:st.getTransfer(O);N===t.FLOAT&&(K=t.RGBA32F),N===t.HALF_FLOAT&&(K=t.RGBA16F),N===t.UNSIGNED_BYTE&&(K=fe===ut?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function y(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==vn&&T.minFilter!==Tn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function b(T){const x=T.target;x.removeEventListener("dispose",b),E(x),x.isVideoTexture&&u.delete(x)}function P(T){const x=T.target;x.removeEventListener("dispose",P),D(x)}function E(T){const x=i.get(T);if(x.__webglInit===void 0)return;const N=T.source,O=d.get(N);if(O){const X=O[x.__cacheKey];X.usedTimes--,X.usedTimes===0&&C(T),Object.keys(O).length===0&&d.delete(N)}i.remove(T)}function C(T){const x=i.get(T);t.deleteTexture(x.__webglTexture);const N=T.source,O=d.get(N);delete O[x.__cacheKey],o.memory.textures--}function D(T){const x=i.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(x.__webglFramebuffer[O]))for(let X=0;X<x.__webglFramebuffer[O].length;X++)t.deleteFramebuffer(x.__webglFramebuffer[O][X]);else t.deleteFramebuffer(x.__webglFramebuffer[O]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[O])}else{if(Array.isArray(x.__webglFramebuffer))for(let O=0;O<x.__webglFramebuffer.length;O++)t.deleteFramebuffer(x.__webglFramebuffer[O]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let O=0;O<x.__webglColorRenderbuffer.length;O++)x.__webglColorRenderbuffer[O]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[O]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const N=T.textures;for(let O=0,X=N.length;O<X;O++){const K=i.get(N[O]);K.__webglTexture&&(t.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(N[O])}i.remove(T)}let S=0;function _(){S=0}function F(){const T=S;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),S+=1,T}function I(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function L(T,x){const N=i.get(T);if(T.isVideoTexture&&q(T),T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){const O=T.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(N,T,x);return}}n.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+x)}function W(T,x){const N=i.get(T);if(T.version>0&&N.__version!==T.version){_e(N,T,x);return}n.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+x)}function Z(T,x){const N=i.get(T);if(T.version>0&&N.__version!==T.version){_e(N,T,x);return}n.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+x)}function ie(T,x){const N=i.get(T);if(T.version>0&&N.__version!==T.version){Be(N,T,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+x)}const re={[Pc]:t.REPEAT,[or]:t.CLAMP_TO_EDGE,[Lc]:t.MIRRORED_REPEAT},G={[vn]:t.NEAREST,[fE]:t.NEAREST_MIPMAP_NEAREST,[Eo]:t.NEAREST_MIPMAP_LINEAR,[Tn]:t.LINEAR,[xl]:t.LINEAR_MIPMAP_NEAREST,[ar]:t.LINEAR_MIPMAP_LINEAR},me={[TE]:t.NEVER,[LE]:t.ALWAYS,[AE]:t.LESS,[av]:t.LEQUAL,[wE]:t.EQUAL,[PE]:t.GEQUAL,[CE]:t.GREATER,[RE]:t.NOTEQUAL};function Q(T,x){if(x.type===Ai&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Tn||x.magFilter===xl||x.magFilter===Eo||x.magFilter===ar||x.minFilter===Tn||x.minFilter===xl||x.minFilter===Eo||x.minFilter===ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,re[x.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,re[x.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,re[x.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,G[x.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,G[x.minFilter]),x.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,me[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===vn||x.minFilter!==Eo&&x.minFilter!==ar||x.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ae(T,x){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",b));const O=x.source;let X=d.get(O);X===void 0&&(X={},d.set(O,X));const K=I(x);if(K!==T.__cacheKey){X[K]===void 0&&(X[K]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,N=!0),X[K].usedTimes++;const fe=X[T.__cacheKey];fe!==void 0&&(X[T.__cacheKey].usedTimes--,fe.usedTimes===0&&C(x)),T.__cacheKey=K,T.__webglTexture=X[K].texture}return N}function _e(T,x,N){let O=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(O=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(O=t.TEXTURE_3D);const X=ae(T,x),K=x.source;n.bindTexture(O,T.__webglTexture,t.TEXTURE0+N);const fe=i.get(K);if(K.version!==fe.__version||X===!0){n.activeTexture(t.TEXTURE0+N);const se=st.getPrimaries(st.workingColorSpace),ce=x.colorSpace===Ti?null:st.getPrimaries(x.colorSpace),Ee=x.colorSpace===Ti||se===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let de=v(x.image,!1,r.maxTextureSize);de=$(x,de);const be=s.convert(x.format,x.colorSpace),Fe=s.convert(x.type);let Le=M(x.internalFormat,be,Fe,x.colorSpace,x.isVideoTexture);Q(O,x);let Te;const Oe=x.mipmaps,We=x.isVideoTexture!==!0,qe=fe.__version===void 0||X===!0,Ie=K.dataReady,V=y(x,de);if(x.isDepthTexture)Le=t.DEPTH_COMPONENT16,x.type===Ai?Le=t.DEPTH_COMPONENT32F:x.type===ns?Le=t.DEPTH_COMPONENT24:x.type===so&&(Le=t.DEPTH24_STENCIL8),qe&&(We?n.texStorage2D(t.TEXTURE_2D,1,Le,de.width,de.height):n.texImage2D(t.TEXTURE_2D,0,Le,de.width,de.height,0,be,Fe,null));else if(x.isDataTexture)if(Oe.length>0){We&&qe&&n.texStorage2D(t.TEXTURE_2D,V,Le,Oe[0].width,Oe[0].height);for(let pe=0,oe=Oe.length;pe<oe;pe++)Te=Oe[pe],We?Ie&&n.texSubImage2D(t.TEXTURE_2D,pe,0,0,Te.width,Te.height,be,Fe,Te.data):n.texImage2D(t.TEXTURE_2D,pe,Le,Te.width,Te.height,0,be,Fe,Te.data);x.generateMipmaps=!1}else We?(qe&&n.texStorage2D(t.TEXTURE_2D,V,Le,de.width,de.height),Ie&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,de.width,de.height,be,Fe,de.data)):n.texImage2D(t.TEXTURE_2D,0,Le,de.width,de.height,0,be,Fe,de.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){We&&qe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,V,Le,Oe[0].width,Oe[0].height,de.depth);for(let pe=0,oe=Oe.length;pe<oe;pe++)Te=Oe[pe],x.format!==Vn?be!==null?We?Ie&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,pe,0,0,0,Te.width,Te.height,de.depth,be,Te.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,pe,Le,Te.width,Te.height,de.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?Ie&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,pe,0,0,0,Te.width,Te.height,de.depth,be,Fe,Te.data):n.texImage3D(t.TEXTURE_2D_ARRAY,pe,Le,Te.width,Te.height,de.depth,0,be,Fe,Te.data)}else{We&&qe&&n.texStorage2D(t.TEXTURE_2D,V,Le,Oe[0].width,Oe[0].height);for(let pe=0,oe=Oe.length;pe<oe;pe++)Te=Oe[pe],x.format!==Vn?be!==null?We?Ie&&n.compressedTexSubImage2D(t.TEXTURE_2D,pe,0,0,Te.width,Te.height,be,Te.data):n.compressedTexImage2D(t.TEXTURE_2D,pe,Le,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?Ie&&n.texSubImage2D(t.TEXTURE_2D,pe,0,0,Te.width,Te.height,be,Fe,Te.data):n.texImage2D(t.TEXTURE_2D,pe,Le,Te.width,Te.height,0,be,Fe,Te.data)}else if(x.isDataArrayTexture)We?(qe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,V,Le,de.width,de.height,de.depth),Ie&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,be,Fe,de.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,de.width,de.height,de.depth,0,be,Fe,de.data);else if(x.isData3DTexture)We?(qe&&n.texStorage3D(t.TEXTURE_3D,V,Le,de.width,de.height,de.depth),Ie&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,be,Fe,de.data)):n.texImage3D(t.TEXTURE_3D,0,Le,de.width,de.height,de.depth,0,be,Fe,de.data);else if(x.isFramebufferTexture){if(qe)if(We)n.texStorage2D(t.TEXTURE_2D,V,Le,de.width,de.height);else{let pe=de.width,oe=de.height;for(let Se=0;Se<V;Se++)n.texImage2D(t.TEXTURE_2D,Se,Le,pe,oe,0,be,Fe,null),pe>>=1,oe>>=1}}else if(Oe.length>0){if(We&&qe){const pe=ue(Oe[0]);n.texStorage2D(t.TEXTURE_2D,V,Le,pe.width,pe.height)}for(let pe=0,oe=Oe.length;pe<oe;pe++)Te=Oe[pe],We?Ie&&n.texSubImage2D(t.TEXTURE_2D,pe,0,0,be,Fe,Te):n.texImage2D(t.TEXTURE_2D,pe,Le,be,Fe,Te);x.generateMipmaps=!1}else if(We){if(qe){const pe=ue(de);n.texStorage2D(t.TEXTURE_2D,V,Le,pe.width,pe.height)}Ie&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,be,Fe,de)}else n.texImage2D(t.TEXTURE_2D,0,Le,be,Fe,de);m(x)&&p(O),fe.__version=K.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Be(T,x,N){if(x.image.length!==6)return;const O=ae(T,x),X=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+N);const K=i.get(X);if(X.version!==K.__version||O===!0){n.activeTexture(t.TEXTURE0+N);const fe=st.getPrimaries(st.workingColorSpace),se=x.colorSpace===Ti?null:st.getPrimaries(x.colorSpace),ce=x.colorSpace===Ti||fe===se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const Ee=x.isCompressedTexture||x.image[0].isCompressedTexture,de=x.image[0]&&x.image[0].isDataTexture,be=[];for(let oe=0;oe<6;oe++)!Ee&&!de?be[oe]=v(x.image[oe],!0,r.maxCubemapSize):be[oe]=de?x.image[oe].image:x.image[oe],be[oe]=$(x,be[oe]);const Fe=be[0],Le=s.convert(x.format,x.colorSpace),Te=s.convert(x.type),Oe=M(x.internalFormat,Le,Te,x.colorSpace),We=x.isVideoTexture!==!0,qe=K.__version===void 0||O===!0,Ie=X.dataReady;let V=y(x,Fe);Q(t.TEXTURE_CUBE_MAP,x);let pe;if(Ee){We&&qe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,V,Oe,Fe.width,Fe.height);for(let oe=0;oe<6;oe++){pe=be[oe].mipmaps;for(let Se=0;Se<pe.length;Se++){const Ae=pe[Se];x.format!==Vn?Le!==null?We?Ie&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,0,0,Ae.width,Ae.height,Le,Ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,Oe,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?Ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,0,0,Ae.width,Ae.height,Le,Te,Ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,Oe,Ae.width,Ae.height,0,Le,Te,Ae.data)}}}else{if(pe=x.mipmaps,We&&qe){pe.length>0&&V++;const oe=ue(be[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,V,Oe,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(de){We?Ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,be[oe].width,be[oe].height,Le,Te,be[oe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Oe,be[oe].width,be[oe].height,0,Le,Te,be[oe].data);for(let Se=0;Se<pe.length;Se++){const et=pe[Se].image[oe].image;We?Ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,0,0,et.width,et.height,Le,Te,et.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,Oe,et.width,et.height,0,Le,Te,et.data)}}else{We?Ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Le,Te,be[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Oe,Le,Te,be[oe]);for(let Se=0;Se<pe.length;Se++){const Ae=pe[Se];We?Ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,0,0,Le,Te,Ae.image[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,Oe,Le,Te,Ae.image[oe])}}}m(x)&&p(t.TEXTURE_CUBE_MAP),K.__version=X.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function te(T,x,N,O,X,K){const fe=s.convert(N.format,N.colorSpace),se=s.convert(N.type),ce=M(N.internalFormat,fe,se,N.colorSpace);if(!i.get(x).__hasExternalTextures){const de=Math.max(1,x.width>>K),be=Math.max(1,x.height>>K);X===t.TEXTURE_3D||X===t.TEXTURE_2D_ARRAY?n.texImage3D(X,K,ce,de,be,x.depth,0,fe,se,null):n.texImage2D(X,K,ce,de,be,0,fe,se,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),z(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,O,X,i.get(N).__webglTexture,0,R(x)):(X===t.TEXTURE_2D||X>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,O,X,i.get(N).__webglTexture,K),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ge(T,x,N){if(t.bindRenderbuffer(t.RENDERBUFFER,T),x.depthBuffer&&!x.stencilBuffer){let O=t.DEPTH_COMPONENT24;if(N||z(x)){const X=x.depthTexture;X&&X.isDepthTexture&&(X.type===Ai?O=t.DEPTH_COMPONENT32F:X.type===ns&&(O=t.DEPTH_COMPONENT24));const K=R(x);z(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,K,O,x.width,x.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,K,O,x.width,x.height)}else t.renderbufferStorage(t.RENDERBUFFER,O,x.width,x.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,T)}else if(x.depthBuffer&&x.stencilBuffer){const O=R(x);N&&z(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,O,t.DEPTH24_STENCIL8,x.width,x.height):z(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,O,t.DEPTH24_STENCIL8,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,T)}else{const O=x.textures;for(let X=0;X<O.length;X++){const K=O[X],fe=s.convert(K.format,K.colorSpace),se=s.convert(K.type),ce=M(K.internalFormat,fe,se,K.colorSpace),Ee=R(x);N&&z(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ee,ce,x.width,x.height):z(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ee,ce,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,ce,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ve(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),L(x.depthTexture,0);const O=i.get(x.depthTexture).__webglTexture,X=R(x);if(x.depthTexture.format===$r)z(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,O,0,X):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,O,0);else if(x.depthTexture.format===Ys)z(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,O,0,X):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,O,0);else throw new Error("Unknown depthTexture format")}function B(T){const x=i.get(T),N=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");ve(x.__webglFramebuffer,T)}else if(N){x.__webglDepthbuffer=[];for(let O=0;O<6;O++)n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[O]),x.__webglDepthbuffer[O]=t.createRenderbuffer(),ge(x.__webglDepthbuffer[O],T,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=t.createRenderbuffer(),ge(x.__webglDepthbuffer,T,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function he(T,x,N){const O=i.get(T);x!==void 0&&te(O.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&B(T)}function le(T){const x=T.texture,N=i.get(T),O=i.get(x);T.addEventListener("dispose",P);const X=T.textures,K=T.isWebGLCubeRenderTarget===!0,fe=X.length>1;if(fe||(O.__webglTexture===void 0&&(O.__webglTexture=t.createTexture()),O.__version=x.version,o.memory.textures++),K){N.__webglFramebuffer=[];for(let se=0;se<6;se++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[se]=[];for(let ce=0;ce<x.mipmaps.length;ce++)N.__webglFramebuffer[se][ce]=t.createFramebuffer()}else N.__webglFramebuffer[se]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let se=0;se<x.mipmaps.length;se++)N.__webglFramebuffer[se]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(fe)for(let se=0,ce=X.length;se<ce;se++){const Ee=i.get(X[se]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=t.createTexture(),o.memory.textures++)}if(T.samples>0&&z(T)===!1){N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let se=0;se<X.length;se++){const ce=X[se];N.__webglColorRenderbuffer[se]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[se]);const Ee=s.convert(ce.format,ce.colorSpace),de=s.convert(ce.type),be=M(ce.internalFormat,Ee,de,ce.colorSpace,T.isXRRenderTarget===!0),Fe=R(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,be,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+se,t.RENDERBUFFER,N.__webglColorRenderbuffer[se])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),ge(N.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(K){n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture),Q(t.TEXTURE_CUBE_MAP,x);for(let se=0;se<6;se++)if(x.mipmaps&&x.mipmaps.length>0)for(let ce=0;ce<x.mipmaps.length;ce++)te(N.__webglFramebuffer[se][ce],T,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ce);else te(N.__webglFramebuffer[se],T,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(x)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(fe){for(let se=0,ce=X.length;se<ce;se++){const Ee=X[se],de=i.get(Ee);n.bindTexture(t.TEXTURE_2D,de.__webglTexture),Q(t.TEXTURE_2D,Ee),te(N.__webglFramebuffer,T,Ee,t.COLOR_ATTACHMENT0+se,t.TEXTURE_2D,0),m(Ee)&&p(t.TEXTURE_2D)}n.unbindTexture()}else{let se=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(se=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(se,O.__webglTexture),Q(se,x),x.mipmaps&&x.mipmaps.length>0)for(let ce=0;ce<x.mipmaps.length;ce++)te(N.__webglFramebuffer[ce],T,x,t.COLOR_ATTACHMENT0,se,ce);else te(N.__webglFramebuffer,T,x,t.COLOR_ATTACHMENT0,se,0);m(x)&&p(se),n.unbindTexture()}T.depthBuffer&&B(T)}function U(T){const x=T.textures;for(let N=0,O=x.length;N<O;N++){const X=x[N];if(m(X)){const K=T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,fe=i.get(X).__webglTexture;n.bindTexture(K,fe),p(K),n.unbindTexture()}}}const Pe=[],ye=[];function w(T){if(T.samples>0){if(z(T)===!1){const x=T.textures,N=T.width,O=T.height;let X=t.COLOR_BUFFER_BIT;const K=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=i.get(T),se=x.length>1;if(se)for(let ce=0;ce<x.length;ce++)n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let ce=0;ce<x.length;ce++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(X|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(X|=t.STENCIL_BUFFER_BIT)),se){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,fe.__webglColorRenderbuffer[ce]);const Ee=i.get(x[ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ee,0)}t.blitFramebuffer(0,0,N,O,0,0,N,O,X,t.NEAREST),l===!0&&(Pe.length=0,ye.length=0,Pe.push(t.COLOR_ATTACHMENT0+ce),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Pe.push(K),ye.push(K),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ye)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Pe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),se)for(let ce=0;ce<x.length;ce++){n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,fe.__webglColorRenderbuffer[ce]);const Ee=i.get(x[ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,Ee,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function R(T){return Math.min(r.maxSamples,T.samples)}function z(T){const x=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function q(T){const x=o.render.frame;u.get(T)!==x&&(u.set(T,x),T.update())}function $(T,x){const N=T.colorSpace,O=T.format,X=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||N!==Hi&&N!==Ti&&(st.getTransfer(N)===ut?(O!==Vn||X!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}function ue(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=_,this.setTexture2D=L,this.setTexture2DArray=W,this.setTexture3D=Z,this.setTextureCube=ie,this.rebindTextures=he,this.setupRenderTarget=le,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=w,this.setupDepthRenderbuffer=B,this.setupFrameBufferTexture=te,this.useMultisampledRTT=z}function D1(t,e){function n(i,r=Ti){let s;const o=st.getTransfer(r);if(i===Fi)return t.UNSIGNED_BYTE;if(i===tv)return t.UNSIGNED_SHORT_4_4_4_4;if(i===nv)return t.UNSIGNED_SHORT_5_5_5_1;if(i===pE)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===dE)return t.BYTE;if(i===hE)return t.SHORT;if(i===Qg)return t.UNSIGNED_SHORT;if(i===ev)return t.INT;if(i===ns)return t.UNSIGNED_INT;if(i===Ai)return t.FLOAT;if(i===ja)return t.HALF_FLOAT;if(i===mE)return t.ALPHA;if(i===gE)return t.RGB;if(i===Vn)return t.RGBA;if(i===vE)return t.LUMINANCE;if(i===_E)return t.LUMINANCE_ALPHA;if(i===$r)return t.DEPTH_COMPONENT;if(i===Ys)return t.DEPTH_STENCIL;if(i===xE)return t.RED;if(i===iv)return t.RED_INTEGER;if(i===yE)return t.RG;if(i===rv)return t.RG_INTEGER;if(i===sv)return t.RGBA_INTEGER;if(i===yl||i===Sl||i===Ml||i===bl)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===yl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===yl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Sl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ml)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nd||i===Fd||i===Od||i===Bd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Nd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Od)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===kd||i===Vd||i===zd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===kd||i===Vd)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===zd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Hd||i===Gd||i===Wd||i===Xd||i===$d||i===qd||i===Yd||i===jd||i===Kd||i===Zd||i===Jd||i===Qd||i===eh||i===th)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Hd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Gd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$d)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Kd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Qd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===eh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===th)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===El||i===nh||i===ih)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===El)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ih)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===SE||i===rh||i===sh||i===oh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===El)return s.COMPRESSED_RED_RGTC1_EXT;if(i===rh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===oh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===so?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class U1 extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $o extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const N1={type:"move"};class Zl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $o,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $o,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $o,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(N1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new $o;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const F1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,O1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class B1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Kt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new Oi({vertexShader:F1,fragmentShader:O1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new An(new Za(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class k1 extends us{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const v=new B1,m=n.getContextAttributes();let p=null,M=null;const y=[],b=[],P=new Qe;let E=null;const C=new dn;C.layers.enable(1),C.viewport=new Pt;const D=new dn;D.layers.enable(2),D.viewport=new Pt;const S=[C,D],_=new U1;_.layers.enable(1),_.layers.enable(2);let F=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ge=y[te];return ge===void 0&&(ge=new Zl,y[te]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(te){let ge=y[te];return ge===void 0&&(ge=new Zl,y[te]=ge),ge.getGripSpace()},this.getHand=function(te){let ge=y[te];return ge===void 0&&(ge=new Zl,y[te]=ge),ge.getHandSpace()};function L(te){const ge=b.indexOf(te.inputSource);if(ge===-1)return;const ve=y[ge];ve!==void 0&&(ve.update(te.inputSource,te.frame,c||o),ve.dispatchEvent({type:te.type,data:te.inputSource}))}function W(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",Z);for(let te=0;te<y.length;te++){const ge=b[te];ge!==null&&(b[te]=null,y[te].disconnect(ge))}F=null,I=null,v.reset(),e.setRenderTarget(p),h=null,d=null,f=null,r=null,M=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",W),r.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await n.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const ge={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,ge),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new hr(h.framebufferWidth,h.framebufferHeight,{format:Vn,type:Fi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ge=null,ve=null,B=null;m.depth&&(B=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ge=m.stencil?Ys:$r,ve=m.stencil?so:ns);const he={colorFormat:n.RGBA8,depthFormat:B,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(he),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new hr(d.textureWidth,d.textureHeight,{format:Vn,type:Fi,depthTexture:new yv(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Be.setContext(r),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Z(te){for(let ge=0;ge<te.removed.length;ge++){const ve=te.removed[ge],B=b.indexOf(ve);B>=0&&(b[B]=null,y[B].disconnect(ve))}for(let ge=0;ge<te.added.length;ge++){const ve=te.added[ge];let B=b.indexOf(ve);if(B===-1){for(let le=0;le<y.length;le++)if(le>=b.length){b.push(ve),B=le;break}else if(b[le]===null){b[le]=ve,B=le;break}if(B===-1)break}const he=y[B];he&&he.connect(ve)}}const ie=new J,re=new J;function G(te,ge,ve){ie.setFromMatrixPosition(ge.matrixWorld),re.setFromMatrixPosition(ve.matrixWorld);const B=ie.distanceTo(re),he=ge.projectionMatrix.elements,le=ve.projectionMatrix.elements,U=he[14]/(he[10]-1),Pe=he[14]/(he[10]+1),ye=(he[9]+1)/he[5],w=(he[9]-1)/he[5],R=(he[8]-1)/he[0],z=(le[8]+1)/le[0],q=U*R,$=U*z,ue=B/(-R+z),T=ue*-R;ge.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(T),te.translateZ(ue),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();const x=U+ue,N=Pe+ue,O=q-T,X=$+(B-T),K=ye*Pe/N*x,fe=w*Pe/N*x;te.projectionMatrix.makePerspective(O,X,K,fe,x,N),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function me(te,ge){ge===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ge.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;v.texture!==null&&(te.near=v.depthNear,te.far=v.depthFar),_.near=D.near=C.near=te.near,_.far=D.far=C.far=te.far,(F!==_.near||I!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),F=_.near,I=_.far,C.near=F,C.far=I,D.near=F,D.far=I,C.updateProjectionMatrix(),D.updateProjectionMatrix(),te.updateProjectionMatrix());const ge=te.parent,ve=_.cameras;me(_,ge);for(let B=0;B<ve.length;B++)me(ve[B],ge);ve.length===2?G(_,C,D):_.projectionMatrix.copy(C.projectionMatrix),Q(te,_,ge)};function Q(te,ge,ve){ve===null?te.matrix.copy(ge.matrixWorld):(te.matrix.copy(ve.matrixWorld),te.matrix.invert(),te.matrix.multiply(ge.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ge.projectionMatrix),te.projectionMatrixInverse.copy(ge.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Ic*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=te)},this.hasDepthSensing=function(){return v.texture!==null};let ae=null;function _e(te,ge){if(u=ge.getViewerPose(c||o),g=ge,u!==null){const ve=u.views;h!==null&&(e.setRenderTargetFramebuffer(M,h.framebuffer),e.setRenderTarget(M));let B=!1;ve.length!==_.cameras.length&&(_.cameras.length=0,B=!0);for(let le=0;le<ve.length;le++){const U=ve[le];let Pe=null;if(h!==null)Pe=h.getViewport(U);else{const w=f.getViewSubImage(d,U);Pe=w.viewport,le===0&&(e.setRenderTargetTextures(M,w.colorTexture,d.ignoreDepthValues?void 0:w.depthStencilTexture),e.setRenderTarget(M))}let ye=S[le];ye===void 0&&(ye=new dn,ye.layers.enable(le),ye.viewport=new Pt,S[le]=ye),ye.matrix.fromArray(U.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(U.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),le===0&&(_.matrix.copy(ye.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),B===!0&&_.cameras.push(ye)}const he=r.enabledFeatures;if(he&&he.includes("depth-sensing")){const le=f.getDepthInformation(ve[0]);le&&le.isValid&&le.texture&&v.init(e,le,r.renderState)}}for(let ve=0;ve<y.length;ve++){const B=b[ve],he=y[ve];B!==null&&he!==void 0&&he.update(B,ge,c||o)}v.render(e,_),ae&&ae(te,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),g=null}const Be=new xv;Be.setAnimationLoop(_e),this.setAnimationLoop=function(te){ae=te},this.dispose=function(){}}}const Qi=new Gn,V1=new Et;function z1(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,mv(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,y,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,b)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),y=M.envMap,b=M.envMapRotation;if(y&&(m.envMap.value=y,Qi.copy(b),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),m.envMapRotation.value.setFromMatrix4(V1.makeRotationFromEuler(Qi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const P=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*P,n(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=y*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===jt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function H1(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){const b=y.program;i.uniformBlockBinding(M,b)}function c(M,y){let b=r[M.id];b===void 0&&(g(M),b=u(M),r[M.id]=b,M.addEventListener("dispose",m));const P=y.program;i.updateUBOMapping(M,P);const E=e.render.frame;s[M.id]!==E&&(d(M),s[M.id]=E)}function u(M){const y=f();M.__bindingPointIndex=y;const b=t.createBuffer(),P=M.__size,E=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,b),t.bufferData(t.UNIFORM_BUFFER,P,E),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,b),b}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const y=r[M.id],b=M.uniforms,P=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let E=0,C=b.length;E<C;E++){const D=Array.isArray(b[E])?b[E]:[b[E]];for(let S=0,_=D.length;S<_;S++){const F=D[S];if(h(F,E,S,P)===!0){const I=F.__offset,L=Array.isArray(F.value)?F.value:[F.value];let W=0;for(let Z=0;Z<L.length;Z++){const ie=L[Z],re=v(ie);typeof ie=="number"||typeof ie=="boolean"?(F.__data[0]=ie,t.bufferSubData(t.UNIFORM_BUFFER,I+W,F.__data)):ie.isMatrix3?(F.__data[0]=ie.elements[0],F.__data[1]=ie.elements[1],F.__data[2]=ie.elements[2],F.__data[3]=0,F.__data[4]=ie.elements[3],F.__data[5]=ie.elements[4],F.__data[6]=ie.elements[5],F.__data[7]=0,F.__data[8]=ie.elements[6],F.__data[9]=ie.elements[7],F.__data[10]=ie.elements[8],F.__data[11]=0):(ie.toArray(F.__data,W),W+=re.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,I,F.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(M,y,b,P){const E=M.value,C=y+"_"+b;if(P[C]===void 0)return typeof E=="number"||typeof E=="boolean"?P[C]=E:P[C]=E.clone(),!0;{const D=P[C];if(typeof E=="number"||typeof E=="boolean"){if(D!==E)return P[C]=E,!0}else if(D.equals(E)===!1)return D.copy(E),!0}return!1}function g(M){const y=M.uniforms;let b=0;const P=16;for(let C=0,D=y.length;C<D;C++){const S=Array.isArray(y[C])?y[C]:[y[C]];for(let _=0,F=S.length;_<F;_++){const I=S[_],L=Array.isArray(I.value)?I.value:[I.value];for(let W=0,Z=L.length;W<Z;W++){const ie=L[W],re=v(ie),G=b%P;G!==0&&P-G<re.boundary&&(b+=P-G),I.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=b,b+=re.storage}}}const E=b%P;return E>0&&(b+=P-E),M.__size=b,M.__cache={},this}function v(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){const y=M.target;y.removeEventListener("dispose",m);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const M in r)t.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class G1{constructor(e={}){const{canvas:n=DE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const h=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const p=[],M=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dn,this._useLegacyLights=!1,this.toneMapping=Ii,this.toneMappingExposure=1;const y=this;let b=!1,P=0,E=0,C=null,D=-1,S=null;const _=new Pt,F=new Pt;let I=null;const L=new Ze(0);let W=0,Z=n.width,ie=n.height,re=1,G=null,me=null;const Q=new Pt(0,0,Z,ie),ae=new Pt(0,0,Z,ie);let _e=!1;const Be=new _v;let te=!1,ge=!1;const ve=new Et,B=new J,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function le(){return C===null?re:1}let U=i;function Pe(A,H){return n.getContext(A,H)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Tu}`),n.addEventListener("webglcontextlost",V,!1),n.addEventListener("webglcontextrestored",pe,!1),n.addEventListener("webglcontextcreationerror",oe,!1),U===null){const H="webgl2";if(U=Pe(H,A),U===null)throw Pe(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ye,w,R,z,q,$,ue,T,x,N,O,X,K,fe,se,ce,Ee,de,be,Fe,Le,Te,Oe,We;function qe(){ye=new Zw(U),ye.init(),Te=new D1(U,ye),w=new Ww(U,ye,e,Te),R=new L1(U),z=new eC(U),q=new v1,$=new I1(U,ye,R,q,w,Te,z),ue=new $w(y),T=new Kw(y),x=new oT(U),Oe=new Hw(U,x),N=new Jw(U,x,z,Oe),O=new nC(U,N,x,z),be=new tC(U,w,$),ce=new Xw(q),X=new g1(y,ue,T,ye,w,Oe,ce),K=new z1(y,q),fe=new x1,se=new T1(ye),de=new zw(y,ue,T,R,O,d,l),Ee=new P1(y,O,w),We=new H1(U,z,w,R),Fe=new Gw(U,ye,z),Le=new Qw(U,ye,z),z.programs=X.programs,y.capabilities=w,y.extensions=ye,y.properties=q,y.renderLists=fe,y.shadowMap=Ee,y.state=R,y.info=z}qe();const Ie=new k1(y,U);this.xr=Ie,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const A=ye.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ye.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(A){A!==void 0&&(re=A,this.setSize(Z,ie,!1))},this.getSize=function(A){return A.set(Z,ie)},this.setSize=function(A,H,ee=!0){if(Ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=A,ie=H,n.width=Math.floor(A*re),n.height=Math.floor(H*re),ee===!0&&(n.style.width=A+"px",n.style.height=H+"px"),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(Z*re,ie*re).floor()},this.setDrawingBufferSize=function(A,H,ee){Z=A,ie=H,re=ee,n.width=Math.floor(A*ee),n.height=Math.floor(H*ee),this.setViewport(0,0,A,H)},this.getCurrentViewport=function(A){return A.copy(_)},this.getViewport=function(A){return A.copy(Q)},this.setViewport=function(A,H,ee,Y){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,H,ee,Y),R.viewport(_.copy(Q).multiplyScalar(re).round())},this.getScissor=function(A){return A.copy(ae)},this.setScissor=function(A,H,ee,Y){A.isVector4?ae.set(A.x,A.y,A.z,A.w):ae.set(A,H,ee,Y),R.scissor(F.copy(ae).multiplyScalar(re).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(A){R.setScissorTest(_e=A)},this.setOpaqueSort=function(A){G=A},this.setTransparentSort=function(A){me=A},this.getClearColor=function(A){return A.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(A=!0,H=!0,ee=!0){let Y=0;if(A){let j=!1;if(C!==null){const Me=C.texture.format;j=Me===sv||Me===rv||Me===iv}if(j){const Me=C.texture.type,we=Me===Fi||Me===ns||Me===Qg||Me===so||Me===tv||Me===nv,Ce=de.getClearColor(),Ue=de.getClearAlpha(),ke=Ce.r,ze=Ce.g,Xe=Ce.b;we?(h[0]=ke,h[1]=ze,h[2]=Xe,h[3]=Ue,U.clearBufferuiv(U.COLOR,0,h)):(g[0]=ke,g[1]=ze,g[2]=Xe,g[3]=Ue,U.clearBufferiv(U.COLOR,0,g))}else Y|=U.COLOR_BUFFER_BIT}H&&(Y|=U.DEPTH_BUFFER_BIT),ee&&(Y|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",V,!1),n.removeEventListener("webglcontextrestored",pe,!1),n.removeEventListener("webglcontextcreationerror",oe,!1),fe.dispose(),se.dispose(),q.dispose(),ue.dispose(),T.dispose(),O.dispose(),Oe.dispose(),We.dispose(),X.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",it),Ie.removeEventListener("sessionend",Ln),Bt.stop()};function V(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const A=z.autoReset,H=Ee.enabled,ee=Ee.autoUpdate,Y=Ee.needsUpdate,j=Ee.type;qe(),z.autoReset=A,Ee.enabled=H,Ee.autoUpdate=ee,Ee.needsUpdate=Y,Ee.type=j}function oe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Se(A){const H=A.target;H.removeEventListener("dispose",Se),Ae(H)}function Ae(A){et(A),q.remove(A)}function et(A){const H=q.get(A).programs;H!==void 0&&(H.forEach(function(ee){X.releaseProgram(ee)}),A.isShaderMaterial&&X.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,ee,Y,j,Me){H===null&&(H=he);const we=j.isMesh&&j.matrixWorld.determinant()<0,Ce=Bv(A,H,ee,Y,j);R.setMaterial(Y,we);let Ue=ee.index,ke=1;if(Y.wireframe===!0){if(Ue=N.getWireframeAttribute(ee),Ue===void 0)return;ke=2}const ze=ee.drawRange,Xe=ee.attributes.position;let St=ze.start*ke,It=(ze.start+ze.count)*ke;Me!==null&&(St=Math.max(St,Me.start*ke),It=Math.min(It,(Me.start+Me.count)*ke)),Ue!==null?(St=Math.max(St,0),It=Math.min(It,Ue.count)):Xe!=null&&(St=Math.max(St,0),It=Math.min(It,Xe.count));const Qt=It-St;if(Qt<0||Qt===1/0)return;Oe.setup(j,Y,Ce,ee,Ue);let Xn,tt=Fe;if(Ue!==null&&(Xn=x.get(Ue),tt=Le,tt.setIndex(Xn)),j.isMesh)Y.wireframe===!0?(R.setLineWidth(Y.wireframeLinewidth*le()),tt.setMode(U.LINES)):tt.setMode(U.TRIANGLES);else if(j.isLine){let Ve=Y.linewidth;Ve===void 0&&(Ve=1),R.setLineWidth(Ve*le()),j.isLineSegments?tt.setMode(U.LINES):j.isLineLoop?tt.setMode(U.LINE_LOOP):tt.setMode(U.LINE_STRIP)}else j.isPoints?tt.setMode(U.POINTS):j.isSprite&&tt.setMode(U.TRIANGLES);if(j.isBatchedMesh)j._multiDrawInstances!==null?tt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances):tt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)tt.renderInstances(St,Qt,j.count);else if(ee.isInstancedBufferGeometry){const Ve=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,ds=Math.min(ee.instanceCount,Ve);tt.renderInstances(St,Qt,ds)}else tt.render(St,Qt)};function ct(A,H,ee){A.transparent===!0&&A.side===ti&&A.forceSinglePass===!1?(A.side=jt,A.needsUpdate=!0,ho(A,H,ee),A.side=Ni,A.needsUpdate=!0,ho(A,H,ee),A.side=ti):ho(A,H,ee)}this.compile=function(A,H,ee=null){ee===null&&(ee=A),m=se.get(ee),m.init(H),M.push(m),ee.traverseVisible(function(j){j.isLight&&j.layers.test(H.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),A!==ee&&A.traverseVisible(function(j){j.isLight&&j.layers.test(H.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),m.setupLights(y._useLegacyLights);const Y=new Set;return A.traverse(function(j){const Me=j.material;if(Me)if(Array.isArray(Me))for(let we=0;we<Me.length;we++){const Ce=Me[we];ct(Ce,ee,j),Y.add(Ce)}else ct(Me,ee,j),Y.add(Me)}),M.pop(),m=null,Y},this.compileAsync=function(A,H,ee=null){const Y=this.compile(A,H,ee);return new Promise(j=>{function Me(){if(Y.forEach(function(we){q.get(we).currentProgram.isReady()&&Y.delete(we)}),Y.size===0){j(A);return}setTimeout(Me,10)}ye.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let vt=null;function Lt(A){vt&&vt(A)}function it(){Bt.stop()}function Ln(){Bt.start()}const Bt=new xv;Bt.setAnimationLoop(Lt),typeof self<"u"&&Bt.setContext(self),this.setAnimationLoop=function(A){vt=A,Ie.setAnimationLoop(A),A===null?Bt.stop():Bt.start()},Ie.addEventListener("sessionstart",it),Ie.addEventListener("sessionend",Ln),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(H),H=Ie.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,H,C),m=se.get(A,M.length),m.init(H),M.push(m),ve.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Be.setFromProjectionMatrix(ve),ge=this.localClippingEnabled,te=ce.init(this.clippingPlanes,ge),v=fe.get(A,p.length),v.init(),p.push(v),Nu(A,H,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(G,me);const ee=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1;ee&&de.addToRenderList(v,A),this.info.render.frame++,te===!0&&ce.beginShadows();const Y=m.state.shadowsArray;Ee.render(Y,A,H),te===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=v.opaque,Me=v.transmissive;if(m.setupLights(y._useLegacyLights),H.isArrayCamera){const we=H.cameras;if(Me.length>0)for(let Ce=0,Ue=we.length;Ce<Ue;Ce++){const ke=we[Ce];Ou(j,Me,A,ke)}ee&&de.render(A);for(let Ce=0,Ue=we.length;Ce<Ue;Ce++){const ke=we[Ce];Fu(v,A,ke,ke.viewport)}}else Me.length>0&&Ou(j,Me,A,H),ee&&de.render(A),Fu(v,A,H);C!==null&&($.updateMultisampleRenderTarget(C),$.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(y,A,H),Oe.resetDefaultState(),D=-1,S=null,M.pop(),M.length>0?(m=M[M.length-1],te===!0&&ce.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Nu(A,H,ee,Y){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)ee=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Be.intersectsSprite(A)){Y&&B.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ve);const we=O.update(A),Ce=A.material;Ce.visible&&v.push(A,we,Ce,ee,B.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Be.intersectsObject(A))){const we=O.update(A),Ce=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),B.copy(A.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),B.copy(we.boundingSphere.center)),B.applyMatrix4(A.matrixWorld).applyMatrix4(ve)),Array.isArray(Ce)){const Ue=we.groups;for(let ke=0,ze=Ue.length;ke<ze;ke++){const Xe=Ue[ke],St=Ce[Xe.materialIndex];St&&St.visible&&v.push(A,we,St,ee,B.z,Xe)}}else Ce.visible&&v.push(A,we,Ce,ee,B.z,null)}}const Me=A.children;for(let we=0,Ce=Me.length;we<Ce;we++)Nu(Me[we],H,ee,Y)}function Fu(A,H,ee,Y){const j=A.opaque,Me=A.transmissive,we=A.transparent;m.setupLightsView(ee),te===!0&&ce.setGlobalState(y.clippingPlanes,ee),Y&&R.viewport(_.copy(Y)),j.length>0&&fo(j,H,ee),Me.length>0&&fo(Me,H,ee),we.length>0&&fo(we,H,ee),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function Ou(A,H,ee,Y){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Y.id]===void 0&&(m.state.transmissionRenderTarget[Y.id]=new hr(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float")?ja:Fi,minFilter:ar,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const Me=m.state.transmissionRenderTarget[Y.id],we=Y.viewport||_;Me.setSize(we.z,we.w);const Ce=y.getRenderTarget();y.setRenderTarget(Me),y.getClearColor(L),W=y.getClearAlpha(),W<1&&y.setClearColor(16777215,.5),y.clear();const Ue=y.toneMapping;y.toneMapping=Ii;const ke=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),m.setupLightsView(Y),te===!0&&ce.setGlobalState(y.clippingPlanes,Y),fo(A,ee,Y),$.updateMultisampleRenderTarget(Me),$.updateRenderTargetMipmap(Me),ye.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Xe=0,St=H.length;Xe<St;Xe++){const It=H[Xe],Qt=It.object,Xn=It.geometry,tt=It.material,Ve=It.group;if(tt.side===ti&&Qt.layers.test(Y.layers)){const ds=tt.side;tt.side=jt,tt.needsUpdate=!0,Bu(Qt,ee,Y,Xn,tt,Ve),tt.side=ds,tt.needsUpdate=!0,ze=!0}}ze===!0&&($.updateMultisampleRenderTarget(Me),$.updateRenderTargetMipmap(Me))}y.setRenderTarget(Ce),y.setClearColor(L,W),ke!==void 0&&(Y.viewport=ke),y.toneMapping=Ue}function fo(A,H,ee){const Y=H.isScene===!0?H.overrideMaterial:null;for(let j=0,Me=A.length;j<Me;j++){const we=A[j],Ce=we.object,Ue=we.geometry,ke=Y===null?we.material:Y,ze=we.group;Ce.layers.test(ee.layers)&&Bu(Ce,H,ee,Ue,ke,ze)}}function Bu(A,H,ee,Y,j,Me){A.onBeforeRender(y,H,ee,Y,j,Me),A.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(y,H,ee,Y,A,Me),j.transparent===!0&&j.side===ti&&j.forceSinglePass===!1?(j.side=jt,j.needsUpdate=!0,y.renderBufferDirect(ee,H,Y,j,A,Me),j.side=Ni,j.needsUpdate=!0,y.renderBufferDirect(ee,H,Y,j,A,Me),j.side=ti):y.renderBufferDirect(ee,H,Y,j,A,Me),A.onAfterRender(y,H,ee,Y,j,Me)}function ho(A,H,ee){H.isScene!==!0&&(H=he);const Y=q.get(A),j=m.state.lights,Me=m.state.shadowsArray,we=j.state.version,Ce=X.getParameters(A,j.state,Me,H,ee),Ue=X.getProgramCacheKey(Ce);let ke=Y.programs;Y.environment=A.isMeshStandardMaterial?H.environment:null,Y.fog=H.fog,Y.envMap=(A.isMeshStandardMaterial?T:ue).get(A.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,ke===void 0&&(A.addEventListener("dispose",Se),ke=new Map,Y.programs=ke);let ze=ke.get(Ue);if(ze!==void 0){if(Y.currentProgram===ze&&Y.lightsStateVersion===we)return Vu(A,Ce),ze}else Ce.uniforms=X.getUniforms(A),A.onBuild(ee,Ce,y),A.onBeforeCompile(Ce,y),ze=X.acquireProgram(Ce,Ue),ke.set(Ue,ze),Y.uniforms=Ce.uniforms;const Xe=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xe.clippingPlanes=ce.uniform),Vu(A,Ce),Y.needsLights=Vv(A),Y.lightsStateVersion=we,Y.needsLights&&(Xe.ambientLightColor.value=j.state.ambient,Xe.lightProbe.value=j.state.probe,Xe.directionalLights.value=j.state.directional,Xe.directionalLightShadows.value=j.state.directionalShadow,Xe.spotLights.value=j.state.spot,Xe.spotLightShadows.value=j.state.spotShadow,Xe.rectAreaLights.value=j.state.rectArea,Xe.ltc_1.value=j.state.rectAreaLTC1,Xe.ltc_2.value=j.state.rectAreaLTC2,Xe.pointLights.value=j.state.point,Xe.pointLightShadows.value=j.state.pointShadow,Xe.hemisphereLights.value=j.state.hemi,Xe.directionalShadowMap.value=j.state.directionalShadowMap,Xe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Xe.spotShadowMap.value=j.state.spotShadowMap,Xe.spotLightMatrix.value=j.state.spotLightMatrix,Xe.spotLightMap.value=j.state.spotLightMap,Xe.pointShadowMap.value=j.state.pointShadowMap,Xe.pointShadowMatrix.value=j.state.pointShadowMatrix),Y.currentProgram=ze,Y.uniformsList=null,ze}function ku(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=Qo.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function Vu(A,H){const ee=q.get(A);ee.outputColorSpace=H.outputColorSpace,ee.batching=H.batching,ee.instancing=H.instancing,ee.instancingColor=H.instancingColor,ee.instancingMorph=H.instancingMorph,ee.skinning=H.skinning,ee.morphTargets=H.morphTargets,ee.morphNormals=H.morphNormals,ee.morphColors=H.morphColors,ee.morphTargetsCount=H.morphTargetsCount,ee.numClippingPlanes=H.numClippingPlanes,ee.numIntersection=H.numClipIntersection,ee.vertexAlphas=H.vertexAlphas,ee.vertexTangents=H.vertexTangents,ee.toneMapping=H.toneMapping}function Bv(A,H,ee,Y,j){H.isScene!==!0&&(H=he),$.resetTextureUnits();const Me=H.fog,we=Y.isMeshStandardMaterial?H.environment:null,Ce=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Hi,Ue=(Y.isMeshStandardMaterial?T:ue).get(Y.envMap||we),ke=Y.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,ze=!!ee.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Xe=!!ee.morphAttributes.position,St=!!ee.morphAttributes.normal,It=!!ee.morphAttributes.color;let Qt=Ii;Y.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Qt=y.toneMapping);const Xn=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,tt=Xn!==void 0?Xn.length:0,Ve=q.get(Y),ds=m.state.lights;if(te===!0&&(ge===!0||A!==S)){const ln=A===S&&Y.id===D;ce.setState(Y,A,ln)}let dt=!1;Y.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==ds.state.version||Ve.outputColorSpace!==Ce||j.isBatchedMesh&&Ve.batching===!1||!j.isBatchedMesh&&Ve.batching===!0||j.isInstancedMesh&&Ve.instancing===!1||!j.isInstancedMesh&&Ve.instancing===!0||j.isSkinnedMesh&&Ve.skinning===!1||!j.isSkinnedMesh&&Ve.skinning===!0||j.isInstancedMesh&&Ve.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ve.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ve.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ve.instancingMorph===!1&&j.morphTexture!==null||Ve.envMap!==Ue||Y.fog===!0&&Ve.fog!==Me||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==ce.numPlanes||Ve.numIntersection!==ce.numIntersection)||Ve.vertexAlphas!==ke||Ve.vertexTangents!==ze||Ve.morphTargets!==Xe||Ve.morphNormals!==St||Ve.morphColors!==It||Ve.toneMapping!==Qt||Ve.morphTargetsCount!==tt)&&(dt=!0):(dt=!0,Ve.__version=Y.version);let Gi=Ve.currentProgram;dt===!0&&(Gi=ho(Y,H,j));let zu=!1,hs=!1,Qa=!1;const Dt=Gi.getUniforms(),ci=Ve.uniforms;if(R.useProgram(Gi.program)&&(zu=!0,hs=!0,Qa=!0),Y.id!==D&&(D=Y.id,hs=!0),zu||S!==A){Dt.setValue(U,"projectionMatrix",A.projectionMatrix),Dt.setValue(U,"viewMatrix",A.matrixWorldInverse);const ln=Dt.map.cameraPosition;ln!==void 0&&ln.setValue(U,B.setFromMatrixPosition(A.matrixWorld)),w.logarithmicDepthBuffer&&Dt.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Dt.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,hs=!0,Qa=!0)}if(j.isSkinnedMesh){Dt.setOptional(U,j,"bindMatrix"),Dt.setOptional(U,j,"bindMatrixInverse");const ln=j.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Dt.setValue(U,"boneTexture",ln.boneTexture,$))}j.isBatchedMesh&&(Dt.setOptional(U,j,"batchingTexture"),Dt.setValue(U,"batchingTexture",j._matricesTexture,$));const el=ee.morphAttributes;if((el.position!==void 0||el.normal!==void 0||el.color!==void 0)&&be.update(j,ee,Gi),(hs||Ve.receiveShadow!==j.receiveShadow)&&(Ve.receiveShadow=j.receiveShadow,Dt.setValue(U,"receiveShadow",j.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(ci.envMap.value=Ue,ci.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&H.environment!==null&&(ci.envMapIntensity.value=H.environmentIntensity),hs&&(Dt.setValue(U,"toneMappingExposure",y.toneMappingExposure),Ve.needsLights&&kv(ci,Qa),Me&&Y.fog===!0&&K.refreshFogUniforms(ci,Me),K.refreshMaterialUniforms(ci,Y,re,ie,m.state.transmissionRenderTarget[A.id]),Qo.upload(U,ku(Ve),ci,$)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Qo.upload(U,ku(Ve),ci,$),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Dt.setValue(U,"center",j.center),Dt.setValue(U,"modelViewMatrix",j.modelViewMatrix),Dt.setValue(U,"normalMatrix",j.normalMatrix),Dt.setValue(U,"modelMatrix",j.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const ln=Y.uniformsGroups;for(let tl=0,zv=ln.length;tl<zv;tl++){const Hu=ln[tl];We.update(Hu,Gi),We.bind(Hu,Gi)}}return Gi}function kv(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function Vv(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,H,ee){q.get(A.texture).__webglTexture=H,q.get(A.depthTexture).__webglTexture=ee;const Y=q.get(A);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=ee===void 0,Y.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,H){const ee=q.get(A);ee.__webglFramebuffer=H,ee.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,ee=0){C=A,P=H,E=ee;let Y=!0,j=null,Me=!1,we=!1;if(A){const Ue=q.get(A);Ue.__useDefaultFramebuffer!==void 0?(R.bindFramebuffer(U.FRAMEBUFFER,null),Y=!1):Ue.__webglFramebuffer===void 0?$.setupRenderTarget(A):Ue.__hasExternalTextures&&$.rebindTextures(A,q.get(A.texture).__webglTexture,q.get(A.depthTexture).__webglTexture);const ke=A.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(we=!0);const ze=q.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ze[H])?j=ze[H][ee]:j=ze[H],Me=!0):A.samples>0&&$.useMultisampledRTT(A)===!1?j=q.get(A).__webglMultisampledFramebuffer:Array.isArray(ze)?j=ze[ee]:j=ze,_.copy(A.viewport),F.copy(A.scissor),I=A.scissorTest}else _.copy(Q).multiplyScalar(re).floor(),F.copy(ae).multiplyScalar(re).floor(),I=_e;if(R.bindFramebuffer(U.FRAMEBUFFER,j)&&Y&&R.drawBuffers(A,j),R.viewport(_),R.scissor(F),R.setScissorTest(I),Me){const Ue=q.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ue.__webglTexture,ee)}else if(we){const Ue=q.get(A.texture),ke=H||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ue.__webglTexture,ee||0,ke)}D=-1},this.readRenderTargetPixels=function(A,H,ee,Y,j,Me,we){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce){R.bindFramebuffer(U.FRAMEBUFFER,Ce);try{const Ue=A.texture,ke=Ue.format,ze=Ue.type;if(!w.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!w.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-Y&&ee>=0&&ee<=A.height-j&&U.readPixels(H,ee,Y,j,Te.convert(ke),Te.convert(ze),Me)}finally{const Ue=C!==null?q.get(C).__webglFramebuffer:null;R.bindFramebuffer(U.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(A,H,ee=0){const Y=Math.pow(2,-ee),j=Math.floor(H.image.width*Y),Me=Math.floor(H.image.height*Y);$.setTexture2D(H,0),U.copyTexSubImage2D(U.TEXTURE_2D,ee,0,0,A.x,A.y,j,Me),R.unbindTexture()},this.copyTextureToTexture=function(A,H,ee,Y=0){const j=H.image.width,Me=H.image.height,we=Te.convert(ee.format),Ce=Te.convert(ee.type);$.setTexture2D(ee,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,ee.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,ee.unpackAlignment),H.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Y,A.x,A.y,j,Me,we,Ce,H.image.data):H.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Y,A.x,A.y,H.mipmaps[0].width,H.mipmaps[0].height,we,H.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,Y,A.x,A.y,we,Ce,H.image),Y===0&&ee.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),R.unbindTexture()},this.copyTextureToTexture3D=function(A,H,ee,Y,j=0){const Me=A.max.x-A.min.x,we=A.max.y-A.min.y,Ce=A.max.z-A.min.z,Ue=Te.convert(Y.format),ke=Te.convert(Y.type);let ze;if(Y.isData3DTexture)$.setTexture3D(Y,0),ze=U.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)$.setTexture2DArray(Y,0),ze=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,Y.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,Y.unpackAlignment);const Xe=U.getParameter(U.UNPACK_ROW_LENGTH),St=U.getParameter(U.UNPACK_IMAGE_HEIGHT),It=U.getParameter(U.UNPACK_SKIP_PIXELS),Qt=U.getParameter(U.UNPACK_SKIP_ROWS),Xn=U.getParameter(U.UNPACK_SKIP_IMAGES),tt=ee.isCompressedTexture?ee.mipmaps[j]:ee.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,tt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,tt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,A.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,A.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,A.min.z),ee.isDataTexture||ee.isData3DTexture?U.texSubImage3D(ze,j,H.x,H.y,H.z,Me,we,Ce,Ue,ke,tt.data):Y.isCompressedArrayTexture?U.compressedTexSubImage3D(ze,j,H.x,H.y,H.z,Me,we,Ce,Ue,tt.data):U.texSubImage3D(ze,j,H.x,H.y,H.z,Me,we,Ce,Ue,ke,tt),U.pixelStorei(U.UNPACK_ROW_LENGTH,Xe),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,St),U.pixelStorei(U.UNPACK_SKIP_PIXELS,It),U.pixelStorei(U.UNPACK_SKIP_ROWS,Qt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Xn),j===0&&Y.generateMipmaps&&U.generateMipmap(ze),R.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?$.setTextureCube(A,0):A.isData3DTexture?$.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?$.setTexture2DArray(A,0):$.setTexture2D(A,0),R.unbindTexture()},this.resetState=function(){P=0,E=0,C=null,R.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===wu?"display-p3":"srgb",n.unpackColorSpace=st.workingColorSpace===Ka?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class W1 extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Lu extends li{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],h=[];let g=0;const v=[],m=i/2;let p=0;M(),o===!1&&(e>0&&y(!0),n>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new on(f,3)),this.setAttribute("normal",new on(d,3)),this.setAttribute("uv",new on(h,2));function M(){const b=new J,P=new J;let E=0;const C=(n-e)/i;for(let D=0;D<=s;D++){const S=[],_=D/s,F=_*(n-e)+e;for(let I=0;I<=r;I++){const L=I/r,W=L*l+a,Z=Math.sin(W),ie=Math.cos(W);P.x=F*Z,P.y=-_*i+m,P.z=F*ie,f.push(P.x,P.y,P.z),b.set(Z,C,ie).normalize(),d.push(b.x,b.y,b.z),h.push(L,1-_),S.push(g++)}v.push(S)}for(let D=0;D<r;D++)for(let S=0;S<s;S++){const _=v[S][D],F=v[S+1][D],I=v[S+1][D+1],L=v[S][D+1];u.push(_,F,L),u.push(F,I,L),E+=6}c.addGroup(p,E,0),p+=E}function y(b){const P=g,E=new Qe,C=new J;let D=0;const S=b===!0?e:n,_=b===!0?1:-1;for(let I=1;I<=r;I++)f.push(0,m*_,0),d.push(0,_,0),h.push(.5,.5),g++;const F=g;for(let I=0;I<=r;I++){const W=I/r*l+a,Z=Math.cos(W),ie=Math.sin(W);C.x=S*ie,C.y=m*_,C.z=S*Z,f.push(C.x,C.y,C.z),d.push(0,_,0),E.x=Z*.5+.5,E.y=ie*.5*_+.5,h.push(E.x,E.y),g++}for(let I=0;I<r;I++){const L=P+I,W=F+I;b===!0?u.push(W,W+1,L):u.push(W+1,W,L),D+=3}c.addGroup(p,D,b===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Iu extends li{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let f=e;const d=(n-e)/r,h=new J,g=new Qe;for(let v=0;v<=r;v++){for(let m=0;m<=i;m++){const p=s+m/i*o;h.x=f*Math.cos(p),h.y=f*Math.sin(p),l.push(h.x,h.y,h.z),c.push(0,0,1),g.x=(h.x/n+1)/2,g.y=(h.y/n+1)/2,u.push(g.x,g.y)}f+=d}for(let v=0;v<r;v++){const m=v*(i+1);for(let p=0;p<i;p++){const M=p+m,y=M,b=M+i+1,P=M+i+2,E=M+1;a.push(y,b,E),a.push(b,P,E)}}this.setIndex(a),this.setAttribute("position",new on(l,3)),this.setAttribute("normal",new on(c,3)),this.setAttribute("uv",new on(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Iu(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class X1 extends co{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ze(16777215),this.specular=new Ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ov,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Au,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $1 extends Ht{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class q1 extends $1{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tu);class Y1{static createButton(e,n={}){const i=document.createElement("button");function r(){if(n.domOverlay===void 0){const d=document.createElement("div");d.style.display="none",document.body.appendChild(d);const h=document.createElementNS("http://www.w3.org/2000/svg","svg");h.setAttribute("width",38),h.setAttribute("height",38),h.style.position="absolute",h.style.right="20px",h.style.top="20px",h.addEventListener("click",function(){c.end()}),d.appendChild(h);const g=document.createElementNS("http://www.w3.org/2000/svg","path");g.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),g.setAttribute("stroke","#fff"),g.setAttribute("stroke-width",2),h.appendChild(g),n.optionalFeatures===void 0&&(n.optionalFeatures=[]),n.optionalFeatures.push("dom-overlay"),n.domOverlay={root:d}}let c=null;async function u(d){d.addEventListener("end",f),e.xr.setReferenceSpaceType("local"),await e.xr.setSession(d),i.textContent="STOP AR",n.domOverlay.root.style.display="",c=d}function f(){c.removeEventListener("end",f),i.textContent="START AR",n.domOverlay.root.style.display="none",c=null}i.style.display="",i.style.cursor="pointer",i.style.left="calc(50% - 50px)",i.style.width="100px",i.textContent="START AR",i.onmouseenter=function(){i.style.opacity="1.0"},i.onmouseleave=function(){i.style.opacity="0.5"},i.onclick=function(){console.log("333"),c===null?navigator.xr.requestSession("immersive-ar",n).then(u):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",n).then(u).catch(d=>{console.warn(d)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",n).then(u).catch(d=>{console.warn(d)})}function s(){i.style.display="",i.style.cursor="auto",i.style.left="calc(50% - 75px)",i.style.width="150px",i.onmouseenter=null,i.onmouseleave=null,i.onclick=null}function o(){s(),i.textContent="AR NOT SUPPORTED"}function a(c){s(),console.warn("Exception when trying to call xr.isSessionSupported",c),i.textContent="AR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return i.id="ARButton",i.style.display="none",l(i),navigator.xr.isSessionSupported("immersive-ar").then(function(c){c?r():o()}).catch(a),i;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}}let Zh,Ea,Br,fn,Jl,ei,qo=null,Ql=!1;function j1(){Zh=document.getElementById("three-js-ar"),Br=new W1,Ea=new dn(70,window.innerWidth/window.innerHeight,.01,20);const t=new q1(16777215,12303359,3);t.position.set(.5,1,.25),Br.add(t),fn=new G1({antialias:!0,alpha:!0}),fn.setPixelRatio(window.devicePixelRatio),fn.setSize(window.innerWidth,window.innerHeight),fn.xr.enabled=!0,Zh.appendChild(fn.domElement),document.body.appendChild(Y1.createButton(fn,{requiredFeatures:["hit-test"]}));const e=new Lu(.1,.1,.2,32).translate(0,.1,0);function n(){if(ei.visible){const i=new X1({color:16777215*Math.random()}),r=new An(e,i);ei.matrix.decompose(r.position,r.quaternion,r.scale),r.scale.y=Math.random()*2+1,Br.add(r)}}Jl=fn.xr.getController(0),Jl.addEventListener("select",n),Br.add(Jl),ei=new An(new Iu(.15,.2,32).rotateX(-Math.PI/2),new Ru),ei.matrixAutoUpdate=!1,ei.visible=!1,Br.add(ei),window.addEventListener("resize",K1)}function K1(){Ea.aspect=window.innerWidth/window.innerHeight,Ea.updateProjectionMatrix(),fn.setSize(window.innerWidth,window.innerHeight)}function Z1(){fn.setAnimationLoop(J1)}function J1(t,e){if(e){const n=fn.xr.getReferenceSpace(),i=fn.xr.getSession();if(Ql===!1&&(i.requestReferenceSpace("viewer").then(function(r){i.requestHitTestSource({space:r}).then(function(s){qo=s})}),i.addEventListener("end",function(){Ql=!1,qo=null}),Ql=!0),qo){const r=e.getHitTestResults(qo);if(r.length){const s=r[0];ei.visible=!0,ei.matrix.fromArray(s.getPose(n).transform.matrix)}else ei.visible=!1}}fn.render(Br,Ea)}function Q1(){j1(),Z1(),console.log("13")}const eR={id:"three-js-ar",style:{width:"100%",height:"100%"}},tR=ss({__name:"ThreeAR",setup(t){return os(()=>{setTimeout(()=>{Q1()},2e3)}),pt(!0),(e,n)=>(gn(),Ri("div",eR))}}),ec=Symbol("Forwarded refs");function tc(t,e){let n=t;for(;n;){const i=Reflect.getOwnPropertyDescriptor(n,e);if(i)return i;n=Object.getPrototypeOf(n)}}function nR(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return t[ec]=n,new Proxy(t,{get(r,s){if(Reflect.has(r,s))return Reflect.get(r,s);if(!(typeof s=="symbol"||s.startsWith("$")||s.startsWith("__"))){for(const o of n)if(o.value&&Reflect.has(o.value,s)){const a=Reflect.get(o.value,s);return typeof a=="function"?a.bind(o.value):a}}},has(r,s){if(Reflect.has(r,s))return!0;if(typeof s=="symbol"||s.startsWith("$")||s.startsWith("__"))return!1;for(const o of n)if(o.value&&Reflect.has(o.value,s))return!0;return!1},set(r,s,o){if(Reflect.has(r,s))return Reflect.set(r,s,o);if(typeof s=="symbol"||s.startsWith("$")||s.startsWith("__"))return!1;for(const a of n)if(a.value&&Reflect.has(a.value,s))return Reflect.set(a.value,s,o);return!1},getOwnPropertyDescriptor(r,s){var a;const o=Reflect.getOwnPropertyDescriptor(r,s);if(o)return o;if(!(typeof s=="symbol"||s.startsWith("$")||s.startsWith("__"))){for(const l of n){if(!l.value)continue;const c=tc(l.value,s)??("_"in l.value?tc((a=l.value._)==null?void 0:a.setupState,s):void 0);if(c)return c}for(const l of n){const c=l.value&&l.value[ec];if(!c)continue;const u=c.slice();for(;u.length;){const f=u.shift(),d=tc(f.value,s);if(d)return d;const h=f.value&&f.value[ec];h&&u.push(...h)}}}}})}const Du=Symbol.for("vuetify:v-tabs"),iR=Re({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...bm(wg({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),Av=$e()({name:"VTab",props:iR(),setup(t,e){let{slots:n,attrs:i}=e;const{textColorClasses:r,textColorStyles:s}=Qr(t,"sliderColor"),o=pt(),a=pt(),l=ne(()=>t.direction==="horizontal"),c=ne(()=>{var f,d;return((d=(f=o.value)==null?void 0:f.group)==null?void 0:d.isSelected.value)??!1});function u(f){var h,g;let{value:d}=f;if(d){const v=(g=(h=o.value)==null?void 0:h.$el.parentElement)==null?void 0:g.querySelector(".v-tab--selected .v-tab__slider"),m=a.value;if(!v||!m)return;const p=getComputedStyle(v).color,M=v.getBoundingClientRect(),y=m.getBoundingClientRect(),b=l.value?"x":"y",P=l.value?"X":"Y",E=l.value?"right":"bottom",C=l.value?"width":"height",D=M[b],S=y[b],_=D>S?M[E]-y[E]:M[b]-y[b],F=Math.sign(_)>0?l.value?"right":"bottom":Math.sign(_)<0?l.value?"left":"top":"center",L=(Math.abs(_)+(Math.sign(_)<0?M[C]:y[C]))/Math.max(M[C],y[C])||0,W=M[C]/y[C]||0,Z=1.5;Tx(m,{backgroundColor:[p,"currentcolor"],transform:[`translate${P}(${_}px) scale${P}(${W})`,`translate${P}(${_/Z}px) scale${P}(${(L-1)/Z+1})`,"none"],transformOrigin:Array(3).fill(F)},{duration:225,easing:Kx})}}return nt(()=>{const f=dr.filterProps(t);return k(dr,sn({symbol:Du,ref:o,class:["v-tab",t.class],style:t.style,tabindex:c.value?0:-1,role:"tab","aria-selected":String(c.value),active:!1},f,i,{block:t.fixed,maxWidth:t.fixed?300:void 0,"onGroup:selected":u}),{...n,default:()=>{var d;return k(ot,null,[((d=n.default)==null?void 0:d.call(n))??t.text,!t.hideSlider&&k("div",{ref:a,class:["v-tab__slider",r.value],style:s.value},null)])}})}),nR({},o)}}),rR=t=>{const{touchstartX:e,touchendX:n,touchstartY:i,touchendY:r}=t,s=.5,o=16;t.offsetX=n-e,t.offsetY=r-i,Math.abs(t.offsetY)<s*Math.abs(t.offsetX)&&(t.left&&n<e-o&&t.left(t),t.right&&n>e+o&&t.right(t)),Math.abs(t.offsetX)<s*Math.abs(t.offsetY)&&(t.up&&r<i-o&&t.up(t),t.down&&r>i+o&&t.down(t))};function sR(t,e){var i;const n=t.changedTouches[0];e.touchstartX=n.clientX,e.touchstartY=n.clientY,(i=e.start)==null||i.call(e,{originalEvent:t,...e})}function oR(t,e){var i;const n=t.changedTouches[0];e.touchendX=n.clientX,e.touchendY=n.clientY,(i=e.end)==null||i.call(e,{originalEvent:t,...e}),rR(e)}function aR(t,e){var i;const n=t.changedTouches[0];e.touchmoveX=n.clientX,e.touchmoveY=n.clientY,(i=e.move)==null||i.call(e,{originalEvent:t,...e})}function lR(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:n=>sR(n,e),touchend:n=>oR(n,e),touchmove:n=>aR(n,e)}}function cR(t,e){var a;const n=e.value,i=n!=null&&n.parent?t.parentElement:t,r=(n==null?void 0:n.options)??{passive:!0},s=(a=e.instance)==null?void 0:a.$.uid;if(!i||!s)return;const o=lR(e.value);i._touchHandlers=i._touchHandlers??Object.create(null),i._touchHandlers[s]=o,Mm(o).forEach(l=>{i.addEventListener(l,o[l],r)})}function uR(t,e){var s,o;const n=(s=e.value)!=null&&s.parent?t.parentElement:t,i=(o=e.instance)==null?void 0:o.$.uid;if(!(n!=null&&n._touchHandlers)||!i)return;const r=n._touchHandlers[i];Mm(r).forEach(a=>{n.removeEventListener(a,r[a])}),delete n._touchHandlers[i]}const wv={mounted:cR,unmounted:uR},Cv=Symbol.for("vuetify:v-window"),Rv=Symbol.for("vuetify:v-window-group"),Pv=Re({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:t=>typeof t=="boolean"||t==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...lt(),...Ct(),...Rn()},"VWindow"),Jh=$e()({name:"VWindow",directives:{Touch:wv},props:Pv(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const{themeClasses:i}=Pn(t),{isRtl:r}=zi(),{t:s}=ny(),o=xu(t,Rv),a=pt(),l=ne(()=>r.value?!t.reverse:t.reverse),c=Je(!1),u=ne(()=>{const b=t.direction==="vertical"?"y":"x",E=(l.value?!c.value:c.value)?"-reverse":"";return`v-window-${b}${E}-transition`}),f=Je(0),d=pt(void 0),h=ne(()=>o.items.value.findIndex(b=>o.selected.value.includes(b.id)));ht(h,(b,P)=>{const E=o.items.value.length,C=E-1;E<=2?c.value=b<P:b===C&&P===0?c.value=!0:b===0&&P===C?c.value=!1:c.value=b<P}),xn(Cv,{transition:u,isReversed:c,transitionCount:f,transitionHeight:d,rootRef:a});const g=ne(()=>t.continuous||h.value!==0),v=ne(()=>t.continuous||h.value!==o.items.value.length-1);function m(){g.value&&o.prev()}function p(){v.value&&o.next()}const M=ne(()=>{const b=[],P={icon:r.value?t.nextIcon:t.prevIcon,class:`v-window__${l.value?"right":"left"}`,onClick:o.prev,"aria-label":s("$vuetify.carousel.prev")};b.push(g.value?n.prev?n.prev({props:P}):k(dr,P,null):k("div",null,null));const E={icon:r.value?t.prevIcon:t.nextIcon,class:`v-window__${l.value?"left":"right"}`,onClick:o.next,"aria-label":s("$vuetify.carousel.next")};return b.push(v.value?n.next?n.next({props:E}):k(dr,E,null):k("div",null,null)),b}),y=ne(()=>t.touch===!1?t.touch:{...{left:()=>{l.value?m():p()},right:()=>{l.value?p():m()},start:P=>{let{originalEvent:E}=P;E.stopPropagation()}},...t.touch===!0?{}:t.touch});return nt(()=>fr(k(t.tag,{ref:a,class:["v-window",{"v-window--show-arrows-on-hover":t.showArrows==="hover"},i.value,t.class],style:t.style},{default:()=>{var b,P;return[k("div",{class:"v-window__container",style:{height:d.value}},[(b=n.default)==null?void 0:b.call(n,{group:o}),t.showArrows!==!1&&k("div",{class:"v-window__controls"},[M.value])]),(P=n.additional)==null?void 0:P.call(n,{group:o})]}}),[[Zc("touch"),y.value]])),{group:o}}}),fR=Re({...bm(Pv(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VTabsWindow"),Lv=$e()({name:"VTabsWindow",props:fR(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const i=gt(Du,null),r=ls(t,"modelValue"),s=ne({get(){var o;return r.value!=null||!i?r.value:(o=i.items.value.find(a=>i.selected.value.includes(a.id)))==null?void 0:o.value},set(o){r.value=o}});return nt(()=>{const o=Jh.filterProps(t);return k(Jh,sn({_as:"VTabsWindow"},o,{modelValue:s.value,"onUpdate:modelValue":a=>s.value=a,class:["v-tabs-window",t.class],style:t.style,mandatory:!1,touch:!1}),n)}),{}}}),dR=Re({eager:Boolean},"lazy");function hR(t,e){const n=Je(!1),i=ne(()=>n.value||t.eager||e.value);ht(e,()=>n.value=!0);function r(){t.eager||(n.value=!1)}return{isBooted:n,hasContent:i,onAfterLeave:r}}const Iv=Re({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...lt(),...ag(),...dR()},"VWindowItem"),Qh=$e()({name:"VWindowItem",directives:{Touch:wv},props:Iv(),emits:{"group:selected":t=>!0},setup(t,e){let{slots:n}=e;const i=gt(Cv),r=lg(t,Rv),{isBooted:s}=Eu();if(!i||!r)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const o=Je(!1),a=ne(()=>s.value&&(i.isReversed.value?t.reverseTransition!==!1:t.transition!==!1));function l(){!o.value||!i||(o.value=!1,i.transitionCount.value>0&&(i.transitionCount.value-=1,i.transitionCount.value===0&&(i.transitionHeight.value=void 0)))}function c(){var g;o.value||!i||(o.value=!0,i.transitionCount.value===0&&(i.transitionHeight.value=Ye((g=i.rootRef.value)==null?void 0:g.clientHeight)),i.transitionCount.value+=1)}function u(){l()}function f(g){o.value&&si(()=>{!a.value||!o.value||!i||(i.transitionHeight.value=Ye(g.clientHeight))})}const d=ne(()=>{const g=i.isReversed.value?t.reverseTransition:t.transition;return a.value?{name:typeof g!="string"?i.transition.value:g,onBeforeEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:c,onAfterLeave:l,onLeaveCancelled:u,onEnter:f}:!1}),{hasContent:h}=hR(t,r.isSelected);return nt(()=>k(bs,{transition:d.value,disabled:!s.value},{default:()=>{var g;return[fr(k("div",{class:["v-window-item",r.selectedClass.value,t.class],style:t.style},[h.value&&((g=n.default)==null?void 0:g.call(n))]),[[lu,r.isSelected.value]])]}})),{groupItem:r}}}),pR=Re({...Iv()},"VTabsWindowItem"),Dv=$e()({name:"VTabsWindowItem",props:pR(),setup(t,e){let{slots:n}=e;return nt(()=>{const i=Qh.filterProps(t);return k(Qh,sn({_as:"VTabsWindowItem"},i,{class:["v-tabs-window-item",t.class],style:t.style}),n)}),{}}});function mR(t){let{selectedElement:e,containerElement:n,isRtl:i,isHorizontal:r}=t;const s=js(r,n),o=Uv(r,i,n),a=js(r,e),l=Nv(r,e),c=a*.4;return o>l?l-c:o+s<l+a?l-s+a+c:o}function gR(t){let{selectedElement:e,containerElement:n,isHorizontal:i}=t;const r=js(i,n),s=Nv(i,e),o=js(i,e);return s-r/2+o/2}function ep(t,e){const n=t?"scrollWidth":"scrollHeight";return(e==null?void 0:e[n])||0}function vR(t,e){const n=t?"clientWidth":"clientHeight";return(e==null?void 0:e[n])||0}function Uv(t,e,n){if(!n)return 0;const{scrollLeft:i,offsetWidth:r,scrollWidth:s}=n;return t?e?s-r+i:i:n.scrollTop}function js(t,e){const n=t?"offsetWidth":"offsetHeight";return(e==null?void 0:e[n])||0}function Nv(t,e){const n=t?"offsetLeft":"offsetTop";return(e==null?void 0:e[n])||0}const _R=Symbol.for("vuetify:v-slide-group"),Fv=Re({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:_R},nextIcon:{type:wn,default:"$next"},prevIcon:{type:wn,default:"$prev"},showArrows:{type:[Boolean,String],validator:t=>typeof t=="boolean"||["always","desktop","mobile"].includes(t)},...lt(),...Yy({mobile:null}),...Ct(),...og({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),tp=$e()({name:"VSlideGroup",props:Fv(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const{isRtl:i}=zi(),{displayClasses:r,mobile:s}=jy(t),o=xu(t,t.symbol),a=Je(!1),l=Je(0),c=Je(0),u=Je(0),f=ne(()=>t.direction==="horizontal"),{resizeRef:d,contentRect:h}=ma(),{resizeRef:g,contentRect:v}=ma(),m=Jy(),p=ne(()=>({container:d.el,duration:200,easing:"easeOutQuart"})),M=ne(()=>o.selected.value.length?o.items.value.findIndex(Q=>Q.id===o.selected.value[0]):-1),y=ne(()=>o.selected.value.length?o.items.value.findIndex(Q=>Q.id===o.selected.value[o.selected.value.length-1]):-1);if(Yt){let Q=-1;ht(()=>[o.selected.value,h.value,v.value,f.value],()=>{cancelAnimationFrame(Q),Q=requestAnimationFrame(()=>{if(h.value&&v.value){const ae=f.value?"width":"height";c.value=h.value[ae],u.value=v.value[ae],a.value=c.value+1<u.value}if(M.value>=0&&g.el){const ae=g.el.children[y.value];P(ae,t.centerActive)}})})}const b=Je(!1);function P(Q,ae){let _e=0;ae?_e=gR({containerElement:d.el,isHorizontal:f.value,selectedElement:Q}):_e=mR({containerElement:d.el,isHorizontal:f.value,isRtl:i.value,selectedElement:Q}),E(_e)}function E(Q){if(!Yt||!d.el)return;const ae=js(f.value,d.el),_e=Uv(f.value,i.value,d.el);if(!(ep(f.value,d.el)<=ae||Math.abs(Q-_e)<16)){if(f.value&&i.value&&d.el){const{scrollWidth:te,offsetWidth:ge}=d.el;Q=te-ge-Q}f.value?m.horizontal(Q,p.value):m(Q,p.value)}}function C(Q){const{scrollTop:ae,scrollLeft:_e}=Q.target;l.value=f.value?_e:ae}function D(Q){if(b.value=!0,!(!a.value||!g.el)){for(const ae of Q.composedPath())for(const _e of g.el.children)if(_e===ae){P(_e);return}}}function S(Q){b.value=!1}let _=!1;function F(Q){var ae;!_&&!b.value&&!(Q.relatedTarget&&((ae=g.el)!=null&&ae.contains(Q.relatedTarget)))&&W(),_=!1}function I(){_=!0}function L(Q){if(!g.el)return;function ae(_e){Q.preventDefault(),W(_e)}f.value?Q.key==="ArrowRight"?ae(i.value?"prev":"next"):Q.key==="ArrowLeft"&&ae(i.value?"next":"prev"):Q.key==="ArrowDown"?ae("next"):Q.key==="ArrowUp"&&ae("prev"),Q.key==="Home"?ae("first"):Q.key==="End"&&ae("last")}function W(Q){var _e,Be;if(!g.el)return;let ae;if(!Q)ae=yx(g.el)[0];else if(Q==="next"){if(ae=(_e=g.el.querySelector(":focus"))==null?void 0:_e.nextElementSibling,!ae)return W("first")}else if(Q==="prev"){if(ae=(Be=g.el.querySelector(":focus"))==null?void 0:Be.previousElementSibling,!ae)return W("last")}else Q==="first"?ae=g.el.firstElementChild:Q==="last"&&(ae=g.el.lastElementChild);ae&&ae.focus({preventScroll:!0})}function Z(Q){const ae=f.value&&i.value?-1:1,_e=(Q==="prev"?-ae:ae)*c.value;let Be=l.value+_e;if(f.value&&i.value&&d.el){const{scrollWidth:te,offsetWidth:ge}=d.el;Be+=te-ge}E(Be)}const ie=ne(()=>({next:o.next,prev:o.prev,select:o.select,isSelected:o.isSelected})),re=ne(()=>{switch(t.showArrows){case"always":return!0;case"desktop":return!s.value;case!0:return a.value||Math.abs(l.value)>0;case"mobile":return s.value||a.value||Math.abs(l.value)>0;default:return!s.value&&(a.value||Math.abs(l.value)>0)}}),G=ne(()=>Math.abs(l.value)>1),me=ne(()=>{if(!d.value)return!1;const Q=ep(f.value,d.el),ae=vR(f.value,d.el);return Q-ae-Math.abs(l.value)>1});return nt(()=>k(t.tag,{class:["v-slide-group",{"v-slide-group--vertical":!f.value,"v-slide-group--has-affixes":re.value,"v-slide-group--is-overflowing":a.value},r.value,t.class],style:t.style,tabindex:b.value||o.selected.value.length?-1:0,onFocus:F},{default:()=>{var Q,ae,_e;return[re.value&&k("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!G.value}],onMousedown:I,onClick:()=>G.value&&Z("prev")},[((Q=n.prev)==null?void 0:Q.call(n,ie.value))??k(Rd,null,{default:()=>[k(Pi,{icon:i.value?t.nextIcon:t.prevIcon},null)]})]),k("div",{key:"container",ref:d,class:"v-slide-group__container",onScroll:C},[k("div",{ref:g,class:"v-slide-group__content",onFocusin:D,onFocusout:S,onKeydown:L},[(ae=n.default)==null?void 0:ae.call(n,ie.value)])]),re.value&&k("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!me.value}],onMousedown:I,onClick:()=>me.value&&Z("next")},[((_e=n.next)==null?void 0:_e.call(n,ie.value))??k(Rd,null,{default:()=>[k(Pi,{icon:i.value?t.prevIcon:t.nextIcon},null)]})])]}})),{selected:o.selected,scrollTo:Z,scrollOffset:l,focus:W}}});function xR(){const e=Jt("useScopeId").vnode.scopeId;return{scopeId:e?{[e]:""}:void 0}}function yR(t){return t?t.map(e=>ua(e)?e:{text:e,value:e}):[]}const SR=Re({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...Fv({mandatory:"force",selectedClass:"v-tab-item--selected"}),...cs(),...Ct()},"VTabs"),MR=$e()({name:"VTabs",props:SR(),emits:{"update:modelValue":t=>!0},setup(t,e){let{attrs:n,slots:i}=e;const r=ls(t,"modelValue"),s=ne(()=>yR(t.items)),{densityClasses:o}=no(t),{backgroundColorClasses:a,backgroundColorStyles:l}=Wr(mt(t,"bgColor")),{scopeId:c}=xR();return eo({VTab:{color:mt(t,"color"),direction:mt(t,"direction"),stacked:mt(t,"stacked"),fixed:mt(t,"fixedTabs"),sliderColor:mt(t,"sliderColor"),hideSlider:mt(t,"hideSlider")}}),nt(()=>{const u=tp.filterProps(t),f=!!(i.window||t.items.length>0);return k(ot,null,[k(tp,sn(u,{modelValue:r.value,"onUpdate:modelValue":d=>r.value=d,class:["v-tabs",`v-tabs--${t.direction}`,`v-tabs--align-tabs-${t.alignTabs}`,{"v-tabs--fixed-tabs":t.fixedTabs,"v-tabs--grow":t.grow,"v-tabs--stacked":t.stacked},o.value,a.value,t.class],style:[{"--v-tabs-height":Ye(t.height)},l.value,t.style],role:"tablist",symbol:Du},c,n),{default:()=>{var d;return[((d=i.default)==null?void 0:d.call(i))??s.value.map(h=>{var g;return((g=i.tab)==null?void 0:g.call(i,{item:h}))??k(Av,sn(h,{key:h.text,value:h.value}),{default:()=>{var v;return(v=i[`tab.${h.value}`])==null?void 0:v.call(i,{item:h})}})})]}}),f&&k(Lv,sn({modelValue:r.value,"onUpdate:modelValue":d=>r.value=d,key:"tabs-window"},c),{default:()=>{var d;return[s.value.map(h=>{var g;return((g=i.item)==null?void 0:g.call(i,{item:h}))??k(Dv,{value:h.value},{default:()=>{var v;return(v=i[`item.${h.value}`])==null?void 0:v.call(i,{item:h})}})}),(d=i.window)==null?void 0:d.call(i)]}})])}),{}}}),bR={__name:"AugmentedReality",setup(t){const e=rg(),n=pt("three-ar"),i=()=>{e.push("/")},r=[{id:"three-js-ar",name:"Example 1",component:tR},{id:"check",name:"Checking WebXr available",component:wb}];return(s,o)=>(gn(),Ri(ot,null,[k(jg,{color:"primary",density:"compact"},{default:bt(()=>[k(MR,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=a=>n.value=a),"bg-color":"primary","fixed-tabs":"","align-tabs":"center"},{default:bt(()=>[(gn(),Ri(ot,null,ia(r,a=>k(Av,{key:a.id,value:a.id,text:a.name},null,8,["value","text"])),64))]),_:1},8,["modelValue"]),k(Hg),k(dr,{icon:"mdi-home",color:"white",onClick:i})]),_:1}),k(Lv,{modelValue:n.value,"onUpdate:modelValue":o[1]||(o[1]=a=>n.value=a)},{default:bt(()=>[(gn(),Ri(ot,null,ia(r,a=>k(Dv,{key:a.id,value:a.id},{default:bt(()=>[(gn(),su(Op(a.component)))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])],64))}},Ov=[{path:"/",component:bb},{path:"/ar",component:bR}],ER=mM({history:WS(),routes:Ov}),TR=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},AR=Re({...lt(),...Wm({fullHeight:!0}),...Rn()},"VApp"),wR=$e()({name:"VApp",props:AR(),setup(t,e){let{slots:n}=e;const i=Pn(t),{layoutClasses:r,getLayoutItem:s,items:o,layoutRef:a}=Xm(t),{rtlClasses:l}=zi();return nt(()=>k("div",{ref:a,class:["v-application",i.themeClasses.value,r.value,l.value,t.class],style:[t.style]},[k("div",{class:"v-application__wrap"},[k(Bp,null,{default:()=>{var c;return[k(ot,null,[(c=n.default)==null?void 0:c.call(n)])]}})])])),{getLayoutItem:s,items:o,theme:i}}}),CR={};function RR(t,e){const n=V_("router-view");return gn(),su(wR,{class:"bg-white"},{default:bt(()=>[k(Kg,null,{default:bt(()=>[k(n)]),_:1})]),_:1})}const PR=TR(CR,[["render",RR]]),Uu=dx(PR);hS(Uu);Uu.use(ER);Uu.mount("#app");
