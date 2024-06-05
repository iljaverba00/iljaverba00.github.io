(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function su(t,e){const n=new Set(t.split(","));return i=>n.has(i)}const dt={},$r=[],vn=()=>{},i_=()=>!1,Ba=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ou=t=>t.startsWith("onUpdate:"),St=Object.assign,au=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},r_=Object.prototype.hasOwnProperty,Ke=(t,e)=>r_.call(t,e),De=Array.isArray,qr=t=>ka(t)==="[object Map]",Cp=t=>ka(t)==="[object Set]",Ue=t=>typeof t=="function",yt=t=>typeof t=="string",Sr=t=>typeof t=="symbol",at=t=>t!==null&&typeof t=="object",Rp=t=>(at(t)||Ue(t))&&Ue(t.then)&&Ue(t.catch),Pp=Object.prototype.toString,ka=t=>Pp.call(t),s_=t=>ka(t).slice(8,-1),Lp=t=>ka(t)==="[object Object]",lu=t=>yt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ds=su(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Va=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},o_=/-(\w)/g,bn=Va(t=>t.replace(o_,(e,n)=>n?n.toUpperCase():"")),a_=/\B([A-Z])/g,ds=Va(t=>t.replace(a_,"-$1").toLowerCase()),li=Va(t=>t.charAt(0).toUpperCase()+t.slice(1)),vl=Va(t=>t?`on${li(t)}`:""),Fi=(t,e)=>!Object.is(t,e),_l=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ip=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},l_=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Dp=t=>{const e=yt(t)?Number(t):NaN;return isNaN(e)?t:e};let df;const Np=()=>df||(df=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function cu(t){if(De(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=yt(i)?d_(i):cu(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(yt(t)||at(t))return t}const c_=/;(?![^(]*\))/g,u_=/:([^]+)/,f_=/\/\*[^]*?\*\//g;function d_(t){const e={};return t.replace(f_,"").split(c_).forEach(n=>{if(n){const i=n.split(u_);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function uu(t){let e="";if(yt(t))e=t;else if(De(t))for(let n=0;n<t.length;n++){const i=uu(t[n]);i&&(e+=i+" ")}else if(at(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const h_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",p_=su(h_);function Up(t){return!!t||t===""}const aa=t=>yt(t)?t:t==null?"":De(t)||at(t)&&(t.toString===Pp||!Ue(t.toString))?JSON.stringify(t,Op,2):String(t),Op=(t,e)=>e&&e.__v_isRef?Op(t,e.value):qr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[yl(i,s)+" =>"]=r,n),{})}:Cp(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>yl(n))}:Sr(e)?yl(e):at(e)&&!De(e)&&!Lp(e)?String(e):e,yl=(t,e="")=>{var n;return Sr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let sn;class Fp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=sn,!e&&sn&&(this.index=(sn.scopes||(sn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=sn;try{return sn=this,e()}finally{sn=n}}}on(){sn=this}off(){sn=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function fu(t){return new Fp(t)}function m_(t,e=sn){e&&e.active&&e.effects.push(t)}function g_(){return sn}function En(t){sn&&sn.cleanups.push(t)}let dr;class du{constructor(e,n,i,r){this.fn=e,this.trigger=n,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,m_(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Hi();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(v_(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Gi()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Di,n=dr;try{return Di=!0,dr=this,this._runnings++,hf(this),this.fn()}finally{pf(this),this._runnings--,dr=n,Di=e}}stop(){this.active&&(hf(this),pf(this),this.onStop&&this.onStop(),this.active=!1)}}function v_(t){return t.value}function hf(t){t._trackId++,t._depsLength=0}function pf(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Bp(t.deps[e],t);t.deps.length=t._depsLength}}function Bp(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Di=!0,xc=0;const kp=[];function Hi(){kp.push(Di),Di=!1}function Gi(){const t=kp.pop();Di=t===void 0?!0:t}function hu(){xc++}function pu(){for(xc--;!xc&&Sc.length;)Sc.shift()()}function Vp(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const i=t.deps[t._depsLength];i!==e?(i&&Bp(i,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Sc=[];function zp(t,e,n){hu();for(const i of t.keys()){let r;i._dirtyLevel<e&&(r??(r=t.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=e),i._shouldSchedule&&(r??(r=t.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&Sc.push(i.scheduler)))}pu()}const Hp=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},ga=new WeakMap,hr=Symbol(""),Mc=Symbol("");function Qt(t,e,n){if(Di&&dr){let i=ga.get(t);i||ga.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=Hp(()=>i.delete(n))),Vp(dr,r)}}function oi(t,e,n,i,r,s){const o=ga.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&De(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!Sr(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":De(t)?lu(n)&&a.push(o.get("length")):(a.push(o.get(hr)),qr(t)&&a.push(o.get(Mc)));break;case"delete":De(t)||(a.push(o.get(hr)),qr(t)&&a.push(o.get(Mc)));break;case"set":qr(t)&&a.push(o.get(hr));break}hu();for(const l of a)l&&zp(l,4);pu()}function __(t,e){const n=ga.get(t);return n&&n.get(e)}const y_=su("__proto__,__v_isRef,__isVue"),Gp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Sr)),mf=x_();function x_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=je(this);for(let s=0,o=this.length;s<o;s++)Qt(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(je)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Hi(),hu();const i=je(this)[e].apply(this,n);return pu(),Gi(),i}}),t}function S_(t){Sr(t)||(t=String(t));const e=je(this);return Qt(e,"has",t),e.hasOwnProperty(t)}class Wp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?N_:Yp:s?qp:$p).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=De(e);if(!r){if(o&&Ke(mf,n))return Reflect.get(mf,n,i);if(n==="hasOwnProperty")return S_}const a=Reflect.get(e,n,i);return(Sr(n)?Gp.has(n):y_(n))||(r||Qt(e,"get",n),s)?a:xt(a)?o&&lu(n)?a:a.value:at(a)?r?hs(a):Bt(a):a}}class Xp extends Wp{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const l=Hs(s);if(!va(i)&&!Hs(i)&&(s=je(s),i=je(i)),!De(e)&&xt(s)&&!xt(i))return l?!1:(s.value=i,!0)}const o=De(e)&&lu(n)?Number(n)<e.length:Ke(e,n),a=Reflect.set(e,n,i,r);return e===je(r)&&(o?Fi(i,s)&&oi(e,"set",n,i):oi(e,"add",n,i)),a}deleteProperty(e,n){const i=Ke(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&oi(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Sr(n)||!Gp.has(n))&&Qt(e,"has",n),i}ownKeys(e){return Qt(e,"iterate",De(e)?"length":hr),Reflect.ownKeys(e)}}class M_ extends Wp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const b_=new Xp,E_=new M_,T_=new Xp(!0);const mu=t=>t,za=t=>Reflect.getPrototypeOf(t);function Ao(t,e,n=!1,i=!1){t=t.__v_raw;const r=je(t),s=je(e);n||(Fi(e,s)&&Qt(r,"get",e),Qt(r,"get",s));const{has:o}=za(r),a=i?mu:n?_u:Gs;if(o.call(r,e))return a(t.get(e));if(o.call(r,s))return a(t.get(s));t!==r&&t.get(e)}function wo(t,e=!1){const n=this.__v_raw,i=je(n),r=je(t);return e||(Fi(t,r)&&Qt(i,"has",t),Qt(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Co(t,e=!1){return t=t.__v_raw,!e&&Qt(je(t),"iterate",hr),Reflect.get(t,"size",t)}function gf(t){t=je(t);const e=je(this);return za(e).has.call(e,t)||(e.add(t),oi(e,"add",t,t)),this}function vf(t,e){e=je(e);const n=je(this),{has:i,get:r}=za(n);let s=i.call(n,t);s||(t=je(t),s=i.call(n,t));const o=r.call(n,t);return n.set(t,e),s?Fi(e,o)&&oi(n,"set",t,e):oi(n,"add",t,e),this}function _f(t){const e=je(this),{has:n,get:i}=za(e);let r=n.call(e,t);r||(t=je(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&oi(e,"delete",t,void 0),s}function yf(){const t=je(this),e=t.size!==0,n=t.clear();return e&&oi(t,"clear",void 0,void 0),n}function Ro(t,e){return function(i,r){const s=this,o=s.__v_raw,a=je(o),l=e?mu:t?_u:Gs;return!t&&Qt(a,"iterate",hr),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Po(t,e,n){return function(...i){const r=this.__v_raw,s=je(r),o=qr(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?mu:e?_u:Gs;return!e&&Qt(s,"iterate",l?Mc:hr),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function pi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function A_(){const t={get(s){return Ao(this,s)},get size(){return Co(this)},has:wo,add:gf,set:vf,delete:_f,clear:yf,forEach:Ro(!1,!1)},e={get(s){return Ao(this,s,!1,!0)},get size(){return Co(this)},has:wo,add:gf,set:vf,delete:_f,clear:yf,forEach:Ro(!1,!0)},n={get(s){return Ao(this,s,!0)},get size(){return Co(this,!0)},has(s){return wo.call(this,s,!0)},add:pi("add"),set:pi("set"),delete:pi("delete"),clear:pi("clear"),forEach:Ro(!0,!1)},i={get(s){return Ao(this,s,!0,!0)},get size(){return Co(this,!0)},has(s){return wo.call(this,s,!0)},add:pi("add"),set:pi("set"),delete:pi("delete"),clear:pi("clear"),forEach:Ro(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Po(s,!1,!1),n[s]=Po(s,!0,!1),e[s]=Po(s,!1,!0),i[s]=Po(s,!0,!0)}),[t,n,e,i]}const[w_,C_,R_,P_]=A_();function gu(t,e){const n=e?t?P_:R_:t?C_:w_;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(Ke(n,r)&&r in i?n:i,r,s)}const L_={get:gu(!1,!1)},I_={get:gu(!1,!0)},D_={get:gu(!0,!1)};const $p=new WeakMap,qp=new WeakMap,Yp=new WeakMap,N_=new WeakMap;function U_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function O_(t){return t.__v_skip||!Object.isExtensible(t)?0:U_(s_(t))}function Bt(t){return Hs(t)?t:vu(t,!1,b_,L_,$p)}function jp(t){return vu(t,!1,T_,I_,qp)}function hs(t){return vu(t,!0,E_,D_,Yp)}function vu(t,e,n,i,r){if(!at(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=O_(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function Ns(t){return Hs(t)?Ns(t.__v_raw):!!(t&&t.__v_isReactive)}function Hs(t){return!!(t&&t.__v_isReadonly)}function va(t){return!!(t&&t.__v_isShallow)}function Kp(t){return t?!!t.__v_raw:!1}function je(t){const e=t&&t.__v_raw;return e?je(e):t}function F_(t){return Object.isExtensible(t)&&Ip(t,"__v_skip",!0),t}const Gs=t=>at(t)?Bt(t):t,_u=t=>at(t)?hs(t):t;class Zp{constructor(e,n,i,r){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new du(()=>e(this._value),()=>la(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=je(this);return(!e._cacheable||e.effect.dirty)&&Fi(e._value,e._value=e.effect.run())&&la(e,4),Jp(e),e.effect._dirtyLevel>=2&&la(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function B_(t,e,n=!1){let i,r;const s=Ue(t);return s?(i=t,r=vn):(i=t.get,r=t.set),new Zp(i,r,s||!r,n)}function Jp(t){var e;Di&&dr&&(t=je(t),Vp(dr,(e=t.dep)!=null?e:t.dep=Hp(()=>t.dep=void 0,t instanceof Zp?t:void 0)))}function la(t,e=4,n){t=je(t);const i=t.dep;i&&zp(i,e)}function xt(t){return!!(t&&t.__v_isRef===!0)}function nt(t){return Qp(t,!1)}function Je(t){return Qp(t,!0)}function Qp(t,e){return xt(t)?t:new k_(t,e)}class k_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:je(e),this._value=n?e:Gs(e)}get value(){return Jp(this),this._value}set value(e){const n=this.__v_isShallow||va(e)||Hs(e);e=n?e:je(e),Fi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Gs(e),la(this,4))}}function Xt(t){return xt(t)?t.value:t}const V_={get:(t,e,n)=>Xt(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return xt(r)&&!xt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function em(t){return Ns(t)?t:new Proxy(t,V_)}function yu(t){const e=De(t)?new Array(t.length):{};for(const n in t)e[n]=tm(t,n);return e}class z_{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return __(je(this._object),this._key)}}class H_{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Rt(t,e,n){return xt(t)?t:Ue(t)?new H_(t):at(t)&&arguments.length>1?tm(t,e,n):nt(t)}function tm(t,e,n){const i=t[e];return xt(i)?i:new z_(t,e,n)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ni(t,e,n,i){try{return i?t(...i):t()}catch(r){so(r,e,n)}}function Sn(t,e,n,i){if(Ue(t)){const r=Ni(t,e,n,i);return r&&Rp(r)&&r.catch(s=>{so(s,e,n)}),r}if(De(t)){const r=[];for(let s=0;s<t.length;s++)r.push(Sn(t[s],e,n,i));return r}}function so(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Hi(),Ni(l,null,10,[t,o,a]),Gi();return}}G_(t,n,r,i)}function G_(t,e,n,i=!0){console.error(t)}let Ws=!1,bc=!1;const kt=[];let kn=0;const Yr=[];let Ei=null,or=0;const nm=Promise.resolve();let xu=null;function cn(t){const e=xu||nm;return t?e.then(this?t.bind(this):t):e}function W_(t){let e=kn+1,n=kt.length;for(;e<n;){const i=e+n>>>1,r=kt[i],s=Xs(r);s<t||s===t&&r.pre?e=i+1:n=i}return e}function Su(t){(!kt.length||!kt.includes(t,Ws&&t.allowRecurse?kn+1:kn))&&(t.id==null?kt.push(t):kt.splice(W_(t.id),0,t),im())}function im(){!Ws&&!bc&&(bc=!0,xu=nm.then(sm))}function X_(t){const e=kt.indexOf(t);e>kn&&kt.splice(e,1)}function Ec(t){De(t)?Yr.push(...t):(!Ei||!Ei.includes(t,t.allowRecurse?or+1:or))&&Yr.push(t),im()}function xf(t,e,n=Ws?kn+1:0){for(;n<kt.length;n++){const i=kt[n];if(i&&i.pre){if(t&&i.id!==t.uid)continue;kt.splice(n,1),n--,i()}}}function rm(t){if(Yr.length){const e=[...new Set(Yr)].sort((n,i)=>Xs(n)-Xs(i));if(Yr.length=0,Ei){Ei.push(...e);return}for(Ei=e,or=0;or<Ei.length;or++)Ei[or]();Ei=null,or=0}}const Xs=t=>t.id==null?1/0:t.id,$_=(t,e)=>{const n=Xs(t)-Xs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function sm(t){bc=!1,Ws=!0,kt.sort($_);try{for(kn=0;kn<kt.length;kn++){const e=kt[kn];e&&e.active!==!1&&Ni(e,null,14)}}finally{kn=0,kt.length=0,rm(),Ws=!1,xu=null,(kt.length||Yr.length)&&sm()}}function q_(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||dt;let r=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:d}=i[u]||dt;d&&(r=n.map(h=>yt(h)?h.trim():h)),f&&(r=n.map(l_))}let a,l=i[a=vl(e)]||i[a=vl(bn(e))];!l&&s&&(l=i[a=vl(ds(e))]),l&&Sn(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Sn(c,t,6,r)}}function om(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!Ue(t)){const l=c=>{const u=om(c,e,!0);u&&(a=!0,St(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(at(t)&&i.set(t,null),null):(De(s)?s.forEach(l=>o[l]=null):St(o,s),at(t)&&i.set(t,o),o)}function Ha(t,e){return!t||!Ba(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ke(t,e[0].toLowerCase()+e.slice(1))||Ke(t,ds(e))||Ke(t,e))}let $t=null,Ga=null;function _a(t){const e=$t;return $t=t,Ga=t&&t.type.__scopeId||null,e}function Y_(t){Ga=t}function j_(){Ga=null}function Et(t,e=$t,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Uf(-1);const s=_a(e);let o;try{o=t(...r)}finally{_a(s),i._d&&Uf(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function xl(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:v,inheritAttrs:g}=t,m=_a(t);let p,M;try{if(n.shapeFlag&4){const T=r||i,L=T;p=Cn(c.call(L,T,u,f,h,d,v)),M=a}else{const T=e;p=Cn(T.length>1?T(f,{attrs:a,slots:o,emit:l}):T(f,null)),M=e.props?a:Z_(a)}}catch(T){Bs.length=0,so(T,t,1),p=z(_n)}let x=p;if(M&&g!==!1){const T=Object.keys(M),{shapeFlag:L}=x;T.length&&L&7&&(s&&T.some(ou)&&(M=J_(M,s)),x=Bi(x,M,!1,!0))}return n.dirs&&(x=Bi(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&(x.transition=n.transition),p=x,_a(m),p}function K_(t,e=!0){let n;for(let i=0;i<t.length;i++){const r=t[i];if(Sa(r)){if(r.type!==_n||r.children==="v-if"){if(n)return;n=r}}else return}return n}const Z_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ba(n))&&((e||(e={}))[n]=t[n]);return e},J_=(t,e)=>{const n={};for(const i in t)(!ou(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Q_(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Sf(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!Ha(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Sf(i,o,c):!0:!!o;return!1}function Sf(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!Ha(n,s))return!0}return!1}function Mu({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const bu="components",e0="directives";function t0(t,e){return Tu(bu,t,!0,e)||t}const n0=Symbol.for("v-ndc");function i0(t){return yt(t)&&Tu(bu,t,!1)||t}function Eu(t){return Tu(e0,t)}function Tu(t,e,n=!0,i=!1){const r=$t||Pt;if(r){const s=r.type;if(t===bu){const a=ey(s,!1);if(a&&(a===e||a===bn(e)||a===li(bn(e))))return s}const o=Mf(r[t]||s[t],e)||Mf(r.appContext[t],e);return!o&&i?s:o}}function Mf(t,e){return t&&(t[e]||t[bn(e)]||t[li(bn(e))])}const r0=t=>t.__isSuspense;let Tc=0;const s0={name:"Suspense",__isSuspense:!0,process(t,e,n,i,r,s,o,a,l,c){if(t==null)o0(e,n,i,r,s,o,a,l,c);else{if(s&&s.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}a0(t,e,n,i,r,o,a,l,c)}},hydrate:l0,create:Au,normalize:c0},am=s0;function $s(t,e){const n=t.props&&t.props[e];Ue(n)&&n()}function o0(t,e,n,i,r,s,o,a,l){const{p:c,o:{createElement:u}}=l,f=u("div"),d=t.suspense=Au(t,r,i,e,f,n,s,o,a,l);c(null,d.pendingBranch=t.ssContent,f,null,i,d,s,o),d.deps>0?($s(t,"onPending"),$s(t,"onFallback"),c(null,t.ssFallback,e,n,i,null,s,o),jr(d,t.ssFallback)):d.resolve(!1,!0)}function a0(t,e,n,i,r,s,o,a,{p:l,um:c,o:{createElement:u}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const d=e.ssContent,h=e.ssFallback,{activeBranch:v,pendingBranch:g,isInFallback:m,isHydrating:p}=f;if(g)f.pendingBranch=d,Vn(d,g)?(l(g,d,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():m&&(p||(l(v,h,n,i,r,null,s,o,a),jr(f,h)))):(f.pendingId=Tc++,p?(f.isHydrating=!1,f.activeBranch=g):c(g,r,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),m?(l(null,d,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():(l(v,h,n,i,r,null,s,o,a),jr(f,h))):v&&Vn(d,v)?(l(v,d,n,i,r,f,s,o,a),f.resolve(!0)):(l(null,d,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0&&f.resolve()));else if(v&&Vn(d,v))l(v,d,n,i,r,f,s,o,a),jr(f,d);else if($s(e,"onPending"),f.pendingBranch=d,d.shapeFlag&512?f.pendingId=d.component.suspenseId:f.pendingId=Tc++,l(null,d,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0)f.resolve();else{const{timeout:M,pendingId:x}=f;M>0?setTimeout(()=>{f.pendingId===x&&f.fallback(h)},M):M===0&&f.fallback(h)}}function Au(t,e,n,i,r,s,o,a,l,c,u=!1){const{p:f,m:d,um:h,n:v,o:{parentNode:g,remove:m}}=c;let p;const M=f0(t);M&&e&&e.pendingBranch&&(p=e.pendingId,e.deps++);const x=t.props?Dp(t.props.timeout):void 0,T=s,L={vnode:t,parent:e,parentComponent:n,namespace:o,container:i,hiddenContainer:r,deps:0,pendingId:Tc++,timeout:typeof x=="number"?x:-1,activeBranch:null,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(E=!1,b=!1){const{vnode:D,activeBranch:S,pendingBranch:_,pendingId:N,effects:I,parentComponent:R,container:k}=L;let q=!1;L.isHydrating?L.isHydrating=!1:E||(q=S&&_.transition&&_.transition.mode==="out-in",q&&(S.transition.afterLeave=()=>{N===L.pendingId&&(d(_,k,s===T?v(S):s,0),Ec(I))}),S&&(g(S.el)!==L.hiddenContainer&&(s=v(S)),h(S,R,L,!0)),q||d(_,k,s,0)),jr(L,_),L.pendingBranch=null,L.isInFallback=!1;let ee=L.parent,ie=!1;for(;ee;){if(ee.pendingBranch){ee.effects.push(...I),ie=!0;break}ee=ee.parent}!ie&&!q&&Ec(I),L.effects=[],M&&e&&e.pendingBranch&&p===e.pendingId&&(e.deps--,e.deps===0&&!b&&e.resolve()),$s(D,"onResolve")},fallback(E){if(!L.pendingBranch)return;const{vnode:b,activeBranch:D,parentComponent:S,container:_,namespace:N}=L;$s(b,"onFallback");const I=v(D),R=()=>{L.isInFallback&&(f(null,E,_,I,S,null,N,a,l),jr(L,E))},k=E.transition&&E.transition.mode==="out-in";k&&(D.transition.afterLeave=R),L.isInFallback=!0,h(D,S,null,!0),k||R()},move(E,b,D){L.activeBranch&&d(L.activeBranch,E,b,D),L.container=E},next(){return L.activeBranch&&v(L.activeBranch)},registerDep(E,b){const D=!!L.pendingBranch;D&&L.deps++;const S=E.vnode.el;E.asyncDep.catch(_=>{so(_,E,0)}).then(_=>{if(E.isUnmounted||L.isUnmounted||L.pendingId!==E.suspenseId)return;E.asyncResolved=!0;const{vnode:N}=E;Dc(E,_,!1),S&&(N.el=S);const I=!S&&E.subTree.el;b(E,N,g(S||E.subTree.el),S?null:v(E.subTree),L,o,l),I&&m(I),Mu(E,N.el),D&&--L.deps===0&&L.resolve()})},unmount(E,b){L.isUnmounted=!0,L.activeBranch&&h(L.activeBranch,n,E,b),L.pendingBranch&&h(L.pendingBranch,n,E,b)}};return L}function l0(t,e,n,i,r,s,o,a,l){const c=e.suspense=Au(e,i,n,t.parentNode,document.createElement("div"),null,r,s,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,s,o);return c.deps===0&&c.resolve(!1,!0),u}function c0(t){const{shapeFlag:e,children:n}=t,i=e&32;t.ssContent=bf(i?n.default:n),t.ssFallback=i?bf(n.fallback):z(_n)}function bf(t){let e;if(Ue(t)){const n=ts&&t._c;n&&(t._d=!1,yr()),t=t(),n&&(t._d=!0,e=yn,Rm())}return De(t)&&(t=K_(t)),t=Cn(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function u0(t,e){e&&e.pendingBranch?De(t)?e.effects.push(...t):e.effects.push(t):Ec(t)}function jr(t,e){t.activeBranch=e;const{vnode:n,parentComponent:i}=t;let r=e.el;for(;!r&&e.component;)e=e.component.subTree,r=e.el;n.el=r,i&&i.subTree===n&&(i.vnode.el=r,Mu(i,r))}function f0(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const d0=Symbol.for("v-scx"),h0=()=>_t(d0);function Nn(t,e){return wu(t,null,e)}const Lo={};function Ye(t,e,n){return wu(t,e,n)}function wu(t,e,{immediate:n,deep:i,flush:r,once:s,onTrack:o,onTrigger:a}=dt){if(e&&s){const E=e;e=(...b)=>{E(...b),L()}}const l=Pt,c=E=>i===!0?E:cr(E,i===!1?1:void 0);let u,f=!1,d=!1;if(xt(t)?(u=()=>t.value,f=va(t)):Ns(t)?(u=()=>c(t),f=!0):De(t)?(d=!0,f=t.some(E=>Ns(E)||va(E)),u=()=>t.map(E=>{if(xt(E))return E.value;if(Ns(E))return c(E);if(Ue(E))return Ni(E,l,2)})):Ue(t)?e?u=()=>Ni(t,l,2):u=()=>(h&&h(),Sn(t,l,3,[v])):u=vn,e&&i){const E=u;u=()=>cr(E())}let h,v=E=>{h=x.onStop=()=>{Ni(E,l,4),h=x.onStop=void 0}},g;if($a)if(v=vn,e?n&&Sn(e,l,3,[u(),d?[]:void 0,v]):u(),r==="sync"){const E=h0();g=E.__watcherHandles||(E.__watcherHandles=[])}else return vn;let m=d?new Array(t.length).fill(Lo):Lo;const p=()=>{if(!(!x.active||!x.dirty))if(e){const E=x.run();(i||f||(d?E.some((b,D)=>Fi(b,m[D])):Fi(E,m)))&&(h&&h(),Sn(e,l,3,[E,m===Lo?void 0:d&&m[0]===Lo?[]:m,v]),m=E)}else x.run()};p.allowRecurse=!!e;let M;r==="sync"?M=p:r==="post"?M=()=>jt(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),M=()=>Su(p));const x=new du(u,vn,M),T=g_(),L=()=>{x.stop(),T&&au(T.effects,x)};return e?n?p():m=x.run():r==="post"?jt(x.run.bind(x),l&&l.suspense):x.run(),g&&g.push(L),L}function p0(t,e,n){const i=this.proxy,r=yt(t)?t.includes(".")?lm(i,t):()=>i[t]:t.bind(i,i);let s;Ue(e)?s=e:(s=e.handler,n=e);const o=lo(this),a=wu(r,s.bind(i),n);return o(),a}function lm(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function cr(t,e=1/0,n){if(e<=0||!at(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,xt(t))cr(t.value,e,n);else if(De(t))for(let i=0;i<t.length;i++)cr(t[i],e,n);else if(Cp(t)||qr(t))t.forEach(i=>{cr(i,e,n)});else if(Lp(t))for(const i in t)cr(t[i],e,n);return t}function es(t,e){if($t===null)return t;const n=qa($t)||$t.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=dt]=e[r];s&&(Ue(s)&&(s={mounted:s,updated:s}),s.deep&&cr(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Yi(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Hi(),Sn(l,n,8,[t.el,a,t,e]),Gi())}}const Ti=Symbol("_leaveCb"),Io=Symbol("_enterCb");function cm(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Wi(()=>{t.isMounted=!0}),qn(()=>{t.isUnmounting=!0}),t}const pn=[Function,Array],um={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:pn,onEnter:pn,onAfterEnter:pn,onEnterCancelled:pn,onBeforeLeave:pn,onLeave:pn,onAfterLeave:pn,onLeaveCancelled:pn,onBeforeAppear:pn,onAppear:pn,onAfterAppear:pn,onAppearCancelled:pn},m0={name:"BaseTransition",props:um,setup(t,{slots:e}){const n=Nu(),i=cm();return()=>{const r=e.default&&Cu(e.default(),!0);if(!r||!r.length)return;let s=r[0];if(r.length>1){for(const d of r)if(d.type!==_n){s=d;break}}const o=je(t),{mode:a}=o;if(i.isLeaving)return Sl(s);const l=Ef(s);if(!l)return Sl(s);const c=qs(l,o,i,n);Ys(l,c);const u=n.subTree,f=u&&Ef(u);if(f&&f.type!==_n&&!Vn(l,f)){const d=qs(f,o,i,n);if(Ys(f,d),a==="out-in"&&l.type!==_n)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Sl(s);a==="in-out"&&l.type!==_n&&(d.delayLeave=(h,v,g)=>{const m=fm(i,f);m[String(f.key)]=f,h[Ti]=()=>{v(),h[Ti]=void 0,delete c.delayedLeave},c.delayedLeave=g})}return s}}},g0=m0;function fm(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function qs(t,e,n,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:d,onAfterLeave:h,onLeaveCancelled:v,onBeforeAppear:g,onAppear:m,onAfterAppear:p,onAppearCancelled:M}=e,x=String(t.key),T=fm(n,t),L=(D,S)=>{D&&Sn(D,i,9,S)},E=(D,S)=>{const _=S[1];L(D,S),De(D)?D.every(N=>N.length<=1)&&_():D.length<=1&&_()},b={mode:s,persisted:o,beforeEnter(D){let S=a;if(!n.isMounted)if(r)S=g||a;else return;D[Ti]&&D[Ti](!0);const _=T[x];_&&Vn(t,_)&&_.el[Ti]&&_.el[Ti](),L(S,[D])},enter(D){let S=l,_=c,N=u;if(!n.isMounted)if(r)S=m||l,_=p||c,N=M||u;else return;let I=!1;const R=D[Io]=k=>{I||(I=!0,k?L(N,[D]):L(_,[D]),b.delayedLeave&&b.delayedLeave(),D[Io]=void 0)};S?E(S,[D,R]):R()},leave(D,S){const _=String(t.key);if(D[Io]&&D[Io](!0),n.isUnmounting)return S();L(f,[D]);let N=!1;const I=D[Ti]=R=>{N||(N=!0,S(),R?L(v,[D]):L(h,[D]),D[Ti]=void 0,T[_]===t&&delete T[_])};T[_]=t,d?E(d,[D,I]):I()},clone(D){return qs(D,e,n,i)}};return b}function Sl(t){if(Wa(t))return t=Bi(t),t.children=null,t}function Ef(t){if(!Wa(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Ue(n.default))return n.default()}}function Ys(t,e){t.shapeFlag&6&&t.component?Ys(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Cu(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===gt?(o.patchFlag&128&&r++,i=i.concat(Cu(o.children,e,a))):(e||o.type!==_n)&&i.push(a!=null?Bi(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function oo(t,e){return Ue(t)?St({name:t.name},e,{setup:t}):t}const ca=t=>!!t.type.__asyncLoader,Wa=t=>t.type.__isKeepAlive;function dm(t,e){pm(t,"a",e)}function hm(t,e){pm(t,"da",e)}function pm(t,e,n=Pt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Xa(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Wa(r.parent.vnode)&&v0(i,e,n,r),r=r.parent}}function v0(t,e,n,i){const r=Xa(e,t,i,!0);gm(()=>{au(i[e],r)},n)}function Xa(t,e,n=Pt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Hi();const a=lo(n),l=Sn(e,n,t,o);return a(),Gi(),l});return i?r.unshift(s):r.push(s),s}}const ci=t=>(e,n=Pt)=>(!$a||t==="sp")&&Xa(t,(...i)=>e(...i),n),mm=ci("bm"),Wi=ci("m"),_0=ci("bu"),Ru=ci("u"),qn=ci("bum"),gm=ci("um"),y0=ci("sp"),x0=ci("rtg"),S0=ci("rtc");function M0(t,e=Pt){Xa("ec",t,e)}function b0(t,e,n,i){let r;const s=n;if(De(t)||yt(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s)}else if(at(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,s));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,s)}}else r=[];return r}const Ac=t=>t?Dm(t)?qa(t)||t.proxy:Ac(t.parent):null,Us=St(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ac(t.parent),$root:t=>Ac(t.root),$emit:t=>t.emit,$options:t=>Pu(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Su(t.update)}),$nextTick:t=>t.n||(t.n=cn.bind(t.proxy)),$watch:t=>p0.bind(t)}),Ml=(t,e)=>t!==dt&&!t.__isScriptSetup&&Ke(t,e),E0={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Ml(i,e))return o[e]=1,i[e];if(r!==dt&&Ke(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&Ke(c,e))return o[e]=3,s[e];if(n!==dt&&Ke(n,e))return o[e]=4,n[e];wc&&(o[e]=0)}}const u=Us[e];let f,d;if(u)return e==="$attrs"&&Qt(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==dt&&Ke(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Ke(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Ml(r,e)?(r[e]=n,!0):i!==dt&&Ke(i,e)?(i[e]=n,!0):Ke(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==dt&&Ke(t,o)||Ml(e,o)||(a=s[0])&&Ke(a,o)||Ke(i,o)||Ke(Us,o)||Ke(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ke(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Tf(t){return De(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let wc=!0;function T0(t){const e=Pu(t),n=t.proxy,i=t.ctx;wc=!1,e.beforeCreate&&Af(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:v,activated:g,deactivated:m,beforeDestroy:p,beforeUnmount:M,destroyed:x,unmounted:T,render:L,renderTracked:E,renderTriggered:b,errorCaptured:D,serverPrefetch:S,expose:_,inheritAttrs:N,components:I,directives:R,filters:k}=e;if(c&&A0(c,i,null),o)for(const ie in o){const G=o[ie];Ue(G)&&(i[ie]=G.bind(n))}if(r){const ie=r.call(n,n);at(ie)&&(t.data=Bt(ie))}if(wc=!0,s)for(const ie in s){const G=s[ie],fe=Ue(G)?G.bind(n,n):Ue(G.get)?G.get.bind(n,n):vn,me=!Ue(G)&&Ue(G.set)?G.set.bind(n):vn,ve=ne({get:fe,set:me});Object.defineProperty(i,ie,{enumerable:!0,configurable:!0,get:()=>ve.value,set:Ae=>ve.value=Ae})}if(a)for(const ie in a)vm(a[ie],i,n,ie);if(l){const ie=Ue(l)?l.call(n):l;Reflect.ownKeys(ie).forEach(G=>{Mn(G,ie[G])})}u&&Af(u,t,"c");function ee(ie,G){De(G)?G.forEach(fe=>ie(fe.bind(n))):G&&ie(G.bind(n))}if(ee(mm,f),ee(Wi,d),ee(_0,h),ee(Ru,v),ee(dm,g),ee(hm,m),ee(M0,D),ee(S0,E),ee(x0,b),ee(qn,M),ee(gm,T),ee(y0,S),De(_))if(_.length){const ie=t.exposed||(t.exposed={});_.forEach(G=>{Object.defineProperty(ie,G,{get:()=>n[G],set:fe=>n[G]=fe})})}else t.exposed||(t.exposed={});L&&t.render===vn&&(t.render=L),N!=null&&(t.inheritAttrs=N),I&&(t.components=I),R&&(t.directives=R)}function A0(t,e,n=vn){De(t)&&(t=Cc(t));for(const i in t){const r=t[i];let s;at(r)?"default"in r?s=_t(r.from||i,r.default,!0):s=_t(r.from||i):s=_t(r),xt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Af(t,e,n){Sn(De(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function vm(t,e,n,i){const r=i.includes(".")?lm(n,i):()=>n[i];if(yt(t)){const s=e[t];Ue(s)&&Ye(r,s)}else if(Ue(t))Ye(r,t.bind(n));else if(at(t))if(De(t))t.forEach(s=>vm(s,e,n,i));else{const s=Ue(t.handler)?t.handler.bind(n):e[t.handler];Ue(s)&&Ye(r,s,t)}}function Pu(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>ya(l,c,o,!0)),ya(l,e,o)),at(e)&&s.set(e,l),l}function ya(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&ya(t,s,n,!0),r&&r.forEach(o=>ya(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=w0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const w0={data:wf,props:Cf,emits:Cf,methods:Ps,computed:Ps,beforeCreate:Gt,created:Gt,beforeMount:Gt,mounted:Gt,beforeUpdate:Gt,updated:Gt,beforeDestroy:Gt,beforeUnmount:Gt,destroyed:Gt,unmounted:Gt,activated:Gt,deactivated:Gt,errorCaptured:Gt,serverPrefetch:Gt,components:Ps,directives:Ps,watch:R0,provide:wf,inject:C0};function wf(t,e){return e?t?function(){return St(Ue(t)?t.call(this,this):t,Ue(e)?e.call(this,this):e)}:e:t}function C0(t,e){return Ps(Cc(t),Cc(e))}function Cc(t){if(De(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Gt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ps(t,e){return t?St(Object.create(null),t,e):e}function Cf(t,e){return t?De(t)&&De(e)?[...new Set([...t,...e])]:St(Object.create(null),Tf(t),Tf(e??{})):e}function R0(t,e){if(!t)return e;if(!e)return t;const n=St(Object.create(null),t);for(const i in e)n[i]=Gt(t[i],e[i]);return n}function _m(){return{app:null,config:{isNativeTag:i_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let P0=0;function L0(t,e){return function(i,r=null){Ue(i)||(i=St({},i)),r!=null&&!at(r)&&(r=null);const s=_m(),o=new WeakSet;let a=!1;const l=s.app={_uid:P0++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:ny,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ue(c.install)?(o.add(c),c.install(l,...u)):Ue(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const d=z(i,r);return d.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(d,c):t(d,c,f),a=!0,l._container=c,c.__vue_app__=l,qa(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){const u=Os;Os=l;try{return c()}finally{Os=u}}};return l}}let Os=null;function Mn(t,e){if(Pt){let n=Pt.provides;const i=Pt.parent&&Pt.parent.provides;i===n&&(n=Pt.provides=Object.create(i)),n[t]=e}}function _t(t,e,n=!1){const i=Pt||$t;if(i||Os){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Os._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Ue(e)?e.call(i&&i.proxy):e}}const ym={},xm=()=>Object.create(ym),Sm=t=>Object.getPrototypeOf(t)===ym;function I0(t,e,n,i=!1){const r={},s=xm();t.propsDefaults=Object.create(null),Mm(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:jp(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function D0(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=je(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Ha(t.emitsOptions,d))continue;const h=e[d];if(l)if(Ke(s,d))h!==s[d]&&(s[d]=h,c=!0);else{const v=bn(d);r[v]=Rc(l,a,v,h,t,!1)}else h!==s[d]&&(s[d]=h,c=!0)}}}else{Mm(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Ke(e,f)&&((u=ds(f))===f||!Ke(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Rc(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Ke(e,f))&&(delete s[f],c=!0)}c&&oi(t.attrs,"set","")}function Mm(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ds(l))continue;const c=e[l];let u;r&&Ke(r,u=bn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Ha(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=je(n),c=a||dt;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Rc(r,l,f,c[f],t,!Ke(c,f))}}return o}function Rc(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=Ke(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ue(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=lo(r);i=c[n]=l.call(null,e),u()}}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===ds(n))&&(i=!0))}return i}function bm(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!Ue(t)){const u=f=>{l=!0;const[d,h]=bm(f,e,!0);St(o,d),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return at(t)&&i.set(t,$r),$r;if(De(s))for(let u=0;u<s.length;u++){const f=bn(s[u]);Rf(f)&&(o[f]=dt)}else if(s)for(const u in s){const f=bn(u);if(Rf(f)){const d=s[u],h=o[f]=De(d)||Ue(d)?{type:d}:St({},d);if(h){const v=If(Boolean,h.type),g=If(String,h.type);h[0]=v>-1,h[1]=g<0||v<g,(v>-1||Ke(h,"default"))&&a.push(f)}}}const c=[o,a];return at(t)&&i.set(t,c),c}function Rf(t){return t[0]!=="$"&&!Ds(t)}function Pf(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Lf(t,e){return Pf(t)===Pf(e)}function If(t,e){return De(e)?e.findIndex(n=>Lf(n,t)):Ue(e)&&Lf(e,t)?0:-1}const Em=t=>t[0]==="_"||t==="$stable",Lu=t=>De(t)?t.map(Cn):[Cn(t)],N0=(t,e,n)=>{if(e._n)return e;const i=Et((...r)=>Lu(e(...r)),n);return i._c=!1,i},Tm=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Em(r))continue;const s=t[r];if(Ue(s))e[r]=N0(r,s,i);else if(s!=null){const o=Lu(s);e[r]=()=>o}}},Am=(t,e)=>{const n=Lu(e);t.slots.default=()=>n},U0=(t,e)=>{const n=t.slots=xm();if(t.vnode.shapeFlag&32){const i=e._;i?(St(n,e),Ip(n,"_",i,!0)):Tm(e,n)}else e&&Am(t,e)},O0=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=dt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(St(r,e),!n&&a===1&&delete r._):(s=!e.$stable,Tm(e,r)),o=e}else e&&(Am(t,e),o={default:1});if(s)for(const a in r)!Em(a)&&o[a]==null&&delete r[a]};function Pc(t,e,n,i,r=!1){if(De(t)){t.forEach((d,h)=>Pc(d,e&&(De(e)?e[h]:e),n,i,r));return}if(ca(i)&&!r)return;const s=i.shapeFlag&4?qa(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===dt?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(yt(c)?(u[c]=null,Ke(f,c)&&(f[c]=null)):xt(c)&&(c.value=null)),Ue(l))Ni(l,a,12,[o,u]);else{const d=yt(l),h=xt(l);if(d||h){const v=()=>{if(t.f){const g=d?Ke(f,l)?f[l]:u[l]:l.value;r?De(g)&&au(g,s):De(g)?g.includes(s)||g.push(s):d?(u[l]=[s],Ke(f,l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,Ke(f,l)&&(f[l]=o)):h&&(l.value=o,t.k&&(u[t.k]=o))};o?(v.id=-1,jt(v,n)):v()}}}const jt=u0;function F0(t){return B0(t)}function B0(t,e){const n=Np();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=vn,insertStaticContent:v}=t,g=(C,P,H,Y=null,$=null,ce=null,A=void 0,y=null,O=!!P.dynamicChildren)=>{if(C===P)return;C&&!Vn(C,P)&&(Y=B(C),Ae(C,$,ce,!0),C=null),P.patchFlag===-2&&(O=!1,P.dynamicChildren=null);const{type:F,ref:X,shapeFlag:Z}=P;switch(F){case ao:m(C,P,H,Y);break;case _n:p(C,P,H,Y);break;case El:C==null&&M(P,H,Y,A);break;case gt:I(C,P,H,Y,$,ce,A,y,O);break;default:Z&1?L(C,P,H,Y,$,ce,A,y,O):Z&6?R(C,P,H,Y,$,ce,A,y,O):(Z&64||Z&128)&&F.process(C,P,H,Y,$,ce,A,y,O,U)}X!=null&&$&&Pc(X,C&&C.ref,ce,P||C,!P)},m=(C,P,H,Y)=>{if(C==null)i(P.el=a(P.children),H,Y);else{const $=P.el=C.el;P.children!==C.children&&c($,P.children)}},p=(C,P,H,Y)=>{C==null?i(P.el=l(P.children||""),H,Y):P.el=C.el},M=(C,P,H,Y)=>{[C.el,C.anchor]=v(C.children,P,H,Y,C.el,C.anchor)},x=({el:C,anchor:P},H,Y)=>{let $;for(;C&&C!==P;)$=d(C),i(C,H,Y),C=$;i(P,H,Y)},T=({el:C,anchor:P})=>{let H;for(;C&&C!==P;)H=d(C),r(C),C=H;r(P)},L=(C,P,H,Y,$,ce,A,y,O)=>{P.type==="svg"?A="svg":P.type==="math"&&(A="mathml"),C==null?E(P,H,Y,$,ce,A,y,O):S(C,P,$,ce,A,y,O)},E=(C,P,H,Y,$,ce,A,y)=>{let O,F;const{props:X,shapeFlag:Z,transition:ue,dirs:re}=C;if(O=C.el=o(C.type,ce,X&&X.is,X),Z&8?u(O,C.children):Z&16&&D(C.children,O,null,Y,$,bl(C,ce),A,y),re&&Yi(C,null,Y,"created"),b(O,C,C.scopeId,A,Y),X){for(const be in X)be!=="value"&&!Ds(be)&&s(O,be,null,X[be],ce,C.children,Y,$,ge);"value"in X&&s(O,"value",null,X.value,ce),(F=X.onVnodeBeforeMount)&&On(F,Y,C)}re&&Yi(C,null,Y,"beforeMount");const le=k0($,ue);le&&ue.beforeEnter(O),i(O,P,H),((F=X&&X.onVnodeMounted)||le||re)&&jt(()=>{F&&On(F,Y,C),le&&ue.enter(O),re&&Yi(C,null,Y,"mounted")},$)},b=(C,P,H,Y,$)=>{if(H&&h(C,H),Y)for(let ce=0;ce<Y.length;ce++)h(C,Y[ce]);if($){let ce=$.subTree;if(P===ce){const A=$.vnode;b(C,A,A.scopeId,A.slotScopeIds,$.parent)}}},D=(C,P,H,Y,$,ce,A,y,O=0)=>{for(let F=O;F<C.length;F++){const X=C[F]=y?Ai(C[F]):Cn(C[F]);g(null,X,P,H,Y,$,ce,A,y)}},S=(C,P,H,Y,$,ce,A)=>{const y=P.el=C.el;let{patchFlag:O,dynamicChildren:F,dirs:X}=P;O|=C.patchFlag&16;const Z=C.props||dt,ue=P.props||dt;let re;if(H&&ji(H,!1),(re=ue.onVnodeBeforeUpdate)&&On(re,H,P,C),X&&Yi(P,C,H,"beforeUpdate"),H&&ji(H,!0),F?_(C.dynamicChildren,F,y,H,Y,bl(P,$),ce):A||G(C,P,y,null,H,Y,bl(P,$),ce,!1),O>0){if(O&16)N(y,P,Z,ue,H,Y,$);else if(O&2&&Z.class!==ue.class&&s(y,"class",null,ue.class,$),O&4&&s(y,"style",Z.style,ue.style,$),O&8){const le=P.dynamicProps;for(let be=0;be<le.length;be++){const de=le[be],Me=Z[de],Oe=ue[de];(Oe!==Me||de==="value")&&s(y,de,Me,Oe,$,C.children,H,Y,ge)}}O&1&&C.children!==P.children&&u(y,P.children)}else!A&&F==null&&N(y,P,Z,ue,H,Y,$);((re=ue.onVnodeUpdated)||X)&&jt(()=>{re&&On(re,H,P,C),X&&Yi(P,C,H,"updated")},Y)},_=(C,P,H,Y,$,ce,A)=>{for(let y=0;y<P.length;y++){const O=C[y],F=P[y],X=O.el&&(O.type===gt||!Vn(O,F)||O.shapeFlag&70)?f(O.el):H;g(O,F,X,null,Y,$,ce,A,!0)}},N=(C,P,H,Y,$,ce,A)=>{if(H!==Y){if(H!==dt)for(const y in H)!Ds(y)&&!(y in Y)&&s(C,y,H[y],null,A,P.children,$,ce,ge);for(const y in Y){if(Ds(y))continue;const O=Y[y],F=H[y];O!==F&&y!=="value"&&s(C,y,F,O,A,P.children,$,ce,ge)}"value"in Y&&s(C,"value",H.value,Y.value,A)}},I=(C,P,H,Y,$,ce,A,y,O)=>{const F=P.el=C?C.el:a(""),X=P.anchor=C?C.anchor:a("");let{patchFlag:Z,dynamicChildren:ue,slotScopeIds:re}=P;re&&(y=y?y.concat(re):re),C==null?(i(F,H,Y),i(X,H,Y),D(P.children||[],H,X,$,ce,A,y,O)):Z>0&&Z&64&&ue&&C.dynamicChildren?(_(C.dynamicChildren,ue,H,$,ce,A,y),(P.key!=null||$&&P===$.subTree)&&Iu(C,P,!0)):G(C,P,H,X,$,ce,A,y,O)},R=(C,P,H,Y,$,ce,A,y,O)=>{P.slotScopeIds=y,C==null?P.shapeFlag&512?$.ctx.activate(P,H,Y,A,O):k(P,H,Y,$,ce,A,O):q(C,P,O)},k=(C,P,H,Y,$,ce,A)=>{const y=C.component=j0(C,Y,$);if(Wa(C)&&(y.ctx.renderer=U),K0(y),y.asyncDep){if($&&$.registerDep(y,ee),!C.el){const O=y.subTree=z(_n);p(null,O,P,H)}}else ee(y,C,P,H,$,ce,A)},q=(C,P,H)=>{const Y=P.component=C.component;if(Q_(C,P,H))if(Y.asyncDep&&!Y.asyncResolved){ie(Y,P,H);return}else Y.next=P,X_(Y.update),Y.effect.dirty=!0,Y.update();else P.el=C.el,Y.vnode=P},ee=(C,P,H,Y,$,ce,A)=>{const y=()=>{if(C.isMounted){let{next:X,bu:Z,u:ue,parent:re,vnode:le}=C;{const Pe=wm(C);if(Pe){X&&(X.el=le.el,ie(C,X,A)),Pe.asyncDep.then(()=>{C.isUnmounted||y()});return}}let be=X,de;ji(C,!1),X?(X.el=le.el,ie(C,X,A)):X=le,Z&&_l(Z),(de=X.props&&X.props.onVnodeBeforeUpdate)&&On(de,re,X,le),ji(C,!0);const Me=xl(C),Oe=C.subTree;C.subTree=Me,g(Oe,Me,f(Oe.el),B(Oe),C,$,ce),X.el=Me.el,be===null&&Mu(C,Me.el),ue&&jt(ue,$),(de=X.props&&X.props.onVnodeUpdated)&&jt(()=>On(de,re,X,le),$)}else{let X;const{el:Z,props:ue}=P,{bm:re,m:le,parent:be}=C,de=ca(P);if(ji(C,!1),re&&_l(re),!de&&(X=ue&&ue.onVnodeBeforeMount)&&On(X,be,P),ji(C,!0),Z&&ye){const Me=()=>{C.subTree=xl(C),ye(Z,C.subTree,C,$,null)};de?P.type.__asyncLoader().then(()=>!C.isUnmounted&&Me()):Me()}else{const Me=C.subTree=xl(C);g(null,Me,H,Y,C,$,ce),P.el=Me.el}if(le&&jt(le,$),!de&&(X=ue&&ue.onVnodeMounted)){const Me=P;jt(()=>On(X,be,Me),$)}(P.shapeFlag&256||be&&ca(be.vnode)&&be.vnode.shapeFlag&256)&&C.a&&jt(C.a,$),C.isMounted=!0,P=H=Y=null}},O=C.effect=new du(y,vn,()=>Su(F),C.scope),F=C.update=()=>{O.dirty&&O.run()};F.id=C.uid,ji(C,!0),F()},ie=(C,P,H)=>{P.component=C;const Y=C.vnode.props;C.vnode=P,C.next=null,D0(C,P.props,Y,H),O0(C,P.children,H),Hi(),xf(C),Gi()},G=(C,P,H,Y,$,ce,A,y,O=!1)=>{const F=C&&C.children,X=C?C.shapeFlag:0,Z=P.children,{patchFlag:ue,shapeFlag:re}=P;if(ue>0){if(ue&128){me(F,Z,H,Y,$,ce,A,y,O);return}else if(ue&256){fe(F,Z,H,Y,$,ce,A,y,O);return}}re&8?(X&16&&ge(F,$,ce),Z!==F&&u(H,Z)):X&16?re&16?me(F,Z,H,Y,$,ce,A,y,O):ge(F,$,ce,!0):(X&8&&u(H,""),re&16&&D(Z,H,Y,$,ce,A,y,O))},fe=(C,P,H,Y,$,ce,A,y,O)=>{C=C||$r,P=P||$r;const F=C.length,X=P.length,Z=Math.min(F,X);let ue;for(ue=0;ue<Z;ue++){const re=P[ue]=O?Ai(P[ue]):Cn(P[ue]);g(C[ue],re,H,null,$,ce,A,y,O)}F>X?ge(C,$,ce,!0,!1,Z):D(P,H,Y,$,ce,A,y,O,Z)},me=(C,P,H,Y,$,ce,A,y,O)=>{let F=0;const X=P.length;let Z=C.length-1,ue=X-1;for(;F<=Z&&F<=ue;){const re=C[F],le=P[F]=O?Ai(P[F]):Cn(P[F]);if(Vn(re,le))g(re,le,H,null,$,ce,A,y,O);else break;F++}for(;F<=Z&&F<=ue;){const re=C[Z],le=P[ue]=O?Ai(P[ue]):Cn(P[ue]);if(Vn(re,le))g(re,le,H,null,$,ce,A,y,O);else break;Z--,ue--}if(F>Z){if(F<=ue){const re=ue+1,le=re<X?P[re].el:Y;for(;F<=ue;)g(null,P[F]=O?Ai(P[F]):Cn(P[F]),H,le,$,ce,A,y,O),F++}}else if(F>ue)for(;F<=Z;)Ae(C[F],$,ce,!0),F++;else{const re=F,le=F,be=new Map;for(F=le;F<=ue;F++){const qe=P[F]=O?Ai(P[F]):Cn(P[F]);qe.key!=null&&be.set(qe.key,F)}let de,Me=0;const Oe=ue-le+1;let Pe=!1,Ee=0;const Fe=new Array(Oe);for(F=0;F<Oe;F++)Fe[F]=0;for(F=re;F<=Z;F++){const qe=C[F];if(Me>=Oe){Ae(qe,$,ce,!0);continue}let Ie;if(qe.key!=null)Ie=be.get(qe.key);else for(de=le;de<=ue;de++)if(Fe[de-le]===0&&Vn(qe,P[de])){Ie=de;break}Ie===void 0?Ae(qe,$,ce,!0):(Fe[Ie-le]=F+1,Ie>=Ee?Ee=Ie:Pe=!0,g(qe,P[Ie],H,null,$,ce,A,y,O),Me++)}const We=Pe?V0(Fe):$r;for(de=We.length-1,F=Oe-1;F>=0;F--){const qe=le+F,Ie=P[qe],V=qe+1<X?P[qe+1].el:Y;Fe[F]===0?g(null,Ie,H,V,$,ce,A,y,O):Pe&&(de<0||F!==We[de]?ve(Ie,H,V,2):de--)}}},ve=(C,P,H,Y,$=null)=>{const{el:ce,type:A,transition:y,children:O,shapeFlag:F}=C;if(F&6){ve(C.component.subTree,P,H,Y);return}if(F&128){C.suspense.move(P,H,Y);return}if(F&64){A.move(C,P,H,U);return}if(A===gt){i(ce,P,H);for(let Z=0;Z<O.length;Z++)ve(O[Z],P,H,Y);i(C.anchor,P,H);return}if(A===El){x(C,P,H);return}if(Y!==2&&F&1&&y)if(Y===0)y.beforeEnter(ce),i(ce,P,H),jt(()=>y.enter(ce),$);else{const{leave:Z,delayLeave:ue,afterLeave:re}=y,le=()=>i(ce,P,H),be=()=>{Z(ce,()=>{le(),re&&re()})};ue?ue(ce,le,be):be()}else i(ce,P,H)},Ae=(C,P,H,Y=!1,$=!1)=>{const{type:ce,props:A,ref:y,children:O,dynamicChildren:F,shapeFlag:X,patchFlag:Z,dirs:ue}=C;if(y!=null&&Pc(y,null,H,C,!0),X&256){P.ctx.deactivate(C);return}const re=X&1&&ue,le=!ca(C);let be;if(le&&(be=A&&A.onVnodeBeforeUnmount)&&On(be,P,C),X&6)oe(C.component,H,Y);else{if(X&128){C.suspense.unmount(H,Y);return}re&&Yi(C,null,P,"beforeUnmount"),X&64?C.type.remove(C,P,H,$,U,Y):F&&(ce!==gt||Z>0&&Z&64)?ge(F,P,H,!1,!0):(ce===gt&&Z&384||!$&&X&16)&&ge(O,P,H),Y&&$e(C)}(le&&(be=A&&A.onVnodeUnmounted)||re)&&jt(()=>{be&&On(be,P,C),re&&Yi(C,null,P,"unmounted")},H)},$e=C=>{const{type:P,el:H,anchor:Y,transition:$}=C;if(P===gt){te(H,Y);return}if(P===El){T(C);return}const ce=()=>{r(H),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(C.shapeFlag&1&&$&&!$.persisted){const{leave:A,delayLeave:y}=$,O=()=>A(H,ce);y?y(C.el,ce,O):O()}else ce()},te=(C,P)=>{let H;for(;C!==P;)H=d(C),r(C),C=H;r(P)},oe=(C,P,H)=>{const{bum:Y,scope:$,update:ce,subTree:A,um:y}=C;Y&&_l(Y),$.stop(),ce&&(ce.active=!1,Ae(A,C,P,H)),y&&jt(y,P),jt(()=>{C.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&C.asyncDep&&!C.asyncResolved&&C.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},ge=(C,P,H,Y=!1,$=!1,ce=0)=>{for(let A=ce;A<C.length;A++)Ae(C[A],P,H,Y,$)},B=C=>C.shapeFlag&6?B(C.component.subTree):C.shapeFlag&128?C.suspense.next():d(C.anchor||C.el);let he=!1;const ae=(C,P,H)=>{C==null?P._vnode&&Ae(P._vnode,null,null,!0):g(P._vnode||null,C,P,null,null,null,H),he||(he=!0,xf(),rm(),he=!1),P._vnode=C},U={p:g,um:Ae,m:ve,r:$e,mt:k,mc:D,pc:G,pbc:_,n:B,o:t};let Re,ye;return{render:ae,hydrate:Re,createApp:L0(ae,Re)}}function bl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ji({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function k0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Iu(t,e,n=!1){const i=t.children,r=e.children;if(De(i)&&De(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Ai(r[s]),a.el=o.el),n||Iu(o,a)),a.type===ao&&(a.el=o.el)}}function V0(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function wm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:wm(e)}const z0=t=>t.__isTeleport,Fs=t=>t&&(t.disabled||t.disabled===""),Df=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Nf=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Lc=(t,e)=>{const n=t&&t.to;return yt(n)?e?e(n):null:n},H0={name:"Teleport",__isTeleport:!0,process(t,e,n,i,r,s,o,a,l,c){const{mc:u,pc:f,pbc:d,o:{insert:h,querySelector:v,createText:g,createComment:m}}=c,p=Fs(e.props);let{shapeFlag:M,children:x,dynamicChildren:T}=e;if(t==null){const L=e.el=g(""),E=e.anchor=g("");h(L,n,i),h(E,n,i);const b=e.target=Lc(e.props,v),D=e.targetAnchor=g("");b&&(h(D,b),o==="svg"||Df(b)?o="svg":(o==="mathml"||Nf(b))&&(o="mathml"));const S=(_,N)=>{M&16&&u(x,_,N,r,s,o,a,l)};p?S(n,E):b&&S(b,D)}else{e.el=t.el;const L=e.anchor=t.anchor,E=e.target=t.target,b=e.targetAnchor=t.targetAnchor,D=Fs(t.props),S=D?n:E,_=D?L:b;if(o==="svg"||Df(E)?o="svg":(o==="mathml"||Nf(E))&&(o="mathml"),T?(d(t.dynamicChildren,T,S,r,s,o,a),Iu(t,e,!0)):l||f(t,e,S,_,r,s,o,a,!1),p)D?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Do(e,n,L,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const N=e.target=Lc(e.props,v);N&&Do(e,N,null,c,0)}else D&&Do(e,E,b,c,1)}Cm(e)},remove(t,e,n,i,{um:r,o:{remove:s}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:f,props:d}=t;if(f&&s(u),o&&s(c),a&16){const h=o||!Fs(d);for(let v=0;v<l.length;v++){const g=l[v];r(g,e,n,h,!!g.dynamicChildren)}}},move:Do,hydrate:G0};function Do(t,e,n,{o:{insert:i},m:r},s=2){s===0&&i(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,f=s===2;if(f&&i(o,e,n),(!f||Fs(u))&&l&16)for(let d=0;d<c.length;d++)r(c[d],e,n,2);f&&i(a,e,n)}function G0(t,e,n,i,r,s,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=Lc(e.props,l);if(u){const f=u._lpa||u.firstChild;if(e.shapeFlag&16)if(Fs(e.props))e.anchor=c(o(t),e,a(t),n,i,r,s),e.targetAnchor=f;else{e.anchor=o(t);let d=f;for(;d;)if(d=o(d),d&&d.nodeType===8&&d.data==="teleport anchor"){e.targetAnchor=d,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(f,e,u,n,i,r,s)}Cm(e)}return e.anchor&&o(e.anchor)}const W0=H0;function Cm(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const gt=Symbol.for("v-fgt"),ao=Symbol.for("v-txt"),_n=Symbol.for("v-cmt"),El=Symbol.for("v-stc"),Bs=[];let yn=null;function yr(t=!1){Bs.push(yn=t?null:[])}function Rm(){Bs.pop(),yn=Bs[Bs.length-1]||null}let ts=1;function Uf(t){ts+=t}function Pm(t){return t.dynamicChildren=ts>0?yn||$r:null,Rm(),ts>0&&yn&&yn.push(t),t}function xa(t,e,n,i,r,s){return Pm(en(t,e,n,i,r,s,!0))}function Lm(t,e,n,i,r){return Pm(z(t,e,n,i,r,!0))}function Sa(t){return t?t.__v_isVNode===!0:!1}function Vn(t,e){return t.type===e.type&&t.key===e.key}const Im=({key:t})=>t??null,ua=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?yt(t)||xt(t)||Ue(t)?{i:$t,r:t,k:e,f:!!n}:t:null);function en(t,e=null,n=null,i=0,r=null,s=t===gt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Im(e),ref:e&&ua(e),scopeId:Ga,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:$t};return a?(Du(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=yt(n)?8:16),ts>0&&!o&&yn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&yn.push(l),l}const z=X0;function X0(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===n0)&&(t=_n),Sa(t)){const a=Bi(t,e,!0);return n&&Du(a,n),ts>0&&!s&&yn&&(a.shapeFlag&6?yn[yn.indexOf(t)]=a:yn.push(a)),a.patchFlag|=-2,a}if(ty(t)&&(t=t.__vccOpts),e){e=$0(e);let{class:a,style:l}=e;a&&!yt(a)&&(e.class=uu(a)),at(l)&&(Kp(l)&&!De(l)&&(l=St({},l)),e.style=cu(l))}const o=yt(t)?1:r0(t)?128:z0(t)?64:at(t)?4:Ue(t)?2:0;return en(t,e,n,i,r,o,s,!0)}function $0(t){return t?Kp(t)||Sm(t)?St({},t):t:null}function Bi(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?Vt(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Im(c),ref:e&&e.ref?n&&s?De(s)?s.concat(ua(e)):[s,ua(e)]:ua(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==gt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Bi(t.ssContent),ssFallback:t.ssFallback&&Bi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&(u.transition=l.clone(u)),u}function pr(t=" ",e=0){return z(ao,null,t,e)}function Cn(t){return t==null||typeof t=="boolean"?z(_n):De(t)?z(gt,null,t.slice()):typeof t=="object"?Ai(t):z(ao,null,String(t))}function Ai(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Bi(t)}function Du(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(De(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Du(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Sm(e)?e._ctx=$t:r===3&&$t&&($t.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ue(e)?(e={default:e,_ctx:$t},n=32):(e=String(e),i&64?(n=16,e=[pr(e)]):n=8);t.children=e,t.shapeFlag|=n}function Vt(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=uu([e.class,i.class]));else if(r==="style")e.style=cu([e.style,i.style]);else if(Ba(r)){const s=e[r],o=i[r];o&&s!==o&&!(De(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function On(t,e,n,i=null){Sn(t,e,7,[n,i])}const q0=_m();let Y0=0;function j0(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||q0,s={uid:Y0++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Fp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bm(i,r),emitsOptions:om(i,r),emit:null,emitted:null,propsDefaults:dt,inheritAttrs:i.inheritAttrs,ctx:dt,data:dt,props:dt,attrs:dt,slots:dt,refs:dt,setupState:dt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=q_.bind(null,s),t.ce&&t.ce(s),s}let Pt=null;const Nu=()=>Pt||$t;let Ma,Ic;{const t=Np(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Ma=e("__VUE_INSTANCE_SETTERS__",n=>Pt=n),Ic=e("__VUE_SSR_SETTERS__",n=>$a=n)}const lo=t=>{const e=Pt;return Ma(t),t.scope.on(),()=>{t.scope.off(),Ma(e)}},Of=()=>{Pt&&Pt.scope.off(),Ma(null)};function Dm(t){return t.vnode.shapeFlag&4}let $a=!1;function K0(t,e=!1){e&&Ic(e);const{props:n,children:i}=t.vnode,r=Dm(t);I0(t,n,r,e),U0(t,i);const s=r?Z0(t,e):void 0;return e&&Ic(!1),s}function Z0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,E0);const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?Q0(t):null,s=lo(t);Hi();const o=Ni(i,t,0,[t.props,r]);if(Gi(),s(),Rp(o)){if(o.then(Of,Of),e)return o.then(a=>{Dc(t,a,e)}).catch(a=>{so(a,t,0)});t.asyncDep=o}else Dc(t,o,e)}else Nm(t,e)}function Dc(t,e,n){Ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:at(e)&&(t.setupState=em(e)),Nm(t,n)}let Ff;function Nm(t,e,n){const i=t.type;if(!t.render){if(!e&&Ff&&!i.render){const r=i.template||Pu(t).template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=St(St({isCustomElement:s,delimiters:a},o),l);i.render=Ff(r,c)}}t.render=i.render||vn}{const r=lo(t);Hi();try{T0(t)}finally{Gi(),r()}}}const J0={get(t,e){return Qt(t,"get",""),t[e]}};function Q0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,J0),slots:t.slots,emit:t.emit,expose:e}}function qa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(em(F_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Us)return Us[n](t)},has(e,n){return n in e||n in Us}}))}function ey(t,e=!0){return Ue(t)?t.displayName||t.name:t.name||e&&t.__name}function ty(t){return Ue(t)&&"__vccOpts"in t}const ne=(t,e)=>B_(t,e,$a);function Yn(t,e,n){const i=arguments.length;return i===2?at(e)&&!De(e)?Sa(e)?z(t,null,[e]):z(t,e):z(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Sa(n)&&(n=[n]),z(t,e,n))}const ny="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const iy="http://www.w3.org/2000/svg",ry="http://www.w3.org/1998/Math/MathML",wi=typeof document<"u"?document:null,Bf=wi&&wi.createElement("template"),sy={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?wi.createElementNS(iy,t):e==="mathml"?wi.createElementNS(ry,t):wi.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>wi.createTextNode(t),createComment:t=>wi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>wi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Bf.innerHTML=i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t;const a=Bf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},mi="transition",Ss="animation",ns=Symbol("_vtc"),Mr=(t,{slots:e})=>Yn(g0,Om(t),e);Mr.displayName="Transition";const Um={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},oy=Mr.props=St({},um,Um),Ki=(t,e=[])=>{De(t)?t.forEach(n=>n(...e)):t&&t(...e)},kf=t=>t?De(t)?t.some(e=>e.length>1):t.length>1:!1;function Om(t){const e={};for(const I in t)I in Um||(e[I]=t[I]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=t,v=ay(r),g=v&&v[0],m=v&&v[1],{onBeforeEnter:p,onEnter:M,onEnterCancelled:x,onLeave:T,onLeaveCancelled:L,onBeforeAppear:E=p,onAppear:b=M,onAppearCancelled:D=x}=e,S=(I,R,k)=>{bi(I,R?u:a),bi(I,R?c:o),k&&k()},_=(I,R)=>{I._isLeaving=!1,bi(I,f),bi(I,h),bi(I,d),R&&R()},N=I=>(R,k)=>{const q=I?b:M,ee=()=>S(R,I,k);Ki(q,[R,ee]),Vf(()=>{bi(R,I?l:s),ni(R,I?u:a),kf(q)||zf(R,i,g,ee)})};return St(e,{onBeforeEnter(I){Ki(p,[I]),ni(I,s),ni(I,o)},onBeforeAppear(I){Ki(E,[I]),ni(I,l),ni(I,c)},onEnter:N(!1),onAppear:N(!0),onLeave(I,R){I._isLeaving=!0;const k=()=>_(I,R);ni(I,f),ni(I,d),Bm(),Vf(()=>{I._isLeaving&&(bi(I,f),ni(I,h),kf(T)||zf(I,i,m,k))}),Ki(T,[I,k])},onEnterCancelled(I){S(I,!1),Ki(x,[I])},onAppearCancelled(I){S(I,!0),Ki(D,[I])},onLeaveCancelled(I){_(I),Ki(L,[I])}})}function ay(t){if(t==null)return null;if(at(t))return[Tl(t.enter),Tl(t.leave)];{const e=Tl(t);return[e,e]}}function Tl(t){return Dp(t)}function ni(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ns]||(t[ns]=new Set)).add(e)}function bi(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[ns];n&&(n.delete(e),n.size||(t[ns]=void 0))}function Vf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let ly=0;function zf(t,e,n,i){const r=t._endId=++ly,s=()=>{r===t._endId&&i()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=Fm(t,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,d),s()},d=h=>{h.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,d)}function Fm(t,e){const n=window.getComputedStyle(t),i=v=>(n[v]||"").split(", "),r=i(`${mi}Delay`),s=i(`${mi}Duration`),o=Hf(r,s),a=i(`${Ss}Delay`),l=i(`${Ss}Duration`),c=Hf(a,l);let u=null,f=0,d=0;e===mi?o>0&&(u=mi,f=o,d=s.length):e===Ss?c>0&&(u=Ss,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?mi:Ss:null,d=u?u===mi?s.length:l.length:0);const h=u===mi&&/\b(transform|all)(,|$)/.test(i(`${mi}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:h}}function Hf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Gf(n)+Gf(t[i])))}function Gf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Bm(){return document.body.offsetHeight}function cy(t,e,n){const i=t[ns];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ba=Symbol("_vod"),km=Symbol("_vsh"),Uu={beforeMount(t,{value:e},{transition:n}){t[ba]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ms(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),Ms(t,!0),i.enter(t)):i.leave(t,()=>{Ms(t,!1)}):Ms(t,e))},beforeUnmount(t,{value:e}){Ms(t,e)}};function Ms(t,e){t.style.display=e?t[ba]:"none",t[km]=!e}const uy=Symbol(""),fy=/(^|;)\s*display\s*:/;function dy(t,e,n){const i=t.style,r=yt(n);let s=!1;if(n&&!r){if(e)if(yt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&fa(i,a,"")}else for(const o in e)n[o]==null&&fa(i,o,"");for(const o in n)o==="display"&&(s=!0),fa(i,o,n[o])}else if(r){if(e!==n){const o=i[uy];o&&(n+=";"+o),i.cssText=n,s=fy.test(n)}}else e&&t.removeAttribute("style");ba in t&&(t[ba]=s?i.display:"",t[km]&&(i.display="none"))}const Wf=/\s*!important$/;function fa(t,e,n){if(De(n))n.forEach(i=>fa(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=hy(t,e);Wf.test(n)?t.setProperty(ds(i),n.replace(Wf,""),"important"):t[i]=n}}const Xf=["Webkit","Moz","ms"],Al={};function hy(t,e){const n=Al[e];if(n)return n;let i=bn(e);if(i!=="filter"&&i in t)return Al[e]=i;i=li(i);for(let r=0;r<Xf.length;r++){const s=Xf[r]+i;if(s in t)return Al[e]=s}return e}const $f="http://www.w3.org/1999/xlink";function py(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS($f,e.slice(6,e.length)):t.setAttributeNS($f,e,n);else{const s=p_(e);n==null||s&&!Up(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function my(t,e,n,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(c!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Up(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function gy(t,e,n,i){t.addEventListener(e,n,i)}function vy(t,e,n,i){t.removeEventListener(e,n,i)}const qf=Symbol("_vei");function _y(t,e,n,i,r=null){const s=t[qf]||(t[qf]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=yy(e);if(i){const c=s[e]=My(i,r);gy(t,a,c,l)}else o&&(vy(t,a,o,l),s[e]=void 0)}}const Yf=/(?:Once|Passive|Capture)$/;function yy(t){let e;if(Yf.test(t)){e={};let i;for(;i=t.match(Yf);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ds(t.slice(2)),e]}let wl=0;const xy=Promise.resolve(),Sy=()=>wl||(xy.then(()=>wl=0),wl=Date.now());function My(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Sn(by(i,n.value),e,5,[i])};return n.value=t,n.attached=Sy(),n}function by(t,e){if(De(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const jf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Ey=(t,e,n,i,r,s,o,a,l)=>{const c=r==="svg";e==="class"?cy(t,i,c):e==="style"?dy(t,n,i):Ba(e)?ou(e)||_y(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ty(t,e,i,c))?my(t,e,i,s,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),py(t,e,i,c))};function Ty(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&jf(e)&&Ue(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return jf(e)&&yt(n)?!1:e in t}const Vm=new WeakMap,zm=new WeakMap,Ea=Symbol("_moveCb"),Kf=Symbol("_enterCb"),Hm={name:"TransitionGroup",props:St({},oy,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Nu(),i=cm();let r,s;return Ru(()=>{if(!r.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!Py(r[0].el,n.vnode.el,o))return;r.forEach(wy),r.forEach(Cy);const a=r.filter(Ry);Bm(),a.forEach(l=>{const c=l.el,u=c.style;ni(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=c[Ea]=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",f),c[Ea]=null,bi(c,o))};c.addEventListener("transitionend",f)})}),()=>{const o=je(t),a=Om(o);let l=o.tag||gt;if(r=[],s)for(let c=0;c<s.length;c++){const u=s[c];u.el&&u.el instanceof Element&&(r.push(u),Ys(u,qs(u,a,i,n)),Vm.set(u,u.el.getBoundingClientRect()))}s=e.default?Cu(e.default()):[];for(let c=0;c<s.length;c++){const u=s[c];u.key!=null&&Ys(u,qs(u,a,i,n))}return z(l,null,s)}}},Ay=t=>delete t.mode;Hm.props;const Ou=Hm;function wy(t){const e=t.el;e[Ea]&&e[Ea](),e[Kf]&&e[Kf]()}function Cy(t){zm.set(t,t.el.getBoundingClientRect())}function Ry(t){const e=Vm.get(t),n=zm.get(t),i=e.left-n.left,r=e.top-n.top;if(i||r){const s=t.el.style;return s.transform=s.webkitTransform=`translate(${i}px,${r}px)`,s.transitionDuration="0s",t}}function Py(t,e,n){const i=t.cloneNode(),r=t[ns];r&&r.forEach(a=>{a.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(i);const{hasTransform:o}=Fm(i);return s.removeChild(i),o}const Ly=St({patchProp:Ey},sy);let Zf;function Iy(){return Zf||(Zf=F0(Ly))}const Dy=(...t)=>{const e=Iy().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=Uy(i);if(!r)return;const s=e._component;!Ue(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,Ny(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Ny(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Uy(t){return yt(t)?document.querySelector(t):t}function ps(t,e){let n;function i(){n=fu(),n.run(()=>e.length?e(()=>{n==null||n.stop(),i()}):e())}Ye(t,r=>{r&&!n?i():r||(n==null||n.stop(),n=void 0)},{immediate:!0}),En(()=>{n==null||n.stop()})}const vt=typeof window<"u",Fu=vt&&"IntersectionObserver"in window,Oy=vt&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);function Fy(t,e,n){const i=e.length-1;if(i<0)return t===void 0?n:t;for(let r=0;r<i;r++){if(t==null)return n;t=t[e[r]]}return t==null||t[e[i]]===void 0?n:t[e[i]]}function Bu(t,e){if(t===e)return!0;if(t instanceof Date&&e instanceof Date&&t.getTime()!==e.getTime()||t!==Object(t)||e!==Object(e))return!1;const n=Object.keys(t);return n.length!==Object.keys(e).length?!1:n.every(i=>Bu(t[i],e[i]))}function Jf(t,e,n){return t==null||!e||typeof e!="string"?n:t[e]!==void 0?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),Fy(t,e.split("."),n))}function Gm(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:t},(n,i)=>e+i)}function Ve(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(t==null||t===""))return isNaN(+t)?String(t):isFinite(+t)?`${Number(t)}${e}`:void 0}function Nc(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}function Wm(t){if(t&&"$el"in t){const e=t.$el;return(e==null?void 0:e.nodeType)===Node.TEXT_NODE?e.nextElementSibling:e}return t}const Qf=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function Cl(t,e){return e.every(n=>t.hasOwnProperty(n))}function By(t,e){const n={},i=new Set(Object.keys(t));for(const r of e)i.has(r)&&(n[r]=t[r]);return n}function ky(t,e){const n={...t};return e.forEach(i=>delete n[i]),n}const Vy=/^on[^a-z]/,Xm=t=>Vy.test(t);function zy(t){return t==null?[]:Array.isArray(t)?t:[t]}function is(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(n,t))}function ed(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return t+n.repeat(Math.max(0,e-t.length))}function td(t,e){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,e-t.length))+t}function Hy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let i=0;for(;i<t.length;)n.push(t.substr(i,e)),i+=e;return n}function an(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const i={};for(const r in t)i[r]=t[r];for(const r in e){const s=t[r],o=e[r];if(Nc(s)&&Nc(o)){i[r]=an(s,o,n);continue}if(Array.isArray(s)&&Array.isArray(o)&&n){i[r]=n(s,o);continue}i[r]=o}return i}function $m(t){return t.map(e=>e.type===gt?$m(e.children):e).flat()}function mr(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(mr.cache.has(t))return mr.cache.get(t);const e=t.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return mr.cache.set(t,e),e}mr.cache=new Map;function ks(t,e){if(!e||typeof e!="object")return[];if(Array.isArray(e))return e.map(n=>ks(t,n)).flat(1);if(Array.isArray(e.children))return e.children.map(n=>ks(t,n)).flat(1);if(e.component){if(Object.getOwnPropertySymbols(e.component.provides).includes(t))return[e.component];if(e.component.subTree)return ks(t,e.component.subTree).flat(1)}return[]}function ku(t){const e=Bt({}),n=ne(t);return Nn(()=>{for(const i in n.value)e[i]=n.value[i]},{flush:"sync"}),yu(e)}function Ta(t,e){return t.includes(e)}function qm(t){return t[2].toLowerCase()+t.slice(3)}function nd(t,e){return e="on"+li(e),!!(t[e]||t[`${e}Once`]||t[`${e}Capture`]||t[`${e}OnceCapture`]||t[`${e}CaptureOnce`])}function Gy(t,e){if(!(vt&&typeof CSS<"u"&&typeof CSS.supports<"u"&&CSS.supports(`selector(${e})`)))return null;try{return!!t&&t.matches(e)}catch{return null}}function Wy(t,e){if(!vt||t===0)return e(),()=>{};const n=window.setTimeout(e,t);return()=>window.clearTimeout(n)}function id(t,e){const n=Je();return Nn(()=>{n.value=t()},{flush:"sync",...e}),hs(n)}function Uc(){const t=Je(),e=n=>{t.value=n};return Object.defineProperty(e,"value",{enumerable:!0,get:()=>t.value,set:n=>t.value=n}),Object.defineProperty(e,"el",{enumerable:!0,get:()=>Wm(t.value)}),e}const Ym=["top","bottom"],Xy=["start","end","left","right"];function Oc(t,e){let[n,i]=t.split(" ");return i||(i=Ta(Ym,n)?"start":Ta(Xy,n)?"top":"center"),{side:rd(n,e),align:rd(i,e)}}function rd(t,e){return t==="start"?e?"right":"left":t==="end"?e?"left":"right":t}function Rl(t){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[t.side],align:t.align}}function Pl(t){return{side:t.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[t.align]}}function sd(t){return{side:t.align,align:t.side}}function od(t){return Ta(Ym,t.side)?"y":"x"}class gr{constructor(e){let{x:n,y:i,width:r,height:s}=e;this.x=n,this.y=i,this.width=r,this.height=s}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function ad(t,e){return{x:{before:Math.max(0,e.left-t.left),after:Math.max(0,t.right-e.right)},y:{before:Math.max(0,e.top-t.top),after:Math.max(0,t.bottom-e.bottom)}}}function $y(t){return Array.isArray(t)?new gr({x:t[0],y:t[1],width:0,height:0}):t.getBoundingClientRect()}function qy(t){const e=t.getBoundingClientRect(),n=getComputedStyle(t),i=n.transform;if(i){let r,s,o,a,l;if(i.startsWith("matrix3d("))r=i.slice(9,-1).split(/, /),s=+r[0],o=+r[5],a=+r[12],l=+r[13];else if(i.startsWith("matrix("))r=i.slice(7,-1).split(/, /),s=+r[0],o=+r[3],a=+r[4],l=+r[5];else return new gr(e);const c=n.transformOrigin,u=e.x-a-(1-s)*parseFloat(c),f=e.y-l-(1-o)*parseFloat(c.slice(c.indexOf(" ")+1)),d=s?e.width/s:t.offsetWidth+1,h=o?e.height/o:t.offsetHeight+1;return new gr({x:u,y:f,width:d,height:h})}else return new gr(e)}function Yy(t,e,n){if(typeof t.animate>"u")return{finished:Promise.resolve()};let i;try{i=t.animate(e,n)}catch{return{finished:Promise.resolve()}}return typeof i.finished>"u"&&(i.finished=new Promise(r=>{i.onfinish=()=>{r(i)}})),i}const da=new WeakMap;function jy(t,e){Object.keys(e).forEach(n=>{if(Xm(n)){const i=qm(n),r=da.get(t);if(e[n]==null)r==null||r.forEach(s=>{const[o,a]=s;o===i&&(t.removeEventListener(i,a),r.delete(s))});else if(!r||![...r].some(s=>s[0]===i&&s[1]===e[n])){t.addEventListener(i,e[n]);const s=r||new Set;s.add([i,e[n]]),da.has(t)||da.set(t,s)}}else e[n]==null?t.removeAttribute(n):t.setAttribute(n,e[n])})}function Ky(t,e){Object.keys(e).forEach(n=>{if(Xm(n)){const i=qm(n),r=da.get(t);r==null||r.forEach(s=>{const[o,a]=s;o===i&&(t.removeEventListener(i,a),r.delete(s))})}else t.removeAttribute(n)})}const Tr=2.4,ld=.2126729,cd=.7151522,ud=.072175,Zy=.55,Jy=.58,Qy=.57,ex=.62,No=.03,fd=1.45,tx=5e-4,nx=1.25,ix=1.25,dd=.078,hd=12.82051282051282,Uo=.06,pd=.001;function md(t,e){const n=(t.r/255)**Tr,i=(t.g/255)**Tr,r=(t.b/255)**Tr,s=(e.r/255)**Tr,o=(e.g/255)**Tr,a=(e.b/255)**Tr;let l=n*ld+i*cd+r*ud,c=s*ld+o*cd+a*ud;if(l<=No&&(l+=(No-l)**fd),c<=No&&(c+=(No-c)**fd),Math.abs(c-l)<tx)return 0;let u;if(c>l){const f=(c**Zy-l**Jy)*nx;u=f<pd?0:f<dd?f-f*hd*Uo:f-Uo}else{const f=(c**ex-l**Qy)*ix;u=f>-pd?0:f>-dd?f-f*hd*Uo:f+Uo}return u*100}const Aa=.20689655172413793,rx=t=>t>Aa**3?Math.cbrt(t):t/(3*Aa**2)+4/29,sx=t=>t>Aa?t**3:3*Aa**2*(t-4/29);function jm(t){const e=rx,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function Km(t){const e=sx,n=(t[0]+16)/116;return[e(n+t[1]/500)*.95047,e(n),e(n-t[2]/200)*1.08883]}const ox=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],ax=t=>t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055,lx=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],cx=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function Zm(t){const e=Array(3),n=ax,i=ox;for(let r=0;r<3;++r)e[r]=Math.round(is(n(i[r][0]*t[0]+i[r][1]*t[1]+i[r][2]*t[2]))*255);return{r:e[0],g:e[1],b:e[2]}}function Vu(t){let{r:e,g:n,b:i}=t;const r=[0,0,0],s=cx,o=lx;e=s(e/255),n=s(n/255),i=s(i/255);for(let a=0;a<3;++a)r[a]=o[a][0]*e+o[a][1]*n+o[a][2]*i;return r}function Fc(t){return!!t&&/^(#|var\(--|(rgb|hsl)a?\()/.test(t)}function ux(t){return Fc(t)&&!/^((rgb|hsl)a?\()?var\(--/.test(t)}const gd=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,fx={rgb:(t,e,n,i)=>({r:t,g:e,b:n,a:i}),rgba:(t,e,n,i)=>({r:t,g:e,b:n,a:i}),hsl:(t,e,n,i)=>vd({h:t,s:e,l:n,a:i}),hsla:(t,e,n,i)=>vd({h:t,s:e,l:n,a:i}),hsv:(t,e,n,i)=>js({h:t,s:e,v:n,a:i}),hsva:(t,e,n,i)=>js({h:t,s:e,v:n,a:i})};function Hn(t){if(typeof t=="number")return{r:(t&16711680)>>16,g:(t&65280)>>8,b:t&255};if(typeof t=="string"&&gd.test(t)){const{groups:e}=t.match(gd),{fn:n,values:i}=e,r=i.split(/,\s*/).map(s=>s.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(s)/100:parseFloat(s));return fx[n](...r)}else if(typeof t=="string"){let e=t.startsWith("#")?t.slice(1):t;return[3,4].includes(e.length)?e=e.split("").map(n=>n+n).join(""):[6,8].includes(e.length),hx(e)}else if(typeof t=="object"){if(Cl(t,["r","g","b"]))return t;if(Cl(t,["h","s","l"]))return js(Jm(t));if(Cl(t,["h","s","v"]))return js(t)}throw new TypeError(`Invalid color: ${t==null?t:String(t)||t.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function js(t){const{h:e,s:n,v:i,a:r}=t,s=a=>{const l=(a+e/60)%6;return i-i*n*Math.max(Math.min(l,4-l,1),0)},o=[s(5),s(3),s(1)].map(a=>Math.round(a*255));return{r:o[0],g:o[1],b:o[2],a:r}}function vd(t){return js(Jm(t))}function Jm(t){const{h:e,s:n,l:i,a:r}=t,s=i+n*Math.min(i,1-i),o=s===0?0:2-2*i/s;return{h:e,s:o,v:s,a:r}}function Oo(t){const e=Math.round(t).toString(16);return("00".substr(0,2-e.length)+e).toUpperCase()}function dx(t){let{r:e,g:n,b:i,a:r}=t;return`#${[Oo(e),Oo(n),Oo(i),r!==void 0?Oo(Math.round(r*255)):""].join("")}`}function hx(t){t=px(t);let[e,n,i,r]=Hy(t,2).map(s=>parseInt(s,16));return r=r===void 0?r:r/255,{r:e,g:n,b:i,a:r}}function px(t){return t.startsWith("#")&&(t=t.slice(1)),t=t.replace(/([^0-9a-f])/gi,"F"),(t.length===3||t.length===4)&&(t=t.split("").map(e=>e+e).join("")),t.length!==6&&(t=ed(ed(t,6),8,"F")),t}function mx(t,e){const n=jm(Vu(t));return n[0]=n[0]+e*10,Zm(Km(n))}function gx(t,e){const n=jm(Vu(t));return n[0]=n[0]-e*10,Zm(Km(n))}function vx(t){const e=Hn(t);return Vu(e)[1]}function Qm(t){const e=Math.abs(md(Hn(0),Hn(t)));return Math.abs(md(Hn(16777215),Hn(t)))>Math.min(e,50)?"#fff":"#000"}function Le(t,e){return n=>Object.keys(t).reduce((i,r)=>{const o=typeof t[r]=="object"&&t[r]!=null&&!Array.isArray(t[r])?t[r]:{type:t[r]};return n&&r in n?i[r]={...o,default:n[r]}:i[r]=o,e&&!i[r].source&&(i[r].source=e),i},{})}const ht=Le({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component"),rs=Symbol.for("vuetify:defaults");function _x(t){return nt(t)}function zu(){const t=_t(rs);if(!t)throw new Error("[Vuetify] Could not find defaults instance");return t}function Ya(t,e){const n=zu(),i=nt(t),r=ne(()=>{if(Xt(e==null?void 0:e.disabled))return n.value;const o=Xt(e==null?void 0:e.scoped),a=Xt(e==null?void 0:e.reset),l=Xt(e==null?void 0:e.root);if(i.value==null&&!(o||a||l))return n.value;let c=an(i.value,{prev:n.value});if(o)return c;if(a||l){const u=Number(a||1/0);for(let f=0;f<=u&&!(!c||!("prev"in c));f++)c=c.prev;return c&&typeof l=="string"&&l in c&&(c=an(an(c,{prev:c}),c[l])),c}return c.prev?an(c.prev,c):c});return Mn(rs,r),r}function yx(t,e){var n,i;return typeof((n=t.props)==null?void 0:n[e])<"u"||typeof((i=t.props)==null?void 0:i[mr(e)])<"u"}function xx(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:zu();const i=It("useDefaults");if(e=e??i.type.name??i.type.__name,!e)throw new Error("[Vuetify] Could not determine component name");const r=ne(()=>{var l;return(l=n.value)==null?void 0:l[t._as??e]}),s=new Proxy(t,{get(l,c){var f,d,h,v;const u=Reflect.get(l,c);return c==="class"||c==="style"?[(f=r.value)==null?void 0:f[c],u].filter(g=>g!=null):typeof c=="string"&&!yx(i.vnode,c)?((d=r.value)==null?void 0:d[c])??((v=(h=n.value)==null?void 0:h.global)==null?void 0:v[c])??u:u}}),o=Je();Nn(()=>{if(r.value){const l=Object.entries(r.value).filter(c=>{let[u]=c;return u.startsWith(u[0].toUpperCase())});o.value=l.length?Object.fromEntries(l):void 0}else o.value=void 0});function a(){const l=Ex(rs,i);Mn(rs,ne(()=>o.value?an((l==null?void 0:l.value)??{},o.value):l==null?void 0:l.value))}return{props:s,provideSubDefaults:a}}function co(t){if(t._setup=t._setup??t.setup,!t.name)return t;if(t._setup){t.props=Le(t.props??{},t.name)();const e=Object.keys(t.props).filter(n=>n!=="class"&&n!=="style");t.filterProps=function(i){return By(i,e)},t.props._as=String,t.setup=function(i,r){const s=zu();if(!s.value)return t._setup(i,r);const{props:o,provideSubDefaults:a}=xx(i,i._as??t.name,s),l=t._setup(o,r);return a(),l}}return t}function et(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(t?co:oo)(e)}function eg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return et()({name:n??li(bn(t.replace(/__/g,"-"))),props:{tag:{type:String,default:e},...ht()},setup(i,r){let{slots:s}=r;return()=>{var o;return Yn(i.tag,{class:[t,i.class],style:i.style},(o=s.default)==null?void 0:o.call(s))}}})}function tg(t){if(typeof t.getRootNode!="function"){for(;t.parentNode;)t=t.parentNode;return t!==document?null:document}const e=t.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}const Sx="cubic-bezier(0.4, 0, 0.2, 1)";function It(t,e){const n=Nu();if(!n)throw new Error(`[Vuetify] ${t} must be called from inside a setup function`);return n}function Xi(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const e=It(t).type;return mr((e==null?void 0:e.aliasName)||(e==null?void 0:e.name))}let ng=0,ha=new WeakMap;function ja(){const t=It("getUid");if(ha.has(t))return ha.get(t);{const e=ng++;return ha.set(t,e),e}}ja.reset=()=>{ng=0,ha=new WeakMap};function Mx(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;t;){if(e?bx(t):Hu(t))return t;t=t.parentElement}return document.scrollingElement}function wa(t,e){const n=[];if(e&&t&&!e.contains(t))return n;for(;t&&(Hu(t)&&n.push(t),t!==e);)t=t.parentElement;return n}function Hu(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;const e=window.getComputedStyle(t);return e.overflowY==="scroll"||e.overflowY==="auto"&&t.scrollHeight>t.clientHeight}function bx(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;const e=window.getComputedStyle(t);return["scroll","auto"].includes(e.overflowY)}function Ex(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:It("injectSelf");const{provides:n}=e;if(n&&t in n)return n[t]}function Tx(t){for(;t;){if(window.getComputedStyle(t).position==="fixed")return!0;t=t.offsetParent}return!1}function lt(t){const e=It("useRender");e.render=t}function ms(t,e,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:f=>f,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:f=>f;const s=It("useProxiedModel"),o=nt(t[e]!==void 0?t[e]:n),a=mr(e),c=ne(a!==e?()=>{var f,d,h,v;return t[e],!!(((f=s.vnode.props)!=null&&f.hasOwnProperty(e)||(d=s.vnode.props)!=null&&d.hasOwnProperty(a))&&((h=s.vnode.props)!=null&&h.hasOwnProperty(`onUpdate:${e}`)||(v=s.vnode.props)!=null&&v.hasOwnProperty(`onUpdate:${a}`)))}:()=>{var f,d;return t[e],!!((f=s.vnode.props)!=null&&f.hasOwnProperty(e)&&((d=s.vnode.props)!=null&&d.hasOwnProperty(`onUpdate:${e}`)))});ps(()=>!c.value,()=>{Ye(()=>t[e],f=>{o.value=f})});const u=ne({get(){const f=t[e];return i(c.value?f:o.value)},set(f){const d=r(f),h=je(c.value?t[e]:o.value);h===d||i(h)===f||(o.value=d,s==null||s.emit(`update:${e}`,d))}});return Object.defineProperty(u,"externalValue",{get:()=>c.value?t[e]:o.value}),u}const Ax={badge:"Badge",open:"Open",close:"Close",dismiss:"Dismiss",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM",title:"Select Time"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},_d="$vuetify.",yd=(t,e)=>t.replace(/\{(\d+)\}/g,(n,i)=>String(e[+i])),ig=(t,e,n)=>function(i){for(var r=arguments.length,s=new Array(r>1?r-1:0),o=1;o<r;o++)s[o-1]=arguments[o];if(!i.startsWith(_d))return yd(i,s);const a=i.replace(_d,""),l=t.value&&n.value[t.value],c=e.value&&n.value[e.value];let u=Jf(l,a,null);return u||(`${i}${t.value}`,u=Jf(c,a,null)),u||(u=i),typeof u!="string"&&(u=i),yd(u,s)};function rg(t,e){return(n,i)=>new Intl.NumberFormat([t.value,e.value],i).format(n)}function Ll(t,e,n){const i=ms(t,e,t[e]??n.value);return i.value=t[e]??n.value,Ye(n,r=>{t[e]==null&&(i.value=n.value)}),i}function sg(t){return e=>{const n=Ll(e,"locale",t.current),i=Ll(e,"fallback",t.fallback),r=Ll(e,"messages",t.messages);return{name:"vuetify",current:n,fallback:i,messages:r,t:ig(n,i,r),n:rg(n,i),provide:sg({current:n,fallback:i,messages:r})}}}function wx(t){const e=Je((t==null?void 0:t.locale)??"en"),n=Je((t==null?void 0:t.fallback)??"en"),i=nt({en:Ax,...t==null?void 0:t.messages});return{name:"vuetify",current:e,fallback:n,messages:i,t:ig(e,n,i),n:rg(e,n),provide:sg({current:e,fallback:n,messages:i})}}const Bc=Symbol.for("vuetify:locale");function Cx(t){return t.name!=null}function Rx(t){const e=t!=null&&t.adapter&&Cx(t==null?void 0:t.adapter)?t==null?void 0:t.adapter:wx(t),n=Lx(e,t);return{...e,...n}}function Px(){return{af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,km:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1}}function Lx(t,e){const n=nt((e==null?void 0:e.rtl)??Px()),i=ne(()=>n.value[t.current.value]??!1);return{isRtl:i,rtl:n,rtlClasses:ne(()=>`v-locale--is-${i.value?"rtl":"ltr"}`)}}function gs(){const t=_t(Bc);if(!t)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:t.isRtl,rtlClasses:t.rtlClasses}}const Ks={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function Ix(t,e){const n=[];let i=[];const r=og(t),s=ag(t),o=(r.getDay()-Ks[e.slice(-2).toUpperCase()]+7)%7,a=(s.getDay()-Ks[e.slice(-2).toUpperCase()]+7)%7;for(let l=0;l<o;l++){const c=new Date(r);c.setDate(c.getDate()-(o-l)),i.push(c)}for(let l=1;l<=s.getDate();l++){const c=new Date(t.getFullYear(),t.getMonth(),l);i.push(c),i.length===7&&(n.push(i),i=[])}for(let l=1;l<7-a;l++){const c=new Date(s);c.setDate(c.getDate()+l),i.push(c)}return i.length>0&&n.push(i),n}function Dx(t,e){const n=new Date(t);for(;n.getDay()!==(Ks[e.slice(-2).toUpperCase()]??0);)n.setDate(n.getDate()-1);return n}function Nx(t,e){const n=new Date(t),i=((Ks[e.slice(-2).toUpperCase()]??0)+6)%7;for(;n.getDay()!==i;)n.setDate(n.getDate()+1);return n}function og(t){return new Date(t.getFullYear(),t.getMonth(),1)}function ag(t){return new Date(t.getFullYear(),t.getMonth()+1,0)}function Ux(t){const e=t.split("-").map(Number);return new Date(e[0],e[1]-1,e[2])}const Ox=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;function lg(t){if(t==null)return new Date;if(t instanceof Date)return t;if(typeof t=="string"){let e;if(Ox.test(t))return Ux(t);if(e=Date.parse(t),!isNaN(e))return new Date(e)}return null}const xd=new Date(2e3,0,2);function Fx(t){const e=Ks[t.slice(-2).toUpperCase()];return Gm(7).map(n=>{const i=new Date(xd);return i.setDate(xd.getDate()+e+n),new Intl.DateTimeFormat(t,{weekday:"narrow"}).format(i)})}function Bx(t,e,n,i){const r=lg(t)??new Date,s=i==null?void 0:i[e];if(typeof s=="function")return s(r,e,n);let o={};switch(e){case"fullDate":o={year:"numeric",month:"long",day:"numeric"};break;case"fullDateWithWeekday":o={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;case"normalDate":const a=r.getDate(),l=new Intl.DateTimeFormat(n,{month:"long"}).format(r);return`${a} ${l}`;case"normalDateWithWeekday":o={weekday:"short",day:"numeric",month:"short"};break;case"shortDate":o={month:"short",day:"numeric"};break;case"year":o={year:"numeric"};break;case"month":o={month:"long"};break;case"monthShort":o={month:"short"};break;case"monthAndYear":o={month:"long",year:"numeric"};break;case"monthAndDate":o={month:"long",day:"numeric"};break;case"weekday":o={weekday:"long"};break;case"weekdayShort":o={weekday:"short"};break;case"dayOfMonth":return new Intl.NumberFormat(n).format(r.getDate());case"hours12h":o={hour:"numeric",hour12:!0};break;case"hours24h":o={hour:"numeric",hour12:!1};break;case"minutes":o={minute:"numeric"};break;case"seconds":o={second:"numeric"};break;case"fullTime":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime12h":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime24h":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"fullDateTime":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime12h":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime24h":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDate":o={year:"numeric",month:"2-digit",day:"2-digit"};break;case"keyboardDateTime":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDateTime12h":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"keyboardDateTime24h":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;default:o=s??{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(n,o).format(r)}function kx(t,e){const n=t.toJsDate(e),i=n.getFullYear(),r=td(String(n.getMonth()+1),2,"0"),s=td(String(n.getDate()),2,"0");return`${i}-${r}-${s}`}function Vx(t){const[e,n,i]=t.split("-").map(Number);return new Date(e,n-1,i)}function zx(t,e){const n=new Date(t);return n.setMinutes(n.getMinutes()+e),n}function Hx(t,e){const n=new Date(t);return n.setHours(n.getHours()+e),n}function Gx(t,e){const n=new Date(t);return n.setDate(n.getDate()+e),n}function Wx(t,e){const n=new Date(t);return n.setDate(n.getDate()+e*7),n}function Xx(t,e){const n=new Date(t);return n.setDate(1),n.setMonth(n.getMonth()+e),n}function $x(t){return t.getFullYear()}function qx(t){return t.getMonth()}function Yx(t){return t.getDate()}function jx(t){return new Date(t.getFullYear(),t.getMonth()+1,1)}function Kx(t){return new Date(t.getFullYear(),t.getMonth()-1,1)}function Zx(t){return t.getHours()}function Jx(t){return t.getMinutes()}function Qx(t){return new Date(t.getFullYear(),0,1)}function eS(t){return new Date(t.getFullYear(),11,31)}function tS(t,e){return Ca(t,e[0])&&rS(t,e[1])}function nS(t){const e=new Date(t);return e instanceof Date&&!isNaN(e.getTime())}function Ca(t,e){return t.getTime()>e.getTime()}function iS(t,e){return Ca(kc(t),kc(e))}function rS(t,e){return t.getTime()<e.getTime()}function Sd(t,e){return t.getTime()===e.getTime()}function sS(t,e){return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function oS(t,e){return t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function aS(t,e){return t.getFullYear()===e.getFullYear()}function lS(t,e,n){const i=new Date(t),r=new Date(e);switch(n){case"years":return i.getFullYear()-r.getFullYear();case"quarters":return Math.floor((i.getMonth()-r.getMonth()+(i.getFullYear()-r.getFullYear())*12)/4);case"months":return i.getMonth()-r.getMonth()+(i.getFullYear()-r.getFullYear())*12;case"weeks":return Math.floor((i.getTime()-r.getTime())/(1e3*60*60*24*7));case"days":return Math.floor((i.getTime()-r.getTime())/(1e3*60*60*24));case"hours":return Math.floor((i.getTime()-r.getTime())/(1e3*60*60));case"minutes":return Math.floor((i.getTime()-r.getTime())/(1e3*60));case"seconds":return Math.floor((i.getTime()-r.getTime())/1e3);default:return i.getTime()-r.getTime()}}function cS(t,e){const n=new Date(t);return n.setHours(e),n}function uS(t,e){const n=new Date(t);return n.setMinutes(e),n}function fS(t,e){const n=new Date(t);return n.setMonth(e),n}function dS(t,e){const n=new Date(t);return n.setDate(e),n}function hS(t,e){const n=new Date(t);return n.setFullYear(e),n}function kc(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),0,0,0,0)}function pS(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),23,59,59,999)}class mS{constructor(e){this.locale=e.locale,this.formats=e.formats}date(e){return lg(e)}toJsDate(e){return e}toISO(e){return kx(this,e)}parseISO(e){return Vx(e)}addMinutes(e,n){return zx(e,n)}addHours(e,n){return Hx(e,n)}addDays(e,n){return Gx(e,n)}addWeeks(e,n){return Wx(e,n)}addMonths(e,n){return Xx(e,n)}getWeekArray(e){return Ix(e,this.locale)}startOfWeek(e){return Dx(e,this.locale)}endOfWeek(e){return Nx(e,this.locale)}startOfMonth(e){return og(e)}endOfMonth(e){return ag(e)}format(e,n){return Bx(e,n,this.locale,this.formats)}isEqual(e,n){return Sd(e,n)}isValid(e){return nS(e)}isWithinRange(e,n){return tS(e,n)}isAfter(e,n){return Ca(e,n)}isAfterDay(e,n){return iS(e,n)}isBefore(e,n){return!Ca(e,n)&&!Sd(e,n)}isSameDay(e,n){return sS(e,n)}isSameMonth(e,n){return oS(e,n)}isSameYear(e,n){return aS(e,n)}setMinutes(e,n){return uS(e,n)}setHours(e,n){return cS(e,n)}setMonth(e,n){return fS(e,n)}setDate(e,n){return dS(e,n)}setYear(e,n){return hS(e,n)}getDiff(e,n,i){return lS(e,n,i)}getWeekdays(){return Fx(this.locale)}getYear(e){return $x(e)}getMonth(e){return qx(e)}getDate(e){return Yx(e)}getNextMonth(e){return jx(e)}getPreviousMonth(e){return Kx(e)}getHours(e){return Zx(e)}getMinutes(e){return Jx(e)}startOfDay(e){return kc(e)}endOfDay(e){return pS(e)}startOfYear(e){return Qx(e)}endOfYear(e){return eS(e)}}const gS=Symbol.for("vuetify:date-options"),Md=Symbol.for("vuetify:date-adapter");function vS(t,e){const n=an({adapter:mS,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},t);return{options:n,instance:_S(n,e)}}function _S(t,e){const n=Bt(typeof t.adapter=="function"?new t.adapter({locale:t.locale[e.current.value]??e.current.value,formats:t.formats}):t.adapter);return Ye(e.current,i=>{n.locale=t.locale[i]??i??n.locale}),n}const Ka=["sm","md","lg","xl","xxl"],Vc=Symbol.for("vuetify:display"),bd={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},yS=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:bd;return an(bd,t)};function Ed(t){return vt&&!t?window.innerWidth:typeof t=="object"&&t.clientWidth||0}function Td(t){return vt&&!t?window.innerHeight:typeof t=="object"&&t.clientHeight||0}function Ad(t){const e=vt&&!t?window.navigator.userAgent:"ssr";function n(v){return!!e.match(v)}const i=n(/android/i),r=n(/iphone|ipad|ipod/i),s=n(/cordova/i),o=n(/electron/i),a=n(/chrome/i),l=n(/edge/i),c=n(/firefox/i),u=n(/opera/i),f=n(/win/i),d=n(/mac/i),h=n(/linux/i);return{android:i,ios:r,cordova:s,electron:o,chrome:a,edge:l,firefox:c,opera:u,win:f,mac:d,linux:h,touch:Oy,ssr:e==="ssr"}}function xS(t,e){const{thresholds:n,mobileBreakpoint:i}=yS(t),r=Je(Td(e)),s=Je(Ad(e)),o=Bt({}),a=Je(Ed(e));function l(){r.value=Td(),a.value=Ed()}function c(){l(),s.value=Ad()}return Nn(()=>{const u=a.value<n.sm,f=a.value<n.md&&!u,d=a.value<n.lg&&!(f||u),h=a.value<n.xl&&!(d||f||u),v=a.value<n.xxl&&!(h||d||f||u),g=a.value>=n.xxl,m=u?"xs":f?"sm":d?"md":h?"lg":v?"xl":"xxl",p=typeof i=="number"?i:n[i],M=a.value<p;o.xs=u,o.sm=f,o.md=d,o.lg=h,o.xl=v,o.xxl=g,o.smAndUp=!u,o.mdAndUp=!(u||f),o.lgAndUp=!(u||f||d),o.xlAndUp=!(u||f||d||h),o.smAndDown=!(d||h||v||g),o.mdAndDown=!(h||v||g),o.lgAndDown=!(v||g),o.xlAndDown=!g,o.name=m,o.height=r.value,o.width=a.value,o.mobile=M,o.mobileBreakpoint=i,o.platform=s.value,o.thresholds=n}),vt&&window.addEventListener("resize",l,{passive:!0}),{...yu(o),update:c,ssr:!!e}}function SS(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Xi();const n=_t(Vc);if(!n)throw new Error("Could not find Vuetify display injection");const i=ne(()=>{if(t.mobile!=null)return t.mobile;if(!t.mobileBreakpoint)return n.mobile.value;const s=typeof t.mobileBreakpoint=="number"?t.mobileBreakpoint:n.thresholds.value[t.mobileBreakpoint];return n.width.value<s}),r=ne(()=>e?{[`${e}--mobile`]:i.value}:{});return{...n,displayClasses:r,mobile:i}}const MS=Symbol.for("vuetify:goto");function bS(){return{container:void 0,duration:300,layout:!1,offset:0,easing:"easeInOutCubic",patterns:{linear:t=>t,easeInQuad:t=>t**2,easeOutQuad:t=>t*(2-t),easeInOutQuad:t=>t<.5?2*t**2:-1+(4-2*t)*t,easeInCubic:t=>t**3,easeOutCubic:t=>--t**3+1,easeInOutCubic:t=>t<.5?4*t**3:(t-1)*(2*t-2)*(2*t-2)+1,easeInQuart:t=>t**4,easeOutQuart:t=>1- --t**4,easeInOutQuart:t=>t<.5?8*t**4:1-8*--t**4,easeInQuint:t=>t**5,easeOutQuint:t=>1+--t**5,easeInOutQuint:t=>t<.5?16*t**5:1+16*--t**5}}}function ES(t,e){return{rtl:e.isRtl,options:an(bS(),t)}}const TS={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",treeviewCollapse:"mdi-menu-down",treeviewExpand:"mdi-menu-right",eyeDropper:"mdi-eyedropper"},AS={component:t=>Yn(ug,{...t,class:"mdi"})},ai=[String,Function,Object,Array],zc=Symbol.for("vuetify:icons"),Za=Le({icon:{type:ai},tag:{type:String,required:!0}},"icon"),wd=et()({name:"VComponentIcon",props:Za(),setup(t,e){let{slots:n}=e;return()=>{const i=t.icon;return z(t.tag,null,{default:()=>{var r;return[t.icon?z(i,null,null):(r=n.default)==null?void 0:r.call(n)]}})}}}),cg=co({name:"VSvgIcon",inheritAttrs:!1,props:Za(),setup(t,e){let{attrs:n}=e;return()=>z(t.tag,Vt(n,{style:null}),{default:()=>[z("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(t.icon)?t.icon.map(i=>Array.isArray(i)?z("path",{d:i[0],"fill-opacity":i[1]},null):z("path",{d:i},null)):z("path",{d:t.icon},null)])]})}});co({name:"VLigatureIcon",props:Za(),setup(t){return()=>z(t.tag,null,{default:()=>[t.icon]})}});const ug=co({name:"VClassIcon",props:Za(),setup(t){return()=>z(t.tag,{class:t.icon},null)}});function wS(){return{svg:{component:cg},class:{component:ug}}}function CS(t){const e=wS(),n=(t==null?void 0:t.defaultSet)??"mdi";return n==="mdi"&&!e.mdi&&(e.mdi=AS),an({defaultSet:n,sets:e,aliases:{...TS,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z","vuetify-play":["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z",["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z",.6]]}},t)}const RS=t=>{const e=_t(zc);if(!e)throw new Error("Missing Vuetify Icons provide!");return{iconData:ne(()=>{var l;const i=Xt(t);if(!i)return{component:wd};let r=i;if(typeof r=="string"&&(r=r.trim(),r.startsWith("$")&&(r=(l=e.aliases)==null?void 0:l[r.slice(1)])),Array.isArray(r))return{component:cg,icon:r};if(typeof r!="string")return{component:wd,icon:r};const s=Object.keys(e.sets).find(c=>typeof r=="string"&&r.startsWith(`${c}:`)),o=s?r.slice(s.length+1):r;return{component:e.sets[s??e.defaultSet].component,icon:o}})}},Ra=Symbol.for("vuetify:theme"),un=Le({theme:String},"theme");function Cd(){return{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-light":"#424242","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}}function PS(){var i,r;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Cd();const e=Cd();if(!t)return{...e,isDisabled:!0};const n={};for(const[s,o]of Object.entries(t.themes??{})){const a=o.dark||s==="dark"?(i=e.themes)==null?void 0:i.dark:(r=e.themes)==null?void 0:r.light;n[s]=an(a,o)}return an(e,{...t,themes:n})}function LS(t){const e=PS(t),n=nt(e.defaultTheme),i=nt(e.themes),r=ne(()=>{const u={};for(const[f,d]of Object.entries(i.value)){const h=u[f]={...d,colors:{...d.colors}};if(e.variations)for(const v of e.variations.colors){const g=h.colors[v];if(g)for(const m of["lighten","darken"]){const p=m==="lighten"?mx:gx;for(const M of Gm(e.variations[m],1))h.colors[`${v}-${m}-${M}`]=dx(p(Hn(g),M))}}for(const v of Object.keys(h.colors)){if(/^on-[a-z]/.test(v)||h.colors[`on-${v}`])continue;const g=`on-${v}`,m=Hn(h.colors[v]);h.colors[g]=Qm(m)}}return u}),s=ne(()=>r.value[n.value]),o=ne(()=>{var v;const u=[];(v=s.value)!=null&&v.dark&&Zi(u,":root",["color-scheme: dark"]),Zi(u,":root",Rd(s.value));for(const[g,m]of Object.entries(r.value))Zi(u,`.v-theme--${g}`,[`color-scheme: ${m.dark?"dark":"normal"}`,...Rd(m)]);const f=[],d=[],h=new Set(Object.values(r.value).flatMap(g=>Object.keys(g.colors)));for(const g of h)/^on-[a-z]/.test(g)?Zi(d,`.${g}`,[`color: rgb(var(--v-theme-${g})) !important`]):(Zi(f,`.bg-${g}`,[`--v-theme-overlay-multiplier: var(--v-theme-${g}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${g})) !important`,`color: rgb(var(--v-theme-on-${g})) !important`]),Zi(d,`.text-${g}`,[`color: rgb(var(--v-theme-${g})) !important`]),Zi(d,`.border-${g}`,[`--v-border-color: var(--v-theme-${g})`]));return u.push(...f,...d),u.map((g,m)=>m===0?g:`    ${g}`).join("")});function a(){return{style:[{children:o.value,id:"vuetify-theme-stylesheet",nonce:e.cspNonce||!1}]}}function l(u){if(e.isDisabled)return;const f=u._context.provides.usehead;if(f)if(f.push){const h=f.push(a);vt&&Ye(o,()=>{h.patch(a)})}else vt?(f.addHeadObjs(ne(a)),Nn(()=>f.updateDOM())):f.addHeadObjs(a());else{let v=function(){if(typeof document<"u"&&!h){const g=document.createElement("style");g.type="text/css",g.id="vuetify-theme-stylesheet",e.cspNonce&&g.setAttribute("nonce",e.cspNonce),h=g,document.head.appendChild(h)}h&&(h.innerHTML=o.value)};var d=v;let h=vt?document.getElementById("vuetify-theme-stylesheet"):null;vt?Ye(o,v,{immediate:!0}):v()}}const c=ne(()=>e.isDisabled?void 0:`v-theme--${n.value}`);return{install:l,isDisabled:e.isDisabled,name:n,themes:i,current:s,computedThemes:r,themeClasses:c,styles:o,global:{name:n,current:s}}}function fn(t){It("provideTheme");const e=_t(Ra,null);if(!e)throw new Error("Could not find Vuetify theme injection");const n=ne(()=>t.theme??e.name.value),i=ne(()=>e.themes.value[n.value]),r=ne(()=>e.isDisabled?void 0:`v-theme--${n.value}`),s={...e,name:n,current:i,themeClasses:r};return Mn(Ra,s),s}function Zi(t,e,n){t.push(`${e} {
`,...n.map(i=>`  ${i};
`),`}
`)}function Rd(t){const e=t.dark?2:1,n=t.dark?1:2,i=[];for(const[r,s]of Object.entries(t.colors)){const o=Hn(s);i.push(`--v-theme-${r}: ${o.r},${o.g},${o.b}`),r.startsWith("on-")||i.push(`--v-theme-${r}-overlay-multiplier: ${vx(s)>.18?e:n}`)}for(const[r,s]of Object.entries(t.variables)){const o=typeof s=="string"&&s.startsWith("#")?Hn(s):void 0,a=o?`${o.r}, ${o.g}, ${o.b}`:void 0;i.push(`--v-${r}: ${a??s}`)}return i}function fg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const n=Uc(),i=nt();if(vt){const r=new ResizeObserver(s=>{s.length&&(e==="content"?i.value=s[0].contentRect:i.value=s[0].target.getBoundingClientRect())});qn(()=>{r.disconnect()}),Ye(()=>n.el,(s,o)=>{o&&(r.unobserve(o),i.value=void 0),s&&r.observe(s)},{flush:"post"})}return{resizeRef:n,contentRect:hs(i)}}const Zs=Symbol.for("vuetify:layout"),dg=Symbol.for("vuetify:layout-item"),Pd=1e3,hg=Le({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),IS=Le({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function pg(){const t=_t(Zs);if(!t)throw new Error("[Vuetify] Could not find injected layout");return{layoutIsReady:cn(),getLayoutItem:t.getLayoutItem,mainRect:t.mainRect,mainStyles:t.mainStyles}}function DS(t){const e=_t(Zs);if(!e)throw new Error("[Vuetify] Could not find injected layout");const n=t.id??`layout-item-${ja()}`,i=It("useLayoutItem");Mn(dg,{id:n});const r=Je(!1);hm(()=>r.value=!0),dm(()=>r.value=!1);const s=cn(),{layoutItemStyles:o,layoutItemScrimStyles:a}=e.register(i,{...t,active:ne(()=>r.value?!1:t.active.value),id:n});return qn(()=>e.unregister(n)),{layoutItemStyles:o,layoutRect:e.layoutRect,layoutItemScrimStyles:a,layoutIsReady:s}}const NS=(t,e,n,i)=>{let r={top:0,left:0,right:0,bottom:0};const s=[{id:"",layer:{...r}}];for(const o of t){const a=e.get(o),l=n.get(o),c=i.get(o);if(!a||!l||!c)continue;const u={...r,[a.value]:parseInt(r[a.value],10)+(c.value?parseInt(l.value,10):0)};s.push({id:o,layer:u}),r=u}return s};function mg(t){const e=_t(Zs,null),n=ne(()=>e?e.rootZIndex.value-100:Pd),i=nt([]),r=Bt(new Map),s=Bt(new Map),o=Bt(new Map),a=Bt(new Map),l=Bt(new Map),{resizeRef:c,contentRect:u}=fg(),f=id(()=>{const L=[...new Set([...o.values()].map(b=>b.value))].sort((b,D)=>b-D),E=[];for(const b of L){const D=i.value.filter(S=>{var _;return((_=o.get(S))==null?void 0:_.value)===b});E.push(...D)}return NS(E,r,s,a)}),d=ne(()=>!Array.from(l.values()).some(L=>L.value)),h=ne(()=>f.value[f.value.length-1].layer),v=ne(()=>({"--v-layout-left":Ve(h.value.left),"--v-layout-right":Ve(h.value.right),"--v-layout-top":Ve(h.value.top),"--v-layout-bottom":Ve(h.value.bottom),...d.value?void 0:{transition:"none"}})),g=id(()=>f.value.slice(1).map((L,E)=>{let{id:b}=L;const{layer:D}=f.value[E],S=s.get(b),_=r.get(b);return{id:b,...D,size:Number(S.value),position:_.value}})),m=L=>g.value.find(E=>E.id===L),p=It("createLayout"),M=cn();Mn(Zs,{register:(L,E)=>{let{id:b,order:D,position:S,layoutSize:_,elementSize:N,active:I,disableTransitions:R,absolute:k}=E;o.set(b,D),r.set(b,S),s.set(b,_),a.set(b,I),R&&l.set(b,R);const ee=ks(dg,p==null?void 0:p.vnode).indexOf(L);ee>-1?i.value.splice(ee,0,b):i.value.push(b);const ie=ne(()=>g.value.findIndex(ve=>ve.id===b)),G=ne(()=>n.value+f.value.length*2-ie.value*2),fe=ne(()=>{const ve=S.value==="left"||S.value==="right",Ae=S.value==="right",$e=S.value==="bottom",te=N.value??_.value,oe=te===0?"%":"px",ge={[S.value]:0,zIndex:G.value,transform:`translate${ve?"X":"Y"}(${(I.value?0:-(te===0?100:te))*(Ae||$e?-1:1)}${oe})`,position:k.value||n.value!==Pd?"absolute":"fixed",...d.value?void 0:{transition:"none"}};if(ie.value<0)throw new Error(`Layout item "${b}" is missing`);const B=g.value[ie.value];if(!B)throw new Error(`[Vuetify] Could not find layout item "${b}"`);return{...ge,height:ve?`calc(100% - ${B.top}px - ${B.bottom}px)`:N.value?`${N.value}px`:void 0,left:Ae?void 0:`${B.left}px`,right:Ae?`${B.right}px`:void 0,top:S.value!=="bottom"?`${B.top}px`:void 0,bottom:S.value!=="top"?`${B.bottom}px`:void 0,width:ve?N.value?`${N.value}px`:void 0:`calc(100% - ${B.left}px - ${B.right}px)`}}),me=ne(()=>({zIndex:G.value-1}));return{layoutItemStyles:fe,layoutItemScrimStyles:me,zIndex:G}},unregister:L=>{o.delete(L),r.delete(L),s.delete(L),a.delete(L),l.delete(L),i.value=i.value.filter(E=>E!==L)},mainRect:h,mainStyles:v,getLayoutItem:m,items:g,layoutRect:u,rootZIndex:n,layoutIsReady:M});const x=ne(()=>["v-layout",{"v-layout--full-height":t.fullHeight}]),T=ne(()=>({zIndex:e?n.value:void 0,position:e?"relative":void 0,overflow:e?"hidden":void 0}));return{layoutClasses:x,layoutStyles:T,getLayoutItem:m,items:g,layoutRect:u,layoutIsReady:M,layoutRef:c}}function gg(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:e,...n}=t,i=an(e,n),{aliases:r={},components:s={},directives:o={}}=i,a=_x(i.defaults),l=xS(i.display,i.ssr),c=LS(i.theme),u=CS(i.icons),f=Rx(i.locale),d=vS(i.date,f),h=ES(i.goTo,f);return{install:g=>{for(const m in o)g.directive(m,o[m]);for(const m in s)g.component(m,s[m]);for(const m in r)g.component(m,co({...r[m],name:m,aliasName:r[m].name}));if(c.install(g),g.provide(rs,a),g.provide(Vc,l),g.provide(Ra,c),g.provide(zc,u),g.provide(Bc,f),g.provide(gS,d.options),g.provide(Md,d.instance),g.provide(MS,h),vt&&i.ssr)if(g.$nuxt)g.$nuxt.hook("app:suspense:resolve",()=>{l.update()});else{const{mount:m}=g;g.mount=function(){const p=m(...arguments);return cn(()=>l.update()),g.mount=m,p}}ja.reset(),g.mixin({computed:{$vuetify(){return Bt({defaults:Ar.call(this,rs),display:Ar.call(this,Vc),theme:Ar.call(this,Ra),icons:Ar.call(this,zc),locale:Ar.call(this,Bc),date:Ar.call(this,Md)})}}})},defaults:a,display:l,theme:c,icons:u,locale:f,date:d,goTo:h}}const US="3.6.6";gg.version=US;function Ar(t){var i,r;const e=this.$,n=((i=e.parent)==null?void 0:i.provides)??((r=e.vnode.appContext)==null?void 0:r.provides);if(n&&t in n)return n[t]}const OS=gg({theme:{defaultTheme:"dark"}});function FS(t){t.use(OS)}/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Wr=typeof document<"u";function BS(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const st=Object.assign;function Il(t,e){const n={};for(const i in e){const r=e[i];n[i]=Dn(r)?r.map(t):t(r)}return n}const Vs=()=>{},Dn=Array.isArray,vg=/#/g,kS=/&/g,VS=/\//g,zS=/=/g,HS=/\?/g,_g=/\+/g,GS=/%5B/g,WS=/%5D/g,yg=/%5E/g,XS=/%60/g,xg=/%7B/g,$S=/%7C/g,Sg=/%7D/g,qS=/%20/g;function Gu(t){return encodeURI(""+t).replace($S,"|").replace(GS,"[").replace(WS,"]")}function YS(t){return Gu(t).replace(xg,"{").replace(Sg,"}").replace(yg,"^")}function Hc(t){return Gu(t).replace(_g,"%2B").replace(qS,"+").replace(vg,"%23").replace(kS,"%26").replace(XS,"`").replace(xg,"{").replace(Sg,"}").replace(yg,"^")}function jS(t){return Hc(t).replace(zS,"%3D")}function KS(t){return Gu(t).replace(vg,"%23").replace(HS,"%3F")}function ZS(t){return t==null?"":KS(t).replace(VS,"%2F")}function Js(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const JS=/\/$/,QS=t=>t.replace(JS,"");function Dl(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=iM(i??e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:Js(o)}}function eM(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ld(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function tM(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&ss(e.matched[i],n.matched[r])&&Mg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ss(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Mg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!nM(t[n],e[n]))return!1;return!0}function nM(t,e){return Dn(t)?Id(t,e):Dn(e)?Id(e,t):t===e}function Id(t,e){return Dn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function iM(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o).join("/")}var Qs;(function(t){t.pop="pop",t.push="push"})(Qs||(Qs={}));var zs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(zs||(zs={}));function rM(t){if(!t)if(Wr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),QS(t)}const sM=/^[^#]+#/;function oM(t,e){return t.replace(sM,"#")+e}function aM(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Ja=()=>({left:window.scrollX,top:window.scrollY});function lM(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=aM(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Dd(t,e){return(history.state?history.state.position-e:-1)+t}const Gc=new Map;function cM(t,e){Gc.set(t,e)}function uM(t){const e=Gc.get(t);return Gc.delete(t),e}let fM=()=>location.protocol+"//"+location.host;function bg(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Ld(l,"")}return Ld(n,t)+i+r}function dM(t,e,n,i){let r=[],s=[],o=null;const a=({state:d})=>{const h=bg(t,location),v=n.value,g=e.value;let m=0;if(d){if(n.value=h,e.value=d,o&&o===v){o=null;return}m=g?d.position-g.position:0}else i(h);r.forEach(p=>{p(n.value,v,{delta:m,type:Qs.pop,direction:m?m>0?zs.forward:zs.back:zs.unknown})})};function l(){o=n.value}function c(d){r.push(d);const h=()=>{const v=r.indexOf(d);v>-1&&r.splice(v,1)};return s.push(h),h}function u(){const{history:d}=window;d.state&&d.replaceState(st({},d.state,{scroll:Ja()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Nd(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?Ja():null}}function hM(t){const{history:e,location:n}=window,i={value:bg(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:fM()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(h){console.error(h),n[u?"replace":"assign"](d)}}function o(l,c){const u=st({},e.state,Nd(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=st({},r.value,e.state,{forward:l,scroll:Ja()});s(u.current,u,!0);const f=st({},Nd(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function pM(t){t=rM(t);const e=hM(t),n=dM(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=st({location:"",base:t,go:i,createHref:oM.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function mM(t){return typeof t=="string"||t&&typeof t=="object"}function Eg(t){return typeof t=="string"||typeof t=="symbol"}const gi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Tg=Symbol("");var Ud;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ud||(Ud={}));function os(t,e){return st(new Error,{type:t,[Tg]:!0},e)}function Kn(t,e){return t instanceof Error&&Tg in t&&(e==null||!!(t.type&e))}const Od="[^/]+?",gM={sensitive:!1,strict:!1,start:!0,end:!0},vM=/[.+*?^${}()[\]/\\]/g;function _M(t,e){const n=st({},gM,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let h=40+(n.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(vM,"\\$&"),h+=40;else if(d.type===1){const{value:v,repeatable:g,optional:m,regexp:p}=d;s.push({name:v,repeatable:g,optional:m});const M=p||Od;if(M!==Od){h+=10;try{new RegExp(`(${M})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${v}" (${M}): `+T.message)}}let x=g?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(x=m&&c.length<2?`(?:/${x})`:"/"+x),m&&(x+="?"),r+=x,h+=20,m&&(h+=-8),g&&(h+=-20),M===".*"&&(h+=-50)}u.push(h)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const h=u[d]||"",v=s[d-1];f[v.name]=h&&v.repeatable?h.split("/"):h}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const h of d)if(h.type===0)u+=h.value;else if(h.type===1){const{value:v,repeatable:g,optional:m}=h,p=v in c?c[v]:"";if(Dn(p)&&!g)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const M=Dn(p)?p.join("/"):p;if(!M)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);u+=M}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function yM(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function xM(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=yM(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(Fd(i))return 1;if(Fd(r))return-1}return r.length-i.length}function Fd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const SM={type:0,value:""},MM=/[a-zA-Z0-9_]/;function bM(t){if(!t)return[[]];if(t==="/")return[[SM]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):d();break;case 4:d(),n=i;break;case 1:l==="("?n=2:MM.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function EM(t,e,n){const i=_M(bM(t.path),n),r=st(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function TM(t,e){const n=[],i=new Map;e=Vd({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,f,d){const h=!d,v=AM(u);v.aliasOf=d&&d.record;const g=Vd(e,u),m=[v];if("alias"in u){const x=typeof u.alias=="string"?[u.alias]:u.alias;for(const T of x)m.push(st({},v,{components:d?d.record.components:v.components,path:T,aliasOf:d?d.record:v}))}let p,M;for(const x of m){const{path:T}=x;if(f&&T[0]!=="/"){const L=f.record.path,E=L[L.length-1]==="/"?"":"/";x.path=f.record.path+(T&&E+T)}if(p=EM(x,f,g),d?d.alias.push(p):(M=M||p,M!==p&&M.alias.push(p),h&&u.name&&!kd(p)&&o(u.name)),v.children){const L=v.children;for(let E=0;E<L.length;E++)s(L[E],p,d&&d.children[E])}d=d||p,(p.record.components&&Object.keys(p.record.components).length||p.record.name||p.record.redirect)&&l(p)}return M?()=>{o(M)}:Vs}function o(u){if(Eg(u)){const f=i.get(u);f&&(i.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let f=0;for(;f<n.length&&xM(u,n[f])>=0&&(u.record.path!==n[f].record.path||!Ag(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!kd(u)&&i.set(u.record.name,u)}function c(u,f){let d,h={},v,g;if("name"in u&&u.name){if(d=i.get(u.name),!d)throw os(1,{location:u});g=d.record.name,h=st(Bd(f.params,d.keys.filter(M=>!M.optional).concat(d.parent?d.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),u.params&&Bd(u.params,d.keys.map(M=>M.name))),v=d.stringify(h)}else if(u.path!=null)v=u.path,d=n.find(M=>M.re.test(v)),d&&(h=d.parse(v),g=d.record.name);else{if(d=f.name?i.get(f.name):n.find(M=>M.re.test(f.path)),!d)throw os(1,{location:u,currentLocation:f});g=d.record.name,h=st({},f.params,u.params),v=d.stringify(h)}const m=[];let p=d;for(;p;)m.unshift(p.record),p=p.parent;return{name:g,path:v,params:h,matched:m,meta:CM(m)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Bd(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function AM(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:wM(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function wM(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function kd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function CM(t){return t.reduce((e,n)=>st(e,n.meta),{})}function Vd(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function Ag(t,e){return e.children.some(n=>n===t||Ag(t,n))}function RM(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(_g," "),o=s.indexOf("="),a=Js(o<0?s:s.slice(0,o)),l=o<0?null:Js(s.slice(o+1));if(a in e){let c=e[a];Dn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function zd(t){let e="";for(let n in t){const i=t[n];if(n=jS(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Dn(i)?i.map(s=>s&&Hc(s)):[i&&Hc(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function PM(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Dn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const LM=Symbol(""),Hd=Symbol(""),Qa=Symbol(""),wg=Symbol(""),Wc=Symbol("");function bs(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ci(t,e,n,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(os(4,{from:n,to:e})):d instanceof Error?l(d):mM(d)?l(os(2,{from:e,to:d})):(o&&i.enterCallbacks[r]===o&&typeof d=="function"&&o.push(d),a())},u=s(()=>t.call(i&&i.instances[r],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function Nl(t,e,n,i,r=s=>s()){const s=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(IM(l)){const u=(l.__vccOpts||l)[e];u&&s.push(Ci(u,n,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const f=BS(u)?u.default:u;o.components[a]=f;const h=(f.__vccOpts||f)[e];return h&&Ci(h,n,i,o,a,r)()}))}}return s}function IM(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Gd(t){const e=_t(Qa),n=_t(wg),i=ne(()=>{const l=Xt(t.to);return e.resolve(l)}),r=ne(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(ss.bind(null,u));if(d>-1)return d;const h=Wd(l[c-2]);return c>1&&Wd(u)===h&&f[f.length-1].path!==h?f.findIndex(ss.bind(null,l[c-2])):d}),s=ne(()=>r.value>-1&&OM(n.params,i.value.params)),o=ne(()=>r.value>-1&&r.value===n.matched.length-1&&Mg(n.params,i.value.params));function a(l={}){return UM(l)?e[Xt(t.replace)?"replace":"push"](Xt(t.to)).catch(Vs):Promise.resolve()}return{route:i,href:ne(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const DM=oo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Gd,setup(t,{slots:e}){const n=Bt(Gd(t)),{options:i}=_t(Qa),r=ne(()=>({[Xd(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Xd(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Yn("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),NM=DM;function UM(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function OM(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Dn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function Wd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Xd=(t,e,n)=>t??e??n,FM=oo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=_t(Wc),r=ne(()=>t.route||i.value),s=_t(Hd,0),o=ne(()=>{let c=Xt(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=ne(()=>r.value.matched[o.value]);Mn(Hd,ne(()=>o.value+1)),Mn(LM,a),Mn(Wc,r);const l=nt();return Ye(()=>[l.value,a.value,t.name],([c,u,f],[d,h,v])=>{u&&(u.instances[f]=c,h&&h!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!ss(u,h)||!d)&&(u.enterCallbacks[f]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return $d(n.default,{Component:d,route:c});const h=f.props[u],v=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=Yn(d,st({},v,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return $d(n.default,{Component:m,route:c})||m}}});function $d(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const BM=FM;function kM(t){const e=TM(t.routes,t),n=t.parseQuery||RM,i=t.stringifyQuery||zd,r=t.history,s=bs(),o=bs(),a=bs(),l=Je(gi);let c=gi;Wr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Il.bind(null,B=>""+B),f=Il.bind(null,ZS),d=Il.bind(null,Js);function h(B,he){let ae,U;return Eg(B)?(ae=e.getRecordMatcher(B),U=he):U=B,e.addRoute(U,ae)}function v(B){const he=e.getRecordMatcher(B);he&&e.removeRoute(he)}function g(){return e.getRoutes().map(B=>B.record)}function m(B){return!!e.getRecordMatcher(B)}function p(B,he){if(he=st({},he||l.value),typeof B=="string"){const P=Dl(n,B,he.path),H=e.resolve({path:P.path},he),Y=r.createHref(P.fullPath);return st(P,H,{params:d(H.params),hash:Js(P.hash),redirectedFrom:void 0,href:Y})}let ae;if(B.path!=null)ae=st({},B,{path:Dl(n,B.path,he.path).path});else{const P=st({},B.params);for(const H in P)P[H]==null&&delete P[H];ae=st({},B,{params:f(P)}),he.params=f(he.params)}const U=e.resolve(ae,he),Re=B.hash||"";U.params=u(d(U.params));const ye=eM(i,st({},B,{hash:YS(Re),path:U.path})),C=r.createHref(ye);return st({fullPath:ye,hash:Re,query:i===zd?PM(B.query):B.query||{}},U,{redirectedFrom:void 0,href:C})}function M(B){return typeof B=="string"?Dl(n,B,l.value.path):st({},B)}function x(B,he){if(c!==B)return os(8,{from:he,to:B})}function T(B){return b(B)}function L(B){return T(st(M(B),{replace:!0}))}function E(B){const he=B.matched[B.matched.length-1];if(he&&he.redirect){const{redirect:ae}=he;let U=typeof ae=="function"?ae(B):ae;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=M(U):{path:U},U.params={}),st({query:B.query,hash:B.hash,params:U.path!=null?{}:B.params},U)}}function b(B,he){const ae=c=p(B),U=l.value,Re=B.state,ye=B.force,C=B.replace===!0,P=E(ae);if(P)return b(st(M(P),{state:typeof P=="object"?st({},Re,P.state):Re,force:ye,replace:C}),he||ae);const H=ae;H.redirectedFrom=he;let Y;return!ye&&tM(i,U,ae)&&(Y=os(16,{to:H,from:U}),ve(U,U,!0,!1)),(Y?Promise.resolve(Y):_(H,U)).catch($=>Kn($)?Kn($,2)?$:me($):G($,H,U)).then($=>{if($){if(Kn($,2))return b(st({replace:C},M($.to),{state:typeof $.to=="object"?st({},Re,$.to.state):Re,force:ye}),he||H)}else $=I(H,U,!0,C,Re);return N(H,U,$),$})}function D(B,he){const ae=x(B,he);return ae?Promise.reject(ae):Promise.resolve()}function S(B){const he=te.values().next().value;return he&&typeof he.runWithContext=="function"?he.runWithContext(B):B()}function _(B,he){let ae;const[U,Re,ye]=VM(B,he);ae=Nl(U.reverse(),"beforeRouteLeave",B,he);for(const P of U)P.leaveGuards.forEach(H=>{ae.push(Ci(H,B,he))});const C=D.bind(null,B,he);return ae.push(C),ge(ae).then(()=>{ae=[];for(const P of s.list())ae.push(Ci(P,B,he));return ae.push(C),ge(ae)}).then(()=>{ae=Nl(Re,"beforeRouteUpdate",B,he);for(const P of Re)P.updateGuards.forEach(H=>{ae.push(Ci(H,B,he))});return ae.push(C),ge(ae)}).then(()=>{ae=[];for(const P of ye)if(P.beforeEnter)if(Dn(P.beforeEnter))for(const H of P.beforeEnter)ae.push(Ci(H,B,he));else ae.push(Ci(P.beforeEnter,B,he));return ae.push(C),ge(ae)}).then(()=>(B.matched.forEach(P=>P.enterCallbacks={}),ae=Nl(ye,"beforeRouteEnter",B,he,S),ae.push(C),ge(ae))).then(()=>{ae=[];for(const P of o.list())ae.push(Ci(P,B,he));return ae.push(C),ge(ae)}).catch(P=>Kn(P,8)?P:Promise.reject(P))}function N(B,he,ae){a.list().forEach(U=>S(()=>U(B,he,ae)))}function I(B,he,ae,U,Re){const ye=x(B,he);if(ye)return ye;const C=he===gi,P=Wr?history.state:{};ae&&(U||C?r.replace(B.fullPath,st({scroll:C&&P&&P.scroll},Re)):r.push(B.fullPath,Re)),l.value=B,ve(B,he,ae,C),me()}let R;function k(){R||(R=r.listen((B,he,ae)=>{if(!oe.listening)return;const U=p(B),Re=E(U);if(Re){b(st(Re,{replace:!0}),U).catch(Vs);return}c=U;const ye=l.value;Wr&&cM(Dd(ye.fullPath,ae.delta),Ja()),_(U,ye).catch(C=>Kn(C,12)?C:Kn(C,2)?(b(C.to,U).then(P=>{Kn(P,20)&&!ae.delta&&ae.type===Qs.pop&&r.go(-1,!1)}).catch(Vs),Promise.reject()):(ae.delta&&r.go(-ae.delta,!1),G(C,U,ye))).then(C=>{C=C||I(U,ye,!1),C&&(ae.delta&&!Kn(C,8)?r.go(-ae.delta,!1):ae.type===Qs.pop&&Kn(C,20)&&r.go(-1,!1)),N(U,ye,C)}).catch(Vs)}))}let q=bs(),ee=bs(),ie;function G(B,he,ae){me(B);const U=ee.list();return U.length?U.forEach(Re=>Re(B,he,ae)):console.error(B),Promise.reject(B)}function fe(){return ie&&l.value!==gi?Promise.resolve():new Promise((B,he)=>{q.add([B,he])})}function me(B){return ie||(ie=!B,k(),q.list().forEach(([he,ae])=>B?ae(B):he()),q.reset()),B}function ve(B,he,ae,U){const{scrollBehavior:Re}=t;if(!Wr||!Re)return Promise.resolve();const ye=!ae&&uM(Dd(B.fullPath,0))||(U||!ae)&&history.state&&history.state.scroll||null;return cn().then(()=>Re(B,he,ye)).then(C=>C&&lM(C)).catch(C=>G(C,B,he))}const Ae=B=>r.go(B);let $e;const te=new Set,oe={currentRoute:l,listening:!0,addRoute:h,removeRoute:v,hasRoute:m,getRoutes:g,resolve:p,options:t,push:T,replace:L,go:Ae,back:()=>Ae(-1),forward:()=>Ae(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:ee.add,isReady:fe,install(B){const he=this;B.component("RouterLink",NM),B.component("RouterView",BM),B.config.globalProperties.$router=he,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>Xt(l)}),Wr&&!$e&&l.value===gi&&($e=!0,T(r.location).catch(Re=>{}));const ae={};for(const Re in gi)Object.defineProperty(ae,Re,{get:()=>l.value[Re],enumerable:!0});B.provide(Qa,he),B.provide(wg,jp(ae)),B.provide(Wc,l);const U=B.unmount;te.add(B),B.unmount=function(){te.delete(B),te.size<1&&(c=gi,R&&R(),R=null,l.value=gi,$e=!1,ie=!1),U()}}};function ge(B){return B.reduce((he,ae)=>he.then(()=>S(ae)),Promise.resolve())}return oe}function VM(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>ss(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>ss(c,l))||r.push(l))}return[n,i,r]}function Wu(){return _t(Qa)}const zM=()=>["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document,HM=(t,e)=>{var n;if(!((n=navigator==null?void 0:navigator.xr)!=null&&n.isSessionSupported)){e==null||e();return}navigator.xr.isSessionSupported("immersive-ar").then(i=>{i?t():e==null||e(i)}).catch(i=>{console.warn(i),e==null||e(i)})},uo=Le({border:[Boolean,Number,String]},"border");function fo(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Xi();return{borderClasses:ne(()=>{const i=xt(t)?t.value:t.border,r=[];if(i===!0||i==="")r.push(`${e}--border`);else if(typeof i=="string"||i===0)for(const s of String(i).split(" "))r.push(`border-${s}`);return r})}}const GM=[null,"default","comfortable","compact"],ho=Le({density:{type:String,default:"default",validator:t=>GM.includes(t)}},"density");function el(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Xi();return{densityClasses:ne(()=>`${e}--density-${t.density}`)}}const po=Le({elevation:{type:[Number,String],validator(t){const e=parseInt(t);return!isNaN(e)&&e>=0&&e<=24}}},"elevation");function mo(t){return{elevationClasses:ne(()=>{const n=xt(t)?t.value:t.elevation,i=[];return n==null||i.push(`elevation-${n}`),i})}}const ui=Le({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function fi(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Xi();return{roundedClasses:ne(()=>{const i=xt(t)?t.value:t.rounded,r=xt(t)?t.value:t.tile,s=[];if(i===!0||i==="")s.push(`${e}--rounded`);else if(typeof i=="string"||i===0)for(const o of String(i).split(" "))s.push(`rounded-${o}`);else(r||i===!1)&&s.push("rounded-0");return s})}}const zt=Le({tag:{type:String,default:"div"}},"tag");function Xu(t){return ku(()=>{const e=[],n={};if(t.value.background)if(Fc(t.value.background)){if(n.backgroundColor=t.value.background,!t.value.text&&ux(t.value.background)){const i=Hn(t.value.background);if(i.a==null||i.a===1){const r=Qm(i);n.color=r,n.caretColor=r}}}else e.push(`bg-${t.value.background}`);return t.value.text&&(Fc(t.value.text)?(n.color=t.value.text,n.caretColor=t.value.text):e.push(`text-${t.value.text}`)),{colorClasses:e,colorStyles:n}})}function eo(t,e){const n=ne(()=>({text:xt(t)?t.value:e?t[e]:null})),{colorClasses:i,colorStyles:r}=Xu(n);return{textColorClasses:i,textColorStyles:r}}function vr(t,e){const n=ne(()=>({background:xt(t)?t.value:e?t[e]:null})),{colorClasses:i,colorStyles:r}=Xu(n);return{backgroundColorClasses:i,backgroundColorStyles:r}}const WM=["elevated","flat","tonal","outlined","text","plain"];function tl(t,e){return z(gt,null,[t&&z("span",{key:"overlay",class:`${e}__overlay`},null),z("span",{key:"underlay",class:`${e}__underlay`},null)])}const go=Le({color:String,variant:{type:String,default:"elevated",validator:t=>WM.includes(t)}},"variant");function nl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Xi();const n=ne(()=>{const{variant:s}=Xt(t);return`${e}--variant-${s}`}),{colorClasses:i,colorStyles:r}=Xu(ne(()=>{const{variant:s,color:o}=Xt(t);return{[["elevated","flat"].includes(s)?"background":"text"]:o}}));return{colorClasses:i,colorStyles:r,variantClasses:n}}const Cg=Le({baseColor:String,divided:Boolean,...uo(),...ht(),...ho(),...po(),...ui(),...zt(),...un(),...go()},"VBtnGroup"),qd=et()({name:"VBtnGroup",props:Cg(),setup(t,e){let{slots:n}=e;const{themeClasses:i}=fn(t),{densityClasses:r}=el(t),{borderClasses:s}=fo(t),{elevationClasses:o}=mo(t),{roundedClasses:a}=fi(t);Ya({VBtn:{height:"auto",baseColor:Rt(t,"baseColor"),color:Rt(t,"color"),density:Rt(t,"density"),flat:!0,variant:Rt(t,"variant")}}),lt(()=>z(t.tag,{class:["v-btn-group",{"v-btn-group--divided":t.divided},i.value,s.value,r.value,o.value,a.value,t.class],style:t.style},n))}}),XM=Le({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),$M=Le({value:null,disabled:Boolean,selectedClass:String},"group-item");function qM(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const i=It("useGroupItem");if(!i)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const r=ja();Mn(Symbol.for(`${e.description}:id`),r);const s=_t(e,null);if(!s){if(!n)return s;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${e.description}`)}const o=Rt(t,"value"),a=ne(()=>!!(s.disabled.value||t.disabled));s.register({id:r,value:o,disabled:a},i),qn(()=>{s.unregister(r)});const l=ne(()=>s.isSelected(r)),c=ne(()=>s.items.value[0].id===r),u=ne(()=>s.items.value[s.items.value.length-1].id===r),f=ne(()=>l.value&&[s.selectedClass.value,t.selectedClass]);return Ye(l,d=>{i.emit("group:selected",{value:d})},{flush:"sync"}),{id:r,isSelected:l,isFirst:c,isLast:u,toggle:()=>s.select(r,!l.value),select:d=>s.select(r,d),selectedClass:f,value:o,disabled:a,group:s}}function YM(t,e){let n=!1;const i=Bt([]),r=ms(t,"modelValue",[],d=>d==null?[]:Rg(i,zy(d)),d=>{const h=KM(i,d);return t.multiple?h:h[0]}),s=It("useGroup");function o(d,h){const v=d,g=Symbol.for(`${e.description}:id`),p=ks(g,s==null?void 0:s.vnode).indexOf(h);Xt(v.value)==null&&(v.value=p,v.useIndexAsValue=!0),p>-1?i.splice(p,0,v):i.push(v)}function a(d){if(n)return;l();const h=i.findIndex(v=>v.id===d);i.splice(h,1)}function l(){const d=i.find(h=>!h.disabled);d&&t.mandatory==="force"&&!r.value.length&&(r.value=[d.id])}Wi(()=>{l()}),qn(()=>{n=!0}),Ru(()=>{for(let d=0;d<i.length;d++)i[d].useIndexAsValue&&(i[d].value=d)});function c(d,h){const v=i.find(g=>g.id===d);if(!(h&&(v!=null&&v.disabled)))if(t.multiple){const g=r.value.slice(),m=g.findIndex(M=>M===d),p=~m;if(h=h??!p,p&&t.mandatory&&g.length<=1||!p&&t.max!=null&&g.length+1>t.max)return;m<0&&h?g.push(d):m>=0&&!h&&g.splice(m,1),r.value=g}else{const g=r.value.includes(d);if(t.mandatory&&g)return;r.value=h??!g?[d]:[]}}function u(d){if(t.multiple,r.value.length){const h=r.value[0],v=i.findIndex(p=>p.id===h);let g=(v+d)%i.length,m=i[g];for(;m.disabled&&g!==v;)g=(g+d)%i.length,m=i[g];if(m.disabled)return;r.value=[i[g].id]}else{const h=i.find(v=>!v.disabled);h&&(r.value=[h.id])}}const f={register:o,unregister:a,selected:r,select:c,disabled:Rt(t,"disabled"),prev:()=>u(i.length-1),next:()=>u(1),isSelected:d=>r.value.includes(d),selectedClass:ne(()=>t.selectedClass),items:ne(()=>i),getItemIndex:d=>jM(i,d)};return Mn(e,f),f}function jM(t,e){const n=Rg(t,[e]);return n.length?t.findIndex(i=>i.id===n[0]):-1}function Rg(t,e){const n=[];return e.forEach(i=>{const r=t.find(o=>Bu(i,o.value)),s=t[i];(r==null?void 0:r.value)!=null?n.push(r.id):s!=null&&n.push(s.id)}),n}function KM(t,e){const n=[];return e.forEach(i=>{const r=t.findIndex(s=>s.id===i);if(~r){const s=t[r];n.push(s.value!=null?s.value:r)}}),n}const Pg=Symbol.for("vuetify:v-btn-toggle"),ZM=Le({...Cg(),...XM()},"VBtnToggle");et()({name:"VBtnToggle",props:ZM(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const{isSelected:i,next:r,prev:s,select:o,selected:a}=YM(t,Pg);return lt(()=>{const l=qd.filterProps(t);return z(qd,Vt({class:["v-btn-toggle",t.class]},l,{style:t.style}),{default:()=>{var c;return[(c=n.default)==null?void 0:c.call(n,{isSelected:i,next:r,prev:s,select:o,selected:a})]}})}),{next:r,prev:s,select:o}}});const JM=Le({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),In=et(!1)({name:"VDefaultsProvider",props:JM(),setup(t,e){let{slots:n}=e;const{defaults:i,disabled:r,reset:s,root:o,scoped:a}=yu(t);return Ya(i,{reset:s,root:o,scoped:a,disabled:r}),()=>{var l;return(l=n.default)==null?void 0:l.call(n)}}}),QM=["x-small","small","default","large","x-large"],il=Le({size:{type:[String,Number],default:"default"}},"size");function rl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Xi();return ku(()=>{let n,i;return Ta(QM,t.size)?n=`${e}--size-${t.size}`:t.size&&(i={width:Ve(t.size),height:Ve(t.size)}),{sizeClasses:n,sizeStyles:i}})}const eb=Le({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:ai,...ht(),...il(),...zt({tag:"i"}),...un()},"VIcon"),Kr=et()({name:"VIcon",props:eb(),setup(t,e){let{attrs:n,slots:i}=e;const r=nt(),{themeClasses:s}=fn(t),{iconData:o}=RS(ne(()=>r.value||t.icon)),{sizeClasses:a}=rl(t),{textColorClasses:l,textColorStyles:c}=eo(Rt(t,"color"));return lt(()=>{var d,h;const u=(d=i.default)==null?void 0:d.call(i);u&&(r.value=(h=$m(u).filter(v=>v.type===ao&&v.children&&typeof v.children=="string")[0])==null?void 0:h.children);const f=!!(n.onClick||n.onClickOnce);return z(o.value.component,{tag:t.tag,icon:o.value.icon,class:["v-icon","notranslate",s.value,a.value,l.value,{"v-icon--clickable":f,"v-icon--disabled":t.disabled,"v-icon--start":t.start,"v-icon--end":t.end},t.class],style:[a.value?void 0:{fontSize:Ve(t.size),height:Ve(t.size),width:Ve(t.size)},c.value,t.style],role:f?"button":void 0,"aria-hidden":!f,tabindex:f?t.disabled?-1:0:void 0},{default:()=>[u]})}),{}}});function Lg(t,e){const n=nt(),i=Je(!1);if(Fu){const r=new IntersectionObserver(s=>{i.value=!!s.find(o=>o.isIntersecting)},e);qn(()=>{r.disconnect()}),Ye(n,(s,o)=>{o&&(r.unobserve(o),i.value=!1),s&&r.observe(s)},{flush:"post"})}return{intersectionRef:n,isIntersecting:i}}const tb=Le({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...ht(),...il(),...zt({tag:"div"}),...un()},"VProgressCircular"),nb=et()({name:"VProgressCircular",props:tb(),setup(t,e){let{slots:n}=e;const i=20,r=2*Math.PI*i,s=nt(),{themeClasses:o}=fn(t),{sizeClasses:a,sizeStyles:l}=rl(t),{textColorClasses:c,textColorStyles:u}=eo(Rt(t,"color")),{textColorClasses:f,textColorStyles:d}=eo(Rt(t,"bgColor")),{intersectionRef:h,isIntersecting:v}=Lg(),{resizeRef:g,contentRect:m}=fg(),p=ne(()=>Math.max(0,Math.min(100,parseFloat(t.modelValue)))),M=ne(()=>Number(t.width)),x=ne(()=>l.value?Number(t.size):m.value?m.value.width:Math.max(M.value,32)),T=ne(()=>i/(1-M.value/x.value)*2),L=ne(()=>M.value/x.value*T.value),E=ne(()=>Ve((100-p.value)/100*r));return Nn(()=>{h.value=s.value,g.value=s.value}),lt(()=>z(t.tag,{ref:s,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!t.indeterminate,"v-progress-circular--visible":v.value,"v-progress-circular--disable-shrink":t.indeterminate==="disable-shrink"},o.value,a.value,c.value,t.class],style:[l.value,u.value,t.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":t.indeterminate?void 0:p.value},{default:()=>[z("svg",{style:{transform:`rotate(calc(-90deg + ${Number(t.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${T.value} ${T.value}`},[z("circle",{class:["v-progress-circular__underlay",f.value],style:d.value,fill:"transparent",cx:"50%",cy:"50%",r:i,"stroke-width":L.value,"stroke-dasharray":r,"stroke-dashoffset":0},null),z("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:i,"stroke-width":L.value,"stroke-dasharray":r,"stroke-dashoffset":E.value},null)]),n.default&&z("div",{class:"v-progress-circular__content"},[n.default({value:p.value})])]})),{}}}),br=Le({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Er(t){return{dimensionStyles:ne(()=>({height:Ve(t.height),maxHeight:Ve(t.maxHeight),maxWidth:Ve(t.maxWidth),minHeight:Ve(t.minHeight),minWidth:Ve(t.minWidth),width:Ve(t.width)}))}}const Yd={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},vo=Le({location:String},"location");function sl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:i}=gs();return{locationStyles:ne(()=>{if(!t.location)return{};const{side:s,align:o}=Oc(t.location.split(" ").length>1?t.location:`${t.location} center`,i.value);function a(c){return n?n(c):0}const l={};return s!=="center"&&(e?l[Yd[s]]=`calc(100% - ${a(s)}px)`:l[s]=0),o!=="center"?e?l[Yd[o]]=`calc(100% - ${a(o)}px)`:l[o]=0:(s==="center"?l.top=l.left="50%":l[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",l.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),l})}}const ib=Le({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...ht(),...vo({location:"top"}),...ui(),...zt(),...un()},"VProgressLinear"),Ig=et()({name:"VProgressLinear",props:ib(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const i=ms(t,"modelValue"),{isRtl:r,rtlClasses:s}=gs(),{themeClasses:o}=fn(t),{locationStyles:a}=sl(t),{textColorClasses:l,textColorStyles:c}=eo(t,"color"),{backgroundColorClasses:u,backgroundColorStyles:f}=vr(ne(()=>t.bgColor||t.color)),{backgroundColorClasses:d,backgroundColorStyles:h}=vr(ne(()=>t.bufferColor||t.bgColor||t.color)),{backgroundColorClasses:v,backgroundColorStyles:g}=vr(t,"color"),{roundedClasses:m}=fi(t),{intersectionRef:p,isIntersecting:M}=Lg(),x=ne(()=>parseFloat(t.max)),T=ne(()=>parseFloat(t.height)),L=ne(()=>is(parseFloat(t.bufferValue)/x.value*100,0,100)),E=ne(()=>is(parseFloat(i.value)/x.value*100,0,100)),b=ne(()=>r.value!==t.reverse),D=ne(()=>t.indeterminate?"fade-transition":"slide-x-transition");function S(_){if(!p.value)return;const{left:N,right:I,width:R}=p.value.getBoundingClientRect(),k=b.value?R-_.clientX+(I-R):_.clientX-N;i.value=Math.round(k/R*x.value)}return lt(()=>z(t.tag,{ref:p,class:["v-progress-linear",{"v-progress-linear--absolute":t.absolute,"v-progress-linear--active":t.active&&M.value,"v-progress-linear--reverse":b.value,"v-progress-linear--rounded":t.rounded,"v-progress-linear--rounded-bar":t.roundedBar,"v-progress-linear--striped":t.striped},m.value,o.value,s.value,t.class],style:[{bottom:t.location==="bottom"?0:void 0,top:t.location==="top"?0:void 0,height:t.active?Ve(T.value):0,"--v-progress-linear-height":Ve(T.value),...t.absolute?a.value:{}},t.style],role:"progressbar","aria-hidden":t.active?"false":"true","aria-valuemin":"0","aria-valuemax":t.max,"aria-valuenow":t.indeterminate?void 0:E.value,onClick:t.clickable&&S},{default:()=>[t.stream&&z("div",{key:"stream",class:["v-progress-linear__stream",l.value],style:{...c.value,[b.value?"left":"right"]:Ve(-T.value),borderTop:`${Ve(T.value/2)} dotted`,opacity:parseFloat(t.bufferOpacity),top:`calc(50% - ${Ve(T.value/4)})`,width:Ve(100-L.value,"%"),"--v-progress-linear-stream-to":Ve(T.value*(b.value?1:-1))}},null),z("div",{class:["v-progress-linear__background",u.value],style:[f.value,{opacity:parseFloat(t.bgOpacity),width:t.stream?0:void 0}]},null),z("div",{class:["v-progress-linear__buffer",d.value],style:[h.value,{opacity:parseFloat(t.bufferOpacity),width:Ve(L.value,"%")}]},null),z(Mr,{name:D.value},{default:()=>[t.indeterminate?z("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(_=>z("div",{key:_,class:["v-progress-linear__indeterminate",_,v.value],style:g.value},null))]):z("div",{class:["v-progress-linear__determinate",v.value],style:[g.value,{width:Ve(E.value,"%")}]},null)]}),n.default&&z("div",{class:"v-progress-linear__content"},[n.default({value:E.value,buffer:L.value})])]})),{}}}),Dg=Le({loading:[Boolean,String]},"loader");function Ng(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Xi();return{loaderClasses:ne(()=>({[`${e}--loading`]:t.loading}))}}function rb(t,e){var i;let{slots:n}=e;return z("div",{class:`${t.name}__loader`},[((i=n.default)==null?void 0:i.call(n,{color:t.color,isActive:t.active}))||z(Ig,{absolute:t.absolute,active:t.active,color:t.color,height:"2",indeterminate:!0},null)])}const sb=["static","relative","fixed","absolute","sticky"],ol=Le({position:{type:String,validator:t=>sb.includes(t)}},"position");function al(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Xi();return{positionClasses:ne(()=>t.position?`${e}--${t.position}`:void 0)}}function ob(){const t=It("useRoute");return ne(()=>{var e;return(e=t==null?void 0:t.proxy)==null?void 0:e.$route})}function ab(){var t,e;return(e=(t=It("useRouter"))==null?void 0:t.proxy)==null?void 0:e.$router}function Ug(t,e){var c,u;const n=i0("RouterLink"),i=ne(()=>!!(t.href||t.to)),r=ne(()=>(i==null?void 0:i.value)||nd(e,"click")||nd(t,"click"));if(typeof n=="string"||!("useLink"in n))return{isLink:i,isClickable:r,href:Rt(t,"href")};const s=ne(()=>({...t,to:Rt(()=>t.to||"")})),o=n.useLink(s.value),a=ne(()=>t.to?o:void 0),l=ob();return{isLink:i,isClickable:r,route:(c=a.value)==null?void 0:c.route,navigate:(u=a.value)==null?void 0:u.navigate,isActive:ne(()=>{var f,d,h;return a.value?t.exact?l.value?((h=a.value.isExactActive)==null?void 0:h.value)&&Bu(a.value.route.value.query,l.value.query):((d=a.value.isExactActive)==null?void 0:d.value)??!1:((f=a.value.isActive)==null?void 0:f.value)??!1:!1}),href:ne(()=>{var f;return t.to?(f=a.value)==null?void 0:f.route.value.href:t.href})}}const Og=Le({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let Ul=!1;function lb(t,e){let n=!1,i,r;vt&&(cn(()=>{window.addEventListener("popstate",s),i=t==null?void 0:t.beforeEach((o,a,l)=>{Ul?n?e(l):l():setTimeout(()=>n?e(l):l()),Ul=!0}),r=t==null?void 0:t.afterEach(()=>{Ul=!1})}),En(()=>{window.removeEventListener("popstate",s),i==null||i(),r==null||r()}));function s(o){var a;(a=o.state)!=null&&a.replaced||(n=!0,setTimeout(()=>n=!1))}}function cb(t,e){Ye(()=>{var n;return(n=t.isActive)==null?void 0:n.value},n=>{t.isLink.value&&n&&e&&cn(()=>{e(!0)})},{immediate:!0})}const Xc=Symbol("rippleStop"),ub=80;function jd(t,e){t.style.transform=e,t.style.webkitTransform=e}function $c(t){return t.constructor.name==="TouchEvent"}function Fg(t){return t.constructor.name==="KeyboardEvent"}const fb=function(t,e){var f;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=0,r=0;if(!Fg(t)){const d=e.getBoundingClientRect(),h=$c(t)?t.touches[t.touches.length-1]:t;i=h.clientX-d.left,r=h.clientY-d.top}let s=0,o=.3;(f=e._ripple)!=null&&f.circle?(o=.15,s=e.clientWidth/2,s=n.center?s:s+Math.sqrt((i-s)**2+(r-s)**2)/4):s=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const a=`${(e.clientWidth-s*2)/2}px`,l=`${(e.clientHeight-s*2)/2}px`,c=n.center?a:`${i-s}px`,u=n.center?l:`${r-s}px`;return{radius:s,scale:o,x:c,y:u,centerX:a,centerY:l}},Pa={show(t,e){var h;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((h=e==null?void 0:e._ripple)!=null&&h.enabled))return;const i=document.createElement("span"),r=document.createElement("span");i.appendChild(r),i.className="v-ripple__container",n.class&&(i.className+=` ${n.class}`);const{radius:s,scale:o,x:a,y:l,centerX:c,centerY:u}=fb(t,e,n),f=`${s*2}px`;r.className="v-ripple__animation",r.style.width=f,r.style.height=f,e.appendChild(i);const d=window.getComputedStyle(e);d&&d.position==="static"&&(e.style.position="relative",e.dataset.previousPosition="static"),r.classList.add("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--visible"),jd(r,`translate(${a}, ${l}) scale3d(${o},${o},${o})`),r.dataset.activated=String(performance.now()),setTimeout(()=>{r.classList.remove("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--in"),jd(r,`translate(${c}, ${u}) scale3d(1,1,1)`)},0)},hide(t){var s;if(!((s=t==null?void 0:t._ripple)!=null&&s.enabled))return;const e=t.getElementsByClassName("v-ripple__animation");if(e.length===0)return;const n=e[e.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const i=performance.now()-Number(n.dataset.activated),r=Math.max(250-i,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var a;t.getElementsByClassName("v-ripple__animation").length===1&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),((a=n.parentNode)==null?void 0:a.parentNode)===t&&t.removeChild(n.parentNode)},300)},r)}};function Bg(t){return typeof t>"u"||!!t}function to(t){const e={},n=t.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||t[Xc])){if(t[Xc]=!0,$c(t))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(e.center=n._ripple.centered||Fg(t),n._ripple.class&&(e.class=n._ripple.class),$c(t)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{Pa.show(t,n,e)},n._ripple.showTimer=window.setTimeout(()=>{var i;(i=n==null?void 0:n._ripple)!=null&&i.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},ub)}else Pa.show(t,n,e)}}function Kd(t){t[Xc]=!0}function on(t){const e=t.currentTarget;if(e!=null&&e._ripple){if(window.clearTimeout(e._ripple.showTimer),t.type==="touchend"&&e._ripple.showTimerCommit){e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,e._ripple.showTimer=window.setTimeout(()=>{on(t)});return}window.setTimeout(()=>{e._ripple&&(e._ripple.touched=!1)}),Pa.hide(e)}}function kg(t){const e=t.currentTarget;e!=null&&e._ripple&&(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let no=!1;function Vg(t){!no&&(t.keyCode===Qf.enter||t.keyCode===Qf.space)&&(no=!0,to(t))}function zg(t){no=!1,on(t)}function Hg(t){no&&(no=!1,on(t))}function Gg(t,e,n){const{value:i,modifiers:r}=e,s=Bg(i);if(s||Pa.hide(t),t._ripple=t._ripple??{},t._ripple.enabled=s,t._ripple.centered=r.center,t._ripple.circle=r.circle,Nc(i)&&i.class&&(t._ripple.class=i.class),s&&!n){if(r.stop){t.addEventListener("touchstart",Kd,{passive:!0}),t.addEventListener("mousedown",Kd);return}t.addEventListener("touchstart",to,{passive:!0}),t.addEventListener("touchend",on,{passive:!0}),t.addEventListener("touchmove",kg,{passive:!0}),t.addEventListener("touchcancel",on),t.addEventListener("mousedown",to),t.addEventListener("mouseup",on),t.addEventListener("mouseleave",on),t.addEventListener("keydown",Vg),t.addEventListener("keyup",zg),t.addEventListener("blur",Hg),t.addEventListener("dragstart",on,{passive:!0})}else!s&&n&&Wg(t)}function Wg(t){t.removeEventListener("mousedown",to),t.removeEventListener("touchstart",to),t.removeEventListener("touchend",on),t.removeEventListener("touchmove",kg),t.removeEventListener("touchcancel",on),t.removeEventListener("mouseup",on),t.removeEventListener("mouseleave",on),t.removeEventListener("keydown",Vg),t.removeEventListener("keyup",zg),t.removeEventListener("dragstart",on),t.removeEventListener("blur",Hg)}function db(t,e){Gg(t,e,!1)}function hb(t){delete t._ripple,Wg(t)}function pb(t,e){if(e.value===e.oldValue)return;const n=Bg(e.oldValue);Gg(t,e,n)}const Xg={mounted:db,unmounted:hb,updated:pb},mb=Le({active:{type:Boolean,default:void 0},baseColor:String,symbol:{type:null,default:Pg},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:ai,appendIcon:ai,block:Boolean,readonly:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...uo(),...ht(),...ho(),...br(),...po(),...$M(),...Dg(),...vo(),...ol(),...ui(),...Og(),...il(),...zt({tag:"button"}),...un(),...go({variant:"elevated"})},"VBtn"),Pi=et()({name:"VBtn",props:mb(),emits:{"group:selected":t=>!0},setup(t,e){let{attrs:n,slots:i}=e;const{themeClasses:r}=fn(t),{borderClasses:s}=fo(t),{densityClasses:o}=el(t),{dimensionStyles:a}=Er(t),{elevationClasses:l}=mo(t),{loaderClasses:c}=Ng(t),{locationStyles:u}=sl(t),{positionClasses:f}=al(t),{roundedClasses:d}=fi(t),{sizeClasses:h,sizeStyles:v}=rl(t),g=qM(t,t.symbol,!1),m=Ug(t,n),p=ne(()=>{var _;return t.active!==void 0?t.active:m.isLink.value?(_=m.isActive)==null?void 0:_.value:g==null?void 0:g.isSelected.value}),M=ne(()=>{var N,I;return{color:(g==null?void 0:g.isSelected.value)&&(!m.isLink.value||((N=m.isActive)==null?void 0:N.value))||!g||((I=m.isActive)==null?void 0:I.value)?t.color??t.baseColor:t.baseColor,variant:t.variant}}),{colorClasses:x,colorStyles:T,variantClasses:L}=nl(M),E=ne(()=>(g==null?void 0:g.disabled.value)||t.disabled),b=ne(()=>t.variant==="elevated"&&!(t.disabled||t.flat||t.border)),D=ne(()=>{if(!(t.value===void 0||typeof t.value=="symbol"))return Object(t.value)===t.value?JSON.stringify(t.value,null,0):t.value});function S(_){var N;E.value||m.isLink.value&&(_.metaKey||_.ctrlKey||_.shiftKey||_.button!==0||n.target==="_blank")||((N=m.navigate)==null||N.call(m,_),g==null||g.toggle())}return cb(m,g==null?void 0:g.select),lt(()=>{const _=m.isLink.value?"a":t.tag,N=!!(t.prependIcon||i.prepend),I=!!(t.appendIcon||i.append),R=!!(t.icon&&t.icon!==!0);return es(z(_,{type:_==="a"?void 0:"button",class:["v-btn",g==null?void 0:g.selectedClass.value,{"v-btn--active":p.value,"v-btn--block":t.block,"v-btn--disabled":E.value,"v-btn--elevated":b.value,"v-btn--flat":t.flat,"v-btn--icon":!!t.icon,"v-btn--loading":t.loading,"v-btn--readonly":t.readonly,"v-btn--slim":t.slim,"v-btn--stacked":t.stacked},r.value,s.value,x.value,o.value,l.value,c.value,f.value,d.value,h.value,L.value,t.class],style:[T.value,a.value,u.value,v.value,t.style],"aria-busy":t.loading?!0:void 0,disabled:E.value||void 0,href:m.href.value,tabindex:t.loading||t.readonly?-1:void 0,onClick:S,value:D.value},{default:()=>{var k;return[tl(!0,"v-btn"),!t.icon&&N&&z("span",{key:"prepend",class:"v-btn__prepend"},[i.prepend?z(In,{key:"prepend-defaults",disabled:!t.prependIcon,defaults:{VIcon:{icon:t.prependIcon}}},i.prepend):z(Kr,{key:"prepend-icon",icon:t.prependIcon},null)]),z("span",{class:"v-btn__content","data-no-activator":""},[!i.default&&R?z(Kr,{key:"content-icon",icon:t.icon},null):z(In,{key:"content-defaults",disabled:!R,defaults:{VIcon:{icon:t.icon}}},{default:()=>{var q;return[((q=i.default)==null?void 0:q.call(i))??t.text]}})]),!t.icon&&I&&z("span",{key:"append",class:"v-btn__append"},[i.append?z(In,{key:"append-defaults",disabled:!t.appendIcon,defaults:{VIcon:{icon:t.appendIcon}}},i.append):z(Kr,{key:"append-icon",icon:t.appendIcon},null)]),!!t.loading&&z("span",{key:"loader",class:"v-btn__loader"},[((k=i.loader)==null?void 0:k.call(i))??z(nb,{color:typeof t.loading=="boolean"?void 0:t.loading,indeterminate:!0,width:"2"},null)])]}}),[[Xg,!E.value&&!!t.ripple,"",{center:!!t.icon}]])}),{group:g}}}),$g=et()({name:"VCardActions",props:ht(),setup(t,e){let{slots:n}=e;return Ya({VBtn:{slim:!0,variant:"text"}}),lt(()=>{var i;return z("div",{class:["v-card-actions",t.class],style:t.style},[(i=n.default)==null?void 0:i.call(n)])}),{}}}),gb=Le({opacity:[Number,String],...ht(),...zt()},"VCardSubtitle"),vb=et()({name:"VCardSubtitle",props:gb(),setup(t,e){let{slots:n}=e;return lt(()=>z(t.tag,{class:["v-card-subtitle",t.class],style:[{"--v-card-subtitle-opacity":t.opacity},t.style]},n)),{}}}),qg=eg("v-card-title");function _b(t){return{aspectStyles:ne(()=>{const e=Number(t.aspectRatio);return e?{paddingBottom:String(1/e*100)+"%"}:void 0})}}const Yg=Le({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...ht(),...br()},"VResponsive"),Zd=et()({name:"VResponsive",props:Yg(),setup(t,e){let{slots:n}=e;const{aspectStyles:i}=_b(t),{dimensionStyles:r}=Er(t);return lt(()=>{var s;return z("div",{class:["v-responsive",{"v-responsive--inline":t.inline},t.class],style:[r.value,t.style]},[z("div",{class:"v-responsive__sizer",style:i.value},null),(s=n.additional)==null?void 0:s.call(n),n.default&&z("div",{class:["v-responsive__content",t.contentClass]},[n.default()])])}),{}}}),jg=Le({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:t=>t!==!0}},"transition"),Ls=(t,e)=>{let{slots:n}=e;const{transition:i,disabled:r,group:s,...o}=t,{component:a=s?Ou:Mr,...l}=typeof i=="object"?i:{};return Yn(a,Vt(typeof i=="string"?{name:r?"":i}:l,typeof i=="string"?{}:Object.fromEntries(Object.entries({disabled:r,group:s}).filter(c=>{let[u,f]=c;return f!==void 0})),o),n)};function yb(t,e){if(!Fu)return;const n=e.modifiers||{},i=e.value,{handler:r,options:s}=typeof i=="object"?i:{handler:i,options:{}},o=new IntersectionObserver(function(){var f;let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=arguments.length>1?arguments[1]:void 0;const c=(f=t._observe)==null?void 0:f[e.instance.$.uid];if(!c)return;const u=a.some(d=>d.isIntersecting);r&&(!n.quiet||c.init)&&(!n.once||u||c.init)&&r(u,a,l),u&&n.once?Kg(t,e):c.init=!0},s);t._observe=Object(t._observe),t._observe[e.instance.$.uid]={init:!1,observer:o},o.observe(t)}function Kg(t,e){var i;const n=(i=t._observe)==null?void 0:i[e.instance.$.uid];n&&(n.observer.unobserve(t),delete t._observe[e.instance.$.uid])}const xb={mounted:yb,unmounted:Kg},Sb=Le({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...Yg(),...ht(),...ui(),...jg()},"VImg"),ll=et()({name:"VImg",directives:{intersect:xb},props:Sb(),emits:{loadstart:t=>!0,load:t=>!0,error:t=>!0},setup(t,e){let{emit:n,slots:i}=e;const{backgroundColorClasses:r,backgroundColorStyles:s}=vr(Rt(t,"color")),{roundedClasses:o}=fi(t),a=It("VImg"),l=Je(""),c=nt(),u=Je(t.eager?"loading":"idle"),f=Je(),d=Je(),h=ne(()=>t.src&&typeof t.src=="object"?{src:t.src.src,srcset:t.srcset||t.src.srcset,lazySrc:t.lazySrc||t.src.lazySrc,aspect:Number(t.aspectRatio||t.src.aspect||0)}:{src:t.src,srcset:t.srcset,lazySrc:t.lazySrc,aspect:Number(t.aspectRatio||0)}),v=ne(()=>h.value.aspect||f.value/d.value||0);Ye(()=>t.src,()=>{g(u.value!=="idle")}),Ye(v,(I,R)=>{!I&&R&&c.value&&T(c.value)}),mm(()=>g());function g(I){if(!(t.eager&&I)&&!(Fu&&!I&&!t.eager)){if(u.value="loading",h.value.lazySrc){const R=new Image;R.src=h.value.lazySrc,T(R,null)}h.value.src&&cn(()=>{var R;n("loadstart",((R=c.value)==null?void 0:R.currentSrc)||h.value.src),setTimeout(()=>{var k;if(!a.isUnmounted)if((k=c.value)!=null&&k.complete){if(c.value.naturalWidth||p(),u.value==="error")return;v.value||T(c.value,null),u.value==="loading"&&m()}else v.value||T(c.value),M()})})}}function m(){var I;a.isUnmounted||(M(),T(c.value),u.value="loaded",n("load",((I=c.value)==null?void 0:I.currentSrc)||h.value.src))}function p(){var I;a.isUnmounted||(u.value="error",n("error",((I=c.value)==null?void 0:I.currentSrc)||h.value.src))}function M(){const I=c.value;I&&(l.value=I.currentSrc||I.src)}let x=-1;qn(()=>{clearTimeout(x)});function T(I){let R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const k=()=>{if(clearTimeout(x),a.isUnmounted)return;const{naturalHeight:q,naturalWidth:ee}=I;q||ee?(f.value=ee,d.value=q):!I.complete&&u.value==="loading"&&R!=null?x=window.setTimeout(k,R):(I.currentSrc.endsWith(".svg")||I.currentSrc.startsWith("data:image/svg+xml"))&&(f.value=1,d.value=1)};k()}const L=ne(()=>({"v-img__img--cover":t.cover,"v-img__img--contain":!t.cover})),E=()=>{var k;if(!h.value.src||u.value==="idle")return null;const I=z("img",{class:["v-img__img",L.value],style:{objectPosition:t.position},src:h.value.src,srcset:h.value.srcset,alt:t.alt,crossorigin:t.crossorigin,referrerpolicy:t.referrerpolicy,draggable:t.draggable,sizes:t.sizes,ref:c,onLoad:m,onError:p},null),R=(k=i.sources)==null?void 0:k.call(i);return z(Ls,{transition:t.transition,appear:!0},{default:()=>[es(R?z("picture",{class:"v-img__picture"},[R,I]):I,[[Uu,u.value==="loaded"]])]})},b=()=>z(Ls,{transition:t.transition},{default:()=>[h.value.lazySrc&&u.value!=="loaded"&&z("img",{class:["v-img__img","v-img__img--preload",L.value],style:{objectPosition:t.position},src:h.value.lazySrc,alt:t.alt,crossorigin:t.crossorigin,referrerpolicy:t.referrerpolicy,draggable:t.draggable},null)]}),D=()=>i.placeholder?z(Ls,{transition:t.transition,appear:!0},{default:()=>[(u.value==="loading"||u.value==="error"&&!i.error)&&z("div",{class:"v-img__placeholder"},[i.placeholder()])]}):null,S=()=>i.error?z(Ls,{transition:t.transition,appear:!0},{default:()=>[u.value==="error"&&z("div",{class:"v-img__error"},[i.error()])]}):null,_=()=>t.gradient?z("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${t.gradient})`}},null):null,N=Je(!1);{const I=Ye(v,R=>{R&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{N.value=!0})}),I())})}return lt(()=>{const I=Zd.filterProps(t);return es(z(Zd,Vt({class:["v-img",{"v-img--booting":!N.value},r.value,o.value,t.class],style:[{width:Ve(t.width==="auto"?f.value:t.width)},s.value,t.style]},I,{aspectRatio:v.value,"aria-label":t.alt,role:t.alt?"img":void 0}),{additional:()=>z(gt,null,[z(E,null,null),z(b,null,null),z(_,null,null),z(D,null,null),z(S,null,null)]),default:i.default}),[[Eu("intersect"),{handler:g,options:t.options},null,{once:!0}]])}),{currentSrc:l,image:c,state:u,naturalWidth:f,naturalHeight:d}}}),Mb=Le({start:Boolean,end:Boolean,icon:ai,image:String,text:String,...ht(),...ho(),...ui(),...il(),...zt(),...un(),...go({variant:"flat"})},"VAvatar"),Jd=et()({name:"VAvatar",props:Mb(),setup(t,e){let{slots:n}=e;const{themeClasses:i}=fn(t),{colorClasses:r,colorStyles:s,variantClasses:o}=nl(t),{densityClasses:a}=el(t),{roundedClasses:l}=fi(t),{sizeClasses:c,sizeStyles:u}=rl(t);return lt(()=>z(t.tag,{class:["v-avatar",{"v-avatar--start":t.start,"v-avatar--end":t.end},i.value,r.value,a.value,l.value,c.value,o.value,t.class],style:[s.value,u.value,t.style]},{default:()=>[n.default?z(In,{key:"content-defaults",defaults:{VImg:{cover:!0,image:t.image},VIcon:{icon:t.icon}}},{default:()=>[n.default()]}):t.image?z(ll,{key:"image",src:t.image,alt:"",cover:!0},null):t.icon?z(Kr,{key:"icon",icon:t.icon},null):t.text,tl(!1,"v-avatar")]})),{}}}),bb=Le({appendAvatar:String,appendIcon:ai,prependAvatar:String,prependIcon:ai,subtitle:[String,Number],title:[String,Number],...ht(),...ho()},"VCardItem"),Eb=et()({name:"VCardItem",props:bb(),setup(t,e){let{slots:n}=e;return lt(()=>{var c;const i=!!(t.prependAvatar||t.prependIcon),r=!!(i||n.prepend),s=!!(t.appendAvatar||t.appendIcon),o=!!(s||n.append),a=!!(t.title!=null||n.title),l=!!(t.subtitle!=null||n.subtitle);return z("div",{class:["v-card-item",t.class],style:t.style},[r&&z("div",{key:"prepend",class:"v-card-item__prepend"},[n.prepend?z(In,{key:"prepend-defaults",disabled:!i,defaults:{VAvatar:{density:t.density,image:t.prependAvatar},VIcon:{density:t.density,icon:t.prependIcon}}},n.prepend):z(gt,null,[t.prependAvatar&&z(Jd,{key:"prepend-avatar",density:t.density,image:t.prependAvatar},null),t.prependIcon&&z(Kr,{key:"prepend-icon",density:t.density,icon:t.prependIcon},null)])]),z("div",{class:"v-card-item__content"},[a&&z(qg,{key:"title"},{default:()=>{var u;return[((u=n.title)==null?void 0:u.call(n))??t.title]}}),l&&z(vb,{key:"subtitle"},{default:()=>{var u;return[((u=n.subtitle)==null?void 0:u.call(n))??t.subtitle]}}),(c=n.default)==null?void 0:c.call(n)]),o&&z("div",{key:"append",class:"v-card-item__append"},[n.append?z(In,{key:"append-defaults",disabled:!s,defaults:{VAvatar:{density:t.density,image:t.appendAvatar},VIcon:{density:t.density,icon:t.appendIcon}}},n.append):z(gt,null,[t.appendIcon&&z(Kr,{key:"append-icon",density:t.density,icon:t.appendIcon},null),t.appendAvatar&&z(Jd,{key:"append-avatar",density:t.density,image:t.appendAvatar},null)])])])}),{}}}),Tb=Le({opacity:[Number,String],...ht(),...zt()},"VCardText"),qc=et()({name:"VCardText",props:Tb(),setup(t,e){let{slots:n}=e;return lt(()=>z(t.tag,{class:["v-card-text",t.class],style:[{"--v-card-text-opacity":t.opacity},t.style]},n)),{}}}),Ab=Le({appendAvatar:String,appendIcon:ai,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:ai,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...uo(),...ht(),...ho(),...br(),...po(),...Dg(),...vo(),...ol(),...ui(),...Og(),...zt(),...un(),...go({variant:"elevated"})},"VCard"),wb=et()({name:"VCard",directives:{Ripple:Xg},props:Ab(),setup(t,e){let{attrs:n,slots:i}=e;const{themeClasses:r}=fn(t),{borderClasses:s}=fo(t),{colorClasses:o,colorStyles:a,variantClasses:l}=nl(t),{densityClasses:c}=el(t),{dimensionStyles:u}=Er(t),{elevationClasses:f}=mo(t),{loaderClasses:d}=Ng(t),{locationStyles:h}=sl(t),{positionClasses:v}=al(t),{roundedClasses:g}=fi(t),m=Ug(t,n),p=ne(()=>t.link!==!1&&m.isLink.value),M=ne(()=>!t.disabled&&t.link!==!1&&(t.link||m.isClickable.value));return lt(()=>{const x=p.value?"a":t.tag,T=!!(i.title||t.title!=null),L=!!(i.subtitle||t.subtitle!=null),E=T||L,b=!!(i.append||t.appendAvatar||t.appendIcon),D=!!(i.prepend||t.prependAvatar||t.prependIcon),S=!!(i.image||t.image),_=E||D||b,N=!!(i.text||t.text!=null);return es(z(x,{class:["v-card",{"v-card--disabled":t.disabled,"v-card--flat":t.flat,"v-card--hover":t.hover&&!(t.disabled||t.flat),"v-card--link":M.value},r.value,s.value,o.value,c.value,f.value,d.value,v.value,g.value,l.value,t.class],style:[a.value,u.value,h.value,t.style],href:m.href.value,onClick:M.value&&m.navigate,tabindex:t.disabled?-1:void 0},{default:()=>{var I;return[S&&z("div",{key:"image",class:"v-card__image"},[i.image?z(In,{key:"image-defaults",disabled:!t.image,defaults:{VImg:{cover:!0,src:t.image}}},i.image):z(ll,{key:"image-img",cover:!0,src:t.image},null)]),z(rb,{name:"v-card",active:!!t.loading,color:typeof t.loading=="boolean"?void 0:t.loading},{default:i.loader}),_&&z(Eb,{key:"item",prependAvatar:t.prependAvatar,prependIcon:t.prependIcon,title:t.title,subtitle:t.subtitle,appendAvatar:t.appendAvatar,appendIcon:t.appendIcon},{default:i.item,prepend:i.prepend,title:i.title,subtitle:i.subtitle,append:i.append}),N&&z(qc,{key:"text"},{default:()=>{var R;return[((R=i.text)==null?void 0:R.call(i))??t.text]}}),(I=i.default)==null?void 0:I.call(i),i.actions&&z($g,null,{default:i.actions}),tl(M.value,"v-card")]}}),[[Eu("ripple"),M.value&&t.ripple]])}),{}}}),Cb=Le({color:String,inset:Boolean,length:[Number,String],opacity:[Number,String],thickness:[Number,String],vertical:Boolean,...ht(),...un()},"VDivider"),Rb=et()({name:"VDivider",props:Cb(),setup(t,e){let{attrs:n,slots:i}=e;const{themeClasses:r}=fn(t),{textColorClasses:s,textColorStyles:o}=eo(Rt(t,"color")),a=ne(()=>{const l={};return t.length&&(l[t.vertical?"maxHeight":"maxWidth"]=Ve(t.length)),t.thickness&&(l[t.vertical?"borderRightWidth":"borderTopWidth"]=Ve(t.thickness)),l});return lt(()=>{const l=z("hr",{class:[{"v-divider":!0,"v-divider--inset":t.inset,"v-divider--vertical":t.vertical},r.value,s.value,t.class],style:[a.value,o.value,{"--v-border-opacity":t.opacity},t.style],"aria-orientation":!n.role||n.role==="separator"?t.vertical?"vertical":"horizontal":void 0,role:`${n.role||"separator"}`},null);return i.default?z("div",{class:["v-divider__wrapper",{"v-divider__wrapper--vertical":t.vertical,"v-divider__wrapper--inset":t.inset}]},[l,z("div",{class:"v-divider__content"},[i.default()]),l]):l}),{}}}),Pb=Le({fluid:{type:Boolean,default:!1},...ht(),...zt()},"VContainer"),Lb=et()({name:"VContainer",props:Pb(),setup(t,e){let{slots:n}=e;const{rtlClasses:i}=gs();return lt(()=>z(t.tag,{class:["v-container",{"v-container--fluid":t.fluid},i.value,t.class],style:t.style},n)),{}}}),Zg=Ka.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}),Jg=Ka.reduce((t,e)=>{const n="offset"+li(e);return t[n]={type:[String,Number],default:null},t},{}),Qg=Ka.reduce((t,e)=>{const n="order"+li(e);return t[n]={type:[String,Number],default:null},t},{}),Qd={col:Object.keys(Zg),offset:Object.keys(Jg),order:Object.keys(Qg)};function Ib(t,e,n){let i=t;if(!(n==null||n===!1)){if(e){const r=e.replace(t,"");i+=`-${r}`}return t==="col"&&(i="v-"+i),t==="col"&&(n===""||n===!0)||(i+=`-${n}`),i.toLowerCase()}}const Db=["auto","start","end","center","baseline","stretch"],Nb=Le({cols:{type:[Boolean,String,Number],default:!1},...Zg,offset:{type:[String,Number],default:null},...Jg,order:{type:[String,Number],default:null},...Qg,alignSelf:{type:String,default:null,validator:t=>Db.includes(t)},...ht(),...zt()},"VCol"),Ub=et()({name:"VCol",props:Nb(),setup(t,e){let{slots:n}=e;const i=ne(()=>{const r=[];let s;for(s in Qd)Qd[s].forEach(a=>{const l=t[a],c=Ib(s,a,l);c&&r.push(c)});const o=r.some(a=>a.startsWith("v-col-"));return r.push({"v-col":!o||!t.cols,[`v-col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),r});return()=>{var r;return Yn(t.tag,{class:[i.value,t.class],style:t.style},(r=n.default)==null?void 0:r.call(n))}}}),$u=["start","end","center"],ev=["space-between","space-around","space-evenly"];function qu(t,e){return Ka.reduce((n,i)=>{const r=t+li(i);return n[r]=e(),n},{})}const Ob=[...$u,"baseline","stretch"],tv=t=>Ob.includes(t),nv=qu("align",()=>({type:String,default:null,validator:tv})),Fb=[...$u,...ev],iv=t=>Fb.includes(t),rv=qu("justify",()=>({type:String,default:null,validator:iv})),Bb=[...$u,...ev,"stretch"],sv=t=>Bb.includes(t),ov=qu("alignContent",()=>({type:String,default:null,validator:sv})),eh={align:Object.keys(nv),justify:Object.keys(rv),alignContent:Object.keys(ov)},kb={align:"align",justify:"justify",alignContent:"align-content"};function Vb(t,e,n){let i=kb[t];if(n!=null){if(e){const r=e.replace(t,"");i+=`-${r}`}return i+=`-${n}`,i.toLowerCase()}}const zb=Le({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:tv},...nv,justify:{type:String,default:null,validator:iv},...rv,alignContent:{type:String,default:null,validator:sv},...ov,...ht(),...zt()},"VRow"),Hb=et()({name:"VRow",props:zb(),setup(t,e){let{slots:n}=e;const i=ne(()=>{const r=[];let s;for(s in eh)eh[s].forEach(o=>{const a=t[o],l=Vb(s,o,a);l&&r.push(l)});return r.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),r});return()=>{var r;return Yn(t.tag,{class:["v-row",i.value,t.class],style:t.style},(r=n.default)==null?void 0:r.call(n))}}}),Gb=eg("v-spacer","div","VSpacer");function Ol(t,e){return{x:t.x+e.x,y:t.y+e.y}}function Wb(t,e){return{x:t.x-e.x,y:t.y-e.y}}function th(t,e){if(t.side==="top"||t.side==="bottom"){const{side:n,align:i}=t,r=i==="left"?0:i==="center"?e.width/2:i==="right"?e.width:i,s=n==="top"?0:n==="bottom"?e.height:n;return Ol({x:r,y:s},e)}else if(t.side==="left"||t.side==="right"){const{side:n,align:i}=t,r=n==="left"?0:n==="right"?e.width:n,s=i==="top"?0:i==="center"?e.height/2:i==="bottom"?e.height:i;return Ol({x:r,y:s},e)}return Ol({x:e.width/2,y:e.height/2},e)}const av={static:qb,connected:jb},Xb=Le({locationStrategy:{type:[String,Function],default:"static",validator:t=>typeof t=="function"||t in av},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function $b(t,e){const n=nt({}),i=nt();vt&&ps(()=>!!(e.isActive.value&&t.locationStrategy),s=>{var o,a;Ye(()=>t.locationStrategy,s),En(()=>{window.removeEventListener("resize",r),i.value=void 0}),window.addEventListener("resize",r,{passive:!0}),typeof t.locationStrategy=="function"?i.value=(o=t.locationStrategy(e,t,n))==null?void 0:o.updateLocation:i.value=(a=av[t.locationStrategy](e,t,n))==null?void 0:a.updateLocation});function r(s){var o;(o=i.value)==null||o.call(i,s)}return{contentStyles:n,updateLocation:i}}function qb(){}function Yb(t,e){e?t.style.removeProperty("left"):t.style.removeProperty("right");const n=qy(t);return e?n.x+=parseFloat(t.style.right||0):n.x-=parseFloat(t.style.left||0),n.y-=parseFloat(t.style.top||0),n}function jb(t,e,n){(Array.isArray(t.target.value)||Tx(t.target.value))&&Object.assign(n.value,{position:"fixed",top:0,[t.isRtl.value?"right":"left"]:0});const{preferredAnchor:r,preferredOrigin:s}=ku(()=>{const v=Oc(e.location,t.isRtl.value),g=e.origin==="overlap"?v:e.origin==="auto"?Rl(v):Oc(e.origin,t.isRtl.value);return v.side===g.side&&v.align===Pl(g).align?{preferredAnchor:sd(v),preferredOrigin:sd(g)}:{preferredAnchor:v,preferredOrigin:g}}),[o,a,l,c]=["minWidth","minHeight","maxWidth","maxHeight"].map(v=>ne(()=>{const g=parseFloat(e[v]);return isNaN(g)?1/0:g})),u=ne(()=>{if(Array.isArray(e.offset))return e.offset;if(typeof e.offset=="string"){const v=e.offset.split(" ").map(parseFloat);return v.length<2&&v.push(0),v}return typeof e.offset=="number"?[e.offset,0]:[0,0]});let f=!1;const d=new ResizeObserver(()=>{f&&h()});Ye([t.target,t.contentEl],(v,g)=>{let[m,p]=v,[M,x]=g;M&&!Array.isArray(M)&&d.unobserve(M),m&&!Array.isArray(m)&&d.observe(m),x&&d.unobserve(x),p&&d.observe(p)},{immediate:!0}),En(()=>{d.disconnect()});function h(){if(f=!1,requestAnimationFrame(()=>f=!0),!t.target.value||!t.contentEl.value)return;const v=$y(t.target.value),g=Yb(t.contentEl.value,t.isRtl.value),m=wa(t.contentEl.value),p=12;m.length||(m.push(document.documentElement),t.contentEl.value.style.top&&t.contentEl.value.style.left||(g.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),g.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const M=m.reduce((N,I)=>{const R=I.getBoundingClientRect(),k=new gr({x:I===document.documentElement?0:R.x,y:I===document.documentElement?0:R.y,width:I.clientWidth,height:I.clientHeight});return N?new gr({x:Math.max(N.left,k.left),y:Math.max(N.top,k.top),width:Math.min(N.right,k.right)-Math.max(N.left,k.left),height:Math.min(N.bottom,k.bottom)-Math.max(N.top,k.top)}):k},void 0);M.x+=p,M.y+=p,M.width-=p*2,M.height-=p*2;let x={anchor:r.value,origin:s.value};function T(N){const I=new gr(g),R=th(N.anchor,v),k=th(N.origin,I);let{x:q,y:ee}=Wb(R,k);switch(N.anchor.side){case"top":ee-=u.value[0];break;case"bottom":ee+=u.value[0];break;case"left":q-=u.value[0];break;case"right":q+=u.value[0];break}switch(N.anchor.align){case"top":ee-=u.value[1];break;case"bottom":ee+=u.value[1];break;case"left":q-=u.value[1];break;case"right":q+=u.value[1];break}return I.x+=q,I.y+=ee,I.width=Math.min(I.width,l.value),I.height=Math.min(I.height,c.value),{overflows:ad(I,M),x:q,y:ee}}let L=0,E=0;const b={x:0,y:0},D={x:!1,y:!1};let S=-1;for(;!(S++>10);){const{x:N,y:I,overflows:R}=T(x);L+=N,E+=I,g.x+=N,g.y+=I;{const k=od(x.anchor),q=R.x.before||R.x.after,ee=R.y.before||R.y.after;let ie=!1;if(["x","y"].forEach(G=>{if(G==="x"&&q&&!D.x||G==="y"&&ee&&!D.y){const fe={anchor:{...x.anchor},origin:{...x.origin}},me=G==="x"?k==="y"?Pl:Rl:k==="y"?Rl:Pl;fe.anchor=me(fe.anchor),fe.origin=me(fe.origin);const{overflows:ve}=T(fe);(ve[G].before<=R[G].before&&ve[G].after<=R[G].after||ve[G].before+ve[G].after<(R[G].before+R[G].after)/2)&&(x=fe,ie=D[G]=!0)}}),ie)continue}R.x.before&&(L+=R.x.before,g.x+=R.x.before),R.x.after&&(L-=R.x.after,g.x-=R.x.after),R.y.before&&(E+=R.y.before,g.y+=R.y.before),R.y.after&&(E-=R.y.after,g.y-=R.y.after);{const k=ad(g,M);b.x=M.width-k.x.before-k.x.after,b.y=M.height-k.y.before-k.y.after,L+=k.x.before,g.x+=k.x.before,E+=k.y.before,g.y+=k.y.before}break}const _=od(x.anchor);return Object.assign(n.value,{"--v-overlay-anchor-origin":`${x.anchor.side} ${x.anchor.align}`,transformOrigin:`${x.origin.side} ${x.origin.align}`,top:Ve(Fl(E)),left:t.isRtl.value?void 0:Ve(Fl(L)),right:t.isRtl.value?Ve(Fl(-L)):void 0,minWidth:Ve(_==="y"?Math.min(o.value,v.width):o.value),maxWidth:Ve(nh(is(b.x,o.value===1/0?0:o.value,l.value))),maxHeight:Ve(nh(is(b.y,a.value===1/0?0:a.value,c.value)))}),{available:b,contentBox:g}}return Ye(()=>[r.value,s.value,e.offset,e.minWidth,e.minHeight,e.maxWidth,e.maxHeight],()=>h()),cn(()=>{const v=h();if(!v)return;const{available:g,contentBox:m}=v;m.height>g.y&&requestAnimationFrame(()=>{h(),requestAnimationFrame(()=>{h()})})}),{updateLocation:h}}function Fl(t){return Math.round(t*devicePixelRatio)/devicePixelRatio}function nh(t){return Math.ceil(t*devicePixelRatio)/devicePixelRatio}let Yc=!0;const La=[];function Kb(t){!Yc||La.length?(La.push(t),jc()):(Yc=!1,t(),jc())}let ih=-1;function jc(){cancelAnimationFrame(ih),ih=requestAnimationFrame(()=>{const t=La.shift();t&&t(),La.length?jc():Yc=!0})}const pa={none:null,close:Qb,block:eE,reposition:tE},Zb=Le({scrollStrategy:{type:[String,Function],default:"block",validator:t=>typeof t=="function"||t in pa}},"VOverlay-scroll-strategies");function Jb(t,e){if(!vt)return;let n;Nn(async()=>{n==null||n.stop(),e.isActive.value&&t.scrollStrategy&&(n=fu(),await new Promise(i=>setTimeout(i)),n.active&&n.run(()=>{var i;typeof t.scrollStrategy=="function"?t.scrollStrategy(e,t,n):(i=pa[t.scrollStrategy])==null||i.call(pa,e,t,n)}))}),En(()=>{n==null||n.stop()})}function Qb(t){function e(n){t.isActive.value=!1}lv(t.targetEl.value??t.contentEl.value,e)}function eE(t,e){var o;const n=(o=t.root.value)==null?void 0:o.offsetParent,i=[...new Set([...wa(t.targetEl.value,e.contained?n:void 0),...wa(t.contentEl.value,e.contained?n:void 0)])].filter(a=>!a.classList.contains("v-overlay-scroll-blocked")),r=window.innerWidth-document.documentElement.offsetWidth,s=(a=>Hu(a)&&a)(n||document.documentElement);s&&t.root.value.classList.add("v-overlay--scroll-blocked"),i.forEach((a,l)=>{a.style.setProperty("--v-body-scroll-x",Ve(-a.scrollLeft)),a.style.setProperty("--v-body-scroll-y",Ve(-a.scrollTop)),a!==document.documentElement&&a.style.setProperty("--v-scrollbar-offset",Ve(r)),a.classList.add("v-overlay-scroll-blocked")}),En(()=>{i.forEach((a,l)=>{const c=parseFloat(a.style.getPropertyValue("--v-body-scroll-x")),u=parseFloat(a.style.getPropertyValue("--v-body-scroll-y")),f=a.style.scrollBehavior;a.style.scrollBehavior="auto",a.style.removeProperty("--v-body-scroll-x"),a.style.removeProperty("--v-body-scroll-y"),a.style.removeProperty("--v-scrollbar-offset"),a.classList.remove("v-overlay-scroll-blocked"),a.scrollLeft=-c,a.scrollTop=-u,a.style.scrollBehavior=f}),s&&t.root.value.classList.remove("v-overlay--scroll-blocked")})}function tE(t,e,n){let i=!1,r=-1,s=-1;function o(a){Kb(()=>{var u,f;const l=performance.now();(f=(u=t.updateLocation).value)==null||f.call(u,a),i=(performance.now()-l)/(1e3/60)>2})}s=(typeof requestIdleCallback>"u"?a=>a():requestIdleCallback)(()=>{n.run(()=>{lv(t.targetEl.value??t.contentEl.value,a=>{i?(cancelAnimationFrame(r),r=requestAnimationFrame(()=>{r=requestAnimationFrame(()=>{o(a)})})):o(a)})})}),En(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(s),cancelAnimationFrame(r)})}function lv(t,e){const n=[document,...wa(t)];n.forEach(i=>{i.addEventListener("scroll",e,{passive:!0})}),En(()=>{n.forEach(i=>{i.removeEventListener("scroll",e)})})}const nE=Symbol.for("vuetify:v-menu"),iE=Le({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function rE(t,e){let n=()=>{};function i(o){n==null||n();const a=Number(o?t.openDelay:t.closeDelay);return new Promise(l=>{n=Wy(a,()=>{e==null||e(o),l(o)})})}function r(){return i(!0)}function s(){return i(!1)}return{clearDelay:n,runOpenDelay:r,runCloseDelay:s}}const sE=Le({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...iE()},"VOverlay-activator");function oE(t,e){let{isActive:n,isTop:i}=e;const r=It("useActivator"),s=nt();let o=!1,a=!1,l=!0;const c=ne(()=>t.openOnFocus||t.openOnFocus==null&&t.openOnHover),u=ne(()=>t.openOnClick||t.openOnClick==null&&!t.openOnHover&&!c.value),{runOpenDelay:f,runCloseDelay:d}=rE(t,b=>{b===(t.openOnHover&&o||c.value&&a)&&!(t.openOnHover&&n.value&&!i.value)&&(n.value!==b&&(l=!0),n.value=b)}),h=nt(),v={onClick:b=>{b.stopPropagation(),s.value=b.currentTarget||b.target,n.value||(h.value=[b.clientX,b.clientY]),n.value=!n.value},onMouseenter:b=>{var D;(D=b.sourceCapabilities)!=null&&D.firesTouchEvents||(o=!0,s.value=b.currentTarget||b.target,f())},onMouseleave:b=>{o=!1,d()},onFocus:b=>{Gy(b.target,":focus-visible")!==!1&&(a=!0,b.stopPropagation(),s.value=b.currentTarget||b.target,f())},onBlur:b=>{a=!1,b.stopPropagation(),d()}},g=ne(()=>{const b={};return u.value&&(b.onClick=v.onClick),t.openOnHover&&(b.onMouseenter=v.onMouseenter,b.onMouseleave=v.onMouseleave),c.value&&(b.onFocus=v.onFocus,b.onBlur=v.onBlur),b}),m=ne(()=>{const b={};if(t.openOnHover&&(b.onMouseenter=()=>{o=!0,f()},b.onMouseleave=()=>{o=!1,d()}),c.value&&(b.onFocusin=()=>{a=!0,f()},b.onFocusout=()=>{a=!1,d()}),t.closeOnContentClick){const D=_t(nE,null);b.onClick=()=>{n.value=!1,D==null||D.closeParents()}}return b}),p=ne(()=>{const b={};return t.openOnHover&&(b.onMouseenter=()=>{l&&(o=!0,l=!1,f())},b.onMouseleave=()=>{o=!1,d()}),b});Ye(i,b=>{b&&(t.openOnHover&&!o&&(!c.value||!a)||c.value&&!a&&(!t.openOnHover||!o))&&(n.value=!1)}),Ye(n,b=>{b||setTimeout(()=>{h.value=void 0})},{flush:"post"});const M=Uc();Nn(()=>{M.value&&cn(()=>{s.value=M.el})});const x=Uc(),T=ne(()=>t.target==="cursor"&&h.value?h.value:x.value?x.el:cv(t.target,r)||s.value),L=ne(()=>Array.isArray(T.value)?void 0:T.value);let E;return Ye(()=>!!t.activator,b=>{b&&vt?(E=fu(),E.run(()=>{aE(t,r,{activatorEl:s,activatorEvents:g})})):E&&E.stop()},{flush:"post",immediate:!0}),En(()=>{E==null||E.stop()}),{activatorEl:s,activatorRef:M,target:T,targetEl:L,targetRef:x,activatorEvents:g,contentEvents:m,scrimEvents:p}}function aE(t,e,n){let{activatorEl:i,activatorEvents:r}=n;Ye(()=>t.activator,(l,c)=>{if(c&&l!==c){const u=a(c);u&&o(u)}l&&cn(()=>s())},{immediate:!0}),Ye(()=>t.activatorProps,()=>{s()}),En(()=>{o()});function s(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:a(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t.activatorProps;l&&jy(l,Vt(r.value,c))}function o(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:a(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t.activatorProps;l&&Ky(l,Vt(r.value,c))}function a(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:t.activator;const c=cv(l,e);return i.value=(c==null?void 0:c.nodeType)===Node.ELEMENT_NODE?c:void 0,i.value}}function cv(t,e){var i,r;if(!t)return;let n;if(t==="parent"){let s=(r=(i=e==null?void 0:e.proxy)==null?void 0:i.$el)==null?void 0:r.parentNode;for(;s!=null&&s.hasAttribute("data-no-activator");)s=s.parentNode;n=s}else typeof t=="string"?n=document.querySelector(t):"$el"in t?n=t.$el:n=t;return n}function lE(){if(!vt)return Je(!1);const{ssr:t}=SS();if(t){const e=Je(!1);return Wi(()=>{e.value=!0}),e}else return Je(!0)}const cE=Le({eager:Boolean},"lazy");function uE(t,e){const n=Je(!1),i=ne(()=>n.value||t.eager||e.value);Ye(e,()=>n.value=!0);function r(){t.eager||(n.value=!1)}return{isBooted:n,hasContent:i,onAfterLeave:r}}function uv(){const e=It("useScopeId").vnode.scopeId;return{scopeId:e?{[e]:""}:void 0}}const rh=Symbol.for("vuetify:stack"),Es=Bt([]);function fE(t,e,n){const i=It("useStack"),r=!n,s=_t(rh,void 0),o=Bt({activeChildren:new Set});Mn(rh,o);const a=Je(+e.value);ps(t,()=>{var f;const u=(f=Es.at(-1))==null?void 0:f[1];a.value=u?u+10:+e.value,r&&Es.push([i.uid,a.value]),s==null||s.activeChildren.add(i.uid),En(()=>{if(r){const d=je(Es).findIndex(h=>h[0]===i.uid);Es.splice(d,1)}s==null||s.activeChildren.delete(i.uid)})});const l=Je(!0);r&&Nn(()=>{var f;const u=((f=Es.at(-1))==null?void 0:f[0])===i.uid;setTimeout(()=>l.value=u)});const c=ne(()=>!o.activeChildren.size);return{globalTop:hs(l),localTop:c,stackStyles:ne(()=>({zIndex:a.value}))}}function dE(t){return{teleportTarget:ne(()=>{const n=t.value;if(n===!0||!vt)return;const i=n===!1?document.body:typeof n=="string"?document.querySelector(n):n;if(i==null)return;let r=i.querySelector(":scope > .v-overlay-container");return r||(r=document.createElement("div"),r.className="v-overlay-container",i.appendChild(r)),r})}}function hE(){return!0}function fv(t,e,n){if(!t||dv(t,n)===!1)return!1;const i=tg(e);if(typeof ShadowRoot<"u"&&i instanceof ShadowRoot&&i.host===t.target)return!1;const r=(typeof n.value=="object"&&n.value.include||(()=>[]))();return r.push(e),!r.some(s=>s==null?void 0:s.contains(t.target))}function dv(t,e){return(typeof e.value=="object"&&e.value.closeConditional||hE)(t)}function pE(t,e,n){const i=typeof n.value=="function"?n.value:n.value.handler;e._clickOutside.lastMousedownWasOutside&&fv(t,e,n)&&setTimeout(()=>{dv(t,n)&&i&&i(t)},0)}function sh(t,e){const n=tg(t);e(document),typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&e(n)}const mE={mounted(t,e){const n=r=>pE(r,t,e),i=r=>{t._clickOutside.lastMousedownWasOutside=fv(r,t,e)};sh(t,r=>{r.addEventListener("click",n,!0),r.addEventListener("mousedown",i,!0)}),t._clickOutside||(t._clickOutside={lastMousedownWasOutside:!1}),t._clickOutside[e.instance.$.uid]={onClick:n,onMousedown:i}},unmounted(t,e){t._clickOutside&&(sh(t,n=>{var s;if(!n||!((s=t._clickOutside)!=null&&s[e.instance.$.uid]))return;const{onClick:i,onMousedown:r}=t._clickOutside[e.instance.$.uid];n.removeEventListener("click",i,!0),n.removeEventListener("mousedown",r,!0)}),delete t._clickOutside[e.instance.$.uid])}};function gE(t){const{modelValue:e,color:n,...i}=t;return z(Mr,{name:"fade-transition",appear:!0},{default:()=>[t.modelValue&&z("div",Vt({class:["v-overlay__scrim",t.color.backgroundColorClasses.value],style:t.color.backgroundColorStyles.value},i),null)]})}const hv=Le({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...sE(),...ht(),...br(),...cE(),...Xb(),...Zb(),...un(),...jg()},"VOverlay"),oh=et()({name:"VOverlay",directives:{ClickOutside:mE},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...hv()},emits:{"click:outside":t=>!0,"update:modelValue":t=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(t,e){let{slots:n,attrs:i,emit:r}=e;const s=ms(t,"modelValue"),o=ne({get:()=>s.value,set:oe=>{oe&&t.disabled||(s.value=oe)}}),{teleportTarget:a}=dE(ne(()=>t.attach||t.contained)),{themeClasses:l}=fn(t),{rtlClasses:c,isRtl:u}=gs(),{hasContent:f,onAfterLeave:d}=uE(t,o),h=vr(ne(()=>typeof t.scrim=="string"?t.scrim:null)),{globalTop:v,localTop:g,stackStyles:m}=fE(o,Rt(t,"zIndex"),t._disableGlobalStack),{activatorEl:p,activatorRef:M,target:x,targetEl:T,targetRef:L,activatorEvents:E,contentEvents:b,scrimEvents:D}=oE(t,{isActive:o,isTop:g}),{dimensionStyles:S}=Er(t),_=lE(),{scopeId:N}=uv();Ye(()=>t.disabled,oe=>{oe&&(o.value=!1)});const I=nt(),R=nt(),k=nt(),{contentStyles:q,updateLocation:ee}=$b(t,{isRtl:u,contentEl:k,target:x,isActive:o});Jb(t,{root:I,contentEl:k,targetEl:T,isActive:o,updateLocation:ee});function ie(oe){r("click:outside",oe),t.persistent?Ae():o.value=!1}function G(oe){return o.value&&v.value&&(!t.scrim||oe.target===R.value)}vt&&Ye(o,oe=>{oe?window.addEventListener("keydown",fe):window.removeEventListener("keydown",fe)},{immediate:!0}),qn(()=>{vt&&window.removeEventListener("keydown",fe)});function fe(oe){var ge,B;oe.key==="Escape"&&v.value&&(t.persistent?Ae():(o.value=!1,(ge=k.value)!=null&&ge.contains(document.activeElement)&&((B=p.value)==null||B.focus())))}const me=ab();ps(()=>t.closeOnBack,()=>{lb(me,oe=>{v.value&&o.value?(oe(!1),t.persistent?Ae():o.value=!1):oe()})});const ve=nt();Ye(()=>o.value&&(t.absolute||t.contained)&&a.value==null,oe=>{if(oe){const ge=Mx(I.value);ge&&ge!==document.scrollingElement&&(ve.value=ge.scrollTop)}});function Ae(){t.noClickAnimation||k.value&&Yy(k.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:Sx})}function $e(){r("afterEnter")}function te(){d(),r("afterLeave")}return lt(()=>{var oe;return z(gt,null,[(oe=n.activator)==null?void 0:oe.call(n,{isActive:o.value,targetRef:L,props:Vt({ref:M},E.value,t.activatorProps)}),_.value&&f.value&&z(W0,{disabled:!a.value,to:a.value},{default:()=>[z("div",Vt({class:["v-overlay",{"v-overlay--absolute":t.absolute||t.contained,"v-overlay--active":o.value,"v-overlay--contained":t.contained},l.value,c.value,t.class],style:[m.value,{"--v-overlay-opacity":t.opacity,top:Ve(ve.value)},t.style],ref:I},N,i),[z(gE,Vt({color:h,modelValue:o.value&&!!t.scrim,ref:R},D.value),null),z(Ls,{appear:!0,persisted:!0,transition:t.transition,target:x.value,onAfterEnter:$e,onAfterLeave:te},{default:()=>{var ge;return[es(z("div",Vt({ref:k,class:["v-overlay__content",t.contentClass],style:[S.value,q.value]},b.value,t.contentProps),[(ge=n.default)==null?void 0:ge.call(n,{isActive:o})]),[[Uu,o.value],[Eu("click-outside"),{handler:ie,closeConditional:G,include:()=>[p.value]}]])]}})])]})])}),{activatorEl:p,scrimEl:R,target:x,animateClick:Ae,contentEl:k,globalTop:v,localTop:g,updateLocation:ee}}}),Bl=Symbol("Forwarded refs");function kl(t,e){let n=t;for(;n;){const i=Reflect.getOwnPropertyDescriptor(n,e);if(i)return i;n=Object.getPrototypeOf(n)}}function vE(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return t[Bl]=n,new Proxy(t,{get(r,s){if(Reflect.has(r,s))return Reflect.get(r,s);if(!(typeof s=="symbol"||s.startsWith("$")||s.startsWith("__"))){for(const o of n)if(o.value&&Reflect.has(o.value,s)){const a=Reflect.get(o.value,s);return typeof a=="function"?a.bind(o.value):a}}},has(r,s){if(Reflect.has(r,s))return!0;if(typeof s=="symbol"||s.startsWith("$")||s.startsWith("__"))return!1;for(const o of n)if(o.value&&Reflect.has(o.value,s))return!0;return!1},set(r,s,o){if(Reflect.has(r,s))return Reflect.set(r,s,o);if(typeof s=="symbol"||s.startsWith("$")||s.startsWith("__"))return!1;for(const a of n)if(a.value&&Reflect.has(a.value,s))return Reflect.set(a.value,s,o);return!1},getOwnPropertyDescriptor(r,s){var a;const o=Reflect.getOwnPropertyDescriptor(r,s);if(o)return o;if(!(typeof s=="symbol"||s.startsWith("$")||s.startsWith("__"))){for(const l of n){if(!l.value)continue;const c=kl(l.value,s)??("_"in l.value?kl((a=l.value._)==null?void 0:a.setupState,s):void 0);if(c)return c}for(const l of n){const c=l.value&&l.value[Bl];if(!c)continue;const u=c.slice();for(;u.length;){const f=u.shift(),d=kl(f.value,s);if(d)return d;const h=f.value&&f.value[Bl];h&&u.push(...h)}}}}})}function _E(t){const e=Je(t);let n=-1;function i(){clearInterval(n)}function r(){i(),cn(()=>e.value=t)}function s(o){const a=o?getComputedStyle(o):{transitionDuration:.2},l=parseFloat(a.transitionDuration)*1e3||200;if(i(),e.value<=0)return;const c=performance.now();n=window.setInterval(()=>{const u=performance.now()-c+l;e.value=Math.max(t-u,0),e.value<=0&&i()},l)}return En(i),{clear:i,time:e,start:s,reset:r}}const yE=Le({multiLine:Boolean,text:String,timer:[Boolean,String],timeout:{type:[Number,String],default:5e3},vertical:Boolean,...vo({location:"bottom"}),...ol(),...ui(),...go(),...un(),...ky(hv({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},"VSnackbar"),xE=et()({name:"VSnackbar",props:yE(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const i=ms(t,"modelValue"),{positionClasses:r}=al(t),{scopeId:s}=uv(),{themeClasses:o}=fn(t),{colorClasses:a,colorStyles:l,variantClasses:c}=nl(t),{roundedClasses:u}=fi(t),f=_E(Number(t.timeout)),d=nt(),h=nt(),v=Je(!1),g=Je(0),m=nt(),p=_t(Zs,void 0);ps(()=>!!p,()=>{const _=pg();Nn(()=>{m.value=_.mainStyles.value})}),Ye(i,x),Ye(()=>t.timeout,x),Wi(()=>{i.value&&x()});let M=-1;function x(){f.reset(),window.clearTimeout(M);const _=Number(t.timeout);if(!i.value||_===-1)return;const N=Wm(h.value);f.start(N),M=window.setTimeout(()=>{i.value=!1},_)}function T(){f.reset(),window.clearTimeout(M)}function L(){v.value=!0,T()}function E(){v.value=!1,x()}function b(_){g.value=_.touches[0].clientY}function D(_){Math.abs(g.value-_.changedTouches[0].clientY)>50&&(i.value=!1)}const S=ne(()=>t.location.split(" ").reduce((_,N)=>(_[`v-snackbar--${N}`]=!0,_),{}));return lt(()=>{const _=oh.filterProps(t),N=!!(n.default||n.text||t.text);return z(oh,Vt({ref:d,class:["v-snackbar",{"v-snackbar--active":i.value,"v-snackbar--multi-line":t.multiLine&&!t.vertical,"v-snackbar--timer":!!t.timer,"v-snackbar--vertical":t.vertical},S.value,r.value,t.class],style:[m.value,t.style]},_,{modelValue:i.value,"onUpdate:modelValue":I=>i.value=I,contentProps:Vt({class:["v-snackbar__wrapper",o.value,a.value,u.value,c.value],style:[l.value],onPointerenter:L,onPointerleave:E},_.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0,onTouchstartPassive:b,onTouchend:D},s),{default:()=>{var I,R;return[tl(!1,"v-snackbar"),t.timer&&!v.value&&z("div",{key:"timer",class:"v-snackbar__timer"},[z(Ig,{ref:h,color:typeof t.timer=="string"?t.timer:"info",max:t.timeout,"model-value":f.time.value},null)]),N&&z("div",{key:"content",class:"v-snackbar__content",role:"status","aria-live":"polite"},[((I=n.text)==null?void 0:I.call(n))??t.text,(R=n.default)==null?void 0:R.call(n)]),n.actions&&z(In,{defaults:{VBtn:{variant:"text",ripple:!1,slim:!0}}},{default:()=>[z("div",{class:"v-snackbar__actions"},[n.actions({isActive:i})])]})]},activator:n.activator})}),vE({},d)}}),SE=Le({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function dn(t,e,n){return et()({name:t,props:SE({mode:n,origin:e}),setup(i,r){let{slots:s}=r;const o={onBeforeEnter(a){i.origin&&(a.style.transformOrigin=i.origin)},onLeave(a){if(i.leaveAbsolute){const{offsetTop:l,offsetLeft:c,offsetWidth:u,offsetHeight:f}=a;a._transitionInitialStyles={position:a.style.position,top:a.style.top,left:a.style.left,width:a.style.width,height:a.style.height},a.style.position="absolute",a.style.top=`${l}px`,a.style.left=`${c}px`,a.style.width=`${u}px`,a.style.height=`${f}px`}i.hideOnLeave&&a.style.setProperty("display","none","important")},onAfterLeave(a){if(i.leaveAbsolute&&(a!=null&&a._transitionInitialStyles)){const{position:l,top:c,left:u,width:f,height:d}=a._transitionInitialStyles;delete a._transitionInitialStyles,a.style.position=l||"",a.style.top=c||"",a.style.left=u||"",a.style.width=f||"",a.style.height=d||""}}};return()=>{const a=i.group?Ou:Mr;return Yn(a,{name:i.disabled?"":t,css:!i.disabled,...i.group?void 0:{mode:i.mode},...i.disabled?{}:o},s.default)}}})}function pv(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return et()({name:t,props:{mode:{type:String,default:n},disabled:Boolean,group:Boolean},setup(i,r){let{slots:s}=r;const o=i.group?Ou:Mr;return()=>Yn(o,{name:i.disabled?"":t,css:!i.disabled,...i.disabled?{}:e},s.default)}})}function mv(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",i=bn(`offset-${n}`);return{onBeforeEnter(o){o._parent=o.parentNode,o._initialStyle={transition:o.style.transition,overflow:o.style.overflow,[n]:o.style[n]}},onEnter(o){const a=o._initialStyle;o.style.setProperty("transition","none","important"),o.style.overflow="hidden";const l=`${o[i]}px`;o.style[n]="0",o.offsetHeight,o.style.transition=a.transition,t&&o._parent&&o._parent.classList.add(t),requestAnimationFrame(()=>{o.style[n]=l})},onAfterEnter:s,onEnterCancelled:s,onLeave(o){o._initialStyle={transition:"",overflow:o.style.overflow,[n]:o.style[n]},o.style.overflow="hidden",o.style[n]=`${o[i]}px`,o.offsetHeight,requestAnimationFrame(()=>o.style[n]="0")},onAfterLeave:r,onLeaveCancelled:r};function r(o){t&&o._parent&&o._parent.classList.remove(t),s(o)}function s(o){const a=o._initialStyle[n];o.style.overflow=o._initialStyle.overflow,a!=null&&(o.style[n]=a),delete o._initialStyle}}dn("fab-transition","center center","out-in");dn("dialog-bottom-transition");dn("dialog-top-transition");dn("fade-transition");dn("scale-transition");dn("scroll-x-transition");dn("scroll-x-reverse-transition");dn("scroll-y-transition");dn("scroll-y-reverse-transition");dn("slide-x-transition");dn("slide-x-reverse-transition");dn("slide-y-transition");dn("slide-y-reverse-transition");const gv=pv("expand-transition",mv());pv("expand-x-transition",mv("",!0));const ME=en("b",null,"WebXR",-1),bE={__name:"ProjectCard",props:["title","subtitle","image","desc","route"],setup(t){const e=t,n=Wu(),i=nt(!1),r=nt(!1),s=()=>{e.route===ro[1].path?HM(()=>{n.push(e.route)},()=>{zM()?n.push(ro[2].path):r.value=!0}):n.push(e.route)};return(o,a)=>(yr(),xa(gt,null,[z(wb,{class:"mx-auto bg-white","max-width":"300","min-width":"300"},{default:Et(()=>[z(ll,{color:"surface-variant",height:"150",src:t.image,cover:""},null,8,["src"]),z(qg,null,{default:Et(()=>[pr(aa(t.title),1)]),_:1}),z(qc,null,{default:Et(()=>[en("div",null,aa(t.subtitle),1)]),_:1}),z($g,null,{default:Et(()=>[z(Pi,{color:"orange-lighten-2",text:"Start",onClick:s}),z(Gb),z(Pi,{icon:i.value?"mdi-chevron-up":"mdi-chevron-down",onClick:a[0]||(a[0]=l=>i.value=!i.value)},null,8,["icon"])]),_:1}),z(gv,null,{default:Et(()=>[es(en("div",null,[z(Rb),z(qc,null,{default:Et(()=>[pr(aa(t.desc),1)]),_:1})],512),[[Uu,i.value]])]),_:1})]),_:1}),z(xE,{modelValue:r.value,"onUpdate:modelValue":a[1]||(a[1]=l=>r.value=l),color:"yellow",timeout:1e4},{default:Et(()=>[pr(" Your browser or device not supported Augmented Reality Engine "),ME]),_:1},8,["modelValue"])],64))}},vv=Le({text:String,...ht(),...zt()},"VToolbarTitle"),_v=et()({name:"VToolbarTitle",props:vv(),setup(t,e){let{slots:n}=e;return lt(()=>{const i=!!(n.default||n.text||t.text);return z(t.tag,{class:["v-toolbar-title",t.class],style:t.style},{default:()=>{var r;return[i&&z("div",{class:"v-toolbar-title__placeholder"},[n.text?n.text():t.text,(r=n.default)==null?void 0:r.call(n)])]}})}),{}}}),EE=[null,"prominent","default","comfortable","compact"],yv=Le({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:t=>EE.includes(t)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...uo(),...ht(),...po(),...ui(),...zt({tag:"header"}),...un()},"VToolbar"),ah=et()({name:"VToolbar",props:yv(),setup(t,e){var h;let{slots:n}=e;const{backgroundColorClasses:i,backgroundColorStyles:r}=vr(Rt(t,"color")),{borderClasses:s}=fo(t),{elevationClasses:o}=mo(t),{roundedClasses:a}=fi(t),{themeClasses:l}=fn(t),{rtlClasses:c}=gs(),u=Je(!!(t.extended||(h=n.extension)!=null&&h.call(n))),f=ne(()=>parseInt(Number(t.height)+(t.density==="prominent"?Number(t.height):0)-(t.density==="comfortable"?8:0)-(t.density==="compact"?16:0),10)),d=ne(()=>u.value?parseInt(Number(t.extensionHeight)+(t.density==="prominent"?Number(t.extensionHeight):0)-(t.density==="comfortable"?4:0)-(t.density==="compact"?8:0),10):0);return Ya({VBtn:{variant:"text"}}),lt(()=>{var p;const v=!!(t.title||n.title),g=!!(n.image||t.image),m=(p=n.extension)==null?void 0:p.call(n);return u.value=!!(t.extended||m),z(t.tag,{class:["v-toolbar",{"v-toolbar--absolute":t.absolute,"v-toolbar--collapse":t.collapse,"v-toolbar--flat":t.flat,"v-toolbar--floating":t.floating,[`v-toolbar--density-${t.density}`]:!0},i.value,s.value,o.value,a.value,l.value,c.value,t.class],style:[r.value,t.style]},{default:()=>[g&&z("div",{key:"image",class:"v-toolbar__image"},[n.image?z(In,{key:"image-defaults",disabled:!t.image,defaults:{VImg:{cover:!0,src:t.image}}},n.image):z(ll,{key:"image-img",cover:!0,src:t.image},null)]),z(In,{defaults:{VTabs:{height:Ve(f.value)}}},{default:()=>{var M,x,T;return[z("div",{class:"v-toolbar__content",style:{height:Ve(f.value)}},[n.prepend&&z("div",{class:"v-toolbar__prepend"},[(M=n.prepend)==null?void 0:M.call(n)]),v&&z(_v,{key:"title",text:t.title},{text:n.title}),(x=n.default)==null?void 0:x.call(n),n.append&&z("div",{class:"v-toolbar__append"},[(T=n.append)==null?void 0:T.call(n)])])]}}),z(In,{defaults:{VTabs:{height:Ve(d.value)}}},{default:()=>[z(gv,null,{default:()=>[u.value&&z("div",{class:"v-toolbar__extension",style:{height:Ve(d.value)}},[m])]})]})]})}),{contentHeight:f,extensionHeight:d}}}),TE=Le({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function AE(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:n}=e;let i=0;const r=nt(null),s=Je(0),o=Je(0),a=Je(0),l=Je(!1),c=Je(!1),u=ne(()=>Number(t.scrollThreshold)),f=ne(()=>is((u.value-s.value)/u.value||0)),d=()=>{const h=r.value;!h||n&&!n.value||(i=s.value,s.value="window"in h?h.pageYOffset:h.scrollTop,c.value=s.value<i,a.value=Math.abs(s.value-u.value))};return Ye(c,()=>{o.value=o.value||s.value}),Ye(l,()=>{o.value=0}),Wi(()=>{Ye(()=>t.scrollTarget,h=>{var g;const v=h?document.querySelector(h):window;v&&v!==r.value&&((g=r.value)==null||g.removeEventListener("scroll",d),r.value=v,r.value.addEventListener("scroll",d,{passive:!0}))},{immediate:!0})}),qn(()=>{var h;(h=r.value)==null||h.removeEventListener("scroll",d)}),n&&Ye(n,d,{immediate:!0}),{scrollThreshold:u,currentScroll:s,currentThreshold:a,isScrollActive:l,scrollRatio:f,isScrollingUp:c,savedScroll:o}}function xv(){const t=Je(!1);return Wi(()=>{window.requestAnimationFrame(()=>{t.value=!0})}),{ssrBootStyles:ne(()=>t.value?void 0:{transition:"none !important"}),isBooted:hs(t)}}const wE=Le({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:t=>["top","bottom"].includes(t)},...yv(),...IS(),...TE(),height:{type:[Number,String],default:64}},"VAppBar"),CE=et()({name:"VAppBar",props:wE(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const i=nt(),r=ms(t,"modelValue"),s=ne(()=>{var T;const x=new Set(((T=t.scrollBehavior)==null?void 0:T.split(" "))??[]);return{hide:x.has("hide"),fullyHide:x.has("fully-hide"),inverted:x.has("inverted"),collapse:x.has("collapse"),elevate:x.has("elevate"),fadeImage:x.has("fade-image")}}),o=ne(()=>{const x=s.value;return x.hide||x.fullyHide||x.inverted||x.collapse||x.elevate||x.fadeImage||!r.value}),{currentScroll:a,scrollThreshold:l,isScrollingUp:c,scrollRatio:u}=AE(t,{canScroll:o}),f=ne(()=>s.value.hide||s.value.fullyHide),d=ne(()=>t.collapse||s.value.collapse&&(s.value.inverted?u.value>0:u.value===0)),h=ne(()=>t.flat||s.value.fullyHide&&!r.value||s.value.elevate&&(s.value.inverted?a.value>0:a.value===0)),v=ne(()=>s.value.fadeImage?s.value.inverted?1-u.value:u.value:void 0),g=ne(()=>{var L,E;const x=Number(((L=i.value)==null?void 0:L.contentHeight)??t.height),T=Number(((E=i.value)==null?void 0:E.extensionHeight)??0);return f.value?a.value<l.value||s.value.fullyHide?x+T:x:x+T});ps(ne(()=>!!t.scrollBehavior),()=>{Nn(()=>{f.value?s.value.inverted?r.value=a.value>l.value:r.value=c.value||a.value<l.value:r.value=!0})});const{ssrBootStyles:m}=xv(),{layoutItemStyles:p,layoutIsReady:M}=DS({id:t.name,order:ne(()=>parseInt(t.order,10)),position:Rt(t,"location"),layoutSize:g,elementSize:Je(void 0),active:r,absolute:Rt(t,"absolute")});return lt(()=>{const x=ah.filterProps(t);return z(ah,Vt({ref:i,class:["v-app-bar",{"v-app-bar--bottom":t.location==="bottom"},t.class],style:[{...p.value,"--v-toolbar-image-opacity":v.value,height:void 0,...m.value},t.style]},x,{collapse:d.value,flat:h.value}),n)}),M}}),RE=et()({name:"VAppBarTitle",props:vv(),setup(t,e){let{slots:n}=e;return lt(()=>z(_v,Vt(t,{class:"v-app-bar-title"}),n)),{}}}),PE=Le({...ht(),...br(),...hg()},"VLayout"),LE=et()({name:"VLayout",props:PE(),setup(t,e){let{slots:n}=e;const{layoutClasses:i,layoutStyles:r,getLayoutItem:s,items:o,layoutRef:a}=mg(t),{dimensionStyles:l}=Er(t);return lt(()=>z("div",{ref:a,class:[i.value,t.class],style:[l.value,r.value,t.style]},[z(am,null,{default:()=>{var c;return[z(gt,null,[(c=n.default)==null?void 0:c.call(n)])]}})])),{getLayoutItem:s,items:o}}}),IE=Le({scrollable:Boolean,...ht(),...br(),...zt({tag:"main"})},"VMain"),Sv=et()({name:"VMain",props:IE(),setup(t,e){let{slots:n}=e;const{dimensionStyles:i}=Er(t),{mainStyles:r,layoutIsReady:s}=pg(),{ssrBootStyles:o}=xv();return lt(()=>z(t.tag,{class:["v-main",{"v-main--scrollable":t.scrollable},t.class],style:[r.value,o.value,i.value,t.style]},{default:()=>{var a,l;return[t.scrollable?z("div",{class:"v-main__scroller"},[(a=n.default)==null?void 0:a.call(n)]):(l=n.default)==null?void 0:l.call(n)]}})),s}}),DE=oo({__name:"Main",setup(t){const e=[{title:"Augmented reality",subtitle:"Augmented reality project, based of WebXR",image:"eidosmedia-ar.png",desc:"Here should be description",route:ro[1].path}];return(n,i)=>{const r=bE;return yr(),xa(gt,null,[z(CE,{color:"primary",density:"compact"},{default:Et(()=>[z(RE,null,{default:Et(()=>[pr("Projects|IV")]),_:1})]),_:1}),z(LE,null,{default:Et(()=>[z(Sv,null,{default:Et(()=>[z(Lb,{fluid:""},{default:Et(()=>[z(Hb,{justify:"center"},{default:Et(()=>[(yr(),xa(gt,null,b0(e,s=>z(Ub,{key:s.title,cols:"auto"},{default:Et(()=>[z(r,{title:s.title,subtitle:s.subtitle,desc:s.desc,image:s.image,route:s.route},null,8,["title","subtitle","desc","image","route"])]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})]),_:1})],64)}}});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yu="164",NE=0,lh=1,UE=2,Mv=1,OE=2,ii=3,ki=0,Zt=1,ri=2,Ui=0,Zr=1,ch=2,uh=3,fh=4,FE=5,ar=100,BE=101,kE=102,VE=103,zE=104,HE=200,GE=201,WE=202,XE=203,Kc=204,Zc=205,$E=206,qE=207,YE=208,jE=209,KE=210,ZE=211,JE=212,QE=213,eT=214,tT=0,nT=1,iT=2,Ia=3,rT=4,sT=5,oT=6,aT=7,ju=0,lT=1,cT=2,Oi=0,uT=1,fT=2,dT=3,hT=4,pT=5,mT=6,gT=7,bv=300,as=301,ls=302,Jc=303,Qc=304,cl=306,eu=1e3,ur=1001,tu=1002,xn=1003,vT=1004,Fo=1005,Rn=1006,Vl=1007,fr=1008,Vi=1009,_T=1010,yT=1011,Ev=1012,Tv=1013,cs=1014,Li=1015,ul=1016,Av=1017,wv=1018,_o=1020,xT=35902,ST=1021,MT=1022,Gn=1023,bT=1024,ET=1025,Jr=1026,io=1027,TT=1028,Cv=1029,AT=1030,Rv=1031,Pv=1033,zl=33776,Hl=33777,Gl=33778,Wl=33779,dh=35840,hh=35841,ph=35842,mh=35843,gh=36196,vh=37492,_h=37496,yh=37808,xh=37809,Sh=37810,Mh=37811,bh=37812,Eh=37813,Th=37814,Ah=37815,wh=37816,Ch=37817,Rh=37818,Ph=37819,Lh=37820,Ih=37821,Xl=36492,Dh=36494,Nh=36495,wT=36283,Uh=36284,Oh=36285,Fh=36286,CT=3200,RT=3201,Lv=0,PT=1,Ri="",Fn="srgb",$i="srgb-linear",Ku="display-p3",fl="display-p3-linear",Da="linear",ut="srgb",Na="rec709",Ua="p3",wr=7680,Bh=519,LT=512,IT=513,DT=514,Iv=515,NT=516,UT=517,OT=518,FT=519,kh=35044,Vh="300 es",si=2e3,Oa=2001;class vs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$l=Math.PI/180,nu=180/Math.PI;function yo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[t&255]+Ot[t>>8&255]+Ot[t>>16&255]+Ot[t>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[n&63|128]+Ot[n>>8&255]+"-"+Ot[n>>16&255]+Ot[n>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Kt(t,e,n){return Math.max(e,Math.min(n,t))}function BT(t,e){return(t%e+e)%e}function ql(t,e,n){return(1-n)*t+n*e}function Ts(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Yt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Qe{constructor(e=0,n=0){Qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],v=i[8],g=r[0],m=r[3],p=r[6],M=r[1],x=r[4],T=r[7],L=r[2],E=r[5],b=r[8];return s[0]=o*g+a*M+l*L,s[3]=o*m+a*x+l*E,s[6]=o*p+a*T+l*b,s[1]=c*g+u*M+f*L,s[4]=c*m+u*x+f*E,s[7]=c*p+u*T+f*b,s[2]=d*g+h*M+v*L,s[5]=d*m+h*x+v*E,s[8]=d*p+h*T+v*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,h=c*s-o*l,v=n*f+i*d+r*h;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=f*g,e[1]=(r*c-u*i)*g,e[2]=(a*i-r*o)*g,e[3]=d*g,e[4]=(u*n-r*l)*g,e[5]=(r*s-a*n)*g,e[6]=h*g,e[7]=(i*l-c*n)*g,e[8]=(o*n-i*s)*g,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Yl.makeScale(e,n)),this}rotate(e){return this.premultiply(Yl.makeRotation(-e)),this}translate(e,n){return this.premultiply(Yl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yl=new Ge;function Dv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Fa(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function kT(){const t=Fa("canvas");return t.style.display="block",t}const zh={};function VT(t){t in zh||(zh[t]=!0,console.warn(t))}const Hh=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gh=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Bo={[$i]:{transfer:Da,primaries:Na,toReference:t=>t,fromReference:t=>t},[Fn]:{transfer:ut,primaries:Na,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[fl]:{transfer:Da,primaries:Ua,toReference:t=>t.applyMatrix3(Gh),fromReference:t=>t.applyMatrix3(Hh)},[Ku]:{transfer:ut,primaries:Ua,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Gh),fromReference:t=>t.applyMatrix3(Hh).convertLinearToSRGB()}},zT=new Set([$i,fl]),ot={enabled:!0,_workingColorSpace:$i,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!zT.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Bo[e].toReference,r=Bo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Bo[t].primaries},getTransfer:function(t){return t===Ri?Da:Bo[t].transfer}};function Qr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function jl(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Cr;class HT{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Cr===void 0&&(Cr=Fa("canvas")),Cr.width=e.width,Cr.height=e.height;const i=Cr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Cr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Fa("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Qr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Qr(n[i]/255)*255):n[i]=Qr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let GT=0;class Nv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:GT++}),this.uuid=yo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Kl(r[o].image)):s.push(Kl(r[o]))}else s=Kl(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Kl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?HT.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let WT=0;class Jt extends vs{constructor(e=Jt.DEFAULT_IMAGE,n=Jt.DEFAULT_MAPPING,i=ur,r=ur,s=Rn,o=fr,a=Gn,l=Vi,c=Jt.DEFAULT_ANISOTROPY,u=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:WT++}),this.uuid=yo(),this.name="",this.source=new Nv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case eu:e.x=e.x-Math.floor(e.x);break;case ur:e.x=e.x<0?0:1;break;case tu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case eu:e.y=e.y-Math.floor(e.y);break;case ur:e.y=e.y<0?0:1;break;case tu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=bv;Jt.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,n=0,i=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],v=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+g)<.1&&Math.abs(v+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,T=(h+1)/2,L=(p+1)/2,E=(u+d)/4,b=(f+g)/4,D=(v+m)/4;return x>T&&x>L?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=E/i,s=b/i):T>L?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=E/r,s=D/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=b/s,r=D/s),this.set(i,r,s,n),this}let M=Math.sqrt((m-v)*(m-v)+(f-g)*(f-g)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-v)/M,this.y=(f-g)/M,this.z=(d-u)/M,this.w=Math.acos((c+h+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class XT extends vs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Nv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xr extends XT{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Uv extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $T extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],h=s[o+1],v=s[o+2],g=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=h,e[n+2]=v,e[n+3]=g;return}if(f!==g||l!==d||c!==h||u!==v){let m=1-a;const p=l*d+c*h+u*v+f*g,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const L=Math.sqrt(x),E=Math.atan2(L,p*M);m=Math.sin(m*E)/L,a=Math.sin(a*E)/L}const T=a*M;if(l=l*m+d*T,c=c*m+h*T,u=u*m+v*T,f=f*m+g*T,m===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=L,c*=L,u*=L,f*=L}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],h=s[o+2],v=s[o+3];return e[n]=a*v+u*f+l*h-c*d,e[n+1]=l*v+u*d+c*f-a*h,e[n+2]=c*v+u*h+a*d-l*f,e[n+3]=u*v-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),h=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*h*v,this._y=c*h*f-d*u*v,this._z=c*u*v+d*h*f,this._w=c*u*f-d*h*v;break;case"YXZ":this._x=d*u*f+c*h*v,this._y=c*h*f-d*u*v,this._z=c*u*v-d*h*f,this._w=c*u*f+d*h*v;break;case"ZXY":this._x=d*u*f-c*h*v,this._y=c*h*f+d*u*v,this._z=c*u*v+d*h*f,this._w=c*u*f-d*h*v;break;case"ZYX":this._x=d*u*f-c*h*v,this._y=c*h*f+d*u*v,this._z=c*u*v-d*h*f,this._w=c*u*f+d*h*v;break;case"YZX":this._x=d*u*f+c*h*v,this._y=c*h*f+d*u*v,this._z=c*u*v-d*h*f,this._w=c*u*f-d*h*v;break;case"XZY":this._x=d*u*f-c*h*v,this._y=c*h*f-d*u*v,this._z=c*u*v+d*h*f,this._w=c*u*f+d*h*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-n;return this._w=h*o+n*this._w,this._x=h*i+n*this._x,this._y=h*r+n*this._y,this._z=h*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,n=0,i=0){J.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Wh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Wh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zl.copy(this).projectOnVector(e),this.sub(Zl)}reflect(e){return this.sub(Zl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zl=new J,Wh=new xo;class So{constructor(e=new J(1/0,1/0,1/0),n=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Tn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Tn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Tn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Tn):Tn.fromBufferAttribute(s,o),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ko.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ko.copy(i.boundingBox)),ko.applyMatrix4(e.matrixWorld),this.union(ko)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(As),Vo.subVectors(this.max,As),Rr.subVectors(e.a,As),Pr.subVectors(e.b,As),Lr.subVectors(e.c,As),vi.subVectors(Pr,Rr),_i.subVectors(Lr,Pr),Ji.subVectors(Rr,Lr);let n=[0,-vi.z,vi.y,0,-_i.z,_i.y,0,-Ji.z,Ji.y,vi.z,0,-vi.x,_i.z,0,-_i.x,Ji.z,0,-Ji.x,-vi.y,vi.x,0,-_i.y,_i.x,0,-Ji.y,Ji.x,0];return!Jl(n,Rr,Pr,Lr,Vo)||(n=[1,0,0,0,1,0,0,0,1],!Jl(n,Rr,Pr,Lr,Vo))?!1:(zo.crossVectors(vi,_i),n=[zo.x,zo.y,zo.z],Jl(n,Rr,Pr,Lr,Vo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zn=[new J,new J,new J,new J,new J,new J,new J,new J],Tn=new J,ko=new So,Rr=new J,Pr=new J,Lr=new J,vi=new J,_i=new J,Ji=new J,As=new J,Vo=new J,zo=new J,Qi=new J;function Jl(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Qi.fromArray(t,s);const a=r.x*Math.abs(Qi.x)+r.y*Math.abs(Qi.y)+r.z*Math.abs(Qi.z),l=e.dot(Qi),c=n.dot(Qi),u=i.dot(Qi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const qT=new So,ws=new J,Ql=new J;class Zu{constructor(e=new J,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):qT.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ws.subVectors(e,this.center);const n=ws.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ws,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ql.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ws.copy(e.center).add(Ql)),this.expandByPoint(ws.copy(e.center).sub(Ql))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new J,ec=new J,Ho=new J,yi=new J,tc=new J,Go=new J,nc=new J;class YT{constructor(e=new J,n=new J(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Jn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,n),Jn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ec.copy(e).add(n).multiplyScalar(.5),Ho.copy(n).sub(e).normalize(),yi.copy(this.origin).sub(ec);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ho),a=yi.dot(this.direction),l=-yi.dot(Ho),c=yi.lengthSq(),u=Math.abs(1-o*o);let f,d,h,v;if(u>0)if(f=o*l-a,d=o*a-l,v=s*u,f>=0)if(d>=-v)if(d<=v){const g=1/u;f*=g,d*=g,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ec).addScaledVector(Ho,d),h}intersectSphere(e,n){Jn.subVectors(e.center,this.origin);const i=Jn.dot(this.direction),r=Jn.dot(Jn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,n,i,r,s){tc.subVectors(n,e),Go.subVectors(i,e),nc.crossVectors(tc,Go);let o=this.direction.dot(nc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yi.subVectors(this.origin,e);const l=a*this.direction.dot(Go.crossVectors(yi,Go));if(l<0)return null;const c=a*this.direction.dot(tc.cross(yi));if(c<0||l+c>o)return null;const u=-a*yi.dot(nc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,n,i,r,s,o,a,l,c,u,f,d,h,v,g,m){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,h,v,g,m)}set(e,n,i,r,s,o,a,l,c,u,f,d,h,v,g,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=v,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ir.setFromMatrixColumn(e,0).length(),s=1/Ir.setFromMatrixColumn(e,1).length(),o=1/Ir.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,h=o*f,v=a*u,g=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=h+v*c,n[5]=d-g*c,n[9]=-a*l,n[2]=g-d*c,n[6]=v+h*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,v=c*u,g=c*f;n[0]=d+g*a,n[4]=v*a-h,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=h*a-v,n[6]=g+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,v=c*u,g=c*f;n[0]=d-g*a,n[4]=-o*f,n[8]=v+h*a,n[1]=h+v*a,n[5]=o*u,n[9]=g-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,h=o*f,v=a*u,g=a*f;n[0]=l*u,n[4]=v*c-h,n[8]=d*c+g,n[1]=l*f,n[5]=g*c+d,n[9]=h*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*c,v=a*l,g=a*c;n[0]=l*u,n[4]=g-d*f,n[8]=v*f+h,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=h*f+v,n[10]=d-g*f}else if(e.order==="XZY"){const d=o*l,h=o*c,v=a*l,g=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+g,n[5]=o*u,n[9]=h*f-v,n[2]=v*f-h,n[6]=a*u,n[10]=g*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jT,e,KT)}lookAt(e,n,i){const r=this.elements;return nn.subVectors(e,n),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),xi.crossVectors(i,nn),xi.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),xi.crossVectors(i,nn)),xi.normalize(),Wo.crossVectors(nn,xi),r[0]=xi.x,r[4]=Wo.x,r[8]=nn.x,r[1]=xi.y,r[5]=Wo.y,r[9]=nn.y,r[2]=xi.z,r[6]=Wo.z,r[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],v=i[2],g=i[6],m=i[10],p=i[14],M=i[3],x=i[7],T=i[11],L=i[15],E=r[0],b=r[4],D=r[8],S=r[12],_=r[1],N=r[5],I=r[9],R=r[13],k=r[2],q=r[6],ee=r[10],ie=r[14],G=r[3],fe=r[7],me=r[11],ve=r[15];return s[0]=o*E+a*_+l*k+c*G,s[4]=o*b+a*N+l*q+c*fe,s[8]=o*D+a*I+l*ee+c*me,s[12]=o*S+a*R+l*ie+c*ve,s[1]=u*E+f*_+d*k+h*G,s[5]=u*b+f*N+d*q+h*fe,s[9]=u*D+f*I+d*ee+h*me,s[13]=u*S+f*R+d*ie+h*ve,s[2]=v*E+g*_+m*k+p*G,s[6]=v*b+g*N+m*q+p*fe,s[10]=v*D+g*I+m*ee+p*me,s[14]=v*S+g*R+m*ie+p*ve,s[3]=M*E+x*_+T*k+L*G,s[7]=M*b+x*N+T*q+L*fe,s[11]=M*D+x*I+T*ee+L*me,s[15]=M*S+x*R+T*ie+L*ve,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],v=e[3],g=e[7],m=e[11],p=e[15];return v*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*h-i*l*h)+g*(+n*l*h-n*c*d+s*o*d-r*o*h+r*c*u-s*l*u)+m*(+n*c*f-n*a*h-s*o*f+i*o*h+s*a*u-i*c*u)+p*(-r*a*u-n*l*f+n*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],v=e[12],g=e[13],m=e[14],p=e[15],M=f*m*c-g*d*c+g*l*h-a*m*h-f*l*p+a*d*p,x=v*d*c-u*m*c-v*l*h+o*m*h+u*l*p-o*d*p,T=u*g*c-v*f*c+v*a*h-o*g*h-u*a*p+o*f*p,L=v*f*l-u*g*l-v*a*d+o*g*d+u*a*m-o*f*m,E=n*M+i*x+r*T+s*L;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=M*b,e[1]=(g*d*s-f*m*s-g*r*h+i*m*h+f*r*p-i*d*p)*b,e[2]=(a*m*s-g*l*s+g*r*c-i*m*c-a*r*p+i*l*p)*b,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*h-i*l*h)*b,e[4]=x*b,e[5]=(u*m*s-v*d*s+v*r*h-n*m*h-u*r*p+n*d*p)*b,e[6]=(v*l*s-o*m*s-v*r*c+n*m*c+o*r*p-n*l*p)*b,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*h+n*l*h)*b,e[8]=T*b,e[9]=(v*f*s-u*g*s-v*i*h+n*g*h+u*i*p-n*f*p)*b,e[10]=(o*g*s-v*a*s+v*i*c-n*g*c-o*i*p+n*a*p)*b,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*h-n*a*h)*b,e[12]=L*b,e[13]=(u*g*r-v*f*r+v*i*d-n*g*d-u*i*m+n*f*m)*b,e[14]=(v*a*r-o*g*r-v*i*l+n*g*l+o*i*m-n*a*m)*b,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,h=s*u,v=s*f,g=o*u,m=o*f,p=a*f,M=l*c,x=l*u,T=l*f,L=i.x,E=i.y,b=i.z;return r[0]=(1-(g+p))*L,r[1]=(h+T)*L,r[2]=(v-x)*L,r[3]=0,r[4]=(h-T)*E,r[5]=(1-(d+p))*E,r[6]=(m+M)*E,r[7]=0,r[8]=(v+x)*b,r[9]=(m-M)*b,r[10]=(1-(d+g))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Ir.set(r[0],r[1],r[2]).length();const o=Ir.set(r[4],r[5],r[6]).length(),a=Ir.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],An.copy(this);const c=1/s,u=1/o,f=1/a;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=u,An.elements[5]*=u,An.elements[6]*=u,An.elements[8]*=f,An.elements[9]*=f,An.elements[10]*=f,n.setFromRotationMatrix(An),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=si){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let h,v;if(a===si)h=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Oa)h=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=si){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),d=(n+e)*c,h=(i+r)*u;let v,g;if(a===si)v=(o+s)*f,g=-2*f;else if(a===Oa)v=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ir=new J,An=new Tt,jT=new J(0,0,0),KT=new J(1,1,1),xi=new J,Wo=new J,nn=new J,Xh=new Tt,$h=new xo;class $n{constructor(e=0,n=0,i=0,r=$n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Xh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return $h.setFromEuler(this),this.setFromQuaternion($h,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$n.DEFAULT_ORDER="XYZ";class Ov{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ZT=0;const qh=new J,Dr=new xo,Qn=new Tt,Xo=new J,Cs=new J,JT=new J,QT=new xo,Yh=new J(1,0,0),jh=new J(0,1,0),Kh=new J(0,0,1),Zh={type:"added"},eA={type:"removed"},Nr={type:"childadded",child:null},ic={type:"childremoved",child:null};class qt extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ZT++}),this.uuid=yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new J,n=new $n,i=new xo,r=new J(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Ge}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ov,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Dr.setFromAxisAngle(e,n),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(e,n){return Dr.setFromAxisAngle(e,n),this.quaternion.premultiply(Dr),this}rotateX(e){return this.rotateOnAxis(Yh,e)}rotateY(e){return this.rotateOnAxis(jh,e)}rotateZ(e){return this.rotateOnAxis(Kh,e)}translateOnAxis(e,n){return qh.copy(e).applyQuaternion(this.quaternion),this.position.add(qh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Yh,e)}translateY(e){return this.translateOnAxis(jh,e)}translateZ(e){return this.translateOnAxis(Kh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Xo.copy(e):Xo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(Cs,Xo,this.up):Qn.lookAt(Xo,Cs,this.up),this.quaternion.setFromRotationMatrix(Qn),r&&(Qn.extractRotation(r.matrixWorld),Dr.setFromRotationMatrix(Qn),this.quaternion.premultiply(Dr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zh),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(eA),ic.child=e,this.dispatchEvent(ic),ic.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zh),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,e,JT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,QT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}qt.DEFAULT_UP=new J(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new J,ei=new J,rc=new J,ti=new J,Ur=new J,Or=new J,Jh=new J,sc=new J,oc=new J,ac=new J;class zn{constructor(e=new J,n=new J,i=new J){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),wn.subVectors(e,n),r.cross(wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){wn.subVectors(r,n),ei.subVectors(i,n),rc.subVectors(e,n);const o=wn.dot(wn),a=wn.dot(ei),l=wn.dot(rc),c=ei.dot(ei),u=ei.dot(rc),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,v=(o*u-a*l)*d;return s.set(1-h-v,v,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ti.x),l.addScaledVector(o,ti.y),l.addScaledVector(a,ti.z),l)}static isFrontFacing(e,n,i,r){return wn.subVectors(i,n),ei.subVectors(e,n),wn.cross(ei).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),wn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return zn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ur.subVectors(r,i),Or.subVectors(s,i),sc.subVectors(e,i);const l=Ur.dot(sc),c=Or.dot(sc);if(l<=0&&c<=0)return n.copy(i);oc.subVectors(e,r);const u=Ur.dot(oc),f=Or.dot(oc);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Ur,o);ac.subVectors(e,s);const h=Ur.dot(ac),v=Or.dot(ac);if(v>=0&&h<=v)return n.copy(s);const g=h*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(Or,a);const m=u*v-h*f;if(m<=0&&f-u>=0&&h-v>=0)return Jh.subVectors(s,r),a=(f-u)/(f-u+(h-v)),n.copy(r).addScaledVector(Jh,a);const p=1/(m+g+d);return o=g*p,a=d*p,n.copy(i).addScaledVector(Ur,o).addScaledVector(Or,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},$o={h:0,s:0,l:0};function lc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ot.workingColorSpace){return this.r=e,this.g=n,this.b=i,ot.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ot.workingColorSpace){if(e=BT(e,1),n=Kt(n,0,1),i=Kt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=lc(o,s,e+1/3),this.g=lc(o,s,e),this.b=lc(o,s,e-1/3)}return ot.toWorkingColorSpace(this,r),this}setStyle(e,n=Fn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Fn){const i=Fv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qr(e.r),this.g=Qr(e.g),this.b=Qr(e.b),this}copyLinearToSRGB(e){return this.r=jl(e.r),this.g=jl(e.g),this.b=jl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return ot.fromWorkingColorSpace(Ft.copy(this),e),Math.round(Kt(Ft.r*255,0,255))*65536+Math.round(Kt(Ft.g*255,0,255))*256+Math.round(Kt(Ft.b*255,0,255))}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ot.workingColorSpace){ot.fromWorkingColorSpace(Ft.copy(this),n);const i=Ft.r,r=Ft.g,s=Ft.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ot.workingColorSpace){return ot.fromWorkingColorSpace(Ft.copy(this),n),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Fn){ot.fromWorkingColorSpace(Ft.copy(this),e);const n=Ft.r,i=Ft.g,r=Ft.b;return e!==Fn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+n,Si.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Si),e.getHSL($o);const i=ql(Si.h,$o.h,n),r=ql(Si.s,$o.s,n),s=ql(Si.l,$o.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Ze;Ze.NAMES=Fv;let tA=0;class Mo extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tA++}),this.uuid=yo(),this.name="",this.type="Material",this.blending=Zr,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kc,this.blendDst=Zc,this.blendEquation=ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Ia,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wr,this.stencilZFail=wr,this.stencilZPass=wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zr&&(i.blending=this.blending),this.side!==ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Kc&&(i.blendSrc=this.blendSrc),this.blendDst!==Zc&&(i.blendDst=this.blendDst),this.blendEquation!==ar&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ia&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==wr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==wr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ju extends Mo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=ju,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new J,qo=new Qe;class Xn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=kh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return VT("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)qo.fromBufferAttribute(this,n),qo.applyMatrix3(e),this.setXY(n,qo.x,qo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix3(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix4(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyNormalMatrix(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.transformDirection(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ts(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Yt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ts(n,this.array)),n}setX(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ts(n,this.array)),n}setY(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ts(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ts(n,this.array)),n}setW(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array),r=Yt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array),r=Yt(r,this.array),s=Yt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kh&&(e.usage=this.usage),e}}class Bv extends Xn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class kv extends Xn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ln extends Xn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let nA=0;const mn=new Tt,cc=new qt,Fr=new J,rn=new So,Rs=new So,Ct=new J;class di extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nA++}),this.uuid=yo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dv(e)?kv:Bv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,n,i){return mn.makeTranslation(e,n,i),this.applyMatrix4(mn),this}scale(e,n,i){return mn.makeScale(e,n,i),this.applyMatrix4(mn),this}lookAt(e){return cc.lookAt(e),cc.updateMatrix(),this.applyMatrix4(cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ln(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new So);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const i=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Rs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(rn.min,Rs.min),rn.expandByPoint(Ct),Ct.addVectors(rn.max,Rs.max),rn.expandByPoint(Ct)):(rn.expandByPoint(Rs.min),rn.expandByPoint(Rs.max))}rn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ct));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ct.fromBufferAttribute(a,c),l&&(Fr.fromBufferAttribute(e,c),Ct.add(Fr)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new J,l[D]=new J;const c=new J,u=new J,f=new J,d=new Qe,h=new Qe,v=new Qe,g=new J,m=new J;function p(D,S,_){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,S),f.fromBufferAttribute(i,_),d.fromBufferAttribute(s,D),h.fromBufferAttribute(s,S),v.fromBufferAttribute(s,_),u.sub(c),f.sub(c),h.sub(d),v.sub(d);const N=1/(h.x*v.y-v.x*h.y);isFinite(N)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(f,-h.y).multiplyScalar(N),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-v.x).multiplyScalar(N),a[D].add(g),a[S].add(g),a[_].add(g),l[D].add(m),l[S].add(m),l[_].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let D=0,S=M.length;D<S;++D){const _=M[D],N=_.start,I=_.count;for(let R=N,k=N+I;R<k;R+=3)p(e.getX(R+0),e.getX(R+1),e.getX(R+2))}const x=new J,T=new J,L=new J,E=new J;function b(D){L.fromBufferAttribute(r,D),E.copy(L);const S=a[D];x.copy(S),x.sub(L.multiplyScalar(L.dot(S))).normalize(),T.crossVectors(E,S);const N=T.dot(l[D])<0?-1:1;o.setXYZW(D,x.x,x.y,x.z,N)}for(let D=0,S=M.length;D<S;++D){const _=M[D],N=_.start,I=_.count;for(let R=N,k=N+I;R<k;R+=3)b(e.getX(R+0)),b(e.getX(R+1)),b(e.getX(R+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new J,s=new J,o=new J,a=new J,l=new J,c=new J,u=new J,f=new J;if(e)for(let d=0,h=e.count;d<h;d+=3){const v=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,g),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=n.count;d<h;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ct.fromBufferAttribute(e,n),Ct.normalize(),e.setXYZ(n,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,v=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?h=l[g]*a.data.stride+a.offset:h=l[g]*u;for(let p=0;p<u;p++)d[v++]=c[h++]}return new Xn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new di,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qh=new Tt,er=new YT,Yo=new Zu,ep=new J,Br=new J,kr=new J,Vr=new J,uc=new J,jo=new J,Ko=new Qe,Zo=new Qe,Jo=new Qe,tp=new J,np=new J,ip=new J,Qo=new J,ea=new J;class Pn extends qt{constructor(e=new di,n=new Ju){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){jo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(uc.fromBufferAttribute(f,e),o?jo.addScaledVector(uc,u):jo.addScaledVector(uc.sub(n),u))}n.add(jo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Yo.copy(i.boundingSphere),Yo.applyMatrix4(s),er.copy(e.ray).recast(e.near),!(Yo.containsPoint(er.origin)===!1&&(er.intersectSphere(Yo,ep)===null||er.origin.distanceToSquared(ep)>(e.far-e.near)**2))&&(Qh.copy(s).invert(),er.copy(e.ray).applyMatrix4(Qh),!(i.boundingBox!==null&&er.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,er)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const m=d[v],p=o[m.materialIndex],M=Math.max(m.start,h.start),x=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let T=M,L=x;T<L;T+=3){const E=a.getX(T),b=a.getX(T+1),D=a.getX(T+2);r=ta(this,p,e,i,c,u,f,E,b,D),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let m=v,p=g;m<p;m+=3){const M=a.getX(m),x=a.getX(m+1),T=a.getX(m+2);r=ta(this,o,e,i,c,u,f,M,x,T),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const m=d[v],p=o[m.materialIndex],M=Math.max(m.start,h.start),x=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let T=M,L=x;T<L;T+=3){const E=T,b=T+1,D=T+2;r=ta(this,p,e,i,c,u,f,E,b,D),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let m=v,p=g;m<p;m+=3){const M=m,x=m+1,T=m+2;r=ta(this,o,e,i,c,u,f,M,x,T),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function iA(t,e,n,i,r,s,o,a){let l;if(e.side===Zt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ki,a),l===null)return null;ea.copy(a),ea.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ea);return c<n.near||c>n.far?null:{distance:c,point:ea.clone(),object:t}}function ta(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Br),t.getVertexPosition(l,kr),t.getVertexPosition(c,Vr);const u=iA(t,e,n,i,Br,kr,Vr,Qo);if(u){r&&(Ko.fromBufferAttribute(r,a),Zo.fromBufferAttribute(r,l),Jo.fromBufferAttribute(r,c),u.uv=zn.getInterpolation(Qo,Br,kr,Vr,Ko,Zo,Jo,new Qe)),s&&(Ko.fromBufferAttribute(s,a),Zo.fromBufferAttribute(s,l),Jo.fromBufferAttribute(s,c),u.uv1=zn.getInterpolation(Qo,Br,kr,Vr,Ko,Zo,Jo,new Qe)),o&&(tp.fromBufferAttribute(o,a),np.fromBufferAttribute(o,l),ip.fromBufferAttribute(o,c),u.normal=zn.getInterpolation(Qo,Br,kr,Vr,tp,np,ip,new J),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new J,materialIndex:0};zn.getNormal(Br,kr,Vr,f.normal),u.face=f}return u}class bo extends di{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ln(c,3)),this.setAttribute("normal",new ln(u,3)),this.setAttribute("uv",new ln(f,2));function v(g,m,p,M,x,T,L,E,b,D,S){const _=T/b,N=L/D,I=T/2,R=L/2,k=E/2,q=b+1,ee=D+1;let ie=0,G=0;const fe=new J;for(let me=0;me<ee;me++){const ve=me*N-R;for(let Ae=0;Ae<q;Ae++){const $e=Ae*_-I;fe[g]=$e*M,fe[m]=ve*x,fe[p]=k,c.push(fe.x,fe.y,fe.z),fe[g]=0,fe[m]=0,fe[p]=E>0?1:-1,u.push(fe.x,fe.y,fe.z),f.push(Ae/b),f.push(1-me/D),ie+=1}}for(let me=0;me<D;me++)for(let ve=0;ve<b;ve++){const Ae=d+ve+q*me,$e=d+ve+q*(me+1),te=d+(ve+1)+q*(me+1),oe=d+(ve+1)+q*me;l.push(Ae,$e,oe),l.push($e,te,oe),G+=6}a.addGroup(h,G,S),h+=G,d+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function us(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Wt(t){const e={};for(let n=0;n<t.length;n++){const i=us(t[n]);for(const r in i)e[r]=i[r]}return e}function rA(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Vv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const sA={clone:us,merge:Wt};var oA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zi extends Mo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oA,this.fragmentShader=aA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=us(e.uniforms),this.uniformsGroups=rA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class zv extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=si}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new J,rp=new Qe,sp=new Qe;class gn extends zv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=nu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($l*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nu*2*Math.atan(Math.tan($l*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,n){return this.getViewBounds(e,rp,sp),n.subVectors(sp,rp)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan($l*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const zr=-90,Hr=1;class lA extends qt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(zr,Hr,e,n);r.layers=this.layers,this.add(r);const s=new gn(zr,Hr,e,n);s.layers=this.layers,this.add(s);const o=new gn(zr,Hr,e,n);o.layers=this.layers,this.add(o);const a=new gn(zr,Hr,e,n);a.layers=this.layers,this.add(a);const l=new gn(zr,Hr,e,n);l.layers=this.layers,this.add(l);const c=new gn(zr,Hr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Oa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,h),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Hv extends Jt{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:as,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cA extends xr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Hv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Rn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new bo(5,5,5),s=new zi({name:"CubemapFromEquirect",uniforms:us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zt,blending:Ui});s.uniforms.tEquirect.value=n;const o=new Pn(r,s),a=n.minFilter;return n.minFilter===fr&&(n.minFilter=Rn),new lA(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const fc=new J,uA=new J,fA=new Ge;class rr{constructor(e=new J(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=fc.subVectors(i,n).cross(uA.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(fc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||fA.getNormalMatrix(e),r=this.coplanarPoint(fc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const tr=new Zu,na=new J;class Gv{constructor(e=new rr,n=new rr,i=new rr,r=new rr,s=new rr,o=new rr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=si){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],h=r[8],v=r[9],g=r[10],m=r[11],p=r[12],M=r[13],x=r[14],T=r[15];if(i[0].setComponents(l-s,d-c,m-h,T-p).normalize(),i[1].setComponents(l+s,d+c,m+h,T+p).normalize(),i[2].setComponents(l+o,d+u,m+v,T+M).normalize(),i[3].setComponents(l-o,d-u,m-v,T-M).normalize(),i[4].setComponents(l-a,d-f,m-g,T-x).normalize(),n===si)i[5].setComponents(l+a,d+f,m+g,T+x).normalize();else if(n===Oa)i[5].setComponents(a,f,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(tr)}intersectsSprite(e){return tr.center.set(0,0,0),tr.radius=.7071067811865476,tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(na.x=r.normal.x>0?e.max.x:e.min.x,na.y=r.normal.y>0?e.max.y:e.min.y,na.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(na)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function dA(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l._updateRange,d=l.updateRanges;if(t.bindBuffer(c,a),f.count===-1&&d.length===0&&t.bufferSubData(c,0,u),d.length!==0){for(let h=0,v=d.length;h<v;h++){const g=d[h];t.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}f.count!==-1&&(t.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class dl extends di{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,h=[],v=[],g=[],m=[];for(let p=0;p<u;p++){const M=p*d-o;for(let x=0;x<c;x++){const T=x*f-s;v.push(T,-M,0),g.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const x=M+c*p,T=M+c*(p+1),L=M+1+c*(p+1),E=M+1+c*p;h.push(x,T,E),h.push(T,L,E)}this.setIndex(h),this.setAttribute("position",new ln(v,3)),this.setAttribute("normal",new ln(g,3)),this.setAttribute("uv",new ln(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dl(e.width,e.height,e.widthSegments,e.heightSegments)}}var hA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pA=`#ifdef USE_ALPHAHASH
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
#endif`,mA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_A=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yA=`#ifdef USE_AOMAP
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
#endif`,xA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,SA=`#ifdef USE_BATCHING
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
#endif`,MA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,bA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,EA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,TA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,AA=`#ifdef USE_IRIDESCENCE
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
#endif`,wA=`#ifdef USE_BUMPMAP
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
#endif`,CA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,RA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,LA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,IA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,DA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,NA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,UA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,OA=`#define PI 3.141592653589793
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
} // validated`,FA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,BA=`vec3 transformedNormal = objectNormal;
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
#endif`,kA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,VA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,GA="gl_FragColor = linearToOutputTexel( gl_FragColor );",WA=`
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
}`,XA=`#ifdef USE_ENVMAP
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
#endif`,$A=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qA=`#ifdef USE_ENVMAP
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
#endif`,YA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jA=`#ifdef USE_ENVMAP
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
#endif`,KA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ew=`#ifdef USE_GRADIENTMAP
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
}`,tw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rw=`uniform bool receiveShadow;
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
#endif`,sw=`#ifdef USE_ENVMAP
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
#endif`,ow=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uw=`PhysicalMaterial material;
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
#endif`,fw=`struct PhysicalMaterial {
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
}`,dw=`
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
#endif`,hw=`#if defined( RE_IndirectDiffuse )
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
#endif`,pw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_w=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mw=`#if defined( USE_POINTS_UV )
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
#endif`,bw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ew=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Aw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ww=`#ifdef USE_MORPHNORMALS
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
#endif`,Cw=`#ifdef USE_MORPHTARGETS
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
#endif`,Rw=`#ifdef USE_MORPHTARGETS
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
#endif`,Pw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Iw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Uw=`#ifdef USE_NORMALMAP
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
#endif`,Ow=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ww=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$w=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zw=`float getShadowMask() {
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
}`,Jw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qw=`#ifdef USE_SKINNING
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
#endif`,eC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tC=`#ifdef USE_SKINNING
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
#endif`,nC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,oC=`#ifdef USE_TRANSMISSION
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
#endif`,aC=`#ifdef USE_TRANSMISSION
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
#endif`,lC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hC=`uniform sampler2D t2D;
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
}`,pC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mC=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_C=`#include <common>
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
}`,yC=`#if DEPTH_PACKING == 3200
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
}`,xC=`#define DISTANCE
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
}`,SC=`#define DISTANCE
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
}`,MC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EC=`uniform float scale;
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
}`,TC=`uniform vec3 diffuse;
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
}`,AC=`#include <common>
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
}`,wC=`uniform vec3 diffuse;
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
}`,CC=`#define LAMBERT
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
}`,RC=`#define LAMBERT
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
}`,PC=`#define MATCAP
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
}`,LC=`#define MATCAP
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
}`,IC=`#define NORMAL
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
}`,DC=`#define NORMAL
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
}`,NC=`#define PHONG
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
}`,UC=`#define PHONG
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
}`,OC=`#define STANDARD
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
}`,FC=`#define STANDARD
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
}`,BC=`#define TOON
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
}`,kC=`#define TOON
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
}`,VC=`uniform float size;
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
}`,zC=`uniform vec3 diffuse;
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
}`,HC=`#include <common>
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
}`,GC=`uniform vec3 color;
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
}`,WC=`uniform float rotation;
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
}`,XC=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:hA,alphahash_pars_fragment:pA,alphamap_fragment:mA,alphamap_pars_fragment:gA,alphatest_fragment:vA,alphatest_pars_fragment:_A,aomap_fragment:yA,aomap_pars_fragment:xA,batching_pars_vertex:SA,batching_vertex:MA,begin_vertex:bA,beginnormal_vertex:EA,bsdfs:TA,iridescence_fragment:AA,bumpmap_pars_fragment:wA,clipping_planes_fragment:CA,clipping_planes_pars_fragment:RA,clipping_planes_pars_vertex:PA,clipping_planes_vertex:LA,color_fragment:IA,color_pars_fragment:DA,color_pars_vertex:NA,color_vertex:UA,common:OA,cube_uv_reflection_fragment:FA,defaultnormal_vertex:BA,displacementmap_pars_vertex:kA,displacementmap_vertex:VA,emissivemap_fragment:zA,emissivemap_pars_fragment:HA,colorspace_fragment:GA,colorspace_pars_fragment:WA,envmap_fragment:XA,envmap_common_pars_fragment:$A,envmap_pars_fragment:qA,envmap_pars_vertex:YA,envmap_physical_pars_fragment:sw,envmap_vertex:jA,fog_vertex:KA,fog_pars_vertex:ZA,fog_fragment:JA,fog_pars_fragment:QA,gradientmap_pars_fragment:ew,lightmap_pars_fragment:tw,lights_lambert_fragment:nw,lights_lambert_pars_fragment:iw,lights_pars_begin:rw,lights_toon_fragment:ow,lights_toon_pars_fragment:aw,lights_phong_fragment:lw,lights_phong_pars_fragment:cw,lights_physical_fragment:uw,lights_physical_pars_fragment:fw,lights_fragment_begin:dw,lights_fragment_maps:hw,lights_fragment_end:pw,logdepthbuf_fragment:mw,logdepthbuf_pars_fragment:gw,logdepthbuf_pars_vertex:vw,logdepthbuf_vertex:_w,map_fragment:yw,map_pars_fragment:xw,map_particle_fragment:Sw,map_particle_pars_fragment:Mw,metalnessmap_fragment:bw,metalnessmap_pars_fragment:Ew,morphinstance_vertex:Tw,morphcolor_vertex:Aw,morphnormal_vertex:ww,morphtarget_pars_vertex:Cw,morphtarget_vertex:Rw,normal_fragment_begin:Pw,normal_fragment_maps:Lw,normal_pars_fragment:Iw,normal_pars_vertex:Dw,normal_vertex:Nw,normalmap_pars_fragment:Uw,clearcoat_normal_fragment_begin:Ow,clearcoat_normal_fragment_maps:Fw,clearcoat_pars_fragment:Bw,iridescence_pars_fragment:kw,opaque_fragment:Vw,packing:zw,premultiplied_alpha_fragment:Hw,project_vertex:Gw,dithering_fragment:Ww,dithering_pars_fragment:Xw,roughnessmap_fragment:$w,roughnessmap_pars_fragment:qw,shadowmap_pars_fragment:Yw,shadowmap_pars_vertex:jw,shadowmap_vertex:Kw,shadowmask_pars_fragment:Zw,skinbase_vertex:Jw,skinning_pars_vertex:Qw,skinning_vertex:eC,skinnormal_vertex:tC,specularmap_fragment:nC,specularmap_pars_fragment:iC,tonemapping_fragment:rC,tonemapping_pars_fragment:sC,transmission_fragment:oC,transmission_pars_fragment:aC,uv_pars_fragment:lC,uv_pars_vertex:cC,uv_vertex:uC,worldpos_vertex:fC,background_vert:dC,background_frag:hC,backgroundCube_vert:pC,backgroundCube_frag:mC,cube_vert:gC,cube_frag:vC,depth_vert:_C,depth_frag:yC,distanceRGBA_vert:xC,distanceRGBA_frag:SC,equirect_vert:MC,equirect_frag:bC,linedashed_vert:EC,linedashed_frag:TC,meshbasic_vert:AC,meshbasic_frag:wC,meshlambert_vert:CC,meshlambert_frag:RC,meshmatcap_vert:PC,meshmatcap_frag:LC,meshnormal_vert:IC,meshnormal_frag:DC,meshphong_vert:NC,meshphong_frag:UC,meshphysical_vert:OC,meshphysical_frag:FC,meshtoon_vert:BC,meshtoon_frag:kC,points_vert:VC,points_frag:zC,shadow_vert:HC,shadow_frag:GC,sprite_vert:WC,sprite_frag:XC},_e={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Bn={basic:{uniforms:Wt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Wt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ze(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Wt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Wt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Wt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ze(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Wt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Wt([_e.points,_e.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Wt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Wt([_e.common,_e.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Wt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Wt([_e.sprite,_e.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Wt([_e.common,_e.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Wt([_e.lights,_e.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Bn.physical={uniforms:Wt([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const ia={r:0,b:0,g:0},nr=new $n,$C=new Tt;function qC(t,e,n,i,r,s,o){const a=new Ze(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function v(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?n:e).get(x)),x}function g(M){let x=!1;const T=v(M);T===null?p(a,l):T&&T.isColor&&(p(T,1),x=!0);const L=t.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function m(M,x){const T=v(x);T&&(T.isCubeTexture||T.mapping===cl)?(u===void 0&&(u=new Pn(new bo(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:us(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,E,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),nr.copy(x.backgroundRotation),nr.x*=-1,nr.y*=-1,nr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($C.makeRotationFromEuler(nr)),u.material.toneMapped=ot.getTransfer(T.colorSpace)!==ut,(f!==T||d!==T.version||h!==t.toneMapping)&&(u.material.needsUpdate=!0,f=T,d=T.version,h=t.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Pn(new dl(2,2),new zi({name:"BackgroundMaterial",uniforms:us(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ot.getTransfer(T.colorSpace)!==ut,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||d!==T.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,f=T,d=T.version,h=t.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,x){M.getRGB(ia,Vv(t)),i.buffers.color.setClear(ia.r,ia.g,ia.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:g,addToRenderList:m}}function YC(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(_,N,I,R,k){let q=!1;const ee=f(R,I,N);s!==ee&&(s=ee,c(s.object)),q=h(_,R,I,k),q&&v(_,R,I,k),k!==null&&e.update(k,t.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,T(_,N,I,R),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return t.createVertexArray()}function c(_){return t.bindVertexArray(_)}function u(_){return t.deleteVertexArray(_)}function f(_,N,I){const R=I.wireframe===!0;let k=i[_.id];k===void 0&&(k={},i[_.id]=k);let q=k[N.id];q===void 0&&(q={},k[N.id]=q);let ee=q[R];return ee===void 0&&(ee=d(l()),q[R]=ee),ee}function d(_){const N=[],I=[],R=[];for(let k=0;k<n;k++)N[k]=0,I[k]=0,R[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:I,attributeDivisors:R,object:_,attributes:{},index:null}}function h(_,N,I,R){const k=s.attributes,q=N.attributes;let ee=0;const ie=I.getAttributes();for(const G in ie)if(ie[G].location>=0){const me=k[G];let ve=q[G];if(ve===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(ve=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(ve=_.instanceColor)),me===void 0||me.attribute!==ve||ve&&me.data!==ve.data)return!0;ee++}return s.attributesNum!==ee||s.index!==R}function v(_,N,I,R){const k={},q=N.attributes;let ee=0;const ie=I.getAttributes();for(const G in ie)if(ie[G].location>=0){let me=q[G];me===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(me=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(me=_.instanceColor));const ve={};ve.attribute=me,me&&me.data&&(ve.data=me.data),k[G]=ve,ee++}s.attributes=k,s.attributesNum=ee,s.index=R}function g(){const _=s.newAttributes;for(let N=0,I=_.length;N<I;N++)_[N]=0}function m(_){p(_,0)}function p(_,N){const I=s.newAttributes,R=s.enabledAttributes,k=s.attributeDivisors;I[_]=1,R[_]===0&&(t.enableVertexAttribArray(_),R[_]=1),k[_]!==N&&(t.vertexAttribDivisor(_,N),k[_]=N)}function M(){const _=s.newAttributes,N=s.enabledAttributes;for(let I=0,R=N.length;I<R;I++)N[I]!==_[I]&&(t.disableVertexAttribArray(I),N[I]=0)}function x(_,N,I,R,k,q,ee){ee===!0?t.vertexAttribIPointer(_,N,I,k,q):t.vertexAttribPointer(_,N,I,R,k,q)}function T(_,N,I,R){g();const k=R.attributes,q=I.getAttributes(),ee=N.defaultAttributeValues;for(const ie in q){const G=q[ie];if(G.location>=0){let fe=k[ie];if(fe===void 0&&(ie==="instanceMatrix"&&_.instanceMatrix&&(fe=_.instanceMatrix),ie==="instanceColor"&&_.instanceColor&&(fe=_.instanceColor)),fe!==void 0){const me=fe.normalized,ve=fe.itemSize,Ae=e.get(fe);if(Ae===void 0)continue;const $e=Ae.buffer,te=Ae.type,oe=Ae.bytesPerElement,ge=te===t.INT||te===t.UNSIGNED_INT||fe.gpuType===Tv;if(fe.isInterleavedBufferAttribute){const B=fe.data,he=B.stride,ae=fe.offset;if(B.isInstancedInterleavedBuffer){for(let U=0;U<G.locationSize;U++)p(G.location+U,B.meshPerAttribute);_.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let U=0;U<G.locationSize;U++)m(G.location+U);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let U=0;U<G.locationSize;U++)x(G.location+U,ve/G.locationSize,te,me,he*oe,(ae+ve/G.locationSize*U)*oe,ge)}else{if(fe.isInstancedBufferAttribute){for(let B=0;B<G.locationSize;B++)p(G.location+B,fe.meshPerAttribute);_.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let B=0;B<G.locationSize;B++)m(G.location+B);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let B=0;B<G.locationSize;B++)x(G.location+B,ve/G.locationSize,te,me,ve*oe,ve/G.locationSize*B*oe,ge)}}else if(ee!==void 0){const me=ee[ie];if(me!==void 0)switch(me.length){case 2:t.vertexAttrib2fv(G.location,me);break;case 3:t.vertexAttrib3fv(G.location,me);break;case 4:t.vertexAttrib4fv(G.location,me);break;default:t.vertexAttrib1fv(G.location,me)}}}}M()}function L(){D();for(const _ in i){const N=i[_];for(const I in N){const R=N[I];for(const k in R)u(R[k].object),delete R[k];delete N[I]}delete i[_]}}function E(_){if(i[_.id]===void 0)return;const N=i[_.id];for(const I in N){const R=N[I];for(const k in R)u(R[k].object),delete R[k];delete N[I]}delete i[_.id]}function b(_){for(const N in i){const I=i[N];if(I[_.id]===void 0)continue;const R=I[_.id];for(const k in R)u(R[k].object),delete R[k];delete I[_.id]}}function D(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:S,dispose:L,releaseStatesOfGeometry:E,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:m,disableUnusedAttributes:M}}function jC(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let h=0;h<f;h++)this.render(c[h],u[h]);else{d.multiDrawArraysWEBGL(i,c,0,u,0,f);let h=0;for(let v=0;v<f;v++)h+=u[v];n.update(h,i,1)}}function l(c,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let v=0;v<c.length;v++)o(c[v],u[v],d[v]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let v=0;for(let g=0;g<f;g++)v+=u[g];for(let g=0;g<d.length;g++)n.update(v,i,d[g])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function KC(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){return!(E!==Gn&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const b=E===ul&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Vi&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Li&&!b)}function l(E){if(E==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=h>0,L=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:T,maxSamples:L}}function ZC(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new rr,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,h){const v=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,p=t.get(f);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const M=s?0:i,x=M*4;let T=p.clippingState||null;l.value=T,T=u(v,d,x,h);for(let L=0;L!==x;++L)T[L]=n[L];p.clippingState=T,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,v){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const p=h+g*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,T=h;x!==g;++x,T+=4)o.copy(f[x]).applyMatrix4(M,a),o.normal.toArray(m,T),m[T+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function JC(t){let e=new WeakMap;function n(o,a){return a===Jc?o.mapping=as:a===Qc&&(o.mapping=ls),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Jc||a===Qc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new cA(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class QC extends zv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Xr=4,op=[.125,.215,.35,.446,.526,.582],lr=20,dc=new QC,ap=new Ze;let hc=null,pc=0,mc=0,gc=!1;const sr=(1+Math.sqrt(5))/2,Gr=1/sr,lp=[new J(-sr,Gr,0),new J(sr,Gr,0),new J(-Gr,0,sr),new J(Gr,0,sr),new J(0,sr,-Gr),new J(0,sr,Gr),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)];class cp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){hc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hc,pc,mc),this._renderer.xr.enabled=gc,e.scissorTest=!1,ra(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===as||e.mapping===ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:ul,format:Gn,colorSpace:$i,depthBuffer:!1},r=up(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=up(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=e1(s)),this._blurMaterial=t1(s,e,n)}return r}_compileMaterial(e){const n=new Pn(this._lodPlanes[0],e);this._renderer.compile(n,dc)}_sceneToCubeUV(e,n,i,r){const a=new gn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(ap),u.toneMapping=Oi,u.autoClear=!1;const h=new Ju({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),v=new Pn(new bo,h);let g=!1;const m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,g=!0):(h.color.copy(ap),g=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;ra(r,M*x,p>2?x:0,x,x),u.setRenderTarget(r),g&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===as||e.mapping===ls;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Pn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ra(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,dc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=lp[(r-s-1)%lp.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Pn(this._lodPlanes[r],c),d=c.uniforms,h=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*lr-1),g=s/v,m=isFinite(s)?1+Math.floor(u*g):lr;m>lr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${lr}`);const p=[];let M=0;for(let b=0;b<lr;++b){const D=b/g,S=Math.exp(-D*D/2);p.push(S),b===0?M+=S:b<m&&(M+=2*S)}for(let b=0;b<p.length;b++)p[b]=p[b]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=v,d.mipInt.value=x-i;const T=this._sizeLods[r],L=3*T*(r>x-Xr?r-x+Xr:0),E=4*(this._cubeSize-T);ra(n,L,E,3*T,2*T),l.setRenderTarget(n),l.render(f,dc)}}function e1(t){const e=[],n=[],i=[];let r=t;const s=t-Xr+1+op.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Xr?l=op[o-t+Xr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,v=6,g=3,m=2,p=1,M=new Float32Array(g*v*h),x=new Float32Array(m*v*h),T=new Float32Array(p*v*h);for(let E=0;E<h;E++){const b=E%3*2/3-1,D=E>2?0:-1,S=[b,D,0,b+2/3,D,0,b+2/3,D+1,0,b,D,0,b+2/3,D+1,0,b,D+1,0];M.set(S,g*v*E),x.set(d,m*v*E);const _=[E,E,E,E,E,E];T.set(_,p*v*E)}const L=new di;L.setAttribute("position",new Xn(M,g)),L.setAttribute("uv",new Xn(x,m)),L.setAttribute("faceIndex",new Xn(T,p)),e.push(L),r>Xr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function up(t,e,n){const i=new xr(t,e,n);return i.texture.mapping=cl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ra(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function t1(t,e,n){const i=new Float32Array(lr),r=new J(0,1,0);return new zi({name:"SphericalGaussianBlur",defines:{n:lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qu(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function fp(){return new zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qu(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function dp(){return new zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Qu(){return`

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
	`}function n1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Jc||l===Qc,u=l===as||l===ls;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new cp(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&r(h)?(n===null&&(n=new cp(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function i1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function r1(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const g=d.morphAttributes[v];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}d.removeEventListener("dispose",o),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const v in d)e.update(d[v],t.ARRAY_BUFFER);const h=f.morphAttributes;for(const v in h){const g=h[v];for(let m=0,p=g.length;m<p;m++)e.update(g[m],t.ARRAY_BUFFER)}}function c(f){const d=[],h=f.index,v=f.attributes.position;let g=0;if(h!==null){const M=h.array;g=h.version;for(let x=0,T=M.length;x<T;x+=3){const L=M[x+0],E=M[x+1],b=M[x+2];d.push(L,E,E,b,b,L)}}else if(v!==void 0){const M=v.array;g=v.version;for(let x=0,T=M.length/3-1;x<T;x+=3){const L=x+0,E=x+1,b=x+2;d.push(L,E,E,b,b,L)}}else return;const m=new(Dv(d)?kv:Bv)(d,1);m.version=g;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function s1(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){t.drawElements(i,h,s,d*o),n.update(h,i,1)}function c(d,h,v){v!==0&&(t.drawElementsInstanced(i,h,s,d*o,v),n.update(h,i,v))}function u(d,h,v){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<v;m++)this.render(d[m]/o,h[m]);else{g.multiDrawElementsWEBGL(i,h,0,s,d,0,v);let m=0;for(let p=0;p<v;p++)m+=h[p];n.update(m,i,1)}}function f(d,h,v,g){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,h[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,g,0,v);let p=0;for(let M=0;M<v;M++)p+=h[M];for(let M=0;M<g.length;M++)n.update(p,i,g[M])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function o1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function a1(t,e,n){const i=new WeakMap,r=new Lt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let _=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",_)};var h=_;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let T=0;v===!0&&(T=1),g===!0&&(T=2),m===!0&&(T=3);let L=a.attributes.position.count*T,E=1;L>e.maxTextureSize&&(E=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const b=new Float32Array(L*E*4*f),D=new Uv(b,L,E,f);D.type=Li,D.needsUpdate=!0;const S=T*4;for(let N=0;N<f;N++){const I=p[N],R=M[N],k=x[N],q=L*E*4*N;for(let ee=0;ee<I.count;ee++){const ie=ee*S;v===!0&&(r.fromBufferAttribute(I,ee),b[q+ie+0]=r.x,b[q+ie+1]=r.y,b[q+ie+2]=r.z,b[q+ie+3]=0),g===!0&&(r.fromBufferAttribute(R,ee),b[q+ie+4]=r.x,b[q+ie+5]=r.y,b[q+ie+6]=r.z,b[q+ie+7]=0),m===!0&&(r.fromBufferAttribute(k,ee),b[q+ie+8]=r.x,b[q+ie+9]=r.y,b[q+ie+10]=r.z,b[q+ie+11]=k.itemSize===4?r.w:1)}}d={count:f,texture:D,size:new Qe(L,E)},i.set(a,d),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const g=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function l1(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Xv extends Jt{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Jr,u!==Jr&&u!==io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Jr&&(i=cs),i===void 0&&u===io&&(i=_o),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:xn,this.minFilter=l!==void 0?l:xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const $v=new Jt,qv=new Xv(1,1);qv.compareFunction=Iv;const Yv=new Uv,jv=new $T,Kv=new Hv,hp=[],pp=[],mp=new Float32Array(16),gp=new Float32Array(9),vp=new Float32Array(4);function _s(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=hp[r];if(s===void 0&&(s=new Float32Array(r),hp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function At(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function wt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function hl(t,e){let n=pp[e];n===void 0&&(n=new Int32Array(e),pp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function c1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function u1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2fv(this.addr,e),wt(n,e)}}function f1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(At(n,e))return;t.uniform3fv(this.addr,e),wt(n,e)}}function d1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4fv(this.addr,e),wt(n,e)}}function h1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),wt(n,e)}else{if(At(n,i))return;vp.set(i),t.uniformMatrix2fv(this.addr,!1,vp),wt(n,i)}}function p1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),wt(n,e)}else{if(At(n,i))return;gp.set(i),t.uniformMatrix3fv(this.addr,!1,gp),wt(n,i)}}function m1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),wt(n,e)}else{if(At(n,i))return;mp.set(i),t.uniformMatrix4fv(this.addr,!1,mp),wt(n,i)}}function g1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function v1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2iv(this.addr,e),wt(n,e)}}function _1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3iv(this.addr,e),wt(n,e)}}function y1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4iv(this.addr,e),wt(n,e)}}function x1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function S1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2uiv(this.addr,e),wt(n,e)}}function M1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3uiv(this.addr,e),wt(n,e)}}function b1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4uiv(this.addr,e),wt(n,e)}}function E1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?qv:$v;n.setTexture2D(e||s,r)}function T1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||jv,r)}function A1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Kv,r)}function w1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Yv,r)}function C1(t){switch(t){case 5126:return c1;case 35664:return u1;case 35665:return f1;case 35666:return d1;case 35674:return h1;case 35675:return p1;case 35676:return m1;case 5124:case 35670:return g1;case 35667:case 35671:return v1;case 35668:case 35672:return _1;case 35669:case 35673:return y1;case 5125:return x1;case 36294:return S1;case 36295:return M1;case 36296:return b1;case 35678:case 36198:case 36298:case 36306:case 35682:return E1;case 35679:case 36299:case 36307:return T1;case 35680:case 36300:case 36308:case 36293:return A1;case 36289:case 36303:case 36311:case 36292:return w1}}function R1(t,e){t.uniform1fv(this.addr,e)}function P1(t,e){const n=_s(e,this.size,2);t.uniform2fv(this.addr,n)}function L1(t,e){const n=_s(e,this.size,3);t.uniform3fv(this.addr,n)}function I1(t,e){const n=_s(e,this.size,4);t.uniform4fv(this.addr,n)}function D1(t,e){const n=_s(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function N1(t,e){const n=_s(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function U1(t,e){const n=_s(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function O1(t,e){t.uniform1iv(this.addr,e)}function F1(t,e){t.uniform2iv(this.addr,e)}function B1(t,e){t.uniform3iv(this.addr,e)}function k1(t,e){t.uniform4iv(this.addr,e)}function V1(t,e){t.uniform1uiv(this.addr,e)}function z1(t,e){t.uniform2uiv(this.addr,e)}function H1(t,e){t.uniform3uiv(this.addr,e)}function G1(t,e){t.uniform4uiv(this.addr,e)}function W1(t,e,n){const i=this.cache,r=e.length,s=hl(n,r);At(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||$v,s[o])}function X1(t,e,n){const i=this.cache,r=e.length,s=hl(n,r);At(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||jv,s[o])}function $1(t,e,n){const i=this.cache,r=e.length,s=hl(n,r);At(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Kv,s[o])}function q1(t,e,n){const i=this.cache,r=e.length,s=hl(n,r);At(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Yv,s[o])}function Y1(t){switch(t){case 5126:return R1;case 35664:return P1;case 35665:return L1;case 35666:return I1;case 35674:return D1;case 35675:return N1;case 35676:return U1;case 5124:case 35670:return O1;case 35667:case 35671:return F1;case 35668:case 35672:return B1;case 35669:case 35673:return k1;case 5125:return V1;case 36294:return z1;case 36295:return H1;case 36296:return G1;case 35678:case 36198:case 36298:case 36306:case 35682:return W1;case 35679:case 36299:case 36307:return X1;case 35680:case 36300:case 36308:case 36293:return $1;case 36289:case 36303:case 36311:case 36292:return q1}}class j1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=C1(n.type)}}class K1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Y1(n.type)}}class Z1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const vc=/(\w+)(\])?(\[|\.)?/g;function _p(t,e){t.seq.push(e),t.map[e.id]=e}function J1(t,e,n){const i=t.name,r=i.length;for(vc.lastIndex=0;;){const s=vc.exec(i),o=vc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){_p(n,c===void 0?new j1(a,t,e):new K1(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new Z1(a),_p(n,f)),n=f}}}class ma{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);J1(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function yp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Q1=37297;let eR=0;function tR(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function nR(t){const e=ot.getPrimaries(ot.workingColorSpace),n=ot.getPrimaries(t);let i;switch(e===n?i="":e===Ua&&n===Na?i="LinearDisplayP3ToLinearSRGB":e===Na&&n===Ua&&(i="LinearSRGBToLinearDisplayP3"),t){case $i:case fl:return[i,"LinearTransferOETF"];case Fn:case Ku:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function xp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+tR(t.getShaderSource(e),o)}else return r}function iR(t,e){const n=nR(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function rR(t,e){let n;switch(e){case uT:n="Linear";break;case fT:n="Reinhard";break;case dT:n="OptimizedCineon";break;case hT:n="ACESFilmic";break;case mT:n="AgX";break;case gT:n="Neutral";break;case pT:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function sR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Is).join(`
`)}function oR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function aR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Is(t){return t!==""}function Sp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lR=/^[ \t]*#include +<([\w\d./]+)>/gm;function iu(t){return t.replace(lR,uR)}const cR=new Map;function uR(t,e){let n=He[e];if(n===void 0){const i=cR.get(e);if(i!==void 0)n=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return iu(n)}const fR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bp(t){return t.replace(fR,dR)}function dR(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ep(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function hR(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Mv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===OE?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function pR(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case as:case ls:e="ENVMAP_TYPE_CUBE";break;case cl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mR(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ls:e="ENVMAP_MODE_REFRACTION";break}return e}function gR(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ju:e="ENVMAP_BLENDING_MULTIPLY";break;case lT:e="ENVMAP_BLENDING_MIX";break;case cT:e="ENVMAP_BLENDING_ADD";break}return e}function vR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function _R(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=hR(n),c=pR(n),u=mR(n),f=gR(n),d=vR(n),h=sR(n),v=oR(s),g=r.createProgram();let m,p,M=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Is).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Is).join(`
`),p.length>0&&(p+=`
`)):(m=[Ep(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),p=[Ep(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Oi?"#define TONE_MAPPING":"",n.toneMapping!==Oi?He.tonemapping_pars_fragment:"",n.toneMapping!==Oi?rR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,iR("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Is).join(`
`)),o=iu(o),o=Sp(o,n),o=Mp(o,n),a=iu(a),a=Sp(a,n),a=Mp(a,n),o=bp(o),a=bp(a),n.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===Vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=M+m+o,T=M+p+a,L=yp(r,r.VERTEX_SHADER,x),E=yp(r,r.FRAGMENT_SHADER,T);r.attachShader(g,L),r.attachShader(g,E),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function b(N){if(t.debug.checkShaderErrors){const I=r.getProgramInfoLog(g).trim(),R=r.getShaderInfoLog(L).trim(),k=r.getShaderInfoLog(E).trim();let q=!0,ee=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,L,E);else{const ie=xp(r,L,"vertex"),G=xp(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+I+`
`+ie+`
`+G)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(R===""||k==="")&&(ee=!1);ee&&(N.diagnostics={runnable:q,programLog:I,vertexShader:{log:R,prefix:m},fragmentShader:{log:k,prefix:p}})}r.deleteShader(L),r.deleteShader(E),D=new ma(r,g),S=aR(r,g)}let D;this.getUniforms=function(){return D===void 0&&b(this),D};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let _=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(g,Q1)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=eR++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=L,this.fragmentShader=E,this}let yR=0;class xR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new SR(e),n.set(e,i)),i}}class SR{constructor(e){this.id=yR++,this.code=e,this.usedTimes=0}}function MR(t,e,n,i,r,s,o){const a=new Ov,l=new xR,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let h=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,_,N,I,R){const k=I.fog,q=R.geometry,ee=S.isMeshStandardMaterial?I.environment:null,ie=(S.isMeshStandardMaterial?n:e).get(S.envMap||ee),G=ie&&ie.mapping===cl?ie.image.height:null,fe=v[S.type];S.precision!==null&&(h=r.getMaxPrecision(S.precision),h!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const me=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ve=me!==void 0?me.length:0;let Ae=0;q.morphAttributes.position!==void 0&&(Ae=1),q.morphAttributes.normal!==void 0&&(Ae=2),q.morphAttributes.color!==void 0&&(Ae=3);let $e,te,oe,ge;if(fe){const rt=Bn[fe];$e=rt.vertexShader,te=rt.fragmentShader}else $e=S.vertexShader,te=S.fragmentShader,l.update(S),oe=l.getVertexShaderID(S),ge=l.getFragmentShaderID(S);const B=t.getRenderTarget(),he=R.isInstancedMesh===!0,ae=R.isBatchedMesh===!0,U=!!S.map,Re=!!S.matcap,ye=!!ie,C=!!S.aoMap,P=!!S.lightMap,H=!!S.bumpMap,Y=!!S.normalMap,$=!!S.displacementMap,ce=!!S.emissiveMap,A=!!S.metalnessMap,y=!!S.roughnessMap,O=S.anisotropy>0,F=S.clearcoat>0,X=S.dispersion>0,Z=S.iridescence>0,ue=S.sheen>0,re=S.transmission>0,le=O&&!!S.anisotropyMap,be=F&&!!S.clearcoatMap,de=F&&!!S.clearcoatNormalMap,Me=F&&!!S.clearcoatRoughnessMap,Oe=Z&&!!S.iridescenceMap,Pe=Z&&!!S.iridescenceThicknessMap,Ee=ue&&!!S.sheenColorMap,Fe=ue&&!!S.sheenRoughnessMap,We=!!S.specularMap,qe=!!S.specularColorMap,Ie=!!S.specularIntensityMap,V=re&&!!S.transmissionMap,pe=re&&!!S.thicknessMap,se=!!S.gradientMap,xe=!!S.alphaMap,Te=S.alphaTest>0,tt=!!S.alphaHash,ct=!!S.extensions;let mt=Oi;S.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(mt=t.toneMapping);const Dt={shaderID:fe,shaderType:S.type,shaderName:S.name,vertexShader:$e,fragmentShader:te,defines:S.defines,customVertexShaderID:oe,customFragmentShaderID:ge,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:ae,instancing:he,instancingColor:he&&R.instanceColor!==null,instancingMorph:he&&R.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:B===null?t.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:$i,alphaToCoverage:!!S.alphaToCoverage,map:U,matcap:Re,envMap:ye,envMapMode:ye&&ie.mapping,envMapCubeUVHeight:G,aoMap:C,lightMap:P,bumpMap:H,normalMap:Y,displacementMap:d&&$,emissiveMap:ce,normalMapObjectSpace:Y&&S.normalMapType===PT,normalMapTangentSpace:Y&&S.normalMapType===Lv,metalnessMap:A,roughnessMap:y,anisotropy:O,anisotropyMap:le,clearcoat:F,clearcoatMap:be,clearcoatNormalMap:de,clearcoatRoughnessMap:Me,dispersion:X,iridescence:Z,iridescenceMap:Oe,iridescenceThicknessMap:Pe,sheen:ue,sheenColorMap:Ee,sheenRoughnessMap:Fe,specularMap:We,specularColorMap:qe,specularIntensityMap:Ie,transmission:re,transmissionMap:V,thicknessMap:pe,gradientMap:se,opaque:S.transparent===!1&&S.blending===Zr&&S.alphaToCoverage===!1,alphaMap:xe,alphaTest:Te,alphaHash:tt,combine:S.combine,mapUv:U&&g(S.map.channel),aoMapUv:C&&g(S.aoMap.channel),lightMapUv:P&&g(S.lightMap.channel),bumpMapUv:H&&g(S.bumpMap.channel),normalMapUv:Y&&g(S.normalMap.channel),displacementMapUv:$&&g(S.displacementMap.channel),emissiveMapUv:ce&&g(S.emissiveMap.channel),metalnessMapUv:A&&g(S.metalnessMap.channel),roughnessMapUv:y&&g(S.roughnessMap.channel),anisotropyMapUv:le&&g(S.anisotropyMap.channel),clearcoatMapUv:be&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:de&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&g(S.sheenRoughnessMap.channel),specularMapUv:We&&g(S.specularMap.channel),specularColorMapUv:qe&&g(S.specularColorMap.channel),specularIntensityMapUv:Ie&&g(S.specularIntensityMap.channel),transmissionMapUv:V&&g(S.transmissionMap.channel),thicknessMapUv:pe&&g(S.thicknessMap.channel),alphaMapUv:xe&&g(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Y||O),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!q.attributes.uv&&(U||xe),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:R.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Ae,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:mt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:U&&S.map.isVideoTexture===!0&&ot.getTransfer(S.map.colorSpace)===ut,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ri,flipSided:S.side===Zt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ct&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ct&&S.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Dt.vertexUv1s=c.has(1),Dt.vertexUv2s=c.has(2),Dt.vertexUv3s=c.has(3),c.clear(),Dt}function p(S){const _=[];if(S.shaderID?_.push(S.shaderID):(_.push(S.customVertexShaderID),_.push(S.customFragmentShaderID)),S.defines!==void 0)for(const N in S.defines)_.push(N),_.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(M(_,S),x(_,S),_.push(t.outputColorSpace)),_.push(S.customProgramCacheKey),_.join()}function M(S,_){S.push(_.precision),S.push(_.outputColorSpace),S.push(_.envMapMode),S.push(_.envMapCubeUVHeight),S.push(_.mapUv),S.push(_.alphaMapUv),S.push(_.lightMapUv),S.push(_.aoMapUv),S.push(_.bumpMapUv),S.push(_.normalMapUv),S.push(_.displacementMapUv),S.push(_.emissiveMapUv),S.push(_.metalnessMapUv),S.push(_.roughnessMapUv),S.push(_.anisotropyMapUv),S.push(_.clearcoatMapUv),S.push(_.clearcoatNormalMapUv),S.push(_.clearcoatRoughnessMapUv),S.push(_.iridescenceMapUv),S.push(_.iridescenceThicknessMapUv),S.push(_.sheenColorMapUv),S.push(_.sheenRoughnessMapUv),S.push(_.specularMapUv),S.push(_.specularColorMapUv),S.push(_.specularIntensityMapUv),S.push(_.transmissionMapUv),S.push(_.thicknessMapUv),S.push(_.combine),S.push(_.fogExp2),S.push(_.sizeAttenuation),S.push(_.morphTargetsCount),S.push(_.morphAttributeCount),S.push(_.numDirLights),S.push(_.numPointLights),S.push(_.numSpotLights),S.push(_.numSpotLightMaps),S.push(_.numHemiLights),S.push(_.numRectAreaLights),S.push(_.numDirLightShadows),S.push(_.numPointLightShadows),S.push(_.numSpotLightShadows),S.push(_.numSpotLightShadowsWithMaps),S.push(_.numLightProbes),S.push(_.shadowMapType),S.push(_.toneMapping),S.push(_.numClippingPlanes),S.push(_.numClipIntersection),S.push(_.depthPacking)}function x(S,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),S.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.skinning&&a.enable(4),_.morphTargets&&a.enable(5),_.morphNormals&&a.enable(6),_.morphColors&&a.enable(7),_.premultipliedAlpha&&a.enable(8),_.shadowMapEnabled&&a.enable(9),_.useLegacyLights&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.alphaToCoverage&&a.enable(20),S.push(a.mask)}function T(S){const _=v[S.type];let N;if(_){const I=Bn[_];N=sA.clone(I.uniforms)}else N=S.uniforms;return N}function L(S,_){let N;for(let I=0,R=u.length;I<R;I++){const k=u[I];if(k.cacheKey===_){N=k,++N.usedTimes;break}}return N===void 0&&(N=new _R(t,_,S,s),u.push(N)),N}function E(S){if(--S.usedTimes===0){const _=u.indexOf(S);u[_]=u[u.length-1],u.pop(),S.destroy()}}function b(S){l.remove(S)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:T,acquireProgram:L,releaseProgram:E,releaseShaderCache:b,programs:u,dispose:D}}function bR(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function ER(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Tp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ap(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,h,v,g,m){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:v,renderOrder:f.renderOrder,z:g,group:m},t[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=v,p.renderOrder=f.renderOrder,p.z=g,p.group=m),e++,p}function a(f,d,h,v,g,m){const p=o(f,d,h,v,g,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):n.push(p)}function l(f,d,h,v,g,m){const p=o(f,d,h,v,g,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):n.unshift(p)}function c(f,d){n.length>1&&n.sort(f||ER),i.length>1&&i.sort(d||Tp),r.length>1&&r.sort(d||Tp)}function u(){for(let f=e,d=t.length;f<d;f++){const h=t[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function TR(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Ap,t.set(i,[o])):r>=s.length?(o=new Ap,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function AR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new J,color:new Ze};break;case"SpotLight":n={position:new J,direction:new J,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new J,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new J,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new J,halfWidth:new J,halfHeight:new J};break}return t[e.id]=n,n}}}function wR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let CR=0;function RR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function PR(t){const e=new AR,n=wR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new J);const r=new J,s=new Tt,o=new Tt;function a(c,u){let f=0,d=0,h=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let v=0,g=0,m=0,p=0,M=0,x=0,T=0,L=0,E=0,b=0,D=0;c.sort(RR);const S=u===!0?Math.PI:1;for(let N=0,I=c.length;N<I;N++){const R=c[N],k=R.color,q=R.intensity,ee=R.distance,ie=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)f+=k.r*q*S,d+=k.g*q*S,h+=k.b*q*S;else if(R.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(R.sh.coefficients[G],q);D++}else if(R.isDirectionalLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity*S),R.castShadow){const fe=R.shadow,me=n.get(R);me.shadowBias=fe.bias,me.shadowNormalBias=fe.normalBias,me.shadowRadius=fe.radius,me.shadowMapSize=fe.mapSize,i.directionalShadow[v]=me,i.directionalShadowMap[v]=ie,i.directionalShadowMatrix[v]=R.shadow.matrix,x++}i.directional[v]=G,v++}else if(R.isSpotLight){const G=e.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(k).multiplyScalar(q*S),G.distance=ee,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,i.spot[m]=G;const fe=R.shadow;if(R.map&&(i.spotLightMap[E]=R.map,E++,fe.updateMatrices(R),R.castShadow&&b++),i.spotLightMatrix[m]=fe.matrix,R.castShadow){const me=n.get(R);me.shadowBias=fe.bias,me.shadowNormalBias=fe.normalBias,me.shadowRadius=fe.radius,me.shadowMapSize=fe.mapSize,i.spotShadow[m]=me,i.spotShadowMap[m]=ie,L++}m++}else if(R.isRectAreaLight){const G=e.get(R);G.color.copy(k).multiplyScalar(q),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),i.rectArea[p]=G,p++}else if(R.isPointLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity*S),G.distance=R.distance,G.decay=R.decay,R.castShadow){const fe=R.shadow,me=n.get(R);me.shadowBias=fe.bias,me.shadowNormalBias=fe.normalBias,me.shadowRadius=fe.radius,me.shadowMapSize=fe.mapSize,me.shadowCameraNear=fe.camera.near,me.shadowCameraFar=fe.camera.far,i.pointShadow[g]=me,i.pointShadowMap[g]=ie,i.pointShadowMatrix[g]=R.shadow.matrix,T++}i.point[g]=G,g++}else if(R.isHemisphereLight){const G=e.get(R);G.skyColor.copy(R.color).multiplyScalar(q*S),G.groundColor.copy(R.groundColor).multiplyScalar(q*S),i.hemi[M]=G,M++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;const _=i.hash;(_.directionalLength!==v||_.pointLength!==g||_.spotLength!==m||_.rectAreaLength!==p||_.hemiLength!==M||_.numDirectionalShadows!==x||_.numPointShadows!==T||_.numSpotShadows!==L||_.numSpotMaps!==E||_.numLightProbes!==D)&&(i.directional.length=v,i.spot.length=m,i.rectArea.length=p,i.point.length=g,i.hemi.length=M,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=L+E-b,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=D,_.directionalLength=v,_.pointLength=g,_.spotLength=m,_.rectAreaLength=p,_.hemiLength=M,_.numDirectionalShadows=x,_.numPointShadows=T,_.numSpotShadows=L,_.numSpotMaps=E,_.numLightProbes=D,i.version=CR++)}function l(c,u){let f=0,d=0,h=0,v=0,g=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const x=c[p];if(x.isDirectionalLight){const T=i.directional[f];T.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),f++}else if(x.isSpotLight){const T=i.spot[h];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),h++}else if(x.isRectAreaLight){const T=i.rectArea[v];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),T.halfWidth.set(x.width*.5,0,0),T.halfHeight.set(0,x.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const T=i.point[d];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const T=i.hemi[g];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function wp(t){const e=new PR(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(u){e.setup(n,u)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function LR(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new wp(t),e.set(r,[a])):s>=o.length?(a=new wp(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class IR extends Mo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=CT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class DR extends Mo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const NR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UR=`uniform sampler2D shadow_pass;
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
}`;function OR(t,e,n){let i=new Gv;const r=new Qe,s=new Qe,o=new Lt,a=new IR({depthPacking:RT}),l=new DR,c={},u=n.maxTextureSize,f={[ki]:Zt,[Zt]:ki,[ri]:ri},d=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:NR,fragmentShader:UR}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const v=new di;v.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Pn(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mv;let p=this.type;this.render=function(E,b,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const S=t.getRenderTarget(),_=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),I=t.state;I.setBlending(Ui),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const R=p!==ii&&this.type===ii,k=p===ii&&this.type!==ii;for(let q=0,ee=E.length;q<ee;q++){const ie=E[q],G=ie.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const fe=G.getFrameExtents();if(r.multiply(fe),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/fe.x),r.x=s.x*fe.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/fe.y),r.y=s.y*fe.y,G.mapSize.y=s.y)),G.map===null||R===!0||k===!0){const ve=this.type!==ii?{minFilter:xn,magFilter:xn}:{};G.map!==null&&G.map.dispose(),G.map=new xr(r.x,r.y,ve),G.map.texture.name=ie.name+".shadowMap",G.camera.updateProjectionMatrix()}t.setRenderTarget(G.map),t.clear();const me=G.getViewportCount();for(let ve=0;ve<me;ve++){const Ae=G.getViewport(ve);o.set(s.x*Ae.x,s.y*Ae.y,s.x*Ae.z,s.y*Ae.w),I.viewport(o),G.updateMatrices(ie,ve),i=G.getFrustum(),T(b,D,G.camera,ie,this.type)}G.isPointLightShadow!==!0&&this.type===ii&&M(G,D),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(S,_,N)};function M(E,b){const D=e.update(g);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,h.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new xr(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(b,null,D,d,g,null),h.uniforms.shadow_pass.value=E.mapPass.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(b,null,D,h,g,null)}function x(E,b,D,S){let _=null;const N=D.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)_=N;else if(_=D.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const I=_.uuid,R=b.uuid;let k=c[I];k===void 0&&(k={},c[I]=k);let q=k[R];q===void 0&&(q=_.clone(),k[R]=q,b.addEventListener("dispose",L)),_=q}if(_.visible=b.visible,_.wireframe=b.wireframe,S===ii?_.side=b.shadowSide!==null?b.shadowSide:b.side:_.side=b.shadowSide!==null?b.shadowSide:f[b.side],_.alphaMap=b.alphaMap,_.alphaTest=b.alphaTest,_.map=b.map,_.clipShadows=b.clipShadows,_.clippingPlanes=b.clippingPlanes,_.clipIntersection=b.clipIntersection,_.displacementMap=b.displacementMap,_.displacementScale=b.displacementScale,_.displacementBias=b.displacementBias,_.wireframeLinewidth=b.wireframeLinewidth,_.linewidth=b.linewidth,D.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const I=t.properties.get(_);I.light=D}return _}function T(E,b,D,S,_){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&_===ii)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,E.matrixWorld);const R=e.update(E),k=E.material;if(Array.isArray(k)){const q=R.groups;for(let ee=0,ie=q.length;ee<ie;ee++){const G=q[ee],fe=k[G.materialIndex];if(fe&&fe.visible){const me=x(E,fe,S,_);E.onBeforeShadow(t,E,b,D,R,me,G),t.renderBufferDirect(D,null,R,me,E,G),E.onAfterShadow(t,E,b,D,R,me,G)}}}else if(k.visible){const q=x(E,k,S,_);E.onBeforeShadow(t,E,b,D,R,q,null),t.renderBufferDirect(D,null,R,q,E,null),E.onAfterShadow(t,E,b,D,R,q,null)}}const I=E.children;for(let R=0,k=I.length;R<k;R++)T(I[R],b,D,S,_)}function L(E){E.target.removeEventListener("dispose",L);for(const D in c){const S=c[D],_=E.target.uuid;_ in S&&(S[_].dispose(),delete S[_])}}}function FR(t){function e(){let V=!1;const pe=new Lt;let se=null;const xe=new Lt(0,0,0,0);return{setMask:function(Te){se!==Te&&!V&&(t.colorMask(Te,Te,Te,Te),se=Te)},setLocked:function(Te){V=Te},setClear:function(Te,tt,ct,mt,Dt){Dt===!0&&(Te*=mt,tt*=mt,ct*=mt),pe.set(Te,tt,ct,mt),xe.equals(pe)===!1&&(t.clearColor(Te,tt,ct,mt),xe.copy(pe))},reset:function(){V=!1,se=null,xe.set(-1,0,0,0)}}}function n(){let V=!1,pe=null,se=null,xe=null;return{setTest:function(Te){Te?ge(t.DEPTH_TEST):B(t.DEPTH_TEST)},setMask:function(Te){pe!==Te&&!V&&(t.depthMask(Te),pe=Te)},setFunc:function(Te){if(se!==Te){switch(Te){case tT:t.depthFunc(t.NEVER);break;case nT:t.depthFunc(t.ALWAYS);break;case iT:t.depthFunc(t.LESS);break;case Ia:t.depthFunc(t.LEQUAL);break;case rT:t.depthFunc(t.EQUAL);break;case sT:t.depthFunc(t.GEQUAL);break;case oT:t.depthFunc(t.GREATER);break;case aT:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}se=Te}},setLocked:function(Te){V=Te},setClear:function(Te){xe!==Te&&(t.clearDepth(Te),xe=Te)},reset:function(){V=!1,pe=null,se=null,xe=null}}}function i(){let V=!1,pe=null,se=null,xe=null,Te=null,tt=null,ct=null,mt=null,Dt=null;return{setTest:function(rt){V||(rt?ge(t.STENCIL_TEST):B(t.STENCIL_TEST))},setMask:function(rt){pe!==rt&&!V&&(t.stencilMask(rt),pe=rt)},setFunc:function(rt,Un,Ht){(se!==rt||xe!==Un||Te!==Ht)&&(t.stencilFunc(rt,Un,Ht),se=rt,xe=Un,Te=Ht)},setOp:function(rt,Un,Ht){(tt!==rt||ct!==Un||mt!==Ht)&&(t.stencilOp(rt,Un,Ht),tt=rt,ct=Un,mt=Ht)},setLocked:function(rt){V=rt},setClear:function(rt){Dt!==rt&&(t.clearStencil(rt),Dt=rt)},reset:function(){V=!1,pe=null,se=null,xe=null,Te=null,tt=null,ct=null,mt=null,Dt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,d=[],h=null,v=!1,g=null,m=null,p=null,M=null,x=null,T=null,L=null,E=new Ze(0,0,0),b=0,D=!1,S=null,_=null,N=null,I=null,R=null;const k=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ee=0;const ie=t.getParameter(t.VERSION);ie.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(ie)[1]),q=ee>=1):ie.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),q=ee>=2);let G=null,fe={};const me=t.getParameter(t.SCISSOR_BOX),ve=t.getParameter(t.VIEWPORT),Ae=new Lt().fromArray(me),$e=new Lt().fromArray(ve);function te(V,pe,se,xe){const Te=new Uint8Array(4),tt=t.createTexture();t.bindTexture(V,tt),t.texParameteri(V,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(V,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ct=0;ct<se;ct++)V===t.TEXTURE_3D||V===t.TEXTURE_2D_ARRAY?t.texImage3D(pe,0,t.RGBA,1,1,xe,0,t.RGBA,t.UNSIGNED_BYTE,Te):t.texImage2D(pe+ct,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Te);return tt}const oe={};oe[t.TEXTURE_2D]=te(t.TEXTURE_2D,t.TEXTURE_2D,1),oe[t.TEXTURE_CUBE_MAP]=te(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[t.TEXTURE_2D_ARRAY]=te(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),oe[t.TEXTURE_3D]=te(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ge(t.DEPTH_TEST),s.setFunc(Ia),H(!1),Y(lh),ge(t.CULL_FACE),C(Ui);function ge(V){c[V]!==!0&&(t.enable(V),c[V]=!0)}function B(V){c[V]!==!1&&(t.disable(V),c[V]=!1)}function he(V,pe){return u[V]!==pe?(t.bindFramebuffer(V,pe),u[V]=pe,V===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=pe),V===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=pe),!0):!1}function ae(V,pe){let se=d,xe=!1;if(V){se=f.get(pe),se===void 0&&(se=[],f.set(pe,se));const Te=V.textures;if(se.length!==Te.length||se[0]!==t.COLOR_ATTACHMENT0){for(let tt=0,ct=Te.length;tt<ct;tt++)se[tt]=t.COLOR_ATTACHMENT0+tt;se.length=Te.length,xe=!0}}else se[0]!==t.BACK&&(se[0]=t.BACK,xe=!0);xe&&t.drawBuffers(se)}function U(V){return h!==V?(t.useProgram(V),h=V,!0):!1}const Re={[ar]:t.FUNC_ADD,[BE]:t.FUNC_SUBTRACT,[kE]:t.FUNC_REVERSE_SUBTRACT};Re[VE]=t.MIN,Re[zE]=t.MAX;const ye={[HE]:t.ZERO,[GE]:t.ONE,[WE]:t.SRC_COLOR,[Kc]:t.SRC_ALPHA,[KE]:t.SRC_ALPHA_SATURATE,[YE]:t.DST_COLOR,[$E]:t.DST_ALPHA,[XE]:t.ONE_MINUS_SRC_COLOR,[Zc]:t.ONE_MINUS_SRC_ALPHA,[jE]:t.ONE_MINUS_DST_COLOR,[qE]:t.ONE_MINUS_DST_ALPHA,[ZE]:t.CONSTANT_COLOR,[JE]:t.ONE_MINUS_CONSTANT_COLOR,[QE]:t.CONSTANT_ALPHA,[eT]:t.ONE_MINUS_CONSTANT_ALPHA};function C(V,pe,se,xe,Te,tt,ct,mt,Dt,rt){if(V===Ui){v===!0&&(B(t.BLEND),v=!1);return}if(v===!1&&(ge(t.BLEND),v=!0),V!==FE){if(V!==g||rt!==D){if((m!==ar||x!==ar)&&(t.blendEquation(t.FUNC_ADD),m=ar,x=ar),rt)switch(V){case Zr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ch:t.blendFunc(t.ONE,t.ONE);break;case uh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case fh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Zr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ch:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case uh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case fh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}p=null,M=null,T=null,L=null,E.set(0,0,0),b=0,g=V,D=rt}return}Te=Te||pe,tt=tt||se,ct=ct||xe,(pe!==m||Te!==x)&&(t.blendEquationSeparate(Re[pe],Re[Te]),m=pe,x=Te),(se!==p||xe!==M||tt!==T||ct!==L)&&(t.blendFuncSeparate(ye[se],ye[xe],ye[tt],ye[ct]),p=se,M=xe,T=tt,L=ct),(mt.equals(E)===!1||Dt!==b)&&(t.blendColor(mt.r,mt.g,mt.b,Dt),E.copy(mt),b=Dt),g=V,D=!1}function P(V,pe){V.side===ri?B(t.CULL_FACE):ge(t.CULL_FACE);let se=V.side===Zt;pe&&(se=!se),H(se),V.blending===Zr&&V.transparent===!1?C(Ui):C(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),s.setFunc(V.depthFunc),s.setTest(V.depthTest),s.setMask(V.depthWrite),r.setMask(V.colorWrite);const xe=V.stencilWrite;o.setTest(xe),xe&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ce(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ge(t.SAMPLE_ALPHA_TO_COVERAGE):B(t.SAMPLE_ALPHA_TO_COVERAGE)}function H(V){S!==V&&(V?t.frontFace(t.CW):t.frontFace(t.CCW),S=V)}function Y(V){V!==NE?(ge(t.CULL_FACE),V!==_&&(V===lh?t.cullFace(t.BACK):V===UE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):B(t.CULL_FACE),_=V}function $(V){V!==N&&(q&&t.lineWidth(V),N=V)}function ce(V,pe,se){V?(ge(t.POLYGON_OFFSET_FILL),(I!==pe||R!==se)&&(t.polygonOffset(pe,se),I=pe,R=se)):B(t.POLYGON_OFFSET_FILL)}function A(V){V?ge(t.SCISSOR_TEST):B(t.SCISSOR_TEST)}function y(V){V===void 0&&(V=t.TEXTURE0+k-1),G!==V&&(t.activeTexture(V),G=V)}function O(V,pe,se){se===void 0&&(G===null?se=t.TEXTURE0+k-1:se=G);let xe=fe[se];xe===void 0&&(xe={type:void 0,texture:void 0},fe[se]=xe),(xe.type!==V||xe.texture!==pe)&&(G!==se&&(t.activeTexture(se),G=se),t.bindTexture(V,pe||oe[V]),xe.type=V,xe.texture=pe)}function F(){const V=fe[G];V!==void 0&&V.type!==void 0&&(t.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function X(){try{t.compressedTexImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Z(){try{t.compressedTexImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ue(){try{t.texSubImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function re(){try{t.texSubImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function le(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function be(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function de(){try{t.texStorage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Me(){try{t.texStorage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Oe(){try{t.texImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pe(){try{t.texImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ee(V){Ae.equals(V)===!1&&(t.scissor(V.x,V.y,V.z,V.w),Ae.copy(V))}function Fe(V){$e.equals(V)===!1&&(t.viewport(V.x,V.y,V.z,V.w),$e.copy(V))}function We(V,pe){let se=l.get(pe);se===void 0&&(se=new WeakMap,l.set(pe,se));let xe=se.get(V);xe===void 0&&(xe=t.getUniformBlockIndex(pe,V.name),se.set(V,xe))}function qe(V,pe){const xe=l.get(pe).get(V);a.get(pe)!==xe&&(t.uniformBlockBinding(pe,xe,V.__bindingPointIndex),a.set(pe,xe))}function Ie(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},G=null,fe={},u={},f=new WeakMap,d=[],h=null,v=!1,g=null,m=null,p=null,M=null,x=null,T=null,L=null,E=new Ze(0,0,0),b=0,D=!1,S=null,_=null,N=null,I=null,R=null,Ae.set(0,0,t.canvas.width,t.canvas.height),$e.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ge,disable:B,bindFramebuffer:he,drawBuffers:ae,useProgram:U,setBlending:C,setMaterial:P,setFlipSided:H,setCullFace:Y,setLineWidth:$,setPolygonOffset:ce,setScissorTest:A,activeTexture:y,bindTexture:O,unbindTexture:F,compressedTexImage2D:X,compressedTexImage3D:Z,texImage2D:Oe,texImage3D:Pe,updateUBOMapping:We,uniformBlockBinding:qe,texStorage2D:de,texStorage3D:Me,texSubImage2D:ue,texSubImage3D:re,compressedTexSubImage2D:le,compressedTexSubImage3D:be,scissor:Ee,viewport:Fe,reset:Ie}}function BR(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qe,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,y){return h?new OffscreenCanvas(A,y):Fa("canvas")}function g(A,y,O){let F=1;const X=ce(A);if((X.width>O||X.height>O)&&(F=O/Math.max(X.width,X.height)),F<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Z=Math.floor(F*X.width),ue=Math.floor(F*X.height);f===void 0&&(f=v(Z,ue));const re=y?v(Z,ue):f;return re.width=Z,re.height=ue,re.getContext("2d").drawImage(A,0,0,Z,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+Z+"x"+ue+")."),re}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==xn&&A.minFilter!==Rn}function p(A){t.generateMipmap(A)}function M(A,y,O,F,X=!1){if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Z=y;if(y===t.RED&&(O===t.FLOAT&&(Z=t.R32F),O===t.HALF_FLOAT&&(Z=t.R16F),O===t.UNSIGNED_BYTE&&(Z=t.R8)),y===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(Z=t.R8UI),O===t.UNSIGNED_SHORT&&(Z=t.R16UI),O===t.UNSIGNED_INT&&(Z=t.R32UI),O===t.BYTE&&(Z=t.R8I),O===t.SHORT&&(Z=t.R16I),O===t.INT&&(Z=t.R32I)),y===t.RG&&(O===t.FLOAT&&(Z=t.RG32F),O===t.HALF_FLOAT&&(Z=t.RG16F),O===t.UNSIGNED_BYTE&&(Z=t.RG8)),y===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(Z=t.RG8UI),O===t.UNSIGNED_SHORT&&(Z=t.RG16UI),O===t.UNSIGNED_INT&&(Z=t.RG32UI),O===t.BYTE&&(Z=t.RG8I),O===t.SHORT&&(Z=t.RG16I),O===t.INT&&(Z=t.RG32I)),y===t.RGB&&O===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),y===t.RGBA){const ue=X?Da:ot.getTransfer(F);O===t.FLOAT&&(Z=t.RGBA32F),O===t.HALF_FLOAT&&(Z=t.RGBA16F),O===t.UNSIGNED_BYTE&&(Z=ue===ut?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function x(A,y){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==xn&&A.minFilter!==Rn?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function T(A){const y=A.target;y.removeEventListener("dispose",T),E(y),y.isVideoTexture&&u.delete(y)}function L(A){const y=A.target;y.removeEventListener("dispose",L),D(y)}function E(A){const y=i.get(A);if(y.__webglInit===void 0)return;const O=A.source,F=d.get(O);if(F){const X=F[y.__cacheKey];X.usedTimes--,X.usedTimes===0&&b(A),Object.keys(F).length===0&&d.delete(O)}i.remove(A)}function b(A){const y=i.get(A);t.deleteTexture(y.__webglTexture);const O=A.source,F=d.get(O);delete F[y.__cacheKey],o.memory.textures--}function D(A){const y=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(y.__webglFramebuffer[F]))for(let X=0;X<y.__webglFramebuffer[F].length;X++)t.deleteFramebuffer(y.__webglFramebuffer[F][X]);else t.deleteFramebuffer(y.__webglFramebuffer[F]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[F])}else{if(Array.isArray(y.__webglFramebuffer))for(let F=0;F<y.__webglFramebuffer.length;F++)t.deleteFramebuffer(y.__webglFramebuffer[F]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let F=0;F<y.__webglColorRenderbuffer.length;F++)y.__webglColorRenderbuffer[F]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[F]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=A.textures;for(let F=0,X=O.length;F<X;F++){const Z=i.get(O[F]);Z.__webglTexture&&(t.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(O[F])}i.remove(A)}let S=0;function _(){S=0}function N(){const A=S;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),S+=1,A}function I(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function R(A,y){const O=i.get(A);if(A.isVideoTexture&&Y(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){const F=A.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(O,A,y);return}}n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+y)}function k(A,y){const O=i.get(A);if(A.version>0&&O.__version!==A.version){Ae(O,A,y);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+y)}function q(A,y){const O=i.get(A);if(A.version>0&&O.__version!==A.version){Ae(O,A,y);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+y)}function ee(A,y){const O=i.get(A);if(A.version>0&&O.__version!==A.version){$e(O,A,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+y)}const ie={[eu]:t.REPEAT,[ur]:t.CLAMP_TO_EDGE,[tu]:t.MIRRORED_REPEAT},G={[xn]:t.NEAREST,[vT]:t.NEAREST_MIPMAP_NEAREST,[Fo]:t.NEAREST_MIPMAP_LINEAR,[Rn]:t.LINEAR,[Vl]:t.LINEAR_MIPMAP_NEAREST,[fr]:t.LINEAR_MIPMAP_LINEAR},fe={[LT]:t.NEVER,[FT]:t.ALWAYS,[IT]:t.LESS,[Iv]:t.LEQUAL,[DT]:t.EQUAL,[OT]:t.GEQUAL,[NT]:t.GREATER,[UT]:t.NOTEQUAL};function me(A,y){if(y.type===Li&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Rn||y.magFilter===Vl||y.magFilter===Fo||y.magFilter===fr||y.minFilter===Rn||y.minFilter===Vl||y.minFilter===Fo||y.minFilter===fr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,ie[y.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,ie[y.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,ie[y.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,G[y.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,G[y.minFilter]),y.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,fe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===xn||y.minFilter!==Fo&&y.minFilter!==fr||y.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ve(A,y){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",T));const F=y.source;let X=d.get(F);X===void 0&&(X={},d.set(F,X));const Z=I(y);if(Z!==A.__cacheKey){X[Z]===void 0&&(X[Z]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,O=!0),X[Z].usedTimes++;const ue=X[A.__cacheKey];ue!==void 0&&(X[A.__cacheKey].usedTimes--,ue.usedTimes===0&&b(y)),A.__cacheKey=Z,A.__webglTexture=X[Z].texture}return O}function Ae(A,y,O){let F=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(F=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(F=t.TEXTURE_3D);const X=ve(A,y),Z=y.source;n.bindTexture(F,A.__webglTexture,t.TEXTURE0+O);const ue=i.get(Z);if(Z.version!==ue.__version||X===!0){n.activeTexture(t.TEXTURE0+O);const re=ot.getPrimaries(ot.workingColorSpace),le=y.colorSpace===Ri?null:ot.getPrimaries(y.colorSpace),be=y.colorSpace===Ri||re===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let de=g(y.image,!1,r.maxTextureSize);de=$(y,de);const Me=s.convert(y.format,y.colorSpace),Oe=s.convert(y.type);let Pe=M(y.internalFormat,Me,Oe,y.colorSpace,y.isVideoTexture);me(F,y);let Ee;const Fe=y.mipmaps,We=y.isVideoTexture!==!0,qe=ue.__version===void 0||X===!0,Ie=Z.dataReady,V=x(y,de);if(y.isDepthTexture)Pe=t.DEPTH_COMPONENT16,y.type===Li?Pe=t.DEPTH_COMPONENT32F:y.type===cs?Pe=t.DEPTH_COMPONENT24:y.type===_o&&(Pe=t.DEPTH24_STENCIL8),qe&&(We?n.texStorage2D(t.TEXTURE_2D,1,Pe,de.width,de.height):n.texImage2D(t.TEXTURE_2D,0,Pe,de.width,de.height,0,Me,Oe,null));else if(y.isDataTexture)if(Fe.length>0){We&&qe&&n.texStorage2D(t.TEXTURE_2D,V,Pe,Fe[0].width,Fe[0].height);for(let pe=0,se=Fe.length;pe<se;pe++)Ee=Fe[pe],We?Ie&&n.texSubImage2D(t.TEXTURE_2D,pe,0,0,Ee.width,Ee.height,Me,Oe,Ee.data):n.texImage2D(t.TEXTURE_2D,pe,Pe,Ee.width,Ee.height,0,Me,Oe,Ee.data);y.generateMipmaps=!1}else We?(qe&&n.texStorage2D(t.TEXTURE_2D,V,Pe,de.width,de.height),Ie&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,de.width,de.height,Me,Oe,de.data)):n.texImage2D(t.TEXTURE_2D,0,Pe,de.width,de.height,0,Me,Oe,de.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){We&&qe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,V,Pe,Fe[0].width,Fe[0].height,de.depth);for(let pe=0,se=Fe.length;pe<se;pe++)Ee=Fe[pe],y.format!==Gn?Me!==null?We?Ie&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,pe,0,0,0,Ee.width,Ee.height,de.depth,Me,Ee.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,pe,Pe,Ee.width,Ee.height,de.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?Ie&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,pe,0,0,0,Ee.width,Ee.height,de.depth,Me,Oe,Ee.data):n.texImage3D(t.TEXTURE_2D_ARRAY,pe,Pe,Ee.width,Ee.height,de.depth,0,Me,Oe,Ee.data)}else{We&&qe&&n.texStorage2D(t.TEXTURE_2D,V,Pe,Fe[0].width,Fe[0].height);for(let pe=0,se=Fe.length;pe<se;pe++)Ee=Fe[pe],y.format!==Gn?Me!==null?We?Ie&&n.compressedTexSubImage2D(t.TEXTURE_2D,pe,0,0,Ee.width,Ee.height,Me,Ee.data):n.compressedTexImage2D(t.TEXTURE_2D,pe,Pe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?Ie&&n.texSubImage2D(t.TEXTURE_2D,pe,0,0,Ee.width,Ee.height,Me,Oe,Ee.data):n.texImage2D(t.TEXTURE_2D,pe,Pe,Ee.width,Ee.height,0,Me,Oe,Ee.data)}else if(y.isDataArrayTexture)We?(qe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,V,Pe,de.width,de.height,de.depth),Ie&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Me,Oe,de.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,de.width,de.height,de.depth,0,Me,Oe,de.data);else if(y.isData3DTexture)We?(qe&&n.texStorage3D(t.TEXTURE_3D,V,Pe,de.width,de.height,de.depth),Ie&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Me,Oe,de.data)):n.texImage3D(t.TEXTURE_3D,0,Pe,de.width,de.height,de.depth,0,Me,Oe,de.data);else if(y.isFramebufferTexture){if(qe)if(We)n.texStorage2D(t.TEXTURE_2D,V,Pe,de.width,de.height);else{let pe=de.width,se=de.height;for(let xe=0;xe<V;xe++)n.texImage2D(t.TEXTURE_2D,xe,Pe,pe,se,0,Me,Oe,null),pe>>=1,se>>=1}}else if(Fe.length>0){if(We&&qe){const pe=ce(Fe[0]);n.texStorage2D(t.TEXTURE_2D,V,Pe,pe.width,pe.height)}for(let pe=0,se=Fe.length;pe<se;pe++)Ee=Fe[pe],We?Ie&&n.texSubImage2D(t.TEXTURE_2D,pe,0,0,Me,Oe,Ee):n.texImage2D(t.TEXTURE_2D,pe,Pe,Me,Oe,Ee);y.generateMipmaps=!1}else if(We){if(qe){const pe=ce(de);n.texStorage2D(t.TEXTURE_2D,V,Pe,pe.width,pe.height)}Ie&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Me,Oe,de)}else n.texImage2D(t.TEXTURE_2D,0,Pe,Me,Oe,de);m(y)&&p(F),ue.__version=Z.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function $e(A,y,O){if(y.image.length!==6)return;const F=ve(A,y),X=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+O);const Z=i.get(X);if(X.version!==Z.__version||F===!0){n.activeTexture(t.TEXTURE0+O);const ue=ot.getPrimaries(ot.workingColorSpace),re=y.colorSpace===Ri?null:ot.getPrimaries(y.colorSpace),le=y.colorSpace===Ri||ue===re?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const be=y.isCompressedTexture||y.image[0].isCompressedTexture,de=y.image[0]&&y.image[0].isDataTexture,Me=[];for(let se=0;se<6;se++)!be&&!de?Me[se]=g(y.image[se],!0,r.maxCubemapSize):Me[se]=de?y.image[se].image:y.image[se],Me[se]=$(y,Me[se]);const Oe=Me[0],Pe=s.convert(y.format,y.colorSpace),Ee=s.convert(y.type),Fe=M(y.internalFormat,Pe,Ee,y.colorSpace),We=y.isVideoTexture!==!0,qe=Z.__version===void 0||F===!0,Ie=X.dataReady;let V=x(y,Oe);me(t.TEXTURE_CUBE_MAP,y);let pe;if(be){We&&qe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,V,Fe,Oe.width,Oe.height);for(let se=0;se<6;se++){pe=Me[se].mipmaps;for(let xe=0;xe<pe.length;xe++){const Te=pe[xe];y.format!==Gn?Pe!==null?We?Ie&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe,0,0,Te.width,Te.height,Pe,Te.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe,Fe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?Ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe,0,0,Te.width,Te.height,Pe,Ee,Te.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe,Fe,Te.width,Te.height,0,Pe,Ee,Te.data)}}}else{if(pe=y.mipmaps,We&&qe){pe.length>0&&V++;const se=ce(Me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,V,Fe,se.width,se.height)}for(let se=0;se<6;se++)if(de){We?Ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Me[se].width,Me[se].height,Pe,Ee,Me[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Fe,Me[se].width,Me[se].height,0,Pe,Ee,Me[se].data);for(let xe=0;xe<pe.length;xe++){const tt=pe[xe].image[se].image;We?Ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe+1,0,0,tt.width,tt.height,Pe,Ee,tt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe+1,Fe,tt.width,tt.height,0,Pe,Ee,tt.data)}}else{We?Ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Pe,Ee,Me[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Fe,Pe,Ee,Me[se]);for(let xe=0;xe<pe.length;xe++){const Te=pe[xe];We?Ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe+1,0,0,Pe,Ee,Te.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe+1,Fe,Pe,Ee,Te.image[se])}}}m(y)&&p(t.TEXTURE_CUBE_MAP),Z.__version=X.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function te(A,y,O,F,X,Z){const ue=s.convert(O.format,O.colorSpace),re=s.convert(O.type),le=M(O.internalFormat,ue,re,O.colorSpace);if(!i.get(y).__hasExternalTextures){const de=Math.max(1,y.width>>Z),Me=Math.max(1,y.height>>Z);X===t.TEXTURE_3D||X===t.TEXTURE_2D_ARRAY?n.texImage3D(X,Z,le,de,Me,y.depth,0,ue,re,null):n.texImage2D(X,Z,le,de,Me,0,ue,re,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),H(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,F,X,i.get(O).__webglTexture,0,P(y)):(X===t.TEXTURE_2D||X>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,F,X,i.get(O).__webglTexture,Z),n.bindFramebuffer(t.FRAMEBUFFER,null)}function oe(A,y,O){if(t.bindRenderbuffer(t.RENDERBUFFER,A),y.depthBuffer&&!y.stencilBuffer){let F=t.DEPTH_COMPONENT24;if(O||H(y)){const X=y.depthTexture;X&&X.isDepthTexture&&(X.type===Li?F=t.DEPTH_COMPONENT32F:X.type===cs&&(F=t.DEPTH_COMPONENT24));const Z=P(y);H(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Z,F,y.width,y.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,Z,F,y.width,y.height)}else t.renderbufferStorage(t.RENDERBUFFER,F,y.width,y.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(y.depthBuffer&&y.stencilBuffer){const F=P(y);O&&H(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,F,t.DEPTH24_STENCIL8,y.width,y.height):H(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,F,t.DEPTH24_STENCIL8,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const F=y.textures;for(let X=0;X<F.length;X++){const Z=F[X],ue=s.convert(Z.format,Z.colorSpace),re=s.convert(Z.type),le=M(Z.internalFormat,ue,re,Z.colorSpace),be=P(y);O&&H(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,be,le,y.width,y.height):H(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,be,le,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,le,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ge(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),R(y.depthTexture,0);const F=i.get(y.depthTexture).__webglTexture,X=P(y);if(y.depthTexture.format===Jr)H(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,F,0,X):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,F,0);else if(y.depthTexture.format===io)H(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,F,0,X):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,F,0);else throw new Error("Unknown depthTexture format")}function B(A){const y=i.get(A),O=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ge(y.__webglFramebuffer,A)}else if(O){y.__webglDepthbuffer=[];for(let F=0;F<6;F++)n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[F]),y.__webglDepthbuffer[F]=t.createRenderbuffer(),oe(y.__webglDepthbuffer[F],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=t.createRenderbuffer(),oe(y.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function he(A,y,O){const F=i.get(A);y!==void 0&&te(F.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&B(A)}function ae(A){const y=A.texture,O=i.get(A),F=i.get(y);A.addEventListener("dispose",L);const X=A.textures,Z=A.isWebGLCubeRenderTarget===!0,ue=X.length>1;if(ue||(F.__webglTexture===void 0&&(F.__webglTexture=t.createTexture()),F.__version=y.version,o.memory.textures++),Z){O.__webglFramebuffer=[];for(let re=0;re<6;re++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[re]=[];for(let le=0;le<y.mipmaps.length;le++)O.__webglFramebuffer[re][le]=t.createFramebuffer()}else O.__webglFramebuffer[re]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let re=0;re<y.mipmaps.length;re++)O.__webglFramebuffer[re]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(ue)for(let re=0,le=X.length;re<le;re++){const be=i.get(X[re]);be.__webglTexture===void 0&&(be.__webglTexture=t.createTexture(),o.memory.textures++)}if(A.samples>0&&H(A)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let re=0;re<X.length;re++){const le=X[re];O.__webglColorRenderbuffer[re]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[re]);const be=s.convert(le.format,le.colorSpace),de=s.convert(le.type),Me=M(le.internalFormat,be,de,le.colorSpace,A.isXRRenderTarget===!0),Oe=P(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Oe,Me,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+re,t.RENDERBUFFER,O.__webglColorRenderbuffer[re])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),oe(O.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture),me(t.TEXTURE_CUBE_MAP,y);for(let re=0;re<6;re++)if(y.mipmaps&&y.mipmaps.length>0)for(let le=0;le<y.mipmaps.length;le++)te(O.__webglFramebuffer[re][le],A,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+re,le);else te(O.__webglFramebuffer[re],A,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(y)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ue){for(let re=0,le=X.length;re<le;re++){const be=X[re],de=i.get(be);n.bindTexture(t.TEXTURE_2D,de.__webglTexture),me(t.TEXTURE_2D,be),te(O.__webglFramebuffer,A,be,t.COLOR_ATTACHMENT0+re,t.TEXTURE_2D,0),m(be)&&p(t.TEXTURE_2D)}n.unbindTexture()}else{let re=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(re=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(re,F.__webglTexture),me(re,y),y.mipmaps&&y.mipmaps.length>0)for(let le=0;le<y.mipmaps.length;le++)te(O.__webglFramebuffer[le],A,y,t.COLOR_ATTACHMENT0,re,le);else te(O.__webglFramebuffer,A,y,t.COLOR_ATTACHMENT0,re,0);m(y)&&p(re),n.unbindTexture()}A.depthBuffer&&B(A)}function U(A){const y=A.textures;for(let O=0,F=y.length;O<F;O++){const X=y[O];if(m(X)){const Z=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ue=i.get(X).__webglTexture;n.bindTexture(Z,ue),p(Z),n.unbindTexture()}}}const Re=[],ye=[];function C(A){if(A.samples>0){if(H(A)===!1){const y=A.textures,O=A.width,F=A.height;let X=t.COLOR_BUFFER_BIT;const Z=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(A),re=y.length>1;if(re)for(let le=0;le<y.length;le++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let le=0;le<y.length;le++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(X|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(X|=t.STENCIL_BUFFER_BIT)),re){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[le]);const be=i.get(y[le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,be,0)}t.blitFramebuffer(0,0,O,F,0,0,O,F,X,t.NEAREST),l===!0&&(Re.length=0,ye.length=0,Re.push(t.COLOR_ATTACHMENT0+le),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Re.push(Z),ye.push(Z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ye)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Re))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),re)for(let le=0;le<y.length;le++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,ue.__webglColorRenderbuffer[le]);const be=i.get(y[le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const y=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function P(A){return Math.min(r.maxSamples,A.samples)}function H(A){const y=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Y(A){const y=o.render.frame;u.get(A)!==y&&(u.set(A,y),A.update())}function $(A,y){const O=A.colorSpace,F=A.format,X=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==$i&&O!==Ri&&(ot.getTransfer(O)===ut?(F!==Gn||X!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function ce(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=_,this.setTexture2D=R,this.setTexture2DArray=k,this.setTexture3D=q,this.setTextureCube=ee,this.rebindTextures=he,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=C,this.setupDepthRenderbuffer=B,this.setupFrameBufferTexture=te,this.useMultisampledRTT=H}function kR(t,e){function n(i,r=Ri){let s;const o=ot.getTransfer(r);if(i===Vi)return t.UNSIGNED_BYTE;if(i===Av)return t.UNSIGNED_SHORT_4_4_4_4;if(i===wv)return t.UNSIGNED_SHORT_5_5_5_1;if(i===xT)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===_T)return t.BYTE;if(i===yT)return t.SHORT;if(i===Ev)return t.UNSIGNED_SHORT;if(i===Tv)return t.INT;if(i===cs)return t.UNSIGNED_INT;if(i===Li)return t.FLOAT;if(i===ul)return t.HALF_FLOAT;if(i===ST)return t.ALPHA;if(i===MT)return t.RGB;if(i===Gn)return t.RGBA;if(i===bT)return t.LUMINANCE;if(i===ET)return t.LUMINANCE_ALPHA;if(i===Jr)return t.DEPTH_COMPONENT;if(i===io)return t.DEPTH_STENCIL;if(i===TT)return t.RED;if(i===Cv)return t.RED_INTEGER;if(i===AT)return t.RG;if(i===Rv)return t.RG_INTEGER;if(i===Pv)return t.RGBA_INTEGER;if(i===zl||i===Hl||i===Gl||i===Wl)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===zl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===zl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Hl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Gl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Wl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===dh||i===hh||i===ph||i===mh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===dh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===hh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ph)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===mh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gh||i===vh||i===_h)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===gh||i===vh)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===_h)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===yh||i===xh||i===Sh||i===Mh||i===bh||i===Eh||i===Th||i===Ah||i===wh||i===Ch||i===Rh||i===Ph||i===Lh||i===Ih)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===yh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Mh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Eh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Th)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ah)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ch)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ph)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Lh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ih)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xl||i===Dh||i===Nh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Xl)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Dh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Nh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===wT||i===Uh||i===Oh||i===Fh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Xl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Uh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Oh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Fh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_o?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class VR extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class sa extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zR={type:"move"};class _c{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=n.getJointPose(g,i),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,v=.005;c.inputState.pinching&&d>h+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zR)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new sa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const HR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GR=`
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

}`;class WR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Jt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new zi({vertexShader:HR,fragmentShader:GR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Pn(new dl(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class XR extends vs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,v=null;const g=new WR,m=n.getContextAttributes();let p=null,M=null;const x=[],T=[],L=new Qe;let E=null;const b=new gn;b.layers.enable(1),b.viewport=new Lt;const D=new gn;D.layers.enable(2),D.viewport=new Lt;const S=[b,D],_=new VR;_.layers.enable(1),_.layers.enable(2);let N=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let oe=x[te];return oe===void 0&&(oe=new _c,x[te]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(te){let oe=x[te];return oe===void 0&&(oe=new _c,x[te]=oe),oe.getGripSpace()},this.getHand=function(te){let oe=x[te];return oe===void 0&&(oe=new _c,x[te]=oe),oe.getHandSpace()};function R(te){const oe=T.indexOf(te.inputSource);if(oe===-1)return;const ge=x[oe];ge!==void 0&&(ge.update(te.inputSource,te.frame,c||o),ge.dispatchEvent({type:te.type,data:te.inputSource}))}function k(){r.removeEventListener("select",R),r.removeEventListener("selectstart",R),r.removeEventListener("selectend",R),r.removeEventListener("squeeze",R),r.removeEventListener("squeezestart",R),r.removeEventListener("squeezeend",R),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",q);for(let te=0;te<x.length;te++){const oe=T[te];oe!==null&&(T[te]=null,x[te].disconnect(oe))}N=null,I=null,g.reset(),e.setRenderTarget(p),h=null,d=null,f=null,r=null,M=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",R),r.addEventListener("selectstart",R),r.addEventListener("selectend",R),r.addEventListener("squeeze",R),r.addEventListener("squeezestart",R),r.addEventListener("squeezeend",R),r.addEventListener("end",k),r.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await n.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){const oe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,oe),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new xr(h.framebufferWidth,h.framebufferHeight,{format:Gn,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let oe=null,ge=null,B=null;m.depth&&(B=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,oe=m.stencil?io:Jr,ge=m.stencil?_o:cs);const he={colorFormat:n.RGBA8,depthFormat:B,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(he),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new xr(d.textureWidth,d.textureHeight,{format:Gn,type:Vi,depthTexture:new Xv(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),$e.setContext(r),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function q(te){for(let oe=0;oe<te.removed.length;oe++){const ge=te.removed[oe],B=T.indexOf(ge);B>=0&&(T[B]=null,x[B].disconnect(ge))}for(let oe=0;oe<te.added.length;oe++){const ge=te.added[oe];let B=T.indexOf(ge);if(B===-1){for(let ae=0;ae<x.length;ae++)if(ae>=T.length){T.push(ge),B=ae;break}else if(T[ae]===null){T[ae]=ge,B=ae;break}if(B===-1)break}const he=x[B];he&&he.connect(ge)}}const ee=new J,ie=new J;function G(te,oe,ge){ee.setFromMatrixPosition(oe.matrixWorld),ie.setFromMatrixPosition(ge.matrixWorld);const B=ee.distanceTo(ie),he=oe.projectionMatrix.elements,ae=ge.projectionMatrix.elements,U=he[14]/(he[10]-1),Re=he[14]/(he[10]+1),ye=(he[9]+1)/he[5],C=(he[9]-1)/he[5],P=(he[8]-1)/he[0],H=(ae[8]+1)/ae[0],Y=U*P,$=U*H,ce=B/(-P+H),A=ce*-P;oe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(A),te.translateZ(ce),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();const y=U+ce,O=Re+ce,F=Y-A,X=$+(B-A),Z=ye*Re/O*y,ue=C*Re/O*y;te.projectionMatrix.makePerspective(F,X,Z,ue,y,O),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function fe(te,oe){oe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(oe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;g.texture!==null&&(te.near=g.depthNear,te.far=g.depthFar),_.near=D.near=b.near=te.near,_.far=D.far=b.far=te.far,(N!==_.near||I!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),N=_.near,I=_.far,b.near=N,b.far=I,D.near=N,D.far=I,b.updateProjectionMatrix(),D.updateProjectionMatrix(),te.updateProjectionMatrix());const oe=te.parent,ge=_.cameras;fe(_,oe);for(let B=0;B<ge.length;B++)fe(ge[B],oe);ge.length===2?G(_,b,D):_.projectionMatrix.copy(b.projectionMatrix),me(te,_,oe)};function me(te,oe,ge){ge===null?te.matrix.copy(oe.matrixWorld):(te.matrix.copy(ge.matrixWorld),te.matrix.invert(),te.matrix.multiply(oe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(oe.projectionMatrix),te.projectionMatrixInverse.copy(oe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=nu*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=te)},this.hasDepthSensing=function(){return g.texture!==null};let ve=null;function Ae(te,oe){if(u=oe.getViewerPose(c||o),v=oe,u!==null){const ge=u.views;h!==null&&(e.setRenderTargetFramebuffer(M,h.framebuffer),e.setRenderTarget(M));let B=!1;ge.length!==_.cameras.length&&(_.cameras.length=0,B=!0);for(let ae=0;ae<ge.length;ae++){const U=ge[ae];let Re=null;if(h!==null)Re=h.getViewport(U);else{const C=f.getViewSubImage(d,U);Re=C.viewport,ae===0&&(e.setRenderTargetTextures(M,C.colorTexture,d.ignoreDepthValues?void 0:C.depthStencilTexture),e.setRenderTarget(M))}let ye=S[ae];ye===void 0&&(ye=new gn,ye.layers.enable(ae),ye.viewport=new Lt,S[ae]=ye),ye.matrix.fromArray(U.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(U.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Re.x,Re.y,Re.width,Re.height),ae===0&&(_.matrix.copy(ye.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),B===!0&&_.cameras.push(ye)}const he=r.enabledFeatures;if(he&&he.includes("depth-sensing")){const ae=f.getDepthInformation(ge[0]);ae&&ae.isValid&&ae.texture&&g.init(e,ae,r.renderState)}}for(let ge=0;ge<x.length;ge++){const B=T[ge],he=x[ge];B!==null&&he!==void 0&&he.update(B,oe,c||o)}g.render(e,_),ve&&ve(te,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),v=null}const $e=new Wv;$e.setAnimationLoop(Ae),this.setAnimationLoop=function(te){ve=te},this.dispose=function(){}}}const ir=new $n,$R=new Tt;function qR(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Vv(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,x,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,T)):p.isMeshMatcapMaterial?(s(m,p),v(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Zt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Zt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),x=M.envMap,T=M.envMapRotation;if(x&&(m.envMap.value=x,ir.copy(T),ir.x*=-1,ir.y*=-1,ir.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ir.y*=-1,ir.z*=-1),m.envMapRotation.value.setFromMatrix4($R.makeRotationFromEuler(ir)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const L=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*L,n(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=x*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Zt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function YR(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const T=x.program;i.uniformBlockBinding(M,T)}function c(M,x){let T=r[M.id];T===void 0&&(v(M),T=u(M),r[M.id]=T,M.addEventListener("dispose",m));const L=x.program;i.updateUBOMapping(M,L);const E=e.render.frame;s[M.id]!==E&&(d(M),s[M.id]=E)}function u(M){const x=f();M.__bindingPointIndex=x;const T=t.createBuffer(),L=M.__size,E=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,L,E),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,T),T}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const x=r[M.id],T=M.uniforms,L=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let E=0,b=T.length;E<b;E++){const D=Array.isArray(T[E])?T[E]:[T[E]];for(let S=0,_=D.length;S<_;S++){const N=D[S];if(h(N,E,S,L)===!0){const I=N.__offset,R=Array.isArray(N.value)?N.value:[N.value];let k=0;for(let q=0;q<R.length;q++){const ee=R[q],ie=g(ee);typeof ee=="number"||typeof ee=="boolean"?(N.__data[0]=ee,t.bufferSubData(t.UNIFORM_BUFFER,I+k,N.__data)):ee.isMatrix3?(N.__data[0]=ee.elements[0],N.__data[1]=ee.elements[1],N.__data[2]=ee.elements[2],N.__data[3]=0,N.__data[4]=ee.elements[3],N.__data[5]=ee.elements[4],N.__data[6]=ee.elements[5],N.__data[7]=0,N.__data[8]=ee.elements[6],N.__data[9]=ee.elements[7],N.__data[10]=ee.elements[8],N.__data[11]=0):(ee.toArray(N.__data,k),k+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,I,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(M,x,T,L){const E=M.value,b=x+"_"+T;if(L[b]===void 0)return typeof E=="number"||typeof E=="boolean"?L[b]=E:L[b]=E.clone(),!0;{const D=L[b];if(typeof E=="number"||typeof E=="boolean"){if(D!==E)return L[b]=E,!0}else if(D.equals(E)===!1)return D.copy(E),!0}return!1}function v(M){const x=M.uniforms;let T=0;const L=16;for(let b=0,D=x.length;b<D;b++){const S=Array.isArray(x[b])?x[b]:[x[b]];for(let _=0,N=S.length;_<N;_++){const I=S[_],R=Array.isArray(I.value)?I.value:[I.value];for(let k=0,q=R.length;k<q;k++){const ee=R[k],ie=g(ee),G=T%L;G!==0&&L-G<ie.boundary&&(T+=L-G),I.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=T,T+=ie.storage}}}const E=T%L;return E>0&&(T+=L-E),M.__size=T,M.__cache={},this}function g(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const T=o.indexOf(x.__bindingPointIndex);o.splice(T,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const M in r)t.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class jR{constructor(e={}){const{canvas:n=kT(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const h=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const p=[],M=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fn,this._useLegacyLights=!1,this.toneMapping=Oi,this.toneMappingExposure=1;const x=this;let T=!1,L=0,E=0,b=null,D=-1,S=null;const _=new Lt,N=new Lt;let I=null;const R=new Ze(0);let k=0,q=n.width,ee=n.height,ie=1,G=null,fe=null;const me=new Lt(0,0,q,ee),ve=new Lt(0,0,q,ee);let Ae=!1;const $e=new Gv;let te=!1,oe=!1;const ge=new Tt,B=new J,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ae(){return b===null?ie:1}let U=i;function Re(w,W){return n.getContext(w,W)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Yu}`),n.addEventListener("webglcontextlost",V,!1),n.addEventListener("webglcontextrestored",pe,!1),n.addEventListener("webglcontextcreationerror",se,!1),U===null){const W="webgl2";if(U=Re(W,w),U===null)throw Re(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ye,C,P,H,Y,$,ce,A,y,O,F,X,Z,ue,re,le,be,de,Me,Oe,Pe,Ee,Fe,We;function qe(){ye=new i1(U),ye.init(),Ee=new kR(U,ye),C=new KC(U,ye,e,Ee),P=new FR(U),H=new o1(U),Y=new bR,$=new BR(U,ye,P,Y,C,Ee,H),ce=new JC(x),A=new n1(x),y=new dA(U),Fe=new YC(U,y),O=new r1(U,y,H,Fe),F=new l1(U,O,y,H),Me=new a1(U,C,$),le=new ZC(Y),X=new MR(x,ce,A,ye,C,Fe,le),Z=new qR(x,Y),ue=new TR,re=new LR(ye),de=new qC(x,ce,A,P,F,d,l),be=new OR(x,F,C),We=new YR(U,H,C,P),Oe=new jC(U,ye,H),Pe=new s1(U,ye,H),H.programs=X.programs,x.capabilities=C,x.extensions=ye,x.properties=Y,x.renderLists=ue,x.shadowMap=be,x.state=P,x.info=H}qe();const Ie=new XR(x,U);this.xr=Ie,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const w=ye.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ye.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(w){w!==void 0&&(ie=w,this.setSize(q,ee,!1))},this.getSize=function(w){return w.set(q,ee)},this.setSize=function(w,W,Q=!0){if(Ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,ee=W,n.width=Math.floor(w*ie),n.height=Math.floor(W*ie),Q===!0&&(n.style.width=w+"px",n.style.height=W+"px"),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(q*ie,ee*ie).floor()},this.setDrawingBufferSize=function(w,W,Q){q=w,ee=W,ie=Q,n.width=Math.floor(w*Q),n.height=Math.floor(W*Q),this.setViewport(0,0,w,W)},this.getCurrentViewport=function(w){return w.copy(_)},this.getViewport=function(w){return w.copy(me)},this.setViewport=function(w,W,Q,j){w.isVector4?me.set(w.x,w.y,w.z,w.w):me.set(w,W,Q,j),P.viewport(_.copy(me).multiplyScalar(ie).round())},this.getScissor=function(w){return w.copy(ve)},this.setScissor=function(w,W,Q,j){w.isVector4?ve.set(w.x,w.y,w.z,w.w):ve.set(w,W,Q,j),P.scissor(N.copy(ve).multiplyScalar(ie).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(w){P.setScissorTest(Ae=w)},this.setOpaqueSort=function(w){G=w},this.setTransparentSort=function(w){fe=w},this.getClearColor=function(w){return w.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(w=!0,W=!0,Q=!0){let j=0;if(w){let K=!1;if(b!==null){const Se=b.texture.format;K=Se===Pv||Se===Rv||Se===Cv}if(K){const Se=b.texture.type,we=Se===Vi||Se===cs||Se===Ev||Se===_o||Se===Av||Se===wv,Ce=de.getClearColor(),Ne=de.getClearAlpha(),Be=Ce.r,ze=Ce.g,Xe=Ce.b;we?(h[0]=Be,h[1]=ze,h[2]=Xe,h[3]=Ne,U.clearBufferuiv(U.COLOR,0,h)):(v[0]=Be,v[1]=ze,v[2]=Xe,v[3]=Ne,U.clearBufferiv(U.COLOR,0,v))}else j|=U.COLOR_BUFFER_BIT}W&&(j|=U.DEPTH_BUFFER_BIT),Q&&(j|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",V,!1),n.removeEventListener("webglcontextrestored",pe,!1),n.removeEventListener("webglcontextcreationerror",se,!1),ue.dispose(),re.dispose(),Y.dispose(),ce.dispose(),A.dispose(),F.dispose(),Fe.dispose(),We.dispose(),X.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",rt),Ie.removeEventListener("sessionend",Un),Ht.stop()};function V(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const w=H.autoReset,W=be.enabled,Q=be.autoUpdate,j=be.needsUpdate,K=be.type;qe(),H.autoReset=w,be.enabled=W,be.autoUpdate=Q,be.needsUpdate=j,be.type=K}function se(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function xe(w){const W=w.target;W.removeEventListener("dispose",xe),Te(W)}function Te(w){tt(w),Y.remove(w)}function tt(w){const W=Y.get(w).programs;W!==void 0&&(W.forEach(function(Q){X.releaseProgram(Q)}),w.isShaderMaterial&&X.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,Q,j,K,Se){W===null&&(W=he);const we=K.isMesh&&K.matrixWorld.determinant()<0,Ce=Qv(w,W,Q,j,K);P.setMaterial(j,we);let Ne=Q.index,Be=1;if(j.wireframe===!0){if(Ne=O.getWireframeAttribute(Q),Ne===void 0)return;Be=2}const ze=Q.drawRange,Xe=Q.attributes.position;let Mt=ze.start*Be,Nt=(ze.start+ze.count)*Be;Se!==null&&(Mt=Math.max(Mt,Se.start*Be),Nt=Math.min(Nt,(Se.start+Se.count)*Be)),Ne!==null?(Mt=Math.max(Mt,0),Nt=Math.min(Nt,Ne.count)):Xe!=null&&(Mt=Math.max(Mt,0),Nt=Math.min(Nt,Xe.count));const tn=Nt-Mt;if(tn<0||tn===1/0)return;Fe.setup(K,j,Ce,Q,Ne);let jn,it=Oe;if(Ne!==null&&(jn=y.get(Ne),it=Pe,it.setIndex(jn)),K.isMesh)j.wireframe===!0?(P.setLineWidth(j.wireframeLinewidth*ae()),it.setMode(U.LINES)):it.setMode(U.TRIANGLES);else if(K.isLine){let ke=j.linewidth;ke===void 0&&(ke=1),P.setLineWidth(ke*ae()),K.isLineSegments?it.setMode(U.LINES):K.isLineLoop?it.setMode(U.LINE_LOOP):it.setMode(U.LINE_STRIP)}else K.isPoints?it.setMode(U.POINTS):K.isSprite&&it.setMode(U.TRIANGLES);if(K.isBatchedMesh)K._multiDrawInstances!==null?it.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances):it.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else if(K.isInstancedMesh)it.renderInstances(Mt,tn,K.count);else if(Q.isInstancedBufferGeometry){const ke=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,ys=Math.min(Q.instanceCount,ke);it.renderInstances(Mt,tn,ys)}else it.render(Mt,tn)};function ct(w,W,Q){w.transparent===!0&&w.side===ri&&w.forceSinglePass===!1?(w.side=Zt,w.needsUpdate=!0,To(w,W,Q),w.side=ki,w.needsUpdate=!0,To(w,W,Q),w.side=ri):To(w,W,Q)}this.compile=function(w,W,Q=null){Q===null&&(Q=w),m=re.get(Q),m.init(W),M.push(m),Q.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),w!==Q&&w.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),m.setupLights(x._useLegacyLights);const j=new Set;return w.traverse(function(K){const Se=K.material;if(Se)if(Array.isArray(Se))for(let we=0;we<Se.length;we++){const Ce=Se[we];ct(Ce,Q,K),j.add(Ce)}else ct(Se,Q,K),j.add(Se)}),M.pop(),m=null,j},this.compileAsync=function(w,W,Q=null){const j=this.compile(w,W,Q);return new Promise(K=>{function Se(){if(j.forEach(function(we){Y.get(we).currentProgram.isReady()&&j.delete(we)}),j.size===0){K(w);return}setTimeout(Se,10)}ye.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let mt=null;function Dt(w){mt&&mt(w)}function rt(){Ht.stop()}function Un(){Ht.start()}const Ht=new Wv;Ht.setAnimationLoop(Dt),typeof self<"u"&&Ht.setContext(self),this.setAnimationLoop=function(w){mt=w,Ie.setAnimationLoop(w),w===null?Ht.stop():Ht.start()},Ie.addEventListener("sessionstart",rt),Ie.addEventListener("sessionend",Un),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(W),W=Ie.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,W,b),m=re.get(w,M.length),m.init(W),M.push(m),ge.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),$e.setFromProjectionMatrix(ge),oe=this.localClippingEnabled,te=le.init(this.clippingPlanes,oe),g=ue.get(w,p.length),g.init(),p.push(g),rf(w,W,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(G,fe);const Q=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1;Q&&de.addToRenderList(g,w),this.info.render.frame++,te===!0&&le.beginShadows();const j=m.state.shadowsArray;be.render(j,w,W),te===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=g.opaque,Se=g.transmissive;if(m.setupLights(x._useLegacyLights),W.isArrayCamera){const we=W.cameras;if(Se.length>0)for(let Ce=0,Ne=we.length;Ce<Ne;Ce++){const Be=we[Ce];of(K,Se,w,Be)}Q&&de.render(w);for(let Ce=0,Ne=we.length;Ce<Ne;Ce++){const Be=we[Ce];sf(g,w,Be,Be.viewport)}}else Se.length>0&&of(K,Se,w,W),Q&&de.render(w),sf(g,w,W);b!==null&&($.updateMultisampleRenderTarget(b),$.updateRenderTargetMipmap(b)),w.isScene===!0&&w.onAfterRender(x,w,W),Fe.resetDefaultState(),D=-1,S=null,M.pop(),M.length>0?(m=M[M.length-1],te===!0&&le.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function rf(w,W,Q,j){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)Q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||$e.intersectsSprite(w)){j&&B.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ge);const we=F.update(w),Ce=w.material;Ce.visible&&g.push(w,we,Ce,Q,B.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||$e.intersectsObject(w))){const we=F.update(w),Ce=w.material;if(j&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),B.copy(w.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),B.copy(we.boundingSphere.center)),B.applyMatrix4(w.matrixWorld).applyMatrix4(ge)),Array.isArray(Ce)){const Ne=we.groups;for(let Be=0,ze=Ne.length;Be<ze;Be++){const Xe=Ne[Be],Mt=Ce[Xe.materialIndex];Mt&&Mt.visible&&g.push(w,we,Mt,Q,B.z,Xe)}}else Ce.visible&&g.push(w,we,Ce,Q,B.z,null)}}const Se=w.children;for(let we=0,Ce=Se.length;we<Ce;we++)rf(Se[we],W,Q,j)}function sf(w,W,Q,j){const K=w.opaque,Se=w.transmissive,we=w.transparent;m.setupLightsView(Q),te===!0&&le.setGlobalState(x.clippingPlanes,Q),j&&P.viewport(_.copy(j)),K.length>0&&Eo(K,W,Q),Se.length>0&&Eo(Se,W,Q),we.length>0&&Eo(we,W,Q),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function of(w,W,Q,j){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[j.id]===void 0&&(m.state.transmissionRenderTarget[j.id]=new xr(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float")?ul:Vi,minFilter:fr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const Se=m.state.transmissionRenderTarget[j.id],we=j.viewport||_;Se.setSize(we.z,we.w);const Ce=x.getRenderTarget();x.setRenderTarget(Se),x.getClearColor(R),k=x.getClearAlpha(),k<1&&x.setClearColor(16777215,.5),x.clear();const Ne=x.toneMapping;x.toneMapping=Oi;const Be=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),m.setupLightsView(j),te===!0&&le.setGlobalState(x.clippingPlanes,j),Eo(w,Q,j),$.updateMultisampleRenderTarget(Se),$.updateRenderTargetMipmap(Se),ye.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Xe=0,Mt=W.length;Xe<Mt;Xe++){const Nt=W[Xe],tn=Nt.object,jn=Nt.geometry,it=Nt.material,ke=Nt.group;if(it.side===ri&&tn.layers.test(j.layers)){const ys=it.side;it.side=Zt,it.needsUpdate=!0,af(tn,Q,j,jn,it,ke),it.side=ys,it.needsUpdate=!0,ze=!0}}ze===!0&&($.updateMultisampleRenderTarget(Se),$.updateRenderTargetMipmap(Se))}x.setRenderTarget(Ce),x.setClearColor(R,k),Be!==void 0&&(j.viewport=Be),x.toneMapping=Ne}function Eo(w,W,Q){const j=W.isScene===!0?W.overrideMaterial:null;for(let K=0,Se=w.length;K<Se;K++){const we=w[K],Ce=we.object,Ne=we.geometry,Be=j===null?we.material:j,ze=we.group;Ce.layers.test(Q.layers)&&af(Ce,W,Q,Ne,Be,ze)}}function af(w,W,Q,j,K,Se){w.onBeforeRender(x,W,Q,j,K,Se),w.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(x,W,Q,j,w,Se),K.transparent===!0&&K.side===ri&&K.forceSinglePass===!1?(K.side=Zt,K.needsUpdate=!0,x.renderBufferDirect(Q,W,j,K,w,Se),K.side=ki,K.needsUpdate=!0,x.renderBufferDirect(Q,W,j,K,w,Se),K.side=ri):x.renderBufferDirect(Q,W,j,K,w,Se),w.onAfterRender(x,W,Q,j,K,Se)}function To(w,W,Q){W.isScene!==!0&&(W=he);const j=Y.get(w),K=m.state.lights,Se=m.state.shadowsArray,we=K.state.version,Ce=X.getParameters(w,K.state,Se,W,Q),Ne=X.getProgramCacheKey(Ce);let Be=j.programs;j.environment=w.isMeshStandardMaterial?W.environment:null,j.fog=W.fog,j.envMap=(w.isMeshStandardMaterial?A:ce).get(w.envMap||j.environment),j.envMapRotation=j.environment!==null&&w.envMap===null?W.environmentRotation:w.envMapRotation,Be===void 0&&(w.addEventListener("dispose",xe),Be=new Map,j.programs=Be);let ze=Be.get(Ne);if(ze!==void 0){if(j.currentProgram===ze&&j.lightsStateVersion===we)return cf(w,Ce),ze}else Ce.uniforms=X.getUniforms(w),w.onBuild(Q,Ce,x),w.onBeforeCompile(Ce,x),ze=X.acquireProgram(Ce,Ne),Be.set(Ne,ze),j.uniforms=Ce.uniforms;const Xe=j.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Xe.clippingPlanes=le.uniform),cf(w,Ce),j.needsLights=t_(w),j.lightsStateVersion=we,j.needsLights&&(Xe.ambientLightColor.value=K.state.ambient,Xe.lightProbe.value=K.state.probe,Xe.directionalLights.value=K.state.directional,Xe.directionalLightShadows.value=K.state.directionalShadow,Xe.spotLights.value=K.state.spot,Xe.spotLightShadows.value=K.state.spotShadow,Xe.rectAreaLights.value=K.state.rectArea,Xe.ltc_1.value=K.state.rectAreaLTC1,Xe.ltc_2.value=K.state.rectAreaLTC2,Xe.pointLights.value=K.state.point,Xe.pointLightShadows.value=K.state.pointShadow,Xe.hemisphereLights.value=K.state.hemi,Xe.directionalShadowMap.value=K.state.directionalShadowMap,Xe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Xe.spotShadowMap.value=K.state.spotShadowMap,Xe.spotLightMatrix.value=K.state.spotLightMatrix,Xe.spotLightMap.value=K.state.spotLightMap,Xe.pointShadowMap.value=K.state.pointShadowMap,Xe.pointShadowMatrix.value=K.state.pointShadowMatrix),j.currentProgram=ze,j.uniformsList=null,ze}function lf(w){if(w.uniformsList===null){const W=w.currentProgram.getUniforms();w.uniformsList=ma.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function cf(w,W){const Q=Y.get(w);Q.outputColorSpace=W.outputColorSpace,Q.batching=W.batching,Q.instancing=W.instancing,Q.instancingColor=W.instancingColor,Q.instancingMorph=W.instancingMorph,Q.skinning=W.skinning,Q.morphTargets=W.morphTargets,Q.morphNormals=W.morphNormals,Q.morphColors=W.morphColors,Q.morphTargetsCount=W.morphTargetsCount,Q.numClippingPlanes=W.numClippingPlanes,Q.numIntersection=W.numClipIntersection,Q.vertexAlphas=W.vertexAlphas,Q.vertexTangents=W.vertexTangents,Q.toneMapping=W.toneMapping}function Qv(w,W,Q,j,K){W.isScene!==!0&&(W=he),$.resetTextureUnits();const Se=W.fog,we=j.isMeshStandardMaterial?W.environment:null,Ce=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:$i,Ne=(j.isMeshStandardMaterial?A:ce).get(j.envMap||we),Be=j.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,ze=!!Q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Xe=!!Q.morphAttributes.position,Mt=!!Q.morphAttributes.normal,Nt=!!Q.morphAttributes.color;let tn=Oi;j.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(tn=x.toneMapping);const jn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,it=jn!==void 0?jn.length:0,ke=Y.get(j),ys=m.state.lights;if(te===!0&&(oe===!0||w!==S)){const hn=w===S&&j.id===D;le.setState(j,w,hn)}let pt=!1;j.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==ys.state.version||ke.outputColorSpace!==Ce||K.isBatchedMesh&&ke.batching===!1||!K.isBatchedMesh&&ke.batching===!0||K.isInstancedMesh&&ke.instancing===!1||!K.isInstancedMesh&&ke.instancing===!0||K.isSkinnedMesh&&ke.skinning===!1||!K.isSkinnedMesh&&ke.skinning===!0||K.isInstancedMesh&&ke.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&ke.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&ke.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&ke.instancingMorph===!1&&K.morphTexture!==null||ke.envMap!==Ne||j.fog===!0&&ke.fog!==Se||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==le.numPlanes||ke.numIntersection!==le.numIntersection)||ke.vertexAlphas!==Be||ke.vertexTangents!==ze||ke.morphTargets!==Xe||ke.morphNormals!==Mt||ke.morphColors!==Nt||ke.toneMapping!==tn||ke.morphTargetsCount!==it)&&(pt=!0):(pt=!0,ke.__version=j.version);let qi=ke.currentProgram;pt===!0&&(qi=To(j,W,K));let uf=!1,xs=!1,pl=!1;const Ut=qi.getUniforms(),hi=ke.uniforms;if(P.useProgram(qi.program)&&(uf=!0,xs=!0,pl=!0),j.id!==D&&(D=j.id,xs=!0),uf||S!==w){Ut.setValue(U,"projectionMatrix",w.projectionMatrix),Ut.setValue(U,"viewMatrix",w.matrixWorldInverse);const hn=Ut.map.cameraPosition;hn!==void 0&&hn.setValue(U,B.setFromMatrixPosition(w.matrixWorld)),C.logarithmicDepthBuffer&&Ut.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Ut.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,xs=!0,pl=!0)}if(K.isSkinnedMesh){Ut.setOptional(U,K,"bindMatrix"),Ut.setOptional(U,K,"bindMatrixInverse");const hn=K.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Ut.setValue(U,"boneTexture",hn.boneTexture,$))}K.isBatchedMesh&&(Ut.setOptional(U,K,"batchingTexture"),Ut.setValue(U,"batchingTexture",K._matricesTexture,$));const ml=Q.morphAttributes;if((ml.position!==void 0||ml.normal!==void 0||ml.color!==void 0)&&Me.update(K,Q,qi),(xs||ke.receiveShadow!==K.receiveShadow)&&(ke.receiveShadow=K.receiveShadow,Ut.setValue(U,"receiveShadow",K.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(hi.envMap.value=Ne,hi.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&W.environment!==null&&(hi.envMapIntensity.value=W.environmentIntensity),xs&&(Ut.setValue(U,"toneMappingExposure",x.toneMappingExposure),ke.needsLights&&e_(hi,pl),Se&&j.fog===!0&&Z.refreshFogUniforms(hi,Se),Z.refreshMaterialUniforms(hi,j,ie,ee,m.state.transmissionRenderTarget[w.id]),ma.upload(U,lf(ke),hi,$)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(ma.upload(U,lf(ke),hi,$),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Ut.setValue(U,"center",K.center),Ut.setValue(U,"modelViewMatrix",K.modelViewMatrix),Ut.setValue(U,"normalMatrix",K.normalMatrix),Ut.setValue(U,"modelMatrix",K.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const hn=j.uniformsGroups;for(let gl=0,n_=hn.length;gl<n_;gl++){const ff=hn[gl];We.update(ff,qi),We.bind(ff,qi)}}return qi}function e_(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function t_(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(w,W,Q){Y.get(w.texture).__webglTexture=W,Y.get(w.depthTexture).__webglTexture=Q;const j=Y.get(w);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=Q===void 0,j.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,W){const Q=Y.get(w);Q.__webglFramebuffer=W,Q.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(w,W=0,Q=0){b=w,L=W,E=Q;let j=!0,K=null,Se=!1,we=!1;if(w){const Ne=Y.get(w);Ne.__useDefaultFramebuffer!==void 0?(P.bindFramebuffer(U.FRAMEBUFFER,null),j=!1):Ne.__webglFramebuffer===void 0?$.setupRenderTarget(w):Ne.__hasExternalTextures&&$.rebindTextures(w,Y.get(w.texture).__webglTexture,Y.get(w.depthTexture).__webglTexture);const Be=w.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(we=!0);const ze=Y.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ze[W])?K=ze[W][Q]:K=ze[W],Se=!0):w.samples>0&&$.useMultisampledRTT(w)===!1?K=Y.get(w).__webglMultisampledFramebuffer:Array.isArray(ze)?K=ze[Q]:K=ze,_.copy(w.viewport),N.copy(w.scissor),I=w.scissorTest}else _.copy(me).multiplyScalar(ie).floor(),N.copy(ve).multiplyScalar(ie).floor(),I=Ae;if(P.bindFramebuffer(U.FRAMEBUFFER,K)&&j&&P.drawBuffers(w,K),P.viewport(_),P.scissor(N),P.setScissorTest(I),Se){const Ne=Y.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ne.__webglTexture,Q)}else if(we){const Ne=Y.get(w.texture),Be=W||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ne.__webglTexture,Q||0,Be)}D=-1},this.readRenderTargetPixels=function(w,W,Q,j,K,Se,we){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Y.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce){P.bindFramebuffer(U.FRAMEBUFFER,Ce);try{const Ne=w.texture,Be=Ne.format,ze=Ne.type;if(!C.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-j&&Q>=0&&Q<=w.height-K&&U.readPixels(W,Q,j,K,Ee.convert(Be),Ee.convert(ze),Se)}finally{const Ne=b!==null?Y.get(b).__webglFramebuffer:null;P.bindFramebuffer(U.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(w,W,Q=0){const j=Math.pow(2,-Q),K=Math.floor(W.image.width*j),Se=Math.floor(W.image.height*j);$.setTexture2D(W,0),U.copyTexSubImage2D(U.TEXTURE_2D,Q,0,0,w.x,w.y,K,Se),P.unbindTexture()},this.copyTextureToTexture=function(w,W,Q,j=0){const K=W.image.width,Se=W.image.height,we=Ee.convert(Q.format),Ce=Ee.convert(Q.type);$.setTexture2D(Q,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,Q.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,Q.unpackAlignment),W.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,j,w.x,w.y,K,Se,we,Ce,W.image.data):W.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,j,w.x,w.y,W.mipmaps[0].width,W.mipmaps[0].height,we,W.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,j,w.x,w.y,we,Ce,W.image),j===0&&Q.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),P.unbindTexture()},this.copyTextureToTexture3D=function(w,W,Q,j,K=0){const Se=w.max.x-w.min.x,we=w.max.y-w.min.y,Ce=w.max.z-w.min.z,Ne=Ee.convert(j.format),Be=Ee.convert(j.type);let ze;if(j.isData3DTexture)$.setTexture3D(j,0),ze=U.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)$.setTexture2DArray(j,0),ze=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,j.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,j.unpackAlignment);const Xe=U.getParameter(U.UNPACK_ROW_LENGTH),Mt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Nt=U.getParameter(U.UNPACK_SKIP_PIXELS),tn=U.getParameter(U.UNPACK_SKIP_ROWS),jn=U.getParameter(U.UNPACK_SKIP_IMAGES),it=Q.isCompressedTexture?Q.mipmaps[K]:Q.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,it.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,it.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,w.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,w.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,w.min.z),Q.isDataTexture||Q.isData3DTexture?U.texSubImage3D(ze,K,W.x,W.y,W.z,Se,we,Ce,Ne,Be,it.data):j.isCompressedArrayTexture?U.compressedTexSubImage3D(ze,K,W.x,W.y,W.z,Se,we,Ce,Ne,it.data):U.texSubImage3D(ze,K,W.x,W.y,W.z,Se,we,Ce,Ne,Be,it),U.pixelStorei(U.UNPACK_ROW_LENGTH,Xe),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Mt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Nt),U.pixelStorei(U.UNPACK_SKIP_ROWS,tn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,jn),K===0&&j.generateMipmaps&&U.generateMipmap(ze),P.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?$.setTextureCube(w,0):w.isData3DTexture?$.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?$.setTexture2DArray(w,0):$.setTexture2D(w,0),P.unbindTexture()},this.resetState=function(){L=0,E=0,b=null,P.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Ku?"display-p3":"srgb",n.unpackColorSpace=ot.workingColorSpace===fl?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class KR extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class ef extends di{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],h=[];let v=0;const g=[],m=i/2;let p=0;M(),o===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new ln(f,3)),this.setAttribute("normal",new ln(d,3)),this.setAttribute("uv",new ln(h,2));function M(){const T=new J,L=new J;let E=0;const b=(n-e)/i;for(let D=0;D<=s;D++){const S=[],_=D/s,N=_*(n-e)+e;for(let I=0;I<=r;I++){const R=I/r,k=R*l+a,q=Math.sin(k),ee=Math.cos(k);L.x=N*q,L.y=-_*i+m,L.z=N*ee,f.push(L.x,L.y,L.z),T.set(q,b,ee).normalize(),d.push(T.x,T.y,T.z),h.push(R,1-_),S.push(v++)}g.push(S)}for(let D=0;D<r;D++)for(let S=0;S<s;S++){const _=g[S][D],N=g[S+1][D],I=g[S+1][D+1],R=g[S][D+1];u.push(_,N,R),u.push(N,I,R),E+=6}c.addGroup(p,E,0),p+=E}function x(T){const L=v,E=new Qe,b=new J;let D=0;const S=T===!0?e:n,_=T===!0?1:-1;for(let I=1;I<=r;I++)f.push(0,m*_,0),d.push(0,_,0),h.push(.5,.5),v++;const N=v;for(let I=0;I<=r;I++){const k=I/r*l+a,q=Math.cos(k),ee=Math.sin(k);b.x=S*ee,b.y=m*_,b.z=S*q,f.push(b.x,b.y,b.z),d.push(0,_,0),E.x=q*.5+.5,E.y=ee*.5*_+.5,h.push(E.x,E.y),v++}for(let I=0;I<r;I++){const R=L+I,k=N+I;T===!0?u.push(k,k+1,R):u.push(k+1,k,R),D+=3}c.addGroup(p,D,T===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ef(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class tf extends di{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let f=e;const d=(n-e)/r,h=new J,v=new Qe;for(let g=0;g<=r;g++){for(let m=0;m<=i;m++){const p=s+m/i*o;h.x=f*Math.cos(p),h.y=f*Math.sin(p),l.push(h.x,h.y,h.z),c.push(0,0,1),v.x=(h.x/n+1)/2,v.y=(h.y/n+1)/2,u.push(v.x,v.y)}f+=d}for(let g=0;g<r;g++){const m=g*(i+1);for(let p=0;p<i;p++){const M=p+m,x=M,T=M+i+1,L=M+i+2,E=M+1;a.push(x,T,E),a.push(T,L,E)}}this.setIndex(a),this.setAttribute("position",new ln(l,3)),this.setAttribute("normal",new ln(c,3)),this.setAttribute("uv",new ln(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ZR extends Mo{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ze(16777215),this.specular=new Ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lv,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=ju,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class JR extends qt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class QR extends JR{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yu);let Ii,Zv,fs,Ln,ft,ru,Wn,oa=null,yc=!1,_r=nt(null);const eP=new ef(.1,.1,.2,32).translate(0,.1,0);function tP(){return iP(),aP(),cP(),{resetArSession:nP,addCylinder:sP,clearCylinders:rP,currentSession:_r}}const nP=()=>{var t,e,n,i;(e=(t=_r==null?void 0:_r.value)==null?void 0:t.end)==null||e.call(t),(n=ft==null?void 0:ft.setAnimationLoop)==null||n.call(ft,null),(i=ft==null?void 0:ft.dispose)==null||i.call(ft),Ln=fs=ft=ru=Wn=void 0,Ii&&(Ii.style.display="none",Ii.removeChild(Ii.lastChild))};function iP(){Ii=document.getElementById("three-js-ar"),document.body.appendChild(Ii),Zv=document.getElementById("screensaver"),Ln=new KR,fs=new gn(70,window.innerWidth/window.innerHeight,.01,20);const t=new QR(16777215,12303359,3);t.position.set(.5,1,.25),Ln.add(t),ft=new jR({antialias:!0,alpha:!0}),ft.setPixelRatio(window.devicePixelRatio),ft.setSize(window.innerWidth,window.innerHeight),ft.xr.enabled=!0,Ii.appendChild(ft.domElement),ru=ft.xr.getController(0),Ln.add(ru),Wn=new Pn(new tf(.15,.2,32).rotateX(-Math.PI/2),new Ju),Wn.matrixAutoUpdate=!1,Wn.visible=!1,Ln.add(Wn),window.addEventListener("resize",oP)}const rP=()=>{const t=Ln.getObjectsByProperty("test",null,[]);console.log("clear cylinders array");for(const e of t)Ln.remove(e)},sP=()=>{if(Wn.visible){const t=new ZR({color:16777215*Math.random()}),e=new Pn(eP,t);Wn.matrix.decompose(e.position,e.quaternion,e.scale),e.test=null,e.scale.y=Math.random()*2+1,Ln.add(e)}};function oP(){fs.aspect=window.innerWidth/window.innerHeight,fs.updateProjectionMatrix(),ft.setSize(window.innerWidth,window.innerHeight)}function aP(){ft.setAnimationLoop(lP)}function lP(t,e){if(!(!ft||!Ln||!e)){if(e){const n=ft.xr.getReferenceSpace(),i=ft.xr.getSession();if(yc===!1&&(i.requestReferenceSpace("viewer").then(function(r){i.requestHitTestSource({space:r}).then(function(s){oa=s})}),i.addEventListener("end",function(){yc=!1,oa=null}),yc=!0),oa){const r=e.getHitTestResults(oa);if(r.length){const s=r[0];Wn.visible=!0,Zv.style.display="none",Wn.matrix.fromArray(s.getPose(n).transform.matrix)}else Wn.visible=!1}}Ln&&fs&&ft.render(Ln,fs)}}const cP=()=>{function t(){_r.value.removeEventListener("end",t),e.domOverlay.root.style.display="none",_r.value=null}let e={requiredFeatures:["hit-test"],optionalFeatures:["dom-overlay"],domOverlay:{root:Ii}};navigator.xr.requestSession("immersive-ar",e).then(async n=>{n.addEventListener("end",t),ft.xr.setReferenceSpaceType("local"),await ft.xr.setSession(n),_r.value=n})},uP=()=>{const t=document.createElement("div");t.id="debug",t.style="font-size:10px;color:grey;width:100vw;height:50vh;top:50vh;display:none;position:absolute;overflow:auto",document.body.appendChild(t),console.log=function(r){e(r)},console.error=console.debug=console.info=console.warn=console.log;const e=r=>{r&&(t.innerHTML+=`<p>${r}</p>`)},n=()=>{t.innerHTML=""},i=()=>{t.style.display!=="none"?t.style.display="none":t.style.display=""};return console.log("Console initialized"),{clear:n,switchVisibility:i}},fP=t=>(Y_("data-v-f9553af5"),t=t(),j_(),t),dP={id:"three-js-ar"},hP={style:{position:"absolute",right:"0",bottom:"0"}},pP=fP(()=>en("div",{id:"screensaver",class:"center"}," Move your device for detect surface ",-1)),mP=oo({__name:"ThreeAR",setup(t){const e=Wu();let n,i;Wi(()=>{n=tP(),i=uP()});const r=l=>{n.resetArSession(),e.push("/")},s=()=>{var l;(l=n.addCylinder)==null||l.call(n)},o=()=>{var l;(l=n==null?void 0:n.clearCylinders)==null||l.call(n)},a=()=>{i==null||i.switchVisibility()};return(l,c)=>(yr(),xa("div",dP,[en("div",hP,[z(Pi,{style:{margin:"5px"},variant:"text",density:"comfortable",icon:"mdi-circle",onClick:s}),z(Pi,{style:{margin:"5px 5px 5px 10px"},variant:"text",density:"comfortable",icon:"mdi-delete",onClick:o})]),z(Pi,{style:{margin:"5px"},variant:"text",icon:"mdi-console",density:"comfortable",onClick:a}),z(Pi,{style:{margin:"5px",float:"right"},variant:"text",density:"comfortable",icon:"mdi-close",onClick:r}),pP]))}}),Jv=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},gP=Jv(mP,[["__scopeId","data-v-f9553af5"]]),vP=Le({color:String,...uo(),...ht(),...br(),...po(),...vo(),...ol(),...ui(),...zt(),...un()},"VSheet"),_P=et()({name:"VSheet",props:vP(),setup(t,e){let{slots:n}=e;const{themeClasses:i}=fn(t),{backgroundColorClasses:r,backgroundColorStyles:s}=vr(Rt(t,"color")),{borderClasses:o}=fo(t),{dimensionStyles:a}=Er(t),{elevationClasses:l}=mo(t),{locationStyles:c}=sl(t),{positionClasses:u}=al(t),{roundedClasses:f}=fi(t);return lt(()=>z(t.tag,{class:["v-sheet",i.value,r.value,o.value,l.value,u.value,f.value,t.class],style:[s.value,a.value,c.value,t.style]},n)),{}}}),yP=en("h2",{class:"text-h4 font-weight-black text-orange"},"WARNING",-1),xP=en("div",{class:"text-h5 font-weight-medium mb-2"}," You using IOS device ",-1),SP=en("p",{class:"text-body-2 mb-4"}," WebView Safari does not currently support augmented reality technologies ",-1),MP=en("p",{class:"text-body-2 mb-4"}," To enjoy the augmented reality experience on your iOS device, you can download the special browser app from the link below ",-1),bP=en("p",{class:"text-body-2 mb-4"}," Don't forget copy link to this site ",-1),EP={class:"text-body-2 mb-4"},TP={__name:"DownloadXRViewerLayout",setup(t){let e=Wu();const n=()=>{window.location.href="https://apps.apple.com/us/app/webxr-viewer/id1295998056"},i=()=>{e.push(ro[0].path)},r=location.origin;return(s,o)=>(yr(),Lm(_P,{color:"white",class:"d-flex align-center justify-center flex-wrap text-center mx-auto px-4",elevation:"4",height:"400","max-width":"800",width:"100%",rounded:""},{default:Et(()=>[en("div",null,[yP,xP,SP,MP,bP,en("p",EP,aa(Xt(r)),1),z(Pi,{color:"orange",variant:"text",onClick:n},{default:Et(()=>[pr("DOWNLOAD")]),_:1}),z(Pi,{color:"blue",variant:"text",onClick:i},{default:Et(()=>[pr("GOTO MAIN")]),_:1})])]),_:1}))}},ro=[{path:"/",component:DE},{path:"/ar",component:gP},{path:"/ar/XRViewer",component:TP}],AP=kM({history:pM(),routes:ro}),wP=Le({...ht(),...hg({fullHeight:!0}),...un()},"VApp"),CP=et()({name:"VApp",props:wP(),setup(t,e){let{slots:n}=e;const i=fn(t),{layoutClasses:r,getLayoutItem:s,items:o,layoutRef:a}=mg(t),{rtlClasses:l}=gs();return lt(()=>z("div",{ref:a,class:["v-application",i.themeClasses.value,r.value,l.value,t.class],style:[t.style]},[z("div",{class:"v-application__wrap"},[z(am,null,{default:()=>{var c;return[z(gt,null,[(c=n.default)==null?void 0:c.call(n)])]}})])])),{getLayoutItem:s,items:o,theme:i}}}),RP={};function PP(t,e){const n=t0("router-view");return yr(),Lm(CP,{class:"bg-white"},{default:Et(()=>[z(Sv,null,{default:Et(()=>[z(n)]),_:1})]),_:1})}const LP=Jv(RP,[["render",PP]]),nf=Dy(LP);FS(nf);nf.use(AP);nf.mount("#app");
