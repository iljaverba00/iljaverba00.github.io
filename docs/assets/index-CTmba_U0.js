(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Cc(t,e){const n=new Set(t.split(","));return i=>n.has(i)}const lt={},Nr=[],fn=()=>{},av=()=>!1,vo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Rc=t=>t.startsWith("onUpdate:"),gt=Object.assign,Pc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ov=Object.prototype.hasOwnProperty,Ye=(t,e)=>ov.call(t,e),Ie=Array.isArray,Fr=t=>_o(t)==="[object Map]",Bh=t=>_o(t)==="[object Set]",Ne=t=>typeof t=="function",vt=t=>typeof t=="string",lr=t=>typeof t=="symbol",rt=t=>t!==null&&typeof t=="object",kh=t=>(rt(t)||Ne(t))&&Ne(t.then)&&Ne(t.catch),Vh=Object.prototype.toString,_o=t=>Vh.call(t),lv=t=>_o(t).slice(8,-1),zh=t=>_o(t)==="[object Object]",Lc=t=>vt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,vs=Cc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},cv=/-(\w)/g,vn=xo(t=>t.replace(cv,(e,n)=>n?n.toUpperCase():"")),uv=/\B([A-Z])/g,es=xo(t=>t.replace(uv,"-$1").toLowerCase()),ni=xo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ko=xo(t=>t?`on${ni(t)}`:""),Ri=(t,e)=>!Object.is(t,e),Zo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Hh=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},fv=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Gh=t=>{const e=vt(t)?Number(t):NaN;return isNaN(e)?t:e};let Lu;const Wh=()=>Lu||(Lu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ic(t){if(Ie(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=vt(i)?mv(i):Ic(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(vt(t)||rt(t))return t}const dv=/;(?![^(]*\))/g,hv=/:([^]+)/,pv=/\/\*[^]*?\*\//g;function mv(t){const e={};return t.replace(pv,"").split(dv).forEach(n=>{if(n){const i=n.split(hv);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Dc(t){let e="";if(vt(t))e=t;else if(Ie(t))for(let n=0;n<t.length;n++){const i=Dc(t[n]);i&&(e+=i+" ")}else if(rt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const gv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vv=Cc(gv);function Xh(t){return!!t||t===""}const Jo=t=>vt(t)?t:t==null?"":Ie(t)||rt(t)&&(t.toString===Vh||!Ne(t.toString))?JSON.stringify(t,$h,2):String(t),$h=(t,e)=>e&&e.__v_isRef?$h(t,e.value):Fr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[Qo(i,s)+" =>"]=r,n),{})}:Bh(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Qo(n))}:lr(e)?Qo(e):rt(e)&&!Ie(e)&&!zh(e)?String(e):e,Qo=(t,e="")=>{var n;return lr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let en;class qh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=en,!e&&en&&(this.index=(en.scopes||(en.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=en;try{return en=this,e()}finally{en=n}}}on(){en=this}off(){en=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function _v(t){return new qh(t)}function xv(t,e=en){e&&e.active&&e.effects.push(t)}function yv(){return en}function Sv(t){en&&en.cleanups.push(t)}let ir;class Uc{constructor(e,n,i,r){this.fn=e,this.trigger=n,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,xv(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Ui();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Mv(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Ni()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Ti,n=ir;try{return Ti=!0,ir=this,this._runnings++,Iu(this),this.fn()}finally{Du(this),this._runnings--,ir=n,Ti=e}}stop(){this.active&&(Iu(this),Du(this),this.onStop&&this.onStop(),this.active=!1)}}function Mv(t){return t.value}function Iu(t){t._trackId++,t._depsLength=0}function Du(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Yh(t.deps[e],t);t.deps.length=t._depsLength}}function Yh(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Ti=!0,ql=0;const jh=[];function Ui(){jh.push(Ti),Ti=!1}function Ni(){const t=jh.pop();Ti=t===void 0?!0:t}function Nc(){ql++}function Fc(){for(ql--;!ql&&Yl.length;)Yl.shift()()}function Kh(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const i=t.deps[t._depsLength];i!==e?(i&&Yh(i,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Yl=[];function Zh(t,e,n){Nc();for(const i of t.keys()){let r;i._dirtyLevel<e&&(r??(r=t.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=e),i._shouldSchedule&&(r??(r=t.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&Yl.push(i.scheduler)))}Fc()}const Jh=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Ya=new WeakMap,rr=Symbol(""),jl=Symbol("");function Kt(t,e,n){if(Ti&&ir){let i=Ya.get(t);i||Ya.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=Jh(()=>i.delete(n))),Kh(ir,r)}}function ei(t,e,n,i,r,s){const a=Ya.get(t);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(n==="length"&&Ie(t)){const l=Number(i);a.forEach((c,u)=>{(u==="length"||!lr(u)&&u>=l)&&o.push(c)})}else switch(n!==void 0&&o.push(a.get(n)),e){case"add":Ie(t)?Lc(n)&&o.push(a.get("length")):(o.push(a.get(rr)),Fr(t)&&o.push(a.get(jl)));break;case"delete":Ie(t)||(o.push(a.get(rr)),Fr(t)&&o.push(a.get(jl)));break;case"set":Fr(t)&&o.push(a.get(rr));break}Nc();for(const l of o)l&&Zh(l,4);Fc()}function Ev(t,e){const n=Ya.get(t);return n&&n.get(e)}const bv=Cc("__proto__,__v_isRef,__isVue"),Qh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(lr)),Uu=Tv();function Tv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=qe(this);for(let s=0,a=this.length;s<a;s++)Kt(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(qe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ui(),Nc();const i=qe(this)[e].apply(this,n);return Fc(),Ni(),i}}),t}function Av(t){lr(t)||(t=String(t));const e=qe(this);return Kt(e,"has",t),e.hasOwnProperty(t)}class ep{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?kv:rp:s?ip:np).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Ie(e);if(!r){if(a&&Ye(Uu,n))return Reflect.get(Uu,n,i);if(n==="hasOwnProperty")return Av}const o=Reflect.get(e,n,i);return(lr(n)?Qh.has(n):bv(n))||(r||Kt(e,"get",n),s)?o:pt(o)?a&&Lc(n)?o:o.value:rt(o)?r?Gs(o):$t(o):o}}class tp extends ep{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const l=ws(s);if(!ja(i)&&!ws(i)&&(s=qe(s),i=qe(i)),!Ie(e)&&pt(s)&&!pt(i))return l?!1:(s.value=i,!0)}const a=Ie(e)&&Lc(n)?Number(n)<e.length:Ye(e,n),o=Reflect.set(e,n,i,r);return e===qe(r)&&(a?Ri(i,s)&&ei(e,"set",n,i):ei(e,"add",n,i)),o}deleteProperty(e,n){const i=Ye(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&ei(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!lr(n)||!Qh.has(n))&&Kt(e,"has",n),i}ownKeys(e){return Kt(e,"iterate",Ie(e)?"length":rr),Reflect.ownKeys(e)}}class wv extends ep{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Cv=new tp,Rv=new wv,Pv=new tp(!0);const Oc=t=>t,yo=t=>Reflect.getPrototypeOf(t);function oa(t,e,n=!1,i=!1){t=t.__v_raw;const r=qe(t),s=qe(e);n||(Ri(e,s)&&Kt(r,"get",e),Kt(r,"get",s));const{has:a}=yo(r),o=i?Oc:n?Vc:Cs;if(a.call(r,e))return o(t.get(e));if(a.call(r,s))return o(t.get(s));t!==r&&t.get(e)}function la(t,e=!1){const n=this.__v_raw,i=qe(n),r=qe(t);return e||(Ri(t,r)&&Kt(i,"has",t),Kt(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function ca(t,e=!1){return t=t.__v_raw,!e&&Kt(qe(t),"iterate",rr),Reflect.get(t,"size",t)}function Nu(t){t=qe(t);const e=qe(this);return yo(e).has.call(e,t)||(e.add(t),ei(e,"add",t,t)),this}function Fu(t,e){e=qe(e);const n=qe(this),{has:i,get:r}=yo(n);let s=i.call(n,t);s||(t=qe(t),s=i.call(n,t));const a=r.call(n,t);return n.set(t,e),s?Ri(e,a)&&ei(n,"set",t,e):ei(n,"add",t,e),this}function Ou(t){const e=qe(this),{has:n,get:i}=yo(e);let r=n.call(e,t);r||(t=qe(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&ei(e,"delete",t,void 0),s}function Bu(){const t=qe(this),e=t.size!==0,n=t.clear();return e&&ei(t,"clear",void 0,void 0),n}function ua(t,e){return function(i,r){const s=this,a=s.__v_raw,o=qe(a),l=e?Oc:t?Vc:Cs;return!t&&Kt(o,"iterate",rr),a.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function fa(t,e,n){return function(...i){const r=this.__v_raw,s=qe(r),a=Fr(s),o=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,c=r[t](...i),u=n?Oc:e?Vc:Cs;return!e&&Kt(s,"iterate",l?jl:rr),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:o?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function oi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Lv(){const t={get(s){return oa(this,s)},get size(){return ca(this)},has:la,add:Nu,set:Fu,delete:Ou,clear:Bu,forEach:ua(!1,!1)},e={get(s){return oa(this,s,!1,!0)},get size(){return ca(this)},has:la,add:Nu,set:Fu,delete:Ou,clear:Bu,forEach:ua(!1,!0)},n={get(s){return oa(this,s,!0)},get size(){return ca(this,!0)},has(s){return la.call(this,s,!0)},add:oi("add"),set:oi("set"),delete:oi("delete"),clear:oi("clear"),forEach:ua(!0,!1)},i={get(s){return oa(this,s,!0,!0)},get size(){return ca(this,!0)},has(s){return la.call(this,s,!0)},add:oi("add"),set:oi("set"),delete:oi("delete"),clear:oi("clear"),forEach:ua(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=fa(s,!1,!1),n[s]=fa(s,!0,!1),e[s]=fa(s,!1,!0),i[s]=fa(s,!0,!0)}),[t,n,e,i]}const[Iv,Dv,Uv,Nv]=Lv();function Bc(t,e){const n=e?t?Nv:Uv:t?Dv:Iv;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(Ye(n,r)&&r in i?n:i,r,s)}const Fv={get:Bc(!1,!1)},Ov={get:Bc(!1,!0)},Bv={get:Bc(!0,!1)};const np=new WeakMap,ip=new WeakMap,rp=new WeakMap,kv=new WeakMap;function Vv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zv(t){return t.__v_skip||!Object.isExtensible(t)?0:Vv(lv(t))}function $t(t){return ws(t)?t:kc(t,!1,Cv,Fv,np)}function sp(t){return kc(t,!1,Pv,Ov,ip)}function Gs(t){return kc(t,!0,Rv,Bv,rp)}function kc(t,e,n,i,r){if(!rt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const a=zv(t);if(a===0)return t;const o=new Proxy(t,a===2?i:n);return r.set(t,o),o}function _s(t){return ws(t)?_s(t.__v_raw):!!(t&&t.__v_isReactive)}function ws(t){return!!(t&&t.__v_isReadonly)}function ja(t){return!!(t&&t.__v_isShallow)}function ap(t){return t?!!t.__v_raw:!1}function qe(t){const e=t&&t.__v_raw;return e?qe(e):t}function Hv(t){return Object.isExtensible(t)&&Hh(t,"__v_skip",!0),t}const Cs=t=>rt(t)?$t(t):t,Vc=t=>rt(t)?Gs(t):t;class op{constructor(e,n,i,r){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Uc(()=>e(this._value),()=>Ha(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=qe(this);return(!e._cacheable||e.effect.dirty)&&Ri(e._value,e._value=e.effect.run())&&Ha(e,4),lp(e),e.effect._dirtyLevel>=2&&Ha(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Gv(t,e,n=!1){let i,r;const s=Ne(t);return s?(i=t,r=fn):(i=t.get,r=t.set),new op(i,r,s||!r,n)}function lp(t){var e;Ti&&ir&&(t=qe(t),Kh(ir,(e=t.dep)!=null?e:t.dep=Jh(()=>t.dep=void 0,t instanceof op?t:void 0)))}function Ha(t,e=4,n){t=qe(t);const i=t.dep;i&&Zh(i,e)}function pt(t){return!!(t&&t.__v_isRef===!0)}function Mt(t){return cp(t,!1)}function ut(t){return cp(t,!0)}function cp(t,e){return pt(t)?t:new Wv(t,e)}class Wv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:qe(e),this._value=n?e:Cs(e)}get value(){return lp(this),this._value}set value(e){const n=this.__v_isShallow||ja(e)||ws(e);e=n?e:qe(e),Ri(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Cs(e),Ha(this,4))}}function qt(t){return pt(t)?t.value:t}const Xv={get:(t,e,n)=>qt(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return pt(r)&&!pt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function up(t){return _s(t)?t:new Proxy(t,Xv)}function zc(t){const e=Ie(t)?new Array(t.length):{};for(const n in t)e[n]=fp(t,n);return e}class $v{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Ev(qe(this._object),this._key)}}class qv{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Ft(t,e,n){return pt(t)?t:Ne(t)?new qv(t):rt(t)&&arguments.length>1?fp(t,e,n):Mt(t)}function fp(t,e,n){const i=t[e];return pt(i)?i:new $v(t,e,n)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ai(t,e,n,i){try{return i?t(...i):t()}catch(r){Ws(r,e,n)}}function gn(t,e,n,i){if(Ne(t)){const r=Ai(t,e,n,i);return r&&kh(r)&&r.catch(s=>{Ws(s,e,n)}),r}if(Ie(t)){const r=[];for(let s=0;s<t.length;s++)r.push(gn(t[s],e,n,i));return r}}function Ws(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=`https://vuejs.org/error-reference/#runtime-${n}`;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Ui(),Ai(l,null,10,[t,a,o]),Ni();return}}Yv(t,n,r,i)}function Yv(t,e,n,i=!0){console.error(t)}let Rs=!1,Kl=!1;const Nt=[];let Ln=0;const Or=[];let vi=null,Zi=0;const dp=Promise.resolve();let Hc=null;function Fi(t){const e=Hc||dp;return t?e.then(this?t.bind(this):t):e}function jv(t){let e=Ln+1,n=Nt.length;for(;e<n;){const i=e+n>>>1,r=Nt[i],s=Ps(r);s<t||s===t&&r.pre?e=i+1:n=i}return e}function Gc(t){(!Nt.length||!Nt.includes(t,Rs&&t.allowRecurse?Ln+1:Ln))&&(t.id==null?Nt.push(t):Nt.splice(jv(t.id),0,t),hp())}function hp(){!Rs&&!Kl&&(Kl=!0,Hc=dp.then(mp))}function Kv(t){const e=Nt.indexOf(t);e>Ln&&Nt.splice(e,1)}function Zl(t){Ie(t)?Or.push(...t):(!vi||!vi.includes(t,t.allowRecurse?Zi+1:Zi))&&Or.push(t),hp()}function ku(t,e,n=Rs?Ln+1:0){for(;n<Nt.length;n++){const i=Nt[n];if(i&&i.pre){if(t&&i.id!==t.uid)continue;Nt.splice(n,1),n--,i()}}}function pp(t){if(Or.length){const e=[...new Set(Or)].sort((n,i)=>Ps(n)-Ps(i));if(Or.length=0,vi){vi.push(...e);return}for(vi=e,Zi=0;Zi<vi.length;Zi++)vi[Zi]();vi=null,Zi=0}}const Ps=t=>t.id==null?1/0:t.id,Zv=(t,e)=>{const n=Ps(t)-Ps(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function mp(t){Kl=!1,Rs=!0,Nt.sort(Zv);try{for(Ln=0;Ln<Nt.length;Ln++){const e=Nt[Ln];e&&e.active!==!1&&Ai(e,null,14)}}finally{Ln=0,Nt.length=0,pp(),Rs=!1,Hc=null,(Nt.length||Or.length)&&mp()}}function Jv(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||lt;let r=n;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:d}=i[u]||lt;d&&(r=n.map(h=>vt(h)?h.trim():h)),f&&(r=n.map(fv))}let o,l=i[o=Ko(e)]||i[o=Ko(vn(e))];!l&&s&&(l=i[o=Ko(es(e))]),l&&gn(l,t,6,r);const c=i[o+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[o])return;t.emitted[o]=!0,gn(c,t,6,r)}}function gp(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let a={},o=!1;if(!Ne(t)){const l=c=>{const u=gp(c,e,!0);u&&(o=!0,gt(a,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!o?(rt(t)&&i.set(t,null),null):(Ie(s)?s.forEach(l=>a[l]=null):gt(a,s),rt(t)&&i.set(t,a),a)}function So(t,e){return!t||!vo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ye(t,e[0].toLowerCase()+e.slice(1))||Ye(t,es(e))||Ye(t,e))}let Vt=null,vp=null;function Ka(t){const e=Vt;return Vt=t,vp=t&&t.type.__scopeId||null,e}function Ut(t,e=Vt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Ju(-1);const s=Ka(e);let a;try{a=t(...r)}finally{Ka(s),i._d&&Ju(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function el(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:v,inheritAttrs:g}=t,m=Ka(t);let p,M;try{if(n.shapeFlag&4){const T=r||i,P=T;p=Sn(c.call(P,T,u,f,h,d,v)),M=o}else{const T=e;p=Sn(T.length>1?T(f,{attrs:o,slots:a,emit:l}):T(f,null)),M=e.props?o:e_(o)}}catch(T){Ss.length=0,Ws(T,t,1),p=W(dn)}let y=p;if(M&&g!==!1){const T=Object.keys(M),{shapeFlag:P}=y;T.length&&P&7&&(s&&T.some(Rc)&&(M=t_(M,s)),y=Pi(y,M,!1,!0))}return n.dirs&&(y=Pi(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&(y.transition=n.transition),p=y,Ka(m),p}function Qv(t,e=!0){let n;for(let i=0;i<t.length;i++){const r=t[i];if(Ja(r)){if(r.type!==dn||r.children==="v-if"){if(n)return;n=r}}else return}return n}const e_=t=>{let e;for(const n in t)(n==="class"||n==="style"||vo(n))&&((e||(e={}))[n]=t[n]);return e},t_=(t,e)=>{const n={};for(const i in t)(!Rc(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function n_(t,e,n){const{props:i,children:r,component:s}=t,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Vu(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(a[d]!==i[d]&&!So(c,d))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Vu(i,a,c):!0:!!a;return!1}function Vu(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!So(n,s))return!0}return!1}function Wc({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Xc="components",i_="directives";function r_(t,e){return $c(Xc,t,!0,e)||t}const s_=Symbol.for("v-ndc");function a_(t){return vt(t)&&$c(Xc,t,!1)||t}function _p(t){return $c(i_,t)}function $c(t,e,n=!0,i=!1){const r=Vt||wt;if(r){const s=r.type;if(t===Xc){const o=e0(s,!1);if(o&&(o===e||o===vn(e)||o===ni(vn(e))))return s}const a=zu(r[t]||s[t],e)||zu(r.appContext[t],e);return!a&&i?s:a}}function zu(t,e){return t&&(t[e]||t[vn(e)]||t[ni(vn(e))])}const o_=t=>t.__isSuspense;let Jl=0;const l_={name:"Suspense",__isSuspense:!0,process(t,e,n,i,r,s,a,o,l,c){if(t==null)c_(e,n,i,r,s,a,o,l,c);else{if(s&&s.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}u_(t,e,n,i,r,a,o,l,c)}},hydrate:f_,create:qc,normalize:d_},xp=l_;function Ls(t,e){const n=t.props&&t.props[e];Ne(n)&&n()}function c_(t,e,n,i,r,s,a,o,l){const{p:c,o:{createElement:u}}=l,f=u("div"),d=t.suspense=qc(t,r,i,e,f,n,s,a,o,l);c(null,d.pendingBranch=t.ssContent,f,null,i,d,s,a),d.deps>0?(Ls(t,"onPending"),Ls(t,"onFallback"),c(null,t.ssFallback,e,n,i,null,s,a),Br(d,t.ssFallback)):d.resolve(!1,!0)}function u_(t,e,n,i,r,s,a,o,{p:l,um:c,o:{createElement:u}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const d=e.ssContent,h=e.ssFallback,{activeBranch:v,pendingBranch:g,isInFallback:m,isHydrating:p}=f;if(g)f.pendingBranch=d,In(d,g)?(l(g,d,f.hiddenContainer,null,r,f,s,a,o),f.deps<=0?f.resolve():m&&(p||(l(v,h,n,i,r,null,s,a,o),Br(f,h)))):(f.pendingId=Jl++,p?(f.isHydrating=!1,f.activeBranch=g):c(g,r,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),m?(l(null,d,f.hiddenContainer,null,r,f,s,a,o),f.deps<=0?f.resolve():(l(v,h,n,i,r,null,s,a,o),Br(f,h))):v&&In(d,v)?(l(v,d,n,i,r,f,s,a,o),f.resolve(!0)):(l(null,d,f.hiddenContainer,null,r,f,s,a,o),f.deps<=0&&f.resolve()));else if(v&&In(d,v))l(v,d,n,i,r,f,s,a,o),Br(f,d);else if(Ls(e,"onPending"),f.pendingBranch=d,d.shapeFlag&512?f.pendingId=d.component.suspenseId:f.pendingId=Jl++,l(null,d,f.hiddenContainer,null,r,f,s,a,o),f.deps<=0)f.resolve();else{const{timeout:M,pendingId:y}=f;M>0?setTimeout(()=>{f.pendingId===y&&f.fallback(h)},M):M===0&&f.fallback(h)}}function qc(t,e,n,i,r,s,a,o,l,c,u=!1){const{p:f,m:d,um:h,n:v,o:{parentNode:g,remove:m}}=c;let p;const M=p_(t);M&&e&&e.pendingBranch&&(p=e.pendingId,e.deps++);const y=t.props?Gh(t.props.timeout):void 0,T=s,P={vnode:t,parent:e,parentComponent:n,namespace:a,container:i,hiddenContainer:r,deps:0,pendingId:Jl++,timeout:typeof y=="number"?y:-1,activeBranch:null,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(E=!1,C=!1){const{vnode:U,activeBranch:S,pendingBranch:x,pendingId:O,effects:I,parentComponent:L,container:X}=P;let J=!1;P.isHydrating?P.isHydrating=!1:E||(J=S&&x.transition&&x.transition.mode==="out-in",J&&(S.transition.afterLeave=()=>{O===P.pendingId&&(d(x,X,s===T?v(S):s,0),Zl(I))}),S&&(g(S.el)!==P.hiddenContainer&&(s=v(S)),h(S,L,P,!0)),J||d(x,X,s,0)),Br(P,x),P.pendingBranch=null,P.isInFallback=!1;let te=P.parent,ne=!1;for(;te;){if(te.pendingBranch){te.effects.push(...I),ne=!0;break}te=te.parent}!ne&&!J&&Zl(I),P.effects=[],M&&e&&e.pendingBranch&&p===e.pendingId&&(e.deps--,e.deps===0&&!C&&e.resolve()),Ls(U,"onResolve")},fallback(E){if(!P.pendingBranch)return;const{vnode:C,activeBranch:U,parentComponent:S,container:x,namespace:O}=P;Ls(C,"onFallback");const I=v(U),L=()=>{P.isInFallback&&(f(null,E,x,I,S,null,O,o,l),Br(P,E))},X=E.transition&&E.transition.mode==="out-in";X&&(U.transition.afterLeave=L),P.isInFallback=!0,h(U,S,null,!0),X||L()},move(E,C,U){P.activeBranch&&d(P.activeBranch,E,C,U),P.container=E},next(){return P.activeBranch&&v(P.activeBranch)},registerDep(E,C){const U=!!P.pendingBranch;U&&P.deps++;const S=E.vnode.el;E.asyncDep.catch(x=>{Ws(x,E,0)}).then(x=>{if(E.isUnmounted||P.isUnmounted||P.pendingId!==E.suspenseId)return;E.asyncResolved=!0;const{vnode:O}=E;ac(E,x,!1),S&&(O.el=S);const I=!S&&E.subTree.el;C(E,O,g(S||E.subTree.el),S?null:v(E.subTree),P,a,l),I&&m(I),Wc(E,O.el),U&&--P.deps===0&&P.resolve()})},unmount(E,C){P.isUnmounted=!0,P.activeBranch&&h(P.activeBranch,n,E,C),P.pendingBranch&&h(P.pendingBranch,n,E,C)}};return P}function f_(t,e,n,i,r,s,a,o,l){const c=e.suspense=qc(e,i,n,t.parentNode,document.createElement("div"),null,r,s,a,o,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,s,a);return c.deps===0&&c.resolve(!1,!0),u}function d_(t){const{shapeFlag:e,children:n}=t,i=e&32;t.ssContent=Hu(i?n.default:n),t.ssFallback=i?Hu(n.fallback):W(dn)}function Hu(t){let e;if(Ne(t)){const n=Wr&&t._c;n&&(t._d=!1,Gr()),t=t(),n&&(t._d=!0,e=hn,zp())}return Ie(t)&&(t=Qv(t)),t=Sn(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function h_(t,e){e&&e.pendingBranch?Ie(t)?e.effects.push(...t):e.effects.push(t):Zl(t)}function Br(t,e){t.activeBranch=e;const{vnode:n,parentComponent:i}=t;let r=e.el;for(;!r&&e.component;)e=e.component.subTree,r=e.el;n.el=r,i&&i.subTree===n&&(i.vnode.el=r,Wc(i,r))}function p_(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const m_=Symbol.for("v-scx"),g_=()=>At(m_);function cr(t,e){return Yc(t,null,e)}const da={};function mt(t,e,n){return Yc(t,e,n)}function Yc(t,e,{immediate:n,deep:i,flush:r,once:s,onTrack:a,onTrigger:o}=lt){if(e&&s){const E=e;e=(...C)=>{E(...C),P()}}const l=wt,c=E=>i===!0?E:er(E,i===!1?1:void 0);let u,f=!1,d=!1;if(pt(t)?(u=()=>t.value,f=ja(t)):_s(t)?(u=()=>c(t),f=!0):Ie(t)?(d=!0,f=t.some(E=>_s(E)||ja(E)),u=()=>t.map(E=>{if(pt(E))return E.value;if(_s(E))return c(E);if(Ne(E))return Ai(E,l,2)})):Ne(t)?e?u=()=>Ai(t,l,2):u=()=>(h&&h(),gn(t,l,3,[v])):u=fn,e&&i){const E=u;u=()=>er(E())}let h,v=E=>{h=y.onStop=()=>{Ai(E,l,4),h=y.onStop=void 0}},g;if(bo)if(v=fn,e?n&&gn(e,l,3,[u(),d?[]:void 0,v]):u(),r==="sync"){const E=g_();g=E.__watcherHandles||(E.__watcherHandles=[])}else return fn;let m=d?new Array(t.length).fill(da):da;const p=()=>{if(!(!y.active||!y.dirty))if(e){const E=y.run();(i||f||(d?E.some((C,U)=>Ri(C,m[U])):Ri(E,m)))&&(h&&h(),gn(e,l,3,[E,m===da?void 0:d&&m[0]===da?[]:m,v]),m=E)}else y.run()};p.allowRecurse=!!e;let M;r==="sync"?M=p:r==="post"?M=()=>Wt(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),M=()=>Gc(p));const y=new Uc(u,fn,M),T=yv(),P=()=>{y.stop(),T&&Pc(T.effects,y)};return e?n?p():m=y.run():r==="post"?Wt(y.run.bind(y),l&&l.suspense):y.run(),g&&g.push(P),P}function v_(t,e,n){const i=this.proxy,r=vt(t)?t.includes(".")?yp(i,t):()=>i[t]:t.bind(i,i);let s;Ne(e)?s=e:(s=e.handler,n=e);const a=qs(this),o=Yc(r,s.bind(i),n);return a(),o}function yp(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function er(t,e=1/0,n){if(e<=0||!rt(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,pt(t))er(t.value,e,n);else if(Ie(t))for(let i=0;i<t.length;i++)er(t[i],e,n);else if(Bh(t)||Fr(t))t.forEach(i=>{er(i,e,n)});else if(zh(t))for(const i in t)er(t[i],e,n);return t}function Is(t,e){if(Vt===null)return t;const n=To(Vt)||Vt.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=lt]=e[r];s&&(Ne(s)&&(s={mounted:s,updated:s}),s.deep&&er(a),i.push({dir:s,instance:n,value:a,oldValue:void 0,arg:o,modifiers:l}))}return t}function ki(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Ui(),gn(l,n,8,[t.el,o,t,e]),Ni())}}const _i=Symbol("_leaveCb"),ha=Symbol("_enterCb");function Sp(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ts(()=>{t.isMounted=!0}),ri(()=>{t.isUnmounting=!0}),t}const ln=[Function,Array],Mp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ln,onEnter:ln,onAfterEnter:ln,onEnterCancelled:ln,onBeforeLeave:ln,onLeave:ln,onAfterLeave:ln,onLeaveCancelled:ln,onBeforeAppear:ln,onAppear:ln,onAfterAppear:ln,onAppearCancelled:ln},__={name:"BaseTransition",props:Mp,setup(t,{slots:e}){const n=eu(),i=Sp();return()=>{const r=e.default&&jc(e.default(),!0);if(!r||!r.length)return;let s=r[0];if(r.length>1){for(const d of r)if(d.type!==dn){s=d;break}}const a=qe(t),{mode:o}=a;if(i.isLeaving)return tl(s);const l=Gu(s);if(!l)return tl(s);const c=Ds(l,a,i,n);Us(l,c);const u=n.subTree,f=u&&Gu(u);if(f&&f.type!==dn&&!In(l,f)){const d=Ds(f,a,i,n);if(Us(f,d),o==="out-in"&&l.type!==dn)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},tl(s);o==="in-out"&&l.type!==dn&&(d.delayLeave=(h,v,g)=>{const m=Ep(i,f);m[String(f.key)]=f,h[_i]=()=>{v(),h[_i]=void 0,delete c.delayedLeave},c.delayedLeave=g})}return s}}},x_=__;function Ep(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Ds(t,e,n,i){const{appear:r,mode:s,persisted:a=!1,onBeforeEnter:o,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:d,onAfterLeave:h,onLeaveCancelled:v,onBeforeAppear:g,onAppear:m,onAfterAppear:p,onAppearCancelled:M}=e,y=String(t.key),T=Ep(n,t),P=(U,S)=>{U&&gn(U,i,9,S)},E=(U,S)=>{const x=S[1];P(U,S),Ie(U)?U.every(O=>O.length<=1)&&x():U.length<=1&&x()},C={mode:s,persisted:a,beforeEnter(U){let S=o;if(!n.isMounted)if(r)S=g||o;else return;U[_i]&&U[_i](!0);const x=T[y];x&&In(t,x)&&x.el[_i]&&x.el[_i](),P(S,[U])},enter(U){let S=l,x=c,O=u;if(!n.isMounted)if(r)S=m||l,x=p||c,O=M||u;else return;let I=!1;const L=U[ha]=X=>{I||(I=!0,X?P(O,[U]):P(x,[U]),C.delayedLeave&&C.delayedLeave(),U[ha]=void 0)};S?E(S,[U,L]):L()},leave(U,S){const x=String(t.key);if(U[ha]&&U[ha](!0),n.isUnmounting)return S();P(f,[U]);let O=!1;const I=U[_i]=L=>{O||(O=!0,S(),L?P(v,[U]):P(h,[U]),U[_i]=void 0,T[x]===t&&delete T[x])};T[x]=t,d?E(d,[U,I]):I()},clone(U){return Ds(U,e,n,i)}};return C}function tl(t){if(Mo(t))return t=Pi(t),t.children=null,t}function Gu(t){if(!Mo(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Ne(n.default))return n.default()}}function Us(t,e){t.shapeFlag&6&&t.component?Us(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function jc(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let a=t[s];const o=n==null?a.key:String(n)+String(a.key!=null?a.key:s);a.type===yt?(a.patchFlag&128&&r++,i=i.concat(jc(a.children,e,o))):(e||a.type!==dn)&&i.push(o!=null?Pi(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Xs(t,e){return Ne(t)?gt({name:t.name},e,{setup:t}):t}const Ga=t=>!!t.type.__asyncLoader,Mo=t=>t.type.__isKeepAlive;function bp(t,e){Ap(t,"a",e)}function Tp(t,e){Ap(t,"da",e)}function Ap(t,e,n=wt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Eo(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Mo(r.parent.vnode)&&y_(i,e,n,r),r=r.parent}}function y_(t,e,n,i){const r=Eo(e,t,i,!0);Cp(()=>{Pc(i[e],r)},n)}function Eo(t,e,n=wt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...a)=>{if(n.isUnmounted)return;Ui();const o=qs(n),l=gn(e,n,t,a);return o(),Ni(),l});return i?r.unshift(s):r.push(s),s}}const ii=t=>(e,n=wt)=>(!bo||t==="sp")&&Eo(t,(...i)=>e(...i),n),wp=ii("bm"),ts=ii("m"),S_=ii("bu"),Kc=ii("u"),ri=ii("bum"),Cp=ii("um"),M_=ii("sp"),E_=ii("rtg"),b_=ii("rtc");function T_(t,e=wt){Eo("ec",t,e)}function A_(t,e,n,i){let r;const s=n;if(Ie(t)||vt(t)){r=new Array(t.length);for(let a=0,o=t.length;a<o;a++)r[a]=e(t[a],a,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s)}else if(rt(t))if(t[Symbol.iterator])r=Array.from(t,(a,o)=>e(a,o,void 0,s));else{const a=Object.keys(t);r=new Array(a.length);for(let o=0,l=a.length;o<l;o++){const c=a[o];r[o]=e(t[c],c,o,s)}}else r=[];return r}const Ql=t=>t?Xp(t)?To(t)||t.proxy:Ql(t.parent):null,xs=gt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ql(t.parent),$root:t=>Ql(t.root),$emit:t=>t.emit,$options:t=>Zc(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Gc(t.update)}),$nextTick:t=>t.n||(t.n=Fi.bind(t.proxy)),$watch:t=>v_.bind(t)}),nl=(t,e)=>t!==lt&&!t.__isScriptSetup&&Ye(t,e),w_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=t;let c;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(nl(i,e))return a[e]=1,i[e];if(r!==lt&&Ye(r,e))return a[e]=2,r[e];if((c=t.propsOptions[0])&&Ye(c,e))return a[e]=3,s[e];if(n!==lt&&Ye(n,e))return a[e]=4,n[e];ec&&(a[e]=0)}}const u=xs[e];let f,d;if(u)return e==="$attrs"&&Kt(t.attrs,"get",""),u(t);if((f=o.__cssModules)&&(f=f[e]))return f;if(n!==lt&&Ye(n,e))return a[e]=4,n[e];if(d=l.config.globalProperties,Ye(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return nl(r,e)?(r[e]=n,!0):i!==lt&&Ye(i,e)?(i[e]=n,!0):Ye(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!n[a]||t!==lt&&Ye(t,a)||nl(e,a)||(o=s[0])&&Ye(o,a)||Ye(i,a)||Ye(xs,a)||Ye(r.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ye(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Wu(t){return Ie(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ec=!0;function C_(t){const e=Zc(t),n=t.proxy,i=t.ctx;ec=!1,e.beforeCreate&&Xu(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:v,activated:g,deactivated:m,beforeDestroy:p,beforeUnmount:M,destroyed:y,unmounted:T,render:P,renderTracked:E,renderTriggered:C,errorCaptured:U,serverPrefetch:S,expose:x,inheritAttrs:O,components:I,directives:L,filters:X}=e;if(c&&R_(c,i,null),a)for(const ne in a){const H=a[ne];Ne(H)&&(i[ne]=H.bind(n))}if(r){const ne=r.call(n,n);rt(ne)&&(t.data=$t(ne))}if(ec=!0,s)for(const ne in s){const H=s[ne],pe=Ne(H)?H.bind(n,n):Ne(H.get)?H.get.bind(n,n):fn,he=!Ne(H)&&Ne(H.set)?H.set.bind(n):fn,Se=se({get:pe,set:he});Object.defineProperty(i,ne,{enumerable:!0,configurable:!0,get:()=>Se.value,set:Pe=>Se.value=Pe})}if(o)for(const ne in o)Rp(o[ne],i,n,ne);if(l){const ne=Ne(l)?l.call(n):l;Reflect.ownKeys(ne).forEach(H=>{Tn(H,ne[H])})}u&&Xu(u,t,"c");function te(ne,H){Ie(H)?H.forEach(pe=>ne(pe.bind(n))):H&&ne(H.bind(n))}if(te(wp,f),te(ts,d),te(S_,h),te(Kc,v),te(bp,g),te(Tp,m),te(T_,U),te(b_,E),te(E_,C),te(ri,M),te(Cp,T),te(M_,S),Ie(x))if(x.length){const ne=t.exposed||(t.exposed={});x.forEach(H=>{Object.defineProperty(ne,H,{get:()=>n[H],set:pe=>n[H]=pe})})}else t.exposed||(t.exposed={});P&&t.render===fn&&(t.render=P),O!=null&&(t.inheritAttrs=O),I&&(t.components=I),L&&(t.directives=L)}function R_(t,e,n=fn){Ie(t)&&(t=tc(t));for(const i in t){const r=t[i];let s;rt(r)?"default"in r?s=At(r.from||i,r.default,!0):s=At(r.from||i):s=At(r),pt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function Xu(t,e,n){gn(Ie(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Rp(t,e,n,i){const r=i.includes(".")?yp(n,i):()=>n[i];if(vt(t)){const s=e[t];Ne(s)&&mt(r,s)}else if(Ne(t))mt(r,t.bind(n));else if(rt(t))if(Ie(t))t.forEach(s=>Rp(s,e,n,i));else{const s=Ne(t.handler)?t.handler.bind(n):e[t.handler];Ne(s)&&mt(r,s,t)}}function Zc(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=t.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Za(l,c,a,!0)),Za(l,e,a)),rt(e)&&s.set(e,l),l}function Za(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Za(t,s,n,!0),r&&r.forEach(a=>Za(t,a,n,!0));for(const a in e)if(!(i&&a==="expose")){const o=P_[a]||n&&n[a];t[a]=o?o(t[a],e[a]):e[a]}return t}const P_={data:$u,props:qu,emits:qu,methods:ms,computed:ms,beforeCreate:Bt,created:Bt,beforeMount:Bt,mounted:Bt,beforeUpdate:Bt,updated:Bt,beforeDestroy:Bt,beforeUnmount:Bt,destroyed:Bt,unmounted:Bt,activated:Bt,deactivated:Bt,errorCaptured:Bt,serverPrefetch:Bt,components:ms,directives:ms,watch:I_,provide:$u,inject:L_};function $u(t,e){return e?t?function(){return gt(Ne(t)?t.call(this,this):t,Ne(e)?e.call(this,this):e)}:e:t}function L_(t,e){return ms(tc(t),tc(e))}function tc(t){if(Ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Bt(t,e){return t?[...new Set([].concat(t,e))]:e}function ms(t,e){return t?gt(Object.create(null),t,e):e}function qu(t,e){return t?Ie(t)&&Ie(e)?[...new Set([...t,...e])]:gt(Object.create(null),Wu(t),Wu(e??{})):e}function I_(t,e){if(!t)return e;if(!e)return t;const n=gt(Object.create(null),t);for(const i in e)n[i]=Bt(t[i],e[i]);return n}function Pp(){return{app:null,config:{isNativeTag:av,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let D_=0;function U_(t,e){return function(i,r=null){Ne(i)||(i=gt({},i)),r!=null&&!rt(r)&&(r=null);const s=Pp(),a=new WeakSet;let o=!1;const l=s.app={_uid:D_++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:n0,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&Ne(c.install)?(a.add(c),c.install(l,...u)):Ne(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!o){const d=W(i,r);return d.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(d,c):t(d,c,f),o=!0,l._container=c,c.__vue_app__=l,To(d.component)||d.component.proxy}},unmount(){o&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){const u=ys;ys=l;try{return c()}finally{ys=u}}};return l}}let ys=null;function Tn(t,e){if(wt){let n=wt.provides;const i=wt.parent&&wt.parent.provides;i===n&&(n=wt.provides=Object.create(i)),n[t]=e}}function At(t,e,n=!1){const i=wt||Vt;if(i||ys){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:ys._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Ne(e)?e.call(i&&i.proxy):e}}const Lp={},Ip=()=>Object.create(Lp),Dp=t=>Object.getPrototypeOf(t)===Lp;function N_(t,e,n,i=!1){const r={},s=Ip();t.propsDefaults=Object.create(null),Up(t,e,r,s);for(const a in t.propsOptions[0])a in r||(r[a]=void 0);n?t.props=i?r:sp(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function F_(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=t,o=qe(r),[l]=t.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(So(t.emitsOptions,d))continue;const h=e[d];if(l)if(Ye(s,d))h!==s[d]&&(s[d]=h,c=!0);else{const v=vn(d);r[v]=nc(l,o,v,h,t,!1)}else h!==s[d]&&(s[d]=h,c=!0)}}}else{Up(t,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!Ye(e,f)&&((u=es(f))===f||!Ye(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=nc(l,o,f,void 0,t,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!Ye(e,f))&&(delete s[f],c=!0)}c&&ei(t.attrs,"set","")}function Up(t,e,n,i){const[r,s]=t.propsOptions;let a=!1,o;if(e)for(let l in e){if(vs(l))continue;const c=e[l];let u;r&&Ye(r,u=vn(l))?!s||!s.includes(u)?n[u]=c:(o||(o={}))[u]=c:So(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=qe(n),c=o||lt;for(let u=0;u<s.length;u++){const f=s[u];n[f]=nc(r,l,f,c[f],t,!Ye(c,f))}}return a}function nc(t,e,n,i,r,s){const a=t[n];if(a!=null){const o=Ye(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Ne(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=qs(r);i=c[n]=l.call(null,e),u()}}else i=l}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===es(n))&&(i=!0))}return i}function Np(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,a={},o=[];let l=!1;if(!Ne(t)){const u=f=>{l=!0;const[d,h]=Np(f,e,!0);gt(a,d),h&&o.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return rt(t)&&i.set(t,Nr),Nr;if(Ie(s))for(let u=0;u<s.length;u++){const f=vn(s[u]);Yu(f)&&(a[f]=lt)}else if(s)for(const u in s){const f=vn(u);if(Yu(f)){const d=s[u],h=a[f]=Ie(d)||Ne(d)?{type:d}:gt({},d);if(h){const v=Zu(Boolean,h.type),g=Zu(String,h.type);h[0]=v>-1,h[1]=g<0||v<g,(v>-1||Ye(h,"default"))&&o.push(f)}}}const c=[a,o];return rt(t)&&i.set(t,c),c}function Yu(t){return t[0]!=="$"&&!vs(t)}function ju(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Ku(t,e){return ju(t)===ju(e)}function Zu(t,e){return Ie(e)?e.findIndex(n=>Ku(n,t)):Ne(e)&&Ku(e,t)?0:-1}const Fp=t=>t[0]==="_"||t==="$stable",Jc=t=>Ie(t)?t.map(Sn):[Sn(t)],O_=(t,e,n)=>{if(e._n)return e;const i=Ut((...r)=>Jc(e(...r)),n);return i._c=!1,i},Op=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Fp(r))continue;const s=t[r];if(Ne(s))e[r]=O_(r,s,i);else if(s!=null){const a=Jc(s);e[r]=()=>a}}},Bp=(t,e)=>{const n=Jc(e);t.slots.default=()=>n},B_=(t,e)=>{const n=t.slots=Ip();if(t.vnode.shapeFlag&32){const i=e._;i?(gt(n,e),Hh(n,"_",i,!0)):Op(e,n)}else e&&Bp(t,e)},k_=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,a=lt;if(i.shapeFlag&32){const o=e._;o?n&&o===1?s=!1:(gt(r,e),!n&&o===1&&delete r._):(s=!e.$stable,Op(e,r)),a=e}else e&&(Bp(t,e),a={default:1});if(s)for(const o in r)!Fp(o)&&a[o]==null&&delete r[o]};function ic(t,e,n,i,r=!1){if(Ie(t)){t.forEach((d,h)=>ic(d,e&&(Ie(e)?e[h]:e),n,i,r));return}if(Ga(i)&&!r)return;const s=i.shapeFlag&4?To(i.component)||i.component.proxy:i.el,a=r?null:s,{i:o,r:l}=t,c=e&&e.r,u=o.refs===lt?o.refs={}:o.refs,f=o.setupState;if(c!=null&&c!==l&&(vt(c)?(u[c]=null,Ye(f,c)&&(f[c]=null)):pt(c)&&(c.value=null)),Ne(l))Ai(l,o,12,[a,u]);else{const d=vt(l),h=pt(l);if(d||h){const v=()=>{if(t.f){const g=d?Ye(f,l)?f[l]:u[l]:l.value;r?Ie(g)&&Pc(g,s):Ie(g)?g.includes(s)||g.push(s):d?(u[l]=[s],Ye(f,l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else d?(u[l]=a,Ye(f,l)&&(f[l]=a)):h&&(l.value=a,t.k&&(u[t.k]=a))};a?(v.id=-1,Wt(v,n)):v()}}}const Wt=h_;function V_(t){return z_(t)}function z_(t,e){const n=Wh();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=fn,insertStaticContent:v}=t,g=(w,R,V,q=null,$=null,le=null,b=void 0,_=null,N=!!R.dynamicChildren)=>{if(w===R)return;w&&!In(w,R)&&(q=B(w),Pe(w,$,le,!0),w=null),R.patchFlag===-2&&(N=!1,R.dynamicChildren=null);const{type:F,ref:G,shapeFlag:K}=R;switch(F){case $s:m(w,R,V,q);break;case dn:p(w,R,V,q);break;case rl:w==null&&M(R,V,q,b);break;case yt:I(w,R,V,q,$,le,b,_,N);break;default:K&1?P(w,R,V,q,$,le,b,_,N):K&6?L(w,R,V,q,$,le,b,_,N):(K&64||K&128)&&F.process(w,R,V,q,$,le,b,_,N,D)}G!=null&&$&&ic(G,w&&w.ref,le,R||w,!R)},m=(w,R,V,q)=>{if(w==null)i(R.el=o(R.children),V,q);else{const $=R.el=w.el;R.children!==w.children&&c($,R.children)}},p=(w,R,V,q)=>{w==null?i(R.el=l(R.children||""),V,q):R.el=w.el},M=(w,R,V,q)=>{[w.el,w.anchor]=v(w.children,R,V,q,w.el,w.anchor)},y=({el:w,anchor:R},V,q)=>{let $;for(;w&&w!==R;)$=d(w),i(w,V,q),w=$;i(R,V,q)},T=({el:w,anchor:R})=>{let V;for(;w&&w!==R;)V=d(w),r(w),w=V;r(R)},P=(w,R,V,q,$,le,b,_,N)=>{R.type==="svg"?b="svg":R.type==="math"&&(b="mathml"),w==null?E(R,V,q,$,le,b,_,N):S(w,R,$,le,b,_,N)},E=(w,R,V,q,$,le,b,_)=>{let N,F;const{props:G,shapeFlag:K,transition:ce,dirs:ie}=w;if(N=w.el=a(w.type,le,G&&G.is,G),K&8?u(N,w.children):K&16&&U(w.children,N,null,q,$,il(w,le),b,_),ie&&ki(w,null,q,"created"),C(N,w,w.scopeId,b,q),G){for(const Ee in G)Ee!=="value"&&!vs(Ee)&&s(N,Ee,null,G[Ee],le,w.children,q,$,ge);"value"in G&&s(N,"value",null,G.value,le),(F=G.onVnodeBeforeMount)&&Cn(F,q,w)}ie&&ki(w,null,q,"beforeMount");const oe=H_($,ce);oe&&ce.beforeEnter(N),i(N,R,V),((F=G&&G.onVnodeMounted)||oe||ie)&&Wt(()=>{F&&Cn(F,q,w),oe&&ce.enter(N),ie&&ki(w,null,q,"mounted")},$)},C=(w,R,V,q,$)=>{if(V&&h(w,V),q)for(let le=0;le<q.length;le++)h(w,q[le]);if($){let le=$.subTree;if(R===le){const b=$.vnode;C(w,b,b.scopeId,b.slotScopeIds,$.parent)}}},U=(w,R,V,q,$,le,b,_,N=0)=>{for(let F=N;F<w.length;F++){const G=w[F]=_?xi(w[F]):Sn(w[F]);g(null,G,R,V,q,$,le,b,_)}},S=(w,R,V,q,$,le,b)=>{const _=R.el=w.el;let{patchFlag:N,dynamicChildren:F,dirs:G}=R;N|=w.patchFlag&16;const K=w.props||lt,ce=R.props||lt;let ie;if(V&&Vi(V,!1),(ie=ce.onVnodeBeforeUpdate)&&Cn(ie,V,R,w),G&&ki(R,w,V,"beforeUpdate"),V&&Vi(V,!0),F?x(w.dynamicChildren,F,_,V,q,il(R,$),le):b||H(w,R,_,null,V,q,il(R,$),le,!1),N>0){if(N&16)O(_,R,K,ce,V,q,$);else if(N&2&&K.class!==ce.class&&s(_,"class",null,ce.class,$),N&4&&s(_,"style",K.style,ce.style,$),N&8){const oe=R.dynamicProps;for(let Ee=0;Ee<oe.length;Ee++){const ue=oe[Ee],Me=K[ue],Fe=ce[ue];(Fe!==Me||ue==="value")&&s(_,ue,Me,Fe,$,w.children,V,q,ge)}}N&1&&w.children!==R.children&&u(_,R.children)}else!b&&F==null&&O(_,R,K,ce,V,q,$);((ie=ce.onVnodeUpdated)||G)&&Wt(()=>{ie&&Cn(ie,V,R,w),G&&ki(R,w,V,"updated")},q)},x=(w,R,V,q,$,le,b)=>{for(let _=0;_<R.length;_++){const N=w[_],F=R[_],G=N.el&&(N.type===yt||!In(N,F)||N.shapeFlag&70)?f(N.el):V;g(N,F,G,null,q,$,le,b,!0)}},O=(w,R,V,q,$,le,b)=>{if(V!==q){if(V!==lt)for(const _ in V)!vs(_)&&!(_ in q)&&s(w,_,V[_],null,b,R.children,$,le,ge);for(const _ in q){if(vs(_))continue;const N=q[_],F=V[_];N!==F&&_!=="value"&&s(w,_,F,N,b,R.children,$,le,ge)}"value"in q&&s(w,"value",V.value,q.value,b)}},I=(w,R,V,q,$,le,b,_,N)=>{const F=R.el=w?w.el:o(""),G=R.anchor=w?w.anchor:o("");let{patchFlag:K,dynamicChildren:ce,slotScopeIds:ie}=R;ie&&(_=_?_.concat(ie):ie),w==null?(i(F,V,q),i(G,V,q),U(R.children||[],V,G,$,le,b,_,N)):K>0&&K&64&&ce&&w.dynamicChildren?(x(w.dynamicChildren,ce,V,$,le,b,_),(R.key!=null||$&&R===$.subTree)&&kp(w,R,!0)):H(w,R,V,G,$,le,b,_,N)},L=(w,R,V,q,$,le,b,_,N)=>{R.slotScopeIds=_,w==null?R.shapeFlag&512?$.ctx.activate(R,V,q,b,N):X(R,V,q,$,le,b,N):J(w,R,N)},X=(w,R,V,q,$,le,b)=>{const _=w.component=j_(w,q,$);if(Mo(w)&&(_.ctx.renderer=D),K_(_),_.asyncDep){if($&&$.registerDep(_,te),!w.el){const N=_.subTree=W(dn);p(null,N,R,V)}}else te(_,w,R,V,$,le,b)},J=(w,R,V)=>{const q=R.component=w.component;if(n_(w,R,V))if(q.asyncDep&&!q.asyncResolved){ne(q,R,V);return}else q.next=R,Kv(q.update),q.effect.dirty=!0,q.update();else R.el=w.el,q.vnode=R},te=(w,R,V,q,$,le,b)=>{const _=()=>{if(w.isMounted){let{next:G,bu:K,u:ce,parent:ie,vnode:oe}=w;{const Re=Vp(w);if(Re){G&&(G.el=oe.el,ne(w,G,b)),Re.asyncDep.then(()=>{w.isUnmounted||_()});return}}let Ee=G,ue;Vi(w,!1),G?(G.el=oe.el,ne(w,G,b)):G=oe,K&&Zo(K),(ue=G.props&&G.props.onVnodeBeforeUpdate)&&Cn(ue,ie,G,oe),Vi(w,!0);const Me=el(w),Fe=w.subTree;w.subTree=Me,g(Fe,Me,f(Fe.el),B(Fe),w,$,le),G.el=Me.el,Ee===null&&Wc(w,Me.el),ce&&Wt(ce,$),(ue=G.props&&G.props.onVnodeUpdated)&&Wt(()=>Cn(ue,ie,G,oe),$)}else{let G;const{el:K,props:ce}=R,{bm:ie,m:oe,parent:Ee}=w,ue=Ga(R);if(Vi(w,!1),ie&&Zo(ie),!ue&&(G=ce&&ce.onVnodeBeforeMount)&&Cn(G,Ee,R),Vi(w,!0),K&&_e){const Me=()=>{w.subTree=el(w),_e(K,w.subTree,w,$,null)};ue?R.type.__asyncLoader().then(()=>!w.isUnmounted&&Me()):Me()}else{const Me=w.subTree=el(w);g(null,Me,V,q,w,$,le),R.el=Me.el}if(oe&&Wt(oe,$),!ue&&(G=ce&&ce.onVnodeMounted)){const Me=R;Wt(()=>Cn(G,Ee,Me),$)}(R.shapeFlag&256||Ee&&Ga(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&w.a&&Wt(w.a,$),w.isMounted=!0,R=V=q=null}},N=w.effect=new Uc(_,fn,()=>Gc(F),w.scope),F=w.update=()=>{N.dirty&&N.run()};F.id=w.uid,Vi(w,!0),F()},ne=(w,R,V)=>{R.component=w;const q=w.vnode.props;w.vnode=R,w.next=null,F_(w,R.props,q,V),k_(w,R.children,V),Ui(),ku(w),Ni()},H=(w,R,V,q,$,le,b,_,N=!1)=>{const F=w&&w.children,G=w?w.shapeFlag:0,K=R.children,{patchFlag:ce,shapeFlag:ie}=R;if(ce>0){if(ce&128){he(F,K,V,q,$,le,b,_,N);return}else if(ce&256){pe(F,K,V,q,$,le,b,_,N);return}}ie&8?(G&16&&ge(F,$,le),K!==F&&u(V,K)):G&16?ie&16?he(F,K,V,q,$,le,b,_,N):ge(F,$,le,!0):(G&8&&u(V,""),ie&16&&U(K,V,q,$,le,b,_,N))},pe=(w,R,V,q,$,le,b,_,N)=>{w=w||Nr,R=R||Nr;const F=w.length,G=R.length,K=Math.min(F,G);let ce;for(ce=0;ce<K;ce++){const ie=R[ce]=N?xi(R[ce]):Sn(R[ce]);g(w[ce],ie,V,null,$,le,b,_,N)}F>G?ge(w,$,le,!0,!1,K):U(R,V,q,$,le,b,_,N,K)},he=(w,R,V,q,$,le,b,_,N)=>{let F=0;const G=R.length;let K=w.length-1,ce=G-1;for(;F<=K&&F<=ce;){const ie=w[F],oe=R[F]=N?xi(R[F]):Sn(R[F]);if(In(ie,oe))g(ie,oe,V,null,$,le,b,_,N);else break;F++}for(;F<=K&&F<=ce;){const ie=w[K],oe=R[ce]=N?xi(R[ce]):Sn(R[ce]);if(In(ie,oe))g(ie,oe,V,null,$,le,b,_,N);else break;K--,ce--}if(F>K){if(F<=ce){const ie=ce+1,oe=ie<G?R[ie].el:q;for(;F<=ce;)g(null,R[F]=N?xi(R[F]):Sn(R[F]),V,oe,$,le,b,_,N),F++}}else if(F>ce)for(;F<=K;)Pe(w[F],$,le,!0),F++;else{const ie=F,oe=F,Ee=new Map;for(F=oe;F<=ce;F++){const $e=R[F]=N?xi(R[F]):Sn(R[F]);$e.key!=null&&Ee.set($e.key,F)}let ue,Me=0;const Fe=ce-oe+1;let Re=!1,be=0;const Oe=new Array(Fe);for(F=0;F<Fe;F++)Oe[F]=0;for(F=ie;F<=K;F++){const $e=w[F];if(Me>=Fe){Pe($e,$,le,!0);continue}let Le;if($e.key!=null)Le=Ee.get($e.key);else for(ue=oe;ue<=ce;ue++)if(Oe[ue-oe]===0&&In($e,R[ue])){Le=ue;break}Le===void 0?Pe($e,$,le,!0):(Oe[Le-oe]=F+1,Le>=be?be=Le:Re=!0,g($e,R[Le],V,null,$,le,b,_,N),Me++)}const Ge=Re?G_(Oe):Nr;for(ue=Ge.length-1,F=Fe-1;F>=0;F--){const $e=oe+F,Le=R[$e],k=$e+1<G?R[$e+1].el:q;Oe[F]===0?g(null,Le,V,k,$,le,b,_,N):Re&&(ue<0||F!==Ge[ue]?Se(Le,V,k,2):ue--)}}},Se=(w,R,V,q,$=null)=>{const{el:le,type:b,transition:_,children:N,shapeFlag:F}=w;if(F&6){Se(w.component.subTree,R,V,q);return}if(F&128){w.suspense.move(R,V,q);return}if(F&64){b.move(w,R,V,D);return}if(b===yt){i(le,R,V);for(let K=0;K<N.length;K++)Se(N[K],R,V,q);i(w.anchor,R,V);return}if(b===rl){y(w,R,V);return}if(q!==2&&F&1&&_)if(q===0)_.beforeEnter(le),i(le,R,V),Wt(()=>_.enter(le),$);else{const{leave:K,delayLeave:ce,afterLeave:ie}=_,oe=()=>i(le,R,V),Ee=()=>{K(le,()=>{oe(),ie&&ie()})};ce?ce(le,oe,Ee):Ee()}else i(le,R,V)},Pe=(w,R,V,q=!1,$=!1)=>{const{type:le,props:b,ref:_,children:N,dynamicChildren:F,shapeFlag:G,patchFlag:K,dirs:ce}=w;if(_!=null&&ic(_,null,V,w,!0),G&256){R.ctx.deactivate(w);return}const ie=G&1&&ce,oe=!Ga(w);let Ee;if(oe&&(Ee=b&&b.onVnodeBeforeUnmount)&&Cn(Ee,R,w),G&6)me(w.component,V,q);else{if(G&128){w.suspense.unmount(V,q);return}ie&&ki(w,null,R,"beforeUnmount"),G&64?w.type.remove(w,R,V,$,D,q):F&&(le!==yt||K>0&&K&64)?ge(F,R,V,!1,!0):(le===yt&&K&384||!$&&G&16)&&ge(N,R,V),q&&Xe(w)}(oe&&(Ee=b&&b.onVnodeUnmounted)||ie)&&Wt(()=>{Ee&&Cn(Ee,R,w),ie&&ki(w,null,R,"unmounted")},V)},Xe=w=>{const{type:R,el:V,anchor:q,transition:$}=w;if(R===yt){ee(V,q);return}if(R===rl){T(w);return}const le=()=>{r(V),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(w.shapeFlag&1&&$&&!$.persisted){const{leave:b,delayLeave:_}=$,N=()=>b(V,le);_?_(w.el,le,N):N()}else le()},ee=(w,R)=>{let V;for(;w!==R;)V=d(w),r(w),w=V;r(R)},me=(w,R,V)=>{const{bum:q,scope:$,update:le,subTree:b,um:_}=w;q&&Zo(q),$.stop(),le&&(le.active=!1,Pe(b,w,R,V)),_&&Wt(_,R),Wt(()=>{w.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},ge=(w,R,V,q=!1,$=!1,le=0)=>{for(let b=le;b<w.length;b++)Pe(w[b],R,V,q,$)},B=w=>w.shapeFlag&6?B(w.component.subTree):w.shapeFlag&128?w.suspense.next():d(w.anchor||w.el);let fe=!1;const ae=(w,R,V)=>{w==null?R._vnode&&Pe(R._vnode,null,null,!0):g(R._vnode||null,w,R,null,null,null,V),fe||(fe=!0,ku(),pp(),fe=!1),R._vnode=w},D={p:g,um:Pe,m:Se,r:Xe,mt:X,mc:U,pc:H,pbc:x,n:B,o:t};let Ce,_e;return{render:ae,hydrate:Ce,createApp:U_(ae,Ce)}}function il({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Vi({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function H_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function kp(t,e,n=!1){const i=t.children,r=e.children;if(Ie(i)&&Ie(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=xi(r[s]),o.el=a.el),n||kp(a,o)),o.type===$s&&(o.el=a.el)}}function G_(t){const e=t.slice(),n=[0];let i,r,s,a,o;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,a=n.length-1;s<a;)o=s+a>>1,t[n[o]]<c?s=o+1:a=o;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=e[a];return n}function Vp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Vp(e)}const W_=t=>t.__isTeleport,yt=Symbol.for("v-fgt"),$s=Symbol.for("v-txt"),dn=Symbol.for("v-cmt"),rl=Symbol.for("v-stc"),Ss=[];let hn=null;function Gr(t=!1){Ss.push(hn=t?null:[])}function zp(){Ss.pop(),hn=Ss[Ss.length-1]||null}let Wr=1;function Ju(t){Wr+=t}function Hp(t){return t.dynamicChildren=Wr>0?hn||Nr:null,zp(),Wr>0&&hn&&hn.push(t),t}function rc(t,e,n,i,r,s){return Hp(Qa(t,e,n,i,r,s,!0))}function Gp(t,e,n,i,r){return Hp(W(t,e,n,i,r,!0))}function Ja(t){return t?t.__v_isVNode===!0:!1}function In(t,e){return t.type===e.type&&t.key===e.key}const Wp=({key:t})=>t??null,Wa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?vt(t)||pt(t)||Ne(t)?{i:Vt,r:t,k:e,f:!!n}:t:null);function Qa(t,e=null,n=null,i=0,r=null,s=t===yt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Wp(e),ref:e&&Wa(e),scopeId:vp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Vt};return o?(Qc(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=vt(n)?8:16),Wr>0&&!a&&hn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&hn.push(l),l}const W=X_;function X_(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===s_)&&(t=dn),Ja(t)){const o=Pi(t,e,!0);return n&&Qc(o,n),Wr>0&&!s&&hn&&(o.shapeFlag&6?hn[hn.indexOf(t)]=o:hn.push(o)),o.patchFlag|=-2,o}if(t0(t)&&(t=t.__vccOpts),e){e=$_(e);let{class:o,style:l}=e;o&&!vt(o)&&(e.class=Dc(o)),rt(l)&&(ap(l)&&!Ie(l)&&(l=gt({},l)),e.style=Ic(l))}const a=vt(t)?1:o_(t)?128:W_(t)?64:rt(t)?4:Ne(t)?2:0;return Qa(t,e,n,i,r,a,s,!0)}function $_(t){return t?ap(t)||Dp(t)?gt({},t):t:null}function Pi(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=t,c=e?ur(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Wp(c),ref:e&&e.ref?n&&s?Ie(s)?s.concat(Wa(e)):[s,Wa(e)]:Wa(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==yt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Pi(t.ssContent),ssFallback:t.ssFallback&&Pi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&(u.transition=l.clone(u)),u}function eo(t=" ",e=0){return W($s,null,t,e)}function Sn(t){return t==null||typeof t=="boolean"?W(dn):Ie(t)?W(yt,null,t.slice()):typeof t=="object"?xi(t):W($s,null,String(t))}function xi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Pi(t)}function Qc(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ie(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Qc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Dp(e)?e._ctx=Vt:r===3&&Vt&&(Vt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ne(e)?(e={default:e,_ctx:Vt},n=32):(e=String(e),i&64?(n=16,e=[eo(e)]):n=8);t.children=e,t.shapeFlag|=n}function ur(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Dc([e.class,i.class]));else if(r==="style")e.style=Ic([e.style,i.style]);else if(vo(r)){const s=e[r],a=i[r];a&&s!==a&&!(Ie(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function Cn(t,e,n,i=null){gn(t,e,7,[n,i])}const q_=Pp();let Y_=0;function j_(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||q_,s={uid:Y_++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new qh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Np(i,r),emitsOptions:gp(i,r),emit:null,emitted:null,propsDefaults:lt,inheritAttrs:i.inheritAttrs,ctx:lt,data:lt,props:lt,attrs:lt,slots:lt,refs:lt,setupState:lt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Jv.bind(null,s),t.ce&&t.ce(s),s}let wt=null;const eu=()=>wt||Vt;let to,sc;{const t=Wh(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};to=e("__VUE_INSTANCE_SETTERS__",n=>wt=n),sc=e("__VUE_SSR_SETTERS__",n=>bo=n)}const qs=t=>{const e=wt;return to(t),t.scope.on(),()=>{t.scope.off(),to(e)}},Qu=()=>{wt&&wt.scope.off(),to(null)};function Xp(t){return t.vnode.shapeFlag&4}let bo=!1;function K_(t,e=!1){e&&sc(e);const{props:n,children:i}=t.vnode,r=Xp(t);N_(t,n,r,e),B_(t,i);const s=r?Z_(t,e):void 0;return e&&sc(!1),s}function Z_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,w_);const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?Q_(t):null,s=qs(t);Ui();const a=Ai(i,t,0,[t.props,r]);if(Ni(),s(),kh(a)){if(a.then(Qu,Qu),e)return a.then(o=>{ac(t,o,e)}).catch(o=>{Ws(o,t,0)});t.asyncDep=a}else ac(t,a,e)}else $p(t,e)}function ac(t,e,n){Ne(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:rt(e)&&(t.setupState=up(e)),$p(t,n)}let ef;function $p(t,e,n){const i=t.type;if(!t.render){if(!e&&ef&&!i.render){const r=i.template||Zc(t).template;if(r){const{isCustomElement:s,compilerOptions:a}=t.appContext.config,{delimiters:o,compilerOptions:l}=i,c=gt(gt({isCustomElement:s,delimiters:o},a),l);i.render=ef(r,c)}}t.render=i.render||fn}{const r=qs(t);Ui();try{C_(t)}finally{Ni(),r()}}}const J_={get(t,e){return Kt(t,"get",""),t[e]}};function Q_(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,J_),slots:t.slots,emit:t.emit,expose:e}}function To(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(up(Hv(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in xs)return xs[n](t)},has(e,n){return n in e||n in xs}}))}function e0(t,e=!0){return Ne(t)?t.displayName||t.name:t.name||e&&t.__name}function t0(t){return Ne(t)&&"__vccOpts"in t}const se=(t,e)=>Gv(t,e,bo);function Vn(t,e,n){const i=arguments.length;return i===2?rt(e)&&!Ie(e)?Ja(e)?W(t,null,[e]):W(t,e):W(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Ja(n)&&(n=[n]),W(t,e,n))}const n0="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const i0="http://www.w3.org/2000/svg",r0="http://www.w3.org/1998/Math/MathML",yi=typeof document<"u"?document:null,tf=yi&&yi.createElement("template"),s0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?yi.createElementNS(i0,t):e==="mathml"?yi.createElementNS(r0,t):yi.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>yi.createTextNode(t),createComment:t=>yi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>yi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const a=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{tf.innerHTML=i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t;const o=tf.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},li="transition",os="animation",Xr=Symbol("_vtc"),ns=(t,{slots:e})=>Vn(x_,Yp(t),e);ns.displayName="Transition";const qp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},a0=ns.props=gt({},Mp,qp),zi=(t,e=[])=>{Ie(t)?t.forEach(n=>n(...e)):t&&t(...e)},nf=t=>t?Ie(t)?t.some(e=>e.length>1):t.length>1:!1;function Yp(t){const e={};for(const I in t)I in qp||(e[I]=t[I]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:o=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=t,v=o0(r),g=v&&v[0],m=v&&v[1],{onBeforeEnter:p,onEnter:M,onEnterCancelled:y,onLeave:T,onLeaveCancelled:P,onBeforeAppear:E=p,onAppear:C=M,onAppearCancelled:U=y}=e,S=(I,L,X)=>{gi(I,L?u:o),gi(I,L?c:a),X&&X()},x=(I,L)=>{I._isLeaving=!1,gi(I,f),gi(I,h),gi(I,d),L&&L()},O=I=>(L,X)=>{const J=I?C:M,te=()=>S(L,I,X);zi(J,[L,te]),rf(()=>{gi(L,I?l:s),Kn(L,I?u:o),nf(J)||sf(L,i,g,te)})};return gt(e,{onBeforeEnter(I){zi(p,[I]),Kn(I,s),Kn(I,a)},onBeforeAppear(I){zi(E,[I]),Kn(I,l),Kn(I,c)},onEnter:O(!1),onAppear:O(!0),onLeave(I,L){I._isLeaving=!0;const X=()=>x(I,L);Kn(I,f),Kn(I,d),Kp(),rf(()=>{I._isLeaving&&(gi(I,f),Kn(I,h),nf(T)||sf(I,i,m,X))}),zi(T,[I,X])},onEnterCancelled(I){S(I,!1),zi(y,[I])},onAppearCancelled(I){S(I,!0),zi(U,[I])},onLeaveCancelled(I){x(I),zi(P,[I])}})}function o0(t){if(t==null)return null;if(rt(t))return[sl(t.enter),sl(t.leave)];{const e=sl(t);return[e,e]}}function sl(t){return Gh(t)}function Kn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Xr]||(t[Xr]=new Set)).add(e)}function gi(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[Xr];n&&(n.delete(e),n.size||(t[Xr]=void 0))}function rf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let l0=0;function sf(t,e,n,i){const r=t._endId=++l0,s=()=>{r===t._endId&&i()};if(n)return setTimeout(s,n);const{type:a,timeout:o,propCount:l}=jp(t,e);if(!a)return i();const c=a+"end";let u=0;const f=()=>{t.removeEventListener(c,d),s()},d=h=>{h.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},o+1),t.addEventListener(c,d)}function jp(t,e){const n=window.getComputedStyle(t),i=v=>(n[v]||"").split(", "),r=i(`${li}Delay`),s=i(`${li}Duration`),a=af(r,s),o=i(`${os}Delay`),l=i(`${os}Duration`),c=af(o,l);let u=null,f=0,d=0;e===li?a>0&&(u=li,f=a,d=s.length):e===os?c>0&&(u=os,f=c,d=l.length):(f=Math.max(a,c),u=f>0?a>c?li:os:null,d=u?u===li?s.length:l.length:0);const h=u===li&&/\b(transform|all)(,|$)/.test(i(`${li}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:h}}function af(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>of(n)+of(t[i])))}function of(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Kp(){return document.body.offsetHeight}function c0(t,e,n){const i=t[Xr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const no=Symbol("_vod"),Zp=Symbol("_vsh"),Jp={beforeMount(t,{value:e},{transition:n}){t[no]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):ls(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),ls(t,!0),i.enter(t)):i.leave(t,()=>{ls(t,!1)}):ls(t,e))},beforeUnmount(t,{value:e}){ls(t,e)}};function ls(t,e){t.style.display=e?t[no]:"none",t[Zp]=!e}const u0=Symbol(""),f0=/(^|;)\s*display\s*:/;function d0(t,e,n){const i=t.style,r=vt(n);let s=!1;if(n&&!r){if(e)if(vt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();n[o]==null&&Xa(i,o,"")}else for(const a in e)n[a]==null&&Xa(i,a,"");for(const a in n)a==="display"&&(s=!0),Xa(i,a,n[a])}else if(r){if(e!==n){const a=i[u0];a&&(n+=";"+a),i.cssText=n,s=f0.test(n)}}else e&&t.removeAttribute("style");no in t&&(t[no]=s?i.display:"",t[Zp]&&(i.display="none"))}const lf=/\s*!important$/;function Xa(t,e,n){if(Ie(n))n.forEach(i=>Xa(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=h0(t,e);lf.test(n)?t.setProperty(es(i),n.replace(lf,""),"important"):t[i]=n}}const cf=["Webkit","Moz","ms"],al={};function h0(t,e){const n=al[e];if(n)return n;let i=vn(e);if(i!=="filter"&&i in t)return al[e]=i;i=ni(i);for(let r=0;r<cf.length;r++){const s=cf[r]+i;if(s in t)return al[e]=s}return e}const uf="http://www.w3.org/1999/xlink";function p0(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(uf,e.slice(6,e.length)):t.setAttributeNS(uf,e,n);else{const s=vv(e);n==null||s&&!Xh(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function m0(t,e,n,i,r,s,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,r,s),t[e]=n??"";return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const c=o==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(c!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Xh(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function g0(t,e,n,i){t.addEventListener(e,n,i)}function v0(t,e,n,i){t.removeEventListener(e,n,i)}const ff=Symbol("_vei");function _0(t,e,n,i,r=null){const s=t[ff]||(t[ff]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=x0(e);if(i){const c=s[e]=M0(i,r);g0(t,o,c,l)}else a&&(v0(t,o,a,l),s[e]=void 0)}}const df=/(?:Once|Passive|Capture)$/;function x0(t){let e;if(df.test(t)){e={};let i;for(;i=t.match(df);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):es(t.slice(2)),e]}let ol=0;const y0=Promise.resolve(),S0=()=>ol||(y0.then(()=>ol=0),ol=Date.now());function M0(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;gn(E0(i,n.value),e,5,[i])};return n.value=t,n.attached=S0(),n}function E0(t,e){if(Ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const hf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,b0=(t,e,n,i,r,s,a,o,l)=>{const c=r==="svg";e==="class"?c0(t,i,c):e==="style"?d0(t,n,i):vo(e)?Rc(e)||_0(t,e,n,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):T0(t,e,i,c))?m0(t,e,i,s,a,o,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),p0(t,e,i,c))};function T0(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&hf(e)&&Ne(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return hf(e)&&vt(n)?!1:e in t}const Qp=new WeakMap,em=new WeakMap,io=Symbol("_moveCb"),pf=Symbol("_enterCb"),tm={name:"TransitionGroup",props:gt({},a0,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=eu(),i=Sp();let r,s;return Kc(()=>{if(!r.length)return;const a=t.moveClass||`${t.name||"v"}-move`;if(!P0(r[0].el,n.vnode.el,a))return;r.forEach(w0),r.forEach(C0);const o=r.filter(R0);Kp(),o.forEach(l=>{const c=l.el,u=c.style;Kn(c,a),u.transform=u.webkitTransform=u.transitionDuration="";const f=c[io]=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",f),c[io]=null,gi(c,a))};c.addEventListener("transitionend",f)})}),()=>{const a=qe(t),o=Yp(a);let l=a.tag||yt;if(r=[],s)for(let c=0;c<s.length;c++){const u=s[c];u.el&&u.el instanceof Element&&(r.push(u),Us(u,Ds(u,o,i,n)),Qp.set(u,u.el.getBoundingClientRect()))}s=e.default?jc(e.default()):[];for(let c=0;c<s.length;c++){const u=s[c];u.key!=null&&Us(u,Ds(u,o,i,n))}return W(l,null,s)}}},A0=t=>delete t.mode;tm.props;const tu=tm;function w0(t){const e=t.el;e[io]&&e[io](),e[pf]&&e[pf]()}function C0(t){em.set(t,t.el.getBoundingClientRect())}function R0(t){const e=Qp.get(t),n=em.get(t),i=e.left-n.left,r=e.top-n.top;if(i||r){const s=t.el.style;return s.transform=s.webkitTransform=`translate(${i}px,${r}px)`,s.transitionDuration="0s",t}}function P0(t,e,n){const i=t.cloneNode(),r=t[Xr];r&&r.forEach(o=>{o.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),n.split(/\s+/).forEach(o=>o&&i.classList.add(o)),i.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(i);const{hasTransform:a}=jp(i);return s.removeChild(i),a}const L0=gt({patchProp:b0},s0);let mf;function I0(){return mf||(mf=V_(L0))}const D0=(...t)=>{const e=I0().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=N0(i);if(!r)return;const s=e._component;!Ne(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=n(r,!1,U0(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function U0(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function N0(t){return vt(t)?document.querySelector(t):t}function nm(t,e){let n;function i(){n=_v(),n.run(()=>e.length?e(()=>{n==null||n.stop(),i()}):e())}mt(t,r=>{r&&!n?i():r||(n==null||n.stop(),n=void 0)},{immediate:!0}),Sv(()=>{n==null||n.stop()})}const pn=typeof window<"u",nu=pn&&"IntersectionObserver"in window,F0=pn&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);function O0(t,e,n){const i=e.length-1;if(i<0)return t===void 0?n:t;for(let r=0;r<i;r++){if(t==null)return n;t=t[e[r]]}return t==null||t[e[i]]===void 0?n:t[e[i]]}function iu(t,e){if(t===e)return!0;if(t instanceof Date&&e instanceof Date&&t.getTime()!==e.getTime()||t!==Object(t)||e!==Object(e))return!1;const n=Object.keys(t);return n.length!==Object.keys(e).length?!1:n.every(i=>iu(t[i],e[i]))}function gf(t,e,n){return t==null||!e||typeof e!="string"?n:t[e]!==void 0?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),O0(t,e.split("."),n))}function im(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:t},(n,i)=>e+i)}function Je(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(t==null||t===""))return isNaN(+t)?String(t):isFinite(+t)?`${Number(t)}${e}`:void 0}function oc(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}function B0(t){if(t&&"$el"in t){const e=t.$el;return(e==null?void 0:e.nodeType)===Node.TEXT_NODE?e.nextElementSibling:e}return t}const vf=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function ll(t,e){return e.every(n=>t.hasOwnProperty(n))}function k0(t,e){const n={},i=new Set(Object.keys(t));for(const r of e)i.has(r)&&(n[r]=t[r]);return n}function V0(t){return t==null?[]:Array.isArray(t)?t:[t]}function ro(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(n,t))}function _f(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return t+n.repeat(Math.max(0,e-t.length))}function xf(t,e){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,e-t.length))+t}function z0(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let i=0;for(;i<t.length;)n.push(t.substr(i,e)),i+=e;return n}function nn(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const i={};for(const r in t)i[r]=t[r];for(const r in e){const s=t[r],a=e[r];if(oc(s)&&oc(a)){i[r]=nn(s,a,n);continue}if(Array.isArray(s)&&Array.isArray(a)&&n){i[r]=n(s,a);continue}i[r]=a}return i}function rm(t){return t.map(e=>e.type===yt?rm(e.children):e).flat()}function sr(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(sr.cache.has(t))return sr.cache.get(t);const e=t.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return sr.cache.set(t,e),e}sr.cache=new Map;function Ms(t,e){if(!e||typeof e!="object")return[];if(Array.isArray(e))return e.map(n=>Ms(t,n)).flat(1);if(Array.isArray(e.children))return e.children.map(n=>Ms(t,n)).flat(1);if(e.component){if(Object.getOwnPropertySymbols(e.component.provides).includes(t))return[e.component];if(e.component.subTree)return Ms(t,e.component.subTree).flat(1)}return[]}function sm(t){const e=$t({}),n=se(t);return cr(()=>{for(const i in n.value)e[i]=n.value[i]},{flush:"sync"}),zc(e)}function lc(t,e){return t.includes(e)}function yf(t,e){return e="on"+ni(e),!!(t[e]||t[`${e}Once`]||t[`${e}Capture`]||t[`${e}OnceCapture`]||t[`${e}CaptureOnce`])}function Sf(t,e){const n=ut();return cr(()=>{n.value=t()},{flush:"sync",...e}),Gs(n)}function H0(){const t=ut(),e=n=>{t.value=n};return Object.defineProperty(e,"value",{enumerable:!0,get:()=>t.value,set:n=>t.value=n}),Object.defineProperty(e,"el",{enumerable:!0,get:()=>B0(t.value)}),e}const G0=["top","bottom"],W0=["start","end","left","right"];function X0(t,e){let[n,i]=t.split(" ");return i||(i=lc(G0,n)?"start":lc(W0,n)?"top":"center"),{side:Mf(n,e),align:Mf(i,e)}}function Mf(t,e){return t==="start"?e?"right":"left":t==="end"?e?"left":"right":t}const pr=2.4,Ef=.2126729,bf=.7151522,Tf=.072175,$0=.55,q0=.58,Y0=.57,j0=.62,pa=.03,Af=1.45,K0=5e-4,Z0=1.25,J0=1.25,wf=.078,Cf=12.82051282051282,ma=.06,Rf=.001;function Pf(t,e){const n=(t.r/255)**pr,i=(t.g/255)**pr,r=(t.b/255)**pr,s=(e.r/255)**pr,a=(e.g/255)**pr,o=(e.b/255)**pr;let l=n*Ef+i*bf+r*Tf,c=s*Ef+a*bf+o*Tf;if(l<=pa&&(l+=(pa-l)**Af),c<=pa&&(c+=(pa-c)**Af),Math.abs(c-l)<K0)return 0;let u;if(c>l){const f=(c**$0-l**q0)*Z0;u=f<Rf?0:f<wf?f-f*Cf*ma:f-ma}else{const f=(c**j0-l**Y0)*J0;u=f>-Rf?0:f>-wf?f-f*Cf*ma:f+ma}return u*100}const so=.20689655172413793,Q0=t=>t>so**3?Math.cbrt(t):t/(3*so**2)+4/29,ex=t=>t>so?t**3:3*so**2*(t-4/29);function am(t){const e=Q0,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function om(t){const e=ex,n=(t[0]+16)/116;return[e(n+t[1]/500)*.95047,e(n),e(n-t[2]/200)*1.08883]}const tx=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],nx=t=>t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055,ix=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],rx=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function lm(t){const e=Array(3),n=nx,i=tx;for(let r=0;r<3;++r)e[r]=Math.round(ro(n(i[r][0]*t[0]+i[r][1]*t[1]+i[r][2]*t[2]))*255);return{r:e[0],g:e[1],b:e[2]}}function ru(t){let{r:e,g:n,b:i}=t;const r=[0,0,0],s=rx,a=ix;e=s(e/255),n=s(n/255),i=s(i/255);for(let o=0;o<3;++o)r[o]=a[o][0]*e+a[o][1]*n+a[o][2]*i;return r}function cc(t){return!!t&&/^(#|var\(--|(rgb|hsl)a?\()/.test(t)}function sx(t){return cc(t)&&!/^((rgb|hsl)a?\()?var\(--/.test(t)}const Lf=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,ax={rgb:(t,e,n,i)=>({r:t,g:e,b:n,a:i}),rgba:(t,e,n,i)=>({r:t,g:e,b:n,a:i}),hsl:(t,e,n,i)=>If({h:t,s:e,l:n,a:i}),hsla:(t,e,n,i)=>If({h:t,s:e,l:n,a:i}),hsv:(t,e,n,i)=>Ns({h:t,s:e,v:n,a:i}),hsva:(t,e,n,i)=>Ns({h:t,s:e,v:n,a:i})};function Un(t){if(typeof t=="number")return{r:(t&16711680)>>16,g:(t&65280)>>8,b:t&255};if(typeof t=="string"&&Lf.test(t)){const{groups:e}=t.match(Lf),{fn:n,values:i}=e,r=i.split(/,\s*/).map(s=>s.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(s)/100:parseFloat(s));return ax[n](...r)}else if(typeof t=="string"){let e=t.startsWith("#")?t.slice(1):t;return[3,4].includes(e.length)?e=e.split("").map(n=>n+n).join(""):[6,8].includes(e.length),lx(e)}else if(typeof t=="object"){if(ll(t,["r","g","b"]))return t;if(ll(t,["h","s","l"]))return Ns(cm(t));if(ll(t,["h","s","v"]))return Ns(t)}throw new TypeError(`Invalid color: ${t==null?t:String(t)||t.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function Ns(t){const{h:e,s:n,v:i,a:r}=t,s=o=>{const l=(o+e/60)%6;return i-i*n*Math.max(Math.min(l,4-l,1),0)},a=[s(5),s(3),s(1)].map(o=>Math.round(o*255));return{r:a[0],g:a[1],b:a[2],a:r}}function If(t){return Ns(cm(t))}function cm(t){const{h:e,s:n,l:i,a:r}=t,s=i+n*Math.min(i,1-i),a=s===0?0:2-2*i/s;return{h:e,s:a,v:s,a:r}}function ga(t){const e=Math.round(t).toString(16);return("00".substr(0,2-e.length)+e).toUpperCase()}function ox(t){let{r:e,g:n,b:i,a:r}=t;return`#${[ga(e),ga(n),ga(i),r!==void 0?ga(Math.round(r*255)):""].join("")}`}function lx(t){t=cx(t);let[e,n,i,r]=z0(t,2).map(s=>parseInt(s,16));return r=r===void 0?r:r/255,{r:e,g:n,b:i,a:r}}function cx(t){return t.startsWith("#")&&(t=t.slice(1)),t=t.replace(/([^0-9a-f])/gi,"F"),(t.length===3||t.length===4)&&(t=t.split("").map(e=>e+e).join("")),t.length!==6&&(t=_f(_f(t,6),8,"F")),t}function ux(t,e){const n=am(ru(t));return n[0]=n[0]+e*10,lm(om(n))}function fx(t,e){const n=am(ru(t));return n[0]=n[0]-e*10,lm(om(n))}function dx(t){const e=Un(t);return ru(e)[1]}function um(t){const e=Math.abs(Pf(Un(0),Un(t)));return Math.abs(Pf(Un(16777215),Un(t)))>Math.min(e,50)?"#fff":"#000"}function Ue(t,e){return n=>Object.keys(t).reduce((i,r)=>{const a=typeof t[r]=="object"&&t[r]!=null&&!Array.isArray(t[r])?t[r]:{type:t[r]};return n&&r in n?i[r]={...a,default:n[r]}:i[r]=a,e&&!i[r].source&&(i[r].source=e),i},{})}const ft=Ue({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component"),$r=Symbol.for("vuetify:defaults");function hx(t){return Mt(t)}function su(){const t=At($r);if(!t)throw new Error("[Vuetify] Could not find defaults instance");return t}function Ao(t,e){const n=su(),i=Mt(t),r=se(()=>{if(qt(e==null?void 0:e.disabled))return n.value;const a=qt(e==null?void 0:e.scoped),o=qt(e==null?void 0:e.reset),l=qt(e==null?void 0:e.root);if(i.value==null&&!(a||o||l))return n.value;let c=nn(i.value,{prev:n.value});if(a)return c;if(o||l){const u=Number(o||1/0);for(let f=0;f<=u&&!(!c||!("prev"in c));f++)c=c.prev;return c&&typeof l=="string"&&l in c&&(c=nn(nn(c,{prev:c}),c[l])),c}return c.prev?nn(c.prev,c):c});return Tn($r,r),r}function px(t,e){var n,i;return typeof((n=t.props)==null?void 0:n[e])<"u"||typeof((i=t.props)==null?void 0:i[sr(e)])<"u"}function mx(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:su();const i=sn("useDefaults");if(e=e??i.type.name??i.type.__name,!e)throw new Error("[Vuetify] Could not determine component name");const r=se(()=>{var l;return(l=n.value)==null?void 0:l[t._as??e]}),s=new Proxy(t,{get(l,c){var f,d,h,v;const u=Reflect.get(l,c);return c==="class"||c==="style"?[(f=r.value)==null?void 0:f[c],u].filter(g=>g!=null):typeof c=="string"&&!px(i.vnode,c)?((d=r.value)==null?void 0:d[c])??((v=(h=n.value)==null?void 0:h.global)==null?void 0:v[c])??u:u}}),a=ut();cr(()=>{if(r.value){const l=Object.entries(r.value).filter(c=>{let[u]=c;return u.startsWith(u[0].toUpperCase())});a.value=l.length?Object.fromEntries(l):void 0}else a.value=void 0});function o(){const l=gx($r,i);Tn($r,se(()=>a.value?nn((l==null?void 0:l.value)??{},a.value):l==null?void 0:l.value))}return{props:s,provideSubDefaults:o}}function Ys(t){if(t._setup=t._setup??t.setup,!t.name)return t;if(t._setup){t.props=Ue(t.props??{},t.name)();const e=Object.keys(t.props).filter(n=>n!=="class"&&n!=="style");t.filterProps=function(i){return k0(i,e)},t.props._as=String,t.setup=function(i,r){const s=su();if(!s.value)return t._setup(i,r);const{props:a,provideSubDefaults:o}=mx(i,i._as??t.name,s),l=t._setup(a,r);return o(),l}}return t}function et(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(t?Ys:Xs)(e)}function fm(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return et()({name:n??ni(vn(t.replace(/__/g,"-"))),props:{tag:{type:String,default:e},...ft()},setup(i,r){let{slots:s}=r;return()=>{var a;return Vn(i.tag,{class:[t,i.class],style:i.style},(a=s.default)==null?void 0:a.call(s))}}})}function sn(t,e){const n=eu();if(!n)throw new Error(`[Vuetify] ${t} must be called from inside a setup function`);return n}function fr(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const e=sn(t).type;return sr((e==null?void 0:e.aliasName)||(e==null?void 0:e.name))}let dm=0,$a=new WeakMap;function wo(){const t=sn("getUid");if($a.has(t))return $a.get(t);{const e=dm++;return $a.set(t,e),e}}wo.reset=()=>{dm=0,$a=new WeakMap};function gx(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:sn("injectSelf");const{provides:n}=e;if(n&&t in n)return n[t]}function dt(t){const e=sn("useRender");e.render=t}function Co(t,e,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:f=>f,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:f=>f;const s=sn("useProxiedModel"),a=Mt(t[e]!==void 0?t[e]:n),o=sr(e),c=se(o!==e?()=>{var f,d,h,v;return t[e],!!(((f=s.vnode.props)!=null&&f.hasOwnProperty(e)||(d=s.vnode.props)!=null&&d.hasOwnProperty(o))&&((h=s.vnode.props)!=null&&h.hasOwnProperty(`onUpdate:${e}`)||(v=s.vnode.props)!=null&&v.hasOwnProperty(`onUpdate:${o}`)))}:()=>{var f,d;return t[e],!!((f=s.vnode.props)!=null&&f.hasOwnProperty(e)&&((d=s.vnode.props)!=null&&d.hasOwnProperty(`onUpdate:${e}`)))});nm(()=>!c.value,()=>{mt(()=>t[e],f=>{a.value=f})});const u=se({get(){const f=t[e];return i(c.value?f:a.value)},set(f){const d=r(f),h=qe(c.value?t[e]:a.value);h===d||i(h)===f||(a.value=d,s==null||s.emit(`update:${e}`,d))}});return Object.defineProperty(u,"externalValue",{get:()=>c.value?t[e]:a.value}),u}const vx={badge:"Badge",open:"Open",close:"Close",dismiss:"Dismiss",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM",title:"Select Time"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},Df="$vuetify.",Uf=(t,e)=>t.replace(/\{(\d+)\}/g,(n,i)=>String(e[+i])),hm=(t,e,n)=>function(i){for(var r=arguments.length,s=new Array(r>1?r-1:0),a=1;a<r;a++)s[a-1]=arguments[a];if(!i.startsWith(Df))return Uf(i,s);const o=i.replace(Df,""),l=t.value&&n.value[t.value],c=e.value&&n.value[e.value];let u=gf(l,o,null);return u||(`${i}${t.value}`,u=gf(c,o,null)),u||(u=i),typeof u!="string"&&(u=i),Uf(u,s)};function pm(t,e){return(n,i)=>new Intl.NumberFormat([t.value,e.value],i).format(n)}function cl(t,e,n){const i=Co(t,e,t[e]??n.value);return i.value=t[e]??n.value,mt(n,r=>{t[e]==null&&(i.value=n.value)}),i}function mm(t){return e=>{const n=cl(e,"locale",t.current),i=cl(e,"fallback",t.fallback),r=cl(e,"messages",t.messages);return{name:"vuetify",current:n,fallback:i,messages:r,t:hm(n,i,r),n:pm(n,i),provide:mm({current:n,fallback:i,messages:r})}}}function _x(t){const e=ut((t==null?void 0:t.locale)??"en"),n=ut((t==null?void 0:t.fallback)??"en"),i=Mt({en:vx,...t==null?void 0:t.messages});return{name:"vuetify",current:e,fallback:n,messages:i,t:hm(e,n,i),n:pm(e,n),provide:mm({current:e,fallback:n,messages:i})}}const uc=Symbol.for("vuetify:locale");function xx(t){return t.name!=null}function yx(t){const e=t!=null&&t.adapter&&xx(t==null?void 0:t.adapter)?t==null?void 0:t.adapter:_x(t),n=Mx(e,t);return{...e,...n}}function Sx(){return{af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,km:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1}}function Mx(t,e){const n=Mt((e==null?void 0:e.rtl)??Sx()),i=se(()=>n.value[t.current.value]??!1);return{isRtl:i,rtl:n,rtlClasses:se(()=>`v-locale--is-${i.value?"rtl":"ltr"}`)}}function js(){const t=At(uc);if(!t)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:t.isRtl,rtlClasses:t.rtlClasses}}const Fs={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function Ex(t,e){const n=[];let i=[];const r=gm(t),s=vm(t),a=(r.getDay()-Fs[e.slice(-2).toUpperCase()]+7)%7,o=(s.getDay()-Fs[e.slice(-2).toUpperCase()]+7)%7;for(let l=0;l<a;l++){const c=new Date(r);c.setDate(c.getDate()-(a-l)),i.push(c)}for(let l=1;l<=s.getDate();l++){const c=new Date(t.getFullYear(),t.getMonth(),l);i.push(c),i.length===7&&(n.push(i),i=[])}for(let l=1;l<7-o;l++){const c=new Date(s);c.setDate(c.getDate()+l),i.push(c)}return i.length>0&&n.push(i),n}function bx(t,e){const n=new Date(t);for(;n.getDay()!==(Fs[e.slice(-2).toUpperCase()]??0);)n.setDate(n.getDate()-1);return n}function Tx(t,e){const n=new Date(t),i=((Fs[e.slice(-2).toUpperCase()]??0)+6)%7;for(;n.getDay()!==i;)n.setDate(n.getDate()+1);return n}function gm(t){return new Date(t.getFullYear(),t.getMonth(),1)}function vm(t){return new Date(t.getFullYear(),t.getMonth()+1,0)}function Ax(t){const e=t.split("-").map(Number);return new Date(e[0],e[1]-1,e[2])}const wx=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;function _m(t){if(t==null)return new Date;if(t instanceof Date)return t;if(typeof t=="string"){let e;if(wx.test(t))return Ax(t);if(e=Date.parse(t),!isNaN(e))return new Date(e)}return null}const Nf=new Date(2e3,0,2);function Cx(t){const e=Fs[t.slice(-2).toUpperCase()];return im(7).map(n=>{const i=new Date(Nf);return i.setDate(Nf.getDate()+e+n),new Intl.DateTimeFormat(t,{weekday:"narrow"}).format(i)})}function Rx(t,e,n,i){const r=_m(t)??new Date,s=i==null?void 0:i[e];if(typeof s=="function")return s(r,e,n);let a={};switch(e){case"fullDate":a={year:"numeric",month:"long",day:"numeric"};break;case"fullDateWithWeekday":a={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;case"normalDate":const o=r.getDate(),l=new Intl.DateTimeFormat(n,{month:"long"}).format(r);return`${o} ${l}`;case"normalDateWithWeekday":a={weekday:"short",day:"numeric",month:"short"};break;case"shortDate":a={month:"short",day:"numeric"};break;case"year":a={year:"numeric"};break;case"month":a={month:"long"};break;case"monthShort":a={month:"short"};break;case"monthAndYear":a={month:"long",year:"numeric"};break;case"monthAndDate":a={month:"long",day:"numeric"};break;case"weekday":a={weekday:"long"};break;case"weekdayShort":a={weekday:"short"};break;case"dayOfMonth":return new Intl.NumberFormat(n).format(r.getDate());case"hours12h":a={hour:"numeric",hour12:!0};break;case"hours24h":a={hour:"numeric",hour12:!1};break;case"minutes":a={minute:"numeric"};break;case"seconds":a={second:"numeric"};break;case"fullTime":a={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime12h":a={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime24h":a={hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"fullDateTime":a={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime12h":a={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime24h":a={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDate":a={year:"numeric",month:"2-digit",day:"2-digit"};break;case"keyboardDateTime":a={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDateTime12h":a={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"keyboardDateTime24h":a={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;default:a=s??{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(n,a).format(r)}function Px(t,e){const n=t.toJsDate(e),i=n.getFullYear(),r=xf(String(n.getMonth()+1),2,"0"),s=xf(String(n.getDate()),2,"0");return`${i}-${r}-${s}`}function Lx(t){const[e,n,i]=t.split("-").map(Number);return new Date(e,n-1,i)}function Ix(t,e){const n=new Date(t);return n.setMinutes(n.getMinutes()+e),n}function Dx(t,e){const n=new Date(t);return n.setHours(n.getHours()+e),n}function Ux(t,e){const n=new Date(t);return n.setDate(n.getDate()+e),n}function Nx(t,e){const n=new Date(t);return n.setDate(n.getDate()+e*7),n}function Fx(t,e){const n=new Date(t);return n.setDate(1),n.setMonth(n.getMonth()+e),n}function Ox(t){return t.getFullYear()}function Bx(t){return t.getMonth()}function kx(t){return t.getDate()}function Vx(t){return new Date(t.getFullYear(),t.getMonth()+1,1)}function zx(t){return new Date(t.getFullYear(),t.getMonth()-1,1)}function Hx(t){return t.getHours()}function Gx(t){return t.getMinutes()}function Wx(t){return new Date(t.getFullYear(),0,1)}function Xx(t){return new Date(t.getFullYear(),11,31)}function $x(t,e){return ao(t,e[0])&&jx(t,e[1])}function qx(t){const e=new Date(t);return e instanceof Date&&!isNaN(e.getTime())}function ao(t,e){return t.getTime()>e.getTime()}function Yx(t,e){return ao(fc(t),fc(e))}function jx(t,e){return t.getTime()<e.getTime()}function Ff(t,e){return t.getTime()===e.getTime()}function Kx(t,e){return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function Zx(t,e){return t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function Jx(t,e){return t.getFullYear()===e.getFullYear()}function Qx(t,e,n){const i=new Date(t),r=new Date(e);switch(n){case"years":return i.getFullYear()-r.getFullYear();case"quarters":return Math.floor((i.getMonth()-r.getMonth()+(i.getFullYear()-r.getFullYear())*12)/4);case"months":return i.getMonth()-r.getMonth()+(i.getFullYear()-r.getFullYear())*12;case"weeks":return Math.floor((i.getTime()-r.getTime())/(1e3*60*60*24*7));case"days":return Math.floor((i.getTime()-r.getTime())/(1e3*60*60*24));case"hours":return Math.floor((i.getTime()-r.getTime())/(1e3*60*60));case"minutes":return Math.floor((i.getTime()-r.getTime())/(1e3*60));case"seconds":return Math.floor((i.getTime()-r.getTime())/1e3);default:return i.getTime()-r.getTime()}}function ey(t,e){const n=new Date(t);return n.setHours(e),n}function ty(t,e){const n=new Date(t);return n.setMinutes(e),n}function ny(t,e){const n=new Date(t);return n.setMonth(e),n}function iy(t,e){const n=new Date(t);return n.setDate(e),n}function ry(t,e){const n=new Date(t);return n.setFullYear(e),n}function fc(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),0,0,0,0)}function sy(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),23,59,59,999)}class ay{constructor(e){this.locale=e.locale,this.formats=e.formats}date(e){return _m(e)}toJsDate(e){return e}toISO(e){return Px(this,e)}parseISO(e){return Lx(e)}addMinutes(e,n){return Ix(e,n)}addHours(e,n){return Dx(e,n)}addDays(e,n){return Ux(e,n)}addWeeks(e,n){return Nx(e,n)}addMonths(e,n){return Fx(e,n)}getWeekArray(e){return Ex(e,this.locale)}startOfWeek(e){return bx(e,this.locale)}endOfWeek(e){return Tx(e,this.locale)}startOfMonth(e){return gm(e)}endOfMonth(e){return vm(e)}format(e,n){return Rx(e,n,this.locale,this.formats)}isEqual(e,n){return Ff(e,n)}isValid(e){return qx(e)}isWithinRange(e,n){return $x(e,n)}isAfter(e,n){return ao(e,n)}isAfterDay(e,n){return Yx(e,n)}isBefore(e,n){return!ao(e,n)&&!Ff(e,n)}isSameDay(e,n){return Kx(e,n)}isSameMonth(e,n){return Zx(e,n)}isSameYear(e,n){return Jx(e,n)}setMinutes(e,n){return ty(e,n)}setHours(e,n){return ey(e,n)}setMonth(e,n){return ny(e,n)}setDate(e,n){return iy(e,n)}setYear(e,n){return ry(e,n)}getDiff(e,n,i){return Qx(e,n,i)}getWeekdays(){return Cx(this.locale)}getYear(e){return Ox(e)}getMonth(e){return Bx(e)}getDate(e){return kx(e)}getNextMonth(e){return Vx(e)}getPreviousMonth(e){return zx(e)}getHours(e){return Hx(e)}getMinutes(e){return Gx(e)}startOfDay(e){return fc(e)}endOfDay(e){return sy(e)}startOfYear(e){return Wx(e)}endOfYear(e){return Xx(e)}}const oy=Symbol.for("vuetify:date-options"),Of=Symbol.for("vuetify:date-adapter");function ly(t,e){const n=nn({adapter:ay,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},t);return{options:n,instance:cy(n,e)}}function cy(t,e){const n=$t(typeof t.adapter=="function"?new t.adapter({locale:t.locale[e.current.value]??e.current.value,formats:t.formats}):t.adapter);return mt(e.current,i=>{n.locale=t.locale[i]??i??n.locale}),n}const Ro=["sm","md","lg","xl","xxl"],Bf=Symbol.for("vuetify:display"),kf={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},uy=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:kf;return nn(kf,t)};function Vf(t){return pn&&!t?window.innerWidth:typeof t=="object"&&t.clientWidth||0}function zf(t){return pn&&!t?window.innerHeight:typeof t=="object"&&t.clientHeight||0}function Hf(t){const e=pn&&!t?window.navigator.userAgent:"ssr";function n(v){return!!e.match(v)}const i=n(/android/i),r=n(/iphone|ipad|ipod/i),s=n(/cordova/i),a=n(/electron/i),o=n(/chrome/i),l=n(/edge/i),c=n(/firefox/i),u=n(/opera/i),f=n(/win/i),d=n(/mac/i),h=n(/linux/i);return{android:i,ios:r,cordova:s,electron:a,chrome:o,edge:l,firefox:c,opera:u,win:f,mac:d,linux:h,touch:F0,ssr:e==="ssr"}}function fy(t,e){const{thresholds:n,mobileBreakpoint:i}=uy(t),r=ut(zf(e)),s=ut(Hf(e)),a=$t({}),o=ut(Vf(e));function l(){r.value=zf(),o.value=Vf()}function c(){l(),s.value=Hf()}return cr(()=>{const u=o.value<n.sm,f=o.value<n.md&&!u,d=o.value<n.lg&&!(f||u),h=o.value<n.xl&&!(d||f||u),v=o.value<n.xxl&&!(h||d||f||u),g=o.value>=n.xxl,m=u?"xs":f?"sm":d?"md":h?"lg":v?"xl":"xxl",p=typeof i=="number"?i:n[i],M=o.value<p;a.xs=u,a.sm=f,a.md=d,a.lg=h,a.xl=v,a.xxl=g,a.smAndUp=!u,a.mdAndUp=!(u||f),a.lgAndUp=!(u||f||d),a.xlAndUp=!(u||f||d||h),a.smAndDown=!(d||h||v||g),a.mdAndDown=!(h||v||g),a.lgAndDown=!(v||g),a.xlAndDown=!g,a.name=m,a.height=r.value,a.width=o.value,a.mobile=M,a.mobileBreakpoint=i,a.platform=s.value,a.thresholds=n}),pn&&window.addEventListener("resize",l,{passive:!0}),{...zc(a),update:c,ssr:!!e}}const dy=Symbol.for("vuetify:goto");function hy(){return{container:void 0,duration:300,layout:!1,offset:0,easing:"easeInOutCubic",patterns:{linear:t=>t,easeInQuad:t=>t**2,easeOutQuad:t=>t*(2-t),easeInOutQuad:t=>t<.5?2*t**2:-1+(4-2*t)*t,easeInCubic:t=>t**3,easeOutCubic:t=>--t**3+1,easeInOutCubic:t=>t<.5?4*t**3:(t-1)*(2*t-2)*(2*t-2)+1,easeInQuart:t=>t**4,easeOutQuart:t=>1- --t**4,easeInOutQuart:t=>t<.5?8*t**4:1-8*--t**4,easeInQuint:t=>t**5,easeOutQuint:t=>1+--t**5,easeInOutQuint:t=>t<.5?16*t**5:1+16*--t**5}}}function py(t,e){return{rtl:e.isRtl,options:nn(hy(),t)}}const my={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",treeviewCollapse:"mdi-menu-down",treeviewExpand:"mdi-menu-right",eyeDropper:"mdi-eyedropper"},gy={component:t=>Vn(ym,{...t,class:"mdi"})},ti=[String,Function,Object,Array],dc=Symbol.for("vuetify:icons"),Po=Ue({icon:{type:ti},tag:{type:String,required:!0}},"icon"),Gf=et()({name:"VComponentIcon",props:Po(),setup(t,e){let{slots:n}=e;return()=>{const i=t.icon;return W(t.tag,null,{default:()=>{var r;return[t.icon?W(i,null,null):(r=n.default)==null?void 0:r.call(n)]}})}}}),xm=Ys({name:"VSvgIcon",inheritAttrs:!1,props:Po(),setup(t,e){let{attrs:n}=e;return()=>W(t.tag,ur(n,{style:null}),{default:()=>[W("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(t.icon)?t.icon.map(i=>Array.isArray(i)?W("path",{d:i[0],"fill-opacity":i[1]},null):W("path",{d:i},null)):W("path",{d:t.icon},null)])]})}});Ys({name:"VLigatureIcon",props:Po(),setup(t){return()=>W(t.tag,null,{default:()=>[t.icon]})}});const ym=Ys({name:"VClassIcon",props:Po(),setup(t){return()=>W(t.tag,{class:t.icon},null)}});function vy(){return{svg:{component:xm},class:{component:ym}}}function _y(t){const e=vy(),n=(t==null?void 0:t.defaultSet)??"mdi";return n==="mdi"&&!e.mdi&&(e.mdi=gy),nn({defaultSet:n,sets:e,aliases:{...my,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z","vuetify-play":["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z",["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z",.6]]}},t)}const xy=t=>{const e=At(dc);if(!e)throw new Error("Missing Vuetify Icons provide!");return{iconData:se(()=>{var l;const i=qt(t);if(!i)return{component:Gf};let r=i;if(typeof r=="string"&&(r=r.trim(),r.startsWith("$")&&(r=(l=e.aliases)==null?void 0:l[r.slice(1)])),Array.isArray(r))return{component:xm,icon:r};if(typeof r!="string")return{component:Gf,icon:r};const s=Object.keys(e.sets).find(c=>typeof r=="string"&&r.startsWith(`${c}:`)),a=s?r.slice(s.length+1):r;return{component:e.sets[s??e.defaultSet].component,icon:a}})}},oo=Symbol.for("vuetify:theme"),zn=Ue({theme:String},"theme");function Wf(){return{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-light":"#424242","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}}function yy(){var i,r;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Wf();const e=Wf();if(!t)return{...e,isDisabled:!0};const n={};for(const[s,a]of Object.entries(t.themes??{})){const o=a.dark||s==="dark"?(i=e.themes)==null?void 0:i.dark:(r=e.themes)==null?void 0:r.light;n[s]=nn(o,a)}return nn(e,{...t,themes:n})}function Sy(t){const e=yy(t),n=Mt(e.defaultTheme),i=Mt(e.themes),r=se(()=>{const u={};for(const[f,d]of Object.entries(i.value)){const h=u[f]={...d,colors:{...d.colors}};if(e.variations)for(const v of e.variations.colors){const g=h.colors[v];if(g)for(const m of["lighten","darken"]){const p=m==="lighten"?ux:fx;for(const M of im(e.variations[m],1))h.colors[`${v}-${m}-${M}`]=ox(p(Un(g),M))}}for(const v of Object.keys(h.colors)){if(/^on-[a-z]/.test(v)||h.colors[`on-${v}`])continue;const g=`on-${v}`,m=Un(h.colors[v]);h.colors[g]=um(m)}}return u}),s=se(()=>r.value[n.value]),a=se(()=>{var v;const u=[];(v=s.value)!=null&&v.dark&&Hi(u,":root",["color-scheme: dark"]),Hi(u,":root",Xf(s.value));for(const[g,m]of Object.entries(r.value))Hi(u,`.v-theme--${g}`,[`color-scheme: ${m.dark?"dark":"normal"}`,...Xf(m)]);const f=[],d=[],h=new Set(Object.values(r.value).flatMap(g=>Object.keys(g.colors)));for(const g of h)/^on-[a-z]/.test(g)?Hi(d,`.${g}`,[`color: rgb(var(--v-theme-${g})) !important`]):(Hi(f,`.bg-${g}`,[`--v-theme-overlay-multiplier: var(--v-theme-${g}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${g})) !important`,`color: rgb(var(--v-theme-on-${g})) !important`]),Hi(d,`.text-${g}`,[`color: rgb(var(--v-theme-${g})) !important`]),Hi(d,`.border-${g}`,[`--v-border-color: var(--v-theme-${g})`]));return u.push(...f,...d),u.map((g,m)=>m===0?g:`    ${g}`).join("")});function o(){return{style:[{children:a.value,id:"vuetify-theme-stylesheet",nonce:e.cspNonce||!1}]}}function l(u){if(e.isDisabled)return;const f=u._context.provides.usehead;if(f)if(f.push){const h=f.push(o);pn&&mt(a,()=>{h.patch(o)})}else pn?(f.addHeadObjs(se(o)),cr(()=>f.updateDOM())):f.addHeadObjs(o());else{let v=function(){if(typeof document<"u"&&!h){const g=document.createElement("style");g.type="text/css",g.id="vuetify-theme-stylesheet",e.cspNonce&&g.setAttribute("nonce",e.cspNonce),h=g,document.head.appendChild(h)}h&&(h.innerHTML=a.value)};var d=v;let h=pn?document.getElementById("vuetify-theme-stylesheet"):null;pn?mt(a,v,{immediate:!0}):v()}}const c=se(()=>e.isDisabled?void 0:`v-theme--${n.value}`);return{install:l,isDisabled:e.isDisabled,name:n,themes:i,current:s,computedThemes:r,themeClasses:c,styles:a,global:{name:n,current:s}}}function Hn(t){sn("provideTheme");const e=At(oo,null);if(!e)throw new Error("Could not find Vuetify theme injection");const n=se(()=>t.theme??e.name.value),i=se(()=>e.themes.value[n.value]),r=se(()=>e.isDisabled?void 0:`v-theme--${n.value}`),s={...e,name:n,current:i,themeClasses:r};return Tn(oo,s),s}function Hi(t,e,n){t.push(`${e} {
`,...n.map(i=>`  ${i};
`),`}
`)}function Xf(t){const e=t.dark?2:1,n=t.dark?1:2,i=[];for(const[r,s]of Object.entries(t.colors)){const a=Un(s);i.push(`--v-theme-${r}: ${a.r},${a.g},${a.b}`),r.startsWith("on-")||i.push(`--v-theme-${r}-overlay-multiplier: ${dx(s)>.18?e:n}`)}for(const[r,s]of Object.entries(t.variables)){const a=typeof s=="string"&&s.startsWith("#")?Un(s):void 0,o=a?`${a.r}, ${a.g}, ${a.b}`:void 0;i.push(`--v-${r}: ${o??s}`)}return i}function Sm(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const n=H0(),i=Mt();if(pn){const r=new ResizeObserver(s=>{s.length&&(e==="content"?i.value=s[0].contentRect:i.value=s[0].target.getBoundingClientRect())});ri(()=>{r.disconnect()}),mt(()=>n.el,(s,a)=>{a&&(r.unobserve(a),i.value=void 0),s&&r.observe(s)},{flush:"post"})}return{resizeRef:n,contentRect:Gs(i)}}const lo=Symbol.for("vuetify:layout"),Mm=Symbol.for("vuetify:layout-item"),$f=1e3,Em=Ue({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),My=Ue({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Ey(){const t=At(lo);if(!t)throw new Error("[Vuetify] Could not find injected layout");return{layoutIsReady:Fi(),getLayoutItem:t.getLayoutItem,mainRect:t.mainRect,mainStyles:t.mainStyles}}function by(t){const e=At(lo);if(!e)throw new Error("[Vuetify] Could not find injected layout");const n=t.id??`layout-item-${wo()}`,i=sn("useLayoutItem");Tn(Mm,{id:n});const r=ut(!1);Tp(()=>r.value=!0),bp(()=>r.value=!1);const s=Fi(),{layoutItemStyles:a,layoutItemScrimStyles:o}=e.register(i,{...t,active:se(()=>r.value?!1:t.active.value),id:n});return ri(()=>e.unregister(n)),{layoutItemStyles:a,layoutRect:e.layoutRect,layoutItemScrimStyles:o,layoutIsReady:s}}const Ty=(t,e,n,i)=>{let r={top:0,left:0,right:0,bottom:0};const s=[{id:"",layer:{...r}}];for(const a of t){const o=e.get(a),l=n.get(a),c=i.get(a);if(!o||!l||!c)continue;const u={...r,[o.value]:parseInt(r[o.value],10)+(c.value?parseInt(l.value,10):0)};s.push({id:a,layer:u}),r=u}return s};function bm(t){const e=At(lo,null),n=se(()=>e?e.rootZIndex.value-100:$f),i=Mt([]),r=$t(new Map),s=$t(new Map),a=$t(new Map),o=$t(new Map),l=$t(new Map),{resizeRef:c,contentRect:u}=Sm(),f=Sf(()=>{const P=[...new Set([...a.values()].map(C=>C.value))].sort((C,U)=>C-U),E=[];for(const C of P){const U=i.value.filter(S=>{var x;return((x=a.get(S))==null?void 0:x.value)===C});E.push(...U)}return Ty(E,r,s,o)}),d=se(()=>!Array.from(l.values()).some(P=>P.value)),h=se(()=>f.value[f.value.length-1].layer),v=se(()=>({"--v-layout-left":Je(h.value.left),"--v-layout-right":Je(h.value.right),"--v-layout-top":Je(h.value.top),"--v-layout-bottom":Je(h.value.bottom),...d.value?void 0:{transition:"none"}})),g=Sf(()=>f.value.slice(1).map((P,E)=>{let{id:C}=P;const{layer:U}=f.value[E],S=s.get(C),x=r.get(C);return{id:C,...U,size:Number(S.value),position:x.value}})),m=P=>g.value.find(E=>E.id===P),p=sn("createLayout"),M=Fi();Tn(lo,{register:(P,E)=>{let{id:C,order:U,position:S,layoutSize:x,elementSize:O,active:I,disableTransitions:L,absolute:X}=E;a.set(C,U),r.set(C,S),s.set(C,x),o.set(C,I),L&&l.set(C,L);const te=Ms(Mm,p==null?void 0:p.vnode).indexOf(P);te>-1?i.value.splice(te,0,C):i.value.push(C);const ne=se(()=>g.value.findIndex(Se=>Se.id===C)),H=se(()=>n.value+f.value.length*2-ne.value*2),pe=se(()=>{const Se=S.value==="left"||S.value==="right",Pe=S.value==="right",Xe=S.value==="bottom",ee=O.value??x.value,me=ee===0?"%":"px",ge={[S.value]:0,zIndex:H.value,transform:`translate${Se?"X":"Y"}(${(I.value?0:-(ee===0?100:ee))*(Pe||Xe?-1:1)}${me})`,position:X.value||n.value!==$f?"absolute":"fixed",...d.value?void 0:{transition:"none"}};if(ne.value<0)throw new Error(`Layout item "${C}" is missing`);const B=g.value[ne.value];if(!B)throw new Error(`[Vuetify] Could not find layout item "${C}"`);return{...ge,height:Se?`calc(100% - ${B.top}px - ${B.bottom}px)`:O.value?`${O.value}px`:void 0,left:Pe?void 0:`${B.left}px`,right:Pe?`${B.right}px`:void 0,top:S.value!=="bottom"?`${B.top}px`:void 0,bottom:S.value!=="top"?`${B.bottom}px`:void 0,width:Se?O.value?`${O.value}px`:void 0:`calc(100% - ${B.left}px - ${B.right}px)`}}),he=se(()=>({zIndex:H.value-1}));return{layoutItemStyles:pe,layoutItemScrimStyles:he,zIndex:H}},unregister:P=>{a.delete(P),r.delete(P),s.delete(P),o.delete(P),l.delete(P),i.value=i.value.filter(E=>E!==P)},mainRect:h,mainStyles:v,getLayoutItem:m,items:g,layoutRect:u,rootZIndex:n,layoutIsReady:M});const y=se(()=>["v-layout",{"v-layout--full-height":t.fullHeight}]),T=se(()=>({zIndex:e?n.value:void 0,position:e?"relative":void 0,overflow:e?"hidden":void 0}));return{layoutClasses:y,layoutStyles:T,getLayoutItem:m,items:g,layoutRect:u,layoutIsReady:M,layoutRef:c}}function Tm(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:e,...n}=t,i=nn(e,n),{aliases:r={},components:s={},directives:a={}}=i,o=hx(i.defaults),l=fy(i.display,i.ssr),c=Sy(i.theme),u=_y(i.icons),f=yx(i.locale),d=ly(i.date,f),h=py(i.goTo,f);return{install:g=>{for(const m in a)g.directive(m,a[m]);for(const m in s)g.component(m,s[m]);for(const m in r)g.component(m,Ys({...r[m],name:m,aliasName:r[m].name}));if(c.install(g),g.provide($r,o),g.provide(Bf,l),g.provide(oo,c),g.provide(dc,u),g.provide(uc,f),g.provide(oy,d.options),g.provide(Of,d.instance),g.provide(dy,h),pn&&i.ssr)if(g.$nuxt)g.$nuxt.hook("app:suspense:resolve",()=>{l.update()});else{const{mount:m}=g;g.mount=function(){const p=m(...arguments);return Fi(()=>l.update()),g.mount=m,p}}wo.reset(),g.mixin({computed:{$vuetify(){return $t({defaults:mr.call(this,$r),display:mr.call(this,Bf),theme:mr.call(this,oo),icons:mr.call(this,dc),locale:mr.call(this,uc),date:mr.call(this,Of)})}}})},defaults:o,display:l,theme:c,icons:u,locale:f,date:d,goTo:h}}const Ay="3.6.6";Tm.version=Ay;function mr(t){var i,r;const e=this.$,n=((i=e.parent)==null?void 0:i.provides)??((r=e.vnode.appContext)==null?void 0:r.provides);if(n&&t in n)return n[t]}const wy=Tm({theme:{defaultTheme:"dark"}});function Cy(t){t.use(wy)}/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Dr=typeof document<"u";function Ry(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const nt=Object.assign;function ul(t,e){const n={};for(const i in e){const r=e[i];n[i]=An(r)?r.map(t):t(r)}return n}const Es=()=>{},An=Array.isArray,Am=/#/g,Py=/&/g,Ly=/\//g,Iy=/=/g,Dy=/\?/g,wm=/\+/g,Uy=/%5B/g,Ny=/%5D/g,Cm=/%5E/g,Fy=/%60/g,Rm=/%7B/g,Oy=/%7C/g,Pm=/%7D/g,By=/%20/g;function au(t){return encodeURI(""+t).replace(Oy,"|").replace(Uy,"[").replace(Ny,"]")}function ky(t){return au(t).replace(Rm,"{").replace(Pm,"}").replace(Cm,"^")}function hc(t){return au(t).replace(wm,"%2B").replace(By,"+").replace(Am,"%23").replace(Py,"%26").replace(Fy,"`").replace(Rm,"{").replace(Pm,"}").replace(Cm,"^")}function Vy(t){return hc(t).replace(Iy,"%3D")}function zy(t){return au(t).replace(Am,"%23").replace(Dy,"%3F")}function Hy(t){return t==null?"":zy(t).replace(Ly,"%2F")}function Os(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Gy=/\/$/,Wy=t=>t.replace(Gy,"");function fl(t,e,n="/"){let i,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,o>-1?o:e.length),r=t(s)),o>-1&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=Yy(i??e,n),{fullPath:i+(s&&"?")+s+a,path:i,query:r,hash:Os(a)}}function Xy(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function qf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function $y(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&qr(e.matched[i],n.matched[r])&&Lm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function qr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Lm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!qy(t[n],e[n]))return!1;return!0}function qy(t,e){return An(t)?Yf(t,e):An(e)?Yf(e,t):t===e}function Yf(t,e){return An(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function Yy(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(a).join("/")}var Bs;(function(t){t.pop="pop",t.push="push"})(Bs||(Bs={}));var bs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(bs||(bs={}));function jy(t){if(!t)if(Dr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Wy(t)}const Ky=/^[^#]+#/;function Zy(t,e){return t.replace(Ky,"#")+e}function Jy(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Lo=()=>({left:window.scrollX,top:window.scrollY});function Qy(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Jy(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function jf(t,e){return(history.state?history.state.position-e:-1)+t}const pc=new Map;function eS(t,e){pc.set(t,e)}function tS(t){const e=pc.get(t);return pc.delete(t),e}let nS=()=>location.protocol+"//"+location.host;function Im(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let o=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(o);return l[0]!=="/"&&(l="/"+l),qf(l,"")}return qf(n,t)+i+r}function iS(t,e,n,i){let r=[],s=[],a=null;const o=({state:d})=>{const h=Im(t,location),v=n.value,g=e.value;let m=0;if(d){if(n.value=h,e.value=d,a&&a===v){a=null;return}m=g?d.position-g.position:0}else i(h);r.forEach(p=>{p(n.value,v,{delta:m,type:Bs.pop,direction:m?m>0?bs.forward:bs.back:bs.unknown})})};function l(){a=n.value}function c(d){r.push(d);const h=()=>{const v=r.indexOf(d);v>-1&&r.splice(v,1)};return s.push(h),h}function u(){const{history:d}=window;d.state&&d.replaceState(nt({},d.state,{scroll:Lo()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Kf(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?Lo():null}}function rS(t){const{history:e,location:n}=window,i={value:Im(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:nS()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(h){console.error(h),n[u?"replace":"assign"](d)}}function a(l,c){const u=nt({},e.state,Kf(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function o(l,c){const u=nt({},r.value,e.state,{forward:l,scroll:Lo()});s(u.current,u,!0);const f=nt({},Kf(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function sS(t){t=jy(t);const e=rS(t),n=iS(t,e.state,e.location,e.replace);function i(s,a=!0){a||n.pauseListeners(),history.go(s)}const r=nt({location:"",base:t,go:i,createHref:Zy.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function aS(t){return typeof t=="string"||t&&typeof t=="object"}function Dm(t){return typeof t=="string"||typeof t=="symbol"}const ci={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Um=Symbol("");var Zf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Zf||(Zf={}));function Yr(t,e){return nt(new Error,{type:t,[Um]:!0},e)}function Wn(t,e){return t instanceof Error&&Um in t&&(e==null||!!(t.type&e))}const Jf="[^/]+?",oS={sensitive:!1,strict:!1,start:!0,end:!0},lS=/[.+*?^${}()[\]/\\]/g;function cS(t,e){const n=nt({},oS,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let h=40+(n.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(lS,"\\$&"),h+=40;else if(d.type===1){const{value:v,repeatable:g,optional:m,regexp:p}=d;s.push({name:v,repeatable:g,optional:m});const M=p||Jf;if(M!==Jf){h+=10;try{new RegExp(`(${M})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${v}" (${M}): `+T.message)}}let y=g?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(y=m&&c.length<2?`(?:/${y})`:"/"+y),m&&(y+="?"),r+=y,h+=20,m&&(h+=-8),g&&(h+=-20),M===".*"&&(h+=-50)}u.push(h)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const a=new RegExp(r,n.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let d=1;d<u.length;d++){const h=u[d]||"",v=s[d-1];f[v.name]=h&&v.repeatable?h.split("/"):h}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const h of d)if(h.type===0)u+=h.value;else if(h.type===1){const{value:v,repeatable:g,optional:m}=h,p=v in c?c[v]:"";if(An(p)&&!g)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const M=An(p)?p.join("/"):p;if(!M)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);u+=M}}return u||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function uS(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function fS(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=uS(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(Qf(i))return 1;if(Qf(r))return-1}return r.length-i.length}function Qf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const dS={type:0,value:""},hS=/[a-zA-Z0-9_]/;function pS(t){if(!t)return[[]];if(t==="/")return[[dS]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=0,i=n;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,c="",u="";function f(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;o<t.length;){if(l=t[o++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),a()):l===":"?(f(),n=1):d();break;case 4:d(),n=i;break;case 1:l==="("?n=2:hS.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),a(),r}function mS(t,e,n){const i=cS(pS(t.path),n),r=nt(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function gS(t,e){const n=[],i=new Map;e=nd({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,f,d){const h=!d,v=vS(u);v.aliasOf=d&&d.record;const g=nd(e,u),m=[v];if("alias"in u){const y=typeof u.alias=="string"?[u.alias]:u.alias;for(const T of y)m.push(nt({},v,{components:d?d.record.components:v.components,path:T,aliasOf:d?d.record:v}))}let p,M;for(const y of m){const{path:T}=y;if(f&&T[0]!=="/"){const P=f.record.path,E=P[P.length-1]==="/"?"":"/";y.path=f.record.path+(T&&E+T)}if(p=mS(y,f,g),d?d.alias.push(p):(M=M||p,M!==p&&M.alias.push(p),h&&u.name&&!td(p)&&a(u.name)),v.children){const P=v.children;for(let E=0;E<P.length;E++)s(P[E],p,d&&d.children[E])}d=d||p,(p.record.components&&Object.keys(p.record.components).length||p.record.name||p.record.redirect)&&l(p)}return M?()=>{a(M)}:Es}function a(u){if(Dm(u)){const f=i.get(u);f&&(i.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function o(){return n}function l(u){let f=0;for(;f<n.length&&fS(u,n[f])>=0&&(u.record.path!==n[f].record.path||!Nm(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!td(u)&&i.set(u.record.name,u)}function c(u,f){let d,h={},v,g;if("name"in u&&u.name){if(d=i.get(u.name),!d)throw Yr(1,{location:u});g=d.record.name,h=nt(ed(f.params,d.keys.filter(M=>!M.optional).concat(d.parent?d.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),u.params&&ed(u.params,d.keys.map(M=>M.name))),v=d.stringify(h)}else if(u.path!=null)v=u.path,d=n.find(M=>M.re.test(v)),d&&(h=d.parse(v),g=d.record.name);else{if(d=f.name?i.get(f.name):n.find(M=>M.re.test(f.path)),!d)throw Yr(1,{location:u,currentLocation:f});g=d.record.name,h=nt({},f.params,u.params),v=d.stringify(h)}const m=[];let p=d;for(;p;)m.unshift(p.record),p=p.parent;return{name:g,path:v,params:h,matched:m,meta:xS(m)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:a,getRoutes:o,getRecordMatcher:r}}function ed(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function vS(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:_S(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function _S(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function td(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function xS(t){return t.reduce((e,n)=>nt(e,n.meta),{})}function nd(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function Nm(t,e){return e.children.some(n=>n===t||Nm(t,n))}function yS(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(wm," "),a=s.indexOf("="),o=Os(a<0?s:s.slice(0,a)),l=a<0?null:Os(s.slice(a+1));if(o in e){let c=e[o];An(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function id(t){let e="";for(let n in t){const i=t[n];if(n=Vy(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(An(i)?i.map(s=>s&&hc(s)):[i&&hc(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function SS(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=An(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const MS=Symbol(""),rd=Symbol(""),Io=Symbol(""),Fm=Symbol(""),mc=Symbol("");function cs(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Si(t,e,n,i,r,s=a=>a()){const a=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,l)=>{const c=d=>{d===!1?l(Yr(4,{from:n,to:e})):d instanceof Error?l(d):aS(d)?l(Yr(2,{from:e,to:d})):(a&&i.enterCallbacks[r]===a&&typeof d=="function"&&a.push(d),o())},u=s(()=>t.call(i&&i.instances[r],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function dl(t,e,n,i,r=s=>s()){const s=[];for(const a of t)for(const o in a.components){let l=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if(ES(l)){const u=(l.__vccOpts||l)[e];u&&s.push(Si(u,n,i,a,o,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${a.path}"`));const f=Ry(u)?u.default:u;a.components[o]=f;const h=(f.__vccOpts||f)[e];return h&&Si(h,n,i,a,o,r)()}))}}return s}function ES(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function sd(t){const e=At(Io),n=At(Fm),i=se(()=>{const l=qt(t.to);return e.resolve(l)}),r=se(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(qr.bind(null,u));if(d>-1)return d;const h=ad(l[c-2]);return c>1&&ad(u)===h&&f[f.length-1].path!==h?f.findIndex(qr.bind(null,l[c-2])):d}),s=se(()=>r.value>-1&&wS(n.params,i.value.params)),a=se(()=>r.value>-1&&r.value===n.matched.length-1&&Lm(n.params,i.value.params));function o(l={}){return AS(l)?e[qt(t.replace)?"replace":"push"](qt(t.to)).catch(Es):Promise.resolve()}return{route:i,href:se(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}const bS=Xs({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:sd,setup(t,{slots:e}){const n=$t(sd(t)),{options:i}=At(Io),r=se(()=>({[od(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[od(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Vn("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),TS=bS;function AS(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function wS(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!An(r)||r.length!==i.length||i.some((s,a)=>s!==r[a]))return!1}return!0}function ad(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const od=(t,e,n)=>t??e??n,CS=Xs({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=At(mc),r=se(()=>t.route||i.value),s=At(rd,0),a=se(()=>{let c=qt(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),o=se(()=>r.value.matched[a.value]);Tn(rd,se(()=>a.value+1)),Tn(MS,o),Tn(mc,r);const l=Mt();return mt(()=>[l.value,o.value,t.name],([c,u,f],[d,h,v])=>{u&&(u.instances[f]=c,h&&h!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!qr(u,h)||!d)&&(u.enterCallbacks[f]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=o.value,d=f&&f.components[u];if(!d)return ld(n.default,{Component:d,route:c});const h=f.props[u],v=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=Vn(d,nt({},v,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return ld(n.default,{Component:m,route:c})||m}}});function ld(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const RS=CS;function PS(t){const e=gS(t.routes,t),n=t.parseQuery||yS,i=t.stringifyQuery||id,r=t.history,s=cs(),a=cs(),o=cs(),l=ut(ci);let c=ci;Dr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ul.bind(null,B=>""+B),f=ul.bind(null,Hy),d=ul.bind(null,Os);function h(B,fe){let ae,D;return Dm(B)?(ae=e.getRecordMatcher(B),D=fe):D=B,e.addRoute(D,ae)}function v(B){const fe=e.getRecordMatcher(B);fe&&e.removeRoute(fe)}function g(){return e.getRoutes().map(B=>B.record)}function m(B){return!!e.getRecordMatcher(B)}function p(B,fe){if(fe=nt({},fe||l.value),typeof B=="string"){const R=fl(n,B,fe.path),V=e.resolve({path:R.path},fe),q=r.createHref(R.fullPath);return nt(R,V,{params:d(V.params),hash:Os(R.hash),redirectedFrom:void 0,href:q})}let ae;if(B.path!=null)ae=nt({},B,{path:fl(n,B.path,fe.path).path});else{const R=nt({},B.params);for(const V in R)R[V]==null&&delete R[V];ae=nt({},B,{params:f(R)}),fe.params=f(fe.params)}const D=e.resolve(ae,fe),Ce=B.hash||"";D.params=u(d(D.params));const _e=Xy(i,nt({},B,{hash:ky(Ce),path:D.path})),w=r.createHref(_e);return nt({fullPath:_e,hash:Ce,query:i===id?SS(B.query):B.query||{}},D,{redirectedFrom:void 0,href:w})}function M(B){return typeof B=="string"?fl(n,B,l.value.path):nt({},B)}function y(B,fe){if(c!==B)return Yr(8,{from:fe,to:B})}function T(B){return C(B)}function P(B){return T(nt(M(B),{replace:!0}))}function E(B){const fe=B.matched[B.matched.length-1];if(fe&&fe.redirect){const{redirect:ae}=fe;let D=typeof ae=="function"?ae(B):ae;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=M(D):{path:D},D.params={}),nt({query:B.query,hash:B.hash,params:D.path!=null?{}:B.params},D)}}function C(B,fe){const ae=c=p(B),D=l.value,Ce=B.state,_e=B.force,w=B.replace===!0,R=E(ae);if(R)return C(nt(M(R),{state:typeof R=="object"?nt({},Ce,R.state):Ce,force:_e,replace:w}),fe||ae);const V=ae;V.redirectedFrom=fe;let q;return!_e&&$y(i,D,ae)&&(q=Yr(16,{to:V,from:D}),Se(D,D,!0,!1)),(q?Promise.resolve(q):x(V,D)).catch($=>Wn($)?Wn($,2)?$:he($):H($,V,D)).then($=>{if($){if(Wn($,2))return C(nt({replace:w},M($.to),{state:typeof $.to=="object"?nt({},Ce,$.to.state):Ce,force:_e}),fe||V)}else $=I(V,D,!0,w,Ce);return O(V,D,$),$})}function U(B,fe){const ae=y(B,fe);return ae?Promise.reject(ae):Promise.resolve()}function S(B){const fe=ee.values().next().value;return fe&&typeof fe.runWithContext=="function"?fe.runWithContext(B):B()}function x(B,fe){let ae;const[D,Ce,_e]=LS(B,fe);ae=dl(D.reverse(),"beforeRouteLeave",B,fe);for(const R of D)R.leaveGuards.forEach(V=>{ae.push(Si(V,B,fe))});const w=U.bind(null,B,fe);return ae.push(w),ge(ae).then(()=>{ae=[];for(const R of s.list())ae.push(Si(R,B,fe));return ae.push(w),ge(ae)}).then(()=>{ae=dl(Ce,"beforeRouteUpdate",B,fe);for(const R of Ce)R.updateGuards.forEach(V=>{ae.push(Si(V,B,fe))});return ae.push(w),ge(ae)}).then(()=>{ae=[];for(const R of _e)if(R.beforeEnter)if(An(R.beforeEnter))for(const V of R.beforeEnter)ae.push(Si(V,B,fe));else ae.push(Si(R.beforeEnter,B,fe));return ae.push(w),ge(ae)}).then(()=>(B.matched.forEach(R=>R.enterCallbacks={}),ae=dl(_e,"beforeRouteEnter",B,fe,S),ae.push(w),ge(ae))).then(()=>{ae=[];for(const R of a.list())ae.push(Si(R,B,fe));return ae.push(w),ge(ae)}).catch(R=>Wn(R,8)?R:Promise.reject(R))}function O(B,fe,ae){o.list().forEach(D=>S(()=>D(B,fe,ae)))}function I(B,fe,ae,D,Ce){const _e=y(B,fe);if(_e)return _e;const w=fe===ci,R=Dr?history.state:{};ae&&(D||w?r.replace(B.fullPath,nt({scroll:w&&R&&R.scroll},Ce)):r.push(B.fullPath,Ce)),l.value=B,Se(B,fe,ae,w),he()}let L;function X(){L||(L=r.listen((B,fe,ae)=>{if(!me.listening)return;const D=p(B),Ce=E(D);if(Ce){C(nt(Ce,{replace:!0}),D).catch(Es);return}c=D;const _e=l.value;Dr&&eS(jf(_e.fullPath,ae.delta),Lo()),x(D,_e).catch(w=>Wn(w,12)?w:Wn(w,2)?(C(w.to,D).then(R=>{Wn(R,20)&&!ae.delta&&ae.type===Bs.pop&&r.go(-1,!1)}).catch(Es),Promise.reject()):(ae.delta&&r.go(-ae.delta,!1),H(w,D,_e))).then(w=>{w=w||I(D,_e,!1),w&&(ae.delta&&!Wn(w,8)?r.go(-ae.delta,!1):ae.type===Bs.pop&&Wn(w,20)&&r.go(-1,!1)),O(D,_e,w)}).catch(Es)}))}let J=cs(),te=cs(),ne;function H(B,fe,ae){he(B);const D=te.list();return D.length?D.forEach(Ce=>Ce(B,fe,ae)):console.error(B),Promise.reject(B)}function pe(){return ne&&l.value!==ci?Promise.resolve():new Promise((B,fe)=>{J.add([B,fe])})}function he(B){return ne||(ne=!B,X(),J.list().forEach(([fe,ae])=>B?ae(B):fe()),J.reset()),B}function Se(B,fe,ae,D){const{scrollBehavior:Ce}=t;if(!Dr||!Ce)return Promise.resolve();const _e=!ae&&tS(jf(B.fullPath,0))||(D||!ae)&&history.state&&history.state.scroll||null;return Fi().then(()=>Ce(B,fe,_e)).then(w=>w&&Qy(w)).catch(w=>H(w,B,fe))}const Pe=B=>r.go(B);let Xe;const ee=new Set,me={currentRoute:l,listening:!0,addRoute:h,removeRoute:v,hasRoute:m,getRoutes:g,resolve:p,options:t,push:T,replace:P,go:Pe,back:()=>Pe(-1),forward:()=>Pe(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:te.add,isReady:pe,install(B){const fe=this;B.component("RouterLink",TS),B.component("RouterView",RS),B.config.globalProperties.$router=fe,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>qt(l)}),Dr&&!Xe&&l.value===ci&&(Xe=!0,T(r.location).catch(Ce=>{}));const ae={};for(const Ce in ci)Object.defineProperty(ae,Ce,{get:()=>l.value[Ce],enumerable:!0});B.provide(Io,fe),B.provide(Fm,sp(ae)),B.provide(mc,l);const D=B.unmount;ee.add(B),B.unmount=function(){ee.delete(B),ee.size<1&&(c=ci,L&&L(),L=null,l.value=ci,Xe=!1,ne=!1),D()}}};function ge(B){return B.reduce((fe,ae)=>fe.then(()=>S(ae)),Promise.resolve())}return me}function LS(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(t.matched.find(c=>qr(c,o))?i.push(o):n.push(o));const l=t.matched[a];l&&(e.matched.find(c=>qr(c,l))||r.push(l))}return[n,i,r]}function Om(){return At(Io)}const Do=Ue({border:[Boolean,Number,String]},"border");function Uo(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:fr();return{borderClasses:se(()=>{const i=pt(t)?t.value:t.border,r=[];if(i===!0||i==="")r.push(`${e}--border`);else if(typeof i=="string"||i===0)for(const s of String(i).split(" "))r.push(`border-${s}`);return r})}}const IS=[null,"default","comfortable","compact"],Ks=Ue({density:{type:String,default:"default",validator:t=>IS.includes(t)}},"density");function No(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:fr();return{densityClasses:se(()=>`${e}--density-${t.density}`)}}const Fo=Ue({elevation:{type:[Number,String],validator(t){const e=parseInt(t);return!isNaN(e)&&e>=0&&e<=24}}},"elevation");function Oo(t){return{elevationClasses:se(()=>{const n=pt(t)?t.value:t.elevation,i=[];return n==null||i.push(`elevation-${n}`),i})}}const dr=Ue({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function hr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:fr();return{roundedClasses:se(()=>{const i=pt(t)?t.value:t.rounded,r=pt(t)?t.value:t.tile,s=[];if(i===!0||i==="")s.push(`${e}--rounded`);else if(typeof i=="string"||i===0)for(const a of String(i).split(" "))s.push(`rounded-${a}`);else(r||i===!1)&&s.push("rounded-0");return s})}}const Ht=Ue({tag:{type:String,default:"div"}},"tag");function ou(t){return sm(()=>{const e=[],n={};if(t.value.background)if(cc(t.value.background)){if(n.backgroundColor=t.value.background,!t.value.text&&sx(t.value.background)){const i=Un(t.value.background);if(i.a==null||i.a===1){const r=um(i);n.color=r,n.caretColor=r}}}else e.push(`bg-${t.value.background}`);return t.value.text&&(cc(t.value.text)?(n.color=t.value.text,n.caretColor=t.value.text):e.push(`text-${t.value.text}`)),{colorClasses:e,colorStyles:n}})}function ks(t,e){const n=se(()=>({text:pt(t)?t.value:e?t[e]:null})),{colorClasses:i,colorStyles:r}=ou(n);return{textColorClasses:i,textColorStyles:r}}function Ts(t,e){const n=se(()=>({background:pt(t)?t.value:e?t[e]:null})),{colorClasses:i,colorStyles:r}=ou(n);return{backgroundColorClasses:i,backgroundColorStyles:r}}const DS=["elevated","flat","tonal","outlined","text","plain"];function lu(t,e){return W(yt,null,[t&&W("span",{key:"overlay",class:`${e}__overlay`},null),W("span",{key:"underlay",class:`${e}__underlay`},null)])}const Bo=Ue({color:String,variant:{type:String,default:"elevated",validator:t=>DS.includes(t)}},"variant");function cu(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:fr();const n=se(()=>{const{variant:s}=qt(t);return`${e}--variant-${s}`}),{colorClasses:i,colorStyles:r}=ou(se(()=>{const{variant:s,color:a}=qt(t);return{[["elevated","flat"].includes(s)?"background":"text"]:a}}));return{colorClasses:i,colorStyles:r,variantClasses:n}}const Bm=Ue({baseColor:String,divided:Boolean,...Do(),...ft(),...Ks(),...Fo(),...dr(),...Ht(),...zn(),...Bo()},"VBtnGroup"),cd=et()({name:"VBtnGroup",props:Bm(),setup(t,e){let{slots:n}=e;const{themeClasses:i}=Hn(t),{densityClasses:r}=No(t),{borderClasses:s}=Uo(t),{elevationClasses:a}=Oo(t),{roundedClasses:o}=hr(t);Ao({VBtn:{height:"auto",baseColor:Ft(t,"baseColor"),color:Ft(t,"color"),density:Ft(t,"density"),flat:!0,variant:Ft(t,"variant")}}),dt(()=>W(t.tag,{class:["v-btn-group",{"v-btn-group--divided":t.divided},i.value,s.value,r.value,a.value,o.value,t.class],style:t.style},n))}}),US=Ue({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),NS=Ue({value:null,disabled:Boolean,selectedClass:String},"group-item");function FS(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const i=sn("useGroupItem");if(!i)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const r=wo();Tn(Symbol.for(`${e.description}:id`),r);const s=At(e,null);if(!s){if(!n)return s;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${e.description}`)}const a=Ft(t,"value"),o=se(()=>!!(s.disabled.value||t.disabled));s.register({id:r,value:a,disabled:o},i),ri(()=>{s.unregister(r)});const l=se(()=>s.isSelected(r)),c=se(()=>s.items.value[0].id===r),u=se(()=>s.items.value[s.items.value.length-1].id===r),f=se(()=>l.value&&[s.selectedClass.value,t.selectedClass]);return mt(l,d=>{i.emit("group:selected",{value:d})},{flush:"sync"}),{id:r,isSelected:l,isFirst:c,isLast:u,toggle:()=>s.select(r,!l.value),select:d=>s.select(r,d),selectedClass:f,value:a,disabled:o,group:s}}function OS(t,e){let n=!1;const i=$t([]),r=Co(t,"modelValue",[],d=>d==null?[]:km(i,V0(d)),d=>{const h=kS(i,d);return t.multiple?h:h[0]}),s=sn("useGroup");function a(d,h){const v=d,g=Symbol.for(`${e.description}:id`),p=Ms(g,s==null?void 0:s.vnode).indexOf(h);qt(v.value)==null&&(v.value=p,v.useIndexAsValue=!0),p>-1?i.splice(p,0,v):i.push(v)}function o(d){if(n)return;l();const h=i.findIndex(v=>v.id===d);i.splice(h,1)}function l(){const d=i.find(h=>!h.disabled);d&&t.mandatory==="force"&&!r.value.length&&(r.value=[d.id])}ts(()=>{l()}),ri(()=>{n=!0}),Kc(()=>{for(let d=0;d<i.length;d++)i[d].useIndexAsValue&&(i[d].value=d)});function c(d,h){const v=i.find(g=>g.id===d);if(!(h&&(v!=null&&v.disabled)))if(t.multiple){const g=r.value.slice(),m=g.findIndex(M=>M===d),p=~m;if(h=h??!p,p&&t.mandatory&&g.length<=1||!p&&t.max!=null&&g.length+1>t.max)return;m<0&&h?g.push(d):m>=0&&!h&&g.splice(m,1),r.value=g}else{const g=r.value.includes(d);if(t.mandatory&&g)return;r.value=h??!g?[d]:[]}}function u(d){if(t.multiple,r.value.length){const h=r.value[0],v=i.findIndex(p=>p.id===h);let g=(v+d)%i.length,m=i[g];for(;m.disabled&&g!==v;)g=(g+d)%i.length,m=i[g];if(m.disabled)return;r.value=[i[g].id]}else{const h=i.find(v=>!v.disabled);h&&(r.value=[h.id])}}const f={register:a,unregister:o,selected:r,select:c,disabled:Ft(t,"disabled"),prev:()=>u(i.length-1),next:()=>u(1),isSelected:d=>r.value.includes(d),selectedClass:se(()=>t.selectedClass),items:se(()=>i),getItemIndex:d=>BS(i,d)};return Tn(e,f),f}function BS(t,e){const n=km(t,[e]);return n.length?t.findIndex(i=>i.id===n[0]):-1}function km(t,e){const n=[];return e.forEach(i=>{const r=t.find(a=>iu(i,a.value)),s=t[i];(r==null?void 0:r.value)!=null?n.push(r.id):s!=null&&n.push(s.id)}),n}function kS(t,e){const n=[];return e.forEach(i=>{const r=t.findIndex(s=>s.id===i);if(~r){const s=t[r];n.push(s.value!=null?s.value:r)}}),n}const Vm=Symbol.for("vuetify:v-btn-toggle"),VS=Ue({...Bm(),...US()},"VBtnToggle");et()({name:"VBtnToggle",props:VS(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const{isSelected:i,next:r,prev:s,select:a,selected:o}=OS(t,Vm);return dt(()=>{const l=cd.filterProps(t);return W(cd,ur({class:["v-btn-toggle",t.class]},l,{style:t.style}),{default:()=>{var c;return[(c=n.default)==null?void 0:c.call(n,{isSelected:i,next:r,prev:s,select:a,selected:o})]}})}),{next:r,prev:s,select:a}}});const zS=Ue({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),On=et(!1)({name:"VDefaultsProvider",props:zS(),setup(t,e){let{slots:n}=e;const{defaults:i,disabled:r,reset:s,root:a,scoped:o}=zc(t);return Ao(i,{reset:s,root:a,scoped:o,disabled:r}),()=>{var l;return(l=n.default)==null?void 0:l.call(n)}}}),HS=["x-small","small","default","large","x-large"],ko=Ue({size:{type:[String,Number],default:"default"}},"size");function Vo(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:fr();return sm(()=>{let n,i;return lc(HS,t.size)?n=`${e}--size-${t.size}`:t.size&&(i={width:Je(t.size),height:Je(t.size)}),{sizeClasses:n,sizeStyles:i}})}const GS=Ue({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:ti,...ft(),...ko(),...Ht({tag:"i"}),...zn()},"VIcon"),kr=et()({name:"VIcon",props:GS(),setup(t,e){let{attrs:n,slots:i}=e;const r=Mt(),{themeClasses:s}=Hn(t),{iconData:a}=xy(se(()=>r.value||t.icon)),{sizeClasses:o}=Vo(t),{textColorClasses:l,textColorStyles:c}=ks(Ft(t,"color"));return dt(()=>{var d,h;const u=(d=i.default)==null?void 0:d.call(i);u&&(r.value=(h=rm(u).filter(v=>v.type===$s&&v.children&&typeof v.children=="string")[0])==null?void 0:h.children);const f=!!(n.onClick||n.onClickOnce);return W(a.value.component,{tag:t.tag,icon:a.value.icon,class:["v-icon","notranslate",s.value,o.value,l.value,{"v-icon--clickable":f,"v-icon--disabled":t.disabled,"v-icon--start":t.start,"v-icon--end":t.end},t.class],style:[o.value?void 0:{fontSize:Je(t.size),height:Je(t.size),width:Je(t.size)},c.value,t.style],role:f?"button":void 0,"aria-hidden":!f,tabindex:f?t.disabled?-1:0:void 0},{default:()=>[u]})}),{}}});function zm(t,e){const n=Mt(),i=ut(!1);if(nu){const r=new IntersectionObserver(s=>{i.value=!!s.find(a=>a.isIntersecting)},e);ri(()=>{r.disconnect()}),mt(n,(s,a)=>{a&&(r.unobserve(a),i.value=!1),s&&r.observe(s)},{flush:"post"})}return{intersectionRef:n,isIntersecting:i}}const WS=Ue({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...ft(),...ko(),...Ht({tag:"div"}),...zn()},"VProgressCircular"),XS=et()({name:"VProgressCircular",props:WS(),setup(t,e){let{slots:n}=e;const i=20,r=2*Math.PI*i,s=Mt(),{themeClasses:a}=Hn(t),{sizeClasses:o,sizeStyles:l}=Vo(t),{textColorClasses:c,textColorStyles:u}=ks(Ft(t,"color")),{textColorClasses:f,textColorStyles:d}=ks(Ft(t,"bgColor")),{intersectionRef:h,isIntersecting:v}=zm(),{resizeRef:g,contentRect:m}=Sm(),p=se(()=>Math.max(0,Math.min(100,parseFloat(t.modelValue)))),M=se(()=>Number(t.width)),y=se(()=>l.value?Number(t.size):m.value?m.value.width:Math.max(M.value,32)),T=se(()=>i/(1-M.value/y.value)*2),P=se(()=>M.value/y.value*T.value),E=se(()=>Je((100-p.value)/100*r));return cr(()=>{h.value=s.value,g.value=s.value}),dt(()=>W(t.tag,{ref:s,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!t.indeterminate,"v-progress-circular--visible":v.value,"v-progress-circular--disable-shrink":t.indeterminate==="disable-shrink"},a.value,o.value,c.value,t.class],style:[l.value,u.value,t.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":t.indeterminate?void 0:p.value},{default:()=>[W("svg",{style:{transform:`rotate(calc(-90deg + ${Number(t.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${T.value} ${T.value}`},[W("circle",{class:["v-progress-circular__underlay",f.value],style:d.value,fill:"transparent",cx:"50%",cy:"50%",r:i,"stroke-width":P.value,"stroke-dasharray":r,"stroke-dashoffset":0},null),W("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:i,"stroke-width":P.value,"stroke-dasharray":r,"stroke-dashoffset":E.value},null)]),n.default&&W("div",{class:"v-progress-circular__content"},[n.default({value:p.value})])]})),{}}}),Zs=Ue({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Js(t){return{dimensionStyles:se(()=>({height:Je(t.height),maxHeight:Je(t.maxHeight),maxWidth:Je(t.maxWidth),minHeight:Je(t.minHeight),minWidth:Je(t.minWidth),width:Je(t.width)}))}}const ud={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},uu=Ue({location:String},"location");function fu(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:i}=js();return{locationStyles:se(()=>{if(!t.location)return{};const{side:s,align:a}=X0(t.location.split(" ").length>1?t.location:`${t.location} center`,i.value);function o(c){return n?n(c):0}const l={};return s!=="center"&&(e?l[ud[s]]=`calc(100% - ${o(s)}px)`:l[s]=0),a!=="center"?e?l[ud[a]]=`calc(100% - ${o(a)}px)`:l[a]=0:(s==="center"?l.top=l.left="50%":l[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",l.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),l})}}const $S=Ue({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...ft(),...uu({location:"top"}),...dr(),...Ht(),...zn()},"VProgressLinear"),qS=et()({name:"VProgressLinear",props:$S(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const i=Co(t,"modelValue"),{isRtl:r,rtlClasses:s}=js(),{themeClasses:a}=Hn(t),{locationStyles:o}=fu(t),{textColorClasses:l,textColorStyles:c}=ks(t,"color"),{backgroundColorClasses:u,backgroundColorStyles:f}=Ts(se(()=>t.bgColor||t.color)),{backgroundColorClasses:d,backgroundColorStyles:h}=Ts(se(()=>t.bufferColor||t.bgColor||t.color)),{backgroundColorClasses:v,backgroundColorStyles:g}=Ts(t,"color"),{roundedClasses:m}=hr(t),{intersectionRef:p,isIntersecting:M}=zm(),y=se(()=>parseFloat(t.max)),T=se(()=>parseFloat(t.height)),P=se(()=>ro(parseFloat(t.bufferValue)/y.value*100,0,100)),E=se(()=>ro(parseFloat(i.value)/y.value*100,0,100)),C=se(()=>r.value!==t.reverse),U=se(()=>t.indeterminate?"fade-transition":"slide-x-transition");function S(x){if(!p.value)return;const{left:O,right:I,width:L}=p.value.getBoundingClientRect(),X=C.value?L-x.clientX+(I-L):x.clientX-O;i.value=Math.round(X/L*y.value)}return dt(()=>W(t.tag,{ref:p,class:["v-progress-linear",{"v-progress-linear--absolute":t.absolute,"v-progress-linear--active":t.active&&M.value,"v-progress-linear--reverse":C.value,"v-progress-linear--rounded":t.rounded,"v-progress-linear--rounded-bar":t.roundedBar,"v-progress-linear--striped":t.striped},m.value,a.value,s.value,t.class],style:[{bottom:t.location==="bottom"?0:void 0,top:t.location==="top"?0:void 0,height:t.active?Je(T.value):0,"--v-progress-linear-height":Je(T.value),...t.absolute?o.value:{}},t.style],role:"progressbar","aria-hidden":t.active?"false":"true","aria-valuemin":"0","aria-valuemax":t.max,"aria-valuenow":t.indeterminate?void 0:E.value,onClick:t.clickable&&S},{default:()=>[t.stream&&W("div",{key:"stream",class:["v-progress-linear__stream",l.value],style:{...c.value,[C.value?"left":"right"]:Je(-T.value),borderTop:`${Je(T.value/2)} dotted`,opacity:parseFloat(t.bufferOpacity),top:`calc(50% - ${Je(T.value/4)})`,width:Je(100-P.value,"%"),"--v-progress-linear-stream-to":Je(T.value*(C.value?1:-1))}},null),W("div",{class:["v-progress-linear__background",u.value],style:[f.value,{opacity:parseFloat(t.bgOpacity),width:t.stream?0:void 0}]},null),W("div",{class:["v-progress-linear__buffer",d.value],style:[h.value,{opacity:parseFloat(t.bufferOpacity),width:Je(P.value,"%")}]},null),W(ns,{name:U.value},{default:()=>[t.indeterminate?W("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(x=>W("div",{key:x,class:["v-progress-linear__indeterminate",x,v.value],style:g.value},null))]):W("div",{class:["v-progress-linear__determinate",v.value],style:[g.value,{width:Je(E.value,"%")}]},null)]}),n.default&&W("div",{class:"v-progress-linear__content"},[n.default({value:E.value,buffer:P.value})])]})),{}}}),Hm=Ue({loading:[Boolean,String]},"loader");function Gm(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:fr();return{loaderClasses:se(()=>({[`${e}--loading`]:t.loading}))}}function YS(t,e){var i;let{slots:n}=e;return W("div",{class:`${t.name}__loader`},[((i=n.default)==null?void 0:i.call(n,{color:t.color,isActive:t.active}))||W(qS,{absolute:t.absolute,active:t.active,color:t.color,height:"2",indeterminate:!0},null)])}const jS=["static","relative","fixed","absolute","sticky"],Wm=Ue({position:{type:String,validator:t=>jS.includes(t)}},"position");function Xm(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:fr();return{positionClasses:se(()=>t.position?`${e}--${t.position}`:void 0)}}function KS(){const t=sn("useRoute");return se(()=>{var e;return(e=t==null?void 0:t.proxy)==null?void 0:e.$route})}function $m(t,e){var c,u;const n=a_("RouterLink"),i=se(()=>!!(t.href||t.to)),r=se(()=>(i==null?void 0:i.value)||yf(e,"click")||yf(t,"click"));if(typeof n=="string"||!("useLink"in n))return{isLink:i,isClickable:r,href:Ft(t,"href")};const s=se(()=>({...t,to:Ft(()=>t.to||"")})),a=n.useLink(s.value),o=se(()=>t.to?a:void 0),l=KS();return{isLink:i,isClickable:r,route:(c=o.value)==null?void 0:c.route,navigate:(u=o.value)==null?void 0:u.navigate,isActive:se(()=>{var f,d,h;return o.value?t.exact?l.value?((h=o.value.isExactActive)==null?void 0:h.value)&&iu(o.value.route.value.query,l.value.query):((d=o.value.isExactActive)==null?void 0:d.value)??!1:((f=o.value.isActive)==null?void 0:f.value)??!1:!1}),href:se(()=>{var f;return t.to?(f=o.value)==null?void 0:f.route.value.href:t.href})}}const qm=Ue({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");function ZS(t,e){mt(()=>{var n;return(n=t.isActive)==null?void 0:n.value},n=>{t.isLink.value&&n&&e&&Fi(()=>{e(!0)})},{immediate:!0})}const gc=Symbol("rippleStop"),JS=80;function fd(t,e){t.style.transform=e,t.style.webkitTransform=e}function vc(t){return t.constructor.name==="TouchEvent"}function Ym(t){return t.constructor.name==="KeyboardEvent"}const QS=function(t,e){var f;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=0,r=0;if(!Ym(t)){const d=e.getBoundingClientRect(),h=vc(t)?t.touches[t.touches.length-1]:t;i=h.clientX-d.left,r=h.clientY-d.top}let s=0,a=.3;(f=e._ripple)!=null&&f.circle?(a=.15,s=e.clientWidth/2,s=n.center?s:s+Math.sqrt((i-s)**2+(r-s)**2)/4):s=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const o=`${(e.clientWidth-s*2)/2}px`,l=`${(e.clientHeight-s*2)/2}px`,c=n.center?o:`${i-s}px`,u=n.center?l:`${r-s}px`;return{radius:s,scale:a,x:c,y:u,centerX:o,centerY:l}},co={show(t,e){var h;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((h=e==null?void 0:e._ripple)!=null&&h.enabled))return;const i=document.createElement("span"),r=document.createElement("span");i.appendChild(r),i.className="v-ripple__container",n.class&&(i.className+=` ${n.class}`);const{radius:s,scale:a,x:o,y:l,centerX:c,centerY:u}=QS(t,e,n),f=`${s*2}px`;r.className="v-ripple__animation",r.style.width=f,r.style.height=f,e.appendChild(i);const d=window.getComputedStyle(e);d&&d.position==="static"&&(e.style.position="relative",e.dataset.previousPosition="static"),r.classList.add("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--visible"),fd(r,`translate(${o}, ${l}) scale3d(${a},${a},${a})`),r.dataset.activated=String(performance.now()),setTimeout(()=>{r.classList.remove("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--in"),fd(r,`translate(${c}, ${u}) scale3d(1,1,1)`)},0)},hide(t){var s;if(!((s=t==null?void 0:t._ripple)!=null&&s.enabled))return;const e=t.getElementsByClassName("v-ripple__animation");if(e.length===0)return;const n=e[e.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const i=performance.now()-Number(n.dataset.activated),r=Math.max(250-i,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var o;t.getElementsByClassName("v-ripple__animation").length===1&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),((o=n.parentNode)==null?void 0:o.parentNode)===t&&t.removeChild(n.parentNode)},300)},r)}};function jm(t){return typeof t>"u"||!!t}function Vs(t){const e={},n=t.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||t[gc])){if(t[gc]=!0,vc(t))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(e.center=n._ripple.centered||Ym(t),n._ripple.class&&(e.class=n._ripple.class),vc(t)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{co.show(t,n,e)},n._ripple.showTimer=window.setTimeout(()=>{var i;(i=n==null?void 0:n._ripple)!=null&&i.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},JS)}else co.show(t,n,e)}}function dd(t){t[gc]=!0}function tn(t){const e=t.currentTarget;if(e!=null&&e._ripple){if(window.clearTimeout(e._ripple.showTimer),t.type==="touchend"&&e._ripple.showTimerCommit){e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,e._ripple.showTimer=window.setTimeout(()=>{tn(t)});return}window.setTimeout(()=>{e._ripple&&(e._ripple.touched=!1)}),co.hide(e)}}function Km(t){const e=t.currentTarget;e!=null&&e._ripple&&(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let zs=!1;function Zm(t){!zs&&(t.keyCode===vf.enter||t.keyCode===vf.space)&&(zs=!0,Vs(t))}function Jm(t){zs=!1,tn(t)}function Qm(t){zs&&(zs=!1,tn(t))}function eg(t,e,n){const{value:i,modifiers:r}=e,s=jm(i);if(s||co.hide(t),t._ripple=t._ripple??{},t._ripple.enabled=s,t._ripple.centered=r.center,t._ripple.circle=r.circle,oc(i)&&i.class&&(t._ripple.class=i.class),s&&!n){if(r.stop){t.addEventListener("touchstart",dd,{passive:!0}),t.addEventListener("mousedown",dd);return}t.addEventListener("touchstart",Vs,{passive:!0}),t.addEventListener("touchend",tn,{passive:!0}),t.addEventListener("touchmove",Km,{passive:!0}),t.addEventListener("touchcancel",tn),t.addEventListener("mousedown",Vs),t.addEventListener("mouseup",tn),t.addEventListener("mouseleave",tn),t.addEventListener("keydown",Zm),t.addEventListener("keyup",Jm),t.addEventListener("blur",Qm),t.addEventListener("dragstart",tn,{passive:!0})}else!s&&n&&tg(t)}function tg(t){t.removeEventListener("mousedown",Vs),t.removeEventListener("touchstart",Vs),t.removeEventListener("touchend",tn),t.removeEventListener("touchmove",Km),t.removeEventListener("touchcancel",tn),t.removeEventListener("mouseup",tn),t.removeEventListener("mouseleave",tn),t.removeEventListener("keydown",Zm),t.removeEventListener("keyup",Jm),t.removeEventListener("dragstart",tn),t.removeEventListener("blur",Qm)}function eM(t,e){eg(t,e,!1)}function tM(t){delete t._ripple,tg(t)}function nM(t,e){if(e.value===e.oldValue)return;const n=jm(e.oldValue);eg(t,e,n)}const ng={mounted:eM,unmounted:tM,updated:nM},iM=Ue({active:{type:Boolean,default:void 0},baseColor:String,symbol:{type:null,default:Vm},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:ti,appendIcon:ti,block:Boolean,readonly:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...Do(),...ft(),...Ks(),...Zs(),...Fo(),...NS(),...Hm(),...uu(),...Wm(),...dr(),...qm(),...ko(),...Ht({tag:"button"}),...zn(),...Bo({variant:"elevated"})},"VBtn"),As=et()({name:"VBtn",props:iM(),emits:{"group:selected":t=>!0},setup(t,e){let{attrs:n,slots:i}=e;const{themeClasses:r}=Hn(t),{borderClasses:s}=Uo(t),{densityClasses:a}=No(t),{dimensionStyles:o}=Js(t),{elevationClasses:l}=Oo(t),{loaderClasses:c}=Gm(t),{locationStyles:u}=fu(t),{positionClasses:f}=Xm(t),{roundedClasses:d}=hr(t),{sizeClasses:h,sizeStyles:v}=Vo(t),g=FS(t,t.symbol,!1),m=$m(t,n),p=se(()=>{var x;return t.active!==void 0?t.active:m.isLink.value?(x=m.isActive)==null?void 0:x.value:g==null?void 0:g.isSelected.value}),M=se(()=>{var O,I;return{color:(g==null?void 0:g.isSelected.value)&&(!m.isLink.value||((O=m.isActive)==null?void 0:O.value))||!g||((I=m.isActive)==null?void 0:I.value)?t.color??t.baseColor:t.baseColor,variant:t.variant}}),{colorClasses:y,colorStyles:T,variantClasses:P}=cu(M),E=se(()=>(g==null?void 0:g.disabled.value)||t.disabled),C=se(()=>t.variant==="elevated"&&!(t.disabled||t.flat||t.border)),U=se(()=>{if(!(t.value===void 0||typeof t.value=="symbol"))return Object(t.value)===t.value?JSON.stringify(t.value,null,0):t.value});function S(x){var O;E.value||m.isLink.value&&(x.metaKey||x.ctrlKey||x.shiftKey||x.button!==0||n.target==="_blank")||((O=m.navigate)==null||O.call(m,x),g==null||g.toggle())}return ZS(m,g==null?void 0:g.select),dt(()=>{const x=m.isLink.value?"a":t.tag,O=!!(t.prependIcon||i.prepend),I=!!(t.appendIcon||i.append),L=!!(t.icon&&t.icon!==!0);return Is(W(x,{type:x==="a"?void 0:"button",class:["v-btn",g==null?void 0:g.selectedClass.value,{"v-btn--active":p.value,"v-btn--block":t.block,"v-btn--disabled":E.value,"v-btn--elevated":C.value,"v-btn--flat":t.flat,"v-btn--icon":!!t.icon,"v-btn--loading":t.loading,"v-btn--readonly":t.readonly,"v-btn--slim":t.slim,"v-btn--stacked":t.stacked},r.value,s.value,y.value,a.value,l.value,c.value,f.value,d.value,h.value,P.value,t.class],style:[T.value,o.value,u.value,v.value,t.style],"aria-busy":t.loading?!0:void 0,disabled:E.value||void 0,href:m.href.value,tabindex:t.loading||t.readonly?-1:void 0,onClick:S,value:U.value},{default:()=>{var X;return[lu(!0,"v-btn"),!t.icon&&O&&W("span",{key:"prepend",class:"v-btn__prepend"},[i.prepend?W(On,{key:"prepend-defaults",disabled:!t.prependIcon,defaults:{VIcon:{icon:t.prependIcon}}},i.prepend):W(kr,{key:"prepend-icon",icon:t.prependIcon},null)]),W("span",{class:"v-btn__content","data-no-activator":""},[!i.default&&L?W(kr,{key:"content-icon",icon:t.icon},null):W(On,{key:"content-defaults",disabled:!L,defaults:{VIcon:{icon:t.icon}}},{default:()=>{var J;return[((J=i.default)==null?void 0:J.call(i))??t.text]}})]),!t.icon&&I&&W("span",{key:"append",class:"v-btn__append"},[i.append?W(On,{key:"append-defaults",disabled:!t.appendIcon,defaults:{VIcon:{icon:t.appendIcon}}},i.append):W(kr,{key:"append-icon",icon:t.appendIcon},null)]),!!t.loading&&W("span",{key:"loader",class:"v-btn__loader"},[((X=i.loader)==null?void 0:X.call(i))??W(XS,{color:typeof t.loading=="boolean"?void 0:t.loading,indeterminate:!0,width:"2"},null)])]}}),[[ng,!E.value&&!!t.ripple,"",{center:!!t.icon}]])}),{group:g}}}),ig=et()({name:"VCardActions",props:ft(),setup(t,e){let{slots:n}=e;return Ao({VBtn:{slim:!0,variant:"text"}}),dt(()=>{var i;return W("div",{class:["v-card-actions",t.class],style:t.style},[(i=n.default)==null?void 0:i.call(n)])}),{}}}),rM=Ue({opacity:[Number,String],...ft(),...Ht()},"VCardSubtitle"),sM=et()({name:"VCardSubtitle",props:rM(),setup(t,e){let{slots:n}=e;return dt(()=>W(t.tag,{class:["v-card-subtitle",t.class],style:[{"--v-card-subtitle-opacity":t.opacity},t.style]},n)),{}}}),rg=fm("v-card-title");function aM(t){return{aspectStyles:se(()=>{const e=Number(t.aspectRatio);return e?{paddingBottom:String(1/e*100)+"%"}:void 0})}}const sg=Ue({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...ft(),...Zs()},"VResponsive"),hd=et()({name:"VResponsive",props:sg(),setup(t,e){let{slots:n}=e;const{aspectStyles:i}=aM(t),{dimensionStyles:r}=Js(t);return dt(()=>{var s;return W("div",{class:["v-responsive",{"v-responsive--inline":t.inline},t.class],style:[r.value,t.style]},[W("div",{class:"v-responsive__sizer",style:i.value},null),(s=n.additional)==null?void 0:s.call(n),n.default&&W("div",{class:["v-responsive__content",t.contentClass]},[n.default()])])}),{}}}),oM=Ue({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:t=>t!==!0}},"transition"),va=(t,e)=>{let{slots:n}=e;const{transition:i,disabled:r,group:s,...a}=t,{component:o=s?tu:ns,...l}=typeof i=="object"?i:{};return Vn(o,ur(typeof i=="string"?{name:r?"":i}:l,typeof i=="string"?{}:Object.fromEntries(Object.entries({disabled:r,group:s}).filter(c=>{let[u,f]=c;return f!==void 0})),a),n)};function lM(t,e){if(!nu)return;const n=e.modifiers||{},i=e.value,{handler:r,options:s}=typeof i=="object"?i:{handler:i,options:{}},a=new IntersectionObserver(function(){var f;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=arguments.length>1?arguments[1]:void 0;const c=(f=t._observe)==null?void 0:f[e.instance.$.uid];if(!c)return;const u=o.some(d=>d.isIntersecting);r&&(!n.quiet||c.init)&&(!n.once||u||c.init)&&r(u,o,l),u&&n.once?ag(t,e):c.init=!0},s);t._observe=Object(t._observe),t._observe[e.instance.$.uid]={init:!1,observer:a},a.observe(t)}function ag(t,e){var i;const n=(i=t._observe)==null?void 0:i[e.instance.$.uid];n&&(n.observer.unobserve(t),delete t._observe[e.instance.$.uid])}const cM={mounted:lM,unmounted:ag},uM=Ue({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...sg(),...ft(),...dr(),...oM()},"VImg"),zo=et()({name:"VImg",directives:{intersect:cM},props:uM(),emits:{loadstart:t=>!0,load:t=>!0,error:t=>!0},setup(t,e){let{emit:n,slots:i}=e;const{backgroundColorClasses:r,backgroundColorStyles:s}=Ts(Ft(t,"color")),{roundedClasses:a}=hr(t),o=sn("VImg"),l=ut(""),c=Mt(),u=ut(t.eager?"loading":"idle"),f=ut(),d=ut(),h=se(()=>t.src&&typeof t.src=="object"?{src:t.src.src,srcset:t.srcset||t.src.srcset,lazySrc:t.lazySrc||t.src.lazySrc,aspect:Number(t.aspectRatio||t.src.aspect||0)}:{src:t.src,srcset:t.srcset,lazySrc:t.lazySrc,aspect:Number(t.aspectRatio||0)}),v=se(()=>h.value.aspect||f.value/d.value||0);mt(()=>t.src,()=>{g(u.value!=="idle")}),mt(v,(I,L)=>{!I&&L&&c.value&&T(c.value)}),wp(()=>g());function g(I){if(!(t.eager&&I)&&!(nu&&!I&&!t.eager)){if(u.value="loading",h.value.lazySrc){const L=new Image;L.src=h.value.lazySrc,T(L,null)}h.value.src&&Fi(()=>{var L;n("loadstart",((L=c.value)==null?void 0:L.currentSrc)||h.value.src),setTimeout(()=>{var X;if(!o.isUnmounted)if((X=c.value)!=null&&X.complete){if(c.value.naturalWidth||p(),u.value==="error")return;v.value||T(c.value,null),u.value==="loading"&&m()}else v.value||T(c.value),M()})})}}function m(){var I;o.isUnmounted||(M(),T(c.value),u.value="loaded",n("load",((I=c.value)==null?void 0:I.currentSrc)||h.value.src))}function p(){var I;o.isUnmounted||(u.value="error",n("error",((I=c.value)==null?void 0:I.currentSrc)||h.value.src))}function M(){const I=c.value;I&&(l.value=I.currentSrc||I.src)}let y=-1;ri(()=>{clearTimeout(y)});function T(I){let L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const X=()=>{if(clearTimeout(y),o.isUnmounted)return;const{naturalHeight:J,naturalWidth:te}=I;J||te?(f.value=te,d.value=J):!I.complete&&u.value==="loading"&&L!=null?y=window.setTimeout(X,L):(I.currentSrc.endsWith(".svg")||I.currentSrc.startsWith("data:image/svg+xml"))&&(f.value=1,d.value=1)};X()}const P=se(()=>({"v-img__img--cover":t.cover,"v-img__img--contain":!t.cover})),E=()=>{var X;if(!h.value.src||u.value==="idle")return null;const I=W("img",{class:["v-img__img",P.value],style:{objectPosition:t.position},src:h.value.src,srcset:h.value.srcset,alt:t.alt,crossorigin:t.crossorigin,referrerpolicy:t.referrerpolicy,draggable:t.draggable,sizes:t.sizes,ref:c,onLoad:m,onError:p},null),L=(X=i.sources)==null?void 0:X.call(i);return W(va,{transition:t.transition,appear:!0},{default:()=>[Is(L?W("picture",{class:"v-img__picture"},[L,I]):I,[[Jp,u.value==="loaded"]])]})},C=()=>W(va,{transition:t.transition},{default:()=>[h.value.lazySrc&&u.value!=="loaded"&&W("img",{class:["v-img__img","v-img__img--preload",P.value],style:{objectPosition:t.position},src:h.value.lazySrc,alt:t.alt,crossorigin:t.crossorigin,referrerpolicy:t.referrerpolicy,draggable:t.draggable},null)]}),U=()=>i.placeholder?W(va,{transition:t.transition,appear:!0},{default:()=>[(u.value==="loading"||u.value==="error"&&!i.error)&&W("div",{class:"v-img__placeholder"},[i.placeholder()])]}):null,S=()=>i.error?W(va,{transition:t.transition,appear:!0},{default:()=>[u.value==="error"&&W("div",{class:"v-img__error"},[i.error()])]}):null,x=()=>t.gradient?W("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${t.gradient})`}},null):null,O=ut(!1);{const I=mt(v,L=>{L&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{O.value=!0})}),I())})}return dt(()=>{const I=hd.filterProps(t);return Is(W(hd,ur({class:["v-img",{"v-img--booting":!O.value},r.value,a.value,t.class],style:[{width:Je(t.width==="auto"?f.value:t.width)},s.value,t.style]},I,{aspectRatio:v.value,"aria-label":t.alt,role:t.alt?"img":void 0}),{additional:()=>W(yt,null,[W(E,null,null),W(C,null,null),W(x,null,null),W(U,null,null),W(S,null,null)]),default:i.default}),[[_p("intersect"),{handler:g,options:t.options},null,{once:!0}]])}),{currentSrc:l,image:c,state:u,naturalWidth:f,naturalHeight:d}}}),fM=Ue({start:Boolean,end:Boolean,icon:ti,image:String,text:String,...ft(),...Ks(),...dr(),...ko(),...Ht(),...zn(),...Bo({variant:"flat"})},"VAvatar"),pd=et()({name:"VAvatar",props:fM(),setup(t,e){let{slots:n}=e;const{themeClasses:i}=Hn(t),{colorClasses:r,colorStyles:s,variantClasses:a}=cu(t),{densityClasses:o}=No(t),{roundedClasses:l}=hr(t),{sizeClasses:c,sizeStyles:u}=Vo(t);return dt(()=>W(t.tag,{class:["v-avatar",{"v-avatar--start":t.start,"v-avatar--end":t.end},i.value,r.value,o.value,l.value,c.value,a.value,t.class],style:[s.value,u.value,t.style]},{default:()=>[n.default?W(On,{key:"content-defaults",defaults:{VImg:{cover:!0,image:t.image},VIcon:{icon:t.icon}}},{default:()=>[n.default()]}):t.image?W(zo,{key:"image",src:t.image,alt:"",cover:!0},null):t.icon?W(kr,{key:"icon",icon:t.icon},null):t.text,lu(!1,"v-avatar")]})),{}}}),dM=Ue({appendAvatar:String,appendIcon:ti,prependAvatar:String,prependIcon:ti,subtitle:[String,Number],title:[String,Number],...ft(),...Ks()},"VCardItem"),hM=et()({name:"VCardItem",props:dM(),setup(t,e){let{slots:n}=e;return dt(()=>{var c;const i=!!(t.prependAvatar||t.prependIcon),r=!!(i||n.prepend),s=!!(t.appendAvatar||t.appendIcon),a=!!(s||n.append),o=!!(t.title!=null||n.title),l=!!(t.subtitle!=null||n.subtitle);return W("div",{class:["v-card-item",t.class],style:t.style},[r&&W("div",{key:"prepend",class:"v-card-item__prepend"},[n.prepend?W(On,{key:"prepend-defaults",disabled:!i,defaults:{VAvatar:{density:t.density,image:t.prependAvatar},VIcon:{density:t.density,icon:t.prependIcon}}},n.prepend):W(yt,null,[t.prependAvatar&&W(pd,{key:"prepend-avatar",density:t.density,image:t.prependAvatar},null),t.prependIcon&&W(kr,{key:"prepend-icon",density:t.density,icon:t.prependIcon},null)])]),W("div",{class:"v-card-item__content"},[o&&W(rg,{key:"title"},{default:()=>{var u;return[((u=n.title)==null?void 0:u.call(n))??t.title]}}),l&&W(sM,{key:"subtitle"},{default:()=>{var u;return[((u=n.subtitle)==null?void 0:u.call(n))??t.subtitle]}}),(c=n.default)==null?void 0:c.call(n)]),a&&W("div",{key:"append",class:"v-card-item__append"},[n.append?W(On,{key:"append-defaults",disabled:!s,defaults:{VAvatar:{density:t.density,image:t.appendAvatar},VIcon:{density:t.density,icon:t.appendIcon}}},n.append):W(yt,null,[t.appendIcon&&W(kr,{key:"append-icon",density:t.density,icon:t.appendIcon},null),t.appendAvatar&&W(pd,{key:"append-avatar",density:t.density,image:t.appendAvatar},null)])])])}),{}}}),pM=Ue({opacity:[Number,String],...ft(),...Ht()},"VCardText"),_c=et()({name:"VCardText",props:pM(),setup(t,e){let{slots:n}=e;return dt(()=>W(t.tag,{class:["v-card-text",t.class],style:[{"--v-card-text-opacity":t.opacity},t.style]},n)),{}}}),mM=Ue({appendAvatar:String,appendIcon:ti,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:ti,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...Do(),...ft(),...Ks(),...Zs(),...Fo(),...Hm(),...uu(),...Wm(),...dr(),...qm(),...Ht(),...zn(),...Bo({variant:"elevated"})},"VCard"),gM=et()({name:"VCard",directives:{Ripple:ng},props:mM(),setup(t,e){let{attrs:n,slots:i}=e;const{themeClasses:r}=Hn(t),{borderClasses:s}=Uo(t),{colorClasses:a,colorStyles:o,variantClasses:l}=cu(t),{densityClasses:c}=No(t),{dimensionStyles:u}=Js(t),{elevationClasses:f}=Oo(t),{loaderClasses:d}=Gm(t),{locationStyles:h}=fu(t),{positionClasses:v}=Xm(t),{roundedClasses:g}=hr(t),m=$m(t,n),p=se(()=>t.link!==!1&&m.isLink.value),M=se(()=>!t.disabled&&t.link!==!1&&(t.link||m.isClickable.value));return dt(()=>{const y=p.value?"a":t.tag,T=!!(i.title||t.title!=null),P=!!(i.subtitle||t.subtitle!=null),E=T||P,C=!!(i.append||t.appendAvatar||t.appendIcon),U=!!(i.prepend||t.prependAvatar||t.prependIcon),S=!!(i.image||t.image),x=E||U||C,O=!!(i.text||t.text!=null);return Is(W(y,{class:["v-card",{"v-card--disabled":t.disabled,"v-card--flat":t.flat,"v-card--hover":t.hover&&!(t.disabled||t.flat),"v-card--link":M.value},r.value,s.value,a.value,c.value,f.value,d.value,v.value,g.value,l.value,t.class],style:[o.value,u.value,h.value,t.style],href:m.href.value,onClick:M.value&&m.navigate,tabindex:t.disabled?-1:void 0},{default:()=>{var I;return[S&&W("div",{key:"image",class:"v-card__image"},[i.image?W(On,{key:"image-defaults",disabled:!t.image,defaults:{VImg:{cover:!0,src:t.image}}},i.image):W(zo,{key:"image-img",cover:!0,src:t.image},null)]),W(YS,{name:"v-card",active:!!t.loading,color:typeof t.loading=="boolean"?void 0:t.loading},{default:i.loader}),x&&W(hM,{key:"item",prependAvatar:t.prependAvatar,prependIcon:t.prependIcon,title:t.title,subtitle:t.subtitle,appendAvatar:t.appendAvatar,appendIcon:t.appendIcon},{default:i.item,prepend:i.prepend,title:i.title,subtitle:i.subtitle,append:i.append}),O&&W(_c,{key:"text"},{default:()=>{var L;return[((L=i.text)==null?void 0:L.call(i))??t.text]}}),(I=i.default)==null?void 0:I.call(i),i.actions&&W(ig,null,{default:i.actions}),lu(M.value,"v-card")]}}),[[_p("ripple"),M.value&&t.ripple]])}),{}}}),vM=Ue({color:String,inset:Boolean,length:[Number,String],opacity:[Number,String],thickness:[Number,String],vertical:Boolean,...ft(),...zn()},"VDivider"),_M=et()({name:"VDivider",props:vM(),setup(t,e){let{attrs:n,slots:i}=e;const{themeClasses:r}=Hn(t),{textColorClasses:s,textColorStyles:a}=ks(Ft(t,"color")),o=se(()=>{const l={};return t.length&&(l[t.vertical?"maxHeight":"maxWidth"]=Je(t.length)),t.thickness&&(l[t.vertical?"borderRightWidth":"borderTopWidth"]=Je(t.thickness)),l});return dt(()=>{const l=W("hr",{class:[{"v-divider":!0,"v-divider--inset":t.inset,"v-divider--vertical":t.vertical},r.value,s.value,t.class],style:[o.value,a.value,{"--v-border-opacity":t.opacity},t.style],"aria-orientation":!n.role||n.role==="separator"?t.vertical?"vertical":"horizontal":void 0,role:`${n.role||"separator"}`},null);return i.default?W("div",{class:["v-divider__wrapper",{"v-divider__wrapper--vertical":t.vertical,"v-divider__wrapper--inset":t.inset}]},[l,W("div",{class:"v-divider__content"},[i.default()]),l]):l}),{}}}),xM=Ue({fluid:{type:Boolean,default:!1},...ft(),...Ht()},"VContainer"),yM=et()({name:"VContainer",props:xM(),setup(t,e){let{slots:n}=e;const{rtlClasses:i}=js();return dt(()=>W(t.tag,{class:["v-container",{"v-container--fluid":t.fluid},i.value,t.class],style:t.style},n)),{}}}),og=Ro.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}),lg=Ro.reduce((t,e)=>{const n="offset"+ni(e);return t[n]={type:[String,Number],default:null},t},{}),cg=Ro.reduce((t,e)=>{const n="order"+ni(e);return t[n]={type:[String,Number],default:null},t},{}),md={col:Object.keys(og),offset:Object.keys(lg),order:Object.keys(cg)};function SM(t,e,n){let i=t;if(!(n==null||n===!1)){if(e){const r=e.replace(t,"");i+=`-${r}`}return t==="col"&&(i="v-"+i),t==="col"&&(n===""||n===!0)||(i+=`-${n}`),i.toLowerCase()}}const MM=["auto","start","end","center","baseline","stretch"],EM=Ue({cols:{type:[Boolean,String,Number],default:!1},...og,offset:{type:[String,Number],default:null},...lg,order:{type:[String,Number],default:null},...cg,alignSelf:{type:String,default:null,validator:t=>MM.includes(t)},...ft(),...Ht()},"VCol"),bM=et()({name:"VCol",props:EM(),setup(t,e){let{slots:n}=e;const i=se(()=>{const r=[];let s;for(s in md)md[s].forEach(o=>{const l=t[o],c=SM(s,o,l);c&&r.push(c)});const a=r.some(o=>o.startsWith("v-col-"));return r.push({"v-col":!a||!t.cols,[`v-col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),r});return()=>{var r;return Vn(t.tag,{class:[i.value,t.class],style:t.style},(r=n.default)==null?void 0:r.call(n))}}}),du=["start","end","center"],ug=["space-between","space-around","space-evenly"];function hu(t,e){return Ro.reduce((n,i)=>{const r=t+ni(i);return n[r]=e(),n},{})}const TM=[...du,"baseline","stretch"],fg=t=>TM.includes(t),dg=hu("align",()=>({type:String,default:null,validator:fg})),AM=[...du,...ug],hg=t=>AM.includes(t),pg=hu("justify",()=>({type:String,default:null,validator:hg})),wM=[...du,...ug,"stretch"],mg=t=>wM.includes(t),gg=hu("alignContent",()=>({type:String,default:null,validator:mg})),gd={align:Object.keys(dg),justify:Object.keys(pg),alignContent:Object.keys(gg)},CM={align:"align",justify:"justify",alignContent:"align-content"};function RM(t,e,n){let i=CM[t];if(n!=null){if(e){const r=e.replace(t,"");i+=`-${r}`}return i+=`-${n}`,i.toLowerCase()}}const PM=Ue({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:fg},...dg,justify:{type:String,default:null,validator:hg},...pg,alignContent:{type:String,default:null,validator:mg},...gg,...ft(),...Ht()},"VRow"),LM=et()({name:"VRow",props:PM(),setup(t,e){let{slots:n}=e;const i=se(()=>{const r=[];let s;for(s in gd)gd[s].forEach(a=>{const o=t[a],l=RM(s,a,o);l&&r.push(l)});return r.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),r});return()=>{var r;return Vn(t.tag,{class:["v-row",i.value,t.class],style:t.style},(r=n.default)==null?void 0:r.call(n))}}}),IM=fm("v-spacer","div","VSpacer"),DM=Ue({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function an(t,e,n){return et()({name:t,props:DM({mode:n,origin:e}),setup(i,r){let{slots:s}=r;const a={onBeforeEnter(o){i.origin&&(o.style.transformOrigin=i.origin)},onLeave(o){if(i.leaveAbsolute){const{offsetTop:l,offsetLeft:c,offsetWidth:u,offsetHeight:f}=o;o._transitionInitialStyles={position:o.style.position,top:o.style.top,left:o.style.left,width:o.style.width,height:o.style.height},o.style.position="absolute",o.style.top=`${l}px`,o.style.left=`${c}px`,o.style.width=`${u}px`,o.style.height=`${f}px`}i.hideOnLeave&&o.style.setProperty("display","none","important")},onAfterLeave(o){if(i.leaveAbsolute&&(o!=null&&o._transitionInitialStyles)){const{position:l,top:c,left:u,width:f,height:d}=o._transitionInitialStyles;delete o._transitionInitialStyles,o.style.position=l||"",o.style.top=c||"",o.style.left=u||"",o.style.width=f||"",o.style.height=d||""}}};return()=>{const o=i.group?tu:ns;return Vn(o,{name:i.disabled?"":t,css:!i.disabled,...i.group?void 0:{mode:i.mode},...i.disabled?{}:a},s.default)}}})}function vg(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return et()({name:t,props:{mode:{type:String,default:n},disabled:Boolean,group:Boolean},setup(i,r){let{slots:s}=r;const a=i.group?tu:ns;return()=>Vn(a,{name:i.disabled?"":t,css:!i.disabled,...i.disabled?{}:e},s.default)}})}function _g(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",i=vn(`offset-${n}`);return{onBeforeEnter(a){a._parent=a.parentNode,a._initialStyle={transition:a.style.transition,overflow:a.style.overflow,[n]:a.style[n]}},onEnter(a){const o=a._initialStyle;a.style.setProperty("transition","none","important"),a.style.overflow="hidden";const l=`${a[i]}px`;a.style[n]="0",a.offsetHeight,a.style.transition=o.transition,t&&a._parent&&a._parent.classList.add(t),requestAnimationFrame(()=>{a.style[n]=l})},onAfterEnter:s,onEnterCancelled:s,onLeave(a){a._initialStyle={transition:"",overflow:a.style.overflow,[n]:a.style[n]},a.style.overflow="hidden",a.style[n]=`${a[i]}px`,a.offsetHeight,requestAnimationFrame(()=>a.style[n]="0")},onAfterLeave:r,onLeaveCancelled:r};function r(a){t&&a._parent&&a._parent.classList.remove(t),s(a)}function s(a){const o=a._initialStyle[n];a.style.overflow=a._initialStyle.overflow,o!=null&&(a.style[n]=o),delete a._initialStyle}}an("fab-transition","center center","out-in");an("dialog-bottom-transition");an("dialog-top-transition");an("fade-transition");an("scale-transition");an("scroll-x-transition");an("scroll-x-reverse-transition");an("scroll-y-transition");an("scroll-y-reverse-transition");an("slide-x-transition");an("slide-x-reverse-transition");an("slide-y-transition");an("slide-y-reverse-transition");const xg=vg("expand-transition",_g());vg("expand-x-transition",_g("",!0));const UM={__name:"ProjectCard",props:["title","subtitle","image","desc","route"],setup(t){const e=t,n=Om(),i=Mt(!1),r=()=>{n.push(e.route)};return(s,a)=>(Gr(),Gp(gM,{class:"mx-auto bg-white","max-width":"300","min-width":"300"},{default:Ut(()=>[W(zo,{color:"surface-variant",height:"150",src:t.image,cover:""},null,8,["src"]),W(rg,null,{default:Ut(()=>[eo(Jo(t.title),1)]),_:1}),W(_c,null,{default:Ut(()=>[Qa("div",null,Jo(t.subtitle),1)]),_:1}),W(ig,null,{default:Ut(()=>[W(As,{color:"orange-lighten-2",text:"Start",onClick:r}),W(IM),W(As,{icon:i.value?"mdi-chevron-up":"mdi-chevron-down",onClick:a[0]||(a[0]=o=>i.value=!i.value)},null,8,["icon"])]),_:1}),W(xg,null,{default:Ut(()=>[Is(Qa("div",null,[W(_M),W(_c,null,{default:Ut(()=>[eo(Jo(t.desc),1)]),_:1})],512),[[Jp,i.value]])]),_:1})]),_:1}))}},yg=Ue({text:String,...ft(),...Ht()},"VToolbarTitle"),Sg=et()({name:"VToolbarTitle",props:yg(),setup(t,e){let{slots:n}=e;return dt(()=>{const i=!!(n.default||n.text||t.text);return W(t.tag,{class:["v-toolbar-title",t.class],style:t.style},{default:()=>{var r;return[i&&W("div",{class:"v-toolbar-title__placeholder"},[n.text?n.text():t.text,(r=n.default)==null?void 0:r.call(n)])]}})}),{}}}),NM=[null,"prominent","default","comfortable","compact"],Mg=Ue({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:t=>NM.includes(t)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Do(),...ft(),...Fo(),...dr(),...Ht({tag:"header"}),...zn()},"VToolbar"),vd=et()({name:"VToolbar",props:Mg(),setup(t,e){var h;let{slots:n}=e;const{backgroundColorClasses:i,backgroundColorStyles:r}=Ts(Ft(t,"color")),{borderClasses:s}=Uo(t),{elevationClasses:a}=Oo(t),{roundedClasses:o}=hr(t),{themeClasses:l}=Hn(t),{rtlClasses:c}=js(),u=ut(!!(t.extended||(h=n.extension)!=null&&h.call(n))),f=se(()=>parseInt(Number(t.height)+(t.density==="prominent"?Number(t.height):0)-(t.density==="comfortable"?8:0)-(t.density==="compact"?16:0),10)),d=se(()=>u.value?parseInt(Number(t.extensionHeight)+(t.density==="prominent"?Number(t.extensionHeight):0)-(t.density==="comfortable"?4:0)-(t.density==="compact"?8:0),10):0);return Ao({VBtn:{variant:"text"}}),dt(()=>{var p;const v=!!(t.title||n.title),g=!!(n.image||t.image),m=(p=n.extension)==null?void 0:p.call(n);return u.value=!!(t.extended||m),W(t.tag,{class:["v-toolbar",{"v-toolbar--absolute":t.absolute,"v-toolbar--collapse":t.collapse,"v-toolbar--flat":t.flat,"v-toolbar--floating":t.floating,[`v-toolbar--density-${t.density}`]:!0},i.value,s.value,a.value,o.value,l.value,c.value,t.class],style:[r.value,t.style]},{default:()=>[g&&W("div",{key:"image",class:"v-toolbar__image"},[n.image?W(On,{key:"image-defaults",disabled:!t.image,defaults:{VImg:{cover:!0,src:t.image}}},n.image):W(zo,{key:"image-img",cover:!0,src:t.image},null)]),W(On,{defaults:{VTabs:{height:Je(f.value)}}},{default:()=>{var M,y,T;return[W("div",{class:"v-toolbar__content",style:{height:Je(f.value)}},[n.prepend&&W("div",{class:"v-toolbar__prepend"},[(M=n.prepend)==null?void 0:M.call(n)]),v&&W(Sg,{key:"title",text:t.title},{text:n.title}),(y=n.default)==null?void 0:y.call(n),n.append&&W("div",{class:"v-toolbar__append"},[(T=n.append)==null?void 0:T.call(n)])])]}}),W(On,{defaults:{VTabs:{height:Je(d.value)}}},{default:()=>[W(xg,null,{default:()=>[u.value&&W("div",{class:"v-toolbar__extension",style:{height:Je(d.value)}},[m])]})]})]})}),{contentHeight:f,extensionHeight:d}}}),FM=Ue({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function OM(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:n}=e;let i=0;const r=Mt(null),s=ut(0),a=ut(0),o=ut(0),l=ut(!1),c=ut(!1),u=se(()=>Number(t.scrollThreshold)),f=se(()=>ro((u.value-s.value)/u.value||0)),d=()=>{const h=r.value;!h||n&&!n.value||(i=s.value,s.value="window"in h?h.pageYOffset:h.scrollTop,c.value=s.value<i,o.value=Math.abs(s.value-u.value))};return mt(c,()=>{a.value=a.value||s.value}),mt(l,()=>{a.value=0}),ts(()=>{mt(()=>t.scrollTarget,h=>{var g;const v=h?document.querySelector(h):window;v&&v!==r.value&&((g=r.value)==null||g.removeEventListener("scroll",d),r.value=v,r.value.addEventListener("scroll",d,{passive:!0}))},{immediate:!0})}),ri(()=>{var h;(h=r.value)==null||h.removeEventListener("scroll",d)}),n&&mt(n,d,{immediate:!0}),{scrollThreshold:u,currentScroll:s,currentThreshold:o,isScrollActive:l,scrollRatio:f,isScrollingUp:c,savedScroll:a}}function Eg(){const t=ut(!1);return ts(()=>{window.requestAnimationFrame(()=>{t.value=!0})}),{ssrBootStyles:se(()=>t.value?void 0:{transition:"none !important"}),isBooted:Gs(t)}}const BM=Ue({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:t=>["top","bottom"].includes(t)},...Mg(),...My(),...FM(),height:{type:[Number,String],default:64}},"VAppBar"),kM=et()({name:"VAppBar",props:BM(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const i=Mt(),r=Co(t,"modelValue"),s=se(()=>{var T;const y=new Set(((T=t.scrollBehavior)==null?void 0:T.split(" "))??[]);return{hide:y.has("hide"),fullyHide:y.has("fully-hide"),inverted:y.has("inverted"),collapse:y.has("collapse"),elevate:y.has("elevate"),fadeImage:y.has("fade-image")}}),a=se(()=>{const y=s.value;return y.hide||y.fullyHide||y.inverted||y.collapse||y.elevate||y.fadeImage||!r.value}),{currentScroll:o,scrollThreshold:l,isScrollingUp:c,scrollRatio:u}=OM(t,{canScroll:a}),f=se(()=>s.value.hide||s.value.fullyHide),d=se(()=>t.collapse||s.value.collapse&&(s.value.inverted?u.value>0:u.value===0)),h=se(()=>t.flat||s.value.fullyHide&&!r.value||s.value.elevate&&(s.value.inverted?o.value>0:o.value===0)),v=se(()=>s.value.fadeImage?s.value.inverted?1-u.value:u.value:void 0),g=se(()=>{var P,E;const y=Number(((P=i.value)==null?void 0:P.contentHeight)??t.height),T=Number(((E=i.value)==null?void 0:E.extensionHeight)??0);return f.value?o.value<l.value||s.value.fullyHide?y+T:y:y+T});nm(se(()=>!!t.scrollBehavior),()=>{cr(()=>{f.value?s.value.inverted?r.value=o.value>l.value:r.value=c.value||o.value<l.value:r.value=!0})});const{ssrBootStyles:m}=Eg(),{layoutItemStyles:p,layoutIsReady:M}=by({id:t.name,order:se(()=>parseInt(t.order,10)),position:Ft(t,"location"),layoutSize:g,elementSize:ut(void 0),active:r,absolute:Ft(t,"absolute")});return dt(()=>{const y=vd.filterProps(t);return W(vd,ur({ref:i,class:["v-app-bar",{"v-app-bar--bottom":t.location==="bottom"},t.class],style:[{...p.value,"--v-toolbar-image-opacity":v.value,height:void 0,...m.value},t.style]},y,{collapse:d.value,flat:h.value}),n)}),M}}),VM=et()({name:"VAppBarTitle",props:yg(),setup(t,e){let{slots:n}=e;return dt(()=>W(Sg,ur(t,{class:"v-app-bar-title"}),n)),{}}}),zM=Ue({...ft(),...Zs(),...Em()},"VLayout"),HM=et()({name:"VLayout",props:zM(),setup(t,e){let{slots:n}=e;const{layoutClasses:i,layoutStyles:r,getLayoutItem:s,items:a,layoutRef:o}=bm(t),{dimensionStyles:l}=Js(t);return dt(()=>W("div",{ref:o,class:[i.value,t.class],style:[l.value,r.value,t.style]},[W(xp,null,{default:()=>{var c;return[W(yt,null,[(c=n.default)==null?void 0:c.call(n)])]}})])),{getLayoutItem:s,items:a}}}),GM=Ue({scrollable:Boolean,...ft(),...Zs(),...Ht({tag:"main"})},"VMain"),bg=et()({name:"VMain",props:GM(),setup(t,e){let{slots:n}=e;const{dimensionStyles:i}=Js(t),{mainStyles:r,layoutIsReady:s}=Ey(),{ssrBootStyles:a}=Eg();return dt(()=>W(t.tag,{class:["v-main",{"v-main--scrollable":t.scrollable},t.class],style:[r.value,a.value,i.value,t.style]},{default:()=>{var o,l;return[t.scrollable?W("div",{class:"v-main__scroller"},[(o=n.default)==null?void 0:o.call(n)]):(l=n.default)==null?void 0:l.call(n)]}})),s}}),WM=Xs({__name:"Main",setup(t){const e=[{title:"Augmented reality",subtitle:"Augmented reality project, based of WebXR",image:"eidosmedia-ar.png",desc:"Here should be description",route:tv[1].path}];return(n,i)=>{const r=UM;return Gr(),rc(yt,null,[W(kM,{color:"primary",density:"compact"},{default:Ut(()=>[W(VM,null,{default:Ut(()=>[eo("Projects|IV")]),_:1})]),_:1}),W(HM,null,{default:Ut(()=>[W(bg,null,{default:Ut(()=>[W(yM,{fluid:""},{default:Ut(()=>[W(LM,{justify:"center"},{default:Ut(()=>[(Gr(),rc(yt,null,A_(e,s=>W(bM,{key:s.title,cols:"auto"},{default:Ut(()=>[W(r,{title:s.title,subtitle:s.subtitle,desc:s.desc,image:s.image,route:s.route},null,8,["title","subtitle","desc","image","route"])]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})]),_:1})],64)}}});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pu="164",XM=0,_d=1,$M=2,Tg=1,qM=2,Zn=3,Li=0,Yt=1,Jn=2,wi=0,Vr=1,xd=2,yd=3,Sd=4,YM=5,Ji=100,jM=101,KM=102,ZM=103,JM=104,QM=200,eE=201,tE=202,nE=203,xc=204,yc=205,iE=206,rE=207,sE=208,aE=209,oE=210,lE=211,cE=212,uE=213,fE=214,dE=0,hE=1,pE=2,uo=3,mE=4,gE=5,vE=6,_E=7,mu=0,xE=1,yE=2,Ci=0,SE=1,ME=2,EE=3,bE=4,TE=5,AE=6,wE=7,Ag=300,jr=301,Kr=302,Sc=303,Mc=304,Ho=306,Ec=1e3,tr=1001,bc=1002,mn=1003,CE=1004,_a=1005,Mn=1006,hl=1007,nr=1008,Ii=1009,RE=1010,PE=1011,wg=1012,Cg=1013,Zr=1014,Ei=1015,Go=1016,Rg=1017,Pg=1018,Qs=1020,LE=35902,IE=1021,DE=1022,Nn=1023,UE=1024,NE=1025,zr=1026,Hs=1027,FE=1028,Lg=1029,OE=1030,Ig=1031,Dg=1033,pl=33776,ml=33777,gl=33778,vl=33779,Md=35840,Ed=35841,bd=35842,Td=35843,Ad=36196,wd=37492,Cd=37496,Rd=37808,Pd=37809,Ld=37810,Id=37811,Dd=37812,Ud=37813,Nd=37814,Fd=37815,Od=37816,Bd=37817,kd=37818,Vd=37819,zd=37820,Hd=37821,_l=36492,Gd=36494,Wd=36495,BE=36283,Xd=36284,$d=36285,qd=36286,kE=3200,VE=3201,Ug=0,zE=1,Mi="",Rn="srgb",Oi="srgb-linear",gu="display-p3",Wo="display-p3-linear",fo="linear",at="srgb",ho="rec709",po="p3",gr=7680,Yd=519,HE=512,GE=513,WE=514,Ng=515,XE=516,$E=517,qE=518,YE=519,jd=35044,Kd="300 es",Qn=2e3,mo=2001;class is{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xl=Math.PI/180,Tc=180/Math.PI;function ea(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(It[t&255]+It[t>>8&255]+It[t>>16&255]+It[t>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[n&63|128]+It[n>>8&255]+"-"+It[n>>16&255]+It[n>>24&255]+It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]).toLowerCase()}function Xt(t,e,n){return Math.max(e,Math.min(n,t))}function jE(t,e){return(t%e+e)%e}function yl(t,e,n){return(1-n)*t+n*e}function us(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Gt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(e=0,n=0){Ke.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,n,i,r,s,a,o,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],v=i[8],g=r[0],m=r[3],p=r[6],M=r[1],y=r[4],T=r[7],P=r[2],E=r[5],C=r[8];return s[0]=a*g+o*M+l*P,s[3]=a*m+o*y+l*E,s[6]=a*p+o*T+l*C,s[1]=c*g+u*M+f*P,s[4]=c*m+u*y+f*E,s[7]=c*p+u*T+f*C,s[2]=d*g+h*M+v*P,s[5]=d*m+h*y+v*E,s[8]=d*p+h*T+v*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,h=c*s-a*l,v=n*f+i*d+r*h;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=f*g,e[1]=(r*c-u*i)*g,e[2]=(o*i-r*a)*g,e[3]=d*g,e[4]=(u*n-r*l)*g,e[5]=(r*s-o*n)*g,e[6]=h*g,e[7]=(i*l-c*n)*g,e[8]=(a*n-i*s)*g,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Sl.makeScale(e,n)),this}rotate(e){return this.premultiply(Sl.makeRotation(-e)),this}translate(e,n){return this.premultiply(Sl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sl=new He;function Fg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function go(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function KE(){const t=go("canvas");return t.style.display="block",t}const Zd={};function ZE(t){t in Zd||(Zd[t]=!0,console.warn(t))}const Jd=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Qd=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xa={[Oi]:{transfer:fo,primaries:ho,toReference:t=>t,fromReference:t=>t},[Rn]:{transfer:at,primaries:ho,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Wo]:{transfer:fo,primaries:po,toReference:t=>t.applyMatrix3(Qd),fromReference:t=>t.applyMatrix3(Jd)},[gu]:{transfer:at,primaries:po,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Qd),fromReference:t=>t.applyMatrix3(Jd).convertLinearToSRGB()}},JE=new Set([Oi,Wo]),it={enabled:!0,_workingColorSpace:Oi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!JE.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=xa[e].toReference,r=xa[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return xa[t].primaries},getTransfer:function(t){return t===Mi?fo:xa[t].transfer}};function Hr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ml(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let vr;class QE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{vr===void 0&&(vr=go("canvas")),vr.width=e.width,vr.height=e.height;const i=vr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=vr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=go("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Hr(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Hr(n[i]/255)*255):n[i]=Hr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eb=0;class Og{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eb++}),this.uuid=ea(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(El(r[a].image)):s.push(El(r[a]))}else s=El(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function El(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?QE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tb=0;class jt extends is{constructor(e=jt.DEFAULT_IMAGE,n=jt.DEFAULT_MAPPING,i=tr,r=tr,s=Mn,a=nr,o=Nn,l=Ii,c=jt.DEFAULT_ANISOTROPY,u=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=ea(),this.name="",this.source=new Og(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ag)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ec:e.x=e.x-Math.floor(e.x);break;case tr:e.x=e.x<0?0:1;break;case bc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ec:e.y=e.y-Math.floor(e.y);break;case tr:e.y=e.y<0?0:1;break;case bc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Ag;jt.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,n=0,i=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],v=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+g)<.1&&Math.abs(v+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,T=(h+1)/2,P=(p+1)/2,E=(u+d)/4,C=(f+g)/4,U=(v+m)/4;return y>T&&y>P?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=E/i,s=C/i):T>P?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=E/r,s=U/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=C/s,r=U/s),this.set(i,r,s,n),this}let M=Math.sqrt((m-v)*(m-v)+(f-g)*(f-g)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-v)/M,this.y=(f-g)/M,this.z=(d-u)/M,this.w=Math.acos((c+h+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nb extends is{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Og(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class or extends nb{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Bg extends jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=mn,this.minFilter=mn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ib extends jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=mn,this.minFilter=mn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ta{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[a+0],h=s[a+1],v=s[a+2],g=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(o===1){e[n+0]=d,e[n+1]=h,e[n+2]=v,e[n+3]=g;return}if(f!==g||l!==d||c!==h||u!==v){let m=1-o;const p=l*d+c*h+u*v+f*g,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const P=Math.sqrt(y),E=Math.atan2(P,p*M);m=Math.sin(m*E)/P,o=Math.sin(o*E)/P}const T=o*M;if(l=l*m+d*T,c=c*m+h*T,u=u*m+v*T,f=f*m+g*T,m===1-o){const P=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=P,c*=P,u*=P,f*=P}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],d=s[a+1],h=s[a+2],v=s[a+3];return e[n]=o*v+u*f+l*h-c*d,e[n+1]=l*v+u*d+c*f-o*h,e[n+2]=c*v+u*h+o*d-l*f,e[n+3]=u*v-o*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),d=l(i/2),h=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*h*v,this._y=c*h*f-d*u*v,this._z=c*u*v+d*h*f,this._w=c*u*f-d*h*v;break;case"YXZ":this._x=d*u*f+c*h*v,this._y=c*h*f-d*u*v,this._z=c*u*v-d*h*f,this._w=c*u*f+d*h*v;break;case"ZXY":this._x=d*u*f-c*h*v,this._y=c*h*f+d*u*v,this._z=c*u*v+d*h*f,this._w=c*u*f-d*h*v;break;case"ZYX":this._x=d*u*f-c*h*v,this._y=c*h*f+d*u*v,this._z=c*u*v-d*h*f,this._w=c*u*f+d*h*v;break;case"YZX":this._x=d*u*f+c*h*v,this._y=c*h*f+d*u*v,this._z=c*u*v-d*h*f,this._w=c*u*f-d*h*v;break;case"XZY":this._x=d*u*f-c*h*v,this._y=c*h*f-d*u*v,this._z=c*u*v+d*h*f,this._w=c*u*f+d*h*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+o+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-r)*h}else if(i>o&&i>f){const h=2*Math.sqrt(1+i-o-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+c)/h}else if(o>f){const h=2*Math.sqrt(1+o-i-f);this._w=(s-c)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-o);this._w=(a-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const h=1-n;return this._w=h*a+n*this._w,this._x=h*i+n*this._x,this._y=h*r+n*this._y,this._z=h*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,n=0,i=0){Z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(eh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(eh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bl.copy(this).projectOnVector(e),this.sub(bl)}reflect(e){return this.sub(bl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bl=new Z,eh=new ta;class na{constructor(e=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(_n.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(_n.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=_n.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,_n):_n.fromBufferAttribute(s,a),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ya.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ya.copy(i.boundingBox)),ya.applyMatrix4(e.matrixWorld),this.union(ya)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fs),Sa.subVectors(this.max,fs),_r.subVectors(e.a,fs),xr.subVectors(e.b,fs),yr.subVectors(e.c,fs),ui.subVectors(xr,_r),fi.subVectors(yr,xr),Gi.subVectors(_r,yr);let n=[0,-ui.z,ui.y,0,-fi.z,fi.y,0,-Gi.z,Gi.y,ui.z,0,-ui.x,fi.z,0,-fi.x,Gi.z,0,-Gi.x,-ui.y,ui.x,0,-fi.y,fi.x,0,-Gi.y,Gi.x,0];return!Tl(n,_r,xr,yr,Sa)||(n=[1,0,0,0,1,0,0,0,1],!Tl(n,_r,xr,yr,Sa))?!1:(Ma.crossVectors(ui,fi),n=[Ma.x,Ma.y,Ma.z],Tl(n,_r,xr,yr,Sa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xn=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],_n=new Z,ya=new na,_r=new Z,xr=new Z,yr=new Z,ui=new Z,fi=new Z,Gi=new Z,fs=new Z,Sa=new Z,Ma=new Z,Wi=new Z;function Tl(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Wi.fromArray(t,s);const o=r.x*Math.abs(Wi.x)+r.y*Math.abs(Wi.y)+r.z*Math.abs(Wi.z),l=e.dot(Wi),c=n.dot(Wi),u=i.dot(Wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const rb=new na,ds=new Z,Al=new Z;class vu{constructor(e=new Z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):rb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ds.subVectors(e,this.center);const n=ds.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ds,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Al.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ds.copy(e.center).add(Al)),this.expandByPoint(ds.copy(e.center).sub(Al))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $n=new Z,wl=new Z,Ea=new Z,di=new Z,Cl=new Z,ba=new Z,Rl=new Z;class sb{constructor(e=new Z,n=new Z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=$n.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,n),$n.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){wl.copy(e).add(n).multiplyScalar(.5),Ea.copy(n).sub(e).normalize(),di.copy(this.origin).sub(wl);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Ea),o=di.dot(this.direction),l=-di.dot(Ea),c=di.lengthSq(),u=Math.abs(1-a*a);let f,d,h,v;if(u>0)if(f=a*l-o,d=a*o-l,v=s*u,f>=0)if(d>=-v)if(d<=v){const g=1/u;f*=g,d*=g,h=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(wl).addScaledVector(Ea,d),h}intersectSphere(e,n){$n.subVectors(e.center,this.origin);const i=$n.dot(this.direction),r=$n.dot($n)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,n,i,r,s){Cl.subVectors(n,e),ba.subVectors(i,e),Rl.crossVectors(Cl,ba);let a=this.direction.dot(Rl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;di.subVectors(this.origin,e);const l=o*this.direction.dot(ba.crossVectors(di,ba));if(l<0)return null;const c=o*this.direction.dot(Cl.cross(di));if(c<0||l+c>a)return null;const u=-o*di.dot(Rl);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(e,n,i,r,s,a,o,l,c,u,f,d,h,v,g,m){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,f,d,h,v,g,m)}set(e,n,i,r,s,a,o,l,c,u,f,d,h,v,g,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=v,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Sr.setFromMatrixColumn(e,0).length(),s=1/Sr.setFromMatrixColumn(e,1).length(),a=1/Sr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,h=a*f,v=o*u,g=o*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=h+v*c,n[5]=d-g*c,n[9]=-o*l,n[2]=g-d*c,n[6]=v+h*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,v=c*u,g=c*f;n[0]=d+g*o,n[4]=v*o-h,n[8]=a*c,n[1]=a*f,n[5]=a*u,n[9]=-o,n[2]=h*o-v,n[6]=g+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,v=c*u,g=c*f;n[0]=d-g*o,n[4]=-a*f,n[8]=v+h*o,n[1]=h+v*o,n[5]=a*u,n[9]=g-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*u,h=a*f,v=o*u,g=o*f;n[0]=l*u,n[4]=v*c-h,n[8]=d*c+g,n[1]=l*f,n[5]=g*c+d,n[9]=h*c-v,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,h=a*c,v=o*l,g=o*c;n[0]=l*u,n[4]=g-d*f,n[8]=v*f+h,n[1]=f,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=h*f+v,n[10]=d-g*f}else if(e.order==="XZY"){const d=a*l,h=a*c,v=o*l,g=o*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+g,n[5]=a*u,n[9]=h*f-v,n[2]=v*f-h,n[6]=o*u,n[10]=g*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ab,e,ob)}lookAt(e,n,i){const r=this.elements;return Jt.subVectors(e,n),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),hi.crossVectors(i,Jt),hi.lengthSq()===0&&(Math.abs(i.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),hi.crossVectors(i,Jt)),hi.normalize(),Ta.crossVectors(Jt,hi),r[0]=hi.x,r[4]=Ta.x,r[8]=Jt.x,r[1]=hi.y,r[5]=Ta.y,r[9]=Jt.y,r[2]=hi.z,r[6]=Ta.z,r[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],v=i[2],g=i[6],m=i[10],p=i[14],M=i[3],y=i[7],T=i[11],P=i[15],E=r[0],C=r[4],U=r[8],S=r[12],x=r[1],O=r[5],I=r[9],L=r[13],X=r[2],J=r[6],te=r[10],ne=r[14],H=r[3],pe=r[7],he=r[11],Se=r[15];return s[0]=a*E+o*x+l*X+c*H,s[4]=a*C+o*O+l*J+c*pe,s[8]=a*U+o*I+l*te+c*he,s[12]=a*S+o*L+l*ne+c*Se,s[1]=u*E+f*x+d*X+h*H,s[5]=u*C+f*O+d*J+h*pe,s[9]=u*U+f*I+d*te+h*he,s[13]=u*S+f*L+d*ne+h*Se,s[2]=v*E+g*x+m*X+p*H,s[6]=v*C+g*O+m*J+p*pe,s[10]=v*U+g*I+m*te+p*he,s[14]=v*S+g*L+m*ne+p*Se,s[3]=M*E+y*x+T*X+P*H,s[7]=M*C+y*O+T*J+P*pe,s[11]=M*U+y*I+T*te+P*he,s[15]=M*S+y*L+T*ne+P*Se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],v=e[3],g=e[7],m=e[11],p=e[15];return v*(+s*l*f-r*c*f-s*o*d+i*c*d+r*o*h-i*l*h)+g*(+n*l*h-n*c*d+s*a*d-r*a*h+r*c*u-s*l*u)+m*(+n*c*f-n*o*h-s*a*f+i*a*h+s*o*u-i*c*u)+p*(-r*o*u-n*l*f+n*o*d+r*a*f-i*a*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],v=e[12],g=e[13],m=e[14],p=e[15],M=f*m*c-g*d*c+g*l*h-o*m*h-f*l*p+o*d*p,y=v*d*c-u*m*c-v*l*h+a*m*h+u*l*p-a*d*p,T=u*g*c-v*f*c+v*o*h-a*g*h-u*o*p+a*f*p,P=v*f*l-u*g*l-v*o*d+a*g*d+u*o*m-a*f*m,E=n*M+i*y+r*T+s*P;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=M*C,e[1]=(g*d*s-f*m*s-g*r*h+i*m*h+f*r*p-i*d*p)*C,e[2]=(o*m*s-g*l*s+g*r*c-i*m*c-o*r*p+i*l*p)*C,e[3]=(f*l*s-o*d*s-f*r*c+i*d*c+o*r*h-i*l*h)*C,e[4]=y*C,e[5]=(u*m*s-v*d*s+v*r*h-n*m*h-u*r*p+n*d*p)*C,e[6]=(v*l*s-a*m*s-v*r*c+n*m*c+a*r*p-n*l*p)*C,e[7]=(a*d*s-u*l*s+u*r*c-n*d*c-a*r*h+n*l*h)*C,e[8]=T*C,e[9]=(v*f*s-u*g*s-v*i*h+n*g*h+u*i*p-n*f*p)*C,e[10]=(a*g*s-v*o*s+v*i*c-n*g*c-a*i*p+n*o*p)*C,e[11]=(u*o*s-a*f*s-u*i*c+n*f*c+a*i*h-n*o*h)*C,e[12]=P*C,e[13]=(u*g*r-v*f*r+v*i*d-n*g*d-u*i*m+n*f*m)*C,e[14]=(v*o*r-a*g*r-v*i*l+n*g*l+a*i*m-n*o*m)*C,e[15]=(a*f*r-u*o*r+u*i*l-n*f*l-a*i*d+n*o*d)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,f=o+o,d=s*c,h=s*u,v=s*f,g=a*u,m=a*f,p=o*f,M=l*c,y=l*u,T=l*f,P=i.x,E=i.y,C=i.z;return r[0]=(1-(g+p))*P,r[1]=(h+T)*P,r[2]=(v-y)*P,r[3]=0,r[4]=(h-T)*E,r[5]=(1-(d+p))*E,r[6]=(m+M)*E,r[7]=0,r[8]=(v+y)*C,r[9]=(m-M)*C,r[10]=(1-(d+g))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Sr.set(r[0],r[1],r[2]).length();const a=Sr.set(r[4],r[5],r[6]).length(),o=Sr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],xn.copy(this);const c=1/s,u=1/a,f=1/o;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=u,xn.elements[5]*=u,xn.elements[6]*=u,xn.elements[8]*=f,xn.elements[9]*=f,xn.elements[10]*=f,n.setFromRotationMatrix(xn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=Qn){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let h,v;if(o===Qn)h=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===mo)h=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Qn){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(a-s),d=(n+e)*c,h=(i+r)*u;let v,g;if(o===Qn)v=(a+s)*f,g=-2*f;else if(o===mo)v=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Sr=new Z,xn=new St,ab=new Z(0,0,0),ob=new Z(1,1,1),hi=new Z,Ta=new Z,Jt=new Z,th=new St,nh=new ta;class kn{constructor(e=0,n=0,i=0,r=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return th.makeRotationFromQuaternion(e),this.setFromRotationMatrix(th,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return nh.setFromEuler(this),this.setFromQuaternion(nh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class kg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lb=0;const ih=new Z,Mr=new ta,qn=new St,Aa=new Z,hs=new Z,cb=new Z,ub=new ta,rh=new Z(1,0,0),sh=new Z(0,1,0),ah=new Z(0,0,1),oh={type:"added"},fb={type:"removed"},Er={type:"childadded",child:null},Pl={type:"childremoved",child:null};class zt extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lb++}),this.uuid=ea(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new Z,n=new kn,i=new ta,r=new Z(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new He}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Mr.setFromAxisAngle(e,n),this.quaternion.multiply(Mr),this}rotateOnWorldAxis(e,n){return Mr.setFromAxisAngle(e,n),this.quaternion.premultiply(Mr),this}rotateX(e){return this.rotateOnAxis(rh,e)}rotateY(e){return this.rotateOnAxis(sh,e)}rotateZ(e){return this.rotateOnAxis(ah,e)}translateOnAxis(e,n){return ih.copy(e).applyQuaternion(this.quaternion),this.position.add(ih.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(rh,e)}translateY(e){return this.translateOnAxis(sh,e)}translateZ(e){return this.translateOnAxis(ah,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Aa.copy(e):Aa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(hs,Aa,this.up):qn.lookAt(Aa,hs,this.up),this.quaternion.setFromRotationMatrix(qn),r&&(qn.extractRotation(r.matrixWorld),Mr.setFromRotationMatrix(qn),this.quaternion.premultiply(Mr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(oh),Er.child=e,this.dispatchEvent(Er),Er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(fb),Pl.child=e,this.dispatchEvent(Pl),Pl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(oh),Er.child=e,this.dispatchEvent(Er),Er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,e,cb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,ub,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),h=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}zt.DEFAULT_UP=new Z(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new Z,Yn=new Z,Ll=new Z,jn=new Z,br=new Z,Tr=new Z,lh=new Z,Il=new Z,Dl=new Z,Ul=new Z;class Dn{constructor(e=new Z,n=new Z,i=new Z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),yn.subVectors(e,n),r.cross(yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){yn.subVectors(r,n),Yn.subVectors(i,n),Ll.subVectors(e,n);const a=yn.dot(yn),o=yn.dot(Yn),l=yn.dot(Ll),c=Yn.dot(Yn),u=Yn.dot(Ll),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-o*u)*d,v=(a*u-o*l)*d;return s.set(1-h-v,v,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,jn.x),l.addScaledVector(a,jn.y),l.addScaledVector(o,jn.z),l)}static isFrontFacing(e,n,i,r){return yn.subVectors(i,n),Yn.subVectors(e,n),yn.cross(Yn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),yn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Dn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Dn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;br.subVectors(r,i),Tr.subVectors(s,i),Il.subVectors(e,i);const l=br.dot(Il),c=Tr.dot(Il);if(l<=0&&c<=0)return n.copy(i);Dl.subVectors(e,r);const u=br.dot(Dl),f=Tr.dot(Dl);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(br,a);Ul.subVectors(e,s);const h=br.dot(Ul),v=Tr.dot(Ul);if(v>=0&&h<=v)return n.copy(s);const g=h*c-l*v;if(g<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(Tr,o);const m=u*v-h*f;if(m<=0&&f-u>=0&&h-v>=0)return lh.subVectors(s,r),o=(f-u)/(f-u+(h-v)),n.copy(r).addScaledVector(lh,o);const p=1/(m+g+d);return a=g*p,o=d*p,n.copy(i).addScaledVector(br,a).addScaledVector(Tr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},wa={h:0,s:0,l:0};function Nl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=jE(e,1),n=Xt(n,0,1),i=Xt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Nl(a,s,e+1/3),this.g=Nl(a,s,e),this.b=Nl(a,s,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,n=Rn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Rn){const i=Vg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hr(e.r),this.g=Hr(e.g),this.b=Hr(e.b),this}copyLinearToSRGB(e){return this.r=Ml(e.r),this.g=Ml(e.g),this.b=Ml(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return it.fromWorkingColorSpace(Dt.copy(this),e),Math.round(Xt(Dt.r*255,0,255))*65536+Math.round(Xt(Dt.g*255,0,255))*256+Math.round(Xt(Dt.b*255,0,255))}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.fromWorkingColorSpace(Dt.copy(this),n);const i=Dt.r,r=Dt.g,s=Dt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=it.workingColorSpace){return it.fromWorkingColorSpace(Dt.copy(this),n),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=Rn){it.fromWorkingColorSpace(Dt.copy(this),e);const n=Dt.r,i=Dt.g,r=Dt.b;return e!==Rn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+n,pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(pi),e.getHSL(wa);const i=yl(pi.h,wa.h,n),r=yl(pi.s,wa.s,n),s=yl(pi.l,wa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new je;je.NAMES=Vg;let db=0;class ia extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:db++}),this.uuid=ea(),this.name="",this.type="Material",this.blending=Vr,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xc,this.blendDst=yc,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gr,this.stencilZFail=gr,this.stencilZPass=gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vr&&(i.blending=this.blending),this.side!==Li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==xc&&(i.blendSrc=this.blendSrc),this.blendDst!==yc&&(i.blendDst=this.blendDst),this.blendEquation!==Ji&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==uo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _u extends ia{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=mu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new Z,Ca=new Ke;class Bn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=jd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ZE("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ca.fromBufferAttribute(this,n),Ca.applyMatrix3(e),this.setXY(n,Ca.x,Ca.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyMatrix3(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyMatrix4(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyNormalMatrix(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.transformDirection(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=us(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Gt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=us(n,this.array)),n}setX(e,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=us(n,this.array)),n}setY(e,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=us(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=us(n,this.array)),n}setW(e,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Gt(n,this.array),i=Gt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Gt(n,this.array),i=Gt(i,this.array),r=Gt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Gt(n,this.array),i=Gt(i,this.array),r=Gt(r,this.array),s=Gt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jd&&(e.usage=this.usage),e}}class zg extends Bn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Hg extends Bn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class rn extends Bn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let hb=0;const cn=new St,Fl=new zt,Ar=new Z,Qt=new na,ps=new na,Tt=new Z;class si extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hb++}),this.uuid=ea(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fg(e)?Hg:zg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,n,i){return cn.makeTranslation(e,n,i),this.applyMatrix4(cn),this}scale(e,n,i){return cn.makeScale(e,n,i),this.applyMatrix4(cn),this}lookAt(e){return Fl.lookAt(e),Fl.updateMatrix(),this.applyMatrix4(Fl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new rn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new na);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Qt.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const i=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ps.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(Qt.min,ps.min),Qt.expandByPoint(Tt),Tt.addVectors(Qt.max,ps.max),Qt.expandByPoint(Tt)):(Qt.expandByPoint(ps.min),Qt.expandByPoint(ps.max))}Qt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Tt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Tt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Tt.fromBufferAttribute(o,c),l&&(Ar.fromBufferAttribute(e,c),Tt.add(Ar)),r=Math.max(r,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new Z,l[U]=new Z;const c=new Z,u=new Z,f=new Z,d=new Ke,h=new Ke,v=new Ke,g=new Z,m=new Z;function p(U,S,x){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,S),f.fromBufferAttribute(i,x),d.fromBufferAttribute(s,U),h.fromBufferAttribute(s,S),v.fromBufferAttribute(s,x),u.sub(c),f.sub(c),h.sub(d),v.sub(d);const O=1/(h.x*v.y-v.x*h.y);isFinite(O)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(f,-h.y).multiplyScalar(O),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-v.x).multiplyScalar(O),o[U].add(g),o[S].add(g),o[x].add(g),l[U].add(m),l[S].add(m),l[x].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let U=0,S=M.length;U<S;++U){const x=M[U],O=x.start,I=x.count;for(let L=O,X=O+I;L<X;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const y=new Z,T=new Z,P=new Z,E=new Z;function C(U){P.fromBufferAttribute(r,U),E.copy(P);const S=o[U];y.copy(S),y.sub(P.multiplyScalar(P.dot(S))).normalize(),T.crossVectors(E,S);const O=T.dot(l[U])<0?-1:1;a.setXYZW(U,y.x,y.y,y.z,O)}for(let U=0,S=M.length;U<S;++U){const x=M[U],O=x.start,I=x.count;for(let L=O,X=O+I;L<X;L+=3)C(e.getX(L+0)),C(e.getX(L+1)),C(e.getX(L+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new Z,s=new Z,a=new Z,o=new Z,l=new Z,c=new Z,u=new Z,f=new Z;if(e)for(let d=0,h=e.count;d<h;d+=3){const v=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,g),a.fromBufferAttribute(n,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=n.count;d<h;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Tt.fromBufferAttribute(e,n),Tt.normalize(),e.setXYZ(n,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let h=0,v=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?h=l[g]*o.data.stride+o.offset:h=l[g]*u;for(let p=0;p<u;p++)d[v++]=c[h++]}return new Bn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new si,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ch=new St,Xi=new sb,Ra=new vu,uh=new Z,wr=new Z,Cr=new Z,Rr=new Z,Ol=new Z,Pa=new Z,La=new Ke,Ia=new Ke,Da=new Ke,fh=new Z,dh=new Z,hh=new Z,Ua=new Z,Na=new Z;class En extends zt{constructor(e=new si,n=new _u){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Pa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Ol.fromBufferAttribute(f,e),a?Pa.addScaledVector(Ol,u):Pa.addScaledVector(Ol.sub(n),u))}n.add(Pa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ra.copy(i.boundingSphere),Ra.applyMatrix4(s),Xi.copy(e.ray).recast(e.near),!(Ra.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(Ra,uh)===null||Xi.origin.distanceToSquared(uh)>(e.far-e.near)**2))&&(ch.copy(s).invert(),Xi.copy(e.ray).applyMatrix4(ch),!(i.boundingBox!==null&&Xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Xi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,g=d.length;v<g;v++){const m=d[v],p=a[m.materialIndex],M=Math.max(m.start,h.start),y=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let T=M,P=y;T<P;T+=3){const E=o.getX(T),C=o.getX(T+1),U=o.getX(T+2);r=Fa(this,p,e,i,c,u,f,E,C,U),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,h.start),g=Math.min(o.count,h.start+h.count);for(let m=v,p=g;m<p;m+=3){const M=o.getX(m),y=o.getX(m+1),T=o.getX(m+2);r=Fa(this,a,e,i,c,u,f,M,y,T),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,g=d.length;v<g;v++){const m=d[v],p=a[m.materialIndex],M=Math.max(m.start,h.start),y=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let T=M,P=y;T<P;T+=3){const E=T,C=T+1,U=T+2;r=Fa(this,p,e,i,c,u,f,E,C,U),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let m=v,p=g;m<p;m+=3){const M=m,y=m+1,T=m+2;r=Fa(this,a,e,i,c,u,f,M,y,T),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function pb(t,e,n,i,r,s,a,o){let l;if(e.side===Yt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Li,o),l===null)return null;Na.copy(o),Na.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Na);return c<n.near||c>n.far?null:{distance:c,point:Na.clone(),object:t}}function Fa(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,wr),t.getVertexPosition(l,Cr),t.getVertexPosition(c,Rr);const u=pb(t,e,n,i,wr,Cr,Rr,Ua);if(u){r&&(La.fromBufferAttribute(r,o),Ia.fromBufferAttribute(r,l),Da.fromBufferAttribute(r,c),u.uv=Dn.getInterpolation(Ua,wr,Cr,Rr,La,Ia,Da,new Ke)),s&&(La.fromBufferAttribute(s,o),Ia.fromBufferAttribute(s,l),Da.fromBufferAttribute(s,c),u.uv1=Dn.getInterpolation(Ua,wr,Cr,Rr,La,Ia,Da,new Ke)),a&&(fh.fromBufferAttribute(a,o),dh.fromBufferAttribute(a,l),hh.fromBufferAttribute(a,c),u.normal=Dn.getInterpolation(Ua,wr,Cr,Rr,fh,dh,hh,new Z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new Z,materialIndex:0};Dn.getNormal(wr,Cr,Rr,f.normal),u.face=f}return u}class ra extends si{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,h=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new rn(c,3)),this.setAttribute("normal",new rn(u,3)),this.setAttribute("uv",new rn(f,2));function v(g,m,p,M,y,T,P,E,C,U,S){const x=T/C,O=P/U,I=T/2,L=P/2,X=E/2,J=C+1,te=U+1;let ne=0,H=0;const pe=new Z;for(let he=0;he<te;he++){const Se=he*O-L;for(let Pe=0;Pe<J;Pe++){const Xe=Pe*x-I;pe[g]=Xe*M,pe[m]=Se*y,pe[p]=X,c.push(pe.x,pe.y,pe.z),pe[g]=0,pe[m]=0,pe[p]=E>0?1:-1,u.push(pe.x,pe.y,pe.z),f.push(Pe/C),f.push(1-he/U),ne+=1}}for(let he=0;he<U;he++)for(let Se=0;Se<C;Se++){const Pe=d+Se+J*he,Xe=d+Se+J*(he+1),ee=d+(Se+1)+J*(he+1),me=d+(Se+1)+J*he;l.push(Pe,Xe,me),l.push(Xe,ee,me),H+=6}o.addGroup(h,H,S),h+=H,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Jr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function kt(t){const e={};for(let n=0;n<t.length;n++){const i=Jr(t[n]);for(const r in i)e[r]=i[r]}return e}function mb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Gg(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const gb={clone:Jr,merge:kt};var vb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_b=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends ia{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vb,this.fragmentShader=_b,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Jr(e.uniforms),this.uniformsGroups=mb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Wg extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=Qn}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mi=new Z,ph=new Ke,mh=new Ke;class un extends Wg{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Tc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tc*2*Math.atan(Math.tan(xl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-e/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mi.x,mi.y).multiplyScalar(-e/mi.z)}getViewSize(e,n){return this.getViewBounds(e,ph,mh),n.subVectors(mh,ph)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(xl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Pr=-90,Lr=1;class xb extends zt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new un(Pr,Lr,e,n);r.layers=this.layers,this.add(r);const s=new un(Pr,Lr,e,n);s.layers=this.layers,this.add(s);const a=new un(Pr,Lr,e,n);a.layers=this.layers,this.add(a);const o=new un(Pr,Lr,e,n);o.layers=this.layers,this.add(o);const l=new un(Pr,Lr,e,n);l.layers=this.layers,this.add(l);const c=new un(Pr,Lr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===Qn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===mo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,h),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Xg extends jt{constructor(e,n,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:jr,super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yb extends or{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Xg(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Mn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ra(5,5,5),s=new Di({name:"CubemapFromEquirect",uniforms:Jr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:wi});s.uniforms.tEquirect.value=n;const a=new En(r,s),o=n.minFilter;return n.minFilter===nr&&(n.minFilter=Mn),new xb(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Bl=new Z,Sb=new Z,Mb=new He;class ji{constructor(e=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Bl.subVectors(i,n).cross(Sb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Bl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Mb.getNormalMatrix(e),r=this.coplanarPoint(Bl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $i=new vu,Oa=new Z;class $g{constructor(e=new ji,n=new ji,i=new ji,r=new ji,s=new ji,a=new ji){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Qn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],h=r[8],v=r[9],g=r[10],m=r[11],p=r[12],M=r[13],y=r[14],T=r[15];if(i[0].setComponents(l-s,d-c,m-h,T-p).normalize(),i[1].setComponents(l+s,d+c,m+h,T+p).normalize(),i[2].setComponents(l+a,d+u,m+v,T+M).normalize(),i[3].setComponents(l-a,d-u,m-v,T-M).normalize(),i[4].setComponents(l-o,d-f,m-g,T-y).normalize(),n===Qn)i[5].setComponents(l+o,d+f,m+g,T+y).normalize();else if(n===mo)i[5].setComponents(o,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),$i.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(e){return $i.center.set(0,0,0),$i.radius=.7071067811865476,$i.applyMatrix4(e.matrixWorld),this.intersectsSphere($i)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Oa.x=r.normal.x>0?e.max.x:e.min.x,Oa.y=r.normal.y>0?e.max.y:e.min.y,Oa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Oa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qg(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Eb(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l._updateRange,d=l.updateRanges;if(t.bindBuffer(c,o),f.count===-1&&d.length===0&&t.bufferSubData(c,0,u),d.length!==0){for(let h=0,v=d.length;h<v;h++){const g=d[h];t.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}f.count!==-1&&(t.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Xo extends si{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=n/l,h=[],v=[],g=[],m=[];for(let p=0;p<u;p++){const M=p*d-a;for(let y=0;y<c;y++){const T=y*f-s;v.push(T,-M,0),g.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const y=M+c*p,T=M+c*(p+1),P=M+1+c*(p+1),E=M+1+c*p;h.push(y,T,E),h.push(T,P,E)}this.setIndex(h),this.setAttribute("position",new rn(v,3)),this.setAttribute("normal",new rn(g,3)),this.setAttribute("uv",new rn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xo(e.width,e.height,e.widthSegments,e.heightSegments)}}var bb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tb=`#ifdef USE_ALPHAHASH
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
#endif`,Ab=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pb=`#ifdef USE_AOMAP
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
#endif`,Lb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ib=`#ifdef USE_BATCHING
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
#endif`,Db=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ub=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ob=`#ifdef USE_IRIDESCENCE
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
#endif`,Bb=`#ifdef USE_BUMPMAP
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
#endif`,kb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$b=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,qb=`#define PI 3.141592653589793
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
} // validated`,Yb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jb=`vec3 transformedNormal = objectNormal;
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
#endif`,Kb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eT="gl_FragColor = linearToOutputTexel( gl_FragColor );",tT=`
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
}`,nT=`#ifdef USE_ENVMAP
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
#endif`,iT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rT=`#ifdef USE_ENVMAP
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
#endif`,sT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aT=`#ifdef USE_ENVMAP
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
#endif`,oT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fT=`#ifdef USE_GRADIENTMAP
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
}`,dT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mT=`uniform bool receiveShadow;
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
#endif`,gT=`#ifdef USE_ENVMAP
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
#endif`,vT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_T=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ST=`PhysicalMaterial material;
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
#endif`,MT=`struct PhysicalMaterial {
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
}`,ET=`
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
#endif`,bT=`#if defined( RE_IndirectDiffuse )
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
#endif`,TT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,AT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,PT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,LT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,DT=`#if defined( USE_POINTS_UV )
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
#endif`,UT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,OT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BT=`#ifdef USE_MORPHNORMALS
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
#endif`,kT=`#ifdef USE_MORPHTARGETS
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
#endif`,VT=`#ifdef USE_MORPHTARGETS
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
#endif`,zT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,HT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,GT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$T=`#ifdef USE_NORMALMAP
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
#endif`,qT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,YT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,KT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,QT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lA=`float getShadowMask() {
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
}`,cA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uA=`#ifdef USE_SKINNING
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
#endif`,fA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dA=`#ifdef USE_SKINNING
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
#endif`,hA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vA=`#ifdef USE_TRANSMISSION
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
#endif`,_A=`#ifdef USE_TRANSMISSION
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
#endif`,xA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const EA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bA=`uniform sampler2D t2D;
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
}`,TA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RA=`#include <common>
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
}`,PA=`#if DEPTH_PACKING == 3200
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
}`,LA=`#define DISTANCE
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
}`,IA=`#define DISTANCE
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
}`,DA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NA=`uniform float scale;
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
}`,FA=`uniform vec3 diffuse;
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
}`,OA=`#include <common>
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
}`,BA=`uniform vec3 diffuse;
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
}`,kA=`#define LAMBERT
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
}`,VA=`#define LAMBERT
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
}`,zA=`#define MATCAP
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
}`,HA=`#define MATCAP
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
}`,GA=`#define NORMAL
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
}`,WA=`#define NORMAL
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
}`,XA=`#define PHONG
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
}`,$A=`#define PHONG
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
}`,qA=`#define STANDARD
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
}`,YA=`#define STANDARD
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
}`,jA=`#define TOON
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
}`,KA=`#define TOON
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
}`,ZA=`uniform float size;
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
}`,JA=`uniform vec3 diffuse;
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
}`,QA=`#include <common>
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
}`,ew=`uniform vec3 color;
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
}`,tw=`uniform float rotation;
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
}`,nw=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:bb,alphahash_pars_fragment:Tb,alphamap_fragment:Ab,alphamap_pars_fragment:wb,alphatest_fragment:Cb,alphatest_pars_fragment:Rb,aomap_fragment:Pb,aomap_pars_fragment:Lb,batching_pars_vertex:Ib,batching_vertex:Db,begin_vertex:Ub,beginnormal_vertex:Nb,bsdfs:Fb,iridescence_fragment:Ob,bumpmap_pars_fragment:Bb,clipping_planes_fragment:kb,clipping_planes_pars_fragment:Vb,clipping_planes_pars_vertex:zb,clipping_planes_vertex:Hb,color_fragment:Gb,color_pars_fragment:Wb,color_pars_vertex:Xb,color_vertex:$b,common:qb,cube_uv_reflection_fragment:Yb,defaultnormal_vertex:jb,displacementmap_pars_vertex:Kb,displacementmap_vertex:Zb,emissivemap_fragment:Jb,emissivemap_pars_fragment:Qb,colorspace_fragment:eT,colorspace_pars_fragment:tT,envmap_fragment:nT,envmap_common_pars_fragment:iT,envmap_pars_fragment:rT,envmap_pars_vertex:sT,envmap_physical_pars_fragment:gT,envmap_vertex:aT,fog_vertex:oT,fog_pars_vertex:lT,fog_fragment:cT,fog_pars_fragment:uT,gradientmap_pars_fragment:fT,lightmap_pars_fragment:dT,lights_lambert_fragment:hT,lights_lambert_pars_fragment:pT,lights_pars_begin:mT,lights_toon_fragment:vT,lights_toon_pars_fragment:_T,lights_phong_fragment:xT,lights_phong_pars_fragment:yT,lights_physical_fragment:ST,lights_physical_pars_fragment:MT,lights_fragment_begin:ET,lights_fragment_maps:bT,lights_fragment_end:TT,logdepthbuf_fragment:AT,logdepthbuf_pars_fragment:wT,logdepthbuf_pars_vertex:CT,logdepthbuf_vertex:RT,map_fragment:PT,map_pars_fragment:LT,map_particle_fragment:IT,map_particle_pars_fragment:DT,metalnessmap_fragment:UT,metalnessmap_pars_fragment:NT,morphinstance_vertex:FT,morphcolor_vertex:OT,morphnormal_vertex:BT,morphtarget_pars_vertex:kT,morphtarget_vertex:VT,normal_fragment_begin:zT,normal_fragment_maps:HT,normal_pars_fragment:GT,normal_pars_vertex:WT,normal_vertex:XT,normalmap_pars_fragment:$T,clearcoat_normal_fragment_begin:qT,clearcoat_normal_fragment_maps:YT,clearcoat_pars_fragment:jT,iridescence_pars_fragment:KT,opaque_fragment:ZT,packing:JT,premultiplied_alpha_fragment:QT,project_vertex:eA,dithering_fragment:tA,dithering_pars_fragment:nA,roughnessmap_fragment:iA,roughnessmap_pars_fragment:rA,shadowmap_pars_fragment:sA,shadowmap_pars_vertex:aA,shadowmap_vertex:oA,shadowmask_pars_fragment:lA,skinbase_vertex:cA,skinning_pars_vertex:uA,skinning_vertex:fA,skinnormal_vertex:dA,specularmap_fragment:hA,specularmap_pars_fragment:pA,tonemapping_fragment:mA,tonemapping_pars_fragment:gA,transmission_fragment:vA,transmission_pars_fragment:_A,uv_pars_fragment:xA,uv_pars_vertex:yA,uv_vertex:SA,worldpos_vertex:MA,background_vert:EA,background_frag:bA,backgroundCube_vert:TA,backgroundCube_frag:AA,cube_vert:wA,cube_frag:CA,depth_vert:RA,depth_frag:PA,distanceRGBA_vert:LA,distanceRGBA_frag:IA,equirect_vert:DA,equirect_frag:UA,linedashed_vert:NA,linedashed_frag:FA,meshbasic_vert:OA,meshbasic_frag:BA,meshlambert_vert:kA,meshlambert_frag:VA,meshmatcap_vert:zA,meshmatcap_frag:HA,meshnormal_vert:GA,meshnormal_frag:WA,meshphong_vert:XA,meshphong_frag:$A,meshphysical_vert:qA,meshphysical_frag:YA,meshtoon_vert:jA,meshtoon_frag:KA,points_vert:ZA,points_frag:JA,shadow_vert:QA,shadow_frag:ew,sprite_vert:tw,sprite_frag:nw},ve={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Pn={basic:{uniforms:kt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:kt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new je(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:kt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:kt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:kt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new je(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:kt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:kt([ve.points,ve.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:kt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:kt([ve.common,ve.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:kt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:kt([ve.sprite,ve.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:kt([ve.common,ve.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:kt([ve.lights,ve.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Pn.physical={uniforms:kt([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Ba={r:0,b:0,g:0},qi=new kn,iw=new St;function rw(t,e,n,i,r,s,a){const o=new je(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function v(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?n:e).get(y)),y}function g(M){let y=!1;const T=v(M);T===null?p(o,l):T&&T.isColor&&(p(T,1),y=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||y)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function m(M,y){const T=v(y);T&&(T.isCubeTexture||T.mapping===Ho)?(u===void 0&&(u=new En(new ra(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:Jr(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),qi.copy(y.backgroundRotation),qi.x*=-1,qi.y*=-1,qi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(iw.makeRotationFromEuler(qi)),u.material.toneMapped=it.getTransfer(T.colorSpace)!==at,(f!==T||d!==T.version||h!==t.toneMapping)&&(u.material.needsUpdate=!0,f=T,d=T.version,h=t.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new En(new Xo(2,2),new Di({name:"BackgroundMaterial",uniforms:Jr(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=it.getTransfer(T.colorSpace)!==at,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||d!==T.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,f=T,d=T.version,h=t.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,y){M.getRGB(Ba,Gg(t)),i.buffers.color.setClear(Ba.r,Ba.g,Ba.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(M,y=1){o.set(M),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(o,l)},render:g,addToRenderList:m}}function sw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(x,O,I,L,X){let J=!1;const te=f(L,I,O);s!==te&&(s=te,c(s.object)),J=h(x,L,I,X),J&&v(x,L,I,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,T(x,O,I,L),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return t.createVertexArray()}function c(x){return t.bindVertexArray(x)}function u(x){return t.deleteVertexArray(x)}function f(x,O,I){const L=I.wireframe===!0;let X=i[x.id];X===void 0&&(X={},i[x.id]=X);let J=X[O.id];J===void 0&&(J={},X[O.id]=J);let te=J[L];return te===void 0&&(te=d(l()),J[L]=te),te}function d(x){const O=[],I=[],L=[];for(let X=0;X<n;X++)O[X]=0,I[X]=0,L[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:I,attributeDivisors:L,object:x,attributes:{},index:null}}function h(x,O,I,L){const X=s.attributes,J=O.attributes;let te=0;const ne=I.getAttributes();for(const H in ne)if(ne[H].location>=0){const he=X[H];let Se=J[H];if(Se===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(Se=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(Se=x.instanceColor)),he===void 0||he.attribute!==Se||Se&&he.data!==Se.data)return!0;te++}return s.attributesNum!==te||s.index!==L}function v(x,O,I,L){const X={},J=O.attributes;let te=0;const ne=I.getAttributes();for(const H in ne)if(ne[H].location>=0){let he=J[H];he===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(he=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(he=x.instanceColor));const Se={};Se.attribute=he,he&&he.data&&(Se.data=he.data),X[H]=Se,te++}s.attributes=X,s.attributesNum=te,s.index=L}function g(){const x=s.newAttributes;for(let O=0,I=x.length;O<I;O++)x[O]=0}function m(x){p(x,0)}function p(x,O){const I=s.newAttributes,L=s.enabledAttributes,X=s.attributeDivisors;I[x]=1,L[x]===0&&(t.enableVertexAttribArray(x),L[x]=1),X[x]!==O&&(t.vertexAttribDivisor(x,O),X[x]=O)}function M(){const x=s.newAttributes,O=s.enabledAttributes;for(let I=0,L=O.length;I<L;I++)O[I]!==x[I]&&(t.disableVertexAttribArray(I),O[I]=0)}function y(x,O,I,L,X,J,te){te===!0?t.vertexAttribIPointer(x,O,I,X,J):t.vertexAttribPointer(x,O,I,L,X,J)}function T(x,O,I,L){g();const X=L.attributes,J=I.getAttributes(),te=O.defaultAttributeValues;for(const ne in J){const H=J[ne];if(H.location>=0){let pe=X[ne];if(pe===void 0&&(ne==="instanceMatrix"&&x.instanceMatrix&&(pe=x.instanceMatrix),ne==="instanceColor"&&x.instanceColor&&(pe=x.instanceColor)),pe!==void 0){const he=pe.normalized,Se=pe.itemSize,Pe=e.get(pe);if(Pe===void 0)continue;const Xe=Pe.buffer,ee=Pe.type,me=Pe.bytesPerElement,ge=ee===t.INT||ee===t.UNSIGNED_INT||pe.gpuType===Cg;if(pe.isInterleavedBufferAttribute){const B=pe.data,fe=B.stride,ae=pe.offset;if(B.isInstancedInterleavedBuffer){for(let D=0;D<H.locationSize;D++)p(H.location+D,B.meshPerAttribute);x.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let D=0;D<H.locationSize;D++)m(H.location+D);t.bindBuffer(t.ARRAY_BUFFER,Xe);for(let D=0;D<H.locationSize;D++)y(H.location+D,Se/H.locationSize,ee,he,fe*me,(ae+Se/H.locationSize*D)*me,ge)}else{if(pe.isInstancedBufferAttribute){for(let B=0;B<H.locationSize;B++)p(H.location+B,pe.meshPerAttribute);x.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let B=0;B<H.locationSize;B++)m(H.location+B);t.bindBuffer(t.ARRAY_BUFFER,Xe);for(let B=0;B<H.locationSize;B++)y(H.location+B,Se/H.locationSize,ee,he,Se*me,Se/H.locationSize*B*me,ge)}}else if(te!==void 0){const he=te[ne];if(he!==void 0)switch(he.length){case 2:t.vertexAttrib2fv(H.location,he);break;case 3:t.vertexAttrib3fv(H.location,he);break;case 4:t.vertexAttrib4fv(H.location,he);break;default:t.vertexAttrib1fv(H.location,he)}}}}M()}function P(){U();for(const x in i){const O=i[x];for(const I in O){const L=O[I];for(const X in L)u(L[X].object),delete L[X];delete O[I]}delete i[x]}}function E(x){if(i[x.id]===void 0)return;const O=i[x.id];for(const I in O){const L=O[I];for(const X in L)u(L[X].object),delete L[X];delete O[I]}delete i[x.id]}function C(x){for(const O in i){const I=i[O];if(I[x.id]===void 0)continue;const L=I[x.id];for(const X in L)u(L[X].object),delete L[X];delete I[x.id]}}function U(){S(),a=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:E,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:m,disableUnusedAttributes:M}}function aw(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function o(c,u,f){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let h=0;h<f;h++)this.render(c[h],u[h]);else{d.multiDrawArraysWEBGL(i,c,0,u,0,f);let h=0;for(let v=0;v<f;v++)h+=u[v];n.update(h,i,1)}}function l(c,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let v=0;v<c.length;v++)a(c[v],u[v],d[v]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let v=0;for(let g=0;g<f;g++)v+=u[g];for(let g=0;g<d.length;g++)n.update(v,i,d[g])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ow(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(E){return!(E!==Nn&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const C=E===Go&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Ii&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Ei&&!C)}function l(E){if(E==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=h>0,P=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:T,maxSamples:P}}function lw(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new ji,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,h){const v=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,p=t.get(f);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const M=s?0:i,y=M*4;let T=p.clippingState||null;l.value=T,T=u(v,d,y,h);for(let P=0;P!==y;++P)T[P]=n[P];p.clippingState=T,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,v){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const p=h+g*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,T=h;y!==g;++y,T+=4)a.copy(f[y]).applyMatrix4(M,o),a.normal.toArray(m,T),m[T+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function cw(t){let e=new WeakMap;function n(a,o){return o===Sc?a.mapping=jr:o===Mc&&(a.mapping=Kr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Sc||o===Mc)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new yb(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class uw extends Wg{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ur=4,gh=[.125,.215,.35,.446,.526,.582],Qi=20,kl=new uw,vh=new je;let Vl=null,zl=0,Hl=0,Gl=!1;const Ki=(1+Math.sqrt(5))/2,Ir=1/Ki,_h=[new Z(-Ki,Ir,0),new Z(Ki,Ir,0),new Z(-Ir,0,Ki),new Z(Ir,0,Ki),new Z(0,Ki,-Ir),new Z(0,Ki,Ir),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)];class xh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Vl=this._renderer.getRenderTarget(),zl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),Gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vl,zl,Hl),this._renderer.xr.enabled=Gl,e.scissorTest=!1,ka(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===jr||e.mapping===Kr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vl=this._renderer.getRenderTarget(),zl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),Gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:Go,format:Nn,colorSpace:Oi,depthBuffer:!1},r=yh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yh(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fw(s)),this._blurMaterial=dw(s,e,n)}return r}_compileMaterial(e){const n=new En(this._lodPlanes[0],e);this._renderer.compile(n,kl)}_sceneToCubeUV(e,n,i,r){const o=new un(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(vh),u.toneMapping=Ci,u.autoClear=!1;const h=new _u({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),v=new En(new ra,h);let g=!1;const m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,g=!0):(h.color.copy(vh),g=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):M===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const y=this._cubeSize;ka(r,M*y,p>2?y:0,y,y),u.setRenderTarget(r),g&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===jr||e.mapping===Kr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sh());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new En(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ka(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,kl)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=_h[(r-s-1)%_h.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new En(this._lodPlanes[r],c),d=c.uniforms,h=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Qi-1),g=s/v,m=isFinite(s)?1+Math.floor(u*g):Qi;m>Qi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qi}`);const p=[];let M=0;for(let C=0;C<Qi;++C){const U=C/g,S=Math.exp(-U*U/2);p.push(S),C===0?M+=S:C<m&&(M+=2*S)}for(let C=0;C<p.length;C++)p[C]=p[C]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=v,d.mipInt.value=y-i;const T=this._sizeLods[r],P=3*T*(r>y-Ur?r-y+Ur:0),E=4*(this._cubeSize-T);ka(n,P,E,3*T,2*T),l.setRenderTarget(n),l.render(f,kl)}}function fw(t){const e=[],n=[],i=[];let r=t;const s=t-Ur+1+gh.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-Ur?l=gh[a-t+Ur-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,v=6,g=3,m=2,p=1,M=new Float32Array(g*v*h),y=new Float32Array(m*v*h),T=new Float32Array(p*v*h);for(let E=0;E<h;E++){const C=E%3*2/3-1,U=E>2?0:-1,S=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];M.set(S,g*v*E),y.set(d,m*v*E);const x=[E,E,E,E,E,E];T.set(x,p*v*E)}const P=new si;P.setAttribute("position",new Bn(M,g)),P.setAttribute("uv",new Bn(y,m)),P.setAttribute("faceIndex",new Bn(T,p)),e.push(P),r>Ur&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function yh(t,e,n){const i=new or(t,e,n);return i.texture.mapping=Ho,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ka(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function dw(t,e,n){const i=new Float32Array(Qi),r=new Z(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:xu(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Sh(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xu(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Mh(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function xu(){return`

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
	`}function hw(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Sc||l===Mc,u=l===jr||l===Kr;if(c||u){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return n===null&&(n=new xh(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const h=o.image;return c&&h&&h.height>0||u&&h&&r(h)?(n===null&&(n=new xh(t)),f=c?n.fromEquirectangular(o):n.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function pw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function mw(t,e,n,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const g=d.morphAttributes[v];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}d.removeEventListener("dispose",a),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const v in d)e.update(d[v],t.ARRAY_BUFFER);const h=f.morphAttributes;for(const v in h){const g=h[v];for(let m=0,p=g.length;m<p;m++)e.update(g[m],t.ARRAY_BUFFER)}}function c(f){const d=[],h=f.index,v=f.attributes.position;let g=0;if(h!==null){const M=h.array;g=h.version;for(let y=0,T=M.length;y<T;y+=3){const P=M[y+0],E=M[y+1],C=M[y+2];d.push(P,E,E,C,C,P)}}else if(v!==void 0){const M=v.array;g=v.version;for(let y=0,T=M.length/3-1;y<T;y+=3){const P=y+0,E=y+1,C=y+2;d.push(P,E,E,C,C,P)}}else return;const m=new(Fg(d)?Hg:zg)(d,1);m.version=g;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function gw(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,h){t.drawElements(i,h,s,d*a),n.update(h,i,1)}function c(d,h,v){v!==0&&(t.drawElementsInstanced(i,h,s,d*a,v),n.update(h,i,v))}function u(d,h,v){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<v;m++)this.render(d[m]/a,h[m]);else{g.multiDrawElementsWEBGL(i,h,0,s,d,0,v);let m=0;for(let p=0;p<v;p++)m+=h[p];n.update(m,i,1)}}function f(d,h,v,g){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,h[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,g,0,v);let p=0;for(let M=0;M<v;M++)p+=h[M];for(let M=0;M<g.length;M++)n.update(p,i,g[M])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function vw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function _w(t,e,n){const i=new WeakMap,r=new Ct;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let x=function(){U.dispose(),i.delete(o),o.removeEventListener("dispose",x)};var h=x;d!==void 0&&d.texture.dispose();const v=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let T=0;v===!0&&(T=1),g===!0&&(T=2),m===!0&&(T=3);let P=o.attributes.position.count*T,E=1;P>e.maxTextureSize&&(E=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const C=new Float32Array(P*E*4*f),U=new Bg(C,P,E,f);U.type=Ei,U.needsUpdate=!0;const S=T*4;for(let O=0;O<f;O++){const I=p[O],L=M[O],X=y[O],J=P*E*4*O;for(let te=0;te<I.count;te++){const ne=te*S;v===!0&&(r.fromBufferAttribute(I,te),C[J+ne+0]=r.x,C[J+ne+1]=r.y,C[J+ne+2]=r.z,C[J+ne+3]=0),g===!0&&(r.fromBufferAttribute(L,te),C[J+ne+4]=r.x,C[J+ne+5]=r.y,C[J+ne+6]=r.z,C[J+ne+7]=0),m===!0&&(r.fromBufferAttribute(X,te),C[J+ne+8]=r.x,C[J+ne+9]=r.y,C[J+ne+10]=r.z,C[J+ne+11]=X.itemSize===4?r.w:1)}}d={count:f,texture:U,size:new Ke(P,E)},i.set(o,d),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const g=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function xw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class Yg extends jt{constructor(e,n,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:zr,u!==zr&&u!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===zr&&(i=Zr),i===void 0&&u===Hs&&(i=Qs),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:mn,this.minFilter=l!==void 0?l:mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const jg=new jt,Kg=new Yg(1,1);Kg.compareFunction=Ng;const Zg=new Bg,Jg=new ib,Qg=new Xg,Eh=[],bh=[],Th=new Float32Array(16),Ah=new Float32Array(9),wh=new Float32Array(4);function rs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Eh[r];if(s===void 0&&(s=new Float32Array(r),Eh[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Et(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function $o(t,e){let n=bh[e];n===void 0&&(n=new Int32Array(e),bh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function yw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Sw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2fv(this.addr,e),bt(n,e)}}function Mw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Et(n,e))return;t.uniform3fv(this.addr,e),bt(n,e)}}function Ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4fv(this.addr,e),bt(n,e)}}function bw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),bt(n,e)}else{if(Et(n,i))return;wh.set(i),t.uniformMatrix2fv(this.addr,!1,wh),bt(n,i)}}function Tw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),bt(n,e)}else{if(Et(n,i))return;Ah.set(i),t.uniformMatrix3fv(this.addr,!1,Ah),bt(n,i)}}function Aw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),bt(n,e)}else{if(Et(n,i))return;Th.set(i),t.uniformMatrix4fv(this.addr,!1,Th),bt(n,i)}}function ww(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Cw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2iv(this.addr,e),bt(n,e)}}function Rw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3iv(this.addr,e),bt(n,e)}}function Pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4iv(this.addr,e),bt(n,e)}}function Lw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Iw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2uiv(this.addr,e),bt(n,e)}}function Dw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3uiv(this.addr,e),bt(n,e)}}function Uw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4uiv(this.addr,e),bt(n,e)}}function Nw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Kg:jg;n.setTexture2D(e||s,r)}function Fw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Jg,r)}function Ow(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Qg,r)}function Bw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Zg,r)}function kw(t){switch(t){case 5126:return yw;case 35664:return Sw;case 35665:return Mw;case 35666:return Ew;case 35674:return bw;case 35675:return Tw;case 35676:return Aw;case 5124:case 35670:return ww;case 35667:case 35671:return Cw;case 35668:case 35672:return Rw;case 35669:case 35673:return Pw;case 5125:return Lw;case 36294:return Iw;case 36295:return Dw;case 36296:return Uw;case 35678:case 36198:case 36298:case 36306:case 35682:return Nw;case 35679:case 36299:case 36307:return Fw;case 35680:case 36300:case 36308:case 36293:return Ow;case 36289:case 36303:case 36311:case 36292:return Bw}}function Vw(t,e){t.uniform1fv(this.addr,e)}function zw(t,e){const n=rs(e,this.size,2);t.uniform2fv(this.addr,n)}function Hw(t,e){const n=rs(e,this.size,3);t.uniform3fv(this.addr,n)}function Gw(t,e){const n=rs(e,this.size,4);t.uniform4fv(this.addr,n)}function Ww(t,e){const n=rs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Xw(t,e){const n=rs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function $w(t,e){const n=rs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function qw(t,e){t.uniform1iv(this.addr,e)}function Yw(t,e){t.uniform2iv(this.addr,e)}function jw(t,e){t.uniform3iv(this.addr,e)}function Kw(t,e){t.uniform4iv(this.addr,e)}function Zw(t,e){t.uniform1uiv(this.addr,e)}function Jw(t,e){t.uniform2uiv(this.addr,e)}function Qw(t,e){t.uniform3uiv(this.addr,e)}function eC(t,e){t.uniform4uiv(this.addr,e)}function tC(t,e,n){const i=this.cache,r=e.length,s=$o(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||jg,s[a])}function nC(t,e,n){const i=this.cache,r=e.length,s=$o(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Jg,s[a])}function iC(t,e,n){const i=this.cache,r=e.length,s=$o(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Qg,s[a])}function rC(t,e,n){const i=this.cache,r=e.length,s=$o(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Zg,s[a])}function sC(t){switch(t){case 5126:return Vw;case 35664:return zw;case 35665:return Hw;case 35666:return Gw;case 35674:return Ww;case 35675:return Xw;case 35676:return $w;case 5124:case 35670:return qw;case 35667:case 35671:return Yw;case 35668:case 35672:return jw;case 35669:case 35673:return Kw;case 5125:return Zw;case 36294:return Jw;case 36295:return Qw;case 36296:return eC;case 35678:case 36198:case 36298:case 36306:case 35682:return tC;case 35679:case 36299:case 36307:return nC;case 35680:case 36300:case 36308:case 36293:return iC;case 36289:case 36303:case 36311:case 36292:return rC}}class aC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=kw(n.type)}}class oC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=sC(n.type)}}class lC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Wl=/(\w+)(\])?(\[|\.)?/g;function Ch(t,e){t.seq.push(e),t.map[e.id]=e}function cC(t,e,n){const i=t.name,r=i.length;for(Wl.lastIndex=0;;){const s=Wl.exec(i),a=Wl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Ch(n,c===void 0?new aC(o,t,e):new oC(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new lC(o),Ch(n,f)),n=f}}}class qa{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);cC(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Rh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const uC=37297;let fC=0;function dC(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function hC(t){const e=it.getPrimaries(it.workingColorSpace),n=it.getPrimaries(t);let i;switch(e===n?i="":e===po&&n===ho?i="LinearDisplayP3ToLinearSRGB":e===ho&&n===po&&(i="LinearSRGBToLinearDisplayP3"),t){case Oi:case Wo:return[i,"LinearTransferOETF"];case Rn:case gu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Ph(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+dC(t.getShaderSource(e),a)}else return r}function pC(t,e){const n=hC(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function mC(t,e){let n;switch(e){case SE:n="Linear";break;case ME:n="Reinhard";break;case EE:n="OptimizedCineon";break;case bE:n="ACESFilmic";break;case AE:n="AgX";break;case wE:n="Neutral";break;case TE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function gC(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function vC(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function _C(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function gs(t){return t!==""}function Lh(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ih(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ac(t){return t.replace(xC,SC)}const yC=new Map;function SC(t,e){let n=ze[e];if(n===void 0){const i=yC.get(e);if(i!==void 0)n=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ac(n)}const MC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dh(t){return t.replace(MC,EC)}function EC(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Uh(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function bC(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Tg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===qM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function TC(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case jr:case Kr:e="ENVMAP_TYPE_CUBE";break;case Ho:e="ENVMAP_TYPE_CUBE_UV";break}return e}function AC(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Kr:e="ENVMAP_MODE_REFRACTION";break}return e}function wC(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case mu:e="ENVMAP_BLENDING_MULTIPLY";break;case xE:e="ENVMAP_BLENDING_MIX";break;case yE:e="ENVMAP_BLENDING_ADD";break}return e}function CC(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function RC(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=bC(n),c=TC(n),u=AC(n),f=wC(n),d=CC(n),h=gC(n),v=vC(s),g=r.createProgram();let m,p,M=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(gs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(gs).join(`
`),p.length>0&&(p+=`
`)):(m=[Uh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),p=[Uh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ci?"#define TONE_MAPPING":"",n.toneMapping!==Ci?ze.tonemapping_pars_fragment:"",n.toneMapping!==Ci?mC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,pC("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(gs).join(`
`)),a=Ac(a),a=Lh(a,n),a=Ih(a,n),o=Ac(o),o=Lh(o,n),o=Ih(o,n),a=Dh(a),o=Dh(o),n.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===Kd?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Kd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=M+m+a,T=M+p+o,P=Rh(r,r.VERTEX_SHADER,y),E=Rh(r,r.FRAGMENT_SHADER,T);r.attachShader(g,P),r.attachShader(g,E),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function C(O){if(t.debug.checkShaderErrors){const I=r.getProgramInfoLog(g).trim(),L=r.getShaderInfoLog(P).trim(),X=r.getShaderInfoLog(E).trim();let J=!0,te=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(J=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,P,E);else{const ne=Ph(r,P,"vertex"),H=Ph(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+I+`
`+ne+`
`+H)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(L===""||X==="")&&(te=!1);te&&(O.diagnostics={runnable:J,programLog:I,vertexShader:{log:L,prefix:m},fragmentShader:{log:X,prefix:p}})}r.deleteShader(P),r.deleteShader(E),U=new qa(r,g),S=_C(r,g)}let U;this.getUniforms=function(){return U===void 0&&C(this),U};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(g,uC)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=fC++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=P,this.fragmentShader=E,this}let PC=0;class LC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new IC(e),n.set(e,i)),i}}class IC{constructor(e){this.id=PC++,this.code=e,this.usedTimes=0}}function DC(t,e,n,i,r,s,a){const o=new kg,l=new LC,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let h=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,x,O,I,L){const X=I.fog,J=L.geometry,te=S.isMeshStandardMaterial?I.environment:null,ne=(S.isMeshStandardMaterial?n:e).get(S.envMap||te),H=ne&&ne.mapping===Ho?ne.image.height:null,pe=v[S.type];S.precision!==null&&(h=r.getMaxPrecision(S.precision),h!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const he=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Se=he!==void 0?he.length:0;let Pe=0;J.morphAttributes.position!==void 0&&(Pe=1),J.morphAttributes.normal!==void 0&&(Pe=2),J.morphAttributes.color!==void 0&&(Pe=3);let Xe,ee,me,ge;if(pe){const tt=Pn[pe];Xe=tt.vertexShader,ee=tt.fragmentShader}else Xe=S.vertexShader,ee=S.fragmentShader,l.update(S),me=l.getVertexShaderID(S),ge=l.getFragmentShaderID(S);const B=t.getRenderTarget(),fe=L.isInstancedMesh===!0,ae=L.isBatchedMesh===!0,D=!!S.map,Ce=!!S.matcap,_e=!!ne,w=!!S.aoMap,R=!!S.lightMap,V=!!S.bumpMap,q=!!S.normalMap,$=!!S.displacementMap,le=!!S.emissiveMap,b=!!S.metalnessMap,_=!!S.roughnessMap,N=S.anisotropy>0,F=S.clearcoat>0,G=S.dispersion>0,K=S.iridescence>0,ce=S.sheen>0,ie=S.transmission>0,oe=N&&!!S.anisotropyMap,Ee=F&&!!S.clearcoatMap,ue=F&&!!S.clearcoatNormalMap,Me=F&&!!S.clearcoatRoughnessMap,Fe=K&&!!S.iridescenceMap,Re=K&&!!S.iridescenceThicknessMap,be=ce&&!!S.sheenColorMap,Oe=ce&&!!S.sheenRoughnessMap,Ge=!!S.specularMap,$e=!!S.specularColorMap,Le=!!S.specularIntensityMap,k=ie&&!!S.transmissionMap,de=ie&&!!S.thicknessMap,re=!!S.gradientMap,xe=!!S.alphaMap,Te=S.alphaTest>0,Ze=!!S.alphaHash,st=!!S.extensions;let ht=Ci;S.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(ht=t.toneMapping);const Rt={shaderID:pe,shaderType:S.type,shaderName:S.name,vertexShader:Xe,fragmentShader:ee,defines:S.defines,customVertexShaderID:me,customFragmentShaderID:ge,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:ae,instancing:fe,instancingColor:fe&&L.instanceColor!==null,instancingMorph:fe&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:B===null?t.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Oi,alphaToCoverage:!!S.alphaToCoverage,map:D,matcap:Ce,envMap:_e,envMapMode:_e&&ne.mapping,envMapCubeUVHeight:H,aoMap:w,lightMap:R,bumpMap:V,normalMap:q,displacementMap:d&&$,emissiveMap:le,normalMapObjectSpace:q&&S.normalMapType===zE,normalMapTangentSpace:q&&S.normalMapType===Ug,metalnessMap:b,roughnessMap:_,anisotropy:N,anisotropyMap:oe,clearcoat:F,clearcoatMap:Ee,clearcoatNormalMap:ue,clearcoatRoughnessMap:Me,dispersion:G,iridescence:K,iridescenceMap:Fe,iridescenceThicknessMap:Re,sheen:ce,sheenColorMap:be,sheenRoughnessMap:Oe,specularMap:Ge,specularColorMap:$e,specularIntensityMap:Le,transmission:ie,transmissionMap:k,thicknessMap:de,gradientMap:re,opaque:S.transparent===!1&&S.blending===Vr&&S.alphaToCoverage===!1,alphaMap:xe,alphaTest:Te,alphaHash:Ze,combine:S.combine,mapUv:D&&g(S.map.channel),aoMapUv:w&&g(S.aoMap.channel),lightMapUv:R&&g(S.lightMap.channel),bumpMapUv:V&&g(S.bumpMap.channel),normalMapUv:q&&g(S.normalMap.channel),displacementMapUv:$&&g(S.displacementMap.channel),emissiveMapUv:le&&g(S.emissiveMap.channel),metalnessMapUv:b&&g(S.metalnessMap.channel),roughnessMapUv:_&&g(S.roughnessMap.channel),anisotropyMapUv:oe&&g(S.anisotropyMap.channel),clearcoatMapUv:Ee&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:ue&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:be&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&g(S.sheenRoughnessMap.channel),specularMapUv:Ge&&g(S.specularMap.channel),specularColorMapUv:$e&&g(S.specularColorMap.channel),specularIntensityMapUv:Le&&g(S.specularIntensityMap.channel),transmissionMapUv:k&&g(S.transmissionMap.channel),thicknessMapUv:de&&g(S.thicknessMap.channel),alphaMapUv:xe&&g(S.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(q||N),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!J.attributes.uv&&(D||xe),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:L.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Pe,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&O.length>0,shadowMapType:t.shadowMap.type,toneMapping:ht,useLegacyLights:t._useLegacyLights,decodeVideoTexture:D&&S.map.isVideoTexture===!0&&it.getTransfer(S.map.colorSpace)===at,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Jn,flipSided:S.side===Yt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:st&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:st&&S.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Rt.vertexUv1s=c.has(1),Rt.vertexUv2s=c.has(2),Rt.vertexUv3s=c.has(3),c.clear(),Rt}function p(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const O in S.defines)x.push(O),x.push(S.defines[O]);return S.isRawShaderMaterial===!1&&(M(x,S),y(x,S),x.push(t.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function M(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function y(S,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),S.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.skinning&&o.enable(4),x.morphTargets&&o.enable(5),x.morphNormals&&o.enable(6),x.morphColors&&o.enable(7),x.premultipliedAlpha&&o.enable(8),x.shadowMapEnabled&&o.enable(9),x.useLegacyLights&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.alphaToCoverage&&o.enable(20),S.push(o.mask)}function T(S){const x=v[S.type];let O;if(x){const I=Pn[x];O=gb.clone(I.uniforms)}else O=S.uniforms;return O}function P(S,x){let O;for(let I=0,L=u.length;I<L;I++){const X=u[I];if(X.cacheKey===x){O=X,++O.usedTimes;break}}return O===void 0&&(O=new RC(t,x,S,s),u.push(O)),O}function E(S){if(--S.usedTimes===0){const x=u.indexOf(S);u[x]=u[u.length-1],u.pop(),S.destroy()}}function C(S){l.remove(S)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:T,acquireProgram:P,releaseProgram:E,releaseShaderCache:C,programs:u,dispose:U}}function UC(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function NC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Nh(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Fh(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,d,h,v,g,m){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:v,renderOrder:f.renderOrder,z:g,group:m},t[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=v,p.renderOrder=f.renderOrder,p.z=g,p.group=m),e++,p}function o(f,d,h,v,g,m){const p=a(f,d,h,v,g,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):n.push(p)}function l(f,d,h,v,g,m){const p=a(f,d,h,v,g,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):n.unshift(p)}function c(f,d){n.length>1&&n.sort(f||NC),i.length>1&&i.sort(d||Nh),r.length>1&&r.sort(d||Nh)}function u(){for(let f=e,d=t.length;f<d;f++){const h=t[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function FC(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Fh,t.set(i,[a])):r>=s.length?(a=new Fh,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function OC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Z,color:new je};break;case"SpotLight":n={position:new Z,direction:new Z,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new je,groundColor:new je};break;case"RectAreaLight":n={color:new je,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return t[e.id]=n,n}}}function BC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let kC=0;function VC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function zC(t){const e=new OC,n=BC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Z);const r=new Z,s=new St,a=new St;function o(c,u){let f=0,d=0,h=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let v=0,g=0,m=0,p=0,M=0,y=0,T=0,P=0,E=0,C=0,U=0;c.sort(VC);const S=u===!0?Math.PI:1;for(let O=0,I=c.length;O<I;O++){const L=c[O],X=L.color,J=L.intensity,te=L.distance,ne=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=X.r*J*S,d+=X.g*J*S,h+=X.b*J*S;else if(L.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(L.sh.coefficients[H],J);U++}else if(L.isDirectionalLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity*S),L.castShadow){const pe=L.shadow,he=n.get(L);he.shadowBias=pe.bias,he.shadowNormalBias=pe.normalBias,he.shadowRadius=pe.radius,he.shadowMapSize=pe.mapSize,i.directionalShadow[v]=he,i.directionalShadowMap[v]=ne,i.directionalShadowMatrix[v]=L.shadow.matrix,y++}i.directional[v]=H,v++}else if(L.isSpotLight){const H=e.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(X).multiplyScalar(J*S),H.distance=te,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,i.spot[m]=H;const pe=L.shadow;if(L.map&&(i.spotLightMap[E]=L.map,E++,pe.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[m]=pe.matrix,L.castShadow){const he=n.get(L);he.shadowBias=pe.bias,he.shadowNormalBias=pe.normalBias,he.shadowRadius=pe.radius,he.shadowMapSize=pe.mapSize,i.spotShadow[m]=he,i.spotShadowMap[m]=ne,P++}m++}else if(L.isRectAreaLight){const H=e.get(L);H.color.copy(X).multiplyScalar(J),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),i.rectArea[p]=H,p++}else if(L.isPointLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity*S),H.distance=L.distance,H.decay=L.decay,L.castShadow){const pe=L.shadow,he=n.get(L);he.shadowBias=pe.bias,he.shadowNormalBias=pe.normalBias,he.shadowRadius=pe.radius,he.shadowMapSize=pe.mapSize,he.shadowCameraNear=pe.camera.near,he.shadowCameraFar=pe.camera.far,i.pointShadow[g]=he,i.pointShadowMap[g]=ne,i.pointShadowMatrix[g]=L.shadow.matrix,T++}i.point[g]=H,g++}else if(L.isHemisphereLight){const H=e.get(L);H.skyColor.copy(L.color).multiplyScalar(J*S),H.groundColor.copy(L.groundColor).multiplyScalar(J*S),i.hemi[M]=H,M++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;const x=i.hash;(x.directionalLength!==v||x.pointLength!==g||x.spotLength!==m||x.rectAreaLength!==p||x.hemiLength!==M||x.numDirectionalShadows!==y||x.numPointShadows!==T||x.numSpotShadows!==P||x.numSpotMaps!==E||x.numLightProbes!==U)&&(i.directional.length=v,i.spot.length=m,i.rectArea.length=p,i.point.length=g,i.hemi.length=M,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=P+E-C,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=U,x.directionalLength=v,x.pointLength=g,x.spotLength=m,x.rectAreaLength=p,x.hemiLength=M,x.numDirectionalShadows=y,x.numPointShadows=T,x.numSpotShadows=P,x.numSpotMaps=E,x.numLightProbes=U,i.version=kC++)}function l(c,u){let f=0,d=0,h=0,v=0,g=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const y=c[p];if(y.isDirectionalLight){const T=i.directional[f];T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),f++}else if(y.isSpotLight){const T=i.spot[h];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),h++}else if(y.isRectAreaLight){const T=i.rectArea[v];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const T=i.point[d];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const T=i.hemi[g];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function Oh(t){const e=new zC(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function a(u){i.push(u)}function o(u){e.setup(n,u)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function HC(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Oh(t),e.set(r,[o])):s>=a.length?(o=new Oh(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class GC extends ia{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class WC extends ia{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const XC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$C=`uniform sampler2D shadow_pass;
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
}`;function qC(t,e,n){let i=new $g;const r=new Ke,s=new Ke,a=new Ct,o=new GC({depthPacking:VE}),l=new WC,c={},u=n.maxTextureSize,f={[Li]:Yt,[Yt]:Li,[Jn]:Jn},d=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:XC,fragmentShader:$C}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const v=new si;v.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new En(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tg;let p=this.type;this.render=function(E,C,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const S=t.getRenderTarget(),x=t.getActiveCubeFace(),O=t.getActiveMipmapLevel(),I=t.state;I.setBlending(wi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const L=p!==Zn&&this.type===Zn,X=p===Zn&&this.type!==Zn;for(let J=0,te=E.length;J<te;J++){const ne=E[J],H=ne.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const pe=H.getFrameExtents();if(r.multiply(pe),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/pe.x),r.x=s.x*pe.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/pe.y),r.y=s.y*pe.y,H.mapSize.y=s.y)),H.map===null||L===!0||X===!0){const Se=this.type!==Zn?{minFilter:mn,magFilter:mn}:{};H.map!==null&&H.map.dispose(),H.map=new or(r.x,r.y,Se),H.map.texture.name=ne.name+".shadowMap",H.camera.updateProjectionMatrix()}t.setRenderTarget(H.map),t.clear();const he=H.getViewportCount();for(let Se=0;Se<he;Se++){const Pe=H.getViewport(Se);a.set(s.x*Pe.x,s.y*Pe.y,s.x*Pe.z,s.y*Pe.w),I.viewport(a),H.updateMatrices(ne,Se),i=H.getFrustum(),T(C,U,H.camera,ne,this.type)}H.isPointLightShadow!==!0&&this.type===Zn&&M(H,U),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(S,x,O)};function M(E,C){const U=e.update(g);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,h.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new or(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(C,null,U,d,g,null),h.uniforms.shadow_pass.value=E.mapPass.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(C,null,U,h,g,null)}function y(E,C,U,S){let x=null;const O=U.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(O!==void 0)x=O;else if(x=U.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const I=x.uuid,L=C.uuid;let X=c[I];X===void 0&&(X={},c[I]=X);let J=X[L];J===void 0&&(J=x.clone(),X[L]=J,C.addEventListener("dispose",P)),x=J}if(x.visible=C.visible,x.wireframe=C.wireframe,S===Zn?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:f[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,U.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const I=t.properties.get(x);I.light=U}return x}function T(E,C,U,S,x){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===Zn)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,E.matrixWorld);const L=e.update(E),X=E.material;if(Array.isArray(X)){const J=L.groups;for(let te=0,ne=J.length;te<ne;te++){const H=J[te],pe=X[H.materialIndex];if(pe&&pe.visible){const he=y(E,pe,S,x);E.onBeforeShadow(t,E,C,U,L,he,H),t.renderBufferDirect(U,null,L,he,E,H),E.onAfterShadow(t,E,C,U,L,he,H)}}}else if(X.visible){const J=y(E,X,S,x);E.onBeforeShadow(t,E,C,U,L,J,null),t.renderBufferDirect(U,null,L,J,E,null),E.onAfterShadow(t,E,C,U,L,J,null)}}const I=E.children;for(let L=0,X=I.length;L<X;L++)T(I[L],C,U,S,x)}function P(E){E.target.removeEventListener("dispose",P);for(const U in c){const S=c[U],x=E.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}function YC(t){function e(){let k=!1;const de=new Ct;let re=null;const xe=new Ct(0,0,0,0);return{setMask:function(Te){re!==Te&&!k&&(t.colorMask(Te,Te,Te,Te),re=Te)},setLocked:function(Te){k=Te},setClear:function(Te,Ze,st,ht,Rt){Rt===!0&&(Te*=ht,Ze*=ht,st*=ht),de.set(Te,Ze,st,ht),xe.equals(de)===!1&&(t.clearColor(Te,Ze,st,ht),xe.copy(de))},reset:function(){k=!1,re=null,xe.set(-1,0,0,0)}}}function n(){let k=!1,de=null,re=null,xe=null;return{setTest:function(Te){Te?ge(t.DEPTH_TEST):B(t.DEPTH_TEST)},setMask:function(Te){de!==Te&&!k&&(t.depthMask(Te),de=Te)},setFunc:function(Te){if(re!==Te){switch(Te){case dE:t.depthFunc(t.NEVER);break;case hE:t.depthFunc(t.ALWAYS);break;case pE:t.depthFunc(t.LESS);break;case uo:t.depthFunc(t.LEQUAL);break;case mE:t.depthFunc(t.EQUAL);break;case gE:t.depthFunc(t.GEQUAL);break;case vE:t.depthFunc(t.GREATER);break;case _E:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}re=Te}},setLocked:function(Te){k=Te},setClear:function(Te){xe!==Te&&(t.clearDepth(Te),xe=Te)},reset:function(){k=!1,de=null,re=null,xe=null}}}function i(){let k=!1,de=null,re=null,xe=null,Te=null,Ze=null,st=null,ht=null,Rt=null;return{setTest:function(tt){k||(tt?ge(t.STENCIL_TEST):B(t.STENCIL_TEST))},setMask:function(tt){de!==tt&&!k&&(t.stencilMask(tt),de=tt)},setFunc:function(tt,wn,Ot){(re!==tt||xe!==wn||Te!==Ot)&&(t.stencilFunc(tt,wn,Ot),re=tt,xe=wn,Te=Ot)},setOp:function(tt,wn,Ot){(Ze!==tt||st!==wn||ht!==Ot)&&(t.stencilOp(tt,wn,Ot),Ze=tt,st=wn,ht=Ot)},setLocked:function(tt){k=tt},setClear:function(tt){Rt!==tt&&(t.clearStencil(tt),Rt=tt)},reset:function(){k=!1,de=null,re=null,xe=null,Te=null,Ze=null,st=null,ht=null,Rt=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,d=[],h=null,v=!1,g=null,m=null,p=null,M=null,y=null,T=null,P=null,E=new je(0,0,0),C=0,U=!1,S=null,x=null,O=null,I=null,L=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,te=0;const ne=t.getParameter(t.VERSION);ne.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(ne)[1]),J=te>=1):ne.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),J=te>=2);let H=null,pe={};const he=t.getParameter(t.SCISSOR_BOX),Se=t.getParameter(t.VIEWPORT),Pe=new Ct().fromArray(he),Xe=new Ct().fromArray(Se);function ee(k,de,re,xe){const Te=new Uint8Array(4),Ze=t.createTexture();t.bindTexture(k,Ze),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let st=0;st<re;st++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,xe,0,t.RGBA,t.UNSIGNED_BYTE,Te):t.texImage2D(de+st,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Te);return Ze}const me={};me[t.TEXTURE_2D]=ee(t.TEXTURE_2D,t.TEXTURE_2D,1),me[t.TEXTURE_CUBE_MAP]=ee(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[t.TEXTURE_2D_ARRAY]=ee(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),me[t.TEXTURE_3D]=ee(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ge(t.DEPTH_TEST),s.setFunc(uo),V(!1),q(_d),ge(t.CULL_FACE),w(wi);function ge(k){c[k]!==!0&&(t.enable(k),c[k]=!0)}function B(k){c[k]!==!1&&(t.disable(k),c[k]=!1)}function fe(k,de){return u[k]!==de?(t.bindFramebuffer(k,de),u[k]=de,k===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=de),k===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=de),!0):!1}function ae(k,de){let re=d,xe=!1;if(k){re=f.get(de),re===void 0&&(re=[],f.set(de,re));const Te=k.textures;if(re.length!==Te.length||re[0]!==t.COLOR_ATTACHMENT0){for(let Ze=0,st=Te.length;Ze<st;Ze++)re[Ze]=t.COLOR_ATTACHMENT0+Ze;re.length=Te.length,xe=!0}}else re[0]!==t.BACK&&(re[0]=t.BACK,xe=!0);xe&&t.drawBuffers(re)}function D(k){return h!==k?(t.useProgram(k),h=k,!0):!1}const Ce={[Ji]:t.FUNC_ADD,[jM]:t.FUNC_SUBTRACT,[KM]:t.FUNC_REVERSE_SUBTRACT};Ce[ZM]=t.MIN,Ce[JM]=t.MAX;const _e={[QM]:t.ZERO,[eE]:t.ONE,[tE]:t.SRC_COLOR,[xc]:t.SRC_ALPHA,[oE]:t.SRC_ALPHA_SATURATE,[sE]:t.DST_COLOR,[iE]:t.DST_ALPHA,[nE]:t.ONE_MINUS_SRC_COLOR,[yc]:t.ONE_MINUS_SRC_ALPHA,[aE]:t.ONE_MINUS_DST_COLOR,[rE]:t.ONE_MINUS_DST_ALPHA,[lE]:t.CONSTANT_COLOR,[cE]:t.ONE_MINUS_CONSTANT_COLOR,[uE]:t.CONSTANT_ALPHA,[fE]:t.ONE_MINUS_CONSTANT_ALPHA};function w(k,de,re,xe,Te,Ze,st,ht,Rt,tt){if(k===wi){v===!0&&(B(t.BLEND),v=!1);return}if(v===!1&&(ge(t.BLEND),v=!0),k!==YM){if(k!==g||tt!==U){if((m!==Ji||y!==Ji)&&(t.blendEquation(t.FUNC_ADD),m=Ji,y=Ji),tt)switch(k){case Vr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case xd:t.blendFunc(t.ONE,t.ONE);break;case yd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Sd:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Vr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case xd:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case yd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Sd:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}p=null,M=null,T=null,P=null,E.set(0,0,0),C=0,g=k,U=tt}return}Te=Te||de,Ze=Ze||re,st=st||xe,(de!==m||Te!==y)&&(t.blendEquationSeparate(Ce[de],Ce[Te]),m=de,y=Te),(re!==p||xe!==M||Ze!==T||st!==P)&&(t.blendFuncSeparate(_e[re],_e[xe],_e[Ze],_e[st]),p=re,M=xe,T=Ze,P=st),(ht.equals(E)===!1||Rt!==C)&&(t.blendColor(ht.r,ht.g,ht.b,Rt),E.copy(ht),C=Rt),g=k,U=!1}function R(k,de){k.side===Jn?B(t.CULL_FACE):ge(t.CULL_FACE);let re=k.side===Yt;de&&(re=!re),V(re),k.blending===Vr&&k.transparent===!1?w(wi):w(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),s.setFunc(k.depthFunc),s.setTest(k.depthTest),s.setMask(k.depthWrite),r.setMask(k.colorWrite);const xe=k.stencilWrite;a.setTest(xe),xe&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),le(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ge(t.SAMPLE_ALPHA_TO_COVERAGE):B(t.SAMPLE_ALPHA_TO_COVERAGE)}function V(k){S!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),S=k)}function q(k){k!==XM?(ge(t.CULL_FACE),k!==x&&(k===_d?t.cullFace(t.BACK):k===$M?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):B(t.CULL_FACE),x=k}function $(k){k!==O&&(J&&t.lineWidth(k),O=k)}function le(k,de,re){k?(ge(t.POLYGON_OFFSET_FILL),(I!==de||L!==re)&&(t.polygonOffset(de,re),I=de,L=re)):B(t.POLYGON_OFFSET_FILL)}function b(k){k?ge(t.SCISSOR_TEST):B(t.SCISSOR_TEST)}function _(k){k===void 0&&(k=t.TEXTURE0+X-1),H!==k&&(t.activeTexture(k),H=k)}function N(k,de,re){re===void 0&&(H===null?re=t.TEXTURE0+X-1:re=H);let xe=pe[re];xe===void 0&&(xe={type:void 0,texture:void 0},pe[re]=xe),(xe.type!==k||xe.texture!==de)&&(H!==re&&(t.activeTexture(re),H=re),t.bindTexture(k,de||me[k]),xe.type=k,xe.texture=de)}function F(){const k=pe[H];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function G(){try{t.compressedTexImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function K(){try{t.compressedTexImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ce(){try{t.texSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ie(){try{t.texSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function oe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ee(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ue(){try{t.texStorage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Me(){try{t.texStorage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Fe(){try{t.texImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Re(){try{t.texImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function be(k){Pe.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),Pe.copy(k))}function Oe(k){Xe.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),Xe.copy(k))}function Ge(k,de){let re=l.get(de);re===void 0&&(re=new WeakMap,l.set(de,re));let xe=re.get(k);xe===void 0&&(xe=t.getUniformBlockIndex(de,k.name),re.set(k,xe))}function $e(k,de){const xe=l.get(de).get(k);o.get(de)!==xe&&(t.uniformBlockBinding(de,xe,k.__bindingPointIndex),o.set(de,xe))}function Le(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},H=null,pe={},u={},f=new WeakMap,d=[],h=null,v=!1,g=null,m=null,p=null,M=null,y=null,T=null,P=null,E=new je(0,0,0),C=0,U=!1,S=null,x=null,O=null,I=null,L=null,Pe.set(0,0,t.canvas.width,t.canvas.height),Xe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:ge,disable:B,bindFramebuffer:fe,drawBuffers:ae,useProgram:D,setBlending:w,setMaterial:R,setFlipSided:V,setCullFace:q,setLineWidth:$,setPolygonOffset:le,setScissorTest:b,activeTexture:_,bindTexture:N,unbindTexture:F,compressedTexImage2D:G,compressedTexImage3D:K,texImage2D:Fe,texImage3D:Re,updateUBOMapping:Ge,uniformBlockBinding:$e,texStorage2D:ue,texStorage3D:Me,texSubImage2D:ce,texSubImage3D:ie,compressedTexSubImage2D:oe,compressedTexSubImage3D:Ee,scissor:be,viewport:Oe,reset:Le}}function jC(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,_){return h?new OffscreenCanvas(b,_):go("canvas")}function g(b,_,N){let F=1;const G=le(b);if((G.width>N||G.height>N)&&(F=N/Math.max(G.width,G.height)),F<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const K=Math.floor(F*G.width),ce=Math.floor(F*G.height);f===void 0&&(f=v(K,ce));const ie=_?v(K,ce):f;return ie.width=K,ie.height=ce,ie.getContext("2d").drawImage(b,0,0,K,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+K+"x"+ce+")."),ie}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),b;return b}function m(b){return b.generateMipmaps&&b.minFilter!==mn&&b.minFilter!==Mn}function p(b){t.generateMipmap(b)}function M(b,_,N,F,G=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let K=_;if(_===t.RED&&(N===t.FLOAT&&(K=t.R32F),N===t.HALF_FLOAT&&(K=t.R16F),N===t.UNSIGNED_BYTE&&(K=t.R8)),_===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&(K=t.R8UI),N===t.UNSIGNED_SHORT&&(K=t.R16UI),N===t.UNSIGNED_INT&&(K=t.R32UI),N===t.BYTE&&(K=t.R8I),N===t.SHORT&&(K=t.R16I),N===t.INT&&(K=t.R32I)),_===t.RG&&(N===t.FLOAT&&(K=t.RG32F),N===t.HALF_FLOAT&&(K=t.RG16F),N===t.UNSIGNED_BYTE&&(K=t.RG8)),_===t.RG_INTEGER&&(N===t.UNSIGNED_BYTE&&(K=t.RG8UI),N===t.UNSIGNED_SHORT&&(K=t.RG16UI),N===t.UNSIGNED_INT&&(K=t.RG32UI),N===t.BYTE&&(K=t.RG8I),N===t.SHORT&&(K=t.RG16I),N===t.INT&&(K=t.RG32I)),_===t.RGB&&N===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),_===t.RGBA){const ce=G?fo:it.getTransfer(F);N===t.FLOAT&&(K=t.RGBA32F),N===t.HALF_FLOAT&&(K=t.RGBA16F),N===t.UNSIGNED_BYTE&&(K=ce===at?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function y(b,_){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==mn&&b.minFilter!==Mn?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function T(b){const _=b.target;_.removeEventListener("dispose",T),E(_),_.isVideoTexture&&u.delete(_)}function P(b){const _=b.target;_.removeEventListener("dispose",P),U(_)}function E(b){const _=i.get(b);if(_.__webglInit===void 0)return;const N=b.source,F=d.get(N);if(F){const G=F[_.__cacheKey];G.usedTimes--,G.usedTimes===0&&C(b),Object.keys(F).length===0&&d.delete(N)}i.remove(b)}function C(b){const _=i.get(b);t.deleteTexture(_.__webglTexture);const N=b.source,F=d.get(N);delete F[_.__cacheKey],a.memory.textures--}function U(b){const _=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(_.__webglFramebuffer[F]))for(let G=0;G<_.__webglFramebuffer[F].length;G++)t.deleteFramebuffer(_.__webglFramebuffer[F][G]);else t.deleteFramebuffer(_.__webglFramebuffer[F]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[F])}else{if(Array.isArray(_.__webglFramebuffer))for(let F=0;F<_.__webglFramebuffer.length;F++)t.deleteFramebuffer(_.__webglFramebuffer[F]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let F=0;F<_.__webglColorRenderbuffer.length;F++)_.__webglColorRenderbuffer[F]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[F]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const N=b.textures;for(let F=0,G=N.length;F<G;F++){const K=i.get(N[F]);K.__webglTexture&&(t.deleteTexture(K.__webglTexture),a.memory.textures--),i.remove(N[F])}i.remove(b)}let S=0;function x(){S=0}function O(){const b=S;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),S+=1,b}function I(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function L(b,_){const N=i.get(b);if(b.isVideoTexture&&q(b),b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){const F=b.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(N,b,_);return}}n.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+_)}function X(b,_){const N=i.get(b);if(b.version>0&&N.__version!==b.version){Pe(N,b,_);return}n.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+_)}function J(b,_){const N=i.get(b);if(b.version>0&&N.__version!==b.version){Pe(N,b,_);return}n.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+_)}function te(b,_){const N=i.get(b);if(b.version>0&&N.__version!==b.version){Xe(N,b,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+_)}const ne={[Ec]:t.REPEAT,[tr]:t.CLAMP_TO_EDGE,[bc]:t.MIRRORED_REPEAT},H={[mn]:t.NEAREST,[CE]:t.NEAREST_MIPMAP_NEAREST,[_a]:t.NEAREST_MIPMAP_LINEAR,[Mn]:t.LINEAR,[hl]:t.LINEAR_MIPMAP_NEAREST,[nr]:t.LINEAR_MIPMAP_LINEAR},pe={[HE]:t.NEVER,[YE]:t.ALWAYS,[GE]:t.LESS,[Ng]:t.LEQUAL,[WE]:t.EQUAL,[qE]:t.GEQUAL,[XE]:t.GREATER,[$E]:t.NOTEQUAL};function he(b,_){if(_.type===Ei&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Mn||_.magFilter===hl||_.magFilter===_a||_.magFilter===nr||_.minFilter===Mn||_.minFilter===hl||_.minFilter===_a||_.minFilter===nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,ne[_.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,ne[_.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,ne[_.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,H[_.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,H[_.minFilter]),_.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,pe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===mn||_.minFilter!==_a&&_.minFilter!==nr||_.type===Ei&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Se(b,_){let N=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",T));const F=_.source;let G=d.get(F);G===void 0&&(G={},d.set(F,G));const K=I(_);if(K!==b.__cacheKey){G[K]===void 0&&(G[K]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,N=!0),G[K].usedTimes++;const ce=G[b.__cacheKey];ce!==void 0&&(G[b.__cacheKey].usedTimes--,ce.usedTimes===0&&C(_)),b.__cacheKey=K,b.__webglTexture=G[K].texture}return N}function Pe(b,_,N){let F=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(F=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(F=t.TEXTURE_3D);const G=Se(b,_),K=_.source;n.bindTexture(F,b.__webglTexture,t.TEXTURE0+N);const ce=i.get(K);if(K.version!==ce.__version||G===!0){n.activeTexture(t.TEXTURE0+N);const ie=it.getPrimaries(it.workingColorSpace),oe=_.colorSpace===Mi?null:it.getPrimaries(_.colorSpace),Ee=_.colorSpace===Mi||ie===oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let ue=g(_.image,!1,r.maxTextureSize);ue=$(_,ue);const Me=s.convert(_.format,_.colorSpace),Fe=s.convert(_.type);let Re=M(_.internalFormat,Me,Fe,_.colorSpace,_.isVideoTexture);he(F,_);let be;const Oe=_.mipmaps,Ge=_.isVideoTexture!==!0,$e=ce.__version===void 0||G===!0,Le=K.dataReady,k=y(_,ue);if(_.isDepthTexture)Re=t.DEPTH_COMPONENT16,_.type===Ei?Re=t.DEPTH_COMPONENT32F:_.type===Zr?Re=t.DEPTH_COMPONENT24:_.type===Qs&&(Re=t.DEPTH24_STENCIL8),$e&&(Ge?n.texStorage2D(t.TEXTURE_2D,1,Re,ue.width,ue.height):n.texImage2D(t.TEXTURE_2D,0,Re,ue.width,ue.height,0,Me,Fe,null));else if(_.isDataTexture)if(Oe.length>0){Ge&&$e&&n.texStorage2D(t.TEXTURE_2D,k,Re,Oe[0].width,Oe[0].height);for(let de=0,re=Oe.length;de<re;de++)be=Oe[de],Ge?Le&&n.texSubImage2D(t.TEXTURE_2D,de,0,0,be.width,be.height,Me,Fe,be.data):n.texImage2D(t.TEXTURE_2D,de,Re,be.width,be.height,0,Me,Fe,be.data);_.generateMipmaps=!1}else Ge?($e&&n.texStorage2D(t.TEXTURE_2D,k,Re,ue.width,ue.height),Le&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue.width,ue.height,Me,Fe,ue.data)):n.texImage2D(t.TEXTURE_2D,0,Re,ue.width,ue.height,0,Me,Fe,ue.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ge&&$e&&n.texStorage3D(t.TEXTURE_2D_ARRAY,k,Re,Oe[0].width,Oe[0].height,ue.depth);for(let de=0,re=Oe.length;de<re;de++)be=Oe[de],_.format!==Nn?Me!==null?Ge?Le&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,0,be.width,be.height,ue.depth,Me,be.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,de,Re,be.width,be.height,ue.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?Le&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,0,be.width,be.height,ue.depth,Me,Fe,be.data):n.texImage3D(t.TEXTURE_2D_ARRAY,de,Re,be.width,be.height,ue.depth,0,Me,Fe,be.data)}else{Ge&&$e&&n.texStorage2D(t.TEXTURE_2D,k,Re,Oe[0].width,Oe[0].height);for(let de=0,re=Oe.length;de<re;de++)be=Oe[de],_.format!==Nn?Me!==null?Ge?Le&&n.compressedTexSubImage2D(t.TEXTURE_2D,de,0,0,be.width,be.height,Me,be.data):n.compressedTexImage2D(t.TEXTURE_2D,de,Re,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?Le&&n.texSubImage2D(t.TEXTURE_2D,de,0,0,be.width,be.height,Me,Fe,be.data):n.texImage2D(t.TEXTURE_2D,de,Re,be.width,be.height,0,Me,Fe,be.data)}else if(_.isDataArrayTexture)Ge?($e&&n.texStorage3D(t.TEXTURE_2D_ARRAY,k,Re,ue.width,ue.height,ue.depth),Le&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Me,Fe,ue.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Re,ue.width,ue.height,ue.depth,0,Me,Fe,ue.data);else if(_.isData3DTexture)Ge?($e&&n.texStorage3D(t.TEXTURE_3D,k,Re,ue.width,ue.height,ue.depth),Le&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Me,Fe,ue.data)):n.texImage3D(t.TEXTURE_3D,0,Re,ue.width,ue.height,ue.depth,0,Me,Fe,ue.data);else if(_.isFramebufferTexture){if($e)if(Ge)n.texStorage2D(t.TEXTURE_2D,k,Re,ue.width,ue.height);else{let de=ue.width,re=ue.height;for(let xe=0;xe<k;xe++)n.texImage2D(t.TEXTURE_2D,xe,Re,de,re,0,Me,Fe,null),de>>=1,re>>=1}}else if(Oe.length>0){if(Ge&&$e){const de=le(Oe[0]);n.texStorage2D(t.TEXTURE_2D,k,Re,de.width,de.height)}for(let de=0,re=Oe.length;de<re;de++)be=Oe[de],Ge?Le&&n.texSubImage2D(t.TEXTURE_2D,de,0,0,Me,Fe,be):n.texImage2D(t.TEXTURE_2D,de,Re,Me,Fe,be);_.generateMipmaps=!1}else if(Ge){if($e){const de=le(ue);n.texStorage2D(t.TEXTURE_2D,k,Re,de.width,de.height)}Le&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Me,Fe,ue)}else n.texImage2D(t.TEXTURE_2D,0,Re,Me,Fe,ue);m(_)&&p(F),ce.__version=K.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Xe(b,_,N){if(_.image.length!==6)return;const F=Se(b,_),G=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+N);const K=i.get(G);if(G.version!==K.__version||F===!0){n.activeTexture(t.TEXTURE0+N);const ce=it.getPrimaries(it.workingColorSpace),ie=_.colorSpace===Mi?null:it.getPrimaries(_.colorSpace),oe=_.colorSpace===Mi||ce===ie?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const Ee=_.isCompressedTexture||_.image[0].isCompressedTexture,ue=_.image[0]&&_.image[0].isDataTexture,Me=[];for(let re=0;re<6;re++)!Ee&&!ue?Me[re]=g(_.image[re],!0,r.maxCubemapSize):Me[re]=ue?_.image[re].image:_.image[re],Me[re]=$(_,Me[re]);const Fe=Me[0],Re=s.convert(_.format,_.colorSpace),be=s.convert(_.type),Oe=M(_.internalFormat,Re,be,_.colorSpace),Ge=_.isVideoTexture!==!0,$e=K.__version===void 0||F===!0,Le=G.dataReady;let k=y(_,Fe);he(t.TEXTURE_CUBE_MAP,_);let de;if(Ee){Ge&&$e&&n.texStorage2D(t.TEXTURE_CUBE_MAP,k,Oe,Fe.width,Fe.height);for(let re=0;re<6;re++){de=Me[re].mipmaps;for(let xe=0;xe<de.length;xe++){const Te=de[xe];_.format!==Nn?Re!==null?Ge?Le&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,xe,0,0,Te.width,Te.height,Re,Te.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,xe,Oe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?Le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,xe,0,0,Te.width,Te.height,Re,be,Te.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,xe,Oe,Te.width,Te.height,0,Re,be,Te.data)}}}else{if(de=_.mipmaps,Ge&&$e){de.length>0&&k++;const re=le(Me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,k,Oe,re.width,re.height)}for(let re=0;re<6;re++)if(ue){Ge?Le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Me[re].width,Me[re].height,Re,be,Me[re].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Oe,Me[re].width,Me[re].height,0,Re,be,Me[re].data);for(let xe=0;xe<de.length;xe++){const Ze=de[xe].image[re].image;Ge?Le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,xe+1,0,0,Ze.width,Ze.height,Re,be,Ze.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,xe+1,Oe,Ze.width,Ze.height,0,Re,be,Ze.data)}}else{Ge?Le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Re,be,Me[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Oe,Re,be,Me[re]);for(let xe=0;xe<de.length;xe++){const Te=de[xe];Ge?Le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,xe+1,0,0,Re,be,Te.image[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,xe+1,Oe,Re,be,Te.image[re])}}}m(_)&&p(t.TEXTURE_CUBE_MAP),K.__version=G.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function ee(b,_,N,F,G,K){const ce=s.convert(N.format,N.colorSpace),ie=s.convert(N.type),oe=M(N.internalFormat,ce,ie,N.colorSpace);if(!i.get(_).__hasExternalTextures){const ue=Math.max(1,_.width>>K),Me=Math.max(1,_.height>>K);G===t.TEXTURE_3D||G===t.TEXTURE_2D_ARRAY?n.texImage3D(G,K,oe,ue,Me,_.depth,0,ce,ie,null):n.texImage2D(G,K,oe,ue,Me,0,ce,ie,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),V(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,F,G,i.get(N).__webglTexture,0,R(_)):(G===t.TEXTURE_2D||G>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,F,G,i.get(N).__webglTexture,K),n.bindFramebuffer(t.FRAMEBUFFER,null)}function me(b,_,N){if(t.bindRenderbuffer(t.RENDERBUFFER,b),_.depthBuffer&&!_.stencilBuffer){let F=t.DEPTH_COMPONENT24;if(N||V(_)){const G=_.depthTexture;G&&G.isDepthTexture&&(G.type===Ei?F=t.DEPTH_COMPONENT32F:G.type===Zr&&(F=t.DEPTH_COMPONENT24));const K=R(_);V(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,K,F,_.width,_.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,K,F,_.width,_.height)}else t.renderbufferStorage(t.RENDERBUFFER,F,_.width,_.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,b)}else if(_.depthBuffer&&_.stencilBuffer){const F=R(_);N&&V(_)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,F,t.DEPTH24_STENCIL8,_.width,_.height):V(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,F,t.DEPTH24_STENCIL8,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,b)}else{const F=_.textures;for(let G=0;G<F.length;G++){const K=F[G],ce=s.convert(K.format,K.colorSpace),ie=s.convert(K.type),oe=M(K.internalFormat,ce,ie,K.colorSpace),Ee=R(_);N&&V(_)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ee,oe,_.width,_.height):V(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ee,oe,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,oe,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ge(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),L(_.depthTexture,0);const F=i.get(_.depthTexture).__webglTexture,G=R(_);if(_.depthTexture.format===zr)V(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,F,0,G):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,F,0);else if(_.depthTexture.format===Hs)V(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,F,0,G):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,F,0);else throw new Error("Unknown depthTexture format")}function B(b){const _=i.get(b),N=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");ge(_.__webglFramebuffer,b)}else if(N){_.__webglDepthbuffer=[];for(let F=0;F<6;F++)n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[F]),_.__webglDepthbuffer[F]=t.createRenderbuffer(),me(_.__webglDepthbuffer[F],b,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=t.createRenderbuffer(),me(_.__webglDepthbuffer,b,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function fe(b,_,N){const F=i.get(b);_!==void 0&&ee(F.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&B(b)}function ae(b){const _=b.texture,N=i.get(b),F=i.get(_);b.addEventListener("dispose",P);const G=b.textures,K=b.isWebGLCubeRenderTarget===!0,ce=G.length>1;if(ce||(F.__webglTexture===void 0&&(F.__webglTexture=t.createTexture()),F.__version=_.version,a.memory.textures++),K){N.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[ie]=[];for(let oe=0;oe<_.mipmaps.length;oe++)N.__webglFramebuffer[ie][oe]=t.createFramebuffer()}else N.__webglFramebuffer[ie]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let ie=0;ie<_.mipmaps.length;ie++)N.__webglFramebuffer[ie]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(ce)for(let ie=0,oe=G.length;ie<oe;ie++){const Ee=i.get(G[ie]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=t.createTexture(),a.memory.textures++)}if(b.samples>0&&V(b)===!1){N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ie=0;ie<G.length;ie++){const oe=G[ie];N.__webglColorRenderbuffer[ie]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[ie]);const Ee=s.convert(oe.format,oe.colorSpace),ue=s.convert(oe.type),Me=M(oe.internalFormat,Ee,ue,oe.colorSpace,b.isXRRenderTarget===!0),Fe=R(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,Me,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ie,t.RENDERBUFFER,N.__webglColorRenderbuffer[ie])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),me(N.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(K){n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture),he(t.TEXTURE_CUBE_MAP,_);for(let ie=0;ie<6;ie++)if(_.mipmaps&&_.mipmaps.length>0)for(let oe=0;oe<_.mipmaps.length;oe++)ee(N.__webglFramebuffer[ie][oe],b,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe);else ee(N.__webglFramebuffer[ie],b,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);m(_)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ce){for(let ie=0,oe=G.length;ie<oe;ie++){const Ee=G[ie],ue=i.get(Ee);n.bindTexture(t.TEXTURE_2D,ue.__webglTexture),he(t.TEXTURE_2D,Ee),ee(N.__webglFramebuffer,b,Ee,t.COLOR_ATTACHMENT0+ie,t.TEXTURE_2D,0),m(Ee)&&p(t.TEXTURE_2D)}n.unbindTexture()}else{let ie=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ie=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ie,F.__webglTexture),he(ie,_),_.mipmaps&&_.mipmaps.length>0)for(let oe=0;oe<_.mipmaps.length;oe++)ee(N.__webglFramebuffer[oe],b,_,t.COLOR_ATTACHMENT0,ie,oe);else ee(N.__webglFramebuffer,b,_,t.COLOR_ATTACHMENT0,ie,0);m(_)&&p(ie),n.unbindTexture()}b.depthBuffer&&B(b)}function D(b){const _=b.textures;for(let N=0,F=_.length;N<F;N++){const G=_[N];if(m(G)){const K=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ce=i.get(G).__webglTexture;n.bindTexture(K,ce),p(K),n.unbindTexture()}}}const Ce=[],_e=[];function w(b){if(b.samples>0){if(V(b)===!1){const _=b.textures,N=b.width,F=b.height;let G=t.COLOR_BUFFER_BIT;const K=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=i.get(b),ie=_.length>1;if(ie)for(let oe=0;oe<_.length;oe++)n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let oe=0;oe<_.length;oe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(G|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(G|=t.STENCIL_BUFFER_BIT)),ie){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ce.__webglColorRenderbuffer[oe]);const Ee=i.get(_[oe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ee,0)}t.blitFramebuffer(0,0,N,F,0,0,N,F,G,t.NEAREST),l===!0&&(Ce.length=0,_e.length=0,Ce.push(t.COLOR_ATTACHMENT0+oe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Ce.push(K),_e.push(K),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,_e)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ce))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ie)for(let oe=0;oe<_.length;oe++){n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.RENDERBUFFER,ce.__webglColorRenderbuffer[oe]);const Ee=i.get(_[oe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.TEXTURE_2D,Ee,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const _=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function R(b){return Math.min(r.maxSamples,b.samples)}function V(b){const _=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function q(b){const _=a.render.frame;u.get(b)!==_&&(u.set(b,_),b.update())}function $(b,_){const N=b.colorSpace,F=b.format,G=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||N!==Oi&&N!==Mi&&(it.getTransfer(N)===at?(F!==Nn||G!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),_}function le(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=x,this.setTexture2D=L,this.setTexture2DArray=X,this.setTexture3D=J,this.setTextureCube=te,this.rebindTextures=fe,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=w,this.setupDepthRenderbuffer=B,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=V}function KC(t,e){function n(i,r=Mi){let s;const a=it.getTransfer(r);if(i===Ii)return t.UNSIGNED_BYTE;if(i===Rg)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Pg)return t.UNSIGNED_SHORT_5_5_5_1;if(i===LE)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===RE)return t.BYTE;if(i===PE)return t.SHORT;if(i===wg)return t.UNSIGNED_SHORT;if(i===Cg)return t.INT;if(i===Zr)return t.UNSIGNED_INT;if(i===Ei)return t.FLOAT;if(i===Go)return t.HALF_FLOAT;if(i===IE)return t.ALPHA;if(i===DE)return t.RGB;if(i===Nn)return t.RGBA;if(i===UE)return t.LUMINANCE;if(i===NE)return t.LUMINANCE_ALPHA;if(i===zr)return t.DEPTH_COMPONENT;if(i===Hs)return t.DEPTH_STENCIL;if(i===FE)return t.RED;if(i===Lg)return t.RED_INTEGER;if(i===OE)return t.RG;if(i===Ig)return t.RG_INTEGER;if(i===Dg)return t.RGBA_INTEGER;if(i===pl||i===ml||i===gl||i===vl)if(a===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===pl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===pl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ml)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Md||i===Ed||i===bd||i===Td)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Md)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ed)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Td)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ad||i===wd||i===Cd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ad||i===wd)return a===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Cd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Rd||i===Pd||i===Ld||i===Id||i===Dd||i===Ud||i===Nd||i===Fd||i===Od||i===Bd||i===kd||i===Vd||i===zd||i===Hd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Rd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ld)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Id)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ud)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Od)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===kd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===_l||i===Gd||i===Wd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===_l)return a===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===BE||i===Xd||i===$d||i===qd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===_l)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Xd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$d)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class ZC extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Va extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const JC={type:"move"};class Xl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Va,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Va,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Va,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=n.getJointPose(g,i),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,v=.005;c.inputState.pinching&&d>h+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(JC)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Va;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const QC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e1=`
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

}`;class t1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new jt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new Di({vertexShader:QC,fragmentShader:e1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new En(new Xo(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class n1 extends is{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,v=null;const g=new t1,m=n.getContextAttributes();let p=null,M=null;const y=[],T=[],P=new Ke;let E=null;const C=new un;C.layers.enable(1),C.viewport=new Ct;const U=new un;U.layers.enable(2),U.viewport=new Ct;const S=[C,U],x=new ZC;x.layers.enable(1),x.layers.enable(2);let O=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let me=y[ee];return me===void 0&&(me=new Xl,y[ee]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ee){let me=y[ee];return me===void 0&&(me=new Xl,y[ee]=me),me.getGripSpace()},this.getHand=function(ee){let me=y[ee];return me===void 0&&(me=new Xl,y[ee]=me),me.getHandSpace()};function L(ee){const me=T.indexOf(ee.inputSource);if(me===-1)return;const ge=y[me];ge!==void 0&&(ge.update(ee.inputSource,ee.frame,c||a),ge.dispatchEvent({type:ee.type,data:ee.inputSource}))}function X(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",J);for(let ee=0;ee<y.length;ee++){const me=T[ee];me!==null&&(T[ee]=null,y[ee].disconnect(me))}O=null,I=null,g.reset(),e.setRenderTarget(p),h=null,d=null,f=null,r=null,M=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",X),r.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await n.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const me={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,me),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new or(h.framebufferWidth,h.framebufferHeight,{format:Nn,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let me=null,ge=null,B=null;m.depth&&(B=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,me=m.stencil?Hs:zr,ge=m.stencil?Qs:Zr);const fe={colorFormat:n.RGBA8,depthFormat:B,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(fe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new or(d.textureWidth,d.textureHeight,{format:Nn,type:Ii,depthTexture:new Yg(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Xe.setContext(r),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function J(ee){for(let me=0;me<ee.removed.length;me++){const ge=ee.removed[me],B=T.indexOf(ge);B>=0&&(T[B]=null,y[B].disconnect(ge))}for(let me=0;me<ee.added.length;me++){const ge=ee.added[me];let B=T.indexOf(ge);if(B===-1){for(let ae=0;ae<y.length;ae++)if(ae>=T.length){T.push(ge),B=ae;break}else if(T[ae]===null){T[ae]=ge,B=ae;break}if(B===-1)break}const fe=y[B];fe&&fe.connect(ge)}}const te=new Z,ne=new Z;function H(ee,me,ge){te.setFromMatrixPosition(me.matrixWorld),ne.setFromMatrixPosition(ge.matrixWorld);const B=te.distanceTo(ne),fe=me.projectionMatrix.elements,ae=ge.projectionMatrix.elements,D=fe[14]/(fe[10]-1),Ce=fe[14]/(fe[10]+1),_e=(fe[9]+1)/fe[5],w=(fe[9]-1)/fe[5],R=(fe[8]-1)/fe[0],V=(ae[8]+1)/ae[0],q=D*R,$=D*V,le=B/(-R+V),b=le*-R;me.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(b),ee.translateZ(le),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert();const _=D+le,N=Ce+le,F=q-b,G=$+(B-b),K=_e*Ce/N*_,ce=w*Ce/N*_;ee.projectionMatrix.makePerspective(F,G,K,ce,_,N),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}function pe(ee,me){me===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(me.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;g.texture!==null&&(ee.near=g.depthNear,ee.far=g.depthFar),x.near=U.near=C.near=ee.near,x.far=U.far=C.far=ee.far,(O!==x.near||I!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),O=x.near,I=x.far,C.near=O,C.far=I,U.near=O,U.far=I,C.updateProjectionMatrix(),U.updateProjectionMatrix(),ee.updateProjectionMatrix());const me=ee.parent,ge=x.cameras;pe(x,me);for(let B=0;B<ge.length;B++)pe(ge[B],me);ge.length===2?H(x,C,U):x.projectionMatrix.copy(C.projectionMatrix),he(ee,x,me)};function he(ee,me,ge){ge===null?ee.matrix.copy(me.matrixWorld):(ee.matrix.copy(ge.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(me.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(me.projectionMatrix),ee.projectionMatrixInverse.copy(me.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Tc*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(ee){l=ee,d!==null&&(d.fixedFoveation=ee),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ee)},this.hasDepthSensing=function(){return g.texture!==null};let Se=null;function Pe(ee,me){if(u=me.getViewerPose(c||a),v=me,u!==null){const ge=u.views;h!==null&&(e.setRenderTargetFramebuffer(M,h.framebuffer),e.setRenderTarget(M));let B=!1;ge.length!==x.cameras.length&&(x.cameras.length=0,B=!0);for(let ae=0;ae<ge.length;ae++){const D=ge[ae];let Ce=null;if(h!==null)Ce=h.getViewport(D);else{const w=f.getViewSubImage(d,D);Ce=w.viewport,ae===0&&(e.setRenderTargetTextures(M,w.colorTexture,d.ignoreDepthValues?void 0:w.depthStencilTexture),e.setRenderTarget(M))}let _e=S[ae];_e===void 0&&(_e=new un,_e.layers.enable(ae),_e.viewport=new Ct,S[ae]=_e),_e.matrix.fromArray(D.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(D.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),ae===0&&(x.matrix.copy(_e.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),B===!0&&x.cameras.push(_e)}const fe=r.enabledFeatures;if(fe&&fe.includes("depth-sensing")){const ae=f.getDepthInformation(ge[0]);ae&&ae.isValid&&ae.texture&&g.init(e,ae,r.renderState)}}for(let ge=0;ge<y.length;ge++){const B=T[ge],fe=y[ge];B!==null&&fe!==void 0&&fe.update(B,me,c||a)}g.render(e,x),Se&&Se(ee,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),v=null}const Xe=new qg;Xe.setAnimationLoop(Pe),this.setAnimationLoop=function(ee){Se=ee},this.dispose=function(){}}}const Yi=new kn,i1=new St;function r1(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Gg(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,y,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,T)):p.isMeshMatcapMaterial?(s(m,p),v(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Yt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Yt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),y=M.envMap,T=M.envMapRotation;if(y&&(m.envMap.value=y,Yi.copy(T),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),m.envMapRotation.value.setFromMatrix4(i1.makeRotationFromEuler(Yi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const P=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*P,n(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=y*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function s1(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){const T=y.program;i.uniformBlockBinding(M,T)}function c(M,y){let T=r[M.id];T===void 0&&(v(M),T=u(M),r[M.id]=T,M.addEventListener("dispose",m));const P=y.program;i.updateUBOMapping(M,P);const E=e.render.frame;s[M.id]!==E&&(d(M),s[M.id]=E)}function u(M){const y=f();M.__bindingPointIndex=y;const T=t.createBuffer(),P=M.__size,E=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,P,E),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,T),T}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const y=r[M.id],T=M.uniforms,P=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let E=0,C=T.length;E<C;E++){const U=Array.isArray(T[E])?T[E]:[T[E]];for(let S=0,x=U.length;S<x;S++){const O=U[S];if(h(O,E,S,P)===!0){const I=O.__offset,L=Array.isArray(O.value)?O.value:[O.value];let X=0;for(let J=0;J<L.length;J++){const te=L[J],ne=g(te);typeof te=="number"||typeof te=="boolean"?(O.__data[0]=te,t.bufferSubData(t.UNIFORM_BUFFER,I+X,O.__data)):te.isMatrix3?(O.__data[0]=te.elements[0],O.__data[1]=te.elements[1],O.__data[2]=te.elements[2],O.__data[3]=0,O.__data[4]=te.elements[3],O.__data[5]=te.elements[4],O.__data[6]=te.elements[5],O.__data[7]=0,O.__data[8]=te.elements[6],O.__data[9]=te.elements[7],O.__data[10]=te.elements[8],O.__data[11]=0):(te.toArray(O.__data,X),X+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,I,O.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(M,y,T,P){const E=M.value,C=y+"_"+T;if(P[C]===void 0)return typeof E=="number"||typeof E=="boolean"?P[C]=E:P[C]=E.clone(),!0;{const U=P[C];if(typeof E=="number"||typeof E=="boolean"){if(U!==E)return P[C]=E,!0}else if(U.equals(E)===!1)return U.copy(E),!0}return!1}function v(M){const y=M.uniforms;let T=0;const P=16;for(let C=0,U=y.length;C<U;C++){const S=Array.isArray(y[C])?y[C]:[y[C]];for(let x=0,O=S.length;x<O;x++){const I=S[x],L=Array.isArray(I.value)?I.value:[I.value];for(let X=0,J=L.length;X<J;X++){const te=L[X],ne=g(te),H=T%P;H!==0&&P-H<ne.boundary&&(T+=P-H),I.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=T,T+=ne.storage}}}const E=T%P;return E>0&&(T+=P-E),M.__size=T,M.__cache={},this}function g(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){const y=M.target;y.removeEventListener("dispose",m);const T=a.indexOf(y.__bindingPointIndex);a.splice(T,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const M in r)t.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class a1{constructor(e={}){const{canvas:n=KE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const h=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const p=[],M=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rn,this._useLegacyLights=!1,this.toneMapping=Ci,this.toneMappingExposure=1;const y=this;let T=!1,P=0,E=0,C=null,U=-1,S=null;const x=new Ct,O=new Ct;let I=null;const L=new je(0);let X=0,J=n.width,te=n.height,ne=1,H=null,pe=null;const he=new Ct(0,0,J,te),Se=new Ct(0,0,J,te);let Pe=!1;const Xe=new $g;let ee=!1,me=!1;const ge=new St,B=new Z,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ae(){return C===null?ne:1}let D=i;function Ce(A,z){return n.getContext(A,z)}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${pu}`),n.addEventListener("webglcontextlost",k,!1),n.addEventListener("webglcontextrestored",de,!1),n.addEventListener("webglcontextcreationerror",re,!1),D===null){const z="webgl2";if(D=Ce(z,A),D===null)throw Ce(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let _e,w,R,V,q,$,le,b,_,N,F,G,K,ce,ie,oe,Ee,ue,Me,Fe,Re,be,Oe,Ge;function $e(){_e=new pw(D),_e.init(),be=new KC(D,_e),w=new ow(D,_e,e,be),R=new YC(D),V=new vw(D),q=new UC,$=new jC(D,_e,R,q,w,be,V),le=new cw(y),b=new hw(y),_=new Eb(D),Oe=new sw(D,_),N=new mw(D,_,V,Oe),F=new xw(D,N,_,V),Me=new _w(D,w,$),oe=new lw(q),G=new DC(y,le,b,_e,w,Oe,oe),K=new r1(y,q),ce=new FC,ie=new HC(_e),ue=new rw(y,le,b,R,F,d,l),Ee=new qC(y,F,w),Ge=new s1(D,V,w,R),Fe=new aw(D,_e,V),Re=new gw(D,_e,V),V.programs=G.programs,y.capabilities=w,y.extensions=_e,y.properties=q,y.renderLists=ce,y.shadowMap=Ee,y.state=R,y.info=V}$e();const Le=new n1(y,D);this.xr=Le,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=_e.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=_e.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(A){A!==void 0&&(ne=A,this.setSize(J,te,!1))},this.getSize=function(A){return A.set(J,te)},this.setSize=function(A,z,Q=!0){if(Le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=A,te=z,n.width=Math.floor(A*ne),n.height=Math.floor(z*ne),Q===!0&&(n.style.width=A+"px",n.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(J*ne,te*ne).floor()},this.setDrawingBufferSize=function(A,z,Q){J=A,te=z,ne=Q,n.width=Math.floor(A*Q),n.height=Math.floor(z*Q),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(x)},this.getViewport=function(A){return A.copy(he)},this.setViewport=function(A,z,Q,Y){A.isVector4?he.set(A.x,A.y,A.z,A.w):he.set(A,z,Q,Y),R.viewport(x.copy(he).multiplyScalar(ne).round())},this.getScissor=function(A){return A.copy(Se)},this.setScissor=function(A,z,Q,Y){A.isVector4?Se.set(A.x,A.y,A.z,A.w):Se.set(A,z,Q,Y),R.scissor(O.copy(Se).multiplyScalar(ne).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(A){R.setScissorTest(Pe=A)},this.setOpaqueSort=function(A){H=A},this.setTransparentSort=function(A){pe=A},this.getClearColor=function(A){return A.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(A=!0,z=!0,Q=!0){let Y=0;if(A){let j=!1;if(C!==null){const ye=C.texture.format;j=ye===Dg||ye===Ig||ye===Lg}if(j){const ye=C.texture.type,Ae=ye===Ii||ye===Zr||ye===wg||ye===Qs||ye===Rg||ye===Pg,we=ue.getClearColor(),De=ue.getClearAlpha(),Be=we.r,Ve=we.g,We=we.b;Ae?(h[0]=Be,h[1]=Ve,h[2]=We,h[3]=De,D.clearBufferuiv(D.COLOR,0,h)):(v[0]=Be,v[1]=Ve,v[2]=We,v[3]=De,D.clearBufferiv(D.COLOR,0,v))}else Y|=D.COLOR_BUFFER_BIT}z&&(Y|=D.DEPTH_BUFFER_BIT),Q&&(Y|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",k,!1),n.removeEventListener("webglcontextrestored",de,!1),n.removeEventListener("webglcontextcreationerror",re,!1),ce.dispose(),ie.dispose(),q.dispose(),le.dispose(),b.dispose(),F.dispose(),Oe.dispose(),Ge.dispose(),G.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",tt),Le.removeEventListener("sessionend",wn),Ot.stop()};function k(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const A=V.autoReset,z=Ee.enabled,Q=Ee.autoUpdate,Y=Ee.needsUpdate,j=Ee.type;$e(),V.autoReset=A,Ee.enabled=z,Ee.autoUpdate=Q,Ee.needsUpdate=Y,Ee.type=j}function re(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function xe(A){const z=A.target;z.removeEventListener("dispose",xe),Te(z)}function Te(A){Ze(A),q.remove(A)}function Ze(A){const z=q.get(A).programs;z!==void 0&&(z.forEach(function(Q){G.releaseProgram(Q)}),A.isShaderMaterial&&G.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,Q,Y,j,ye){z===null&&(z=fe);const Ae=j.isMesh&&j.matrixWorld.determinant()<0,we=nv(A,z,Q,Y,j);R.setMaterial(Y,Ae);let De=Q.index,Be=1;if(Y.wireframe===!0){if(De=N.getWireframeAttribute(Q),De===void 0)return;Be=2}const Ve=Q.drawRange,We=Q.attributes.position;let _t=Ve.start*Be,Pt=(Ve.start+Ve.count)*Be;ye!==null&&(_t=Math.max(_t,ye.start*Be),Pt=Math.min(Pt,(ye.start+ye.count)*Be)),De!==null?(_t=Math.max(_t,0),Pt=Math.min(Pt,De.count)):We!=null&&(_t=Math.max(_t,0),Pt=Math.min(Pt,We.count));const Zt=Pt-_t;if(Zt<0||Zt===1/0)return;Oe.setup(j,Y,we,Q,De);let Gn,Qe=Fe;if(De!==null&&(Gn=_.get(De),Qe=Re,Qe.setIndex(Gn)),j.isMesh)Y.wireframe===!0?(R.setLineWidth(Y.wireframeLinewidth*ae()),Qe.setMode(D.LINES)):Qe.setMode(D.TRIANGLES);else if(j.isLine){let ke=Y.linewidth;ke===void 0&&(ke=1),R.setLineWidth(ke*ae()),j.isLineSegments?Qe.setMode(D.LINES):j.isLineLoop?Qe.setMode(D.LINE_LOOP):Qe.setMode(D.LINE_STRIP)}else j.isPoints?Qe.setMode(D.POINTS):j.isSprite&&Qe.setMode(D.TRIANGLES);if(j.isBatchedMesh)j._multiDrawInstances!==null?Qe.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances):Qe.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)Qe.renderInstances(_t,Zt,j.count);else if(Q.isInstancedBufferGeometry){const ke=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,ss=Math.min(Q.instanceCount,ke);Qe.renderInstances(_t,Zt,ss)}else Qe.render(_t,Zt)};function st(A,z,Q){A.transparent===!0&&A.side===Jn&&A.forceSinglePass===!1?(A.side=Yt,A.needsUpdate=!0,aa(A,z,Q),A.side=Li,A.needsUpdate=!0,aa(A,z,Q),A.side=Jn):aa(A,z,Q)}this.compile=function(A,z,Q=null){Q===null&&(Q=A),m=ie.get(Q),m.init(z),M.push(m),Q.traverseVisible(function(j){j.isLight&&j.layers.test(z.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),A!==Q&&A.traverseVisible(function(j){j.isLight&&j.layers.test(z.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),m.setupLights(y._useLegacyLights);const Y=new Set;return A.traverse(function(j){const ye=j.material;if(ye)if(Array.isArray(ye))for(let Ae=0;Ae<ye.length;Ae++){const we=ye[Ae];st(we,Q,j),Y.add(we)}else st(ye,Q,j),Y.add(ye)}),M.pop(),m=null,Y},this.compileAsync=function(A,z,Q=null){const Y=this.compile(A,z,Q);return new Promise(j=>{function ye(){if(Y.forEach(function(Ae){q.get(Ae).currentProgram.isReady()&&Y.delete(Ae)}),Y.size===0){j(A);return}setTimeout(ye,10)}_e.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let ht=null;function Rt(A){ht&&ht(A)}function tt(){Ot.stop()}function wn(){Ot.start()}const Ot=new qg;Ot.setAnimationLoop(Rt),typeof self<"u"&&Ot.setContext(self),this.setAnimationLoop=function(A){ht=A,Le.setAnimationLoop(A),A===null?Ot.stop():Ot.start()},Le.addEventListener("sessionstart",tt),Le.addEventListener("sessionend",wn),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(z),z=Le.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,z,C),m=ie.get(A,M.length),m.init(z),M.push(m),ge.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Xe.setFromProjectionMatrix(ge),me=this.localClippingEnabled,ee=oe.init(this.clippingPlanes,me),g=ce.get(A,p.length),g.init(),p.push(g),Eu(A,z,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(H,pe);const Q=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1;Q&&ue.addToRenderList(g,A),this.info.render.frame++,ee===!0&&oe.beginShadows();const Y=m.state.shadowsArray;Ee.render(Y,A,z),ee===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=g.opaque,ye=g.transmissive;if(m.setupLights(y._useLegacyLights),z.isArrayCamera){const Ae=z.cameras;if(ye.length>0)for(let we=0,De=Ae.length;we<De;we++){const Be=Ae[we];Tu(j,ye,A,Be)}Q&&ue.render(A);for(let we=0,De=Ae.length;we<De;we++){const Be=Ae[we];bu(g,A,Be,Be.viewport)}}else ye.length>0&&Tu(j,ye,A,z),Q&&ue.render(A),bu(g,A,z);C!==null&&($.updateMultisampleRenderTarget(C),$.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(y,A,z),Oe.resetDefaultState(),U=-1,S=null,M.pop(),M.length>0?(m=M[M.length-1],ee===!0&&oe.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function Eu(A,z,Q,Y){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Xe.intersectsSprite(A)){Y&&B.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ge);const Ae=F.update(A),we=A.material;we.visible&&g.push(A,Ae,we,Q,B.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Xe.intersectsObject(A))){const Ae=F.update(A),we=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),B.copy(A.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),B.copy(Ae.boundingSphere.center)),B.applyMatrix4(A.matrixWorld).applyMatrix4(ge)),Array.isArray(we)){const De=Ae.groups;for(let Be=0,Ve=De.length;Be<Ve;Be++){const We=De[Be],_t=we[We.materialIndex];_t&&_t.visible&&g.push(A,Ae,_t,Q,B.z,We)}}else we.visible&&g.push(A,Ae,we,Q,B.z,null)}}const ye=A.children;for(let Ae=0,we=ye.length;Ae<we;Ae++)Eu(ye[Ae],z,Q,Y)}function bu(A,z,Q,Y){const j=A.opaque,ye=A.transmissive,Ae=A.transparent;m.setupLightsView(Q),ee===!0&&oe.setGlobalState(y.clippingPlanes,Q),Y&&R.viewport(x.copy(Y)),j.length>0&&sa(j,z,Q),ye.length>0&&sa(ye,z,Q),Ae.length>0&&sa(Ae,z,Q),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function Tu(A,z,Q,Y){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Y.id]===void 0&&(m.state.transmissionRenderTarget[Y.id]=new or(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float")?Go:Ii,minFilter:nr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const ye=m.state.transmissionRenderTarget[Y.id],Ae=Y.viewport||x;ye.setSize(Ae.z,Ae.w);const we=y.getRenderTarget();y.setRenderTarget(ye),y.getClearColor(L),X=y.getClearAlpha(),X<1&&y.setClearColor(16777215,.5),y.clear();const De=y.toneMapping;y.toneMapping=Ci;const Be=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),m.setupLightsView(Y),ee===!0&&oe.setGlobalState(y.clippingPlanes,Y),sa(A,Q,Y),$.updateMultisampleRenderTarget(ye),$.updateRenderTargetMipmap(ye),_e.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let We=0,_t=z.length;We<_t;We++){const Pt=z[We],Zt=Pt.object,Gn=Pt.geometry,Qe=Pt.material,ke=Pt.group;if(Qe.side===Jn&&Zt.layers.test(Y.layers)){const ss=Qe.side;Qe.side=Yt,Qe.needsUpdate=!0,Au(Zt,Q,Y,Gn,Qe,ke),Qe.side=ss,Qe.needsUpdate=!0,Ve=!0}}Ve===!0&&($.updateMultisampleRenderTarget(ye),$.updateRenderTargetMipmap(ye))}y.setRenderTarget(we),y.setClearColor(L,X),Be!==void 0&&(Y.viewport=Be),y.toneMapping=De}function sa(A,z,Q){const Y=z.isScene===!0?z.overrideMaterial:null;for(let j=0,ye=A.length;j<ye;j++){const Ae=A[j],we=Ae.object,De=Ae.geometry,Be=Y===null?Ae.material:Y,Ve=Ae.group;we.layers.test(Q.layers)&&Au(we,z,Q,De,Be,Ve)}}function Au(A,z,Q,Y,j,ye){A.onBeforeRender(y,z,Q,Y,j,ye),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(y,z,Q,Y,A,ye),j.transparent===!0&&j.side===Jn&&j.forceSinglePass===!1?(j.side=Yt,j.needsUpdate=!0,y.renderBufferDirect(Q,z,Y,j,A,ye),j.side=Li,j.needsUpdate=!0,y.renderBufferDirect(Q,z,Y,j,A,ye),j.side=Jn):y.renderBufferDirect(Q,z,Y,j,A,ye),A.onAfterRender(y,z,Q,Y,j,ye)}function aa(A,z,Q){z.isScene!==!0&&(z=fe);const Y=q.get(A),j=m.state.lights,ye=m.state.shadowsArray,Ae=j.state.version,we=G.getParameters(A,j.state,ye,z,Q),De=G.getProgramCacheKey(we);let Be=Y.programs;Y.environment=A.isMeshStandardMaterial?z.environment:null,Y.fog=z.fog,Y.envMap=(A.isMeshStandardMaterial?b:le).get(A.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Be===void 0&&(A.addEventListener("dispose",xe),Be=new Map,Y.programs=Be);let Ve=Be.get(De);if(Ve!==void 0){if(Y.currentProgram===Ve&&Y.lightsStateVersion===Ae)return Cu(A,we),Ve}else we.uniforms=G.getUniforms(A),A.onBuild(Q,we,y),A.onBeforeCompile(we,y),Ve=G.acquireProgram(we,De),Be.set(De,Ve),Y.uniforms=we.uniforms;const We=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(We.clippingPlanes=oe.uniform),Cu(A,we),Y.needsLights=rv(A),Y.lightsStateVersion=Ae,Y.needsLights&&(We.ambientLightColor.value=j.state.ambient,We.lightProbe.value=j.state.probe,We.directionalLights.value=j.state.directional,We.directionalLightShadows.value=j.state.directionalShadow,We.spotLights.value=j.state.spot,We.spotLightShadows.value=j.state.spotShadow,We.rectAreaLights.value=j.state.rectArea,We.ltc_1.value=j.state.rectAreaLTC1,We.ltc_2.value=j.state.rectAreaLTC2,We.pointLights.value=j.state.point,We.pointLightShadows.value=j.state.pointShadow,We.hemisphereLights.value=j.state.hemi,We.directionalShadowMap.value=j.state.directionalShadowMap,We.directionalShadowMatrix.value=j.state.directionalShadowMatrix,We.spotShadowMap.value=j.state.spotShadowMap,We.spotLightMatrix.value=j.state.spotLightMatrix,We.spotLightMap.value=j.state.spotLightMap,We.pointShadowMap.value=j.state.pointShadowMap,We.pointShadowMatrix.value=j.state.pointShadowMatrix),Y.currentProgram=Ve,Y.uniformsList=null,Ve}function wu(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=qa.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Cu(A,z){const Q=q.get(A);Q.outputColorSpace=z.outputColorSpace,Q.batching=z.batching,Q.instancing=z.instancing,Q.instancingColor=z.instancingColor,Q.instancingMorph=z.instancingMorph,Q.skinning=z.skinning,Q.morphTargets=z.morphTargets,Q.morphNormals=z.morphNormals,Q.morphColors=z.morphColors,Q.morphTargetsCount=z.morphTargetsCount,Q.numClippingPlanes=z.numClippingPlanes,Q.numIntersection=z.numClipIntersection,Q.vertexAlphas=z.vertexAlphas,Q.vertexTangents=z.vertexTangents,Q.toneMapping=z.toneMapping}function nv(A,z,Q,Y,j){z.isScene!==!0&&(z=fe),$.resetTextureUnits();const ye=z.fog,Ae=Y.isMeshStandardMaterial?z.environment:null,we=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Oi,De=(Y.isMeshStandardMaterial?b:le).get(Y.envMap||Ae),Be=Y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Ve=!!Q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),We=!!Q.morphAttributes.position,_t=!!Q.morphAttributes.normal,Pt=!!Q.morphAttributes.color;let Zt=Ci;Y.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Zt=y.toneMapping);const Gn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Qe=Gn!==void 0?Gn.length:0,ke=q.get(Y),ss=m.state.lights;if(ee===!0&&(me===!0||A!==S)){const on=A===S&&Y.id===U;oe.setState(Y,A,on)}let ct=!1;Y.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==ss.state.version||ke.outputColorSpace!==we||j.isBatchedMesh&&ke.batching===!1||!j.isBatchedMesh&&ke.batching===!0||j.isInstancedMesh&&ke.instancing===!1||!j.isInstancedMesh&&ke.instancing===!0||j.isSkinnedMesh&&ke.skinning===!1||!j.isSkinnedMesh&&ke.skinning===!0||j.isInstancedMesh&&ke.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&ke.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&ke.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&ke.instancingMorph===!1&&j.morphTexture!==null||ke.envMap!==De||Y.fog===!0&&ke.fog!==ye||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==oe.numPlanes||ke.numIntersection!==oe.numIntersection)||ke.vertexAlphas!==Be||ke.vertexTangents!==Ve||ke.morphTargets!==We||ke.morphNormals!==_t||ke.morphColors!==Pt||ke.toneMapping!==Zt||ke.morphTargetsCount!==Qe)&&(ct=!0):(ct=!0,ke.__version=Y.version);let Bi=ke.currentProgram;ct===!0&&(Bi=aa(Y,z,j));let Ru=!1,as=!1,qo=!1;const Lt=Bi.getUniforms(),ai=ke.uniforms;if(R.useProgram(Bi.program)&&(Ru=!0,as=!0,qo=!0),Y.id!==U&&(U=Y.id,as=!0),Ru||S!==A){Lt.setValue(D,"projectionMatrix",A.projectionMatrix),Lt.setValue(D,"viewMatrix",A.matrixWorldInverse);const on=Lt.map.cameraPosition;on!==void 0&&on.setValue(D,B.setFromMatrixPosition(A.matrixWorld)),w.logarithmicDepthBuffer&&Lt.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Lt.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,as=!0,qo=!0)}if(j.isSkinnedMesh){Lt.setOptional(D,j,"bindMatrix"),Lt.setOptional(D,j,"bindMatrixInverse");const on=j.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Lt.setValue(D,"boneTexture",on.boneTexture,$))}j.isBatchedMesh&&(Lt.setOptional(D,j,"batchingTexture"),Lt.setValue(D,"batchingTexture",j._matricesTexture,$));const Yo=Q.morphAttributes;if((Yo.position!==void 0||Yo.normal!==void 0||Yo.color!==void 0)&&Me.update(j,Q,Bi),(as||ke.receiveShadow!==j.receiveShadow)&&(ke.receiveShadow=j.receiveShadow,Lt.setValue(D,"receiveShadow",j.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(ai.envMap.value=De,ai.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&z.environment!==null&&(ai.envMapIntensity.value=z.environmentIntensity),as&&(Lt.setValue(D,"toneMappingExposure",y.toneMappingExposure),ke.needsLights&&iv(ai,qo),ye&&Y.fog===!0&&K.refreshFogUniforms(ai,ye),K.refreshMaterialUniforms(ai,Y,ne,te,m.state.transmissionRenderTarget[A.id]),qa.upload(D,wu(ke),ai,$)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(qa.upload(D,wu(ke),ai,$),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Lt.setValue(D,"center",j.center),Lt.setValue(D,"modelViewMatrix",j.modelViewMatrix),Lt.setValue(D,"normalMatrix",j.normalMatrix),Lt.setValue(D,"modelMatrix",j.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const on=Y.uniformsGroups;for(let jo=0,sv=on.length;jo<sv;jo++){const Pu=on[jo];Ge.update(Pu,Bi),Ge.bind(Pu,Bi)}}return Bi}function iv(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function rv(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,z,Q){q.get(A.texture).__webglTexture=z,q.get(A.depthTexture).__webglTexture=Q;const Y=q.get(A);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=Q===void 0,Y.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,z){const Q=q.get(A);Q.__webglFramebuffer=z,Q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,Q=0){C=A,P=z,E=Q;let Y=!0,j=null,ye=!1,Ae=!1;if(A){const De=q.get(A);De.__useDefaultFramebuffer!==void 0?(R.bindFramebuffer(D.FRAMEBUFFER,null),Y=!1):De.__webglFramebuffer===void 0?$.setupRenderTarget(A):De.__hasExternalTextures&&$.rebindTextures(A,q.get(A.texture).__webglTexture,q.get(A.depthTexture).__webglTexture);const Be=A.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Ae=!0);const Ve=q.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ve[z])?j=Ve[z][Q]:j=Ve[z],ye=!0):A.samples>0&&$.useMultisampledRTT(A)===!1?j=q.get(A).__webglMultisampledFramebuffer:Array.isArray(Ve)?j=Ve[Q]:j=Ve,x.copy(A.viewport),O.copy(A.scissor),I=A.scissorTest}else x.copy(he).multiplyScalar(ne).floor(),O.copy(Se).multiplyScalar(ne).floor(),I=Pe;if(R.bindFramebuffer(D.FRAMEBUFFER,j)&&Y&&R.drawBuffers(A,j),R.viewport(x),R.scissor(O),R.setScissorTest(I),ye){const De=q.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,De.__webglTexture,Q)}else if(Ae){const De=q.get(A.texture),Be=z||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,De.__webglTexture,Q||0,Be)}U=-1},this.readRenderTargetPixels=function(A,z,Q,Y,j,ye,Ae){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(we=we[Ae]),we){R.bindFramebuffer(D.FRAMEBUFFER,we);try{const De=A.texture,Be=De.format,Ve=De.type;if(!w.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!w.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-Y&&Q>=0&&Q<=A.height-j&&D.readPixels(z,Q,Y,j,be.convert(Be),be.convert(Ve),ye)}finally{const De=C!==null?q.get(C).__webglFramebuffer:null;R.bindFramebuffer(D.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(A,z,Q=0){const Y=Math.pow(2,-Q),j=Math.floor(z.image.width*Y),ye=Math.floor(z.image.height*Y);$.setTexture2D(z,0),D.copyTexSubImage2D(D.TEXTURE_2D,Q,0,0,A.x,A.y,j,ye),R.unbindTexture()},this.copyTextureToTexture=function(A,z,Q,Y=0){const j=z.image.width,ye=z.image.height,Ae=be.convert(Q.format),we=be.convert(Q.type);$.setTexture2D(Q,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,Q.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,Q.unpackAlignment),z.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Y,A.x,A.y,j,ye,Ae,we,z.image.data):z.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Y,A.x,A.y,z.mipmaps[0].width,z.mipmaps[0].height,Ae,z.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,Y,A.x,A.y,Ae,we,z.image),Y===0&&Q.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),R.unbindTexture()},this.copyTextureToTexture3D=function(A,z,Q,Y,j=0){const ye=A.max.x-A.min.x,Ae=A.max.y-A.min.y,we=A.max.z-A.min.z,De=be.convert(Y.format),Be=be.convert(Y.type);let Ve;if(Y.isData3DTexture)$.setTexture3D(Y,0),Ve=D.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)$.setTexture2DArray(Y,0),Ve=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,Y.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,Y.unpackAlignment);const We=D.getParameter(D.UNPACK_ROW_LENGTH),_t=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Pt=D.getParameter(D.UNPACK_SKIP_PIXELS),Zt=D.getParameter(D.UNPACK_SKIP_ROWS),Gn=D.getParameter(D.UNPACK_SKIP_IMAGES),Qe=Q.isCompressedTexture?Q.mipmaps[j]:Q.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Qe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Qe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,A.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,A.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,A.min.z),Q.isDataTexture||Q.isData3DTexture?D.texSubImage3D(Ve,j,z.x,z.y,z.z,ye,Ae,we,De,Be,Qe.data):Y.isCompressedArrayTexture?D.compressedTexSubImage3D(Ve,j,z.x,z.y,z.z,ye,Ae,we,De,Qe.data):D.texSubImage3D(Ve,j,z.x,z.y,z.z,ye,Ae,we,De,Be,Qe),D.pixelStorei(D.UNPACK_ROW_LENGTH,We),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_t),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Pt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Zt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Gn),j===0&&Y.generateMipmaps&&D.generateMipmap(Ve),R.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?$.setTextureCube(A,0):A.isData3DTexture?$.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?$.setTexture2DArray(A,0):$.setTexture2D(A,0),R.unbindTexture()},this.resetState=function(){P=0,E=0,C=null,R.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===gu?"display-p3":"srgb",n.unpackColorSpace=it.workingColorSpace===Wo?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class o1 extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class yu extends si{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],h=[];let v=0;const g=[],m=i/2;let p=0;M(),a===!1&&(e>0&&y(!0),n>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new rn(f,3)),this.setAttribute("normal",new rn(d,3)),this.setAttribute("uv",new rn(h,2));function M(){const T=new Z,P=new Z;let E=0;const C=(n-e)/i;for(let U=0;U<=s;U++){const S=[],x=U/s,O=x*(n-e)+e;for(let I=0;I<=r;I++){const L=I/r,X=L*l+o,J=Math.sin(X),te=Math.cos(X);P.x=O*J,P.y=-x*i+m,P.z=O*te,f.push(P.x,P.y,P.z),T.set(J,C,te).normalize(),d.push(T.x,T.y,T.z),h.push(L,1-x),S.push(v++)}g.push(S)}for(let U=0;U<r;U++)for(let S=0;S<s;S++){const x=g[S][U],O=g[S+1][U],I=g[S+1][U+1],L=g[S][U+1];u.push(x,O,L),u.push(O,I,L),E+=6}c.addGroup(p,E,0),p+=E}function y(T){const P=v,E=new Ke,C=new Z;let U=0;const S=T===!0?e:n,x=T===!0?1:-1;for(let I=1;I<=r;I++)f.push(0,m*x,0),d.push(0,x,0),h.push(.5,.5),v++;const O=v;for(let I=0;I<=r;I++){const X=I/r*l+o,J=Math.cos(X),te=Math.sin(X);C.x=S*te,C.y=m*x,C.z=S*J,f.push(C.x,C.y,C.z),d.push(0,x,0),E.x=J*.5+.5,E.y=te*.5*x+.5,h.push(E.x,E.y),v++}for(let I=0;I<r;I++){const L=P+I,X=O+I;T===!0?u.push(X,X+1,L):u.push(X+1,X,L),U+=3}c.addGroup(p,U,T===!0?1:2),p+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Su extends si{constructor(e=.5,n=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],u=[];let f=e;const d=(n-e)/r,h=new Z,v=new Ke;for(let g=0;g<=r;g++){for(let m=0;m<=i;m++){const p=s+m/i*a;h.x=f*Math.cos(p),h.y=f*Math.sin(p),l.push(h.x,h.y,h.z),c.push(0,0,1),v.x=(h.x/n+1)/2,v.y=(h.y/n+1)/2,u.push(v.x,v.y)}f+=d}for(let g=0;g<r;g++){const m=g*(i+1);for(let p=0;p<i;p++){const M=p+m,y=M,T=M+i+1,P=M+i+2,E=M+1;o.push(y,T,E),o.push(T,P,E)}}this.setIndex(o),this.setAttribute("position",new rn(l,3)),this.setAttribute("normal",new rn(c,3)),this.setAttribute("uv",new rn(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Su(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class l1 extends ia{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new je(16777215),this.specular=new je(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ug,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=mu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class c1 extends zt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class u1 extends c1{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pu);let bi,Qr,bn,ot,wc,Fn,za=null,$l=!1,ar=Mt(null);const ev="immersive-ar",f1=new yu(.1,.1,.2,32).translate(0,.1,0);function d1(){return y1(()=>{p1(),_1(),S1()}),{resetArSession:h1,addCylinder:g1,clearCylinders:m1,currentSession:ar}}const h1=()=>{var t,e,n,i;(e=(t=ar==null?void 0:ar.value)==null?void 0:t.end)==null||e.call(t),(n=ot==null?void 0:ot.setAnimationLoop)==null||n.call(ot,null),(i=ot==null?void 0:ot.dispose)==null||i.call(ot),bn=Qr=ot=wc=Fn=void 0,bi&&(bi.style.display="none",bi.removeChild(bi.lastChild))};function p1(){bi=document.getElementById("three-js-ar"),document.body.appendChild(bi),bn=new o1,Qr=new un(70,window.innerWidth/window.innerHeight,.01,20);const t=new u1(16777215,12303359,3);t.position.set(.5,1,.25),bn.add(t),ot=new a1({antialias:!0,alpha:!0}),ot.setPixelRatio(window.devicePixelRatio),ot.setSize(window.innerWidth,window.innerHeight),ot.xr.enabled=!0,bi.appendChild(ot.domElement),wc=ot.xr.getController(0),bn.add(wc),Fn=new En(new Su(.15,.2,32).rotateX(-Math.PI/2),new _u),Fn.matrixAutoUpdate=!1,Fn.visible=!1,bn.add(Fn),window.addEventListener("resize",v1)}const m1=()=>{const t=bn.getObjectsByProperty("test",null,[]);for(const e of t)bn.remove(e)},g1=()=>{if(Fn.visible){const t=new l1({color:16777215*Math.random()}),e=new En(f1,t);Fn.matrix.decompose(e.position,e.quaternion,e.scale),e.test=null,e.scale.y=Math.random()*2+1,bn.add(e)}};function v1(){Qr.aspect=window.innerWidth/window.innerHeight,Qr.updateProjectionMatrix(),ot.setSize(window.innerWidth,window.innerHeight)}function _1(){ot.setAnimationLoop(x1)}function x1(t,e){if(!(!ot||!bn||!e)){if(e){const n=ot.xr.getReferenceSpace(),i=ot.xr.getSession();if($l===!1&&(i.requestReferenceSpace("viewer").then(function(r){i.requestHitTestSource({space:r}).then(function(s){za=s})}),i.addEventListener("end",function(){$l=!1,za=null}),$l=!0),za){const r=e.getHitTestResults(za);if(r.length){const s=r[0];Fn.visible=!0,Fn.matrix.fromArray(s.getPose(n).transform.matrix)}else Fn.visible=!1}}bn&&Qr&&ot.render(bn,Qr)}}const y1=(t,e)=>{navigator.xr.isSessionSupported(ev).then(n=>{n?t():e(n)}).catch(n=>{console.warn(n)})},S1=()=>{function t(){ar.value.removeEventListener("end",t),e.domOverlay.root.style.display="none",ar.value=null}let e={requiredFeatures:["hit-test"],optionalFeatures:["dom-overlay"],domOverlay:{root:bi}};navigator.xr.requestSession(ev,e).then(async n=>{n.addEventListener("end",t),ot.xr.setReferenceSpaceType("local"),await ot.xr.setSession(n),ar.value=n})},M1={id:"three-js-ar"},E1=Xs({__name:"ThreeAR",setup(t){const e=Om();let n;ts(()=>{n=d1()});const i=a=>{n.resetArSession(),e.push("/")},r=()=>{var a;(a=n.addCylinder)==null||a.call(n)},s=()=>{var a;(a=n==null?void 0:n.clearCylinders)==null||a.call(n)};return(a,o)=>(Gr(),rc("div",M1,[W(As,{style:{margin:"5px"},variant:"text",density:"comfortable",icon:"mdi-circle",onClick:r}),W(As,{style:{margin:"5px 5px 5px 10px"},variant:"text",density:"comfortable",icon:"mdi-delete",onDblclick:s}),W(As,{style:{margin:"5px",float:"right"},variant:"text",density:"comfortable",icon:"mdi-close",onClick:i})]))}}),tv=[{path:"/",component:WM},{path:"/ar",component:E1}],b1=PS({history:sS(),routes:tv}),T1=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},A1=Ue({...ft(),...Em({fullHeight:!0}),...zn()},"VApp"),w1=et()({name:"VApp",props:A1(),setup(t,e){let{slots:n}=e;const i=Hn(t),{layoutClasses:r,getLayoutItem:s,items:a,layoutRef:o}=bm(t),{rtlClasses:l}=js();return dt(()=>W("div",{ref:o,class:["v-application",i.themeClasses.value,r.value,l.value,t.class],style:[t.style]},[W("div",{class:"v-application__wrap"},[W(xp,null,{default:()=>{var c;return[W(yt,null,[(c=n.default)==null?void 0:c.call(n)])]}})])])),{getLayoutItem:s,items:a,theme:i}}}),C1={};function R1(t,e){const n=r_("router-view");return Gr(),Gp(w1,{class:"bg-white"},{default:Ut(()=>[W(bg,null,{default:Ut(()=>[W(n)]),_:1})]),_:1})}const P1=T1(C1,[["render",R1]]),Mu=D0(P1);Cy(Mu);Mu.use(b1);Mu.mount("#app");
