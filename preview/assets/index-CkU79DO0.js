(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rc="186",Ws={ROTATE:0,DOLLY:1,PAN:2},Hs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Of=0,Sh=1,Ff=2,wr=1,zf=2,xr=3,ls=0,vn=1,Oe=2,si=0,br=1,Qo=2,wh=3,bh=4,Bf=5,Gs=100,kf=101,Gf=102,Hf=103,Vf=104,Wf=200,Xf=201,Yf=202,qf=203,_d=204,xd=205,Kf=206,Zf=207,Jf=208,$f=209,Qf=210,jf=211,tp=212,ep=213,np=214,Cl=0,Pl=1,Dl=2,Dr=3,Ll=4,Il=5,Nl=6,Ul=7,vd=0,ip=1,sp=2,ri=0,Cc=1,Pc=2,Dc=3,ua=4,Lc=5,Lr=6,Ir=7,yd=300,cs=301,Js=302,Er=303,Ca=304,da=306,On=1e3,Xn=1001,Ol=1002,sn=1003,rp=1004,jr=1005,Ye=1006,Pa=1007,Fi=1008,Cn=1009,Md=1010,Sd=1011,Nr=1012,Ic=1013,hi=1014,Pn=1015,on=1016,Nc=1017,Uc=1018,Ur=1020,wd=35902,bd=35899,Ed=1021,Td=1022,Yn=1023,Ei=1026,is=1027,Oc=1028,Fc=1029,hs=1030,zc=1031,Bc=1033,Bo=33776,ko=33777,Go=33778,Ho=33779,Fl=35840,zl=35841,Bl=35842,kl=35843,Gl=36196,Hl=37492,Vl=37496,Wl=37488,Xl=37489,jo=37490,Yl=37491,ql=37808,Kl=37809,Zl=37810,Jl=37811,$l=37812,Ql=37813,jl=37814,tc=37815,ec=37816,nc=37817,ic=37818,sc=37819,rc=37820,oc=37821,ac=36492,lc=36494,cc=36495,hc=36283,uc=36284,ta=36285,dc=36286,op=3200,fc=0,ap=1,Un="",ke="srgb",Or="srgb-linear",ea="linear",Ce="srgb",Da=7680,lp=519,cp=512,hp=513,up=514,kc=515,dp=516,fp=517,Gc=518,pp=519,Ad=35044,Eh="300 es",ii=2e3,Fr=2001;function mp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}const gp={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function to(i,t){return new gp[i](t)}function zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _p(){const i=zr("canvas");return i.style.display="block",i}const Th={};function na(...i){const t="THREE."+i.shift();console.log(t,...i)}function Rd(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function $t(...i){i=Rd(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function _e(...i){i=Rd(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Xs(...i){const t=i.join(" ");t in Th||(Th[t]=!0,$t(...i))}function xp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const vp={[Cl]:Pl,[Dl]:Nl,[Ll]:Ul,[Dr]:Il,[Pl]:Cl,[Nl]:Dl,[Ul]:Ll,[Il]:Dr};class ki{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ah=1234567;const Tr=Math.PI/180,$s=180/Math.PI;function oi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]+"-"+hn[t&255]+hn[t>>8&255]+"-"+hn[t>>16&15|64]+hn[t>>24&255]+"-"+hn[e&63|128]+hn[e>>8&255]+"-"+hn[e>>16&255]+hn[e>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function le(i,t,e){return Math.max(t,Math.min(e,i))}function Hc(i,t){return(i%t+t)%t}function yp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Mp(i,t,e){return i!==t?(e-i)/(t-i):0}function Ar(i,t,e){return(1-e)*i+e*t}function Sp(i,t,e,n){return Ar(i,t,1-Math.exp(-e*n))}function wp(i,t=1){return t-Math.abs(Hc(i,t*2)-t)}function bp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ep(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Tp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ap(i,t){return i+Math.random()*(t-i)}function Rp(i){return i*(.5-Math.random())}function Cp(i){i!==void 0&&(Ah=i);let t=Ah+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Pp(i){return i*Tr}function Dp(i){return i*$s}function Lp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Ip(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Np(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Up(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:$t("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Vn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Pe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ze={DEG2RAD:Tr,RAD2DEG:$s,generateUUID:oi,clamp:le,euclideanModulo:Hc,mapLinear:yp,inverseLerp:Mp,lerp:Ar,damp:Sp,pingpong:wp,smoothstep:bp,smootherstep:Ep,randInt:Tp,randFloat:Ap,randFloatSpread:Rp,seededRandom:Cp,degToRad:Pp,radToDeg:Dp,isPowerOfTwo:Lp,ceilPowerOfTwo:Ip,floorPowerOfTwo:Np,setQuaternionFromProperEuler:Up,normalize:Pe,denormalize:Vn},gh=class gh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};gh.prototype.isVector2=!0;let ut=gh;class Kn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(d!==v||l!==u||c!==f||h!==g){let p=l*u+c*f+h*g+d*v;p<0&&(u=-u,f=-f,g=-g,v=-v,p=-p);let m=1-a;if(p<.9995){const y=Math.acos(p),w=Math.sin(y);m=Math.sin(m*y)/w,a=Math.sin(a*y)/w,l=l*m+u*a,c=c*m+f*a,h=h*m+g*a,d=d*m+v*a}else{l=l*m+u*a,c=c*m+f*a,h=h*m+g*a,d=d*m+v*a;const y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-a*f,t[e+2]=c*g+h*f+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:$t("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const _h=class _h{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return La.copy(this).projectOnVector(t),this.sub(La)}reflect(t){return this.sub(La.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_h.prototype.isVector3=!0;let O=_h;const La=new O,Rh=new Kn,xh=class xh{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],v=s[0],p=s[3],m=s[6],y=s[1],w=s[4],_=s[7],M=s[2],b=s[5],R=s[8];return r[0]=o*v+a*y+l*M,r[3]=o*p+a*w+l*b,r[6]=o*m+a*_+l*R,r[1]=c*v+h*y+d*M,r[4]=c*p+h*w+d*b,r[7]=c*m+h*_+d*R,r[2]=u*v+f*y+g*M,r[5]=u*p+f*w+g*b,r[8]=u*m+f*_+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=u*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Xs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ia.makeScale(t,e)),this}rotate(t){return Xs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ia.makeRotation(-t)),this}translate(t,e){return Xs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ia.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};xh.prototype.isMatrix3=!0;let se=xh;const Ia=new se,Ch=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ph=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Op(){const i={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ce&&(s.r=bi(s.r),s.g=bi(s.g),s.b=bi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ce&&(s.r=Ys(s.r),s.g=Ys(s.g),s.b=Ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Un?ea:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Xs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Xs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Or]:{primaries:t,whitePoint:n,transfer:ea,toXYZ:Ch,fromXYZ:Ph,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:t,whitePoint:n,transfer:Ce,toXYZ:Ch,fromXYZ:Ph,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}}),i}const xe=Op();function bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Es;class Fp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Es===void 0&&(Es=zr("canvas")),Es.width=t.width,Es.height=t.height;const s=Es.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Es}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=zr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bi(e[n]/255)*255):e[n]=bi(e[n]);return{data:e,width:t.width,height:t.height}}else return $t("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let zp=0;class Vc{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=oi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Na(s[o].image)):r.push(Na(s[o]))}else r=Na(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Na(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:($t("Texture: Unable to serialize Texture."),{})}let Bp=0;const Ua=new O;class an extends ki{constructor(t=an.DEFAULT_IMAGE,e=an.DEFAULT_MAPPING,n=Xn,s=Xn,r=Ye,o=Fi,a=Yn,l=Cn,c=an.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=oi(),this.name="",this.source=new Vc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ua).x}get height(){return this.source.getSize(Ua).y}get depth(){return this.source.getSize(Ua).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){$t(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){$t(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case On:t.x=t.x-Math.floor(t.x);break;case Xn:t.x=t.x<0?0:1;break;case Ol:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case On:t.y=t.y-Math.floor(t.y);break;case Xn:t.y=t.y<0?0:1;break;case Ol:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=yd;an.DEFAULT_ANISOTROPY=1;const vh=class vh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,_=(f+1)/2,M=(m+1)/2,b=(h+u)/4,R=(d+v)/4,x=(g+p)/4;return w>_&&w>M?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=b/n,r=R/n):_>M?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=b/s,r=x/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=R/r,s=x/r),this.set(n,s,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(d-v)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};vh.prototype.isVector4=!0;let Ge=vh;class kp extends ki{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ge(0,0,t,e),this.scissorTest=!1,this.viewport=new Ge(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new an(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ye,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Vc(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yn extends kp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Cd extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gp extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const ha=class ha{constructor(t,e,n,s,r,o,a,l,c,h,d,u,f,g,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,f,g,v,p)}set(t,e,n,s,r,o,a,l,c,h,d,u,f,g,v,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ha().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Ts.setFromMatrixColumn(t,0).length(),r=1/Ts.setFromMatrixColumn(t,1).length(),o=1/Ts.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,f=o*d,g=a*h,v=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-v*c,e[9]=-a*l,e[2]=v-u*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u+v*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=v+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u-v*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=v-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,f=o*d,g=a*h,v=a*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-v*d}else if(t.order==="XZY"){const u=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hp,t,Vp)}lookAt(t,e,n){const s=this.elements;return An.subVectors(t,e),An.lengthSq()===0&&(An.z=1),An.normalize(),Pi.crossVectors(n,An),Pi.lengthSq()===0&&(Math.abs(n.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Pi.crossVectors(n,An)),Pi.normalize(),eo.crossVectors(An,Pi),s[0]=Pi.x,s[4]=eo.x,s[8]=An.x,s[1]=Pi.y,s[5]=eo.y,s[9]=An.y,s[2]=Pi.z,s[6]=eo.z,s[10]=An.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],v=n[6],p=n[10],m=n[14],y=n[3],w=n[7],_=n[11],M=n[15],b=s[0],R=s[4],x=s[8],S=s[12],E=s[1],T=s[5],C=s[9],P=s[13],L=s[2],I=s[6],N=s[10],z=s[14],G=s[3],U=s[7],k=s[11],X=s[15];return r[0]=o*b+a*E+l*L+c*G,r[4]=o*R+a*T+l*I+c*U,r[8]=o*x+a*C+l*N+c*k,r[12]=o*S+a*P+l*z+c*X,r[1]=h*b+d*E+u*L+f*G,r[5]=h*R+d*T+u*I+f*U,r[9]=h*x+d*C+u*N+f*k,r[13]=h*S+d*P+u*z+f*X,r[2]=g*b+v*E+p*L+m*G,r[6]=g*R+v*T+p*I+m*U,r[10]=g*x+v*C+p*N+m*k,r[14]=g*S+v*P+p*z+m*X,r[3]=y*b+w*E+_*L+M*G,r[7]=y*R+w*T+_*I+M*U,r[11]=y*x+w*C+_*N+M*k,r[15]=y*S+w*P+_*z+M*X,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],v=t[7],p=t[11],m=t[15],y=l*f-c*u,w=a*f-c*d,_=a*u-l*d,M=o*f-c*h,b=o*u-l*h,R=o*d-a*h;return e*(v*y-p*w+m*_)-n*(g*y-p*M+m*b)+s*(g*w-v*M+m*R)-r*(g*_-v*b+p*R)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],v=t[13],p=t[14],m=t[15],y=e*a-n*o,w=e*l-s*o,_=e*c-r*o,M=n*l-s*a,b=n*c-r*a,R=s*c-r*l,x=h*v-d*g,S=h*p-u*g,E=h*m-f*g,T=d*p-u*v,C=d*m-f*v,P=u*m-f*p,L=y*P-w*C+_*T+M*E-b*S+R*x;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/L;return t[0]=(a*P-l*C+c*T)*I,t[1]=(s*C-n*P-r*T)*I,t[2]=(v*R-p*b+m*M)*I,t[3]=(u*b-d*R-f*M)*I,t[4]=(l*E-o*P-c*S)*I,t[5]=(e*P-s*E+r*S)*I,t[6]=(p*_-g*R-m*w)*I,t[7]=(h*R-u*_+f*w)*I,t[8]=(o*C-a*E+c*x)*I,t[9]=(n*E-e*C-r*x)*I,t[10]=(g*b-v*_+m*y)*I,t[11]=(d*_-h*b-f*y)*I,t[12]=(a*S-o*T-l*x)*I,t[13]=(e*T-n*S+s*x)*I,t[14]=(v*w-g*M-p*y)*I,t[15]=(h*M-d*w+u*y)*I,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,v=o*h,p=o*d,m=a*d,y=l*c,w=l*h,_=l*d,M=n.x,b=n.y,R=n.z;return s[0]=(1-(v+m))*M,s[1]=(f+_)*M,s[2]=(g-w)*M,s[3]=0,s[4]=(f-_)*b,s[5]=(1-(u+m))*b,s[6]=(p+y)*b,s[7]=0,s[8]=(g+w)*R,s[9]=(p-y)*R,s[10]=(1-(u+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Ts.set(s[0],s[1],s[2]).length();const a=Ts.set(s[4],s[5],s[6]).length(),l=Ts.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Bn.copy(this);const c=1/o,h=1/a,d=1/l;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=d,Bn.elements[9]*=d,Bn.elements[10]*=d,e.setFromRotationMatrix(Bn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=ii,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===ii)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Fr)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ii,l=!1){const c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s);let g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===ii)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===Fr)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ha.prototype.isMatrix4=!0;let ae=ha;const Ts=new O,Bn=new ae,Hp=new O(0,0,0),Vp=new O(1,1,1),Pi=new O,eo=new O,An=new O,Dh=new ae,Lh=new Kn;class Mn{constructor(t=0,e=0,n=0,s=Mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-le(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:$t("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Dh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Dh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Lh.setFromEuler(this),this.setFromQuaternion(Lh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mn.DEFAULT_ORDER="XYZ";class Wc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Wp=0;const Ih=new O,As=new Kn,fi=new ae,no=new O,cr=new O,Xp=new O,Yp=new Kn,Nh=new O(1,0,0),Uh=new O(0,1,0),Oh=new O(0,0,1),Fh={type:"added"},qp={type:"removed"},Rs={type:"childadded",child:null},Oa={type:"childremoved",child:null};class ne extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ne.DEFAULT_UP.clone();const t=new O,e=new Mn,n=new Kn,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new se}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return As.setFromAxisAngle(t,e),this.quaternion.multiply(As),this}rotateOnWorldAxis(t,e){return As.setFromAxisAngle(t,e),this.quaternion.premultiply(As),this}rotateX(t){return this.rotateOnAxis(Nh,t)}rotateY(t){return this.rotateOnAxis(Uh,t)}rotateZ(t){return this.rotateOnAxis(Oh,t)}translateOnAxis(t,e){return Ih.copy(t).applyQuaternion(this.quaternion),this.position.add(Ih.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nh,t)}translateY(t){return this.translateOnAxis(Uh,t)}translateZ(t){return this.translateOnAxis(Oh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?no.copy(t):no.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(cr,no,this.up):fi.lookAt(no,cr,this.up),this.quaternion.setFromRotationMatrix(fi),s&&(fi.extractRotation(s.matrixWorld),As.setFromRotationMatrix(fi),this.quaternion.premultiply(As.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(_e("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fh),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null):_e("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qp),Oa.child=t,this.dispatchEvent(Oa),Oa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fi.multiply(t.parent.matrixWorld)),t.applyMatrix4(fi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fh),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,t,Xp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,Yp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ne.DEFAULT_UP=new O(0,1,0);ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Jt extends ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kp={type:"move"};class Fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Kp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},io={h:0,s:0,l:0};function za(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Nt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=xe.workingColorSpace){return this.r=t,this.g=e,this.b=n,xe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=xe.workingColorSpace){if(t=Hc(t,1),e=le(e,0,1),n=le(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=za(o,r,t+1/3),this.g=za(o,r,t),this.b=za(o,r,t-1/3)}return xe.colorSpaceToWorking(this,s),this}setStyle(t,e=ke){function n(r){r!==void 0&&parseFloat(r)<1&&$t("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:$t("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);$t("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){const n=Pd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):$t("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}copyLinearToSRGB(t){return this.r=Ys(t.r),this.g=Ys(t.g),this.b=Ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return xe.workingToColorSpace(un.copy(this),t),Math.round(le(un.r*255,0,255))*65536+Math.round(le(un.g*255,0,255))*256+Math.round(le(un.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.workingToColorSpace(un.copy(this),e);const n=un.r,s=un.g,r=un.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=xe.workingColorSpace){return xe.workingToColorSpace(un.copy(this),e),t.r=un.r,t.g=un.g,t.b=un.b,t}getStyle(t=ke){xe.workingToColorSpace(un.copy(this),t);const e=un.r,n=un.g,s=un.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Di),this.setHSL(Di.h+t,Di.s+e,Di.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Di),t.getHSL(io);const n=Ar(Di.h,io.h,e),s=Ar(Di.s,io.s,e),r=Ar(Di.l,io.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new Nt;Nt.NAMES=Pd;class Xc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Nt(t),this.near=e,this.far=n}clone(){return new Xc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Zp extends ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const kn=new O,pi=new O,Ba=new O,mi=new O,Cs=new O,Ps=new O,zh=new O,ka=new O,Ga=new O,Ha=new O,Va=new Ge,Wa=new Ge,Xa=new Ge;class Wn{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),kn.subVectors(t,e),s.cross(kn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){kn.subVectors(s,e),pi.subVectors(n,e),Ba.subVectors(t,e);const o=kn.dot(kn),a=kn.dot(pi),l=kn.dot(Ba),c=pi.dot(pi),h=pi.dot(Ba),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,mi.x),l.addScaledVector(o,mi.y),l.addScaledVector(a,mi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Va.setScalar(0),Wa.setScalar(0),Xa.setScalar(0),Va.fromBufferAttribute(t,e),Wa.fromBufferAttribute(t,n),Xa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Va,r.x),o.addScaledVector(Wa,r.y),o.addScaledVector(Xa,r.z),o}static isFrontFacing(t,e,n,s){return kn.subVectors(n,e),pi.subVectors(t,e),kn.cross(pi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return kn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),kn.cross(pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Wn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Wn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Wn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Wn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Wn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Cs.subVectors(s,n),Ps.subVectors(r,n),ka.subVectors(t,n);const l=Cs.dot(ka),c=Ps.dot(ka);if(l<=0&&c<=0)return e.copy(n);Ga.subVectors(t,s);const h=Cs.dot(Ga),d=Ps.dot(Ga);if(h>=0&&d<=h)return e.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Cs,o);Ha.subVectors(t,r);const f=Cs.dot(Ha),g=Ps.dot(Ha);if(g>=0&&f<=g)return e.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ps,a);const p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return zh.subVectors(r,s),a=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(zh,a);const m=1/(p+v+u);return o=v*m,a=u*m,e.copy(n).addScaledVector(Cs,o).addScaledVector(Ps,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Gi{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Gn):Gn.fromBufferAttribute(r,o),Gn.applyMatrix4(t.matrixWorld),this.expandByPoint(Gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),so.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),so.copy(n.boundingBox)),so.applyMatrix4(t.matrixWorld),this.union(so)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gn),Gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hr),ro.subVectors(this.max,hr),Ds.subVectors(t.a,hr),Ls.subVectors(t.b,hr),Is.subVectors(t.c,hr),Li.subVectors(Ls,Ds),Ii.subVectors(Is,Ls),Xi.subVectors(Ds,Is);let e=[0,-Li.z,Li.y,0,-Ii.z,Ii.y,0,-Xi.z,Xi.y,Li.z,0,-Li.x,Ii.z,0,-Ii.x,Xi.z,0,-Xi.x,-Li.y,Li.x,0,-Ii.y,Ii.x,0,-Xi.y,Xi.x,0];return!Ya(e,Ds,Ls,Is,ro)||(e=[1,0,0,0,1,0,0,0,1],!Ya(e,Ds,Ls,Is,ro))?!1:(oo.crossVectors(Li,Ii),e=[oo.x,oo.y,oo.z],Ya(e,Ds,Ls,Is,ro))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const gi=[new O,new O,new O,new O,new O,new O,new O,new O],Gn=new O,so=new Gi,Ds=new O,Ls=new O,Is=new O,Li=new O,Ii=new O,Xi=new O,hr=new O,ro=new O,oo=new O,Yi=new O;function Ya(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Yi.fromArray(i,r);const a=s.x*Math.abs(Yi.x)+s.y*Math.abs(Yi.y)+s.z*Math.abs(Yi.z),l=t.dot(Yi),c=e.dot(Yi),h=n.dot(Yi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const yi=Jp();function Jp(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function $p(i){Math.abs(i)>65504&&$t("DataUtils.toHalfFloat(): Value out of range."),i=le(i,-65504,65504),yi.floatView[0]=i;const t=yi.uint32View[0],e=t>>23&511;return yi.baseTable[e]+((t&8388607)>>yi.shiftTable[e])}function Qp(i){const t=i>>10;return yi.uint32View[0]=yi.mantissaTable[yi.offsetTable[t]+(i&1023)]+yi.exponentTable[t],yi.floatView[0]}class ao{static toHalfFloat(t){return $p(t)}static fromHalfFloat(t){return Qp(t)}}const qe=new O,lo=new ut;let jp=0;class Me extends ki{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ad,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)lo.fromBufferAttribute(this,e),lo.applyMatrix3(t),this.setXY(e,lo.x,lo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array),r=Pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Dd extends Me{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ld extends Me{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ee extends Me{constructor(t,e,n){super(new Float32Array(t),e,n)}}const t0=new Gi,ur=new O,qa=new O;class gs{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):t0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ur.subVectors(t,this.center);const e=ur.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ur,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ur.copy(t.center).add(qa)),this.expandByPoint(ur.copy(t.center).sub(qa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let e0=0;const In=new ae,Ka=new ne,Ns=new O,Rn=new Gi,dr=new Gi,tn=new O;class ge extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mp(t)?Ld:Dd)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new se().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return In.makeRotationFromQuaternion(t),this.applyMatrix4(In),this}rotateX(t){return In.makeRotationX(t),this.applyMatrix4(In),this}rotateY(t){return In.makeRotationY(t),this.applyMatrix4(In),this}rotateZ(t){return In.makeRotationZ(t),this.applyMatrix4(In),this}translate(t,e,n){return In.makeTranslation(t,e,n),this.applyMatrix4(In),this}scale(t,e,n){return In.makeScale(t,e,n),this.applyMatrix4(In),this}lookAt(t){return Ka.lookAt(t),Ka.updateMatrix(),this.applyMatrix4(Ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ee(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&$t("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){_e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Rn.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&_e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){_e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(Rn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];dr.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(Rn.min,dr.min),Rn.expandByPoint(tn),tn.addVectors(Rn.max,dr.max),Rn.expandByPoint(tn)):(Rn.expandByPoint(dr.min),Rn.expandByPoint(dr.max))}Rn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)tn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(tn));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)tn.fromBufferAttribute(a,c),l&&(Ns.fromBufferAttribute(t,c),tn.add(Ns)),s=Math.max(s,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&_e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){_e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Me(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new O,l[x]=new O;const c=new O,h=new O,d=new O,u=new ut,f=new ut,g=new ut,v=new O,p=new O;function m(x,S,E){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,E),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,E),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const T=1/(f.x*g.y-g.x*f.y);isFinite(T)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(T),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(T),a[x].add(v),a[S].add(v),a[E].add(v),l[x].add(p),l[S].add(p),l[E].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let x=0,S=y.length;x<S;++x){const E=y[x],T=E.start,C=E.count;for(let P=T,L=T+C;P<L;P+=3)m(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const w=new O,_=new O,M=new O,b=new O;function R(x){M.fromBufferAttribute(s,x),b.copy(M);const S=a[x];w.copy(S),w.sub(M.multiplyScalar(M.dot(S))).normalize(),_.crossVectors(b,S);const T=_.dot(l[x])<0?-1:1;o.setXYZW(x,w.x,w.y,w.z,T)}for(let x=0,S=y.length;x<S;++x){const E=y[x],T=E.start,C=E.count;for(let P=T,L=T+C;P<L;P+=3)R(t.getX(P+0)),R(t.getX(P+1)),R(t.getX(P+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,h=new O,d=new O;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),v=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)tn.fromBufferAttribute(t,e),tn.normalize(),t.setXYZ(e,tn.x,tn.y,tn.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let m=0;m<h;m++)u[g++]=c[f++]}return new Me(u,h,d)}if(this.index===null)return $t("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ge,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class n0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ad,this.updateRanges=[],this.version=0,this.uuid=oi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const pn=new O;class ia{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyMatrix4(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyNormalMatrix(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.transformDirection(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Vn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Vn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Vn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Vn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array),r=Pe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){na("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Me(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ia(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){na("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Za=new O,i0=new O,s0=new se;class vi{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Za.subVectors(n,e).cross(i0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Za),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||s0.getNormalMatrix(t),s=this.coplanarPoint(Za).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let r0=0;class er extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=oi(),this.name="",this.type="Material",this.blending=br,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_d,this.blendDst=xd,this.blendEquation=Gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Da,this.stencilZFail=Da,this.stencilZPass=Da,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){$t(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){$t(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Nt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new vi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ut().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ut().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const _i=new O,Ja=new O,co=new O,ho=new O;class fa{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_i)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=_i.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_i.copy(this.origin).addScaledVector(this.direction,e),_i.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ja.copy(t).add(e).multiplyScalar(.5),co.copy(e).sub(t).normalize(),ho.copy(this.origin).sub(Ja);const r=t.distanceTo(e)*.5,o=-this.direction.dot(co),a=ho.dot(this.direction),l=-ho.dot(co),c=ho.lengthSq(),h=Math.abs(1-o*o);let d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const v=1/h;d*=v,u*=v,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ja).addScaledVector(co,u),f}intersectSphere(t,e){if(t.radius<0)return null;_i.subVectors(t.center,this.origin);const n=_i.dot(this.direction),s=_i.dot(_i)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,_i)!==null}intersectTriangle(t,e,n,s,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,g=e.x-o.x,v=e.y-o.y,p=e.z-o.z,m=n.x-o.x,y=n.y-o.y,w=n.z-o.z,_=Math.abs(l),M=Math.abs(c),b=Math.abs(h);let R,x,S,E,T,C,P,L,I,N,z,G;if(_>=M&&_>=b?(S=l,C=d,I=g,G=m,l>=0?(R=c,x=h,E=u,T=f,P=v,L=p,N=y,z=w):(R=h,x=c,E=f,T=u,P=p,L=v,N=w,z=y)):M>=b?(S=c,C=u,I=v,G=y,c>=0?(R=h,x=l,E=f,T=d,P=p,L=g,N=w,z=m):(R=l,x=h,E=d,T=f,P=g,L=p,N=m,z=w)):(S=h,C=f,I=p,G=w,h>=0?(R=l,x=c,E=d,T=u,P=g,L=v,N=m,z=y):(R=c,x=l,E=u,T=d,P=v,L=g,N=y,z=m)),S===0)return null;const U=R/S,k=x/S,X=1/S,dt=E-U*C,yt=T-k*C,wt=P-U*I,bt=L-k*I,Qt=N-U*G,Q=z-k*G,nt=Qt*bt-Q*wt,W=dt*Q-yt*Qt,st=wt*yt-bt*dt;if(s){if(nt<0||W<0||st<0)return null}else if((nt<0||W<0||st<0)&&(nt>0||W>0||st>0))return null;const J=nt+W+st;if(J===0)return null;const ft=X*(nt*C+W*I+st*G);return(J>0?ft<0:ft>0)?null:this.at(ft/J,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zn extends er{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=vd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Bh=new ae,qi=new fa,uo=new gs,kh=new O,fo=new O,po=new O,mo=new O,$a=new O,go=new O,Gh=new O,_o=new O;class tt extends ne{constructor(t=new ge,e=new zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){go.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&($a.fromBufferAttribute(d,t),o?go.addScaledVector($a,h):go.addScaledVector($a.sub(e),h))}e.add(go)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(r),qi.copy(t.ray).recast(t.near),!(uo.containsPoint(qi.origin)===!1&&(qi.intersectSphere(uo,kh)===null||qi.origin.distanceToSquared(kh)>(t.far-t.near)**2))&&(Bh.copy(r).invert(),qi.copy(t.ray).applyMatrix4(Bh),!(n.boundingBox!==null&&qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const p=u[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),w=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let _=y,M=w;_<M;_+=3){const b=a.getX(_),R=a.getX(_+1),x=a.getX(_+2);s=xo(this,m,t,n,c,h,d,b,R,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const y=a.getX(p),w=a.getX(p+1),_=a.getX(p+2);s=xo(this,o,t,n,c,h,d,y,w,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const p=u[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),w=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let _=y,M=w;_<M;_+=3){const b=_,R=_+1,x=_+2;s=xo(this,m,t,n,c,h,d,b,R,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const y=p,w=p+1,_=p+2;s=xo(this,o,t,n,c,h,d,y,w,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function o0(i,t,e,n,s,r,o,a){let l;if(t.side===vn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ls,a),l===null)return null;_o.copy(a),_o.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(_o);return c<e.near||c>e.far?null:{distance:c,point:_o.clone(),object:i}}function xo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,fo),i.getVertexPosition(l,po),i.getVertexPosition(c,mo);const h=o0(i,t,e,n,fo,po,mo,Gh);if(h){const d=new O;Wn.getBarycoord(Gh,fo,po,mo,d),s&&(h.uv=Wn.getInterpolatedAttribute(s,a,l,c,d,new ut)),r&&(h.uv1=Wn.getInterpolatedAttribute(r,a,l,c,d,new ut)),o&&(h.normal=Wn.getInterpolatedAttribute(o,a,l,c,d,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new O,materialIndex:0};Wn.getNormal(fo,po,mo,u.normal),h.face=u,h.barycoord=d}return h}class sa extends an{constructor(t=null,e=1,n=1,s,r,o,a,l,c=sn,h=sn,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qs extends Me{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Us=new ae,Hh=new ae,vo=[],Vh=new Gi,a0=new ae,fr=new tt,pr=new gs;class ye extends tt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new qs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,a0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Gi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Us),Vh.copy(t.boundingBox).applyMatrix4(Us),this.boundingBox.union(Vh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new gs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Us),pr.copy(t.boundingSphere).applyMatrix4(Us),this.boundingSphere.union(pr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(fr.geometry=this.geometry,fr.material=this.material,fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pr.copy(this.boundingSphere),pr.applyMatrix4(n),t.ray.intersectsSphere(pr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Us),Hh.multiplyMatrices(n,Us),fr.matrixWorld=Hh,fr.raycast(t,vo);for(let o=0,a=vo.length;o<a;o++){const l=vo[o];l.instanceId=r,l.object=this,e.push(l)}vo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new qs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new sa(new Float32Array(s*this.count),s,this.count,Oc,Pn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ki=new gs,l0=new ut(.5,.5),yo=new O;class Yc{constructor(t=new vi,e=new vi,n=new vi,s=new vi,r=new vi,o=new vi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ii,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],v=r[9],p=r[10],m=r[11],y=r[12],w=r[13],_=r[14],M=r[15];if(s[0].setComponents(c-o,f-h,m-g,M-y).normalize(),s[1].setComponents(c+o,f+h,m+g,M+y).normalize(),s[2].setComponents(c+a,f+d,m+v,M+w).normalize(),s[3].setComponents(c-a,f-d,m-v,M-w).normalize(),n)s[4].setComponents(l,u,p,_).normalize(),s[5].setComponents(c-l,f-u,m-p,M-_).normalize();else if(s[4].setComponents(c-l,f-u,m-p,M-_).normalize(),e===ii)s[5].setComponents(c+l,f+u,m+p,M+_).normalize();else if(e===Fr)s[5].setComponents(l,u,p,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(t){Ki.center.set(0,0,0);const e=l0.distanceTo(t.center);return Ki.radius=.7071067811865476+e,Ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(yo.x=s.normal.x>0?t.max.x:t.min.x,yo.y=s.normal.y>0?t.max.y:t.min.y,yo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(yo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class os extends er{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Wh=new ae,pc=new fa,Mo=new gs,So=new O;class Ks extends ne{constructor(t=new ge,e=new os){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(s),Mo.radius+=r,t.ray.intersectsSphere(Mo)===!1)return;Wh.copy(s).invert(),pc.copy(t.ray).applyMatrix4(Wh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,v=f;g<v;g++){const p=c.getX(g);So.fromBufferAttribute(d,p),Xh(So,p,l,s,t,e,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,v=f;g<v;g++)So.fromBufferAttribute(d,g),Xh(So,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Xh(i,t,e,n,s,r,o){const a=pc.distanceSqToPoint(i);if(a<e){const l=new O;pc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Id extends an{constructor(t=[],e=cs,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class En extends an{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Br extends an{constructor(t,e,n=hi,s,r,o,a=sn,l=sn,c,h=Ei,d=1){if(h!==Ei&&h!==is)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Vc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class c0 extends Br{constructor(t,e=hi,n=cs,s,r,o=sn,a=sn,l,c=Ei){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Nd extends an{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Lt extends ge{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(d,2));function g(v,p,m,y,w,_,M,b,R,x,S){const E=_/R,T=M/x,C=_/2,P=M/2,L=b/2,I=R+1,N=x+1;let z=0,G=0;const U=new O;for(let k=0;k<N;k++){const X=k*T-P;for(let dt=0;dt<I;dt++){const yt=dt*E-C;U[v]=yt*y,U[p]=X*w,U[m]=L,c.push(U.x,U.y,U.z),U[v]=0,U[p]=0,U[m]=b>0?1:-1,h.push(U.x,U.y,U.z),d.push(dt/R),d.push(1-k/x),z+=1}}for(let k=0;k<x;k++)for(let X=0;X<R;X++){const dt=u+X+I*k,yt=u+X+I*(k+1),wt=u+(X+1)+I*(k+1),bt=u+(X+1)+I*k;l.push(dt,yt,bt),l.push(yt,wt,bt),G+=6}a.addGroup(f,G,S),f+=G,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Zn extends ge{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new O,h=new ut;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ee(o,3)),this.setAttribute("normal",new ee(a,3)),this.setAttribute("uv",new ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class me extends ge{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const v=[],p=n/2;let m=0;y(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ee(d,3)),this.setAttribute("normal",new ee(u,3)),this.setAttribute("uv",new ee(f,2));function y(){const _=new O,M=new O;let b=0;const R=(e-t)/n;for(let x=0;x<=r;x++){const S=[],E=x/r,T=E*(e-t)+t;for(let C=0;C<=s;C++){const P=C/s,L=P*l+a,I=Math.sin(L),N=Math.cos(L);M.x=T*I,M.y=-E*n+p,M.z=T*N,d.push(M.x,M.y,M.z),_.set(I,R,N).normalize(),u.push(_.x,_.y,_.z),f.push(P,1-E),S.push(g++)}v.push(S)}for(let x=0;x<s;x++)for(let S=0;S<r;S++){const E=v[S][x],T=v[S+1][x],C=v[S+1][x+1],P=v[S][x+1];(t>0||S!==0)&&(h.push(E,T,P),b+=3),(e>0||S!==r-1)&&(h.push(T,C,P),b+=3)}c.addGroup(m,b,0),m+=b}function w(_){const M=g,b=new ut,R=new O;let x=0;const S=_===!0?t:e,E=_===!0?1:-1;for(let C=1;C<=s;C++)d.push(0,p*E,0),u.push(0,E,0),f.push(.5,.5),g++;const T=g;for(let C=0;C<=s;C++){const L=C/s*l+a,I=Math.cos(L),N=Math.sin(L);R.x=S*N,R.y=p*E,R.z=S*I,d.push(R.x,R.y,R.z),u.push(0,E,0),b.x=I*.5+.5,b.y=N*.5*E+.5,f.push(b.x,b.y),g++}for(let C=0;C<s;C++){const P=M+C,L=T+C;_===!0?h.push(L,L+1,P):h.push(L+1,L,P),x+=3}c.addGroup(m,x,_===!0?1:2),m+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new me(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ai extends me{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ai(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class pa extends ge{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new ee(r,3)),this.setAttribute("normal",new ee(r.slice(),3)),this.setAttribute("uv",new ee(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const w=new O,_=new O,M=new O;for(let b=0;b<e.length;b+=3)f(e[b+0],w),f(e[b+1],_),f(e[b+2],M),l(w,_,M,y)}function l(y,w,_,M){const b=M+1,R=[];for(let x=0;x<=b;x++){R[x]=[];const S=y.clone().lerp(_,x/b),E=w.clone().lerp(_,x/b),T=b-x;for(let C=0;C<=T;C++)C===0&&x===b?R[x][C]=S:R[x][C]=S.clone().lerp(E,C/T)}for(let x=0;x<b;x++)for(let S=0;S<2*(b-x)-1;S++){const E=Math.floor(S/2);S%2===0?(u(R[x][E+1]),u(R[x+1][E]),u(R[x][E])):(u(R[x][E+1]),u(R[x+1][E+1]),u(R[x+1][E]))}}function c(y){const w=new O;for(let _=0;_<r.length;_+=3)w.x=r[_+0],w.y=r[_+1],w.z=r[_+2],w.normalize().multiplyScalar(y),r[_+0]=w.x,r[_+1]=w.y,r[_+2]=w.z}function h(){const y=new O;for(let w=0;w<r.length;w+=3){y.x=r[w+0],y.y=r[w+1],y.z=r[w+2];const _=p(y)/2/Math.PI+.5,M=m(y)/Math.PI+.5;o.push(_,1-M)}g(),d()}function d(){for(let y=0;y<o.length;y+=6){const w=o[y+0],_=o[y+2],M=o[y+4],b=Math.max(w,_,M),R=Math.min(w,_,M);b>.9&&R<.1&&(w<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),M<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,w){const _=y*3;w.x=t[_+0],w.y=t[_+1],w.z=t[_+2]}function g(){const y=new O,w=new O,_=new O,M=new O,b=new ut,R=new ut,x=new ut;for(let S=0,E=0;S<r.length;S+=9,E+=6){y.set(r[S+0],r[S+1],r[S+2]),w.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),b.set(o[E+0],o[E+1]),R.set(o[E+2],o[E+3]),x.set(o[E+4],o[E+5]),M.copy(y).add(w).add(_).divideScalar(3);const T=p(M);v(b,E+0,y,T),v(R,E+2,w,T),v(x,E+4,_,T)}}function v(y,w,_,M){M<0&&y.x===1&&(o[w]=y.x-1),_.x===0&&_.z===0&&(o[w]=M/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pa(t.vertices,t.indices,t.radius,t.detail)}}class qc extends pa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new qc(t.radius,t.detail)}}class ui{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){$t("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ut:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new O,s=[],r=[],o=[],a=new O,l=new ae;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new O)}r[0]=new O,o[0]=new O;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(le(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(le(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Kc extends ui{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ut){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class h0 extends Kc{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Zc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Yh=new O,qh=new O,Qa=new Zc,ja=new Zc,tl=new Zc;class u0 extends ui{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new O){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(qh.subVectors(s[0],s[1]).add(s[0]),c=qh);const d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Yh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Yh),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),Qa.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,v,p),ja.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,v,p),tl.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,v,p)}else this.curveType==="catmullrom"&&(Qa.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),ja.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),tl.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Qa.calc(l),ja.calc(l),tl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Kh(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function d0(i,t){const e=1-i;return e*e*t}function f0(i,t){return 2*(1-i)*i*t}function p0(i,t){return i*i*t}function Rr(i,t,e,n){return d0(i,t)+f0(i,e)+p0(i,n)}function m0(i,t){const e=1-i;return e*e*e*t}function g0(i,t){const e=1-i;return 3*e*e*i*t}function _0(i,t){return 3*(1-i)*i*i*t}function x0(i,t){return i*i*i*t}function Cr(i,t,e,n,s){return m0(i,t)+g0(i,e)+_0(i,n)+x0(i,s)}class Ud extends ui{constructor(t=new ut,e=new ut,n=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ut){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cr(t,s.x,r.x,o.x,a.x),Cr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class v0 extends ui{constructor(t=new O,e=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new O){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cr(t,s.x,r.x,o.x,a.x),Cr(t,s.y,r.y,o.y,a.y),Cr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Od extends ui{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class y0 extends ui{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fd extends ui{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Rr(t,s.x,r.x,o.x),Rr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ra extends ui{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Rr(t,s.x,r.x,o.x),Rr(t,s.y,r.y,o.y),Rr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zd extends ui{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Kh(a,l.x,c.x,h.x,d.x),Kh(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ut().fromArray(s))}return this}}var oa=Object.freeze({__proto__:null,ArcCurve:h0,CatmullRomCurve3:u0,CubicBezierCurve:Ud,CubicBezierCurve3:v0,EllipseCurve:Kc,LineCurve:Od,LineCurve3:y0,QuadraticBezierCurve:Fd,QuadraticBezierCurve3:ra,SplineCurve:zd});class M0 extends ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new oa[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new oa[s.type]().fromJSON(s))}return this}}class Zh extends M0{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Od(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Fd(this.currentPoint.clone(),new ut(t,e),new ut(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Ud(this.currentPoint.clone(),new ut(t,e),new ut(n,s),new ut(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new zd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new Kc(t,e,n,s,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class qr extends Zh{constructor(t){super(t),this.uuid=oi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Zh().fromJSON(s))}return this}}function S0(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Bd(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=A0(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,d=l;for(let u=e;u<s;u+=e){const f=i[u],g=i[u+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return kr(r,o,e,a,l,c,0),o}function Bd(i,t,e,n,s){let r;if(s===z0(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Jh(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Jh(o/n|0,i[o],i[o+1],r);return r&&Qs(r,r.next)&&(Hr(r),r=r.next),r}function us(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Qs(e,e.next)||He(e.prev,e,e.next)===0)){if(Hr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function kr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&L0(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?b0(i,n,s,r):w0(i)){t.push(l.i,i.i,c.i),Hr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=E0(us(i),t),kr(i,t,e,n,s,r,2)):o===2&&T0(i,t,e,n,s,r):kr(us(i),t,e,n,s,r,1);break}}}function w0(i){const t=i.prev,e=i,n=i.next;if(He(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&vr(s,a,r,l,o,c,g.x,g.y)&&He(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function b0(i,t,e,n){const s=i.prev,r=i,o=i.next;if(He(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),g=Math.min(h,d,u),v=Math.max(a,l,c),p=Math.max(h,d,u),m=mc(f,g,t,e,n),y=mc(v,p,t,e,n);let w=i.prevZ,_=i.nextZ;for(;w&&w.z>=m&&_&&_.z<=y;){if(w.x>=f&&w.x<=v&&w.y>=g&&w.y<=p&&w!==s&&w!==o&&vr(a,h,l,d,c,u,w.x,w.y)&&He(w.prev,w,w.next)>=0||(w=w.prevZ,_.x>=f&&_.x<=v&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&vr(a,h,l,d,c,u,_.x,_.y)&&He(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;w&&w.z>=m;){if(w.x>=f&&w.x<=v&&w.y>=g&&w.y<=p&&w!==s&&w!==o&&vr(a,h,l,d,c,u,w.x,w.y)&&He(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&vr(a,h,l,d,c,u,_.x,_.y)&&He(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function E0(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Qs(n,s)&&Gd(n,e,e.next,s)&&Gr(n,s)&&Gr(s,n)&&(t.push(n.i,e.i,s.i),Hr(e),Hr(e.next),e=i=s),e=e.next}while(e!==i);return us(e)}function T0(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&U0(o,a)){let l=Hd(o,a);o=us(o,o.next),l=us(l,l.next),kr(o,t,e,n,s,r,0),kr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function A0(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Bd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(N0(c))}s.sort(R0);for(let r=0;r<s.length;r++)e=C0(s[r],e);return e}function R0(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function C0(i,t){const e=P0(i,t);if(!e)return t;const n=Hd(e,i);return us(n,n.next),us(e,e.next)}function P0(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(Qs(i,e))return e;do{if(Qs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&kd(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const d=Math.abs(s-e.y)/(n-e.x);Gr(e,i)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&D0(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function D0(i,t){return He(i.prev,i,t.prev)<0&&He(t.next,i,i.next)<0}function L0(i,t,e,n){let s=i;do s.z===0&&(s.z=mc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,I0(s)}function I0(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function mc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function N0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function kd(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function vr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&kd(i,t,e,n,s,r,o,a)}function U0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!O0(i,t)&&(Gr(i,t)&&Gr(t,i)&&F0(i,t)&&(He(i.prev,i,t.prev)||He(i,t.prev,t))||Qs(i,t)&&He(i.prev,i,i.next)>0&&He(t.prev,t,t.next)>0)}function He(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Qs(i,t){return i.x===t.x&&i.y===t.y}function Gd(i,t,e,n){const s=bo(He(i,t,e)),r=bo(He(i,t,n)),o=bo(He(e,n,i)),a=bo(He(e,n,t));return!!(s!==r&&o!==a||s===0&&wo(i,e,t)||r===0&&wo(i,n,t)||o===0&&wo(e,i,n)||a===0&&wo(e,t,n))}function wo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function bo(i){return i>0?1:i<0?-1:0}function O0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Gd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Gr(i,t){return He(i.prev,i,i.next)<0?He(i,t,i.next)>=0&&He(i,i.prev,t)>=0:He(i,t,i.prev)<0||He(i,i.next,t)<0}function F0(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Hd(i,t){const e=gc(i.i,i.x,i.y),n=gc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Jh(i,t,e,n){const s=gc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Hr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function gc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function z0(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class B0{static triangulate(t,e,n=2){return S0(t,e,n)}}class Mi{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Mi.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];$h(t),Qh(n,t);let o=t.length;e.forEach($h);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Qh(n,e[l]);const a=B0.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function $h(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Qh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Jc extends ge{constructor(t=new qr([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new ee(s,3)),this.setAttribute("uv",new ee(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:k0;let w,_=!1,M,b,R,x;if(m){w=m.getSpacedPoints(h),_=!0,u=!1;const Z=m.isCatmullRomCurve3?m.closed:!1;M=m.computeFrenetFrames(h,Z),b=new O,R=new O,x=new O}u||(p=0,f=0,g=0,v=0);const S=a.extractPoints(c);let E=S.shape;const T=S.holes;if(!Mi.isClockWise(E)){E=E.reverse();for(let Z=0,j=T.length;Z<j;Z++){const it=T[Z];Mi.isClockWise(it)&&(T[Z]=it.reverse())}}function P(Z){const it=10000000000000001e-36;let ct=Z[0];for(let pt=1;pt<=Z.length;pt++){const _t=pt%Z.length,Mt=Z[_t],xt=Mt.x-ct.x,Ut=Mt.y-ct.y,B=xt*xt+Ut*Ut,jt=Math.max(Math.abs(Mt.x),Math.abs(Mt.y),Math.abs(ct.x),Math.abs(ct.y)),he=it*jt*jt;if(B<=he){Z.splice(_t,1),pt--;continue}ct=Mt}}P(E),T.forEach(P);const L=T.length,I=E;for(let Z=0;Z<L;Z++){const j=T[Z];E=E.concat(j)}function N(Z,j,it){return j||_e("ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(j,it)}const z=E.length;function G(Z,j,it){let ct,pt,_t;const Mt=Z.x-j.x,xt=Z.y-j.y,Ut=it.x-Z.x,B=it.y-Z.y,jt=Mt*Mt+xt*xt,he=Mt*B-xt*Ut;if(Math.abs(he)>Number.EPSILON){const F=Math.sqrt(jt),A=Math.sqrt(Ut*Ut+B*B),Y=j.x-xt/F,$=j.y+Mt/F,rt=it.x-B/A,St=it.y+Ut/A,Tt=((rt-Y)*B-(St-$)*Ut)/(Mt*B-xt*Ut);ct=Y+Mt*Tt-Z.x,pt=$+xt*Tt-Z.y;const ot=ct*ct+pt*pt;if(ot<=2)return new ut(ct,pt);_t=Math.sqrt(ot/2)}else{let F=!1;Mt>Number.EPSILON?Ut>Number.EPSILON&&(F=!0):Mt<-Number.EPSILON?Ut<-Number.EPSILON&&(F=!0):Math.sign(xt)===Math.sign(B)&&(F=!0),F?(ct=-xt,pt=Mt,_t=Math.sqrt(jt)):(ct=Mt,pt=xt,_t=Math.sqrt(jt/2))}return new ut(ct/_t,pt/_t)}const U=[];for(let Z=0,j=I.length,it=j-1,ct=Z+1;Z<j;Z++,it++,ct++)it===j&&(it=0),ct===j&&(ct=0),U[Z]=G(I[Z],I[it],I[ct]);const k=[];let X,dt=U.concat();for(let Z=0,j=L;Z<j;Z++){const it=T[Z];X=[];for(let ct=0,pt=it.length,_t=pt-1,Mt=ct+1;ct<pt;ct++,_t++,Mt++)_t===pt&&(_t=0),Mt===pt&&(Mt=0),X[ct]=G(it[ct],it[_t],it[Mt]);k.push(X),dt=dt.concat(X)}let yt;if(p===0)yt=Mi.triangulateShape(I,T);else{const Z=[],j=[];for(let it=0;it<p;it++){const ct=it/p,pt=f*Math.cos(ct*Math.PI/2),_t=g*Math.sin(ct*Math.PI/2)+v;for(let Mt=0,xt=I.length;Mt<xt;Mt++){const Ut=N(I[Mt],U[Mt],_t);W(Ut.x,Ut.y,-pt),ct===0&&Z.push(Ut)}for(let Mt=0,xt=L;Mt<xt;Mt++){const Ut=T[Mt];X=k[Mt];const B=[];for(let jt=0,he=Ut.length;jt<he;jt++){const F=N(Ut[jt],X[jt],_t);W(F.x,F.y,-pt),ct===0&&B.push(F)}ct===0&&j.push(B)}}yt=Mi.triangulateShape(Z,j)}const wt=yt.length,bt=g+v;for(let Z=0;Z<z;Z++){const j=u?N(E[Z],dt[Z],bt):E[Z];_?(R.copy(M.normals[0]).multiplyScalar(j.x),b.copy(M.binormals[0]).multiplyScalar(j.y),x.copy(w[0]).add(R).add(b),W(x.x,x.y,x.z)):W(j.x,j.y,0)}for(let Z=1;Z<=h;Z++)for(let j=0;j<z;j++){const it=u?N(E[j],dt[j],bt):E[j];_?(R.copy(M.normals[Z]).multiplyScalar(it.x),b.copy(M.binormals[Z]).multiplyScalar(it.y),x.copy(w[Z]).add(R).add(b),W(x.x,x.y,x.z)):W(it.x,it.y,d/h*Z)}for(let Z=p-1;Z>=0;Z--){const j=Z/p,it=f*Math.cos(j*Math.PI/2),ct=g*Math.sin(j*Math.PI/2)+v;for(let pt=0,_t=I.length;pt<_t;pt++){const Mt=N(I[pt],U[pt],ct);W(Mt.x,Mt.y,d+it)}for(let pt=0,_t=T.length;pt<_t;pt++){const Mt=T[pt];X=k[pt];for(let xt=0,Ut=Mt.length;xt<Ut;xt++){const B=N(Mt[xt],X[xt],ct);_?W(B.x,B.y+w[h-1].y,w[h-1].x+it):W(B.x,B.y,d+it)}}}Qt(),Q();function Qt(){const Z=s.length/3;if(u){let j=0,it=z*j;for(let ct=0;ct<wt;ct++){const pt=yt[ct];st(pt[2]+it,pt[1]+it,pt[0]+it)}j=h+p*2,it=z*j;for(let ct=0;ct<wt;ct++){const pt=yt[ct];st(pt[0]+it,pt[1]+it,pt[2]+it)}}else{for(let j=0;j<wt;j++){const it=yt[j];st(it[2],it[1],it[0])}for(let j=0;j<wt;j++){const it=yt[j];st(it[0]+z*h,it[1]+z*h,it[2]+z*h)}}n.addGroup(Z,s.length/3-Z,0)}function Q(){const Z=s.length/3;let j=0;nt(I,j),j+=I.length;for(let it=0,ct=T.length;it<ct;it++){const pt=T[it];nt(pt,j),j+=pt.length}n.addGroup(Z,s.length/3-Z,1)}function nt(Z,j){let it=Z.length;for(;--it>=0;){const ct=it;let pt=it-1;pt<0&&(pt=Z.length-1);for(let _t=0,Mt=h+p*2;_t<Mt;_t++){const xt=z*_t,Ut=z*(_t+1),B=j+ct+xt,jt=j+pt+xt,he=j+pt+Ut,F=j+ct+Ut;J(B,jt,he,F)}}}function W(Z,j,it){l.push(Z),l.push(j),l.push(it)}function st(Z,j,it){ft(Z),ft(j),ft(it);const ct=s.length/3,pt=y.generateTopUV(n,s,ct-3,ct-2,ct-1);gt(pt[0]),gt(pt[1]),gt(pt[2])}function J(Z,j,it,ct){ft(Z),ft(j),ft(ct),ft(j),ft(it),ft(ct);const pt=s.length/3,_t=y.generateSideWallUV(n,s,pt-6,pt-3,pt-2,pt-1);gt(_t[0]),gt(_t[1]),gt(_t[3]),gt(_t[1]),gt(_t[2]),gt(_t[3])}function ft(Z){s.push(l[Z*3+0]),s.push(l[Z*3+1]),s.push(l[Z*3+2])}function gt(Z){r.push(Z.x),r.push(Z.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return G0(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new oa[s.type]().fromJSON(s)),new Jc(n,t.options)}}const k0={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ut(r,o),new ut(a,l),new ut(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],g=t[s*3+2],v=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ut(o,1-l),new ut(c,1-d),new ut(u,1-g),new ut(v,1-m)]:[new ut(a,1-l),new ut(h,1-d),new ut(f,1-g),new ut(p,1-m)]}};function G0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Jn extends pa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Jn(t.radius,t.detail)}}class nr extends ge{constructor(t=[new ut(0,-.5),new ut(.5,0),new ut(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=le(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,d=new O,u=new ut,f=new O,g=new O,v=new O;let p=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-p,f.z=m*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let y=0;y<=e;y++){const w=n+y*h*s,_=Math.sin(w),M=Math.cos(w);for(let b=0;b<=t.length-1;b++){d.x=t[b].x*_,d.y=t[b].y,d.z=t[b].x*M,o.push(d.x,d.y,d.z),u.x=y/e,u.y=b/(t.length-1),a.push(u.x,u.y);const R=l[3*b+0]*_,x=l[3*b+1],S=l[3*b+0]*M;c.push(R,x,S)}}for(let y=0;y<e;y++)for(let w=0;w<t.length-1;w++){const _=w+y*t.length,M=_,b=_+t.length,R=_+t.length+1,x=_+1;r.push(M,b,x),r.push(R,x,b)}this.setIndex(r),this.setAttribute("position",new ee(o,3)),this.setAttribute("uv",new ee(a,2)),this.setAttribute("normal",new ee(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nr(t.points,t.segments,t.phiStart,t.phiLength)}}class Te extends ge{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],g=[],v=[],p=[];for(let m=0;m<h;m++){const y=m*u-o;for(let w=0;w<c;w++){const _=w*d-r;g.push(_,-y,0),v.push(0,0,1),p.push(w/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const w=y+c*m,_=y+c*(m+1),M=y+1+c*(m+1),b=y+1+c*m;f.push(w,_,b),f.push(_,M,b)}this.setIndex(f),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(v,3)),this.setAttribute("uv",new ee(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Te(t.width,t.height,t.widthSegments,t.heightSegments)}}class $c extends ge{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let d=t;const u=(e-t)/s,f=new O,g=new ut;for(let v=0;v<=s;v++){for(let p=0;p<=n;p++){const m=r+p/n*o;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let v=0;v<s;v++){const p=v*(n+1);for(let m=0;m<n;m++){const y=m+p,w=y,_=y+n+1,M=y+n+2,b=y+1;a.push(w,_,b),a.push(_,M,b)}}this.setIndex(a),this.setAttribute("position",new ee(l,3)),this.setAttribute("normal",new ee(c,3)),this.setAttribute("uv",new ee(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $c(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ma extends ge{constructor(t=new qr([new ut(0,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ee(s,3)),this.setAttribute("normal",new ee(r,3)),this.setAttribute("uv",new ee(o,2));function c(h){const d=s.length/3,u=h.extractPoints(e);let f=u.shape;const g=u.holes;Mi.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){const y=g[p];Mi.isClockWise(y)===!0&&(g[p]=y.reverse())}const v=Mi.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){const y=g[p];f=f.concat(y)}for(let p=0,m=f.length;p<m;p++){const y=f[p];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let p=0,m=v.length;p<m;p++){const y=v[p],w=y[0]+d,_=y[1]+d,M=y[2]+d;n.push(w,_,M),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return H0(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new ma(n,t.curveSegments)}}function H0(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class xn extends ge{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new O,u=new O,f=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){const y=[],w=m/n,_=o+w*a,M=t*Math.cos(_),b=Math.sqrt(t*t-M*M);let R=0;m===0&&o===0?R=.5/e:m===n&&l===Math.PI&&(R=-.5/e);for(let x=0;x<=e;x++){const S=x/e,E=s+S*r;d.x=-b*Math.cos(E),d.y=M,d.z=b*Math.sin(E),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),p.push(S+R,1-w),y.push(c++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){const w=h[m][y+1],_=h[m][y],M=h[m+1][y],b=h[m+1][y+1];(m!==0||o>0)&&f.push(w,_,b),(m!==n-1||l<Math.PI)&&f.push(_,M,b)}this.setIndex(f),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(v,3)),this.setAttribute("uv",new ee(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ir extends ge{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],h=[],d=[],u=new O,f=new O,g=new O;for(let v=0;v<=n;v++){const p=o+v/n*a;for(let m=0;m<=s;m++){const y=m/s*r;f.x=(t+e*Math.cos(p))*Math.cos(y),f.y=(t+e*Math.cos(p))*Math.sin(y),f.z=e*Math.sin(p),c.push(f.x,f.y,f.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(m/s),d.push(v/n)}}for(let v=1;v<=n;v++)for(let p=1;p<=s;p++){const m=(s+1)*v+p-1,y=(s+1)*(v-1)+p-1,w=(s+1)*(v-1)+p,_=(s+1)*v+p;l.push(m,y,_),l.push(y,w,_)}this.setIndex(l),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ir(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class aa extends ge{constructor(t=new ra(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new O,l=new O,c=new ut;let h=new O;const d=[],u=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new ee(d,3)),this.setAttribute("normal",new ee(u,3)),this.setAttribute("uv",new ee(f,2));function v(){for(let w=0;w<e;w++)p(w);p(r===!1?e:0),y(),m()}function p(w){h=t.getPointAt(w/e,h);const _=o.normals[w],M=o.binormals[w];for(let b=0;b<=s;b++){const R=b/s*Math.PI*2,x=Math.sin(R),S=-Math.cos(R);l.x=S*_.x+x*M.x,l.y=S*_.y+x*M.y,l.z=S*_.z+x*M.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function m(){for(let w=1;w<=e;w++)for(let _=1;_<=s;_++){const M=(s+1)*(w-1)+(_-1),b=(s+1)*w+(_-1),R=(s+1)*w+_,x=(s+1)*(w-1)+_;g.push(M,b,x),g.push(b,R,x)}}function y(){for(let w=0;w<=e;w++)for(let _=0;_<=s;_++)c.x=w/e,c.y=_/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new aa(new oa[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function js(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(jh(s))s.isRenderTargetTexture?($t("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(jh(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function mn(i){const t={};for(let e=0;e<i.length;e++){const n=js(i[e]);for(const s in n)t[s]=n[s]}return t}function jh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function V0(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Vd(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}const Vr={clone:js,merge:mn};var W0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,X0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rn extends er{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=W0,this.fragmentShader=X0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=js(t.uniforms),this.uniformsGroups=V0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Nt().setHex(s.value);break;case"v2":this.uniforms[n].value=new ut().fromArray(s.value);break;case"v3":this.uniforms[n].value=new O().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ge().fromArray(s.value);break;case"m3":this.uniforms[n].value=new se().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ae().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Wd extends rn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mt extends er{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fc,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Y0 extends er{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=op,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class q0 extends er{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Pr={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(tu(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!tu(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function tu(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class K0{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Z0=new K0;class _s{constructor(t){this.manager=t!==void 0?t:Z0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}_s.DEFAULT_MATERIAL_NAME="__DEFAULT";const xi={};class J0 extends Error{constructor(t,e){super(t),this.response=e}}class Qc extends _s{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Pr.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(xi[t]!==void 0){xi[t].push({onLoad:e,onProgress:n,onError:s});return}xi[t]=[],xi[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&$t("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=xi[t],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0;let v=0;const p=new ReadableStream({start(m){y();function y(){d.read().then(({done:w,value:_})=>{if(w)m.close();else{v+=_.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let b=0,R=h.length;b<R;b++){const x=h[b];x.onProgress&&x.onProgress(M)}m.enqueue(_),y()}},w=>{m.error(w)})}}});return new Response(p)}else throw new J0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Pr.add(`file:${t}`,c);const h=xi[t];delete xi[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=xi[t];if(h===void 0)throw this.manager.itemError(t),c;delete xi[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Os=new WeakMap;class $0 extends _s{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Pr.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let d=Os.get(o);d===void 0&&(d=[],Os.set(o,d)),d.push({onLoad:e,onError:s})}return o}const a=zr("img");function l(){h(),e&&e(this);const d=Os.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}Os.delete(this),r.manager.itemEnd(t)}function c(d){h(),s&&s(d),Pr.remove(`image:${t}`);const u=Os.get(this)||[];for(let f=0;f<u.length;f++){const g=u[f];g.onError&&g.onError(d)}Os.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Pr.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}}class Q0 extends _s{constructor(t){super(t)}load(t,e,n,s){const r=this,o=new sa,a=new Qc(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(t,function(l){let c;try{c=r.parse(l)}catch(h){s!==void 0?s(h):_e(h);return}r._applyTexData(o,c),e&&e(o,c)},n,s),o}createDataTexture(t){const e=new sa;return this._applyTexData(e,this.parse(t)),e}_applyTexData(t,e){e.image!==void 0?t.image=e.image:e.data!==void 0&&(t.image.width=e.width,t.image.height=e.height,t.image.data=e.data),t.wrapS=e.wrapS!==void 0?e.wrapS:Xn,t.wrapT=e.wrapT!==void 0?e.wrapT:Xn,t.magFilter=e.magFilter!==void 0?e.magFilter:Ye,t.minFilter=e.minFilter!==void 0?e.minFilter:Ye,t.anisotropy=e.anisotropy!==void 0?e.anisotropy:1,e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.mipmaps!==void 0&&(t.mipmaps=e.mipmaps,t.minFilter=Fi),e.mipmapCount===1&&(t.minFilter=Ye),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),t.needsUpdate=!0}}class ga extends _s{constructor(t){super(t)}load(t,e,n,s){const r=new an,o=new $0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class _a extends ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class j0 extends _a{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const el=new ae,eu=new O,nu=new O;class jc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yc,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;eu.setFromMatrixPosition(t.matrixWorld),e.position.copy(eu),nu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){el.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(el,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Fr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(el)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Eo=new O,To=new Kn,ti=new O;class Xd extends ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Eo,To,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Eo,To,ti.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Eo,To,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Eo,To,ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new O,iu=new ut,su=new ut;class wn extends Xd{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=$s*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Tr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $s*2*Math.atan(Math.tan(Tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z)}getViewSize(t,e){return this.getViewBounds(t,iu,su),e.subVectors(su,iu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Tr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class tm extends jc{constructor(){super(new wn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=$s*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class em extends _a{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ne.DEFAULT_UP),this.updateMatrix(),this.target=new ne,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new tm}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class nm extends jc{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0}}class th extends _a{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new nm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class xa extends Xd{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class im extends jc{constructor(){super(new xa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _c extends _a{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ne.DEFAULT_UP),this.updateMatrix(),this.target=new ne,this.shadow=new im}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class sm extends ge{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class rm extends _s{constructor(t){super(t)}load(t,e,n,s){const r=this,o=new Qc(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(l){s?s(l):_e(l),r.manager.itemError(t)}},n,s)}parse(t){const e={},n={};function s(f,g){if(e[g]!==void 0)return e[g];const p=f.interleavedBuffers[g],m=r(f,p.buffer),y=to(p.type,m),w=new n0(y,p.stride);return w.uuid=p.uuid,p.usage!==void 0&&w.setUsage(p.usage),e[g]=w,w}function r(f,g){if(n[g]!==void 0)return n[g];const p=f.arrayBuffers[g],m=new Uint32Array(p).buffer;return n[g]=m,m}const o=t.isInstancedBufferGeometry?new sm:new ge,a=t.data.index;if(a!==void 0){const f=to(a.type,a.array);o.setIndex(new Me(f,1))}const l=t.data.attributes;for(const f in l){const g=l[f];let v;if(g.isInterleavedBufferAttribute){const p=s(t.data,g.data);v=new ia(p,g.itemSize,g.offset,g.normalized)}else{const p=to(g.type,g.array),m=g.isInstancedBufferAttribute?qs:Me;v=new m(p,g.itemSize,g.normalized)}g.name!==void 0&&(v.name=g.name),g.usage!==void 0&&v.setUsage(g.usage),g.gpuType!==void 0&&(v.gpuType=g.gpuType),o.setAttribute(f,v)}const c=t.data.morphAttributes;if(c)for(const f in c){const g=c[f],v=[];for(let p=0,m=g.length;p<m;p++){const y=g[p];let w;if(y.isInterleavedBufferAttribute){const _=s(t.data,y.data);w=new ia(_,y.itemSize,y.offset,y.normalized)}else{const _=to(y.type,y.array);w=new Me(_,y.itemSize,y.normalized)}y.name!==void 0&&(w.name=y.name),y.usage!==void 0&&w.setUsage(y.usage),y.gpuType!==void 0&&(w.gpuType=y.gpuType),v.push(w)}o.morphAttributes[f]=v}t.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const d=t.data.groups||t.data.drawcalls||t.data.offsets;if(d!==void 0)for(let f=0,g=d.length;f!==g;++f){const v=d[f];o.addGroup(v.start,v.count,v.materialIndex)}const u=t.data.boundingSphere;return u!==void 0&&(o.boundingSphere=new gs().fromJSON(u)),t.name&&(o.name=t.name),t.userData&&(o.userData=t.userData),o}}let Ao;class Yd{static getContext(){return Ao===void 0&&(Ao=new(window.AudioContext||window.webkitAudioContext)),Ao}static setContext(t){Ao=t}}class ru extends _s{constructor(t){super(t)}load(t,e,n,s){const r=this,o=new Qc(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){try{const c=l.slice(0),h=Yd.getContext(),d=t+"#decode";r.manager.itemStart(d),h.decodeAudioData(c,function(u){e(u),r.manager.itemEnd(d)}).catch(function(u){a(u),r.manager.itemEnd(d)})}catch(c){a(c)}},n,s);function a(l){s?s(l):_e(l),r.manager.itemError(t)}}}const Fs=-90,zs=1;class om extends ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new wn(Fs,zs,t,e);s.layers=this.layers,this.add(s);const r=new wn(Fs,zs,t,e);r.layers=this.layers,this.add(r);const o=new wn(Fs,zs,t,e);o.layers=this.layers,this.add(o);const a=new wn(Fs,zs,t,e);a.layers=this.layers,this.add(a);const l=new wn(Fs,zs,t,e);l.layers=this.layers,this.add(l);const c=new wn(Fs,zs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===ii)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class am extends wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class eh{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=lm.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function lm(){this._document.hidden===!1&&this.reset()}const Zi=new O,nl=new Kn,cm=new O,Ji=new O,$i=new O;class hm extends ne{constructor(){super(),this.type="AudioListener",this.context=Yd.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new eh}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t),this._timer.update();const e=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(Zi,nl,cm),Ji.set(0,0,-1).applyQuaternion(nl),$i.set(0,1,0).applyQuaternion(nl),e.positionX){const n=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Zi.x,n),e.positionY.linearRampToValueAtTime(Zi.y,n),e.positionZ.linearRampToValueAtTime(Zi.z,n),e.forwardX.linearRampToValueAtTime(Ji.x,n),e.forwardY.linearRampToValueAtTime(Ji.y,n),e.forwardZ.linearRampToValueAtTime(Ji.z,n),e.upX.linearRampToValueAtTime($i.x,n),e.upY.linearRampToValueAtTime($i.y,n),e.upZ.linearRampToValueAtTime($i.z,n)}else e.setPosition(Zi.x,Zi.y,Zi.z),e.setOrientation(Ji.x,Ji.y,Ji.z,$i.x,$i.y,$i.z)}}class um extends ne{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){$t("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){$t("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){$t("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){$t("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){$t("Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?($t("Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){$t("Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}copy(t,e){return super.copy(t,e),t.sourceType!=="buffer"?($t("Audio: Audio source type cannot be copied."),this):(this.autoplay=t.autoplay,this.buffer=t.buffer,this.detune=t.detune,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.offset=t.offset,this.duration=t.duration,this.playbackRate=t.playbackRate,this.hasPlaybackControl=t.hasPlaybackControl,this.sourceType=t.sourceType,this.filters=t.filters.slice(),this)}clone(t){return new this.constructor(this.listener).copy(this,t)}}const Qi=new O,ou=new Kn,dm=new O,ji=new O;class fm extends um{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Qi,ou,dm),ji.set(0,0,1).applyQuaternion(ou);const e=this.panner;if(e.positionX){const n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(Qi.x,n),e.positionY.linearRampToValueAtTime(Qi.y,n),e.positionZ.linearRampToValueAtTime(Qi.z,n),e.orientationX.linearRampToValueAtTime(ji.x,n),e.orientationY.linearRampToValueAtTime(ji.y,n),e.orientationZ.linearRampToValueAtTime(ji.z,n)}else e.setPosition(Qi.x,Qi.y,Qi.z),e.setOrientation(ji.x,ji.y,ji.z)}}const au=new ae;class pm{constructor(t,e,n=0,s=1/0){this.ray=new fa(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Wc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):_e("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return au.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(au),this}intersectObject(t,e=!0,n=[]){return xc(t,this,n,e),n.sort(lu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)xc(t[s],this,n,e);return n.sort(lu),n}}function lu(i,t){return i.distance-t.distance}function xc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)xc(r[o],t,e,!0)}}class cu{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=le(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(le(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const yh=class yh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};yh.prototype.isMatrix2=!0;let hu=yh;class mm extends ki{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function uu(i,t,e,n){const s=gm(n);switch(e){case Ed:return i*t;case Oc:return i*t/s.components*s.byteLength;case Fc:return i*t/s.components*s.byteLength;case hs:return i*t*2/s.components*s.byteLength;case zc:return i*t*2/s.components*s.byteLength;case Td:return i*t*3/s.components*s.byteLength;case Yn:return i*t*4/s.components*s.byteLength;case Bc:return i*t*4/s.components*s.byteLength;case Bo:case ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Go:case Ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zl:case kl:return Math.max(i,16)*Math.max(t,8)/4;case Fl:case Bl:return Math.max(i,8)*Math.max(t,8)/2;case Gl:case Hl:case Wl:case Xl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Vl:case jo:case Yl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ql:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Kl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Zl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case $l:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ql:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case jl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case tc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ec:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case nc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ic:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case sc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case rc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case oc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ac:case lc:case cc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case hc:case uc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ta:case dc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function gm(i){switch(i){case Cn:case Md:return{byteLength:1,components:1};case Nr:case Sd:case on:return{byteLength:2,components:1};case Nc:case Uc:return{byteLength:2,components:4};case hi:case Ic:case Pn:return{byteLength:4,components:1};case wd:case bd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rc}}));typeof window<"u"&&(window.__THREE__?$t("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function qd(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function _m(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var xm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vm=`#ifdef USE_ALPHAHASH
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
#endif`,ym=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bm=`#ifdef USE_AOMAP
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
#endif`,Em=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Am=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dm=`#ifdef USE_IRIDESCENCE
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
#endif`,Lm=`#ifdef USE_BUMPMAP
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
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Om=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Bm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,km=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Gm=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Hm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vm=`vec3 transformedNormal = objectNormal;
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
#endif`,Wm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ym=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Km="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,$m=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Qm=`#ifdef USE_ENVMAP
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
#endif`,jm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,eg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ng=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ig=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rg=`#ifdef USE_GRADIENTMAP
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
}`,og=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ag=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cg=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,hg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ug=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,gg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_g=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Mg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Eg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ag=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rg=`#if defined( USE_POINTS_UV )
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
#endif`,Cg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ig=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ng=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,Ug=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Og=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Fg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Gg=`#ifdef USE_NORMALMAP
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
#endif`,Hg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Kg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$g=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,t_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,e_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,n_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,i_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,s_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r_=`#ifdef USE_SKINNING
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
#endif`,o_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a_=`#ifdef USE_SKINNING
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
#endif`,l_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,h_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u_=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,d_=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,f_=`#ifdef USE_TRANSMISSION
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
#endif`,p_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,__=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const x_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v_=`uniform sampler2D t2D;
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
}`,y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b_=`#include <common>
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
}`,E_=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,T_=`#define DISTANCE
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
}`,A_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,R_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P_=`uniform float scale;
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
}`,D_=`uniform vec3 diffuse;
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
}`,L_=`#include <common>
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
}`,I_=`uniform vec3 diffuse;
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
}`,N_=`#define LAMBERT
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
}`,U_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,O_=`#define MATCAP
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
}`,F_=`#define MATCAP
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
}`,z_=`#define NORMAL
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
}`,B_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,k_=`#define PHONG
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
}`,G_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,H_=`#define STANDARD
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
}`,V_=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,W_=`#define TOON
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
}`,X_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Y_=`uniform float size;
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
}`,q_=`uniform vec3 diffuse;
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
}`,K_=`#include <common>
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
}`,Z_=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,J_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,$_=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:xm,alphahash_pars_fragment:vm,alphamap_fragment:ym,alphamap_pars_fragment:Mm,alphatest_fragment:Sm,alphatest_pars_fragment:wm,aomap_fragment:bm,aomap_pars_fragment:Em,batching_pars_vertex:Tm,batching_vertex:Am,begin_vertex:Rm,beginnormal_vertex:Cm,bsdfs:Pm,iridescence_fragment:Dm,bumpmap_pars_fragment:Lm,clipping_planes_fragment:Im,clipping_planes_pars_fragment:Nm,clipping_planes_pars_vertex:Um,clipping_planes_vertex:Om,color_fragment:Fm,color_pars_fragment:zm,color_pars_vertex:Bm,color_vertex:km,common:Gm,cube_uv_reflection_fragment:Hm,defaultnormal_vertex:Vm,displacementmap_pars_vertex:Wm,displacementmap_vertex:Xm,emissivemap_fragment:Ym,emissivemap_pars_fragment:qm,colorspace_fragment:Km,colorspace_pars_fragment:Zm,envmap_fragment:Jm,envmap_common_pars_fragment:$m,envmap_pars_fragment:Qm,envmap_pars_vertex:jm,envmap_physical_pars_fragment:hg,envmap_vertex:tg,fog_vertex:eg,fog_pars_vertex:ng,fog_fragment:ig,fog_pars_fragment:sg,gradientmap_pars_fragment:rg,lightmap_pars_fragment:og,lights_lambert_fragment:ag,lights_lambert_pars_fragment:lg,lights_pars_begin:cg,lights_toon_fragment:ug,lights_toon_pars_fragment:dg,lights_phong_fragment:fg,lights_phong_pars_fragment:pg,lights_physical_fragment:mg,lights_physical_pars_fragment:gg,lights_fragment_begin:_g,lights_fragment_maps:xg,lights_fragment_end:vg,lightprobes_pars_fragment:yg,logdepthbuf_fragment:Mg,logdepthbuf_pars_fragment:Sg,logdepthbuf_pars_vertex:wg,logdepthbuf_vertex:bg,map_fragment:Eg,map_pars_fragment:Tg,map_particle_fragment:Ag,map_particle_pars_fragment:Rg,metalnessmap_fragment:Cg,metalnessmap_pars_fragment:Pg,morphinstance_vertex:Dg,morphcolor_vertex:Lg,morphnormal_vertex:Ig,morphtarget_pars_vertex:Ng,morphtarget_vertex:Ug,normal_fragment_begin:Og,normal_fragment_maps:Fg,normal_pars_fragment:zg,normal_pars_vertex:Bg,normal_vertex:kg,normalmap_pars_fragment:Gg,clearcoat_normal_fragment_begin:Hg,clearcoat_normal_fragment_maps:Vg,clearcoat_pars_fragment:Wg,iridescence_pars_fragment:Xg,opaque_fragment:Yg,packing:qg,premultiplied_alpha_fragment:Kg,project_vertex:Zg,dithering_fragment:Jg,dithering_pars_fragment:$g,roughnessmap_fragment:Qg,roughnessmap_pars_fragment:jg,shadowmap_pars_fragment:t_,shadowmap_pars_vertex:e_,shadowmap_vertex:n_,shadowmask_pars_fragment:i_,skinbase_vertex:s_,skinning_pars_vertex:r_,skinning_vertex:o_,skinnormal_vertex:a_,specularmap_fragment:l_,specularmap_pars_fragment:c_,tonemapping_fragment:h_,tonemapping_pars_fragment:u_,transmission_fragment:d_,transmission_pars_fragment:f_,uv_pars_fragment:p_,uv_pars_vertex:m_,uv_vertex:g_,worldpos_vertex:__,background_vert:x_,background_frag:v_,backgroundCube_vert:y_,backgroundCube_frag:M_,cube_vert:S_,cube_frag:w_,depth_vert:b_,depth_frag:E_,distance_vert:T_,distance_frag:A_,equirect_vert:R_,equirect_frag:C_,linedashed_vert:P_,linedashed_frag:D_,meshbasic_vert:L_,meshbasic_frag:I_,meshlambert_vert:N_,meshlambert_frag:U_,meshmatcap_vert:O_,meshmatcap_frag:F_,meshnormal_vert:z_,meshnormal_frag:B_,meshphong_vert:k_,meshphong_frag:G_,meshphysical_vert:H_,meshphysical_frag:V_,meshtoon_vert:W_,meshtoon_frag:X_,points_vert:Y_,points_frag:q_,shadow_vert:K_,shadow_frag:Z_,sprite_vert:J_,sprite_frag:$_},Ot={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},ni={basic:{uniforms:mn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:mn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Nt(0)},envMapIntensity:{value:1}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:mn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:mn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:mn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Nt(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:mn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:mn([Ot.points,Ot.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:mn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:mn([Ot.common,Ot.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:mn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:mn([Ot.sprite,Ot.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distance:{uniforms:mn([Ot.common,Ot.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distance_vert,fragmentShader:fe.distance_frag},shadow:{uniforms:mn([Ot.lights,Ot.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};ni.physical={uniforms:mn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const Ro={r:0,b:0,g:0},Q_=new ae,Kd=new se;Kd.set(-1,0,0,0,1,0,0,0,1);function j_(i,t,e,n,s,r){const o=new Nt(0);let a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){const _=y.backgroundBlurriness>0;w=t.get(w,_)}return w}function g(y){let w=!1;const _=f(y);_===null?p(o,a):_&&_.isColor&&(p(_,1),w=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(y,w){const _=f(w);_&&(_.isCubeTexture||_.mapping===da)?(c===void 0&&(c=new tt(new Lt(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:js(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Q_.makeRotationFromEuler(w.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Kd),c.material.toneMapped=xe.getTransfer(_.colorSpace)!==Ce,(h!==_||d!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new tt(new Te(2,2),new rn({name:"BackgroundMaterial",uniforms:js(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=xe.getTransfer(_.colorSpace)!==Ce,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,w){y.getRGB(Ro,Vd(i)),e.buffers.color.setClear(Ro.r,Ro.g,Ro.b,w,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,w=1){o.set(y),a=w,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,p(o,a)},render:g,addToRenderList:v,dispose:m}}function tx(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,o=!1;function a(T,C,P,L,I){let N=!1;const z=d(T,L,P,C);r!==z&&(r=z,c(r.object)),N=f(T,L,P,I),N&&g(T,L,P,I),I!==null&&t.update(I,i.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,_(T,C,P,L),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function l(){return i.createVertexArray()}function c(T){return i.bindVertexArray(T)}function h(T){return i.deleteVertexArray(T)}function d(T,C,P,L){const I=L.wireframe===!0;let N=n[C.id];N===void 0&&(N={},n[C.id]=N);const z=T.isInstancedMesh===!0?T.id:0;let G=N[z];G===void 0&&(G={},N[z]=G);let U=G[P.id];U===void 0&&(U={},G[P.id]=U);let k=U[I];return k===void 0&&(k=u(l()),U[I]=k),k}function u(T){const C=[],P=[],L=[];for(let I=0;I<e;I++)C[I]=0,P[I]=0,L[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:P,attributeDivisors:L,object:T,attributes:{},index:null}}function f(T,C,P,L){const I=r.attributes,N=C.attributes;let z=0;const G=P.getAttributes();for(const U in G)if(G[U].location>=0){const X=I[U];let dt=N[U];if(dt===void 0&&(U==="instanceMatrix"&&T.instanceMatrix&&(dt=T.instanceMatrix),U==="instanceColor"&&T.instanceColor&&(dt=T.instanceColor)),X===void 0||X.attribute!==dt||dt&&X.data!==dt.data)return!0;z++}return r.attributesNum!==z||r.index!==L}function g(T,C,P,L){const I={},N=C.attributes;let z=0;const G=P.getAttributes();for(const U in G)if(G[U].location>=0){let X=N[U];X===void 0&&(U==="instanceMatrix"&&T.instanceMatrix&&(X=T.instanceMatrix),U==="instanceColor"&&T.instanceColor&&(X=T.instanceColor));const dt={};dt.attribute=X,X&&X.data&&(dt.data=X.data),I[U]=dt,z++}r.attributes=I,r.attributesNum=z,r.index=L}function v(){const T=r.newAttributes;for(let C=0,P=T.length;C<P;C++)T[C]=0}function p(T){m(T,0)}function m(T,C){const P=r.newAttributes,L=r.enabledAttributes,I=r.attributeDivisors;P[T]=1,L[T]===0&&(i.enableVertexAttribArray(T),L[T]=1),I[T]!==C&&(i.vertexAttribDivisor(T,C),I[T]=C)}function y(){const T=r.newAttributes,C=r.enabledAttributes;for(let P=0,L=C.length;P<L;P++)C[P]!==T[P]&&(i.disableVertexAttribArray(P),C[P]=0)}function w(T,C,P,L,I,N,z){z===!0?i.vertexAttribIPointer(T,C,P,I,N):i.vertexAttribPointer(T,C,P,L,I,N)}function _(T,C,P,L){v();const I=L.attributes,N=P.getAttributes(),z=C.defaultAttributeValues;for(const G in N){const U=N[G];if(U.location>=0){let k=I[G];if(k===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(k=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(k=T.instanceColor)),k!==void 0){const X=k.normalized,dt=k.itemSize,yt=t.get(k);if(yt===void 0)continue;const wt=yt.buffer,bt=yt.type,Qt=yt.bytesPerElement,Q=bt===i.INT||bt===i.UNSIGNED_INT||k.gpuType===Ic;if(k.isInterleavedBufferAttribute){const nt=k.data,W=nt.stride,st=k.offset;if(nt.isInstancedInterleavedBuffer){for(let J=0;J<U.locationSize;J++)m(U.location+J,nt.meshPerAttribute);T.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let J=0;J<U.locationSize;J++)p(U.location+J);i.bindBuffer(i.ARRAY_BUFFER,wt);for(let J=0;J<U.locationSize;J++)w(U.location+J,dt/U.locationSize,bt,X,W*Qt,(st+dt/U.locationSize*J)*Qt,Q)}else{if(k.isInstancedBufferAttribute){for(let nt=0;nt<U.locationSize;nt++)m(U.location+nt,k.meshPerAttribute);T.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let nt=0;nt<U.locationSize;nt++)p(U.location+nt);i.bindBuffer(i.ARRAY_BUFFER,wt);for(let nt=0;nt<U.locationSize;nt++)w(U.location+nt,dt/U.locationSize,bt,X,dt*Qt,dt/U.locationSize*nt*Qt,Q)}}else if(z!==void 0){const X=z[G];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(U.location,X);break;case 3:i.vertexAttrib3fv(U.location,X);break;case 4:i.vertexAttrib4fv(U.location,X);break;default:i.vertexAttrib1fv(U.location,X)}}}}y()}function M(){S();for(const T in n){const C=n[T];for(const P in C){const L=C[P];for(const I in L){const N=L[I];for(const z in N)h(N[z].object),delete N[z];delete L[I]}}delete n[T]}}function b(T){if(n[T.id]===void 0)return;const C=n[T.id];for(const P in C){const L=C[P];for(const I in L){const N=L[I];for(const z in N)h(N[z].object),delete N[z];delete L[I]}}delete n[T.id]}function R(T){for(const C in n){const P=n[C];for(const L in P){const I=P[L];if(I[T.id]===void 0)continue;const N=I[T.id];for(const z in N)h(N[z].object),delete N[z];delete I[T.id]}}}function x(T){for(const C in n){const P=n[C],L=T.isInstancedMesh===!0?T.id:0,I=P[L];if(I!==void 0){for(const N in I){const z=I[N];for(const G in z)h(z[G].object),delete z[G];delete I[N]}delete P[L],Object.keys(P).length===0&&delete n[C]}}}function S(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:S,resetDefaultState:E,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:p,disableUnusedAttributes:y}}function ex(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function nx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Yn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const x=R===on&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Cn&&R!==Pn&&!x&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&($t("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&$t("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:_,maxSamples:M,samples:b}}function ix(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new vi,a=new se,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const y=r?0:n,w=y*4;let _=m.clippingState||null;l.value=_,_=h(g,u,w,f);for(let M=0;M!==w;++M)_[M]=e[M];m.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const m=f+v*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let w=0,_=f;w!==v;++w,_+=4)o.copy(d[w]).applyMatrix4(y,a),o.normal.toArray(p,_),p[_+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}const Vs=4,sx=6,rx=20,ox=256,mr=new xa,du=new Nt;let il=null,sl=0,rl=0,ol=!1;const ax=new O,ts=new O;class la{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=ax}=r;il=this._renderer.getRenderTarget(),sl=this._renderer.getActiveCubeFace(),rl=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(il,sl,rl),this._renderer.xr.enabled=ol,t.scissorTest=!1,Bs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cs||t.mapping===Js?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),il=this._renderer.getRenderTarget(),sl=this._renderer.getActiveCubeFace(),rl=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:on,format:Yn,colorSpace:Or,depthBuffer:!1},s=fu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fu(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=lx(r)),this._blurMaterial=hx(r,t,e),this._ggxMaterial=cx(r,t,e)}return s}_compileMaterial(t){const e=new tt(new ge,t);this._renderer.compile(e,mr)}_sceneToCubeUV(t,e,n,s,r){const l=new wn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(du),d.toneMapping=ri,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new tt(new Lt,new zn({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,p=v.material;let m=!1;const y=t.background;y?y.isColor&&(p.color.copy(y),t.background=null,m=!0):(p.color.copy(du),m=!0);for(let w=0;w<6;w++){const _=w%3;_===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):_===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));const M=this._cubeSize;Bs(s,_*M,w>2?M:0,M,M),d.setRenderTarget(s),m&&d.render(v,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===cs||t.mapping===Js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=mu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Bs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,mr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,v=this._sizeLods[n],p=3*v*(n>g-Vs?n-g+Vs:0),m=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,Bs(r,p,m,3*v,2*v),s.setRenderTarget(r),s.render(a,mr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Bs(t,p,m,3*v,2*v),s.setRenderTarget(t),s.render(a,mr)}_blur(t,e,n,s){const r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;const c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[s],d=3*h*(s>this._lodMax-Vs?s-this._lodMax+Vs:0),u=4*(this._cubeSize-h);Bs(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,mr)}}function lx(i){const t=[],e=[];let n=i;const s=i-Vs+1+sx;for(let r=0;r<s;r++){const o=Math.pow(2,n);t.push(o);const a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),v=new Float32Array(f*u*d);for(let m=0;m<d;m++){const y=m%3*2/3-1,w=m>2?0:-1,_=[y,w,0,y+2/3,w,0,y+2/3,w+1,0,y,w,0,y+2/3,w+1,0,y,w+1,0];g.set(_,f*u*m);for(let M=0;M<u;M++){const b=h[M*2]*2-1,R=h[M*2+1]*2-1;m===0?ts.set(1,R,b):m===1?ts.set(-b,1,-R):m===2?ts.set(-b,R,1):m===3?ts.set(-1,R,-b):m===4?ts.set(-b,-1,R):ts.set(b,R,-1),ts.toArray(v,(m*u+M)*f)}}const p=new ge;p.setAttribute("position",new Me(g,f)),p.setAttribute("outputDirection",new Me(v,f)),e.push(new tt(p,null)),n>Vs&&n--}return{lodMeshes:e,sizeLods:t}}function fu(i,t,e){const n=new yn(i,t,e);return n.texture.mapping=da,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function cx(i,t,e){return new rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ox,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:va(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function hx(i,t,e){return new rn({name:"SphericalGaussianBlur",defines:{SAMPLES:rx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:va(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function pu(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:va(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function mu(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function va(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Zd extends yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Id(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Lt(5,5,5),r=new rn({name:"CubemapFromEquirect",uniforms:js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:si});r.uniforms.tEquirect.value=e;const o=new tt(s,r),a=e.minFilter;return e.minFilter===Fi&&(e.minFilter=Ye),new om(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}function ux(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===Er||f===Ca)if(t.has(u)){const g=t.get(u).texture;return a(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const v=new Zd(g.height);return v.fromEquirectangularTexture(i,u),t.set(u,v),u.addEventListener("dispose",c),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const f=u.mapping,g=f===Er||f===Ca,v=f===cs||f===Js;if(g||v){let p=e.get(u);const m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new la(i)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{const y=u.image;return g&&y&&y.height>0||v&&y&&l(y)?(n===null&&(n=new la(i)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,f){return f===Er?u.mapping=cs:f===Ca&&(u.mapping=Js),u}function l(u){let f=0;const g=6;for(let v=0;v<g;v++)u[v]!==void 0&&f++;return f===g}function c(u){const f=u.target;f.removeEventListener("dispose",c);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function dx(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Xs("WebGLRenderer: "+n+" extension not supported."),s}}}function fx(i,t,e,n){const s={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,g=d.attributes.position;let v=0;if(g===void 0)return;if(f!==null){const y=f.array;v=f.version;for(let w=0,_=y.length;w<_;w+=3){const M=y[w+0],b=y[w+1],R=y[w+2];u.push(M,b,b,R,R,M)}}else{const y=g.array;v=g.version;for(let w=0,_=y.length/3-1;w<_;w+=3){const M=w+0,b=w+1,R=w+2;u.push(M,b,b,R,R,M)}}const p=new(g.count>=65535?Ld:Dd)(u,1);p.version=v;const m=r.get(d);m&&t.remove(m),r.set(d,p)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function px(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let v=0;for(let p=0;p<f;p++)v+=u[p];e.update(v,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function mx(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:_e("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function gx(i,t,e){const n=new WeakMap,s=new Ge;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let E=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",E)};var f=E;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),p===!0&&(_=3);let M=a.attributes.position.count*_,b=1;M>t.maxTextureSize&&(b=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const R=new Float32Array(M*b*4*d),x=new Cd(R,M,b,d);x.type=Pn,x.needsUpdate=!0;const S=_*4;for(let T=0;T<d;T++){const C=m[T],P=y[T],L=w[T],I=M*b*4*T;for(let N=0;N<C.count;N++){const z=N*S;g===!0&&(s.fromBufferAttribute(C,N),R[I+z+0]=s.x,R[I+z+1]=s.y,R[I+z+2]=s.z,R[I+z+3]=0),v===!0&&(s.fromBufferAttribute(P,N),R[I+z+4]=s.x,R[I+z+5]=s.y,R[I+z+6]=s.z,R[I+z+7]=0),p===!0&&(s.fromBufferAttribute(L,N),R[I+z+8]=s.x,R[I+z+9]=s.y,R[I+z+10]=s.z,R[I+z+11]=L.itemSize===4?s.w:1)}}u={count:d,texture:x,size:new ut(M,b)},n.set(a,u),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function _x(i,t,e,n,s){let r=new WeakMap;function o(c){const h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const xx={[Cc]:"LINEAR_TONE_MAPPING",[Pc]:"REINHARD_TONE_MAPPING",[Dc]:"CINEON_TONE_MAPPING",[ua]:"ACES_FILMIC_TONE_MAPPING",[Lr]:"AGX_TONE_MAPPING",[Ir]:"NEUTRAL_TONE_MAPPING",[Lc]:"CUSTOM_TONE_MAPPING"};function vx(i,t,e,n,s,r){const o=new yn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new ge;c.setAttribute("position",new ee([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ee([0,2,0,0,2,0],2));const h=new Wd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new tt(c,h),u=new xa(-1,1,1,-1,0,1);let f=null,g=null,v=!1,p,m=null,y=[],w=!1;this.setSize=function(_,M){o.setSize(_,M),a!==null&&a.setSize(_,M),l!==null&&l.setSize(_,M);for(let b=0;b<y.length;b++){const R=y[b];R.setSize&&R.setSize(_,M)}},this.setEffects=function(_){y=_,w=y.length>0&&y[0].isRenderPass===!0;const M=o.width,b=o.height;y.length>0&&a===null&&(a=new yn(M,b,{type:on,depthBuffer:!1,stencilBuffer:!1}),l=new yn(M,b,{type:on,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<y.length;R++){const x=y[R];x.setSize&&x.setSize(M,b)}},this.begin=function(_,M){if(v||_.toneMapping===ri&&y.length===0)return!1;if(m=M,M!==null){const b=M.width,R=M.height;(o.width!==b||o.height!==R)&&this.setSize(b,R)}return w===!1&&_.setRenderTarget(o),p=_.toneMapping,_.toneMapping=ri,!0},this.hasRenderPass=function(){return w},this.end=function(_,M){_.toneMapping=p,v=!0;let b=o,R=a;for(let x=0;x<y.length;x++){const S=y[x];S.enabled!==!1&&(S.render(_,R,b,M),S.needsSwap!==!1&&(b=R,R=R===a?l:a))}if(f!==_.outputColorSpace||g!==_.toneMapping){f=_.outputColorSpace,g=_.toneMapping,h.defines={},xe.getTransfer(f)===Ce&&(h.defines.SRGB_TRANSFER="");const x=xx[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,_.setRenderTarget(m),_.render(d,u),m=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const Jd=new an,vc=new Br(1,1),$d=new Cd,Qd=new Gp,jd=new Id,gu=[],_u=[],xu=new Float32Array(16),vu=new Float32Array(9),yu=new Float32Array(4);function sr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=gu[s];if(r===void 0&&(r=new Float32Array(s),gu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function $e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Qe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ya(i,t){let e=_u[t];e===void 0&&(e=new Int32Array(t),_u[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function yx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Mx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2fv(this.addr,t),Qe(e,t)}}function Sx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($e(e,t))return;i.uniform3fv(this.addr,t),Qe(e,t)}}function wx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4fv(this.addr,t),Qe(e,t)}}function bx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Qe(e,t)}else{if($e(e,n))return;yu.set(n),i.uniformMatrix2fv(this.addr,!1,yu),Qe(e,n)}}function Ex(i,t){const e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Qe(e,t)}else{if($e(e,n))return;vu.set(n),i.uniformMatrix3fv(this.addr,!1,vu),Qe(e,n)}}function Tx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Qe(e,t)}else{if($e(e,n))return;xu.set(n),i.uniformMatrix4fv(this.addr,!1,xu),Qe(e,n)}}function Ax(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Rx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2iv(this.addr,t),Qe(e,t)}}function Cx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;i.uniform3iv(this.addr,t),Qe(e,t)}}function Px(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4iv(this.addr,t),Qe(e,t)}}function Dx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Lx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2uiv(this.addr,t),Qe(e,t)}}function Ix(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;i.uniform3uiv(this.addr,t),Qe(e,t)}}function Nx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4uiv(this.addr,t),Qe(e,t)}}function Ux(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(vc.compareFunction=e.isReversedDepthBuffer()?Gc:kc,r=vc):r=Jd,e.setTexture2D(t||r,s)}function Ox(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Qd,s)}function Fx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||jd,s)}function zx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||$d,s)}function Bx(i){switch(i){case 5126:return yx;case 35664:return Mx;case 35665:return Sx;case 35666:return wx;case 35674:return bx;case 35675:return Ex;case 35676:return Tx;case 5124:case 35670:return Ax;case 35667:case 35671:return Rx;case 35668:case 35672:return Cx;case 35669:case 35673:return Px;case 5125:return Dx;case 36294:return Lx;case 36295:return Ix;case 36296:return Nx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ux;case 35679:case 36299:case 36307:return Ox;case 35680:case 36300:case 36308:case 36293:return Fx;case 36289:case 36303:case 36311:case 36292:return zx}}function kx(i,t){i.uniform1fv(this.addr,t)}function Gx(i,t){const e=sr(t,this.size,2);i.uniform2fv(this.addr,e)}function Hx(i,t){const e=sr(t,this.size,3);i.uniform3fv(this.addr,e)}function Vx(i,t){const e=sr(t,this.size,4);i.uniform4fv(this.addr,e)}function Wx(i,t){const e=sr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Xx(i,t){const e=sr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Yx(i,t){const e=sr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function qx(i,t){i.uniform1iv(this.addr,t)}function Kx(i,t){i.uniform2iv(this.addr,t)}function Zx(i,t){i.uniform3iv(this.addr,t)}function Jx(i,t){i.uniform4iv(this.addr,t)}function $x(i,t){i.uniform1uiv(this.addr,t)}function Qx(i,t){i.uniform2uiv(this.addr,t)}function jx(i,t){i.uniform3uiv(this.addr,t)}function tv(i,t){i.uniform4uiv(this.addr,t)}function ev(i,t,e){const n=this.cache,s=t.length,r=ya(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=vc:o=Jd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function nv(i,t,e){const n=this.cache,s=t.length,r=ya(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Qd,r[o])}function iv(i,t,e){const n=this.cache,s=t.length,r=ya(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||jd,r[o])}function sv(i,t,e){const n=this.cache,s=t.length,r=ya(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||$d,r[o])}function rv(i){switch(i){case 5126:return kx;case 35664:return Gx;case 35665:return Hx;case 35666:return Vx;case 35674:return Wx;case 35675:return Xx;case 35676:return Yx;case 5124:case 35670:return qx;case 35667:case 35671:return Kx;case 35668:case 35672:return Zx;case 35669:case 35673:return Jx;case 5125:return $x;case 36294:return Qx;case 36295:return jx;case 36296:return tv;case 35678:case 36198:case 36298:case 36306:case 35682:return ev;case 35679:case 36299:case 36307:return nv;case 35680:case 36300:case 36308:case 36293:return iv;case 36289:case 36303:case 36311:case 36292:return sv}}class ov{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Bx(e.type)}}class av{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=rv(e.type)}}class lv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const al=/(\w+)(\])?(\[|\.)?/g;function Mu(i,t){i.seq.push(t),i.map[t.id]=t}function cv(i,t,e){const n=i.name,s=n.length;for(al.lastIndex=0;;){const r=al.exec(n),o=al.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Mu(e,c===void 0?new ov(a,i,t):new av(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new lv(a),Mu(e,d)),e=d}}}class Vo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);cv(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Su(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const hv=37297;let uv=0;function dv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const wu=new se;function fv(i){xe._getMatrix(wu,xe.workingColorSpace,i);const t=`mat3( ${wu.elements.map(e=>e.toFixed(4))} )`;switch(xe.getTransfer(i)){case ea:return[t,"LinearTransferOETF"];case Ce:return[t,"sRGBTransferOETF"];default:return $t("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function bu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+dv(i.getShaderSource(t),a)}else return r}function pv(i,t){const e=fv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const mv={[Cc]:"Linear",[Pc]:"Reinhard",[Dc]:"Cineon",[ua]:"ACESFilmic",[Lr]:"AgX",[Ir]:"Neutral",[Lc]:"Custom"};function gv(i,t){const e=mv[t];return e===void 0?($t("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Co=new O;function _v(){xe.getLuminanceCoefficients(Co);const i=Co.x.toFixed(4),t=Co.y.toFixed(4),e=Co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yr).join(`
`)}function vv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function yv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function yr(i){return i!==""}function Eu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Mv=/^[ \t]*#include +<([\w\d./]+)>/gm;function yc(i){return i.replace(Mv,wv)}const Sv=new Map;function wv(i,t){let e=fe[t];if(e===void 0){const n=Sv.get(t);if(n!==void 0)e=fe[n],$t('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return yc(e)}const bv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Au(i){return i.replace(bv,Ev)}function Ev(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ru(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Tv={[wr]:"SHADOWMAP_TYPE_PCF",[xr]:"SHADOWMAP_TYPE_VSM"};function Av(i){return Tv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Rv={[cs]:"ENVMAP_TYPE_CUBE",[Js]:"ENVMAP_TYPE_CUBE",[da]:"ENVMAP_TYPE_CUBE_UV"};function Cv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Rv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Pv={[Js]:"ENVMAP_MODE_REFRACTION"};function Dv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Pv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Lv={[vd]:"ENVMAP_BLENDING_MULTIPLY",[ip]:"ENVMAP_BLENDING_MIX",[sp]:"ENVMAP_BLENDING_ADD"};function Iv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Lv[i.combine]||"ENVMAP_BLENDING_NONE"}function Nv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Uv(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Av(e),c=Cv(e),h=Dv(e),d=Iv(e),u=Nv(e),f=xv(e),g=vv(r),v=s.createProgram();let p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(yr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(yr).join(`
`),m.length>0&&(m+=`
`)):(p=[Ru(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yr).join(`
`),m=[Ru(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?fe.tonemapping_pars_fragment:"",e.toneMapping!==ri?gv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,pv("linearToOutputTexel",e.outputColorSpace),_v(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(yr).join(`
`)),o=yc(o),o=Eu(o,e),o=Tu(o,e),a=yc(a),a=Eu(a,e),a=Tu(a,e),o=Au(o),a=Au(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const w=y+p+o,_=y+m+a,M=Su(s,s.VERTEX_SHADER,w),b=Su(s,s.FRAGMENT_SHADER,_);s.attachShader(v,M),s.attachShader(v,b),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(T){if(i.debug.checkShaderErrors){const C=s.getProgramInfoLog(v)||"",P=s.getShaderInfoLog(M)||"",L=s.getShaderInfoLog(b)||"",I=C.trim(),N=P.trim(),z=L.trim();let G=!0,U=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,M,b);else{const k=bu(s,M,"vertex"),X=bu(s,b,"fragment");_e("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+I+`
`+k+`
`+X)}else I!==""?$t("WebGLProgram: Program Info Log:",I):(N===""||z==="")&&(U=!1);U&&(T.diagnostics={runnable:G,programLog:I,vertexShader:{log:N,prefix:p},fragmentShader:{log:z,prefix:m}})}s.deleteShader(M),s.deleteShader(b),x=new Vo(s,v),S=yv(s,v)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(v,hv)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=uv++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=b,this}let Ov=0;class Fv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new zv(t),e.set(t,n)),n}}class zv{constructor(t){this.id=Ov++,this.code=t,this.usedTimes=0}}function Bv(i){return i===hs||i===jo||i===ta}function kv(i,t,e,n,s,r){const o=new Wc,a=new Fv,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,S,E,T,C,P){const L=T.fog,I=C.geometry,N=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?T.environment:null,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,G=t.get(x.envMap||N,z),U=G&&G.mapping===da?G.image.height:null,k=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&$t("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const X=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,dt=X!==void 0?X.length:0;let yt=0;I.morphAttributes.position!==void 0&&(yt=1),I.morphAttributes.normal!==void 0&&(yt=2),I.morphAttributes.color!==void 0&&(yt=3);let wt,bt,Qt,Q;if(k){const Le=ni[k];wt=Le.vertexShader,bt=Le.fragmentShader}else{wt=x.vertexShader,bt=x.fragmentShader;const Le=a.getVertexShaderStage(x),re=a.getFragmentShaderStage(x);a.update(x,Le,re),Qt=Le.id,Q=re.id}const nt=i.getRenderTarget(),W=i.state.buffers.depth.getReversed(),st=C.isInstancedMesh===!0,J=C.isBatchedMesh===!0,ft=!!x.map,gt=!!x.matcap,Z=!!G,j=!!x.aoMap,it=!!x.lightMap,ct=!!x.bumpMap&&x.wireframe===!1,pt=!!x.normalMap,_t=!!x.displacementMap,Mt=!!x.emissiveMap,xt=!!x.metalnessMap,Ut=!!x.roughnessMap,B=x.anisotropy>0,jt=x.clearcoat>0,he=x.dispersion>0,F=x.retroreflectivity>0,A=x.iridescence>0,Y=x.sheen>0,$=x.transmission>0,rt=B&&!!x.anisotropyMap,St=jt&&!!x.clearcoatMap,Tt=jt&&!!x.clearcoatNormalMap,ot=jt&&!!x.clearcoatRoughnessMap,lt=A&&!!x.iridescenceMap,Ct=A&&!!x.iridescenceThicknessMap,Kt=Y&&!!x.sheenColorMap,Et=Y&&!!x.sheenRoughnessMap,At=!!x.specularMap,Zt=!!x.specularColorMap,Wt=!!x.specularIntensityMap,ie=$&&!!x.transmissionMap,V=$&&!!x.thicknessMap,Rt=!!x.gradientMap,ht=!!x.alphaMap,Pt=x.alphaTest>0,zt=!!x.alphaHash,vt=!!x.extensions;let Yt=ri;x.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Yt=i.toneMapping);const qt={shaderID:k,shaderType:x.type,shaderName:x.name,vertexShader:wt,fragmentShader:bt,defines:x.defines,customVertexShaderID:Qt,customFragmentShaderID:Q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:J,batchingColor:J&&C._colorsTexture!==null,instancing:st,instancingColor:st&&C.instanceColor!==null,instancingMorph:st&&C.morphTexture!==null,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:xe.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ft,matcap:gt,envMap:Z,envMapMode:Z&&G.mapping,envMapCubeUVHeight:U,aoMap:j,lightMap:it,bumpMap:ct,normalMap:pt,displacementMap:_t,emissiveMap:Mt,normalMapObjectSpace:pt&&x.normalMapType===ap,normalMapTangentSpace:pt&&x.normalMapType===fc,packedNormalMap:pt&&x.normalMapType===fc&&Bv(x.normalMap.format),metalnessMap:xt,roughnessMap:Ut,anisotropy:B,anisotropyMap:rt,clearcoat:jt,clearcoatMap:St,clearcoatNormalMap:Tt,clearcoatRoughnessMap:ot,dispersion:he,retroreflection:F,iridescence:A,iridescenceMap:lt,iridescenceThicknessMap:Ct,sheen:Y,sheenColorMap:Kt,sheenRoughnessMap:Et,specularMap:At,specularColorMap:Zt,specularIntensityMap:Wt,transmission:$,transmissionMap:ie,thicknessMap:V,gradientMap:Rt,opaque:x.transparent===!1&&x.blending===br&&x.alphaToCoverage===!1,alphaMap:ht,alphaTest:Pt,alphaHash:zt,combine:x.combine,mapUv:ft&&g(x.map.channel),aoMapUv:j&&g(x.aoMap.channel),lightMapUv:it&&g(x.lightMap.channel),bumpMapUv:ct&&g(x.bumpMap.channel),normalMapUv:pt&&g(x.normalMap.channel),displacementMapUv:_t&&g(x.displacementMap.channel),emissiveMapUv:Mt&&g(x.emissiveMap.channel),metalnessMapUv:xt&&g(x.metalnessMap.channel),roughnessMapUv:Ut&&g(x.roughnessMap.channel),anisotropyMapUv:rt&&g(x.anisotropyMap.channel),clearcoatMapUv:St&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Kt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Et&&g(x.sheenRoughnessMap.channel),specularMapUv:At&&g(x.specularMap.channel),specularColorMapUv:Zt&&g(x.specularColorMap.channel),specularIntensityMapUv:Wt&&g(x.specularIntensityMap.channel),transmissionMapUv:ie&&g(x.transmissionMap.channel),thicknessMapUv:V&&g(x.thicknessMap.channel),alphaMapUv:ht&&g(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(pt||B),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!I.attributes.uv&&(ft||ht),fog:!!L,useFog:x.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&pt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:W,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:yt,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:P.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:Yt,decodeVideoTexture:ft&&x.map.isVideoTexture===!0&&xe.getTransfer(x.map.colorSpace)===Ce,decodeVideoTextureEmissive:Mt&&x.emissiveMap.isVideoTexture===!0&&xe.getTransfer(x.emissiveMap.colorSpace)===Ce,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Oe,flipSided:x.side===vn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:vt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&x.extensions.multiDraw===!0||J)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return qt.vertexUv1s=l.has(1),qt.vertexUv2s=l.has(2),qt.vertexUv3s=l.has(3),l.clear(),qt}function p(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const E in x.defines)S.push(E),S.push(x.defines[E]);return x.isRawShaderMaterial===!1&&(m(S,x),y(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function m(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function y(x,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function w(x){const S=f[x.type];let E;if(S){const T=ni[S];E=Vr.clone(T.uniforms)}else E=x.uniforms;return E}function _(x,S){let E=h.get(S);return E!==void 0?++E.usedTimes:(E=new Uv(i,S,x,s),c.push(E),h.set(S,E)),E}function M(x){if(--x.usedTimes===0){const S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){a.remove(x)}function R(){a.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:w,acquireProgram:_,releaseProgram:M,releaseShaderCache:b,programs:c,dispose:R}}function Gv(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Hv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Cu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Pu(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,g,v,p,m){let y=i[t];return y===void 0?(y={id:u.id,object:u,geometry:f,material:g,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:p,group:m},i[t]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=g,y.materialVariant=o(u),y.groupOrder=v,y.renderOrder=u.renderOrder,y.z=p,y.group=m),t++,y}function l(u,f,g,v,p,m,y){y.reversedDepth===!0&&(p=-p);const w=a(u,f,g,v,p,m);g.transmission>0?n.push(w):g.transparent===!0?s.push(w):e.push(w)}function c(u,f,g,v,p,m){const y=a(u,f,g,v,p,m);g.transmission>0?n.unshift(y):g.transparent===!0?s.unshift(y):e.unshift(y)}function h(u,f){e.length>1&&e.sort(u||Hv),n.length>1&&n.sort(f||Cu),s.length>1&&s.sort(f||Cu)}function d(){for(let u=t,f=i.length;u<f;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Vv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Pu,i.set(n,[o])):s>=r.length?(o=new Pu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Wv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new Nt};break;case"SpotLight":e={position:new O,direction:new O,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function Xv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Yv=0;function qv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Kv(i){const t=new Wv,e=Xv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const s=new O,r=new ae,o=new ae;function a(c){let h=0,d=0,u=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let f=0,g=0,v=0,p=0,m=0,y=0,w=0,_=0,M=0,b=0,R=0,x=0,S=0,E=0;c.sort(qv);for(let C=0,P=c.length;C<P;C++){const L=c[C],I=L.color,N=L.intensity,z=L.distance;let G=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===hs?G=L.shadow.map.texture:G=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=I.r*N,d+=I.g*N,u+=I.b*N;else if(L.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(L.sh.coefficients[U],N);E++}else if(L.isSunLight){const U=t.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const k=L.shadow,X=e.get(L);X.shadowIntensity=k.intensity,X.shadowBias=k.bias,X.shadowNormalBias=k.normalBias,X.shadowRadius=k.radius,X.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),n.sunShadow[g]=X,n.sunShadowMap[g]=G;const dt=k.getViewportCount();for(let yt=0;yt<dt;yt++)n.sunShadowMatrix[v+yt]=k.getMatrix(yt),n.sunShadowCascade[v+yt]=k._cascadeData[yt];v+=dt,g++}n.sun[f]=U,f++}else if(L.isDirectionalLight){const U=t.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const k=L.shadow,X=e.get(L);X.shadowIntensity=k.intensity,X.shadowBias=k.bias,X.shadowNormalBias=k.normalBias,X.shadowRadius=k.radius,X.shadowMapSize=k.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=G,n.directionalShadowMatrix[p]=L.shadow.matrix,M++}n.directional[p]=U,p++}else if(L.isSpotLight){const U=t.get(L);U.position.setFromMatrixPosition(L.matrixWorld),U.color.copy(I).multiplyScalar(N),U.distance=z,U.coneCos=Math.cos(L.angle),U.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),U.decay=L.decay,n.spot[y]=U;const k=L.shadow;if(L.map&&(n.spotLightMap[x]=L.map,x++,k.updateMatrices(L),L.castShadow&&S++),n.spotLightMatrix[y]=k.matrix,L.castShadow){const X=e.get(L);X.shadowIntensity=k.intensity,X.shadowBias=k.bias,X.shadowNormalBias=k.normalBias,X.shadowRadius=k.radius,X.shadowMapSize=k.mapSize,n.spotShadow[y]=X,n.spotShadowMap[y]=G,R++}y++}else if(L.isRectAreaLight){const U=t.get(L);U.color.copy(I).multiplyScalar(N),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),n.rectArea[w]=U,w++}else if(L.isPointLight){const U=t.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),U.distance=L.distance,U.decay=L.decay,L.castShadow){const k=L.shadow,X=e.get(L);X.shadowIntensity=k.intensity,X.shadowBias=k.bias,X.shadowNormalBias=k.normalBias,X.shadowRadius=k.radius,X.shadowMapSize=k.mapSize,X.shadowCameraNear=k.camera.near,X.shadowCameraFar=k.camera.far,n.pointShadow[m]=X,n.pointShadowMap[m]=G,n.pointShadowMatrix[m]=L.shadow.matrix,b++}n.point[m]=U,m++}else if(L.isHemisphereLight){const U=t.get(L);U.skyColor.copy(L.color).multiplyScalar(N),U.groundColor.copy(L.groundColor).multiplyScalar(N),n.hemi[_]=U,_++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ot.LTC_FLOAT_1,n.rectAreaLTC2=Ot.LTC_FLOAT_2):(n.rectAreaLTC1=Ot.LTC_HALF_1,n.rectAreaLTC2=Ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const T=n.hash;(T.sunLength!==f||T.directionalLength!==p||T.pointLength!==m||T.spotLength!==y||T.rectAreaLength!==w||T.hemiLength!==_||T.numSunShadows!==g||T.numDirectionalShadows!==M||T.numPointShadows!==b||T.numSpotShadows!==R||T.numSpotMaps!==x||T.numLightProbes!==E)&&(n.sun.length=f,n.directional.length=p,n.spot.length=y,n.rectArea.length=w,n.point.length=m,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+x-S,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=E,T.sunLength=f,T.directionalLength=p,T.pointLength=m,T.spotLength=y,T.rectAreaLength=w,T.hemiLength=_,T.numSunShadows=g,T.numDirectionalShadows=M,T.numPointShadows=b,T.numSpotShadows=R,T.numSpotMaps=x,T.numLightProbes=E,n.version=Yv++)}function l(c,h){let d=0,u=0,f=0,g=0,v=0,p=0;const m=h.matrixWorldInverse;for(let y=0,w=c.length;y<w;y++){const _=c[y];if(_.isSunLight){const M=n.sun[d];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(m),d++}else if(_.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(_.isSpotLight){const M=n.spot[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),g++}else if(_.isRectAreaLight){const M=n.rectArea[v];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const M=n.hemi[p];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(m),p++}}}return{setup:a,setupView:l,state:n}}function Du(i){const t=new Kv(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}const d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Zv(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Du(i),t.set(s,[a])):r>=o.length?(a=new Du(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Jv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$v=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Qv=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],jv=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Lu=new ae,gr=new O,ll=new O;function t1(i,t,e){let n=new Yc;const s=new ut,r=new ut,o=new Ge,a=new Y0,l=new q0,c={},h=e.maxTextureSize,d={[ls]:vn,[vn]:ls,[Oe]:Oe},u=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:Jv,fragmentShader:$v}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new ge;g.setAttribute("position",new Me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new tt(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wr;let m=this.type;this.render=function(b,R,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;this.type===zf&&($t("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=wr);const S=i.getRenderTarget(),E=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),C=i.state;C.setBlending(si),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const P=m!==this.type;P&&R.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(I=>I.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,I=b.length;L<I;L++){const N=b[L],z=N.shadow;if(z===void 0){$t("WebGLShadowMap:",N,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const G=z.getFrameExtents();s.multiply(G),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/G.x),s.x=r.x*G.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/G.y),s.y=r.y*G.y,z.mapSize.y=r.y));const U=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=U,z.map===null||P===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===xr){if(N.isPointLight){$t("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new yn(s.x,s.y,{format:hs,type:on,minFilter:Ye,magFilter:Ye,generateMipmaps:!1}),z.map.texture.name=N.name+".shadowMap",z.map.depthTexture=new Br(s.x,s.y,Pn),z.map.depthTexture.name=N.name+".shadowMapDepth",z.map.depthTexture.format=Ei,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=sn,z.map.depthTexture.magFilter=sn}else N.isPointLight?(z.map=new Zd(s.x),z.map.depthTexture=new c0(s.x,hi)):(z.map=new yn(s.x,s.y),z.map.depthTexture=new Br(s.x,s.y,hi)),z.map.depthTexture.name=N.name+".shadowMap",z.map.depthTexture.format=Ei,this.type===wr?(z.map.depthTexture.compareFunction=U?Gc:kc,z.map.depthTexture.minFilter=Ye,z.map.depthTexture.magFilter=Ye):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=sn,z.map.depthTexture.magFilter=sn);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);const k=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();N.isPointLight!==!0&&z.updateMatrices(N,x);for(let X=0;X<k;X++){const dt=z.getCamera(X);if(N.isPointLight){const yt=z.camera,wt=z.matrix,bt=N.distance||yt.far;bt!==yt.far&&(yt.far=bt,yt.updateProjectionMatrix()),gr.setFromMatrixPosition(N.matrixWorld),yt.position.copy(gr),ll.copy(yt.position),ll.add(Qv[X]),yt.up.copy(jv[X]),yt.lookAt(ll),yt.updateMatrixWorld(),wt.makeTranslation(-gr.x,-gr.y,-gr.z),Lu.multiplyMatrices(yt.projectionMatrix,yt.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Lu,yt.coordinateSystem,yt.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,X),i.clear();else{X===0&&(i.setRenderTarget(z.map),i.clear());const yt=z.getViewport(X);o.set(r.x*yt.x,r.y*yt.y,r.x*yt.z,r.y*yt.w),C.viewport(o)}n=z.getFrustum(X),_(R,x,dt,N,this.type)}z.isPointLightShadow!==!0&&this.type===xr&&y(z,x),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(S,E,T)};function y(b,R){const x=t.update(v);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new yn(s.x,s.y,{format:hs,type:on}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(R,null,x,u,v,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(R,null,x,f,v,null)}function w(b,R,x,S){let E=null;const T=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(T!==void 0)E=T;else if(E=x.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const C=E.uuid,P=R.uuid;let L=c[C];L===void 0&&(L={},c[C]=L);let I=L[P];I===void 0&&(I=E.clone(),L[P]=I,R.addEventListener("dispose",M)),E=I}if(E.visible=R.visible,E.wireframe=R.wireframe,S===xr?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:d[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,x.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const C=i.properties.get(E);C.light=x}return E}function _(b,R,x,S,E){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===xr)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);const P=t.update(b),L=b.material;if(Array.isArray(L)){const I=P.groups;for(let N=0,z=I.length;N<z;N++){const G=I[N],U=L[G.materialIndex];if(U&&U.visible){const k=w(b,U,S,E);b.onBeforeShadow(i,b,R,x,P,k,G),i.renderBufferDirect(x,null,P,k,b,G),b.onAfterShadow(i,b,R,x,P,k,G)}}}else if(L.visible){const I=w(b,L,S,E);b.onBeforeShadow(i,b,R,x,P,I,null),i.renderBufferDirect(x,null,P,I,b,null),b.onAfterShadow(i,b,R,x,P,I,null)}}const C=b.children;for(let P=0,L=C.length;P<L;P++)_(C[P],R,x,S,E)}function M(b){b.target.removeEventListener("dispose",M);for(const x in c){const S=c[x],E=b.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function e1(i,t){function e(){let V=!1;const Rt=new Ge;let ht=null;const Pt=new Ge(0,0,0,0);return{setMask:function(zt){ht!==zt&&!V&&(i.colorMask(zt,zt,zt,zt),ht=zt)},setLocked:function(zt){V=zt},setClear:function(zt,vt,Yt,qt,Le){Le===!0&&(zt*=qt,vt*=qt,Yt*=qt),Rt.set(zt,vt,Yt,qt),Pt.equals(Rt)===!1&&(i.clearColor(zt,vt,Yt,qt),Pt.copy(Rt))},reset:function(){V=!1,ht=null,Pt.set(-1,0,0,0)}}}function n(){let V=!1,Rt=!1,ht=null,Pt=null,zt=null;return{setReversed:function(vt){if(Rt!==vt){const Yt=t.get("EXT_clip_control");vt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),Rt=vt;const qt=zt;zt=null,this.setClear(qt)}},getReversed:function(){return Rt},setTest:function(vt){vt?nt(i.DEPTH_TEST):W(i.DEPTH_TEST)},setMask:function(vt){ht!==vt&&!V&&(i.depthMask(vt),ht=vt)},setFunc:function(vt){if(Rt&&(vt=vp[vt]),Pt!==vt){switch(vt){case Cl:i.depthFunc(i.NEVER);break;case Pl:i.depthFunc(i.ALWAYS);break;case Dl:i.depthFunc(i.LESS);break;case Dr:i.depthFunc(i.LEQUAL);break;case Ll:i.depthFunc(i.EQUAL);break;case Il:i.depthFunc(i.GEQUAL);break;case Nl:i.depthFunc(i.GREATER);break;case Ul:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pt=vt}},setLocked:function(vt){V=vt},setClear:function(vt){zt!==vt&&(zt=vt,Rt&&(vt=1-vt),i.clearDepth(vt))},reset:function(){V=!1,ht=null,Pt=null,zt=null,Rt=!1}}}function s(){let V=!1,Rt=null,ht=null,Pt=null,zt=null,vt=null,Yt=null,qt=null,Le=null;return{setTest:function(re){V||(re?nt(i.STENCIL_TEST):W(i.STENCIL_TEST))},setMask:function(re){Rt!==re&&!V&&(i.stencilMask(re),Rt=re)},setFunc:function(re,Ve,dn){(ht!==re||Pt!==Ve||zt!==dn)&&(i.stencilFunc(re,Ve,dn),ht=re,Pt=Ve,zt=dn)},setOp:function(re,Ve,dn){(vt!==re||Yt!==Ve||qt!==dn)&&(i.stencilOp(re,Ve,dn),vt=re,Yt=Ve,qt=dn)},setLocked:function(re){V=re},setClear:function(re){Le!==re&&(i.clearStencil(re),Le=re)},reset:function(){V=!1,Rt=null,ht=null,Pt=null,zt=null,vt=null,Yt=null,qt=null,Le=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},d={},u={},f=new WeakMap,g=[],v=null,p=!1,m=null,y=null,w=null,_=null,M=null,b=null,R=null,x=new Nt(0,0,0),S=0,E=!1,T=null,C=null,P=null,L=null,I=null;const N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,G=0;const U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(U)[1]),z=G>=1):U.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),z=G>=2);let k=null,X={};const dt=i.getParameter(i.SCISSOR_BOX),yt=i.getParameter(i.VIEWPORT),wt=new Ge().fromArray(dt),bt=new Ge().fromArray(yt);function Qt(V,Rt,ht,Pt){const zt=new Uint8Array(4),vt=i.createTexture();i.bindTexture(V,vt),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<ht;Yt++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(Rt,0,i.RGBA,1,1,Pt,0,i.RGBA,i.UNSIGNED_BYTE,zt):i.texImage2D(Rt+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,zt);return vt}const Q={};Q[i.TEXTURE_2D]=Qt(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=Qt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=Qt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=Qt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(i.DEPTH_TEST),o.setFunc(Dr),ct(!1),pt(Sh),nt(i.CULL_FACE),j(si);function nt(V){h[V]!==!0&&(i.enable(V),h[V]=!0)}function W(V){h[V]!==!1&&(i.disable(V),h[V]=!1)}function st(V,Rt){return u[V]!==Rt?(i.bindFramebuffer(V,Rt),u[V]=Rt,V===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Rt),V===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Rt),!0):!1}function J(V,Rt){let ht=g,Pt=!1;if(V){ht=f.get(Rt),ht===void 0&&(ht=[],f.set(Rt,ht));const zt=V.textures;if(ht.length!==zt.length||ht[0]!==i.COLOR_ATTACHMENT0){for(let vt=0,Yt=zt.length;vt<Yt;vt++)ht[vt]=i.COLOR_ATTACHMENT0+vt;ht.length=zt.length,Pt=!0}}else ht[0]!==i.BACK&&(ht[0]=i.BACK,Pt=!0);Pt&&i.drawBuffers(ht)}function ft(V){return v!==V?(i.useProgram(V),v=V,!0):!1}const gt={[Gs]:i.FUNC_ADD,[kf]:i.FUNC_SUBTRACT,[Gf]:i.FUNC_REVERSE_SUBTRACT};gt[Hf]=i.MIN,gt[Vf]=i.MAX;const Z={[Wf]:i.ZERO,[Xf]:i.ONE,[Yf]:i.SRC_COLOR,[_d]:i.SRC_ALPHA,[Qf]:i.SRC_ALPHA_SATURATE,[Jf]:i.DST_COLOR,[Kf]:i.DST_ALPHA,[qf]:i.ONE_MINUS_SRC_COLOR,[xd]:i.ONE_MINUS_SRC_ALPHA,[$f]:i.ONE_MINUS_DST_COLOR,[Zf]:i.ONE_MINUS_DST_ALPHA,[jf]:i.CONSTANT_COLOR,[tp]:i.ONE_MINUS_CONSTANT_COLOR,[ep]:i.CONSTANT_ALPHA,[np]:i.ONE_MINUS_CONSTANT_ALPHA};function j(V,Rt,ht,Pt,zt,vt,Yt,qt,Le,re){if(V===si){p===!0&&(W(i.BLEND),p=!1);return}if(p===!1&&(nt(i.BLEND),p=!0),V!==Bf){if(V!==m||re!==E){if((y!==Gs||M!==Gs)&&(i.blendEquation(i.FUNC_ADD),y=Gs,M=Gs),re)switch(V){case br:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qo:i.blendFunc(i.ONE,i.ONE);break;case wh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:_e("WebGLState: Invalid blending: ",V);break}else switch(V){case br:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case wh:_e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bh:_e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:_e("WebGLState: Invalid blending: ",V);break}w=null,_=null,b=null,R=null,x.set(0,0,0),S=0,m=V,E=re}return}zt=zt||Rt,vt=vt||ht,Yt=Yt||Pt,(Rt!==y||zt!==M)&&(i.blendEquationSeparate(gt[Rt],gt[zt]),y=Rt,M=zt),(ht!==w||Pt!==_||vt!==b||Yt!==R)&&(i.blendFuncSeparate(Z[ht],Z[Pt],Z[vt],Z[Yt]),w=ht,_=Pt,b=vt,R=Yt),(qt.equals(x)===!1||Le!==S)&&(i.blendColor(qt.r,qt.g,qt.b,Le),x.copy(qt),S=Le),m=V,E=!1}function it(V,Rt){V.side===Oe?W(i.CULL_FACE):nt(i.CULL_FACE);let ht=V.side===vn;Rt&&(ht=!ht),ct(ht),V.blending===br&&V.transparent===!1?j(si):j(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);const Pt=V.stencilWrite;a.setTest(Pt),Pt&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Mt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):W(i.SAMPLE_ALPHA_TO_COVERAGE)}function ct(V){T!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),T=V)}function pt(V){V!==Of?(nt(i.CULL_FACE),V!==C&&(V===Sh?i.cullFace(i.BACK):V===Ff?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):W(i.CULL_FACE),C=V}function _t(V){V!==P&&(z&&i.lineWidth(V),P=V)}function Mt(V,Rt,ht){V?(nt(i.POLYGON_OFFSET_FILL),(L!==Rt||I!==ht)&&(L=Rt,I=ht,o.getReversed()&&(Rt=-Rt),i.polygonOffset(Rt,ht))):W(i.POLYGON_OFFSET_FILL)}function xt(V){V?nt(i.SCISSOR_TEST):W(i.SCISSOR_TEST)}function Ut(V){V===void 0&&(V=i.TEXTURE0+N-1),k!==V&&(i.activeTexture(V),k=V)}function B(V,Rt,ht){ht===void 0&&(k===null?ht=i.TEXTURE0+N-1:ht=k);let Pt=X[ht];Pt===void 0&&(Pt={type:void 0,texture:void 0},X[ht]=Pt),(Pt.type!==V||Pt.texture!==Rt)&&(k!==ht&&(i.activeTexture(ht),k=ht),i.bindTexture(V,Rt||Q[V]),Pt.type=V,Pt.texture=Rt)}function jt(){const V=X[k];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function he(){try{i.compressedTexImage2D(...arguments)}catch(V){_e("WebGLState:",V)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(V){_e("WebGLState:",V)}}function A(){try{i.texSubImage2D(...arguments)}catch(V){_e("WebGLState:",V)}}function Y(){try{i.texSubImage3D(...arguments)}catch(V){_e("WebGLState:",V)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(V){_e("WebGLState:",V)}}function rt(){try{i.compressedTexSubImage3D(...arguments)}catch(V){_e("WebGLState:",V)}}function St(){try{i.texStorage2D(...arguments)}catch(V){_e("WebGLState:",V)}}function Tt(){try{i.texStorage3D(...arguments)}catch(V){_e("WebGLState:",V)}}function ot(){try{i.texImage2D(...arguments)}catch(V){_e("WebGLState:",V)}}function lt(){try{i.texImage3D(...arguments)}catch(V){_e("WebGLState:",V)}}function Ct(V){return d[V]!==void 0?d[V]:i.getParameter(V)}function Kt(V,Rt){d[V]!==Rt&&(i.pixelStorei(V,Rt),d[V]=Rt)}function Et(V){wt.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),wt.copy(V))}function At(V){bt.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),bt.copy(V))}function Zt(V,Rt){let ht=c.get(Rt);ht===void 0&&(ht=new WeakMap,c.set(Rt,ht));let Pt=ht.get(V);Pt===void 0&&(Pt=i.getUniformBlockIndex(Rt,V.name),ht.set(V,Pt))}function Wt(V,Rt){const Pt=c.get(Rt).get(V);l.get(Rt)!==Pt&&(i.uniformBlockBinding(Rt,Pt,V.__bindingPointIndex),l.set(Rt,Pt))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},k=null,X={},u={},f=new WeakMap,g=[],v=null,p=!1,m=null,y=null,w=null,_=null,M=null,b=null,R=null,x=new Nt(0,0,0),S=0,E=!1,T=null,C=null,P=null,L=null,I=null,wt.set(0,0,i.canvas.width,i.canvas.height),bt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:nt,disable:W,bindFramebuffer:st,drawBuffers:J,useProgram:ft,setBlending:j,setMaterial:it,setFlipSided:ct,setCullFace:pt,setLineWidth:_t,setPolygonOffset:Mt,setScissorTest:xt,activeTexture:Ut,bindTexture:B,unbindTexture:jt,compressedTexImage2D:he,compressedTexImage3D:F,texImage2D:ot,texImage3D:lt,pixelStorei:Kt,getParameter:Ct,updateUBOMapping:Zt,uniformBlockBinding:Wt,texStorage2D:St,texStorage3D:Tt,texSubImage2D:A,texSubImage3D:Y,compressedTexSubImage2D:$,compressedTexSubImage3D:rt,scissor:Et,viewport:At,reset:ie}}function n1(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(F,A){return g?new OffscreenCanvas(F,A):zr("canvas")}function p(F,A,Y){let $=1;const rt=he(F);if((rt.width>Y||rt.height>Y)&&($=Y/Math.max(rt.width,rt.height)),$<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const St=Math.floor($*rt.width),Tt=Math.floor($*rt.height);u===void 0&&(u=v(St,Tt));const ot=A?v(St,Tt):u;return ot.width=St,ot.height=Tt,ot.getContext("2d").drawImage(F,0,0,St,Tt),$t("WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+St+"x"+Tt+")."),ot}else return"data"in F&&$t("WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),F;return F}function m(F){return F.generateMipmaps}function y(F){i.generateMipmap(F)}function w(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(F,A,Y,$,rt,St=!1){if(F!==null){if(i[F]!==void 0)return i[F];$t("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Tt;$&&(Tt=t.get("EXT_texture_norm16"),Tt||$t("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ot=A;if(A===i.RED&&(Y===i.FLOAT&&(ot=i.R32F),Y===i.HALF_FLOAT&&(ot=i.R16F),Y===i.UNSIGNED_BYTE&&(ot=i.R8),Y===i.UNSIGNED_SHORT&&Tt&&(ot=Tt.R16_EXT),Y===i.SHORT&&Tt&&(ot=Tt.R16_SNORM_EXT)),A===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ot=i.R8UI),Y===i.UNSIGNED_SHORT&&(ot=i.R16UI),Y===i.UNSIGNED_INT&&(ot=i.R32UI),Y===i.BYTE&&(ot=i.R8I),Y===i.SHORT&&(ot=i.R16I),Y===i.INT&&(ot=i.R32I)),A===i.RG&&(Y===i.FLOAT&&(ot=i.RG32F),Y===i.HALF_FLOAT&&(ot=i.RG16F),Y===i.UNSIGNED_BYTE&&(ot=i.RG8),Y===i.UNSIGNED_SHORT&&Tt&&(ot=Tt.RG16_EXT),Y===i.SHORT&&Tt&&(ot=Tt.RG16_SNORM_EXT)),A===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ot=i.RG8UI),Y===i.UNSIGNED_SHORT&&(ot=i.RG16UI),Y===i.UNSIGNED_INT&&(ot=i.RG32UI),Y===i.BYTE&&(ot=i.RG8I),Y===i.SHORT&&(ot=i.RG16I),Y===i.INT&&(ot=i.RG32I)),A===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ot=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(ot=i.RGB16UI),Y===i.UNSIGNED_INT&&(ot=i.RGB32UI),Y===i.BYTE&&(ot=i.RGB8I),Y===i.SHORT&&(ot=i.RGB16I),Y===i.INT&&(ot=i.RGB32I)),A===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ot=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(ot=i.RGBA16UI),Y===i.UNSIGNED_INT&&(ot=i.RGBA32UI),Y===i.BYTE&&(ot=i.RGBA8I),Y===i.SHORT&&(ot=i.RGBA16I),Y===i.INT&&(ot=i.RGBA32I)),A===i.RGB&&(Y===i.UNSIGNED_SHORT&&Tt&&(ot=Tt.RGB16_EXT),Y===i.SHORT&&Tt&&(ot=Tt.RGB16_SNORM_EXT),Y===i.UNSIGNED_INT_5_9_9_9_REV&&(ot=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(ot=i.R11F_G11F_B10F)),A===i.RGBA){const lt=St?ea:xe.getTransfer(rt);Y===i.FLOAT&&(ot=i.RGBA32F),Y===i.HALF_FLOAT&&(ot=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(ot=lt===Ce?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT&&Tt&&(ot=Tt.RGBA16_EXT),Y===i.SHORT&&Tt&&(ot=Tt.RGBA16_SNORM_EXT),Y===i.UNSIGNED_SHORT_4_4_4_4&&(ot=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(ot=i.RGB5_A1)}return(ot===i.R16F||ot===i.R32F||ot===i.RG16F||ot===i.RG32F||ot===i.RGBA16F||ot===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function M(F,A){let Y;return F?A===null||A===hi||A===Ur?Y=i.DEPTH24_STENCIL8:A===Pn?Y=i.DEPTH32F_STENCIL8:A===Nr&&(Y=i.DEPTH24_STENCIL8,$t("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===hi||A===Ur?Y=i.DEPTH_COMPONENT24:A===Pn?Y=i.DEPTH_COMPONENT32F:A===Nr&&(Y=i.DEPTH_COMPONENT16),Y}function b(F,A){return m(F)===!0||F.isFramebufferTexture&&F.minFilter!==sn&&F.minFilter!==Ye?Math.log2(Math.max(A.width,A.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?A.mipmaps.length:1}function R(F){const A=F.target;A.removeEventListener("dispose",R),S(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&d.delete(A)}function x(F){const A=F.target;A.removeEventListener("dispose",x),T(A)}function S(F){const A=n.get(F);if(A.__webglInit===void 0)return;const Y=F.source,$=f.get(Y);if($){const rt=$[A.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&E(F),Object.keys($).length===0&&f.delete(Y)}n.remove(F)}function E(F){const A=n.get(F);i.deleteTexture(A.__webglTexture);const Y=F.source,$=f.get(Y);delete $[A.__cacheKey],o.memory.textures--}function T(F){const A=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(A.__webglFramebuffer[$]))for(let rt=0;rt<A.__webglFramebuffer[$].length;rt++)i.deleteFramebuffer(A.__webglFramebuffer[$][rt]);else i.deleteFramebuffer(A.__webglFramebuffer[$]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[$])}else{if(Array.isArray(A.__webglFramebuffer))for(let $=0;$<A.__webglFramebuffer.length;$++)i.deleteFramebuffer(A.__webglFramebuffer[$]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let $=0;$<A.__webglColorRenderbuffer.length;$++)A.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[$]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Y=F.textures;for(let $=0,rt=Y.length;$<rt;$++){const St=n.get(Y[$]);St.__webglTexture&&(i.deleteTexture(St.__webglTexture),o.memory.textures--),n.remove(Y[$])}n.remove(F)}let C=0;function P(){C=0}function L(){return C}function I(F){C=F}function N(){const F=C;return F>=s.maxTextures&&$t("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+s.maxTextures),C+=1,F}function z(F){const A=[];return A.push(F.wrapS),A.push(F.wrapT),A.push(F.wrapR||0),A.push(F.magFilter),A.push(F.minFilter),A.push(F.anisotropy),A.push(F.internalFormat),A.push(F.format),A.push(F.type),A.push(F.generateMipmaps),A.push(F.premultiplyAlpha),A.push(F.flipY),A.push(F.unpackAlignment),A.push(F.colorSpace),A.join()}function G(F,A){const Y=n.get(F);if(F.isVideoTexture&&B(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&Y.__version!==F.version){const $=F.image;if($===null)$t("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)$t("WebGLRenderer: Texture marked for update but image is incomplete");else{W(Y,F,A);return}}else F.isExternalTexture&&(Y.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+A)}function U(F,A){const Y=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Y.__version!==F.version){W(Y,F,A);return}else F.isExternalTexture&&(Y.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+A)}function k(F,A){const Y=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Y.__version!==F.version){W(Y,F,A);return}e.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+A)}function X(F,A){const Y=n.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&Y.__version!==F.version){st(Y,F,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+A)}const dt={[On]:i.REPEAT,[Xn]:i.CLAMP_TO_EDGE,[Ol]:i.MIRRORED_REPEAT},yt={[sn]:i.NEAREST,[rp]:i.NEAREST_MIPMAP_NEAREST,[jr]:i.NEAREST_MIPMAP_LINEAR,[Ye]:i.LINEAR,[Pa]:i.LINEAR_MIPMAP_NEAREST,[Fi]:i.LINEAR_MIPMAP_LINEAR},wt={[cp]:i.NEVER,[pp]:i.ALWAYS,[hp]:i.LESS,[kc]:i.LEQUAL,[up]:i.EQUAL,[Gc]:i.GEQUAL,[dp]:i.GREATER,[fp]:i.NOTEQUAL};function bt(F,A){if(A.type===Pn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Ye||A.magFilter===Pa||A.magFilter===jr||A.magFilter===Fi||A.minFilter===Ye||A.minFilter===Pa||A.minFilter===jr||A.minFilter===Fi)&&$t("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,dt[A.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,dt[A.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,dt[A.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,yt[A.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,yt[A.minFilter]),A.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,wt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===sn||A.minFilter!==jr&&A.minFilter!==Fi||A.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");i.texParameterf(F,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Qt(F,A){let Y=!1;F.__webglInit===void 0&&(F.__webglInit=!0,A.addEventListener("dispose",R));const $=A.source;let rt=f.get($);rt===void 0&&(rt={},f.set($,rt));const St=z(A);if(St!==F.__cacheKey){rt[St]===void 0&&(rt[St]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),rt[St].usedTimes++;const Tt=rt[F.__cacheKey];Tt!==void 0&&(rt[F.__cacheKey].usedTimes--,Tt.usedTimes===0&&E(A)),F.__cacheKey=St,F.__webglTexture=rt[St].texture}return Y}function Q(F,A,Y){return Math.floor(Math.floor(F/Y)/A)}function nt(F,A,Y,$){const St=F.updateRanges;if(St.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,Y,$,A.data);else{St.sort((Kt,Et)=>Kt.start-Et.start);let Tt=0;for(let Kt=1;Kt<St.length;Kt++){const Et=St[Tt],At=St[Kt],Zt=Et.start+Et.count,Wt=Q(At.start,A.width,4),ie=Q(Et.start,A.width,4);At.start<=Zt+1&&Wt===ie&&Q(At.start+At.count-1,A.width,4)===Wt?Et.count=Math.max(Et.count,At.start+At.count-Et.start):(++Tt,St[Tt]=At)}St.length=Tt+1;const ot=e.getParameter(i.UNPACK_ROW_LENGTH),lt=e.getParameter(i.UNPACK_SKIP_PIXELS),Ct=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let Kt=0,Et=St.length;Kt<Et;Kt++){const At=St[Kt],Zt=Math.floor(At.start/4),Wt=Math.ceil(At.count/4),ie=Zt%A.width,V=Math.floor(Zt/A.width),Rt=Wt,ht=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),e.pixelStorei(i.UNPACK_SKIP_ROWS,V),e.texSubImage2D(i.TEXTURE_2D,0,ie,V,Rt,ht,Y,$,A.data)}F.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ot),e.pixelStorei(i.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Ct)}}function W(F,A,Y){let $=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&($=i.TEXTURE_3D);const rt=Qt(F,A),St=A.source;e.bindTexture($,F.__webglTexture,i.TEXTURE0+Y);const Tt=n.get(St);if(St.version!==Tt.__version||rt===!0){if(e.activeTexture(i.TEXTURE0+Y),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const ht=xe.getPrimaries(xe.workingColorSpace),Pt=A.colorSpace===Un?null:xe.getPrimaries(A.colorSpace),zt=A.colorSpace===Un||ht===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt)}e.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment);let lt=p(A.image,!1,s.maxTextureSize);lt=jt(A,lt);const Ct=r.convert(A.format,A.colorSpace),Kt=r.convert(A.type);let Et=_(A.internalFormat,Ct,Kt,A.normalized,A.colorSpace,A.isVideoTexture);bt($,A);let At;const Zt=A.mipmaps,Wt=A.isVideoTexture!==!0,ie=Tt.__version===void 0||rt===!0,V=St.dataReady,Rt=b(A,lt);if(A.isDepthTexture)Et=M(A.format===is,A.type),ie&&(Wt?e.texStorage2D(i.TEXTURE_2D,1,Et,lt.width,lt.height):e.texImage2D(i.TEXTURE_2D,0,Et,lt.width,lt.height,0,Ct,Kt,null));else if(A.isDataTexture)if(Zt.length>0){Wt&&ie&&e.texStorage2D(i.TEXTURE_2D,Rt,Et,Zt[0].width,Zt[0].height);for(let ht=0,Pt=Zt.length;ht<Pt;ht++)At=Zt[ht],Wt?V&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,At.width,At.height,Ct,Kt,At.data):e.texImage2D(i.TEXTURE_2D,ht,Et,At.width,At.height,0,Ct,Kt,At.data);A.generateMipmaps=!1}else Wt?(ie&&e.texStorage2D(i.TEXTURE_2D,Rt,Et,lt.width,lt.height),V&&nt(A,lt,Ct,Kt)):e.texImage2D(i.TEXTURE_2D,0,Et,lt.width,lt.height,0,Ct,Kt,lt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Wt&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Rt,Et,Zt[0].width,Zt[0].height,lt.depth);for(let ht=0,Pt=Zt.length;ht<Pt;ht++)if(At=Zt[ht],A.format!==Yn)if(Ct!==null)if(Wt){if(V)if(A.layerUpdates.size>0){const zt=uu(At.width,At.height,A.format,A.type);for(const vt of A.layerUpdates){const Yt=At.data.subarray(vt*zt/At.data.BYTES_PER_ELEMENT,(vt+1)*zt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,vt,At.width,At.height,1,Ct,Yt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,At.width,At.height,lt.depth,Ct,At.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ht,Et,At.width,At.height,lt.depth,0,At.data,0,0);else $t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?V&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,At.width,At.height,lt.depth,Ct,Kt,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ht,Et,At.width,At.height,lt.depth,0,Ct,Kt,At.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{Wt&&ie&&e.texStorage2D(i.TEXTURE_2D,Rt,Et,Zt[0].width,Zt[0].height);for(let ht=0,Pt=Zt.length;ht<Pt;ht++)At=Zt[ht],A.format!==Yn?Ct!==null?Wt?V&&e.compressedTexSubImage2D(i.TEXTURE_2D,ht,0,0,At.width,At.height,Ct,At.data):e.compressedTexImage2D(i.TEXTURE_2D,ht,Et,At.width,At.height,0,At.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?V&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,At.width,At.height,Ct,Kt,At.data):e.texImage2D(i.TEXTURE_2D,ht,Et,At.width,At.height,0,Ct,Kt,At.data)}else if(A.isDataArrayTexture)if(Wt){if(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Rt,Et,lt.width,lt.height,lt.depth),V)if(A.layerUpdates.size>0){const ht=uu(lt.width,lt.height,A.format,A.type);for(const Pt of A.layerUpdates){const zt=lt.data.subarray(Pt*ht/lt.data.BYTES_PER_ELEMENT,(Pt+1)*ht/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Pt,lt.width,lt.height,1,Ct,Kt,zt)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Ct,Kt,lt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Et,lt.width,lt.height,lt.depth,0,Ct,Kt,lt.data);else if(A.isData3DTexture)Wt?(ie&&e.texStorage3D(i.TEXTURE_3D,Rt,Et,lt.width,lt.height,lt.depth),V&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Ct,Kt,lt.data)):e.texImage3D(i.TEXTURE_3D,0,Et,lt.width,lt.height,lt.depth,0,Ct,Kt,lt.data);else if(A.isFramebufferTexture){if(ie)if(Wt)e.texStorage2D(i.TEXTURE_2D,Rt,Et,lt.width,lt.height);else{let ht=lt.width,Pt=lt.height;for(let zt=0;zt<Rt;zt++)e.texImage2D(i.TEXTURE_2D,zt,Et,ht,Pt,0,Ct,Kt,null),ht>>=1,Pt>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in i){const ht=i.canvas;if(ht.hasAttribute("layoutsubtree")||ht.setAttribute("layoutsubtree","true"),lt.parentNode!==ht){ht.appendChild(lt),d.add(A),ht.onpaint=Pt=>{const zt=Pt.changedElements;for(const vt of d)zt.includes(vt.image)&&(vt.needsUpdate=!0)},ht.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,lt);else{const zt=i.RGBA,vt=i.RGBA,Yt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,zt,vt,Yt,lt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Zt.length>0){if(Wt&&ie){const ht=he(Zt[0]);e.texStorage2D(i.TEXTURE_2D,Rt,Et,ht.width,ht.height)}for(let ht=0,Pt=Zt.length;ht<Pt;ht++)At=Zt[ht],Wt?V&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,Ct,Kt,At):e.texImage2D(i.TEXTURE_2D,ht,Et,Ct,Kt,At);A.generateMipmaps=!1}else if(Wt){if(ie){const ht=he(lt);e.texStorage2D(i.TEXTURE_2D,Rt,Et,ht.width,ht.height)}V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,Kt,lt)}else e.texImage2D(i.TEXTURE_2D,0,Et,Ct,Kt,lt);m(A)&&y($),Tt.__version=St.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function st(F,A,Y){if(A.image.length!==6)return;const $=Qt(F,A),rt=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+Y);const St=n.get(rt);if(rt.version!==St.__version||$===!0){e.activeTexture(i.TEXTURE0+Y);const Tt=xe.getPrimaries(xe.workingColorSpace),ot=A.colorSpace===Un?null:xe.getPrimaries(A.colorSpace),lt=A.colorSpace===Un||Tt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);const Ct=A.isCompressedTexture||A.image[0].isCompressedTexture,Kt=A.image[0]&&A.image[0].isDataTexture,Et=[];for(let vt=0;vt<6;vt++)!Ct&&!Kt?Et[vt]=p(A.image[vt],!0,s.maxCubemapSize):Et[vt]=Kt?A.image[vt].image:A.image[vt],Et[vt]=jt(A,Et[vt]);const At=Et[0],Zt=r.convert(A.format,A.colorSpace),Wt=r.convert(A.type),ie=_(A.internalFormat,Zt,Wt,A.normalized,A.colorSpace),V=A.isVideoTexture!==!0,Rt=St.__version===void 0||$===!0,ht=rt.dataReady;let Pt=b(A,At);bt(i.TEXTURE_CUBE_MAP,A);let zt;if(Ct){V&&Rt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,ie,At.width,At.height);for(let vt=0;vt<6;vt++){zt=Et[vt].mipmaps;for(let Yt=0;Yt<zt.length;Yt++){const qt=zt[Yt];A.format!==Yn?Zt!==null?V?ht&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Yt,0,0,qt.width,qt.height,Zt,qt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Yt,ie,qt.width,qt.height,0,qt.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Yt,0,0,qt.width,qt.height,Zt,Wt,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Yt,ie,qt.width,qt.height,0,Zt,Wt,qt.data)}}}else{if(zt=A.mipmaps,V&&Rt){zt.length>0&&Pt++;const vt=he(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,ie,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Kt){V?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Et[vt].width,Et[vt].height,Zt,Wt,Et[vt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ie,Et[vt].width,Et[vt].height,0,Zt,Wt,Et[vt].data);for(let Yt=0;Yt<zt.length;Yt++){const Le=zt[Yt].image[vt].image;V?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Yt+1,0,0,Le.width,Le.height,Zt,Wt,Le.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Yt+1,ie,Le.width,Le.height,0,Zt,Wt,Le.data)}}else{V?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Zt,Wt,Et[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ie,Zt,Wt,Et[vt]);for(let Yt=0;Yt<zt.length;Yt++){const qt=zt[Yt];V?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Yt+1,0,0,Zt,Wt,qt.image[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Yt+1,ie,Zt,Wt,qt.image[vt])}}}m(A)&&y(i.TEXTURE_CUBE_MAP),St.__version=rt.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function J(F,A,Y,$,rt,St){const Tt=r.convert(Y.format,Y.colorSpace),ot=r.convert(Y.type),lt=_(Y.internalFormat,Tt,ot,Y.normalized,Y.colorSpace),Ct=n.get(A),Kt=n.get(Y);if(Kt.__renderTarget=A,!Ct.__hasExternalTextures){const Et=Math.max(1,A.width>>St),At=Math.max(1,A.height>>St);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,St,lt,Et,At,A.depth,0,Tt,ot,null):e.texImage2D(rt,St,lt,Et,At,0,Tt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,F),Ut(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,rt,Kt.__webglTexture,0,xt(A)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,rt,Kt.__webglTexture,St),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(F,A,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,F),A.depthBuffer){const $=A.depthTexture,rt=$&&$.isDepthTexture?$.type:null,St=M(A.stencilBuffer,rt),Tt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ut(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt(A),St,A.width,A.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt(A),St,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,St,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,F)}else{const $=A.textures;for(let rt=0;rt<$.length;rt++){const St=$[rt],Tt=r.convert(St.format,St.colorSpace),ot=r.convert(St.type),lt=_(St.internalFormat,Tt,ot,St.normalized,St.colorSpace);Ut(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt(A),lt,A.width,A.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt(A),lt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,lt,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function gt(F,A,Y){const $=A.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,F),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const rt=n.get(A.depthTexture);if(rt.__renderTarget=A,(!rt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),$){if(rt.__webglInit===void 0&&(rt.__webglInit=!0,A.depthTexture.addEventListener("dispose",R)),rt.__webglTexture===void 0){rt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),bt(i.TEXTURE_CUBE_MAP,A.depthTexture);const Ct=r.convert(A.depthTexture.format),Kt=r.convert(A.depthTexture.type);let Et;A.depthTexture.format===Ei?Et=i.DEPTH_COMPONENT24:A.depthTexture.format===is&&(Et=i.DEPTH24_STENCIL8);for(let At=0;At<6;At++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,Et,A.width,A.height,0,Ct,Kt,null)}}else G(A.depthTexture,0);const St=rt.__webglTexture,Tt=xt(A),ot=$?i.TEXTURE_CUBE_MAP_POSITIVE_X+Y:i.TEXTURE_2D,lt=A.depthTexture.format===is?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(A.depthTexture.format===Ei)Ut(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,ot,St,0,Tt):i.framebufferTexture2D(i.FRAMEBUFFER,lt,ot,St,0);else if(A.depthTexture.format===is)Ut(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,ot,St,0,Tt):i.framebufferTexture2D(i.FRAMEBUFFER,lt,ot,St,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Z(F){const A=n.get(F),Y=F.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==F.depthTexture){const $=F.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),$){const rt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,$.removeEventListener("dispose",rt)};$.addEventListener("dispose",rt),A.__depthDisposeCallback=rt}A.__boundDepthTexture=$}if(F.depthTexture&&!A.__autoAllocateDepthBuffer)if(Y)for(let $=0;$<6;$++)gt(A.__webglFramebuffer[$],F,$);else{const $=F.texture.mipmaps;$&&$.length>0?gt(A.__webglFramebuffer[0],F,0):gt(A.__webglFramebuffer,F,0)}else if(Y){A.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[$]),A.__webglDepthbuffer[$]===void 0)A.__webglDepthbuffer[$]=i.createRenderbuffer(),ft(A.__webglDepthbuffer[$],F,!1);else{const rt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=A.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,St),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,St)}}else{const $=F.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),ft(A.__webglDepthbuffer,F,!1);else{const rt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,St),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,St)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function j(F,A,Y){const $=n.get(F);A!==void 0&&J($.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&Z(F)}function it(F){const A=F.texture,Y=n.get(F),$=n.get(A);F.addEventListener("dispose",x);const rt=F.textures,St=F.isWebGLCubeRenderTarget===!0,Tt=rt.length>1;if(Tt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=A.version,o.memory.textures++),St){Y.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(A.mipmaps&&A.mipmaps.length>0){Y.__webglFramebuffer[ot]=[];for(let lt=0;lt<A.mipmaps.length;lt++)Y.__webglFramebuffer[ot][lt]=i.createFramebuffer()}else Y.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ot=0;ot<A.mipmaps.length;ot++)Y.__webglFramebuffer[ot]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let ot=0,lt=rt.length;ot<lt;ot++){const Ct=n.get(rt[ot]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=i.createTexture(),o.memory.textures++)}if(F.samples>0&&Ut(F)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ot=0;ot<rt.length;ot++){const lt=rt[ot];Y.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[ot]);const Ct=r.convert(lt.format,lt.colorSpace),Kt=r.convert(lt.type),Et=_(lt.internalFormat,Ct,Kt,lt.normalized,lt.colorSpace,F.isXRRenderTarget===!0),At=xt(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,At,Et,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,Y.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),ft(Y.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(St){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),bt(i.TEXTURE_CUBE_MAP,A);for(let ot=0;ot<6;ot++)if(A.mipmaps&&A.mipmaps.length>0)for(let lt=0;lt<A.mipmaps.length;lt++)J(Y.__webglFramebuffer[ot][lt],F,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,lt);else J(Y.__webglFramebuffer[ot],F,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(A)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let ot=0,lt=rt.length;ot<lt;ot++){const Ct=rt[ot],Kt=n.get(Ct);let Et=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Et=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Et,Kt.__webglTexture),bt(Et,Ct),J(Y.__webglFramebuffer,F,Ct,i.COLOR_ATTACHMENT0+ot,Et,0),m(Ct)&&y(Et)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(ot=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,$.__webglTexture),bt(ot,A),A.mipmaps&&A.mipmaps.length>0)for(let lt=0;lt<A.mipmaps.length;lt++)J(Y.__webglFramebuffer[lt],F,A,i.COLOR_ATTACHMENT0,ot,lt);else J(Y.__webglFramebuffer,F,A,i.COLOR_ATTACHMENT0,ot,0);m(A)&&y(ot),e.unbindTexture()}F.depthBuffer&&Z(F)}function ct(F){const A=F.textures;for(let Y=0,$=A.length;Y<$;Y++){const rt=A[Y];if(m(rt)){const St=w(F),Tt=n.get(rt).__webglTexture;e.bindTexture(St,Tt),y(St),e.unbindTexture()}}}const pt=[],_t=[];function Mt(F){if(F.samples>0){if(Ut(F)===!1){const A=F.textures,Y=F.width,$=F.height;let rt=i.COLOR_BUFFER_BIT;const St=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(F),ot=A.length>1;if(ot)for(let Ct=0;Ct<A.length;Ct++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer);const lt=F.texture.mipmaps;lt&&lt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Ct=0;Ct<A.length;Ct++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[Ct]);const Kt=n.get(A[Ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Kt,0)}i.blitFramebuffer(0,0,Y,$,0,0,Y,$,rt,i.NEAREST),l===!0&&(pt.length=0,_t.length=0,pt.push(i.COLOR_ATTACHMENT0+Ct),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(pt.push(St),_t.push(St),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,_t)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let Ct=0;Ct<A.length;Ct++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[Ct]);const Kt=n.get(A[Ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,Kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&l){const A=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function xt(F){return Math.min(s.maxSamples,F.samples)}function Ut(F){const A=n.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function B(F){const A=o.render.frame;h.get(F)!==A&&(h.set(F,A),F.update())}function jt(F,A){const Y=F.colorSpace,$=F.format,rt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||Y!==Or&&Y!==Un&&(xe.getTransfer(Y)===Ce?($!==Yn||rt!==Cn)&&$t("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):_e("WebGLTextures: Unsupported texture color space:",Y)),A}function he(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(c.width=F.naturalWidth||F.width,c.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(c.width=F.displayWidth,c.height=F.displayHeight):(c.width=F.width,c.height=F.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=P,this.getTextureUnits=L,this.setTextureUnits=I,this.setTexture2D=G,this.setTexture2DArray=U,this.setTexture3D=k,this.setTextureCube=X,this.rebindTextures=j,this.setupRenderTarget=it,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Ut,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function i1(i,t){function e(n,s=Un){let r;const o=xe.getTransfer(s);if(n===Cn)return i.UNSIGNED_BYTE;if(n===Nc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Uc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Md)return i.BYTE;if(n===Sd)return i.SHORT;if(n===Nr)return i.UNSIGNED_SHORT;if(n===Ic)return i.INT;if(n===hi)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===on)return i.HALF_FLOAT;if(n===Ed)return i.ALPHA;if(n===Td)return i.RGB;if(n===Yn)return i.RGBA;if(n===Ei)return i.DEPTH_COMPONENT;if(n===is)return i.DEPTH_STENCIL;if(n===Oc)return i.RED;if(n===Fc)return i.RED_INTEGER;if(n===hs)return i.RG;if(n===zc)return i.RG_INTEGER;if(n===Bc)return i.RGBA_INTEGER;if(n===Bo||n===ko||n===Go||n===Ho)if(o===Ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Bo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Bo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Go)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ho)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fl||n===zl||n===Bl||n===kl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===kl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gl||n===Hl||n===Vl||n===Wl||n===Xl||n===jo||n===Yl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Gl||n===Hl)return o===Ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Vl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Wl)return r.COMPRESSED_R11_EAC;if(n===Xl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===jo)return r.COMPRESSED_RG11_EAC;if(n===Yl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ql||n===Kl||n===Zl||n===Jl||n===$l||n===Ql||n===jl||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc||n===oc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ql)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Kl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$l)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ql)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ec)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ic)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ac||n===lc||n===cc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ac)return o===Ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hc||n===uc||n===ta||n===dc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===hc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===uc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ta)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ur?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const s1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,r1=`
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

}`;class o1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Nd(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new rn({vertexShader:s1,fragmentShader:r1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new tt(new Te(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class a1 extends ki{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const v=typeof XRWebGLBinding<"u",p=new o1,m={},y=e.getContextAttributes();let w=null,_=null;const M=[],b=[],R=new ut;let x=null,S=null;const E=new wn;E.viewport=new Ge;const T=new wn;T.viewport=new Ge;const C=[E,T],P=new am;let L=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let nt=M[Q];return nt===void 0&&(nt=new Fa,M[Q]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Q){let nt=M[Q];return nt===void 0&&(nt=new Fa,M[Q]=nt),nt.getGripSpace()},this.getHand=function(Q){let nt=M[Q];return nt===void 0&&(nt=new Fa,M[Q]=nt),nt.getHandSpace()};function N(Q){const nt=b.indexOf(Q.inputSource);if(nt===-1)return;const W=M[nt];W!==void 0&&(W.update(Q.inputSource,Q.frame,c||o),W.dispatchEvent({type:Q.type,data:Q.inputSource}))}function z(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",G);for(let Q=0;Q<M.length;Q++){const nt=b[Q];nt!==null&&(b[Q]=null,M[Q].disconnect(nt))}L=null,I=null,p.reset();for(const Q in m)delete m[Q];if(t.setRenderTarget(w),f=null,u=null,d=null,s=null,_=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(R.width,R.height,!1),S!==null){const Q=S.camera;Q.fov=S.fov,Q.zoom=S.zoom,Q.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&$t("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&$t("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",z),s.addEventListener("inputsourceschange",G),y.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let W=null,st=null,J=null;y.depth&&(J=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,W=y.stencil?is:Ei,st=y.stencil?Ur:hi);const ft={colorFormat:e.RGBA8,depthFormat:J,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(ft),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new yn(u.textureWidth,u.textureHeight,{format:Yn,type:Cn,depthTexture:new Br(u.textureWidth,u.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const W={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,W),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new yn(f.framebufferWidth,f.framebufferHeight,{format:Yn,type:Cn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Qt.setContext(s),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function G(Q){for(let nt=0;nt<Q.removed.length;nt++){const W=Q.removed[nt],st=b.indexOf(W);st>=0&&(b[st]=null,M[st].disconnect(W))}for(let nt=0;nt<Q.added.length;nt++){const W=Q.added[nt];let st=b.indexOf(W);if(st===-1){for(let ft=0;ft<M.length;ft++)if(ft>=b.length){b.push(W),st=ft;break}else if(b[ft]===null){b[ft]=W,st=ft;break}if(st===-1)break}const J=M[st];J&&J.connect(W)}}const U=new O,k=new O;function X(Q,nt,W){U.setFromMatrixPosition(nt.matrixWorld),k.setFromMatrixPosition(W.matrixWorld);const st=U.distanceTo(k),J=nt.projectionMatrix.elements,ft=W.projectionMatrix.elements,gt=J[14]/(J[10]-1),Z=J[14]/(J[10]+1),j=(J[9]+1)/J[5],it=(J[9]-1)/J[5],ct=(J[8]-1)/J[0],pt=(ft[8]+1)/ft[0],_t=gt*ct,Mt=gt*pt,xt=st/(-ct+pt),Ut=xt*-ct;if(nt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ut),Q.translateZ(xt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),J[10]===-1)Q.projectionMatrix.copy(nt.projectionMatrix),Q.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const B=gt+xt,jt=Z+xt,he=_t-Ut,F=Mt+(st-Ut),A=j*Z/jt*B,Y=it*Z/jt*B;Q.projectionMatrix.makePerspective(he,F,A,Y,B,jt),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function dt(Q,nt){nt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(nt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let nt=Q.near,W=Q.far;p.texture!==null&&(p.depthNear>0&&(nt=p.depthNear),p.depthFar>0&&(W=p.depthFar)),P.near=T.near=E.near=nt,P.far=T.far=E.far=W,(L!==P.near||I!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),L=P.near,I=P.far),P.layers.mask=Q.layers.mask|6,E.layers.mask=P.layers.mask&-5,T.layers.mask=P.layers.mask&-3;const st=Q.parent,J=P.cameras;dt(P,st);for(let ft=0;ft<J.length;ft++)dt(J[ft],st);J.length===2?X(P,E,T):P.projectionMatrix.copy(E.projectionMatrix),S===null&&Q.isPerspectiveCamera&&(S={camera:Q,fov:Q.fov,zoom:Q.zoom}),yt(Q,P,st)};function yt(Q,nt,W){W===null?Q.matrix.copy(nt.matrixWorld):(Q.matrix.copy(W.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(nt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(nt.projectionMatrix),Q.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=$s*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Q){l=Q,u!==null&&(u.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(P)},this.getCameraTexture=function(Q){return m[Q]};let wt=null;function bt(Q,nt){if(h=nt.getViewerPose(c||o),g=nt,h!==null){const W=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let st=!1;W.length!==P.cameras.length&&(P.cameras.length=0,st=!0);for(let Z=0;Z<W.length;Z++){const j=W[Z];let it=null;if(f!==null)it=f.getViewport(j);else{const pt=d.getViewSubImage(u,j);it=pt.viewport,Z===0&&(t.setRenderTargetTextures(_,pt.colorTexture,pt.depthStencilTexture),t.setRenderTarget(_))}let ct=C[Z];ct===void 0&&(ct=new wn,ct.layers.enable(Z),ct.viewport=new Ge,C[Z]=ct),ct.matrix.fromArray(j.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(j.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(it.x,it.y,it.width,it.height),Z===0&&(P.matrix.copy(ct.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),st===!0&&P.cameras.push(ct)}const J=s.enabledFeatures;if(J&&J.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const Z=d.getDepthInformation(W[0]);Z&&Z.isValid&&Z.texture&&p.init(Z,s.renderState)}if(J&&J.includes("camera-access")&&v){t.state.unbindTexture(),d=n.getBinding();for(let Z=0;Z<W.length;Z++){const j=W[Z].camera;if(j){let it=m[j];it||(it=new Nd,m[j]=it);const ct=d.getCameraImage(j);it.sourceTexture=ct}}}}for(let W=0;W<M.length;W++){const st=b[W],J=M[W];st!==null&&J!==void 0&&J.update(st,nt,c||o)}wt&&wt(Q,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const Qt=new qd;Qt.setAnimationLoop(bt),this.setAnimationLoop=function(Q){wt=Q},this.dispose=function(){}}}const l1=new ae,tf=new se;tf.set(-1,0,0,0,1,0,0,0,1);function c1(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Vd(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,y,w,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,_)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,w):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===vn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===vn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=t.get(m),w=y.envMap,_=y.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(l1.makeRotationFromEuler(_)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(tf),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,w){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=w*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===vn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function h1(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,M){const b=M.program;n.uniformBlockBinding(_,b)}function c(_,M){let b=s[_.id];b===void 0&&(p(_),b=h(_),s[_.id]=b,_.addEventListener("dispose",y));const R=M.program;n.updateUBOMapping(_,R);const x=t.render.frame;r[_.id]!==x&&(u(_),r[_.id]=x)}function h(_){const M=d();_.__bindingPointIndex=M;const b=i.createBuffer(),R=_.__size,x=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,R,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,b),b}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return _e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const M=s[_.id],b=_.uniforms,R=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let x=0,S=b.length;x<S;x++){const E=b[x];if(Array.isArray(E))for(let T=0,C=E.length;T<C;T++)f(E[T],x,T,R);else f(E,x,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,M,b,R){if(v(_,M,b,R)===!0){const x=_.__offset,S=_.value;if(Array.isArray(S)){let E=0;for(let T=0;T<S.length;T++){const C=S[T],P=m(C);g(C,_.__data,E),typeof C!="number"&&typeof C!="boolean"&&!C.isMatrix3&&!ArrayBuffer.isView(C)&&(E+=P.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(S,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,_.__data)}}function g(_,M,b){typeof _=="number"||typeof _=="boolean"?M[0]=_:_.isMatrix3?(M[0]=_.elements[0],M[1]=_.elements[1],M[2]=_.elements[2],M[3]=0,M[4]=_.elements[3],M[5]=_.elements[4],M[6]=_.elements[5],M[7]=0,M[8]=_.elements[6],M[9]=_.elements[7],M[10]=_.elements[8],M[11]=0):ArrayBuffer.isView(_)?M.set(new _.constructor(_.buffer,_.byteOffset,M.length)):_.toArray(M,b)}function v(_,M,b,R){const x=_.value,S=M+"_"+b;if(R[S]===void 0)return typeof x=="number"||typeof x=="boolean"?R[S]=x:ArrayBuffer.isView(x)?R[S]=x.slice():R[S]=x.clone(),!0;{const E=R[S];if(typeof x=="number"||typeof x=="boolean"){if(E!==x)return R[S]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(E.equals(x)===!1)return E.copy(x),!0}}return!1}function p(_){const M=_.uniforms;let b=0;const R=16;for(let S=0,E=M.length;S<E;S++){const T=Array.isArray(M[S])?M[S]:[M[S]];for(let C=0,P=T.length;C<P;C++){const L=T[C],I=Array.isArray(L.value)?L.value:[L.value];for(let N=0,z=I.length;N<z;N++){const G=I[N],U=m(G),k=b%R,X=k%U.boundary,dt=k+X;b+=X,dt!==0&&R-dt<U.storage&&(b+=R-dt),L.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=U.storage}}}const x=b%R;return x>0&&(b+=R-x),_.__size=b,_.__cache={},this}function m(_){const M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?$t("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):$t("WebGLRenderer: Unsupported uniform value type.",_),M}function y(_){const M=_.target;M.removeEventListener("dispose",y);const b=o.indexOf(M.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function w(){for(const _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:w}}const u1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ei=null;function d1(){return ei===null&&(ei=new sa(u1,16,16,hs,on),ei.name="DFG_LUT",ei.minFilter=Ye,ei.magFilter=Ye,ei.wrapS=Xn,ei.wrapT=Xn,ei.generateMipmaps=!1,ei.needsUpdate=!0),ei}class f1{constructor(t={}){const{canvas:e=_p(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Cn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const v=f,p=new Set([Bc,zc,Fc]),m=new Set([Cn,hi,Nr,Ur,Nc,Uc]),y=new Uint32Array(4),w=new Int32Array(4),_=new O;let M=null,b=null;const R=[],x=[];let S=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let T=!1,C=null,P=null,L=null,I=null;this._outputColorSpace=ke;let N=0,z=0,G=null,U=-1,k=null;const X=new Ge,dt=new Ge;let yt=null;const wt=new Nt(0);let bt=0,Qt=e.width,Q=e.height,nt=1,W=null,st=null;const J=new Ge(0,0,Qt,Q),ft=new Ge(0,0,Qt,Q);let gt=!1;const Z=new Yc;let j=!1,it=!1;const ct=new ae,pt=new O,_t=new Ge,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function Ut(){return G===null?nt:1}let B=n;function jt(D,H){return e.getContext(D,H)}let he,F,A,Y,$,rt,St,Tt,ot,lt,Ct,Kt,Et,At,Zt,Wt,ie,V,Rt,ht,Pt,zt,vt;try{const D={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Rc}`),e.addEventListener("webglcontextlost",Le,!1),e.addEventListener("webglcontextrestored",re,!1),e.addEventListener("webglcontextcreationerror",Ve,!1),B===null){const H="webgl2";if(B=jt(H,D),B===null)throw jt(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Yt()}catch(D){throw e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",Ve,!1),_e("WebGLRenderer: "+D.message),D}function Yt(){he=new dx(B),he.init(),Pt=new i1(B,he),F=new nx(B,he,t,Pt),A=new e1(B,he),F.reversedDepthBuffer&&u&&A.buffers.depth.setReversed(!0),P=B.createFramebuffer(),L=B.createFramebuffer(),I=B.createFramebuffer(),Y=new mx(B),$=new Gv,rt=new n1(B,he,A,$,F,Pt,Y),St=new ux(E),Tt=new _m(B),zt=new tx(B,Tt),ot=new fx(B,Tt,Y,zt),lt=new _x(B,ot,Tt,zt,Y),V=new gx(B,F,rt),Zt=new ix($),Ct=new kv(E,St,he,F,zt,Zt),Kt=new c1(E,$),Et=new Vv,At=new Zv(he),ie=new j_(E,St,A,lt,g,l),Wt=new t1(E,lt,F),vt=new h1(B,Y,F,A),Rt=new ex(B,he,Y),ht=new px(B,he,Y),Y.programs=Ct.programs,E.capabilities=F,E.extensions=he,E.properties=$,E.renderLists=Et,E.shadowMap=Wt,E.state=A,E.info=Y}v!==Cn&&(S=new vx(v,e.width,e.height,a,s,r));const qt=new a1(E,B);this.xr=qt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const D=he.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=he.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(D){D!==void 0&&(nt=D,this.setSize(Qt,Q,!1))},this.getSize=function(D){return D.set(Qt,Q)},this.setSize=function(D,H,et=!0){if(qt.isPresenting){$t("WebGLRenderer: Can't change size while VR device is presenting.");return}Qt=D,Q=H,e.width=Math.floor(D*nt),e.height=Math.floor(H*nt),et===!0&&(e.style.width=D+"px",e.style.height=H+"px"),S!==null&&S.setSize(e.width,e.height),this.setViewport(0,0,D,H)},this.getDrawingBufferSize=function(D){return D.set(Qt*nt,Q*nt).floor()},this.setDrawingBufferSize=function(D,H,et){Qt=D,Q=H,nt=et,e.width=Math.floor(D*et),e.height=Math.floor(H*et),this.setViewport(0,0,D,H)},this.setEffects=function(D){if(v===Cn){_e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let H=0;H<D.length;H++)if(D[H].isOutputPass===!0){$t("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(X)},this.getViewport=function(D){return D.copy(J)},this.setViewport=function(D,H,et,q){D.isVector4?J.set(D.x,D.y,D.z,D.w):J.set(D,H,et,q),A.viewport(X.copy(J).multiplyScalar(nt).round())},this.getScissor=function(D){return D.copy(ft)},this.setScissor=function(D,H,et,q){D.isVector4?ft.set(D.x,D.y,D.z,D.w):ft.set(D,H,et,q),A.scissor(dt.copy(ft).multiplyScalar(nt).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(D){A.setScissorTest(gt=D)},this.setOpaqueSort=function(D){W=D},this.setTransparentSort=function(D){st=D},this.getClearColor=function(D){return D.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(D=!0,H=!0,et=!0){let q=0;if(D){let K=!1;if(G!==null){const It=G.texture.format;K=p.has(It)}if(K){const It=G.texture.type,kt=m.has(It),Dt=ie.getClearColor(),Ft=ie.getClearAlpha(),Xt=Dt.r,oe=Dt.g,ue=Dt.b;kt?(y[0]=Xt,y[1]=oe,y[2]=ue,y[3]=Ft,B.clearBufferuiv(B.COLOR,0,y)):(w[0]=Xt,w[1]=oe,w[2]=ue,w[3]=Ft,B.clearBufferiv(B.COLOR,0,w))}else q|=B.COLOR_BUFFER_BIT}H&&(q|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),et&&(q|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&B.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(D){D.setRenderer(this),C=D},this.dispose=function(){e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",Ve,!1),ie.dispose(),Et.dispose(),At.dispose(),$.dispose(),St.dispose(),lt.dispose(),zt.dispose(),vt.dispose(),Ct.dispose(),qt.dispose(),qt.removeEventListener("sessionstart",vs),qt.removeEventListener("sessionend",$r),at.stop()};function Le(D){D.preventDefault(),na("WebGLRenderer: Context Lost."),T=!0}function re(){na("WebGLRenderer: Context Restored."),T=!1;const D=Y.autoReset,H=Wt.enabled,et=Wt.autoUpdate,q=Wt.needsUpdate,K=Wt.type;Yt(),Y.autoReset=D,Wt.enabled=H,Wt.autoUpdate=et,Wt.needsUpdate=q,Wt.type=K}function Ve(D){_e("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function dn(D){const H=D.target;H.removeEventListener("dispose",dn),Aa(H)}function Aa(D){ar(D),$.remove(D)}function ar(D){const H=$.get(D).programs;H!==void 0&&(H.forEach(function(et){Ct.releaseProgram(et)}),D.isShaderMaterial&&Ct.releaseShaderCache(D))}this.renderBufferDirect=function(D,H,et,q,K,It){H===null&&(H=Mt);const kt=K.isMesh&&K.matrixWorld.determinantAffine()<0,Dt=ys(D,H,et,q,K);A.setMaterial(q,kt);let Ft=et.index,Xt=1;if(q.wireframe===!0){if(Ft=ot.getWireframeAttribute(et),Ft===void 0)return;Xt=2}const oe=et.drawRange,ue=et.attributes.position;let Gt=oe.start*Xt,Se=(oe.start+oe.count)*Xt;It!==null&&(Gt=Math.max(Gt,It.start*Xt),Se=Math.min(Se,(It.start+It.count)*Xt)),Ft!==null?(Gt=Math.max(Gt,0),Se=Math.min(Se,Ft.count)):ue!=null&&(Gt=Math.max(Gt,0),Se=Math.min(Se,ue.count));const de=Se-Gt;if(de<0||de===1/0)return;zt.setup(K,q,Dt,et,Ft);let ze,Fe=Rt;if(Ft!==null&&(ze=Tt.get(Ft),Fe=ht,Fe.setIndex(ze)),K.isMesh)q.wireframe===!0?(A.setLineWidth(q.wireframeLinewidth*Ut()),Fe.setMode(B.LINES)):Fe.setMode(B.TRIANGLES);else if(K.isLine){let cn=q.linewidth;cn===void 0&&(cn=1),A.setLineWidth(cn*Ut()),K.isLineSegments?Fe.setMode(B.LINES):K.isLineLoop?Fe.setMode(B.LINE_LOOP):Fe.setMode(B.LINE_STRIP)}else K.isPoints?Fe.setMode(B.POINTS):K.isSprite&&Fe.setMode(B.TRIANGLES);if(K.isBatchedMesh)if(he.get("WEBGL_multi_draw"))Fe.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const cn=K._multiDrawStarts,Vt=K._multiDrawCounts,fn=K._multiDrawCount,we=Ft?Tt.get(Ft).bytesPerElement:1,Ln=$.get(q).currentProgram.getUniforms();for(let jn=0;jn<fn;jn++)Ln.setValue(B,"_gl_DrawID",jn),Fe.render(cn[jn]/we,Vt[jn])}else if(K.isInstancedMesh)Fe.renderInstances(Gt,de,K.count);else if(et.isInstancedBufferGeometry){const cn=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Vt=Math.min(et.instanceCount,cn);Fe.renderInstances(Gt,de,Vt)}else Fe.render(Gt,de)};function Jr(D,H,et,q){C!==null&&D.isNodeMaterial&&C.setObject(q,D),j===!0&&Zt.setState(D,et,!1),D.transparent===!0&&D.side===Oe&&D.forceSinglePass===!1?(D.side=vn,D.needsUpdate=!0,Qn(D,H,q),D.side=ls,D.needsUpdate=!0,Qn(D,H,q),D.side=Oe):Qn(D,H,q)}this.compile=function(D,H,et=null){et===null&&(et=D),C!==null&&C.renderStart(D,H,et),b=At.get(et),b.init(H),x.push(b),et.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(b.pushLight(K),K.castShadow&&b.pushShadow(K))}),D!==et&&D.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(b.pushLight(K),K.castShadow&&b.pushShadow(K))}),b.setupLights(),C!==null&&C.updateLights(b.state.lightsArray),it=this.localClippingEnabled,j=Zt.init(this.clippingPlanes,it),j===!0&&Zt.setGlobalState(this.clippingPlanes,H),C!==null&&Wt.render(b.state.shadowsArray,et,H);const q=new Set;return D.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const It=K.material;if(It)if(Array.isArray(It))for(let kt=0;kt<It.length;kt++){const Dt=It[kt];Jr(Dt,et,H,K),q.add(Dt)}else Jr(It,et,H,K),q.add(It)}),b=x.pop(),C!==null&&C.renderEnd(),q},this.compileAsync=function(D,H,et=null){const q=this.compile(D,H,et);return new Promise(K=>{function It(){if(q.forEach(function(kt){const Ft=$.get(kt).currentProgram;(Ft===void 0||Ft.isReady())&&q.delete(kt)}),q.size===0){K(D);return}setTimeout(It,10)}he.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let lr=null;function je(D){lr&&lr(D)}function vs(){at.stop()}function $r(){at.start()}const at=new qd;at.setAnimationLoop(je),typeof self<"u"&&at.setContext(self),this.setAnimationLoop=function(D){lr=D,qt.setAnimationLoop(D),D===null?at.stop():at.start()},qt.addEventListener("sessionstart",vs),qt.addEventListener("sessionend",$r),this.render=function(D,H){if(H!==void 0&&H.isCamera!==!0){_e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;C!==null&&C.renderStart(D,H);const et=qt.enabled===!0&&qt.isPresenting===!0,q=S!==null&&(G===null||et)&&S.begin(E,G);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),qt.enabled===!0&&qt.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(qt.cameraAutoUpdate===!0&&qt.updateCamera(H),H=qt.getCamera()),D.isScene===!0&&D.onBeforeRender(E,D,H,G),b=At.get(D,x.length),b.init(H),b.state.textureUnits=rt.getTextureUnits(),x.push(b),ct.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Z.setFromProjectionMatrix(ct,ii,H.reversedDepth),it=this.localClippingEnabled,j=Zt.init(this.clippingPlanes,it),M=Et.get(D,R.length),M.init(),R.push(M),qt.enabled===!0&&qt.isPresenting===!0){const kt=E.xr.getDepthSensingMesh();kt!==null&&Bt(kt,H,-1/0,E.sortObjects)}Bt(D,H,0,E.sortObjects),M.finish(),C!==null&&C.updateLights(b.state.lightsArray),E.sortObjects===!0&&M.sort(W,st),xt=qt.enabled===!1||qt.isPresenting===!1||qt.hasDepthSensing()===!1,xt&&ie.addToRenderList(M,D),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),j===!0&&Zt.beginShadows();const K=b.state.shadowsArray;if(Wt.render(K,D,H),j===!0&&Zt.endShadows(),(q&&S.hasRenderPass())===!1){const kt=M.opaque,Dt=M.transmissive;if(b.setupLights(),H.isArrayCamera){const Ft=H.cameras;if(Dt.length>0)for(let Xt=0,oe=Ft.length;Xt<oe;Xt++){const ue=Ft[Xt];pe(kt,Dt,D,ue)}xt&&ie.render(D);for(let Xt=0,oe=Ft.length;Xt<oe;Xt++){const ue=Ft[Xt];te(M,D,ue,ue.viewport)}}else Dt.length>0&&pe(kt,Dt,D,H),xt&&ie.render(D),te(M,D,H)}G!==null&&z===0&&(rt.updateMultisampleRenderTarget(G),rt.updateRenderTargetMipmap(G)),q&&S.end(E),D.isScene===!0&&D.onAfterRender(E,D,H),zt.resetDefaultState(),U=-1,k=null,x.pop(),x.length>0?(b=x[x.length-1],rt.setTextureUnits(b.state.textureUnits),j===!0&&Zt.setGlobalState(E.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?M=R[R.length-1]:M=null,C!==null&&C.renderEnd()};function Bt(D,H,et,q){if(D.visible===!1)return;if(D.layers.test(H.layers)){if(D.isGroup)et=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(H);else if(D.isLightProbeGrid)b.pushLightProbeGrid(D);else if(D.isLight)b.pushLight(D),D.castShadow&&b.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||D.intersectsFrustum(Z)){q&&_t.setFromMatrixPosition(D.matrixWorld).applyMatrix4(ct);const kt=lt.update(D),Dt=D.material;Dt.visible&&M.push(D,kt,Dt,et,_t.z,null,H)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||D.intersectsFrustum(Z))){const kt=lt.update(D),Dt=D.material;if(q&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),_t.copy(D.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),_t.copy(kt.boundingSphere.center)),_t.applyMatrix4(D.matrixWorld).applyMatrix4(ct)),Array.isArray(Dt)){const Ft=kt.groups;for(let Xt=0,oe=Ft.length;Xt<oe;Xt++){const ue=Ft[Xt],Gt=Dt[ue.materialIndex];Gt&&Gt.visible&&M.push(D,kt,Gt,et,_t.z,ue,H)}}else Dt.visible&&M.push(D,kt,Dt,et,_t.z,null,H)}}const It=D.children;for(let kt=0,Dt=It.length;kt<Dt;kt++)Bt(It[kt],H,et,q)}function te(D,H,et,q){const{opaque:K,transmissive:It,transparent:kt}=D;b.setupLightsView(et),j===!0&&Zt.setGlobalState(E.clippingPlanes,et),q&&A.viewport(X.copy(q)),K.length>0&&We(K,H,et),It.length>0&&We(It,H,et),kt.length>0&&We(kt,H,et),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function pe(D,H,et,q){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[q.id]===void 0){const Gt=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[q.id]=new yn(1,1,{generateMipmaps:!0,type:Gt?on:Cn,minFilter:Fi,samples:Math.max(4,F.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xe.workingColorSpace})}const It=b.state.transmissionRenderTarget[q.id],kt=q.viewport||X;It.setSize(kt.z*E.transmissionResolutionScale,kt.w*E.transmissionResolutionScale);const Dt=E.getRenderTarget(),Ft=E.getActiveCubeFace(),Xt=E.getActiveMipmapLevel();E.setRenderTarget(It),E.getClearColor(wt),bt=E.getClearAlpha(),bt<1&&E.setClearColor(16777215,.5),E.clear(),xt&&ie.render(et);const oe=E.toneMapping;E.toneMapping=ri;const ue=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),b.setupLightsView(q),j===!0&&Zt.setGlobalState(E.clippingPlanes,q),We(D,et,q),rt.updateMultisampleRenderTarget(It),rt.updateRenderTargetMipmap(It),he.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Se=0,de=H.length;Se<de;Se++){const ze=H[Se],{object:Fe,geometry:cn,material:Vt,group:fn}=ze;if(Vt.side===Oe&&Fe.layers.test(q.layers)){const we=Vt.side;Vt.side=vn,Vt.needsUpdate=!0,Tn(Fe,et,q,cn,Vt,fn),Vt.side=we,Vt.needsUpdate=!0,Gt=!0}}Gt===!0&&(rt.updateMultisampleRenderTarget(It),rt.updateRenderTargetMipmap(It))}E.setRenderTarget(Dt,Ft,Xt),E.setClearColor(wt,bt),ue!==void 0&&(q.viewport=ue),E.toneMapping=oe}function We(D,H,et){const q=H.isScene===!0?H.overrideMaterial:null;for(let K=0,It=D.length;K<It;K++){const kt=D[K],{object:Dt,geometry:Ft,group:Xt}=kt;let oe=kt.material;oe.allowOverride===!0&&q!==null&&(oe=q),Dt.layers.test(et.layers)&&Tn(Dt,H,et,Ft,oe,Xt)}}function Tn(D,H,et,q,K,It){C!==null&&K.isNodeMaterial&&C.setObject(D,K),D.onBeforeRender(E,H,et,q,K,It),D.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),K.onBeforeRender(E,H,et,q,D,It),K.transparent===!0&&K.side===Oe&&K.forceSinglePass===!1?(K.side=vn,K.needsUpdate=!0,E.renderBufferDirect(et,H,q,K,D,It),K.side=ls,K.needsUpdate=!0,E.renderBufferDirect(et,H,q,K,D,It),K.side=Oe):E.renderBufferDirect(et,H,q,K,D,It),D.onAfterRender(E,H,et,q,K,It)}function Qn(D,H,et){H.isScene!==!0&&(H=Mt);const q=$.get(D),K=b.state.lights,It=b.state.shadowsArray,kt=K.state.version,Dt=Ct.getParameters(D,K.state,It,H,et,b.state.lightProbeGridArray),Ft=Ct.getProgramCacheKey(Dt);let Xt=q.programs;q.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?H.environment:null,q.fog=H.fog;const oe=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;q.envMap=St.get(D.envMap||q.environment,oe),q.envMapRotation=q.environment!==null&&D.envMap===null?H.environmentRotation:D.envMapRotation,Xt===void 0&&(D.addEventListener("dispose",dn),Xt=new Map,q.programs=Xt);let ue=Xt.get(Ft);if(ue!==void 0){if(q.currentProgram===ue&&q.lightsStateVersion===kt)return Wi(D,Dt),ue}else Dt.uniforms=Ct.getUniforms(D),C!==null&&D.isNodeMaterial&&C.build(D,et,Dt),D.onBeforeCompile(Dt,E),ue=Ct.acquireProgram(Dt,Ft),Xt.set(Ft,ue),q.uniforms=Dt.uniforms;const Gt=q.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Gt.clippingPlanes=Zt.uniform),Wi(D,Dt),q.needsLights=Ms(D),q.lightsStateVersion=kt,q.needsLights&&(Gt.ambientLightColor.value=K.state.ambient,Gt.lightProbe.value=K.state.probe,Gt.sunLights.value=K.state.sun,Gt.sunLightShadows.value=K.state.sunShadow,Gt.directionalLights.value=K.state.directional,Gt.directionalLightShadows.value=K.state.directionalShadow,Gt.spotLights.value=K.state.spot,Gt.spotLightShadows.value=K.state.spotShadow,Gt.rectAreaLights.value=K.state.rectArea,Gt.ltc_1.value=K.state.rectAreaLTC1,Gt.ltc_2.value=K.state.rectAreaLTC2,Gt.pointLights.value=K.state.point,Gt.pointLightShadows.value=K.state.pointShadow,Gt.hemisphereLights.value=K.state.hemi,Gt.sunShadowMatrix.value=K.state.sunShadowMatrix,Gt.sunShadowCascade.value=K.state.sunShadowCascade,Gt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Gt.spotLightMatrix.value=K.state.spotLightMatrix,Gt.spotLightMap.value=K.state.spotLightMap,Gt.pointShadowMatrix.value=K.state.pointShadowMatrix),q.lightProbeGrid=b.state.lightProbeGridArray.length>0,q.currentProgram=ue,q.uniformsList=null,ue}function di(D){if(D.uniformsList===null){const H=D.currentProgram.getUniforms();D.uniformsList=Vo.seqWithValue(H.seq,D.uniforms)}return D.uniformsList}function Wi(D,H){const et=$.get(D);et.outputColorSpace=H.outputColorSpace,et.batching=H.batching,et.batchingColor=H.batchingColor,et.instancing=H.instancing,et.instancingColor=H.instancingColor,et.instancingMorph=H.instancingMorph,et.skinning=H.skinning,et.morphTargets=H.morphTargets,et.morphNormals=H.morphNormals,et.morphColors=H.morphColors,et.morphTargetsCount=H.morphTargetsCount,et.numClippingPlanes=H.numClippingPlanes,et.numIntersection=H.numClipIntersection,et.vertexAlphas=H.vertexAlphas,et.vertexTangents=H.vertexTangents,et.toneMapping=H.toneMapping}function Qr(D,H){if(D.length===0)return null;if(D.length===1)return D[0].texture!==null?D[0]:null;_.setFromMatrixPosition(H.matrixWorld);for(let et=0,q=D.length;et<q;et++){const K=D[et];if(K.texture!==null&&K.boundingBox.containsPoint(_))return K}return null}function ys(D,H,et,q,K){H.isScene!==!0&&(H=Mt),rt.resetTextureUnits();const It=H.fog,kt=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?H.environment:null,Dt=G===null?E.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:xe.workingColorSpace,Ft=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Xt=St.get(q.envMap||kt,Ft),oe=q.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,ue=!!et.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Gt=!!et.morphAttributes.position,Se=!!et.morphAttributes.normal,de=!!et.morphAttributes.color;let ze=ri;q.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(ze=E.toneMapping);const Fe=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,cn=Fe!==void 0?Fe.length:0,Vt=$.get(q),fn=b.state.lights;if(j===!0&&(it===!0||D!==k)){const Be=D===k&&q.id===U;Zt.setState(q,D,Be)}let we=!1;q.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==fn.state.version||Vt.outputColorSpace!==Dt||K.isBatchedMesh&&Vt.batching===!1||!K.isBatchedMesh&&Vt.batching===!0||K.isBatchedMesh&&Vt.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Vt.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Vt.instancing===!1||!K.isInstancedMesh&&Vt.instancing===!0||K.isSkinnedMesh&&Vt.skinning===!1||!K.isSkinnedMesh&&Vt.skinning===!0||K.isInstancedMesh&&Vt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Vt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Vt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Vt.instancingMorph===!1&&K.morphTexture!==null||Vt.envMap!==Xt||q.fog===!0&&Vt.fog!==It||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Zt.numPlanes||Vt.numIntersection!==Zt.numIntersection)||Vt.vertexAlphas!==oe||Vt.vertexTangents!==ue||Vt.morphTargets!==Gt||Vt.morphNormals!==Se||Vt.morphColors!==de||Vt.toneMapping!==ze||Vt.morphTargetsCount!==cn||!!Vt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(we=!0):(we=!0,Vt.__version=q.version);let Ln=Vt.currentProgram;we===!0&&(Ln=Qn(q,H,K),C&&q.isNodeMaterial&&C.onUpdateProgram(q,Ln,Vt));let jn=!1,Ai=!1,ws=!1;const Ie=Ln.getUniforms(),Xe=Vt.uniforms;if(A.useProgram(Ln.program)&&(jn=!0,Ai=!0,ws=!0),q.id!==U&&(U=q.id,Ai=!0),Vt.needsLights){const Be=Qr(b.state.lightProbeGridArray,K);Vt.lightProbeGrid!==Be&&(Vt.lightProbeGrid=Be,Ai=!0)}if(jn||k!==D){A.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Ie.setValue(B,"projectionMatrix",D.projectionMatrix),Ie.setValue(B,"viewMatrix",D.matrixWorldInverse);const Ci=Ie.map.cameraPosition;Ci!==void 0&&Ci.setValue(B,pt.setFromMatrixPosition(D.matrixWorld)),F.logarithmicDepthBuffer&&Ie.setValue(B,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ie.setValue(B,"isOrthographic",D.isOrthographicCamera===!0),k!==D&&(k=D,Ai=!0,ws=!0)}if(Vt.needsLights&&(fn.state.sunShadowMap.length>0&&Ie.setValue(B,"sunShadowMap",fn.state.sunShadowMap,rt),fn.state.directionalShadowMap.length>0&&Ie.setValue(B,"directionalShadowMap",fn.state.directionalShadowMap,rt),fn.state.spotShadowMap.length>0&&Ie.setValue(B,"spotShadowMap",fn.state.spotShadowMap,rt),fn.state.pointShadowMap.length>0&&Ie.setValue(B,"pointShadowMap",fn.state.pointShadowMap,rt)),K.isSkinnedMesh){Ie.setOptional(B,K,"bindMatrix"),Ie.setOptional(B,K,"bindMatrixInverse");const Be=K.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),Ie.setValue(B,"boneTexture",Be.boneTexture,rt))}K.isBatchedMesh&&(Ie.setOptional(B,K,"batchingTexture"),Ie.setValue(B,"batchingTexture",K._matricesTexture,rt),Ie.setOptional(B,K,"batchingIdTexture"),Ie.setValue(B,"batchingIdTexture",K._indirectTexture,rt),Ie.setOptional(B,K,"batchingColorTexture"),K._colorsTexture!==null&&Ie.setValue(B,"batchingColorTexture",K._colorsTexture,rt));const Ri=et.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&V.update(K,et,Ln),(Ai||Vt.receiveShadow!==K.receiveShadow)&&(Vt.receiveShadow=K.receiveShadow,Ie.setValue(B,"receiveShadow",K.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&H.environment!==null&&(Xe.envMapIntensity.value=H.environmentIntensity),Xe.dfgLUT!==void 0&&(Xe.dfgLUT.value=d1()),Ai){if(Ie.setValue(B,"toneMappingExposure",E.toneMappingExposure),Vt.needsLights&&Ra(Xe,ws),It&&q.fog===!0&&Kt.refreshFogUniforms(Xe,It),Kt.refreshMaterialUniforms(Xe,q,nt,Q,b.state.transmissionRenderTarget[D.id]),Vt.needsLights&&Vt.lightProbeGrid){const Be=Vt.lightProbeGrid;Xe.probesSH.value=Be.texture,Xe.probesMin.value.copy(Be.boundingBox.min),Xe.probesMax.value.copy(Be.boundingBox.max),Xe.probesResolution.value.copy(Be.resolution)}Vo.upload(B,di(Vt),Xe,rt)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Vo.upload(B,di(Vt),Xe,rt),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ie.setValue(B,"center",K.center),Ie.setValue(B,"modelViewMatrix",K.modelViewMatrix),Ie.setValue(B,"normalMatrix",K.normalMatrix),Ie.setValue(B,"modelMatrix",K.matrixWorld),q.uniformsGroups!==void 0){const Be=q.uniformsGroups;for(let Ci=0,bs=Be.length;Ci<bs;Ci++){const Mh=Be[Ci];vt.update(Mh,Ln),vt.bind(Mh,Ln)}}return Ln}function Ra(D,H){D.ambientLightColor.needsUpdate=H,D.lightProbe.needsUpdate=H,D.sunLights.needsUpdate=H,D.sunLightShadows.needsUpdate=H,D.directionalLights.needsUpdate=H,D.directionalLightShadows.needsUpdate=H,D.pointLights.needsUpdate=H,D.pointLightShadows.needsUpdate=H,D.spotLights.needsUpdate=H,D.spotLightShadows.needsUpdate=H,D.rectAreaLights.needsUpdate=H,D.hemisphereLights.needsUpdate=H}function Ms(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(D,H,et){const q=$.get(D);q.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),$.get(D.texture).__webglTexture=H,$.get(D.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:et,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,H){const et=$.get(D);et.__webglFramebuffer=H,et.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(D,H=0,et=0){G=D,N=H,z=et;let q=null,K=!1,It=!1;if(D){const Dt=$.get(D);if(Dt.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(B.FRAMEBUFFER,Dt.__webglFramebuffer),X.copy(D.viewport),dt.copy(D.scissor),yt=D.scissorTest,A.viewport(X),A.scissor(dt),A.setScissorTest(yt),U=-1;return}else if(Dt.__webglFramebuffer===void 0)rt.setupRenderTarget(D);else if(Dt.__hasExternalTextures)rt.rebindTextures(D,$.get(D.texture).__webglTexture,$.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const oe=D.depthTexture;if(Dt.__boundDepthTexture!==oe){if(oe!==null&&$.has(oe)&&(D.width!==oe.image.width||D.height!==oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(D)}}const Ft=D.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(It=!0);const Xt=$.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Xt[H])?q=Xt[H][et]:q=Xt[H],K=!0):D.samples>0&&rt.useMultisampledRTT(D)===!1?q=$.get(D).__webglMultisampledFramebuffer:Array.isArray(Xt)?q=Xt[et]:q=Xt,X.copy(D.viewport),dt.copy(D.scissor),yt=D.scissorTest}else X.copy(J).multiplyScalar(nt).floor(),dt.copy(ft).multiplyScalar(nt).floor(),yt=gt;if(et!==0&&(q=P),A.bindFramebuffer(B.FRAMEBUFFER,q)&&A.drawBuffers(D,q),A.viewport(X),A.scissor(dt),A.setScissorTest(yt),K){const Dt=$.get(D.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+H,Dt.__webglTexture,et)}else if(It){const Dt=H;for(let Ft=0;Ft<D.textures.length;Ft++){const Xt=$.get(D.textures[Ft]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ft,Xt.__webglTexture,et,Dt)}}else if(D!==null&&et!==0){const Dt=$.get(D.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Dt.__webglTexture,et)}U=-1};function Ss(D){const H=$.get(D);return(H.__readFormat!==D.format||H.__readType!==D.type)&&(H.__readFormat=D.format,H.__readType=D.type,H.__formatReadable=F.textureFormatReadable(D.format),H.__typeReadable=F.textureTypeReadable(D.type)),H}this.readRenderTargetPixels=function(D,H,et,q,K,It,kt,Dt=0){if(!(D&&D.isWebGLRenderTarget)){_e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=$.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&kt!==void 0&&(Ft=Ft[kt]),Ft){A.bindFramebuffer(B.FRAMEBUFFER,Ft);try{const Xt=D.textures[Dt],oe=Xt.format,ue=Xt.type;D.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Dt);const Gt=Ss(Xt);if(Gt.__formatReadable===!1){_e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Gt.__typeReadable===!1){_e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=D.width-q&&et>=0&&et<=D.height-K&&B.readPixels(H,et,q,K,Pt.convert(oe),Pt.convert(ue),It)}finally{const Xt=G!==null?$.get(G).__webglFramebuffer:null;A.bindFramebuffer(B.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(D,H,et,q,K,It,kt,Dt=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=$.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&kt!==void 0&&(Ft=Ft[kt]),Ft)if(H>=0&&H<=D.width-q&&et>=0&&et<=D.height-K){A.bindFramebuffer(B.FRAMEBUFFER,Ft);const Xt=D.textures[Dt],oe=Xt.format,ue=Xt.type;D.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Dt);const Gt=Ss(Xt);if(Gt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Gt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Se=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Se),B.bufferData(B.PIXEL_PACK_BUFFER,It.byteLength,B.STREAM_READ),B.readPixels(H,et,q,K,Pt.convert(oe),Pt.convert(ue),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);const de=G!==null?$.get(G).__webglFramebuffer:null;A.bindFramebuffer(B.FRAMEBUFFER,de);const ze=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await xp(B,ze,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Se),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,It),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(Se),B.deleteSync(ze),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,H=null,et=0){const q=Math.pow(2,-et),K=Math.floor(D.image.width*q),It=Math.floor(D.image.height*q),kt=H!==null?H.x:0,Dt=H!==null?H.y:0;rt.setTexture2D(D,0),B.copyTexSubImage2D(B.TEXTURE_2D,et,0,0,kt,Dt,K,It),A.unbindTexture()},this.copyTextureToTexture=function(D,H,et=null,q=null,K=0,It=0){let kt,Dt,Ft,Xt,oe,ue,Gt,Se,de;const ze=D.isCompressedTexture?D.mipmaps[It]:D.image;if(et!==null)kt=et.max.x-et.min.x,Dt=et.max.y-et.min.y,Ft=et.isBox3?et.max.z-et.min.z:1,Xt=et.min.x,oe=et.min.y,ue=et.isBox3?et.min.z:0;else{const Xe=Math.pow(2,-K);kt=Math.floor(ze.width*Xe),Dt=Math.floor(ze.height*Xe),D.isDataArrayTexture?Ft=ze.depth:D.isData3DTexture?Ft=Math.floor(ze.depth*Xe):Ft=1,Xt=0,oe=0,ue=0}q!==null?(Gt=q.x,Se=q.y,de=q.z):(Gt=0,Se=0,de=0);const Fe=Pt.convert(H.format),cn=Pt.convert(H.type);let Vt;H.isData3DTexture?(rt.setTexture3D(H,0),Vt=B.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(rt.setTexture2DArray(H,0),Vt=B.TEXTURE_2D_ARRAY):(rt.setTexture2D(H,0),Vt=B.TEXTURE_2D),A.activeTexture(B.TEXTURE0),A.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,H.flipY),A.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),A.pixelStorei(B.UNPACK_ALIGNMENT,H.unpackAlignment);const fn=A.getParameter(B.UNPACK_ROW_LENGTH),we=A.getParameter(B.UNPACK_IMAGE_HEIGHT),Ln=A.getParameter(B.UNPACK_SKIP_PIXELS),jn=A.getParameter(B.UNPACK_SKIP_ROWS),Ai=A.getParameter(B.UNPACK_SKIP_IMAGES);A.pixelStorei(B.UNPACK_ROW_LENGTH,ze.width),A.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ze.height),A.pixelStorei(B.UNPACK_SKIP_PIXELS,Xt),A.pixelStorei(B.UNPACK_SKIP_ROWS,oe),A.pixelStorei(B.UNPACK_SKIP_IMAGES,ue);const ws=D.isDataArrayTexture||D.isData3DTexture,Ie=H.isDataArrayTexture||H.isData3DTexture;if(D.isDepthTexture){const Xe=$.get(D),Ri=$.get(H),Be=$.get(Xe.__renderTarget),Ci=$.get(Ri.__renderTarget);A.bindFramebuffer(B.READ_FRAMEBUFFER,Be.__webglFramebuffer),A.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let bs=0;bs<Ft;bs++)ws&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,$.get(D).__webglTexture,K,ue+bs),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,$.get(H).__webglTexture,It,de+bs)),B.blitFramebuffer(Xt,oe,kt,Dt,Gt,Se,kt,Dt,B.DEPTH_BUFFER_BIT,B.NEAREST);A.bindFramebuffer(B.READ_FRAMEBUFFER,null),A.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(K!==0||D.isRenderTargetTexture||$.has(D)){const Xe=$.get(D),Ri=$.get(H);A.bindFramebuffer(B.READ_FRAMEBUFFER,L),A.bindFramebuffer(B.DRAW_FRAMEBUFFER,I);for(let Be=0;Be<Ft;Be++)ws?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Xe.__webglTexture,K,ue+Be):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Xe.__webglTexture,K),Ie?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ri.__webglTexture,It,de+Be):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ri.__webglTexture,It),K!==0?B.blitFramebuffer(Xt,oe,kt,Dt,Gt,Se,kt,Dt,B.COLOR_BUFFER_BIT,B.NEAREST):Ie?B.copyTexSubImage3D(Vt,It,Gt,Se,de+Be,Xt,oe,kt,Dt):B.copyTexSubImage2D(Vt,It,Gt,Se,Xt,oe,kt,Dt);A.bindFramebuffer(B.READ_FRAMEBUFFER,null),A.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Ie?D.isDataTexture||D.isData3DTexture?B.texSubImage3D(Vt,It,Gt,Se,de,kt,Dt,Ft,Fe,cn,ze.data):H.isCompressedArrayTexture?B.compressedTexSubImage3D(Vt,It,Gt,Se,de,kt,Dt,Ft,Fe,ze.data):B.texSubImage3D(Vt,It,Gt,Se,de,kt,Dt,Ft,Fe,cn,ze):D.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,It,Gt,Se,kt,Dt,Fe,cn,ze.data):D.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,It,Gt,Se,ze.width,ze.height,Fe,ze.data):B.texSubImage2D(B.TEXTURE_2D,It,Gt,Se,kt,Dt,Fe,cn,ze);A.pixelStorei(B.UNPACK_ROW_LENGTH,fn),A.pixelStorei(B.UNPACK_IMAGE_HEIGHT,we),A.pixelStorei(B.UNPACK_SKIP_PIXELS,Ln),A.pixelStorei(B.UNPACK_SKIP_ROWS,jn),A.pixelStorei(B.UNPACK_SKIP_IMAGES,Ai),It===0&&H.generateMipmaps&&B.generateMipmap(Vt),A.unbindTexture()},this.initRenderTarget=function(D){$.get(D).__webglFramebuffer===void 0&&rt.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?rt.setTextureCube(D,0):D.isData3DTexture?rt.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?rt.setTexture2DArray(D,0):rt.setTexture2D(D,0),A.unbindTexture()},this.resetState=function(){N=0,z=0,G=null,A.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=xe._getDrawingBufferColorSpace(t),e.unpackColorSpace=xe._getUnpackColorSpace()}}function en(i,t,e=1,n=1){const s=document.createElement("canvas");s.width=s.height=i;const r=s.getContext("2d");t(r,i);const o=new En(s);return o.wrapS=o.wrapT=On,o.repeat.set(e,n),o.colorSpace=ke,o.anisotropy=4,o}function $n(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function ca(i,t,e,n){return(s,r)=>{const o=$n(i);s.fillStyle=t,s.fillRect(0,0,r,r);for(let a=0;a<130;a++){const l=o()*r;s.strokeStyle=o()<.3?n:e,s.globalAlpha=.14+o()*.24,s.lineWidth=.6+o()*2.2,s.beginPath(),s.moveTo(0,l);for(let c=0;c<=r;c+=16)s.lineTo(c,l+Math.sin(c*.05+a)*2.5);s.stroke()}for(let a=0;a<420;a++)s.fillStyle=e,s.globalAlpha=.1+o()*.12,s.fillRect(o()*r,o()*r,1+o()*1.5,1);s.globalAlpha=.5;for(let a=0;a<7;a++){const l=o()*r,c=o()*r;s.strokeStyle=e,s.lineWidth=1.2;for(let h=2;h<9;h+=2)s.beginPath(),s.ellipse(l,c,h*1.8,h,.3,0,Math.PI*2),s.stroke()}s.globalAlpha=1}}function cl(i){return i?ca(7,"#3d2a1c","#2a1d12","#54402c"):ca(21,"#8a6844","#6e5233","#a37f52")}function p1(i){return(t,e)=>{const n=$n(i);t.clearRect(0,0,e,e);for(let s=0;s<2;s++){const r=s?30:18;for(let o=0;o<r;o++){const a=e*.12+n()*e*.76,l=e*.12+n()*e*.76,c=5+n()*9,h=3.5+n()*6,d=n()*Math.PI,u=s?150+n()*70:70+n()*50;t.fillStyle=`rgb(${u*.62|0},${u|0},${u*.52|0})`,t.globalAlpha=.95,t.beginPath(),t.ellipse(a,l,c,h,d,0,Math.PI*2),t.fill(),t.globalAlpha=.5,t.fillStyle=s?"#2a4028":"#1c2e1e",t.beginPath(),t.ellipse(a,l,c*.5,h*.18,d,0,Math.PI*2),t.fill()}}t.globalAlpha=1}}function m1(i,t){return(e,n)=>{const s=$n(t);e.clearRect(0,0,n,n);const r=(o,a,l,c,h,d)=>{e.fillStyle=`rgb(${d*.72|0},${d|0},${d*.62|0})`,e.globalAlpha=.96,e.beginPath(),e.ellipse(o,a,l,c,h,0,Math.PI*2),e.fill(),e.globalAlpha=.55,e.strokeStyle="#33502f",e.lineWidth=1,e.beginPath(),e.moveTo(o-Math.cos(h)*l,a-Math.sin(h)*l),e.lineTo(o+Math.cos(h)*l,a+Math.sin(h)*l),e.stroke()};if(i==="spray"){e.strokeStyle="#8a9a7a",e.lineWidth=2,e.globalAlpha=.9,e.beginPath(),e.moveTo(n*.5,n*.95),e.lineTo(n*.5,n*.08),e.stroke();for(let o=0;o<26;o++){const a=n*.1+s()*n*.8,l=o%2?1:-1,c=150+s()*70;e.fillStyle=`rgb(${c*.7|0},${c|0},${c*.6|0})`,e.globalAlpha=.95,e.beginPath(),e.ellipse(n*.5+l*(4+s()*9),a,2+s()*2.5,5+s()*5,l*.9,0,Math.PI*2),e.fill()}}else if(i==="ovate")for(let o=0;o<7;o++){const a=n*.2+s()*n*.6,l=n*.15+s()*n*.7;r(a,l,9+s()*7,5.5+s()*4,(s()-.5)*1.2,150+s()*70)}else if(i==="fascicle")for(let o=0;o<4;o++){const a=n*.25+o*n*.17,l=n*.85-o%2*n*.1;for(let c=0;c<8;c++){const h=-Math.PI/2+(c-3.5)*.16+(s()-.5)*.1,d=n*(.3+s()*.18),u=140+s()*60;e.strokeStyle=`rgb(${u*.68|0},${u|0},${u*.58|0})`,e.lineWidth=2.2,e.globalAlpha=.95,e.beginPath(),e.moveTo(a,l),e.lineTo(a+Math.cos(h)*d,l+Math.sin(h)*d),e.stroke()}}else if(i==="petal")for(let o=0;o<9;o++){const a=n*.2+s()*n*.6,l=n*.2+s()*n*.6,c=200+s()*55;e.fillStyle=`rgb(${c|0},${c*.88|0},${c*.9|0})`,e.globalAlpha=.95;for(let h=0;h<5;h++){const d=h/5*Math.PI*2+s();e.beginPath(),e.ellipse(a+Math.cos(d)*5,l+Math.sin(d)*5,5.5,3.6,d,0,Math.PI*2),e.fill()}}e.globalAlpha=1}}function g1(i,t){const e=$n(99);i.fillStyle="#efe7d6",i.fillRect(0,0,t,t);for(let n=0;n<22;n++){const s=e()*t,r=e()*t,o=t*(.08+e()*.16),a=e()<.5?"210,203,188":"228,222,206",l=i.createRadialGradient(s,r,0,s,r,o);l.addColorStop(0,"rgba("+a+",0.10)"),l.addColorStop(1,"rgba("+a+",0)"),i.fillStyle=l,i.globalAlpha=1,i.beginPath(),i.arc(s,r,o,0,7),i.fill()}for(let n=0;n<2600;n++){const s=225+Math.floor(e()*28);i.fillStyle=`rgb(${s},${s-6},${s-20})`,i.globalAlpha=.35,i.fillRect(e()*t,e()*t,1.4,1.4)}i.globalAlpha=.08,i.fillStyle="#b09a78";for(let n=0;n<8;n++)i.beginPath(),i.arc(e()*t,e()*t,12+e()*30,0,7),i.fill();i.globalAlpha=1}function _1(i,t){const e=$n(5);i.fillStyle="#a8a06a",i.fillRect(0,0,t,t);for(let n=0;n<t;n+=3)i.fillStyle=n/3%2?"#9d955f":"#b3ab74",i.fillRect(0,n,t,2);for(let n=0;n<500;n++)i.fillStyle=e()<.5?"#8a824f":"#c0b87e",i.globalAlpha=.4,i.fillRect(e()*t,e()*t,2,1);i.globalAlpha=1}function x1(i,t){const e=$n(13);i.fillStyle="#f6efdd",i.fillRect(0,0,t,t);for(let n=0;n<900;n++)i.fillStyle=e()<.5?"#efe6d0":"#fbf5e6",i.globalAlpha=.5,i.fillRect(e()*t,e()*t,2,1);i.globalAlpha=1}function v1(i,t){const e=$n(31);i.fillStyle="#cfc6b4",i.fillRect(0,0,t,t);for(let n=0;n<1500;n++){const s=165+Math.floor(e()*70);i.fillStyle=`rgb(${s},${s-4},${s-14})`,i.beginPath(),i.arc(e()*t,e()*t,.8+e()*1.8,0,7),i.fill()}}function y1(i,t){const e=$n(77);i.fillStyle="#7d8f57",i.fillRect(0,0,t,t);for(let n=0;n<46;n++){const s=e()*t,r=e()*t,o=4+e()*16,a=e(),l=a<.4?"74,102,46":a<.75?"96,128,58":"112,140,72",c=i.createRadialGradient(s,r,0,s,r,o);c.addColorStop(0,"rgba("+l+",0.55)"),c.addColorStop(1,"rgba("+l+",0)"),i.fillStyle=c,i.globalAlpha=1,i.beginPath(),i.arc(s,r,o,0,7),i.fill()}for(let n=0;n<2200;n++)i.fillStyle=e()<.5?"#71834e":"#8a9c60",i.globalAlpha=.6,i.fillRect(e()*t,e()*t,1.5,3);i.globalAlpha=1}function M1(i,t){const e=$n(55);i.fillStyle="#9a968c",i.fillRect(0,0,t,t);for(let n=0;n<30;n++){const s=e()*t,r=e()*t,o=6+e()*30,a=118+Math.floor(e()*52)-26,l=i.createRadialGradient(s,r,0,s,r,o);l.addColorStop(0,"rgba("+a+","+a+","+(a+4)+",0.22)"),l.addColorStop(1,"rgba("+a+","+a+","+(a+4)+",0)"),i.fillStyle=l,i.globalAlpha=1,i.beginPath(),i.arc(s,r,o,0,7),i.fill()}for(let n=0;n<1200;n++){const s=120+Math.floor(e()*60);i.fillStyle=`rgb(${s},${s},${s-6})`,i.globalAlpha=.5,i.fillRect(e()*t,e()*t,2,2)}i.globalAlpha=.5,i.strokeStyle="rgba(38,38,42,1)",i.lineCap="round";for(let n=0;n<3;n++){let s=e()*t,r=e()*t;i.lineWidth=1.5+e()*1.5,i.beginPath(),i.moveTo(s,r);for(let o=0;o<7;o++)s+=(e()-.35)*26,r+=(e()-.35)*26,i.lineTo(s,r);i.stroke()}i.globalAlpha=.25,i.strokeStyle="#6f6b62";for(let n=0;n<6;n++)i.beginPath(),i.moveTo(e()*t,e()*t),i.lineTo(e()*t,e()*t),i.stroke();i.globalAlpha=1}function S1(i,t){const e=$n(2654435769);i.fillStyle="#808080",i.fillRect(0,0,t,t);for(let n=0;n<900;n++){const s=110+Math.floor(e()*60);i.fillStyle="rgb("+s+","+s+","+s+")",i.fillRect(Math.floor(e()*t),Math.floor(e()*t),1+Math.floor(e()*3),1+Math.floor(e()*3))}}function w1(i,t){const e=$n(5304813);i.fillStyle="#5a4632",i.fillRect(0,0,t,t);for(let n=0;n<40;n++){const s=e()*t,r=e()*t,o=4+e()*16,a=e()<.5?"66,50,34":"96,78,56",l=i.createRadialGradient(s,r,0,s,r,o);l.addColorStop(0,"rgba("+a+",0.5)"),l.addColorStop(1,"rgba("+a+",0)"),i.fillStyle=l,i.globalAlpha=1,i.beginPath(),i.arc(s,r,o,0,7),i.fill()}for(let n=0;n<300;n++)i.fillStyle=e()<.5?"rgba(40,30,20,0.5)":"rgba(140,115,85,0.5)",i.globalAlpha=1,i.fillRect(Math.floor(e()*t),Math.floor(e()*t),2,2);i.globalAlpha=1}function b1(i,t){i.fillStyle="#2e3d5c",i.fillRect(0,0,t,t),i.fillStyle="#efe7d2",i.fillRect(t*.18,0,t*.1,t),i.fillRect(t*.72,0,t*.1,t),i.beginPath(),i.arc(t/2,t*.34,t*.13,0,7),i.fill(),i.fillStyle="#2e3d5c",i.font=`bold ${Math.floor(t*.16)}px serif`,i.textAlign="center",i.fillText("TEA",t/2,t*.72)}function E1(i,t){const e=i.createLinearGradient(0,0,0,t);e.addColorStop(0,"#f3ecdb"),e.addColorStop(1,"#e4d8bd"),i.fillStyle=e,i.fillRect(0,0,t,t),i.strokeStyle="#4a4a48",i.lineCap="round";const n=(s,r,o,a)=>{i.lineWidth=o,i.beginPath(),i.moveTo(a,s),i.quadraticCurveTo(a+t*.2,s-r,a+t*.38,s-r*.25),i.quadraticCurveTo(a+t*.5,s-r*.7,a+t*.62,s-r*.1),i.stroke()};i.globalAlpha=.75,n(t*.62,t*.3,7,t*.05),i.globalAlpha=.5,n(t*.7,t*.2,5,t*.35),i.globalAlpha=.9,i.fillStyle="#b0533c",i.beginPath(),i.arc(t*.68,t*.26,t*.05,0,7),i.fill(),i.globalAlpha=1,i.fillStyle="#a33327",i.fillRect(t*.12,t*.78,t*.1,t*.1),i.fillStyle="#f3ecdb",i.font=`${Math.floor(t*.07)}px serif`,i.textAlign="center",i.fillText("wa",t*.17,t*.855)}function T1(i,t){i.fillStyle="#e9dfc6",i.fillRect(0,0,t,t),i.strokeStyle="#c9b98f",i.lineWidth=2,i.globalAlpha=.7;for(let e=-t;e<t*2;e+=26)i.beginPath(),i.arc(e,t*.9,22,Math.PI,0),i.stroke(),i.beginPath(),i.arc(e,t*.45,22,Math.PI,0),i.stroke();i.globalAlpha=1}function ef(){const i=en(256,cl(!1),1,1),t=en(256,cl(!0),1,1),e={woodDark:new mt({map:t,color:12164995,roughness:.75,envMapIntensity:.25}),wood:new mt({map:i,color:13609080,roughness:.8,envMapIntensity:.25}),woodFloor:new mt({map:en(256,cl(!1),4,1),color:14201219,roughness:.7,envMapIntensity:.3}),plaster:new mt({map:en(256,g1,1,1),color:16777215,roughness:.95,envMapIntensity:.15}),paper:new mt({map:en(128,x1,1,1),color:16774106,emissive:16768926,emissiveIntensity:.38,transparent:!0,opacity:.92,roughness:.9,side:Oe}),tatami:new mt({map:en(256,_1,1,1),color:16777215,roughness:.95,envMapIntensity:.1}),tatamiEdge:new mt({color:3099194,roughness:.9}),roofTile:new mt({color:4869461,roughness:.55,metalness:.08,envMapIntensity:.5}),roofTileAlt:new mt({color:3948358,roughness:.6,metalness:.08,envMapIntensity:.5}),ridge:new mt({color:3487549,roughness:.5,metalness:.1,envMapIntensity:.6}),roofUnder:new mt({map:t,color:9072466,roughness:.9}),stone:new mt({map:en(256,M1,1,1),color:16777215,roughness:.95,envMapIntensity:.15}),gravel:new mt({map:en(256,v1,6,6),color:16777215,roughness:1}),grass:new mt({map:en(256,y1,10,10),color:16777215,roughness:1}),moss:new mt({color:6126906,roughness:1,envMapIntensity:.1}),mossDark:new mt({color:4613420,roughness:1,envMapIntensity:.1}),bamboo:new mt({color:8364110,roughness:.6,envMapIntensity:.3}),bambooLeaf:new mt({color:5143092,roughness:.8,side:Oe}),trunk:new mt({map:t,color:10123868,roughness:.9}),mapleLeaf:new mt({color:16777215,roughness:.75,side:Oe}),fusuma:new mt({map:en(256,T1,1,1),color:16777215,roughness:.9}),noren:new mt({map:en(256,b1,1,1),color:16777215,roughness:.9,side:Oe}),scroll:new mt({map:en(256,E1,1,1),color:16777215,roughness:.9}),lanternGlow:new mt({color:16767392,emissive:16751686,emissiveIntensity:2.2}),paperLantern:new mt({color:16770232,emissive:16757867,emissiveIntensity:1.4,roughness:.8}),bronze:new mt({color:4997688,roughness:.45,metalness:.7,envMapIntensity:.8})};e.woodNew=e.woodNew||new mt({map:en(256,ca(501,"#9a7040","#7a5630","#bd9257"),1,1),color:16777215,roughness:.7}),e.woodAged=e.woodAged||new mt({map:en(256,ca(502,"#77685a","#5c5148","#8d8172"),2,1),color:16777215,roughness:.9}),e.glassDark=e.glassDark||new mt({color:1053980,roughness:.08,metalness:.9}),e.bronze=e.bronze||new mt({color:7035443,roughness:.35,metalness:.9}),e.iron=e.iron||new mt({color:2829102,roughness:.5,metalness:.8}),e.soil=e.soil||new mt({color:4865843,roughness:1}),e.thatch=e.thatch||new mt({color:10127967,roughness:1}),e._wet=e._wet||[],e.registerWet=r=>(r&&!e._wet.includes(r)&&e._wet.push(r),r),e.plasterTinted=r=>new mt({color:r,roughness:.95}),[e.wood,e.woodDark,e.woodNew,e.woodAged,e.plaster,e.tile,e.stone,e.soil].forEach(r=>r&&e.registerWet(r)),e.tile=e.tile||e.roofTile,e.shoji=e.shoji||e.paper,e.registerWet(e.tile);const n=document.createElement("canvas");n.width=n.height=128,S1(n.getContext("2d"),128);const s=new En(n);s.wrapS=s.wrapT=On,s.repeat.set(3,3),s.colorSpace=Un;for(const r of["wood","woodDark","woodNew","woodAged","plaster","stone","soil"])e[r]&&(e[r].roughnessMap=s,e[r].roughness=1);for(const r of["roofTile","roofTileAlt","ridge"])e[r]&&(e[r].roughnessMap=s,e[r].roughness=1,e[r].bumpMap=s,e[r].bumpScale=.25);e.soil.map=en(128,w1,4,4),e.soil.needsUpdate=!0;{const r=(h,d=.9)=>new mt({color:h,roughness:d,envMapIntensity:.15}),o=(h,d=.8)=>new mt({color:h,roughness:d,side:Oe,envMapIntensity:.1});e.barkSugi=e.barkSugi||r(6965812),e.barkHinoki=e.barkHinoki||r(8018496),e.barkKeyaki=e.barkKeyaki||r(9079430,.85),e.barkMomiji=e.barkMomiji||r(8022620,.85),e.barkOrchard=e.barkOrchard||r(6969930),e.leafSugi=e.leafSugi||o(2968106,.9),e.leafBroad=e.leafBroad||o(4680501),e.leafMomiji=e.leafMomiji||o(5929530,.75),e.leafBlossom=e.leafBlossom||o(15247544,.7),e.leafPine=e.leafPine||o(4020784,.85),e.leafBamboo=e.leafBamboo||o(4878392,.75),e.leafSasa=e.leafSasa||o(4156212),e.leafFern=e.leafFern||o(3828544),e.leafSeedling=e.leafSeedling||o(5601850);const a=en(128,p1(7701),1,1);for(const h of["leafSugi","leafBroad","leafMomiji","leafBlossom","leafPine","leafBamboo","leafSasa","leafFern","leafSeedling","bambooLeaf"]){const d=e[h];d&&(d.map=a,d.alphaTest=.45,d.color.setHex(16777215),d.needsUpdate=!0)}const l={leafSugi:"spray",leafBroad:"ovate",leafPine:"fascicle",leafBlossom:"petal"};let c=7710;for(const[h,d]of Object.entries(l)){const u=e[h];u&&(u.map=en(128,m1(d,c++),1,1),u.alphaTest=.45,u.color.setHex(16777215),u.needsUpdate=!0)}e.shoot=e.shoot||new mt({color:10135658,roughness:.8}),e.litter=e.litter||new mt({color:4864038,roughness:1}),e.impostor=e.impostor||new zn({color:3360814,side:Oe,fog:!0})}return e}const A1=Object.freeze(Object.defineProperty({__proto__:null,buildMaterials:ef},Symbol.toStringTag,{value:"Module"}));function Ti(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Ht(i,t,e,n,s=0,r=0,o=0,a=0){const l=new tt(new Lt(i,t,e),n);return l.position.set(s,r,o),l.rotation.y=a,l.castShadow=!0,l.receiveShadow=!0,l}const gn=new ne;function Si(i,t){for(let e=0;e<t.length;e++){const n=t[e];gn.position.set(n.p[0],n.p[1],n.p[2]),gn.rotation.set(n.rx||0,n.ry||0,n.rz||0);const s=n.s===void 0?1:n.s;gn.scale.set(n.sx===void 0?s:n.sx,n.sy===void 0?s:n.sy,n.sz===void 0?s:n.sz),gn.updateMatrix(),i.setMatrixAt(e,gn.matrix),n.c&&i.setColorAt(e,n.c)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),i.castShadow=!0,i.receiveShadow=!0,i}function nf(i,t,e=.75,n=1){const s=new Jn(i,n),r=Ti(t),o=s.attributes.position,a=new O,l=new Map;for(let c=0;c<o.count;c++){a.fromBufferAttribute(o,c);const h=`${a.x.toFixed(3)},${a.y.toFixed(3)},${a.z.toFixed(3)}`;let d=l.get(h);d===void 0&&(d=.78+r()*.5,l.set(h,d)),a.multiplyScalar(d),a.y*=e,o.setXYZ(c,a.x,a.y,a.z)}return s.computeVertexNormals(),s}let Po=null;function sf(){if(Po)return Po;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,6,64,64,62);return e.addColorStop(0,"rgba(20,12,6,0.55)"),e.addColorStop(.6,"rgba(20,12,6,0.28)"),e.addColorStop(1,"rgba(20,12,6,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),Po=new En(i),Po}function Ma(i,t,e=1){const n=new tt(new Te(i,t),new zn({map:sf(),transparent:!0,opacity:e,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));return n.rotation.x=-Math.PI/2,n.renderOrder=1,n}function nh(i,t,e,n,s,r,o){const a=new Lt(s,n,r),l=new Lt(e,s,r),c=new Jt,h=(f,g)=>{const v=new ye(f,o,g);return v.castShadow=!1,v.receiveShadow=!0,v},d=h(a,i+1),u=h(l,t+1);for(let f=0;f<=i;f++)gn.position.set(-e/2+f*e/i,0,0),gn.rotation.set(0,0,0),gn.scale.set(1,1,1),gn.updateMatrix(),d.setMatrixAt(f,gn.matrix);for(let f=0;f<=t;f++)gn.position.set(0,-n/2+f*n/t,0),gn.rotation.set(0,0,0),gn.scale.set(1,1,1),gn.updateMatrix(),u.setMatrixAt(f,gn.matrix);return d.instanceMatrix.needsUpdate=u.instanceMatrix.needsUpdate=!0,c.add(d,u),c}const R1=Object.freeze(Object.defineProperty({__proto__:null,blobTexture:sf,contactShadow:Ma,displacedRock:nf,fillInstances:Si,makeBeam:Ht,makeLatticeBars:nh,mulberry:Ti},Symbol.toStringTag,{value:"Module"})),rf={w:10,d:6.4,floorY:.7,wallTop:3.6,pillar:.22};function Do(i,t,e,n=[4,6]){const s=new Jt,r=.07,o=.06,a=e.woodDark;s.add(Ht(i,r,o,a,0,t/2-r/2,0)),s.add(Ht(i,r,o,a,0,-t/2+r/2,0)),s.add(Ht(r,t,o,a,-i/2+r/2,0,0)),s.add(Ht(r,t,o,a,i/2-r/2,0,0)),s.add(Ht(.05,t-2*r,o*.7,a,0,0,0));const l=new tt(new Te(i-2*r,t-2*r),e.paper);l.position.z=-.005,l.receiveShadow=!0,s.add(l);const c=nh(n[0],n[1],i-2*r,t-2*r,.028,.02,e.woodDark);c.position.z=.018,s.add(c);const h=new tt(new me(.035,.035,.03,12),e.bronze);return h.rotation.x=Math.PI/2,h.position.set(i/2-.16,0,.035),s.add(h),s}function C1(i){const t=new Jt,e=Ti(1234),{w:n,d:s,floorY:r,wallTop:o,pillar:a}=rf,l=n/2,c=s/2,h=Ma(n+3.4,s+3.6,.9);h.position.set(0,.03,0),t.add(h);{const P=nf(.32,900,.62,0),L=[];for(let N=-l;N<=l+.01;N+=1.25)for(let z=-c;z<=c+.01;z+=1.6)L.push({p:[N+(e()-.5)*.15,.18,z+(e()-.5)*.15],ry:e()*6.3,s:.8+e()*.5});const I=new ye(P,i.stone,L.length);Si(I,L),t.add(I)}t.add(Ht(n+.3,.24,.24,i.woodDark,0,r-.12,c)),t.add(Ht(n+.3,.24,.24,i.woodDark,0,r-.12,-c)),t.add(Ht(.24,.24,s,i.woodDark,-l,r-.12,0)),t.add(Ht(.24,.24,s,i.woodDark,l,r-.12,0));for(let P=-l+.8;P<l;P+=1.1)t.add(Ht(.14,.18,s-.2,i.wood,P,r-.1,0));const d=Ht(n+.2,.1,s,i.woodFloor,0,r-.02,0);t.add(d);const u=o-r,f=r+u/2,g=[];for(let P=0;P<=5;P++)g.push(-l+P*n/5);const v=[];g.forEach(P=>{v.push([P,c]),v.push([P,-c])}),[-c+s/4,0,c-s/4].forEach(P=>{v.push([-l,P]),v.push([l,P])}),v.forEach(([P,L])=>t.add(Ht(a,u,a,i.woodDark,P,f,L)));const p=o-.12;t.add(Ht(n+.24,.24,.2,i.woodDark,0,p,c)),t.add(Ht(n+.24,.24,.2,i.woodDark,0,p,-c)),t.add(Ht(.2,.24,s+.24,i.woodDark,-l,p,0)),t.add(Ht(.2,.24,s+.24,i.woodDark,l,p,0));const m=r+2.32;t.add(Ht(n,.14,.12,i.woodDark,0,m,c)),t.add(Ht(n,.1,.14,i.woodDark,0,r+.08,c)),t.add(Ht(n,.14,.12,i.woodDark,0,m,-c)),t.add(Ht(.14,.14,s,i.woodDark,-l,m,0)),t.add(Ht(.14,.14,s,i.woodDark,l,m,0));const y=(m+.07+p-.12)/2,w=p-.12-(m+.07);t.add(Ht(n-.2,w,.1,i.plaster,0,y,c)),t.add(Ht(n-.2,w,.1,i.plaster,0,y,-c)),t.add(Ht(.1,w,s-.2,i.plaster,-l,y,0)),t.add(Ht(.1,w,s-.2,i.plaster,l,y,0));const _=.1,M=m-(r+.1),b=(m+r+.1)/2;t.add(Ht(n-.2,M,_,i.plaster,0,b,-c)),[-l,l].forEach(P=>{t.add(Ht(_,M,s-.2,i.plaster,P,b,0))}),[-l,l].forEach(P=>{const L=P>0?1:-1;[-1.5,1.5].forEach(I=>{const N=r+1.75,z=new Jt,G=1.5,U=1;z.add(Ht(G+.14,.09,.14,i.woodDark,0,U/2,0)),z.add(Ht(G+.14,.09,.14,i.woodDark,0,-U/2,0)),z.add(Ht(.09,U,.14,i.woodDark,-G/2,0,0)),z.add(Ht(.09,U,.14,i.woodDark,G/2,0,0));const k=new tt(new Te(G,U),i.paper);k.rotation.y=Math.PI/2,z.add(k);const X=nh(5,3,G,U,.03,.02,i.woodDark);X.rotation.y=Math.PI/2,X.position.x=L*.06,z.add(X),z.position.set(P+L*.09,N,I),t.add(z)})});const R=n/5,x=m-(r+.12),S=r+.12+x/2,E=[];for(let P=1;P<=3;P++){const L=-l+R*(P+.5),I=Do(R-.3,x,i);I.position.set(L-(R-.3)/4,S,c+.03);const N=Do(R-.3,x,i);N.position.set(L+(R-.3)/4,S,c-.04),t.add(I,N),P===2&&E.push({node:I,closed:I.position.x,open:I.position.x-(R-.3)/2},{node:N,closed:N.position.x,open:N.position.x+(R-.3)/2})}{const P=Do(R-.3,x,i);P.position.set(2,S,c-.04);const L=Do(R-.3,x,i);L.position.set(2,S,c+.1),t.add(P,L)}let T;{const P=-l+R*.5,L=Ht(R-.4,.12,1.6,i.stone,P,r-.06,c-.7);L.receiveShadow=!0,t.add(L);const I=Ht(1.5,.28,.55,i.stone,P,.2,c+1.65);t.add(I),t.add(Ht(.16,x+.1,.16,i.woodDark,P-.85,S,c+.05)),t.add(Ht(.16,x+.1,.16,i.woodDark,P+.85,S,c+.05)),t.add(Ht(1.9,.18,.2,i.woodDark,P,m+.05,c+.05)),T=new Jt;for(let N=0;N<3;N++){const z=new tt(new Lt(.5,.85,.02),i.noren);z.position.set(-.53+N*.53,-.5,0),z.castShadow=!0,T.add(z)}T.position.set(P,m-.06,c+.12),t.add(T)}{const P=r-.06,L=Ht(n+.6,.12,1.25,i.woodFloor,0,P,c+.65);t.add(L);const I=Ht(1.25,.12,s+.6,i.woodFloor,l+.65,P,0);t.add(I);for(let G=-l-.2;G<=l+.25;G+=1.7)t.add(Ht(.14,P,.14,i.woodDark,G,P/2,c+1.2));for(let G=-c;G<=c+.01;G+=1.6)t.add(Ht(.14,P,.14,i.woodDark,l+1.2,P/2,G));const N=3.78-P;for(let G=-l-.2;G<=l+.25;G+=2.55)t.add(Ht(.13,N,.13,i.woodDark,G,P+N/2,c+1.2));for(let G=-c;G<=c+.01;G+=2.1)t.add(Ht(.13,N,.13,i.woodDark,l+1.2,P+N/2,G));t.add(Ht(n+.7,.16,.14,i.woodDark,0,3.62,c+1.2)),t.add(Ht(.14,.16,s+.7,i.woodDark,l+1.2,3.62,0));const z=P+.55;for(let G=-c;G<=1;G+=1.05)t.add(Ht(.09,.62,.09,i.woodDark,l+1.2,P+.31,G));t.add(Ht(.08,.08,4.4,i.wood,l+1.2,z,-c+2.2)),t.add(Ht(.06,.06,4.4,i.wood,l+1.2,z-.28,-c+2.2)),t.add(Ht(1.6,.22,.5,i.stone,-l+R*4.5,.16,c+1.65))}let C;{const P=new mt({color:5917240,roughness:.7,side:Oe}),L=new me(.09,.09,n+2.6,10,1,!0,Math.PI,Math.PI);L.rotateZ(Math.PI/2),[c+1.55,-c-1.55].forEach(U=>{const k=new tt(L,P);k.position.set(0,3.66,U),t.add(k)});const I=new me(.055,.055,3.5,8);[[-l-1.2,c+1.55],[-l-1.2,-c-1.55]].forEach(([U,k])=>{const X=new tt(I,i.bamboo);X.position.set(U,1.85,k),X.castShadow=!0,t.add(X)}),C=new Jt;const N=new ir(.055,.014,6,10);for(let U=0;U<16;U++){const k=new tt(N,i.bronze);k.position.y=-U*.2,k.rotation.y=U%2*Math.PI/2,C.add(k)}C.position.set(l+1.2,3.6,c+1.55),t.add(C);const z=[];for(let U=0;U<=8;U++){const k=U/8*Math.PI;z.push(new ut(.12+Math.sin(k)*.3,U*.045))}const G=new tt(new nr(z,14),i.stone);G.position.set(l+1.2,0,c+1.55),G.castShadow=G.receiveShadow=!0,t.add(G)}return{group:t,noren:T,rainChain:C,openBayX:-l+R*4.5,sliders:E}}function P1(i){const t=new Jt;i.ridge.side=Oe;const e=6.42,n=3.7,s=4.7,r=6,o=s,a=e-n,l=Math.hypot(o,a),c=Math.atan2(a,o),h=o/l,d=a/l,u=r*2,f=new Lt(u,.16,l+.35),g=(e+n)/2-.06,v=s/2,p=new tt(f,i.roofUnder);p.position.set(0,g,v),p.rotation.x=c;const m=p.clone();m.position.z=-v,m.rotation.x=-c,p.castShadow=m.castShadow=!0,p.receiveShadow=m.receiveShadow=!0,t.add(p,m),t.add(Ht(u+.15,.3,.09,i.woodDark,0,n-.02,s+.02)),t.add(Ht(u+.15,.3,.09,i.woodDark,0,n-.02,-s-.02));{const y=new Lt(.12,.15,.9),w=[];for(let M=-5.6;M<=5.61;M+=.62)w.push({p:[M,n-.02,s-.35],rx:c}),w.push({p:[M,n-.02,-4.3500000000000005],rx:-c});const _=new ye(y,i.woodDark,w.length);Si(_,w),_.castShadow=!1,t.add(_)}{const y=new me(.085,.095,.55,7,1,!0);y.rotateZ(Math.PI/2),y.rotateY(Math.PI/2);const w=11,_=56,M=new ye(y,i.roofTile,w*_*2),b=Ti(20240),R=new Nt;let x=0;const S=[];for(let E=0;E<2;E++){const T=E===0?1:-1;for(let C=0;C<w;C++){const P=.32+C*((l-.35)/w),L=T*(s-P*h),I=n+P*d+.1;for(let N=0;N<_;N++){const z=-5.78+N*(11.56/(_-1));S.push({p:[z,I,L],rx:T*c});const G=.82+b()*.3;R.setRGB(G,G*1.01,G*1.06),M.setColorAt(x++,R)}}}Si(M,S),M.instanceColor.needsUpdate=!0,M.castShadow=!1,M.receiveShadow=!0,t.add(M)}{const y=new me(.17,.17,.72,9,1,!0,0,Math.PI);y.rotateZ(Math.PI/2);const w=16,_=new ye(y,i.ridge,w),M=[];for(let b=0;b<w;b++)M.push({p:[-5.6+b*(11.2/(w-1)),e+.02,0]});Si(_,M),_.castShadow=!1,t.add(_),t.add(Ht(.5,.22,.4,i.ridge,-5.85,e-.05,0)),t.add(Ht(.5,.22,.4,i.ridge,5.85,e-.05,0))}[-1,1].forEach(y=>{const w=new Jt;w.add(Ht(.22,.5,.55,i.ridge,0,.2,0));const _=new tt(new me(.3,.3,.14,12),i.ridge);_.rotation.z=Math.PI/2,_.position.y=.55,_.castShadow=!0,w.add(_);const M=new tt(new xn(.12,10,8),i.ridge);M.position.y=.78,M.castShadow=!0,w.add(M),w.position.set(y*5.95,e-.1,0),t.add(w)});{const y=new qr;y.moveTo(-3.2,3.55),y.lineTo(3.2,3.55),y.lineTo(0,e-.12),y.closePath();const w=new ma(y);[4.94,-4.94].forEach(_=>{const M=new tt(w,i.plaster);M.rotation.y=Math.PI/2,M.position.x=_,M.castShadow=M.receiveShadow=!0,M.material.side=Oe,t.add(M)}),[1,-1].forEach(_=>{[1,-1].forEach(M=>{const b=Ht(.1,.24,l+.4,i.woodDark,_*(r-.02),g+.12,M*v);b.rotation.x=M*c,t.add(b)})})}{const y=new Lt(2,.09,1.7),w=c-.3;[[5.55,1,4.35,1],[-5.55,-1,4.35,1],[5.55,1,-4.35,-1],[-5.55,-1,-4.35,-1]].forEach(([M,b,R,x])=>{const S=new tt(y,i.roofUnder);S.position.set(M,n+.16,R),S.rotation.order="YXZ",S.rotation.y=b*x*.42,S.rotation.x=x*w,S.castShadow=S.receiveShadow=!0,t.add(S);const E=new me(.085,.095,.55,7,1,!0);E.rotateZ(Math.PI/2),E.rotateY(Math.PI/2);const T=new ye(E,i.roofTileAlt,5),C=[];for(let P=0;P<5;P++)C.push({p:[M-.7+P*.35,n+.38,R-x*.15],rx:x*w});Si(T,C),T.castShadow=!1,t.add(T)})}return{group:t,ridgeY:e,eaveY:n,eaveZ:s}}function D1(i){const t=new Jt,{floorY:e}=rf,n=-.9,s=4.9,r=-2.9,o=2.9,a=(n+s)/2;{const f=e+.06;for(let g=r+.1;g+1.82<o+.01;g+=1.82+.02)for(let v=n+.1;v+.92<s+.01;v+=.92+.02){const p=new tt(new Lt(.92,.06,1.82),i.tatami);p.position.set(v+.92/2,f,g+1.82/2),p.receiveShadow=!0,t.add(p);const m=Ht(.92+.02,.06+.005,.035,i.tatamiEdge,v+.92/2,f,g+1.82-.017);m.castShadow=!1,t.add(m)}}{const h=3-e;[[n,0],[a,0],[s,-2],[s,2]].forEach(([u,f])=>t.add(Ht(.16,h,.16,i.woodDark,u,e+h/2,f)));const d=new tt(new Lt(s-n+.4,.08,o-r+.4),i.woodDark);d.position.set(a,3.02,0),t.add(d)}{const h=Ht(.1,2.2,o-r,i.plaster,n,e+1.15,0);t.add(h);for(let d=0;d<3;d++){const u=new Jt,f=1.75,g=1.7;u.add(Ht(f,.06,.05,i.woodDark,0,g/2,0)),u.add(Ht(f,.06,.05,i.woodDark,0,-g/2,0)),u.add(Ht(.06,g,.05,i.woodDark,-f/2,0,0)),u.add(Ht(.06,g,.05,i.woodDark,f/2,0,0));const v=new tt(new Te(f-.1,g-.1),i.fusuma);v.rotation.y=Math.PI/2,u.add(v);const p=new tt(new me(.03,.03,.03,10),i.bronze);p.rotation.z=Math.PI/2,p.position.set(.04,0,.35),u.add(p),u.position.set(n+.09,e+1,-1.85+d*1.85),t.add(u)}}{const u=Ht(2.2,.16,1,i.wood,-2.6,e+.14,r+.55);t.add(u),t.add(Ht(.14,2.2,.14,i.woodDark,-2.6-2.2/2,e+1.1,r+.15)),t.add(Ht(.14,2.2,.14,i.woodDark,-2.6+2.2/2,e+1.1,r+.15)),t.add(Ht(2.2+.2,.14,.16,i.woodDark,-2.6,e+2.25,r+.15));const f=new Jt,g=new tt(new Lt(.55,1.05,.02),i.scroll);f.add(g);const v=new me(.025,.025,.7,8),p=new tt(v,i.woodDark);p.rotation.z=Math.PI/2,p.position.y=.55;const m=p.clone();m.position.y=-.55,f.add(p,m),f.position.set(-2.6-.45,e+1.55,r+.22),f.rotation.x=.03,t.add(f);const y=[];for(let R=0;R<=8;R++){const x=R/8*Math.PI;y.push(new ut(.03+Math.sin(x)*.11,R*.035))}const w=new tt(new nr(y,12),new mt({color:3824268,roughness:.35,envMapIntensity:.7}));w.position.set(-2.6+.55,e+.22,r+.55),w.castShadow=!0,t.add(w);const _=new tt(new me(.012,.012,.5,6),i.mossDark);_.position.set(-2.6+.55,e+.5,r+.55),t.add(_);const M=new tt(new Jn(.09,0),new mt({color:13920650,roughness:.7}));M.position.set(-2.6+.55,e+.78,r+.55),M.castShadow=!0,t.add(M);const b=new tt(new Jn(.14,0),i.stone);b.scale.y=.6,b.position.set(-2.6+.1,e+.26,r+.6),b.castShadow=!0,t.add(b)}{t.add(Ht(1.1,.07,.7,i.wood,2.2,e+.42,.6)),[[-.45,-.25],[.45,-.25],[-.45,.25],[.45,.25]].forEach(([f,g])=>t.add(Ht(.07,.32,.07,i.woodDark,2.2+f,e+.22,.6+g)));const u=new mt({color:8007221,roughness:.9});[[2.2-.2,.6+.75],[2.2+.35,.6-.7]].forEach(([f,g])=>{const v=new tt(new Lt(.5,.09,.5),u);v.position.set(f,e+.12,g),v.rotation.y=.2,v.castShadow=v.receiveShadow=!0,t.add(v)})}const l=new Jt;{const h=new tt(new me(.012,.012,.5,6),i.woodDark);h.position.y=.45,l.add(h);const d=new tt(new me(.19,.19,.34,12),i.paperLantern);l.add(d);const u=new tt(new me(.1,.14,.05,10),i.woodDark);u.position.y=.19;const f=u.clone();f.position.y=-.19,l.add(u,f);const g=new tt(new me(.015,.03,.16,8),new mt({color:10695463,roughness:.8}));g.position.y=-.3,l.add(g),l.position.set(2,2.35,.4),t.add(l)}const c=new th(16757867,5,9,2);return c.position.set(2,2.3,.4),t.add(c),{group:t,lantern:l,lanternLight:c}}const L1={x:7.5,z:6,w:4.6,d:2.9};function I1(i){const t=new Jt,{x:e,z:n,w:s,d:r}=L1,o=new tt(new Zn(1,40),new mt({color:2241323,roughness:1}));o.rotation.x=-Math.PI/2,o.scale.set(s/2+.15,r/2+.15,1),o.position.set(e,-.1,n),o.receiveShadow=!0,t.add(o);const a=new mt({color:5337212,roughness:.1,metalness:.85,envMapIntensity:1.1,transparent:!0,opacity:.93}),l=30,c=18,h=new Te(s,r,l,c),d=new tt(h,a);d.rotation.x=-Math.PI/2,d.position.set(e,.06,n),d.receiveShadow=!0,t.add(d);const u=h.attributes.position.array.slice();{const g=Ti(646),v=22,p=new Jn(.22,0),m=new ye(p,i.stone,v),y=[];for(let w=0;w<v;w++){const _=w/v*Math.PI*2;y.push({p:[e+Math.cos(_)*(s/2+.1),.1,n+Math.sin(_)*(r/2+.1)],ry:g()*6.3,s:.8+g()*.6,sy:.55})}Si(m,y),t.add(m)}function f(g,v=null){const p=h.attributes.position,y=1+(v&&typeof v.wetness=="number"?Math.min(Math.max(v.wetness,0),1):0)*.35;for(let w=0;w<p.count;w++){const _=u[w*3],M=u[w*3+1];p.setZ(w,(Math.sin(_*2.1+g*1.7)*.022+Math.cos(M*2.8+g*2.2)*.02)*y)}p.needsUpdate=!0,h.computeVertexNormals()}return{group:t,update:f,waterMat:a}}class N1 extends Q0{constructor(t){super(t),this.type=on}parse(t){const o=function(x,S){switch(x){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(S||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(S||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(S||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(S||""))}},h=`
`,d=function(x,S,E){S=S||1024;let C=x.pos,P=-1,L=0,I="",N=String.fromCharCode.apply(null,new Uint16Array(x.subarray(C,C+128)));for(;0>(P=N.indexOf(h))&&L<S&&C<x.byteLength;)I+=N,L+=N.length,C+=128,N=String.fromCharCode.apply(null,new Uint16Array(x.subarray(C,C+128)));return-1<P?(x.pos+=L+P+1,I+N.slice(0,P)):!1},u=function(x){const S=/^#\?(\S+)/,E=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,T=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,C=/^\s*FORMAT=(\S+)\s*$/,P=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,L={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let I,N;for((x.pos>=x.byteLength||!(I=d(x)))&&o(1,"no header found"),(N=I.match(S))||o(3,"bad initial token"),L.valid|=1,L.programtype=N[1],L.string+=I+`
`;I=d(x),I!==!1;){if(L.string+=I+`
`,I.charAt(0)==="#"){L.comments+=I+`
`;continue}if((N=I.match(E))&&(L.gamma=parseFloat(N[1])),(N=I.match(T))&&(L.exposure=parseFloat(N[1])),(N=I.match(C))&&(L.valid|=2,L.format=N[1]),(N=I.match(P))&&(L.valid|=4,L.height=parseInt(N[1],10),L.width=parseInt(N[2],10)),L.valid&2&&L.valid&4)break}return L.valid&2||o(3,"missing format specifier"),L.valid&4||o(3,"missing image size specifier"),L},f=function(x,S,E){const T=S;if(T<8||T>32767||x[0]!==2||x[1]!==2||x[2]&128)return new Uint8Array(x);T!==(x[2]<<8|x[3])&&o(3,"wrong scanline width");const C=new Uint8Array(4*S*E);C.length||o(4,"unable to allocate buffer space");let P=0,L=0;const I=4*T,N=new Uint8Array(4),z=new Uint8Array(I);let G=E;for(;G>0&&L<x.byteLength;){L+4>x.byteLength&&o(1),N[0]=x[L++],N[1]=x[L++],N[2]=x[L++],N[3]=x[L++],(N[0]!=2||N[1]!=2||(N[2]<<8|N[3])!=T)&&o(3,"bad rgbe scanline format");let U=0,k;for(;U<I&&L<x.byteLength;){k=x[L++];const dt=k>128;if(dt&&(k-=128),(k===0||U+k>I)&&o(3,"bad scanline data"),dt){const yt=x[L++];for(let wt=0;wt<k;wt++)z[U++]=yt}else z.set(x.subarray(L,L+k),U),U+=k,L+=k}const X=T;for(let dt=0;dt<X;dt++){let yt=0;C[P]=z[dt+yt],yt+=T,C[P+1]=z[dt+yt],yt+=T,C[P+2]=z[dt+yt],yt+=T,C[P+3]=z[dt+yt],P+=4}G--}return C},g=function(x,S,E,T){const C=x[S+3],P=Math.pow(2,C-128)/255;E[T+0]=x[S+0]*P,E[T+1]=x[S+1]*P,E[T+2]=x[S+2]*P,E[T+3]=1},v=function(x,S,E,T){const C=x[S+3],P=Math.pow(2,C-128)/255;E[T+0]=ao.toHalfFloat(Math.min(x[S+0]*P,65504)),E[T+1]=ao.toHalfFloat(Math.min(x[S+1]*P,65504)),E[T+2]=ao.toHalfFloat(Math.min(x[S+2]*P,65504)),E[T+3]=ao.toHalfFloat(1)},p=new Uint8Array(t);p.pos=0;const m=u(p),y=m.width,w=m.height,_=f(p.subarray(p.pos),y,w);let M,b,R;switch(this.type){case Pn:R=_.length/4;const x=new Float32Array(R*4);for(let E=0;E<R;E++)g(_,E*4,x,E*4);M=x,b=Pn;break;case on:R=_.length/4;const S=new Uint16Array(R*4);for(let E=0;E<R;E++)v(_,E*4,S,E*4);M=S,b=on;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:y,height:w,data:M,header:m.string,gamma:m.gamma,exposure:m.exposure,type:b,colorSpace:Or,minFilter:Ye,magFilter:Ye,generateMipmaps:!1,flipY:!0}}setDataType(t){return this.type=t,this}}class U1 extends N1{constructor(t){console.warn("RGBELoader has been deprecated. Please use HDRLoader instead."),super(t)}}const O1=[{key:"bark",albedo:"vendor/commons/sugi_bark/1280px-Cryptomeria_japonica_(bark)_of_Okuteshinmei-jinja.jpg",hasRough:!1,hasNormal:!1,materialKeys:["trunk"],repeat:[1,2],fallbackNote:"procedural darkWood canvas (materials.js trunk) stays when file missing"},{key:"woodAged",albedo:"vendor/commons/weathered_wood/1280px-Weathered_barn_wood_with_worm_holes.jpg",hasRough:!1,hasNormal:!1,materialKeys:["woodAged"],repeat:[2,1],fallbackNote:"procedural woodDrawTone(502) canvas stays when file missing"},{key:"moss",albedo:"vendor/commons/moss/1280px-Moss_green_texture.jpg",hasRough:!1,hasNormal:!1,materialKeys:["moss"],repeat:[3,3],fallbackNote:"flat moss color stays when file missing"},{key:"mossDark",albedo:"vendor/commons/moss_cc0/1280px-Moss_Texture.png",hasRough:!1,hasNormal:!1,materialKeys:["mossDark"],repeat:[3,3],fallbackNote:"flat mossDark color stays when file missing"},{key:"gravel",albedo:"vendor/commons/gravel/1280px-Gravel_texture.jpg",hasRough:!1,hasNormal:!1,materialKeys:["gravel"],repeat:[6,6],fallbackNote:"procedural gravelDraw canvas stays when file missing"},{key:"soil",albedo:"vendor/commons/needle_litter/Forest_floor_with_loblolly_pine_needles.jpg",hasRough:!1,hasNormal:!1,materialKeys:["soil"],repeat:[4,4],fallbackNote:"procedural soilDraw canvas stays when file missing"},{key:"ground037-soil",albedo:"vendor/ambientcg/Ground037/Ground037_1K-JPG_Color.jpg",normal:"vendor/ambientcg/Ground037/Ground037_1K-JPG_NormalGL.jpg",rough:"vendor/ambientcg/Ground037/Ground037_1K-JPG_Roughness.jpg",hasRough:!0,hasNormal:!0,materialKeys:["soil"],repeat:[110,110],fallbackNote:"procedural soilDraw canvas stays when file missing"},{key:"moss002",albedo:"vendor/ambientcg/Moss002/Moss002_1K-JPG_Color.jpg",normal:"vendor/ambientcg/Moss002/Moss002_1K-JPG_NormalGL.jpg",rough:"vendor/ambientcg/Moss002/Moss002_1K-JPG_Roughness.jpg",hasRough:!0,hasNormal:!0,materialKeys:["moss","mossDark"],repeat:[60,60],fallbackNote:"flat moss colors stay when file missing"},{key:"rock035",albedo:"vendor/ambientcg/Rock035/Rock035_1K-JPG_Color.jpg",normal:"vendor/ambientcg/Rock035/Rock035_1K-JPG_NormalGL.jpg",rough:"vendor/ambientcg/Rock035/Rock035_1K-JPG_Roughness.jpg",hasRough:!0,hasNormal:!0,materialKeys:["stone"],repeat:[24,24],fallbackNote:"procedural stoneDraw canvas stays when file missing"},{key:"gravel043",albedo:"vendor/ambientcg/Gravel043/Gravel043_1K-JPG_Color.jpg",normal:"vendor/ambientcg/Gravel043/Gravel043_1K-JPG_NormalGL.jpg",rough:"vendor/ambientcg/Gravel043/Gravel043_1K-JPG_Roughness.jpg",hasRough:!0,hasNormal:!0,materialKeys:["gravel"],repeat:[6,6],fallbackNote:"procedural gravelDraw canvas stays when file missing"},{key:"bark006",albedo:"vendor/ambientcg/Bark006/Bark006_1K-JPG_Color.jpg",normal:"vendor/ambientcg/Bark006/Bark006_1K-JPG_NormalGL.jpg",rough:"vendor/ambientcg/Bark006/Bark006_1K-JPG_Roughness.jpg",hasRough:!0,hasNormal:!0,materialKeys:["trunk"],repeat:[1,2],fallbackNote:"procedural darkWood canvas stays when file missing"},{key:"woodsiding013",albedo:"vendor/ambientcg/WoodSiding013/WoodSiding013_1K-JPG_Color.jpg",normal:"vendor/ambientcg/WoodSiding013/WoodSiding013_1K-JPG_NormalGL.jpg",rough:"vendor/ambientcg/WoodSiding013/WoodSiding013_1K-JPG_Roughness.jpg",hasRough:!0,hasNormal:!0,materialKeys:["woodAged","wood"],repeat:[2,1],fallbackNote:"procedural woodDrawTone canvases stay when file missing (woodNew untouched: new vs aged history)"},{key:"plaster001",albedo:"vendor/ambientcg/Plaster001/Plaster001_1K-JPG_Color.jpg",normal:"vendor/ambientcg/Plaster001/Plaster001_1K-JPG_NormalGL.jpg",rough:"vendor/ambientcg/Plaster001/Plaster001_1K-JPG_Roughness.jpg",hasRough:!0,hasNormal:!0,materialKeys:["plaster"],repeat:[1,1],fallbackNote:"procedural plasterDraw canvas stays when file missing"},{key:"roofing006",albedo:"vendor/ambientcg/RoofingTiles006/RoofingTiles006_1K-JPG_Color.jpg",normal:"vendor/ambientcg/RoofingTiles006/RoofingTiles006_1K-JPG_NormalGL.jpg",rough:"vendor/ambientcg/RoofingTiles006/RoofingTiles006_1K-JPG_Roughness.jpg",hasRough:!0,hasNormal:!0,materialKeys:["roofTile","roofTileAlt"],repeat:[4,4],fallbackNote:"flat ceramic + shared noise stay when file missing"},{key:"barkPBR",albedo:"vendor/commons/bark_pbr/bark_brown_diff.jpg",normal:"vendor/commons/bark_pbr/bark_brown_nor_1k.png",rough:"vendor/commons/bark_pbr/bark_brown_rough_1k.png",hasRough:!0,hasNormal:!0,materialKeys:["barkSugi","barkHinoki","barkOrchard"],repeat:[1,3],fallbackNote:"procedural bark colors stay when files missing"},{key:"zelkovaBark",albedo:"vendor/commons/zelkova_bark/zelkova_bark.jpg",hasRough:!1,hasNormal:!1,materialKeys:["barkKeyaki","barkMomiji"],repeat:[1,2],fallbackNote:"procedural smooth-grey bark stays when file missing"}],F1={clear:"vendor/hdri/venice_sunset_1k.hdr",overcast:"vendor/hdri/quarry_01_1k.hdr",night:"vendor/hdri/moonless_golf_1k.hdr"};function z1(i,t){return i.colorSpace=ke,i.wrapS=i.wrapT=On,t&&i.repeat.set(t[0],t[1]),i.anisotropy=4,i.needsUpdate=!0,i}function Iu(i,t){return i.colorSpace=Un,i.wrapS=i.wrapT=On,t&&i.repeat.set(t[0],t[1]),i.anisotropy=4,i.needsUpdate=!0,i}function B1(i,t={}){const e=t.loader||new ga,n={applied:[],missing:[]};for(const s of O1)if(!s.key.startsWith("polyhaven"))try{if(e.load(s.albedo,r=>{z1(r,s.repeat);let o=!1;for(const a of s.materialKeys){const l=i[a];l&&(l.map&&l.map.repeat&&r.repeat.copy(l.map.repeat),l.map=r,l.needsUpdate=!0,o=!0)}o?n.applied.includes(s.key)||n.applied.push(s.key):n.missing.includes(s.key)||n.missing.push(s.key)},void 0,()=>{n.missing.includes(s.key)||n.missing.push(s.key),t.verbose&&console.warn(`[vendor] missing scan, fallback kept: ${s.key} <- ${s.albedo}`)}),s.normal)try{e.load(s.normal,r=>{Iu(r,s.repeat);for(const o of s.materialKeys){const a=i[o];a&&"normalMap"in a&&(a.normalMap&&a.normalMap.repeat&&r.repeat.copy(a.normalMap.repeat),a.normalMap=r,"normalScale"in a&&a.normalScale&&a.normalScale.setScalar(.7),a.needsUpdate=!0)}},void 0,()=>{})}catch{}if(s.rough)try{e.load(s.rough,r=>{Iu(r,s.repeat);for(const o of s.materialKeys){const a=i[o];a&&"roughnessMap"in a&&(a.roughnessMap=r,"roughness"in a&&(a.roughness=1),a.needsUpdate=!0)}},void 0,()=>{})}catch{}}catch{n.missing.includes(s.key)||n.missing.push(s.key)}return n}const ih=13621468;function k1(i,t){const e=new rn({side:vn,depthWrite:!1,fog:!1,uniforms:{top:{value:new Nt(8366281)},mid:{value:new Nt(15909267)},bot:{value:new Nt(14721137)}},vertexShader:`
      varying vec3 vP;
      void main() {
        vP = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform vec3 top; uniform vec3 mid; uniform vec3 bot;
      varying vec3 vP;
      void main() {
        float h = normalize(vP).y;
        vec3 c = h > 0.0
          ? mix(mid, top, pow(min(h * 1.6, 1.0), 0.7))
          : mix(mid, bot, min(-h * 3.0, 1.0));
        gl_FragColor = vec4(c, 1.0);
      }`}),n=new tt(new xn(150,24,16),e);n.frustumCulled=!1,i.add(n),i.fog=new Xc(ih,42,500);const s=new _c(16767400,3);s.position.set(14,8.5,12),s.target.position.set(0,1.2,0),s.castShadow=!0,s.shadow.mapSize.set(2048,2048),s.shadow.camera.left=-15,s.shadow.camera.right=15,s.shadow.camera.top=15,s.shadow.camera.bottom=-15,s.shadow.camera.near=10,s.shadow.camera.far=120,s.shadow.bias=-4e-4,s.shadow.normalBias=.03,i.add(s,s.target);const r=new j0(12375016,9072466,.6);i.add(r);const o=new _c(16764830,.35);o.position.set(-8,4,-6),i.add(o);const a=document.createElement("canvas");a.width=64,a.height=32;const l=a.getContext("2d"),c=l.createLinearGradient(0,0,0,32);c.addColorStop(0,"#6f96bd"),c.addColorStop(.34,"#a8b8c4"),c.addColorStop(.46,"#ffd9a0"),c.addColorStop(.52,"#c08a5e"),c.addColorStop(.6,"#6b5a44"),c.addColorStop(1,"#2e2a22"),l.fillStyle=c,l.fillRect(0,0,64,32);const h=l.createRadialGradient(41,9,0,41,9,11);h.addColorStop(0,"rgba(255,244,220,0.95)"),h.addColorStop(.4,"rgba(255,214,150,0.45)"),h.addColorStop(1,"rgba(255,200,130,0)"),l.fillStyle=h,l.fillRect(0,0,64,32);let d=1234567;const u=()=>(d=d*1103515245+12345&2147483647)/2147483647;for(let p=0;p<40;p++){const m=u()*64,y=18+u()*14,w=1+u()*3,_=l.createRadialGradient(m,y,0,m,y,w),M=u()<.5;_.addColorStop(0,M?"rgba(150,115,80,0.25)":"rgba(50,52,48,0.25)"),_.addColorStop(1,"rgba(0,0,0,0)"),l.fillStyle=_,l.beginPath(),l.arc(m,y,w,0,7),l.fill()}const f=new En(a);f.mapping=Er,f.colorSpace=ke;const g=new la(t),v=g.fromEquirectangular(f);i.environment=v.texture,f.dispose(),g.dispose();try{new U1().load(F1.clear,p=>{try{p.mapping=Er;const m=new la(t),y=m.fromEquirectangular(p);i.environment=y.texture,p.dispose(),m.dispose()}catch{}},void 0,()=>{})}catch{}return{sun:s,hemi:r,skyMat:e,sky:n}}function ln(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new ge;let c=0;for(let h=0;h<i.length;++h){const d=i[h];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const d=[];for(let u=0;u<i.length;++u){const f=i[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(const h in r){const d=Nu(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){const f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][u]);const g=Nu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function Nu(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Me(o,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<e;g++){const v=h.getComponent(u,g);a.setComponent(u+d,g,v)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function of(i,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let o=0;const a=Object.keys(i.attributes),l={},c={},h=[],d=["getX","getY","getZ","getW"],u=["setX","setY","setZ","setW"];for(let y=0,w=a.length;y<w;y++){const _=a[y],M=i.attributes[_];l[_]=new M.constructor(new M.array.constructor(M.count*M.itemSize),M.itemSize,M.normalized);const b=i.morphAttributes[_];b&&(c[_]||(c[_]=[]),b.forEach((R,x)=>{const S=new R.array.constructor(R.count*R.itemSize);c[_][x]=new R.constructor(S,R.itemSize,R.normalized)}))}const f=t*.5,g=Math.log10(1/t),v=Math.pow(10,g),p=f*v;for(let y=0;y<r;y++){const w=n?n.getX(y):y;let _="";for(let M=0,b=a.length;M<b;M++){const R=a[M],x=i.getAttribute(R),S=x.itemSize;for(let E=0;E<S;E++)_+=`${Math.trunc(x[d[E]](w)*v+p)},`}if(_ in e)h.push(e[_]);else{for(let M=0,b=a.length;M<b;M++){const R=a[M],x=i.getAttribute(R),S=i.morphAttributes[R],E=x.itemSize,T=l[R],C=c[R];for(let P=0;P<E;P++){const L=d[P],I=u[P];if(T[I](o,x[L](w)),S)for(let N=0,z=S.length;N<z;N++)C[N][I](o,S[N][L](w))}}e[_]=o,h.push(o),o++}}const m=i.clone();for(const y in i.attributes){const w=l[y];if(m.setAttribute(y,new w.constructor(w.array.slice(0,o*w.itemSize),w.itemSize,w.normalized)),y in c)for(let _=0;_<c[y].length;_++){const M=c[y][_];m.morphAttributes[y][_]=new M.constructor(M.array.slice(0,o*M.itemSize),M.itemSize,M.normalized)}}return m.setIndex(h),m}function Fn(i){let t=i>>>0||1;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const af=A1,Uu=R1||{},lf={M:null};function cf(i){lf.M=i}const G1={tile:"roofTile",shoji:"paper"},hl={};function _n(i,t){const e=lf.M||af;if(e&&e[i])return e[i];const n=G1[i];return n&&e&&e[n]?e[n]:(hl[i]||(hl[i]=t()),hl[i])}const Hi=(i,t=.85,e=0)=>new mt({color:i,roughness:t,metalness:e}),Oi=()=>_n("woodDark",()=>Hi(4864552,.8)),Ou=()=>_n("woodNew",()=>Hi(9069112,.7)),Fu=()=>_n("woodAged",()=>Hi(7234136,.9)),zu=()=>_n("plaster",()=>Hi(15261904,.95)),H1=()=>_n("tile",()=>Hi(3817286,.85)),hf=()=>_n("stone",()=>Hi(9276808,.95)),V1=()=>_n("glassDark",()=>new mt({color:1053980,roughness:.08,metalness:.9})),Mr=()=>_n("iron",()=>Hi(2829102,.55,.8));function Ne(i,t,e,n,s,r,o,a,l=0,c=0,h=0){const d=new Lt(e,n,s),u=new ae().makeRotationFromEuler(new Mn(h,l,c));u.setPosition(r,o,a),d.applyMatrix4(u),(i[t]||(i[t]=[])).push(d)}function Bu(i,t,e,n,s,r,o=0,a=0,l=0){const c=new ae().makeRotationFromEuler(new Mn(o,a,l));c.setPosition(n,s,r),e.applyMatrix4(c),(i[t]||(i[t]=[])).push(e)}function W1(i,t,e,{shadow:n=!0,noCast:s=null}={}){for(const r of Object.keys(t)){const o=ln(t[r],!1);t[r].forEach(l=>l.dispose());const a=new tt(o,e(r));a.castShadow=s&&s.has(r)?!1:n,a.receiveShadow=!0,i.add(a)}}function uf(i={}){const t=Fn(i.seed??7),e=i.w??6.5,n=i.d??6,s=i.wallH??3.1,r=Ze.degToRad(i.pitch??28+t()*8),o=i.roofType??(t()<.7?"kirizuma":"yosemune"),a=i.facadeCols??Math.max(3,Math.round(e/1.8)),l=i.age??t(),c=!!i.isShop,h=i.engawa??(t()<.6?.9:0),d=new Jt;d.name=i.name||"house";const u={},f=(i.woodTone??.5)>.6?"woodNew":"woodAged",g=W=>W==="WOOD"?_n(f,f==="woodNew"?Ou:Fu):W==="WOOD_D"?Oi():W==="IRON"||W==="IRNNC"?Mr():W==="RIDGE"?_n("ridge",()=>Hi(3487549,.5,.1)):W==="PLAS"?af.plasterTinted?.(i.plasterTone??15261904)??zu():W==="STONE"?hf():Oi(),v=.55,p=.45,m=[],y=Math.max(3,Math.round(e/1.2)+1),w=Math.max(3,Math.round(n/1.2)+1);for(let W=0;W<y;W++)m.push([-e/2+e*W/(y-1),0,-n/2],[-e/2+e*W/(y-1),0,n/2]);for(let W=1;W<w-1;W++)m.push([-e/2,0,-n/2+n*W/(w-1)],[e/2,0,-n/2+n*W/(w-1)]);for(const[W,,st]of m)Ne(u,"STONE",v,p,v,W,p/2-.06,st,t()*.1);const _=p-.06;Ne(u,"WOOD_D",e+.3,.22,n+.3,0,_+.11,0);const M=.14,b=_+.22,R=b+s,x=i.winLayout??Array.from({length:a},()=>t()<.55?1:2),S=e/a;for(let W=0;W<a;W++){const st=-e/2+S*(W+.5),J=x[W%x.length],ft=(i.doorSide??0)!==0&&(i.doorSide<0&&W===0||i.doorSide>0&&W===a-1),gt=b+.55,Z=b+s-.75;J===0&&!ft?Ne(u,"PLAS",S-.16,s,M,st,b+s/2,n/2):ft?(Ne(u,"PLAS",S-.16,gt-b,M,st,(b+gt)/2,n/2),Ne(u,"PLAS",S-.16,R-(b+2.1),M,st,(R+b+2.1)/2,n/2)):(Ne(u,"PLAS",S-.16,gt-b,M,st,(b+gt)/2,n/2),Ne(u,"PLAS",S-.16,R-Z,M,st,(R+Z)/2,n/2),Ne(u,"PLAS",.14,Z-gt,M,st-(S-.16)/2+.07,(gt+Z)/2,n/2),Ne(u,"PLAS",.14,Z-gt,M,st+(S-.16)/2-.07,(gt+Z)/2,n/2))}Ne(u,"PLAS",e,s,M,0,b+s/2,-n/2),Ne(u,"PLAS",M,s,n,-e/2,b+s/2,0),Ne(u,"PLAS",M,s,n,e/2,b+s/2,0);for(let W=0;W<=a;W++){const st=-e/2+S*W;Ne(u,"WOOD_D",.14,s,.14,st,b+s/2,n/2+.02),Ne(u,"WOOD_D",.14,s,.14,st,b+s/2,-n/2-.02)}Ne(u,"WOOD_D",e+.24,.16,.18,0,R-.08,n/2+.02),Ne(u,"WOOD_D",e+.24,.12,.14,0,b+1.55,n/2+.03),Ne(u,"WOOD_D",e+.24,.2,.2,0,R+.02,-n/2-.02);for(let W=0;W<=a;W++){const st=-e/2+S*W;Ne(u,"WOOD_D",.12,.12,.5,st,R+.18,n/2+.25)}for(let W=0;W<a;W++){const st=-e/2+S*(W+.5);Ne(u,"WOOD_D",.22,.16,.3,st,R+.32,n/2+.32)}if(i.chains===!0){const W=Fn((i.seed??7)*7919+13);for(const st of[1,-1]){const J=st*(e/2-.35),ft=n/2+.5,gt=R+.42,Z=.32,j=Math.max(8,Math.floor((gt-Z)/.09));for(let it=0;it<=j;it++){const ct=gt-(gt-Z)*(it/j),pt=(W()-.5)*.016,_t=(W()-.5)*.016,Mt=new ir(.035,.008,4,6);it%2?Bu(u,"IRNNC",Mt,J+pt,ct,ft+_t,0,Math.PI/2,0):Bu(u,"IRNNC",Mt,J+pt,ct,ft+_t,0,0,0)}Ne(u,"STONE",.34,.12,.34,J,.06,ft,W()*.2)}}const E=[],T=[],C=new Jt;for(let W=0;W<a;W++){const st=-e/2+S*(W+.5),J=x[W%x.length],ft=(i.doorSide??0)!==0&&(i.doorSide<0&&W===0||i.doorSide>0&&W===a-1),gt=b+.55,Z=b+s-.75,j=S-.44,it=Z-gt;if(ft){Ne(u,"WOOD_D",.12,2.15,.14,st-j/2-.01,b+1.075,n/2+.02),Ne(u,"WOOD_D",.12,2.15,.14,st+j/2+.01,b+1.075,n/2+.02),Ne(u,"WOOD_D",j+.26,.14,.14,st,b+2.15,n/2+.02),Ne(u,"WOOD_D",j+.1,.07,.16,st,b+.035,n/2+.02);const pt=new tt(new Lt(j/2-.03,2,.05),_n("woodAged",Fu));pt.position.set(st-j/4,b+1,n/2+.06),C.add(pt);const _t=pt.clone();_t.position.x=st+j/4,C.add(_t),T.push({node:pt,open:st-j/4-(j/2-.02)},{node:_t,open:st+j/4+(j/2-.02)});const Mt=new me(.02,.02,.16,6);for(const xt of[st-.08,st+.08]){const Ut=new tt(Mt,Mr());Ut.position.set(xt,b+1,n/2+.1),C.add(Ut)}if(c){const xt=new tt(new Lt(j,.5,.03),_n("noren",()=>new mt({color:2899555,roughness:.9})));xt.position.set(st,b+2.35,n/2+.12),xt.castShadow=!0,C.add(xt)}continue}if(J===0)continue;const ct=new tt(new Lt(j+.1,it+.1,.09),Oi());if(ct.position.set(st,(gt+Z)/2,n/2+.01),C.add(ct),J===1){const pt=new mt({color:15985881,roughness:.9,emissive:16762995,emissiveIntensity:0});E.push(pt);const _t=new tt(new Te(j,it),pt);_t.position.set(st,(gt+Z)/2,n/2+.072),C.add(_t);const Mt=Oi(),xt=4,Ut=3;for(let B=1;B<xt;B++){const jt=new tt(new Lt(.045,it,.03),Mt);jt.position.set(st-j/2+j*B/xt,(gt+Z)/2,n/2+.08),C.add(jt)}for(let B=1;B<Ut;B++){const jt=new tt(new Lt(j,.045,.03),Mt);jt.position.set(st,gt+it*B/Ut,n/2+.08),C.add(jt)}}else{const pt=new tt(new Te(j,it),V1());pt.position.set(st,(gt+Z)/2,n/2+.068),C.add(pt);const _t=Oi();for(let xt=0;xt<=5;xt++){const Ut=new tt(new Lt(.05,it,.04),_t);Ut.position.set(st-j/2+j*xt/5,(gt+Z)/2,n/2+.075),C.add(Ut)}const Mt=new tt(new Lt(j,.06,.04),_t);Mt.position.set(st,(gt+Z)/2,n/2+.075),C.add(Mt)}}if(C.traverse(W=>{W.isMesh&&(W.castShadow=!1,W.receiveShadow=!0)}),d.add(C),h>0){Ne(u,"WOOD",e*.95,.12,h,0,b+.12,n/2+h/2+.05);for(let W=0;W<=Math.round(e*.95/1.1);W++){const st=-e*.95/2+e*.95*W/Math.round(e*.95/1.1);Ne(u,"STONE",.3,.3,.3,st,.1,n/2+h+.02)}for(let W=0;W<=6;W++){const st=-e*.9/2+e*.9*W/6;Ne(u,"WOOD_D",.09,.7,.09,st,b+.5,n/2+h)}Ne(u,"WOOD_D",e*.9,.08,.1,0,b+.85,n/2+h)}{const W=new Jt,st=new tt(new Lt(e-.4,.08,n-.4),_n("woodNew",Ou));st.position.y=b+.04,st.receiveShadow=!0,W.add(st);const J=new tt(new Te(e-.4,s-.3),new mt({color:10127984,roughness:1}));J.position.set(0,b+s/2,-n/2+.25),W.add(J);const ft=new tt(new Lt(1.7,.03,.9),new mt({color:10133611,roughness:1}));ft.position.set(-.6,b+.1,.3),W.add(ft);const gt=ft.clone();gt.position.x=1.2,W.add(gt);const Z=new tt(new Lt(1.1,.32,.6),Oi());Z.position.set(.2,b+.24,.3),W.add(Z);const j=new mt({color:4469538,emissive:16757854,emissiveIntensity:0});E.push(j);const it=new tt(new xn(.09,10,8),j);it.position.set(.2,b+s-.6,.3),W.add(it);const ct=new tt(new me(.008,.008,.7),Mr());ct.position.set(.2,b+s-.25,.3),W.add(ct),W.traverse(pt=>{pt.isMesh&&(pt.castShadow=!1,pt.receiveShadow=!0)}),d.add(W)}W1(d,u,g,{shadow:!0,noCast:new Set(["IRNNC"])});const P=new Jt,L=Math.tan(r)*(n/2+.9),I=R+.35,N=Math.hypot(n/2+.9,L)+.35,z=_n("tile",H1),G=_n("ridge",()=>new mt({color:3487549,roughness:.5,metalness:.1})),U=new mt({color:4010535,roughness:.95}),k=new Lt(.3,.07,.36),X=[],dt=[];for(const W of[1,-1]){const st=new Lt(e+1.6,.12,N),J=W*(n/4+.22),ft=I+L/2;st.applyMatrix4(new ae().makeRotationX(W>0?r:-r)),st.translate(0,ft,J),dt.push(st);const gt=new Lt(e+1.5,.04,N*.98);gt.applyMatrix4(new ae().makeRotationX(W>0?r:-r)),gt.translate(0,ft-.09,J);const Z=new tt(ln([gt],!1),U);Z.receiveShadow=!0,P.add(Z);const j=Math.floor(N/.34),it=Math.floor((e+1.4)/.32);for(let ct=0;ct<j;ct++)for(let pt=0;pt<it;pt++){const _t=-((it-1)*.32)/2+pt*.32+(t()-.5)*.015,Mt=-N/2+.2+ct*.34,xt=new O(_t,.1+(t()-.5)*.012,Mt).applyEuler(new Mn(W>0?r:-r,0,0));X.push({p:[xt.x,xt.y+ft,xt.z+J],ry:(t()-.5)*.03,tone:.8+t()*.4})}}const yt=new tt(ln(dt,!1),new mt({color:2894896,roughness:.9}));yt.castShadow=!0,P.add(yt);const wt=new ye(k,z.clone(),X.length);{const W=new ne,st=new Nt;X.forEach((J,ft)=>{W.position.set(...J.p),W.rotation.set(0,J.ry,0),W.updateMatrix(),wt.setMatrixAt(ft,W.matrix);const gt=J.tone*(1-l*.25);wt.setColorAt(ft,st.setRGB(.32*gt+.1,.34*gt+.1,.38*gt+.12))}),wt.instanceMatrix.needsUpdate=!0,wt.instanceColor&&(wt.instanceColor.needsUpdate=!0)}wt.castShadow=!0,wt.receiveShadow=!0,P.add(wt);const bt=new me(.14,.14,.46,8,1,!1,0,Math.PI);bt.rotateZ(Math.PI/2);const Qt=Math.ceil((e+1.4)/.5);for(let W=0;W<Qt;W++){const st=new tt(bt,G);st.position.set(-(e+1.2)/2+.25+W*.5,I+L+.02,0),st.castShadow=!0,P.add(st)}const Q=new qr;Q.moveTo(-n/2,0),Q.lineTo(n/2,0),Q.lineTo(0,L),Q.closePath();const nt=new Jc(Q,{depth:.12,bevelEnabled:!1});nt.rotateY(Math.PI/2);for(const W of[e/2-.02,-e/2-.1]){const st=new tt(nt,zu());st.position.set(W,R+.3,0),st.castShadow=!0,P.add(st)}if(o==="yosemune")for(const W of[1,-1]){const st=new tt(new Lt(.14,N*.55,(n/2+.9)*1.02),yt.material);st.position.set(W*(e/2+.55),I+L*.45,0),st.rotation.z=W*.62,st.castShadow=!0,P.add(st)}if(o!=="yosemune"){const W=[];for(const J of[1,-1])for(const ft of[1,-1]){const gt=new Lt(.16,.09,N+.15);gt.applyMatrix4(new ae().makeRotationX(ft>0?r:-r)),gt.translate(J*(e/2+.78),I+L/2+.13,ft*(n/4+.22)),W.push(gt)}const st=new tt(ln(W,!1),Oi());st.castShadow=!0,st.receiveShadow=!0,P.add(st)}if(d.add(P),l>.15){const W=new tt(new Lt(e+.05,.5*l+.15,n+.05),new mt({color:3814700,roughness:1,transparent:!0,opacity:.25+l*.3,depthWrite:!1}));W.position.y=b+.25,W.renderOrder=2,d.add(W)}return d.traverse(W=>{W.isMesh&&W.material?.isMeshStandardMaterial&&Uu.registerWet&&Uu.registerWet(W.material)}),{group:d,glowMats:E,sliders:T,dims:{w:e,d:n,wallH:s},roofTopY:I+L}}function X1(i,t={}){if(!i||i.userData._upgraded)return i;i.userData._upgraded=!0;const e=new Jt;e.name="hero_joinery_upgrade";const n=Oi(),s=Mr(),r=(v,p,m,y,w,_)=>{const M=new tt(new Lt(v,p,m),n);return M.position.set(y,w,_),M.castShadow=!0,M.receiveShadow=!0,e.add(M),M},o=new Gi().setFromObject(i),a=o.max.x-o.min.x||9,l=o.max.z-o.min.z||7,c=(o.max.x+o.min.x)/2-i.position.x,h=(o.max.z+o.min.z)/2-i.position.z,d=hf();for(let v=-a/2;v<=a/2+.01;v+=1.15)for(const p of[-l/2-.15,l/2+.15]){const m=new tt(new Lt(.5,.4,.5),d);m.position.set(c+v,.14,h+p),m.receiveShadow=!0,m.castShadow=!1,e.add(m)}r(a*.98,.12,.1,c,t.nageshiY??2,h+l/2+.08);for(let v=-a/2+.8;v<a/2;v+=1.6)r(.24,.18,.3,c+v,t.eaveY??3.35,h+l/2+.3);{const v=[],p=(t.eaveY??3.35)+.4,m=.3,y=Math.max(8,Math.floor((p-m)/.09));for(const _ of[c-a/2+.35,c+a/2-.35]){const M=h+l/2+.5;for(let b=0;b<=y;b++){const R=new ir(.035,.008,4,6),x=new ae().makeRotationFromEuler(new Mn(0,b%2?Math.PI/2:0,0));x.setPosition(_,p-(p-m)*(b/y),M),R.applyMatrix4(x),v.push(R)}}const w=new tt(ln(v,!1),s);v.forEach(_=>_.dispose()),w.castShadow=!1,w.receiveShadow=!0,e.add(w)}const u=new me(.025,.025,.2,6);for(const v of[-.12,.12]){const p=new tt(u,s);p.position.set(c+(t.doorX??-2.2)+v,1.25,h+l/2+.12),e.add(p)}const f=new mt({color:4469538,emissive:16757854,emissiveIntensity:0}),g=new tt(new xn(.1,10,8),f);return g.position.set(c,2.6,h),e.add(g),i.userData.glowMats=[...i.userData.glowMats||[],f],i.add(e),i}const Hn={strength:.45,gust(i){return this.strength*(.65+.35*Math.sin(i*.6)*Math.sin(i*.23+1.7))}},Y1=["clear","windy","rainy","misty","snow"];function q1({scene:i,pondWaterMats:t=[],wetMats:e=[],heightFn:n=null,snowMats:s=[],dripPoints:r=[],basins:o=[]}={}){const a=Fn(777),l=Fn(778),c=new Jt;c.name="weather",i?.add(c);let h="clear",d="clear",u=1,f=0,g=0;const v=typeof n=="function"?n:()=>0,p=Array.isArray(s)?s:[],m=800,y=new Float32Array(m*3);for(let J=0;J<m;J++)y[J*3]=(a()-.5)*60,y[J*3+1]=a()*18,y[J*3+2]=(a()-.5)*60;const w=new ge;w.setAttribute("position",new Me(y,3));const _=new os({color:11452368,size:.14,transparent:!0,opacity:0,depthWrite:!1}),M=new Ks(w,_);M.frustumCulled=!1,c.add(M);const b=new zn({color:13623530,transparent:!0,opacity:0,depthWrite:!1,side:Oe}),R=[],x=new $c(.05,.09,12);for(let J=0;J<40;J++){const ft=new tt(x,b.clone());ft.rotation.x=-Math.PI/2;const gt=(a()-.5)*50,Z=(a()-.5)*50;let j=.06;try{const it=v(gt,Z);Number.isFinite(it)&&(j=it+.03)}catch{}ft.position.set(gt,j,Z),ft.userData.ph=a(),c.add(ft),R.push(ft)}const S=new mt({color:2106924,roughness:.05,metalness:.7,transparent:!0,opacity:0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),E=[];for(const J of r){const ft=.3+l()*.15,gt=new Zn(ft,14);gt.rotateX(-Math.PI/2);let Z=.045;try{const j=v(J.x,J.z);Number.isFinite(j)&&(Z=j+.025)}catch{}gt.translate(J.x,Z,J.z),E.push(gt)}if(E.length){const J=ln(E,!1);E.forEach(gt=>gt.dispose());const ft=new tt(J,S);c.add(ft)}const T=[];for(const[J,ft,gt]of o){const Z=new tt(new Zn(gt,20),S);Z.rotation.x=-Math.PI/2,Z.position.set(J,.045,ft),c.add(Z),T.push(Z)}const P=r.length*8,L=new Float32Array(Math.max(1,P)*3),I=new Float32Array(Math.max(1,P));for(let J=0;J<P;J++){const ft=r[J%Math.max(1,r.length)]||{x:0,z:0,top:4};L[J*3]=ft.x,L[J*3+1]=ft.top,L[J*3+2]=ft.z,I[J]=l()}const N=new ge;N.setAttribute("position",new Me(L,3));const z=new os({color:13623530,size:.09,transparent:!0,opacity:0,depthWrite:!1}),G=new Ks(N,z);G.frustumCulled=!1,c.add(G);const U=500,k=26,X=60,dt=new Float32Array(U*3),yt=new Float32Array(U),wt=new Float32Array(U);for(let J=0;J<U;J++)dt[J*3]=(a()-.5)*X,dt[J*3+1]=a()*k,dt[J*3+2]=(a()-.5)*X,yt[J]=.6+a()*.6,wt[J]=a()*Math.PI*2;const bt=new ge;bt.setAttribute("position",new Me(dt,3));const Qt=(()=>{const J=document.createElement("canvas");J.width=32,J.height=32;const ft=J.getContext("2d"),gt=ft.createRadialGradient(16,16,1,16,16,15);gt.addColorStop(0,"rgba(255,255,255,1)"),gt.addColorStop(.6,"rgba(255,255,255,0.8)"),gt.addColorStop(1,"rgba(255,255,255,0)"),ft.fillStyle=gt,ft.fillRect(0,0,32,32);const Z=new En(J);return Z.colorSpace=ke,Z})(),Q=new os({map:Qt,size:.16,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0,color:15922681}),nt=new Ks(bt,Q);nt.frustumCulled=!1,nt.visible=!1,i?.add(nt);const W=new Nt(15265266);for(const J of p)!J||!J.color||J.userData._snowSeeded||(J.userData._snowSeeded=!0,J.userData._dryColor=J.color.clone(),J.userData._dryRough="roughness"in J?J.roughness:1);const st={get state(){return u>=1?d:`${h}>${d}`},get wetness(){return f},setState(J){Y1.includes(J)&&J!==d&&(h=u>=1?d:h,d=J,u=0)},update(J,ft){u=Math.min(1,u+J/3);const gt=u*u*(3-2*u),Z=d==="rainy",j=d==="snow",it=(Z?gt:1-gt)*(d==="rainy"?1:0)+(h==="rainy"&&d!=="rainy"?1-gt:0);g+=((d==="snow"?gt:h==="snow"?1-gt:0)-g)*Math.min(1,J*.8);const ct=d==="windy"?1.2:d==="rainy"?.8:d==="misty"?.15:d==="snow"?.55:.45;if(Hn.strength+=(ct*(d==="windy"?1:gt||1)-Hn.strength)*Math.min(1,J*1.2),d==="windy"&&(Hn.strength+=(1.2-Hn.strength)*Math.min(1,J)),_.opacity=it*.75,_.opacity>.01){const _t=w.attributes.position.array,Mt=Hn.gust(ft)*3.2;for(let xt=0;xt<m;xt++)_t[xt*3+1]-=J*11,_t[xt*3]+=Mt*J,_t[xt*3+1]<0&&(_t[xt*3+1]=15+a()*3,_t[xt*3]=(a()-.5)*60,_t[xt*3+2]=(a()-.5)*60);w.attributes.position.needsUpdate=!0;for(const xt of R){xt.material.opacity=it*.6;const Ut=(ft*1.4+xt.userData.ph*7)%1;xt.scale.setScalar(.5+Ut*2.2),xt.material.opacity=it*.6*(1-Ut)}}else for(const _t of R)_t.material.opacity=0;f+=((d==="rainy"?gt:d==="rainy"?1:h==="rainy"?1-gt:0)-f)*Math.min(1,J*.8);for(const _t of e)_t?.userData?._dry||(_t.userData._dry={r:_t.roughness??.85,e:_t.envMapIntensity??1,c:_t.color?_t.color.clone():null}),_t.roughness=Ze.lerp(_t.userData._dry.r,Math.min(.25,_t.userData._dry.r*.4),f),_t.envMapIntensity=Ze.lerp(_t.userData._dry.e,_t.userData._dry.e+.9,f),_t.userData._dry.c&&_t.color&&_t.color.copy(_t.userData._dry.c).multiplyScalar(Ze.lerp(1,.55,f));S.opacity=f*.8;const pt=.3+.7*f;for(const _t of T)_t.scale.set(pt,pt,1);if(z.opacity=it*.85,z.opacity>.01&&r.length){const _t=N.attributes.position.array,Mt=Hn.gust(ft)*.9;for(let xt=0;xt<P;xt++){const Ut=r[xt%r.length],B=(ft*2.2+I[xt]*7)%1;_t[xt*3]=Ut.x+Mt*B*.4,_t[xt*3+1]=Ut.top-B*(Ut.top-.1),_t[xt*3+2]=Ut.z}N.attributes.position.needsUpdate=!0}for(const _t of t)_t.roughness=Ze.lerp(.18,.05,f);if(nt.visible=g>.01,Q.opacity=.9*g,nt.visible){const Mt=Hn.gust(ft)*(1.2+g*1);for(let xt=0;xt<U;xt++){let Ut=dt[xt*3+1]-yt[xt]*J,B=dt[xt*3]+(Mt+Math.sin(ft*1.3+wt[xt])*.25)*J;const jt=dt[xt*3+2]+Math.cos(ft*1.1+wt[xt])*.2*J;Ut<=v(B,jt)+.03&&(Ut=k*(.85+.15*Math.sin(wt[xt]+ft*.05)),B=(wt[xt]*97.31%1+1)%1*X-X/2),dt[xt*3]=B,dt[xt*3+1]=Ut,dt[xt*3+2]=jt}bt.attributes.position.needsUpdate=!0}if(p.length){const _t=g*.7;for(const Mt of p)!Mt||!Mt.color||!Mt.userData._snowSeeded||(Mt.color.copy(Mt.userData._dryColor).lerp(W,_t),"roughness"in Mt&&g>.001&&(Mt.roughness=Mt.userData._dryRough+(.9-Mt.userData._dryRough)*g*.85))}st.rainK=it,st.mistK=d==="misty"?gt:h==="misty"?1-gt:0,st.dimK=(Z?gt*.55:0)+(j?gt*.3:0),st.snowK=g,st.fogK=Math.max(st.mistK,g*.6)},rainK:0,mistK:0,dimK:0,snowK:0,fogK:0};return st}function K1(i,t={}){const e=new Jt,n=Ti(999),s=Array.isArray(t.leafSources)?t.leafSources:null;function r(_){if(!s||!s.length)return null;const M=s[_%s.length],R=(_*2654435761%1e3+1e3)%1e3/1e3*Math.PI*2+_%7*.13,x=(M.r||2.2)*(.35+.65*((_*40503%1e3+1e3)%1e3/1e3));return{x:M.x+Math.cos(R)*x,z:M.z+Math.sin(R)*x}}const o=170,a=new ge,l=new Float32Array(o*3),c=new Float32Array(o);for(let _=0;_<o;_++)l[_*3]=-22+n()*44,l[_*3+1]=.3+n()*6,l[_*3+2]=-14+n()*30,c[_]=n()*100;a.setAttribute("position",new Me(l,3));const h=(()=>{const _=document.createElement("canvas");_.width=_.height=32;const M=_.getContext("2d"),b=M.createRadialGradient(16,16,1,16,16,15);return b.addColorStop(0,"rgba(255,240,214,1)"),b.addColorStop(1,"rgba(255,240,214,0)"),M.fillStyle=b,M.fillRect(0,0,32,32),new En(_)})(),d=new Ks(a,new os({map:h,size:.09,transparent:!0,opacity:.55,depthWrite:!1,color:16771264,sizeAttenuation:!0}));e.add(d);const u=40,f=new Te(.17,.17),g=new ye(f,i.mapleLeaf,u);g.castShadow=!1,g.receiveShadow=!1,g.frustumCulled=!1;const v=[],p=new Nt,m=[12597547,13849600,15105570,11088422];for(let _=0;_<u;_++){const M=r(_);v.push({bx:M?M.x:-6+(n()-.5)*30,bz:M?M.z:2+(n()-.5)*26,speed:.35+n()*.4,phase:n()*6.28,sway:.4+n()*.7,spin:1+n()*2}),p.setHex(m[Math.floor(n()*m.length)]),g.setColorAt(_,p)}g.instanceColor.needsUpdate=!0,e.add(g);const y=new ne;function w(_){const M=.5+Hn.gust(_),b=a.attributes.position;for(let R=0;R<o;R++){const x=c[R];b.array[R*3]+=Math.sin(_*.3+x)*.0012*(.5+M),b.array[R*3+1]+=(.0016+Math.sin(_*.5+x*2)*8e-4)*(.5+M),b.array[R*3+1]>6.5&&(b.array[R*3+1]=.2)}b.needsUpdate=!0;for(let R=0;R<u;R++){const x=v[R];let E=4.8-(_*x.speed*(.6+M)+x.phase)%4.6;const T=x.bx+Math.sin(_*.9+x.phase)*x.sway*(.6+M),C=x.bz+Math.cos(_*.7+x.phase*1.3)*x.sway*.7;y.position.set(T,E,C),y.rotation.set(_*x.spin+x.phase,x.phase,_*x.spin*.7),y.scale.setScalar(1),y.updateMatrix(),g.setMatrixAt(R,y.matrix)}g.instanceMatrix.needsUpdate=!0}return w(.01),{group:e,update:w}}const ku={type:"change"},sh={type:"start"},df={type:"end"},Lo=new fa,Gu=new vi,Z1=Math.cos(70*Ze.DEG2RAD),Ke=new O,Sn=2*Math.PI,De={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ul=1e-6;class J1 extends mm{constructor(t,e=null){super(t,e),this.state=De.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ws.ROTATE,MIDDLE:Ws.DOLLY,RIGHT:Ws.PAN},this.touches={ONE:Hs.ROTATE,TWO:Hs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new Kn,this._lastTargetPosition=new O,this._quat=new Kn().setFromUnitVectors(t.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new cu,this._sphericalDelta=new cu,this._scale=1,this._panOffset=new O,this._rotateStart=new ut,this._rotateEnd=new ut,this._rotateDelta=new ut,this._panStart=new ut,this._panEnd=new ut,this._panDelta=new ut,this._dollyStart=new ut,this._dollyEnd=new ut,this._dollyDelta=new ut,this._dollyDirection=new O,this._mouse=new ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Q1.bind(this),this._onPointerDown=$1.bind(this),this._onPointerUp=j1.bind(this),this._onContextMenu=oy.bind(this),this._onMouseWheel=ny.bind(this),this._onKeyDown=iy.bind(this),this._onTouchStart=sy.bind(this),this._onTouchMove=ry.bind(this),this._onMouseDown=ty.bind(this),this._onMouseMove=ey.bind(this),this._interceptControlDown=ay.bind(this),this._interceptControlUp=ly.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=De.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ku),this.update(),this.state=De.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Ke.copy(e).sub(this.target),Ke.applyQuaternion(this._quat),this._spherical.setFromVector3(Ke),this.autoRotate&&this.state===De.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Sn:n>Math.PI&&(n-=Sn),s<-Math.PI?s+=Sn:s>Math.PI&&(s-=Sn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ke.setFromSpherical(this._spherical),Ke.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ke),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ke.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new O(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new O(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ke.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Lo.origin.copy(this.object.position),Lo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Lo.direction))<Z1?this.object.lookAt(this.target):(Gu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Lo.intersectPlane(Gu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ul||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ul||this._lastTargetPosition.distanceToSquared(this.target)>ul?(this.dispatchEvent(ku),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Sn/60*this.autoRotateSpeed*t:Sn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ke.setFromMatrixColumn(e,0),Ke.multiplyScalar(-t),this._panOffset.add(Ke)}_panUp(t,e){this.screenSpacePanning===!0?Ke.setFromMatrixColumn(e,1):(Ke.setFromMatrixColumn(e,0),Ke.crossVectors(this.object.up,Ke)),Ke.multiplyScalar(t),this._panOffset.add(Ke)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ke.copy(s).sub(this.target);let r=Ke.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ut,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function $1(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Q1(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function j1(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(df),this.state=De.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function ty(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ws.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=De.DOLLY;break;case Ws.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=De.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=De.ROTATE}break;case Ws.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=De.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=De.PAN}break;default:this.state=De.NONE}this.state!==De.NONE&&this.dispatchEvent(sh)}function ey(i){switch(this.state){case De.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case De.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case De.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function ny(i){this.enabled===!1||this.enableZoom===!1||this.state!==De.NONE||(i.preventDefault(),this.dispatchEvent(sh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(df))}function iy(i){this.enabled!==!1&&this._handleKeyDown(i)}function sy(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Hs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=De.TOUCH_ROTATE;break;case Hs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=De.TOUCH_PAN;break;default:this.state=De.NONE}break;case 2:switch(this.touches.TWO){case Hs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=De.TOUCH_DOLLY_PAN;break;case Hs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=De.TOUCH_DOLLY_ROTATE;break;default:this.state=De.NONE}break;default:this.state=De.NONE}this.state!==De.NONE&&this.dispatchEvent(sh)}function ry(i){switch(this._trackPointer(i),this.state){case De.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case De.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case De.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case De.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=De.NONE}}function oy(i){this.enabled!==!1&&i.preventDefault()}function ay(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ly(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function cy(i){const t=new wn(45,window.innerWidth/window.innerHeight,.3,500);t.position.set(12.5,7,15.5);const e=new J1(t,i.domElement);e.target.set(0,2.2,1),e.enableDamping=!0,e.dampingFactor=.06,e.minDistance=5,e.maxDistance=48,e.maxPolarAngle=1.45,e.update();function n(){t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)}return window.addEventListener("resize",n),{camera:t,controls:e,onResize:n}}const hy=20260911,zi=[{name:"hero",cx:0,cz:-1,w:9,d:7,kind:"hero"},{name:"A",cx:-10.5,cz:-1,w:6.5,d:6,kind:"home"},{name:"B",cx:9.8,cz:-.5,w:6,d:6.5,kind:"home"},{name:"shop1",cx:14,cz:13.5,w:7,d:5,kind:"shop"},{name:"shop2",cx:-13,cz:13.5,w:6.5,d:5,kind:"shop"},{name:"C",cx:-9,cz:-12,w:7,d:6,kind:"home"},{name:"D",cx:2,cz:-12.5,w:6.5,d:6,kind:"home"},{name:"E",cx:11.5,cz:-12,w:6,d:5.5,kind:"home"},{name:"F",cx:-19,cz:-3,w:5.5,d:6,kind:"home"},{name:"G",cx:-6,cz:21,w:6,d:5,kind:"home"},{name:"shed1",cx:19.5,cz:-4,w:3,d:2.5,kind:"shed"},{name:"shed2",cx:-20.5,cz:8,w:2.8,d:2.5,kind:"shed"}],uy={A:{seed:11,w:6.5,d:6,wallH:2.9,roofType:"kirizuma",pitch:30,facadeCols:4,doorSide:-1,engawa:.9,woodTone:.3,age:.7,chains:!0},B:{seed:22,w:6,d:6.5,wallH:3.3,roofType:"yosemune",pitch:32,facadeCols:3,doorSide:1,engawa:0,woodTone:.8,age:.2,chains:!0},shop1:{seed:33,w:7,d:5,wallH:3.4,roofType:"kirizuma",pitch:26,facadeCols:4,doorSide:0,engawa:1.4,woodTone:.6,age:.35,isShop:!0,chains:!0},shop2:{seed:44,w:6.5,d:5,wallH:3.2,roofType:"kirizuma",pitch:27,facadeCols:4,doorSide:0,engawa:1.2,woodTone:.4,age:.55,isShop:!0,chains:!0},C:{seed:55,w:7,d:6,wallH:3,roofType:"yosemune",pitch:31,facadeCols:4,doorSide:1,engawa:.9,woodTone:.5,age:.5},D:{seed:66,w:6.5,d:6,wallH:3.5,roofType:"kirizuma",pitch:33,facadeCols:3,doorSide:-1,engawa:0,woodTone:.75,age:.25},E:{seed:77,w:6,d:5.5,wallH:2.8,roofType:"kirizuma",pitch:29,facadeCols:3,doorSide:1,engawa:.8,woodTone:.35,age:.65},F:{seed:88,w:5.5,d:6,wallH:2.9,roofType:"yosemune",pitch:30,facadeCols:3,doorSide:-1,engawa:0,woodTone:.45,age:.6},G:{seed:99,w:6,d:5,wallH:3.1,roofType:"kirizuma",pitch:28,facadeCols:3,doorSide:1,engawa:.9,woodTone:.65,age:.3},shed1:{seed:111,w:3,d:2.5,wallH:2.2,roofType:"kirizuma",pitch:24,facadeCols:2,doorSide:0,engawa:0,woodTone:.2,age:.9,winLayout:[0,0]},shed2:{seed:122,w:2.8,d:2.5,wallH:2.1,roofType:"kirizuma",pitch:25,facadeCols:2,doorSide:0,engawa:0,woodTone:.25,age:.85,winLayout:[0,0]}};function dy(){for(let i=0;i<zi.length;i++)for(let t=i+1;t<zi.length;t++){const e=zi[i],n=zi[t],s=(e.w+n.w)/2+1-Math.abs(e.cx-n.cx),r=(e.d+n.d)/2+1-Math.abs(e.cz-n.cz);s>0&&r>0&&console.error(`[town] OVERLAP ${e.name}×${n.name} by ${s.toFixed(2)}×${r.toFixed(2)}m`)}}function fy(){const i=[[0,2.45,19,.55],[-8.5,.6,.55,4.2],[8.9,.6,.55,4.2],[.25,-5.05,6.4,.55],[-3.9,3.55,1.6,.7],[3.1,3.55,1.6,.7]],t=[],e=[];i.forEach(([r,o,a,l],c)=>{const h=new Te(a,l);h.rotateX(-Math.PI/2),h.translate(r,.04,o),(c<4?t:e).push(h)});const n=new mt({color:3812896,roughness:1,metalness:0});n.polygonOffset=!0,n.polygonOffsetFactor=-1,n.polygonOffsetUnits=-1;const s=new Jt;for(const r of[t,e]){const o=ln(r,!1);r.forEach(a=>a.dispose()),s.add(new tt(o,n))}return s.traverse(r=>{r.isMesh&&(r.receiveShadow=!0)}),s}function py({scene:i,heroGroup:t=null}={}){dy();const e=Fn(hy),n=new Jt;n.name="town";const s=[];for(const g of zi){if(g.kind==="hero"){t&&(t.position.set(g.cx,0,g.cz),n.add(t),s.push({name:"hero",group:t,glowMats:t.userData.glowMats||[],pos:t.position.clone()}));continue}const v={...uy[g.name],name:g.name},p=uf(v);p.group.position.set(g.cx,0,g.cz),g.kind==="shop"&&(p.group.rotation.y=Math.PI),n.add(p.group),s.push({name:g.name,params:v,group:p.group,glowMats:p.glowMats,sliders:p.sliders||[],pos:p.group.position.clone()})}const r=my(),o=new Jt;o.name="ground_zoning";const a=new tt(new Te(70,70),r.soil);a.rotation.x=-Math.PI/2,a.receiveShadow=!0,o.add(a);const l=(g,v,p,m,y,w=.02)=>{const _=new tt(new Te(g,v),y);_.rotation.x=-Math.PI/2,_.position.set(p,w,m),_.receiveShadow=!0,o.add(_)};l(64,3,0,7,r.street),l(2,15,-5.9,-1.7,r.dirt),l(1.1,14.5,-5.9,-1.7,r.stonePath,.03),l(30,2,1,-7.5,r.dirt),l(26,2,-2,17.5,r.dirt),l(10,3.2,0,3.9,r.garden,.015),l(8,3,14,9.8,r.gravel,.015),l(7.5,3,-13,9.8,r.gravel,.015);{const g=new Lt(.5,.18,.3),v=64,p=new ye(g,r.edging,v*2),m=new ne;let y=0;for(let w=0;w<v;w++)for(const _ of[5.35,8.65])m.position.set(-32+w*1+(e()-.5)*.05,.09,_),m.rotation.y=(e()-.5)*.06,m.updateMatrix(),p.setMatrixAt(y++,m.matrix);p.count=y,p.receiveShadow=!0,o.add(p)}n.add(o),n.add(_y(e)),n.add(xy(e)),n.add(fy()),n.add(vy()),n.add(yy(e)),i&&i.add(n);const c=[[-2.5,9.3],[8.5,9.3],[19.5,9],[-15.5,9.3],[-15,-6.8]],h=[];for(const[g,v]of c){let p=null,m=1/0;for(const M of s){const b=zi.find(E=>E.name===M.name);if(!b)continue;const R=g-M.pos.x,x=v-M.pos.z,S=R*R+x*x;S<m&&(m=S,p={h:M,L:b})}if(!p||m>400)continue;const y=p.h.pos.x+Math.max(-p.L.w/2+.3,Math.min(p.L.w/2-.3,g-p.h.pos.x)),w=p.h.pos.z+Math.max(-p.L.d/2+.3,Math.min(p.L.d/2-.3,v-p.h.pos.z)),_=.6+(p.h.params?.wallH??3);h.push({a:[g,5.9,v],b:[y,_,w]})}const d=[],u={hero:{x:0,z:-1,w:9,d:7,rot:0,top:4.1},A:{x:-10.5,z:-1,w:6.5,d:6,rot:0,top:3.9},B:{x:9.8,z:-.5,w:6,d:6.5,rot:0,top:4.3},shop1:{x:14,z:13.5,w:7,d:5,rot:Math.PI,top:4.4},shop2:{x:-13,z:13.5,w:6.5,d:5,rot:Math.PI,top:4.2}};for(const g of Object.keys(u)){const v=u[g];for(const p of[1,-1]){const m=p*(v.w/2-.35),y=v.d/2+.5,w=v.rot===0?v.x+m:v.x-m,_=v.rot===0?v.z+y:v.z-y;d.push({x:w,z:_,top:v.top})}}return{group:n,houses:s,serviceDrops:h,dripPoints:d,basins:[[-5.9,8.2,1.3],[10.5,8.2,1.2],[.5,9.7,1]],lampPositions:[[-4.2,8.9],[6.5,8.9],[15.5,8.9],[-13.5,8.9],[-5,-6.5],[8,-6.5],[-6.4,1.5]],polePositions:c}}function my(){const i=(e,n=.95)=>new mt({color:e,roughness:n}),t={soil:i(6050117),street:i(9407101,.9),dirt:i(7824462),stonePath:i(10132116),garden:i(6253386,1),gravel:i(10525320),edging:i(8224120)};for(const[e,n]of Object.entries(t))e!=="edging"&&(n.map=gy(e),n.needsUpdate=!0);return t}const dl={};function gy(i){if(dl[i])return dl[i];let t=0;for(const a of i)t=t*31+a.charCodeAt(0)>>>0;const e=(()=>{let a=t||1;return()=>{a|=0,a=a+1831565813|0;let l=Math.imul(a^a>>>15,1|a);return l=l+Math.imul(l^l>>>7,61|l)^l,((l^l>>>14)>>>0)/4294967296}})(),n=128,s=document.createElement("canvas");s.width=s.height=n;const r=s.getContext("2d");r.fillStyle="#ffffff",r.fillRect(0,0,n,n);for(let a=0;a<900;a++){const l=205+Math.floor(e()*50);r.fillStyle=`rgb(${l},${l},${l})`,r.globalAlpha=.5,r.fillRect(e()*n,e()*n,1+e()*2.5,1+e()*2.5)}const o=new En(s);return o.wrapS=o.wrapT=On,o.repeat.set(8,8),o.colorSpace=ke,dl[i]=o,o}function _y(i,t){const e=new Jt;e.name="stone_walls";const n=[[-16.5,2.8,-7.5,2.8,1.1],[5,2.8,12.5,2.8,1.1],[-13.5,-8.6,-4.5,-8.6,1],[8,18.2,-2.5,18.2,1],[17.8,11.5,21.5,11.5,1.2]],s=new Lt(.55,.32,.4),r=new mt({color:9145222,roughness:.95}),o=[];for(const[c,h,d,u,f]of n){const g=Math.hypot(d-c,u-h),v=Math.floor(g/.58),p=Math.atan2(d-c,u-h),m=Math.max(2,Math.round(f/.33));for(let y=0;y<v;y++)for(let w=0;w<m;w++){const _=(y+.5)/v;o.push({x:c+(d-c)*_+(i()-.5)*.04,z:h+(u-h)*_,y:.16+w*.32,ry:p+(i()-.5)*.08})}for(let y=0;y<v;y++){const w=(y+.5)/v;o.push({x:c+(d-c)*w,z:h+(u-h)*w,y:.16+m*.32+.06,ry:p,cap:!0})}}const a=new ye(s,r,o.length),l=new ne;return o.forEach((c,h)=>{l.position.set(c.x,c.y,c.z),l.rotation.set(0,c.ry,0),l.scale.set(c.cap?1.15:1,c.cap?.45:1,c.cap?1.2:1),l.updateMatrix(),a.setMatrixAt(h,l.matrix)}),a.castShadow=!1,a.receiveShadow=!0,e.add(a),e}function xy(i){const t=new Jt;t.name="fences_gates";const e=new mt({color:5916208,roughness:.85}),n=new mt({color:4141602,roughness:.85}),s={W:[],D:[]},r=(a,l,c,h,d,u,f,g=0)=>{const v=new Lt(l,c,h),p=new ae().makeRotationY(g);p.setPosition(d,u,f),v.applyMatrix4(p),a.push(v)},o=[{x1:-4.6,z1:2.8,x2:4.6,z2:2.8,gate:.5},{x1:-16,z1:.5,x2:-16,z2:5.5,gate:-1},{x1:10.2,z1:11,x2:17.8,z2:11,gate:0}];for(const a of o){const l=Math.hypot(a.x2-a.x1,a.z2-a.z1),c=Math.floor(l/.28),h=Math.atan2(a.x2-a.x1,a.z2-a.z1)+Math.PI/2;for(let d=0;d<=c;d++){const u=d/c,f=a.x1+(a.x2-a.x1)*u,g=a.z1+(a.z2-a.z1)*u;a.gate&&Math.abs(u-.5)<.09||r(s.W,.16,1.1+(i()-.5)*.06,.04,f,.62,g,h)}r(s.D,l,.09,.06,(a.x1+a.x2)/2,1.05,(a.z1+a.z2)/2,h),r(s.D,l,.09,.06,(a.x1+a.x2)/2,.35,(a.z1+a.z2)/2,h),a.gate===.5?r(s.D,1.1,1.05,.06,(a.x1+a.x2)/2+.9,.6,(a.z1+a.z2)/2+.12,h):a.gate===-1&&r(s.D,1,1,.05,a.x1+.4,.58,a.z1+2.6,h+.6)}for(const[a,l]of[["W",e],["D",n]]){if(!s[a].length)continue;const c=new tt(ln(s[a],!1),l);c.castShadow=!0,c.receiveShadow=!0,t.add(c)}return t}function vy(){const i=new Jt;i.name="drainage";const t=new mt({color:3025960,roughness:.9}),e=new mt({color:1911347,roughness:.15,metalness:.6}),n=new mt({color:8224120,roughness:.95}),s=new tt(new Lt(60,.1,.5),t);s.position.set(0,.015,9.05),s.receiveShadow=!0,i.add(s);const r=new tt(new Te(60,.3),e);r.rotation.x=-Math.PI/2,r.position.set(0,.05,9.05),i.add(r),i.userData.waterMat=e;const o=[];for(let l=-28;l<=28;l+=4){const c=new Lt(1.2,.06,.56);c.translate(l,.09,9.05),o.push(c)}const a=new tt(ln(o,!1),n);a.receiveShadow=!0,i.add(a);for(const l of[-5.9,10.5]){const c=new tt(new Lt(1.6,.1,1.1),new mt({color:7033395,roughness:.8}));c.position.set(l,.12,9.05),c.castShadow=!0,c.receiveShadow=!0,i.add(c)}return i}function yy(i){const t=new Jt;t.name="stepping_stones";const e=new mt({color:9408393,roughness:.95}),n=[],s=[{x:0,z0:5.4,z1:2.6,n:4},{x:-10.5,z0:5.4,z1:2.4,n:4},{x:9.8,z0:5.4,z1:3,n:3},{x:14,z0:8.6,z1:10.8,n:3},{x:-13,z0:8.6,z1:10.8,n:3}];for(const o of s)for(let a=0;a<o.n;a++){const l=(a+.5)/o.n,c=new me(.32+i()*.1,.36,.09,7);c.translate(o.x+(i()-.5)*.3,.045,o.z0+(o.z1-o.z0)*l),n.push(c)}const r=new tt(ln(n,!1),e);return r.receiveShadow=!0,t.add(r),t}const fl="audio/suzume.mp3",My="audio/tsukimori-bgm.mp3",Sy="Shamisen Nation (DOVA-SYNDROME)",Hu="Suzume",Io=19e3,pl=14e3,Vu=8e3,_r=2200,ml=8;function ff(i,t,e){const n=e.w/2,s=e.d/2;return i>=e.cx-n&&i<=e.cx+n&&t>=e.cz-s&&t<=e.cz+s}function wy(i,t,e){if(!e)return null;for(let n=0;n<e.length;n++){const s=e[n];if(s&&ff(i,t,s))return s}return null}function by(i,t,e,n,s){const r=s.w/2,o=s.d/2,a=s.cx-r,l=s.cx+r,c=s.cz-o,h=s.cz+o;if(i>=a&&i<=l&&t>=c&&t<=h||e>=a&&e<=l&&n>=c&&n<=h)return!0;const f=e-i,g=n-t;let v=0,p=1;if(Math.abs(f)<1e-12){if(i<a||i>l)return!1}else{let m=(a-i)/f,y=(l-i)/f;if(m>y){const w=m;m=y,y=w}if(m>v&&(v=m),y<p&&(p=y),v>p)return!1}if(Math.abs(g)<1e-12){if(t<c||t>h)return!1}else{let m=(c-t)/g,y=(h-t)/g;if(m>y){const w=m;m=y,y=w}if(m>v&&(v=m),y<p&&(p=y),v>p)return!1}return!0}function Wu(i){return i<0?0:i>1?1:i}const Xu=new WeakSet;function Ey({camera:i=null,scene:t=null,zones:e=[]}={}){const o="inverse";let l=null,c=null,h=null,d=!1,u=null,f=!1,g=!1,v=!0,p=!1,m=!0,y=.9,w=!1,_=!1,M=.9,b=Io,R=-1,x=Hu,S=null;const E=new O,T=new O;function C(U){g||(g=!0,console.warn(U))}function P(){w||d||i&&l&&(i.add(l),w=!0)}function L(){try{const U=l&&l.context;if(U&&U.state==="suspended"){const k=U.resume();k&&typeof k.catch=="function"&&k.catch(()=>{})}}catch{}}function I(){try{const U=l&&l.context;return!!U&&U.state==="running"}catch{return!1}}function N(){if(d||f||!u||!c)return!1;try{return c.isPlaying||c.play(),_=!1,!0}catch{return!1}}try{l=new hm,c=new fm(l),c.setRefDistance(2.5),c.setRolloffFactor(1.6),c.setMaxDistance(55),c.setDistanceModel(o),c.setLoop(!0),c.setVolume(y),h=l.context.createBiquadFilter(),h.type="lowpass",h.frequency.value=Io,h.Q.value=.4,typeof c.setFilter=="function"&&c.setFilter(h),t&&typeof t.add=="function"&&t.add(c);try{const U=[{url:fl,label:Hu},{url:My,label:Sy}],k=X=>{if(X>=U.length){f=!0,C("[audio] missing "+fl+" (drop your file at public/"+fl+") and no bundled fallback — radio silent");return}new ru().load(U[X].url,dt=>{u=dt,x=U[X].label,f=!1;try{c.setBuffer(dt)}catch{}m&&v&&!p&&(P(),I()&&(L(),N()))},void 0,()=>{k(X+1)})};k(0)}catch{f=!0,C("[audio] loader unavailable — radio silent")}}catch{d=!0,f=!0,C("[audio] WebAudio unavailable — silent mode")}function z(){if(!i||!c)return R;c.getWorldPosition(E),T.setFromMatrixPosition(i.matrixWorld);const U=T.x-E.x,k=T.y-E.y,X=T.z-E.z;return Math.sqrt(U*U+k*k+X*X)}const G={source:c,loop:!0,volume:.9,refDistance:2.5,rolloffFactor:1.6,maxDistance:55,distanceModel:o,play(){return m=!0,d||f?!1:u?(P(),L(),N()):(P(),L(),!0)},pause(){if(m=!1,_=!1,!d&&c)try{c.pause()}catch{}},stop(){if(m=!1,_=!1,!d&&c)try{c.stop()}catch{}},mute(U){if(p=U!==!1,!d&&c&&p)try{c.setVolume(0)}catch{}},setVolume(U){const k=Number(U);y=Number.isFinite(k)?Math.min(1,Math.max(0,k)):y,p=!1,G.volume=y},loadCustom(U,k){if(!U||d)return!1;try{if(S&&S!==U)try{URL.revokeObjectURL(S)}catch{}return S=U,x=String(k||"Custom track").slice(0,48),f=!1,u=null,new ru().load(U,X=>{u=X;try{c&&c.setBuffer(X)}catch{}m&&v&&!p&&(P(),L(),N())},void 0,()=>{C("[audio] could not decode custom track (mp3/m4a/ogg/wav supported by your browser)")}),!0}catch{return!1}},setEnabled(U){if(v=!!U,v)m=!0,!d&&!f&&u?(P(),L(),N()):(P(),L());else if(m=!1,_=!1,!d&&c)try{c.pause()}catch{}},state(){const U=z(),k=Wu(1-(b-_r)/(Io-_r));let X=!1;try{X=!d&&!!c&&!!c.isPlaying}catch{X=!1}return{enabled:v,playing:X,track:x,missing:f,dist:U,muffleK:k}},update(U){let k=Number(U);if((!Number.isFinite(k)||k<0)&&(k=0),k>.1&&(k=.1),!i||!c)return;c.getWorldPosition(E),T.setFromMatrixPosition(i.matrixWorld);const X=T.x-E.x,dt=T.z-E.z,yt=Math.sqrt(X*X+(T.y-E.y)*(T.y-E.y)+dt*dt);R=yt;const wt=wy(E.x,E.z,e),bt=wt?ff(T.x,T.z,wt):!1;let Qt=!1;if(!bt&&e)for(let ft=0;ft<e.length;ft++){const gt=e[ft];if(!(!gt||gt===wt)&&by(T.x,T.z,E.x,E.z,gt)){Qt=!0;break}}let Q,nt;if(yt>55)Q=_r,nt=0;else if(bt)Q=Io,nt=1;else if(!Qt&&yt<ml)Q=pl,nt=.9;else{const ft=Wu((yt-ml)/(55-ml));Qt?(Q=Vu+(_r-Vu)*ft,nt=.55):(Q=pl+(_r-pl)*ft,nt=1)}let W=y*nt;(!v||p)&&(W=0);const st=1-Math.exp(-6*k),J=1-Math.exp(-4*k);if(M+=(W-M)*(k===0?1:st),b+=(Q-b)*(k===0?1:J),!d){try{h&&(h.frequency.value=b),c&&Math.abs(M-c.getVolume())>.002&&c.setVolume(M)}catch{}try{u&&c&&(M<.01&&(yt>55||!v||p)?c.isPlaying&&(c.pause(),_=!0):_&&v&&!p&&m&&yt<=55&&N())}catch{}}}};return G}function Ty(i){if(!i||Xu.has(i))return i;Xu.add(i);const t=()=>{e();try{typeof i.setEnabled=="function"&&i.setEnabled(!0)}catch{}},e=()=>{try{document.removeEventListener("pointerdown",t),document.removeEventListener("keydown",t)}catch{}};try{document.addEventListener("pointerdown",t),document.addEventListener("keydown",t)}catch{}return i}function Yu(i,t,e){const n=Fn(i),s=document.createElement("canvas");s.width=128,s.height=256;const r=s.getContext("2d");r.fillStyle=t,r.fillRect(0,0,128,256),r.strokeStyle=e,r.lineCap="round";for(let a=0;a<3;a++){const l=34+n()*60,c=50+a*70;for(let h=0;h<4;h++)r.lineWidth=4+n()*7,r.beginPath(),r.moveTo(l-22+n()*10,c+(n()-.5)*30),r.quadraticCurveTo(l,c+(n()-.5)*34,l+22-n()*8,c+(n()-.5)*30),r.stroke();r.lineWidth=5,r.beginPath(),r.moveTo(l,c-26),r.lineTo(l+(n()-.5)*12,c+26),r.stroke()}const o=new En(s);return o.colorSpace=ke,o}function Ay({lampPositions:i=[],polePositions:t=[],serviceDrops:e=[]}={}){const n=Fn(4242),s=new Jt;s.name="details";const r=[],o={wood:new mt({color:4864552,roughness:.85}),woodD:new mt({color:3352861,roughness:.9}),iron:new mt({color:2302758,roughness:.5,metalness:.85}),bronze:new mt({color:7035443,roughness:.35,metalness:.9}),paper:new mt({color:15788245,roughness:.9}),stone:new mt({color:9276808,roughness:.95}),leaf:new mt({color:4877109,roughness:1}),indigo:new mt({color:2833502,roughness:.95,side:Oe}),cream:new mt({color:14208952,roughness:.95,side:Oe})},a={},l=(S,E,T,C,P,L=0,I=0,N=0)=>{const z=new ae().makeRotationFromEuler(new Mn(I,L,N));z.setPosition(T,C,P),E.applyMatrix4(z),(a[S]||(a[S]=[])).push(E)},c=(S,E,T)=>new Lt(S,E,T),h=(S,E,T,C=8)=>new me(S,E,T,C),d=[];for(const[S,E]of t)l("woodD",h(.11,.14,6.4),S,3.2,E),l("woodD",c(1.4,.1,.1),S,5.9,E),l("woodD",c(1.1,.09,.09),S,5.4,E),d.push(new O(S,5.9,E));const u=[],f=new mt({color:5591108,emissive:16760938,emissiveIntensity:0});i.forEach(([S,E],T)=>{l("iron",h(.06,.09,3.4),S,1.7,E),l("iron",c(.7,.07,.07),S+.3,3.35,E)});const g=[],v=(S,E,T,C)=>{const P=new ir(.34,.035,8,20);l("iron",P.clone(),S-.45,.34,E,T),l("iron",P.clone(),S+.45,.34,E,T);const L=(I,N,z,G)=>{const U=Math.hypot(z-I,G-N),k=h(.025,.025,U,6),X=new Mn(0,T,Math.atan2(G-N,z-I)-Math.PI/2+C);k.applyMatrix4(new ae().makeRotationFromEuler(X)),k.translate((I+z)/2+S,(N+G)/2,E),(a.iron||(a.iron=[])).push(k)};L(-.45,.34,0,.75),L(.45,.34,0,.75),L(0,.75,-.15,.95),L(-.45,.34,.45,.34),l("woodD",c(.28,.05,.22),S-.05,.78,E,T),l("iron",h(.02,.02,.4,6),S+.45,.95,E,0,0,Math.PI/2)};v(11.2,10.6,.2,.12),v(-10.8,10.7,-.15,-.1),v(-4.9,3.4,1.45,.14);const p=(S,E,T,C,P)=>{const L=Yu(P,"#2b3c5e","#e8e0cc"),I=new tt(new Lt(.9,1.8,.08),new mt({map:L,roughness:.85}));I.position.set(S,E,T),I.rotation.y=C,I.castShadow=!0,s.add(I)};p(10.6,2.6,10.9,.3,7),p(-10.2,2.5,10.9,-.25,21);for(const[S,E,T]of[[-7.2,2.9,5],[6.9,2.9,9],[5.4,-9.4,13]]){const C=Yu(T,"#4a3a28","#efe6d0"),P=new tt(new Lt(.34,.7,.05),new mt({map:C,roughness:.85}));P.position.set(S,2,E),s.add(P)}{const S=new tt(c(1,1.9,.7),new mt({color:12071722,roughness:.4,metalness:.3}));S.position.set(17.9,.95,10.6),S.castShadow=!0,s.add(S);const E=new mt({color:1118481,emissive:12576511,emissiveIntensity:1.2,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),T=new tt(new Te(.8,1.2),E);T.position.set(17.9,1,10.24),T.rotation.y=Math.PI,s.add(T),s.userData.vendGlow=E}const m=(S,E,T=.45,C=0)=>l("wood",c(T,T,T),S,T/2,E,C);m(12.6,10.7,.5,.2),m(12.6,10.7+0,.42,.5),a.wood[a.wood.length-1].translate(0,.46,0),m(-14.8,10.6,.45,-.3),m(5.2,3.6,.4,.7);for(const[S,E]of[[1.8,3.2],[-2.2,3.3],[11.9,10.5]])l("woodD",h(.16,.13,.3),S,.15,E);const y=(S,E,T)=>{l("wood",c(1.6,.08,.4),S,.45,E,T),l("woodD",c(.08,.45,.36),S-.6,.22,E,T),l("woodD",c(.08,.45,.36),S+.6,.22,E,T)};y(.5,4.4,.1),y(-9.5,3.2,-.1);const w=[];for(let S=0;S<=6;S++)w.push(new ut(.14+S/6*.1,S/6*.28));const _=new nr(w,10);for(const[S,E]of[[-3.4,3.1],[3.2,3],[10.9,10.8],[-11.5,10.6],[2.2,4.3]])l("stone",_.clone(),S,0,E),l("leaf",new xn(.2,7,6),S,.42,E);l("woodD",h(.2,.17,.5),-1.8,.25,3.5);for(let S=0;S<3;S++)l("cream",h(.015,.09,.9,6),-1.85+S*.06,.7,3.5+(S-1)*.05);for(const S of[-10,2,12])l("iron",c(.8,.04,.5),S,.1,9.05);const M=(S,E)=>{const T=Math.sin(S*127.1+E*311.7)*43758.5453;return T-Math.floor(T)};for(const[S,E]of[[5.6,.9],[-5.6,.9]])for(let T=0;T<14;T++){const C=Math.floor(T/5),P=T%5,L=c(.85+M(T,S)*.2,.15,.15),I=new ae().makeRotationY((M(T,E)-.5)*.2);I.setPosition(S+(M(T,3)-.5)*.06,.1+C*.16,E+(P-2)*.17),L.applyMatrix4(I),(a.wood||(a.wood=[])).push(L)}{const S=new xn(.15,12,10),E=new mt({color:16773848,emissive:16757854,emissiveIntensity:1.2,roughness:.6});for(const[T,C]of[[-3.9,8.9],[6.8,8.9]]){const P=new tt(S,E);P.position.set(T,3.02,C),s.add(P)}}for(const[S,E]of[[13.5,"indigo"],[14.5,"cream"]]){const T=new Te(.5,.9,1,2);T.translate(0,-.45,0);const C=new tt(T,o[E]);C.position.set(S,2.6,10.8),C.rotation.y=S<14?.15:-.12,C.castShadow=!0,s.add(C),r.push({mesh:C,phase:M(S,1)*6.28,amp:.08})}{const S=new Jn(.32,1),E=S.attributes.position;for(let P=0;P<E.count;P++){const L=1+.22*Math.sin(P*3.7)+.12*Math.sin(P*9.1+1.3);E.setXYZ(P,E.getX(P)*L,E.getY(P)*L*.72,E.getZ(P)*L)}S.computeVertexNormals();const T=new ye(S,o.stone,5),C=new ne;[[-8.5,11.5],[-3.5,14.2],[-7.8,14.5],[-3.8,11.3],[-6,11]].forEach(([P,L],I)=>{C.position.set(P,.1,L),C.rotation.set(0,M(I,21)*6.28,0);const N=.7+M(I,22)*.9;C.scale.set(N,N*.8,N),C.updateMatrix(),T.setMatrixAt(I,C.matrix)}),T.instanceMatrix.needsUpdate=!0,T.castShadow=!0,T.receiveShadow=!0,s.add(T)}{const S=new Te(.36,.3);S.translate(0,.15,0);const E=new ye(S,o.leaf,24),T=new ne,C=[[-4.6,3.3],[-2,3.3],[1.5,3.3],[4.6,3.3],[-5.15,.9],[5.15,.9],[13,10.6],[15,10.6],[-14,10.6],[-12,10.6],[-6.2,1],[7.2,5.2]];let P=0;for(let L=0;L<12;L++)for(let I=0;I<2;I++){T.position.set(C[L][0],.02,C[L][1]),T.rotation.set(0,I*Math.PI/2+M(L,31)*.6,0);const N=.7+M(L,32+I)*.7;T.scale.set(N,N,N),T.updateMatrix(),E.setMatrixAt(P++,T.matrix)}E.instanceMatrix.needsUpdate=!0,E.castShadow=!1,E.receiveShadow=!1,s.add(E)}{const T=new tt(new Lt(.62,.9,.62),o.wood);T.position.set(15.5,.45,14.5),T.castShadow=!0,s.add(T);const C=new tt(new Lt(.55,.35,.3),o.wood);C.position.set(15.5,1.075,14.5),C.castShadow=!0,s.add(C);const P=new tt(new Lt(.5,.28,.02),o.iron);P.position.set(15.5,1.075,14.5-.16),s.add(P);const L=new me(.025,.025,.03,10);for(const G of[-.12,-.05]){const U=new tt(L,o.bronze);U.rotation.x=Math.PI/2,U.position.set(15.5+G,.99,14.5-.18),s.add(U)}const I=new tt(new me(.008,.012,.7,6),o.bronze);I.position.set(15.5+.18,1.55,14.5+.05),I.rotation.z=-.35,I.rotation.x=.12,s.add(I);const N=new mt({color:2102280,emissive:16757854,emissiveIntensity:1,roughness:.6}),z=new tt(new Lt(.3,.045,.012),N);z.position.set(15.5+.05,1.16,14.5-.175),s.add(z),s.userData.radioGlow=N,s.userData.radioPos=new O(15.5,1.15,14.5),s.userData.radioMeshes=[T,C,P,z]}const b=new zn({color:1118484});for(const S of e)try{const E=new O(S.a[0],S.a[1],S.a[2]),T=new O(S.b[0],S.b[1],S.b[2]);if(E.distanceTo(T)>22)continue;const C=E.clone().lerp(T,.5);C.y-=Math.min(.9,E.distanceTo(T)*.06);const P=new ra(E,C,T),L=new tt(new aa(P,16,.012,5),b);s.add(L),l("cream",h(.03,.035,.09,8),T.x,T.y,T.z)}catch{}const R=S=>o[{WOOD:"wood",wood:"wood",woodD:"woodD",iron:"iron",stone:"stone",leaf:"leaf",cream:"cream"}[S]||"wood"];for(const S of Object.keys(a)){const E=new tt(ln(a[S],!1),R(S));E.castShadow=S!=="leaf",E.receiveShadow=!0,s.add(E)}i.forEach(([S,E],T)=>{const C=new tt(new xn(.13,10,8),T<3?f:f.clone());if(C.position.set(S+.6,3.25,E),s.add(C),u.push(C.material),T<3){const P=new th(16760430,0,12,2);P.position.set(S+.6,3.2,E),s.add(P),g.push(P)}}),s.userData.lampGlows=u,s.userData.lampLights=g;const x=(S,E,T,C,P,L,I=0)=>{const N=new Te(C,P,1,4);N.translate(0,-P/2,0);const z=new tt(N,o[L]);z.position.set(S,E,T),z.rotation.y=I,z.castShadow=!0,s.add(z),r.push({mesh:z,phase:n()*6.28,amp:.08+n()*.06})};for(let S=0;S<3;S++)x(12.4+S*.55,2.5,10.95,.45,.8,"indigo");for(let S=0;S<2;S++)x(-14.2+S*.55,2.4,10.95,.45,.7,"cream");x(1.5,2.2,2.62,.4,.6,"cream");for(let S=0;S<d.length-1;S++){const E=d[S],T=d[S+1];if(E.distanceTo(T)>16)continue;const C=E.clone().lerp(T,.5);C.y-=.7;for(const P of[0,-.22]){const L=new ra(E.clone().add(new O(0,P,0)),C.clone().add(new O(0,P,0)),T.clone().add(new O(0,P,0))),I=new tt(new aa(L,20,.015,5),b);s.add(I)}}for(const[S,E]of[[-4.9,2.9],[4.9,2.9],[10.4,10.9],[-9.9,10.9]]){const T=new tt(h(.05,.07,.7,7),o.woodD);T.position.set(S,.55,E),T.castShadow=!0,s.add(T);for(let P=0;P<3;P++){const L=new tt(new xn(.32-P*.06,8,6),o.leaf);L.position.set(S+(n()-.5)*.2,1+P*.28,E+(n()-.5)*.2),L.scale.y=.75,L.castShadow=!0,s.add(L)}const C=new tt(_.clone(),o.stone);C.position.set(S,0,E),s.add(C)}return{group:s,cloth:r,lampGlows:u,lampLights:g}}function Ry(i,t,e={strength:.5}){if(!i?.cloth)return;const n=.4+(e.strength??.5);for(const s of i.cloth)s.mesh.rotation.x=Math.sin(t*2.1+s.phase)*s.amp*n}const gl=["DAWN","DAY","GOLDEN","SUNSET","BLUE_HOUR","NIGHT","MOONLIT","RAIN_NIGHT","MIST_NIGHT"],qu={DAWN:{sunC:16757370,sunI:1.6,el:12,az:95,sky:[10336470,15910043],fog:13620438,hemi:.5,hemiSky:12375016,hemiGround:9072466,exp:1,lit:0,lampK:1,starK:0},DAY:{sunC:16774112,sunI:2.6,el:62,az:150,sky:[7317724,13624303],fog:ih,hemi:.7,hemiSky:12375016,hemiGround:9072466,exp:1,lit:0,lampK:1,starK:0},GOLDEN:{sunC:16761963,sunI:2,el:18,az:235,sky:[8363204,16767392],fog:14207412,hemi:.55,hemiSky:15255968,hemiGround:6248010,exp:1.05,lit:0,lampK:1,starK:0},SUNSET:{sunC:16744013,sunI:1.4,el:6,az:262,sky:[5926824,16752228],fog:13216143,hemi:.45,hemiSky:9076672,hemiGround:4866104,exp:1.05,lit:.25,lampK:1,starK:.05},BLUE_HOUR:{sunC:8029951,sunI:.35,el:-4,az:290,sky:[1450573,12151374],fog:5922694,hemi:.35,hemiSky:4874144,hemiGround:3025448,exp:.9,lit:.8,lampK:1,starK:.3},NIGHT:{sunC:9414872,sunI:.22,el:28,az:300,sky:[395798,1055795],fog:725536,hemi:.18,hemiSky:2371676,hemiGround:658450,exp:.95,lit:1,lampK:1,starK:.9},MOONLIT:{sunC:12176639,sunI:1.1,el:48,az:40,sky:[330004,858160],fog:659746,hemi:.14,hemiSky:1713232,hemiGround:329484,exp:.85,lit:1,lampK:1,starK:1},RAIN_NIGHT:{sunC:5925514,sunI:.25,el:30,az:120,sky:[461588,1120294],fog:857119,hemi:.18,hemiSky:2765896,hemiGround:658448,exp:.8,lit:1,lampK:1.25,starK:.05},MIST_NIGHT:{sunC:6975622,sunI:.18,el:25,az:200,sky:[658708,1712168],fog:1317410,hemi:.2,hemiSky:3159615,hemiGround:790033,exp:.8,lit:1,lampK:1.1,starK:0}};function Cy({renderer:i,scene:t,sun:e,hemi:n,skyMat:s=null,houses:r=[],lampGlows:o=[],lampLights:a=[],vendGlow:l=null,stars:c=null,moon:h=null}={}){let d="DAY",u="DAY",f=1,g=!1,v=0;const p=new Nt,m=new Nt,y=new Nt,w=new Nt,_=new Nt,M=new Nt,b=x("DAY"),R=x("DAY");function x(E){const T=qu[E];return{...T,sky:[...T.sky]}}function S(E,T,C){const P=b,L=R,I=p.set(P.sunC).lerp(new Nt(L.sunC),T);if(e){const k=1-(C?.dimK??0);e.color.copy(I),e.intensity=Ze.lerp(P.sunI,L.sunI,T)*k;const X=Ze.degToRad(Ze.lerp(P.el,L.el,T)),dt=Ze.degToRad(Ze.lerp(P.az,L.az,T));e.position.set(Math.cos(X)*Math.cos(dt),Math.sin(X),Math.cos(X)*Math.sin(dt)).multiplyScalar(60)}if(m.set(P.sky[0]).lerp(new Nt(L.sky[0]),T),y.set(P.sky[1]).lerp(new Nt(L.sky[1]),T),s?.uniforms?(s.uniforms.topColor?.value.copy(m),s.uniforms.bottomColor?.value.copy(y),s.uniforms.top&&s.uniforms.top.value.copy(m),s.uniforms.mid&&s.uniforms.mid.value.copy(y),s.uniforms.bot&&s.uniforms.bot.value.copy(y).multiplyScalar(.82)):t?.background?.isColor&&t.background.copy(y),w.set(P.fog).lerp(new Nt(L.fog),T),t?.fog){t.fog.color.copy(w);const k=C?.mistK??0,X=C?.rainK??0,dt=C?.snowK??0;t.fog.near=Ze.lerp(42,10,k)-X*8-dt*6,t.fog.far=Ze.lerp(500,90,k)-X*180-dt*150}n&&(n.intensity=Ze.lerp(P.hemi,L.hemi,T),P.hemiSky!==void 0&&(n.color.copy(_.set(P.hemiSky).lerp(new Nt(L.hemiSky),T)),n.groundColor.copy(M.set(P.hemiGround).lerp(new Nt(L.hemiGround),T)))),i&&(i.toneMappingExposure=Ze.lerp(P.exp,L.exp,T));const N=Ze.lerp(P.lit??0,L.lit??0,T),z=Ze.lerp(P.lampK??1,L.lampK??1,T),G=Ze.lerp(P.starK??0,L.starK??0,T),U=N;for(const k of r)for(const X of k.glowMats||[])X.emissiveIntensity=U*(k.name==="hero"?1.6:.9);for(const k of o)k.emissiveIntensity=N*2.2*z;for(const k of a)k.intensity=N*14*z;l&&(l.emissiveIntensity=.4+N*1.6),c&&(c.material.opacity=N*G),h&&(h.material.opacity=N)}return{get state(){return f>=1?u:`${d}>${u}`},get auto(){return g},set(E){const T=String(E).toUpperCase().replace(/[\s-]+/g,"_");qu[T]&&T!==u&&(Object.assign(b,x((f>=1,u))),d=f>=1?u:d,Object.assign(R,x(T)),u=T,f=0)},cycle(){this.set(gl[(gl.indexOf(u)+1)%gl.length])},toggleAuto(){return g=!g,g},update(E,T){g&&(v+=E,v>14&&(v=0,this.cycle())),f=Math.min(1,f+E/2.5);const C=f*f*(3-2*f);S(u,C,T)}}}function Py(i){const t=new Jt;t.name="night_sky";const e=400,n=new Float32Array(e*3);let s=-1627238007;const r=()=>(s=s*1103515245+12345&2147483647)/2147483647;for(let d=0;d<e;d++){const u=r()*Math.PI*2,f=r()*Math.PI*.45+.08,g=120;n[d*3]=Math.cos(u)*Math.cos(f)*g,n[d*3+1]=Math.sin(f)*g,n[d*3+2]=Math.sin(u)*Math.cos(f)*g}const o=new ge;o.setAttribute("position",new Me(n,3));const a=new Ks(o,new os({color:13623551,size:.7,transparent:!0,opacity:0,depthWrite:!1}));a.frustumCulled=!1,t.add(a);const l=new tt(new Zn(3,24),new zn({color:15265791,transparent:!0,opacity:0,fog:!1}));l.position.set(-60,42,-80),l.lookAt(0,0,0),t.add(l);const c=new _c(10336488,0);c.position.copy(l.position),t.add(c),t.userData.setMoon=d=>{c.intensity=d*.35};const h=t.userData.setMoon;return i.add(t),{stars:a,moon:l,moonLight:c,setMoon:h}}function Dy(i){const t=i<0?0:i>1?1:i;return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}const Ae=[{n:"01 MOON FOREST ESTABLISHING",pos:[-28,14,-22],tgt:[0,2,4],fov:55,rail:{to:[-24,13,-18],tgtTo:null,period:14},mood:null,focus:{target:[0,2,4],dist:38},intent:"Moonlit canopy edge first, then eye drops to the lit village bowl."},{n:"02 LANTERN ALLEY",pos:[-5.9,1.6,-8],tgt:[-5.9,1.9,6],fov:50,rail:{to:[-5.9,1.6,1.5],tgtTo:[-5.9,1.9,8],period:12},mood:null,focus:{target:[-5.9,1.9,2],dist:10},intent:"Nearest lantern glow first, then eye travels down the alley line."},{n:"03 ROOF REVEAL",pos:[.5,5.4,1],tgt:[0,4,-1.2],fov:40,rail:{to:[3.8,6.6,6.8],tgtTo:[0,3.2,-1],period:12},mood:null,focus:{target:[0,4,-1],dist:3.5},intent:"Hero tile texture first, then rail pull reveals the ridge line."},{n:"04 MAPLE FOREGROUND",pos:[-4.9,2.7,5.6],tgt:[.5,2,-1.2],fov:45,rail:{to:[-3.6,2.6,5.2],tgtTo:null,period:10},mood:null,focus:{target:[.5,2,-1.2],dist:8.5},intent:"Red maple leaves first framing the edge, then hero house snaps into view."},{n:"05 POND",pos:[-8.6,1.7,13.4],tgt:[-4.2,.8,12.4],fov:50,rail:{to:[-3.4,1.7,13.4],tgtTo:[-6.5,.8,12.8],period:14},mood:null,focus:{target:[-6,.8,13],dist:4.5},intent:"Pond ripple highlight first, then lateral drift carries eye across reflections."},{n:"06 RAIN STREET",pos:[2.2,1.7,6.6],tgt:[-5,1.9,8.6],fov:50,rail:{to:[-1.5,1.7,6.4],tgtTo:null,period:11},mood:{time:"RAIN_NIGHT",wx:"rainy"},focus:{target:[-4.2,1.8,8.9],dist:7.5},intent:"Wet lamp halo first, then eye slides along the rain-streaked street."},{n:"07 MACHIYA ENTRANCE",pos:[6.6,1.9,6.2],tgt:[-.5,1.6,-.5],fov:40,rail:{to:[4.8,1.8,5],tgtTo:null,period:10},mood:null,focus:{target:[0,1.6,0],dist:9},intent:"Lattice doorway warmth first, then 3/4 facade and tiles read as one."},{n:"08 GARDEN PASSAGE",pos:[2.6,1.1,-6.8],tgt:[-2.2,1.3,-1.5],fov:50,rail:{to:[.8,1.1,-4.8],tgtTo:null,period:11},mood:null,focus:{target:[-2,1.2,-2],dist:6},intent:"Near planting leaves first, then low passage funnels eye to the court."},{n:"09 GOLDEN HOUR",pos:[-18,3.4,7.2],tgt:[12,2,7],fov:32,rail:{to:[-14,3,7.4],tgtTo:null,period:14},mood:{time:"GOLDEN",wx:"clear"},focus:{target:[0,2,7],dist:20},intent:"Long warm street axis first, then compressed facades glow edge to edge."},{n:"10 BLUE HOUR",pos:[12.5,5.5,-6],tgt:[0,2,4],fov:40,rail:{to:[9.5,5,-3.5],tgtTo:null,period:13},mood:{time:"BLUE_HOUR",wx:"clear"},focus:{target:[0,2,4],dist:16},intent:"Cool sky gradient first, then village lights detach from dusk."},{n:"11 MOONLIT ROOFLINE",pos:[14.5,4.6,10.5],tgt:[-20,5,-20],fov:24,rail:{to:[12.5,4.4,9],tgtTo:null,period:15},mood:{time:"MOONLIT",wx:"clear"},focus:{target:[-5,4.5,-6],dist:32},intent:"Stacked roof silhouettes first, then eye runs the telephoto line toward moon azimuth."},{n:"12 FINAL REVEAL",pos:[18,9.5,18.5],tgt:[-8,3,-8],fov:45,rail:{to:[15,8.5,16],tgtTo:null,period:16},mood:{time:"MIST_NIGHT",wx:"misty"},focus:{target:[-4,2.5,0],dist:34},intent:"Whole village bowl and moon glow first, then mist softens the far treeline."}];function Ly(i,t){let e=0,n="orbit",s=!1,r=0;const o=9;let a=0,l=null,c=null;const h=new O().fromArray(Ae[0].pos);new O().fromArray(Ae[0].pos);const d=new O().fromArray(Ae[0].tgt);new O().fromArray(Ae[0].tgt),Ae[0].fov;function u(w,_){return _.fromArray(Ae[w].pos)}function f(w,_,M){M.fromArray(Ae[w].pos);const b=Ae[w].rail;if(b&&b.to){const R=b.to[0],x=b.to[1],S=b.to[2];M.set(M.x+(R-Ae[w].pos[0])*_,M.y+(x-Ae[w].pos[1])*_,M.z+(S-Ae[w].pos[2])*_)}return M}function g(w,_){return _.fromArray(Ae[w].tgt)}function v(w,_,M){M.fromArray(Ae[w].tgt);const b=Ae[w].rail;return b&&b.tgtTo&&M.set(M.x+(b.tgtTo[0]-Ae[w].tgt[0])*_,M.y+(b.tgtTo[1]-Ae[w].tgt[1])*_,M.z+(b.tgtTo[2]-Ae[w].tgt[2])*_),M}function p(w,_=2.5){const M=Ae.length,b=(w%M+M)%M;c={fp:i.position.clone(),tp:new O().fromArray(Ae[b].pos),ft:t?t.target.clone():new O().fromArray(Ae[b].tgt),tt:new O().fromArray(Ae[b].tgt),ff:i.fov,tf:Ae[b].fov,t:0,dur:Math.max(.01,_)},e=b,r=0,a=0}function m(w){u(w,i.position),t&&(g(w,t.target),t.update()),i.fov=Ae[w].fov,i.updateProjectionMatrix()}const y={get idx(){return e},get mode(){return n},get label(){return n==="orbit"?"orbit":Ae[e].n},get count(){return Ae.length},get names(){return Ae.map(w=>w.n)},setMode(w){return n=String(w),r=0,t&&(t.enabled=n!=="cine"),n==="cine"&&m(e),n},goTo(w,_=2.5,M=!1){const b=Ae.length,R=(w%b+b)%b;if(p(R,_),M&&l&&Ae[R].mood)try{l(Ae[R].mood)}catch{}return e},onMood(w){return typeof w=="function"&&(l=w),y},next(){return y.goTo(e+1,2.5,!1)},prev(){return y.goTo(e-1,2.5,!1)},toggleAdvance(){return s=!s,r=0,s},update(w){const _=Math.min(Math.max(w||0,0),.1);if(a+=_,n==="free"||n==="orbit"){let x=!1;try{x=!!(window.__explore&&window.__explore.on)}catch{}t&&!x&&t.update();return}if(s&&!c&&(r+=_,r>=o&&y.next()),c){c.t+=_;const x=Dy(c.t/c.dur);i.position.lerpVectors(c.fp,c.tp,x);const S=new O().lerpVectors(c.ft,c.tt,x);t&&t.target.copy(S),i.fov=c.ff+(c.tf-c.ff)*x,i.updateProjectionMatrix(),c.t>=c.dur&&(c=null,a=0),t&&t.update();return}const M=Ae[e].rail&&Ae[e].rail.period||12,b=.5+.5*Math.sin(a/M*Math.PI*2-Math.PI/2);f(e,b,h),v(e,b,d),i.position.copy(h),t&&t.target.copy(d);const R=Ae[e].fov;Math.abs(i.fov-R)>.01&&(i.fov+=(R-i.fov)*Math.min(1,_*2),i.updateProjectionMatrix()),t&&t.update()}};return y}function Iy(i,t){const e=[],n=[],s=new pm,r=new ut;let o=0,a=0,l=0,c=0;function h(v,p){const m=t.getBoundingClientRect();r.set((v-m.left)/m.width*2-1,-((p-m.top)/m.height)*2+1),s.setFromCamera(r,i);const y=[];for(const M of e)y.push(M.node);for(const M of n)y.push(...M.meshes);const w=s.intersectObjects(y,!0);if(!w.length)return null;let _=w[0].object;for(const M of e){let b=_;for(;b;){if(b===M.node)return{kind:"slide",item:M};b=b.parent}}for(const M of n)for(const b of M.meshes){let R=_;for(;R;){if(R===b)return{kind:"action",item:M};R=R.parent}}return null}function d(v,p){if(!v)return null;const m={node:v,closed:v.position.x,open:p,t:0,target:0};return e.push(m),m}function u(v,p){!v||!v.length||typeof p!="function"||n.push({meshes:v.slice(),fn:p})}try{t.addEventListener("pointerdown",v=>{o=v.clientX,a=v.clientY,l=performance.now()}),t.addEventListener("pointerup",v=>{if(Math.hypot(v.clientX-o,v.clientY-a)>6||performance.now()-l>400)return;let m=null;try{m=h(v.clientX,v.clientY)}catch{m=null}if(m)if(m.kind==="slide")m.item.target=m.item.target>.5?0:1;else try{m.item.fn()}catch{}}),t.addEventListener("pointermove",v=>{const p=performance.now();if(p-c<120)return;c=p;let m=null;try{m=h(v.clientX,v.clientY)}catch{m=null}try{t.style.cursor=m?"pointer":""}catch{}})}catch{}function f(v){let p=Number(v);(!Number.isFinite(p)||p<0)&&(p=0),p>.1&&(p=.1);const m=1-Math.exp(-3*p||1e-4);for(const y of e){y.t+=(y.target-y.t)*(p===0?1:m),Math.abs(y.target-y.t)<.002&&(y.t=y.target);const w=y.t*y.t*(3-2*y.t);y.node.position.x=y.closed+(y.open-y.closed)*w}}return{addSlide:d,onTap:u,update:f,get count(){return e.length+n.length}}}const Ku=1.6,Ny=3.4;function Uy(i,t,e={}){const n=typeof e.heightFn=="function"?e.heightFn:()=>0,s=Array.isArray(e.solids)?e.solids:[];let r=!1,o=0,a=0;const l=new O(0,Ku,10),c={},h=new O,d=new O,u=new O;let f=-1,g=-1,v=0,p=0,m=0,y=0,w=0,_=0,M=0,b=0,R=!1,x=null;function S(I,N){let z=0;try{z=n(I,N)}catch{z=0}return(Number.isFinite(z)?z:0)+Ku}function E(I){for(const N of s){if(typeof N.blockWhen=="function"){let X=!1;try{X=!!N.blockWhen()}catch{X=!1}if(X)continue}const z=N.x0-.35,G=N.x1+.35,U=N.z0-.35,k=N.z1+.35;if(I.x>z&&I.x<G&&I.z>U&&I.z<k){const X=I.x-z,dt=G-I.x,yt=I.z-U,wt=k-I.z,bt=Math.min(X,dt,yt,wt);bt===X?I.x=z:bt===dt?I.x=G:bt===yt?I.z=U:I.z=k}}}function T(I,N){x||(x=document.createElement("div"),x.style.cssText="position:fixed;width:96px;height:96px;border-radius:50%;border:2px solid rgba(255,255,255,.35);background:rgba(255,255,255,.06);z-index:30;pointer-events:none;display:none;",document.body.appendChild(x)),x.style.display="block",x.style.left=I-48+"px",x.style.top=N-48+"px"}function C(){try{x&&(x.style.display="none")}catch{}}function P(I,N){return r=!!I,r?(N&&(l.set(N.x??0,0,N.z??10),o=N.yaw??0,a=0),l.y=S(l.x,l.z),i.position.copy(l),i.rotation.order="YXZ",i.rotation.set(a,o,0)):C(),r}try{window.addEventListener("keydown",U=>{c[U.code]=!0}),window.addEventListener("keyup",U=>{c[U.code]=!1});let I=-1,N=0,z=0;t.addEventListener("pointerdown",U=>{r&&(U.pointerType==="touch"?U.clientX<window.innerWidth/2&&f<0?(f=U.pointerId,v=m=U.clientX,p=y=U.clientY,T(v,p)):g<0&&(g=U.pointerId,w=M=U.clientX,_=b=U.clientY,R=!0):I<0&&(I=U.pointerId,N=U.clientX,z=U.clientY))});const G=U=>{U.pointerId===f&&(f=-1,C()),U.pointerId===g&&(g=-1,R=!1),U.pointerId===I&&(I=-1)};window.addEventListener("pointerup",G),window.addEventListener("pointercancel",G),window.addEventListener("pointermove",U=>{r&&(U.pointerId===f?(m=U.clientX,y=U.clientY):U.pointerId===g&&R?(o-=(U.clientX-M)*.0042,a-=(U.clientY-b)*.0042,a=Math.max(-1.48,Math.min(1.48,a)),M=U.clientX,b=U.clientY):U.pointerId===I&&U.buttons&&(o-=(U.clientX-N)*.0042,a-=(U.clientY-z)*.0042,a=Math.max(-1.48,Math.min(1.48,a)),N=U.clientX,z=U.clientY))})}catch{}function L(I){if(!r)return;let N=Number(I);(!Number.isFinite(N)||N<0)&&(N=0),N>.1&&(N=.1);let z=0,G=0;(c.KeyW||c.ArrowUp)&&(G+=1),(c.KeyS||c.ArrowDown)&&(G-=1),(c.KeyA||c.ArrowLeft)&&(z-=1),(c.KeyD||c.ArrowRight)&&(z+=1),f>=0&&(z+=(m-v)/40,G-=(y-p)/40);const U=Math.hypot(z,G);U>1&&(z/=U,G/=U),h.set(-Math.sin(o),0,-Math.cos(o)),d.set(-h.z,0,h.x),u.set(0,0,0).addScaledVector(h,G).addScaledVector(d,z),u.lengthSq()>0&&(u.normalize().multiplyScalar(Ny*N),l.x+=u.x,l.z+=u.z),E(l);const k=S(l.x,l.z);l.y+=(k-l.y)*Math.min(1,N*10+(N===0?1:0)),i.position.copy(l),i.rotation.order="YXZ";const X=1-Math.exp(-9*(N||.016));i.rotation.y+=(o-i.rotation.y)*X,i.rotation.x+=(a-i.rotation.x)*X,i.rotation.z=0,i.fov=55,i.updateProjectionMatrix()}return{update:L,setEnabled:P,get enabled(){return r}}}function Oy(i){i=i||{};var t=i.daytime||{},e=i.weather||{},n=i.cine||{},s=i.hudEl||null,r=i.audio||null,o=["DAWN","DAY","GOLDEN","SUNSET","BLUE_HOUR","NIGHT","MOONLIT","RAIN_NIGHT","MIST_NIGHT"],a={DAWN:"DAWN",DAY:"DAY",GOLDEN:"GOLDEN",SUNSET:"SUNSET",BLUE_HOUR:"BLUE",NIGHT:"NIGHT",MOONLIT:"MOON",RAIN_NIGHT:"RAIN",MIST_NIGHT:"MIST"},l=["clear","windy","rainy","misty","snow"],c={clear:"CLEAR",windy:"WINDY",rainy:"RAIN",misty:"MIST",snow:"SNOW"},h=["low","medium","high","cinematic"],d={low:"LOW",medium:"MED",high:"HIGH",cinematic:"CINE"},u={low:"off",medium:"off",high:"off",cinematic:"high"},f="20260911";function g(at){return typeof at=="function"?at():at}function v(at,Bt){try{return at==null?Bt:String(at)}catch{return Bt}}function p(at,Bt,te){var pe=document.createElement(at);return Bt&&(pe.className=Bt),te!=null&&(pe.textContent=te),pe}function m(at,Bt){try{at.addEventListener("click",function(te){try{te.stopPropagation()}catch{}try{Bt()}catch{}})}catch{}}var y=!1;try{y=window.innerWidth<700}catch{y=!0}var w=y,_=!1,M="time",b=y?"medium":"high",R=!0,x=!1,S=!1,E="",T="",C=0,P=!1;try{P=/[?&]dev=1\b/.test(window.location.search||"")}catch{P=!1}var L='.tsuki-root{position:fixed;inset:0;z-index:20;pointer-events:none;font-family:system-ui,-apple-system,"Hiragino Sans","Noto Sans JP",sans-serif;color:#f2efe6;}.tsuki-root button,.tsuki-root input,.tsuki-l1,.tsuki-l2{pointer-events:auto;}.tsuki-l1{position:fixed;top:calc(env(safe-area-inset-top,0px) + 12px);right:calc(env(safe-area-inset-right,0px) + 12px);background:rgba(9,11,18,.55);-webkit-backdrop-filter:blur(18px) saturate(1.4);backdrop-filter:blur(18px) saturate(1.4);border:1px solid rgba(255,255,255,.14);border-radius:14px;box-shadow:0 4px 18px rgba(0,0,0,.35);padding:8px 10px;min-width:172px;max-width:62vw;display:flex;align-items:center;gap:8px;}.tsuki-title{font-size:12px;letter-spacing:.22em;font-weight:650;white-space:nowrap;}.tsuki-title .jp{font-weight:400;opacity:.75;letter-spacing:.35em;margin-left:6px;}#du-state{font-size:11px;letter-spacing:.08em;opacity:.85;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.tsuki-chev{margin-left:auto;min-width:44px;min-height:44px;border-radius:10px;border:1px solid rgba(255,255,255,.16);background:rgba(255,255,255,.07);color:#f2efe6;font-size:15px;line-height:1;}.tsuki-l2{position:fixed;top:calc(env(safe-area-inset-top,0px) + 96px);right:calc(env(safe-area-inset-right,0px) + 12px);width:300px;max-height:calc(100vh - 130px);overflow-y:auto;-webkit-overflow-scrolling:touch;background:rgba(9,11,18,.72);-webkit-backdrop-filter:blur(18px) saturate(1.4);backdrop-filter:blur(18px) saturate(1.4);border:1px solid rgba(255,255,255,.12);border-radius:16px;box-shadow:0 8px 28px rgba(0,0,0,.45);padding:6px 6px calc(env(safe-area-inset-bottom,0px) + 8px);}.tsuki-sec{border-top:1px solid rgba(255,255,255,.08);}.tsuki-sec:first-child{border-top:none;}.tsuki-sec-head{display:flex;width:100%;min-height:44px;align-items:center;background:none;border:none;color:#f2efe6;font-size:11px;letter-spacing:.24em;padding:6px 10px;}.tsuki-sec-head .dot{width:6px;height:6px;border-radius:50%;background:#c8a86a;margin-right:8px;opacity:.9;}.tsuki-sec-head .st{margin-left:auto;opacity:.55;font-size:10px;letter-spacing:.1em;}.tsuki-sec-body{padding:2px 8px 12px;display:none;}.tsuki-sec.open .tsuki-sec-body{display:block;}.tsuki-row{display:flex;flex-wrap:wrap;gap:6px;}.tsuki-seg{flex:1 1 30%;min-height:44px;min-width:44px;border-radius:9px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);color:#f2efe6;font-size:11px;letter-spacing:.06em;}.tsuki-seg.on{background:rgba(200,168,106,.22);border-color:rgba(200,168,106,.65);}.tsuki-shotname{font-size:17px;letter-spacing:.04em;margin:2px 2px 0;font-weight:650;}.tsuki-mood{font-size:11px;letter-spacing:.2em;opacity:.7;margin:2px;}.tsuki-counter{font-size:11px;letter-spacing:.14em;opacity:.55;margin:0 2px 8px;}.tsuki-trans{display:flex;gap:6px;margin-bottom:8px;}.tsuki-trans button{flex:1;min-height:44px;border-radius:9px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);color:#f2efe6;font-size:12px;}.tsuki-present-btn{width:100%;min-height:44px;border-radius:9px;border:1px solid rgba(200,168,106,.6);background:rgba(200,168,106,.14);color:#f2efe6;font-size:11px;letter-spacing:.22em;margin-bottom:8px;}.tsuki-l3{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:6px;}.tsuki-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px;}.tsuki-grid button{min-height:44px;border-radius:8px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.04);color:#f2efe6;font-size:11px;text-align:left;padding:0 10px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.tsuki-grid button.on{background:rgba(200,168,106,.22);border-color:rgba(200,168,106,.65);}.tsuki-track{font-size:12px;margin:2px 2px 8px;opacity:.9;}.tsuki-vol{display:flex;align-items:center;gap:8px;margin:0 2px 6px;}.tsuki-vol input{flex:1;min-height:44px;}.tsuki-note{font-size:11px;line-height:1.5;opacity:.65;margin:4px 2px;font-family:ui-monospace,Menlo,monospace;}.tsuki-about{font-size:11px;line-height:1.9;letter-spacing:.18em;opacity:.8;padding:2px;}.tsuki-root.tsuki-present .tsuki-l1,.tsuki-root.tsuki-present .tsuki-l2{display:none;}.tsuki-anim{transition:opacity .22s ease-out,transform .22s ease-out;}.tsuki-dev{position:fixed;right:calc(env(safe-area-inset-right,0px) + 10px);bottom:calc(env(safe-area-inset-bottom,0px) + 10px);z-index:21;pointer-events:none;background:rgba(0,0,0,.72);border:1px solid rgba(255,255,255,.14);border-radius:8px;padding:8px 10px;font-family:ui-monospace,Menlo,monospace;font-size:10.5px;line-height:1.65;color:#cfe3cf;white-space:pre;max-width:70vw;overflow:hidden;}@media (max-width:700px) and (orientation:portrait){.tsuki-l2{top:auto;bottom:0;right:0;left:0;width:auto;border-radius:16px 16px 0 0;max-height:45vh;padding-bottom:calc(env(safe-area-inset-bottom,0px) + 10px);}.tsuki-l1{max-width:calc(100vw - 24px);}}@media (max-width:700px) and (orientation:landscape){.tsuki-l2{width:278px;max-height:72vh;top:calc(env(safe-area-inset-top,0px) + 88px);}}';try{var I=document.createElement("style");I.setAttribute("data-tsuki","1"),I.textContent=L,document.head.appendChild(I)}catch{}var N=p("div","tsuki-root tsuki-anim"),z=p("div","tsuki-l1"),G=p("div",null),U=p("div","tsuki-title","TSUKIMORI");try{var k=p("span","jp","月森");U.appendChild(k)}catch{}var X=p("div",null);try{X.id="du-state"}catch{}G.appendChild(U),G.appendChild(X);var dt=p("button","tsuki-chev","▾");try{dt.setAttribute("aria-label","toggle panel")}catch{}z.appendChild(G),z.appendChild(dt),N.appendChild(z);var yt=p("div","tsuki-l2");N.appendChild(yt);var wt={};function bt(at,Bt){var te=p("div","tsuki-sec"),pe=p("button","tsuki-sec-head");try{pe.setAttribute("aria-expanded","false")}catch{}var We=p("span","dot"),Tn=p("span",null,Bt),Qn=p("span","st","");pe.appendChild(We),pe.appendChild(Tn),pe.appendChild(Qn);var di=p("div","tsuki-sec-body");return te.appendChild(pe),te.appendChild(di),yt.appendChild(te),wt[at]={sec:te,head:pe,tag:Qn},m(pe,function(){Qt(M===at?"":at)}),di}function Qt(at){M=at;try{for(var Bt in wt)if(Object.prototype.hasOwnProperty.call(wt,Bt)){var te=Bt===M,pe=wt[Bt];pe.sec.className="tsuki-sec"+(te?" open":"");try{pe.head.setAttribute("aria-expanded",te?"true":"false")}catch{}}}catch{}}var Q=bt("time","TIME"),nt=p("div","tsuki-row");Q.appendChild(nt);var W={};o.forEach(function(at){var Bt=p("button","tsuki-seg",a[at]||at);try{Bt.title=at}catch{}nt.appendChild(Bt),W[at]=Bt,m(Bt,function(){try{t.set(at)}catch{}je()})});var st=bt("weather","WEATHER"),J=p("div","tsuki-row");st.appendChild(J);var ft={};l.forEach(function(at){var Bt=p("button","tsuki-seg",c[at]||at.toUpperCase());J.appendChild(Bt),ft[at]=Bt,m(Bt,function(){try{e.setState(at)}catch{}je()})});var gt=bt("cine","CINEMATIC"),Z=p("div","tsuki-shotname","—"),j=p("div","tsuki-mood","—"),it=p("div","tsuki-counter","—");gt.appendChild(Z),gt.appendChild(j),gt.appendChild(it);var ct=p("div","tsuki-trans"),pt=p("button",null,"◀"),_t=p("button",null,"❚❚ ADV"),Mt=p("button",null,"▶"),xt=p("button",null,"MODE"),Ut=p("button",null,"EXPLORE"),B=p("button",null,"AUTO");[pt,_t,Mt,xt,Ut,B].forEach(function(at){ct.appendChild(at)}),gt.appendChild(ct);var jt=p("button","tsuki-present-btn","ENTER CINEMATIC");gt.appendChild(jt);var he=p("div","tsuki-l3"),F=p("div","tsuki-grid");he.appendChild(F),gt.appendChild(he);var A=[];function Y(){try{if(n&&Object.prototype.toString.call(n.names)==="[object Array]"&&n.names.length)return n.names}catch{}for(var at=[],Bt=0;Bt<12;Bt++)at.push("SHOT "+("0"+(Bt+1)).slice(-2));return at}m(pt,function(){try{n.prev()}catch{}je()}),m(Mt,function(){try{n.next()}catch{}je()}),m(_t,function(){try{n.toggleAdvance()}catch{}R=!R,je()}),m(xt,function(){try{n.setMode(g(n.mode)==="cine"?"free":"cine")}catch{}je()});var $=!1;m(Ut,function(){$=!$;try{window.dispatchEvent(new CustomEvent("tsuki-explore",{detail:$}))}catch{}try{Ut.textContent=$?"EXIT EXPLORE":"EXPLORE"}catch{}je()}),m(B,function(){try{t.toggleAuto()}catch{}x=!x,je()}),m(jt,function(){dn(!_)});function rt(){try{F.textContent="",A=[];for(var at=Y(),Bt=0;Bt<at.length;Bt++)(function(te,pe){var We=p("button",null,("0"+(te+1)).slice(-2)+" · "+pe);F.appendChild(We),A.push(We),m(We,function(){try{n.setMode("cine")}catch{}try{n.goTo(te,2.5,!0)}catch{}je()})})(Bt,v(at[Bt],"SHOT"))}catch{}}rt();var St=bt("audio","AUDIO"),Tt=p("div","tsuki-track","♫ Suzume");St.appendChild(Tt);var ot=p("div","tsuki-row"),lt=p("button","tsuki-seg","MUSIC OFF");ot.appendChild(lt),St.appendChild(ot);var Ct=p("div","tsuki-vol"),Kt=p("span",null,"VOL");try{Kt.style.fontSize="11px",Kt.style.opacity=".6"}catch{}var Et=p("input",null);try{Et.type="range",Et.min="0",Et.max="100",Et.value="80",Et.setAttribute("aria-label","music volume")}catch{}Ct.appendChild(Kt),Ct.appendChild(Et),St.appendChild(Ct);var At=p("div","tsuki-note","");if(St.appendChild(At),!r){try{lt.disabled=!0,Et.disabled=!0}catch{}At.textContent="audio offline — running silent"}m(lt,function(){if(r){var at=!S;try{var Bt=r.state?r.state():null;Bt&&typeof Bt.enabled=="boolean"&&(at=!Bt.enabled)}catch{}try{r.setEnabled(at)}catch{}S=at,je()}});try{Et.addEventListener("input",function(){if(r)try{var at=parseFloat(Et.value)/100;at>=0||(at=0),at>1&&(at=1),r.setVolume(at)}catch{}})}catch{}var Zt=p("button","tsuki-seg","+ ADD TRACK");try{Zt.title="Play your own audio file through the village radio"}catch{}ot.appendChild(Zt);var Wt=null;try{Wt=document.createElement("input"),Wt.type="file",Wt.accept="audio/*,.mp3,.m4a,.ogg,.wav,.flac",Wt.style.display="none",document.body.appendChild(Wt),Wt.addEventListener("change",function(){try{var at=Wt.files&&Wt.files[0];if(!at||!r||typeof r.loadCustom!="function")return;var Bt=URL.createObjectURL(at);if(r.loadCustom(Bt,at.name.replace(/\.[^.]+$/,""))){try{r.setEnabled(!0)}catch{}S=!0}}catch{}try{Wt.value=""}catch{}je()})}catch{Wt=null}m(Zt,function(){if(r)try{Wt&&Wt.click()}catch{}});var ie=bt("quality","QUALITY"),V=p("div","tsuki-row");ie.appendChild(V);var Rt={};h.forEach(function(at){var Bt=p("button","tsuki-seg",d[at]);V.appendChild(Bt),Rt[at]=Bt,m(Bt,function(){ht(at)})});function ht(at){b=at;try{window.dispatchEvent(new CustomEvent("tsuki-quality",{detail:at}))}catch{}try{window.__post&&typeof window.__post.setQuality=="function"&&window.__post.setQuality(u[at]||"off")}catch{}je()}var Pt=bt("about","ABOUT"),zt=p("div","tsuki-about","TSUKIMORI 月森 / THE MOON FOREST / LGCY STUDIOS / LGCY AI");Pt.appendChild(zt);var vt=p("div","tsuki-note","BUILD "+re+" · checking…");Pt.appendChild(vt);try{var Yt=null;try{Yt=new AbortController}catch{Yt=null}var qt=setTimeout(function(){try{Yt&&Yt.abort()}catch{}},8e3),Le=Yt?{signal:Yt.signal}:{};fetch("https://api.github.com/repos/krshforever/tsukimori/commits/main?per_page=1",Le).then(function(at){try{clearTimeout(qt)}catch{}return at.ok?at.json():null}).then(function(at){var Bt=at&&at.sha?String(at.sha).slice(0,7):null,te=(re.split(" ")[0]||"").toLowerCase(),pe;Bt?te&&Bt.toLowerCase()===te?pe="BUILD "+re+" · ● CURRENT":pe="BUILD "+re+" · ● UPDATE AVAILABLE ("+Bt+")":pe="BUILD "+re+" · ● OFFLINE";try{vt.textContent=pe}catch{}try{window.__updateCheck={latest:Bt,current:te,build:re}}catch{}}).catch(function(){try{clearTimeout(qt)}catch{}try{vt.textContent="BUILD "+re+" · ● OFFLINE"}catch{}try{window.__updateCheck={latest:null,current:null,build:re}}catch{}})}catch{try{vt.textContent="BUILD "+re}catch{}}var re="dev";try{re="9e0cd9b 2026-09-13"}catch{}var Ve=null;if(P)try{Ve=p("pre","tsuki-dev","dev…"),document.body.appendChild(Ve)}catch{Ve=null}function dn(at){_=!!at;try{if(_){try{var Bt=document.getElementById("caption");Bt&&(T=Bt.style.display,Bt.style.display="none")}catch{}try{s&&(E=s.style.display,s.style.display="none")}catch{}N.className="tsuki-root tsuki-anim tsuki-present";try{jt.textContent="EXIT CINEMATIC"}catch{}}else{try{var te=document.getElementById("caption");te&&(te.style.display=T||"")}catch{}try{s&&(s.style.display=E||"")}catch{}N.className="tsuki-root tsuki-anim";try{jt.textContent="ENTER CINEMATIC"}catch{}}}catch{}je()}function Aa(){w=!w;try{yt.style.display=w?"none":"",dt.textContent=w?"▸":"▾"}catch{}}m(dt,Aa);function ar(at){try{if(at&&at.target&&at.target.closest){var Bt=at.target;if(Bt.closest(".tsuki-l2")||Bt.closest("input")||Bt.closest("select")||Bt.closest("textarea"))return}}catch{}dn(!_)}try{window.addEventListener("dblclick",ar)}catch{}try{window.addEventListener("touchend",function(at){try{var Bt=Date.now();Bt-C<350?(C=0,ar(at)):C=Bt}catch{}},{passive:!0})}catch{}try{document.addEventListener("keydown",function(at){try{at&&at.key==="Escape"&&_&&dn(!1)}catch{}})}catch{}function Jr(){try{return v(g(t.state),"NIGHT")}catch{return"NIGHT"}}function lr(){try{return v(g(e.state),"clear")}catch{return"clear"}}function je(){try{var at=Jr(),Bt=lr(),te=a[at]||at,pe=c[Bt]||String(Bt).toUpperCase(),We="FREE";try{We=v(g(n.label),"FREE")||"FREE"}catch{}var Tn=0,Qn=Y().length;try{Tn=parseInt(n.idx,10),Tn>=0||(Tn=0)}catch{}try{Qn=parseInt(n.count,10)||Y().length}catch{}var di=("0"+(Tn+1)).slice(-2),Wi=("0"+Qn).slice(-2);try{X.textContent=te+" · "+pe+" · "+We}catch{}try{var Qr="";try{var ys=window.__perf?window.__perf():null;ys&&(Qr=" <"+ys.calls+"c "+ys.triangles+"t "+ys.fps+"f>")}catch{}s&&(s.textContent="TSUKIMORI 月森 — "+te+" · "+pe+" · "+We+" | SHOT "+di+"/"+Wi+Qr)}catch{}try{var Ra=Y();Z.textContent=v(Ra[Tn]||We,We),j.textContent=te+" · "+pe,it.textContent="SHOT "+di+"/"+Wi}catch{}try{for(var Ms=0;Ms<A.length;Ms++)A[Ms].className=Ms===Tn?"on":""}catch{}try{for(var Ss in W)Object.prototype.hasOwnProperty.call(W,Ss)&&(W[Ss].className="tsuki-seg"+(Ss===at?" on":""));for(var D in ft)Object.prototype.hasOwnProperty.call(ft,D)&&(ft[D].className="tsuki-seg"+(D===Bt?" on":""));for(var H in Rt)Object.prototype.hasOwnProperty.call(Rt,H)&&(Rt[H].className="tsuki-seg"+(H===b?" on":""))}catch{}try{var et=v(g(n.mode),"");xt.textContent="MODE "+(et?et.toUpperCase():"—"),_t.textContent=(R?"❚❚":"▶")+" ADV",B.textContent="AUTO "+(x?"ON":"OFF")}catch{}try{wt.time&&(wt.time.tag.textContent=te),wt.weather&&(wt.weather.tag.textContent=pe),wt.cine&&(wt.cine.tag.textContent=di+"/"+Wi),wt.quality&&(wt.quality.tag.textContent=d[b]||"")}catch{}try{if(r&&typeof r.state=="function"){var q=null;try{q=r.state()}catch{q=null}q&&(typeof q.enabled=="boolean"&&(S=q.enabled),Tt.textContent="♫ "+v(q.track,"Suzume")+(q.playing?" — PLAYING":""),lt.textContent=S?"MUSIC ON":"MUSIC OFF",lt.className="tsuki-seg"+(S?" on":""),At.textContent=q.missing?"drop audio/suzume.mp3 into public/audio/":"")}else r&&(lt.textContent=S?"MUSIC ON":"MUSIC OFF",At.textContent="")}catch{}if(P&&Ve){var K=[];try{var It="n/a",kt="n/a",Dt="n/a";try{var Ft=typeof window.__perf=="function"?window.__perf():window.__perf;Ft&&(Ft.fps!==void 0&&(It=String(Ft.fps)),Ft.calls!==void 0&&(kt=String(Ft.calls)),Ft.tris!==void 0&&(Dt=String(Ft.tris)),Ft.draws!==void 0&&kt==="n/a"&&(kt=String(Ft.draws)),Ft.triangles!==void 0&&Dt==="n/a"&&(Dt=String(Ft.triangles)))}catch{}var Xt="n/a";try{window.__post&&(typeof window.__post.quality=="string"?Xt=window.__post.quality:typeof window.__post.getQuality=="function"?Xt=String(window.__post.getQuality()):typeof window.__post.current=="string"&&(Xt=window.__post.current))}catch{}var oe="n/a",ue="n/a";try{window.__cam&&(window.__cam.pos&&window.__cam.pos.length>=3&&(oe=window.__cam.pos[0].toFixed(1)+","+window.__cam.pos[1].toFixed(1)+","+window.__cam.pos[2].toFixed(1)),window.__cam.tgt&&window.__cam.tgt.length>=3&&(ue=window.__cam.tgt[0].toFixed(1)+","+window.__cam.tgt[1].toFixed(1)+","+window.__cam.tgt[2].toFixed(1)))}catch{}K.push("FPS "+It+"  calls "+kt+"  tris "+Dt);try{var Gt=null;try{Gt=window.__updateCheck||null}catch{}var Se=Gt?Gt.latest?Gt.latest.toLowerCase()===String(Gt.current||"").toLowerCase()?"current":"BEHIND("+Gt.latest+")":"offline":"";K.push("build "+re+(Se?"  "+Se:""))}catch{try{K.push("build "+re)}catch{}}K.push("gl WebGL2  post "+Xt+"  seed "+f),K.push("cam "+oe+"  tgt "+ue),K.push(te+" · "+pe+" · "+We),Ve.textContent=K.join(`
`)}catch{}}}catch{}}try{document.body.appendChild(N)}catch{}try{yt.style.display=w?"none":"",dt.textContent=w?"▸":"▾"}catch{}Qt(M),je();var vs=null;try{vs=setInterval(je,250)}catch{}function $r(){try{vs&&clearInterval(vs)}catch{}try{window.removeEventListener("dblclick",ar)}catch{}try{N&&N.parentNode&&N.parentNode.removeChild(N)}catch{}try{Ve&&Ve.parentNode&&Ve.parentNode.removeChild(Ve)}catch{}}return{root:N,refresh:je,destroy:$r,setQuality:ht,setPresent:dn}}const _l={geo:null};function pf(){return _l.geo||(_l.geo=new Lt(1,1,1)),_l.geo}const Zu={A:[[0,0,0,4],[2,0,2,4],[0,4,2,4],[0,2,2,2]],B:[[0,0,0,4],[0,4,2,4],[0,2,2,2],[0,0,2,0],[2,4,2,2],[2,2,2,0]],C:[[2,4,0,4],[0,4,0,0],[0,0,2,0]],D:[[0,0,0,4],[0,4,2,4],[2,4,2,0],[2,0,0,0]],E:[[2,4,0,4],[0,4,0,0],[0,0,2,0],[0,2,2,2]],F:[[2,4,0,4],[0,4,0,0],[0,2,2,2]],G:[[2,4,0,4],[0,4,0,0],[0,0,2,0],[2,0,2,2],[2,2,1,2]],H:[[0,0,0,4],[2,0,2,4],[0,2,2,2]],I:[[0,4,2,4],[1,4,1,0],[0,0,2,0]],J:[[2,4,2,0],[2,0,0,0],[0,0,0,2]],K:[[0,0,0,4],[2,4,0,2],[0,2,2,0]],L:[[0,4,0,0],[0,0,2,0]],M:[[0,0,0,4],[0,4,1,2],[1,2,2,4],[2,4,2,0]],N:[[0,0,0,4],[0,4,2,0],[2,0,2,4]],O:[[0,0,0,4],[0,4,2,4],[2,4,2,0],[2,0,0,0]],P:[[0,0,0,4],[0,4,2,4],[2,4,2,2],[2,2,0,2]],Q:[[0,0,0,4],[0,4,2,4],[2,4,2,0],[2,0,0,0],[1,1,2,0]],R:[[0,0,0,4],[0,4,2,4],[2,4,2,2],[2,2,0,2],[1,2,2,0]],S:[[2,4,0,4],[0,4,0,2],[0,2,2,2],[2,2,2,0],[2,0,0,0]],T:[[0,4,2,4],[1,4,1,0]],U:[[0,4,0,0],[0,0,2,0],[2,0,2,4]],V:[[0,4,1,0],[1,0,2,4]],W:[[0,4,0,0],[0,0,1,2],[1,2,2,0],[2,0,2,4]],X:[[0,0,2,4],[0,4,2,0]],Y:[[0,4,1,2],[2,4,1,2],[1,2,1,0]],Z:[[0,4,2,4],[2,4,0,0],[0,0,2,0]],0:[[0,0,0,4],[0,4,2,4],[2,4,2,0],[2,0,0,0],[0,0,2,4]],1:[[1,4,1,0],[0,0,2,0]],2:[[0,4,2,4],[2,4,2,2],[2,2,0,2],[0,2,0,0],[0,0,2,0]],3:[[0,4,2,4],[2,4,2,0],[0,2,2,2],[0,0,2,0]],4:[[0,4,0,2],[0,2,2,2],[2,4,2,0]],5:[[2,4,0,4],[0,4,0,2],[0,2,2,2],[2,2,2,0],[2,0,0,0]],6:[[2,4,0,4],[0,4,0,0],[0,0,2,0],[0,2,2,2],[2,2,2,0]],7:[[0,4,2,4],[2,4,0,0]],8:[[0,0,0,4],[0,4,2,4],[2,4,2,0],[2,0,0,0],[0,2,2,2]],9:[[2,0,0,0],[0,0,0,4],[0,4,2,4],[2,4,2,0],[0,2,2,2]]," ":[],"•":[[1,2,1,2]],".":[[1,0,1,0]],"-":[[0,2,2,2]],"/":[[0,0,2,4]],"&":[[0,0,0,4],[0,4,2,4],[2,4,2,2],[0,2,2,0],[2,0,0,0]],"©":null,月:[[0,0,0,4],[2,0,2,4],[0,4,2,4],[0,0,2,0],[0,2.6,2,2.6],[0,1.3,2,1.3]],森:"COMPOUND_MORI"};function Fy(){const i=[],t=(e,n,s,r)=>{i.push([e,n,e,n+r]),i.push([e-s/2,n+r,e+s/2,n+r]),i.push([e-s/2,n+r*.55,e+s/2,n+r*.55]),i.push([e-s*.28,n,e+s*.28,n])};return t(1,2.2,1.7,1.8),t(.35,0,1.1,1.9),t(1.65,0,1.1,1.9),i}function zy(i){return i==="森"?Fy():i==="©"?[[.2,0,.2,4],[.2,4,1.8,4],[1.8,4,1.8,0],[1.8,0,.2,0],[.5,1.2,1.5,1.2],[.5,2.8,1.5,2.8]]:Zu[i]??Zu["-"]}function ns(i,{size:t=.22,tracking:e=.32,thickness:n=.13,depth:s=.035}={}){const r=2*(t/4)+e*t,o=t/4,a=t/4,l=[];let c=0;const h=String(i).toUpperCase();for(const d of h){if(d===" "){c+=r;continue}for(const[u,f,g,v]of zy(d)){const p=u===g&&f===v,m=c+u*o,y=f*a,w=c+g*o,_=v*a,M=w-m,b=_-y,R=Math.hypot(M,b),x=n*t;p?l.push({x:m,y,len:x*1.1,ang:0,t:x,sq:!0}):l.push({x:(m+w)/2,y:(y+_)/2,len:R+x*.9,ang:Math.atan2(b,M),t:x})}c+=r}return{strokes:l,width:Math.max(0,c-e*t),depth:s}}function Mc(i,t,{depth:e=.035}={}){const n=[];for(const d of i){const{strokes:u}=ns(d.text,d);for(const f of u)n.push({...f,ox:d.ox||0,oy:d.oy||0,oz:d.oz||0,depth:d.depth??e})}const s=pf(),r=new ye(s,t,Math.max(1,n.length)),o=new ae,a=new Kn,l=new Mn,c=new O,h=new O;return n.forEach((d,u)=>{l.set(0,0,d.ang),a.setFromEuler(l),c.set(d.ox+d.x,d.oy+d.y,d.oz),h.set(d.len,d.t,d.depth),d.sq&&h.set(d.t,d.t,d.depth*.7),o.compose(c,a,h),r.setMatrixAt(u,o)}),r.instanceMatrix.needsUpdate=!0,r.castShadow=!1,r.receiveShadow=!1,r.frustumCulled=!0,r}function mf(i){const t=(e,n=.85,s={})=>new mt({color:e,roughness:n,metalness:0,...s});return{post:i?.woodAged||i?.woodDark||i?.wood||t(3812382,.9),beam:i?.woodDark||i?.woodAged||i?.wood||t(3023640,.9),board:i?.woodNew||i?.wood||t(4864550,.85),stone:i?.stone||i?.stoneDark||i?.rock||t(9078136,.95),bronze:i?.bronze||i?.brass||i?.iron||t(9202490,.45,{metalness:.85}),glyphMain:i?.brass||t(13215850,.38,{metalness:.9}),glyphSub:i?.bronze||t(10124623,.5,{metalness:.8}),wash:new mt({color:2826520,emissive:16763274,emissiveIntensity:.55,roughness:.6})}}function Nn(i,t,e,n,s,r,o,a=0){const l=new tt(pf(),n);return l.scale.set(i,t,e),l.position.set(s,r,o),l.rotation.y=a,l.castShadow=!0,l.receiveShadow=!0,l}function gf(i,t){const e=new Zn(1,20),n=new zn({color:0,transparent:!0,opacity:.28,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),s=new tt(e,n);return s.rotation.x=-Math.PI/2,s.position.y=.03,s.scale.set(i,t,1),s.renderOrder=2,s}function Ju(i,t,e,n){const s=new Zn(1,12),r=new tt(s,new mt({color:4872755,roughness:1}));return r.rotation.x=-Math.PI/2,r.position.set(t,.035,e),r.scale.set(i,i*.8,1),r.receiveShadow=!0,r.renderOrder=1,r}function By(i,t={}){const e=mf(i),n=new Jt;n.name="tsukimori-main-sign";const s=3.4,r=2.5,o=.16;for(const R of[-1,1])n.add(Nn(.5,.28,.5,e.stone,R*(s/2),.14,0)),n.add(Nn(o,r,o,e.post,R*(s/2),.28+r/2,0)),n.add(Nn(.22,.06,.22,e.bronze,R*(s/2),.3,0));n.add(Nn(s+.5,.14,.2,e.beam,0,.28+r+.07,0)),n.add(Nn(s+.3,.1,.12,e.beam,0,.62,0));const a=s-.2,l=1.35,c=1.72,h=.02,d=Nn(a,l,.07,e.board,0,c,h);n.add(d),n.add(Nn(a+.1,.05,.1,e.beam,0,c+l/2+.03,h)),n.add(Nn(a+.1,.05,.1,e.beam,0,c-l/2-.03,h));for(const R of[-1,1])for(const x of[-1,1])n.add(Nn(.09,.09,.1,e.bronze,R*(a/2-.05),c+x*(l/2-.05),h));const u=h+.035+.075,f=R=>-R/2,g=ns("LGCY STUDIOS PRESENTS",{size:.115,tracking:.3}),v=ns("TSUKIMORI",{size:.3,tracking:.3}),p=ns("月森",{size:.3,tracking:.3}),m=ns("THE MOON FOREST",{size:.13,tracking:.3}),y=ns("BUILT WITH LGCY AI",{size:.1,tracking:.3}),w=Mc([{text:"TSUKIMORI",size:.3,tracking:.3,ox:f(v.width),oy:c+.28,oz:u},{text:"月森",size:.3,tracking:.3,ox:f(p.width),oy:c-.14,oz:u}],e.glyphMain),_=Mc([{text:"LGCY STUDIOS PRESENTS",size:.115,tracking:.3,ox:f(g.width),oy:c+.52,oz:u-.012},{text:"THE MOON FOREST",size:.13,tracking:.3,ox:f(m.width),oy:c-.44,oz:u-.012},{text:"BUILT WITH LGCY AI",size:.1,tracking:.3,ox:f(y.width),oy:c-.58,oz:u-.012}],e.glyphSub);n.add(w,_);const M=Nn(a-.2,.02,.02,e.wash,0,c+l/2-.06,h+.06);M.castShadow=!1,n.add(M);const b=new em(16767392,6,7,.55,.7,1.6);return b.position.set(0,2.6,1.6),b.target.position.set(0,c-.1,0),b.castShadow=!1,n.add(b,b.target),n.userData.signLight=b,n.userData.washMat=e.wash,n.add(gf(2.3,.8)),n.add(Ju(.3,-s/2,.32),Ju(.26,s/2,-.3)),n.position.set(...t.pos||[6.5,0,14.5]),n.rotation.y=t.ry??-.5,n}function ky(i,t={}){const e=mf(i),n=new Jt;n.name="lgcy-studio-plaque";for(const f of[-1,1])n.add(Nn(.07,.62,.07,e.post,f*.42,.31,0));const s=Nn(1.05,.52,.04,e.bronze,0,.62,.02);s.rotation.x=-.14,n.add(s);const r=.02+.02+.045,a=[{text:"LGCY STUDIOS",size:.085,tracking:.3,oy:.78},{text:"WORLD DESIGNED & BUILT WITH LGCY AI",size:.038,tracking:.28,oy:.66},{text:"PROCEDURAL ENVIRONMENT • CODE • AI",size:.038,tracking:.28,oy:.585},{text:"© 2026 LGCY STUDIOS",size:.038,tracking:.28,oy:.51}].map(f=>({...f,ox:-ns(f.text,f).width/2,oz:r})),l=Mc(a,e.glyphSub,{depth:.014});l.rotation.x=-.14,l.position.z=.005,n.add(l);const c=document.createElement("canvas");c.width=256,c.height=16;const h=c.getContext("2d");h.fillStyle="#3a2c16",h.fillRect(0,0,256,16),h.fillStyle="#d8b988",h.font="9px sans-serif",h.textAlign="center",h.fillText("tsukimori — moon forest district",128,11);const d=new En(c);d.colorSpace=ke;const u=new tt(new Te(.7,.044),new mt({map:d,roughness:.5,metalness:.6}));return u.position.set(0,.44,.045),u.rotation.x=-.14,n.add(u),n.add(gf(.8,.4)),n.position.set(...t.pos||[2.8,0,9.6]),n.rotation.y=t.ry??-.35,n}function Gy(i,t,e={}){const n=new Jt;n.name="signage";const s=By(t,{pos:e.signPos,ry:e.signRy}),r=ky(t,{pos:e.plaquePos,ry:e.plaqueRy});return n.add(s,r),i.add(n),{group:n,sign:s,plaque:r,signLight:s.userData.signLight}}function Hy(i={}){let t=i.fps&&i.fps>0?Math.floor(i.fps):30,e=0;const n=[];let s=typeof i.onShot=="function"?i.onShot:null;const r=l=>1/l,o=(l,c)=>l*(1/c),a={get frame(){return e},get fps(){return t},get t(){return o(e,t)},get dt(){return r(t)},setFps(l){return l&&l>0&&(t=Math.floor(l)),t},register(l){return typeof l!="function"?()=>{}:(n.includes(l)||n.push(l),()=>a.unregister(l))},unregister(l){const c=n.indexOf(l);return c>=0&&n.splice(c,1),n.length},clear(){n.length=0},onShot(l){s=typeof l=="function"?l:null},step(l){const c=l&&l>0?l:r(t);e+=1;const h=o(e,t);for(let d=0;d<n.length;d++)n[d](c,h,e);return{frame:e,t:h,dt:c}},renderFrame(l){e=Math.max(0,Math.floor(l));const c=r(t),h=o(e,t);for(let d=0;d<n.length;d++)n[d](c,h,e);return{frame:e,t:h,dt:c}},reset(){return e=0,{frame:e,t:0,dt:r(t)}},renderShot(l,c){return s&&s(l,Math.max(0,Math.floor(c))),{shotId:l,...a.renderFrame(c)}},renderSequence(l,c,h,d){const u=d&&d>0?Math.floor(d):t,f=Math.max(0,Math.floor(c)),g=Math.max(f,Math.floor(h)),v=[],p=[];for(let m=f;m<=g;m++)v.push(m),p.push(m*(1/u));return{shotId:l,fps:u,frames:v,times:p}}};return a}const Wo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class rr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Vy=new xa(-1,1,1,-1,0,1);class Wy extends ge{constructor(){super(),this.setAttribute("position",new ee([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ee([0,2,0,0,2,0],2))}}const Xy=new Wy;class rh{constructor(t){this._mesh=new tt(Xy,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Vy)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Yy extends rr{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof rn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Vr.clone(t.uniforms),this.material=new rn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new rh(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class $u extends rr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class qy extends rr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Ky{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new ut);this._width=n.width,this._height=n.height,e=new yn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:on}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Yy(Wo),this.copyPass.material.blending=si,this.timer=new eh}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}$u!==void 0&&(o instanceof $u?n=!0:o instanceof qy&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ut);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Zy extends rr{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Nt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const Jy={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Nt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class tr extends rr{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new ut(t.x,t.y):new ut(256,256),this.clearColor=new Nt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new yn(r,o,{type:on,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new yn(r,o,{type:on,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const u=new yn(r,o,{type:on,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}const a=Jy;this.highPassUniforms=Vr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new rn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ut(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Vr.clone(Wo.uniforms),this.blendMaterial=new rn({uniforms:this.copyUniforms,vertexShader:Wo.vertexShader,fragmentShader:Wo.fragmentShader,premultipliedAlpha:!0,blending:Qo,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Nt,this._oldClearAlpha=1,this._basic=new zn,this._fsQuad=new rh(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ut(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=tr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=tr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){const e=[],n=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(n*n))/n);const s=[],r=[];for(let o=1;o<t;o+=2){const a=e[o],l=o+1<t?e[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new rn({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new ut(.5,.5)},direction:{value:new ut(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new rn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}tr.BlurDirectionX=new ut(1,0);tr.BlurDirectionY=new ut(0,1);const No={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class $y extends rr{constructor(){super(),this.isOutputPass=!0,this.uniforms=Vr.clone(No.uniforms),this.material=new Wd({name:No.name,uniforms:this.uniforms,vertexShader:No.vertexShader,fragmentShader:No.fragmentShader}),this._fsQuad=new rh(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},xe.getTransfer(this._outputColorSpace)===Ce&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Cc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Pc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Dc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ua?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Lr?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ir?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Lc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function Qy({renderer:i,scene:t,camera:e}){let n="off",s=null,r=null,o=1,a=1;function l(){try{const u=i.getSize(new ut);o=Math.max(1,Math.round(u.x)),a=Math.max(1,Math.round(u.y))}catch{o=o||1,a=a||1}}function c(){if(s)try{s.dispose()}catch{}s=null,r=null}function h(u){if(c(),l(),u==="low"||u==="high"){s=new Ky(i),s.addPass(new Zy(t,e)),u==="high"&&(r=new tr(new ut(o,a),.18,.6,.85),s.addPass(r)),s.addPass(new $y);try{s.setSize(o,a)}catch{}}}return{get quality(){return n},setQuality(u){const f=u==="high"?"high":u==="low"?"low":"off";try{if(f===n&&(f==="off"||s))return n;if(f==="off")return c(),n="off",n;h(f),n=f}catch{try{c()}catch{}n="off"}return n},setSize(u,f){if(o=Math.max(1,Math.round(u)),a=Math.max(1,Math.round(f)),s)try{s.setSize(o,a)}catch{}},render(){if(n==="off"||!s)i.render(t,e);else try{s.render()}catch{i.render(t,e)}},dispose(){c(),n="off"}}}const jy=20260912,Qu=16;function Sr(i,t,e){let n=Math.imul(i,374761393)+Math.imul(t,668265263)+Math.imul(e,1442695041)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}function tM(i,t){return Math.floor(Sr(i,t,jy)*4294967296)}function Sc(i,t,e){let n=(tM(i,t)^Math.imul(e|0,2246822519))>>>0||1;return function(){n|=0,n=n+1831565813|0;let s=Math.imul(n^n>>>15,1|n);return s=s+Math.imul(s^s>>>7,61|s)^s,((s^s>>>14)>>>0)/4294967296}}function eM(i,t,e){const n=Math.floor(i),s=Math.floor(t),r=i-n,o=t-s,a=r*r*(3-2*r),l=o*o*(3-2*o),c=Sr(n,s,e),h=Sr(n+1,s,e),d=Sr(n,s+1,e),u=Sr(n+1,s+1,e);return c+(h-c)*a+(d-c)*l+(c-h-d+u)*a*l}function oh(i,t,e,n=4){let s=0,r=.5,o=1,a=0;for(let l=0;l<n;l++)s+=r*eM(i*o,t*o,e+l*101),a+=r,r*=.5,o*=2.03;return s/a}function _f(i,t){const e=Math.max(Math.abs(i)-24,0),n=Math.max(Math.abs(t-4)-22,0),s=Math.hypot(e,n),r=Math.min(Math.max(s/10,0),1);return r*r*(3-2*r)}const xf=[{cx:-8,cz:48.5,w:14,d:9,y:null},{cx:9,cz:50.5,w:12,d:8,y:null}];function vf(i){const t=(oh(i.cx/42+7.3,i.cz/42-2.1,501,4)-.5)*11+Math.max(0,Math.hypot(i.cx,i.cz)-85)*.35;return Math.round(t*2)/2}function nM(i,t){let e=null;for(const n of xf){const s=Math.max(Math.abs(i-n.cx)-n.w/2,0),r=Math.max(Math.abs(t-n.cz)-n.d/2,0),o=Math.hypot(s,r),a=Math.min(Math.max(o/6,0),1),l=1-a*a*(3-2*a);l>0&&(!e||l>e.m)&&(e={m:l,y:vf(n)})}return e}function iM(){return xf.map(i=>({...i,y:vf(i)}))}function ju(i,t,e){const n=Math.min(Math.max((e-i)/(t-i),0),1);return n*n*(3-2*n)}function Re(i,t){const e=_f(i,t);if(e<=0)return 0;const n=(oh(i/42+7.3,t/42-2.1,501,4)-.5)*11,s=Math.hypot(i,t),r=Math.max(0,s-85)*.35;let o=(n+r)*e;const a=34+8*Math.sin(i*.045),l=Math.abs(t-a),c=-1.6+2.2*ju(0,8,l),h=ju(7,14,l);let d=c*(1-h)+o*h;const u=nM(i,t);return u&&u.m>0&&(d=u.y*u.m+d*(1-u.m)),d}function Wr(i,t){const n=Re(i+.6,t)-Re(i-.6,t),s=Re(i,t+.6)-Re(i,t-.6);return Math.hypot(n,s)/(2*.6)}function sM(i,t,e,n=.45){const s=.65+.35*Math.sin(e*.6)*Math.sin(e*.23+1.7),r=Re(i,t),o=Re(i+1.5,t),a=Re(i,t+1.5),l=Math.min(1.5,Math.abs(o-r)+Math.abs(a-r)),h=1+.35*(1-Math.max(0,Math.min(1,(r+2)/6)))+l*.45;return n*2*s*h}function yf(i,t){const e=Re(i,t),n=Math.min(Math.max(1-e/9,0),1),s=oh(i/25-3.7,t/25+9.2,777,3),r=34+8*Math.sin(i*.045),o=Math.max(0,1-Math.abs(t-r)/12);return Math.min(Math.max(n*.45+s*.35+o*.45,0),1)}function ah(i,t){if(_f(i,t)<=0)return"village";const e=Re(i,t),n=yf(i,t),s=Wr(i,t),r=34+8*Math.sin(i*.045);return Math.abs(t-r)<5?"riverbank":e>9?"mountain":s>.45?"slope":n>.55?e<1.2?"field":"bamboo":n>.42?"maple":n>.25?"grassland":"outskirts"}function Bi(i,t){return[Math.floor(i/Qu),Math.floor(t/Qu)]}function ds(i,t,e,n){return`${i}_${t>=0?"e"+t:"w"+-t}_${e>=0?"s"+e:"n"+-e}_${String(n).padStart(3,"0")}`}const Xo=new Map;function rM(i,t){return i+","+t}function fs(i,t,e){const n=rM(i,t);return Xo.has(n)||Xo.set(n,[]),Xo.get(n).push(...e),e.length}function Mf(){let i=0,t=0;for(const e of Xo.values())t++,i+=e.length;return{objects:i,chunks:t}}const Ui=1,oM=.45,xl=0;function aM(i){const t=Math.sin(i*127.1)*43758.5453;return t-Math.floor(t)}function lM({lampLights:i,lampGlows:t,houses:e}={}){const n=i||[],s=t||[],r=Math.min(n.length,s.length),o=[Ui,Ui,Ui];let a=1;function l(h,d,u,f){const g=f>.05;f>=.85?(o[0]=Ui,o[1]=Ui,o[2]=Ui):g?(o[0]=Ui,o[1]=oM,o[2]=Ui):(o[0]=xl,o[1]=xl,o[2]=xl);const v=Math.floor(d*2);if(a=u==="rainy"&&aM(v)<.12?.25:1,!!g)for(let p=0;p<r;p++){const m=o[p%3]*a;n[p].intensity*=m;const y=s[p];y&&y.material&&typeof y.material.emissiveIntensity=="number"?y.material.emissiveIntensity*=m:y&&typeof y.emissiveIntensity=="number"&&(y.emissiveIntensity*=m)}}function c(){return{circuits:[o[0],o[1],o[2]],dip:a}}return{update:l,state:c}}function td(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function cM(){const i=document.createElement("canvas");i.width=64,i.height=128;const t=i.getContext("2d"),e=t.createLinearGradient(0,128,0,0);e.addColorStop(0,"rgba(255,90,20,0)"),e.addColorStop(.35,"rgba(255,120,30,0.85)"),e.addColorStop(.65,"rgba(255,190,80,0.95)"),e.addColorStop(.9,"rgba(255,240,200,1)"),e.addColorStop(1,"rgba(255,255,240,0)"),t.fillStyle=e,t.fillRect(0,0,64,128),t.globalCompositeOperation="destination-in";const n=t.createRadialGradient(32,70,6,32,70,62);n.addColorStop(0,"rgba(0,0,0,1)"),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,64,128);const s=new En(i);return s.colorSpace=ke,s}function hM(){const i=document.createElement("canvas");i.width=64,i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,30);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.5,"rgba(255,255,255,0.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);const n=new En(i);return n.colorSpace=ke,n}const es=60,ed=2.2,vl=1.2;function uM(i,t,e,n){const s=typeof n=="number"&&isFinite(n)?n:0,r=new Jt;r.position.set(t,s,e);const o=i&&i.stone||new mt({color:9080210,roughness:.95}),a=i&&i.wood||new mt({color:5913892,roughness:.9}),l=new ye(new Lt(.28,.2,.22),o,8),c=new ne,h=td(61861);for(let T=0;T<8;T++){const C=T/8*Math.PI*2+(h()-.5)*.2;c.position.set(Math.cos(C)*.55,.1,Math.sin(C)*.55),c.rotation.set(0,-C+(h()-.5)*.4,0),c.scale.setScalar(.9+h()*.25),c.updateMatrix(),l.setMatrixAt(T,c.matrix)}l.instanceMatrix.needsUpdate=!0,l.receiveShadow=!0,r.add(l);const d=new ye(new Lt(.12,.12,.9),a,4);for(let T=0;T<4;T++){const C=T/4*Math.PI*2+.4;c.position.set(Math.cos(C)*.18,.32,Math.sin(C)*.18),c.rotation.set(.62,C,0),c.scale.setScalar(1),c.updateMatrix(),d.setMatrixAt(T,c.matrix)}d.instanceMatrix.needsUpdate=!0,r.add(d);const u=cM(),f=new zn({map:u,transparent:!0,blending:Qo,depthWrite:!1,side:Oe,fog:!1}),g=new Te(.7,.9),v=new tt(g,f);v.position.y=.62;const p=new tt(g,f);p.position.y=.62,p.rotation.y=Math.PI/2,r.add(v,p);const m=new Float32Array(es*3),y=new Float32Array(es),w=new Float32Array(es),_=new Float32Array(es*2),M=td(24301);for(let T=0;T<es;T++)y[T]=T/es*(ed/vl),w[T]=M()*Math.PI*2,_[T*2]=(M()-.5)*.3,_[T*2+1]=(M()-.5)*.3;const b=new ge;b.setAttribute("position",new Me(m,3));const R=new os({map:hM(),size:.55,transparent:!0,opacity:.32,depthWrite:!1,sizeAttenuation:!0,color:10133670}),x=new Ks(b,R);x.frustumCulled=!1,r.add(x);const S=new th(16747068,8,9,2);S.position.set(0,.85,0),S.castShadow=!1,r.add(S);function E(T,C,P){const L=typeof P=="number"&&isFinite(P)?P:0,I=1+.18*Math.sin(T*11)+.12*Math.sin(T*23+1.3),N=1+.18*Math.sin(T*12.3+2.1)+.12*Math.sin(T*27+.5);v.scale.set(I,1+.25*Math.sin(T*13+.7),1),p.scale.set(N,1+.25*Math.sin(T*14+2),1);for(let z=0;z<es;z++){let G=y[z]+C;const U=ed/vl;G>U&&(G-=U),y[z]=G;const k=.7+G*vl,X=L*G*.8;m[z*3]=_[z*2]+X+Math.sin(G*2+w[z])*.1,m[z*3+1]=k,m[z*3+2]=_[z*2+1]+Math.cos(G*1.7+w[z])*.1}b.attributes.position.needsUpdate=!0,S.intensity=8+2*Math.sin(T*11+Math.sin(T*23)*1.7)}return{group:r,update:E}}const yl=300,dM=3;function fM(i,t,e,n,s){const r=i==="village";switch(i){case"village":s.setRGB(.36,.32,.25);break;case"riverbank":s.setRGB(.52,.48,.38);break;case"mountain":s.setRGB(.42,.42,.44);break;case"slope":s.setRGB(.4,.36,.28);break;case"field":s.setRGB(.45,.48,.28);break;case"bamboo":s.setRGB(.3,.42,.24);break;case"maple":s.setRGB(.38,.36,.24);break;case"grassland":s.setRGB(.42,.46,.28);break;default:s.setRGB(.38,.36,.28)}const o=1-t*.25;return s.multiplyScalar(o),e>7&&s.lerp(nd,Math.min((e-7)/8,.7)),r||(n>.5&&s.lerp(nd,Math.min((n-.5)*1.8,.6)),t>.6&&n<.3&&s.lerp(pM,Math.min((t-.6)*2.2,.5)),t>.75&&n<.15&&s.lerp(mM,Math.min((t-.75)*2.4,.6)),(i==="maple"||i==="bamboo")&&s.lerp(gM,.45)),s}const nd=new Nt(.5,.5,.52),pM=new Nt(.32,.42,.22),mM=new Nt(.23,.19,.15),gM=new Nt(.36,.28,.18),_M=new Nt(.47,.43,.38),xM=new Nt(.3,.27,.22);function vM(i,t){let e=Math.imul(Math.round(i*13.7),374761393)+Math.imul(Math.round(t*13.7),668265263)|0;return e=Math.imul(e^e>>>13,1274126177),e^=e>>>16,(e>>>0)/4294967296}function yM(){const i=new Jt;i.name="terrain";const t=Math.floor(yl/dM),e=new Te(yl,yl,t,t);e.rotateX(-Math.PI/2);const n=e.attributes.position,s=new Float32Array(n.count*3),r=new Nt;for(let l=0;l<n.count;l++){const c=n.getX(l),h=n.getZ(l),d=Re(c,h);n.setY(l,d-.05);const u=yf(c,h),f=Wr(c,h);fM(ah(c,h),u,d,f,r);const g=vM(c,h);r.offsetHSL((g-.5)*.02,(g-.5)*.05,(g-.5)*.09);const v=f;v>.35&&r.lerp(_M,Math.min((v-.35)*1.6,.55)),v>.2&&u>.55&&r.lerp(xM,Math.min((u-.55)*1.8,.5)*Math.min((v-.2)*3,1)),s[l*3]=r.r,s[l*3+1]=r.g,s[l*3+2]=r.b}e.setAttribute("color",new Me(s,3)),e.computeVertexNormals();const o=new mt({vertexColors:!0,roughness:.96,metalness:0});try{const l="vendor/ambientcg/Ground037/Ground037_1K-JPG_Color.jpg",c="vendor/commons/needle_litter/Forest_floor_with_loblolly_pine_needles.jpg",h=new Image,d=new Image;let u=0;const f=()=>{if(!(++u<2))try{const p=document.createElement("canvas");p.width=p.height=1024;const m=p.getContext("2d");m.drawImage(h,0,0,1024,1024),m.save(),m.translate(1024/2,1024/2),m.rotate(37*Math.PI/180),m.globalAlpha=.45;const y=1024*1.5;m.drawImage(d,-y/2,-y/2,y,y),m.restore();let w=918273;const _=()=>(w=w*1103515245+12345&2147483647)/2147483647;m.globalAlpha=.08;for(let b=0;b<2600;b++){const R=_()<.5?0:255;m.fillStyle=`rgb(${R},${R},${R})`,m.fillRect(_()*1024,_()*1024,1+_()*2,1+_()*2)}m.globalAlpha=1;const M=new En(p);M.colorSpace=ke,M.wrapS=M.wrapT=On,M.repeat.set(75,75),M.anisotropy=4,M.needsUpdate=!0,o.map=M,o.needsUpdate=!0}catch{}},g=()=>{};h.onload=f,h.onerror=g,h.src=l,d.onload=f,d.onerror=g,d.src=c}catch{}try{const l=new ga,c=(d,u)=>(d.colorSpace=u?ke:Un,d.wrapS=d.wrapT=On,d.repeat.set(90,90),d.anisotropy=4,d.needsUpdate=!0,d),h=()=>{};l.load("vendor/ambientcg/Ground037/Ground037_1K-JPG_NormalGL.jpg",d=>{o.normalMap=c(d,!1),o.normalScale.setScalar(.6),o.needsUpdate=!0},void 0,h),l.load("vendor/ambientcg/Ground037/Ground037_1K-JPG_Roughness.jpg",d=>{o.roughnessMap=c(d,!1),o.needsUpdate=!0},void 0,h)}catch{}const a=new tt(e,o);return a.receiveShadow=!0,a.frustumCulled=!0,i.add(a),{group:i,mesh:a}}function MM(){const i=new Jt;i.name="river";const t=60,e=8,n=[],s=[];for(let l=0;l<=t;l++){const c=-150+300*l/t,h=34+8*Math.sin(c*.045);if(n.push(c,-.8,h-e/2,c,-.8,h+e/2),l<t){const d=l*2;s.push(d,d+1,d+2,d+1,d+3,d+2)}}const r=new ge;r.setAttribute("position",new Me(new Float32Array(n),3)),r.setIndex(s),r.computeVertexNormals();const o=new mt({color:3031624,roughness:.12,metalness:.75,envMapIntensity:1,transparent:!0,opacity:.94}),a=new tt(r,o);return a.receiveShadow=!0,i.add(a),{group:i,mesh:a,waterMat:o}}const SM=1374772973;function id(i){return i=i^SM|0,i=Math.imul(i^i>>>16,73244475),i=Math.imul(i^i>>>16,73244475),i=(i^i>>>16)>>>0,i/4294967296}function wM(i){const t=Math.floor(i),e=i-t,n=id(t),s=id(t+1),r=e*e*(3-2*e);return n+(s-n)*r}function bM(i){let t=0,e=.55,n=1,s=0;for(let r=0;r<3;r++){const o=wM(i*n);t+=(1-Math.abs(2*o-1))*e,s+=e,e*=.5,n*=2.13}return t/s}const EM=128,TM=[{r:260,hMax:42,tint:.55,yBase:-8},{r:312,hMax:58,tint:.72,yBase:-6},{r:368,hMax:74,tint:.88,yBase:-4}],AM=[{ang:0,depth:.75,width:.09},{ang:Math.PI,depth:.55,width:.07}];function RM(i){let t=1;for(const e of AM){let n=Math.abs(i-e.ang)%(Math.PI*2);n>Math.PI&&(n=Math.PI*2-n),t*=1-e.depth*Math.exp(-(n*n)/(e.width*e.width))}return Math.max(.08,t)}function CM(){const i=EM,t=TM,e=i+1,n=[],s=[],r=[],o=new Nt(ih),a=o.clone().multiplyScalar(.42),l=new Nt;t.forEach((u,f)=>{const g=f*e*2;for(let v=0;v<=i;v++){const p=v/i*Math.PI*2,y=(6+bM(p*3.1+f*7.7)*(u.hMax-6))*RM(p),w=Math.cos(p)*u.r,_=Math.sin(p)*u.r;if(n.push(w,u.yBase,_),n.push(w,u.yBase+y,_),l.copy(a).lerp(o,u.tint),s.push(l.r,l.g,l.b),l.copy(a).lerp(o,Math.min(1,u.tint+y/u.hMax*.18)),s.push(l.r,l.g,l.b),v<i){const M=g+v*2;r.push(M,M+1,M+2,M+1,M+3,M+2)}}});const c=new ge;c.setAttribute("position",new ee(n,3)),c.setAttribute("color",new ee(s,3)),c.setIndex(r),c.computeBoundingSphere();const h=new zn({vertexColors:!0,fog:!0}),d=new tt(c,h);return d.castShadow=!1,d.receiveShadow=!1,d.frustumCulled=!1,d.renderOrder=1,d.name="farRidgeRing",d}function PM(i,t){let e=(Math.imul(i+1,2654435761)^Math.imul(t,40503))>>>0;return e^=e>>>15,e=Math.imul(e,2246822519),e^=e>>>13,(e>>>0)/4294967296}const DM=[{id:"r1",kind:"road",width:2.5,pts:[[0,24],[1,29],[2,32],[2,38],[1,42],[-4,41]]},{id:"r4",kind:"trail",width:1.2,pts:[[-4,41],[-12,40],[-20,38],[-26,40],[-31,44]]},{id:"r2",kind:"trail",width:1.2,pts:[[-24,10],[-36,2],[-48,-12],[-52,-30],[-44,-46]]},{id:"r3",kind:"trail",width:1.2,pts:[[24,5],[38,12],[52,26],[62,44]]}];function LM(i,t=2){const e=[];for(let n=0;n<i.length-1;n++){const[s,r]=i[n],[o,a]=i[n+1],l=Math.hypot(o-s,a-r),c=Math.max(1,Math.round(l/t));for(let h=0;h<c;h++)e.push([s+(o-s)*h/c,r+(a-r)*h/c])}return e.push(i[i.length-1].slice()),e}const Sf=DM.map(i=>({...i,path:LM(i.pts)}));function wc(i,t){let e=1e9;for(const n of Sf)for(const[s,r]of n.path){const o=Math.hypot(i-s,t-r);o<e&&(e=o)}return e}function IM(i){const t=new Jt;t.name="roads";const e=new mt({color:7232066,roughness:.98}),n=new mt({color:6641207,roughness:1});let s=0;for(const r of Sf){const o=r.width/2,a=[],l=[];r.path.forEach(([f,g],v)=>{const p=r.path[Math.min(v+1,r.path.length-1)],m=r.path[Math.max(v-1,0)];let y=p[0]-m[0],w=p[1]-m[1];const _=Math.hypot(y,w)||1;y/=_,w/=_;const M=-w,b=y,R=(PM(v,7)-.5)*.3,x=o+R,S=Re(f+M*x,g+b*x)+.07,E=Re(f-M*x,g-b*x)+.07,T=Re(f,g)+.07;if(a.push(f+M*x,S,g+b*x,f,T,g,f-M*x,E,g-b*x),v<r.path.length-1){const C=v*3;l.push(C,C+3,C+1,C+1,C+3,C+4,C+1,C+4,C+2,C+2,C+4,C+5)}});const c=new ge;c.setAttribute("position",new Me(new Float32Array(a),3)),c.setIndex(l),c.computeVertexNormals();const h=new tt(c,r.kind==="road"?e:n);h.receiveShadow=!0,t.add(h);const[d,u]=Bi(r.path[0][0],r.path[0][1]);fs(d,u,[{id:ds("road",d,u,s++),type:"road",x:r.path[0][0],z:r.path[0][1],y:0,data:{road:r.id}}])}{const o=34+8*Math.sin(.09),a=Re(2,o-9),l=Re(2,o+9),c=Math.max(a,l)+.25,h=new mt({color:5916208,roughness:.85}),d=new mt({color:4141602,roughness:.85}),u=new tt(new Lt(2.2,.14,20),h);u.position.set(2,c,o),u.castShadow=!0,u.receiveShadow=!0,t.add(u);for(const v of[-1,1]){const p=new tt(new Lt(.09,.7,20),d);p.position.set(2+v*1,c+.42,o),p.castShadow=!0,t.add(p);for(const m of[-8,-4,0,4,8]){const y=new tt(new Lt(.12,1.1,.12),d);y.position.set(2+v*1,c-.1,o+m),t.add(y)}}const[f,g]=Bi(2,o);fs(f,g,[{id:ds("bridge",f,g,0),type:"bridge",x:2,z:o,y:c,data:{}}]);for(const v of[-1,1])for(const p of[-6,6]){const m=new tt(new Lt(.16,4.2,.16),d);m.position.set(2+v*.9,c-1.9,o+p),t.add(m)}}return{group:t}}const NM=Math.PI*(3-Math.sqrt(5));function UM(i){let t=i>>>0||1;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function OM(i,t){const e=Math.abs(i.y)>.9?new O(1,0,0):new O(0,1,0),n=new O().crossVectors(i,e).normalize();return t&&t()<.5&&n.negate(),n}function FM(i={}){const{seed:t=1,maxDepth:e=3,children:n=[4,6,5],length:s=5.2,radius:r=.34,radialSegments:o=5,sectionLength:a=1.6,minLength:l=.35,minRadius:c=.02,taper:h=.62,lengthDecay:d=.62,spread:u=.55,flare:f=.9,flareSharp:g=6,droop:v=.08,upPull:p=.12,gnarl:m=.08,leanX:y=0,leanZ:w=0,heightHint:_=9}=i,M=UM(t),b=[],R=[],x=[],S=[],E=[],T=[];let C=1e-4,P=0;const L=new O(0,1,0),I=new O(0,-1,0),N=new O,z=new O,G=new O,U=new O,k=new O;function X(bt,Qt,Q,nt,W,st,J,ft){const gt=Math.max(1,Math.round(Q/a));N.copy(Qt).normalize(),G.copy(OM(N,M)),U.crossVectors(N,G).normalize(),z.copy(bt);const Z=P;for(let j=0;j<=gt;j++){const it=j/gt;N.lerp(I,v*.12).normalize(),N.lerp(L,p*.12).normalize(),G.addScaledVector(N,-G.dot(N)).normalize(),U.crossVectors(N,G).normalize(),j>0&&(z.addScaledVector(N,Q/gt),z.addScaledVector(G,(M()-.5)*m*.35),z.addScaledVector(U,(M()-.5)*m*.35)),z.y>C&&(C=z.y);let ct=nt+(W-nt)*it;st===0&&(ct*=1+f*Math.exp(-it*g)),ct=Math.max(ct,c*.6);const pt=J+(ft-J)*it,_t=Math.min(1,Math.max(0,z.y/_));for(let Mt=0;Mt<=o;Mt++){const xt=Mt/o,Ut=xt*Math.PI*2,B=Math.cos(Ut),jt=Math.sin(Ut);k.set(z.x+(G.x*B+U.x*jt)*ct,z.y+(G.y*B+U.y*jt)*ct,z.z+(G.z*B+U.z*jt)*ct),b.push(k.x,k.y,k.z),R.push(G.x*B+U.x*jt,G.y*B+U.y*jt,G.z*B+U.z*jt),x.push(xt,_t),S.push(pt),P++}}for(let j=0;j<gt;j++)for(let it=0;it<o;it++){const ct=Z+j*(o+1)+it,pt=ct+o+1;E.push(ct,pt,ct+1,ct+1,pt,pt+1)}return{endPos:z.clone(),endDir:N.clone()}}function dt(bt,Qt,Q,nt,W){const st=W/(e+1),J=(W+1)/(e+1),ft=Math.max(c,nt*h),gt=X(bt,Qt,Q,nt,ft,W,st,J);if(W>=e){T.push(gt.endPos.clone());return}const Z=n[W]||0;if(Z<=0){T.push(gt.endPos.clone());return}const j=Math.max(c,ft/Math.sqrt(Z)*1.02);for(let it=0;it<Z;it++){const ct=it*NM+M()*.6,pt=it===0,_t=pt?u*.32:u*(.8+M()*.7),Mt=new O(Math.cos(ct),0,Math.sin(ct)),xt=gt.endDir.clone().applyAxisAngle(Mt,_t).normalize();xt.lerp(L,p*.35).normalize();const Ut=Q*d*(.85+M()*.3);if(Ut<l)continue;const B=j*(pt?1.12:.9+M()*.2);B<c||dt(gt.endPos,xt,Ut,B,W+1)}}const yt=new O(y,1,w).normalize();dt(new O(0,0,0),yt,s,r,0);const wt=new ge;return wt.setAttribute("position",new ee(b,3)),wt.setAttribute("normal",new ee(R,3)),wt.setAttribute("uv",new ee(x,2)),wt.setAttribute("aWind",new ee(S,1)),wt.setIndex(E),{geometry:wt,tips:T,height:C}}const zM={sugi:{maxDepth:3,children:[4,5,4],length:6.4,radius:.36,lengthDecay:.58,spread:.42,taper:.6,droop:.04,upPull:.22,gnarl:.04,heightHint:11},keyaki:{maxDepth:3,children:[4,6,5],length:3.6,radius:.42,lengthDecay:.66,spread:.72,taper:.62,droop:.1,upPull:.1,gnarl:.1,heightHint:8},momiji:{maxDepth:3,children:[4,5,5],length:3.2,radius:.3,lengthDecay:.64,spread:.95,taper:.6,droop:.14,upPull:.06,gnarl:.07,heightHint:7},matsu:{maxDepth:3,children:[3,5,4],length:3.8,radius:.38,lengthDecay:.62,spread:.68,taper:.58,droop:.06,upPull:.16,gnarl:.22,leanX:.28,leanZ:.1,heightHint:7},sakura:{maxDepth:3,children:[4,6,5],length:3.4,radius:.33,lengthDecay:.68,spread:.78,taper:.62,droop:.12,upPull:.14,gnarl:.09,heightHint:8}};function Vi(i){let t=0,e=0;i.forEach(h=>{t+=h.attributes.position.count,e+=h.index.count});const n=new Float32Array(t*3),s=new Float32Array(t*3),r=new Float32Array(t*2),o=new Uint16Array(e);let a=0,l=0;i.forEach(h=>{const d=h.attributes.position,u=h.attributes.normal,f=h.attributes.uv;n.set(d.array,a*3),s.set(u.array,a*3),r.set(f.array,a*2);const g=h.index.array;for(let v=0;v<g.length;v++)o[l+v]=g[v]+a;a+=d.count,l+=g.length});const c=new ge;return c.setAttribute("position",new Me(n,3)),c.setAttribute("normal",new Me(s,3)),c.setAttribute("uv",new Me(r,2)),c.setIndex(new Me(o,1)),c}function BM(i,t,e,n=808){const s=new Jt,r=Ti(n),o=[],a=[],l=9;for(let d=0;d<l;d++){const u=t+(r()-.5)*1.6,f=e+(r()-.5)*1.6,g=3.4+r()*1.8,v=.03+r()*.07,p=r()*Math.PI*2,m=new Jt,y=.5,w=.055;let _=0;for(;_<g;){const M=Math.min(y,g-_),b=new tt(new me(w*.92,w,M,8),i.bamboo);b.position.y=_+M/2,b.castShadow=!0,m.add(b);const R=new tt(new me(w*1.18,w*1.18,.035,8),i.bamboo);if(R.position.y=_+M,m.add(R),_>g*.35){const x=3+Math.floor(r()*3);for(let S=0;S<x;S++)a.push({x:u,y:_+M,z:f,top:_/g,seed:r()*10})}_+=M}m.position.set(u,0,f),m.rotation.set(Math.cos(p)*v,0,Math.sin(p)*v),m.userData.phase=r()*6.28,m.userData.baseRX=m.rotation.x,m.userData.baseRZ=m.rotation.z,o.push(m),s.add(m)}{const d=new Te(.14,.62,1,2),u=d.attributes.position;for(let p=0;p<u.count;p++){const y=(u.getY(p)+.31)/.62;u.setX(p,u.getX(p)*(1-y*.85)),u.setZ(p,-Math.sin(y*Math.PI)*.06)}d.computeVertexNormals();const f=5,g=new ye(d,i.bambooLeaf,a.length*f),v=[];a.forEach(p=>{for(let m=0;m<f;m++){const y=m/f*Math.PI*2+p.seed;v.push({p:[p.x+Math.cos(y)*.25,p.y+.05,p.z+Math.sin(y)*.25],rx:.9+r()*.5,ry:y,rz:.2,s:.8+r()*.5})}}),Si(g,v),g.castShadow=!1,s.add(g)}const c=Ma(3.2,3.2,.5);c.position.set(t,.035,e),s.add(c);function h(d){for(const u of o)u.rotation.x=u.userData.baseRX+Math.sin(d*.9+u.userData.phase)*.02,u.rotation.z=u.userData.baseRZ+Math.cos(d*.7+u.userData.phase)*.02}return{group:s,update:h}}function kM(i,t,e,n=1555){const s=new Jt,r=Ti(n),o=[],a=new O(0,1,0);function l(m,y,w,_,M){const b=new me(_*.62,_,w,7),R=new tt(b,i.trunk),x=m.clone().addScaledVector(y,w/2);R.position.copy(x),R.quaternion.setFromUnitVectors(a,y.clone().normalize()),R.castShadow=R.receiveShadow=!0,s.add(R);const S=m.clone().addScaledVector(y,w);if(M<=0||w<.35){o.push(S);return}o.push(S.clone().lerp(m,.4));const E=M>=3?3:2+(r()<.5?1:0);for(let T=0;T<E;T++){const C=y.clone();C.x+=(r()-.5)*1.1,C.z+=(r()-.5)*1.1,C.y+=r()*.45-.08,C.normalize(),l(S,C,w*(.55+r()*.15),_*.58,M-1)}}l(new O(0,0,0),new O(.08,1,.05),1.5,.22,4);function c(m){const y=new qr,w=7;for(let M=0;M<=20;M++){const b=M/20*Math.PI*2,R=Math.pow(Math.abs(Math.sin(b*w/2)),.7),x=m*(.35+.65*R),S=Math.cos(b)*x,E=Math.sin(b)*x;M===0?y.moveTo(S,E):y.lineTo(S,E)}return new ma(y)}const h=Vi([c(.17),c(.17).rotateY(Math.PI/2)]),d=340,u=new ye(h,i.mapleLeaf,d),f=[],g=new Nt;for(let m=0;m<d;m++){const y=o[Math.floor(r()*o.length)],w=y.x+(r()-.5)*1.1,_=y.y+(r()-.5)*.9,M=y.z+(r()-.5)*1.1;f.push({p:[w,_,M],rx:r()*6.3,ry:r()*6.3,rz:r()*6.3,s:.75+r()*.7});const b=Ze.clamp((_-1.2)/2.2,0,1),R=r();Yo(m,77)<.14?g.setHex(5926960):R<b*.75?g.setHex(12728868):R<b*.75+.22?g.setHex(14711592):g.setHex(7178812),g.offsetHSL((Yo(m,11)-.5)*.08,0,(Yo(m,33)-.5)*.12),u.setColorAt(m,g)}Si(u,f),u.instanceColor.needsUpdate=!0,u.castShadow=!1,u.receiveShadow=!1,s.add(u),s.position.set(t,0,e);const v=Ma(3.4,3.4,.5);v.position.y=.035,s.add(v);function p(m){s.rotation.z=Math.sin(m*.6)*.004,s.rotation.x=Math.cos(m*.45)*.003}return{group:s,update:p}}function wf(i,t=1,e=1,n=.6,s=0,r=0){const o=Fn(t*1e3+7),a=kM(i,0,0,t*7919+101),l=a.group||a;l.scale.setScalar(e*(.9+o()*.25));const c=new Nt(4880949).lerp(new Nt(12729374),n);return l.traverse(h=>{h.isMesh&&h.material?.color&&h.geometry?.type!=="CylinderGeometry"&&(h.material=h.material.clone(),h.material.color.copy(c).offsetHSL((o()-.5)*.03,0,(o()-.5)*.06))}),l.rotation.y=o()*6.28,l.position.set(s,0,r),l.userData.tick=a.update||null,l.userData.sway={amp:.02+o()*.02,freq:.8+o()*.6,ph:o()*6.28},l}function bf(i,t=1,e=0,n=0){const s=Fn(t*500+3),r=BM(i,0,0,t*4153+7),o=r.group||r;return o.rotation.y=s()*6.28,o.scale.setScalar(.85+s()*.4),o.position.set(e,0,n),o.userData.tick=r.update||null,o.userData.sway={amp:.015+s()*.02,freq:1.1+s()*.7,ph:s()*6.28},o}function Yo(i,t){let e=(Math.imul(i+1,2654435761)^Math.imul(t,40503))>>>0;return e^=e>>>15,e=Math.imul(e,2246822519),e^=e>>>13,(e>>>0)/4294967296}function GM(){const i=document.createElement("canvas");i.width=64,i.height=64;const t=i.getContext("2d");t.fillStyle="#000",t.fillRect(0,0,64,64),t.fillStyle="#fff";for(const[n,s,r]of[[14,9,-6],[30,11,0],[46,8,7]])t.beginPath(),t.moveTo(n-s/2,64),t.quadraticCurveTo(n-s/2+r,30,n+r,4+r*.2),t.quadraticCurveTo(n+s/2+r,30,n+s/2,64),t.closePath(),t.fill();return new En(i)}function lh(i=1,t=.5){const e=Fn(i*77+1),n=new Jn(t,2),s=n.attributes.position;for(let a=0;a<s.count;a++){const l=1+(e()-.5)*.35;s.setXYZ(a,s.getX(a)*l,s.getY(a)*l*.72,s.getZ(a)*l)}n.computeVertexNormals();const r=new tt(n,new mt({color:new Nt(3759148).offsetHSL(0,0,(e()-.5)*.05),roughness:1})),o=.72+e()*.63;return r.scale.set(o,o*(.85+e()*.4),o),r.rotation.y=e()*Math.PI*2,r.castShadow=!0,r.userData.sway={amp:.008,freq:1.4,ph:e()*6.28},r}function ch(i=1,t=60,e=[6,3]){const n=Fn(i*31+5),s=new Te(.5,.35);s.translate(0,.17,0);const r=HM([s,s.clone().rotateY(Math.PI/2)]),o=new mt({color:6058040,roughness:1,side:Oe,alphaTest:.4,alphaMap:GM(),alphaToCoverage:!0}),a=new ye(r,o,t),l=new ne;for(let c=0;c<t;c++)l.position.set((n()-.5)*e[0],0,(n()-.5)*e[1]),l.rotation.y=n()*3.14,l.scale.setScalar(.7+n()*.7),(c+i%4+4)%4===0&&(l.scale.y*=1.9),l.updateMatrix(),a.setMatrixAt(c,l.matrix);return a.castShadow=!1,a.receiveShadow=!0,a}function HM(i){return Vi(i)}function Ml(i=1,t=2.2,e=2,n=40){const s=Fn(i*13+9),r=new Te(.12,.12),o=new mt({color:4154928,roughness:1,side:Oe}),a=new ye(r,o,n),l=new ne;for(let h=0;h<n;h++)l.position.set((s()-.5)*t,s()*e,.02+s()*.06),l.rotation.set(s()*3,s()*3,s()*3),l.updateMatrix(),a.setMatrixAt(h,l.matrix);a.castShadow=!1;const c=new Jt;return c.add(a),c}function Ef(i,t=1.6,e=1){const n=new tt(new Zn(.5,10),new mt({color:4480046,roughness:1}));return n.rotation.x=-Math.PI/2,n.scale.set(t,e,1),n.receiveShadow=!0,n}let Sl=null;function VM(){if(Sl)return Sl;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d");t.fillStyle="#4a3826",t.fillRect(0,0,128,128);const e=Ti(1179143),n=["#a83a22","#c77b2e","#6b4e30","#5a6b35","#7d4a26","#8f5a24"];for(let r=0;r<650;r++){t.fillStyle=n[Math.floor(e()*n.length)],t.globalAlpha=.5+e()*.5;const o=1+e()*2.5;t.save(),t.translate(e()*128,e()*128),t.rotate(e()*3.14),t.fillRect(-o/2,-o/3,o,o*.66),t.restore()}t.globalAlpha=1;const s=new En(i);return s.wrapS=s.wrapT=On,s.colorSpace=ke,s.anisotropy=4,Sl=s,s}function Tf(i){const t=[];for(const s of i){const r=new Zn(.5,12);r.rotateX(-Math.PI/2),r.scale(s.r*2.4,1,s.r*2);const o=Yo(s.seed||1,911);r.rotateY(o*6.28),r.translate(s.x,s.y,s.z),t.push(r)}if(!t.length)return null;const e=Vi(t);t.forEach(s=>s.dispose());const n=new tt(e,new mt({map:VM(),roughness:1,metalness:0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));return n.receiveShadow=!0,n}function WM(i,t,e){const n=e?.gust?e.gust(t):.5;for(const s of i){const r=s.userData.sway;r&&(s.rotation.x=Math.sin(t*r.freq+r.ph)*r.amp*(.5+n),s.rotation.z=Math.cos(t*r.freq*.8+r.ph)*r.amp*(.5+n))}}function Sa(i,t,e,n,s=!0,r=null){const o=[],a=new ne;if(s){const c=9+Math.floor(t()*4);for(let h=0;h<c;h++){const d=h/c*Math.PI*2+t()*.3,u=new Lt(.045+t()*.03,e*(.35+t()*.25),.07);a.position.set(Math.cos(d)*(n+.03),e*(.2+t()*.2),Math.sin(d)*(n+.03)),a.rotation.set((t()-.5)*.1,-d,(t()-.5)*.12),a.updateMatrix(),u.applyMatrix4(a.matrix),o.push(u)}}{const c=5+Math.floor(t()*3);for(let h=0;h<c;h++){const d=h/c*Math.PI*2+t()*.5,u=new ai(.07+t()*.05,.6+t()*.5,5);a.position.set(Math.cos(d)*(n+.25),.08,Math.sin(d)*(n+.25)),a.rotation.set(Math.PI/2-.25,0,-d+Math.PI/2),a.updateMatrix(),u.applyMatrix4(a.matrix),o.push(u)}}const l=new tt(Vi(o),r||i.barkSugi);return l.castShadow=!0,l}const sd=65,XM=80;function YM(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function qM(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function rd(i){return qM(YM("TREE_V2:"+i))}function or(i,t,e){const n=new me(t*.72,t*e,i*.22,7,1);n.translate(0,i*.11,0);const s=new me(t*.62*.72,t*.72,i*.78,7,1);return s.translate(0,i*.22+i*.39,0),Vi([n,s])}function Af(i,t){const e=new me(t*.55,t,i,5,1);return e.translate(0,i/2,0),e}function Rf(i,t){return new Te(i,t)}function xs(i,t,e,n,s,r,o){const a=Rf(s,r),l=new ye(a,e,n.length),c=new ne,h=new Nt;for(let d=0;d<n.length;d++)c.position.copy(n[d].p),c.rotation.set(t()*.9-.45,t()*Math.PI*2,t()*.6-.3),c.updateMatrix(),l.setMatrixAt(d,c.matrix),h.set(o).offsetHSL((t()-.5)*.03,0,(t()-.5)*.08),l.setColorAt(d,h);return l.instanceMatrix.needsUpdate=!0,l.instanceColor&&(l.instanceColor.needsUpdate=!0),i.add(l),l}function Cf(i,t,e,n,s,r){const o=[],a=s*Math.PI/180;for(let l=0;l<t;l++){const c=i.y+l/t*n;for(let h=0;h<e;h++){const d=h/e*Math.PI*2+r()*.6,u=n*(.55-l*.09);o.push({p:new O(i.x+Math.cos(d)*u,c+Math.sin(a)*u*.5,i.z+Math.sin(d)*u)})}}return o}function Uo(i,t){const e=new Jt,n=9+t()*4,s=new tt(or(n,.28+t()*.12,1.5),i.barkSugi);e.add(s),e.add(Sa(i,t,n,.3,!0));const r=sd+t()*(XM-sd),o=Cf(new O(0,n*.5,0),4,5,n*.5,r-45,t);return xs(e,t,i.leafSugi,o,1.1,.9,2968106),e.userData={species:"sugi",h:n},e}function od(i,t){const e=new Jt,n=7+t()*2.5;e.add(new tt(or(n,.24,1.3),i.barkHinoki));const s=Cf(new O(0,n*.45,0),4,6,n*.55,30,t);return xs(e,t,i.leafSugi,s,.95,.8,3824176),e.userData={species:"hinoki",h:n},e}function wl(i,t){const e=new Jt,n=2+Math.floor(t()*2),s=2.2+t()*.6,r=[],o=[];for(let a=0;a<n;a++){const l=.12+t()*.18,c=a/n*Math.PI*2+t(),h=s+t()*.5,d=or(h,.22,1.35),u=new ae().makeRotationAxis(new O(Math.cos(c),0,Math.sin(c)),l);d.applyMatrix4(u),r.push(d);const f=3+Math.floor(t()*2);for(let g=0;g<f;g++){const v=g/f*Math.PI*2+t()*.8,p=2.2+t()*1.6,m=Af(p,.09),y=new ne;y.position.set(Math.cos(c)*l*h*2,h*.96,Math.sin(c)*l*h*2),y.rotation.set(.6+t()*.35,v,0,"YXZ"),y.updateMatrix(),m.applyMatrix4(y.matrix),r.push(m);const w=new O(0,p,0).applyMatrix4(y.matrix);o.push({p:w}),o.push({p:w.clone().add(new O(t()-.5,.4,t()-.5))})}}return e.add(new tt(Vi(r),i.barkKeyaki)),e.add(Sa(i,t,3.2,.24,!1,i.barkKeyaki)),xs(e,t,i.leafBroad,o,1.5,1.1,4680501),e.userData={species:"keyaki"},e}function bc(i,t,e={}){const n=new Jt,s=3.5+t()*1.5,r=[or(s*.55,.14,1.25)],o=[];for(let l=0;l<2;l++){const c=l*Math.PI+t()*.4;for(let h=0;h<2;h++){const d=Af(1.6+t()*.8,.05),u=new ne;u.position.set(0,s*.55,0),u.rotation.set(.55+t()*.3,c+(h?.35:-.35),0,"YXZ"),u.updateMatrix(),d.applyMatrix4(u.matrix),r.push(d);const f=new O(0,1.6,0).applyMatrix4(u.matrix);o.push({p:f})}}const a=new tt(Vi(r),i.barkMomiji);return n.add(a),n.add(Sa(i,t,2.2,.15,!1,i.barkMomiji)),n.userData={species:"momiji",bare:a},e.bare||xs(n,t,i.leafMomiji,o,.9,.7,e.autumn?11024930:5929530),n}function ad(i,t){const e=new Jt,n=2.6+t()*1.2,s=or(n,.2,1.4);s.applyMatrix4(new ae().makeRotationZ(.12+t()*.12)),e.add(new tt(s,i.barkSugi)),e.add(Sa(i,t,n,.22,!0));const r=3+Math.floor(t()*3);for(let o=0;o<r;o++){const a=new xn(.9-o*.1,7,5);a.scale(1.25,.32,1.25),a.translate((t()-.5)*1.6,n*.6+o*.5,(t()-.5)*1.6);const l=new tt(a,i.leafPine);e.add(l)}return e.userData={species:"matsu"},e}function Pf(i,t,e){const n=new Jt,s=2.4+t()*.8;n.add(new tt(or(s,.13,1.2),i.barkOrchard));const r=[];for(let h=0;h<6;h++){const d=h/6*Math.PI*2+t();r.push({p:new O(Math.cos(d)*1.1,s*.7+t()*.8,Math.sin(d)*1.1)})}xs(n,t,i.leafBroad,r,1,.8,6058040);const o=new xn(e==="kaki"?.07:.055,6,5),a=new zn({color:e==="kaki"?14182942:8014370}),l=new ye(o,a,10),c=new ne;for(let h=0;h<10;h++){const d=r[Math.floor(t()*r.length)].p;c.position.set(d.x+(t()-.5)*.6,d.y-.25,d.z+(t()-.5)*.6),c.updateMatrix(),l.setMatrixAt(h,c.matrix)}return l.instanceMatrix.needsUpdate=!0,n.add(l),n.userData={species:e},n}function ld(i,t){return Pf(i,t,"kaki")}function cd(i,t){return Pf(i,t,"kuri")}function KM(i,t,e={}){const n=bc(i,t,{bare:!0});if(n.userData.species="sakura",!e.bare){const s=[];for(n.updateMatrixWorld(!0),n.traverse(r=>{if(r.isMesh&&r.geometry){const o=new O;r.geometry.computeBoundingBox(),r.geometry.boundingBox.getCenter(o),r.localToWorld(o),n.worldToLocal(o),o.y>1.5&&s.push({p:o.clone()})}});s.length<6;)s.push({p:new O((t()-.5)*3,2.5+t(),(t()-.5)*3)});xs(n,t,i.leafBlossom,s.slice(0,8),1.2,.9,15247544)}return n}function Oo(i,t,e="moso"){const n=new Jt,s=e==="moso"?5+Math.floor(t()*6):8+Math.floor(t()*8),r=e==="moso"?.06:.03,o=e==="moso"?7+t()*3:4+t()*2,a=[],l=[];for(let c=0;c<s;c++){const h=(t()-.5)*2.4,d=(t()-.5)*2.4,u=o*(.85+t()*.3),f=new me(r*.8,r,u,6,1);f.translate(h,u/2,d),a.push(f),l.push({p:new O(h,u*.78,d)}),l.push({p:new O(h+.2,u*.95,d)})}if(n.add(new tt(Vi(a),i.culm)),xs(n,t,i.leafBamboo,l,.9,.6,4878392),e==="moso"){const c=new ai(.16,.35,6),h=new ye(c,i.shoot,4),d=new ne;for(let u=0;u<4;u++)d.position.set((t()-.5)*2.6,.17,(t()-.5)*2.6),d.updateMatrix(),h.setMatrixAt(u,d.matrix);h.instanceMatrix.needsUpdate=!0,n.add(h)}return n.userData={species:"bamboo-"+e},n}function ZM(i,t,e=4){const n=new Jt,s=new ne,r=new ye(Rf(.7,.5),i.leafSasa,14);for(let d=0;d<14;d++)s.position.set((t()-.5)*e,.25,(t()-.5)*e),s.rotation.set(0,t()*3.14,0),s.updateMatrix(),r.setMatrixAt(d,s.matrix);r.instanceMatrix.needsUpdate=!0,n.add(r);const o=new ye(new ai(.3,.5,5,1,!0),i.leafFern,8);for(let d=0;d<8;d++)s.position.set((t()-.5)*e,.25,(t()-.5)*e),s.rotation.set(0,t()*3.14,0),s.updateMatrix(),o.setMatrixAt(d,s.matrix);o.instanceMatrix.needsUpdate=!0,n.add(o);const a=new ye(new xn(.3,6,4,0,6.3,0,1.2),i.moss,6);for(let d=0;d<6;d++)s.position.set((t()-.5)*e,.02,(t()-.5)*e),s.scale.setScalar(.7+t()*.8),s.rotation.set(0,0,0),s.updateMatrix(),a.setMatrixAt(d,s.matrix);a.instanceMatrix.needsUpdate=!0,s.scale.setScalar(1),n.add(a);const l=new ye(new ai(.12,.45,5),i.leafSeedling,10);for(let d=0;d<10;d++)s.position.set((t()-.5)*e,.22,(t()-.5)*e),s.rotation.set(0,t()*3.14,0),s.updateMatrix(),l.setMatrixAt(d,s.matrix);l.instanceMatrix.needsUpdate=!0,n.add(l);const c=new tt(new me(.16,.2,2.4,7),i.barkSugi);c.rotation.set(Math.PI/2,0,t()*3.14),c.position.y=.18,n.add(c);for(let d=0;d<3;d++){const u=new tt(new ai(.09,.3,5),i.leafSeedling);u.position.set(-.7+d*.7,.42,0),n.add(u)}const h=new ye(new Zn(.35,7),i.litter,10);for(let d=0;d<10;d++)s.position.set((t()-.5)*e,.015,(t()-.5)*e),s.rotation.set(-Math.PI/2,0,t()*3.14),s.updateMatrix(),h.setMatrixAt(d,s.matrix);return h.instanceMatrix.needsUpdate=!0,n.add(h),n.userData={species:"understory"},n}function ce(i,t,e){let n=Math.imul(i,374761393)+Math.imul(t,668265263)+Math.imul(e,1442695041)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}function ks(i,t,e,n,s=130){const r=Sc(7,3,n),o=[];for(let a=0;a<4e3&&o.length<t;a++){const l=r()*Math.PI*2,c=30+Math.sqrt(r())*(s-30),h=Math.cos(l)*c,d=Math.sin(l)*c*.9+6,u=ah(h,d);i.includes(u)&&(wc(h,d)<4||Math.hypot(h+48,d+28)<10||Wr(h,d)>.55||Math.abs(d-(34+8*Math.sin(h*.045)))<6||o.some(([f,g])=>Math.hypot(f-h,g-d)<e)||o.push([h,d]))}return o}function JM(i,t){const n=Math.floor(i/22),s=Math.floor(t/22),r=i/22-n,o=t/22-s,a=r*r*(3-2*r),l=o*o*(3-2*o),c=ce(n,s,201),h=ce(n+1,s,201),d=ce(n,s+1,201),u=ce(n+1,s+1,201),f=c+(h-c)*a+(d-c)*l+(c-h-d+u)*a*l,g=ce(n*3+11,s*3+7,202);return Math.min(1,Math.max(0,f*.72+g*.28))}function $M(i,t,e,n,s){const r=ce(Math.floor(e/12),Math.floor(n/12),203);return i==="bamboo"?"bamboo":i==="mountain"||i==="slope"?r<.68?"sugi":"hinoki":t<48?r<.55?"momiji":"pine":i==="maple"?r<.62?"momiji":"pine":i==="grassland"||i==="outskirts"?r<.5?"pine":"momiji":s()<.5?"sugi":"hinoki"}function QM(){const i=[new ut(.24,0),new ut(.2,.12),new ut(.13,.5),new ut(.105,1.2),new ut(.085,2),new ut(.06,2.6)],t=new nr(i,6);return t.computeVertexNormals(),t}function Fo(i,t,e){const n=of(i),s=n.attributes.position;for(let r=0;r<s.count;r++){const o=1+(ce(r,t,9)-.5)*e;s.setXYZ(r,s.getX(r)*o,s.getY(r)*(1+(ce(r,t+1,9)-.5)*e*.6),s.getZ(r)*o)}return n.computeVertexNormals(),n}function jM(i){let t=0;const e=i.map(a=>a.toNonIndexed());for(const a of e)t+=a.attributes.position.count;const n=new Float32Array(t*3),s=new Float32Array(t*3);let r=0;for(const a of e)n.set(a.attributes.position.array,r*3),a.attributes.normal&&s.set(a.attributes.normal.array,r*3),r+=a.attributes.position.count,a.dispose();const o=new ge;return o.setAttribute("position",new Me(n,3)),o.setAttribute("normal",new Me(s,3)),o}function hd(i,t){if(i==="sugi"){const s=new ai(1.05,4.2,7,3);return s.translate(0,2.1,0),Fo(s,t,.22)}if(i==="hinoki"){const s=new ai(1.3,3.9,8,2);return s.translate(0,1.95,0),Fo(s,t,.3)}if(i==="pine"){const s=new xn(1.6,8,4,0,Math.PI*2,0,Math.PI*.55);return s.scale(1,.45,1),s.translate(0,2.6,0),Fo(s,t,.2)}if(i==="bamboo"){const s=new Jn(.95,0);return s.scale(1,1.4,1),s.translate(0,2.4,0),Fo(s,t,.35)}const e=[],n=[[0,1.6,0,1.35],[.7,2.2,.3,1],[-.6,2.7,-.2,.75]];for(let s=0;s<n.length;s++){const[r,o,a,l]=n[s],c=new Jn(l,1);c.scale(1.25,.55,1.25),c.translate(r,o,a);const h=c.attributes.position,d=[];for(let g=0;g<h.count;g+=3)if(!(ce(g+s*131,t,12)<.4))for(let p=0;p<3;p++)d.push(h.getX(g+p),h.getY(g+p),h.getZ(g+p));const u=new ge;u.setAttribute("position",new Me(new Float32Array(d),3));const f=of(u);f.computeVertexNormals(),e.push(f),c.dispose()}return jM(e)}function tS(i){const t=new Jt;t.name="ecology";const e=[],n=[],s=c=>(c?.userData?.sway&&e.push(c),c?.userData?.tick&&n.push(c.userData.tick),c),r=ks(["maple"],3,14,101,70);r.forEach(([c,h],d)=>{const u=Re(c,h),f=wf(i,500+d,1+ce(d,3,5)*.5,.35+ce(d,9,6)*.5,0,0);f.position.set(c,u,h),f.rotation.y=ce(d,13,7)*6.28,zo(t,f),s(f)});{const c=r.map(([d,u],f)=>({x:d,y:Re(d,u)+.05,z:u,r:1.2,seed:720+f})),h=Tf(c);h&&t.add(h)}ks(["bamboo"],2,16,102,80).forEach(([c,h],d)=>{const u=bf(i,510+d,0,0);u.position.set(c,Re(c,h),h),zo(t,u),s(u)}),ks(["maple","grassland","outskirts","slope"],8,12,103).forEach(([c,h],d)=>{const u=lh(520+d,.5+ce(d,21,8)*.6);u.position.set(c,Re(c,h)+.2,h),zo(t,u),s(u)}),ks(["grassland","field","outskirts","riverbank"],6,14,104).forEach(([c,h],d)=>{const u=ch(530+d,50,[5,5]);u.position.set(c,Re(c,h)+.03,h),zo(t,u)});{const c=Sc(11,5,201),h=QM(),d={hinoki:hd("hinoki",212),bamboo:hd("bamboo",214)},u=new mt({color:4864552,roughness:.95}),f=new mt({roughness:.95}),g=new mt({roughness:.8,side:Oe}),v={sugi:[],hinoki:[],momiji:[],bamboo:[],pine:[]},p={sugi:30,hinoki:65,momiji:20,bamboo:35,pine:15};for(let _=0;_<2500&&!(v.sugi.length+v.hinoki.length+v.momiji.length+v.bamboo.length+v.pine.length>=340);_++){const b=c()*Math.PI*2,R=32+Math.sqrt(c())*105,x=Math.cos(b)*R,S=Math.sin(b)*R*.9+6,E=ah(x,S);if(!["maple","bamboo","grassland","slope","mountain","outskirts"].includes(E)||wc(x,S)<3.5||Wr(x,S)>.7||Math.abs(S-(34+8*Math.sin(x*.045)))<5||Math.hypot(x+48,S+28)<9)continue;const T=JM(x,S);if(T<.28||T<.45&&ce(_,61,204)<.6)continue;const C=$M(E,Math.hypot(x,S),x,S,c);if(v[C].length>=p[C])continue;const P=Re(x,S),L=.75+ce(_,62,205)*.5,I=(E==="mountain"?.8+c()*.5:1+c()*.9)*L;v[C].push({x,y:P,z:S,sc:I,ry:c()*6.28,seed:_})}const m=new ne,y=new Nt,w=["hinoki","bamboo"];for(const _ of w){const M=v[_];if(!M.length)continue;const b=new ye(h,u,M.length),R=_==="momiji"?g:f,x=new ye(d[_],R,M.length),S=new Float32Array(M.length),E=new Float32Array(M.length),T=new Float32Array(M.length);M.forEach((C,P)=>{const L=_==="bamboo"?[C.sc*.45,C.sc*1.5,C.sc*.45]:[C.sc,C.sc,C.sc];m.position.set(C.x,C.y-.05,C.z),m.rotation.set(0,C.ry,0),m.scale.set(L[0],L[1],L[2]),m.updateMatrix(),b.setMatrixAt(P,m.matrix);const I=_==="bamboo"?C.y+1.2*C.sc:_==="pine"?C.y+.9*C.sc:C.y+1*C.sc;m.position.set(C.x,I,C.z),m.rotation.set(0,C.ry+ce(P,71,206)*6.28,0);const N=_==="momiji"?C.sc*1.1:_==="pine"?C.sc*1.15:C.sc;m.scale.set(N,N*(_==="bamboo"?1.5:1),N),m.updateMatrix(),x.setMatrixAt(P,m.matrix),_==="sugi"?y.setHSL(.36+ce(P,43,3)*.03,.42,.16+ce(P,44,4)*.06):_==="hinoki"?y.setHSL(.33+ce(P,43,3)*.04,.4,.22+ce(P,44,4)*.07):_==="momiji"?y.setHSL(.02+ce(P,43,3)*.09,.62,.32+ce(P,44,4)*.12):_==="bamboo"?y.setHex(4157488).offsetHSL(0,0,(ce(P,44,4)-.5)*.06):y.setHSL(.3+ce(P,43,3)*.05,.38,.24+ce(P,44,4)*.07),x.setColorAt(P,y),S[P]=ce(P,72,207),E[P]=_==="momiji"?.35+ce(P,73,208)*.65:0,T[P]=ce(P,71,206)*6.28}),x.geometry=x.geometry.clone(),x.geometry.setAttribute("aWind",new qs(S,1)),x.geometry.setAttribute("aAutumn",new qs(E,1)),x.geometry.setAttribute("aUvRot",new qs(T,1)),b.instanceMatrix.needsUpdate=!0,x.instanceMatrix.needsUpdate=!0,x.instanceColor&&(x.instanceColor.needsUpdate=!0),b.castShadow=!1,b.receiveShadow=!1,x.castShadow=!1,x.receiveShadow=!1,b.frustumCulled=!0,x.frustumCulled=!0,t.add(b,x)}{const M={sugi:"sugi",momiji:"momiji",pine:"matsu"},b={sugi:i.barkSugi,momiji:i.barkMomiji,pine:i.barkOrchard},R={sugi:i.leafSugi,momiji:i.leafMomiji,pine:i.leafPine},x={sugi:.85,momiji:.9,pine:1.1},S={sugi:0,momiji:1,pine:2},E=T=>{const C=T.map(U=>U.toNonIndexed());let P=0;for(const U of C)P+=U.attributes.position.count;const L=new Float32Array(P*3),I=new Float32Array(P*3),N=new Float32Array(P*2);let z=0;for(const U of C)L.set(U.attributes.position.array,z*3),I.set(U.attributes.normal.array,z*3),N.set(U.attributes.uv.array,z*2),z+=U.attributes.position.count,U.dispose();const G=new ge;return G.setAttribute("position",new Me(L,3)),G.setAttribute("normal",new Me(I,3)),G.setAttribute("uv",new Me(N,2)),G};for(const T of["sugi","momiji","pine"]){const C=v[T];if(!C.length)continue;const P=zM[M[T]];for(let L=0;L<5;L++){const I=C.filter((wt,bt)=>bt%5===L);if(!I.length)continue;const N=Math.floor(ce(S[T]*57+L*13,301,302)*1e9),z=FM({...P,seed:N,radialSegments:5,sectionLength:1.6}),G=[],U=new ne;for(const wt of z.tips)for(let bt=0;bt<2;bt++){const Qt=new Te(x[T],x[T]*.8);U.position.copy(wt),U.rotation.set(0,(wt.x*3.1+wt.z*1.7+bt*Math.PI/2)%(Math.PI*2),0),U.updateMatrix(),Qt.applyMatrix4(U.matrix),G.push(Qt)}const k=E(G),X=new ye(z.geometry,b[T],I.length),dt=new ye(k,R[T],I.length),yt=new ne;I.forEach((wt,bt)=>{yt.position.set(wt.x,wt.y-.05,wt.z),yt.rotation.set(0,wt.ry,0),yt.scale.set(wt.sc,wt.sc,wt.sc),yt.updateMatrix(),X.setMatrixAt(bt,yt.matrix),dt.setMatrixAt(bt,yt.matrix),T==="sugi"?y.setHSL(.36+ce(bt,43,3)*.03,.42,.16+ce(bt,44,4)*.06):T==="momiji"?y.setHSL(.02+ce(bt,43,3)*.09,.62,.32+ce(bt,44,4)*.12):y.setHSL(.3+ce(bt,43,3)*.05,.38,.24+ce(bt,44,4)*.07),X.setColorAt(bt,y),T==="sugi"?y.setHSL(.33+ce(bt,45,5)*.04,.45,.25+ce(bt,46,6)*.08):T==="momiji"?y.setHSL(.05+ce(bt,45,5)*.08,.6,.35+ce(bt,46,6)*.1):y.setHSL(.29+ce(bt,45,5)*.05,.42,.28+ce(bt,46,6)*.08),dt.setColorAt(bt,y)}),X.instanceMatrix.needsUpdate=!0,dt.instanceMatrix.needsUpdate=!0,X.instanceColor&&(X.instanceColor.needsUpdate=!0),dt.instanceColor&&(dt.instanceColor.needsUpdate=!0),X.castShadow=!1,X.receiveShadow=!1,dt.castShadow=!1,dt.receiveShadow=!1,X.frustumCulled=!1,dt.frustumCulled=!1,t.add(X,dt)}}}}{const c={barkSugi:i.barkSugi,barkHinoki:i.barkHinoki,barkKeyaki:i.barkKeyaki,barkMomiji:i.barkMomiji,barkOrchard:i.barkOrchard,leafSugi:i.leafSugi,leafBroad:i.leafBroad,leafMomiji:i.leafMomiji,leafBlossom:i.leafBlossom,leafPine:i.leafPine,leafBamboo:i.leafBamboo,leafSasa:i.leafSasa,leafFern:i.leafFern,leafSeedling:i.leafSeedling,culm:i.bamboo,shoot:i.shoot,litter:i.litter,moss:i.moss,impostor:i.impostor},h=Sc(9,4,301),d=(g,v,p=!1)=>!(wc(g,v)<3||Math.abs(v-(34+8*Math.sin(g*.045)))<5||Wr(g,v)>.6||!p&&Math.hypot(g+48,v+28)<9),u=(g,v,p,m={})=>{if(!d(v,p,m.shrineOK))return;const y=rd(`village:${m.key||g.name}:${v.toFixed(1)},${p.toFixed(1)}`),w=g(c,y,m.arg);w.position.set(v,Re(v,p)+(m.sink||0),p),w.rotation.y=y()*6.28;const _=(m.s||1)*(.92+y()*.2);w.scale.setScalar(_),w.traverse(M=>{M.isMesh&&!M.isInstancedMesh&&(M.castShadow=!0)}),t.add(w)};u(wl,18+(h()-.5)*3,8+(h()-.5)*3,{key:"keyaki-meet"}),u(wl,-20+(h()-.5)*3,-6+(h()-.5)*3,{key:"keyaki-west"}),u(wl,6+(h()-.5)*3,-20+(h()-.5)*3,{key:"keyaki-south"}),u(KM,-38,-20,{key:"sakura-gather"}),u(ad,-40,-22,{key:"matsu-shrine"}),u(ad,26,14,{key:"matsu-street"}),u(od,-55,-20,{key:"hinoki-L",shrineOK:!0}),u(od,-44,-32,{key:"hinoki-R",shrineOK:!0}),u(Uo,-10,24,{key:"sugi-1"}),u(Uo,16,32,{key:"sugi-2"}),u(Uo,-30,12,{key:"sugi-3"}),u(Uo,30,-8,{key:"sugi-4"}),u(ld,-6,44,{key:"kaki-1",s:.95}),u(ld,-2,44.5,{key:"kaki-2",s:.9}),u(cd,2,48,{key:"kuri-1",s:.95}),u(cd,6,48.5,{key:"kuri-2",s:.9}),u(Oo,-26,20,{key:"moso-1",arg:"moso"}),u(Oo,24,24,{key:"moso-2",arg:"moso"});for(let g=0;g<3;g++)u(Oo,10+g*4,-4+(h()-.5),{key:`madake-e${g}`,arg:"madake",s:.8}),u(Oo,-12+g*4,-12+(h()-.5),{key:`madake-w${g}`,arg:"madake",s:.8});u(bc,12,30,{key:"momiji-river",arg:{autumn:!0}}),u(bc,-34,-14,{key:"momiji-shrine",arg:{autumn:!1}}),[...ks(["maple"],2,14,101,70).map(([g,v])=>[g+2,v+1]),...ks(["bamboo"],1,16,102,80).map(([g,v])=>[g-2,v-1])].forEach(([g,v],p)=>{if(!d(g,v))return;const m=rd(`village:under:${p}`),y=ZM(c,m,5);y.position.set(g,Re(g,v)+.02,v),t.add(y)})}return{group:t,vegRoots:e,tickers:n}}function zo(i,t){i.add(t)}const eS=[{name:"sugiA",x:-7,z:21,ry:.7,h:11},{name:"sugiB",x:19,z:29,ry:2.4,h:10}];function nS(){const i=new mt({color:12163712,roughness:.95,envMapIntensity:.15}),t=new ga,e=()=>{},n=(s,r)=>(s.colorSpace=r?ke:Un,s.wrapS=s.wrapT=On,s.anisotropy=4,s);return t.load("vendor/eztree/pine_color_1k.jpg",s=>{i.map=n(s,!0),i.needsUpdate=!0},void 0,e),t.load("vendor/eztree/pine_normal_1k.jpg",s=>{i.normalMap=n(s,!1),i.needsUpdate=!0},void 0,e),t.load("vendor/eztree/pine_roughness_1k.jpg",s=>{i.roughnessMap=n(s,!1),i.roughness=1,i.needsUpdate=!0},void 0,e),i}function iS(){const i=new mt({color:16777215,roughness:.85,side:Oe,alphaTest:.45,envMapIntensity:.1});return new ga().load("vendor/eztree/pine_color.png",t=>{t.colorSpace=ke,i.map=t,i.needsUpdate=!0},void 0,()=>{}),i}function sS(i){const t=new Jt;t.name="ezHeroes";const e=new rm,n=nS(),s=iS(),r=()=>{};for(const o of eS){const a=i(o.x,o.z),l=new Jt;l.position.set(o.x,a-.05,o.z),l.rotation.y=o.ry,l.visible=!1,t.add(l);let c=0,h=null;const d=(u,f,g,v)=>{u.computeBoundingBox();const p=u.boundingBox;if(v){if(l.userData.s=o.h/Math.max(.001,p.max.y-p.min.y),h){const w=h;h=null,d(w,s,!1,!1)}}else if(l.userData.s===void 0){h=u;return}const m=l.userData.s,y=new tt(u,f);y.scale.setScalar(m),y.position.y=-p.min.y*m,y.castShadow=g,l.add(y),++c===2&&(l.visible=!0)};e.load(`vendor/eztree/ezhero-${o.name}-bark.json`,u=>d(u,n,!0,!0),void 0,r),e.load(`vendor/eztree/ezhero-${o.name}-leaf.json`,u=>d(u,s,!1,!1),void 0,r)}return t}const rS=[{name:"hamletA",cx:-27,cz:34,seed:201,w:6,d:5,wallH:2.9,roofType:"kirizuma",pitch:30,facadeCols:3,doorSide:-1,engawa:.8,woodTone:.3,age:.7,winLayout:[1,0,2]},{name:"hamletB",cx:13,cz:24,seed:202,w:6,d:5.5,wallH:3,roofType:"yosemune",pitch:31,facadeCols:3,doorSide:1,engawa:0,woodTone:.6,age:.4,winLayout:[2,0,1]},{name:"hamletC",cx:22,cz:28,seed:203,w:6,d:5,wallH:2.8,roofType:"kirizuma",pitch:29,facadeCols:3,doorSide:1,engawa:.8,woodTone:.5,age:.55,winLayout:[1,2,0]}],oS=[{name:"farmhouse",cx:13,cz:29,seed:204,w:7.5,d:6,wallH:3.2,roofType:"kirizuma",pitch:32,facadeCols:4,doorSide:1,engawa:1,woodTone:.35,age:.6,winLayout:[1,2,1,0]},{name:"barn",cx:20,cz:30,seed:205,w:5,d:7,wallH:3.6,roofType:"kirizuma",pitch:40,facadeCols:2,doorSide:0,engawa:0,woodTone:.25,age:.8,winLayout:[0,0],glow:!1}];function aS(i){cf(i);const t=new Jt;t.name="settlement";const e=[];for(const[s,r]of[[rS,40],[oS,50]])for(const[o,a]of s.entries()){const l=uf({...a}),c=Re(a.cx,a.cz);l.group.position.set(a.cx,c,a.cz),t.add(l.group),e.push({name:a.name,group:l.group,glowMats:a.glow===!1?[]:l.glowMats,sliders:l.sliders||[],params:{...a},pos:new O(a.cx,c,a.cz),w:a.w,d:a.d});const[h,d]=Bi(a.cx,a.cz);fs(h,d,[{id:ds("house",h,d,r+o),type:"house",x:a.cx,z:a.cz,y:c,data:{name:a.name}}])}{const s={W:[],D:[]},r=[{x1:-30,z1:37.5,x2:-24,z2:37.5},{x1:8.5,z1:27.5,x2:8.5,z2:32}];for(const a of r){const l=Math.hypot(a.x2-a.x1,a.z2-a.z1),c=Math.max(2,Math.floor(l/1.4));for(let d=0;d<=c;d++){const u=d/c,f=a.x1+(a.x2-a.x1)*u,g=a.z1+(a.z2-a.z1)*u,v=new Lt(.1,1,.1);v.translate(f,Re(f,g)+.5,g),s.D.push(v)}const h=Math.atan2(a.x2-a.x1,a.z2-a.z1)+Math.PI/2;for(const d of[.85,.4]){const u=new Lt(l,.08,.06),f=new ae().makeRotationY(h),g=(a.x1+a.x2)/2,v=(a.z1+a.z2)/2;f.setPosition(g,Re(g,v)+d,v),u.applyMatrix4(f),s.D.push(u)}}const o=new mt({color:5916208,roughness:.85});for(const a of Object.keys(s)){if(!s[a].length)continue;const l=new tt(ln(s[a],!1),o);l.castShadow=!0,l.receiveShadow=!0,t.add(l)}}return iM().forEach((s,r)=>{const a=s.w-1,l=s.d-.5*2,c=[],h=.35,d=.4;for(const[x,S,E,T]of[[a+d*2,d,0,-l/2],[a+d*2,d,0,l/2],[d,l,-a/2,0],[d,l,a/2,0]]){const C=new Lt(x,h,S);C.translate(s.cx+E,s.y+h/2-.05,s.cz+T),c.push(C)}const u=new tt(ln(c,!1),new mt({color:7035456,roughness:1}));u.castShadow=!0,u.receiveShadow=!0,t.add(u);const f=new tt(new Te(a,l),new mt({color:3360842,roughness:.12,metalness:.7,envMapIntensity:.9,transparent:!0,opacity:.95}));f.rotation.x=-Math.PI/2,f.position.set(s.cx,s.y+.12,s.cz),f.receiveShadow=!0,t.add(f),t.userData["paddyWater"+r]=f.material;const g=new Te(.22,.4);g.translate(0,.2,0);const v=ln([g,g.clone().rotateY(Math.PI/2)],!1),p=new mt({color:6982204,roughness:.9,side:Oe}),m=7,y=22,w=new ye(v,p,m*y),_=new ne;let M=0;for(let x=0;x<m;x++)for(let S=0;S<y;S++){_.position.set(s.cx-a/2+.4+(a-.8)*S/(y-1),s.y+.1,s.cz-l/2+.4+(l-.8)*(x+.5)/m),_.rotation.set(0,(x*y+S)%8*.4,0);const E=.8+(x*31+S*17)%10/10*.5;_.scale.set(E,E,E),_.updateMatrix(),w.setMatrixAt(M++,_.matrix)}w.instanceMatrix.needsUpdate=!0,w.castShadow=!1,w.receiveShadow=!0,t.add(w);const[b,R]=Bi(s.cx,s.cz);fs(b,R,[{id:ds("paddy",b,R,r),type:"paddy",x:s.cx,z:s.cz,y:s.y,data:{}}])}),{group:t,houses:e}}const be=.69,Ee=.012;function lS(i){let t=2166136261;const e=String(i??"home");for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function wa(i){let t=i>>>0||1;return function(){t+=1831565813;let e=Math.imul(t^t>>>15,t|1);return e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function ba(i,t){return((typeof i.seed=="number"?i.seed>>>0:lS(i.seed??i.name??"house"))^Math.imul(t>>>0,2654435761))>>>0}const bl={};function El(i,t,e=.9){return bl[i]||(bl[i]=new mt({color:t,roughness:e,metalness:0})),bl[i]}function Df(i){const t=i||{},e=t.wood||t.timber||t.beam||t.frame||El("wood",8018490),n=t.dark||t.iron||t.charcoal||t.kitchen||El("dark",3025446,.85),s=t.ceramic||t.pot||t.clay||t.plaster||El("ceramic",12101774,.6),r=t.stone||t.rock||t.step||n,o=t.fabric||t.cloth||t.curtain||t.noren||n;return{wood:e,dark:n,ceramic:s,stone:r,fabric:o}}function nn(i,t,e,n,s,r,o,a=0){const l=new Lt(t,e,n);a&&l.rotateY(a),l.translate(s,r,o),i.push(l)}function li(i,t,e,n,s,r,o,a,l=!1){const c=new me(t,e,n,s,1,l);c.translate(r,o,a),i.push(c)}function cS(i,t,e,n,s,r,o){const a=new ai(t,e,n);a.translate(s,r,o),i.push(a)}function hS(i,t,e,n,s,r,o,a,l=8,c=6){const h=new xn(t,l,c);h.scale(e,n,s),h.translate(r,o,a),i.push(h)}function uS(i,t,e,n,s,r,o){const a=new me(t,t,e,n);a.rotateX(Math.PI/2),a.translate(s,r,o),i.push(a)}function hh(i,t,e,n,s,r,o=0,a="z"){const l=new me(t,t,e,6);o&&(a==="z"?l.rotateX(o):l.rotateZ(o)),l.translate(n,s,r),i.push(l)}function qn(i,t,e){if(!t.length)return null;const n=ln(t,!1);for(const r of t)r.dispose();if(!n)return null;const s=new tt(n,e);return i.add(s),s}function dS(i,t,e){const n=[],s=[],r=Df(e),o=Math.max(2.2,t.w??3.4),a=Math.max(2.4,t.d??3.6),l=t.kind??"home",c=-a/2+.25,h=o/2-.2,d=Math.max(.8,h-.35);if(l==="home"){const u=ud(i,t,r,{w:o,d:a,zBack:c,sideX:h,hw:d});if(u&&u.glow)for(const f of u.glow)s.push(f)}else if(l==="shop")fS(i,t,r,{w:o,d:a,zBack:c},n);else if(l==="farm"||l==="shed")pS(i,t,r,{d:a,zBack:c,sideX:h});else if(l==="hero")mS(i,t,r,{zBack:c,hw:d});else{const u=ud(i,t,r,{w:o,d:a,zBack:c,sideX:h,hw:d});if(u&&u.glow)for(const f of u.glow)s.push(f)}return{cloth:n,glow:s}}function ud(i,t,e,n){const s=wa(ba(t,48879)),r=[],o=[],a=[],{zBack:l,sideX:c,hw:h}=n,d=Math.min(1.7,n.w-1.2),u=-Math.min(.9,h*.45)+(s()-.5)*.2,f=l+.3,g=Math.min(1.15,(t.wallH??1.9)-.55),v=d/2-.04;for(const E of[-1,1])nn(r,.08,g,.32,u+E*v,be+Ee+g/2,f);const p=[.28,.58,.88].filter(E=>E<g);for(const E of p)nn(r,d,.05,.34,u,be+Ee+E,f);const m=5+Math.floor(s()*3);for(let E=0;E<m;E++){const T=p[E%p.length],C=u-d/2+.18+E*(d-.36)/Math.max(1,m-1)+(s()-.5)*.04,P=.055+s()*.035,L=E%3===2?.07+s()*.03:.12+s()*.06;li(a,P,P*.85,L,8,C,be+Ee+T+.025+L/2,f+(s()-.5)*.1)}const y=c-.32;uS(o,.17,Math.min(1.6,n.d-1.4),8,y,be+Ee+.17,-.15),nn(o,.38,.12,.26,y,be+Ee+.06,.78);const w=-(c-.38);nn(r,.46,.44,.46,w,be+Ee+.22,.62),nn(r,.4,.36,.4,w+.03,be+Ee+.44+.012+.18,.6);const _=Math.min(h,c-.55),M=l+.62;nn(r,.72,.24,.5,_,be+Ee+.12,M),nn(o,.42,.36,.42,_-.08,be+Ee+.24+.012+.18,M),li(o,.16,.14,.15,8,_-.08,be+Ee+.24+.012+.36+.012+.075,M);for(let E=0;E<3;E++)li(a,.09,.09,.026,8,_+.16+E%2*.02,be+Ee+.24+.012+.013+Math.floor(E/2)*.03,M-.12+E*.11);const b=[],R=p.length>1?p[1]:p[0];if(R!==void 0){let E=u-d/2+.25;for(let T=0;T<5;T++){const C=.035+s()*.03,P=.17+s()*.08;nn(o,C,P,.13,E,be+Ee+R+.025+P/2,f+(s()-.5)*.02),E+=C+.012}}const x=-(c-.28),S=l+.35;hh(r,.016,1.15,x,be+Ee+.57,S,.22,"x"),nn(o,.07,.22,.09,x,be+Ee+.13,S+.12),qn(i,r,e.wood),qn(i,o,e.dark),qn(i,a,e.ceramic);{const E=h-.35,T=1.15,C=new tt(new Lt(.62,.4,.42),e.wood);C.position.set(E,be+Ee+.2,T),C.castShadow=C.receiveShadow=!0,i.add(C);const P=new tt(new Lt(.56,.4,.36),e.dark);P.position.set(E,be+Ee+.4+.2,T),P.castShadow=!0,i.add(P);const L=new mt({color:790550,roughness:.15,metalness:.4,emissive:10336472,emissiveIntensity:0}),I=new tt(new Lt(.46,.3,.02),L);I.position.set(E,be+Ee+.4+.2,T-.19),I.rotation.y=Math.PI,i.add(I),b.push(L);const N=new tt(new me(.006,.006,.5,6),e.dark);N.position.set(E+.15,be+Ee+.4+.4+.25,T),N.rotation.z=.25,i.add(N)}return{glow:b}}function fS(i,t,e,n,s){const r=wa(ba(t,81)),o=[],a=[],{zBack:l}=n,c=Math.min(2,n.w-1),h=n.d/2-1.05;nn(o,c,.55,.5,0,be+Ee+.275,h),nn(o,c+.1,.05,.58,0,be+Ee+.55+.025,h);const d=Math.min(1.9,n.w-1);for(const p of[.55,.92])nn(o,d,.05,.32,0,be+Ee+p,l+.28);for(let p=0;p<8;p++){const m=p<4?.55:.92,y=-d/2+.2+p%4*((d-.4)/3)+(r()-.5)*.03,w=.06+r()*.03,_=.13+r()*.07;li(a,w,w*.85,_,8,y,be+Ee+m+.025+_/2,l+.28)}qn(i,o,e.wood),qn(i,a,e.ceramic);const u=.72,f=Math.min(.9,(t.wallH??1.9)-.7),g=new Te(u,f),v=new tt(g,e.fabric);v.material&&v.material.side!==void 0&&(v.material=v.material),v.material.side=Oe,v.position.set(Math.min(.85,n.w/2-.7),be+Ee+f/2+.55,l+.16),i.add(v),s.push({mesh:v,phase:r()*Math.PI*2,amp:.09+r()*.03})}function pS(i,t,e,n){const s=wa(ba(t,244)),r=String(t.name??"").toLowerCase().startsWith("barn"),o=[],a=[],{zBack:l,sideX:c}=n,h=-(c-.18);for(const u of[.45,.85])nn(o,.06,.06,Math.min(1.6,n.d-1.2),h,be+Ee+u,-.1);const d=r?2:3;for(let u=0;u<d;u++){const f=-.6+u*.42+(s()-.5)*.06;hh(o,.022,1.25,h+.16,be+Ee+.62,f,.18,"z"),nn(a,.05,.22,.04,h+.27,be+Ee+.35,f)}if(!r){for(let u=0;u<3;u++)hS(a,.24,1,.62,1,.5+u%2*.42+(s()-.5)*.08,be+Ee+.15,l+.55+Math.floor(u/2)*.42);li(o,.2,.15,.26,8,-.3,be+Ee+.13,l+.6,!0),li(o,.17,.13,.22,8,-.72,be+Ee+.11,l+.62,!0);for(let u=0;u<6;u++)nn(o,.22,.16,.5,-.9+u*.26,be+Ee+.08,l+.32)}qn(i,o,e.wood),qn(i,a,e.dark)}function mS(i,t,e,n){const s=[],r=[],{zBack:o,hw:a}=n,l=-Math.min(.9,a*.5),c=o+.45;li(s,.07,.11,.34,10,l,be+Ee+.17,c),li(s,.05,.05,.06,8,l,be+Ee+.34+.03,c);const h=new Jn(.11,0);h.translate(l+.42,be+Ee+.08,c+.05),r.push(h),qn(i,s,e.ceramic),qn(i,r,e.stone)}function gS(i,t,e){const n=[],s=Df(e),r=wa(ba(t,225)),o=Math.max(2.4,t.d??3.6),a=t.kind??"home",l=o/2,c=r()<.5?-1:1,h=[],d=[];li(h,.3,.34,.07,10,(r()-.5)*.2,.055,l+.95);const u=c*.62,f=l+.38;if(nn(d,.11,.09,.26,u,.065,f,(r()-.5)*.3),nn(d,.11,.09,.26,u+.15*c,.065,f+.03,(r()-.5)*.3),a==="home"||a==="farm"){const g=-c*.72,v=l+.36;li(d,.13,.11,.42,8,g,.02+.21,v),hh(d,.015,.72,g,.02+.36,v,.06,"z"),cS(d,.13,.24,8,g+.02,.02+.72+.1,v)}return qn(i,h,s.stone),qn(i,d,s.dark),{cloth:n}}function _S(i,t,e,n){const s=new Jt;s.name="torii";const r=Re(t,e),o=new mt({color:9054750,roughness:.6}),a=new mt({color:2763310,roughness:.7}),l={W:[],D:[]},c=p=>{const m=new me(.14,.17,3,10);m.translate(p*1.1,1.5,0),l.W.push(m);const y=new me(.22,.26,.3,10);y.translate(p*1.1,.15,0),l.D.push(y)};c(-1),c(1);const h=new Lt(3.4,.22,.3);h.translate(0,3.1,0),l.W.push(h);const d=new Lt(3.7,.12,.42);d.translate(0,3.28,0),l.D.push(d);const u=new Lt(2.4,.16,.16);u.translate(0,2.55,0),l.W.push(u);const f=new Lt(.14,.6,.14);f.translate(0,2.85,0),l.W.push(f);for(const[p,m]of[["W",o],["D",a]]){if(!l[p].length)continue;const y=new tt(ln(l[p],!1),m);y.castShadow=!0,y.receiveShadow=!0,s.add(y)}s.position.set(t,r,e),s.rotation.y=n;const[g,v]=[Bi(t,e)[0],Bi(t,e)[1]];return fs(g,v,[{id:ds("torii",g,v,0),type:"torii",x:t,z:e,y:r,data:{}}]),{group:s}}function xS(i,t,e,n){const s=new Jt;s.name="shrine";const r=Re(t,e),o=new mt({color:9145222,roughness:.95}),a=new mt({color:4864552,roughness:.85}),l=new mt({color:3352861,roughness:.9}),c={S:[],W:[],D:[]},h=new Lt(5,.6,4);h.translate(0,.3,0),c.S.push(h);for(let w=0;w<3;w++){const _=new Lt(1.6,.18,.5);_.translate(0,.09+w*.18,2+.25+(2-w)*.42),c.S.push(_)}for(const[w,_]of[[-1.5,-1],[1.5,-1],[-1.5,1],[1.5,1]]){const M=new Lt(.18,2.2,.18);M.translate(w,.6+1.1,_),c.W.push(M)}const d=new Lt(3.6,1.5,2.6);d.translate(0,.6+1.35,0),c.W.push(d);const u=new Lt(.7,1.1,.06);u.translate(0,.6+.85,1.32),c.D.push(u);for(const w of[1,-1]){const _=new Lt(4.6,.1,2.2),M=new ae().makeRotationX(w>0?.62:-.62);M.setPosition(0,3.35,w*.85),_.applyMatrix4(M),c.D.push(_)}const f=new Lt(4.6,.14,.3);f.translate(0,3.95,0),c.D.push(f);for(let w=0;w<=10;w++){const _=w/10,M=-2.4+_*4.8;for(const b of[-1.9,1.9]){if(b>0&&Math.abs(M)<1.1)continue;const R=new Lt(.09,.7,.09);R.translate(M,.6+.35,b),c.D.push(R)}}const g=new Lt(4.9,.07,.08);g.translate(0,.6+.68,-1.9),c.D.push(g);const v=w=>w==="S"?o:w==="W"?a:l;for(const w of Object.keys(c)){if(!c[w].length)continue;const _=new tt(ln(c[w],!1),v(w));_.castShadow=!0,_.receiveShadow=!0,s.add(_)}const p=new tt(new Lt(.8,.5,.4),l);p.position.set(0,.85,1.7),p.castShadow=!0,s.add(p),s.position.set(t,r,e),s.rotation.y=n;const[m,y]=Bi(t,e);return fs(m,y,[{id:ds("shrine",m,y,0),type:"shrine",x:t,z:e,y:r,data:{}}]),{group:s}}const Je=new f1({antialias:!0,powerPreference:"high-performance"});Je.setPixelRatio(Math.min(window.devicePixelRatio||1,2));window.addEventListener("tsuki-quality",i=>{try{const t=i&&i.detail,e=t==="low"?1:t==="medium"?1.5:2;Je.setPixelRatio(Math.min(window.devicePixelRatio||1,e))}catch{}});Je.setSize(window.innerWidth,window.innerHeight);Je.shadowMap.enabled=!0;Je.shadowMap.type=wr;Je.toneMapping=ua;Je.toneMappingExposure=1.06;try{const i=new URLSearchParams(location.search).get("tone");i==="agx"&&Lr!==void 0?Je.toneMapping=Lr:i==="neutral"&&Ir!==void 0&&(Je.toneMapping=Ir)}catch{}document.getElementById("app").appendChild(Je.domElement);const ve=new Zp,Ue=ef();B1(Ue);cf(Ue);const{sun:vS,hemi:yS,skyMat:MS,sky:dd}=k1(ve,Je),Ea=new Jt;Ea.name="hero_machiya";const as=C1(Ue),SS=P1(Ue),qo=D1(Ue);Ea.add(as.group,SS.group,qo.group);X1(Ea,{nageshiY:2.2,eaveY:3.7,doorX:as.openBayX});const uh=[],dh=[],Ta=i=>(i?.userData?.sway&&uh.push(i),i?.userData?.tick&&dh.push(i.userData.tick),i),Dn=py({scene:ve,heroGroup:Ea});Dn.houses.forEach((i,t)=>{const[e,n]=Bi(i.pos.x,i.pos.z);fs(e,n,[{id:ds("house",e,n,t),type:i.name==="hero"?"hero":"house",x:i.pos.x,z:i.pos.z,y:0,data:{name:i.name}}])});window.__world={stats:Mf};const Ko=yM();ve.add(Ko.group);Ko.mesh&&Ko.mesh.material&&Ue.registerWet&&Ue.registerWet(Ko.mesh.material);const wS=MM();ve.add(wS.group);ve.add(CM());const bS=IM();ve.add(bS.group);const fh=tS(Ue);ve.add(fh.group);ve.add(sS(Re));for(const i of fh.tickers)dh.push(i);for(const i of fh.vegRoots)uh.push(i);const Kr=aS(Ue);{const i=xS(Ue,-48,-28,-2.03);ve.add(i.group);const t=_S(Ue,-51,-29.5,2.68);ve.add(t.group)}ve.add(Kr.group);for(const i of Kr.houses)Dn.houses.push({name:i.name,group:i.group,glowMats:i.glowMats,pos:i.pos});const Ec=[];function ES(i){if(i.params&&i.params.isShop)return"shop";const t=String(i.name||"").toLowerCase(),e=i.params&&i.params.winLayout;return t.startsWith("shed")||Array.isArray(e)&&e.length&&e.every(n=>!n)?"shed":t.startsWith("hamlet")||t.startsWith("farm")||t.startsWith("barn")?"farm":t==="hero"||t.startsWith("hero")?"hero":"home"}function TS(i,t){if(i.params&&typeof i.params.seed=="number")return i.params.seed>>>0;let e=2166136261;const n=String(i.name||"house"+t);for(let s=0;s<n.length;s++)e^=n.charCodeAt(s),e=Math.imul(e,16777619);return(e^Math.imul(t+1>>>0,2654435761))>>>0}for(let i=0;i<Dn.houses.length;i++){const t=Dn.houses[i],e=ES(t),n=TS(t,i),s={...t.params||{},name:t.name,kind:e,seed:n};e==="hero"&&(s.w=10,s.d=6.4,s.wallH=2.9);const r=dS(t.group,s,Ue),o=gS(t.group,s,Ue);if(r&&r.cloth)for(const a of r.cloth)Ec.push(a);if(o&&o.cloth)for(const a of o.cloth)Ec.push(a);if(r&&r.glow&&t.glowMats)for(const a of r.glow)t.glowMats.push(a)}console.log("WORLD registry: "+JSON.stringify(Mf()));const bn=Ay(Dn);ve.add(bn.group);const AS=lM({lampLights:bn.lampLights,lampGlows:bn.lampGlows,houses:Dn.houses}),Lf=uM(Ue,7.5,24.5,Re(7.5,24.5));ve.add(Lf.group);Gy(ve,Ue,{signPos:[6.5,0,14.5],signRy:-.5,plaquePos:[1,0,9.7],plaqueRy:-.35});const ps=I1(Ue);ps.group.position.set(-13.5,0,7);ve.add(ps.group);[[-4.2,4.6,1.3,.75],[6.8,4.4,1,.55],[-8.2,-6.2,1.5,.9],[13.5,-8.5,1.1,.4],[-16,3.5,.9,.65]].forEach(([i,t,e,n],s)=>{const r=wf(Ue,s+1,e,n,i,t);r.position.set(i,0,t),ve.add(r),Ta(r)});{const i=[[-4.2,4.6,1.3],[6.8,4.4,1],[-8.2,-6.2,1.5],[13.5,-8.5,1.1],[-16,3.5,.9]].map(([e,n,s],r)=>({x:e,y:.05,z:n,r:s,seed:700+r})),t=Tf(i);t&&ve.add(t)}[[0,-5.5],[-7.6,4.6],[7.5,-8.5]].forEach(([i,t],e)=>{const n=bf(Ue,10+e,i,t);ve.add(n),Ta(n)});[[-3.6,3.4,.55],[3.6,3.4,.5],[11,10.6,.6],[-11,10.6,.55],[-2,-8.6,.5]].forEach(([i,t,e],n)=>{const s=lh(20+n,e);s.position.set(i,.25,t),ve.add(s),Ta(s)});for(const[i,t,e,n,s]of[[0,4,8,2.5,31],[-6,13,7,4,32],[2,-7.5,20,1.5,33]]){const r=ch(s,60,[e,n]);r.position.set(i,.04,t),ve.add(r)}{const i=Ml(41,2.4,2);i.rotation.y=-Math.PI/2,i.position.set(-5.08,.9,-1),ve.add(i);const t=Ml(42,3,1.8);t.position.set(-9,.7,-8.92),ve.add(t);const e=Ml(43,2.4,1.8);e.rotation.y=Math.PI/2,e.position.set(-9.68,.7,13.5),ve.add(e)}for(const[i,t,e,n,s]of[[-5.4,2.4,1.6,1,51],[5.4,2.4,1.6,1,52],[-4.2,8.9,1.2,.8,53],[0,4.2,2.2,1.4,54]]){const r=Ef(s,e,n);r.position.set(i,.055,t),r.rotation.y=s,ve.add(r)}for(const[i,t,e,n,s]of[[-3.9,3.7,.9,.9,61],[3.1,3.7,.9,.9,62],[-8.4,2.2,.7,.7,63],[8.9,2.2,.7,.7,64]]){const r=Ef(s,e,n);r.position.set(i,.055,t),r.rotation.y=s*.7,ve.add(r)}for(const[i,t,e,n]of[[-7.5,2.45,71,24],[-1.2,2.45,72,24],[4.8,2.45,73,24],[8.6,3.4,74,18],[-4.2,10.6,75,14]]){const s=ch(e,n,[1.2,1.2]);s.position.set(i,.04,t),ve.add(s)}for(const[i,t,e,n]of[[-2.5,-5.5,.85,81],[3,-5.2,1,82]]){const s=lh(n,e);s.position.set(i,.25,t),ve.add(s),Ta(s)}{const i=(s,r)=>((Math.imul(s+1,2654435761)^Math.imul(r,40503))>>>0>>>0)/4294967296,t=[12728868,14711592,10115616,7178812],e=(s,r,o,a,l)=>{const c=new Te(.22,.18),h=new ye(c,Ue.mapleLeaf,a),d=new ne,u=new Nt;for(let f=0;f<a;f++){const g=i(f,l)*Math.PI*2,v=Math.sqrt(i(f,l+1))*o;d.position.set(s+Math.cos(g)*v,.05,r+Math.sin(g)*v),d.rotation.set(-Math.PI/2,0,i(f,l+2)*Math.PI*2),d.updateMatrix(),h.setMatrixAt(f,d.matrix),u.setHex(t[Math.floor(i(f,l+3)*t.length)]),u.offsetHSL((i(f,l+4)-.5)*.05,0,(i(f,l+5)-.5)*.08),h.setColorAt(f,u)}h.instanceMatrix.needsUpdate=!0,h.instanceColor&&(h.instanceColor.needsUpdate=!0),h.receiveShadow=!0,ve.add(h)};e(-4.2,4.6,1.1,60,91),e(6.8,4.4,1,50,92);const n=(s,r,o,a)=>{const l=new ye(new qc(.05,0),Ue.stone,40),c=new ne;for(let h=0;h<40;h++){c.position.set(s+i(h,a)*(r-s),.07,o+(i(h,a+1)-.5)*.5),c.rotation.set(i(h,a+2)*3,i(h,a+3)*3,0);const d=.7+i(h,a+4)*.8;c.scale.set(d,d*.75,d),c.updateMatrix(),l.setMatrixAt(h,c.matrix)}l.instanceMatrix.needsUpdate=!0,l.castShadow=!1,l.receiveShadow=!0,ve.add(l)};n(-6,-1,4.9,93),n(1,6,8.2,94)}const If=K1(Ue,{leafSources:[{x:-4.2,z:4.6,r:2.4},{x:6.8,z:4.4,r:2.4},{x:-8.2,z:-6.2,r:2.4},{x:13.5,z:-8.5,r:2.4},{x:-16,z:3.5,r:2.6}]});ve.add(If.group);const fd=Dn.group.getObjectByName("drainage")?.userData.waterMat||null,ss=q1({scene:ve,pondWaterMats:fd?[ps.waterMat,fd]:[ps.waterMat],wetMats:Ue._wet||[],heightFn:(i,t)=>Re(i,t),snowMats:[Ue.stone,Ue.gravel,Ue.grass,Ue.roofTile,Ue.roofTileAlt,Ue.ridge].filter(Boolean),dripPoints:Dn.dripPoints||[],basins:Dn.basins||[]}),Tc=Py(ve),Zs=Cy({renderer:Je,scene:ve,sun:vS,hemi:yS,skyMat:MS,houses:Dn.houses,lampGlows:bn.lampGlows,lampLights:bn.lampLights,vendGlow:bn.group.userData.vendGlow,stars:Tc.stars,moon:Tc.moon}),{camera:wi,controls:rs}=cy(Je),ms=Ly(wi,rs),Zo=[],Jo=[],ph={items:[]};function Tl(i,t,e,n,s,r){const o=i-e/2,a=i+e/2,l=t-n/2,c=t+n/2,h=.15;if(s===null)return[{x0:o,x1:a,z0:l,z1:c}];const d=s-.55,u=s+.55;return[{x0:o,x1:d,z0:c-h,z1:c+h},{x0:u,x1:a,z0:c-h,z1:c+h},{x0:o,x1:a,z0:l-h,z1:l+h},{x0:o-h,x1:o+h,z0:l,z1:c},{x0:a-h,x1:a+h,z0:l,z1:c},{x0:d,x1:u,z0:c-.35,z1:c+.35,blockWhen:r}]}function pd(i,t,e,n){if(!e)return null;const s=i/(t??3);return n+(e<0?-i/2+s*.5:i/2-s*.5)}try{for(const t of Dn.houses){if(t.name==="hero")continue;const e=t.params||{},n=e.w??6,s=e.d??6,r=(t.sliders||[]).length&&(e.doorSide??0)!==0?pd(n,e.facadeCols,e.doorSide,t.pos.x):null,o=()=>(t._slideItems||[]).some(a=>a&&a.target>.5);for(const a of Tl(t.pos.x,t.pos.z,n,s,r,o))Zo.push(a);r!==null&&Jo.push({x0:t.pos.x-n/2,x1:t.pos.x+n/2,z0:t.pos.z-s/2,z1:t.pos.z+s/2})}const i=zi.find(t=>t.name==="hero");if(i){const t=as&&typeof as.openBayX=="number"?as.openBayX+i.cx:null,e=()=>ph.items.some(n=>n&&n.target>.5);for(const n of Tl(i.cx,i.cz,i.w,i.d,t,e))Zo.push(n);t!==null&&Jo.push({x0:i.cx-i.w/2,x1:i.cx+i.w/2,z0:i.cz-i.d/2,z1:i.cz+i.d/2})}for(const t of Kr.houses){const e=t.params||{},n=e.w??t.w??6,s=e.d??t.d??6,r=(t.sliders||[]).length&&(e.doorSide??0)!==0?pd(n,e.facadeCols,e.doorSide,t.pos.x):null,o=()=>(t._slideItems||[]).some(a=>a&&a.target>.5);for(const a of Tl(t.pos.x,t.pos.z,n,s,r,o))Zo.push(a);r!==null&&Jo.push({x0:t.pos.x-n/2,x1:t.pos.x+n/2,z0:t.pos.z-s/2,z1:t.pos.z+s/2})}}catch{}const Xr=Uy(wi,Je.domElement,{heightFn:(i,t)=>{let e=0;try{e=Re(i,t)}catch{e=0}Number.isFinite(e)||(e=0);for(const n of Jo)if(i>n.x0&&i<n.x1&&t>n.z0&&t<n.z1)return Math.max(e,.7);return e},solids:Zo});window.__explore={get on(){try{return Xr.enabled}catch{return!1}}};window.addEventListener("tsuki-explore",i=>{try{let t=!1,e=null;try{const n=i&&i.detail;n&&typeof n=="object"?(t=!!n.on,e=n.spawn||null):t=!!n}catch{}if(t){try{ms.setMode("free")}catch{}rs.enabled=!1;const n=e||{x:0,z:10};Xr.setEnabled(!0,{x:n.x??0,z:n.z??10,yaw:Math.PI})}else{Xr.setEnabled(!1),rs.enabled=!0;try{ms.setMode("orbit")}catch{}}}catch{}});const Zr=Iy(wi,Je.domElement);for(const i of as.sliders||[]){const t=Zr.addSlide(i.node,i.open);t&&(t.t=0,ph.items.push(t))}for(const i of[...Dn.houses,...Kr.houses||[]]){i._slideItems=i._slideItems||[];for(const t of i.sliders||[])try{const e=Zr.addSlide(t.node,t.open);e&&(e.t=0,i._slideItems.push(e))}catch{}}{const i=(bn.group.userData.radioMeshes||[]).filter(Boolean);i.length&&Zr.onTap(i,()=>{try{const t=ci.state?ci.state():null;ci.setEnabled(t&&typeof t.enabled=="boolean"?!t.enabled:!0)}catch{}})}console.log("INTERACT targets: "+Zr.count);const ci=Ey({camera:wi,scene:ve,zones:zi});{const i=bn.group.userData.radioPos||new O(15.5,1.15,14.5);ci.source&&ci.source.position.copy(i)}new URLSearchParams(location.search).get("music")==="0"?ci.setEnabled(!1):Ty(ci);window.__audio=ci;ms.onMood(({time:i,wx:t}={})=>{i&&Zs.set(i),t&&ss.setState(t)});const Yr=Qy({renderer:Je,scene:ve,camera:wi});window.__post=Yr;try{const i=new URLSearchParams(location.search).get("post");Yr.setQuality(i==="high"?"high":i==="low"?"low":"off")}catch{try{Yr.setQuality("off")}catch{}}window.addEventListener("resize",()=>{try{Yr.setSize(window.innerWidth,window.innerHeight)}catch{}});const RS=ps.waterMat.color.clone(),md=new Nt;let Ac=60;window.__perf=()=>({calls:Je.info.render.calls,triangles:Je.info.render.triangles,geometries:Je.info.memory.geometries,fps:Math.round(Ac),errors:window.__errors||[]});window.__errors=[];window.addEventListener("error",i=>window.__errors.push(String(i.message)));Oy({daytime:Zs,weather:ss,cine:ms,hudEl:document.getElementById("hud"),audio:ci});{const i=new URLSearchParams(location.search),t=i.get("time"),e=i.get("wx"),n=i.get("shot");if(t&&Zs.set(t.toUpperCase()),e&&ss.setState(e.toLowerCase()),n!==null&&(ms.setMode("cine"),ms.goTo(Number(n)||0)),i.get("explore")==="1")try{const s=new URLSearchParams(location.search).get("exspawn");let r={x:0,z:10};if(s){const[o,a]=s.split(",").map(Number);Number.isFinite(o)&&Number.isFinite(a)&&(r={x:o,z:a})}window.dispatchEvent(new CustomEvent("tsuki-explore",{detail:{on:!0,spawn:r}}))}catch{}if(i.get("doors")==="1")try{for(const s of ph.items)s.target=1;for(const s of[...Dn.houses,...Kr.houses||[]])for(const r of s._slideItems||[])r.target=1}catch{}}const Al=new eh,mh=new URLSearchParams(location.search),Nf=mh.get("fixed")==="1",$o=Hy({fps:Number(mh.get("fps"))||30}),CS=mh.get("lodfar")==="1";let Rl=0;window.__cine={get frame(){return $o.frame},get t(){return $o.t},get fps(){return $o.fps},mode:Nf?"fixed":"wall"};let gd=!0;function Uf(){requestAnimationFrame(Uf);let i,t;if(Nf){const s=$o.step();i=s.dt,t=s.t}else Al.update(),i=Math.min(Al.getDelta(),.05),t=Al.getElapsed();i>0&&(Ac+=(1/Math.max(i,.001)-Ac)*.05),Rl++;const e=CS?2:wi.position.length()<60?0:wi.position.length()<120?1:2,n=e===0||(e===1?Rl%2===0:Rl%4===0);if(n){ps.update(t,ss),md.copy(RS).lerp(ve.fog.color,.35),ps.waterMat.color.lerp(md,.08),If.update(t,i);for(const s of dh)s(t)}as.noren.children.forEach((s,r)=>{s.rotation.x=Math.sin(t*1.3+r*.9)*.06*(.5+Hn.gust(t))}),qo.lantern.rotation.x=Math.sin(t*.8)*.03,qo.lantern.rotation.z=Math.cos(t*.6)*.03,qo.lanternLight.intensity=5+Math.sin(t*7.3)*.25+Math.sin(t*13.1)*.15,ss.update(i,t),Zs.update(i,ss);{const s=Zs.state,r=s==="NIGHT"||s==="MOONLIT"||s==="RAIN_NIGHT"||s==="MIST_NIGHT"?1:s==="SUNSET"||s==="BLUE_HOUR"?.45:0;AS.update(i,t,ss.state,r)}if(n&&Lf.update(t,i,sM(7.5,24.5,t)),Tc.setMoon(Zs.state==="NIGHT"?1:0),ms.update(i),ci.update(i),bn&&bn.group&&!bn.group.userData.__householdPushed){bn.group.userData.__householdPushed=!0;for(const s of Ec)bn.cloth.push(s)}Ry(bn,t,Hn),n&&WM(uh,t,Hn),Zr.update(i),Xr.update(i),Xr.enabled||rs.update(),dd&&dd.position.copy(wi.position);try{window.__cam={pos:wi.position.toArray(),tgt:rs&&rs.target?rs.target.toArray():[]}}catch{}if(Yr.render(),gd){gd=!1;const s=document.getElementById("loader");s.style.opacity="0",setTimeout(()=>s.remove(),700)}}Uf();
