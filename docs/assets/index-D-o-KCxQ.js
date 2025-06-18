var Sf=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)};var Tn=(t,e,n)=>(Sf(t,e,"read from private field"),n?n.call(t):e.get(t)),wr=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},ws=(t,e,n,i)=>(Sf(t,e,"write to private field"),i?i.call(t,n):e.set(t,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function hu(t,e){const n=new Set(t.split(","));return i=>n.has(i)}const dt={},jr=[],vn=()=>{},g_=()=>!1,$a=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),pu=t=>t.startsWith("onUpdate:"),Mt=Object.assign,mu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},v_=Object.prototype.hasOwnProperty,Ke=(t,e)=>v_.call(t,e),De=Array.isArray,Kr=t=>qa(t)==="[object Map]",Bp=t=>qa(t)==="[object Set]",Ue=t=>typeof t=="function",yt=t=>typeof t=="string",br=t=>typeof t=="symbol",at=t=>t!==null&&typeof t=="object",kp=t=>(at(t)||Ue(t))&&Ue(t.then)&&Ue(t.catch),Vp=Object.prototype.toString,qa=t=>Vp.call(t),__=t=>qa(t).slice(8,-1),zp=t=>qa(t)==="[object Object]",gu=t=>yt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Vs=hu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ya=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},y_=/-(\w)/g,bn=Ya(t=>t.replace(y_,(e,n)=>n?n.toUpperCase():"")),x_=/\B([A-Z])/g,vs=Ya(t=>t.replace(x_,"-$1").toLowerCase()),ui=Ya(t=>t.charAt(0).toUpperCase()+t.slice(1)),Tl=Ya(t=>t?`on${ui(t)}`:""),Vi=(t,e)=>!Object.is(t,e),Al=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Hp=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},S_=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Gp=t=>{const e=yt(t)?Number(t):NaN;return isNaN(e)?t:e};let Mf;const Wp=()=>Mf||(Mf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function vu(t){if(De(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=yt(i)?T_(i):vu(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(yt(t)||at(t))return t}const M_=/;(?![^(]*\))/g,b_=/:([^]+)/,E_=/\/\*[^]*?\*\//g;function T_(t){const e={};return t.replace(E_,"").split(M_).forEach(n=>{if(n){const i=n.split(b_);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function _u(t){let e="";if(yt(t))e=t;else if(De(t))for(let n=0;n<t.length;n++){const i=_u(t[n]);i&&(e+=i+" ")}else if(at(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const A_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",w_=hu(A_);function Xp(t){return!!t||t===""}const ga=t=>yt(t)?t:t==null?"":De(t)||at(t)&&(t.toString===Vp||!Ue(t.toString))?JSON.stringify(t,$p,2):String(t),$p=(t,e)=>e&&e.__v_isRef?$p(t,e.value):Kr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[wl(i,s)+" =>"]=r,n),{})}:Bp(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>wl(n))}:br(e)?wl(e):at(e)&&!De(e)&&!zp(e)?String(e):e,wl=(t,e="")=>{var n;return br(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let sn;class qp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=sn,!e&&sn&&(this.index=(sn.scopes||(sn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=sn;try{return sn=this,e()}finally{sn=n}}}on(){sn=this}off(){sn=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function yu(t){return new qp(t)}function C_(t,e=sn){e&&e.active&&e.effects.push(t)}function R_(){return sn}function En(t){sn&&sn.cleanups.push(t)}let mr;class xu{constructor(e,n,i,r){this.fn=e,this.trigger=n,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,C_(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,$i();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(P_(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),qi()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Oi,n=mr;try{return Oi=!0,mr=this,this._runnings++,bf(this),this.fn()}finally{Ef(this),this._runnings--,mr=n,Oi=e}}stop(){this.active&&(bf(this),Ef(this),this.onStop&&this.onStop(),this.active=!1)}}function P_(t){return t.value}function bf(t){t._trackId++,t._depsLength=0}function Ef(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Yp(t.deps[e],t);t.deps.length=t._depsLength}}function Yp(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Oi=!0,Cc=0;const jp=[];function $i(){jp.push(Oi),Oi=!1}function qi(){const t=jp.pop();Oi=t===void 0?!0:t}function Su(){Cc++}function Mu(){for(Cc--;!Cc&&Rc.length;)Rc.shift()()}function Kp(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const i=t.deps[t._depsLength];i!==e?(i&&Yp(i,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Rc=[];function Zp(t,e,n){Su();for(const i of t.keys()){let r;i._dirtyLevel<e&&(r??(r=t.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=e),i._shouldSchedule&&(r??(r=t.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&Rc.push(i.scheduler)))}Mu()}const Jp=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Ta=new WeakMap,gr=Symbol(""),Pc=Symbol("");function en(t,e,n){if(Oi&&mr){let i=Ta.get(t);i||Ta.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=Jp(()=>i.delete(n))),Kp(mr,r)}}function li(t,e,n,i,r,s){const o=Ta.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&De(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!br(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":De(t)?gu(n)&&a.push(o.get("length")):(a.push(o.get(gr)),Kr(t)&&a.push(o.get(Pc)));break;case"delete":De(t)||(a.push(o.get(gr)),Kr(t)&&a.push(o.get(Pc)));break;case"set":Kr(t)&&a.push(o.get(gr));break}Su();for(const l of a)l&&Zp(l,4);Mu()}function L_(t,e){const n=Ta.get(t);return n&&n.get(e)}const I_=hu("__proto__,__v_isRef,__isVue"),Qp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(br)),Tf=D_();function D_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=je(this);for(let s=0,o=this.length;s<o;s++)en(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(je)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){$i(),Su();const i=je(this)[e].apply(this,n);return Mu(),qi(),i}}),t}function N_(t){br(t)||(t=String(t));const e=je(this);return en(e,"has",t),e.hasOwnProperty(t)}class em{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?q_:rm:s?im:nm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=De(e);if(!r){if(o&&Ke(Tf,n))return Reflect.get(Tf,n,i);if(n==="hasOwnProperty")return N_}const a=Reflect.get(e,n,i);return(br(n)?Qp.has(n):I_(n))||(r||en(e,"get",n),s)?a:xt(a)?o&&gu(n)?a:a.value:at(a)?r?_s(a):Bt(a):a}}class tm extends em{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const l=js(s);if(!Aa(i)&&!js(i)&&(s=je(s),i=je(i)),!De(e)&&xt(s)&&!xt(i))return l?!1:(s.value=i,!0)}const o=De(e)&&gu(n)?Number(n)<e.length:Ke(e,n),a=Reflect.set(e,n,i,r);return e===je(r)&&(o?Vi(i,s)&&li(e,"set",n,i):li(e,"add",n,i)),a}deleteProperty(e,n){const i=Ke(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&li(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!br(n)||!Qp.has(n))&&en(e,"has",n),i}ownKeys(e){return en(e,"iterate",De(e)?"length":gr),Reflect.ownKeys(e)}}class U_ extends em{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const O_=new tm,F_=new U_,B_=new tm(!0);const bu=t=>t,ja=t=>Reflect.getPrototypeOf(t);function Uo(t,e,n=!1,i=!1){t=t.__v_raw;const r=je(t),s=je(e);n||(Vi(e,s)&&en(r,"get",e),en(r,"get",s));const{has:o}=ja(r),a=i?bu:n?Au:Ks;if(o.call(r,e))return a(t.get(e));if(o.call(r,s))return a(t.get(s));t!==r&&t.get(e)}function Oo(t,e=!1){const n=this.__v_raw,i=je(n),r=je(t);return e||(Vi(t,r)&&en(i,"has",t),en(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Fo(t,e=!1){return t=t.__v_raw,!e&&en(je(t),"iterate",gr),Reflect.get(t,"size",t)}function Af(t){t=je(t);const e=je(this);return ja(e).has.call(e,t)||(e.add(t),li(e,"add",t,t)),this}function wf(t,e){e=je(e);const n=je(this),{has:i,get:r}=ja(n);let s=i.call(n,t);s||(t=je(t),s=i.call(n,t));const o=r.call(n,t);return n.set(t,e),s?Vi(e,o)&&li(n,"set",t,e):li(n,"add",t,e),this}function Cf(t){const e=je(this),{has:n,get:i}=ja(e);let r=n.call(e,t);r||(t=je(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&li(e,"delete",t,void 0),s}function Rf(){const t=je(this),e=t.size!==0,n=t.clear();return e&&li(t,"clear",void 0,void 0),n}function Bo(t,e){return function(i,r){const s=this,o=s.__v_raw,a=je(o),l=e?bu:t?Au:Ks;return!t&&en(a,"iterate",gr),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function ko(t,e,n){return function(...i){const r=this.__v_raw,s=je(r),o=Kr(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?bu:e?Au:Ks;return!e&&en(s,"iterate",l?Pc:gr),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function vi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function k_(){const t={get(s){return Uo(this,s)},get size(){return Fo(this)},has:Oo,add:Af,set:wf,delete:Cf,clear:Rf,forEach:Bo(!1,!1)},e={get(s){return Uo(this,s,!1,!0)},get size(){return Fo(this)},has:Oo,add:Af,set:wf,delete:Cf,clear:Rf,forEach:Bo(!1,!0)},n={get(s){return Uo(this,s,!0)},get size(){return Fo(this,!0)},has(s){return Oo.call(this,s,!0)},add:vi("add"),set:vi("set"),delete:vi("delete"),clear:vi("clear"),forEach:Bo(!0,!1)},i={get(s){return Uo(this,s,!0,!0)},get size(){return Fo(this,!0)},has(s){return Oo.call(this,s,!0)},add:vi("add"),set:vi("set"),delete:vi("delete"),clear:vi("clear"),forEach:Bo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=ko(s,!1,!1),n[s]=ko(s,!0,!1),e[s]=ko(s,!1,!0),i[s]=ko(s,!0,!0)}),[t,n,e,i]}const[V_,z_,H_,G_]=k_();function Eu(t,e){const n=e?t?G_:H_:t?z_:V_;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(Ke(n,r)&&r in i?n:i,r,s)}const W_={get:Eu(!1,!1)},X_={get:Eu(!1,!0)},$_={get:Eu(!0,!1)};const nm=new WeakMap,im=new WeakMap,rm=new WeakMap,q_=new WeakMap;function Y_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function j_(t){return t.__v_skip||!Object.isExtensible(t)?0:Y_(__(t))}function Bt(t){return js(t)?t:Tu(t,!1,O_,W_,nm)}function sm(t){return Tu(t,!1,B_,X_,im)}function _s(t){return Tu(t,!0,F_,$_,rm)}function Tu(t,e,n,i,r){if(!at(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=j_(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function zs(t){return js(t)?zs(t.__v_raw):!!(t&&t.__v_isReactive)}function js(t){return!!(t&&t.__v_isReadonly)}function Aa(t){return!!(t&&t.__v_isShallow)}function om(t){return t?!!t.__v_raw:!1}function je(t){const e=t&&t.__v_raw;return e?je(e):t}function K_(t){return Object.isExtensible(t)&&Hp(t,"__v_skip",!0),t}const Ks=t=>at(t)?Bt(t):t,Au=t=>at(t)?_s(t):t;class am{constructor(e,n,i,r){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new xu(()=>e(this._value),()=>va(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=je(this);return(!e._cacheable||e.effect.dirty)&&Vi(e._value,e._value=e.effect.run())&&va(e,4),lm(e),e.effect._dirtyLevel>=2&&va(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Z_(t,e,n=!1){let i,r;const s=Ue(t);return s?(i=t,r=vn):(i=t.get,r=t.set),new am(i,r,s||!r,n)}function lm(t){var e;Oi&&mr&&(t=je(t),Kp(mr,(e=t.dep)!=null?e:t.dep=Jp(()=>t.dep=void 0,t instanceof am?t:void 0)))}function va(t,e=4,n){t=je(t);const i=t.dep;i&&Zp(i,e)}function xt(t){return!!(t&&t.__v_isRef===!0)}function nt(t){return cm(t,!1)}function Je(t){return cm(t,!0)}function cm(t,e){return xt(t)?t:new J_(t,e)}class J_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:je(e),this._value=n?e:Ks(e)}get value(){return lm(this),this._value}set value(e){const n=this.__v_isShallow||Aa(e)||js(e);e=n?e:je(e),Vi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ks(e),va(this,4))}}function $t(t){return xt(t)?t.value:t}const Q_={get:(t,e,n)=>$t(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return xt(r)&&!xt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function um(t){return zs(t)?t:new Proxy(t,Q_)}function wu(t){const e=De(t)?new Array(t.length):{};for(const n in t)e[n]=fm(t,n);return e}class e0{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return L_(je(this._object),this._key)}}class t0{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Rt(t,e,n){return xt(t)?t:Ue(t)?new t0(t):at(t)&&arguments.length>1?fm(t,e,n):nt(t)}function fm(t,e,n){const i=t[e];return xt(i)?i:new e0(t,e,n)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fi(t,e,n,i){try{return i?t(...i):t()}catch(r){go(r,e,n)}}function Sn(t,e,n,i){if(Ue(t)){const r=Fi(t,e,n,i);return r&&kp(r)&&r.catch(s=>{go(s,e,n)}),r}if(De(t)){const r=[];for(let s=0;s<t.length;s++)r.push(Sn(t[s],e,n,i));return r}}function go(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){$i(),Fi(l,null,10,[t,o,a]),qi();return}}n0(t,n,r,i)}function n0(t,e,n,i=!0){console.error(t)}let Zs=!1,Lc=!1;const kt=[];let Vn=0;const Zr=[];let wi=null,cr=0;const dm=Promise.resolve();let Cu=null;function cn(t){const e=Cu||dm;return t?e.then(this?t.bind(this):t):e}function i0(t){let e=Vn+1,n=kt.length;for(;e<n;){const i=e+n>>>1,r=kt[i],s=Js(r);s<t||s===t&&r.pre?e=i+1:n=i}return e}function Ru(t){(!kt.length||!kt.includes(t,Zs&&t.allowRecurse?Vn+1:Vn))&&(t.id==null?kt.push(t):kt.splice(i0(t.id),0,t),hm())}function hm(){!Zs&&!Lc&&(Lc=!0,Cu=dm.then(mm))}function r0(t){const e=kt.indexOf(t);e>Vn&&kt.splice(e,1)}function Ic(t){De(t)?Zr.push(...t):(!wi||!wi.includes(t,t.allowRecurse?cr+1:cr))&&Zr.push(t),hm()}function Pf(t,e,n=Zs?Vn+1:0){for(;n<kt.length;n++){const i=kt[n];if(i&&i.pre){if(t&&i.id!==t.uid)continue;kt.splice(n,1),n--,i()}}}function pm(t){if(Zr.length){const e=[...new Set(Zr)].sort((n,i)=>Js(n)-Js(i));if(Zr.length=0,wi){wi.push(...e);return}for(wi=e,cr=0;cr<wi.length;cr++)wi[cr]();wi=null,cr=0}}const Js=t=>t.id==null?1/0:t.id,s0=(t,e)=>{const n=Js(t)-Js(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function mm(t){Lc=!1,Zs=!0,kt.sort(s0);try{for(Vn=0;Vn<kt.length;Vn++){const e=kt[Vn];e&&e.active!==!1&&Fi(e,null,14)}}finally{Vn=0,kt.length=0,pm(),Zs=!1,Cu=null,(kt.length||Zr.length)&&mm()}}function o0(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||dt;let r=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:d}=i[u]||dt;d&&(r=n.map(h=>yt(h)?h.trim():h)),f&&(r=n.map(S_))}let a,l=i[a=Tl(e)]||i[a=Tl(bn(e))];!l&&s&&(l=i[a=Tl(vs(e))]),l&&Sn(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Sn(c,t,6,r)}}function gm(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!Ue(t)){const l=c=>{const u=gm(c,e,!0);u&&(a=!0,Mt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(at(t)&&i.set(t,null),null):(De(s)?s.forEach(l=>o[l]=null):Mt(o,s),at(t)&&i.set(t,o),o)}function Ka(t,e){return!t||!$a(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ke(t,e[0].toLowerCase()+e.slice(1))||Ke(t,vs(e))||Ke(t,e))}let qt=null,Za=null;function wa(t){const e=qt;return qt=t,Za=t&&t.type.__scopeId||null,e}function vm(t){Za=t}function _m(){Za=null}function St(t,e=qt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Xf(-1);const s=wa(e);let o;try{o=t(...r)}finally{wa(s),i._d&&Xf(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Cl(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:v,inheritAttrs:g}=t,m=wa(t);let p,M;try{if(n.shapeFlag&4){const T=r||i,L=T;p=Rn(c.call(L,T,u,f,h,d,v)),M=a}else{const T=e;p=Rn(T.length>1?T(f,{attrs:a,slots:o,emit:l}):T(f,null)),M=e.props?a:l0(a)}}catch(T){Xs.length=0,go(T,t,1),p=z(_n)}let x=p;if(M&&g!==!1){const T=Object.keys(M),{shapeFlag:L}=x;T.length&&L&7&&(s&&T.some(pu)&&(M=c0(M,s)),x=Hi(x,M,!1,!0))}return n.dirs&&(x=Hi(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&(x.transition=n.transition),p=x,wa(m),p}function a0(t,e=!0){let n;for(let i=0;i<t.length;i++){const r=t[i];if(Ra(r)){if(r.type!==_n||r.children==="v-if"){if(n)return;n=r}}else return}return n}const l0=t=>{let e;for(const n in t)(n==="class"||n==="style"||$a(n))&&((e||(e={}))[n]=t[n]);return e},c0=(t,e)=>{const n={};for(const i in t)(!pu(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function u0(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Lf(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!Ka(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Lf(i,o,c):!0:!!o;return!1}function Lf(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!Ka(n,s))return!0}return!1}function Pu({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Lu="components",f0="directives";function d0(t,e){return Du(Lu,t,!0,e)||t}const h0=Symbol.for("v-ndc");function p0(t){return yt(t)&&Du(Lu,t,!1)||t}function Iu(t){return Du(f0,t)}function Du(t,e,n=!0,i=!1){const r=qt||Pt;if(r){const s=r.type;if(t===Lu){const a=fy(s,!1);if(a&&(a===e||a===bn(e)||a===ui(bn(e))))return s}const o=If(r[t]||s[t],e)||If(r.appContext[t],e);return!o&&i?s:o}}function If(t,e){return t&&(t[e]||t[bn(e)]||t[ui(bn(e))])}const m0=t=>t.__isSuspense;let Dc=0;const g0={name:"Suspense",__isSuspense:!0,process(t,e,n,i,r,s,o,a,l,c){if(t==null)v0(e,n,i,r,s,o,a,l,c);else{if(s&&s.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}_0(t,e,n,i,r,o,a,l,c)}},hydrate:y0,create:Nu,normalize:x0},ym=g0;function Qs(t,e){const n=t.props&&t.props[e];Ue(n)&&n()}function v0(t,e,n,i,r,s,o,a,l){const{p:c,o:{createElement:u}}=l,f=u("div"),d=t.suspense=Nu(t,r,i,e,f,n,s,o,a,l);c(null,d.pendingBranch=t.ssContent,f,null,i,d,s,o),d.deps>0?(Qs(t,"onPending"),Qs(t,"onFallback"),c(null,t.ssFallback,e,n,i,null,s,o),Jr(d,t.ssFallback)):d.resolve(!1,!0)}function _0(t,e,n,i,r,s,o,a,{p:l,um:c,o:{createElement:u}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const d=e.ssContent,h=e.ssFallback,{activeBranch:v,pendingBranch:g,isInFallback:m,isHydrating:p}=f;if(g)f.pendingBranch=d,zn(d,g)?(l(g,d,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():m&&(p||(l(v,h,n,i,r,null,s,o,a),Jr(f,h)))):(f.pendingId=Dc++,p?(f.isHydrating=!1,f.activeBranch=g):c(g,r,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),m?(l(null,d,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():(l(v,h,n,i,r,null,s,o,a),Jr(f,h))):v&&zn(d,v)?(l(v,d,n,i,r,f,s,o,a),f.resolve(!0)):(l(null,d,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0&&f.resolve()));else if(v&&zn(d,v))l(v,d,n,i,r,f,s,o,a),Jr(f,d);else if(Qs(e,"onPending"),f.pendingBranch=d,d.shapeFlag&512?f.pendingId=d.component.suspenseId:f.pendingId=Dc++,l(null,d,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0)f.resolve();else{const{timeout:M,pendingId:x}=f;M>0?setTimeout(()=>{f.pendingId===x&&f.fallback(h)},M):M===0&&f.fallback(h)}}function Nu(t,e,n,i,r,s,o,a,l,c,u=!1){const{p:f,m:d,um:h,n:v,o:{parentNode:g,remove:m}}=c;let p;const M=M0(t);M&&e&&e.pendingBranch&&(p=e.pendingId,e.deps++);const x=t.props?Gp(t.props.timeout):void 0,T=s,L={vnode:t,parent:e,parentComponent:n,namespace:o,container:i,hiddenContainer:r,deps:0,pendingId:Dc++,timeout:typeof x=="number"?x:-1,activeBranch:null,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(E=!1,b=!1){const{vnode:D,activeBranch:S,pendingBranch:_,pendingId:N,effects:I,parentComponent:R,container:k}=L;let q=!1;L.isHydrating?L.isHydrating=!1:E||(q=S&&_.transition&&_.transition.mode==="out-in",q&&(S.transition.afterLeave=()=>{N===L.pendingId&&(d(_,k,s===T?v(S):s,0),Ic(I))}),S&&(g(S.el)!==L.hiddenContainer&&(s=v(S)),h(S,R,L,!0)),q||d(_,k,s,0)),Jr(L,_),L.pendingBranch=null,L.isInFallback=!1;let ee=L.parent,ie=!1;for(;ee;){if(ee.pendingBranch){ee.effects.push(...I),ie=!0;break}ee=ee.parent}!ie&&!q&&Ic(I),L.effects=[],M&&e&&e.pendingBranch&&p===e.pendingId&&(e.deps--,e.deps===0&&!b&&e.resolve()),Qs(D,"onResolve")},fallback(E){if(!L.pendingBranch)return;const{vnode:b,activeBranch:D,parentComponent:S,container:_,namespace:N}=L;Qs(b,"onFallback");const I=v(D),R=()=>{L.isInFallback&&(f(null,E,_,I,S,null,N,a,l),Jr(L,E))},k=E.transition&&E.transition.mode==="out-in";k&&(D.transition.afterLeave=R),L.isInFallback=!0,h(D,S,null,!0),k||R()},move(E,b,D){L.activeBranch&&d(L.activeBranch,E,b,D),L.container=E},next(){return L.activeBranch&&v(L.activeBranch)},registerDep(E,b){const D=!!L.pendingBranch;D&&L.deps++;const S=E.vnode.el;E.asyncDep.catch(_=>{go(_,E,0)}).then(_=>{if(E.isUnmounted||L.isUnmounted||L.pendingId!==E.suspenseId)return;E.asyncResolved=!0;const{vnode:N}=E;zc(E,_,!1),S&&(N.el=S);const I=!S&&E.subTree.el;b(E,N,g(S||E.subTree.el),S?null:v(E.subTree),L,o,l),I&&m(I),Pu(E,N.el),D&&--L.deps===0&&L.resolve()})},unmount(E,b){L.isUnmounted=!0,L.activeBranch&&h(L.activeBranch,n,E,b),L.pendingBranch&&h(L.pendingBranch,n,E,b)}};return L}function y0(t,e,n,i,r,s,o,a,l){const c=e.suspense=Nu(e,i,n,t.parentNode,document.createElement("div"),null,r,s,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,s,o);return c.deps===0&&c.resolve(!1,!0),u}function x0(t){const{shapeFlag:e,children:n}=t,i=e&32;t.ssContent=Df(i?n.default:n),t.ssFallback=i?Df(n.fallback):z(_n)}function Df(t){let e;if(Ue(t)){const n=ss&&t._c;n&&(t._d=!1,zi()),t=t(),n&&(t._d=!0,e=yn,zm())}return De(t)&&(t=a0(t)),t=Rn(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function S0(t,e){e&&e.pendingBranch?De(t)?e.effects.push(...t):e.effects.push(t):Ic(t)}function Jr(t,e){t.activeBranch=e;const{vnode:n,parentComponent:i}=t;let r=e.el;for(;!r&&e.component;)e=e.component.subTree,r=e.el;n.el=r,i&&i.subTree===n&&(i.vnode.el=r,Pu(i,r))}function M0(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const b0=Symbol.for("v-scx"),E0=()=>_t(b0);function Un(t,e){return Uu(t,null,e)}const Vo={};function Ye(t,e,n){return Uu(t,e,n)}function Uu(t,e,{immediate:n,deep:i,flush:r,once:s,onTrack:o,onTrigger:a}=dt){if(e&&s){const E=e;e=(...b)=>{E(...b),L()}}const l=Pt,c=E=>i===!0?E:dr(E,i===!1?1:void 0);let u,f=!1,d=!1;if(xt(t)?(u=()=>t.value,f=Aa(t)):zs(t)?(u=()=>c(t),f=!0):De(t)?(d=!0,f=t.some(E=>zs(E)||Aa(E)),u=()=>t.map(E=>{if(xt(E))return E.value;if(zs(E))return c(E);if(Ue(E))return Fi(E,l,2)})):Ue(t)?e?u=()=>Fi(t,l,2):u=()=>(h&&h(),Sn(t,l,3,[v])):u=vn,e&&i){const E=u;u=()=>dr(E())}let h,v=E=>{h=x.onStop=()=>{Fi(E,l,4),h=x.onStop=void 0}},g;if(el)if(v=vn,e?n&&Sn(e,l,3,[u(),d?[]:void 0,v]):u(),r==="sync"){const E=E0();g=E.__watcherHandles||(E.__watcherHandles=[])}else return vn;let m=d?new Array(t.length).fill(Vo):Vo;const p=()=>{if(!(!x.active||!x.dirty))if(e){const E=x.run();(i||f||(d?E.some((b,D)=>Vi(b,m[D])):Vi(E,m)))&&(h&&h(),Sn(e,l,3,[E,m===Vo?void 0:d&&m[0]===Vo?[]:m,v]),m=E)}else x.run()};p.allowRecurse=!!e;let M;r==="sync"?M=p:r==="post"?M=()=>Kt(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),M=()=>Ru(p));const x=new xu(u,vn,M),T=R_(),L=()=>{x.stop(),T&&mu(T.effects,x)};return e?n?p():m=x.run():r==="post"?Kt(x.run.bind(x),l&&l.suspense):x.run(),g&&g.push(L),L}function T0(t,e,n){const i=this.proxy,r=yt(t)?t.includes(".")?xm(i,t):()=>i[t]:t.bind(i,i);let s;Ue(e)?s=e:(s=e.handler,n=e);const o=_o(this),a=Uu(r,s.bind(i),n);return o(),a}function xm(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function dr(t,e=1/0,n){if(e<=0||!at(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,xt(t))dr(t.value,e,n);else if(De(t))for(let i=0;i<t.length;i++)dr(t[i],e,n);else if(Bp(t)||Kr(t))t.forEach(i=>{dr(i,e,n)});else if(zp(t))for(const i in t)dr(t[i],e,n);return t}function rs(t,e){if(qt===null)return t;const n=tl(qt)||qt.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=dt]=e[r];s&&(Ue(s)&&(s={mounted:s,updated:s}),s.deep&&dr(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Zi(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&($i(),Sn(l,n,8,[t.el,a,t,e]),qi())}}const Ci=Symbol("_leaveCb"),zo=Symbol("_enterCb");function Sm(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return di(()=>{t.isMounted=!0}),Yn(()=>{t.isUnmounting=!0}),t}const pn=[Function,Array],Mm={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:pn,onEnter:pn,onAfterEnter:pn,onEnterCancelled:pn,onBeforeLeave:pn,onLeave:pn,onAfterLeave:pn,onLeaveCancelled:pn,onBeforeAppear:pn,onAppear:pn,onAfterAppear:pn,onAppearCancelled:pn},A0={name:"BaseTransition",props:Mm,setup(t,{slots:e}){const n=Hu(),i=Sm();return()=>{const r=e.default&&Ou(e.default(),!0);if(!r||!r.length)return;let s=r[0];if(r.length>1){for(const d of r)if(d.type!==_n){s=d;break}}const o=je(t),{mode:a}=o;if(i.isLeaving)return Rl(s);const l=Nf(s);if(!l)return Rl(s);const c=eo(l,o,i,n);to(l,c);const u=n.subTree,f=u&&Nf(u);if(f&&f.type!==_n&&!zn(l,f)){const d=eo(f,o,i,n);if(to(f,d),a==="out-in"&&l.type!==_n)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Rl(s);a==="in-out"&&l.type!==_n&&(d.delayLeave=(h,v,g)=>{const m=bm(i,f);m[String(f.key)]=f,h[Ci]=()=>{v(),h[Ci]=void 0,delete c.delayedLeave},c.delayedLeave=g})}return s}}},w0=A0;function bm(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function eo(t,e,n,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:d,onAfterLeave:h,onLeaveCancelled:v,onBeforeAppear:g,onAppear:m,onAfterAppear:p,onAppearCancelled:M}=e,x=String(t.key),T=bm(n,t),L=(D,S)=>{D&&Sn(D,i,9,S)},E=(D,S)=>{const _=S[1];L(D,S),De(D)?D.every(N=>N.length<=1)&&_():D.length<=1&&_()},b={mode:s,persisted:o,beforeEnter(D){let S=a;if(!n.isMounted)if(r)S=g||a;else return;D[Ci]&&D[Ci](!0);const _=T[x];_&&zn(t,_)&&_.el[Ci]&&_.el[Ci](),L(S,[D])},enter(D){let S=l,_=c,N=u;if(!n.isMounted)if(r)S=m||l,_=p||c,N=M||u;else return;let I=!1;const R=D[zo]=k=>{I||(I=!0,k?L(N,[D]):L(_,[D]),b.delayedLeave&&b.delayedLeave(),D[zo]=void 0)};S?E(S,[D,R]):R()},leave(D,S){const _=String(t.key);if(D[zo]&&D[zo](!0),n.isUnmounting)return S();L(f,[D]);let N=!1;const I=D[Ci]=R=>{N||(N=!0,S(),R?L(v,[D]):L(h,[D]),D[Ci]=void 0,T[_]===t&&delete T[_])};T[_]=t,d?E(d,[D,I]):I()},clone(D){return eo(D,e,n,i)}};return b}function Rl(t){if(Ja(t))return t=Hi(t),t.children=null,t}function Nf(t){if(!Ja(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Ue(n.default))return n.default()}}function to(t,e){t.shapeFlag&6&&t.component?to(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ou(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===mt?(o.patchFlag&128&&r++,i=i.concat(Ou(o.children,e,a))):(e||o.type!==_n)&&i.push(a!=null?Hi(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function ys(t,e){return Ue(t)?Mt({name:t.name},e,{setup:t}):t}const _a=t=>!!t.type.__asyncLoader,Ja=t=>t.type.__isKeepAlive;function Em(t,e){Am(t,"a",e)}function Tm(t,e){Am(t,"da",e)}function Am(t,e,n=Pt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Qa(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Ja(r.parent.vnode)&&C0(i,e,n,r),r=r.parent}}function C0(t,e,n,i){const r=Qa(e,t,i,!0);Cm(()=>{mu(i[e],r)},n)}function Qa(t,e,n=Pt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;$i();const a=_o(n),l=Sn(e,n,t,o);return a(),qi(),l});return i?r.unshift(s):r.push(s),s}}const fi=t=>(e,n=Pt)=>(!el||t==="sp")&&Qa(t,(...i)=>e(...i),n),wm=fi("bm"),di=fi("m"),R0=fi("bu"),Fu=fi("u"),Yn=fi("bum"),Cm=fi("um"),P0=fi("sp"),L0=fi("rtg"),I0=fi("rtc");function D0(t,e=Pt){Qa("ec",t,e)}function N0(t,e,n,i){let r;const s=n;if(De(t)||yt(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s)}else if(at(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,s));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,s)}}else r=[];return r}const Nc=t=>t?Xm(t)?tl(t)||t.proxy:Nc(t.parent):null,Hs=Mt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Nc(t.parent),$root:t=>Nc(t.root),$emit:t=>t.emit,$options:t=>Bu(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Ru(t.update)}),$nextTick:t=>t.n||(t.n=cn.bind(t.proxy)),$watch:t=>T0.bind(t)}),Pl=(t,e)=>t!==dt&&!t.__isScriptSetup&&Ke(t,e),U0={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Pl(i,e))return o[e]=1,i[e];if(r!==dt&&Ke(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&Ke(c,e))return o[e]=3,s[e];if(n!==dt&&Ke(n,e))return o[e]=4,n[e];Uc&&(o[e]=0)}}const u=Hs[e];let f,d;if(u)return e==="$attrs"&&en(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==dt&&Ke(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Ke(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Pl(r,e)?(r[e]=n,!0):i!==dt&&Ke(i,e)?(i[e]=n,!0):Ke(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==dt&&Ke(t,o)||Pl(e,o)||(a=s[0])&&Ke(a,o)||Ke(i,o)||Ke(Hs,o)||Ke(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ke(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Uf(t){return De(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Uc=!0;function O0(t){const e=Bu(t),n=t.proxy,i=t.ctx;Uc=!1,e.beforeCreate&&Of(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:v,activated:g,deactivated:m,beforeDestroy:p,beforeUnmount:M,destroyed:x,unmounted:T,render:L,renderTracked:E,renderTriggered:b,errorCaptured:D,serverPrefetch:S,expose:_,inheritAttrs:N,components:I,directives:R,filters:k}=e;if(c&&F0(c,i,null),o)for(const ie in o){const G=o[ie];Ue(G)&&(i[ie]=G.bind(n))}if(r){const ie=r.call(n,n);at(ie)&&(t.data=Bt(ie))}if(Uc=!0,s)for(const ie in s){const G=s[ie],fe=Ue(G)?G.bind(n,n):Ue(G.get)?G.get.bind(n,n):vn,me=!Ue(G)&&Ue(G.set)?G.set.bind(n):vn,ve=ne({get:fe,set:me});Object.defineProperty(i,ie,{enumerable:!0,configurable:!0,get:()=>ve.value,set:Ae=>ve.value=Ae})}if(a)for(const ie in a)Rm(a[ie],i,n,ie);if(l){const ie=Ue(l)?l.call(n):l;Reflect.ownKeys(ie).forEach(G=>{Mn(G,ie[G])})}u&&Of(u,t,"c");function ee(ie,G){De(G)?G.forEach(fe=>ie(fe.bind(n))):G&&ie(G.bind(n))}if(ee(wm,f),ee(di,d),ee(R0,h),ee(Fu,v),ee(Em,g),ee(Tm,m),ee(D0,D),ee(I0,E),ee(L0,b),ee(Yn,M),ee(Cm,T),ee(P0,S),De(_))if(_.length){const ie=t.exposed||(t.exposed={});_.forEach(G=>{Object.defineProperty(ie,G,{get:()=>n[G],set:fe=>n[G]=fe})})}else t.exposed||(t.exposed={});L&&t.render===vn&&(t.render=L),N!=null&&(t.inheritAttrs=N),I&&(t.components=I),R&&(t.directives=R)}function F0(t,e,n=vn){De(t)&&(t=Oc(t));for(const i in t){const r=t[i];let s;at(r)?"default"in r?s=_t(r.from||i,r.default,!0):s=_t(r.from||i):s=_t(r),xt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Of(t,e,n){Sn(De(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Rm(t,e,n,i){const r=i.includes(".")?xm(n,i):()=>n[i];if(yt(t)){const s=e[t];Ue(s)&&Ye(r,s)}else if(Ue(t))Ye(r,t.bind(n));else if(at(t))if(De(t))t.forEach(s=>Rm(s,e,n,i));else{const s=Ue(t.handler)?t.handler.bind(n):e[t.handler];Ue(s)&&Ye(r,s,t)}}function Bu(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Ca(l,c,o,!0)),Ca(l,e,o)),at(e)&&s.set(e,l),l}function Ca(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Ca(t,s,n,!0),r&&r.forEach(o=>Ca(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=B0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const B0={data:Ff,props:Bf,emits:Bf,methods:Fs,computed:Fs,beforeCreate:Wt,created:Wt,beforeMount:Wt,mounted:Wt,beforeUpdate:Wt,updated:Wt,beforeDestroy:Wt,beforeUnmount:Wt,destroyed:Wt,unmounted:Wt,activated:Wt,deactivated:Wt,errorCaptured:Wt,serverPrefetch:Wt,components:Fs,directives:Fs,watch:V0,provide:Ff,inject:k0};function Ff(t,e){return e?t?function(){return Mt(Ue(t)?t.call(this,this):t,Ue(e)?e.call(this,this):e)}:e:t}function k0(t,e){return Fs(Oc(t),Oc(e))}function Oc(t){if(De(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Wt(t,e){return t?[...new Set([].concat(t,e))]:e}function Fs(t,e){return t?Mt(Object.create(null),t,e):e}function Bf(t,e){return t?De(t)&&De(e)?[...new Set([...t,...e])]:Mt(Object.create(null),Uf(t),Uf(e??{})):e}function V0(t,e){if(!t)return e;if(!e)return t;const n=Mt(Object.create(null),t);for(const i in e)n[i]=Wt(t[i],e[i]);return n}function Pm(){return{app:null,config:{isNativeTag:g_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let z0=0;function H0(t,e){return function(i,r=null){Ue(i)||(i=Mt({},i)),r!=null&&!at(r)&&(r=null);const s=Pm(),o=new WeakSet;let a=!1;const l=s.app={_uid:z0++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:hy,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ue(c.install)?(o.add(c),c.install(l,...u)):Ue(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const d=z(i,r);return d.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(d,c):t(d,c,f),a=!0,l._container=c,c.__vue_app__=l,tl(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){const u=Gs;Gs=l;try{return c()}finally{Gs=u}}};return l}}let Gs=null;function Mn(t,e){if(Pt){let n=Pt.provides;const i=Pt.parent&&Pt.parent.provides;i===n&&(n=Pt.provides=Object.create(i)),n[t]=e}}function _t(t,e,n=!1){const i=Pt||qt;if(i||Gs){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Gs._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Ue(e)?e.call(i&&i.proxy):e}}const Lm={},Im=()=>Object.create(Lm),Dm=t=>Object.getPrototypeOf(t)===Lm;function G0(t,e,n,i=!1){const r={},s=Im();t.propsDefaults=Object.create(null),Nm(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:sm(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function W0(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=je(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Ka(t.emitsOptions,d))continue;const h=e[d];if(l)if(Ke(s,d))h!==s[d]&&(s[d]=h,c=!0);else{const v=bn(d);r[v]=Fc(l,a,v,h,t,!1)}else h!==s[d]&&(s[d]=h,c=!0)}}}else{Nm(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Ke(e,f)&&((u=vs(f))===f||!Ke(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Fc(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Ke(e,f))&&(delete s[f],c=!0)}c&&li(t.attrs,"set","")}function Nm(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Vs(l))continue;const c=e[l];let u;r&&Ke(r,u=bn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Ka(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=je(n),c=a||dt;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Fc(r,l,f,c[f],t,!Ke(c,f))}}return o}function Fc(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=Ke(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ue(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=_o(r);i=c[n]=l.call(null,e),u()}}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===vs(n))&&(i=!0))}return i}function Um(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!Ue(t)){const u=f=>{l=!0;const[d,h]=Um(f,e,!0);Mt(o,d),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return at(t)&&i.set(t,jr),jr;if(De(s))for(let u=0;u<s.length;u++){const f=bn(s[u]);kf(f)&&(o[f]=dt)}else if(s)for(const u in s){const f=bn(u);if(kf(f)){const d=s[u],h=o[f]=De(d)||Ue(d)?{type:d}:Mt({},d);if(h){const v=Hf(Boolean,h.type),g=Hf(String,h.type);h[0]=v>-1,h[1]=g<0||v<g,(v>-1||Ke(h,"default"))&&a.push(f)}}}const c=[o,a];return at(t)&&i.set(t,c),c}function kf(t){return t[0]!=="$"&&!Vs(t)}function Vf(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function zf(t,e){return Vf(t)===Vf(e)}function Hf(t,e){return De(e)?e.findIndex(n=>zf(n,t)):Ue(e)&&zf(e,t)?0:-1}const Om=t=>t[0]==="_"||t==="$stable",ku=t=>De(t)?t.map(Rn):[Rn(t)],X0=(t,e,n)=>{if(e._n)return e;const i=St((...r)=>ku(e(...r)),n);return i._c=!1,i},Fm=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Om(r))continue;const s=t[r];if(Ue(s))e[r]=X0(r,s,i);else if(s!=null){const o=ku(s);e[r]=()=>o}}},Bm=(t,e)=>{const n=ku(e);t.slots.default=()=>n},$0=(t,e)=>{const n=t.slots=Im();if(t.vnode.shapeFlag&32){const i=e._;i?(Mt(n,e),Hp(n,"_",i,!0)):Fm(e,n)}else e&&Bm(t,e)},q0=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=dt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(Mt(r,e),!n&&a===1&&delete r._):(s=!e.$stable,Fm(e,r)),o=e}else e&&(Bm(t,e),o={default:1});if(s)for(const a in r)!Om(a)&&o[a]==null&&delete r[a]};function Bc(t,e,n,i,r=!1){if(De(t)){t.forEach((d,h)=>Bc(d,e&&(De(e)?e[h]:e),n,i,r));return}if(_a(i)&&!r)return;const s=i.shapeFlag&4?tl(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===dt?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(yt(c)?(u[c]=null,Ke(f,c)&&(f[c]=null)):xt(c)&&(c.value=null)),Ue(l))Fi(l,a,12,[o,u]);else{const d=yt(l),h=xt(l);if(d||h){const v=()=>{if(t.f){const g=d?Ke(f,l)?f[l]:u[l]:l.value;r?De(g)&&mu(g,s):De(g)?g.includes(s)||g.push(s):d?(u[l]=[s],Ke(f,l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,Ke(f,l)&&(f[l]=o)):h&&(l.value=o,t.k&&(u[t.k]=o))};o?(v.id=-1,Kt(v,n)):v()}}}const Kt=S0;function Y0(t){return j0(t)}function j0(t,e){const n=Wp();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=vn,insertStaticContent:v}=t,g=(C,P,H,Y=null,$=null,ce=null,A=void 0,y=null,O=!!P.dynamicChildren)=>{if(C===P)return;C&&!zn(C,P)&&(Y=B(C),Ae(C,$,ce,!0),C=null),P.patchFlag===-2&&(O=!1,P.dynamicChildren=null);const{type:F,ref:X,shapeFlag:Z}=P;switch(F){case vo:m(C,P,H,Y);break;case _n:p(C,P,H,Y);break;case Il:C==null&&M(P,H,Y,A);break;case mt:I(C,P,H,Y,$,ce,A,y,O);break;default:Z&1?L(C,P,H,Y,$,ce,A,y,O):Z&6?R(C,P,H,Y,$,ce,A,y,O):(Z&64||Z&128)&&F.process(C,P,H,Y,$,ce,A,y,O,U)}X!=null&&$&&Bc(X,C&&C.ref,ce,P||C,!P)},m=(C,P,H,Y)=>{if(C==null)i(P.el=a(P.children),H,Y);else{const $=P.el=C.el;P.children!==C.children&&c($,P.children)}},p=(C,P,H,Y)=>{C==null?i(P.el=l(P.children||""),H,Y):P.el=C.el},M=(C,P,H,Y)=>{[C.el,C.anchor]=v(C.children,P,H,Y,C.el,C.anchor)},x=({el:C,anchor:P},H,Y)=>{let $;for(;C&&C!==P;)$=d(C),i(C,H,Y),C=$;i(P,H,Y)},T=({el:C,anchor:P})=>{let H;for(;C&&C!==P;)H=d(C),r(C),C=H;r(P)},L=(C,P,H,Y,$,ce,A,y,O)=>{P.type==="svg"?A="svg":P.type==="math"&&(A="mathml"),C==null?E(P,H,Y,$,ce,A,y,O):S(C,P,$,ce,A,y,O)},E=(C,P,H,Y,$,ce,A,y)=>{let O,F;const{props:X,shapeFlag:Z,transition:ue,dirs:re}=C;if(O=C.el=o(C.type,ce,X&&X.is,X),Z&8?u(O,C.children):Z&16&&D(C.children,O,null,Y,$,Ll(C,ce),A,y),re&&Zi(C,null,Y,"created"),b(O,C,C.scopeId,A,Y),X){for(const be in X)be!=="value"&&!Vs(be)&&s(O,be,null,X[be],ce,C.children,Y,$,ge);"value"in X&&s(O,"value",null,X.value,ce),(F=X.onVnodeBeforeMount)&&Fn(F,Y,C)}re&&Zi(C,null,Y,"beforeMount");const le=K0($,ue);le&&ue.beforeEnter(O),i(O,P,H),((F=X&&X.onVnodeMounted)||le||re)&&Kt(()=>{F&&Fn(F,Y,C),le&&ue.enter(O),re&&Zi(C,null,Y,"mounted")},$)},b=(C,P,H,Y,$)=>{if(H&&h(C,H),Y)for(let ce=0;ce<Y.length;ce++)h(C,Y[ce]);if($){let ce=$.subTree;if(P===ce){const A=$.vnode;b(C,A,A.scopeId,A.slotScopeIds,$.parent)}}},D=(C,P,H,Y,$,ce,A,y,O=0)=>{for(let F=O;F<C.length;F++){const X=C[F]=y?Ri(C[F]):Rn(C[F]);g(null,X,P,H,Y,$,ce,A,y)}},S=(C,P,H,Y,$,ce,A)=>{const y=P.el=C.el;let{patchFlag:O,dynamicChildren:F,dirs:X}=P;O|=C.patchFlag&16;const Z=C.props||dt,ue=P.props||dt;let re;if(H&&Ji(H,!1),(re=ue.onVnodeBeforeUpdate)&&Fn(re,H,P,C),X&&Zi(P,C,H,"beforeUpdate"),H&&Ji(H,!0),F?_(C.dynamicChildren,F,y,H,Y,Ll(P,$),ce):A||G(C,P,y,null,H,Y,Ll(P,$),ce,!1),O>0){if(O&16)N(y,P,Z,ue,H,Y,$);else if(O&2&&Z.class!==ue.class&&s(y,"class",null,ue.class,$),O&4&&s(y,"style",Z.style,ue.style,$),O&8){const le=P.dynamicProps;for(let be=0;be<le.length;be++){const de=le[be],Me=Z[de],Oe=ue[de];(Oe!==Me||de==="value")&&s(y,de,Me,Oe,$,C.children,H,Y,ge)}}O&1&&C.children!==P.children&&u(y,P.children)}else!A&&F==null&&N(y,P,Z,ue,H,Y,$);((re=ue.onVnodeUpdated)||X)&&Kt(()=>{re&&Fn(re,H,P,C),X&&Zi(P,C,H,"updated")},Y)},_=(C,P,H,Y,$,ce,A)=>{for(let y=0;y<P.length;y++){const O=C[y],F=P[y],X=O.el&&(O.type===mt||!zn(O,F)||O.shapeFlag&70)?f(O.el):H;g(O,F,X,null,Y,$,ce,A,!0)}},N=(C,P,H,Y,$,ce,A)=>{if(H!==Y){if(H!==dt)for(const y in H)!Vs(y)&&!(y in Y)&&s(C,y,H[y],null,A,P.children,$,ce,ge);for(const y in Y){if(Vs(y))continue;const O=Y[y],F=H[y];O!==F&&y!=="value"&&s(C,y,F,O,A,P.children,$,ce,ge)}"value"in Y&&s(C,"value",H.value,Y.value,A)}},I=(C,P,H,Y,$,ce,A,y,O)=>{const F=P.el=C?C.el:a(""),X=P.anchor=C?C.anchor:a("");let{patchFlag:Z,dynamicChildren:ue,slotScopeIds:re}=P;re&&(y=y?y.concat(re):re),C==null?(i(F,H,Y),i(X,H,Y),D(P.children||[],H,X,$,ce,A,y,O)):Z>0&&Z&64&&ue&&C.dynamicChildren?(_(C.dynamicChildren,ue,H,$,ce,A,y),(P.key!=null||$&&P===$.subTree)&&Vu(C,P,!0)):G(C,P,H,X,$,ce,A,y,O)},R=(C,P,H,Y,$,ce,A,y,O)=>{P.slotScopeIds=y,C==null?P.shapeFlag&512?$.ctx.activate(P,H,Y,A,O):k(P,H,Y,$,ce,A,O):q(C,P,O)},k=(C,P,H,Y,$,ce,A)=>{const y=C.component=oy(C,Y,$);if(Ja(C)&&(y.ctx.renderer=U),ay(y),y.asyncDep){if($&&$.registerDep(y,ee),!C.el){const O=y.subTree=z(_n);p(null,O,P,H)}}else ee(y,C,P,H,$,ce,A)},q=(C,P,H)=>{const Y=P.component=C.component;if(u0(C,P,H))if(Y.asyncDep&&!Y.asyncResolved){ie(Y,P,H);return}else Y.next=P,r0(Y.update),Y.effect.dirty=!0,Y.update();else P.el=C.el,Y.vnode=P},ee=(C,P,H,Y,$,ce,A)=>{const y=()=>{if(C.isMounted){let{next:X,bu:Z,u:ue,parent:re,vnode:le}=C;{const Pe=km(C);if(Pe){X&&(X.el=le.el,ie(C,X,A)),Pe.asyncDep.then(()=>{C.isUnmounted||y()});return}}let be=X,de;Ji(C,!1),X?(X.el=le.el,ie(C,X,A)):X=le,Z&&Al(Z),(de=X.props&&X.props.onVnodeBeforeUpdate)&&Fn(de,re,X,le),Ji(C,!0);const Me=Cl(C),Oe=C.subTree;C.subTree=Me,g(Oe,Me,f(Oe.el),B(Oe),C,$,ce),X.el=Me.el,be===null&&Pu(C,Me.el),ue&&Kt(ue,$),(de=X.props&&X.props.onVnodeUpdated)&&Kt(()=>Fn(de,re,X,le),$)}else{let X;const{el:Z,props:ue}=P,{bm:re,m:le,parent:be}=C,de=_a(P);if(Ji(C,!1),re&&Al(re),!de&&(X=ue&&ue.onVnodeBeforeMount)&&Fn(X,be,P),Ji(C,!0),Z&&ye){const Me=()=>{C.subTree=Cl(C),ye(Z,C.subTree,C,$,null)};de?P.type.__asyncLoader().then(()=>!C.isUnmounted&&Me()):Me()}else{const Me=C.subTree=Cl(C);g(null,Me,H,Y,C,$,ce),P.el=Me.el}if(le&&Kt(le,$),!de&&(X=ue&&ue.onVnodeMounted)){const Me=P;Kt(()=>Fn(X,be,Me),$)}(P.shapeFlag&256||be&&_a(be.vnode)&&be.vnode.shapeFlag&256)&&C.a&&Kt(C.a,$),C.isMounted=!0,P=H=Y=null}},O=C.effect=new xu(y,vn,()=>Ru(F),C.scope),F=C.update=()=>{O.dirty&&O.run()};F.id=C.uid,Ji(C,!0),F()},ie=(C,P,H)=>{P.component=C;const Y=C.vnode.props;C.vnode=P,C.next=null,W0(C,P.props,Y,H),q0(C,P.children,H),$i(),Pf(C),qi()},G=(C,P,H,Y,$,ce,A,y,O=!1)=>{const F=C&&C.children,X=C?C.shapeFlag:0,Z=P.children,{patchFlag:ue,shapeFlag:re}=P;if(ue>0){if(ue&128){me(F,Z,H,Y,$,ce,A,y,O);return}else if(ue&256){fe(F,Z,H,Y,$,ce,A,y,O);return}}re&8?(X&16&&ge(F,$,ce),Z!==F&&u(H,Z)):X&16?re&16?me(F,Z,H,Y,$,ce,A,y,O):ge(F,$,ce,!0):(X&8&&u(H,""),re&16&&D(Z,H,Y,$,ce,A,y,O))},fe=(C,P,H,Y,$,ce,A,y,O)=>{C=C||jr,P=P||jr;const F=C.length,X=P.length,Z=Math.min(F,X);let ue;for(ue=0;ue<Z;ue++){const re=P[ue]=O?Ri(P[ue]):Rn(P[ue]);g(C[ue],re,H,null,$,ce,A,y,O)}F>X?ge(C,$,ce,!0,!1,Z):D(P,H,Y,$,ce,A,y,O,Z)},me=(C,P,H,Y,$,ce,A,y,O)=>{let F=0;const X=P.length;let Z=C.length-1,ue=X-1;for(;F<=Z&&F<=ue;){const re=C[F],le=P[F]=O?Ri(P[F]):Rn(P[F]);if(zn(re,le))g(re,le,H,null,$,ce,A,y,O);else break;F++}for(;F<=Z&&F<=ue;){const re=C[Z],le=P[ue]=O?Ri(P[ue]):Rn(P[ue]);if(zn(re,le))g(re,le,H,null,$,ce,A,y,O);else break;Z--,ue--}if(F>Z){if(F<=ue){const re=ue+1,le=re<X?P[re].el:Y;for(;F<=ue;)g(null,P[F]=O?Ri(P[F]):Rn(P[F]),H,le,$,ce,A,y,O),F++}}else if(F>ue)for(;F<=Z;)Ae(C[F],$,ce,!0),F++;else{const re=F,le=F,be=new Map;for(F=le;F<=ue;F++){const qe=P[F]=O?Ri(P[F]):Rn(P[F]);qe.key!=null&&be.set(qe.key,F)}let de,Me=0;const Oe=ue-le+1;let Pe=!1,Ee=0;const Fe=new Array(Oe);for(F=0;F<Oe;F++)Fe[F]=0;for(F=re;F<=Z;F++){const qe=C[F];if(Me>=Oe){Ae(qe,$,ce,!0);continue}let Ie;if(qe.key!=null)Ie=be.get(qe.key);else for(de=le;de<=ue;de++)if(Fe[de-le]===0&&zn(qe,P[de])){Ie=de;break}Ie===void 0?Ae(qe,$,ce,!0):(Fe[Ie-le]=F+1,Ie>=Ee?Ee=Ie:Pe=!0,g(qe,P[Ie],H,null,$,ce,A,y,O),Me++)}const We=Pe?Z0(Fe):jr;for(de=We.length-1,F=Oe-1;F>=0;F--){const qe=le+F,Ie=P[qe],V=qe+1<X?P[qe+1].el:Y;Fe[F]===0?g(null,Ie,H,V,$,ce,A,y,O):Pe&&(de<0||F!==We[de]?ve(Ie,H,V,2):de--)}}},ve=(C,P,H,Y,$=null)=>{const{el:ce,type:A,transition:y,children:O,shapeFlag:F}=C;if(F&6){ve(C.component.subTree,P,H,Y);return}if(F&128){C.suspense.move(P,H,Y);return}if(F&64){A.move(C,P,H,U);return}if(A===mt){i(ce,P,H);for(let Z=0;Z<O.length;Z++)ve(O[Z],P,H,Y);i(C.anchor,P,H);return}if(A===Il){x(C,P,H);return}if(Y!==2&&F&1&&y)if(Y===0)y.beforeEnter(ce),i(ce,P,H),Kt(()=>y.enter(ce),$);else{const{leave:Z,delayLeave:ue,afterLeave:re}=y,le=()=>i(ce,P,H),be=()=>{Z(ce,()=>{le(),re&&re()})};ue?ue(ce,le,be):be()}else i(ce,P,H)},Ae=(C,P,H,Y=!1,$=!1)=>{const{type:ce,props:A,ref:y,children:O,dynamicChildren:F,shapeFlag:X,patchFlag:Z,dirs:ue}=C;if(y!=null&&Bc(y,null,H,C,!0),X&256){P.ctx.deactivate(C);return}const re=X&1&&ue,le=!_a(C);let be;if(le&&(be=A&&A.onVnodeBeforeUnmount)&&Fn(be,P,C),X&6)oe(C.component,H,Y);else{if(X&128){C.suspense.unmount(H,Y);return}re&&Zi(C,null,P,"beforeUnmount"),X&64?C.type.remove(C,P,H,$,U,Y):F&&(ce!==mt||Z>0&&Z&64)?ge(F,P,H,!1,!0):(ce===mt&&Z&384||!$&&X&16)&&ge(O,P,H),Y&&$e(C)}(le&&(be=A&&A.onVnodeUnmounted)||re)&&Kt(()=>{be&&Fn(be,P,C),re&&Zi(C,null,P,"unmounted")},H)},$e=C=>{const{type:P,el:H,anchor:Y,transition:$}=C;if(P===mt){te(H,Y);return}if(P===Il){T(C);return}const ce=()=>{r(H),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(C.shapeFlag&1&&$&&!$.persisted){const{leave:A,delayLeave:y}=$,O=()=>A(H,ce);y?y(C.el,ce,O):O()}else ce()},te=(C,P)=>{let H;for(;C!==P;)H=d(C),r(C),C=H;r(P)},oe=(C,P,H)=>{const{bum:Y,scope:$,update:ce,subTree:A,um:y}=C;Y&&Al(Y),$.stop(),ce&&(ce.active=!1,Ae(A,C,P,H)),y&&Kt(y,P),Kt(()=>{C.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&C.asyncDep&&!C.asyncResolved&&C.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},ge=(C,P,H,Y=!1,$=!1,ce=0)=>{for(let A=ce;A<C.length;A++)Ae(C[A],P,H,Y,$)},B=C=>C.shapeFlag&6?B(C.component.subTree):C.shapeFlag&128?C.suspense.next():d(C.anchor||C.el);let he=!1;const ae=(C,P,H)=>{C==null?P._vnode&&Ae(P._vnode,null,null,!0):g(P._vnode||null,C,P,null,null,null,H),he||(he=!0,Pf(),pm(),he=!1),P._vnode=C},U={p:g,um:Ae,m:ve,r:$e,mt:k,mc:D,pc:G,pbc:_,n:B,o:t};let Re,ye;return{render:ae,hydrate:Re,createApp:H0(ae,Re)}}function Ll({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ji({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function K0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Vu(t,e,n=!1){const i=t.children,r=e.children;if(De(i)&&De(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Ri(r[s]),a.el=o.el),n||Vu(o,a)),a.type===vo&&(a.el=o.el)}}function Z0(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function km(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:km(e)}const J0=t=>t.__isTeleport,Ws=t=>t&&(t.disabled||t.disabled===""),Gf=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Wf=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,kc=(t,e)=>{const n=t&&t.to;return yt(n)?e?e(n):null:n},Q0={name:"Teleport",__isTeleport:!0,process(t,e,n,i,r,s,o,a,l,c){const{mc:u,pc:f,pbc:d,o:{insert:h,querySelector:v,createText:g,createComment:m}}=c,p=Ws(e.props);let{shapeFlag:M,children:x,dynamicChildren:T}=e;if(t==null){const L=e.el=g(""),E=e.anchor=g("");h(L,n,i),h(E,n,i);const b=e.target=kc(e.props,v),D=e.targetAnchor=g("");b&&(h(D,b),o==="svg"||Gf(b)?o="svg":(o==="mathml"||Wf(b))&&(o="mathml"));const S=(_,N)=>{M&16&&u(x,_,N,r,s,o,a,l)};p?S(n,E):b&&S(b,D)}else{e.el=t.el;const L=e.anchor=t.anchor,E=e.target=t.target,b=e.targetAnchor=t.targetAnchor,D=Ws(t.props),S=D?n:E,_=D?L:b;if(o==="svg"||Gf(E)?o="svg":(o==="mathml"||Wf(E))&&(o="mathml"),T?(d(t.dynamicChildren,T,S,r,s,o,a),Vu(t,e,!0)):l||f(t,e,S,_,r,s,o,a,!1),p)D?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Ho(e,n,L,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const N=e.target=kc(e.props,v);N&&Ho(e,N,null,c,0)}else D&&Ho(e,E,b,c,1)}Vm(e)},remove(t,e,n,i,{um:r,o:{remove:s}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:f,props:d}=t;if(f&&s(u),o&&s(c),a&16){const h=o||!Ws(d);for(let v=0;v<l.length;v++){const g=l[v];r(g,e,n,h,!!g.dynamicChildren)}}},move:Ho,hydrate:ey};function Ho(t,e,n,{o:{insert:i},m:r},s=2){s===0&&i(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,f=s===2;if(f&&i(o,e,n),(!f||Ws(u))&&l&16)for(let d=0;d<c.length;d++)r(c[d],e,n,2);f&&i(a,e,n)}function ey(t,e,n,i,r,s,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=kc(e.props,l);if(u){const f=u._lpa||u.firstChild;if(e.shapeFlag&16)if(Ws(e.props))e.anchor=c(o(t),e,a(t),n,i,r,s),e.targetAnchor=f;else{e.anchor=o(t);let d=f;for(;d;)if(d=o(d),d&&d.nodeType===8&&d.data==="teleport anchor"){e.targetAnchor=d,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(f,e,u,n,i,r,s)}Vm(e)}return e.anchor&&o(e.anchor)}const ty=Q0;function Vm(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const mt=Symbol.for("v-fgt"),vo=Symbol.for("v-txt"),_n=Symbol.for("v-cmt"),Il=Symbol.for("v-stc"),Xs=[];let yn=null;function zi(t=!1){Xs.push(yn=t?null:[])}function zm(){Xs.pop(),yn=Xs[Xs.length-1]||null}let ss=1;function Xf(t){ss+=t}function Hm(t){return t.dynamicChildren=ss>0?yn||jr:null,zm(),ss>0&&yn&&yn.push(t),t}function no(t,e,n,i,r,s){return Hm(zt(t,e,n,i,r,s,!0))}function Gm(t,e,n,i,r){return Hm(z(t,e,n,i,r,!0))}function Ra(t){return t?t.__v_isVNode===!0:!1}function zn(t,e){return t.type===e.type&&t.key===e.key}const Wm=({key:t})=>t??null,ya=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?yt(t)||xt(t)||Ue(t)?{i:qt,r:t,k:e,f:!!n}:t:null);function zt(t,e=null,n=null,i=0,r=null,s=t===mt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Wm(e),ref:e&&ya(e),scopeId:Za,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:qt};return a?(zu(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=yt(n)?8:16),ss>0&&!o&&yn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&yn.push(l),l}const z=ny;function ny(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===h0)&&(t=_n),Ra(t)){const a=Hi(t,e,!0);return n&&zu(a,n),ss>0&&!s&&yn&&(a.shapeFlag&6?yn[yn.indexOf(t)]=a:yn.push(a)),a.patchFlag|=-2,a}if(dy(t)&&(t=t.__vccOpts),e){e=iy(e);let{class:a,style:l}=e;a&&!yt(a)&&(e.class=_u(a)),at(l)&&(om(l)&&!De(l)&&(l=Mt({},l)),e.style=vu(l))}const o=yt(t)?1:m0(t)?128:J0(t)?64:at(t)?4:Ue(t)?2:0;return zt(t,e,n,i,r,o,s,!0)}function iy(t){return t?om(t)||Dm(t)?Mt({},t):t:null}function Hi(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?Vt(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Wm(c),ref:e&&e.ref?n&&s?De(s)?s.concat(ya(e)):[s,ya(e)]:ya(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==mt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Hi(t.ssContent),ssFallback:t.ssFallback&&Hi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&(u.transition=l.clone(u)),u}function vr(t=" ",e=0){return z(vo,null,t,e)}function Rn(t){return t==null||typeof t=="boolean"?z(_n):De(t)?z(mt,null,t.slice()):typeof t=="object"?Ri(t):z(vo,null,String(t))}function Ri(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Hi(t)}function zu(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(De(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),zu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Dm(e)?e._ctx=qt:r===3&&qt&&(qt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ue(e)?(e={default:e,_ctx:qt},n=32):(e=String(e),i&64?(n=16,e=[vr(e)]):n=8);t.children=e,t.shapeFlag|=n}function Vt(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=_u([e.class,i.class]));else if(r==="style")e.style=vu([e.style,i.style]);else if($a(r)){const s=e[r],o=i[r];o&&s!==o&&!(De(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Fn(t,e,n,i=null){Sn(t,e,7,[n,i])}const ry=Pm();let sy=0;function oy(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||ry,s={uid:sy++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new qp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Um(i,r),emitsOptions:gm(i,r),emit:null,emitted:null,propsDefaults:dt,inheritAttrs:i.inheritAttrs,ctx:dt,data:dt,props:dt,attrs:dt,slots:dt,refs:dt,setupState:dt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=o0.bind(null,s),t.ce&&t.ce(s),s}let Pt=null;const Hu=()=>Pt||qt;let Pa,Vc;{const t=Wp(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Pa=e("__VUE_INSTANCE_SETTERS__",n=>Pt=n),Vc=e("__VUE_SSR_SETTERS__",n=>el=n)}const _o=t=>{const e=Pt;return Pa(t),t.scope.on(),()=>{t.scope.off(),Pa(e)}},$f=()=>{Pt&&Pt.scope.off(),Pa(null)};function Xm(t){return t.vnode.shapeFlag&4}let el=!1;function ay(t,e=!1){e&&Vc(e);const{props:n,children:i}=t.vnode,r=Xm(t);G0(t,n,r,e),$0(t,i);const s=r?ly(t,e):void 0;return e&&Vc(!1),s}function ly(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,U0);const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?uy(t):null,s=_o(t);$i();const o=Fi(i,t,0,[t.props,r]);if(qi(),s(),kp(o)){if(o.then($f,$f),e)return o.then(a=>{zc(t,a,e)}).catch(a=>{go(a,t,0)});t.asyncDep=o}else zc(t,o,e)}else $m(t,e)}function zc(t,e,n){Ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:at(e)&&(t.setupState=um(e)),$m(t,n)}let qf;function $m(t,e,n){const i=t.type;if(!t.render){if(!e&&qf&&!i.render){const r=i.template||Bu(t).template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Mt(Mt({isCustomElement:s,delimiters:a},o),l);i.render=qf(r,c)}}t.render=i.render||vn}{const r=_o(t);$i();try{O0(t)}finally{qi(),r()}}}const cy={get(t,e){return en(t,"get",""),t[e]}};function uy(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,cy),slots:t.slots,emit:t.emit,expose:e}}function tl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(um(K_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Hs)return Hs[n](t)},has(e,n){return n in e||n in Hs}}))}function fy(t,e=!0){return Ue(t)?t.displayName||t.name:t.name||e&&t.__name}function dy(t){return Ue(t)&&"__vccOpts"in t}const ne=(t,e)=>Z_(t,e,el);function jn(t,e,n){const i=arguments.length;return i===2?at(e)&&!De(e)?Ra(e)?z(t,null,[e]):z(t,e):z(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Ra(n)&&(n=[n]),z(t,e,n))}const hy="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const py="http://www.w3.org/2000/svg",my="http://www.w3.org/1998/Math/MathML",Pi=typeof document<"u"?document:null,Yf=Pi&&Pi.createElement("template"),gy={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?Pi.createElementNS(py,t):e==="mathml"?Pi.createElementNS(my,t):Pi.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Pi.createTextNode(t),createComment:t=>Pi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Pi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Yf.innerHTML=i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t;const a=Yf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},_i="transition",Cs="animation",os=Symbol("_vtc"),Er=(t,{slots:e})=>jn(w0,Ym(t),e);Er.displayName="Transition";const qm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},vy=Er.props=Mt({},Mm,qm),Qi=(t,e=[])=>{De(t)?t.forEach(n=>n(...e)):t&&t(...e)},jf=t=>t?De(t)?t.some(e=>e.length>1):t.length>1:!1;function Ym(t){const e={};for(const I in t)I in qm||(e[I]=t[I]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=t,v=_y(r),g=v&&v[0],m=v&&v[1],{onBeforeEnter:p,onEnter:M,onEnterCancelled:x,onLeave:T,onLeaveCancelled:L,onBeforeAppear:E=p,onAppear:b=M,onAppearCancelled:D=x}=e,S=(I,R,k)=>{Ai(I,R?u:a),Ai(I,R?c:o),k&&k()},_=(I,R)=>{I._isLeaving=!1,Ai(I,f),Ai(I,h),Ai(I,d),R&&R()},N=I=>(R,k)=>{const q=I?b:M,ee=()=>S(R,I,k);Qi(q,[R,ee]),Kf(()=>{Ai(R,I?l:s),ii(R,I?u:a),jf(q)||Zf(R,i,g,ee)})};return Mt(e,{onBeforeEnter(I){Qi(p,[I]),ii(I,s),ii(I,o)},onBeforeAppear(I){Qi(E,[I]),ii(I,l),ii(I,c)},onEnter:N(!1),onAppear:N(!0),onLeave(I,R){I._isLeaving=!0;const k=()=>_(I,R);ii(I,f),ii(I,d),Km(),Kf(()=>{I._isLeaving&&(Ai(I,f),ii(I,h),jf(T)||Zf(I,i,m,k))}),Qi(T,[I,k])},onEnterCancelled(I){S(I,!1),Qi(x,[I])},onAppearCancelled(I){S(I,!0),Qi(D,[I])},onLeaveCancelled(I){_(I),Qi(L,[I])}})}function _y(t){if(t==null)return null;if(at(t))return[Dl(t.enter),Dl(t.leave)];{const e=Dl(t);return[e,e]}}function Dl(t){return Gp(t)}function ii(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[os]||(t[os]=new Set)).add(e)}function Ai(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[os];n&&(n.delete(e),n.size||(t[os]=void 0))}function Kf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let yy=0;function Zf(t,e,n,i){const r=t._endId=++yy,s=()=>{r===t._endId&&i()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=jm(t,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,d),s()},d=h=>{h.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,d)}function jm(t,e){const n=window.getComputedStyle(t),i=v=>(n[v]||"").split(", "),r=i(`${_i}Delay`),s=i(`${_i}Duration`),o=Jf(r,s),a=i(`${Cs}Delay`),l=i(`${Cs}Duration`),c=Jf(a,l);let u=null,f=0,d=0;e===_i?o>0&&(u=_i,f=o,d=s.length):e===Cs?c>0&&(u=Cs,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?_i:Cs:null,d=u?u===_i?s.length:l.length:0);const h=u===_i&&/\b(transform|all)(,|$)/.test(i(`${_i}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:h}}function Jf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Qf(n)+Qf(t[i])))}function Qf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Km(){return document.body.offsetHeight}function xy(t,e,n){const i=t[os];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const La=Symbol("_vod"),Zm=Symbol("_vsh"),Gu={beforeMount(t,{value:e},{transition:n}){t[La]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Rs(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),Rs(t,!0),i.enter(t)):i.leave(t,()=>{Rs(t,!1)}):Rs(t,e))},beforeUnmount(t,{value:e}){Rs(t,e)}};function Rs(t,e){t.style.display=e?t[La]:"none",t[Zm]=!e}const Sy=Symbol(""),My=/(^|;)\s*display\s*:/;function by(t,e,n){const i=t.style,r=yt(n);let s=!1;if(n&&!r){if(e)if(yt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&xa(i,a,"")}else for(const o in e)n[o]==null&&xa(i,o,"");for(const o in n)o==="display"&&(s=!0),xa(i,o,n[o])}else if(r){if(e!==n){const o=i[Sy];o&&(n+=";"+o),i.cssText=n,s=My.test(n)}}else e&&t.removeAttribute("style");La in t&&(t[La]=s?i.display:"",t[Zm]&&(i.display="none"))}const ed=/\s*!important$/;function xa(t,e,n){if(De(n))n.forEach(i=>xa(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Ey(t,e);ed.test(n)?t.setProperty(vs(i),n.replace(ed,""),"important"):t[i]=n}}const td=["Webkit","Moz","ms"],Nl={};function Ey(t,e){const n=Nl[e];if(n)return n;let i=bn(e);if(i!=="filter"&&i in t)return Nl[e]=i;i=ui(i);for(let r=0;r<td.length;r++){const s=td[r]+i;if(s in t)return Nl[e]=s}return e}const nd="http://www.w3.org/1999/xlink";function Ty(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(nd,e.slice(6,e.length)):t.setAttributeNS(nd,e,n);else{const s=w_(e);n==null||s&&!Xp(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function Ay(t,e,n,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(c!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Xp(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function wy(t,e,n,i){t.addEventListener(e,n,i)}function Cy(t,e,n,i){t.removeEventListener(e,n,i)}const id=Symbol("_vei");function Ry(t,e,n,i,r=null){const s=t[id]||(t[id]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Py(e);if(i){const c=s[e]=Dy(i,r);wy(t,a,c,l)}else o&&(Cy(t,a,o,l),s[e]=void 0)}}const rd=/(?:Once|Passive|Capture)$/;function Py(t){let e;if(rd.test(t)){e={};let i;for(;i=t.match(rd);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):vs(t.slice(2)),e]}let Ul=0;const Ly=Promise.resolve(),Iy=()=>Ul||(Ly.then(()=>Ul=0),Ul=Date.now());function Dy(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Sn(Ny(i,n.value),e,5,[i])};return n.value=t,n.attached=Iy(),n}function Ny(t,e){if(De(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const sd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Uy=(t,e,n,i,r,s,o,a,l)=>{const c=r==="svg";e==="class"?xy(t,i,c):e==="style"?by(t,n,i):$a(e)?pu(e)||Ry(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Oy(t,e,i,c))?Ay(t,e,i,s,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Ty(t,e,i,c))};function Oy(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&sd(e)&&Ue(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return sd(e)&&yt(n)?!1:e in t}const Jm=new WeakMap,Qm=new WeakMap,Ia=Symbol("_moveCb"),od=Symbol("_enterCb"),eg={name:"TransitionGroup",props:Mt({},vy,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Hu(),i=Sm();let r,s;return Fu(()=>{if(!r.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!zy(r[0].el,n.vnode.el,o))return;r.forEach(By),r.forEach(ky);const a=r.filter(Vy);Km(),a.forEach(l=>{const c=l.el,u=c.style;ii(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=c[Ia]=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",f),c[Ia]=null,Ai(c,o))};c.addEventListener("transitionend",f)})}),()=>{const o=je(t),a=Ym(o);let l=o.tag||mt;if(r=[],s)for(let c=0;c<s.length;c++){const u=s[c];u.el&&u.el instanceof Element&&(r.push(u),to(u,eo(u,a,i,n)),Jm.set(u,u.el.getBoundingClientRect()))}s=e.default?Ou(e.default()):[];for(let c=0;c<s.length;c++){const u=s[c];u.key!=null&&to(u,eo(u,a,i,n))}return z(l,null,s)}}},Fy=t=>delete t.mode;eg.props;const Wu=eg;function By(t){const e=t.el;e[Ia]&&e[Ia](),e[od]&&e[od]()}function ky(t){Qm.set(t,t.el.getBoundingClientRect())}function Vy(t){const e=Jm.get(t),n=Qm.get(t),i=e.left-n.left,r=e.top-n.top;if(i||r){const s=t.el.style;return s.transform=s.webkitTransform=`translate(${i}px,${r}px)`,s.transitionDuration="0s",t}}function zy(t,e,n){const i=t.cloneNode(),r=t[os];r&&r.forEach(a=>{a.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(i);const{hasTransform:o}=jm(i);return s.removeChild(i),o}const Hy=Mt({patchProp:Uy},gy);let ad;function Gy(){return ad||(ad=Y0(Hy))}const Wy=(...t)=>{const e=Gy().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=$y(i);if(!r)return;const s=e._component;!Ue(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,Xy(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Xy(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function $y(t){return yt(t)?document.querySelector(t):t}function xs(t,e){let n;function i(){n=yu(),n.run(()=>e.length?e(()=>{n==null||n.stop(),i()}):e())}Ye(t,r=>{r&&!n?i():r||(n==null||n.stop(),n=void 0)},{immediate:!0}),En(()=>{n==null||n.stop()})}const vt=typeof window<"u",Xu=vt&&"IntersectionObserver"in window,qy=vt&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);function Yy(t,e,n){const i=e.length-1;if(i<0)return t===void 0?n:t;for(let r=0;r<i;r++){if(t==null)return n;t=t[e[r]]}return t==null||t[e[i]]===void 0?n:t[e[i]]}function $u(t,e){if(t===e)return!0;if(t instanceof Date&&e instanceof Date&&t.getTime()!==e.getTime()||t!==Object(t)||e!==Object(e))return!1;const n=Object.keys(t);return n.length!==Object.keys(e).length?!1:n.every(i=>$u(t[i],e[i]))}function ld(t,e,n){return t==null||!e||typeof e!="string"?n:t[e]!==void 0?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),Yy(t,e.split("."),n))}function tg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:t},(n,i)=>e+i)}function Ve(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(t==null||t===""))return isNaN(+t)?String(t):isFinite(+t)?`${Number(t)}${e}`:void 0}function Hc(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}function ng(t){if(t&&"$el"in t){const e=t.$el;return(e==null?void 0:e.nodeType)===Node.TEXT_NODE?e.nextElementSibling:e}return t}const cd=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function Ol(t,e){return e.every(n=>t.hasOwnProperty(n))}function jy(t,e){const n={},i=new Set(Object.keys(t));for(const r of e)i.has(r)&&(n[r]=t[r]);return n}function Ky(t,e){const n={...t};return e.forEach(i=>delete n[i]),n}const Zy=/^on[^a-z]/,ig=t=>Zy.test(t);function Jy(t){return t==null?[]:Array.isArray(t)?t:[t]}function as(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(n,t))}function ud(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return t+n.repeat(Math.max(0,e-t.length))}function fd(t,e){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,e-t.length))+t}function Qy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let i=0;for(;i<t.length;)n.push(t.substr(i,e)),i+=e;return n}function an(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const i={};for(const r in t)i[r]=t[r];for(const r in e){const s=t[r],o=e[r];if(Hc(s)&&Hc(o)){i[r]=an(s,o,n);continue}if(Array.isArray(s)&&Array.isArray(o)&&n){i[r]=n(s,o);continue}i[r]=o}return i}function rg(t){return t.map(e=>e.type===mt?rg(e.children):e).flat()}function _r(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(_r.cache.has(t))return _r.cache.get(t);const e=t.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return _r.cache.set(t,e),e}_r.cache=new Map;function $s(t,e){if(!e||typeof e!="object")return[];if(Array.isArray(e))return e.map(n=>$s(t,n)).flat(1);if(Array.isArray(e.children))return e.children.map(n=>$s(t,n)).flat(1);if(e.component){if(Object.getOwnPropertySymbols(e.component.provides).includes(t))return[e.component];if(e.component.subTree)return $s(t,e.component.subTree).flat(1)}return[]}function qu(t){const e=Bt({}),n=ne(t);return Un(()=>{for(const i in n.value)e[i]=n.value[i]},{flush:"sync"}),wu(e)}function Da(t,e){return t.includes(e)}function sg(t){return t[2].toLowerCase()+t.slice(3)}function dd(t,e){return e="on"+ui(e),!!(t[e]||t[`${e}Once`]||t[`${e}Capture`]||t[`${e}OnceCapture`]||t[`${e}CaptureOnce`])}function ex(t,e){if(!(vt&&typeof CSS<"u"&&typeof CSS.supports<"u"&&CSS.supports(`selector(${e})`)))return null;try{return!!t&&t.matches(e)}catch{return null}}function tx(t,e){if(!vt||t===0)return e(),()=>{};const n=window.setTimeout(e,t);return()=>window.clearTimeout(n)}function hd(t,e){const n=Je();return Un(()=>{n.value=t()},{flush:"sync",...e}),_s(n)}function Gc(){const t=Je(),e=n=>{t.value=n};return Object.defineProperty(e,"value",{enumerable:!0,get:()=>t.value,set:n=>t.value=n}),Object.defineProperty(e,"el",{enumerable:!0,get:()=>ng(t.value)}),e}const og=["top","bottom"],nx=["start","end","left","right"];function Wc(t,e){let[n,i]=t.split(" ");return i||(i=Da(og,n)?"start":Da(nx,n)?"top":"center"),{side:pd(n,e),align:pd(i,e)}}function pd(t,e){return t==="start"?e?"right":"left":t==="end"?e?"left":"right":t}function Fl(t){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[t.side],align:t.align}}function Bl(t){return{side:t.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[t.align]}}function md(t){return{side:t.align,align:t.side}}function gd(t){return Da(og,t.side)?"y":"x"}class yr{constructor(e){let{x:n,y:i,width:r,height:s}=e;this.x=n,this.y=i,this.width=r,this.height=s}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function vd(t,e){return{x:{before:Math.max(0,e.left-t.left),after:Math.max(0,t.right-e.right)},y:{before:Math.max(0,e.top-t.top),after:Math.max(0,t.bottom-e.bottom)}}}function ix(t){return Array.isArray(t)?new yr({x:t[0],y:t[1],width:0,height:0}):t.getBoundingClientRect()}function rx(t){const e=t.getBoundingClientRect(),n=getComputedStyle(t),i=n.transform;if(i){let r,s,o,a,l;if(i.startsWith("matrix3d("))r=i.slice(9,-1).split(/, /),s=+r[0],o=+r[5],a=+r[12],l=+r[13];else if(i.startsWith("matrix("))r=i.slice(7,-1).split(/, /),s=+r[0],o=+r[3],a=+r[4],l=+r[5];else return new yr(e);const c=n.transformOrigin,u=e.x-a-(1-s)*parseFloat(c),f=e.y-l-(1-o)*parseFloat(c.slice(c.indexOf(" ")+1)),d=s?e.width/s:t.offsetWidth+1,h=o?e.height/o:t.offsetHeight+1;return new yr({x:u,y:f,width:d,height:h})}else return new yr(e)}function sx(t,e,n){if(typeof t.animate>"u")return{finished:Promise.resolve()};let i;try{i=t.animate(e,n)}catch{return{finished:Promise.resolve()}}return typeof i.finished>"u"&&(i.finished=new Promise(r=>{i.onfinish=()=>{r(i)}})),i}const Sa=new WeakMap;function ox(t,e){Object.keys(e).forEach(n=>{if(ig(n)){const i=sg(n),r=Sa.get(t);if(e[n]==null)r==null||r.forEach(s=>{const[o,a]=s;o===i&&(t.removeEventListener(i,a),r.delete(s))});else if(!r||![...r].some(s=>s[0]===i&&s[1]===e[n])){t.addEventListener(i,e[n]);const s=r||new Set;s.add([i,e[n]]),Sa.has(t)||Sa.set(t,s)}}else e[n]==null?t.removeAttribute(n):t.setAttribute(n,e[n])})}function ax(t,e){Object.keys(e).forEach(n=>{if(ig(n)){const i=sg(n),r=Sa.get(t);r==null||r.forEach(s=>{const[o,a]=s;o===i&&(t.removeEventListener(i,a),r.delete(s))})}else t.removeAttribute(n)})}const Cr=2.4,_d=.2126729,yd=.7151522,xd=.072175,lx=.55,cx=.58,ux=.57,fx=.62,Go=.03,Sd=1.45,dx=5e-4,hx=1.25,px=1.25,Md=.078,bd=12.82051282051282,Wo=.06,Ed=.001;function Td(t,e){const n=(t.r/255)**Cr,i=(t.g/255)**Cr,r=(t.b/255)**Cr,s=(e.r/255)**Cr,o=(e.g/255)**Cr,a=(e.b/255)**Cr;let l=n*_d+i*yd+r*xd,c=s*_d+o*yd+a*xd;if(l<=Go&&(l+=(Go-l)**Sd),c<=Go&&(c+=(Go-c)**Sd),Math.abs(c-l)<dx)return 0;let u;if(c>l){const f=(c**lx-l**cx)*hx;u=f<Ed?0:f<Md?f-f*bd*Wo:f-Wo}else{const f=(c**fx-l**ux)*px;u=f>-Ed?0:f>-Md?f-f*bd*Wo:f+Wo}return u*100}const Na=.20689655172413793,mx=t=>t>Na**3?Math.cbrt(t):t/(3*Na**2)+4/29,gx=t=>t>Na?t**3:3*Na**2*(t-4/29);function ag(t){const e=mx,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function lg(t){const e=gx,n=(t[0]+16)/116;return[e(n+t[1]/500)*.95047,e(n),e(n-t[2]/200)*1.08883]}const vx=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],_x=t=>t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055,yx=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],xx=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function cg(t){const e=Array(3),n=_x,i=vx;for(let r=0;r<3;++r)e[r]=Math.round(as(n(i[r][0]*t[0]+i[r][1]*t[1]+i[r][2]*t[2]))*255);return{r:e[0],g:e[1],b:e[2]}}function Yu(t){let{r:e,g:n,b:i}=t;const r=[0,0,0],s=xx,o=yx;e=s(e/255),n=s(n/255),i=s(i/255);for(let a=0;a<3;++a)r[a]=o[a][0]*e+o[a][1]*n+o[a][2]*i;return r}function Xc(t){return!!t&&/^(#|var\(--|(rgb|hsl)a?\()/.test(t)}function Sx(t){return Xc(t)&&!/^((rgb|hsl)a?\()?var\(--/.test(t)}const Ad=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,Mx={rgb:(t,e,n,i)=>({r:t,g:e,b:n,a:i}),rgba:(t,e,n,i)=>({r:t,g:e,b:n,a:i}),hsl:(t,e,n,i)=>wd({h:t,s:e,l:n,a:i}),hsla:(t,e,n,i)=>wd({h:t,s:e,l:n,a:i}),hsv:(t,e,n,i)=>io({h:t,s:e,v:n,a:i}),hsva:(t,e,n,i)=>io({h:t,s:e,v:n,a:i})};function Gn(t){if(typeof t=="number")return{r:(t&16711680)>>16,g:(t&65280)>>8,b:t&255};if(typeof t=="string"&&Ad.test(t)){const{groups:e}=t.match(Ad),{fn:n,values:i}=e,r=i.split(/,\s*/).map(s=>s.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(s)/100:parseFloat(s));return Mx[n](...r)}else if(typeof t=="string"){let e=t.startsWith("#")?t.slice(1):t;return[3,4].includes(e.length)?e=e.split("").map(n=>n+n).join(""):[6,8].includes(e.length),Ex(e)}else if(typeof t=="object"){if(Ol(t,["r","g","b"]))return t;if(Ol(t,["h","s","l"]))return io(ug(t));if(Ol(t,["h","s","v"]))return io(t)}throw new TypeError(`Invalid color: ${t==null?t:String(t)||t.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function io(t){const{h:e,s:n,v:i,a:r}=t,s=a=>{const l=(a+e/60)%6;return i-i*n*Math.max(Math.min(l,4-l,1),0)},o=[s(5),s(3),s(1)].map(a=>Math.round(a*255));return{r:o[0],g:o[1],b:o[2],a:r}}function wd(t){return io(ug(t))}function ug(t){const{h:e,s:n,l:i,a:r}=t,s=i+n*Math.min(i,1-i),o=s===0?0:2-2*i/s;return{h:e,s:o,v:s,a:r}}function Xo(t){const e=Math.round(t).toString(16);return("00".substr(0,2-e.length)+e).toUpperCase()}function bx(t){let{r:e,g:n,b:i,a:r}=t;return`#${[Xo(e),Xo(n),Xo(i),r!==void 0?Xo(Math.round(r*255)):""].join("")}`}function Ex(t){t=Tx(t);let[e,n,i,r]=Qy(t,2).map(s=>parseInt(s,16));return r=r===void 0?r:r/255,{r:e,g:n,b:i,a:r}}function Tx(t){return t.startsWith("#")&&(t=t.slice(1)),t=t.replace(/([^0-9a-f])/gi,"F"),(t.length===3||t.length===4)&&(t=t.split("").map(e=>e+e).join("")),t.length!==6&&(t=ud(ud(t,6),8,"F")),t}function Ax(t,e){const n=ag(Yu(t));return n[0]=n[0]+e*10,cg(lg(n))}function wx(t,e){const n=ag(Yu(t));return n[0]=n[0]-e*10,cg(lg(n))}function Cx(t){const e=Gn(t);return Yu(e)[1]}function fg(t){const e=Math.abs(Td(Gn(0),Gn(t)));return Math.abs(Td(Gn(16777215),Gn(t)))>Math.min(e,50)?"#fff":"#000"}function Le(t,e){return n=>Object.keys(t).reduce((i,r)=>{const o=typeof t[r]=="object"&&t[r]!=null&&!Array.isArray(t[r])?t[r]:{type:t[r]};return n&&r in n?i[r]={...o,default:n[r]}:i[r]=o,e&&!i[r].source&&(i[r].source=e),i},{})}const ht=Le({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component"),ls=Symbol.for("vuetify:defaults");function Rx(t){return nt(t)}function ju(){const t=_t(ls);if(!t)throw new Error("[Vuetify] Could not find defaults instance");return t}function nl(t,e){const n=ju(),i=nt(t),r=ne(()=>{if($t(e==null?void 0:e.disabled))return n.value;const o=$t(e==null?void 0:e.scoped),a=$t(e==null?void 0:e.reset),l=$t(e==null?void 0:e.root);if(i.value==null&&!(o||a||l))return n.value;let c=an(i.value,{prev:n.value});if(o)return c;if(a||l){const u=Number(a||1/0);for(let f=0;f<=u&&!(!c||!("prev"in c));f++)c=c.prev;return c&&typeof l=="string"&&l in c&&(c=an(an(c,{prev:c}),c[l])),c}return c.prev?an(c.prev,c):c});return Mn(ls,r),r}function Px(t,e){var n,i;return typeof((n=t.props)==null?void 0:n[e])<"u"||typeof((i=t.props)==null?void 0:i[_r(e)])<"u"}function Lx(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ju();const i=It("useDefaults");if(e=e??i.type.name??i.type.__name,!e)throw new Error("[Vuetify] Could not determine component name");const r=ne(()=>{var l;return(l=n.value)==null?void 0:l[t._as??e]}),s=new Proxy(t,{get(l,c){var f,d,h,v;const u=Reflect.get(l,c);return c==="class"||c==="style"?[(f=r.value)==null?void 0:f[c],u].filter(g=>g!=null):typeof c=="string"&&!Px(i.vnode,c)?((d=r.value)==null?void 0:d[c])??((v=(h=n.value)==null?void 0:h.global)==null?void 0:v[c])??u:u}}),o=Je();Un(()=>{if(r.value){const l=Object.entries(r.value).filter(c=>{let[u]=c;return u.startsWith(u[0].toUpperCase())});o.value=l.length?Object.fromEntries(l):void 0}else o.value=void 0});function a(){const l=Ux(ls,i);Mn(ls,ne(()=>o.value?an((l==null?void 0:l.value)??{},o.value):l==null?void 0:l.value))}return{props:s,provideSubDefaults:a}}function yo(t){if(t._setup=t._setup??t.setup,!t.name)return t;if(t._setup){t.props=Le(t.props??{},t.name)();const e=Object.keys(t.props).filter(n=>n!=="class"&&n!=="style");t.filterProps=function(i){return jy(i,e)},t.props._as=String,t.setup=function(i,r){const s=ju();if(!s.value)return t._setup(i,r);const{props:o,provideSubDefaults:a}=Lx(i,i._as??t.name,s),l=t._setup(o,r);return a(),l}}return t}function et(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(t?yo:ys)(e)}function dg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return et()({name:n??ui(bn(t.replace(/__/g,"-"))),props:{tag:{type:String,default:e},...ht()},setup(i,r){let{slots:s}=r;return()=>{var o;return jn(i.tag,{class:[t,i.class],style:i.style},(o=s.default)==null?void 0:o.call(s))}}})}function hg(t){if(typeof t.getRootNode!="function"){for(;t.parentNode;)t=t.parentNode;return t!==document?null:document}const e=t.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}const Ix="cubic-bezier(0.4, 0, 0.2, 1)";function It(t,e){const n=Hu();if(!n)throw new Error(`[Vuetify] ${t} must be called from inside a setup function`);return n}function Yi(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const e=It(t).type;return _r((e==null?void 0:e.aliasName)||(e==null?void 0:e.name))}let pg=0,Ma=new WeakMap;function il(){const t=It("getUid");if(Ma.has(t))return Ma.get(t);{const e=pg++;return Ma.set(t,e),e}}il.reset=()=>{pg=0,Ma=new WeakMap};function Dx(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;t;){if(e?Nx(t):Ku(t))return t;t=t.parentElement}return document.scrollingElement}function Ua(t,e){const n=[];if(e&&t&&!e.contains(t))return n;for(;t&&(Ku(t)&&n.push(t),t!==e);)t=t.parentElement;return n}function Ku(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;const e=window.getComputedStyle(t);return e.overflowY==="scroll"||e.overflowY==="auto"&&t.scrollHeight>t.clientHeight}function Nx(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;const e=window.getComputedStyle(t);return["scroll","auto"].includes(e.overflowY)}function Ux(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:It("injectSelf");const{provides:n}=e;if(n&&t in n)return n[t]}function Ox(t){for(;t;){if(window.getComputedStyle(t).position==="fixed")return!0;t=t.offsetParent}return!1}function lt(t){const e=It("useRender");e.render=t}function Ss(t,e,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:f=>f,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:f=>f;const s=It("useProxiedModel"),o=nt(t[e]!==void 0?t[e]:n),a=_r(e),c=ne(a!==e?()=>{var f,d,h,v;return t[e],!!(((f=s.vnode.props)!=null&&f.hasOwnProperty(e)||(d=s.vnode.props)!=null&&d.hasOwnProperty(a))&&((h=s.vnode.props)!=null&&h.hasOwnProperty(`onUpdate:${e}`)||(v=s.vnode.props)!=null&&v.hasOwnProperty(`onUpdate:${a}`)))}:()=>{var f,d;return t[e],!!((f=s.vnode.props)!=null&&f.hasOwnProperty(e)&&((d=s.vnode.props)!=null&&d.hasOwnProperty(`onUpdate:${e}`)))});xs(()=>!c.value,()=>{Ye(()=>t[e],f=>{o.value=f})});const u=ne({get(){const f=t[e];return i(c.value?f:o.value)},set(f){const d=r(f),h=je(c.value?t[e]:o.value);h===d||i(h)===f||(o.value=d,s==null||s.emit(`update:${e}`,d))}});return Object.defineProperty(u,"externalValue",{get:()=>c.value?t[e]:o.value}),u}const Fx={badge:"Badge",open:"Open",close:"Close",dismiss:"Dismiss",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM",title:"Select Time"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},Cd="$vuetify.",Rd=(t,e)=>t.replace(/\{(\d+)\}/g,(n,i)=>String(e[+i])),mg=(t,e,n)=>function(i){for(var r=arguments.length,s=new Array(r>1?r-1:0),o=1;o<r;o++)s[o-1]=arguments[o];if(!i.startsWith(Cd))return Rd(i,s);const a=i.replace(Cd,""),l=t.value&&n.value[t.value],c=e.value&&n.value[e.value];let u=ld(l,a,null);return u||(`${i}${t.value}`,u=ld(c,a,null)),u||(u=i),typeof u!="string"&&(u=i),Rd(u,s)};function gg(t,e){return(n,i)=>new Intl.NumberFormat([t.value,e.value],i).format(n)}function kl(t,e,n){const i=Ss(t,e,t[e]??n.value);return i.value=t[e]??n.value,Ye(n,r=>{t[e]==null&&(i.value=n.value)}),i}function vg(t){return e=>{const n=kl(e,"locale",t.current),i=kl(e,"fallback",t.fallback),r=kl(e,"messages",t.messages);return{name:"vuetify",current:n,fallback:i,messages:r,t:mg(n,i,r),n:gg(n,i),provide:vg({current:n,fallback:i,messages:r})}}}function Bx(t){const e=Je((t==null?void 0:t.locale)??"en"),n=Je((t==null?void 0:t.fallback)??"en"),i=nt({en:Fx,...t==null?void 0:t.messages});return{name:"vuetify",current:e,fallback:n,messages:i,t:mg(e,n,i),n:gg(e,n),provide:vg({current:e,fallback:n,messages:i})}}const $c=Symbol.for("vuetify:locale");function kx(t){return t.name!=null}function Vx(t){const e=t!=null&&t.adapter&&kx(t==null?void 0:t.adapter)?t==null?void 0:t.adapter:Bx(t),n=Hx(e,t);return{...e,...n}}function zx(){return{af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,km:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1}}function Hx(t,e){const n=nt((e==null?void 0:e.rtl)??zx()),i=ne(()=>n.value[t.current.value]??!1);return{isRtl:i,rtl:n,rtlClasses:ne(()=>`v-locale--is-${i.value?"rtl":"ltr"}`)}}function Ms(){const t=_t($c);if(!t)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:t.isRtl,rtlClasses:t.rtlClasses}}const ro={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function Gx(t,e){const n=[];let i=[];const r=_g(t),s=yg(t),o=(r.getDay()-ro[e.slice(-2).toUpperCase()]+7)%7,a=(s.getDay()-ro[e.slice(-2).toUpperCase()]+7)%7;for(let l=0;l<o;l++){const c=new Date(r);c.setDate(c.getDate()-(o-l)),i.push(c)}for(let l=1;l<=s.getDate();l++){const c=new Date(t.getFullYear(),t.getMonth(),l);i.push(c),i.length===7&&(n.push(i),i=[])}for(let l=1;l<7-a;l++){const c=new Date(s);c.setDate(c.getDate()+l),i.push(c)}return i.length>0&&n.push(i),n}function Wx(t,e){const n=new Date(t);for(;n.getDay()!==(ro[e.slice(-2).toUpperCase()]??0);)n.setDate(n.getDate()-1);return n}function Xx(t,e){const n=new Date(t),i=((ro[e.slice(-2).toUpperCase()]??0)+6)%7;for(;n.getDay()!==i;)n.setDate(n.getDate()+1);return n}function _g(t){return new Date(t.getFullYear(),t.getMonth(),1)}function yg(t){return new Date(t.getFullYear(),t.getMonth()+1,0)}function $x(t){const e=t.split("-").map(Number);return new Date(e[0],e[1]-1,e[2])}const qx=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;function xg(t){if(t==null)return new Date;if(t instanceof Date)return t;if(typeof t=="string"){let e;if(qx.test(t))return $x(t);if(e=Date.parse(t),!isNaN(e))return new Date(e)}return null}const Pd=new Date(2e3,0,2);function Yx(t){const e=ro[t.slice(-2).toUpperCase()];return tg(7).map(n=>{const i=new Date(Pd);return i.setDate(Pd.getDate()+e+n),new Intl.DateTimeFormat(t,{weekday:"narrow"}).format(i)})}function jx(t,e,n,i){const r=xg(t)??new Date,s=i==null?void 0:i[e];if(typeof s=="function")return s(r,e,n);let o={};switch(e){case"fullDate":o={year:"numeric",month:"long",day:"numeric"};break;case"fullDateWithWeekday":o={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;case"normalDate":const a=r.getDate(),l=new Intl.DateTimeFormat(n,{month:"long"}).format(r);return`${a} ${l}`;case"normalDateWithWeekday":o={weekday:"short",day:"numeric",month:"short"};break;case"shortDate":o={month:"short",day:"numeric"};break;case"year":o={year:"numeric"};break;case"month":o={month:"long"};break;case"monthShort":o={month:"short"};break;case"monthAndYear":o={month:"long",year:"numeric"};break;case"monthAndDate":o={month:"long",day:"numeric"};break;case"weekday":o={weekday:"long"};break;case"weekdayShort":o={weekday:"short"};break;case"dayOfMonth":return new Intl.NumberFormat(n).format(r.getDate());case"hours12h":o={hour:"numeric",hour12:!0};break;case"hours24h":o={hour:"numeric",hour12:!1};break;case"minutes":o={minute:"numeric"};break;case"seconds":o={second:"numeric"};break;case"fullTime":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime12h":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime24h":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"fullDateTime":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime12h":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime24h":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDate":o={year:"numeric",month:"2-digit",day:"2-digit"};break;case"keyboardDateTime":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDateTime12h":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"keyboardDateTime24h":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;default:o=s??{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(n,o).format(r)}function Kx(t,e){const n=t.toJsDate(e),i=n.getFullYear(),r=fd(String(n.getMonth()+1),2,"0"),s=fd(String(n.getDate()),2,"0");return`${i}-${r}-${s}`}function Zx(t){const[e,n,i]=t.split("-").map(Number);return new Date(e,n-1,i)}function Jx(t,e){const n=new Date(t);return n.setMinutes(n.getMinutes()+e),n}function Qx(t,e){const n=new Date(t);return n.setHours(n.getHours()+e),n}function eS(t,e){const n=new Date(t);return n.setDate(n.getDate()+e),n}function tS(t,e){const n=new Date(t);return n.setDate(n.getDate()+e*7),n}function nS(t,e){const n=new Date(t);return n.setDate(1),n.setMonth(n.getMonth()+e),n}function iS(t){return t.getFullYear()}function rS(t){return t.getMonth()}function sS(t){return t.getDate()}function oS(t){return new Date(t.getFullYear(),t.getMonth()+1,1)}function aS(t){return new Date(t.getFullYear(),t.getMonth()-1,1)}function lS(t){return t.getHours()}function cS(t){return t.getMinutes()}function uS(t){return new Date(t.getFullYear(),0,1)}function fS(t){return new Date(t.getFullYear(),11,31)}function dS(t,e){return Oa(t,e[0])&&mS(t,e[1])}function hS(t){const e=new Date(t);return e instanceof Date&&!isNaN(e.getTime())}function Oa(t,e){return t.getTime()>e.getTime()}function pS(t,e){return Oa(qc(t),qc(e))}function mS(t,e){return t.getTime()<e.getTime()}function Ld(t,e){return t.getTime()===e.getTime()}function gS(t,e){return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function vS(t,e){return t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function _S(t,e){return t.getFullYear()===e.getFullYear()}function yS(t,e,n){const i=new Date(t),r=new Date(e);switch(n){case"years":return i.getFullYear()-r.getFullYear();case"quarters":return Math.floor((i.getMonth()-r.getMonth()+(i.getFullYear()-r.getFullYear())*12)/4);case"months":return i.getMonth()-r.getMonth()+(i.getFullYear()-r.getFullYear())*12;case"weeks":return Math.floor((i.getTime()-r.getTime())/(1e3*60*60*24*7));case"days":return Math.floor((i.getTime()-r.getTime())/(1e3*60*60*24));case"hours":return Math.floor((i.getTime()-r.getTime())/(1e3*60*60));case"minutes":return Math.floor((i.getTime()-r.getTime())/(1e3*60));case"seconds":return Math.floor((i.getTime()-r.getTime())/1e3);default:return i.getTime()-r.getTime()}}function xS(t,e){const n=new Date(t);return n.setHours(e),n}function SS(t,e){const n=new Date(t);return n.setMinutes(e),n}function MS(t,e){const n=new Date(t);return n.setMonth(e),n}function bS(t,e){const n=new Date(t);return n.setDate(e),n}function ES(t,e){const n=new Date(t);return n.setFullYear(e),n}function qc(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),0,0,0,0)}function TS(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),23,59,59,999)}class AS{constructor(e){this.locale=e.locale,this.formats=e.formats}date(e){return xg(e)}toJsDate(e){return e}toISO(e){return Kx(this,e)}parseISO(e){return Zx(e)}addMinutes(e,n){return Jx(e,n)}addHours(e,n){return Qx(e,n)}addDays(e,n){return eS(e,n)}addWeeks(e,n){return tS(e,n)}addMonths(e,n){return nS(e,n)}getWeekArray(e){return Gx(e,this.locale)}startOfWeek(e){return Wx(e,this.locale)}endOfWeek(e){return Xx(e,this.locale)}startOfMonth(e){return _g(e)}endOfMonth(e){return yg(e)}format(e,n){return jx(e,n,this.locale,this.formats)}isEqual(e,n){return Ld(e,n)}isValid(e){return hS(e)}isWithinRange(e,n){return dS(e,n)}isAfter(e,n){return Oa(e,n)}isAfterDay(e,n){return pS(e,n)}isBefore(e,n){return!Oa(e,n)&&!Ld(e,n)}isSameDay(e,n){return gS(e,n)}isSameMonth(e,n){return vS(e,n)}isSameYear(e,n){return _S(e,n)}setMinutes(e,n){return SS(e,n)}setHours(e,n){return xS(e,n)}setMonth(e,n){return MS(e,n)}setDate(e,n){return bS(e,n)}setYear(e,n){return ES(e,n)}getDiff(e,n,i){return yS(e,n,i)}getWeekdays(){return Yx(this.locale)}getYear(e){return iS(e)}getMonth(e){return rS(e)}getDate(e){return sS(e)}getNextMonth(e){return oS(e)}getPreviousMonth(e){return aS(e)}getHours(e){return lS(e)}getMinutes(e){return cS(e)}startOfDay(e){return qc(e)}endOfDay(e){return TS(e)}startOfYear(e){return uS(e)}endOfYear(e){return fS(e)}}const wS=Symbol.for("vuetify:date-options"),Id=Symbol.for("vuetify:date-adapter");function CS(t,e){const n=an({adapter:AS,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},t);return{options:n,instance:RS(n,e)}}function RS(t,e){const n=Bt(typeof t.adapter=="function"?new t.adapter({locale:t.locale[e.current.value]??e.current.value,formats:t.formats}):t.adapter);return Ye(e.current,i=>{n.locale=t.locale[i]??i??n.locale}),n}const rl=["sm","md","lg","xl","xxl"],Yc=Symbol.for("vuetify:display"),Dd={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},PS=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Dd;return an(Dd,t)};function Nd(t){return vt&&!t?window.innerWidth:typeof t=="object"&&t.clientWidth||0}function Ud(t){return vt&&!t?window.innerHeight:typeof t=="object"&&t.clientHeight||0}function Od(t){const e=vt&&!t?window.navigator.userAgent:"ssr";function n(v){return!!e.match(v)}const i=n(/android/i),r=n(/iphone|ipad|ipod/i),s=n(/cordova/i),o=n(/electron/i),a=n(/chrome/i),l=n(/edge/i),c=n(/firefox/i),u=n(/opera/i),f=n(/win/i),d=n(/mac/i),h=n(/linux/i);return{android:i,ios:r,cordova:s,electron:o,chrome:a,edge:l,firefox:c,opera:u,win:f,mac:d,linux:h,touch:qy,ssr:e==="ssr"}}function LS(t,e){const{thresholds:n,mobileBreakpoint:i}=PS(t),r=Je(Ud(e)),s=Je(Od(e)),o=Bt({}),a=Je(Nd(e));function l(){r.value=Ud(),a.value=Nd()}function c(){l(),s.value=Od()}return Un(()=>{const u=a.value<n.sm,f=a.value<n.md&&!u,d=a.value<n.lg&&!(f||u),h=a.value<n.xl&&!(d||f||u),v=a.value<n.xxl&&!(h||d||f||u),g=a.value>=n.xxl,m=u?"xs":f?"sm":d?"md":h?"lg":v?"xl":"xxl",p=typeof i=="number"?i:n[i],M=a.value<p;o.xs=u,o.sm=f,o.md=d,o.lg=h,o.xl=v,o.xxl=g,o.smAndUp=!u,o.mdAndUp=!(u||f),o.lgAndUp=!(u||f||d),o.xlAndUp=!(u||f||d||h),o.smAndDown=!(d||h||v||g),o.mdAndDown=!(h||v||g),o.lgAndDown=!(v||g),o.xlAndDown=!g,o.name=m,o.height=r.value,o.width=a.value,o.mobile=M,o.mobileBreakpoint=i,o.platform=s.value,o.thresholds=n}),vt&&window.addEventListener("resize",l,{passive:!0}),{...wu(o),update:c,ssr:!!e}}function IS(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Yi();const n=_t(Yc);if(!n)throw new Error("Could not find Vuetify display injection");const i=ne(()=>{if(t.mobile!=null)return t.mobile;if(!t.mobileBreakpoint)return n.mobile.value;const s=typeof t.mobileBreakpoint=="number"?t.mobileBreakpoint:n.thresholds.value[t.mobileBreakpoint];return n.width.value<s}),r=ne(()=>e?{[`${e}--mobile`]:i.value}:{});return{...n,displayClasses:r,mobile:i}}const DS=Symbol.for("vuetify:goto");function NS(){return{container:void 0,duration:300,layout:!1,offset:0,easing:"easeInOutCubic",patterns:{linear:t=>t,easeInQuad:t=>t**2,easeOutQuad:t=>t*(2-t),easeInOutQuad:t=>t<.5?2*t**2:-1+(4-2*t)*t,easeInCubic:t=>t**3,easeOutCubic:t=>--t**3+1,easeInOutCubic:t=>t<.5?4*t**3:(t-1)*(2*t-2)*(2*t-2)+1,easeInQuart:t=>t**4,easeOutQuart:t=>1- --t**4,easeInOutQuart:t=>t<.5?8*t**4:1-8*--t**4,easeInQuint:t=>t**5,easeOutQuint:t=>1+--t**5,easeInOutQuint:t=>t<.5?16*t**5:1+16*--t**5}}}function US(t,e){return{rtl:e.isRtl,options:an(NS(),t)}}const OS={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",treeviewCollapse:"mdi-menu-down",treeviewExpand:"mdi-menu-right",eyeDropper:"mdi-eyedropper"},FS={component:t=>jn(Mg,{...t,class:"mdi"})},ci=[String,Function,Object,Array],jc=Symbol.for("vuetify:icons"),sl=Le({icon:{type:ci},tag:{type:String,required:!0}},"icon"),Fd=et()({name:"VComponentIcon",props:sl(),setup(t,e){let{slots:n}=e;return()=>{const i=t.icon;return z(t.tag,null,{default:()=>{var r;return[t.icon?z(i,null,null):(r=n.default)==null?void 0:r.call(n)]}})}}}),Sg=yo({name:"VSvgIcon",inheritAttrs:!1,props:sl(),setup(t,e){let{attrs:n}=e;return()=>z(t.tag,Vt(n,{style:null}),{default:()=>[z("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(t.icon)?t.icon.map(i=>Array.isArray(i)?z("path",{d:i[0],"fill-opacity":i[1]},null):z("path",{d:i},null)):z("path",{d:t.icon},null)])]})}});yo({name:"VLigatureIcon",props:sl(),setup(t){return()=>z(t.tag,null,{default:()=>[t.icon]})}});const Mg=yo({name:"VClassIcon",props:sl(),setup(t){return()=>z(t.tag,{class:t.icon},null)}});function BS(){return{svg:{component:Sg},class:{component:Mg}}}function kS(t){const e=BS(),n=(t==null?void 0:t.defaultSet)??"mdi";return n==="mdi"&&!e.mdi&&(e.mdi=FS),an({defaultSet:n,sets:e,aliases:{...OS,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z","vuetify-play":["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z",["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z",.6]]}},t)}const VS=t=>{const e=_t(jc);if(!e)throw new Error("Missing Vuetify Icons provide!");return{iconData:ne(()=>{var l;const i=$t(t);if(!i)return{component:Fd};let r=i;if(typeof r=="string"&&(r=r.trim(),r.startsWith("$")&&(r=(l=e.aliases)==null?void 0:l[r.slice(1)])),Array.isArray(r))return{component:Sg,icon:r};if(typeof r!="string")return{component:Fd,icon:r};const s=Object.keys(e.sets).find(c=>typeof r=="string"&&r.startsWith(`${c}:`)),o=s?r.slice(s.length+1):r;return{component:e.sets[s??e.defaultSet].component,icon:o}})}},Fa=Symbol.for("vuetify:theme"),un=Le({theme:String},"theme");function Bd(){return{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-light":"#424242","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}}function zS(){var i,r;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Bd();const e=Bd();if(!t)return{...e,isDisabled:!0};const n={};for(const[s,o]of Object.entries(t.themes??{})){const a=o.dark||s==="dark"?(i=e.themes)==null?void 0:i.dark:(r=e.themes)==null?void 0:r.light;n[s]=an(a,o)}return an(e,{...t,themes:n})}function HS(t){const e=zS(t),n=nt(e.defaultTheme),i=nt(e.themes),r=ne(()=>{const u={};for(const[f,d]of Object.entries(i.value)){const h=u[f]={...d,colors:{...d.colors}};if(e.variations)for(const v of e.variations.colors){const g=h.colors[v];if(g)for(const m of["lighten","darken"]){const p=m==="lighten"?Ax:wx;for(const M of tg(e.variations[m],1))h.colors[`${v}-${m}-${M}`]=bx(p(Gn(g),M))}}for(const v of Object.keys(h.colors)){if(/^on-[a-z]/.test(v)||h.colors[`on-${v}`])continue;const g=`on-${v}`,m=Gn(h.colors[v]);h.colors[g]=fg(m)}}return u}),s=ne(()=>r.value[n.value]),o=ne(()=>{var v;const u=[];(v=s.value)!=null&&v.dark&&er(u,":root",["color-scheme: dark"]),er(u,":root",kd(s.value));for(const[g,m]of Object.entries(r.value))er(u,`.v-theme--${g}`,[`color-scheme: ${m.dark?"dark":"normal"}`,...kd(m)]);const f=[],d=[],h=new Set(Object.values(r.value).flatMap(g=>Object.keys(g.colors)));for(const g of h)/^on-[a-z]/.test(g)?er(d,`.${g}`,[`color: rgb(var(--v-theme-${g})) !important`]):(er(f,`.bg-${g}`,[`--v-theme-overlay-multiplier: var(--v-theme-${g}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${g})) !important`,`color: rgb(var(--v-theme-on-${g})) !important`]),er(d,`.text-${g}`,[`color: rgb(var(--v-theme-${g})) !important`]),er(d,`.border-${g}`,[`--v-border-color: var(--v-theme-${g})`]));return u.push(...f,...d),u.map((g,m)=>m===0?g:`    ${g}`).join("")});function a(){return{style:[{children:o.value,id:"vuetify-theme-stylesheet",nonce:e.cspNonce||!1}]}}function l(u){if(e.isDisabled)return;const f=u._context.provides.usehead;if(f)if(f.push){const h=f.push(a);vt&&Ye(o,()=>{h.patch(a)})}else vt?(f.addHeadObjs(ne(a)),Un(()=>f.updateDOM())):f.addHeadObjs(a());else{let v=function(){if(typeof document<"u"&&!h){const g=document.createElement("style");g.type="text/css",g.id="vuetify-theme-stylesheet",e.cspNonce&&g.setAttribute("nonce",e.cspNonce),h=g,document.head.appendChild(h)}h&&(h.innerHTML=o.value)};var d=v;let h=vt?document.getElementById("vuetify-theme-stylesheet"):null;vt?Ye(o,v,{immediate:!0}):v()}}const c=ne(()=>e.isDisabled?void 0:`v-theme--${n.value}`);return{install:l,isDisabled:e.isDisabled,name:n,themes:i,current:s,computedThemes:r,themeClasses:c,styles:o,global:{name:n,current:s}}}function fn(t){It("provideTheme");const e=_t(Fa,null);if(!e)throw new Error("Could not find Vuetify theme injection");const n=ne(()=>t.theme??e.name.value),i=ne(()=>e.themes.value[n.value]),r=ne(()=>e.isDisabled?void 0:`v-theme--${n.value}`),s={...e,name:n,current:i,themeClasses:r};return Mn(Fa,s),s}function er(t,e,n){t.push(`${e} {
`,...n.map(i=>`  ${i};
`),`}
`)}function kd(t){const e=t.dark?2:1,n=t.dark?1:2,i=[];for(const[r,s]of Object.entries(t.colors)){const o=Gn(s);i.push(`--v-theme-${r}: ${o.r},${o.g},${o.b}`),r.startsWith("on-")||i.push(`--v-theme-${r}-overlay-multiplier: ${Cx(s)>.18?e:n}`)}for(const[r,s]of Object.entries(t.variables)){const o=typeof s=="string"&&s.startsWith("#")?Gn(s):void 0,a=o?`${o.r}, ${o.g}, ${o.b}`:void 0;i.push(`--v-${r}: ${a??s}`)}return i}function bg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const n=Gc(),i=nt();if(vt){const r=new ResizeObserver(s=>{s.length&&(e==="content"?i.value=s[0].contentRect:i.value=s[0].target.getBoundingClientRect())});Yn(()=>{r.disconnect()}),Ye(()=>n.el,(s,o)=>{o&&(r.unobserve(o),i.value=void 0),s&&r.observe(s)},{flush:"post"})}return{resizeRef:n,contentRect:_s(i)}}const so=Symbol.for("vuetify:layout"),Eg=Symbol.for("vuetify:layout-item"),Vd=1e3,Tg=Le({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),GS=Le({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Ag(){const t=_t(so);if(!t)throw new Error("[Vuetify] Could not find injected layout");return{layoutIsReady:cn(),getLayoutItem:t.getLayoutItem,mainRect:t.mainRect,mainStyles:t.mainStyles}}function WS(t){const e=_t(so);if(!e)throw new Error("[Vuetify] Could not find injected layout");const n=t.id??`layout-item-${il()}`,i=It("useLayoutItem");Mn(Eg,{id:n});const r=Je(!1);Tm(()=>r.value=!0),Em(()=>r.value=!1);const s=cn(),{layoutItemStyles:o,layoutItemScrimStyles:a}=e.register(i,{...t,active:ne(()=>r.value?!1:t.active.value),id:n});return Yn(()=>e.unregister(n)),{layoutItemStyles:o,layoutRect:e.layoutRect,layoutItemScrimStyles:a,layoutIsReady:s}}const XS=(t,e,n,i)=>{let r={top:0,left:0,right:0,bottom:0};const s=[{id:"",layer:{...r}}];for(const o of t){const a=e.get(o),l=n.get(o),c=i.get(o);if(!a||!l||!c)continue;const u={...r,[a.value]:parseInt(r[a.value],10)+(c.value?parseInt(l.value,10):0)};s.push({id:o,layer:u}),r=u}return s};function wg(t){const e=_t(so,null),n=ne(()=>e?e.rootZIndex.value-100:Vd),i=nt([]),r=Bt(new Map),s=Bt(new Map),o=Bt(new Map),a=Bt(new Map),l=Bt(new Map),{resizeRef:c,contentRect:u}=bg(),f=hd(()=>{const L=[...new Set([...o.values()].map(b=>b.value))].sort((b,D)=>b-D),E=[];for(const b of L){const D=i.value.filter(S=>{var _;return((_=o.get(S))==null?void 0:_.value)===b});E.push(...D)}return XS(E,r,s,a)}),d=ne(()=>!Array.from(l.values()).some(L=>L.value)),h=ne(()=>f.value[f.value.length-1].layer),v=ne(()=>({"--v-layout-left":Ve(h.value.left),"--v-layout-right":Ve(h.value.right),"--v-layout-top":Ve(h.value.top),"--v-layout-bottom":Ve(h.value.bottom),...d.value?void 0:{transition:"none"}})),g=hd(()=>f.value.slice(1).map((L,E)=>{let{id:b}=L;const{layer:D}=f.value[E],S=s.get(b),_=r.get(b);return{id:b,...D,size:Number(S.value),position:_.value}})),m=L=>g.value.find(E=>E.id===L),p=It("createLayout"),M=cn();Mn(so,{register:(L,E)=>{let{id:b,order:D,position:S,layoutSize:_,elementSize:N,active:I,disableTransitions:R,absolute:k}=E;o.set(b,D),r.set(b,S),s.set(b,_),a.set(b,I),R&&l.set(b,R);const ee=$s(Eg,p==null?void 0:p.vnode).indexOf(L);ee>-1?i.value.splice(ee,0,b):i.value.push(b);const ie=ne(()=>g.value.findIndex(ve=>ve.id===b)),G=ne(()=>n.value+f.value.length*2-ie.value*2),fe=ne(()=>{const ve=S.value==="left"||S.value==="right",Ae=S.value==="right",$e=S.value==="bottom",te=N.value??_.value,oe=te===0?"%":"px",ge={[S.value]:0,zIndex:G.value,transform:`translate${ve?"X":"Y"}(${(I.value?0:-(te===0?100:te))*(Ae||$e?-1:1)}${oe})`,position:k.value||n.value!==Vd?"absolute":"fixed",...d.value?void 0:{transition:"none"}};if(ie.value<0)throw new Error(`Layout item "${b}" is missing`);const B=g.value[ie.value];if(!B)throw new Error(`[Vuetify] Could not find layout item "${b}"`);return{...ge,height:ve?`calc(100% - ${B.top}px - ${B.bottom}px)`:N.value?`${N.value}px`:void 0,left:Ae?void 0:`${B.left}px`,right:Ae?`${B.right}px`:void 0,top:S.value!=="bottom"?`${B.top}px`:void 0,bottom:S.value!=="top"?`${B.bottom}px`:void 0,width:ve?N.value?`${N.value}px`:void 0:`calc(100% - ${B.left}px - ${B.right}px)`}}),me=ne(()=>({zIndex:G.value-1}));return{layoutItemStyles:fe,layoutItemScrimStyles:me,zIndex:G}},unregister:L=>{o.delete(L),r.delete(L),s.delete(L),a.delete(L),l.delete(L),i.value=i.value.filter(E=>E!==L)},mainRect:h,mainStyles:v,getLayoutItem:m,items:g,layoutRect:u,rootZIndex:n,layoutIsReady:M});const x=ne(()=>["v-layout",{"v-layout--full-height":t.fullHeight}]),T=ne(()=>({zIndex:e?n.value:void 0,position:e?"relative":void 0,overflow:e?"hidden":void 0}));return{layoutClasses:x,layoutStyles:T,getLayoutItem:m,items:g,layoutRect:u,layoutIsReady:M,layoutRef:c}}function Cg(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:e,...n}=t,i=an(e,n),{aliases:r={},components:s={},directives:o={}}=i,a=Rx(i.defaults),l=LS(i.display,i.ssr),c=HS(i.theme),u=kS(i.icons),f=Vx(i.locale),d=CS(i.date,f),h=US(i.goTo,f);return{install:g=>{for(const m in o)g.directive(m,o[m]);for(const m in s)g.component(m,s[m]);for(const m in r)g.component(m,yo({...r[m],name:m,aliasName:r[m].name}));if(c.install(g),g.provide(ls,a),g.provide(Yc,l),g.provide(Fa,c),g.provide(jc,u),g.provide($c,f),g.provide(wS,d.options),g.provide(Id,d.instance),g.provide(DS,h),vt&&i.ssr)if(g.$nuxt)g.$nuxt.hook("app:suspense:resolve",()=>{l.update()});else{const{mount:m}=g;g.mount=function(){const p=m(...arguments);return cn(()=>l.update()),g.mount=m,p}}il.reset(),g.mixin({computed:{$vuetify(){return Bt({defaults:Rr.call(this,ls),display:Rr.call(this,Yc),theme:Rr.call(this,Fa),icons:Rr.call(this,jc),locale:Rr.call(this,$c),date:Rr.call(this,Id)})}}})},defaults:a,display:l,theme:c,icons:u,locale:f,date:d,goTo:h}}const $S="3.6.6";Cg.version=$S;function Rr(t){var i,r;const e=this.$,n=((i=e.parent)==null?void 0:i.provides)??((r=e.vnode.appContext)==null?void 0:r.provides);if(n&&t in n)return n[t]}const qS=Cg({theme:{defaultTheme:"dark"}});function YS(t){t.use(qS)}/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const qr=typeof document<"u";function jS(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const st=Object.assign;function Vl(t,e){const n={};for(const i in e){const r=e[i];n[i]=Nn(r)?r.map(t):t(r)}return n}const qs=()=>{},Nn=Array.isArray,Rg=/#/g,KS=/&/g,ZS=/\//g,JS=/=/g,QS=/\?/g,Pg=/\+/g,eM=/%5B/g,tM=/%5D/g,Lg=/%5E/g,nM=/%60/g,Ig=/%7B/g,iM=/%7C/g,Dg=/%7D/g,rM=/%20/g;function Zu(t){return encodeURI(""+t).replace(iM,"|").replace(eM,"[").replace(tM,"]")}function sM(t){return Zu(t).replace(Ig,"{").replace(Dg,"}").replace(Lg,"^")}function Kc(t){return Zu(t).replace(Pg,"%2B").replace(rM,"+").replace(Rg,"%23").replace(KS,"%26").replace(nM,"`").replace(Ig,"{").replace(Dg,"}").replace(Lg,"^")}function oM(t){return Kc(t).replace(JS,"%3D")}function aM(t){return Zu(t).replace(Rg,"%23").replace(QS,"%3F")}function lM(t){return t==null?"":aM(t).replace(ZS,"%2F")}function oo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const cM=/\/$/,uM=t=>t.replace(cM,"");function zl(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=pM(i??e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:oo(o)}}function fM(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function zd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function dM(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&cs(e.matched[i],n.matched[r])&&Ng(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function cs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ng(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!hM(t[n],e[n]))return!1;return!0}function hM(t,e){return Nn(t)?Hd(t,e):Nn(e)?Hd(e,t):t===e}function Hd(t,e){return Nn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function pM(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o).join("/")}var ao;(function(t){t.pop="pop",t.push="push"})(ao||(ao={}));var Ys;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ys||(Ys={}));function mM(t){if(!t)if(qr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),uM(t)}const gM=/^[^#]+#/;function vM(t,e){return t.replace(gM,"#")+e}function _M(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const ol=()=>({left:window.scrollX,top:window.scrollY});function yM(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=_M(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Gd(t,e){return(history.state?history.state.position-e:-1)+t}const Zc=new Map;function xM(t,e){Zc.set(t,e)}function SM(t){const e=Zc.get(t);return Zc.delete(t),e}let MM=()=>location.protocol+"//"+location.host;function Ug(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),zd(l,"")}return zd(n,t)+i+r}function bM(t,e,n,i){let r=[],s=[],o=null;const a=({state:d})=>{const h=Ug(t,location),v=n.value,g=e.value;let m=0;if(d){if(n.value=h,e.value=d,o&&o===v){o=null;return}m=g?d.position-g.position:0}else i(h);r.forEach(p=>{p(n.value,v,{delta:m,type:ao.pop,direction:m?m>0?Ys.forward:Ys.back:Ys.unknown})})};function l(){o=n.value}function c(d){r.push(d);const h=()=>{const v=r.indexOf(d);v>-1&&r.splice(v,1)};return s.push(h),h}function u(){const{history:d}=window;d.state&&d.replaceState(st({},d.state,{scroll:ol()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Wd(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?ol():null}}function EM(t){const{history:e,location:n}=window,i={value:Ug(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:MM()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(h){console.error(h),n[u?"replace":"assign"](d)}}function o(l,c){const u=st({},e.state,Wd(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=st({},r.value,e.state,{forward:l,scroll:ol()});s(u.current,u,!0);const f=st({},Wd(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function TM(t){t=mM(t);const e=EM(t),n=bM(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=st({location:"",base:t,go:i,createHref:vM.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function AM(t){return typeof t=="string"||t&&typeof t=="object"}function Og(t){return typeof t=="string"||typeof t=="symbol"}const yi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Fg=Symbol("");var Xd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Xd||(Xd={}));function us(t,e){return st(new Error,{type:t,[Fg]:!0},e)}function Zn(t,e){return t instanceof Error&&Fg in t&&(e==null||!!(t.type&e))}const $d="[^/]+?",wM={sensitive:!1,strict:!1,start:!0,end:!0},CM=/[.+*?^${}()[\]/\\]/g;function RM(t,e){const n=st({},wM,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let h=40+(n.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(CM,"\\$&"),h+=40;else if(d.type===1){const{value:v,repeatable:g,optional:m,regexp:p}=d;s.push({name:v,repeatable:g,optional:m});const M=p||$d;if(M!==$d){h+=10;try{new RegExp(`(${M})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${v}" (${M}): `+T.message)}}let x=g?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(x=m&&c.length<2?`(?:/${x})`:"/"+x),m&&(x+="?"),r+=x,h+=20,m&&(h+=-8),g&&(h+=-20),M===".*"&&(h+=-50)}u.push(h)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const h=u[d]||"",v=s[d-1];f[v.name]=h&&v.repeatable?h.split("/"):h}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const h of d)if(h.type===0)u+=h.value;else if(h.type===1){const{value:v,repeatable:g,optional:m}=h,p=v in c?c[v]:"";if(Nn(p)&&!g)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const M=Nn(p)?p.join("/"):p;if(!M)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);u+=M}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function PM(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function LM(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=PM(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(qd(i))return 1;if(qd(r))return-1}return r.length-i.length}function qd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const IM={type:0,value:""},DM=/[a-zA-Z0-9_]/;function NM(t){if(!t)return[[]];if(t==="/")return[[IM]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):d();break;case 4:d(),n=i;break;case 1:l==="("?n=2:DM.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function UM(t,e,n){const i=RM(NM(t.path),n),r=st(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function OM(t,e){const n=[],i=new Map;e=Kd({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,f,d){const h=!d,v=FM(u);v.aliasOf=d&&d.record;const g=Kd(e,u),m=[v];if("alias"in u){const x=typeof u.alias=="string"?[u.alias]:u.alias;for(const T of x)m.push(st({},v,{components:d?d.record.components:v.components,path:T,aliasOf:d?d.record:v}))}let p,M;for(const x of m){const{path:T}=x;if(f&&T[0]!=="/"){const L=f.record.path,E=L[L.length-1]==="/"?"":"/";x.path=f.record.path+(T&&E+T)}if(p=UM(x,f,g),d?d.alias.push(p):(M=M||p,M!==p&&M.alias.push(p),h&&u.name&&!jd(p)&&o(u.name)),v.children){const L=v.children;for(let E=0;E<L.length;E++)s(L[E],p,d&&d.children[E])}d=d||p,(p.record.components&&Object.keys(p.record.components).length||p.record.name||p.record.redirect)&&l(p)}return M?()=>{o(M)}:qs}function o(u){if(Og(u)){const f=i.get(u);f&&(i.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let f=0;for(;f<n.length&&LM(u,n[f])>=0&&(u.record.path!==n[f].record.path||!Bg(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!jd(u)&&i.set(u.record.name,u)}function c(u,f){let d,h={},v,g;if("name"in u&&u.name){if(d=i.get(u.name),!d)throw us(1,{location:u});g=d.record.name,h=st(Yd(f.params,d.keys.filter(M=>!M.optional).concat(d.parent?d.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),u.params&&Yd(u.params,d.keys.map(M=>M.name))),v=d.stringify(h)}else if(u.path!=null)v=u.path,d=n.find(M=>M.re.test(v)),d&&(h=d.parse(v),g=d.record.name);else{if(d=f.name?i.get(f.name):n.find(M=>M.re.test(f.path)),!d)throw us(1,{location:u,currentLocation:f});g=d.record.name,h=st({},f.params,u.params),v=d.stringify(h)}const m=[];let p=d;for(;p;)m.unshift(p.record),p=p.parent;return{name:g,path:v,params:h,matched:m,meta:kM(m)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Yd(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function FM(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:BM(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function BM(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function jd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function kM(t){return t.reduce((e,n)=>st(e,n.meta),{})}function Kd(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function Bg(t,e){return e.children.some(n=>n===t||Bg(t,n))}function VM(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Pg," "),o=s.indexOf("="),a=oo(o<0?s:s.slice(0,o)),l=o<0?null:oo(s.slice(o+1));if(a in e){let c=e[a];Nn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Zd(t){let e="";for(let n in t){const i=t[n];if(n=oM(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Nn(i)?i.map(s=>s&&Kc(s)):[i&&Kc(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function zM(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Nn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const HM=Symbol(""),Jd=Symbol(""),al=Symbol(""),kg=Symbol(""),Jc=Symbol("");function Ps(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Li(t,e,n,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(us(4,{from:n,to:e})):d instanceof Error?l(d):AM(d)?l(us(2,{from:e,to:d})):(o&&i.enterCallbacks[r]===o&&typeof d=="function"&&o.push(d),a())},u=s(()=>t.call(i&&i.instances[r],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function Hl(t,e,n,i,r=s=>s()){const s=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(GM(l)){const u=(l.__vccOpts||l)[e];u&&s.push(Li(u,n,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const f=jS(u)?u.default:u;o.components[a]=f;const h=(f.__vccOpts||f)[e];return h&&Li(h,n,i,o,a,r)()}))}}return s}function GM(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Qd(t){const e=_t(al),n=_t(kg),i=ne(()=>{const l=$t(t.to);return e.resolve(l)}),r=ne(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(cs.bind(null,u));if(d>-1)return d;const h=eh(l[c-2]);return c>1&&eh(u)===h&&f[f.length-1].path!==h?f.findIndex(cs.bind(null,l[c-2])):d}),s=ne(()=>r.value>-1&&qM(n.params,i.value.params)),o=ne(()=>r.value>-1&&r.value===n.matched.length-1&&Ng(n.params,i.value.params));function a(l={}){return $M(l)?e[$t(t.replace)?"replace":"push"]($t(t.to)).catch(qs):Promise.resolve()}return{route:i,href:ne(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const WM=ys({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Qd,setup(t,{slots:e}){const n=Bt(Qd(t)),{options:i}=_t(al),r=ne(()=>({[th(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[th(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:jn("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),XM=WM;function $M(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function qM(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Nn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function eh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const th=(t,e,n)=>t??e??n,YM=ys({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=_t(Jc),r=ne(()=>t.route||i.value),s=_t(Jd,0),o=ne(()=>{let c=$t(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=ne(()=>r.value.matched[o.value]);Mn(Jd,ne(()=>o.value+1)),Mn(HM,a),Mn(Jc,r);const l=nt();return Ye(()=>[l.value,a.value,t.name],([c,u,f],[d,h,v])=>{u&&(u.instances[f]=c,h&&h!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!cs(u,h)||!d)&&(u.enterCallbacks[f]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return nh(n.default,{Component:d,route:c});const h=f.props[u],v=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=jn(d,st({},v,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return nh(n.default,{Component:m,route:c})||m}}});function nh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const jM=YM;function KM(t){const e=OM(t.routes,t),n=t.parseQuery||VM,i=t.stringifyQuery||Zd,r=t.history,s=Ps(),o=Ps(),a=Ps(),l=Je(yi);let c=yi;qr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Vl.bind(null,B=>""+B),f=Vl.bind(null,lM),d=Vl.bind(null,oo);function h(B,he){let ae,U;return Og(B)?(ae=e.getRecordMatcher(B),U=he):U=B,e.addRoute(U,ae)}function v(B){const he=e.getRecordMatcher(B);he&&e.removeRoute(he)}function g(){return e.getRoutes().map(B=>B.record)}function m(B){return!!e.getRecordMatcher(B)}function p(B,he){if(he=st({},he||l.value),typeof B=="string"){const P=zl(n,B,he.path),H=e.resolve({path:P.path},he),Y=r.createHref(P.fullPath);return st(P,H,{params:d(H.params),hash:oo(P.hash),redirectedFrom:void 0,href:Y})}let ae;if(B.path!=null)ae=st({},B,{path:zl(n,B.path,he.path).path});else{const P=st({},B.params);for(const H in P)P[H]==null&&delete P[H];ae=st({},B,{params:f(P)}),he.params=f(he.params)}const U=e.resolve(ae,he),Re=B.hash||"";U.params=u(d(U.params));const ye=fM(i,st({},B,{hash:sM(Re),path:U.path})),C=r.createHref(ye);return st({fullPath:ye,hash:Re,query:i===Zd?zM(B.query):B.query||{}},U,{redirectedFrom:void 0,href:C})}function M(B){return typeof B=="string"?zl(n,B,l.value.path):st({},B)}function x(B,he){if(c!==B)return us(8,{from:he,to:B})}function T(B){return b(B)}function L(B){return T(st(M(B),{replace:!0}))}function E(B){const he=B.matched[B.matched.length-1];if(he&&he.redirect){const{redirect:ae}=he;let U=typeof ae=="function"?ae(B):ae;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=M(U):{path:U},U.params={}),st({query:B.query,hash:B.hash,params:U.path!=null?{}:B.params},U)}}function b(B,he){const ae=c=p(B),U=l.value,Re=B.state,ye=B.force,C=B.replace===!0,P=E(ae);if(P)return b(st(M(P),{state:typeof P=="object"?st({},Re,P.state):Re,force:ye,replace:C}),he||ae);const H=ae;H.redirectedFrom=he;let Y;return!ye&&dM(i,U,ae)&&(Y=us(16,{to:H,from:U}),ve(U,U,!0,!1)),(Y?Promise.resolve(Y):_(H,U)).catch($=>Zn($)?Zn($,2)?$:me($):G($,H,U)).then($=>{if($){if(Zn($,2))return b(st({replace:C},M($.to),{state:typeof $.to=="object"?st({},Re,$.to.state):Re,force:ye}),he||H)}else $=I(H,U,!0,C,Re);return N(H,U,$),$})}function D(B,he){const ae=x(B,he);return ae?Promise.reject(ae):Promise.resolve()}function S(B){const he=te.values().next().value;return he&&typeof he.runWithContext=="function"?he.runWithContext(B):B()}function _(B,he){let ae;const[U,Re,ye]=ZM(B,he);ae=Hl(U.reverse(),"beforeRouteLeave",B,he);for(const P of U)P.leaveGuards.forEach(H=>{ae.push(Li(H,B,he))});const C=D.bind(null,B,he);return ae.push(C),ge(ae).then(()=>{ae=[];for(const P of s.list())ae.push(Li(P,B,he));return ae.push(C),ge(ae)}).then(()=>{ae=Hl(Re,"beforeRouteUpdate",B,he);for(const P of Re)P.updateGuards.forEach(H=>{ae.push(Li(H,B,he))});return ae.push(C),ge(ae)}).then(()=>{ae=[];for(const P of ye)if(P.beforeEnter)if(Nn(P.beforeEnter))for(const H of P.beforeEnter)ae.push(Li(H,B,he));else ae.push(Li(P.beforeEnter,B,he));return ae.push(C),ge(ae)}).then(()=>(B.matched.forEach(P=>P.enterCallbacks={}),ae=Hl(ye,"beforeRouteEnter",B,he,S),ae.push(C),ge(ae))).then(()=>{ae=[];for(const P of o.list())ae.push(Li(P,B,he));return ae.push(C),ge(ae)}).catch(P=>Zn(P,8)?P:Promise.reject(P))}function N(B,he,ae){a.list().forEach(U=>S(()=>U(B,he,ae)))}function I(B,he,ae,U,Re){const ye=x(B,he);if(ye)return ye;const C=he===yi,P=qr?history.state:{};ae&&(U||C?r.replace(B.fullPath,st({scroll:C&&P&&P.scroll},Re)):r.push(B.fullPath,Re)),l.value=B,ve(B,he,ae,C),me()}let R;function k(){R||(R=r.listen((B,he,ae)=>{if(!oe.listening)return;const U=p(B),Re=E(U);if(Re){b(st(Re,{replace:!0}),U).catch(qs);return}c=U;const ye=l.value;qr&&xM(Gd(ye.fullPath,ae.delta),ol()),_(U,ye).catch(C=>Zn(C,12)?C:Zn(C,2)?(b(C.to,U).then(P=>{Zn(P,20)&&!ae.delta&&ae.type===ao.pop&&r.go(-1,!1)}).catch(qs),Promise.reject()):(ae.delta&&r.go(-ae.delta,!1),G(C,U,ye))).then(C=>{C=C||I(U,ye,!1),C&&(ae.delta&&!Zn(C,8)?r.go(-ae.delta,!1):ae.type===ao.pop&&Zn(C,20)&&r.go(-1,!1)),N(U,ye,C)}).catch(qs)}))}let q=Ps(),ee=Ps(),ie;function G(B,he,ae){me(B);const U=ee.list();return U.length?U.forEach(Re=>Re(B,he,ae)):console.error(B),Promise.reject(B)}function fe(){return ie&&l.value!==yi?Promise.resolve():new Promise((B,he)=>{q.add([B,he])})}function me(B){return ie||(ie=!B,k(),q.list().forEach(([he,ae])=>B?ae(B):he()),q.reset()),B}function ve(B,he,ae,U){const{scrollBehavior:Re}=t;if(!qr||!Re)return Promise.resolve();const ye=!ae&&SM(Gd(B.fullPath,0))||(U||!ae)&&history.state&&history.state.scroll||null;return cn().then(()=>Re(B,he,ye)).then(C=>C&&yM(C)).catch(C=>G(C,B,he))}const Ae=B=>r.go(B);let $e;const te=new Set,oe={currentRoute:l,listening:!0,addRoute:h,removeRoute:v,hasRoute:m,getRoutes:g,resolve:p,options:t,push:T,replace:L,go:Ae,back:()=>Ae(-1),forward:()=>Ae(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:ee.add,isReady:fe,install(B){const he=this;B.component("RouterLink",XM),B.component("RouterView",jM),B.config.globalProperties.$router=he,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>$t(l)}),qr&&!$e&&l.value===yi&&($e=!0,T(r.location).catch(Re=>{}));const ae={};for(const Re in yi)Object.defineProperty(ae,Re,{get:()=>l.value[Re],enumerable:!0});B.provide(al,he),B.provide(kg,sm(ae)),B.provide(Jc,l);const U=B.unmount;te.add(B),B.unmount=function(){te.delete(B),te.size<1&&(c=yi,R&&R(),R=null,l.value=yi,$e=!1,ie=!1),U()}}};function ge(B){return B.reduce((he,ae)=>he.then(()=>S(ae)),Promise.resolve())}return oe}function ZM(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>cs(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>cs(c,l))||r.push(l))}return[n,i,r]}function Ju(){return _t(al)}const JM=()=>["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document,QM=(t,e)=>{var n;if(!((n=navigator==null?void 0:navigator.xr)!=null&&n.isSessionSupported)){e==null||e();return}navigator.xr.isSessionSupported("immersive-ar").then(i=>{i?t():e==null||e(i)}).catch(i=>{console.warn(i),e==null||e(i)})},xo=Le({border:[Boolean,Number,String]},"border");function So(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Yi();return{borderClasses:ne(()=>{const i=xt(t)?t.value:t.border,r=[];if(i===!0||i==="")r.push(`${e}--border`);else if(typeof i=="string"||i===0)for(const s of String(i).split(" "))r.push(`border-${s}`);return r})}}const eb=[null,"default","comfortable","compact"],Mo=Le({density:{type:String,default:"default",validator:t=>eb.includes(t)}},"density");function ll(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Yi();return{densityClasses:ne(()=>`${e}--density-${t.density}`)}}const bo=Le({elevation:{type:[Number,String],validator(t){const e=parseInt(t);return!isNaN(e)&&e>=0&&e<=24}}},"elevation");function Eo(t){return{elevationClasses:ne(()=>{const n=xt(t)?t.value:t.elevation,i=[];return n==null||i.push(`elevation-${n}`),i})}}const hi=Le({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function pi(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Yi();return{roundedClasses:ne(()=>{const i=xt(t)?t.value:t.rounded,r=xt(t)?t.value:t.tile,s=[];if(i===!0||i==="")s.push(`${e}--rounded`);else if(typeof i=="string"||i===0)for(const o of String(i).split(" "))s.push(`rounded-${o}`);else(r||i===!1)&&s.push("rounded-0");return s})}}const Ht=Le({tag:{type:String,default:"div"}},"tag");function Qu(t){return qu(()=>{const e=[],n={};if(t.value.background)if(Xc(t.value.background)){if(n.backgroundColor=t.value.background,!t.value.text&&Sx(t.value.background)){const i=Gn(t.value.background);if(i.a==null||i.a===1){const r=fg(i);n.color=r,n.caretColor=r}}}else e.push(`bg-${t.value.background}`);return t.value.text&&(Xc(t.value.text)?(n.color=t.value.text,n.caretColor=t.value.text):e.push(`text-${t.value.text}`)),{colorClasses:e,colorStyles:n}})}function lo(t,e){const n=ne(()=>({text:xt(t)?t.value:e?t[e]:null})),{colorClasses:i,colorStyles:r}=Qu(n);return{textColorClasses:i,textColorStyles:r}}function xr(t,e){const n=ne(()=>({background:xt(t)?t.value:e?t[e]:null})),{colorClasses:i,colorStyles:r}=Qu(n);return{backgroundColorClasses:i,backgroundColorStyles:r}}const tb=["elevated","flat","tonal","outlined","text","plain"];function cl(t,e){return z(mt,null,[t&&z("span",{key:"overlay",class:`${e}__overlay`},null),z("span",{key:"underlay",class:`${e}__underlay`},null)])}const To=Le({color:String,variant:{type:String,default:"elevated",validator:t=>tb.includes(t)}},"variant");function ul(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Yi();const n=ne(()=>{const{variant:s}=$t(t);return`${e}--variant-${s}`}),{colorClasses:i,colorStyles:r}=Qu(ne(()=>{const{variant:s,color:o}=$t(t);return{[["elevated","flat"].includes(s)?"background":"text"]:o}}));return{colorClasses:i,colorStyles:r,variantClasses:n}}const Vg=Le({baseColor:String,divided:Boolean,...xo(),...ht(),...Mo(),...bo(),...hi(),...Ht(),...un(),...To()},"VBtnGroup"),ih=et()({name:"VBtnGroup",props:Vg(),setup(t,e){let{slots:n}=e;const{themeClasses:i}=fn(t),{densityClasses:r}=ll(t),{borderClasses:s}=So(t),{elevationClasses:o}=Eo(t),{roundedClasses:a}=pi(t);nl({VBtn:{height:"auto",baseColor:Rt(t,"baseColor"),color:Rt(t,"color"),density:Rt(t,"density"),flat:!0,variant:Rt(t,"variant")}}),lt(()=>z(t.tag,{class:["v-btn-group",{"v-btn-group--divided":t.divided},i.value,s.value,r.value,o.value,a.value,t.class],style:t.style},n))}}),nb=Le({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),ib=Le({value:null,disabled:Boolean,selectedClass:String},"group-item");function rb(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const i=It("useGroupItem");if(!i)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const r=il();Mn(Symbol.for(`${e.description}:id`),r);const s=_t(e,null);if(!s){if(!n)return s;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${e.description}`)}const o=Rt(t,"value"),a=ne(()=>!!(s.disabled.value||t.disabled));s.register({id:r,value:o,disabled:a},i),Yn(()=>{s.unregister(r)});const l=ne(()=>s.isSelected(r)),c=ne(()=>s.items.value[0].id===r),u=ne(()=>s.items.value[s.items.value.length-1].id===r),f=ne(()=>l.value&&[s.selectedClass.value,t.selectedClass]);return Ye(l,d=>{i.emit("group:selected",{value:d})},{flush:"sync"}),{id:r,isSelected:l,isFirst:c,isLast:u,toggle:()=>s.select(r,!l.value),select:d=>s.select(r,d),selectedClass:f,value:o,disabled:a,group:s}}function sb(t,e){let n=!1;const i=Bt([]),r=Ss(t,"modelValue",[],d=>d==null?[]:zg(i,Jy(d)),d=>{const h=ab(i,d);return t.multiple?h:h[0]}),s=It("useGroup");function o(d,h){const v=d,g=Symbol.for(`${e.description}:id`),p=$s(g,s==null?void 0:s.vnode).indexOf(h);$t(v.value)==null&&(v.value=p,v.useIndexAsValue=!0),p>-1?i.splice(p,0,v):i.push(v)}function a(d){if(n)return;l();const h=i.findIndex(v=>v.id===d);i.splice(h,1)}function l(){const d=i.find(h=>!h.disabled);d&&t.mandatory==="force"&&!r.value.length&&(r.value=[d.id])}di(()=>{l()}),Yn(()=>{n=!0}),Fu(()=>{for(let d=0;d<i.length;d++)i[d].useIndexAsValue&&(i[d].value=d)});function c(d,h){const v=i.find(g=>g.id===d);if(!(h&&(v!=null&&v.disabled)))if(t.multiple){const g=r.value.slice(),m=g.findIndex(M=>M===d),p=~m;if(h=h??!p,p&&t.mandatory&&g.length<=1||!p&&t.max!=null&&g.length+1>t.max)return;m<0&&h?g.push(d):m>=0&&!h&&g.splice(m,1),r.value=g}else{const g=r.value.includes(d);if(t.mandatory&&g)return;r.value=h??!g?[d]:[]}}function u(d){if(t.multiple,r.value.length){const h=r.value[0],v=i.findIndex(p=>p.id===h);let g=(v+d)%i.length,m=i[g];for(;m.disabled&&g!==v;)g=(g+d)%i.length,m=i[g];if(m.disabled)return;r.value=[i[g].id]}else{const h=i.find(v=>!v.disabled);h&&(r.value=[h.id])}}const f={register:o,unregister:a,selected:r,select:c,disabled:Rt(t,"disabled"),prev:()=>u(i.length-1),next:()=>u(1),isSelected:d=>r.value.includes(d),selectedClass:ne(()=>t.selectedClass),items:ne(()=>i),getItemIndex:d=>ob(i,d)};return Mn(e,f),f}function ob(t,e){const n=zg(t,[e]);return n.length?t.findIndex(i=>i.id===n[0]):-1}function zg(t,e){const n=[];return e.forEach(i=>{const r=t.find(o=>$u(i,o.value)),s=t[i];(r==null?void 0:r.value)!=null?n.push(r.id):s!=null&&n.push(s.id)}),n}function ab(t,e){const n=[];return e.forEach(i=>{const r=t.findIndex(s=>s.id===i);if(~r){const s=t[r];n.push(s.value!=null?s.value:r)}}),n}const Hg=Symbol.for("vuetify:v-btn-toggle"),lb=Le({...Vg(),...nb()},"VBtnToggle");et()({name:"VBtnToggle",props:lb(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const{isSelected:i,next:r,prev:s,select:o,selected:a}=sb(t,Hg);return lt(()=>{const l=ih.filterProps(t);return z(ih,Vt({class:["v-btn-toggle",t.class]},l,{style:t.style}),{default:()=>{var c;return[(c=n.default)==null?void 0:c.call(n,{isSelected:i,next:r,prev:s,select:o,selected:a})]}})}),{next:r,prev:s,select:o}}});const cb=Le({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),Dn=et(!1)({name:"VDefaultsProvider",props:cb(),setup(t,e){let{slots:n}=e;const{defaults:i,disabled:r,reset:s,root:o,scoped:a}=wu(t);return nl(i,{reset:s,root:o,scoped:a,disabled:r}),()=>{var l;return(l=n.default)==null?void 0:l.call(n)}}}),ub=["x-small","small","default","large","x-large"],fl=Le({size:{type:[String,Number],default:"default"}},"size");function dl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Yi();return qu(()=>{let n,i;return Da(ub,t.size)?n=`${e}--size-${t.size}`:t.size&&(i={width:Ve(t.size),height:Ve(t.size)}),{sizeClasses:n,sizeStyles:i}})}const fb=Le({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:ci,...ht(),...fl(),...Ht({tag:"i"}),...un()},"VIcon"),Qr=et()({name:"VIcon",props:fb(),setup(t,e){let{attrs:n,slots:i}=e;const r=nt(),{themeClasses:s}=fn(t),{iconData:o}=VS(ne(()=>r.value||t.icon)),{sizeClasses:a}=dl(t),{textColorClasses:l,textColorStyles:c}=lo(Rt(t,"color"));return lt(()=>{var d,h;const u=(d=i.default)==null?void 0:d.call(i);u&&(r.value=(h=rg(u).filter(v=>v.type===vo&&v.children&&typeof v.children=="string")[0])==null?void 0:h.children);const f=!!(n.onClick||n.onClickOnce);return z(o.value.component,{tag:t.tag,icon:o.value.icon,class:["v-icon","notranslate",s.value,a.value,l.value,{"v-icon--clickable":f,"v-icon--disabled":t.disabled,"v-icon--start":t.start,"v-icon--end":t.end},t.class],style:[a.value?void 0:{fontSize:Ve(t.size),height:Ve(t.size),width:Ve(t.size)},c.value,t.style],role:f?"button":void 0,"aria-hidden":!f,tabindex:f?t.disabled?-1:0:void 0},{default:()=>[u]})}),{}}});function Gg(t,e){const n=nt(),i=Je(!1);if(Xu){const r=new IntersectionObserver(s=>{i.value=!!s.find(o=>o.isIntersecting)},e);Yn(()=>{r.disconnect()}),Ye(n,(s,o)=>{o&&(r.unobserve(o),i.value=!1),s&&r.observe(s)},{flush:"post"})}return{intersectionRef:n,isIntersecting:i}}const db=Le({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...ht(),...fl(),...Ht({tag:"div"}),...un()},"VProgressCircular"),hb=et()({name:"VProgressCircular",props:db(),setup(t,e){let{slots:n}=e;const i=20,r=2*Math.PI*i,s=nt(),{themeClasses:o}=fn(t),{sizeClasses:a,sizeStyles:l}=dl(t),{textColorClasses:c,textColorStyles:u}=lo(Rt(t,"color")),{textColorClasses:f,textColorStyles:d}=lo(Rt(t,"bgColor")),{intersectionRef:h,isIntersecting:v}=Gg(),{resizeRef:g,contentRect:m}=bg(),p=ne(()=>Math.max(0,Math.min(100,parseFloat(t.modelValue)))),M=ne(()=>Number(t.width)),x=ne(()=>l.value?Number(t.size):m.value?m.value.width:Math.max(M.value,32)),T=ne(()=>i/(1-M.value/x.value)*2),L=ne(()=>M.value/x.value*T.value),E=ne(()=>Ve((100-p.value)/100*r));return Un(()=>{h.value=s.value,g.value=s.value}),lt(()=>z(t.tag,{ref:s,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!t.indeterminate,"v-progress-circular--visible":v.value,"v-progress-circular--disable-shrink":t.indeterminate==="disable-shrink"},o.value,a.value,c.value,t.class],style:[l.value,u.value,t.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":t.indeterminate?void 0:p.value},{default:()=>[z("svg",{style:{transform:`rotate(calc(-90deg + ${Number(t.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${T.value} ${T.value}`},[z("circle",{class:["v-progress-circular__underlay",f.value],style:d.value,fill:"transparent",cx:"50%",cy:"50%",r:i,"stroke-width":L.value,"stroke-dasharray":r,"stroke-dashoffset":0},null),z("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:i,"stroke-width":L.value,"stroke-dasharray":r,"stroke-dashoffset":E.value},null)]),n.default&&z("div",{class:"v-progress-circular__content"},[n.default({value:p.value})])]})),{}}}),Tr=Le({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Ar(t){return{dimensionStyles:ne(()=>({height:Ve(t.height),maxHeight:Ve(t.maxHeight),maxWidth:Ve(t.maxWidth),minHeight:Ve(t.minHeight),minWidth:Ve(t.minWidth),width:Ve(t.width)}))}}const rh={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Ao=Le({location:String},"location");function hl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:i}=Ms();return{locationStyles:ne(()=>{if(!t.location)return{};const{side:s,align:o}=Wc(t.location.split(" ").length>1?t.location:`${t.location} center`,i.value);function a(c){return n?n(c):0}const l={};return s!=="center"&&(e?l[rh[s]]=`calc(100% - ${a(s)}px)`:l[s]=0),o!=="center"?e?l[rh[o]]=`calc(100% - ${a(o)}px)`:l[o]=0:(s==="center"?l.top=l.left="50%":l[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",l.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),l})}}const pb=Le({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...ht(),...Ao({location:"top"}),...hi(),...Ht(),...un()},"VProgressLinear"),Wg=et()({name:"VProgressLinear",props:pb(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const i=Ss(t,"modelValue"),{isRtl:r,rtlClasses:s}=Ms(),{themeClasses:o}=fn(t),{locationStyles:a}=hl(t),{textColorClasses:l,textColorStyles:c}=lo(t,"color"),{backgroundColorClasses:u,backgroundColorStyles:f}=xr(ne(()=>t.bgColor||t.color)),{backgroundColorClasses:d,backgroundColorStyles:h}=xr(ne(()=>t.bufferColor||t.bgColor||t.color)),{backgroundColorClasses:v,backgroundColorStyles:g}=xr(t,"color"),{roundedClasses:m}=pi(t),{intersectionRef:p,isIntersecting:M}=Gg(),x=ne(()=>parseFloat(t.max)),T=ne(()=>parseFloat(t.height)),L=ne(()=>as(parseFloat(t.bufferValue)/x.value*100,0,100)),E=ne(()=>as(parseFloat(i.value)/x.value*100,0,100)),b=ne(()=>r.value!==t.reverse),D=ne(()=>t.indeterminate?"fade-transition":"slide-x-transition");function S(_){if(!p.value)return;const{left:N,right:I,width:R}=p.value.getBoundingClientRect(),k=b.value?R-_.clientX+(I-R):_.clientX-N;i.value=Math.round(k/R*x.value)}return lt(()=>z(t.tag,{ref:p,class:["v-progress-linear",{"v-progress-linear--absolute":t.absolute,"v-progress-linear--active":t.active&&M.value,"v-progress-linear--reverse":b.value,"v-progress-linear--rounded":t.rounded,"v-progress-linear--rounded-bar":t.roundedBar,"v-progress-linear--striped":t.striped},m.value,o.value,s.value,t.class],style:[{bottom:t.location==="bottom"?0:void 0,top:t.location==="top"?0:void 0,height:t.active?Ve(T.value):0,"--v-progress-linear-height":Ve(T.value),...t.absolute?a.value:{}},t.style],role:"progressbar","aria-hidden":t.active?"false":"true","aria-valuemin":"0","aria-valuemax":t.max,"aria-valuenow":t.indeterminate?void 0:E.value,onClick:t.clickable&&S},{default:()=>[t.stream&&z("div",{key:"stream",class:["v-progress-linear__stream",l.value],style:{...c.value,[b.value?"left":"right"]:Ve(-T.value),borderTop:`${Ve(T.value/2)} dotted`,opacity:parseFloat(t.bufferOpacity),top:`calc(50% - ${Ve(T.value/4)})`,width:Ve(100-L.value,"%"),"--v-progress-linear-stream-to":Ve(T.value*(b.value?1:-1))}},null),z("div",{class:["v-progress-linear__background",u.value],style:[f.value,{opacity:parseFloat(t.bgOpacity),width:t.stream?0:void 0}]},null),z("div",{class:["v-progress-linear__buffer",d.value],style:[h.value,{opacity:parseFloat(t.bufferOpacity),width:Ve(L.value,"%")}]},null),z(Er,{name:D.value},{default:()=>[t.indeterminate?z("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(_=>z("div",{key:_,class:["v-progress-linear__indeterminate",_,v.value],style:g.value},null))]):z("div",{class:["v-progress-linear__determinate",v.value],style:[g.value,{width:Ve(E.value,"%")}]},null)]}),n.default&&z("div",{class:"v-progress-linear__content"},[n.default({value:E.value,buffer:L.value})])]})),{}}}),Xg=Le({loading:[Boolean,String]},"loader");function $g(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Yi();return{loaderClasses:ne(()=>({[`${e}--loading`]:t.loading}))}}function mb(t,e){var i;let{slots:n}=e;return z("div",{class:`${t.name}__loader`},[((i=n.default)==null?void 0:i.call(n,{color:t.color,isActive:t.active}))||z(Wg,{absolute:t.absolute,active:t.active,color:t.color,height:"2",indeterminate:!0},null)])}const gb=["static","relative","fixed","absolute","sticky"],pl=Le({position:{type:String,validator:t=>gb.includes(t)}},"position");function ml(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Yi();return{positionClasses:ne(()=>t.position?`${e}--${t.position}`:void 0)}}function vb(){const t=It("useRoute");return ne(()=>{var e;return(e=t==null?void 0:t.proxy)==null?void 0:e.$route})}function _b(){var t,e;return(e=(t=It("useRouter"))==null?void 0:t.proxy)==null?void 0:e.$router}function qg(t,e){var c,u;const n=p0("RouterLink"),i=ne(()=>!!(t.href||t.to)),r=ne(()=>(i==null?void 0:i.value)||dd(e,"click")||dd(t,"click"));if(typeof n=="string"||!("useLink"in n))return{isLink:i,isClickable:r,href:Rt(t,"href")};const s=ne(()=>({...t,to:Rt(()=>t.to||"")})),o=n.useLink(s.value),a=ne(()=>t.to?o:void 0),l=vb();return{isLink:i,isClickable:r,route:(c=a.value)==null?void 0:c.route,navigate:(u=a.value)==null?void 0:u.navigate,isActive:ne(()=>{var f,d,h;return a.value?t.exact?l.value?((h=a.value.isExactActive)==null?void 0:h.value)&&$u(a.value.route.value.query,l.value.query):((d=a.value.isExactActive)==null?void 0:d.value)??!1:((f=a.value.isActive)==null?void 0:f.value)??!1:!1}),href:ne(()=>{var f;return t.to?(f=a.value)==null?void 0:f.route.value.href:t.href})}}const Yg=Le({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let Gl=!1;function yb(t,e){let n=!1,i,r;vt&&(cn(()=>{window.addEventListener("popstate",s),i=t==null?void 0:t.beforeEach((o,a,l)=>{Gl?n?e(l):l():setTimeout(()=>n?e(l):l()),Gl=!0}),r=t==null?void 0:t.afterEach(()=>{Gl=!1})}),En(()=>{window.removeEventListener("popstate",s),i==null||i(),r==null||r()}));function s(o){var a;(a=o.state)!=null&&a.replaced||(n=!0,setTimeout(()=>n=!1))}}function xb(t,e){Ye(()=>{var n;return(n=t.isActive)==null?void 0:n.value},n=>{t.isLink.value&&n&&e&&cn(()=>{e(!0)})},{immediate:!0})}const Qc=Symbol("rippleStop"),Sb=80;function sh(t,e){t.style.transform=e,t.style.webkitTransform=e}function eu(t){return t.constructor.name==="TouchEvent"}function jg(t){return t.constructor.name==="KeyboardEvent"}const Mb=function(t,e){var f;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=0,r=0;if(!jg(t)){const d=e.getBoundingClientRect(),h=eu(t)?t.touches[t.touches.length-1]:t;i=h.clientX-d.left,r=h.clientY-d.top}let s=0,o=.3;(f=e._ripple)!=null&&f.circle?(o=.15,s=e.clientWidth/2,s=n.center?s:s+Math.sqrt((i-s)**2+(r-s)**2)/4):s=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const a=`${(e.clientWidth-s*2)/2}px`,l=`${(e.clientHeight-s*2)/2}px`,c=n.center?a:`${i-s}px`,u=n.center?l:`${r-s}px`;return{radius:s,scale:o,x:c,y:u,centerX:a,centerY:l}},Ba={show(t,e){var h;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((h=e==null?void 0:e._ripple)!=null&&h.enabled))return;const i=document.createElement("span"),r=document.createElement("span");i.appendChild(r),i.className="v-ripple__container",n.class&&(i.className+=` ${n.class}`);const{radius:s,scale:o,x:a,y:l,centerX:c,centerY:u}=Mb(t,e,n),f=`${s*2}px`;r.className="v-ripple__animation",r.style.width=f,r.style.height=f,e.appendChild(i);const d=window.getComputedStyle(e);d&&d.position==="static"&&(e.style.position="relative",e.dataset.previousPosition="static"),r.classList.add("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--visible"),sh(r,`translate(${a}, ${l}) scale3d(${o},${o},${o})`),r.dataset.activated=String(performance.now()),setTimeout(()=>{r.classList.remove("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--in"),sh(r,`translate(${c}, ${u}) scale3d(1,1,1)`)},0)},hide(t){var s;if(!((s=t==null?void 0:t._ripple)!=null&&s.enabled))return;const e=t.getElementsByClassName("v-ripple__animation");if(e.length===0)return;const n=e[e.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const i=performance.now()-Number(n.dataset.activated),r=Math.max(250-i,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var a;t.getElementsByClassName("v-ripple__animation").length===1&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),((a=n.parentNode)==null?void 0:a.parentNode)===t&&t.removeChild(n.parentNode)},300)},r)}};function Kg(t){return typeof t>"u"||!!t}function co(t){const e={},n=t.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||t[Qc])){if(t[Qc]=!0,eu(t))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(e.center=n._ripple.centered||jg(t),n._ripple.class&&(e.class=n._ripple.class),eu(t)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{Ba.show(t,n,e)},n._ripple.showTimer=window.setTimeout(()=>{var i;(i=n==null?void 0:n._ripple)!=null&&i.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},Sb)}else Ba.show(t,n,e)}}function oh(t){t[Qc]=!0}function on(t){const e=t.currentTarget;if(e!=null&&e._ripple){if(window.clearTimeout(e._ripple.showTimer),t.type==="touchend"&&e._ripple.showTimerCommit){e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,e._ripple.showTimer=window.setTimeout(()=>{on(t)});return}window.setTimeout(()=>{e._ripple&&(e._ripple.touched=!1)}),Ba.hide(e)}}function Zg(t){const e=t.currentTarget;e!=null&&e._ripple&&(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let uo=!1;function Jg(t){!uo&&(t.keyCode===cd.enter||t.keyCode===cd.space)&&(uo=!0,co(t))}function Qg(t){uo=!1,on(t)}function ev(t){uo&&(uo=!1,on(t))}function tv(t,e,n){const{value:i,modifiers:r}=e,s=Kg(i);if(s||Ba.hide(t),t._ripple=t._ripple??{},t._ripple.enabled=s,t._ripple.centered=r.center,t._ripple.circle=r.circle,Hc(i)&&i.class&&(t._ripple.class=i.class),s&&!n){if(r.stop){t.addEventListener("touchstart",oh,{passive:!0}),t.addEventListener("mousedown",oh);return}t.addEventListener("touchstart",co,{passive:!0}),t.addEventListener("touchend",on,{passive:!0}),t.addEventListener("touchmove",Zg,{passive:!0}),t.addEventListener("touchcancel",on),t.addEventListener("mousedown",co),t.addEventListener("mouseup",on),t.addEventListener("mouseleave",on),t.addEventListener("keydown",Jg),t.addEventListener("keyup",Qg),t.addEventListener("blur",ev),t.addEventListener("dragstart",on,{passive:!0})}else!s&&n&&nv(t)}function nv(t){t.removeEventListener("mousedown",co),t.removeEventListener("touchstart",co),t.removeEventListener("touchend",on),t.removeEventListener("touchmove",Zg),t.removeEventListener("touchcancel",on),t.removeEventListener("mouseup",on),t.removeEventListener("mouseleave",on),t.removeEventListener("keydown",Jg),t.removeEventListener("keyup",Qg),t.removeEventListener("dragstart",on),t.removeEventListener("blur",ev)}function bb(t,e){tv(t,e,!1)}function Eb(t){delete t._ripple,nv(t)}function Tb(t,e){if(e.value===e.oldValue)return;const n=Kg(e.oldValue);tv(t,e,n)}const iv={mounted:bb,unmounted:Eb,updated:Tb},Ab=Le({active:{type:Boolean,default:void 0},baseColor:String,symbol:{type:null,default:Hg},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:ci,appendIcon:ci,block:Boolean,readonly:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...xo(),...ht(),...Mo(),...Tr(),...bo(),...ib(),...Xg(),...Ao(),...pl(),...hi(),...Yg(),...fl(),...Ht({tag:"button"}),...un(),...To({variant:"elevated"})},"VBtn"),oi=et()({name:"VBtn",props:Ab(),emits:{"group:selected":t=>!0},setup(t,e){let{attrs:n,slots:i}=e;const{themeClasses:r}=fn(t),{borderClasses:s}=So(t),{densityClasses:o}=ll(t),{dimensionStyles:a}=Ar(t),{elevationClasses:l}=Eo(t),{loaderClasses:c}=$g(t),{locationStyles:u}=hl(t),{positionClasses:f}=ml(t),{roundedClasses:d}=pi(t),{sizeClasses:h,sizeStyles:v}=dl(t),g=rb(t,t.symbol,!1),m=qg(t,n),p=ne(()=>{var _;return t.active!==void 0?t.active:m.isLink.value?(_=m.isActive)==null?void 0:_.value:g==null?void 0:g.isSelected.value}),M=ne(()=>{var N,I;return{color:(g==null?void 0:g.isSelected.value)&&(!m.isLink.value||((N=m.isActive)==null?void 0:N.value))||!g||((I=m.isActive)==null?void 0:I.value)?t.color??t.baseColor:t.baseColor,variant:t.variant}}),{colorClasses:x,colorStyles:T,variantClasses:L}=ul(M),E=ne(()=>(g==null?void 0:g.disabled.value)||t.disabled),b=ne(()=>t.variant==="elevated"&&!(t.disabled||t.flat||t.border)),D=ne(()=>{if(!(t.value===void 0||typeof t.value=="symbol"))return Object(t.value)===t.value?JSON.stringify(t.value,null,0):t.value});function S(_){var N;E.value||m.isLink.value&&(_.metaKey||_.ctrlKey||_.shiftKey||_.button!==0||n.target==="_blank")||((N=m.navigate)==null||N.call(m,_),g==null||g.toggle())}return xb(m,g==null?void 0:g.select),lt(()=>{const _=m.isLink.value?"a":t.tag,N=!!(t.prependIcon||i.prepend),I=!!(t.appendIcon||i.append),R=!!(t.icon&&t.icon!==!0);return rs(z(_,{type:_==="a"?void 0:"button",class:["v-btn",g==null?void 0:g.selectedClass.value,{"v-btn--active":p.value,"v-btn--block":t.block,"v-btn--disabled":E.value,"v-btn--elevated":b.value,"v-btn--flat":t.flat,"v-btn--icon":!!t.icon,"v-btn--loading":t.loading,"v-btn--readonly":t.readonly,"v-btn--slim":t.slim,"v-btn--stacked":t.stacked},r.value,s.value,x.value,o.value,l.value,c.value,f.value,d.value,h.value,L.value,t.class],style:[T.value,a.value,u.value,v.value,t.style],"aria-busy":t.loading?!0:void 0,disabled:E.value||void 0,href:m.href.value,tabindex:t.loading||t.readonly?-1:void 0,onClick:S,value:D.value},{default:()=>{var k;return[cl(!0,"v-btn"),!t.icon&&N&&z("span",{key:"prepend",class:"v-btn__prepend"},[i.prepend?z(Dn,{key:"prepend-defaults",disabled:!t.prependIcon,defaults:{VIcon:{icon:t.prependIcon}}},i.prepend):z(Qr,{key:"prepend-icon",icon:t.prependIcon},null)]),z("span",{class:"v-btn__content","data-no-activator":""},[!i.default&&R?z(Qr,{key:"content-icon",icon:t.icon},null):z(Dn,{key:"content-defaults",disabled:!R,defaults:{VIcon:{icon:t.icon}}},{default:()=>{var q;return[((q=i.default)==null?void 0:q.call(i))??t.text]}})]),!t.icon&&I&&z("span",{key:"append",class:"v-btn__append"},[i.append?z(Dn,{key:"append-defaults",disabled:!t.appendIcon,defaults:{VIcon:{icon:t.appendIcon}}},i.append):z(Qr,{key:"append-icon",icon:t.appendIcon},null)]),!!t.loading&&z("span",{key:"loader",class:"v-btn__loader"},[((k=i.loader)==null?void 0:k.call(i))??z(hb,{color:typeof t.loading=="boolean"?void 0:t.loading,indeterminate:!0,width:"2"},null)])]}}),[[iv,!E.value&&!!t.ripple,"",{center:!!t.icon}]])}),{group:g}}}),rv=et()({name:"VCardActions",props:ht(),setup(t,e){let{slots:n}=e;return nl({VBtn:{slim:!0,variant:"text"}}),lt(()=>{var i;return z("div",{class:["v-card-actions",t.class],style:t.style},[(i=n.default)==null?void 0:i.call(n)])}),{}}}),wb=Le({opacity:[Number,String],...ht(),...Ht()},"VCardSubtitle"),Cb=et()({name:"VCardSubtitle",props:wb(),setup(t,e){let{slots:n}=e;return lt(()=>z(t.tag,{class:["v-card-subtitle",t.class],style:[{"--v-card-subtitle-opacity":t.opacity},t.style]},n)),{}}}),sv=dg("v-card-title");function Rb(t){return{aspectStyles:ne(()=>{const e=Number(t.aspectRatio);return e?{paddingBottom:String(1/e*100)+"%"}:void 0})}}const ov=Le({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...ht(),...Tr()},"VResponsive"),ah=et()({name:"VResponsive",props:ov(),setup(t,e){let{slots:n}=e;const{aspectStyles:i}=Rb(t),{dimensionStyles:r}=Ar(t);return lt(()=>{var s;return z("div",{class:["v-responsive",{"v-responsive--inline":t.inline},t.class],style:[r.value,t.style]},[z("div",{class:"v-responsive__sizer",style:i.value},null),(s=n.additional)==null?void 0:s.call(n),n.default&&z("div",{class:["v-responsive__content",t.contentClass]},[n.default()])])}),{}}}),av=Le({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:t=>t!==!0}},"transition"),Bs=(t,e)=>{let{slots:n}=e;const{transition:i,disabled:r,group:s,...o}=t,{component:a=s?Wu:Er,...l}=typeof i=="object"?i:{};return jn(a,Vt(typeof i=="string"?{name:r?"":i}:l,typeof i=="string"?{}:Object.fromEntries(Object.entries({disabled:r,group:s}).filter(c=>{let[u,f]=c;return f!==void 0})),o),n)};function Pb(t,e){if(!Xu)return;const n=e.modifiers||{},i=e.value,{handler:r,options:s}=typeof i=="object"?i:{handler:i,options:{}},o=new IntersectionObserver(function(){var f;let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=arguments.length>1?arguments[1]:void 0;const c=(f=t._observe)==null?void 0:f[e.instance.$.uid];if(!c)return;const u=a.some(d=>d.isIntersecting);r&&(!n.quiet||c.init)&&(!n.once||u||c.init)&&r(u,a,l),u&&n.once?lv(t,e):c.init=!0},s);t._observe=Object(t._observe),t._observe[e.instance.$.uid]={init:!1,observer:o},o.observe(t)}function lv(t,e){var i;const n=(i=t._observe)==null?void 0:i[e.instance.$.uid];n&&(n.observer.unobserve(t),delete t._observe[e.instance.$.uid])}const Lb={mounted:Pb,unmounted:lv},Ib=Le({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...ov(),...ht(),...hi(),...av()},"VImg"),gl=et()({name:"VImg",directives:{intersect:Lb},props:Ib(),emits:{loadstart:t=>!0,load:t=>!0,error:t=>!0},setup(t,e){let{emit:n,slots:i}=e;const{backgroundColorClasses:r,backgroundColorStyles:s}=xr(Rt(t,"color")),{roundedClasses:o}=pi(t),a=It("VImg"),l=Je(""),c=nt(),u=Je(t.eager?"loading":"idle"),f=Je(),d=Je(),h=ne(()=>t.src&&typeof t.src=="object"?{src:t.src.src,srcset:t.srcset||t.src.srcset,lazySrc:t.lazySrc||t.src.lazySrc,aspect:Number(t.aspectRatio||t.src.aspect||0)}:{src:t.src,srcset:t.srcset,lazySrc:t.lazySrc,aspect:Number(t.aspectRatio||0)}),v=ne(()=>h.value.aspect||f.value/d.value||0);Ye(()=>t.src,()=>{g(u.value!=="idle")}),Ye(v,(I,R)=>{!I&&R&&c.value&&T(c.value)}),wm(()=>g());function g(I){if(!(t.eager&&I)&&!(Xu&&!I&&!t.eager)){if(u.value="loading",h.value.lazySrc){const R=new Image;R.src=h.value.lazySrc,T(R,null)}h.value.src&&cn(()=>{var R;n("loadstart",((R=c.value)==null?void 0:R.currentSrc)||h.value.src),setTimeout(()=>{var k;if(!a.isUnmounted)if((k=c.value)!=null&&k.complete){if(c.value.naturalWidth||p(),u.value==="error")return;v.value||T(c.value,null),u.value==="loading"&&m()}else v.value||T(c.value),M()})})}}function m(){var I;a.isUnmounted||(M(),T(c.value),u.value="loaded",n("load",((I=c.value)==null?void 0:I.currentSrc)||h.value.src))}function p(){var I;a.isUnmounted||(u.value="error",n("error",((I=c.value)==null?void 0:I.currentSrc)||h.value.src))}function M(){const I=c.value;I&&(l.value=I.currentSrc||I.src)}let x=-1;Yn(()=>{clearTimeout(x)});function T(I){let R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const k=()=>{if(clearTimeout(x),a.isUnmounted)return;const{naturalHeight:q,naturalWidth:ee}=I;q||ee?(f.value=ee,d.value=q):!I.complete&&u.value==="loading"&&R!=null?x=window.setTimeout(k,R):(I.currentSrc.endsWith(".svg")||I.currentSrc.startsWith("data:image/svg+xml"))&&(f.value=1,d.value=1)};k()}const L=ne(()=>({"v-img__img--cover":t.cover,"v-img__img--contain":!t.cover})),E=()=>{var k;if(!h.value.src||u.value==="idle")return null;const I=z("img",{class:["v-img__img",L.value],style:{objectPosition:t.position},src:h.value.src,srcset:h.value.srcset,alt:t.alt,crossorigin:t.crossorigin,referrerpolicy:t.referrerpolicy,draggable:t.draggable,sizes:t.sizes,ref:c,onLoad:m,onError:p},null),R=(k=i.sources)==null?void 0:k.call(i);return z(Bs,{transition:t.transition,appear:!0},{default:()=>[rs(R?z("picture",{class:"v-img__picture"},[R,I]):I,[[Gu,u.value==="loaded"]])]})},b=()=>z(Bs,{transition:t.transition},{default:()=>[h.value.lazySrc&&u.value!=="loaded"&&z("img",{class:["v-img__img","v-img__img--preload",L.value],style:{objectPosition:t.position},src:h.value.lazySrc,alt:t.alt,crossorigin:t.crossorigin,referrerpolicy:t.referrerpolicy,draggable:t.draggable},null)]}),D=()=>i.placeholder?z(Bs,{transition:t.transition,appear:!0},{default:()=>[(u.value==="loading"||u.value==="error"&&!i.error)&&z("div",{class:"v-img__placeholder"},[i.placeholder()])]}):null,S=()=>i.error?z(Bs,{transition:t.transition,appear:!0},{default:()=>[u.value==="error"&&z("div",{class:"v-img__error"},[i.error()])]}):null,_=()=>t.gradient?z("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${t.gradient})`}},null):null,N=Je(!1);{const I=Ye(v,R=>{R&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{N.value=!0})}),I())})}return lt(()=>{const I=ah.filterProps(t);return rs(z(ah,Vt({class:["v-img",{"v-img--booting":!N.value},r.value,o.value,t.class],style:[{width:Ve(t.width==="auto"?f.value:t.width)},s.value,t.style]},I,{aspectRatio:v.value,"aria-label":t.alt,role:t.alt?"img":void 0}),{additional:()=>z(mt,null,[z(E,null,null),z(b,null,null),z(_,null,null),z(D,null,null),z(S,null,null)]),default:i.default}),[[Iu("intersect"),{handler:g,options:t.options},null,{once:!0}]])}),{currentSrc:l,image:c,state:u,naturalWidth:f,naturalHeight:d}}}),Db=Le({start:Boolean,end:Boolean,icon:ci,image:String,text:String,...ht(),...Mo(),...hi(),...fl(),...Ht(),...un(),...To({variant:"flat"})},"VAvatar"),lh=et()({name:"VAvatar",props:Db(),setup(t,e){let{slots:n}=e;const{themeClasses:i}=fn(t),{colorClasses:r,colorStyles:s,variantClasses:o}=ul(t),{densityClasses:a}=ll(t),{roundedClasses:l}=pi(t),{sizeClasses:c,sizeStyles:u}=dl(t);return lt(()=>z(t.tag,{class:["v-avatar",{"v-avatar--start":t.start,"v-avatar--end":t.end},i.value,r.value,a.value,l.value,c.value,o.value,t.class],style:[s.value,u.value,t.style]},{default:()=>[n.default?z(Dn,{key:"content-defaults",defaults:{VImg:{cover:!0,image:t.image},VIcon:{icon:t.icon}}},{default:()=>[n.default()]}):t.image?z(gl,{key:"image",src:t.image,alt:"",cover:!0},null):t.icon?z(Qr,{key:"icon",icon:t.icon},null):t.text,cl(!1,"v-avatar")]})),{}}}),Nb=Le({appendAvatar:String,appendIcon:ci,prependAvatar:String,prependIcon:ci,subtitle:[String,Number],title:[String,Number],...ht(),...Mo()},"VCardItem"),Ub=et()({name:"VCardItem",props:Nb(),setup(t,e){let{slots:n}=e;return lt(()=>{var c;const i=!!(t.prependAvatar||t.prependIcon),r=!!(i||n.prepend),s=!!(t.appendAvatar||t.appendIcon),o=!!(s||n.append),a=!!(t.title!=null||n.title),l=!!(t.subtitle!=null||n.subtitle);return z("div",{class:["v-card-item",t.class],style:t.style},[r&&z("div",{key:"prepend",class:"v-card-item__prepend"},[n.prepend?z(Dn,{key:"prepend-defaults",disabled:!i,defaults:{VAvatar:{density:t.density,image:t.prependAvatar},VIcon:{density:t.density,icon:t.prependIcon}}},n.prepend):z(mt,null,[t.prependAvatar&&z(lh,{key:"prepend-avatar",density:t.density,image:t.prependAvatar},null),t.prependIcon&&z(Qr,{key:"prepend-icon",density:t.density,icon:t.prependIcon},null)])]),z("div",{class:"v-card-item__content"},[a&&z(sv,{key:"title"},{default:()=>{var u;return[((u=n.title)==null?void 0:u.call(n))??t.title]}}),l&&z(Cb,{key:"subtitle"},{default:()=>{var u;return[((u=n.subtitle)==null?void 0:u.call(n))??t.subtitle]}}),(c=n.default)==null?void 0:c.call(n)]),o&&z("div",{key:"append",class:"v-card-item__append"},[n.append?z(Dn,{key:"append-defaults",disabled:!s,defaults:{VAvatar:{density:t.density,image:t.appendAvatar},VIcon:{density:t.density,icon:t.appendIcon}}},n.append):z(mt,null,[t.appendIcon&&z(Qr,{key:"append-icon",density:t.density,icon:t.appendIcon},null),t.appendAvatar&&z(lh,{key:"append-avatar",density:t.density,image:t.appendAvatar},null)])])])}),{}}}),Ob=Le({opacity:[Number,String],...ht(),...Ht()},"VCardText"),tu=et()({name:"VCardText",props:Ob(),setup(t,e){let{slots:n}=e;return lt(()=>z(t.tag,{class:["v-card-text",t.class],style:[{"--v-card-text-opacity":t.opacity},t.style]},n)),{}}}),Fb=Le({appendAvatar:String,appendIcon:ci,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:ci,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...xo(),...ht(),...Mo(),...Tr(),...bo(),...Xg(),...Ao(),...pl(),...hi(),...Yg(),...Ht(),...un(),...To({variant:"elevated"})},"VCard"),Bb=et()({name:"VCard",directives:{Ripple:iv},props:Fb(),setup(t,e){let{attrs:n,slots:i}=e;const{themeClasses:r}=fn(t),{borderClasses:s}=So(t),{colorClasses:o,colorStyles:a,variantClasses:l}=ul(t),{densityClasses:c}=ll(t),{dimensionStyles:u}=Ar(t),{elevationClasses:f}=Eo(t),{loaderClasses:d}=$g(t),{locationStyles:h}=hl(t),{positionClasses:v}=ml(t),{roundedClasses:g}=pi(t),m=qg(t,n),p=ne(()=>t.link!==!1&&m.isLink.value),M=ne(()=>!t.disabled&&t.link!==!1&&(t.link||m.isClickable.value));return lt(()=>{const x=p.value?"a":t.tag,T=!!(i.title||t.title!=null),L=!!(i.subtitle||t.subtitle!=null),E=T||L,b=!!(i.append||t.appendAvatar||t.appendIcon),D=!!(i.prepend||t.prependAvatar||t.prependIcon),S=!!(i.image||t.image),_=E||D||b,N=!!(i.text||t.text!=null);return rs(z(x,{class:["v-card",{"v-card--disabled":t.disabled,"v-card--flat":t.flat,"v-card--hover":t.hover&&!(t.disabled||t.flat),"v-card--link":M.value},r.value,s.value,o.value,c.value,f.value,d.value,v.value,g.value,l.value,t.class],style:[a.value,u.value,h.value,t.style],href:m.href.value,onClick:M.value&&m.navigate,tabindex:t.disabled?-1:void 0},{default:()=>{var I;return[S&&z("div",{key:"image",class:"v-card__image"},[i.image?z(Dn,{key:"image-defaults",disabled:!t.image,defaults:{VImg:{cover:!0,src:t.image}}},i.image):z(gl,{key:"image-img",cover:!0,src:t.image},null)]),z(mb,{name:"v-card",active:!!t.loading,color:typeof t.loading=="boolean"?void 0:t.loading},{default:i.loader}),_&&z(Ub,{key:"item",prependAvatar:t.prependAvatar,prependIcon:t.prependIcon,title:t.title,subtitle:t.subtitle,appendAvatar:t.appendAvatar,appendIcon:t.appendIcon},{default:i.item,prepend:i.prepend,title:i.title,subtitle:i.subtitle,append:i.append}),N&&z(tu,{key:"text"},{default:()=>{var R;return[((R=i.text)==null?void 0:R.call(i))??t.text]}}),(I=i.default)==null?void 0:I.call(i),i.actions&&z(rv,null,{default:i.actions}),cl(M.value,"v-card")]}}),[[Iu("ripple"),M.value&&t.ripple]])}),{}}}),kb=Le({color:String,inset:Boolean,length:[Number,String],opacity:[Number,String],thickness:[Number,String],vertical:Boolean,...ht(),...un()},"VDivider"),Vb=et()({name:"VDivider",props:kb(),setup(t,e){let{attrs:n,slots:i}=e;const{themeClasses:r}=fn(t),{textColorClasses:s,textColorStyles:o}=lo(Rt(t,"color")),a=ne(()=>{const l={};return t.length&&(l[t.vertical?"maxHeight":"maxWidth"]=Ve(t.length)),t.thickness&&(l[t.vertical?"borderRightWidth":"borderTopWidth"]=Ve(t.thickness)),l});return lt(()=>{const l=z("hr",{class:[{"v-divider":!0,"v-divider--inset":t.inset,"v-divider--vertical":t.vertical},r.value,s.value,t.class],style:[a.value,o.value,{"--v-border-opacity":t.opacity},t.style],"aria-orientation":!n.role||n.role==="separator"?t.vertical?"vertical":"horizontal":void 0,role:`${n.role||"separator"}`},null);return i.default?z("div",{class:["v-divider__wrapper",{"v-divider__wrapper--vertical":t.vertical,"v-divider__wrapper--inset":t.inset}]},[l,z("div",{class:"v-divider__content"},[i.default()]),l]):l}),{}}}),zb=Le({fluid:{type:Boolean,default:!1},...ht(),...Ht()},"VContainer"),Hb=et()({name:"VContainer",props:zb(),setup(t,e){let{slots:n}=e;const{rtlClasses:i}=Ms();return lt(()=>z(t.tag,{class:["v-container",{"v-container--fluid":t.fluid},i.value,t.class],style:t.style},n)),{}}}),cv=rl.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}),uv=rl.reduce((t,e)=>{const n="offset"+ui(e);return t[n]={type:[String,Number],default:null},t},{}),fv=rl.reduce((t,e)=>{const n="order"+ui(e);return t[n]={type:[String,Number],default:null},t},{}),ch={col:Object.keys(cv),offset:Object.keys(uv),order:Object.keys(fv)};function Gb(t,e,n){let i=t;if(!(n==null||n===!1)){if(e){const r=e.replace(t,"");i+=`-${r}`}return t==="col"&&(i="v-"+i),t==="col"&&(n===""||n===!0)||(i+=`-${n}`),i.toLowerCase()}}const Wb=["auto","start","end","center","baseline","stretch"],Xb=Le({cols:{type:[Boolean,String,Number],default:!1},...cv,offset:{type:[String,Number],default:null},...uv,order:{type:[String,Number],default:null},...fv,alignSelf:{type:String,default:null,validator:t=>Wb.includes(t)},...ht(),...Ht()},"VCol"),$b=et()({name:"VCol",props:Xb(),setup(t,e){let{slots:n}=e;const i=ne(()=>{const r=[];let s;for(s in ch)ch[s].forEach(a=>{const l=t[a],c=Gb(s,a,l);c&&r.push(c)});const o=r.some(a=>a.startsWith("v-col-"));return r.push({"v-col":!o||!t.cols,[`v-col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),r});return()=>{var r;return jn(t.tag,{class:[i.value,t.class],style:t.style},(r=n.default)==null?void 0:r.call(n))}}}),ef=["start","end","center"],dv=["space-between","space-around","space-evenly"];function tf(t,e){return rl.reduce((n,i)=>{const r=t+ui(i);return n[r]=e(),n},{})}const qb=[...ef,"baseline","stretch"],hv=t=>qb.includes(t),pv=tf("align",()=>({type:String,default:null,validator:hv})),Yb=[...ef,...dv],mv=t=>Yb.includes(t),gv=tf("justify",()=>({type:String,default:null,validator:mv})),jb=[...ef,...dv,"stretch"],vv=t=>jb.includes(t),_v=tf("alignContent",()=>({type:String,default:null,validator:vv})),uh={align:Object.keys(pv),justify:Object.keys(gv),alignContent:Object.keys(_v)},Kb={align:"align",justify:"justify",alignContent:"align-content"};function Zb(t,e,n){let i=Kb[t];if(n!=null){if(e){const r=e.replace(t,"");i+=`-${r}`}return i+=`-${n}`,i.toLowerCase()}}const Jb=Le({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:hv},...pv,justify:{type:String,default:null,validator:mv},...gv,alignContent:{type:String,default:null,validator:vv},..._v,...ht(),...Ht()},"VRow"),Qb=et()({name:"VRow",props:Jb(),setup(t,e){let{slots:n}=e;const i=ne(()=>{const r=[];let s;for(s in uh)uh[s].forEach(o=>{const a=t[o],l=Zb(s,o,a);l&&r.push(l)});return r.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),r});return()=>{var r;return jn(t.tag,{class:["v-row",i.value,t.class],style:t.style},(r=n.default)==null?void 0:r.call(n))}}}),eE=dg("v-spacer","div","VSpacer");function Wl(t,e){return{x:t.x+e.x,y:t.y+e.y}}function tE(t,e){return{x:t.x-e.x,y:t.y-e.y}}function fh(t,e){if(t.side==="top"||t.side==="bottom"){const{side:n,align:i}=t,r=i==="left"?0:i==="center"?e.width/2:i==="right"?e.width:i,s=n==="top"?0:n==="bottom"?e.height:n;return Wl({x:r,y:s},e)}else if(t.side==="left"||t.side==="right"){const{side:n,align:i}=t,r=n==="left"?0:n==="right"?e.width:n,s=i==="top"?0:i==="center"?e.height/2:i==="bottom"?e.height:i;return Wl({x:r,y:s},e)}return Wl({x:e.width/2,y:e.height/2},e)}const yv={static:rE,connected:oE},nE=Le({locationStrategy:{type:[String,Function],default:"static",validator:t=>typeof t=="function"||t in yv},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function iE(t,e){const n=nt({}),i=nt();vt&&xs(()=>!!(e.isActive.value&&t.locationStrategy),s=>{var o,a;Ye(()=>t.locationStrategy,s),En(()=>{window.removeEventListener("resize",r),i.value=void 0}),window.addEventListener("resize",r,{passive:!0}),typeof t.locationStrategy=="function"?i.value=(o=t.locationStrategy(e,t,n))==null?void 0:o.updateLocation:i.value=(a=yv[t.locationStrategy](e,t,n))==null?void 0:a.updateLocation});function r(s){var o;(o=i.value)==null||o.call(i,s)}return{contentStyles:n,updateLocation:i}}function rE(){}function sE(t,e){e?t.style.removeProperty("left"):t.style.removeProperty("right");const n=rx(t);return e?n.x+=parseFloat(t.style.right||0):n.x-=parseFloat(t.style.left||0),n.y-=parseFloat(t.style.top||0),n}function oE(t,e,n){(Array.isArray(t.target.value)||Ox(t.target.value))&&Object.assign(n.value,{position:"fixed",top:0,[t.isRtl.value?"right":"left"]:0});const{preferredAnchor:r,preferredOrigin:s}=qu(()=>{const v=Wc(e.location,t.isRtl.value),g=e.origin==="overlap"?v:e.origin==="auto"?Fl(v):Wc(e.origin,t.isRtl.value);return v.side===g.side&&v.align===Bl(g).align?{preferredAnchor:md(v),preferredOrigin:md(g)}:{preferredAnchor:v,preferredOrigin:g}}),[o,a,l,c]=["minWidth","minHeight","maxWidth","maxHeight"].map(v=>ne(()=>{const g=parseFloat(e[v]);return isNaN(g)?1/0:g})),u=ne(()=>{if(Array.isArray(e.offset))return e.offset;if(typeof e.offset=="string"){const v=e.offset.split(" ").map(parseFloat);return v.length<2&&v.push(0),v}return typeof e.offset=="number"?[e.offset,0]:[0,0]});let f=!1;const d=new ResizeObserver(()=>{f&&h()});Ye([t.target,t.contentEl],(v,g)=>{let[m,p]=v,[M,x]=g;M&&!Array.isArray(M)&&d.unobserve(M),m&&!Array.isArray(m)&&d.observe(m),x&&d.unobserve(x),p&&d.observe(p)},{immediate:!0}),En(()=>{d.disconnect()});function h(){if(f=!1,requestAnimationFrame(()=>f=!0),!t.target.value||!t.contentEl.value)return;const v=ix(t.target.value),g=sE(t.contentEl.value,t.isRtl.value),m=Ua(t.contentEl.value),p=12;m.length||(m.push(document.documentElement),t.contentEl.value.style.top&&t.contentEl.value.style.left||(g.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),g.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const M=m.reduce((N,I)=>{const R=I.getBoundingClientRect(),k=new yr({x:I===document.documentElement?0:R.x,y:I===document.documentElement?0:R.y,width:I.clientWidth,height:I.clientHeight});return N?new yr({x:Math.max(N.left,k.left),y:Math.max(N.top,k.top),width:Math.min(N.right,k.right)-Math.max(N.left,k.left),height:Math.min(N.bottom,k.bottom)-Math.max(N.top,k.top)}):k},void 0);M.x+=p,M.y+=p,M.width-=p*2,M.height-=p*2;let x={anchor:r.value,origin:s.value};function T(N){const I=new yr(g),R=fh(N.anchor,v),k=fh(N.origin,I);let{x:q,y:ee}=tE(R,k);switch(N.anchor.side){case"top":ee-=u.value[0];break;case"bottom":ee+=u.value[0];break;case"left":q-=u.value[0];break;case"right":q+=u.value[0];break}switch(N.anchor.align){case"top":ee-=u.value[1];break;case"bottom":ee+=u.value[1];break;case"left":q-=u.value[1];break;case"right":q+=u.value[1];break}return I.x+=q,I.y+=ee,I.width=Math.min(I.width,l.value),I.height=Math.min(I.height,c.value),{overflows:vd(I,M),x:q,y:ee}}let L=0,E=0;const b={x:0,y:0},D={x:!1,y:!1};let S=-1;for(;!(S++>10);){const{x:N,y:I,overflows:R}=T(x);L+=N,E+=I,g.x+=N,g.y+=I;{const k=gd(x.anchor),q=R.x.before||R.x.after,ee=R.y.before||R.y.after;let ie=!1;if(["x","y"].forEach(G=>{if(G==="x"&&q&&!D.x||G==="y"&&ee&&!D.y){const fe={anchor:{...x.anchor},origin:{...x.origin}},me=G==="x"?k==="y"?Bl:Fl:k==="y"?Fl:Bl;fe.anchor=me(fe.anchor),fe.origin=me(fe.origin);const{overflows:ve}=T(fe);(ve[G].before<=R[G].before&&ve[G].after<=R[G].after||ve[G].before+ve[G].after<(R[G].before+R[G].after)/2)&&(x=fe,ie=D[G]=!0)}}),ie)continue}R.x.before&&(L+=R.x.before,g.x+=R.x.before),R.x.after&&(L-=R.x.after,g.x-=R.x.after),R.y.before&&(E+=R.y.before,g.y+=R.y.before),R.y.after&&(E-=R.y.after,g.y-=R.y.after);{const k=vd(g,M);b.x=M.width-k.x.before-k.x.after,b.y=M.height-k.y.before-k.y.after,L+=k.x.before,g.x+=k.x.before,E+=k.y.before,g.y+=k.y.before}break}const _=gd(x.anchor);return Object.assign(n.value,{"--v-overlay-anchor-origin":`${x.anchor.side} ${x.anchor.align}`,transformOrigin:`${x.origin.side} ${x.origin.align}`,top:Ve(Xl(E)),left:t.isRtl.value?void 0:Ve(Xl(L)),right:t.isRtl.value?Ve(Xl(-L)):void 0,minWidth:Ve(_==="y"?Math.min(o.value,v.width):o.value),maxWidth:Ve(dh(as(b.x,o.value===1/0?0:o.value,l.value))),maxHeight:Ve(dh(as(b.y,a.value===1/0?0:a.value,c.value)))}),{available:b,contentBox:g}}return Ye(()=>[r.value,s.value,e.offset,e.minWidth,e.minHeight,e.maxWidth,e.maxHeight],()=>h()),cn(()=>{const v=h();if(!v)return;const{available:g,contentBox:m}=v;m.height>g.y&&requestAnimationFrame(()=>{h(),requestAnimationFrame(()=>{h()})})}),{updateLocation:h}}function Xl(t){return Math.round(t*devicePixelRatio)/devicePixelRatio}function dh(t){return Math.ceil(t*devicePixelRatio)/devicePixelRatio}let nu=!0;const ka=[];function aE(t){!nu||ka.length?(ka.push(t),iu()):(nu=!1,t(),iu())}let hh=-1;function iu(){cancelAnimationFrame(hh),hh=requestAnimationFrame(()=>{const t=ka.shift();t&&t(),ka.length?iu():nu=!0})}const ba={none:null,close:uE,block:fE,reposition:dE},lE=Le({scrollStrategy:{type:[String,Function],default:"block",validator:t=>typeof t=="function"||t in ba}},"VOverlay-scroll-strategies");function cE(t,e){if(!vt)return;let n;Un(async()=>{n==null||n.stop(),e.isActive.value&&t.scrollStrategy&&(n=yu(),await new Promise(i=>setTimeout(i)),n.active&&n.run(()=>{var i;typeof t.scrollStrategy=="function"?t.scrollStrategy(e,t,n):(i=ba[t.scrollStrategy])==null||i.call(ba,e,t,n)}))}),En(()=>{n==null||n.stop()})}function uE(t){function e(n){t.isActive.value=!1}xv(t.targetEl.value??t.contentEl.value,e)}function fE(t,e){var o;const n=(o=t.root.value)==null?void 0:o.offsetParent,i=[...new Set([...Ua(t.targetEl.value,e.contained?n:void 0),...Ua(t.contentEl.value,e.contained?n:void 0)])].filter(a=>!a.classList.contains("v-overlay-scroll-blocked")),r=window.innerWidth-document.documentElement.offsetWidth,s=(a=>Ku(a)&&a)(n||document.documentElement);s&&t.root.value.classList.add("v-overlay--scroll-blocked"),i.forEach((a,l)=>{a.style.setProperty("--v-body-scroll-x",Ve(-a.scrollLeft)),a.style.setProperty("--v-body-scroll-y",Ve(-a.scrollTop)),a!==document.documentElement&&a.style.setProperty("--v-scrollbar-offset",Ve(r)),a.classList.add("v-overlay-scroll-blocked")}),En(()=>{i.forEach((a,l)=>{const c=parseFloat(a.style.getPropertyValue("--v-body-scroll-x")),u=parseFloat(a.style.getPropertyValue("--v-body-scroll-y")),f=a.style.scrollBehavior;a.style.scrollBehavior="auto",a.style.removeProperty("--v-body-scroll-x"),a.style.removeProperty("--v-body-scroll-y"),a.style.removeProperty("--v-scrollbar-offset"),a.classList.remove("v-overlay-scroll-blocked"),a.scrollLeft=-c,a.scrollTop=-u,a.style.scrollBehavior=f}),s&&t.root.value.classList.remove("v-overlay--scroll-blocked")})}function dE(t,e,n){let i=!1,r=-1,s=-1;function o(a){aE(()=>{var u,f;const l=performance.now();(f=(u=t.updateLocation).value)==null||f.call(u,a),i=(performance.now()-l)/(1e3/60)>2})}s=(typeof requestIdleCallback>"u"?a=>a():requestIdleCallback)(()=>{n.run(()=>{xv(t.targetEl.value??t.contentEl.value,a=>{i?(cancelAnimationFrame(r),r=requestAnimationFrame(()=>{r=requestAnimationFrame(()=>{o(a)})})):o(a)})})}),En(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(s),cancelAnimationFrame(r)})}function xv(t,e){const n=[document,...Ua(t)];n.forEach(i=>{i.addEventListener("scroll",e,{passive:!0})}),En(()=>{n.forEach(i=>{i.removeEventListener("scroll",e)})})}const hE=Symbol.for("vuetify:v-menu"),pE=Le({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function mE(t,e){let n=()=>{};function i(o){n==null||n();const a=Number(o?t.openDelay:t.closeDelay);return new Promise(l=>{n=tx(a,()=>{e==null||e(o),l(o)})})}function r(){return i(!0)}function s(){return i(!1)}return{clearDelay:n,runOpenDelay:r,runCloseDelay:s}}const gE=Le({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...pE()},"VOverlay-activator");function vE(t,e){let{isActive:n,isTop:i}=e;const r=It("useActivator"),s=nt();let o=!1,a=!1,l=!0;const c=ne(()=>t.openOnFocus||t.openOnFocus==null&&t.openOnHover),u=ne(()=>t.openOnClick||t.openOnClick==null&&!t.openOnHover&&!c.value),{runOpenDelay:f,runCloseDelay:d}=mE(t,b=>{b===(t.openOnHover&&o||c.value&&a)&&!(t.openOnHover&&n.value&&!i.value)&&(n.value!==b&&(l=!0),n.value=b)}),h=nt(),v={onClick:b=>{b.stopPropagation(),s.value=b.currentTarget||b.target,n.value||(h.value=[b.clientX,b.clientY]),n.value=!n.value},onMouseenter:b=>{var D;(D=b.sourceCapabilities)!=null&&D.firesTouchEvents||(o=!0,s.value=b.currentTarget||b.target,f())},onMouseleave:b=>{o=!1,d()},onFocus:b=>{ex(b.target,":focus-visible")!==!1&&(a=!0,b.stopPropagation(),s.value=b.currentTarget||b.target,f())},onBlur:b=>{a=!1,b.stopPropagation(),d()}},g=ne(()=>{const b={};return u.value&&(b.onClick=v.onClick),t.openOnHover&&(b.onMouseenter=v.onMouseenter,b.onMouseleave=v.onMouseleave),c.value&&(b.onFocus=v.onFocus,b.onBlur=v.onBlur),b}),m=ne(()=>{const b={};if(t.openOnHover&&(b.onMouseenter=()=>{o=!0,f()},b.onMouseleave=()=>{o=!1,d()}),c.value&&(b.onFocusin=()=>{a=!0,f()},b.onFocusout=()=>{a=!1,d()}),t.closeOnContentClick){const D=_t(hE,null);b.onClick=()=>{n.value=!1,D==null||D.closeParents()}}return b}),p=ne(()=>{const b={};return t.openOnHover&&(b.onMouseenter=()=>{l&&(o=!0,l=!1,f())},b.onMouseleave=()=>{o=!1,d()}),b});Ye(i,b=>{b&&(t.openOnHover&&!o&&(!c.value||!a)||c.value&&!a&&(!t.openOnHover||!o))&&(n.value=!1)}),Ye(n,b=>{b||setTimeout(()=>{h.value=void 0})},{flush:"post"});const M=Gc();Un(()=>{M.value&&cn(()=>{s.value=M.el})});const x=Gc(),T=ne(()=>t.target==="cursor"&&h.value?h.value:x.value?x.el:Sv(t.target,r)||s.value),L=ne(()=>Array.isArray(T.value)?void 0:T.value);let E;return Ye(()=>!!t.activator,b=>{b&&vt?(E=yu(),E.run(()=>{_E(t,r,{activatorEl:s,activatorEvents:g})})):E&&E.stop()},{flush:"post",immediate:!0}),En(()=>{E==null||E.stop()}),{activatorEl:s,activatorRef:M,target:T,targetEl:L,targetRef:x,activatorEvents:g,contentEvents:m,scrimEvents:p}}function _E(t,e,n){let{activatorEl:i,activatorEvents:r}=n;Ye(()=>t.activator,(l,c)=>{if(c&&l!==c){const u=a(c);u&&o(u)}l&&cn(()=>s())},{immediate:!0}),Ye(()=>t.activatorProps,()=>{s()}),En(()=>{o()});function s(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:a(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t.activatorProps;l&&ox(l,Vt(r.value,c))}function o(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:a(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t.activatorProps;l&&ax(l,Vt(r.value,c))}function a(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:t.activator;const c=Sv(l,e);return i.value=(c==null?void 0:c.nodeType)===Node.ELEMENT_NODE?c:void 0,i.value}}function Sv(t,e){var i,r;if(!t)return;let n;if(t==="parent"){let s=(r=(i=e==null?void 0:e.proxy)==null?void 0:i.$el)==null?void 0:r.parentNode;for(;s!=null&&s.hasAttribute("data-no-activator");)s=s.parentNode;n=s}else typeof t=="string"?n=document.querySelector(t):"$el"in t?n=t.$el:n=t;return n}function yE(){if(!vt)return Je(!1);const{ssr:t}=IS();if(t){const e=Je(!1);return di(()=>{e.value=!0}),e}else return Je(!0)}const xE=Le({eager:Boolean},"lazy");function SE(t,e){const n=Je(!1),i=ne(()=>n.value||t.eager||e.value);Ye(e,()=>n.value=!0);function r(){t.eager||(n.value=!1)}return{isBooted:n,hasContent:i,onAfterLeave:r}}function Mv(){const e=It("useScopeId").vnode.scopeId;return{scopeId:e?{[e]:""}:void 0}}const ph=Symbol.for("vuetify:stack"),Ls=Bt([]);function ME(t,e,n){const i=It("useStack"),r=!n,s=_t(ph,void 0),o=Bt({activeChildren:new Set});Mn(ph,o);const a=Je(+e.value);xs(t,()=>{var f;const u=(f=Ls.at(-1))==null?void 0:f[1];a.value=u?u+10:+e.value,r&&Ls.push([i.uid,a.value]),s==null||s.activeChildren.add(i.uid),En(()=>{if(r){const d=je(Ls).findIndex(h=>h[0]===i.uid);Ls.splice(d,1)}s==null||s.activeChildren.delete(i.uid)})});const l=Je(!0);r&&Un(()=>{var f;const u=((f=Ls.at(-1))==null?void 0:f[0])===i.uid;setTimeout(()=>l.value=u)});const c=ne(()=>!o.activeChildren.size);return{globalTop:_s(l),localTop:c,stackStyles:ne(()=>({zIndex:a.value}))}}function bE(t){return{teleportTarget:ne(()=>{const n=t.value;if(n===!0||!vt)return;const i=n===!1?document.body:typeof n=="string"?document.querySelector(n):n;if(i==null)return;let r=i.querySelector(":scope > .v-overlay-container");return r||(r=document.createElement("div"),r.className="v-overlay-container",i.appendChild(r)),r})}}function EE(){return!0}function bv(t,e,n){if(!t||Ev(t,n)===!1)return!1;const i=hg(e);if(typeof ShadowRoot<"u"&&i instanceof ShadowRoot&&i.host===t.target)return!1;const r=(typeof n.value=="object"&&n.value.include||(()=>[]))();return r.push(e),!r.some(s=>s==null?void 0:s.contains(t.target))}function Ev(t,e){return(typeof e.value=="object"&&e.value.closeConditional||EE)(t)}function TE(t,e,n){const i=typeof n.value=="function"?n.value:n.value.handler;e._clickOutside.lastMousedownWasOutside&&bv(t,e,n)&&setTimeout(()=>{Ev(t,n)&&i&&i(t)},0)}function mh(t,e){const n=hg(t);e(document),typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&e(n)}const AE={mounted(t,e){const n=r=>TE(r,t,e),i=r=>{t._clickOutside.lastMousedownWasOutside=bv(r,t,e)};mh(t,r=>{r.addEventListener("click",n,!0),r.addEventListener("mousedown",i,!0)}),t._clickOutside||(t._clickOutside={lastMousedownWasOutside:!1}),t._clickOutside[e.instance.$.uid]={onClick:n,onMousedown:i}},unmounted(t,e){t._clickOutside&&(mh(t,n=>{var s;if(!n||!((s=t._clickOutside)!=null&&s[e.instance.$.uid]))return;const{onClick:i,onMousedown:r}=t._clickOutside[e.instance.$.uid];n.removeEventListener("click",i,!0),n.removeEventListener("mousedown",r,!0)}),delete t._clickOutside[e.instance.$.uid])}};function wE(t){const{modelValue:e,color:n,...i}=t;return z(Er,{name:"fade-transition",appear:!0},{default:()=>[t.modelValue&&z("div",Vt({class:["v-overlay__scrim",t.color.backgroundColorClasses.value],style:t.color.backgroundColorStyles.value},i),null)]})}const Tv=Le({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...gE(),...ht(),...Tr(),...xE(),...nE(),...lE(),...un(),...av()},"VOverlay"),gh=et()({name:"VOverlay",directives:{ClickOutside:AE},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Tv()},emits:{"click:outside":t=>!0,"update:modelValue":t=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(t,e){let{slots:n,attrs:i,emit:r}=e;const s=Ss(t,"modelValue"),o=ne({get:()=>s.value,set:oe=>{oe&&t.disabled||(s.value=oe)}}),{teleportTarget:a}=bE(ne(()=>t.attach||t.contained)),{themeClasses:l}=fn(t),{rtlClasses:c,isRtl:u}=Ms(),{hasContent:f,onAfterLeave:d}=SE(t,o),h=xr(ne(()=>typeof t.scrim=="string"?t.scrim:null)),{globalTop:v,localTop:g,stackStyles:m}=ME(o,Rt(t,"zIndex"),t._disableGlobalStack),{activatorEl:p,activatorRef:M,target:x,targetEl:T,targetRef:L,activatorEvents:E,contentEvents:b,scrimEvents:D}=vE(t,{isActive:o,isTop:g}),{dimensionStyles:S}=Ar(t),_=yE(),{scopeId:N}=Mv();Ye(()=>t.disabled,oe=>{oe&&(o.value=!1)});const I=nt(),R=nt(),k=nt(),{contentStyles:q,updateLocation:ee}=iE(t,{isRtl:u,contentEl:k,target:x,isActive:o});cE(t,{root:I,contentEl:k,targetEl:T,isActive:o,updateLocation:ee});function ie(oe){r("click:outside",oe),t.persistent?Ae():o.value=!1}function G(oe){return o.value&&v.value&&(!t.scrim||oe.target===R.value)}vt&&Ye(o,oe=>{oe?window.addEventListener("keydown",fe):window.removeEventListener("keydown",fe)},{immediate:!0}),Yn(()=>{vt&&window.removeEventListener("keydown",fe)});function fe(oe){var ge,B;oe.key==="Escape"&&v.value&&(t.persistent?Ae():(o.value=!1,(ge=k.value)!=null&&ge.contains(document.activeElement)&&((B=p.value)==null||B.focus())))}const me=_b();xs(()=>t.closeOnBack,()=>{yb(me,oe=>{v.value&&o.value?(oe(!1),t.persistent?Ae():o.value=!1):oe()})});const ve=nt();Ye(()=>o.value&&(t.absolute||t.contained)&&a.value==null,oe=>{if(oe){const ge=Dx(I.value);ge&&ge!==document.scrollingElement&&(ve.value=ge.scrollTop)}});function Ae(){t.noClickAnimation||k.value&&sx(k.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:Ix})}function $e(){r("afterEnter")}function te(){d(),r("afterLeave")}return lt(()=>{var oe;return z(mt,null,[(oe=n.activator)==null?void 0:oe.call(n,{isActive:o.value,targetRef:L,props:Vt({ref:M},E.value,t.activatorProps)}),_.value&&f.value&&z(ty,{disabled:!a.value,to:a.value},{default:()=>[z("div",Vt({class:["v-overlay",{"v-overlay--absolute":t.absolute||t.contained,"v-overlay--active":o.value,"v-overlay--contained":t.contained},l.value,c.value,t.class],style:[m.value,{"--v-overlay-opacity":t.opacity,top:Ve(ve.value)},t.style],ref:I},N,i),[z(wE,Vt({color:h,modelValue:o.value&&!!t.scrim,ref:R},D.value),null),z(Bs,{appear:!0,persisted:!0,transition:t.transition,target:x.value,onAfterEnter:$e,onAfterLeave:te},{default:()=>{var ge;return[rs(z("div",Vt({ref:k,class:["v-overlay__content",t.contentClass],style:[S.value,q.value]},b.value,t.contentProps),[(ge=n.default)==null?void 0:ge.call(n,{isActive:o})]),[[Gu,o.value],[Iu("click-outside"),{handler:ie,closeConditional:G,include:()=>[p.value]}]])]}})])]})])}),{activatorEl:p,scrimEl:R,target:x,animateClick:Ae,contentEl:k,globalTop:v,localTop:g,updateLocation:ee}}}),$l=Symbol("Forwarded refs");function ql(t,e){let n=t;for(;n;){const i=Reflect.getOwnPropertyDescriptor(n,e);if(i)return i;n=Object.getPrototypeOf(n)}}function CE(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return t[$l]=n,new Proxy(t,{get(r,s){if(Reflect.has(r,s))return Reflect.get(r,s);if(!(typeof s=="symbol"||s.startsWith("$")||s.startsWith("__"))){for(const o of n)if(o.value&&Reflect.has(o.value,s)){const a=Reflect.get(o.value,s);return typeof a=="function"?a.bind(o.value):a}}},has(r,s){if(Reflect.has(r,s))return!0;if(typeof s=="symbol"||s.startsWith("$")||s.startsWith("__"))return!1;for(const o of n)if(o.value&&Reflect.has(o.value,s))return!0;return!1},set(r,s,o){if(Reflect.has(r,s))return Reflect.set(r,s,o);if(typeof s=="symbol"||s.startsWith("$")||s.startsWith("__"))return!1;for(const a of n)if(a.value&&Reflect.has(a.value,s))return Reflect.set(a.value,s,o);return!1},getOwnPropertyDescriptor(r,s){var a;const o=Reflect.getOwnPropertyDescriptor(r,s);if(o)return o;if(!(typeof s=="symbol"||s.startsWith("$")||s.startsWith("__"))){for(const l of n){if(!l.value)continue;const c=ql(l.value,s)??("_"in l.value?ql((a=l.value._)==null?void 0:a.setupState,s):void 0);if(c)return c}for(const l of n){const c=l.value&&l.value[$l];if(!c)continue;const u=c.slice();for(;u.length;){const f=u.shift(),d=ql(f.value,s);if(d)return d;const h=f.value&&f.value[$l];h&&u.push(...h)}}}}})}function RE(t){const e=Je(t);let n=-1;function i(){clearInterval(n)}function r(){i(),cn(()=>e.value=t)}function s(o){const a=o?getComputedStyle(o):{transitionDuration:.2},l=parseFloat(a.transitionDuration)*1e3||200;if(i(),e.value<=0)return;const c=performance.now();n=window.setInterval(()=>{const u=performance.now()-c+l;e.value=Math.max(t-u,0),e.value<=0&&i()},l)}return En(i),{clear:i,time:e,start:s,reset:r}}const PE=Le({multiLine:Boolean,text:String,timer:[Boolean,String],timeout:{type:[Number,String],default:5e3},vertical:Boolean,...Ao({location:"bottom"}),...pl(),...hi(),...To(),...un(),...Ky(Tv({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},"VSnackbar"),Av=et()({name:"VSnackbar",props:PE(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const i=Ss(t,"modelValue"),{positionClasses:r}=ml(t),{scopeId:s}=Mv(),{themeClasses:o}=fn(t),{colorClasses:a,colorStyles:l,variantClasses:c}=ul(t),{roundedClasses:u}=pi(t),f=RE(Number(t.timeout)),d=nt(),h=nt(),v=Je(!1),g=Je(0),m=nt(),p=_t(so,void 0);xs(()=>!!p,()=>{const _=Ag();Un(()=>{m.value=_.mainStyles.value})}),Ye(i,x),Ye(()=>t.timeout,x),di(()=>{i.value&&x()});let M=-1;function x(){f.reset(),window.clearTimeout(M);const _=Number(t.timeout);if(!i.value||_===-1)return;const N=ng(h.value);f.start(N),M=window.setTimeout(()=>{i.value=!1},_)}function T(){f.reset(),window.clearTimeout(M)}function L(){v.value=!0,T()}function E(){v.value=!1,x()}function b(_){g.value=_.touches[0].clientY}function D(_){Math.abs(g.value-_.changedTouches[0].clientY)>50&&(i.value=!1)}const S=ne(()=>t.location.split(" ").reduce((_,N)=>(_[`v-snackbar--${N}`]=!0,_),{}));return lt(()=>{const _=gh.filterProps(t),N=!!(n.default||n.text||t.text);return z(gh,Vt({ref:d,class:["v-snackbar",{"v-snackbar--active":i.value,"v-snackbar--multi-line":t.multiLine&&!t.vertical,"v-snackbar--timer":!!t.timer,"v-snackbar--vertical":t.vertical},S.value,r.value,t.class],style:[m.value,t.style]},_,{modelValue:i.value,"onUpdate:modelValue":I=>i.value=I,contentProps:Vt({class:["v-snackbar__wrapper",o.value,a.value,u.value,c.value],style:[l.value],onPointerenter:L,onPointerleave:E},_.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0,onTouchstartPassive:b,onTouchend:D},s),{default:()=>{var I,R;return[cl(!1,"v-snackbar"),t.timer&&!v.value&&z("div",{key:"timer",class:"v-snackbar__timer"},[z(Wg,{ref:h,color:typeof t.timer=="string"?t.timer:"info",max:t.timeout,"model-value":f.time.value},null)]),N&&z("div",{key:"content",class:"v-snackbar__content",role:"status","aria-live":"polite"},[((I=n.text)==null?void 0:I.call(n))??t.text,(R=n.default)==null?void 0:R.call(n)]),n.actions&&z(Dn,{defaults:{VBtn:{variant:"text",ripple:!1,slim:!0}}},{default:()=>[z("div",{class:"v-snackbar__actions"},[n.actions({isActive:i})])]})]},activator:n.activator})}),CE({},d)}}),LE=Le({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function dn(t,e,n){return et()({name:t,props:LE({mode:n,origin:e}),setup(i,r){let{slots:s}=r;const o={onBeforeEnter(a){i.origin&&(a.style.transformOrigin=i.origin)},onLeave(a){if(i.leaveAbsolute){const{offsetTop:l,offsetLeft:c,offsetWidth:u,offsetHeight:f}=a;a._transitionInitialStyles={position:a.style.position,top:a.style.top,left:a.style.left,width:a.style.width,height:a.style.height},a.style.position="absolute",a.style.top=`${l}px`,a.style.left=`${c}px`,a.style.width=`${u}px`,a.style.height=`${f}px`}i.hideOnLeave&&a.style.setProperty("display","none","important")},onAfterLeave(a){if(i.leaveAbsolute&&(a!=null&&a._transitionInitialStyles)){const{position:l,top:c,left:u,width:f,height:d}=a._transitionInitialStyles;delete a._transitionInitialStyles,a.style.position=l||"",a.style.top=c||"",a.style.left=u||"",a.style.width=f||"",a.style.height=d||""}}};return()=>{const a=i.group?Wu:Er;return jn(a,{name:i.disabled?"":t,css:!i.disabled,...i.group?void 0:{mode:i.mode},...i.disabled?{}:o},s.default)}}})}function wv(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return et()({name:t,props:{mode:{type:String,default:n},disabled:Boolean,group:Boolean},setup(i,r){let{slots:s}=r;const o=i.group?Wu:Er;return()=>jn(o,{name:i.disabled?"":t,css:!i.disabled,...i.disabled?{}:e},s.default)}})}function Cv(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",i=bn(`offset-${n}`);return{onBeforeEnter(o){o._parent=o.parentNode,o._initialStyle={transition:o.style.transition,overflow:o.style.overflow,[n]:o.style[n]}},onEnter(o){const a=o._initialStyle;o.style.setProperty("transition","none","important"),o.style.overflow="hidden";const l=`${o[i]}px`;o.style[n]="0",o.offsetHeight,o.style.transition=a.transition,t&&o._parent&&o._parent.classList.add(t),requestAnimationFrame(()=>{o.style[n]=l})},onAfterEnter:s,onEnterCancelled:s,onLeave(o){o._initialStyle={transition:"",overflow:o.style.overflow,[n]:o.style[n]},o.style.overflow="hidden",o.style[n]=`${o[i]}px`,o.offsetHeight,requestAnimationFrame(()=>o.style[n]="0")},onAfterLeave:r,onLeaveCancelled:r};function r(o){t&&o._parent&&o._parent.classList.remove(t),s(o)}function s(o){const a=o._initialStyle[n];o.style.overflow=o._initialStyle.overflow,a!=null&&(o.style[n]=a),delete o._initialStyle}}dn("fab-transition","center center","out-in");dn("dialog-bottom-transition");dn("dialog-top-transition");dn("fade-transition");dn("scale-transition");dn("scroll-x-transition");dn("scroll-x-reverse-transition");dn("scroll-y-transition");dn("scroll-y-reverse-transition");dn("slide-x-transition");dn("slide-x-reverse-transition");dn("slide-y-transition");dn("slide-y-reverse-transition");const Rv=wv("expand-transition",Cv());wv("expand-x-transition",Cv("",!0));const IE=zt("b",null,"WebXR",-1),DE={__name:"ProjectCard",props:["title","subtitle","image","desc","route"],setup(t){const e=t,n=Ju(),i=nt(!1),r=nt(!1),s=()=>{e.route===gs[1].path?QM(()=>{n.push(e.route)},()=>{JM()?n.push(gs[2].path):r.value=!0}):n.push(e.route)};return(o,a)=>(zi(),no(mt,null,[z(Bb,{class:"mx-auto bg-white","max-width":"300","min-width":"300"},{default:St(()=>[z(gl,{color:"surface-variant",height:"150",src:t.image,cover:""},null,8,["src"]),z(sv,null,{default:St(()=>[vr(ga(t.title),1)]),_:1}),z(tu,null,{default:St(()=>[zt("div",null,ga(t.subtitle),1)]),_:1}),z(rv,null,{default:St(()=>[z(oi,{color:"orange-lighten-2",text:"Start",onClick:s}),z(eE),z(oi,{icon:i.value?"mdi-chevron-up":"mdi-chevron-down",onClick:a[0]||(a[0]=l=>i.value=!i.value)},null,8,["icon"])]),_:1}),z(Rv,null,{default:St(()=>[rs(zt("div",null,[z(Vb),z(tu,null,{default:St(()=>[vr(ga(t.desc),1)]),_:1})],512),[[Gu,i.value]])]),_:1})]),_:1}),z(Av,{modelValue:r.value,"onUpdate:modelValue":a[1]||(a[1]=l=>r.value=l),color:"yellow",timeout:1e4},{default:St(()=>[vr(" Your browser or device not supported Augmented Reality Engine "),IE]),_:1},8,["modelValue"])],64))}},Pv=Le({text:String,...ht(),...Ht()},"VToolbarTitle"),Lv=et()({name:"VToolbarTitle",props:Pv(),setup(t,e){let{slots:n}=e;return lt(()=>{const i=!!(n.default||n.text||t.text);return z(t.tag,{class:["v-toolbar-title",t.class],style:t.style},{default:()=>{var r;return[i&&z("div",{class:"v-toolbar-title__placeholder"},[n.text?n.text():t.text,(r=n.default)==null?void 0:r.call(n)])]}})}),{}}}),NE=[null,"prominent","default","comfortable","compact"],Iv=Le({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:t=>NE.includes(t)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...xo(),...ht(),...bo(),...hi(),...Ht({tag:"header"}),...un()},"VToolbar"),vh=et()({name:"VToolbar",props:Iv(),setup(t,e){var h;let{slots:n}=e;const{backgroundColorClasses:i,backgroundColorStyles:r}=xr(Rt(t,"color")),{borderClasses:s}=So(t),{elevationClasses:o}=Eo(t),{roundedClasses:a}=pi(t),{themeClasses:l}=fn(t),{rtlClasses:c}=Ms(),u=Je(!!(t.extended||(h=n.extension)!=null&&h.call(n))),f=ne(()=>parseInt(Number(t.height)+(t.density==="prominent"?Number(t.height):0)-(t.density==="comfortable"?8:0)-(t.density==="compact"?16:0),10)),d=ne(()=>u.value?parseInt(Number(t.extensionHeight)+(t.density==="prominent"?Number(t.extensionHeight):0)-(t.density==="comfortable"?4:0)-(t.density==="compact"?8:0),10):0);return nl({VBtn:{variant:"text"}}),lt(()=>{var p;const v=!!(t.title||n.title),g=!!(n.image||t.image),m=(p=n.extension)==null?void 0:p.call(n);return u.value=!!(t.extended||m),z(t.tag,{class:["v-toolbar",{"v-toolbar--absolute":t.absolute,"v-toolbar--collapse":t.collapse,"v-toolbar--flat":t.flat,"v-toolbar--floating":t.floating,[`v-toolbar--density-${t.density}`]:!0},i.value,s.value,o.value,a.value,l.value,c.value,t.class],style:[r.value,t.style]},{default:()=>[g&&z("div",{key:"image",class:"v-toolbar__image"},[n.image?z(Dn,{key:"image-defaults",disabled:!t.image,defaults:{VImg:{cover:!0,src:t.image}}},n.image):z(gl,{key:"image-img",cover:!0,src:t.image},null)]),z(Dn,{defaults:{VTabs:{height:Ve(f.value)}}},{default:()=>{var M,x,T;return[z("div",{class:"v-toolbar__content",style:{height:Ve(f.value)}},[n.prepend&&z("div",{class:"v-toolbar__prepend"},[(M=n.prepend)==null?void 0:M.call(n)]),v&&z(Lv,{key:"title",text:t.title},{text:n.title}),(x=n.default)==null?void 0:x.call(n),n.append&&z("div",{class:"v-toolbar__append"},[(T=n.append)==null?void 0:T.call(n)])])]}}),z(Dn,{defaults:{VTabs:{height:Ve(d.value)}}},{default:()=>[z(Rv,null,{default:()=>[u.value&&z("div",{class:"v-toolbar__extension",style:{height:Ve(d.value)}},[m])]})]})]})}),{contentHeight:f,extensionHeight:d}}}),UE=Le({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function OE(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:n}=e;let i=0;const r=nt(null),s=Je(0),o=Je(0),a=Je(0),l=Je(!1),c=Je(!1),u=ne(()=>Number(t.scrollThreshold)),f=ne(()=>as((u.value-s.value)/u.value||0)),d=()=>{const h=r.value;!h||n&&!n.value||(i=s.value,s.value="window"in h?h.pageYOffset:h.scrollTop,c.value=s.value<i,a.value=Math.abs(s.value-u.value))};return Ye(c,()=>{o.value=o.value||s.value}),Ye(l,()=>{o.value=0}),di(()=>{Ye(()=>t.scrollTarget,h=>{var g;const v=h?document.querySelector(h):window;v&&v!==r.value&&((g=r.value)==null||g.removeEventListener("scroll",d),r.value=v,r.value.addEventListener("scroll",d,{passive:!0}))},{immediate:!0})}),Yn(()=>{var h;(h=r.value)==null||h.removeEventListener("scroll",d)}),n&&Ye(n,d,{immediate:!0}),{scrollThreshold:u,currentScroll:s,currentThreshold:a,isScrollActive:l,scrollRatio:f,isScrollingUp:c,savedScroll:o}}function Dv(){const t=Je(!1);return di(()=>{window.requestAnimationFrame(()=>{t.value=!0})}),{ssrBootStyles:ne(()=>t.value?void 0:{transition:"none !important"}),isBooted:_s(t)}}const FE=Le({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:t=>["top","bottom"].includes(t)},...Iv(),...GS(),...UE(),height:{type:[Number,String],default:64}},"VAppBar"),BE=et()({name:"VAppBar",props:FE(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const i=nt(),r=Ss(t,"modelValue"),s=ne(()=>{var T;const x=new Set(((T=t.scrollBehavior)==null?void 0:T.split(" "))??[]);return{hide:x.has("hide"),fullyHide:x.has("fully-hide"),inverted:x.has("inverted"),collapse:x.has("collapse"),elevate:x.has("elevate"),fadeImage:x.has("fade-image")}}),o=ne(()=>{const x=s.value;return x.hide||x.fullyHide||x.inverted||x.collapse||x.elevate||x.fadeImage||!r.value}),{currentScroll:a,scrollThreshold:l,isScrollingUp:c,scrollRatio:u}=OE(t,{canScroll:o}),f=ne(()=>s.value.hide||s.value.fullyHide),d=ne(()=>t.collapse||s.value.collapse&&(s.value.inverted?u.value>0:u.value===0)),h=ne(()=>t.flat||s.value.fullyHide&&!r.value||s.value.elevate&&(s.value.inverted?a.value>0:a.value===0)),v=ne(()=>s.value.fadeImage?s.value.inverted?1-u.value:u.value:void 0),g=ne(()=>{var L,E;const x=Number(((L=i.value)==null?void 0:L.contentHeight)??t.height),T=Number(((E=i.value)==null?void 0:E.extensionHeight)??0);return f.value?a.value<l.value||s.value.fullyHide?x+T:x:x+T});xs(ne(()=>!!t.scrollBehavior),()=>{Un(()=>{f.value?s.value.inverted?r.value=a.value>l.value:r.value=c.value||a.value<l.value:r.value=!0})});const{ssrBootStyles:m}=Dv(),{layoutItemStyles:p,layoutIsReady:M}=WS({id:t.name,order:ne(()=>parseInt(t.order,10)),position:Rt(t,"location"),layoutSize:g,elementSize:Je(void 0),active:r,absolute:Rt(t,"absolute")});return lt(()=>{const x=vh.filterProps(t);return z(vh,Vt({ref:i,class:["v-app-bar",{"v-app-bar--bottom":t.location==="bottom"},t.class],style:[{...p.value,"--v-toolbar-image-opacity":v.value,height:void 0,...m.value},t.style]},x,{collapse:d.value,flat:h.value}),n)}),M}}),kE=et()({name:"VAppBarTitle",props:Pv(),setup(t,e){let{slots:n}=e;return lt(()=>z(Lv,Vt(t,{class:"v-app-bar-title"}),n)),{}}}),VE=Le({...ht(),...Tr(),...Tg()},"VLayout"),zE=et()({name:"VLayout",props:VE(),setup(t,e){let{slots:n}=e;const{layoutClasses:i,layoutStyles:r,getLayoutItem:s,items:o,layoutRef:a}=wg(t),{dimensionStyles:l}=Ar(t);return lt(()=>z("div",{ref:a,class:[i.value,t.class],style:[l.value,r.value,t.style]},[z(ym,null,{default:()=>{var c;return[z(mt,null,[(c=n.default)==null?void 0:c.call(n)])]}})])),{getLayoutItem:s,items:o}}}),HE=Le({scrollable:Boolean,...ht(),...Tr(),...Ht({tag:"main"})},"VMain"),Nv=et()({name:"VMain",props:HE(),setup(t,e){let{slots:n}=e;const{dimensionStyles:i}=Ar(t),{mainStyles:r,layoutIsReady:s}=Ag(),{ssrBootStyles:o}=Dv();return lt(()=>z(t.tag,{class:["v-main",{"v-main--scrollable":t.scrollable},t.class],style:[r.value,o.value,i.value,t.style]},{default:()=>{var a,l;return[t.scrollable?z("div",{class:"v-main__scroller"},[(a=n.default)==null?void 0:a.call(n)]):(l=n.default)==null?void 0:l.call(n)]}})),s}}),GE=ys({__name:"Main",setup(t){const e=[{title:"Augmented reality",subtitle:"Augmented reality project, based of WebXR",image:"eidosmedia-ar.png",desc:"Here should be description",route:gs[1].path},{title:"Tracker AR",subtitle:"video/gps tracker",image:"tesla-detection.jpg",desc:"This demo present tracking your phone position with captured video",route:gs[3].path}];return(n,i)=>{const r=DE;return zi(),no(mt,null,[z(BE,{color:"primary",density:"compact"},{default:St(()=>[z(kE,null,{default:St(()=>[vr("Projects | IV")]),_:1})]),_:1}),z(zE,null,{default:St(()=>[z(Nv,null,{default:St(()=>[z(Hb,{fluid:""},{default:St(()=>[z(Qb,{justify:"center"},{default:St(()=>[(zi(),no(mt,null,N0(e,s=>z($b,{key:s.title,cols:"auto"},{default:St(()=>[z(r,{title:s.title,subtitle:s.subtitle,desc:s.desc,image:s.image,route:s.route},null,8,["title","subtitle","desc","image","route"])]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})]),_:1})],64)}}});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nf="164",WE=0,_h=1,XE=2,Uv=1,$E=2,ri=3,Gi=0,Jt=1,si=2,Bi=0,es=1,yh=2,xh=3,Sh=4,qE=5,ur=100,YE=101,jE=102,KE=103,ZE=104,JE=200,QE=201,eT=202,tT=203,ru=204,su=205,nT=206,iT=207,rT=208,sT=209,oT=210,aT=211,lT=212,cT=213,uT=214,fT=0,dT=1,hT=2,Va=3,pT=4,mT=5,gT=6,vT=7,rf=0,_T=1,yT=2,ki=0,xT=1,ST=2,MT=3,bT=4,ET=5,TT=6,AT=7,Ov=300,fs=301,ds=302,ou=303,au=304,vl=306,lu=1e3,hr=1001,cu=1002,xn=1003,wT=1004,$o=1005,Pn=1006,Yl=1007,pr=1008,Wi=1009,CT=1010,RT=1011,Fv=1012,Bv=1013,hs=1014,Ni=1015,_l=1016,kv=1017,Vv=1018,wo=1020,PT=35902,LT=1021,IT=1022,Wn=1023,DT=1024,NT=1025,ts=1026,fo=1027,UT=1028,zv=1029,OT=1030,Hv=1031,Gv=1033,jl=33776,Kl=33777,Zl=33778,Jl=33779,Mh=35840,bh=35841,Eh=35842,Th=35843,Ah=36196,wh=37492,Ch=37496,Rh=37808,Ph=37809,Lh=37810,Ih=37811,Dh=37812,Nh=37813,Uh=37814,Oh=37815,Fh=37816,Bh=37817,kh=37818,Vh=37819,zh=37820,Hh=37821,Ql=36492,Gh=36494,Wh=36495,FT=36283,Xh=36284,$h=36285,qh=36286,BT=3200,kT=3201,Wv=0,VT=1,Ii="",Bn="srgb",ji="srgb-linear",sf="display-p3",yl="display-p3-linear",za="linear",ut="srgb",Ha="rec709",Ga="p3",Pr=7680,Yh=519,zT=512,HT=513,GT=514,Xv=515,WT=516,XT=517,$T=518,qT=519,jh=35044,Kh="300 es",ai=2e3,Wa=2001;class bs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ec=Math.PI/180,uu=180/Math.PI;function Co(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[t&255]+Ot[t>>8&255]+Ot[t>>16&255]+Ot[t>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[n&63|128]+Ot[n>>8&255]+"-"+Ot[n>>16&255]+Ot[n>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Zt(t,e,n){return Math.max(e,Math.min(n,t))}function YT(t,e){return(t%e+e)%e}function tc(t,e,n){return(1-n)*t+n*e}function Is(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Qe{constructor(e=0,n=0){Qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],v=i[8],g=r[0],m=r[3],p=r[6],M=r[1],x=r[4],T=r[7],L=r[2],E=r[5],b=r[8];return s[0]=o*g+a*M+l*L,s[3]=o*m+a*x+l*E,s[6]=o*p+a*T+l*b,s[1]=c*g+u*M+f*L,s[4]=c*m+u*x+f*E,s[7]=c*p+u*T+f*b,s[2]=d*g+h*M+v*L,s[5]=d*m+h*x+v*E,s[8]=d*p+h*T+v*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,h=c*s-o*l,v=n*f+i*d+r*h;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=f*g,e[1]=(r*c-u*i)*g,e[2]=(a*i-r*o)*g,e[3]=d*g,e[4]=(u*n-r*l)*g,e[5]=(r*s-a*n)*g,e[6]=h*g,e[7]=(i*l-c*n)*g,e[8]=(o*n-i*s)*g,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(nc.makeScale(e,n)),this}rotate(e){return this.premultiply(nc.makeRotation(-e)),this}translate(e,n){return this.premultiply(nc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nc=new Ge;function $v(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Xa(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function jT(){const t=Xa("canvas");return t.style.display="block",t}const Zh={};function KT(t){t in Zh||(Zh[t]=!0,console.warn(t))}const Jh=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Qh=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),qo={[ji]:{transfer:za,primaries:Ha,toReference:t=>t,fromReference:t=>t},[Bn]:{transfer:ut,primaries:Ha,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[yl]:{transfer:za,primaries:Ga,toReference:t=>t.applyMatrix3(Qh),fromReference:t=>t.applyMatrix3(Jh)},[sf]:{transfer:ut,primaries:Ga,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Qh),fromReference:t=>t.applyMatrix3(Jh).convertLinearToSRGB()}},ZT=new Set([ji,yl]),ot={enabled:!0,_workingColorSpace:ji,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!ZT.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=qo[e].toReference,r=qo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return qo[t].primaries},getTransfer:function(t){return t===Ii?za:qo[t].transfer}};function ns(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ic(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Lr;class JT{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Lr===void 0&&(Lr=Xa("canvas")),Lr.width=e.width,Lr.height=e.height;const i=Lr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Lr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Xa("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ns(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ns(n[i]/255)*255):n[i]=ns(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let QT=0;class qv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:QT++}),this.uuid=Co(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(rc(r[o].image)):s.push(rc(r[o]))}else s=rc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function rc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?JT.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eA=0;class Qt extends bs{constructor(e=Qt.DEFAULT_IMAGE,n=Qt.DEFAULT_MAPPING,i=hr,r=hr,s=Pn,o=pr,a=Wn,l=Wi,c=Qt.DEFAULT_ANISOTROPY,u=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eA++}),this.uuid=Co(),this.name="",this.source=new qv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ov)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lu:e.x=e.x-Math.floor(e.x);break;case hr:e.x=e.x<0?0:1;break;case cu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lu:e.y=e.y-Math.floor(e.y);break;case hr:e.y=e.y<0?0:1;break;case cu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=Ov;Qt.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,n=0,i=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],v=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+g)<.1&&Math.abs(v+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,T=(h+1)/2,L=(p+1)/2,E=(u+d)/4,b=(f+g)/4,D=(v+m)/4;return x>T&&x>L?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=E/i,s=b/i):T>L?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=E/r,s=D/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=b/s,r=D/s),this.set(i,r,s,n),this}let M=Math.sqrt((m-v)*(m-v)+(f-g)*(f-g)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-v)/M,this.y=(f-g)/M,this.z=(d-u)/M,this.w=Math.acos((c+h+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tA extends bs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Qt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new qv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mr extends tA{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Yv extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nA extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ro{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],h=s[o+1],v=s[o+2],g=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=h,e[n+2]=v,e[n+3]=g;return}if(f!==g||l!==d||c!==h||u!==v){let m=1-a;const p=l*d+c*h+u*v+f*g,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const L=Math.sqrt(x),E=Math.atan2(L,p*M);m=Math.sin(m*E)/L,a=Math.sin(a*E)/L}const T=a*M;if(l=l*m+d*T,c=c*m+h*T,u=u*m+v*T,f=f*m+g*T,m===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=L,c*=L,u*=L,f*=L}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],h=s[o+2],v=s[o+3];return e[n]=a*v+u*f+l*h-c*d,e[n+1]=l*v+u*d+c*f-a*h,e[n+2]=c*v+u*h+a*d-l*f,e[n+3]=u*v-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),h=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*h*v,this._y=c*h*f-d*u*v,this._z=c*u*v+d*h*f,this._w=c*u*f-d*h*v;break;case"YXZ":this._x=d*u*f+c*h*v,this._y=c*h*f-d*u*v,this._z=c*u*v-d*h*f,this._w=c*u*f+d*h*v;break;case"ZXY":this._x=d*u*f-c*h*v,this._y=c*h*f+d*u*v,this._z=c*u*v+d*h*f,this._w=c*u*f-d*h*v;break;case"ZYX":this._x=d*u*f-c*h*v,this._y=c*h*f+d*u*v,this._z=c*u*v-d*h*f,this._w=c*u*f+d*h*v;break;case"YZX":this._x=d*u*f+c*h*v,this._y=c*h*f+d*u*v,this._z=c*u*v-d*h*f,this._w=c*u*f-d*h*v;break;case"XZY":this._x=d*u*f-c*h*v,this._y=c*h*f-d*u*v,this._z=c*u*v+d*h*f,this._w=c*u*f+d*h*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-n;return this._w=h*o+n*this._w,this._x=h*i+n*this._x,this._y=h*r+n*this._y,this._z=h*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,n=0,i=0){J.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ep.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ep.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return sc.copy(this).projectOnVector(e),this.sub(sc)}reflect(e){return this.sub(sc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sc=new J,ep=new Ro;class Po{constructor(e=new J(1/0,1/0,1/0),n=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(An.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(An.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=An.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,An):An.fromBufferAttribute(s,o),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yo.copy(i.boundingBox)),Yo.applyMatrix4(e.matrixWorld),this.union(Yo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ds),jo.subVectors(this.max,Ds),Ir.subVectors(e.a,Ds),Dr.subVectors(e.b,Ds),Nr.subVectors(e.c,Ds),xi.subVectors(Dr,Ir),Si.subVectors(Nr,Dr),tr.subVectors(Ir,Nr);let n=[0,-xi.z,xi.y,0,-Si.z,Si.y,0,-tr.z,tr.y,xi.z,0,-xi.x,Si.z,0,-Si.x,tr.z,0,-tr.x,-xi.y,xi.x,0,-Si.y,Si.x,0,-tr.y,tr.x,0];return!oc(n,Ir,Dr,Nr,jo)||(n=[1,0,0,0,1,0,0,0,1],!oc(n,Ir,Dr,Nr,jo))?!1:(Ko.crossVectors(xi,Si),n=[Ko.x,Ko.y,Ko.z],oc(n,Ir,Dr,Nr,jo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jn=[new J,new J,new J,new J,new J,new J,new J,new J],An=new J,Yo=new Po,Ir=new J,Dr=new J,Nr=new J,xi=new J,Si=new J,tr=new J,Ds=new J,jo=new J,Ko=new J,nr=new J;function oc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){nr.fromArray(t,s);const a=r.x*Math.abs(nr.x)+r.y*Math.abs(nr.y)+r.z*Math.abs(nr.z),l=e.dot(nr),c=n.dot(nr),u=i.dot(nr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const iA=new Po,Ns=new J,ac=new J;class of{constructor(e=new J,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):iA.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ns.subVectors(e,this.center);const n=Ns.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ns,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ac.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ns.copy(e.center).add(ac)),this.expandByPoint(Ns.copy(e.center).sub(ac))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new J,lc=new J,Zo=new J,Mi=new J,cc=new J,Jo=new J,uc=new J;class rA{constructor(e=new J,n=new J(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Qn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,n),Qn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){lc.copy(e).add(n).multiplyScalar(.5),Zo.copy(n).sub(e).normalize(),Mi.copy(this.origin).sub(lc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Zo),a=Mi.dot(this.direction),l=-Mi.dot(Zo),c=Mi.lengthSq(),u=Math.abs(1-o*o);let f,d,h,v;if(u>0)if(f=o*l-a,d=o*a-l,v=s*u,f>=0)if(d>=-v)if(d<=v){const g=1/u;f*=g,d*=g,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(lc).addScaledVector(Zo,d),h}intersectSphere(e,n){Qn.subVectors(e.center,this.origin);const i=Qn.dot(this.direction),r=Qn.dot(Qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,n,i,r,s){cc.subVectors(n,e),Jo.subVectors(i,e),uc.crossVectors(cc,Jo);let o=this.direction.dot(uc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mi.subVectors(this.origin,e);const l=a*this.direction.dot(Jo.crossVectors(Mi,Jo));if(l<0)return null;const c=a*this.direction.dot(cc.cross(Mi));if(c<0||l+c>o)return null;const u=-a*Mi.dot(uc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,n,i,r,s,o,a,l,c,u,f,d,h,v,g,m){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,h,v,g,m)}set(e,n,i,r,s,o,a,l,c,u,f,d,h,v,g,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=v,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ur.setFromMatrixColumn(e,0).length(),s=1/Ur.setFromMatrixColumn(e,1).length(),o=1/Ur.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,h=o*f,v=a*u,g=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=h+v*c,n[5]=d-g*c,n[9]=-a*l,n[2]=g-d*c,n[6]=v+h*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,v=c*u,g=c*f;n[0]=d+g*a,n[4]=v*a-h,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=h*a-v,n[6]=g+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,v=c*u,g=c*f;n[0]=d-g*a,n[4]=-o*f,n[8]=v+h*a,n[1]=h+v*a,n[5]=o*u,n[9]=g-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,h=o*f,v=a*u,g=a*f;n[0]=l*u,n[4]=v*c-h,n[8]=d*c+g,n[1]=l*f,n[5]=g*c+d,n[9]=h*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*c,v=a*l,g=a*c;n[0]=l*u,n[4]=g-d*f,n[8]=v*f+h,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=h*f+v,n[10]=d-g*f}else if(e.order==="XZY"){const d=o*l,h=o*c,v=a*l,g=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+g,n[5]=o*u,n[9]=h*f-v,n[2]=v*f-h,n[6]=a*u,n[10]=g*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sA,e,oA)}lookAt(e,n,i){const r=this.elements;return nn.subVectors(e,n),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),bi.crossVectors(i,nn),bi.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),bi.crossVectors(i,nn)),bi.normalize(),Qo.crossVectors(nn,bi),r[0]=bi.x,r[4]=Qo.x,r[8]=nn.x,r[1]=bi.y,r[5]=Qo.y,r[9]=nn.y,r[2]=bi.z,r[6]=Qo.z,r[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],v=i[2],g=i[6],m=i[10],p=i[14],M=i[3],x=i[7],T=i[11],L=i[15],E=r[0],b=r[4],D=r[8],S=r[12],_=r[1],N=r[5],I=r[9],R=r[13],k=r[2],q=r[6],ee=r[10],ie=r[14],G=r[3],fe=r[7],me=r[11],ve=r[15];return s[0]=o*E+a*_+l*k+c*G,s[4]=o*b+a*N+l*q+c*fe,s[8]=o*D+a*I+l*ee+c*me,s[12]=o*S+a*R+l*ie+c*ve,s[1]=u*E+f*_+d*k+h*G,s[5]=u*b+f*N+d*q+h*fe,s[9]=u*D+f*I+d*ee+h*me,s[13]=u*S+f*R+d*ie+h*ve,s[2]=v*E+g*_+m*k+p*G,s[6]=v*b+g*N+m*q+p*fe,s[10]=v*D+g*I+m*ee+p*me,s[14]=v*S+g*R+m*ie+p*ve,s[3]=M*E+x*_+T*k+L*G,s[7]=M*b+x*N+T*q+L*fe,s[11]=M*D+x*I+T*ee+L*me,s[15]=M*S+x*R+T*ie+L*ve,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],v=e[3],g=e[7],m=e[11],p=e[15];return v*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*h-i*l*h)+g*(+n*l*h-n*c*d+s*o*d-r*o*h+r*c*u-s*l*u)+m*(+n*c*f-n*a*h-s*o*f+i*o*h+s*a*u-i*c*u)+p*(-r*a*u-n*l*f+n*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],v=e[12],g=e[13],m=e[14],p=e[15],M=f*m*c-g*d*c+g*l*h-a*m*h-f*l*p+a*d*p,x=v*d*c-u*m*c-v*l*h+o*m*h+u*l*p-o*d*p,T=u*g*c-v*f*c+v*a*h-o*g*h-u*a*p+o*f*p,L=v*f*l-u*g*l-v*a*d+o*g*d+u*a*m-o*f*m,E=n*M+i*x+r*T+s*L;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=M*b,e[1]=(g*d*s-f*m*s-g*r*h+i*m*h+f*r*p-i*d*p)*b,e[2]=(a*m*s-g*l*s+g*r*c-i*m*c-a*r*p+i*l*p)*b,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*h-i*l*h)*b,e[4]=x*b,e[5]=(u*m*s-v*d*s+v*r*h-n*m*h-u*r*p+n*d*p)*b,e[6]=(v*l*s-o*m*s-v*r*c+n*m*c+o*r*p-n*l*p)*b,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*h+n*l*h)*b,e[8]=T*b,e[9]=(v*f*s-u*g*s-v*i*h+n*g*h+u*i*p-n*f*p)*b,e[10]=(o*g*s-v*a*s+v*i*c-n*g*c-o*i*p+n*a*p)*b,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*h-n*a*h)*b,e[12]=L*b,e[13]=(u*g*r-v*f*r+v*i*d-n*g*d-u*i*m+n*f*m)*b,e[14]=(v*a*r-o*g*r-v*i*l+n*g*l+o*i*m-n*a*m)*b,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,h=s*u,v=s*f,g=o*u,m=o*f,p=a*f,M=l*c,x=l*u,T=l*f,L=i.x,E=i.y,b=i.z;return r[0]=(1-(g+p))*L,r[1]=(h+T)*L,r[2]=(v-x)*L,r[3]=0,r[4]=(h-T)*E,r[5]=(1-(d+p))*E,r[6]=(m+M)*E,r[7]=0,r[8]=(v+x)*b,r[9]=(m-M)*b,r[10]=(1-(d+g))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Ur.set(r[0],r[1],r[2]).length();const o=Ur.set(r[4],r[5],r[6]).length(),a=Ur.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],wn.copy(this);const c=1/s,u=1/o,f=1/a;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=u,wn.elements[5]*=u,wn.elements[6]*=u,wn.elements[8]*=f,wn.elements[9]*=f,wn.elements[10]*=f,n.setFromRotationMatrix(wn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ai){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let h,v;if(a===ai)h=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Wa)h=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ai){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),d=(n+e)*c,h=(i+r)*u;let v,g;if(a===ai)v=(o+s)*f,g=-2*f;else if(a===Wa)v=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ur=new J,wn=new Tt,sA=new J(0,0,0),oA=new J(1,1,1),bi=new J,Qo=new J,nn=new J,tp=new Tt,np=new Ro;class qn{constructor(e=0,n=0,i=0,r=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return tp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return np.setFromEuler(this),this.setFromQuaternion(np,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class jv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let aA=0;const ip=new J,Or=new Ro,ei=new Tt,ea=new J,Us=new J,lA=new J,cA=new Ro,rp=new J(1,0,0),sp=new J(0,1,0),op=new J(0,0,1),ap={type:"added"},uA={type:"removed"},Fr={type:"childadded",child:null},fc={type:"childremoved",child:null};class Yt extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:aA++}),this.uuid=Co(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new J,n=new qn,i=new Ro,r=new J(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Ge}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Or.setFromAxisAngle(e,n),this.quaternion.multiply(Or),this}rotateOnWorldAxis(e,n){return Or.setFromAxisAngle(e,n),this.quaternion.premultiply(Or),this}rotateX(e){return this.rotateOnAxis(rp,e)}rotateY(e){return this.rotateOnAxis(sp,e)}rotateZ(e){return this.rotateOnAxis(op,e)}translateOnAxis(e,n){return ip.copy(e).applyQuaternion(this.quaternion),this.position.add(ip.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(rp,e)}translateY(e){return this.translateOnAxis(sp,e)}translateZ(e){return this.translateOnAxis(op,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ea.copy(e):ea.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Us,ea,this.up):ei.lookAt(ea,Us,this.up),this.quaternion.setFromRotationMatrix(ei),r&&(ei.extractRotation(r.matrixWorld),Or.setFromRotationMatrix(ei),this.quaternion.premultiply(Or.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ap),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(uA),fc.child=e,this.dispatchEvent(fc),fc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ap),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,e,lA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,cA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Yt.DEFAULT_UP=new J(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new J,ti=new J,dc=new J,ni=new J,Br=new J,kr=new J,lp=new J,hc=new J,pc=new J,mc=new J;class Hn{constructor(e=new J,n=new J,i=new J){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Cn.subVectors(e,n),r.cross(Cn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Cn.subVectors(r,n),ti.subVectors(i,n),dc.subVectors(e,n);const o=Cn.dot(Cn),a=Cn.dot(ti),l=Cn.dot(dc),c=ti.dot(ti),u=ti.dot(dc),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,v=(o*u-a*l)*d;return s.set(1-h-v,v,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ni.x),l.addScaledVector(o,ni.y),l.addScaledVector(a,ni.z),l)}static isFrontFacing(e,n,i,r){return Cn.subVectors(i,n),ti.subVectors(e,n),Cn.cross(ti).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Cn.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Hn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Hn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Br.subVectors(r,i),kr.subVectors(s,i),hc.subVectors(e,i);const l=Br.dot(hc),c=kr.dot(hc);if(l<=0&&c<=0)return n.copy(i);pc.subVectors(e,r);const u=Br.dot(pc),f=kr.dot(pc);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Br,o);mc.subVectors(e,s);const h=Br.dot(mc),v=kr.dot(mc);if(v>=0&&h<=v)return n.copy(s);const g=h*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(kr,a);const m=u*v-h*f;if(m<=0&&f-u>=0&&h-v>=0)return lp.subVectors(s,r),a=(f-u)/(f-u+(h-v)),n.copy(r).addScaledVector(lp,a);const p=1/(m+g+d);return o=g*p,a=d*p,n.copy(i).addScaledVector(Br,o).addScaledVector(kr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Kv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},ta={h:0,s:0,l:0};function gc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ot.workingColorSpace){return this.r=e,this.g=n,this.b=i,ot.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ot.workingColorSpace){if(e=YT(e,1),n=Zt(n,0,1),i=Zt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=gc(o,s,e+1/3),this.g=gc(o,s,e),this.b=gc(o,s,e-1/3)}return ot.toWorkingColorSpace(this,r),this}setStyle(e,n=Bn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Bn){const i=Kv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}copyLinearToSRGB(e){return this.r=ic(e.r),this.g=ic(e.g),this.b=ic(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bn){return ot.fromWorkingColorSpace(Ft.copy(this),e),Math.round(Zt(Ft.r*255,0,255))*65536+Math.round(Zt(Ft.g*255,0,255))*256+Math.round(Zt(Ft.b*255,0,255))}getHexString(e=Bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ot.workingColorSpace){ot.fromWorkingColorSpace(Ft.copy(this),n);const i=Ft.r,r=Ft.g,s=Ft.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ot.workingColorSpace){return ot.fromWorkingColorSpace(Ft.copy(this),n),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Bn){ot.fromWorkingColorSpace(Ft.copy(this),e);const n=Ft.r,i=Ft.g,r=Ft.b;return e!==Bn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+n,Ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ei),e.getHSL(ta);const i=tc(Ei.h,ta.h,n),r=tc(Ei.s,ta.s,n),s=tc(Ei.l,ta.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Ze;Ze.NAMES=Kv;let fA=0;class Lo extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fA++}),this.uuid=Co(),this.name="",this.type="Material",this.blending=es,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ru,this.blendDst=su,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Va,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pr,this.stencilZFail=Pr,this.stencilZPass=Pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(i.blending=this.blending),this.side!==Gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ru&&(i.blendSrc=this.blendSrc),this.blendDst!==su&&(i.blendDst=this.blendDst),this.blendEquation!==ur&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Va&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Pr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Pr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class af extends Lo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=rf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new J,na=new Qe;class $n{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=jh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return KT("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)na.fromBufferAttribute(this,n),na.applyMatrix3(e),this.setXY(n,na.x,na.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix3(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix4(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyNormalMatrix(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.transformDirection(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Is(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=jt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Is(n,this.array)),n}setX(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Is(n,this.array)),n}setY(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Is(n,this.array)),n}setZ(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Is(n,this.array)),n}setW(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),i=jt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),i=jt(i,this.array),r=jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),i=jt(i,this.array),r=jt(r,this.array),s=jt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jh&&(e.usage=this.usage),e}}class Zv extends $n{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Jv extends $n{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ln extends $n{constructor(e,n,i){super(new Float32Array(e),n,i)}}let dA=0;const mn=new Tt,vc=new Yt,Vr=new J,rn=new Po,Os=new Po,Ct=new J;class mi extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dA++}),this.uuid=Co(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($v(e)?Jv:Zv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,n,i){return mn.makeTranslation(e,n,i),this.applyMatrix4(mn),this}scale(e,n,i){return mn.makeScale(e,n,i),this.applyMatrix4(mn),this}lookAt(e){return vc.lookAt(e),vc.updateMatrix(),this.applyMatrix4(vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vr).negate(),this.translate(Vr.x,Vr.y,Vr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ln(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Po);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new of);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const i=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Os.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(rn.min,Os.min),rn.expandByPoint(Ct),Ct.addVectors(rn.max,Os.max),rn.expandByPoint(Ct)):(rn.expandByPoint(Os.min),rn.expandByPoint(Os.max))}rn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ct));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ct.fromBufferAttribute(a,c),l&&(Vr.fromBufferAttribute(e,c),Ct.add(Vr)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $n(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new J,l[D]=new J;const c=new J,u=new J,f=new J,d=new Qe,h=new Qe,v=new Qe,g=new J,m=new J;function p(D,S,_){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,S),f.fromBufferAttribute(i,_),d.fromBufferAttribute(s,D),h.fromBufferAttribute(s,S),v.fromBufferAttribute(s,_),u.sub(c),f.sub(c),h.sub(d),v.sub(d);const N=1/(h.x*v.y-v.x*h.y);isFinite(N)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(f,-h.y).multiplyScalar(N),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-v.x).multiplyScalar(N),a[D].add(g),a[S].add(g),a[_].add(g),l[D].add(m),l[S].add(m),l[_].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let D=0,S=M.length;D<S;++D){const _=M[D],N=_.start,I=_.count;for(let R=N,k=N+I;R<k;R+=3)p(e.getX(R+0),e.getX(R+1),e.getX(R+2))}const x=new J,T=new J,L=new J,E=new J;function b(D){L.fromBufferAttribute(r,D),E.copy(L);const S=a[D];x.copy(S),x.sub(L.multiplyScalar(L.dot(S))).normalize(),T.crossVectors(E,S);const N=T.dot(l[D])<0?-1:1;o.setXYZW(D,x.x,x.y,x.z,N)}for(let D=0,S=M.length;D<S;++D){const _=M[D],N=_.start,I=_.count;for(let R=N,k=N+I;R<k;R+=3)b(e.getX(R+0)),b(e.getX(R+1)),b(e.getX(R+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $n(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new J,s=new J,o=new J,a=new J,l=new J,c=new J,u=new J,f=new J;if(e)for(let d=0,h=e.count;d<h;d+=3){const v=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,g),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=n.count;d<h;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ct.fromBufferAttribute(e,n),Ct.normalize(),e.setXYZ(n,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,v=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?h=l[g]*a.data.stride+a.offset:h=l[g]*u;for(let p=0;p<u;p++)d[v++]=c[h++]}return new $n(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new mi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cp=new Tt,ir=new rA,ia=new of,up=new J,zr=new J,Hr=new J,Gr=new J,_c=new J,ra=new J,sa=new Qe,oa=new Qe,aa=new Qe,fp=new J,dp=new J,hp=new J,la=new J,ca=new J;class Ln extends Yt{constructor(e=new mi,n=new af){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ra.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(_c.fromBufferAttribute(f,e),o?ra.addScaledVector(_c,u):ra.addScaledVector(_c.sub(n),u))}n.add(ra)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ia.copy(i.boundingSphere),ia.applyMatrix4(s),ir.copy(e.ray).recast(e.near),!(ia.containsPoint(ir.origin)===!1&&(ir.intersectSphere(ia,up)===null||ir.origin.distanceToSquared(up)>(e.far-e.near)**2))&&(cp.copy(s).invert(),ir.copy(e.ray).applyMatrix4(cp),!(i.boundingBox!==null&&ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ir)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const m=d[v],p=o[m.materialIndex],M=Math.max(m.start,h.start),x=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let T=M,L=x;T<L;T+=3){const E=a.getX(T),b=a.getX(T+1),D=a.getX(T+2);r=ua(this,p,e,i,c,u,f,E,b,D),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let m=v,p=g;m<p;m+=3){const M=a.getX(m),x=a.getX(m+1),T=a.getX(m+2);r=ua(this,o,e,i,c,u,f,M,x,T),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const m=d[v],p=o[m.materialIndex],M=Math.max(m.start,h.start),x=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let T=M,L=x;T<L;T+=3){const E=T,b=T+1,D=T+2;r=ua(this,p,e,i,c,u,f,E,b,D),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let m=v,p=g;m<p;m+=3){const M=m,x=m+1,T=m+2;r=ua(this,o,e,i,c,u,f,M,x,T),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function hA(t,e,n,i,r,s,o,a){let l;if(e.side===Jt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Gi,a),l===null)return null;ca.copy(a),ca.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ca);return c<n.near||c>n.far?null:{distance:c,point:ca.clone(),object:t}}function ua(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,zr),t.getVertexPosition(l,Hr),t.getVertexPosition(c,Gr);const u=hA(t,e,n,i,zr,Hr,Gr,la);if(u){r&&(sa.fromBufferAttribute(r,a),oa.fromBufferAttribute(r,l),aa.fromBufferAttribute(r,c),u.uv=Hn.getInterpolation(la,zr,Hr,Gr,sa,oa,aa,new Qe)),s&&(sa.fromBufferAttribute(s,a),oa.fromBufferAttribute(s,l),aa.fromBufferAttribute(s,c),u.uv1=Hn.getInterpolation(la,zr,Hr,Gr,sa,oa,aa,new Qe)),o&&(fp.fromBufferAttribute(o,a),dp.fromBufferAttribute(o,l),hp.fromBufferAttribute(o,c),u.normal=Hn.getInterpolation(la,zr,Hr,Gr,fp,dp,hp,new J),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new J,materialIndex:0};Hn.getNormal(zr,Hr,Gr,f.normal),u.face=f}return u}class Io extends mi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ln(c,3)),this.setAttribute("normal",new ln(u,3)),this.setAttribute("uv",new ln(f,2));function v(g,m,p,M,x,T,L,E,b,D,S){const _=T/b,N=L/D,I=T/2,R=L/2,k=E/2,q=b+1,ee=D+1;let ie=0,G=0;const fe=new J;for(let me=0;me<ee;me++){const ve=me*N-R;for(let Ae=0;Ae<q;Ae++){const $e=Ae*_-I;fe[g]=$e*M,fe[m]=ve*x,fe[p]=k,c.push(fe.x,fe.y,fe.z),fe[g]=0,fe[m]=0,fe[p]=E>0?1:-1,u.push(fe.x,fe.y,fe.z),f.push(Ae/b),f.push(1-me/D),ie+=1}}for(let me=0;me<D;me++)for(let ve=0;ve<b;ve++){const Ae=d+ve+q*me,$e=d+ve+q*(me+1),te=d+(ve+1)+q*(me+1),oe=d+(ve+1)+q*me;l.push(Ae,$e,oe),l.push($e,te,oe),G+=6}a.addGroup(h,G,S),h+=G,d+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Io(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ps(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Xt(t){const e={};for(let n=0;n<t.length;n++){const i=ps(t[n]);for(const r in i)e[r]=i[r]}return e}function pA(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Qv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const mA={clone:ps,merge:Xt};var gA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends Lo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gA,this.fragmentShader=vA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ps(e.uniforms),this.uniformsGroups=pA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class e_ extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=ai}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new J,pp=new Qe,mp=new Qe;class gn extends e_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=uu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ec*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return uu*2*Math.atan(Math.tan(ec*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,n){return this.getViewBounds(e,pp,mp),n.subVectors(mp,pp)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ec*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Wr=-90,Xr=1;class _A extends Yt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(Wr,Xr,e,n);r.layers=this.layers,this.add(r);const s=new gn(Wr,Xr,e,n);s.layers=this.layers,this.add(s);const o=new gn(Wr,Xr,e,n);o.layers=this.layers,this.add(o);const a=new gn(Wr,Xr,e,n);a.layers=this.layers,this.add(a);const l=new gn(Wr,Xr,e,n);l.layers=this.layers,this.add(l);const c=new gn(Wr,Xr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,h),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class t_ extends Qt{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:fs,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yA extends Mr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new t_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Pn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Io(5,5,5),s=new Xi({name:"CubemapFromEquirect",uniforms:ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:Bi});s.uniforms.tEquirect.value=n;const o=new Ln(r,s),a=n.minFilter;return n.minFilter===pr&&(n.minFilter=Pn),new _A(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const yc=new J,xA=new J,SA=new Ge;class ar{constructor(e=new J(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=yc.subVectors(i,n).cross(xA.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(yc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||SA.getNormalMatrix(e),r=this.coplanarPoint(yc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new of,fa=new J;class n_{constructor(e=new ar,n=new ar,i=new ar,r=new ar,s=new ar,o=new ar){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ai){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],h=r[8],v=r[9],g=r[10],m=r[11],p=r[12],M=r[13],x=r[14],T=r[15];if(i[0].setComponents(l-s,d-c,m-h,T-p).normalize(),i[1].setComponents(l+s,d+c,m+h,T+p).normalize(),i[2].setComponents(l+o,d+u,m+v,T+M).normalize(),i[3].setComponents(l-o,d-u,m-v,T-M).normalize(),i[4].setComponents(l-a,d-f,m-g,T-x).normalize(),n===ai)i[5].setComponents(l+a,d+f,m+g,T+x).normalize();else if(n===Wa)i[5].setComponents(a,f,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){return rr.center.set(0,0,0),rr.radius=.7071067811865476,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(fa.x=r.normal.x>0?e.max.x:e.min.x,fa.y=r.normal.y>0?e.max.y:e.min.y,fa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function i_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function MA(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l._updateRange,d=l.updateRanges;if(t.bindBuffer(c,a),f.count===-1&&d.length===0&&t.bufferSubData(c,0,u),d.length!==0){for(let h=0,v=d.length;h<v;h++){const g=d[h];t.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}f.count!==-1&&(t.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class xl extends mi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,h=[],v=[],g=[],m=[];for(let p=0;p<u;p++){const M=p*d-o;for(let x=0;x<c;x++){const T=x*f-s;v.push(T,-M,0),g.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const x=M+c*p,T=M+c*(p+1),L=M+1+c*(p+1),E=M+1+c*p;h.push(x,T,E),h.push(T,L,E)}this.setIndex(h),this.setAttribute("position",new ln(v,3)),this.setAttribute("normal",new ln(g,3)),this.setAttribute("uv",new ln(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xl(e.width,e.height,e.widthSegments,e.heightSegments)}}var bA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,EA=`#ifdef USE_ALPHAHASH
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
#endif`,TA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,AA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,CA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,RA=`#ifdef USE_AOMAP
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
#endif`,PA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,LA=`#ifdef USE_BATCHING
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
#endif`,IA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,DA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,NA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,UA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,OA=`#ifdef USE_IRIDESCENCE
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
#endif`,FA=`#ifdef USE_BUMPMAP
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
#endif`,BA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,HA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,GA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,WA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,XA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,$A=`#define PI 3.141592653589793
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
} // validated`,qA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,YA=`vec3 transformedNormal = objectNormal;
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
#endif`,jA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,KA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ZA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,JA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,QA="gl_FragColor = linearToOutputTexel( gl_FragColor );",ew=`
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
}`,tw=`#ifdef USE_ENVMAP
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
#endif`,nw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iw=`#ifdef USE_ENVMAP
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
#endif`,rw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sw=`#ifdef USE_ENVMAP
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
#endif`,ow=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uw=`#ifdef USE_GRADIENTMAP
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
}`,fw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pw=`uniform bool receiveShadow;
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
#endif`,mw=`#ifdef USE_ENVMAP
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
#endif`,gw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_w=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xw=`PhysicalMaterial material;
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
#endif`,Sw=`struct PhysicalMaterial {
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
}`,Mw=`
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
#endif`,bw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ew=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Aw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ww=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Iw=`#if defined( USE_POINTS_UV )
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
#endif`,Dw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ow=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fw=`#ifdef USE_MORPHNORMALS
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
#endif`,Bw=`#ifdef USE_MORPHTARGETS
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
#endif`,kw=`#ifdef USE_MORPHTARGETS
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
#endif`,Vw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ww=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xw=`#ifdef USE_NORMALMAP
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
#endif`,$w=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,aC=`float getShadowMask() {
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
}`,lC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cC=`#ifdef USE_SKINNING
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
#endif`,uC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fC=`#ifdef USE_SKINNING
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
#endif`,dC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gC=`#ifdef USE_TRANSMISSION
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
#endif`,vC=`#ifdef USE_TRANSMISSION
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
#endif`,_C=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const MC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bC=`uniform sampler2D t2D;
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
}`,EC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TC=`#ifdef ENVMAP_TYPE_CUBE
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
}`,AC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CC=`#include <common>
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
}`,RC=`#if DEPTH_PACKING == 3200
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
}`,PC=`#define DISTANCE
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
}`,LC=`#define DISTANCE
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
}`,IC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NC=`uniform float scale;
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
}`,UC=`uniform vec3 diffuse;
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
}`,OC=`#include <common>
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
}`,FC=`uniform vec3 diffuse;
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
}`,BC=`#define LAMBERT
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
}`,kC=`#define LAMBERT
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
}`,VC=`#define MATCAP
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
}`,zC=`#define MATCAP
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
}`,HC=`#define NORMAL
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
}`,GC=`#define NORMAL
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
}`,WC=`#define PHONG
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
}`,XC=`#define PHONG
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
}`,$C=`#define STANDARD
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
}`,qC=`#define STANDARD
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
}`,YC=`#define TOON
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
}`,jC=`#define TOON
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
}`,KC=`uniform float size;
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
}`,ZC=`uniform vec3 diffuse;
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
}`,JC=`#include <common>
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
}`,QC=`uniform vec3 color;
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
}`,e1=`uniform float rotation;
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
}`,t1=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:bA,alphahash_pars_fragment:EA,alphamap_fragment:TA,alphamap_pars_fragment:AA,alphatest_fragment:wA,alphatest_pars_fragment:CA,aomap_fragment:RA,aomap_pars_fragment:PA,batching_pars_vertex:LA,batching_vertex:IA,begin_vertex:DA,beginnormal_vertex:NA,bsdfs:UA,iridescence_fragment:OA,bumpmap_pars_fragment:FA,clipping_planes_fragment:BA,clipping_planes_pars_fragment:kA,clipping_planes_pars_vertex:VA,clipping_planes_vertex:zA,color_fragment:HA,color_pars_fragment:GA,color_pars_vertex:WA,color_vertex:XA,common:$A,cube_uv_reflection_fragment:qA,defaultnormal_vertex:YA,displacementmap_pars_vertex:jA,displacementmap_vertex:KA,emissivemap_fragment:ZA,emissivemap_pars_fragment:JA,colorspace_fragment:QA,colorspace_pars_fragment:ew,envmap_fragment:tw,envmap_common_pars_fragment:nw,envmap_pars_fragment:iw,envmap_pars_vertex:rw,envmap_physical_pars_fragment:mw,envmap_vertex:sw,fog_vertex:ow,fog_pars_vertex:aw,fog_fragment:lw,fog_pars_fragment:cw,gradientmap_pars_fragment:uw,lightmap_pars_fragment:fw,lights_lambert_fragment:dw,lights_lambert_pars_fragment:hw,lights_pars_begin:pw,lights_toon_fragment:gw,lights_toon_pars_fragment:vw,lights_phong_fragment:_w,lights_phong_pars_fragment:yw,lights_physical_fragment:xw,lights_physical_pars_fragment:Sw,lights_fragment_begin:Mw,lights_fragment_maps:bw,lights_fragment_end:Ew,logdepthbuf_fragment:Tw,logdepthbuf_pars_fragment:Aw,logdepthbuf_pars_vertex:ww,logdepthbuf_vertex:Cw,map_fragment:Rw,map_pars_fragment:Pw,map_particle_fragment:Lw,map_particle_pars_fragment:Iw,metalnessmap_fragment:Dw,metalnessmap_pars_fragment:Nw,morphinstance_vertex:Uw,morphcolor_vertex:Ow,morphnormal_vertex:Fw,morphtarget_pars_vertex:Bw,morphtarget_vertex:kw,normal_fragment_begin:Vw,normal_fragment_maps:zw,normal_pars_fragment:Hw,normal_pars_vertex:Gw,normal_vertex:Ww,normalmap_pars_fragment:Xw,clearcoat_normal_fragment_begin:$w,clearcoat_normal_fragment_maps:qw,clearcoat_pars_fragment:Yw,iridescence_pars_fragment:jw,opaque_fragment:Kw,packing:Zw,premultiplied_alpha_fragment:Jw,project_vertex:Qw,dithering_fragment:eC,dithering_pars_fragment:tC,roughnessmap_fragment:nC,roughnessmap_pars_fragment:iC,shadowmap_pars_fragment:rC,shadowmap_pars_vertex:sC,shadowmap_vertex:oC,shadowmask_pars_fragment:aC,skinbase_vertex:lC,skinning_pars_vertex:cC,skinning_vertex:uC,skinnormal_vertex:fC,specularmap_fragment:dC,specularmap_pars_fragment:hC,tonemapping_fragment:pC,tonemapping_pars_fragment:mC,transmission_fragment:gC,transmission_pars_fragment:vC,uv_pars_fragment:_C,uv_pars_vertex:yC,uv_vertex:xC,worldpos_vertex:SC,background_vert:MC,background_frag:bC,backgroundCube_vert:EC,backgroundCube_frag:TC,cube_vert:AC,cube_frag:wC,depth_vert:CC,depth_frag:RC,distanceRGBA_vert:PC,distanceRGBA_frag:LC,equirect_vert:IC,equirect_frag:DC,linedashed_vert:NC,linedashed_frag:UC,meshbasic_vert:OC,meshbasic_frag:FC,meshlambert_vert:BC,meshlambert_frag:kC,meshmatcap_vert:VC,meshmatcap_frag:zC,meshnormal_vert:HC,meshnormal_frag:GC,meshphong_vert:WC,meshphong_frag:XC,meshphysical_vert:$C,meshphysical_frag:qC,meshtoon_vert:YC,meshtoon_frag:jC,points_vert:KC,points_frag:ZC,shadow_vert:JC,shadow_frag:QC,sprite_vert:e1,sprite_frag:t1},_e={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},kn={basic:{uniforms:Xt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Xt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ze(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Xt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Xt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Xt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ze(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Xt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Xt([_e.points,_e.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Xt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Xt([_e.common,_e.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Xt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Xt([_e.sprite,_e.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Xt([_e.common,_e.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Xt([_e.lights,_e.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};kn.physical={uniforms:Xt([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const da={r:0,b:0,g:0},sr=new qn,n1=new Tt;function i1(t,e,n,i,r,s,o){const a=new Ze(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function v(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?n:e).get(x)),x}function g(M){let x=!1;const T=v(M);T===null?p(a,l):T&&T.isColor&&(p(T,1),x=!0);const L=t.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function m(M,x){const T=v(x);T&&(T.isCubeTexture||T.mapping===vl)?(u===void 0&&(u=new Ln(new Io(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:ps(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,E,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),sr.copy(x.backgroundRotation),sr.x*=-1,sr.y*=-1,sr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(n1.makeRotationFromEuler(sr)),u.material.toneMapped=ot.getTransfer(T.colorSpace)!==ut,(f!==T||d!==T.version||h!==t.toneMapping)&&(u.material.needsUpdate=!0,f=T,d=T.version,h=t.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Ln(new xl(2,2),new Xi({name:"BackgroundMaterial",uniforms:ps(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ot.getTransfer(T.colorSpace)!==ut,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||d!==T.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,f=T,d=T.version,h=t.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,x){M.getRGB(da,Qv(t)),i.buffers.color.setClear(da.r,da.g,da.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:g,addToRenderList:m}}function r1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(_,N,I,R,k){let q=!1;const ee=f(R,I,N);s!==ee&&(s=ee,c(s.object)),q=h(_,R,I,k),q&&v(_,R,I,k),k!==null&&e.update(k,t.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,T(_,N,I,R),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return t.createVertexArray()}function c(_){return t.bindVertexArray(_)}function u(_){return t.deleteVertexArray(_)}function f(_,N,I){const R=I.wireframe===!0;let k=i[_.id];k===void 0&&(k={},i[_.id]=k);let q=k[N.id];q===void 0&&(q={},k[N.id]=q);let ee=q[R];return ee===void 0&&(ee=d(l()),q[R]=ee),ee}function d(_){const N=[],I=[],R=[];for(let k=0;k<n;k++)N[k]=0,I[k]=0,R[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:I,attributeDivisors:R,object:_,attributes:{},index:null}}function h(_,N,I,R){const k=s.attributes,q=N.attributes;let ee=0;const ie=I.getAttributes();for(const G in ie)if(ie[G].location>=0){const me=k[G];let ve=q[G];if(ve===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(ve=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(ve=_.instanceColor)),me===void 0||me.attribute!==ve||ve&&me.data!==ve.data)return!0;ee++}return s.attributesNum!==ee||s.index!==R}function v(_,N,I,R){const k={},q=N.attributes;let ee=0;const ie=I.getAttributes();for(const G in ie)if(ie[G].location>=0){let me=q[G];me===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(me=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(me=_.instanceColor));const ve={};ve.attribute=me,me&&me.data&&(ve.data=me.data),k[G]=ve,ee++}s.attributes=k,s.attributesNum=ee,s.index=R}function g(){const _=s.newAttributes;for(let N=0,I=_.length;N<I;N++)_[N]=0}function m(_){p(_,0)}function p(_,N){const I=s.newAttributes,R=s.enabledAttributes,k=s.attributeDivisors;I[_]=1,R[_]===0&&(t.enableVertexAttribArray(_),R[_]=1),k[_]!==N&&(t.vertexAttribDivisor(_,N),k[_]=N)}function M(){const _=s.newAttributes,N=s.enabledAttributes;for(let I=0,R=N.length;I<R;I++)N[I]!==_[I]&&(t.disableVertexAttribArray(I),N[I]=0)}function x(_,N,I,R,k,q,ee){ee===!0?t.vertexAttribIPointer(_,N,I,k,q):t.vertexAttribPointer(_,N,I,R,k,q)}function T(_,N,I,R){g();const k=R.attributes,q=I.getAttributes(),ee=N.defaultAttributeValues;for(const ie in q){const G=q[ie];if(G.location>=0){let fe=k[ie];if(fe===void 0&&(ie==="instanceMatrix"&&_.instanceMatrix&&(fe=_.instanceMatrix),ie==="instanceColor"&&_.instanceColor&&(fe=_.instanceColor)),fe!==void 0){const me=fe.normalized,ve=fe.itemSize,Ae=e.get(fe);if(Ae===void 0)continue;const $e=Ae.buffer,te=Ae.type,oe=Ae.bytesPerElement,ge=te===t.INT||te===t.UNSIGNED_INT||fe.gpuType===Bv;if(fe.isInterleavedBufferAttribute){const B=fe.data,he=B.stride,ae=fe.offset;if(B.isInstancedInterleavedBuffer){for(let U=0;U<G.locationSize;U++)p(G.location+U,B.meshPerAttribute);_.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let U=0;U<G.locationSize;U++)m(G.location+U);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let U=0;U<G.locationSize;U++)x(G.location+U,ve/G.locationSize,te,me,he*oe,(ae+ve/G.locationSize*U)*oe,ge)}else{if(fe.isInstancedBufferAttribute){for(let B=0;B<G.locationSize;B++)p(G.location+B,fe.meshPerAttribute);_.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let B=0;B<G.locationSize;B++)m(G.location+B);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let B=0;B<G.locationSize;B++)x(G.location+B,ve/G.locationSize,te,me,ve*oe,ve/G.locationSize*B*oe,ge)}}else if(ee!==void 0){const me=ee[ie];if(me!==void 0)switch(me.length){case 2:t.vertexAttrib2fv(G.location,me);break;case 3:t.vertexAttrib3fv(G.location,me);break;case 4:t.vertexAttrib4fv(G.location,me);break;default:t.vertexAttrib1fv(G.location,me)}}}}M()}function L(){D();for(const _ in i){const N=i[_];for(const I in N){const R=N[I];for(const k in R)u(R[k].object),delete R[k];delete N[I]}delete i[_]}}function E(_){if(i[_.id]===void 0)return;const N=i[_.id];for(const I in N){const R=N[I];for(const k in R)u(R[k].object),delete R[k];delete N[I]}delete i[_.id]}function b(_){for(const N in i){const I=i[N];if(I[_.id]===void 0)continue;const R=I[_.id];for(const k in R)u(R[k].object),delete R[k];delete I[_.id]}}function D(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:S,dispose:L,releaseStatesOfGeometry:E,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:m,disableUnusedAttributes:M}}function s1(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let h=0;h<f;h++)this.render(c[h],u[h]);else{d.multiDrawArraysWEBGL(i,c,0,u,0,f);let h=0;for(let v=0;v<f;v++)h+=u[v];n.update(h,i,1)}}function l(c,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let v=0;v<c.length;v++)o(c[v],u[v],d[v]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let v=0;for(let g=0;g<f;g++)v+=u[g];for(let g=0;g<d.length;g++)n.update(v,i,d[g])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function o1(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){return!(E!==Wn&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const b=E===_l&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Wi&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Ni&&!b)}function l(E){if(E==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=h>0,L=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:T,maxSamples:L}}function a1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ar,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,h){const v=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,p=t.get(f);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const M=s?0:i,x=M*4;let T=p.clippingState||null;l.value=T,T=u(v,d,x,h);for(let L=0;L!==x;++L)T[L]=n[L];p.clippingState=T,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,v){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const p=h+g*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,T=h;x!==g;++x,T+=4)o.copy(f[x]).applyMatrix4(M,a),o.normal.toArray(m,T),m[T+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function l1(t){let e=new WeakMap;function n(o,a){return a===ou?o.mapping=fs:a===au&&(o.mapping=ds),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ou||a===au)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new yA(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class c1 extends e_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Yr=4,gp=[.125,.215,.35,.446,.526,.582],fr=20,xc=new c1,vp=new Ze;let Sc=null,Mc=0,bc=0,Ec=!1;const lr=(1+Math.sqrt(5))/2,$r=1/lr,_p=[new J(-lr,$r,0),new J(lr,$r,0),new J(-$r,0,lr),new J($r,0,lr),new J(0,lr,-$r),new J(0,lr,$r),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)];class yp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Sc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sc,Mc,bc),this._renderer.xr.enabled=Ec,e.scissorTest=!1,ha(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===fs||e.mapping===ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:_l,format:Wn,colorSpace:ji,depthBuffer:!1},r=xp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=u1(s)),this._blurMaterial=f1(s,e,n)}return r}_compileMaterial(e){const n=new Ln(this._lodPlanes[0],e);this._renderer.compile(n,xc)}_sceneToCubeUV(e,n,i,r){const a=new gn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(vp),u.toneMapping=ki,u.autoClear=!1;const h=new af({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),v=new Ln(new Io,h);let g=!1;const m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,g=!0):(h.color.copy(vp),g=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;ha(r,M*x,p>2?x:0,x,x),u.setRenderTarget(r),g&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===fs||e.mapping===ds;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ln(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ha(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,xc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=_p[(r-s-1)%_p.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ln(this._lodPlanes[r],c),d=c.uniforms,h=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*fr-1),g=s/v,m=isFinite(s)?1+Math.floor(u*g):fr;m>fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fr}`);const p=[];let M=0;for(let b=0;b<fr;++b){const D=b/g,S=Math.exp(-D*D/2);p.push(S),b===0?M+=S:b<m&&(M+=2*S)}for(let b=0;b<p.length;b++)p[b]=p[b]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=v,d.mipInt.value=x-i;const T=this._sizeLods[r],L=3*T*(r>x-Yr?r-x+Yr:0),E=4*(this._cubeSize-T);ha(n,L,E,3*T,2*T),l.setRenderTarget(n),l.render(f,xc)}}function u1(t){const e=[],n=[],i=[];let r=t;const s=t-Yr+1+gp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Yr?l=gp[o-t+Yr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,v=6,g=3,m=2,p=1,M=new Float32Array(g*v*h),x=new Float32Array(m*v*h),T=new Float32Array(p*v*h);for(let E=0;E<h;E++){const b=E%3*2/3-1,D=E>2?0:-1,S=[b,D,0,b+2/3,D,0,b+2/3,D+1,0,b,D,0,b+2/3,D+1,0,b,D+1,0];M.set(S,g*v*E),x.set(d,m*v*E);const _=[E,E,E,E,E,E];T.set(_,p*v*E)}const L=new mi;L.setAttribute("position",new $n(M,g)),L.setAttribute("uv",new $n(x,m)),L.setAttribute("faceIndex",new $n(T,p)),e.push(L),r>Yr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function xp(t,e,n){const i=new Mr(t,e,n);return i.texture.mapping=vl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ha(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function f1(t,e,n){const i=new Float32Array(fr),r=new J(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:lf(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Sp(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lf(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Mp(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function lf(){return`

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
	`}function d1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ou||l===au,u=l===fs||l===ds;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new yp(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&r(h)?(n===null&&(n=new yp(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function h1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function p1(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const g=d.morphAttributes[v];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}d.removeEventListener("dispose",o),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const v in d)e.update(d[v],t.ARRAY_BUFFER);const h=f.morphAttributes;for(const v in h){const g=h[v];for(let m=0,p=g.length;m<p;m++)e.update(g[m],t.ARRAY_BUFFER)}}function c(f){const d=[],h=f.index,v=f.attributes.position;let g=0;if(h!==null){const M=h.array;g=h.version;for(let x=0,T=M.length;x<T;x+=3){const L=M[x+0],E=M[x+1],b=M[x+2];d.push(L,E,E,b,b,L)}}else if(v!==void 0){const M=v.array;g=v.version;for(let x=0,T=M.length/3-1;x<T;x+=3){const L=x+0,E=x+1,b=x+2;d.push(L,E,E,b,b,L)}}else return;const m=new($v(d)?Jv:Zv)(d,1);m.version=g;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function m1(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){t.drawElements(i,h,s,d*o),n.update(h,i,1)}function c(d,h,v){v!==0&&(t.drawElementsInstanced(i,h,s,d*o,v),n.update(h,i,v))}function u(d,h,v){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<v;m++)this.render(d[m]/o,h[m]);else{g.multiDrawElementsWEBGL(i,h,0,s,d,0,v);let m=0;for(let p=0;p<v;p++)m+=h[p];n.update(m,i,1)}}function f(d,h,v,g){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,h[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,g,0,v);let p=0;for(let M=0;M<v;M++)p+=h[M];for(let M=0;M<g.length;M++)n.update(p,i,g[M])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function g1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function v1(t,e,n){const i=new WeakMap,r=new Lt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let _=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",_)};var h=_;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let T=0;v===!0&&(T=1),g===!0&&(T=2),m===!0&&(T=3);let L=a.attributes.position.count*T,E=1;L>e.maxTextureSize&&(E=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const b=new Float32Array(L*E*4*f),D=new Yv(b,L,E,f);D.type=Ni,D.needsUpdate=!0;const S=T*4;for(let N=0;N<f;N++){const I=p[N],R=M[N],k=x[N],q=L*E*4*N;for(let ee=0;ee<I.count;ee++){const ie=ee*S;v===!0&&(r.fromBufferAttribute(I,ee),b[q+ie+0]=r.x,b[q+ie+1]=r.y,b[q+ie+2]=r.z,b[q+ie+3]=0),g===!0&&(r.fromBufferAttribute(R,ee),b[q+ie+4]=r.x,b[q+ie+5]=r.y,b[q+ie+6]=r.z,b[q+ie+7]=0),m===!0&&(r.fromBufferAttribute(k,ee),b[q+ie+8]=r.x,b[q+ie+9]=r.y,b[q+ie+10]=r.z,b[q+ie+11]=k.itemSize===4?r.w:1)}}d={count:f,texture:D,size:new Qe(L,E)},i.set(a,d),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const g=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function _1(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class r_ extends Qt{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:ts,u!==ts&&u!==fo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ts&&(i=hs),i===void 0&&u===fo&&(i=wo),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:xn,this.minFilter=l!==void 0?l:xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const s_=new Qt,o_=new r_(1,1);o_.compareFunction=Xv;const a_=new Yv,l_=new nA,c_=new t_,bp=[],Ep=[],Tp=new Float32Array(16),Ap=new Float32Array(9),wp=new Float32Array(4);function Es(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=bp[r];if(s===void 0&&(s=new Float32Array(r),bp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function At(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function wt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Sl(t,e){let n=Ep[e];n===void 0&&(n=new Int32Array(e),Ep[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function y1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function x1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2fv(this.addr,e),wt(n,e)}}function S1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(At(n,e))return;t.uniform3fv(this.addr,e),wt(n,e)}}function M1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4fv(this.addr,e),wt(n,e)}}function b1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),wt(n,e)}else{if(At(n,i))return;wp.set(i),t.uniformMatrix2fv(this.addr,!1,wp),wt(n,i)}}function E1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),wt(n,e)}else{if(At(n,i))return;Ap.set(i),t.uniformMatrix3fv(this.addr,!1,Ap),wt(n,i)}}function T1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),wt(n,e)}else{if(At(n,i))return;Tp.set(i),t.uniformMatrix4fv(this.addr,!1,Tp),wt(n,i)}}function A1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function w1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2iv(this.addr,e),wt(n,e)}}function C1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3iv(this.addr,e),wt(n,e)}}function R1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4iv(this.addr,e),wt(n,e)}}function P1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function L1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2uiv(this.addr,e),wt(n,e)}}function I1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3uiv(this.addr,e),wt(n,e)}}function D1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4uiv(this.addr,e),wt(n,e)}}function N1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?o_:s_;n.setTexture2D(e||s,r)}function U1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||l_,r)}function O1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||c_,r)}function F1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||a_,r)}function B1(t){switch(t){case 5126:return y1;case 35664:return x1;case 35665:return S1;case 35666:return M1;case 35674:return b1;case 35675:return E1;case 35676:return T1;case 5124:case 35670:return A1;case 35667:case 35671:return w1;case 35668:case 35672:return C1;case 35669:case 35673:return R1;case 5125:return P1;case 36294:return L1;case 36295:return I1;case 36296:return D1;case 35678:case 36198:case 36298:case 36306:case 35682:return N1;case 35679:case 36299:case 36307:return U1;case 35680:case 36300:case 36308:case 36293:return O1;case 36289:case 36303:case 36311:case 36292:return F1}}function k1(t,e){t.uniform1fv(this.addr,e)}function V1(t,e){const n=Es(e,this.size,2);t.uniform2fv(this.addr,n)}function z1(t,e){const n=Es(e,this.size,3);t.uniform3fv(this.addr,n)}function H1(t,e){const n=Es(e,this.size,4);t.uniform4fv(this.addr,n)}function G1(t,e){const n=Es(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function W1(t,e){const n=Es(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function X1(t,e){const n=Es(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function $1(t,e){t.uniform1iv(this.addr,e)}function q1(t,e){t.uniform2iv(this.addr,e)}function Y1(t,e){t.uniform3iv(this.addr,e)}function j1(t,e){t.uniform4iv(this.addr,e)}function K1(t,e){t.uniform1uiv(this.addr,e)}function Z1(t,e){t.uniform2uiv(this.addr,e)}function J1(t,e){t.uniform3uiv(this.addr,e)}function Q1(t,e){t.uniform4uiv(this.addr,e)}function eR(t,e,n){const i=this.cache,r=e.length,s=Sl(n,r);At(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||s_,s[o])}function tR(t,e,n){const i=this.cache,r=e.length,s=Sl(n,r);At(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||l_,s[o])}function nR(t,e,n){const i=this.cache,r=e.length,s=Sl(n,r);At(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||c_,s[o])}function iR(t,e,n){const i=this.cache,r=e.length,s=Sl(n,r);At(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||a_,s[o])}function rR(t){switch(t){case 5126:return k1;case 35664:return V1;case 35665:return z1;case 35666:return H1;case 35674:return G1;case 35675:return W1;case 35676:return X1;case 5124:case 35670:return $1;case 35667:case 35671:return q1;case 35668:case 35672:return Y1;case 35669:case 35673:return j1;case 5125:return K1;case 36294:return Z1;case 36295:return J1;case 36296:return Q1;case 35678:case 36198:case 36298:case 36306:case 35682:return eR;case 35679:case 36299:case 36307:return tR;case 35680:case 36300:case 36308:case 36293:return nR;case 36289:case 36303:case 36311:case 36292:return iR}}class sR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=B1(n.type)}}class oR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=rR(n.type)}}class aR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Tc=/(\w+)(\])?(\[|\.)?/g;function Cp(t,e){t.seq.push(e),t.map[e.id]=e}function lR(t,e,n){const i=t.name,r=i.length;for(Tc.lastIndex=0;;){const s=Tc.exec(i),o=Tc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Cp(n,c===void 0?new sR(a,t,e):new oR(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new aR(a),Cp(n,f)),n=f}}}class Ea{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);lR(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Rp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const cR=37297;let uR=0;function fR(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function dR(t){const e=ot.getPrimaries(ot.workingColorSpace),n=ot.getPrimaries(t);let i;switch(e===n?i="":e===Ga&&n===Ha?i="LinearDisplayP3ToLinearSRGB":e===Ha&&n===Ga&&(i="LinearSRGBToLinearDisplayP3"),t){case ji:case yl:return[i,"LinearTransferOETF"];case Bn:case sf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Pp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+fR(t.getShaderSource(e),o)}else return r}function hR(t,e){const n=dR(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function pR(t,e){let n;switch(e){case xT:n="Linear";break;case ST:n="Reinhard";break;case MT:n="OptimizedCineon";break;case bT:n="ACESFilmic";break;case TT:n="AgX";break;case AT:n="Neutral";break;case ET:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function mR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ks).join(`
`)}function gR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function vR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ks(t){return t!==""}function Lp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ip(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _R=/^[ \t]*#include +<([\w\d./]+)>/gm;function fu(t){return t.replace(_R,xR)}const yR=new Map;function xR(t,e){let n=He[e];if(n===void 0){const i=yR.get(e);if(i!==void 0)n=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return fu(n)}const SR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dp(t){return t.replace(SR,MR)}function MR(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Np(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function bR(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Uv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===$E?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function ER(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case fs:case ds:e="ENVMAP_TYPE_CUBE";break;case vl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function TR(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ds:e="ENVMAP_MODE_REFRACTION";break}return e}function AR(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case rf:e="ENVMAP_BLENDING_MULTIPLY";break;case _T:e="ENVMAP_BLENDING_MIX";break;case yT:e="ENVMAP_BLENDING_ADD";break}return e}function wR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function CR(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=bR(n),c=ER(n),u=TR(n),f=AR(n),d=wR(n),h=mR(n),v=gR(s),g=r.createProgram();let m,p,M=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ks).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ks).join(`
`),p.length>0&&(p+=`
`)):(m=[Np(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),p=[Np(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ki?"#define TONE_MAPPING":"",n.toneMapping!==ki?He.tonemapping_pars_fragment:"",n.toneMapping!==ki?pR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,hR("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ks).join(`
`)),o=fu(o),o=Lp(o,n),o=Ip(o,n),a=fu(a),a=Lp(a,n),a=Ip(a,n),o=Dp(o),a=Dp(a),n.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===Kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=M+m+o,T=M+p+a,L=Rp(r,r.VERTEX_SHADER,x),E=Rp(r,r.FRAGMENT_SHADER,T);r.attachShader(g,L),r.attachShader(g,E),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function b(N){if(t.debug.checkShaderErrors){const I=r.getProgramInfoLog(g).trim(),R=r.getShaderInfoLog(L).trim(),k=r.getShaderInfoLog(E).trim();let q=!0,ee=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,L,E);else{const ie=Pp(r,L,"vertex"),G=Pp(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+I+`
`+ie+`
`+G)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(R===""||k==="")&&(ee=!1);ee&&(N.diagnostics={runnable:q,programLog:I,vertexShader:{log:R,prefix:m},fragmentShader:{log:k,prefix:p}})}r.deleteShader(L),r.deleteShader(E),D=new Ea(r,g),S=vR(r,g)}let D;this.getUniforms=function(){return D===void 0&&b(this),D};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let _=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(g,cR)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=uR++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=L,this.fragmentShader=E,this}let RR=0;class PR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new LR(e),n.set(e,i)),i}}class LR{constructor(e){this.id=RR++,this.code=e,this.usedTimes=0}}function IR(t,e,n,i,r,s,o){const a=new jv,l=new PR,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let h=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,_,N,I,R){const k=I.fog,q=R.geometry,ee=S.isMeshStandardMaterial?I.environment:null,ie=(S.isMeshStandardMaterial?n:e).get(S.envMap||ee),G=ie&&ie.mapping===vl?ie.image.height:null,fe=v[S.type];S.precision!==null&&(h=r.getMaxPrecision(S.precision),h!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const me=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ve=me!==void 0?me.length:0;let Ae=0;q.morphAttributes.position!==void 0&&(Ae=1),q.morphAttributes.normal!==void 0&&(Ae=2),q.morphAttributes.color!==void 0&&(Ae=3);let $e,te,oe,ge;if(fe){const rt=kn[fe];$e=rt.vertexShader,te=rt.fragmentShader}else $e=S.vertexShader,te=S.fragmentShader,l.update(S),oe=l.getVertexShaderID(S),ge=l.getFragmentShaderID(S);const B=t.getRenderTarget(),he=R.isInstancedMesh===!0,ae=R.isBatchedMesh===!0,U=!!S.map,Re=!!S.matcap,ye=!!ie,C=!!S.aoMap,P=!!S.lightMap,H=!!S.bumpMap,Y=!!S.normalMap,$=!!S.displacementMap,ce=!!S.emissiveMap,A=!!S.metalnessMap,y=!!S.roughnessMap,O=S.anisotropy>0,F=S.clearcoat>0,X=S.dispersion>0,Z=S.iridescence>0,ue=S.sheen>0,re=S.transmission>0,le=O&&!!S.anisotropyMap,be=F&&!!S.clearcoatMap,de=F&&!!S.clearcoatNormalMap,Me=F&&!!S.clearcoatRoughnessMap,Oe=Z&&!!S.iridescenceMap,Pe=Z&&!!S.iridescenceThicknessMap,Ee=ue&&!!S.sheenColorMap,Fe=ue&&!!S.sheenRoughnessMap,We=!!S.specularMap,qe=!!S.specularColorMap,Ie=!!S.specularIntensityMap,V=re&&!!S.transmissionMap,pe=re&&!!S.thicknessMap,se=!!S.gradientMap,xe=!!S.alphaMap,Te=S.alphaTest>0,tt=!!S.alphaHash,ct=!!S.extensions;let gt=ki;S.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(gt=t.toneMapping);const Dt={shaderID:fe,shaderType:S.type,shaderName:S.name,vertexShader:$e,fragmentShader:te,defines:S.defines,customVertexShaderID:oe,customFragmentShaderID:ge,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:ae,instancing:he,instancingColor:he&&R.instanceColor!==null,instancingMorph:he&&R.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:B===null?t.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:ji,alphaToCoverage:!!S.alphaToCoverage,map:U,matcap:Re,envMap:ye,envMapMode:ye&&ie.mapping,envMapCubeUVHeight:G,aoMap:C,lightMap:P,bumpMap:H,normalMap:Y,displacementMap:d&&$,emissiveMap:ce,normalMapObjectSpace:Y&&S.normalMapType===VT,normalMapTangentSpace:Y&&S.normalMapType===Wv,metalnessMap:A,roughnessMap:y,anisotropy:O,anisotropyMap:le,clearcoat:F,clearcoatMap:be,clearcoatNormalMap:de,clearcoatRoughnessMap:Me,dispersion:X,iridescence:Z,iridescenceMap:Oe,iridescenceThicknessMap:Pe,sheen:ue,sheenColorMap:Ee,sheenRoughnessMap:Fe,specularMap:We,specularColorMap:qe,specularIntensityMap:Ie,transmission:re,transmissionMap:V,thicknessMap:pe,gradientMap:se,opaque:S.transparent===!1&&S.blending===es&&S.alphaToCoverage===!1,alphaMap:xe,alphaTest:Te,alphaHash:tt,combine:S.combine,mapUv:U&&g(S.map.channel),aoMapUv:C&&g(S.aoMap.channel),lightMapUv:P&&g(S.lightMap.channel),bumpMapUv:H&&g(S.bumpMap.channel),normalMapUv:Y&&g(S.normalMap.channel),displacementMapUv:$&&g(S.displacementMap.channel),emissiveMapUv:ce&&g(S.emissiveMap.channel),metalnessMapUv:A&&g(S.metalnessMap.channel),roughnessMapUv:y&&g(S.roughnessMap.channel),anisotropyMapUv:le&&g(S.anisotropyMap.channel),clearcoatMapUv:be&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:de&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&g(S.sheenRoughnessMap.channel),specularMapUv:We&&g(S.specularMap.channel),specularColorMapUv:qe&&g(S.specularColorMap.channel),specularIntensityMapUv:Ie&&g(S.specularIntensityMap.channel),transmissionMapUv:V&&g(S.transmissionMap.channel),thicknessMapUv:pe&&g(S.thicknessMap.channel),alphaMapUv:xe&&g(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Y||O),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!q.attributes.uv&&(U||xe),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:R.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Ae,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:gt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:U&&S.map.isVideoTexture===!0&&ot.getTransfer(S.map.colorSpace)===ut,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===si,flipSided:S.side===Jt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ct&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ct&&S.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Dt.vertexUv1s=c.has(1),Dt.vertexUv2s=c.has(2),Dt.vertexUv3s=c.has(3),c.clear(),Dt}function p(S){const _=[];if(S.shaderID?_.push(S.shaderID):(_.push(S.customVertexShaderID),_.push(S.customFragmentShaderID)),S.defines!==void 0)for(const N in S.defines)_.push(N),_.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(M(_,S),x(_,S),_.push(t.outputColorSpace)),_.push(S.customProgramCacheKey),_.join()}function M(S,_){S.push(_.precision),S.push(_.outputColorSpace),S.push(_.envMapMode),S.push(_.envMapCubeUVHeight),S.push(_.mapUv),S.push(_.alphaMapUv),S.push(_.lightMapUv),S.push(_.aoMapUv),S.push(_.bumpMapUv),S.push(_.normalMapUv),S.push(_.displacementMapUv),S.push(_.emissiveMapUv),S.push(_.metalnessMapUv),S.push(_.roughnessMapUv),S.push(_.anisotropyMapUv),S.push(_.clearcoatMapUv),S.push(_.clearcoatNormalMapUv),S.push(_.clearcoatRoughnessMapUv),S.push(_.iridescenceMapUv),S.push(_.iridescenceThicknessMapUv),S.push(_.sheenColorMapUv),S.push(_.sheenRoughnessMapUv),S.push(_.specularMapUv),S.push(_.specularColorMapUv),S.push(_.specularIntensityMapUv),S.push(_.transmissionMapUv),S.push(_.thicknessMapUv),S.push(_.combine),S.push(_.fogExp2),S.push(_.sizeAttenuation),S.push(_.morphTargetsCount),S.push(_.morphAttributeCount),S.push(_.numDirLights),S.push(_.numPointLights),S.push(_.numSpotLights),S.push(_.numSpotLightMaps),S.push(_.numHemiLights),S.push(_.numRectAreaLights),S.push(_.numDirLightShadows),S.push(_.numPointLightShadows),S.push(_.numSpotLightShadows),S.push(_.numSpotLightShadowsWithMaps),S.push(_.numLightProbes),S.push(_.shadowMapType),S.push(_.toneMapping),S.push(_.numClippingPlanes),S.push(_.numClipIntersection),S.push(_.depthPacking)}function x(S,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),S.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.skinning&&a.enable(4),_.morphTargets&&a.enable(5),_.morphNormals&&a.enable(6),_.morphColors&&a.enable(7),_.premultipliedAlpha&&a.enable(8),_.shadowMapEnabled&&a.enable(9),_.useLegacyLights&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.alphaToCoverage&&a.enable(20),S.push(a.mask)}function T(S){const _=v[S.type];let N;if(_){const I=kn[_];N=mA.clone(I.uniforms)}else N=S.uniforms;return N}function L(S,_){let N;for(let I=0,R=u.length;I<R;I++){const k=u[I];if(k.cacheKey===_){N=k,++N.usedTimes;break}}return N===void 0&&(N=new CR(t,_,S,s),u.push(N)),N}function E(S){if(--S.usedTimes===0){const _=u.indexOf(S);u[_]=u[u.length-1],u.pop(),S.destroy()}}function b(S){l.remove(S)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:T,acquireProgram:L,releaseProgram:E,releaseShaderCache:b,programs:u,dispose:D}}function DR(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function NR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Up(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Op(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,h,v,g,m){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:v,renderOrder:f.renderOrder,z:g,group:m},t[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=v,p.renderOrder=f.renderOrder,p.z=g,p.group=m),e++,p}function a(f,d,h,v,g,m){const p=o(f,d,h,v,g,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):n.push(p)}function l(f,d,h,v,g,m){const p=o(f,d,h,v,g,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):n.unshift(p)}function c(f,d){n.length>1&&n.sort(f||NR),i.length>1&&i.sort(d||Up),r.length>1&&r.sort(d||Up)}function u(){for(let f=e,d=t.length;f<d;f++){const h=t[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function UR(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Op,t.set(i,[o])):r>=s.length?(o=new Op,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function OR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new J,color:new Ze};break;case"SpotLight":n={position:new J,direction:new J,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new J,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new J,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new J,halfWidth:new J,halfHeight:new J};break}return t[e.id]=n,n}}}function FR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let BR=0;function kR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function VR(t){const e=new OR,n=FR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new J);const r=new J,s=new Tt,o=new Tt;function a(c,u){let f=0,d=0,h=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let v=0,g=0,m=0,p=0,M=0,x=0,T=0,L=0,E=0,b=0,D=0;c.sort(kR);const S=u===!0?Math.PI:1;for(let N=0,I=c.length;N<I;N++){const R=c[N],k=R.color,q=R.intensity,ee=R.distance,ie=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)f+=k.r*q*S,d+=k.g*q*S,h+=k.b*q*S;else if(R.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(R.sh.coefficients[G],q);D++}else if(R.isDirectionalLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity*S),R.castShadow){const fe=R.shadow,me=n.get(R);me.shadowBias=fe.bias,me.shadowNormalBias=fe.normalBias,me.shadowRadius=fe.radius,me.shadowMapSize=fe.mapSize,i.directionalShadow[v]=me,i.directionalShadowMap[v]=ie,i.directionalShadowMatrix[v]=R.shadow.matrix,x++}i.directional[v]=G,v++}else if(R.isSpotLight){const G=e.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(k).multiplyScalar(q*S),G.distance=ee,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,i.spot[m]=G;const fe=R.shadow;if(R.map&&(i.spotLightMap[E]=R.map,E++,fe.updateMatrices(R),R.castShadow&&b++),i.spotLightMatrix[m]=fe.matrix,R.castShadow){const me=n.get(R);me.shadowBias=fe.bias,me.shadowNormalBias=fe.normalBias,me.shadowRadius=fe.radius,me.shadowMapSize=fe.mapSize,i.spotShadow[m]=me,i.spotShadowMap[m]=ie,L++}m++}else if(R.isRectAreaLight){const G=e.get(R);G.color.copy(k).multiplyScalar(q),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),i.rectArea[p]=G,p++}else if(R.isPointLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity*S),G.distance=R.distance,G.decay=R.decay,R.castShadow){const fe=R.shadow,me=n.get(R);me.shadowBias=fe.bias,me.shadowNormalBias=fe.normalBias,me.shadowRadius=fe.radius,me.shadowMapSize=fe.mapSize,me.shadowCameraNear=fe.camera.near,me.shadowCameraFar=fe.camera.far,i.pointShadow[g]=me,i.pointShadowMap[g]=ie,i.pointShadowMatrix[g]=R.shadow.matrix,T++}i.point[g]=G,g++}else if(R.isHemisphereLight){const G=e.get(R);G.skyColor.copy(R.color).multiplyScalar(q*S),G.groundColor.copy(R.groundColor).multiplyScalar(q*S),i.hemi[M]=G,M++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;const _=i.hash;(_.directionalLength!==v||_.pointLength!==g||_.spotLength!==m||_.rectAreaLength!==p||_.hemiLength!==M||_.numDirectionalShadows!==x||_.numPointShadows!==T||_.numSpotShadows!==L||_.numSpotMaps!==E||_.numLightProbes!==D)&&(i.directional.length=v,i.spot.length=m,i.rectArea.length=p,i.point.length=g,i.hemi.length=M,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=L+E-b,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=D,_.directionalLength=v,_.pointLength=g,_.spotLength=m,_.rectAreaLength=p,_.hemiLength=M,_.numDirectionalShadows=x,_.numPointShadows=T,_.numSpotShadows=L,_.numSpotMaps=E,_.numLightProbes=D,i.version=BR++)}function l(c,u){let f=0,d=0,h=0,v=0,g=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const x=c[p];if(x.isDirectionalLight){const T=i.directional[f];T.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),f++}else if(x.isSpotLight){const T=i.spot[h];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),h++}else if(x.isRectAreaLight){const T=i.rectArea[v];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),T.halfWidth.set(x.width*.5,0,0),T.halfHeight.set(0,x.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const T=i.point[d];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const T=i.hemi[g];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function Fp(t){const e=new VR(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(u){e.setup(n,u)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function zR(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Fp(t),e.set(r,[a])):s>=o.length?(a=new Fp(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class HR extends Lo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class GR extends Lo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const WR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XR=`uniform sampler2D shadow_pass;
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
}`;function $R(t,e,n){let i=new n_;const r=new Qe,s=new Qe,o=new Lt,a=new HR({depthPacking:kT}),l=new GR,c={},u=n.maxTextureSize,f={[Gi]:Jt,[Jt]:Gi,[si]:si},d=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:WR,fragmentShader:XR}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const v=new mi;v.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ln(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uv;let p=this.type;this.render=function(E,b,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const S=t.getRenderTarget(),_=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),I=t.state;I.setBlending(Bi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const R=p!==ri&&this.type===ri,k=p===ri&&this.type!==ri;for(let q=0,ee=E.length;q<ee;q++){const ie=E[q],G=ie.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const fe=G.getFrameExtents();if(r.multiply(fe),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/fe.x),r.x=s.x*fe.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/fe.y),r.y=s.y*fe.y,G.mapSize.y=s.y)),G.map===null||R===!0||k===!0){const ve=this.type!==ri?{minFilter:xn,magFilter:xn}:{};G.map!==null&&G.map.dispose(),G.map=new Mr(r.x,r.y,ve),G.map.texture.name=ie.name+".shadowMap",G.camera.updateProjectionMatrix()}t.setRenderTarget(G.map),t.clear();const me=G.getViewportCount();for(let ve=0;ve<me;ve++){const Ae=G.getViewport(ve);o.set(s.x*Ae.x,s.y*Ae.y,s.x*Ae.z,s.y*Ae.w),I.viewport(o),G.updateMatrices(ie,ve),i=G.getFrustum(),T(b,D,G.camera,ie,this.type)}G.isPointLightShadow!==!0&&this.type===ri&&M(G,D),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(S,_,N)};function M(E,b){const D=e.update(g);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,h.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Mr(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(b,null,D,d,g,null),h.uniforms.shadow_pass.value=E.mapPass.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(b,null,D,h,g,null)}function x(E,b,D,S){let _=null;const N=D.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)_=N;else if(_=D.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const I=_.uuid,R=b.uuid;let k=c[I];k===void 0&&(k={},c[I]=k);let q=k[R];q===void 0&&(q=_.clone(),k[R]=q,b.addEventListener("dispose",L)),_=q}if(_.visible=b.visible,_.wireframe=b.wireframe,S===ri?_.side=b.shadowSide!==null?b.shadowSide:b.side:_.side=b.shadowSide!==null?b.shadowSide:f[b.side],_.alphaMap=b.alphaMap,_.alphaTest=b.alphaTest,_.map=b.map,_.clipShadows=b.clipShadows,_.clippingPlanes=b.clippingPlanes,_.clipIntersection=b.clipIntersection,_.displacementMap=b.displacementMap,_.displacementScale=b.displacementScale,_.displacementBias=b.displacementBias,_.wireframeLinewidth=b.wireframeLinewidth,_.linewidth=b.linewidth,D.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const I=t.properties.get(_);I.light=D}return _}function T(E,b,D,S,_){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&_===ri)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,E.matrixWorld);const R=e.update(E),k=E.material;if(Array.isArray(k)){const q=R.groups;for(let ee=0,ie=q.length;ee<ie;ee++){const G=q[ee],fe=k[G.materialIndex];if(fe&&fe.visible){const me=x(E,fe,S,_);E.onBeforeShadow(t,E,b,D,R,me,G),t.renderBufferDirect(D,null,R,me,E,G),E.onAfterShadow(t,E,b,D,R,me,G)}}}else if(k.visible){const q=x(E,k,S,_);E.onBeforeShadow(t,E,b,D,R,q,null),t.renderBufferDirect(D,null,R,q,E,null),E.onAfterShadow(t,E,b,D,R,q,null)}}const I=E.children;for(let R=0,k=I.length;R<k;R++)T(I[R],b,D,S,_)}function L(E){E.target.removeEventListener("dispose",L);for(const D in c){const S=c[D],_=E.target.uuid;_ in S&&(S[_].dispose(),delete S[_])}}}function qR(t){function e(){let V=!1;const pe=new Lt;let se=null;const xe=new Lt(0,0,0,0);return{setMask:function(Te){se!==Te&&!V&&(t.colorMask(Te,Te,Te,Te),se=Te)},setLocked:function(Te){V=Te},setClear:function(Te,tt,ct,gt,Dt){Dt===!0&&(Te*=gt,tt*=gt,ct*=gt),pe.set(Te,tt,ct,gt),xe.equals(pe)===!1&&(t.clearColor(Te,tt,ct,gt),xe.copy(pe))},reset:function(){V=!1,se=null,xe.set(-1,0,0,0)}}}function n(){let V=!1,pe=null,se=null,xe=null;return{setTest:function(Te){Te?ge(t.DEPTH_TEST):B(t.DEPTH_TEST)},setMask:function(Te){pe!==Te&&!V&&(t.depthMask(Te),pe=Te)},setFunc:function(Te){if(se!==Te){switch(Te){case fT:t.depthFunc(t.NEVER);break;case dT:t.depthFunc(t.ALWAYS);break;case hT:t.depthFunc(t.LESS);break;case Va:t.depthFunc(t.LEQUAL);break;case pT:t.depthFunc(t.EQUAL);break;case mT:t.depthFunc(t.GEQUAL);break;case gT:t.depthFunc(t.GREATER);break;case vT:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}se=Te}},setLocked:function(Te){V=Te},setClear:function(Te){xe!==Te&&(t.clearDepth(Te),xe=Te)},reset:function(){V=!1,pe=null,se=null,xe=null}}}function i(){let V=!1,pe=null,se=null,xe=null,Te=null,tt=null,ct=null,gt=null,Dt=null;return{setTest:function(rt){V||(rt?ge(t.STENCIL_TEST):B(t.STENCIL_TEST))},setMask:function(rt){pe!==rt&&!V&&(t.stencilMask(rt),pe=rt)},setFunc:function(rt,On,Gt){(se!==rt||xe!==On||Te!==Gt)&&(t.stencilFunc(rt,On,Gt),se=rt,xe=On,Te=Gt)},setOp:function(rt,On,Gt){(tt!==rt||ct!==On||gt!==Gt)&&(t.stencilOp(rt,On,Gt),tt=rt,ct=On,gt=Gt)},setLocked:function(rt){V=rt},setClear:function(rt){Dt!==rt&&(t.clearStencil(rt),Dt=rt)},reset:function(){V=!1,pe=null,se=null,xe=null,Te=null,tt=null,ct=null,gt=null,Dt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,d=[],h=null,v=!1,g=null,m=null,p=null,M=null,x=null,T=null,L=null,E=new Ze(0,0,0),b=0,D=!1,S=null,_=null,N=null,I=null,R=null;const k=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ee=0;const ie=t.getParameter(t.VERSION);ie.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(ie)[1]),q=ee>=1):ie.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),q=ee>=2);let G=null,fe={};const me=t.getParameter(t.SCISSOR_BOX),ve=t.getParameter(t.VIEWPORT),Ae=new Lt().fromArray(me),$e=new Lt().fromArray(ve);function te(V,pe,se,xe){const Te=new Uint8Array(4),tt=t.createTexture();t.bindTexture(V,tt),t.texParameteri(V,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(V,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ct=0;ct<se;ct++)V===t.TEXTURE_3D||V===t.TEXTURE_2D_ARRAY?t.texImage3D(pe,0,t.RGBA,1,1,xe,0,t.RGBA,t.UNSIGNED_BYTE,Te):t.texImage2D(pe+ct,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Te);return tt}const oe={};oe[t.TEXTURE_2D]=te(t.TEXTURE_2D,t.TEXTURE_2D,1),oe[t.TEXTURE_CUBE_MAP]=te(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[t.TEXTURE_2D_ARRAY]=te(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),oe[t.TEXTURE_3D]=te(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ge(t.DEPTH_TEST),s.setFunc(Va),H(!1),Y(_h),ge(t.CULL_FACE),C(Bi);function ge(V){c[V]!==!0&&(t.enable(V),c[V]=!0)}function B(V){c[V]!==!1&&(t.disable(V),c[V]=!1)}function he(V,pe){return u[V]!==pe?(t.bindFramebuffer(V,pe),u[V]=pe,V===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=pe),V===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=pe),!0):!1}function ae(V,pe){let se=d,xe=!1;if(V){se=f.get(pe),se===void 0&&(se=[],f.set(pe,se));const Te=V.textures;if(se.length!==Te.length||se[0]!==t.COLOR_ATTACHMENT0){for(let tt=0,ct=Te.length;tt<ct;tt++)se[tt]=t.COLOR_ATTACHMENT0+tt;se.length=Te.length,xe=!0}}else se[0]!==t.BACK&&(se[0]=t.BACK,xe=!0);xe&&t.drawBuffers(se)}function U(V){return h!==V?(t.useProgram(V),h=V,!0):!1}const Re={[ur]:t.FUNC_ADD,[YE]:t.FUNC_SUBTRACT,[jE]:t.FUNC_REVERSE_SUBTRACT};Re[KE]=t.MIN,Re[ZE]=t.MAX;const ye={[JE]:t.ZERO,[QE]:t.ONE,[eT]:t.SRC_COLOR,[ru]:t.SRC_ALPHA,[oT]:t.SRC_ALPHA_SATURATE,[rT]:t.DST_COLOR,[nT]:t.DST_ALPHA,[tT]:t.ONE_MINUS_SRC_COLOR,[su]:t.ONE_MINUS_SRC_ALPHA,[sT]:t.ONE_MINUS_DST_COLOR,[iT]:t.ONE_MINUS_DST_ALPHA,[aT]:t.CONSTANT_COLOR,[lT]:t.ONE_MINUS_CONSTANT_COLOR,[cT]:t.CONSTANT_ALPHA,[uT]:t.ONE_MINUS_CONSTANT_ALPHA};function C(V,pe,se,xe,Te,tt,ct,gt,Dt,rt){if(V===Bi){v===!0&&(B(t.BLEND),v=!1);return}if(v===!1&&(ge(t.BLEND),v=!0),V!==qE){if(V!==g||rt!==D){if((m!==ur||x!==ur)&&(t.blendEquation(t.FUNC_ADD),m=ur,x=ur),rt)switch(V){case es:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case yh:t.blendFunc(t.ONE,t.ONE);break;case xh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Sh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case es:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case yh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case xh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Sh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}p=null,M=null,T=null,L=null,E.set(0,0,0),b=0,g=V,D=rt}return}Te=Te||pe,tt=tt||se,ct=ct||xe,(pe!==m||Te!==x)&&(t.blendEquationSeparate(Re[pe],Re[Te]),m=pe,x=Te),(se!==p||xe!==M||tt!==T||ct!==L)&&(t.blendFuncSeparate(ye[se],ye[xe],ye[tt],ye[ct]),p=se,M=xe,T=tt,L=ct),(gt.equals(E)===!1||Dt!==b)&&(t.blendColor(gt.r,gt.g,gt.b,Dt),E.copy(gt),b=Dt),g=V,D=!1}function P(V,pe){V.side===si?B(t.CULL_FACE):ge(t.CULL_FACE);let se=V.side===Jt;pe&&(se=!se),H(se),V.blending===es&&V.transparent===!1?C(Bi):C(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),s.setFunc(V.depthFunc),s.setTest(V.depthTest),s.setMask(V.depthWrite),r.setMask(V.colorWrite);const xe=V.stencilWrite;o.setTest(xe),xe&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ce(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ge(t.SAMPLE_ALPHA_TO_COVERAGE):B(t.SAMPLE_ALPHA_TO_COVERAGE)}function H(V){S!==V&&(V?t.frontFace(t.CW):t.frontFace(t.CCW),S=V)}function Y(V){V!==WE?(ge(t.CULL_FACE),V!==_&&(V===_h?t.cullFace(t.BACK):V===XE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):B(t.CULL_FACE),_=V}function $(V){V!==N&&(q&&t.lineWidth(V),N=V)}function ce(V,pe,se){V?(ge(t.POLYGON_OFFSET_FILL),(I!==pe||R!==se)&&(t.polygonOffset(pe,se),I=pe,R=se)):B(t.POLYGON_OFFSET_FILL)}function A(V){V?ge(t.SCISSOR_TEST):B(t.SCISSOR_TEST)}function y(V){V===void 0&&(V=t.TEXTURE0+k-1),G!==V&&(t.activeTexture(V),G=V)}function O(V,pe,se){se===void 0&&(G===null?se=t.TEXTURE0+k-1:se=G);let xe=fe[se];xe===void 0&&(xe={type:void 0,texture:void 0},fe[se]=xe),(xe.type!==V||xe.texture!==pe)&&(G!==se&&(t.activeTexture(se),G=se),t.bindTexture(V,pe||oe[V]),xe.type=V,xe.texture=pe)}function F(){const V=fe[G];V!==void 0&&V.type!==void 0&&(t.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function X(){try{t.compressedTexImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Z(){try{t.compressedTexImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ue(){try{t.texSubImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function re(){try{t.texSubImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function le(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function be(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function de(){try{t.texStorage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Me(){try{t.texStorage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Oe(){try{t.texImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pe(){try{t.texImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ee(V){Ae.equals(V)===!1&&(t.scissor(V.x,V.y,V.z,V.w),Ae.copy(V))}function Fe(V){$e.equals(V)===!1&&(t.viewport(V.x,V.y,V.z,V.w),$e.copy(V))}function We(V,pe){let se=l.get(pe);se===void 0&&(se=new WeakMap,l.set(pe,se));let xe=se.get(V);xe===void 0&&(xe=t.getUniformBlockIndex(pe,V.name),se.set(V,xe))}function qe(V,pe){const xe=l.get(pe).get(V);a.get(pe)!==xe&&(t.uniformBlockBinding(pe,xe,V.__bindingPointIndex),a.set(pe,xe))}function Ie(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},G=null,fe={},u={},f=new WeakMap,d=[],h=null,v=!1,g=null,m=null,p=null,M=null,x=null,T=null,L=null,E=new Ze(0,0,0),b=0,D=!1,S=null,_=null,N=null,I=null,R=null,Ae.set(0,0,t.canvas.width,t.canvas.height),$e.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ge,disable:B,bindFramebuffer:he,drawBuffers:ae,useProgram:U,setBlending:C,setMaterial:P,setFlipSided:H,setCullFace:Y,setLineWidth:$,setPolygonOffset:ce,setScissorTest:A,activeTexture:y,bindTexture:O,unbindTexture:F,compressedTexImage2D:X,compressedTexImage3D:Z,texImage2D:Oe,texImage3D:Pe,updateUBOMapping:We,uniformBlockBinding:qe,texStorage2D:de,texStorage3D:Me,texSubImage2D:ue,texSubImage3D:re,compressedTexSubImage2D:le,compressedTexSubImage3D:be,scissor:Ee,viewport:Fe,reset:Ie}}function YR(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qe,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,y){return h?new OffscreenCanvas(A,y):Xa("canvas")}function g(A,y,O){let F=1;const X=ce(A);if((X.width>O||X.height>O)&&(F=O/Math.max(X.width,X.height)),F<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Z=Math.floor(F*X.width),ue=Math.floor(F*X.height);f===void 0&&(f=v(Z,ue));const re=y?v(Z,ue):f;return re.width=Z,re.height=ue,re.getContext("2d").drawImage(A,0,0,Z,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+Z+"x"+ue+")."),re}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==xn&&A.minFilter!==Pn}function p(A){t.generateMipmap(A)}function M(A,y,O,F,X=!1){if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Z=y;if(y===t.RED&&(O===t.FLOAT&&(Z=t.R32F),O===t.HALF_FLOAT&&(Z=t.R16F),O===t.UNSIGNED_BYTE&&(Z=t.R8)),y===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(Z=t.R8UI),O===t.UNSIGNED_SHORT&&(Z=t.R16UI),O===t.UNSIGNED_INT&&(Z=t.R32UI),O===t.BYTE&&(Z=t.R8I),O===t.SHORT&&(Z=t.R16I),O===t.INT&&(Z=t.R32I)),y===t.RG&&(O===t.FLOAT&&(Z=t.RG32F),O===t.HALF_FLOAT&&(Z=t.RG16F),O===t.UNSIGNED_BYTE&&(Z=t.RG8)),y===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(Z=t.RG8UI),O===t.UNSIGNED_SHORT&&(Z=t.RG16UI),O===t.UNSIGNED_INT&&(Z=t.RG32UI),O===t.BYTE&&(Z=t.RG8I),O===t.SHORT&&(Z=t.RG16I),O===t.INT&&(Z=t.RG32I)),y===t.RGB&&O===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),y===t.RGBA){const ue=X?za:ot.getTransfer(F);O===t.FLOAT&&(Z=t.RGBA32F),O===t.HALF_FLOAT&&(Z=t.RGBA16F),O===t.UNSIGNED_BYTE&&(Z=ue===ut?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function x(A,y){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==xn&&A.minFilter!==Pn?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function T(A){const y=A.target;y.removeEventListener("dispose",T),E(y),y.isVideoTexture&&u.delete(y)}function L(A){const y=A.target;y.removeEventListener("dispose",L),D(y)}function E(A){const y=i.get(A);if(y.__webglInit===void 0)return;const O=A.source,F=d.get(O);if(F){const X=F[y.__cacheKey];X.usedTimes--,X.usedTimes===0&&b(A),Object.keys(F).length===0&&d.delete(O)}i.remove(A)}function b(A){const y=i.get(A);t.deleteTexture(y.__webglTexture);const O=A.source,F=d.get(O);delete F[y.__cacheKey],o.memory.textures--}function D(A){const y=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(y.__webglFramebuffer[F]))for(let X=0;X<y.__webglFramebuffer[F].length;X++)t.deleteFramebuffer(y.__webglFramebuffer[F][X]);else t.deleteFramebuffer(y.__webglFramebuffer[F]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[F])}else{if(Array.isArray(y.__webglFramebuffer))for(let F=0;F<y.__webglFramebuffer.length;F++)t.deleteFramebuffer(y.__webglFramebuffer[F]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let F=0;F<y.__webglColorRenderbuffer.length;F++)y.__webglColorRenderbuffer[F]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[F]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=A.textures;for(let F=0,X=O.length;F<X;F++){const Z=i.get(O[F]);Z.__webglTexture&&(t.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(O[F])}i.remove(A)}let S=0;function _(){S=0}function N(){const A=S;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),S+=1,A}function I(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function R(A,y){const O=i.get(A);if(A.isVideoTexture&&Y(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){const F=A.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(O,A,y);return}}n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+y)}function k(A,y){const O=i.get(A);if(A.version>0&&O.__version!==A.version){Ae(O,A,y);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+y)}function q(A,y){const O=i.get(A);if(A.version>0&&O.__version!==A.version){Ae(O,A,y);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+y)}function ee(A,y){const O=i.get(A);if(A.version>0&&O.__version!==A.version){$e(O,A,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+y)}const ie={[lu]:t.REPEAT,[hr]:t.CLAMP_TO_EDGE,[cu]:t.MIRRORED_REPEAT},G={[xn]:t.NEAREST,[wT]:t.NEAREST_MIPMAP_NEAREST,[$o]:t.NEAREST_MIPMAP_LINEAR,[Pn]:t.LINEAR,[Yl]:t.LINEAR_MIPMAP_NEAREST,[pr]:t.LINEAR_MIPMAP_LINEAR},fe={[zT]:t.NEVER,[qT]:t.ALWAYS,[HT]:t.LESS,[Xv]:t.LEQUAL,[GT]:t.EQUAL,[$T]:t.GEQUAL,[WT]:t.GREATER,[XT]:t.NOTEQUAL};function me(A,y){if(y.type===Ni&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Pn||y.magFilter===Yl||y.magFilter===$o||y.magFilter===pr||y.minFilter===Pn||y.minFilter===Yl||y.minFilter===$o||y.minFilter===pr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,ie[y.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,ie[y.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,ie[y.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,G[y.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,G[y.minFilter]),y.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,fe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===xn||y.minFilter!==$o&&y.minFilter!==pr||y.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ve(A,y){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",T));const F=y.source;let X=d.get(F);X===void 0&&(X={},d.set(F,X));const Z=I(y);if(Z!==A.__cacheKey){X[Z]===void 0&&(X[Z]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,O=!0),X[Z].usedTimes++;const ue=X[A.__cacheKey];ue!==void 0&&(X[A.__cacheKey].usedTimes--,ue.usedTimes===0&&b(y)),A.__cacheKey=Z,A.__webglTexture=X[Z].texture}return O}function Ae(A,y,O){let F=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(F=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(F=t.TEXTURE_3D);const X=ve(A,y),Z=y.source;n.bindTexture(F,A.__webglTexture,t.TEXTURE0+O);const ue=i.get(Z);if(Z.version!==ue.__version||X===!0){n.activeTexture(t.TEXTURE0+O);const re=ot.getPrimaries(ot.workingColorSpace),le=y.colorSpace===Ii?null:ot.getPrimaries(y.colorSpace),be=y.colorSpace===Ii||re===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let de=g(y.image,!1,r.maxTextureSize);de=$(y,de);const Me=s.convert(y.format,y.colorSpace),Oe=s.convert(y.type);let Pe=M(y.internalFormat,Me,Oe,y.colorSpace,y.isVideoTexture);me(F,y);let Ee;const Fe=y.mipmaps,We=y.isVideoTexture!==!0,qe=ue.__version===void 0||X===!0,Ie=Z.dataReady,V=x(y,de);if(y.isDepthTexture)Pe=t.DEPTH_COMPONENT16,y.type===Ni?Pe=t.DEPTH_COMPONENT32F:y.type===hs?Pe=t.DEPTH_COMPONENT24:y.type===wo&&(Pe=t.DEPTH24_STENCIL8),qe&&(We?n.texStorage2D(t.TEXTURE_2D,1,Pe,de.width,de.height):n.texImage2D(t.TEXTURE_2D,0,Pe,de.width,de.height,0,Me,Oe,null));else if(y.isDataTexture)if(Fe.length>0){We&&qe&&n.texStorage2D(t.TEXTURE_2D,V,Pe,Fe[0].width,Fe[0].height);for(let pe=0,se=Fe.length;pe<se;pe++)Ee=Fe[pe],We?Ie&&n.texSubImage2D(t.TEXTURE_2D,pe,0,0,Ee.width,Ee.height,Me,Oe,Ee.data):n.texImage2D(t.TEXTURE_2D,pe,Pe,Ee.width,Ee.height,0,Me,Oe,Ee.data);y.generateMipmaps=!1}else We?(qe&&n.texStorage2D(t.TEXTURE_2D,V,Pe,de.width,de.height),Ie&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,de.width,de.height,Me,Oe,de.data)):n.texImage2D(t.TEXTURE_2D,0,Pe,de.width,de.height,0,Me,Oe,de.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){We&&qe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,V,Pe,Fe[0].width,Fe[0].height,de.depth);for(let pe=0,se=Fe.length;pe<se;pe++)Ee=Fe[pe],y.format!==Wn?Me!==null?We?Ie&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,pe,0,0,0,Ee.width,Ee.height,de.depth,Me,Ee.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,pe,Pe,Ee.width,Ee.height,de.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?Ie&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,pe,0,0,0,Ee.width,Ee.height,de.depth,Me,Oe,Ee.data):n.texImage3D(t.TEXTURE_2D_ARRAY,pe,Pe,Ee.width,Ee.height,de.depth,0,Me,Oe,Ee.data)}else{We&&qe&&n.texStorage2D(t.TEXTURE_2D,V,Pe,Fe[0].width,Fe[0].height);for(let pe=0,se=Fe.length;pe<se;pe++)Ee=Fe[pe],y.format!==Wn?Me!==null?We?Ie&&n.compressedTexSubImage2D(t.TEXTURE_2D,pe,0,0,Ee.width,Ee.height,Me,Ee.data):n.compressedTexImage2D(t.TEXTURE_2D,pe,Pe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?Ie&&n.texSubImage2D(t.TEXTURE_2D,pe,0,0,Ee.width,Ee.height,Me,Oe,Ee.data):n.texImage2D(t.TEXTURE_2D,pe,Pe,Ee.width,Ee.height,0,Me,Oe,Ee.data)}else if(y.isDataArrayTexture)We?(qe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,V,Pe,de.width,de.height,de.depth),Ie&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Me,Oe,de.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,de.width,de.height,de.depth,0,Me,Oe,de.data);else if(y.isData3DTexture)We?(qe&&n.texStorage3D(t.TEXTURE_3D,V,Pe,de.width,de.height,de.depth),Ie&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Me,Oe,de.data)):n.texImage3D(t.TEXTURE_3D,0,Pe,de.width,de.height,de.depth,0,Me,Oe,de.data);else if(y.isFramebufferTexture){if(qe)if(We)n.texStorage2D(t.TEXTURE_2D,V,Pe,de.width,de.height);else{let pe=de.width,se=de.height;for(let xe=0;xe<V;xe++)n.texImage2D(t.TEXTURE_2D,xe,Pe,pe,se,0,Me,Oe,null),pe>>=1,se>>=1}}else if(Fe.length>0){if(We&&qe){const pe=ce(Fe[0]);n.texStorage2D(t.TEXTURE_2D,V,Pe,pe.width,pe.height)}for(let pe=0,se=Fe.length;pe<se;pe++)Ee=Fe[pe],We?Ie&&n.texSubImage2D(t.TEXTURE_2D,pe,0,0,Me,Oe,Ee):n.texImage2D(t.TEXTURE_2D,pe,Pe,Me,Oe,Ee);y.generateMipmaps=!1}else if(We){if(qe){const pe=ce(de);n.texStorage2D(t.TEXTURE_2D,V,Pe,pe.width,pe.height)}Ie&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Me,Oe,de)}else n.texImage2D(t.TEXTURE_2D,0,Pe,Me,Oe,de);m(y)&&p(F),ue.__version=Z.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function $e(A,y,O){if(y.image.length!==6)return;const F=ve(A,y),X=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+O);const Z=i.get(X);if(X.version!==Z.__version||F===!0){n.activeTexture(t.TEXTURE0+O);const ue=ot.getPrimaries(ot.workingColorSpace),re=y.colorSpace===Ii?null:ot.getPrimaries(y.colorSpace),le=y.colorSpace===Ii||ue===re?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const be=y.isCompressedTexture||y.image[0].isCompressedTexture,de=y.image[0]&&y.image[0].isDataTexture,Me=[];for(let se=0;se<6;se++)!be&&!de?Me[se]=g(y.image[se],!0,r.maxCubemapSize):Me[se]=de?y.image[se].image:y.image[se],Me[se]=$(y,Me[se]);const Oe=Me[0],Pe=s.convert(y.format,y.colorSpace),Ee=s.convert(y.type),Fe=M(y.internalFormat,Pe,Ee,y.colorSpace),We=y.isVideoTexture!==!0,qe=Z.__version===void 0||F===!0,Ie=X.dataReady;let V=x(y,Oe);me(t.TEXTURE_CUBE_MAP,y);let pe;if(be){We&&qe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,V,Fe,Oe.width,Oe.height);for(let se=0;se<6;se++){pe=Me[se].mipmaps;for(let xe=0;xe<pe.length;xe++){const Te=pe[xe];y.format!==Wn?Pe!==null?We?Ie&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe,0,0,Te.width,Te.height,Pe,Te.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe,Fe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?Ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe,0,0,Te.width,Te.height,Pe,Ee,Te.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe,Fe,Te.width,Te.height,0,Pe,Ee,Te.data)}}}else{if(pe=y.mipmaps,We&&qe){pe.length>0&&V++;const se=ce(Me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,V,Fe,se.width,se.height)}for(let se=0;se<6;se++)if(de){We?Ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Me[se].width,Me[se].height,Pe,Ee,Me[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Fe,Me[se].width,Me[se].height,0,Pe,Ee,Me[se].data);for(let xe=0;xe<pe.length;xe++){const tt=pe[xe].image[se].image;We?Ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe+1,0,0,tt.width,tt.height,Pe,Ee,tt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe+1,Fe,tt.width,tt.height,0,Pe,Ee,tt.data)}}else{We?Ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Pe,Ee,Me[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Fe,Pe,Ee,Me[se]);for(let xe=0;xe<pe.length;xe++){const Te=pe[xe];We?Ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe+1,0,0,Pe,Ee,Te.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe+1,Fe,Pe,Ee,Te.image[se])}}}m(y)&&p(t.TEXTURE_CUBE_MAP),Z.__version=X.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function te(A,y,O,F,X,Z){const ue=s.convert(O.format,O.colorSpace),re=s.convert(O.type),le=M(O.internalFormat,ue,re,O.colorSpace);if(!i.get(y).__hasExternalTextures){const de=Math.max(1,y.width>>Z),Me=Math.max(1,y.height>>Z);X===t.TEXTURE_3D||X===t.TEXTURE_2D_ARRAY?n.texImage3D(X,Z,le,de,Me,y.depth,0,ue,re,null):n.texImage2D(X,Z,le,de,Me,0,ue,re,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),H(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,F,X,i.get(O).__webglTexture,0,P(y)):(X===t.TEXTURE_2D||X>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,F,X,i.get(O).__webglTexture,Z),n.bindFramebuffer(t.FRAMEBUFFER,null)}function oe(A,y,O){if(t.bindRenderbuffer(t.RENDERBUFFER,A),y.depthBuffer&&!y.stencilBuffer){let F=t.DEPTH_COMPONENT24;if(O||H(y)){const X=y.depthTexture;X&&X.isDepthTexture&&(X.type===Ni?F=t.DEPTH_COMPONENT32F:X.type===hs&&(F=t.DEPTH_COMPONENT24));const Z=P(y);H(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Z,F,y.width,y.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,Z,F,y.width,y.height)}else t.renderbufferStorage(t.RENDERBUFFER,F,y.width,y.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(y.depthBuffer&&y.stencilBuffer){const F=P(y);O&&H(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,F,t.DEPTH24_STENCIL8,y.width,y.height):H(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,F,t.DEPTH24_STENCIL8,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const F=y.textures;for(let X=0;X<F.length;X++){const Z=F[X],ue=s.convert(Z.format,Z.colorSpace),re=s.convert(Z.type),le=M(Z.internalFormat,ue,re,Z.colorSpace),be=P(y);O&&H(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,be,le,y.width,y.height):H(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,be,le,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,le,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ge(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),R(y.depthTexture,0);const F=i.get(y.depthTexture).__webglTexture,X=P(y);if(y.depthTexture.format===ts)H(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,F,0,X):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,F,0);else if(y.depthTexture.format===fo)H(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,F,0,X):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,F,0);else throw new Error("Unknown depthTexture format")}function B(A){const y=i.get(A),O=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ge(y.__webglFramebuffer,A)}else if(O){y.__webglDepthbuffer=[];for(let F=0;F<6;F++)n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[F]),y.__webglDepthbuffer[F]=t.createRenderbuffer(),oe(y.__webglDepthbuffer[F],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=t.createRenderbuffer(),oe(y.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function he(A,y,O){const F=i.get(A);y!==void 0&&te(F.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&B(A)}function ae(A){const y=A.texture,O=i.get(A),F=i.get(y);A.addEventListener("dispose",L);const X=A.textures,Z=A.isWebGLCubeRenderTarget===!0,ue=X.length>1;if(ue||(F.__webglTexture===void 0&&(F.__webglTexture=t.createTexture()),F.__version=y.version,o.memory.textures++),Z){O.__webglFramebuffer=[];for(let re=0;re<6;re++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[re]=[];for(let le=0;le<y.mipmaps.length;le++)O.__webglFramebuffer[re][le]=t.createFramebuffer()}else O.__webglFramebuffer[re]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let re=0;re<y.mipmaps.length;re++)O.__webglFramebuffer[re]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(ue)for(let re=0,le=X.length;re<le;re++){const be=i.get(X[re]);be.__webglTexture===void 0&&(be.__webglTexture=t.createTexture(),o.memory.textures++)}if(A.samples>0&&H(A)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let re=0;re<X.length;re++){const le=X[re];O.__webglColorRenderbuffer[re]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[re]);const be=s.convert(le.format,le.colorSpace),de=s.convert(le.type),Me=M(le.internalFormat,be,de,le.colorSpace,A.isXRRenderTarget===!0),Oe=P(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Oe,Me,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+re,t.RENDERBUFFER,O.__webglColorRenderbuffer[re])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),oe(O.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture),me(t.TEXTURE_CUBE_MAP,y);for(let re=0;re<6;re++)if(y.mipmaps&&y.mipmaps.length>0)for(let le=0;le<y.mipmaps.length;le++)te(O.__webglFramebuffer[re][le],A,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+re,le);else te(O.__webglFramebuffer[re],A,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(y)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ue){for(let re=0,le=X.length;re<le;re++){const be=X[re],de=i.get(be);n.bindTexture(t.TEXTURE_2D,de.__webglTexture),me(t.TEXTURE_2D,be),te(O.__webglFramebuffer,A,be,t.COLOR_ATTACHMENT0+re,t.TEXTURE_2D,0),m(be)&&p(t.TEXTURE_2D)}n.unbindTexture()}else{let re=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(re=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(re,F.__webglTexture),me(re,y),y.mipmaps&&y.mipmaps.length>0)for(let le=0;le<y.mipmaps.length;le++)te(O.__webglFramebuffer[le],A,y,t.COLOR_ATTACHMENT0,re,le);else te(O.__webglFramebuffer,A,y,t.COLOR_ATTACHMENT0,re,0);m(y)&&p(re),n.unbindTexture()}A.depthBuffer&&B(A)}function U(A){const y=A.textures;for(let O=0,F=y.length;O<F;O++){const X=y[O];if(m(X)){const Z=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ue=i.get(X).__webglTexture;n.bindTexture(Z,ue),p(Z),n.unbindTexture()}}}const Re=[],ye=[];function C(A){if(A.samples>0){if(H(A)===!1){const y=A.textures,O=A.width,F=A.height;let X=t.COLOR_BUFFER_BIT;const Z=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(A),re=y.length>1;if(re)for(let le=0;le<y.length;le++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let le=0;le<y.length;le++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(X|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(X|=t.STENCIL_BUFFER_BIT)),re){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[le]);const be=i.get(y[le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,be,0)}t.blitFramebuffer(0,0,O,F,0,0,O,F,X,t.NEAREST),l===!0&&(Re.length=0,ye.length=0,Re.push(t.COLOR_ATTACHMENT0+le),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Re.push(Z),ye.push(Z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ye)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Re))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),re)for(let le=0;le<y.length;le++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,ue.__webglColorRenderbuffer[le]);const be=i.get(y[le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const y=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function P(A){return Math.min(r.maxSamples,A.samples)}function H(A){const y=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Y(A){const y=o.render.frame;u.get(A)!==y&&(u.set(A,y),A.update())}function $(A,y){const O=A.colorSpace,F=A.format,X=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==ji&&O!==Ii&&(ot.getTransfer(O)===ut?(F!==Wn||X!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function ce(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=_,this.setTexture2D=R,this.setTexture2DArray=k,this.setTexture3D=q,this.setTextureCube=ee,this.rebindTextures=he,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=C,this.setupDepthRenderbuffer=B,this.setupFrameBufferTexture=te,this.useMultisampledRTT=H}function jR(t,e){function n(i,r=Ii){let s;const o=ot.getTransfer(r);if(i===Wi)return t.UNSIGNED_BYTE;if(i===kv)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Vv)return t.UNSIGNED_SHORT_5_5_5_1;if(i===PT)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===CT)return t.BYTE;if(i===RT)return t.SHORT;if(i===Fv)return t.UNSIGNED_SHORT;if(i===Bv)return t.INT;if(i===hs)return t.UNSIGNED_INT;if(i===Ni)return t.FLOAT;if(i===_l)return t.HALF_FLOAT;if(i===LT)return t.ALPHA;if(i===IT)return t.RGB;if(i===Wn)return t.RGBA;if(i===DT)return t.LUMINANCE;if(i===NT)return t.LUMINANCE_ALPHA;if(i===ts)return t.DEPTH_COMPONENT;if(i===fo)return t.DEPTH_STENCIL;if(i===UT)return t.RED;if(i===zv)return t.RED_INTEGER;if(i===OT)return t.RG;if(i===Hv)return t.RG_INTEGER;if(i===Gv)return t.RGBA_INTEGER;if(i===jl||i===Kl||i===Zl||i===Jl)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===jl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Kl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Jl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===jl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Kl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Jl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Mh||i===bh||i===Eh||i===Th)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Mh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===bh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Eh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Th)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ah||i===wh||i===Ch)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ah||i===wh)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ch)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Rh||i===Ph||i===Lh||i===Ih||i===Dh||i===Nh||i===Uh||i===Oh||i===Fh||i===Bh||i===kh||i===Vh||i===zh||i===Hh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Rh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ph)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Lh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ih)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Uh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Oh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===kh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ql||i===Gh||i===Wh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ql)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===FT||i===Xh||i===$h||i===qh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ql)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Xh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$h)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===wo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class KR extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class pa extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZR={type:"move"};class Ac{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=n.getJointPose(g,i),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,v=.005;c.inputState.pinching&&d>h+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ZR)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new pa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const JR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QR=`
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

}`;class eP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Qt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new Xi({vertexShader:JR,fragmentShader:QR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ln(new xl(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class tP extends bs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,v=null;const g=new eP,m=n.getContextAttributes();let p=null,M=null;const x=[],T=[],L=new Qe;let E=null;const b=new gn;b.layers.enable(1),b.viewport=new Lt;const D=new gn;D.layers.enable(2),D.viewport=new Lt;const S=[b,D],_=new KR;_.layers.enable(1),_.layers.enable(2);let N=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let oe=x[te];return oe===void 0&&(oe=new Ac,x[te]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(te){let oe=x[te];return oe===void 0&&(oe=new Ac,x[te]=oe),oe.getGripSpace()},this.getHand=function(te){let oe=x[te];return oe===void 0&&(oe=new Ac,x[te]=oe),oe.getHandSpace()};function R(te){const oe=T.indexOf(te.inputSource);if(oe===-1)return;const ge=x[oe];ge!==void 0&&(ge.update(te.inputSource,te.frame,c||o),ge.dispatchEvent({type:te.type,data:te.inputSource}))}function k(){r.removeEventListener("select",R),r.removeEventListener("selectstart",R),r.removeEventListener("selectend",R),r.removeEventListener("squeeze",R),r.removeEventListener("squeezestart",R),r.removeEventListener("squeezeend",R),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",q);for(let te=0;te<x.length;te++){const oe=T[te];oe!==null&&(T[te]=null,x[te].disconnect(oe))}N=null,I=null,g.reset(),e.setRenderTarget(p),h=null,d=null,f=null,r=null,M=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",R),r.addEventListener("selectstart",R),r.addEventListener("selectend",R),r.addEventListener("squeeze",R),r.addEventListener("squeezestart",R),r.addEventListener("squeezeend",R),r.addEventListener("end",k),r.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await n.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){const oe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,oe),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new Mr(h.framebufferWidth,h.framebufferHeight,{format:Wn,type:Wi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let oe=null,ge=null,B=null;m.depth&&(B=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,oe=m.stencil?fo:ts,ge=m.stencil?wo:hs);const he={colorFormat:n.RGBA8,depthFormat:B,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(he),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Mr(d.textureWidth,d.textureHeight,{format:Wn,type:Wi,depthTexture:new r_(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),$e.setContext(r),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function q(te){for(let oe=0;oe<te.removed.length;oe++){const ge=te.removed[oe],B=T.indexOf(ge);B>=0&&(T[B]=null,x[B].disconnect(ge))}for(let oe=0;oe<te.added.length;oe++){const ge=te.added[oe];let B=T.indexOf(ge);if(B===-1){for(let ae=0;ae<x.length;ae++)if(ae>=T.length){T.push(ge),B=ae;break}else if(T[ae]===null){T[ae]=ge,B=ae;break}if(B===-1)break}const he=x[B];he&&he.connect(ge)}}const ee=new J,ie=new J;function G(te,oe,ge){ee.setFromMatrixPosition(oe.matrixWorld),ie.setFromMatrixPosition(ge.matrixWorld);const B=ee.distanceTo(ie),he=oe.projectionMatrix.elements,ae=ge.projectionMatrix.elements,U=he[14]/(he[10]-1),Re=he[14]/(he[10]+1),ye=(he[9]+1)/he[5],C=(he[9]-1)/he[5],P=(he[8]-1)/he[0],H=(ae[8]+1)/ae[0],Y=U*P,$=U*H,ce=B/(-P+H),A=ce*-P;oe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(A),te.translateZ(ce),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();const y=U+ce,O=Re+ce,F=Y-A,X=$+(B-A),Z=ye*Re/O*y,ue=C*Re/O*y;te.projectionMatrix.makePerspective(F,X,Z,ue,y,O),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function fe(te,oe){oe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(oe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;g.texture!==null&&(te.near=g.depthNear,te.far=g.depthFar),_.near=D.near=b.near=te.near,_.far=D.far=b.far=te.far,(N!==_.near||I!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),N=_.near,I=_.far,b.near=N,b.far=I,D.near=N,D.far=I,b.updateProjectionMatrix(),D.updateProjectionMatrix(),te.updateProjectionMatrix());const oe=te.parent,ge=_.cameras;fe(_,oe);for(let B=0;B<ge.length;B++)fe(ge[B],oe);ge.length===2?G(_,b,D):_.projectionMatrix.copy(b.projectionMatrix),me(te,_,oe)};function me(te,oe,ge){ge===null?te.matrix.copy(oe.matrixWorld):(te.matrix.copy(ge.matrixWorld),te.matrix.invert(),te.matrix.multiply(oe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(oe.projectionMatrix),te.projectionMatrixInverse.copy(oe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=uu*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=te)},this.hasDepthSensing=function(){return g.texture!==null};let ve=null;function Ae(te,oe){if(u=oe.getViewerPose(c||o),v=oe,u!==null){const ge=u.views;h!==null&&(e.setRenderTargetFramebuffer(M,h.framebuffer),e.setRenderTarget(M));let B=!1;ge.length!==_.cameras.length&&(_.cameras.length=0,B=!0);for(let ae=0;ae<ge.length;ae++){const U=ge[ae];let Re=null;if(h!==null)Re=h.getViewport(U);else{const C=f.getViewSubImage(d,U);Re=C.viewport,ae===0&&(e.setRenderTargetTextures(M,C.colorTexture,d.ignoreDepthValues?void 0:C.depthStencilTexture),e.setRenderTarget(M))}let ye=S[ae];ye===void 0&&(ye=new gn,ye.layers.enable(ae),ye.viewport=new Lt,S[ae]=ye),ye.matrix.fromArray(U.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(U.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Re.x,Re.y,Re.width,Re.height),ae===0&&(_.matrix.copy(ye.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),B===!0&&_.cameras.push(ye)}const he=r.enabledFeatures;if(he&&he.includes("depth-sensing")){const ae=f.getDepthInformation(ge[0]);ae&&ae.isValid&&ae.texture&&g.init(e,ae,r.renderState)}}for(let ge=0;ge<x.length;ge++){const B=T[ge],he=x[ge];B!==null&&he!==void 0&&he.update(B,oe,c||o)}g.render(e,_),ve&&ve(te,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),v=null}const $e=new i_;$e.setAnimationLoop(Ae),this.setAnimationLoop=function(te){ve=te},this.dispose=function(){}}}const or=new qn,nP=new Tt;function iP(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Qv(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,x,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,T)):p.isMeshMatcapMaterial?(s(m,p),v(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),x=M.envMap,T=M.envMapRotation;if(x&&(m.envMap.value=x,or.copy(T),or.x*=-1,or.y*=-1,or.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),m.envMapRotation.value.setFromMatrix4(nP.makeRotationFromEuler(or)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const L=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*L,n(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=x*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Jt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function rP(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const T=x.program;i.uniformBlockBinding(M,T)}function c(M,x){let T=r[M.id];T===void 0&&(v(M),T=u(M),r[M.id]=T,M.addEventListener("dispose",m));const L=x.program;i.updateUBOMapping(M,L);const E=e.render.frame;s[M.id]!==E&&(d(M),s[M.id]=E)}function u(M){const x=f();M.__bindingPointIndex=x;const T=t.createBuffer(),L=M.__size,E=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,L,E),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,T),T}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const x=r[M.id],T=M.uniforms,L=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let E=0,b=T.length;E<b;E++){const D=Array.isArray(T[E])?T[E]:[T[E]];for(let S=0,_=D.length;S<_;S++){const N=D[S];if(h(N,E,S,L)===!0){const I=N.__offset,R=Array.isArray(N.value)?N.value:[N.value];let k=0;for(let q=0;q<R.length;q++){const ee=R[q],ie=g(ee);typeof ee=="number"||typeof ee=="boolean"?(N.__data[0]=ee,t.bufferSubData(t.UNIFORM_BUFFER,I+k,N.__data)):ee.isMatrix3?(N.__data[0]=ee.elements[0],N.__data[1]=ee.elements[1],N.__data[2]=ee.elements[2],N.__data[3]=0,N.__data[4]=ee.elements[3],N.__data[5]=ee.elements[4],N.__data[6]=ee.elements[5],N.__data[7]=0,N.__data[8]=ee.elements[6],N.__data[9]=ee.elements[7],N.__data[10]=ee.elements[8],N.__data[11]=0):(ee.toArray(N.__data,k),k+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,I,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(M,x,T,L){const E=M.value,b=x+"_"+T;if(L[b]===void 0)return typeof E=="number"||typeof E=="boolean"?L[b]=E:L[b]=E.clone(),!0;{const D=L[b];if(typeof E=="number"||typeof E=="boolean"){if(D!==E)return L[b]=E,!0}else if(D.equals(E)===!1)return D.copy(E),!0}return!1}function v(M){const x=M.uniforms;let T=0;const L=16;for(let b=0,D=x.length;b<D;b++){const S=Array.isArray(x[b])?x[b]:[x[b]];for(let _=0,N=S.length;_<N;_++){const I=S[_],R=Array.isArray(I.value)?I.value:[I.value];for(let k=0,q=R.length;k<q;k++){const ee=R[k],ie=g(ee),G=T%L;G!==0&&L-G<ie.boundary&&(T+=L-G),I.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=T,T+=ie.storage}}}const E=T%L;return E>0&&(T+=L-E),M.__size=T,M.__cache={},this}function g(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const T=o.indexOf(x.__bindingPointIndex);o.splice(T,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const M in r)t.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class sP{constructor(e={}){const{canvas:n=jT(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const h=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const p=[],M=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bn,this._useLegacyLights=!1,this.toneMapping=ki,this.toneMappingExposure=1;const x=this;let T=!1,L=0,E=0,b=null,D=-1,S=null;const _=new Lt,N=new Lt;let I=null;const R=new Ze(0);let k=0,q=n.width,ee=n.height,ie=1,G=null,fe=null;const me=new Lt(0,0,q,ee),ve=new Lt(0,0,q,ee);let Ae=!1;const $e=new n_;let te=!1,oe=!1;const ge=new Tt,B=new J,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ae(){return b===null?ie:1}let U=i;function Re(w,W){return n.getContext(w,W)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${nf}`),n.addEventListener("webglcontextlost",V,!1),n.addEventListener("webglcontextrestored",pe,!1),n.addEventListener("webglcontextcreationerror",se,!1),U===null){const W="webgl2";if(U=Re(W,w),U===null)throw Re(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ye,C,P,H,Y,$,ce,A,y,O,F,X,Z,ue,re,le,be,de,Me,Oe,Pe,Ee,Fe,We;function qe(){ye=new h1(U),ye.init(),Ee=new jR(U,ye),C=new o1(U,ye,e,Ee),P=new qR(U),H=new g1(U),Y=new DR,$=new YR(U,ye,P,Y,C,Ee,H),ce=new l1(x),A=new d1(x),y=new MA(U),Fe=new r1(U,y),O=new p1(U,y,H,Fe),F=new _1(U,O,y,H),Me=new v1(U,C,$),le=new a1(Y),X=new IR(x,ce,A,ye,C,Fe,le),Z=new iP(x,Y),ue=new UR,re=new zR(ye),de=new i1(x,ce,A,P,F,d,l),be=new $R(x,F,C),We=new rP(U,H,C,P),Oe=new s1(U,ye,H),Pe=new m1(U,ye,H),H.programs=X.programs,x.capabilities=C,x.extensions=ye,x.properties=Y,x.renderLists=ue,x.shadowMap=be,x.state=P,x.info=H}qe();const Ie=new tP(x,U);this.xr=Ie,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const w=ye.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ye.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(w){w!==void 0&&(ie=w,this.setSize(q,ee,!1))},this.getSize=function(w){return w.set(q,ee)},this.setSize=function(w,W,Q=!0){if(Ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,ee=W,n.width=Math.floor(w*ie),n.height=Math.floor(W*ie),Q===!0&&(n.style.width=w+"px",n.style.height=W+"px"),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(q*ie,ee*ie).floor()},this.setDrawingBufferSize=function(w,W,Q){q=w,ee=W,ie=Q,n.width=Math.floor(w*Q),n.height=Math.floor(W*Q),this.setViewport(0,0,w,W)},this.getCurrentViewport=function(w){return w.copy(_)},this.getViewport=function(w){return w.copy(me)},this.setViewport=function(w,W,Q,j){w.isVector4?me.set(w.x,w.y,w.z,w.w):me.set(w,W,Q,j),P.viewport(_.copy(me).multiplyScalar(ie).round())},this.getScissor=function(w){return w.copy(ve)},this.setScissor=function(w,W,Q,j){w.isVector4?ve.set(w.x,w.y,w.z,w.w):ve.set(w,W,Q,j),P.scissor(N.copy(ve).multiplyScalar(ie).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(w){P.setScissorTest(Ae=w)},this.setOpaqueSort=function(w){G=w},this.setTransparentSort=function(w){fe=w},this.getClearColor=function(w){return w.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(w=!0,W=!0,Q=!0){let j=0;if(w){let K=!1;if(b!==null){const Se=b.texture.format;K=Se===Gv||Se===Hv||Se===zv}if(K){const Se=b.texture.type,we=Se===Wi||Se===hs||Se===Fv||Se===wo||Se===kv||Se===Vv,Ce=de.getClearColor(),Ne=de.getClearAlpha(),Be=Ce.r,ze=Ce.g,Xe=Ce.b;we?(h[0]=Be,h[1]=ze,h[2]=Xe,h[3]=Ne,U.clearBufferuiv(U.COLOR,0,h)):(v[0]=Be,v[1]=ze,v[2]=Xe,v[3]=Ne,U.clearBufferiv(U.COLOR,0,v))}else j|=U.COLOR_BUFFER_BIT}W&&(j|=U.DEPTH_BUFFER_BIT),Q&&(j|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",V,!1),n.removeEventListener("webglcontextrestored",pe,!1),n.removeEventListener("webglcontextcreationerror",se,!1),ue.dispose(),re.dispose(),Y.dispose(),ce.dispose(),A.dispose(),F.dispose(),Fe.dispose(),We.dispose(),X.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",rt),Ie.removeEventListener("sessionend",On),Gt.stop()};function V(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const w=H.autoReset,W=be.enabled,Q=be.autoUpdate,j=be.needsUpdate,K=be.type;qe(),H.autoReset=w,be.enabled=W,be.autoUpdate=Q,be.needsUpdate=j,be.type=K}function se(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function xe(w){const W=w.target;W.removeEventListener("dispose",xe),Te(W)}function Te(w){tt(w),Y.remove(w)}function tt(w){const W=Y.get(w).programs;W!==void 0&&(W.forEach(function(Q){X.releaseProgram(Q)}),w.isShaderMaterial&&X.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,Q,j,K,Se){W===null&&(W=he);const we=K.isMesh&&K.matrixWorld.determinant()<0,Ce=d_(w,W,Q,j,K);P.setMaterial(j,we);let Ne=Q.index,Be=1;if(j.wireframe===!0){if(Ne=O.getWireframeAttribute(Q),Ne===void 0)return;Be=2}const ze=Q.drawRange,Xe=Q.attributes.position;let bt=ze.start*Be,Nt=(ze.start+ze.count)*Be;Se!==null&&(bt=Math.max(bt,Se.start*Be),Nt=Math.min(Nt,(Se.start+Se.count)*Be)),Ne!==null?(bt=Math.max(bt,0),Nt=Math.min(Nt,Ne.count)):Xe!=null&&(bt=Math.max(bt,0),Nt=Math.min(Nt,Xe.count));const tn=Nt-bt;if(tn<0||tn===1/0)return;Fe.setup(K,j,Ce,Q,Ne);let Kn,it=Oe;if(Ne!==null&&(Kn=y.get(Ne),it=Pe,it.setIndex(Kn)),K.isMesh)j.wireframe===!0?(P.setLineWidth(j.wireframeLinewidth*ae()),it.setMode(U.LINES)):it.setMode(U.TRIANGLES);else if(K.isLine){let ke=j.linewidth;ke===void 0&&(ke=1),P.setLineWidth(ke*ae()),K.isLineSegments?it.setMode(U.LINES):K.isLineLoop?it.setMode(U.LINE_LOOP):it.setMode(U.LINE_STRIP)}else K.isPoints?it.setMode(U.POINTS):K.isSprite&&it.setMode(U.TRIANGLES);if(K.isBatchedMesh)K._multiDrawInstances!==null?it.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances):it.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else if(K.isInstancedMesh)it.renderInstances(bt,tn,K.count);else if(Q.isInstancedBufferGeometry){const ke=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ts=Math.min(Q.instanceCount,ke);it.renderInstances(bt,tn,Ts)}else it.render(bt,tn)};function ct(w,W,Q){w.transparent===!0&&w.side===si&&w.forceSinglePass===!1?(w.side=Jt,w.needsUpdate=!0,No(w,W,Q),w.side=Gi,w.needsUpdate=!0,No(w,W,Q),w.side=si):No(w,W,Q)}this.compile=function(w,W,Q=null){Q===null&&(Q=w),m=re.get(Q),m.init(W),M.push(m),Q.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),w!==Q&&w.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),m.setupLights(x._useLegacyLights);const j=new Set;return w.traverse(function(K){const Se=K.material;if(Se)if(Array.isArray(Se))for(let we=0;we<Se.length;we++){const Ce=Se[we];ct(Ce,Q,K),j.add(Ce)}else ct(Se,Q,K),j.add(Se)}),M.pop(),m=null,j},this.compileAsync=function(w,W,Q=null){const j=this.compile(w,W,Q);return new Promise(K=>{function Se(){if(j.forEach(function(we){Y.get(we).currentProgram.isReady()&&j.delete(we)}),j.size===0){K(w);return}setTimeout(Se,10)}ye.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let gt=null;function Dt(w){gt&&gt(w)}function rt(){Gt.stop()}function On(){Gt.start()}const Gt=new i_;Gt.setAnimationLoop(Dt),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(w){gt=w,Ie.setAnimationLoop(w),w===null?Gt.stop():Gt.start()},Ie.addEventListener("sessionstart",rt),Ie.addEventListener("sessionend",On),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(W),W=Ie.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,W,b),m=re.get(w,M.length),m.init(W),M.push(m),ge.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),$e.setFromProjectionMatrix(ge),oe=this.localClippingEnabled,te=le.init(this.clippingPlanes,oe),g=ue.get(w,p.length),g.init(),p.push(g),hf(w,W,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(G,fe);const Q=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1;Q&&de.addToRenderList(g,w),this.info.render.frame++,te===!0&&le.beginShadows();const j=m.state.shadowsArray;be.render(j,w,W),te===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=g.opaque,Se=g.transmissive;if(m.setupLights(x._useLegacyLights),W.isArrayCamera){const we=W.cameras;if(Se.length>0)for(let Ce=0,Ne=we.length;Ce<Ne;Ce++){const Be=we[Ce];mf(K,Se,w,Be)}Q&&de.render(w);for(let Ce=0,Ne=we.length;Ce<Ne;Ce++){const Be=we[Ce];pf(g,w,Be,Be.viewport)}}else Se.length>0&&mf(K,Se,w,W),Q&&de.render(w),pf(g,w,W);b!==null&&($.updateMultisampleRenderTarget(b),$.updateRenderTargetMipmap(b)),w.isScene===!0&&w.onAfterRender(x,w,W),Fe.resetDefaultState(),D=-1,S=null,M.pop(),M.length>0?(m=M[M.length-1],te===!0&&le.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function hf(w,W,Q,j){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)Q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||$e.intersectsSprite(w)){j&&B.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ge);const we=F.update(w),Ce=w.material;Ce.visible&&g.push(w,we,Ce,Q,B.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||$e.intersectsObject(w))){const we=F.update(w),Ce=w.material;if(j&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),B.copy(w.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),B.copy(we.boundingSphere.center)),B.applyMatrix4(w.matrixWorld).applyMatrix4(ge)),Array.isArray(Ce)){const Ne=we.groups;for(let Be=0,ze=Ne.length;Be<ze;Be++){const Xe=Ne[Be],bt=Ce[Xe.materialIndex];bt&&bt.visible&&g.push(w,we,bt,Q,B.z,Xe)}}else Ce.visible&&g.push(w,we,Ce,Q,B.z,null)}}const Se=w.children;for(let we=0,Ce=Se.length;we<Ce;we++)hf(Se[we],W,Q,j)}function pf(w,W,Q,j){const K=w.opaque,Se=w.transmissive,we=w.transparent;m.setupLightsView(Q),te===!0&&le.setGlobalState(x.clippingPlanes,Q),j&&P.viewport(_.copy(j)),K.length>0&&Do(K,W,Q),Se.length>0&&Do(Se,W,Q),we.length>0&&Do(we,W,Q),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function mf(w,W,Q,j){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[j.id]===void 0&&(m.state.transmissionRenderTarget[j.id]=new Mr(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float")?_l:Wi,minFilter:pr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const Se=m.state.transmissionRenderTarget[j.id],we=j.viewport||_;Se.setSize(we.z,we.w);const Ce=x.getRenderTarget();x.setRenderTarget(Se),x.getClearColor(R),k=x.getClearAlpha(),k<1&&x.setClearColor(16777215,.5),x.clear();const Ne=x.toneMapping;x.toneMapping=ki;const Be=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),m.setupLightsView(j),te===!0&&le.setGlobalState(x.clippingPlanes,j),Do(w,Q,j),$.updateMultisampleRenderTarget(Se),$.updateRenderTargetMipmap(Se),ye.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Xe=0,bt=W.length;Xe<bt;Xe++){const Nt=W[Xe],tn=Nt.object,Kn=Nt.geometry,it=Nt.material,ke=Nt.group;if(it.side===si&&tn.layers.test(j.layers)){const Ts=it.side;it.side=Jt,it.needsUpdate=!0,gf(tn,Q,j,Kn,it,ke),it.side=Ts,it.needsUpdate=!0,ze=!0}}ze===!0&&($.updateMultisampleRenderTarget(Se),$.updateRenderTargetMipmap(Se))}x.setRenderTarget(Ce),x.setClearColor(R,k),Be!==void 0&&(j.viewport=Be),x.toneMapping=Ne}function Do(w,W,Q){const j=W.isScene===!0?W.overrideMaterial:null;for(let K=0,Se=w.length;K<Se;K++){const we=w[K],Ce=we.object,Ne=we.geometry,Be=j===null?we.material:j,ze=we.group;Ce.layers.test(Q.layers)&&gf(Ce,W,Q,Ne,Be,ze)}}function gf(w,W,Q,j,K,Se){w.onBeforeRender(x,W,Q,j,K,Se),w.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(x,W,Q,j,w,Se),K.transparent===!0&&K.side===si&&K.forceSinglePass===!1?(K.side=Jt,K.needsUpdate=!0,x.renderBufferDirect(Q,W,j,K,w,Se),K.side=Gi,K.needsUpdate=!0,x.renderBufferDirect(Q,W,j,K,w,Se),K.side=si):x.renderBufferDirect(Q,W,j,K,w,Se),w.onAfterRender(x,W,Q,j,K,Se)}function No(w,W,Q){W.isScene!==!0&&(W=he);const j=Y.get(w),K=m.state.lights,Se=m.state.shadowsArray,we=K.state.version,Ce=X.getParameters(w,K.state,Se,W,Q),Ne=X.getProgramCacheKey(Ce);let Be=j.programs;j.environment=w.isMeshStandardMaterial?W.environment:null,j.fog=W.fog,j.envMap=(w.isMeshStandardMaterial?A:ce).get(w.envMap||j.environment),j.envMapRotation=j.environment!==null&&w.envMap===null?W.environmentRotation:w.envMapRotation,Be===void 0&&(w.addEventListener("dispose",xe),Be=new Map,j.programs=Be);let ze=Be.get(Ne);if(ze!==void 0){if(j.currentProgram===ze&&j.lightsStateVersion===we)return _f(w,Ce),ze}else Ce.uniforms=X.getUniforms(w),w.onBuild(Q,Ce,x),w.onBeforeCompile(Ce,x),ze=X.acquireProgram(Ce,Ne),Be.set(Ne,ze),j.uniforms=Ce.uniforms;const Xe=j.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Xe.clippingPlanes=le.uniform),_f(w,Ce),j.needsLights=p_(w),j.lightsStateVersion=we,j.needsLights&&(Xe.ambientLightColor.value=K.state.ambient,Xe.lightProbe.value=K.state.probe,Xe.directionalLights.value=K.state.directional,Xe.directionalLightShadows.value=K.state.directionalShadow,Xe.spotLights.value=K.state.spot,Xe.spotLightShadows.value=K.state.spotShadow,Xe.rectAreaLights.value=K.state.rectArea,Xe.ltc_1.value=K.state.rectAreaLTC1,Xe.ltc_2.value=K.state.rectAreaLTC2,Xe.pointLights.value=K.state.point,Xe.pointLightShadows.value=K.state.pointShadow,Xe.hemisphereLights.value=K.state.hemi,Xe.directionalShadowMap.value=K.state.directionalShadowMap,Xe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Xe.spotShadowMap.value=K.state.spotShadowMap,Xe.spotLightMatrix.value=K.state.spotLightMatrix,Xe.spotLightMap.value=K.state.spotLightMap,Xe.pointShadowMap.value=K.state.pointShadowMap,Xe.pointShadowMatrix.value=K.state.pointShadowMatrix),j.currentProgram=ze,j.uniformsList=null,ze}function vf(w){if(w.uniformsList===null){const W=w.currentProgram.getUniforms();w.uniformsList=Ea.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function _f(w,W){const Q=Y.get(w);Q.outputColorSpace=W.outputColorSpace,Q.batching=W.batching,Q.instancing=W.instancing,Q.instancingColor=W.instancingColor,Q.instancingMorph=W.instancingMorph,Q.skinning=W.skinning,Q.morphTargets=W.morphTargets,Q.morphNormals=W.morphNormals,Q.morphColors=W.morphColors,Q.morphTargetsCount=W.morphTargetsCount,Q.numClippingPlanes=W.numClippingPlanes,Q.numIntersection=W.numClipIntersection,Q.vertexAlphas=W.vertexAlphas,Q.vertexTangents=W.vertexTangents,Q.toneMapping=W.toneMapping}function d_(w,W,Q,j,K){W.isScene!==!0&&(W=he),$.resetTextureUnits();const Se=W.fog,we=j.isMeshStandardMaterial?W.environment:null,Ce=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:ji,Ne=(j.isMeshStandardMaterial?A:ce).get(j.envMap||we),Be=j.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,ze=!!Q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Xe=!!Q.morphAttributes.position,bt=!!Q.morphAttributes.normal,Nt=!!Q.morphAttributes.color;let tn=ki;j.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(tn=x.toneMapping);const Kn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,it=Kn!==void 0?Kn.length:0,ke=Y.get(j),Ts=m.state.lights;if(te===!0&&(oe===!0||w!==S)){const hn=w===S&&j.id===D;le.setState(j,w,hn)}let pt=!1;j.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Ts.state.version||ke.outputColorSpace!==Ce||K.isBatchedMesh&&ke.batching===!1||!K.isBatchedMesh&&ke.batching===!0||K.isInstancedMesh&&ke.instancing===!1||!K.isInstancedMesh&&ke.instancing===!0||K.isSkinnedMesh&&ke.skinning===!1||!K.isSkinnedMesh&&ke.skinning===!0||K.isInstancedMesh&&ke.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&ke.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&ke.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&ke.instancingMorph===!1&&K.morphTexture!==null||ke.envMap!==Ne||j.fog===!0&&ke.fog!==Se||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==le.numPlanes||ke.numIntersection!==le.numIntersection)||ke.vertexAlphas!==Be||ke.vertexTangents!==ze||ke.morphTargets!==Xe||ke.morphNormals!==bt||ke.morphColors!==Nt||ke.toneMapping!==tn||ke.morphTargetsCount!==it)&&(pt=!0):(pt=!0,ke.__version=j.version);let Ki=ke.currentProgram;pt===!0&&(Ki=No(j,W,K));let yf=!1,As=!1,Ml=!1;const Ut=Ki.getUniforms(),gi=ke.uniforms;if(P.useProgram(Ki.program)&&(yf=!0,As=!0,Ml=!0),j.id!==D&&(D=j.id,As=!0),yf||S!==w){Ut.setValue(U,"projectionMatrix",w.projectionMatrix),Ut.setValue(U,"viewMatrix",w.matrixWorldInverse);const hn=Ut.map.cameraPosition;hn!==void 0&&hn.setValue(U,B.setFromMatrixPosition(w.matrixWorld)),C.logarithmicDepthBuffer&&Ut.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Ut.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,As=!0,Ml=!0)}if(K.isSkinnedMesh){Ut.setOptional(U,K,"bindMatrix"),Ut.setOptional(U,K,"bindMatrixInverse");const hn=K.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Ut.setValue(U,"boneTexture",hn.boneTexture,$))}K.isBatchedMesh&&(Ut.setOptional(U,K,"batchingTexture"),Ut.setValue(U,"batchingTexture",K._matricesTexture,$));const bl=Q.morphAttributes;if((bl.position!==void 0||bl.normal!==void 0||bl.color!==void 0)&&Me.update(K,Q,Ki),(As||ke.receiveShadow!==K.receiveShadow)&&(ke.receiveShadow=K.receiveShadow,Ut.setValue(U,"receiveShadow",K.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(gi.envMap.value=Ne,gi.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&W.environment!==null&&(gi.envMapIntensity.value=W.environmentIntensity),As&&(Ut.setValue(U,"toneMappingExposure",x.toneMappingExposure),ke.needsLights&&h_(gi,Ml),Se&&j.fog===!0&&Z.refreshFogUniforms(gi,Se),Z.refreshMaterialUniforms(gi,j,ie,ee,m.state.transmissionRenderTarget[w.id]),Ea.upload(U,vf(ke),gi,$)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Ea.upload(U,vf(ke),gi,$),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Ut.setValue(U,"center",K.center),Ut.setValue(U,"modelViewMatrix",K.modelViewMatrix),Ut.setValue(U,"normalMatrix",K.normalMatrix),Ut.setValue(U,"modelMatrix",K.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const hn=j.uniformsGroups;for(let El=0,m_=hn.length;El<m_;El++){const xf=hn[El];We.update(xf,Ki),We.bind(xf,Ki)}}return Ki}function h_(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function p_(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(w,W,Q){Y.get(w.texture).__webglTexture=W,Y.get(w.depthTexture).__webglTexture=Q;const j=Y.get(w);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=Q===void 0,j.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,W){const Q=Y.get(w);Q.__webglFramebuffer=W,Q.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(w,W=0,Q=0){b=w,L=W,E=Q;let j=!0,K=null,Se=!1,we=!1;if(w){const Ne=Y.get(w);Ne.__useDefaultFramebuffer!==void 0?(P.bindFramebuffer(U.FRAMEBUFFER,null),j=!1):Ne.__webglFramebuffer===void 0?$.setupRenderTarget(w):Ne.__hasExternalTextures&&$.rebindTextures(w,Y.get(w.texture).__webglTexture,Y.get(w.depthTexture).__webglTexture);const Be=w.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(we=!0);const ze=Y.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ze[W])?K=ze[W][Q]:K=ze[W],Se=!0):w.samples>0&&$.useMultisampledRTT(w)===!1?K=Y.get(w).__webglMultisampledFramebuffer:Array.isArray(ze)?K=ze[Q]:K=ze,_.copy(w.viewport),N.copy(w.scissor),I=w.scissorTest}else _.copy(me).multiplyScalar(ie).floor(),N.copy(ve).multiplyScalar(ie).floor(),I=Ae;if(P.bindFramebuffer(U.FRAMEBUFFER,K)&&j&&P.drawBuffers(w,K),P.viewport(_),P.scissor(N),P.setScissorTest(I),Se){const Ne=Y.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ne.__webglTexture,Q)}else if(we){const Ne=Y.get(w.texture),Be=W||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ne.__webglTexture,Q||0,Be)}D=-1},this.readRenderTargetPixels=function(w,W,Q,j,K,Se,we){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Y.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce){P.bindFramebuffer(U.FRAMEBUFFER,Ce);try{const Ne=w.texture,Be=Ne.format,ze=Ne.type;if(!C.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-j&&Q>=0&&Q<=w.height-K&&U.readPixels(W,Q,j,K,Ee.convert(Be),Ee.convert(ze),Se)}finally{const Ne=b!==null?Y.get(b).__webglFramebuffer:null;P.bindFramebuffer(U.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(w,W,Q=0){const j=Math.pow(2,-Q),K=Math.floor(W.image.width*j),Se=Math.floor(W.image.height*j);$.setTexture2D(W,0),U.copyTexSubImage2D(U.TEXTURE_2D,Q,0,0,w.x,w.y,K,Se),P.unbindTexture()},this.copyTextureToTexture=function(w,W,Q,j=0){const K=W.image.width,Se=W.image.height,we=Ee.convert(Q.format),Ce=Ee.convert(Q.type);$.setTexture2D(Q,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,Q.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,Q.unpackAlignment),W.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,j,w.x,w.y,K,Se,we,Ce,W.image.data):W.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,j,w.x,w.y,W.mipmaps[0].width,W.mipmaps[0].height,we,W.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,j,w.x,w.y,we,Ce,W.image),j===0&&Q.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),P.unbindTexture()},this.copyTextureToTexture3D=function(w,W,Q,j,K=0){const Se=w.max.x-w.min.x,we=w.max.y-w.min.y,Ce=w.max.z-w.min.z,Ne=Ee.convert(j.format),Be=Ee.convert(j.type);let ze;if(j.isData3DTexture)$.setTexture3D(j,0),ze=U.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)$.setTexture2DArray(j,0),ze=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,j.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,j.unpackAlignment);const Xe=U.getParameter(U.UNPACK_ROW_LENGTH),bt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Nt=U.getParameter(U.UNPACK_SKIP_PIXELS),tn=U.getParameter(U.UNPACK_SKIP_ROWS),Kn=U.getParameter(U.UNPACK_SKIP_IMAGES),it=Q.isCompressedTexture?Q.mipmaps[K]:Q.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,it.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,it.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,w.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,w.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,w.min.z),Q.isDataTexture||Q.isData3DTexture?U.texSubImage3D(ze,K,W.x,W.y,W.z,Se,we,Ce,Ne,Be,it.data):j.isCompressedArrayTexture?U.compressedTexSubImage3D(ze,K,W.x,W.y,W.z,Se,we,Ce,Ne,it.data):U.texSubImage3D(ze,K,W.x,W.y,W.z,Se,we,Ce,Ne,Be,it),U.pixelStorei(U.UNPACK_ROW_LENGTH,Xe),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,bt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Nt),U.pixelStorei(U.UNPACK_SKIP_ROWS,tn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Kn),K===0&&j.generateMipmaps&&U.generateMipmap(ze),P.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?$.setTextureCube(w,0):w.isData3DTexture?$.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?$.setTexture2DArray(w,0):$.setTexture2D(w,0),P.unbindTexture()},this.resetState=function(){L=0,E=0,b=null,P.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===sf?"display-p3":"srgb",n.unpackColorSpace=ot.workingColorSpace===yl?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class oP extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class cf extends mi{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],h=[];let v=0;const g=[],m=i/2;let p=0;M(),o===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new ln(f,3)),this.setAttribute("normal",new ln(d,3)),this.setAttribute("uv",new ln(h,2));function M(){const T=new J,L=new J;let E=0;const b=(n-e)/i;for(let D=0;D<=s;D++){const S=[],_=D/s,N=_*(n-e)+e;for(let I=0;I<=r;I++){const R=I/r,k=R*l+a,q=Math.sin(k),ee=Math.cos(k);L.x=N*q,L.y=-_*i+m,L.z=N*ee,f.push(L.x,L.y,L.z),T.set(q,b,ee).normalize(),d.push(T.x,T.y,T.z),h.push(R,1-_),S.push(v++)}g.push(S)}for(let D=0;D<r;D++)for(let S=0;S<s;S++){const _=g[S][D],N=g[S+1][D],I=g[S+1][D+1],R=g[S][D+1];u.push(_,N,R),u.push(N,I,R),E+=6}c.addGroup(p,E,0),p+=E}function x(T){const L=v,E=new Qe,b=new J;let D=0;const S=T===!0?e:n,_=T===!0?1:-1;for(let I=1;I<=r;I++)f.push(0,m*_,0),d.push(0,_,0),h.push(.5,.5),v++;const N=v;for(let I=0;I<=r;I++){const k=I/r*l+a,q=Math.cos(k),ee=Math.sin(k);b.x=S*ee,b.y=m*_,b.z=S*q,f.push(b.x,b.y,b.z),d.push(0,_,0),E.x=q*.5+.5,E.y=ee*.5*_+.5,h.push(E.x,E.y),v++}for(let I=0;I<r;I++){const R=L+I,k=N+I;T===!0?u.push(k,k+1,R):u.push(k+1,k,R),D+=3}c.addGroup(p,D,T===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class uf extends mi{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let f=e;const d=(n-e)/r,h=new J,v=new Qe;for(let g=0;g<=r;g++){for(let m=0;m<=i;m++){const p=s+m/i*o;h.x=f*Math.cos(p),h.y=f*Math.sin(p),l.push(h.x,h.y,h.z),c.push(0,0,1),v.x=(h.x/n+1)/2,v.y=(h.y/n+1)/2,u.push(v.x,v.y)}f+=d}for(let g=0;g<r;g++){const m=g*(i+1);for(let p=0;p<i;p++){const M=p+m,x=M,T=M+i+1,L=M+i+2,E=M+1;a.push(x,T,E),a.push(T,L,E)}}this.setIndex(a),this.setAttribute("position",new ln(l,3)),this.setAttribute("normal",new ln(c,3)),this.setAttribute("uv",new ln(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class aP extends Lo{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ze(16777215),this.specular=new Ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wv,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=rf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class lP extends Yt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class cP extends lP{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nf);let Ui,u_,ms,In,ft,du,Xn,ma=null,wc=!1,Sr=nt(null);const uP=new cf(.1,.1,.2,32).translate(0,.1,0);function fP(){return hP(),vP(),yP(),{resetArSession:dP,addCylinder:mP,clearCylinders:pP,currentSession:Sr}}const dP=()=>{var t,e,n,i;(e=(t=Sr==null?void 0:Sr.value)==null?void 0:t.end)==null||e.call(t),(n=ft==null?void 0:ft.setAnimationLoop)==null||n.call(ft,null),(i=ft==null?void 0:ft.dispose)==null||i.call(ft),In=ms=ft=du=Xn=void 0,Ui&&(Ui.style.display="none",Ui.removeChild(Ui.lastChild))};function hP(){Ui=document.getElementById("three-js-ar"),document.body.appendChild(Ui),u_=document.getElementById("screensaver"),In=new oP,ms=new gn(70,window.innerWidth/window.innerHeight,.01,20);const t=new cP(16777215,12303359,3);t.position.set(.5,1,.25),In.add(t),ft=new sP({antialias:!0,alpha:!0}),ft.setPixelRatio(window.devicePixelRatio),ft.setSize(window.innerWidth,window.innerHeight),ft.xr.enabled=!0,Ui.appendChild(ft.domElement),du=ft.xr.getController(0),In.add(du),Xn=new Ln(new uf(.15,.2,32).rotateX(-Math.PI/2),new af),Xn.matrixAutoUpdate=!1,Xn.visible=!1,In.add(Xn),window.addEventListener("resize",gP)}const pP=()=>{const t=In.getObjectsByProperty("test",null,[]);console.log("clear cylinders array");for(const e of t)In.remove(e)},mP=()=>{if(Xn.visible){const t=new aP({color:16777215*Math.random()}),e=new Ln(uP,t);Xn.matrix.decompose(e.position,e.quaternion,e.scale),e.test=null,e.scale.y=Math.random()*2+1,In.add(e)}};function gP(){ms.aspect=window.innerWidth/window.innerHeight,ms.updateProjectionMatrix(),ft.setSize(window.innerWidth,window.innerHeight)}function vP(){ft.setAnimationLoop(_P)}function _P(t,e){if(!(!ft||!In||!e)){if(e){const n=ft.xr.getReferenceSpace(),i=ft.xr.getSession();if(wc===!1&&(i.requestReferenceSpace("viewer").then(function(r){i.requestHitTestSource({space:r}).then(function(s){ma=s})}),i.addEventListener("end",function(){wc=!1,ma=null}),wc=!0),ma){const r=e.getHitTestResults(ma);if(r.length){const s=r[0];Xn.visible=!0,u_.style.display="none",Xn.matrix.fromArray(s.getPose(n).transform.matrix)}else Xn.visible=!1}}In&&ms&&ft.render(In,ms)}}const yP=()=>{function t(){Sr.value.removeEventListener("end",t),e.domOverlay.root.style.display="none",Sr.value=null}let e={requiredFeatures:["hit-test"],optionalFeatures:["dom-overlay"],domOverlay:{root:Ui}};navigator.xr.requestSession("immersive-ar",e).then(async n=>{n.addEventListener("end",t),ft.xr.setReferenceSpaceType("local"),await ft.xr.setSession(n),Sr.value=n})},xP=()=>{const t=document.createElement("div");t.id="debug",t.style="font-size:10px;color:grey;width:100vw;height:50vh;top:50vh;display:none;position:absolute;overflow:auto",document.body.appendChild(t),console.log=function(r){e(r)},console.error=console.debug=console.info=console.warn=console.log;const e=r=>{r&&(t.innerHTML+=`<p>${r}</p>`)},n=()=>{t.innerHTML=""},i=()=>{t.style.display!=="none"?t.style.display="none":t.style.display=""};return console.log("Console initialized"),{clear:n,switchVisibility:i}},SP=t=>(vm("data-v-f9553af5"),t=t(),_m(),t),MP={id:"three-js-ar"},bP={style:{position:"absolute",right:"0",bottom:"0"}},EP=SP(()=>zt("div",{id:"screensaver",class:"center"}," Move your device for detect surface ",-1)),TP=ys({__name:"ThreeAR",setup(t){const e=Ju();let n,i;di(()=>{n=fP(),i=xP()});const r=l=>{n.resetArSession(),e.push("/")},s=()=>{var l;(l=n.addCylinder)==null||l.call(n)},o=()=>{var l;(l=n==null?void 0:n.clearCylinders)==null||l.call(n)},a=()=>{i==null||i.switchVisibility()};return(l,c)=>(zi(),no("div",MP,[zt("div",bP,[z(oi,{style:{margin:"5px"},variant:"text",density:"comfortable",icon:"mdi-circle",onClick:s}),z(oi,{style:{margin:"5px 5px 5px 10px"},variant:"text",density:"comfortable",icon:"mdi-delete",onClick:o})]),z(oi,{style:{margin:"5px"},variant:"text",icon:"mdi-console",density:"comfortable",onClick:a}),z(oi,{style:{margin:"5px",float:"right"},variant:"text",density:"comfortable",icon:"mdi-close",onClick:r}),EP]))}}),ff=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},AP=ff(TP,[["__scopeId","data-v-f9553af5"]]),wP=Le({color:String,...xo(),...ht(),...Tr(),...bo(),...Ao(),...pl(),...hi(),...Ht(),...un()},"VSheet"),CP=et()({name:"VSheet",props:wP(),setup(t,e){let{slots:n}=e;const{themeClasses:i}=fn(t),{backgroundColorClasses:r,backgroundColorStyles:s}=xr(Rt(t,"color")),{borderClasses:o}=So(t),{dimensionStyles:a}=Ar(t),{elevationClasses:l}=Eo(t),{locationStyles:c}=hl(t),{positionClasses:u}=ml(t),{roundedClasses:f}=pi(t);return lt(()=>z(t.tag,{class:["v-sheet",i.value,r.value,o.value,l.value,u.value,f.value,t.class],style:[s.value,a.value,c.value,t.style]},n)),{}}}),RP=zt("h2",{class:"text-h4 font-weight-black text-orange"},"WARNING",-1),PP=zt("div",{class:"text-h5 font-weight-medium mb-2"}," You using IOS device ",-1),LP=zt("p",{class:"text-body-2 mb-4"}," WebView Safari does not currently support augmented reality technologies ",-1),IP=zt("p",{class:"text-body-2 mb-4"}," To enjoy the augmented reality experience on your iOS device, you can download the special browser app from the link below ",-1),DP=zt("p",{class:"text-body-2 mb-4"}," Don't forget copy link to this site ",-1),NP={class:"text-body-2 mb-4"},UP={__name:"DownloadXRViewerLayout",setup(t){let e=Ju();const n=()=>{window.location.href="https://apps.apple.com/us/app/webxr-viewer/id1295998056"},i=()=>{e.push(gs[0].path)},r=location.origin;return(s,o)=>(zi(),Gm(CP,{color:"white",class:"d-flex align-center justify-center flex-wrap text-center mx-auto px-4",elevation:"4",height:"400","max-width":"800",width:"100%",rounded:""},{default:St(()=>[zt("div",null,[RP,PP,LP,IP,DP,zt("p",NP,ga($t(r)),1),z(oi,{color:"orange",variant:"text",onClick:n},{default:St(()=>[vr("DOWNLOAD")]),_:1}),z(oi,{color:"blue",variant:"text",onClick:i},{default:St(()=>[vr("GOTO MAIN")]),_:1})])]),_:1}))}};function OP(t){return new Promise((e,n)=>{navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1920},height:{ideal:1080}},audio:!1}).then(i=>{t.srcObject=i,e(i)}).catch(i=>{console.error("Ошибка доступа к камере:",i),n(i)})})}var Di,is,ho,po,mo;class FP{constructor(e){wr(this,Di,void 0);wr(this,is,[]);wr(this,ho,[]);wr(this,po,void 0);wr(this,mo,void 0);ws(this,Di,new MediaRecorder(e,{mimeType:"video/webm"}))}startRecording(){ws(this,mo,Date.now()),Tn(this,Di).ondataavailable=e=>{e.data.size&&Tn(this,is).push(e.data)},Tn(this,Di).onstop=()=>{const e=this.timestamp(),n=new Blob(Tn(this,is),{type:"video/webm"});this.downloadBlob(n,`video_${e}.webm`);const i=new Blob([JSON.stringify(Tn(this,ho),null,2)],{type:"application/json"});this.downloadBlob(i,`geo_${e}.json`)},ws(this,po,setInterval(()=>{navigator.geolocation.getCurrentPosition(e=>{const{latitude:n,longitude:i,accuracy:r}=e.coords,s=(Date.now()-Tn(this,mo))/1e3;Tn(this,ho).push({latitude:n,longitude:i,accuracy:r,timestamp:s})})},1e3)),Tn(this,Di).start()}stopRecording(){Tn(this,Di).stop(),clearInterval(Tn(this,po)),ws(this,is,[])}timestamp(){return new Date().toISOString().replace(/[-:.]/g,"_")}downloadBlob(e,n){const i=document.createElement("a"),r=URL.createObjectURL(e);i.href=r,i.download=n,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r),console.log("download")}}Di=new WeakMap,is=new WeakMap,ho=new WeakMap,po=new WeakMap,mo=new WeakMap;const f_=t=>(vm("data-v-ed561f79"),t=t(),_m(),t),BP=f_(()=>zt("video",{id:"camera",autoplay:"",playsinline:""},null,-1)),kP=f_(()=>zt("div",{class:"text-subtitle-1 pb-2 text-center"},"Выполняется запись",-1)),VP=ys({__name:"Tracker",setup(t){const e=nt(!1);let n;di(async()=>{const r=document.getElementById("camera"),s=await OP(r);n=new FP(s)});function i(){e.value=!e.value,e.value?n.startRecording():n.stopRecording()}return(r,s)=>(zi(),no(mt,null,[z(oi,{style:{position:"absolute","z-index":"1000",margin:"10px"},icon:"mdi-record-circle-outline",size:"large",color:e.value?"red":"",onClick:i},null,8,["color"]),BP,z(Av,{modelValue:e.value,"onUpdate:modelValue":s[0]||(s[0]=o=>e.value=o),timeout:-1},{default:St(()=>[kP]),_:1},8,["modelValue"])],64))}}),zP=ff(VP,[["__scopeId","data-v-ed561f79"]]),gs=[{path:"/",component:GE},{path:"/ar",component:AP},{path:"/ar/XRViewer",component:UP},{path:"/tracker",component:zP}],HP=KM({history:TM(),routes:gs}),GP=Le({...ht(),...Tg({fullHeight:!0}),...un()},"VApp"),WP=et()({name:"VApp",props:GP(),setup(t,e){let{slots:n}=e;const i=fn(t),{layoutClasses:r,getLayoutItem:s,items:o,layoutRef:a}=wg(t),{rtlClasses:l}=Ms();return lt(()=>z("div",{ref:a,class:["v-application",i.themeClasses.value,r.value,l.value,t.class],style:[t.style]},[z("div",{class:"v-application__wrap"},[z(ym,null,{default:()=>{var c;return[z(mt,null,[(c=n.default)==null?void 0:c.call(n)])]}})])])),{getLayoutItem:s,items:o,theme:i}}}),XP={};function $P(t,e){const n=d0("router-view");return zi(),Gm(WP,{class:"bg-white"},{default:St(()=>[z(Nv,null,{default:St(()=>[z(n)]),_:1})]),_:1})}const qP=ff(XP,[["render",$P]]),df=Wy(qP);YS(df);df.use(HP);df.mount("#app");
